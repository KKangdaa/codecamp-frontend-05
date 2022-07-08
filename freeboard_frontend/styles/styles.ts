import Slider from 'react-slick'
import styled from '@emotion/styled'
import { breakPoints } from '../src/commons/styles/media'

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 0 0 80px;
  .mapTitle {
    span {
      display: block;
      font-size: 1.2rem;
      :last-of-type {
        font-size: 0.875rem;
        margin-bottom: 15px;
      }
    }
  }
  #map {
    width: 80%;
    height: 40vw;
    margin: 0 auto;
  }
  @media ${breakPoints.mobile} {
    #map {
      width: 100%;
      height: 50vw;
    }
  }
`

export const SlickSlider = styled(Slider)`
  padding-bottom: 7vw;
`

export const SliderGroup = styled.div`
  width: 100%;
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
  @media ${breakPoints.mobile} {
    & > img {
      width: 60%;
    }
    & p:nth-of-type(1) {
      font-size: 2.5rem;
    }
    & p:nth-of-type(2) {
      font-size: 0.875rem;
    }
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
  @media ${breakPoints.mobile} {
    flex-direction: column;
    & > div:last-child {
      margin-right: auto;
    }
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
  @media ${breakPoints.mobile} {
    width: 50vw;
    height: 75vw;
    margin: 0 auto 10vw;
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

  @media ${breakPoints.tablet} {
    font-size: 1.2rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.5rem;
  }
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
