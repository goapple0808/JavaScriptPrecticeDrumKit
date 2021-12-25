$(".button-e").mousedown(function () {
  playSounds("music/crash.wav");
});
$(".button-r").mousedown(() => {
  playSounds("music/ride.wav");
});
$(".button-f").mousedown(() => {
  playSounds("music/floorTom.wav");
});

$(".button-g").mousedown(() => {
  playSounds("music/midTom.wav");
});

$(".button-v").mousedown(() => {
  playSounds("music/kick.wav");
});

$(".button-b").mousedown(() => {
  playSounds("music/kick.wav");
});

$(".button-h").mousedown(() => {
  playSounds("music/highTom.wav");
});

$(".button-j").mousedown(() => {
  playSounds("music/snare.mp3");
});

$(".button-i").mousedown(() => {
  playSounds("music/hiHatOpen.mp3");
});

$(".button-k").mousedown(() => {
  playSounds("music/hiHatClose.mp3");
});
$("body").keypress(function (event) {
  let inputKey = event.key;
  let buttonName = ".button-" + inputKey;
  switch (inputKey) {
    case "e":
      keyTrigger(buttonName);
      playSounds("music/crash.wav");
      break;

    case "r":
      keyTrigger(buttonName);
      playSounds("music/ride.wav");
      break;

    case "f":
      keyTrigger(buttonName);
      playSounds("music/floorTom.wav");
      break;

    case "g":
      keyTrigger(buttonName);
      playSounds("music/midTom.wav");
      break;

    case "h":
      keyTrigger(buttonName);
      playSounds("music/highTom.wav");
    case "v":
    case "b":
      keyTrigger(buttonName);
      playSounds("music/kick.wav");
    case "j":
      keyTrigger(buttonName);
      playSounds("music/snare.mp3");
    case "i":
      keyTrigger(buttonName);
      playSounds("music/hiHatOpen.mp3");
    case "k":
      keyTrigger(buttonName);
      playSounds("music/hiHatClose.mp3");
  }
});

function playSounds(soundFile) {
  var audio = new Audio(soundFile);
  audio.play();
}
function keyTrigger(buttonName) {
  $(buttonName).hide();
  $(buttonName).show("fast");
}
