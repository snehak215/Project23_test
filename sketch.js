const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine, world
var canvas

var player_base
var computer_base
var player1
var player2
var tower
var my_obj
var pos
function preload(){
  base1_img=loadImage("./assets/base1.png")
  base2_img=loadImage("./assets/base2.png")
  player_img=loadImage("./assets/player.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight)

  engine = Engine.create()
  world = engine.world
  pos=my_obj.position

  player_base=new PlayerBase(300, random(450,height-300), 180, 50)
  computer_base=new ComputerBase(windowWidth-300, player_base.body.position.y, 180, 50)
  player1=new Player(285,player_base.body.position.y-153,50,180)
  player2=new Player(285,computer_base.body.position.y-153,50,180)

 }

function draw() {

  background(180)
  fill("#FFFF")
  textAlign("center")
  textSize(40)
  text("EPIC ARCHERY", width / 2, 100)

  player1.display()
  player_base.display()
  player2.display()
  image(image1,pos.x,pos.y,30,30)
  Engine.update(engine)
}
