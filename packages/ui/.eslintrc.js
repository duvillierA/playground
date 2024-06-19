const path = require('path')

/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  root: true,
  extends: ['@repo/eslint-config-custom/client'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: path.resolve(__dirname, 'tsconfig.json')
      }
    }
  },
  rules: {
    'import/no-extraneous-dependencies': ['warn', { devDependencies: true }]
  }
}

module.exports = config
