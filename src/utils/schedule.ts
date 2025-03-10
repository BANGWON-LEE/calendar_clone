import {
  choiceTimeRangeType,
  targetSchedulePathType,
} from '../type/schduleType'

export function makeTimeInterval(): number[] {
  const start = 15.5
  const step = 24
  const count = 48

  const numbers = Array.from({ length: count }, (_, i) => start + i * step)

  return numbers
}

export function adjustAutoSchedule(target: number): number {
  const timeArray = makeTimeInterval()
  const checkIndex = timeArray.findIndex(path => target < path)

  return timeArray[checkIndex - 1]
}

export function makeTimeAreaInterval(day: Date) {
  const pathStart = 15.5
  const pathStep = 12
  const pathCnt = 96

  const numbers = Array.from(
    { length: pathCnt },
    (_, i) => pathStart + i * pathStep
  )
  return function () {
    const timeTerm = 15
    day.setHours(0, 0, 0, 0)

    const timeObj = numbers.reduce((acc, key) => {
      acc[key] = day.setMinutes(day.getMinutes())
      day.setMinutes(day.getMinutes() + timeTerm)
      return acc
    }, {} as Record<string, number>)

    return timeObj
  }
}

export function choiceTimeRange(
  targetSchedulePath: targetSchedulePathType,
  listTimeScheduleObj: Record<string, number>
): choiceTimeRangeType {
  const pathStep = 12
  return {
    start: listTimeScheduleObj[`${targetSchedulePath.y}`],
    end: listTimeScheduleObj[`${targetSchedulePath.y! + pathStep}`],
  }
}

function convertTo12HourFormat(hour: number): number {
  return hour % 12 === 0 ? 12 : hour % 12
}

function convertDateFormat(date: Date) {
  const settingDate =
    `${Number(date.getHours()) < 12 ? '오전 ' : '오후'}` +
    convertTo12HourFormat(date.getHours()) +
    '시 ' +
    date.getMinutes() +
    '분'

  return settingDate
}

export function setTimeAreaFormat(pathTimeArea: choiceTimeRangeType) {
  const start = convertDateFormat(new Date(pathTimeArea.start))
  const end = convertDateFormat(new Date(pathTimeArea.end))

  return { start: start, end: end }
}
