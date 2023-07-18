function solution(m, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER;
  const N = ps.length;

  function DFS(L, scoreSum, TimeSum) {
    if(TimeSum > m) return;
    if(L === N) {
      answer = Math.max(answer, scoreSum)
      return
    }
    DFS(L + 1, scoreSum + ps[L], TimeSum + pt[L]);
    DFS(L + 1, scoreSum, TimeSum)
   }

  DFS(0, 0, 0)
  return answer;
}

let ps=[10, 25, 15, 6, 7];
let pt=[5, 12, 8, 3, 4]
console.log(solution(20, ps, pt));
