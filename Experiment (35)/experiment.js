//MY_PROJECT
//A Simple electroscope
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
var rodL;
var ballL;
var polyL;
var woolL;

var bottle;
var bottleR;
var bottleR1;
var bottleH;
var bottleT;
var cloth_Woolen;
var cloth_Poly;
var Ball;
var Rod;
var GoldL1;
var GoldR1;
var GoldL;
var GoldR;
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

    rodL = "Rod";
    ballL = "Ball";
    polyL = "Polythene";
    woolL = "WoolenCloth";
}
var flag = 0;

var flagC = 0;
var flagO = 0;
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
function EXProd() {
    flagO = 0;
    Rod.scale.set(1, 1, 1);
    Ball.scale.set(0, 0, 0);
    PIErender();
    PIEchangeInputCheckbox(ballL, false);
    PIEchangeInputCheckbox(rodL, true);
}
function EXPball() {
    flagO = 1;
    Ball.scale.set(1, 1, 1);
    Rod.scale.set(0, 0, 0);
    PIErender();
    PIEchangeInputCheckbox(rodL, false);
    PIEchangeInputCheckbox(ballL, true);
}
function EXPpoly() {
    flagC = 0;
    cloth_Poly.scale.set(0.8, 0.8, 0.8);
    cloth_Woolen.scale.set(0, 0, 0);
    PIErender();
    PIEchangeInputCheckbox(woolL, false);
    PIEchangeInputCheckbox(polyL, true);
}
function EXPwool() {
    flagC = 1;
    cloth_Woolen.scale.set(0.9, 0.9, 0.9);
    cloth_Poly.scale.set(0, 0, 0);
    PIErender();
    PIEchangeInputCheckbox(polyL, false);
    PIEchangeInputCheckbox(woolL, true);
}
function initialiseControls()
{
    initialiseControlVariables();
    //PIEaddInputSlider(voltage,voltageV, handleV, 0.0, 10.0, Vstep);
    //PIEaddInputCheckbox(iceL, true, EXPice);
    //PIEaddInputCheckbox(waxL, false, EXPwax);

    PIEaddInputCheckbox(rodL, true, EXProd);
    PIEaddInputCheckbox(ballL, false, EXPball);
    PIEaddInputCheckbox(polyL, true, EXPpoly);
    PIEaddInputCheckbox(woolL, false, EXPwool);
    
    //PIEaddDisplayText(voltage, voltageV);
    //PIEaddDisplayText(resistanceC, resistanceV);
    //PIEaddDisplayText(dis, currentCIR);

}

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>A Simple electroscope experiment help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The Experiment Shows rubbing of 2 different kinds of object with 2 different cloth material available from which user can choose from which are - Polythene , Woolen Cloth and objects are Rod , Ball</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to 4 Checkboxes.</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Rod (V)&nbsp;&nbsp;:&nbsp;SELECTS ROD as the object to be rubbed.</li>";
    helpContent = helpContent + "<li>Ball &nbsp;&nbsp;:&nbsp;SELECTS Ball as the object to be rubbed.</li>";
    helpContent = helpContent + "<li>Polythene &nbsp;&nbsp;:&nbsp;Allows user to select polythene as rubbing cloth.</li>";
    helpContent = helpContent + "<li>WoolenCloth &nbsp;&nbsp;:&nbsp;Allows user to select WoolenCloth as rubbing cloth.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the experiment now rubbing of object with cloth takes place and then the object is brought closer to the electroscope as the charges are developed on object gold leaves develops opposite charges and hence repell..</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>A Simple electroscope experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows a object which is rubbed through a rubbing cloth and through this both develops opposite charge on themself which when brought closer to electroscope shows repulsion between Goldleaf..</p>";
    infoContent = infoContent + "<h3>Cause of Charging</h3>";
    infoContent = infoContent + "<p>b)Ball--the polythene/woolen gets charged positively leaving negative charge on the Ball.<br> The Ball when brought close to the electroscope makes it positively charged at the top and negatively charged at the leaves.Hence the leaves seperate.</p>";
    infoContent = infoContent + "<p>a)Rod--the polythene/woolen gets charged positively leaving negative charge on the rod.<br> The rod when brought close to the electroscope makes it positively charged at the top and negatively charged at the leaves.Hence the leaves seperate.</p>";
    infoContent = infoContent + "<h3>More the charge more the repilsion between Goldleaf.</h3>";
    infoContent = infoContent + "<p>Due to Rubbing as charges are developed on cloth and object therefore if more charge is developed due to rubbing the more charge induction will take place in electroscope and the Goldleaf will deflect more.</p>";
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

var pos1;
var pos2;
var pos3;
var pos4;
var pos5;
var pos6;
var pos7;

var pos11;
var pos21;
var pos31;
var pos41;
var pos51;

var pos12;
var pos22;
var pos32;
var pos42;
var pos52;

var pos13;
var pos23;
var pos33;
function loadExperimentElements()
{
    var geo;
    var geometry;
    var material;
    

    PIEsetExperimentTitle("A Simple electroscope");
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
    //PIEaddElement(line);

    line1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.43), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line1.position.set(3.5, 1.22 + 0.25, 0.0);
    line1.castShadow = true;
    //PIEaddElement(line1);

    line1a = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.28), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line1a.position.set(3.5, 1.87 + 0.25, 0.0);
    line1a.castShadow = true;
    //PIEaddElement(line1a);

    line2 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 3.0), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line2.position.set(2, 1 + 0.25, 0.0);
    line2.castShadow = true;
    line2.rotateZ(Math.PI / 2);
    //PIEaddElement(line2);

    line3a = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 3), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line3a.position.set(2, 2 + 0.25, 0.0);
    line3a.rotateZ(Math.PI / 2);
    //PIEaddElement(line3a);
    line3a.castShadow = false;
    //line3a.receiveShadow = false;
    
    var battery;
    geometry = new THREE.CylinderGeometry(0.15, 0.15, 0.20);
    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
    battery = new THREE.Mesh(geometry, material);
    battery.position.set(0.5, 1.6 + 0.25, 0.1);
    //PIEaddElement(battery);

    var battery1;
    geometry = new THREE.CylinderGeometry(0.15, 0.15, 0.30);
    material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    battery1 = new THREE.Mesh(geometry, material);
    battery1.position.set(0.5, 1.35 + 0.25, 0.1);
    //PIEaddElement(battery1);
    

    var batteryT;
    geometry = new THREE.BoxGeometry(0.1,0.05, 0);
    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
    batteryT = new THREE.Mesh(geometry, material);
    batteryT.position.set(0.5, 1.72 + 0.25, 0.1);
    //PIEaddElement(batteryT);

    var resistor;
    geometry = new THREE.BoxGeometry(0.50, 0.25, 0.25);
    material = new THREE.MeshLambertMaterial({ color: 0xbfbfbf });
    resistor = new THREE.Mesh(geometry, material);
    resistor.position.set(2, 1.01 + 1.25, 0.1);
    resistor.rotateX(Math.PI / 10);
    resistor.rotateY(Math.PI / 20);
    //PIEaddElement(resistor);
    resistor.castShadow = false;

    var res;
    res = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.3), new THREE.MeshLambertMaterial({ color: 0xDAA520 }));
    res.position.set(2, 1.19 + 1.25, 0.1);
    res.castShadow = true;
    res.rotateZ(Math.PI / 2);
    //res.rotateX(Math.PI / 8);
    res.rotateY(Math.PI / 2);
    //PIEaddElement(res);
    
    var L;
    L = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.04), new THREE.MeshLambertMaterial({ color: 0x000033 }));
    L.position.set(2, 1.18 + 1.25, 0.18);
    //PIEaddElement(L);
    L.castShadow = false;

    var L1;
    L1 = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.04), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    L1.position.set(2.08, 1.18 + 1.25, 0.18);
    //PIEaddElement(L1);
    L1.castShadow = false;

    var L2;
    L2 = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.04), new THREE.MeshLambertMaterial({ color: 0x008000 }));
    L2.position.set(1.92, 1.18 + 1.25, 0.18);
    //PIEaddElement(L2);
    L2.castShadow = false;

    var L3;
    L3 = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.08), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    L3.position.set(1.86, 1.16 + 1.25, 0.18);
    //PIEaddElement(L3);
    L3.castShadow = false;
    
    var L4;
    L4 = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.08), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    L4.position.set(2.14, 1.16 + 1.25, 0.18);
    //PIEaddElement(L4);
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
    SwitchText.style.visibility = "hidden";

    var bb10 = "font-family: Monospace; color: #cc8800; margin: 0px; overflow: hidden;background-color: #cc8800;font-size: 21px;  transform: rotate(0deg);";
    SwitchText1 = document.createElement("p"); SwitchText1.style = bb10; document.body.appendChild(SwitchText1);
    SwitchText1.innerHTML = "<h6>S</h6>";
    SwitchText1.style.position = "absolute";
    SwitchText1.style.left = 73.7 +1.6 + '%';
    SwitchText1.style.top = 49 -17 + '%';
    SwitchText1.addEventListener("click", PIEresetExperiment);
    SwitchText1.style.visibility = "hidden";

    var bb = "font-family: Monospace ; color: #ff0000; margin: 0px; overflow: hidden;";
    var bb1 = "font-family: Monospace; color: #003300; margin: 0px; overflow: hidden; ";
    var bb2 = "font-family: Monospace; color: #000000; margin: 0px; overflow: hidden;";
    var bb3 = "font-family: Monospace; color: #000000; margin: 0px; overflow: hidden; font-size: 30px;";
    var bb4 = "font-family: Monospace; color: #00e600; margin: 0px; overflow: hidden; ; background-color: #00e600 ;border-style: inset;";
    var bb5 = "font-family: Monospace; color: #ff0000; margin: 0px; overflow: hidden; ; background-color: #ff0000 ;border-style: inset;";

    
    pos1 = document.createElement("span"); pos1.style = bb; document.body.appendChild(pos1);
    pos1.innerHTML = "<h1>+</h1>";
    pos1.style.position = "absolute";
    pos1.style.left = 25 - 4 + '%';
    pos1.style.top = 41 - 8 + '%';

    pos2 = document.createElement("span"); pos2.style = bb; document.body.appendChild(pos2);
    pos2.innerHTML = "<h1>+</h1>";
    pos2.style.position = "absolute";
    pos2.style.left = 25 - 4 + '%';
    pos2.style.top = 41 +7 + '%';

    pos3 = document.createElement("span"); pos3.style = bb; document.body.appendChild(pos3);
    pos3.innerHTML = "<h1>+</h1>";
    pos3.style.position = "absolute";
    pos3.style.left = 25 - 7 + '%';
    pos3.style.top = 41 + 20 + '%';

    pos4 = document.createElement("span"); pos4.style = bb; document.body.appendChild(pos4);
    pos4.innerHTML = "<h1>+</h1>";
    pos4.style.position = "absolute";
    pos4.style.left = 25 -17 + '%';
    pos4.style.top = 41 + 20 + '%';

    pos5 = document.createElement("span"); pos5.style = bb; document.body.appendChild(pos5);
    pos5.innerHTML = "<h1>+</h1>";
    pos5.style.position = "absolute";
    pos5.style.left = 25 - 17 + '%';
    pos5.style.top = 41 - 8 + '%';

    pos6 = document.createElement("span"); pos6.style = bb; document.body.appendChild(pos6);
    pos6.innerHTML = "<h1>+</h1>";
    pos6.style.position = "absolute";
    pos6.style.left = 25 - 12 + '%';
    pos6.style.top = 41 +8 + '%';

    pos7 = document.createElement("span"); pos7.style = bb; document.body.appendChild(pos7);
    pos7.innerHTML = "<h1>+</h1>";
    pos7.style.position = "absolute";
    pos7.style.left = 25 - 8 + '%';
    pos7.style.top = 41  + '%';

    pos11 = document.createElement("span"); pos11.style = bb1; document.body.appendChild(pos11);
    pos11.innerHTML = "<h1>-</h1>";
    pos11.style.position = "absolute";
    pos11.style.left = 49 + '%';
    pos11.style.top = 83 + '%';

    pos21 = document.createElement("span"); pos21.style = bb1; document.body.appendChild(pos21);
    pos21.innerHTML = "<h1>-</h1>";
    pos21.style.position = "absolute";
    pos21.style.left = 46 + '%';
    pos21.style.top = 84+ '%';

    pos31 = document.createElement("span"); pos31.style = bb1; document.body.appendChild(pos31);
    pos31.innerHTML = "<h1>-</h1>";
    pos31.style.position = "absolute";
    pos31.style.left = 46+ '%';
    pos31.style.top = 87 + '%';

    pos41 = document.createElement("span"); pos41.style = bb1; document.body.appendChild(pos41);
    pos41.innerHTML = "<h1>-</h1>";
    pos41.style.position = "absolute";
    pos41.style.left = 54 + '%';
    pos41.style.top = 84 + '%';

    pos51 = document.createElement("span"); pos51.style = bb1; document.body.appendChild(pos51);
    pos51.innerHTML = "<h1>-</h1>";
    pos51.style.position = "absolute";
    pos51.style.left = 54 + '%';
    pos51.style.top = 87 + '%';

    pos12 = document.createElement("span"); pos12.style = bb; document.body.appendChild(pos12);
    pos12.innerHTML = "<h1>+</h1>";
    pos12.style.position = "absolute";
    pos12.style.left = 52 + '%';
    pos12.style.top = 58 + '%';

    pos22 = document.createElement("span"); pos22.style = bb; document.body.appendChild(pos22);
    pos22.innerHTML = "<h1>+</h1>";
    pos22.style.position = "absolute";
    pos22.style.left = 49 + '%';
    pos22.style.top = 60 + '%';

    pos32 = document.createElement("span"); pos32.style = bb; document.body.appendChild(pos32);
    pos32.innerHTML = "<h1>+</h1>";
    pos32.style.position = "absolute";
    pos32.style.left = 46 + '%';
    pos32.style.top = 58 + '%';

    pos42 = document.createElement("span"); pos42.style = bb; document.body.appendChild(pos42);
    pos42.innerHTML = "<h1>+</h1>";
    pos42.style.position = "absolute";
    pos42.style.left = 48 + '%';
    pos42.style.top = 58 + '%';

    pos52 = document.createElement("span"); pos52.style = bb; document.body.appendChild(pos52);
    pos52.innerHTML = "<h1>+</h1>";
    pos52.style.position = "absolute";
    pos52.style.left = 50 + '%';
    pos52.style.top = 58 + '%';

    pos33 = document.createElement("span"); pos33.style = bb1; document.body.appendChild(pos33);
    pos33.innerHTML = "<h1>-</h1>";
    pos33.style.position = "absolute";
    pos33.style.left = 45 + '%';
    pos33.style.top = 54 + '%';

    pos23 = document.createElement("span"); pos23.style = bb1; document.body.appendChild(pos23);
    pos23.innerHTML = "<h1>-</h1>";
    pos23.style.position = "absolute";
    pos23.style.left = 43 + '%';
    pos23.style.top = 54 + '%';

    pos13 = document.createElement("span"); pos13.style = bb1; document.body.appendChild(pos13);
    pos13.innerHTML = "<h1>-</h1>";
    pos13.style.position = "absolute";
    pos13.style.left = 44 + '%';
    pos13.style.top = 51 + '%';

    var REStext = document.createElement("p"); REStext.style = bb1; document.body.appendChild(REStext);
    //REStext.innerHTML = "<h4>Resistance</h4>";
    REStext.style.position = "absolute";
    REStext.style.left =  47.5 + '%';
    REStext.style.top =  63 - 9 -34 + '%';
    
    var REStext1 = document.createElement("span"); REStext1.style = bb; document.body.appendChild(REStext1);
    //REStext1.innerHTML = "<h1>+</h1>";
    REStext1.style.position = "absolute";
    REStext1.style.left = 25 -1.5 + '%';
    REStext1.style.top = 41 - 9 + '%';
    

    var REStext2 = document.createElement("span"); REStext2.style = bb2; document.body.appendChild(REStext2);
    //REStext2.innerHTML = "<h1>-</h1>";
    REStext2.style.position = "absolute";
    REStext2.style.left = 25 -1.5 + '%';
    REStext2.style.top = 54 - 9 + '%';

    BatteryValue = document.createElement("span"); BatteryValue.style = bb3; document.body.appendChild(BatteryValue);
    //BatteryValue.innerHTML = voltageV + "V";
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
    //PIEaddElement(iceMelt);

    waxMelt = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.2), new THREE.MeshLambertMaterial({ color: 0xDCCB6E }));
    waxMelt.position.set(2, 0.04, 0.0);
    waxMelt.castShadow = true;
    waxMelt.rotateZ(Math.PI / 2);
    //PIEaddElement(waxMelt);

    bottom = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 3.5), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    bottom.position.set(2, 0.02, 0.0);
    bottom.castShadow = true;
    bottom.rotateZ(Math.PI / 2);
    //PIEaddElement(bottom);

    geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.72)
    material = new THREE.MeshLambertMaterial({ color: 0xDCCB6E });
    wax = new THREE.Mesh(geometry, material);
    wax.position.set(2, 1.01 - 0.65, -0.15);
    //wax.rotateX(Math.PI / 15);
    //wax.rotateY(Math.PI / 30);
    //PIEaddElement(wax);
    wax.castShadow = false;
    wax.receiveShadow = false;

    geometry = new THREE.BoxGeometry(1, 0.73, 0.45);
    material = new THREE.MeshLambertMaterial({ color: 0x99C7DE });
    ice = new THREE.Mesh(geometry, material);
    ice.position.set(2, 1 - 0.6, -0.31);
    ice.rotateX(Math.PI / 15);
    //ice.rotateY(Math.PI / 30);
    //PIEaddElement(ice);
    ice.castShadow = false;


    geometry = new THREE.CircleGeometry(0.2, 32);
    disappear = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0xff0000 })); // 0xfcf0b6
    disappear.position.set(2, 0.98, -0.001);
    //PIEaddElement(disappear);
    disappear.castShadow = false;
    disappear.receiveShadow = false;
    disappear.scale.set(1,1,1);

    geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.06);
    material = new THREE.MeshLambertMaterial({ color: 0x111111 });
    BulbH = new THREE.Mesh(geometry, material);
    BulbH.position.set(2, 1 + 0.25, 0.0); 
    //PIEaddElement(BulbH);
    BulbH.castShadow = false;


    //geometry = new THREE.CircleGeometry(0.15, 32);
    geometry = new THREE.SphereGeometry(0.15, 32, 32);
    Ball = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0xff0000 })); // 0xfcf0b6
    Ball.position.set(2, 1.5, -0.001);
    PIEaddElement(Ball);
    Ball.castShadow = false;
    Ball.receiveShadow = false;
    Ball.scale.set(1, 1, 1);

    Rod = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.5), new THREE.MeshLambertMaterial({ color: 0x1a0008 }));
    Rod.position.set(2, 1.5, 0.15);
    Rod.rotateZ(Math.PI / 6);
    PIEaddElement(Rod);
    Rod.castShadow = false;

    geo = new THREE.Shape();
    geo.moveTo(0.5, 1);
    geo.quadraticCurveTo(0.7, (1+2.5)/2,0.5, 2.5);
    geo.quadraticCurveTo(-0.25, 2.5 - 0.2 , -1, 2.5);
    geo.quadraticCurveTo(-0.8, 2 ,- 1, 1);
    geo.quadraticCurveTo(-0.25, 1.2,0.5, 1);
    geometry = new THREE.ShapeGeometry(geo);
    cloth_Woolen = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({ color: 0x00091a }));
    PIEaddElement(cloth_Woolen);
    cloth_Woolen.scale.set(0.9, 0.9, 0.9);

    geo = new THREE.Shape();
    geo.moveTo(0.5, 1);
    geo.quadraticCurveTo(0.7, (1 + 2.5) / 2, 0.5, 2.5);
    geo.quadraticCurveTo(-0.25, 2.5 - 0.2, -1, 2.5);
    geo.quadraticCurveTo(-0.8, 2, -1, 1);
    geo.quadraticCurveTo(-0.25, 1.2, 0.5, 1);
    geometry = new THREE.ShapeGeometry(geo);
    cloth_Poly = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({ color: 0x334d4d }));
    PIEaddElement(cloth_Poly);
    cloth_Poly.scale.set(0.8, 0.8, 0.8);
    ///f5f5ef;

    geometry = new THREE.CylinderGeometry(0.5, 0.5, 0.7,32);
    material = new THREE.MeshLambertMaterial({ color: 0xd9d9d9 });
    bottle = new THREE.Mesh(geometry, material);
    bottle.position.set(2, 0.4, -0.1);
    //bottle.rotateX(Math.PI / 15);
    //ice.rotateY(Math.PI / 30);
    PIEaddElement(bottle);
    bottle.castShadow = false;
    bottle.receiveShadow = false;

    geometry = new THREE.CylinderGeometry(0.15, 0.15, 0.20);
    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
    bottleT = new THREE.Mesh(geometry, material);
    bottleT.position.set(2,0.75, 0.1);
    PIEaddElement(bottleT);

    bottleR = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.7), new THREE.MeshLambertMaterial({ color: 0x262626 }));
    bottleR.position.set(2, 0.77, 0.15);
    bottleR.castShadow = true;
    PIEaddElement(bottleR);

    bottleR1 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.3), new THREE.MeshLambertMaterial({ color: 0x262626 }));
    bottleR1.position.set(2, 0.62, 0.38);
    bottleR1.castShadow = true;
    PIEaddElement(bottleR1);

    bottleH = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.05,32), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    bottleH.position.set(2, 1.1, 0.15);
    bottleH.castShadow = true;
    //bottleH.rotateZ(Math.PI / 2);
    PIEaddElement(bottleH);

    GoldL1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.3), new THREE.MeshLambertMaterial({ color: 0xb38f00 }));
    GoldL1.position.set(2 - 0.15, 0.62 - 0.2, 0.4);
    GoldL1.castShadow = true;
    GoldL1.rotateZ(-Math.PI / 3);
    PIEaddElement(GoldL1);

    GoldR1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.3), new THREE.MeshLambertMaterial({ color: 0xb38f00 }));
    GoldR1.position.set(2 + 0.15, 0.62 - 0.2, 0.4);
    GoldR1.castShadow = true;
    GoldR1.rotateZ(Math.PI / 3);
    PIEaddElement(GoldR1);


    GoldL = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.3), new THREE.MeshLambertMaterial({ color: 0xb38f00 }));
    GoldL.position.set(2 - 0.05, 0.64 - 0.3, 0.4);
    GoldL.castShadow = true;
    GoldL.rotateZ(-Math.PI / 15);
    PIEaddElement(GoldL);

    GoldR = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.3), new THREE.MeshLambertMaterial({ color: 0xb38f00 }));
    GoldR.position.set(2 + 0.05, 0.64 - 0.3, 0.4);
    GoldR.castShadow = true;
    GoldR.rotateZ(Math.PI / 15);
    PIEaddElement(GoldR);




    geo = new THREE.Shape();
    geo.moveTo(2.1,1.25);
    geo.quadraticCurveTo(2.2,0.98,2.2,0.98);
    geo.quadraticCurveTo(2,0.98-0.5,1.8,0.98);
    geo.quadraticCurveTo(2 - 0.1, 1.25, 2 - 0.1, 1.25);
    geometry = new THREE.ShapeGeometry(geo);
    Bulb = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0xa6a6a6 }));
    //PIEaddElement(Bulb);

    geo = new THREE.Shape();
    geo.moveTo(2 +0.1/2, 1 + 0.25);
    geo.quadraticCurveTo(2, 1.45, 2 - 0.1/2, 1 + 0.25);
    geometry = new THREE.ShapeGeometry(geo);
    BulbB = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0x222222 }));
    //PIEaddElement(BulbB);

    geometry = new THREE.BoxGeometry(mySceneW * 2, mySceneH *2, wallThickness);
    material = new THREE.MeshLambertMaterial({ color: 0xFDF6D5 });
    myBack = new THREE.Mesh(geometry, material);
    myBack.position.set(myCenterX, myCenterY,  -1.5);
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

    //electroscope
    EXPpoly();
    EXProd()
    cloth_Poly.scale.set(0.8, 0.8, 0.8);
    cloth_Woolen.scale.set(0, 0, 0);
    Rod.scale.set(1, 1, 1);
    Ball.scale.set(0, 0, 0);
    flagO = 0;
    flagC = 0;
    count = 0;
    GoldL1.scale.set(0, 0, 0);
    GoldR1.scale.set(0, 0, 0);
    Rod.position.set(2, 1.5, 0.15);
    Ball.position.set(2, 1.5, -0.001);

    pos1.style.visibility = "hidden";;
    pos2.style.visibility = "hidden";;
    pos3.style.visibility = "hidden";;
    pos4.style.visibility = "hidden";;
    pos5.style.visibility = "hidden";;
    pos6.style.visibility = "hidden";;
    pos7.style.visibility = "hidden";;

    pos11.style.visibility = "hidden";;
    pos21.style.visibility = "hidden";;
    pos31.style.visibility = "hidden";;
    pos41.style.visibility = "hidden";;
    pos51.style.visibility = "hidden";;

    pos12.style.visibility = "hidden";;
    pos22.style.visibility = "hidden";;
    pos32.style.visibility = "hidden";;
    pos42.style.visibility = "hidden";;
    pos52.style.visibility = "hidden";;

    pos13.style.visibility = "hidden";;
    pos23.style.visibility = "hidden";;
    pos33.style.visibility = "hidden";;

    GoldR.scale.set(1, 1, 1);
    GoldL.scale.set(1, 1, 1);
    GoldR1.scale.set(0, 0, 0);
    GoldL1.scale.set(0, 0, 0);

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

    //BatteryValue.innerHTML = voltageV + "V";
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

    //SwitchText.style.visibility = "visible";
    ///SwitchText1.style.visibility = "hidden";
    
}
var dx = 0;
var dy = 0;
var dz = 0;
var DY = 0.05;
var count = 0;
function updateExperimentElements(t, dt)
{
    
    //SwitchText1.style.visibility = "visible";
    //SwitchText.style.visibility = "hidden";
    
    if (flagO == 0 && Rod.position.x > -0.25) {
        Rod.position.set(Rod.position.x - 0.02, Rod.position.y, Rod.position.z);
    }
    else if (Rod.position.x <= -0.25 && count != 100) {
        count++;
        DY = -1 * DY;
        Rod.position.set(Rod.position.x + DY, Rod.position.y + DY, Rod.position.z);
    }

    if (flagO == 1 && Ball.position.x > -0.25) {
        Ball.position.set(Ball.position.x - 0.02, Ball.position.y, Ball.position.z);
    }
    else if (Ball.position.x <= -0.25 && count != 100) {
        count++;
        DY = -1 * DY;
        Ball.position.set(Ball.position.x + DY, Ball.position.y + DY, Ball.position.z);
    }
    if (count == 100) {
        Rod.position.set(2 - 0.4, 1.5, 0.15);
        Ball.position.set(2 - 0.4, 1.3, 0.15);
        GoldR1.scale.set(1, 1, 1);
        GoldL1.scale.set(1, 1, 1);
        GoldR.scale.set(0,0,0);
        GoldL.scale.set(0, 0, 0);
        pos1.style.visibility = "visible";;
        pos2.style.visibility = "visible";
        pos3.style.visibility = "visible";
        pos4.style.visibility = "visible";
        pos5.style.visibility = "visible";
        pos6.style.visibility = "visible";
        pos7.style.visibility = "visible";

        pos11.style.visibility = "visible";
        pos21.style.visibility = "visible";
        pos31.style.visibility = "visible";
        pos41.style.visibility = "visible";
        pos51.style.visibility = "visible";

        pos12.style.visibility = "visible";
        pos22.style.visibility = "visible";
        pos32.style.visibility = "visible";
        pos42.style.visibility = "visible";
        pos52.style.visibility = "visible";

        pos13.style.visibility = "visible";
        pos23.style.visibility = "visible";
        pos33.style.visibility = "visible";

    }
   // BatteryValue.innerHTML = voltageV + "V";
    if (voltageV >= 1) {
        dir.scale.set(1, 1, 1);
        aro.scale.set(1, 1, 1);
        aro1.scale.set(1, 1, 1);
        gate.scale.set(0, 0, 0);
        gateC.scale.set(1, 1, 1);

        dx += voltageV / 2000;
        dy += voltageV / 2000;
        dz += voltageV / 2000;
        //disappear.scale.set(1 + dx * 2, 1 + dy * 2, 1 + dz * 2);
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