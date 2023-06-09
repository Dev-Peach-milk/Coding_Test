// 숨바꼭질 6
// https://www.acmicpc.net/problem/17087

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, S] = input[0].split(" ");

if (+N === 1) {
  console.log(input[1] - input[0].split(" ")[1] + "");
  return;
}

const gcd = (x, y) => {
  return x % y === 0 ? y : gcd(y, x % y);
};

const dots = input[1].split(" ");
dots.push(S);
dots.sort((a, b) => a - b);

const gaps = [];
for (let i = 0; i < +N; i++) {
  gaps.push(Math.abs(dots[i] - dots[i + 1]));
}

let answer = gcd(gaps[0], gaps[1]);
for (let i = 2; i < gaps.length; i++) {
  answer = gcd(answer, gaps[i]);
}

console.log(answer + "");
