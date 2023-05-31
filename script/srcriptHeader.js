const menu = document.getElementById("navBurger");
const buttonMenu = document.querySelector("#button-menu-open");
const buttonClose = document.querySelector("#button-menu-close");

function toggleMenu() {
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    menu.style.top = "-400px";
    buttonClose.style.display = "none";
    buttonMenu.style.display = "flex";
  } else{
    menu.classList.add("show");
    menu.style.top = "15%";
    buttonClose.style.display = "flex";
    buttonMenu.style.display = "none";
  }
}

buttonClose.style.display = "none"; 

buttonMenu.addEventListener("click", toggleMenu);
buttonClose.addEventListener("click", toggleMenu);
