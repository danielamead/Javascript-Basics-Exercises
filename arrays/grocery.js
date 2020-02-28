let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];
let itemsLeft = groceryList.length

while (itemsLeft) {
  console.log(groceryList[0]);
  groceryList.shift();
  itemsLeft -= 1;
}
