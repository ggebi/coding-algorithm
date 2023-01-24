function solution(maps) {
    let answer = 1;
    let visited = maps;
    let queue = [];
    const dx = [-1, 1, 0, 0]; // 좌우하상
    const dy = [0, 0, -1, 1]; // 좌우하상
    const n = maps.length; // 가로
    const m = maps[0].length; // 세로
    
    queue.push([0, 0]);
    visited[0][0] = 0;
    
    while(queue.length > 0) {
        let size = queue.length;
        
        // queue 처리
        for(let i = 0; i < size; i++) {
            let [x, y] = queue.shift();
            
            // 좌우하상 방향체크
            for(let j = 0; j < 4; j++) {
                let nx = x + dx[j];
                let ny = y + dy[j];
                
                if(nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {
                    // 마지막 지점에 도달하면 종료
                    if(nx == n - 1 && ny == m - 1) {
                        return ++answer;
                    }
                    queue.push([nx, ny]);
                    visited[nx][ny] = 0;
                }
            }
        }
        answer++;
    }
    
    return -1;
}