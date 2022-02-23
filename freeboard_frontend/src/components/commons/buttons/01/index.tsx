import { ButtonHTMLAttributes } from 'react'
import styled from '@emotion/styled'

interface IButtonStyle {
  isValid: boolean
}

const GoldButton = styled.button`
  background-color: ${(props: IButtonStyle) => (props.isValid ? 'gold' : '')};
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
