// https://www.acmicpc.net/problem/9613

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const gcd = (x, y) => {
  return x % y === 0 ? y : gcd(y, x % y);
};

const sumLine = (line) => {
  let sumGCDs = 0;
  const numbers = line.split(" ").slice(1);
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const max = Math.max(numbers[i], numbers[j]);
      const min = Math.min(numbers[i], numbers[j]);
      sumGCDs += gcd(max, min);
    }
  }
  return sumGCDs;
};

for (let i = 1; i < input.length; i++) {
  let answer = "";
  answer += sumLine(input[i]) + "\n";
  console.log(answer.trim());
}
