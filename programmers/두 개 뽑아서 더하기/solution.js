// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
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

