
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,dustbin,paperball;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  dustbin = new Dustbin(1200,650);
	ground = new Ground(width/2,670,width,20);
  paperball = new Paper(200,200,40);
  
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
  ground.display();
  dustbin.display();
  paperball.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-95})
  }
}

