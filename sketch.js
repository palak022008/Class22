const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object;
var ground,ball;

function setup(){
    var canvas = createCanvas(400,400);
   engine = Engine.create();
    world = engine.world;

    var ground_options={
        isStatic : true
    }
    ground=Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);


    var ball_options={
        isStatic : false,
        restitution: 1.0
    }
ball = Bodies.rectangle(200,100,20,20,ball_options);
World.add(world,ball);

//console.log(object);

    
}

function draw(){
    background(0);
    Engine.update(engine);
    //rectMODE(CENTER);
    rect(ground.position.x,ground.position.y,600,200);
    rect( ball.position.x,ball.position.y,20,20);
    
}
