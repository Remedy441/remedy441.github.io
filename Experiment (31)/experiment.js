//MY_PROJECT
//LED-TESTER
/*    
        Developer : SIDDHARTH - ACHARYA
        COLLEGE : IIIT - Allahabad
*/
var mySceneTLX;        
var mySceneTLY;        
var mySceneBRX;        
var mySceneBRY;        
var mySceneW;          
var mySceneH;          
var myCenterX;         
var myCenterY;         

var wallThickness;
var myBack;             

//CIRCUIT 
var line;
var line1;
var line1a;
var line2;
var line3;
var line4;
var line5;
var line6;
var led1;
var led2;
var led3;
var gate;
var gateC;
var dir;
var aro;
var aro1;
var led1Light;
var led2Light;
var led3Light;
var sl;

var leg1;
var leg2;
var tp;
var open;

var SwitchText;
var SwitchText1;
/*variables used to update animation*/
var f;
var c;
var u;

var voltage;
var voltageV = 5;
var resistanceC;
var resistanceV;
var resistanceLedR;
var reR;
var reB;
var reG;
var resistanceLedG;
var resistanceLedB;
var dropR;
var dropG;
var dropB;
var dropRV;
var dropGV;
var dropBV;

var GS;
var GSF;
var dis;

var currentCIR;
var resistanceCIR;

var BatteryValue;
var counter = 0;
function handleV(newValue) {
    voltageV = newValue;
}
function handleRC(newValue) {
    resistanceV = newValue;
}
function handleR(newValue) {
    resistanceLedR = newValue;
}
function handleG(newValue) {
    resistanceLedG = newValue;
}
function handleB(newValue) {
    resistanceLedB = newValue;
}

function initialiseControlVariables()
{
    voltage = "BatteryVoltage(V)"; //2
    voltageV = 5;
    Vstep = 1;

    resistanceC = "Resistance(ohm)"; //25
    resistanceV = 60.0;
    resStep = 1;

    reR = "RED_LED(ohm)";
    reG = "GREEN_LED(ohm)";
    reB = "BLUE_LED(ohm)";
    resistanceLedR = 150;
    resistanceLedG = 70;
    resistanceLedB = 75;

    dis = "CRT-Current(mA)";
    currentCIR = 1.0;
    resistanceCIR = 0.0;

    dropR = "Voltage(RED)(V)";
    dropG = "Voltage(GREEN)(V)";
    dropB = "Voltage(BLUE)(V)";
    dropRV = 0.0;
    dropGV = 0.0;
    dropBV = 0.0;
    
}
function initialiseControls()
{
    initialiseControlVariables();
    PIEaddInputSlider(voltage,voltageV, handleV, 0.0, 10.0, Vstep);
    PIEaddInputSlider(resistanceC, resistanceV, handleRC ,50.0, 80.0, resStep);
    PIEaddInputSlider(reR, resistanceLedR, handleR, 138 , 160 , resStep);
    PIEaddInputSlider(reG, resistanceLedG, handleG, 65, 80, resStep);
    PIEaddInputSlider(reB, resistanceLedB, handleB, 67, 85, resStep);

    PIEaddDisplayText(voltage, voltageV);
    PIEaddDisplayText(resistanceC, resistanceV);
    PIEaddDisplayText(reR, resistanceLedR);
    PIEaddDisplayText(reG, resistanceLedG);
    PIEaddDisplayText(reB, resistanceLedB);
    PIEaddDisplayText(dis, currentCIR);
    PIEaddDisplayText(dropR, dropRV);
    PIEaddDisplayText(dropG, dropGV);
    PIEaddDisplayText(dropB, dropBV);

}

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>LED testers experiment help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows a electric circuit which demonstrates LED as testers , different colour LED's glow with different intensities when circuit is turned ON because of different resistances in them.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to five sliders.</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>BatteryVoltage(V)&nbsp;&nbsp;:&nbsp;Controls voltage of applied battery .</li>";
    helpContent = helpContent + "<li>Resistance(ohm)&nbsp;&nbsp;:&nbsp;Controls resistance value of external resistance .</li>";
    helpContent = helpContent + "<li>RED_LED(ohm)&nbsp;:&nbsp;Controls resistance value of RED-LED .</li>";
    helpContent = helpContent + "<li>GREEN_LED(ohm)&nbsp;&nbsp;:&nbsp;Controls resistance value of GREEN-LED .</li>";
    helpContent = helpContent + "<li>BLUE_LED(ohm)&nbsp;&nbsp;:&nbsp;Controls resistance value of BLUE-LED .</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the circuit is now complete and therefore different LED's will glow with different intensities and color due to difference in resistance value , also the lights produced by them will be unidirectional .</p>";
    helpContent = helpContent + "<p>The right hand panel now shows the values of current in the circuit , voltage drop across each resistor , resistance value of each resistor and external resistance and battery voltage value.</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>LED Testers experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows a circuit which uses LED's as a tester , different coloured LED's glow with current and shows that LED's are unidirectional.</p>";
    infoContent = infoContent + "<h3>LED's as testers.</h3>";
    infoContent = infoContent + "<p>When the circuit is turned ON as there is current in the circuit therefore light glows in different LED's which shows that the current is flowing in the circuit.</p>";
    infoContent = infoContent + "<h3>LED's are unidirectional</h3>";
    infoContent = infoContent + "<p>LEDs produce unidirectional light, which means luminaries are more focused and don’t spread light uncontrollably.</p>";
    infoContent = infoContent + "<p>which can be seen as each led produces light in a focused area only , moreover intensities of light will be different for each led based upon the voltage drop across them.</p>";
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
}

function loadExperimentElements()
{
    var geo;
    var geometry;
    var material;
    

    PIEsetExperimentTitle("LED-Tester");
    PIEsetDeveloperName("Siddharth Acharya");
    PIEhideControlElement();

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();
    
    initialiseScene();

    initialiseOtherVariables();

    /*
    var wood = document.createElement("div");
    wood.style = "background: none; border: none; box-sizing:border-box;";
    document.body.appendChild(wood);
    wood.innerHTML = '<img src="hardwood.jpg" alt="background-animation" style="height: 60% ; width: 75%; position : "absolute">';
    wood.style.position = "absolute";
    wood.style.left = 18 + '%';
    wood.style.top = 17 + '%';
   // wood.style.display = "inline";
    */

    line = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 1.0), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line.position.set(0.5 , 1.5  - 0.25, 0.0);
    line.castShadow = true;
    PIEaddElement(line);

    line1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.43), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line1.position.set(3.5, 1.22 - 0.25, 0.0);
    line1.castShadow = true;
    PIEaddElement(line1);

    line1a = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.28), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line1a.position.set(3.5, 1.87 - 0.25, 0.0);
    line1a.castShadow = true;
    PIEaddElement(line1a);

    line2 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 3.0), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line2.position.set(2, 1 - 0.25, 0.0);
    line2.castShadow = true;
    line2.rotateZ(Math.PI / 2);
    PIEaddElement(line2);
    
    line3 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.5), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line3.position.set(0.75, 2 - 0.25, 0.0);
    line3.castShadow = true;
    line3.rotateZ(Math.PI / 2);
    PIEaddElement(line3);

    line4 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.5), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line4.position.set(3.25, 2 - 0.25, 0.0);
    line4.castShadow = true;
    line4.rotateZ(Math.PI / 2);
    PIEaddElement(line4);

    line5 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.40), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line5.position.set(1.6, 2 - 0.25, 0.0);
    line5.castShadow = true;
    line5.rotateZ(Math.PI / 2);
    PIEaddElement(line5);

    line6 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.40), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line6.position.set(2.4, 2 - 0.25, 0.0);
    line6.castShadow = true;
    line6.rotateZ(Math.PI / 2);
    PIEaddElement(line6);

    geo = new THREE.Shape();
    geo.moveTo(2, 2.35 - 0.25);
    geo.quadraticCurveTo(2.2, 2.35 - 0.25, 2.2, 2.35 - 0.25);
    geo.quadraticCurveTo(2.2, 2.4 - 0.25, 2.2, 2.4 - 0.25);
    geo.quadraticCurveTo(2.15, 2.4 - 0.25, 2.15, 2.4 - 0.25);
    geo.quadraticCurveTo(2.15, 2.5 - 0.25, 2.15, 2.5 - 0.25);
    geo.quadraticCurveTo(2, 2.7 - 0.25, 1.85, 2.5 - 0.25);
    geo.quadraticCurveTo(1.85, 2.4 - 0.25, 1.85, 2.4 - 0.25);
    geo.quadraticCurveTo(1.8, 2.4 - 0.25, 1.8, 2.4 - 0.25);
    geo.quadraticCurveTo(1.8, 2.35 - 0.25, 1.8, 2.35 - 0.25);
    geo.quadraticCurveTo(2, 2.35 - 0.25, 2, 2.35 - 0.25);
    geometry = new THREE.ShapeGeometry(geo);
    led1 = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0x990000 }));
    led1.castShadow = true;
    PIEaddElement(led1);

    var led1Leg;
    led1Leg = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.35), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    led1Leg.position.set(1.85, 2.18 - 0.25, 0.0);
    led1Leg.rotateZ(-Math.PI / 10);
    PIEaddElement(led1Leg);
    led1Leg.castShadow = false;
    
    var led1Leg2;
    led1Leg2 = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.35), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    led1Leg2.position.set(2.15, 2.18 - 0.25, 0.0);
    led1Leg2.rotateZ(Math.PI / 10);
    PIEaddElement(led1Leg2);
    led1Leg2.castShadow = false;


    geometry = new THREE.CircleGeometry(0.4, 32);
    led1Light = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0x990000, opacity: 0.5 }));
    led1Light.position.set(2, 2.5 - 0.25, -0.1);
    PIEaddElement(led1Light);
    led1Light.castShadow = false;
    led1Light.receiveShadow = false;
    
    /*Led-2*/
    geo = new THREE.Shape();
    geo.moveTo(1.2, 2.35 - 0.25);
    geo.quadraticCurveTo(1.4, 2.35 - 0.25, 1.4, 2.35 - 0.25);
    geo.quadraticCurveTo(1.4, 2.4 - 0.25, 1.4, 2.4 - 0.25);
    geo.quadraticCurveTo(2.15 - 0.80, 2.4 - 0.25, 2.15 - 0.80, 2.4 - 0.25);
    geo.quadraticCurveTo(2.15 - 0.80, 2.5 - 0.25, 2.15 - 0.80, 2.5 - 0.25);
    geo.quadraticCurveTo(2 - 0.80, 2.7 - 0.25, 1.85 - 0.80, 2.5 - 0.25);
    geo.quadraticCurveTo(1.85 - 0.80, 2.4 - 0.25, 1.85 - 0.80, 2.4 - 0.25);
    geo.quadraticCurveTo(1.8 - 0.80, 2.4 - 0.25, 1.8 - 0.80, 2.4 - 0.25);
    geo.quadraticCurveTo(1.8 - 0.80, 2.35 - 0.25, 1.8 - 0.80, 2.35 - 0.25);
    geo.quadraticCurveTo(2 - 0.80, 2.35 - 0.25, 2 - 0.80, 2.35 - 0.25);
    geometry = new THREE.ShapeGeometry(geo);
    led2 = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0x59EE21 }));
    led2.castShadow = true;
    PIEaddElement(led2);

    var led2Leg;
    led2Leg = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.35), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    led2Leg.position.set(1.85 - 0.80, 2.18 - 0.25, 0.0);
    led2Leg.rotateZ(-Math.PI / 10);
    PIEaddElement(led2Leg);
    led2Leg.castShadow = false;

    var led2Leg2;
    led2Leg2 = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.35), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    led2Leg2.position.set(2.15 - 0.80, 2.18 - 0.25, 0.0);
    led2Leg2.rotateZ(Math.PI / 10);
    PIEaddElement(led2Leg2);
    led2Leg2.castShadow = false;


    geometry = new THREE.CircleGeometry(0.4, 32);
    led2Light = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0x4CF10F, opacity: 0.5 }));
    led2Light.position.set(2 - 0.80, 2.5 - 0.25, -0.1);
    PIEaddElement(led2Light);
    led2Light.castShadow = false;
    led2Light.receiveShadow = false;

    /* Led-3 */
    geo = new THREE.Shape();
    geo.moveTo(2.8, 2.35 - 0.25);
    geo.quadraticCurveTo(2.2 + 0.8, 2.35 - 0.25, 2.2 + 0.8, 2.35 - 0.25);
    geo.quadraticCurveTo(2.2 + 0.8, 2.4 - 0.25, 2.2 + 0.8, 2.4 - 0.25);
    geo.quadraticCurveTo(2.15 + 0.8, 2.4 - 0.25, 2.15 + 0.8, 2.4 - 0.25);
    geo.quadraticCurveTo(2.15 + 0.8, 2.5 - 0.25, 2.15 + 0.8, 2.5 - 0.25);
    geo.quadraticCurveTo(2 + 0.8, 2.7 - 0.25, 1.85 + 0.8, 2.5 - 0.25);
    geo.quadraticCurveTo(1.85 + 0.8, 2.4 - 0.25, 1.85 + 0.8, 2.4 - 0.25);
    geo.quadraticCurveTo(1.8 + 0.8, 2.4 - 0.25, 1.8 + 0.8, 2.4 - 0.25);
    geo.quadraticCurveTo(1.8 + 0.8, 2.35 - 0.25, 1.8 + 0.8, 2.35 - 0.25);
    geo.quadraticCurveTo(2 + 0.8, 2.35 - 0.25, 2 + 0.8, 2.35 - 0.25);
    geometry = new THREE.ShapeGeometry(geo);
    led3 = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0x1F71DF }));
    PIEaddElement(led3);

    var led3Leg;
    led3Leg = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.35), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    led3Leg.position.set(1.85 + 0.8, 2.18 - 0.25, 0.0);
    led3Leg.rotateZ(-Math.PI / 10);
    PIEaddElement(led3Leg);
    led3Leg.castShadow = false;

    var led3Leg2;
    led3Leg2 = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.35), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    led3Leg2.position.set(2.15 + 0.80, 2.18 - 0.25, 0.0);
    led3Leg2.rotateZ(Math.PI / 10);
    PIEaddElement(led3Leg2);
    led3Leg2.castShadow = false;


    geometry = new THREE.CircleGeometry(0.4, 32);
    led3Light = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0x136FEA, opacity: 0.5 }));
    led3Light.position.set(2 + 0.8, 2.5 - 0.25, -0.1);
    PIEaddElement(led3Light);
    led3Light.castShadow = false;
    led3Light.receiveShadow = false;


    var battery;
    geometry = new THREE.CylinderGeometry(0.15, 0.15, 0.20);
    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
    battery = new THREE.Mesh(geometry, material);
    battery.position.set(0.5, 1.6 - 0.25, 0.1);
    PIEaddElement(battery);

    var battery1;
    geometry = new THREE.CylinderGeometry(0.15, 0.15, 0.30);
    material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    battery1 = new THREE.Mesh(geometry, material);
    battery1.position.set(0.5, 1.35 - 0.25, 0.1);
    PIEaddElement(battery1);
    

    var batteryT;
    geometry = new THREE.BoxGeometry(0.1,0.05, 0);
    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
    batteryT = new THREE.Mesh(geometry, material);
    batteryT.position.set(0.5, 1.72 - 0.25, 0.1);
    PIEaddElement(batteryT);

    var resistor;
    geometry = new THREE.BoxGeometry(0.50, 0.25, 0.25);
    material = new THREE.MeshLambertMaterial({ color: 0xbfbfbf });
    resistor = new THREE.Mesh(geometry, material);
    resistor.position.set(2, 1 - 0.25, 0.1);
    resistor.rotateX(Math.PI / 30);
    resistor.rotateY(Math.PI / 20);
    PIEaddElement(resistor);
    resistor.castShadow = false;

    var res;
    res = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.3), new THREE.MeshLambertMaterial({ color: 0xDAA520 }));
    res.position.set(2, 1.18 - 0.25, 0.1);
    res.castShadow = true;
    res.rotateZ(Math.PI / 2);
    res.rotateX(Math.PI / 8);
    res.rotateY(Math.PI / 2);
    PIEaddElement(res);
    
    //  L.rotateZ(Math.PI / 2);
    //    L.rotateX(Math.PI / 8);
    //   L.rotateY(Math.PI / 2);
    var L;
    L = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.04), new THREE.MeshLambertMaterial({ color: 0x000033 }));
    L.position.set(2, 1.18 - 0.25, 0.12);
    L.castShadow = true;
    PIEaddElement(L);

    var L1;
    L1 = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.04), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    L1.position.set(2.08, 1.18 - 0.25, 0.12);
    L1.castShadow = true;
    PIEaddElement(L1);

    var L2;
    L2 = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.04), new THREE.MeshLambertMaterial({ color: 0x008000 }));
    L2.position.set(1.92, 1.18 - 0.25, 0.18);
    L2.castShadow = true;
    PIEaddElement(L2);

    var L3;
    L3 = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.08), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    L3.position.set(1.86, 1.16 - 0.25, 0.18);
    PIEaddElement(L3);
    L3.castShadow = false;
    
    var L4;
    L4 = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.08), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    L4.position.set(2.14, 1.16 - 0.25, 0.18);
    PIEaddElement(L4);
    L4.castShadow = false;

    /*
    var resistorText;
    var text = "Resistance";
    geometry = new THREE.TextGeometry(text, { font : optimer ,size: 2, height: 2 });
    geometry.computeBoundingBox();
    material = new THREE.MeshLambertMaterial({ color: 0xff0000 });
    resistorText = new THREE.Mesh(geometry, material);
    resistorText.position.set(2, 1, 0.1);
    PIEaddElement(resistorText);
    */
    //document.innerHTML = "Resistance";

    geometry = new THREE.BoxGeometry(0.40, 0.12, 0.25);
    material = new THREE.MeshLambertMaterial({ color: 0x303030 });
    switchB = new THREE.Mesh(geometry, material);
    switchB.position.set(3.48, 1.62 - 0.25, 0.1);
    switchB.rotateX(Math.PI / 6);
    //PIEaddElement(switchB);
    switchB.castShadow = false;

    geometry = new THREE.BoxGeometry(0.1, 0.20, 0);
    material = new THREE.MeshLambertMaterial({ color: 0x707070 });
    sl = new THREE.Mesh(geometry, material);
    sl.position.set(3.405, 1.66-0.24, 0.4);
    sl.rotateZ(Math.PI / 2);
    //PIEaddElement(sl);
    sl.castShadow = false;

    var D1;
    geometry = new THREE.CircleGeometry(0.02, 32);
    D1 = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0x6666cc, opacity: 0.5 }));
    D1.position.set(3.28, 1.702-0.25, 0.2);
    //PIEaddElement(D1);
    D1.castShadow = false;
    D1.receiveShadow = false;

    var D2;
    geometry = new THREE.CircleGeometry(0.02, 32);
    D2 = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0x6666cc, opacity: 0.5 }));
    D2.position.set(3.62, 1.64-0.25, 0.25);
    //PIEaddElement(D2);
    D2.castShadow = false;
    D2.receiveShadow = false;

    var bb9 = "font-family: Monospace; color: #cc8800; margin: 0px; overflow: hidden;background-color: #cc8800;font-size: 23px;  transform: rotate(-27deg);";
    SwitchText = document.createElement("p"); SwitchText.style = bb9; document.body.appendChild(SwitchText);
    SwitchText.innerHTML = "<h6>S</h6>";
    SwitchText.style.position = "absolute";
    SwitchText.style.left = 75 +1.6 + '%';
    SwitchText.style.top = 49 + '%';
    SwitchText.addEventListener("click", PIEstartAnimation);

    var bb10 = "font-family: Monospace; color: #cc8800; margin: 0px; overflow: hidden;background-color: #cc8800;font-size: 20px;  transform: rotate(0deg);";
    SwitchText1 = document.createElement("p"); SwitchText1.style = bb10; document.body.appendChild(SwitchText1);
    SwitchText1.innerHTML = "<h6>S</h6>";
    SwitchText1.style.position = "absolute";
    SwitchText1.style.left = 73.7 +1.6 + '%';
    SwitchText1.style.top = 49 + '%';
    SwitchText1.addEventListener("click", PIEresetExperiment);

    var bb = "font-family: Monospace ; color: #ffffff; margin: 0px; overflow: hidden;";
    var bb1 = "font-family: Monospace; color: #000000; margin: 0px; overflow: hidden; ";
    var bb2 = "font-family: Monospace; color: #000000; margin: 0px; overflow: hidden;";
    var bb3 = "font-family: Monospace; color: #000000; margin: 0px; overflow: hidden; font-size: 30px;";
    var bb4 = "font-family: Monospace; color: #00e600; margin: 0px; overflow: hidden; ; background-color: #00e600 ;border-style: inset;";
    var bb5 = "font-family: Monospace; color: #ff0000; margin: 0px; overflow: hidden; ; background-color: #ff0000 ;border-style: inset;";

    
    var REStext = document.createElement("p"); REStext.style = bb1; document.body.appendChild(REStext);
    REStext.innerHTML = "<h4>Resistance</h4>";
    REStext.style.position = "absolute";
    REStext.style.left =  47.5 + '%';
    REStext.style.top =  63 + 9 + '%';
    

    var REStext1 = document.createElement("span"); REStext1.style = bb; document.body.appendChild(REStext1);
    REStext1.innerHTML = "<h1>+</h1>";
    REStext1.style.position = "absolute";
    REStext1.style.left = 25 -1.5 + '%';
    REStext1.style.top = 41 + 9 + '%';
    

    var REStext2 = document.createElement("span"); REStext2.style = bb2; document.body.appendChild(REStext2);
    REStext2.innerHTML = "<h1>-</h1>";
    REStext2.style.position = "absolute";
    REStext2.style.left = 25 -1.5 + '%';
    REStext2.style.top = 54 + 9 + '%';

    BatteryValue = document.createElement("span"); BatteryValue.style = bb3; document.body.appendChild(BatteryValue);
    BatteryValue.innerHTML = voltageV + "V";
    BatteryValue.style.position = "absolute";
    BatteryValue.style.left = 19 + '%'
    BatteryValue.style.top = 50 + 9 + '%';
    BatteryValue.style.visibility = "hidden";

    /*
    var animat = document.createElement("div");
    animat.style = "background: none; border: none; box-sizing:border-box;";
    document.body.appendChild(animat);
    animat.innerHTML = '<img src="boy.png" alt="background-animation" style="height: 90% ; width: 95%; position : "absolute">';
    animat.style.position = "absolute";
    animat.style.left = 1 + '%';
    animat.style.top = 35 + '%';
    animat.style.display = "inline";
    
    var animat1 = document.createElement("div");
    animat1.style = "background: none; border: none; box-sizing:border-box;";
    document.body.appendChild(animat1);
    animat1.innerHTML = '<img src="girl.jpg" alt="background-animation" style="height: 70% ; width: 95%; position : "absolute">';
    animat1.style.position = "absolute";
    animat1.style.left = 82 + '%';
    animat1.style.top = 48 + '%';
    animat1.style.display = "inline";
    */



    PIEstopButton.addEventListener("click", PIEresetExperiment);

    gate = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.03, 0.40), new THREE.MeshLambertMaterial({ color: 0xDAA520 }));
    gate.position.set(3.625, 1.64 - 0.25, 0.0);
    gate.rotateZ(Math.PI / 4);
    //PIEaddElement(gate);
    gate.castShadow = false;
    //gate.addEventListener('click', PIEstartAnimation);
    //gate.on('click', PIEstartAnimation);
    //var domEvents = new THREE.DomEvents(PIEcamera, PIErenderer.domElement);
    // ...
    //domEvents.addEventListener(gate, 'click', PIEstartAnimation, false);
    

    gateC = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.03, 0.30), new THREE.MeshLambertMaterial({ color: 0xDAA520 }));
    gateC.position.set(3.5, 1.64 - 0.25, 0.0);
    //PIEaddElement(gateC);
    gateC.castShadow = false;
    //gateC.addEventListener("click", PIEresetExperiment);
    gateC.scale.set(0, 0, 0);

    dir = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.2), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    dir.position.set(0.6, 2 - 0.25, 0.0);
    dir.rotateZ(Math.PI / 2);
    PIEaddElement(dir);
    dir.castShadow = false;

    aro = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.05), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    aro.position.set(0.7, 2.01 - 0.25, 0.0);
    aro.rotateZ(Math.PI / 4);
    PIEaddElement(aro);
    aro.castShadow = false;

    aro1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.05), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    aro1.position.set(0.7, 1.99 - 0.25, 0.0);
    aro1.rotateZ(-Math.PI / 4);
    PIEaddElement(aro1);
    aro1.castShadow = false;

    f = 0;
    c = 0;
    u = 0;

    /*
    geometry = new THREE.BoxGeometry(4, 2 , 0);
    //material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    material = new THREE.MeshPhongMaterial({ map: THREE.ImageUtils.loadTexture('hardwood.jpg') });
    myBack = new THREE.Mesh(geometry, material);
    myBack.position.set(1.9,1.65 ,-0.20);
    myBack.receiveShadow = true;
    PIEaddElement(myBack);
    */

    /*Background of Led-Test*/
    geometry = new THREE.BoxGeometry(mySceneW * 2, mySceneH *2, wallThickness);
    material = new THREE.MeshLambertMaterial({ color: 0xFDF6D5 });
    myBack = new THREE.Mesh(geometry, material);
    myBack.position.set(myCenterX, myCenterY, -1.5 * wallThickness);
    PIEaddElement(myBack);
    myBack.receiveShadow = false;

    initialiseControls();

    PIEstopButton.addEventListener("click", PIEresetExperiment);

    /* Reset all positions */
    resetExperiment();

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}
function resetExperiment()
{
    
    sl.material.color.setHex(0x707070);
    
    initialiseOtherVariables();
    dir.scale.set(0, 0, 0);
    aro.scale.set(0, 0, 0);
    aro1.scale.set(0, 0, 0);
    gate.scale.set(1, 1, 1);
    gateC.scale.set(0, 0, 0);
    led1.material.color.setHex(0x990000);
    led2.material.color.setHex(0x59EE21);
    led3.material.color.setHex(0x1F71DF);

    voltageV = 5;
    resistanceV = 60.0;
    resistanceLedR = 150;
    resistanceLedG = 70;
    resistanceLedB = 75;

    BatteryValue.innerHTML = voltageV + "V";
    PIEchangeInputSlider(reR, resistanceLedR);
    PIEchangeInputSlider(reG, resistanceLedG);
    PIEchangeInputSlider(reB, resistanceLedB);
    PIEchangeInputSlider(voltage, voltageV);
    PIEchangeInputSlider(resistanceC, resistanceV);

    if (dir.position.x == 3.5) {
        dir.rotateZ(Math.PI / 2);
        aro.rotateZ(- Math.PI / 2);
        aro1.rotateZ(Math.PI / 2);
        f = 0;
    }
    else if (dir.position.y == 1 - 0.25) {
        dir.rotateZ(Math.PI );
        aro.rotateZ(Math.PI);
        aro1.rotateZ(Math.PI);
        f = 0;
        c = 0;
    }
    else if (dir.position.x == 0.5) {
        dir.rotateZ(Math.PI / 2);
        aro.rotateZ(-Math.PI/2);
        aro1.rotateZ(-Math.PI/2); 
        f = 0;
        c = 0;
        u = 0;
    }

    dir.position.set(0.6, 2 - 0.25, 0.0);
    aro.position.set(0.7, 2.01 - 0.25, 0.0);
    aro1.position.set(0.7, 1.99 - 0.25, 0.0);

    led1Light.scale.set(0, 0, 0);
    led2Light.scale.set(0, 0, 0);
    led3Light.scale.set(0, 0, 0);

    SwitchText.style.visibility = "visible";
    SwitchText1.style.visibility = "hidden";
    
}
function updateExperimentElements(t, dt)
{
    
    //sl.material.color.setHex(0x000000);
    SwitchText1.style.visibility = "visible";
    SwitchText.style.visibility = "hidden";
    

    BatteryValue.innerHTML = voltageV + "V";
    if (voltageV >= 1) {
        dir.scale.set(1, 1, 1);
        aro.scale.set(1, 1, 1);
        aro1.scale.set(1, 1, 1);
        gate.scale.set(0, 0, 0);
        gateC.scale.set(1, 1, 1);
        led1.material.color.setHex(0xE85757);
        led2.material.color.setHex(0xB6CF7F);
        led3.material.color.setHex(0x62AACD);


        resistanceCIR = resistanceV + resistanceLedB + resistanceLedG + resistanceLedR;
        currentCIR = voltageV / resistanceCIR;
        dropRV = currentCIR * resistanceLedR;
        dropGV = currentCIR * resistanceLedG;
        dropBV = currentCIR * resistanceLedB;

        //console.log(currentCIR);
        led1Light.scale.set(0.60 + dropRV / 10, 0.60 + dropRV / 10, 0.60 + dropRV / 10);
        led2Light.scale.set(0.60 + dropGV / 10 + 0.1, 0.60 + dropGV / 10 + 0.1, 0.60 + dropGV / 10 + 0.1);
        led3Light.scale.set(0.60 + dropBV / 10 + 0.1, 0.60 + dropBV / 10 + 0.1, 0.60 + dropBV / 10 + 0.1);


        if (aro.position.x < 3.5 && c != 1) {
            aro.position.set(aro.position.x + 0.02, aro.position.y, aro.position.z);
            aro1.position.set(aro1.position.x + 0.02, aro1.position.y, aro1.position.z);
            dir.position.set(dir.position.x + 0.02, dir.position.y, dir.position.z);
        }
        else if (aro.position.x >= 3.5 && f != 1) {

            aro.position.set(3.5 + 0.01, 1.8 - 0.25, 0);
            aro.rotateZ(Math.PI / 2);
            aro1.position.set(3.5 - 0.01, 1.8 - 0.25, 0);
            aro1.rotateZ(-Math.PI / 2);
            dir.position.set(3.5, 1.9 - 0.25, 0);
            dir.rotateZ(Math.PI / 2);
            f = 1;
        }
        else if (f == 1 && aro.position.y > 1 - 0.25 && u == 0) {
            aro.position.set(aro.position.x, aro.position.y - 0.02, aro.position.z);
            aro1.position.set(aro1.position.x, aro1.position.y - 0.02, aro1.position.z);
            dir.position.set(dir.position.x, dir.position.y - 0.02, dir.position.z);
        }
        else if (aro.position.y <= 1 - 0.25 && c != 1) {
            aro.position.set(3.3, 1 - 0.01 - 0.25, 0);
            aro.rotateZ(-Math.PI / 2);
            aro1.position.set(3.3, 1 + 0.01 - 0.25, 0);
            aro1.rotateZ(+Math.PI / 2);
            dir.position.set(3.4, 1 - 0.25, 0);
            dir.rotateZ(Math.PI / 2);
            c = 1;
        }
        else if (c == 1 && aro.position.x > 0.5) {
            aro.position.set(aro.position.x - 0.02, aro.position.y, aro.position.z);
            aro1.position.set(aro1.position.x - 0.02, aro1.position.y, aro1.position.z);
            dir.position.set(dir.position.x - 0.02, dir.position.y, dir.position.z);
        }
        else if (aro.position.x <= 0.5 && u != 1) {
            aro.position.set(0.5 - 0.01, 1.2 - 0.25, 0);
            aro.rotateZ(-Math.PI / 2);
            aro1.position.set(0.5 + 0.01, 1.2 - 0.25, 0);
            aro1.rotateZ(+Math.PI / 2);
            dir.position.set(0.5, 1.1 - 0.25, 0);
            dir.rotateZ(Math.PI / 2);
            u = 1;
        }
        else if (u == 1) {
            aro.position.set(aro.position.x, aro.position.y + 0.02, aro.position.z);
            aro1.position.set(aro1.position.x, aro1.position.y + 0.02, aro1.position.z);
            dir.position.set(dir.position.x, dir.position.y + 0.02, dir.position.z);
            if (aro.position.y >= 2 - 0.25) {
                dir.position.set(0.6, 2 - 0.25, 0.0);
                dir.rotateZ(Math.PI / 2)
                aro.position.set(0.7, 2.01 - 0.25, 0.0);
                aro.rotateZ(-Math.PI / 2)
                aro1.position.set(0.7, 1.99 - 0.25, 0.0);
                aro1.rotateZ(Math.PI / 2);
                f = 0;
                c = 0;
                u = 0;
            }
        }
    }
    else {
        dir.scale.set(0, 0, 0);
        aro.scale.set(0, 0, 0);
        aro1.scale.set(0, 0, 0);
        gate.scale.set(0, 0, 0);
        gateC.scale.set(1, 1, 1);
        led1.material.color.setHex(0x990000);
        led2.material.color.setHex(0x59EE21);
        led3.material.color.setHex(0x1F71DF);
        resistanceCIR = resistanceV + resistanceLedB + resistanceLedG + resistanceLedR;
        currentCIR = 0;
        dropRV = currentCIR * resistanceLedR;
        dropGV = currentCIR * resistanceLedG;
        dropBV = currentCIR * resistanceLedB;

        led1Light.scale.set(0, 0, 0);
        led2Light.scale.set(0, 0, 0);
        led3Light.scale.set(0, 0, 0);
    }
    if (counter == 0) {
        counter++;
        PIEresetExperiment();
    }
    PIEchangeDisplayText(reR, resistanceLedR);
    PIEchangeDisplayText(reG, resistanceLedG);
    PIEchangeDisplayText(reB, resistanceLedB);
    PIEchangeDisplayText(voltage, voltageV);
    PIEchangeDisplayText(resistanceC, resistanceV);
    PIEchangeDisplayText(dis, currentCIR * 1000);
    PIEchangeDisplayText(dropR, dropRV);
    PIEchangeDisplayText(dropG, dropGV);
    PIEchangeDisplayText(dropB, dropBV);

}