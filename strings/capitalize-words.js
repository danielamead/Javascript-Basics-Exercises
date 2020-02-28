const capitalizeWords = (string) => {
  const newString = string.split(' ').map((word) => {
    return word.split('')[0].toUpperCase() + word.split('').slice(1).join('')
  }).join(' ')

  return newString
}

/*
Below is launch school's solution. It is a better solution
because each step is separate and includes descriptive variable
names. Though it is similiar to my solution, and I did enjoy method
chaining, I want to strive to write solutions like launch school's
in a professional setting.

let string = 'launch school tech & talk';
let words = string.split(' ');
let capitalizedWords = [];
let i;

for (i = 0; i < words.length; i++) {
  let word = words[i];

  capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
}

capitalizedWords.join(' ');
*/
