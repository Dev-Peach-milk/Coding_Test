/**
 * 1. 내림차순 정렬
 * 2. 큰수가 만들어 지는 순으로 더하기
 * 3. K번째에서 멈추고 리턴
 * 가 아니고 어쩔수 없이 다 더하고 정렬해야 하나???
 */

function solution(n, k, card) {
  const sums = new Set();
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        sums.add(card[i] + card[j] + card[k]);
      }
    }
  }

  const sortedSums = [...sums].sort((a, b) => b - a);

  return sortedSums[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
