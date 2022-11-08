// [문제 링크]: https://www.acmicpc.net/problem/1935

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
​
let lineInput = fs.readFileSync(filePath).toString().trim().split("\n");
let size = lineInput.shift()
let postfix = lineInput.shift()
let stack = [];
let countTmp = 0;
​
for(let i = 0; i < postfix.length; i++) {
  let key = postfix[i]
  if(key >= 'A' && key <= 'Z') {
    let idx = key.charCodeAt() - 65
    stack.push(+lineInput[idx])
  }
  if(key === '*') {
    countTmp += +stack.pop();
    countTmp = (countTmp * +stack.pop())
    stack.push(countTmp)
    countTmp = 0;
  }
  if(key === '/') {
    countTmp += +stack.pop();
    countTmp = (+stack.pop() / countTmp)
    stack.push(countTmp)
    countTmp = 0;
  }
  if(key === '+') {
    countTmp += +stack.pop();
    countTmp = (+stack.pop() + countTmp)
    stack.push(countTmp)
    countTmp = 0;
  }
  if(key === '-') {
    countTmp += +stack.pop();
    countTmp = (+stack.pop() - countTmp)
    stack.push(countTmp)
    countTmp = 0;
  }
}
​
console.log(stack[0].toFixed(2))