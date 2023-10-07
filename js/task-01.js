const categoriesList = document.querySelector("#categories");
const categoriesItem = categoriesList.querySelectorAll(".item");

console.log("Number of categories:", categoriesItem.length);

categoriesItem.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("li").length;
  console.log("Category:", categoryTitle);
  console.log("Elements:", categoryElements);
});
