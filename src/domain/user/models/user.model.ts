import mongoose, { Document, Schema } from 'mongoose'

export interface IUser extends Document {
  username: string
  password: string
  comparePassword(password: string): Promise<boolean>
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

export const UserModel = mongoose.model<IUser>('User', UserSchema)
