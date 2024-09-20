import mongoose from 'mongoose'
import { MONGODB_URI } from './db/connection'
import { httpServer } from './app'

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3001

httpServer.listen(port, async () => {
  try {
    const connection = await mongoose.connect(MONGODB_URI)
    console.log('Database connected:', connection.version)
  } catch (error) {
    console.log('Error connecting to MongoDB:')
    console.error(error)
  }
  console.log(`Server listening on port ${port}`)
})
