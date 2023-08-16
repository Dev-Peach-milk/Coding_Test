// 1325 효율적인 해킹 (https://www.acmicpc.net/problem/1325)
// 문제 주의할 점: cycle 되었을 때도 고려해야 함

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ");

let max = 0;
let answer = [];
const graph = Array.from({ length: +N + 1 }, () => []);

for (let i = 1; i < input.length; i++) {
  let [child, parent] = input[i].split(" ").map(Number);
  graph[parent].push(child);
}

function getComputers(v) {
  let count = 0;
  const stack = [v];
  const visited = Array.from({ length: +N + 1 }, () => 0);

  while (stack.length) {
    let x = stack.pop();
    visited[x] = 1;
    for (let i = 0; i < graph[x].length; i++) {
      let val = graph[x][i];
      if (visited[val]) continue;
      visited[val] = 1;
      count += 1;
      stack.push(val);
    }
  }

  if (count > max) {
    max = count;
    answer = [v];
  } else if (count === max) {
    answer.push(v);
  }
}

for (let i = 1; i <= +N; i++) {
  getComputers(i);
}

console.log(answer.join(" "));
