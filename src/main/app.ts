import express from 'express'

import { connectDB } from './configs/mongodb.config'
import { registerMiddlewares } from './middlewares'

import { registerRoutes } from '../routes'

export const buildApp = async () => {
  const app = express()

  await connectDB()

  registerMiddlewares(app)
  registerRoutes(app)

  return app
}
