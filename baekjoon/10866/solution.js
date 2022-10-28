// [문제 링크]: https://www.acmicpc.net/problem/10866

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
​
let lineInput = fs.readFileSync(filePath).toString().trim().split("\n");
​
let size = +lineInput[0];
let deque = [];
let answer = [];
​
for (let i = 1; i < 1 + size; i++) {
  let [cmd, val] = lineInput[i].split(" ");
  switch (cmd) {
    case "push_front":
      deque.unshift(val);
      break;
    case "push_back":
      deque.push(val);
      break;
    case "pop_front":
      answer.push(deque.length ? deque.shift() : -1);
      break;
    case "pop_back":
      answer.push(deque.length ? deque.pop() : -1);
      break;
    case "size":
      answer.push(deque.length);
      break;
    case "empty":
      answer.push(!deque.length ? 1 : 0);
      break;
    case "front":
      answer.push(!deque.length ? -1 : deque[0]);
      break;
    case "back":
      answer.push(!deque.length ? -1 : deque[deque.length - 1]);
      break;
  }
}
​
console.log(answer.join("\n"));
​