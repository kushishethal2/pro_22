const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball,con;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		restitution:0.6
	}

	ball = Bodies.circle(600,150,15,ball_options);
	World.add(world,ball);

	con = Matter.Constraint.create({
		pointA:{x:200,y:100},
		bodyB:ball,
		pointB:{x:0,y:0},
		length:150,
		stiffness:0.1
	});

	World.add(world,con);

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(200,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  ellipse(ball.position.x,ball.position.y,15);

  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  pop();

}

//Write keyPressed function and apply force on pressing up_arrow key on the ball.

function keyPressed()
{
	if(keyCode == UP_ARROW)
	{
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
	}
}
