import express, { Express, Response } from 'express'
import morgan from 'morgan'
// import cors from 'cors'
import { createServer, Server } from 'http'
import { Server as ServerIO } from 'socket.io'

const app: Express = express()
export const httpServer: Server = createServer(app)
const io = new ServerIO(httpServer)

app.use(morgan('dev'))

app.get('/helloworld', (_, res: Response) => {
  res.send({ msg: 'hello world' })
})

// TODO: Can probably be in separate file
// SOCKET IMPLEMENTATION
io.on('connect', (socket) => {
  console.log('new socket connection established:', socket.id)
})
