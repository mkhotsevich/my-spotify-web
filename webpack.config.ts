import path from 'path';

import webpack from 'webpack';

import { webpackDevServer } from './config/webpack/webpack.dev-server';
import { webpackModules } from './config/webpack/webpack.modules';
import { webpackPlugins } from './config/webpack/webpack.plugins';
import { webpackResolvers } from './config/webpack/webpack.resolvers';
import { WebpackEnv, WebpackOptions } from './config/webpack/webpack.types';

export default (env: WebpackEnv) => {
  const rootDir = path.resolve(__dirname, '..', '..');
  const mode = env.mode || 'development';
  const port = env.port || 3000;

  const webpackOptions: WebpackOptions = {
    mode,
    port,
    isDev: mode === 'development',
    paths: {
      html: path.resolve(rootDir, 'public', 'index.html'),
      entry: path.resolve(rootDir, 'src', 'index.tsx'),
      build: path.resolve(rootDir, 'build'),
      src: path.resolve(rootDir, 'src'),
      public: path.resolve(rootDir, 'public'),
    },
  };

  const config: webpack.Configuration = {
    mode: webpackOptions.mode,
    entry: webpackOptions.paths.entry,
    resolve: webpackResolvers(webpackOptions),
    plugins: webpackPlugins(webpackOptions),
    module: webpackModules(webpackOptions),
    devtool: webpackOptions.isDev ? 'inline-source-map' : undefined,
    devServer: webpackOptions.isDev ? webpackDevServer(webpackOptions) : undefined,
    output: {
      filename: '[name].[contenthash].js',
      path: webpackOptions.paths.build,
      publicPath: '/',
      clean: true,
    },
  };

  return config;
};
