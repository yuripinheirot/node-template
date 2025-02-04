import * as cnpj from '@fnando/cnpj'
import * as cpf from '@fnando/cpf'
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator'

@ValidatorConstraint({ async: false })
class isCpnjOrCpf implements ValidatorConstraintInterface {
  validate(payload: string) {
    if (cpf.isValid(payload) || cnpj.isValid(payload)) {
      return true
    }
    return false
  }
}

export function IsCpnjOrCpf(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: {
        message: 'document must be valid',
        ...validationOptions,
      },
      constraints: [],
      validator: isCpnjOrCpf,
    })
  }
}
