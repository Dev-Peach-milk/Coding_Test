// https://www.codetree.ai/missions/8/problems/sum-of-two-num?&utm_source=clipboard&utm_medium=text
// HashMap / 두 수의 합

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input.shift().split(" ").map(Number);
input = input[0].split(" ").map(Number);

let answer = 0;

// 해설 및 다른 사람 참고 코드
// 훨씬 빠름
const numMap = new Map();

for (let num of input) {
  let target = k - num;
  if (numMap.has(target)) answer += numMap.get(target);
  numMap.set(num, numMap.has(num) ? numMap.get(num) + 1 : 1);
  // numMap.has(num) ? numMap.set(num, numMap.get(num) + 1) : numMap.set(num, 1); 위랑 아래중 뭐가 가독성이 좋은걸까..?
}

console.log(answer);

/**
 * 아래는 처음 풀이법
 * 풀리지만, 코드트리의 제한 시간에는 시간초과가 된다.
 */
// const numMap = new Map();

// for (let i = 0; i < input.length; i++) {
//   let idxArr = numMap.has(input[i]) ? [...numMap.get(input[i]), i] : [i];
//   numMap.set(input[i], idxArr);
// }

// for (let num of numMap.keys()) {
//   let gap = k - num;
//   if (numMap.has(gap)) {
//     let count = numMap.get(gap).length;
//     if (count > 1) answer += (count * (count - 1)) / 2;
//     if (count === 1) answer += 0.5;
//   }
// }

// console.log(answer);
