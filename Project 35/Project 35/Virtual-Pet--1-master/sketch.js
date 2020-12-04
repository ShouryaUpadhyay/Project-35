//Create variables here
var dog,dogHappy,food ;
var   database,foodS,foodStock ;
function preload()
{
  //load images here
  dogHappy = loadImage('images/dogImg1.png')
}

function setup() {
	createCanvas(500,500);
dog = createSprite(250,250,20,20)  
}


function draw() {  
  background(46, 139, 87)
if(keyWentDown(UP_ARROW)){
writeStok(foodS);
dog.addImage(dogHappy)

}
  drawSprites();
  //add styles here

foodStock = database.ref('Food')
foodStock.on("value",readStock)
}

function readStock(data){
foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}