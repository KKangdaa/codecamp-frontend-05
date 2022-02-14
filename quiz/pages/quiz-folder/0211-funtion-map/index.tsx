export default function FunctionMap() {
  return ["철수", "영희", "훈이", "맹구"].map((el, index) => {
    console.log(`${el}는 ${index + 1}번째 칸에 들어있습니다.`);
  });
}
