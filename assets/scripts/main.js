var boredomPercent = 0;
var smsWriter = new SmsWriter();

var sendNextMessage = function(){
  setTimeout(function(){
    smsWriter.recieveMessage("hello this is a generated msg");

    setTimeout(function(){
      smsWriter.sendMessage("me too!");
    }, 500);

  }, 500);
};

var goToRoom = function(){
  $('.screen.active').removeClass('active');
  $('#room').addClass('active');

  $('.btn').off('.room');

  $('#watchYoutube').on('click.room', function(){
    goToTV({
      youtube: "Q7hZjNO3I-Q"
    })
  })

  $('#callOfPizzaDuty').on('click.room', function(){
    goToTV({
      iframe: '/games/CallOfPizzaDuty'
    })
  })
  $('#paintAndPlay').on('click.room', function(){
    goToTV({
      iframe: '/games/PaintAndPlay'
    })
  })
  $('#rollAgain').on('click.room', function(){
    goToTV({
      iframe: '/games/RollAgain'
    })
  })
  $('#superMining').on('click.room', function(){
    goToTV({
      iframe: '/games/SuperMiningExplorer'
    })
  })
  $('#excitementSimulator').on('click.room', function(){
    goToTV({
      iframe: '/',
      recursive: true
    })
  })
  $('#boredomSimulator').on('click.room', function(){
    goToTV({
      iframe: '/'
    })
  })
  $('#wisconsin').on('click.room', function(){
    goToTV({
      iframe: 'http://wisconsin.meteor.com/game/start',
      recursive: true
    })
  })
  $('#watchNetflix').on('click.room', function(){
    goToTV({

    })
  })
  $('#toggleLights').on('click.room', function(){
    goToTV({

    })
  })



}

var goToTV = function(options){
  $('.screen.active').removeClass('active');
  playSounds(['test_ogg.ogg']); //debug
  $('#tv').addClass('active');
  if(options.iframe){
    $('#tv iframe').attr("src", options.iframe)
    if(options.recursive){
      $('#tv iframe').addClass('recursive')
    }else{
      $('#tv iframe').removeClass('recursive')
    }
  } else if(options.youtube){
    console.log('Youtube!')
  }

  $('#turnOffTV').one('click', function(){
    goToRoom()
  })
}

var goToPhone = function(){
  $('.screen.active').removeClass('active');
  $('#phone').addClass('active');
  sendNextMessage();
  $('#phone').one('click', function(){
    goToRoom();
  });
};

$(function(){
  $('#getStarted').click(function(){
    goToPhone();
  });


  var $percent = $('.boredom-status .percent');
  setInterval(function(){
    boredomPercent++;
    $percent.css({width: boredomPercent+"%"});
  }, 1000);
});
