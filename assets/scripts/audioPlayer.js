function AudioPlayer() {

  var loadAudio = function(soundName, id){
    lowLag.load(["/assets/sounds/"+soundName+".ogg","/assets/sounds/MP3/"+soundName+".mp3"],id);
  }

  var loadSounds = function () {
    lowLag.init();
    loadAudio('bsim_sfx_ui_txt_rcve_01', 'txtReceive_01');
    loadAudio('bsim_sfx_ui_txt_rcve_02', 'txtReceive_02');
    loadAudio('bsim_sfx_ui_txt_rcve_03', 'txtReceive_03');

    loadAudio('bsim_sfx_ui_txt_snd_01', 'txtSend_01');
    loadAudio('bsim_sfx_ui_txt_snd_02', 'txtSend_02');
    loadAudio('bsim_sfx_ui_txt_snd_03', 'txtSend_03');

    loadAudio('bsim_sfx_lght_off', 'lightOff');
    loadAudio('bsim_sfx_lght_on', 'lightOn');


    loadAudio('bsim_sfx_dx_sigh_01', 'bsim_sfx_dx_sigh_01');
    loadAudio('bsim_sfx_dx_sigh_02', 'bsim_sfx_dx_sigh_02');
    loadAudio('bsim_sfx_dx_sigh_03', 'bsim_sfx_dx_sigh_03');
    loadAudio('bsim_sfx_lght_on', 'lightOn');

    loadAudio('bsim_sfx_fart_03', 'bsim_sfx_fart_03');
    loadAudio('bsim_sfx_crak_nukl', 'bsim_sfx_crak_nukl');
    loadAudio('bsim_sfx_dx_exer_02', 'bsim_sfx_dx_exer_02');
    loadAudio('bsim_sfx_dx_exer_03', 'bsim_sfx_dx_exer_03');
    loadAudio('bsim_sfx_dx_exer_04', 'bsim_sfx_dx_exer_04');
    loadAudio('bsim_sfx_dx_exer_05', 'bsim_sfx_dx_exer_05');

    // snoring from https://www.freesound.org/people/smidoid/sounds/63349/
    loadAudio('snoring', 'snoring');
    loadAudio('bsim_sfx_hovr', 'hovr');
    loadAudio('bsm_sfx_ui_gam_slct', 'gameSelect');


    loadAudio('bsim_sfx_ui_txt_msg_01', 'text1');
    loadAudio('bsim_sfx_ui_txt_msg_02', 'text2');
    loadAudio('bsim_sfx_ui_txt_msg_03', 'text3');

    loadAudio('bsim_sfx_tv_off', 'tvOff');
    loadAudio('bsim_sfx_amb_liv_room_01', 'ambient');

    loadAudio('bsim_sfx_ui_bmtr_win', 'win');

    loadAudio('bsim_mx_theme', 'theme');
  };

  var play = function (name) {
    return lowLag.play(name);
  };

  return {
    loadSounds: loadSounds,
    play: play
  };

};
