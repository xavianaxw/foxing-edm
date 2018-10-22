import { watch, series } from "gulp";

// Tasks
import { clean, afterBuildClean } from "./gulpfile/tasks/clean";
import { styles } from "./gulpfile/tasks/styles";
import { templates, templatesInlined } from "./gulpfile/tasks/templates";
import { serve, watchFiles } from "./gulpfile/tasks/server";

// Configuration files
import paths from "./gulpfile/config/paths";
import tasks from "./gulpfile/config/tasks";

// Globally expose config objects
global.PATHS = paths;
global.TASKS = tasks;

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
