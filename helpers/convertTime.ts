export const convertTime = (total: number) => {
  const hours = Math.floor(total / 60)
  const minutes = total % 60

  return `${hours}h ${minutes}m`
}