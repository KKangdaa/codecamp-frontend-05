import styled from '@emotion/styled'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const Wrapper = styled.div`
  width: 100%;
  min-height: 30vw;
  /* background: red; */
  overflow: hidden;
`
const ImgBox = styled.div`
  min-height: 30vw;
  width: 100vw;
  /* min-height: 60vh; */
`

const ImgOne = styled.div`
  background: url('/banner1.jpg') 50% 52%;
  /* background-attachment: fixed; */
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 30vw;
  width: 100vw;
  /* min-height: 60vh; */
`
const ImgTwo = styled.div`
  background: url('/banner2.jpg') 50% 40%;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 30vw;
  width: 100vw;
  /* min-height: 60vh; */
`
const ImgThree = styled.div`
  background: url('/banner3.jpg') 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 30vw;
  width: 100vw;
  /* min-height: 60vh; */
`
const ImgFour = styled.div`
  background: url('/banner4.jpg') 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 30vw;
  width: 100vw;
  /* min-height: 60vh; */
`
const ImgFive = styled.div`
  background: url('/banner5.jpg') 50% 70%;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 30vw;
  width: 100vw;
  /* min-height: 60vh; */
`
const ImgSix = styled.div`
  background: url('/banner6.jpg') 50% 100%;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 30vw;
  width: 100vw;
  /* min-height: 60vh; */
`

export default function LayoutBanner() {
  const settings = {
    className: 'center',
    slidesToShow: 1,
    swipeToSlide: true,
    infinite: true,
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
