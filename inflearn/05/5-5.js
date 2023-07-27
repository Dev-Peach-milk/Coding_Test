function solution(k, arr) {
  let answer = 0;
  let sum = arr[0] + arr[1] + arr[2];
  answer = Math.max(answer, sum);

  for (let i = 0; i < arr.length - k; i++) {
    sum += arr[i + k] - arr[i];
    answer = Math.max(answer, sum);
  }

  return answer;
}

// 강사님 코드
function solution2(k, arr) {
  let answer,
    sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
    console.log(i, sum, answer);
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
console.log(solution2(3, a));
