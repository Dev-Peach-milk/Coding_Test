// [문제 링크]: https://www.acmicpc.net/problem/10799

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
​
let lineInput = fs.readFileSync(filePath).toString().trim().split("\n");
let input = lineInput[0];
let stick = [];
let count = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] === "(") {
    stick.push(input[i]);
  } else {
    if (input[i - 1] === "(") {
      stick.pop();
      count += stick.length;
    } else {
      stick.pop();
      count++;
    }
  }
}
console.log(count);