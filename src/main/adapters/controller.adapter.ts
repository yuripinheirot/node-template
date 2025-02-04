import { RequestHandler, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import { requestValidatorsAdapter } from './validators.adapter'

import { ControllerType } from '@/presentation/protocols/controller.type'
import { HttpRequest } from '@/presentation/protocols/http.type'
import { RouteAdapterOptions } from '@/domain/shared/types/route.type'
import { successResponse } from '@/presentation/helpers/http-success-response.helper'
import { errorResponse } from '@/presentation/helpers/http-error-response.helper'

import { BaseHttpError } from '../../presentation/errors/base-http.error'
import { logger } from '../factories/providers/logger-provider.factory'

const handleJsonResponse = (res: Response, httpResponse: any) => {
  res
    .status(httpResponse?.statusCode || StatusCodes.OK)
    .json(httpResponse?.response || successResponse())
}

const handleError = (error: any, res: Response) => {
  logger.error(error)

  let statusCode = StatusCodes.INTERNAL_SERVER_ERROR
  let response = errorResponse()

  if (error instanceof BaseHttpError) {
    statusCode = error.statusCode
    response = errorResponse({
      message: error.message,
      statusCode,
      body: error.data,
    })
  }

  res.status(statusCode).json(response)
}

export const controllerAdapter = (
  controller: ControllerType,
  options?: RouteAdapterOptions
): RequestHandler => {
  return async (req: Request, res: Response) => {
    try {
      const { body, query, params } = req
      const httpRequest: HttpRequest = {
        body,
        params,
        query,
      }

      if (options) {
        await requestValidatorsAdapter(options, httpRequest)
      }

      const httpResponse = await controller(httpRequest)

      return handleJsonResponse(res, httpResponse)
    } catch (error) {
      handleError(error, res)
    }
  }
}
