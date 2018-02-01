/* Global Variables */
/* We define a table with two magnets on it */
/* One of the magnets is fixed while the other revolves around the first magnet */
/* The revolving magnet also supports dragging */
/* Scene Dimensions (in meters: at z = 0) */
var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */

/* Magnet 1 variables */
var myMagnet1;          /* Magnet 1 Object */
var myMagnet1X;         /* X Position */
var myMagnet1Y;         /* Y Position */
var myMagnet1Z;         /* Z Position */

/* Magnet 2 variables */
var myMagnet2;          /* Magnet 2 Object */
var myMagnet2X;         /* X Position */
var myMagnet2Y;         /* Y Position */
var myMagnet2Z;         /* Z Position */

/* Common magnet variables */
var magnetW;            /* Width of the magnet object */
var magnetH;            /* Height of the magnet object */
var magnetD;            /* Depth of the magnet object */

/* Other objects */
var myTable;            /* Table object */

/**
 * Initialize global variables related to the scene.
 */
function initialiseScene()
{
    /* Initialise Scene Variables */
    mySceneTLX = 0.0;
    mySceneTLY = 0.0;
    mySceneBRX = 6.0;
    mySceneBRY = 4.0;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
}

/**
 * Initialize other global variables.
 */
function initialiseOtherVariables()
{
    /* Initialise variables */
    magnetW    = 0.2;
    magnetH    = 0.8;
    magnetD    = 0.2;
    myMagnet1Z = 0;
    myMagnet2Z = 0;
}

/******************* GUI control objects code ***********************/

/**
 * Handler for control to change magnet orientation
 * @param newValue  New value of the control
 */
function handleRotation(newValue) {
    if (newValue == 0) {
        myMagnet1.rotation.set( 0, 0, 0 );
    } else {
        myMagnet1.rotation.set( 0, 0, Math.PI/2 );
    }
}

/**
 * Initialize the user changeable controls for this experiment.
 */
function initialiseControls()
{
    /* Allow user to drag the magnet manually to see the effect of the magnetic field on the compass */
    PIEaddInputSlider("Allow Drag", 0, null, 0, 1, 1);

    /* Allow user to flip the orientation of the revolving magnet to horizontal/vertical */
    PIEaddInputSlider("Flip Magnet", 0, handleRotation, 0, 1, 1);
}

/******************* End of GUI control objects code ***********************/

/******************* Interaction functions ***********************/

/**
 * This drag handler restricts the motion of the draggable magnet to the dimensions of the table.
 * @param element   The element that is dragged
 * @param newpos    The new position of the dragged element
 */
function magnetDragHandler(element, newpos)
{
    myMagnet1X = newpos.x;
    if (newpos.x > (mySceneW - 0.5)) { myMagnet1X = mySceneW - 0.5 }
    else if (newpos.x < mySceneW - 5.5) { myMagnet1X = mySceneW - 5.5 }
    myMagnet1Y = newpos.y;
    if (newpos.y > -mySceneH - 0.5) { myMagnet1Y = -mySceneH - 0.5; }
    else if (newpos.y < -mySceneH - 3.5) { myMagnet1Y = -mySceneH - 3.5; }
    myMagnet1Z = newpos.z;

    myMagnet1.position.set(myMagnet1X, myMagnet1Y, myMagnet1Z);

    PIEchangeInputSlider("Allow Drag", 1);      /* Allow drag enabled */
    PIEstartAnimation();    /* Start animation as soon as user drags the magnet */
}

/******************* End of Interaction functions ***********************/

/******************* Load Experiment objects code ***********************/

var helpContent;
function initialiseHelp()
{
    helpContent = "";
    helpContent += "<h2>6.13.8D Rotating a Magnet experiment help</h2>";
    helpContent += "<h3>About the experiment</h3>";
    helpContent += "<p>The experiment shows two magnets lying on a table. One of the magnets is fixed at its center and ";
    helpContent += "is free to rotate like a compass.<br />The other magnet revolves around the first magnet in a circle.</p>";
    helpContent += "<p>The revolving magnet's magnetic field influences the fixed magnet and causes it to rotate to align with the field lines of the revolving magnet.</p>";
    helpContent += "<h2>Animation control</h2>";
    helpContent += "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent += "<h3>The setup stage</h3>";
    helpContent += "<p>In this stage the following controls can be configured by you:</p>";
    helpContent += "<ul>";
    helpContent += "<li>Allow Drag&nbsp;&nbsp;:&nbsp;If set to <b>1</b> allows you to drag the magnet manually. ";
    helpContent += "If set to <b>0</b> the magnet will revolve automatically.</li>";
    helpContent += "<li>Flip Magnet&nbsp;&nbsp;:&nbsp;If set to <b>1</b> the magnet's orientation is set to horizontal. ";
    helpContent += "If set to <b>0</b> the magnet;s orientation is set to vertical.</li>";
    helpContent += "</ul>";
    helpContent += "<h3>The animation stage</h3>";
    helpContent += "<p>In this stage the fixed magnet will respond to the magnetic field of the revolving magnet and rotate accordingly.</p>";
    helpContent += "<p>The magnet will revolve automatically if the <i>\"Flip Magnet\"</i> control is disabled. ";
    helpContent += "Otherwise you have to drag the magnet manually to see the effect of the magnetic field.</p>";
    helpContent += "<p>You can pause and resume the animation by using the pause/play button on the top line.</p>";
    helpContent += "<p>You can slow down and speed up the animation by using the speed control buttons.</p>";
    helpContent += "<h3>The drag and drop</h3>";
    helpContent += "<p>You can also position one of the magnets by dragging and dropping it. You can do this in both the ";
    helpContent += "setup stage and the animation stage if the <i>\"Flip Magnet\"</i> control is set to <b>1</b>.</p>";
    helpContent += "<p>In the animation stage dragging the magnet will cause the other magnet to rotate accordingly.</p>";
    helpContent += "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent = "";
    infoContent += "<h2>6.13.8D Rotating a Magnet experiment concepts</h2>";
    infoContent += "<h3>About the experiment</h3>";
    infoContent += "<p>The experiment shows two magnets lying on a table. One of the magnets is fixed at its center and ";
    infoContent += "is free to rotate like a compass.<br />The other magnet revolves around the first magnet in a circle.</p>";
    infoContent += "<p>The revolving magnet's magnetic field influences the fixed magnet and causes it to rotate to align with the field lines of the revolving magnet.</p>";
    infoContent += "<h3>Magnetic Field Lines</h3>";
    infoContent += "<p>Magnetic field lines of force are imaginary lines around a magnetic material. Drawing a tangent at ";
    infoContent += "any point on this line gives us the direction of the force of the magnetic field.</p>";
    infoContent += "<p>Another thing to keep in mind is that these lines of force never intersect.</p>";
    infoContent += "<h3>Two bar magnets</h3>";
    infoContent += "<p>If two bar magnets are placed close to each other both the magnets will feel the influence of each other's magnetic field.</p>";
    infoContent += "<p>If one of the magnets is free to rotate then it will align in the direction parallel to the field lines of the other magnet.</p>";
    infoContent += "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

/**
 * Add the table and both the magnets to the screen. Also initialize the global variables and reset the position of
 * the elements.
 */
function loadExperimentElements()
{
    PIEsetExperimentTitle("6.13.8D Rotating a magnet");
    PIEsetDeveloperName("Sheikh Araf");
    PIEhideControlElement();

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();

    /* initialise Other Variables */
    initialiseOtherVariables();

    /* Add Magnet 1 (revolves/draggable) to the scene */
    myMagnet1 = new THREE.Mesh(new THREE.BoxGeometry(magnetW, magnetH, magnetD),
        new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture('images/mag_v.png') }));
    myMagnet1.position.set(myMagnet1X, myMagnet1Y, myMagnet1Z);
    myMagnet1.receiveShadow = true;
    myMagnet1.castShadow = true;
    PIEaddElement(myMagnet1);
    PIEdragElement(myMagnet1);
    PIEsetDrag(myMagnet1, magnetDragHandler);

    /* Add Magnet 2 (fixed) to the scene */
    myMagnet2 = new THREE.Mesh(new THREE.BoxGeometry(magnetH - 0.2, magnetW, magnetD),
        new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture('images/mag_h.png') }));
    myMagnet2.position.set(myMagnet2X, myMagnet2Y, myMagnet2Z);
    myMagnet2.receiveShadow = true;
    myMagnet2.castShadow = true;
    PIEaddElement(myMagnet2);

    /* Add Table to the scene */
    var loader = new THREE.TextureLoader();
    var texture = loader.load('images/wood.jpg', function () {
        PIErender(); // force re-render as loading the texture may take a while
    } );
    myTable = new THREE.Mesh(new THREE.PlaneBufferGeometry(mySceneW, mySceneH), new THREE.MeshPhongMaterial({map: texture}));
    myTable.position.set(myCenterX, myCenterY, 0);
    myTable.receiveShadow = true;
    myTable.castShadow = true;
    PIEaddElement(myTable);

    /* Instantiate experiment controls */
    initialiseControls();

    /* Reset all positions */
    resetExperiment();

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}

/******************* End of Load Experiment objects code ***********************/

/******************* Reset Experiment code ***********************/

/**
 * Reset all the elements of the experiment to their initial state.
 */
function resetExperiment()
{
    /* initialise Other Variables */
    initialiseOtherVariables();

    /* Initialise Magnet 1 variables */
    myMagnet1X = myCenterX + 1;    /* At t=0, cos(0)=1 for the revolving magnet */
    myMagnet1Y = myCenterY;
    
    /* Initialise Magnet 2 variables */
    myMagnet2X = myCenterX;
    myMagnet2Y = myCenterY;

    /* Reset Magnet 1 position */
    myMagnet1.position.set(myMagnet1X, myMagnet1Y, myMagnet1Z);

    /* Reset Magnet 2 position */
    myMagnet2.position.set(myMagnet2X, myMagnet2Y, myMagnet2Z);
    myMagnet2.rotation.set(0, 0, -Math.PI/2);
}

/******************* End of Reset Experiment code ***********************/

/******************* Update (animation changes) code ***********************/

/**
 * Update each frame of the experiment adhering to the physics of the experiment.
 * @param t     Time elapsed since the beginning of the experiment
 * @param dt    Time elapsed since the last frame was rendered
 */
function updateExperimentElements(t, dt) {
    var distX;                                      /* Relative distance between magnets on X axis */
    var distY;                                      /* Relative distance between magnets on Y axis */
    var y1, y2;                                     /* Two close points to calculate the field */
    var r1, r2;                                     /* Distance between origin and y1, y2 points */
    var cosTheta1, cosTheta2, sinTheta1, sinTheta2; /* Angles from X axis to y1, y2 points */
    var ux1, ux2, uy1, uy2;                         /* X and Y components of the field */
    var phi;                                        /* The angle to which the magnet is to be rotated */

    /* Initialize distances on X axis and Y axis */
    distX = myMagnet1.position.x - myMagnet2.position.x;
    distY = myMagnet2.position.y - myMagnet1.position.y;

    /* Compute the angle to which the magnet should be rotated */
    y1 = distY - 0.01;
    y2 = distY + 0.01;
    r1 = Math.sqrt((distX * distX) + (y1 * y1));
    r2 = Math.sqrt((distX * distX) + (y2 * y2));
    cosTheta1 = distX / r1;
    cosTheta2 = distX / r2;
    sinTheta1 = y1 / r1;
    sinTheta2 = y2 / r2;
    ux1 = cosTheta1 / (r1 * r1);
    ux2 = cosTheta2 / (r2 * r2);
    uy1 = sinTheta1 / (r1 * r1);
    uy2 = sinTheta2 / (r2 * r2);
    phi = -Math.atan((uy2 - uy1) / (ux2 - ux1));
    if ((ux2 - ux1) < 0) {
        phi += Math.PI;
    }

    /* Rotate 90 degrees counter-clockwise if the magnet is oriented horizontally */
    if (PIEgetInputSlider("Flip Magnet")) {
        phi -= Math.PI / 2;
    }

    /* Set the angle of rotation for Magnet 2 */
    myMagnet2.rotation.z = phi;

    /* Move the magnet in a circle (on z axis) if the manual drag control is disabled */
    if (!PIEgetInputSlider("Allow Drag")) {
        myMagnet1.position.x = myCenterX + Math.cos(t / 1000);
        myMagnet1.position.y = myCenterY + Math.sin(t / 1000);
    }

    PIEshowInputPanel();
}

/**************** End of Update (animation changes) code ********************/