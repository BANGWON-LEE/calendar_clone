import { configureStore } from '@reduxjs/toolkit'
import dateReducer from '../slices/dateSlice'
import scheduleReducer from '../slices/scheduleSlice'

export const store = configureStore({
  reducer: {
    date: dateReducer, // 날짜 상태 추가
    schedule: scheduleReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
