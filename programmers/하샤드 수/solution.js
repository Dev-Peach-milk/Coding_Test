// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
    var answer = true;
    let sum = 0;
    let num = x.toString().split('');
    for(let i = 0; i < num.length; i++) {
        sum += parseInt(num[i]);
    }
    console.log(x, num, sum)
    if(x % sum !== 0) answer = false;
    return answer;
}