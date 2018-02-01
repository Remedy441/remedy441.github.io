/* Scene Dimensions */
var mySceneTLX; /* Top Left corner X coordinate */
var mySceneTLY; /* Top Left corner Y coordinate */
var mySceneBRX; /* Bottom Right corner X coordinate */
var mySceneBRY; /* Bottom Right corner Y coordinate */

/* Battery variables */
var batteryGeom;
var batteryTipGeom;
var battery;
var batteryTip;

/* Switch variables */
var connector;
var mount;
var swtch;
var swtchGeom;

/* Wire variables */
var wireShapeOne = new THREE.Shape();
var wireShapeTwo = new THREE.Shape();
var wirePointsOne;
var wirePointsTwo;
var wireOne;
var wireTwo;

/* Bulb */
var bottomGeo;
var bulbBottom;
var bulbGeo;
var bulb;

/* Copper and Hydrogen atoms liberating */
var cu1, cu2, cu3, cu4, cu5, cu6, cu7, cu8;
var hydro1, hydro2, hydro3;

/* Electrolytic cell variables */
var cell;
var liquid;
var containercell;
var electrolyte;

/* Electrode variables */
var elecGeom;
var cathode;
var anode;

var helpContent;

function initialiseHelp() {
    helpContent = "";
    helpContent = helpContent + "<h2>Electroplating with different metal rods help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows basic electroplating.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to 2 sliders.</p>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li> Change Cathode Element</li>";
    helpContent = helpContent + "<li> Change Anode Element</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>You also have other definitions/ terms used in this experiment.</p>";
    helpContent = helpContent + "<p>Once you refer to the info at control window, press start.</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p><b>Press Switch OFF/ Switch ON to turn off/ on the circuit</b></p>";
    helpContent = helpContent + "<p>When turned on, the switch drops, bulbs turns white to yellow (glow) and experiment starts.</p>";
    helpContent = helpContent + "<p>In the animation stage, Switch drops in and Copper atoms starts accumulating at cathode and Hydrogen gas liberates from anode</p>";
    helpContent = helpContent + "<p>The electrolyte goes lighter due to decomposition of ions and cathode turns brown.</p>";
    helpContent = helpContent + "<p>In addition you will also see two sliders showing potential and kinetic energy.</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line.</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animaion by uing the speed control buttons.</p>";
    helpContent = helpContent + "<p>You can change elecrode elements again by pressing reset button, it resets whole experiment.</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;

function initialiseInfo() {
    infoContent = "";
    infoContent = infoContent + "<h2>Electroplating Concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows basic electroplating</p>";
    infoContent = infoContent + "<h3>Electroplating</h3>";
    infoContent = infoContent + "<p>Initially keeping either anode/cathode as carbon, change any 1 to Zinc, Copper or Iron.</p>";
    infoContent = infoContent + "<p>After choosing either cathode or anode element, start the experiment.</p>";
    infoContent = infoContent + "<p>Copper Ions from electrolyte goes to Cathode(-) and Hydrogen bubbles liberates from Anode(+).</p>";
    infoContent = infoContent + "<p>Thus copper gets plates on cathode electrode and it electrode turns brown.</p>";
    infoContent = infoContent + "<p>And as CuSO4 decomposes from electrolyte, the solution turns from brown to light brown as demonstrated.</p>";
    PIEupdateInfo(infoContent);
}

function wireRectOne(ctx, x, y, width, height, radius) {
    ctx.moveTo(x + 13, y + height);
    ctx.lineTo(x + width, y + height);
    ctx.lineTo(x + width, y);
    ctx.lineTo(3, y);
}


function wireRectTwo(ctx, x, y, width, height, radius) {
    ctx.moveTo(-3, y);
    ctx.lineTo(x, y);
    ctx.lineTo(x, y + height);
    ctx.lineTo(x + 7, y + height);
}

function initialiseControlVariables() {
    initialCathodeState = 0;
    cathodeSelected = 0;
    cathodeEnumMin = 0;
    cathodeEnumMax = 3;
    changeCathode = 1;

    initialAnodeState = 0;
    anodeSelected = 0;
    anodeEnumMin = 0;
    anodeEnumMax = 3;
    changeAnode = 1;

}

/* Change Cathode Elements */
function handleCathode(cathodeType) {

    cathodeSelected = cathodeType
    if (cathodeSelected == 0) {
        cathode.material.color.setStyle("blue");
    }
    else if (cathodeSelected == 1) {
        cathode.material.color.setStyle("brown");
    }
    else if (cathodeSelected == 2) {
        cathode.material.color.setStyle("red");
    }
    else {
        cathode.material.color.setStyle("white");
    }

    PIErender();
}

/* Change Anode Elements */
function handleAnode(anodeType) {

    anodeSelected = anodeType;
    if (anodeSelected == 0) {
        anode.material.color.setStyle("blue");
    }
    else if (anodeSelected == 1) {
        anode.material.color.setStyle("brown");
    }
    else if (anodeSelected == 2) {
        anode.material.color.setStyle("red");
    }
    else {
        anode.material.color.setStyle("white");
    }

    PIErender();
}

function initialiseControls() {
    initialiseControlVariables();

    /* Cathode Element Selector */
    PIEaddInputSlider("Cathode", initialCathodeState, handleCathode, cathodeEnumMin, cathodeEnumMax, changeCathode);
    PIEaddDisplayText("Cathode", initialCathodeState);

    /* Anode Element Selector */
    PIEaddInputSlider("Anode", initialAnodeState, handleAnode, anodeEnumMin, anodeEnumMax, changeAnode);
    PIEaddDisplayText("Anode", initialAnodeState);

    /* Info */
    PIEaddInputText("Carbon", "Blue Rod");
    PIEaddInputText("Copper", "Brown Rod");
    PIEaddInputText("Iron", "Red Rod");
    PIEaddInputText("Zinc", "White Rod");
    PIEaddInputText("Cathode Position", "Right");
    PIEaddInputText("Anode Position", "Left");
    PIEaddInputText("Cathode Sign", "-");
    PIEaddInputText("Anode Sign", "+");
    PIEaddInputText("Electrolyte", "CuSO4+H2SO4");
    PIEaddInputText("Brown Atom", "Copper Atom");
    PIEaddInputText("White Atom", "Hydrogen Atom (Gas)");

    /* Switching */
    PIEaddDualCommand("Switch OFF", PIEresetExperiment);
    PIEaddDualCommand("Switch ON", PIEstartAnimation);
}

function initialiseScene() {
    /* Initialise Scene Variables */
    mySceneTLX = -50.0;
    mySceneTLY = 20.0;
    mySceneBRX = 50.0;
    mySceneBRY = -20.0;
}

function addBall(x, y, z) {
    var ballGeom = new THREE.SphereGeometry(0.5, 32, 24);
    var ball = new THREE.Mesh(ballGeom, new THREE.MeshPhongMaterial({
        color: "red"
    })); //switch spheres
    ball.position.set(x, y, z);
    PIEaddElement(ball);
    return ball;
} //add ball function

/* Add Copper Atoms */
function addCu(x, y, z) {
    var shapeCu = new THREE.SphereGeometry(0.5, 32, 24);
    var Cu = new THREE.Mesh(shapeCu, new THREE.MeshPhongMaterial({
        color: "brown",
        transparent: true,
        opacity: 0
    })); //switch spheres
    Cu.position.set(x, y, z);
    PIEaddElement(Cu);
    return Cu;
}

/* Add Hydrogen Atoms */
function addH(x, y, z) {
    var shapeH = new THREE.SphereGeometry(0.5, 32, 24);
    var H = new THREE.Mesh(shapeH, new THREE.MeshPhongMaterial({
        color: "white",
        transparent: true,
        opacity: 0
    })); //switch spheres
    H.position.set(x, y, z);
    PIEaddElement(H);
    return H;
}


function loadExperimentElements() {
    PIEsetExperimentTitle("Electroplating with different metal rods");
    PIEsetDeveloperName("Subham Sarkar");
    PIEhideControlElement();

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();

    /* initialise Controls */
    initialiseControls();

    /* Battery and Positive Terminal Tip */
    batteryGeom = new THREE.CylinderGeometry(1, 1, 5, 32);
    battery = new THREE.Mesh(batteryGeom, new THREE.MeshPhongMaterial({
        color: "skyblue"
    }));
    batteryTipGeom = new THREE.CylinderGeometry(0.5, 0.5, 0.5, 32); //terminal on top battery
    batteryTipGeom.translate(0, 2.555, 0);
    batteryTip = new THREE.Mesh(batteryTipGeom, new THREE.MeshPhongMaterial({
        color: "red"
    }));
    battery.add(batteryTip); //positive terminal tip to battery body
    battery.rotation.z = Math.PI / 2;
    battery.position.set(10, 10, 0);
    PIEaddElement(battery);

    /* Switch and Dots */
    connector = addBall(-7, 10, 0); //right red connector switch
    mount = addBall(-13, 10, 0); //left red connector switch
    swtchGeom = new THREE.BoxGeometry(6, .5, .5); //switch handle
    swtchGeom.translate(3, 0, 0);
    swtch = new THREE.Mesh(swtchGeom, new THREE.MeshPhongMaterial({
        color: "green"
    }));
    swtch.rotation.z = Math.PI / 4; //Makes a angle 22.5 Deg
    swtch.position.set(-13, 10, 0);
    PIEaddElement(swtch);

    /* Bulb and Bottom Cylinder */
    bottomGeo = new THREE.CylinderGeometry(1, 1, 1, 32);
    bulbBottom = new THREE.Mesh(bottomGeo, new THREE.MeshPhongMaterial({
        color: "blue",
        transparent: false
    }));
    bulbBottom.position.set(0, 10, 0);
    bulbGeo = new THREE.SphereGeometry(2, 50, 24);
    bulb = new THREE.Mesh(bulbGeo, new THREE.MeshPhongMaterial({
        color: "white",
        transparent: false
    }));
    bulb.position.set(0, 12, 0);
    PIEaddElement(bulbBottom);
    PIEaddElement(bulb);

    /* Electrolytic Cell */
    cell = new THREE.CylinderGeometry(5, 5, 8, 18); //Container cell
    liquid = new THREE.CylinderGeometry(5, 5, 6, 18); //liquid signifies CuSO4 and H2SO4
    containercell = new THREE.Mesh(cell, new THREE.MeshPhongMaterial({
        color: "white",
        transparent: true,
        transparent: true,
        opacity: 0.2
    }));
    containercell.position.set(0, -13, 0); //position of the main container

    /* Electrodes Anode and Cathode */
    elecGeom = new THREE.CylinderGeometry(0.5, 0.5, 5, 32); //cathode anode geometry
    cathode = new THREE.Mesh(elecGeom, new THREE.MeshPhongMaterial({
        color: "blue",
        transparent: false
    })); //cathode
    anode = new THREE.Mesh(elecGeom, new THREE.MeshPhongMaterial({
        color: "blue",
        transparent: false
    })); //anode
    cathode.position.set(3, -11, 0);
    anode.position.set(-3, -11, 0);
    PIEaddElement(cathode);
    PIEaddElement(anode);

    /* Electrolyte CuSO4 + H2SO4 */
    electrolyte = new THREE.Mesh(liquid, new THREE.MeshPhongMaterial({
        color: "red",
        transparent: true,
        opacity: 0.4
    }));
    electrolyte.position.set(0, -1, 0);
    containercell.add(electrolyte);
    PIEaddElement(containercell);

    /* Wiring of the circuit */
    wireRectOne(wireShapeOne, -20, -10, 40, 20, 0);
    wireRectTwo(wireShapeTwo, -20, -10, 40, 20, 0);
    wirePointsOne = wireShapeOne.createPointsGeometry();
    wirePointsTwo = wireShapeTwo.createPointsGeometry();
    wireOne = new THREE.Line(wirePointsOne, new THREE.LineBasicMaterial({
        color: "blue"
    }));
    wireTwo = new THREE.Line(wirePointsTwo, new THREE.LineBasicMaterial({
        color: "blue"
    }));
    PIEaddElement(wireOne); //add wire to the scene
    PIEaddElement(wireTwo); //add wire to the scene

    PIErenderer.sortObjects = false;

    /* Copper and Hydrogren Atoms */
    cu1 = addCu(2, -15, 0);
    cu2 = addCu(4, -15, 0);
    cu3 = addCu(2, -14, 0);
    cu4 = addCu(4, -14, 0);
    cu5 = addCu(3, -14, 0);
    cu6 = addCu(2, -13, 0);
    cu7 = addCu(4, -13, 0);
    cu8 = addCu(3, -15, 0);
    hydro1 = addH(-2, -12, 0);
    hydro2 = addH(-4, -12, 0);
    hydro3 = addH(-1, -11.5, 0);

    /* Reset all positions and animations */
    resetExperiment();

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}

function resetExperiment() {
    wireOne.material.color.setStyle("blue");
    wireTwo.material.color.setStyle("blue");
    cathode.material.color.setStyle("blue");
    anode.material.color.setStyle("blue");
    swtch.rotation.z = Math.PI / 4;
    electrolyte.material.color.setStyle("red");
    bulb.material.color.setStyle("white");
    cu1.material.transparent = true;
    cu2.material.transparent = true;
    cu3.material.transparent = true;
    cu4.material.transparent = true;
    cu5.material.transparent = true;
    cu6.material.transparent = true;
    cu7.material.transparent = true;
    cu8.material.transparent = true;
    hydro1.material.transparent = true;
    hydro2.material.transparent = true;
    hydro3.material.transparent = true;

}

function updateExperimentElements(t, dt) {
    wireOne.material.color.setStyle("yellow");
    wireTwo.material.color.setStyle("yellow");
    cathode.material.color.setStyle("brown");
    swtch.rotation.z = 0;
    electrolyte.material.color.setStyle("brown");
    bulb.material.color.setStyle("yellow");
    cu1.material.transparent = false;
    cu2.material.transparent = false;
    cu3.material.transparent = false;
    cu4.material.transparent = false;
    cu5.material.transparent = false;
    cu6.material.transparent = false;
    cu7.material.transparent = false;
    cu8.material.transparent = false;
    hydro1.material.transparent = false;
    hydro2.material.transparent = false;
    hydro3.material.transparent = false;


    /* CHECK VALUE OF anodeSelected and cathodeSelected to animate more appropriately */

    cu1.position.x = 2 + 0.35 * Math.sin(0.001 * t);
    cu2.position.x = 4 + 0.45 * Math.sin(0.001 * t);
    cu3.position.x = 2 + 0.29 * Math.sin(0.001 * t);
    cu4.position.x = 4 + 0.40 * Math.sin(0.001 * t);
    cu5.position.x = 3 + 0.35 * Math.sin(0.001 * t);
    cu6.position.x = 2 + 0.29 * Math.sin(0.001 * t);
    cu7.position.x = 4 + 0.30 * Math.sin(0.001 * t);
    cu8.position.x = 3 + 0.45 * Math.sin(0.001 * t);
    hydro1.position.y = -12 + 0.25 * Math.sin(0.001 * t);
    hydro2.position.y = -12 + 0.22 * Math.sin(0.001 * t);
    hydro3.position.y = -12.5 + 0.13 * Math.sin(0.001 * t);
}