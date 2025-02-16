import { BaseHttpError } from './base-http.error'

import { defaultMessagesApp } from '@/shared/constants/default-messages.const'

export class InternalServerError extends BaseHttpError {
  constructor(message = defaultMessagesApp.internalServerErrorResponse) {
    super(message, 500)
  }
}
