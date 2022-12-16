
module.exports = {

  sourceType: "unambiguous",  // Fue Necesario para poder usar módulos CommonJS desde typescript.

  presets: [
    [
        "@babel/preset-env",
        {
          useBuiltIns: "entry",
          corejs: 3,
          targets: "> 0.25%, not dead"
        }
    ],
    "@babel/preset-react",
    "@babel/typescript"
  ],

  plugins: [      
    "@babel/plugin-proposal-class-properties",
    "@babel/proposal-object-rest-spread",
    ["@babel/plugin-transform-runtime", {
        regenerator: true,
        corejs: 3
    }]      
  ]
}
