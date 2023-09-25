// https://www.codetree.ai/missions/2/problems/beautiful-number?&utm_source=clipboard&utm_medium=text
// K개 중 하나를 N번 선택하기(Simple) / 아름다운 수

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
let answer = 0;

const n = +input[0];
const number = [];

const isBeutiful = (num) => {
  for (let i = 0; i < n; ) {
    let checkNum = num[i];
    let count = num[i];
    while (count) {
      if (num[i] !== checkNum) return false;
      count--;
      i++;
    }
  }
  return true;
};

function select(L, num) {
  if (L === n) {
    if (isBeutiful(number.join(""))) answer++;
    return;
  }

  for (let i = 1; i <= 4; i++) {
    number.push(i);
    select(L + 1, i);
    number.pop(i);
  }
}

for (let i = 1; i <= 4; i++) {
  number.push(i);
  select(1, i);
  number.pop(i);
}

console.log(answer);
