import { Router } from 'express'

import { controllerAdapter } from './controller.adapter'

import { AppRoute } from '@/types/route.type'
import { logger } from '@/providers/logger'

export const routeAdapter = (routes: AppRoute): Router => {
  const router = Router()

  routes.endpoints.forEach((route) => {
    const path = `${routes.basePath}${route.path}`
    const controller = controllerAdapter(route.controller, route.options)

    router[route.method](
      path,
      route.middlewares?.length
        ? [...route.middlewares, controller]
        : controller
    )

    logger.debug(`Route ${route.method.toUpperCase()} ${path} registered`)
  })

  return router
}
