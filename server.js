import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config({ path: './config.env' })
import './config/db.js'
import noteRoutes from './routes/note.routes.js'

const app = express()

app.use(cors({
    mode: 'no-cors',
    credentials: true,
    origin: process.env.FRONT_URL,
    "Access-Control-Allow-Origin": process.env.FRONT_URL,
    'allowedHeaders': ['sessionId', 'Content-Type', 'Authorization'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET, OPTIONS, HEAD, PUT, PATCH, POST, DELETE',
    'preflightContinue': false,
}))
app.use(express.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({
    extended: false,
    limit: '50mb'
}))
app.use(bodyParser.json({ limit: '50mb' }))

app.use('/api/note', noteRoutes)

if (process.env.NODE_ENV !== 'production') {
    process.once('uncaughtException', err => {
        console.error(err.stack || err)
        setTimeout(() => process.exit(1), 100)
    })
}

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Serveur démarré : http://localhost:${PORT}`)
})