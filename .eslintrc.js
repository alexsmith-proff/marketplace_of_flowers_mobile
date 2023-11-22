module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      // your babel options
      presets: ["@babel/preset-env"],
    },
  },
  plugins: ['react', 'react-native'],
  env: {
      'react-native/react-native': true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-native/all'],
  rules: {
    'sort-keys': 0,
    "react-native/no-color-literals": 0,
    'no-console': 'off'
}
}