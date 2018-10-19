import gulp from "gulp";
import sass from "gulp-sass";
import cleancss from "gulp-clean-css";
import stylelint from "gulp-stylelint";

import { styles as paths } from "./paths";
import { isProduction } from "./helpers";

export function compile() {
  return gulp
    .src(paths.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(paths.dest));
}

export function linting() {
  return gulp.src(paths.src).pipe(
    stylelint({
      failAfterError: isProduction,
      reports: [{ formatter: "verbose", console: true }],
      syntax: "scss",
    })
  );
}

export const styles = gulp.series(linting, compile);
