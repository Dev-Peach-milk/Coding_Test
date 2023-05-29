// [문제 링크]: https://www.acmicpc.net/problem/9012

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
​
let lineInput = fs.readFileSync(filePath).toString().trim().split("\n");
let len = lineInput.shift();
​
function VPS(input) {
  let stack = [];
  for(let i = 0; i < input.length; i++) {
    if(input[i] === '(') {
      stack.push('(');
    }
    if(input[i] === ')') {
      if(!stack.length) {
        stack.push(')')
        break;
      }
      if(stack[stack.length - 1] === ')') stack.push(')');
      stack.pop();
    }
  }
  if(stack.length) console.log('NO');
  else console.log('YES');
}
​
for(let i = 0; i < len; i++) {
  VPS(lineInput[i])
}