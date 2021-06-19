
const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies; 
var engine, world;
var snow=[];
function preload(){
  bg=loadImage("snow1.jpg");
}



function setup() {
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create(); 
  world = engine.world;
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(bg);  
  Engine.update(engine);

  if(frameCount%10===0){
    snow.push(new Snow(random(1,1200),0));
  }
  for(var i=0; i<snow.length; i=i+1){
    snow[i].display();
  }
  drawSprites();
}