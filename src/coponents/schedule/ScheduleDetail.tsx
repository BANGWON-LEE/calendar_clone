import { useRef, useState } from 'react'
import RegisterScheduleModal from '../modal/RegisterScheduleModal'
import { useSelector } from 'react-redux'
import { RootState } from '../../stores/dateStore'

export default function ScheduleDetail(props: schedlueDetailType) {
  const { index } = props

  const scheduleRegisterdArr = useSelector(
    (state: RootState) => state.schedule.scheduleRegisterArr
  )

  console.log('scheduleRegisterdArr', scheduleRegisterdArr)

  const schdeuleRef = useRef<HTMLDivElement | null>(null)

  const [scheduleModalState, setScheduleModalState] = useState<boolean>(false)

  function openScheduleModal(): void {
    setScheduleModalState(true)
  }

  function removeLastSchedule() {
    scheduleArr.pop()
  }

  function closeScheduleModal(): void {
    setScheduleModalState(false)
  }

  const [scheduleArr, setScheduleArr] = useState<
    {
      title: string
      type: string
      time: Date | string
      x: number
      y: number
    }[]
  >([])
  console.log('scheduleRegisterdArr@@', scheduleArr)

  //   function registerSchedule() {
  //     dispatch(addSchedule(scheduleArr))
  //   }

  function setTargetSchedule(event: React.MouseEvent<HTMLDivElement>): void {
    if (!schdeuleRef.current) return
    const gridSize = 350
    const boundingRect = schdeuleRef.current.getBoundingClientRect()

    // 부모 div 기준 상대적인 좌표 계산
    const relativeX = event.clientX - boundingRect.left
    const relativeY = event.clientY - boundingRect.top

    const snappedX = Math.floor(relativeX / gridSize) * gridSize

    setScheduleArr(prev => [
      ...prev,
      {
        title: '(제목 없음)',
        type: '이벤트',
        time: '오전 x시 ~ 오전 x시',
        x: snappedX,
        y: relativeY,
      },
    ])

    openScheduleModal()
  }

  return (
    <>
      <div
        ref={schdeuleRef}
        key={'innerDay' + index}
        className="date_block_detail"
        onClick={event => setTargetSchedule(event)}
      >
        {scheduleArr.map((sd, index) => {
          return (
            <div
              key={'schedule' + index}
              role="button"
              className="date_block_detail_inner"
              style={{
                top: sd.y,
                left: sd.x,
              }}
            >
              {'schedule' + index}
            </div>
          )
        })}
      </div>
      {scheduleModalState && (
        <RegisterScheduleModal
          closeScheduleModal={closeScheduleModal}
          removeLastSchedule={removeLastSchedule}
        />
      )}
    </>
  )
}

interface schedlueDetailType {
  index: string
}
