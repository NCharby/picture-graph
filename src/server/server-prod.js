//@flow

import path from 'path'
import express from 'express'

import { ApolloServer } from 'apollo-server-express'

import { resolvers } from './g/resolvers/index'
import { typeDefs } from './g/schema/index'
import { ImageAPI } from './g/resolvers/index'

const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, 'index.html')

const GraphQlServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
      return { ImageAPI: new ImageAPI() }
  }
});

GraphQlServer.applyMiddleware({ app })

app.use(express.static(DIST_DIR))

app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})