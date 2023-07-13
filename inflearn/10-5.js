function solution(m, arr) {
  let answer = 0;
  const dy = Array.from({ length: m + 1 }, () => 0);

  dy[0] = 0;
  for (let i = 0; i < arr.length; i++) {
    let score = arr[i][0];
    let time = arr[i][1];
    for (let j = m; j >= time; j--) {
      dy[j] = Math.max(dy[j - time] + score, dy[j]);
    }
  }

  answer = dy[m];
  return answer;
}

let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr));
