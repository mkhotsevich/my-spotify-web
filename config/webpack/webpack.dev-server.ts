import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { WebpackOptions } from './webpack.types';

export const webpackDevServer = (webpackOptions: WebpackOptions): DevServerConfiguration => {
  return {
    open: true,
    historyApiFallback: true,
    hot: true,
    port: webpackOptions.port,
    static: webpackOptions.paths.build,
  };
};
