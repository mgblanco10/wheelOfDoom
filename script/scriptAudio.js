document.addEventListener('DOMContentLoaded', function () {
  var btnStart = document.querySelector('.btnStart');
  var audioPlayer = document.getElementById('audioPlayer');

  btnStart.addEventListener('click', function (event) {
    event.preventDefault(); 
    audioPlayer.currentTime = 0; 
    audioPlayer.play(); 

    setTimeout(function () {
      window.location.href = "/page/index.html"; 
    }, 1000); 
  });
});
