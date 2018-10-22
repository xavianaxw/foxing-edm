import browserSync from "browser-sync";

const server = browserSync.create();

export function reload(cb) {
  server.reload();
  cb();
}

export function serve(cb) {
  server.init({
    server: {
      baseDir: "./public",
    },
  });
  cb();
}
