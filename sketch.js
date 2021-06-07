const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground1.jpg");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

   box1 = new Box(600, 30, 60, 60);
   box2 = new Box(600, 30, 60, 60);
   box3 = new Box(600, 30, 60, 60);
   box4 = new Box(600, 30, 60, 60);
   box5 = new Box(600, 30, 60, 60);
   box6 = new Box(600, 30, 60, 60);
   box7 = new Box(600, 30, 60, 60);
   box8 = new Box(600, 30, 60, 60);

   box9 = new Box(700, 30, 60, 60);
   box10 = new Box(700, 30, 60, 60);
   box11 = new Box(700, 30, 60, 60);
   box12 = new Box(700, 30, 60, 60);
   box13 = new Box(700, 30, 60, 60);
   box14 = new Box(700, 30, 60, 60);

   box15 = new Box(800, 30, 60, 60);
   box16 = new Box(800, 30, 60, 60);
   box17 = new Box(800, 30, 60, 60);
   box18 = new Box(800, 30, 60, 60);
   box19 = new Box(800, 30, 60, 60);

}

function draw() {
  background(bg);

  //console.log({x : mouseX, y : mouseY});

  Engine.update(engine);
  
  //ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();

  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();

  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){

  Body.setPosition(hero.body, {x : mouseX, y: mouseY});

}
