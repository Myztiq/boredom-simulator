function SmsWriter() {
  this.recieveMessage = function (text) {
    var msgDIV = $("<div class='text-left'><p class='white-shadow'>"+ text +"</p></div>");
    $('.iphone .container').append(msgDIV);
    $('.iphone').animate({ scrollTop: $('.iphone .container').height() });

  };

  this.sendMessage = function (text) {
    var msgDIV = $("<div class='text-right'><p class='white-shadow'>"+ text +"</p></div>");
    $('.iphone .container').append(msgDIV);

    $('.iphone').animate({ scrollTop: $('.iphone .container').height() });
  };
}
