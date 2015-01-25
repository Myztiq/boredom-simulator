var smsWriter = new SmsWriter();

var sounds = new AudioPlayer();
sounds.loadSounds();

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
      activity: "watchYouTube"
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
      iframe: 'http://www.boredomSimulator.com',
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

  $('#ballDrop').on('click.room', function(){
    goToTV({
      iframe: '/games/BallDrop',
      activity: "ballDrop"
    });
  });

  $('.toggleLights').on('click.room', function(){
    $('#room-dark').toggleClass('active');
    console.log("toggleLights");
    /*
    goToTV({
      activity: "toggleLights"
    });
    */
  });



};

var goToTV = function(options){
  pauseBoredom();
  $('.screen.active').removeClass('active');

  $('.monitor.active').removeClass('.active');
  if(boredomPercent < 33){
    $('#monitor1').addClass('active')
  } else if (boredomPercent < 66) {
    $('#monitor2').addClass('active')
  } else{
    $('#monitor3').addClass('active')

  }

  $('#tv').addClass('active');

  setTimeout(function(){
    startBoredom();

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
      $('#tv iframe').attr("src", "");
      goToPhone();
    });
  }, 1000)
};

var goToPhone = function(){
  $('#phone .active').removeClass('active');
  pauseBoredom();
  $('.screen.active').removeClass('active');
  $('#phone').addClass('active');

  setTimeout(function(){

    $('#phone .phone-down').addClass('active');

    setTimeout(function(){
      $('#phone .phone-down').removeClass('active');
      $('#phone .phone-up').addClass('active');
      $('#phone .iphone').addClass('active');
      sendNextMessage();
      $('#phone').one('click', function(){
        goToRoom();
      });
    }, 200)

  }, 200)
};
var goToCredits = function(){
  $('.screen.active').removeClass('active');
  $('#credits').addClass('active');
  pauseBoredom();
}

var goToFail = function(){
  pauseBoredom();
  stopActivity();
  $('.screen.active').removeClass('active');
  $('#fail').addClass('active');
};

$(function(){
  $('#intro').click(function(){
    goToPhone();
  });

  $('#creditsButton').click(function(){
    goToCredits();
    return false;
  })

});
