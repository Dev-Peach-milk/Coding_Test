// DFS와 BFS (https://www.acmicpc.net/problem/1260)
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m, v] = input.shift().split(" ").map(Number);

let graph = Array.from({ length: n + 1 }, () => []);

for (let i = 0; i < input.length; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

graph = graph.map((g) => g.sort((a, b) => a - b));
let visited = Array.from({ length: n + 1 }, () => 0);
let answer = [];

function DFS(V) {
  if (visited[V]) return;

  visited[V] = 1;
  answer.push(V);

  for (let i = 0; i < graph[V].length; i++) {
    let next = graph[V][i];
    if (visited[next] === 0) {
      DFS(next);
    }
  }
}

DFS(v);
console.log(answer.join(" "));

answer = [];
visited.fill(0);

function BFS(V) {
  let queue = [V];
  while (queue.length) {
    let x = queue.shift();
    if (visited[x] === 1) continue;

    visited[x] = 1;
    answer.push(x);

    for (let i = 0; i < graph[x].length; i++) {
      let next = graph[x][i];
      if (visited[next] === 0) queue.push(next);
    }
  }
}

BFS(v);
console.log(answer.join(" "));

/**
 * 참고
 * https://velog.io/@ywc8851/%EB%B0%B1%EC%A4%80-1260-DFS%EC%99%80-BFS-javascript
 * https://cider.tistory.com/4
 */
