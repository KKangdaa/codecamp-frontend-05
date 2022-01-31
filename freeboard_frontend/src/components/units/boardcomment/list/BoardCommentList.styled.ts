import styled from '@emotion/styled'

export const WrapperScroll = styled.div`
  width: 70%;
  height: 30vw;
  padding: 20px;
  overflow: auto;
`
export const ClickLoader = styled.div`
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
`
export const InputWriter = styled.div`
  margin: 0 10px;
  font-size: 0.85rem;
`
export const CommentProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 15px;
  margin-left: 10px;
`
/* fetch comment */
export const CommentFetchBoardItem = styled.div``
export const CommentFetchBoard = styled.div`
  width: 100%;
  padding: 25px 20px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 15px;
  position: relative;
  &:hover button:nth-of-type(1) {
    display: block;
  }
  &:hover button:nth-of-type(2) {
    display: block;
  }
`
export const CommentWriter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > ul {
    padding: 0 0 5px 5px;
    margin: 0;
    color: #851c1c;
  }
`

export const CommentContents = styled.div`
  font-size: 0.85rem;
  margin: 20px 10px;
`
export const CommentDate = styled.div`
  font-size: 0.85rem;
  color: #888;
  margin: 0 10px;
`

export const NoneBoxButton = styled.div`
  width: 100%;
  padding: 20px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`

export const CommentEditButton = styled.button`
  display: none;
  color: #888;
  font-size: 1rem;
  background: none;
  border: 0;
  cursor: pointer;
  &:hover {
    color: #851c1c;
    font-weight: 700;
  }
`
export const CommentDeleteButton = styled.button`
  display: none;
  color: #888;
  font-size: 1.1rem;
  background: none;
  border: 0;
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    color: #851c1c;
    font-weight: 700;
  }
`
