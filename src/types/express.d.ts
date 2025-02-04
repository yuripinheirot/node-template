import { UserModel } from '../modules/users/models/user.model'

declare module 'express-serve-static-core' {
  interface Request {
    user?: UserModel
  }
}
