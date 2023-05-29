// [문제 링크]: https://www.acmicpc.net/problem/9093

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
​
let lineInput = fs.readFileSync(filePath).toString().trim().split("\n");
​
let len = lineInput.shift();
let answer = '';
​
for(let i = 0; i < len; i++) {
  lineInput[i] = lineInput[i].split(' ');
  for(let j = 0; j < lineInput[i].length; j++) {
    lineInput[i][j] = lineInput[i][j].split('').reverse().join('');
  }
  lineInput[i] = lineInput[i].join(' ');
}
answer = `${lineInput.join('\n')}`
​
console.log(answer);