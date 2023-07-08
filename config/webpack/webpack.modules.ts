import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

import { WebpackOptions } from './webpack.types';

export const webpackModules = ({ isDev }: WebpackOptions): webpack.ModuleOptions => {
  const tsLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const svgLoader: webpack.RuleSetRule = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  // const babelLoader = {
  //   test: /\.(js|jsx|tsx)$/,
  //   exclude: /node_modules/,
  //   use: {
  //     loader: 'babel-loader',
  //     options: {
  //       presets: ['@babel/preset-env'],
  //       plugins: [
  //         [
  //           'i18next-extract',
  //           {
  //             locales: ['ru', 'en'],
  //             keyAsDefaultValue: true,
  //           },
  //         ],
  //       ],
  //     },
  //   },
  // };
  //
  const cssLoader: webpack.RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };

  const fileLoader: webpack.RuleSetRule = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'media',
        },
      },
    ],
  };

  return {
    rules: [tsLoader, cssLoader, fileLoader, svgLoader],
  };
};
