// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12947?language=javascript

function solution(x) {
    var answer = true;
    let sum = 0;
    let num = x.toString().split('').reduce((acc, cur) => +acc + +cur);
    if(x % num !== 0) answer = false;
    return answer;
}