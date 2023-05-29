// [문제 링크]: https://www.acmicpc.net/problem/17298

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input3.txt";
​
let lineInput = fs.readFileSync(filePath).toString().trim().split("\n");
let size = +lineInput[0];
let input = lineInput[1].split(" ");
let tmp = [];
let result = new Array(size).fill(-1);
​
for (let i = 0; i < size; i++) {
  while (tmp.length && +input[tmp[tmp.length - 1]] < +input[i]) {
    result[tmp.pop()] = input[i];
  }
  tmp.push(i);
}
​
console.log(result.join(" "));
​