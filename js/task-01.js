const categoriesList = document.querySelector("#categories");
const categoriesItem = categoriesList.querySelectorAll(".item");

console.log("Number of categories:", categoriesItem.length);

categoriesItem.forEach((item) => {
  const categoryTitle = item.firstElementChild.textContent;
  const categoryElements = item.lastElementChild.children.length;
  console.log("Category:", categoryTitle);
  console.log("Elements:", categoryElements);
});
