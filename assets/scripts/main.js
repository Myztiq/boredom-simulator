var smsWriter = new SmsWriter();

var sendNextMessage = function(){
  setTimeout(function(){
    smsWriter.recieveMessage("hello this is a generated msg");

    setTimeout(function(){
      smsWriter.sendMessage("me too!");
    }, 500);

  }, 500);
};

var youTubeSelection = function() {
  var videoList = [
  "25gMNtEYlu0",
  "M2urdlfmrpE",
  "KbumV5bQTuM",
  "z5Otla5157c",
  "JQwJVfVAPLQ",
  "aKiYHdtff2c",
  "YwOp8WEqlRI",
  "QoHJ3VZM8XU"
  ];
  var selectedVideo = videoList[Math.floor(Math.random()*videoList.length)];
  var selectedUrl = "//www.youtube.com/embed/"+ selectedVideo +"?autoplay=1";
  return selectedUrl;
};

var goToRoom = function(){
  startBoredom();
  $('.screen.active').removeClass('active');
  $('#room').addClass('active');

  $('.btn').off('.room');

  $('#watchYoutube').on('click.room', function(){
    goToTV({
      iframe: youTubeSelection(),
      activity: "watchYoutube"
    });
  });

  $('#callOfPizzaDuty').on('click.room', function(){
    goToTV({
      iframe: '/games/CallOfPizzaDuty',
      activity: 'callOfPizzaDuty'
    });
  });

  $('#paintAndPlay').on('click.room', function(){
    goToTV({
      iframe: '/games/PaintAndPlay',
      activity: "paintAndPlay"
    });
  });

  $('#rollAgain').on('click.room', function(){
    goToTV({
      iframe: '/games/RollAgain',
      activity: "rollAgain"
    });
  });

  $('#superMining').on('click.room', function(){
    goToTV({
      iframe: '/games/SuperMiningExplorer',
      activity: "superMining"
    });
  });

  $('#excitementSimulator').on('click.room', function(){
    goToTV({
      iframe: '/',
      activity: "excitementSimulator",
      recursive: true
    });
  });

  $('#boredomSimulator').on('click.room', function(){
    goToTV({
      iframe: '/',
      activity: "boredomSimulator",
      recursive: true
    });
  });

  $('#wisconsin').on('click.room', function(){
    goToTV({
      iframe: 'http://wisconsin.meteor.com/game/start',
      activity: "wisconsin",
      recursive: true
    });
  });

  $('#watchNetflix').on('click.room', function(){
    goToTV({
      video: '/assets/video/big_buck_bunny_480p_h264.mov',
      activity: "watchNetflix"
    });
  });

  $('#toggleLights').on('click.room', function(){
    goToTV({
      activity: "toggleLights"
    });
  });



};

var goToTV = function(options){
  startBoredom();
  $('.screen.active').removeClass('active');
  //var sounds = new AudioPlayer(); //debug
  //sounds.loadSounds();
  //sounds.play("test");
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
    goToPhone();
  });
};

var goToPhone = function(){
  pauseBoredom();
  $('.screen.active').removeClass('active');
  $('#phone').addClass('active');
  sendNextMessage();
  $('#phone').one('click', function(){
    goToRoom();
  });
};

var goToFail = function(){
  pauseBoredom();
  stopActivity();
  $('.screen.active').removeClass('active');
  $('#fail').addClass('active');
};

$(function(){
  $('#getStarted').click(function(){
    goToPhone();
  });

});
