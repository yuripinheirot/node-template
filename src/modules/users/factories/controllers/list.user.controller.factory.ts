import { ListUserController } from '@/modules/users/controllers/list.user.controller'
import { ListUserService } from '@/modules/users/services/list.user.service'

const listUserService = new ListUserService()
export const listUserController = new ListUserController(listUserService)
