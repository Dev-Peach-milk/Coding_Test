const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let wordInput = fs.readFileSync(filePath).toString().trim().split(/\s/g);

const sum = +wordInput[0] + +wordInput[1];
const subtraction = wordInput[0] - wordInput[1];
const multiplication = wordInput[0] * wordInput[1];
const division = parseInt(wordInput[0] / wordInput[1]);
const moduler = wordInput[0] % wordInput[1];

console.log(
  sum +
    `\n` +
    subtraction +
    `\n` +
    multiplication +
    `\n` +
    division +
    `\n` +
    moduler
);
