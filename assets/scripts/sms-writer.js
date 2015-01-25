function SmsWriter() {
  this.recieveMessage = function (text) {
    $('.iphone .container .pending').remove();
    var msgDIV = $("<div class='text-left'><p class='white-shadow'>"+ text +"</p></div>");
    $('.iphone .container').append(msgDIV);

    var receiveSounds = [ "txtReceive_01", "txtReceive_02", "txtReceive_03" ];
    //Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    var soundIndex = Math.floor(Math.random() * receiveSounds.length);
    sounds.play( receiveSounds[ soundIndex] );

    $('.iphone').animate({ scrollTop: $('.iphone .container').height() });

  };

  this.pendingRecieve = function(){
    $('.iphone .container .pending').remove();
    var msgDIV = $("<div class='text-left pending'><p class='white-shadow'>...</p></div>");
    $('.iphone .container').append(msgDIV);
    $('.iphone').animate({ scrollTop: $('.iphone .container').height() });
  }

  this.pendingMessage = function(delayLength, messageLength){
    var total = 1000;
    var interval = delayLength/(messageLength/1.5 + 2);
    while(total < delayLength - 700){
      setTimeout(function(){
        sounds.play('text' + Math.ceil(Math.random()*3));
      }, total)
      total += interval;
    }
  }

  this.sendMessage = function (text) {
    $('.iphone .container .pending').remove();
    var msgDIV = $("<div class='text-right'><p class='white-shadow'>"+ text +"</p></div>");
    $('.iphone .container').append(msgDIV);

    var sendSounds = [ "txtSend_01", "txtSend_02", "txtSend_03" ];
    //Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    var soundIndex = Math.floor(Math.random() * sendSounds.length);
    setTimeout(function(){
      sounds.play( sendSounds[ soundIndex] );
    }, 200)

    $('.iphone').animate({ scrollTop: $('.iphone .container').height() });
  };
}
