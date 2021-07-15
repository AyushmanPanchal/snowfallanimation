const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var backGround;
var snowman;
var snowImg;
var engine

function preload(){
  backGround = loadImage("snow2.jpg");
  snowImg = loadImage("snow4.webp");
  
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  if(frameCount%90 === 0){
    snow = new Snow(random(width/2- 10, width/2+10), 10, 10); 

  }
  
}

function draw() {
  background(backGround);
  Engine.update(engine);
  snow.display(); 
  drawSprites();
}