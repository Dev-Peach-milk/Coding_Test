// 처음 내 풀이
function solution(n, k, arr, m) {
  let answer = 0;
  const tmp = Array.from({ length: k }, () => 0);

  function DFS(L, s) {
    if (L === k) {
      if (tmp.reduce((a, b) => a + b, 0) % m === 0) answer += 1;
      return;
    }
    for (let i = s; i <= arr.length - 1; i++) {
      tmp[L] = arr[i];
      DFS(L + 1, i + 1);
    }
  }

  DFS(0, 0);
  return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
