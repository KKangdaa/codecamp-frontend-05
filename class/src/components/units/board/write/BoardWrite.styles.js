import styled from '@emotion/styled'

export const MyInput = styled.input``
export const MyButton = styled.button`
  background: ${(props) => props.ggg === true ? "yellow" : "none"};
  &:hover {
    cursor: ${(props) => props.ggg === true ? "pointer" : "none"};
  }
`