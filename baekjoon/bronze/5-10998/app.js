// https://www.acmicpc.net/problem/10998

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let wordInput = fs.readFileSync(filePath).toString().trim().split(/\s/g);

console.log(wordInput[0] * wordInput[1]);
