import express, { Express } from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'
import dotenv from 'dotenv'

import database from './database'

import usersRoute from './routes/auth'
;(async () => {
  const server: Express = express()
  const PORT = process.env.PORT || 4000
  dotenv.config()

  server.use(bodyParser.json())
  server.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
  server.use(express.urlencoded({ extended: true }))
  server.use(compression())
  server.use(express.json())

  server.use('/api', usersRoute)

  try {
    await database
      .authenticate()
      .then(() => {
        database.sync()
        server.listen(PORT, () =>
          console.log(`Example app listening on port ${PORT}`)
        )
      })
      .catch((err) => {
        console.log('Error connecting to database', err)
      })
  } catch (e) {
    console.log(e)
    process.exit(1)
  }
})()
