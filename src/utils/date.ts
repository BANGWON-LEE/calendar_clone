export function getWeekDates(date: Date) {
  const day = date.getDay()
  const diff = day === 0 ? -6 : 1 - day
  const monday = new Date(date)
  monday.setDate(date.getDate() + diff)

  return Array.from({ length: 7 }, (_, i) => {
    const thisMondayDate = new Date(monday)
    thisMondayDate.setDate(thisMondayDate.getDate() + i)
    const dates = new Date(thisMondayDate).getDate()
    return dates
  })
}

export function getYearAndMonth(date: Date) {
  const day = date.getDay()
  const diff = day === 0 ? -6 : 1 - day
  const monday = new Date(date)
  monday.setDate(date.getDate() + diff)

  const mondayYear = monday.getFullYear()
  const mondayMonth = monday.getMonth() + 1
  console.log('what', monday)
  const sunday = new Date(monday.setDate(monday.getDate() + 6))
  const sundayYear = sunday.getFullYear()
  const sundayMonth = sunday.getMonth() + 1
  //   const year = monday.getFullYear() === sunday.getFullYear() ? monday.getFullYear() :
  const resultStart = `${
    mondayYear === sundayYear && mondayYear
  }년 ${mondayMonth}월`

  const middleLine =
    mondayYear < sundayYear || mondayMonth < sundayMonth ? ' - ' : ''

  const resultEnd = `${mondayYear < sundayYear ? sundayYear + '년 ' : ''} ${
    mondayMonth < sundayMonth ? sundayMonth + '월' : ''
  } `

  const resultTotal = resultStart + middleLine + resultEnd
  return resultTotal
}
