// https://www.codetree.ai/missions/2/problems/graph-traversal?&utm_source=clipboard&utm_medium=text
// DFS / 그래프 탐색
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [V, E] = input.shift().split(" ").map(Number);
input = input.map((el) => el.split(" ").map(Number));

let answer = -1;
const graph = Array.from({ length: V + 1 }, () => []);
const visited = Array.from({ length: V + 1 }, () => false);

for (let i = 0; i < input.length; i++) {
  let start = input[i][0];
  let end = input[i][1];

  graph[start].push(end);
  graph[end].push(start);
}

function dfs(v) {
  for (let i = 0; i < graph[v].length; i++) {
    let nv = graph[v][i];
    if (!visited[nv]) {
      visited[nv] = true;
      answer++;
      dfs(nv);
    }
  }
}

if (E === 0 || graph[1].length === 0) {
  answer = 0;
} else {
  dfs(1);
}

console.log(answer);
