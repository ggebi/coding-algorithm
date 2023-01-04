function solution(participant, completion) {
  let answer = "";
  let dict = {};

  completion.forEach((i) => (dict[i] = (dict[i] || 0) + 1));
  for (let i of participant) {
    if (dict[i] > 0) {
      dict[i]--;
    } else {
      answer = i;
      break;
    }
  }

  return answer;
}