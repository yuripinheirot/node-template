import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'

import { logger } from '@/main/factories/providers/logger-provider.factory'
import { formatValidationErrors } from '@/domain/shared/utils/format-validation-errors.utils'
import { BadRequestError } from '@/presentation/errors'

export const requestQueryValidator = async (
  validator: new () => any,
  query: any
) => {
  const validatorInstance = plainToClass(validator, query)

  const errors = await validate(validatorInstance, {
    whitelist: true,
    forbidNonWhitelisted: true,
  })

  if (errors.length) {
    const formattedErrors = formatValidationErrors(errors)
    logger.error(
      `[QueryValidationMiddleware] - Validation error: ${JSON.stringify(formattedErrors)}`
    )

    throw new BadRequestError('Invalid query params', formattedErrors)
  }
}
