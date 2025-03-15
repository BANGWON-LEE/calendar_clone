import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../stores/dateStore'
import { getYearAndMonth } from '../../../utils/date'
import { beforeWeek, nextWeek, todayDate } from '../../../slices/dateSlice'
import searchIcon from '../../../assets/search-icon.png'
import questionIcon from '../../../assets/question-icon.png'
import settingIcon from '../../../assets/setting-icon.png'

export default function CenterHeader() {
  const nowDate = useSelector((state: RootState) => state.date.choiceDay)

  const nowYearAndMonth = getYearAndMonth(new Date(nowDate))
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="header_block_center">
      <div className="header_block_center_left_box">
        <div className="today_block">
          <button
            onClick={() => dispatch(todayDate())}
            className="today_block_btn"
          >
            오늘
          </button>
        </div>
        <div className="arrow_block">
          <div className="arrow_left">
            <button
              onClick={() => dispatch(beforeWeek(7))}
              className="arrow_left_btn"
            >
              <svg focusable="false" width="24" height="24" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"></path>
              </svg>
            </button>
          </div>
          <div className="arrow_right">
            <button
              onClick={() => dispatch(nextWeek(7))}
              className="arrow_right_btn"
            >
              <svg focusable="false" width="24" height="24" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="date_block">
          <div className="date_block_text">{nowYearAndMonth}</div>
        </div>
      </div>
      <div className="header_block_center_right_box">
        <div className="sub_menu_block">
          <button className="sub_menu_block_btn">
            <img
              className="sub_menu_block_btn_img"
              src={searchIcon}
              alt="검색"
            />
          </button>
        </div>
        <div className="sub_menu_block">
          <button className="sub_menu_block_btn">
            <img
              className="sub_menu_block_btn_img"
              src={questionIcon}
              alt="도움말"
            />
          </button>
        </div>
        <div className="sub_menu_block">
          <button className="sub_menu_block_btn">
            <img
              className="sub_menu_block_btn_img"
              src={settingIcon}
              alt="설정"
            />
          </button>
        </div>
        <div className="select_block">
          <select className="select_block_drop">
            <option>주</option>
          </select>
        </div>
        <div className="view_type_block">
          <button className="calendar_type_block_btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#1f1f1f"
            >
              <path d="M320-400q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm160 0q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm160 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"></path>
            </svg>
          </button>
          <button className="check_type_block_btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#1f1f1f"
            >
              <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
