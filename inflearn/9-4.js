function solution() {
  let answer = "";
  const queue = [];
  queue.push(1);

  while (queue.length) {
    let v = queue.shift();
    answer += v + " ";

    for (let newV of [v * 2, v * 2 + 1]) {
      if (newV > 7) continue;
      queue.push(newV);
    }
  }

  return answer.trim();
}

console.log(solution());
