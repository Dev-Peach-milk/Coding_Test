// 내풀이
function getMap(map, str) {
  for (let s of str) {
    if (map.has(s)) map.set(s, map.get(s) + 1);
    else map.set(s, 1);
  }

  return map;
}

function solution(str1, str2) {
  let answer = "YES";

  let map1 = new Map();
  let map2 = new Map();

  map1 = getMap(map1, str1);
  map2 = getMap(map2, str2);

  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) answer = "NO";
  }

  return answer;
}

// 강사님 풀이
// map을 따로 두개씩 만들지 말고, 하나만 만들고 나머지는 확인만
function solution2(str1, str2) {
  let answer = "YES";

  let map1 = getMap(new Map(), str1);
  for (let x of str2) {
    if (!map1.has(x) || map1.get(x) === 0) return "NO";
    map1.set(x, map1.get(x) - 1);
  }

  return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
console.log(solution2(a, b));

let c = "abaCC";
let d = "Caaab";
console.log(solution(c, d));
console.log(solution2(c, d));
