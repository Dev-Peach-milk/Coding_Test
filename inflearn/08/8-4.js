function solution(n) {
  const answer = [];
  const checked = Array.from({ length: n + 1 }, () => 0);

  function DFS(v) {
    if (v === n + 1) {
      let tmp = "";
      for (let i = 1; i < v; i++) {
        if (checked[i] === 1) tmp += i;
      }
      if (tmp.length > 0) answer.push(tmp.trim());
      return;
    }
    checked[v] = 1;
    DFS(v + 1);
    checked[v] = 0;
    DFS(v + 1);
  }

  DFS(1);

  return answer;
}

console.log(solution(3));
