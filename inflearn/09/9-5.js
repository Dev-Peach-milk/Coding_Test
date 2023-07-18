// dis 배열로 구하는 방법
function solution(s, e) {
  let answer = 0;
  const ch = Array.from({ length: 10001 }, () => 0);
  const dis = Array.from({ length: 10001 }, () => 0);
  const queue = [];

  queue.push(s);

  while (queue.length) {
    let x = queue.shift();
    for (let next of [x - 1, x + 1, x + 5]) {
      if (next === e) return dis[x] + 1;
      if (next > 0 && next <= 10000 && ch[next] === 0) {
        ch[next] = 1;
        queue.push(next);
        dis[next] = dis[x] + 1;
      }
    }
  }

  return answer;
}

// level로 구하는 방법
function solution1(s, e) {
  let L = 0;
  const ch = Array.from({ length: 10001 }, () => 0);
  const queue = [];

  ch[s] = 1;
  queue.push(s);

  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      // len을  queue.length 로 하면 안됨, (queue.length로 하면 queue가 변경되고 나서 level증가가 반영이 안됨)
      let x = queue.shift();
      for (let next of [x - 1, x + 1, x + 5]) {
        if (next === e) return L + 1;

        if (next > 0 && next <= 10000 && ch[next] === 0) {
          ch[next] = 1;
          queue.push(next);
        }
      }
    }
    L++;
  }
}

console.log(solution(5, 14)); // 3
console.log(solution(8, 3)); // 5

console.log(solution1(5, 14)); // 3
console.log(solution1(8, 3)); // 5
