// x만큼 간격이 있는 n개의 숫자

function solution(x, n) {
  const answer = new Array(n).fill(1).map((num, i) => {
    const sum = num + i;
    return x * sum;
  });
  return answer;
}
