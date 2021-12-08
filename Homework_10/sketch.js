//color pallette: hair '#A36133', brows '#8C4A32', light skin '#F2C1B6', dark skin '#DB9C9A', blue '#5D8AA6', light orange '#BF7E45', orange '#A6411C', dark red '#8C311C'
var slideShoulders = 50;
var moveEyeX = 330;
var moveEyeY = 250;
var moveEyeCatchX = 320;
var moveEyeCatchY = 240;
var moveHead = 250;
var moveRightEyebrow = 205;
var moveLeftEyebrow = 205;
var titleChange = 26;
var movement1;
var movement2 = 0.5;
var movement3 = 1;
var movement4 = 1;
var movement5 = 1;
var size1 = 1;



function setup()
{
  createCanvas(500,600);
  movement1 = Math.floor(Math.random() * 10) + 1;
}
function draw()
{
  background(93, 138, 166);

//Title
fill('#8C311C');
textSize(titleChange);
if(titleChange >=31 || titleChange <= 21) {
  size1 *= -1;
}
titleChange += size1;
textAlign(CENTER)
text('Morgan the Cartoon',250,30);

//behind hair

fill('#995C43');
rect(35,220,430,250);

//neck
fill('#F2C1B6')
rect(166,400,168,168);

//head
noStroke();
fill('#F2C1B6');
ellipse(moveHead,250,400,400);
if(moveHead >=262 || moveHead <=238) {
  movement3 *= -1;
}
moveHead += movement3;
//shoulders
fill('#8C311C');
rect(slideShoulders,500,400,100,50,50,0,0); //(positionx,positiony,w,h,topleftradius,toprightradius,bottumrightr,bottumleftr)
if(slideShoulders >= 60 || slideShoulders <=40) {
movement1 *= -1;
}
slideShoulders += movement1;

//collar/bottum of neck
fill('#F2C1B6');
ellipse(250,500,168,80); //that looks gooood

//right eye
ellipseMode(RADIUS);
noStroke();
fill(255);
ellipse(330, 250, 45, 45); //outereye
ellipseMode(CENTER);
noStroke();
fill('#5D8AA6');
ellipse(moveEyeX, moveEyeY, 40, 40); //pupil
if(moveEyeX >= 345 || moveEyeX <=315 || moveEyeY >= 265 || moveEyeY <=235) {
movement2 *= -1;
}
moveEyeX += movement2;
moveEyeY += movement2;
fill(255);
ellipse(moveEyeCatchX,moveEyeCatchY,20,20,);//catchlight
if(moveEyeCatchX >= 345 || moveEyeCatchX <=315 || moveEyeCatchY >= 265 || moveEyeCatchY <=235) {
movement2 *= -1;
}
moveEyeCatchX += movement2;
moveEyeCatchY += movement2;
//left eye
fill('#DB9C9A');
ellipse(170, 250, 90, 90); //eyelid
strokeWeight(3);
stroke('#000000')
line(125,250,215,250); //crease

//nose
noStroke();
fill('#DB9C9A');
triangle(250,340,250,280,270,330);

//mouth
strokeWeight(4);
stroke('#A6411C');
fill('#000000');
arc(250,360,150,100, 6.28, 3.14, CHORD); //deals in radians??? why?

//left eyebrow
stroke('#8C4A32');
strokeWeight(10);
noFill();
arc(170,moveLeftEyebrow,100,50,3.4,6);
if(moveLeftEyebrow >=210 || moveLeftEyebrow <=200) {
  movement4 *= -1;
}
moveLeftEyebrow += movement4;

//right eyebrow
stroke('#8C4A32');
strokeWeight(10);
noFill();
arc(330,moveRightEyebrow,100,50,3.5,6);
if(moveRightEyebrow >=210 || moveRightEyebrow <=200) {
  movement5 *= -1;
}
moveRightEyebrow += movement5;

//hair
noStroke();
fill('#995C43');
arc(250,250,435,430,4,6.2,CHORD); //rightbangs
arc(250,250,435,430,3,5,CHORD); //leftbangs
rect(38,220,60,200); //frontleft
rect(402,205,60,200); //frontright

//signature

fill('#000000');
textSize(20);
textAlign(RIGHT)
text('Morgan Schulte',450,590);




}
