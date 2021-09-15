// module.exports = {
//     module: {
//         rules: [
//             {
//                 test: /\.sass$/,
//                 include: paths.appSrc,
//                 use: [
//                   require.resolve('style-loader'),
//                   {
//                     loader: require.resolve('css-loader'),
//                     options: {
//                       importLoaders: 1,
//                     },
//                   },
//                   {
//                     loader: require.resolve('sass-loader')
//                   }
//                 ]
//               },
//         ]
//     }
// }