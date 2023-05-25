function playGame() {
    var inputName = document.getElementById('inputName');
    var buttonAgree = document.getElementsByClassName('btnAgree')[0];
    var buttonPlay = document.getElementsByClassName('buttonPlay')[0];
    var starContainer = document.getElementsByClassName('star-container')[0];
    var telescope = document.querySelector('.telescope');
    var stars = document.querySelectorAll('.star');
    var namesList = document.getElementById('namesList');
  
    inputName.style.display = 'none';
    buttonAgree.style.display = 'none';
    buttonPlay.style.display = 'none';
    telescope.style.display = 'none';
    namesList.style.display = 'none';
  
    for (var i = 0; i < stars.length; i++) {
      stars[i].style.display = 'none';
    }
  
    var starList = document.createElement('img');
    starList.className = 'starList';
    starList.src = '/images/starYellow.png';
    starList.alt = 'Imagen de estrella sobre la imagen de fondo que parpadea y que representa la cantidad de la lista';
  
    var numStars = namesList.children.length; 
  
    var starWidth = 30; 
    var starHeight = 30; 
    var spaceBetweenStars = 10;
  
    var containerWidth = starContainer.offsetWidth; 
  
    var starsPerRow = Math.floor(containerWidth / (starWidth + spaceBetweenStars)); 
  
    for (var i = 0; i < numStars; i++) {
      var star = starList.cloneNode(true); 
  
      var row = Math.floor(i / starsPerRow); 
      var col = i % starsPerRow; 
  
      var starX = col * (starWidth + spaceBetweenStars);
      var starY = row * (starHeight + spaceBetweenStars);
  
      star.style.left = starX + 'px'; 
      star.style.top = starY + 'px';
  
      star.className = 'star'; 
  
      starContainer.appendChild(star); 
    }
  
    var newStar = document.createElement('img');
    newStar.className = 'imgGame';
    newStar.src = '/images/imgGame.JPG';
    newStar.alt = 'Imagen del juego';
    starContainer.appendChild(newStar);
  
    var container1 = document.createElement('div');
    container1.className = 'containerInfo';
    starContainer.parentNode.insertBefore(container1, starContainer.nextSibling);
  
    var title1 = document.createElement('h2');
    title1.className = 'titleStatus';
    title1.textContent = 'Estrellas caídas';
    container1.appendChild(title1);
  
    var numbers1 = document.createElement('div');
    numbers1.className = 'numbers';
    container1.appendChild(numbers1);
  
    var button1 = document.createElement('button');
    button1.className = 'btnGame';
    button1.textContent = 'INICIAR';
    container1.appendChild(button1);
  
    var container2 = document.createElement('div');
    container2.className = 'containerInfo2';
    starContainer.parentNode.insertBefore(container2, starContainer.nextSibling);
  
    var title2 = document.createElement('h2');
    title2.className = 'titleStatus';
    title2.textContent = 'Estrellas latentes';
    container2.appendChild(title2);
  
    var numbers2 = document.createElement('div');
    numbers2.className = 'numbers';
    container2.appendChild(numbers2);

   function counterDraw() {
    numbers2.textContent = players.length;
    numbers1.textContent = playersRemoved.length;
   }
   counterDraw()

    function playerRemoved() {
      const indiceRandom = getRandomInt(players.length-1);
      const jugadorEliminado = players.splice(indiceRandom, 1)[0];
      playerRemoved.push(jugadorEliminado);
      counterDraw();
    }
    
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    
    button1.addEventListener('click', function(){
      if (players.length > 0) {
        const indiceRandom = getRandomInt(players.length -1)
        const jugadorSeleccionado = players[indiceRandom]
        console.log(jugadorSeleccionado);
      }
    })
  }

  
  