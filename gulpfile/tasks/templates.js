import gulp from "gulp";
import inliner from "gulp-inline-css";
import twig from "gulp-twig";
import data from "gulp-data";

import fs from "fs";
import path from "path";

import pathBuilder from "../lib/path-builder";

function importData(file) {
  const dataFile = pathBuilder(
    PATHS.src,
    PATHS.templates.src,
    "data",
    `${path.basename(file.basename, ".twig")}.json`
  );

  if (fs.existsSync(dataFile)) {
    return JSON.parse(fs.readFileSync(dataFile, "utf8"));
  } else {
    return JSON.parse(
      fs.readFileSync(
        pathBuilder(PATHS.src, PATHS.templates.src, "data", "default.json"),
        "utf8"
      )
    );
  }
}

export function compile() {
  const exclude =
    "!" +
    pathBuilder(
      PATHS.src,
      PATHS.templates.src,
      `**/{${TASKS.templates.excludeFolders.join(",")}}/**`
    );

  return gulp
    .src([pathBuilder(PATHS.src, PATHS.templates.src, "**/*.twig"), exclude])
    .pipe(data(importData))
    .pipe(
      twig({
        base: pathBuilder(PATHS.src, PATHS.templates.src),
      })
    )
    .pipe(gulp.dest(pathBuilder(PATHS.public, PATHS.templates.public)));
}

export function inlineCss() {
  return gulp
    .src(pathBuilder(PATHS.public, PATHS.templates.public, "**/*.html"))
    .pipe(inliner(TASKS.templates.inliner))
    .pipe(gulp.dest(PATHS.public, PATHS.templates.public));
}

export const templates = gulp.series(compile);
export const templatesInlined = gulp.series(compile, inlineCss);
