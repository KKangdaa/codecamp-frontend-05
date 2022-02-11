import { ApolloQueryResult, OperationVariables } from '@apollo/client'
import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from 'react'

export interface IBoardListUIProps {
  data?: any
  dataBoardCount?: any
  Head: any
  refetch: any
  countRefetch: (
    variables?: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<any>>
  EditFreeboard: () => void
  onClickMoveToDetail: (event: MouseEvent<HTMLInputElement>) => void
  keyword: string
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void
  clickPage: number
  setClickPage: Dispatch<SetStateAction<number>>
  startPage: number
  setStartPage: Dispatch<SetStateAction<number>>
}
