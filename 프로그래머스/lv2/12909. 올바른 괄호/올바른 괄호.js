function solution(s){
    let answer = true;
    let bufferNum = 0;
    
    for (i of s) {
        if (i === '(') bufferNum++;
        else bufferNum--;
        
        if (bufferNum < 0) return false;
    }
    
    if (bufferNum !== 0) return false;

    return answer;
}