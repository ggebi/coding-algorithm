function solution(array) {
    const sortedArr = array.sort(function(a, b) {return a - b;})
    return sortedArr[parseInt(sortedArr.length / 2)];
}