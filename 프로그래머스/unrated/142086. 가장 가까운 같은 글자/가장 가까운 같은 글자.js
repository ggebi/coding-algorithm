function extractAlphabet(str = '') {
    const strArr = str.split('');
    const setArr = new Set(strArr);
    return [...setArr];
}

function solution(s) {
    var answer = new Array(s.length).fill(0);
    const alphabets = extractAlphabet(s);
    const words = s.split('');
    
    for (i of alphabets) {
        let preIndex = -1;
        let fromIndex = words.indexOf(i);
        
        while (fromIndex != -1) {
            if (preIndex == -1) {
                answer[fromIndex] = preIndex;
            } else {
                answer[fromIndex] = fromIndex - preIndex;
            }
            preIndex = fromIndex;
            fromIndex = words.indexOf(i, fromIndex + 1);
        }
    }
    
    return answer;
}