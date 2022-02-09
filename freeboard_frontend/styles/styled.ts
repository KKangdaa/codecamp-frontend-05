import Slider from 'react-slick'
import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100vw;
  /* height: 100vmax; */
  margin: 0 auto;
  padding: 0px 10vw;
`

export const SlickSlider = styled(Slider)`
  padding-bottom: 10vw;
`

export const SliderGroup = styled.div`
  width: 100%;
  /* height: 50vw; */
  margin: 0 auto;
  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  & > img {
    width: 50%;
  }
  & p:nth-of-type(1) {
    @font-face {
      font-family: 'Lobster';
      font-weight: normal;
      src: url('/font/Lobster-Regular.ttf');
    }
    width: 100%;
    text-align: center;
    font-family: 'Lobster';
    font-size: 8vw;
    margin-bottom: 1rem;
  }
  & p:nth-of-type(2) {
    width: 600px;
    text-align: center;
    font-size: 1.2rem;
  }
`

export const GroupImg = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-bottom: 10vw;
  & > div:last-child {
    margin-right: 0px;
  }
`

export const ImgRow = styled.div`
  position: relative;
  width: 100%;
  height: 40vw;
  overflow: hidden;
  margin-right: 50px;
  > img {
    position: absolute;
    top: 0;
    left: 0;
    vertical-align: middle;
    height: 100%;
    max-width: 100%;
    -webkit-object-fit: cover;
    -ms-object-fit: cover;
    object-fit: cover;
    -webkit-object-position: center;
    -ms-object-position: center;
    object-position: center;
  }
  &:hover div {
    display: block;
    background: rgba(0, 0, 0, 0.3);
  }
  &:hover p:nth-of-type(1) {
    bottom: 10%;
  }
  &:hover p:nth-of-type(2) {
    opacity: 1;
  }
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  transition: 0.5s ease;
`
export const ImgTitle = styled.p`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  font-weight: 700;
  font-size: 2rem;
  color: white;
  text-transform: uppercase;
  transition: 0.5s ease;
`
export const Subtitle = styled.p`
  opacity: 0;
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%, 0);
  transition: 0.35s ease;
  color: white;
  cursor: pointer;
`
