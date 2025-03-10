import { ReactNode } from 'react'

export interface schedlueDetailType {
  index: string
  day: Date
}

export interface targetSchedulePathType {
  x: number | undefined
  y: number | undefined
}

export interface choiceTimeRangeType {
  start: number
  end: number
}

export interface setTimeAreaFormatType {
  start: string | ReactNode
  end: string | ReactNode
}
