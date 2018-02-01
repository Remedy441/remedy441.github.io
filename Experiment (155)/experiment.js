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

/* Room Variables */
var leftB;              /* Left Barrier */
var rightB;             /* Right Barrier */
var bottomB;            /* Bottom Barrier */
var topB;               /* Top Barrier */
var backB=-4.0;         /* Back Barrier */
var wallThickness;      /* Wall Thickness */

/* Room Objects */
var myFloor;            /* Floor */
var myCeiling;          /* Ceiling */
var myBack;             /* Back */
var myRight;            /* Right */
var myLeft;             /* Left */

/* Ball variables */
var myBallRadius;       /* Radius */

var objectX;
var objectY;
var objectZ;
/* Parameters, Variables */
var gravityX;           /* X component of Gravity in m/S2 */
var gravityY;           /* Y component of Gravity in m/S2 */
var bow;
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
// camera
var VIEW_ANGLE = 45;
var ASPECT = WIDTH / HEIGHT;
var NEAR = 1;
var FAR = 500;
var distance_from_mirror;

var cube;
var myBall;
var cone;
var current;
function createAndAddCube() {
    var cubeMaterial=new THREE.MeshLambertMaterial({map:THREE.ImageUtils.loadTexture("https://raw.githubusercontent.com/NavneetNandan/rulerActivity/master/Experiment/wood-textures-high-quality-8.jpg",'',onloada)});
    var cubeGeometry=new THREE.CubeGeometry(0.4,0.4,0.4);
    cube=new THREE.Mesh(cubeGeometry,cubeMaterial);
    objectY=1+0.4/2;
    cube.position.set(object_position_x, object_position_y+0.4/2, object_position_z);
    PIEaddElement(cube);
    PIEdragElement(cube);
    PIEsetDrag(cube,myTeapotDrag);
    if (current != null) {
        PIEscene.remove(current);
    }

    current = cube;

    PIErender();
    verticalMirror.render();

}
function createAndAddBall() {
    if (current != null) {
        PIEscene.remove(current);
    }
    objectY=1+0.2;
    myBall = new THREE.Mesh(new THREE.SphereGeometry(0.2, 32, 32), new THREE.MeshLambertMaterial({color: 0xededed}));
    myBall.position.set(object_position_x,object_position_y+0.2,object_position_z);
    PIEsetDrag(myBall,myTeapotDrag);
    PIEdragElement(myBall);
    PIEaddElement(myBall);
    current=myBall;
    verticalMirror.render();
    PIErender();

}
function createAndAddCone() {
    if (current != null) {
        PIEscene.remove(current);
    }
    objectY=1+0.4;
    var geometry = new THREE.ConeGeometry( 0.25, 0.8,32 );
    var material = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture('https://raw.githubusercontent.com/NavneetNandan/rulerActivity/master/Experiment/images.jpg','',onloada)} );
    cone = new THREE.Mesh( geometry, material );
    // cone.rotateX(Math.PI/2);
    cone.position.set(object_position_x,object_position_y+0.4,object_position_z);
    PIEaddElement(cone);
    PIEdragElement(cone);
    PIEsetDrag(cone,myTeapotDrag);
    current=cone;
    verticalMirror.render();

    PIErender();

}
var cylinder;
function createAndAddCylinder() {
    if (current != null) {
        PIEscene.remove(current);
    }
    objectY=1+0.4
    var geometry = new THREE.CylinderGeometry( 0.4, 0.4, 0.8,32 );
    var material = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture('https://raw.githubusercontent.com/NavneetNandan/rulerActivity/master/Experiment/bricks.jpg','',onloada)} );
    cylinder = new THREE.Mesh( geometry, material );
    cylinder.position.set(object_position_x,object_position_y+0.4,object_position_z);
    PIEaddElement(cylinder);
    PIEdragElement(cylinder);
    PIEsetDrag(cylinder,myTeapotDrag);
    current=cylinder;

    verticalMirror.render();

    PIErender();

}

function myTeapotDrag(element, newpos)
{
    console.log("x"+newpos.x);
    console.log("y"+newpos.y);
    console.log("z"+newpos.z);
    if(newpos.x>2.33&&newpos.x<3.74){
        objectX=newpos.x;
    }
    if(newpos.z<0.64&&newpos.z>-0.68)
    {
        objectZ=newpos.z;
    }
    element.position.set(objectX, objectY, objectZ);
    verticalMirror.render();
    PIErender();
    PIEchangeInputSlider("Distance from Mirror",objectZ+1.5);
    PIEchangeDisplaySlider("Distance from Mirror",objectZ+1.5);
    PIEchangeInputSlider("Left - Right",objectX-3.03);
    PIEchangeDisplaySlider("Left - Right",objectX-3.03);
    // PIEchangeDisplaySlider("Distance from Mirror",objectZ+1.5);
    // PIEaddElement(line);

}

function inArray(value, array) {
    for (var i = 0; i < array.length; i++) {
        if (value == array[i])
            return true;
    }
    return false;
}

/******************* End of Interaction functions ***********************/

/******************* GUI control objects code ***********************/


function handleZDistance(newValue) {
    distance_from_mirror = newValue;
    current.position.z=-1.5+distance_from_mirror;
    verticalMirror.render();
    PIErender();
}

function handleXDistance(newValue) {
    current.position.x=newValue+3.03;
    verticalMirror.render();
    PIErender();
}

function initialiseControlVariables() {
    /* Labels */
}

function addButtonToControls(text) {
    var button=document.createElement("input");
    button.setAttribute("type","checkbox");
    button.setAttribute("id", text);
    button.setAttribute("class", "objects");
    button.setAttribute("style","margin-left: 5px;");
    var button1=document.createElement("input");
    button1.setAttribute("type","checkbox");
    button1.setAttribute("id", text+"1");
    button1.setAttribute("class", "objects");
    button1.setAttribute("style","margin-left: 5px;");
    var para=document.createElement("label");
    para.setAttribute("for",button.id);
    para.innerHTML = text;
    para.setAttribute("style","margin-right: 10px;");
    var para1=document.createElement("label");
    para1.setAttribute("for",button1.id);
    para1.innerHTML = text;
    para1.setAttribute("style","margin-right: 10px;");
    document.getElementsByTagName("form")[0].appendChild(button);
    document.getElementsByTagName("form")[1].appendChild(button1);
    document.getElementsByTagName("form")[0].appendChild(para);
    document.getElementsByTagName("form")[1].appendChild(para1);
}

function initialiseControls() {
    initialiseControlVariables();
    var list=document.createElement("li");
    list.setAttribute("class","object_selection_list");
    var list1=document.createElement("li");
    list1.setAttribute("class","object_selection_list");
    document.getElementsByClassName("dg main a")[1].children[1].appendChild(list);
    document.getElementsByClassName("dg main a")[0].children[1].appendChild(list1);
    var form=document.createElement("form");
    var form1=document.createElement("form");
    document.getElementsByClassName("object_selection_list")[0].appendChild(form);
    document.getElementsByClassName("object_selection_list")[1].appendChild(form1);
    addButtonToControls("Cone");
    addButtonToControls("Pillar");
    addButtonToControls("Cube");
    addButtonToControls("Ball");
    addButtonToControls("Teapot");
    /* Create Input Panel */
    // PIEaddDisplaySlider("Distance from Mirror", 1.5, 0.82, 2.14, 0.01);

    PIEaddInputSlider("Distance from Mirror", 1.5, handleZDistance, 0.82, 2.14, 0.01);
    PIEaddInputSlider("Left - Right", 0, handleXDistance, -0.7, 0.7, 0.01);
    PIEaddDisplaySlider("Distance from Mirror", 1.5, handleZDistance, 0.82, 2.14, 0.01);
    PIEaddDisplaySlider("Left - Right", 0, handleXDistance, -0.7, 0.7, 0.01);
    // PIEaddInputSlider("Mass", 4, handleArrowMass, 4, 20, 1);
    /* Create Display Panel */


    document.getElementById("Ball").onclick=function () {
        deselect_all();
        this.checked=true;
        document.getElementById("Ball1").checked=true;
        createAndAddBall();
        PIEsetDrag(myBall,myTeapotDrag);
    };
    document.getElementById("Ball1").onclick=function () {
        deselect_all();
        this.checked=true;
        document.getElementById("Ball").checked=true;
        createAndAddBall();
        PIEsetDrag(myBall,myTeapotDrag);
    };
    document.getElementById("Cube").onclick=function () {
        deselect_all();
        this.checked=true;
        document.getElementById("Cube1").checked=true;
        createAndAddCube();
        PIErender();
    };
    document.getElementById("Cube1").onclick=function () {
        deselect_all();
        this.checked=true;
        document.getElementById("Cube").checked=true;
        createAndAddCube();
        PIErender();
    };
    document.getElementById("Teapot").onclick=function () {
        deselect_all();
        this.checked=true;
        document.getElementById("Teapot1").checked=true;
        if (current != null) {
            PIEscene.remove(current);
        }
        objectY=1;
        teapot.position.set(object_position_x,object_position_y,object_position_z);
        PIEdragElement(teapot);
        PIEaddElement(teapot);
        PIEsetDrag(teapot,myTeapotDrag);
        current=teapot;
        verticalMirror.render();
        PIErender();

    };
    document.getElementById("Teapot1").onclick=function () {
        deselect_all();
        this.checked=true;
        document.getElementById("Teapot").checked=true;
        if (current != null) {
            PIEscene.remove(current);
        }
        objectY=1;
        teapot.position.set(object_position_x,object_position_y,object_position_z);
        PIEdragElement(teapot);
        PIEaddElement(teapot);
        PIEsetDrag(teapot,myTeapotDrag);
        current=teapot;
        verticalMirror.render();
        PIErender();

    };
   document.getElementById("Cone").onclick=function () {
        deselect_all();
        this.checked=true;
       document.getElementById("Cone1").checked=true;

       createAndAddCone();
        PIErender();
    };
   document.getElementById("Cone1").onclick=function () {
        deselect_all();
        this.checked=true;
       document.getElementById("Cone").checked=true;

       createAndAddCone();

        PIErender();
    };
    document.getElementById("Pillar").onclick=function () {
        deselect_all();
        this.checked=true;
        createAndAddCylinder();
        PIErender();
    };
    document.getElementById("Pillar1").onclick=function () {
        deselect_all();
        this.checked=true;
        createAndAddCylinder();
        PIErender();
    };

}


/******************* End of GUI control objects code ***********************/

/******************* Load Experiment objects code ***********************/

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows a teapot over a chessboard and its image in the plane mirror. User can vary position of teapot over chessboard and observe image in mirror</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>User can vary distance from mirror using slider on right top corner or dragging teapot. To vary distance from slider user has to stop the animation first.</p>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>Show a chessboard and an object placed on a chessboard. Place a mirror at the side. Show the image and distance from mirror. Allow student to position the object and show image (and distance).</p>";
    PIEupdateInfo(infoContent);
}

function initialiseScene()
{
    /* Initialise Scene Variables */
    mySceneTLX = 0.0;
    mySceneTLY = 3.0;
    mySceneBRX = 6.0;
    mySceneBRY = 0.0;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
    arrowZ    = -2.0;
}

function initialiseOtherVariables()
{
    /* Initialise variables */
    myBallRadius = 0.6;
    wallThickness =  0.20;

    /* Gravity */
    gravityX = 0.0;
    gravityY = -9.8;

    /* Barriers */
    leftB=mySceneTLX;
    rightB=mySceneBRX;
    bottomB=mySceneBRY;
    topB=mySceneTLY;
}

function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}
var planeGeo ;
var frame;
function callbackMirrorLoad() {
    verticalMirror = new THREE.Mirror( PIErenderer, PIEcamera, { clipBias: 0.003, textureWidth: WIDTH, textureHeight: HEIGHT, color:0x889999 } );
    var verticalMirrorMesh = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2, 1.5 ), verticalMirror.material );
    verticalMirrorMesh.add( verticalMirror );
    verticalMirrorMesh.position.y = 1.8;
    verticalMirrorMesh.position.x = 3;
    verticalMirrorMesh.position.z = -1.5;
    var geometry = new THREE.BoxGeometry( 2.2, 1.7, 0.001);
    var material = new THREE.MeshLambertMaterial( {color: 0x4E342E} );
    frame  = new THREE.Mesh( geometry, material );
    frame.position.set(3,1.8,-1.6);
    PIEaddElement(frame);
    PIEscene.add( verticalMirrorMesh );
    distance_from_mirror=1.5;
    console.log(distance_from_mirror);
    PIEstartAnimation();
}
var chessboard;
var table;
var teapot;
var object_position_x=3;
var object_position_y=1;
var object_position_z=0;
var onloada=function () {
    verticalMirror.render();
    PIErender();
};

function deselect_all(){
    var all_checkboxes=document.getElementsByClassName("objects");
    for (var i=0;i<all_checkboxes.length;i++){
        all_checkboxes[i].checked=false;
    }
}
function loadExperimentElements()
{

    objectX=3;
    objectY=1;
    objectZ=0;
    planeGeo = new THREE.PlaneBufferGeometry( 100.1, 100.1 );
var material;
var loader;
var texture;
    PIEsetExperimentTitle("Position of the image");
    PIEsetDeveloperName("Navneet Nandan");
    PIEhideControlElement();
    loader = new THREE.ObjectLoader();
    loadScript("https://threejs.org/examples/js/Mirror.js",callbackMirrorLoad);
    loadScript("https://threejs.org/docs/scenes/js/geometry.js",function () {

    });
    // loadScript("",function () {
    //
    // });

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();

    /* initialise Other Variables */
    initialiseOtherVariables();
    loader.load('https://raw.githubusercontent.com/NavneetNandan/MirrorActivity/master/Experiment/chessboard.json',function (obj) {
        chessboard=obj;
        chessboard.scale.x=15;
        chessboard.scale.z=15;
        chessboard.scale.y=15;
        chessboard.position.set(3,1,0);
        PIEaddElement(chessboard);
    });
    loader.load('https://raw.githubusercontent.com/NavneetNandan/MirrorActivity/master/Experiment/table-0001.json',function (obj) {
        table=obj;
        table.position.set(3,-0.18,0)
        table.scale.x=0.7;
        table.scale.y=0.7;
        table.scale.z=0.7;
        PIEaddElement(table)
    });
    loader.load("https://raw.githubusercontent.com/NavneetNandan/MirrorActivity/master/Experiment/teapot-claraio.json", function (obj) {
        teapot = obj;
        teapot.position.set(objectX,objectY,objectZ);
        teapot.scale.x=0.4;
        teapot.scale.y=0.4;
        teapot.scale.z=0.4;
        // PIEaddElement(teapot);
        PIEdragElement(teapot);
        PIEsetDrag(teapot,myTeapotDrag);

    });
    // createAndAddCube();
    // PIEsetDrag(cube,myTeapotDrag);
    geometry = new THREE.BoxGeometry( mySceneW * 2, wallThickness, 100);
    material = new THREE.MeshLambertMaterial( {color: 0x4E342E} );
    myFloor  = new THREE.Mesh( geometry, material );
    // myFloor.lookAt(new THREE.Vector3(0,1,0));
    myFloor.position.set(myCenterX, bottomB - (wallThickness / 2), 0.0);
    myFloor.receiveShadow = true;
    PIEaddElement(myFloor);
    /* Ceiling */
    geometry = new THREE.BoxGeometry( 100, wallThickness, 100 );
    material = new THREE.MeshLambertMaterial( {color: 0x2196F3} );
    myCeiling = new THREE.Mesh( geometry, material );
    myCeiling.position.set(myCenterX, topB+(wallThickness/2), 0.0);
    myFloor.receiveShadow = true;
    PIEaddElement(myCeiling);
    /* Left */
    geometry = new THREE.BoxGeometry( wallThickness, 100, 100 );
    material = new THREE.MeshLambertMaterial( {color: 0x4CAF50} );
    myLeft = new THREE.Mesh( geometry, material );
    myLeft.position.set(leftB-(wallThickness), myCenterY, 0.0);
    myLeft.receiveShadow = true;
    PIEaddElement(myLeft);
    /* Right */
    geometry = new THREE.BoxGeometry( wallThickness, 100, 100 );
    material = new THREE.MeshLambertMaterial( {color: 0x4CAF50} );
    myRight = new THREE.Mesh( geometry, material );
    myRight.position.set(rightB+(wallThickness/2), myCenterY, 0.0);
    myRight.receiveShadow = true;
    PIEaddElement(myRight);
    var light= new THREE.PointLight(0xffffff, 1, 0, 2);
    light.position.set(3,4,-0.2);
    PIEscene.add(light);
    /* Back */
    // material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: texture } );
    // geometry = new THREE.PlaneBufferGeometry( mySceneW * 2, mySceneH * 2 );
    geometry = new THREE.BoxGeometry( mySceneW * 2, mySceneW * 2, wallThickness );
    material = new THREE.MeshLambertMaterial( {color: 0xFFFFFF} );
    myBack = new THREE.Mesh( geometry, material );
    myBack.position.set(myCenterX, myCenterY, 5);
    myBack.receiveShadow = true;
    // PIEaddElement(myBack);
    /* Instantiate experiment controls */
    var planeBack = new THREE.Mesh( planeGeo, new THREE.MeshPhongMaterial( { color: 0x4CAF50 } ) );
    planeBack.position.z = -2;
    planeBack.position.y = 0;
    PIEscene.add( planeBack );

    var planeFront = new THREE.Mesh( planeGeo, new THREE.MeshPhongMaterial( { color: 0x7f7fff } ) );
    planeFront.position.z = 2;
    planeFront.position.y = 0;
    planeFront.rotateY( Math.PI );
    PIEscene.add( planeFront );
    initialiseControls();
    /* Reset all positions */

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    PIEcamera.position.y=3;
    // PIEcamera.position.set(7.5,2,2.5);
    PIEcamera.rotateX(-0.2);
    // PIEcamera.rotateY(1.2*Math.PI/4);
    // PIEcamera.rotateOnAxis()
    resetExperiment();

    // document.getElementById('reset').click();

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
    /* initialise Other Variables */
    initialiseOtherVariables();
    // PIEaddElement(line);


    // var light1= new THREE.PointLight(0xffffff, 1, 0, 0);
    // light1.position.set(3,2,0.5);
    // PIEscene.add(light1);

    /* Reset Wall position */
    /* Floor */
    myFloor.position.set(myCenterX, bottomB - (wallThickness / 2), 0.0);
    /* Ceiling */
    myCeiling.position.set(myCenterX, topB+(wallThickness/2), 0.0);
    /* Left */
    myLeft.position.set(leftB-(wallThickness/2)-1, myCenterY, 0.0);
    /* Right */
    myRight.position.set(rightB+(wallThickness/2)+1, myCenterY, 0.0);
    /* Back */
    myBack.position.set(myCenterX, myCenterY, backB - (wallThickness / 2)+1);
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
    document.getElementsByClassName("dg main a")[1].style.width="400px"
    document.getElementsByClassName("dg main a")[1].style.width="400px"
    document.getElementsByClassName("dg main a")[0].style.width="400px"
    PIEscene.remove(PIEspotLight);
    verticalMirror.render();

}

/******************* Update (animation changes) code ***********************/
