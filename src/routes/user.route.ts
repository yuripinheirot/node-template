import { AppRoute, EndpointMethod } from '@/types/route.type'
import { CreateUserRequestDto } from '@/modules/users/dtos/request/create-user.request.dto'

import { createUserController } from '../modules/users/factories/controllers/create.user.controller.factory'
import { listUserController } from '../modules/users/factories/controllers/list.user.controller.factory'

export const userRoutes: AppRoute = {
  basePath: '/users',
  endpoints: [
    {
      method: EndpointMethod.POST,
      path: '/',
      controller: createUserController.handle.bind(createUserController),
      options: {
        bodyValidator: CreateUserRequestDto,
      },
    },
    {
      method: EndpointMethod.GET,
      path: '/',
      controller: listUserController.handle.bind(listUserController),
    },
  ],
}
