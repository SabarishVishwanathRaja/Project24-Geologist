
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(400,350,120,40);

	stone = new Stone(220,600,100,100);

	ground = new Ground(400,height,800,20);

	rubber = new Rubber(500,600);

	sand1 = new Sand(70,600);
	sand2 = new Sand(90,600);
	sand3 = new Sand(100,600);
	sand4 = new Sand(410,600);
	sand5 = new Sand(420,600);
	sand6 = new Sand(430,600);
	sand7 = new Sand(450,600);
	sand8 = new Sand(630,600);
	sand9 = new Sand(600,600);
	sand10 = new Sand(620,600);

	iron = new Iron(300,600,110,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  hammer.display();
  stone.display();
  ground.display();
  rubber.display();
  iron.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
 
}



