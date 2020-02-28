const repeat = (number, string) => {
  let repeatedString = '';

  for (let i = 1; i <= number; i += 1) {
    repeatedString += string;
  }

  return repeatedString;
}
