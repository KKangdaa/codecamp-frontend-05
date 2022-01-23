import styled from '@emotion/styled'
import { IButtonProps } from './BoardDetail.types'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 0;
`

export const Main = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px;
  border: 1px solid #ccc;
  border-radius: 20px;
`
export const Topper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  padding-bottom: 50px;
`

export const Profile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 15px;
`
export const ProfileDetail = styled.div`
  margin-left: 10px;
`
export const ProfileDate = styled.div`
  margin-left: 10px;
  color: #b3b3b3;
`
export const TextBox = styled.div`
  width: 100%;
  height: 550px;
  border: 0;
  margin-top: 45px;
  font-family: Arial, sans-serif;
  white-space: pre-wrap;
  word-wrap: break-word;
`

/* main button */
export const MainButton = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 50px 0;
`
export const ClickButton = styled.div`
  width: 65px;
  line-height: 35px;
  font-size: 0.8rem;
  text-align: center;
  background: none;
  margin: 0 5px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 50px;
  &:hover {
    background: gold;
    border: 1px solid gold;
  }
`

/* main comment */
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
    cursor: ${(props: IButtonProps) => props.commentButtonActive === true ? 'pointer' : 'auto'};
    background: ${(props: IButtonProps) => props.commentButtonActive === true ? 'gold' : 'none'};
  }
`

/* fetch commet */
export const CommentFetchBoard = styled.div`
  width: 67%;
  padding: 25px 20px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 15px;
  position: relative;
  &:hover :nth-child(4) {
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
export const CommentDeletButton = styled.button`
  display: none;
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 1.5rem;
  color: #888;
  background: none;
  border: 0;
  cursor: pointer;
  &:hover {
    color: gold;
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
