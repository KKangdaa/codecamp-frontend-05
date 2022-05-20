// 핸드폰 번호 가리기

function solution(phone_number) {
  let answer = "";

  answer = answer.padStart(phone_number.length - 4, "*");
  // padStart 문자열에서 사용할 수 있는 메서드

  answer += phone_number.slice(phone_number.length - 4, phone_number.length);

  return answer;
  // console.log(phone_number.length)
}
