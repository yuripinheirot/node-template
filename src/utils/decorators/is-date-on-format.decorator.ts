import {
  ValidationOptions,
  isISO8601,
  registerDecorator,
} from 'class-validator'

const isDateOnFormat = {
  validate(payload: string) {
    if (isISO8601(payload)) {
      return true
    }

    return false
  },
}

export function IsDateOnFormat(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsDateOnFormat',
      target: object.constructor,
      propertyName: propertyName,
      options: {
        message: 'Date must be on the format yyyy-MM-dd',
        ...validationOptions,
      },
      validator: isDateOnFormat,
    })
  }
}
