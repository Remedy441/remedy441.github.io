var myName = "Amarnath Karthi";
var experimentName = "Measuring Lines";
var helpString = "<h2>Measuring Lines : Help</h2><p> Click on Quiz to start Playing</p><p>You have to tell which is bigger among the 2 lines</p><p><h2>Controls</h2><ul><li>Drag the circle on the scale to move the scale</li><li>Drag the ends of the scale to rotate it</li><li>Use scale to measure the lengths of the lines</li><li>Fill the table with the proper lengths and then select the correct option by clicking one of the 3 provided buttons.</li></ul></p>";
var infoString = "<h2>Measuring Lines : Info</h2><p> A line segment is a mathematical entity joining 2 points. The points are named as capital alphabets. And the line joining them is denoted by the combination of alphabets. For example, A line Joining B and C is known as line BC.</p><p> A line is measured by a ruler or a measuring tape. Units are metre, centimetre, inches etc. Metre is the SI unit of Length</p><p><h2>Conversions of units</h2><ul><li>1 m = 100 cm</li><li>1000 m = 1 km</li><li>2.5 cm = 1 in</li></ul></p>";

var mySceneTLX;
var mySceneTLY;
var mySceneBRX;
var mySceneBRY;
var myCenterX;
var myCenterY;
var mySceneW;
var mySceneH;
var observationTable;
var flatness = 0.00001;
var actualTable;
var bgColor = 0xf0e0aa;
var bgColorString = ""
var bgZ = -0.1;
var wallpaper;
var quizButton;
//Z Indices
var lineZ;
var labelZ;
var tapeYellowZ;
var tapeBlackZ;
var input1;
var input2;
var tick;
var cross;

var initialText;

//GUI Elements
var tapeLabel = "Measuring Tape";
var tapeDefault = false;
var resetLabel = "Reset Scale";
var abLabel = "AB is longer";
var cdLabel = "CD is longer";
var eqLabel = "Both are Equal";
var measureLabel = "Measurement";
var quizLabel = "Quiz";
var measuredLengthDefault = "";
//Measuring Tape
var tapeRadius = 0.20;
var tapeY = 2.3;
var tapeBlack;
var tapeYellow;
var tapeLine;
var tapePoint;
var tapeInitialPoint;

var angleLabel = "Rotate Scale";
var angleMin=0;
var angleMax=359;
var angleStep = 1;


var pA;
var pB;
var pC;
var pD;
var lineAB;
var lineCD;
var labelA;
var labelB;
var labelC;
var labelD;
var xMin,xMax,yMin,yMax;
var caution;
var scale;
var scaleKnob;
var scaleAngle=0;

var buttonAB;
var buttonCD;
var buttonEQ;

function measureHandler() {

}

function quizHandler() {
  startQuiz();
  //console.log(input1.value);
}

function tapeHandler(newVal) {
  console.log("Tape: "+newVal);
  if(newVal==true) {
    tapeYellow.visible = true;
    tapeBlack.visible=true;
    tapePoint.visible=true;
    tapeInitialPoint.visible = true;
    tapeLine.visible = true;
    PIEchangeInputText(measureLabel,""+getMeasure());
  }
  if(newVal==false) {
    tapeYellow.visible = false;
    tapeBlack.visible=false;
    tapePoint.visible=false;
    tapeInitialPoint.visible = false;
    tapeLine.visible = false;
      PIEchangeInputText(measureLabel,"");
  }
  PIErender();
}

function getMeasure() {
  var x1 = tapePoint.position.x;
  var y1 = tapePoint.position.y;
  var x2 = tapeInitialPoint.position.x;
  var y2 = tapeInitialPoint.position.y;
  var distance = getDistance(x1,y1,x2,y2)*10;
  distance = Math.round(distance*10)/10;
  return(distance);
}

function resetHandler() {
  scale.rotateZ(-1*scaleAngle);
  console.log("Reset");
  scale.position.x = 1.577;
  scale.position.y = 1.2;
  scaleAngle=0;
  scaleKnob.position.x = 1.577;
  scaleKnob.position.y = 1.2;
  PIEchangeInputSlider(angleLabel,0);
  PIErender();
}

function startQuiz() {
  console.log("Inside quiz");
  wallpaper.position.z = bgZ;
  quizButton.position.z = 10;
  initialText.visible = false;
  observationTable.style.visibility = 'visible';
  buttonAB.visible=true;
  buttonCD.visible=true;
  buttonEQ.visible=true;
  ABText.style.visibility = 'hidden';
  CDText.style.visibility = 'hidden';
  ResultText.style.visibility = 'hidden';
  resetHandler();
  generateRandomLines();
}

function mod(a,b) {
  if(a>b)
    return(a-b);
  else {
    return(b-a);
  }
}

function eqHandler() {
  var distanceAB = getDistance(pA.position.x,pA.position.y,pB.position.x,pB.position.y);
  var distanceCD = getDistance(pC.position.x,pC.position.y,pD.position.x,pD.position.y);
  if(valuesEmpty(0)) {
    console.log("Incorrect Values");
    caution.visible = true;
    cross.visible=false;
    PIErender();
  }
  else if(mod(distanceAB,distanceCD)<=0.2) {
    console.log("Correct Answer");
    tick.visible=true;
    caution.visible = false;
    cross.visible = false;
    PIErender();
    setTimeout(nextQuestion,800);
  }
  else {
    tick.visible = false;
    cross.visible = true;
    caution.visible = false;
    PIErender();
  }
}

function abHandler() {
  console.log("AB is bigger");
  var distanceAB = getDistance(pA.position.x,pA.position.y,pB.position.x,pB.position.y);
  var distanceCD = getDistance(pC.position.x,pC.position.y,pD.position.x,pD.position.y);
  if(valuesEmpty(1)) {
    console.log("Incorrect Values");
    caution.visible = true;
    cross.visible=false;
    PIErender();
  }
  else if(distanceAB>distanceCD) {
    console.log("Correct Answer");
    tick.visible=true;
    cross.visible = false;
    caution.visible = false;
    PIErender();
    setTimeout(nextQuestion,800);
  }
  else {
    tick.visible = false;
    cross.visible = true;
    caution.visible = false;
    PIErender();
  }
}

function cdHandler() {
  console.log("CD is bigger");
  console.log("AB is bigger");
  var distanceAB = getDistance(pA.position.x,pA.position.y,pB.position.x,pB.position.y);
  var distanceCD = getDistance(pC.position.x,pC.position.y,pD.position.x,pD.position.y);
  if(valuesEmpty(2)) {
    console.log("Incorrect Values");
    caution.visible = true;
    cross.visible=false;
    PIErender();
  }
  else if(distanceAB<distanceCD) {
    console.log("Correct Answer");
    tick.visible=true;
    cross.visible = false;
    caution.visible = false;
    PIErender();
    setTimeout(nextQuestion,800);
  }
  else {
    tick.visible = false;
    cross.visible = true;
    caution.visible = false;
    PIErender();
  }
}

function nextQuestion() {
  resetHandler();
  generateRandomLines();
  tick.visible = false;
  cross.visible = false;
  caution.visible = false;
  input1.value = "";
  input2.value ="";
  PIErender();
}

function valuesEmpty(mode) {
  if(input1.value==""||input2.value=="")
    return(true);
  else if(isNaN(input1.value)||isNaN(input2.value))
    return(true);
  else {
    n1 = parseFloat(input1.value);
    n2 = parseFloat(input2.value);
    if(mode==0 && n1==n2)
      return(false);
    else if(mode==1&&n1>n2)
      return(false);
    else if(mode==2&&n1<n2)
      return(false);
    else
    return(true);
  }
}

function tapeYellowDragHandler(element,newPos) {
  var deltaX = newPos.x - tapeYellow.position.x;
  var deltaY = newPos.y - tapeYellow.position.y;
  tapeYellow.position.set(newPos.x,newPos.y,tapeYellowZ);
  tapeBlack.position.set(newPos.x,newPos.y,tapeBlackZ);
  tapePoint.position.x+=deltaX;
  tapePoint.position.y+=deltaY;
  tapeInitialPoint.position.x+=deltaX;
  tapeInitialPoint.position.y+=deltaY;
  tapeLine.geometry.vertices[0].x =tapeYellow.position.x;
  tapeLine.geometry.vertices[0].y =tapeYellow.position.y;
  tapeLine.geometry.vertices[1].x =tapePoint.position.x;
  tapeLine.geometry.vertices[1].y =tapePoint.position.y;
  tapeLine.geometry.verticesNeedUpdate = true;
  PIErender();
}

function getDistance(x1,y1,x2,y2) {
  var dist = Math.sqrt( Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2) );
  return(dist);
}

function tapePointDragHandler(element,newPos) {
  tapePoint.position.set(newPos.x,newPos.y,element.position.z);
  tapeLine.geometry.vertices[1].x =tapePoint.position.x;
  tapeLine.geometry.vertices[1].y =tapePoint.position.y;
  tapeLine.geometry.verticesNeedUpdate = true;
  var r1 = tapeRadius+0.1;
  var x1 = tapeYellow.position.x;
  var y1 = tapeYellow.position.y;
  var x2 = tapePoint.position.x;
  var y2 = tapePoint.position.y;
  r2 = getDistance(x1,y1,x2,y2)-r1;
  var x = (r2*x1+r1*x2)/(r1+r2);
  var y = (r2*y1+r1*y2)/(r1+r2);
  tapeInitialPoint.position.set(x,y,tapePoint.position.z)
  PIEchangeInputText(measureLabel,""+getMeasure());
  PIErender();
}

function initializeScene() {
  mySceneTLX = 0.0;
  mySceneTLY = 3.0;
  mySceneBRX = 8.0;
  mySceneBRY = 0.0;
  myCenterX = (mySceneTLX+mySceneBRX)/2;
  myCenterY = (mySceneTLY+mySceneBRY)/2;
  mySceneW = mySceneBRX-mySceneTLX;
  mySceneH = mySceneTLY-mySceneBRY;
}

function initializeWallpaper() {
  var myMaterial = new THREE.MeshBasicMaterial({color:bgColor});
  var myGeometry = new THREE.BoxGeometry(10,4,flatness);
  var myBack = new THREE.Mesh(myGeometry,myMaterial);
  myBack.position.set(myCenterX,myCenterY,0);
  PIEaddElement(myBack);
  PIErender();
  wallpaper=myBack;
}

function angleHandler(value) {
  console.log(value);
  value = value*Math.PI/180;
  scale.rotateZ(value-scaleAngle);
  scaleAngle = value;
  PIErender();
}

function initializeGUIElements() {
  PIEaddInputCommand(resetLabel,resetHandler);
  PIEaddInputCommand(quizLabel,quizHandler);
  PIEaddInputSlider(angleLabel,0,angleHandler,angleMin,angleMax,angleStep);
  /*PIEaddInputCommand(abLabel,abHandler);
  PIEaddInputCommand(cdLabel,cdHandler);
  PIEaddInputCommand(eqLabel,eqHandler);*/
}

function initializeTable() {
  PIEcreateTable("Lengths",3,2,true);
  PIEupdateTable();
  PIEupdateTableCell(0,0,"Line | ")
  PIEupdateTableCell(0,1,"Length");
  PIEupdateTableCell(1,0,"AB");
  PIEsetCellInput(1,1,10,"");
  PIEupdateTableCell(2,0,"CD");
  PIEsetCellInput(2,1,10,"");

}

function initializeZIndices() {
  labelZ = bgZ + flatness;
  lineZ = bgZ + 5*flatness;
  tapeBlackZ = lineZ + 6*flatness;
  tapeYellowZ = lineZ + 7*flatness;
}

function initializeScale() {
  var myImage = new THREE.ImageUtils.loadTexture('scale2.png',{},function(){PIErender();});
  var myMaterial = new THREE.MeshBasicMaterial({map:myImage,transparent:true});
  var myGeometry = new THREE.BoxGeometry(2.3,0.4,flatness);
  var myBox = new THREE.Mesh(myGeometry,myMaterial);
  myBox.position.set(myCenterX,myCenterY,lineZ);
  PIEaddElement(myBox);
  myBox.rotateZ(-1*Math.PI/2);
  myBox.position.x = 1.577;
  myBox.position.y = 1.2;
  PIErender();
  return(myBox);
}

function createCircle(x,y,z,r,myColor) {
  var myGeometry=new THREE.CircleGeometry(r,20);
  var myMaterial= new THREE.MeshBasicMaterial();
  var myCircle = new THREE.Mesh(myGeometry,myMaterial);
  myCircle.position.set(x,y,z);
  myCircle.material.color = new THREE.Color(myColor);
  myCircle.material.needsUpdate = true;
  PIEaddElement(myCircle);
  return(myCircle);
}

function plotLine(x1,y1,x2,y2,z,thickness) {
  var myGeometry = new THREE.Geometry();
  var p1 = new THREE.Vector3(x1,y1,z);
  var p2 = new THREE.Vector3(x2,y2,z);
  myGeometry.vertices.push(p1);
  myGeometry.vertices.push(p2);
  var myMaterial;
  myMaterial = new THREE.LineBasicMaterial();
  myGeometry.computeLineDistances();
  var line = new THREE.Line(myGeometry,myMaterial);
  PIEaddElement(line);
  line.material.color = new THREE.Color(0x000000);
  line.material.linewidth = thickness;
  line.material.needsUpdate = true;
  //console.log(tapeBlackZ+" "+lineZ);
  return(line);
}

function initializeMeasuringTape() {
  tapeY = 3.3*mySceneH/10;
  tapeBlack=createCircle(2.1*mySceneW/10,tapeY,tapeBlackZ,tapeRadius,0x000000);
  tapeYellow=createCircle(2.1*mySceneW/10,tapeY,tapeYellowZ,tapeRadius/3,0xffc400);
  tapePoint=createCircle(tapeBlack.position.x+tapeRadius+0.1,tapeY,lineZ,0.015,0x000000);
  tapeInitialPoint=createCircle(tapeBlack.position.x+tapeRadius+0.1,tapeY,lineZ,0.015,0x000000);
  tapeLine = plotLine(tapeBlack.position.x,tapeBlack.position.y,tapePoint.position.x,tapePoint.position.y,lineZ,2)
  PIEdragElement(tapeYellow);
  PIEdragElement(tapePoint);
  PIEsetDrag(tapeYellow,tapeYellowDragHandler);
  PIEsetDrag(tapePoint,tapePointDragHandler);
  /*tapeYellow.visible = false;
  tapeBlack.visible=false;
  tapePoint.visible=false;
  tapeInitialPoint.visible = false;
  tapeLine.visible = false;*/
}

function createTick() {
  var myImage = new THREE.ImageUtils.loadTexture('right.png',{},function(){PIErender();});
  var myMaterial = new THREE.MeshBasicMaterial({map:myImage, transparent: true});
  var myGeometry = new THREE.BoxGeometry(0.7,0.7,flatness);
  var myBox = new THREE.Mesh(myGeometry,myMaterial);
  myBox.position.set(6,0.4,0);
  PIEaddElement(myBox);
  PIErender();
  return(myBox);
}

function createCaution() {
  var myImage = new THREE.ImageUtils.loadTexture('caution.png',{},function(){PIErender();});
  var myMaterial = new THREE.MeshBasicMaterial({map:myImage, transparent: true});
  var myGeometry = new THREE.BoxGeometry(0.7,0.7,flatness);
  var myBox = new THREE.Mesh(myGeometry,myMaterial);
  myBox.position.set(6,0.4,0);
  PIEaddElement(myBox);
  PIErender();
  return(myBox);
}

function createCross() {
  var myImage = new THREE.ImageUtils.loadTexture('wrong.png',{},function(){PIErender();});
  var myMaterial = new THREE.MeshBasicMaterial({map:myImage, transparent: true});
  var myGeometry = new THREE.BoxGeometry(0.7,0.7,flatness);
  var myBox = new THREE.Mesh(myGeometry,myMaterial);
  myBox.position.set(6,0.4,0);
  PIEaddElement(myBox);
  PIErender();
  return(myBox);
}

function initializePanel() {
  var bitmap = document.createElement('canvas');
  var g = bitmap.getContext('2d');
  bitmap.width = 1024;
  bitmap.height = 1024;
  g.fillStyle = '#A4E3F4';
  g.fillRect(0,0,bitmap.width,bitmap.height);
  g.fillStyle = '#FFFFFF';
  g.fillRect(7,11,bitmap.width-14,bitmap.height-22);
  // canvas contents will be used for a texture
  var texture = new THREE.Texture(bitmap)
  texture.needsUpdate = true;
  //Create Box
  var myGeometry = new THREE.BoxGeometry(4.5,2.8,flatness);
  var myMaterial = new THREE.MeshBasicMaterial({map: texture});
  var textBox = new THREE.Mesh(myGeometry,myMaterial);
  textBox.position.set(11*myCenterX/10,9.5*myCenterY/10,bgZ+flatness);
  PIEaddElement(textBox);
  return textBox
}

function initializeLines() {
  xMax = 13.5*myCenterX/10;
  xMin = 5.4*myCenterX/10;
  yMin = myCenterY+1;
  yMax = myCenterY-1;
  /*plotLine(xMin,yMin,xMin,yMax,lineZ,2);
  plotLine(xMax,yMin,xMax,yMax,lineZ,2);
  plotLine(xMin,yMax,xMax,yMax,lineZ,2);
  plotLine(xMin,yMin,xMax,yMin,lineZ,2);*/
  var xA = getRandomArbitrary(xMin,xMax);
  var xB = getRandomArbitrary(xMin,xMax);
  var xC = getRandomArbitrary(xMin,xMax);
  var xD = getRandomArbitrary(xMin,xMax);
  var y1 = getRandomArbitrary(yMin,yMax);
  var y2 = getRandomArbitrary(yMin,yMax);
  var y3 = getRandomArbitrary(yMin,yMax);
  var y4 = getRandomArbitrary(yMin,yMax);
  var yA = Math.max(y1,y2);
  var yB = Math.min(y1,y2);
  var yC = Math.max(y3,y4);
  var yD = Math.min(y3,y4);
  lineAB = plotLine(xA,yA,xB,yB,lineZ,2);
  lineCD = plotLine(xC,yC,xD,yD,lineZ,2);
  pA = createCircle(xA,yA,lineZ,0.012,0x000000);
  pB = createCircle(xB,yB,lineZ,0.012,0x000000);
  pC = createCircle(xC,yC,lineZ,0.012,0x000000);
  pD = createCircle(xD,yD,lineZ,0.012,0x000000);
  PIEdragElement(pA);
  PIEdragElement(pB);
  PIEdragElement(pC);
  PIEdragElement(pD);
  /*PIEsetDrag(pA,function(element,newPos) {
    element.position.x = newPos.x;
    element.position.x = newPos.y;
  })*/
  createLineLabels();
  console.log(xMin+"<"+xA+"<"+xMax);
}

function createLineLabels() {
  labelA = initializeText("A");
  labelB = initializeText("B");
  labelC = initializeText("C");
  labelD = initializeText("D");
  alignLabels();
}

var ABText,CDText,ResultText;
function alignLabels() {
  labelA.position.x = pA.position.x - 0.05;
  labelA.position.y = pA.position.y + 0.05;

  labelB.position.x = pB.position.x + 0.05;
  labelB.position.y = pB.position.y - 0.05;

  labelC.position.x = pC.position.x - 0.05;
  labelC.position.y = pC.position.y + 0.05;

  labelD.position.x = pD.position.x + 0.05;
  labelD.position.y = pD.position.y - 0.05;
  PIErender();
}

function initializeText(text) {
  //Create Texture
  var bitmap = document.createElement('canvas');
  var g = bitmap.getContext('2d');
  bitmap.width = 512;
  bitmap.height = 512;
  //console.log("Canvas");
  //console.log(bitmap);
  g.fillStyle = '#f5efcf';
  g.fillRect(0,0,bitmap.width,bitmap.height);
  g.font = 'Bold 400px Arial';
  g.fillStyle = '#000000';
  g.fillText(text, 128,450);
  // canvas contents will be used for a texture
  var texture = new THREE.Texture(bitmap)
  texture.needsUpdate = true;
  //Create Box
  var myGeometry = new THREE.BoxGeometry(0.1,0.1,flatness);
  var myMaterial = new THREE.MeshBasicMaterial({map: texture});
  var textBox = new THREE.Mesh(myGeometry,myMaterial);
  textBox.position.set(myCenterX,myCenterY,lineZ-2*flatness);
  PIEaddElement(textBox);
  return(textBox);
}

function getRandomArbitrary(min, max) {
  return ((Math.random() * (max - min)) + min);
}

function generateRandomLines() {
  xMax = 12.5*myCenterX/10;
  xMin = 6.4*myCenterX/10;
  yMin = myCenterY+0.7;
  yMax = myCenterY-0.7;
  /*plotLine(xMin,yMin,xMin,yMax,lineZ,2);
  plotLine(xMax,yMin,xMax,yMax,lineZ,2);
  plotLine(xMin,yMax,xMax,yMax,lineZ,2);
  plotLine(xMin,yMin,xMax,yMin,lineZ,2);*/
  var xA = getRandomArbitrary(xMin,xMax);
  var xB = getRandomArbitrary(xMin,xMax);
  var xC = getRandomArbitrary(xMin,xMax);
  var xD = getRandomArbitrary(xMin,xMax);
  var y1 = getRandomArbitrary(yMin,yMax);
  var y2 = getRandomArbitrary(yMin,yMax);
  var y3 = getRandomArbitrary(yMin,yMax);
  var y4 = getRandomArbitrary(yMin,yMax);
  var yA = Math.max(y1,y2);
  var yB = Math.min(y1,y2);
  var yC = Math.max(y3,y4);
  var yD = Math.min(y3,y4);
  pA.position.x = xA;
  pA.position.y = yA;

  pB.position.x = xB;
  pB.position.y = yB;

  pC.position.x = xC;
  pC.position.y = yC;

  pD.position.x = xD;
  pD.position.y = yD;

  lineAB.geometry.vertices[0].x = xA;
  lineAB.geometry.vertices[0].y = yA;
  lineAB.geometry.vertices[1].x = xB;
  lineAB.geometry.vertices[1].y = yB;
  lineCD.geometry.vertices[0].x = xC;
  lineCD.geometry.vertices[0].y = yC;
  lineCD.geometry.vertices[1].x = xD;
  lineCD.geometry.vertices[1].y = yD;
  lineAB.geometry.verticesNeedUpdate = true;
  lineCD.geometry.verticesNeedUpdate = true;
  alignLabels();
  PIErender();
}

function findFirstDescendant()
{
   var descendants = document.getElementsByTagName("div");
   for(var i=0;i<descendants.length;i++) {
     if(descendants[i].draggable==true) {
       console.log(i);
       return(descendants[i]);
     }
   }
}

var scalePrevY = 0;
function scaleHandler(element,pos) {
  if(scalePrevY==0) {
    scalePrevY=pos.y;
  }
  //console.log(scalePrevY+"  pos "+pos.y);
  if(pos.y>scalePrevY) {
    scale.rotateZ(0.007);
    scaleAngle+=0.007
    PIErender();
  }
  else if(pos.y<scalePrevY) {
    scale.rotateZ(-0.007);
    scaleAngle-=0.007;
    PIErender();
  }
  if(scaleAngle>=2*Math.PI)
    scaleAngle-=2*Math.PI;
  else if(scaleAngle<0)
    scaleAngle+=2*Math.PI;
  scalePrevY=pos.y;
  PIEchangeInputSlider(angleLabel,scaleAngle*180/Math.PI);
}

function scaleEnd() {
  scalePrevY=0;
}

function scaleKnobHandler(element,pos) {
  element.position.x =pos.x;
  element.position.y =pos.y;
  scale.position.x = pos.x;
  scale.position.y = pos.y;
  PIErender();
}

function createInitialText() {
  //Create Texture
  var bitmap = document.createElement('canvas');
  var g = bitmap.getContext('2d');
  bitmap.width = 1024;
  bitmap.height = 1024;
  //console.log("Canvas");
  //console.log(bitmap);
  g.fillStyle = '#f7efd0';
  g.fillRect(0,0,bitmap.width,bitmap.height);
  g.font = 'Bold 60px Arial';
  g.fillStyle = '#000000';
  g.fillText("PRESS START TO CONTINUE", 75,360);
  g.fillText("OR", 445,430);
  g.fillText("PRESS 'QUIZ' TO PLAY", 170,500);
  // canvas contents will be used for a texture
  var texture = new THREE.Texture(bitmap)
  texture.needsUpdate = true;
  //Create Box
  var myGeometry = new THREE.BoxGeometry(2,2,0.0001);
  var myMaterial = new THREE.MeshBasicMaterial({map: texture});
  var textBox = new THREE.Mesh(myGeometry,myMaterial);
  textBox.position.set(myCenterX,myCenterY,0.2);
  PIEaddElement(textBox);
  return textBox
}

function setScaleDrag() {
  scaleKnob =createCircle(scale.position.x,scale.position.y,lineZ+2*flatness,0.045,0x555555);
  PIEdragElement(scaleKnob);
  PIEsetDrag(scaleKnob,scaleKnobHandler);
  PIEdragElement(scale);
  PIEsetDragEnd(scale,scaleEnd);
  PIEsetDrag(scale,scaleHandler);
}

function createButtonAB() {
  var myImage = new THREE.ImageUtils.loadTexture('ab.png',{},function(){PIErender();});
  var myMaterial = new THREE.MeshBasicMaterial({map:myImage,transparent:true});
  var myGeometry = new THREE.BoxGeometry(0.6,0.6,flatness);
  var myBox = new THREE.Mesh(myGeometry,myMaterial);
  myBox.position.set(myCenterX-1.5,2.5*myCenterY/10,lineZ);
  PIEaddElement(myBox);
  buttonAB=myBox;
  PIErender();
}

function createButtonCD() {
  var myImage = new THREE.ImageUtils.loadTexture('cd.png',{},function(){PIErender();});
  var myMaterial = new THREE.MeshBasicMaterial({map:myImage,transparent:true});
  var myGeometry = new THREE.BoxGeometry(0.6,0.6,flatness);
  var myBox = new THREE.Mesh(myGeometry,myMaterial);
  myBox.position.set(myCenterX+1.3,2.5*myCenterY/10,lineZ);
  PIEaddElement(myBox);
  buttonCD=myBox;
  PIErender();
}

function createButtonEQ() {
  var myImage = new THREE.ImageUtils.loadTexture('eq.png',{},function(){PIErender();});
  var myMaterial = new THREE.MeshBasicMaterial({map:myImage,transparent:true});
  var myGeometry = new THREE.BoxGeometry(0.6,0.6,flatness);
  var myBox = new THREE.Mesh(myGeometry,myMaterial);
  myBox.position.set(myCenterX,2.5*myCenterY/10,lineZ);
  PIEaddElement(myBox);
  buttonEQ=myBox;
  PIErender();
}

function createQuizButton() {
  var myImage = new THREE.ImageUtils.loadTexture('quiz.png',{},function(){PIErender();});
  var myMaterial = new THREE.MeshBasicMaterial({map:myImage,transparent:true});
  var myGeometry = new THREE.BoxGeometry(1,1,flatness);
  var myBox = new THREE.Mesh(myGeometry,myMaterial);
  myBox.position.set(myCenterX,myCenterY-0.25,0.3);
  PIEaddElement(myBox);
  buttonEQ=myBox;
  PIEdragElement(myBox);
  //PIEsetDrag(myBox,function(){})
  PIEsetDragEnd(myBox,startQuiz);
  PIErender();
  return(myBox);
}

function createButtons() {
  createButtonAB();
  createButtonCD();
  createButtonEQ();
  PIEdragElement(buttonAB);
  PIEdragElement(buttonCD);
  PIEdragElement(buttonEQ);
  PIEsetDragEnd(buttonAB,abHandler);
  PIEsetDragEnd(buttonCD,cdHandler);
  PIEsetDragEnd(buttonEQ,eqHandler);
}

function createDivs() {
  ABText = document.createElement('div');
  ABText.style.position = 'absolute';
  ABText.style.width = 100;
  ABText.style.height=100;
  ABText.style.zIndex=1;
  ABText.innerHTML = "AB = 5cm";
  ABText.style.fontSize = 200+'%';
  ABText.style.top = 60+'%';
  ABText.style.left = 78+'%';
  ABText.style.visibility = 'hidden';
  document.body.appendChild(ABText);

  CDText = document.createElement('div');
  CDText.style.position = 'absolute';
  CDText.style.width = 100;
  CDText.style.height=100;
  CDText.style.zIndex=1;
  CDText.innerHTML = "CD = 5cm";
  CDText.style.fontSize = 200+'%';
  CDText.style.top = 65+'%';
  CDText.style.left = 78+'%';
  CDText.style.visibility = 'hidden';
  document.body.appendChild(CDText);

  ResultText = document.createElement('div');
  ResultText.style.position = 'absolute';
  ResultText.style.width = 100;
  ResultText.style.height=100;
  ResultText.style.zIndex=1;
  ResultText.innerHTML = "AB is longer";
  ResultText.style.fontSize = 200+'%';
  ResultText.style.top = 70+'%';
  ResultText.style.left = 78+'%';
  ResultText.style.visibility = 'hidden';
  document.body.appendChild(ResultText);

}

function loadExperimentElements() {
  PIEsetExperimentTitle(experimentName);
  PIEsetDeveloperName(myName);
  PIEupdateHelp(helpString);
  PIEupdateInfo(infoString);
  initializeScene();
  initializeWallpaper()
  initializeGUIElements();
  initializeTable();
  initializeZIndices();
  initializeLines();
  scale = initializeScale();
  tick=createTick();
  caution = createCaution();
  setScaleDrag();
  initialText=createInitialText();
  tick.visible= false;
  cross = createCross();
  cross.visible = false;
  caution.visible = false;
  quizButton = createQuizButton();
  console.log(quizButton+" QB");
  observationTable=findFirstDescendant();
  createButtons();
  getInputReferences();
  createDivs();
  //hideAnimation();
  observationTable.style.visibility = 'hidden';
  PIEsetAreaOfInterest(mySceneTLX,mySceneTLY,mySceneBRX,mySceneBRY);
}

function hideAnimation() {
  PIEstartButton.style.visibility = 'hidden';
  /*PIEpauseButton.style.visibility = 'hidden';
  PIEspeedupButton.style.visibility = 'hidden';
  PIEslowdownButton.style.visibility = 'hidden';
  siblings =PIEstartButton.parentNode.getElementsByTagName("span");
  for(var i=0;i<siblings.length;i++)
    if(siblings[i].innerHTML=='1')
      siblings[i].innerHTML=" ";*/
}

function getInputReferences() {
  actualTable=observationTable.getElementsByTagName("div")[1].getElementsByTagName("table");
  console.log(actualTable[0].rows.length);
  input1 = actualTable[0].rows[1].cells[1].getElementsByTagName("input")[0];
  input2 = actualTable[0].rows[2].cells[1].getElementsByTagName("input")[0];
  console.log(input1);
}

function isSec(t) {
  var sec=Math.round(t/1000);
  if(prevVal!=sec) {
    prevVal=sec;
    return(sec);
  }
  return(-1);
}

function resetExperiment() {
  wallpaper.position.z = 0;
  initialText.visible = true;
  observationTable.style.visibility = 'hidden';
  quizButton.visible = true;
  quizButton.position.z = 0.3;
  ABdrawn = false;
  ABrotated=false;
  ABretracted=false;
  resetHandler();
  ABpause=false;
  CDdrawn=false;
  CDrotated = false;
  CDretracted = false;
  CDpause=false;
  moveBack=false;
  tStart=0;
  started = false;
  CDText.style.visibility = 'hidden';
  ABText.style.visibility = 'hidden';
  ResultText.style.visibility = 'hidden';
  prevVal = -1;
  PIErender();
}

var started = false;
var prevVal = -1;
var BFinal;
var DFinal;
arrayAx = [2.922,2.2076];
arrayAy = [2.308,2.1905];
arrayBx = [3.351,2.4312];
arrayBy = [0.8656,1.4059];
arraySxAB = [2.904,2.208];
arraySyAB = [1.263,1.1237];
arrayAngleAB = [17,16];
arrayLAB = [7.2,3.8];

arrayCx = [4.316,4.4585];
arrayCy = [2.1757,2.6038];
arrayDx = [4.9113,4.8462];
arrayDy = [1.2005,0.8447];
arraySxCD = [4.571,4.3574];
arraySyCD = [1.1449,1.5437];
arrayLCD = [5.4,8.6];
arrayAngleCD = [32,12];
ABindex = 0;
CDindex = 0;
var ABdrawn = false;
var ABrotated=false;
var ABretracted=false;
var ABpause=false;
var CDdrawn=false;
var CDrotated = false;
var CDretracted = false;
var CDpause=false;
var moveBack=false;
var tStart=0;
var iX,iY;
function updateExperimentElements(t,dt) {
  var secTrigger = isSec(t);
  var sec = t/1000;

  //At Start
  if(sec>0&&started == false) {
    console.log("Started");
    started=true;
    generateRandomLines();
    alignLabels();
    observationTable.style.visibility = 'hidden';
    initialText.visible = false;
    wallpaper.position.z = bgZ;
    buttonAB.visible = false;
    buttonCD.visible = false;
    buttonEQ.visible = false;
    quizButton.visible=false;
    ABindex = getRandomArbitrary2(0,1);
    CDindex = getRandomArbitrary2(0,1);
    console.log(ABindex);
    pA.position.x = arrayAx[ABindex];
    pA.position.y = arrayAy[ABindex];
    pB.position.x = arrayBx[ABindex];
    pB.position.y = arrayBy[ABindex];
    lineAB.geometry.vertices[0] = pA.position;
    lineAB.geometry.vertices[1] = pB.position;
    lineAB.geometry.verticesNeedUpdate=true;
    pC.position.x = arrayCx[CDindex];
    pC.position.y = arrayCy[CDindex];
    pD.position.x = arrayDx[CDindex];
    pD.position.y = arrayDy[CDindex];
    resetHandler();
    lineCD.geometry.vertices[0] = pC.position;
    lineCD.geometry.vertices[1] = pD.position;
    lineCD.geometry.verticesNeedUpdate=true;
    iX = scale.position.x;
    iY = scale.position.y;
    alignLabels();
  }
  //Draw scale to AB
  if(started==true&&ABdrawn==false) {
    delta = sec-0;
    if(delta<1.5) {
      scale.position.x = iX + delta*(arraySxAB[ABindex]-iX)/1.5;
      scale.position.y = iY + delta*(arraySyAB[ABindex]-iY)/1.5;
      scaleKnob.position.x=scale.position.x;
      scaleKnob.position.y=scale.position.y;
    }
    else {
      scale.position.x = arraySxAB[ABindex];
      scale.position.y = arraySyAB[ABindex];
      ABdrawn=true;
      tStart = sec;
      scaleKnob.position.x=scale.position.x;
      scaleKnob.position.y=scale.position.y
    }
  }
  //rotate
  if(ABdrawn==true&&ABrotated==false) {
    console.log("Rotating");
    delta = sec - tStart;
    iAngle = 0;
    fAngle = arrayAngleAB[ABindex]*Math.PI/180;
    dr = (fAngle-iAngle)/50;
    scale.rotateZ(dr);
    scaleAngle+=dr;
    if(scaleAngle>=2*Math.PI)
      scaleAngle-=2*Math.PI;
    if(scaleAngle>fAngle) {
      ABrotated=true;
      scale.rotateZ(fAngle-scaleAngle);
      tStart = sec;
      ABText.style.visibility = 'visible';
      ABText.innerHTML = "AB = "+arrayLAB[ABindex]+"cm";
    }
  }

  if(ABpause==false && ABrotated==true) {
    delta = sec-tStart;
    if(delta>2)
      ABpause = true;
  }

  //retract
  if(ABpause==true&&ABretracted==false) {
    iAngle = arrayAngleAB[ABindex]*Math.PI/180;;
    fAngle = 0;
    dr = (fAngle-iAngle)/50;
    scale.rotateZ(dr);
    scaleAngle+=dr;
    if(scaleAngle<0) {
      ABretracted=true;
      scale.rotateZ(fAngle-scaleAngle);
      scaleAngle=0;
      iX = scale.position.x;
      iY = scale.position.y;
      tStart=sec;
    }
  }

  //Draw to CD
  if(ABretracted==true&&CDdrawn==false) {
    delta = sec-tStart;
    if(delta<1.5) {
      scale.position.x = iX + delta*(arraySxCD[CDindex]-iX)/1.5;
      scale.position.y = iY + delta*(arraySyCD[CDindex]-iY)/1.5;
      scaleKnob.position.x=scale.position.x;
      scaleKnob.position.y=scale.position.y;
    }
    else {
      scale.position.x = arraySxCD[CDindex];
      scale.position.y = arraySyCD[CDindex];
      CDdrawn=true;
      tStart = sec;
      scaleKnob.position.x=scale.position.x;
      scaleKnob.position.y=scale.position.y
    }
  }
  //rotate AB
  if(CDdrawn==true&&CDrotated==false) {
    console.log("Rotating");
    delta = sec - tStart;
    iAngle = 0;
    fAngle = arrayAngleCD[CDindex]*Math.PI/180;
    dr = (fAngle-iAngle)/50;
    scale.rotateZ(dr);
    scaleAngle+=dr;
    if(scaleAngle>=2*Math.PI)
      scaleAngle-=2*Math.PI;
    if(scaleAngle>fAngle) {
      CDrotated=true;
      scale.rotateZ(fAngle-scaleAngle);
      tStart = sec;
      CDText.style.visibility = 'visible';
      CDText.innerHTML = "CD = "+arrayLCD[CDindex]+"cm";
    }
  }

  if(CDpause==false && CDrotated==true) {
    delta = sec-tStart;
    if(delta>2)
      CDpause = true;
  }


  //retract CD
  if(CDpause==true&&CDretracted==false) {
    iAngle = arrayAngleCD[CDindex]*Math.PI/180;
    fAngle = 0;
    dr = (fAngle-iAngle)/50;
    scale.rotateZ(dr);
    scaleAngle+=dr;
    if(scaleAngle<0) {
      CDretracted=true;
      scale.rotateZ(fAngle-scaleAngle);
      iX = scale.position.x;
      iY = scale.position.y;
      scaleAngle=0;
      tStart=sec;

    }
  }
  //Move Back
  if(CDretracted ==true&&moveBack==false) {
    delta = sec-tStart;
    if(delta<4) {
      scale.position.x = iX + delta*(1.577-iX)/4;
      scale.position.y = iY + delta*(1.2-iY)/4;
      scaleKnob.position.x = scale.position.x;
      scaleKnob.position.y = scale.position.y;
    }
    if(delta>4) {
      moveBack=true;
      scale.position.x = 1.577;
      scale.position.y = 1.2;
      scaleKnob.position.x = scale.position.x;
      scaleKnob.position.y = scale.position.y;
      ResultText.style.visibility = 'visible';
      var nim;
      if(arrayLAB[ABindex]>arrayLCD[CDindex]) {
        console.log(arrayLAB[ABindex]+ " "+arrayLCD[CDindex]);
        nim = "AB";
      }
      else {
        nim = "CD";
      }
      ResultText.innerHTML = nim+" is longer.";
    }
  }

}

function getRandomArbitrary2(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
