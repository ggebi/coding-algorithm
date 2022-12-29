function solution(n) {
  let answer = 1;

  while (true) {
    if ((6 * answer) % n == 0) {
      break;
    }
    answer++;
  }

  return answer;
}