require('dotenv').config()
const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ENV = process.env.APP_ENV;
const isProd = ENV === 'prod';

function setDevTool() {  
  if (isProd) {
    return 'source-map';
  } else {
    return 'eval-source-map';
  }
}


const paths = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'), 
  img: path.resolve(__dirname, 'src/assets'),
}

const config = {
  context: paths.src,
  entry: {
    app: './app'
  },
  output: {
    path: paths.dist,
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devtool: setDevTool(),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        
          test: /\.s[ac]ss$/i,
          use: [
            // fallback to style-loader in development
             MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
      //   test: /\.s[ac]ss$/i,
      //   use: [{
      //       loader: "style-loader" 
      //   }, {
      //       loader: "css-loader" 
      //   }, {
      //       loader: "sass-loader",
      //       options: {
      //         sourceMap: true,
      //       },
      //   }],
      // },
        { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' }
    ]
  },
  plugins:[
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new webpack.DefinePlugin({  
      API_KEY: JSON.stringify(process.env.API_KEY)
  }),
  new MiniCssExtractPlugin({
    path: paths.dist,
    filename: 'css/[name].css',
    chunkFilename: 'css/[id].css',
  }),
  ],
  devServer: {  
    contentBase: './src/',
    port: 7700, 
  } 
};

if (isProd) {
  config.plugins.push(
      new UglifyJSPlugin(),
      new CopyWebpackPlugin([{
        from: __dirname + '/public'
    }])
  );
  }
module.exports = config;