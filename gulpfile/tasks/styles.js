import gulp from "gulp";
import sass from "gulp-sass";
import cleancss from "gulp-clean-css";
import stylelint from "gulp-stylelint";

import pathBuilder from "../lib/path-builder";

export function compile() {
  return gulp
    .src(pathBuilder(PATHS.src, PATHS.stylesheets.src, "**/*.scss"))
    .pipe(sass().on("error", sass.logError))
    .pipe(cleancss())
    .pipe(gulp.dest(pathBuilder(PATHS.public, PATHS.stylesheets.public)));
}

export function linting() {
  return gulp
    .src(pathBuilder(PATHS.src, PATHS.stylesheets.src, "**/*.scss"))
    .pipe(stylelint(TASKS.stylesheets.stylelint));
}

export const styles = gulp.series(linting, compile);
