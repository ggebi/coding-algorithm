// 장군개미 5
// 병정개미 3
// 일개미 1
function solution(hp) {
    let answer = 0;
    let ants = [5, 3, 1];
    
    for (let i of ants) {
        answer += Math.floor(hp / i);
        hp = hp % i;
    }
    
    return answer;
}