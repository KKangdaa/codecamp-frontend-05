import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Wrapper = styled.div`
  width: 100%;
  height: 30%;
  background: red;
  overflow: hidden;
`;
const ImgBox = styled.div`
  width: 100%;
  height: 100%;
  & img {
    width: 100%;
    height: 100%;
  }
`;

export default function LayoutBanner() {
  const settings = {
    className: "center",
    slidesToShow: 5,
    swipeToSlide: true,
    infinite: true,
    // centerPadding: "60px",
    /* afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }, */
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <ImgBox>
          <img src="/1.jpg" />
        </ImgBox>
        <ImgBox>
          <img src="/2.jpg" />
        </ImgBox>
        <ImgBox>
          <img src="/3.jpg" />
        </ImgBox>
        <ImgBox>
          <img src="/4.jpg" />
        </ImgBox>
        <ImgBox>
          <img src="/5.jpg" />
        </ImgBox>
        <ImgBox>
          <img src="/1.jpg" />
        </ImgBox>
        <ImgBox>
          <img src="/2.jpg" />
        </ImgBox>
        <ImgBox>
          <img src="/3.jpg" />
        </ImgBox>
        <ImgBox>
          <img src="/4.jpg" />
        </ImgBox>
        <ImgBox>
          <img src="/5.jpg" />
        </ImgBox>
      </Slider>
    </Wrapper>
  );
}
