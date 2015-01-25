var smsWriter = new SmsWriter();
var gameTimer = Date.now();
var pausedTimer = 0;
var playtime = 0

var sounds = new AudioPlayer();
sounds.loadSounds();

videoList = [
  "25gMNtEYlu0",
  "M2urdlfmrpE",
  "KbumV5bQTuM",
  "z5Otla5157c",
  "JQwJVfVAPLQ",
  "aKiYHdtff2c",
  "YwOp8WEqlRI",
  "QoHJ3VZM8XU",
  "0bgmcRcImhM",
  "_n14MBAd3R8",
  "HrN-GPYlcbQ",
  "SW-BU6keEUw",
  "RrG4JnrN5GA",
  "HYkjLUMx19I",
  "Y3Jja-eBsk8"
];

var youTubeSelection = function() {
  var selectedVideo = videoList.splice(Math.floor(Math.random()*videoList.length), 1);
  var selectedUrl = "//www.youtube.com/embed/"+ selectedVideo[0] +"?autoplay=1";
  if (videoList.length === 0) {
    $("#watchYouTube").remove();
  }
  return selectedUrl;
};

var goToRoom = function(){
  startBoredom();

  function highlightClickables(blinks) {
    for (var i = 0; i < blinks; i++) {
      setTimeout( function() {
        $('.clickable').addClass('highlight');
        setTimeout ( function() {
          $('.clickable').removeClass('highlight');
        }, 1000);
      }, i*1000*2);
    }
  }

  setTimeout( function() {
    // Give user hints about what objects are clickable.
    highlightClickables(3);
  }, 5000);

  $('.screen.active').removeClass('active');
  $('#room').addClass('active');

  $('.nightstand-books').off('mouseenter');
  $('.nightstand-books').on('mouseenter', function(){
    sounds.play('hovr')
  });


  $('.tv-screen').off('mouseenter');
  $('.tv-screen').on('mouseenter', function(){
    sounds.play('hovr')
  });


  $('.btn').off('.room');

  $('#watchYouTube').on('click.room', function(){
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
      iframe: '/games/ExcitementSimulator',
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
  sounds.play('gameSelect');
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
      sounds.play('tvOff');
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
  if (gameTimer <= 0 || pausedTimer <= 0) {
    $('.score').removeClass('active')
  }
  pauseBoredom();
};

var goToFail = function(){
  pauseBoredom();
  stopActivity();
  sounds.play("snoring");
  $('.screen.active').removeClass('active');
  $('#fail').addClass('active');

  playtime = Math.floor(((Date.now() - gameTimer) - pausedTimer)/1000);
  $('.scoreText').text("Boredom Points: " + playtime)
  $('.score').addClass('active')

  setTimeout(function(){
    goToCredits();
  }, 5000);
};

var goToLightSwitch = function(){
  startBoredom();
  $('.screen.active').removeClass('active');
  $('#lightSwitch').addClass('active');
  startActivity('toggleLights');

  $("#switch").off('click');
  $("#switch").on('click', function(){
    console.log('Click!?')
    $('#room-dark').toggleClass('active');
    $('#phone').toggleClass('dark');

    if($('#phone').hasClass('dark')){
      $('#switch').attr('src', '/assets/images/LIGHT_SWITCH.png')
      sounds.play("lightOff");
    }else{
      $('#switch').attr('src', '/assets/images/LIGHT_SWITCH_2.png')
      sounds.play("lightOn");
    }
  })

  $('#exitLightSwitch').off('.lightClick');
  $('#exitLightSwitch').on('click.lightClick', function(){
    stopActivity();
    goToPhone();
  });
};

var goToWin = function(){
  pauseBoredom();
  $('.screen.active').removeClass('active');
  $('#win').addClass('active');

  for(var i=1; i<17; i++){
    (function(i){
      setTimeout(function(){
        $('#win img.inactive').attr('src', '/assets/images/win/'+i+'.png');
        $('#win img.active');

        $('#win img').toggleClass('active inactive');
        if(i == 16){
          sounds.play('win');
        }
      }, i * 1500)
    })(i)
  }


}

$(function(){ // Makes this stuff happen on load

  setTimeout( function() {
    $('.startButton').addClass('active')
  }, 1000);

  $('#intro').click(function(){
    // Clicking anywhere on page works, not just start button.
    goToPhone();

    sounds.play('ambient')
    setInterval(function(){
      sounds.play('ambient')
    }, 60 * 1000 * 2 + 500)

    setTimeout(function(){
      if(boredomPercent < 100){
        goToWin();
      }
    }, 1000 * 60 * 10)
  });

  $('#creditsButton').click(function(){
    goToCredits();
    return false;
  })

  $('#restartButton').click(function(){
    location.reload() //boom
  })

});
