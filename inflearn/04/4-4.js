// 나의 풀이
// 이렇게 하면 작은 수가 많은 경우 안될수도 있겠군.. -> 할인을 모두 적용해서 해봐야함
function solution(m, product) {
  let answer = 0;
  const present = product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  let sum = 0;
  for (let i = 0; i < present.length; i++) {
    sum += present[i][0] + present[i][1];
    if (sum < m) answer++;

    if (sum >= m) {
      sum -= present[i][0] / 2;

      if (sum >= m && i !== present.length - 1) {
        sum -= present[i][0] / 2 + present[i][1];
        continue;
      }

      if (sum > m) return answer;
      if (sum === m) return answer + 1;
    }
  }
}

// 강사님 풀이
function solution2(m, product) {
  let answer = 0;
  let n = product.length;

  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]);
    let count = 1;

    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break;
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        count++;
      }
    }
    answer = Math.max(answer, count);
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

console.log(solution(28, arr));
console.log(solution2(28, arr));
