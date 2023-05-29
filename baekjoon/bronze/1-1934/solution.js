// [문제 링크]: https://www.acmicpc.net/problem/1934

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
​
let lineInput = fs.readFileSync(filePath).toString().trim().split("\n");
let size = lineInput.shift(0);
let answer = "";
​
​
for (let i = 0; i < size; i++) {
  let [a, b] = lineInput[i].split(' ')
  let big = Math.max(a, b);
  let small = Math.min(a, b);
  let numGCD = gcd(big, small);
  let lcm = (big * small) / numGCD;
  answer += lcm + '\n';
}
​
function gcd(a, b) {
  return a % b === 0 ? b : gcd(b, a % b);
}
​
console.log(answer.trim())