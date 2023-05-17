import { Item } from "./item.js";

const populateMenuList = function (dishItems) {
  var mainMenu = document.getElementById("italianMenu");
  let html = ``;
  dishItems.forEach((element) => {
    html += `<a href="#">${
      element.name + (element.isVegetarian === true ? " - Veg" : " - Non veg")
    }</a>`;
  });
  mainMenu.innerHTML = html;
};

document
  .getElementById("pureVegOption")
  .addEventListener("change", function () {
    if (this.checked) {
      let vegItems = totalDishItem.filter((item) => item.isVegetarian === true);
      populateMenuList(vegItems);
    } else {
      populateMenuList(totalDishItem);
    }
  });

var totalDishItem = [];
totalDishItem.push(new Item("Mediterranean Salad", true));
totalDishItem.push(new Item("Pizza Margherita", false));
populateMenuList(totalDishItem);
