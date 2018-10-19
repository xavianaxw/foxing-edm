import { series } from "gulp";

// Tasks
import { clean } from "./tasks/clean";
import { styles } from "./tasks/styles";

export default series(clean, styles);
