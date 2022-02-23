/* 
// 싸이월드때 했던 내용 복습

setInterval(() => {

  document.getElementById('timer')?.innerText = '2:59'

}, 1000)
 */

export default function TaskQueuePage() {
  const onClickTimer = () => {
    console.log("시작");

    setTimeout(() => {
      console.log("1초 뒤에 실행됨");
    }, 1000);
    // setTimeout 비동기 작업(비동기 함수)

    let sum = 0;
    for (let i = 0; i <= 9000000000; i++) {
      // 1씩 더해짐
      sum = sum + 1;
    }

    console.log("끝");
  };

  return <button onClick={onClickTimer}>시작</button>;
}
