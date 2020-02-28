let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let object = nestedArray.reduce((obj, array) => {
  obj[array[0]] = array[1];
  return obj;
}, {});

console.log(object);
