/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator'

@ValidatorConstraint({ async: false })
class IsValidFilenameConstraint implements ValidatorConstraintInterface {
  validate(filename: any, _args: ValidationArguments) {
    const VALID_FILE_REGEXP = /^.+\.(csv|xls|xlsx)$/
    return typeof filename === 'string' && VALID_FILE_REGEXP.test(filename)
  }

  defaultMessage(_args: ValidationArguments) {
    return 'Filename must end with .csv, .xls, or .xlsx'
  }
}

export function IsValidFilename(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsValidFilenameConstraint,
    })
  }
}
