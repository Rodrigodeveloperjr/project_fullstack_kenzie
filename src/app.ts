import { handleErrorMiddleware } from './middlewares/handleError.middleware'
import express from 'express'
import 'express-async-errors'
import 'reflect-metadata'
import 'dotenv'


const app = express()
app.use(express.json())

app.use(handleErrorMiddleware)

export { app }
