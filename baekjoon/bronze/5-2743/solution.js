// [문제 링크]: https://www.acmicpc.net/problem/2743

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
​
let lineInput = fs.readFileSync(filePath).toString().trim().split("\n");
​
​
console.log(lineInput[0].length);