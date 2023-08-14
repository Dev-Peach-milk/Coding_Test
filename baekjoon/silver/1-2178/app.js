// 미로 탐색 (https://www.acmicpc.net/problem/2178)
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);

let map = Array.from({ length: N }, (_, idx) =>
  input[idx + 1].split("").map(Number)
);
let queue = [];
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

queue.push([0, 0]);

while (queue.length) {
  const [x, y] = queue.shift();
  for (let i = 0; i < 4; i++) {
    const nextX = x + dx[i];
    const nextY = y + dy[i];

    if (nextX >= 0 && nextX < N && nextY >= 0 && nextY < M) {
      if (map[nextX][nextY] === 1) {
        map[nextX][nextY] = map[x][y] + 1;
        queue.push([nextX, nextY]);
      }
    }
  }
}

console.log(map[N - 1][M - 1]);
