// 같은 숫자는 싫어

function solution(arr) {
  var answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== answer[answer.length - 1]) {
      console.log(answer.push(arr[i]));
    }
    // console.log(answer[answer.length])
  }

  return answer;
}
