
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

var myBack;          
// var myBack2;
// var myBack3;
var finalCheck = 0;
var quizBack1;
var quizBack2;
var quizBack3;
/* Objects */
var myY;
var cash;
var coin;
var flask;
var fork;
var glove;
var knife;
var metalHandle;
var pan;
var spoon;
var woodHandle;
var current;
var ring;
var neclace;
var book1;
var eraser;
var crayons;
var pencil;
var scale;
var magnifier;
var book2;
var bottle;
var hat;





var circle1;
var circle2;
var kl;
var time;
var holderText;


/* Boxes */
var again;
var insulatorf;
var insulatorb;
var conductorf;
var conductorb;
var myObjects2 = new Array();
var myObjects;
var ob1;
var ob2;
var ob3;
var ob4;
var ob5;
var ob6;
var ob7;
var ob8;

var circuit;
var circuitOff;
var wire1;
var wire2;
var wire3;
var wire4;
var wire5;
var wire6;
var wire7;
var wire8;
var wire9;
var wire10;
var wire11;
var wire12;
var wire13;
var wire14;
var wire15;
var battery;

var bulbOn;
var bulbOff;

var copperText;
var copper;
var glassText;
var glass;
var silverText;
var silver;
var goldText;
var gold;
var woodText;
var wood;
var waxText;
var wax;
var cottonText;
var cotton;
var waterText;
var water;
var group1;

var change=1;
var change2=1;

var switchOn;
var switchOff;
var switchCheck = 0;


var DragEnd = [
  [-40,50,1.9],
  [-40,30,1.9],
  [-40,10,1.9],
  [0,50,1.9],
  [70,50,1.9],
  [70,30,1.9],
  [70,10,1.9],
  [40,50,1.9],
]

var DragEnd2 = [
  [-30,50,1.9],
  [0,50,1.9],
  [30,50,1.9],
  [60,50,1.9],
  [-30,35,1.9],
  [0,35,1.9],
  [30,35,1.9],
  [60,35,1.9],
]

var Drag = [
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    1
]
var match;
// var DragEnd2 = [
//   [-20,50,2],
//   [0,50,2],
//   [20,50,2],
//   [40,50,2],
//   [-20,30,2],
//   [0,30,2],
//   [20,30,2],
//   [40,30,2],
// ]
/* Shapes Collection */


var OneX;
var OneY;
var OneZ;
var k1;
var match;





/******************* Interaction functions ***********************/

function myOneEnd(element, newpos)
{
  element.position.set(DragEnd[element.name][0],DragEnd[element.name][1],DragEnd[element.name][2]);
}

function myInsEnd(element, newpos)
{
  // element.scale.set(0.5,0.5,1);
  element.position.set(-15,newpos.y,1.9);
  PIEsetDragEnd(element,myOneEnd);
  
}

function myInsDrag(element, newpos)
{
    // var change = 1;
    OneX = newpos.x;
    OneY = newpos.y;
    OneZ = newpos.z;
    if((newpos.x > -22 && newpos.x < 15 && newpos.y > 25)||(newpos.x > 17 && newpos.x < 57 && newpos.y > 25)){
        change = 1;
    }
    else if(((newpos.x <-22 || newpos.x > 15 )&&newpos. y >-5)&&(newpos.x <17 || newpos.x > 57 )&&newpos. y >-5){
        change = 0;
    }
    else if((newpos.x>-22 && newpos.x < 15 && newpos.y < -5)||(newpos.x>17 && newpos.x < 57 && newpos.y < -5)){
        change = 2;
    }
    if(newpos.x > -22 && newpos.x < -5  && newpos.y < 25 && newpos.y > -5){
        if(change == 0){
            OneX = -22;
        }
        else if(change ==1){
            OneX = newpos.x;
        }
        else if(change == 2){
            OneY =-5;
        }
    }
    else if(newpos.x < 15 && newpos.x > -5  && newpos.y < 25  && newpos.y > -5){
        if(change == 0){
            OneX = 15;
        }
        else if(change == 1){
            OneX = newpos.x;    
        }
        else if(change == 2){
            OneY = -5;
        }
    }
    else if(newpos.x > 17 && newpos.x < 37  && newpos.y < 25 && newpos.y > -5){
        if(change == 0){
            OneX = 17;
        }
        else if(change ==1){
            OneX = newpos.x;
        }
        else if(change == 2){
            OneY =-5;
        }
    }
    else if(newpos.x < 57 && newpos.x > 37  && newpos.y < 25  && newpos.y > -5){
        if(change == 0){
            OneX = 57;
        }
        else if(change == 1){
            OneX = newpos.x;    
        }
        else if(change== 2){
            OneY = -5;
        }
    }
    if(newpos.x >  -8 && newpos.x < 8 && newpos.y < 17 && newpos.y > 3 && change == 1 ){
        match = match +1;
      OneX = -2.5;
      OneY = 12.5;
      OneZ = 1.9;
      PIEsetDrag(element,false);
      PIEsetDragEnd(element,myInsEnd);
      PIEsetDragStart(element,false);
    }
    else if(newpos.x > 32 && newpos.x < 48 && newpos.y < 17 && newpos.y > 3 && change == 1){
       OneX = DragEnd[element.name][0];
      OneY = DragEnd[element.name][1];
      OneZ = DragEnd[element.name][2];
    }
    element.position.set(OneX, OneY, OneZ);
}

function myCondEnd(element, newpos)
{
  // element.scale.set(0.5,0.5,1);
  element.position.set(37.5,12.5,1.9);
}

function myCondDrag(element, newpos)
{
    OneX = newpos.x;
    OneY = newpos.y;
    OneZ = newpos.z;
    if((newpos.x > -22 && newpos.x < 15 && newpos.y > 25)||(newpos.x > 17 && newpos.x < 57 && newpos.y > 25)){
        change = 1;
    }
    else if(((newpos.x <-22 || newpos.x > 15 )&&newpos. y >-5)&&(newpos.x <17 || newpos.x > 57 )&&newpos. y >-5){
        change = 0;
    }
    else if((newpos.x>-22 && newpos.x < 15 && newpos.y < -5)||(newpos.x>17 && newpos.x < 57 && newpos.y < -5)){
        change = 2;
    }
    if(newpos.x > -22 && newpos.x < -5  && newpos.y < 25 && newpos.y > -5){
        if(change == 0){
            OneX = -22;
        }
        else if(change ==1){
            OneX = newpos.x;
        }
        else if(change == 2){
            OneY =-5;
        }
    }
    else if(newpos.x < 15 && newpos.x > -5  && newpos.y < 25  && newpos.y > -5){
        if(change == 0){
            OneX = 15;
        }
        else if(change == 1){
            OneX = newpos.x;    
        }
        else if(change == 2){
            OneY = -5;
        }
    }
    else if(newpos.x > 17 && newpos.x < 37  && newpos.y < 25 && newpos.y > -5){
        if(change == 0){
            OneX = 17;
        }
        else if(change ==1){
            OneX = newpos.x;
        }
        else if(change == 2){
            OneY =-5;
        }
    }
    else if(newpos.x < 57 && newpos.x > 37  && newpos.y < 25  && newpos.y > -5){
        if(change == 0){
            OneX = 57;
        }
        else if(change == 1){
            OneX = newpos.x;    
        }
        else if(change== 2){
            OneY = -5;
        }
    }
    
    if(newpos.x > 32 && newpos.x < 48 && newpos.y < 17 && newpos.y > 3 && change == 1){
      match = match +1;
      OneX = 37.5;
      OneY = 12.5;
      OneZ = 1.9;
      PIEsetDrag(element,false);
      PIEsetDragEnd(element,myCondEnd);
      PIEsetDragStart(element,false);
    }
    else if(newpos.x >  -8 && newpos.x < 8 && newpos.y < 17 && newpos.y > 3 && change == 1 ){
      OneX = DragEnd[element.name][0];
      OneY = DragEnd[element.name][1];
      OneZ = DragEnd[element.name][2];
      // element.position.set(DragEnd[element.name][0],DragEnd[element.name][1],DragEnd[element.name][2]);
    }
    element.position.set(OneX, OneY, OneZ);
}

function myMainEnd(element, newpos)
{
  element.position.set(-10.5,20.5,2.5);
  PIEsetDragEnd(element,myTwoEnd);
}

function myMainDrag(element, newpos)
{
    OneX = newpos.x;
    OneY = newpos.y;
    OneZ = newpos.z;
    if(newpos.x > -16 && newpos.x < -6 && newpos.y < 22 && newpos.y > 18){
      OneX = -10.5;
      OneY = 20.5;
      OneZ = 2.5;
      // PIEsetDrag(element,false);
      PIEsetDragEnd(element,myMainEnd);
      PIEsetDragStart(element,false);
      if(Drag[element.name] == 0){
        finalCheck = 1;
      }
      else{
        finalCheck = 0;
      }
    }
    element.position.set(OneX, OneY, OneZ);
}

function myTwoEnd(element, newpos)
{
  element.position.set(DragEnd2[element.name][0],DragEnd2[element.name][1],DragEnd2[element.name][2]);
  finalCheck = 0;
}

/******************* End of Interaction functions ***********************/

function initialiseControlVariables()
{

}


function initialiseControls()
{
  PIEaddDisplayCommand("Learning",function(){
    current = 0;
    group1.position.z = 0;
    again.visible = false;
    match =0;
    resetExperiment();
    // PIEstopAnimation();
  });
   PIEaddDisplayCommand("Quiz",function(){
    current = 1;
    quiz();
    group1.position.z = -2;
  });
   PIEaddDisplayCommand("Switch",function(){
    if(current == 0){
        if(switchCheck == 0){
            
            // resetExperiment();
            switchOn.visible = true;
            switchOff.visible = false;
            switchCheck = 1;
        }
        else if(switchCheck == 1){
            
            // resetExperiment();
            switchOn.visible = false;
            switchOff.visible = true;
            switchCheck = 0;
        }
    }
        
   });
   PIEaddDisplayCommand("Reset",function(){
    if(current == 0){
        resetExperiment();
    }
    else{
        ob1.position.set(-40,50,1.9);
        ob2.position.set(-40,30,1.9);
        ob3.position.set(-40,10,1.9);
        ob4.position.set(0,50,1.9);
        ob5.position.set(70,50,1.9);
        ob6.position.set(70,30,1.9);
        ob7.position.set(70,10,1.9);
        ob8.position.set(40,50,1.9);
    }
    
  });
   PIEaddDisplayCommand("Random",function(){
    if(current == 1){
        quiz();    
    }
    
   })


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


/******************* Load Experiment objects code ***********************/

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Conductors and Insluators help</h2>";
    helpContent = helpContent + "<p>There are two phases in the given activity - </p>";
    helpContent = helpContent + "<p>1. Learning</p>";
    helpContent = helpContent + "<p>2. Quiz</p>";
    helpContent = helpContent + "<h3>Learning</h3>";
    helpContent = helpContent + "<p>In this phase the student can randomly place any material in the holder circuit and test if it is a conductor or insulator.</p>";
    helpContent = helpContent + "<p>After placing any material the student should switch ON the circuit in order to test the materail.</p>";
    helpContent = helpContent + "<p>If the bulb glows after placing a material its a conductor.</p>";
    helpContent = helpContent + "<p>If the bulb doesn't glow after placing a materail its a insulator.</p>";
    helpContent = helpContent + "<h3>Quiz</h3>"
    helpContent = helpContent + "<p>In this phase there are two boxes present at the center of he screen.</p>";
    helpContent = helpContent + "<p>One for insultors and one for conductors.</p>";
    helpContent = helpContent + "<p>Student is required to place the elements present according to their respective properties.</p>";
    helpContent = helpContent + "<h3>Controls</h3>";
    helpContent = helpContent + "<p>1.Learning - This button displays the learning phase screen.</p>";
    helpContent = helpContent + "<p>2.Quiz - This button displays the quiz section phase screen.</p>";
    helpContent = helpContent + "<p>3.Switch - Toggles the switch between ON and OFF.</p>";
    helpContent = helpContent + "<p>4.Reset - This button resets the positions of elements in any phase.</p>";
    helpContent = helpContent + "<p>5.Random - This button randomizes and inserts new elements in the quiz phase.</p>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{ 
    infoContent =  "";
    infoContent = infoContent + "<h2>Conductors and Insulators concepts</h2>";
    infoContent = infoContent + "<h3>Conductors</h3>";
    infoContent = infoContent + "<p>A conductor is an object or type of material that allows the flow of an electrical current in one or more directions.</p>";
    helpContent = helpContent + "<p>A metal wire is a common electrical conductor.</p>";
    helpContent = helpContent + "<p>Electrical current is generated by the flow of negatively charged electrons, positively charged holes, and positive or negative ions in some cases.</p>";
    infoContent = infoContent + "<p>The player needs to move the shapes to their respective trucks.</p>";
    infoContent = infoContent + "<h3>Insulators</h3>";
    infoContent = infoContent + "<p>An electrical insulator is a material whose internal electric charges do not flow freely; very little electric current will flow through it under the influence of an electric field.</p>";
    infoContent = infoContent + "<p>A perfect insulator does not exist, because even insulators contain small numbers of mobile charges (charge carriers) which can carry current.</p>"
    infoContent = infoContent + "<p>Insulators are used in electrical equipment to support and separate electrical conductors without allowing current through themselves.</p>"
    infoContent = infoContent + "<p>Examples include rubber-like polymers and most plastics which can be thermoset or thermoplastic in nature.</p>"

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
    current = 0;
    var geometry;
    var material;
    var loader;
    var texture;
    var temp;
    PIEsetExperimentTitle("Conductors and Insulators");
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


    geometry = new THREE.BoxGeometry( 200, mySceneH * 2, 0.20 );
    myBack = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0x003300}))
    myBack.position.set(18, myCenterY,0);
    PIEaddElement(myBack);


    geometry = new THREE.BoxGeometry( 83.82, 33, 1 );
    circuit = createMesh(geometry,"circuitF2.png");
    circuit.position.set(0,8,2);
    circuit.visible = false;
    PIEaddElement(circuit);


    geometry = new THREE.BoxGeometry( 10.496, 16.5, 0 );
    bulbOff = createMesh(geometry,"bulbOff.png");
    bulbOff.position.set(34,10,2.5);
    PIEaddElement(bulbOff);

    geometry = new THREE.BoxGeometry( 12.045*1.3, 16.5*1.3, 0 );
    bulbOn = createMesh(geometry,"bulbOn.png");
    bulbOn.position.set(34,12.5,2.5);
    PIEaddElement(bulbOn);

    geometry = new THREE.BoxGeometry( 10*1.4, 5.64*1.4, 0 );
    switchOff = createMesh(geometry,"switchOff.png");
    switchOff.position.set(-5,-7,2.5);
    switchOff.name = 456;
    PIEaddElement(switchOff);

    geometry = new THREE.BoxGeometry( 10*1.4, 5.64*1.4, 0 );
    switchOn = createMesh(geometry,"switchOn.png");
    switchOn.position.set(-5,-7,2.5);
    switchOn.visible = false;
    switchOn.name = 123;
    PIEaddElement(switchOn);



    geometry = new THREE.BoxGeometry( 129, 20, 0.1 );
    quizBack1 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0xb3b3b3}))
    quizBack1.position.set(15.5,50,1.8);
    quizBack1.visible = false;
    PIEaddElement(quizBack1);

    geometry = new THREE.BoxGeometry( 20, 60, 0.1 );
    quizBack2 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0xb3b3b3}))
    quizBack2.position.set(-39,25,1.8);
    quizBack2.visible = false;
    PIEaddElement(quizBack2);

    geometry = new THREE.BoxGeometry( 20, 60, 0.1 );
    quizBack3 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0xb3b3b3}))
    quizBack3.position.set(70,25,1.8);
    quizBack3.visible = false;
    PIEaddElement(quizBack3);

    geometry = new THREE.BoxGeometry( 19, 10, 0.1 );
    copper = createMesh(geometry,"copper.png");
    PIEaddElement(copper);
    copper.position.set(-30,50,1.9);


    geometry = new THREE.BoxGeometry( 19, 10, 0.1 );
    gold = createMesh(geometry,"gold2.png");
    gold.position.set(0,50,1.9);
    PIEaddElement(gold);
    

    geometry = new THREE.BoxGeometry( 19, 10, 0.1 );
    silver = createMesh(geometry,"silver2.png");
    silver.position.set(30,50,1.9);
    PIEaddElement(silver);
    

    geometry = new THREE.BoxGeometry( 19, 10, 0.1 );
    wood = createMesh(geometry,"wood2.png");
    wood.position.set(60,50,1.9);
    PIEaddElement(wood);
    

    geometry = new THREE.BoxGeometry( 19, 10, 0.1 );
    glass = createMesh(geometry,"glass2.png");
    glass.position.set(-30,35,1.9);
    PIEaddElement(glass);
   
    geometry = new THREE.BoxGeometry( 19, 10, 0.1 );
    cotton = createMesh(geometry,"cotton2.png");
    cotton.position.set(0,35,1.9);
    PIEaddElement(cotton);
    

    geometry = new THREE.BoxGeometry( 19, 10, 0.1 );
    water = createMesh(geometry,"water2.png");
    water.position.set(30,35,1.9);
    PIEaddElement(water);

    geometry = new THREE.BoxGeometry( 19, 10, 0.1 );
    wax = createMesh(geometry,"wax2.png");
    wax.position.set(60,35,1.9);
    PIEaddElement(wax);

    

    copper.name = 0;
    gold.name = 1;
    silver.name = 2;
    wood.name = 3;
    glass.name = 4;
    cotton.name = 5;
    water.name = 6;
    wax.name = 7;

    geometry = new THREE.BoxGeometry( 30, 21.42, 0 );
    insulatorf = createMesh(geometry,"insulatorBoxFront.png");
    insulatorf.position.set(-5,11,2);
    PIEaddElement(insulatorf);
    insulatorf.visible = false;


    geometry = new THREE.BoxGeometry( 30, 4.73, 0 );
    insulatorb = createMesh(geometry,"boxBack2.png");
    insulatorb.position.set(-5,24.2,1.8);
    PIEaddElement(insulatorb);
    insulatorb.visible = false;

    geometry = new THREE.BoxGeometry( 30, 21.42, 0 );
    conductorf = createMesh(geometry,"conductorBoxFront.png");
    conductorf.position.set(37,11,2);
    PIEaddElement(conductorf);
    conductorf.visible = false;

    geometry = new THREE.BoxGeometry( 30, 4.73, 0 );
    conductorb = createMesh(geometry,"boxBack2.png");
    conductorb.position.set(37,24.2,1.8);
    conductorb.visible = false;
    PIEaddElement(conductorb);

    geometry = new THREE.BoxGeometry( 50, 50, 0 );
    again = createMesh(geometry,"again2.png");
    again.position.set(18,24.5,2);
    again.visible = false;
    PIEaddElement(again);

    geometry = new THREE.PlaneGeometry(16.5,12.5);
    cash = createMesh(geometry,"cash.png");
    cash.visible = false;
    PIEaddElement(cash);

    geometry = new THREE.PlaneGeometry(10.625,12.5);
    coin = createMesh(geometry,"coin.png");
    coin.visible = false;
    PIEaddElement(coin);

    geometry = new THREE.PlaneGeometry(9.25,12.5);
    flask = createMesh(geometry,"flask.png");
    flask.visible = false;
    PIEaddElement(flask);

    geometry = new THREE.PlaneGeometry(5.625,12.5);
    fork = createMesh(geometry,"fork.png");
    fork.visible = false;
    PIEaddElement(fork);

    geometry = new THREE.PlaneGeometry(10.25,12.5);
    glove = createMesh(geometry,"glove.png");
    glove.visible = false;
    PIEaddElement(glove);

    geometry = new THREE.PlaneGeometry(8,12.5);
    knife = createMesh(geometry,"knife.png");
    knife.visible = false;
    PIEaddElement(knife);

    geometry = new THREE.PlaneGeometry(4,12.5);
    metalHandle = createMesh(geometry,"metalHandle.png");
    metalHandle.visible = false;
    PIEaddElement(metalHandle);

    geometry = new THREE.PlaneGeometry(12.375,12.5);
    pan = createMesh(geometry,"pan.png");
    pan.visible = false;
    PIEaddElement(pan);

    geometry = new THREE.PlaneGeometry(3,12.5);
    spoon = createMesh(geometry,"spoon.png");
    spoon.visible = false;
    PIEaddElement(spoon);

    geometry = new THREE.PlaneGeometry(4.25,12.5);
    woodHandle = createMesh(geometry,"woodHandle.png");
    woodHandle.visible = false;
    PIEaddElement(woodHandle);


    geometry = new THREE.PlaneGeometry(10.68,12.5);
    ring = createMesh(geometry,"ring.png");
    ring.visible = false;
    PIEaddElement(ring);


    geometry = new THREE.PlaneGeometry(12.125,12.5);
    neclace = createMesh(geometry,"neclace.png");
    neclace.visible = false;
    PIEaddElement(neclace);


    geometry = new THREE.PlaneGeometry(16.5,12.5);
    book1 = createMesh(geometry,"book1.png");
    book1.visible = false;
    PIEaddElement(book1);


    geometry = new THREE.PlaneGeometry(12.58,12.5);
    eraser = createMesh(geometry,"eraser.png");
    eraser.visible = false;
    PIEaddElement(eraser);


    geometry = new THREE.PlaneGeometry(14.94,12.5);
    crayons = createMesh(geometry,"crayons.png");
    crayons.visible = false;
    PIEaddElement(crayons);


    geometry = new THREE.PlaneGeometry(11.061,12.5);
    pencil = createMesh(geometry,"pencil.png");
    pencil.visible = false;
    PIEaddElement(pencil);

    geometry = new THREE.PlaneGeometry(6.66,12.5);
    scale = createMesh(geometry,"scale.png");
    scale.visible = false;
    PIEaddElement(scale);

    geometry = new THREE.PlaneGeometry(15.68,8);
    magnifier = createMesh(geometry,"magnifier.png");
    magnifier.visible = false;
    PIEaddElement(magnifier);

    geometry = new THREE.PlaneGeometry(13.11,12.5);
    book2 = createMesh(geometry,"book2.png");
    book2.visible = false;
    PIEaddElement(book2);

    geometry = new THREE.PlaneGeometry(3.98,12.5);
    bottle = createMesh(geometry,"bottle.png");
    bottle.visible = false;
    PIEaddElement(bottle);

    geometry = new THREE.PlaneGeometry(18.02,12.5);
    hat = createMesh(geometry,"hat.png");
    hat.visible = false;
    PIEaddElement(hat);

    // myY = new THREE.Mesh(new THREE.ShapeGeometry(drawY()), new THREE.MeshLambertMaterial({color:0xededed}));
    // myY.visible = false;
    // PIEaddElement(myY); 


    group1 = new THREE.Group();
    // group1.add(battery);
    group1.add(bulbOn);
    group1.add(bulbOff);
    group1.add(copper);
    group1.add(gold);
    group1.add(silver);
    group1.add(wood);
    group1.add(glass);
    group1.add(cotton);
    group1.add(water);
    group1.add(wax);
    group1.add(circuit);

    kl=1;
    PIEaddElement(group1);

    PIErenderer.domElement.addEventListener("mousedown", PIEmouseDown2, false);
    group1.visible = false;
    /* Instantiate experiment controls */
    initialiseControls();

    /* Reset all positions */
    resetExperiment();
     PIEstartAnimation();
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

function quiz(){

    match = 0;
    // circle1.visible = false;
    // circle2.visible = false;
    conductorb.visible = true;
    conductorf.visible = true;
    insulatorb.visible = true;
    insulatorf.visible = true;
    quizBack1.visible = true;
    quizBack2.visible = true;
    quizBack3.visible = true;
    switchOn.visible = false;
    switchOff.visible = false;

    cash.name = 1;
    woodHandle.name = 1;
    flask.name = 1;
    glove.name = 1;
    knife.name = 0;
    fork.name = 0;
    coin.name = 0;
    metalHandle.name = 0;
    pan.name = 0;
    spoon.name = 0;
    ring.name = 0;
    neclace.name = 0;
    book1.name = 1;
    book2.name = 1;
    eraser.name = 1;
    crayons.name =1;
    pencil.name = 0;
    scale.name = 1;
    magnifier.name = 1;
    book2.name = 1;
    bottle.name = 1;
    hat.name = 1;

    again.visible = false;
    circuit.visible = false;
    cash.visible = false;
    coin.visible = false;
    flask.visible = false;
    fork.visible = false;
    glove.visible = false;
    knife.visible = false;
    metalHandle.visible = false;
    pan.visible = false;
    spoon.visible = false;
    woodHandle.visible = false;
    ring.visible = false;
    neclace.visible = false;
    book1.visible = false;
    eraser.visible = false;
    crayons.visible = false;
    pencil.visible = false;
    scale.visible = false;
    magnifier.visible = false;
    book2.visible = false;
    bottle.visible = false;
    hat.visible = false;

    myObjects = new Array();



    myObjects.push(cash);
    myObjects.push(coin);
    myObjects.push(flask);
    myObjects.push(fork);
    myObjects.push(glove);
    myObjects.push(knife);
    myObjects.push(metalHandle);
    myObjects.push(pan);
    myObjects.push(spoon);
    myObjects.push(woodHandle);
    myObjects.push(ring);
    myObjects.push(neclace);
    myObjects.push(book1);
    myObjects.push(eraser);
    myObjects.push(crayons);
    myObjects.push(pencil);
    myObjects.push(scale);
    myObjects.push(magnifier);
    myObjects.push(book2);
    myObjects.push(bottle);
    myObjects.push(hat);

    var num = Math.floor(Math.random()*myObjects.length)
    ob1 = myObjects[num];
    ob1.visible = true;
    ob1.position.set(-40,50,1.9);
    if(ob1.name == 0){
      PIEsetDrag(ob1,myCondDrag);
    }
    else{
      PIEsetDrag(ob1,myInsDrag);
    }
    ob1.name = 0;
    PIEdragElement(ob1);
    PIEsetDragEnd(ob1, myOneEnd);
    myObjects.splice(num, 1);

    num = Math.floor(Math.random()*myObjects.length)
    ob2 = myObjects[num];
    ob2.visible = true;
    ob2.position.set(-40,30,1.9);
    if(ob2.name == 0){
      PIEsetDrag(ob2,myCondDrag);
    }
    else{
      PIEsetDrag(ob2,myInsDrag);
    }
    ob2.name = 1;
    PIEdragElement(ob2);
    PIEsetDragEnd(ob2, myOneEnd);
    myObjects.splice(num, 1);

    num = Math.floor(Math.random()*myObjects.length)
    ob3 = myObjects[num];
    ob3.visible = true;
    ob3.position.set(-40,10,1.9);
    if(ob3.name == 0){
      PIEsetDrag(ob3,myCondDrag);
    }
    else{
      PIEsetDrag(ob3,myInsDrag);
    }
    ob3.name = 2;
    PIEdragElement(ob3);
    PIEsetDragEnd(ob3, myOneEnd);
    myObjects.splice(num, 1);


    num = Math.floor(Math.random()*myObjects.length)
    ob4 = myObjects[num];
    ob4.visible = true;
    ob4.position.set(0,50,1.9);
    if(ob4.name == 0){
      PIEsetDrag(ob4,myCondDrag);
    }
    else{
      PIEsetDrag(ob4,myInsDrag);
    }
    ob4.name = 3;
    PIEdragElement(ob4);
    PIEsetDragEnd(ob4, myOneEnd);
    myObjects.splice(num, 1);


    num = Math.floor(Math.random()*myObjects.length)
    ob5 = myObjects[num];
    ob5.visible = true;
    ob5.position.set(70,50,1.9);
    if(ob5.name == 0){
      PIEsetDrag(ob5,myCondDrag);
    }
    else{
      PIEsetDrag(ob5,myInsDrag);
    }
    ob5.name = 4;
    PIEdragElement(ob5);
    PIEsetDragEnd(ob5, myOneEnd);
    myObjects.splice(num, 1);


    num = Math.floor(Math.random()*myObjects.length)
    ob6 = myObjects[num];
    ob6.visible = true;
    ob6.position.set(70,30,1.9);
    if(ob6.name == 0){
      PIEsetDrag(ob6,myCondDrag);
    }
    else{
      PIEsetDrag(ob6,myInsDrag);
    }
    ob6.name = 5;
    PIEdragElement(ob6);
    PIEsetDragEnd(ob6, myOneEnd);
    myObjects.splice(num, 1);


    num = Math.floor(Math.random()*myObjects.length)
    ob7 = myObjects[num];
    ob7.visible = true;
    ob7.position.set(70,10,1.9);
    if(ob7.name == 0){
      PIEsetDrag(ob7,myCondDrag);
    }
    else{
      PIEsetDrag(ob7,myInsDrag);
    }
    ob7.name = 6;
    PIEdragElement(ob7);
    PIEsetDragEnd(ob7, myOneEnd);
    myObjects.splice(num, 1);


    num = Math.floor(Math.random()*myObjects.length)
    ob8 = myObjects[num];
    ob8.visible = true;
    ob8.position.set(40,50,1.9);
    if(ob8.name == 0){
      PIEsetDrag(ob8,myCondDrag);
    }
    else{
      PIEsetDrag(ob8,myInsDrag);
    }
    ob8.name = 7;
    PIEdragElement(ob8);
    PIEsetDragEnd(ob8, myOneEnd);
    myObjects.splice(num, 1);

}

function resetExperiment()
{

    dl=0;
    if(current == 0){
        
        finalCheck = 0;
        switchCheck = 0;
        circuit.visible = true;
        again.visible = false;
        quizBack1.visible = false;
        quizBack2.visible = false;
        quizBack3.visible = false;
        conductorb.visible = false;
        conductorf.visible = false;
        insulatorb.visible = false;
        insulatorf.visible = false;

        switchOn.visible = false;
        switchOff.visible = true;
        
        cash.visible = false;
        coin.visible = false;
        flask.visible = false;
        fork.visible = false;
        glove.visible = false;
        knife.visible = false;
        metalHandle.visible = false;
        pan.visible = false;
        spoon.visible = false;
        woodHandle.visible = false;
        ring.visible = false;
        neclace.visible = false;
        book1.visible = false;
        eraser.visible = false;
        crayons.visible = false;
        pencil.visible = false;
        scale.visible = false;
        magnifier.visible = false;
        book2.visible = false;
        bottle.visible = false;
        hat.visible = false;

        // quiz();
        switchOn.visible = false;
        group1.visible = true;
        bulbOn.visible = false;
        bulbOff.visible = true;
        water.position.set(30,35,1.9);
        cotton.position.set(0,35,1.9);
        glass.position.set(-30,35,1.9);
        copper.position.set(-30,50,1.9);
        gold.position.set(0,50,1.9);
        silver.position.set(30,50,1.9);
        wood.position.set(60,50,1.9);
        wax.position.set(60,35,1.9);

        PIEdragElement(copper);
        PIEsetDrag(copper,myMainDrag);
        PIEsetDragEnd(copper,myTwoEnd);

        PIEdragElement(gold);
        PIEsetDragEnd(gold,myTwoEnd);
        PIEsetDrag(gold,myMainDrag);

        PIEdragElement(wood);
        PIEsetDragEnd(wood,myTwoEnd);
        PIEsetDrag(wood,myMainDrag);

        PIEdragElement(silver);
        PIEsetDragEnd(silver,myTwoEnd);
        PIEsetDrag(silver,myMainDrag);

        PIEdragElement(glass);
        PIEsetDragEnd(glass,myTwoEnd);
        PIEsetDrag(glass,myMainDrag);

        PIEdragElement(cotton);
        PIEsetDragEnd(cotton,myTwoEnd);
        PIEsetDrag(cotton,myMainDrag);

        PIEdragElement(water);
        PIEsetDragEnd(water,myTwoEnd);
        PIEsetDrag(water,myMainDrag);


        PIEdragElement(wax);
        PIEsetDragEnd(wax,myTwoEnd);
        PIEsetDrag(wax,myMainDrag);
    }
    else {
        quiz();
    }
    // quiz();
}

/******************* End of Reset Experiment code ***********************/


/******************* Update (animation changes) code ***********************/

/**
 
 * @param  t       The time in milliseconds elapsed since the beginning of animation cycle
 * @param  dt      The time in milliseconds elapsed since the last acll to this function
 */

function PIEmouseDown2(b) {
  var a;
    b.defaultPrevented = true;
    PIEselectedDrag = null;
    PIEmouseP.x = (b.clientX / PIEcanvasW) * 2 - 1;
    PIEmouseP.y = -(b.clientY / PIEcanvasH) * 2 + 1;
    PIEmouseP.z = -1;
    PIEraycaster.setFromCamera(PIEmouseP, PIEcamera);
    a = PIEraycaster.intersectObjects(PIEscene.children);
    if (a.length > 0) {
        console.log(a[0].object.name);
        if(a[0].object.name == 123&&kl==0){
            switchOn.visible = false;
            switchOff.visible = true;
            switchCheck = 0;
        }
        else if(a[0].object.name == 456&&kl==0){
            switchOn.visible = true;
            switchOff.visible = false;
            switchCheck = 1;
        }
    }
}
PIErenderer.domElement.addEventListener("mousedown", PIEmouseDown2, true);

var dl=0;
function updateExperimentElements(t, dt)
{
    time = t/1000;
    if(kl==0){
        if(match == 8){
            again.visible = true;
          }
        // switchOn.visible = true;
    }
    if(kl==0 && dl==0 && current ==0){
        switchOn.visible = true;
        switchOff.visible = false;
        switchCheck = 1;
        dl = 1;
    }
  
  if(time >= 1&&kl==1){
        PIEstopAnimation();
        kl=0;
    }

  if(finalCheck == 0){
    bulbOn.visible = false;
    bulbOff.visible = true;
  }
  else if(finalCheck ==1 && switchCheck == 0){
    bulbOn.visible = false;
    bulbOff.visible = true;
  }
  else if(finalCheck == 1 && switchCheck == 1){
    bulbOn.visible = true;
    bulbOff.visible = false;
  }
}

/******************* Update (animation changes) code ***********************/
