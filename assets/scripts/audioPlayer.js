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
      
      txtReceive_01: new Howl({
        urls: ["/assets/sounds/OGG/bsim_sfx_ui_txt_rcve_01.ogg", 
               "/assets/sounds/MP3/bsim_sfx_ui_txt_rcve_01.mp3"],
        loop: false,
        buffer: true,
        onload: function(){
          loadCount++;
          // console.log(loadCount);
          onLoadCallback;
        },
        onloaderror: loadErrorHandler
      }),
      txtReceive_02: new Howl({
        urls: ["/assets/sounds/OGG/bsim_sfx_ui_txt_rcve_02.ogg",
               "/assets/sounds/MP3/bsim_sfx_ui_txt_rcve_02.mp3"],
        loop: false,
        buffer: true,
        onload: function(){
          loadCount++;
          // console.log(loadCount);
          onLoadCallback;
        },
        onloaderror: loadErrorHandler
      }),
      txtReceive_03: new Howl({
        urls: ["/assets/sounds/OGG/bsim_sfx_ui_txt_rcve_03.ogg",
               "/assets/sounds/MP3/bsim_sfx_ui_txt_rcve_03.mp3"],
        loop: false,
        buffer: true,
        onload: function(){
          loadCount++;
          // console.log(loadCount);
          onLoadCallback;
        },
        onloaderror: loadErrorHandler
      }),

      txtSend_01: new Howl({
        urls: ["/assets/sounds/OGG/bsim_sfx_ui_txt_snd_01.ogg",
               "/assets/sounds/MP3/bsim_sfx_ui_txt_snd_01.mp3"],
        loop: false,
        buffer: true,
        onload: function(){
          loadCount++;
          // console.log(loadCount);
          onLoadCallback;
        },
        onloaderror: loadErrorHandler
      }),
      txtSend_02: new Howl({
        urls: ["/assets/sounds/OGG/bsim_sfx_ui_txt_snd_02.ogg",
               "/assets/sounds/MP3/bsim_sfx_ui_txt_snd_02.mp3"],
        loop: false,
        buffer: true,
        onload: function(){
          loadCount++;
          // console.log(loadCount);
          onLoadCallback;
        },
        onloaderror: loadErrorHandler
      }),
      txtSend_03: new Howl({
        urls: ["/assets/sounds/OGG/bsim_sfx_ui_txt_snd_03.ogg",
               "/assets/sounds/MP3/bsim_sfx_ui_txt_snd_03.mp3"],
        loop: false,
        buffer: true,
        onload: function(){
          loadCount++;
          // console.log(loadCount);
          onLoadCallback;
        },
        onloaderror: loadErrorHandler
      }),
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
