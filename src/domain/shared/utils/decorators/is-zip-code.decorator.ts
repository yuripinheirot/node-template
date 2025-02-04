import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator'

@ValidatorConstraint({ async: false })
class isZipCode implements ValidatorConstraintInterface {
  validate(payload: string) {
    // Formato esperado: 12345-678 ou 12345678
    const zipCodePattern: RegExp = /^\d{5}-?\d{3}$/
    return zipCodePattern.test(payload)
  }
}

export function IsZipCode(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: isZipCode,
    })
  }
}
