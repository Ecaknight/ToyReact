module.exports = {
  entry: {
    main: './main.js',
  },
  // 配置babel-loader
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['@babel/plugin-transform-react-jsx', { pragma: "ToyReact.createElement" }]
            ],
          },
        },
      }
    ]
  },
  mode: 'development',
  optimization: {
    minimize: false
  },
}