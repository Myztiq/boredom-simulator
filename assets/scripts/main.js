var boredomPercent = 0;
var smsWriter = new SmsWriter();

var sendNextMessage = function(){
  setTimeout(function(){
    smsWriter.recieveMessage("hello this is a generated msg");

    setTimeout(function(){
      smsWriter.sendMessage("me too!");
    }, 500)

  }, 500);
}

var goToRoom = function(){
  $('.screen.active').removeClass('active');
  $('#room').addClass('active');

  $('.btn').off('.room');

  $('#watchYoutube').on('click.room', function(){
    goToTV("https://www.youtube.com/watch?v=Q7hZjNO3I-Q")
  })
}

var goToTV = function(url){

}

var goToPhone = function(){
  $('.screen.active').removeClass('active');
  $('#phone').addClass('active');
  sendNextMessage();
  $('#phone').one('click', function(){
    goToRoom()
  })
}

$(function(){
  $('#getStarted').click(function(){
    goToPhone()
  });


  var $percent = $('.boredom-status .percent');
  setInterval(function(){
    boredomPercent++;
    $percent.css({width: boredomPercent+"%"});
  }, 1000)




});