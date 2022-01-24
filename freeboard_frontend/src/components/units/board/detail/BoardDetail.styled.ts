import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const WrapperMain = styled.div`
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
