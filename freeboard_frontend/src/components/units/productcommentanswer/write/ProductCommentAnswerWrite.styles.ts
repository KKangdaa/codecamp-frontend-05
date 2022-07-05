import styled from '@emotion/styled'

export const CommentWrapper = styled.div`
  width: 100%;
  margin: 30px auto;
  border: 2px solid gray;
  background: none;
  display: flex;
  textarea {
    width: 100%;
    height: 70px;
    border: 0;
    outline: 0;
    padding: 5px 10px 10px;
    resize: none;
    background: none;
  }
  button {
    width: 70px;
    height: 70px;
    border: 0;
    cursor: pointer;
    &:hover {
      background: #fad483;
    }
  }
`
