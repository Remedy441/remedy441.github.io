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

var myAllZ;
var myAllY;

var con=0;
var conx;
/* Room Variables */

var bottomB=0;
var backB=-4.0;         /* Back Barrier */
var wallThickness;      /* Wall Thickness */

/* Room Objects */

var myBack;             /* Back */

var bLeft;
var bRight;

var ballBLeft;
var ballBRight;

/*Pricipal Axis*/

var myPrincipalAxis;
var myPrincipalAxisXStart;
var myPrincipalAxisXEnd;
var myPrincipalAxisYStart;
var myPrincipalAxisYEnd;
var myPrincipalAxisZStart;
var myPrincipalAxisZEnd;

/*Focal Balls*/

var myBallF;
var myBallFRadius;
var myBallFX;
var myBallFY;
var myBallFZ;

var myBall2F;
var myBall2FRadius;
var myBall2FX;
var myBall2FY;
var myBall2FZ;

/*Concave Mirror*/
var myConcaveMirror;
var myConcaveMirrorRadius;
var myConcaveMirrorX;
var myConcaveMirrorY;
var myConcaveMirrorZ;
var segmentWidth,segmentHeight,phiStart, phiLength, thetaStart, thetaLength;


/*Object*/
var myObject;
var myObjectXStart;
var myObjectXEnd;
var myObjectYStart;
var myObjectYEnd;
var myObjectZStart;
var myObjectZEnd;

var myObjectLen;

/*Object Arrow*/
var myObjectArrowLen;

var myObjectArrowL1;
var myObjectArrowL1XStart;
var myObjectArrowL1XEnd;
var myObjectArrowL1YStart;
var myObjectArrowL1YEnd;
var myObjectArrowL1ZStart;
var myObjectArrowL1ZEnd;

var myObjectArrowL2;
var myObjectArrowL2XStart;
var myObjectArrowL2XEnd;
var myObjectArrowL2YStart;
var myObjectArrowL2YEnd;
var myObjectArrowL2ZStart;
var myObjectArrowL2ZEnd;


/*Object DragBall*/
var myObjectDragBall;
var myObjectDragBallRadius;
var myObjectDragBallX;
var myObjectDragBallY;
var myObjectDragBallZ;

var myObjectDragBallDist;



/*Incident Rays*/

var myIncidentRay1;
var myIncidentRay1XStart;
var myIncidentRay1XEnd;
var myIncidentRay1YStart;
var myIncidentRay1YEnd;
var myIncidentRay1ZStart;
var myIncidentRay1ZEnd;

var myIncidentRay1XDiff;
var myIncidentRay1Slope;

var myIncidentRay2;
var myIncidentRay2XStart;
var myIncidentRay2XEnd;
var myIncidentRay2YStart;
var myIncidentRay2YEnd;
var myIncidentRay2ZStart;
var myIncidentRay2ZEnd;

var myIncidentRay2XDiff;
var myIncidentRay2YDiff;
var myIncidentRay2Slope;

var myIncidentRay3;
var myIncidentRay3XStart;
var myIncidentRay3XEnd;
var myIncidentRay3YStart;
var myIncidentRay3YEnd;
var myIncidentRay3ZStart;
var myIncidentRay3ZEnd;

var myIncidentRay3XDiff;
var myIncidentRay3YDiff;
var myIncidentRay3Slope;



/*Incident Arrows*/

var myIncidentRay1MidpointX;
var myIncidentRay1MidpointY;

var myIncidentRay1Arrow11;
var myIncidentRay1Arrow11XStart;
var myIncidentRay1Arrow11XEnd;
var myIncidentRay1Arrow11YStart;
var myIncidentRay1Arrow11YEnd;
var myIncidentRay1Arrow11ZStart;
var myIncidentRay1Arrow11ZEnd;
var myIncidentRay1Arrow11Slope;

var myIncidentRay1Arrow12;
var myIncidentRay1Arrow12XStart;
var myIncidentRay1Arrow12XEnd;
var myIncidentRay1Arrow12YStart;
var myIncidentRay1Arrow12YEnd;
var myIncidentRay1Arrow12ZStart;
var myIncidentRay1Arrow12ZEnd;
var myIncidentRay1Arrow12Slope;

var myIncidentRay2MidpointX;
var myIncidentRay2MidpointY;

var myIncidentRay2Arrow11;
var myIncidentRay2Arrow11XStart;
var myIncidentRay2Arrow11XEnd;
var myIncidentRay2Arrow11YStart;
var myIncidentRay2Arrow11YEnd;
var myIncidentRay2Arrow11ZStart;
var myIncidentRay2Arrow11ZEnd;
var myIncidentRay2Arrow11Slope;

var myIncidentRay2Arrow12;
var myIncidentRay2Arrow12XStart;
var myIncidentRay2Arrow12XEnd;
var myIncidentRay2Arrow12YStart;
var myIncidentRay2Arrow12YEnd;
var myIncidentRay2Arrow12ZStart;
var myIncidentRay2Arrow12ZEnd;
var myIncidentRay2Arrow12Slope;

var myIncidentRay3MidpointX;
var myIncidentRay3MidpointY;

var myIncidentRay3Arrow11;
var myIncidentRay3Arrow11XStart;
var myIncidentRay3Arrow11XEnd;
var myIncidentRay3Arrow11YStart;
var myIncidentRay3Arrow11YEnd;
var myIncidentRay3Arrow11ZStart;
var myIncidentRay3Arrow11ZEnd;
var myIncidentRay3Arrow11Slope;

var myIncidentRay3Arrow12;
var myIncidentRay3Arrow12XStart;
var myIncidentRay3Arrow12XEnd;
var myIncidentRay3Arrow12YStart;
var myIncidentRay3Arrow12YEnd;
var myIncidentRay3Arrow12ZStart;
var myIncidentRay3Arrow12ZEnd;
var myIncidentRay3Arrow12Slope




/*Reflected Rays*/

var myReflectedRay1;
var myReflectedRay1XStart;
var myReflectedRay1XEnd;
var myReflectedRay1YStart;
var myReflectedRay1YEnd;
var myReflectedRay1ZStart;
var myReflectedRay1ZEnd;

var myReflectedRay1Slope;

var myReflectedRay2;
var myReflectedRay2XStart;
var myReflectedRay2XEnd;
var myReflectedRay2YStart;
var myReflectedRay2YEnd;
var myReflectedRay2ZStart;
var myReflectedRay2ZEnd;

var myReflectedRay2Slope;


var myReflectedRay3;
var myReflectedRay3XStart;
var myReflectedRay3XEnd;
var myReflectedRay3YStart;
var myReflectedRay3YEnd;
var myReflectedRay3ZStart;
var myReflectedRay3ZEnd;

var myReflectedRay3XDiff;
var myReflectedRay3YDiff;
var myReflectedRay3Slope;



/*Reflected Ray Arrows*/
var myReflectedRay1MidpointX;
var myReflectedRay1MidpointY;


var myReflectedRay1Arrow11;
var myReflectedRay1Arrow11XStart;
var myReflectedRay1Arrow11XEnd;
var myReflectedRay1Arrow11YStart;
var myReflectedRay1Arrow11YEnd;
var myReflectedRay1Arrow11ZStart;
var myReflectedRay1Arrow11ZEnd;
var myReflectedRay1Arrow11Slope;

var myReflectedRay1Arrow12;
var myReflectedRay1Arrow12XStart;
var myReflectedRay1Arrow12XEnd;
var myReflectedRay1Arrow12YStart;
var myReflectedRay1Arrow12YEnd;
var myReflectedRay1Arrow12ZStart;
var myReflectedRay1Arrow12ZEnd;
var myReflectedRay1Arrow12Slope

var myReflectedRay2MidpointX;
var myReflectedRay2MidpointY;

var myReflectedRay2Arrow11;
var myReflectedRay2Arrow11XStart;
var myReflectedRay2Arrow11XEnd;
var myReflectedRay2Arrow11YStart;
var myReflectedRay2Arrow11YEnd;
var myReflectedRay2Arrow11ZStart;
var myReflectedRay2Arrow11ZEnd;
var myReflectedRay2Arrow11Slope;

var myReflectedRay2Arrow12;
var myReflectedRay2Arrow12XStart;
var myReflectedRay2Arrow12XEnd;
var myReflectedRay2Arrow12YStart;
var myReflectedRay2Arrow12YEnd;
var myReflectedRay2Arrow12ZStart;
var myReflectedRay2Arrow12ZEnd;
var myReflectedRay2Arrow12Slope;

var myReflectedRay3MidpointX;
var myReflectedRay3MidpointY;

var myReflectedRay3Arrow11;
var myReflectedRay3Arrow11XStart;
var myReflectedRay3Arrow11XEnd;
var myReflectedRay3Arrow11YStart;
var myReflectedRay3Arrow11YEnd;
var myReflectedRay3Arrow11ZStart;
var myReflectedRay3Arrow11ZEnd;
var myReflectedRay3Arrow11Slope;

var myReflectedRay3Arrow12;
var myReflectedRay3Arrow12XStart;
var myReflectedRay3Arrow12XEnd;
var myReflectedRay3Arrow12YStart;
var myReflectedRay3Arrow12YEnd;
var myReflectedRay3Arrow12ZStart;
var myReflectedRay3Arrow12ZEnd;

var mirrorRad;
var objDist;


/******************* Interaction functions ***********************/

/**
 * This function implements custom dragging of the ball.
 * <p>
 * It ensures that the ball is not dragged beyond the permissible boundaries.
 * In other applications you can move more than one element as well.
 * <p>
 * @param element    Pointer to ball object
 * @param newpos     New 3D position (THREE.Vector3)
 */

function myObjectDragBallDrag(element,newpos)
{
    myObjectDragBallX=newpos.x;
    if (newpos.x < (ballBLeft + myObjectDragBallRadius)) { myObjectDragBallX = (ballBLeft + myObjectDragBallRadius) }
    else if (newpos.x > (ballBRight )) { myObjectDragBallX = (ballBRight ) }




    updateDynamicVariables();
    updateRayVariables();
    updateIncidentArrows();
    updateReflectedArrows();

    updateControlVariables();
    hideEle();
}


/******************* End of Interaction functions ***********************/

/******************* GUI control objects code ***********************/


function handleRad(newValue) {

    myConcaveMirrorRadius = newValue;

    myConcaveMirror.geometry = new THREE.SphereGeometry(myConcaveMirrorRadius, segmentWidth, segmentHeight, phiStart + 0.4, phiLength, thetaStart, thetaLength);

    myConcaveMirror.geometry.verticesNeedUpdate = true;



    initalizeDynamicVariables();
    updateDynamicVariables();
    updateRayVariables();
    updateIncidentArrows();
    updateReflectedArrows();

    myBallF.position.set(myBallFX,myBallFY,myBallFZ);
    updateControlVariables();

    hideEle();
    PIErender();
}
function initialiseControlVariables()
{

    mirrorRad="Mirror-Radius";
    objDist="Object-Distance";
    Radmax=2.5;
    Radmin=1;

    defaultRad=myConcaveMirrorRadius;

    RADstep=0.01;

    

}
function updateControlVariables() {
    PIEchangeInputText(objDist,myObjectDragBallDist);
}


function initialiseControls()
{
    initialiseControlVariables();

    PIEaddInputText(objDist,myObjectDragBallDist);

    PIEaddInputSlider(mirrorRad, defaultRad, handleRad, Radmin, Radmax, RADstep);
}



/******************* End of GUI control objects code ***********************/

/******************* Load Experiment1 objects code ***********************/



function initialiseScene()
{
    /* Initialise Scene Variables */
    mySceneTLX      = 0.0;
    mySceneTLY      = 7.0;
    mySceneBRX      = 20.0;
    mySceneBRY      = 0.0;

    wallThickness   = 0.20;

    mySceneW        = (mySceneBRX - mySceneTLX);
    mySceneH        = (mySceneTLY - mySceneBRY);
    myCenterX       = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY       = (mySceneTLY + mySceneBRY) / 2.0;
    myAllZ          = -3.0;
    myAllY          = myCenterY;

    bLeft           = mySceneTLX+1.5;
    bRight          = mySceneBRX-1.5;


}
function initializeStaticVariables()
{


    myPrincipalAxisXStart   =   bLeft;
    myPrincipalAxisXEnd     =   bRight;
    myPrincipalAxisYStart   =   myAllY;
    myPrincipalAxisYEnd     =   myAllY;
    myPrincipalAxisZStart   =   myAllZ;
    myPrincipalAxisZEnd     =   myAllZ;


    /* Initialise Concave Mirror variables */

    segmentHeight   =   32;
    segmentWidth    =   32;
    phiStart        =   2;
    phiLength       =   0.5;
    thetaStart      =   0;
    thetaLength     =   3.14;
    myConcaveMirrorRadius = mySceneW/15;

    myConcaveMirrorX        = 1.4*myCenterX;
    myConcaveMirrorY        = myAllY;
    myConcaveMirrorZ        = myAllZ;


    /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
}

function initalizeDynamicVariables()
{
    /*Initialize Drag Ball Variables*/
    myObjectDragBallRadius  =   mySceneW/100;
    myObjectDragBallX       =   myCenterX;
    myObjectDragBallY       =   myAllY;
    myObjectDragBallZ       =   myAllZ;

    myObjectDragBallDist    =   myConcaveMirrorX-myObjectDragBallX+myConcaveMirrorRadius;

    myObjectLen             =   0.65;

    myObjectArrowLen        =   0.1;

    /*Object*/
    myObjectXStart          =   myObjectDragBallX;
    myObjectXEnd            =   myObjectDragBallX;
    myObjectYStart          =   myObjectDragBallY;
    myObjectYEnd            =   myObjectDragBallY+myObjectLen;
    myObjectZStart          =   myObjectDragBallZ;
    myObjectZEnd            =   myObjectDragBallZ;

    /*Object Arrow*/

    myObjectArrowL1XStart   =   myObjectDragBallX-myObjectArrowLen;
    myObjectArrowL1XEnd     =   myObjectXEnd;
    myObjectArrowL1YStart   =   myObjectYEnd-myObjectArrowLen;
    myObjectArrowL1YEnd     =   myObjectYEnd;
    myObjectArrowL1ZStart   =   myObjectDragBallZ;
    myObjectArrowL1ZEnd     =   myObjectDragBallZ;

    myObjectArrowL2XStart   =   myObjectDragBallX+myObjectArrowLen;
    myObjectArrowL2XEnd     =   myObjectXEnd;
    myObjectArrowL2YStart   =   myObjectYEnd-myObjectArrowLen;
    myObjectArrowL2YEnd     =   myObjectYEnd;
    myObjectArrowL2ZStart   =   myObjectDragBallZ;
    myObjectArrowL2ZEnd     =   myObjectDragBallZ;

    ballBLeft       =bLeft;
    ballBRight      =myConcaveMirrorX+myConcaveMirrorRadius/2-myBallFRadius;

    /*Focal Points Initialize*/

    myBallFRadius   =   mySceneW/250;
    myBallFX        =   myConcaveMirrorX+myConcaveMirrorRadius/2;
    myBallFY        =   myAllY;
    myBallFZ        =   myAllZ;

    myBall2FRadius  =   mySceneW/250;
    myBall2FX       =   myConcaveMirrorX;
    myBall2FY       =   myAllY;
    myBall2FZ       =   myAllZ;


}

function updateDynamicVariables() {

    myObjectDragBallDist    =   myConcaveMirrorX-myObjectDragBallX+myConcaveMirrorRadius;

    myObjectDragBall.position.set(myObjectDragBallX,myObjectDragBallY,myObjectDragBallZ);

    /*Object*/
    myObjectXStart          =   myObjectDragBallX;
    myObjectXEnd            =   myObjectDragBallX;
    myObjectYStart          =   myObjectDragBallY;
    myObjectYEnd            =   myObjectDragBallY+myObjectLen;
    myObjectZStart          =   myObjectDragBallZ;
    myObjectZEnd            =   myObjectDragBallZ;

    /*Object Arrow*/

    myObjectArrowL1XStart   =   myObjectDragBallX-myObjectArrowLen;
    myObjectArrowL1XEnd     =   myObjectXEnd;
    myObjectArrowL1YStart   =   myObjectYEnd-myObjectArrowLen;
    myObjectArrowL1YEnd     =   myObjectYEnd;
    myObjectArrowL1ZStart   =   myObjectDragBallZ;
    myObjectArrowL1ZEnd     =   myObjectDragBallZ;

    myObjectArrowL2XStart   =   myObjectDragBallX+myObjectArrowLen;
    myObjectArrowL2XEnd     =   myObjectXEnd;
    myObjectArrowL2YStart   =   myObjectYEnd-myObjectArrowLen;
    myObjectArrowL2YEnd     =   myObjectYEnd;
    myObjectArrowL2ZStart   =   myObjectDragBallZ;
    myObjectArrowL2ZEnd     =   myObjectDragBallZ;


    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myObjectXStart, myObjectYStart, myObjectZStart), new THREE.Vector3(myObjectXEnd, myObjectYEnd, myObjectZEnd) );
    lineGeometry.computeLineDistances();
    myObject.geometry=lineGeometry;
    myObject.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myObjectArrowL1XStart, myObjectArrowL1YStart, myObjectArrowL1ZStart), new THREE.Vector3(myObjectArrowL1XEnd, myObjectArrowL1YEnd, myObjectArrowL1ZEnd) );
    lineGeometry.computeLineDistances();
    myObjectArrowL1.geometry=lineGeometry;
    myObjectArrowL1.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myObjectArrowL2XStart, myObjectArrowL2YStart, myObjectArrowL2ZStart), new THREE.Vector3(myObjectArrowL2XEnd, myObjectArrowL2YEnd, myObjectArrowL2ZEnd) );
    lineGeometry.computeLineDistances();
    myObjectArrowL2.geometry=lineGeometry;
    myObjectArrowL2.verticesNeedUpdate=true;
}

function initializeRayVariables()
{

    myIncidentRay1XDiff     = myConcaveMirrorRadius-Math.sqrt(myConcaveMirrorRadius*myConcaveMirrorRadius-myObjectLen*myObjectLen);

    myIncidentRay1XStart    = myObjectXEnd;
    myIncidentRay1XEnd      = myConcaveMirrorX+myConcaveMirrorRadius-myIncidentRay1XDiff;
    myIncidentRay1YStart    = myObjectYEnd;
    myIncidentRay1YEnd      = myObjectYEnd;
    myIncidentRay1ZStart    = myObjectZEnd;
    myIncidentRay1ZEnd      = myObjectZEnd;


    myIncidentRay2Slope     = (myBallFY-myObjectYEnd)/(myBallFX-myObjectXEnd);
    myIncidentRay2XDiff     = myConcaveMirrorRadius*((Math.sqrt(3*myIncidentRay2Slope*myIncidentRay2Slope+4)-1)/(2*(1+myIncidentRay2Slope*myIncidentRay2Slope)));
    myIncidentRay2YDiff     = myIncidentRay2Slope*myIncidentRay2XDiff ;

    myIncidentRay2XStart    = myObjectXEnd;
    myIncidentRay2XEnd      = myBallFX+myIncidentRay2XDiff;
    myIncidentRay2YStart    = myObjectYEnd;
    myIncidentRay2YEnd      = myBallFY+myIncidentRay2YDiff;
    myIncidentRay2ZStart    = myObjectZEnd;
    myIncidentRay2ZEnd      = myObjectZEnd;


    myIncidentRay3XStart    = myObjectXEnd;
    myIncidentRay3XEnd      = myConcaveMirrorX+myConcaveMirrorRadius;
    myIncidentRay3YStart    = myObjectYEnd;
    myIncidentRay3YEnd      = myConcaveMirrorY;
    myIncidentRay3ZStart    = myObjectZEnd;
    myIncidentRay3ZEnd      = myObjectZEnd;


    myReflectedRay1Slope    =(myIncidentRay1YEnd-myBallFY)/(myIncidentRay1XEnd-myBallFX);

    myReflectedRay1XStart   = myIncidentRay1XEnd;
    myReflectedRay1XEnd     = ballBLeft;
    myReflectedRay1YStart   = myIncidentRay1YEnd;
    myReflectedRay1YEnd     = myReflectedRay1Slope*(myReflectedRay1XEnd-myBallFX)+myBallFY;
    myReflectedRay1ZStart   = myIncidentRay1ZEnd;
    myReflectedRay1ZEnd     = myIncidentRay1ZEnd;

    myReflectedRay2XStart   = myIncidentRay2XEnd;
    myReflectedRay2XEnd     = ballBLeft;
    myReflectedRay2YStart   = myIncidentRay2YEnd;
    myReflectedRay2YEnd     = myIncidentRay2YEnd;
    myReflectedRay2ZStart   = myIncidentRay2ZEnd;
    myReflectedRay2ZEnd     = myIncidentRay2ZEnd;



    myReflectedRay3XStart   = myIncidentRay3XEnd;
    myReflectedRay3XEnd     = myObjectXStart;
    myReflectedRay3YStart   = myIncidentRay3YEnd;
    myReflectedRay3YEnd     = myObjectYStart-myObjectLen;
    myReflectedRay3ZStart   = myIncidentRay2ZEnd;
    myReflectedRay3ZEnd     = myIncidentRay2ZEnd;

    myReflectedRay3Slope    =(myReflectedRay3YStart-myReflectedRay3YEnd)/(myReflectedRay3XStart-myReflectedRay3XEnd);
    myReflectedRay3XEnd     = ballBLeft;
    myReflectedRay3YEnd     = myReflectedRay3Slope*(myReflectedRay3XEnd-myReflectedRay3XStart)+myReflectedRay3YStart;


}
function updateRayVariables()
{
    initializeRayVariables();


    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay1XStart, myIncidentRay1YStart, myIncidentRay1ZStart), new THREE.Vector3(myIncidentRay1XEnd, myIncidentRay1YEnd, myIncidentRay1ZEnd) );
    lineGeometry.computeLineDistances();
    myIncidentRay1.geometry=lineGeometry;

    myIncidentRay1.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay2XStart, myIncidentRay2YStart, myIncidentRay2ZStart), new THREE.Vector3(myIncidentRay2XEnd, myIncidentRay2YEnd, myIncidentRay2ZEnd) );
    lineGeometry.computeLineDistances();
    myIncidentRay2.geometry=lineGeometry;

    myIncidentRay2.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay3XStart, myIncidentRay3YStart, myIncidentRay3ZStart), new THREE.Vector3(myIncidentRay3XEnd, myIncidentRay3YEnd, myIncidentRay3ZEnd) );
    lineGeometry.computeLineDistances();
    myIncidentRay3.geometry=lineGeometry;

    myIncidentRay3.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay1XStart, myReflectedRay1YStart, myReflectedRay1ZStart), new THREE.Vector3(myReflectedRay1XEnd, myReflectedRay1YEnd, myReflectedRay1ZEnd) );
    lineGeometry.computeLineDistances();
    myReflectedRay1.geometry=lineGeometry;

    myReflectedRay1.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay2XStart, myReflectedRay2YStart, myReflectedRay2ZStart), new THREE.Vector3(myReflectedRay2XEnd, myReflectedRay2YEnd, myReflectedRay2ZEnd) );
    lineGeometry.computeLineDistances();
    myReflectedRay2.geometry=lineGeometry;

    myReflectedRay2.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay3XStart, myReflectedRay3YStart, myReflectedRay3ZStart), new THREE.Vector3(myReflectedRay3XEnd, myReflectedRay3YEnd, myReflectedRay3ZEnd) );
    lineGeometry.computeLineDistances();
    myReflectedRay3.geometry=lineGeometry;

    myReflectedRay3.verticesNeedUpdate=true;

}
function initializeIncidentArrows()
{
    var arrowLen=0.2;

    myIncidentRay1MidpointX     =   (myIncidentRay1XEnd+myIncidentRay1XStart)/2;
    myIncidentRay1MidpointY     =   (myIncidentRay1YEnd+myIncidentRay1YStart)/2;

    myIncidentRay1Slope=(myIncidentRay1YEnd-myIncidentRay1YStart)/(myIncidentRay1XEnd-myIncidentRay1XStart);

    myIncidentRay1Arrow11Slope=(myIncidentRay1Slope-1)/(1+myIncidentRay1Slope);

    myIncidentRay1Arrow12Slope=(myIncidentRay1Slope+1)/(1-myIncidentRay1Slope);

    multi2=1;
    if(myIncidentRay1Slope>=1)
        multi2=-1;
    multi1=1;
    if(myIncidentRay1Slope<=-1)
        multi1=-1;
    myIncidentRay1Arrow11XStart =   myIncidentRay1MidpointX-(multi1)*arrowLen*(1/Math.sqrt((myIncidentRay1Arrow11Slope*myIncidentRay1Arrow11Slope)+1));
    myIncidentRay1Arrow11XEnd   =   myIncidentRay1MidpointX;
    myIncidentRay1Arrow11YStart =   myIncidentRay1MidpointY-(multi1)*myIncidentRay1Arrow11Slope*(arrowLen*(1/Math.sqrt((myIncidentRay1Arrow11Slope*myIncidentRay1Arrow11Slope)+1)));
    myIncidentRay1Arrow11YEnd   =   myIncidentRay1MidpointY;
    myIncidentRay1Arrow11ZStart =   myIncidentRay1ZStart;
    myIncidentRay1Arrow11ZEnd   =   myIncidentRay1ZEnd;


    myIncidentRay1Arrow12XStart =   myIncidentRay1MidpointX-(multi2)*arrowLen*(1/Math.sqrt((myIncidentRay1Arrow12Slope*myIncidentRay1Arrow12Slope)+1));
    myIncidentRay1Arrow12XEnd   =   myIncidentRay1MidpointX;
    myIncidentRay1Arrow12YStart =   myIncidentRay1MidpointY-(multi2)*myIncidentRay1Arrow12Slope*(arrowLen*(1/Math.sqrt((myIncidentRay1Arrow12Slope*myIncidentRay1Arrow12Slope)+1)));
    myIncidentRay1Arrow12YEnd   =   myIncidentRay1MidpointY;
    myIncidentRay1Arrow12ZStart =   myIncidentRay1ZStart;
    myIncidentRay1Arrow12ZEnd   =   myIncidentRay1ZEnd;

    myIncidentRay2MidpointX     =   (myIncidentRay2XEnd+myIncidentRay2XStart)/2;
    myIncidentRay2MidpointY     =   (myIncidentRay2YEnd+myIncidentRay2YStart)/2;

    myIncidentRay2Slope=(myIncidentRay2YEnd-myIncidentRay2YStart)/(myIncidentRay2XEnd-myIncidentRay2XStart);

    myIncidentRay2Arrow11Slope=(myIncidentRay2Slope-1)/(1+myIncidentRay2Slope);

    myIncidentRay2Arrow12Slope=(myIncidentRay2Slope+1)/(1-myIncidentRay2Slope);

    multi2=1;
    if(myIncidentRay2Slope>=1)
        multi2=-1;
    multi1=1;
    if(myIncidentRay2Slope<=-1)
        multi1=-1;

    myIncidentRay2Arrow11XStart =   myIncidentRay2MidpointX-(multi1)*arrowLen*(1/Math.sqrt((myIncidentRay2Arrow11Slope*myIncidentRay2Arrow11Slope)+1));
    myIncidentRay2Arrow11XEnd   =   myIncidentRay2MidpointX;
    myIncidentRay2Arrow11YStart =   myIncidentRay2MidpointY-(multi1)*myIncidentRay2Arrow11Slope*(arrowLen*(1/Math.sqrt((myIncidentRay2Arrow11Slope*myIncidentRay2Arrow11Slope)+1)));
    myIncidentRay2Arrow11YEnd   =   myIncidentRay2MidpointY;
    myIncidentRay2Arrow11ZStart =   myIncidentRay2ZStart;
    myIncidentRay2Arrow11ZEnd   =   myIncidentRay2ZEnd;

    myIncidentRay2Arrow12XStart =   myIncidentRay2MidpointX-(multi2)*arrowLen*(1/Math.sqrt((myIncidentRay2Arrow12Slope*myIncidentRay2Arrow12Slope)+1));
    myIncidentRay2Arrow12XEnd   =   myIncidentRay2MidpointX;
    myIncidentRay2Arrow12YStart =   myIncidentRay2MidpointY-(multi2)*myIncidentRay2Arrow12Slope*(arrowLen*(1/Math.sqrt((myIncidentRay2Arrow12Slope*myIncidentRay2Arrow12Slope)+1)));
    myIncidentRay2Arrow12YEnd   =   myIncidentRay2MidpointY;
    myIncidentRay2Arrow12ZStart =   myIncidentRay2ZStart;
    myIncidentRay2Arrow12ZEnd   =   myIncidentRay2ZEnd;

    myIncidentRay3MidpointX     =   (myIncidentRay3XEnd+myIncidentRay3XStart)/2;
    myIncidentRay3MidpointY     =   (myIncidentRay3YEnd+myIncidentRay3YStart)/2;

    myIncidentRay3Slope=(myIncidentRay3YEnd-myIncidentRay3YStart)/(myIncidentRay3XEnd-myIncidentRay3XStart);

    myIncidentRay3Arrow11Slope=(myIncidentRay3Slope-1)/(1+myIncidentRay3Slope);

    myIncidentRay3Arrow12Slope=(myIncidentRay3Slope+1)/(1-myIncidentRay3Slope);

    multi2=1;
    if(myIncidentRay3Slope>=1)
        multi2=-1;
    multi1=1;
    if(myIncidentRay3Slope<=-1)
        multi1=-1;

    myIncidentRay3Arrow11XStart =   myIncidentRay3MidpointX-(multi1)*arrowLen*(1/Math.sqrt((myIncidentRay3Arrow11Slope*myIncidentRay3Arrow11Slope)+1));
    myIncidentRay3Arrow11XEnd   =   myIncidentRay3MidpointX;
    myIncidentRay3Arrow11YStart =   myIncidentRay3MidpointY-(multi1)*myIncidentRay3Arrow11Slope*(arrowLen*(1/Math.sqrt((myIncidentRay3Arrow11Slope*myIncidentRay3Arrow11Slope)+1)));
    myIncidentRay3Arrow11YEnd   =   myIncidentRay3MidpointY;
    myIncidentRay3Arrow11ZStart =   myIncidentRay3ZStart;
    myIncidentRay3Arrow11ZEnd   =   myIncidentRay3ZEnd;

    myIncidentRay3Arrow12XStart =   myIncidentRay3MidpointX-(multi2)*arrowLen*(1/Math.sqrt((myIncidentRay3Arrow12Slope*myIncidentRay3Arrow12Slope)+1));
    myIncidentRay3Arrow12XEnd   =   myIncidentRay3MidpointX;
    myIncidentRay3Arrow12YStart =   myIncidentRay3MidpointY-(multi2)*myIncidentRay3Arrow12Slope*(arrowLen*(1/Math.sqrt((myIncidentRay3Arrow12Slope*myIncidentRay3Arrow12Slope)+1)));
    myIncidentRay3Arrow12YEnd   =   myIncidentRay3MidpointY;
    myIncidentRay3Arrow12ZStart =   myIncidentRay3ZStart;
    myIncidentRay3Arrow12ZEnd   =   myIncidentRay3ZEnd;

}

function updateIncidentArrows()
{

    initializeIncidentArrows();

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay1Arrow11XStart, myIncidentRay1Arrow11YStart, myIncidentRay1Arrow11ZStart), new THREE.Vector3(myIncidentRay1Arrow11XEnd, myIncidentRay1Arrow11YEnd, myIncidentRay1Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    myIncidentRay1Arrow11.geometry=lineGeometry;
    myIncidentRay1Arrow11.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay1Arrow12XStart, myIncidentRay1Arrow12YStart, myIncidentRay1Arrow12ZStart), new THREE.Vector3(myIncidentRay1Arrow12XEnd, myIncidentRay1Arrow12YEnd, myIncidentRay1Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    myIncidentRay1Arrow12.geometry=lineGeometry;
    myIncidentRay1Arrow12.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay2Arrow11XStart, myIncidentRay2Arrow11YStart, myIncidentRay2Arrow11ZStart), new THREE.Vector3(myIncidentRay2Arrow11XEnd, myIncidentRay2Arrow11YEnd, myIncidentRay2Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    myIncidentRay2Arrow11.geometry=lineGeometry;
    myIncidentRay2Arrow11.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay2Arrow12XStart, myIncidentRay2Arrow12YStart, myIncidentRay2Arrow12ZStart), new THREE.Vector3(myIncidentRay2Arrow12XEnd, myIncidentRay2Arrow12YEnd, myIncidentRay2Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    myIncidentRay2Arrow12.geometry=lineGeometry;
    myIncidentRay2Arrow12.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay3Arrow11XStart, myIncidentRay3Arrow11YStart, myIncidentRay3Arrow11ZStart), new THREE.Vector3(myIncidentRay3Arrow11XEnd, myIncidentRay3Arrow11YEnd, myIncidentRay3Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    myIncidentRay3Arrow11.geometry=lineGeometry;
    myIncidentRay3Arrow11.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay3Arrow12XStart, myIncidentRay3Arrow12YStart, myIncidentRay3Arrow12ZStart), new THREE.Vector3(myIncidentRay3Arrow12XEnd, myIncidentRay3Arrow12YEnd, myIncidentRay3Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    myIncidentRay3Arrow12.geometry=lineGeometry;
    myIncidentRay3Arrow12.verticesNeedUpdate=true;

}

function initialiseReflectedArrow() {
    var arrowLen=-0.2;

    myReflectedRay1MidpointX     =   (myBallFX+myReflectedRay1XStart)/2;
    myReflectedRay1MidpointY     =   (myBallFY+myReflectedRay1YStart)/2;

    myReflectedRay1Slope=(myReflectedRay1YEnd-myReflectedRay1YStart)/(myReflectedRay1XEnd-myReflectedRay1XStart);

    myReflectedRay1Arrow11Slope=(myReflectedRay1Slope-1)/(1+myReflectedRay1Slope);

    myReflectedRay1Arrow12Slope=(myReflectedRay1Slope+1)/(1-myReflectedRay1Slope);

    multi2=1;
    if(myReflectedRay1Slope>=1)
        multi2=-1;
    multi1=1;
    if(myReflectedRay1Slope<=-1)
        multi1=-1;
    myReflectedRay1Arrow11XStart =   myReflectedRay1MidpointX-(multi1)*arrowLen*(1/Math.sqrt((myReflectedRay1Arrow11Slope*myReflectedRay1Arrow11Slope)+1));
    myReflectedRay1Arrow11XEnd   =   myReflectedRay1MidpointX;
    myReflectedRay1Arrow11YStart =   myReflectedRay1MidpointY-(multi1)*myReflectedRay1Arrow11Slope*(arrowLen*(1/Math.sqrt((myReflectedRay1Arrow11Slope*myReflectedRay1Arrow11Slope)+1)));
    myReflectedRay1Arrow11YEnd   =   myReflectedRay1MidpointY;
    myReflectedRay1Arrow11ZStart =   myReflectedRay1ZStart;
    myReflectedRay1Arrow11ZEnd   =   myReflectedRay1ZEnd;


    myReflectedRay1Arrow12XStart =   myReflectedRay1MidpointX-(multi2)*arrowLen*(1/Math.sqrt((myReflectedRay1Arrow12Slope*myReflectedRay1Arrow12Slope)+1));
    myReflectedRay1Arrow12XEnd   =   myReflectedRay1MidpointX;
    myReflectedRay1Arrow12YStart =   myReflectedRay1MidpointY-(multi2)*myReflectedRay1Arrow12Slope*(arrowLen*(1/Math.sqrt((myReflectedRay1Arrow12Slope*myReflectedRay1Arrow12Slope)+1)));
    myReflectedRay1Arrow12YEnd   =   myReflectedRay1MidpointY;
    myReflectedRay1Arrow12ZStart =   myReflectedRay1ZStart;
    myReflectedRay1Arrow12ZEnd   =   myReflectedRay1ZEnd;

    myReflectedRay2MidpointX     =   (myReflectedRay2XEnd+myReflectedRay2XStart)/2;
    myReflectedRay2MidpointY     =   (myReflectedRay2YEnd+myReflectedRay2YStart)/2;

    myReflectedRay2Slope=(myReflectedRay2YEnd-myReflectedRay2YStart)/(myReflectedRay2XEnd-myReflectedRay2XStart);

    myReflectedRay2Arrow11Slope=(myReflectedRay2Slope-1)/(1+myReflectedRay2Slope);

    myReflectedRay2Arrow12Slope=(myReflectedRay2Slope+1)/(1-myReflectedRay2Slope);

    multi2=1;
    if(myReflectedRay2Slope>=1)
        multi2=-1;
    multi1=1;
    if(myReflectedRay2Slope<=-1)
        multi1=-1;

    myReflectedRay2Arrow11XStart =   myReflectedRay2MidpointX-(multi1)*arrowLen*(1/Math.sqrt((myReflectedRay2Arrow11Slope*myReflectedRay2Arrow11Slope)+1));
    myReflectedRay2Arrow11XEnd   =   myReflectedRay2MidpointX;
    myReflectedRay2Arrow11YStart =   myReflectedRay2MidpointY-(multi1)*myReflectedRay2Arrow11Slope*(arrowLen*(1/Math.sqrt((myReflectedRay2Arrow11Slope*myReflectedRay2Arrow11Slope)+1)));
    myReflectedRay2Arrow11YEnd   =   myReflectedRay2MidpointY;
    myReflectedRay2Arrow11ZStart =   myReflectedRay2ZStart;
    myReflectedRay2Arrow11ZEnd   =   myReflectedRay2ZEnd;

    myReflectedRay2Arrow12XStart =   myReflectedRay2MidpointX-(multi2)*arrowLen*(1/Math.sqrt((myReflectedRay2Arrow12Slope*myReflectedRay2Arrow12Slope)+1));
    myReflectedRay2Arrow12XEnd   =   myReflectedRay2MidpointX;
    myReflectedRay2Arrow12YStart =   myReflectedRay2MidpointY-(multi2)*myReflectedRay2Arrow12Slope*(arrowLen*(1/Math.sqrt((myReflectedRay2Arrow12Slope*myReflectedRay2Arrow12Slope)+1)));
    myReflectedRay2Arrow12YEnd   =   myReflectedRay2MidpointY;
    myReflectedRay2Arrow12ZStart =   myReflectedRay2ZStart;
    myReflectedRay2Arrow12ZEnd   =   myReflectedRay2ZEnd;

    /*Special Start*/
    myReflectedRay3XEnd     = myObjectXStart;
    myReflectedRay3YEnd     = myObjectYStart-myObjectLen;
    /*Special End*/

    myReflectedRay3MidpointX     =   (myReflectedRay3XEnd+myReflectedRay3XStart)/2;
    myReflectedRay3MidpointY     =   (myReflectedRay3YEnd+myReflectedRay3YStart)/2;

    myReflectedRay3Slope=(myReflectedRay3YEnd-myReflectedRay3YStart)/(myReflectedRay3XEnd-myReflectedRay3XStart);

    myReflectedRay3Arrow11Slope=(myReflectedRay3Slope-1)/(1+myReflectedRay3Slope);

    myReflectedRay3Arrow12Slope=(myReflectedRay3Slope+1)/(1-myReflectedRay3Slope);

    multi2=1;
    if(myReflectedRay3Slope>=1)
        multi2=-1;
    multi1=1;
    if(myReflectedRay3Slope<=-1)
        multi1=-1;

    myReflectedRay3Arrow11XStart =   myReflectedRay3MidpointX-(multi1)*arrowLen*(1/Math.sqrt((myReflectedRay3Arrow11Slope*myReflectedRay3Arrow11Slope)+1));
    myReflectedRay3Arrow11XEnd   =   myReflectedRay3MidpointX;
    myReflectedRay3Arrow11YStart =   myReflectedRay3MidpointY-(multi1)*myReflectedRay3Arrow11Slope*(arrowLen*(1/Math.sqrt((myReflectedRay3Arrow11Slope*myReflectedRay3Arrow11Slope)+1)));
    myReflectedRay3Arrow11YEnd   =   myReflectedRay3MidpointY;
    myReflectedRay3Arrow11ZStart =   myReflectedRay3ZStart;
    myReflectedRay3Arrow11ZEnd   =   myReflectedRay3ZEnd;

    myReflectedRay3Arrow12XStart =   myReflectedRay3MidpointX-(multi2)*arrowLen*(1/Math.sqrt((myReflectedRay3Arrow12Slope*myReflectedRay3Arrow12Slope)+1));
    myReflectedRay3Arrow12XEnd   =   myReflectedRay3MidpointX;
    myReflectedRay3Arrow12YStart =   myReflectedRay3MidpointY-(multi2)*myReflectedRay3Arrow12Slope*(arrowLen*(1/Math.sqrt((myReflectedRay3Arrow12Slope*myReflectedRay3Arrow12Slope)+1)));
    myReflectedRay3Arrow12YEnd   =   myReflectedRay3MidpointY;
    myReflectedRay3Arrow12ZStart =   myReflectedRay3ZStart;
    myReflectedRay3Arrow12ZEnd   =   myReflectedRay3ZEnd;
}

function updateReflectedArrows()
{

   initialiseReflectedArrow();

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay1Arrow11XStart, myReflectedRay1Arrow11YStart, myReflectedRay1Arrow11ZStart), new THREE.Vector3(myReflectedRay1Arrow11XEnd, myReflectedRay1Arrow11YEnd, myReflectedRay1Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    myReflectedRay1Arrow11.geometry=lineGeometry;
    myReflectedRay1Arrow11.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay1Arrow12XStart, myReflectedRay1Arrow12YStart, myReflectedRay1Arrow12ZStart), new THREE.Vector3(myReflectedRay1Arrow12XEnd, myReflectedRay1Arrow12YEnd, myReflectedRay1Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    myReflectedRay1Arrow12.geometry=lineGeometry;
    myReflectedRay1Arrow12.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay2Arrow11XStart, myReflectedRay2Arrow11YStart, myReflectedRay2Arrow11ZStart), new THREE.Vector3(myReflectedRay2Arrow11XEnd, myReflectedRay2Arrow11YEnd, myReflectedRay2Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    myReflectedRay2Arrow11.geometry=lineGeometry;
    myReflectedRay2Arrow11.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay2Arrow12XStart, myReflectedRay2Arrow12YStart, myReflectedRay2Arrow12ZStart), new THREE.Vector3(myReflectedRay2Arrow12XEnd, myReflectedRay2Arrow12YEnd, myReflectedRay2Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    myReflectedRay2Arrow12.geometry=lineGeometry;
    myReflectedRay2Arrow12.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay3Arrow11XStart, myReflectedRay3Arrow11YStart, myReflectedRay3Arrow11ZStart), new THREE.Vector3(myReflectedRay3Arrow11XEnd, myReflectedRay3Arrow11YEnd, myReflectedRay3Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    myReflectedRay3Arrow11.geometry=lineGeometry;
    myReflectedRay3Arrow11.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay3Arrow12XStart, myReflectedRay3Arrow12YStart, myReflectedRay3Arrow12ZStart), new THREE.Vector3(myReflectedRay3Arrow12XEnd, myReflectedRay3Arrow12YEnd, myReflectedRay3Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    myReflectedRay3Arrow12.geometry=lineGeometry;
    myReflectedRay3Arrow12.verticesNeedUpdate=true;


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
    //PIEstartButton.style.visibility='hidden';
    //PIEslowdownButton.style.visibility='hidden';
    //PIEspeedupButton.style.visibility='hidden';

    var geometry;
    var material;
    var outlineMaterial1;

    var lineGeometry;
    var lineMaterial;
    var vertArray;


    PIEsetExperimentTitle("Tracing rays at a concave mirror");
    PIEsetDeveloperName("Dhruv Thakker");
    PIEhideControlElement();

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();

    /* initialise Other Variables */
    initializeStaticVariables();
    initalizeDynamicVariables();
    initializeRayVariables();
    initializeIncidentArrows();
    initialiseReflectedArrow();

    initialiseControls();

    shapeText = document.createElement('div');
    shapeText.style.position = 'absolute';
    shapeText.style.zIndex = 0;
    shapeText.style.height='27%';
    shapeText.style.width = '180%';
    shapeText.style.color = "#0000ff";
    shapeText.style.textAlign = 'left';
    shapeText.style.display = 'block';
    shapeText.style.fontSize = 30 + 'px';
    shapeText.style.top = '55%';
    shapeText.style.left = '95%';
    document.body.appendChild(shapeText);
    shapeText.innerHTML = "P";

    shapeText = document.createElement('div');
    shapeText.style.position = 'absolute';
    shapeText.style.zIndex = 0;
    shapeText.style.height='23%';
    shapeText.style.width = '144%';
    shapeText.style.color = "#0000ff";
    shapeText.style.textAlign = 'left';
    shapeText.style.display = 'block';
    shapeText.style.fontSize = 20 + 'px';
    shapeText.style.top = '55%';
    shapeText.style.left = '71%'
    document.body.appendChild(shapeText);
    shapeText.innerHTML = "2F";

    /*shapeText = document.createElement('div');
    shapeText.style.position = 'absolute';
    shapeText.style.zIndex = 0;
    shapeText.style.height='23%';
    shapeText.style.width = '144%';
    shapeText.style.color = "#0000ff";
    shapeText.style.textAlign = 'left';
    shapeText.style.display = 'block';
    shapeText.style.fontSize = 20 + 'px';
    shapeText.style.top = '35%';
    shapeText.style.left = '71%'
    document.body.appendChild(shapeText);
    shapeText.innerHTML = ""+con;
    conx=shapeText;*/

    PIErenderer.shadowMap=false;

    /*Adding Principal Axis*/

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPrincipalAxisXStart, myPrincipalAxisYStart, myPrincipalAxisZStart), new THREE.Vector3(myPrincipalAxisXEnd, myPrincipalAxisYEnd, myPrincipalAxisZEnd) );
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x000000,linewidth: 3 } );
    myPrincipalAxis = new THREE.Line( lineGeometry, lineMaterial );

    PIEaddElement(myPrincipalAxis);

    /* Create Focal Ball and add it to scene */
    geometry=new THREE.SphereGeometry(myBallFRadius,segmentWidth,segmentHeight);
    material=new THREE.MeshBasicMaterial({color: 0x64DD17});
    myBallF = new THREE.Mesh(geometry,material);
    myBallF.position.set(myBallFX, myBallFY, myBallFZ);

    PIEaddElement(myBallF);

    /* Create Focal Ball and add it to scene */
    geometry=new THREE.SphereGeometry(myBall2FRadius,segmentWidth,segmentHeight);
    material=new THREE.MeshBasicMaterial({color: 0x33691E});
    myBall2F = new THREE.Mesh(geometry,material);
    myBall2F.position.set(myBall2FX, myBall2FY, myBall2FZ);

    PIEaddElement(myBall2F);


    /* Create Concave Mirror and add it to scene */
    geometry=new THREE.SphereGeometry(myConcaveMirrorRadius,segmentWidth,segmentHeight,phiStart+0.4, phiLength, thetaStart, thetaLength);
    material=new THREE.MeshBasicMaterial({color: 0x3F51B5});
    myConcaveMirror = new THREE.Mesh(geometry,material);
    myConcaveMirror.position.set(myConcaveMirrorX, myConcaveMirrorY, myConcaveMirrorZ);
    PIEaddElement(myConcaveMirror);

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myObjectXStart, myObjectYStart, myObjectZStart), new THREE.Vector3(myObjectXEnd, myObjectYEnd, myObjectZEnd) );
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x9C27B0,linewidth: 3 } );
    myObject = new THREE.Line( lineGeometry, lineMaterial );

    PIEaddElement(myObject);

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myObjectArrowL1XStart, myObjectArrowL1YStart, myObjectArrowL1ZStart), new THREE.Vector3(myObjectArrowL1XEnd, myObjectArrowL1YEnd, myObjectArrowL1ZEnd) );
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x9C27B0,linewidth: 3 } );
    myObjectArrowL1 = new THREE.Line( lineGeometry, lineMaterial );

    PIEaddElement(myObjectArrowL1);

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myObjectArrowL2XStart, myObjectArrowL2YStart, myObjectArrowL2ZStart), new THREE.Vector3(myObjectArrowL2XEnd, myObjectArrowL2YEnd, myObjectArrowL2ZEnd) );
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x9C27B0,linewidth: 3 } );
    myObjectArrowL2 = new THREE.Line( lineGeometry, lineMaterial );

    PIEaddElement(myObjectArrowL2);

    /* Create RayBall1 and add it to scene */
    geometry=new THREE.SphereGeometry(myObjectDragBallRadius,segmentWidth,segmentHeight);
    material=new THREE.MeshBasicMaterial({color: 0xa9a9a9});
    myObjectDragBall = new THREE.Mesh(geometry,material);
    myObjectDragBall.position.set(myObjectDragBallX, myObjectDragBallY, myObjectDragBallZ);
    PIEaddElement(myObjectDragBall);

    PIEdragElement(myObjectDragBall);
    PIEsetDrag(myObjectDragBall, myObjectDragBallDrag);


    /*Incident Rays*/

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay1XStart, myIncidentRay1YStart, myIncidentRay1ZStart), new THREE.Vector3(myIncidentRay1XEnd, myIncidentRay1YEnd, myIncidentRay1ZEnd) );
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xa52a2a,linewidth: 3 } );
    myIncidentRay1 = new THREE.Line( lineGeometry, lineMaterial );

    PIEaddElement(myIncidentRay1);

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay2XStart, myIncidentRay2YStart, myIncidentRay2ZStart), new THREE.Vector3(myIncidentRay2XEnd, myIncidentRay2YEnd, myIncidentRay2ZEnd) );
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xE65100,linewidth: 3 } );
    myIncidentRay2 = new THREE.Line( lineGeometry, lineMaterial );

    PIEaddElement(myIncidentRay2);

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay3XStart, myIncidentRay3YStart, myIncidentRay3ZStart), new THREE.Vector3(myIncidentRay3XEnd, myIncidentRay3YEnd, myIncidentRay3ZEnd) );
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00dd00,linewidth: 3 } );
    myIncidentRay3 = new THREE.Line( lineGeometry, lineMaterial );

    PIEaddElement(myIncidentRay3);





    /*Reflected Rays*/

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay1XStart, myReflectedRay1YStart, myReflectedRay1ZStart), new THREE.Vector3(myReflectedRay1XEnd, myReflectedRay1YEnd, myReflectedRay1ZEnd) );
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xa52a2a,linewidth: 3 } );
    myReflectedRay1 = new THREE.Line( lineGeometry, lineMaterial );

    PIEaddElement(myReflectedRay1);

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay2XStart, myReflectedRay2YStart, myReflectedRay2ZStart), new THREE.Vector3(myReflectedRay2XEnd, myReflectedRay2YEnd, myReflectedRay2ZEnd) );
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xE65100,linewidth: 3 } );
    myReflectedRay2 = new THREE.Line( lineGeometry, lineMaterial );

    PIEaddElement(myReflectedRay2);

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay3XStart, myReflectedRay3YStart, myReflectedRay3ZStart), new THREE.Vector3(myReflectedRay3XEnd, myReflectedRay3YEnd, myReflectedRay3ZEnd) );
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00dd00,linewidth: 3 } );
    myReflectedRay3 = new THREE.Line( lineGeometry, lineMaterial );

    PIEaddElement(myReflectedRay3);



    /**Incident Arrows*/

    /*Create Ray 1 Arrow 1*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay1Arrow11XStart, myIncidentRay1Arrow11YStart, myIncidentRay1Arrow11ZStart), new THREE.Vector3(myIncidentRay1Arrow11XEnd, myIncidentRay1Arrow11YEnd, myIncidentRay1Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xa52a2a,linewidth: 4 } );
    myIncidentRay1Arrow11 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myIncidentRay1Arrow11);

    /*Create Ray 1 Arrow 2*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay1Arrow12XStart, myIncidentRay1Arrow12YStart, myIncidentRay1Arrow12ZStart), new THREE.Vector3(myIncidentRay1Arrow12XEnd, myIncidentRay1Arrow12YEnd, myIncidentRay1Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xa52a2a,linewidth: 4 } );
    myIncidentRay1Arrow12 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myIncidentRay1Arrow12);

    /*Create Ray 2 Arrow 1*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay2Arrow11XStart, myIncidentRay2Arrow11YStart, myIncidentRay2Arrow11ZStart), new THREE.Vector3(myIncidentRay2Arrow11XEnd, myIncidentRay2Arrow11YEnd, myIncidentRay2Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xE65100,linewidth: 4 } );
    myIncidentRay2Arrow11 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myIncidentRay2Arrow11);

    /*Create Ray 2 Arrow 2*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay2Arrow12XStart, myIncidentRay2Arrow12YStart, myIncidentRay2Arrow12ZStart), new THREE.Vector3(myIncidentRay2Arrow12XEnd, myIncidentRay2Arrow12YEnd, myIncidentRay2Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xE65100,linewidth: 4 } );
    myIncidentRay2Arrow12 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myIncidentRay2Arrow12);

    /*Create Ray 3 Arrow 1*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay3Arrow11XStart, myIncidentRay3Arrow11YStart, myIncidentRay3Arrow11ZStart), new THREE.Vector3(myIncidentRay3Arrow11XEnd, myIncidentRay3Arrow11YEnd, myIncidentRay3Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00dd00,linewidth: 4 } );
    myIncidentRay3Arrow11 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myIncidentRay3Arrow11);

    /*Create Ray 3 Arrow 2*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay3Arrow12XStart, myIncidentRay3Arrow12YStart, myIncidentRay3Arrow12ZStart), new THREE.Vector3(myIncidentRay3Arrow12XEnd, myIncidentRay3Arrow12YEnd, myIncidentRay3Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00dd00,linewidth: 4 } );
    myIncidentRay3Arrow12 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myIncidentRay3Arrow12);


    /*Create RRay 1 Arrow 1*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay1Arrow11XStart, myReflectedRay1Arrow11YStart, myReflectedRay1Arrow11ZStart), new THREE.Vector3(myReflectedRay1Arrow11XEnd, myReflectedRay1Arrow11YEnd, myReflectedRay1Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xa52a2a,linewidth: 4 } );
    myReflectedRay1Arrow11 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myReflectedRay1Arrow11);

    /*Create RRay 1 Arrow 2*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay1Arrow12XStart, myReflectedRay1Arrow12YStart, myReflectedRay1Arrow12ZStart), new THREE.Vector3(myReflectedRay1Arrow12XEnd, myReflectedRay1Arrow12YEnd, myReflectedRay1Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xa52a2a,linewidth: 4 } );
    myReflectedRay1Arrow12 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myReflectedRay1Arrow12);

    /*Create RRay 2 Arrow 1*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay2Arrow11XStart, myReflectedRay2Arrow11YStart, myReflectedRay2Arrow11ZStart), new THREE.Vector3(myReflectedRay2Arrow11XEnd, myReflectedRay2Arrow11YEnd, myReflectedRay2Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xE65100,linewidth: 4 } );
    myReflectedRay2Arrow11 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myReflectedRay2Arrow11);

    /*Create RRay 2 Arrow 2*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay2Arrow12XStart, myReflectedRay2Arrow12YStart, myReflectedRay2Arrow12ZStart), new THREE.Vector3(myReflectedRay2Arrow12XEnd, myReflectedRay2Arrow12YEnd, myReflectedRay2Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xE65100,linewidth: 4 } );
    myReflectedRay2Arrow12 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myReflectedRay2Arrow12);

    /*Create RRay 3 Arrow 1*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay3Arrow11XStart, myReflectedRay3Arrow11YStart, myReflectedRay3Arrow11ZStart), new THREE.Vector3(myReflectedRay3Arrow11XEnd, myReflectedRay3Arrow11YEnd, myReflectedRay3Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00dd00,linewidth: 4 } );
    myReflectedRay3Arrow11 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myReflectedRay3Arrow11);

    /*Create RRay 3 Arrow 2*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay3Arrow12XStart, myReflectedRay3Arrow12YStart, myReflectedRay3Arrow12ZStart), new THREE.Vector3(myReflectedRay3Arrow12XEnd, myReflectedRay3Arrow12YEnd, myReflectedRay3Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00dd00,linewidth: 4 } );
    myReflectedRay3Arrow12 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myReflectedRay3Arrow12);





    /* Initialise Wall variables */
    /* Back */
    // material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: texture } );
    // geometry = new THREE.PlaneBufferGeometry( mySceneW * 2, mySceneH * 2 );
    geometry = new THREE.BoxGeometry( mySceneW * 2, mySceneH * 2, wallThickness );
    material = new THREE.MeshLambertMaterial( {color: 0xFFE57F} );
    myBack = new THREE.Mesh( geometry, material );
    myBack.position.set(myCenterX, myCenterY, backB - (wallThickness / 2));

    PIEaddElement(myBack);


    geometry = new THREE.BoxGeometry( mySceneW * 2, 5*wallThickness, 0.000001);
    material = new THREE.MeshLambertMaterial( {color: 0xFFE57F} );
    myFloor  = new THREE.Mesh( geometry, material );
    // myFloor.lookAt(new THREE.Vector3(0,1,0));
    myFloor.position.set(myCenterX, bottomB - (wallThickness ),myAllZ);

    PIEaddElement(myFloor);



    /* Reset all positions */
    resetExperiment();

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}

/******************* End of Load Experiment1 objects code ***********************/

/******************* Reset Experiment1 code ***********************/

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

    initializeStaticVariables();

    myConcaveMirror.geometry = new THREE.SphereGeometry(myConcaveMirrorRadius, segmentWidth, segmentHeight, phiStart + 0.4, phiLength, thetaStart, thetaLength);

    myConcaveMirror.geometry.verticesNeedUpdate = true;





    initalizeDynamicVariables();
    updateDynamicVariables();
    updateRayVariables();
    updateIncidentArrows();
    updateReflectedArrows();

    myBallF.position.set(myBallFX,myBallFY,myBallFZ);



    updateControlVariables();
    PIEchangeInputSlider(mirrorRad,defaultRad);


    hideEle();


}

/******************* End of Reset Experiment1 code ***********************/
function hideEle()
{
    myIncidentRay1.visible=false;
    myIncidentRay1Arrow11.visible=false;
    myIncidentRay1Arrow12.visible=false;
    myIncidentRay2.visible=false;
    myIncidentRay2Arrow11.visible=false;
    myIncidentRay2Arrow12.visible=false;
    myIncidentRay3.visible=false;
    myIncidentRay3Arrow11.visible=false;
    myIncidentRay3Arrow12.visible=false;

    myReflectedRay1.visible=false;
    myReflectedRay1Arrow11.visible=false;
    myReflectedRay1Arrow12.visible=false;
    myReflectedRay2.visible=false;
    myReflectedRay2Arrow11.visible=false;
    myReflectedRay2Arrow12.visible=false;
    myReflectedRay3.visible=false;
    myReflectedRay3Arrow11.visible=false;
    myReflectedRay3Arrow12.visible=false;

    con=1;
}
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
    /*if(con==1)
    myIncidentRay1.visible=true;
    else if(con==50) {
        myIncidentRay1Arrow11.visible = true;
        myIncidentRay1Arrow12.visible = true;
    }
    else if(con==200)
    myIncidentRay2.visible=true;
    else if(con==250) {
        myIncidentRay2Arrow11.visible = true;
        myIncidentRay2Arrow12.visible = true;
    }
    else if(con==400)
    myIncidentRay3.visible=true;
    else if(con==450) {
        myIncidentRay3Arrow11.visible = true;
        myIncidentRay3Arrow12.visible = true;
    }
    else if(con==100)
        myReflectedRay1.visible=true;
    else if(con==150) {
        myReflectedRay1Arrow11.visible = true;
        myReflectedRay1Arrow12.visible = true;
    }
    else if(con==300)
        myReflectedRay2.visible=true;
    else if(con==350) {
        myReflectedRay2Arrow11.visible = true;
        myReflectedRay2Arrow12.visible = true;
    }
    else if(con==500)
        myReflectedRay3.visible=true;
    else if(con==550) {
        myReflectedRay3Arrow11.visible = true;
        myReflectedRay3Arrow12.visible = true;
    }*/
    if(con<=100) {

        x1=myIncidentRay1XStart;
        x2=myIncidentRay1XEnd;
        y1=myIncidentRay1YStart;
        y2=myIncidentRay1YEnd;

        len=Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
        m=(y2-y1)/(x2-x1);
        dl=len/100;
        k=con;
        x3=x1+(k*dl)/(Math.sqrt(m*m+1));
        y3=m*(x3-x1)+y1;
        lineGeometry = new THREE.Geometry();
        vertArray = lineGeometry.vertices;
        vertArray.push( new THREE.Vector3(x1, y1, myAllZ), new THREE.Vector3(x3, y3, myAllZ));
        lineGeometry.computeLineDistances();

        myIncidentRay1.geometry=lineGeometry;
        myIncidentRay1.verticesNeedUpdate=true;

        k=k+1;
        x3=x1+(k*dl)/(Math.sqrt(m*m+1));
        myIncidentRay1.visible=true;

    }
    else if(con<=200) {
        myIncidentRay1Arrow11.visible = true;
        myIncidentRay1Arrow12.visible = true;

        x1=myReflectedRay1XStart;
        x2=myReflectedRay1XEnd;
        y1=myReflectedRay1YStart;
        y2=myReflectedRay1YEnd;

        len=Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
        m=(y2-y1)/(x2-x1);
        dl=len/500;
        k=con-100;
        x3=x1-(k*dl)/(Math.sqrt(m*m+1));
        y3=m*(x3-x1)+y1;
        lineGeometry = new THREE.Geometry();
        vertArray = lineGeometry.vertices;
        vertArray.push( new THREE.Vector3(x1, y1, myAllZ), new THREE.Vector3(x3, y3, myAllZ));
        lineGeometry.computeLineDistances();

        myReflectedRay1.geometry=lineGeometry;
        myReflectedRay1.verticesNeedUpdate=true;

        myReflectedRay1.visible=true;

    }
    else if(con<=300)
    {
        myReflectedRay1Arrow11.visible = true;
        myReflectedRay1Arrow12.visible = true;

        x1=myIncidentRay2XStart;
        x2=myIncidentRay2XEnd;
        y1=myIncidentRay2YStart;
        y2=myIncidentRay2YEnd;

        len=Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
        m=(y2-y1)/(x2-x1);
        dl=len/100;
        k=con-200;
        x3=x1+(k*dl)/(Math.sqrt(m*m+1));
        y3=m*(x3-x1)+y1;
        lineGeometry = new THREE.Geometry();
        vertArray = lineGeometry.vertices;
        vertArray.push( new THREE.Vector3(x1, y1, myAllZ), new THREE.Vector3(x3, y3, myAllZ));
        lineGeometry.computeLineDistances();

        myIncidentRay2.geometry=lineGeometry;
        myIncidentRay2.verticesNeedUpdate=true;

        k=k+1;
        x3=x1+(k*dl)/(Math.sqrt(m*m+1));
        myIncidentRay2.visible=true;
    }
    else if(con<=400)
    {

        myIncidentRay2Arrow11.visible = true;
        myIncidentRay2Arrow12.visible = true;

        x1=myReflectedRay2XStart;
        x2=myReflectedRay2XEnd;
        y1=myReflectedRay2YStart;
        y2=myReflectedRay2YEnd;

        len=Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
        m=(y2-y1)/(x2-x1);
        dl=len/100;
        k=con-300;
        x3=x1-(k*dl)/(Math.sqrt(m*m+1));
        y3=m*(x3-x1)+y1;
        lineGeometry = new THREE.Geometry();
        vertArray = lineGeometry.vertices;
        vertArray.push( new THREE.Vector3(x1, y1, myAllZ), new THREE.Vector3(x3, y3, myAllZ));
        lineGeometry.computeLineDistances();

        myReflectedRay2.geometry=lineGeometry;
        myReflectedRay2.verticesNeedUpdate=true;

        myReflectedRay2.visible=true;


    }
    else if(con<=500)
    {

        myReflectedRay2Arrow11.visible = true;
        myReflectedRay2Arrow12.visible = true;

        x1=myIncidentRay3XStart;
        x2=myIncidentRay3XEnd;
        y1=myIncidentRay3YStart;
        y2=myIncidentRay3YEnd;

        len=Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
        m=(y2-y1)/(x2-x1);
        dl=len/100;
        k=con-400;
        x3=x1+(k*dl)/(Math.sqrt(m*m+1));
        y3=m*(x3-x1)+y1;
        lineGeometry = new THREE.Geometry();
        vertArray = lineGeometry.vertices;
        vertArray.push( new THREE.Vector3(x1, y1, myAllZ), new THREE.Vector3(x3, y3, myAllZ));
        lineGeometry.computeLineDistances();

        myIncidentRay3.geometry=lineGeometry;
        myIncidentRay3.verticesNeedUpdate=true;

        k=k+1;
        x3=x1+(k*dl)/(Math.sqrt(m*m+1));
        myIncidentRay3.visible=true;


    }
    else if(con<=600)
    {

        myIncidentRay3Arrow11.visible = true;
        myIncidentRay3Arrow12.visible = true;

        x1=myReflectedRay3XStart;
        x2=myReflectedRay3XEnd;
        y1=myReflectedRay3YStart;
        y2=myReflectedRay3YEnd;

        len=Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
        m=(y2-y1)/(x2-x1);
        dl=len/100;
        k=con-500;
        x3=x1-(k*dl)/(Math.sqrt(m*m+1));
        y3=m*(x3-x1)+y1;
        lineGeometry = new THREE.Geometry();
        vertArray = lineGeometry.vertices;
        vertArray.push( new THREE.Vector3(x1, y1, myAllZ), new THREE.Vector3(x3, y3, myAllZ));
        lineGeometry.computeLineDistances();

        myReflectedRay3.geometry=lineGeometry;
        myReflectedRay3.verticesNeedUpdate=true;

        myReflectedRay3.visible=true;


    }
    else if(con<=700) {
        myReflectedRay3Arrow11.visible = true;
        myReflectedRay3Arrow12.visible = true;
    }
    con++;
    //conx.innerHTML = ""+con;

}

/******************* Update (animation changes) code ***********************/
var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Tracing rays at a concave mirror</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>This experiment focuses on Tracing rays at a concave mirror</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>User can drag the object placed in front of the mirror using the drag ball present at the bottom.</p>";
    helpContent = helpContent + "<p>User can also change the radius of curvature of concave mirror</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The control window at the top right shows the \"Object-Distance\" Distance of object from mirror and \"Mirror-Radius\" Radius of Curvature of mirror</p>";
    helpContent = helpContent + "<p>On pressing the start button you will be able to see each ray being drawn and also able to see how these rays are reflected from the concave mirror following the Snell's Law.</p>";

    helpContent = helpContent + "<p>Three Rays originate from the top of the object and after reflection meet at the point in front of the mirror where image of object is obtained.</p>";
    helpContent = helpContent + "<p>BROWN,ORANGE,LIGHT GREEN are incident rays,reflected rays obtained are in same color as incident rays</p>";
    helpContent = helpContent + "<p>LIME coloured ball indicates focal point and DARK GREEN colored ball indicates Radius of Curvature or 2F</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Tracing rays at a concave mirror</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>This experiment focuses on Tracing rays at a concave mirror</p>";
    infoContent = infoContent + "<h3>Image formation by a Concave Mirror</h3>";
    infoContent = infoContent + "<p>Image is formed in a concave mirror when the reflected rays actually meet in front of the mirror if object is placed at a distance more than focal length.This point of intersection gives us the idea about formaton of the image." +
                                "If the object is point object then image is obtained at this point else the image is formed around that point of intersection. " +
                                "Image formed by Concave mirror is real if object is at a distance greater than focal length from the mirror, Size of image depends on the distance of object from mirror.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}