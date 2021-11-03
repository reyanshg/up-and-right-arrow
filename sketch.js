// Namespacing 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine;
var world;

var leftWall, rightWall, topWall, bottomWall, ground_options;
var ball, ball_options;
var ball2;

var upButton, rightButton;

function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  
  bottomWall = new Ground(200, 390, 400, 20);
  topWall = new Ground(200, 10, 400, 20);
  leftWall = new Ground(10, 200, 20, 400);
  rightWall = new Ground(390, 200, 20, 400);

  upButton = createImg("up.png");
  upButton.size(50,50);
  upButton.position(50,50);
  upButton.mouseClicked(vForce);

  rightButton = createImg("right.png");
  rightButton.size(50,50);
  rightButton.position(150,50);
  rightButton.mouseClicked(hForce);




  ball_options = {
    restitution: 0.8,
    frictionAir: 0.03
  }

  ball = Bodies.circle(200,100, 20, ball_options);
  World.add(world, ball);

  ball2 = Bodies.circle(300,100, 15, ball_options);
  World.add(world, ball2);

  rectMode(CENTER);
  ellipseMode(RADIUS);

  

}

function draw() 
{
  background(51);
  Engine.update(engine);

  bottomWall.display();
  topWall.display();

  ellipse(ball.position.x, ball.position.y, 20, 20);

  ellipse(ball2.position.x, ball2.position.y, 15, 15);
  leftWall.display();
  rightWall.display();
}

function hForce(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x: 0.05, y:0});
}


function vForce(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x: 0, y:-0.05});
}

