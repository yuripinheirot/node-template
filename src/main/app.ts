import express from 'express'

import { connectDB } from './configs/mongodb.config'
import { generateSwaggerDocumentation } from './configs/swagger.config'
import { registerRoutes } from './routes'
import { registerMiddlewares } from './middlewares'

export const buildApp = async () => {
  const app = express()

  await connectDB()
  generateSwaggerDocumentation()

  registerMiddlewares(app)
  registerRoutes(app)

  return app
}
