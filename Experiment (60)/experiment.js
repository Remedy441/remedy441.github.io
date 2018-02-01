var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY; 			/* Scene Center Y coordinate */

var hack;

var table;
var tableX;
var tableY;
var tableW;

var string;
var stringX;
var stringY;

var string1;
var string1X;
var string1Y;

var string2;
var string2X;
var string2Y;

var pulleyR;

var pulley1;
var pulley1X;
var pulley1Y;

var pulley2;
var pulley2X;
var pulley2Y;

var block;
var blockX;
var blockY;
var blockS;
var blockM;

var weight;
var weightX;
var weightY;
var weightS;
var weightM;

var stand1;
var stand2;

var rod1;
var rod2;

var Acc;
var vel;

var WblockT;
var WblockG;

var WweightT;
var WweightG;

var myFloor;

var tension;

var pbar1 = new Array();
var pbar2 = new Array();

var axle1;
var axle2;

function onWindowResize(event){

    PIEcamera.aspect = window.innerWidth/window.innerHeight;
    PIEcamera.updateProjectionMatrix();
	mySceneTLX=-window.innerWidth/6400;
	mySceneTLY=window.innerHeight/6400;
	mySceneBRX=window.innerWidth/6400;
	mySceneBRY=-window.innerHeight/6400;
	PIEsetAreaOfInterest(mySceneTLX,mySceneTLY,mySceneBRX,mySceneBRY);
}

function blockDrag(element,newpos)
{
	var nblockY=newpos.y;
	var nweightY=2*pulley1Y-nblockY-0.56;
	if(pulley1Y-nblockY+blockS/2>0.46)
	{
		blockY=pulley1Y+blockS/2-0.46;
	}
	else if(pulley1Y-nblockY+blockS/2<0.07&&weightY>pulley1Y+weightS/2-0.46)
	{
		blockY=pulley1Y+blockS/2-0.07;
	}
	else
	{
		if(pulley1Y-nweightY+weightS/2>0.46)
		{
			weightY=pulley1Y+weightS/2-0.46;
		}
		else if(pulley1Y-nweightY+weightS/2<0.07)
		{
			weightY=pulley1Y+weightS/2-0.07;
		}
		else
		{
			blockY=nblockY;
			weightY=nweightY;
		}
	}
	string1.scale.y=(pulley1Y-blockY)/0.445;
	string2.scale.y=(pulley1Y-weightY)/0.1;
	string1Y=(pulley1Y+blockY)/2;
	string2Y=(pulley1Y+weightY)/2;
	block.position.set(blockX,blockY,-2);
	string1.position.set(string1X,string1Y,-2.01);
	string2.position.set(string2X,string2Y,-2.01);
	weight.position.set(weightX,weightY,-2);
}


function foo(element,newpos)
{}

function handleblockM(newValue)
{
	blockM=newValue;
	block.scale.x=1+(blockM-1)/4;
	block.scale.y=1+(blockM-1)/4;
	blockS=0.05+0.05*(blockM-1)/4;
	if(weightM>blockM)
	{
		Acc=10/(weightM+blockM);
		vel=0;
	}
	else if(weightM<blockM)
	{
		Acc=-10/(weightM+blockM);
		vel=0;
	}
	else
	{
		Acc=0;
		vel=0;
	}
	WblockG=0;
	WblockT=0;
	WweightG=0;
	WweightT=0;
	tension = 2*blockM*weightM/(blockM+weightM);
	if(blockY<tableY-tableW/2+0.1+blockS/2)
	{
		blockY=tableY-tableW/2+0.1+blockS/2;
	}
	block.position.set(blockX,blockY,-2);
	string1.scale.y=(pulley1Y-blockY)/0.445;
	string2.scale.y=(pulley1Y-weightY)/0.1;
	string1Y=(pulley1Y+blockY)/2;
	string2Y=(pulley1Y+weightY)/2;
	string1.position.set(string1X,string1Y,-2.01);
	string2.position.set(string2X,string2Y,-2.01);
	PIErender();
}

function handleweightM(newValue)
{
	weightM=newValue;
	weight.scale.x=1+(weightM-1)/4;
	weight.scale.y=1+(weightM-1)/4;
	weightS=0.05+0.05*(weightM-1)/4;
	if(weightM>blockM)
	{
		Acc=10/(weightM+blockM);
		vel=0;
	}
	else if(weightM<blockM)
	{
		Acc=-10/(weightM+blockM);
		vel=0;
	}
	else
	{
		Acc=0;
		vel=0;
	}
	WblockG=0;
	WblockT=0;
	WweightG=0;
	WweightT=0;
	tension = 2*blockM*weightM/(blockM+weightM);
	if(weightY<tableY-tableW/2+0.1+weightS/2)
	{
		weightY=tableY-tableW/2+0.1+weightS/2;
	}
	weight.position.set(weightX,weightY,-2);
	string1.scale.y=(pulley1Y-blockY)/0.445;
	string2.scale.y=(pulley1Y-weightY)/0.1;
	string1Y=(pulley1Y+blockY)/2;
	string2Y=(pulley1Y+weightY)/2;
	string1.position.set(string1X,string1Y,-2.01);
	string2.position.set(string2X,string2Y,-2.01);
	PIErender();
}

var bmassD;
var wmassD;
var bmin;
var bmax;
var wmax;
var wmin;

function initialiseControlVariables()
{
	bmassD=1;
	wmassD=1;
	bmin=1;
	bmax=5;
	wmin=1;
	wmax=5;
}


function initialiseControls()
{
	PIEaddInputSlider("Block Mass", bmassD, handleblockM, bmin , bmax,1);
	PIEaddInputSlider("Weight Mass", wmassD, handleweightM, wmin , wmax,1);
	PIEaddDisplayText("Work Done By Tension on block","0");
	PIEaddDisplayText("Work Done By gravity on block","0");
	PIEaddDisplayText("Work Done By Tension on weight","0");
	PIEaddDisplayText("Work Done By gravity on weight","0");
}




var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Negative Work calculations:</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
	helpContent = helpContent + "<h3>Animation control</h3>";
	 helpContent = helpContent + "<p>To change the mass of blocks use the control panel</p>";
    helpContent = helpContent + "<p>U can change the height of right block by dragging it up or down.</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Negative Work calculations</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment demonstrates work done by gravity and by tension force on the 2 blocks.</p>";
	infoContent = infoContent + "<p>Work Done = Force*(Displacement along the direction of force)[Dot product of Force vector and displacement vector]</p>";
	infoContent =  "<p>Tension Force=2*(Block mass)*(Weight mass)*accelartion due to gravity/(block mass+weight mass)<br>Work done by gravity = Mass*gravitatinal force*displacement<br>Work done by Tension =  Tension Force * displacement</p>";
    infoContent = infoContent + "<p>If the left block is heavier than the right block then the left block comes down to ground.</p>";
    infoContent = infoContent + "<p>The amount of work done by different forces is shown in control panel.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene()
{
    mySceneTLX=-10;
	mySceneTLY=7.5;
	mySceneBRX=10;
	mySceneBRY=-7.5;
	mySceneW=mySceneBRX-mySceneTLX;
	mySceneH=mySceneTLY-mySceneBRY;
	myCenterX=(mySceneBRX+mySceneTLX)/2;
	myCenterY=(mySceneTLY+mySceneBRY)/2;
}

function initialiseOtherVariables()
{
	tableX=myCenterX;
	tableY=myCenterY;
	tableW=1;
	
	pulleyR=0.04;
	
	blockS=0.05;
	blockM=1;
	
	weightS=0.05;
	weightM=1;
	
	pulley1X=tableX+0.56;
	pulley1Y=tableY+pulleyR+0.03;
	
	pulley2X=tableX-0.56;
	pulley2Y=tableY+pulleyR+0.03;
	
	stringX=tableX;
	stringY=tableY+(pulleyR*2+0.03);
	
	string1X=tableX+(0.5+pulleyR+0.06);
	string1Y=tableY+(tableW/2-0.66);
	
	string2X=tableX-(0.5+pulleyR+0.06);
	string2Y=tableY+0.01;
	
	blockX=tableX+(0.5+pulleyR+0.06);
	blockY=tableY-tableW/2+0.1+blockS/2;
	
	weightX=tableX-(0.5+pulleyR+0.06);
	weightY=tableY-0.03;
	
	vel=0;
	if(weightM>blockM)
	{
		Acc=10/(weightM+blockM);
		vel=0;
	}
	else if(weightM<blockM)
	{
		Acc=-10/(weightM+blockM);
		vel=0;
	}
	else
	{
		Acc=0;
		vel=0;
	}
	WblockG=0;
	WblockT=0;
	WweightG=0;
	WweightT=0;
	tension = 2*blockM*weightM/(blockM+weightM);
}


function loadExperimentElements()
{
	var geometry;
	var material;
	var loader;
	var texture;

    PIEsetExperimentTitle("Negative Work calculations");
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
	
	
	geometry = new THREE.BoxGeometry( mySceneW*3/2, mySceneH, 0 );
	var loader = new THREE.TextureLoader();
	var texture = loader.load('bg.jpg');
	material = new THREE.MeshBasicMaterial( {map:texture} );
    myBack = new THREE.Mesh( geometry, material );
    myBack.position.set(myCenterX+0.2, myCenterY, -25);
    myBack.receiveShadow = true;
    PIEaddElement(myBack);
	
	geometry = new THREE.BoxGeometry(tableW,0.02,tableW/3);
	var loader = new THREE.TextureLoader();
	var texture = loader.load('wood3.jpg');
	material = new THREE.MeshBasicMaterial( {map:texture} );
	table = new THREE.Mesh( geometry, material );
	table.position.set(tableX,tableY,-2);
	PIEaddElement(table);
	
	geometry = new THREE.BoxGeometry(0.01,0.4,0.1);
	stand1 = new THREE.Mesh( geometry, material );
	stand1.position.set(myCenterX-0.25,myCenterY-0.2,-2);
	PIEaddElement(stand1);
	
	geometry = new THREE.BoxGeometry(0.01,0.4,0.1);
	stand2 = new THREE.Mesh( geometry, material );
	stand2.position.set(myCenterX+0.25,myCenterY-0.2,-2);
	PIEaddElement(stand2);
	
	geometry = new THREE.BoxGeometry(0.005,0.1,0);
	material = new THREE.MeshBasicMaterial( {color:0x000000} );
	rod2 = new THREE.Mesh( geometry, material );
	rod2.position.set(myCenterX-tableW/2-0.02,myCenterY+0.03,-2);
	PIEaddElement(rod2);
	rod2.rotation.z=Math.PI/4;
	
	geometry = new THREE.BoxGeometry(0.005,0.1,0);
	material = new THREE.MeshBasicMaterial( {color:0x000000} );
	rod1 = new THREE.Mesh( geometry, material );
	rod1.position.set(myCenterX+tableW/2+0.02,myCenterY+0.03,-2);
	PIEaddElement(rod1);
	rod1.rotation.z=-Math.PI/4;
	
	geometry = new THREE.BoxGeometry(blockS,blockS,blockS);
	material = new THREE.MeshBasicMaterial( {color:0xff0000} );
	block = new THREE.Mesh( geometry, material );
	block.position.set(blockX,blockY,-2);
	PIEaddElement(block);
	PIEdragElement(block);
	PIEsetDrag(block,blockDrag);
	var edges = new THREE.EdgesGeometry( geometry );
	var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000,linewidth: 10 } ) );
	block.add(line);
	block.rotation.y=Math.PI/12;
	
	geometry = new THREE.BoxGeometry(weightS,weightS,weightS);
	material = new THREE.MeshBasicMaterial( {color:0xff0000} );
	weight = new THREE.Mesh( geometry, material );
	weight.position.set(weightX,weightY,-2);
	PIEaddElement(weight);
	var edges1 = new THREE.EdgesGeometry( geometry );
	var line1 = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000000,linewidth: 10 } ) );
	weight.add(line1);
	weight.rotation.y=-Math.PI/12;
	
	geometry = new THREE.CircleGeometry(pulleyR,32);
	material = new THREE.MeshBasicMaterial( {color:0x000000} );
	pulley1 = new THREE.Mesh( geometry, material );
	pulley1.position.set(pulley1X,pulley1Y,-2);
	PIEaddElement(pulley1);
	
	geometry = new THREE.CircleGeometry(pulleyR,32);
	material = new THREE.MeshBasicMaterial( {color:0x000000} );
	pulley2 = new THREE.Mesh( geometry, material );
	pulley2.position.set(pulley2X,pulley2Y,-2);
	PIEaddElement(pulley2);
	
	for(var i=0;i<8;i++)
	{
		geometry = new THREE.BoxGeometry(0.002,pulleyR*2,0);
		material = new THREE.MeshLambertMaterial({ color: 0xa67643});
		pbar1[i] = new THREE.Mesh(geometry,material);
		pbar1[i].position.set(pulley1X,pulley1Y,-2);
		PIEaddElement(pbar1[i]);
		pbar1[i].rotation.z=i*Math.PI/8;
	}
	
	for(var i=0;i<8;i++)
	{
		geometry = new THREE.BoxGeometry(0.002,pulleyR*2,0);
		material = new THREE.MeshLambertMaterial({ color: 0xa67643});
		pbar2[i] = new THREE.Mesh(geometry,material);
		pbar2[i].position.set(pulley2X,pulley2Y,-2);
		PIEaddElement(pbar2[i]);
		pbar2[i].rotation.z=i*Math.PI/8;
	}
	
	geometry = new THREE.CircleGeometry(pulleyR/2,32);
	material = new THREE.MeshLambertMaterial({ color: 0xa67643});
	axle1 = new THREE.Mesh(geometry,material);
	axle2 = new THREE.Mesh(geometry,material);
	axle1.position.set(pulley1X,pulley1Y,-2);
	axle2.position.set(pulley2X,pulley2Y,-2);
	PIEaddElement(axle1);
	PIEaddElement(axle2);
	
	var geo = new THREE.BoxGeometry(pulley1X*2,0.004,0);
	material = new THREE.MeshBasicMaterial({ color: 0x000000});
	string= new THREE.Mesh( geo, material);
	string.position.set(stringX,stringY, -2.01);
	PIEaddElement(string);
	
	var geo = new THREE.BoxGeometry(0.002,0.46,0.01);
	material = new THREE.MeshLambertMaterial({ color: 0x000000});
	string1= new THREE.Mesh( geo, material);
	string1.position.set(string1X,string1Y, -2.01);
	PIEaddElement(string1);
	
	var geo = new THREE.BoxGeometry(0.002,pulley1Y-weightY,0.01);
	material = new THREE.MeshLambertMaterial({ color: 0x000000});
	string2= new THREE.Mesh( geo, material);
	string2.position.set(string2X,string2Y, -2.01);
	PIEaddElement(string2);
	
	
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
	
	PIEadjustCamera(0,0.1,0.1);
	
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

	string1.scale.y=1;
	string2.scale.y=1;
	string1Y=tableY+(tableW/2-0.66);
	string2Y=tableY+0.01;
	string1.position.set(string1X,string1Y,-2.01);
	string2.position.set(string2X,string2Y,-2.01);
	block.scale.x=block.scale.y=1;
	weight.scale.x=weight.scale.y=1;
	PIEchangeInputSlider("Block Mass",blockM);
	PIEchangeInputSlider("Weight Mass",weightM);
	block.position.set(blockX,blockY,-2);
	weight.position.set(weightX,weightY,-2);
}

function updateExperimentElements(t, dt)
{
	var ti=dt/10000;
	if(blockY>=pulley1Y-pulleyR*2&&Acc>0)
	{
		blockY=pulley1Y-pulleyR*2;
	}
	else if(blockY<=tableY+0.1-tableW/2+blockS/2&&Acc<0)
	{
		blockY=tableY+0.1-tableW/2+blockS/2;
	}
	else 
	{
		if(weightY>=pulley1Y-pulleyR*2&&Acc<0)
		{
			weightY=pulley1Y-pulleyR*2;
		}
		else if(weightY<=tableY+0.1-tableW/2+weightS/2&&Acc>0)
		{
			weightY=tableY+0.1-tableW/2+weightS/2;
		}
		else if(Acc!=0)
		{
			vel=vel+ti*Acc;
			blockY=blockY+(ti*vel+ti*ti*Acc/2);
			string1.scale.y-=(ti*vel+ti*ti*Acc/2)/0.46;
			string1Y+=(ti*vel+ti*ti*Acc/2)/2;
			string1.position.set(string1X,string1Y,-2.01);
			string2.scale.y+=(ti*vel+ti*ti*Acc/2)/0.1;
			string2Y-=(ti*vel+ti*ti*Acc/2)/2;
			string2.position.set(string2X,string2Y,-2.01);
			
			for(var i=0;i<8;i++)
			{
				pbar1[i].rotation.z += (ti*vel+ti*ti*Acc/2)/pulleyR;
				pbar2[i].rotation.z += (ti*vel+ti*ti*Acc/2)/pulleyR;
			}
			
			WblockG = WblockG - 10*(ti*vel+ti*ti*Acc/2)*blockM;
			WweightG = WweightG + 10*(ti*vel+ti*ti*Acc/2)*weightM;
			WweightG = Math.round(WweightG*100)/100;
			WblockG = Math.round(WblockG*100)/100;
			WblockT += tension*100*(ti*vel+ti*ti*Acc/2);
			WweightT -= tension*100*(ti*vel+ti*ti*Acc/2);
			WblockT = Math.round(WblockT*100)/100;
			WweightT = Math.round(WweightT*100)/100;
			weightY=weightY-(ti*vel+ti*ti*Acc/2);
		}
	}
	block.position.set(blockX,blockY,-2);
	weight.position.set(weightX,weightY,-2);
	PIEchangeDisplayText("Work Done By Tension on block",WblockT.toString());
	PIEchangeDisplayText("Work Done By gravity on block",WblockG.toString());
	PIEchangeDisplayText("Work Done By Tension on weight",WweightT.toString());
	PIEchangeDisplayText("Work Done By gravity on weight",WweightG.toString());
	if(hack<20)
	{
		hack++;
		if(hack==20)
		{
			PIEresetExperiment();
			PIEstopAnimation();
		}
	}
}

/******************* Update (animation changes) code ***********************/
