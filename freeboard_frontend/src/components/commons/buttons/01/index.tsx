import { ButtonHTMLAttributes } from 'react'
import styled from '@emotion/styled'

interface IButtonStyle {
  isValid: boolean
}

const GoldButton = styled.button`
  width: 100px;
  height: 50px;
  border: 1px solid #ccc;
  background: none;
  margin: 50px 0;
  text-align: center;
  background-color: ${(props: IButtonStyle) =>
    props.isValid ? 'gold' : '#fff3dd'};
  cursor: ${(props: IButtonStyle) => (props.isValid ? 'pointer' : 'auto')};
`

interface IButton01Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string
  isValid: boolean
}

export default function Button01(props: IButton01Props) {
  return (
    <GoldButton
      type={props.type}
      isValid={props.isValid}
      onClick={props.onClick}
    >
      {props.name}
    </GoldButton>
  )
}
