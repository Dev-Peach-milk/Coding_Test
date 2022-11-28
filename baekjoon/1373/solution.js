// [문제 링크]: https://www.acmicpc.net/problem/1373

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
​
let wordInput = fs.readFileSync(filePath).toString().trim().split(/\s/g);
let input = wordInput[0];
let answer = ''
    
while (input.length > 3) {
  let s = input.slice(input.length - 3)
  answer = parseInt(s, 2).toString(8) + answer;
  input = input.slice(0, input.length - 3)
}
​
console.log(parseInt(input, 2).toString(8) + answer)