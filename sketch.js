const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var paper,bin,sling;

var gameState = "play";

function setup() {
  
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  paper = new Paper(150,325);

  bin = new Bin(750,350,50,100);

  sling = new Slingshot(paper.body,{x : 175, y : 325})

}

function draw() {

  background(67,84,122.2);

  Engine.update(engine);

  paper.display();

  bin.display();
  
  sling.display();

  bin.scale = 1.3;

  text(mouseX + ":" + mouseY, 20,20);

  

}

function mouseReleased(){
  sling.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
       sling.attach(paper.body);
       gameState = "play";
  }
}

function mouseDragged(){

  if (gameState == "play"){
      Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
  }
}