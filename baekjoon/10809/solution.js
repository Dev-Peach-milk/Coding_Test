// [문제 링크]: https://www.acmicpc.net/problem/10809

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
​
let lineInput = fs.readFileSync(filePath).toString().trim().split("\n");
let input = lineInput[0]
let answer = new Array(26).fill(-1)
for(let i = 0; i < input.length; i++) {
  let ch = input.charCodeAt(i) - 97
  answer[ch] = answer[ch] !== -1 ? answer[ch] : i
}
​
console.log(answer.join(' '))