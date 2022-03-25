module.exports = {
  indexTemplate: require("./src/images/imageIndexTemplate.js"),
  ext: "tsx",
  dimensions: false,
  svgProps: {
    fill: "currentColor",
    height: "80%",
    width: "80%",
  },
  // removeDimensions: true,
  // plugins: [
  // "removeDimensions"
  // {
  //     name: 'preset-default',
  //     params: {
  //       overrides: {
  //         removeDimensions: true,
  //       },
  //     },
  //   },
  // ]
  // svgoConfig: {
  //     plugins: [
  //         { removeViewBox: false },
  //         { removeUselessStrokeAndFill: true },
  //         { removeAttrs: {
  //             attrs: "*:(stroke|fill|fill-opacity|fill-rule):((?!^none$).)*"
  //         }
  //         }
  //     ]
  // }
};
