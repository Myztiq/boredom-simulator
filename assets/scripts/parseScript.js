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




sendNextMessage = function(finishedCallback){
  console.log('Sending message??!')
  var conversation = getNextMessage();
  var messageList = conversation.split("\n");
  for (var i = 0; i < messageList.length; i++) {
    (function(i){
      var smsLine = messageList[i];

      setTimeout(function(){
        if (smsLine[0] === ">") {
          smsLine = smsLine.substr(1);
          smsWriter.sendMessage(smsLine.trim());
        }else if(smsLine.replace(/(\r\n|\n|\r)/gm,"").length > 0){
          smsWriter.recieveMessage(smsLine.trim());
        }

        if(i === messageList.length-1){
          finishedCallback();
        }
      }, (i * 1000) + (smsLine.trim().length * 50));
    })(i);

  }
};
