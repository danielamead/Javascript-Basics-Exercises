function formatName(firstName, middleName, lastName) {
  return `${lastName}, ${firstName} ${middleName[0]}.`;
}

const fullName = ['James', 'Tiberius', 'Kirk'];

console.log(formatName(...fullName));
