// Fisher-Yates shuffle. can be used on array-like object
function randomizeListInplace (myList) {
    var i = myList.length, j, temp;
    while (--i >= 1) { // --i returns new value
        j = Math.floor( Math.random() * ( i + 1 ) ); // random element up to i, inclusive
        // swap i j
        temp = myList[i];
        myList[i] = myList[j];
        myList[j] = temp;
    }
    return myList;
}

var conversation = null;
$.get( "/assets/scripts/smsScript.txt", function( data ) {
  conversation = data.split("\n\n");
  var firstEntry = conversation[0];
  conversation.shift();
  randomizeListInplace( conversation);
  conversation.unshift(firstEntry);
});

(function(){
  var currentMessage = -1;

  getNextMessage = function(){
    $(".iphone .container").fadeIn("fast");
    currentMessage++;
    return conversation[currentMessage];
  };
})();

sendNextMessage = function(finishedCallback){
  var conversation = getNextMessage();
  var messageList = conversation.split("\n");

  var flabergast = function(index, max){
    if(index > max){
      finishedCallback()
      fadeOutMessages();
      return;
    }
    var randomWaitTime = 500 + Math.random() * 1000;
    var smsLine = messageList[index];
    if (smsLine.trim().length !== 0) {

      if (smsLine[0] == ">") {
        setTimeout(function(){
          smsLine = smsLine.substr(1);
          smsWriter.sendMessage(smsLine.trim());
          flabergast(++index, max);
        }, (1000 + (smsLine.trim().length * 50)));
      }else{
        setTimeout(function () {
          smsWriter.pendingRecieve();

          setTimeout(function(){
            smsWriter.recieveMessage(smsLine.trim());
            flabergast(++index, max);
          }, (1000 + (smsLine.trim().length * 50)));
        }, randomWaitTime);
      }
    }else {
      flabergast(++index, max);
    }
  }
  flabergast(0, messageList.length-1);
};


function fadeOutMessages() {
  setTimeout(function () {
    $(".iphone .container").fadeOut(2000, function () {
      goToRoom();
    });
  }, 3000);
}
