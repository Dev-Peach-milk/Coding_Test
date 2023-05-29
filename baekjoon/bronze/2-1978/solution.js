// [문제 링크]: https://www.acmicpc.net/problem/1978

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
​
let lineInput = fs.readFileSync(filePath).toString().trim().split("\n");
​
let input = lineInput[1].split(" ");
let result = 0;
​
for (let i = 0; i < input.length; i++) {
  if (isPrime(+input[i])) {
    result++;
  }
}
​
function isPrime(num) {
  if(num === 1) return false;
  for(let i = 2; i * i <= num; i++) {
    if(num % i === 0) return false;
  }
  return true;
}
​
console.log(result);