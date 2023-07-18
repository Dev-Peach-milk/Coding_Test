// 조합

// 처음 나의 풀이
function solution1(n, r) {
  let answer;

  function DFS(n, r) {
    if (r === 1) return n;
    if (r === n) return 1; // 이 두개를 합쳐서 if(n === r || r === 0) return 1; 로 할 수 있음

    return DFS(n - 1, r - 1) + DFS(n - 1, r);
  }

  answer = DFS(n, r);
  return answer;
}

// 메모이제이션 사용
function solution(n, r) {
  let answer;
  let dy = Array.from(Array(35), () => Array(35).fill(0)); // 문제 조건의 n 크기 따라 결정

  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r]; // 메모이제이션 된 값이 있으면 사용하기
    if (n === r || r === 0) return 1;

    return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r)); // 메모이제이션
  }

  answer = DFS(n, r);
  return answer;
}

console.log(solution(5, 3));
console.log(solution(33, 19));
