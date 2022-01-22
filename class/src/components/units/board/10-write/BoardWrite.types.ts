import { ChangeEvent } from 'react'

export interface IBoradWriteProps {
  isEdit: boolean
  data?: any
  // container 와 presenter에서 interface로 타입을 선언하였지만 index에서 에러가 날 수 있기에 data에서 ?를 삽입하여 있을 수도 있고 없을 수도 있게끔 표시를 하여 에러를 막아준다
}


export interface IBoardWriteUIProps {
  aaa: string
  zzz: () => void
  xxx: () => void
  onChangeMyWriter: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeMyTitle: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeMyContents: (event: ChangeEvent<HTMLInputElement>) => void
  isActive: boolean
  isEdit: boolean
  data: any
}


export interface IMyButtonProps {
  ggg: boolean
}