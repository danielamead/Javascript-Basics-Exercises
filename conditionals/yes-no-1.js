let randomNumber = Math.round(Math.random());

if (randomNumber === 1) {
  console.log('Yes!');
} else {
  console.log('No.');
}

/*
Below is launch schools solution. There is no need for
an equality operator (like I used) because the number 1
is a truthy value and 0 is not, so LS's if statement works
just as well as mine with less code.

let randomNumber = Math.round(Math.random());

if (randomNumber) {
  console.log('Yes!');
} else {
  console.log('No');
}

*/
