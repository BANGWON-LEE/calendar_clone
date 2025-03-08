export function makeTimeInterval(): number[] {
  const start = 15.5
  const step = 24
  const count = 23

  const numbers = Array.from({ length: count }, (_, i) => start + i * step)

  return numbers
}

export function adjustAutoSchedule(target: number): number {
  const timeArray = makeTimeInterval()
  const checkIndex = timeArray.findIndex(path => target < path)

  return timeArray[checkIndex - 1]
}
