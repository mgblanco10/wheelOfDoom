// //  seleccionamos los dos elementos que serán clickables

// const toggleButton = document.getElementById("button-menu");
// const navWrapper = document.getElementById("nav");

// /* 
//   cada ves que se haga click en el botón 
//   agrega y quita las clases necesarias 
//   para que el menú se muestre.
// */
// toggleButton.addEventListener("click", () => {
//   toggleButton.classList.toggle("close");
//   navWrapper.classList.toggle("show");
// });

// /* 
//   Cuándo se haga click fuera del contenedor de enlaces 
//   el menú debe esconderse.
// */

// navWrapper.addEventListener("click", e => {
//   if (e.target.id === "nav") {
//     navWrapper.classList.remove("show");
//     toggleButton.classList.remove("close");
//   }
// });



// const menu = document.getElementById("navBurger");
// const buttonMenu = document.querySelector("#button-menu-open");
// const buttonClose = document.querySelector("#button-menu-close");

// function toggleMenu() {
//   if (menu.classList.contains("showMenu")) {
//     menu.style.display = "none";
//     buttonClose.style.display = "none";
//     buttonMenu.style.display = "flex";
//   } else {
//     menu.classList.add("showMenu");
//     buttonClose.style.display = "flex";
//     buttonMenu.style.display = "none";
//   }
// }


// buttonMenu.addEventListener("click", toggleMenu);
// buttonClose.addEventListener("click", toggleMenu);



const menu = document.getElementById("navBurger");
const buttonMenu = document.querySelector("#button-menu-open");
const buttonClose = document.querySelector("#button-menu-close");

function toggleMenu() {
  if (menu.style.display === "none"|| menu.style.display === "") {
    menu.style.display = "block";
    buttonClose.style.display = "flex";
    buttonMenu.style.display = "none";
  } else {
    menu.style.display = "none";
    buttonClose.style.display = "none";
    buttonMenu.style.display = "flex";
  }
}

buttonClose.style.display = "none"; // Ocultar el botón de cierre al inicio

buttonMenu.addEventListener("click", toggleMenu);
buttonClose.addEventListener("click", toggleMenu);
