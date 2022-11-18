// [문제 링크]: https://www.acmicpc.net/problem/2609

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
​
let wordInput = fs.readFileSync(filePath).toString().trim().split(/\s/g);
​
let a = Math.max(wordInput[0], wordInput[1]);
let b = Math.min(wordInput[0], wordInput[1]);
​
let gcd;
let lcm;
​
function GCD(x, y) {
  return x % y === 0 ? y : GCD(y, x % y);
}
​
console.log((gcd = GCD(a, b)));
console.log((lcm = (a * b) / gcd));
​