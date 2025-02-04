import { Express } from 'express'

import { userRoutes } from './user.route'
import { statusRoutes } from './status.route'

import { env } from '../configs/envs.config'
import { routeAdapter } from '../adapters/route.adapter'

const { API_PREFIX } = env

export const registerRoutes = (app: Express) => {
  app.use(API_PREFIX, routeAdapter(userRoutes))
  app.use(API_PREFIX, routeAdapter(statusRoutes))
}
