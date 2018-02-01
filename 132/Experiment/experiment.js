var mySceneTLX;
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;

var lineA;
var circleA;
var lineB;
var circleB;
var lineM;
var circleM;
var myRuler;
var myBackp;

var first;
var angle;



var myLength=1.5;
var f;
var f1;
var f2;
var f3;

var myBack;
var geometry;
var material;
//update
var theta;
var dtheta;
var time;
var flag;

//for making matchsticks var
var line1;
var line2;
var geometry1;
var geometry2;
var circle1;
var circle2;
var count;
var Mlength;


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
  helpContent="<h2>Simple Pendulum help</h2>";
  helpContent=helpContent+"You can drag the ball to select extreme position then click on start.Pendulum will oscillate with selected extreme position.";
  helpContent=helpContent+"You can also drag the scale to whichever position you want."
    //helpContent +=n 90 degrees</p><h3>Obtuse</h3><p>ees</p><h3>Right Angle</h3><p>Angle is said to be if it is equal to 90 degrees</p><h3>Strainght</h3><p>Angle is said to be if it is equal to 180 degrees</p>";
  PIEupdateHelp(helpContent);
}


var infoContent;
function initialiseInfo(){
  infoContent ="<h2>Simple pendulum concepts</h2>";
  infoContent =infoContent+"<p>Pendulum is a weight suspended from a pivot so that it can swing freely.</p>";
  infoContent =infoContent+"<p>When a pendulum is displaced sideways from its resting, equilibrium position, it is subject to a restoring force due to gravity that will accelerate it back toward the equilibrium position.</p>";
  infoContent =infoContent+"<p>When released, the restoring force combined with the pendulum's mass causes it to oscillate about the equilibrium position, swinging back and forth.</p>"
  infoContent =infoContent+"<p>Position M shows pendulum's mean position. When pendulum is released after taking one side it begins to move to and fro.</p>";
  infoContent =infoContent+"<p>A and B positions are extreme position of pendulum. Pendulum is said to have completed one oscilation when it travels from one extreme to other extreme and back to that extreme.</p>"
  PIEupdateInfo(infoContent);

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
  count = 0;
  totalTest = 7;
  check1 = 0;
  theta = 0;
  dtheta = 0.174532;
  time = 1;
  flag = 0;
  Mlength = 1;

  myLength=1.5;
  f=1;
  f1=0;
  f2=0;
  f3=0;
  first=0;
  angle=Math.PI/8;
  theta=angle;


}
function myDrag(element,newpos){
  //alert("hello");
  //if(PIEscene(circleA)!=NULL)PIEscene.remove()
  PIEscene.remove(lineA);
  PIEscene.remove(circleA);
  PIEscene.remove(lineB);
  PIEscene.remove(circleB);
  PIEscene.remove(lineM);
  PIEscene.remove(circleM);
  initialiseSceneVariables();
    line1.geometry.vertices[1].x = newpos.x;
    line1.geometry.vertices[1].y = newpos.y;
    line1.geometry.verticesNeedUpdate = true;
    circle1.position.set(newpos.x,newpos.y,-0.09);
    console.log(line1.geometry.vertices[1].x);
    myLength=Math.sqrt(Math.pow(myCenterX-newpos.x,2)+Math.pow(mySceneTLY-newpos.y,2))
    angle=findAngle(myCenterX,myCenterY,myCenterX,mySceneTLY,newpos.x,newpos.y);
    theta=angle;
    if(newpos.x<myCenterX)theta=-theta;


}

function findAngle(p0x,p0y,p1x,p1y,p2x,p2y) {
  var a = Math.pow(p1x-p0x,2) + Math.pow(p1y-p0y,2),
      b = Math.pow(p1x-p2x,2) + Math.pow(p1y-p2y,2),
      c = Math.pow(p2x-p0x,2) + Math.pow(p2y-p0y,2);
  return Math.acos( (a+b-c) / Math.sqrt(4*a*b) );
}



function drawMatchStick(x,y){
  var material;
  material = new THREE.LineBasicMaterial({  color: 0x000000,  linewidth: 1});

  geometry1 = new THREE.Geometry();
  geometry1.vertices.push(
    new THREE.Vector3( myCenterX, mySceneTLY, -0.1),
    new THREE.Vector3( x,y, -0.1)
  );
  line1 = new THREE.Line( geometry1, material );
   PIEaddElement(line1);
   line1.geometry.verticesNeedUpdate = true;
   geometry = new THREE.CircleGeometry( 0.15, 64 );
   material1 = new THREE.MeshBasicMaterial( { color: 0xD4AF37 } );
   circle1 = new THREE.Mesh( geometry, material1);
   circle1.position.set(x,y,-0.09);
   PIEaddElement(circle1);
   PIEdragElement(circle1);
   PIEsetDrag(circle1, myDrag);

}
function drawMatchStickA(x,y){
  var material;
  material = new THREE.LineBasicMaterial({  color: 0x000000,  linewidth: 1});
  var bitmap = document.createElement('canvas');
  var g = bitmap.getContext('2d');
  bitmap.width = 1024;
  bitmap.height = 1024;
  g.fillStyle = '#FDF7E5';
  g.fillRect(0,0,bitmap.width,bitmap.height);
  g.font = 'Bold 200px Arial';
  g.fillStyle = '#000000';
  g.fillText("A", 512,512);
  //g.fillText("AND", 425,430);
  //g.fillText("PRESS START TO CONTINUE", 75,500);
  // canvas contents will be used for a texture
  var text1 = new THREE.Texture(bitmap)
  text1.needsUpdate = true;



  geometry1 = new THREE.Geometry();
  geometry1.vertices.push(
    new THREE.Vector3( myCenterX, mySceneTLY, -0.1),
    new THREE.Vector3( x,y, -0.1)
  );
  lineA = new THREE.Line( geometry1, material );
   PIEaddElement(lineA);
   line1.geometry.verticesNeedUpdate = true;
   geometry = new THREE.CircleGeometry( 0.15, 64 );
   material1 = new THREE.MeshBasicMaterial( { map:text1,color: 0xD4AF37 } );
   circleA = new THREE.Mesh( geometry, material1);
   circleA.position.set(x,y,-0.09);
   PIEaddElement(circleA);

}
function drawMatchStickB(x,y){
  var material;
  material = new THREE.LineBasicMaterial({  color: 0x000000,  linewidth: 1});
  var bitmap = document.createElement('canvas');
  var g = bitmap.getContext('2d');
  bitmap.width = 1024;
  bitmap.height = 1024;
  g.fillStyle = '#FDF7E5';
  g.fillRect(0,0,bitmap.width,bitmap.height);
  g.font = 'Bold 200px Arial';
  g.fillStyle = '#000000';
  g.fillText("B", 512,512);
  //g.fillText("AND", 425,430);
  //g.fillText("PRESS START TO CONTINUE", 75,500);
  // canvas contents will be used for a texture
  var text1 = new THREE.Texture(bitmap)
  text1.needsUpdate = true;



  geometry1 = new THREE.Geometry();
  geometry1.vertices.push(
    new THREE.Vector3( myCenterX, mySceneTLY, -0.1),
    new THREE.Vector3( x,y, -0.1)
  );
   lineB = new THREE.Line( geometry1, material );
   PIEaddElement(lineB);
   lineB.geometry.verticesNeedUpdate = true;
   geometry = new THREE.CircleGeometry( 0.15, 64 );
   material1 = new THREE.MeshBasicMaterial( { map:text1,color: 0xD4AF37 } );
   circleB = new THREE.Mesh( geometry, material1);
   circleB.position.set(x,y,-0.09);
   PIEaddElement(circleB);

}
function drawMatchStickM(x,y){
  var material;
  material = new THREE.LineBasicMaterial({ map: text1, color: 0x000000,  linewidth: 1});

  var bitmap = document.createElement('canvas');
  var g = bitmap.getContext('2d');
  bitmap.width = 1024;
  bitmap.height = 1024;
  g.fillStyle = '#FDF7E5';
  g.fillRect(0,0,bitmap.width,bitmap.height);
  g.font = 'Bold 200px Arial';
  g.fillStyle = '#000000';
  g.fillText("M", 512,512);
  //g.fillText("AND", 425,430);
  //g.fillText("PRESS START TO CONTINUE", 75,500);
  // canvas contents will be used for a texture
  var text1 = new THREE.Texture(bitmap)
  text1.needsUpdate = true;
  //C


  geometry1 = new THREE.Geometry();
  geometry1.vertices.push(
    new THREE.Vector3( myCenterX, mySceneTLY, -0.1),
    new THREE.Vector3( x,y, -0.1)
  );
  lineM = new THREE.Line( geometry1, material );
   PIEaddElement(lineM);
   line1.geometry.verticesNeedUpdate = true;
   geometry = new THREE.CircleGeometry( 0.15, 64 );
   material1 = new THREE.MeshBasicMaterial( { map:text1,color: 0xD4AF37 } );
   circleM = new THREE.Mesh( geometry, material1);
   circleM.position.set(x,y,-0.09);
   PIEaddElement(circleM);

}

function rulerDrag(element,newpos){

  element.position.set(newpos.x, newpos.y, -0.15);

}









function loadExperimentElements() {

  PIEsetDeveloperName("Akshit Soni");
  PIEsetExperimentTitle("Simple Pendulum");
  initialiseSceneVariables();
  initialiseHelp();
  initialiseInfo();


  geometry = new THREE.BoxGeometry( mySceneW * 2, mySceneH * 2, 0);
  material = new THREE.MeshBasicMaterial({color: 0xFDF6D5} );
  myBack = new THREE.Mesh( geometry, material );
  myBack.position.set(myCenterX, myCenterY, -0.15);
  PIEaddElement(myBack);

  var texture = THREE.ImageUtils.loadTexture('protractor.png', {}, function() {
    myBackp.position.set(myCenterX, myCenterY+myCenterY/2+0.3, -0.15);
  PIErender();});

  var geometryp = new THREE.BoxGeometry( mySceneW/2, mySceneH/3, 0);
  materialp = new THREE.MeshBasicMaterial({map: texture ,color: 0xFDF6D5} );
  myBackp = new THREE.Mesh( geometryp, materialp );
  myBackp.position.set(myCenterX, myCenterY+myCenterY/2+0.3, -0.2);

  PIEaddElement(myBackp);

  var texture = THREE.ImageUtils.loadTexture('ruler.png', {}, function() {
  myRuler.position.set(0.15, myCenterY+0.04, -0.15);
  PIErender();});
  geometry = new THREE.BoxGeometry( 0.3, mySceneH/1.5 , 0);
  material = new THREE.MeshBasicMaterial({map:texture,color: 0xFDF6D5} );
  myRuler = new THREE.Mesh( geometry, material );
  myRuler.position.set(0.15, myCenterY+0.04, -0.2);
  PIEaddElement(myRuler);
  PIEdragElement(myRuler);
  PIEsetDrag(myRuler,rulerDrag);




  drawMatchStick(myCenterX, myCenterY);
  //line1=ar[0];
  //circle1=ar[1];

  PIEsetAreaOfInterest(mySceneTLX,mySceneTLY+0.15,mySceneBRX,mySceneBRY);

}


function resetExperiment(){

   initialiseSceneVariables();
   PIEscene.remove(lineA);
   PIEscene.remove(circleA);
   PIEscene.remove(lineB);
   PIEscene.remove(circleB);
   PIEscene.remove(lineM);
   PIEscene.remove(circleM);
   PIEscene.remove(line1);
   PIEscene.remove(circle1);
   drawMatchStick(myCenterX, myCenterY);

  PIErender();
  //loadExperimentElements();



}

function updateExperimentElements(t,dt){
  if(t>0){
  var st=dt/1000;
  var newX,newY;

  newX=myCenterX+myLength*Math.sin(theta);
  newY=mySceneH-myLength*Math.cos(theta);
  if(theta>=angle){f=-1;
  if(!f1){drawMatchStickA(newX,newY);
    f1=1;
    PIErender();
  }




  }
  if(!f3 && newX<=myCenterX+0.01 && newX>=myCenterX-0.01){drawMatchStickM(newX,newY);
  f3=1;
  PIErender();

}
  if(theta<=-angle){f=1;
  if(!f2){drawMatchStickB(newX,newY);
f2=1;
PIErender();}
}
  if(newX<=myCenterX+myLength*Math.sin(angle) && newX>=myCenterX-myLength*Math.sin(angle)){
  line1.geometry.vertices[1].x = newX;
  line1.geometry.vertices[1].y = newY;
  line1.geometry.verticesNeedUpdate = true;
  circle1.position.set(newX,newY,-0.09);
}
theta=theta+f*Math.PI/8*st;
  //console.log(myLength*Math.sin(Math.PI/6*st));
  console.log(theta);
}
  }
