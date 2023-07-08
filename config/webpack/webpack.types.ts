import webpack from 'webpack';

type WebpackPaths = {
    html: string
    entry: string
    build: string
    src: string
    public: string
}

export type WebpackOptions = {
    mode: webpack.Configuration['mode']
    paths: WebpackPaths
    isDev: boolean
    port: number
}

export type WebpackEnv = {
    mode: 'production' | 'development'
    port: number;
}
