var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY; 			/* Scene Center Y coordinate */

var hack;

var ball1;             
var ball1Radius;      
var ball1X;            
var ball1Y;            
var ball1Z;

var ball2;
var ball2R;
var ball2X;
var ball2Y;
var ball2Z;

var ballV;
var ballA;
var ballD;

var ball2V;
var ball2A;
var ball2D;

var ball3;
var ball3X;
var ball3Y;

var ball3V;
var ball3A;
var ball3D;

var velocity;

var ti;
var string;
var string1;

var collide;
var stop1;
var start2;
var stop3;
var height;

var table;
var tableX;
var tableY;
var tableW;

var standVt;
var standHt;
var standH;
var standW;
var standX;
var standY;

var stand1Vt;
var stand1Ht;
var stand1X;
var stand1Y;

var xball1;
var xball1X;
var xball1Y;
var xball1R;

var xball2;
var xball2X;
var xball2Y;
var xball2R;

var xball3;
var xball3X;
var xball3Y;
var xball3R;

var nball1;
var nball1X;
var nball1Y;
var nball1R;

var nball2;
var nball2X;
var nball2Y;
var nball2R;

var nball3;
var nball3X;
var nball3Y;
var nball3R;


var tableL1;
var tableL1H;
var tableL1X;
var tableL1Y;

var tableL2;
var tableL2H;
var tableL2X;
var tableL2Y;

var st;

var mass;
var mass2;
var e=0;
var init;
function onWindowResize(event){

    PIEcamera.aspect = window.innerWidth/window.innerHeight;
    PIEcamera.updateProjectionMatrix();
	mySceneTLX=-window.innerWidth/6400;
	mySceneTLY=window.innerHeight/6400;
	mySceneBRX=window.innerWidth/6400;
	mySceneBRY=-window.innerHeight/6400;
	PIEsetAreaOfInterest(mySceneTLX,mySceneTLY,mySceneBRX,mySceneBRY);
}

function onDocumentMouseDown( event ) {  
	event.preventDefault();
	var mouse = new THREE.Vector2();
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1; 

	var raycaster = new THREE.Raycaster();
	raycaster.setFromCamera(mouse, PIEcamera);
	var intersects = raycaster.intersectObjects(PIEscene.children);
	if ( intersects.length > 0){
		var f=0;
		if((intersects[0].object==xball1||intersects[0].object==xball2||intersects[0].object==xball3))
		{
			if(intersects[0].object==xball1)
			{
				f=4/3;
			}
			if(intersects[0].object==xball2)
			{
				f=1
			}
			if(intersects[0].object==xball3)
			{
				f=3/4;
			}
			if(f!=0)
			{
				ball1.scale.x=1/f;
				ball1.scale.y=1/f;
				ball1.scale.z=1/f;
				ball3.scale.x=1/f;
				ball3.scale.y=1/f;
				ball3.scale.z=1/f;
				ball1Radius=0.03/f;
				var c = 0.03-ball1Radius;
				ball2Y = tableY + 0.01 + ball2R;
				ball2.position.set(ball2X,ball2Y,-2);
				if(f==0.75)
				{
					velocity=velocity*Math.sqrt(mass/3);
					mass=3;
				}
				else if(f==4/3)
				{
					velocity=velocity*Math.sqrt(mass);
					mass=1;
				}
				else
				{
					velocity=velocity*Math.sqrt(mass/2);
					mass=2;
				}
			}
		}
		else if(intersects[0].object==nball1||intersects[0].object==nball2||intersects[0].object==nball3)
		{
				if(intersects[0].object==nball1)
				{
					ball2V=ball2V*Math.sqrt(mass2);
					mass2=1;
					f=4/3;
				}
				if(intersects[0].object==nball2)
				{
					ball2V=ball2V*Math.sqrt(mass2/2);
					mass2=2;
					f=1
				}
				if(intersects[0].object==nball3)
				{
					ball2V=ball2V*Math.sqrt(mass2/3);
					mass2=3;
					f=0.75;
				}
				if(f!=0)
				{
					ball2.scale.x=1/f;
					ball2.scale.y=1/f;
					ball2.scale.z=1/f;
					ball2R = 0.03/f;
					ball2Y = tableY + 0.01 + ball2R;
					ball2.position.set(ball2X,ball2Y,-2);
				}
		}
	}
}

function ball1Drag(element, newpos)
{
    ball1Y = newpos.y;
	ball1X = Math.sqrt(0.4*0.4-(0.4-ball1Y)*(0.4-ball1Y))+0.3;
	ball1Z = newpos.z;
    ball1.position.set(ball1X, ball1Y, -2);
	ballD = Math.atan(ball1Y/(ball1X-0.3))*2;
	string.rotation.z=ballD;
	height=ball1Y;
	Tenergy = Math.round(mass*height*10000);
	PEdefault = Math.round(mass*height*10000);
	e=Tenergy*0.8;
	Kenergy = -PEdefault;
	PIEchangeDisplayText("Potential Energy",PEdefault);
	PIEchangeDisplayText("Total Energy",Tenergy);
}
function foo(element,newpos)
{}
function pauseActivity()
{
	PIEpauseAnimation();
	console.log("Pause");
}
var Tenergy;
var Penergy;
var PEdefault;
var KEdefault;
var Kenergy;

function initialiseControlVariables()
{
	Tenergy = Math.round(mass*(height)*10000);
    PEdefault = Math.round(mass*(height)*10000);
	Kenergy = PEdefault;
	e=Tenergy*0.8;
	KEdefault=0;
}


function initialiseControls()
{
	PIEaddDisplayText("Velocity",ball2V);
	PIEaddDisplayText("Potential Energy",PEdefault);
	PIEaddDisplayText("Kinetic Energy",KEdefault);
	PIEaddDisplayText("Total Energy",e);
}




var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Potential to Kinetic Energy:</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The Potential Energy of pendulum is getting converted to Kinetic Energy:</p>";
	 helpContent = helpContent + "<p>As u increase the Height of right pendulum:</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>User can change masses by clicking on one of three balls hanging below the table  according to their colours.You can also change the mass of the balls and observer a considerable change in the velocity of the black ball or the amplitude of red ball.Total Energy remains the same.</p>";
    helpContent = helpContent + "<p>You can also change Height of the right ball and observe that left pendulum also goes exactly same height and thus total energy is conserved</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Potential to Kinetic Energy Conversion</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment depicts that at any time the total energy is conserved.It only takes different forms like in this experiment Kinetic Energy and Potential Energy.</p>";
    infoContent = infoContent + "<h3>Collision</h3>";
    infoContent = infoContent + "<p>When the balls collide they transfer their energy to the one which is stationary</p>";
    infoContent = infoContent + "<p>The left and right pendulum go exactly same height . This shows total Energy is conserved.</p>";
    infoContent = infoContent + "<p>Also if you increase or decrease the mass of red ball there is a considerable decrease or increase in the amplitude of red ball.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene()
{
    mySceneTLX=-2.5;
	mySceneTLY=1.2;
	mySceneBRX=2.5;
	mySceneBRY=-1.2;
	mySceneW=mySceneBRX-mySceneTLX;
	mySceneH=mySceneTLY-mySceneBRY;
	myCenterX=(mySceneBRX+mySceneTLX)/2;
	myCenterY=(mySceneTLY+mySceneBRY)/2;
	
}

function initialiseOtherVariables()
{
	e=Tenergy*0.8;
	ball1X= 0.4*Math.sin(Math.PI/8)+0.3;
	ball1Y= 0.4*(1-Math.cos(Math.PI/8));
	height=ball1Y;
	ball2X=myCenterX+0.3;
	ball2Y=myCenterY;
	velocity=0;
	ball3X=myCenterX-0.3;
	ball3Y=myCenterY;
	
	ballV=0;
	ballA=-1;
	ballD=Math.PI/8;
	
	ball3V=0;
	ball3A=-1;
	ball3D=0;
	
	ball2V=0;
	ball2A=0;
	ball2D=0;
	collide=0;
	
	stop1=0;
	start2=0;
	stop3=1;
	
	tableX=myCenterX;
	tableY=myCenterY-0.05;
	tableW=1.3;
	
	standH=0.45;
	standW=0.22;
	standX=myCenterX+0.5;
	standY=myCenterY+standH/2-0.05;
	
	stand1X=myCenterX-0.5;
	stand1Y=myCenterY+standH/2-0.05;
	
	xball1R=0.02;
	xball2R=0.03;
	xball3R=0.04;
	
	xball1X=myCenterX-0.15;
	xball2X=myCenterX-0.15;
	xball3X=myCenterX-0.15;
	
	xball1Y = myCenterY-0.15;
	xball2Y = myCenterY-0.225;
	xball3Y = myCenterY-0.325;
	
	nball1R=0.02;
	nball2R=0.03;
	nball3R=0.04;
	
	nball1X=myCenterX+0.15;
	nball2X=myCenterX+0.15;
	nball3X=myCenterX+0.15;
	
	nball1Y = myCenterY-0.15;
	nball2Y = myCenterY-0.225;
	nball3Y = myCenterY-0.325;
	
	tableL1H = 0.45;
	tableL1X = myCenterX+0.5;
	tableL1Y = myCenterY-0.2;
	
	tableL2X = myCenterX-0.5;
	tableL2Y = myCenterY-0.2;
	mass=2;
	mass2=2;
}


function loadExperimentElements()
{
	var geometry;
	var material;
	var loader;
	var texture;


	ball1Radius=0.03;
	ball2R = 0.03;
	count=1;
    PIEsetExperimentTitle("Potential Energy To Kinetic Energy");
    PIEsetDeveloperName("Pragati Chougula");
    PIEhideControlElement();
	
	
    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();

    /* initialise Other Variables */
    initialiseOtherVariables();
	
	initialiseControlVariables();
	initialiseControls();
	
	/*geometry = new THREE.BoxGeometry( mySceneW , mySceneH, 0 );
	var loader = new THREE.TextureLoader();
	var texture = loader.load('bg.jpg');
	material = new THREE.MeshBasicMaterial( {map:texture} );
    myBack = new THREE.Mesh( geometry, material );
    myBack.position.set(myCenterX, myCenterY, -4);
    myBack.receiveShadow = true;
    PIEaddElement(myBack);*/
	
	geometry = new THREE.BoxGeometry(tableW,0.02,tableW/2);
	var loader = new THREE.TextureLoader();
	var texture = loader.load('wood3.jpg');
	material = new THREE.MeshBasicMaterial( {map:texture} );
	table = new THREE.Mesh(geometry , material );
	PIEaddElement(table);
	table.position.set(tableX,tableY,-1.95);
	
	geometry = new THREE.BoxGeometry(0.01,tableL1H/1.37,0.17);
	var loader = new THREE.TextureLoader();
	var texture = loader.load('wood3.jpg');
	material = new THREE.MeshBasicMaterial( {map:texture} );
	tableL1 = new THREE.Mesh(geometry , material );
	PIEaddElement(tableL1);
	tableL1.position.set(tableL1X,tableL1Y,-2);
	
	geometry = new THREE.BoxGeometry(0.01,tableL1H/1.5,0.1);
	tableL1 = new THREE.Mesh(geometry , material );
	PIEaddElement(tableL1);
	tableL1.position.set(tableL1X-0.1,tableL1Y+0.04,-2);
	tableL1.rotation.z = Math.PI/4;
	
	geometry = new THREE.BoxGeometry(0.01,tableL1H/1.37,0.17);
	tableL2 = new THREE.Mesh(geometry , material );
	PIEaddElement(tableL2);
	tableL2.position.set(tableL2X,tableL2Y,-2);
	
	geometry = new THREE.BoxGeometry(0.01,tableL1H/1.5,0.1);
	tableL2 = new THREE.Mesh(geometry , material );
	PIEaddElement(tableL2);
	tableL2.position.set(tableL2X+0.1,tableL2Y+0.04,-2);
	tableL2.rotation.z = -Math.PI/4;
	
	geometry = new THREE.BoxGeometry(0.01,standH,0.01);
	material = new THREE.MeshBasicMaterial( {color:0x000000} );
	standVt = new THREE.Mesh(geometry , material);
	PIEaddElement(standVt);
	standVt.position.set(standX,standY,-2);
	
	geometry = new THREE.BoxGeometry(standW,0.01,0.01);
	material = new THREE.MeshBasicMaterial( {color:0x000000} );
	standHt = new THREE.Mesh(geometry , material);
	PIEaddElement(standHt);
	standHt.position.set(standX-standW/2,standY+standH/2-0.005,-2);
	
	geometry = new THREE.BoxGeometry(0.01,standH,0.01);
	
	material = new THREE.MeshBasicMaterial( {color:0x000000} );
	stand1Vt = new THREE.Mesh(geometry , material);
	PIEaddElement(stand1Vt);
	stand1Vt.position.set(stand1X,stand1Y,-2);
	
	geometry = new THREE.BoxGeometry(standW,0.01,0.01);
	material = new THREE.MeshBasicMaterial( {color:0x000000} );
	stand1Ht = new THREE.Mesh(geometry , material);
	PIEaddElement(stand1Ht);
	stand1Ht.position.set(stand1X+standW/2,stand1Y+standH/2-0.005,-2);
	
	
	geometry = new THREE.SphereGeometry(ball1Radius, 32, 32);
	var loader = new THREE.TextureLoader();
	var texture = loader.load('ball.jpg');
	material = new THREE.MeshBasicMaterial( {map:texture} );
	ball1 = new THREE.Mesh(geometry, material);
    ball1.position.set(ball1X, ball1Y, -2);
    ball1.castShadow = true;
    ball1.receiveShadow = true;
    PIEaddElement(ball1);
	PIEdragElement(ball1);
    PIEsetDrag(ball1, ball1Drag);
	
	
	geometry = new THREE.SphereGeometry(ball1Radius, 32, 32);
	var loader = new THREE.TextureLoader();
	var texture = loader.load('ball.jpg');
	material = new THREE.MeshBasicMaterial( {map:texture} );
	ball3 = new THREE.Mesh(geometry, material);
    ball3.position.set(ball3X, ball3Y, -2);
    ball3.castShadow = true;
    ball3.receiveShadow = true;
    PIEaddElement(ball3);
	PIEdragElement(ball3);
    PIEsetDrag(ball3, foo);
	
	geometry = new THREE.SphereGeometry(ball2R, 32, 32);
	var loader = new THREE.TextureLoader();
	var texture = loader.load('ball2.jpg');
	material = new THREE.MeshBasicMaterial( {map:texture} );
	ball2 = new THREE.Mesh(geometry, material);
    ball2.position.set(ball2X, ball2Y, -2);
    ball2.castShadow = true;
    ball2.receiveShadow = true;
    PIEaddElement(ball2);
	PIEdragElement(ball2);
    PIEsetDrag(ball2, foo);
	
	geometry = new THREE.SphereGeometry(xball1R, 32, 32);
	var loader = new THREE.TextureLoader();
	var texture = loader.load('ball.jpg');
	material = new THREE.MeshBasicMaterial( {map:texture} );
	xball1 = new THREE.Mesh(geometry, material);
    xball1.position.set(xball1X, xball1Y, -2);
    xball1.castShadow = true;
    xball1.receiveShadow = true;
    PIEaddElement(xball1);
	PIEdragElement(xball1);
    PIEsetDrag(xball1, foo);
	
	geometry = new THREE.SphereGeometry(xball2R, 32, 32);
	var loader = new THREE.TextureLoader();
	var texture = loader.load('ball.jpg');
	material = new THREE.MeshBasicMaterial( {map:texture} );
	xball2 = new THREE.Mesh(geometry, material);
    xball2.position.set(xball2X, xball2Y, -2);
    xball2.castShadow = true;
    xball2.receiveShadow = true;
    PIEaddElement(xball2);
	PIEdragElement(xball2);
    PIEsetDrag(xball2, foo);
	
	geometry = new THREE.SphereGeometry(xball3R, 32, 32);
	var loader = new THREE.TextureLoader();
	var texture = loader.load('ball.jpg');
	material = new THREE.MeshBasicMaterial( {map:texture} );
	xball3 = new THREE.Mesh(geometry, material);
    xball3.position.set(xball3X, xball3Y, -2);
    xball3.castShadow = true;
    xball3.receiveShadow = true;
    PIEaddElement(xball3);
	PIEdragElement(xball3);
    PIEsetDrag(xball3, foo);
	
	
	geometry = new THREE.SphereGeometry(xball1R, 32, 32);
	var loader = new THREE.TextureLoader();
	var texture = loader.load('ball2.jpg');
	material = new THREE.MeshBasicMaterial( {map:texture} );
	nball1 = new THREE.Mesh(geometry, material);
    nball1.position.set(nball1X, nball1Y, -2);
    nball1.castShadow = true;
    nball1.receiveShadow = true;
    PIEaddElement(nball1);
	PIEdragElement(nball1);
    PIEsetDrag(nball1, foo);
	
	geometry = new THREE.SphereGeometry(nball2R, 32, 32);
	var loader = new THREE.TextureLoader();
	var texture = loader.load('ball2.jpg');
	material = new THREE.MeshBasicMaterial( {map:texture} );
	nball2 = new THREE.Mesh(geometry, material);
    nball2.position.set(nball2X, nball2Y, -2);
    nball2.castShadow = true;
    nball2.receiveShadow = true;
    PIEaddElement(nball2);
	PIEdragElement(nball2);
    PIEsetDrag(nball2, foo);
	
	geometry = new THREE.SphereGeometry(nball3R, 32, 32);
	var loader = new THREE.TextureLoader();
	var texture = loader.load('ball2.jpg');
	material = new THREE.MeshBasicMaterial( {map:texture} );
	nball3 = new THREE.Mesh(geometry, material);
    nball3.position.set(nball3X, nball3Y, -2);
    nball3.castShadow = true;
    nball3.receiveShadow = true;
    PIEaddElement(nball3);
	PIEdragElement(nball3);
    PIEsetDrag(nball3, foo);
	
	
	var geo = new THREE.Geometry();
	geo.vertices.push(new THREE.Vector3(0,0,-2));
	geo.vertices.push(new THREE.Vector3(0,-0.4,-2));
	geo.faces.push(new THREE.Face3(0,1,1));
	material = new THREE.MeshLambertMaterial({ color: 0xff0000, wireframe: true  });
	string= new THREE.Mesh( geo, material);
	string.position.set(myCenterX+0.3,myCenterY+0.4, 0);
	PIEaddElement(string);
	string.rotation.z=Math.PI/8;
	
	var geo = new THREE.Geometry();
	geo.vertices.push(new THREE.Vector3(0,0,-2));
	geo.vertices.push(new THREE.Vector3(0,-0.4,-2));
	geo.faces.push(new THREE.Face3(0,1,1));
	material = new THREE.MeshLambertMaterial({ color: 0xff0000, wireframe: true  });
	string1= new THREE.Mesh( geo, material);
	string1.position.set(myCenterX-0.3,myCenterY+0.4, 0);
	PIEaddElement(string1);
	
	var geo = new THREE.Geometry();
	geo.vertices.push(new THREE.Vector3(0,0,-2));
	geo.vertices.push(new THREE.Vector3(0,-0.25,-2));
	geo.faces.push(new THREE.Face3(0,1,1));
	material = new THREE.MeshLambertMaterial({ color: 0xff0000, wireframe: true  });
	st= new THREE.Mesh( geo, material);
	st.position.set(myCenterX-0.15,myCenterY-0.05, 0);
	PIEaddElement(st);
	
	var geo = new THREE.Geometry();
	geo.vertices.push(new THREE.Vector3(0,0,-2));
	geo.vertices.push(new THREE.Vector3(0,-0.25,-2));
	geo.faces.push(new THREE.Face3(0,1,1));
	material = new THREE.MeshLambertMaterial({ color: 0xff0000, wireframe: true  });
	st= new THREE.Mesh( geo, material);
	st.position.set(myCenterX+0.15,myCenterY-0.05, 0);
	PIEaddElement(st);
	
	window.addEventListener("mousedown",onDocumentMouseDown,false);
	window.addEventListener( 'resize', onWindowResize, false );
	window.onfocus = function() {
		if((PIEanimationON == true) && (PIEanimationPaused == true))
		{
			PIEresumeAnimation();
		}
		console.log('Focus event handler fired.');
	};
	window.onblur = function() {
		if((PIEanimationON == true) && (PIEanimationPaused == false))
		{
			PIEpauseAnimation();
		}
		console.log('Blur event handler fired');
	};
	PIEscene.background=new THREE.TextureLoader().load("bg.jpg");
	
	PIEsetAreaOfInterest(mySceneTLX,mySceneTLY,mySceneBRX,mySceneBRY);
	
	PIEadjustCamera(0,0,0);
	
	PIEresetExperiment();hack=0;
	PIEstartAnimation();
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
	initialiseScene();
	initialiseOtherVariables();
	initialiseControlVariables();
	string.rotation.z=Math.PI/8;
	string1.rotation.z=0;
	init=0;
	
	ball1X= 0.4*Math.sin(Math.PI/8)+0.3;
	ball1Y= 0.4*(1-Math.cos(Math.PI/8));
	ball1.position.set(ball1X, ball1Y, -2);
	
	ball2X=0.3;
	ball2Y=tableY + 0.01 + ball2R;
	ball2.position.set(ball2X, ball2Y,-2);
	
	ball3X=-0.3;
	ball3Y= 0;
	ball3.position.set(ball3X,ball3Y,-2);
}
var once=0;


function updateExperimentElements(t, dt)
{
	init=1;
	var ti=dt/1000;
	if(stop1==0)
	{
		var newV=ballV + ballA*ti;
		if(ballV*newV<0)
		{
			e=Penergy;
		}
		ballV = ballV + ballA*ti;
		ballD += ti*ballV + ti*ti*ballA;
		Kenergy = Math.round(mass*ballV*ballV*500);
		Penergy=e-Kenergy;
		string.rotation.z = ballD; 
		ball1X = 0.4*Math.sin(ballD)+0.3;  
		ball1Y = 0.4*(1-Math.cos(ballD));
		ball1.position.set(ball1X,ball1Y,-2);
		var sep=Math.sqrt((ball1X-ball2X)*(ball1X-ball2X)+(ball1Y-ball2Y)*(ball1Y-ball2Y));
		if(sep<(ball1Radius+ball2R)&&ballV<0)
		{
			start2=1;
			if(velocity==0)
			{
				ball2V=ballV*Math.sqrt(mass/mass2);
			}
			else
				ball2V=velocity*Math.sqrt(mass/mass2);
		}
		if(ballD<=0&&ballA==-1)
		{
			ballD=string.rotation.z = 0; 
			ball1X = 0.3;  
			ball1Y = 0;
			ball1.position.set(ball1X,ball1Y,-2);
			stop1=1;
			if(velocity==0)
			{
				velocity=ballV;
			}
			ballA=1;
		}
		else if(ballD>=0&&ballA==1)
		{
			ballA=-1;
		}
	}
	if(start2==1)
	{
		Penergy=0;
		Tenergy=Kenergy=e;
		ball2X += ball2V*ti/2;
		ball2.rotation.z -= ball2V*ti/(2*ball1Radius);
		if(Math.abs(ball3X-ball2X)<(ball1Radius+ball2R)&&ball2V<0)
		{
			if(stop3==1)
			{
				stop3=0;
				ball3V=velocity;
				ball3A=1;
				ball3D=0;
			}
		}
		if(ball2X<myCenterX-0.29)
		{
			start2=0;
		}
		if(Math.abs(ball2X-ball1X)<(ball1Radius+ball2R)&&ball2V>0)
		{
			if(stop1==1)
			{
				stop1=0;
				ballV=-velocity;
				ballA=-1;
				ballD=0;
			}
		}
		if(ball2X>myCenterX+0.29)
		{
			start2=0;
		}
		if(Math.abs(ball3X-ball2X)<=(ball1Radius+ball2R))
		{
			ball2X=ball3X+ball1Radius+ball2R;
		}
		if(Math.abs(ball1X-ball2X)<=(ball1Radius+ball2R))
		{
			ball2X=ball1X-ball1Radius-ball2R;
		}
	}
	if(stop3==0)
	{
		var newV=ball3V + ball3A*ti;
		if(ball3V*newV<0)
		{
			e=Penergy;
		}
		ball3V = ball3V + ball3A*ti;
		ball3D += ti*ball3V + ti*ti*ball3A;
		string1.rotation.z = ball3D; 
		ball3X = 0.4*Math.sin(ball3D)-0.3;  
		ball3Y = 0.4*(1-Math.cos(ball3D));
		ball3.position.set(ball3X,ball3Y,-2);
		Kenergy = Math.round(mass*ball3V*ball3V*500);
		Penergy = Tenergy-Kenergy;
		var sep=Math.sqrt((ball3X-ball2X)*(ball3X-ball2X)+(ball3Y-ball2Y)*(ball3Y-ball2Y));
		if(sep<(ball1Radius+ball2R)&&ball3V>=0)
		{
			start2=1;
			ball2V=-velocity*Math.sqrt(mass/mass2);
		}
		if(ball3D>=0)
		{
			stop3=1;
			ball3D=string1.rotation.z=0;
			ball3X=-0.3;
			ball3Y=0;
		}
	}
	ball3.position.set(ball3X,ball3Y,-2);
	ball2.position.set(ball2X,ball2Y,-2);
	var v=Math.round(ball2V*10);
	PIEchangeDisplayText("Velocity",v);
	PIEchangeDisplayText("Kinetic Energy",Kenergy);
	PIEchangeDisplayText("Potential Energy",Penergy);
	PIEchangeDisplayText("Total Energy",e);
	if(hack<7)
	{
		hack++;
		if(hack==7)
		{
			PIEresetExperiment();
			PIEstopAnimation();
		}
	}
}

/******************* Update (animation changes) code ***********************/
