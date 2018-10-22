import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import cleancss from "gulp-clean-css";

import pathBuilder from "../lib/path-builder";

export function compile() {
  return gulp
    .src(pathBuilder(PATHS.src, PATHS.stylesheets.src, "**/*.scss"))
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cleancss())
    .pipe(gulp.dest(pathBuilder(PATHS.public, PATHS.stylesheets.public)));
}

export const styles = gulp.series(compile);
