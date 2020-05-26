const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(800,height,300,20);
   

    box1 = new Box(700,320,50,70);
    box2 = new Box(920,320,50,70);
    pig1 = new Pig(810, 350);
    

    box3 = new Box(700,240,50,70);
    box4 = new Box(920,200,50,70);
    pig3 = new Pig(810, 220);

   

    box5 = new  Pig(810,160,50,70);
    box6 = new Box(920,250,50,70);
    box7 = new Box(700,200,50,70);
   bird = new Bird(200,250);

    
    slingshot = new SlingShot(bird.body,{x:200, y:250});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    

    box3.display();
    box4.display();
    pig3.display();
   

    box5.display();
    box6.display();
box7.display();
    bird.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
if(keyCode===32){
    SlingShot.attach(bird.body)
}

}