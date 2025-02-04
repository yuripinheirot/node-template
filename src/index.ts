import 'module-alias/register'
import 'reflect-metadata'
import 'es6-shim'

import { buildApp } from './main/app'
import { env } from './main/configs/envs.config'

import { logger } from '@/providers/logger'

buildApp().then((app) => {
  app.listen(env.PORT, () => {
    logger.info(`Node is running on port ${env.PORT} 🚀`)
  })
})
