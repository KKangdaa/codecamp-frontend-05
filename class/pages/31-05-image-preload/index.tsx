import { useEffect, useRef, useState } from "react";

export default function ImagePreloadPage() {
  const [loaded, setLoaded] = useState(false);
  const [imgTag, setImgTag] = useState<HTMLImageElement>();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image(); // new Image()는 이미지 태그를 만드는 함수
    img.src = "https://t1.daumcdn.net/cfile/tistory/25328A4D51A6E1282F";
    img.onload = () => {
      setImgTag(img); // setState에 태그를 넣음
    };
  }, []);

  const onClickImagePreLoad = () => {
    if (imgTag) divRef.current?.appendChild(imgTag);
  };

  const onClickImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div>
      =============================== 이미지 프로로드
      ===============================
      <br />
      <div ref={divRef}></div>
      <button onClick={onClickImagePreLoad}>이미지 프리로드</button>
      <br />
      {/* 버튼을 눌렀을 때 바로 나오는 이유는 미리 로드 되었기 때문에 */}
      =============================== 이미지 일반로드
      ===============================
      <br />
      {loaded && (
        <img src="https://t1.daumcdn.net/cfile/tistory/266E5F4451E8D7540A" />
      )}
      <br />
      <button onClick={onClickImageLoad}>이미지 일반로드</button>
    </div>
  );
}
