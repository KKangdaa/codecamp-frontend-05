import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  // 여기서 직접 다운로드 받고, 다 받을 때까지 기다렸디가 그려주기

  useEffect(() => {
    const script = document.createElement("script"); // <script></script> 만들어짐
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=8b77aaeac9eee62232cd589f76eb677f?&autoload=false"; // ?&autoload=false 추가
    document.head.appendChild(script);

    script.onload = () => {
      // script가 로드가 되면 실행되게

      window.kakao.maps.load(function () {
        // v3가 모두 로드된 후, 이 콜백 함수가 실행됩니다.

        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.48498, 126.896508), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        const imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png"; // 마커이미지의 주소입니다
        const imageSize = new window.kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
        const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );
        const markerPosition = new window.kakao.maps.LatLng(
          37.48498,
          126.896508
        ); // 마커가 표시될 위치입니다

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage, // 마커이미지 설정
        });

        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: any) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);
          }
        );

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    };
  }, []);

  return (
    <>
      {/* head, script를 _app으로 이동하여 사용할 경우 모든 페이지에서 로드되기에 좋은 방법은 아님 */}
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=8b77aaeac9eee62232cd589f76eb677f"
        ></script>
      </Head>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </>
  );
}
