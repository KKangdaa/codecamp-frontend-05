// 문자열 다루기 기본

function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

  const answer = s.split("").filter((num) => {
    // 숫자 데이터가 아닌 문자 데이터만 남긴다.
    // isNaN의 결과가 true 값인 데이터
    return isNaN(num);
  });

  return answer.length === 0;
}
