const contains = (city, destinations) => {
  for (let i = 0; i < destinations.length; i += 1) {
    if (destinations[i] === city) {
      return true;
    }
  }
  return false;
}

/*
Below is launch schools method which saves time
by leveraging the indexOf method, which returns
-1 if the input does not exist within the array.

function contains(element, list) {
  return list.indexOf(element) >= 0;
}
*/
