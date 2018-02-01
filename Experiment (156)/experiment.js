/* Global Variables */

/* Scene Dimensions (in meters: at z = 0) */
var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */

/* Room Variables */

var topB;               /* Top Barrier */
var backB=-0.5;         /* Back Barrier */
var wallThickness;      /* Wall Thickness */

/* Room Objects */
var myBack;             /* Back */
var myGraph;
/* Ball variables */
var myBall;             /* Ball Object */
var myBallRadius;       /* Radius */
var myBallMass;  
var myBallX;            /* X Position */
var myBallY;            /* Y Position */
var myBallAY=0;
var myBallZ;            /* Z Position for placing ball */
var iterNo;
var geometryGraph;
var arrowHelper;
var gridHelper;
var graphBack;
// Floor

var Floor;
var FloorY;
var FloorThickness;
/* Parameters, Variables */
var gravityY;           /* X component of Gravity in m/S2 */



/******************* GUI control objects code ***********************/
var velocityBall;           /* X Position Slider Label */
var vBdefault;       /* X Position Slider Default Value */
var vBmin;           /* X Position Slider Minimum Value */
var vBmax;           /* X Position Slider Maximum Value */
var vBstep;

var alignL;
var alignLdefault;
var alignLmin;
var alignLmax;
var alignLstep;
var alignT;
var alignTdefault;
var alignTmin;
var alignTmax;
var alignTstep;

function handlevB(newvalue)
{
    velocityBall=newvalue;
    arrowHelper.setLength(Math.abs(velocityBall/5));
    if(velocityBall<0){
    arrowHelper.setDirection(new THREE.Vector3(0,-1,0));
    }
    else{
    arrowHelper.setDirection(new THREE.Vector3(0,1,0));    
    }
    PIErender();
}

function handleaL(newvalue){
var tY=document.getElementsByClassName('textY');
var tX=document.getElementsByClassName('textX');

for(var i=0;i<7;i++){
tY[i].style.left=(120+newvalue).toString()+"px";
tX[i].style.left=(120+55.5*(i+1)+newvalue).toString()+"px";
}
}

function handleaT(newvalue){
var tY=document.getElementsByClassName('textY');
var tX=document.getElementsByClassName('textX');

for(var i=0;i<7;i++){
if(3-i/2==0){
    topL=55*i+45+newvalue;
}
else{
topL=55*i+40+newvalue;
}
tY[i].style.top=topL.toString()+"px";
topL=55*6+47+newvalue;
tX[i].style.top=topL.toString()+"px";
}
}



function initialiseControlVariables()
{
    velocityBallCaption="Intial Velocity of Ball";             
    vBdefault=3;
    vBmin=-5;
    vBmax=5;
    vBstep=0.5;                 /* X Position Slider Step */
    velocityBall=3;
    alignLCaption="Adjust Left of Axis";
    alignLdefault=0;
    alignLmax=40;
    alignLmin=-40;
    alignLstep=1;
    alignTCaption="Adjust Top of Axis";
    alignTdefault=0;
    alignTmax=40;
    alignTmin=-40;
    alignTstep=1;
    
}



function initialiseControls()
{
    initialiseControlVariables();
    PIEaddInputSlider(velocityBallCaption, vBdefault, handlevB, vBmin, vBmax, vBstep);
    PIEaddDisplayText(velocityBallCaption, vBdefault);
    PIEaddInputSlider(alignLCaption, alignLdefault, handleaL, alignLmin, alignLmax, alignLstep);
    PIEaddDisplayText(alignLCaption, alignLdefault);
    PIEaddInputSlider(alignTCaption, alignTdefault, handleaT, alignTmin, alignTmax, alignTstep);
    PIEaddDisplayText(alignTCaption, alignTdefault);

}

var helpContent;
function initialiseHelp()
{
    helpContent="<h2>Distance Time Graph uniform Acceleration</h2><h3>About the experiment</h3><p>Show a ball falling on a floor from a distance, hitting the floor and comes at rest on the ground. Draw a distance time graph of a motion of a falling body with random value of initial speed (could be –ve). Show a corresponding distance line and a falling object (ball). As mouse is clicked on the distance time graph, the ball should move there. At every click, there would be a distance readout. Show that the distance readout matches the ball readout.</p><h3>Animation control</h3><p>The top line has animation controls. There are two states of the experiment.</p><h3>The setup stage</h3><p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to slider.</p><p>You can control the following:</p><ul><li>Velocity of Release&nbsp;&nbsp;:&nbsp;Controls the  Velocity of Release.</li></ul>You can also control the DIstance from the floor by clicking on the graph and the ball moves to that point on the graph<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p><h3>The animation stage</h3><p>In the animation stage, the ball will be hit around obeyng the laws of physics.</p><p>The right hand panel now shows the values of the experiment variables during animation.</p><p>You can pause and resume the animation by using the pause/play nutton on the top line</p><p>You can slow down and speed up the animaion by uing the speed control buttons</p><h2>Happy Experimenting</h2>"
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "<h2>Distance Time Graph uniform Acceleration</h2><h3>About the experiment</h3><p>Show a ball falling on a floor from a distance, hitting the floor and comes at rest on the ground. Draw a distance time graph of a motion of a falling body with random value of initial speed (could be –ve). Show a corresponding distance line and a falling object (ball). As mouse is clicked on the distance time graph, the ball should move there. At every click, there would be a distance readout. Show that the distance readout matches the ball readout.</p><h3>Equation of Motion</h3><p>In mathematical physics, equations of motion are equations that describe the behaviour of a physical system in terms of its motion as a function of time.More specifically, the equations of motion describe the behaviour of a physical system as a set of mathematical functions in terms of dynamic variables: normally spatial coordinates and time are used.</p><p> The following mathematical equation is often used to express the above principle.</p><p>S=S0+u*t+.5*a*t^2 where a=10m/s^2</p><p>u velocity of obj,S is the final position and S0 is initial position</p><h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene()
{
    mySceneTLX = 0.0;
    mySceneTLY = 3.0;
    mySceneBRX = 4.0;
    mySceneBRY = 0.0;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;

}

function initialiseOtherVariables()
{
    myBallRadius = mySceneW/30.0;
    wallThickness = 0.20;
    gravityY = -10.0;
    topB=mySceneTLY;
    FloorThickness=.05;
    iterNo=0;
}
var textX=[];
var leftL=0;
var textY=[];
var topL=0;

function loadExperimentElements()
{
var geometry;
var material;
var loader;
var texture;

    PIEsetExperimentTitle("Distance Time Graph Uniform Acceleration");
    PIEsetDeveloperName("Manish Madugula");
    PIEhideControlElement();
    initialiseHelp();
    initialiseInfo();
    initialiseScene();
    initialiseOtherVariables();

    material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('ball.jpg') } );
    /* Create Ball and add it to scene */
    myBall = new THREE.Mesh(new THREE.SphereGeometry(myBallRadius, 32, 32), material);
    myBall.position.set(myBallX, myBallY, myBallZ);
    myBall.castShadow = true;
    myBall.receiveShadow = true;
    PIEaddElement(myBall);



    material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('brick.jpg') } );
// Create Floor
    Floor=  new THREE.Mesh(new THREE.BoxGeometry(mySceneW,FloorThickness,.3),material);  
    Floor.position.set(mySceneW/2,FloorY,myBallZ);
    PIEaddElement(Floor);

//Create the support
    support1=new THREE.Mesh(new THREE.BoxGeometry(.05,mySceneW/10,.5),material);
    PIEaddElement(support1);
    support2=new THREE.Mesh(new THREE.BoxGeometry(.05,mySceneW/10,.5),material);
    PIEaddElement(support2);

//Create Background
    geometry = new THREE.BoxGeometry( mySceneW * 2, mySceneH * 2, wallThickness );
    material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('background.jpg') } );
    myBack = new THREE.Mesh( geometry, material );
    myBack.position.set(myCenterX, myCenterY, backB - (wallThickness / 2));
    myBack.receiveShadow = true;
    PIEaddElement(myBack);

//Create Background of Graph
    geometry=new THREE.PlaneGeometry(1.5,1.5,32);
    material = new THREE.MeshBasicMaterial( {color: 0xf6f5f4, side: THREE.DoubleSide} );
    graphBack = new THREE.Mesh( geometry, material );
    PIEaddElement(graphBack);




    geometryGraph = new THREE.Geometry();
    var from = new THREE.Vector3( myBall.position.x, myBall.position.y, myBall.position.z);
    var to = new THREE.Vector3( myBall.position.x, 0, 0 );
    var direction = to.clone().sub(from);
    var length = velocityBall/3;
    arrowHelper = new THREE.ArrowHelper(direction.normalize(), from, length, 0xffffff );

    PIEaddElement(arrowHelper);

gridHelper = new THREE.GridHelper(.75, 6); 
gridHelper.position = new THREE.Vector3(0, 1, 1);
gridHelper.rotation = new THREE.Euler(0, 0, 0);
PIEaddElement(gridHelper);


var iter=0;
for(var i=0;i<7;i++){
textY.push(document.createElement('span'));
textY[i].style.position="fixed";
textY[i].className="textY";

if(3-i/2==0){
    topL=55*i+45;
}
else{
topL=55*i+40;
}
textY[i].style.top=topL.toString()+"px";
textY[i].style.left="120px";
if(iter%2==0){
textY[i].innerHTML=3-i/2;
}
else{
    textY[i].innerHTML=" ";
}
iter++;
document.getElementsByTagName('body')[0].appendChild(textY[i]);
}


for(var i=1;i<7;i++){
textX.push(document.createElement('span'));
textX[i-1].style.position="fixed";
textX[i-1].className="textX";
topL=55*6+47;
leftL=(120+55.5*i);
textX[i-1].style.top=topL.toString()+"px";
textX[i-1].style.left=leftL.toString()+"px";
textX[i-1].innerHTML=(i*2/10).toFixed(1);
document.getElementsByTagName('body')[0].appendChild(textX[i-1]);
}

var textXN=document.createElement('span');
textXN.style.position="fixed";
textXN.style.top="400px";
textXN.style.left="150px";
textXN.innerHTML="Time(Sec)---->";
document.getElementsByTagName('body')[0].appendChild(textXN);

textYN=document.createElement('span');
textYN.style.position="fixed";
textYN.style.top="200px";
textYN.style.left="50px";
textYN.style.transform="rotate(-90deg)";
textYN.innerHTML="Distance---->";
document.getElementsByTagName('body')[0].appendChild(textYN);

    initialiseControls();

    resetExperiment();
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}

function resetExperiment()
{
    initialiseOtherVariables();


    myBallX      = myCenterX;
    myBallY      =1.77;
    myBallZ=0; 
    myBall.castShadow=true;
    myBack.receiveShadow=true;

    myBall.position.set(myBallX, myBallY, myBallZ);
    handlevB(3);
    myBack.position.set(myCenterX, myCenterY, backB - (wallThickness / 2));
    FloorY=0.3;
    FloorThickness=.05;
    Floor.position.set(mySceneW/2,FloorY,myBallZ);
    support1.position.set(-.035,.3,myBallZ);
    support2.position.set(mySceneW+.03,.3,myBallZ);
    geometryGraph=new THREE.Geometry();
    arrowHelper.position.x=2;
    arrowHelper.position.y=1.77;
    arrowHelper.position.z=0;

    gridHelper.position.y=2.17;
    gridHelper.position.x=.25;
    gridHelper.position.z=0;
    gridHelper.rotation.x=1.57;
    gridHelper.rotation.y=0;
    gridHelper.rotation.z=0;
    gridHelper.castShadow = false;
    gridHelper.material.color.r=0.2;
    gridHelper.material.color.g=0.2;
    gridHelper.material.color.b=0.2;

    graphBack.position.y=2.167;
    graphBack.position.x=.25;
    graphBack.position.z=-0.001;
}
setTimeout(function(){
    if(PIEambientLight != null){
    PIEscene.children[6].intensity=0.15;
    PIEscene.children[5].intensity=0;
         for(i=0;i<2;i++){
        document.getElementsByClassName('main')[i].style.width="300px";
    }
    PIErender();
    document.getElementsByTagName('canvas')[0].addEventListener("mousedown",doMouseEvent,false);
}
},1000);



function doMouseEvent(e) {
    console.log(e.pageX+" "+e.pageY);
    if(e.pageX<460&&e.pageY<379&&e.pageY>50&&e.pageX>130){
        myBall.position.y=(430-e.pageY)/122.5;
        arrowHelper.position.y=myBall.position.y;
        PIErender();
        geometryGraph=new THREE.Geometry();
        iterNo=0;
        console.log("myBall Position"+myBall.position.y);
    }
}

var flag=false;
var flag1=false;
var t1,t2;
function updateExperimentElements(t,dt)
{
dt=dt/1000;
if(dt<.2){
if(flag==false){
    flag=true;
    console.log(PIEcurrentTime);
}
PIEchangeDisplayText(velocityBallCaption,velocityBall);
myBall.position.y=myBall.position.y+velocityBall*dt+.5*gravityY*dt*dt;
velocityBall=velocityBall+gravityY*dt;
if(myBall.position.y<=FloorY+myBallRadius){
    geometryGraph.vertices.push(new THREE.Vector3(((iterNo*parseFloat(PIEspeedElem.textContent))/49-.46),(myBall.position.y-.43)/(3-.43)*1.45+1.44,0.1));
    velocityBall=0;
    myBall.position.y=FloorY+myBallRadius;
    //Graph
    material = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 5 } );
    line = new THREE.Line(geometryGraph, material);
    PIEscene.add(line);
    PIErender();
    if(flag1==false){
        console.log(PIEcurrentTime);
        flag1=true;
    }
}
else{
geometryGraph.vertices.push(new THREE.Vector3(((iterNo*parseFloat(PIEspeedElem.textContent))/49-.46),(myBall.position.y-.43)/(3-.43)*1.45+1.4,0.1));
iterNo++;
}

}

//Arrow Helper
arrowHelper.setLength(Math.abs(velocityBall/5));
arrowHelper.position.y=myBall.position.y;
if(velocityBall<0){
arrowHelper.setDirection(new THREE.Vector3(0,-1,0));
}
else{
arrowHelper.setDirection(new THREE.Vector3(0,1,0));    
}


}

