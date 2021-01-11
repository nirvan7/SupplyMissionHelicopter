//the package is moving along with the helicopter even when it is on the ground
//the package is bouncing
//the package is not dropping if we move the helicopter first(and it is flinging)


//Declaring Variables
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
//declaring constant variables
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//loading the images
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	//creating the canvas
	createCanvas(800, 700);
	rectMode(CENTER);
	
    //creating the sprite,adding the image and putting the scale
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

 //creating the sprite,adding the image and putting the scale
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//creating the sprite and assigning the color
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

  //creating the engine and world
	engine = Engine.create();
	world = engine.world;

	//creating the package body and adding the package body to the world
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    //giving x and y positions to the box
 	boxPosition=width/2-100
 	boxY=610;

    //creating the box sprite,adding shape color and adding them to the world
 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

    //running the engine
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  if (keyDown("right") && helicopterSprite.x<675)
  {
	  helicopterSprite.x=helicopterSprite.x+10;
	  packageBody.position.x=helicopterSprite.x;
	  console.log ("step right");
  }
	 
  if (keyDown("left") && helicopterSprite.x>125)
  {
	  helicopterSprite.x=helicopterSprite.x-10;
	  packageBody.position.x=helicopterSprite.x;
	  console.log ("step left");
   }
  droppackage(); 

  drawSprites();
   
}

function droppackage(){
	
   if (keyDown("down"))
   {
	Matter.Body.setStatic(packageBody, false);
	console.log ("step down");
	//packageSprite.collide(boxBase);
	//Matter.Body.setStatic(packageBody,true)
    }
 //if (packageSprite.isTouching(boxBase))
 //{
//	 
//	   console.log ("step touch");
//}  
}