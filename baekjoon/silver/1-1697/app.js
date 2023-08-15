// 숨바꼭질 (https://www.acmicpc.net/problem/1697)
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [N, M] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// level 사용한 풀이 -> 15084KB	452ms
let answer = 0;
let queue = [];
const visited = Array.from({ length: 100001 }, () => 0);

queue.push(N);
visited[N] = 1;
if (N === M) return console.log(answer);

while (queue.length) {
  let len = queue.length;

  for (let i = 0; i < len; i++) {
    let x = queue.shift();
    let delta = [x - 1, x + 1, x * 2];

    for (let next of delta) {
      if (next === M) return console.log(answer + 1);
      if (next >= 0 && next < 100001 && visited[next] === 0) {
        visited[next] = 1;
        queue.push(next);
      }
    }
  }
  answer++;
}

// time 배열을 사용한 풀이: 15668KB	460ms
// if (N === M) return console.log(0);

// const queue = [];
// const visited = Array.from({ length: 100001 }, () => 0);
// const time = Array.from({ length: 100001 }, () => 0);

// queue.push(N);

// while (queue.length) {
//   let x = queue.shift();
//   for (let next of [x - 1, x + 1, x * 2]) {
//     if (next === M) return console.log(time[x] + 1);
//     if (next > 0 && next < 100001 && visited[next] === 0) {
//       visited[next] = 1;
//       queue.push(next);
//       time[next] = time[x] + 1;
//     }
//   }
// }
