import del from "del";

export function clean() {
  return del(["public"]);
}

export function afterBuildClean() {
  return del(["public/layouts"]);
}
