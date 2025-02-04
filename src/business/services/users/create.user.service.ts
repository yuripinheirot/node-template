import { AppService } from '@/business/types/service.type'
import { UserModel } from '@/domain/user/models/user.model'
import { CreateUserRequestDto } from '@/presentation/controllers/users/dto/request/create-user.request.dto'

export class CreateUserService implements AppService {
  async handle(dto: CreateUserRequestDto) {
    const user = new UserModel(dto)
    await user.save()

    return user
  }
}
