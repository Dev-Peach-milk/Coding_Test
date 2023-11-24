// https://www.codetree.ai/missions/8/problems/top-k-frequent-elements?&utm_source=clipboard&utm_medium=text
// HashMap / 자주 등장한 top k 숫자

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [[n, k], [...input]] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

const answer = [];
const map = new Map();

for (let i = 0; i < n; i++) {
  map.set(input[i], map.has(input[i]) ? map.get(input[i]) + 1 : 1);
}

let arr = [...map];

arr.sort((a, b) => {
  if (b[1] - a[1] === 0) return b[0] - a[0];
  return b[1] - a[1];
});

for (let i = 0; i < k; i++) {
  answer.push(arr[i][0]);
}

console.log(answer.join(" "));
