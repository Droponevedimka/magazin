const path = require('path');
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
    mode: 'development',
    entry: {
      main: './src/main.js'
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../dist'),
    },
    module: {
        rules: [  
          {
            test: /\.vue$/,
            loader: 'vue-loader',
            // options: {
            //   loaders: {
            //     'scss': [
            //       'vue-style-loader',
            //       'css-loader',
            //       'sass-loader'
            //     ],
            //     'sass': [
            //       'vue-style-loader',
            //       'css-loader',
            //       'sass-loader?indentedSyntax'
            //     ]
            //   }
            // }
          },
          {
            test: /\.css$/,
            use: [
              'vue-style-loader',
              'css-loader'
            ],
          },   
          
                     
            // {
            //     test: /\.css$/,
            //     oneOf: [                    
            //         {
            //           resourceQuery: /module/,
            //           use: [
            //             'vue-style-loader',
            //             {
            //               loader: 'css-loader',
            //               options: {
            //                 modules: true,
            //                 localIdentName: '[local]_[hash:base64:5]'
            //               }
            //             },
            //             'sass-loader'
            //           ]
            //         },                    
            //         {
            //           use: [
            //             'vue-style-loader',
            //             'css-loader',
            //             'sass-loader'
            //           ]
            //         }
            //       ]
            // },
            // {
            //     test: /\.sass$/,
            //     use: [
            //         'vue-style-loader',
            //         'css-loader',
            //         {
            //         loader: 'sass-loader',
            //         options: {                        
            //             sassOptions: {
            //                 indentedSyntax: true
            //             }
            //         }
            //         }
            //     ]
            // },
            // {
            //     test: /\.pug$/,
            //     oneOf: [                   
            //         {
            //           resourceQuery: /^\?vue/,
            //           use: ['pug-plain-loader']
            //         },                    
            //         {
            //           use: ['raw-loader', 'pug-plain-loader']
            //         }
            //     ]      
            // }
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ]
}