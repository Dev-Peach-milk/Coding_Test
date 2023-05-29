// [문제 링크]: https://www.acmicpc.net/problem/10824

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
​
let wordInput = fs.readFileSync(filePath).toString().trim().split(/\s/g);
​
console.log(Number(wordInput[0] + wordInput[1]) + Number(wordInput[2] + wordInput[3]))