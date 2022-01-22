import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  position: relative;
  margin-top: 80px;
`

export const Main = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px;
  border: 1px solid gray;
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

export const MainButton = styled.div`
  display: flex;
  flex-direction: row;
`
export const CreateButton = styled.button`
  width: 110px;
  height: 40px;
  position: relative;
  top: 50px;
  background: none;
  border: 2px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;
`
