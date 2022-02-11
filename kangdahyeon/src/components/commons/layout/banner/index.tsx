import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerWrapper = styled.div`
  width: 100%;
  height: 20vw;
  background: green;
  overflow: hidden;
  div {
    width: 100%;
    height: 100%;
    img {
      margin: 0 auto;
      width: 100%;
      height: 100%;
    }
  }
`;

export default function LayoutBanner() {
  const settings = {
    slidesToShow: 1,
    swipeToSlide: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true,
    arrows: false,
  };
  return (
    <BannerWrapper>
      <Slider {...settings}>
        <div>
          <img src="/logo512.png" />
        </div>
        <div>
          <img src="/pet-g0df7e2934_1920.jpg" />
        </div>
        <div>
          <img src="/chihuahua-gde5238b0c_1920.jpg" />
        </div>
      </Slider>
    </BannerWrapper>
  );
}
