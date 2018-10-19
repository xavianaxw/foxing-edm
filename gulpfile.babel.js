import gulp, { series } from "gulp";

// Tasks
import { styles } from "./tasks/styles";

export default series(styles);
