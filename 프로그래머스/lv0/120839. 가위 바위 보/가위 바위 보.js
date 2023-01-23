function solution(rsp) {
    let answer = '';
    const counter = {
        "2": "0",
        "0": "5",
        "5": "2"
    }
    
    answer = rsp.split('').map(c => counter[c]).join('');
    
    return answer;
}