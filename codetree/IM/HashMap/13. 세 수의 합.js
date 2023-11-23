// https://www.codetree.ai/missions/8/problems/sum-of-three-num?&utm_source=clipboard&utm_medium=text
// HashMap / 세 수의 합

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [[n, k], [...input]] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

let answer = 0;
const numMap = new Map();

for (let num of input) {
  numMap.set(num, numMap.has(num) ? numMap.get(num) + 1 : 1);
}

for (let i = 0; i < n; i++) {
  let numOne = input[i];
  numMap.set(numOne, numMap.get(numOne) - 1);
  for (let j = 0; j < i; j++) {
    let numTwo = input[j];
    let diff = k - numOne - numTwo;
    if (numMap.has(diff)) {
      answer += numMap.get(diff);
    }
  }
}

console.log(answer);
