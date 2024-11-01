var path = require("path");

module.exports = {
  mode: "none", // production(배포), development, none
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 모든 css 파일을 대상으로 함
        use: ["style-loader", "css-loader"], // 사용할 로더: 오른쪽에서 왼쪽의 순서로 적용되니 작성에 유의할 것!
      },
    ],
  },
};
