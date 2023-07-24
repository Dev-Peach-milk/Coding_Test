// 내풀이
function solution(m, arr) {
  let answer = 0;
  let p1 = 0;
  for (let p1 = 0; p1 < arr.length; p1++) {
    let sum = arr[p1];
    let p2 = p1 + 1;
    while (sum < m) {
      sum += arr[p2++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

// 강사님 풀이
// left, right point를 이동시키고, 그 사이의 값의 합을 sum으로 둔다.
// 이때 sum이 m보다 작으면 right를 증가시키면서 sum에 더하고
// sum이 m과 같거나 크면 left를 증가시키면서 sum에서 뺀다.

// 강사님 풀이 기반 내 코드
function solution2(m, arr) {
  let answer = 0;
  let left = (right = 0);
  let sum = arr[left];
  for (let right = 1; right < arr.length; ) {
    if (sum < m) {
      sum += arr[right++];
    }
    if (sum > m) {
      sum -= arr[left++];
    }
    if (sum === m) {
      sum -= arr[left++];
      answer++;
    }
  }
  return answer;
}

// 강사님 코드
function solution3(m, arr) {
  let answer = (left = sum = 0);
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[left++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
console.log(solution2(6, a));
console.log(solution3(6, a));
