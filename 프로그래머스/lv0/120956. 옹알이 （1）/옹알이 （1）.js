function solution(babbling) {
    let answer = babbling.length;
    let result = babbling.filter(babble => {
        babble = babble.replaceAll(/aya|ye|woo|ma/g, '');
        return babble.length > 0;
    })

    return answer - result.length;
}