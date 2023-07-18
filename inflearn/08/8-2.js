function solution(n) {
  let answer = "";

  function dfs(L) {
    if (L === 1) {
      answer += L;
      return;
    }
    let num = L % 2;
    dfs(parseInt(L / 2));
    answer += num;
  }

  dfs(n);

  return answer;
}

console.log(solution(11));
