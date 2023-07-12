// BFS
function solution(board) {
  let answer = 0;
  const n = board.length;
  const delta = [
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
  ];

  let queue = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        answer++;
        board[i][j] = 0;
        queue.push([i, j]);
        while (queue.length) {
          let [x, y] = queue.shift();
          for (let [dx, dy] of delta) {
            let nextX = x + dx;
            let nextY = y + dy;
            if (
              nextX >= 0 &&
              nextX < n &&
              nextY >= 0 &&
              nextY < n &&
              board[nextX][nextY] === 1
            ) {
              board[nextX][nextY] = 0;
              queue.push([nextX, nextY]);
            }
          }
        }
      }
    }
  }
  return answer;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
