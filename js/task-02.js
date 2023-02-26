const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsElements = document.querySelector("#ingredients");
const ingredientsList = [];
ingredients.forEach(ingredient => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingredient;
  ingredientItem.className = 'item';
  ingredientsList.push(ingredientItem);
});
ingredientsElements.append(...ingredientsList);