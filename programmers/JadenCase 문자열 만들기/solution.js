// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12951?language=javascript

function solution(s) {
    s = s.toLowerCase();
    s = s.split(' ');
    console.log(s)
    for(let i = 0; i < s.length; i++) {
        if(s[i] == ' ') s[i] = s[i];
        else if(typeof s[i][0] == 'string') {
            s[i] = s[i][0].toUpperCase() + s[i].slice(1);
        }
    }
    // s = s.join(' ')
    return s.join(' ');
}