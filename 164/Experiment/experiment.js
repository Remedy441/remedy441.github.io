/* Global Variables */

var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */

/* Track Variable */

var track;
var trackWidth;
var trackHeight;
var sky;
var ground;
var cloud;

/* Car Variables */

var car1;
var car2;
var car3;
var car4;
var car5;
var carWidth;
var carHeight;

/* Car Position Default Variables */

var carDefX;

/* Car Position Value */
var carPX1;
var carPY1;
var carPX2;
var carPY2;
var carPX3;
var carPY3;
var carPY4;
var carPY4;
var carPX5;
var carPY5;
var carPZ;

/* Car Velocity Variables */
var carV1;
var carV2;
var carV3;
var carV4;
var varV5;

/* Answer Variable */
var cans;
var wans;

/******************* GUI control objects code ***********************/




function initialiseControls()
{


    /* Create Input Panel */
    PIEaddDisplayText("Time1 ds",0);
    PIEaddDisplayText("Time2 ds",0);
    PIEaddDisplayText("Time3 ds",0);
    PIEaddDisplayText("Time4 ds",0);
    PIEaddDisplayText("Time5 ds",0);

}


/******************* End of GUI control objects code ***********************/

/******************* Load Experiment objects code ***********************/

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Which is Faster(Same Distance Test) help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The Test shows 5 cars going at different speed from one place to another.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. Press the start button to start the animation</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the cars go from one side to another at different speeds.</p>";
    helpContent = helpContent + "<p>The right hand panel shows the values of the time in deca-seconds for each car.</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Time1 ds: Time taken by car 1.</li>";
    helpContent = helpContent + "<li>Time3 ds: Time taken by car 2.</li>";
    helpContent = helpContent + "<li>Time3 ds: Time taken by car 3.</li>";
    helpContent = helpContent + "<li>Time4 ds: Time taken by car 4.</li>";
    helpContent = helpContent + "<li>Time5 ds: Time taken by car 5.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>During The animation a user can select the fastest car by clicking on it.</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animaion by uing the speed control buttons</p>";
    helpContent = helpContent + "<p>You can repeat the animation by clicking on the reset button.</p>"
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Which is Faster(Same Distance Test) info</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The Test shows 5 cars going at different speed from one place to another.</p>";
    infoContent = infoContent + "<h3>Speed: </h3>";
    infoContent = infoContent + "<p>The rate of change of motionis known as speed</p>";
    infoContent = infoContent + "<h3>Speed = Distance Travelled / Time Taken</h3>";
    infoContent = infoContent + "<p>When a number of objects are moving with different speeds, the time taken to travel a particular amount of distance is minimum for fastest object.</p>";
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
{
    /* Initialise variables */
    carWidth = 0.32;
    carHeight = 0.2;

    trackWidth = 8;
    trackHeight = 2.2;

    carDefX = 0.3;
    carPX1 = 0.3;
    carPX2 = 0.3;
    carPX3 = 0.3;
    carPX4 = 0.3;
    carPX5 = 0.3;

    carPY1 = 1.44;
    carPY2 = 1.23;
    carPY3 = 1.02;
    carPY4 = 0.81;
    carPY5 = 0.6;

    carPZ = 1;

    carV1 =  0.5*Math.random()+0.1;
    carV2 =  0.5*Math.random()+0.1;
    carV3 =  0.5*Math.random()+0.1;
    carV4 =  0.5*Math.random()+0.1;
    carV5 =  0.5*Math.random()+0.1;

}

/******************* Load Experiment objects code ***********************/

function loadExperimentElements()
{
var geometry;
var material;
var loader;
var texture;

    PIEsetExperimentTitle("Same Distance Test");
    PIEsetDeveloperName("Battula Sai Vinesh");
    PIEhideControlElement();

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();

    /* initialise Other Variables */
    initialiseOtherVariables();

    /* Create Ball and add it to scene */
    // myBox = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), new THREE.MeshLambertMaterial({color:0xededed}));
    // myBox.position.set(1, 1, 0);
    // myBox.castShadow = true;
    // myBox.receiveShadow = true;
    // PIEaddElement(myBox);

    geometry = new THREE.PlaneGeometry(carWidth,carHeight);

    car1 = createMeshTrans(geometry,"car.png");
    car1.position.y = 1.44;
    car1.position.z = 1;
    car1.position.x = 0.3;
    car1.name = "car1";

    PIEaddElement(car1);
    console.log(car1);

    car2 = createMeshTrans(geometry,"car2.png");
    car2.position.y = carPY2;
    car2.position.z = carPZ;
    car2.position.x = carPX2;
    car2.name="car2";
    PIEaddElement(car2);


    car3 = createMeshTrans(geometry,"car3.png");
    car3.position.y = carPY3;
    car3.position.z = carPZ;
    car3.position.x = carPX3;
    car3.name="car3";
    PIEaddElement(car3);


    car4 = createMeshTrans(geometry,"car4.png");
    car4.position.y = carPY4;
    car4.position.z = carPZ;
    car4.position.x = carPX4;
    car4.name="car4";
    PIEaddElement(car4);


    car5 = createMeshTrans(geometry,"car5.png");
    car5.position.y = carPY5;
    car5.position.z = carPZ;
    car5.position.x = carPX5;
    car5.name="car5";
    PIEaddElement(car5);

    geometry = new THREE.PlaneGeometry(1,0.2);
    cans = createMesh(geometry,"canswer.png");
    cans.position.set(myCenterX,2.5,1);
    PIEaddElement(cans);
    cans.visible = false;

    geometry = new THREE.PlaneGeometry(1,0.2);
    wans = createMesh(geometry,"wanswer.png");
    wans.position.set(myCenterX,2.5,1);
    PIEaddElement(wans);
    wans.visible = false;

    geometry = new THREE.PlaneBufferGeometry( trackWidth,trackHeight);
    track = createMesh(geometry,"Track.jpg");
    track.position.set(myCenterX,0.5,-4.0 );
    track.receiveShadow = true;
    PIEaddElement(track);

    geometry = new THREE.PlaneGeometry(20,10);
    material = new THREE.MeshLambertMaterial({color:0x0000aa});
    sky = new THREE.Mesh(geometry, material);
    sky.position.set(myCenterX, myCenterY,-10.0 );
    PIEaddElement(sky);

    geometry = new THREE.PlaneGeometry(12,12);
    ground = createMeshRepeat(geometry,"grasslight-big.jpg");
    ground.position.set(myCenterX,0,-6.0 );
    PIEaddElement(ground);

    geometry = new THREE.PlaneGeometry(6,2.5);
    cloud = createMeshTrans(geometry,"rc.png");
    cloud.position.set(2,2,0);
    PIEaddElement(cloud);


    /* Instantiate experiment controls */
    initialiseControls();

    /* Reset all positions */
    resetExperiment();

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    PIErender();
    // PIEstartAnimation();
    // PIEpauseAmination();
}
function createMeshRepeat(geom, imageFile) {
       var texture = new THREE.TextureLoader().load(imageFile);
       texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
       texture.repeat.set( 3, 3 );
       var mat = new THREE.MeshBasicMaterial();
       mat.map = texture;
       var mesh = new THREE.Mesh(geom, mat);
       PIErender();
       return mesh;
}
function createMesh(geom, imageFile) {
       var texture = new THREE.TextureLoader().load(imageFile);
       var mat = new THREE.MeshBasicMaterial();
       mat.map = texture;
       var mesh = new THREE.Mesh(geom, mat);PIErender();
       return mesh;
}
function createMeshTrans(geom, imageFile) {
     var texture = new THREE.TextureLoader().load(imageFile);
     var mat = new THREE.MeshBasicMaterial();
     mat.map = texture;
     mat.transparent = true;
     var mesh = new THREE.Mesh(geom, mat);
     PIErender();
     return mesh;
  }

/******************* End of Load Experiment objects code ***********************/

/******************* Reset Experiment code ***********************/

function resetExperiment()
{
    /* initialise Other Variables */
    initialiseOtherVariables();

    carPX1 = carDefX;
    carPX2 = carDefX;
    carPX3 = carDefX;
    carPx4 = carDefX;
    carPx5 = carDefX;

    car1.position.x = carPX1;
    car2.position.x = carPX2;
    car3.position.x = carPX3;
    car4.position.x = carPX4;
    car5.position.x = carPX5;

    carV1 = 0.5*Math.random()+0.1;
    carV2 = 0.5*Math.random()+0.1;
    carV3 = 0.5*Math.random()+0.1;
    carV4 = 0.5*Math.random()+0.1;
    carV5 = 0.5*Math.random()+0.1;

    cans.visible = false;
    wans.visible = false;

}

/******************* End of Reset Experiment code ***********************/

/******************* Update (animation changes) code ***********************/

function PIEmouseDown(b) {
  var a;
    b.defaultPrevented = true;
    PIEselectedDrag = null;
    PIEmouseP.x = (b.clientX / PIEcanvasW) * 2 - 1;
    PIEmouseP.y = -(b.clientY / PIEcanvasH) * 2 + 1;
    PIEmouseP.z = -1;
    PIEraycaster.setFromCamera(PIEmouseP, PIEcamera);
    a = PIEraycaster.intersectObjects(PIEscene.children);
    if (a.length > 0) {
        console.log(a[0].object.name);
        var ca;
        var max = Math.max(carV1,carV2,carV3,carV4,carV5);
        if( max == carV1){
          ca = "car1";
        }
        else if(max==carV2){
          ca = "car2";
        }
        else if(max==carV3){
          ca = "car3";
        }
        else if(max==carV4){
          ca = "car4";
        }
        else if(max==carV5){
          ca = "car5";
        }
        if(a[0].object.name == ca){
          wans.visible = false;
          cans.visible = true;
        }
        else if(a[0].object.name == "car1"||
                a[0].object.name == "car2"||
                a[0].object.name == "car3"||
                a[0].object.name == "car4"||
                a[0].object.name == "car5")
        {
          wans.visible = true;
          cans.visible = false;
        }
    }
}

function updateExperimentElements(t, dt)
{

  boundaryT = dt / 1000.0;    /* convert to seconds */

  if(carPX1 <= 3.6){
      carPX1 = carPX1 + carV1*boundaryT;
      PIEchangeDisplayText("Time1 ds", t/100);
  }
  car1.position.x = carPX1;
  if(carPX2 <= 3.6){
      carPX2 = carPX2 + carV2*boundaryT;
      PIEchangeDisplayText("Time2 ds", t/100);
  }

  car2.position.x = carPX2;
  if(carPX3 <= 3.6){
      carPX3 = carPX3 + carV3*boundaryT;
      PIEchangeDisplayText("Time3 ds", t/100);
  }
  car3.position.x = carPX3;
  if(carPX4 <= 3.6){
      carPX4 = carPX4 + carV4*boundaryT;
      PIEchangeDisplayText("Time4 ds", t/100);
  }
  car4.position.x = carPX4;
  if(carPX5 <= 3.6){
      carPX5 = carPX5 + carV5*boundaryT;
      PIEchangeDisplayText("Time5 ds", t/100);
  }
  car5.position.x = carPX5;

}




/******************* Update (animation changes) code ***********************/
