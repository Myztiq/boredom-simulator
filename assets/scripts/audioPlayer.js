function AudioPlayer() {
  var loadSoundsWasExecuted = false;
  var loadCount = 0;
  var hSounds = {};

  var loadErrorHandler = function () {
    console.log("An error occurred.  Unable to load sound: cat.m4a");
  };

  var loadSounds = function (onLoadCallback) {
    if (loadSoundsWasExecuted === true) {
      return;
    }

    hSound = {
      test: new Howl({
        urls: ["/assets/sounds/test_ogg.ogg"],
        loop: false,
        buffer: true,
        onload: function(){
          loadCount++;
          // console.log(loadCount);
          onLoadCallback;
          },
        onloaderror: loadErrorHandler
      }),
      test2: new Howl({
        urls: ["/assets/sounds/test_ogg.ogg"],
        loop: false,
        buffer: true,
        onload: function(){
          loadCount++;
          // console.log(loadCount);
          onLoadCallback;
        },
        onloaderror: loadErrorHandler
      }),
      test3: new Howl({
        urls: ["/assets/sounds/test_ogg.ogg"],
        loop: false,
        buffer: true,
        onload: function(){
          loadCount++;
          // console.log(loadCount);
          onLoadCallback;
        },
        onloaderror: loadErrorHandler
      })
    };
    loadSoundsWasExecuted = true;
  };

  var play = function (name) {
    try {
      hSound[name].play();
    } catch (e) {
      if (console !== undefined) {
        console.log("While trying to play sound " + name + ", an error was encountered: " + e.message);
      }
    }
  };

  var delayedPlay = function (name, delay) {
    setTimeout(function () {play("" + name);}, delay);
  };

  var getSoundNames = function () {
    var soundNames = [];
    for (var prop in hSound.sprite()) {
      soundNames[soundNames.length] = prop;
    }
    return soundNames;
  };

  return {
    loadSounds: loadSounds,
    play: play
    // delayedPlay: delayedPlay,
    // getSoundNames: getSoundNames
  };

};
//http://uberiquity.com/blog/index.php/tag/howler-js/

// function AudioPlayer() {
//   this.loadCount = 0;
//   this.soundLib = {
//     test: new Howl({
//       urls: ["/assets/sounds/test_ogg.ogg"],
//       // autoplay: true,
//       loop: false,
//       buffer: true,
//       onload: function () {
//         this.loadCount++;
//         // console.log(loadCount)
//       }
//     }),
//     test2: new Howl({
//       urls: ["/assets/sounds/test_ogg.ogg"],
//       // autoplay: true,
//       loop: false,
//       buffer: true,
//       onload: function () {
//         this.loadCount++;
//         // console.log(loadCount)
//       }
//     }),
//     test3: new Howl({
//       urls: ["/assets/sounds/test_ogg.ogg"],
//       // autoplay: true,
//       loop: false,
//       buffer: true,
//       onload: function () {
//         this.loadCount++;
//         // console.log(loadCount)
//       }
//     })
//   };
//   this.load = function () {
//     this.loadCount = 0;
//     alert("loaded");
//     console.log(this.loadCount)
//   };
//   this.play = function (soundName) {
//     this.soundLib[soundName].play();
//   };
// }
