export const addMinutesToCurrentTime = (minutes: number) => {
  const minutesInMilliSeconds = minutes * 60 * 1000

  return new Date(Date.now() + minutesInMilliSeconds)
}

const REGEX_DATE_FORMAT = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/

export const isDateOnFormatRegex = (date: string) => {
  return REGEX_DATE_FORMAT.test(date)
}
