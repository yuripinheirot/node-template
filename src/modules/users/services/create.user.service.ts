import { UserModel } from '@/modules/users/models/user.model'
import { AppService } from '@/types/service.type'

import { CreateUserRequestDto } from '../controllers/dto/request/create-user.request.dto'

export class CreateUserService implements AppService {
  async handle(dto: CreateUserRequestDto) {
    const user = new UserModel(dto)
    await user.save()

    return user
  }
}
