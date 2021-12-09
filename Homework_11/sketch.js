//colors: yellow #FFAB3D, orange #FF5C3D, light green #BCBFA3, light blue #9CD3D9, medium blue #6AA6A6, dark blue #1E4359, darkest #0D1F26
//character variables
var cX = 250;
var cY = 300;

// key codes for keyboard letters
var w = 87;
var a = 65;
var s = 83;
var d = 68;

//flying shape 1
var s1X = 84;
var s1Y = 100;
var s1XMove;
var s1XMove;

//flying shape 2
var s2X = 168;
var s2Y = 200;
var s2XMove;
var s2XMove;

//flying shape 3
var s3X = 252;
var s3Y = 300;
var s3XMove;
var s3XMove;

//flying shape 4
var s4X = 336;
var s4Y = 400;
var s4XMove;
var s4XMove;

//flying shape 5
var s5X = 420;
var s5Y = 500;
var s5XMove;
var s5XMove;

//Shape for mouse
var mouseShapeX;
var mouseShapeY;

function setup()
{
  createCanvas(500,600);
  //random speeds for flying shapes
  //might be too fast for actual game
  s1XMove = Math.floor(Math.random() * (Math.floor(Math.random() * 12)) +1);
  s1YMove = Math.floor(Math.random() * (Math.floor(Math.random() * 15)) +1);
  s2XMove = Math.floor(Math.random() * (Math.floor(Math.random() * 16)) +1);
  s2YMove = Math.floor(Math.random() * (Math.floor(Math.random() * 9)) +1);
  s3XMove = Math.floor(Math.random() * (Math.floor(Math.random() * 12)) +1);
  s3YMove = Math.floor(Math.random() * (Math.floor(Math.random() * 13)) +1);
  s4XMove = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) +1);
  s4YMove = Math.floor(Math.random() * (Math.floor(Math.random() * 13)) +1);
  s5XMove = Math.floor(Math.random() * (Math.floor(Math.random() * 15)) +1);
  s5YMove = Math.floor(Math.random() * (Math.floor(Math.random() * 9)) +1);

}
function draw()
{
  background(188, 191, 163);

    //borders
    fill('#0D1F26');
    rect(0,0,width,15); //top
    rect(0,0,15,height);//left
    rect(0,height-15,width,15);//bottom
    rect(width-15,0,15,height-15);//right

    //exit
    noStroke();
    fill('#BCBFA3');
    rect(width-66,height-15,66,15);//exit opening
    fill('#0D1F26');
    textSize(20);
    text('EXIT',440,height);

    //character
    stroke(3);
    fill('#FF5C3D');
    circle(cX,cY,30);
    //character controls
    if(keyIsDown(w)) {
      cY -= 8;
    }
    if(keyIsDown(s)) {
      cY += 8;
    }
    if(keyIsDown(d)) {
      cX += 8;
    }
    if(keyIsDown(a)) {
      cX -= 8;
    }

    if(cX > width-66  && cY > height-15)
    {
        fill('#FF5C3D');
        textSize(40);
        text("You Won!", 160, 200);
    }
    //mouse click shape
    fill('#FFAB3D');
    circle(mouseShapeX,mouseShapeY,25);

    //flying cirlces
    fill('#6AA6A6');
    circle(s1X,s1Y,20);
    s1X += s1XMove;
    s1Y += s1YMove;
    if(s1X > width)
    {
        s1X = 0;
    }
    else if(s1X < 0)
    {
        s1X = width;
    }
    if(s1Y > height)
    {
        s1Y = 0;
    }
    else if(s1Y < 0)
    {
        s1Y = height;
    }
    if (s1X > 400 && s1Y > 500) {
      s1XMove *= -1;
      s1YMove *= -1;
    }
    fill('#9CD3D9');
    circle(s2X,s2Y,70);
    s2X += s2XMove;
    s2Y += s2YMove;
    if(s2X > width)
    {
        s2X = 0;
    }
    else if(s2X < 0)
    {
        s2X = width;
    }
    if(s2Y > height)
    {
        s2Y = 0;
    }
    else if(s2Y < 0)
    {
        s2Y = height;
    }
    if (s2X < 100 && s2Y > 500) {
      s2XMove *= -1;
      s2YMove *= -1;
    }
    fill('#6AA6A6');
    circle(s3X,s3Y,40);
    s3X += s3XMove;
    s3Y += s3YMove;
    if(s3X > width)
    {
        s3X = 0;
    }
    else if(s3X < 0)
    {
        s3X = width;
    }
    if(s3Y > height)
    {
        s3Y = 0;
    }
    else if(s3Y < 0)
    {
        s3Y = height;
    }
    if (s3X < 200 && s3Y > 400) {
      s3XMove *= -1;
      s3YMove *= -1;
    }
    fill('#9CD3D9');
    circle(s4X,s4Y,10);
    s4X += s4XMove;
    s4Y += s4YMove;
    if(s4X > width)
    {
        s4X = 0;
    }
    else if(s4X < 0)
    {
        s4X = width;
    }
    if(s4Y > height)
    {
        s4Y = 0;
    }
    else if(s4Y < 0)
    {
        s4Y = height;
    }
    fill('#1E4359');
    circle(s5X,s5Y,60);
    s5X += s5XMove;
    s5Y += s5YMove;
    if(s5X > width)
    {
        s5X = 0;
    }
    else if(s5X < 0)
    {
        s5X = width;
    }
    if(s5Y > height)
    {
        s5Y = 0;
    }
    else if(s5Y < 0)
    {
        s5Y = height;
    }
}
function mouseClicked()
{
  mouseShapeX = mouseX;
  mouseShapeY = mouseY;
}
