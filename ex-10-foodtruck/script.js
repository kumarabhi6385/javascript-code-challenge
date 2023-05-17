const menuSet = new Set();

function populateMenu(menuElement, menuList) {
  let html = ``;
  menuList.forEach((item) => {
    html += `<a href="#">${item}</a>`;
    menuSet.add(item);
  });
  menuElement.innerHTML = html;
}

const vendor1 = document.querySelector("#vendor1menu");
const vendor2 = document.querySelector("#vendor2menu");
const vendor3 = document.querySelector("#vendor3menu");
const combinedMenu = document.querySelector("#combined_menu");

populateMenu(vendor1, ["Pizza", "Dosa", "Burger"]);
populateMenu(vendor2, ["Pizza", "Noodles"]);
populateMenu(vendor3, ["Veg Thali", "Idli", "Dosa"]);
populateMenu(combinedMenu, Array.from(menuSet));
