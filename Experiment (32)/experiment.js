
// MY_PROJECT
// LIQUID EXERTS PRESSURE ON THE BOTTOM OF THE CONTAINER.
/*  Developer : SIDDHARTH - ACHARYA
    COLLEGE : IIIT - Allahabad
*/

/* Global Variables */
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
var backB;         /* Back Barrier */
var wallThickness;      /* Wall Thickness */

/* Room Objects */
var myFloor;            /* Floor */
var myCeiling;          /* Ceiling */
var myBack;             /* Back */
var myRight;            /* Right */
var myLeft;             /* Left */

/*Tap variables*/
var myTap1;
var myTap2;
var myTap3;
var myTap4;
var bucket;
var balloon;
var circle;
var tapWater;
var waterLevel;
var waterH;
var waterW;
var waterCX;
var waterCY;
var maxWL;
var line;
var leg1;
var leg2;
var tp;
var open;

/* Parameters, Variables */
var WL;
var WLdefault;
var WLmin;
var WLmax;
var WLstep;

/*variables used to update animation*/
var count;
var f;
var dx;
var dy;

var TS;
var TV;
var BV;
var BS;
var side;
var tSpeed;

function handleWL(newValue) {
    maxWL = newValue;
}
function initialiseControlVariables()
{
    /* Water_Level Slider */
    WL = "WATER-LEVEL";
    WLdefault = 0.0;
    WLmin = 0.0;
    WLmax = 50.0;
    WLstep = 1.0;

    /*Tap status */
    TS = "TAP-STATUS";
    TV = "CLOSED";

    /*Valve status */
    BV = "VALVE-STATUS";
    BS = "CLOSED";
    
}
function initialiseControls()
{
    initialiseControlVariables();
    /* Input Panel For Water_Level */
    PIEaddInputSlider(WL,WLdefault, handleWL, WLmin, WLmax, WLstep);                  
    /* Display Panel For Water_Level */
    PIEaddDisplayText(WL, WLdefault);
    PIEaddDisplayText(TS, TV);
    PIEaddDisplayText(BV, BS);
}

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Liquid exerts pressure at bottom experiment help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows a balloon attached to the end of the jar , which gets filled as the valve is opened after filling the jar with water.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to one sliders.</p>";
    helpContent = helpContent + "<p>You can control the Water Level to be filled in the jar</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>WATER-LEVEL&nbsp;&nbsp;:&nbsp;Controls Water Level to be filled in the jar .</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the water will get filled to the level you have decided.</p>";
    helpContent = helpContent + "<p>The right hand panel now shows the values of the water in jar during animation.</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Liquid exerts pressure at bottom experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows when more water is filled in the jar then the balloon expands more.</p>";
    infoContent = infoContent + "<h3>Expanding of Balloon , as Liquid exerts pressure at the bottom of the surface.</h3>";
    infoContent = infoContent + "<p>When the jar is being filled , the valve is closed so the water gets filled in the jar upto a height (which you have selected )</p>";
    infoContent = infoContent + "<p>At the time when jar is filled to its level , the valve is set to an open mode.</p>";
    infoContent = infoContent + "<p>The balloon expands as liquid exerts pressure at the bottom and therefore starts filling in the balloon.</p>";
    infoContent = infoContent + "<h3>The more the height the more the size of balloon</h3>";
    infoContent = infoContent + "<p>As the water starts to get filled in the balloon , the balloon will expand more if the height of the water in jar will be greater.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene()
{
    /*  Scene Variables are Initialised */
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
    /*scene variables */
    wallThickness = 0.20;
    backB = -4.0;

    /* Barriers */
    leftB=mySceneTLX;
    rightB=mySceneBRX;
    bottomB=mySceneBRY;
    topB = mySceneTLY;

    /*Tap variables*/
    waterW = 1;
    waterH = 0.02 / 2;
    waterCX = 1.7;
    waterCY = 1.20 + waterH / 2;

    /*updating variables*/
    count = 0;
    f = 0;
    dx = 0;
    dy = 0;
    tSpeed = 0;

}
/*
 * This function creates the scene of the experiment.
 * It is called by the library during document load. 
 */
function loadExperimentElements()
{
    /*local variables to be used in this function */
    var geo;
    var geometry;
    var material;
    

    PIEsetExperimentTitle("Liquid exerts pressure at bottom");
    PIEsetDeveloperName("Siddharth Acharya");
    PIEhideControlElement();

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();
    
    /* initialise Scene */
    initialiseScene();

    /* initialise Other Variables */
    initialiseOtherVariables();

    /* Create Tap using 4 cylindrical geometry and adding all to scene */
    myTap1 = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.8), new THREE.MeshStandardMaterial({ color: 0xededed }));
    myTap1.position.set(1.0, 1.85 +0.18, 0.2);
    myTap1.rotateZ(Math.PI / 2);
    myTap1.castShadow = true;
    myTap1.receiveShadow = true;
    myTap1.scale.set(0.8, 0.8, 0.8);
    PIEaddElement(myTap1);

    myTap2 = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.3), new THREE.MeshStandardMaterial({ color: 0xededed }));
    myTap2.position.set(1.7, 1.76 + 0.18, 0.2);
    myTap2.castShadow = true;
    myTap2.receiveShadow = true;
    myTap2.scale.set(0.8, 0.8, 0.8);
    PIEaddElement(myTap2);

    myTap3 = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.2), new THREE.MeshStandardMaterial({ color: 0xededed }));
    myTap3.position.set(1.5, 1.95 + 0.18, 0.2);
    myTap3.castShadow = true;
    myTap3.receiveShadow = true;
    myTap3.scale.set(0.8, 0.8, 0.8);
    PIEaddElement(myTap3);

    myTap4 = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.2), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    myTap4.position.set(1.5, 2.05 + 0.18, 0.2);
    myTap4.rotateZ(Math.PI / 2);
    myTap4.castShadow = true;
    myTap4.receiveShadow = true;
    myTap4.scale.set(0.8, 0.8, 0.8);
    PIEaddElement(myTap4);

    /* Creating  TapWater and adding it to the scene with 0 scaling so that it is not visible */
    geometry = new THREE.BoxGeometry(0.06, 0.6, 0.0);
    tapWater = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0x2EA3FF }));
    tapWater.position.set(1.7, 1.76 - 0.24, 0.1);
    tapWater.castShadow = true;
    tapWater.receiveShadow = true;
    tapWater.scale.set(0, 0, 0);
    PIEaddElement(tapWater);

    /*Creating WaterInJar */
    geometry = new THREE.BoxGeometry(waterW ,waterH , 0.0);
    material = new THREE.MeshStandardMaterial({ color: 0x2EA3FF });
    waterLevel = new THREE.Mesh(geometry, material);
    waterLevel.position.set(waterCX , waterCY , 0.0);
    PIEaddElement(waterLevel);
    
    /* Create Bucket and add it to scene */
    geometry = new THREE.Geometry();
    geometry.vertices.push(
        new THREE.Vector3(1.2, 1.7, 0.0),
        new THREE.Vector3(1.2, 1.2 , 0.0),
        new THREE.Vector3(1.7, 1.2 , 0.0),
        new THREE.Vector3(1.7, 1.1 , 0.0),
        new THREE.Vector3(1.8, 1.1 , 0.0),
        new THREE.Vector3(1.8, 1.2 , 0.0),
        new THREE.Vector3(2.2, 1.2 , 0.0),
        new THREE.Vector3(2.2, 1.7 , 0.0)
    );
    bucket = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0x000000 , fog : true }));
    PIEaddElement(bucket);

    /* Creating Valve */
    line = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.3), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line.position.set(1.75 , 1.15 , 0.0);
    line.rotateZ(Math.PI / 2);
    line.castShadow = true;
    line.receiveShadow = true;
    PIEaddElement(line);

    //  Alternating of above
    /*
    geometry = new THREE.Geometry();
    geometry.vertices.push(
        new THREE.Vector3(1.6,1.15, 0.0),
        new THREE.Vector3(1.9,1.15, 0.0)
    );
    line = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0xff0000, fog: true }));
    PIEaddElement(line);
    */
    
    /* Create opening of bucket */
    geo = new THREE.Shape();
    geo.moveTo(1.2, 1.7);
    geo.quadraticCurveTo( 1.7 ,1.72 , 2.2 , 1.7);
    geo.quadraticCurveTo(1.7 , 1.68, 1.2,1.7);
    geometry = new THREE.ShapeGeometry(geo);
    open = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0x000000 }));
    open.castShadow = true;
    open.receiveShadow = true;
    PIEaddElement(open);
    
    
    /* Create balloon and add it to scene */
    geo = new THREE.Shape();
    geo.moveTo(1.75, 1.15);
    geo.quadraticCurveTo( 1.82*1.07,1.02*1.07, 1.90, 0.90);
    geo.quadraticCurveTo(1.75, 0.5, 1.60, 0.90);
    geo.quadraticCurveTo(1.55, 1.09,1.75, 1.15);
    //var extrudeSettings = { amount: 8, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };
    geometry = new THREE.ShapeGeometry(geo);
    balloon = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0xFF5D00 }));
    balloon.castShadow = true;
    balloon.receiveShadow = true;
    balloon.geometry.verticesNeedUpdate = true;
    PIEaddElement(balloon);
    balloon.scale.set(1, 1, 1);
    

    /*Creating Legs of Bucket & top*/
    leg1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.03, 0.8), new THREE.LineBasicMaterial({ color: 0x330a00 }));
    leg1.position.set(0.98, 0.867 - 0.07, 0.0);
    leg1.castShadow = true;
    leg1.receiveShadow = true;
    PIEaddElement(leg1);

    leg1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.03, 0.6), new THREE.LineBasicMaterial({ color: 0x330a00 }));
    leg1.position.set(0.98 + 0.2, 0.867 - 0.07 + 0.08 +0.02, 0.0);
    leg1.castShadow = true;
    leg1.receiveShadow = true;
    PIEaddElement(leg1);

    leg1 = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.22), new THREE.LineBasicMaterial({ color: 0x330a00 }));
    leg1.position.set(1.08,1.22, 0.0);
    leg1.rotateZ(-Math.PI / 2.2);
    leg1.castShadow = true;
    leg1.receiveShadow = true;
    PIEaddElement(leg1);

    /*geo = new THREE.Shape();
    geo.moveTo(0.98, 0.867 - 0.07 + 0.4);
    geo.quadraticCurveTo(1.82 * 1.07, 1.02 * 1.07, 0.98 + 0.2, 0.867 - 0.07 + 0.08 + 0.3 + 0.1);
    geo.quadraticCurveTo(1.82 * 1.07, 1.02 * 1.07, 0.98 + 0.2, 0.867 - 0.07 + 0.08 );
    
    geo.quadraticCurveTo(1.55, 1.09, 1.75, 1.15);
    geometry = new THREE.ShapeGeometry(geo);
    side = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0xFF5D00 }));
    PIEaddElement(side);*/


    leg2 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.03, 0.8), new THREE.LineBasicMaterial({ color: 0x330a00 }));
    leg2.position.set(0.98 + 1.47, 0.867 -0.07, 0.0);
    leg2.castShadow = true;
    leg2.receiveShadow = true;
    PIEaddElement(leg2);

    leg2 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.03, 0.6), new THREE.LineBasicMaterial({ color: 0x330a00 }));
    leg2.position.set(0.98 + 0.2 +1.02, 0.867 - 0.07 + 0.08 +0.02, 0.0);
    leg2.castShadow = true;
    leg2.receiveShadow = true;
    PIEaddElement(leg2);

    leg2 = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.26), new THREE.LineBasicMaterial({ color: 0x330a00 }));
    leg2.position.set(1.08 +1.25, 1.22, 0.0);
    leg2.rotateZ(Math.PI / 2.2);
    leg2.castShadow = true;
    leg2.receiveShadow = true;
    PIEaddElement(leg2);

    tp = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 1.8), new THREE.LineBasicMaterial({ color: 0x330a00 }));
    tp.position.set(1.74, 1.19, 0.0);
    tp.rotateZ(Math.PI / 2);
    tp.castShadow = true;
    tp.receiveShadow = true;
    PIEaddElement(tp);

    
    /*knob for bucket */
    geometry = new THREE.CircleGeometry(0.07, 32);
    circle = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0x345543 }));
    circle.position.set(1.75, 1.15, 0.00);
    circle.castShadow = true;
    circle.receiveShadow = true;
    PIEaddElement(circle);

  
    /* Initialise Wall variables */
    /* All walls extend beyond the room size in both directions */

    /* Floor */
    geometry = new THREE.BoxGeometry( mySceneW * 2, wallThickness, 100);
    material = new THREE.MeshLambertMaterial({ color: 0x4C3241 });
    myFloor  = new THREE.Mesh( geometry, material );
    myFloor.position.set(myCenterX, bottomB - (wallThickness / 2), 0.0);
    myFloor.receiveShadow = true;
    PIEaddElement(myFloor);

    /* Ceiling */

    geometry = new THREE.BoxGeometry( mySceneW * 2, wallThickness, 100 );
    material = new THREE.MeshLambertMaterial({ color: 0xff9999 });
    myCeiling = new THREE.Mesh( geometry, material );
    myCeiling.position.set(myCenterX, topB+(wallThickness/2), 0.0);
    myCeiling.receiveShadow = true;
    PIEaddElement(myCeiling);

    /* Left */
    geometry = new THREE.BoxGeometry( wallThickness -1 , mySceneH * 2, 100 );
    material = new THREE.MeshLambertMaterial({ color: 0x39B4CD });
    myLeft = new THREE.Mesh( geometry, material );
    myLeft.position.set(leftB-(wallThickness/2), myCenterY, 0.0);
    myLeft.receiveShadow = true;
    PIEaddElement(myLeft);

    /* Right */
    geometry = new THREE.BoxGeometry( wallThickness, mySceneH * 2, 100 );
    material = new THREE.MeshLambertMaterial({ color: 0x39B4CD });
    myRight = new THREE.Mesh( geometry, material );
    myRight.position.set(rightB+(wallThickness/2), myCenterY, 0.0);
    myRight.receiveShadow = true;
    PIEaddElement(myRight);
    //F3E2A9;
    /* Back */
    geometry = new THREE.BoxGeometry( mySceneW * 2, mySceneH * 2, wallThickness );
    material = new THREE.MeshLambertMaterial({ color: 0xF3E2A9 });
    myBack = new THREE.Mesh( geometry, material );
    myBack.position.set(myCenterX, myCenterY, backB - (wallThickness / 2));
    myBack.receiveShadow = true;
    PIEaddElement(myBack);

   // PIEadjustCamera(1, 1.5, 0);
    /* Instantiate experiment controls */
    initialiseControls();

    /* Reset all positions */
    resetExperiment();

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX-0.5, mySceneBRY);
}

/******************* End of Load Experiment objects code ***********************/

/******************* Reset Experiment code ***********************/

/* This function resets the position of all experiment elements to their default values. */
function resetExperiment()
{
    var geo;
    var geometry;

    /* initialise Other Variables */
    initialiseOtherVariables();
    

    waterLevel.scale.set(0, 0, 0);                          // Reset waterLevel
    tapWater.scale.set(0, 0, 0);                            // Reset tapWater

    tSpeed = 0;
    /*Reset Balloon */
    balloon.scale.set(0, 0, 0);
    geo = new THREE.Shape();
    geo.moveTo(1.75, 1.15);
    geo.quadraticCurveTo(1.82 * 1.07, 1.02 * 1.07, 1.90, 0.90);
    geo.quadraticCurveTo(1.75, 0.5, 1.60, 0.90);
    geo.quadraticCurveTo(1.55, 1.09, 1.75, 1.15);
    geometry = new THREE.ShapeGeometry(geo);
    balloon = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0xFF5D00 }));
    PIEaddElement(balloon);

    /* Reset Water_Level position */
    geometry = new THREE.BoxGeometry(waterW, waterH, 0.0);
    material = new THREE.MeshStandardMaterial({ color: 0x2EA3FF });
    waterLevel = new THREE.Mesh(geometry, material);
    waterLevel.position.set(waterCX, waterCY, 0.0);
    PIEaddElement(waterLevel);

    /* Reset Valve */
    line.scale.set(0, 0, 0);
    line = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.3), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line.rotateZ(Math.PI / 2);
    line.position.set(1.75, 1.15, 0.0);
    PIEaddElement(line);

    /*Reset tapWater*/
    geometry = new THREE.BoxGeometry(0.06, 0.6, 0.0);
    tapWater = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0x2EA3FF }));
    tapWater.position.set(1.7, 1.76 - 0.24, 0.1);
    PIEaddElement(tapWater);
    tapWater.scale.set(0, 0, 0);
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

/* This function updates the location of all experiment elements during each animation frame. */
function updateExperimentElements(t, dt)
{
    var geo;
    count++;
    var jarMax = maxWL / 100;
    var step = WLstep / 100;
    if (waterH < jarMax && f == 0) {
        // PIEslowdownAnimation();
        if (tSpeed < 10) {
            tSpeed++;
            myTap4.rotateX(Math.PI / 8);
        }
        dx = 0;
        dy = 0;
        balloon.scale.set(0, 0, 0);
        geo = new THREE.Shape();
        geo.moveTo(1.75, 1.15);
        geo.quadraticCurveTo(1.82 * 1.07, 1.02 * 1.07, 1.90, 0.90);
        geo.quadraticCurveTo(1.75, 0.5, 1.60, 0.90);
        geo.quadraticCurveTo(1.55, 1.09, 1.75, 1.15);
        geometry = new THREE.ShapeGeometry(geo);
        balloon = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0xFF5D00 }));
        PIEaddElement(balloon);

        line.scale.set(0, 0, 0);
        line = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.3), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
        line.rotateZ(Math.PI / 2);
        line.position.set(1.75, 1.15, 0.0);
        PIEaddElement(line);

        tapWater.scale.set(1, 1, 1);
        waterH += step;
        waterCY = 1.20 + waterH / 2;
        waterLevel.scale.set(0, 0, 0);
        waterLevel = new THREE.Mesh( new THREE.BoxGeometry(waterW, waterH, 0.0) , new THREE.MeshStandardMaterial({ color: 0x2EA3FF }));
        waterLevel.position.set(waterCX, waterCY, 0.0);
        PIEaddElement(waterLevel);
        
        TV = "OPEN";
        BS = "CLOSED";
        PIEchangeDisplayText(TS, TV);
        PIEchangeDisplayText(BV, BS);
    }
    else if (waterH >= jarMax) {
        f = 1;
    }

    if (f == 1) {

        if (tSpeed != 0) {
            tSpeed--;
            myTap4.rotateX(-Math.PI / 8);
            tapWater.scale.set(0, 0, 0);
            geometry = new THREE.BoxGeometry(0.06 -0.006*(10-tSpeed), 0.6, 0.0);
            tapWater = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0x2EA3FF }));
            tapWater.position.set(1.7, 1.76 - 0.24, 0.1);
            PIEaddElement(tapWater);
        }
        else {
            tapWater.scale.set(0, 0, 0);
        }
        //PIEslowdownAnimation();
        dx += 0.0018;
        dy += 0.0018;
        
        
        line.scale.set(0, 0, 0);
        line = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.3), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
        line.position.set(1.75, 1.15, 0.0);
        PIEaddElement(line);

        waterH -= step;
        waterCY = 1.20 + waterH / 2;
        waterLevel.scale.set(0, 0, 0);
        waterLevel = new THREE.Mesh(new THREE.BoxGeometry(waterW, waterH, 0.0), new THREE.MeshStandardMaterial({ color: 0x2EA3FF }));
        waterLevel.position.set(waterCX, waterCY, 0.0);
        PIEaddElement(waterLevel);

        balloon.scale.set(0, 0, 0);
        geo = new THREE.Shape();
        geo.moveTo(1.75, 1.15);
        geo.quadraticCurveTo(1.82 * 1.07 + dx , 1.02 * 1.07 + dy, 1.90 + dx, 0.90 -dy);
        geo.quadraticCurveTo(1.75, 0.5 - dy , 1.60 - dx, 0.90 - dy);
        geo.quadraticCurveTo(1.55 - dx, 1.09 + dy, 1.75, 1.15);
        geometry = new THREE.ShapeGeometry(geo);
        balloon = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0xFF5D00 }));
        PIEaddElement(balloon);

        TV = "CLOSED";
        BS = "OPEN";
        PIEchangeDisplayText(TS, TV);
        PIEchangeDisplayText(BV, BS);
        if (waterH <= 0.01) {
            f = 0;
            PIEresetExperiment();
        }
    }

    PIEchangeDisplayText(WL, waterH*100);
}

/******************* Update (animation changes) code ends ***********************/