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
    extensions: ["sass", "scss", "css"],
  },

  html: {
    excludeFolders: ["layouts", "shared", "data"],
    extensions: ["html", "njk", "json"],
    inliner: {
      applyLinkTags: true,
      applyTableAttributes: true,
      removeLinkTags: true,
      removeHtmlSelectors: true,
    },
  },
};
