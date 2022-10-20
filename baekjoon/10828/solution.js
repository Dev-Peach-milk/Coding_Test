// [문제 링크]: https://www.acmicpc.net/problem/10828

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
​
// string array
let lineInput = fs.readFileSync(filePath).toString().trim().split("\n");
​
let stack = [];
let result = [];
​
const length = lineInput.shift();
​
for(let i = 0; i < length; i++) {
  switch(lineInput[i]) {
    case 'pop':
      result.push(stack.pop() || -1);
      break;
​
    case 'size':
      result.push(stack.length);
      break;
​
    case 'empty':
      result.push(stack.length ? 0 : 1)
      break;
    
    case 'top':
      result.push(stack[stack.length - 1] || -1);
      break;
​
    default:
      stack.push(lineInput[i].split(' ')[1]);
      break;
  }
}
​
console.log(result.join('\n'));