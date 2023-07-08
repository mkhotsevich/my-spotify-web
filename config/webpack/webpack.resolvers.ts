import webpack from 'webpack';
import { WebpackOptions } from './webpack.types';

export const webpackResolvers = (webpackOptions: WebpackOptions): webpack.ResolveOptions => {
  return {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    preferAbsolute: true,
    modules: [webpackOptions.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  };
};
