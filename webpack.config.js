const path = require('path');

module.exports = {
  entry: './src/index.js',  // Your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,  // Handle .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,  // Handle .css files
        use: ['style-loader', 'css-loader']  // Apply style-loader and css-loader
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']  // Resolve JS, JSX, and CSS extensions
  },
  mode: 'production'  // Set production mode for optimization
};
