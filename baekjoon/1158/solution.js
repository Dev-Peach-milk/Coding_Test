// [문제 링크]: https://www.acmicpc.net/problem/1158
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let wordInput = fs.readFileSync(filePath).toString().trim().split(/\s/g);

let N = +wordInput[0];
let K = +wordInput[1];

class Circle {
  constructor(n) {
    this.array = new Array(n);
    this.size = n;
    this.length = 0;
    this.head = 0;
    this.tail = 0;
  }

  enqueue(num) {
    this.length++;
    this.array[this.tail++ % this.size] = num;
  }

  dequeue() {
    this.length--;
    return this.array[this.head++ % this.size];
  }
}

let circle = new Circle(N);
for (let i = 1; i <= N; i++) {
  circle.enqueue(i);
}

let remove = [];
circle.tail = circle.head = K - 1;
remove.push(circle.dequeue());
while (circle.length != 0) {
  let count = K - 1;
  while (count--) {
    circle.enqueue(circle.dequeue());
  }
  remove.push(circle.dequeue());
}

remove = remove.join(", ");
remove = "<" + remove + ">";
console.log(remove);


//다른 풀이 참조, 시간 너무 오래걸림
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
​
let wordInput = fs.readFileSync(filePath).toString().trim().split(/\s/g);
​
let N = +wordInput[0];
let K = +wordInput[1];
​
let arr = new Array(N).fill(1).map((e, i) => i + 1);
let answer = [];
while (arr.length) {
  for (let i = 0; i < K; i++) {
    arr.push(arr.shift());
  }
  answer.push(arr.pop());
}
answer = answer.join(", ");
answer = "<" + answer + ">";
console.log(answer);
