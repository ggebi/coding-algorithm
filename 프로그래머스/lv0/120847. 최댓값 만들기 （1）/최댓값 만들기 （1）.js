function solution(numbers) {
    let sortedNums = numbers.sort(function(a, b){ return b - a; });
    
    return sortedNums[0] * sortedNums[1];
}