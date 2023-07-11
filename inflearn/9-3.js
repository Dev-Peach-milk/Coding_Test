function solution(board) {
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

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
