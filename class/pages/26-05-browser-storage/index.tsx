export default function BrowserStoragePage() {
  const onClickSaveCookie = () => {
    document.cookie = "aaa=철수";
    document.cookie = "zzz=맹구";
  };
  const onClickSaveLocal = () => {
    localStorage.setItem("bbb", "영희");
  };
  const onClickSaveSession = () => {
    sessionStorage.setItem("ccc", "훈이");
  };

  // prettier-ignore
  const onClickGetCookie = () => {
    // const aaa = document.cookie;
    // console.log(aaa); // aaa=철수; zzz=맹구 => 세미콜론(;)이 붙어서 나옴

    const aaa = document.cookie
            .split("; ") // split의 결과 ['aaa=철수', 'zzz=맹구']
            .filter((el) => el.startsWith('aaa='))[0] // ['aaa=철수', 'zzz=맹구']
            // 필터링 된 'aaa=' 데이터만 빼올 수 있다
    const result = aaa.replace("aaa=", '')
    console.log(result)
  };
  const onClickGetLocal = () => {
    const bbb = localStorage.getItem("bbb");
    console.log(bbb);
  };
  const onClickGetSession = () => {
    const ccc = sessionStorage.getItem("ccc");
    console.log(ccc);
  };

  return (
    <div>
      <button onClick={onClickSaveCookie}>쿠키 저장</button>
      {/* 저장되어 있는 모든 데이터들이 console에 찍히게 되는데 각각의 데이터를 ;으로 구분할 수 있다 */}
      {/* 분리하길 원하는 경우 ;을 기준으로 split으로 나눌 수 있다 */}
      <button onClick={onClickSaveLocal}>로컬 저장</button>
      <button onClick={onClickSaveSession}>세션 저장</button>
      =================
      <button onClick={onClickGetCookie}>쿠키 조회</button>
      <button onClick={onClickGetLocal}>로컬 조회</button>
      <button onClick={onClickGetSession}>세션 조회</button>
    </div>
  );
}
