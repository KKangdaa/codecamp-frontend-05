import styled from '@emotion/styled'

export const ListWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  > div {
    border-bottom: 1px solid black;
    padding: 20px 0;
  }
  > div:last-child {
    border-bottom: 0;
  }
`

// 댓글
export const QuestionContent = styled.div`
  width: 100%;
`
export const UserName = styled.div`
  font-weight: 700;
  /* font-size: 1.2rem; */
  text-transform: uppercase;
`
// 대댓글
