import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Schedule {
  title: string
  type: string
  time: string
  x: number
  y: number
}

interface ScheduleState {
  scheduleRegisterArr: Schedule[]
}

const initialState: ScheduleState = {
  scheduleRegisterArr: [],
}

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    addSchedule: (state, action: PayloadAction<Schedule>) => {
      state.scheduleRegisterArr.push(action.payload)
    },
  },
})

export const { addSchedule } = scheduleSlice.actions
export default scheduleSlice.reducer
// setScheduleRegisterArr(prev => [
//   ...prev,
//   {
//     title: 'test',
//     type: '이벤트',
//     time: '오전 x시 ~ 오전 x시',
//     x: snappedX,
//     y: relativeY,
//   },
// ])
