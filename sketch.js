const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

   engine = Engine.create();
   world = engine.world;

    ground = new Ground(290,790,960,20);

    for( var i = 0; i <= width; i = i + 80){
      divisions.push(new Division(i, height, divisionHeight/2, 10, divisionHeight));
  }
    for(var i = 40; i <= width; i = i + 50){
        plinkos.push(new Plinko(i, 75, 10));
    }
    for(var i = 15; i <= width; i = i + 50){
        plinkos.push(new Plinko(i, 175, 10));
    }
    for(var i = 5; i <= width; i = i + 50){
        plinkos.push(new Plinko(i, 250, 10));
    }
    for(var i = 0; i <= width; i = i + 50){
        plinkos.push(new Plinko(i, 325, 10));
    }

    Engine.run(engine);

}

function draw() {
  background(0,0,0);  
  ground.display();

  for(var i = 0; i < divisions.length; i++);{
      divisions[i].display();
  }
  for(var i = 0; i < plinkos.length; i++){
      plinkos[i].display();
  }
}