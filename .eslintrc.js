// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    browser: true,
    es6: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "import/prefer-default-export": "off",
    "no-console": "off",
    "no-use-before-define": "warn",
    "no-useless-escape": "off",
    "quotes": "off",
    "comma-dangle": "off",
    "vue/no-unused-components": "off",
    "arrow-parens": "off",
    "semi": "off"
  }
}
