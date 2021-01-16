
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  
}
function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,400,70);
	ground = new Ground(600,680,1200,20);
	dustbin1 = new Dustbin(850,580);
	
	//dustbin2 = new Dustbin(925,635,15,70);
	//dustbin3 = new Dustbin(1075,635,15,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  //keypress();
  paper.display();
  ground.display();
  dustbin1.display();
 
  
  //dustbin2.display();
  //dustbin3.display();
  //drawSprites();
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:135,y:-195})
	}
}