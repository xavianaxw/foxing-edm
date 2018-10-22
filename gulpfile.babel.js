import { watch, series } from "gulp";

// Tasks
import { clean, afterBuildClean } from "./gulpfile/tasks/clean";
import { styles } from "./gulpfile/tasks/styles";
import { templates, templatesInlined } from "./gulpfile/tasks/templates";
import { reload, serve } from "./gulpfile/tasks/server";

// Configuration files
import paths from "./gulpfile/config/paths";
import tasks from "./gulpfile/config/tasks";
import pathBuilder from "./gulpfile/lib/path-builder";

// Globally expose config objects
global.PATHS = paths;
global.TASKS = tasks;

function watchFiles() {
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

// Commands
// gulp
export default series(
  clean,
  styles,
  templates,
  afterBuildClean,
  serve,
  watchFiles
);

// gulp build
export const build = series(clean, styles, templatesInlined, afterBuildClean);
