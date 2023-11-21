// https://www.codetree.ai/missions/8/problems/hashmap-basic?&utm_source=clipboard&utm_medium=text
// HashMap / hashmap 기본

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

let answer = "";
let hashMap = new Map();

const n = +input.shift();

for (let i = 0; i < n; i++) {
  let [cmd, key, value] = input[i].split(" ");

  if (cmd === "add") {
    hashMap.set(key, value);
  }
  if (cmd === "remove") {
    hashMap.delete(key);
  }
  if (cmd === "find") {
    if (hashMap.has(key)) answer += hashMap.get(key) + "\n";
    if (!hashMap.has(key)) answer += "None" + "\n";
  }
}

console.log(answer.trim());
