// [문제 링크]: https://www.acmicpc.net/problem/10808

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
​
let lineInput = fs.readFileSync(filePath).toString().trim().split("\n");
let input = lineInput[0].split('')
let answer = new Array(26).fill(0)
input.forEach(ch => {
  answer[(ch.charCodeAt() - 97)]++;
})
console.log(answer.join(' '))