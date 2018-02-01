//Scene Parameters
var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */

/* Room Variables */
var box;
var leftB;              /* Left Barrier */
var rightB;             /* Right Barrier */
var bottomB;            /* Bottom Barrier */
var topB;               /* Top Barrier */
var backB=-4.0;         /* Back Barrier */
var wallThickness;      /* Wall Thickness */
var verticalMirror,verticalMirrorMesh;
var cubeCamera,mirrorCube;
var magType = 0;
var bN,bS;
var cN,cS;
var ring,ringN;
var rod,lB,rB;
var ushape,leftU,rightU,nU,sU;
var ushape1,leftH,rightH,nH,sH;
var o1,o2,o3,o4,o5,o6,o7,o8,o9,o10;
var x1,x2,x3,x4,x5,x6,x7,x8,x9,x10;
var attrct1=0,attrct2=0,attrct3=0,attrct4=0,attrct5=0,attrct6=0,attrct7=0,attrct8=0,attrct9=0,attrct10=0;
var c1=0,c2=0,c3=0,c4=0,c5=0,c6=0;
var started = 0;

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Magnetic poles of common magnets experiment help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
     helpContent = helpContent + "<p>The experiment shows  Magnets at the right side and the Iron pins on the table.</p>";
     helpContent = helpContent + "<h3>Starting the Experiment</h3>";
    helpContent = helpContent + "<p> Click on start button to start the Experiment. </p>";
    
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>You can control the Magnet by using mouse. </p>";
    
    
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p> Table and the Iron pins on it and all the Magnets will be shown at the right side of illusion. </p>";
    helpContent = helpContent + "<p> Each magnet obeys the laws of physics </p>";
    helpContent = helpContent + "<p> You have to move the magnet near the iron pins to attract the iron pins. </p>";
    helpContent = helpContent + "<p> You can move the Magnet anywhere on the screen using Mouse.</p>";
    helpContent = helpContent + "<p> Magnet will attract the pins when the pins are in the range of it's magnetic field.</p>";
    
     helpContent = helpContent + "<h3 style = 'color:red'> Magnets</h3>";
     helpContent = helpContent + "<p> Red color of each magnet indicates it's North pole and blue indicates South Pole</p>";
      helpContent = helpContent + "<h4>Bar Magnet :</h4>";
       helpContent = helpContent + "<pre>            Bar magnet is a rectangular-shaped object with a magnetic field,Bar magnets are permanent magnets.</pre><pre>            This means that their magnetism is there all the time and cannot be turned on or off. </pre>";
      helpContent = helpContent + "<h4>U'Shaped Magnet :</h4>";
      helpContent = helpContent + "<pre>            U shape magnets is one of the most common educational magnets and usually made of Alnico material .</pre>";
      helpContent = helpContent + "<h4>Horseshoe Magnet :</h4>";
      helpContent = helpContent + "<pre>            A horseshoe magnet is a magnet made in the shape of a horseshoe. The magnet has two magnetic poles close together.</pre><pre>            This shape creates a strong magnetic field between the poles..</pre>";
      helpContent = helpContent + "<h4>Cylinderical Magnet :</h4>";
      helpContent = helpContent + "<pre>            A cylindrical magnet is an artificial magnet. It is made of iron, cobalt and nickel.</pre>";
      helpContent = helpContent + "<h4>BallEnded Magnet :</h4>";
      helpContent = helpContent + "<pre>            A Ball-ended magnet is a magnet,whose last part has two ball like .</pre><pre>            It is a permanent magnet made of steel with steel balls on each end.</pre>";
      helpContent = helpContent + "<h4>Ring Magnet :</h4>";
      helpContent = helpContent + "<pre>            Ring magnets are permanent magnets that are round with a hole in the middle.</pre><pre>            They're used both in science experiments and in medicine.</pre>";
    
    
    helpContent = helpContent + "<p> THANK YOU .....</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}
var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Magnetic poles of common magnets experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows  Magnets at the right side and the Iron pins on the table.</p>";
     infoContent = infoContent +  "<p>Magnets in the experiment are :</p>";
     infoContent = infoContent + "<pre style = 'color:blue'>                               1.Bar Magnet</pre>";
     infoContent = infoContent + "<pre style = 'color:blue'>                               2.U'Shaped Magnet</pre>";
     infoContent = infoContent + "<pre style = 'color:blue'>                               3.Horseshoe Magnet</pre>";
     infoContent = infoContent + "<pre style = 'color:blue'>                               4.Cylinderical Magnet</pre>";
     infoContent = infoContent + "<pre style = 'color:blue'>                               5.Rod Magnet</pre>";
     infoContent = infoContent + "<pre style = 'color:blue'>                               6.Ring Magnet</pre>";
    infoContent = infoContent + "<h3>Movement</h3>";
    infoContent = infoContent + "<p>Magnet Moves on Table  regarding the instructions given by the user using mouse.</p>";
    infoContent = infoContent + "<p>At the time of impact, The position of the Magnet will get changed.</p>";
    infoContent = infoContent + "<p>Magnet will attract the pin when the pin is in the range of it's magnetic field.</p>";
    infoContent = infoContent + "<p> Iron pin stick to the Magnet when magnet is near .</p>";
    infoContent = infoContent + "<p>User can observe the Movement of iron pins along with the magnet when they are attracted to the magnet.</p>";
    infoContent = infoContent + "<p>Once the pin is attatched to the magnet they will never break up.</p>";
    infoContent = infoContent + "<p>You can click on reset in the control panel to go to the initial state of Experiment.</p>";
    infoContent = infoContent + "</br>";
    infoContent = infoContent + "<h3> Magnet </h3>";
    infoContent = infoContent + "<p>Magnet is a material or object that produces a magnetic field.</p>";
    infoContent = infoContent + "<p>This magnetic field is invisible but is responsible for the most notable property of a magnet.</p>";
    infoContent = infoContent + "<p>The strength of the magnetic field it produces is at any given point proportional to the magnitude of its magnetic moment.</p>";
    infoContent = infoContent + "<p>A permanent magnet is an object made from a material that is magnetized and creates its own persistent magnetic field.</p>";
    infoContent = infoContent + "<p>Magnetic pole of a magnet refers to one of the two ends i'e either North or South.</p>";
    infoContent = infoContent + "<p>The overall magnetic behavior of a material can vary widely, depending on the structure of the material.</p>";
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

function initialiseControls()
{

}

function Reset()
{
	PIEscene.remove(cS);PIEscene.remove(bS);PIEscene.remove(ushape);PIEscene.remove(ushape1);PIEscene.remove(ring);
	PIEscene.remove(rod);PIEscene.remove(o1);PIEscene.remove(o2);PIEscene.remove(o3);PIEscene.remove(o4);
	PIEscene.remove(o5);PIEscene.remove(o6);PIEscene.remove(o7);PIEscene.remove(o8);PIEscene.remove(o9);
	PIEscene.remove(o10);
	attrct1=0;attrct2=0;attrct3=0;attrct4=0;attrct5=0;attrct6=0;attrct7=0;attrct8=0;attrct9=0;attrct10=0;
	addButtons();
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
    /* initialise Other Variables */
    initialiseOtherVariables();
    /* Reset Ball position */
    
}
function addTable()
{
	
	//var imgTexture = new THREE.ImageUtils.loadTexture( "checkerboard.jpg" );
	
	var texture = THREE.ImageUtils.loadTexture( 'wood.jpg');
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	texture.repeat.set(1, 1);
	
	var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
	var geometry = new THREE.BoxGeometry(6,3.5,0.1,1);
	var table = new THREE.Mesh(geometry,material);
	PIEaddElement(table);
	table.position.set(1.8,1,0.2);
	table.rotation.x = -1.5;

	var leg1,leg2,leg3,leg4;
	geometry = new THREE.BoxGeometry(0.1,2,0.1,1);
	leg1 = new THREE.Mesh(geometry,material);
	PIEaddElement(leg1);
	leg1.position.set(-1,-0.1,1.5);
	
	geometry = new THREE.BoxGeometry(0.1,2,0.1,1);
	leg2 = new THREE.Mesh(geometry,material);
	PIEaddElement(leg2);
	leg2.position.set(4.6,-0.1,1.5);
	
	geometry = new THREE.BoxGeometry(0.17,2,0.1,1);
	leg3 = new THREE.Mesh(geometry,material);
	PIEaddElement(leg3);
	leg3.position.set(-1.6,0,-3);
	
	geometry = new THREE.BoxGeometry(0.17,2,0.1,1);
	leg4 = new THREE.Mesh(geometry,material);
	PIEaddElement(leg4);
	leg4.position.set(5.1,0,-3);
	leg4.rotation.z = -0.01;
	
	
	
}
function addIronObjects()
{
	var geometry = new THREE.CylinderGeometry(0.013, 0.005, 0.3, 0.7 );
	var texture = THREE.ImageUtils.loadTexture( 'iron.jpg');
	var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
		
	
	
	o2 = new THREE.Mesh(geometry,material);
	o2.position.set(0,1.2,0);
	o2.rotation.z = 1;
	PIEaddElement(o2);	
	
	o4 = new THREE.Mesh(geometry,material);
	PIEaddElement(o4);	
	o4.position.set(1,1.2,0);
	
	o6= new THREE.Mesh(geometry,material);
	PIEaddElement(o6);	
	//o1.add(o3);
	o6.rotation.z=0.1;
	o6.position.y = 1.2;
	o6.position.x = 2;
	
	o1 = new THREE.Mesh(geometry,material);
	PIEaddElement(o1);	
	//o1.add(o4);
	o1.position.y = 1.2;
	o1.position.x = -0.5;
	o1.rotation.z = 1.3;
	
	o9 = new THREE.Mesh(geometry,material);
	PIEaddElement(o9);	
	o9.rotation.z=0.9;
	o9.position.y = 1.2;
	o9.position.x = 4;
	
	o10 = new THREE.Mesh(geometry,material);
	PIEaddElement(o10);	
	//o1.add(o6);
	o10.rotation.z=1.4;
	o10.position.y = 1.2;
	o10.position.x = 4.5;
	o10.position.z = -0.5;
	
	o3 = new THREE.Mesh(geometry,material);
	PIEaddElement(o3);	
	//o1.add(o7);
	o3.rotation.z=1.5;
	o3.position.y = 1.2;
	
	o8 = new THREE.Mesh(geometry,material);
	PIEaddElement(o8);	
	//o1.add(o8);
	o8.rotation.z=1.5;
	o8.position.x = 3;
	o8.position.y = 1.2;
	
	o7= new THREE.Mesh(geometry,material);
	PIEaddElement(o7);	
	//o1.add(o9);
	o7.rotation.z=1.4;
	o7.position.y = 1.2;
	o7.position.x = 2.5;
	o7.position.z = 2.5;
	
	o5 = new THREE.Mesh(geometry,material);
	PIEaddElement(o5);	
	//o1.add(o10);
	o5.position.y =-1.4;
	o5.position.x =1.5;
	o5.rotation.z = 2.3;
	o5.position.z = 1;
	o5.position.y = 1.2;
	
	geometry = new THREE.SphereGeometry(0.03,40,40,0,Math.PI*2,0,Math.PI*2);
	x1 = new THREE.Mesh(geometry,material);
	x1.position.set(0,0.15,0);
	x2 = new THREE.Mesh(geometry,material);
	x2.position.set(0,0.15,0);
	x3 = new THREE.Mesh(geometry,material);
	x3.position.set(0,0.15,0);
	x4 = new THREE.Mesh(geometry,material);
	x4.position.set(0,0.15,0);
	x5 = new THREE.Mesh(geometry,material);
	x5.position.set(0,0.15,0);
	x6 = new THREE.Mesh(geometry,material);
	x6.position.set(0,0.15,0);
	x7 = new THREE.Mesh(geometry,material);
	x7.position.set(0,0.15,0);
	x8 = new THREE.Mesh(geometry,material);
	x8.position.set(0,0.15,0);
	x9 = new THREE.Mesh(geometry,material);
	x9.position.set(0,0.15,0);
	x10 = new THREE.Mesh(geometry,material);
	x10.position.set(0,0.15,0);
	o2.add(x1);
	o4.add(x2);
	o4.rotation.x = -0.8;
	o6.add(x3);
	o6.rotation.z = -1.2;
	
	o1.add(x4);
	o1.rotation.x = -1.8;
	
	o9.add(x5);
	o10.add(x6);
	o3.add(x7);
	o8.add(x8);
	o7.add(x9);
	o5.add(x10);
}
function BarMagnet()
{
	var geometry = new THREE.CubeGeometry(0.4,0.2,0.15,0.15);
	var material = new THREE.MeshBasicMaterial({color :0xff1001});
	bN = new THREE.Mesh(geometry,material);
	material = new THREE.MeshBasicMaterial({color :0x1210eb});
	bS = new THREE.Mesh(geometry,material);
	
	PIEaddElement(bN);
	
	PIEaddElement(bS);
	
	bS.add(bN);
	
	bS.position.set(6.7,4.2,0);
	bN.position.x = -0.38;
	
	magType = 1;
	
	
		PIEdragElement(bS);
		PIEsetDrag(bS, bSDrag);
}
function UShapeMagnet()
{
	
	var geometry = new THREE.TorusGeometry( 0.25, 0.1, 0.9, 20 ,Math.PI * 1 );
	var material = new THREE.MeshBasicMaterial({color:0x2F4F4F});
	ushape= new THREE.Mesh(geometry,material);
	PIEaddElement(ushape);
	ushape.position.set(6.6,3.5,0);
	
	geometry = new THREE.CylinderGeometry(0.096, 0.096, 0.2, 0.7 );
	leftU = new THREE.Mesh(geometry,material);
	PIEaddElement(leftU);
	ushape.add(leftU);
	leftU.position.set(-0.25,-0.07,0);
	
	geometry = new THREE.CylinderGeometry(0.096, 0.096, 0.2, 0.7 );
	rightU = new THREE.Mesh(geometry,material);
	PIEaddElement(rightU);
	ushape.add(rightU);
	rightU.position.set(0.25,-0.07,0);
	
	geometry = new THREE.CubeGeometry(0.16,0.15,0.15,0.15);
	material = new THREE.MeshBasicMaterial({color:0xff1001});
	nU = new THREE.Mesh(geometry,material);
	PIEaddElement(nU);
	ushape.add(nU);
	nU.position.set(-0.245,-0.225,0);
	
	material = new THREE.MeshBasicMaterial({color:0x1210eb});
	sU = new THREE.Mesh(geometry,material);
	PIEaddElement(sU);
	ushape.add(sU);
	sU.position.set(0.25,-0.225,0);
	
	ushape.rotation.z = -1.5;
	magType = 2;
	
	nU.rotation.z = 0.04;
	sU.rotation.z = -0.04;
	
	ushape.rotation.z = 0.05;
	PIEdragElement(ushape);
    PIEsetDrag(ushape, ushapeDrag);
}
function HorseMagnet()
{
	var geometry = new THREE.TorusGeometry( 0.25, 0.1, 0.9, 20 ,Math.PI * 1 );
	var material = new THREE.MeshBasicMaterial({color:0x2F4F4F});
	ushape1 = new THREE.Mesh(geometry,material);
	PIEaddElement(ushape1);
	ushape1.position.set(6.6,2.6,0);
	
	geometry = new THREE.CylinderGeometry(0.096, 0.096, 0.2, 0.7 );
	leftH = new THREE.Mesh(geometry,material);
	PIEaddElement(leftH);
	ushape1.add(leftH);
	leftH.position.set(-0.24,-0.07,0);
	
	geometry = new THREE.CylinderGeometry(0.096, 0.096, 0.2, 0.7 );
	rightH = new THREE.Mesh(geometry,material);
	PIEaddElement(rightH);
	ushape1.add(rightH);
	rightH.position.set(0.24,-0.07,0);
	
	geometry = new THREE.CubeGeometry(0.16,0.16,0.15,0.15);
	material = new THREE.MeshBasicMaterial({color:0xff1001});
	nH = new THREE.Mesh(geometry,material);
	PIEaddElement(nH);
	ushape1.add(nH);
	nH.position.set(-0.205,-0.24,0);
	
	material = new THREE.MeshBasicMaterial({color:0x1210eb});
	sH = new THREE.Mesh(geometry,material);
	PIEaddElement(sH);
	ushape1.add(sH);
	sH.position.set(0.21,-0.24,0);
	
	ushape1.rotation.z = -1.5;
	leftH.rotation.z = 0.165;
	rightH.rotation.z = -0.165;
	sH.rotation.z = -0.165;
	nH.rotation.z = 0.165;
	
	magType = 6;
	ushape1.rotation.z = 0.05;
	PIEdragElement(ushape1);
    PIEsetDrag(ushape1, ushape1Drag);
}
function CylindericalMagnet()
{
	var geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.4, 0.7 );
	var material = new THREE.MeshBasicMaterial({color:0xff1001});
	cN = new THREE.Mesh(geometry,material);
	
	material = new THREE.MeshBasicMaterial({color:0x1210eb});
	cS = new THREE.Mesh(geometry,material);
	
	PIEaddElement(cS);
	cS.position.set(6.65,1.6,0);
	PIEaddElement(cN);
	
	cS.add(cN);
	cN.position.set(0,0.4,0);
	
	cS.rotation.z = 1;
	magType = 3;
	
	PIEdragElement(cS);
    PIEsetDrag(cS, cSDrag);
}
function BallEndedMagnet()
{
	var geometry = new THREE.CylinderGeometry(0.05, 0.05, 0.7, 0.7 );
	var material = new THREE.MeshBasicMaterial({color:0x2F4F4F});
	rod = new THREE.Mesh(geometry,material);
	PIEaddElement(rod);
	rod.rotation.z = 1.56;
	rod.position.set(6.5,1,0);
	
	geometry = new THREE.SphereGeometry(0.15,40,40,0,Math.PI*2,0,Math.PI*2);
	material = new THREE.MeshBasicMaterial({color:0xff1001});
	lB = new THREE.Mesh(geometry,material);
	PIEaddElement(lB);
	rod.add(lB);
	lB.position.set(0,0.4,0);
	
	material = new THREE.MeshBasicMaterial({color:0x1210eb});
	rB = new THREE.Mesh(geometry,material);
	PIEaddElement(rB);
	rod.add(rB);
	rB.position.set(0,-0.4,0);
	
	magType = 4;
	
	PIEdragElement(rod);
    PIEsetDrag(rod, rodDrag);
}
function RingMagnet()
{
//THREE.TorusGeometry( radius, tubeRadius, radialSegments, tubularSegments )
	var geometry = new THREE.TorusGeometry( 0.25, 0.1, 0.9, 20 ,Math.PI * 1 );
	var material = new THREE.MeshBasicMaterial({color:0xff1001});
	ring = new THREE.Mesh(geometry,material);
	var material = new THREE.MeshBasicMaterial({color:0x1210eb});
	ringN = new THREE.Mesh(geometry,material);
	PIEaddElement(ring);
	PIEaddElement(ringN);
	
	
	ring.position.set(6.6,0.3,0);
	ringN.position.set(0,0,0);
	ringN.rotation.z = 3.14;

	magType = 5;
	ring.add(ringN);
	ring.rotation.z = 1.5;
	PIEdragElement(ring);
    PIEsetDrag(ring, ringDrag);
}
function resetExperiment()
{
	Reset();
}
function removeMagnet()
{
	if(attracted == 1)
	{
		attracted = 0;
		
		PIEscene.remove(o1);PIEscene.remove(o2);PIEscene.remove(o3);PIEscene.remove(o4);PIEscene.remove(o5);
		PIEscene.remove(o6);PIEscene.remove(o7);PIEscene.remove(o8);PIEscene.remove(o9);PIEscene.remove(o10);
		addIronObjects();
	}

	switch(magType)
	{
		case 1: PIEscene.remove(box);PIEscene.remove(bN);break;
		case 2: PIEscene.remove(box);PIEscene.remove(leftU);PIEscene.remove(rightU);PIEscene.remove(nU);PIEscene.remove(sU);break;
		case 3: PIEscene.remove(box);PIEscene.remove(cN);break;
		case 4: PIEscene.remove(box);PIEscene.remove(lB);PIEscene.remove(lR);break;
		case 5: PIEscene.remove(box);break;
		case 6: PIEscene.remove(box);PIEscene.remove(leftH);PIEscene.remove(rightH);PIEscene.remove(nH);PIEscene.remove(sH);break;
		
	}
}
//dragging objects
function bSDrag(element, newpos)
{
	if((bS.position.x >=-1 && bS.position.x<=0.3)&&(bS.position.y >=1 && bS.position.y<=1.8) &&  attrct1==0)
	{
		attrct1=1;
		if(bS.position.x <= o1.position.x)
			bS.add(o1);
		else
			bN.add(o1);
		o1.position.set(0.01,-0.01,0.1);
		
	}
	if((bS.position.x >=-0.8 && bS.position.x<=0.5)&&(bS.position.y >=1 && bS.position.y<=1.8)&&  attrct2==0)
	{
		attrct2=1;
		if(bS.position.x <= o2.position.x)
			bS.add(o2);
		else
			bN.add(o2);
		o2.position.set(0.05,0.05,0.1);
		
	}

	if((bS.position.x >=-0.5 && bS.position.x<=0.8)&&(bS.position.y >=1 && bS.position.y<=1.8)&&  attrct3==0)
	{
		attrct3=1;
		if(bS.position.x <= o3.position.x)
			bS.add(o3);
		else
			bN.add(o3);
		o3.position.set(0.03,-0,0.1);
		
	}
	if((bS.position.x >=0.4 && bS.position.x<=2)&&(bS.position.y >=1 && bS.position.y<=1.8)&& attrct4==0)
	{
		attrct4=1;
		if(bS.position.x <= o4.position.x)
			bS.add(o4);
		else
			bN.add(o4);
		o4.position.set(0.025,0.1,0.1);
	}
	if((bS.position.x >=0.7 && bS.position.x<=3)&&(bS.position.y >=1 && bS.position.y<=1.8)&& attrct5==0)
	{
		attrct5=1;
		if(bS.position.x <= o5.position.x)
			bS.add(o5);
		else
			bN.add(o5);
		o5.position.set(0.1,0.1,0.1);
		
	}
	if((bS.position.x >=1.6 && bS.position.x<=3.4)&&(bS.position.y >=1 && bS.position.y<=1.8)&& attrct6==0)
	{
		attrct6=1;
		if(bS.position.x <= o6.position.x)
			bS.add(o6);
		else
			bN.add(o6);
		o6.position.set(0.01,0.05,0.1);
		
	}
	if((bS.position.x >=2.2 && bS.position.x<=3.8)&&(bS.position.y >=1 && bS.position.y<=1.8)&& attrct7==0)
	{
		attrct7=1;
		if(bS.position.x <= o7.position.x)
			bS.add(o7);
		else
			bN.add(o7);
		o7.position.set(0.07,-0.01,0.1);
		
	}
	if((bS.position.x >=2.7 && bS.position.x<=4.6)&&(bS.position.y >=1 && bS.position.y<=1.8)&& attrct8==0)
	{
		attrct8=1;
		if(bS.position.x <= o8.position.x)
			bS.add(o8);
		else
			bN.add(o8);
		o8.position.set(0.03,0.05,0.1);
		
	}
	if((bS.position.x >=3.3&& bS.position.x<=5.3)&&(bS.position.y >=1 && bS.position.y<=1.8)&& attrct9==0)
	{
		attrct9=1;
		if(bS.position.x <= o9.position.x)
			bS.add(o9);
		else
			bN.add(o9);
		o9.position.set(0.05,0.05,0.1);
		
	}
	if((bS.position.x >=3.7&& bS.position.x<=5.6)&&(bS.position.y >=1 && bS.position.y<=1.8)&& attrct10==0)
	{
		attrct10=1;
		if(bS.position.x <= o10.position.x)
			bS.add(o10);
		else
			bN.add(o10);
		o10.position.set(0.02,0.1,0.1);
		
	}
	

	var posX = newpos.x;
	var posY = newpos.y;
	var posZ = newpos.z;
	if((posX >-1.5 && posX < 5.3))
	{
	
		if(posY <= 1.23)
			posY = 1.24;
	}
	bS.position.set(posX,posY,posZ);
}

function ushapeDrag(element, newpos)
{
	if((ushape.position.x >=-1 && ushape.position.x<=0)&&(ushape.position.y >=1 && ushape.position.y<=1.8)&&  attrct1==0)
	{
		attrct1=1;
		if(ushape.position.x >= o1.position.x)
		{
			ushape.add(o1);
			o1.position.set(-0.3,-0.2,0.1);
		}
		else
		{
			ushape.add(o1);
			o1.position.set(0.2,-0.2,0.1);
		}
		o1.rotation.y =- 01;
	}
	if((ushape.position.x >=-0.5 && ushape.position.x<=0.6)&&(ushape.position.y >=1&& ushape.position.y<=1.8)&&  attrct2==0)
	{
		attrct2=1;
		if(ushape.position.x >= o2.position.x)
		{
			ushape.add(o2);
			o2.position.set(-0.3,-0.2,0.1);
		}
		else
		{
			ushape.add(o2);
			o2.position.set(0.2,-0.2,0.1);
		}
	}

	if((ushape.position.x >=-0.2 && ushape.position.x<=0.7)&&(ushape.position.y >=1&& ushape.position.y<=1.8)&&  attrct3==0)
	{
		attrct3=1;
		if(ushape.position.x >= o3.position.x)
		{
			ushape.add(o3);
			o3.position.set(-0.3,-0.2,0.1);
		}
		else
		{
			ushape.add(o3);
			o3.position.set(0.2,-0.2,0.1);
		}
		
	}
	if((ushape.position.x >=0.8 && ushape.position.x<=2)&&(ushape.position.y >=1 && ushape.position.y<=1.8)&& attrct4==0)
	{
		attrct4=1;
		if(ushape.position.x >= o4.position.x)
		{
			ushape.add(o4);
			o4.position.set(-0.25,-0.3,0.12);
		}
		else
		{
			ushape.add(o4);
			o4.position.set(0.2,-0.3,0.1);
		}
		
	}
	if((ushape.position.x >=0.5 && ushape.position.x<=3)&&(ushape.position.y >=1 && ushape.position.y<=1.8)&& attrct5==0)
	{
		attrct5=1;
		if(ushape.position.x >= o5.position.x)
		{
			ushape.add(o5);
			o5.position.set(-0.3,-0.2,0.1);
		}
		else
		{
			ushape.add(o5);
			o5.position.set(0.2,-0.2,0.1);
		}
		
	}
	if((ushape.position.x >=1.2 && ushape.position.x<=3.4)&&(ushape.position.y >=1 && ushape.position.y<=1.8)&& attrct6==0)
	{
		attrct6=1;
		if(ushape.position.x >= o6.position.x)
		{
			ushape.add(o6);
			o6.position.set(-0.3,-0.2,0.1);
		}
		else
		{
			ushape.add(o6);
			o6.position.set(0.2,-0.2,0.1);
		}
		
	}
	if((ushape.position.x >=2 && ushape.position.x<=3.8)&&(ushape.position.y >=1 && ushape.position.y<=1.8)&& attrct7==0)
	{
		attrct7=1;
		if(ushape.position.x >= o7.position.x)
		{
			ushape.add(o7);
			o7.position.set(-0.3,-0.2,0.1);
		}
		else
		{
			ushape.add(o7);
			o7.position.set(0.2,-0.2,0.1);
		}
		o7.rotation.z = 1.2;
	}
	if((ushape.position.x >=2.6 && ushape.position.x<=4.6)&&(ushape.position.y >=1 && ushape.position.y<=1.8)&& attrct8==0)
	{
		attrct8=1;
		if(ushape.position.x >= o8.position.x)
		{
			ushape.add(o8);
			o8.position.set(-0.3,-0.2,0.1);
		}
		else
		{
			ushape.add(o8);
			o8.position.set(0.2,-0.2,0.1);
		}
		
	}
	if((ushape.position.x >=3&& ushape.position.x<=5.3)&&(ushape.position.y >=1 && ushape.position.y<=1.8)&& attrct9==0)
	{
		attrct9=1;
		if(ushape.position.x >= o9.position.x)
		{
			ushape.add(o9);
			o9.position.set(-0.3,-0.2,0.1);
		}
		else
		{
			ushape.add(o9);
			o9.position.set(0.2,-0.2,0.1);
		}
		
	}
	if((ushape.position.x >=3.5&& ushape.position.x<=5.6)&&(ushape.position.y >=1 && ushape.position.y<=1.8)&& attrct10==0)
	{
		attrct10=1;
		if(ushape.position.x >= o10.position.x)
		{
			ushape.add(o10);
			o10.position.set(-0.3,-0.2,0.1);
		}
		else
		{
			ushape.add(o10);
			o10.position.set(0.2,-0.2,0.1);
		}
		o10.rotation.z = 2;
		
	}

	var posX = newpos.x;
	var posY = newpos.y;
	var posZ = newpos.z;
	if((posX >-1.5 && posX < 5.3))
	{
	
		if(posY <= 1.43)
			posY = 1.4;
	}
	ushape.position.set(posX,posY,posZ);
}

function ushape1Drag(element, newpos)
{
	if((ushape1.position.x>=-1 &&ushape1.position.x<=0)&&(ushape1.position.y >=1&& ushape1.position.y<=1.8)&&  attrct1==0)
	{
		attrct1=1;
		if(ushape1.position.x >= o1.position.x)
		{
			ushape1.add(o1);
			o1.position.set(-0.2,-0.2,0.1);
		}
		else
		{
			ushape1.add(o1);
			o1.position.set(0.2,-0.2,0.1);
		}
		o1.rotation.y =- 01;
	}
	if((ushape1.position.x>=-0.8&&ushape1.position.x<=0.6)&&(ushape1.position.y>=1&& ushape1.position.y<=1.8)&&  attrct2==0)
	{
		attrct2=1;
		if(ushape1.position.x >= o2.position.x)
		{
			ushape1.add(o2);
			o2.position.set(-0.2,-0.2,0.1);
		}
		else
		{
			ushape1.add(o2);
			o2.position.set(0.2,-0.2,0.1);
		}
		
	}

	if((ushape1.position.x >=-0.5&&ushape1.position.x<=0.7)&&(ushape1.position.y>=1&&ushape1.position.y<=1.8)&&  attrct3==0)
	{
		attrct3=1;
		if(ushape1.position.x >= o3.position.x)
		{
			ushape1.add(o3);
			o3.position.set(-0.2,-0.2,0.1);
		}
		else
		{
			ushape1.add(o3);
			o3.position.set(0.2,-0.2,0.1);
		}
		
	}
	if((ushape1.position.x>=0.3&&ushape1.position.x<=2)&&(ushape1.position.y>=1&&ushape1.position.y<=1.8)&& attrct4==0)
	{
		attrct4=1;
		if(ushape1.position.x >= o4.position.x)
		{
			ushape1.add(o4);
			o4.position.set(-0.2,-0.2,0.1);
		}
		else
		{
			ushape1.add(o4);
			o4.position.set(0.2,-0.2,0.1);
		}
		
	}
	if((ushape1.position.x>=2&&ushape1.position.x<=3)&&(ushape1.position.y>=1&&ushape1.position.y<=1.8)&& attrct5==0)
	{
		attrct5=1;
		if(ushape1.position.x >= o5.position.x)
		{
			ushape1.add(o5);
			o5.position.set(-0.2,-0.2,0.1);
		}
		else
		{
			ushape1.add(o5);
			o5.position.set(0.2,-0.2,0.1);
		}
		
	}
	if((ushape1.position.x>=2.2 &&ushape1.position.x<=3.4)&&(ushape1.position.y>=1&& ushape1.position.y<=1.8)&& attrct6==0)
	{
		attrct6=1;
		if(ushape1.position.x >= o6.position.x)
		{
			ushape1.add(o6);
			o6.position.set(-0.2,-0.2,0.1);
		}
		else
		{
			ushape1.add(o6);
			o6.position.set(0.2,-0.2,0.1);
		}
		
	}
	if((ushape1.position.x>=2.4&&ushape1.position.x<=3.8)&&(ushape1.position.y>=1&& ushape1.position.y<=1.8)&& attrct7==0)
	{
		attrct7=1;
		if(ushape1.position.x >= o7.position.x)
		{
			ushape1.add(o7);
			o7.position.set(-0.2,-0.2,0.1);
		}
		else
		{
			ushape1.add(o7);
			o7.position.set(0.2,-0.2,0.1);
		}
		o7.rotation.z = 1.2;
	}
	if((ushape1.position.x>=2.7&&ushape1.position.x<=4.6)&&(ushape1.position.y>=1&& ushape1.position.y<=1.8)&& attrct8==0)
	{
		attrct8=1;
		if(ushape1.position.x >= o8.position.x)
		{
			ushape1.add(o8);
			o8.position.set(-0.2,-0.2,0.1);
		}
		else
		{
			ushape1.add(o8);
			o8.position.set(0.2,-0.2,0.1);
		}
		
	}
	if((ushape1.position.x>=3.2&&ushape1.position.x<=5.3)&&(ushape1.position.y >=1&& ushape1.position.y<=1.8)&& attrct9==0)
	{
		attrct9=1;
		if(ushape1.position.x >= o9.position.x)
		{
			ushape1.add(o9);
			o9.position.set(-0.2,-0.2,0.1);
		}
		else
		{
			ushape1.add(o9);
			o9.position.set(0.2,-0.2,0.1);
		}
		
	}
	if((ushape1.position.x>=3.3&&ushape1.position.x<=4.6)&&(ushape1.position.y >=1&& ushape1.position.y<=1.8)&& attrct10==0)
	{
		attrct10=1;
		if(ushape1.position.x >= o10.position.x)
		{
			ushape1.add(o10);
			o10.position.set(-0.2,-0.2,0.1);
		}
		else
		{
			ushape1.add(o10);
			o10.position.set(0.2,-0.2,0.1);
		}
		o10.rotation.z = 2;
		
	}
	var posX = newpos.x;
	var posY = newpos.y;
	var posZ = newpos.z;
	if((posX >-1.5 && posX < 5.3))
	{
	
		if(posY <= 1.4)
			posY = 1.43;
	}
	ushape1.position.set(posX,posY,posZ);
}

function cSDrag(element, newpos)
{
	if((cS.position.x >=-0.7 && cS.position.x<=0)&&(cS.position.y >=1 && cS.position.y<=1.8)&&attrct1==0)
	{
		attrct1=1;
		if(cS.position.x< (o1.position.x+0.1))
			cS.add(o1);
		else
			cN.add(o1);
		o1.position.set(0.1,0.1,0.2);
		
	}
	if((cS.position.x >=-0.6 && cS.position.x<=0.6)&&(cS.position.y >=1 && cS.position.y<=1.8)&&attrct2==0)
	{
		attrct2=1;
		if(cS.position.x< (o2.position.x+0.1))
			cS.add(o2);
		else
			cN.add(o2);
		o2.position.set(0.2,0.01,0.1);
		
	}

	if((cS.position.x >=-0.3 && cS.position.x<=0.7)&&(cS.position.y >=1 && cS.position.y<=1.8)&&attrct3==0)
	{
		attrct3=1;
		if(cS.position.x< (o3.position.x+0.1))
			cS.add(o3);
		else
			cN.add(o3);
		o3.position.set(0.1,0.01,0.1);
		
	}
	if((cS.position.x >=0.5 && cS.position.x<=2)&&(cS.position.y >=1 && cS.position.y<=1.8)&&attrct4==0)
	{
		attrct4=1;
		if(cS.position.x< (o4.position.x+0.1))
			cS.add(o4);
		else
			cN.add(o4);
		o4.position.set(-0.05,0.05,0.2);
		
	}
	if((cS.position.x >=1 && cS.position.x<=2.3)&&(cS.position.y >=1 && cS.position.y<=1.8)&&attrct5==0)
	{
		attrct5=1;
		if(cS.position.x< (o5.position.x+0.1))
			cS.add(o5);
		else
			cN.add(o5);
		o5.position.set(0.1,0.06,0.1);
		
	}
	if((cS.position.x >=2 && cS.position.x<=3)&&(cS.position.y >=1 && cS.position.y<=1.8)&&attrct6==0)
	{
		attrct6=1;
		if(cS.position.x< (o6.position.x+0.1))
					
		cS.add(o6);
		else
			cN.add(o6);
		o6.position.set(0.01,0.05,0.1);
		
	}
	if((cS.position.x >=2.5 && cS.position.x<=3.8)&&(cS.position.y >=1 && cS.position.y<=1.8)&&attrct7==0)
	{
		attrct7=1;
		if(cS.position.x< (o7.position.x+0.1))
					
		cS.add(o7);
		else
			cN.add(o7);
		o7.position.set(0.1,0.09,0.1);
		
	}
	if((cS.position.x >=2.5 && cS.position.x<=4)&&(cS.position.y >=1 && cS.position.y<=1.8)&&attrct8==0)
	{
		attrct8=1;
		if(cS.position.x< (o10.position.x+0.1))
					
		cS.add(o8);
		else
			cN.add(o8);
		o8.position.set(0.1,0.05,0.1);
		
	}
	if((cS.position.x >=3.7&& cS.position.x<=5)&&(cS.position.y >=1 && cS.position.y<=1.8)&&attrct9==0)
	{
		attrct9=1;
		if(cS.position.x< (o10.position.x+0.1))
					
		cS.add(o9);
		else
			cN.add(o9);
		o9.position.set(0.1,0.05,0.1);
		
		
		
	}
	if((cS.position.x >=4&& cS.position.x<=5.6)&&(cS.position.y >=1 && cS.position.y<=1.8)&&attrct10==0)
	{
		attrct10=1;
		if(cS.position.x< (o10.position.x+0.1))
			cS.add(o10);
		else
			cN.add(o10);
		o10.position.set(-0.1,0.1,0.1);
		
	}

	var posX = newpos.x;
	var posY = newpos.y;
	var posZ = newpos.z;
	if((posX >-1.5 && posX < 5.3))
	{
	
		if(posY <= 1.23)
			posY = 1.24;
	}
	cS.position.set(posX,posY,posZ);
	
}

function rodDrag(element, newpos)
{
	if((rod.position.x >=-1 && rod.position.x<=0)&&(rod.position.y >=1 && rod.position.y<=1.8)&&attrct1==0)
	{
		attrct1=1;
		if(rod.position.x >= (o1.position.x))
			lB.add(o1);
		else
			rB.add(o1);
		o1.position.set(-0.15,-0.07,0.2);
		
	}
	if((rod.position.x >=-0.7 && rod.position.x<=0.6)&&(rod.position.y >=1 && rod.position.y<=1.8)&&attrct2==0)
	{
		attrct2=1;
		if(rod.position.x >= (o2.position.x))
			lB.add(o2);
		else
			rB.add(o2);
		o2.position.set(0.15,0.05,0.1);
		
	}

	if((rod.position.x >=-0.5 && rod.position.x<=0.7)&&(rod.position.y >=1 && rod.position.y<=1.8)&&attrct3==0)
	{
		attrct3=1;
		if(rod.position.x >= (o3.position.x))
			lB.add(o3);
		else
			rB.add(o3);
		o3.position.set(0.15,-0,0.2);
		
	}
	if((rod.position.x >=0.5 && rod.position.x<=2)&&(rod.position.y >=1 && rod.position.y<=1.8)&&attrct4==0)
	{
		attrct4=1;
		if(rod.position.x >= (o4.position.x))
			lB.add(o4);
		else
			rB.add(o4);
		o4.position.set(0.1,-0.1,0.25);
		
	}
	if((rod.position.x >=0.6 && rod.position.x<=3)&&(rod.position.y >=1 && rod.position.y<=1.8)&&attrct5==0)
	{
		attrct5=1;
		if(rod.position.x >= (o5.position.x))
			lB.add(o5);
		else
			rB.add(o5);
		o5.position.set(0.1,0.1,0.2);
		
	}
	if((rod.position.x >=1.5&& rod.position.x<=3.4)&&(rod.position.y >=1 && rod.position.y<=1.8)&&attrct6==0)
	{
		attrct6=1;
		if(rod.position.x >= (o6.position.x))
			lB.add(o6);
		else
			rB.add(o6);
		o6.position.set(0.01,0.05,0.2);
		
	}
	if((rod.position.x >=1.7 && rod.position.x<=3.8)&&(rod.position.y >=1 && rod.position.y<=1.8)&&attrct7==0)
	{
		attrct7=1;
		if(rod.position.x >= (o7.position.x))
			lB.add(o7);
		else
			rB.add(o7);
		o7.position.set(-0.1,-0.01,0.2);
		
	}
	if((rod.position.x >=2.7&& rod.position.x<=4.6)&&(rod.position.y >=1 && rod.position.y<=1.8)&&attrct8==0)
	{
		attrct8=1;
		if(rod.position.x >= (o8.position.x))
			lB.add(o8);
		else
			rB.add(o8);
		o8.position.set(0.1,0.05,0.2);
		
	}
	if((rod.position.x >=3.5&& rod.position.x<=5.3)&&(rod.position.y >=1 && rod.position.y<=1.8)&&attrct9==0)
	{
		attrct9=1;
		if(rod.position.x >=(o9.position.x))
			lB.add(o9);
		else
			rB.add(o9);
		o9.position.set(0.1,-0.16,0.2);
		
	}
	if((rod.position.x >=3.9&& rod.position.x<=5.6)&&(rod.position.y >=1 && rod.position.y<=1.8)&&attrct10==0)
	{
		attrct10=1;
		
		if(rod.position.x >= (o10.position.x))
			lB.add(o10);
		else
			rB.add(o10);
			
		o10.position.set(-0.05,0.1,0.2);
		
	}

	var posX = newpos.x;
	var posY = newpos.y;
	var posZ = newpos.z;
	if((posX >-1.5 && posX < 5.3))
	{
	
		if(posY <= 1.23)
			posY = 1.24;
	}
	rod.position.set(posX,posY,posZ);
}

function ringDrag(element, newpos)
{
	if((ring.position.x>=-1 && ring.position.x<=0)&&(ring.position.y >=1 && ring.position.y<=1.8)&&  attrct1==0)
	{
		attrct1=1;
		
		if(ring.position.x < o1.position.x)
			ring.add(o1);
		else
		{
		    ringN.add(o1);
		}
		o1.position.set(0,-0.2,0.1);
		o1.rotation.y =- 01;
		attracted = 1;
	}
	if((ring.position.x >=-0.5 && ring.position.x<=0.6)&&(ring.position.y >=1&& ring.position.y<=1.8) && attrct2==0)
	{
		attrct2=1;
		if(ring.position.x < o2.position.x)
			ring.add(o2);
		else
		{
		    ringN.add(o2);
		}
		o2.position.set(-0.05,-0.3,0.1);
		
		attracted = 1;
	}

	if((ring.position.x >=-0.2 && ring.position.x<=0.7)&&(ring.position.y >=1&& ring.position.y<=1.8)&& attrct3==0)
	{
		attrct3=1;
		if(ring.position.x < o3.position.x)
			ring.add(o3);
		else
		{
		    ringN.add(o3);
		}
		o3.position.set(-0.1,-0.3,0.1);
		
		attracted = 1;
	}
	if((ring.position.x >=0.8 && ring.position.x<=2)&&(ring.position.y >=1 && ring.position.y<=1.8)&&attrct4==0)
	{
		attrct4=1;
		if(ring.position.x < o4.position.x)
			ring.add(o4);
		else
		{
		    ringN.add(o4);
		}
		o4.position.set(-0.2,-0.25,0.2);
		
		attracted = 1;
	}
	if((ring.position.x >=1 && ring.position.x<=3)&&(ring.position.y >=1 && ring.position.y<=1.8) && attrct5==0)
	{
		attrct5=1;
		if(ring.position.x < o5.position.x)
			ring.add(o5);
		else
		{
		    ringN.add(o5);
		}
		o5.position.set(-0.1,-0.1,0.1);
		
		attracted = 1;
	}
	if((ring.position.x >=1.5 && ring.position.x<=3.4)&&(ring.position.y >=1 && ring.position.y<=1.8)&& attrct6==0)
	{
		attrct6=1;
		if(ring.position.x < o6.position.x)
			ring.add(o6);
		else
		{
		    ringN.add(o6);
		}
		o6.position.set(-0.1,-0.3,0.1);
		
		attracted = 1;
	}
	if((ring.position.x >=2 && ring.position.x<=3.8)&&(ring.position.y >=1 && ring.position.y<=1.8)&&attrct7==0)
	{
		attrct7=1;
		if(ring.position.x < o7.position.x)
			ring.add(o7);
		else
		{
		    ringN.add(o7);
		}
		o7.position.set(0.3,-0.3,0.1);
		o7.rotation.z = 1.2;
		attracted = 1;
	}
	if((ring.position.x >=2.5 && ring.position.x<=4.6)&&(ring.position.y >=1 && ring.position.y<=1.8)&&attrct8==0)
	{
		attrct8=1;
		if(ring.position.x < o8.position.x)
			ring.add(o8);
		else
		{
		    ringN.add(o8);
		}
		o8.position.set(0.4,-0.1,0.1);
		
		attracted = 1;
	}
	if((ring.position.x >=3&& ring.position.x<=5.3)&&(ring.position.y >=1 && ring.position.y<=1.8)&&attrct9==0)
	{
		attrct9=1;
		if(ring.position.x < o9.position.x)
			ring.add(o9);
		else
		{
		    ringN.add(o9);
		}
		o9.position.set(0.2,-0.3,0.1);
		
		attracted = 1;
	}
	if((ring.position.x >=3.5&& ring.position.x<=5.6)&&(ring.position.y >=1 && ring.position.y<=1.8)&&attrct10==0)
	{
		attrct10=1;
		if(ring.position.x < o10.position.x)
			ring.add(o10);
		else
		{
		    ringN.add(o10);
		}
		o10.position.set(0.2,-0.1,0.1);
		o10.rotation.z = 2;
		
		attracted = 1;
	}

	var posX = newpos.x;
	var posY = newpos.y;
	var posZ = newpos.z;
	if((posX >-1.5 && posX < 5.3))
	{
	
		if(posY <= 1.4)
			posY = 1.43;
	}
	ring.position.set(posX,posY,posZ);
}
function addButtons()
{
	addIronObjects();
	BarMagnet();
	UShapeMagnet();
	HorseMagnet();
	CylindericalMagnet();
	BallEndedMagnet();
	RingMagnet();
				
}
function animate()
{
	requestAnimationFrame(animate);
	render();

}
function render()
{

	//verticalMirror.renderWithMirror(verticalMirror);
	PIEsetExperimentTitle("Magnetic poles of common magnets ");
	PIErenderer.render(PIEscene,PIEcamera);
	
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
     
     addTable();
     initialiseControls();
	PIEcamera.position.y = 2;
	PIEcamera.position.z +=2.5;
	PIErenderer.setClearColor(0xFDF6D5);
	
	addIronObjects();
	BarMagnet();
	UShapeMagnet();
	HorseMagnet();
	CylindericalMagnet();
	BallEndedMagnet();
	RingMagnet();
	
	animate();
     
     //addTable();
}
