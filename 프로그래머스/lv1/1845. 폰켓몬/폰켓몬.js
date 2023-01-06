function solution(nums) {
  let answer = nums.length / 2;
  let deduplicatedArr = new Set(nums);
  let deCnt = [...deduplicatedArr].length;

  return answer > deCnt ? deCnt : answer;
}