function solution(k, score) {
    let answer = [];
    let sortedScore = [];
    
    for (s of score) {
        sortedScore.push(s);
        sortedScore.sort(function(a, b) {return a - b});
        
        if (k < sortedScore.length) {
            sortedScore.shift();
        }
        answer.push(sortedScore[0]);
    }

    return answer;
}