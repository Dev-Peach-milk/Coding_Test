// https://www.codetree.ai/missions/2/problems/lis-on-the-integer-grid?&utm_source=clipboard&utm_medium=text
// DP - 격자 안에서 한 칸씩 전진하는 DP / 정수 사각형 최장 증가 수열

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
input = input.map((e) => e.split(" ").map(Number));

let answer = 0;
let boards = [];

const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => 1));
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    boards.push({ board: input[i][j], x: i, y: j });
  }
}

boards.sort((a, b) => a.board - b.board);

for (let value of boards) {
  let x = value.x;
  let y = value.y;
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx >= 0 && nx < n && ny >= 0 && ny < n && input[nx][ny] > input[x][y]) {
      dp[nx][ny] = Math.max(dp[nx][ny], dp[x][y] + 1);
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    answer = Math.max(answer, dp[i][j]);
  }
}

console.log(answer);
