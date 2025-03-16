import { useRef } from 'react'
import '../../styles/main/modal.scss'

export default function RegisterScheduleModal(
  props: RegisterScheduleModalType
) {
  const { closeScheduleModal, removeLastSchedule, addScheduleArr } = props

  function closeModalAndRemoveLastSchedule() {
    closeScheduleModal()
    removeLastSchedule()
  }

  const inputTitleRef = useRef<HTMLInputElement | null>(null)

  return (
    <div className="modal_block">
      <div className="modal_block_inner">
        <div className="modal_block_inner_close">
          <button
            onClick={closeModalAndRemoveLastSchedule}
            className="modal_block_inner_close_btn"
          >
            x
          </button>
        </div>
        <input
          type="text"
          placeholder="제목 추가"
          ref={inputTitleRef}
          // onChange={event => titleText(event.currentTarget.value)}
        />
        <div className="modal_schedule_type">
          <div className="modal_schedule_type_inner">
            <button>이벤트</button>
          </div>
          <div className="modal_schedule_type_inner">
            <button>할 일</button>
          </div>
          <div className="modal_schedule_type_inner">
            <button>알람</button>
          </div>
        </div>
        <div>
          <button onClick={() => addScheduleArr(inputTitleRef)}>저장</button>
        </div>
      </div>
    </div>
  )
}

type RegisterScheduleModalType = {
  closeScheduleModal: () => void
  removeLastSchedule: () => void
  addScheduleArr: (
    inputTitleRef: React.RefObject<HTMLInputElement | null>
  ) => void
}
