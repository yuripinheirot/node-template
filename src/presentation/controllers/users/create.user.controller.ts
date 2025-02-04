import { StatusCodes } from 'http-status-codes'

import { CreateUserRequestDto } from './dto/request/create-user.request.dto'

import { HttpRequest, HttpResponse } from '@/presentation/protocols/http.type'
import { CreateUserService } from '@/business/services/users/create.user.service'
import { AppController } from '@/presentation/protocols/app-controller.type'

import { successResponse } from '../../helpers/http-success-response.helper'

export class CreateUserController implements AppController {
  constructor(private readonly createUserService: CreateUserService) {}

  async handle(req: HttpRequest<CreateUserRequestDto>): Promise<HttpResponse> {
    const user = await this.createUserService.handle(req.body)

    return successResponse({
      statusCode: StatusCodes.CREATED,
      body: user,
    })
  }
}
