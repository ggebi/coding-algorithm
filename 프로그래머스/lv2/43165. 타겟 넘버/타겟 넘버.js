function solution(numbers, target) {
    return dfs(numbers, target, 0, 0);
}

function dfs(numbers, target, index, sum) {
    if (index === numbers.length) {
        return sum === target ? 1 : 0;
    }

    const add = dfs(numbers, target, index + 1, sum + numbers[index]);
    const subtract = dfs(numbers, target, index + 1, sum - numbers[index]);
    
    return add + subtract;
}
