// //different data types in a variable
// // variables are data structures used to store different types of types
// //string
// var a = "apple";
// console.log(a);//apple

// //number
// var b = 34;
// console.log(b);//34

// //boollean
// var c = true;
// console.log(c);//true

// //undefined
// var d;
// console.log(d);//undefined

// //blank
// d = null;
// console.log(d);//null

// //arrays are data structure to store multiple values at a time

// //arr storing similar kind of data
//  arr1 = ["apple","mango","banana"];
//  console.log(arr1);

//  arr2 = [23,33,45]
//  console.log(arr2);

// //arr storing different kind of data
//  arr3 = ["Annika",12,"Coding-class","pink",true];
//  console.log(arr3);
//  console.log(arr3[3]);

//  //arr storing different kind of arrays
//  arr4 = [ [1,2], [1,4,54], [379,"apple"] ,[true,false]];
//  console.log(arr4);
//  console.log(arr4[1][1]);
 
//  arr4.push("annika");
//  console.log(arr4);
 
//  arr4.pop();
//  console.log(arr4);

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gamstate="onsling"

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if(gamstate!=="launched"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    slingshot.fly();
    gamstate="launched"
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}