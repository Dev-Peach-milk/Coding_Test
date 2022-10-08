// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12947?language=javascript

function solution(x) {
    var answer = true;
    let sum = 0;
    /*1차 나의 풀이
    let num = x.toString().split('');
    for(let i = 0; i < num.length; i++) {
        sum += parseInt(num[i]);
    }
    */
    //다른 사람 풀이 참고 -> reduce 사용함, 더할때 +를 앞에 붙여서 문자열을 숫자
    let num = x.toString().split('').reduce((acc, cur) => +acc + +cur);
    if(x % num !== 0) answer = false;
    return answer;
};