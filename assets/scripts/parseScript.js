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

  sendNextMessage = function(finishedCallback){
    var conversation = getNextMessage();
    var messageList = conversation.split("\n");
    for (var i = 0; i < messageList.length; i++) {
      (function(){
        var smsLine = messageList[i];

        setTimeout(function(){
          if (smsLine[0] === ">") {
            smsLine = smsLine.substr(1);
            setTimeout(smsWriter.sendMessage(smsLine.trim()), smsLine.trim().length*50000);
          }else if(smsLine.replace(/(\r\n|\n|\r)/gm,"").length > 0){
            setTimeout(smsWriter.recieveMessage(smsLine.trim()), smsLine.trim().length*50000);
          }

          if(i === messageList.length){
            finishedCallback();
          }
        }, i* 1000);
      })(i);

    }
  };
}, 400);
