const catAge = (humanYears) => {
  let catYears = 0;
  let count = 1;

  while (count <= humanYears) {
    if (count === 1) {
      catYears += 15;
    } else if (count === 2) {
      catYears += 9;
    } else {
      catYears += 4;
    }
    count += 1
  }

  return catYears;
}

/*
Below is launch school's solution. The use of a switch
statement saves time, by simply checking first if the
input is 1 or 2, and then returning 15 or 24 respectively.
The default case returns the evaluation of a simple expression
which adds the cat years equivalent of the first two human years (24),
to the result of multiplying the subsequent human years by 4.
Much better solution! I want think this way like Launch School do!

function catAge(humanYears) {
  switch(humanYears) {
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return 24 + (humanYears - 2) * 4;
  }
}
*/
