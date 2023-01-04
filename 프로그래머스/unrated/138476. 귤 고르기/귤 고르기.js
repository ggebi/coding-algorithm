function solution(k, tangerine) {
  let answer = 0;
  let dict = {};
  let arr = [];

  for (let i of tangerine) {
    dict[i] = (dict[i] || 0) + 1;
  }

  arr = Object.entries(dict).sort((a, b) => b[1] - a[1]);

  for (let i of arr) {
    if (k > i[1]) {
      k -= i[1];
      answer++;
    } else {
      answer++;
      break;
    }
  }

  return answer;
}