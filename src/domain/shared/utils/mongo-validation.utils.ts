import mongoose from 'mongoose'
const { ObjectId } = mongoose.Types

export const isValidMongoId = (mongoId: string) => {
  return ObjectId.isValid(mongoId)
}

export const parseToMongoObject = (mongoId: string) => {
  return new ObjectId(mongoId.toString())
}
