import gulp from "gulp";
import imagemin from "gulp-imagemin";

import pathBuilder from "../lib/path-builder";

export function images() {
  return gulp
    .src(pathBuilder(PATHS.src, PATHS.images.src, "**/*.{png,jpg}"))
    .pipe(imagemin())
    .pipe(gulp.dest(pathBuilder(PATHS.public, PATHS.images.public)));
}
