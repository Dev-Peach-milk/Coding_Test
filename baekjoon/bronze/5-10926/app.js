const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let lineInput = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(lineInput[0] + "??!");
