import styled from '@emotion/styled'

export const span = styled.span`
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
export const CommentFetchBoard = styled.div`
  width: 67%;
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
export const CommentEditButton = styled.button`
  display: none;
  position: absolute;
  top: 20px;
  right: 50px;
  font-size: 0.875rem;
  color: #888;
  font-size: 1rem;
  background: none;
  border: 0;
  cursor: pointer;
  &:hover {
    color: gold;
    font-weight: 700;
  }
`
export const CommentDeleteButton = styled.button`
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 0.875rem;
  color: #888;
  font-size: 1.1rem;
  background: none;
  border: 0;
  cursor: pointer;
  &:hover {
    color: gold;
    font-weight: 700;
  }
`
export const BUTTON = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20px;
  background: none;
  border: 0;
  cursor: pointer;
  &:focus svg {
    fill: red;
  }
`

export const Heart = styled.svg`
  padding: 10px 0;
  width: 20px;
  &:active {
    width: 15px;
  }
`
