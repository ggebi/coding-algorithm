function solution(n, k) {
    const lambs = n * 12000;
    const drinks = k * 2000; 
    const service = parseInt(n / 10) * 2000;
    
    return lambs + drinks - service;
}