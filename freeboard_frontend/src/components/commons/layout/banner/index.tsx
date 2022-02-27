import styled from '@emotion/styled'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Wrapper = styled.div`
  width: 90vw;
  height: 35vw;
  /* overflow: hidden; */
  margin: 0 auto;
  .slick-dots {
    bottom: 025px;
    li {
      width: 30px;
      height: 30px;
      button {
        width: 30px;
        height: 30px;
      }
    }
    li button:before {
      content: '♥';
      color: #fffaf1;
      font-size: 15px;
    }
    li.slick-active button:before {
      color: #ffcc55;
    }
  }
`
const ImgBox = styled.div`
  width: 100%;
  height: 35vw;
  & > div {
    background-size: cover;
    /* background-attachment: fixed; */
    background-repeat: no-repeat;
    width: 100%;
    height: 35vw;
  }
`
const ImgOne = styled.div`
  background: url('/images/banner7.jpg') 50% 47%;
`
const ImgTwo = styled.div`
  background: url('/images/banner2.jpg') 50% 70%;
`
const ImgThree = styled.div`
  background: url('/images/banner3.jpg') 50% 73%;
`
const ImgFour = styled.div`
  background: url('/images/banner4.jpg') 50% 70%;
`
const ImgFive = styled.div`
  background: url('/images/banner5.jpg') 50% 100%;
`
const ImgSix = styled.div`
  background: url('/images/banner6.jpg') 50% 85%;
`

export default function LayoutBanner() {
  const settings = {
    dots: true,
    className: 'center',
    slidesToShow: 1,
    swipeToSlide: true,
    infinite: true,
    // autoplay: true,
    speed: 2000,
    fade: true,
    arrows: false,
  }

  return (
    <div style={{ width: '100%', background: '#fffaf1' }}>
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
    </div>
  )
}
