import styled from '@emotion/styled'

export const Wrapper = styled.div`
  background: #fffaf1;
  width: 100%;
  font-size: 0.8rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 50px;
  padding: 5vw 5vw 4vw;
`
export const BoardList = styled.div`
  position: relative;
  width: 100%;
  height: 22vw;
  overflow: hidden;
  margin-bottom: 60px;
  /* border: 1px solid black; */
  border-radius: 50px;
  box-shadow: 0.1rem 0.1rem 1rem #ddbc73, -0.1rem -0.1rem 1rem #ddbc73;
  div {
    max-width: 100%;
    height: 55%;
    vertical-align: middle;
    -webkit-object-fit: cover;
    -ms-object-fit: cover;
    object-fit: cover;
    -webkit-object-position: center;
    -ms-object-position: center;
    object-position: center;
  }
  div:nth-of-type(1) {
    /* border-bottom: 1px solid black; */
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  div:nth-of-type(2) {
    padding: 20px;
    margin: auto;
  }
`
