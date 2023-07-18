function solution(a, b, c) {
  let answer = "NO";
  const max = Math.max(a, b, c);
  const sum = a + b + c;

  if (sum - max > max) answer = "YES";

  return answer;
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
