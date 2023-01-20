function solution(age) {
    let answer = '';
    let ageArr = String(age).split('');
    
    for (let i = 0; i < ageArr.length; i++) {
        answer += String.fromCharCode(Number(ageArr[i]) + 97);
    }
    
    return answer;
}