// https://www.codetree.ai/missions/2/problems/determine-escapableness-with-2-ways?&utm_source=clipboard&utm_medium=text
// DFS / 두 방향 탈출 가능 여부 판별하기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
input = input.map((e) => e.split(" ").map(Number));
let answer = 0;

const visited = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => false)
);

const dx = [1, 0];
const dy = [0, 1];

function dfs(x, y) {
  if (x === n - 1 && y === m - 1) {
    answer = 1;
    return;
  }
  for (let i = 0; i < 2; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (
      nx >= 0 &&
      nx < n &&
      ny >= 0 &&
      ny < m &&
      !visited[nx][ny] &&
      input[nx][ny]
    ) {
      visited[nx][ny] = true;
      dfs(nx, ny);
    }
  }
}

dfs(0, 0);

console.log(answer);
