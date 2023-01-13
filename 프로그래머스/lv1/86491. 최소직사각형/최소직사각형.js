function solution(sizes) {
    let wallet = [0, 0];
    
    for (let i of sizes) {
        if (i[0] >= i[1]) {
            if (i[0] > wallet[0]) wallet[0] = i[0];
            if (i[1] > wallet[1]) wallet[1] = i[1];
        } else {
            if (i[1] > wallet[0]) wallet[0] = i[1];
            if (i[0] > wallet[1]) wallet[1] = i[0];
        }
    }
    
    return wallet[0] * wallet[1];
}