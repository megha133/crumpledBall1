const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var object;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
    var object_options ={
        isStatic: true
    }

    object= Bodies.rectangle(200,700,400,20,object_options);
    World.add(world,object);
    
    var ball_option ={
        restitution:0.5
    }
    ball=Bodies.circle(300,100,50,ball_option);
    World.add(world,ball);
   


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    ellipseMode(RADIUS)
    ellipse(ball.position.x,ball.position.y,50,50);
}
