import swaggerJSDoc from 'swagger-jsdoc'

import fs from 'fs'

import { logger } from '../factories/providers/logger-provider.factory'

export function generateSwaggerDocumentation(): void {
  const options: swaggerJSDoc.Options = {
    swaggerDefinition: {
      info: {
        title: 'Resolve',
        version: '1.0.0',
      },
      securityDefinitions: {
        BasicAuth: {
          type: 'basic',
        },
      },
      security: [
        {
          BasicAuth: [],
        },
      ],
    },
    apis: ['./src/routes/*.route.ts'],
  }

  const swaggerSpec = swaggerJSDoc(options)
  const outputFile = './public/api/docs/swagger.json'

  fs.writeFileSync(outputFile, JSON.stringify(swaggerSpec, null, 2))

  logger.info('Successfully generated Swagger documentation')
}
