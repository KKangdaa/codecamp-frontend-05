import axios from "axios";
import { useEffect } from "react";

export default function OpengraphPreviewPage() {
  useEffect(() => {
    const getOpengraph = async () => {
      const result = await axios.get("http://www.gmarket.co.kr"); // 지마켓만 axios 사용이 가능하여 테스트한것 (성능 문제로 백엔드에서 구연)
      // daum.net 등은 CORS 차단 당하므로 백엔드에서 요청하는 것이 일반적

      // console.log(result.data);

      // console.log(result.data.split("<meta "));
      /* console.log(
        result.data?.split("<meta ").filter((el) => el.includes("og:"))
      ); */

      const opengraph = result.data
        .split("<meta ")
        .filter((el) => el.includes("og:url"))[0]
        .split(" ");
      console.log(
        opengraph[1].replaceAll('content="', "").replaceAll('"/>', "")
      );
    };
    getOpengraph();
  }, []); // meta content url을 뽑아오는 방법

  return <div></div>;
}
