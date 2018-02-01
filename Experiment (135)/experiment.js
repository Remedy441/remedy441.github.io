var choice = 4;

var helpContent;
var rotation = 0;
var shape1,shape2,shape3,shape4;
var shade1,shade2,shade3,shade4;
var yShadow = -2; 
var set1=0,set2=0,set3=0,set4=0,cmpltd=0;
var teach = 0;
var bt1=[],bt2=[],bt3=[],bt4=[];
var vic;

var winbox;
var apprcube1,apprcube2,apprsphere;
var star1,star2,star3;
var apprValue=0;

function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Matching Shapes Experiment help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows Different shapes and their shades down below.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>You can control the Shapes by drga/drop controls</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p style = 'color: blue'> Chose the shape and join it to its shade </p>";
    helpContent = helpContent + "<h3>Initial stage</h3>";
    helpContent = helpContent + "<p> The shadow of the Object will be shown at downside of the screen </p>";
    helpContent = helpContent + "<p> You can click on next Button for next task </p>";
    helpContent = helpContent + "<p> Shadow of each object obeys the shade properties</p>";
    helpContent = helpContent + "<p> You can move the object Up,Down,Left and Right using drag and drop controls.</p>";
    helpContent = helpContent + "</p>You can chose reset button to go back to initial positions</p>";
    
    helpContent = helpContent + "<h3>Object Movements</h3>";
    helpContent = helpContent + "<p>You can move objects (right,left,up,down) based on your choice.</p>";
    
     helpContent = helpContent + "<h3>Reset Experiment</h3>";
    helpContent = helpContent + "<p>Click on reset button to reset the Experiment</p>";
    helpContent = helpContent + "<p> THANK YOU .....</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}
var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Matching Shapes Experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows a task placed att top of illusion, contains different shapes at the top.</p>";
    infoContent = infoContent + "<p>The House Objects in this Experiment are Table,Candle,Ceramic Donut,Glass,BedLight</p>";
    infoContent = infoContent + "<h3>Movement</h3>";
    infoContent = infoContent + "<p>User can Select any object and move it using drag and drop controls</p>";
    infoContent = infoContent + "<p>At the time of impact, The position of the selected objectd will get changed.</p>";
    infoContent = infoContent + "<p>Shadow of the Object is the destination of the object.</p>";
    infoContent = infoContent + "<p>You have to fix the shape's on shadows</p>";
    infoContent = infoContent + "<p>once the shape is fixed you can chose another shape and after all completed go for the next task</p>";
    infoContent = infoContent + "</br>";
    infoContent = infoContent + "<h3>Shapes</h3>";
   
   
    infoContent = infoContent + "<p>Shapes in this Experiment are semicircle,star,rhombus,triangle,square,pentagon,hexagon,rectangle,trapezoid,quartercircle,octagon.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}


function initialiseScene()
{
	
    /* Initialise Scene Variables */
   mySceneTLX = 0.0;
   mySceneTLY = 4.0;
   mySceneBRX = 4.0;
   mySceneBRY = 0.0;
   mySceneW   = (mySceneBRX - mySceneTLX);
   mySceneH   = (mySceneTLY - mySceneBRY);
   myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
   myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
   
}

function initialiseOtherVariables()
{
    /* Gravity */
    gravityX = 0.0;
    gravityY = -9.8;

    /* Barriers */
    rightB=mySceneBRX;
    leftB=mySceneTLX;
    bottomB=mySceneBRY;
    topB=mySceneTLY;
}

//Resetting all values to default values
function resetExperiment()
{

	if(cmpltd == 4)
	{
		PIEscene.remove(apprcube1);
		PIEscene.remove(apprcube2);
		PIEscene.remove(apprsphere);
		
		PIEscene.remove(star1);
		PIEscene.remove(star2);
		PIEscene.remove(star3);
		
		PIEscene.remove(winbox);
	}
    set1=0,set2=0,set3=0,set4=0,cmpltd=0;teach=0;

	var index = PIEdragElements.indexOf(shape1);
	if (index > -1) 
	{
		PIEdragElements.splice(index, 1);
	}
	index = PIEdragElements.indexOf(shape2);
	if (index > -1) 
	{
		PIEdragElements.splice(index, 1);
	}
	index = PIEdragElements.indexOf(shape3);
	if (index > -1) 
	{
		PIEdragElements.splice(index, 1);
	}
	index = PIEdragElements.indexOf(shape4);
	if (index > -1) 
	{
		PIEdragElements.splice(index, 1);
	}
	

	PIEscene.remove(shape1);PIEscene.remove(shape2);PIEscene.remove(shape3);PIEscene.remove(shape4);
	PIEscene.remove(shade1);PIEscene.remove(shade2);PIEscene.remove(shade3);PIEscene.remove(shade4);
	switch(choice)
	{
		case 0 : addSemiCircle(); break;
		case 1 : addStar(); break;
		case 2 : addRhombus(); break;
		case 3 : addTriangle(); break;
		case 4 : addSquare(); break;
		case 5 : addPentagon(); break;
		case 6 : addHexagon(); break;
		case 7 : addRectangle(); break;
		case 8 : addTrapezoid(); break;
		case 9 : addQuarterCircle(); break;
		case 10 : addOctagon(); break;
	}
    dragControls();
}
function initialiseControls()
{

		 
}
function nextTask()
{

	if(cmpltd == 4)
	{
		PIEscene.remove(apprcube1);
		PIEscene.remove(apprcube2);
		PIEscene.remove(apprsphere);
		
		PIEscene.remove(star1);
		PIEscene.remove(star2);
		PIEscene.remove(star3);
		
		PIEscene.remove(winbox);
	}
	set1=0,set2=0,set3=0,set4=0,cmpltd=0;teach=0;
	
	var index = PIEdragElements.indexOf(shape1);
	if (index > -1) 
	{
		PIEdragElements.splice(index, 1);
	}
	index = PIEdragElements.indexOf(shape2);
	if (index > -1) 
	{
		PIEdragElements.splice(index, 1);
	}
	index = PIEdragElements.indexOf(shape3);
	if (index > -1) 
	{
		PIEdragElements.splice(index, 1);
	}
	index = PIEdragElements.indexOf(shape4);
	if (index > -1) 
	{
		PIEdragElements.splice(index, 1);
	}
	

	choice = (choice+1)%11;
	PIEscene.remove(shape1);PIEscene.remove(shape2);PIEscene.remove(shape3);PIEscene.remove(shape4);
	PIEscene.remove(shade1);PIEscene.remove(shade2);PIEscene.remove(shade3);PIEscene.remove(shade4);
	switch(choice)
	{
		case 0 : addSemiCircle(); break;
		case 1 : addStar(); break;
		case 2 : addRhombus(); break;
		case 3 : addTriangle(); break;
		case 4 : addSquare(); break;
		case 5 : addPentagon(); break;
		case 6 : addHexagon(); break;
		case 7 : addRectangle(); break;
		case 8 : addTrapezoid(); break;
		case 9 : addQuarterCircle(); break;
		case 10 : addOctagon(); break;
		
	}
	dragControls();
}
function denyRotation()
{
	rotation = 0;
}
function addTriangle()
{
	// triangle geometry
    var geom = new THREE.Geometry();
    geom.vertices.push(new THREE.Vector3(0, 0, 0));
    geom.vertices.push(new THREE.Vector3(0.6, 0, 0));
    geom.vertices.push(new THREE.Vector3(0.3,0.6, 0));
    geom.faces.push(new THREE.Face3(0, 1, 2));
    
   var material = new THREE.MeshBasicMaterial({
        color: 0x000000,
    });
    shade1 = new THREE.Mesh(geom, material);
	PIEaddElement(shade1);
	
	shade2 = new THREE.Mesh(geom, material);
	PIEaddElement(shade2);
	
	shade3 = new THREE.Mesh(geom, material);
	PIEaddElement(shade3);
	
	shade4 = new THREE.Mesh(geom, material);
	PIEaddElement(shade4);
    
    
    // material
    var mat = new THREE.MeshBasicMaterial({color: 0xFF0000, side: THREE.DoubleSide})
    //  form mesh of geometry + material and add it to the scene
    shape1 = new THREE.Mesh(geom, mat);
	shape1.position.set(-0.79,1.82+0.6,0);
	PIEaddElement(shape1);
	
	
	shape2 = new THREE.Mesh(geom, mat);
	shape2.position.set(0.9,2.65+0.6,0);
	PIEaddElement(shape2);
	
	
	shape3 = new THREE.Mesh(geom, mat);
	shape3.position.set(2.6,2.1+0.6,0);
	PIEaddElement(shape3);
	
	shape4 = new THREE.Mesh(geom, mat);
	shape4.position.set(3.6,2.363+0.6,0);
	PIEaddElement(shape4);
	
	shape3.rotation.z  = 1.5;
	shape2.rotation.z = -1.5;
	shape4.rotation.z = -1;
	
	shade3.rotation.z  = 1.5;
	shade2.rotation.z = -1.5;
	shade4.rotation.z = -1;
	
	shade4.position.set(0.9,0.7+0.6,0);
	shade3.position.set(2.5,0.3+0.6,0);
	shade1.position.set(3.2,0.3+0.6,0);
	shade2.position.set(-0.2,0.7+0.6,0);
	
}
function addRectangle()
{
	var geometry = new THREE.PlaneGeometry(0.8, 0.5);
	var material = new THREE.MeshBasicMaterial({
        color: 0x000000,
    });
    shade1 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade1);
	
	shade2 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade2);
	
	shade3 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade3);
	
	shade4 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade4);
	
	shade1.rotation.z  = 1.55;
	shade2.rotation.z = -2;
	shade4.rotation.z = -1;
	
	
    var material = new THREE.MeshBasicMaterial({
        color: 0xDB1E1E,
    });
   shape1 = new THREE.Mesh(geometry, material);
	shape1.position.set(-0.5,2.0+0.6,0);
	PIEaddElement(shape1);
	
	shape2 = new THREE.Mesh(geometry, material);
	shape2.position.set(1,2.17+0.6,0);
	PIEaddElement(shape2);
	
	shape3 = new THREE.Mesh(geometry, material);
	shape3.position.set(2.4,2.35+0.6,0);
	PIEaddElement(shape3);
	
	shape4 = new THREE.Mesh(geometry, material);
	shape4.position.set(3.9,1.95+0.6,0);
	PIEaddElement(shape4);
	
	shape1.rotation.z  = 1.55;
	shape2.rotation.z = -2;
	shape4.rotation.z = -1;
	
	shade1.position.set(1.05,0.5+0.6,0);
	shade4.position.set(2.1,0.5+0.6,0);
	shade3.position.set(3.2,0.5+0.6,0);
	shade2.position.set(0,0.5+0.6,0);
	
}
function addSquare()
{

	

	var geometry = new THREE.PlaneGeometry(0.5, 0.5);
	var material = new THREE.MeshBasicMaterial({color : 0x000000});
	shade1 = new THREE.Mesh(geometry,material);
	PIEaddElement(shade1);
	
	shade2 = new THREE.Mesh(geometry,material);
	PIEaddElement(shade2);
	
	shade3 = new THREE.Mesh(geometry,material);
	PIEaddElement(shade3);
	
	shade4 = new THREE.Mesh(geometry,material);
	PIEaddElement(shade4);
	
    var material = new THREE.MeshBasicMaterial({
        color: 0xDB1E1E,
        //wireframe: true
    });
    shape1 = new THREE.Mesh(geometry, material);
	shape1.position.set(-0.5,2.15+0.6,0);
	PIEaddElement(shape1);
	
	shape2 = new THREE.Mesh(geometry, material);
	shape2.position.set(1,2.3+0.6,0);
	PIEaddElement(shape2);
	
	shape3 = new THREE.Mesh(geometry, material);
	shape3.position.set(2.4,2.35+0.6,0);
	PIEaddElement(shape3);
	
	shape4 = new THREE.Mesh(geometry, material);
	shape4.position.set(3.9,2.1+0.6,0);
	PIEaddElement(shape4);	
	
	shape1.rotation.z  = -1.3;
	shape2.rotation.z = -1;
	shape4.rotation.z = -0.5;
	
	shade1.rotation.z  = -1.3;
	shade2.rotation.z = -1;
	shade4.rotation.z = -0.5;
	
	shade1.position.set(1.05,0.5+0.6,0);
	shade2.position.set(2.1,0.5+0.6,0);
	shade3.position.set(3.2,0.5+0.6,0);
	shade4.position.set(0,0.5+0.6,0);
	
	
}
function addTrapezoid()
{
	var geometry,material;
	geometry = new THREE.RingGeometry(0.0000001,0.5, 3, 4, 0, Math.PI*1);
	material = new THREE.MeshBasicMaterial({
        color: 0x000000,
    });
    shade1 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade1);
	
	shade2 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade2);
	
	shade3 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade3);
	
	shade4 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade4);
	
	
	material = new THREE.MeshBasicMaterial({color: 0x9f33ff});
	//shapes
	shape1 = new THREE.Mesh(geometry, material);
	shape1.position.set(-0.4,1.95+0.6,0);
	PIEaddElement(shape1);
	
	shape2 = new THREE.Mesh(geometry, material);
	shape2.position.set(0.8,2.15+0.6,0);
	PIEaddElement(shape2);
	
	shape3 = new THREE.Mesh(geometry, material);
	shape3.position.set(2.4,2.16+0.6,0);
	PIEaddElement(shape3);
	
	shape4 = new THREE.Mesh(geometry, material);
	shape4.position.set(3.9,1.96+0.6,0);
	PIEaddElement(shape4);
	
	shape1.rotation.z  = 1.5;
	shape2.rotation.z = -2;
	shape4.rotation.z = -1;
	
	shade1.rotation.z  = 1.5;
	shade2.rotation.z = -2;
	shade4.rotation.z = -1;
	
	shade1.position.set(1.25,0.5+0.6,0);
	shade2.position.set(2,0.5+0.6,0);
	shade3.position.set(3.2,0.25+0.6,0);
	shade4.position.set(-0.1,0.5+0.6,0);
}
function addSemiCircle()
{
	var geometry,material;
	geometry = new THREE.RingGeometry(0.01,0.5, 20, 4, 0, Math.PI*1);
	
	material = new THREE.MeshBasicMaterial({
        color: 0x000000,
    });
    shade1 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade1);
	
	shade2 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade2);
	
	shade3 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade3);
	
	shade4 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade4);
	
	
	material = new THREE.MeshBasicMaterial({color: 0x00ffff});
	shape1 = new THREE.Mesh(geometry, material);
	shape1.position.set(-0.5,2.4+0.6,0);
	PIEaddElement(shape1);
	
	shape2 = new THREE.Mesh(geometry, material);
	shape2.position.set(0.78,2.15+0.6,0);
	PIEaddElement(shape2);
	
	shape3 = new THREE.Mesh(geometry, material);
	shape3.position.set(2.4,2.1+0.6,0);
	PIEaddElement(shape3);
	
	shape4 = new THREE.Mesh(geometry, material);
	shape4.position.set(3.9,1.9+0.6,0);
	PIEaddElement(shape4);
	
	shape1.rotation.z  = 3.12;
	shape2.rotation.z = -2;
	shape4.rotation.z = -1;
	
	shade1.rotation.z  = 3.12;
	shade2.rotation.z = -2;
	shade4.rotation.z = -1;
	
	shade4.position.set(0.7,0.45+0.6,0);
	shade1.position.set(2,0.7+0.6,0);
	shade3.position.set(3.2,0.25+0.6,0);
	shade2.position.set(-0.3,0.52+0.6,0);
}
function addQuarterCircle()
{
	var geometry,material;
	geometry = new THREE.RingGeometry(0.0000001,0.5, 20, 4, 0, Math.PI*0.5);
	material = new THREE.MeshBasicMaterial({
        color: 0x000000,
    });
    shade1 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade1);
	
	shade2 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade2);
	
	shade3 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade3);
	
	shade4 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade4);
	
	
	
	material = new THREE.MeshBasicMaterial({color: 0x0000ff});
	shape1 = new THREE.Mesh(geometry, material);
	shape1.position.set(-0.3,1.95+0.6,0);
	PIEaddElement(shape1);
	
	shape2 = new THREE.Mesh(geometry, material);
	shape2.position.set(1,2.6+0.6,0);
	PIEaddElement(shape2);
	
	shape3 = new THREE.Mesh(geometry, material);
	shape3.position.set(2.3,2.1+0.6,0);
	PIEaddElement(shape3);
	
	shape4 = new THREE.Mesh(geometry, material);
	shape4.position.set(3.5,2.15+0.6,0);
	PIEaddElement(shape4);
	
	shape1.rotation.z  = 1.5;
	shape2.rotation.z = -2;
	shape4.rotation.z = -1;
	
	shade1.rotation.z  = 1.5;
	shade2.rotation.z = -2;
	shade4.rotation.z = -1;
	
	shade4.position.set(0.7,0.58+0.6,0);
	shade1.position.set(2.3,0.3+0.6,0);
	shade2.position.set(3.2,0.7+0.6,0);
	shade3.position.set(-0.3,0.32+0.6,0);
}
function addPentagon()
{
	var geometry,material;
	geometry = new THREE.RingGeometry(0.0000001,0.4,5, 8, 0, Math.PI*2);
	material = new THREE.MeshBasicMaterial({
        color: 0x000000,
    });
    shade1 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade1);
	
	shade2 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade2);
	
	shade3 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade3);
	
	shade4 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade4);
	
	
	
	material = new THREE.MeshBasicMaterial({color: 0xffff00});
	shape1 = new THREE.Mesh(geometry, material);
	shape1.position.set(-0.5,2.06+0.6,0);
	PIEaddElement(shape1);
	
	shape2 = new THREE.Mesh(geometry, material);
	shape2.position.set(1,2.21+0.6,0);
	PIEaddElement(shape2);
	
	shape3 = new THREE.Mesh(geometry, material);
	shape3.position.set(2.4,2.25+0.6,0);
	PIEaddElement(shape3);
	
	shape4 = new THREE.Mesh(geometry, material);
	shape4.position.set(3.9,2.07+0.6,0);
	PIEaddElement(shape4);
	
	shape1.rotation.z  = 0.5;
	shape2.rotation.z = 1.6;
	shape4.rotation.z = -0.5;
	
	shade1.rotation.z  = 0.5;
	shade2.rotation.z = 1.6;
	shade4.rotation.z = -0.5;
	
	
	shade3.position.set(1.2,0.5+0.6,0);
	shade2.position.set(2.1,0.5+0.6,0);
	shade4.position.set(3.3,0.5+0.6,0);
	shade1.position.set(0.1,0.52+0.6,0);
}
function addHexagon()
{
	var geometry,material;
	geometry = new THREE.RingGeometry(0.0000001,0.4,6, 8, 0, Math.PI*2);
	material = new THREE.MeshBasicMaterial({
        color: 0x000000,
    });
    shade1 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade1);
	
	shade2 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade2);
	
	shade3 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade3);
	
	shade4 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade4);
	
	
	material = new THREE.MeshBasicMaterial({color: 0x0000ff});
	shape1 = new THREE.Mesh(geometry, material);
	shape1.position.set(-0.5,2.0+0.6,0);
	PIEaddElement(shape1);
	
	shape2 = new THREE.Mesh(geometry, material);
	shape2.position.set(1,2.25+0.6,0);
	PIEaddElement(shape2);
	
	shape3 = new THREE.Mesh(geometry, material);
	shape3.position.set(2.4,2.25+0.6,0);
	PIEaddElement(shape3);
	
	shape4 = new THREE.Mesh(geometry, material);
	shape4.position.set(3.9,2.05+0.6,0);
	PIEaddElement(shape4);
	
	shape1.rotation.z  = 1.5;
	shape2.rotation.z = -2.2;
	shape4.rotation.z = 4.9;
	
	shade1.rotation.z  = 1.5;
	shade2.rotation.z = -2.2;
	shade4.rotation.z = 4.9;
	
	shade2.position.set(1.1,0.5+0.6,0);
	shade3.position.set(2.2,0.5+0.6,0);
	shade1.position.set(3.3,0.5+0.6,0);
	shade4.position.set(0.1,0.52+0.6,0);
}
function addOctagon()
{
	var geometry,material;
	geometry = new THREE.RingGeometry(0.0000001,0.4,8, 8, 0, Math.PI*2);
	material = new THREE.MeshBasicMaterial({
        color: 0x000000,
    });
    shade1 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade1);
	
	shade2 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade2);
	
	shade3 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade3);
	
	shade4 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade4);
	
	
	material = new THREE.MeshBasicMaterial({color: 0xff0000});
	shape1 = new THREE.Mesh(geometry, material);
	shape1.position.set(-0.5,2.03+0.6,0);
	PIEaddElement(shape1);
	
	shape2 = new THREE.Mesh(geometry, material);
	shape2.position.set(1,2.25+0.6,0);
	PIEaddElement(shape2);
	
	shape3 = new THREE.Mesh(geometry, material);
	shape3.position.set(2.4,2.2+0.6,0);
	PIEaddElement(shape3);
	
	shape4 = new THREE.Mesh(geometry, material);
	shape4.position.set(3.9,2.03+0.6,0);
	PIEaddElement(shape4);
	
	shape1.rotation.z  = 1.1;
	shape2.rotation.z = -2;
	shape4.rotation.z = -1;
	
	shade1.rotation.z  = 1.1;
	shade2.rotation.z = -2;
	shade4.rotation.z = -1;
	
	shade2.position.set(1.1,0.5+0.6,0);
	shade1.position.set(2.2,0.5+0.6,0);
	shade3.position.set(3.3,0.5+0.6,0);
	shade4.position.set(0.1,0.52+0.6,0);
}
function addStar()
{
	var geometry,material;
	geometry = new THREE.RingGeometry(0.01,0.4,5, 4, 0, Math.PI*4);
	material = new THREE.MeshBasicMaterial({
        color: 0x000000,
    });
    shade1 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade1);
	
	shade2 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade2);
	
	shade3 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade3);
	
	shade4 = new THREE.Mesh(geometry, material);
	PIEaddElement(shade4);
	
	
	
	material = new THREE.MeshBasicMaterial({color: 0xff0000});
	shape1 = new THREE.Mesh(geometry, material);
	shape1.position.set(-0.5,2.15+0.6,0);
	PIEaddElement(shape1);
	
	shape2 = new THREE.Mesh(geometry, material);
	shape2.position.set(1,2.42+0.6,0);
	PIEaddElement(shape2);
	
	shape3 = new THREE.Mesh(geometry, material);
	shape3.position.set(2.4,2.4+0.6,0);
	PIEaddElement(shape3);
	
	shape4 = new THREE.Mesh(geometry, material);
	shape4.position.set(3.86,2.05+0.6,0);
	PIEaddElement(shape4);
	
	shape1.rotation.z  = 0.5;
	shape2.rotation.z = -3;
	shape4.rotation.z = -1;
	
	shade1.rotation.z  = 0.5;
	shade2.rotation.z = -3;
	shade4.rotation.z = -1;
	
	shade3.position.set(1.1,0.5+0.6,0);
	shade4.position.set(2.2,0.5+0.6,0);
	shade2.position.set(3.3,0.5+0.6,0);
	shade1.position.set(0.1,0.52+0.6,0);
}
function addRhombus()
{
	// triangle geometry
    var geometry,material;
	geometry = new THREE.RingGeometry(0.0000001,0.3,3	, 8, 0, Math.PI*2);
	
	var mat = new THREE.MeshBasicMaterial({color: 0x000000});
	shade1 = new THREE.Mesh(geometry, mat);
	PIEaddElement(shade1);
    shade1.position.set(-0.51,2.11+0.6,0);
    
    mesh1 = new THREE.Mesh(geometry, mat);
	PIEaddElement(mesh1);
    mesh1.position.x = -0.3;
    mesh1.position.y = 0.0033;
    
    
    mesh1.rotation.z = 1.05;
    shade1.add(mesh1);
    
    shade1.rotation.z = -1;
	
	
	material = new THREE.MeshBasicMaterial({color: 0xff00ff});
	
	shape1 = new THREE.Mesh(geometry, material);
	PIEaddElement(shape1);
    shape1.position.set(-0.51,2.11+0.6,0);
    
    mesh1 = new THREE.Mesh(geometry, material);
	PIEaddElement(mesh1);
    mesh1.position.x = -0.3;
    mesh1.position.y = 0.0033;
    
    
    mesh1.rotation.z = 1.05;
    shape1.add(mesh1);
    
    shape1.rotation.z = -1;
    
    ///shape2
    
    shade2 = new THREE.Mesh(geometry, mat);
	PIEaddElement(shade2);
    shade2.position.set(0.75,2.1+0.6,0);
    
    mesh1 = new THREE.Mesh(geometry, mat);
	PIEaddElement(mesh1);
    mesh1.position.x = -0.3;
    mesh1.position.y = 0.0033;
    
    
    mesh1.rotation.z = 1.05;
    shade2.add(mesh1);
    
    shade2.rotation.z = -1;
    
    
    
    shape2 = new THREE.Mesh(geometry, material);
	PIEaddElement(shape2);
    shape2.position.set(0.75,2.1+0.6,0);
    
    mesh1 = new THREE.Mesh(geometry, material);
	PIEaddElement(mesh1);
    mesh1.position.x = -0.3;
    mesh1.position.y = 0.0033;
    
    
    mesh1.rotation.z = 1.05;
    shape2.add(mesh1);
    
    shape2.rotation.z = -1;
    
   //shape3
    
     shade3 = new THREE.Mesh(geometry, mat);
	PIEaddElement(shade3);
    shade3.position.set(2.7,2.15+0.6,0);
    
    mesh1 = new THREE.Mesh(geometry, mat);
	PIEaddElement(mesh1);
    mesh1.position.x = -0.3;
    mesh1.position.y = 0.0033;
    
    
    mesh1.rotation.z = 1.05;
    shade3.add(mesh1);
    
    shade3.rotation.z = -1;
    
    shape3 = new THREE.Mesh(geometry, material);
	PIEaddElement(shape3);
    shape3.position.set(2.6,2.15+0.6,0);
    
    mesh1 = new THREE.Mesh(geometry, material);
	PIEaddElement(mesh1);
    mesh1.position.x = -0.3;
    mesh1.position.y = 0.0033;
    
    
    mesh1.rotation.z = 1.05;
    shape3.add(mesh1);
    
    shape3.rotation.z = -1;
    
    //shape4
    
    shade4 = new THREE.Mesh(geometry, mat);
	PIEaddElement(shade4);
    shade4.position.set(4.01,2.12+0.6,0);
    
    mesh1 = new THREE.Mesh(geometry, mat);
	PIEaddElement(mesh1);
    mesh1.position.x = -0.3;
    mesh1.position.y = 0.0033;
    
    
    mesh1.rotation.z = 1.05;
    shade4.add(mesh1);
    
    shade4.rotation.z = -1;
    
    shape4 = new THREE.Mesh(geometry, material);
	PIEaddElement(shape4);
    shape4.position.set(4.01,2.12+0.6,0);
    
    mesh1 = new THREE.Mesh(geometry, material);
	PIEaddElement(mesh1);
    mesh1.position.x = -0.3;
    mesh1.position.y = 0.0033;
    
    
    mesh1.rotation.z = 1.05;
    shape4.add(mesh1);
    
    shape4.rotation.z = -1;
    
    shape1.rotation.z  = 1.5;
	shape2.rotation.z = -2;
	shape4.rotation.z = -0.1;
	
	shade1.rotation.z  = 1.5;
	shade2.rotation.z = -2;
	shade4.rotation.z = -0.1;
	
	shade4.position.set(1.1,0.5+0.6,0);
	shade3.position.set(2.2,0.45+0.6,0);
	shade1.position.set(3.3,0.7+0.6,0);
	shade2.position.set(-0.2,0.43+0.6,0);
    
}
function addHolders()
{
	var geometry = new THREE.CylinderGeometry(0.015, 0.015, 0.6, 0.9 );
	var material = new THREE.MeshBasicMaterial({color : 0x000000});
	var stick1 = new THREE.Mesh(geometry,material);
	PIEaddElement(stick1);
	
	geometry = new THREE.CylinderGeometry(0.015, 0.015, 0.4, 0.9 );
	var stick2 = new THREE.Mesh(geometry,material);
	PIEaddElement(stick2);
	
	geometry = new THREE.CylinderGeometry(0.015, 0.015, 0.4, 0.9 );
	var stick3 = new THREE.Mesh(geometry,material);
	PIEaddElement(stick3);
	
	geometry = new THREE.CylinderGeometry(0.015, 0.015, 0.6, 0.9 );
	var stick4 = new THREE.Mesh(geometry,material);
	PIEaddElement(stick4);
	
	geometry = new THREE.CylinderGeometry(0.015, 0.015, 4.4, 0.9 );
	var stick = new THREE.Mesh(geometry,material);
	PIEaddElement(stick);
	stick.rotation.z = 1.571;
	
	stick1.position.set(-0.49,3.3,0);
	stick2.position.set(1,3.4,0);
	stick3.position.set(2.4,3.4,0);
	stick4.position.set(3.89,3.3,0);
	
	stick.position.set(1.7,3.6,0);
	
	geometry = new THREE.CylinderGeometry(0.02, 0.02, 0.3, 0.9 );
	var holder = new THREE.Mesh(geometry,material);
	PIEaddElement(holder);
	
	holder.position.set(1.7,3.75,0);
}
function addShadeBox()
{
	var texture = THREE.ImageUtils.loadTexture( 'wood.jpg');
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	texture.repeat.set(1, 1);
	
	var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
	var geometry = new THREE.PlaneGeometry(4.7, 1.5);
	var back = new THREE.Mesh(geometry,material);
	PIEaddElement(back);
	back.position.set(1.7,1.1,0);
	
	
	var geometry = new THREE.PlaneGeometry(4.5, 1.3);
    var material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        //wireframe: true
    });
   var box = new THREE.Mesh(geometry, material);
	box.position.set(1.7,1.1,0);
	PIEaddElement(box);
}
function dragControls()
{
		PIEdragElements.push(shape1);
		PIEdragElements.push(shape2);
		PIEdragElements.push(shape3);
		PIEdragElements.push(shape4);
		
		PIEsetDrag(shape1, shape1Drag);
		
		
		PIEsetDrag(shape2, shape2Drag);
		
		
		PIEsetDrag(shape3, shape3Drag);
		
		
		PIEsetDrag(shape4, shape4Drag);
		
}
function shape1Drag(element,newpos)
{
	if(set1==0)
	{
		var myboxX = newpos.x;
		var myboxY = newpos.y;
		var myboxZ = newpos.z;
	
		shape1.position.set(myboxX,myboxY,myboxZ);	
	
		if(Math.abs(shape1.position.x - shade1.position.x )<=0.015 && Math.abs(shape1.position.y - shade1.position.y )<=0.015)
		{
			set1=1;
			PIEscene.remove(shade1);
			++cmpltd;
			if(cmpltd == 4)
			victory();
		}
		
		
	}
	
}
function shape2Drag(element,newpos)
{
    if(set2==0)
	{
		var myboxX = newpos.x;
		var myboxY = newpos.y;
		var myboxZ = newpos.z;
	
		shape2.position.set(myboxX,myboxY,myboxZ);	
	
		if(Math.abs(shape2.position.x - shade2.position.x )<=0.015 && Math.abs(shape2.position.y - shade2.position.y )<=0.015)
		{
			set2=1;
			PIEscene.remove(shade2);
			++cmpltd;
			
			if(cmpltd == 4)
			victory();
		}
		
	}	
}
function shape3Drag(element,newpos)
{
    if(set3==0)
	{
		var myboxX = newpos.x;
		var myboxY = newpos.y;
		var myboxZ = newpos.z;
	
		shape3.position.set(myboxX,myboxY,myboxZ);	
	
		if(Math.abs(shape3.position.x - shade3.position.x )<=0.015 && Math.abs(shape3.position.y - shade3.position.y )<=0.015)
		{
			set3=1;
			PIEscene.remove(shade3);
			++cmpltd;
			
			if(cmpltd == 4)
			victory();
		}
		
	}	
}
function shape4Drag(element,newpos)
{
    if(set4==0)
	{
		var myboxX = newpos.x;
		var myboxY = newpos.y;
		var myboxZ = newpos.z;
	
		shape4.position.set(myboxX,myboxY,myboxZ);	
	
		if(Math.abs(shape4.position.x - shade4.position.x )<=0.015 && Math.abs(shape4.position.y - shade4.position.y )<=0.015)
		{
			set4=1;
			PIEscene.remove(shade4);
			++cmpltd;
			
			if(cmpltd == 4)
			victory();
		}
		
	}	
}
function Nothing()
{

}

function addBackGround()
{
}
function animate()
{
	requestAnimationFrame(animate);
	render();
	
}
function render()
{

	PIEsetExperimentTitle("Match Shapes Experiment");
	PIErenderer.render(PIEscene,PIEcamera);
	
	if(teach == 1 )
	{
		if(set1==0)
		{
			if(shape1.position.y >2)
			shape1.position.y -= 0.01;
			else 
			{
				shape1.position.x = shade1.position.x ;
				shape1.position.y = shade1.position.y;
				set1 = 1; ++cmpltd;
			}
		}
		
		if(set1 == 1 && set2==0)
		{
			if(shape2.position.y >2)
				shape2.position.y -= 0.01;
			else 
			{
				shape2.position.x = shade2.position.x ;
				shape2.position.y = shade2.position.y;
				set2 = 1; ++cmpltd;
			}
		}
		if(set1 == 1 && set2==1 && set3==0)
		{
			if(shape3.position.y >2)
			shape3.position.y -= 0.01;
			else 
			{
				shape3.position.x = shade3.position.x ;
				shape3.position.y = shade3.position.y;
				set3 = 1; ++cmpltd;
			}
		}
		if(set1 == 1 && set2==1 && set3==1 && set4==0)
		{
			if(shape4.position.y >2)
			shape4.position.y -= 0.01;
			else 
			{
				shape4.position.x = shade4.position.x ;
				shape4.position.y = shade4.position.y;
				set4 = 1; ++cmpltd;
			}
		}
		if(cmpltd == 4)
			teach = 0;		
	}
	
	if(cmpltd==4 && apprValue<50)
	{
		apprValue += 1;
		apprsphere.rotation.x -= 0.1;
		apprsphere.rotation.y += 0.1;
		apprsphere.rotation.z -= 0.1;
		
		apprcube1.rotation.x -= 0.1;
		apprcube1.rotation.y += 0.1;
		
		apprcube2.rotation.x += 0.1;
		apprcube2.rotation.y -= 0.1;
	}
	else if(cmpltd==4)
	{
		apprValue = 0;
		nextTask();
	}
	
}
function victory()
{
	var texture = THREE.ImageUtils.loadTexture( 'congrats.jpg');
		texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
		texture.repeat.set(1, 1);
	
		var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
		var geometry = new THREE.PlaneGeometry(1.2, 1);
		winbox = new THREE.Mesh(geometry,material);
		PIEaddElement(winbox);
		winbox.position.set(2,1.6,0.01);
	
		var texture = THREE.ImageUtils.loadTexture( 'dice1.png');
		texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
		//texture.repeat.set( 1, 1);

		var geom = new THREE.BoxGeometry(0.2,0.2,0.2,0.5);
		var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
		apprcube1 = new THREE.Mesh(geom,material);
		PIEaddElement(apprcube1);
		apprcube1.position.set(1.6,1.4,0.01);
		
		apprcube2 = new THREE.Mesh(geom,material);
		PIEaddElement(apprcube2);
		apprcube2.position.set(2.4,1.4,0.01);
	
		
		var geometry = new THREE.RingGeometry(0.01,0.6,5, 4, 0, Math.PI*4);
		var material = new THREE.MeshBasicMaterial({color: 0xFFD700});
		star1 = new THREE.Mesh(geometry, material);
		star1.position.set(1,1.6,0.01);
		PIEaddElement(star1);
		
		star2 = new THREE.Mesh(geometry, material);
		star2.position.set(1.9,2.4,0.01);
		PIEaddElement(star2);
		
		star3 = new THREE.Mesh(geometry, material);
		star3.position.set(2.9,1.6,0.01);
		PIEaddElement(star3);
		
		var geometry = new THREE.SphereGeometry(0.14,40,40,0,Math.PI*2,0,Math.PI*2);
		var texture = THREE.ImageUtils.loadTexture( 'world.jpg');
	
	
		apprsphere = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial( { map : texture  }));
		PIEaddElement(apprsphere);
		apprsphere.position.set(2,1.4,0.01);
		
		star1.rotation.z = 0.3;
		star2.rotation.z = 0.3;
		star3.rotation.z = 0.3;

}
function addSun()
{
	
	var texture = THREE.ImageUtils.loadTexture( 'next.png');
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	//texture.repeat.set( 1, 1);

	var geometry = new THREE.RingGeometry( 0.001, 0.33, 32 );
	var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
	var box1 = new THREE.Mesh(geometry,material);
	PIEaddElement(box1);
	box1.position.set(5,3.2,0);
	
	var texture = THREE.ImageUtils.loadTexture( 'answer.png');
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	var geometry = new THREE.RingGeometry( 0.001, 0.33, 32 );
	var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
	var box2 = new THREE.Mesh(geometry,material);
	PIEaddElement(box2);
    box2.position.set(5,2.4,0);	
    
	var geometry = new THREE.RingGeometry( 0.001, 0.33, 32 );
	var texture = THREE.ImageUtils.loadTexture( 'steps.jpg');
	var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
	var box3 = new THREE.Mesh(geometry,material);
	PIEaddElement(box3);
    box3.position.set(5,1.6,0);
    
    var geometry = new THREE.RingGeometry( 0.001, 0.33, 32 );
	var texture = THREE.ImageUtils.loadTexture( 'refresh.jpg');
	var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
	var box4 = new THREE.Mesh(geometry,material);
	PIEaddElement(box4);
    box4.position.set(5,0.85,0);
    
	
	bt1.push(box1);
    bt2.push(box2);
	bt3.push(box3);
	bt4.push(box4);
	
	
}
function PIEmouseDownd(b)
{
    var Next,Steps,Ans,Rfresh;
    PIEraycaster.setFromCamera(PIEmouseP,PIEcamera);
    Next=PIEraycaster.intersectObjects(bt1);
    Ans=PIEraycaster.intersectObjects(bt2);
    Steps=PIEraycaster.intersectObjects(bt3);
    Rfresh=PIEraycaster.intersectObjects(bt4);
    
    if(Next.length > 0)
    {
        nextTask();
    }
    else if(Ans.length > 0)
    {
    	set1=1;set2=1;set3=1;set4=1;
    	shape1.position.x = shade1.position.x;shape1.position.y = shade1.position.y;
    	shape2.position.x = shade2.position.x;shape2.position.y = shade2.position.y;
    	shape3.position.x = shade3.position.x;shape3.position.y = shade3.position.y;
    	shape4.position.x = shade4.position.x;shape4.position.y = shade4.position.y;
    }
    else if(Steps.length > 0)
    {
    	teach = 1;
    }
    else if(Rfresh.length >0)
    	resetExperiment();
    	
}
function PIEmouseUps(b)
{
	if(set1==0)
	{
		switch(choice)
		{
			case 0 : shape1.position.set(-0.5,2.4+0.6,0); break;
			case 1 : shape1.position.set(-0.5,2.15+0.6,0); break;
			case 2 : shape1.position.set(-0.51,2.11+0.6,0); break;
			case 3 : shape1.position.set(-0.79,1.82+0.6,0); break;
			case 4 : shape1.position.set(-0.5,2.15+0.6,0); break;
			case 5 : shape1.position.set(-0.5,2.06+0.6,0); break;
			case 6 : shape1.position.set(-0.5,2.0+0.6,0); break;
			case 7 : shape1.position.set(-0.5,2.0+0.6,0); break;
			case 8 : shape1.position.set(-0.4,1.95+0.6,0); break;
			case 9 : shape1.position.set(-0.3,1.95+0.6,0); break;
			case 10 :shape1.position.set(-0.5,2.03+0.6,0); break;
		
		}
	}
	if(set2==0)
	{
		switch(choice)
		{
			case 0 : shape2.position.set(0.78,2.15+0.6,0); break;
			case 1 : shape2.position.set(1,2.42+0.6,0); break;
			case 2 : shape2.position.set(0.75,2.1+0.6,0); break;
			case 3 : shape2.position.set(0.9,2.65+0.6,0); break;
			case 4 : shape2.position.set(1,2.3+0.6,0); break;
			case 5 : shape2.position.set(1,2.21+0.6,0); break;
			case 6 : shape2.position.set(1,2.25+0.6,0); break;
			case 7 : shape2.position.set(1,2.17+0.6,0); break;
			case 8 : shape2.position.set(0.8,2.15+0.6,0); break;
			case 9 : shape2.position.set(1,2.6+0.6,0); break;
			case 10 :shape2.position.set(1,2.25+0.6,0); break;
		
		}
	}
	if(set3==0)
	{
		switch(choice)
		{
			case 0 : shape3.position.set(2.4,2.1+0.6,0); break;
			case 1 : shape3.position.set(2.4,2.4+0.6,0); break;
			case 2 : shape3.position.set(2.6,2.15+0.6,0); break;
			case 3 : shape3.position.set(2.6,2.1+0.6,0); break;
			case 4 : shape3.position.set(2.4,2.35+0.6,0); break;
			case 5 : shape3.position.set(2.4,2.25+0.6,0); break;
			case 6 : shape3.position.set(2.4,2.25+0.6,0); break;
			case 7 : shape3.position.set(2.4,2.35+0.6,0); break;
			case 8 : shape3.position.set(2.4,2.16+0.6,0); break;
			case 9 : shape3.position.set(2.3,2.1+0.6,0); break;
			case 10 :shape3.position.set(2.4,2.2+0.6,0); break;
		
		}
	}
	if(set4==0)
	{
		switch(choice)
		{
			case 0 : shape4.position.set(3.9,1.9+0.6,0); break;
			case 1 : shape4.position.set(3.86,2.05+0.6,0); break;
			case 2 : shape4.position.set(4.01,2.12+0.6,0); break;
			case 3 : shape4.position.set(3.6,2.363+0.6,0); break;
			case 4 : shape4.position.set(3.9,2.1+0.6,0); break;
			case 5 : shape4.position.set(3.9,2.07+0.6,0); break;
			case 6 : shape4.position.set(3.9,2.05+0.6,0); break;
			case 7 : shape4.position.set(3.9,1.95+0.6,0); break;
			case 8 : shape4.position.set(3.9,1.96+0.6,0); break;
			case 9 : shape4.position.set(3.5,2.15+0.6,0); break;
			case 10 :shape4.position.set(3.9,2.03+0.6,0); break;
		
		}
	}
}
function loadExperimentElements()
{
	PIEsetExperimentTitle("Distance  : 10 ");
    PIEsetDeveloperName("Pole Sumanth");
    PIEhideControlElement();
    
    /* initialise help and info content */
    initialiseHelp();
   initialiseInfo();
    
    //initialising the scene
    initialiseScene();
	//initialising other variables
	initialiseOtherVariables();    

     PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
     
     initialiseControls();
     addShadeBox();
     addBackGround();
     addSquare();
     dragControls();
     addHolders();
     addSun();
     
     
	PIErenderer.setClearColor(0xFDF6D5);
	PIErenderer.domElement.addEventListener("mousedown",PIEmouseDownd,false);
	PIErenderer.domElement.addEventListener("mouseup",PIEmouseUps,false);
	
	var texture,geometry;
	texture = THREE.ImageUtils.loadTexture( 'wall1.jpg');
	//texture.repeat.set( 0, 1);
	var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
	geometry = new THREE.PlaneGeometry( 8.4,4 );
	
	var wall = new THREE.Mesh(geometry,material);
	PIEaddElement(wall);
	wall.position.set(2,1.85,-0.1);
	
	
	 
	
	animate();
     
     //addTable();
}
