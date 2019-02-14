const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
       entry: './src/index.tsx',
       output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'bundle.js'
       },
       resolve:{
         extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
       },
       module: {
         rules: [
           {
             test: /\.tsx?$/,
             loader: 'awesome-typescript-loader',
             
           },
           {
             test: /\.scss$/,
             use: [ 
               devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 
               'css-loader', 
               'sass-loader' 
             ],
           },
           {
             test: /\.(png|jpg|gif|svg)$/,
             use: [
               {
                 loader: 'file-loader',
                 options: {
                   name: '[path][name].[ext]',
                   publicPath: '/',
                   outputPath: 'assets/'
                 },
               }
             ]
           },
           {
             test: /\.(woff(2)?|ttf|eot|svg|otf)$/,
             use: [
               {
                 loader: 'file-loader',
                 options: {
                   name: '[path][name].[ext]',
                   publicPath: '/',
                   outputPath: 'fonts/'
                 },
               }
             ]
           },
           {
             enforce: 'pre',
             test: /\.js$/,
             loader: 'source-map-loader'
           }
         ]
      },
      plugins: [
        new HTMLWebpackPlugin({
          template: 'src/index.html'
        }),
        new MiniCssExtractPlugin('style.css')
      ],
      devtool: 'source-map'
};

//'./style.css'