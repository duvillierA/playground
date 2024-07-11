const TailwindConfig = require('@repo/ui/config/tailwind.config.js')

/** @type {import('tailwindcss').Config} */
const config = {
  ...TailwindConfig,
  content: [...TailwindConfig.content, './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}']
}

module.exports = config
