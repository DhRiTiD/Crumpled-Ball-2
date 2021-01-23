//NameSpaces
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//global variables
var engine, world;
var box1, box2, box3, bin, binI;
var ground, paper, paperI;

//preload function
function preload(){
	binI = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1200, 400);

	//add Engine to variable
	engine = Engine.create();
	//add engine to world
	world = engine.world;

	//create objects using their particular blu-prints
	paper = new Paper(150, 320, 25);
	box1 = new Bin(830, 330, 15, 180);
	box2 = new Bin(885, 380, 95, 15);
	box3 = new Bin(940, 330, 15, 180);
	ground = new Ground(600, 392, 1800, 15);

	bin = createSprite(880, 309);
	bin.addImage(binI);
	bin.scale = 0.45;
	World.add(world, bin);

	//run the engine
	Engine.run(engine);
  }

  function draw() {
  rectMode(CENTER);
  background("#ffffcc");
  Engine.update(engine);
  
  //display objects
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();

  textSize(16);
  fill("#404040");
  text("☻ Use Up, Right and Left Arrow keys for movement ☻", 20, 20);

  //display output
  drawSprites();
}

//function key presssed
function keyPressed(){
	if(keyCode === RIGHT_ARROW){
	  Body.applyForce(paper.body, paper.body.position,{x:30,y:-55});
	}
	if(keyCode === LEFT_ARROW){
		Body.applyForce(paper.body, paper.body.position,{x:-30,y:-55});
    }
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.body, paper.body.position,{x:0,y:-70});
    }	
}
/*
#DhRiTiD
#DD
*/