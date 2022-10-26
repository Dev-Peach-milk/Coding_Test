// [문제 링크]: https://www.acmicpc.net/problem/10845

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
​
let lineInput = fs.readFileSync(filePath).toString().trim().split("\n");
let answer = [];
​
class Queue {
  constructor(array) {
    this.array = array ? array : [];
  }
​
  push(x) {
    this.array.push(x);
  }
​
  pop() {
    return this.array.length ? this.array.shift() : -1;
  }
​
  size() {
    return this.array.length;
  }
​
  empty() {
    return this.array.length ? 0 : 1;
  }
​
  front() {
    return this.array.length ? this.array[0] : -1;
  }
​
  back() {
    return this.array.length ? this.array[this.array.length - 1] : -1;
  }
}
​
let q = new Queue();
for (let i = 1; i < lineInput.length; i++) {
  let [cmd, val] = lineInput[i].split(" ");
  if (val) {
    eval(`q.${cmd}(val)`);
  } else {
    eval(`answer.push(q.${cmd}())`);
  }
}
​
console.log(answer.join("\n"));