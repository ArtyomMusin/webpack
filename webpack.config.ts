import path from 'path'
import webpack from 'webpack'
import { buildWebpack } from './config/build/buildWebpack'

type Mode = 'production' | 'development'

interface EnvVariables {
    mode: Mode,
    port: number
}

export default (env: EnvVariables) => {
    const paths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000, 
        mode: env.mode ?? 'development',
        paths
    }) 

    return config
}
