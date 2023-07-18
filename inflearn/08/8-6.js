function solution(C, arr) {
  let answer = Number.MIN_SAFE_INTEGER; // 내 코드; let answer = 0;
  const N = arr.length;

  function DFS(L, sum) {
    if (sum > C) return; // 내 코드; if (sum === C) return;
    if (L === N) {
      answer = Math.max(answer, sum); // 내 코드 if (sum >= answer && sum <= C) answer = sum;
      return;
    }
    DFS(L + 1, sum + arr[L]);
    DFS(L + 1, sum);
  }

  DFS(0, 0);
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
