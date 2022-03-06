import styled from '@emotion/styled'

export const PickContainer = styled.div`
  width: 60%;
  padding: 10px;
  margin: 0 auto;
  border: 1px solid black;
  display: grid;
  grid-template-columns: 6fr 1fr;
  & > div {
    display: flex;
    & > div {
      display: flex;
      align-items: center;
      & > div {
        margin-left: 10px;
      }
    }
  }
`

export const PickImg = styled.div`
  width: 60px;
  height: 60px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const PickCount = styled.div`
  height: 20px;
  line-height: 20px;
  display: flex;
  justify-content: center;
`
