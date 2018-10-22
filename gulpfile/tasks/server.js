import { series, watch } from "gulp";
import browserSync from "browser-sync";

// Tasks
import { styles } from "../tasks/styles";
import { templates } from "../tasks/templates";

import pathBuilder from "../lib/path-builder";

const server = browserSync.create();

export function watchFiles() {
  // Sass
  watch(
    pathBuilder(PATHS.src, PATHS.stylesheets.src, "**/*.scss"),
    series(styles, reload)
  );
  // Templates
  watch(
    [
      pathBuilder(PATHS.src, PATHS.templates.src, "**/*.twig"),
      `!${pathBuilder(
        PATHS.src,
        PATHS.templates.src,
        `**/{${TASKS.templates.excludeFolders.join(",")}}/**`
      )}`,
    ],
    series(templates, reload)
  );
}

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
