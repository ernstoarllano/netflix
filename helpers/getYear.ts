export const getYear = (date: string) => {
  const newDate = new Date(date)
  const year = newDate.getFullYear()
  
  return year.toString()
}