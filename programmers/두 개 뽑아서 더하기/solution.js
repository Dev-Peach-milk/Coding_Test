// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/68644?language=javascript

function solution(numbers) {
    //1차 나의 풀이
    var answer = [];
    for(let i = 0; i < numbers.length - 1; i++) {
        let sum = 0;
        for(let j = i + 1; j < numbers.length; j++) {
            sum = numbers[i] + numbers[j];
            if(!answer.includes(sum)) answer.push(sum)
        }
    }
    answer.sort((a,b) => (a - b))
    return answer;
}

/*인상적인 다른 풀이 -> spread연산자와 set을 사용함
function solution(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
}
*/