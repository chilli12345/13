
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dayImage,boyImage,boy;
var stone1;
function preload()
{
	dayImage=loadImage("1.jpg");
	boyImage=loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1 = new Mangoes(600,400,50);
	mango2 = new Mangoes(550,400,50);
	mango3 = new Mangoes(520,450,50);
	mango4 = new Mangoes(620,350,50);
	mango5 = new Mangoes(670,350,50);
	mango6 = new Mangoes(500,400,50);
	mango7 = new Mangoes(720,400,50);
	mango8 = new Mangoes(550,350,50);
	mango9 = new Mangoes(700,450,50);
	mango10 = new Mangoes(640,450,50);
	mango11 = new Mangoes(680,400,50);
	ground = new Ground(400,690,800,20);
	tree = new Tree(600,500,400,400);
	stone1 = new Stone(300,300,50);
	 
	launcher = new Launcher(stone1.body,{x:40,y:610});
	boy = createSprite(100,635,20,20);
	boy.addImage(boyImage);
	boy.scale=0.1;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  //background(dayImage);
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  stone1.display();
  
  drawSprites(); 
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    boy.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition({x:40,y:620});
		launcher.attach(stone1.body);
	}
}


