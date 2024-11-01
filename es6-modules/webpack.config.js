var path = require("path");

module.exports = {
  mode: "production",
  /**
   * entry: 웹팩에서 웹 자원을 변환하기 위해 필요한 최초 진입점이자 자바스크립트 파일 경로
   */
  entry: "./js/app.js",
  /**
   * output: 웹팩을 돌리고 난 결과물의 파일 경로
   */
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          /**
           * loader: 웹팩이 웹 애플리케이션을 해석할 때
           * 자바스크립트 파일이 아닌 웹 자원(HTML, CSS, Images, 폰트 등)들을 변환할 수 있도록 도와주는 속성
           */
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  stats: {
    colors: true,
  },
  devtool: "source-map",
};
