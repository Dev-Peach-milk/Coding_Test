// https://www.codetree.ai/missions/2/problems/seperate-village?&utm_source=clipboard&utm_medium=text
// DFS / 마을 구분하기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const map = input.map((e) => e.split(" ").map(Number));
const visited = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => false)
);

let count = 0;
let countedPerson = 0;
const village = [];

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

function dfs(x, y) {
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (
      nx >= 0 &&
      nx < n &&
      ny >= 0 &&
      ny < n &&
      !visited[nx][ny] &&
      map[nx][ny]
    ) {
      visited[nx][ny] = true;
      countedPerson++;
      dfs(nx, ny);
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (map[i][j] === 1 && !visited[i][j]) {
      count++;
      countedPerson = 1;
      visited[i][j] = true;
      dfs(i, j);

      village.push(countedPerson);
    }
  }
}

village.sort((a, b) => a - b);

console.log(`${count}
${village.join("\n").trim()}`);
