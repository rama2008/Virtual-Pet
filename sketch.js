var dog 
var happyDog
var database
var foodS
var foodStock

function preload()
{
//  dog = loadImage ("dogImg.png/image");
  //happyDog = loadImage ("dogImg1.png/image");
}

function setup() {
	createCanvas(500, 500);  

}

function draw() {  
  background (46,139,86)

  if(keyWentDown(UP-ARROW)) {
    writeStock(foods);
    dog.addImage(dogHappyp);
  }
  drawSprites();
  
  textSize = 20;
  fill(white);
  stroke (white);
  text = "Press UP-ARROW key To Feed Drago Milk"
}

 function database()
{
  foodStock = database.ref("food");
  foodStock.on("value",readStroke);
}

function readStroke(data) {
  foods=data.val();
  }

function writesStock (x) {

  
  database.ref('/').update ({
    food:x
  
  })
  
}