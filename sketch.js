const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,l,r;
var ball;

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(600,690,1200,20);
	l=new Ground(950,650,20,100);
	r=new Ground(1150,650,20,100);

	var options={
		isStatic:false,restitution:0.3,friction:0,density:1.2
	};
	ball=Bodies.circle(100,100,10,options);
	World.add(world,ball);
	Engine.run(engine);
	ellipseMode(RADIUS);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("red")
  ellipse(ball.position.x,ball.position.y,15)
  ground.display();
  l.display();
  r.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:20,y:-20});
	}
}