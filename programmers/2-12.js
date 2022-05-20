// K번째수

function solution(array, commands) {
  const answer = [];
  commands.forEach((nums) => {
    const result = array.slice(nums[0] - 1, nums[1]).sort((a, b) => {
      return a < b ? -1 : 1;
    });
    answer.push(result[nums[2] - 1]);
  });
  return answer;
}
