let bunnyList = [];

let gravity = 0.07;

let PaddleY = windowWidth / 3 - 80;

function preload() {

  backgroundImage = loadImage("landscape.jpg");
  bunny = loadImage("bunny.png");
}



function setup() {
    createCanvas(windowWidth, windowWidth / 3);
   
    createBunnies();
  }
  
function draw() {
    background("brown");
    image(backgroundImage, 0, 0, windowWidth, windowWidth / 3);
    createPaddle();
    bunnyList.forEach(function(bunnyObject, index) {
      bunnyObject.move();

      if (bunnyObject.x > windowWidth){
            bunnyList.splice(index, 1);
      }
    });
  }

function createPaddle(){
  fill("#ffbf80");
  rect(mouseX, paddleY, windowWidth/17, windowWidth/40, 20, 20, 5, 5);
}



function createBunnies() {
  bunnyObject = new Bunny();
  bunnyList.unshift(bunnyObject);
  console.log(bunnyList);
  setTimeout(createBunnies, 2000);
}


class Bunny {
  constructor() {
    this.x = 0;
    this.y = windowWidth / 6.5;
    this.width = 50;
    this.height = 50;
    this.Xspeed = random(1,4);
    this.Yspeed = -5;
  }
  
  move() {
    this.Yspeed =this.Yspeed + gravity;

if(this.y + this.height > paddleY) {
  this.Yspeed = -this.Yspeed;
}
    
    this.y = this.y + this.Yspeed;
    this.x = this.x + this.Xspeed;
    image(bunny, this.x, this.y, this.width, this.height);
  }
}