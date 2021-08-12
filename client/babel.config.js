module.export = {
  "plugins": ["@babel/plugin-proposal-nullish-coalescing-operator", "@babel/plugin-syntax-dynamic-import"],
  "presets": ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript", ["transform-runtime", {
    "polyfill": true,
    "regenerator": true
  }]]
}
