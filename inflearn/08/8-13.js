// 파스칼의 삼각형 이항정리 공식 참고 할 것
function solution(n, f) {
  let answer = [];
  let isDone = false;
  const dy = Array.from({ length: 11 }, () => Array(11).fill(0));
  const ch = Array.from({ length: n + 1 }, () => 0);
  const p = Array.from({ length: n }, () => 0);
  const comb = Array.from({ length: n }, () => 0);

  function getComb(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    return (dy[n][r] = getComb(n - 1, r - 1) + getComb(n - 1, r));
  }

  function DFS(L, sum) {
    if (isDone) return;
    if (L === n && sum === f) {
      answer = [...p];
      isDone = true;
      return;
    }
    for (let i = 1; i <= n; i++) {
      if (ch[i] === 0) {
        ch[i] = 1;
        p[L] = i;
        DFS(L + 1, sum + p[L] * comb[L]);
        ch[i] = 0;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    comb[i] = getComb(n - 1, i); // [4C0, 4C1, 4C2, 4C3, 4C4]
  }
  DFS(0, 0);

  return answer;
}

console.log(solution(4, 16));
