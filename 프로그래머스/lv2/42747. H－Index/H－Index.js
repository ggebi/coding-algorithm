function solution(citations) {
  let answer = 0;
  let sortedArr = [];

  if (citations.length === 1) return citations[0];

  sortedArr = citations.sort((a, b) => b - a);

  if (sortedArr[sortedArr.length - 1] > sortedArr.length)
    return sortedArr.length;

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] <= i) {
      answer = i;
      break;
    }
  }

  return answer;
}