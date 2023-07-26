// 강의 듣고 일단 풀기
function solution(m, arr) {
  let answer = 0;
  let left = 0;
  let sum = 0;
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    if (sum <= m) {
      answer += right - left + 1;
    }
    if (sum > m) {
      while (sum > m) {
        sum -= arr[left];
        left++;
      }
      answer += right - left + 1;
    }
  }

  return answer;
}

// 강사님 코드
function solution2(m, arr) {
  let answer = 0,
    sum = 0,
    left = 0;
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    while (sum > m) {
      sum -= arr[left++];
    }
    answer += right - left + 1;
  }
  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
console.log(solution2(5, a));
