const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split(/\s/g)[0];

console.log(+parseInt(input, 8).toString(2));
