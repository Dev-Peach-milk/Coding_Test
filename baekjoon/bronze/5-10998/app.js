// https://www.acmicpc.net/problem/10998

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let wordInput = fs.readFileSync(filePath).toString().trim().split(" ");

const a = parseInt(wordInput[0]);
const b = parseInt(wordInput[1]);

console.log(a * b);
