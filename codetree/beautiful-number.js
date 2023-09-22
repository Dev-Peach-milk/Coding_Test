// https://www.codetree.ai/missions/2/problems/beautiful-number?&utm_source=clipboard&utm_medium=text
// K개 중 하나를 N번 선택하기(Simple) / 아름다운 수

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
let answer = 0;

const n = +input[0];
const check = Array.from({ length: 5 }, () => 0);

let number = [];
function select(L, num) {
  console.log("all", number, check);
  if (L === n) {
    if (
      check.filter(
        (val, idx) =>
          (idx === n && val === idx) ||
          (idx === n && val === 0) ||
          (idx !== n && val === idx) ||
          (idx !== n && val === 0)
      ).length === 5
    ) {
      console.log(number, check);
      answer++;
    }
    return;
  }
  for (let i = 1; i <= 4; i++) {
    if (check[i] === i) continue;
    check[i]++;
    number.push(i);
    select(L + 1, i);
    number.pop(i);
    check[i]--;
  }
}

for (let i = 1; i <= 4; i++) {
  check[i]++;
  number.push(i);
  select(1, i);
  number.pop(i);
  check[i]--;
}

console.log(answer);
