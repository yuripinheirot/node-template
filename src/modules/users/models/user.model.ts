import mongoose, { Document, Schema } from 'mongoose'

export interface UserType extends Document {
  username: string
  password: string
  email: string
  document: string
  phone: string
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  document: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
})

export const UserModel = mongoose.model<UserType>('User', UserSchema)
