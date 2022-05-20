// 약수의 합

function solution(n) {
  const answer = new Array(n) // 해당 갯수에 맞는 배열 생성
    .fill(1) // 배열의 데이터마다 해당 데이터를 할당
    .reduce((cu, el, i) => {
      const num = el + i;
      return n % num === 0 ? cu + num : cu;
    }, 0);
  return answer;
}
