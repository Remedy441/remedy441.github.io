var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY; 			/* Scene Center Y coordinate */

var trolley;
var trolleyW;
var trolleyH;
var trolleyX;
var trolleyY;
var Vtrolley;
var Atrolley;
var trolleyM;

var wheel1X;
var wheel1Y;
var wheel1;

var wheel2X;
var wheel2Y;
var wheel2;

var wheelR;

var axle1;
var axle1X;
var axle1Y;

var axleR;

var axle2;
var axle2X;
var axle2Y;


var block;
var blockW;
var blockH;
var blockX;
var blockY;
var Vblock;
var VYblock;
var Ablock;
var blockM;
var blockDisp;

var hang;
var hangW;
var hangH;
var hangX;
var hangY;
var Vhang;
var Ahang;
var hangM;

var table;
var tableX;
var tableY;
var tableW;
var tableH;

var pulley;
var pulleyX;
var pulleyY;
var pulleyR;

var stringX;
var stringY;
var string;

var string2X;
var string2Y;
var string2;

var mu=0.7;

var stopT;
var startB;

var frictionForce;
var frictionWork;

var stone;

var collides;
var count;
var rod;
var rodX;
var rodY;

var changeSize;

var tableTop;
var border;

var pbar=new Array();

var wbar1=new Array();

var wbar2=new Array();

var paxle;
var paxleX;
var paxleY;
var paxleR;

var hack;
var stopF;

function onWindowResize(event){

    PIEcamera.aspect = window.innerWidth/window.innerHeight;
    PIEcamera.updateProjectionMatrix();
	mySceneTLX=-window.innerWidth/6400;
	mySceneTLY=window.innerHeight/6400;
	mySceneBRX=window.innerWidth/6400;
	mySceneBRY=-window.innerHeight/6400;
	PIEsetAreaOfInterest(mySceneTLX,mySceneTLY,mySceneBRX,mySceneBRY);
}

function handleblockM(newValue)
{
	blockM = newValue;
	block.scale.x = 1 + (blockM-6)/8;
	block.scale.y = 1 + (blockM-6)/8;
	blockX = -0.38 + 0.05*(blockM-6)/16;
	blockY = 0.3 + 0.05*(blockM-6)/16;
	blockW = 0.05 + 0.05*(blockM-6)/8;
	blockH = 0.05 + 0.05*(blockM-6)/8;
	block.position.set(blockX,blockY,-2);
	PIErender();
}

function handlehangM(newValue)
{
    hangM = newValue;
	hang.scale.x = 1 + (hangM-11)/18;
	hang.scale.y = 1 + (hangM-11)/18;
	hangY = 0.2 - 0.04*(hangM-11)/36;
	hangW = 0.04 + 0.04*(hangM-11)/18;
	hangH = 0.04 + 0.04*(hangM-11)/18;
	hang.position.set(hangX,hangY,-2);
	PIErender();
}

function handletrolleyM(newValue)
{
    trolleyM = newValue;
	trolley.scale.y = 1 + (trolleyM-2)/16;
	trolleyY = 0.32 + 0.06*(trolleyM-2)/32;
	trolleyH = 0.06 + 0.06*(trolleyM-2)/8;
	trolley.position.set(trolleyX,trolleyY,-2);
	PIErender();
}

var vel;
var disp; 

var vDefault;
var dDefault;

var blockmin;
var blockmax;
var blockstep;

var hangmin;
var hangmax;
var hangstep;

var trolleymin;
var trolleymax;
var trolleystep;


function initialiseControlVariables()
{
    vel="Velocity Block:";
	disp="Displacement";
	
	vdefault="0.0";
	ddefault="0.0";
	
	blockmin=2;
	blockmax=10;
	blockstep=1;
	
	hangmin=2;
	hangmax=20;
	hangstep=1;
	
	trolleymin=2;
	trolleymax=10;
	trolleystep=1;
}


function initialiseControls()
{
	PIEaddDisplayText(vel,vdefault);
	PIEaddDisplayText(disp,ddefault);
	PIEaddDisplayText("mu",mu);
	PIEaddDisplayText("Trolley Velocity","0.0");
	
	PIEaddDisplayText("Friction(N)","0.0");
	PIEaddDisplayText("Friction W.D(J)","0.0");
	
   PIEaddInputSlider("Block Mass", 6, handleblockM, blockmin , blockmax, blockstep);
   PIEaddInputSlider("Hanging Mass",11, handlehangM, hangmin, hangmax, hangstep);
   PIEaddInputSlider("Trolley Mass",2, handletrolleyM, trolleymin, trolleymax, trolleystep);
   
    PIEaddDisplayText("Block Mass",6);
	PIEaddDisplayText("Hanging Mass",11);
	PIEaddDisplayText("Trolley Mass",2);
   
}




var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Kinetic Energy(Activity 7):</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The Experiment shows a trolley and block placed on a table with a pulley.</p>";
	 helpContent = helpContent + "<p>the trolley is attatched to a mass to make it move.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>User can chage the masses of the 3 objects provided and observe changes in Velocity of trolley and displacement of block.</p>";
    helpContent = helpContent + "<p>As soon as you load the Experiment the experiment first runs for default case</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>You can change the masses of the three objects.You have access to three sliders.</p>";
    
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Bouncing Ball experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment has a trolley attatched to a pulley awith a mass and a block placed at distance</p>";
    infoContent = infoContent + "<h3>Collision</h3>";
    infoContent = infoContent + "<p>When the trolley collides it transfers its energy to the block.</p>";
    infoContent = infoContent + "<p>which then moves further but is opposed by friction which does work to stop the moving block.</p>";
    infoContent = infoContent + "<p>as we increase the mass of block the velocity trnsferred to block decreases and so eventually the displacement.</p>";
    infoContent = infoContent + "<p></p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene()
{
    mySceneTLX=0.0;
	mySceneTLY=3.0;
	mySceneBRX=4.0;
	mySceneBRY=0.0;
	mySceneW=mySceneBRX-mySceneTLX;
	mySceneH=mySceneTLY-mySceneBRY;
	myCenterX=(mySceneBRX+mySceneTLX)/2-2.2;
	myCenterY=(mySceneTLY+mySceneBRY)/2-1.5;
	
	tableX=myCenterX;
	tableY=myCenterY;
	tableW=1.4;
	tableH=1.1;
	
	trolleyW=0.18;
	trolleyH=0.06;
	trolleyX=myCenterX-tableW/2+trolleyW/2;
	trolleyY=myCenterY+tableH/2+trolleyH/2-0.26;
	
	blockH=0.05;
	blockW=0.05;
	blockX=myCenterX-0.18;
	blockY=myCenterY+tableH/2-0.25;
	
	hangW=0.04;
	hangH=0.04;
	hangX=myCenterX+tableW/2+hangW/2+0.05;
	hangY=myCenterY+0.2;
	
	pulleyX=myCenterX+tableW/2+0.02;
	pulleyY=myCenterY+tableH/4+0.02;
	pulleyR=0.03;
	
	paxleX = myCenterX+tableW/2+0.02;
	paxleY = myCenterY+tableH/4+0.02;
	paxleR = 0.017;
	
	stringX=myCenterX-0.63;
	stringY=myCenterY+tableH+0.225;
	
	string2X=hangX;
	string2Y=pulleyY;
	
	wheel1X=trolleyX+0.035;
	wheel1Y=trolleyY-trolleyH/1.8;
	
	wheelR=0.015;
	
	wheel2X=trolleyX-0.035;
	wheel2Y=trolleyY-trolleyH/1.8;

	axle1X = wheel1X+0.0185;
	axle1Y = wheel1Y-0.007;
	
	axle2X = wheel2X+0.02;
	axle2Y = wheel2Y-0.007;
	
	stoneX=blockX-blockW/2-0.005;
	stoneY=blockY-blockH/2+0.005;
	
	rodX = myCenterX+tableW/2;
	rodY = myCenterY+tableH/4;
	
	bottomB=mySceneBRY+mySceneH/3;
    topB=mySceneTLY-mySceneH/3;
	leftB=mySceneTLX-mySceneW/3;
    rightB=mySceneBRX+mySceneW/3;
	
	border = 0.002;

}

function initialiseOtherVariables()
{
	Ahang=10.0;
	Vhang=0.0;
	frictionForce=0.0;
	frictionWork=0.0;
	blockM=6.0;
	trolleyM=2.0;
	hangM=11.0;
	Vblock=0;
	stopT=0;
	startB=0;
	changeSize=0;
	blockH=0.05;
	blockW=0.05;
	blockX=myCenterX-0.18;
	blockY=myCenterY+tableH/2-0.25;
	VYblock=0;
	trolleyW=0.18;
	trolleyH=0.06;
	trolleyX=myCenterX-tableW/2+trolleyW/2;
	trolleyY=myCenterY+tableH/2+trolleyH/2-0.26;
	stopF=1;
}


function loadExperimentElements()
{
var geometry;
var material;
var loader;
var texture;

count=1;
    PIEsetExperimentTitle("Kinetic Energy");
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
	
	
	geometry = new THREE.BoxGeometry( mySceneW , mySceneH, 0 );
	var loader = new THREE.TextureLoader();
	var texturebg = loader.load('bg3.png');
	material = new THREE.MeshBasicMaterial( {map: texturebg} );
    myBack = new THREE.Mesh( geometry, material );
    myBack.position.set(myCenterX, myCenterY, -2 );
    myBack.receiveShadow = true;
    PIEaddElement(myBack);
	
	geometry = new THREE.BoxGeometry( mySceneW * 2,0.5, 100);
	var loader = new THREE.TextureLoader();
	var texturefl = loader.load('floor.png');
    material = new THREE.MeshLambertMaterial({map: texturefl});
    myFloor  = new THREE.Mesh( geometry, material );
    myFloor.position.set(myCenterX, myCenterY-0.525, -50);
    myFloor.receiveShadow = true;
    PIEaddElement(myFloor);
	
	geometry = new THREE.BoxGeometry( trolleyW,trolleyH, 0 );
    material = new THREE.MeshLambertMaterial({color: 0xff0000});
	trolley = new THREE.Mesh( geometry ,  material );
	trolley.position.set(trolleyX, trolleyY, -2);
	PIEaddElement(trolley);
	
	geometry = new THREE.BoxGeometry( blockW , blockH , 0 );
    material = new THREE.MeshLambertMaterial( {color: 0x30ffe9} );
	block = new THREE.Mesh( geometry ,  material );
	block.position.set(blockX, blockY, -2);
	PIEaddElement(block);
	
	geometry = new THREE.BoxGeometry( hangW,hangH, 0 );
    material = new THREE.MeshLambertMaterial( {color: 0x373d37} );
	hang = new THREE.Mesh( geometry ,  material );
	hang.position.set(hangX, hangY, -2);
	PIEaddElement(hang);
	
	
	geometry = new THREE.BoxGeometry( tableW,tableH/2, 0 );
	var loader = new THREE.TextureLoader();
	var texture = loader.load('wood2.jpg');
    material = new THREE.MeshBasicMaterial( {map: texture,overdraw:0.5} );
	table = new THREE.Mesh( geometry , material );
	table.position.set(tableX, tableY, -2);
	table.castShadow = true;
	table.receiveShadow = true;
	PIEaddElement(table);
	
	geometry = new THREE.BoxGeometry( tableW-0.07,border, 0 );
    material = new THREE.MeshLambertMaterial( {color: 0xA0522D	} );
	tableTop = new THREE.Mesh( geometry , material );
	tableTop.position.set(tableX+0.01, tableY+tableH/4-0.015 , -1.9);
	tableTop.castShadow = true;
    tableTop.receiveShadow = true;
	PIEaddElement(tableTop);
	
	geometry = new THREE.BoxGeometry(border,tableH/2-0.03, 0 );
    material = new THREE.MeshLambertMaterial( {color: 0xA0522D	} );
	tableTop = new THREE.Mesh( geometry , material );
	tableTop.position.set(tableX+tableW/2-0.025, tableY , -1.9);
	tableTop.castShadow = true;
    tableTop.receiveShadow = true;
	PIEaddElement(tableTop);
	
	geometry = new THREE.BoxGeometry( tableW-0.065,border, 0 );
    material = new THREE.MeshLambertMaterial( {color: 0xA0522D	} );
	tableTop = new THREE.Mesh( geometry , material );
	tableTop.position.set(tableX+0.01, tableY-tableH/4+0.015 , -1.9);
	tableTop.castShadow = true;
    tableTop.receiveShadow = true;
	PIEaddElement(tableTop);
	
	geometry = new THREE.BoxGeometry(border,tableH/2-0.03, 0 );
    material = new THREE.MeshLambertMaterial( {color: 0xA0522D	} );
	tableTop = new THREE.Mesh( geometry , material );
	tableTop.position.set(tableX-tableW/2+0.045, tableY , -1.9);
	tableTop.castShadow = true;
    tableTop.receiveShadow = true;
	PIEaddElement(tableTop);
	
	geometry = new THREE.BoxGeometry( 0.01,0.01, 0 );
    material = new THREE.MeshLambertMaterial( {color: 0x000000} );
	stone = new THREE.Mesh( geometry , material );
	stone.position.set(stoneX, stoneY , -2);
	stone.castShadow = true;
    stone.receiveShadow = true;
	PIEaddElement(stone);
	
	var geo = new THREE.Geometry();
	geo.vertices.push(new THREE.Vector3(0,0,-2));
	geo.vertices.push(new THREE.Vector3(-pulleyX+trolleyX+0.07,0,-2));
	geo.faces.push(new THREE.Face3(0,1,1));
	material = new THREE.MeshLambertMaterial({ color: 0xa67643, wireframe: true  });
	string= new THREE.Mesh( geo, material);
	string.position.set(stringX+1.37,stringY-0.98, 0);
	PIEaddElement(string);
	
	geo = new THREE.Geometry();
	geo.vertices.push(new THREE.Vector3(0,0,-2));
	geo.vertices.push(new THREE.Vector3(0,-pulleyY+hangY+0.005,-2));
	geo.faces.push(new THREE.Face3(0,1,1));
	material = new THREE.MeshLambertMaterial({ color: 0xa67643, wireframe: true  });
	string2= new THREE.Mesh( geo, material);
	string2.position.set(string2X,string2Y+0.015, 0);
	PIEaddElement(string2);
	
    pulley = new THREE.Mesh(new THREE.CircleGeometry(pulleyR,32), new THREE.MeshLambertMaterial({color:0x000000}));
    pulley.position.set(pulleyX+0.02,pulleyY+0.02, -2);
    PIEaddElement(pulley);
	
	
	for(var i=0;i<8;i++)
	{
		geo = new THREE.BoxGeometry(0.002,pulleyR*2,0);
		material = new THREE.MeshLambertMaterial({ color: 0xffffff, wireframe: true  });
		pbar[i]= new THREE.Mesh( geo, material);
		pbar[i].position.set(pulleyX+0.02,pulleyY+0.02,-2);
		PIEaddElement(pbar[i]);
		pbar[i].rotation.z=Math.PI/4*i;
	}
	
	for(var i=0;i<8;i++)
	{
		geo = new THREE.BoxGeometry(0.001,wheelR*2,0);
		material = new THREE.MeshLambertMaterial({ color: 0xC0C0C0, wireframe: true  });
		wbar1[i]= new THREE.Mesh( geo, material);
		wbar1[i].position.set(wheel1X,wheel1Y, -1.998);
		PIEaddElement(wbar1[i]);
		wbar1[i].rotation.z=Math.PI/4*i;
	}
	
	for(var i=0;i<8;i++)
	{
		geo = new THREE.BoxGeometry(0.001,wheelR*2,0);
		material = new THREE.MeshLambertMaterial({ color: 0xC0C0C0, wireframe: true  });
		wbar2[i]= new THREE.Mesh( geo, material);
		wbar2[i].position.set(wheel2X,wheel2Y,-1.998);
		PIEaddElement(wbar2[i]);
		wbar2[i].rotation.z=Math.PI/4*i;
	}
	
	wheel1= new THREE.Mesh(new THREE.CircleGeometry(wheelR,32), new THREE.MeshLambertMaterial({color: 0x000000}));
    wheel1.position.set(wheel1X,wheel1Y, -2);
	wheel1.receiveShadow=true;
    PIEaddElement(wheel1);
	
	
	wheel2= new THREE.Mesh(new THREE.CircleGeometry(wheelR,32), new THREE.MeshLambertMaterial({color:0x000000}));
    wheel2.position.set(wheel2X,wheel2Y, -2);
	wheel2.recieveShadow=true;
    PIEaddElement(wheel2);
	
	
	geo = new THREE.Geometry();
	geo.vertices.push(new THREE.Vector3(0,0,-1.9));
	geo.vertices.push(new THREE.Vector3(0.043,0.043,-1.9));
	geo.faces.push(new THREE.Face3(0,1,1));
	material = new THREE.MeshLambertMaterial({ color: 0x000000, wireframe: true  });
	rod= new THREE.Mesh( geo, material);
	rod.position.set(rodX-0.03,rodY-0.02, 0);
	PIEaddElement(rod);
	
	
	window.addEventListener( 'resize', onWindowResize, false );
	
	window.onfocus = function() {
		if((PIEanimationON == true) && (PIEanimationPaused == true))
		{
			PIEresumeAnimation();
		}
	}
	window.onblur = function() {
		if((PIEanimationON == true) && (PIEanimationPaused == false))
		{
			PIEpauseAnimation();
		}
	}
	
	PIEsetAreaOfInterest(mySceneTLX,mySceneTLY,mySceneBRX,mySceneBRY);
	
	PIEadjustCamera(0,0,0);
	PIEcreateTable("Table", 10, 3,true);
	var header=["mass of trolley&nbsp;","velocity of trolley&nbsp;","distance moved&nbsp;"];
	PIEupdateTableRow(0,header);
	PIEtoggleTable(true);
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
	stopT=0;
	startB=0;
    Ahang=10.0;
	Vhang=0.0;
	
	Ablock=-mu*10;
	Vblock=0.0;
	blockDisp=0.0;
	
	Atrolley=hangM/(trolleyM+hangM)*10;
	Vtrolley=0.0;
	
	collides=0;
	
	block.scale.x=0.001;
	block.scale.y=0.001;
	geometry = new THREE.BoxGeometry( blockW , blockH , 0 );
    material = new THREE.MeshLambertMaterial( {color: 0x30ffe9} );
	block = new THREE.Mesh( geometry ,  material );
	block.position.set(blockX, blockY, -2);
	PIEaddElement(block);
	
	hang.scale.x=0.001;
	hang.scale.y=0.001;
	geometry = new THREE.BoxGeometry( hangW,hangH, 0 );
    material = new THREE.MeshLambertMaterial( {color: 0x373d37} );
	hang = new THREE.Mesh( geometry ,  material );
	hang.position.set(hangX, hangY, -2);
	PIEaddElement(hang);
	
	trolley.scale.x=0.001;
	trolley.scale.y=0.001;
	geometry = new THREE.BoxGeometry( trolleyW,trolleyH, 0 );
    material = new THREE.MeshLambertMaterial({color:0xff0000 } );
	trolley = new THREE.Mesh( geometry ,  material );
	trolley.position.set(trolleyX, trolleyY, -2);
	PIEaddElement(trolley);
	
	stoneX = blockX-blockW/2-0.005;
	stone.position.set(stoneX,stoneY,-2);
	
	trolley.position.set(trolleyX, trolleyY, -2);
	block.position.set(blockX, blockY, -2);
	hang.position.set(hangX, hangY, -2);
	wheel2.position.set(wheel2X,wheel2Y, -1.999);
	wheel1.position.set(wheel1X,wheel1Y, -1.999);
	string.scale.x=0.001;
	var geo = new THREE.Geometry();
	geo.vertices.push(new THREE.Vector3(0,0,-2));
	geo.vertices.push(new THREE.Vector3(-pulleyX+trolleyX+0.07,0,-2));
	geo.faces.push(new THREE.Face3(0,1,1));
	material = new THREE.MeshLambertMaterial({ color: 0xa67643, wireframe: true  });
	string= new THREE.Mesh( geo, material);
	string.position.set(stringX+1.37,stringY-0.98, 0);
	PIEaddElement(string);
	
	string2.scale.y=0.001;
	geo = new THREE.Geometry();
	geo.vertices.push(new THREE.Vector3(0,0,-2));
	geo.vertices.push(new THREE.Vector3(0,-pulleyY+hangY+0.005,-2));
	geo.faces.push(new THREE.Face3(0,1,1));
	material = new THREE.MeshLambertMaterial({ color: 0xa67643, wireframe: true  });
	string2= new THREE.Mesh( geo, material);
	string2.position.set(string2X,string2Y+0.015, 0);
	PIEaddElement(string2);
	
	for(var i=0;i<8;i++)
	{
		wbar1[i].position.x = wheel1X;
		wbar2[i].position.x = wheel2X;
	}
	
	PIEchangeInputSlider("Block Mass",blockM);
	PIEchangeInputSlider("Hanging Mass",hangM);
	PIEchangeInputSlider("Trolley Mass",trolleyM);
	
	PIEchangeDisplayText("Block Mass",blockM);
	PIEchangeDisplayText("Hanging Mass",hangM);
	PIEchangeDisplayText("Trolley Mass",trolleyM);
}


function updateExperimentElements(t, dt)
{
	var newTX;
	var newTV;
	
	var newHY;
	var newHV;
	
	var newBX;
	var newBV;
	var newBD;
	
	var newF;
	boundaryT=dt/1000;
	trolleyX=trolley.position.x;
	blockX=block.position.x;
	hangY=hang.position.y;
	newF=frictionWork;

	
	if(changeSize==0)
	{
		PIEanimationSpeed*=2;
		stoneX = blockX-blockW/2-0.005;
		stone.position.set(stoneX,stoneY,-2);
		changeSize=1;
	}
	if(stopT==0)
	{
		Vtrolley = Vtrolley + Atrolley*boundaryT;
		trolleyX = trolleyX + (Vtrolley*boundaryT+0.5*Atrolley*boundaryT*boundaryT)/1000;
		
		hangY = hangY - (Vtrolley*boundaryT+0.5*Atrolley*boundaryT*boundaryT)/1000;
		
		wheel1X = wheel1X + (Vtrolley*boundaryT+0.5*Atrolley*boundaryT*boundaryT)/1000;
		wheel2X = wheel2X + (Vtrolley*boundaryT+0.5*Atrolley*boundaryT*boundaryT)/1000;
		
		
		
		string.scale.x = string.scale.x - (Vtrolley*boundaryT+0.5*Atrolley*boundaryT*boundaryT)/1285;
		string2.scale.y = string2.scale.y + (Vtrolley*boundaryT+0.5*Atrolley*boundaryT*boundaryT)/90;
		
		for(var i=0;i<8;i++)
		{
			pbar[i].rotation.z = pbar[i].rotation.z-(Vtrolley*boundaryT+0.5*Atrolley*boundaryT*boundaryT)/(1000*pulleyR);
			wbar1[i].rotation.z = wbar1[i].rotation.z-(Vtrolley*boundaryT+0.5*Atrolley*boundaryT*boundaryT)/(1000*pulleyR);
			wbar1[i].position.x = wbar1[i].position.x +(Vtrolley*boundaryT+0.5*Atrolley*boundaryT*boundaryT)/1000;
			wbar2[i].rotation.z = wbar2[i].rotation.z-(Vtrolley*boundaryT+0.5*Atrolley*boundaryT*boundaryT)/(1000*pulleyR);
			wbar2[i].position.x = wbar2[i].position.x +(Vtrolley*boundaryT+0.5*Atrolley*boundaryT*boundaryT)/1000;
		}
	}
	if(blockX-trolleyX<=blockW/2+trolleyW/2)
	{
		startB=1;
	}
	if(stoneX-wheel1X<=0.02)
	{
		stopT=1;
	}
	if(startB==1&&stopT==0)
	{
		Vblock=Vtrolley;
		blockX = blockX + (Vblock*boundaryT+0.5*Atrolley*boundaryT*boundaryT)/1000;
		blockDisp = blockDisp + (Vblock*boundaryT+0.5*Atrolley*boundaryT*boundaryT)/2;
	}
	
	else if(startB==1)
	{
		if(collides==0)
		{
			Vblock = Math.sqrt(Vtrolley*Vtrolley*trolleyM/(blockM));
			Ablock = -mu*10;
			frictionForce=-Math.round(mu*blockM*10);
		}
		collides=1;
		Vblock = Vblock + Ablock*boundaryT;
		blockX = blockX + (Vblock*boundaryT + 0.5*Ablock*boundaryT*boundaryT)/1270;
		blockDisp = blockDisp + (Vblock*boundaryT+0.5*Ablock*boundaryT*boundaryT)/2;
		frictionWork = frictionWork + (stopF*(Vblock*boundaryT+0.5*Ablock*boundaryT*boundaryT)/2)*frictionForce;
		if(blockX>tableX+tableW/2)
		{
			VYblock += 10*boundaryT; 
			blockY = blockY -(VYblock*boundaryT + 0.5*10*boundaryT*boundaryT)/320;
			Ablock=0;
			stopF=0;
			frictionForce=0;
			if(blockY<tableY-tableH/4+0.02)
			{
				blockY=tableY-tableH/4+0.02;
				Vtrolley = Math.round(Vtrolley*100)/100;
				blockDisp = Math.round(blockDisp*100)/100;
				startB=0;
				Vblock=0;
				Ablock=0;
			}
		}
	}
	if(Vblock<0)
	{
		
		Vtrolley = Math.round(Vtrolley*100)/100;
		blockDisp = Math.round(blockDisp*100)/100;
		PIEtoggleTable(true);
		PIEupdateTableCell(count,0,trolleyM.toString());
		PIEcreateTableCell(count,1,false);
		PIEupdateTableCell(count,1,Vtrolley.toString());
		PIEcreateTableCell(count,2,false);
		PIEupdateTableCell(count++,2,blockDisp.toString());
		console.log(count);
		startB=0;
		Vblock=0;
		Ablock=0;
		frictionForce=0;
		
	}
	trolley.position.set(trolleyX,trolleyY,-2);
	hang.position.set(hangX,hangY,-2);
	block.position.set(blockX,blockY,-2);
	wheel1.position.set(wheel1X,wheel1Y,-1.999);
	wheel2.position.set(wheel2X,wheel2Y,-1.999);
	
	newBV = Math.round(Vblock*50)/100;
	newBD = Math.round(blockDisp*100)/100;
	newTV = Math.round(Vtrolley*50)/100;
	
	frictionWork = Math.round(frictionWork);
	
	PIEchangeDisplayText(vel,newBV);
	PIEchangeDisplayText(disp,newBD);
	PIEchangeDisplayText("Trolley Velocity",newTV);
	PIEchangeDisplayText("Friction(N)",frictionForce);
	PIEchangeDisplayText("Friction W.D(J)",frictionWork);
	PIEchangeDisplayText("Block Mass",blockM);
	PIEchangeDisplayText("Hanging Mass",hangM);
	PIEchangeDisplayText("Trolley Mass",trolleyM);
	if(hack<5)
	{
		hack++;
		if(hack==5)
		{
			PIEresetExperiment();
			PIEstopAnimation();
		}
	}
	
}

/******************* Update (animation changes) code ***********************/
