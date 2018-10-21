import gulp from "gulp";
import sass from "gulp-sass";
import cleancss from "gulp-clean-css";
import stylelint from "gulp-stylelint";

import paths from "../config/paths";
import pathBuilder from "../lib/path-builder";
import { isProduction } from "../lib/helpers";

export function compile() {
  return gulp
    .src(pathBuilder(paths.src, paths.stylesheets.src, "**/*.scss"))
    .pipe(sass().on("error", sass.logError))
    .pipe(cleancss())
    .pipe(gulp.dest(pathBuilder(paths.public, paths.stylesheets.public)));
}

export function linting() {
  return gulp
    .src(pathBuilder(paths.src, paths.stylesheets.src, "**/*.scss"))
    .pipe(
      stylelint({
        failAfterError: isProduction,
        reports: [{ formatter: "verbose", console: true }],
        syntax: "scss",
      })
    );
}

export const styles = gulp.series(linting, compile);
