
var myExperimentTitle = "Single Digit Addition";
var myName = "Amarnath Karthi";
var helpString = "<h2>Single Digit Addition</h2><h3>About</h3><p> This activity lets you play with numbers and addition</p><h3>How to Play</h3><p>You can set the 2 and then press start to see the addition. Or you can play the addition game by pressing 'Quiz'. When you are playing choose the right answer to go to next level</p><h3>Happy Playing!</h3>"

var infoString = "<h2>Single Digit Addition : Info</h2><p> Addition is a math operation. Its symbol is +, known as 'Plus'. 0 is a special number. Any number added to 0 remains unchanged</p><p> Now let us study addition in detail. </p><h3>Examples</h3><ul><li>2 + 2 = 4</li><li>7 + 3 = 10</li><li>0 + 0 = 0</li><li>0 + 1 = 1</li><ul>";

//Scene variables
var mySceneTLX;
var mySceneTLY;
var mySceneBRX;
var mySceneBRY;
var myCenterX;
var myCenterY;
var mySceneW;
var mySceneH;
var initialText;
var messageBox;
var tempMaterial;
//GUI
var input1Label = "First Number";
var input2Label = "Second Number";
var input1Default = "9";
var input2Default = "9";

var options = new Array(18);

var wallpaperZ = -0.2
var backGroundColor = 0xf0e0aa;
var num1=9;
var num2=9;

var numberLine;
var numberLineX1 = 2;
var numberLineY1 = 1;
var numberLineX2 = 6;
var numberLineY2 = 1;
var numberLineZ = -0.001;
var numberLineStart = numberLineX1+0.2;
var numberLineEnd = numberLineX2-0.2;
var numberLineTicks = new Array(19);
var numberLineLabels = new Array(19);
var tickSize = 0.02;
var myBall;
var myBallRadius =0.07;
var myBallColor = 0xe91e63;

var chocolateColor = 0x661e00;
var chocolateZ = wallpaperZ + 0.01;
var chocolateHeight = 0.35;
var chocolateWidth = 0.35;
var chocolateSpaceX = 0;
var chocolateSpaceY = 0;
var chocolateRows = 3;
var chocolateColumns = 6;
var chocolateStartX;
var chocolateStartY;
var chocolates = new Array(18);
var chocolateImage;
var chocoMaterial;

var holder1;
var plus;
var holder2;
var holder1X;
var holder1Y;
var holder2X;
var holder2Y;
var plusX;
var plusY;
var answer;
var answerX;
var answerY;
var panelBack;
var panelZ= -0.0002;
var wallpaper;
var row1Y;
var row2Y;
var row3Y;
var candyX = 1.74;
var row1 = new Array(9);
var row2 = new Array(9);
var row3 = new Array(18);
var positionX = new Array(18);
var positionY = new Array(18);
var icon = new Array(7);
var correct;
var tick;
var cross;
//Helpers

var optionW = 0.25;
var optionSpace = 0.04;
var optionX = 5.85;
var optionY = 2.38;
var optionZ = 0;

function isSec(t) {
  var sec=Math.round(t/1000);
  if(prevVal!=sec) {
    prevVal=sec;
    return(sec);
  }
  return(-1);
}

//Handlers
function input1Handler(val) {
  num1 = Number(val);
  num1 = num1%10;
  console.log(" Num 1 " + num1);
  req = false;
}

function input2Handler(val) {
  num2 = Number(val);
  num2 = num2%10;
  console.log(" Num 2 " + num2);
  req=false;
}

function initializeScene() {
  mySceneTLX = 0.0;
  mySceneTLY = 3.0;
  mySceneBRX = 8;
  mySceneBRY = 0.0;
  myCenterX = (mySceneTLX+mySceneBRX)/2;
  myCenterY = (mySceneTLY+mySceneBRY)/2;
  mySceneW   = (mySceneBRX - mySceneTLX);
  mySceneH   = (mySceneTLY - mySceneBRY);

  holder1X = mySceneW*6.5/10;
  holder2X = holder1X;
  plusX = holder2X;

  holder1Y = mySceneH*8/10;
  plusY = mySceneH*6.5/10;
  holder2Y = mySceneH*5/10;

  answerX = holder1X;
  answerY = mySceneH*2/10;
}

function initializeInputGUI() {
  PIEaddInputText(input1Label,input1Default,input1Handler);
  PIEaddInputText(input2Label,input2Default,input2Handler);
  PIEaddInputCommand("Quiz",startQuiz);
  //PIEaddInputText("Answer","-",evalAnswer);
}

function evalAnswer(number) {
  /*if(quizStarted==false)
    return(1);*/
  var t = Number(number);
  if(t==correct) {
    cross.position.z =10;
    tick.position.z = 0;
    setAnswer(true,number);
    setTimeout(startQuiz,1000);
  }
  else {
    cross.position.z =0;
    tick.position.z = 10;
    setAnswer(false,number);
  }
  PIErender();
}

function setAnswer(stat,number) {
  holder=answer;
  var bitmap = document.createElement('canvas');
  var g = bitmap.getContext('2d');
  bitmap.width = 1024;
  bitmap.height = 1024;
  //console.log("Canvas");
  //console.log(bitmap);
  g.fillStyle = '#A4E3F4';
  g.fillRect(0,0,bitmap.width,bitmap.height);
  g.fillStyle = '#FFFFFF';
  g.fillRect(30,30,bitmap.width-60,bitmap.height-60);
  g.font = 'Bold 60px Arial';
  if(stat==true)
    g.fillStyle = '#00FF00';
  else {
    g.fillStyle = "#FF0000"
  }
  g.font = 'Bold 850px Arial';
  if(number<=9||number=="?")
    g.fillText(number+"",250,800);
  if(number>9)
    g.fillText(number+"",30,800);
  // canvas contents will be used for a texture
  var texture = new THREE.Texture(bitmap)
  texture.needsUpdate = true;
  holder.material.map.dispose();
  holder.material.map = texture;
  holder.material.needsUpdate = true;
}

function generateNumber() {
  min=1;
  max = 9;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startQuiz() {
  resetExperiment();
  quizStarted = true;
  initialText.position.z =10;
  var l = generateNumber();
  var m = generateNumber();
  cross.position.z =10;
  tick.position.z = 10;
  putCandy(l,m,l+m);
  hideWallpaper();
  arrangeOptions(-1);
  PIErender();
}

function putCandy(n1,n2,n3) {
  num1 = n1;
  num2 = n2;
  PIEchangeInputText(input1Label,num1);
  PIEchangeInputText(input2Label,num2);
  correct = n1+n2;
  for(var i=0;i<n1;i++)
    row1[i].position.z = panelZ;
  for(var i=0;i<n2;i++)
    row2[i].position.z = panelZ;
  for(var i=0;i<n3;i++)
    row3[i].position.z = panelZ;
  updateNumber(holder1,n1);
  updateNumber(holder2,n2);
  updateNumber(answer,"?");
}

function initializeChocolates() {
  chocolateStartX = 2*mySceneW/10;
  chocolateStartY = 8.5*mySceneH/10;
  var count=0;
  for(var i=0;i<chocolateRows;i++) {
    for(var j=0;j<chocolateColumns;j++) {
      var currentX = chocolateStartX + j*(chocolateWidth+chocolateSpaceX);
      var currentY = chocolateStartY - i*(chocolateHeight+chocolateSpaceY);
      chocolates[count]=createRectangle(chocolateWidth,chocolateHeight,currentX,currentY,chocolateColor);
      count++;
    }
  }
}

function initializeAngleText(text) {
  //Create Texture
  if(text-10>=0)
    text = " "+text;
  else
    text = "  "+text;
  var bitmap = document.createElement('canvas');
  var g = bitmap.getContext('2d');
  bitmap.width = 512;
  bitmap.height = 512;
  //console.log("Canvas");
  //console.log(bitmap);
  g.fillStyle = '#88ffff';
  g.fillRect(0,0,bitmap.width,bitmap.height);
  g.font = 'Bold 175px Arial';
  g.fillStyle = '#000000';
  g.fillText(text, 100,300);
  // canvas contents will be used for a texture
  var texture = new THREE.Texture(bitmap)
  texture.needsUpdate = true;
  //Create Box
  var myGeometry = new THREE.BoxGeometry(0.15,0.15,-0.002);
  var myMaterial = new THREE.MeshBasicMaterial({map: texture});
  var textBox = new THREE.Mesh(myGeometry,myMaterial);
  textBox.position.set(myCenterX,myCenterY,-0.0001);
  PIEaddElement(textBox);
  return(textBox);
}

function initializeNumberLine() {
  numberLine=plotLine(numberLineX1,numberLineY1,numberLineX2,numberLineY2,2);
  //Generate Labels
  for(var i=0;i<19;i++) {
    posX = numberLineStart + i * (numberLineEnd - numberLineStart)/18;
    posY1 = numberLineY1 - tickSize/2;
    posY2 = numberLineY1 + tickSize/2;
    numberLineTicks[i] = plotLine(posX,posY1,posX,posY2,1);
    var label = initializeAngleText(i);
    label.position.x = posX;
    label.position.y = posY2-0.07;
    numberLineLabels[i]=label;
    removeTick(i);
  }
}

function removeTick(index) {
  numberLineLabels[index].position.z = 10;
  numberLineTicks[index].geometry.vertices[1].y = numberLineTicks[index].geometry.vertices[0].y;
  numberLineTicks[index].geometry.verticesNeedUpdate = true;
}

function showTick(index) {
  numberLineLabels[index].position.z = -0.001;
  numberLineTicks[index].geometry.vertices[1].y =  numberLineTicks[index].geometry.vertices[0].y+tickSize;
  numberLineTicks[index].geometry.verticesNeedUpdate = true;
}

function removeNumberLine() {
  numberLine.geometry.vertices[1].x = numberLine.geometry.vertices[0].x;
  numberLine.geometry.verticesNeedUpdate = true;
}

function removeChocolates() {
  for(var i=0;i<18;i++)
    chocolates[i].position.z = 10;
}

function showChocolate(index) {
  chocolates[index].position.z = chocolateZ;
}

function createRectangle(l,b,x,y,color) {
  var myGeometry = new THREE.BoxGeometry(l,b,0.0002);
  var myRectangle = new THREE.Mesh(myGeometry,tempMaterial);
  myRectangle.position.set(x,y,10);
  myRectangle.material.needsUpdate = true;
  PIEaddElement(myRectangle);
  return(myRectangle);
}

function plotLine(x1,y1,x2,y2,thickness) {
  var myGeometry = new THREE.Geometry();
  var p1 = new THREE.Vector3(x1,y1,panelZ+0.00001);
  var p2 = new THREE.Vector3(x2,y2,panelZ+0.00001);
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
  return(line);
}

function createBackground() {
  var myGeometry = new THREE.BoxGeometry(mySceneW,mySceneH,0.001);
  var myMaterial = new THREE.MeshBasicMaterial();
  var myBack = new THREE.Mesh(myGeometry,myMaterial);
  myBack.position.set(myCenterX,myCenterY,wallpaperZ);
  myBack.material.color = new THREE.Color(backGroundColor);
  myBack.material.needsUpdate = true;
  PIEaddElement(myBack);
  return(myBack);
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
  g.fillText("ENTER 2 NUMBERS", 220,360);
  g.fillText("AND", 425,430);
  g.fillText("PRESS START TO CONTINUE", 75,500);
  g.fillText("OR", 445,570);
  g.fillText("PRESS 'QUIZ' TO PLAY", 170,640);
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

function clearMessageBox() {
  var bitmap = document.createElement('canvas');
  var g = bitmap.getContext('2d');
  bitmap.width = 1024;
  bitmap.height = 1024;
  g.fillStyle = '#88ffff';
  g.fillRect(0,0,bitmap.width,bitmap.height);
  // canvas contents will be used for a texture
  var texture = new THREE.Texture(bitmap)
  texture.needsUpdate = true;
  //Create Box
  var myMaterial = new THREE.MeshBasicMaterial({map: texture});
  messageBox.material = myMaterial;
}

function setFinalMessage(number,mode) {
  sum=num1+num2
  var bitmap = document.createElement('canvas');
  var g = bitmap.getContext('2d');
  bitmap.width = 1024;
  bitmap.height = 1024;
  g.fillStyle = '#88FFFF';
  g.fillRect(0,0,bitmap.width,bitmap.height);
  g.font = 'Bold 60px Arial';
  g.fillStyle = '#000000';
  if(mode==0)
    g.fillText("YOU HAD",350,130);
  if(mode==1||mode==3)
    g.fillText("YOU HAVE TOTAL",250,130);
  if(mode==2)
    g.fillText("I GAVE YOU", 330,130);
  g.font = 'Bold 600px Arial';
  if(mode==2)
    g.fillStyle = "#FF2222";
  if(number>=10)
    g.fillText(number+"", 120,600);
  if(number<10)
    g.fillText(number+"", 320,600);
  g.fillStyle = "#000000";
  g.font = 'Bold 60px Arial';
  if(number!=1)
    g.fillText("CHOCOLATES", 280,700);
  if(number==1)
    g.fillText("CHOCOLATE", 300,700);
  if(mode==3)
    g.fillText(num1+"+"+num2+"="+number,350,820)
  // canvas contents will be used for a texture
  // canvas contents will be used for a texture
  var texture = new THREE.Texture(bitmap)
  texture.needsUpdate = true;
  //Create Box
  messageBox.material.map.dispose();
  messageBox.material.map = texture;
  messageBox.material.map.needsUpdate =true;
  messageBox.material.needsUpdate = true;
}

function setMessage(number,mode) {
  var bitmap = document.createElement('canvas');
  var g = bitmap.getContext('2d');
  bitmap.width = 1024;
  bitmap.height = 1024;
  //console.log("Canvas");
  //console.log(bitmap);
  g.fillStyle = '#88FFFF';
  g.fillRect(0,0,bitmap.width,bitmap.height);
  g.font = 'Bold 60px Arial';
  g.fillStyle = '#000000';
  if(mode==0)
    g.fillText("YOU HAVE",340,130);
  if(mode==1)
    g.fillText("NOW YOU HAVE",250,130);
  if(mode==2)
    g.fillText("I GIVE YOU", 330,130);
  g.font = 'Bold 600px Arial';
  if(number>=10)
    g.fillText(number+"", 120,600);
  if(number<10)
    g.fillText(number+"", 320,600);
  g.font = 'Bold 60px Arial';
  if(number!=1)
    g.fillText("CHOCOLATES", 280,700);
  if(number==1)
    g.fillText("CHOCOLATE", 300,700);
  // canvas contents will be used for a texture
  var texture = new THREE.Texture(bitmap)
  texture.needsUpdate = true;
  //Create Box
  messageBox.material.map.dispose();
  messageBox.material.map = texture;
  messageBox.material.map.needsUpdate =true;
  messageBox.material.needsUpdate = true;
}

function createMessageBox(number,mode) {
  //Create Texture
  var bitmap = document.createElement('canvas');
  var g = bitmap.getContext('2d');
  bitmap.width = 1024;
  bitmap.height = 1024;
  //console.log("Canvas");
  //console.log(bitmap);
  g.fillStyle = '#88FFFF';
  g.fillRect(0,0,bitmap.width,bitmap.height);
  g.font = 'Bold 60px Arial';
  g.fillStyle = '#000000';
  if(mode==0)
    g.fillText("YOU HAVE",340,100);
  if(mode==1)
    g.fillText("NOW YOU HAVE",250,100);
  if(mode==2)
    g.fillText("I GIVE YOU", 330,100);
  g.font = 'Bold 150px Arial';
  if(number>=10)
    g.fillText(number+"", 250,430);
  if(number<10)
    g.fillText(number+"", 270,430);
  g.font = 'Bold 60px Arial';
  if(number!=1)
    g.fillText("CHOCOLATES", 280,760);
  if(number==1)
    g.fillText("CHOCOLATE", 300,760);
  // canvas contents will be used for a texture
  var texture = new THREE.Texture(bitmap)
  texture.needsUpdate = true;
  //Create Box
  var myGeometry = new THREE.BoxGeometry(2,2,0.0001);
  var myMaterial = new THREE.MeshBasicMaterial({map: texture});
  var textBox = new THREE.Mesh(myGeometry,myMaterial);
  textBox.position.set(myCenterX+0.3,myCenterY+0.5,chocolateZ-0.003);
  PIEaddElement(textBox);
  return textBox
}

function plotPoint(x,y) {
  var myGeometry=new THREE.CircleGeometry(myBallRadius,32);
  var myMaterial= new THREE.MeshBasicMaterial();
  var myCircle = new THREE.Mesh(myGeometry,myMaterial);
  myCircle.position.set(x,y,-0.00001);
  myCircle.material.color = new THREE.Color(myBallColor);
  myCircle.material.needsUpdate = true;
  PIEaddElement(myCircle);
  return(myCircle);
}

function createHolder1(number) {
  //Create Texture
  var bitmap = document.createElement('canvas');
  var g = bitmap.getContext('2d');
  bitmap.width = 1024;
  bitmap.height = 1024;
  //console.log("Canvas");
  //console.log(bitmap);
  g.fillStyle = '#FFFFFF';
  g.fillRect(0,0,bitmap.width,bitmap.height);
  g.font = 'Bold 60px Arial';
  g.fillStyle = '#000000';
  g.font = 'Bold 850px Arial';
  if(number<=9)
    g.fillText(number+"",250,800);
  if(number>10)
    g.fillText(number+"",30,800);
  // canvas contents will be used for a texture
  var texture = new THREE.Texture(bitmap)
  texture.needsUpdate = true;
  //Create Box
  var myGeometry = new THREE.BoxGeometry(0.5,0.5,0.0001);
  var myMaterial = new THREE.MeshBasicMaterial({map: texture});
  var textBox = new THREE.Mesh(myGeometry,myMaterial);
  textBox.position.set(myCenterX,myCenterY,panelZ);
  PIEaddElement(textBox);
  return textBox
}

function createHolder2(number) {
  //Create Texture
  var bitmap = document.createElement('canvas');
  var g = bitmap.getContext('2d');
  bitmap.width = 1024;
  bitmap.height = 1024;
  //console.log("Canvas");
  //console.log(bitmap);
  g.fillStyle = '#FFFFFF';
  g.fillRect(0,0,bitmap.width,bitmap.height);
  g.font = 'Bold 60px Arial';
  g.fillStyle = '#000000';
  g.font = 'Bold 850px Arial';
  if(number<=9)
    g.fillText(number+"",250,800);
  if(number>10)
    g.fillText(number+"",30,800);
  // canvas contents will be used for a texture
  var texture = new THREE.Texture(bitmap)
  texture.needsUpdate = true;
  //Create Box
  var myGeometry = new THREE.BoxGeometry(0.5,0.5,0.0001);
  var myMaterial = new THREE.MeshBasicMaterial({map: texture});
  var textBox = new THREE.Mesh(myGeometry,myMaterial);
  textBox.position.set(myCenterX,myCenterY,panelZ);
  PIEaddElement(textBox);
  return textBox
}

function createAnswer() {
  //Create Texture
  number=18
  var bitmap = document.createElement('canvas');
  var g = bitmap.getContext('2d');
  bitmap.width = 1024;
  bitmap.height = 1024;
  //console.log("Canvas");
  //console.log(bitmap);
  g.fillStyle = '#FFFFFF';
  g.fillRect(0,0,bitmap.width,bitmap.height);
  g.font = 'Bold 60px Arial';
  g.fillStyle = '#0000FF';
  g.font = 'Bold 850px Arial';
  if(number<=9)
    g.fillText(number+"",250,800);
  if(number>10)
    g.fillText(number+"",30,800);
  // canvas contents will be used for a texture
  var texture = new THREE.Texture(bitmap)
  texture.needsUpdate = true;
  //Create Box
  var myGeometry = new THREE.BoxGeometry(0.5,0.5,0.0001);
  var myMaterial = new THREE.MeshBasicMaterial({map: texture});
  var textBox = new THREE.Mesh(myGeometry,myMaterial);
  textBox.position.set(myCenterX,myCenterY,panelZ);
  PIEaddElement(textBox);
  return textBox
}

function createPlus() {
  //Create Texture
  var bitmap = document.createElement('canvas');
  var g = bitmap.getContext('2d');
  bitmap.width = 1024;
  bitmap.height = 1024;
  //console.log("Canvas");
  //console.log(bitmap);
  g.fillStyle = '#ffefcc';
  g.fillRect(0,0,bitmap.width,bitmap.height);
  g.font = 'Bold 60px Arial';
  g.fillStyle = '#0000FF';
  g.font = 'Bold 850px Arial';
  g.fillText("+",250,800);
  // canvas contents will be used for a texture
  var texture = new THREE.Texture(bitmap)
  texture.needsUpdate = true;
  //Create Box
  var myGeometry = new THREE.BoxGeometry(0.2,0.2,0.0001);
  var myMaterial = new THREE.MeshBasicMaterial({map: texture});
  var textBox = new THREE.Mesh(myGeometry,myMaterial);
  textBox.position.set(myCenterX,myCenterY,panelZ);
  PIEaddElement(textBox);
  return textBox
}

function createPanelBack() {
  var myGeometry = new THREE.BoxGeometry(4.2,2.6,0.0001);
  var myMaterial = new THREE.MeshBasicMaterial({color:0xf0e0aa});
  var textBox = new THREE.Mesh(myGeometry,myMaterial);
  textBox.position.set(myCenterX-0.5,myCenterY,panelZ-0.0001);
  PIEaddElement(textBox);
  return textBox
}

function createBack1() {
  var bitmap = document.createElement('canvas');
  var g = bitmap.getContext('2d');
  bitmap.width = 1024;
  bitmap.height = 1024;
  //console.log("Canvas");
  //console.log(bitmap);
  g.fillStyle = '#A4E3F4';
  g.fillRect(0,0,bitmap.width,bitmap.height);
  g.fillStyle = '#FFFFFF';
  g.fillRect(8,30,bitmap.width-16,bitmap.height-60);
  // canvas contents will be used for a texture
  var texture = new THREE.Texture(bitmap)
  texture.needsUpdate = true;
  //Create Box
  var myGeometry = new THREE.BoxGeometry(3.4,0.7,0.0001);
  var myMaterial = new THREE.MeshBasicMaterial({map: texture});
  var textBox = new THREE.Mesh(myGeometry,myMaterial);
  textBox.position.set(7.9*myCenterX/10,15.6*myCenterY/10,panelZ);
  PIEaddElement(textBox);
  return textBox
}

function createBack2() {
  var bitmap = document.createElement('canvas');
  var g = bitmap.getContext('2d');
  bitmap.width = 1024;
  bitmap.height = 1024;
  //console.log("Canvas");
  //console.log(bitmap);
  g.fillStyle = '#A4E3F4';
  g.fillRect(0,0,bitmap.width,bitmap.height);
  g.fillStyle = '#FFFFFF';
  g.fillRect(8,30,bitmap.width-16,bitmap.height-60);
  // canvas contents will be used for a texture
  var texture = new THREE.Texture(bitmap)
  texture.needsUpdate = true;
  //Create Box
  var myGeometry = new THREE.BoxGeometry(3.4,0.7,0.0001);
  var myMaterial = new THREE.MeshBasicMaterial({map: texture});
  var textBox = new THREE.Mesh(myGeometry,myMaterial);
  textBox.position.set(7.9*myCenterX/10,9.9*myCenterY/10,panelZ);
  PIEaddElement(textBox);
  return textBox
}

function createBack3() {
  var bitmap = document.createElement('canvas');
  var g = bitmap.getContext('2d');
  bitmap.width = 1024;
  bitmap.height = 1024;
  //console.log("Canvas");
  //console.log(bitmap);
  g.fillStyle = '#A4E3F4';
  g.fillRect(0,0,bitmap.width,bitmap.height);
  g.fillStyle = '#FFFFFF';
  g.fillRect(8,30,bitmap.width-16,bitmap.height-60);
  // canvas contents will be used for a texture
  var texture = new THREE.Texture(bitmap)
  texture.needsUpdate = true;
  //Create Box
  var myGeometry = new THREE.BoxGeometry(3.4,0.8,0.0001);
  var myMaterial = new THREE.MeshBasicMaterial({map: texture});
  var textBox = new THREE.Mesh(myGeometry,myMaterial);
  textBox.position.set(7.9*myCenterX/10,4.4*myCenterY/10,panelZ);
  PIEaddElement(textBox);
  return textBox
}

function initializePanel() {
  holder1=createHolder1(9);
  plus = createPlus();
  holder2=createHolder2(4);
  answer = createAnswer();
  panelBack = createPanelBack();
  createBack1();
  createBack2();
  createBack3();
  holder1.position.set(holder1X,holder1Y,panelZ);
  holder2.position.set(holder2X,holder2Y,panelZ);
  plus.position.set(plusX,plusY,panelZ);
  answer.position.set(answerX,answerY,panelZ);
  //sumLine = plotLine(1.4,3.5*mySceneH/10,myCenterX+1.6,3.5*mySceneH/10,2)
  //dividerLine = plotLine(1.5,6.5*mySceneH/10,myCenterX+0.8,6.5*mySceneH/10,1)
}

function createCandyRows() {
  row1Y = holder1Y;
  row2Y = holder2Y;
  row3Y = answerY+0.05;
  tempMaterial = getRandomMaterial()
  //Create row 1
  for(var i=0;i<9;i++)
    row1[i]=createRectangle(chocolateWidth,chocolateHeight,candyX+i*(chocolateWidth),row1Y,chocolateColor);
  for(var i=0;i<9;i++)
    row2[i]=createRectangle(chocolateWidth,chocolateHeight,candyX+i*(chocolateWidth),row2Y,chocolateColor);
  for(var i=0;i<2;i++)
    for(var j=0;j<9;j++) {
      row3[j+i*9] = createRectangle(chocolateWidth,chocolateHeight,candyX + j*chocolateWidth,(row3Y-chocolateHeight/2)+i*chocolateHeight);
      positionX[j+i*9] = candyX + j*chocolateWidth;
      positionY[j+i*9] = (row3Y-chocolateHeight/2)+i*chocolateHeight;
      //row3[j+9*i].position.z=0;
    }

}

function updateNumber(holder,number) {
  //Create Texture
  var bitmap = document.createElement('canvas');
  var g = bitmap.getContext('2d');
  bitmap.width = 1024;
  bitmap.height = 1024;
  //console.log("Canvas");
  //console.log(bitmap);
  g.fillStyle = '#A4E3F4';
  g.fillRect(0,0,bitmap.width,bitmap.height);
  g.fillStyle = '#FFFFFF';
  g.fillRect(30,30,bitmap.width-60,bitmap.height-60);
  g.font = 'Bold 60px Arial';
  g.fillStyle = '#0000FF';
  g.font = 'Bold 850px Arial';
  if(number==" ")
    g.fillText(number+"",250,800);
  if(number<=9||number=="?")
    g.fillText(number+"",250,800);
  if(number>9)
    g.fillText(number+"",30,800);
  // canvas contents will be used for a texture
  var texture = new THREE.Texture(bitmap)
  texture.needsUpdate = true;
  holder.material.map.dispose();
  holder.material.map = texture;
  holder.material.needsUpdate = true;
}

function hideOptions() {
  for(var i=0;i<18;i++) {
    options[i].position.z=10;
  }
}

function removePanel() {
  holder1.position.x+=10;
  holder2.position.x+=10;
  answer.position.x+=10;
  panelBack.position.x+=10;
  plus.position.x+=10;
  sumLine.geometry.vertices[0].x += 10;
  sumLine.geometry.vertices[1].x += 10;
  sumLine.geometry.verticesNeedUpdate = true;
  dividerLine.geometry.vertices[1].x += 10;
  dividerLine.geometry.vertices[0].x +=10;
  dividerLine.geometry.verticesNeedUpdate = true;
}

function showPanel() {
  holder1.position.x-=10;
  holder2.position.x-=10;
  answer.position.x-=10;
  panelBack.position.x-=10;
  plus.position.x-=10;
  sumLine.geometry.vertices[0].x-=10;
  sumLine.geometry.vertices[1].x-=10;
  sumLine.geometry.verticesNeedUpdate = true;
  dividerLine.geometry.vertices[0].x-=10;
  dividerLine.geometry.vertices[1].x-=10;
  dividerLine.geometry.verticesNeedUpdate = true;
  PIErender();
}

function showWallpaper() {
 wallpaper.position.z = 0.1;
 PIErender();
}

function getRandomMaterial() {
  var index = Math.floor((Math.random() * 7) + 0);
  return(icon[index]);
}

function alignCandies() {
  var tmaterial = getRandomMaterial();
  for(var i=0;i<9;i++) {
        row1[i].position.set(candyX+i*(chocolateWidth),row1Y,10);
        row1[i].material.dispose();
        row1[i].material = tmaterial;
  }
  for(var i=0;i<9;i++) {
    row2[i].position.set(candyX+i*(chocolateWidth),row2Y,10)
    row2[i].material.dispose();
    row2[i].material = tmaterial;
  }

  for(var i=0;i<2;i++)
    for(var j=0;j<9;j++) {
      row3[j+i*9].position.set(candyX + j*chocolateWidth,(row3Y-chocolateHeight/2)+i*chocolateHeight,10);
      row3[j+i*9].material.dispose();
      row3[j+i*9].material = tmaterial;
    }
  PIErender();
}

function hideWallpaper() {
  wallpaper.position.z = -0.05;
  PIErender();
}

function createTick() {
  var myImage = new THREE.ImageUtils.loadTexture('right.png',{},function(){PIErender();});
  var myMaterial = new THREE.MeshBasicMaterial({map:myImage, transparent: true});
  var myGeometry = new THREE.BoxGeometry(0.7,0.7,0.00001);
  var myBox = new THREE.Mesh(myGeometry,myMaterial);
  myBox.position.set(6,0.4,10);
  PIEaddElement(myBox);
  PIErender();
  return(myBox);
}

function createCross() {
  var myImage = new THREE.ImageUtils.loadTexture('wrong.png',{},function(){PIErender();});
  var myMaterial = new THREE.MeshBasicMaterial({map:myImage, transparent: true});
  var myGeometry = new THREE.BoxGeometry(0.7,0.7,0.00001);
  var myBox = new THREE.Mesh(myGeometry,myMaterial);
  myBox.position.set(6,0.4,10);
  PIEaddElement(myBox);
  PIErender();
  return(myBox);
}


var prevSelected = -1;

function arrangeOptions(el) {
  for(var i=0;i<6;i++) {
    for(var j=0;j<3;j++) {
      curX = optionX + j*(optionW+optionSpace);
      curY = optionY - i*(optionW+optionSpace);
      if(el!=options[i*3+j])
      options[i*3+j].position.set(curX,curY,optionZ);
    }
  }
}

function optionDrag(element,newPos) {
  console.log("Inside Drag "+optionNumber(element));
  element.position.x = newPos.x;
  element.position.y = newPos.y;
  element.position.z = optionZ+0.0001;
  if(element!=prevSelected) {
    prevSelected=element;
    arrangeOptions(element);
  }
  if(distance(element.position,answer.position)<=0.3) {
    element.position.x =10;
    element.position.y=10;
    oNumber = optionNumber(element);
    evalAnswer(oNumber);
  }
  PIErender();
}

function optionNumber(element) {
  for(var i=0;i<18;i++)
    if(options[i]==element)
      return(i+1);
}

function distance(p1,p2) {
  var dx = ((p1.x-p2.x)*(p1.x-p2.x));
  var dy = ((p1.y-p2.y)*(p1.y-p2.y));
  return(Math.sqrt(dx+dy));
}

function createOption(number,x,y) {
  var bitmap = document.createElement('canvas');
  var g = bitmap.getContext('2d');
  bitmap.width = 1024;
  bitmap.height = 1024;
  //console.log("Canvas");
  //console.log(bitmap);
  g.fillStyle = '#aeea00';
  g.fillRect(0,0,bitmap.width,bitmap.height);
  g.font = 'Bold 60px Arial';
  g.fillStyle = '#000000';
  g.font = 'Bold 850px Arial';
  if(number<=9)
    g.fillText(number+"",250,800);
  if(number>=10)
    g.fillText(number+"",30,800);
  // canvas contents will be used for a texture
  var texture = new THREE.Texture(bitmap)
  texture.needsUpdate = true;
  //Create Box
  var myMaterial = new THREE.MeshBasicMaterial({map: texture});
  var myGeometry = new THREE.BoxGeometry(optionW,optionW,optionZ);
  var myShape = new THREE.Mesh(myGeometry,myMaterial);
  myShape.position.set(x,y,0);
  PIEaddElement(myShape);
  PIEdragElement(myShape);
  PIEsetDrag(myShape,optionDrag);
  PIEsetDragEnd(myShape,onOptionClick);
  return(myShape);
}

function onOptionClick(element,position) {
  console.log("Clicked "+optionNumber(element));

  if(element!=prevSelected) {
    prevSelected=element;
    arrangeOptions(element);
  }
  evalAnswer(optionNumber(element));
  PIErender();
}

function loadOptions() {
  for(var i=0;i<6;i++) {
    for(var j=0;j<3;j++) {
      curX = optionX + j*(optionW+optionSpace);
      curY = optionY - i*(optionW+optionSpace);
      options[i*3+j] = createOption(i*3+j+1,curX,curY);
    }
  }
}

function loadExperimentElements() {
  console.log("Loading");
  PIEsetExperimentTitle(myExperimentTitle);
  PIEsetDeveloperName(myName);
  PIEupdateHelp(helpString);
  PIEupdateInfo(infoString);
  chocolateImage = new THREE.ImageUtils.loadTexture('fruit.png',{},function(){PIErender();});
  icon[0] = new THREE.MeshBasicMaterial({map:chocolateImage, transparent: true});
  chocolateImage = new THREE.ImageUtils.loadTexture('chocoBlack.png',{},function(){PIErender();});
  icon[1] = new THREE.MeshBasicMaterial({map:chocolateImage, transparent: true});
  chocolateImage = new THREE.ImageUtils.loadTexture('bird.png',{},function(){PIErender();});
  icon[2] = new THREE.MeshBasicMaterial({map:chocolateImage, transparent: true});
  chocolateImage = new THREE.ImageUtils.loadTexture('fish.png',{},function(){PIErender();});
  icon[3] = new THREE.MeshBasicMaterial({map:chocolateImage, transparent: true});
  chocolateImage = new THREE.ImageUtils.loadTexture('flower.png',{},function(){PIErender();});
  icon[4] = new THREE.MeshBasicMaterial({map:chocolateImage, transparent: true});
  chocolateImage = new THREE.ImageUtils.loadTexture('pencil.png',{},function(){PIErender();});
  icon[5] = new THREE.MeshBasicMaterial({map:chocolateImage, transparent: true});
  chocolateImage = new THREE.ImageUtils.loadTexture('ball.png',{},function(){PIErender();});
  icon[6] = new THREE.MeshBasicMaterial({map:chocolateImage, transparent: true});
  //Scene
  initializeScene();
  //Initialize Input GUI
  initializeInputGUI();
  //Wallpaper
  wallpaper = createBackground();
  initializePanel();
  createCandyRows();
  tick = createTick();
  cross = createCross();
  showWallpaper();
  //create initial display
  initialText=createInitialText();
  loadOptions();
  //Set Camera
  PIEsetAreaOfInterest(mySceneTLX,mySceneTLY,mySceneBRX,mySceneBRY);
}

function resetExperiment() {
  console.log("Reset");
  started=false;
  showWallpaper();
  started = false;
  row1Loaded = false;
  row2Loaded = false;
  timeRow2 = -1;
  sumStart = -1;
  count =0;
  initialPosX = -1;
  initialPosY = -1;
  prevVal=-1;
  numberLineCreated = false;
  chocolatesShown =false;
  step=-1;
  stepStart =-1;
  pause = false;
  pauseStart=-1;
  pauseInterval=1;
  loopStarted=false;
  loopCompleted = false;
  finalStarted =-1;
  finalStage1=false;
  finalStage2=false;
  finalStage3=false;
  finalStage4=false;
  quizStarted = false;
  experimentCompleted=false;
  for(var i=0;i<9;i++) {
    row1[i].position.set(candyX+i*(chocolateWidth),row1Y,10);
    row2[i].position.set(candyX+i*(chocolateWidth),row2Y,10);
  }
  for(var i=0;i<18;i++) {
    row3[i].position.set(positionX[i],positionY[i],10);
  }
  initialText.position.z = 0.2;
  alignCandies();
  cross.position.z =10;
  tick.position.z = 10;
  if(req==true) {
    num1 = generateNumber();
    num2 = generateNumber();
    console.log(num1+" *** "+num2);
    PIEchangeInputText(input1Label,num1);
    PIEchangeInputText(input2Label,num2);
    req = false;
  }
}

var req = false;
var quizStarted = false;
var prevVal=-1;
var numberLineCreated = false;
var chocolatesShown =false;
var step=-1;
var stepStart =-1;
var pause = false;
var pauseStart=-1;
var pauseInterval=1;
var loopStarted=false;
var loopCompleted = false;
var finalStarted =-1;
var finalStage1=false;
var finalStage2=false;
var finalStage3=false;
var finalStage4=false;
var experimentCompleted=false;

var started = false;
var row1Loaded = false;
var row2Loaded = false;
var timeRow2 = -1;
var sumStart = -1;
var count =0;
var initialPosX = -1;
var initialPosY = -1;

function updateExperimentElements(t,dt) {
  var secTrigger = isSec(t);
  var sec = t/1000;
  //At start
  if(started==false && sec>0) {
    resetExperiment();
    hideOptions();
    hideWallpaper();
    initialText.position.z = 10;
    console.log("UPDATE");
    started=true;
    PIErender();
    updateNumber(holder1,num1);
    updateNumber(holder2,num2);
    updateNumber(answer," ");
    req=true;
  }
  //Load Row 1
  if(row1Loaded==false) {
    for(var i=0;i<num1;i++) {
      if(sec>0.8*(i+1)){
        row1[i].position.z = panelZ;
        row3[i].position.x = row1[i].position.x;
        row3[i].position.y = row1[i].position.y;
        row3[i].position.z = panelZ;
        if(i==num1-1) {
          row1Loaded=true;
          console.log("Loaded Row 1");
          timeRow2 = sec;
        }
      }
    }
    if(num1==0) {
      row1Loaded=true;
      console.log("Loaded Row 1");
      timeRow2 = sec;
    }
  }
  //Load Row 2
  if(timeRow2>0&&row2Loaded==false) {
    var delta = sec - timeRow2;
    for(var i=0;i<num2;i++) {
      console.log("Loop");
      if(delta>0.8*(i+1)) {
        row2[i].position.z = panelZ;
        row3[i+num1].position.x = row2[i].position.x;
        row3[i+num1].position.y = row2[i].position.y;
        row3[i+num1].position.z = panelZ;
        if(i==num2-1) {
          row2Loaded=true;
          console.log("Loaded Row 2");
          initialPosX = row3[0].position.x;
          initialPosY = row3[0].position.y;
          console.log("Set Position to "+initialPosX+" "+initialPosY);
          sumStart = sec;
        }
      }
    }
    if(num2==0) {
      row2Loaded=true;
      console.log("Loaded Row 2");
      initialPosX = row3[0].position.x;
      initialPosY = row3[0].position.y;
      sumStart = sec;
    }
  }
  //Load Sum
  if(row2Loaded==true) {
    var delta = sec - sumStart;
    for(var i=0;i<num1+num2;i++) {
      if(i==count) {
        var finalX =positionX[i];
        var finalY =positionY[i];
        if(delta>=i*2&&delta<=(i+1)*2) {
          if(i==0)
            console.log(initialPosX+" "+initialPosY);
          row3[i].position.x = initialPosX + (delta-2*i)*(finalX-initialPosX)/2;
          row3[i].position.y = initialPosY+(delta-2*i)*(finalY-initialPosY)/2;
        }
        else {
          row3[i].position.x = finalX;
          row3[i].position.y = finalY;
          console.log(delta);
          count++;
          if(count<18)
          {initialPosX = row3[count].position.x;
          initialPosY = row3[count].position.y;}
          console.log("For "+count+" Initial Position is "+initialPosX+" "+initialPosY);
          console.log("Done "+i);
          updateNumber(answer,count);
          break;
        }
      }
    }
    if(count==18)
      updateNumber(answer,18);
    if(num1+num2==0)
      updateNumber(answer,0);
  }
}

/*function updateExperimentElements(t,dt) {
  if(experimentCompleted==false)
 {var secTrigger = isSec(t);
 var sec = t/1000;
 if(secTrigger==0) {
   resetExperiment();
  initialText.position.z = 10;
  console.log("Plotting NumberLine");
 }
 //Plot the numberLine
 if(sec>0 && sec<3) {
   posX = numberLineX1 + t*(numberLineX2-numberLineX1)/3000;
   numberLine.geometry.vertices[1].x = posX;
   numberLine.geometry.verticesNeedUpdate = true;
   for(var i=0;i<19;i++) {
     if(posX > numberLineLabels[i].position.x) {
       //console.log(numberLineLabels[i].position.x +"  ->"+numberLine.geometry.vertices[1].x);
       showTick(i);
     }
   }
 }
 if(sec>3 && numberLineCreated == false) {
   console.log("NumberLine Plotted");
   numberLineCreated = true;
 }

 //You Have # Chocolates
 if(sec>=3.3 && chocolatesShown==false) {
  setMessage(num1,0);
  var tStart=3.8;
  delta = sec-tStart;
  if(delta>0) {
    for(var i=0;i<num1;i++) {
      if(delta>=0.8*i) {
        showChocolate(i);
        myBall.position.x = numberLineLabels[i+1].position.x;
        myBall.position.y = numberLineY1+myBallRadius+0.02;
        if(i==num1-1) {
          chocolatesShown=true;
        }
      }
    }

  }
 }
 if(chocolatesShown==true && pause==false &&loopStarted==false) {
   pause = true;
   pauseStart = sec;
   step = 1;
 }
 if(pause==true) {
   var delta = sec - pauseStart;
   //console.log(delta);
   if(delta>=pauseInterval) {
    pause=false;
    loopStarted=true;
   }
 }
 //Loop Till all chocolates shown
 if(pause==false && chocolatesShown==true && loopCompleted == false) {
   console.log("Loop");
   for(var i=1;i<=num2;i++) {
     if(step==i) {
       console.log("step "+ step );
       if(stepStart==-1) {
         stepStart = sec;
       }
       var delta = sec - stepStart;
       if(delta<=2 && stepStart>0) {
         setMessage(1,2);
       }
       if(delta>3&&delta<5&& stepStart>0) {
         myBall.position.x = numberLineLabels[num1 +i].position.x;
         showChocolate(num1+i-1);
         setMessage(num1+i,1);
       }
       if(delta>=5&& stepStart>0) {
         step++;
         stepStart=-1;
         if(step==num2+1) {
          loopCompleted=true;
         }
       }
     }
   }
 }

 if(loopCompleted==true) {
  if(finalStarted==-1)
    finalStarted=sec;
  var delta = sec-finalStarted;
  if(delta>=1&&delta<1.2&&finalStage1==false) {
    setFinalMessage(num1,0);
    finalStage1=true;
  }
  if(delta>=2.5&&delta<2.7&&finalStage2==false) {
    setFinalMessage(num2,2);
    finalStage2=true;
  }
  if(delta>=4&&delta<4.2&&finalStage3==false) {
    setFinalMessage(num2+num1,1);
    finaStage3=true;
  }
  if(delta>=5&&delta<5.2&&finalStage4==false) {
    setFinalMessage(num2+num1,3);
    finaStage4=true;
    experimentCompleted=true;
    console.log("Experiment Done");
    PIEstopAnimation();
  }
 }}

}*/


/*
function resetExperiment() {
  prevVal=-1;
  initialText.position.z = chocolateZ-0.0001;
  removeChocolates();
  prevVal=-1;
  numberLineCreated = false;
  chocolatesShown =false;
  step=-1;
  stepStart =-1;
  pause = false;
  pauseStart=-1;
  pauseInterval=1;
  loopStarted=false;
  loopCompleted = false;
  finalStarted =-1;
  finasStage1=false;
  finasStage2=false;
  finasStage3=false;
  finasStage4=false;
  experimentCompleted=false;
  for(var i=0;i<19;i++)
    removeTick(i);
  removeNumberLine();
  clearMessageBox();
  myBall.position.x=10;
  PIErender();
}
*/
