import Head from 'next/head'
import * as A from '../styles/styles'
import { gql, useQuery } from '@apollo/client'
import { useEffect } from 'react'

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`

declare const window: typeof globalThis & {
  kakao: any
}

export default function HomePage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN)

  useEffect(() => {
    const script = document.createElement('script') // <script></script> 만들어짐
    script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=8b77aaeac9eee62232cd589f76eb677f?&autoload=false' // ?&autoload=false 추가
    document.head.appendChild(script)

    script.onload = () => {
      // script가 로드가 되면 실행되게

      window.kakao.maps.load(function () {
        // v3가 모두 로드된 후, 이 콜백 함수가 실행됩니다.

        const container = document.getElementById('map') // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.48498, 126.896508), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        }

        const map = new window.kakao.maps.Map(container, options) // 지도 생성 및 객체 리턴

        const imageSrc =
          'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png' // 마커이미지의 주소입니다
        const imageSize = new window.kakao.maps.Size(64, 69) // 마커이미지의 크기입니다
        const imageOption = { offset: new window.kakao.maps.Point(27, 69) } // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        )
        const markerPosition = new window.kakao.maps.LatLng(
          37.48498,
          126.896508
        ) // 마커가 표시될 위치입니다

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage, // 마커이미지 설정
        })

        window.kakao.maps.event.addListener(
          map,
          'click',
          function (mouseEvent: any) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng)
          }
        )

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map)
      })
    }
  }, [])

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    arrows: false,
    /* nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />, */
  }
  return (
    <div>
      <Head>
        <title>PETKONG</title>
        <meta name="description" content="Generated by create next app" />
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=8b77aaeac9eee62232cd589f76eb677f"
        ></script>
        <link rel="icon" href="/images/logo-icon.png" />
      </Head>
      <A.Wrapper>
        <div>
          {data?.fetchUserLoggedIn ? data?.fetchUserLoggedIn.name : <></>}
        </div>
        <A.SlickSlider {...settings}>
          <A.SliderGroup>
            <img src="/images/border-collie.png" alt="보더콜리" />
            <p>Border Collie</p>
            <p>
              The Border Collie is a working and herding dog breed. They come
              from the Anglo-Scottish border region and are used to herd
              livestock, specifically sheep. The Border Collie is considered a
              highly intelligent, extremely energetic, acrobatic and athletic
              dog.
            </p>
          </A.SliderGroup>
          <A.SliderGroup>
            <img src="/images/chihuahua.png" />
            <p>Chihuahua</p>
            <p>
              The Chihuahua is one of the smallest breeds of dog, and is named
              after the Mexican state of Chihuahua.
            </p>
          </A.SliderGroup>
          <A.SliderGroup>
            <img src="/images/labrador-retriever.png" />
            <p>Labrador Retriever</p>
            <p>
              The Labrador Retriever or Labrador is a British breed of retriever
              gun dog. It was developed in the United Kingdom from fishing dogs
              imported from the colony of Newfoundland, and was named for the
              Labrador region of that colony.
            </p>
          </A.SliderGroup>
          <A.SliderGroup>
            <img src="/images/sigor-dog.png" />
            <p>Sigor Dog</p>
            <p>
              Mixed breed dogs have three or more different breeds in their
              lineage. They are sometimes called mongrels or mutts, especially
              when it's not clear what breeds make up your dog.
            </p>
          </A.SliderGroup>
        </A.SlickSlider>
        <A.GroupImg>
          <A.ImgRow>
            <img src="/images/taylor-kopel-WX4i1Jq_o0Y-unsplash.jpg" />
            <A.Overlay></A.Overlay>
            <A.ImgTitle>snack</A.ImgTitle>
            <A.Subtitle>more →</A.Subtitle>
          </A.ImgRow>
          <A.ImgRow>
            <img src="/images/alvan-nee-brFsZ7qszSY-unsplash.jpg" />
            <A.Overlay></A.Overlay>
            <A.ImgTitle>play</A.ImgTitle>
            <A.Subtitle>more →</A.Subtitle>
          </A.ImgRow>
          <A.ImgRow>
            <img src="/images/alvan-nee-1VgfQdCuX-4-unsplash.jpg" />
            <A.Overlay></A.Overlay>
            <A.ImgTitle>walk</A.ImgTitle>
            <A.Subtitle>more →</A.Subtitle>
          </A.ImgRow>
        </A.GroupImg>
        <div id="map"></div>
      </A.Wrapper>
    </div>
  )
}
