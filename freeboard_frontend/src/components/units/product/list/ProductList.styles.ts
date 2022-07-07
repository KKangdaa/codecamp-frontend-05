import styled from '@emotion/styled'

export const ListWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 50px;
  & > button {
    z-index: 99;
    position: fixed;
    right: 50px;
    bottom: 40px;
    width: 80px;
    height: 50px;
    border-radius: 10px;
    background: #fad483;
    border: 1px solid gold;
    cursor: pointer;
    :hover {
      background: #ffcb5b;
    }
  }
`
export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px 20px;
`
export const ListItems = styled.div`
  width: 100%;
  height: 30vw;
  overflow: hidden;
  > div:nth-of-type(1) {
    height: 60%;
    text-align: center;
    vertical-align: middle;
    object-position: center;
    overflow: hidden;
    border: 1px solid black;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  > div:nth-of-type(2) {
    padding: 20px 5px;
  }
`

export const ProductName = styled.div`
  font-size: 0.9rem;
  margin-bottom: 5px;
`
export const ProductPrice = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
`
