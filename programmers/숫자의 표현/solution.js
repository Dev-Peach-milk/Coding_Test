// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
    var answer = 0;
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        for(let j = i; sum <= n; j++) {
            sum += j;
            if(sum === n) answer++
        }
        sum = 0;
    }

    return answer;
}