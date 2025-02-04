import { StatusCodes } from 'http-status-codes'

import { AppRoute, EndpointMethod } from '@/types/route.type'
import { successResponse } from '@/helpers/http-success-response.helper'
export const statusRoutes: AppRoute = {
  basePath: '/status',
  endpoints: [
    {
      method: EndpointMethod.GET,
      path: '/',
      controller: () => {
        return successResponse({
          statusCode: StatusCodes.OK,
          body: { message: 'Server is running' },
        })
      },
    },
  ],
}
