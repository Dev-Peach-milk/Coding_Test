// [문제 링크]: https://www.acmicpc.net/problem/1874

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
​
let lineInput = fs.readFileSync(filePath).toString().trim().split("\n");
let n = lineInput.shift();
​
const stack = [];
let answer = "";
let i = 1;
let j = 0;
​
while (j < lineInput.length) {
  const num = lineInput[j];
  if (num > i) {
    stack.push(i);
    answer += "+\n";
    i++;
  } else if (num == i) {
    stack.push(i);
    answer += "+\n";
    stack.pop();
    answer += "-\n";
    i++;
    j++;
  } else if (num < i && num == stack[stack.length - 1]) {
    stack.pop();
    answer += "-\n";
    j++;
  } else {
    answer = "NO";
    break;
  }
}
​
console.log(answer);