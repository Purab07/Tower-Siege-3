const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var speed;
var score = 0;
var backgroundImg;

function preload(){
    getbg();
    polygonImg = loadImage("polygon.png");
}

function setup(){
    createCanvas(900,600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(450,590,900,10,{isStatic:true})
    stack1 = new Ground(390,300,240,10);
    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);

    box9 = new Box(330,235,30,40);
    box10 = new Box(360,235,30,40);
    box11 = new Box(390,235,30,40);
    box12 = new Box(420,235,30,40);
    box13 = new Box(450,235,30,40);

    box14 = new Box(360,195,30,40);
    box15 = new Box(390,195,30,40);
    box16 = new Box(420,195,30,40);

    box17 = new Box(390,155,30,40);


    ball = Bodies.circle(50,200,20);
    World.add(world,ball);
    slingshot = new Slingshot(this.ball,{x:100,y:200})
    
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
    Engine.update(engine);
    ground.display();
    stack1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    slingshot.display();
    imageMode(CENTER);
    image(polygonImg,ball.position.x,ball.position.y,40,40)
    keypressed();
    text("SCORE: "+score,750,40);
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box9.score();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keypressed(){
    if (keyCode === 32){
        slingshot.attach(this.polygon)
    }
}

async function getbg(){
    var bg;
    var response = await fetch("https://worldtimeapi.org/api/timezone/America/Los_Angeles");
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    console.log(dateTime);
    console.log(responseJSON);
    var hour = dateTime.slice(11,13);

    if(hour>= 06 && hour <= 18){
        bg = "light background.jpg";
        console.log(hour);
    }
    else{
        bg = "dark background.webp";
    }

    backgroundImg = loadImage(bg);
}