// 내 코드
function solution(s) {
  let answer = "";
  let max = 0;
  const candidate = new Map();

  for (let i = 0; i < s.length; i++) {
    if (candidate.has(s[i])) {
      candidate.set(s[i], candidate.get(s[i]) + 1);
    } else {
      candidate.set(s[i], 1);
    }
  }

  candidate.forEach((val, person) => {
    if (val > max) {
      max = val;
      answer = person;
    }
  });

  return answer;
}

// 강사님 코드
function solution2(s) {
  let answer = "";
  let candidate = new Map();

  for (let x of s) {
    if (candidate.has(x)) candidate.set(x, candidate.get(x) + 1);
    else candidate.set(x, 1);
  }

  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of candidate) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }

  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
console.log(solution2(str));
