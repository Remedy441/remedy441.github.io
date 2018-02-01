var mySceneTLX; /* Top Left corner X coordinate */
var mySceneTLY; /* Top Left corner Y coordinate */
var mySceneBRX; /* Bottom Right corner X coordinate */
var mySceneBRY; /* Bottom Right corner Y coordinate */
var mySceneW; /* Scene Width */
var mySceneH; /* Scene Height */
var myCenterX; /* Scene Center X coordinate */
var myCenterY; /* Scene Center Y coordinate */
var ambLight;
var tw;
var th;
var w;
var swh;
var sw;
var move;
var am;
var max;
var arrow = [];
var bulbCurve;
var Lmaterial;
var offmaterial;
var torch1;
var torch2;
var swh;
var splineObject;
var wire2;
var battery;
var battery1;
var bulb;
var bulbCurve;
var ref1;
var ref2;
var yy;
var status = "on";
var projector;
var mouse = {
    x: 0,
    y: 0
};
var INTERSECTED;


var textGeo,
    height = 0,
    size = 10,
    hover = 30,
    curveSegments = 0, //4,
    bevelThickness = 0, //2,
    bevelSize = 0, //1.5,
    bevelSegments = 0, //3,
    bevelEnabled = false, //true,
    font = undefined;
/******************* Interaction functions ***********************/

/**
 * This function implements custom dragging of the ball.
 * <p>
 * It ensures that the ball is not dragged beyond the permissible boundaries.
 * In other applications you can move more than one element as well.
 * <p>
 * @param element    Pointer to ball object
 * @param newpos     New 3D position (THREE.Vector3)
 

function switchDrag(element,newpos)
{
    
    if(newpos.y > 8) yy = 8 ;
    else  if(newpos.y < 0) yy = 0 ;
    else yy = newpos.y;
   swh.position.set(swh.position.x,yy,swh.position.z);
    PIErender();
}
*/
/******************* End of Interaction functions ***********************/

/******************* Load Experiment objects code ***********************/

var helpContent;

function initialiseHelp() {
    helpContent = "";
    helpContent = helpContent + "<h2>A Electric flashlight help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shwos a A Electric flashlight .</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, The circuit is open</p>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Switch&nbsp;&nbsp;:&nbsp;Controls the Switch on or off by sliding it up or down.</li>";

    helpContent = helpContent + "</ul>";


    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animaion by uing the speed control buttons</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;

function initialiseInfo() {
    infoContent = "";
    infoContent = infoContent + "<h2>A Electric flashlight concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shwows a A Electric flashlight.</p>";
    infoContent = infoContent + "<h3>open and closed circuits </h3>";
    infoContent = infoContent + "<p>When the circuit is closed current flow through it</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene() {
    /* Initialise Scene Variables */
    mySceneTLX = 0.0;
    mySceneTLY = 3.0;
    mySceneBRX = 4.0;
    mySceneBRY = 0.0;
    mySceneW = (mySceneBRX - mySceneTLX);
    mySceneH = (mySceneTLY - mySceneBRY);
    myCenterX = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY = (mySceneTLY + mySceneBRY) / 2.0;
    tw = 60;
    th = 120;
    w = 5;
    //status = "off";
}

function initialiseOtherVariables() {
    /* Initialise variables */
    move = 0.8;
    am = 0;
   // status = "on";

}

/**
 * This function creates the scene of the experiment.
 * It is called by the library during document load. 
 * It is recommended that you do not initialise any variables globally.
 * It is recommended that this function create all the elements first.
 * It should then call a reset function to initialise values.
 * This will allow a reset exepriment functionality to be implemented.
 * <p>
 * It is recommended that the developer first draw a sketch of the experiment on a piece of paper.
 * The sketch should specify the size and initial position of all the elements that comprise the experiment.
 * <p>
 * Once the sketch is ready, the developer should instantiate the elements at the intial location.
 * <p>
 * The (x,y) position of the camera would be set to the center of area of interest.
 * The z position of the camera would be such that the field of vision would cover the height.
 * The aspect ratio of the camera whould cover the width.
 * <p>
 * Two lights would be suitably positioned to light the area of interest.
 * <p>
 * The developer can position the camera and lights if he so chooses.
 * <p>
 * The camera would adjust and cover a wider and taller area depending on the dimensions of the display.
 * hence the background (if any) shoudl extend beyond the area of interest.
 * <p>
 * Finally the developer should call the function PIEsetAreaOfInterest(tlx, tly, brx, bry).
 * The parameters are the top left corner and bottom right corner coordinates.
 * The X axis goes from lef to right of te display and the y axis goes from bottom to up.
 * The area of interst should be wide and tall enough to cover all potential movements.
 * <p>
 * The developer should have a fairly good idea of the controls forthe experiment.
 * Once the scene is setup and is visible, the developer can include the controls and
 * the callback functions needed to update the experiment parameters.
 * The PIE library provides a set of functions to implement common controls.
 * <p>
 * The developer should code and assign proper event handlers to the elements (to control animation).
 */
function loadExperimentElements() {
    var bbmaterial;
    /*
var loader = new THREE.TextureLoader(); 
loader.load('bulb.jpeg',function ( texture ) { 
	  bbmaterial = new THREE.MeshBasicMaterial( { map: texture } ); });
	  */
    PIEsetExperimentTitle("A Electric flashlight ");
    PIEsetDeveloperName("Reshabh Sharma");
    PIEhideControlElement();

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();

    /* initialise Other Variables */
    initialiseOtherVariables();

    var loader = new THREE.FontLoader();
    ambLight = new THREE.AmbientLight(0xffd700);
  //  PIEaddElement(ambLight);

    var material = new THREE.MeshBasicMaterial({
        wireframe: false,
        color: 0xffd700 //
    });
    var bmaterial = new THREE.MeshPhongMaterial({
        wireframe: false,
        color: "red",
        shininess: 500
    });
    var bluematerial = new THREE.MeshBasicMaterial({
        wireframe: false,
        color: 0xffffff, // #DE8A29

    });
    var batmaterial = new THREE.MeshBasicMaterial({
        wireframe: false,
        color: 0xDE8A29,

    });
    var blackmaterial = new THREE.MeshBasicMaterial({
        wireframe: false,
        color: 0x000000, //#939393 

    });
    var graymaterial = new THREE.MeshBasicMaterial({
        wireframe: false,
        color: 0xd3d3d3
    });
    var bulbmaterial = new THREE.MeshBasicMaterial({
        wireframe: false,
        color: "white",
        transparent: true,
        opacity: 0.5
    });
    var m = new THREE.Group();
    var x = 0;
    var y = 0;
    var torchBody = new THREE.Shape();
    torchBody.moveTo(x, y);
    torchBody.lineTo(x, th);
    torchBody.lineTo(x - tw / 2, th + tw / 2);
    torchBody.lineTo(x - tw / 2, th + tw / 2 + tw * 2 / 3);
    torchBody.lineTo(x + w - tw / 4, th + tw / 2 + tw * 2 / 3);
    torchBody.lineTo(x + w - tw / 4, th + tw / 2 + tw * 2 / 3 - w);
    torchBody.lineTo(x - tw / 2 + w, th + tw / 2 + tw * 2 / 3 - w);
    torchBody.lineTo(x - tw / 2 + w, th + tw / 2);
    torchBody.lineTo(w, th);
    torchBody.lineTo(w, w);
    torchBody.lineTo(tw - w, w);
    torchBody.lineTo(tw - w, 60);
    torchBody.lineTo(tw - w + w / 3, 60);
    torchBody.lineTo(tw - w + w / 3, 50);
    torchBody.lineTo(tw, 50);
    torchBody.lineTo(tw, y);
    torchBody.lineTo(x, y);
    var options = {
        amount: 1,
        bevelThickness: 1,
        bevelSize: 1,
        bevelSegments: 1,
        bevelEnabled: false,
        curveSegments: 0,
        steps: 1
    };
    var torchGeo1 = new THREE.ExtrudeGeometry(torchBody, options);
    torch1 = new THREE.Mesh(torchGeo1, bmaterial);
    m.add(torch1);
    var torchBody2 = new THREE.Shape();
    torchBody2.moveTo(tw - w + tw / 4, th + tw / 2 + tw * 2 / 3);
    torchBody2.lineTo(tw + tw / 2, th + tw / 2 + tw * 2 / 3);
    torchBody2.lineTo(tw + tw / 2, th + tw / 2);
    torchBody2.lineTo(tw, th);
    torchBody2.lineTo(tw, 80);
    torchBody2.lineTo(tw - w + w / 3, 80);
    torchBody2.lineTo(tw - w + w / 3, 70);
    torchBody2.lineTo(tw - w, 70);
    torchBody2.lineTo(tw - w, th);
    torchBody2.lineTo(tw + tw / 2 - w, th + tw / 2);
    torchBody2.lineTo(tw + tw / 2 - w, th + tw / 2 + tw * 2 / 3 - w);
    torchBody2.lineTo(tw - w + tw / 4, th + tw / 2 + tw * 2 / 3 - w);
    torchBody2.lineTo(tw - w + tw / 4, th + tw / 2 + tw * 2 / 3);
    var torchGeo2 = new THREE.ExtrudeGeometry(torchBody2, options);
    torch2 = new THREE.Mesh(torchGeo2, bmaterial);
    m.add(torch2);

    swh = new THREE.Group();
    sw = new THREE.Mesh(new THREE.BoxGeometry(20, 5, 5), material);
    sw.rotation.z += Math.PI / 2;
    sw.position.set(tw - w + w / 3 + 5 / 2 + 1, 50 + 20 / 2 + 1, 0);
    sw.position.y = 61;
    PIEaddElement(sw);
    Lmaterial = new THREE.LineBasicMaterial({
        color: 0xffffff
    });
    offmaterial = new THREE.LineBasicMaterial({
        color: 0xffffff
    }); //#ffdf32 
    var geometry1 = new THREE.Geometry();
    geometry1.vertices.push(new THREE.Vector3(tw - w + w / 3 + 5 / 2 - 10, 50 + 20 / 2 + 1 + 20, 0));
    geometry1.vertices.push(new THREE.Vector3(tw - w + w / 3 + 5 / 2 - 5, 50 + 20 / 2 + 1 + 20, 0));
    geometry1.vertices.push(new THREE.Vector3(tw - w + w / 3 + 5 / 2 - 5, 50 + 20 / 2 + 1 - 10, 0));
    geometry1.vertices.push(new THREE.Vector3(tw - w + w / 3 + 5 / 2 - 10, 50 + 20 / 2 + 1 - 10, 0));
    var swire = new THREE.Line(geometry1, Lmaterial);
    swh.add(swire);

    PIEaddElement(swh);
    //PIEdragElement(swh);
    //PIEsetDrag(swh, switchDrag);
    var swing = tw / 10;
    var lswing = 1.5;
    var curve = new THREE.SplineCurve([
        new THREE.Vector2(tw / 2, th / 10 + w),
        new THREE.Vector2(tw / 2 + swing, th / 10 + w - lswing),
        new THREE.Vector2(tw / 2 - swing, th / 10 + w - 2 * lswing),
        new THREE.Vector2(tw / 2 + 2 * swing, th / 10 + w - 3 * lswing),
        new THREE.Vector2(tw / 2 - 2 * swing, th / 10 + w - 4 * lswing),
        new THREE.Vector2(tw / 2 + 3 * swing, th / 10 + w - 5 * lswing),
        new THREE.Vector2(tw / 2 - 3 * swing, th / 10 + w - 6 * lswing),
        new THREE.Vector2(tw / 2 + 3 * swing, th / 10 + w - 7 * lswing),
        new THREE.Vector2(tw / 2 - 3 * swing, th / 10 + w - 7.5 * lswing),
        new THREE.Vector2(tw - w + w / 3 + 5 / 2 - 10, w + 3),
        new THREE.Vector2(tw - w + w / 3 + 5 / 2 - 10, w + 13),
        new THREE.Vector2(tw - w + w / 3 + 5 / 2 - 10, w + 43),
        new THREE.Vector2(tw - w + w / 3 + 5 / 2 - 10, 60)

    ]);
   
    document.getElementById('stop').addEventListener("click", function() {
         initialiseOtherVariables();
PIErenderer.setClearColor(0x444444);//140E00);
   bulbCurve.material.color.setStyle("white");
   bulbCurve.material.transparent = true;
   Lmaterial.color = {r:255,b:255,g:255};
   offmaterial.color = {r:255,b:255,g:255};
   for(var i=0;i<6;i++)
    arrow[i].position.set(660, 1300, 0);
    swh.position.y = 0;	
   sw.position.y = 60;	  
        
      status = "off";
        resetExperiment();
       
        document.getElementById('stop').style.display = "none";
        document.getElementById('start').style.display = "inline";
     PIErender();
    });

    document.getElementById('start').addEventListener("click", function() {

        status = "on";
        document.getElementById('stop').style.display = "inline";
        document.getElementById('start').style.display = "none";
        PIErender();

    });

    var path = new THREE.Path(curve.getPoints(50));
    var geometry = path.createPointsGeometry(50);
    splineObject = new THREE.Line(geometry, Lmaterial);
    m.add(splineObject);
    var geometry2 = new THREE.Geometry();
    geometry2.vertices.push(new THREE.Vector3(tw - w + w / 3 + 5 / 2 - 10, 88, 0));
    geometry2.vertices.push(new THREE.Vector3(tw - w + w / 3 + 5 / 2 - 10, th + w * 2, 0));
    geometry2.vertices.push(new THREE.Vector3(tw - w + w / 3 + 5 / 2 - 25, th + w * 2, 0));
    wire2 = new THREE.Line(geometry2, Lmaterial);
    m.add(wire2);

    battery = new THREE.Group();
    var batteryBot = new THREE.Mesh(new THREE.BoxGeometry(30, 40, 10), blackmaterial);
    var batteryHead = new THREE.Mesh(new THREE.BoxGeometry(30, 15, 10), batmaterial);
    batteryHead.position.y += batteryBot.position.y + 20 + 1;
    var batteryTip = new THREE.Mesh(new THREE.BoxGeometry(8, 2, 10), graymaterial);
    batteryTip.position.y += batteryHead.position.y + 15 / 2 + 1;
    battery.add(batteryBot);
    battery.add(batteryHead);
    battery.add(batteryTip);
    PIEaddElement(battery);
    battery.position.set(tw / 2, th / 10 + w + 20 + 1, 0);

    battery1 = battery.clone();
    PIEaddElement(battery1)
    battery1.position.set(tw / 2, th / 10 + w + 20 + 1 + 55 / 2 + 20 + 4, 0);

    bulb = new THREE.Group();
    var bulbTip = new THREE.Mesh(new THREE.BoxGeometry(8, 4, 10), batmaterial);
    var bulbBot = new THREE.Mesh(new THREE.BoxGeometry(16, 20, 10), graymaterial);
    bulbBot.position.y += 12;
    bulb.add(bulbTip);
    bulb.add(bulbBot);
    PIEaddElement(bulb);
    bulb.position.set(tw / 2, th + 4, 0);
    var bx = tw / 2 - 8;
    var by = th + 4 + 23;
    bulbCurve = new THREE.Mesh(new THREE.SphereGeometry(16, 32, 32), bbmaterial); //bulbmaterial);
    m.add(bulbCurve);
    bulbCurve.position.set(bx + 20 / 2 - 2, by + 30 - 15, 0);

    var reflector = new THREE.Group();
    var ref1 = new THREE.SplineCurve([
        new THREE.Vector2(bx, by),
        new THREE.Vector2((bx - x + w - tw / 4), (th + tw / 2 + tw * 2 / 3 - w + by) / 2 - 15),
        new THREE.Vector2(x + w - tw / 4, th + tw / 2 + tw * 2 / 3 - w),
        new THREE.Vector2(x + w - tw / 4 + tw / 4, th + tw / 2 + tw * 2 / 3 - w),
        new THREE.Vector2(x + w - tw / 4 + tw / 4 + tw / 2, th + tw / 2 + tw * 2 / 3 - w)

    ]);
    var refPath1 = new THREE.Path(ref1.getPoints(50));
    var ref1Geometry = refPath1.createPointsGeometry(50);
    ref1 = new THREE.Line(ref1Geometry, offmaterial);
    ref2 = ref1.clone();
    ref2.rotation.y += Math.PI;
    ref2.position.x += 60;
    m.add(ref1);
    m.add(ref2);
    var Amat = new THREE.MeshBasicMaterial({
        color: 0xffff00
    });
    var tempShape = new THREE.Shape();
    tempShape.moveTo(0, 0);
    tempShape.lineTo(5, 8); //(5,5);
    tempShape.lineTo(10, 0); //(5 *  1.4142135623731, 0);
    var arrowOptions = {
        amount: 1,
        bevelThickness: 0,
        bevelSize: 1,
        bevelSegments: 3,
        bevelEnabled: false,
        curveSegments: 12,
        steps: 1
    };

    var tempShape = new THREE.ExtrudeGeometry(tempShape, arrowOptions);
    for (var i = 0; i < 6; i++) {
        arrow[i] = new THREE.Mesh(new THREE.SphereGeometry(2, 32, 32) /*tempShape*/ , Amat);
        PIEaddElement(arrow[i]);
        arrow[i].rotation.x += Math.PI / 2;
        arrow[i].rotation.x = 6;
        arrow[i].position.set(60, 1300, 0);
    }

    var plus1 = document.createElement('div');
    plus1.style.position = 'absolute';
    plus1.style.left = '49.5%';
    plus1.style.top = '43%';
    plus1.style.fontSize = '21px';

    plus1.style.zIndex = 0;
    plus1.innerHTML = "+";
    document.body.appendChild(plus1);

    var minus1 = document.createElement('div');
    minus1.style.position = 'absolute';
    minus1.style.zIndex = 0;
    minus1.style.left = '49%';
    minus1.style.top = '55%';
    minus1.style.fontSize = '47px';

    minus1.style.color = 'white';
    minus1.innerHTML = "-";
    document.body.appendChild(minus1);
    var plus2 = document.createElement('div');
    plus2.style.position = 'absolute';
    plus2.style.left = '49.4%';
    plus2.style.top = '62%';
    plus2.style.fontSize = '23px';
    plus2.style.zIndex = 0;
    plus2.innerHTML = "+";
    document.body.appendChild(plus2);

    var minus2 = document.createElement('div');
    minus2.style.position = 'absolute';
    minus2.style.zIndex = 0;
    minus2.style.color = 'white';
    minus2.style.left = '49%';
    minus2.style.top = '75%';
    minus2.style.fontSize = '47px';
    minus2.innerHTML = "-";
    document.body.appendChild(minus2);
    max = swh.position.y + 8;
    projector = new THREE.Projector();


    window.addEventListener('mousedown', onMouseMove, false);
    loader.load('hb.typeface.json',
        function(f) {

            textGeo = new THREE.TextGeometry(".", {
                font: f,
                size: size,
                height: height,
                curveSegments: curveSegments,
                bevelThickness: bevelThickness,
                bevelSize: bevelSize,
                bevelEnabled: bevelEnabled,
                material: 0,
                extrudeMaterial: 1
            });
            textGeo.computeBoundingBox();
            textGeo.computeVertexNormals();
            Fo = new THREE.Mesh(textGeo, material);
            PIEaddElement(Fo);


            //fs = 1;
        },
        function(xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function(xhr) {
            console.log('An error happened');
        }
    );

    PIEaddElement(m);
    PIEadjustCamera(30, 50, 500);
    PIEturnCamera(
        30,
        100,
        0
    );

    /* Instantiate experiment controls */
    //  initialiseControls();

    /* Reset all positions */
    resetExperiment();

    //  PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}

/******************* End of Load Experiment objects code ***********************/

/******************* Reset Experiment code ***********************/

/**
 * This function resets the position of all experiment elements to their default values.
 * <p>
 * This is called during initial document load.
 * This is also be called by the system provided reset button.
 * <p>
 * Apart from the position, this should also reset all variables which can be controlled by the user.
 * This function will also clear any output variables/graphs
 */
function onMouseMove(event) {
    // the following line would stop any other event handler from firing
    // (such as the mouse's TrackballControls)
    // event.preventDefault();

    // update the mouse variable
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
update();
}

function resetExperiment() {
    
    /* initialise Other Variables */
    initialiseOtherVariables();
    PIErenderer.setClearColor(0x444444); //140E00);
    bulbCurve.material.color.setStyle("white");
    bulbCurve.material.transparent = true;
    Lmaterial.color = {
        r: 255,
        b: 255,
        g: 255
    };
    offmaterial.color = {
        r: 255,
        b: 255,
        g: 255
    };
   
    for (var i = 0; i < 6; i++)
        arrow[i].position.set(660, 1300, 0);
    swh.position.y = 0;
    sw.position.y = 60;
  status = "off";
   
}

function update() {
    // find intersections
  
  
    // create a Ray with origin at the mouse position
    //   and direction into the scene (camera direction)
    var vector = new THREE.Vector3(mouse.x, mouse.y, 1);
    projector.unprojectVector(vector, PIEcamera);
    var ray = new THREE.Raycaster(PIEcamera.position, vector.sub(PIEcamera.position).normalize());

    // create an array containing all objects in the scene with which the ray intersects
    var intersects = ray.intersectObjects([sw]);

    // INTERSECTED = the object in the scene currently closest to the camera 
    //		and intersected by the Ray projected from the mouse position 	

    // if there is one (or more) intersections
    if (intersects.length > 0) {
   
            if (status == "on") {
               
                document.getElementById('stop').style.display = "none";
                document.getElementById('start').style.display = "inline";
                 status = "off";
              ///  alert("bye");

            } else {
                document.getElementById('start').click();
                status = "on";
              //  PIErender();
                document.getElementById('stop').style.display = "inline";
                document.getElementById('start').style.display = "none";
                //alert("hi");
           

            }
    }
   
}


function updateExperimentElements(t, dt) {
    if (status == "on") {
       
        //document.getElementById ('start').style.display = "inline";
        if (move == 0) {
            am = 0.9;

        }
        if (arrow[0].position.y > th + w * 2) {
            arrow[0].position.set(tw - w + w / 3 + 5 / 2 - 13 - 1 + 4, w + 13 + 20, 0);
            arrow[1].position.set(tw - w + w / 3 + 5 / 2 - 13 - 1 + 4, w + 13 + 15, 0);
            arrow[2].position.set(tw - w + w / 3 + 5 / 2 - 13 - 1 + 4, w + 13 + 10, 0);
            arrow[3].position.set(tw - w + w / 3 + 5 / 2 - 13 - 1 + 4, w + 13 + 05, 0);
            arrow[4].position.set(tw - w + w / 3 + 5 / 2 - 13 - 1 + 4, w + 13 + 0, 0);
            arrow[5].position.set(tw - w + w / 3 + 5 / 2 - 13 - 1 + 4, w + 13 - 5, 0);
        }
        arrow[0].position.y += am;
        if (arrow[0].position.y > 60 && arrow[0].position.y < 65) arrow[0].position.set(tw - w + w / 3 + 5 / 2 - 13 - 1 + 4, 85 + 20, 0);
        if (swh.position.y > max) move = 0;


        arrow[1].position.y = arrow[0].position.y - 5;
        arrow[2].position.y = arrow[1].position.y - 5;
        arrow[3].position.y = arrow[2].position.y - 5;
        arrow[4].position.y = arrow[3].position.y - 5;
        arrow[5].position.y = arrow[4].position.y - 5;
        if (move == 0) {
            PIErenderer.setClearColor(0x444444); //0xffff7f);
            bulbCurve.material.color.setStyle("yellow");
            bulbCurve.material.transparent = false;
            Lmaterial.color = {
                r: 255,
                b: 255,
                g: 255
            };
            offmaterial.color = {
                r: 255,
                b: 0,
                g: 255
            };
        }
        swh.position.y += move;
        sw.position.y += move;
   
    } else
        resetExperiment();
    
 console.log(status);
}

/******************* Update (animation changes) code ***********************/