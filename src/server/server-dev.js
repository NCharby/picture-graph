//@flow

import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.dev.config.js'

import { ApolloServer } from 'apollo-server-express'

import { resolvers } from './g/resolvers/index'
import { typeDefs } from './g/schema/index'
import { ImageAPI } from './g/resolvers/index'

const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, 'index.html'),
            compiler = webpack(config)

const GraphQlServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
      return { ImageAPI: new ImageAPI() }
  }
});

GraphQlServer.applyMiddleware({ app })

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.get('*', (req, res, next: (any) => void) => {
    //$FlowFixMe - webpack type needs updating
    compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
        if (err) {
            return next(err)
        }
        res.set('content-type', 'text/html')
        res.send(result)
        res.end()
    })
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})