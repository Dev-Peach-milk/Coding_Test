function solution(n, arr) {
  let answer = 0;
  const graph = Array.from({ length: n + 1 }, () => []);
  const ch = Array.from({ length: n + 1 }, () => 0);
  let path = [];

  for (let [a, b] of arr) {
    graph[a].push(b);
  }
  console.log(graph);

  function DFS(v) {
    if (v === n) {
      answer++;
      console.log("path", path);
      return;
    }
    for (let i = 0; i < graph[v].length; i++) {
      if (ch[graph[v][i]] === 0) {
        ch[graph[v][i]] = 1;
        path.push(graph[v][i]);
        DFS(graph[v][i]);
        path.pop();
        ch[graph[v][i]] = 0;
      }
    }
  }

  ch[1] = 1;
  path.push(1);
  DFS(1);
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
