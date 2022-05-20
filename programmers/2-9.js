// 자릿수 더하기

function solution(n) {
  const answer = String(n)
    .split("")
    .reduce((cu, el) => {
      // console.log(typeof uc, typeof el)
      return cu + Number(el);
    }, 0);
  return answer;
}
