import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'
import routes from './shared/router/routes.js'
import connectToDatabase from './config/database.js'
import healthCheckRoutes from './config/healthCheck.js'
import config from './config/index.js'
import { corsOptions } from './config/cors.js'
import { swaggerOptions } from './config/swagger.js'

const { PORT } = config
const app = express()
const swaggerSpec = swaggerJSDoc(swaggerOptions)

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(morgan('dev'))
app.use(cors(corsOptions))
app.use('/', healthCheckRoutes)
app.use('/api', routes)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

await connectToDatabase()

app.listen(PORT, () =>
  console.log(`listening on port https://localhost:${PORT}`)
)
