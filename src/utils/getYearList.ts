export const getYearsArray = (): number[] => {
  const yearStart = 1923
  const yearEnd = new Date().getUTCFullYear()

  const arr: number[] = []

  for (let i = yearEnd; i >= yearStart; i--) {
    arr.push(i)
  }
  return arr
}
