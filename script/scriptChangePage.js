function playGame() {
  let inputName = document.getElementById('inputName');
  let buttonAgree = document.getElementsByClassName('btnAgree')[0];
  let buttonPlay = document.getElementsByClassName('buttonPlay')[0];
  let starContainer = document.getElementsByClassName('star-container')[0];
  let telescope = document.querySelector('.telescope');
  let stars = document.querySelectorAll('.star');
  let namesList = document.getElementById('namesList');

  inputName.style.display = 'none';
  buttonAgree.style.display = 'none';
  buttonPlay.style.display = 'none';
  telescope.style.display = 'none';
  namesList.style.display = 'none';

  for (let i = 0; i < stars.length; i++) {
    stars[i].style.display = 'none';
  }

  let starList = document.createElement('img');
  starList.className = 'starList';
  starList.src = '/images/starYellow.png';
  starList.alt = 'Imagen de estrella sobre la imagen de fondo que parpadea y que representa la cantidad de la lista';

  let numStars = namesList.children.length;

  let starWidth = 30;
  let starHeight = 30;
  let spaceBetweenStars = 15;

  let containerWidth = starContainer.offsetWidth;
  let starsPerRow = Math.max(Math.floor(containerWidth / (starWidth + spaceBetweenStars)), 5);

  for (let i = 0; i < numStars; i++) {
    const row = Math.floor(i/ starsPerRow);
    const col = i % starsPerRow;
  
    const starX = col * (starWidth + spaceBetweenStars);
    const starY = row * (starHeight + spaceBetweenStars);
  
    const starHTML = `
      <img
        id="star-${i}"
        class="star"
        style="left: ${starX}px; top: ${starY}px;"
        src="/images/starYellow.png"
        alt="Imagen de estrella sobre la imagen de fondo que parpadea y que representa la cantidad de la lista"
      >
    `;
  
    starContainer.insertAdjacentHTML('beforeend', starHTML);
  }

  let newStar = document.createElement('img');
  newStar.className = 'imgGame';
  newStar.src = '/images/imgGame.JPG';
  newStar.alt = 'Imagen del juego donde se van a pintar las estrellas, es un niño sentado';
  starContainer.appendChild(newStar);

  let containerStarDead = document.createElement('div');
  containerStarDead.className = 'containerInfo';
  starContainer.parentNode.insertBefore(containerStarDead, starContainer.nextSibling);

  let titleStarDead = document.createElement('h2');
  titleStarDead.className = 'titleStatus';
  titleStarDead.textContent = 'Estrellas caídas';
  containerStarDead.appendChild(titleStarDead );

  let numbersStarDead = document.createElement('div');
  numbersStarDead.className = 'numbers';
  containerStarDead.appendChild(numbersStarDead);
  
  let containerStarShine = document.createElement('div');
  containerStarShine.className = 'containerInfo2';
  starContainer.parentNode.insertBefore(containerStarShine, starContainer.nextSibling);

  let titleStarShine = document.createElement('h2');
  titleStarShine.className = 'titleStatus';
  titleStarShine.textContent = 'Estrellas latentes';
  containerStarShine.appendChild(titleStarShine);
  
  let numberStarShine = document.createElement('div');
  numberStarShine.className = 'numbers';
  containerStarShine.appendChild(numberStarShine);

  let buttonStartGame = document.createElement('button');
  buttonStartGame.className = 'btnGame';
  buttonStartGame.textContent = 'INICIAR';
  containerStarDead.appendChild(buttonStartGame);

  function counterDraw() {
    numberStarShine.textContent = players.length;
    numbersStarDead.textContent = playersRemoved.length;
  }
  counterDraw();

  let jugadorEliminado;
  function playerRemoved() {
    if (players.length >= 0) {
      let starId = 'star-' + playersRemoved.length;
      let starToRemove = document.getElementById(starId);
      if (starToRemove) {
        starToRemove.style.display = 'none';
        starToRemove.remove();
      }
  
      let indiceRandom = getRandomInt(players.length - 1);
      jugadorEliminado = players.splice(indiceRandom, 1)[0];
      playersRemoved.push(jugadorEliminado);
      counterDraw();
    }
  }
  
  function getRandomInt(num) {
    return Math.floor(Math.random() * num);
  }

  let playerName = document.createElement('p');
  playerName.className = 'playerName';
  containerStarDead.appendChild(playerName);

  buttonStartGame.addEventListener('click', function () {
    if (players.length >= 0) {
      playerRemoved();

      let starAnimate = document.createElement('img');
      starAnimate.className = 'imgStarAnimate';
      starAnimate.src = '/images/animateStar.png';
      starAnimate.alt = 'Imagen de la estrella donde aparece el nombre de la estrella que ha sido seleccionada para desaparecer';
      starContainer.appendChild(starAnimate);
      playerName.textContent = jugadorEliminado;
      starContainer.appendChild(playerName); 

      starAnimate.classList.toggle('rotate-animation');
      playerNameContainer.classList.toggle('rotate-text');
    }
  });
}

