function AudioPlayer() {

  var loadSounds = function () {
    lowLag.init();
    lowLag.load(["/assets/sounds/test_ogg.ogg"],"test");
    lowLag.load(["/assets/sounds/OGG/bsim_sfx_ui_txt_rcve_01.ogg", "/assets/sounds/MP3/bsim_sfx_ui_txt_rcve_01.mp3"],"txtReceive_01");
    lowLag.load(["/assets/sounds/OGG/bsim_sfx_ui_txt_rcve_02.ogg", "/assets/sounds/MP3/bsim_sfx_ui_txt_rcve_02.mp3"],"txtReceive_02");
    lowLag.load(["/assets/sounds/OGG/bsim_sfx_ui_txt_rcve_03.ogg", "/assets/sounds/MP3/bsim_sfx_ui_txt_rcve_03.mp3"],"txtReceive_03");
    lowLag.load(["/assets/sounds/OGG/bsim_sfx_ui_txt_snd_01.ogg", "/assets/sounds/MP3/bsim_sfx_ui_txt_snd_01.mp3"],"txtSend_01");
    lowLag.load(["/assets/sounds/OGG/bsim_sfx_ui_txt_snd_02.ogg", "/assets/sounds/MP3/bsim_sfx_ui_txt_snd_02.mp3"],"txtSend_02");
    lowLag.load(["/assets/sounds/OGG/bsim_sfx_ui_txt_snd_03.ogg", "/assets/sounds/MP3/bsim_sfx_ui_txt_snd_03.mp3"],"txtSend_03");
    lowLag.load(["/assets/sounds/OGG/bsim_sfx_lght_off.ogg", "/assets/sounds/MP3/bsim_sfx_lght_off.mp3"],"lightOff");
    lowLag.load(["/assets/sounds/OGG/bsim_sfx_lght_on.ogg","/assets/sounds/MP3/bsim_sfx_lght_on.mp3"],"lightOn");
    // snoring from https://www.freesound.org/people/smidoid/sounds/63349/
    lowLag.load(["/assets/sounds/OGG/snoring.ogg","/assets/sounds/MP3/snoring.mp3"],"snoring");

  };

  var play = function (name) {
    lowLag.play(name);
  };

  return {
    loadSounds: loadSounds,
    play: play
  };

};