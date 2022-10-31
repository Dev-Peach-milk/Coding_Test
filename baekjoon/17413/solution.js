// [문제 링크]: https://www.acmicpc.net/problem/17413

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
​
let lineInput = fs.readFileSync(filePath).toString().trim().split("\n");
​
let string = lineInput[0];
​
let answer = [];
let i = 0;
while (i < lineInput[0].length) {
  if (lineInput[0][i] === "<") {
    while (lineInput[0][i] !== ">") {
      answer.push(lineInput[0][i]);
      i++;
    }
    answer.push(lineInput[0][i]);
    i++;
  }
​
  let tmp = [];
  let tmpStr = "";
  while (lineInput[0][i] !== "<" && i < lineInput[0].length) {
    tmpStr += lineInput[0][i];
    i++;
  }
  tmp = tmpStr.split(" ");
  for (let i = 0; i < tmp.length; i++) {
    tmp[i] = tmp[i].split("").reverse().join("");
  }
  tmp = tmp.join(" ");
  answer.push(tmp);
}
a = answer.join("");
​
console.log(a);