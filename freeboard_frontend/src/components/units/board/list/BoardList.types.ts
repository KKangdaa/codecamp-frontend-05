import { MouseEvent } from 'react'

export interface IBoardListUIProps {
  data?: any
  Head: any
  EditFreeboard: () => void
  onClickMoveToDetail: (event: MouseEvent<HTMLInputElement>) => void
}
