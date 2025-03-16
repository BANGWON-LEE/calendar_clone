import { useRef, useState } from 'react'
import RegisterScheduleModal from '../modal/RegisterScheduleModal'
import {
  adjustAutoSchedule,
  choiceTimeRange,
  makeTimeAreaInterval,
  setTimeAreaFormat,
} from '../../utils/schedule'
import {
  schedlueDetailType,
  setTimeAreaFormatType,
  targetSchedulePathType,
} from '../../type/schduleType'

export default function ScheduleDetail(props: schedlueDetailType) {
  const { day } = props

  const schdeuleRef = useRef<HTMLDivElement | null>(null)

  const [scheduleModalState, setScheduleModalState] = useState<boolean>(false)

  function openScheduleModal(): void {
    setScheduleModalState(true)
  }

  function removeLastSchedule() {
    scheduleArr.pop()
  }

  function closeScheduleModal(): void {
    setInitialSchedule(undefined)
    setScheduleModalState(false)
  }

  const [initialSchedule, setInitialSchedule] = useState<{
    title: string
    type: string
    time: string
    x: number | undefined
    y: number | undefined
  }>()

  const [scheduleArr, setScheduleArr] = useState<
    {
      title: string
      type: string
      time: string
      x: number | undefined
      y: number | undefined
    }[]
  >([])

  function setTargetSchedule(
    event: React.MouseEvent<HTMLDivElement>
  ): targetSchedulePathType {
    if (!schdeuleRef.current) return { x: undefined, y: undefined }
    const gridWidthSize = 350
    const boundingRect = schdeuleRef.current.getBoundingClientRect()

    // 부모 div 기준 상대적인 좌표 계산
    const relativeX = event.clientX - boundingRect.left
    const relativeY = event.clientY - boundingRect.top

    const snappedX = Math.floor(relativeX / gridWidthSize) * gridWidthSize
    const snappedY = adjustAutoSchedule(relativeY)

    return { x: snappedX, y: snappedY }
  }

  function setInitialSettingBlock(
    targetSchedulePath: targetSchedulePathType,
    timeArea: setTimeAreaFormatType
  ): void {
    setInitialSchedule({
      title: '( 제목 없음 )',
      type: '이벤트',
      time: `${timeArea.start + ' ~ ' + timeArea.end}`,
      x: targetSchedulePath.x,
      y: targetSchedulePath.y,
    })
  }

  function addScheduleArr(
    inputTitleRef: React.RefObject<HTMLInputElement | null>
  ): void {
    const title = inputTitleRef.current?.value
    if (initialSchedule === undefined || title === undefined) return

    console.log('input', inputTitleRef.current?.value)

    setScheduleArr(prev => [
      ...prev,
      {
        title: title,
        type: '이벤트',
        time: `${initialSchedule.time}`,
        x: initialSchedule.x,
        y: initialSchedule.y,
      },
    ])
    setInitialSchedule(undefined)
    closeScheduleModal()
  }

  function setInitialTotalSchedule(
    event: React.MouseEvent<HTMLDivElement>
  ): void {
    const targetSchedulePath = setTargetSchedule(event)
    const listTimeScheduleObj = makeTimeAreaInterval(day)
    const pathTimeArea = choiceTimeRange(
      targetSchedulePath,
      listTimeScheduleObj()
    )

    const timeArea = setTimeAreaFormat(pathTimeArea)

    setInitialSettingBlock(targetSchedulePath, timeArea)
    openScheduleModal()
  }

  return (
    <>
      <div
        ref={schdeuleRef}
        className="date_block_detail"
        onClick={event => setInitialTotalSchedule(event)}
      >
        {initialSchedule !== undefined && (
          <div
            role="button"
            className="date_block_detail_inner"
            style={{
              top: initialSchedule.y,
              left: initialSchedule.x,
            }}
          >
            <p>{initialSchedule.title}</p>
            <p>{initialSchedule.time}</p>
          </div>
        )}
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
              <p>{sd.title}</p>
              <p>{sd.time}</p>
            </div>
          )
        })}
      </div>
      {scheduleModalState && (
        <RegisterScheduleModal
          closeScheduleModal={closeScheduleModal}
          removeLastSchedule={removeLastSchedule}
          addScheduleArr={addScheduleArr}
          // titleText={titleText}
        />
      )}
    </>
  )
}
