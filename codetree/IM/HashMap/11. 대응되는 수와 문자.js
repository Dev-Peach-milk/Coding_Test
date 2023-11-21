// https://www.codetree.ai/missions/8/problems/corresponding-numbers-and-characters?&utm_source=clipboard&utm_medium=text
// HashMap / 대응되는 수와 문자

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let answer = "";
const [n, m] = input.shift().split(" ").map(Number);

const charMap = new Map();

for (let i = 0; i < n; i++) {
  charMap.set(input[i], i + 1);
}

for (let i = n; i < input.length; i++) {
  let char = input[i];
  if (/[a-z]/.test(char)) {
    answer += charMap.get(char) + "\n";
  } else {
    answer += input[+char - 1] + "\n";
  }
}

console.log(answer.trim());
