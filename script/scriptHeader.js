const menu = document.getElementById("navBurger");
const buttonMenu = document.getElementById("button-menu-open");
const buttonClose = document.getElementById("button-menu-close");

function dropDownMenu() {
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    menu.style.top = "-45%";
    buttonClose.style.display = "none";
    buttonMenu.style.display = "flex";
  } else{
    menu.classList.add("show");
    menu.style.top = "25%";
    buttonClose.style.display = "flex";
    buttonMenu.style.display = "none";
  }
}

buttonMenu.addEventListener("click", dropDownMenu);
buttonClose.addEventListener("click", dropDownMenu);
