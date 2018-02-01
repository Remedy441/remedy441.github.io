/* Global Variables */
var mySceneTLX;         //Top Left corner X coordinate
var mySceneTLY;         //Top Left corner Y coordinate
var mySceneBRX;         //Bottom Right corner X coordinate
var mySceneBRY;         //Bottom Right corner Y coordinate
var mySceneW;           //Scene Width
var mySceneH;           //Scene Height
var myCenterX;          //Scene Center X coordinate
var myCenterY;          //Scene Center Y coordinate

var setup;
var room, floor, table, leftPulley, rightPulley, leftPan, rightPan, bigBox;
var leftBox1, leftBox2, leftBox3;
var rightBox1, rightBox2, rightBox3;
var upperRope, leftRope, rightRope, ropeTexture;
var hookLeft, hookRight;
var light1, light2;

//values of weights
var leftWeight1, leftWeight2, leftWeight3;
var rightWeight1, rightWeight2, rightWeight3;

var yHigh, yLow;
var leftPanX, rightPanX;
var panHeight, panWidth;
var boxSizeMin, boxSizeMax;
var resizeFactor;
var pulleyY;
var pulleyRadius;
var leftPulleyX, rightPulleyX;
var ropeThickness;
var tableHeight, tableLength;
var floorDimension;
var zPosition;
var globalRotation;

//loading manager
var manager;
var loaded;

/* Physics Stuff */
var lefPanMass, rightPanMass;
var acc, leftPanVelocity, rightPanVelocity;
var bigBoxPositionX;
var GRAVITY = -10.0;
var time;

/*********************** GUI control objects code *****************************/

//3 sliders for each pan
var lbm1;             //Left Box Mass Label
var lbm2;             //Left Box Mass Label
var lbm3;             //Left Box Mass Label
var rbm1;             //Right Box Mass Label
var rbm2;             //Right Box Mass Label
var rbm3;             //Right Box Mass Label

var timer;           //Timer label

var massDefault;     //Box Default Mass
var massMin;         //Mass minimum value
var massMax;         //Mass maximum value
var massSliderStep;  //Mass slider step value

function initialiseControlVariables() {
    lbm1 = "Red";
    lbm2 = "Green";
    lbm3 = "Blue";
    rbm1 = "Red ";
    rbm2 = "Green ";
    rbm3 = "Blue ";

    Timer = "Timer";

    massMin = 1.0;
    massMax = 100.0;
    massSliderStep = 0.1;
    massDefault = 30.0;
}

function initialiseControls() {
    initialiseControlVariables();

    //Input Panel
    PIEaddInputCommand("Left Side Weights:-", emptyFunction);
    PIEaddInputSlider(lbm1, massDefault, handleLeftWeight1, massMin, massMax, massSliderStep);
    PIEaddInputSlider(lbm2, massDefault, handleLeftWeight2, massMin, massMax, massSliderStep);
    PIEaddInputSlider(lbm3, massDefault, handleLeftWeight3, massMin, massMax, massSliderStep);

    PIEaddInputCommand("Right Side Weights:-", emptyFunction);
    PIEaddInputSlider(rbm1, massDefault, handleRightWeight1, massMin, massMax, massSliderStep);
    PIEaddInputSlider(rbm2, massDefault, handleRightWeight2, massMin, massMax, massSliderStep);
    PIEaddInputSlider(rbm3, massDefault, handleRightWeight3, massMin, massMax, massSliderStep);

    //display panel

    PIEaddDisplayText(Timer, time.toFixed(2)+"");

    PIEaddDisplayCommand("Left Side Weights:-", emptyFunction);
    PIEaddDisplayText(lbm1, massDefault+"");
    PIEaddDisplayText(lbm2, massDefault+"");
    PIEaddDisplayText(lbm3, massDefault+"");

    PIEaddDisplayCommand("Right Side Weights:-", emptyFunction);
    PIEaddDisplayText(rbm1, massDefault+"");
    PIEaddDisplayText(rbm2, massDefault+"");
    PIEaddDisplayText(rbm3, massDefault+"");

}

//slider handlers
function handleLeftWeight1(val) {
    leftWeight1 = val;

    //additions
    leftPanVelocity = 0;
    rightPanVelocity = 0;
    acc = 0;
    PIEchangeDisplayText(lbm1, val.toFixed(2));

    //change size of box
    var newSize = resizeFactor*(val-1) + boxSizeMin;
    leftBox1.position.y += (newSize/2 - leftBox1.scale.y/2);
    leftBox1.scale.y = newSize;

    //reset time
    time = 0.0;
    PIEchangeDisplayText(Timer, time.toFixed(2));

    PIErender();//for displaying the changed size
}
function handleLeftWeight2(val) {
    leftWeight2 = val;

    //additions
    leftPanVelocity = 0;
    rightPanVelocity = 0;
    acc = 0;
    PIEchangeDisplayText(lbm2, val.toFixed(2));
    //change size of box
    var newSize = resizeFactor*(val-1) + boxSizeMin;
    leftBox2.position.y += (newSize/2 - leftBox2.scale.y/2);
    leftBox2.scale.y = newSize;

    //reset time
    time = 0.0;
    PIEchangeDisplayText(Timer, time.toFixed(2));

    PIErender();//for displaying the changed size
}
function handleLeftWeight3(val) {
    leftWeight3 = val;

    //additions
    leftPanVelocity = 0;
    rightPanVelocity = 0;
    acc = 0;
    PIEchangeDisplayText(lbm3, val.toFixed(2));
    //change size of box
    var newSize = resizeFactor*(val-1) + boxSizeMin;
    leftBox3.position.y += (newSize/2 - leftBox3.scale.y/2);
    leftBox3.scale.y = newSize;

    //reset time
    time = 0.0;
    PIEchangeDisplayText(Timer, time.toFixed(2));

    PIErender();//for displaying the changed size
}
function handleRightWeight1(val) {
    rightWeight1 = val;

    //additions
    leftPanVelocity = 0;
    rightPanVelocity = 0;
    acc = 0;
    PIEchangeDisplayText(rbm1, val.toFixed(2));
    //change size of box
    var newSize = resizeFactor*(val-1) + boxSizeMin;
    rightBox1.position.y += (newSize/2 - rightBox1.scale.y/2);
    rightBox1.scale.y = newSize;

    //reset time
    time = 0.0;
    PIEchangeDisplayText(Timer, time.toFixed(2));

    PIErender();//for displaying the changed size
}
function handleRightWeight2(val) {
    rightWeight2 = val;

    //additions
    leftPanVelocity = 0;
    rightPanVelocity = 0;
    acc = 0;
    PIEchangeDisplayText(rbm2, val.toFixed(2));
    //change size of box
    var newSize = resizeFactor*(val-1) + boxSizeMin;
    rightBox2.position.y += (newSize/2 - rightBox2.scale.y/2);
    rightBox2.scale.y = newSize;

    //reset time
    time = 0.0;
    PIEchangeDisplayText(Timer, time.toFixed(2));

    PIErender();//for displaying the changed size
}
function handleRightWeight3(val) {
    rightWeight3 = val;

    //additions
    leftPanVelocity = 0;
    rightPanVelocity = 0;
    acc = 0;
    PIEchangeDisplayText(rbm3, val.toFixed(2));
    //change size of box
    var newSize = resizeFactor*(val-1) + boxSizeMin;
    rightBox3.position.y += (newSize/2 - rightBox3.scale.y/2);
    rightBox3.scale.y = newSize;

    //reset time
    time = 0.0;
    PIEchangeDisplayText(Timer, time.toFixed(2));

    PIErender();//for displaying the changed size
}
/******************** End of GUI control objects code *************************/

/********************* Load Experiment objects code ***************************/

var helpContent;
function initialiseHelp() {
    helpContent="";
    helpContent = helpContent + "<h2>Experiment Help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows the effect of multiple forces applied on one single object.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to sliders which can be used to change the mass of each block on any side of the table.</p>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can start animation by clicking the start button.</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>The animation shows the motion of the blocks. The big block on the table moves either left, or right, or doesn't move at all, depending on the difference in forces due to gravity on both sides of the block.</p>";
    helpContent = helpContent + "<p>The right hand panel now shows the values of the experiment variables during animation.</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Mass of the blocks you chose in the setup stage.</li>";
    helpContent = helpContent + "<li>A timer which shows the time in which the block comes to rest. If the difference in forces on both sides is zero, the timer stays to zero, since there is no motion.</li>";
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
    helpContent = helpContent + "<p>The experiment shows the effect of multiple forces applied on one object.</p>";
    infoContent = infoContent + "<h3>Concept of Multiple Forces</h3>";
    infoContent = infoContent + "<p>Suppose you are pushing a heavy box. Now you asked your friend to help you out. Your friend also pushes the box from the same direction as you are. Will that help you? Yes. Why? Because now two forces are applied to the box in the same direction, which adds up, and moves the box.</p>";
    infoContent = infoContent + "<p>Now suppose your friend starts pushing the box in opposite direction. Is she helping you? No. Because now the two forces act in opposite direction and the net force acting on it is the difference between the two forces.</p>";
    infoContent = infoContent + "<p>Forces applied on an object in the same direction add to one another. And when forces act in opposite directions, the net force acting on it is the difference between the two forces.</p>";
    infoContent = infoContent + "<p>In general, more than one force may be acting on an object. However, the effect on the object is due to the net force acting on it.</p>";

    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene() {
    //Initialise Scene Variables
    mySceneTLX = -200.0;
    mySceneTLY = 150.0;
    mySceneBRX = 200.0;
    mySceneBRY = -150.0;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
}

function initialiseOtherVariables() {
    //Initialise variables
    zPosition = -50;
    floorDimension = 5 * mySceneW;
    tableHeight = mySceneH / 2;
    pulleyY = tableHeight + 27.5;
    tableLength = mySceneW / 2;
    leftPanX = myCenterX - tableLength / 2 - 35;
    rightPanX = myCenterX + tableLength / 2 + 35;
    panHeight = 50;
    panWidth = 70;
    leftPulleyX = -tableLength/2 - 17.5;
    rightPulleyX = tableLength/2 + 17.5;
    pulleyRadius = 15.0;
    ropeThickness = 2.0;
    yHigh = mySceneH / 2;
    yLow = 55;
    bigBoxPositionX = myCenterX;
    globalRotation = 0;//Math.PI/5;

    massDefault = 30.0;

    time = 0.0;

    //Range of box size
    boxSizeMin = 5.0;
    boxSizeMax = 20.0;

    resizeFactor = (boxSizeMax - boxSizeMin) / (100.0 - 1.0);

    rightPanVelocity = 0.0;
    leftPanVelocity = 0.0;
}

function loadExperimentElements() {

    PIEsetExperimentTitle("Multiple forces – direction and result");
    PIEsetDeveloperName("Rishabh Gupta");
    PIEhideControlElement();

    //initialise help and info content
    initialiseHelp();
    initialiseInfo();

    //initialise Scene
    initialiseScene();

    //initialise Other Variables
    initialiseOtherVariables();

    setup = new THREE.Object3D();

    loaded = false;
    //create loading GUI
    var progressGUI = new THREE.Object3D();
    var progress = new THREE.Mesh(
        new THREE.BoxGeometry(101,6,5),
        new THREE.MeshPhongMaterial({color:0x000000})
    );
    progress.position.set(myCenterX, myCenterY, zPosition+100);
    progressGUI.add(progress);

    var progressBar = new THREE.Mesh(
        new THREE.BoxGeometry(1,5,5.5),
        new THREE.MeshPhongMaterial({color:0xff0000})
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
        PIEaddElement(setup)
        PIEaddElement(floor);
        setup.rotateY(globalRotation);
        //setup.position.x += mySceneW/3;
        setup.position.y -= mySceneH/2;
        progressGUI.visible = false;
        loaded = true;
        PIEshowControlElement();
        PIErender();
    };
    manager.onError = function ( url ) {
    	console.log( 'There was an error loading ' + url );
    };

    light1 = new THREE.SpotLight(0xffffff, 0.7);
    light1.position.y = 100;
    light1.position.x -= 300;
    light1.position.z = 200;
    light1.penumbra = 1;
    PIEaddElement(light1);

    light2 = new THREE.SpotLight(0xffffff, 0.7);
    light2.position.y = 100;
    light2.position.x += 300;
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

    createHooks();

    //create ropes
    createRopes();

    createPans();

    createBigBox();

    //Instantiate experiment controls
    initialiseControls();

    resetVariables();
    //Reset all positions
    //resetExperiment();

    PIEhideControlElement();

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    var controls = new THREE.OrbitControls( PIEcamera, PIErenderer.domElement );
	controls.addEventListener( 'change', PIErender );

    controls.enableZoom = true;
    controls.minDistance = PIEcamera.position.z - zPosition - 300;
    controls.maxDistance = PIEcamera.position.z - zPosition - 50;
    controls.enablePan = false;
    controls.minPolarAngle = Math.PI/2.5;
    controls.maxPolarAngle = Math.PI/2;
    controls.minAzimuthAngle = -Math.PI/5;
	controls.maxAzimuthAngle = Math.PI/5;
    PIEspotLight.decay = 1;

    //PIEsetCameraDepth(10000);       //Unable to set the far clipping plane of the camera
}
window.onerror = function(message, url, lineNumber) {
    if(lineNumber == 441)
        return true;
    return false;
};

/******************* End of Load Experiment objects code **********************/

/*************************** Reset Experiment code ****************************/

function resetExperiment() {
    //initialise Other Variables
    resetVariables();

    var mid = (yHigh + yLow) / 2;

    //rotate pulleys
    var dist = leftPan.position.y - mid;
    rightPulley.rotateY(dist / pulleyRadius);
    leftPulley.rotateY(dist / pulleyRadius);

    leftPan.position.y = mid;
    rightPan.position.y = mid;

    rightRope.position.y = (pulleyY + mid)/ 2;
    rightRope.scale.y = pulleyY - mid;
    leftRope.position.y = (pulleyY + mid)/ 2;
    leftRope.scale.y = pulleyY - mid;

    bigBox.position.x = myCenterX;

    //reset sizes of boxes
    var newSize = 9.393939394;
    var h11 = panHeight - newSize/2;
    rightBox1.position.y = -h11
    rightBox1.scale.y = newSize;
    rightBox2.position.y = -h11;
    rightBox2.scale.y = newSize;
    rightBox3.position.y = -h11;
    rightBox3.scale.y = newSize;
    leftBox1.position.y = -h11;
    leftBox1.scale.y = newSize;
    leftBox2.position.y = -h11;
    leftBox2.scale.y = newSize;
    leftBox3.position.y = -h11;
    leftBox3.scale.y = newSize;

    //reset sliders
    //Input Panel
    PIEchangeInputSlider(lbm1, massDefault);
    PIEchangeInputSlider(lbm2, massDefault);
    PIEchangeInputSlider(lbm3, massDefault);
    PIEchangeInputSlider(rbm1, massDefault);
    PIEchangeInputSlider(rbm2, massDefault);
    PIEchangeInputSlider(rbm3, massDefault);

    //display panel
    PIEchangeDisplayText(lbm1, massDefault.toFixed(2));
    PIEchangeDisplayText(lbm2, massDefault.toFixed(2));
    PIEchangeDisplayText(lbm3, massDefault.toFixed(2));
    PIEchangeDisplayText(rbm1, massDefault.toFixed(2));
    PIEchangeDisplayText(rbm2, massDefault.toFixed(2));
    PIEchangeDisplayText(rbm3, massDefault.toFixed(2));
    PIEchangeDisplayText(Timer, time);
}

function resetVariables() {
    leftWeight1 = massDefault;
    leftWeight2 = massDefault;
    leftWeight3 = massDefault;
    rightWeight1 = massDefault;
    rightWeight2 = massDefault;
    rightWeight3 = massDefault;
    rightPanVelocity = 0.0;
    leftPanVelocity = 0.0;
    bigBoxPositionX = myCenterX;
    time = 0.0;
}

/********************** End of Reset Experiment code **************************/

/******************** Update (animation changes) code *************************/

function updateExperimentElements(t, dt) {
    if(loaded) {
        var deltaT = dt / 1000.0;    //seconds

        //UP is taken positive
        acc = GRAVITY;
        var uLeft, aLeft, sLeft;
        var uRight, aRight, sRight;

        if(leftPan.position.y >= yLow &&  leftPan.position. y <= yHigh) {  //not reached at end points
            var leftMass = leftWeight1 + leftWeight2 + leftWeight3;
            var rightMass = rightWeight1 + rightWeight2 + rightWeight3;
            aLeft = GRAVITY * ((leftMass - rightMass) / (leftMass * 1.0));
            uLeft = leftPanVelocity;
            sLeft = (uLeft * deltaT) + (aLeft * deltaT * deltaT * 1.0)/2.0;
            if(leftPan.position.y + sLeft > yHigh) {
                sLeft = yHigh - leftPan.position.y;
            }
            if(leftPan.position.y + sLeft < yLow) {
                sLeft = yLow - leftPan.position.y;
            }

            //The timer will run only when the blocks are moving, i.e.
            //it will stop when the blocks have reached the end
            //or the blocks don't  move at all, due to same weight on both sides
            if(sLeft != 0) {
                time += deltaT;
                PIEchangeDisplayText(Timer, time.toFixed(2));
            }

            leftPan.position.y += sLeft;
            bigBox.position.x += sLeft;
            leftPanVelocity = uLeft + aLeft * deltaT;

            sRight = -sLeft;
            rightPan.position.y += sRight;

            rightPanVelocity = -leftPanVelocity;

            //rotate pulleys and ropes
            rightPulley.rotateY(-sLeft / pulleyRadius);
            leftPulley.rotateY(-sLeft / pulleyRadius);
            ropeTexture.offset.y += 0.0085 * sLeft;
            leftRope.scale.y = pulleyY - leftPan.position.y;
            rightRope.scale.y = pulleyY - rightPan.position.y;
            leftRope.position.y = (pulleyY + leftPan.position.y) / 2;
            rightRope.position.y = (pulleyY + rightPan.position.y) / 2;
        } else {
            rightPanVelocity = 0;
            leftPanVelocity = 0;
        }
        if(leftPan.position.y > yHigh) leftPan.position.y = yHigh;
        else if(leftPan.position.y < yLow) leftPan.position.y = yLow;
        if(rightPan.position.y > yHigh) rightPan.position.y = yHigh;
        else if(rightPan.position.y < yLow) rightPan.position.y = yLow;
    }
}

/******************* Update (animation changes) code **************************/

/************************** Helper Functions **********************************/


function createRopes() {
    var g = new THREE.CylinderGeometry(ropeThickness, ropeThickness, tableLength * 1.2);
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
            rope.position.y = pulleyY + 17.5;
            rope.castShadow = true;
            setup.add(rope);

            leftRope = new THREE.Mesh(gSide, m);
            leftRope.rotation.y = Math.PI;
            leftRope.rotation.z = Math.PI;
            leftRope.position.x = leftPanX;
            leftRope.position.z = zPosition;
            leftRope.position.y = (pulleyY + (yHigh + yLow) / 2)/ 2;
            leftRope.scale.y = pulleyY - (yHigh + yLow) / 2;
            leftRope.castShadow = true;
            setup.add(leftRope);

            rightRope = new THREE.Mesh(gSide, m);
            rightRope.rotation.y = Math.PI;
            rightRope.position.x = rightPanX;
            rightRope.position.z = zPosition;
            rightRope.position.y = (pulleyY + (yHigh + yLow) / 2)/ 2;
            rightRope.scale.y = pulleyY - (yHigh + yLow) / 2;
            rightRope.castShadow = true;
            setup.add(rightRope);
        }
    );
}

function createPans() {
    var w = panWidth / 2;
    var h = panHeight;

    leftPan = new THREE.Object3D();
    var leftPanBase = new THREE.Mesh(
        new THREE.CylinderGeometry(w, w, 2, 20),
        new THREE.MeshPhongMaterial({color: 0x111111})
    );
    leftPanBase.castShadow = true;
    leftPanBase.position.y -= panHeight;
    leftPan.add(leftPanBase);

    var leftBob = new THREE.Mesh(
        new THREE.SphereGeometry(5),
        new THREE.MeshPhongMaterial({color: 0x000000})
    );
    leftBob.castShadow = true;
    leftPan.add(leftBob);

    var m = new THREE.LineBasicMaterial({color: 0x555555, linewidth:3});
    var lr1g = new THREE.Geometry();
    lr1g.vertices.push(new THREE.Vector3(0, -h, w));
    lr1g.vertices.push(new THREE.Vector3(0, 0, 0));
    var lr1 = new THREE.Line(lr1g, m);
    leftPan.add(lr1);
    var lr2g = new THREE.Geometry();
    lr2g.vertices.push(new THREE.Vector3(-w*0.86602540378, -h, -w*0.5));
    lr2g.vertices.push(new THREE.Vector3(0, 0, 0));
    var lr2 = new THREE.Line(lr2g, m);
    leftPan.add(lr2);
    var lr3g = new THREE.Geometry();
    lr3g.vertices.push(new THREE.Vector3(w*0.86602540378, -h, -w*0.5));
    lr3g.vertices.push(new THREE.Vector3(0, 0, 0));
    var lr3 = new THREE.Line(lr3g, m);
    leftPan.add(lr3);

    leftPan.position.z = zPosition;
    leftPan.position.x = leftPanX;
    leftPan.position.y = (yHigh + yLow) / 2;

    rightPan = leftPan.clone();

    rightPan.position.z = zPosition;
    rightPan.position.x = rightPanX;
    rightPan.position.y = (yHigh + yLow) / 2;

    //creating boxes for pan
    var defaultHeight = 9.393939394;
    var g = new THREE.BoxGeometry(panWidth/4, 1, 20);
    leftBox1 = new THREE.Mesh(
        g,
        new THREE.MeshPhongMaterial({color:0xff0000})
    );
    leftBox1.castShadow = true;
    leftPan.add(leftBox1);
    leftBox1.scale.y = defaultHeight;
    leftBox1.position.y -= h - defaultHeight/2;
    leftBox1.position.x -= panWidth/3;

    leftBox2 = new THREE.Mesh(
        g,
        new THREE.MeshPhongMaterial({color:0x00ff00})
    );
    leftBox2.castShadow = true;
    leftPan.add(leftBox2);
    leftBox2.scale.y = defaultHeight;
    leftBox2.position.y -= h - defaultHeight/2;

    leftBox3 = new THREE.Mesh(
        g,
        new THREE.MeshPhongMaterial({color:0x0000ff})
    );
    leftBox3.castShadow = true;
    leftPan.add(leftBox3);
    leftBox3.scale.y = defaultHeight;
    leftBox3.position.y -= h - defaultHeight/2;
    leftBox3.position.x += panWidth/3;

    //right boxes
    rightBox1 = new THREE.Mesh(
        g,
        new THREE.MeshPhongMaterial({color:0xff0000})
    );
    rightBox1.castShadow = true;
    rightPan.add(rightBox1);
    rightBox1.scale.y = defaultHeight;
    rightBox1.position.y -= h - defaultHeight/2;
    rightBox1.position.x -= panWidth/3;

    rightBox2 = new THREE.Mesh(
        g,
        new THREE.MeshPhongMaterial({color:0x00ff00})
    );
    rightBox2.castShadow = true;
    rightPan.add(rightBox2);
    rightBox2.scale.y = defaultHeight;
    rightBox2.position.y -= h - defaultHeight/2;

    rightBox3 = new THREE.Mesh(
        g,
        new THREE.MeshPhongMaterial({color:0x0000ff})
    );
    rightBox3.castShadow = true;
    rightPan.add(rightBox3);
    rightBox3.scale.y = defaultHeight;
    rightBox3.position.y -= h - defaultHeight/2;
    rightBox3.position.x += panWidth/3;

    setup.add(leftPan);
    setup.add(rightPan);
}

function createPulleys() {
    var loader = new THREE.JSONLoader(manager);
    loader.load( "pulley.js", function (geometry, materials) {
               var m = new THREE.MeshPhongMaterial({color:0x111111});
               leftPulley = new THREE.Mesh(geometry, m);
               leftPulley.position.x = leftPulleyX;
               leftPulley.position.y = pulleyY;
               leftPulley.position.z = zPosition;
               leftPulley.scale.set(20, 20, 20);
               leftPulley.rotateX(Math.PI/2);
               leftPulley.castShadow = true;
               setup.add(leftPulley);

               rightPulley = new THREE.Mesh(geometry, m);
               rightPulley.position.x = rightPulleyX;
               rightPulley.position.y = pulleyY;
               rightPulley.position.z = zPosition;
               rightPulley.scale.set(20, 20, 20);
               rightPulley.rotateX(Math.PI/2);
               rightPulley.castShadow = true;
               setup.add(rightPulley);
           });
}

function createHooks() {
    var loader = new THREE.JSONLoader(manager);
    loader.load( "pulley_hook.js", function (geometry, materials) {
               var m = new THREE.MeshPhongMaterial({color:0x5c4f43});
               hookLeft = new THREE.Mesh(geometry, m);
               hookLeft.position.x = -tableLength/2;
               hookLeft.position.y = tableHeight+10;
               hookLeft.position.z = zPosition;
               hookLeft.scale.set(5, 5, 5);
               hookLeft.rotateZ(Math.PI/4);
               hookLeft.castShadow = true;
               setup.add(hookLeft);

               hookRight = new THREE.Mesh(geometry, m);
               hookRight.position.x = tableLength/2;
               hookRight.position.y = tableHeight+10;
               hookRight.position.z = zPosition;
               hookRight.scale.set(5, 5, 5);
               hookRight.rotateZ(-Math.PI/4);
               hookRight.castShadow = true;
               setup.add(hookRight)
           });
}

function createTable() {
    table = new THREE.Object3D();
    var offset = 10;
    var gBase = new THREE.BoxGeometry(tableLength, 10, tableLength - 20);
    var gLeg = new THREE.BoxGeometry(10, tableHeight, 10);
    var base, legLF, legRF, legLB, legRB;
    new THREE.TextureLoader(manager).load(
    	'hardwood2_diffuse.jpg',
    	function ( texture ) {
    		var mat = new THREE.MeshPhongMaterial( {
    			map: texture,
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
            setup.add(table);
    	}
    );

}

function createBigBox() {
    var g = new THREE.BoxGeometry(tableLength/3, tableHeight / 2, 50);
    var m = new THREE.MeshPhongMaterial({
        color: 0xFF0000
    });
    bigBox = new THREE.Mesh(g, m);
    bigBox.position.x = myCenterX;
    bigBox.position.z = zPosition;
    bigBox.position.y = tableHeight + tableHeight/4;
    setup.add(bigBox);
}

function createFloor() {
    var g = new THREE.PlaneGeometry(floorDimension, floorDimension);
    new THREE.TextureLoader(manager).load(
    	'ground.jpg',
    	function (texture) {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(15, 15);
            texture.anisotropy = 16;
    		var mat = new THREE.MeshPhongMaterial( {
    			map: texture,
                side: THREE.DoubleSide
    		 } );
            floor = new THREE.Mesh(g, mat);
            floor.rotateX(-Math.PI/2);
            floor.position.z = zPosition;
            floor.receiveShadow = true;
            floor.position.y -= mySceneH/2;
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
    room.position.z += 10;
    room.position.y = 100;
    PIEaddElement(room);
    PIErender();
}

function emptyFunction() {}

/***************************Helper Functions***********************************/
