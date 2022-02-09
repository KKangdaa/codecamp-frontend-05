import { ChangeEvent, MouseEvent } from 'react'

export interface IBoardListUIProps {
  data?: any
  Head: any
  refetch: any
  EditFreeboard: () => void
  onClickMoveToDetail: (event: MouseEvent<HTMLInputElement>) => void
  keyword: string
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void
}
