import { handleErrorMiddleware } from './middlewares/handleError.middleware'
import { app_routes } from './routes'
import express from 'express'
import 'express-async-errors'
import 'reflect-metadata'
import 'dotenv'


const app = express()
app.use(express.json())

app_routes(app)

app.use(handleErrorMiddleware)

export { app }
