import { series } from "gulp";

// Tasks
import { clean, afterBuildClean } from "./gulpfile/tasks/clean";
import { styles } from "./gulpfile/tasks/styles";
import { templates } from "./gulpfile/tasks/templates";

// Configuration files
import paths from "./gulpfile/config/paths";
import tasks from "./gulpfile/config/tasks";

// Globally expose config objects
global.PATHS = paths;
global.TASKS = tasks;

export default series(clean, styles, templates, afterBuildClean);
