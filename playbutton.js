
var myVideo = document.getElementById("myVideo");
myVideo.controls = false;


function playPause() {
  if (myVideo.paused)
    myVideo.play();
    //myVideo.controls = true;
  else
    myVideo.pause();
    //myVideo.controls = true;
}
