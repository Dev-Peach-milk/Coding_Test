// 나의 풀이
function solution(test) {
  const n = arr[0].length;
  const m = arr.length;

  const group = [];
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let miniGroup = Array.from({ length: 2 }, () => 0);
      miniGroup[0] = arr[0][i];
      miniGroup[1] = arr[0][j];
      group.push(miniGroup);
    }
  }

  for (let i = 0; i < group.length; i++) {
    for (let j = 1; j < m; j++) {
      if (group[i]) {
        let a = arr[j].indexOf(group[i][0]);
        let b = arr[j].indexOf(group[i][1]);
        if (a > b) {
          group[i] = false;
        }
      }
    }
  }

  return group.filter((el) => el).length;
}

// 강사님 풀이
function solution2(test) {
  let answer = 0;
  const n = arr[0].length;
  const m = arr.length;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let count = 0;
      for (let k = 0; k < m; k++) {
        let pi = (pj = 0);
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) count++;
      }
      if (count === m) answer++;
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.time("1s");
console.log(solution(arr));
console.timeEnd("1s");

console.time("2s");
console.log(solution2(arr));
console.timeEnd("2s");
