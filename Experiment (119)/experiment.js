/* Global Variables */
var mySceneTLX;         //Top Left corner X coordinate
var mySceneTLY;         //Top Left corner Y coordinate
var mySceneBRX;         //Bottom Right corner X coordinate
var mySceneBRY;         //Bottom Right corner Y coordinate
var mySceneW;           //Scene Width
var mySceneH;           //Scene Height
var myCenterX;          //Scene Center X coordinate
var myCenterY;          //Scene Center Y coordinate

/* Room Variables */

/* Room Objects */

/* 3D Objects */
var room, floor, table, leftPulley, rightPulley, leftBox, rightBox;
var upperRope, leftRope, rightRope, ropeTexture;
var light1, light2;

var yHigh, yLow;
var leftBoxX, rightBoxX;
var boxSizeMin, boxSizeMax;
var resizeFactor;
var pulleyY;
var pulleyRadius;
var leftPulleyX, rightPulleyX;
var tableHeight, tableLength;
var floorDimension;
var zPosition;
var rotate = 0.0;

//loading manager
var manager;

/* Physics Stuff */
var lefBoxMass, rightBoxMass;
var acc, leftBoxVelocity, rightBoxVelocity;
var distanceTravelled;
var initialHeight;
var GRAVITY = -10.0;

/************************* Interaction functions ******************************/

function rightBoxDrag(element, newpos) {

    if(newpos.y >= yLow && newpos.y <= yHigh) {

        //rotate pulleys
        rightPulley.rotateY((newpos.y - rightBox.position.y) / pulleyRadius);
        leftPulley.rotateY((newpos.y - rightBox.position.y) / pulleyRadius);

        //move rope textures
        ropeTexture.offset.y -= 0.008 * (newpos.y - rightBox.position.y);

        //Move left box also
        leftBox.position.y += (rightBox.position.y - newpos.y);
        rightBox.position.y = newpos.y;

        //Adjust ropes
        leftRope.position.y = (pulleyY + leftBox.position.y)/ 2;
        leftRope.scale.y = pulleyY - leftBox.position.y;
        rightRope.position.y = (pulleyY + rightBox.position.y)/ 2;
        rightRope.scale.y = pulleyY - rightBox.position.y;

        //Reset Velocities to zero
        rightBoxVelocity = 0.0;
        leftBoxVelocity = 0.0;

        //change initial height
        initialHeight = newpos.y - yLow;
        PIEchangeInputSlider(initialHeightLabel, initialHeight);

        distanceTravelled = 0.0;

        PIEchangeDisplayText(distT, 0.0);
        PIEchangeDisplayText(wdTBlock, 0.0);
        PIEchangeDisplayText(wdGBlock, 0.0);
        PIEchangeDisplayText(wdTWeight, 0.0);
        PIEchangeDisplayText(wdGWeight, 0.0);
        PIEchangeDisplayText(initialHeightLabel, 0.0);

    }

}

/********************* End of Interaction functions ***************************/

/*********************** GUI control objects code *****************************/

var lbm;             //Left Box Mass Label
var rbm;             //Right Box Mass Label
var distT;           //Distance travelled label
var wdLabel;         //Work done label
var wdTBlock;        //Label - work done by tension on block
var wdGBlock;        //Label - work done by gravity on block
var wdTWeight;       //Label - work done by tension on Weight
var wdGWeight;       //Label - work done by gravity on Weight
var initialHeightLabel;

var lbmDefault;      //Left Box Default Mass
var rbmDefault;      //Right Box Default Mass
var massMin;         //Mass minimum value
var massMax;         //Mass maximum value
var massSliderStep;  //Mass slider step value

function initialiseControlVariables() {
    lbm = "Weight Applied";
    rbm = "Box Mass";
    distT = "Distance travelled";
    wdLabel = "Work Done";
    initialHeightLabel = "Box Height";

    wdTBlock = "By Tension";
    wdGBlock = "By Gravity";
    wdTWeight = "By Tension ";
    wdGWeight = "By Gravity ";

    massMin = 1;
    massMax = 100.0;
    massSliderStep = 0.1;
    heightSliderStep = 0.01;
}

function initialiseControls() {
    initialiseControlVariables();

    //Input Panel
    PIEaddInputSlider(lbm, lbmDefault, handelLeftBoxMass, massMin, massMax, massSliderStep);
    PIEaddInputSlider(rbm, rbmDefault, handelRightBoxMass, massMin, massMax, massSliderStep);
    PIEaddInputSlider(initialHeightLabel, 0.0, handelInitialHeight, 0.0, yHigh - yLow, heightSliderStep);

    //display panel
    PIEaddDisplayText(lbm, lbmDefault);
    PIEaddDisplayText(rbm, rbmDefault);
    PIEaddDisplayText(distT, "0.0");
    PIEaddDisplayCommand("Block", emptyFunction);
    PIEaddDisplayText(wdTBlock, "0.0");
    PIEaddDisplayText(wdGBlock, "0.0");
    PIEaddDisplayCommand("Weight", emptyFunction);
    PIEaddDisplayCommand("Test", emptyFunction);
    PIEaddDisplayText(wdTWeight, "0.0");
    PIEaddDisplayText(wdGWeight, "0.0");
}

//slider handlers
function handelLeftBoxMass(val) {
    leftBoxMass = val;
    var size = resizeFactor * (leftBoxMass - 1) + boxSizeMin;
    leftBox.scale.set(size, size, size);
    //additions
    leftBoxVelocity = 0;
    rightBoxVelocity = 0;
    distanceTravelled = 0;
    acc = 0;
    PIEchangeDisplayText(distT, 0.0);
    PIEchangeDisplayText(wdTBlock, 0.0);
    PIEchangeDisplayText(wdGBlock, 0.0);
    PIEchangeDisplayText(wdTWeight, 0.0);
    PIEchangeDisplayText(wdGWeight, 0.0);
    PIEchangeDisplayText(lbm, val);

    PIErender();//for displaying the changed size
}
function handelRightBoxMass(val) {
    rightBoxMass = val;
    var size = resizeFactor * (rightBoxMass - 1) + boxSizeMin;
    rightBox.scale.set(size, size, size);

    //additions
    leftBoxVelocity = 0;
    rightBoxVelocity = 0;
    distanceTravelled = 0;
    acc = 0;
    PIEchangeDisplayText(distT, 0.0);
    PIEchangeDisplayText(wdTBlock, 0.0);
    PIEchangeDisplayText(wdGBlock, 0.0);
    PIEchangeDisplayText(wdTWeight, 0.0);
    PIEchangeDisplayText(wdGWeight, 0.0);
    PIEchangeDisplayText(rbm, val);

    PIErender();//for displaying the changed size
}
function handelInitialHeight(val) {

    //move rope textures
    ropeTexture.offset.y -= 0.008 * (val - initialHeight);

    //Move left box also
    leftBox.position.y -= yLow + val - rightBox.position.y;
    rightBox.position.y = yLow + val;
    initialHeight = val;

    //Adjust ropes
    leftRope.position.y = (pulleyY + leftBox.position.y)/ 2;
    leftRope.scale.y = pulleyY - leftBox.position.y;
    rightRope.position.y = (pulleyY + rightBox.position.y)/ 2;
    rightRope.scale.y = pulleyY - rightBox.position.y;

    PIErender();
}
/******************** End of GUI control objects code *************************/

/********************* Load Experiment objects code ***************************/

var helpContent;
function initialiseHelp() {
    helpContent="";
    helpContent = helpContent + "<h2>Experiment Help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows the work done by tension and gravity, when two weights are tied by a rope passing through pulleys.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to three sliders.</p>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Mass of box.</li>";
    helpContent = helpContent + "<li>Mass of weight attached.</li>";
    helpContent = helpContent + "<li>Initial height of the box.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>You can also drag the box to adjust it's initial height.</p>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can start animation by clicking the start button.</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>The animation shows the box and the weight moving up and down according to the difference of their mass.</p>";
    helpContent = helpContent + "<p>The right hand panel now shows the values of the experiment variables during animation.</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Mass of the box (in kg).</li>";
    helpContent = helpContent + "<li>Mass of attached weight (in kg).</li>";
    helpContent = helpContent + "<li>Distance travelled by the box (in m).</li>";
    helpContent = helpContent + "<li>Work done on box, by tension and by gravity (in J).</li>";
    helpContent = helpContent + "<li>Work done on weight, by tension and by gravity (in J).</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>Gravity = 10m/s<sup>2</sup></p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play button on the top line.</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animation by using the speed control buttons.</p>";
    helpContent = helpContent + "<p>Repeat the experiment with different setups.</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo() {
    infoContent =  "";
    infoContent = infoContent + "<h2>Experiment Concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows the work done by tension and gravity, when two weights are tied by a rope passing through pulleys.</p>";
    infoContent = infoContent + "<h3>Concept of Work</h3>";
    infoContent = infoContent + "<p>Work done by an object is equal to the change in its energy. It can be the change in Kinetic Energy as well as Potential Energy.</p>";
    infoContent = infoContent + "<p>When a body moves up, work done by the body is given by the change in its gravitational potential energy.</p>";
    infoContent = infoContent + "<p>The path on which the body goes up doesn't matter. It is only the difference between the energy at initial point and energy at the final point.</p>";
    infoContent = infoContent + "<p>Work done against gravity can be calculated as:-</p>";
    infoContent = infoContent + "<p><em>W = mass X gravity X displacement</em></p>";
    infoContent = infoContent + "<p>Depending on direction of applied force and displacement, it can be positive on negative.</p>";
    infoContent = infoContent + "<p>If both are in opposite direction, then the work done by that force is negative. Otherwise positive.</p>";

    infoContent = infoContent + "<p>Tension in the  rope can be calculated as:-</p>";
    infoContent = infoContent + "<p><em>T = (2 X m<sub>1</sub> X m<sub>2</sub> X gravity ) / (m<sub>1</sub> + m<sub>2</sub>)</em></p>";
    infoContent = infoContent + "<p>And the work done by this tension is given by:-</p>";
    infoContent = infoContent + "<p><em>W = T X displacement</em></p>";

    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene() {
    //Initialise Scene Variables
    mySceneTLX = -200.0;
    mySceneTLY = 300.0;
    mySceneBRX = 200.0;
    mySceneBRY = 0.0;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
}

function initialiseOtherVariables() {
    //Initialise variables
    zPosition = -200;
    floorDimension = 2 * mySceneW;
    tableHeight = mySceneH / 2;
    pulleyY = tableHeight + 15;
    tableLength = mySceneW / 2;
    leftBoxX = myCenterX - tableLength / 2 - 22.5;
    rightBoxX = myCenterX + tableLength / 2 + 22.5;
    leftPulleyX = -tableLength/2 - 10;
    rightPulleyX = tableLength/2 + 10;
    pulleyRadius = 10.0;
    yHigh = mySceneH / 2.5;
    yLow = 20;

    lbmDefault = 30.0;     //Left Box Mass Default
    rbmDefault = 20.0;     //Right Box Mass Default

    //Range of box size
    boxSizeMin = 20.0;
    boxSizeMax = 40.0;

    resizeFactor = (boxSizeMax - boxSizeMin) / (100.0 - 1.0);

    leftBoxMass = lbmDefault;
    rightBoxMass = rbmDefault;
    rightBoxVelocity = 0.0;
    leftBoxVelocity = 0.0;
    distanceTravelled = 0.0;
    initialHeight = 0.0;
}

function loadExperimentElements() {

    PIEsetExperimentTitle("Negative Work Calculations");
    PIEsetDeveloperName("Rishabh Gupta");
    PIEhideControlElement();

    //initialise help and info content
    initialiseHelp();
    initialiseInfo();

    //initialise Scene
    initialiseScene();

    //initialise Other Variables
    initialiseOtherVariables();

    //create loading GUI
    var progressGUI = new THREE.Object3D();
    var progress = new THREE.Mesh(
        new THREE.BoxGeometry(101,6,5),
        new THREE.MeshLambertMaterial({color:0x000000})
    );
    progress.position.set(myCenterX, myCenterY, zPosition+100);
    progressGUI.add(progress);

    var progressBar = new THREE.Mesh(
        new THREE.BoxGeometry(1,5,5.5),
        new THREE.MeshLambertMaterial({color:0xff0000})
    );
    progressBar.position.set(myCenterX - 50, myCenterY, zPosition+100);
    progressGUI.add(progressBar);
    PIEaddElement(progressGUI);

    manager = new THREE.LoadingManager();
    manager.onProgress = function(url, itemsLoaded, itemsTotal) {
        progressBar.scale.x = (itemsLoaded / itemsTotal * 100);
        progressBar.position.x = myCenterX - 50 + (progressBar.scale.x / 2);
        PIErender();
        console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
    };
    manager.onStart = function ( url, itemsLoaded, itemsTotal ) {
    	console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
    };
    manager.onLoad = function ( ) {
    	console.log( 'Loading complete!');
        progressBar.scale.x = 100
        progressBar.position.x = myCenterX;
        PIErender();
        PIEaddElement(rope);
        PIEaddElement(rightRope);
        PIEaddElement(leftRope);
        PIEaddElement(rightPulley);
        PIEaddElement(leftPulley);
        PIEaddElement(rightBox);
        PIEaddElement(leftBox);
        //Allow Dragging of the Left Box
        PIEdragElement(rightBox);
        PIEsetDrag(rightBox, rightBoxDrag);
        PIEaddElement(table);
        PIEaddElement(floor);
        progressGUI.visible = false;
        PIEshowControlElement();
        PIErender();
    };
    manager.onError = function ( url ) {
    	console.log( 'There was an error loading ' + url );
    };

    light1 = new THREE.SpotLight(0xffffff, 0.2);
    light1.position.y = 300;
    light1.position.z = 200;
    light1.penumbra = 1;
    PIEaddElement(light1);

    light2 = new THREE.SpotLight(0xffffff, 0.5);
    light2.position.y = 50;
    light2.position.z = 200;
    light2.penumbra = 1;
    PIEaddElement(light2);

    //create Room
    createRoom();

    //Create Floor
    createFloor();

    //create Table
    createTable();

    //create pulleys
    createPulleys();

    //create ropes
    createRopes();

    //create boxes
    createBoxes();

    //Instantiate experiment controls
    initialiseControls();

    resetVariables();
    //Reset all positions
    //resetExperiment();

    PIEhideControlElement();

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}

/******************* End of Load Experiment objects code **********************/

/*************************** Reset Experiment code ****************************/

function resetExperiment() {
    //initialise Other Variables
    resetVariables();

    leftBox.position.y = yHigh;
    rightBox.position.y = yLow;

    rightRope.position.y = (pulleyY + yLow)/ 2;
    rightRope.scale.y = pulleyY - yLow;
    leftRope.position.y = (pulleyY + yHigh)/ 2;
    leftRope.scale.y = pulleyY - yHigh;

    //reset box sizes
    var size = resizeFactor * (rightBoxMass - 1) + boxSizeMin;
    rightBox.scale.set(size, size, size);
    var size = resizeFactor * (leftBoxMass - 1) + boxSizeMin;
    leftBox.scale.set(size, size, size);

    //reset sliders
    //Input Panel
    PIEchangeInputSlider(lbm, lbmDefault);
    PIEchangeInputSlider(rbm, rbmDefault);
    PIEchangeInputSlider(initialHeightLabel, 0.0);

    //display panel
    PIEchangeDisplayText(lbm, lbmDefault);
    PIEchangeDisplayText(rbm, rbmDefault);
    PIEchangeDisplayText(distT, 0.0);
    PIEchangeDisplayText(wdTBlock, 0.0);
    PIEchangeDisplayText(wdGBlock, 0.0);
    PIEchangeDisplayText(wdTWeight, 0.0);
    PIEchangeDisplayText(wdGWeight, 0.0);

}

function resetVariables() {
    leftBoxMass = lbmDefault;
    rightBoxMass = rbmDefault;
    rightBoxVelocity = 0.0;
    leftBoxVelocity = 0.0;
    distanceTravelled = 0.0;
    initialHeight = 0.0;
}

/********************** End of Reset Experiment code **************************/

/******************** Update (animation changes) code *************************/

function updateExperimentElements(t, dt) {
    var deltaT = dt / 1000.0;    //seconds

    //UP is taken positive
    acc = GRAVITY;
    var uLeft, aLeft, sLeft;
    var uRight, aRight, sRight;

    if(leftBox.position.y >= yLow &&  leftBox.position. y <= yHigh) {  //not reached at end points
        aLeft = GRAVITY * ((leftBoxMass - rightBoxMass) / (leftBoxMass * 1.0));
        uLeft = leftBoxVelocity;
        sLeft = (uLeft * deltaT) + (aLeft * deltaT * deltaT * 1.0)/2.0;
        if(leftBox.position.y + sLeft > yHigh) {
            sLeft = yHigh - leftBox.position.y;
        }
        if(leftBox.position.y + sLeft < yLow) {
            sLeft = yLow - leftBox.position.y;
        }
        leftBox.position.y += sLeft;

        leftBoxVelocity = uLeft + aLeft * deltaT;

        sRight = -sLeft;
        rightBox.position.y += sRight;

        rightBoxVelocity = -leftBoxVelocity;

        distanceTravelled += sRight;
        calculateWorkDone();

        //rotate pulleys and ropes
        if(sLeft > 0) { //left box moves up
            rightPulley.rotateY(-Math.abs(sLeft) / pulleyRadius);
            leftPulley.rotateY(-Math.abs(sLeft) / pulleyRadius);

            ropeTexture.offset.y += 0.01 * sLeft;

            leftRope.scale.y = pulleyY - leftBox.position.y;
            rightRope.scale.y = pulleyY - rightBox.position.y;
            leftRope.position.y = (pulleyY + leftBox.position.y) / 2;
            rightRope.position.y = (pulleyY + rightBox.position.y) / 2;

        } else {
            rightPulley.rotateY(Math.abs(sLeft) / pulleyRadius);
            leftPulley.rotateY(Math.abs(sLeft) / pulleyRadius);

            ropeTexture.offset.y += 0.01 * sLeft;

            leftRope.scale.y = pulleyY - leftBox.position.y;
            rightRope.scale.y = pulleyY - rightBox.position.y;
            leftRope.position.y = (pulleyY + leftBox.position.y) / 2;
            rightRope.position.y = (pulleyY + rightBox.position.y) / 2;

        }
        PIEchangeDisplayText(distT, distanceTravelled.toFixed(2));
        PIEchangeInputSlider(initialHeightLabel, (initialHeight+distanceTravelled));
    } else {
        rightBoxVelocity = 0;
        leftBoxVelocity = 0;
    }
    if(leftBox.position.y > yHigh) leftBox.position.y = yHigh;
    else if(leftBox.position.y < yLow) leftBox.position.y = yLow;
    if(rightBox.position.y > yHigh) rightBox.position.y = yHigh;
    else if(rightBox.position.y < yLow) rightBox.position.y = yLow;
}

/******************* Update (animation changes) code **************************/

/************************** Helper Functions **********************************/

function calculateWorkDone() {

    var wdTLeft, wdTRight;    //Work done by Tension
    var wdGLeft, wdGRight;    //Work done by Gravity
    var tension = (2 * leftBoxMass * rightBoxMass * GRAVITY)/(leftBoxMass + rightBoxMass);

    wdTRight = tension * distanceTravelled;
    wdTLeft = tension * distanceTravelled;
    wdGRight = rightBoxMass * GRAVITY * distanceTravelled;
    wdGLeft = leftBoxMass * GRAVITY * distanceTravelled;
    if(rightBoxVelocity > 0) {
        //right block is moving up
        wdTRight *= -1;
        wdGLeft *= -1;
    } else {
        wdTLeft *= -1;
        wdGRight *= -1;
    }
    PIEchangeDisplayText(wdTBlock, wdTRight.toFixed(2));
    PIEchangeDisplayText(wdTWeight, wdTLeft.toFixed(2));
    PIEchangeDisplayText(wdGBlock, wdGRight.toFixed(2));
    PIEchangeDisplayText(wdGWeight, wdGLeft.toFixed(2));
}

function createRopes() {
    var ropeThickness = 2;
    var g = new THREE.CylinderGeometry(ropeThickness, ropeThickness, tableLength * 1.1);
    var gSide = new THREE.CylinderGeometry(ropeThickness, ropeThickness, 1);
    g.openended = true;
    gSide.openended =true;
    ropeTexture = new THREE.TextureLoader(manager).load(
        'rope.jpg',
        function (txt) {
            ropeTexture = txt;
            ropeTexture.wrapT = THREE.RepeatWrapping;
            ropeTexture.wrapS = THREE.RepeatWrapping;
            ropeTexture.anisotropy = 4;
            ropeTexture.repeat.set(0.1, 2);
            var m = new THREE.MeshLambertMaterial({map: ropeTexture});
            rope = new THREE.Mesh(g, m);
            rope.rotation.z = Math.PI / 2;
            rope.rotation.x = Math.PI;
            rope.position.z = zPosition;
            rope.position.y = pulleyY + 12.5;

            leftRope = new THREE.Mesh(gSide, m);
            leftRope.rotation.y = Math.PI;
            leftRope.rotation.z = Math.PI;
            leftRope.position.x = leftBoxX;
            leftRope.position.z = zPosition;
            leftRope.position.y = (pulleyY + yHigh)/ 2;
            leftRope.scale.y = pulleyY - yHigh;

            rightRope = new THREE.Mesh(gSide, m);
            rightRope.rotation.y = Math.PI;
            rightRope.position.x = rightBoxX;
            rightRope.position.z = zPosition;
            rightRope.position.y = (pulleyY + yLow)/ 2;
            rightRope.scale.y = pulleyY - yLow;
        }
    );
}

function createPulleys() {
    var loader = new THREE.JSONLoader(manager);
    loader.load( "pulley.js", function (geometry, materials) {
               var m = new THREE.MeshLambertMaterial({color:0x111111});
               leftPulley = new THREE.Mesh(geometry, m);
               leftPulley.position.x = leftPulleyX;
               leftPulley.position.y = pulleyY;
               leftPulley.position.z = zPosition;
               leftPulley.scale.set(15, 15, 15);
               leftPulley.rotateX(Math.PI/2);
               leftPulley.rotateY(rotate);

               rightPulley = new THREE.Mesh(geometry, m);
               rightPulley.position.x = rightPulleyX;
               rightPulley.position.y = pulleyY;
               rightPulley.position.z = zPosition;
               rightPulley.scale.set(15, 15, 15);
               rightPulley.rotateX(Math.PI/2);
               rightPulley.rotateY(rotate);
           });
}

function createBoxes() {
    var g = new THREE.BoxGeometry(1, 1, 1);
    //left side weight
    var mat = new THREE.MeshPhongMaterial({color:0x000000});
    leftBox = new THREE.Mesh(g, mat);
    leftBox.receiveShadow = true;
    leftBox.castShadow = true;
    var size = resizeFactor * (leftBoxMass - 1) + boxSizeMin;
    leftBox.scale.set(size, size, size);

    leftBox.position.x = leftBoxX;
    leftBox.position.z = zPosition;
    leftBox.position.y = yHigh;//

    var bumpTexture, normalTexture;
    var bumpLoaded = false, normalLoaded = false;
    new THREE.TextureLoader(manager).load(
        'crate_bump.png',
        function (texture) {
            bumpTexture = texture;
            bumpLoaded = true;
        }
    );
    new THREE.TextureLoader(manager).load(
        'crate_normal.png',
        function (texture) {
            normalTexture = texture;
            normalLoaded = true;
        }
    );
    new THREE.TextureLoader(manager).load(
        'crate_diffuse.png',
        function (texture) {
            while(!bumpLoaded && !normalLoaded) {}
            var m = new THREE.MeshStandardMaterial({
                map: texture,
                metalness: 0.0,
                bumpMap: bumpTexture,
                normalMap: normalTexture
            });

            rightBox = new THREE.Mesh(g, m);
            rightBox.receiveShadow = true;
            rightBox.castShadow = true;
            var size = resizeFactor * (rightBoxMass - 1) + boxSizeMin;
            rightBox.scale.set(size, size, size);

            rightBox.position.x = rightBoxX;
            rightBox.position.z = zPosition;
            rightBox.position.y = yLow;//
        }
    );
}

function createTable() {
    table = new THREE.Object3D();
    var offset = 10;
    var gBase = new THREE.BoxGeometry(tableLength, 10, tableLength - 20);
    var gLeg = new THREE.BoxGeometry(10, tableHeight, 10);
    var base, legLF, legRF, legLB, legRB;
    var bumpTexture;
    var loaded = false;
    new THREE.TextureLoader(manager).load(
        'hardwood2_roughness.jpg',
        function (texture) {
            bumpTexture = texture;
            loaded = true;
        }
    )
    new THREE.TextureLoader(manager).load(
    	'hardwood2_diffuse.jpg',
    	function ( texture ) {
            while(!loaded){;}
    		var mat = new THREE.MeshStandardMaterial( {
    			map: texture,
                bumpMap: bumpTexture
    		 } );
            base = new THREE.Mesh(gBase, mat);
            base.position.y += tableHeight + 5;
            table.add(base);
            base.castShadow = true;
            base.receiveShadow = true;
            legLF = new THREE.Mesh(gLeg, mat);
            legLF.position.y += tableHeight / 2;
            legLF.position.x -= tableLength/2 - 10;
            legLF.position.z += (tableLength-20)/2 - 10;
            table.add(legLF);
            legLF.castShadow = true;
            legLF.receiveShadow = true;
            legRF = new THREE.Mesh(gLeg, mat);
            legRF.position.y += tableHeight / 2;
            legRF.position.x += tableLength/2 - 10;
            legRF.position.z += (tableLength-20)/2 - 10;
            table.add(legRF);
            legRF.castShadow = true;
            legRF.receiveShadow = true;
            legLB = new THREE.Mesh(gLeg, mat);
            legLB.position.y += tableHeight / 2;
            legLB.position.x -= tableLength/2 - 10;
            legLB.position.z -= (tableLength-20)/2 - 10;
            table.add(legLB);
            legLB.castShadow = true;
            legLB.receiveShadow = true;
            legRB = new THREE.Mesh(gLeg, mat);
            legRB.position.y += tableHeight / 2;
            legRB.position.x += tableLength/2 - 10;
            legRB.position.z -= (tableLength-20)/2 - 10;
            table.add(legRB);
            legRB.castShadow = true;
            legRB.receiveShadow = true;

            table.position.z = zPosition;
            table.rotateY(rotate);
    	}
    );

}

function createFloor() {
    var g = new THREE.PlaneGeometry(floorDimension, floorDimension);
    new THREE.TextureLoader(manager).load(
    	'grasslight-big.jpg',
    	function (texture) {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(5, 5);
            texture.anisotropy = 16;
    		var mat = new THREE.MeshLambertMaterial( {
    			map: texture,
                side: THREE.DoubleSide
    		 } );
            floor = new THREE.Mesh(g, mat);
            floor.rotateX(-Math.PI/2);
            //floor.position.y += 10;
            floor.position.z = 2*zPosition;
            floor.rotateY(rotate);
            floor.receiveShadow = true;
    	}
    );
}

function createRoom() {
    var g = new THREE.BoxGeometry(600, 600, 600);
    var m = new THREE.MeshPhongMaterial({
        color: 0x448cff,
        side: THREE.BackSide,
    });
    room = new THREE.Mesh(g, m);
    room.position.z = zPosition/2;
    room.position.y = 100;
    PIEaddElement(room);
    PIErender();
}

function emptyFunction() {}

/***************************Helper Functions***********************************/
