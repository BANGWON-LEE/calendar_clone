import days from '../../constant/week.json'
import times from '../../constant/dayTime.json'
import { useSelector } from 'react-redux'
import { RootState } from '../../stores/dateStore'
import { formatDays, formatOnlyDates, getWeekDates } from '../../utils/date'
import ScheduleDetail from './ScheduleDetail'

export default function ScheduleMain() {
  const week = days

  // const weekArr = Array.from({ length: 7 }, () => [])

  const choiceDate = useSelector((state: RootState) => state.date.choiceDay)

  const weekDateArr = getWeekDates(new Date(choiceDate)).map(date => {
    return formatOnlyDates(date)
  })

  const weekDaysArr = getWeekDates(new Date(choiceDate)).map(date => {
    return formatDays(date)
  })

  return (
    <div className="schedule_block">
      <div className="week_container">
        <div className="week_block">
          <div className="week_block_inner">
            {week.days.map(day => {
              return (
                <div key={day} className="week_block_inner_box">
                  <button className="week_block_inner_box_btn">{day}</button>
                </div>
              )
            })}
          </div>
        </div>
        <div className="week_block">
          <div className="week_block_inner">
            {weekDateArr.map(date => {
              return (
                <div key={date} className="week_block_inner_date_box">
                  <button className="week_block_inner_date_box_btn">
                    {date}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="schedule_main_block">
        <div className="time_block">
          <div className="time_block_kor_time">GMT+09</div>
          {times.times.map(time => {
            return (
              <div key={time} className="time_block_kor_time_inner">
                <div className="time_block_kor_time_inner_text">{time}</div>
                <div className="time_block_kor_time_inner_line" />
              </div>
            )
          })}
        </div>
        <div className="date_block">
          {weekDaysArr.map(day => {
            return (
              <div key={day.toString()} className="date_block_inner">
                <ScheduleDetail day={day} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
