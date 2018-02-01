
/* Scene Dimensions (in meters: at z = 0) */
var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */

/* Room Objects */

var myBack;             /* Back */
var next;
var reset;
var control;

var onep;
var onep2;
var onep3;
var onep4;


/* Shape Objects */
var myY;
var myI;
var myH;
var myL;
var myU;
var myCross;
var myV;
var myRhomb;
var myTrap;
var myParl;
var myTriangle;
var myHeart;
var mySquare;
var myFish;
var myArc;
var mySmiley;
var myTrack;
var myCircle;
var myPentagon;
var myHexagon;
var myStar;
var myPlus;
var myArrow;
var banner1;
var banner2;
var banner3;
var playag

var myMountainL;
var myMountainR;
var myMountainC1;
var myMountainC2;
var myMountainC3;
var myMountains;

var bonnet;
var tire1;
var tire2;

var road;

var truck;
var truck2;
var truck3;
var truck4;

var cloud1;
var cloud2;
var cloud3;
var cloud4;

var thread;
var thread2;

/* Shapes Collection */
var myShapes = new Array();
var myShadows;

var ground;

var h1;
var h2;
var h3;
var h4;

var p1;
var p2;
var p3;
var p4;

var s1;
var s2;
var s3;
var s4;

var OneX;
var OneY;
var OneZ;
var DragEnd = [
  [0,10,7.1],
  [0,10,7.1],
  [0,10,7.1],
  [0,10,7.1]
]
var temp1;
var temp2;
var temp3;
var temp4;
var k1;
var k2;
var k3;
var k4;
var match;
var brand;
var pass;
/******************* Interaction functions ***********************/

function myOneEnd(element, newpos)
{
  // element.position.set(-20,30,4);
  k1=1;
  k=1;
}

function myOneEnd2(element, newpos)
{
  element.position.set(DragEnd[0][0],DragEnd[0][1],DragEnd[0][2]);
  k=1;
}

function myOneDrag(element, newpos)
{
    OneX = newpos.x;
    OneY = newpos.y;
    OneZ = newpos.z;
    k=0;
    k1=0;
    if(newpos.x > DragEnd[0][0] - 0.5 && newpos.x < DragEnd[0][0] + 0.5 && newpos.y < DragEnd[0][1]+ 0.5 && newpos.y > DragEnd[0][1] - 0.5){
      OneX = DragEnd[0][0];
      OneY = DragEnd[0][1];
      OneZ = DragEnd[0][2];
      PIEsetDrag(element,false);
      PIEsetDragEnd(element,myOneEnd2);
      PIEsetDragStart(element,false);
      match = match + 1;
    }

    element.position.set(OneX, OneY, OneZ);
}
function myTwoEnd(element, newpos)
{
  k2=1;
  k=1;
}

function myTwoEnd2(element, newpos)
{
  element.position.set(DragEnd[1][0],DragEnd[1][1],DragEnd[1][2]);
  k=1;
}

function myTwoDrag(element, newpos)
{
    OneX = newpos.x;
    OneY = newpos.y;
    OneZ = newpos.z;
    k=0;
    k2=0;
    if(newpos.x > DragEnd[1][0] - 0.5 && newpos.x < DragEnd[1][0] + 0.5 && newpos.y < DragEnd[1][1]+ 0.5 && newpos.y > DragEnd[1][1] - 0.5){
      OneX = DragEnd[1][0];
      OneY = DragEnd[1][1];
      OneZ = DragEnd[1][2];
      PIEsetDrag(element,false);
      PIEsetDragEnd(element,myTwoEnd2);
      PIEsetDragStart(element,false);
      match = match + 1;
    }

    element.position.set(OneX, OneY, OneZ);
}


function myThreeEnd(element, newpos)
{
  k3=1;
  k=1;
}

function myThreeEnd2(element, newpos)
{
  element.position.set(DragEnd[2][0],DragEnd[2][1],DragEnd[2][2]);
  k=1;
}

function myThreeDrag(element, newpos)
{
    OneX = newpos.x;
    OneY = newpos.y;
    OneZ = newpos.z;
    k3=0;
    k=0;
    if(newpos.x > DragEnd[2][0] - 0.5 && newpos.x < DragEnd[2][0] + 0.5 && newpos.y < DragEnd[2][1]+ 0.5 && newpos.y > DragEnd[2][1] - 0.5){
      OneX = DragEnd[2][0];
      OneY = DragEnd[2][1];
      OneZ = DragEnd[2][2];
      PIEsetDrag(element,false);
      PIEsetDragEnd(element,myThreeEnd2);
      PIEsetDragStart(element,false);
      match = match + 1;
    }

    element.position.set(OneX, OneY, OneZ);
}
function myFourEnd(element, newpos)
{
  k4=1;
  k=1;
}

function myFourEnd2(element, newpos)
{
  element.position.set(DragEnd[3][0],DragEnd[3][1],DragEnd[3][2]);
  k=1;
}

function myFourDrag(element, newpos)
{
    OneX = newpos.x;
    OneY = newpos.y;
    OneZ = newpos.z;
    k4=0;
    k=0;
    if(newpos.x > DragEnd[3][0] - 0.5 && newpos.x < DragEnd[3][0] + 0.5 && newpos.y < DragEnd[3][1]+ 0.5 && newpos.y > DragEnd[3][1] - 0.5){
      OneX = DragEnd[3][0];
      OneY = DragEnd[3][1];
      OneZ = DragEnd[3][2];
      PIEsetDrag(element,false);
      PIEsetDragEnd(element,myFourEnd2);
      PIEsetDragStart(element,false);
      match = match + 1;
    }

    element.position.set(OneX, OneY, OneZ);
}

/******************* End of Interaction functions ***********************/

function initialiseControlVariables()
{

}


function initialiseControls()
{
  PIEaddDisplayCommand("Next",function(){
    start = 0;
    resetExperiment();
  });

}


/******************* Draw Shape Functions ***********************/

function drawY()
{
    var x=-4;
    var y=0;
    var m=3;
    var triangleShape = new THREE.Shape();
    triangleShape.moveTo(  x+m*1, y+m*0 );
    triangleShape.lineTo(  x+m*2, y+m*0 );
    triangleShape.lineTo(  x+m*2, y+m*1.5 );
    triangleShape.lineTo(  x+m*3, y+m*3.5);
    triangleShape.lineTo(  x+m*2, y+m*3.5);
    triangleShape.lineTo(  x+m*1.5, y+m*2.5);
    triangleShape.lineTo(  x+m*1, y+m*3.5);
    triangleShape.lineTo(  x+m*0, y+m*3.5);
    triangleShape.lineTo(  x+m*1, y+m*1.5);
    triangleShape.lineTo(  x+m*1, y+m*0);

    return triangleShape;
}

function drawI()
{
    var x=-4;
    var y=0;
    var m=3.5;
    var triangleShape = new THREE.Shape();
    triangleShape.moveTo(  x+m*0, y+m*0 );
    triangleShape.lineTo(  x+m*3, y+m*0 );
    triangleShape.lineTo(  x+m*3, y+m*1 );
    triangleShape.lineTo(  x+m*2, y+m*1);
    triangleShape.lineTo(  x+m*2, y+m*2);
    triangleShape.lineTo(  x+m*3, y+m*2);
    triangleShape.lineTo(  x+m*3, y+m*3);
    triangleShape.lineTo(  x+m*0, y+m*3);
    triangleShape.lineTo(  x+m*0, y+m*2);
    triangleShape.lineTo(  x+m*1, y+m*2);
    triangleShape.lineTo(  x+m*1, y+m*1);
    triangleShape.lineTo(  x+m*0, y+m*1);
    triangleShape.lineTo(  x+m*0, y+m*0 ); // close path

    return triangleShape;
}
function drawH()
{
    var x=-4;
    var y=0;
    var m=3.5;
    var triangleShape = new THREE.Shape();
    triangleShape.moveTo(  x+m*0, y+m*0 );
    triangleShape.lineTo(  x+m*0, y+m*3 );
    triangleShape.lineTo(  x+m*1, y+m*3 );
    triangleShape.lineTo(  x+m*1, y+m*2);
    triangleShape.lineTo(  x+m*2, y+m*2);
    triangleShape.lineTo(  x+m*2, y+m*3);
    triangleShape.lineTo(  x+m*3, y+m*3);
    triangleShape.lineTo(  x+m*3, y+m*0);
    triangleShape.lineTo(  x+m*2, y+m*0);
    triangleShape.lineTo(  x+m*2, y+m*1);
    triangleShape.lineTo(  x+m*1, y+m*1);
    triangleShape.lineTo(  x+m*1, y+m*0);
    triangleShape.lineTo(  x+m*0, y+m*0 ); // close path

    return triangleShape;
}
function drawL()
{
    var x=-3;
    var y=0.5;
    var m=3;
    var triangleShape = new THREE.Shape();
    triangleShape.moveTo(  x+m*0, y+m*0 );
    triangleShape.lineTo( x+m*3, y+m*0 );
    triangleShape.lineTo( x+m*3, y+m*1 );
    triangleShape.lineTo(  x+m*1, y+m*1);
    triangleShape.lineTo(  x+m*1, y+m*3);
    triangleShape.lineTo(  x+m*0, y+m*3);
    triangleShape.lineTo(  x+m*0, y+m*0 ); // close path

    return triangleShape;
}
function drawU()
{
    var x=-4.8;
    var y=0.5;
    var m=3;
    var triangleShape = new THREE.Shape();
    triangleShape.moveTo(  x+m*0, y+m*0 );
    triangleShape.lineTo( x+m*4, y+m*0 );
    triangleShape.lineTo( x+m*4, y+m*3 );
    triangleShape.lineTo(  x+m*3, y+m*3);
    triangleShape.lineTo(  x+m*3, y+m*1);
    triangleShape.lineTo(  x+m*1, y+m*1);
    triangleShape.lineTo(  x+m*1, y+m*3);
    triangleShape.lineTo(  x+m*0, y+m*3);
    triangleShape.lineTo(  x+m*0, y+m*0 ); // close path

    return triangleShape;
}


function drawMountain(){
  var mountain = new THREE.Shape();
  var m = 5;
  mountain.moveTo(m*0,m*0);
  mountain.lineTo(m*6,m*0);
  mountain.lineTo(m*4.5,m*4.0);
  mountain.lineTo(m*3.0,m*2.0);
  mountain.lineTo(m*2.0,m*6.0);
  mountain.lineTo(m*0,m*0);

  return mountain;
}
function drawMountain2(){
  var mountain = new THREE.Shape();
  var m = 5;
  mountain.moveTo(m*0,m*0);
  mountain.lineTo(m*6,m*0);
  mountain.lineTo(m*4.5,m*6.0);
  mountain.lineTo(m*3.0,m*2.0);
  mountain.lineTo(m*2.0,m*4.0);
  mountain.lineTo(m*0,m*0);

  return mountain;
}
function drawMountainB(){
  var mountain = new THREE.Shape();
  var m = 5;
  mountain.moveTo(m*0,m*0);
  mountain.lineTo(m*4,m*0);
  mountain.lineTo(m*2,m*4);
  mountain.lineTo(m*0,m*0);
  return mountain;
}
function drawTruckB(){
  var truck = new THREE.Shape();
  var m = 3;
  truck.moveTo(m*0,m*0);
  truck.lineTo(m*5,m*0);
  truck.lineTo(m*5,m*5);
  truck.lineTo(m*3,m*5);
  truck.lineTo(m*2,m*3);
  truck.lineTo(m*0,m*2);
  truck.lineTo(m*0,m*0);
  var holePath = new THREE.Path();
  holePath.moveTo( m*2.6,m* 3 );
  holePath.lineTo( m*3.5,m*4.5);
  holePath.lineTo(m*4.8,m*4.5);
  holePath.lineTo(m*4.8,m*3);
  holePath.lineTo(m*2.6,m*3);
  truck.holes.push( holePath );
  return truck;
}

function drawTrap()
{
    var x=-4;
    var y=0.5;
    var m=4;
    var triangleShape = new THREE.Shape();
    triangleShape.moveTo(  x+m*0, y+m*0 );
    triangleShape.lineTo( x+m*1, y+m*2 );
    triangleShape.lineTo( x+m*2, y+m*2 );
    triangleShape.lineTo(  x+m*3, y+m*0);
    triangleShape.lineTo(  x+m*0, y+m*0 ); // close path

    return triangleShape;
}

function drawParl()
{
    var x=-5.4;
    var y=0.5;
    var m=4;
    var triangleShape = new THREE.Shape();
    triangleShape.moveTo(  x+m*0, y+m*0 );
    triangleShape.lineTo( x+m*1, y+m*2 );
    triangleShape.lineTo( x+m*4, y+m*2 );
    triangleShape.lineTo(  x+m*3, y+m*0);
    triangleShape.lineTo(  x+m*0, y+m*0 ); // close path

    return triangleShape;
}

function drawV()
{
    var x=-5.4;
    var y=0;
    var m=3.5;
    var triangleShape = new THREE.Shape();
    triangleShape.moveTo(  x+m*0, y+m*0 );
    triangleShape.lineTo( x+m*2, y+m*3 );
    triangleShape.lineTo( x+m*4, y+m*0 );
    triangleShape.lineTo( x+m*3, y+m*0 );
    triangleShape.lineTo(  x+m*2, y+m*1.5);
    triangleShape.lineTo(  x+m*1, y+m*0 ); // close path
    triangleShape.lineTo(  x+m*0, y+m*0 ); 

    return triangleShape;
}

function drawRhomb()
{
    var x=-5.4;
    var y=0.5;
    var m=4;
    var triangleShape = new THREE.Shape();
    triangleShape.moveTo(  x+m*2, y+m*0 );
    triangleShape.lineTo( x+m*4, y+m*1 );
    triangleShape.lineTo( x+m*2, y+m*2 );
    triangleShape.lineTo(  x+m*0, y+m*1);
    triangleShape.lineTo(  x+m*2, y+m*0 ); // close path

    return triangleShape;
}

function drawHeart()
{
    var x = -5 ,y = -10;
    var m=0.1;
    var heartShape = new THREE.Shape(); // From http://blog.burlock.org/html5/130-paths
    heartShape.moveTo( x + m*25, y + m*25 );
    heartShape.bezierCurveTo( x + m*25, y + m*25, x + m*20, y, x, y );
    heartShape.bezierCurveTo( x - m*30, y, x - m*30, y + m*35,x - m*30,y + m*35 );
    heartShape.bezierCurveTo( x - m*30, y + m*55, x - m*10, y + m*77, x + m*25, y + m*95 );
    heartShape.bezierCurveTo( x + m*60, y + m*77, x + m*80, y + m*55, x + m*80, y + m*35 );
    heartShape.bezierCurveTo( x + m*80, y + m*35, x + m*80, y, x + m*50, y );
    heartShape.bezierCurveTo( x + m*35, y, x + m*25, y + m*25, x + m*25, y + m*25 );

    return heartShape;
}

function drawArrow()
{
    var x=-5;
    var y=-0.5;
    var m=3.5;
    var triangleShape = new THREE.Shape();
    triangleShape.moveTo(  x+m*0, y+m*1 );
    triangleShape.lineTo( x+m*0, y+m*2 );
    triangleShape.lineTo( x+m*2, y+m*2 );
    triangleShape.lineTo(  x+m*2, y+m*3 );
    triangleShape.lineTo(  x+m*4, y+m*1.5 ); // close path
    triangleShape.lineTo(  x+m*2, y+m*0 );
    triangleShape.lineTo(  x+m*2, y+m*1 );
    triangleShape.lineTo(  x+m*0, y+m*1 );

    return triangleShape;
}
function drawTriangle()
{
    var x=-3;
    var y=-4;
    var m=1.3;
    var triangleShape = new THREE.Shape();
		triangleShape.moveTo(  x+m*5, y+m*2.5 );
		triangleShape.lineTo( x+m*0, y+m*10 );
		triangleShape.lineTo( x+m*10, y+m*10 );
		triangleShape.lineTo(  x+m*5, y+m*2.5 ); // close path

    return triangleShape;
}


function drawSquare()
{
    var x=-3;
    var y=0;
    var sqLength = 10;
		var squareShape = new THREE.Shape();
		squareShape.moveTo( x+0,y+0 );
		squareShape.lineTo( x+0, y+sqLength );
		squareShape.lineTo( x+sqLength, y+sqLength );
		squareShape.lineTo( x+sqLength, y+0 );
		squareShape.lineTo( x+0, y+0 );

    return squareShape;
}
function drawPentagon()
{
    var x=-2;
    var y=0;
		var squareShape = new THREE.Shape();
		squareShape.moveTo( x+0,y+0 );
		squareShape.lineTo( x+8,y+0  );
		squareShape.lineTo( x+10.2, y+6.6 );
		squareShape.lineTo( x+4.2, y+11 );
		squareShape.lineTo( x+-2.0, y+6.6 );
    squareShape.lineTo( x+0, y+0);

    return squareShape;
}

function drawHexagon()
{
    var m= 1.4;
    var x=-3;
    var y=0;
		var squareShape = new THREE.Shape();
		squareShape.moveTo( x+3,y+0 );
		squareShape.lineTo( x+3+m*4,y+0  );
		squareShape.lineTo( x+3+m*6, y+m*3.4 );
		squareShape.lineTo( x+3+m*4, y+m*6.9 );
		squareShape.lineTo( x+3, y+m*6.9 );
    squareShape.lineTo( x+3+-m*2, y+m*3.4);
    squareShape.lineTo( x+3, y+0);


    return squareShape;
}
function drawStar()
{
    var x = 0.8;
    var m=-3;
    var y=-1;
		var squareShape = new THREE.Shape();
		squareShape.moveTo( m+x*2,y+x*14 );
		squareShape.lineTo( m+x*6.5,y+x*11.5  );
		squareShape.lineTo( m+x*12, y+x*14 );
		squareShape.lineTo( m+x*10.5,y+x*9 );
		squareShape.lineTo(m+x* 14, y+x*5.5 );
    squareShape.lineTo( m+x*9, y+x*5);
    squareShape.lineTo( m+x*6.5,y+x* 0);
    squareShape.lineTo( m+x*5,y+ x*5);
    squareShape.lineTo( m+x*0, y+x*5.5);
    squareShape.lineTo( m+x*3.5,y+ x*9);
    squareShape.lineTo( m+x*2,y+ x*14);


    return squareShape;
}
function drawPlus()
{
    var x = 1.6;
    var m=-3;
    var y=0;
		var squareShape = new THREE.Shape();
		squareShape.moveTo( m+x*2 , y+x*0 );
		squareShape.lineTo( m+x*4 , y+x*0 );
		squareShape.lineTo( m+x*4 , y+x*2 );
		squareShape.lineTo( m+x*6 , y+x*2 );
		squareShape.lineTo( m+x*6 , y+x*4 );
    squareShape.lineTo( m+x*4 , y+x*4 );
    squareShape.lineTo( m+x*4 , y+x*6 );
    squareShape.lineTo( m+x*2 , y+x*6 );
    squareShape.lineTo( m+x*2 , y+x*4 );
    squareShape.lineTo( m+x*0 , y+x*4 );
    squareShape.lineTo( m+x*0 , y+x*2 );
    squareShape.lineTo( m+x*2 , y+x*2 );
    squareShape.lineTo( m+x*2 , y+x*0 );


    return squareShape;
}
function drawPlus2()
{
    var x = 1.6;
    var m=0;
    var y=-3;
    var squareShape = new THREE.Shape();
    squareShape.moveTo( m+x*2 , y+x*0 );
    squareShape.lineTo( m+x*4 , y+x*0 );
    squareShape.lineTo( m+x*4 , y+x*2 );
    squareShape.lineTo( m+x*6 , y+x*2 );
    squareShape.lineTo( m+x*6 , y+x*4 );
    squareShape.lineTo( m+x*4 , y+x*4 );
    squareShape.lineTo( m+x*4 , y+x*6 );
    squareShape.lineTo( m+x*2 , y+x*6 );
    squareShape.lineTo( m+x*2 , y+x*4 );
    squareShape.lineTo( m+x*0 , y+x*4 );
    squareShape.lineTo( m+x*0 , y+x*2 );
    squareShape.lineTo( m+x*2 , y+x*2 );
    squareShape.lineTo( m+x*2 , y+x*0 );
    return squareShape;
}
function drawFish()
{
    var x =-3, y = 5;
    var fishShape = new THREE.Shape();
    fishShape.moveTo(x,y);
    fishShape.quadraticCurveTo(x + 5, y - 8, x + 9, y - 1);
    fishShape.quadraticCurveTo(x + 10, y - 1, x + 11.5, y - 4);
    fishShape.quadraticCurveTo(x + 11.5, y, x + 11.5, y + 4);
    fishShape.quadraticCurveTo(x + 10, y + 1, x + 9, y + 1);
    fishShape.quadraticCurveTo(x + 5, y + 8, x, y);

    return fishShape;
}
function drawArc()
{
    var x=-3;
    var y=0;
    var arcShape = new THREE.Shape();
    arcShape.moveTo( x+0, 0 );
    arcShape.absarc( x+5, 5, 4, 0, Math.PI*2, false );
    var holePath = new THREE.Path();
    holePath.moveTo( x+2, 1 );
    holePath.absarc( x+5, 5, 1, 0, Math.PI*2, true );
    arcShape.holes.push( holePath );

    return arcShape;
}


function drawCircle()
{
    var x=0;
    var y=0;
    var circleRadius = 5;
    var circleShape = new THREE.Shape();
    circleShape.moveTo( 3, 5+circleRadius );
    circleShape.quadraticCurveTo( 3+circleRadius,5+ circleRadius, 3+circleRadius, 5 );
    circleShape.quadraticCurveTo( 3+circleRadius, 5-circleRadius, 3, 5-circleRadius );
    circleShape.quadraticCurveTo( 3-circleRadius, 5-circleRadius,3-circleRadius, 5 );
    circleShape.quadraticCurveTo( 3-circleRadius, 5+circleRadius, 3, 5+circleRadius );

    return circleShape;
}

/******************* Load Experiment objects code ***********************/

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Match Shape help</h2>";
    helpContent = helpContent + "<p>The game is all about matching the shapes on clouds with their respective hollow shells on trucks.</p>";
    helpContent = helpContent + "<h3>Instructions</h3>";
    helpContent = helpContent + "<p>Start the game by clicking on the start button.</p>";
    helpContent = helpContent + "<p>After completion of a level one can cick on next to continue.</p>";
    helpContent = helpContent + "<p>To finish the level just place the shapes on the trucks.</p>"
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{ 
    infoContent =  "";
    infoContent = infoContent + "<h2>Match Shape concepts</h2>";
    infoContent = infoContent + "<h3>About the Game</h3>";
    infoContent = infoContent + "<p>The game consits of different shapes produced randomly.</p>";
    infoContent = infoContent + "<p>The player needs to move the shapes to their respective trucks.</p>";
    PIEupdateInfo(infoContent);
}

function initialiseScene()
{
    /* Initialise Scene Variables */
    mySceneTLX = 0.0;
    mySceneTLY = 50;
    mySceneBRX = 52;
    mySceneBRY = 0.0;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
}

function initialiseOtherVariables()
{
    /* Barriers */
    leftB=mySceneTLX;
    rightB=mySceneBRX;
    bottomB=mySceneBRY;
    topB=mySceneTLY;
}

function createMesh(geom, imageFile) {
       var texture = new THREE.TextureLoader().load(imageFile);
       var mat = new THREE.MeshBasicMaterial();
       mat.map = texture;
       mat.transparent = true;
       mat.map.needsUpdate = true;
       var mesh = new THREE.Mesh(geom, mat);PIErender();
       return mesh;
}

function loadExperimentElements()
{
    var geometry;
    var material;
    var loader;
    var texture;

    PIEsetExperimentTitle("Match Shapes");
    PIEsetDeveloperName("Battula Sai Vinesh");
    PIEhideControlElement();

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();


    /* initialise Other Variables */
    initialiseOtherVariables();
    /* Create Shapes and add them to scene */
    geometry = new THREE.PlaneGeometry(60,30);
    playag = createMesh(geometry,"next.png");
    playag.position.set(20,30,8);
    PIEaddElement(playag);
    playag.visible = false;

    geometry = new THREE.PlaneGeometry(50,12);
    banner1 = createMesh(geometry,"banner1.png");
    PIEaddElement(banner1);

    geometry = new THREE.PlaneGeometry(50,12);
    banner2 = createMesh(geometry,"banner2.png");
    PIEaddElement(banner2);

    geometry = new THREE.PlaneGeometry(50,12);
    banner3 = createMesh(geometry,"banner3.png");
    PIEaddElement(banner3);

    geometry = new THREE.PlaneGeometry(20,12);
    plane = createMesh(geometry,"plane.png");

    PIEaddElement(plane);
    plane.visible = true;

    geometry = new THREE.PlaneGeometry(12,0.3);
    thread = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0xffffff})) ;

    thread.rotation.z = 0.1*Math.PI;
    PIEaddElement(thread);

    geometry = new THREE.PlaneGeometry(12,0.3);
    thread2 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0xffffff})) ;

    thread2.rotation.z = -0.1*Math.PI;
    PIEaddElement(thread2);

    geometry = new THREE.PlaneGeometry(200,40);
    ground = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0x558000})) ;
    ground.position.set(10,0,1 );
    PIEaddElement(ground);

    geometry = new THREE.PlaneGeometry(200,25);
    road = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0x262626})) ;
    road.position.set(0,3,6);
    PIEaddElement(road);


    geometry = new THREE.BoxGeometry( 200, mySceneH * 2, 0.20 );
    myBack = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0x4da6ff}))
    myBack.position.set(18, myCenterY,0);
    PIEaddElement(myBack);




    myMountainL = new THREE.Mesh(new THREE.ShapeGeometry(drawMountain()), new THREE.MeshLambertMaterial({color:0x004d00}));
    myMountainL.position.set(-45,15,2);


    myMountainR = new THREE.Mesh(new THREE.ShapeGeometry(drawMountain2()), new THREE.MeshLambertMaterial({color:0x004d00}));
    myMountainR.position.set(50,15,2);


    myMountainC1 = new THREE.Mesh(new THREE.ShapeGeometry(drawMountainB()), new THREE.MeshLambertMaterial({color:0x1a0d00}));
    myMountainC1.position.set(30,15,2);
    myMountainC1.scale.set(1.3,1.3,1);

    myMountainC2 = new THREE.Mesh(new THREE.ShapeGeometry(drawMountainB()), new THREE.MeshLambertMaterial({color:0x1a0d00}));
    myMountainC2.position.set(5,15,2);
    myMountainC2.scale.set(1.8,1.8,1);

    myMountainC3 = new THREE.Mesh(new THREE.ShapeGeometry(drawMountainB()), new THREE.MeshLambertMaterial({color:0x1a0d00}));
    myMountainC3.position.set(-18,15,1.4);
    myMountainC3.scale.set(1.3,1.3,1);

    myMountains = new THREE.Group();
    myMountains.add(myMountainL);
    myMountains.add(myMountainR);
    myMountains.add(myMountainC3);
    myMountains.add(myMountainC2);
    myMountains.add(myMountainC1);

    PIEaddElement(myMountains);

    myMountains.scale.set(1.1,1.1,1.1);
    myMountains.position.y = 3;




    bonnet= new THREE.Mesh(new THREE.ShapeGeometry(drawTruckB()), new THREE.MeshLambertMaterial({color:0xffffff}));
    bonnet.position.set(-27,5,7);

    var outlineMaterial1 = new THREE.MeshBasicMaterial( { color: 0x000000} );
  	var outlineMesh1 = new THREE.Mesh( new THREE.ShapeGeometry(drawTruckB()), outlineMaterial1 );
  	outlineMesh1.position.set(-27.5,5,6.9);
  	outlineMesh1.scale.multiplyScalar(1.05);



    geometry = new THREE.PlaneGeometry(8,8);
    tire1 = createMesh(geometry,"tire1.png");
    tire1.name = "tire1";
    tire1.position.set(-17.5,5.5,7 );

    geometry = new THREE.PlaneGeometry(8,8);
    tire2 = createMesh(geometry,"tire1.png");
    tire2.name = "tire2";
    tire2.position.set(13,5.5,6.7 );




    geometry = new THREE.PlaneGeometry(30,20);
    onep = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({color:0xcc0000}));
    onep.position.set(3,15,7);
    onep.scale.multiplyScalar(0.95);

    geometry = new THREE.PlaneGeometry(30,20);
    onep2 = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({color:0xffff00}));
    onep2.position.set(3,15,7);
    onep2.scale.multiplyScalar(0.95);

    geometry = new THREE.PlaneGeometry(30,20);
    onep3 = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({color:0x006600}));
    onep3.position.set(3,15,7);
    onep3.scale.multiplyScalar(0.95);

    geometry = new THREE.PlaneGeometry(30,20);
    onep4 = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({color:0x0047b3}));
    onep4.position.set(3,15,7);
    onep4.scale.multiplyScalar(0.95);

    var outlineMaterial1 = new THREE.MeshBasicMaterial( { color: 0x000000} );
  	var borderT = new THREE.Mesh( geometry, outlineMaterial1 );
  	borderT.position.set(3,15,6.9);
  	borderT.scale.multiplyScalar(1);


    truck = new THREE.Group();
    truck.add(bonnet);
    truck.add(tire1);
    truck.add(tire2);
    truck.add(outlineMesh1);

    truck.add(borderT);
    truck.scale.set(0.7,0.7,1);
    

    PIEaddElement(truck);
    truck4 = truck.clone();
    truck2 = truck.clone();
    truck3 = truck.clone();

    truck.add(onep);
    truck2.add(onep2);
    truck3.add(onep3);
    truck4.add(onep4);

    PIEaddElement(truck2);
    PIEaddElement(truck3);
    PIEaddElement(truck4);

    geometry = new THREE.PlaneGeometry(25,15);
    cloud1 = createMesh(geometry,"cloud.png");

    geometry = new THREE.PlaneGeometry(25,15);
    cloud2 = createMesh(geometry,"cloud.png");



    geometry = new THREE.PlaneGeometry(25,15);
    cloud3 = createMesh(geometry,"cloud.png");



    geometry = new THREE.PlaneGeometry(25,15);
    cloud4 = createMesh(geometry,"cloud.png");


    PIEaddElement(cloud1);
    PIEaddElement(cloud2);
    PIEaddElement(cloud3);
    PIEaddElement(cloud4);


    myTriangle = new THREE.Mesh(new THREE.ShapeGeometry(drawTriangle()), new THREE.MeshLambertMaterial({color:0x00802b}));
    myTriangle.visible = false;
    PIEaddElement(myTriangle);

    myArrow = new THREE.Mesh(new THREE.ShapeGeometry(drawArrow()), new THREE.MeshLambertMaterial({color:0xFF5733}));
    myArrow.visible = false;
    PIEaddElement(myArrow);

    myTrap = new THREE.Mesh(new THREE.ShapeGeometry(drawTrap()), new THREE.MeshLambertMaterial({color:0xFFC300}));
    myTrap.visible = false;
    PIEaddElement(myTrap);

    myParl = new THREE.Mesh(new THREE.ShapeGeometry(drawParl()), new THREE.MeshLambertMaterial({color:0x900C3F}));
    myParl.visible = false;
    PIEaddElement(myParl);

    myV = new THREE.Mesh(new THREE.ShapeGeometry(drawV()), new THREE.MeshLambertMaterial({color:0x900C3F}));
    myV.visible = false;
    PIEaddElement(myV);

    myHeart = new THREE.Mesh(new THREE.ShapeGeometry(drawHeart()), new THREE.MeshLambertMaterial({color:0xEC7063}));
    myHeart.visible = false;
    myHeart.rotation.z = Math.PI;
    PIEaddElement(myHeart);

    myRhomb = new THREE.Mesh(new THREE.ShapeGeometry(drawRhomb()), new THREE.MeshLambertMaterial({color:0xCD6155}));
    myRhomb.visible = false;
    PIEaddElement(myRhomb);

    mySquare = new THREE.Mesh(new THREE.ShapeGeometry(drawSquare()), new THREE.MeshLambertMaterial({color:0x0000e6}));
    mySquare.visible = false;
    PIEaddElement(mySquare);

    myFish = new THREE.Mesh(new THREE.ShapeGeometry(drawFish()), new THREE.MeshLambertMaterial({color:0x6B6B69}));
    myFish.visible = false;
    PIEaddElement(myFish);

    myArc = new THREE.Mesh(new THREE.ShapeGeometry(drawArc()), new THREE.MeshLambertMaterial({color:0x006080}));
    myArc.visible = false;
    PIEaddElement(myArc);


    myCircle = new THREE.Mesh(new THREE.ShapeGeometry(drawCircle()), new THREE.MeshLambertMaterial({color:0x601f1f}));
    myCircle.visible = false;
    PIEaddElement(myCircle);

    myPentagon = new THREE.Mesh(new THREE.ShapeGeometry(drawPentagon()), new THREE.MeshLambertMaterial({color:0x9900cc}));
    myPentagon.visible = false;
    PIEaddElement(myPentagon);

    myHexagon = new THREE.Mesh(new THREE.ShapeGeometry(drawHexagon()), new THREE.MeshLambertMaterial({color:0x22401B}));
    myHexagon.visible = false;
    PIEaddElement(myHexagon);

    myStar = new THREE.Mesh(new THREE.ShapeGeometry(drawStar()), new THREE.MeshLambertMaterial({color:0x33ccff}));
    myStar.visible = false;
    PIEaddElement(myStar);

    myPlus = new THREE.Mesh(new THREE.ShapeGeometry(drawPlus()), new THREE.MeshLambertMaterial({color:0xededed}));
    myPlus.visible = false;
    PIEaddElement(myPlus);
    
    myCross = new THREE.Mesh(new THREE.ShapeGeometry(drawPlus2()), new THREE.MeshLambertMaterial({color:0xededed}));
    myCross.visible = false;
    myCross.rotation.z = Math.PI*0.25;
    PIEaddElement(myCross); 

    myU = new THREE.Mesh(new THREE.ShapeGeometry(drawU()), new THREE.MeshLambertMaterial({color:0xededed}));
    myU.visible = false;
    PIEaddElement(myU); 

    myL = new THREE.Mesh(new THREE.ShapeGeometry(drawL()), new THREE.MeshLambertMaterial({color:0xededed}));
    myL.visible = false;
    PIEaddElement(myL); 

    myH = new THREE.Mesh(new THREE.ShapeGeometry(drawH()), new THREE.MeshLambertMaterial({color:0xededed}));
    myH.visible = false;
    PIEaddElement(myH); 

    myI = new THREE.Mesh(new THREE.ShapeGeometry(drawI()), new THREE.MeshLambertMaterial({color:0xededed}));
    myI.visible = false;
    PIEaddElement(myI); 

    myY = new THREE.Mesh(new THREE.ShapeGeometry(drawY()), new THREE.MeshLambertMaterial({color:0xededed}));
    myY.visible = false;
    PIEaddElement(myY); 



    /* Instantiate experiment controls */
    initialiseControls();

    /* Reset all positions */
    resetExperiment();
    
    PIEsetAreaOfInterest(mySceneTLX-15, mySceneTLY+15, mySceneBRX, mySceneBRY-15);

}



/******************* End of Load Experiment objects code ***********************/

/******************* Reset Experiment code ***********************/

/**
 * This function resets the position of all experiment elements to their default values.
 * <p>
 * This is called during initial document load.
 * This is also be called by the system provided reset button.
 * <p>
 * Apart from the position, this should also reset all variables which can be controlled by the user.
 * This function will also clear any output variables/graphs
 */
function next(){

}

function resetExperiment()
{

    playag.visible = false;
    pass = 0;
    temp1 = -66;
    temp2 = -96;
    temp3 = -136;
    temp4 = -166;
    truck.position.x = 110;
    truck.position.y = 10;
    truck2.position.x = 110;
    truck2.position.y= -10;
    truck3.position.x = 110;
    truck3.position.y = 10;
    truck4.position.x = 110;
    truck4.position.y = -10;
    banner1.position.set(-80,50,7.4 );
    banner2.position.set(-80,50,7.4 );
    banner3.position.set(-80,50,7.4 );
    thread.position.set(-70,48,7);
    thread2.position.set(-70,53.5,7);
    plane.position.set(-60,50,7.4 );
    /* initialise Other Variables */
    initialiseOtherVariables();
    match = 0;
    k=1;
    k1=1;
    k2=1;
    k3=1;
    k4=1;
    myU.visible = false;
    myH.visible = false;
    myTriangle.visible = false;
    mySquare.visible = false;
    myFish.visible = false;
    myArc.visible = false;
    myArrow.visible = false;
    myTrap.visible = false;
    myParl.visible = false;
    myCircle.visible = false;
    myPentagon.visible = false;
    myHexagon.visible = false;
    myStar.visible = false;
    myPlus.visible = false;
    myRhomb.visible = false;
    myHeart.visible = false;
    myCross.visible = false;
    myV.visible = false;
    myL.visible = false;
    myI.visible = false;
    myY.visible = false;
    cloud1.position.set(-70,45,7.2);
    cloud2.position.set(-70,35,7.2);
    cloud3.position.set(-70,45,7.2);
    cloud4.position.set(-70,35,7.2);

    if(myShapes.length<4){
      myShapes = new Array();
      myShapes.push(myTriangle);
      myShapes.push(mySquare);
      myShapes.push(myFish);
      myShapes.push(myArc);
      myShapes.push(myArrow);
      myShapes.push(myTrap);
      myShapes.push(myParl);
      myShapes.push(myCircle);
      myShapes.push(myPentagon);
      myShapes.push(myHexagon);
      myShapes.push(myStar);
      myShapes.push(myPlus);
      myShapes.push(myRhomb);
      myShapes.push(myHeart);
      myShapes.push(myV);
      myShapes.push(myCross);
      myShapes.push(myU);
      myShapes.push(myL);
      myShapes.push(myH);
      myShapes.push(myI);
      myShapes.push(myY);
    }
    

    brand = Math.floor(Math.random()*3);

    var num = Math.floor(Math.random()*myShapes.length)
    p1 = myShapes[num];
    p1.name = 0;
    PIEdragElement(p1);
    PIEsetDrag(p1, myOneDrag);
    PIEsetDragEnd(p1, myOneEnd);

    myShapes.splice(num, 1);


    num = Math.floor(Math.random()*myShapes.length)
    p2 = myShapes[num];
    p2.name = 1;
    PIEdragElement(p2);
    PIEsetDrag(p2, myTwoDrag);
    PIEsetDragEnd(p2, myTwoEnd);

    myShapes.splice(num, 1);
    // cloud2g.add(p2);


    num = Math.floor(Math.random()*myShapes.length)
    p3 = myShapes[num];
    p3.name = 2;
    PIEdragElement(p3);
    PIEsetDrag(p3, myThreeDrag);
    PIEsetDragEnd(p3, myThreeEnd);

    myShapes.splice(num, 1);


    num = Math.floor(Math.random()*myShapes.length)
    p4 = myShapes[num];
    p4.name = 3;
    PIEdragElement(p4);
    PIEsetDrag(p4, myFourDrag);
    PIEsetDragEnd(p4, myFourEnd);

    myShapes.splice(num, 1);


    p1.visible = true;
    p2.visible = true;
    p3.visible = true;
    p4.visible = true;


    p1.position.set(-77,47,7.1);
    p2.position.set(-77,37,7.1);
    p3.position.set(-77,47,7.1);
    p4.position.set(-77,37,7.1);

    if(h1!=null){
      h1.visible = false;
      h2.visible = false;
      h3.visible = false;
      h4.visible = false;
    }

    h1 = p1.clone();
    h2 = p2.clone();
    h3 = p3.clone();
    h4 = p4.clone();

    h1.visible = true;
    h2.visible = true;
    h3.visible = true;
    h4.visible = true;


    myShadows = new Array();
    myShadows.push(h1);
    myShadows.push(h2);
    myShadows.push(h3);
    myShadows.push(h4);

    num = Math.floor(Math.random()*myShadows.length)
    s1 = myShadows[num];
    // DragEnd[s1.name][0]=-15;
    DragEnd[s1.name][1]=15.6;
    s1.material = s1.material.clone();
    s1.material.color.setHex(0x000000);
    myShadows.splice(num, 1);
    truck.add(s1);

    num = Math.floor(Math.random()*myShadows.length)
    s2 = myShadows[num];
    // DragEnd[s2.name][0]=;
    DragEnd[s2.name][1]=-4.4;
    s2.material = s2.material.clone();
    s2.material.color.setHex(0x000000);
    myShadows.splice(num, 1);
    truck2.add(s2);


    num = Math.floor(Math.random()*myShadows.length)
    s3 = myShadows[num];
    DragEnd[s3.name][0]=20;
    DragEnd[s3.name][1]=15.6;
    s3.material = s3.material.clone();
    s3.material.color.setHex(0x000000);
    myShadows.splice(num, 1);
    truck3.add(s3);

    num = Math.floor(Math.random()*myShadows.length)
    s4 = myShadows[num];
    DragEnd[s4.name][0]=20;
    DragEnd[s4.name][1]=-4.4;
    s4.material = s4.material.clone();
    s4.material.color.setHex(0x000000);
    myShadows.splice(num, 1);
    truck4.add(s4);

    s1.scale.set(10/7,10/7,1);
    s2.scale.set(10/7,10/7,1);
    s3.scale.set(10/7,10/7,1);
    s4.scale.set(10/7,10/7,1);


    s1.position.set(0,8,7);
    s2.position.set(0,8,7);
    s3.position.set(0,8,7);
    s4.position.set(0,8,7);

    // PIEaddElement(s1);
    // PIEaddElement(s2);
    // PIEaddElement(s3);
    // PIEaddElement(s4);


}

/******************* End of Reset Experiment code ***********************/


/******************* Update (animation changes) code ***********************/

/**
 * This function updates the location of all experiment elements during each animation frame.
 * <p>
 * The function receives both animation time as well as the dt (time difference) from last call.
 * This function is expected to implement the laws of physics to update the position.
 * This function will also update any output variables/graphs
 * <p>
 * Important Note : Boundary Events
 * <p>
 * During any physics simulation you will reach a boundary event.
 * In our case, the boundary even is the ball hitting any of the walls.
 * The boundary event typically changes the sign of velocity/acceleration.
 * The boundary event is most likely to happen in the middle of the two calls.
 * The library allows the experiment to change the simulation time by processing partial time.
 * This function can call a library function with the time remaining to be processed before exiting.
 * <p>
 * @param  t       The time in milliseconds elapsed since the beginning of animation cycle
 * @param  dt      The time in milliseconds elapsed since the last acll to this function
 */

function updateExperimentElements(t, dt)
{
  var time  = t/1000;
  if(match==4){
    pass=1;
    plane.position.x = plane.position.x + 20*dt/1000;
    if(plane.position.x >-40){
      if(brand == 0){
        banner1.position.x = banner1.position.x + 20*dt/1000;
      }
      else if(brand == 1){
        banner2.position.x = banner2.position.x + 20*dt/1000;
      }
      else if(brand == 2){
        banner3.position.x = banner3.position.x + 20*dt/1000;
      }

    }
    if(plane.position.x >-60){
      thread.position.x = thread.position.x + 20*dt/1000;
      thread2.position.x = thread2.position.x + 20*dt/1000;
    }
  }
  if(truck.position.x>-15||pass==1){
    truck.position.x = truck.position.x - 30*dt/1000;
    truck.getObjectByName("tire1").rotation.z = truck.getObjectByName("tire1").rotation.z + 0.005*Math.PI;
    truck.getObjectByName("tire2").rotation.z = truck.getObjectByName("tire2").rotation.z + 0.005*Math.PI;
    DragEnd[s1.name][0]=truck.position.x;
    if(pass==1){
      p1.position.x = p1.position.x - 30*dt/1000;
    }
  }
  if(truck2.position.x>10&&truck.position.x<85&&truck.position.x>-15||pass==1){

    truck2.position.x = truck2.position.x - 30*dt/1000;
    truck2.getObjectByName("tire1").rotation.z = truck2.getObjectByName("tire1").rotation.z + 0.005*Math.PI;
    truck2.getObjectByName("tire2").rotation.z = truck2.getObjectByName("tire2").rotation.z + 0.005*Math.PI;
    DragEnd[s2.name][0]=truck2.position.x;
    if(pass==1){
      p2.position.x = p2.position.x - 30*dt/1000;
    }
  }
  if(truck3.position.x>40&&truck.position.x<60&&truck.position.x>-15||pass==1){

    truck3.position.x = truck3.position.x - 30*dt/1000;
    truck3.getObjectByName("tire1").rotation.z = truck3.getObjectByName("tire1").rotation.z + 0.005*Math.PI;
    truck3.getObjectByName("tire2").rotation.z = truck3.getObjectByName("tire2").rotation.z + 0.005*Math.PI;
    DragEnd[s3.name][0]=truck3.position.x;
    if(pass==1){
      p3.position.x = p3.position.x - 30*dt/1000;
    }
  }
  if(truck4.position.x>60&&truck.position.x<35&&truck.position.x>-15||pass==1){

    truck4.position.x = truck4.position.x - 30*dt/1000;
    truck4.getObjectByName("tire1").rotation.z = truck4.getObjectByName("tire1").rotation.z + 0.005*Math.PI;
    truck4.getObjectByName("tire2").rotation.z = truck4.getObjectByName("tire2").rotation.z + 0.005*Math.PI;
    DragEnd[s4.name][0]=truck4.position.x;
    if(pass==1){
      p4.position.x = p4.position.x - 30*dt/1000;
    }
  }
  if(plane.position.x > 140){
    playag.visible = true;
  }

  if(true){
    if(k1==1){
      p1.position.x = temp1;
      p1.position.y = 47;
    }
    if(k2==1){
      p2.position.x = temp2;
      p2.position.y = 37;
    }
    if(k3==1){
      p3.position.x = temp3;
      p3.position.y = 47;
    }
    if(k4==1){
      p4.position.x = temp4;
      p4.position.y = 37;
    }
    temp1 = temp1 + 6*dt/1000;
    temp2 = temp2 + 6*dt/1000;
    temp3 = temp3 + 6*dt/1000;
    temp4 = temp4 + 6*dt/1000;
    cloud1.position.x = temp1+2;
    cloud2.position.x = temp2+2;
    cloud3.position.x = temp3+2;
    cloud4.position.x = temp4+2;
  }
  if(cloud1.position.x > 90){
    temp1 = -60;
  }
  if(cloud2.position.x > 90){
    temp2 = -60;
  }
  if(cloud3.position.x > 90){
    temp3 = -60;
  }
  if(cloud4.position.x > 90){
    temp4 = -60;
  }

}

/******************* Update (animation changes) code ***********************/
