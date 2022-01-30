import styled from '@emotion/styled'
import Modal from 'antd/lib/modal/Modal'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
`
export const WrapperMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
  height: auto;
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
  border: 0;
  padding: 20px 0 50px;
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
export const ModalDelete = styled(Modal)`
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
export const BUTTON = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  background: none;
  padding: 0;
  border: 0;
  margin-top: 60px;
  cursor: pointer;
  &:focus svg {
    fill: red;
  }
`

export const Heart = styled.svg`
  padding: 10px 0;
  width: 20px;
  &:active {
    fill: red;
    width: 15px;
  }
`
