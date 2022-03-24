import styled from '@emotion/styled'

export const AnswerWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

export const AnswerButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > span {
    color: #888;
    text-transform: uppercase;
  }
  * {
    margin: 0 5px;
  }
`
