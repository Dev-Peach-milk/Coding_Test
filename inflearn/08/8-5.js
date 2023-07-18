function solution(arr) {
  let answer = 'NO';
  let isDone = false;
  let total = arr.reduce((a, b) => (a + b), 0)

  function DFS(L, sum) {
    if(isDone) return;
    if(L === arr.length) {
      if(total - sum === sum) {
        isDone = true;
        answer = 'YES'
      }
      return
    }
    DFS(L + 1, sum + arr[L])
    DFS(L + 1, sum)
  }

  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];

console.log(solution(arr));
