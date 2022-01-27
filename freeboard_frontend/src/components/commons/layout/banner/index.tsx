import styled from '@emotion/styled'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Wrapper = styled.div`
  width: 100%;
  height: 32vw;
  overflow: hidden;
`
const ImgBox = styled.div`
  width: 100vw;
  height: 32vw;
  & > div {
    background-size: cover;
    /* background-attachment: fixed; */
    background-repeat: no-repeat;
    width: 100vw;
    height: 32vw;
  }
`
const ImgOne = styled.div`
  background: url('/images/banner1.jpg') 50% 52%;
`
const ImgTwo = styled.div`
  background: url('/images/banner2.jpg') 50% 40%;
`
const ImgThree = styled.div`
  background: url('/images/banner3.jpg') 50% 80%;
`
const ImgFour = styled.div`
  background: url('/images/banner4.jpg') 50% 60%;
`
const ImgFive = styled.div`
  background: url('/images/banner5.jpg') 50% 80%;
`
const ImgSix = styled.div`
  background: url('/images/banner6.jpg') 50% 80%;
`

export default function LayoutBanner() {
  const settings = {
    className: 'center',
    slidesToShow: 1,
    swipeToSlide: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    fade: true,
  }

  return (
    <Wrapper>
      <Slider {...settings}>
        <ImgBox>
          <ImgOne></ImgOne>
        </ImgBox>
        <ImgBox>
          <ImgTwo></ImgTwo>
        </ImgBox>
        <ImgBox>
          <ImgThree></ImgThree>
        </ImgBox>
        <ImgBox>
          <ImgFour></ImgFour>
        </ImgBox>
        <ImgBox>
          <ImgFive></ImgFive>
        </ImgBox>
        <ImgBox>
          <ImgSix></ImgSix>
        </ImgBox>
      </Slider>
    </Wrapper>
  )
}
