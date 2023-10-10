// https://www.codetree.ai/training-field/frequent-problems/problems/max-of-outsourcing-profit?&utm_source=clipboard&utm_medium=text

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
input = input.map((e) => e.split(" ").map(Number));

let answer = 0;
let profits = [];

function getProfit(day, endTime) {
  if (endTime > n) {
    let sum = 0;
    for (let i = 0; i < profits.length - 1; i++) {
      sum += profits[i];
    }
    answer = answer > sum ? answer : sum;
    return;
  }
  if (endTime === n) {
    let sum = profits.reduce((a, b) => a + b, 0);
    answer = answer > sum ? answer : sum;
    return;
  }
  for (let newDay = endTime + 1; newDay <= input.length; newDay++) {
    let newDayIdx = newDay - 1;
    let [nt, np] = input[newDayIdx];

    profits.push(np);
    getProfit(newDay, newDay + nt - 1);
    profits.pop(np);
  }
}

for (let i = 0; i < input.length; i++) {
  let [t, p] = input[i];
  let day = i + 1;
  profits = [p];
  getProfit(day, day + t - 1);
}

console.log(answer);
