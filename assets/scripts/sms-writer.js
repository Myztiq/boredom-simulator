function SmsWriter() {
  this.recieveMessage = function (text) {
    var msgText = $("<p class='white-shadow'>"+ text +"</p>");
    var msgDIV = $("<div class='text-left'><p class='white-shadow'>"+ text +"</p></div>");
    $('.iphone .container').append(msgDIV);

    $('.iphone .container').scrollTop(1000000);
  };

  this.sendMessage = function (text) {
    var msgText = $("<p class='white-shadow'>"+ text +"</p>");
    var msgDIV = $("<div class='text-right'><p class='white-shadow'>"+ text +"</p></div>");
    $('.iphone .container').append(msgDIV);
    $('.iphone .container').scrollTop(1000000);
  };
}
