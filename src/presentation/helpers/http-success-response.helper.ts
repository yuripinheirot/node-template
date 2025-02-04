import { StatusCodes } from 'http-status-codes'

import { defaultMessagesApp } from '@/domain/shared/constants/default-messages.const'

import { HttpResponse, ResponseParams } from '../protocols/http.type'

export const successResponse = (
  params: ResponseParams = {
    statusCode: StatusCodes.OK,
    message: defaultMessagesApp.successResponse,
    body: undefined,
  }
): HttpResponse => ({
  statusCode: params.statusCode || StatusCodes.OK,
  message: params.message || defaultMessagesApp.successResponse,
  response: params.body,
})
