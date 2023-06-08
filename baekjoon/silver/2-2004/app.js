const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let lineInput = fs.readFileSync(filePath).toString().trim().split("\n");
let wordInput = fs.readFileSync(filePath).toString().trim().split(/\s/g);

const inputFS = fs.readFileSync(filePath, "utf-8").trim().split("\n");
var input = require("fs").readFileSync("/dev/stdin").toString().trim();

/* 한줄 입력일때
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
*/

console.log(lineInput);
console.log(wordInput);

var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
console.log(
  lines[1].split("").reduce(function (acc, a) {
    return acc + +a;
  }, 0)
);
