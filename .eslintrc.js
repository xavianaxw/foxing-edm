module.exports = {
  "extends": [
    "eslint:recommended",
    "prettier",
  ],
  "plugins": [
    "prettier"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {},
      {
        "usePrettierrc": true,
      },
    ]
  },
  "globals": {
    "window": true,
    "document": true
  }
};