var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */
var flr;
var magnet;
var motor;
var fan_base;
var fan_main;
var fan_main_stand;
var fan_wing;
var fan_wing1;
var fan_wing2;
var fan;
var metalCoil1;
var metalCoil2;
var cylinder1;
var cylinder2;
var line1;
var line2;
var rot;
var r;
var arrow = [];
var rarrow = [];
var ar;
var rev;
var m;
var flux;
/******************* GUI control objects code ***********************/
var rotorSpeed;
var rotorSpeedDefault; 
var rotorSpeedMin;
var rotorSpeedMax; 
var rotorSpeedStep;
function handleRotorSpeed(newValue)
{
    rot = newValue;
    r = rot * 0.8;	
    PIErender();
}
function initialiseControlVariables()
{
    rotorSpeed="rotorSpeed";
    fluxText = 'Flux passing ';
    emfText = 'Induced emf';
    rotorSpeedDefault=0.02;
    rotorSpeedMin=0;  
    rotorSpeedMax=1; 
    rotorSpeedStep=0.01; 
}
function initialiseControls()
{
    initialiseControlVariables();
    /* Create Input Panel */
    PIEaddInputSlider(rotorSpeed,rotorSpeedDefault,handleRotorSpeed, rotorSpeedMin,rotorSpeedMax, rotorSpeedStep);
    PIEaddDisplayText(rotorSpeed,rotorSpeedDefault);
    PIEaddDisplayText(fluxText,flux);
    PIEaddDisplayText(emfText,emf);
}
var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>The electric generator experiment help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows basic schematic of an electric generator with a coil </p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to one slider.</p>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>rotorSpeed &nbsp;&nbsp;:&nbsp;Controls the speed at which rotor is rotated</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, The rotor will rotate , rotating the copper coil between magnetic poles </p>";
    helpContent = helpContent + "<p>The right hand panel now shows the values of the three experiment variables during animation.</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>rotorSpeed &nbsp;&nbsp;:&nbsp;Shows the speed of rotor revolving .</li>";
     helpContent = helpContent + "<li>flux passing &nbsp;&nbsp;:&nbsp;Shows the flux passing through the coil .</li>";
     helpContent = helpContent + "<li>induced emf &nbsp;&nbsp;:&nbsp;Shows the emf induced in the coil the coil .</li>";
    
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animaion by uing the speed control buttons</p>";
     helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>The electric generator concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows basic schematic of an electric generator.</p>";
    infoContent = infoContent + "<h3>Working</h3>";
    infoContent = infoContent + "<p>When we start rotating the rotor the metallic copper coil also rotates which is placed between magnetic polesf</p>";
    infoContent = infoContent + "<p>Due to the change in magnetic field the current get induced in it  </p>";
    infoContent = infoContent + "<h3>Increase in rotor speed increases the electricity generated</h3>";
    infoContent = infoContent + "<p>When rotor speed increases fan rotates harder. </p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene()
{
    /* Initialise Scene Variables */
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
{  flux = 'NBAcos('+Math.floor(Math.abs((0*180/Math.PI)%360))+') degree';  
  emf = 'NBAsin('+Math.floor(Math.abs((0*180/Math.PI)%360))+') degree'; 
     rot = 0.02;
     r = rot * 0.8 ;
     ar = 1;
     rev = true;  
  /* Barriers */
    leftB=mySceneTLX;
    rightB=mySceneBRX;
    bottomB=mySceneBRY;
    topB=mySceneTLY;
}
function loadExperimentElements()
{
	PIEsetExperimentTitle("The electric generator");
    PIEsetDeveloperName("Reshabh Sharma");
    PIEhideControlElement();

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();

    /* initialise Other Variables */
    initialiseOtherVariables();

    
 
PIErenderer.setClearColor(0x8EE8F8);
PIEadjustCamera(200,50,150);
PIEturnCamera(0,20,0);

var shape = new THREE.Shape();
shape.moveTo(0, 0);
shape.lineTo(40, 0);
shape.lineTo(40, 75);
shape.lineTo(0,75);
shape.lineTo(0,45);
shape.quadraticCurveTo(5,50,10,45);
shape.lineTo(10,65);
shape.lineTo(30,65);
shape.lineTo(30,10);
shape.lineTo(10,10);
shape.lineTo(10,30);
shape.quadraticCurveTo(5,25,0,30);

var options = {
  amount: 10,
  bevelThickness: 2,
  bevelSize: 1,
  bevelSegments: 3,
  bevelEnabled: true,
  curveSegments: 12,
  steps: 1
};

var shapeGeo = new THREE.ExtrudeGeometry(shape, options);
var material = new THREE.MeshPhongMaterial({
  wireframe: true,
  color : 0xffffff
});
var blackMat = new THREE.MeshPhongMaterial({
  wireframe: true ,
  color : 0x000000
});
var whiteMat = new THREE.MeshBasicMaterial({
  color: 0xf2f2f2,
  side: THREE.DoubleSide
});
flr = new THREE.Mesh(new THREE.PlaneGeometry(220, 320, 22, 32), whiteMat);
flr.rotation.x -= Math.PI / 2;
flr.position.y -= 12;
PIEaddElement(flr);
magnet = new THREE.Mesh(shapeGeo, material);
PIEaddElement(magnet);
magnet.position.y -= 8;
motor = new THREE.Group();
var metalCoil = new THREE.PlaneGeometry(20,12,1);


metalCoil1 = new THREE.Mesh(metalCoil, blackMat);
metalCoil2 = new THREE.Mesh(metalCoil, blackMat);
motor.add(metalCoil1);
motor.add(metalCoil2);
metalCoil1.position.set(60,49,5);
metalCoil2.position.set(60,49,5);
metalCoil2.rotation.x += Math.PI/2;
cylinder1 = new THREE.Mesh(new THREE.CylinderGeometry(2,2,20,32),blackMat);
motor.add(cylinder1);
cylinder1.rotation.z = Math.PI/2;
cylinder1.position.set(40,49,0);
var cylinder2Geo = new THREE.CylinderGeometry(.5,.5,15,32);
cylinder2Geo.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 15/2, 0 ) );
cylinder2 = new THREE.Mesh(cylinder2Geo,material);
motor.add(cylinder2);
cylinder2.position.set(30,49,0);
PIEaddElement(motor);
motor.rotation.y -= Math.PI/2;
motor.position.set(+5,-20,-55) ;
fan = new THREE.Group();
fan_base = new THREE.Mesh(new THREE.BoxGeometry(40,40,5),material);
fan_base.position.set(0, -30, 90);
fan_base.rotation.x += Math.PI/2;
fan.add(fan_base);
fan_main = new THREE.Mesh(new THREE.CylinderGeometry(5, 5, 1, 32), material);
fan_main.position.set(0, 20, 90);
fan_main.rotation.z += Math.PI/2;
fan.add(fan_main);
fan_main_stand = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 50, 32), material);
fan_main_stand.position.set(0, -5, 90);

fan.add(fan_main_stand);
var fan_geo = new THREE.BoxGeometry(1,26,14);
fan_geo.applyMatrix( new THREE.Matrix4().makeTranslation( 0,13, 0 ) );
fan_wing = new THREE.Mesh(fan_geo,material);
fan_wing.position.set(0,20,90);
fan.add(fan_wing);
fan_wing1 = new THREE.Mesh(fan_geo,material);
fan_wing1.position.set(0,20,90);
fan_wing1.rotation.x +=2.094;
fan.add(fan_wing1);
fan_wing2 = new THREE.Mesh(fan_geo,material);
fan_wing2.position.set(0,20,90);
fan_wing2.rotation.x += 4.189;
fan.add(fan_wing2);
PIEaddElement(fan);
fan.position.y += 21;
var Lmaterialred = new THREE.LineBasicMaterial({
  color: 0xff0000
});
var Lmaterialblue = new THREE.LineBasicMaterial({
  color: 0x0000ff
});
var geometry1 = new THREE.Geometry(); 
geometry1.vertices.push(new THREE.Vector3(0, 30, 15)); 
geometry1.vertices.push(new THREE.Vector3(0, 30, 90));
line1 = new THREE.Line(geometry1,Lmaterialred);
PIEaddElement(line1);
var geometry2 = new THREE.Geometry(); 
geometry2.vertices.push(new THREE.Vector3(0, 28, 15)); 
geometry2.vertices.push(new THREE.Vector3(-2, 28, 88)); 
line2 = new THREE.Line(geometry2,Lmaterialblue);
PIEaddElement(line2);
var Amat = new THREE.MeshBasicMaterial({
  color: 0xffff00
});
var tempShape = new THREE.Shape();
tempShape.moveTo(0, 0);
tempShape.lineTo(2, 2);
tempShape.lineTo(2 * 1.414, 0);
var arrowOptions = {
  amount: 1,
  bevelThickness: 2,
  bevelSize: 1,
  bevelSegments: 3,
  bevelEnabled: false,
  curveSegments: 12,
  steps: 1
};

var tempShape = new THREE.ExtrudeGeometry(tempShape, arrowOptions);
for (var i = 0; i < 6; i++) {
  arrow[i] = new THREE.Mesh(tempShape, Amat);
  PIEaddElement(arrow[i]);
  arrow[i].rotation.y += Math.PI / 2;
  arrow[i].rotation.x = 6;
  arrow[i].position.set(0, 30, 18);
}
for (var i = 0; i < 6; i++) {
  rarrow[i] = new THREE.Mesh(tempShape, Amat);
  PIEaddElement(rarrow[i]);
  rarrow[i].rotation.y += Math.PI / 2;
  rarrow[i].rotation.x = 9;

  rarrow[i].position.set(1000, 1000, 1000);
}

var N = document.createElement('div');
N.style.position = 'absolute';
N.style.zIndex = 0;
N.style.fontSize = '40px';
N.style.top = '07%';
N.style.left = '70%';       
N.innerHTML = "N";
document.body.appendChild(N);

var S = document.createElement('div');
S.style.position = 'absolute';
S.style.zIndex = 0; 
S.style.fontSize = '40px';
S.style.top = '49%';
S.style.left = '70%';    
S.innerHTML = "S";
document.body.appendChild(S);

m = new THREE.Mesh(new THREE.PlaneGeometry(20,10,1),material);
m.scale.set(1.5,1.5,1.5);
PIEaddElement(m);
m.position.y += 50;
m.position.x += 50;
m.position.z -= 44;
    
var lmaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(0, 0, 0));
geometry.vertices.push(new THREE.Vector3(0, 80, 0));
geometry.vertices.push(new THREE.Vector3(0, 83, -3));
geometry.vertices.push(new THREE.Vector3(0, 80, 0));
geometry.vertices.push(new THREE.Vector3(0, 83, 3));
geometry.vertices.push(new THREE.Vector3(0, 80, 0));
geometry.vertices.push(new THREE.Vector3(0, 150, 0));
var line = new THREE.Line(geometry, lmaterial);
//PIEaddElement(line);
line.position.set(-100,0,0);
var lin=[];
var ll = new THREE.Group();
for(var i=0;i<6;i++){
    lin[i] = line.clone();
    lin[i].position.z -= (i+1)*9;
    ll.add(lin[i]);
}
PIEaddElement(ll);
ll.rotation.y -= Math.PI/2;
ll.position.z -= 20;
ll.position.y -= 65;
ll.position.x -= 41;

    /* Instantiate experiment controls */
    initialiseControls();

    /* Reset all positions */
    resetExperiment();

   // PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}

function resetExperiment()
{
    /* initialise Other Variables */
    initialiseOtherVariables();
}

function updateExperimentElements(t, dt)
{
 rev = !rev;
  arrow[0].position.z += ar;
  if (arrow[0].position.z - 10 > 18)
    arrow[1].position.z = arrow[0].position.z - 10;
  if (arrow[1].position.z - 10 > 18)
    arrow[2].position.z = arrow[1].position.z - 10;
  if (arrow[2].position.z - 10 > 18)
    arrow[3].position.z = arrow[2].position.z - 10;
  if (arrow[3].position.z - 10 > 18)
    arrow[4].position.z = arrow[3].position.z - 10;
  if (arrow[4].position.z - 10 > 18)
    arrow[5].position.z = arrow[4].position.z - 10;
  if (arrow[0].position.z > 90 && rev) {
    for (var i = 0; i < 6; i++) {
      arrow[i].position.set(0, 30, 18);
      rarrow[i].position.set(-2, 28, 88);
    }
    rev = !rev;
  }
  rarrow[0].position.z -= ar;
  if (rarrow[0].position.z + 10 < 88)
    rarrow[1].position.z = rarrow[0].position.z + 10;
  if (rarrow[1].position.z + 10 < 88)
    rarrow[2].position.z = rarrow[1].position.z + 10;
  if (rarrow[2].position.z + 10 < 88)
    rarrow[3].position.z = rarrow[2].position.z + 10;
  if (rarrow[3].position.z + 10 < 88)
    rarrow[4].position.z = rarrow[3].position.z + 10;
  if (rarrow[4].position.z + 10 < 88)
    rarrow[5].position.z = rarrow[4].position.z + 10;
  
metalCoil1.rotation.x += rot;
metalCoil2.rotation.x += rot;
cylinder1.rotation.x += rot;
cylinder2.rotation.x += rot;
fan_wing2.rotation.x -= r;
fan_wing1.rotation.x -= r;
fan_wing.rotation.x -= r;
//m.rotation.x += rot;
  m.rotation.x -= rot;
//m.rotation.z += rot;
    /* Finally Update the Display Panel with new values */
     flux = 'NBAcos('+Math.floor(Math.abs((m.rotation.x*180/Math.PI)%360))+') degree'; 
     emf = 'NBAsin('+Math.floor(Math.abs((m.rotation.x*180/Math.PI)%360))+') degree'; 
    PIEchangeDisplayText(rotorSpeed,rot);
     PIEchangeDisplayText(fluxText,flux);
     PIEchangeDisplayText(emfText,emf);
}
