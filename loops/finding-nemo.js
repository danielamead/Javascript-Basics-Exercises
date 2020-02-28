let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let i = 0; i < fish.length; i += 1) {
  if (fish[i] === 'nemo') {
    console.log(fish[i]);
    break;
  }
  console.log(fish[i]);
}

/*
Below is launch school's solution. Putting the console log
statement first makes for one less line of code.

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
let i;

for (i = 0; i < fish.length; i += 1) {
  console.log(fish[i]);

  if (fish[i] === 'Nemo') {
    break;
  }
}

*/
