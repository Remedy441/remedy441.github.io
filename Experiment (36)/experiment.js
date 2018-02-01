//MY_PROJECT
//Heating effect of electricity
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

var line;
var line1;
var line1a;
var line2;
var line3;
var line3a;
var gate;
var gateC;
var dir;
var aro;
var aro1;

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
var reR;
var reB;
var reG;

var GS;
var GSF;
var dis;

var currentCIR;
var resistanceCIR;

var BatteryValue;
var counter = 0;

var wax;
var ice;
var disappear;
var BulbH;
var Bulb;
var BulbB;
var waxL;
var iceL;
function handleV(newValue) {
    voltageV = newValue;
    BatteryValue.innerHTML = voltageV + "V";
    PIErender();
}
function initialiseControlVariables()
{
    voltage = "BatteryVoltage(V)"; //2
    voltageV = 5;
    Vstep = 1;

    resistanceC = "Resistance(ohm)"; //25
    resistanceV = 60.0;
    resStep = 1;

    dis = "CRT-Current(mA)";
    currentCIR = 1.0;
    resistanceCIR = 0.0;
    
    waxL = "Wax";
    iceL = "Ice";
}
var flag = 0;
function EXPice() {
    flag = 0;
    wax.scale.set(0,0,0);
    ice.scale.set(1, 1, 1);
    waxMelt.scale.set(0, 0, 0);
    iceMelt.scale.set(1, 1, 1);
    PIErender();
    PIEchangeInputCheckbox(waxL, false);
    PIEchangeInputCheckbox(iceL, true);
}
function EXPwax() {
    flag = 1;
    wax.scale.set(1, 1, 1);
    ice.scale.set(0, 0, 0);
    waxMelt.scale.set(1, 1, 1);
    iceMelt.scale.set(0, 0, 0);
    PIErender();
    PIEchangeInputCheckbox(iceL, false);
    PIEchangeInputCheckbox(waxL, true);
}
function initialiseControls()
{
    initialiseControlVariables();
    PIEaddInputSlider(voltage,voltageV, handleV, 0.0, 10.0, Vstep);
    PIEaddInputCheckbox(iceL, true, EXPice);
    PIEaddInputCheckbox(waxL, false, EXPwax);
    
    PIEaddDisplayText(voltage, voltageV);
    PIEaddDisplayText(resistanceC, resistanceV);
    PIEaddDisplayText(dis, currentCIR);

}

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Heating effect of electricity experiment help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows a electric circuit which demonstrates Heating effect of electricity . Ice slab and wax melts when contacted with the bulb as bulb will become hot due to electric current in the circuit.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to ONE slider and TWO Checkboxes.</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>BatteryVoltage(V)&nbsp;&nbsp;:&nbsp;Controls voltage of applied battery .</li>";
    helpContent = helpContent + "<li>Wax &nbsp;&nbsp;:&nbsp;Allows user to experiment with wax in place of ice slab..</li>";
    helpContent = helpContent + "<li>Ice &nbsp;&nbsp;:&nbsp;Allows user to experiment with Ice in place of wax slab..</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the circuit is now complete and therefore Ice/Wax will melt due to contact with bulb , this shows that electricity show Heating effect.</p>";
    helpContent = helpContent + "<p>The right hand panel now shows the values of current in the circuit , external resistance and battery voltage.</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Heating effect of electricity experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows a circuit consisting of resistance , switch , battery and a bulb , when switch is closed current starts to flow in the circuit and bulb flows and melts the ICE/WAX.</p>";
    infoContent = infoContent + "<h3>Heating effect of electricity.</h3>";
    infoContent = infoContent + "<p>When the circuit is turned ON that is switch is closed then as current in the circuit starts to flow , Bulb glows with intensity depending upon the input voltage as soon as the bulb glows it melts the ICE/WAX due to heating of bulb .<br><br> Also the heat , bulb produces is directly proportional to the input voltage square and inversely proportional to the circuit resistance given by the formula Q(heat) = V*V / R = I*I*R   </p>";
    infoContent = infoContent + "<h3>Heat generated is directly proportional to the current in the circuit .</h3>";
    infoContent = infoContent + "<p>The rate at which ICE/WAX melts is directly proportional to the heat generated by the bulb .</p>";
    infoContent = infoContent + "<h3>Heat generated in bulb</h3>";
    infoContent = infoContent + "<p>The formula for calculation of heat produced by bulb is given as - Q(heat) = V*V / R = I*I*R.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene()
{
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
    wallThickness = 0.20;
}
var iceMelt;
var waxMelt;
function loadExperimentElements()
{
    var geo;
    var geometry;
    var material;
    

    PIEsetExperimentTitle("Heating effect of electricity");
    PIEsetDeveloperName("Siddharth Acharya");
    PIEhideControlElement();

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();
    
    initialiseScene();

    initialiseOtherVariables();


    line = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 1.0), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line.position.set(0.5 , 1.5  + 0.25, 0.0);
    line.castShadow = true;
    PIEaddElement(line);

    line1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.43), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line1.position.set(3.5, 1.22 + 0.25, 0.0);
    line1.castShadow = true;
    PIEaddElement(line1);

    line1a = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.28), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line1a.position.set(3.5, 1.87 + 0.25, 0.0);
    line1a.castShadow = true;
    PIEaddElement(line1a);

    line2 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 3.0), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line2.position.set(2, 1 + 0.25, 0.0);
    line2.castShadow = true;
    line2.rotateZ(Math.PI / 2);
    PIEaddElement(line2);

    line3a = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 3), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line3a.position.set(2, 2 + 0.25, 0.0);
    line3a.rotateZ(Math.PI / 2);
    PIEaddElement(line3a);
    line3a.castShadow = false;
    //line3a.receiveShadow = false;
    
    var battery;
    geometry = new THREE.CylinderGeometry(0.15, 0.15, 0.20);
    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
    battery = new THREE.Mesh(geometry, material);
    battery.position.set(0.5, 1.6 + 0.25, 0.1);
    PIEaddElement(battery);

    var battery1;
    geometry = new THREE.CylinderGeometry(0.15, 0.15, 0.30);
    material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    battery1 = new THREE.Mesh(geometry, material);
    battery1.position.set(0.5, 1.35 + 0.25, 0.1);
    PIEaddElement(battery1);
    

    var batteryT;
    geometry = new THREE.BoxGeometry(0.1,0.05, 0);
    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
    batteryT = new THREE.Mesh(geometry, material);
    batteryT.position.set(0.5, 1.72 + 0.25, 0.1);
    PIEaddElement(batteryT);

    var resistor;
    geometry = new THREE.BoxGeometry(0.50, 0.25, 0.25);
    material = new THREE.MeshLambertMaterial({ color: 0xbfbfbf });
    resistor = new THREE.Mesh(geometry, material);
    resistor.position.set(2, 1.01 + 1.25, 0.1);
    resistor.rotateX(Math.PI / 10);
    resistor.rotateY(Math.PI / 20);
    PIEaddElement(resistor);
    resistor.castShadow = false;

    var res;
    res = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.3), new THREE.MeshLambertMaterial({ color: 0xDAA520 }));
    res.position.set(2, 1.19 + 1.25, 0.1);
    res.castShadow = true;
    res.rotateZ(Math.PI / 2);
    //res.rotateX(Math.PI / 8);
    res.rotateY(Math.PI / 2);
    PIEaddElement(res);
    
    var L;
    L = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.04), new THREE.MeshLambertMaterial({ color: 0x000033 }));
    L.position.set(2, 1.18 + 1.25, 0.18);
    PIEaddElement(L);
    L.castShadow = false;

    var L1;
    L1 = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.04), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    L1.position.set(2.08, 1.18 + 1.25, 0.18);
    PIEaddElement(L1);
    L1.castShadow = false;

    var L2;
    L2 = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.04), new THREE.MeshLambertMaterial({ color: 0x008000 }));
    L2.position.set(1.92, 1.18 + 1.25, 0.18);
    PIEaddElement(L2);
    L2.castShadow = false;

    var L3;
    L3 = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.08), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    L3.position.set(1.86, 1.16 + 1.25, 0.18);
    PIEaddElement(L3);
    L3.castShadow = false;
    
    var L4;
    L4 = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.08), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    L4.position.set(2.14, 1.16 + 1.25, 0.18);
    PIEaddElement(L4);
    L4.castShadow = false;

    geometry = new THREE.BoxGeometry(0.40, 0.12, 0.25);
    material = new THREE.MeshLambertMaterial({ color: 0x303030 });
    switchB = new THREE.Mesh(geometry, material);
    switchB.position.set(3.48, 1.62 + 0.25, 0.1);
    switchB.rotateX(Math.PI / 6);
    //PIEaddElement(switchB);
    switchB.castShadow = false;

    var bb9 = "font-family: Monospace; color: #cc8800; margin: 0px; overflow: hidden;background-color: #cc8800;font-size: 23px;  transform: rotate(-27deg);";
    SwitchText = document.createElement("p"); SwitchText.style = bb9; document.body.appendChild(SwitchText);
    SwitchText.innerHTML = "<h6>S</h6>";
    SwitchText.style.position = "absolute";
    SwitchText.style.left = 75 +1.6 + '%';
    SwitchText.style.top = 49 -17 + '%';
    SwitchText.addEventListener("click", PIEstartAnimation);

    var bb10 = "font-family: Monospace; color: #cc8800; margin: 0px; overflow: hidden;background-color: #cc8800;font-size: 21px;  transform: rotate(0deg);";
    SwitchText1 = document.createElement("p"); SwitchText1.style = bb10; document.body.appendChild(SwitchText1);
    SwitchText1.innerHTML = "<h6>S</h6>";
    SwitchText1.style.position = "absolute";
    SwitchText1.style.left = 73.7 +1.6 + '%';
    SwitchText1.style.top = 49 -17 + '%';
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
    REStext.style.top =  63 - 9 -34 + '%';
    

    var REStext1 = document.createElement("span"); REStext1.style = bb; document.body.appendChild(REStext1);
    REStext1.innerHTML = "<h1>+</h1>";
    REStext1.style.position = "absolute";
    REStext1.style.left = 25 -1.5 + '%';
    REStext1.style.top = 41 - 9 + '%';
    

    var REStext2 = document.createElement("span"); REStext2.style = bb2; document.body.appendChild(REStext2);
    REStext2.innerHTML = "<h1>-</h1>";
    REStext2.style.position = "absolute";
    REStext2.style.left = 25 -1.5 + '%';
    REStext2.style.top = 54 - 9 + '%';

    BatteryValue = document.createElement("span"); BatteryValue.style = bb3; document.body.appendChild(BatteryValue);
    BatteryValue.innerHTML = voltageV + "V";
    BatteryValue.style.position = "absolute";
    BatteryValue.style.left = 17 + '%'
    BatteryValue.style.top = 50 - 9 + '%';
    //BatteryValue.style.visibility = "hidden";

   
    PIEstopButton.addEventListener("click", PIEresetExperiment);

    gate = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.03, 0.40), new THREE.MeshLambertMaterial({ color: 0xDAA520 }));
    gate.position.set(3.625, 1.64 - 0.25, 0.0);
    gate.rotateZ(Math.PI / 4);
    //PIEaddElement(gate);
    gate.castShadow = false;
   
    gateC = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.03, 0.30), new THREE.MeshLambertMaterial({ color: 0xDAA520 }));
    gateC.position.set(3.5, 1.64 - 0.25, 0.0);
    //PIEaddElement(gateC);
    gateC.castShadow = false;
    gateC.scale.set(0, 0, 0);

    dir = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.2), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    dir.position.set(0.6, 2 + 0.25, 0.0);
    dir.rotateZ(Math.PI / 2);
    PIEaddElement(dir);
    dir.castShadow = false;

    aro = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.05), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    aro.position.set(0.7, 2.01 + 0.25, 0.0);
    aro.rotateZ(Math.PI / 4);
    PIEaddElement(aro);
    aro.castShadow = false;

    aro1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.05), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    aro1.position.set(0.7, 1.99 + 0.25, 0.0);
    aro1.rotateZ(-Math.PI / 4);
    PIEaddElement(aro1);
    aro1.castShadow = false;

    f = 0;
    c = 0;
    u = 0;

    iceMelt = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.95), new THREE.MeshBasicMaterial({ color: 0x99C7DE }));
    iceMelt.position.set(2, 0.05, 0.0);
    iceMelt.castShadow = true;
    iceMelt.rotateZ(Math.PI / 2);
    PIEaddElement(iceMelt);

    waxMelt = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.2), new THREE.MeshLambertMaterial({ color: 0xDCCB6E }));
    waxMelt.position.set(2, 0.04, 0.0);
    waxMelt.castShadow = true;
    waxMelt.rotateZ(Math.PI / 2);
    PIEaddElement(waxMelt);

    bottom = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 3.5), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    bottom.position.set(2, 0.02, 0.0);
    bottom.castShadow = true;
    bottom.rotateZ(Math.PI / 2);
    PIEaddElement(bottom);

    geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.72)
    material = new THREE.MeshLambertMaterial({ color: 0xDCCB6E });
    wax = new THREE.Mesh(geometry, material);
    wax.position.set(2, 1.01 - 0.65, -0.15);
    //wax.rotateX(Math.PI / 15);
    //wax.rotateY(Math.PI / 30);
    PIEaddElement(wax);
    wax.castShadow = false;
    wax.receiveShadow = false;

    geometry = new THREE.BoxGeometry(1, 0.73, 0.45);
    material = new THREE.MeshLambertMaterial({ color: 0x99C7DE });
    ice = new THREE.Mesh(geometry, material);
    ice.position.set(2, 1 - 0.6, -0.31);
    ice.rotateX(Math.PI / 15);
    //ice.rotateY(Math.PI / 30);
    PIEaddElement(ice);
    ice.castShadow = false;


    geometry = new THREE.CircleGeometry(0.2, 32);
    disappear = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0xfcf0b6, opacity: 0.5 })); // 0xfcf0b6
    disappear.position.set(2, 0.98, -0.001);
    PIEaddElement(disappear);
    disappear.castShadow = false;
    disappear.receiveShadow = false;
    disappear.scale.set(1,1,1);

    geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.06);
    material = new THREE.MeshLambertMaterial({ color: 0x111111 });
    BulbH = new THREE.Mesh(geometry, material);
    BulbH.position.set(2, 1 + 0.25, 0.0); 
    PIEaddElement(BulbH);
    BulbH.castShadow = false;

    geo = new THREE.Shape();
    geo.moveTo(2.1,1.25);
    geo.quadraticCurveTo(2.2,0.98,2.2,0.98);
    geo.quadraticCurveTo(2,0.98-0.5,1.8,0.98);
    geo.quadraticCurveTo(2 - 0.1, 1.25, 2 - 0.1, 1.25);
    geometry = new THREE.ShapeGeometry(geo);
    Bulb = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0xa6a6a6 }));
    PIEaddElement(Bulb);

    geo = new THREE.Shape();
    geo.moveTo(2 +0.1/2, 1 + 0.25);
    geo.quadraticCurveTo(2, 1.45, 2 - 0.1/2, 1 + 0.25);
    geometry = new THREE.ShapeGeometry(geo);
    BulbB = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0x222222 }));
    PIEaddElement(BulbB);

    geometry = new THREE.BoxGeometry(mySceneW * 2, mySceneH *2, wallThickness);
    material = new THREE.MeshLambertMaterial({ color: 0xFDF6D5 });
    myBack = new THREE.Mesh(geometry, material);
    myBack.position.set(myCenterX, myCenterY, -1.5 * wallThickness);
    PIEaddElement(myBack);
    myBack.receiveShadow = false;

    initialiseControls();
    PIEstopButton.addEventListener("click", PIEresetExperiment);

    resetExperiment();

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}
function resetExperiment()
{
    EXPice();
    initialiseOtherVariables();
    dir.scale.set(0, 0, 0);
    aro.scale.set(0, 0, 0);
    aro1.scale.set(0, 0, 0);
    gate.scale.set(1, 1, 1);
    gateC.scale.set(0, 0, 0);

    wax.scale.set(0, 0, 0);
    ice.scale.set(1, 1, 1);

    dx = dy = dz = 0;
    disappear.scale.set(1, 1, 1);
    Bulb.material.color.setHex(0xa6a6a6);
    iceMelt.scale.set(1, 1, 1);
    waxMelt.scale.set(0, 0, 0);

    voltageV = 0;
    resistanceV = 60.0;
    flag = 0;

    BatteryValue.innerHTML = voltageV + "V";
    PIEchangeInputSlider(voltage, voltageV);

    PIEchangeInputCheckbox(waxL, false);
    PIEchangeInputCheckbox(iceL, true);

    if (dir.position.x == 3.5) {
        dir.rotateZ(Math.PI / 2);
        aro.rotateZ(- Math.PI / 2);
        aro1.rotateZ(Math.PI / 2);
        f = 0;
    }
    else if (dir.position.y == 1 + 0.25) {
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

    dir.position.set(0.6, 2 + 0.25, 0.0);
    aro.position.set(0.7, 2.01 + 0.25, 0.0);
    aro1.position.set(0.7, 1.99 + 0.25, 0.0);

    SwitchText.style.visibility = "visible";
    SwitchText1.style.visibility = "hidden";
    
}
var dx = 0;
var dy = 0;
var dz = 0;
function updateExperimentElements(t, dt)
{
    
    SwitchText1.style.visibility = "visible";
    SwitchText.style.visibility = "hidden";
    

    BatteryValue.innerHTML = voltageV + "V";
    if (voltageV >= 1) {
        dir.scale.set(1, 1, 1);
        aro.scale.set(1, 1, 1);
        aro1.scale.set(1, 1, 1);
        gate.scale.set(0, 0, 0);
        gateC.scale.set(1, 1, 1);

        dx += voltageV / 2000;
        dy += voltageV / 2000;
        dz += voltageV / 2000;
        disappear.scale.set(1 + dx * 2, 1 + dy * 2, 1 + dz * 2);
        if (flag == 0) {
            iceMelt.scale.set(1 + dx, 1 + dy, 1 + dz);
        }
        else if (flag == 1) {
            waxMelt.scale.set(1 + dx / 1.5, 1 + dx / 1.5, 1 + dx / 1.5);
        }
        if (1 + dx * 2 >= 5.2 ) {
            PIEresetExperiment();
        }
        
        resistanceCIR = resistanceV;
        currentCIR = voltageV / resistanceCIR;

        if (currentCIR * 1000 < 85 && currentCIR * 1000 > 0)
            Bulb.material.color.setHex(0xffff1a);
        else if (currentCIR * 1000 > 85)
            Bulb.material.color.setHex(0xffff00);
        else
            Bulb.material.color.setHex(0xa6a6a6);

        if (aro.position.x < 3.5 && c != 1) {
            aro.position.set(aro.position.x + 0.02, aro.position.y, aro.position.z);
            aro1.position.set(aro1.position.x + 0.02, aro1.position.y, aro1.position.z);
            dir.position.set(dir.position.x + 0.02, dir.position.y, dir.position.z);
        }
        else if (aro.position.x >= 3.5 && f != 1) {

            aro.position.set(3.5 + 0.01, 1.8 + 0.25, 0);
            aro.rotateZ(Math.PI / 2);
            aro1.position.set(3.5 - 0.01, 1.8 + 0.25, 0);
            aro1.rotateZ(-Math.PI / 2);
            dir.position.set(3.5, 1.9 + 0.25, 0);
            dir.rotateZ(Math.PI / 2);
            f = 1;
        }
        else if (f == 1 && aro.position.y > 1 + 0.25 && u == 0) {
            aro.position.set(aro.position.x, aro.position.y - 0.02, aro.position.z);
            aro1.position.set(aro1.position.x, aro1.position.y - 0.02, aro1.position.z);
            dir.position.set(dir.position.x, dir.position.y - 0.02, dir.position.z);
        }
        else if (aro.position.y <= 1 + 0.25 && c != 1) {
            aro.position.set(3.3, 1 - 0.01 + 0.25, 0);
            aro.rotateZ(-Math.PI / 2);
            aro1.position.set(3.3, 1 + 0.01 + 0.25, 0);
            aro1.rotateZ(+Math.PI / 2);
            dir.position.set(3.4, 1 + 0.25, 0);
            dir.rotateZ(Math.PI / 2);
            c = 1;
        }
        else if (c == 1 && aro.position.x > 0.5) {
            aro.position.set(aro.position.x - 0.02, aro.position.y, aro.position.z);
            aro1.position.set(aro1.position.x - 0.02, aro1.position.y, aro1.position.z);
            dir.position.set(dir.position.x - 0.02, dir.position.y, dir.position.z);
        }
        else if (aro.position.x <= 0.5 && u != 1) {
            aro.position.set(0.5 - 0.01, 1.2 + 0.25, 0);
            aro.rotateZ(-Math.PI / 2);
            aro1.position.set(0.5 + 0.01, 1.2 + 0.25, 0);
            aro1.rotateZ(+Math.PI / 2);
            dir.position.set(0.5, 1.1 + 0.25, 0);
            dir.rotateZ(Math.PI / 2);
            u = 1;
        }
        else if (u == 1) {
            aro.position.set(aro.position.x, aro.position.y + 0.02, aro.position.z);
            aro1.position.set(aro1.position.x, aro1.position.y + 0.02, aro1.position.z);
            dir.position.set(dir.position.x, dir.position.y + 0.02, dir.position.z);
            if (aro.position.y >= 2 + 0.25) {
                dir.position.set(0.6, 2 + 0.25, 0.0);
                dir.rotateZ(Math.PI / 2)
                aro.position.set(0.7, 2.01 + 0.25, 0.0);
                aro.rotateZ(-Math.PI / 2)
                aro1.position.set(0.7, 1.99 + 0.25, 0.0);
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
        resistanceCIR = resistanceV;
        currentCIR = 0;
    }
    if (counter == 0) {
        counter++;
        PIEresetExperiment();
    }
    PIEchangeDisplayText(voltage, voltageV);
    PIEchangeDisplayText(resistanceC, resistanceV);
    PIEchangeDisplayText(dis, currentCIR * 1000);
}