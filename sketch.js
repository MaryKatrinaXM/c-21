var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
var ball_options={
	isStatic:false,
	resitution:0.3,
	friction:0,
	density:1.2
}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
Matter.Bodies.circle(x,y,20,options);

	Engine.run(engine);
  
}
function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,20,20);
}

}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



