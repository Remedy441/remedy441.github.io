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

/* Room Variables */

var bottomB=0;
var topB=8;
var backB=-4.0;         /* Back Barrier */
var wallThickness;      /* Wall Thickness */

/* Room Objects */

var myBack;             /* Back */
var myFloor;
var myRoof;

var bLeft;
var bRight;

var ballBLeft;
var ballBRight;

/*Img Object 1*/
var obj1X;
var obj1Y;
var obj1Z;
var obj1Len1;
var obj1Len2;
var obj1Len3;

var obj2X;
var obj2Y;
var obj2Z;
var obj2Len1;
var obj2Len2;
var obj2Len3;

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
var myIncidentRay2Slope;

var myIncidentRay3;
var myIncidentRay3XStart;
var myIncidentRay3XEnd;
var myIncidentRay3YStart;
var myIncidentRay3YEnd;
var myIncidentRay3ZStart;
var myIncidentRay3ZEnd;

var myIncidentRay3XDiff;
var myIncidentRay3Slope;

var myPIncidentRay1;
var myPIncidentRay1XStart;
var myPIncidentRay1XEnd;
var myPIncidentRay1YStart;
var myPIncidentRay1YEnd;
var myPIncidentRay1ZStart;
var myPIncidentRay1ZEnd;

var myPIncidentRay1XDiff;
var myPIncidentRay1Slope;

var myPIncidentRay2;
var myPIncidentRay2XStart;
var myPIncidentRay2XEnd;
var myPIncidentRay2YStart;
var myPIncidentRay2YEnd;
var myPIncidentRay2ZStart;
var myPIncidentRay2ZEnd;

var myPIncidentRay2XDiff;
var myPIncidentRay2Slope;

var myPIncidentRay3;
var myPIncidentRay3XStart;
var myPIncidentRay3XEnd;
var myPIncidentRay3YStart;
var myPIncidentRay3YEnd;
var myPIncidentRay3ZStart;
var myPIncidentRay3ZEnd;

var myPIncidentRay3XDiff;
var myPIncidentRay3Slope;



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


var myPIncidentRay1MidpointX;
var myPIncidentRay1MidpointY;

var myPIncidentRay1Arrow11;
var myPIncidentRay1Arrow11XStart;
var myPIncidentRay1Arrow11XEnd;
var myPIncidentRay1Arrow11YStart;
var myPIncidentRay1Arrow11YEnd;
var myPIncidentRay1Arrow11ZStart;
var myPIncidentRay1Arrow11ZEnd;
var myPIncidentRay1Arrow11Slope;

var myPIncidentRay1Arrow12;
var myPIncidentRay1Arrow12XStart;
var myPIncidentRay1Arrow12XEnd;
var myPIncidentRay1Arrow12YStart;
var myPIncidentRay1Arrow12YEnd;
var myPIncidentRay1Arrow12ZStart;
var myPIncidentRay1Arrow12ZEnd;
var myPIncidentRay1Arrow12Slope;

var myPIncidentRay2MidpointX;
var myPIncidentRay2MidpointY;

var myPIncidentRay2Arrow11;
var myPIncidentRay2Arrow11XStart;
var myPIncidentRay2Arrow11XEnd;
var myPIncidentRay2Arrow11YStart;
var myPIncidentRay2Arrow11YEnd;
var myPIncidentRay2Arrow11ZStart;
var myPIncidentRay2Arrow11ZEnd;
var myPIncidentRay2Arrow11Slope;

var myPIncidentRay2Arrow12;
var myPIncidentRay2Arrow12XStart;
var myPIncidentRay2Arrow12XEnd;
var myPIncidentRay2Arrow12YStart;
var myPIncidentRay2Arrow12YEnd;
var myPIncidentRay2Arrow12ZStart;
var myPIncidentRay2Arrow12ZEnd;
var myPIncidentRay2Arrow12Slope;

var myPIncidentRay3MidpointX;
var myPIncidentRay3MidpointY;

var myPIncidentRay3Arrow11;
var myPIncidentRay3Arrow11XStart;
var myPIncidentRay3Arrow11XEnd;
var myPIncidentRay3Arrow11YStart;
var myPIncidentRay3Arrow11YEnd;
var myPIncidentRay3Arrow11ZStart;
var myPIncidentRay3Arrow11ZEnd;
var myPIncidentRay3Arrow11Slope;

var myPIncidentRay3Arrow12;
var myPIncidentRay3Arrow12XStart;
var myPIncidentRay3Arrow12XEnd;
var myPIncidentRay3Arrow12YStart;
var myPIncidentRay3Arrow12YEnd;
var myPIncidentRay3Arrow12ZStart;
var myPIncidentRay3Arrow12ZEnd;
var myPIncidentRay3Arrow12Slope



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

var myReflectedRay3Slope;

var myPReflectedRay1;
var myPReflectedRay1XStart;
var myPReflectedRay1XEnd;
var myPReflectedRay1YStart;
var myPReflectedRay1YEnd;
var myPReflectedRay1ZStart;
var myPReflectedRay1ZEnd;

var myPReflectedRay1Slope;

var myPReflectedRay2;
var myPReflectedRay2XStart;
var myPReflectedRay2XEnd;
var myPReflectedRay2YStart;
var myPReflectedRay2YEnd;
var myPReflectedRay2ZStart;
var myPReflectedRay2ZEnd;

var myPReflectedRay2Slope;


var myPReflectedRay3;
var myPReflectedRay3XStart;
var myPReflectedRay3XEnd;
var myPReflectedRay3YStart;
var myPReflectedRay3YEnd;
var myPReflectedRay3ZStart;
var myPReflectedRay3ZEnd;

var myPReflectedRay3Slope;



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

var myPReflectedRay1MidpointX;
var myPReflectedRay1MidpointY;


var myPReflectedRay1Arrow11;
var myPReflectedRay1Arrow11XStart;
var myPReflectedRay1Arrow11XEnd;
var myPReflectedRay1Arrow11YStart;
var myPReflectedRay1Arrow11YEnd;
var myPReflectedRay1Arrow11ZStart;
var myPReflectedRay1Arrow11ZEnd;
var myPReflectedRay1Arrow11Slope;

var myPReflectedRay1Arrow12;
var myPReflectedRay1Arrow12XStart;
var myPReflectedRay1Arrow12XEnd;
var myPReflectedRay1Arrow12YStart;
var myPReflectedRay1Arrow12YEnd;
var myPReflectedRay1Arrow12ZStart;
var myPReflectedRay1Arrow12ZEnd;
var myPReflectedRay1Arrow12Slope

var myPReflectedRay2MidpointX;
var myPReflectedRay2MidpointY;

var myPReflectedRay2Arrow11;
var myPReflectedRay2Arrow11XStart;
var myPReflectedRay2Arrow11XEnd;
var myPReflectedRay2Arrow11YStart;
var myPReflectedRay2Arrow11YEnd;
var myPReflectedRay2Arrow11ZStart;
var myPReflectedRay2Arrow11ZEnd;
var myPReflectedRay2Arrow11Slope;

var myPReflectedRay2Arrow12;
var myPReflectedRay2Arrow12XStart;
var myPReflectedRay2Arrow12XEnd;
var myPReflectedRay2Arrow12YStart;
var myPReflectedRay2Arrow12YEnd;
var myPReflectedRay2Arrow12ZStart;
var myPReflectedRay2Arrow12ZEnd;
var myPReflectedRay2Arrow12Slope;

var myPReflectedRay3MidpointX;
var myPReflectedRay3MidpointY;

var myPReflectedRay3Arrow11;
var myPReflectedRay3Arrow11XStart;
var myPReflectedRay3Arrow11XEnd;
var myPReflectedRay3Arrow11YStart;
var myPReflectedRay3Arrow11YEnd;
var myPReflectedRay3Arrow11ZStart;
var myPReflectedRay3Arrow11ZEnd;
var myPReflectedRay3Arrow11Slope;

var myPReflectedRay3Arrow12;
var myPReflectedRay3Arrow12XStart;
var myPReflectedRay3Arrow12XEnd;
var myPReflectedRay3Arrow12YStart;
var myPReflectedRay3Arrow12YEnd;
var myPReflectedRay3Arrow12ZStart;
var myPReflectedRay3Arrow12ZEnd;

var mirrorRad;
var focalLength;


var tROC;
var tFocalLen;


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



/******************* End of Interaction functions ***********************/

/******************* GUI control objects code ***********************/


function handleRad(newValue) {

    myConcaveMirrorRadius = newValue;

    myConcaveMirror.geometry = new THREE.SphereGeometry(myConcaveMirrorRadius, segmentWidth, segmentHeight, phiStart + 0.4, phiLength, thetaStart, thetaLength);

    myConcaveMirror.geometry.verticesNeedUpdate = true;



    initalizeDynamicVariables();
    updateRayVariables();
    updateIncidentArrows();
    updateReflectedArrows();

    myBallF.position.set(myBallFX,myBallFY,myBallFZ);
    //tROC.innerHTML = "Radius of Curvature = "+myConcaveMirrorRadius.toFixed(2);
    //tFocalLen.innerHTML = "Focal Length(R/2) = "+(myConcaveMirrorRadius/2).toFixed(2);

    PIEchangeInputText(focalLength,myConcaveMirrorRadius/2);
    hideEle();
    PIErender();
}
function initialiseControlVariables()
{

    mirrorRad="Curvature-Radius";
    focalLength="Focal Length";
    Radmax=2.5;
    Radmin=1;

    defaultRad=myConcaveMirrorRadius;

    RADstep=0.01;



    

}



function initialiseControls()
{
    initialiseControlVariables();


    PIEaddInputSlider(mirrorRad, defaultRad, handleRad, Radmin, Radmax, RADstep);
    PIEaddInputText(focalLength,myConcaveMirrorRadius/2);
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


    obj1Len1=0.80;
    obj1Len2=0.50;
    obj1Len3=0.20;
    obj1X=bLeft;
    obj1Y=myCenterY+obj1Len1;
    obj1Z=myAllZ;

    obj2Len1=0.80;
    obj2Len2=0.50;
    obj2Len3=0.20;
    obj2X=bLeft;
    obj2Y=myCenterY-obj2Len1;
    obj2Z=myAllZ;


    /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
}

function initalizeDynamicVariables()
{
    /*Initialize Drag Ball Variables*/

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

function initializeRayVariables()
{

    myIncidentRay1XDiff     = myConcaveMirrorRadius-Math.sqrt(myConcaveMirrorRadius*myConcaveMirrorRadius-obj1Len1*obj1Len1);

    myIncidentRay1XStart    = obj1X;
    myIncidentRay1XEnd      = myConcaveMirrorX+myConcaveMirrorRadius-myIncidentRay1XDiff;
    myIncidentRay1YStart    = obj1Y;
    myIncidentRay1YEnd      = obj1Y;
    myIncidentRay1ZStart    = obj1Z;
    myIncidentRay1ZEnd      = obj1Z;


    myIncidentRay2XDiff     = myConcaveMirrorRadius-Math.sqrt(myConcaveMirrorRadius*myConcaveMirrorRadius-obj1Len2*obj1Len2);

    myIncidentRay2XStart    = obj1X;
    myIncidentRay2XEnd      = myConcaveMirrorX+myConcaveMirrorRadius-myIncidentRay2XDiff;
    myIncidentRay2YStart    = obj1Y-obj1Len1+obj1Len2;
    myIncidentRay2YEnd      = obj1Y-obj1Len1+obj1Len2;
    myIncidentRay2ZStart    = obj1Z;
    myIncidentRay2ZEnd      = obj1Z;


    myIncidentRay3XDiff     = myConcaveMirrorRadius-Math.sqrt(myConcaveMirrorRadius*myConcaveMirrorRadius-obj1Len3*obj1Len3);

    myIncidentRay3XStart    = obj1X;
    myIncidentRay3XEnd      = myConcaveMirrorX+myConcaveMirrorRadius-myIncidentRay3XDiff;
    myIncidentRay3YStart    = obj1Y-obj1Len1+obj1Len3;
    myIncidentRay3YEnd      = obj1Y-obj1Len1+obj1Len3;
    myIncidentRay3ZStart    = obj1Z;
    myIncidentRay3ZEnd      = obj1Z;

    myPIncidentRay1XDiff     = myConcaveMirrorRadius-Math.sqrt(myConcaveMirrorRadius*myConcaveMirrorRadius-obj2Len1*obj2Len1);

    myPIncidentRay1XStart    = obj2X;
    myPIncidentRay1XEnd      = myConcaveMirrorX+myConcaveMirrorRadius-myPIncidentRay1XDiff;
    myPIncidentRay1YStart    = obj2Y;
    myPIncidentRay1YEnd      = obj2Y;
    myPIncidentRay1ZStart    = obj2Z;
    myPIncidentRay1ZEnd      = obj2Z;


    myPIncidentRay2XDiff     = myConcaveMirrorRadius-Math.sqrt(myConcaveMirrorRadius*myConcaveMirrorRadius-obj2Len2*obj2Len2);

    myPIncidentRay2XStart    = obj2X;
    myPIncidentRay2XEnd      = myConcaveMirrorX+myConcaveMirrorRadius-myPIncidentRay2XDiff;
    myPIncidentRay2YStart    = obj2Y+obj2Len1-obj2Len2;
    myPIncidentRay2YEnd      = obj2Y+obj2Len1-obj2Len2;
    myPIncidentRay2ZStart    = obj2Z;
    myPIncidentRay2ZEnd      = obj2Z;


    myPIncidentRay3XDiff     = myConcaveMirrorRadius-Math.sqrt(myConcaveMirrorRadius*myConcaveMirrorRadius-obj2Len3*obj2Len3);

    myPIncidentRay3XStart    = obj2X;
    myPIncidentRay3XEnd      = myConcaveMirrorX+myConcaveMirrorRadius-myPIncidentRay3XDiff;
    myPIncidentRay3YStart    = obj2Y+obj2Len1-obj2Len3;
    myPIncidentRay3YEnd      = obj2Y+obj2Len1-obj2Len3;
    myPIncidentRay3ZStart    = obj2Z;
    myPIncidentRay3ZEnd      = obj2Z;



    myReflectedRay1Slope    =(myIncidentRay1YEnd-myBallFY)/(myIncidentRay1XEnd-myBallFX);

    myReflectedRay1XStart   = myIncidentRay1XEnd;
    myReflectedRay1XEnd     = ballBLeft;
    myReflectedRay1YStart   = myIncidentRay1YEnd;
    myReflectedRay1YEnd     = myReflectedRay1Slope*(myReflectedRay1XEnd-myBallFX)+myBallFY;
    myReflectedRay1ZStart   = myIncidentRay1ZEnd;
    myReflectedRay1ZEnd     = myIncidentRay1ZEnd;

    myReflectedRay2Slope    =(myIncidentRay2YEnd-myBallFY)/(myIncidentRay2XEnd-myBallFX);

    myReflectedRay2XStart   = myIncidentRay2XEnd;
    myReflectedRay2XEnd     = ballBLeft;
    myReflectedRay2YStart   = myIncidentRay2YEnd;
    myReflectedRay2YEnd     = myReflectedRay2Slope*(myReflectedRay2XEnd-myBallFX)+myBallFY;
    myReflectedRay2ZStart   = myIncidentRay2ZEnd;
    myReflectedRay2ZEnd     = myIncidentRay2ZEnd;



    myReflectedRay3Slope    =(myIncidentRay3YEnd-myBallFY)/(myIncidentRay3XEnd-myBallFX);

    myReflectedRay3XStart   = myIncidentRay3XEnd;
    myReflectedRay3XEnd     = ballBLeft;
    myReflectedRay3YStart   = myIncidentRay3YEnd;
    myReflectedRay3YEnd     = myReflectedRay3Slope*(myReflectedRay3XEnd-myBallFX)+myBallFY;
    myReflectedRay3ZStart   = myIncidentRay3ZEnd;
    myReflectedRay3ZEnd     = myIncidentRay3ZEnd;

    myPReflectedRay1Slope    =(myPIncidentRay1YEnd-myBallFY)/(myPIncidentRay1XEnd-myBallFX);

    myPReflectedRay1XStart   = myPIncidentRay1XEnd;
    myPReflectedRay1XEnd     = ballBLeft;
    myPReflectedRay1YStart   = myPIncidentRay1YEnd;
    myPReflectedRay1YEnd     = myPReflectedRay1Slope*(myPReflectedRay1XEnd-myBallFX)+myBallFY;
    myPReflectedRay1ZStart   = myPIncidentRay1ZEnd;
    myPReflectedRay1ZEnd     = myPIncidentRay1ZEnd;

    myPReflectedRay2Slope    =(myPIncidentRay2YEnd-myBallFY)/(myPIncidentRay2XEnd-myBallFX);

    myPReflectedRay2XStart   = myPIncidentRay2XEnd;
    myPReflectedRay2XEnd     = ballBLeft;
    myPReflectedRay2YStart   = myPIncidentRay2YEnd;
    myPReflectedRay2YEnd     = myPReflectedRay2Slope*(myPReflectedRay2XEnd-myBallFX)+myBallFY;
    myPReflectedRay2ZStart   = myPIncidentRay2ZEnd;
    myPReflectedRay2ZEnd     = myPIncidentRay2ZEnd;



    myPReflectedRay3Slope    =(myPIncidentRay3YEnd-myBallFY)/(myPIncidentRay3XEnd-myBallFX);

    myPReflectedRay3XStart   = myPIncidentRay3XEnd;
    myPReflectedRay3XEnd     = ballBLeft;
    myPReflectedRay3YStart   = myPIncidentRay3YEnd;
    myPReflectedRay3YEnd     = myPReflectedRay3Slope*(myPReflectedRay3XEnd-myBallFX)+myBallFY;
    myPReflectedRay3ZStart   = myPIncidentRay3ZEnd;
    myPReflectedRay3ZEnd     = myPIncidentRay3ZEnd;


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
    vertArray.push( new THREE.Vector3(myPIncidentRay1XStart, myPIncidentRay1YStart, myPIncidentRay1ZStart), new THREE.Vector3(myPIncidentRay1XEnd, myPIncidentRay1YEnd, myPIncidentRay1ZEnd) );
    lineGeometry.computeLineDistances();
    myPIncidentRay1.geometry=lineGeometry;

    myPIncidentRay1.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPIncidentRay2XStart, myPIncidentRay2YStart, myPIncidentRay2ZStart), new THREE.Vector3(myPIncidentRay2XEnd, myPIncidentRay2YEnd, myPIncidentRay2ZEnd) );
    lineGeometry.computeLineDistances();
    myPIncidentRay2.geometry=lineGeometry;

    myPIncidentRay2.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPIncidentRay3XStart, myPIncidentRay3YStart, myPIncidentRay3ZStart), new THREE.Vector3(myPIncidentRay3XEnd, myPIncidentRay3YEnd, myPIncidentRay3ZEnd) );
    lineGeometry.computeLineDistances();
    myPIncidentRay3.geometry=lineGeometry;

    myPIncidentRay3.verticesNeedUpdate=true;


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

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPReflectedRay1XStart, myPReflectedRay1YStart, myPReflectedRay1ZStart), new THREE.Vector3(myPReflectedRay1XEnd, myPReflectedRay1YEnd, myPReflectedRay1ZEnd) );
    lineGeometry.computeLineDistances();
    myPReflectedRay1.geometry=lineGeometry;

    myPReflectedRay1.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPReflectedRay2XStart, myPReflectedRay2YStart, myPReflectedRay2ZStart), new THREE.Vector3(myPReflectedRay2XEnd, myPReflectedRay2YEnd, myPReflectedRay2ZEnd) );
    lineGeometry.computeLineDistances();
    myPReflectedRay2.geometry=lineGeometry;

    myPReflectedRay2.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPReflectedRay3XStart, myPReflectedRay3YStart, myPReflectedRay3ZStart), new THREE.Vector3(myPReflectedRay3XEnd, myPReflectedRay3YEnd, myPReflectedRay3ZEnd) );
    lineGeometry.computeLineDistances();
    myPReflectedRay3.geometry=lineGeometry;

    myPReflectedRay3.verticesNeedUpdate=true;

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


    myPIncidentRay1MidpointX     =   (myPIncidentRay1XEnd+myPIncidentRay1XStart)/2;
    myPIncidentRay1MidpointY     =   (myPIncidentRay1YEnd+myPIncidentRay1YStart)/2;

    myPIncidentRay1Slope=(myPIncidentRay1YEnd-myPIncidentRay1YStart)/(myPIncidentRay1XEnd-myPIncidentRay1XStart);

    myPIncidentRay1Arrow11Slope=(myPIncidentRay1Slope-1)/(1+myPIncidentRay1Slope);

    myPIncidentRay1Arrow12Slope=(myPIncidentRay1Slope+1)/(1-myPIncidentRay1Slope);

    multi2=1;
    if(myPIncidentRay1Slope>=1)
        multi2=-1;
    multi1=1;
    if(myPIncidentRay1Slope<=-1)
        multi1=-1;
    myPIncidentRay1Arrow11XStart =   myPIncidentRay1MidpointX-(multi1)*arrowLen*(1/Math.sqrt((myPIncidentRay1Arrow11Slope*myPIncidentRay1Arrow11Slope)+1));
    myPIncidentRay1Arrow11XEnd   =   myPIncidentRay1MidpointX;
    myPIncidentRay1Arrow11YStart =   myPIncidentRay1MidpointY-(multi1)*myPIncidentRay1Arrow11Slope*(arrowLen*(1/Math.sqrt((myPIncidentRay1Arrow11Slope*myPIncidentRay1Arrow11Slope)+1)));
    myPIncidentRay1Arrow11YEnd   =   myPIncidentRay1MidpointY;
    myPIncidentRay1Arrow11ZStart =   myPIncidentRay1ZStart;
    myPIncidentRay1Arrow11ZEnd   =   myPIncidentRay1ZEnd;


    myPIncidentRay1Arrow12XStart =   myPIncidentRay1MidpointX-(multi2)*arrowLen*(1/Math.sqrt((myPIncidentRay1Arrow12Slope*myPIncidentRay1Arrow12Slope)+1));
    myPIncidentRay1Arrow12XEnd   =   myPIncidentRay1MidpointX;
    myPIncidentRay1Arrow12YStart =   myPIncidentRay1MidpointY-(multi2)*myPIncidentRay1Arrow12Slope*(arrowLen*(1/Math.sqrt((myPIncidentRay1Arrow12Slope*myPIncidentRay1Arrow12Slope)+1)));
    myPIncidentRay1Arrow12YEnd   =   myPIncidentRay1MidpointY;
    myPIncidentRay1Arrow12ZStart =   myPIncidentRay1ZStart;
    myPIncidentRay1Arrow12ZEnd   =   myPIncidentRay1ZEnd;

    myPIncidentRay2MidpointX     =   (myPIncidentRay2XEnd+myPIncidentRay2XStart)/2;
    myPIncidentRay2MidpointY     =   (myPIncidentRay2YEnd+myPIncidentRay2YStart)/2;

    myPIncidentRay2Slope=(myPIncidentRay2YEnd-myPIncidentRay2YStart)/(myPIncidentRay2XEnd-myPIncidentRay2XStart);

    myPIncidentRay2Arrow11Slope=(myPIncidentRay2Slope-1)/(1+myPIncidentRay2Slope);

    myPIncidentRay2Arrow12Slope=(myPIncidentRay2Slope+1)/(1-myPIncidentRay2Slope);

    multi2=1;
    if(myPIncidentRay2Slope>=1)
        multi2=-1;
    multi1=1;
    if(myPIncidentRay2Slope<=-1)
        multi1=-1;

    myPIncidentRay2Arrow11XStart =   myPIncidentRay2MidpointX-(multi1)*arrowLen*(1/Math.sqrt((myPIncidentRay2Arrow11Slope*myPIncidentRay2Arrow11Slope)+1));
    myPIncidentRay2Arrow11XEnd   =   myPIncidentRay2MidpointX;
    myPIncidentRay2Arrow11YStart =   myPIncidentRay2MidpointY-(multi1)*myPIncidentRay2Arrow11Slope*(arrowLen*(1/Math.sqrt((myPIncidentRay2Arrow11Slope*myPIncidentRay2Arrow11Slope)+1)));
    myPIncidentRay2Arrow11YEnd   =   myPIncidentRay2MidpointY;
    myPIncidentRay2Arrow11ZStart =   myPIncidentRay2ZStart;
    myPIncidentRay2Arrow11ZEnd   =   myPIncidentRay2ZEnd;

    myPIncidentRay2Arrow12XStart =   myPIncidentRay2MidpointX-(multi2)*arrowLen*(1/Math.sqrt((myPIncidentRay2Arrow12Slope*myPIncidentRay2Arrow12Slope)+1));
    myPIncidentRay2Arrow12XEnd   =   myPIncidentRay2MidpointX;
    myPIncidentRay2Arrow12YStart =   myPIncidentRay2MidpointY-(multi2)*myPIncidentRay2Arrow12Slope*(arrowLen*(1/Math.sqrt((myPIncidentRay2Arrow12Slope*myPIncidentRay2Arrow12Slope)+1)));
    myPIncidentRay2Arrow12YEnd   =   myPIncidentRay2MidpointY;
    myPIncidentRay2Arrow12ZStart =   myPIncidentRay2ZStart;
    myPIncidentRay2Arrow12ZEnd   =   myPIncidentRay2ZEnd;

    myPIncidentRay3MidpointX     =   (myPIncidentRay3XEnd+myPIncidentRay3XStart)/2;
    myPIncidentRay3MidpointY     =   (myPIncidentRay3YEnd+myPIncidentRay3YStart)/2;

    myPIncidentRay3Slope=(myPIncidentRay3YEnd-myPIncidentRay3YStart)/(myPIncidentRay3XEnd-myPIncidentRay3XStart);

    myPIncidentRay3Arrow11Slope=(myPIncidentRay3Slope-1)/(1+myPIncidentRay3Slope);

    myPIncidentRay3Arrow12Slope=(myPIncidentRay3Slope+1)/(1-myPIncidentRay3Slope);

    multi2=1;
    if(myPIncidentRay3Slope>=1)
        multi2=-1;
    multi1=1;
    if(myPIncidentRay3Slope<=-1)
        multi1=-1;

    myPIncidentRay3Arrow11XStart =   myPIncidentRay3MidpointX-(multi1)*arrowLen*(1/Math.sqrt((myPIncidentRay3Arrow11Slope*myPIncidentRay3Arrow11Slope)+1));
    myPIncidentRay3Arrow11XEnd   =   myPIncidentRay3MidpointX;
    myPIncidentRay3Arrow11YStart =   myPIncidentRay3MidpointY-(multi1)*myPIncidentRay3Arrow11Slope*(arrowLen*(1/Math.sqrt((myPIncidentRay3Arrow11Slope*myPIncidentRay3Arrow11Slope)+1)));
    myPIncidentRay3Arrow11YEnd   =   myPIncidentRay3MidpointY;
    myPIncidentRay3Arrow11ZStart =   myPIncidentRay3ZStart;
    myPIncidentRay3Arrow11ZEnd   =   myPIncidentRay3ZEnd;

    myPIncidentRay3Arrow12XStart =   myPIncidentRay3MidpointX-(multi2)*arrowLen*(1/Math.sqrt((myPIncidentRay3Arrow12Slope*myPIncidentRay3Arrow12Slope)+1));
    myPIncidentRay3Arrow12XEnd   =   myPIncidentRay3MidpointX;
    myPIncidentRay3Arrow12YStart =   myPIncidentRay3MidpointY-(multi2)*myPIncidentRay3Arrow12Slope*(arrowLen*(1/Math.sqrt((myPIncidentRay3Arrow12Slope*myPIncidentRay3Arrow12Slope)+1)));
    myPIncidentRay3Arrow12YEnd   =   myPIncidentRay3MidpointY;
    myPIncidentRay3Arrow12ZStart =   myPIncidentRay3ZStart;
    myPIncidentRay3Arrow12ZEnd   =   myPIncidentRay3ZEnd;

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

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPIncidentRay1Arrow11XStart, myPIncidentRay1Arrow11YStart, myPIncidentRay1Arrow11ZStart), new THREE.Vector3(myPIncidentRay1Arrow11XEnd, myPIncidentRay1Arrow11YEnd, myPIncidentRay1Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    myPIncidentRay1Arrow11.geometry=lineGeometry;
    myPIncidentRay1Arrow11.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPIncidentRay1Arrow12XStart, myPIncidentRay1Arrow12YStart, myPIncidentRay1Arrow12ZStart), new THREE.Vector3(myPIncidentRay1Arrow12XEnd, myPIncidentRay1Arrow12YEnd, myPIncidentRay1Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    myPIncidentRay1Arrow12.geometry=lineGeometry;
    myPIncidentRay1Arrow12.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPIncidentRay2Arrow11XStart, myPIncidentRay2Arrow11YStart, myPIncidentRay2Arrow11ZStart), new THREE.Vector3(myPIncidentRay2Arrow11XEnd, myPIncidentRay2Arrow11YEnd, myPIncidentRay2Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    myPIncidentRay2Arrow11.geometry=lineGeometry;
    myPIncidentRay2Arrow11.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPIncidentRay2Arrow12XStart, myPIncidentRay2Arrow12YStart, myPIncidentRay2Arrow12ZStart), new THREE.Vector3(myPIncidentRay2Arrow12XEnd, myPIncidentRay2Arrow12YEnd, myPIncidentRay2Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    myPIncidentRay2Arrow12.geometry=lineGeometry;
    myPIncidentRay2Arrow12.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPIncidentRay3Arrow11XStart, myPIncidentRay3Arrow11YStart, myPIncidentRay3Arrow11ZStart), new THREE.Vector3(myPIncidentRay3Arrow11XEnd, myPIncidentRay3Arrow11YEnd, myPIncidentRay3Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    myPIncidentRay3Arrow11.geometry=lineGeometry;
    myPIncidentRay3Arrow11.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPIncidentRay3Arrow12XStart, myPIncidentRay3Arrow12YStart, myPIncidentRay3Arrow12ZStart), new THREE.Vector3(myPIncidentRay3Arrow12XEnd, myPIncidentRay3Arrow12YEnd, myPIncidentRay3Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    myPIncidentRay3Arrow12.geometry=lineGeometry;
    myPIncidentRay3Arrow12.verticesNeedUpdate=true;

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

    myReflectedRay2MidpointX     =   (myBallFX+myReflectedRay2XStart)/2;
    myReflectedRay2MidpointY     =   (myBallFY+myReflectedRay2YStart)/2;

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



    myReflectedRay3MidpointX     =   (myBallFX+myReflectedRay3XStart)/2;
    myReflectedRay3MidpointY     =   (myBallFY+myReflectedRay3YStart)/2;

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

    myPReflectedRay1MidpointX     =   (myBallFX+myPReflectedRay1XStart)/2;
    myPReflectedRay1MidpointY     =   (myBallFY+myPReflectedRay1YStart)/2;

    myPReflectedRay1Slope=(myPReflectedRay1YEnd-myPReflectedRay1YStart)/(myPReflectedRay1XEnd-myPReflectedRay1XStart);

    myPReflectedRay1Arrow11Slope=(myPReflectedRay1Slope-1)/(1+myPReflectedRay1Slope);

    myPReflectedRay1Arrow12Slope=(myPReflectedRay1Slope+1)/(1-myPReflectedRay1Slope);

    multi2=1;
    if(myPReflectedRay1Slope>=1)
        multi2=-1;
    multi1=1;
    if(myPReflectedRay1Slope<=-1)
        multi1=-1;
    myPReflectedRay1Arrow11XStart =   myPReflectedRay1MidpointX-(multi1)*arrowLen*(1/Math.sqrt((myPReflectedRay1Arrow11Slope*myPReflectedRay1Arrow11Slope)+1));
    myPReflectedRay1Arrow11XEnd   =   myPReflectedRay1MidpointX;
    myPReflectedRay1Arrow11YStart =   myPReflectedRay1MidpointY-(multi1)*myPReflectedRay1Arrow11Slope*(arrowLen*(1/Math.sqrt((myPReflectedRay1Arrow11Slope*myPReflectedRay1Arrow11Slope)+1)));
    myPReflectedRay1Arrow11YEnd   =   myPReflectedRay1MidpointY;
    myPReflectedRay1Arrow11ZStart =   myPReflectedRay1ZStart;
    myPReflectedRay1Arrow11ZEnd   =   myPReflectedRay1ZEnd;


    myPReflectedRay1Arrow12XStart =   myPReflectedRay1MidpointX-(multi2)*arrowLen*(1/Math.sqrt((myPReflectedRay1Arrow12Slope*myPReflectedRay1Arrow12Slope)+1));
    myPReflectedRay1Arrow12XEnd   =   myPReflectedRay1MidpointX;
    myPReflectedRay1Arrow12YStart =   myPReflectedRay1MidpointY-(multi2)*myPReflectedRay1Arrow12Slope*(arrowLen*(1/Math.sqrt((myPReflectedRay1Arrow12Slope*myPReflectedRay1Arrow12Slope)+1)));
    myPReflectedRay1Arrow12YEnd   =   myPReflectedRay1MidpointY;
    myPReflectedRay1Arrow12ZStart =   myPReflectedRay1ZStart;
    myPReflectedRay1Arrow12ZEnd   =   myPReflectedRay1ZEnd;

    myPReflectedRay2MidpointX     =   (myBallFX+myPReflectedRay2XStart)/2;
    myPReflectedRay2MidpointY     =   (myBallFY+myPReflectedRay2YStart)/2;

    myPReflectedRay2Slope=(myPReflectedRay2YEnd-myPReflectedRay2YStart)/(myPReflectedRay2XEnd-myPReflectedRay2XStart);

    myPReflectedRay2Arrow11Slope=(myPReflectedRay2Slope-1)/(1+myPReflectedRay2Slope);

    myPReflectedRay2Arrow12Slope=(myPReflectedRay2Slope+1)/(1-myPReflectedRay2Slope);

    multi2=1;
    if(myPReflectedRay2Slope>=1)
        multi2=-1;
    multi1=1;
    if(myPReflectedRay2Slope<=-1)
        multi1=-1;
    myPReflectedRay2Arrow11XStart =   myPReflectedRay2MidpointX-(multi1)*arrowLen*(1/Math.sqrt((myPReflectedRay2Arrow11Slope*myPReflectedRay2Arrow11Slope)+1));
    myPReflectedRay2Arrow11XEnd   =   myPReflectedRay2MidpointX;
    myPReflectedRay2Arrow11YStart =   myPReflectedRay2MidpointY-(multi1)*myPReflectedRay2Arrow11Slope*(arrowLen*(1/Math.sqrt((myPReflectedRay2Arrow11Slope*myPReflectedRay2Arrow11Slope)+1)));
    myPReflectedRay2Arrow11YEnd   =   myPReflectedRay2MidpointY;
    myPReflectedRay2Arrow11ZStart =   myPReflectedRay2ZStart;
    myPReflectedRay2Arrow11ZEnd   =   myPReflectedRay2ZEnd;


    myPReflectedRay2Arrow12XStart =   myPReflectedRay2MidpointX-(multi2)*arrowLen*(1/Math.sqrt((myPReflectedRay2Arrow12Slope*myPReflectedRay2Arrow12Slope)+1));
    myPReflectedRay2Arrow12XEnd   =   myPReflectedRay2MidpointX;
    myPReflectedRay2Arrow12YStart =   myPReflectedRay2MidpointY-(multi2)*myPReflectedRay2Arrow12Slope*(arrowLen*(1/Math.sqrt((myPReflectedRay2Arrow12Slope*myPReflectedRay2Arrow12Slope)+1)));
    myPReflectedRay2Arrow12YEnd   =   myPReflectedRay2MidpointY;
    myPReflectedRay2Arrow12ZStart =   myPReflectedRay2ZStart;
    myPReflectedRay2Arrow12ZEnd   =   myPReflectedRay2ZEnd;



    myPReflectedRay3MidpointX     =   (myBallFX+myPReflectedRay3XStart)/2;
    myPReflectedRay3MidpointY     =   (myBallFY+myPReflectedRay3YStart)/2;

    myPReflectedRay3Slope=(myPReflectedRay3YEnd-myPReflectedRay3YStart)/(myPReflectedRay3XEnd-myPReflectedRay3XStart);

    myPReflectedRay3Arrow11Slope=(myPReflectedRay3Slope-1)/(1+myPReflectedRay3Slope);

    myPReflectedRay3Arrow12Slope=(myPReflectedRay3Slope+1)/(1-myPReflectedRay3Slope);

    multi2=1;
    if(myPReflectedRay3Slope>=1)
        multi2=-1;
    multi1=1;
    if(myPReflectedRay3Slope<=-1)
        multi1=-1;
    myPReflectedRay3Arrow11XStart =   myPReflectedRay3MidpointX-(multi1)*arrowLen*(1/Math.sqrt((myPReflectedRay3Arrow11Slope*myPReflectedRay3Arrow11Slope)+1));
    myPReflectedRay3Arrow11XEnd   =   myPReflectedRay3MidpointX;
    myPReflectedRay3Arrow11YStart =   myPReflectedRay3MidpointY-(multi1)*myPReflectedRay3Arrow11Slope*(arrowLen*(1/Math.sqrt((myPReflectedRay3Arrow11Slope*myPReflectedRay3Arrow11Slope)+1)));
    myPReflectedRay3Arrow11YEnd   =   myPReflectedRay3MidpointY;
    myPReflectedRay3Arrow11ZStart =   myPReflectedRay3ZStart;
    myPReflectedRay3Arrow11ZEnd   =   myPReflectedRay3ZEnd;


    myPReflectedRay3Arrow12XStart =   myPReflectedRay3MidpointX-(multi2)*arrowLen*(1/Math.sqrt((myPReflectedRay3Arrow12Slope*myPReflectedRay3Arrow12Slope)+1));
    myPReflectedRay3Arrow12XEnd   =   myPReflectedRay3MidpointX;
    myPReflectedRay3Arrow12YStart =   myPReflectedRay3MidpointY-(multi2)*myPReflectedRay3Arrow12Slope*(arrowLen*(1/Math.sqrt((myPReflectedRay3Arrow12Slope*myPReflectedRay3Arrow12Slope)+1)));
    myPReflectedRay3Arrow12YEnd   =   myPReflectedRay3MidpointY;
    myPReflectedRay3Arrow12ZStart =   myPReflectedRay3ZStart;
    myPReflectedRay3Arrow12ZEnd   =   myPReflectedRay3ZEnd;
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

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPReflectedRay1Arrow11XStart, myPReflectedRay1Arrow11YStart, myPReflectedRay1Arrow11ZStart), new THREE.Vector3(myPReflectedRay1Arrow11XEnd, myPReflectedRay1Arrow11YEnd, myPReflectedRay1Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    myPReflectedRay1Arrow11.geometry=lineGeometry;
    myPReflectedRay1Arrow11.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPReflectedRay1Arrow12XStart, myPReflectedRay1Arrow12YStart, myPReflectedRay1Arrow12ZStart), new THREE.Vector3(myPReflectedRay1Arrow12XEnd, myPReflectedRay1Arrow12YEnd, myPReflectedRay1Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    myPReflectedRay1Arrow12.geometry=lineGeometry;
    myPReflectedRay1Arrow12.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPReflectedRay2Arrow11XStart, myPReflectedRay2Arrow11YStart, myPReflectedRay2Arrow11ZStart), new THREE.Vector3(myPReflectedRay2Arrow11XEnd, myPReflectedRay2Arrow11YEnd, myPReflectedRay2Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    myPReflectedRay2Arrow11.geometry=lineGeometry;
    myPReflectedRay2Arrow11.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPReflectedRay2Arrow12XStart, myPReflectedRay2Arrow12YStart, myPReflectedRay2Arrow12ZStart), new THREE.Vector3(myPReflectedRay2Arrow12XEnd, myPReflectedRay2Arrow12YEnd, myPReflectedRay2Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    myPReflectedRay2Arrow12.geometry=lineGeometry;
    myPReflectedRay2Arrow12.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPReflectedRay3Arrow11XStart, myPReflectedRay3Arrow11YStart, myPReflectedRay3Arrow11ZStart), new THREE.Vector3(myPReflectedRay3Arrow11XEnd, myPReflectedRay3Arrow11YEnd, myPReflectedRay3Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    myPReflectedRay3Arrow11.geometry=lineGeometry;
    myPReflectedRay3Arrow11.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPReflectedRay3Arrow12XStart, myPReflectedRay3Arrow12YStart, myPReflectedRay3Arrow12ZStart), new THREE.Vector3(myPReflectedRay3Arrow12XEnd, myPReflectedRay3Arrow12YEnd, myPReflectedRay3Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    myPReflectedRay3Arrow12.geometry=lineGeometry;
    myPReflectedRay3Arrow12.verticesNeedUpdate=true;


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


    PIEsetExperimentTitle("Reflection at a concave mirror");
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

   /* shapeText = document.createElement('div');
    shapeText.style.position = 'absolute';
    shapeText.style.zIndex = 0;
    shapeText.style.height='27%';
    shapeText.style.width = '180%';
    shapeText.style.color = "#0000ff";
    shapeText.style.textAlign = 'left';
    shapeText.style.display = 'block';
    shapeText.style.fontSize = 20 + 'px';
    shapeText.style.top = '15%';
    shapeText.style.left = '75%';
    document.body.appendChild(shapeText);
    shapeText.innerHTML = "Radius of Curvature = "+myConcaveMirrorRadius.toFixed(2);
    tROC=shapeText;

    shapeText = document.createElement('div');
    shapeText.style.position = 'absolute';
    shapeText.style.zIndex = 0;
    shapeText.style.height='27%';
    shapeText.style.width = '180%';
    shapeText.style.color = "#0000ff";
    shapeText.style.textAlign = 'left';
    shapeText.style.display = 'block';
    shapeText.style.fontSize = 20 + 'px';
    shapeText.style.top = '20%';
    shapeText.style.left = '75%';
    document.body.appendChild(shapeText);
    shapeText.innerHTML = "Focal Length(R/2) = "+(myConcaveMirrorRadius/2).toFixed(2);
    tFocalLen=shapeText;*/



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




    /*Incident Rays*/

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay1XStart, myIncidentRay1YStart, myIncidentRay1ZStart), new THREE.Vector3(myIncidentRay1XEnd, myIncidentRay1YEnd, myIncidentRay1ZEnd) );
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xa52a2a,linewidth: 2 } );
    myIncidentRay1 = new THREE.Line( lineGeometry, lineMaterial );

    PIEaddElement(myIncidentRay1);

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay2XStart, myIncidentRay2YStart, myIncidentRay2ZStart), new THREE.Vector3(myIncidentRay2XEnd, myIncidentRay2YEnd, myIncidentRay2ZEnd) );
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xE65100,linewidth: 2 } );
    myIncidentRay2 = new THREE.Line( lineGeometry, lineMaterial );

    PIEaddElement(myIncidentRay2);

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay3XStart, myIncidentRay3YStart, myIncidentRay3ZStart), new THREE.Vector3(myIncidentRay3XEnd, myIncidentRay3YEnd, myIncidentRay3ZEnd) );
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00dd00,linewidth: 2 } );
    myIncidentRay3 = new THREE.Line( lineGeometry, lineMaterial );

    PIEaddElement(myIncidentRay3);

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPIncidentRay1XStart, myPIncidentRay1YStart, myPIncidentRay1ZStart), new THREE.Vector3(myPIncidentRay1XEnd, myPIncidentRay1YEnd, myPIncidentRay1ZEnd) );
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xa52a2a,linewidth: 2 } );
    myPIncidentRay1 = new THREE.Line( lineGeometry, lineMaterial );

    PIEaddElement(myPIncidentRay1);

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPIncidentRay2XStart, myPIncidentRay2YStart, myPIncidentRay2ZStart), new THREE.Vector3(myPIncidentRay2XEnd, myPIncidentRay2YEnd, myPIncidentRay2ZEnd) );
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xE65100,linewidth: 2 } );
    myPIncidentRay2 = new THREE.Line( lineGeometry, lineMaterial );

    PIEaddElement(myPIncidentRay2);

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPIncidentRay3XStart, myPIncidentRay3YStart, myPIncidentRay3ZStart), new THREE.Vector3(myPIncidentRay3XEnd, myPIncidentRay3YEnd, myPIncidentRay3ZEnd) );
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00dd00,linewidth: 2 } );
    myPIncidentRay3 = new THREE.Line( lineGeometry, lineMaterial );

    PIEaddElement(myPIncidentRay3);




    /*Reflected Rays*/

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay1XStart, myReflectedRay1YStart, myReflectedRay1ZStart), new THREE.Vector3(myReflectedRay1XEnd, myReflectedRay1YEnd, myReflectedRay1ZEnd) );
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xa52a2a,linewidth: 2 } );
    myReflectedRay1 = new THREE.Line( lineGeometry, lineMaterial );

    PIEaddElement(myReflectedRay1);

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay2XStart, myReflectedRay2YStart, myReflectedRay2ZStart), new THREE.Vector3(myReflectedRay2XEnd, myReflectedRay2YEnd, myReflectedRay2ZEnd) );
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xE65100,linewidth: 2 } );
    myReflectedRay2 = new THREE.Line( lineGeometry, lineMaterial );

    PIEaddElement(myReflectedRay2);

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay3XStart, myReflectedRay3YStart, myReflectedRay3ZStart), new THREE.Vector3(myReflectedRay3XEnd, myReflectedRay3YEnd, myReflectedRay3ZEnd) );
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00dd00,linewidth: 2 } );
    myReflectedRay3 = new THREE.Line( lineGeometry, lineMaterial );

    PIEaddElement(myReflectedRay3);

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPReflectedRay1XStart, myPReflectedRay1YStart, myPReflectedRay1ZStart), new THREE.Vector3(myPReflectedRay1XEnd, myPReflectedRay1YEnd, myPReflectedRay1ZEnd) );
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xa52a2a,linewidth: 2 } );
    myPReflectedRay1 = new THREE.Line( lineGeometry, lineMaterial );

    PIEaddElement(myPReflectedRay1);

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPReflectedRay2XStart, myPReflectedRay2YStart, myPReflectedRay2ZStart), new THREE.Vector3(myPReflectedRay2XEnd, myPReflectedRay2YEnd, myPReflectedRay2ZEnd) );
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xE65100,linewidth: 2 } );
    myPReflectedRay2 = new THREE.Line( lineGeometry, lineMaterial );

    PIEaddElement(myPReflectedRay2);

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPReflectedRay3XStart, myPReflectedRay3YStart, myPReflectedRay3ZStart), new THREE.Vector3(myPReflectedRay3XEnd, myPReflectedRay3YEnd, myPReflectedRay3ZEnd) );
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00dd00,linewidth: 2 } );
    myPReflectedRay3 = new THREE.Line( lineGeometry, lineMaterial );

    PIEaddElement(myPReflectedRay3);




    /**Incident Arrows*/

    /*Create Ray 1 Arrow 1*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay1Arrow11XStart, myIncidentRay1Arrow11YStart, myIncidentRay1Arrow11ZStart), new THREE.Vector3(myIncidentRay1Arrow11XEnd, myIncidentRay1Arrow11YEnd, myIncidentRay1Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xa52a2a,linewidth: 2 } );
    myIncidentRay1Arrow11 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myIncidentRay1Arrow11);

    /*Create Ray 1 Arrow 2*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay1Arrow12XStart, myIncidentRay1Arrow12YStart, myIncidentRay1Arrow12ZStart), new THREE.Vector3(myIncidentRay1Arrow12XEnd, myIncidentRay1Arrow12YEnd, myIncidentRay1Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xa52a2a,linewidth: 2 } );
    myIncidentRay1Arrow12 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myIncidentRay1Arrow12);

    /*Create Ray 2 Arrow 1*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay2Arrow11XStart, myIncidentRay2Arrow11YStart, myIncidentRay2Arrow11ZStart), new THREE.Vector3(myIncidentRay2Arrow11XEnd, myIncidentRay2Arrow11YEnd, myIncidentRay2Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xE65100,linewidth: 2 } );
    myIncidentRay2Arrow11 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myIncidentRay2Arrow11);

    /*Create Ray 2 Arrow 2*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay2Arrow12XStart, myIncidentRay2Arrow12YStart, myIncidentRay2Arrow12ZStart), new THREE.Vector3(myIncidentRay2Arrow12XEnd, myIncidentRay2Arrow12YEnd, myIncidentRay2Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xE65100,linewidth: 2 } );
    myIncidentRay2Arrow12 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myIncidentRay2Arrow12);

    /*Create Ray 3 Arrow 1*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay3Arrow11XStart, myIncidentRay3Arrow11YStart, myIncidentRay3Arrow11ZStart), new THREE.Vector3(myIncidentRay3Arrow11XEnd, myIncidentRay3Arrow11YEnd, myIncidentRay3Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00dd00,linewidth: 2 } );
    myIncidentRay3Arrow11 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myIncidentRay3Arrow11);

    /*Create Ray 3 Arrow 2*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay3Arrow12XStart, myIncidentRay3Arrow12YStart, myIncidentRay3Arrow12ZStart), new THREE.Vector3(myIncidentRay3Arrow12XEnd, myIncidentRay3Arrow12YEnd, myIncidentRay3Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00dd00,linewidth: 2 } );
    myIncidentRay3Arrow12 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myIncidentRay3Arrow12);

    /*Create Ray 1 Arrow 1*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPIncidentRay1Arrow11XStart, myPIncidentRay1Arrow11YStart, myPIncidentRay1Arrow11ZStart), new THREE.Vector3(myPIncidentRay1Arrow11XEnd, myPIncidentRay1Arrow11YEnd, myPIncidentRay1Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xa52a2a,linewidth: 2 } );
    myPIncidentRay1Arrow11 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myPIncidentRay1Arrow11);

    /*Create Ray 1 Arrow 2*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPIncidentRay1Arrow12XStart, myPIncidentRay1Arrow12YStart, myPIncidentRay1Arrow12ZStart), new THREE.Vector3(myPIncidentRay1Arrow12XEnd, myPIncidentRay1Arrow12YEnd, myPIncidentRay1Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xa52a2a,linewidth: 2 } );
    myPIncidentRay1Arrow12 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myPIncidentRay1Arrow12);

    /*Create Ray 2 Arrow 1*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPIncidentRay2Arrow11XStart, myPIncidentRay2Arrow11YStart, myPIncidentRay2Arrow11ZStart), new THREE.Vector3(myPIncidentRay2Arrow11XEnd, myPIncidentRay2Arrow11YEnd, myPIncidentRay2Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xE65100,linewidth: 2 } );
    myPIncidentRay2Arrow11 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myPIncidentRay2Arrow11);

    /*Create Ray 2 Arrow 2*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPIncidentRay2Arrow12XStart, myPIncidentRay2Arrow12YStart, myPIncidentRay2Arrow12ZStart), new THREE.Vector3(myPIncidentRay2Arrow12XEnd, myPIncidentRay2Arrow12YEnd, myPIncidentRay2Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xE65100,linewidth: 2 } );
    myPIncidentRay2Arrow12 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myPIncidentRay2Arrow12);

    /*Create Ray 3 Arrow 1*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPIncidentRay3Arrow11XStart, myPIncidentRay3Arrow11YStart, myPIncidentRay3Arrow11ZStart), new THREE.Vector3(myPIncidentRay3Arrow11XEnd, myPIncidentRay3Arrow11YEnd, myPIncidentRay3Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00dd00,linewidth: 2 } );
    myPIncidentRay3Arrow11 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myPIncidentRay3Arrow11);

    /*Create Ray 3 Arrow 2*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPIncidentRay3Arrow12XStart, myPIncidentRay3Arrow12YStart, myPIncidentRay3Arrow12ZStart), new THREE.Vector3(myPIncidentRay3Arrow12XEnd, myPIncidentRay3Arrow12YEnd, myPIncidentRay3Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00dd00,linewidth: 2 } );
    myPIncidentRay3Arrow12 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myPIncidentRay3Arrow12);


    /*Create RRay 1 Arrow 1*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay1Arrow11XStart, myReflectedRay1Arrow11YStart, myReflectedRay1Arrow11ZStart), new THREE.Vector3(myReflectedRay1Arrow11XEnd, myReflectedRay1Arrow11YEnd, myReflectedRay1Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xa52a2a,linewidth: 2 } );
    myReflectedRay1Arrow11 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myReflectedRay1Arrow11);

    /*Create RRay 1 Arrow 2*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay1Arrow12XStart, myReflectedRay1Arrow12YStart, myReflectedRay1Arrow12ZStart), new THREE.Vector3(myReflectedRay1Arrow12XEnd, myReflectedRay1Arrow12YEnd, myReflectedRay1Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xa52a2a,linewidth: 2 } );
    myReflectedRay1Arrow12 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myReflectedRay1Arrow12);

    /*Create RRay 2 Arrow 1*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay2Arrow11XStart, myReflectedRay2Arrow11YStart, myReflectedRay2Arrow11ZStart), new THREE.Vector3(myReflectedRay2Arrow11XEnd, myReflectedRay2Arrow11YEnd, myReflectedRay2Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xE65100,linewidth: 2 } );
    myReflectedRay2Arrow11 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myReflectedRay2Arrow11);

    /*Create RRay 2 Arrow 2*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay2Arrow12XStart, myReflectedRay2Arrow12YStart, myReflectedRay2Arrow12ZStart), new THREE.Vector3(myReflectedRay2Arrow12XEnd, myReflectedRay2Arrow12YEnd, myReflectedRay2Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xE65100,linewidth: 2 } );
    myReflectedRay2Arrow12 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myReflectedRay2Arrow12);

    /*Create RRay 3 Arrow 1*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay3Arrow11XStart, myReflectedRay3Arrow11YStart, myReflectedRay3Arrow11ZStart), new THREE.Vector3(myReflectedRay3Arrow11XEnd, myReflectedRay3Arrow11YEnd, myReflectedRay3Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00dd00,linewidth: 2 } );
    myReflectedRay3Arrow11 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myReflectedRay3Arrow11);

    /*Create RRay 3 Arrow 2*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay3Arrow12XStart, myReflectedRay3Arrow12YStart, myReflectedRay3Arrow12ZStart), new THREE.Vector3(myReflectedRay3Arrow12XEnd, myReflectedRay3Arrow12YEnd, myReflectedRay3Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00dd00,linewidth: 2 } );
    myReflectedRay3Arrow12 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myReflectedRay3Arrow12);

    /*Create RRay 1 Arrow 1*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPReflectedRay1Arrow11XStart, myPReflectedRay1Arrow11YStart, myPReflectedRay1Arrow11ZStart), new THREE.Vector3(myPReflectedRay1Arrow11XEnd, myPReflectedRay1Arrow11YEnd, myPReflectedRay1Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xa52a2a,linewidth: 2 } );
    myPReflectedRay1Arrow11 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myPReflectedRay1Arrow11);

    /*Create RRay 1 Arrow 2*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPReflectedRay1Arrow12XStart, myPReflectedRay1Arrow12YStart, myPReflectedRay1Arrow12ZStart), new THREE.Vector3(myPReflectedRay1Arrow12XEnd, myPReflectedRay1Arrow12YEnd, myPReflectedRay1Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xa52a2a,linewidth: 2 } );
    myPReflectedRay1Arrow12 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myPReflectedRay1Arrow12);

    /*Create RRay 2 Arrow 1*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPReflectedRay2Arrow11XStart, myPReflectedRay2Arrow11YStart, myPReflectedRay2Arrow11ZStart), new THREE.Vector3(myPReflectedRay2Arrow11XEnd, myPReflectedRay2Arrow11YEnd, myPReflectedRay2Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xE65100,linewidth: 2 } );
    myPReflectedRay2Arrow11 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myPReflectedRay2Arrow11);

    /*Create RRay 2 Arrow 2*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPReflectedRay2Arrow12XStart, myPReflectedRay2Arrow12YStart, myPReflectedRay2Arrow12ZStart), new THREE.Vector3(myPReflectedRay2Arrow12XEnd, myPReflectedRay2Arrow12YEnd, myPReflectedRay2Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xE65100,linewidth: 2 } );
    myPReflectedRay2Arrow12 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myPReflectedRay2Arrow12);

    /*Create RRay 3 Arrow 1*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPReflectedRay3Arrow11XStart, myPReflectedRay3Arrow11YStart, myPReflectedRay3Arrow11ZStart), new THREE.Vector3(myPReflectedRay3Arrow11XEnd, myPReflectedRay3Arrow11YEnd, myPReflectedRay3Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00dd00,linewidth: 2 } );
    myPReflectedRay3Arrow11 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myPReflectedRay3Arrow11);

    /*Create RRay 3 Arrow 2*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPReflectedRay3Arrow12XStart, myPReflectedRay3Arrow12YStart, myPReflectedRay3Arrow12ZStart), new THREE.Vector3(myPReflectedRay3Arrow12XEnd, myPReflectedRay3Arrow12YEnd, myPReflectedRay3Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00dd00,linewidth: 2 } );
    myPReflectedRay3Arrow12 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myPReflectedRay3Arrow12);





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

    geometry = new THREE.BoxGeometry( mySceneW * 2, 5*wallThickness, 0.000001);
    material = new THREE.MeshLambertMaterial( {color: 0xFFE57F} );
    myRoof  = new THREE.Mesh( geometry, material );
    // myFloor.lookAt(new THREE.Vector3(0,1,0));
    myRoof.position.set(myCenterX, topB ,myAllZ);

    PIEaddElement(myRoof);



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
    updateRayVariables();
    updateIncidentArrows();
    updateReflectedArrows();

    myBallF.position.set(myBallFX,myBallFY,myBallFZ);



    PIEchangeInputSlider(mirrorRad,defaultRad);
    PIEchangeInputText(focalLength,myConcaveMirrorRadius/2);
    hideEle();

    //tROC.innerHTML = "Radius of Curvature = "+myConcaveMirrorRadius.toFixed(2);
    //tFocalLen.innerHTML = "Focal Length(R/2) = "+(myConcaveMirrorRadius/2).toFixed(2);
}

/******************* End of Reset Experiment1 code ***********************/

/******************* Update (animation changes) code ***********************/

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

    myPIncidentRay1.visible=false;
    myPIncidentRay1Arrow11.visible=false;
    myPIncidentRay1Arrow12.visible=false;
    myPIncidentRay2.visible=false;
    myPIncidentRay2Arrow11.visible=false;
    myPIncidentRay2Arrow12.visible=false;
    myPIncidentRay3.visible=false;
    myPIncidentRay3Arrow11.visible=false;
    myPIncidentRay3Arrow12.visible=false;

    myPReflectedRay1.visible=false;
    myPReflectedRay1Arrow11.visible=false;
    myPReflectedRay1Arrow12.visible=false;
    myPReflectedRay2.visible=false;
    myPReflectedRay2Arrow11.visible=false;
    myPReflectedRay2Arrow12.visible=false;
    myPReflectedRay3.visible=false;
    myPReflectedRay3Arrow11.visible=false;
    myPReflectedRay3Arrow12.visible=false;

    con=1;
}
function updateExperimentElements(t, dt)
{
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
        dl=len/500;
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
        dl=len/500;
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
    else if(con<=700)
    {
        myReflectedRay3Arrow11.visible = true;
        myReflectedRay3Arrow12.visible = true;

        x1=myPIncidentRay1XStart;
        x2=myPIncidentRay1XEnd;
        y1=myPIncidentRay1YStart;
        y2=myPIncidentRay1YEnd;

        len=Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
        m=(y2-y1)/(x2-x1);
        dl=len/100;
        k=con-600;
        x3=x1+(k*dl)/(Math.sqrt(m*m+1));
        y3=m*(x3-x1)+y1;
        lineGeometry = new THREE.Geometry();
        vertArray = lineGeometry.vertices;
        vertArray.push( new THREE.Vector3(x1, y1, myAllZ), new THREE.Vector3(x3, y3, myAllZ));
        lineGeometry.computeLineDistances();

        myPIncidentRay1.geometry=lineGeometry;
        myPIncidentRay1.verticesNeedUpdate=true;

        k=k+1;
        x3=x1+(k*dl)/(Math.sqrt(m*m+1));
        myPIncidentRay1.visible=true;


    }
    else if(con<=800)
    {

        myPIncidentRay1Arrow11.visible = true;
        myPIncidentRay1Arrow12.visible = true;

        x1=myPReflectedRay1XStart;
        x2=myPReflectedRay1XEnd;
        y1=myPReflectedRay1YStart;
        y2=myPReflectedRay1YEnd;

        len=Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
        m=(y2-y1)/(x2-x1);
        dl=len/500;
        k=con-700;
        x3=x1-(k*dl)/(Math.sqrt(m*m+1));
        y3=m*(x3-x1)+y1;
        lineGeometry = new THREE.Geometry();
        vertArray = lineGeometry.vertices;
        vertArray.push( new THREE.Vector3(x1, y1, myAllZ), new THREE.Vector3(x3, y3, myAllZ));
        lineGeometry.computeLineDistances();

        myPReflectedRay1.geometry=lineGeometry;
        myPReflectedRay1.verticesNeedUpdate=true;

        myPReflectedRay1.visible=true;

    }
    else if(con<=900)
    {
        myPReflectedRay1Arrow11.visible = true;
        myPReflectedRay1Arrow12.visible = true;

        x1=myPIncidentRay2XStart;
        x2=myPIncidentRay2XEnd;
        y1=myPIncidentRay2YStart;
        y2=myPIncidentRay2YEnd;

        len=Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
        m=(y2-y1)/(x2-x1);
        dl=len/100;
        k=con-800;
        x3=x1+(k*dl)/(Math.sqrt(m*m+1));
        y3=m*(x3-x1)+y1;
        lineGeometry = new THREE.Geometry();
        vertArray = lineGeometry.vertices;
        vertArray.push( new THREE.Vector3(x1, y1, myAllZ), new THREE.Vector3(x3, y3, myAllZ));
        lineGeometry.computeLineDistances();

        myPIncidentRay2.geometry=lineGeometry;
        myPIncidentRay2.verticesNeedUpdate=true;

        k=k+1;
        x3=x1+(k*dl)/(Math.sqrt(m*m+1));
        myPIncidentRay2.visible=true;
    }
    else  if(con<=1000){

        myPIncidentRay2Arrow11.visible = true;
        myPIncidentRay2Arrow12.visible = true;

        x1=myPReflectedRay2XStart;
        x2=myPReflectedRay2XEnd;
        y1=myPReflectedRay2YStart;
        y2=myPReflectedRay2YEnd;

        len=Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
        m=(y2-y1)/(x2-x1);
        dl=len/500;
        k=con-900;
        x3=x1-(k*dl)/(Math.sqrt(m*m+1));
        y3=m*(x3-x1)+y1;
        lineGeometry = new THREE.Geometry();
        vertArray = lineGeometry.vertices;
        vertArray.push( new THREE.Vector3(x1, y1, myAllZ), new THREE.Vector3(x3, y3, myAllZ));
        lineGeometry.computeLineDistances();

        myPReflectedRay2.geometry=lineGeometry;
        myPReflectedRay2.verticesNeedUpdate=true;

        myPReflectedRay2.visible=true;

    }
    else if(con<=1100){
        myPReflectedRay2Arrow11.visible = true;
        myPReflectedRay2Arrow12.visible = true;

        x1=myPIncidentRay3XStart;
        x2=myPIncidentRay3XEnd;
        y1=myPIncidentRay3YStart;
        y2=myPIncidentRay3YEnd;

        len=Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
        m=(y2-y1)/(x2-x1);
        dl=len/100;
        k=con-1000;
        x3=x1+(k*dl)/(Math.sqrt(m*m+1));
        y3=m*(x3-x1)+y1;
        lineGeometry = new THREE.Geometry();
        vertArray = lineGeometry.vertices;
        vertArray.push( new THREE.Vector3(x1, y1, myAllZ), new THREE.Vector3(x3, y3, myAllZ));
        lineGeometry.computeLineDistances();

        myPIncidentRay3.geometry=lineGeometry;
        myPIncidentRay3.verticesNeedUpdate=true;

        k=k+1;
        x3=x1+(k*dl)/(Math.sqrt(m*m+1));
        myPIncidentRay3.visible=true;
    }
    else if(con<=1200)
    {
        myPIncidentRay3Arrow11.visible = true;
        myPIncidentRay3Arrow12.visible = true;

        x1=myPReflectedRay3XStart;
        x2=myPReflectedRay3XEnd;
        y1=myPReflectedRay3YStart;
        y2=myPReflectedRay3YEnd;

        len=Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
        m=(y2-y1)/(x2-x1);
        dl=len/500;
        k=con-1100;
        x3=x1-(k*dl)/(Math.sqrt(m*m+1));
        y3=m*(x3-x1)+y1;
        lineGeometry = new THREE.Geometry();
        vertArray = lineGeometry.vertices;
        vertArray.push( new THREE.Vector3(x1, y1, myAllZ), new THREE.Vector3(x3, y3, myAllZ));
        lineGeometry.computeLineDistances();

        myPReflectedRay3.geometry=lineGeometry;
        myPReflectedRay3.verticesNeedUpdate=true;

        myPReflectedRay3.visible=true;
    }
    else if(con==1201)
    {
        myPReflectedRay3Arrow11.visible = true;
        myPReflectedRay3Arrow12.visible = true;
    }


    con++;
}

/******************* Update (animation changes) code ***********************/
var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Reflection at a Concave Mirror</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>This experiment focuses on Reflection at a Concave Mirror</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>User can also change the radius of curvature of concave mirror</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The controls has \"Curvature-Radius\" which is Radius of Curvature of mirror.The slider lets you change the Radius of the spherical mirror.</p>";
    helpContent = helpContent + "<p>On pressing the start button you will be able to see each ray being drawn and also able to see how these rays are reflected from the concave mirror following the Snell's Law.</p>";

    helpContent = helpContent + "<p>BROWN,ORANGE,LIGHT GREEN are incident rays,  reflected rays obtained are in same color as incident rays .</p>";
    helpContent = helpContent + "<p>LIME coloured ball indicates focal point and DARK GREEN colored ball indicates Radius of Curvature or 2F</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Reflection at a Concave Mirror</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>This experiment focuses on Reflection at a Concave Mirror</p>";
    infoContent = infoContent + "<h3>Image formation by a Concave Mirror</h3>";
    infoContent = infoContent + "<p>Image is formed in a concave mirror when the reflected rays actually meet in front of the mirror if object is placed at a distance more than focal length.This point of intersection gives us the idea about formaton of the image." +
                                "If the object is point object then image is obtained at this point else the image is formed around that point of intersection. " +
                                "Image formed by Concave mirror is real if object is at a distance greater than focal length from the mirror, Size of image depends on the distance of object from mirror.</p>";
    infoContent = infoContent + "<p>Here we can see that parellel rays are incident on the mirror which are then reflected (following snell's law) such that they converge at a point known as focal point .</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}