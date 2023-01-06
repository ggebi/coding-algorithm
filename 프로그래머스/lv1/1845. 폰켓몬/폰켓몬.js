function solution(nums) {
  const answer = nums.length / 2;
  const deCnt = new Set(nums).size;

  return answer > deCnt ? deCnt : answer;
}