export default function PromiseAllPage() {
  const onClickPromise = async () => {
    console.time("시작");

    const result1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("철수");
      }, 5000);
    });
    console.log(result1);

    const result2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("영희");
      }, 2000);
    });
    console.log(result2);

    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("훈이");
      }, 8000);
    });
    console.log(result3);

    console.timeEnd("시작");
  };

  const onClickPromiseAll = async () => {
    // 1. 하나하나 각각 입력하는 방법

    /* console.time("promiseAll 시작");
    // 여러 데이터를 같이 보낼 땐 Promise.all로 사용
    const results = await Promise.all([
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("철수");
        }, 5000);
      }),

      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("영희");
        }, 2000);
      }),

      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("훈이");
        }, 8000);
      }),
    ]);
    console.log(results);
    console.timeEnd("promiseAll 시작"); */

    // 2. map을 사용해서 간소화하기
    console.time("promiseAll 시작");
    // 여러 데이터를 같이 보낼 땐 Promise.all로 사용
    const classmates = ["철수", "영희", "훈이"]; // [file1, file2, file3]
    const results = await Promise.all(
      classmates.map(
        (el) =>
          new Promise((resolve, reject) => {
            // uploadFile  variables:{}
            setTimeout(() => {
              resolve(el);
            }, 3000);
          })
      )
    );
    console.log(results);

    console.timeEnd("promiseAll 시작");
  };

  return (
    <>
      <button onClick={onClickPromise}>시작하기</button>
      <button onClick={onClickPromiseAll}>시작하기😘 (Promise.all)</button>
    </>
  );
}
