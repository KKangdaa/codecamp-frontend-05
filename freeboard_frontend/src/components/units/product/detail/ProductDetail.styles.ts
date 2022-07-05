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
  > div {
    height: 37.5vw;
  }
  .slick-dots {
    bottom: 25px;
  }
`
export const SlickSlider = styled(Slider)`
  width: 50%;
  display: inline-block;
  background: #fff;
  div {
    height: 37.5vw;
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
  display: inline-block;
  padding: 20px 40px 10px;
  display: grid;
  grid-template-rows: 1fr 2fr 3fr 1.5fr 1fr;
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
  display: grid;
  grid-template-columns: 1fr 1fr 3fr;
  grid-column-gap: 20px;
  button {
    width: 100%;
    height: 75px;
    margin: auto;
    border-radius: 15px;
    font-size: 1.3rem;
    font-weight: 700;
    color: #222;
    background: none;
    border: 1px solid #ffb71b;
    cursor: pointer;
    :hover {
      background: #ffb71b;
      color: #fff;
    }
  }
  button:last-child {
    background: #ffb71b;
    border: 0;
    color: #fff;
    cursor: pointer;
    :hover {
      background: #eca917;
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
  border-bottom: 1px solid #ffb71b;
  margin: 50px 0;
`

export const IntroduceContent = styled.div`
  overflow: hidden;
  padding: 1.5rem;
  margin: 0 auto;
  margin-bottom: 4rem;
`
export const Address = styled.div`
  height: 60px;
  line-height: 60px;
`
export const Map = styled.div`
  width: 80%;
  height: 32vw;
  margin: 0 auto;
`
