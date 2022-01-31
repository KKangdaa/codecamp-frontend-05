import styled from '@emotion/styled'
import { IButtonProps } from './BoardCommentWrite.types'

export const MainComment = styled.div`
  width: 70%;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
`
export const CommentWrite = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  > ul {
    padding: 0 0 5px 15px;
    margin: 0;
    color: #851c1c;
  }
`
export const CommentProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 15px;
  margin-left: 10px;
`
export const CommentName = styled.input`
  width: 120px;
  height: 28px;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin-right: 10px;
  padding: 10px;
  font-size: 0.85rem;
`
export const CommentPassword = styled.input`
  width: 150px;
  height: 28px;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 10px;
  font-size: 0.85rem;
`

export const span = styled.span`
  margin: 0 10px;
  font-size: 0.85rem;
`
export const CommentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`
export const CommentText = styled.textarea`
  width: 100%;
  height: 110px;
  border: 0;
  border: 1px solid #ccc;
  border-radius: 15px;
  outline: 0;
  resize: none;
  padding: 15px;
  font-size: 0.85rem;
`
export const CommentCreateButton = styled.button`
  width: 100px;
  border: 0;
  border: 1px solid #ccc;
  border-radius: 15px;
  margin-left: 20px;
  background: none;
  font-size: 0.85rem;
  &:hover {
    cursor: ${(props: IButtonProps) =>
      props.commentButtonActive === true ? 'pointer' : 'auto'};
    background: ${(props: IButtonProps) =>
      props.commentButtonActive === true ? '#851c1c' : 'none'};
    color: ${(props: IButtonProps) =>
      props.commentButtonActive === true ? 'white' : 'black'};
  }
`

export const CommentEditButton = styled.button`
  width: 100%;
  height: 50px;
  border: 0;
  border: 1px solid #ccc;
  border-radius: 15px;
  background: none;
  font-size: 0.85rem;
  &:hover {
    cursor: ${(props: IButtonProps) =>
      props.commentButtonActive === true ? 'pointer' : 'auto'};
    background: ${(props: IButtonProps) =>
      props.commentButtonActive === true ? '#851c1c' : 'none'};
    color: ${(props: IButtonProps) =>
      props.commentButtonActive === true ? 'white' : 'black'};
  }
`
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20%;
  padding-left: 10px;
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
