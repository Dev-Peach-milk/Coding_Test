// [문제 링크]: https://www.acmicpc.net/problem/6588

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
​
let lineInput = fs.readFileSync(filePath).toString().trim().split("\n");
​
let zero = lineInput.pop();
let answer = "";
​
function prime(num) {
  let arr = Array(num + 1).fill(true);
  let prime = [];
  arr[0] = arr[1] = false;
  for (let i = 2; i * i <= num; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= num; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr;
}
​
const primeNums = prime(1000000);
​
lineInput.forEach((num) => {
  num = Number(num);
  goldbach(num);
});
​
function goldbach(num) {
  for (let i = num; i >= 2; i--) {
    let b = i;
    let a = num - b;
    if (primeNums[b] && primeNums[a]) {
      answer += `${num} = ${a} + ${b}` + "\n";
      return;
    }
  }
  answer += "Goldbach's conjecture is wrong." + "\n";
}
​
console.log(answer.trim());
​