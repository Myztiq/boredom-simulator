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
  $('.boredom-status').addClass('active');
  $('.screen.active').removeClass('active');
  $('#room').addClass('active');

  $('.btn').off('.room');

  $('#watchYoutube').on('click.room', function(){
    goToTV({
      iframe: "//www.youtube.com/embed/25gMNtEYlu0?autoplay=1"
    })
  });

  $('#callOfPizzaDuty').on('click.room', function(){
    goToTV({
      iframe: '/games/CallOfPizzaDuty',
      activity: 'callOfPizzaDuty'
    })
  });

  $('#paintAndPlay').on('click.room', function(){
    goToTV({
      iframe: '/games/PaintAndPlay'
    })
  });

  $('#rollAgain').on('click.room', function(){
    goToTV({
      iframe: '/games/RollAgain'
    })
  });

  $('#superMining').on('click.room', function(){
    goToTV({
      iframe: '/games/SuperMiningExplorer'
    })
  });

  $('#excitementSimulator').on('click.room', function(){
    goToTV({
      iframe: '/',
      recursive: true
    })
  });

  $('#boredomSimulator').on('click.room', function(){
    goToTV({
      iframe: '/',
      recursive: true
    })
  });

  $('#wisconsin').on('click.room', function(){
    goToTV({
      iframe: 'http://wisconsin.meteor.com/game/start',
      recursive: true
    })
  });

  $('#watchNetflix').on('click.room', function(){
    goToTV({
      video: '/assets/video/big_buck_bunny_480p_h264.mov'
    })
  });

  $('#toggleLights').on('click.room', function(){
    goToTV({

    })
  });



};

var goToTV = function(options){
  $('.boredom-status').addClass('active');
  $('.screen.active').removeClass('active');
  var sounds = new AudioPlayer(); //debug
  sounds.loadSounds();
  sounds.play("test");
  $('#tv').addClass('active');
  if(options.activity){
    startActivity(options.activity);
  }
  if(options.iframe){
    $('#tv iframe').attr("src", options.iframe);
    if(options.recursive){
      $('#tv iframe').addClass('recursive');
    }else{
      $('#tv iframe').removeClass('recursive');
    }
  }

  $('#turnOffTV').one('click', function(){
    stopActivity();
    goToRoom()
  })
};

var goToPhone = function(){
  $('.boredom-status').addClass('active');
  $('.screen.active').removeClass('active');
  $('#phone').addClass('active');
  sendNextMessage();
  $('#phone').one('click', function(){
    goToRoom();
  });
};

var goToFail = function(){
  $('.boredom-status').removeClass('active');
  $('.screen.active').removeClass('active');
  $('#fail').addClass('active');
}

$(function(){
  $('#getStarted').click(function(){
    goToPhone();
  });

});
