// Matter.js module aliases
var Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies;

// create a Matter.js engine
var engine = Engine.create(document.body);

var boxB = Bodies.rectangle(450, 50, 80, 80);


var poly = Bodies.polygon(400, 100, 10, 50);
var circle = Bodies.circle(400, 300, 30, {isStatic: true});

var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

World.add(engine.world, [
  Bodies.rectangle(200, 550, 40, 40),
  Bodies.rectangle(300, 550, 40, 40),
  Bodies.rectangle(400, 550, 40, 40),
  Bodies.rectangle(500, 550, 40, 40),
  Bodies.rectangle(600, 550, 40, 40),

  Bodies.rectangle(200, 520, 200, 20),
  Bodies.rectangle(400, 520, 200, 20),
  Bodies.rectangle(600, 520, 200, 20),


  Bodies.rectangle(450, 490, 40, 40),
  Bodies.rectangle(550, 490, 40, 40),
  Bodies.rectangle(250, 490, 40, 40),
  Bodies.rectangle(350, 490, 40, 40),

  Bodies.rectangle(300, 460, 200, 20),
  Bodies.rectangle(500, 460, 200, 20),

  circle,
  ground
  ]);

// run the engine
Engine.run(engine);
