let randomNumber = Math.random().round();

let answer = randomNumber ? 'Yes!' : 'No.';

console.log(answer);

/*
Launch school solution below. I misused the round and
random methods, so I'll review the docs. I'm also in the
habit of assigning the evaluation of a ternary operator
to a variable, and then using it, but apparently I don't
need to do that in all cases.

let randomNumber = Math.round(Math.random());

console.log(randomNumber ? 'Yes!' : 'No.');
*/
