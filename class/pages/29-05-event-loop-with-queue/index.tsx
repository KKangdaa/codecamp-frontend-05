/* 
// 싸이월드때 했던 내용 복습

setInterval(() => {

  document.getElementById('timer')?.innerText = '2:59'

}, 1000)
 */

export default function TaskQueuePage() {
  const onClickTimer = () => {
    console.log("시작");

    // 비동기작업(매크로큐에 들어감)
    setTimeout(() => {
      console.log("setTimeout / 매크로큐 / 0초 뒤에 실행됨");
    }, 0);

    new Promise((resolve) => {
      resolve("콩");
    }).then((res) =>
      console.log("저는 promise / 마이크로큐 / 0초 뒤에 실행 - 1")
    );

    setInterval(() => {
      console.log("setInterval / 매크로큐 / 0초 마다 실행됨");
    }, 0);

    let sum = 0;
    for (let i = 0; i <= 90000000000; i += 1) {
      sum = sum + 1;
    }

    new Promise((resolve) => {
      resolve("콩");
    }).then((res) =>
      console.log("저는 promise / 마이크로큐 / 0초 뒤에 실행 - 2")
    );

    console.log("끝");
  };

  return <button onClick={onClickTimer}>시작</button>;
}
