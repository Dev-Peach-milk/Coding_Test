// [문제 링크]: https://www.acmicpc.net/problem/9012

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
​
let lineInput = fs.readFileSync(filePath).toString().trim().split("\n");
​
let len = lineInput.shift();
​
for(let i = 0; i < len; i++) {
  let stack = [];
  for(let j = 0; j < lineInput[i].length; j++) {
    if(lineInput[i][j] === '(') {
      stack.push('(');
    }
    if(lineInput[i][j] === ')') {
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