import { UserType } from '@/modules/users/types/user.type'

export class UseResponserDto implements UserType {
  _id: string
  username: string

  constructor(data: Partial<UseResponserDto>) {
    Object.assign(this, data)
  }
}
