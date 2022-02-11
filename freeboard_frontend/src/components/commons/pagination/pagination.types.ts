import { ApolloQueryResult, OperationVariables } from '@apollo/client'
import { Dispatch, SetStateAction } from 'react'

export interface IBoardPaginationProps {
  refetch: any
  clickPage: number
  setClickPage: any
  dataBoardCount: any
  keyword: string
  countRefetch: (
    variables?: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<any>>
  startPage: number
  setStartPage: Dispatch<SetStateAction<number>>
}

export interface IPaginationStyleProps {
  clickPage: number
  id: string
}
