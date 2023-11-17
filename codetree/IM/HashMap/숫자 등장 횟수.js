// https://www.codetree.ai/missions/8/problems/number-frequency?&utm_source=clipboard&utm_medium=text
// HashMap / 숫자 등장 횟수
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

let answer = [];

const [n, m] = input.shift().split(" ");
const nums = input.pop().split(" ").map(Number);
input = input[0].split(" ").map(Number);

const sequenceMap = new Map();
for (let number of input) {
  let newValue = sequenceMap.has(number) ? sequenceMap.get(number) + 1 : 1;
  sequenceMap.set(number, newValue);
}

for (let num of nums) {
  answer.push(sequenceMap.get(num) || 0);
}

// 배열로 풀면 O(n^2)이 되어서 시간초과됨
// for (let i = 0; i < m; i++) {
//   let num = nums[i];
//   let cnt = 0;
//   for (let j = 0; j < n; j++) {
//     if (input[j] === num) cnt++;
//   }
//   answer.push(cnt);
// }

console.log(answer.join(" "));
