import { series } from "gulp";

// Tasks
import { clean, afterBuildClean } from "./gulpfile/tasks/clean";
import { styles } from "./gulpfile/tasks/styles";
import { templates } from "./gulpfile/tasks/templates";

export default series(clean, styles, templates, afterBuildClean);
