import styled from '@emotion/styled'

export const Button = styled.button`
  background: ${(props) => props.activeButton === true ? "red" : "none"};

`
