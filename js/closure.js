(function(){
  console.log("closure has loaded");

  function monkeyAstronaut(){

    function monkeyName(){
      var myName = "Captain Blastoff"
      return myName;
    }

    function spaceMission(){
      var date = new Date();
      var leaving = "I am leaving on a space mission at " + date;
      return leaving;
    }

    var greeting = monkeyName();
    var blastoff = spaceMission();

    var missionStatment = "hello, I am " + greeting + ".  " + blastoff + "!";

    return missionStatment;

  }

  var astronaut = monkeyAstronaut();
  console.log(astronaut);
})();