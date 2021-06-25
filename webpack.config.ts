import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

const config = {
  entry: './frontend/src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist', 'frontend'),
    filename: 'ui.js'
  },
  module: {
    rules: [
      {
        test: /\.(tsx|js)$/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript'
          ]
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.js']
  },
  devServer: {
    proxy: {
      '/api': `http://localhost:${process.env.PORT}`
    },
    contentBase: path.resolve(__dirname, 'dist', 'frontend'),
    publicPath: '/',
    historyApiFallback: { index: 'index.html' }
  }
}

module.exports = config