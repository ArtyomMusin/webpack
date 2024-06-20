import { ModuleOptions } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/types'

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development'

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            {
                loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader
            },
            {
                loader: 'css-loader',
                options: {
                    url: false,
                    modules: {
                        getLocalIdent: (context, localIdentName, localName, options) => {
                            return `customPrefix${localName}`
                        }
                    }
                }
            },
            {
                loader: 'sass-loader',
            }
        ]
    }

    const cssLoader = {
        test: /\.css$/i,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [scssLoader, cssLoader, tsLoader]
}
