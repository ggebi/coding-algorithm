function solution(numbers, target) {
    let answer = 0;
    
    // 초기값 실행
    dfs(0, 0);
    
    function dfs(level, sum) {
        // 마지막 경로에 도달
        if (level === numbers.length) {
            if (sum === target) answer++;
            return;
        }
        
        dfs(level + 1, sum + numbers[level]);
        dfs(level + 1, sum - numbers[level]);
    }
    
    return answer;
}