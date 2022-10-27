// [문제 링크]: https://www.acmicpc.net/problem/1158

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
​
let wordInput = fs.readFileSync(filePath).toString().trim().split(/\s/g);
​
let N = +wordInput[0];
let K = +wordInput[1];
​
let arr = new Array(N).fill(1).map((e, i) => i + 1);
let answer = [];
while (arr.length) {
  for (let i = 0; i < K; i++) {
    arr.push(arr.shift());
  }
  answer.push(arr.pop());
}
answer = answer.join(", ");
answer = "<" + answer + ">";
console.log(answer);