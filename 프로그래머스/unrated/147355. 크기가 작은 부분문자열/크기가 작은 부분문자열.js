function solution(t, p) {
  let answer = 0;
  let pLen = p.length;
  let pNum = parseInt(p);

  for (let i = 0; i <= t.length - pLen; i++) {
    let comp = t.slice(i, pLen + i);

    if (parseInt(comp) <= pNum) answer++;
  }

  return answer;
}