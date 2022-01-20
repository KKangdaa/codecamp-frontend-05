import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  font-size: 0.8rem;
`
export const Board__Wrapper = styled.div`
  position: relative;
  width: 70%;
  height: auto;
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
export const Board = styled.div`
  width: 100%;
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
`
export const Board__Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 8px 0;
  font-size: 0.9rem;
  font-weight: 700;
  border-bottom: 3px double #ccc;
`
  export const Title__Icon = styled.div`
    width: 7%;
  `
  export const Icon = styled.i``
  export const Title__Name = styled.div`
    width: 55%;
    `
  export const Title__Writer = styled.div`
    width: 12%;
    `
  export const Title__CreateDate = styled.div`
    width: 12%;
    `


  export const Board__List = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 8px 0;
    border-bottom: 1px solid #ccc;
    &:last-child {
      border: 0;
    }
  `
  
  export const Number = styled.div`
    width: 7%;
  `
  export const Name = styled.div`
    width: 55%;
    cursor: pointer;
  `
  export const Writer = styled.div`
    width: 12%;
  `
  export const CreateDate = styled.div`
    width: 12%;
  `
  export const Watch = styled.div`
    width: 7%;
  `
  export const Like = styled.div`
    width: 7%;
  `

export const EditButton = styled.button`
  position: relative;
  top: 30px;
  right: 0;
  width: 110px;
  height: 40px;
  background: none;
  border: 2px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
`