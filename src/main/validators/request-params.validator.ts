import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'

import { logger } from '@/main/factories/providers/logger-provider.factory'
import { formatValidationErrors } from '@/utils/format-validation-errors.utils'
import { BadRequestError } from '@/errors'

export const requestParamsValidator = async (
  validator: new () => any,
  params: any
) => {
  const validatorInstance = plainToClass(validator, params)
  const errors = await validate(validatorInstance, {
    whitelist: true,
    forbidNonWhitelisted: true,
  })

  if (errors.length) {
    const formattedErrors = formatValidationErrors(errors)

    logger.error(
      `[ParamsValidationMiddleware] - Validation error: ${JSON.stringify(formattedErrors)}`
    )

    throw new BadRequestError('Invalid path params', formattedErrors)
  }
}
