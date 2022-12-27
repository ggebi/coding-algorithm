function solution(s){
    let answer = true;
    let sArr = Array.from(s);
    let bufferNum = 0;
    
    if (sArr[0] === ')' || sArr[sArr.length - 1] === '(') {
        return false;
    }
    
    for (i of sArr) {
        if (i === '(') bufferNum++;
        else bufferNum--;
        
        if (bufferNum < 0) return false;
    }
    
    if (bufferNum !== 0) return false;

    return answer;
}