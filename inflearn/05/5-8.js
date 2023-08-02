// 내 코드
function getMap(map, string) {
  for (let char of string) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }
  return map;
}

function compare(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key)) return false;
    if (map2.get(key) !== val) return false;
  }

  return true;
}

function solution(s, t) {
  let answer = 0;
  const size = t.length;
  const mapT = getMap(new Map(), t);
  const mapS = getMap(new Map(), s.slice(0, size - 1));

  for (let i = size - 1; i < s.length; i++) {
    if (i - size >= 0) {
      let p = i - size;
      if (mapS.get(s[p]) > 1) {
        mapS.set(s[p], mapS.get(s[p]) - 1);
      } else {
        mapS.delete(s[p]);
      }
    }

    if (mapS.has(s[i])) {
      mapS.set(s[i], mapS.get(s[i]) + 1);
    } else {
      mapS.set(s[i], 1);
    }

    if (compare(mapS, mapT)) {
      answer++;
    }
  }

  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));

// 강사님 코드
function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}
function solution2(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    if (compareMaps(sH, tH)) answer++;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}
