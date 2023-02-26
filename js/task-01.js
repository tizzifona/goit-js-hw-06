const categoriesList = document.querySelector("ul#categories");
const categoriesItems = categoriesList.querySelectorAll("li.item");

console.log(`Number of categories: ${categoriesItems.length}`);
categoriesItems.forEach (element => {
  console.log('Category:' + element.firstElementChild.textContent);  
  console.log('Elements:' + element.lastElementChild.children.length);
});

