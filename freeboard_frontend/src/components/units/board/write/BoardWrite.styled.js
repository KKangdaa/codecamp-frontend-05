import styled from '@emotion/styled'


export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

/* main */
export const Main = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px;
  margin: 80px 0;
  border: 1px solid gray;
`
  export const Title = styled.div`
    font-size: 2rem;
    font-weight: 700;
    padding-bottom: 50px;
  `
  export const Main__TitleBox = styled.input`
    width: 100%;
    height: 100px;
    border: 0;
    padding-left: 30px;
    font-size: 2.5rem;
    margin: auto;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    outline: 0;
  `
  export const Line = styled.div`
    width: 100%;
    border-bottom: 1px solid #ccc;
    margin: 5px 0;
  `
  export const Main__TextBox = styled.textarea`
    width: 100%;
    height: 500px;
    border: 0;
    padding: 45px 30px 30px;
    resize: none;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    outline: 0;
    white-space: pre-wrap;
  `


  /* Add IMG */
  export const Main__AddImg = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 30px 0 20px;
    border-top: 1px solid #ccc;
  `
  export const AddImg__Imgs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `
  export const Imgs__Up = styled.div`
    width: 70px;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-right: 20px;
    background-color: #fff;
    border: 1px solid gold;
    font-size: 0.75rem;
    cursor: pointer;
    &:hover {
    background-color: gold;
    }
  `



  export const Main__Inner__Title = styled.div`
    width: 120px;
    font-size: 0.8rem;
    font-weight: 700;
  `
  export const Main__Inner__Box = styled.div`
    width:100%;
  `
  export const Inner__Box__Input = styled.input`
    width: 100%;
    height: 30px;
    border: 0;
    border-bottom: 1px solid #ccc;
    padding: 10px;
    outline: none;
  `
  export const Error__Red = styled.span`
    width: 100%;
    padding-top: 5px;
    color: red;
  `
  

  export const Main__Writer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 20px 0;
  `
  export const Main__Passsword = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 20px 0;
  `
  /* 주소 */
  export const Main__Address = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 0;
  `
    export const Address__Text = styled.div`
      width: 100%;
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
    `
    export const Gruop = styled.div`
      width: 100%;
    `
      export const TextNum = styled.input`
        width: 60px;
        height: 40px;
        border: 0;
        border-bottom: 1px solid #ccc;
        text-align: center;
        outline: none;
      `
      export const TextButton = styled.button`
        height: 40px;
        border: 0;
        padding: 0 10px;
        margin-left: 10px;
        background-color: gold;
        cursor: pointer;
      `
      export const Address__Input_Box = styled.div`
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
      `
        export const Box__Text = styled.input`
          width: 100%;
          height: 40px;
          border: 0;
          border-bottom: 1px solid #ccc;
          padding: 10px;
          outline: none;
        `
    /* URL */
    export const Main__URL = styled.div`
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 20px 0;
    `

/* Gender */
export const Main__Gender = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
`
  export const Gender__Title = styled.div``
  export const Gender__Input = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `
    export const Input__Text = styled.div`
      padding: 0 20px 0 5px;
    `
    export const Input__Radio = styled.input`
      appearance: none;
      width: 13px;
      height: 13px;
      border: 1px solid rgb(184, 151, 22);
      border-radius: 13px;
      background-color: #fff;
      cursor: pointer;
      &:checked::before {
        content: "";
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 8px;
        margin: 11%;
        background-color: gold;
      }
    `

/* button */
export const RegisBtn = styled.button`
  width: 150px;
  height: 45px;
  border: 0;
  border: 1px solid gold;
  background: ${(props) => props.ttt === true ? "gold" : "none"};
  font-weight: 900;
  margin: 30px 0 50px;
  cursor: pointer;
`