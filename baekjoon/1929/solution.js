// [문제 링크]: https://www.acmicpc.net/problem/1929

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
​
let a = Number(input[0]);
let b = Number(input[1]);
let result = "";
let arr = Array(b + 1).fill(true);
arr[0] = arr[1] = false
​
// for (let i = 0; i < a; i++) {
//   arr[i] = false;
// }
​
for (let i = 2; i * i <= b; i++) {
  if (arr[i]) {
    for (let j = i * i; j <= b; j += i) {
      arr[j] = false;
    }
  }
}
​
for(let i = a; i <= b; i++) {
  if(arr[i]) {
    result += i + '\n'
  }
}
​
console.log(result.trim());