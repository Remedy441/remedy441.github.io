var material
var iray=[];
var rray=[];
var frray=[];
var lensCurve;
var lens;
var status = true;
var axes;
var h=100;
var w=7;//20;
var roc = 2200/w;//w*4.5;
var f=roc/2;
var lmaterial;
var ldmaterial;
var tt=0;
var point=[];
var Fo;
var R;
var P;
var Fn;
var Rn;
var margin;
var fs = 0;
var height;
var si = 2;
var ri = 1;
var textGeo,
height = 0,
size = 8,
hover = 30,
curveSegments = 0,//4,
bevelThickness = 0,//2,
bevelSize = 0,//1.5,
bevelSegments = 0,//3,
bevelEnabled = false,//true,
font = undefined;
/******************* End of Interaction functions ***********************/

/******************* GUI control objects code ***********************/
var PosX;           /* X Position Slider Label */

var Xdefault;       /* X Position Slider Default Value */

var Xmin;

var Xmax;           /* X Position Slider Maximum Value */

var Xstep;          /* X Position Slider Step */


/*
 * This function handles the X position slider change
 * <p>
 * Updates the myBall position variable.
 * Effect is felt immediately.
 * <p>
 * @param newValue       New Value of the slider
 */

function handleX(newValue)
{
   w = newValue;
   roc = 2200/w;
   f=roc/2;
  
   
lens = new THREE.Shape();

lens.moveTo(-2*w,h);
lens.quadraticCurveTo(3,0,-2*w,-h);
lens.lineTo(2*w,-h);
lens.quadraticCurveTo(-3,0,2*w,h);
lens.lineTo(-2*w,h);


var options = {
  amount: 10,
  bevelThickness: 2,
  bevelSize: 1,
  bevelSegments: 3,
  bevelEnabled: true,
  curveSegments: 12,
  steps: 1
};
   PIEscene.remove(lensCurve);
var lensgeometry = new THREE.ExtrudeGeometry(lens, options);
lensCurve = new THREE.Mesh(lensgeometry,lensmaterial);
PIEaddElement(lensCurve);
lensCurve.position.z -= 5;
point[1].position.set(-1*f,0,0);
point[2].position.set(-2*f,0,0);
point[3].position.set(f,0,0);
point[4].position.set(2*f,0,0);
if(fs==1){
Fo.position.x = point[1].position.x+5;
R.position.x = point[2].position.x+5;
Fn.position.x = point[3].position.x+5;
Rn.position.x = point[4].position.x+5;
}
PIErender();

 
   status = true; 
   
}

function initialiseControlVariables()
{
    /* Labels */
    PosX="Lens Thickness";                  /* X Position Slider Label */
    //i_vel = "incident ray speed";
    //r_vel = "refracted ray speed";
    Xdefault=7;        /* X Position Slider Default Value */
    //i_default=si;
    //r_default=ri;
    /* Slider Limits */
    Xmin=6;   /* X Position Slider Minimum Value */
    Xmax=20;  /* X Position Slider Maximum Value */
    
    //imin=rmin=0;
    //imax=rmax=10;
    /* Slider Steps */
    Xstep=1;                 /* X Position Slider Step */
   // step = 0.1;
    }


function initialiseControls()
{
    initialiseControlVariables();
    /* Create Input Panel */
    PIEaddInputSlider(PosX, Xdefault, handleX, Xmin, Xmax, Xstep);
  
  
    /* Create Display Panel */
    PIEaddDisplayText(PosX, Xdefault);

}


/******************* End of GUI control objects code ***********************/

/******************* Load Experiment objects code ***********************/

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Refraction at a concave lens help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows a concave lens with refraction of rays</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to one slider.</p>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>width&nbsp;&nbsp;:&nbsp;Controls the width of the lens.</li>";
    helpContent = helpContent + "</ul>";
   
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage,the parallel beam of light is incidented on the lens and the image is formed at the focus after refraction</p>";
    helpContent = helpContent + "<p>The right hand panel now shows the value experiment variables during animation.</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>width&nbsp;&nbsp;:&nbsp;Shows the width of the lens.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Refraction at a concave lens experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows a concave lens with refraction of rays.</p>";
    infoContent = infoContent + "<h3>Refraction</h3>";
    infoContent = infoContent + "<p>Refraction is the change in direction of wave propagation due to a change in its transmission medium</p>";
    infoContent = infoContent + "<h3>Focal Length</h3>";
    infoContent = infoContent + "<p>The focal length of an optical system is a measure of how strongly the system converges or diverges light. </p>";
    infoContent = infoContent + "<h3>Pole</h3>";
    infoContent = infoContent + "<p>The point where all the incident day pass undeviated</p>";
     infoContent = infoContent + "<h3>Radius of Curvature</h3>";
    infoContent = infoContent + "<p>Radius of the sphere from which a side of a lens is taken from</p>";
    infoContent = infoContent + "<h3>Refraction through concave lens</h3>";
    infoContent = infoContent + "<p>Any incident ray traveling parallel to the principal axis of a diverging lens will refract through the lens and travel through the focal point on the opposite side of the lens.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene()
{
 status = true;
 h=100;
 w=7;

}

function initialiseOtherVariables()
{
   roc = 2200/w;
   f=roc/2;
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
function loadExperimentElements()
{

    PIEsetExperimentTitle("Refraction at a concave lens");
    PIEsetDeveloperName("Reshabh Sharma");
    PIEhideControlElement();

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();

    /* initialise Other Variables */
    initialiseOtherVariables();

yellowmaterial = new THREE.MeshBasicMaterial({
  wireframe: false,
  color : 0xffff00//ffd700//
});
var loader = new THREE.FontLoader();

for(var i=0;i<5;i++){
	point[i] = new THREE.Mesh(new THREE.SphereGeometry(3,32,32),yellowmaterial);
	PIEaddElement(point[i]);
	}
point[0].position.set(0,0,0);
console.log(point[0]);
PIErenderer.setClearColor(0xFDF6D5);//8EE8F8);
axes = new THREE.AxisHelper(200);
//PIEaddElement(axes);
 
material = new THREE.MeshBasicMaterial({
  wireframe: false,
  color : 0x000000//ffd700//
});

lmaterial = new THREE.LineBasicMaterial({ color:0x0000ff });
ldmaterial = new THREE.LineDashedMaterial({ color:0x0000ff , linewidth: 1, scale: 1, dashSize: 3, gapSize: 3,});
lensmaterial = new THREE.MeshBasicMaterial({
	color:0x8EE8F8//d3d3d3
	});  
   
lens = new THREE.Shape();

lens.moveTo(-2*w,h);
lens.quadraticCurveTo(3,0,-2*w,-h);
lens.lineTo(2*w,-h);
lens.quadraticCurveTo(-3,0,2*w,h);
lens.lineTo(-2*w,h);

var options = {
  amount: 10,
  bevelThickness: 2,
  bevelSize: 1,
  bevelSegments: 3,
  bevelEnabled: true,
  curveSegments: 12,
  steps: 1
};
   PIEscene.remove(lensCurve);
var lensgeometry = new THREE.ExtrudeGeometry(lens, options);

lensCurve = new THREE.Mesh(lensgeometry,lensmaterial);
PIEaddElement(lensCurve);

var xaxis = new THREE.Geometry();
xaxis.vertices.push(new THREE.Vector3(-500, 0, 0)); 
xaxis.vertices.push(new THREE.Vector3(500, 0, 0)); 
xaxis = new THREE.Line(xaxis, material);
PIEaddElement(xaxis);

document.getElementById('stop').addEventListener("click",function() {
	resetExperiment();
	
	});

point[1].position.set(-1*f,0,0);
point[2].position.set(-2*f,0,0);
point[3].position.set(f,0,0);
point[4].position.set(2*f,0,0);



PIEadjustCamera(70,50,650);
PIEturnCamera(50,0,0);//30,100,0);

loader.load('hb.typeface.json',
function ( f ) { 

textGeo = new THREE.TextGeometry( "F", {
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
Fo = new THREE.Mesh( textGeo, material );		

textGeo = new THREE.TextGeometry( "P", {
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
P = new THREE.Mesh( textGeo, material );

		
textGeo = new THREE.TextGeometry( "R", {
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
R = new THREE.Mesh( textGeo, material );

Fn = Fo.clone();
Rn = R.clone();

PIEaddElement(Fo);
PIEaddElement(P);
PIEaddElement(R);
PIEaddElement(Fn);
PIEaddElement(Rn);

Fo.position.x = point[1].position.x;
R.position.x = point[2].position.x;
Fn.position.x = point[3].position.x;
Rn.position.x = point[4].position.x;
Fo.position.y = -15;
R.position.y = -15;
Fn.position.y = -15;
Rn.position.y = -15;
P.position.y = -15;
fs = 1;
}, 
function ( xhr ) { console.log( (xhr.loaded / xhr.total * 100) + '% loaded' ); }, 
function ( xhr ) { console.log( 'An error happened' ); }
 );

 
    
    /* Instantiate experiment controls */
    initialiseControls();

    /* Reset all positions */
    resetExperiment();

   // PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
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
function resetExperiment()
{
    /* initialise Other Variables */
    initialiseOtherVariables();
	tt=0;
	a=0;
	rm=1;
	z=0;
	w = 7;
   roc = 2200/w;
   f=roc/2;
	   
lens = new THREE.Shape();

lens.moveTo(-2*w,h);
lens.quadraticCurveTo(3,0,-2*w,-h);
lens.lineTo(2*w,-h);
lens.quadraticCurveTo(-3,0,2*w,h);
lens.lineTo(-2*w,h);


var options = {
  amount: 10,
  bevelThickness: 2,
  bevelSize: 1,
  bevelSegments: 3,
  bevelEnabled: true,
  curveSegments: 12,
  steps: 1
};
   PIEscene.remove(lensCurve);
var lensgeometry = new THREE.ExtrudeGeometry(lens, options);

lensCurve = new THREE.Mesh(lensgeometry,lensmaterial);
PIEaddElement(lensCurve);
lensCurve.position.z -= 5;
point[1].position.set(-1*f,0,0);
point[2].position.set(-2*f,0,0);
point[3].position.set(f,0,0);
point[4].position.set(2*f,0,0);
if(fs==1){
Fo.position.x = point[1].position.x+5;
R.position.x = point[2].position.x+5;
Fn.position.x = point[3].position.x+5;
Rn.position.x = point[4].position.x+5;
}
	for(var i=0;i<5;i++){
	PIEscene.remove(rray[i]);
	PIEscene.remove(frray[i]);
	PIEscene.remove(iray[i]);
}}

/******************* End of Reset Experiment code ***********************/

/******************* Update (animation changes) code ***********************/
var bb=0;
var a=0; 
var aa=0;
var z=0;
function updateExperimentElements(t, dt)
{
	if(status){
    roc = 2200/w;
    f=roc/2;
    if(-200+tt > 0){
		tt=0;
		a=1;
		aa += 0;
			}    
   // console.log(a);


for(var i=0;i<5;i++){
//if(tt==0&&a==0)PIEscene.remove(iray[i]);
if(a==0){
	PIEscene.remove(iray[i]);
var geometry = new THREE.Geometry(); 
geometry.vertices.push(new THREE.Vector3(-200,h-(i+1)*2*h/6+aa, 0)); 
geometry.vertices.push(new THREE.Vector3(-200+tt,h-(i+1)*2*h/6+aa, 0));
if(-200+tt>-200){
geometry.vertices.push(new THREE.Vector3(-200+tt-10,h-(i+1)*2*h/6+aa, 0));
geometry.vertices.push(new THREE.Vector3(-200+tt-13,h-(i+1)*2*h/6+aa+3, 0));
geometry.vertices.push(new THREE.Vector3(-200+tt-10,h-(i+1)*2*h/6+aa, 0));
geometry.vertices.push(new THREE.Vector3(-200+tt-13,h-(i+1)*2*h/6+aa-3, 0));
//geometry.vertices.push(new THREE.Vector3(-200+tt-15,h-(i+1)*2*h/6+aa+5, 0));
}
iray[i] = new THREE.Line(geometry, lmaterial);  
PIEaddElement(iray[i]);
}}
point[1].position.set(-1*f,0,0);
point[2].position.set(-2*f,0,0);
point[3].position.set(f,0,0);
point[4].position.set(2*f,0,0);
if(fs==1){
Fo.position.x = point[1].position.x;
R.position.x = point[2].position.x;
Fn.position.x = point[3].position.x;
Rn.position.x = point[4].position.x;
}
/*

lens = new THREE.SplineCurve([
  new THREE.Vector2(0,h),
  new THREE.Vector2(0-w/2,h-2*h/10),
  new THREE.Vector2(-w,0),
  new THREE.Vector2(0-w/2,-h+2*h/10),
  new THREE.Vector2(0,-h),
  new THREE.Vector2(0+w/2,-h+2*h/10),
  new THREE.Vector2(w,0),
  new THREE.Vector2(0+w/2,h-2*h/10),
  new THREE.Vector2(0,h),
]);
if(tt==0) {PIEscene.remove(lensCurve);
var lensPath = new THREE.Path( lens.getPoints( 50 ) );
var lensGeometry = lensPath.createPointsGeometry( 50 );
lensCurve = new THREE.Line( lensGeometry, material );
PIEaddElement(lensCurve);
}
*/
   
lens = new THREE.Shape();

lens.moveTo(-2*w,h);
lens.quadraticCurveTo(3,0,-2*w,-h);
lens.lineTo(2*w,-h);
lens.quadraticCurveTo(-3,0,2*w,h);
lens.lineTo(-2*w,h);


var options = {
  amount: 10,
  bevelThickness: 2,
  bevelSize: 1,
  bevelSegments: 3,
  bevelEnabled: true,
  curveSegments: 12,
  steps: 1
};
  


if(tt==0) {PIEscene.remove(lensCurve);
var lensgeometry = new THREE.ExtrudeGeometry(lens, options);
lensCurve = new THREE.Mesh(lensgeometry,lensmaterial);
PIEaddElement(lensCurve);
lensCurve.position.z -= 15;
}
if(a==1){
for(var i=0;i<5;i++){	
PIEscene.remove(rray[i]);
var geometry = new THREE.Geometry();
height =  h-(i+1)*2*h/6;
geometry.vertices.push(new THREE.Vector3(0,height, 0)); 
geometry.vertices.push(new THREE.Vector3(z,z*height/f+height,0));//height - height*z/f, 0)); 
z += ri;
if(z<f){
PIEscene.remove(frray[i]);
var frgeometry = new THREE.Geometry();
frgeometry.vertices.push(new THREE.Vector3(0,height, 0)); 
frgeometry.vertices.push(new THREE.Vector3(-z,-z*height/f+height,0));
frgeometry.computeLineDistances();
frray[i] = new THREE.Line(frgeometry, ldmaterial);  
PIEaddElement(frray[i]);
}
/*
geometry.vertices.push(new THREE.Vector3(0,h-(i+1)*2*h/6, 0)); 
geometry.vertices.push(new THREE.Vector3(f,0, 0));
geometry.vertices.push(new THREE.Vector3(2*f,-(h-(i+1)*2*h/6), 0)); 
*/
rray[i] = new THREE.Line(geometry, lmaterial);  
PIEaddElement(rray[i]);

}}

tt += si; 


 }
 
  PIEchangeDisplayText(PosX, w);
  
 }

/******************* Update (animation changes) code ***********************/
		
/*
    PIEcreateTable("Test Table", 4, 4, true);
    var headerRow=["time", "positionX", "positionY", "Velocity"];
    PIEupdateTableRow(0, headerRow);
    PIEupdateTableCell(1, 0, 0);
    PIEupdateTableCell(1, 1, 1.5);
    PIEupdateTableCell(1, 2, 2.5);
    PIEsetRowInput(2, 8, "abcdefgh");
    PIEsetColumnInput(3, 5, "abcde");
    PIEsetCellInput(3, 2, 10, "");
}
*/
