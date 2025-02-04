import { StatusCodes } from 'http-status-codes'

import { defaultMessagesApp } from '@/domain/shared/constants/default-messages.const'

import { HttpResponse, ResponseParams } from '../protocols/http.type'

export const errorResponse = (
  params: ResponseParams = {
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    message: defaultMessagesApp.internalServerErrorResponse,
    body: undefined,
  }
): HttpResponse => ({
  statusCode: params.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
  message: params.message || defaultMessagesApp.internalServerErrorResponse,
  response: params.body,
})
