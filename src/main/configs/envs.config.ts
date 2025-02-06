import dotenv from 'dotenv'

dotenv.config()

export const env = {
  API_PREFIX: process.env.API_PREFIX || '/api',
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 2024,
  MONGO_URI:
    process.env.MONGO_URI || 'mongodb://localhost:27017/node-template-db-dev',
}
