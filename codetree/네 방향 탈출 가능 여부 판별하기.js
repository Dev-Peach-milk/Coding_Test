// https://www.codetree.ai/missions/2/problems/determine-escapableness-with-4-ways?&utm_source=clipboard&utm_medium=text
// BFS 탐색 / 네 방향 탈출 가능 여부 판별하기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
input = input.map((e) => e.split(" ").map(Number));

let answer = 0;
const q = [];
const visited = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => false)
);

function bfs() {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  while (q.length) {
    let [x, y] = q.shift();
    if (x === n - 1 && y === m - 1) answer = 1;

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        input[nx][ny] === 1 &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;
        q.push([nx, ny]);
      }
    }
  }
}

q.push([0, 0]);
visited[0][0] = true;
bfs();

console.log(answer);
