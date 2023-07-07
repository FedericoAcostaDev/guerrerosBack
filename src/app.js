import express from 'express'
import cors from 'cors'
import routes from './shared/routes.js'
import config from './config/index.js'
import healthCheckRoutes from './config/healthCheck.js'
import { corsOptions } from './config/cors.js'
import connectToDatabase from './config/database.js'
import errorHandler from './shared/helpers/errorHandler.js'

const { PORT } = config
const app = express()

app.use(express.json())
app.use(cors(corsOptions))
app.use('/healthcheck', healthCheckRoutes)
app.use('/api', routes)

app.use(errorHandler)
await connectToDatabase()

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
