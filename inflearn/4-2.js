// 제곱근 사용
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 에라토스테네스의 체 사용은 이경우엔 더 느리다. 할때마다 배열 다시 만들고.... 근데 배열을 아예 하나 만들어두고, 체크해놓는 식으로 하면 좀 나을 것 같다.
function isPrime2(num) {
  let check = Array.from({ length: num + 1 }, () => true);

  check[0] = false;
  check[1] = false;

  for (let i = 2; i * i < num + 1; i++) {
    if (check[i]) {
      for (let j = i * i; j <= num; j += i) {
        check[j] = false;
      }
    }
  }

  return check[num];
}

function solution(arr) {
  let answer = [];

  for (let num of arr) {
    let reverseNum = 0;
    while (num >= 1) {
      reverseNum = reverseNum * 10 + (num % 10);
      num = parseInt(num / 10);
    }
    if (isPrime(reverseNum)) answer.push(reverseNum);
  }

  return answer.join(" ");
}

function solution2(arr) {
  let answer = [];

  for (let num of arr) {
    let reverseNum = 0;
    while (num >= 1) {
      reverseNum = reverseNum * 10 + (num % 10);
      num = parseInt(num / 10);
    }
    if (isPrime2(reverseNum)) answer.push(reverseNum);
  }

  return answer.join(" ");
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];

console.time("test1");
console.log(solution(arr));
console.timeEnd("test1");

console.time("test2");
console.log(solution2(arr));
console.timeEnd("test2");
