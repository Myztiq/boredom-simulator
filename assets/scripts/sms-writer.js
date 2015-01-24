function SmsWriter() {
  this.recieveMessage = function (text, containerDIV) {
    var msgText = $("<p class='white-shadow'>"+ text +"</p>");
    var msgDIV = $("<div class='text-left'><p class='white-shadow'>"+ text +"</p></div>");
    $(containerDIV).append(msgDIV);
  };

  this.sendMessage = function (text, containerDIV) {
    var msgText = $("<p class='white-shadow'>"+ text +"</p>");
    var msgDIV = $("<div class='text-right'><p class='white-shadow'>"+ text +"</p></div>");
    $(containerDIV).append(msgDIV);
  };
}

//example code
smsWriter = new SmsWriter();

smsWriter.recieveMessage("hello this is a generated msg", "div .container");
smsWriter.sendMessage("me too!", "div .container");
