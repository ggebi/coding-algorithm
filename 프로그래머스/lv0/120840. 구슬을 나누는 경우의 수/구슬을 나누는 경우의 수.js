// 조합 = (30*29*28) / (1*2*3)
// 24!인 경우 int 데이터 범위초과 주의!!
// (30 / 1 * 29 / 2 * 28 / 3)
// function solution(balls, share) {
//     let answer = 1;
    
//     for (let i = 1; i <= share; i++) {
//         answer *= balls - (i - 1);
//         answer /= i;
//     }
    
//     return answer;
// }

const factorial = (num) => num === 0 ? 1 : num * factorial(num - 1)

function solution(balls, share) {
  return Math.round(factorial(balls) / factorial(balls - share) / factorial(share))
}