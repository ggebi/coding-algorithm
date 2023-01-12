function solution(citations) {
    let answer = 0;
    let sortedArr = citations.sort((a, b) => a - b);
    
    return sortedArr[sortedArr.length - 1] - sortedArr[parseInt(sortedArr.length / 2)];
}