// https://www.codetree.ai/missions/2/problems/puyo-puyo?&utm_source=clipboard&utm_medium=text
// DFS / 뿌요뿌요

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
input = input.map((e) => e.split(" ").map(Number));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
const visited = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => false)
);
let blockNum = 0;
let sameBlocks = 0;
let maxBlocks = 0;

function dfs(x, y) {
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (
      nx >= 0 &&
      nx < n &&
      ny >= 0 &&
      ny < n &&
      input[nx][ny] === input[x][y] &&
      !visited[nx][ny]
    ) {
      sameBlocks++;
      visited[nx][ny] = true;
      dfs(nx, ny);
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (visited[i][j]) continue;
    sameBlocks = 1;
    visited[i][j] = true;
    dfs(i, j);
    maxBlocks = sameBlocks > maxBlocks ? sameBlocks : maxBlocks;
    blockNum = sameBlocks >= 4 ? ++blockNum : blockNum;
  }
}

console.log(blockNum + " " + maxBlocks);
