// 나의 풀이
function solution(arr) {
  arr.sort((a, b) => {
    if (a < 0 && b > 0) return a - b;
    if (a > 0 && b < 0) return b - a;
  });
  return arr;
}

// 정렬사용하지 않은 풀이
function solution2(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) answer.push(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) answer.push(arr[i]);
  }
  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
console.log(solution2(arr));
