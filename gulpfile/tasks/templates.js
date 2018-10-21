import gulp from "gulp";
import inliner from "gulp-inline-css";
import twig from "gulp-twig";
import data from "gulp-data";

import pathBuilder from "../lib/path-builder";
import { fetchData } from "../lib/helpers";

export function compile() {
  const exclude =
    "!" +
    pathBuilder(
      PATHS.src,
      PATHS.templates.src,
      `**/{${TASKS.templates.excludeFolders.join(",")}}/**`
    );

  return gulp
    .src([
      pathBuilder(
        PATHS.src,
        PATHS.templates.src,
        `**/*.{${TASKS.templates.extensions}}`
      ),
      exclude,
    ])
    .pipe(data(fetchData))
    .pipe(twig())
    .pipe(gulp.dest(pathBuilder(PATHS.public, PATHS.templates.public)));
}

export function inlineCss() {
  return gulp
    .src(pathBuilder(PATHS.public, PATHS.templates.public, "**/*.html"))
    .pipe(inliner(TASKS.templates.inliner))
    .pipe(gulp.dest(PATHS.public, PATHS.templates.public));
}

export const templates = gulp.series(compile, inlineCss);
