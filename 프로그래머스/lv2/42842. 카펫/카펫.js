function solution(brown, yellow) {
    let answer = [];
    let sum = brown + yellow;
    let x, y;
    
    for (let i = 1; i <= yellow; i++) {
        if (yellow % i === 0) {
            x = Math.max(i, yellow / i) + 2;
            y = Math.min(i, yellow / i) + 2;
            
            if (x * y === sum) {
                answer[0] = x;
                answer[1] = y;
                break; 
            }
        }
    }
    
    return answer;
}