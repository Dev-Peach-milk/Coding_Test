function solution(arr) {
  return Math.min(...arr);
}

let arr = [5, 7, 1, 3, 2, 9, 11];
let arr2 = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));
console.log(solution(arr2));
