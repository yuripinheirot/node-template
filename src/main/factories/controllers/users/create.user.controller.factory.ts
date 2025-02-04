import { CreateUserController } from '@/presentation/controllers/users/create.user.controller'
import { CreateUserService } from '@/business/services/users/create.user.service'

export const createUserController = new CreateUserController(
  new CreateUserService()
)
