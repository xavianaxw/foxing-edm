import gulp from "gulp";
import inliner from "gulp-inline-css";
import twig from "gulp-twig";
import data from "gulp-data";

import pathBuilder from "../lib/path-builder";

export function compile() {
  return gulp
    .src(pathBuilder(PATHS.src, PATHS.templates.src, "**/*.twig"))
    .pipe(
      data(() => {
        return {
          title: "Hello World",
        };
      })
    )
    .pipe(twig())
    .pipe(gulp.dest(pathBuilder(PATHS.public, PATHS.templates.public)));
}

export function inlineCss() {
  return gulp
    .src(pathBuilder(PATHS.src, PATHS.templates.src, "**/*.html"))
    .pipe(
      inliner({
        applyLinkTags: true,
        applyTableAttributes: true,
        removeLinkTags: true,
        removeHtmlSelectors: true,
      })
    )
    .pipe(gulp.dest(PATHS.public, PATHS.templates.public));
}

export const templates = gulp.series(compile, inlineCss);
