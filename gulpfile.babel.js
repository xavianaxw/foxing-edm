import gulp, { series } from "gulp";

gulp.task("hello", (done) => {
  done();
});

export default series("hello");