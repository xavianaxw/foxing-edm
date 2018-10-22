/*
===============================================================================
  Configurations related to build tasks
===============================================================================
*/

import { isProduction } from "../lib/helpers";

export default {
  stylesheets: {
    sass: {
      includePaths: ["./node_modules"],
    },
    stylelint: {
      failAfterError: isProduction,
      reports: [{ formatter: "verbose", console: true }],
      syntax: "scss",
    },
  },

  templates: {
    excludeFolders: ["layouts", "shared", "data"],
    inliner: {
      applyLinkTags: true,
      applyTableAttributes: true,
      removeLinkTags: true,
      removeHtmlSelectors: true,
    },
  },
};
