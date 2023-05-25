var players = [];
var playersRemoved = [];

function agreeName() {
    var player = document.getElementById("inputName").value;

    if (player !== "") {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(player));
      players.push(player);

      var deleteButton = document.createElement("img");
      deleteButton.src = "/images/close.png"; 
      deleteButton.alt = "Eliminar";
      deleteButton.classList.add("deleteButton"); 
      deleteButton.onclick = function() {
        var i = players.indexOf(player)
        players.splice(i, 1)
         deleteName(this);
      };
      

      li.appendChild(deleteButton);
      document.getElementById("namesList").appendChild(li);
      document.getElementById("inputName").value = "";
    }
  }

  function deleteName(button) {
    var element = button.parentNode;
    var list = element.parentNode;
    list.removeChild(element);
  }