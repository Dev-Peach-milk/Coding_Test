// https://www.codetree.ai/missions/2/problems/move-to-max-k-times?&utm_source=clipboard&utm_medium=text
// BFS 탐색 / K번 최댓값으로 이동하기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input.slice(0, 1)[0].split(" ").map(Number);
const grid = input.slice(1, 1 + n).map((e) => e.split(" ").map(Number));
const [startR, startC] = input
  .slice(n + 1)[0]
  .split(" ")
  .map((e) => +e - 1);

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let visited = [];
let move = false;
const max = { val: 0, r: startR, c: startC };
let q = [];

function checkMax(nx, ny) {
  if (grid[nx][ny] < max.val) return;
  if (grid[nx][ny] > max.val) {
    max.val = grid[nx][ny];
    max.r = nx;
    max.c = ny;
    move = true;
    return;
  }
  if (grid[nx][ny] === max.val && nx < max.r) {
    max.r = nx;
    max.c = ny;
    move = true;
    return;
  }
  if (grid[nx][ny] === max.val && nx === max.r && ny < max.c) {
    max.c = ny;
    move = true;
    return;
  }
}

function bfs(maxVal) {
  while (q.length) {
    let [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < n &&
        grid[nx][ny] < maxVal &&
        !visited[nx][ny]
      ) {
        q.push([nx, ny]);
        checkMax(nx, ny);
        visited[nx][ny] = true;
      }
    }
  }
}

for (let i = 0; i < k; i++) {
  move = false;
  let [r, c] = [max.r, max.c];
  visited = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => false)
  );

  q.push([r, c]);
  visited[r][c] = true;
  bfs(grid[r][c]);
  max.val = 0;
  if (!move) break;
}

console.log(max.r + 1 + " " + (max.c + 1));
