var boredomPercent = 0;

var startActivity;
var stopActivity;
var updateBoredom;

var maxBoredom = 5;
var minBoredom = -5;


var activities = {
  callOfPizzaDuty: {
    strength: 3,
    length: 10000,
    hasDone: false
  }
};

$(function(){
  var boredomVelocity = 0;
  var activity = null;

  startActivity = function(name){
    if(boredomVelocity > 0){
      boredomVelocity = boredomVelocity / 2;
    }
    activity = activities[name];
    activity.start = new Date();
    activity.hasDone = true;
  };

  stopActivity = function(){
    if(activity){
      activity.strength--;
      if(boredomVelocity < 0){
        boredomVelocity = boredomVelocity / 2;
      }
    }
    activity = null;
  };

  updateBoredom = function(){
    boredomVelocity += .5;
    if(activity){
      // How long has it been since we started the activity?
      var activityDuration = new Date() - activity.start;
      var activityChange = (1 - activityDuration/activity.length) * activity.strength;
      if(activityChange > 0){
        boredomVelocity -= activityChange;
      }

    }
    if(boredomVelocity > maxBoredom){
      boredomVelocity = maxBoredom;
    }
    if(boredomVelocity < minBoredom){
      boredomVelocity = minBoredom;
    }
    boredomPercent += boredomVelocity;
    if(boredomPercent < 0){
      boredomPercent = 0;
    }
    $percent.css({width: boredomPercent+"%"});

    if(boredomPercent > 100){
      setTimeout(function(){
        if(boredomPercent > 100) {
          goToFail()
        }
      }, 2000)
    }
  };


  var $percent = $('.boredom-status .percent');
  setInterval(function(){
    updateBoredom()
  }, 1000);
})