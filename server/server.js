import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './database/db.js'

dotenv.config()

const server = express()
const port = process.env.PORT || 8000


server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cors({
    origin: '*',
    credentials: true,
}))
server.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send({ message: 'Something went wrong!' })
})

const startServer = async () => {
    try {
        await connectDB()
        server.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })
    } catch (error) {
        console.error('Failed to start the server:', error.message)
        process.exit(1)
    }
}

startServer()
