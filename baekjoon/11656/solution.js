// [문제 링크]: https://www.acmicpc.net/problem/11656

var input = require('fs').readFileSync('/dev/stdin').toString().trim();
​
let result = [];
for(let i = 0; i < input.length; i++) {
  result.push(input.slice(i))
}
​
result = result.sort((a,b) => a.localeCompare(b))
console.log(result.join('\n').trim())