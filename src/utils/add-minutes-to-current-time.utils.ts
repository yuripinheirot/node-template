export const addMinutesToCurrentTime = (minutes: number) => {
  const date = new Date()
  date.setMinutes(date.getMinutes() + minutes)
  return date
}
