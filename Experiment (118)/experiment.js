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
var leftB;              //Left Barrier
var rightB;             //Right Barrier
var bottomB;            //Bottom Barrier
var topB;               //Top Barrier
var backB=-4.0;         //Back Barrier
var wallThickness;      //Wall Thickness

/* Room Objects */
var myFloor;            //Floor
var myCeiling;          //Ceiling
var myBack;             //Back
var myRight;            //Right
var myLeft;             //Left

/* 3D Objects */
var car1, car2;         //car references
var miniCar1, miniCar2;
var sedan1, sedan2;
var bus1, bus2;
var tank1, tank2;
var slope1, slope2;

/* boolean car controllers */
var car1Reached, car2Reached;
var calculatedP1, calculatedP2;

/* Other Parameters */
var car1Speed, car2Speed;
var carLength;
var gravity = 10;
var objectRotation = Math.PI / 12;             //objects are rotated by this angle on y-axis
var car1x, car1y, car1z, car2x, car2y, car2z;  //car reset positions
var t1, t2;                                    //time taken by each car
var p1, p2;                                    //calculated power of each car

/*********************** GUI control objects code *****************************/

var s1Angle;        //slope 1 angle slider label
var s2Angle;        //slope 2 angle slider label
var s1Height;       //slope 1 height slider label
var s2Height;       //slope 2 height slider label
var speed1;         //car 1 speed slider label
var speed2;         //car 2 speed slider label
var time1;          //time 1 display label
var time2;          //time 2 display label
var car1MassLabel;  //car 1 mass display label
var car2MassLabel;  //car 2 mass display label
var sAngleDefault;  //slope default angle value
var sHeightDefault; //slope default height value
var speedDefault;   //car speed default value
var sAngleMin;      //slope angle min value
var sAngleMax;      //slope angle max value
var sHeightMin;     //slope height min value
var sHeightMax;     //slope height max value
var speedMin;       //car speed min value
var speedMax;       //car speed max value
var sAngleStep;     //slope angle slider step
var sHeightStep;    //slope height slider step
var speedStep;      //car speed slider step

var power1DisplayText;
var power2DisplayText;

var miniCar1Label;
var sedan1Label;
var bus1Label;
var tank1Label;
var miniCar2Label;
var sedan2Label;
var bus2Label;
var tank2Label;

/* Slider handler functions */
function handleS1Angle(val) {
    changeSlopeAngle(slope1, val);
    changeCarAngle(car1, val);
    slope1.userData.angle = val;
    resetCarsPosition();
    PIErender();
}
function handleS2Angle(val) {
    changeSlopeAngle(slope2, val);
    changeCarAngle(car2, val);
    slope2.userData.angle = val;
    resetCarsPosition();
    PIErender();
}
function handleS1Height(val) {
    changeSlopeHeight(slope1, val);
    slope1.userData.height = val;
    PIEchangeDisplayText(s1Height, val);
    resetCarsPosition();
    PIErender();
}
function handleS2Height(val) {
    changeSlopeHeight(slope2, val);
    slope2.userData.height = val;
    PIEchangeDisplayText(s2Height, val);
    resetCarsPosition();
    PIErender();
}
function handleSpeed1(val) {
    car1Speed = val;
    resetCarsPosition();
    PIErender();
}
function handleSpeed2(val) {
    car2Speed = val;
    resetCarsPosition();
    PIErender();
}

function initialiseControlVariables() {

    //Labels
    s1Angle = "Slope 1 Angle";         //slope 1 angle slider label
    s2Angle = "Slope 2 Angle";         //slope 2 angle slider label
    s1Height = "Slope 1 Height(m)";    //slope 1 height slider label
    s2Height = "Slope 2 Height(m)";    //slope 2 height slider label
    speed1 = "Vehicle 1 Speed";        //car1 speed slider label
    speed2 = "Vehicle 2 Speed";        //car2 speed slider label
    time1 = "Vehicle 1 Time";          //time 1 label
    time2 = "Vehicle 2 Time";          //time 2 label

    power1DisplayText = "Power 1 (in KJ)";
    power2DisplayText = "Power 2 (in KJ)";

    car1MassLabel = "Vehicle1 Mass(kg)";
    car2MassLabel = "Vehicle2 Mass(kg)";

    var miniCarMass = new Car(0x0000000).mesh.userData.mass;
    var sedanMass = new Sedan(0x0000000).mesh.userData.mass;
    var busMass = new Bus(0x0000000).mesh.userData.mass;
    var tankMass = new Tank(0x0000000).mesh.userData.mass;
    miniCar1Label = "Mini Car (" + miniCarMass + " kg)";
    sedan1Label = "Sedan (" + sedanMass + " kg)";
    bus1Label = "Bus (" + busMass + " kg)";
    tank1Label = "War Tank (" + tankMass + " kg)";

    miniCar2Label = "Mini Car (" + miniCarMass + " kg) ";
    sedan2Label = "Sedan (" + sedanMass + " kg) ";
    bus2Label = "Bus (" + busMass + " kg) ";
    tank2Label = "War Tank (" + tankMass + " kg) ";

    //Default (initial) Values
    sAngleDefault = 45.0;              //slope default angle value
    sHeightDefault = 1.5;              //slope default height value
    speedDefault = 1;                  //car speed default value

    //Slider Limits
    sAngleMin = 30.0;                  //slope angle min value
    sAngleMax = 60.0;                  //slope angle max value
    sHeightMin = 1.0;                  //slope height min value
    sHeightMax = 2.0;                  //slope height max value
    speedMin = 0.5;                    //speed min value
    speedMax = 5;                      //speed max value

    //Slider Steps
    sAngleStep = 0.1;                  //slope angle slider step
    sHeightStep = 0.01;                //slope height slider step
    speedStep = 0.01;                  //speed slider step
}

function initialiseControls() {
    initialiseControlVariables();
    //Create Input Panel
    PIEaddInputSlider(s1Angle, sAngleDefault, handleS1Angle, sAngleMin, sAngleMax, sAngleStep);
    PIEaddInputSlider(s1Height, sHeightDefault, handleS1Height, sHeightMin, sHeightMax, sHeightStep);
    PIEaddInputSlider(s2Angle, sAngleDefault, handleS2Angle, sAngleMin, sAngleMax, sAngleStep);
    PIEaddInputSlider(s2Height, sHeightDefault, handleS2Height, sHeightMin, sHeightMax, sHeightStep);

    //Adding input command, just for showing text
    var v1 = "Choose Vehicle 1:";
    PIEaddInputCommand(v1, emptyFunction);
    //Adding 4 checkboxes, since radio buttons are not available
    PIEaddInputCheckbox(miniCar1Label, false, changeCar1toMiniCar);
    PIEaddInputCheckbox(sedan1Label, false, changeCar1toSedan);
    PIEaddInputCheckbox(bus1Label, true, changeCar1toBus);          //default is bus
    PIEaddInputCheckbox(tank1Label, false, changeCar1toTank);

    PIEaddInputSlider(speed1, speedDefault, handleSpeed1, speedMin, speedMax, speedStep);

    var v2 = "Choose Vehicle 2:";
    PIEaddInputCommand(v2, emptyFunction);
    //Adding 4 checkboxes, since radio buttons are not available
    PIEaddInputCheckbox(miniCar2Label, true, changeCar2toMiniCar);   //default is mini car
    PIEaddInputCheckbox(sedan2Label, false, changeCar2toSedan);
    PIEaddInputCheckbox(bus2Label, false, changeCar2toBus);
    PIEaddInputCheckbox(tank2Label, false, changeCar2toTank);

    PIEaddInputSlider(speed2, speedDefault, handleSpeed2, speedMin, speedMax, speedStep);

    //Create Display Panel
    PIEaddDisplayText(s1Height, sHeightDefault);
    PIEaddDisplayText(time1, "0.0");
    PIEaddDisplayText(car1MassLabel, new Bus(0x0000000).mesh.userData.mass);
    PIEaddDisplayText(power1DisplayText, "-");

    PIEaddDisplayText(s2Height, sHeightDefault);
    PIEaddDisplayText(time2, "0.0");
    PIEaddDisplayText(car2MassLabel, new Car(0x0000000).mesh.userData.mass);
    PIEaddDisplayText(power2DisplayText, "-");
}

/******************** End of GUI control objects code *************************/

/********************* Load Experiment objects code ***************************/

var helpContent;
function initialiseHelp() {
    helpContent="";
    helpContent = helpContent + "<h2>Experiment Help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows the power generated by different types of vehicles when moving up on an inclined plane.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to some sliders and checkboxes.</p>";
    helpContent = helpContent + "<p>Note: \"1\" corresponds to slope & car setup at the back and \"2\" corresponds to the front setup. </p>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Height of slopes 1 and 2.</li>";
    helpContent = helpContent + "<li>Angle of slopes 1 & 2.</li>";
    helpContent = helpContent + "<li>Type of vehicle 1 & 2. Following type of vehicles are available:<ol><li>Mini Car</li><li>Sedan</li><li>Bus</li><li>War Tank</li></ol></li>";
    helpContent = helpContent + "<li>Velocities of vehicle 1 & 2.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can start animation by clicking the start button.</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>The animation shows both the vehicles moving up with their respective speeds.</p>";
    helpContent = helpContent + "<p>The right hand panel now shows the values of the three experiment variables during animation.</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Height of slopes 1 & 2 (in meters).</li>";
    helpContent = helpContent + "<li>Time taken by each vehicle (in seconds).</li>";
    helpContent = helpContent + "<li>Mass of each vehicle (in kgs).</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>When the vehicles reach the top, note down these values.</p>";
    helpContent = helpContent + "<p>Based on these values you can calculate the power generated by each vehicle. (use gravity = 10m/s<sup>2</sup>). Match your result with the shown values.</p>";
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
    infoContent = infoContent + "<p>The experiment shows the power generated by different types of vehicles when moving up on an inclined plane.</p>";
    infoContent = infoContent + "<h3>Concept of Work</h3>";
    infoContent = infoContent + "<p>Work done by an object is equal to the change in its energy. It can be the change in Kinetic Energy as well as Potential Energy.</p>";
    infoContent = infoContent + "<p>When a body moves up, work done by the body is given by the change in its gravitational potential energy.</p>";
    infoContent = infoContent + "<p>The path on which the body goes up doesn't matter. It is only the difference between the energy at initial point and energy at the final point.</p>";
    infoContent = infoContent + "<p>Work done against gravity can be calculated as:-</p>";
    infoContent = infoContent + "<p><em>W = mass X gravity X height</em></p>";
    infoContent = infoContent + "<h3>Concept of Power</h3>";
    infoContent = infoContent + "<p>Power is the rate of doing work. A faster moving object consumes more power than a slower object of same mass.</p>";
    infoContent = infoContent + "<p>It can be calculated as:-</p>";
    infoContent = infoContent + "<p><em>Power = W / time</em></p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene() {
    //Initialise Scene Variables
    mySceneTLX = 0.0;
    mySceneTLY = 3.0;
    mySceneBRX = 4.0;
    mySceneBRY = 0.0;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
}

function initialiseOtherVariables() {
    //Initialise variables
    wallThickness = 0.20;

    //Barriers
    leftB=mySceneTLX;
    rightB=mySceneBRX;
    bottomB=mySceneBRY;
    topB=mySceneTLY;

    //Parameters
    car1Speed = speedDefault;
    car2Speed = speedDefault;
    carLength = .40; //car length is kept a constant, so that all cars travel same distance

    //car reset position
    car1x = 0;
    car1y = 0;
    car1z = -2.5;
    car2x = .5;
    car2y = 0;
    car2z = -1;
}

function loadExperimentElements() {
    var geometry;
    var material;
    var loader;
    var texture;

    PIEsetExperimentTitle("Simple Power Examples");
    PIEsetDeveloperName("Rishabh Gupta");
    PIEhideControlElement();

    //initialise help and info content
    initialiseHelp();
    initialiseInfo();

    //initialise Scene
    initialiseScene();

    //initialise Other Variables
    initialiseOtherVariables();

    //Create cars and add them to the scene
    createCars();

    car1 = bus1;
    car2 = miniCar2;

    //Create slopes and add them to the scene
    /* note: Slopes need not to be reset, since they don't move
    ** but their geometry needs to be reset
    */
    slope1 = new Slope().obj;
    slope1.position.set(0, 0, -2.5);
    slope1.rotation.y = objectRotation;
    PIEaddElement(slope1);
    slope2 = new Slope().obj;
    slope2.position.set(.5, 0, -1);
    slope2.rotation.y = objectRotation;
    PIEaddElement(slope2);

    //Create Room
    createRoom();

    //Instantiate experiment controls
    initialiseControls();

    //Reset all positions
    resetExperiment();

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}

/******************* End of Load Experiment objects code **********************/

/*************************** Reset Experiment code ****************************/

function resetExperiment() {
    //initialise Other Variables
    initialiseOtherVariables();

    //Reset cars
    resetCarsPosition();
    changeCarAngle(car1, sAngleDefault);
    changeCarAngle(car2, sAngleDefault);

    //reset slopes geometry
    changeSlopeAngle(slope1, sAngleDefault);
    changeSlopeAngle(slope2, sAngleDefault);
    changeSlopeHeight(slope1, sHeightDefault);
    changeSlopeHeight(slope2, sHeightDefault);

    //reset sliders
    PIEchangeInputSlider(s1Angle, sAngleDefault);
    PIEchangeInputSlider(s1Height, sHeightDefault);
    PIEchangeInputSlider(s2Angle, sAngleDefault);
    PIEchangeInputSlider(s2Height, sHeightDefault);
    PIEchangeInputSlider(speed1, speedDefault);
    PIEchangeInputSlider(speed2, speedDefault);

    PIEchangeDisplayText(s1Angle, sAngleDefault);
    PIEchangeDisplayText(s1Height, sHeightDefault);
    PIEchangeDisplayText(s2Angle, sAngleDefault);
    PIEchangeDisplayText(s2Height, sHeightDefault);

}

/********************** End of Reset Experiment code **************************/

/******************** Update (animation changes) code *************************/

function updateExperimentElements(t, dt) {
    var boundaryT = dt / 1000.0;    //seconds
    //Update cars' positions
    if(!car1Reached) {
        t1 += boundaryT;
        car1.translateX(boundaryT * car1Speed);
        //To ensure that all cars travel same distance (individual carLength is ignored)
        //It should be carLength * Math.sin(slope1.userData.angle * Math.PI / 2)
        //but then height will be dependent on angle
        if(car1.position.y >= (slope1.userData.height - carLength)) {
            car1Reached = true;
        }
    }
    if(!car2Reached) {
        t2 += boundaryT;
        car2.translateX(boundaryT * car2Speed);
        if(car2.position.y >= slope2.userData.height - carLength) {
            car2Reached = true;
        }
    }

    //power is calculated after the car has reached the destination and time is recorded
    if(car1Reached && !calculatedP1) {
        //PIEstopAnimation();
        calculatePower1();
        calculatedP1 = true;
    }
    if(car2Reached && !calculatedP2) {
        calculatedPower2();
        calculatedP2 = true;
    }

    //Finally Update the Display Panel with new values
    PIEchangeDisplayText(time1, t1.toFixed(2) + " s");
    PIEchangeDisplayText(time2, t2.toFixed(2) + " s");
}

/******************* Update (animation changes) code **************************/

/************************** Helper Functions **********************************/

/* All the calculations */
function calculatePower1() {
    /*
    ** Power = Work Done / time taken
    **       = mgh/t
    */
    p1 = (car1.userData.mass * gravity * slope1.userData.height) / t1;
    p1 /= 1000.0;
    PIEchangeDisplayText(power1DisplayText, p1.toFixed(2));
}
function calculatedPower2() {
    p2 = (car2.userData.mass * gravity * slope2.userData.height) / t2;
    p2 /= 1000.0;
    PIEchangeDisplayText(power2DisplayText, p2.toFixed(2));
}

function resetCarsPosition() {
    car1.position.set(car1x, car1y, car1z);
    car2.position.set(car2x, car2y, car2z);
    car1Reached = false;
    car2Reached = false;
    calculatedP1 = false;
    calculatedP2 = false;
    t1 = 0;
    t2 = 0;
    p1 = 0;
    p2 = 0;
    PIEchangeDisplayText(power1DisplayText, "-");
    PIEchangeDisplayText(power2DisplayText, "-");
}

//Using checkboxes as radio buttons to change cars
function changeCar1toMiniCar() {
    PIEchangeInputCheckbox(miniCar1Label, true);
    PIEchangeInputCheckbox(sedan1Label, false);
    PIEchangeInputCheckbox(bus1Label, false);
    PIEchangeInputCheckbox(tank1Label, false);
    car1.position.x = -100;
    car1 = miniCar1;
    resetCarsPosition();
    changeCarAngle(car1, slope1.userData.angle);
    PIEchangeDisplayText(car1MassLabel, miniCar1.userData.mass);
    PIErender();
}
function changeCar1toSedan() {
    PIEchangeInputCheckbox(miniCar1Label, false);
    PIEchangeInputCheckbox(sedan1Label, true);
    PIEchangeInputCheckbox(bus1Label, false);
    PIEchangeInputCheckbox(tank1Label, false);
    car1.position.x = -100;
    car1 = sedan1;
    resetCarsPosition();
    changeCarAngle(car1, slope1.userData.angle);
    PIEchangeDisplayText(car1MassLabel, sedan1.userData.mass);
    PIErender();
}
function changeCar1toBus() {
    PIEchangeInputCheckbox(miniCar1Label, false);
    PIEchangeInputCheckbox(sedan1Label, false);
    PIEchangeInputCheckbox(bus1Label, true);
    PIEchangeInputCheckbox(tank1Label, false);
    car1.position.x = -100;
    car1 = bus1;
    resetCarsPosition();
    changeCarAngle(car1, slope1.userData.angle);
    PIEchangeDisplayText(car1MassLabel, bus1.userData.mass);
    PIErender();
}
function changeCar1toTank() {
    PIEchangeInputCheckbox(miniCar1Label, false);
    PIEchangeInputCheckbox(sedan1Label, false);
    PIEchangeInputCheckbox(bus1Label, false);
    PIEchangeInputCheckbox(tank1Label, true);
    car1.position.x = -100;
    car1 = tank1;
    resetCarsPosition();
    changeCarAngle(car1, slope1.userData.angle);
    PIEchangeDisplayText(car1MassLabel, tank1.userData.mass);
    PIErender();
}

function changeCar2toMiniCar() {
    PIEchangeInputCheckbox(miniCar2Label, true);
    PIEchangeInputCheckbox(sedan2Label, false);
    PIEchangeInputCheckbox(bus2Label, false);
    PIEchangeInputCheckbox(tank2Label, false);
    car2.position.x = -100;
    car2 = miniCar2;
    resetCarsPosition();
    changeCarAngle(car2, slope2.userData.angle);
    PIEchangeDisplayText(car2MassLabel, miniCar2.userData.mass);
    PIErender();
}
function changeCar2toSedan() {
    PIEchangeInputCheckbox(miniCar2Label, false);
    PIEchangeInputCheckbox(sedan2Label, true);
    PIEchangeInputCheckbox(bus2Label, false);
    PIEchangeInputCheckbox(tank2Label, false);
    car2.position.x = -100;
    car2 = sedan2;
    resetCarsPosition();
    changeCarAngle(car2, slope2.userData.angle);
    PIEchangeDisplayText(car2MassLabel, sedan2.userData.mass);
    PIErender();
}
function changeCar2toBus() {
    PIEchangeInputCheckbox(miniCar2Label, false);
    PIEchangeInputCheckbox(sedan2Label, false);
    PIEchangeInputCheckbox(bus2Label, true);
    PIEchangeInputCheckbox(tank2Label, false);
    car2.position.x = -100;
    car2 = bus2;
    resetCarsPosition();
    changeCarAngle(car2, slope2.userData.angle);
    PIEchangeDisplayText(car2MassLabel, bus2.userData.mass);
    PIErender();
}
function changeCar2toTank() {
    PIEchangeInputCheckbox(miniCar2Label, false);
    PIEchangeInputCheckbox(sedan2Label, false);
    PIEchangeInputCheckbox(bus2Label, false);
    PIEchangeInputCheckbox(tank2Label, true);
    car2.position.x = -100;
    car2 = tank2;
    resetCarsPosition();
    changeCarAngle(car2, slope2.userData.angle);
    PIEchangeDisplayText(car2MassLabel, tank2.userData.mass);
    PIErender();
}

function createCars() {
    //minicars
    miniCar1 = new Car(0x22ff22).mesh;
    miniCar1.scale.multiplyScalar(1.5);
    miniCar1.rotation.y = objectRotation;
    miniCar1.position.x = -100;
    PIEaddElement(miniCar1);
    miniCar2 = new Car(0x2222ff).mesh;
    miniCar2.scale.multiplyScalar(1.5);
    miniCar2.rotation.y = objectRotation;
    miniCar2.position.x = -100;
    PIEaddElement(miniCar2);
    //sedans
    sedan1 = new Sedan(0x050505).mesh;
    sedan1.scale.multiplyScalar(1.5);
    sedan1.rotation.y = objectRotation;
    sedan1.position.x = -100;
    PIEaddElement(sedan1);
    sedan2 = new Sedan(0xff1111).mesh;
    sedan2.scale.multiplyScalar(1.5);
    sedan2.rotation.y = objectRotation;
    sedan2.position.x = -100;
    PIEaddElement(sedan2);
    //buses
    bus1 = new Bus(0xaaaa22).mesh;
    bus1.scale.multiplyScalar(1.5);
    bus1.rotation.y = objectRotation;
    bus1.position.x = -100;
    PIEaddElement(bus1);
    bus2 = new Bus(0xaa22aa).mesh;
    bus2.scale.multiplyScalar(1.5);
    bus2.rotation.y = objectRotation;
    bus2.position.x = -100;
    PIEaddElement(bus2);

    //tanks
    tank1 = new Tank(0x225522).mesh;
    tank1.scale.multiplyScalar(1.5);
    tank1.rotation.y = objectRotation;
    tank1.position.x = -100;
    PIEaddElement(tank1);
    tank2 = new Tank(0x293a1a).mesh;
    tank2.scale.multiplyScalar(1.5);
    tank2.rotation.y = objectRotation;
    tank2.position.x = -100;
    PIEaddElement(tank2);
}

/* Car constructor */
function Car(col) {
    var xOffset = .20;
    var yOffset = .09;

    this.mesh = new THREE.Object3D();

    // Create the base
    var geomBase = new THREE.BoxGeometry(.30, .08, .15);
    var matBase = new THREE.MeshPhongMaterial({color:col, shading:THREE.FlatShading});
    var base = new THREE.Mesh(geomBase, matBase);
    base.castShadow = true;
    base.receiveShadow = true;
    base.position.x += xOffset;
    base.position.y += yOffset;
    this.mesh.add(base);
    //upper cabin
    var geomCabin = new THREE.BoxGeometry(.20, .08, .15, 2, 1, 1);
    var matCabin = new THREE.MeshPhongMaterial({color:0xa3f1ff, shading:THREE.FlatShading});
    geomCabin.vertices[0].x -= 0.05;
    geomCabin.vertices[1].x -= 0.05;
    var cabin = new THREE.Mesh(geomCabin, matCabin);
    cabin.castShadow = false;
    cabin.receiveShadow = false;
    cabin.position.y = .08;
    cabin.position.x = -0.05;
    cabin.scale.multiplyScalar(0.95);
    cabin.position.x += xOffset;
    cabin.position.y += yOffset;
    this.mesh.add(cabin);

    //frame
    var geomFrame = new THREE.EdgesGeometry(geomCabin); // or WireframeGeometry( geometry )
    var matFrame = new THREE.LineBasicMaterial({ color: col, linewidth: 3, shading:THREE.FlatShading });
    var frame = new THREE.LineSegments(geomFrame, matFrame);
    frame.position.y = .08;
    frame.position.x = -0.05;
    frame.scale.multiplyScalar(0.95);
    frame.position.x += xOffset;
    frame.position.y += yOffset;
    this.mesh.add(frame);

    //roof
    var geomRoof = new THREE.PlaneGeometry(.15, .15, 1, 1);
    geomRoof.rotateX(Math.PI / 2);
    var matRoof = new THREE.MeshPhongMaterial({color:col, side:THREE.DoubleSide});
    var roof = new THREE.Mesh(geomRoof, matRoof);
    roof.position.y = .12;
    roof.position.x = -.075;
    roof.castShadow = false;
    roof.receiveShadow = true;
    roof.position.x += xOffset;
    roof.position.y += yOffset;
    this.mesh.add(roof);

    //front hood
    var geomHood = new THREE.BoxGeometry(0.005, .015, .14);
    var matHood = new THREE.MeshPhongMaterial({color:0x111111, shading:THREE.FlatShading});
    var hood1 = new THREE.Mesh(geomHood, matHood);
    hood1.position.x = .15;
    hood1.position.y = -0.04;
    hood1.castShadow = true;
    hood1.receiveShadow = true;
    hood1.position.x += xOffset;
    hood1.position.y += yOffset;
    this.mesh.add(hood1);
    var hood2 = new THREE.Mesh(geomHood, matHood);
    hood2.position.x = 015;
    hood2.position.y = -0.02;
    hood2.castShadow = true;
    hood2.receiveShadow = true;
    hood2.position.x += xOffset;
    hood2.position.y += yOffset;
    this.mesh.add(hood2);
    var hood3 = new THREE.Mesh(geomHood, matHood);
    hood3.position.x = 0.15;
    hood3.position.y = 0;
    hood3.castShadow = true;
    hood3.receiveShadow = true;
    hood3.position.x += xOffset;
    hood3.position.y += yOffset;
    this.mesh.add(hood3);

    //headlights
    var geomHeadLight = new THREE.BoxGeometry(0.005, 0.02, 0.04);
    var matHeadLight = new THREE.MeshPhongMaterial({color:0xffff00, emissive:0xffff00});
    var headLightLeft = new THREE.Mesh(geomHeadLight, matHeadLight);
    headLightLeft.position.x = 0.15;
    headLightLeft.position.y = .02;
    headLightLeft.position.z = -.045;
    var headLightRight = new THREE.Mesh(geomHeadLight, matHeadLight);
    headLightRight.position.x = 0.15;
    headLightRight.position.y = .02;
    headLightRight.position.z = .045;
    headLightLeft.position.x += xOffset;
    headLightLeft.position.y += yOffset;
    headLightRight.position.x += xOffset;
    headLightRight.position.y += yOffset;
    this.mesh.add(headLightRight);
    this.mesh.add(headLightLeft);

    //tyres
    var geomTyre = new THREE.CylinderGeometry(.04, .04, .02, 20);
    geomTyre.rotateX(Math.PI / 2);
    var frontRightTyre = new THREE.Mesh(geomTyre, matHood) ;
    frontRightTyre.position.x = .05;
    frontRightTyre.position.z = .075;
    frontRightTyre.position.y = -.05;
    frontRightTyre.castShadow = true;
    frontRightTyre.receiveShadow = true;
    frontRightTyre.position.x += xOffset;
    frontRightTyre.position.y += yOffset;
    this.mesh.add(frontRightTyre);
    var frontLeftTyre = new THREE.Mesh(geomTyre, matHood) ;
    frontLeftTyre.position.x = .05;
    frontLeftTyre.position.z = -.075;
    frontLeftTyre.position.y = -.05;
    frontLeftTyre.castShadow = true;
    frontLeftTyre.receiveShadow = true;
    frontLeftTyre.position.x += xOffset;
    frontLeftTyre.position.y += yOffset;
    this.mesh.add(frontLeftTyre);
    var rearRightTyre = new THREE.Mesh(geomTyre, matHood) ;
    rearRightTyre.position.x = -.10;
    rearRightTyre.position.z = .075;
    rearRightTyre.position.y = -.05;
    rearRightTyre.castShadow = true;
    rearRightTyre.receiveShadow = true;
    rearRightTyre.position.x += xOffset;
    rearRightTyre.position.y += yOffset;
    this.mesh.add(rearRightTyre);
    var rearLeftTyre = new THREE.Mesh(geomTyre, matHood) ;
    rearLeftTyre.position.x = -.10;
    rearLeftTyre.position.z = -.075;
    rearLeftTyre.position.y = -.05;
    rearLeftTyre.castShadow = true;
    rearLeftTyre.receiveShadow = true;
    rearLeftTyre.position.x += xOffset;
    rearLeftTyre.position.y += yOffset;
    this.mesh.add(rearLeftTyre);

    //back lights
    var geomBackLight = new THREE.BoxGeometry(0.005, .04, .03);
    var matBackLight = new THREE.MeshPhongMaterial({color:0xff0000, emissive:0xff0000});
    var backLightLeft = new THREE.Mesh(geomBackLight, matBackLight);
    backLightLeft.position.x = -.15;
    backLightLeft.position.y = .02;
    backLightLeft.position.z = -.045;
    var backLightRight = new THREE.Mesh(geomBackLight, matBackLight);
    backLightRight.position.x = -.15;
    backLightRight.position.y = .02;
    backLightRight.position.z = .045;
    backLightLeft.position.x += xOffset;
    backLightLeft.position.y += yOffset;
    backLightRight.position.x += xOffset;
    backLightRight.position.y += yOffset;
    this.mesh.add(backLightRight);
    this.mesh.add(backLightLeft);

    //back hood
    var backHood = new THREE.Mesh(geomHood, matHood);
    backHood.position.x = -.15;
    backHood.position.y = -.04;
    backHood.castShadow = true;
    backHood.receiveShadow = true;
    backHood.position.x += xOffset;
    backHood.position.y += yOffset;
    this.mesh.add(backHood);

    this.mesh.userData = { mass: 12000 };  //kg
}

/* Bus constructor */
function Bus(col) {
    var yOffset = .09;
    var xOffset = .20;
    this.mesh = new THREE.Object3D();

	// Create the base
	var geomBase = new THREE.BoxGeometry(.40, .10, .15);
	var matBase = new THREE.MeshPhongMaterial({color:col, shading:THREE.FlatShading});
    var base = new THREE.Mesh(geomBase, matBase);
    base.castShadow = true;
	base.receiveShadow = true;
    base.position.x += xOffset;
    base.position.y += yOffset;
	this.mesh.add(base);
    //upper cabin
    var geomCabin = new THREE.BoxGeometry(.40, .10, .15, 2, 1, 1);
    var matCabin = new THREE.MeshPhongMaterial({color:0xa3f1ff, shading:THREE.FlatShading});
    geomCabin.vertices[0].x -= .05;
    geomCabin.vertices[1].x -= .05;
    geomCabin.vertices[8].x += .05;
    geomCabin.vertices[9].x += .05;
    geomCabin.vertices[10].x += .05;
    geomCabin.vertices[11].x += .05;
    var cabin = new THREE.Mesh(geomCabin, matCabin);
    cabin.castShadow = false;
    cabin.receiveShadow = false;
    cabin.position.y = .10;
    cabin.scale.multiplyScalar(0.95);
    cabin.position.x += xOffset;
    cabin.position.y += yOffset;
    this.mesh.add(cabin);

    //frame
    var geomFrame = new THREE.EdgesGeometry(geomCabin);
    var matFrame = new THREE.LineBasicMaterial({ color: col, linewidth: 3, shading:THREE.FlatShading });
    var frame = new THREE.LineSegments(geomFrame, matFrame);
    frame.position.y = .10;
    frame.scale.multiplyScalar(0.95);
    frame.position.x += xOffset;
    frame.position.y += yOffset;
    this.mesh.add(frame);

    //roof
    var geomRoof = new THREE.PlaneGeometry(.35, .15, 1, 1);
    geomRoof.rotateX(Math.PI / 2);
    var matRoof = new THREE.MeshPhongMaterial({color:col, side:THREE.DoubleSide});
    var roof = new THREE.Mesh(geomRoof, matRoof);
    roof.position.y = .15;
    roof.position.x = -.025;
    roof.castShadow = false;
    roof.receiveShadow = true;
    roof.position.x += xOffset;
    roof.position.y += yOffset;
    this.mesh.add(roof);

    //front hood
    var geomHood = new THREE.BoxGeometry(0.005, .015, .14);
    var matHood = new THREE.MeshPhongMaterial({color:0x111111, shading:THREE.FlatShading});
    var hood1 = new THREE.Mesh(geomHood, matHood);
    hood1.position.x = .20;
    hood1.position.y = -.04;
    hood1.castShadow = true;
    hood1.receiveShadow = true;
    hood1.position.x += xOffset;
    hood1.position.y += yOffset;
    this.mesh.add(hood1);
    var hood2 = new THREE.Mesh(geomHood, matHood);
    hood2.position.x = .20;
    hood2.position.y = -.02;
    hood2.castShadow = true;
    hood2.receiveShadow = true;
    hood2.position.x += xOffset;
    hood2.position.y += yOffset;
    this.mesh.add(hood2);
    var hood3 = new THREE.Mesh(geomHood, matHood);
    hood3.position.x = .20;
    hood3.position.y = 0;
    hood3.castShadow = true;
    hood3.receiveShadow = true;
    hood3.position.x += xOffset;
    hood3.position.y += yOffset;
    this.mesh.add(hood3);

    //headlights
    var geomHeadLight = new THREE.BoxGeometry(0.005, .02, .04);
    var matHeadLight = new THREE.MeshPhongMaterial({color:0xffff00, emissive:0xffff00});
    var headLightLeft = new THREE.Mesh(geomHeadLight, matHeadLight);
    headLightLeft.position.x = .20;
    headLightLeft.position.y = .02;
    headLightLeft.position.z = -.045;
    var headLightRight = new THREE.Mesh(geomHeadLight, matHeadLight);
    headLightRight.position.x = .20;
    headLightRight.position.y = .02;
    headLightRight.position.z = .045;
    headLightLeft.position.x += xOffset;
    headLightLeft.position.y += yOffset;
    headLightRight.position.x += xOffset;
    headLightRight.position.y += yOffset;
    this.mesh.add(headLightRight);
    this.mesh.add(headLightLeft);

    //tyres
    var geomTyre = new THREE.CylinderGeometry(.04, .04, .02, 20);
    geomTyre.rotateX(Math.PI / 2);
    var frontRightTyre = new THREE.Mesh(geomTyre, matHood) ;
    frontRightTyre.position.x = .12;
    frontRightTyre.position.z = .075;
    frontRightTyre.position.y = -.05;
    frontRightTyre.castShadow = true;
    frontRightTyre.receiveShadow = true;
    frontRightTyre.position.x += xOffset;
    frontRightTyre.position.y += yOffset;
    this.mesh.add(frontRightTyre);
    var frontLeftTyre = new THREE.Mesh(geomTyre, matHood) ;
    frontLeftTyre.position.x = .12;
    frontLeftTyre.position.z = -.075;
    frontLeftTyre.position.y = -.05;
    frontLeftTyre.castShadow = true;
    frontLeftTyre.receiveShadow = true;
    frontLeftTyre.position.x += xOffset;
    frontLeftTyre.position.y += yOffset;
    this.mesh.add(frontLeftTyre);
    var rearRightTyre = new THREE.Mesh(geomTyre, matHood) ;
    rearRightTyre.position.x = -.15;
    rearRightTyre.position.z = .075;
    rearRightTyre.position.y = -.05;
    rearRightTyre.castShadow = true;
    rearRightTyre.receiveShadow = true;
    rearRightTyre.position.x += xOffset;
    rearRightTyre.position.y += yOffset;
    this.mesh.add(rearRightTyre);
    var rearLeftTyre = new THREE.Mesh(geomTyre, matHood) ;
    rearLeftTyre.position.x = -.15;
    rearLeftTyre.position.z = -.075;
    rearLeftTyre.position.y = -.05;
    rearLeftTyre.castShadow = true;
    rearLeftTyre.receiveShadow = true;
    rearLeftTyre.position.x += xOffset;
    rearLeftTyre.position.y += yOffset;
    this.mesh.add(rearLeftTyre);

    //back lights
    var geomBackLight = new THREE.BoxGeometry(0.005, .04, .03);
    var matBackLight = new THREE.MeshPhongMaterial({color:0xff0000, emissive:0xff0000});
    var backLightLeft = new THREE.Mesh(geomBackLight, matBackLight);
    backLightLeft.position.x = -.20;
    backLightLeft.position.y = .02;
    backLightLeft.position.z = -.045;
    var backLightRight = new THREE.Mesh(geomBackLight, matBackLight);
    backLightRight.position.x = -.20;
    backLightRight.position.y = .02;
    backLightRight.position.z = .045;
    backLightLeft.position.x += xOffset;
    backLightLeft.position.y += yOffset;
    backLightRight.position.x += xOffset;
    backLightRight.position.y += yOffset;
    this.mesh.add(backLightRight);
    this.mesh.add(backLightLeft);

    //back hood
    var backHood = new THREE.Mesh(geomHood, matHood);
    backHood.position.x = -.20;
    backHood.position.y = -.04;
    backHood.castShadow = true;
    backHood.receiveShadow = true;
    backHood.position.x += xOffset;
    backHood.position.y += yOffset;
    this.mesh.add(backHood);

    this.mesh.userData = { mass: 18000 };
}

/* Tank constructor */
function Tank(col) {
    var yOffset = .08;
    var xOffset = .20;
    this.mesh = new THREE.Object3D();

    // Create the base
    var geomBase = new THREE.BoxGeometry(.40, .16, .4);
    geomBase.vertices[2].x -= .05;
    geomBase.vertices[3].x -= .05;
    geomBase.vertices[6].x += .05;
    geomBase.vertices[7].x += .05;
    var matBase = new THREE.MeshPhongMaterial({color:col, shading:THREE.FlatShading});
    var base = new THREE.Mesh(geomBase, matBase);
    base.castShadow = true;
    base.receiveShadow = true;
    base.position.x += xOffset;
    base.position.y += yOffset;
    this.mesh.add(base);

    //upper cabin
    var geomCabin = new THREE.BoxGeometry(.15, .12, .2);
    var matCabin = new THREE.MeshPhongMaterial({color:col, shading:THREE.FlatShading});
    geomCabin.vertices[2].x += .05;
    geomCabin.vertices[3].x += .05;
    geomCabin.vertices[6].x -= .05;
    geomCabin.vertices[7].x -= .05;
    var cabin = new THREE.Mesh(geomCabin, matCabin);
    cabin.castShadow = true;
    cabin.receiveShadow = true;
    cabin.position.y = .15;
    cabin.position.x += xOffset;
    cabin.position.y += yOffset;
    this.mesh.add(cabin);

    //front barrel
    var geomBarrel = new THREE.CylinderGeometry(.03, .04, .3, 20);
    var barrel = new THREE.Mesh(geomBarrel, matBase);
    //barrel.rotation.x = Math.PI / 10;
    barrel.rotation.z = Math.PI / 2;
    barrel.position.x = 0.2;
    barrel.position.y = 0.12;
    barrel.position.x += xOffset;
    barrel.position.y += yOffset;
    barrel.receiveShadow = true;
    barrel.castShadow = true;
    this.mesh.add(barrel);

    this.mesh.userData = { mass: 60000 };  //kg
}

/* Sedan constructor */
function Sedan(col) {
    var yOffset = .09;
    var xOffset = .175;
    this.mesh = new THREE.Object3D();

	// Create the base
	var geomBase = new THREE.BoxGeometry(.35, .08, .15);
	var matBase = new THREE.MeshPhongMaterial({color:col, shading:THREE.FlatShading});
    var base = new THREE.Mesh(geomBase, matBase);
    base.castShadow = true;
	base.receiveShadow = true;
    base.position.x += xOffset;
    base.position.y += yOffset;
	this.mesh.add(base);
    //upper cabin
    var geomCabin = new THREE.BoxGeometry(.20, .08, .15);
    var matCabin = new THREE.MeshPhongMaterial({color:0xa3f1ff, shading:THREE.FlatShading});
    geomCabin.vertices[0].x -= .05;
    geomCabin.vertices[1].x -= .05;
    geomCabin.vertices[4].x += .05;
    geomCabin.vertices[5].x += .05;
    var cabin = new THREE.Mesh(geomCabin, matCabin);
    cabin.castShadow = false;
    cabin.receiveShadow = false;
    cabin.position.y = .08;
    cabin.scale.multiplyScalar(0.95);
    cabin.position.x += xOffset;
    cabin.position.y += yOffset;
    this.mesh.add(cabin);

    //frame
    var geomFrame = new THREE.EdgesGeometry(geomCabin);
    var matFrame = new THREE.LineBasicMaterial({ color: col, linewidth: 3, shading:THREE.FlatShading });
    var frame = new THREE.LineSegments(geomFrame, matFrame);
    frame.position.y = .08;
    frame.scale.multiplyScalar(0.95);
    frame.position.x += xOffset;
    frame.position.y += yOffset;
    this.mesh.add(frame);

    //roof
    var geomRoof = new THREE.PlaneGeometry(.10, .15, 1, 1);
    geomRoof.rotateX(Math.PI / 2);
    var matRoof = new THREE.MeshPhongMaterial({color:col, side:THREE.DoubleSide});
    var roof = new THREE.Mesh(geomRoof, matRoof);
    roof.position.y = .12;
    //roof.position.x = ;
    roof.castShadow = false;
    roof.receiveShadow = true;
    roof.position.x += xOffset;
    roof.position.y += yOffset;
    this.mesh.add(roof);

    //front hood
    var geomHood = new THREE.BoxGeometry(0.005, .015, .15);
    var matHood = new THREE.MeshPhongMaterial({color:0x111111, shading:THREE.FlatShading});
    var hood1 = new THREE.Mesh(geomHood, matHood);
    hood1.position.x = .175;
    hood1.position.y = -.03;
    hood1.castShadow = true;
    hood1.receiveShadow = true;
    hood1.position.x += xOffset;
    hood1.position.y += yOffset;
    this.mesh.add(hood1);

    //headlights
    var geomHeadLight = new THREE.BoxGeometry(0.005, .02, .04);
    var matHeadLight = new THREE.MeshPhongMaterial({color:0xffff00, emissive:0xffff00});
    var headLightLeft = new THREE.Mesh(geomHeadLight, matHeadLight);
    headLightLeft.position.x = .175;
    headLightLeft.position.y = .02;
    headLightLeft.position.z = -.045;
    var headLightRight = new THREE.Mesh(geomHeadLight, matHeadLight);
    headLightRight.position.x = .175;
    headLightRight.position.y = .02;
    headLightRight.position.z = .045;
    headLightLeft.position.x += xOffset;
    headLightLeft.position.y += yOffset;
    headLightRight.position.x += xOffset;
    headLightRight.position.y += yOffset;
    this.mesh.add(headLightRight);
    this.mesh.add(headLightLeft);

    //tyres
    var geomTyre = new THREE.CylinderGeometry(.04, .04, .02, 20);
    geomTyre.rotateX(Math.PI / 2);
    var frontRightTyre = new THREE.Mesh(geomTyre, matHood) ;
    frontRightTyre.position.x = .1;
    frontRightTyre.position.z = .075;
    frontRightTyre.position.y = -.05;
    frontRightTyre.castShadow = true;
    frontRightTyre.receiveShadow = true;
    frontRightTyre.position.x += xOffset;
    frontRightTyre.position.y += yOffset;
    this.mesh.add(frontRightTyre);
    var frontLeftTyre = new THREE.Mesh(geomTyre, matHood) ;
    frontLeftTyre.position.x = .1;
    frontLeftTyre.position.z = -.075;
    frontLeftTyre.position.y = -.05;
    frontLeftTyre.castShadow = true;
    frontLeftTyre.receiveShadow = true;
    frontLeftTyre.position.x += xOffset;
    frontLeftTyre.position.y += yOffset;
    this.mesh.add(frontLeftTyre);
    var rearRightTyre = new THREE.Mesh(geomTyre, matHood) ;
    rearRightTyre.position.x = -.1;
    rearRightTyre.position.z = .075;
    rearRightTyre.position.y = -.05;
    rearRightTyre.castShadow = true;
    rearRightTyre.receiveShadow = true;
    rearRightTyre.position.x += xOffset;
    rearRightTyre.position.y += yOffset;
    this.mesh.add(rearRightTyre);
    var rearLeftTyre = new THREE.Mesh(geomTyre, matHood) ;
    rearLeftTyre.position.x = -.1;
    rearLeftTyre.position.z = -.075;
    rearLeftTyre.position.y = -.05;
    rearLeftTyre.castShadow = true;
    rearLeftTyre.receiveShadow = true;
    rearLeftTyre.position.x += xOffset;
    rearLeftTyre.position.y += yOffset;
    this.mesh.add(rearLeftTyre);

    //back lights
    var geomBackLight = new THREE.BoxGeometry(0.005, .04, .03);
    var matBackLight = new THREE.MeshPhongMaterial({color:0xff0000, emissive:0xff0000});
    var backLightLeft = new THREE.Mesh(geomBackLight, matBackLight);
    backLightLeft.position.x = -.175;
    backLightLeft.position.y = .02;
    backLightLeft.position.z = -.045;
    var backLightRight = new THREE.Mesh(geomBackLight, matBackLight);
    backLightRight.position.x = -.175;
    backLightRight.position.y = .02;
    backLightRight.position.z = .045;
    backLightLeft.position.x += xOffset;
    backLightLeft.position.y += yOffset;
    backLightRight.position.x += xOffset;
    backLightRight.position.y += yOffset;
    this.mesh.add(backLightRight);
    this.mesh.add(backLightLeft);

    //back hood
    var backHood = new THREE.Mesh(geomHood, matHood);
    backHood.position.x = -.175;
    backHood.position.y = -.03;
    backHood.castShadow = true;
    backHood.receiveShadow = true;
    backHood.position.x += xOffset;
    backHood.position.y += yOffset;
    this.mesh.add(backHood);

    this.mesh.userData = { mass: 15000 };
}

/* Slope constructor */
function Slope() {
    this.obj = new THREE.Object3D();
    //slope Platform
    var geomPlatform = new THREE.Geometry();
    geomPlatform.vertices.push(new THREE.Vector3(1, 1, .5));  //0
    geomPlatform.vertices.push(new THREE.Vector3(1, 1, -.5)); //1
    geomPlatform.vertices.push(new THREE.Vector3(0, 0, -.5)); //2
    geomPlatform.vertices.push(new THREE.Vector3(0, 0, .5));  //3

    geomPlatform.faces.push(new THREE.Face3(0, 1, 2));
    geomPlatform.faces.push(new THREE.Face3(2, 3, 0));
    var matPlatform = new THREE.MeshPhongMaterial({color:0x493e0e, side:THREE.DoubleSide});
    var slopePlatform = new THREE.Mesh(geomPlatform, matPlatform);
    slopePlatform.castShadow = true;
    slopePlatform.receiveShadow = true;
    //geomPlatform.dynamic = true;
    //slope Frame
    var geomFrameLeft = new THREE.Geometry();
    geomFrameLeft.vertices.push(new THREE.Vector3(1, 0, -.5));  //0
    geomFrameLeft.vertices.push(new THREE.Vector3(1, 1, -.5));  //1
    geomFrameLeft.vertices.push(new THREE.Vector3(0, 0, -.5));  //2
    geomFrameLeft.faces.push(new THREE.Face3(0, 1, 2));

    var geomFrameRight = new THREE.Geometry();
    geomFrameRight.vertices.push(new THREE.Vector3(1, 0, .5));  //0
    geomFrameRight.vertices.push(new THREE.Vector3(1, 1, .5));  //1
    geomFrameRight.vertices.push(new THREE.Vector3(0, 0, .5));  //2
    geomFrameRight.faces.push(new THREE.Face3(0, 2, 1));

    var matFrame = new THREE.MeshBasicMaterial({color:0x000000,
                                                wireframe:true,
                                                wireframeLinewidth:5});
    var frameRight = new THREE.Mesh(geomFrameRight, matFrame);
    frameRight.castShadow = true;
    frameRight.receiveShadow = true;
    var frameLeft = new THREE.Mesh(geomFrameLeft, matFrame);
    frameLeft.castShadow = true;
    frameLeft.receiveShadow = true;

    //slope1 = new THREE.Object3D();
    this.obj.add(slopePlatform);
    this.obj.add(frameRight);
    this.obj.add(frameLeft);
    this.obj.userData = { angle: 45, height: 1.5 };
}

function changeSlopeHeight(slope, height) {
    /* note: Changing slope height should not change its angle.
    ** Hence the the slope gets bigger,i.e. height as well as length increases
    ** maintaining the angle.
    */
    slope.children[0].geometry.vertices[0].y = height;
    for(var i = 0; i < 3; i++) {
        for(var j = 0; j < 2; j++) {
            slope.children[i].geometry.vertices[j].x = height / Math.tan(slope.userData.angle*Math.PI / 180);
        }
        slope.children[i].geometry.vertices[1].y = height;
        slope.children[i].geometry.verticesNeedUpdate = true;
    }
    slope.userData.height = height;
}

function changeSlopeAngle(slope, angle) {
    /* note: Changing angle should not change the height
    ** hence the length will decrease with increasing angle
    */
    slope.children[0].geometry.vertices[0].x = slope.userData.height / Math.tan(angle*Math.PI / 180);
    for(var i = 0; i < 3; i++) {
        for(var j = 0; j < 2; j++) {
            slope.children[i].geometry.vertices[j].x = slope.userData.height / Math.tan(angle*Math.PI / 180);
        }
        slope.children[i].geometry.verticesNeedUpdate = true;
    }
    slope.userData.angle = angle;
}

function changeCarAngle(car, angle) {
    car.rotation.z = Math.PI * angle / 180;
}

function createRoom() {
    var wallColor = 0x2bff2e;
    /* Initialise Wall variables */
    /* All walls extend beyond the room size in both directions */
    var geometry = new THREE.BoxGeometry(mySceneW * 2, wallThickness, 100);
    var material = new THREE.MeshLambertMaterial( {color: 0xaaaaaa} );
    myFloor  = new THREE.Mesh(geometry, material);
    // myFloor.lookAt(new THREE.Vector3(0,1,0));
    myFloor.position.set(myCenterX, bottomB - (wallThickness / 2), 0.0);
    myFloor.receiveShadow = true;
    PIEaddElement(myFloor);
    /* Ceiling */
    geometry = new THREE.BoxGeometry( mySceneW * 2, wallThickness, 100 );
    material = new THREE.MeshLambertMaterial( {color: 0x00ffcb} );
    myCeiling = new THREE.Mesh( geometry, material );
    myCeiling.position.set(myCenterX, topB+(wallThickness/2), 0.0);
    myFloor.receiveShadow = true;
    PIEaddElement(myCeiling);
    /* Left */
    geometry = new THREE.BoxGeometry( wallThickness, mySceneH * 2, 100 );
    material = new THREE.MeshLambertMaterial( {color: wallColor} );
    myLeft = new THREE.Mesh( geometry, material );
    myLeft.position.set(leftB - 3*(wallThickness), myCenterY, 0.0);
    myLeft.rotation.y = Math.PI / 20;
    myLeft.receiveShadow = true;
    PIEaddElement(myLeft);
    /* Right */
    geometry = new THREE.BoxGeometry( wallThickness, mySceneH * 2, 100 );
    material = new THREE.MeshLambertMaterial( {color: wallColor} );
    myRight = new THREE.Mesh( geometry, material );
    myRight.position.set(rightB + 3*(wallThickness), myCenterY, 0.0);
    myRight.rotation.y = -Math.PI / 20;
    myRight.receiveShadow = true;
    PIEaddElement(myRight);
    /* Back */
    // material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: texture } );
    // geometry = new THREE.PlaneBufferGeometry( mySceneW * 2, mySceneH * 2 );
    geometry = new THREE.BoxGeometry( mySceneW * 2, mySceneH * 2, wallThickness );
    material = new THREE.MeshLambertMaterial( {color: wallColor} );
    myBack = new THREE.Mesh( geometry, material );
    myBack.position.set(myCenterX, myCenterY, 1.5*backB);
    myBack.receiveShadow = true;
    PIEaddElement(myBack);

    //TODO: Add slope labels
}

function emptyFunction() {}

/***************************Helper Functions***********************************/
