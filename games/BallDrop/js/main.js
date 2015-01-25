var canvas = document.getElementsByTagName("canvas")[0];
canvas.style.width = '100%';
canvas.onclick = function (e) {
  var circle = Bodies.circle(e.x*((484/800)+1), e.y*((363/600)+1), 30);
  World.add(engine.world,[circle]);
};
