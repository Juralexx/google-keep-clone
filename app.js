import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { rateLimit } from 'express-rate-limit'
import ExpressMongoSanitize from 'express-mongo-sanitize'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config({ path: './config.env' })
import './config/db.js'
import path from 'path'
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import noteRoutes from './routes/note.routes.js'

const app = express()

const FRONT_URL = process.env.NODE_ENV !== 'production' ? process.env.DEV_FRONT_URL : process.env.FRONT_URL

app.use(cors({
    'credentials': true,
    'origin': FRONT_URL,
    'allowedHeaders': ['Content-Length', 'Content-Type', 'application', 'Authorization'],
    'methods': 'GET, PUT, POST, DELETE',
    'preflightContinue': false,
}))

app.use(helmet({
    crossOriginEmbedderPolicy: false,
    // crossOriginResourcePolicy: false,
    crossOriginResourcePolicy: {
        policy: 'cross-origin'
    },
    originAgentCluster: true,
    contentSecurityPolicy: {
        useDefaults: true,
        directives: {
            "img-src": ["'self'", "https: data:"],
            "default-src": ["*"]
        }
    }
}))

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 150,
    standardHeaders: true,
    legacyHeaders: false,
    message: 'Too Many Request from this IP, your IP has been blocked. Please try again later.'
})

app.use(limiter)

app.use(express.json({ limit: '15kb' }))
app.use(bodyParser.urlencoded({
    extended: false,
    limit: '15kb'
}))

app.use(bodyParser.json({ limit: '15kb' }))

app.use(ExpressMongoSanitize({
    allowDots: true,
}));

const router = express.Router()

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, `./build/`)))

    router.get('/', (_, res) => {
        res.sendFile(path.join(__dirname, 'index.html'))
    });
}

app.use('/', router)
app.use('/api/note', noteRoutes)

app.get("*", async (req, res) => {
    return res.status(400).json({ error: `This route doesn't exists.` })
})

if (process.env.NODE_ENV !== 'production') {
    process.once('uncaughtException', err => {
        console.error(err.stack || err)
        setTimeout(() => process.exit(1), 100)
    })
}

const PORT = process.env.PORT || 5003

app.listen(PORT, () => {
    console.log(`Serveur démarré : http://localhost:${PORT}`)
})