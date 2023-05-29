const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim();

// 0으로 끝나는 경우
// 5의 배수는 1개, 25의 배수는 2개, 125의 배수는 3개의 0이 붙는다.

const countZero = (input) => {
  let answer = 0;
  if (input <= 4) return answer;

  for (let i = 1; i <= input; i++) {
    if (i % 5 === 0) answer += 1;
    if (i % 25 === 0) answer += 1;
    if (i % 125 === 0) answer += 1;
  }
  return answer;
};

console.log(countZero(input));
