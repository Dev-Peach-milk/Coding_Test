// https://www.codetree.ai/missions/2/problems/places-can-go?&utm_source=clipboard&utm_medium=text
// BFS 탐색 / 갈 수 있는 곳들

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const map = input.slice(1, n + 1).map((e) => e.split(" ").map(Number));
const starts = input.slice(n + 1).map((e) => e.split(" ").map(Number));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const visited = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => false)
);
let answer = 0;

const q = [];
function bfs() {
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
        !map[nx][ny] &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;
        q.push([nx, ny]);
        answer++;
      }
    }
  }
}

for (let i = 0; i < starts.length; i++) {
  let [r, c] = starts[i].map((e) => e - 1);

  q.push([r, c]);
  answer++;
  visited[r][c] = true;
}
bfs();

console.log(answer);
