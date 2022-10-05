function setup() {
  createCanvas(1000,1000);
  

  angleMode(DEGREES);
  background(235, 176, 203);
  
 
  // How many times draw() runs every second?
//  frameRate(12);
 }
 
 function draw() {
strokeWeight(0);

  fill(237, 207, 130);
  triangle(0,1000,1000,1000,1000/2,0)
  fill(134, 186, 108);
  ellipse(1000/2,100, 350, 350);
  fill(108, 151, 186);
  ellipse(1000/2,100, 275, 275);
  fill(208, 176, 235);
  ellipse(1000/2,100, 150, 150);
  fill(227, 227, 216);
 rect(250,500,250,250);
 fill(130, 57, 57);
 rect(500,500,250,250);
 fill(55, 65, 115);
 rect(375,750,250,250);
  

 }
 