// [문제 링크]: https://www.acmicpc.net/problem/1406

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input3.txt";
​
let lineInput = fs.readFileSync(filePath).toString().trim().split("\n");
let word = lineInput[0];
let size = +lineInput[1];
let lStack = word.split("");
let rStack = [];
​
for (let i = 2; i < 2 + size; i++) {
  let [cmd, val] = lineInput[i].split(" ");
  switch (cmd) {
    case "L":
      if (lStack.length) {
        rStack.push(lStack.pop());
      }
      break;
    case "D":
      if (rStack.length) {
        lStack.push(rStack.pop());
      }
      break;
    case "B":
      if (lStack.length) {
        lStack.pop();
      }
      break;
    case "P":
      lStack.push(val);
      break;
  }
}
​
let answer = lStack.join("") + rStack.reverse().join("");
console.log(answer);