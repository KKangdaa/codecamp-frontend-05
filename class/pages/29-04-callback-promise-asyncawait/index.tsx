import axios from "axios";

export default function CallbackPromiseAsyncAwaitPage() {
  const onClickCallback = () => {
    const aaa = new XMLHttpRequest();
    aaa.open("get", "http://numbersapi.com/random?min=1&max=200");
    aaa.send();
    aaa.addEventListener("load", (res: any) => {
      // load되면 함수실행
      const num = res.target.response.split(" ")[0]; // 랜덤숫자
      const bbb = new XMLHttpRequest();
      bbb.open("get", `http://koreanjson.com/posts/${num}`);
      bbb.send();

      bbb.addEventListener("load", (res: any) => {
        const userId = JSON.parse(res.target.response).UserId;
        const ccc = new XMLHttpRequest();
        ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
        ccc.send();

        ccc.addEventListener("load", (res: any) => {
          console.log("최종결과값");
          console.log(JSON.parse(res.target.response));
        });
      });
    }); // callback함수 사용
  };
  // 콜백지옥이란 이미지를 검색할 경우 이미지 현상과 비슷하게 발생하게됨

  //

  // Promise체인? >>>콜백처럼 안쪽으로 들어가는게 아니라 ↓ 아래의 방향으로 펼쳐점
  const onClickPromise = () => {
    // callback함수를 좀 더 나은 방법으로 할 수 있는 방식(하지만 직관적이지 못함)
    console.log("1번");

    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        console.log("2번");

        const num = res.data.split(" ")[0]; // 랜덤숫자

        return axios.get(`http://koreanjson.com/posts/${num}`);

        // console.log(res);
      })
      .then((res) => {
        console.log("3번");

        const userId = res.data.UserId;

        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        console.log("4번");

        console.log(res);
      });

    console.log("5번");
  };

  //

  const onClickAsyncAwait = async () => {
    // 깔끔하고 직관적이기 때문에 사용하는것

    // prettier-ignore
    const res1 = await axios.get("http://numbersapi.com/random?min=1&max=200")
    const num = res1.data.split(" ")[0];

    const res2 = await axios.get(`http://koreanjson.com/posts/${num}`);
    const userId = res2.data.UserId;

    // prettier-ignore
    const res3 = await axios.get(`http://koreanjson.com/posts?userId=${userId}`);

    console.log(res3);

    // promise를 지원하는 라이브러리이기 때문에 async await를 사용할 수 있는것
  };

  return (
    <>
      <button onClick={onClickCallback}>Callback 요청하기</button>
      <button onClick={onClickPromise}>Promise 요청하기</button>
      <button onClick={onClickAsyncAwait}>AsyncAwait 요청하기</button>
    </>
  );
}
