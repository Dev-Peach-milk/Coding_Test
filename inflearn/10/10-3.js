function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  const dy = Array.from({ length: arr.length }, () => 1);

  dy[0] = 1;

  for (let i = 0; i < dy.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j]) {
        dy[i] = Math.max(dy[j] + 1, dy[i]);
        answer = Math.max(answer, dy[i]);
      }
    }
  }

  return answer;
}

//강사님 풀이
function solution1(arr) {
  let answer = 0;
  const dy = Array.from({ length: arr.length }, () => 0);

  dy[0] = 1;
  for (let i = 0; i < arr.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && dy[j] > max) {
        max = dy[j];
      }
      dy[i] = max + 1;
      answer = Math.max(answer, dy[i]);
    }
  }

  return answer;
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
let arr2 = [2, 7, 5, 8, 6, 4, 7, 12, 3];

console.log(solution(arr));
console.log(solution(arr2));

console.log(solution1(arr));
console.log(solution1(arr2));
