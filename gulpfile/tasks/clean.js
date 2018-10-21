import del from "del";
import pathBuilder from "../lib/path-builder";

export function clean() {
  return del([pathBuilder(PATHS.public)]);
}

export function afterBuildClean() {
  return del([pathBuilder(PATHS.public, "layouts")]);
}
