// [문제 링크]: https://www.acmicpc.net/problem/10430

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
​
let wordInput = fs.readFileSync(filePath).toString().trim().split(/\s/g);
​
​
let [A, B, C] = [...wordInput];
let reasult1 = (+A + +B) % +C;
let reasult2 = ((+A % +C) + (+B % +C)) % +C;
let reasult3 = (+A * +B) % C;
let reasult4 = ((+A % +C) * (+B % +C)) % +C;
let answer = reasult1 + '\n' + reasult2 + '\n' + reasult3 + '\n' + reasult4
​
console.log(answer.trim())