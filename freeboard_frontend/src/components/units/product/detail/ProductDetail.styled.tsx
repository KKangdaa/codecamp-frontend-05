import styled from '@emotion/styled'
import Slider from 'react-slick'

export const DetailWrapper = styled.div`
  width: 75vw;
  margin: 0 auto;
  padding: 50px 0;
`
export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  .slick-list {
  }
  .slick-dots {
    bottom: 25px;
  }
`
export const SlickSlider = styled(Slider)`
  width: 50%;
  height: 34vw;
  display: inline-block;
  background: #fff;
  div {
    height: 34vw;
  }
`
export const ImgBox = styled.div`
  width: 100%;
  text-align: center;
  vertical-align: middle;
  object-position: center;
  overflow: hidden;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ItemInformation = styled.div`
  width: 50%;
  height: 34vw;
  display: inline-block;
  padding: 20px 40px;
  display: grid;
  grid-template-rows: 1fr 2fr 2.5fr 1.5fr 1.8fr;
  > div {
    width: 100%;
  }
  > div:nth-of-type(1) {
    font-size: 1.1rem;
  }
  > div:nth-of-type(2) {
    font-size: 1.5rem;
    font-weight: 500;
  }
  > div:nth-of-type(3) {
    font-size: 2rem;
    font-weight: 700;
  }
`
export const ItemBuy = styled.div`
  width: 100%;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-column-gap: 20px;
  button {
    width: 100%;
    height: 100px;
    margin: auto;
    font-size: 1.3rem;
    font-weight: 700;
    background: none;
    color: #ff7300;
    border: 2px solid #fad483;
    cursor: pointer;
    :hover {
      background: #ffcb5b;
    }
  }
`

export const ItemContents = styled.div`
  width: 100%;
  padding: 50px;
  text-align: center;
  font-weight: 700;
  font-size: 1.2rem;
`

export const ItemButtonGroup = styled.div`
  width: 100%;
  text-align: center;

  button {
    margin: 0 10px;
  }
`

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  margin: 50px 0;
`

export const IntroduceContent = styled.div`
  overflow: hidden;
  padding: 1.5rem;
  margin: 0 auto;
  margin-bottom: 4rem;
`
