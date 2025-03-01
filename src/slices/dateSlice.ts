import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DateState {
  today: Date | string // ISO 문자열 형식으로 저장
}

const initialState: DateState = {
  today: new Date().toISOString().split('T')[0], // 현재 날짜를 초기값으로 설정
}

const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    nextWeek: (state, action: PayloadAction<number>) => {
      const currentDateObj = new Date(state.today)
      currentDateObj.setDate(currentDateObj.getDate() + action.payload) // 7일씩 증가
      state.today = currentDateObj.toISOString().split('T')[0] // YYYY-MM-DD
    },
    beforeWeek: (state, action: PayloadAction<number>) => {
      const currentDateObj = new Date(state.today)
      currentDateObj.setDate(currentDateObj.getDate() - action.payload) // 7일씩 증가
      state.today = currentDateObj.toISOString().split('T')[0] // YYYY-MM-DD
    },
    choiceDay: (state, action: PayloadAction<string | undefined>) => {
      const targetDay =
        action.payload !== undefined
          ? new Date(action.payload)
          : new Date(state.today)
      state.today = targetDay.toISOString().split('T')[0] // YYYY-MM-DD
    },
  },
})

export const { nextWeek, beforeWeek, choiceDay } = dateSlice.actions
export default dateSlice.reducer
