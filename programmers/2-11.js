// 문자열 내림차순으로 배치하기

function solution(s) {
  const answer = s
    .split("")
    .sort((a, b) => {
      return a > b ? -1 : 1;
    })
    .join("");

  return answer;
}
