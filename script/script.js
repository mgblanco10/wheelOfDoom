function agreeName() {
    var nombre = document.getElementById("inputName").value;

    if (nombre !== "") {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(nombre));

      var deleteButton = document.createElement("img");
      deleteButton.src = "/images/close.png"; 
      deleteButton.alt = "Eliminar";
      deleteButton.classList.add("deleteButton"); 
      deleteButton.onclick = function() {
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