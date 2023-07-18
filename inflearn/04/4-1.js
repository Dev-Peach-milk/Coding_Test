function solution(n, arr) {
  let maxNumber = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    let num = arr[i];
    while (num >= 1) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    if (sum > maxSum) {
      maxSum = sum;
      maxNumber = arr[i];
    }
    if (sum === maxSum) {
      maxNumber = arr[i] > maxNumber ? arr[i] : maxNumber;
    }
  }
  return maxNumber;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
