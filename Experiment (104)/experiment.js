/* Global Variables */
/* the developer should define variables and constants here */
/* We define a room with 3 walls, floor and ceiling */
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
var backB=-6.0;         /* Back Barrier */
var wallThickness;      /* Wall Thickness */

/* Room Objects */
var myFloor;            /* Floor */
var myCeiling;          /* Ceiling */
var myBack;             /* Back */
var myRight;            /* Right */
var myLeft;             /* Left */

var myAllZ;             /*Z position for objects*/

/*Object Ball*/

var myObjectBall;
var myObjectBallRadius;
var myObjectBallX;
var myObjectBallY;
var myObjectBallZ;

var ballLeftB;
var ballRightB;
var ballTopB;
var ballBottomB;

/*MyRayBalls*/

var myRayBall1;
var myRayBall1Radius;
var myRayBall1X;
var myRayBall1Y;
var myRayBall1Z;

var myRayBall2;
var myRayBall2Radius;
var myRayBall2X;
var myRayBall2Y;
var myRayBall2Z;

/*MyIncidentRays*/

var myIncidentRay1;
var myIncidentRay1XStart;
var myIncidentRay1YStart;
var myIncidentRay1ZStart;
var myIncidentRay1XEnd;
var myIncidentRay1YEnd;
var myIncidentRay1ZEnd;



var myIncidentRay2;
var myIncidentRay2XStart;
var myIncidentRay2YStart;
var myIncidentRay2ZStart;
var myIncidentRay2XEnd;
var myIncidentRay2YEnd;
var myIncidentRay2ZEnd;

var myIncidentRay1MidpointX;
var myIncidentRay1MidpointY;

var myIncidentRay1Slope;

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
var myIncidentRay1Arrow12Slope

var myIncidentRay2MidpointX;
var myIncidentRay2MidpointY;

var myIncidentRay2Slope;

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







/*MyReflectedRays*/

var myReflectedRay1;
var myReflectedRay1XStart;
var myReflectedRay1XEnd;
var myReflectedRay1YStart;
var myReflectedRay1YEnd;
var myReflectedRay1ZStart;
var myReflectedRay1ZEnd;

var myReflectedRay2;
var myReflectedRay2XStart;
var myReflectedRay2XEnd;
var myReflectedRay2YStart;
var myReflectedRay2YEnd;
var myReflectedRay2ZStart;
var myReflectedRay2ZEnd;

var myReflectedRay1MidpointX;
var myReflectedRay1MidpointY;

var myReflectedRay1Slope;

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

var myReflectedRay2Slope;

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



/*MyRetracedRays*/

var myRetracedRay1;
var myRetracedRay1XStart;
var myRetracedRay1XEnd;
var myRetracedRay1YStart;
var myRetracedRay1YEnd;
var myRetracedRay1ZStart;
var myRetracedRay1ZEnd;

var myRetracedRay2;
var myRetracedRay2XStart;
var myRetracedRay2XEnd;
var myRetracedRay2YStart;
var myRetracedRay2YEnd;
var myRetracedRay2ZStart;
var myRetracedRay2ZEnd;

/*Normals*/

var myNormal1;
var myNormal1XStart;
var myNormal1XEnd;
var myNormal1YStart;
var myNormal1YEnd;
var myNormal1ZStart;
var myNormal1ZEnd;

var myNormal2;
var myNormal2XStart;
var myNormal2XEnd;
var myNormal2YStart;
var myNormal2YEnd;
var myNormal2ZStart;
var myNormal2ZEnd;


/*My Mirror*/

var myPlaneMirror;
var myPlaneMirrorPolish;

var myPlaneMirrorZ;
var myPlaneMirrorX;
var myPlaneMirrorYStart;
var myPlaneMirrorYEnd;

/*Angles*/

var myIncidenceAngleR1;
var myReflectionAngleR1;
var myIncidenceAngleR2;
var myReflectionAngleR2;


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


function myObjectBallDrag(element,newpos)
 {
     myNormal1.visible=false;
     myNormal2.visible=false;

     myReflectedRay1.visible=false;
     myReflectedRay2.visible=false;

     myRetracedRay1.visible=false;
     myRetracedRay2.visible=false;

     myReflectedRay1Arrow11.visible=false;
     myReflectedRay1Arrow12.visible=false;

     myReflectedRay2Arrow11.visible=false;
     myReflectedRay2Arrow12.visible=false;

     myObjectBallX = newpos.x;
     if (newpos.x < (ballLeftB + myObjectBallRadius)) {
         myObjectBallX = (ballLeftB + myObjectBallRadius);
     }
     else if (newpos.x > (ballRightB - 3*myObjectBallRadius)) {
         myObjectBallX = (ballRightB - 3*myObjectBallRadius);

         updateNormals();

         myNormal1.visible=true;
         myNormal2.visible=true;

         updateReflectedRays();

         myReflectedRay1.visible=true;
         myReflectedRay2.visible=true;

         updateRetracedRays();

         myRetracedRay1.visible=true;
         myRetracedRay2.visible=true;

         updateReflectedArrows();

         myReflectedRay1Arrow11.visible=true;
         myReflectedRay1Arrow12.visible=true;

         myReflectedRay2Arrow11.visible=true;
         myReflectedRay2Arrow12.visible=true;

     }
     myObjectBallY = newpos.y;
     if (newpos.y < (ballBottomB + myObjectBallRadius)) {
         myObjectBallY = (ballBottomB + myObjectBallRadius);
     }
     else if (newpos.y > (ballTopB - myObjectBallRadius)) {
         myObjectBallY = (ballTopB  - myObjectBallRadius);
     }
     myObjectBallZ = newpos.z;

     myObjectBall.position.set(myObjectBallX, myObjectBallY, myObjectBallZ);


     myRayBall1X                 =   myObjectBallX+3*myObjectBallRadius;
     myRayBall1Y                 =   myObjectBallY+myObjectBallRadius;

     myRayBall2X                 =   myObjectBallX+3*myObjectBallRadius;
     myRayBall2Y                 =   myObjectBallY-myObjectBallRadius;


     myRayBall1.position.set(myRayBall1X,myRayBall1Y,myRayBall1Z);
     myRayBall2.position.set(myRayBall2X,myRayBall2Y,myRayBall2Z);

     updateIncidentRays();
     updateIncidentArrows();

 }

function myRayBall1Drag(element,newpos)
{
    myNormal1.visible=false;

    myReflectedRay1.visible=false;

    myRetracedRay1.visible=false;

    myReflectedRay1Arrow11.visible=false;
    myReflectedRay1Arrow12.visible=false;



    myRayBall1X = newpos.x;
    if (newpos.x < (myObjectBallX + 4*myRayBall1Radius)) {
        myRayBall1X = (myObjectBallX + 4*myRayBall1Radius)
    }
    else if (newpos.x > (ballRightB )) {
        myRayBall1X = (ballRightB );

        updateNormals();
        myNormal1.visible=true;

        updateReflectedRays();
        myReflectedRay1.visible=true;

        updateRetracedRays();

        myRetracedRay1.visible=true;

        updateReflectedArrows();

        myReflectedRay1Arrow11.visible=true;
        myReflectedRay1Arrow12.visible=true;

    }
    myRayBall1Y = newpos.y;
    if (newpos.y < (ballBottomB + myRayBall1Radius)) {
        myRayBall1Y = (ballBottomB + myRayBall1Radius);
    }
    else if (newpos.y > (ballTopB - myRayBall1Radius)) {
        myRayBall1Y = (ballTopB  - myRayBall1Radius);
    }
    myRayBall1Z = newpos.z;

    myRayBall1.position.set(myRayBall1X, myRayBall1Y, myRayBall1Z);

    updateIncidentRays();
    updateIncidentArrows();


}
function myRayBall2Drag(element,newpos)
{
    myNormal2.visible=false;

    myReflectedRay2.visible=false;

    myRetracedRay2.visible=false;

    myReflectedRay2Arrow11.visible=false;
    myReflectedRay2Arrow12.visible=false;

    myRayBall2X = newpos.x;
    if (newpos.x < (myObjectBallX + 4*myRayBall2Radius)) {
        myRayBall2X = (myObjectBallX + 4*myRayBall2Radius)
    }
    else if (newpos.x > (ballRightB )) {
        myRayBall2X = (ballRightB )

        updateNormals();
        myNormal2.visible=true;

        updateReflectedRays();
        myReflectedRay2.visible=true;

        updateRetracedRays();

        myRetracedRay2.visible=true;

        updateReflectedArrows();

        myReflectedRay2Arrow11.visible=true;
        myReflectedRay2Arrow12.visible=true;
    }
    myRayBall2Y = newpos.y;
    if (newpos.y < (ballBottomB + myRayBall2Radius)) {
        myRayBall2Y = (ballBottomB + myRayBall2Radius);
    }
    else if (newpos.y > (ballTopB - myRayBall2Radius)) {
        myRayBall2Y = (ballTopB  - myRayBall2Radius);
    }
    myRayBall2Z = newpos.z;

    myRayBall2.position.set(myRayBall2X, myRayBall2Y, myRayBall2Z);

    updateIncidentRays();
    updateIncidentArrows();


}





/******************* End of Interaction functions ***********************/

/******************* GUI control objects code ***********************/



var angleOfIncidenceR1;
var angleOfReflectionR1;

var angleOfIncidenceR2;
var angleOfReflectionR2;

function resetControlVariables() {

    PIEchangeInputText(angleOfIncidenceR1, 0);
    PIEchangeInputText(angleOfReflectionR1,0);
    PIEchangeInputText(angleOfIncidenceR2, 0);
    PIEchangeInputText(angleOfReflectionR2, 0 );



}

function calculateAndUpdateAngles(){

    var opp1=Math.abs(myIncidentRay1YStart-myIncidentRay1YEnd);
    var adj1=Math.abs(myIncidentRay1XStart-myIncidentRay1XEnd);

    var opp2=Math.abs(myIncidentRay2YStart-myIncidentRay2YEnd);
    var adj2=Math.abs(myIncidentRay2XStart-myIncidentRay2XEnd);

    myIncidenceAngleR1=Math.atan(opp1/adj1)*180/3.14;
    myReflectionAngleR1=myIncidenceAngleR1;

    myIncidenceAngleR2=Math.atan(opp2/adj2)*180/3.14;
    myReflectionAngleR2=myIncidenceAngleR2;

    PIEchangeInputText(angleOfIncidenceR1, myIncidenceAngleR1);
    PIEchangeInputText(angleOfReflectionR1,myReflectionAngleR1);
    PIEchangeInputText(angleOfIncidenceR2, myIncidenceAngleR2);
    PIEchangeInputText(angleOfReflectionR2, myReflectionAngleR2 );

}
function initializeControlVariables()
{

    angleOfIncidenceR1="A.O.I for Ray 1";
    angleOfReflectionR1="A.O.R for Ray 1";

    angleOfIncidenceR2="A.O.I for Ray 2";
    angleOfReflectionR2="A.O.R for Ray 2";


}

function initialiseControls()
{
    initializeControlVariables();
    /* Create Input Panel */

    PIEaddInputText(angleOfIncidenceR1, 0);
    PIEaddInputText(angleOfReflectionR1,0);
    PIEaddInputText(angleOfIncidenceR2, 0);
    PIEaddInputText(angleOfReflectionR2, 0 );



}
function updateNormals()
{

    myNormal1YStart             =   myRayBall1Y;
    myNormal1YEnd               =   myRayBall1Y;

    myNormal2YStart             =   myRayBall2Y;
    myNormal2YEnd               =   myRayBall2Y;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myNormal1XStart, myNormal1YStart, myNormal1ZStart), new THREE.Vector3(myNormal1XEnd, myNormal1YEnd, myNormal1ZEnd) );
    lineGeometry.computeLineDistances();
    myNormal1.geometry = lineGeometry;
    myNormal1.verticesNeedUpdate=true;



    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myNormal2XStart, myNormal2YStart, myNormal2ZStart), new THREE.Vector3(myNormal2XEnd, myNormal2YEnd, myNormal2ZEnd) );
    lineGeometry.computeLineDistances();
    myNormal2.geometry = lineGeometry;
    myNormal2.verticesNeedUpdate=true;

    calculateAndUpdateAngles();
}

function updateReflectedRays()
{

    myReflectedRay1XStart               =   myIncidentRay1XEnd;
    myReflectedRay1XEnd                 =   myIncidentRay1XStart;
    myReflectedRay1YStart               =   myIncidentRay1YEnd;
    myReflectedRay1YEnd                 =   2*myNormal1YStart-myIncidentRay1YStart;
    myReflectedRay1ZStart               =   myIncidentRay1ZStart;
    myReflectedRay1ZEnd                 =   myIncidentRay1ZEnd;

    myReflectedRay2XStart               =   myIncidentRay2XEnd;
    myReflectedRay2XEnd                 =   myIncidentRay2XStart;
    myReflectedRay2YStart               =   myIncidentRay2YEnd;
    myReflectedRay2YEnd                 =   2*myNormal2YStart-myIncidentRay2YStart;
    myReflectedRay2ZStart               =   myIncidentRay2ZStart;
    myReflectedRay2ZEnd                 =   myIncidentRay2ZEnd;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay1XStart, myReflectedRay1YStart, myReflectedRay1ZStart), new THREE.Vector3(myReflectedRay1XEnd, myReflectedRay1YEnd, myReflectedRay1ZEnd) );
    lineGeometry.computeLineDistances();
    myReflectedRay1.geometry = lineGeometry;
    myReflectedRay1.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay2XStart, myReflectedRay2YStart, myReflectedRay2ZStart), new THREE.Vector3(myReflectedRay2XEnd, myReflectedRay2YEnd, myReflectedRay2ZEnd) );
    lineGeometry.computeLineDistances();
    myReflectedRay2.geometry = lineGeometry;
    myReflectedRay2.verticesNeedUpdate=true;

}
function updateIncidentRays()
{
    /*Ray 1 Variables */
    myIncidentRay1XStart                =   myObjectBallX;
    myIncidentRay1XEnd                  =   myRayBall1X;
    myIncidentRay1YStart                =   myObjectBallY+myObjectBallRadius;
    myIncidentRay1YEnd                  =   myRayBall1Y;

    /*Ray 2 Variables*/
    myIncidentRay2XStart                =   myObjectBallX;
    myIncidentRay2XEnd                  =   myRayBall2X;
    myIncidentRay2YStart                =   myObjectBallY-myObjectBallRadius;
    myIncidentRay2YEnd                  =   myRayBall2Y;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay1XStart, myIncidentRay1YStart, myIncidentRay1ZStart), new THREE.Vector3(myIncidentRay1XEnd, myIncidentRay1YEnd, myIncidentRay1ZEnd));
    lineGeometry.computeLineDistances();
    myIncidentRay1.geometry=lineGeometry;
    myIncidentRay1.geometry.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay2XStart, myIncidentRay2YStart, myIncidentRay2ZStart), new THREE.Vector3(myIncidentRay2XEnd, myIncidentRay2YEnd, myIncidentRay2ZEnd));
    lineGeometry.computeLineDistances();
    myIncidentRay2.geometry=lineGeometry;
    myIncidentRay2.geometry.verticesNeedUpdate=true;
}
function updateRetracedRays()
{

    myRetracedRay1XStart                =   myReflectedRay1XStart;
    myRetracedRay1XEnd                  =   2*myPlaneMirrorX-myIncidentRay1XStart;
    myRetracedRay1YStart                =   myIncidentRay1YEnd;
    myRetracedRay1YEnd                  =   myIncidentRay1YStart;
    myRetracedRay1ZStart                =   myReflectedRay1ZStart;
    myRetracedRay1ZEnd                  =   myReflectedRay1ZEnd;

    myRetracedRay2XStart                =   myReflectedRay2XStart;
    myRetracedRay2XEnd                  =   2*myPlaneMirrorX-myIncidentRay2XStart;
    myRetracedRay2YStart                =   myIncidentRay2YEnd;
    myRetracedRay2YEnd                  =   myIncidentRay2YStart;
    myRetracedRay2ZStart                =   myReflectedRay2ZStart;
    myRetracedRay2ZEnd                  =   myReflectedRay2ZEnd;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myRetracedRay1XStart, myRetracedRay1YStart, myRetracedRay1ZStart), new THREE.Vector3(2*myRetracedRay1XEnd-myRetracedRay1XStart, 2*myRetracedRay1YEnd-myRetracedRay1YStart, myRetracedRay1ZEnd));
    lineGeometry.computeLineDistances();
    myRetracedRay1.geometry=lineGeometry;
    myRetracedRay1.verticesNeedUpdate=true;

    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myRetracedRay2XStart, myRetracedRay2YStart, myRetracedRay2ZStart), new THREE.Vector3(2*myRetracedRay2XEnd-myRetracedRay2XStart, 2*myRetracedRay2YEnd-myRetracedRay2YStart, myRetracedRay2ZEnd));
    lineGeometry.computeLineDistances();
    myRetracedRay2.geometry=lineGeometry;
    myRetracedRay2.verticesNeedUpdate=true;


}

function updateIncidentArrows()
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





}
function updateReflectedArrows()
{

    var arrowLen=-0.2;

    myReflectedRay1MidpointX     =   (myReflectedRay1XEnd+myReflectedRay1XStart)/2;
    myReflectedRay1MidpointY     =   (myReflectedRay1YEnd+myReflectedRay1YStart)/2;

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





}

function initialiseScene()
{
    /* Initialise Scene Variables */
    mySceneTLX = 0.0;
    mySceneTLY = 7.0;
    mySceneBRX = 20.0;
    mySceneBRY = 0.0;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
}

function initialiseObjectVariables(){
    /* Initialise Ball variables */
    myObjectBallRadius          = mySceneW/50;

    ballLeftB                   = 1.5;
    ballRightB                  = 10;
    ballTopB                    = 6.5;
    ballBottomB                 = 0.5;

    myObjectBallX               = (ballLeftB+ballRightB)/2;
    myObjectBallY               = (ballTopB+ballBottomB)/2;
    myObjectBallZ               = myAllZ;

    /*Mirror*/

    myPlaneMirrorX              = myCenterX;
    myPlaneMirrorYStart         = ballTopB+0.5;
    myPlaneMirrorYEnd           = ballBottomB-0.5;
    myPlaneMirrorZ              = myAllZ;


}

function initializeIncidentRayVariables(){
    /*Ray Ball 1 Variables*/

    myRayBall1Radius            =   myObjectBallRadius/2;
    myRayBall1X                 =   myObjectBallX+3*myObjectBallRadius;
    myRayBall1Y                 =   myObjectBallY+myObjectBallRadius;
    myRayBall1Z                 =   myAllZ;

    /*Ray Ball 2 Variables*/

    myRayBall2Radius            =   myObjectBallRadius/2;
    myRayBall2X                 =   myObjectBallX+3*myObjectBallRadius;
    myRayBall2Y                 =   myObjectBallY-myObjectBallRadius;
    myRayBall2Z                 =   myAllZ;

    /*Ray 1 Variables */
    myIncidentRay1XStart                =   myObjectBallX;
    myIncidentRay1XEnd                  =   myRayBall1X;
    myIncidentRay1YStart                =   myObjectBallY+myObjectBallRadius;
    myIncidentRay1YEnd                  =   myRayBall1Y;
    myIncidentRay1ZStart                =   myRayBall1Z;
    myIncidentRay1ZEnd                  =   myRayBall1Z;

    /*Ray 2 Variables*/
    myIncidentRay2XStart                =   myObjectBallX;
    myIncidentRay2XEnd                  =   myRayBall2X;
    myIncidentRay2YStart                =   myObjectBallY-myObjectBallRadius;
    myIncidentRay2YEnd                  =   myRayBall2Y;
    myIncidentRay2ZStart                =   myRayBall2Z;
    myIncidentRay2ZEnd                  =   myRayBall2Z;

}
function initializeReflectedRayVariables()
{

    myReflectedRay1XStart               =   myIncidentRay1XEnd;
    myReflectedRay1XEnd                 =   myIncidentRay1XStart;
    myReflectedRay1YStart               =   myIncidentRay1YEnd;
    myReflectedRay1YEnd                 =   2*myNormal1YStart-myIncidentRay1YStart;
    myReflectedRay1ZStart               =   myIncidentRay1ZStart;
    myReflectedRay1ZEnd                 =   myIncidentRay1ZEnd;

    myReflectedRay2XStart               =   myIncidentRay2XEnd;
    myReflectedRay2XEnd                 =   myIncidentRay2XStart;
    myReflectedRay2YStart               =   myIncidentRay2YEnd;
    myReflectedRay2YEnd                 =   2*myNormal2YStart-myIncidentRay2YStart;
    myReflectedRay2ZStart               =   myIncidentRay2ZStart;
    myReflectedRay2ZEnd                 =   myIncidentRay2ZEnd;

}
function initializeRetracedRayVariables(){

    myRetracedRay1XStart                =   myReflectedRay1XStart;
    myRetracedRay1XEnd                  =   2*myPlaneMirrorX-myIncidentRay1XStart;
    myRetracedRay1YStart                =   myIncidentRay1YEnd;
    myRetracedRay1YEnd                  =   myIncidentRay1YStart;
    myRetracedRay1ZStart                =   myReflectedRay1ZStart;
    myRetracedRay1ZEnd                  =   myReflectedRay1ZEnd;

    myRetracedRay2XStart                =   myReflectedRay2XStart;
    myRetracedRay2XEnd                  =   2*myPlaneMirrorX-myIncidentRay2XStart;
    myRetracedRay2YStart                =   myIncidentRay2YEnd;
    myRetracedRay2YEnd                  =   myIncidentRay2YStart;
    myRetracedRay2ZStart                =   myReflectedRay2ZStart;
    myRetracedRay2ZEnd                  =   myReflectedRay2ZEnd;


}
function initializeNormalVariables(){

    myNormal1XStart             =   myPlaneMirrorX;
    myNormal1XEnd               =   ballLeftB;
    myNormal1YStart             =   myRayBall1Y;
    myNormal1YEnd               =   myRayBall1Y;
    myNormal1ZStart             =   myRayBall1Z;
    myNormal1ZEnd               =   myRayBall1Z;

    myNormal2XStart             =   myPlaneMirrorX;
    myNormal2XEnd               =   ballLeftB;
    myNormal2YStart             =   myRayBall2Y;
    myNormal2YEnd               =   myRayBall2Y;
    myNormal2ZStart             =   myRayBall2Z;
    myNormal2ZEnd               =   myRayBall2Z;
}

function initializeIncidentArrows()
{


    var arrowLen=0.2;

    myIncidentRay1MidpointX     =   (myIncidentRay1XEnd+myIncidentRay1XStart)/2;
    myIncidentRay1MidpointY     =   (myIncidentRay1YEnd+myIncidentRay1YStart)/2;

    myIncidentRay1Slope=(myIncidentRay1YEnd-myIncidentRay1YStart)/(myIncidentRay1XEnd-myIncidentRay1XStart);

    myIncidentRay1Arrow11Slope=(myIncidentRay1Slope-1)/(1+myIncidentRay1Slope);

    myIncidentRay1Arrow12Slope=(myIncidentRay1Slope+1)/(1-myIncidentRay1Slope);


    myIncidentRay1Arrow11XStart =   myIncidentRay1MidpointX-arrowLen*(1/Math.sqrt((myIncidentRay1Arrow11Slope*myIncidentRay1Arrow11Slope)+1));
    myIncidentRay1Arrow11XEnd   =   myIncidentRay1MidpointX;
    myIncidentRay1Arrow11YStart =   myIncidentRay1MidpointY-myIncidentRay1Arrow11Slope*(arrowLen*(1/Math.sqrt((myIncidentRay1Arrow11Slope*myIncidentRay1Arrow11Slope)+1)));
    myIncidentRay1Arrow11YEnd   =   myIncidentRay1MidpointY;
    myIncidentRay1Arrow11ZStart =   myIncidentRay1ZStart;
    myIncidentRay1Arrow11ZEnd   =   myIncidentRay1ZEnd;

    myIncidentRay1Arrow12XStart =   myIncidentRay1MidpointX-arrowLen*(1/Math.sqrt((myIncidentRay1Arrow12Slope*myIncidentRay1Arrow12Slope)+1));
    myIncidentRay1Arrow12XEnd   =   myIncidentRay1MidpointX;
    myIncidentRay1Arrow12YStart =   myIncidentRay1MidpointY-myIncidentRay1Arrow12Slope*(arrowLen*(1/Math.sqrt((myIncidentRay1Arrow12Slope*myIncidentRay1Arrow12Slope)+1)));
    myIncidentRay1Arrow12YEnd   =   myIncidentRay1MidpointY;
    myIncidentRay1Arrow12ZStart =   myIncidentRay1ZStart;
    myIncidentRay1Arrow12ZEnd   =   myIncidentRay1ZEnd;

    myIncidentRay2MidpointX     =   (myIncidentRay2XEnd+myIncidentRay2XStart)/2;
    myIncidentRay2MidpointY     =   (myIncidentRay2YEnd+myIncidentRay2YStart)/2;

    myIncidentRay2Slope=(myIncidentRay2YEnd-myIncidentRay2YStart)/(myIncidentRay2XEnd-myIncidentRay2XStart);

    myIncidentRay2Arrow11Slope=(myIncidentRay2Slope-1)/(1+myIncidentRay2Slope);

    myIncidentRay2Arrow12Slope=(myIncidentRay2Slope+1)/(1-myIncidentRay2Slope);


    myIncidentRay2Arrow11XStart =   myIncidentRay2MidpointX-arrowLen*(1/Math.sqrt((myIncidentRay2Arrow11Slope*myIncidentRay2Arrow11Slope)+1));
    myIncidentRay2Arrow11XEnd   =   myIncidentRay2MidpointX;
    myIncidentRay2Arrow11YStart =   myIncidentRay2MidpointY-myIncidentRay2Arrow11Slope*(arrowLen*(1/Math.sqrt((myIncidentRay2Arrow11Slope*myIncidentRay2Arrow11Slope)+1)));
    myIncidentRay2Arrow11YEnd   =   myIncidentRay2MidpointY;
    myIncidentRay2Arrow11ZStart =   myIncidentRay2ZStart;
    myIncidentRay2Arrow11ZEnd   =   myIncidentRay2ZEnd;

    myIncidentRay2Arrow12XStart =   myIncidentRay2MidpointX-arrowLen*(1/Math.sqrt((myIncidentRay2Arrow12Slope*myIncidentRay2Arrow12Slope)+1));
    myIncidentRay2Arrow12XEnd   =   myIncidentRay2MidpointX;
    myIncidentRay2Arrow12YStart =   myIncidentRay2MidpointY-myIncidentRay2Arrow12Slope*(arrowLen*(1/Math.sqrt((myIncidentRay2Arrow12Slope*myIncidentRay2Arrow12Slope)+1)));
    myIncidentRay2Arrow12YEnd   =   myIncidentRay2MidpointY;
    myIncidentRay2Arrow12ZStart =   myIncidentRay2ZStart;
    myIncidentRay2Arrow12ZEnd   =   myIncidentRay2ZEnd;

}
function initializeReflectedArrows()
{


    var arrowLen=-0.2;

    myReflectedRay1MidpointX     =   (myReflectedRay1XEnd+myReflectedRay1XStart)/2;
    myReflectedRay1MidpointY     =   (myReflectedRay1YEnd+myReflectedRay1YStart)/2;

    myReflectedRay1Slope=(myReflectedRay1YEnd-myReflectedRay1YStart)/(myReflectedRay1XEnd-myReflectedRay1XStart);

    myReflectedRay1Arrow11Slope=(myReflectedRay1Slope-1)/(1+myReflectedRay1Slope);

    myReflectedRay1Arrow12Slope=(myReflectedRay1Slope+1)/(1-myReflectedRay1Slope);


    myReflectedRay1Arrow11XStart =   myReflectedRay1MidpointX-arrowLen*(1/Math.sqrt((myReflectedRay1Arrow11Slope*myReflectedRay1Arrow11Slope)+1));
    myReflectedRay1Arrow11XEnd   =   myReflectedRay1MidpointX;
    myReflectedRay1Arrow11YStart =   myReflectedRay1MidpointY-myReflectedRay1Arrow11Slope*(arrowLen*(1/Math.sqrt((myReflectedRay1Arrow11Slope*myReflectedRay1Arrow11Slope)+1)));
    myReflectedRay1Arrow11YEnd   =   myReflectedRay1MidpointY;
    myReflectedRay1Arrow11ZStart =   myReflectedRay1ZStart;
    myReflectedRay1Arrow11ZEnd   =   myReflectedRay1ZEnd;

    myReflectedRay1Arrow12XStart =   myReflectedRay1MidpointX-arrowLen*(1/Math.sqrt((myReflectedRay1Arrow12Slope*myReflectedRay1Arrow12Slope)+1));
    myReflectedRay1Arrow12XEnd   =   myReflectedRay1MidpointX;
    myReflectedRay1Arrow12YStart =   myReflectedRay1MidpointY-myReflectedRay1Arrow12Slope*(arrowLen*(1/Math.sqrt((myReflectedRay1Arrow12Slope*myReflectedRay1Arrow12Slope)+1)));
    myReflectedRay1Arrow12YEnd   =   myReflectedRay1MidpointY;
    myReflectedRay1Arrow12ZStart =   myReflectedRay1ZStart;
    myReflectedRay1Arrow12ZEnd   =   myReflectedRay1ZEnd;

    myReflectedRay2MidpointX     =   (myReflectedRay2XEnd+myReflectedRay2XStart)/2;
    myReflectedRay2MidpointY     =   (myReflectedRay2YEnd+myReflectedRay2YStart)/2;

    myReflectedRay2Slope=(myReflectedRay2YEnd-myReflectedRay2YStart)/(myReflectedRay2XEnd-myReflectedRay2XStart);

    myReflectedRay2Arrow11Slope=(myReflectedRay2Slope-1)/(1+myReflectedRay2Slope);

    myReflectedRay2Arrow12Slope=(myReflectedRay2Slope+1)/(1-myReflectedRay2Slope);


    myReflectedRay2Arrow11XStart =   myReflectedRay2MidpointX-arrowLen*(1/Math.sqrt((myReflectedRay2Arrow11Slope*myReflectedRay2Arrow11Slope)+1));
    myReflectedRay2Arrow11XEnd   =   myReflectedRay2MidpointX;
    myReflectedRay2Arrow11YStart =   myReflectedRay2MidpointY-myReflectedRay2Arrow11Slope*(arrowLen*(1/Math.sqrt((myReflectedRay2Arrow11Slope*myReflectedRay2Arrow11Slope)+1)));
    myReflectedRay2Arrow11YEnd   =   myReflectedRay2MidpointY;
    myReflectedRay2Arrow11ZStart =   myReflectedRay2ZStart;
    myReflectedRay2Arrow11ZEnd   =   myReflectedRay2ZEnd;

    myReflectedRay2Arrow12XStart =   myReflectedRay2MidpointX-arrowLen*(1/Math.sqrt((myReflectedRay2Arrow12Slope*myReflectedRay2Arrow12Slope)+1));
    myReflectedRay2Arrow12XEnd   =   myReflectedRay2MidpointX;
    myReflectedRay2Arrow12YStart =   myReflectedRay2MidpointY-myReflectedRay2Arrow12Slope*(arrowLen*(1/Math.sqrt((myReflectedRay2Arrow12Slope*myReflectedRay2Arrow12Slope)+1)));
    myReflectedRay2Arrow12YEnd   =   myReflectedRay2MidpointY;
    myReflectedRay2Arrow12ZStart =   myReflectedRay2ZStart;
    myReflectedRay2Arrow12ZEnd   =   myReflectedRay2ZEnd;




}
function initialiseAllVariables()
{
    /* Initialise variables */

    segmentHeight   =   32;
    segmentWidth    =   32;
    phiStart        =   2;
    phiLength       =   0.5;
    thetaStart      =   0;
    thetaLength     =   3.14;
    myAllZ=-3;

    wallThickness = 0.20;

    /* Initialise Plane Mirror variables */


    /* Barriers */
    leftB=mySceneTLX;
    rightB=mySceneBRX;
    bottomB=mySceneBRY;
    topB=mySceneTLY;

    initialiseObjectVariables();
    initializeIncidentRayVariables();
    initializeNormalVariables();
    initializeReflectedRayVariables();
    initializeRetracedRayVariables();
    initializeIncidentArrows();
    initializeReflectedArrows();

}

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Ray Diagrams and Image Formation By A Plane Mirror</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>This experiment focuses on Ray Diagramas and Image Formation By a Plane Mirror</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>User can drag the ball(object) placed in front of the mirror ,User can also change the direction of rays by dragging the dots given at end of both rays.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The control window at the top right shows the angle of incidence and reflection made by the rays with the normal.</p>";
    helpContent = helpContent + "<p>These angles can be controlled by dragging the dots provided at the end of rays.</p>";
    helpContent = helpContent + "<p>Short Forms used in Control Window</p>";
    helpContent = helpContent + "<pre>A O I     Angle of Incidence </pre>";
    helpContent = helpContent + "<pre>A O R     Angle of Reflection </pre>";
    helpContent = helpContent + "<p>As these rays originate from top and bottom of the object the image formed by dashed lines is not necessarily at the point of intersection but slightly in front of that point towards the mirror.</p>";
    helpContent = helpContent + "<p>GREEN lines are incident rays,LIGHT BLUE lines are reflected rays and dashed lines are reflected rays traced backwards</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Ray Diagrams and Image Formation by a Plane Mirror</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>This experiment focuses on Ray Diagramas and Image Formation By a Plane Mirror</p>";
    infoContent = infoContent + "<h3>Image formation by a Plane Mirror</h3>";
    infoContent = infoContent + "<p>Image is formed in a plane mirror when the reflected rays are traced back so the two retraced rays meet at a point.This point of intersection gives us the idea about formaton of the image." +
                                "If the object is point object then image is obtained at this point else the image is formed around that point of intersection. " +
                                "Image formed by plane mirror is virtual, and the image obtained is of the same size as the object.</p>";
    infoContent = infoContent + "<p>Image obtained due to plane mirror is at a distance same as that of object from the mirror</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
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

    PIEstartButton.style.visibility='hidden';
    PIEslowdownButton.style.visibility='hidden';
    PIEspeedupButton.style.visibility='hidden';

    var geometry;
    var material;
    var outlineMaterial1;

    var lineGeometry;
    var lineMaterial;
    var vertArray;

    var loader;
    var texture;

    PIEsetExperimentTitle("Ray Diagrams and Image Formation by a Plane Mirror");
    PIEsetDeveloperName("Dhruv Thakker");
    PIEhideControlElement();

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();

    /* initialise Other Variables */
    initialiseAllVariables();

    initialiseControls();

    PIErenderer.shadowMap=false;


    /* Create Object Ball and add it to scene */
    geometry=new THREE.SphereGeometry(myObjectBallRadius,segmentWidth,segmentHeight);
    material=new THREE.MeshBasicMaterial({color: 0xcd5c5c});
    myObjectBall = new THREE.Mesh(geometry,material);
    myObjectBall.position.set(myObjectBallX, myObjectBallY, myObjectBallZ);
    PIEaddElement(myObjectBall);

    PIEdragElement(myObjectBall);
    PIEsetDrag(myObjectBall, myObjectBallDrag);

    /*Create Plane Mirror*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPlaneMirrorX, myPlaneMirrorYStart, myPlaneMirrorZ), new THREE.Vector3(myPlaneMirrorX, myPlaneMirrorYEnd, myPlaneMirrorZ) );
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x8dbc8f,linewidth: 9 } );
    myPlaneMirror = new THREE.Line( lineGeometry, lineMaterial );

    PIEaddElement(myPlaneMirror);

    /*Create Plane Mirror Polish*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myPlaneMirrorX+0.1, myPlaneMirrorYStart, myPlaneMirrorZ), new THREE.Vector3(myPlaneMirrorX+0.1, myPlaneMirrorYEnd, myPlaneMirrorZ) );
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x9932cc,linewidth: 5 } );
    myPlaneMirrorPolish = new THREE.Line( lineGeometry, lineMaterial );

    PIEaddElement(myPlaneMirrorPolish);

    /* Create RayBall1 and add it to scene */
    geometry=new THREE.SphereGeometry(myRayBall1Radius,segmentWidth,segmentHeight);
    material=new THREE.MeshBasicMaterial({color: 0xa9a9a9});
    myRayBall1 = new THREE.Mesh(geometry,material);
    myRayBall1.position.set(myRayBall1X, myRayBall1Y, myRayBall1Z);
    PIEaddElement(myRayBall1);

    PIEdragElement(myRayBall1);
    PIEsetDrag(myRayBall1, myRayBall1Drag);

    /* Create RayBall2 and add it to scene */
    geometry=new THREE.SphereGeometry(myRayBall2Radius,segmentWidth,segmentHeight);
    material=new THREE.MeshBasicMaterial({color: 0xa9a9a9});
    myRayBall2 = new THREE.Mesh(geometry,material);
    myRayBall2.position.set(myRayBall2X, myRayBall2Y, myRayBall2Z);
    PIEaddElement(myRayBall2);

    PIEdragElement(myRayBall2);
    PIEsetDrag(myRayBall2, myRayBall2Drag);

    /*Create Ray 1 Mirror*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay1XStart, myIncidentRay1YStart, myIncidentRay1ZStart), new THREE.Vector3(myIncidentRay1XEnd, myIncidentRay1YEnd, myIncidentRay1ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00dd00,linewidth: 4 } );
    myIncidentRay1 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myIncidentRay1);

    /*Create Ray 2 Mirror*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay2XStart, myIncidentRay2YStart, myIncidentRay2ZStart), new THREE.Vector3(myIncidentRay2XEnd, myIncidentRay2YEnd, myIncidentRay2ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00dd00,linewidth: 4 } );
    myIncidentRay2 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myIncidentRay2);

    /*Create Normal 1 */
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myNormal1XStart, myNormal1YStart, myNormal1ZStart), new THREE.Vector3(myNormal1XEnd, myNormal1YEnd, myNormal1ZEnd) );
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xa52a2a,linewidth: 4 } );
    myNormal1 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myNormal1);
    myNormal1.visible=false;

    /*Create Normal 2 */
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myNormal2XStart, myNormal2YStart, myNormal2ZStart), new THREE.Vector3(myNormal2XEnd, myNormal2YEnd, myNormal2ZEnd) );
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0xa52a2a,linewidth: 4 } );
    myNormal2 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myNormal2);
    myNormal2.visible=false;

    /*Create Reflected Ray 1 */
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay1XStart, myReflectedRay1YStart, myReflectedRay1ZStart), new THREE.Vector3(myReflectedRay1XEnd, myReflectedRay1YEnd, myReflectedRay1ZEnd) );
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00ffff,linewidth: 4 } );
    myReflectedRay1 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myReflectedRay1);
    myReflectedRay1.visible=false;

    /*Create Reflected Ray 2 */
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay2XStart, myReflectedRay2YStart, myReflectedRay2ZStart), new THREE.Vector3(myReflectedRay2XEnd, myReflectedRay2YEnd, myReflectedRay2ZEnd) );
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00ffff,linewidth: 4 } );
    myReflectedRay2 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myReflectedRay2);
    myReflectedRay2.visible=false;

    /*Create Retraced Ray 1 */
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myRetracedRay1XStart, myRetracedRay1YStart, myRetracedRay1ZStart), new THREE.Vector3(myRetracedRay1XEnd, myRetracedRay1YEnd, myRetracedRay1ZEnd) );
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineDashedMaterial( {
        color: 0x6495ed,
        linewidth: 3,
        scale: 1,
        dashSize: 0.5,
        gapSize: 0.3,
    } );
    myRetracedRay1 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myRetracedRay1);
    myRetracedRay1.visible=false;

    /*Create Retraced Ray 2 */
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myRetracedRay2XStart, myRetracedRay2YStart, myRetracedRay2ZStart), new THREE.Vector3(myRetracedRay2XEnd, myRetracedRay2YEnd, myRetracedRay2ZEnd) );
    lineGeometry.computeLineDistances();
    lineMaterial =new THREE.LineDashedMaterial( {
        color: 0x6495ed,
        linewidth: 3,
        scale: 1,
        dashSize: 0.5,
        gapSize: 0.3,
    } );
    myRetracedRay2 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myRetracedRay2);
    myRetracedRay2.visible=false;

    /*var abc;
    /*Create Ray 1 Arrow 1*/
    /*lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay1Arrow11XStart, 1, myIncidentRay1Arrow11ZStart), new THREE.Vector3(2, 2    , myIncidentRay1Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00dd00,linewidth: 4 } );
    abc = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(abc);*/

    /*Create Ray 1 Arrow 1*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay1Arrow11XStart, myIncidentRay1Arrow11YStart, myIncidentRay1Arrow11ZStart), new THREE.Vector3(myIncidentRay1Arrow11XEnd, myIncidentRay1Arrow11YEnd, myIncidentRay1Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00dd00,linewidth: 4 } );
    myIncidentRay1Arrow11 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myIncidentRay1Arrow11);

    /*Create Ray 1 Arrow 2*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay1Arrow12XStart, myIncidentRay1Arrow12YStart, myIncidentRay1Arrow12ZStart), new THREE.Vector3(myIncidentRay1Arrow12XEnd, myIncidentRay1Arrow12YEnd, myIncidentRay1Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00dd00,linewidth: 4 } );
    myIncidentRay1Arrow12 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myIncidentRay1Arrow12);

    /*Create Ray 2 Arrow 1*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay2Arrow11XStart, myIncidentRay2Arrow11YStart, myIncidentRay2Arrow11ZStart), new THREE.Vector3(myIncidentRay2Arrow11XEnd, myIncidentRay2Arrow11YEnd, myIncidentRay2Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00dd00,linewidth: 4 } );
    myIncidentRay2Arrow11 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myIncidentRay2Arrow11);

    /*Create Ray 2 Arrow 2*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myIncidentRay2Arrow12XStart, myIncidentRay2Arrow12YStart, myIncidentRay2Arrow12ZStart), new THREE.Vector3(myIncidentRay2Arrow12XEnd, myIncidentRay2Arrow12YEnd, myIncidentRay2Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00dd00,linewidth: 4 } );
    myIncidentRay2Arrow12 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myIncidentRay2Arrow12);

    /*Create RRay 1 Arrow 1*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay1Arrow11XStart, myReflectedRay1Arrow11YStart, myReflectedRay1Arrow11ZStart), new THREE.Vector3(myReflectedRay1Arrow11XEnd, myReflectedRay1Arrow11YEnd, myReflectedRay1Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00ffff,linewidth: 4 } );
    myReflectedRay1Arrow11 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myReflectedRay1Arrow11);

    /*Create RRay 1 Arrow 2*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay1Arrow12XStart, myReflectedRay1Arrow12YStart, myReflectedRay1Arrow12ZStart), new THREE.Vector3(myReflectedRay1Arrow12XEnd, myReflectedRay1Arrow12YEnd, myReflectedRay1Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00ffff,linewidth: 4 } );
    myReflectedRay1Arrow12 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myReflectedRay1Arrow12);

    /*Create RRay 2 Arrow 1*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay2Arrow11XStart, myReflectedRay2Arrow11YStart, myReflectedRay2Arrow11ZStart), new THREE.Vector3(myReflectedRay2Arrow11XEnd, myReflectedRay2Arrow11YEnd, myReflectedRay2Arrow11ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00ffff,linewidth: 4 } );
    myReflectedRay2Arrow11 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myReflectedRay2Arrow11);

    /*Create RRay 2 Arrow 2*/
    lineGeometry = new THREE.Geometry();
    vertArray = lineGeometry.vertices;
    vertArray.push( new THREE.Vector3(myReflectedRay2Arrow12XStart, myReflectedRay2Arrow12YStart, myReflectedRay2Arrow12ZStart), new THREE.Vector3(myReflectedRay2Arrow12XEnd, myReflectedRay2Arrow12YEnd, myReflectedRay2Arrow12ZEnd));
    lineGeometry.computeLineDistances();
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x00ffff,linewidth: 4 } );
    myReflectedRay2Arrow12 = new THREE.Line( lineGeometry, lineMaterial );
    PIEaddElement(myReflectedRay2Arrow12);

    myReflectedRay1Arrow11.visible=false;
    myReflectedRay1Arrow12.visible=false;

    myReflectedRay2Arrow11.visible=false;
    myReflectedRay2Arrow12.visible=false;


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
    /*geometry = new THREE.BoxGeometry( mySceneW * 2, wallThickness, 100);
    material = new THREE.MeshLambertMaterial( {color: 0xf0e68c} );
    myFloor  = new THREE.Mesh( geometry, material );
    // myFloor.lookAt(new THREE.Vector3(0,1,0));
    myFloor.position.set(myCenterX, bottomB - (wallThickness / 2), 0.0);
    myFloor.receiveShadow = false;
    PIEaddElement(myFloor);
    /* Ceiling */
   /* geometry = new THREE.BoxGeometry( mySceneW * 2, wallThickness, 100 );
    material = new THREE.MeshLambertMaterial( {color: 0xf0e68c} );
    myCeiling = new THREE.Mesh( geometry, material );
    myCeiling.position.set(myCenterX, topB+(wallThickness/2), 0.0);
    myFloor.receiveShadow = false;
    PIEaddElement(myCeiling);
    /* Left */
    /*geometry = new THREE.BoxGeometry( wallThickness, mySceneH * 2, 100 );
    material = new THREE.MeshLambertMaterial( {color: 0xf0e68c} );
    myLeft = new THREE.Mesh( geometry, material );
    myLeft.position.set(leftB-(wallThickness/2), myCenterY, 0.0);
    myLeft.receiveShadow = false;
    PIEaddElement(myLeft);
    /* Right */
   /* geometry = new THREE.BoxGeometry( wallThickness, mySceneH * 2, 100 );
    material = new THREE.MeshLambertMaterial( {color: 0xf0e68c} );
    myRight = new THREE.Mesh( geometry, material );
    myRight.position.set(rightB+(wallThickness/2), myCenterY, 0.0);
    myRight.receiveShadow = false;
    PIEaddElement(myRight);
    /* Back */
    // material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: texture } );
    // geometry = new THREE.PlaneBufferGeometry( mySceneW * 2, mySceneH * 2 );
    geometry = new THREE.BoxGeometry( mySceneW * 2, mySceneH * 2, wallThickness );
    material = new THREE.MeshLambertMaterial( {color: 0xf0e68c} );
    myBack = new THREE.Mesh( geometry, material );
    myBack.position.set(myCenterX, myCenterY, backB - (wallThickness / 2));
    myBack.receiveShadow = false;
    PIEaddElement(myBack);




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
    /* initialise Other Variables */
    initialiseAllVariables();

    myObjectBall.position.set(myObjectBallX, myObjectBallY, myObjectBallZ);

    updateIncidentRays();
    updateNormals();
    updateReflectedRays();
    updateRetracedRays();

    updateIncidentArrows();
    updateReflectedArrows();

    myRayBall1.position.set(myRayBall1X,myRayBall1Y,myRayBall1Z);
    myRayBall2.position.set(myRayBall2X,myRayBall2Y,myRayBall2Z);

    myNormal1.visible=false;
    myNormal2.visible=false;
    myReflectedRay1.visible=false;
    myReflectedRay2.visible=false;
    myRetracedRay1.visible=false;
    myRetracedRay2.visible=false;

    myReflectedRay1Arrow11.visible=false;
    myReflectedRay1Arrow12.visible=false;

    myReflectedRay2Arrow11.visible=false;
    myReflectedRay2Arrow12.visible=false;


    //initialiseControls();


    /* Reset All Objects position */




    /* Reset Wall position */
    /* Floor */
    //myFloor.position.set(myCenterX, bottomB - (wallThickness / 2), 0.0);
    /* Ceiling */
    //myCeiling.position.set(myCenterX, topB+(wallThickness/2), 0.0);
    /* Left */
    //myLeft.position.set(leftB-(wallThickness/2), myCenterY, 0.0);
    /* Right */
    //myRight.position.set(rightB+(wallThickness/2), myCenterY, 0.0);
    /* Back */
    myBack.position.set(myCenterX, myCenterY, backB - (wallThickness / 2));


    //initialiseControls();
    resetControlVariables();
}

/******************* End of Reset Experiment1 code ***********************/

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


}

/******************* Update (animation changes) code ***********************/
