function solution(emergency) {
    let answer = [];
    let sortedEmer = emergency.slice();
    
    sortedEmer.sort((a, b) => b - a)
    
    for (let i = 0; i < emergency.length; i++) {
        answer.push(sortedEmer.indexOf(emergency[i]) + 1);
    }
    
    return answer;
}