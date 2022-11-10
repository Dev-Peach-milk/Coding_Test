// [문제 링크]: https://www.acmicpc.net/problem/10820

​
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
​
let lower = /[a-z]/g;
let upper = /[A-Z]/g;
let number = /[0-9]/g;
let space = /\s/g;
let answer = ''
​
for(let i = 0; i < input.length; i++) {
  if(input[i] === '') continue
  let lowerCount = input[i].match(lower) ? input[i].match(lower).length : 0;
  let upperCount = input[i].match(upper) ? input[i].match(upper).length : 0;
  let numCount = input[i].match(number) ? input[i].match(number).length : 0;
  let spaceCount = input[i].match(space) ? input[i].match(space).length : 0;
  answer += (lowerCount + ' ' + upperCount + ' ' + numCount + ' ' + spaceCount + '\n')
}
​
console.log(answer.trim())