
var myVideo = document.getElementById("myVideo");
myVideo.controls = false;


function playPause() {
  if (myVideo.paused)
    myVideo.play();
  else
    myVideo.pause();
}
