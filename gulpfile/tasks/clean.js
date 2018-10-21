import del from "del";

import paths from "../config/paths";
import pathBuilder from "../lib/path-builder";

export function clean() {
  return del([pathBuilder(paths.public)]);
}

export function afterBuildClean() {
  return del([pathBuilder(paths.public, "layouts")]);
}
