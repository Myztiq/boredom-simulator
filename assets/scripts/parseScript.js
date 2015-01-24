var conversation = null;
$.get( "/assets/scripts/smsScript.txt", function( data ) {
  conversation = data.split("\n\n");
});

(function(){
  var currentMessage = -1;

  getNextMessage = function(){
    currentMessage++;
    return conversation[currentMessage];
  };
})();


setTimeout(function(){

  sendNextMessage = function(){
    var conversation = getNextMessage();
    var messageList = conversation.split("\n");
    for (var i = 0; i < messageList.length; i++) {
      (function(){
        var smsLine = messageList[i];

        console.log(smsLine);

        setTimeout(function(){
          if (smsLine[0] === ">") {
            smsLine = smsLine.substr(1);
            smsWriter.sendMessage(smsLine.trim());
          }else if(smsLine.replace(/(\r\n|\n|\r)/gm,"").length > 0){
            smsWriter.recieveMessage(smsLine.trim());
          }
        }, i* 1000);
      })(i);

    }
  };
}, 400);
