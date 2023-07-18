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

// 답안 풀이
function solution2(n, k, arr, m) {
  let answer = 0;

  function DFS(L, s, sum) {
    if (L === k && sum % m === 0) {
      answer += 1;
      return;
    }
    for (let i = s; i <= n; i++) {
      DFS(L + 1, i + 1, sum + arr[i]);
    }
  }

  DFS(0, 0, 0);
  return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
console.log(solution2(5, 3, arr, 6));
