//color pallette: hair '#A36133', brows '#8C4A32', light skin '#F2C1B6', dark skin '#DB9C9A', blue '#5D8AA6', light orange '#BF7E45', orange '#A6411C', dark red '#8C311C'

function setup()
{
  createCanvas(500,600);
}
function draw()
{
  background(93, 138, 166);

//behind hair

fill('#995C43');
rect(35,220,430,250);

//neck
fill('#F2C1B6')
rect(166,432,168,168);

//head
noStroke();
fill('#F2C1B6');
ellipse(250,250,400,400);

//shoulders
fill('#8C311C');
rect(50,500,400,100,50,50,0,0); //(positionx,positiony,w,h,topleftradius,toprightradius,bottumrightr,bottumleftr)

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
ellipse(330, 250, 40, 40); //pupil
fill(255);
ellipse(340,240,20,20,);//catchlight

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
arc(170,205,100,50,3.4,6);

//right eyebrow
stroke('#8C4A32');
strokeWeight(10);
noFill();
arc(330,205,100,50,3.5,6);

//hair
noStroke();
fill('#995C43');
arc(250,250,435,430,4,6.2,CHORD); //rightbangs
arc(250,250,435,430,3,5,CHORD); //leftbangs
rect(38,220,60,200); //frontleft
rect(402,205,60,200); //frontright




}
