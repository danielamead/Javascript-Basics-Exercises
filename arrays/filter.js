let scores = [96, 47, 113, 89, 100, 102];

let count = scores.reduce((accum, value) => {
  if (value >= 100) {
    accum += 1;
  }
  return accum;
}, 0);

console.log(count);
