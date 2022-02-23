import styled from '@emotion/styled'

export const LoginBackground = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #fff9ec;
`
export const LoginWrapper = styled.div`
  /* background-color: #e6decf; */
  background-color: #fad483;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  display: flex;
  flex-direction: column;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0.1rem 0.1rem 1.5rem #ddbc73, -0.1rem -0.1rem 1.5rem #ddbc73;
  img:nth-of-type(1),
  img:nth-of-type(2) {
    width: 50%;
    margin: 10px 0;
    position: relative;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }
  img:nth-of-type(2) {
    margin: 10px 0 20px;
    cursor: pointer;
  }
  > span {
    color: red;
    padding-left: 10px;
  }
`
export const LoginId = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px 15px;
  border: 0;
  border-radius: 15px;
  margin: 10px 0;
  outline: 0;
`
export const LoginPassword = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px 15px;
  border: 0;
  border-radius: 15px;
  margin: 10px 0;
  outline: 0;
`
export const LoginCheck = styled.div`
  width: 100%;
  margin: 10px 0;
  > input[type='checkbox'] {
    /* appearance: none; */
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`

export const LoginButton = styled.button`
  width: 100%;
  height: 55px;
  border: 0;
  border-radius: 15px;
  margin: 10px 0;
  outline: 0;
`

export const LoginBottom = styled.div`
  width: 100%;
  display: grid;
  /* grid-template-rows: 1fr 1fr 1fr; */
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: 3fr 2fr 3fr;
  text-align: center;
  justify-content: space-evenly;
  margin-top: 15px;
  span {
    cursor: pointer;
  }
`
