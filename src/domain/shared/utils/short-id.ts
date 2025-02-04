import moment from 'moment'

import { createHash } from 'crypto'

export const generateShortId = (): string => {
  const timestamp = moment().format('YYYYMMDD')
  const random = createHash('sha1')
    .update(Math.random().toString())
    .digest('hex')
    .substring(0, 5)
  return `${timestamp}${random.toUpperCase()}`
}
