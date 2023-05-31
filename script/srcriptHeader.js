const menu = document.getElementById("navBurger");
const buttonMenu = document.querySelector("#button-menu-open");
const buttonClose = document.querySelector("#button-menu-close");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    menu.style.top = "-400px";
    buttonClose.style.display = "none";
    buttonMenu.style.display = "flex";
  } else {
    menu.classList.add("showMenu");
    menu.style.top = "15%";
    buttonClose.style.display = "flex";
    buttonMenu.style.display = "none";
  }
}

buttonClose.style.display = "none"; // Ocultar el botón de cierre al inicio

buttonMenu.addEventListener("click", toggleMenu);
buttonClose.addEventListener("click", toggleMenu);
