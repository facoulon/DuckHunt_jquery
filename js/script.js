$(document).ready(function(){

$("#musicFond").trigger('play')
// let myAudio = document.getElementsByTagName("audio")[0]
// myAudio.play();

// let bruitExplosion =document.getElementsByTagName("audio")[1]
var bruitExplosion =$("#explo");

// var battlefield = document.getElementsByClassName("fond")[0]
var battlefield = $("#fond");


// for (var i = 0; i < 10; i++) {
for (var i = 0; i < 10; i++) {
//   var duck = document.createElement("div");
var duck = $("<div>")
//   duck.style.width = "100px";
  $duck.css('width', '100px');
  // duck.style.height = "100px";
  $duck.css('height', '100px');
  // duck.style.position = "absolute";
  $duck.css('position', 'absolute');
  // duck.style.top = "400px";
  $duck.css('top', '400px');
  // duck.style.left = "500px"
  // duck.style.transition = "1s";
  // duck.style.backgroundImage = "url('missile.png')"
  // duck.style.backgroundSize = "contain";
  // duck.style.backgroundRepeat = "no-repeat"
// battlefield.appendChild(duck)
  battlefield.append(duck);
}


var x;
var y;
// var ducks = document.getElementsByTagName("div")
var ducks = $("div")

function move() {


  if (Math.random() < 0.25) {
    x = 90;
    y = 90;
  } else if (Math.random() < 0.5) {
    x = -90;
    y = 90;
  } else if (Math.random() < 0.75) {
    x = 90;
    y = -90;
  } else {
    x = 90;
    y = -90;
  }

  for (var j = 0; j < 10; j++) {
    var posTop = Math.random() * 80 + 10;
    ducks[j].style.top = posTop + "%";
    var posLeft = Math.random() * 80 + 10;
    ducks[j].style.left = posLeft + "%";
  }
}


var myVar = setInterval(move, 1000);
var killedDucks = [];

for (var l = 0; l < 10; l++) {
  ducks[l].addEventListener("click", function() {
    this.style.backgroundImage = "url('explosion.png')"
    bruitExplosion.play();
    killedDucks.push(this);
    setTimeout(function() {

      for (var m = 0; m < killedDucks.length; m++) {
        killedDucks[m].style.visibility = "hidden";
      }
    }, 1000);
  });
}








});
