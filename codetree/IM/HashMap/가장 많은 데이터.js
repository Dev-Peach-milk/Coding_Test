// https://www.codetree.ai/missions/8/problems/most-data?&utm_source=clipboard&utm_medium=text
// HashMap / 가장 많은 데이터
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let answer = 0;
const n = +input.shift();
const dataMap = new Map();

for (let item of input) {
  let newValue = dataMap.has(item) ? dataMap.get(item) + 1 : 1;
  dataMap.set(item, newValue);
}

for (let count of dataMap.values()) {
  answer = count > answer ? count : answer;
}

console.log(answer);
