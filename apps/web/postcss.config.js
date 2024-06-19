// NextJs caveat
// Do not use require() to import the PostCSS Plugins. Plugins must be provided as strings.

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}

module.exports = config
