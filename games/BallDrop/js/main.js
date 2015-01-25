var canvas = document.getElementsByTagName("canvas")[0];
canvas.style.width = '100%';
canvas.onclick = function (e) {
  // var circle = Bodies.circle(e.x*((713/800)+1), e.y*((535/600)+1), 30);
  var circle = Bodies.circle(e.x, e.y, 30);
  World.add(engine.world,[circle]);
};
