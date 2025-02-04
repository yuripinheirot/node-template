import express from 'express'

import { connectDB } from './configs/mongodb.config'
import { generateSwaggerDocumentation } from './configs/swagger.config'
import { registerMiddlewares } from './middlewares'

import { registerRoutes } from '../routes'

export const buildApp = async () => {
  const app = express()

  await connectDB()
  generateSwaggerDocumentation()

  registerMiddlewares(app)
  registerRoutes(app)

  return app
}
