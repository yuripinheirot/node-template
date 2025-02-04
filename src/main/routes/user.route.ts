import { CreateUserRequestDto } from '@/presentation/controllers/users/dto/request/create-user.request.dto'
import { AppRoute, EndpointMethod } from '@/domain/shared/types/route.type'

import { createUserController } from '../factories/controllers/users/create.user.controller.factory'

/**
 * @openapi
 * /api/user:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     parameters:
 *       - in: header
 *         name: authorization
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 format: email
 *                 description: User's email
 *               password:
 *                 type: string
 *                 description: User's password
 *                 minLength: 8
 *                 maxLength: 24
 *     responses:
 *       '201':
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: User's ID
 *                 username:
 *                   type: string
 *                   description: User's email
 *                 __v:
 *                   type: number
 *                   description: Version key
 *       '400':
 *         description: Bad request
 */
export const userRoutes: AppRoute = {
  basePath: '/user',
  endpoints: [
    {
      method: EndpointMethod.POST,
      path: '/',
      controller: createUserController.handle.bind(createUserController),
      options: {
        bodyValidator: CreateUserRequestDto,
      },
    },
  ],
}
