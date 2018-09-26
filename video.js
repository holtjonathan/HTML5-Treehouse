window.onload = function() {
// Get the video.

// var video = document.getElementById("myVideo");
//console.log('video', video);
// Get the buttons.
var playBtn =  document.getElementById("playBtn");
var pauseBtn = document.getElementById("pauseBtn");
}
//Add an event listener for the play button.
playBtn.addEventListener("click", function(e) {
  // Play the video.
  console.log('video', video);
  //console.log('videoOnLoad', videoOnLoad);
  video.play();
});
//Add an event listener for the pause button.
pauseBtn.addEventListener("click", function(e) {
  //Pause the video.
  video.pause();
});


var video = document.getElementById("myVideo");