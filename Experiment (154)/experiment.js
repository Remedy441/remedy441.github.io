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
var arrow;             /* Ball Object */
var myBallRadius;       /* Radius */
var arrowX;            /* X Position */
var arrowY;            /* Y Position */
var arrowVX;           /* X Velocity */
var arrowVY;           /* Y Velocity */
var arrowAX;           /* X Acceleration */
var arrowAY;           /* Y Acceleration */
var arrowZ;            /* Z Position for placing ball */

/* Parameters, Variables */
var gravityX;           /* X component of Gravity in m/S2 */
var gravityY;           /* Y component of Gravity in m/S2 */
var geometry;
var line;
var lineMaterial;
var bow;
var stretched;
var arrowMass;

function myArrowDrag(element, newpos)
{
    stretched=true;
    console.log(line.geometry.vertices[2].x);
    PIEscene.remove(line);
    var geometry1=new THREE.Geometry();
    geometry1.vertices.push(new THREE.Vector3(1-0.1,0.7,arrowZ));
    geometry1.vertices.push(new THREE.Vector3(newpos.x-0.65,1.5,arrowZ));
    geometry1.vertices.push(new THREE.Vector3(0.9,2.3,arrowZ));
    line = new THREE.Line(geometry1, lineMaterial);
    // PIErender();
    arrowX = newpos.x;
    // console.log(newpos.x);
    if (newpos.x < 0.9) { arrowX = 0.9;geometry1.vertices[1].x=0.9-0.65}

    else if (newpos.x > 1.4) { arrowX = 1.4;geometry1.vertices[1].x=1.4-0.65 }
    updateInitialVelocity();
    arrow.position.set(arrowX, arrowY, arrowZ);
    PIEaddElement(line);

}

function inArray(value, array) {
    for (var i = 0; i < array.length; i++) {
        if (value == array[i])
            return true;
    }
    return false;
}

function updateInitialVelocity() {
    scaled_x = ((1.4 - arrowX) / 0.5) * 10;
    // console.log(7+scaled_x*1.5);
    var newVelocity = (7 + scaled_x * 1.5) / (arrowMass / 4);
    handleVX(newVelocity);
}
/******************* End of Interaction functions ***********************/

/******************* GUI control objects code ***********************/

function handleArrowMass(newValue){
    arrowMass=newValue;
    arrow.scale.z=1.5+2*(newValue-4)/40;
    PIErender();
}

function handleVX(newValue)
{
    arrowVX = newValue;
}


function initialiseControlVariables()
{
    /* Labels */

}


function initialiseControls()
{
    initialiseControlVariables();
    /* Create Input Panel */
    PIEaddInputSlider("Mass", 4, handleArrowMass, 4, 20, 1);
    /* Create Display Panel */
    PIEaddDisplayText("Mass", 4);
}


/******************* End of GUI control objects code ***********************/

/******************* Load Experiment objects code ***********************/

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows a bow and arrow. User can vary stretch of string of bow and mass of arrow and observe the distance covered by arrow</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two controls in the experiment.</p>";
    helpContent = helpContent + "<h3>Mass Control</h3>";
    helpContent = helpContent + "<p>From the controls panel in the top right corner you can vary the mass of arrow between the scale of 4 to 20 </p>";
    helpContent = helpContent + "<h3>Stretch Control</h3>";
    helpContent = helpContent + "<p>To stretch the string of bow and increase the tension move the pointer near arrow and string connection point. Then mouse pointer would turn into a hand, now you can can stretch the string by dragging arrow leftwards. When you end the drag arrrow would fire.  </p>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows a bow and arrow. User can vary stretch of string of bow and mass of arrow and observe the distance covered by arrow. </p>";
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

function resetstretch() {
    if(stretched) {
        PIEdragElements.pop();
        PIEstartAnimation();
        PIEscene.remove(line);
        var geometry1=new THREE.Geometry();
        geometry1.vertices.push(new THREE.Vector3(1-0.1,0.7,arrowZ));
        geometry1.vertices.push(new THREE.Vector3(0.9,1.5,arrowZ));
        geometry1.vertices.push(new THREE.Vector3(1-0.1,2.3,arrowZ));
        line = new THREE.Line(geometry1, lineMaterial);
        PIEaddElement(line);

    }
}
/**
 * This function creates the scene of the experiment.
 * It is called by the library during document load. 
 * It is recommended that you do not initialise any variables globally.
 * It is recommended that this function create all the elements first.
 * It should then call a reset function to initialise values.
 * This will allow a reset exepriment functionality to be implemented.
 * <p>
 * It is recommended that the developer first draw a sketch of the experiment on a piece of paper.
 * The sketch should specify the size and initial position of all the elements that comprise the experiment.
 * <p>
 * Once the sketch is ready, the developer should instantiate the elements at the intial location.
 * <p>
 * The (x,y) position of the camera would be set to the center of area of interest.
 * The z position of the camera would be such that the field of vision would cover the height.
 * The aspect ratio of the camera whould cover the width.
 * <p>
 * Two lights would be suitably positioned to light the area of interest.
 * <p>
 * The developer can position the camera and lights if he so chooses.
 * <p>
 * The camera would adjust and cover a wider and taller area depending on the dimensions of the display.
 * hence the background (if any) shoudl extend beyond the area of interest.
 * <p>
 * Finally the developer should call the function PIEsetAreaOfInterest(tlx, tly, brx, bry).
 * The parameters are the top left corner and bottom right corner coordinates.
 * The X axis goes from lef to right of te display and the y axis goes from bottom to up.
 * The area of interst should be wide and tall enough to cover all potential movements.
 * <p>
 * The developer should have a fairly good idea of the controls forthe experiment.
 * Once the scene is setup and is visible, the developer can include the controls and
 * the callback functions needed to update the experiment parameters.
 * The PIE library provides a set of functions to implement common controls.
 * <p>
 * The developer should code and assign proper event handlers to the elements (to control animation).
 */

function loadExperimentElements()
{
    arrowMass=4
    stretched=false;
var material;
var loader;
var texture;

    PIEsetExperimentTitle("9.11.8D Potential energy - elasticity");
    PIEsetDeveloperName("Navneet Nandan");
    PIEhideControlElement();
    loader = new THREE.ObjectLoader();

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();

    /* initialise Other Variables */
    initialiseOtherVariables();
    loader.load("https://raw.githubusercontent.com/NavneetNandan/BowActivity/master/BowActivity/sg-bow-1.json",function (obj) {
        bow=obj;
        bow.scale.x = 0.0009;
        bow.scale.y = 0.0009;
        bow.scale.z = 0.0009;
        bow.position.set(1,arrowY,arrowZ);
        bow.rotation.x= 1.4*Math.PI / 4;
        bow.rotation.y= 2*Math.PI / 4;
        bow.rotation.z= 0.5*Math.PI / 4;
        PIEaddElement(obj);
        PIErender();
        // PIEstartButton.addEventListener()

    });
    PIErenderer.domElement.addEventListener("mouseup", resetstretch, false);
    loader.load("https://raw.githubusercontent.com/NavneetNandan/BowActivity/master/BowActivity/sun-dial-arrow.json",function (obj) {
        arrow=obj.children[0];
        arrow.material.color.setHex(0x4E342E);
        arrow.scale.x = 0.6;
        arrow.scale.y = 0.6;
        arrow.scale.z = 1.5;
        arrow.position.set(1.4,arrowY,arrowZ);
        arrow.rotation.x= Math.PI/2 ;
        // obj.rotation.y= Math.PI / 4;
        arrow.rotation.z= Math.PI/2 ;
        PIEaddElement(arrow);
        PIEdragElement(arrow);
        PIEsetDrag(arrow, myArrowDrag);
        PIErender();
    });
    var geometry_cube = new THREE.BoxGeometry(0.03, 1.5, 1.5);
    var material_cube = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture('https://raw.githubusercontent.com/NavneetNandan/BowActivity/master/BowActivity/rinG8A7qT.gif')});
    var cube = new THREE.Mesh(geometry_cube, material_cube);
    cube.position.set(6,1.1,-2);
    cube.castShadow = false;
    cube.receiveShadow = false;
    PIEaddElement(cube);
    // var img = new THREE.MeshLambertMaterial({
    //     map:THREE.ImageUtils.loadTexture('rinG8A7qT.gif')
    // });
    // var geometry=new THREE.BoxGeometry(20,20,50);
    // var box=new THREE.Mesh(geometry,img);
    // box.position.set(arrowX,arrowY,arrowZ);
    // PIEaddElement(box);
    /* Create Ball and add it to scene */
    // arrow = new THREE.Mesh(new THREE.SphereGeometry(myBallRadius, 32, 32), new THREE.MeshLambertMaterial({color:0xededed}));
    // arrow.position.set(arrowX, arrowY, myBallZ);
    // arrow.castShadow = true;
    // arrow.receiveShadow = true;
    // PIEaddElement(arrow);
    /* Allow Dragging of the ball */


    /* Initialise Wall variables */
    /* All walls extend beynd the room size in both directions */
    /* Floor */
    // loader = new THREE.TextureLoader();
    // texture = loader.load( '../PIE/images/hardwood2_diffuse.jpg' );
    // texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    // texture.repeat.set( 25, 25 );
    // texture.anisotropy = 16;
    // material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: texture } );
    // geometry = new THREE.PlaneBufferGeometry( mySceneW * 2, backB * 2 );
    geometry = new THREE.BoxGeometry( mySceneW * 2, wallThickness, 100);
    material = new THREE.MeshLambertMaterial( {color: 0x4E342E} );
    myFloor  = new THREE.Mesh( geometry, material );
    // myFloor.lookAt(new THREE.Vector3(0,1,0));
    myFloor.position.set(myCenterX, bottomB - (wallThickness / 2), 0.0);
    myFloor.receiveShadow = true;
    PIEaddElement(myFloor);
    /* Ceiling */
    geometry = new THREE.BoxGeometry( mySceneW * 2, wallThickness, 100 );
    material = new THREE.MeshLambertMaterial( {color: 0x2196F3} );
    myCeiling = new THREE.Mesh( geometry, material );
    myCeiling.position.set(myCenterX, topB+(wallThickness/2), 0.0);
    myFloor.receiveShadow = true;
    PIEaddElement(myCeiling);
    /* Left */
    geometry = new THREE.BoxGeometry( wallThickness, mySceneH * 2, 100 );
    material = new THREE.MeshLambertMaterial( {color: 0x4CAF50} );
    myLeft = new THREE.Mesh( geometry, material );
    myLeft.position.set(leftB-(wallThickness), myCenterY, 0.0);
    myLeft.receiveShadow = true;
    PIEaddElement(myLeft);
    /* Right */
    geometry = new THREE.BoxGeometry( wallThickness, mySceneH * 2, 100 );
    material = new THREE.MeshLambertMaterial( {color: 0x4CAF50} );
    myRight = new THREE.Mesh( geometry, material );
    myRight.position.set(rightB+(wallThickness/2), myCenterY, 0.0);
    myRight.receiveShadow = true;
    PIEaddElement(myRight);
    /* Back */
    // material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: texture } );
    // geometry = new THREE.PlaneBufferGeometry( mySceneW * 2, mySceneH * 2 );
    geometry = new THREE.BoxGeometry( mySceneW * 2, mySceneH * 2, wallThickness );
    material = new THREE.MeshLambertMaterial( {color: 0x4CAF50} );
    myBack = new THREE.Mesh( geometry, material );
    myBack.position.set(myCenterX, myCenterY, backB - (wallThickness / 2));
    myBack.receiveShadow = true;
    PIEaddElement(myBack);
    /* Instantiate experiment controls */
    initialiseControls();
    document.getElementById('start').remove();
    /* Reset all positions */

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
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
    if(arrow!=null){
    PIEdragElement(arrow);
    PIEsetDrag(arrow,myArrowDrag);
    }
    stretched=false;
    /* Initialise Ball variables */
    arrowX      = myCenterX;
    arrowY      = myCenterY;
    arrowVX     = 7.0/ (arrowMass / 4);
    // updateInitialVelocity();
    arrowVY     = 0.0;
    arrowAX     = gravityX;
    arrowAY     = gravityY;

    /* Reset Ball position */
    // arrow.position.set(arrowX, arrowY, myBallZ);
    lineMaterial = new THREE.MeshBasicMaterial({
        color: 0x0e0e0e,
    });
    geometry = new THREE.Geometry();
    if(inArray(line,PIEsceneElements)){
        PIEscene.remove(line);
    }
    if(arrow!=null) {
        arrow.position.set(1.4, arrowY, arrowZ);
    }
    geometry.vertices.push(new THREE.Vector3(0.9,0.7,arrowZ));
    geometry.vertices.push(new THREE.Vector3(0.75,1.5,arrowZ));
    geometry.vertices.push(new THREE.Vector3(0.9,2.3,arrowZ));
    line = new THREE.Line(geometry, lineMaterial);
    line.geometry.dynamic = true;
    PIEaddElement(line);

    /* Reset Wall position */
    /* Floor */
    myFloor.position.set(myCenterX, bottomB - (wallThickness / 2), 0.0);
    /* Ceiling */
    myCeiling.position.set(myCenterX, topB+(wallThickness/2), 0.0);
    /* Left */
    myLeft.position.set(leftB-(wallThickness/2), myCenterY, 0.0);
    /* Right */
    myRight.position.set(rightB+(wallThickness/2), myCenterY, 0.0);
    /* Back */
    myBack.position.set(myCenterX, myCenterY, backB - (wallThickness / 2));
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
var newX;           /* new X position of ball */
var newY;           /* new Y position of ball */
var newVX;          /* new X velocity of ball */
var newVY;          /* new Y velocity of ball */
var changeX;        /* X boundary hit */
var changeY;        /* Y boundary hit */
var boundaryT;      /* Boundary Event Time */
var tempT;          /* Temporary time */

    /* Load Ball coordinates */
    arrowX = arrow.position.x;
    arrowY = arrow.position.y;
    arrowZ = arrow.position.z;
    var arrowLengthBy2=0.75;
    var arrowHeightBy2=0.2;
    /* Intialise for boundary detection */
    changeX   = 1;
    changeY   = 1;
    boundaryT = dt / 1000.0;    /* convert to seconds */

    /* Compute new arrow position and check for boundary event */
    newX = arrowX + arrowVX * boundaryT + 0.5 * arrowAX * boundaryT * boundaryT;
    if ((newX >= (rightB - arrowLengthBy2)) || (newX <= (leftB + arrowLengthBy2)))
    {   /* X boundary violated */
	if (newX >= (rightB - arrowLengthBy2))
        {   /* Ball hits right */
            if (arrowAX == 0) { tempT = ((rightB - arrowLengthBy2) - arrowX) / arrowVX; }
            else { tempT = (Math.sqrt(arrowVX * arrowVX + 2 * arrowAX * ((rightB - arrowLengthBy2) - arrowX)) - arrowVX) / arrowAX; }
        }
	if (newX <= (leftB + arrowLengthBy2))
        {   /* Ball hits left */
            if (arrowAX == 0) { tempT = ((leftB + arrowLengthBy2) - arrowX) / arrowVX; }
            else { tempT = ((-arrowVX) - Math.sqrt(arrowVX * arrowVX + 2 * arrowAX * ((leftB + arrowLengthBy2) - arrowX))) / arrowAX; }
        }
	if (tempT == boundaryT) { changeX = -1; }
	if (tempT < boundaryT)  { changeX = -1; changeY = 1; boundaryT = tempT }
    }
    newY = arrowY + arrowVY * boundaryT + 0.5 * arrowAY * boundaryT * boundaryT;
    if ((newY >= (topB - arrowHeightBy2)) || (newY <= (bottomB + arrowHeightBy2)))
    {   /* Y boundary violated */
	if (newY >= (topB - arrowHeightBy2))
        {   /* Ball hits top */
            if (arrowAY == 0) { tempT = ((topB - arrowHeightBy2) - arrowY) / arrowVY; }
            else { tempT = (Math.sqrt(arrowVY * arrowVY + 2 * arrowAY * ((topB - arrowHeightBy2) - arrowY)) - arrowVY) / arrowAY; }
        }
	if (newY <= (bottomB + arrowHeightBy2))
        {   /* Ball hits bottom */
            if (arrowAY == 0) { tempT = ((bottomB + arrowHeightBy2) - arrowY) / arrowVY; }
            else { tempT = ((-arrowVY) - Math.sqrt(arrowVY * arrowVY + 2 * arrowAY * ((bottomB + arrowHeightBy2) - arrowY))) / arrowAY; }
        }
	if (tempT == boundaryT) { changeY = -1; }
	if (tempT < boundaryT)  { changeY = -1; changeX = 1; boundaryT = tempT }
    }
    /* Finally Change in direction boundary Event for velocity */
    if ((changeX == 1) && (changeY == 1))
    {   /* Check only if no barrier is crossed */
        newVX = (arrowVX + arrowAX * boundaryT);
        if ((newVX * arrowVX) < 0)
        {   /* X velocity changed direction */
	    tempT = (-arrowVX) / arrowAX;
	    if (tempT < boundaryT)  { boundaryT = tempT }
        }
        newVY = (arrowVY + arrowAY * boundaryT);
        if ((newVY * arrowVY) < 0)
        {   /* Y velocity changed direction */
	    tempT = (-arrowVY) / arrowAY;
	    if (tempT < boundaryT)  { boundaryT = tempT }
        }
    }

    /* Recompute Position, Velocity, Acceleration using boundaryT */
    arrowX  = (arrowX + arrowVX * boundaryT + 0.5 * arrowAX * boundaryT * boundaryT);
    arrowY  = (arrowY + arrowVY * boundaryT + 0.5 * arrowAY * boundaryT * boundaryT);
    if(changeX!=-1)
    arrowVX = (arrowVX + arrowAX * boundaryT) * changeX;
    else {
        PIEstopAnimation();
    }
    if(changeY!=-1)
    arrowVY = (arrowVY + arrowAY * boundaryT) * changeY;
    else {
        PIEstopAnimation();
    }

    /* Set Ball position */
    arrow.position.set(arrowX, arrowY, arrowZ);

    /* Adjust Simulation time in case boundary event has occured */
    boundaryT *= 1000;
    if (boundaryT < dt) { PIEadjustAnimationTime(dt - boundaryT); }

    /* Finally Update the Display Panel with new values */

}

/******************* Update (animation changes) code ***********************/
