import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})

const connectDB = async () => {
    try {
        const connection = await db.getConnection()
        console.log('Database connected successfully')
        connection.release()
    } catch (error) {
        console.error(`Database connection failed: ${error.message}`)
        throw error
    }
}

const closeDB = async () => {
    try {
        await db.end()
        console.log('Database connection pool closed')
    } catch (error) {
        console.error(`Error closing the database connection pool: ${error.message}`)
    }
}

export { db, connectDB, closeDB }