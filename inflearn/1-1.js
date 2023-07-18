function solution(a, b, c) {
  return Math.min(a, b, c);
}

// 이게 더 빠르긴 함
function solution2(a, b, c) {
  let answer = a;
  if (a > b) {
    answer = b;
  }
  if (c < answer) answer = c;
  return answer;
}

console.log(solution(2, 5, 1));
console.log(solution(6, 5, 11));

console.log(solution2(2, 5, 1));
console.log(solution2(6, 5, 11));
