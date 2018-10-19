const ASSET_ROOT = "src";
const DEST_ROOT = "public";

export const styles = {
  src: `${ASSET_ROOT}/stylesheets/**/*.scss`,
  dest: `${DEST_ROOT}/stylesheets`,
};

export const html = {
  src: `${ASSET_ROOT}/templates/**.*.html`,
  dest: `${DEST_ROOT}`,
};
