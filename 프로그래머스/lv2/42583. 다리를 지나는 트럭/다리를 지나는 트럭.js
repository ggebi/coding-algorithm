// bridge_length : 다리를 건너는데 걸리는 시간
// weight : 다리는 견딜수 있는 무게
// truct_weights : 순서대로 대기하고있는 트럭 (queue)
function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let crossed = [];
    let bridge = Array.from({length: bridge_length}, () => 0);
    let wait = truck_weights;
    let curWeight = 0;
    
    while (wait.length > 0 || bridge.length > 0) {
        if (bridge[0] > 0) {
            curWeight -= bridge[0];
        }
        bridge.shift();
        
        if (wait.length) {
            if ((weight - curWeight) >= wait[0]) {
                bridge.push(wait[0]);
                curWeight += wait[0];
                wait.shift();
            } else {
                bridge.push(0);
            }
        }
        
        answer++;
    }
    
    return answer;
}