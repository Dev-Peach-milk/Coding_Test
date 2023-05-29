// [문제 링크]: https://www.acmicpc.net/problem/11655

var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('');
​
let answer = "";
​
for (let i = 0; i < inputs.length; i++) {
  let code = inputs[i].charCodeAt();
  if (code >= 97 && code <= 109) {
    code += 13;
    answer += String.fromCharCode(code);
  } else if (code >= 65 && code <= 77) {
    code += 13;
    answer += String.fromCharCode(code);
  } else if (code >= 110 && code <= 122) {
    code = code + 13 - 26;
    answer += String.fromCharCode(code);
  } else if (code >= 78 && code <= 90) {
    code = code + 13 - 26;
    answer += String.fromCharCode(code);
  } else {
    answer += inputs[i];
  }
}
console.log(answer)