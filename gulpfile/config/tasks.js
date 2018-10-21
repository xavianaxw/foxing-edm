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
    extensions: ["sass", "scss", "css"],
    stylelint: {
      failAfterError: isProduction,
      reports: [{ formatter: "verbose", console: true }],
      syntax: "scss",
    },
  },

  templates: {
    excludeFolders: ["layouts", "shared", "data"],
    extensions: ["html", "twig", "json"],
    inliner: {
      applyLinkTags: true,
      applyTableAttributes: true,
      removeLinkTags: true,
      removeHtmlSelectors: true,
    },
  },
};
