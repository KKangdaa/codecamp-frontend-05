import { MouseEvent } from 'react'

export interface IBoardListUIProps {
  data?: any
  Head: any
  refetch: any
  EditFreeboard: () => void
  onClickMoveToDetail: (event: MouseEvent<HTMLInputElement>) => void
}

/* export interface IBoardPaginationProps {
  refetch: any
  lastPage: number
  clickPage: number
  dataBoardCount?: any
} */
