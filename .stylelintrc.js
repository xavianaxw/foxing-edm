module.exports = {
  extends: ["stylelint-config-prettier"],
  plugins: ["stylelint-scss", "stylelint-order"],
  rules: {
    "at-rule-blacklist": ["extend"],
    "at-rule-empty-line-before": null,
    "at-rule-no-vendor-prefix": true,
    "block-no-empty": true,
    "color-named": "never",
    "color-no-invalid-hex": true,
    "comment-empty-line-before": "always",
    "comment-no-empty": true,
    "comment-whitespace-inside": "always",
    "declaration-block-single-line-max-declarations": 1,
    "declaration-empty-line-before": null,
    "font-family-name-quotes": "always-where-required",
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-name-case": "lower",
    "function-url-quotes": "always",
    "function-whitespace-after": "always",
    "length-zero-no-unit": true,
    "max-nesting-depth": 4,
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "no-duplicate-selectors": true,
    "no-empty-source": true,
    "no-missing-end-of-source-newline": true,
    "no-unknown-animations": true,
    "number-max-precision": 7,
    "property-no-unknown": true,
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-max-compound-selectors": 5,
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-colon-notation": "single",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": "lower",
    "selector-type-no-unknown": true,
    "shorthand-property-no-redundant-values": true,
    "string-no-newline": true,
    "unit-no-unknown": true,
    "value-no-vendor-prefix": true,

    "scss/at-extend-no-missing-placeholder": true,
    "scss/at-function-pattern": "",
    "scss/at-mixin-pattern": "",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/partial-no-import": true,
    "scss/selector-no-redundant-nesting-selector": true,

    "order/order": [
      "at-rules",
      "dollar-variables",
      "custom-properties",
      "declarations",
      {
        type: "at-rule",
        name: "include",
        parameter: "mq",
        hasBlock: true,
      },
      {
        type: "at-rule",
        name: "include",
        parameter: "breakpoint",
        hasBlock: true,
      },
      {
        type: "at-rule",
        name: "media"
      },
      "rules",
    ],
    "order/properties-alphabetical-order": true,
  },
};