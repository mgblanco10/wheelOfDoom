document.addEventListener('DOMContentLoaded', function () {
    var btnStart = document.querySelector('.btnStart');
    var audioPlayer = document.getElementById('audioPlayer');
  
    btnStart.addEventListener('click', function () {
      audioPlayer.play();
    });
  });
