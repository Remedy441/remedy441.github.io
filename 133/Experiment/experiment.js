var mySceneTLX;
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;

var t1;
var sign;

var a;
var b;
var c;
var d;

var Xdefault;
var Xstep;
var Xmin;
var Xmax;

var centerXM;
var centerYM;
var mirrorL;

var perMX;
var perMY;
var perL;
var per;
var perMXF;
var perMYF;




var myRuler;
var myBackp;

var first;
var angle;



var myBack;
var geometry;
var material;
//update
var theta;
var dtheta;
var time;
var flag;

//for making matchsticks var

var geometry1;
var geometry2;


var line1;
var line2;
var mirror;
var mirrorb;






//for checking answer is correct or not
var answer;
var test;
var geometryA;
var circleA1;
var circleA2;
var circleA3;


//changing test
var count;
var totalTest;

var helpContent;
function initialiseHelp(){
  helpContent="<h2>Simple Reflection at mirror help</h2>";
  helpContent=helpContent+"<p>You can drag the slider in input panel or drag the mirror to change the angle of mirror.</p>";
  helpContent=helpContent+"<p>If reflected light will fall on object A or B then the object will glow</p>"
  helpContent=helpContent+"<p>You can learn how angle of reflection changes by changing angle of mirror by seeing the animation.To start animation click on start</p>"
  helpContent=helpContent+"<p>Black line is the perpendicular to mirror.</p>"
  helpContent=helpContent+"<h2>Happy learning</h2>"
    //helpContent +=n 90 degrees</p><h3>Obtuse</h3><p>ees</p><h3>Right Angle</h3><p>Angle is said to be if it is equal to 90 degrees</p><h3>Strainght</h3><p>Angle is said to be if it is equal to 180 degrees</p>";
  PIEupdateHelp(helpContent);
}


var infoContent;
function initialiseInfo(){
  infoContent ="<h2>Simple reflection at mirror concepts</h2>";
  infoContent =infoContent+"<p>For light rays striking a plane mirror, the angle of reflection equals the angle of incidence. The angle of incidence is the angle between the incident ray and the surface normal (an imaginary line perpendicular to the surface). Therefore the angle of reflection is the angle between the reflected ray and the normal</p>";
  //infoContent =infoContent+"<p>When a pendulum is displaced sideways from its resting, equilibrium position, it is subject to a restoring force due to gravity that will accelerate it back toward the equilibrium position.</p>";
  //nfoContent =infoContent+"<p>When released, the restoring force combined with the pendulum's mass causes it to oscillate about the equilibrium position, swinging back and forth.</p>"
  //infoContent =infoContent+"<p>Position M shows pendulum's mean position. When pendulum is released after taking one side it begins to move to and fro.</p>";
  //infoContent =infoContent+"<p>A and B positions are extreme position of pendulum. Pendulum is said to have completed one oscilation when it travels from one extreme to other extreme and back to that extreme.</p>"
  PIEupdateInfo(infoContent);

}
function findAngle(p0x,p0y,p1x,p1y,p2x,p2y) {
  var a = Math.pow(p1x-p0x,2) + Math.pow(p1y-p0y,2),
      b = Math.pow(p1x-p2x,2) + Math.pow(p1y-p2y,2),
      c = Math.pow(p2x-p0x,2) + Math.pow(p2y-p0y,2);
  return Math.acos( (a+b-c) / Math.sqrt(4*a*b) );
}

function initialiseSceneVariables() {
  /* Initialise Scene Variables */
  mySceneTLX = 0.0;
  mySceneTLY = 3.0;
  mySceneBRX = 4.0;
  mySceneBRY = 0.0;
  mySceneW   = (mySceneBRX - mySceneTLX);
  mySceneH   = (mySceneTLY - mySceneBRY);
  myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
  myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
  Xdefault=0;
  Xstep=0.1;
  Xmin=-10;
  Xmax=10;

  centerXM=myCenterX+1;
  centerYM=myCenterY+0.1;
  mirrorL=2;

  perL=0.5;
  perMX=centerXM-perL;
  perMY=centerYM;


  t1=0;
  sign=1;

  changeAng=0;




}






function drawMatchStick(x,y,x2,y2,col,width){
  var material;
  material = new THREE.LineBasicMaterial({color: col,  linewidth: width});

  geometry1 = new THREE.Geometry();
  geometry1.vertices.push(
    new THREE.Vector3( x, y, -0.1),
    new THREE.Vector3( x2,y2, -0.1)
  );
  line = new THREE.Line( geometry1, material );





return line;

}


function textBox(text){

  var bitmap = document.createElement('canvas');
  var g = bitmap.getContext('2d');
  bitmap.width = 1024;
  bitmap.height = 1024;
  g.fillStyle = '#FDF7E5';
  g.fillRect(0,0,bitmap.width,bitmap.height);
  g.font = 'Bold 200px Arial';
  g.fillStyle = '#000000';
  g.fillText(text, 512,512);
  var text1 = new THREE.Texture(bitmap)
  text1.needsUpdate = true;

  var geometryA = new THREE.BoxGeometry( mySceneW/14, mySceneH/10, 0);
  var materialA = new THREE.MeshBasicMaterial({map: text1 ,color: 0xFDF6D5} );
  var tex = new THREE.Mesh( geometryA, materialA );
  return tex;

}

function changeColor(element,color){

  element.material.color.setHex(color);

}
function changeAngleMirror(num){
  t1=num;
  var th=(Math.PI/180)*2;
  var ang=th*num;
  var newX=centerXM+(mirrorL/2)*(Math.sin(ang));
  var newY=centerYM+(mirrorL/2)*(Math.cos(ang));
  var newX2=centerXM-(mirrorL/2)*(Math.sin(ang));;
  var newY2=centerYM-(mirrorL/2)*(Math.cos(ang));

  if(ang<th*10.01 && ang >-th*10.01){
  mirror.geometry.vertices[0].x=newX;
  mirror.geometry.vertices[0].y=newY;
  mirror.geometry.vertices[1].x=newX2;
  mirror.geometry.vertices[1].y=newY2;
  mirror.geometry.verticesNeedUpdate = true;
  mirrorb.geometry.vertices[0].x=newX+0.02;
  mirrorb.geometry.vertices[0].y=newY;
  mirrorb.geometry.vertices[1].x=newX2+0.02;
  mirrorb.geometry.vertices[1].y=newY2;
  mirrorb.geometry.verticesNeedUpdate = true;




  line2.geometry.vertices[1].y=centerYM+(centerXM-myCenterX/2)*(Math.tan(angle+2*ang));
  line2.geometry.verticesNeedUpdate = true;


  perMX=centerXM-perL*Math.cos(ang);
  perMY=centerYM+perL*Math.sin(ang);

  per.geometry.vertices[1].x=perMX;
  per.geometry.vertices[1].y=perMY;
  per.geometry.verticesNeedUpdate = true;
}

  if(line2.geometry.vertices[1].y>=b.position.y-0.16 && line2.geometry.vertices[1].y<=b.position.y+0.16)changeColor(b,'0xffff00');
  else changeColor(b,'0xFDF6D5');

  if(line2.geometry.vertices[1].y<=(a.position.y+0.16) && line2.geometry.vertices[1].y>=(a.position.y-0.16))changeColor(a,'0xffff00');
  else changeColor(a,'0xFDF6D5');

  if(line2.geometry.vertices[1].y>=c.position.y-0.16 && line2.geometry.vertices[1].y<=c.position.y+0.16)changeColor(c,'0xffff00');
  else changeColor(c,'0xFDF6D5');

  if(line2.geometry.vertices[1].y>=d.position.y-0.16 && line2.geometry.vertices[1].y<=d.position.y+0.16)changeColor(d,'0xffff00');
  else changeColor(d,'0xFDF6D5');

  console.log(line1.geometry.vertices[1].y);
  console.log(a.position.y+0.15);



  PIErender();


}


function myDrag(element,pos){

  changeAngleMirror(pos.x*10);



  PIErender();

}






function handleX(newValue)
{

  changeAngleMirror(newValue);


}


function loadExperimentElements() {

  PIEsetDeveloperName("Akshit Soni");
  PIEsetExperimentTitle("A Simple Reflection at mirror");
  initialiseSceneVariables();
  initialiseHelp();
  initialiseInfo();




  PIEaddInputSlider("Change angle", Xdefault, handleX, Xmin, Xmax, Xstep);




  geometry = new THREE.BoxGeometry( mySceneW * 2, mySceneH * 2, 0);
  material = new THREE.MeshBasicMaterial({color: 0xFDF6D5} );
  myBack = new THREE.Mesh( geometry, material );
  myBack.position.set(myCenterX, myCenterY, -0.15);
  PIEaddElement(myBack);

  var texture = THREE.ImageUtils.loadTexture('torch.png', {}, function() {
    myBackp.position.set(myCenterX/2-0.22, myCenterY/2-0.05, -0.09);
  PIErender();});

  var geometryp = new THREE.BoxGeometry( mySceneW/5, mySceneH/6, 0);
  materialp = new THREE.MeshBasicMaterial({map: texture ,color: 0xFDF6D5} );
  myBackp = new THREE.Mesh( geometryp, materialp );
  myBackp.position.set(myCenterX/2, myCenterY/2, -0.2);

  PIEaddElement(myBackp);

  line1=drawMatchStick(myCenterX/2, myCenterY/2,myCenterX+1,myCenterY+0.1,'#ffff00',10);
  mirror=drawMatchStick(myCenterX+1, myCenterY+0.1+1,myCenterX+1,myCenterY-1+0.1,"#808080",10);
  mirrorb=drawMatchStick(myCenterX+1+0.02, myCenterY+0.1+1,myCenterX+1+0.02,myCenterY-1+0.1,"#000000",3);
  PIEaddElement(mirror);
  PIEaddElement(mirrorb);

  PIEdragElement(mirror);
  PIEsetDrag(mirror, myDrag);

  angle =findAngle(line1.geometry.vertices[0].x,line1.geometry.vertices[0].y,centerXM,centerYM,perMX,perMY);
  line2=drawMatchStick(centerXM,centerYM,myCenterX/2,centerYM+(centerXM-(myCenterX/2))*Math.tan(angle),'#ffff00',10);
  PIEaddElement(line1);

  PIEaddElement(line2);

  per=drawMatchStick(centerXM,centerYM,perMX,perMY,'#000000',1);
  PIEaddElement(per);






  a = textBox("A");
  a.position.set(myCenterX/2, myCenterY, -0.15);
  PIEaddElement(a);
  b = textBox("B");
  b.position.set(myCenterX/2, myCenterY+0.4, -0.15);
  PIEaddElement(b);

  c = textBox("C");
  c.position.set(myCenterX/2, myCenterY+0.8, -0.15);
  PIEaddElement(c);

  d = textBox("D");
  d.position.set(myCenterX/2, myCenterY+1.2, -0.15);
  PIEaddElement(d);


  changeAngleMirror(changeAng);


















  PIEsetAreaOfInterest(mySceneTLX,mySceneTLY,mySceneBRX,mySceneBRY);

}


function resetExperiment(){

   initialiseSceneVariables();


   mirror.geometry.vertices[0].x=myCenterX+1;
   mirror.geometry.vertices[0].y=myCenterY+0.1+1;
   mirror.geometry.vertices[1].x=myCenterX+1;
   mirror.geometry.vertices[1].y=myCenterY-1+0.1;

   mirror.geometry.verticesNeedUpdate = true;

   mirrorb.geometry.vertices[0].x=myCenterX+1+0.02;
   mirrorb.geometry.vertices[0].y=myCenterY+0.1+1;
   mirrorb.geometry.vertices[1].x=myCenterX+1+0.02;
   mirrorb.geometry.vertices[1].y=myCenterY-1+0.1;

   mirrorb.geometry.verticesNeedUpdate = true;

   per.geometry.vertices[1].x=perMX;
   per.geometry.vertices[1].y=perMY;
   per.geometry.verticesNeedUpdate=true;

   line2.geometry.vertices[1].y=centerYM+(centerXM-(myCenterX/2))*Math.tan(angle);
   line2.geometry.verticesNeedUpdate = true;

   changeAngleMirror(0);
   PIEchangeInputSlider("Change angle",Xdefault);
   PIErender();




}


function updateExperimentElements(t,dt){

  if(t1>10)sign=-1;
  if(t1<-10)sign=1;
  t1=t1+(sign*dt/100)
  changeAngleMirror(t1);



  }
