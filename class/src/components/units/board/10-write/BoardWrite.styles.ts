import styled from '@emotion/styled'
import { IMyButtonProps } from './BoardWrite.types'

export const MyInput = styled.input``


export const MyButton = styled.button`
  background: ${(props: IMyButtonProps) => props.ggg === true ? "yellow" : "none"};
  &:hover {
    cursor: ${(props) => props.ggg === true ? "pointer" : "none"};
  }
`
