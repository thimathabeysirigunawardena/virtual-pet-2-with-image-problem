//Create variables here

var dog,happyDog,database,foodS,foodStock


function preload()
{
  //load images here
  dogIMG=loadImage("doglmg.png")
  doghappyIMG=loadImage("doglmg1.png")
}

function setup() {
  createCanvas(500, 500);

  dog=createSprite(200,300)
  dog.addImage(dogIMG)
  dog,scale=0.6

foodStock=database.ref('Food');
foodStock.on("value",readStock);
  
}


function draw() {  

  drawSprites();
  //add styles here

}



