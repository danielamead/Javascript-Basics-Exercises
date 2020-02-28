const compareByLength = (string1, string2) => {
  let length1 = string1.length;
  let length2 = string2.length;

  if (length1 < length2) {
    return -1;
  } else if (length2 < length1) {
    return 1;
  } else {
    return 0;
  }
}
