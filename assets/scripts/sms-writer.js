function SmsWriter() {
  this.recieveMessage = function (text) {
    var msgDIV = $("<div class='text-left'><p class='white-shadow'>"+ text +"</p></div>");
    $('.iphone .container').append(msgDIV);
    
    var receiveSounds = [ "txtReceive_01", "txtReceive_02", "txtReceive_03" ];
    //Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    var soundIndex = Math.floor(Math.random() * receiveSounds.length);
    sounds.play( receiveSounds[ soundIndex] );

    $('.iphone').animate({ scrollTop: $('.iphone .container').height() });

  };

  this.sendMessage = function (text) {
    var msgDIV = $("<div class='text-right'><p class='white-shadow'>"+ text +"</p></div>");
    $('.iphone .container').append(msgDIV);

    var sendSounds = [ "txtSend_01", "txtSend_02", "txtSend_03" ];
    //Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    var soundIndex = Math.floor(Math.random() * sendSounds.length);
    sounds.play( sendSounds[ soundIndex] );

    $('.iphone').animate({ scrollTop: $('.iphone .container').height() });
  };
}
