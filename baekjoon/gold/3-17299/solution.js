// [문제 링크]: https://www.acmicpc.net/problem/17299

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
​
let lineInput = fs.readFileSync(filePath).toString().trim().split("\n");
​
let size = +lineInput[0];
let A = lineInput[1].split(" ");
let F = {};
​
A.forEach(e => {
  F[e] = (F[e] || 0) + 1;
})
​
let tmp = [];
let result = new Array(size).fill(-1);
for (let i = 0; i < size; i++) {
  while (tmp.length && F[A[[tmp[tmp.length - 1]]]] < F[A[i]]) {
    result[tmp.pop()] = A[i];
  }
  tmp.push(i);
}
​
console.log(result.join(' '))