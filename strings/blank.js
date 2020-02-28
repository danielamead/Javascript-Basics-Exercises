const blank = (string) => {
  if (string) {
    return false;
  } else {
    return true;
  }
}

/*
Below is launch school's solution. It uses the strict
equality operator to return a boolean value base on
whether the string has length or not. Nicer than my
solution.

function isBlank(string) {
  return string.length === 0;
}
*/
