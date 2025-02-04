import { IUser } from '../domain/user/models/user.model'

declare module 'express-serve-static-core' {
  interface Request {
    user?: IUser
  }
}
