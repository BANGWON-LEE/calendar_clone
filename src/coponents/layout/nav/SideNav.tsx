// import '../../../styles/layoutStyle/nav.scss'
import arrowDownIcon from '../../../assets/arrow-down.png'
import plusIcon from '../../../assets/plus-icon.png'
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import dayjs from 'dayjs'
import 'dayjs/locale/ko'
dayjs.locale('ko')
import { createTheme, ThemeProvider, Theme } from '@mui/material'
import { useDispatch } from 'react-redux'
import { choiceDay } from '../../../slices/dateSlice'

const theme: Theme = createTheme({
  components: {
    MuiPickersToolbar: {
      styleOverrides: {
        root: {
          display: 'none',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          display: 'none',
        },
      },
    },
    MuiDateCalendar: {
      styleOverrides: {
        root: {
          backgroundColor: '#f8fafd',
          width: 248,
        },
      },
    },
  },
})

export default function SideNav() {
  const dispatch = useDispatch()

  return (
    <nav className="nav_block">
      <div className="nav_block_top">
        <button className="create_schedule_btn">
          <span className="create_schedule_btn_content_plus">
            <img
              className="create_schedule_btn_content_plus_img"
              src={plusIcon}
              alt="register schedule"
            />
          </span>
          <span className="create_schedule_btn_content">만들기</span>
          <span className="create_schedule_btn_content">
            <img
              className="create_schedule_btn_content_img"
              src={arrowDownIcon}
              alt="calendar register btn"
            />
          </span>
        </button>
      </div>
      <div className="nav_block_bottom">
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
          <ThemeProvider theme={theme}>
            <StaticDatePicker
              displayStaticWrapperAs="desktop"
              defaultValue={dayjs(new Date())}
              onChange={newDate =>
                dispatch(choiceDay(newDate?.toDate().toString()))
              }
              sx={{ width: 248, minWidth: 248, maxWidth: 248 }}
            />
          </ThemeProvider>
        </LocalizationProvider>
      </div>
    </nav>
  )
}
