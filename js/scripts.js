const toggleMenuElement = document.getElementById("toggle-menu");
const mainMenuElement = document.getElementById("main-menu");

toggleMenuElement.addEventListener("click", () => {
  mainMenuElement.classList.toggle("main-menu__show");
});

const toggleDropdownElement = document.getElementById("toggle-dropdown");
const toggleDropdownIcon = document.getElementById("toggle-dropdown__icon");
const dropdownMenuElement = document.getElementById("dropdown-menu");

toggleDropdownElement.addEventListener("click", () => {
  dropdownMenuElement.classList.toggle("dropdown-menu__show");
  toggleDropdownIcon.classList.toggle("rotate");
});
