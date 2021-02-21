export const getYearsArray = (): number[] => {
  const yearStart = 1923
  const yearEnd = new Date().getUTCFullYear()

  const arr: number[] = []

  for (let i = yearStart; i < yearEnd + 1; i++) {
    arr.push(i)
  }
  return arr
}
