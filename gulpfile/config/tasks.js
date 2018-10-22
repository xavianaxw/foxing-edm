/*
===============================================================================
  Configurations related to build tasks
===============================================================================
*/

export default {
  stylesheets: {
    sass: {
      includePaths: ["./node_modules"],
    },
    stylelint: {
      failAfterError: true,
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
