import { handleErrorMiddleware } from './middlewares/handleError.middleware'
import { app_routes } from './routes'
import express from 'express'
import 'express-async-errors'
const cors = require('cors')
import 'reflect-metadata'
import 'dotenv'


const app = express()
app.use(express.json())

app.use(cors())

app_routes(app)

app.use(handleErrorMiddleware)

export { app }
