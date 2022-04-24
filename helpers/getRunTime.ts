export const getRunTime = (total: number) => {
  const hours = Math.floor(total / 60)
  const minutes = total % 60

  return hours === 0 ? `${minutes}m` : `${hours}h ${minutes}m`
}