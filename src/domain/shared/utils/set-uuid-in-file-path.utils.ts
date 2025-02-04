import { v4 as uuidv4 } from 'uuid'

export const setUuidInFilePath = (filename: string) => {
  const fileParts = filename.split('.')
  const extension = fileParts.pop()
  const baseName = fileParts.join('.')
  return `${baseName}-${uuidv4()}.${extension}`
}
