import gulp from "gulp";
import inliner from "gulp-inline-css";
import twig from "gulp-twig";
import data from "gulp-data";

import paths from "../config/paths";
import pathBuilder from "../lib/path-builder";

export function compile() {
  return gulp
    .src(pathBuilder(paths.src, paths.templates.src, "**/*.twig"))
    .pipe(
      data(() => {
        return {
          title: "Hello World",
        };
      })
    )
    .pipe(twig())
    .pipe(gulp.dest(pathBuilder(paths.public, paths.templates.public)));
}

export function inlineCss() {
  return gulp
    .src(pathBuilder(paths.src, paths.templates.src, "**/*.html"))
    .pipe(
      inliner({
        applyLinkTags: true,
        applyTableAttributes: true,
        removeLinkTags: true,
        removeHtmlSelectors: true,
      })
    )
    .pipe(gulp.dest(paths.public, paths.templates.public));
}

export const templates = gulp.series(compile, inlineCss);
