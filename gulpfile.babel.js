import { series } from "gulp";

// Tasks
import { clean, afterBuildClean } from "./tasks/clean";
import { styles } from "./tasks/styles";
import { templates } from "./tasks/templates";

export default series(clean, styles, templates, afterBuildClean);
