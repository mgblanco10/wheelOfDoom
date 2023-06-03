let players = [];
let playersRemoved = [];

function agreeName() {
    let player = document.getElementById("inputName").value;
    if (player !== "") {
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(player));
      players.push(player);

      let deleteButton = document.createElement("img");
      deleteButton.src = "/images/close.png"; 
      deleteButton.alt = "Eliminar";
      deleteButton.classList.add("deleteButton"); 

      
      deleteButton.onclick = function() {
        let i = players.indexOf(player)
        players.splice(i, 1)
         deleteName(this);
      };
      
      li.appendChild(deleteButton);
      document.getElementById("namesList").appendChild(li);
      document.getElementById("inputName").value = "";
    }
  }

  function deleteName(button) {
    let element = button.parentNode;
    let list = element.parentNode;
    list.removeChild(element);
  }

  // module.exports = {
  //   agreeName,
  //   deleteName,
  // };