const path = require('path')

module.exports = {
  "root": true,
  "extends": [
    "@repo/eslint-config-custom/client"
  ],
  "parserOptions": {
    "tsconfigRootDir": __dirname,
    "project": [
      "./tsconfig.json"
    ]
  },
  "settings": {
    "import/resolver": {
      "typescript": {
        "project":  path.resolve(__dirname, "tsconfig.json"),
      }
    }
  }
}
