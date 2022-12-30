function solution(my_string, n) {
    let answer = [];
    let strArr = [...my_string];
    
    for (i of strArr) {
        answer += i.repeat(n);
    }
    
    return answer;
}