 var nradius;
 
 var b=0;
var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */
 var phaseo;
 var phaset;
 var phasetr;
var iplane;
var fill;
var con=[];
/* Room Variables */
var leftB;              /* Left Barrier */
var rightB;             /* Right Barrier */
var bottomB;            /* Bottom Barrier */
var topB;               /* Top Barrier */
var backB=-4.0;         /* Back Barrier */
var wallThickness;      /* Wall Thickness */

/* Room Objects */
var myFloor;            /* Floor */
var myCeiling;          /* Ceiling */
var myBack;             /* Back */
var myRight;            /* Right */
var myLeft;             /* Left */
var mball;
/* Ball variables */
var myBall;             /* Ball Object */
var myBallRadius;       /* Radius */
var myBallX;            /* X Position */
var myBallY;            /* Y Position */
var myBallVX;           /* X Velocity */
var myBallVY=0.0;           /* Y Velocity */
var myBallAX;           /* X Acceleration */
var myBallAY;           /* Y Acceleration */
var myBallZ;            /* Z Position for placing ball */

/* Parameters, Variables */
var gravityX;           /* X component of Gravity in m/S2 */
var gravityY;           /* Y component of Gravity in m/S2 */


var check=true;
var itheta;
var igaama;
var itheta1;
var igaama1;

var ithetadefault;
var igammadefault;


var ballx;
var bally;
var mynradius;




function myBallDrag(element, newpos)
{
	
	
		//MyBallVY=0.0;
		var y=newpos.x;
		
	var rad= itheta * Math.PI/180;
	var rad1= igaama * Math.PI/180;
    myBallX = newpos.x;
    if (newpos.x < 0.5+b) { myBallX = 0.5+b; myBallY =0.767+(1.1-0.5)*Math.tan(rad)+b;}
	
	
    else if (newpos.x >0.5+b&&newpos.x<1.1+b) { myBallY =0.767+(1.1+b-y)*Math.tan(rad)+b;  }
	else if(newpos.x >1.1+b&&newpos.x<rightB-1.9-b){myBallY=0.767+b;   }
	else  if (newpos.x >2.71-b) { myBallX = 2.71-b;myBallY =0.767+(2.71-rightB+1.9)*Math.tan(rad1); }
     else if (newpos.x <2.71&&newpos.x>rightB-1.9) { myBallY =0.767+(y-rightB+1.9)*Math.tan(rad1)+b;  }
  /*  if (newpos.y < (bottomB + myBallRadius)) { myBallY = (bottomB + myBallRadius); }
    else if (newpos.y > (topB - myBallRadius)) { myBallY = (topB  - myBallRadius); }
   
*/
 myBallZ = newpos.z;
    myBall.position.set(myBallX, myBallY, myBallZ);
	
	if(myBallX<1.1)
	{
		phaset=0;
			phaseo=1;
			phasetr=0;
			
		
	}
	else if(myBallX>rightB-1.9)
	{
		phaset=0;
			phaseo=0;
			phasetr=1;
			
		
	}
	else
	{
		phaset=1;
			phaseo=0;
			phasetr=0;
		
	}
	//alert(MyBallVY);
	
	
}

/******************* GUI control objects code ***********************/
var PosX;           /* X Position Slider Label */
var PosY;           /* Y Position Slider Label */
var VelX;           /* X Velocity Slider Label */
var VelY;           /* Y Velocity Slider Label */
var AccY;           /* Y Acceleration Slider Label */
var Xdefault;       /* X Position Slider Default Value */
var Ydefault;       /* Y Position Slider Default Value */
var VXdefault;      /* X Velocity Slider Default Value */
var VYdefault;      /* Y Velocity Slider Default Value */
var AYdefault;      /* Y Acceleration Slider Default Value */
var Xmin;           /* X Position Slider Minimum Value */
var Xmax;           /* X Position Slider Maximum Value */
var Ymin;           /* Y Position Slider Minimum Value */
var Ymax;           /* Y Position Slider Maximum Value */
var VXmin;          /* X Velocity Slider Minimum Value */
var VXmax;          /* X Velocity Slider Maximum Value */
var VYmin;          /* Y Velocity Slider Minimum Value */
var VYmax;          /* Y Velocity Slider Maximum Value */
var AYmin;          /* Y Acceleration Slider Minimum Value */
var AYmax;          /* Y Acceleration Slider Maximum Value */
var Xstep;          /* X Position Slider Step */
var Ystep;          /* Y Position Slider Step */
var VXstep;         /* X Velocity Slider Step */
var VYstep;         /* Y Velocity Slider Step */
var AYstep;         /* Y Acceleration Slider Step */

var mass;
var massdef;
var massval;
/*
 * This function handles the X position slider change
 * <p>
 * Updates the myBall position variable.
 * Effect is felt immediately.
 * <p>
 * @param newValue       New Value of the slider
 */

 function rad()
 {
	 var x=nradius;
	 nradius=(mySceneW/30.0)-0.02+massval*0.01;
	 myBallRadius=x;
	 
	 b=nradius-(mySceneW/30.0);
	 var d=nradius-myBallRadius;
	 var x=myBall.position.x;
	 var y=myBall.position.y;
	 var z=myBall.position.z;
	 PIEscene.remove(myBall);
	     myBall = new THREE.Mesh(new THREE.SphereGeometry(nradius, 32, 32), new THREE.MeshLambertMaterial({color:0xededed}));
   if(x<1.1)  
  myBall.position.set(x+d, y, z);

  else if(x>rightB+1.9)
	  myBall.position.set(x, y-d, z);
  else
	myBall.position.set(x, y+d, z);  
    myBall.castShadow = false;
    myBall.receiveShadow = true;
    PIEaddElement(myBall);
	 PIEdragElement(myBall);
    PIEsetDrag(myBall, myBallDrag);
	 PIErender();
 // resetExperiment();

 }
function handleX(newValue)
{
    massval=newValue;
	rad();
}

/*
 * This function handles the X Velocity slider change
 * <p>
 * Updates the myBall velocity variable.
 * Effect is felt from the next animation frame.
 * <p>
 * @param newValue       New Value of the slider
 */


/*
 * This function handles the Y Velocity slider change
 * <p>
 * Updates the myBall velocity variable.
 * Effect is felt from the next animation frame.
 * <p>
 * @param newValue       New Value of the slider
 

/*
 * This function handles the Y acceleration (gravity) slider change
 * <p>
 * Updates the myBall acceleration variable.
 * Effect is felt from the next animation frame.
 * <p>
 * @param newValue       New Value of the slider
 */


function initialiseControlVariables()
{
    /* Labels */
    PosX="Kinetic energy of Ball";                  /* X Position Slider Label */
    PosY="Potential energy of Ball";                  /* Y Position Slider Label */
    VelX="Total energy of Ball";                 /* X Velocity Slider Label */
    VelY="Velocity of the ball";                 /* Y Velocity Slider Label */
    AccY="Acc due to gravity";                 /* Y Acceleration Slider Label */
    mass="Mass of Ball";
    /* Default (initial) Values */
    Xdefault=myCenterX;        /* X Position Slider Default Value */
    Ydefault=myCenterY;        /* Y Position Slider Default Value */
    VXdefault=0.1;             /* X Velocity Slider Default Value */
    VYdefault=0.1;             /* Y Velocity Slider Default Value */
    AYdefault=-9.8;
	massdefault=2.0;
	massval=2.0;
	/* Y Acceleration Slider Default Value */
ithetadefault=60;
igammadefault=60;
    /* Slider Limits */
    Xmin=leftB+myBallRadius;   /* X Position Slider Minimum Value */
    Xmax=rightB-myBallRadius;  /* X Position Slider Maximum Value */
    Ymin=bottomB+myBallRadius; /* Y Position Slider Minimum Value */
    Ymax=topB-myBallRadius;    /* Y Position Slider Maximum Value */
    VXmin=-1.0;                /* X Velocity Slider Minimum Value */
    VXmax= 1.0;                /* X Velocity Slider Maximum Value */
    VYmin=-1.0;                /* Y Velocity Slider Minimum Value */
    VYmax= 1.0;                /* Y Velocity Slider Maximum Value */
    AYmin=-15.0;               /* Y Acceleration Slider Maximum Value */
    AYmax= -9.8;                /* Y Acceleration Slider Minimum Value */

    /* Slider Steps */
    Xstep=0.1;                 /* X Position Slider Step */
    Ystep=0.1;                  /* Y Position Slider Step */
    VXstep=0.1;                 /* X Velocity Slider Step */
    VYstep=0.1;                 /* Y Velocity Slider Step */
    AYstep=-0.1;               /* Y Acceleration Slider Step */
}


function initialiseControls()
{
    initialiseControlVariables();
	
	
    /* Create Input Panel */
    PIEaddInputSlider(mass, massdefault, handleX, 2.0, 7.0, 0.5);

    
    /* Create Display Panel */
    
	PIEaddDisplayText(AccY, AYdefault);
	PIEaddDisplayText(PosX, 0.1);
    PIEaddDisplayText(PosY, 2.0*AYdefault*(myBall.position.y-0.767));
    PIEaddDisplayText(VelX, 2.0*AYdefault*(myBall.position.y-0.767));
    PIEaddDisplayText(VelY, VYdefault);
    PIEaddDisplayText(mass, massdefault);
}


/******************* End of GUI control objects code ***********************/

/******************* Load Experiment objects code ***********************/

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Mechanical – potential plus kinetic - energy   help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shws a ball moving along two different wedges.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to two sliders.</p>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>mass&nbsp;&nbsp;:&nbsp;Controls the mass of the ball.</li>";
    helpContent = helpContent + "<li>acc due to gravity&nbsp;&nbsp;:&nbsp;Controls the acceleration due to gravity of the ball.</li>";
    helpContent = helpContent + "</ul>";
    
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the ball will move around the wedge following conservation of energy.</p>";
    helpContent = helpContent + "<p>The right hand panel now shows the values of the five experiment variables during animation.</p>";
	 helpContent = helpContent + "<p>For better outcome we have assumed that both side walls are of elastic nature i.e balls will return with the same velocity they have collided .</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>acc due to gravity&nbsp;&nbsp;:&nbsp;Shows the acceleration due to gravity.</li>";
    helpContent = helpContent + "<li>kinetic energy &nbsp;&nbsp;:&nbsp;Shows the kinetic energy of the ball.</li>";
    helpContent = helpContent + "<li>Velocity&nbsp;:&nbsp;Shows the velocity of the ball.</li>";
    helpContent = helpContent + "<li>potential energy&nbsp;:&nbsp;Shows the potential energy of the ball.</li>";
	helpContent = helpContent + "<li>total energy&nbsp;:&nbsp;Shows the total energy of the ball.</li>";
    helpContent = helpContent + "</ul>";

    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animaion by uing the speed control buttons</p>";
    helpContent = helpContent + "<h3>The drag and drop</h3>";
    helpContent = helpContent + "<p>You can also position the ball by dragging and dropping it. You can only do this only after resetting. This has been prevented in the animation stage.</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Mechanical – potential plus kinetic - energy concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shws a ball moving along two different wedges.</p>";
    infoContent = infoContent + "<h3>Introduction</h3>";
    infoContent = infoContent + "<p>The kinetic energy of an object is the energy that it possesses due to its motion. It is defined as the work needed to accelerate a body of a given mass from rest to its stated velocity. .</p>";
    infoContent = infoContent + "<p>Potential energy is the stored energy of an object. It is the energy by virtue of an object's position relative to other objects. Potential energy is often associated with restoring forces such as a spring or the force of gravity</p>";
    infoContent = infoContent + "<p>Mechanical energy is sum of both kinetic energy and potential energy.</p>";
    
    infoContent = infoContent + "<h3>The conservation of energy</h3>";
    infoContent = infoContent + "<p>In physics, the law of conservation of energy states that the total energy of an isolated system remains constant—it is said to be conserved over time. Energy can neither be created nor destroyed; rather, it transforms from one form to another.</p>";
    infoContent = infoContent + "<p>This Experiment Kinetic energy is changing to potential energy and vice versa.</p>";
    infoContent = infoContent + "<p>There is no friction on the surface. At the bottom most position potential energy is 0 and it is maximum at the highest point of wedge. Similarly kinetic energy is maximum at the bottom most point and 0 at topmost point.  </p>";
    
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
    myBallZ    = -2.0;
	mball=2.0;
	
}

function set ()
{
	
	PIEadjustCamera(1.4,1.765,8.0);
	PIEspotLight.position.set(2.0,2.0,1.5);
	PIEspotLight.castShadow=false;
	if(PIEanimationON == false)
	{
		myBallVY=0;
		
	}
//	alert(PIEanimationON);
	PIErender();
	
}

function initialiseOtherVariables()
{
    /* Initialise variables */
    myBallRadius = mySceneW/30.0;
	nradius=myBallRadius;
    wallThickness = 0.20;
 phaseo=1;
  phaset=0;
  phasetr=0;
    /* Gravity */
    gravityX = 0.0;
    gravityY = -9.8;
 itheta=60;
igaama=60;

itheta1=90-itheta;
igaama1=90-igaama;
    /* Barriers */
    leftB=mySceneTLX;
    rightB=mySceneBRX;
    bottomB=mySceneBRY;
    topB=mySceneTLY;
	bally=bottomB - (wallThickness / 2);
}


function loadExperimentElements()
{
	
	setInterval(set,100);
var geometry;
var material;
var loader;
var texture;
//itheta=90-itheta;
    PIEsetExperimentTitle("Mechanical – potential plus kinetic - energy");
    PIEsetDeveloperName("Vaibhav Vasant");
    PIEhideControlElement();

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();

    /* initialise Other Variables */
    initialiseOtherVariables();

    /* Create Ball and add it to scene */
    /* Allow Dragging of the ball */
    myBall = new THREE.Mesh(new THREE.SphereGeometry(myBallRadius, 32, 32), new THREE.MeshLambertMaterial({color:0xededed}));
    myBall.position.set(0.9, 0.5, 0.2);
    myBall.castShadow = false;
    myBall.receiveShadow = true;
    PIEaddElement(myBall);

    PIEdragElement(myBall);
    PIEsetDrag(myBall, myBallDrag);

    /* Initialise Wall variables */
    /* All walls extend beynd the room size in both directions */
    /* Floor */
    // loader = new THREE.TextureLoader();
    // texture = loader.load( '../PIE/images/hardwood2_diffuse.jpg' );
    // texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    // texture.repeat.set( 25, 25 );
    // texture.anisotropy = 16;
    // material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: texture } );
    // geometry = new THREE.PlaneBufferGeometry( mySceneW * 2, backB * 2 );
	var triangleGeometry = new THREE.Geometry(); 
triangleGeometry.vertices.push(new THREE.Vector3(0.5, 0.2, 0.4));  
triangleGeometry.vertices.push(new THREE.Vector3(0.5, 0.5, 0.4)); 
triangleGeometry.vertices.push(new THREE.Vector3( 0.7, 0.1, 0.4));
triangleGeometry.vertices.push(new THREE.Vector3(0.7,  0.4, 0.4));  
triangleGeometry.vertices.push(new THREE.Vector3(1.2, 0.9, 0.4)); 
triangleGeometry.vertices.push(new THREE.Vector3( 1.0, 0.7, 0.4));

triangleGeometry.faces.push(new THREE.Face3(0, 1, 3));
triangleGeometry.faces.push(new THREE.Face3(3, 4, 2));
// Points 1,4,3 and 6 form a rectangle which I'm trying to construct using triangles 0,2,5 and 0,3,5
triangleGeometry.faces.push(new THREE.Face3(0, 1, 5));
triangleGeometry.faces.push(new THREE.Face3(1, 2, 5));

var triangleMaterial = new THREE.MeshBasicMaterial({ 
color:0xaaFFFF, 
side:THREE.DoubleSide 
});

var triangleMesh = new THREE.Mesh(triangleGeometry, triangleMaterial); 
triangleMesh.position.set(1, 2.0, 0.0); 
//PIEaddElement(triangleMesh); 
    geometry = new THREE.BoxGeometry( 7.5, 1.5, 7.0);
    material = new THREE.MeshLambertMaterial( {color: 0x54ff9f} );
    myFloor  = new THREE.Mesh( geometry, material );
myFloor.position.set(myBallX,myBallY, myBallZ);   
   myFloor.lookAt(new THREE.Vector3(6.0,5.8,10));
    
    myFloor.receiveShadow = false;
    PIEaddElement(myFloor);
    /* Ceiling */
	
	var x;
	
    geometry = new THREE.BoxGeometry( 0.5, 0.5, 3);
    material = new THREE.MeshLambertMaterial( {color: 0xaa00aa} );
    x  = new THREE.Mesh( geometry, material );
x.position.set();   
 //  myFloor.lookAt(new THREE.Vector3(0,0,0));
	
	PIEaddElement(x);
	
	
	
	
	
    geometry = new THREE.BoxGeometry( 0.5, 0.5, 3);
    material = new THREE.MeshLambertMaterial( {color: 0xffffff} );
    myCeiling = new THREE.Mesh( geometry, material );
	 myCeiling.position.set(myCenterX, topB+(wallThickness/2), 0.0);
//    myCeiling.position.set(0.9, 0.9, 1.0);
    myFloor.receiveShadow = false;
   // PIEaddElement(myCeiling);
    /* Left */
    geometry = new THREE.BoxGeometry( wallThickness*2,7,100 );
    material = new THREE.MeshLambertMaterial( {color: 0x0000ff} );
    myLeft = new THREE.Mesh( geometry, material );
    myLeft.position.set(myCenterX, myCenterY-0.3, backB - (wallThickness / 2));
    myLeft.receiveShadow = false;
    //PIEaddElement(myLeft);
    /* Right */
	var u;
geometry = new THREE.BoxGeometry( wallThickness*2, 7, 100 );
    material = new THREE.MeshLambertMaterial( {color: 0x0000ff} );
    u = new THREE.Mesh( geometry, material );
    u.position.set(rightB-0.9, 0.1, 0.0);
    u.receiveShadow = false;
    //PIEaddElement(u);
	
		var u1;
geometry = new THREE.BoxGeometry( 2.8,  1, 80 );
    material = new THREE.MeshLambertMaterial( {color: 0x54ff9f} );
    u1 = new THREE.Mesh( geometry, material );
    u1.position.set(1.5, 3.2, 0.0);
    //u1.receiveShadow = false;
   // PIEaddElement(u1);
	
	//var p1=igamma1 * Math.PI/180;
	igaama1*=-1;
    geometry = new THREE.BoxGeometry( 1.0,  2.0, 0.2 );
    material = new THREE.MeshLambertMaterial( {color: 0xA9A9A9} );
    myRight = new THREE.Mesh( geometry, material );
	myRight.lookAt(new THREE.Vector3(1.0,Math.tan(igaama1* Math.PI/180),0));
	//myRight.lookAt(new THREE.Vector3(1.0,Math.tan(p1),0));
myRight.position.set(rightB-3.5, myCenterY, 0.2);

	//  myRight.position.set(0.9, 1.5, 0.2);
    myRight.receiveShadow = false;
    PIEaddElement(myRight);
    /* Back */
    // material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: texture } );
    // geometry = new THREE.PlaneBufferGeometry( mySceneW * 2, mySceneH * 2 );
    geometry = new THREE.BoxGeometry( mySceneW * 4.1, mySceneH * 4-0.2,1.0 );
    material = new THREE.MeshLambertMaterial( {color: 0x87CEEB} );
    myBack = new THREE.Mesh( geometry, material );
    myBack.position.set(myCenterX, myCenterY-0.3, 3.0);
    myBack.castShadow = false;
    PIEaddElement(myBack);
	 var rad = itheta1 * Math.PI/180;
	
	 geometry = new THREE.BoxGeometry( 1.0, 3.0, 0.2 );
    material = new THREE.MeshLambertMaterial( {color: 0xA9A9A9} );
    iplane = new THREE.Mesh( geometry, material );
	iplane.lookAt(new THREE.Vector3(1.0,Math.tan(rad),0));
    iplane.position.set(1.0,0.5, 0.199);
  //  myRight.receiveShadow = false;
    PIEaddElement(iplane);
	
	var c;
	geometry = new THREE.BoxGeometry( 1.0, 2.70, 0.2 );
	 material = new THREE.MeshLambertMaterial( {color: 0xA9A9A9} );
    c = new THREE.Mesh( geometry, material );
	c.lookAt(new THREE.Vector3(1.0,0,0));
    c.position.set(0.24,0.5, 0.205);
  //  myRight.receiveShadow = false;
    PIEaddElement(c);
	var d;
	geometry = new THREE.BoxGeometry( 1.0, 2.1, 0.2 );
	 material = new THREE.MeshLambertMaterial( {color: 0xA9A9A9} );
    d = new THREE.Mesh( geometry, material );
	d.lookAt(new THREE.Vector3(1.0,0,0));
    d.position.set(0.40,0.5, 0.205);
  //  myRight.receiveShadow = false;
    PIEaddElement(d);
    var e;
	geometry = new THREE.BoxGeometry( 1.0, 1.4, 0.2 );
	 material = new THREE.MeshLambertMaterial( {color: 0xA9A9A9} );
    e = new THREE.Mesh( geometry, material );
	e.lookAt(new THREE.Vector3(1.0,0,0));
    e.position.set(0.60,0.5, 0.205);
  //  myRight.receiveShadow = false;
    PIEaddElement(e);
	
	var f;
   geometry = new THREE.BoxGeometry( 1.0, 0.7, 0.2 );
	 material = new THREE.MeshLambertMaterial( {color: 0xA9A9A9} );
    f = new THREE.Mesh( geometry, material );
	f.lookAt(new THREE.Vector3(1.0,0,0));
    f.position.set(0.80,0.5, 0.205);
  //  myRight.receiveShadow = false;
    PIEaddElement(f);
	//myRight.position.set(rightB-1.5, myCenterY-0.5, 0.0);
	var g;
   geometry = new THREE.BoxGeometry( 1.0, 2.817, 0.2 );
	 material = new THREE.MeshLambertMaterial( {color: 0xA9A9A9} );
    g= new THREE.Mesh( geometry, material );
	g.lookAt(new THREE.Vector3(1.0,0,0));
    g.position.set(rightB-1.0,0.5, 0.2);
  //  myRight.receiveShadow = false;
    PIEaddElement(g);
	
	var h;
   geometry = new THREE.BoxGeometry( 1.0, 2.1, 0.2 );
	 material = new THREE.MeshLambertMaterial( {color: 0xA9A9A9} );
    h= new THREE.Mesh( geometry, material );
	h.lookAt(new THREE.Vector3(1.0,0,0));
    h.position.set(rightB-1.2,0.5, 0.2);
  //  myRight.receiveShadow = false;
    PIEaddElement(h);
		var i;
   geometry = new THREE.BoxGeometry( 1.0, 1.4, 0.2 );
	 material = new THREE.MeshLambertMaterial( {color: 0xA9A9A9} );
    i= new THREE.Mesh( geometry, material );
	i.lookAt(new THREE.Vector3(1.0,0,0));
    i.position.set(rightB-1.4,0.5, 0.2);
  //  myRight.receiveShadow = false;
    PIEaddElement(i);
	
	
	var j;
   geometry = new THREE.BoxGeometry( 1.0, 0.7, 0.2 );
	 material = new THREE.MeshLambertMaterial( {color: 0xA9A9A9} );
    j= new THREE.Mesh( geometry, material );
	j.lookAt(new THREE.Vector3(1.0,0,0));
    j.position.set(rightB-1.6,0.5, 0.2);
  //  myRight.receiveShadow = false;
    PIEaddElement(j);

	/*var geom = new THREE.Geometry();
var v1 = new THREE.Vector3(1,0.78,1);
var v2 = new THREE.Vector3(1.3,0.8,1.1);
var v3 = new THREE.Vector3(1.4,1.3,0);

geom.vertices.push(v1);
geom.vertices.push(v2);
geom.vertices.push(v3);

geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
geom.computeFaceNormals();

var mesh= new THREE.Mesh( geom, new THREE.MeshNormalMaterial() );
PIEaddElement(mesh);
*/
    initialiseControls();
    /* Reset all positions */
    resetExperiment();

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
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
	   myBallVX     = 0.0;
    myBallVY     = 0.0;
    myBallAX     = gravityX;
    myBallAY     = gravityY;
    mball=2;
	massval=2;
	//nradius=32;
	b=0;
	var rad= itheta * Math.PI/180;
    /* Reset Ball position */
	myBallX      = 1.09-Math.cos(rad);
    myBallY      = 0.8+Math.sin(rad);
PIEchangeInputSlider(AccY,-9.8);
PIEchangeInputSlider(mass,2.0);
 PIEscene.remove(myBall);
	     myBall = new THREE.Mesh(new THREE.SphereGeometry(nradius, 32, 32), new THREE.MeshLambertMaterial({color:0xededed}));
   myBall.position.set(1.09-Math.cos(rad)+b, 0.8+Math.sin(rad), 0.0);
    myBall.castShadow = false;
    myBall.receiveShadow = true;
    PIEaddElement(myBall);
	 PIEdragElement(myBall);
    PIEsetDrag(myBall, myBallDrag);
 
   
   //        myBall.position.set(rightB-1.20,1.95 , 0.0);
    /* Reset Wall position */
    /* Floor */
    myFloor.position.set(myCenterX, bottomB - (wallThickness / 2), 0.0);
    /* Ceiling */
    myCeiling.position.set(myCenterX, topB+(wallThickness/2), 0.0);
    /* Left */
    myLeft.position.set(0.1,1.0, 0.0);
    /* Right */
    myRight.position.set(rightB-1.5, myCenterY-0.5, 0.2);
    /* Back */
    myBack.position.set(myCenterX, myCenterY, backB - (wallThickness / 2));
}
var changeX=1;
//var count=0;
function updateExperimentElements(t, dt)
{
	check=false;
var newX;           /* new X position of ball */
var newY;           /* new Y position of ball */
var newVX;          /* new X velocity of ball */
var newVY;          /* new Y velocity of ball */
        /* X boundary hit */
var changeY;        /* Y boundary hit */
var boundaryT;      /* Boundary Event Time */
var tempT;          /* Temporary time */
var x,y;
    /* Load Ball coordinates */
    myBallX = myBall.position.x;
    myBallY = myBall.position.y;
    myBallZ = myBall.position.z;

    /* Intialise for boundary detection */
    //changeX   = 1;
    changeY   = 1;
    boundaryT = dt / 1000.0;    /* convert to seconds */
//alert(boundaryT);





		//PIEadjustCamera(1.4,1.765,6.0);





    if(phaseo==1)
	{
		
		
    newY =  myBallVY * boundaryT - 0.5 * myBallAY * boundaryT * boundaryT;

	
	var rad=itheta * Math.PI/180;
	 x=newY/Math.tan(rad);
	//var y=newY*Math.sin(itheta);
	 y=newY;
//alert(newY);
	
	//alert("mher");
	
	if(myBallY-y-b<=0.767)
	{
		
		var z=(myBallY-b-0.767);
		
		boundaryT=(myBallVY-Math.sqrt((myBallVY*myBallVY-2*myBallAY*z)))/(myBallAY);




	
	phaseo=0;
	phaset=1;
	
	}
	newY =  myBallVY * boundaryT - 0.5 * myBallAY * boundaryT * boundaryT;
	 myBallVY = (myBallVY - myBallAY * boundaryT);
	 x=newY/Math.tan(rad);
	 y=newY;
	 
	 
	}
	else if(phaset==1)
	{
		
		x=boundaryT*myBallVY;
		y=0;
		
		if(myBallX+x+b>=rightB-1.9)
		{
			
			boundaryT=(rightB-1.9-(myBallX+b))/myBallVY;
			phaset=0;
			phaseo=0;
			phasetr=1;
			
		}
		x=boundaryT*myBallVY;
		
		
	}
	else if(phasetr==1)
	{
		
		newY =  myBallVY * boundaryT+0.5 * myBallAY * boundaryT * boundaryT;
var rad=igaama * Math.PI/180;
	 x=newY/Math.tan(rad);
	
	//alert(x);
	//var y=newY*Math.sin(itheta);
	 y=-1.0*newY;
	 
	 
//alert(newY);
	
	var z=myBallVY * boundaryT + 0.5 * myBallAY * boundaryT * boundaryT;
	if(myBallY-y>=1.95)
	{
	  var q=1.95-myBallY;
		boundaryT=(-1.0*myBallVY+Math.sqrt((myBallVY*myBallVY+2*myBallAY*q)))/(myBallAY);
		phasetr=2;
		
		
		
		
	}	
	
	
	
	else if(z<=0)
	{
			boundaryT=(0-myBallVY)/myBallAY;
			
			phasetr=2;
			
	}
	

	newY =  myBallVY * boundaryT + 0.5 * myBallAY * boundaryT * boundaryT;
	 myBallVY = (myBallVY + myBallAY * boundaryT);
	 x=newY/Math.tan(rad);
	 y=-1.0*newY;
	
		
		
		
	}
	
    else if(phasetr==2)
	{
		  newY =  myBallVY * boundaryT - 0.5 * myBallAY * boundaryT * boundaryT;
var rad=igaama * Math.PI/180;
	 x=-1.0*newY/Math.tan(rad);
	//var y=newY*Math.sin(itheta);
	 y=newY;
//alert(newY);
	
	
	
	if(myBallY-y-b<=0.767)
	{
		
		var z=(myBallY-b-0.767);
		

  boundaryT=(myBallVY-Math.sqrt((myBallVY*myBallVY-2*myBallAY*z)))/(myBallAY);
//myBallAY=-9.8;

	
	phaseo=0;
	phasetr=3;
	
	}
	newY =  myBallVY * boundaryT - 0.5 * myBallAY * boundaryT * boundaryT;
	 myBallVY = (myBallVY - myBallAY * boundaryT) * changeY;
	 x=-1.0*newY/Math.tan(rad);
	 y=newY;
		 
		
	}
	else if(phasetr==3)
	{
		
		x=boundaryT*myBallVY*-1.0;
		y=0;
		
		if(myBallX+x-b<=1.1)
		{
			
			boundaryT=(myBallX-b-1.1)/myBallVY;
			phaset=0;
			phaseo=0;
			phasetr=4;
			
		}
		x=boundaryT*myBallVY*-1.0;
		
		
	}
	else if(phasetr==4)
	{
		
			newY =  myBallVY * boundaryT+0.5 * myBallAY * boundaryT * boundaryT;
var rad=itheta * Math.PI/180;
	 x=newY/Math.tan(rad);
	x*=-1;
	//alert();
	//var y=newY*Math.sin(itheta);
	 y=-1.0*newY;
	 
	 
	 

	
	var z=myBallVY * boundaryT + 0.5 * myBallAY * boundaryT * boundaryT;
//var c=0;
    if(myBallY-y>=0.767+(1.1-0.45)*Math.tan(rad))
    {
		changeX=0;
	    var q=0.767+(1.1-0.45)*Math.tan(rad)-myBallY;
		boundaryT=(-1.0*myBallVY+Math.sqrt((myBallVY*myBallVY+2*myBallAY*q)))/(myBallAY);
		phasetr=0;
			phaseo=1;
	//		c=1;
		//	alert(phaseo);
    }
	
	else if(z<=0)
	{
			boundaryT=(0-myBallVY)/myBallAY;
			
			phasetr=0;
			phaseo=1;
			
	}
	

	newY =  myBallVY * boundaryT + 0.5 * myBallAY * boundaryT * boundaryT;
	 //if(c==0)
	 myBallVY = (myBallVY + myBallAY * boundaryT);
     //else
	 //myBallVY=0;
	 x=newY/Math.tan(rad);
	 x*=-1;
	 y=-1.0*newY;
	
		
		
	}
   
    myBallAX = myBallAX;
    myBallAY = myBallAY;
 //alert(myBallY-0.767);
    /* Set Ball position */
	var c=myBallY-y;
	if(c<0.767)
	{
		//MyBallVY=Math.sqrt(MyBallVY*MyBallVY+2*MyballAY*(0.767-c));
		
	//	c=0.767;
	}
    myBall.position.set(myBallX+x, c, myBallZ);

    /* Adjust Simulation time in case boundary event has occured */
    boundaryT *= 1000;
    if (boundaryT < dt) { PIEadjustAnimationTime(dt - boundaryT); }

	//alert(myBallVY);
	
    /* Finally Update the Display Panel with new values */
	PIEchangeDisplayText(VelY, myBallVY);
	PIEchangeDisplayText(AccY, 9.8);
    PIEchangeDisplayText(PosX, 0.5*massval*myBallVY*myBallVY);//
    PIEchangeDisplayText(PosY, massval*myBallAY*(0.767-c+b));
    PIEchangeDisplayText(VelX, massval*myBallAY*(0.767-c+b)+0.5*massval*myBallVY*myBallVY);
	PIEchangeDisplayText(mass, massval);
  
   
    //alert(myBallVY);

}

/******************* Update (animation changes) code ***********************/
