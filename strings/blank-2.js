const isBlank = (string) => {
  if (string.length) {
    let blank = true;
    string.split('').forEach((char) => {
      if (char !== ' ') {
        blank = false;
      }
    })
    return blank;
  } else {
    return true;
  }
}
