function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;

  function DFS(L, sum) {
    if (sum > m) return;
    if (L >= answer) return;

    if (sum === m) {
      answer = Math.min(answer, L);
      return;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
      DFS(L + 1, sum + arr[i]);
    }
  }

  DFS(0, 0);
  return answer;
}

let arr = [1, 2, 5, 6];
console.log(solution(24, arr));
