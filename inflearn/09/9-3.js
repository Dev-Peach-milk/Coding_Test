// 내 풀이
function solution1(board) {
  let answer = 0;
  const delta = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const visited = Array.from({ length: 7 }, () => Array(7).fill(0));
  const path = [];

  function DFS(x, y) {
    if (x > 6 || y > 6) {
      return;
    }
    if (x === 6 && y === 6) {
      answer++;
      console.log(path);
      return;
    }
    for (let i = 0; i < 4; i++) {
      if (
        x + delta[i][0] < 0 ||
        y + delta[i][1] < 0 ||
        x + delta[i][0] > 6 ||
        y + delta[i][1] > 6
      ) {
        continue;
      }
      if (
        visited[x + delta[i][0]][y + delta[i][1]] === 0 &&
        arr[x + delta[i][0]][y + delta[i][1]] === 0
      ) {
        visited[x + delta[i][0]][y + delta[i][1]] = 1;
        path.push([x + delta[i][0], y + delta[i][1]]);
        DFS(x + delta[i][0], y + delta[i][1]);
        path.pop();
        visited[x + delta[i][0]][y + delta[i][1]] = 0;
      }
    }
  }

  visited[0][0] = 1;
  path.push([0, 0]);
  DFS(0, 0);

  return answer;
}

// 강사님 풀이
function solution(board) {
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  function DFS(x, y) {
    if (x === 6 && y === 6) {
      answer++;
      return;
    }
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) {
        //여기에서 한번에 조건을 설정함
        // visited를 별도로 관리하지 않고, board 자체를 변경함
        board[nx][ny] = 1;
        DFS(nx, ny);
        board[nx][ny] = 0;
      }
    }
  }

  board[0][0] = 1;
  DFS(0, 0);
  return answer;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution1(arr));
console.log(solution(arr));
