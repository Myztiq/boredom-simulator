var smsWriter = new SmsWriter();
gameTimer = Date.now();
pausedTimer = 0;

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
    goToLightSwitch();
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

    $('#turnOffTV').off('.tvClick');
    $('#turnOffTV').on('click.tvClick', function(){
      stopActivity();
      $('#tv iframe').attr("src", "");
      goToPhone();
    });
  }, 1000);
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
      $('#phone').off('.leavePhone')
      sendNextMessage(function () {
        $('#phone').one('click.leavePhone', function(){
          goToRoom();
        });
      });
    }, 200)

  }, 200)
};

var goToCredits = function(){
  $('.screen.active').removeClass('active');
  $('#credits').addClass('active');
  if (gameTimer > 0 && pausedTimer > 0) {
    var playtime = Math.floor(((Date.now() - gameTimer) - pausedTimer)/1000);
    $('#credits').append("<div style='width: 200px; display: inline-block; margin-top: 30px; margin-left:5px'><h3 style='text-align:center; border: 2px solid white; text-decoration: none;'>Winning Points: "+ playtime +"</h3></div>");
  }
  pauseBoredom();
};

var goToFail = function(){
  alert(Date.now() - gameTimer +" - " + pausedTimer);
  var playtime = Math.floor(((Date.now() - gameTimer) - pausedTimer)/1000);
  pauseBoredom();
  stopActivity();
  $('.screen.active').removeClass('active');
  $('#fail').addClass('active');
  $('#fail').append("<h3>Winning Points: "+ playtime +"</h3>");
  setTimeout(function(){
    goToCredits();
  }, 5000);
};

var goToLightSwitch = function(options){
  startBoredom();
  $('.screen.active').removeClass('active');
  $('#lightSwitch').addClass('active');
  startActivity('toggleLights');

  $('#exitLightSwitch').off('.lightClick');
  $('#exitLightSwitch').on('click.lightClick', function(){
    stopActivity();
    goToPhone();
  });
};

$(function(){ // Makes this stuff happen on load
  $('#intro').click(function(){
    goToPhone();
  });

  $('#creditsButton').click(function(){
    goToCredits();
    return false;
  })

  $('#restartButton').click(function(){
    location.reload() //boom
  })

});
