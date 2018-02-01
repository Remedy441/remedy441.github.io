/* Global Variables */
/* the developer should define variables and constants here */
/* We define a room with 3 walls, floor and ceiling */
/* We define a ball which bounces in the xy plane */
/* We define modifiable prameters : gravity, ball size, initial velocity */
/* We support draggable ball */
/* Scene Dimensions (in meters: at z = 0) */
var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */

var ground;
var sky;
var modelLeft;
var modelRight;
var modelSquare1;
var modelSquare2;
var modelSquare3;
var modelSquare4;
var modelSquare5;
var modelSlab1;
var modelSlab2;
var modelCurve;
var model;
var box;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;
var tree;
var cow;
var manure1;
var manure2;
var x=1;
var k=1;
var m=1;
var m1=1;
var m2=2;
var m3=2;
var m4=2;
var m5=1;
var m6=1;
var m7=1;
var m8=1;
var m9= 1;
var current;
var sone;
var stwo;
var sthree;
var sfour;
var tap;
var outlet;
var manureBox;
var manureBox2;
var gate;
var circ1;
var circ2;
var circ3;
var circ4;
var circ5;
var circ6;
var circ7;
var truck;
var text1;
var text2;
var text3;
var text4;
var text5;
var text6;
var text7;
var kl=1;
var advantage;
var disadvantage;
var to = 1;
var to2 = 1;
var to3 = 1;
var cl = 0;
var clevel = 0;
/* Shapes */
function drawSquare()
{
    var squareShape = new THREE.Shape();
    squareShape.moveTo( 0,0 );
    squareShape.lineTo( x,0 );
    squareShape.lineTo( x-2,1 );
    squareShape.lineTo( 0,1 );
    squareShape.lineTo( 0,0 );

    return squareShape;
}
function drawSquare2()
{
    var squareShape = new THREE.Shape();
    squareShape.moveTo( 0,0 );
    squareShape.lineTo( k,0 );
    squareShape.lineTo( k,2 );
    squareShape.lineTo( 0,2 );
    squareShape.lineTo( 0,0 );

    return squareShape;
}
function drawSquare3()
{
    var squareShape = new THREE.Shape();
    squareShape.moveTo( 0,0 );
    squareShape.lineTo( 1,0 );
    squareShape.lineTo( 1,m );
    squareShape.lineTo( 0,m );
    squareShape.lineTo( 0,0 );

    return squareShape;
}

function drawSquare4()
{
    var squareShape = new THREE.Shape();
    squareShape.moveTo( 0,0 );
    squareShape.lineTo( 14,0 );
    squareShape.lineTo( 14,m1 );
    squareShape.lineTo( 0,m1 );
    squareShape.lineTo( 0,0 );

    return squareShape;
}
function drawSquare5()
{
    var squareShape = new THREE.Shape();
    squareShape.moveTo( 0,0 );
    squareShape.lineTo( 4,0 );
    squareShape.lineTo( 4,m2 );
    squareShape.lineTo( -m2+3.9,m2 );
    squareShape.lineTo( 0,0 );

    return squareShape;
}
function drawSquare6()
{
    var squareShape = new THREE.Shape();
    squareShape.moveTo( 0,0 );
    squareShape.lineTo( 5,0 );
    squareShape.lineTo( 5,m3 );
    squareShape.lineTo( 0,m3 );
    squareShape.lineTo( 0,0 );

    return squareShape;
}

function drawSquare7()
{
    var squareShape = new THREE.Shape();
    squareShape.moveTo( 0,0 );
    squareShape.lineTo( 6.8,0 );
    squareShape.lineTo( 6.8,m4 );
    squareShape.lineTo( 0,m4 );
    squareShape.lineTo( 0,0 );

    return squareShape;
}
function drawSquare10()
{
    var squareShape = new THREE.Shape();
    squareShape.moveTo( 0,0 );
    squareShape.lineTo( 6.8,0 );
    squareShape.lineTo( 6.8,m7 );
    squareShape.lineTo( 0,m7 );
    squareShape.lineTo( 0,0 );

    return squareShape;
}
function drawSquare9()
{
    var squareShape = new THREE.Shape();
    squareShape.moveTo( 0,0 );
    squareShape.lineTo( 6.8,0 );
    squareShape.lineTo( 6.8,m6 );
    squareShape.lineTo( 0,m6 );
    squareShape.lineTo( 0,0 );

    return squareShape;
}
function drawSquare8()
{
    var squareShape = new THREE.Shape();
    squareShape.moveTo( 0,0 );
    squareShape.lineTo( 0.8,0 );
    squareShape.lineTo( 0.8,m5 );
    squareShape.lineTo( 0,m5 );
    squareShape.lineTo( 0,0 );

    return squareShape;
}
function drawSquare11()
{
    var squareShape = new THREE.Shape();
    squareShape.moveTo( 0,0 );
    squareShape.lineTo( 0.9,0 );
    squareShape.lineTo( 0.9,m8 );
    squareShape.lineTo( 0,m8 );
    squareShape.lineTo( 0,0 );

    return squareShape;
}
function drawSquare12()
{
    var squareShape = new THREE.Shape();
    squareShape.moveTo( 0,0 );
    squareShape.lineTo( m9,0 );
    squareShape.lineTo( m9,0.9 );
    squareShape.lineTo( 0,0.9 );
    squareShape.lineTo( 0,0 );

    return squareShape;
}

function drawModelLeft()
{
    var squareShape = new THREE.Shape();
    squareShape.moveTo(0,7);
    squareShape.lineTo(0.3,7);
    squareShape.lineTo(0.3,5.2);
    squareShape.lineTo(1.4,5.2);
    squareShape.lineTo(1.4,5.0);
    squareShape.lineTo(3.6,0.7);
    squareShape.lineTo(4,0.7);
    squareShape.lineTo(4.5,0.7);
    squareShape.lineTo(4.5,0);
    squareShape.lineTo(4,0);
    squareShape.lineTo(4,0.3);
    squareShape.lineTo(3.5,0.3);
    squareShape.lineTo(1.0,5.0);
    squareShape.lineTo(0.0,5.0);
    squareShape.lineTo(0.0,6.0);

    return squareShape;
}

function drawModelRight()
{
    var squareShape = new THREE.Shape();
    squareShape.moveTo( 0,0 );
    squareShape.lineTo( 0.3,0);
    squareShape.lineTo(0.3,0.5);
    squareShape.lineTo(1.5,0.5);
    squareShape.lineTo(1.5,3.2);
    squareShape.lineTo(3.2,3.2);
    squareShape.lineTo(3.2,5.0);
    squareShape.lineTo(2.8,5.0);
    squareShape.lineTo(2.8,3.5);
    squareShape.lineTo(2,3.5);
    squareShape.lineTo(2,4.2);
    squareShape.lineTo(1.6,4.2);
    squareShape.lineTo(1.6,3.5);
    squareShape.lineTo(1.2,3.5);
    squareShape.lineTo(1.2,0.8);
    squareShape.lineTo(0.0,0.8);
    squareShape.lineTo(0.0,0);

    return squareShape;
}

function drawModelSquare1()
{
    var squareShape = new THREE.Shape();
    squareShape.moveTo( 0,0 );
    squareShape.lineTo( 1,0);
    squareShape.lineTo(1,8);
    squareShape.lineTo(0,8);
    squareShape.lineTo(0,0);

    return squareShape;
}

function drawModelSquare2()
{
    var squareShape = new THREE.Shape();
    squareShape.moveTo( 0,0 );
    squareShape.lineTo( 1,0);
    squareShape.lineTo(1,-14);
    squareShape.lineTo(0,-14);
    squareShape.lineTo(0,0);

    return squareShape;
}

function drawModelSquare3()
{
    var squareShape = new THREE.Shape();
    squareShape.moveTo( 0,0 );
    squareShape.lineTo( 0,1.5);
    squareShape.lineTo(20,1.5);
    squareShape.lineTo(20,0);
    squareShape.lineTo(0,0);

    return squareShape;
}

function drawModelSquare4()
{
    var squareShape = new THREE.Shape();
    squareShape.moveTo( 0,0 );
    squareShape.lineTo( 0,1.5);
    squareShape.lineTo(1.5,1.5);
    squareShape.lineTo(1.5,0);
    squareShape.lineTo(0,0);

    return squareShape;
}
function drawModelSquare5()
{
    var squareShape = new THREE.Shape();
    squareShape.moveTo( 0,0 );
    squareShape.lineTo( 0,1.5);
    squareShape.lineTo(1.5,1.5);
    squareShape.lineTo(1.5,0);
    squareShape.lineTo(0,0);

    return squareShape;
}
function drawModelSquare6()
{
    var squareShape = new THREE.Shape();
    squareShape.moveTo( 0,0 );
    squareShape.lineTo( 3,0);
    squareShape.lineTo(3,0.8);
    squareShape.lineTo(0,0.8);
    squareShape.lineTo(0,0);

    return squareShape;
}

function drawModelSlab1()
{
    var squareShape = new THREE.Shape();
    squareShape.moveTo(0,0);
    squareShape.lineTo(9,0);
    squareShape.lineTo(9,0.5);
    squareShape.lineTo(0,0.5);
    squareShape.lineTo(0,0);

    return squareShape;
}

function drawModelSlab2()
{
    var squareShape = new THREE.Shape();
    squareShape.moveTo(0,0);
    squareShape.lineTo(8,0);
    squareShape.lineTo(8,0.5);
    squareShape.lineTo(0,0.5);
    squareShape.lineTo(0,0);

    return squareShape;
}

function drawModelCurve()
{
    var x=0;
    var y=0;
    var circleShape = new THREE.Shape();
    circleShape.moveTo( 0, 0 );
    circleShape.quadraticCurveTo( 2.5, 8, 8, 8);
    circleShape.quadraticCurveTo( 12.5, 8, 16, 0);
    circleShape.lineTo(15,0);
    circleShape.quadraticCurveTo( 12, 7, 7.8, 7);
    circleShape.quadraticCurveTo( 4.5, 7,1, 0);
    circleShape.lineTo(0,0);
    // circleShape.quadraticCurveTo( 3+circleRadius, 5-circleRadius, 3, 5-circleRadius );
    // circleShape.quadraticCurveTo( 3-circleRadius, 5-circleRadius,3-circleRadius, 5 );
    // circleShape.quadraticCurveTo( 3-circleRadius, 5+circleRadius, 3, 5+circleRadius );

    return circleShape;
}
function initialiseControlVariables()
{

}


function initialiseControls()
{
    PIEaddInputCommand("Next",function(){
        current = clevel;
    });         
    PIEaddDualCommand("Labels",function(){
        if(to3 == 1){
            text1.visible = true;
            text2.visible = true;
            text3.visible = true;
            text4.visible = true;
            text5.visible = true;
            text6.visible = true;
            text7.visible = true;
            to3 = 0;
        }
        else if(to3 == 0){
            text1.visible = false;
            text2.visible = false;
            text3.visible = false;
            text4.visible = false;
            text5.visible = false;
            text6.visible = false;
            text7.visible = false;
            to3 = 1;
        }
       
    });
    PIEaddDualCommand("Advantages",function(){
        if(to ==1){
            advantage.visible = true;
            disadvantage.visible = false;
            to = 0;
        }
        else if(to == 0){
            advantage.visible = false;
            disadvantage.visible = false;
            to = 1;
        }
        
    });
    PIEaddDualCommand("Disadvantages",function(){
       if(to2 ==1){
            advantage.visible = false;
            disadvantage.visible = true;
            to2 = 0;
        }
        else if(to2 == 0){
            advantage.visible = false;
            disadvantage.visible = false;
            to2 = 1;
        }
    });
}


/******************* End of GUI control objects code ***********************/

/******************* Load Experiment objects code ***********************/

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Bio Gas Plant</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows a working model of a bio gas plant</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls.</p>";
    helpContent = helpContent + "<p>The animation shows step wise working of a bio gas plant.</p>";
    helpContent = helpContent + "<h3>Controls</h3>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li><b>Next</b> - We can move from one step to next by clicking on next button in the display panel</li>";
    helpContent = helpContent + "<li><b>Lables</b> - We can toggle the labels of the model.";
    helpContent = helpContent + "<li><b>Advantages</b> - We can view the advantages of the Bio Gas Plant.";
    helpContent = helpContent + "<li><b>Disadvantages</b> - We can view the disadvantages of the Bio Gas Plant.";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Bio Gas Plant Theory</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The Experiment explains a working model of bio gas plant</p>";
    infoContent = infoContent + "<h3>Principle</h3>";
    infoContent = infoContent + "<p>Biogas typically refers to a mixture of different gases produced by the breakdown of organic matter in the absence of oxygen.</p>";
    infoContent = infoContent + "<p>Biogas can be produced from raw materials such as agricultural waste, manure, municipal waste, plant material, sewage, green waste or food waste.</p>";
    infoContent = infoContent + "<p>Biogas is a renewable energy source and in many cases exerts a very small carbon footprint.</p>";
    infoContent = infoContent + "<h2>Uses</h2>";
    infoContent = infoContent + "<p>Biogas can be used for electricity production on sewage works, in a CHP gas engine, where the waste heat from the engine is conveniently used for heating the digester; cooking; space heating; water heating; and process heating.<p>";
    infoContent = infoContent + "<p>If compressed, it can replace compressed natural gas for use in vehicles, where it can fuel an internal combustion engine or fuel cells and is a much more effective displacer of carbon dioxide than the normal use in on-site CHP plants.</p>"
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

    PIEsetExperimentTitle("BIO GAS PLANT");
    PIEsetDeveloperName("Battula Sai Vinesh");
    PIEhideControlElement();

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();

    /* initialise Other Variables */
    initialiseOtherVariables();

    geometry = new THREE.PlaneGeometry(200,40);
    ground = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0x333333})) ;
    ground.position.set(10,5,1 );
    PIEaddElement(ground);

    geometry = new THREE.BoxGeometry( 200, mySceneH * 2, 0.20 );
    sky = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0x1e90ff}))
    sky.position.set(18, myCenterY,0);
    PIEaddElement(sky);

    modelLeft = new THREE.Mesh(new THREE.ShapeGeometry(drawModelLeft()), new THREE.MeshLambertMaterial({color:0x1a0d00}));
    modelLeft.visible = true;
    modelLeft.position.set(1,5,2);
    modelLeft.scale.set(4,4,4);
    

    modelRight = new THREE.Mesh(new THREE.ShapeGeometry(drawModelRight()), new THREE.MeshLambertMaterial({color:0x1a0d00}));
    modelRight.visible = true;
    modelRight.position.set(33,5,2);
    modelRight.scale.set(4,4,4);
    

    modelSquare1 = new THREE.Mesh(new THREE.ShapeGeometry(drawModelSquare1()), new THREE.MeshLambertMaterial({color:0x1a0d00}));
    modelSquare1.visible = true;
    modelSquare1.position.set(9,25,2);
    // modelSquare1.scale.set(4,4,4);
    

    modelSlab1 = new THREE.Mesh(new THREE.ShapeGeometry(drawModelSlab1()), new THREE.MeshLambertMaterial({color:0x000000}));
    modelSlab1.visible = true;
    modelSlab1.position.set(10,25,2);
    // modelSquare1.scale.set(4,4,4);
    

    modelSlab2 = new THREE.Mesh(new THREE.ShapeGeometry(drawModelSlab2()), new THREE.MeshLambertMaterial({color:0x000000}));
    modelSlab2.visible = true;
    modelSlab2.position.set(33,25,2);
    // modelSquare1.scale.set(4,4,4);
    

    modelSquare2 = new THREE.Mesh(new THREE.ShapeGeometry(drawModelSquare2()), new THREE.MeshLambertMaterial({color:0x1a0d00}));
    modelSquare2.visible = true;
    modelSquare2.position.set(18,25,2);
    // modelSquare1.scale.set(4,4,4);


    modelSquare3 = new THREE.Mesh(new THREE.ShapeGeometry(drawModelSquare2()), new THREE.MeshLambertMaterial({color:0x1a0d00}));
    modelSquare3.visible = true;
    modelSquare3.position.set(33,25,2);
    // modelSquare1.scale.set(4,4,4);
    

    modelSquare4 = new THREE.Mesh(new THREE.ShapeGeometry(drawModelSquare3()), new THREE.MeshLambertMaterial({color:0x000000}));
    modelSquare4.visible = true;
    modelSquare4.position.set(15.5,4,2);
    // modelSquare1.scale.set(4,4,4);
    

    modelSquare5 = new THREE.Mesh(new THREE.ShapeGeometry(drawModelSquare4()), new THREE.MeshLambertMaterial({color:0x1a0d00}));
    modelSquare5.visible = true;
    modelSquare5.position.set(39.5,24,2);

    gate = new THREE.Mesh(new THREE.ShapeGeometry(drawModelSquare6()), new THREE.MeshLambertMaterial({color:0x000000}));
    gate.position.set(6.1,25,1.9);
    
    
    material = new THREE.MeshBasicMaterial();
    material.map = texture;
    modelCurve = new THREE.Mesh(new THREE.ShapeGeometry(drawModelCurve()),new THREE.MeshLambertMaterial({color:0x1a0d00}));
    modelCurve.visible = true;
    modelCurve.position.set(18,17,2);
    

    
   
    // box.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 10/2, 3 ) );

    /* Instantiate experiment controls */
    initialiseControls();

    /* Reset all positions */
    
    box = new THREE.Mesh(new THREE.ShapeGeometry(drawSquare()), new THREE.MeshLambertMaterial({color:0x663300}));
    box.visible = true;
    box.position.set(6.3,24.9,1.8);
    box.rotation.z = -0.35*Math.PI;
    

    box2 = new THREE.Mesh(new THREE.ShapeGeometry(drawSquare2()), new THREE.MeshLambertMaterial({color:0x663300}));
    box2.visible = true;
    box2.position.set(15.2,7.7,1.8);
    // box2.rotation.z = -0.35*Math.PI;
    

    box3 = new THREE.Mesh(new THREE.ShapeGeometry(drawSquare3()), new THREE.MeshLambertMaterial({color:0x663300}));
    box3.visible = true;
    box3.position.set(19,8.1,1.8);
    // box2.rotation.z = -0.35*Math.PI;
   

    box4 = new THREE.Mesh(new THREE.ShapeGeometry(drawSquare4()), new THREE.MeshLambertMaterial({color:0x663300}));
    box4.visible = true;
    box4.position.set(19,5.5,1.8);
    // box2.rotation.z = -0.35*Math.PI;
    

    box5 = new THREE.Mesh(new THREE.ShapeGeometry(drawSquare5()), new THREE.MeshLambertMaterial({color:0x663300}));
    box5.visible = true;
    box5.position.set(15,7.5,1.8);
    // box2.rotation.z = -0.35*Math.PI;
    

    box6 = new THREE.Mesh(new THREE.ShapeGeometry(drawSquare6()), new THREE.MeshLambertMaterial({color:0x663300}));
    box6.visible = true;
    box6.position.set(33,7.5,1);

    box7 = new THREE.Mesh(new THREE.ShapeGeometry(drawSquare8()), new THREE.MeshLambertMaterial({color:0xffffff}));
    box7.visible = true;
    box7.position.set(5.9,35,1.8);

    box8 = new THREE.Mesh(new THREE.ShapeGeometry(drawSquare11()), new THREE.MeshLambertMaterial({color:0x00b38f}));
    box8.visible = true;
    box8.position.set(25.2,25,2.1);

    box9 = new THREE.Mesh(new THREE.ShapeGeometry(drawSquare12()), new THREE.MeshLambertMaterial({color:0x00b38f}));
    // box9.visible = true;
    box9.position.set(25.2,27.9,2.1);

    manureBox = new THREE.Mesh(new THREE.ShapeGeometry(drawSquare7()), new THREE.MeshLambertMaterial({color:0x006600}));
    manureBox.visible = true;
    manureBox.position.set(2.2,25,1.89);

    manureBox2 = new THREE.Mesh(new THREE.ShapeGeometry(drawSquare9()), new THREE.MeshLambertMaterial({color:0x997300}));
    manureBox2.visible = true;
    manureBox2.position.set(2.2,27,1.89);

    fmanureBox = new THREE.Mesh(new THREE.ShapeGeometry(drawSquare9()), new THREE.MeshLambertMaterial({color:0x663300}));
    fmanureBox.visible = true;
    fmanureBox.position.set(2.2,29,1.89);


    geometry = new THREE.PlaneGeometry(6,0.8);
    text1 = createMesh(geometry,"text1.png");
    text1.position.set(26,10,2.1);


    geometry = new THREE.PlaneGeometry(9.6,0.8);
    text2 = createMesh(geometry,"text2.png");
    text2.position.set(0,18,2.1);

    geometry = new THREE.PlaneGeometry(10.84,0.8);
    text3 = createMesh(geometry,"text3.png");
    text3.position.set(47,10,2.1);

    geometry = new THREE.PlaneGeometry(6.3,2);
    text4 = createMesh(geometry,"text4.png");
    text4.position.set(50,20,2.1);

    geometry = new THREE.PlaneGeometry(4.16,2);
    text5 = createMesh(geometry,"text5.png");
    text5.position.set(-4,30,2.1);
    
    geometry = new THREE.PlaneGeometry(4.35,2);
    text6 = createMesh(geometry,"text6.png");
    text6.position.set(35,32,2.1);

    geometry = new THREE.PlaneGeometry(3.92,2);
    text7 = createMesh(geometry,"text7.png");
    text7.position.set(18,30,2.1);

    geometry = new THREE.PlaneGeometry(35,35);
    advantage = createMesh(geometry,"advantage.png");
    advantage.position.set(25,25,2.9);
    advantage.visible = false;
    PIEaddElement(advantage);

    geometry = new THREE.PlaneGeometry(35,35);
    disadvantage = createMesh(geometry,"disadvantage.png");
    disadvantage.position.set(25,25,2.9);
    disadvantage.visible = false;
    PIEaddElement(disadvantage);

    

    

    geometry = new THREE.PlaneGeometry(13.75,11);
    cow = createMesh(geometry,"cow.png");
    PIEaddElement(cow);

    geometry = new THREE.PlaneGeometry(40,10.06);
    sone = createMesh(geometry,"one.png");
    PIEaddElement(sone);

    geometry = new THREE.PlaneGeometry(40,10.06);
    stwo = createMesh(geometry,"two.png");
    PIEaddElement(stwo);

    geometry = new THREE.PlaneGeometry(40,10.06);
    sthree = createMesh(geometry,"three.png");
    PIEaddElement(sthree);

    geometry = new THREE.PlaneGeometry(47.88,10.5);
    sfour = createMesh(geometry,"four3.png");
    PIEaddElement(sfour);

    geometry = new THREE.PlaneGeometry(6.7,11.6);
    tap = createMesh(geometry,"tap4.png");
    PIEaddElement(tap);



    geometry = new THREE.PlaneGeometry(24.16,4.48);
    outlet = createMesh(geometry,"outlet4.png");
    outlet.position.set(37,27,2)

    geometry = new THREE.PlaneGeometry(15.73,7);
    truck = createMesh(geometry,"truck.png");
    
    //56.2
    geometry = new THREE.PlaneGeometry(7.18,11);
    tree = createMesh(geometry,"tree.png");
    PIEaddElement(tree);

    geometry = new THREE.PlaneGeometry(6,3);
    manure1 = createMesh(geometry,"waste.png")
    PIEaddElement(manure1);

    geometry = new THREE.PlaneGeometry(6,3);
    manure2 = createMesh(geometry,"manure.png")
    PIEaddElement(manure2);

    geometry = new THREE.CircleGeometry( 0.3, 32 );
    material = new THREE.MeshLambertMaterial( { color: 0x00b38f } );
    circ1 = new THREE.Mesh( geometry, material );
    circ2 = new THREE.Mesh( geometry, material );
    circ3 = new THREE.Mesh( geometry, material );
    circ4 = new THREE.Mesh( geometry, material );
    circ5 = new THREE.Mesh( geometry, material );
    circ6 = new THREE.Mesh( geometry, material );
    circ7 = new THREE.Mesh( geometry, material );
    



    model = new THREE.Group();
    model.add(modelLeft);
    model.add(modelRight);
    model.add(modelSquare1);
    model.add(modelSquare2);
    model.add(modelSquare3);
    model.add(modelSquare4);
    model.add(modelSquare5);
    model.add(modelSlab1);
    model.add(modelSlab2);
    model.add(modelCurve);
    model.add(gate);
    model.add(box);
    model.add(box2);
    model.add(box3);
    model.add(box4);
    model.add(box5);
    model.add(box6);
    model.add(box7);
    model.add(box8);
    model.add(box9);
    model.add(manureBox);
    model.add(manureBox2);
    model.add(fmanureBox);
    model.add(circ1);
    model.add(circ2);
    model.add(circ3);
    model.add(circ4);
    model.add(circ5);
    model.add(circ6);
    model.add(circ7);
    model.add(outlet);
    model.add(truck);
    model.add(text1);
    model.add(text2);
    model.add(text3);
    model.add(text4);
    model.add(text5);
    model.add(text6);
    model.add(text7);
    PIEaddElement(model);
    // model.position.set(50,0,0);
    

    
    resetExperiment();
    // PIEstartAnimation();
    PIErender();
    PIEstartAnimation();

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
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
function resetExperiment()
{   
    clevel = 0;
    cl =0 ;
    to = 1;
    to2 = 1;
    to3 = 1;
    x=0.0001;
    k=0.0001;
    m=0.0001;
    m1=0.0001;
    m2=0.0001;
    m3=0.0001;
    m4=0.0001;
    m5=0.0001;
    m6=0.0001;
    m7=0.0001;
    m8=0.0001;
    m9=0.0001;
    text1.visible = false;
    text2.visible = false;
    text3.visible = false;
    text4.visible = false;
    text5.visible = false;
    text6.visible = false;
    text7.visible = false;
    box.visible = true;
    truck.position.set(90,28.5,2)
    box.geometry = new THREE.ShapeGeometry(drawSquare()); 
    box2.geometry = new THREE.ShapeGeometry(drawSquare2()); 
    box3.geometry = new THREE.ShapeGeometry(drawSquare3()); 
    box4.geometry = new THREE.ShapeGeometry(drawSquare4()); 
    box5.geometry = new THREE.ShapeGeometry(drawSquare5()); 
    box6.geometry = new THREE.ShapeGeometry(drawSquare6());
    box7.geometry = new THREE.ShapeGeometry(drawSquare8());
    manureBox.geometry = new THREE.ShapeGeometry(drawSquare7()); 
    manureBox2.geometry = new THREE.ShapeGeometry(drawSquare9());
    fmanureBox.geometry = new THREE.ShapeGeometry(drawSquare10());
    box8.geometry = new THREE.ShapeGeometry(drawSquare11());
    box9.geometry = new THREE.ShapeGeometry(drawSquare12());
    model.position.set(50,0,0);
    manure1.visible = true;
    manure2.visible = true;
    manure1.position.set(35,30,2.1 );
    manure2.position.set(18,30,2.1 );
    tree.position.set(35,30,2.12 );
    cow.position.set(15,30,2.12 );
    sone.position.set(-40,42,2);
    stwo.position.set(-40,42,2);
    sthree.position.set(-40,42,2);
    sfour.position.set(-45,43,2);
    tap.position.set(59,31.2,1.8);
    gate.visible = true;
    manureBox2.material.color.setHex(0x997300);
    manureBox.material.color.setHex(0x006600);
    current = 0;
    box.visible = false;
    box7.visible = true;
    circ1.position.set(19.7,10,1.8);
    circ2.position.set(21.7,12,1.8);
    circ3.position.set(23.7,11,1.8);
    circ4.position.set(25.7,14,1.8);
    circ5.position.set(27.7,15,1.8);
    circ6.position.set(29.7,9,1.8);
    circ7.position.set(31.7,13,1.8);
    circ1.visible = false;
    circ2.visible = false;
    circ3.visible = false;
    circ4.visible = false;
    circ5.visible = false;
    circ6.visible = false;
    circ7.visible = false;
}

/******************* End of Reset Experiment code ***********************/

/******************* Update (animation changes) code ***********************/
function updateExperimentElements(t, dt)
{   
    console.log(dt);
    var time  = t/1000;
    if(kl==0){
            if(current == 4){
                PIEshowDisplayPanel();
        circ1.visible = true;
        circ2.visible = true;
        circ3.visible = true;
        circ4.visible = true;
        circ5.visible = true;
        circ6.visible = true;
        circ7.visible = true;
        if(sthree.position.x > -40){
            sthree.position.x = sthree.position.x - 0.5*dt/10*0.6;
        }
        if(sthree.position.x < -30){
            if(sfour.position.x < 10){
                sfour.position.x = sfour.position.x + 0.5*dt/10*0.6;
            }
        }
        if(circ1.position.y < 20){
            circ1.position.y = circ1.position.y + 0.08*dt/10*0.6;
        }
        else{
            circ1.position.y = 15;
        } 
        if(circ2.position.y < 22){
            circ2.position.y = circ2.position.y + 0.08*dt/10*0.6;
        }
        else{
            circ2.position.y = 15;
        } 
        if(circ3.position.y < 24){
            circ3.position.y = circ3.position.y + 0.08*dt/10*0.6;
        }
        else{
            circ3.position.y = 15;
        } 
        if(circ4.position.y < 24.8){
            circ4.position.y = circ4.position.y + 0.08*dt/10*0.6;
        }
        else{
            circ4.position.y = 15;
        } 
        if(circ5.position.y < 24){
            circ5.position.y = circ5.position.y + 0.08*dt/10*0.6;
        }
        else{
            circ5.position.y = 15;
        } 
        if(circ6.position.y < 22){
            circ6.position.y = circ6.position.y + 0.08*dt/10*0.6;
        }
        else{
            circ6.position.y = 15;
        } 
        if(circ7.position.y < 20){
            circ7.position.y = circ7.position.y + 0.08*dt/10*0.6;
        }
        else{
            circ7.position.y = 15;
        } 
        if(truck.position.x > 56.2){
            truck.position.x = truck.position.x - 0.1*dt/10*0.6;
        }

        if(m8 < 3.7){
            m8 = m8 + 0.05*dt/10*0.6;
        }
        if(m8>3.7&&m9 < 23){
            m9 = m9 + 0.05*dt/10*0.6;
        }
    }
    if(current == 2){
        if(m5>-7){
            m5 = m5 - 0.1*dt/10*0.6;
        }
        if(m5 <-6){
            manureBox2.material.color.setHex(0x663300);
            manureBox.material.color.setHex(0x663300);
            if(m7<4){
                m7 = m7 + 0.05*dt/10*0.6;
            }
            if(m7>4){
                box7.visible = false;
                clevel = 3;
                PIEshowInputPanel();
            }
        }

    }
    if(current == 3){
        PIEshowDisplayPanel();
        box.visible = true;
        gate.visible = false;
        if(stwo.position.x > -40){
            stwo.position.x = stwo.position.x - 0.5*dt/10*0.6;
        }
        if(stwo.position.x < -30){
            if(sthree.position.x < 5){
                sthree.position.x = sthree.position.x + 0.5*dt/10*0.6;
            }
        }

        if(m7>0.001){
            m7= m7 - 0.02*dt/10*0.6;
        }
        if(m7<0.001){
            if(m6>0.001){
                m6 = m6 - 0.02*dt/10*0.6;
            }
        }
        if(m6 < 0.001){
            if(m4>0.001){
                m4 = m4 - 0.02*dt/10*0.6;
            }
        }
        if(x<19.7){
            x = x + 0.1*dt/10*0.6;
        }
        if(x>19.7&&k<4.8){
            k = k + 0.1*dt/10*0.6;
        }
        if(k>4.8&&m>-2.2){
            m = m - 0.1*dt/10*0.6;
        }
        if(m<-2.2&&m1<12){
            m1 = m1 + 0.1*dt/10*0.6;
        }
        if(m1>2&&m2<10){
            m2 = m2 + 0.1*dt/10*0.6;
        }
        if(m1>2.2&&m3<9.8){
            m3 = m3 + 0.1*dt/10*0.6;
        }
        if(m3>9.8){
            box.visible = false;
            clevel = 4;
            PIEshowInputPanel();
        }
    }
    
    if(current == 1){
        PIEshowDisplayPanel();
        if(sone.position.x > -40){
            sone.position.x = sone.position.x - 1*dt/10*0.6;
        }
        if(sone.position.x < -30){
            if(stwo.position.x < 5){
                stwo.position.x = stwo.position.x + 1*dt/10*0.6;
            }
        }
        if(model.position.x>-5){
            model.position.x = model.position.x - 0.2*dt/10*0.6;
            tap.position.x = tap.position.x - 0.2*dt/10*0.6;
            // model.position.y = model.position.y + 0.01;
        }
        if(model.position.x < -5){
            current = 2;
        }
        if(cow.position.x > -30){
            cow.position.x = cow.position.x - 0.2*dt/10*0.6;
        }
        if(tree.position.x > -30){
            tree.position.x = tree.position.x - 0.2*dt/10*0.6;
        }

    }
    if(current == 0){
        PIEshowDisplayPanel();
        if(sone.position.x < 5){
            sone.position.x = sone.position.x +dt/10; 
        }
        if(t/1000 > 2){
            if(manure1.position.y < 40 && manure1.position.x < 55.3){
                manure1.position.y = manure1.position.y + 0.1*dt/10*0.6;            
            }
            if(manure1.position.x<55.3 && manure1.position.y > 40){
                manure1.position.x = manure1.position.x + 0.1*dt/10*0.6;
            }   
            if(manure1.position.x>55.3&&manure1.position.y>28){
                manure1.position.y = manure1.position.y - 0.1*dt/10*0.6;
            }
            if(manure1.position.y<28){
                manure1.visible = false;
                if(m4<1){
                    m4 = 2;
                }
               
            }
            if(manure2.position.y < 40 && manure2.position.x < 55.3){
                manure2.position.y = manure2.position.y + 0.1*dt/10*0.6;
            }
            if(manure2.position.x<55.3 && manure2.position.y > 40){
                manure2.position.x = manure2.position.x + 0.1*dt/10*0.6;
            }   
            if(manure2.position.x>55.3&&manure2.position.y>28){
                manure2.position.y = manure2.position.y - 0.1*dt/10*0.6;
            }
            if(manure2.position.y<28){
                manure2.visible = false;
                if(m6<1){
                    m6 = 2;
                }
                clevel = 1;
                PIEshowInputPanel();
            }
        }
        
    }
    
    box.geometry = new THREE.ShapeGeometry(drawSquare());  
    box2.geometry = new THREE.ShapeGeometry(drawSquare2()); 
    box3.geometry = new THREE.ShapeGeometry(drawSquare3()); 
    box4.geometry = new THREE.ShapeGeometry(drawSquare4()); 
    box5.geometry = new THREE.ShapeGeometry(drawSquare5()); 
    box6.geometry = new THREE.ShapeGeometry(drawSquare6()); 
    box7.geometry = new THREE.ShapeGeometry(drawSquare8());
    box8.geometry = new THREE.ShapeGeometry(drawSquare11());
    box9.geometry = new THREE.ShapeGeometry(drawSquare12());
    manureBox.geometry = new THREE.ShapeGeometry(drawSquare7());
    manureBox2.geometry = new THREE.ShapeGeometry(drawSquare9());
    fmanureBox.geometry = new THREE.ShapeGeometry(drawSquare10());
    }
    if(time >= 1&&kl==1){
        PIEstopAnimation();
        kl=0;
    }


}

/******************* Update (animation changes) code ***********************/
