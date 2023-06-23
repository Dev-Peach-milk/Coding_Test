const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map((val) => +val);

const train = Array.from({ length: N }, () =>
  Array.from({ length: 20 }, () => 0)
);

const empty = Array.from({ length: 20 }, () => 0).join(",");

const excuteM = (M) => {
  const [num, i, x] = M.split(" ").map((val) => +val);
  if (num === 1) {
    train[i - 1][x - 1] = 1;
  }
  if (num === 2) {
    train[i - 1][x - 1] = 0;
  }
  if (num === 3) {
    const copyTrain = train[i].slice(0);
    train[i] = train[i].map((_, idx) => (idx === 0 ? 0 : copyTrain[idx - 1]));
  }
  if (num === 4) {
    const copyTrain = train[i].slice(0);
    train[i] = train[i].map((_, idx) => (idx === 19 ? 0 : copyTrain[idx + 1]));
  }
};

const countPossibleTrain = () => {
  const possible = new Set();
  for (let i = 1; i <= M; i++) {
    excuteM(input[i]);
  }
  for (let i = 0; i < M; i++) {
    if (train[i].toString() === empty) continue;
    possible.add(train[i].toString());
  }
  return possible.size;
};

const result = countPossibleTrain();

console.log(result);
