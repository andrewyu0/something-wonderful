const audio = document.getElementById('backgroundAudio');
    audio.volume = 0.2;
    document.getElementById('volumeControl').value = audio.volume * 100;


    function playAudio() {
      audio.play();
      document.removeEventListener('click', playAudio);
      document.removeEventListener('touchstart', playAudio);
    }

    document.getElementById('volumeControl').addEventListener('input', function (event) {
      audio.volume = event.target.value / 100;
    });

    document.addEventListener('click', playAudio);
    document.addEventListener('touchstart', playAudio);