function playSounds(soundFiles, repeat) {
  if (repeat === null) {
    repeat = false;
  }

  for (var i = 0; i < soundFiles.length; i++) {
    soundFiles[i] = "/assets/sounds/" + soundFiles[i];
  }

  var sound = new Howl({
    urls: soundFiles,
    autoplay: true,
    loop: repeat,
    // volume: 0.5,
    // onend: function() {
    //
    // }
  });
}

// Example Code
// playSounds(['test_ogg.ogg'], false);
