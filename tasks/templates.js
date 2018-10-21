import gulp from "gulp";
import inject from "gulp-inject";
import inliner from "gulp-inline-css";
import twig from "gulp-twig";
import data from "gulp-data";

import { templates as templatePaths, styles as stylePaths } from "./paths";

export function injectCss() {
  return gulp
    .src(templatePaths.src)
    .pipe(
      inject(
        gulp.src(`${stylePaths.dest}/*.css`, {
          read: false,
        })
      )
    )
    .pipe(gulp.dest(templatePaths.dest));
}

export function compile() {
  return gulp
    .src(templatePaths.src)
    .pipe(
      data(() => {
        return {
          title: "Hello World",
        };
      })
    )
    .pipe(twig())
    .pipe(gulp.dest(templatePaths.dest));
}

export function inlineCss() {
  return gulp
    .src(`${templatePaths.dest}/*.html`)
    .pipe(
      inliner({
        applyLinkTags: true,
        applyTableAttributes: true,
        removeLinkTags: true,
        removeHtmlSelectors: true,
      })
    )
    .pipe(gulp.dest(templatePaths.dest));
}

export const templates = gulp.series(compile, inlineCss);
