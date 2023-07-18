// 처음 나의 풀이
function solution(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return solution(n - 2) + solution(n - 1);
}

// 강사님 풀이
function solution1(n) {
  let answer = 0;
  const dy = Array.from({ length: n + 1 }, () => 0);

  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i < n + 1; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }

  answer = dy[n];
  return answer;
}

console.log(solution(7));
console.log(solution1(7));
