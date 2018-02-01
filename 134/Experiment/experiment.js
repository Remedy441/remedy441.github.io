var mySceneTLX;
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;

var myBackp;

var check1;
//
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
var circleA;
var circleA;
var AnsOut;

//changing test
var count;
var totalTest;

var helpContent;
function initialiseHelp(){
  helpContent="";
  //helpContent +="<h2>Help</h2><h3>Acute Angle</h3><p>Angle is said to be if it is less than 90 degrees</p><h3>Obtuse</h3><p>Angle is said to be if it is more than 90 degrees</p><h3>Right Angle</h3><p>Angle is said to be if it is equal to 90 degrees</p><h3>Strainght</h3><p>Angle is said to be if it is equal to 180 degrees</p>";
  helpContent = helpContent + "<h2>Angles with Matchsticks help</h2>";
  helpContent = helpContent + "<h3>About the experiment</h3>";
  helpContent = helpContent + "<p>The experiment shows two matchsticks at some angle</p>";
  helpContent = helpContent + "<h3>To learn about Angles</h3>";
  helpContent = helpContent + "<p>Start the experiment.</p>";
  helpContent = helpContent + "<h3>To test your knowledge</h3>";
  helpContent = helpContent + "<p>Select the option according to according to the angle between matchsticks</p>";
  helpContent = helpContent + "<p>If your answer is correct then correct message will appear else wrong message.</p>";
  helpContent = helpContent + "<p>If you don't know the answer you can click on Show Answer.</p>";
  helpContent = helpContent + "<h3>Change angle between MatchSticks</h3>";
  helpContent = helpContent + "<p>You can change angle by dragging head of matchsticks</p>";
  helpContent = helpContent + "<p>You can check your knowledge with custom input.By choosing angle between them from panel.</p>";
  helpContent = helpContent + "<h2>Happy Learning</h2>";
  PIEupdateHelp(helpContent);
}


var infoContent;
function initialiseInfo(){
  infoContent ="<h2>Angles with matchsticks concepts<h2>";
  //nfoContent=infoContent+"<p>You can learn the concept of angles by pressing start button and seeing the animation</p><p>Choose your option from control panel if answer is correct then correct appear on bottom else a wrong will appear</p><p>If you don't know the answer click on answer button to get answer</p>If you got the answer then you can click on next to get different question </p><p>You can also change the angle by draging the matchstick, you can try to answer or you can see the answer by clicking answer button</p>";
  infoContent=infoContent+"<h3>Acute Angle</h3><p>Angle is said to be if it is less than 90 degrees</p><h3>Obtuse</h3><p>Angle is said to be if it is more than 90 degrees</p><h3>Right Angle</h3><p>Angle is said to be if it is equal to 90 degrees</p><h3>Straingth</h3><p>Angle is said to be if it is equal to 180 degrees</p>";
  infoContent=infoContent+"<h2>Happy learning</h2>"
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
  theta = 0.174532;
  dtheta = 0.174532;
  time = 1;
  flag = 0;
  Mlength = 1;
  test = [
            [myCenterX,myCenterY+Mlength,myCenterX+Mlength,myCenterY],
            [myCenterX-Mlength,myCenterY,myCenterX+Mlength,myCenterY],
            [myCenterX+Mlength*Math.cos(0.7),myCenterY+Mlength*Math.sin(0.7),myCenterX+Mlength,myCenterY],
            [myCenterX-Mlength*Math.cos(0.5),myCenterY+Mlength*Math.sin(0.5),myCenterX+Mlength,myCenterY],
            [myCenterX+Mlength*Math.cos(0.5),myCenterY+Mlength*Math.sin(0.5),myCenterX+Mlength,myCenterY],
            [myCenterX+Mlength*Math.cos(0.2),myCenterY+Mlength*Math.sin(0.2),myCenterX+Mlength,myCenterY],
            [myCenterX-Mlength*Math.cos(0.2),myCenterY+Mlength*Math.sin(0.2),myCenterX+Mlength,myCenterY]

          ];

}

function myDrag(element,newpos){
  //alert("hello");
  //if(PIEscene(circleA)!=NULL)PIEscene.remove()
  if(check1 == 1){PIEscene.remove(circleA);
  PIErender();}
  console.log(newpos.x);
  //position=(newpos.x-2)*(newpos.x-2)+(newpos.y-1.5)*(newpos.y-1.5);
  //if((newpos.x-2)*(newpos.x-2)+(newpos.y-1.5)*(newpos.y-1.5)>0.23 && (newpos.x-2)*(newpos.x-2)+(newpos.y-1.5)*(newpos.y-1.5)<0.27){

  if(newpos.x>1.9 && newpos.x<2.1){
  line1.geometry.vertices[1].x = 2.0;
  line1.geometry.vertices[1].y = newpos.y;
  line1.geometry.verticesNeedUpdate = true;//PIErender.clearDepth();
  circle1.position.set(myCenterX,newpos.y,-0.09);
  }
  else if(newpos.x<2 && newpos.y<1.6 && newpos.y>1.5){
    line1.geometry.vertices[1].x = newpos.x;
    line1.geometry.vertices[1].y = 1.5;
    line1.geometry.verticesNeedUpdate = true;//PIErender.clearDepth();
    circle1.position.set(newpos.x,1.5,-0.09);
  }
  else if(newpos.x>2 && newpos.y<1.6 && newpos.y>1.5){
    line1.geometry.vertices[1].x = newpos.x;
    line1.geometry.vertices[1].y = 1.5;
    line1.geometry.verticesNeedUpdate = true;//PIErender.clearDepth();
    circle1.position.set(newpos.x,1.5,-0.09);
  }
    else if(newpos.y>myCenterY){
    line1.geometry.vertices[1].x = newpos.x;
    line1.geometry.vertices[1].y = newpos.y;
    line1.geometry.verticesNeedUpdate = true;
    circle1.position.set(newpos.x,newpos.y,-0.09);
    console.log(line1.geometry.vertices[1].x);

  }

}

function myDrag2(element,newpos){
  //alert("hello");
  //if(PIEscene(circleA)!=NULL)PIEscene.remove()
  if(check1 == 1){PIEscene.remove(circleA);
  PIErender();}


  if(newpos.x>1.9 && newpos.x<2.1){
  line2.geometry.vertices[1].x = 2.0;
  line2.geometry.vertices[1].y = newpos.y;
  line2.geometry.verticesNeedUpdate = true;//PIErender.clearDepth();
  circle2.position.set(myCenterX,newpos.y,-0.09);
  }
  else if(newpos.x<2 && newpos.y<1.6 && newpos.y>1.5){
    line2.geometry.vertices[1].x = newpos.x;
    line2.geometry.vertices[1].y = 1.5;
    line2.geometry.verticesNeedUpdate = true;//PIErender.clearDepth();
    circle2.position.set(newpos.x,1.5,-0.09);
  }
  else if(newpos.x>2 && newpos.y<1.6 && newpos.y>1.5){
    line2.geometry.vertices[1].x = newpos.x;
    line2.geometry.vertices[1].y = 1.5;
    line2.geometry.verticesNeedUpdate = true;//PIErender.clearDepth();
    circle2.position.set(newpos.x,1.5,-0.09);
  }
    else if(newpos.y>myCenterY){
    line2.geometry.vertices[1].x = newpos.x;
    line2.geometry.vertices[1].y = newpos.y;
    line2.geometry.verticesNeedUpdate = true;
    circle2.position.set(newpos.x,newpos.y,-0.09);
    console.log(line2.geometry.vertices[1].x);

  }




}




function drawMatchStick(x1,y1,x2,y2){
  var material;
  material = new THREE.LineBasicMaterial({  color: 0xffff00,  linewidth: 100});

  geometry1 = new THREE.Geometry();
  geometry1.vertices.push(
    new THREE.Vector3( 2.0, 1.5, -0.1),
    new THREE.Vector3( x1, y1, -0.1)
  );
  line1 = new THREE.Line( geometry1, material );
   PIEaddElement(line1);
   line1.geometry.verticesNeedUpdate = true;
   var geometry = new THREE.CircleGeometry( 0.07, 64 );
   var material1 = new THREE.MeshBasicMaterial( { color: 0xA52A2A } );
   circle1 = new THREE.Mesh( geometry, material1);
   circle1.position.set(x1,y1,-0.09);
   PIEaddElement(circle1);
   PIEdragElement(circle1);
   PIEsetDrag(circle1, myDrag);
   //line 2


   geometry2 = new THREE.Geometry();
   geometry2.vertices.push(
     new THREE.Vector3( 2.0, 1.5, -0.1),
     new THREE.Vector3( x2, y2, -0.1)
   );
   line2 = new THREE.Line( geometry2, material );
    PIEaddElement(line2);
    var geometry = new THREE.CircleGeometry( 0.07, 64 );
    var material1 = new THREE.MeshBasicMaterial( { color: 0xA52A2A } );
    circle2 = new THREE.Mesh( geometry, material1);
    circle2.position.set(x2,y2,-0.09);
    PIEaddElement(circle2);
    PIEdragElement(circle2);
     PIEsetDrag(circle2, myDrag2);


}



function acute()
  {
    check(1);
  }

function obtuse(){
  check(2);
}

function rightAngle(){
  check(3);
}

function straight(){
  check(4);
}

function findAngle(p0x,p0y,p1x,p1y,p2x,p2y) {
  var a = Math.pow(p1x-p0x,2) + Math.pow(p1y-p0y,2),
      b = Math.pow(p1x-p2x,2) + Math.pow(p1y-p2y,2),
      c = Math.pow(p2x-p0x,2) + Math.pow(p2y-p0y,2);
  return Math.acos( (a+b-c) / Math.sqrt(4*a*b) );
}

function answerC(){

  if(check1 == 1){PIEscene.remove(circleA);
  PIErender();}
  var x=line1.geometry.vertices[1].x;
  var y=line1.geometry.vertices[1].y;
  var x2=line2.geometry.vertices[1].x;
  var y2=line2.geometry.vertices[1].y;
  var ang=findAngle(x,y,myCenterX,myCenterY,x2,y2);
  console.log(ang);
  console.log("answerC");
  if(ang<(Math.PI/2))answer=1;
  if(ang>(Math.PI/2))answer=2;
  if(ang<=(Math.PI)/2+0.02 &&ang>=(Math.PI)/2-0.02 && ang!=Math.PI)answer=3;
  if(ang<=Math.PI+0.02 &&ang>=Math.PI-0.02)answer=4;
  //alert(answer);
  if(answer==1){
  text="ACUTE";

  }
  if(answer==2){
    text="OBTUSE";
  }
  if(answer==3){
    text="RIGHT";
  }
  if(answer==4){
    text="STRAIGHT";
  }
  if(check1 == 1){PIEscene.remove(circleA);
  PIErender();
check1=0;}
  var bitmap = document.createElement('canvas');
  var g = bitmap.getContext('2d');
  bitmap.width = 1024;
  bitmap.height = 1024;
  g.fillStyle = '#FDF7E5';
  g.fillRect(0,0,bitmap.width,bitmap.height);
  g.font = 'Bold 150px Arial';
  g.fillStyle = '#000000';
  g.fillText(text, 180,512);
  //g.fillText("AND", 425,430);
  //g.fillText("PRESS START TO CONTINUE", 75,500);
  // canvas contents will be used for a texture
  var text1 = new THREE.Texture(bitmap)
  text1.needsUpdate = true;
  //Create Box
  var myGeometry = new THREE.BoxGeometry(1,1,0);
  var myMaterial = new THREE.MeshBasicMaterial({map: text1});
  circleA = new THREE.Mesh(myGeometry,myMaterial);

  circleA.position.set(myCenterX,myCenterY/2,-0.1);
  PIEaddElement(circleA);
  PIErender();
  check1 = 1;




}


function check(ans){
  var text;
  var x=line1.geometry.vertices[1].x;
  var y=line1.geometry.vertices[1].y;
  var x2=line2.geometry.vertices[1].x;
  var y2=line2.geometry.vertices[1].y;
  var ang=findAngle(x,y,myCenterX,myCenterY,x2,y2);
  console.log(ang);
    console.log("Check");
  if(ang<(Math.PI/2))answer=1;
  if(ang>(Math.PI/2))answer=2;
  if(ang<=(Math.PI)/2+0.02 &&ang>=(Math.PI)/2-0.02 && ang!=Math.PI)answer=3;
  if(ang<=Math.PI+0.02 &&ang>=Math.PI-0.02)answer=4;


  if(ans==answer){

    text="CORRECT";

  }
  else{
   text = "WRONG";
  // alert("wrong answer");

  }
  if(check1 == 1){PIEscene.remove(circleA);
  PIErender();
check1=0;}
  var bitmap = document.createElement('canvas');
  var g = bitmap.getContext('2d');
  bitmap.width = 1024;
  bitmap.height = 1024;
  g.fillStyle = '#FDF7E5';
  g.fillRect(0,0,bitmap.width,bitmap.height);
  g.font = 'Bold 150px Arial';
  g.fillStyle = '#000000';
  g.fillText(text, 180,512);
  //g.fillText("AND", 425,430);
  //g.fillText("PRESS START TO CONTINUE", 75,500);
  // canvas contents will be used for a texture
  var text1 = new THREE.Texture(bitmap)
  text1.needsUpdate = true;
  //Create Box
  var myGeometry = new THREE.BoxGeometry(1,1,0.0);
  var myMaterial = new THREE.MeshBasicMaterial({map: text1});
  circleA = new THREE.Mesh(myGeometry,myMaterial);

  circleA.position.set(myCenterX,myCenterY/2,-0.1);
  PIEaddElement(circleA);
  check1=1;
  PIErender();
}

function next(){


//myCenterX+Mlength*Math.cos(0.7),myCenterY+Mlength*Math.sin(0.7),myCenterX+Mlength,myCenterY
  var al=Math.random()*Math.PI;
  line1.geometry.vertices[1].x = myCenterX+Mlength*Math.cos(al);
  line1.geometry.vertices[1].y = myCenterY+Mlength*Math.sin(al);
  line1.geometry.verticesNeedUpdate = true;
  circle1.position.set(line1.geometry.vertices[1].x,line1.geometry.vertices[1].y,-0.09);
  PIErender();
  //PIErender.sortObjects = false;

/*  line1.geometry.vertices[1].x = test[count][0];
  line1.geometry.vertices[1].y = test[count][1];
  line1.geometry.verticesNeedUpdate = true;


  line2.geometry.vertices[1].x = test[count][2];
  line2.geometry.vertices[1].y = test[count][3];
  line2.geometry.verticesNeedUpdate = true;

  //PIErender.clearDepth();
  circle1.position.set(test[count][0],test[count][1],-0.09);
  circle2.position.set(test[count][2],test[count][3],-0.09);*/
  if(check1 == 1){PIEscene.remove(circleA);
  PIErender();
check1=0;}

  //answer = test[count][4];
  count++;
  if(count>=totalTest)count=0;


}

function a(){}
function loadExperimentElements() {

  PIEsetDeveloperName("Akshit Soni");
  PIEsetExperimentTitle("Angles with matchsticks");
  initialiseSceneVariables();
  initialiseHelp();
  initialiseInfo();

  PIEaddInputCommand("Choose Angle",a);
  PIEaddInputCommand("Acute",acute);
  PIEaddInputCommand("Obtuse",obtuse);
  PIEaddInputCommand("Right",rightAngle);
  PIEaddInputCommand("Straight",straight);
  PIEaddInputCommand("Show Answer",answerC);
  PIEaddInputCommand("Next",next);
  //PIEaddInputCommand("Reset",resetExperiment);

  var texture;
  //texture = THREE.TextureLoader().load( "protractor.png" );
  texture = THREE.ImageUtils.loadTexture('protractor.png', {}, function() {

  myBackp.position.set(myCenterX, myCenterY+mySceneH/4-mySceneH/20, -0.15);
  PIErender();
  });

  //var materialA = new THREE.MeshBasicMaterial({map: texture});

  geometry = new THREE.BoxGeometry( mySceneW * 2, mySceneH * 2, 0);
  material = new THREE.MeshBasicMaterial({color: 0xFDF6D5} );
  myBack = new THREE.Mesh( geometry, material );
  myBack.position.set(myCenterX, myCenterY, -0.15);
  PIEaddElement(myBack);




  drawMatchStick(test[count][0],test[count][1],test[count][2],test[count][3]);
  count++;

  var geometryp = new THREE.BoxGeometry( mySceneW/1.5, mySceneH/2.2, 0);
  materialp = new THREE.MeshBasicMaterial({map: texture ,color: 0xFDF6D5  } );
  myBackp = new THREE.Mesh( geometryp, materialp );
  myBackp.position.set(myCenterX, myCenterY+mySceneH/4-mySceneH/20, -0.2);

  PIEaddElement(myBackp);


  PIEsetAreaOfInterest(mySceneTLX,mySceneTLY,mySceneBRX,mySceneBRY);

}


function resetExperiment(){

  if(check1 == 1){PIEscene.remove(circleA);
  PIErender();
check1=0;}
  initialiseSceneVariables();
  //next();
  line1.geometry.vertices[1].x = test[0][0];
    line1.geometry.vertices[1].y = test[0][1];
    line1.geometry.verticesNeedUpdate = true;


    line2.geometry.vertices[1].x = test[0][2];
    line2.geometry.vertices[1].y = test[0][3];
    line2.geometry.verticesNeedUpdate = true;

    //PIErender.clearDepth();
    circle1.position.set(test[0][0],test[0][1],-0.09);
    circle2.position.set(test[0][2],test[0][3],-0.09)

  console.log("rest");
  PIErender();

}


function updateExperimentElements(t,dt){

  if((t/1000)>time){
    time=time+1;
  // if(check1 == 1)PIEscene.remove(circleA);
     var oldX = line1.geometry.vertices[1].x;
     var oldY = line1.geometry.vertices[1].y;
  //   //var ts = dt/1000;
  //
  //  var length = Math.sqrt((oldX-2)*(oldX-2)+(oldY-1.5)*(oldY-1.5));
  //var length = 0.5;
  //   if(oldX>2){
  //   var newX = oldX - length*Math.cos(theta);
  //   var newY = oldY + length*Math.sin(theta);
  //
  // }
  //if(oldX<=2)
  //{

    var newX = 2 + Mlength*Math.cos(theta);
    var newY = 1.5 + Mlength*Math.sin(theta);
    //console.log(oldX);
    //console.log(Math.sin(theta));

  //}
  if(newY>1.5){
    if(newX>1.9 && newX<2.1){
      newX = myCenterX;
      newY = myCenterY + Mlength;
    }
    if(newX<2 && newY<1.6 && newY>1.5){
      newY = myCenterY;
      flag =1;
    }
    if(newX>myCenterX && newY<myCenterY+Mlength*Math.sin(dtheta)+0.1){
      //console.log()
      newY = myCenterY;
      //newX = myCenterX+Mlength;

      flag =0;
    }

    line1.geometry.vertices[1].x = newX;
    line1.geometry.vertices[1].y = newY;
    line1.geometry.verticesNeedUpdate = true;
    circle1.position.set(newX,newY,-0.09);

  }
  if(flag==0){theta = theta + dtheta;}
  else{theta = theta - dtheta;}

    PIErender();
    answerC();
    //console.log(newX);
    //console.log(newY);
  }

  }
