function startTime() {
    audioVol();
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('txt').innerHTML =
    h + ":" + m;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  function audioVol(){
    var audio = document.getElementById("musicPlayer");
    audio.volume = 0.1;
    }
    var isPlaying = true;
  function audioController(){
      var audioP = document.getElementById("musicPlayer");
      if(isPlaying){
          audioP.pause();
          isPlaying = false;
      } else{
          audioP.play();
          isPlaying = true;
      }
  }
