// https://www.codetree.ai/missions/2/problems/comfort-zone?&utm_source=clipboard&utm_medium=text
// DSF / 안전지대

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
input = input.map((e) => e.split(" ").map(Number));
let visited = [];
let maxSafeAreas = Number.MIN_SAFE_INTEGER;
let minK = 0;

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

function dfs(x, y, k) {
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (
      nx >= 0 &&
      nx < n &&
      ny >= 0 &&
      ny < m &&
      input[nx][ny] > k &&
      !visited[nx][ny]
    ) {
      visited[nx][ny] = true;
      dfs(nx, ny, k);
    }
  }
}

for (let k = 1; k <= 100; k++) {
  visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => false)
  );
  let countSafe = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (input[i][j] <= k || visited[i][j]) continue;
      countSafe++;
      visited[i][j] = true;
      dfs(i, j, k);
    }
  }
  if (maxSafeAreas < countSafe) {
    maxSafeAreas = countSafe;
    minK = k;
  }
}

console.log(`${minK} ${maxSafeAreas}`);
