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
var coeffofriction;
var coeffofrictiondefault;
var coeffofrictionvalue;
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

var block1;
var wheel1;
var wheel2;
var wheel3;
var wheel4;
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

var echeck=0;
var ballx;
var bally;
var mynradius;




function myBallDrag(element, newpos)
{
	//alert(echeck);
	if(echeck==0)
	{
	b=0.05;
	
		//MyBallVY=0.0;
		var y=newpos.x;
		var e=0;
	var rad= itheta * Math.PI/180;
	var rad1= itheta1 * Math.PI/180;
	var c=0.2*Math.cos(rad);
    var d=0.2*Math.sin(rad);
	
	var w1x,w2x,w3x,w4x,w1y,w2y,w3y,w4y,w1z,w2z,w3z,w4z;
	
	
	w1x=y-c;
	w2x=y-c;
	w3x=y;
	w4x=y;
	var p=0;
	w1y=wheel1.position.y;
	w2y=wheel2.position.y;
	w3y=wheel3.position.y;
	w4y=wheel4.position.y;
	
	w1z=wheel1.position.z;
	w2z=wheel2.position.z;
	w3z=wheel3.position.z;
	w4z=wheel4.position.z;
	
    myBallX = newpos.x;
    if (w1x < 0.5) { e=c;p=d;myBallX = 0.5+0.09; w1x=0.5; w1y=1.557+(1.32-0.5)*Math.tan(rad); w2x=0.5;w2y=1.557+(1.32-0.5)*Math.tan(rad);w3x=0.5;w3y=1.557+(1.32-0.5)*Math.tan(rad);w4x=0.5;w4y=1.557+(1.32-0.5)*Math.tan(rad); myBallY =1.557+(1.32-0.5)*Math.tan(rad)-0.027;block.lookAt(new THREE.Vector3(-2.3,Math.tan(rad1)-0.4,0.2));PIErender();}
	
	
    else if (newpos.x >0.5+b&&newpos.x<1.32+b) { w1y=1.557+(1.32-w1x)*Math.tan(rad);w2y=1.557+(1.32-w2x)*Math.tan(rad);w3y=1.557+(1.32-w3x)*Math.tan(rad);w4y=1.557+(1.32-w4x)*Math.tan(rad);myBallY =1.557+(1.32+b-y)*Math.tan(rad)+b;block.lookAt(new THREE.Vector3(-2.3,Math.tan(rad1)-0.4,0.2));PIErender();  }
	else if(newpos.x >1.32+b&&newpos.x<2.71-b){e=c;myBallY=1.557+b;w1y=1.557;w2y=1.557;w3y=1.557;w4y=1.557;  block.lookAt(new THREE.Vector3(-1.0,100.0,0));  }
	else  if (newpos.x>2.71-b){e=-0.19;   myBallX=2.71-b;w1x=2.71,w2x=2.71;w3x=2.71;w4x=2.71;w1y=1.557;w2y=1.557;w3y=1.557;w4y=1.557;myBallY =1.557+b        }
	else  if (newpos.x >2.71-b) {e=0.2; w1y=1.557;w2y=1.557;w3y=1.557;w4y=1.557;myBallY =1.557+b;block.lookAt(new THREE.Vector3(-1.0,100.0,0)); }//(2.71-rightB+1.9)*Math.tan(rad1); }
    
	
	// else if (newpos.x <2.71&&newpos.x>rightB-1.9) { myBallY =0.767+(y-rightB+1.9)*Math.tan(rad1)+b;  }
  /*  if (newpos.y < (bottomB + myBallRadius)) { myBallY = (bottomB + myBallRadius); }
    else if (newpos.y > (topB - myBallRadius)) { myBallY = (topB  - myBallRadius); }
   
*/
 
 myBallZ = newpos.z;
    block.position.set(myBallX-0.03, myBallY, myBallZ);
	wheel1.position.set(w1x, w1y, w1z);
	wheel2.position.set(w2x, w2y, w2z);
	wheel3.position.set(w3x+e, w3y-p, w3z);
	wheel4.position.set(w4x+e, w4y-p, w4z);
	myBall.position.set(myBallX, myBallY, myBallZ);
	
	
	
	if(wheel4x<1.32)
	{
		phaset=0;
			phaseo=1;
			phasetr=0;
			
		
	}
	else if(wheel1x<1.32)
	{
		phaset=1;
			phaseo=0;
			phasetr=0;
			
		
	}
	else
	{
		phaset=2;
			phaseo=0;
			phasetr=0;
		
	}
	//alert(MyBallVY);
	
}
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
var surface;
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
	     myBall = new THREE.Mesh(new THREE.SphereGeometry(nradius, 32, 32), new THREE.MeshLambertMaterial({color:0xFF0000}));
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

function handlec()
{
	
	   
		   surface="cloth";
		   c=0.5;
		   PIEscene.remove(myFloor);
		geometry = new THREE.BoxGeometry( 7.1, 0.2, 7.0);
    material = new THREE.MeshLambertMaterial( {color: 0x00ff00} );
    myFloor  = new THREE.Mesh( geometry, material );

	myFloor.position.set(myBallX+3.1,bottomB - (wallThickness / 2)+1.5, 0.0); 
	//myFloor.position.set(myBallX+3.1,myBallY+7.0, myBallZ+2.0);   
   //myFloor.lookAt(new THREE.Vector3(7.0,5.8,2));
    coeffofrictionvalue=c;
    myFloor.receiveShadow = false;
    PIEaddElement(myFloor);
	PIErender();


}
function handleg()
{
	
	
	coeffofrictionvalue=0.6;
	surface="glass";
	 PIEscene.remove(myFloor);
		geometry = new THREE.BoxGeometry( 7.1, 0.2, 7.0);
    material = new THREE.MeshLambertMaterial( {color: 0xC0C0C0} );
    myFloor  = new THREE.Mesh( geometry, material );

	myFloor.position.set(myBallX+3.1,bottomB - (wallThickness / 2)+1.5, 0.0); 
	//myFloor.position.set(myBallX+3.1,myBallY+7.0, myBallZ+2.0);   
   //myFloor.lookAt(new THREE.Vector3(7.0,5.8,2));
    
    myFloor.receiveShadow = false;
    PIEaddElement(myFloor);
	
	PIErender();
	
	
	
}
function handlew()
{
	
	coeffofrictionvalue=0.4;
	surface="wood";
	
	
	  PIEscene.remove(myFloor);
		geometry = new THREE.BoxGeometry( 7.1, 0.2, 7.0);
    material = new THREE.MeshLambertMaterial( {color: 0x663300} );
    myFloor  = new THREE.Mesh( geometry, material );

	myFloor.position.set(myBallX+3.1,bottomB - (wallThickness / 2)+1.5, 0.0); 
	//myFloor.position.set(myBallX+3.1,myBallY+7.0, myBallZ+2.0);   
   //myFloor.lookAt(new THREE.Vector3(7.0,5.8,2));
    
    myFloor.receiveShadow = false;
    PIEaddElement(myFloor);
	
	PIErender();
}
function handlea(newValue)
{

  itheta=newValue;
  igaama=newValue;
  PIEscene.remove(iplane);
  
  
  
  
   geometry = new THREE.BoxGeometry( 1.0, 1.7, 0.2 );
    material = new THREE.MeshLambertMaterial( {color: 0xA9A9A9} );
    iplane = new THREE.Mesh( geometry, material );
	iplane.lookAt(new THREE.Vector3(1.0,Math.tan(rad),0));
	//iplane.lookAt(new THREE.Vector3(1.0,,0));
    iplane.position.set(0.7,2.2, 0.199);
  //  myRight.receiveShadow = false;
    PIEaddElement(iplane);
  
  

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
var disdefaut;
var dist;
function initialiseControlVariables()
{
    /* Labels */
    PosX="Kinetic energy of Ball";                  /* X Position Slider Label */
    PosY="Potential energy of Ball";                  /* Y Position Slider Label */
    VelX="Total energy of Ball";                 /* X Velocity Slider Label */
    VelY="Velocity of the ball";                 /* Y Velocity Slider Label */
    AccY="distance traveled";                 /* Y Acceleration Slider Label */
    mass="Mass of Cart";
	coeffofriction="Coefficient of friction";
	dist="Distancetravelled";
	angle="angle";
    /* Default (initial) Values */
    Xdefault=myCenterX;        /* X Position Slider Default Value */
    Ydefault=myCenterY;        /* Y Position Slider Default Value */
    VXdefault=0.1;             /* X Velocity Slider Default Value */
    VYdefault=0.1;             /* Y Velocity Slider Default Value */
    AYdefault=0.11;
	massdefault=2.0;
	massval=2.0;
	disdefaut=0.1;
    coeffofrictiondefault="surface";
	angledfault=30;
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
    PIEaddInputSlider(mass, massdefault, handleX, 2.0, 4.0, 0.5);
	PIEaddInputSlider(angle, angledefault, handlea, 30, 60, 15);
PIEaddInputCommand("click for glass surface",handleg);

PIEaddInputCommand("click for cloth surface",handlec);


PIEaddInputCommand("click for wood surface",handlew);


    //PIEaddInputSlider(coeffofriction,coeffofrictiondefault, handlec, 1, 3, 1);
    //PIEaddInputCheckbox(coeffofrictiondefault,"glass",handlec);
	//PIEaddInputCheckbox(coeffofrictiondefault,"wood",handlec);
	/* Create Display Panel */
    
	PIEaddDisplayText(AccY, AYdefault);
	  
    PIEaddDisplayText(VelY, VYdefault);
    PIEaddDisplayText(mass, massdefault);
	PIEaddDisplayText(coeffofriction,0.5);
	//PIEaddDisplayText(dist, disdefault);
}


/******************* End of GUI control objects code ***********************/

/******************* Load Experiment objects code ***********************/

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Friction and surface type   help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shws a cart moving down the wedge into frictional surface.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to two sliders.</p>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>mass&nbsp;&nbsp;:&nbsp;Controls the mass of the ball.</li>";
    helpContent = helpContent + "<li>coeffiectient of friction&nbsp;&nbsp;:&nbsp;Controls the coeffiectient of friction of the surface.</li>";
    helpContent = helpContent + "</ul>";
    
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the ball will move around the wedge following conservation of energy and it will retard once reaching the surface .</p>";
    helpContent = helpContent + "<p>The right hand panel now shows the values of the five experiment variables during animation.</p>";
	 //helpContent = helpContent + "<p>For better outcome we have assumed that both side walls are of elastic nature i.e balls will return with the same velocity they have collided .</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>distance travel&nbsp;&nbsp;:&nbsp;Shows the distance travelled.</li>";
  //  helpContent = helpContent + "<li>kinetic energy &nbsp;&nbsp;:&nbsp;Shows the kinetic energy of the ball.</li>";
    helpContent = helpContent + "<li>Velocity&nbsp;:&nbsp;Shows the velocity of the cart.</li>";
    //helpContent = helpContent + "<li>potential energy&nbsp;:&nbsp;Shows the potential energy of the ball.</li>";
//	.//he//lpContent = helpContent + "<li>total energy&nbsp;:&nbsp;Shows the total energy of the ball.</li>";
    helpContent = helpContent + "</ul>";

    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animaion by uing the speed control buttons</p>";
    helpContent = helpContent + "<h3>The drag and drop</h3>";
    helpContent = helpContent + "<p>You can also position the cart by dragging and dropping it. You can only do this only after resetting. This has been prevented in the animation stage.</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Friction and surface type concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shws a cart moving down the wedge into frictional surface.</p>";
    infoContent = infoContent + "<h3>Introduction</h3>";
    infoContent = infoContent + "<p>Friction is the force resisting the relative motion of solid surfaces, fluid layers, and material elements sliding against each other.[1] There are several types of friction:Dry friction resists relative lateral motion of two solid surfaces in contact. Dry friction is subdivided into static friction (stiction) between non-moving surfaces, and kinetic friction between moving surfaces.Fluid friction describes the friction between layers of a viscous fluid that are moving relative to each otherLubricated friction is a case of fluid friction where a lubricant fluid separates two solid surfacesFriction is not itself a fundamental force. Dry friction arises from a combination of inter-surface adhesion, surface roughness, surface deformation, and surface contamination. The complexity of these interactions makes the calculation of friction from first principles impractical and necessitates the use of empirical methods for analysis and the development of theory.Friction is a non-conservative force - work done against friction is path dependent. In the presence of friction, some energy is always lost in the form of heat. Thus mechanical energy is not conserved.</p>";
    
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
	
	PIEadjustCamera(2.9,1.765,9.0);
	PIEspotLight.position.set(1.0,2.0,5.0);
	PIEspotLight.castShadow=false;
	iplane.castShadow = false;
	block.castShadow=false;
	wheel1.castShadow=false;
	wheel2.castShadow=false;
	wheel3.castShadow=false;
	wheel3.castShadow=false;
	myBall.castShadow=false;
	//a.castShadow=false;
	//d.castShadow=false;
	//e.castShadow=false;
	//f.castShadow=false;
	PIErender();
	//
}

function initialiseOtherVariables()
{
    /* Initialise variables */
    myBallRadius = mySceneW/30.0-0.08;
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

var block;
function loadExperimentElements()
{
	
	setTimeout(set,1);
var geometry;
var material;
var loader;
var texture;
//itheta=90-itheta;
    PIEsetExperimentTitle("Friction and surface type ");
    PIEsetDeveloperName("Vaibhav Vasant");
    PIEhideControlElement();

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();

    /* initialise Other Variables */
    initialiseOtherVariables();

    myBall = new THREE.Mesh(new THREE.SphereGeometry(myBallRadius, 32, 32), new THREE.MeshLambertMaterial({color:0xFF0000}));
    myBall.position.set(0.9, 0.5, 0.2);
    myBall.castShadow = false;
    myBall.receiveShadow = true;
	
	
	wheel1 = new THREE.Mesh(new THREE.SphereGeometry(myBallRadius, 32, 32), new THREE.MeshLambertMaterial({color:0xededed}));
    wheel1.position.set(0.9, 0.5, 0.2);
    wheel1.castShadow = false;
    wheel1.receiveShadow = true;
    PIEaddElement(wheel1);
    
	wheel2 = new THREE.Mesh(new THREE.SphereGeometry(myBallRadius, 32, 32), new THREE.MeshLambertMaterial({color:0xededed}));
    wheel2.position.set(0.9, 0.5, 0.2);
    wheel2.castShadow = false;
    wheel2.receiveShadow = true;
    PIEaddElement(wheel2);
	wheel3 = new THREE.Mesh(new THREE.SphereGeometry(myBallRadius, 32, 32), new THREE.MeshLambertMaterial({color:0xededed}));
    wheel3.position.set(0.9, 0.5, 0.2);
    wheel3.castShadow = false;
    wheel3.receiveShadow = true;
    PIEaddElement(wheel3);
	wheel4 = new THREE.Mesh(new THREE.SphereGeometry(myBallRadius, 32, 32), new THREE.MeshLambertMaterial({color:0xededed}));
    wheel4.position.set(0.9, 0.5, 0.2);
    wheel4.castShadow = false;
    wheel4.receiveShadow = true;
    PIEaddElement(wheel4);
	
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
    geometry = new THREE.BoxGeometry( 7.1, 0.2, 7.0);
    material = new THREE.MeshLambertMaterial( {color: 0x54ff9f} );
    myFloor  = new THREE.Mesh( geometry, material );
myFloor.position.set(myBallX+3.1,myBallY+7.0, myBallZ+2.0);   
   myFloor.lookAt(new THREE.Vector3(7.0,5.8,2));
    
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
    geometry = new THREE.BoxGeometry( 0.4,0.8,0.5 );
    material = new THREE.MeshLambertMaterial( {color: 0x0000ff} );
    myLeft = new THREE.Mesh( geometry, material );
    myLeft.position.set(myCenterX, myCenterY-0.3, backB);
    myLeft.receiveShadow = false;
    PIEaddElement(myLeft);
	
	var q;
	  geometry = new THREE.BoxGeometry( 0.4,0.8,0.5 );
    material = new THREE.MeshLambertMaterial( {color: 0x0000ff} );
    q = new THREE.Mesh( geometry, material );
    q.position.set(0.4,1.0, 1.3)
    q.receiveShadow = false;
    PIEaddElement(q);
	
	
	var q1;
	  geometry = new THREE.BoxGeometry( 0.4,0.8,0.5 );
    material = new THREE.MeshLambertMaterial( {color: 0x0000ff} );
    q1 = new THREE.Mesh( geometry, material );
    q1.position.set(6.0,1.0, 1.3)
    q1.receiveShadow = false;
    PIEaddElement(q1);
	
	var q2;
	  geometry = new THREE.BoxGeometry( 0.4,0.8,0.5 );
    material = new THREE.MeshLambertMaterial( {color: 0x0000ff} );
    q2 = new THREE.Mesh( geometry, material );
    q2.position.set(6.0,1.0, 3.2)
    q2.receiveShadow = false;
    PIEaddElement(q2);
	
    /* Right */
	var u;
geometry = new THREE.BoxGeometry( wallThickness*2, 7, 100 );
    material = new THREE.MeshLambertMaterial( {color: 0x0000ff} );
    u = new THREE.Mesh( geometry, material );
    u.position.set(rightB-0.9, 0.1, 0.0);
    u.receiveShadow = false;
   // PIEaddElement(u);
	
		var u1;
geometry = new THREE.BoxGeometry( 2.8,  1, 80 );
    material = new THREE.MeshLambertMaterial( {color: 0x54ff9f} );
    u1 = new THREE.Mesh( geometry, material );
    u1.position.set(1.5, 3.2, 0.0);
    u1.receiveShadow = false;
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
    //PIEaddElement(myRight);
    /* Back */
    // material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: texture } );
    // geometry = new THREE.PlaneBufferGeometry( mySceneW * 2, mySceneH * 2 );
    geometry = new THREE.BoxGeometry( mySceneW * 4.1, mySceneH * 4, wallThickness+1.5);
    material = new THREE.MeshLambertMaterial( {color: 0x00bfff} );
    myBack = new THREE.Mesh( geometry, material );
    myBack.position.set(myCenterX, myCenterY-0.3, backB - (wallThickness / 2));
    myBack.castShadow = false;
    PIEaddElement(myBack);
	 var rad = itheta1 * Math.PI/180;
	
	 geometry = new THREE.BoxGeometry( 1.0, 1.7, 0.2 );
    material = new THREE.MeshLambertMaterial( {color: 0xA9A9A9} );
    iplane = new THREE.Mesh( geometry, material );
	iplane.lookAt(new THREE.Vector3(1.0,Math.tan(rad),0));
	//iplane.lookAt(new THREE.Vector3(1.0,,0));
    iplane.position.set(0.7,2.2, 0.199);
  //  myRight.receiveShadow = false;
    PIEaddElement(iplane);
	
		 geometry = new THREE.BoxGeometry( 0.4, 0.3, 0.15 );
    material = new THREE.MeshLambertMaterial( {color: 0xFF0000} );
    block = new THREE.Mesh( geometry, material );
	block.lookAt(new THREE.Vector3(1.0,Math.tan(rad),0));
    block.position.set(0.67,1.62, 0.199);
  //  myRight.receiveShadow = false;
  
    PIEaddElement(block);
	
	
PIEdragElement(block);
    PIEsetDrag(block, myBallDrag);
  
	
	var c;
	geometry = new THREE.BoxGeometry( 0.2, 1.15, 0.2);
	 material = new THREE.MeshLambertMaterial( {color: 0xA9A9A9} );
    c = new THREE.Mesh( geometry, material );
	c.lookAt(new THREE.Vector3(1.0,0,0));
    c.position.set(0.28,2.4, 0.605);
  //  myRight.receiveShadow = false;
    PIEaddElement(c);
	var d;
	geometry = new THREE.BoxGeometry( 1.0, 1.2, 0.4 );
	 material = new THREE.MeshLambertMaterial( {color: 0xA9A9A9} );
    d = new THREE.Mesh( geometry, material );
	d.lookAt(new THREE.Vector3(1.0,0,0));
    d.position.set(0.38,2.0, 0.205);
  //  myRight.receiveShadow = false;
    PIEaddElement(d);
    var e;
	geometry = new THREE.BoxGeometry( 1.0, 0.9, 0.3 );
	 material = new THREE.MeshLambertMaterial( {color: 0xA9A9A9} );
    e = new THREE.Mesh( geometry, material );
	e.lookAt(new THREE.Vector3(1.0,0,0));
    e.position.set(0.63,1.8, 0.205);
  //  myRight.receiveShadow = false;
    PIEaddElement(e);
	
	var f;
   geometry = new THREE.BoxGeometry( 1.0, 0.7, 0.5 );
	 material = new THREE.MeshLambertMaterial( {color: 0xA9A9A9} );
    f = new THREE.Mesh( geometry, material );
	f.lookAt(new THREE.Vector3(1.0,0,0));
    f.position.set(0.78,1.5, 0.205);
  //  myRight.receiveShadow = false;
    PIEaddElement(f);
	//myRight.position.set(rightB-1.5, myCenterY-0.5, 0.0);
	var g;
   geometry = new THREE.BoxGeometry( 1.0, 2.817, 0.2 );
	 material = new THREE.MeshLambertMaterial( {color: 0xA9A9A9} );
    g= new THREE.Mesh( geometry, material );
	g.lookAt(new THREE.Vector3(1.0,0,0));
    g.position.set(rightB-1.0,1.5, 0.2);
  //  myRight.receiveShadow = false;
    //PIEaddElement(g);
	
	var h;
   geometry = new THREE.BoxGeometry( 1.0, 2.1, 0.2 );
	 material = new THREE.MeshLambertMaterial( {color: 0xA9A9A9} );
    h= new THREE.Mesh( geometry, material );
	h.lookAt(new THREE.Vector3(1.0,0,0));
    h.position.set(rightB-1.2,1.5, 0.2);
  //  myRight.receiveShadow = false;
   // PIEaddElement(h);
		var i;
   geometry = new THREE.BoxGeometry( 1.0, 1.4, 0.2 );
	 material = new THREE.MeshLambertMaterial( {color: 0xA9A9A9} );
    i= new THREE.Mesh( geometry, material );
	i.lookAt(new THREE.Vector3(1.0,0,0));
    i.position.set(rightB-1.4,0.5, 0.2);
  //  myRight.receiveShadow = false;
    //PIEaddElement(i);
	
	
	var j;
   geometry = new THREE.BoxGeometry( 1.0, 0.7, 0.2 );
	 material = new THREE.MeshLambertMaterial( {color: 0xA9A9A9} );
    j= new THREE.Mesh( geometry, material );
	j.lookAt(new THREE.Vector3(1.0,0,0));
    j.position.set(rightB-1.6,0.5, 0.2);
  //  myRight.receiveShadow = false;
   // PIEaddElement(j);

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
 var o=0;
  function resetExperiment()
  {
    /* initialise Other Variables */
	echeck=0;
	o++;
    initialiseOtherVariables();
    surface="cloth";	

	myBallVX     = 0.0;
    myBallVY     = 0.0;
    myBallAX     = gravityX;
    myBallAY     = gravityY;
    mball=2;
	massval=2;
	//coeffofrictionvalue=0.2;
	//nradius=32;
	nradius=(mySceneW/30.0)-0.02+massval*0.01;
	b=0;
	var rad= itheta * Math.PI/180;
	var rad1= itheta1 * Math.PI/180;
    /* Reset Ball position */
	myBallX      = 1.09-Math.cos(rad);
    myBallY      = 0.8+Math.sin(rad);
   PIEchangeInputSlider(coeffofriction,0.3);
   PIEchangeInputSlider(mass,2.0);
   PIEscene.remove(myBall);
    
	var c=0.2*Math.cos(rad);
    var d=0.2*Math.sin(rad);
	//if(o<=2)
	//block.rotateX(rad);
	//block.rotateX(rad);
 //block.lookAt(new THREE.Vector3(1,Math.tan(rad1),0));
 coeffofrictionvalue=0.5;
 
 
 		   PIEscene.remove(myFloor);
		geometry = new THREE.BoxGeometry( 7.1, 0.2, 7.0);
    material = new THREE.MeshLambertMaterial( {color: 0x00ff00} );
    myFloor  = new THREE.Mesh( geometry, material );

	myFloor.position.set(myBallX+3.1,bottomB - (wallThickness / 2)+1.5, 0.0); 
	//myFloor.position.set(myBallX+3.1,myBallY+7.0, myBallZ+2.0);   
   //myFloor.lookAt(new THREE.Vector3(7.0,5.8,2));
    
    myFloor.receiveShadow = false;
    PIEaddElement(myFloor);
	var q;
		geometry = new THREE.BoxGeometry( 17.1, 0.7, 12.0);
    material = new THREE.MeshLambertMaterial( {color: 0xA9A9A9} );
    q  = new THREE.Mesh( geometry, material );

	q.position.set(myBallX+3.1,bottomB - (wallThickness / 2), 0.0); 
	//myFloor.position.set(myBallX+3.1,myBallY+7.0, myBallZ+2.0);   
   //myFloor.lookAt(new THREE.Vector3(7.0,5.8,2));
    
    q.receiveShadow = false;
    PIEaddElement(q);

	     myBall = new THREE.Mesh(new THREE.SphereGeometry(nradius, 32, 32), new THREE.MeshLambertMaterial({color:0xFF0000}));
   myBall.position.set(1.12-Math.cos(rad)+b+0.09, 1.8+Math.sin(rad)-0.02, 0.2);
   wheel1.position.set(1.12-Math.cos(rad)+b, 1.8+Math.sin(rad), 0.2);
   wheel2.position.set(1.12-Math.cos(rad)+b, 1.8+Math.sin(rad), 0.6);
   wheel3.position.set(1.12-Math.cos(rad)+b+c, 1.8+Math.sin(rad)-d, 0.2);
   wheel4.position.set(1.12-Math.cos(rad)+b+c, 1.8+Math.sin(rad)-d, 0.6);
   //block.lookAt(new THREE.Vector3(-0.7,Math.tan(rad1),0.2));
     block.lookAt(new THREE.Vector3(-2.3,Math.tan(rad1),0.2));
	//  wheel4.position.set(1.32, 1.557, 0.6);
	  //wheel4.position.set(1.12, 1.657, 0.6);
   block.position.set(0.67,2.62, 0.199);
	myBall.castShadow = false;
    myBall.receiveShadow = true;
    PIEaddElement(myBall);
	 //PIEdragElement(myBall);
   // PIEsetDrag(myBall, myBallDrag);
 
   
   //        myBall.position.set(rightB-1.20,1.95 , 0.0);
    /* Reset Wall position */
    /* Floor */
    
	myFloor.position.set(myBallX+3.1,bottomB - (wallThickness / 2)+1.5, 0.0); 
	//myFloor.position.set(myCenterX, bottomB - (wallThickness / 2), 0.0);
    /* Ceiling */
    myCeiling.position.set(myCenterX, topB+(wallThickness/2), 0.0);
    /* Left */
    myLeft.position.set(0.4,1.0, 3.2);
    /* Right */
    myRight.position.set(rightB-1.5, myCenterY-0.5, 0.2);
    /* Back */
    myBack.position.set(myCenterX, myCenterY, backB - (wallThickness / 2));
       
	   if(o==1)
	   resetExperiment();
	
	}
var changeX=1;
var count=0;
function updateExperimentElements(t, dt)
{
	o=0;
	e=0;
	var y1;
	check=false;
var newX;           
var newY;           
var newVX;          /* new X velocity of ball */
var newVY;          /* new Y velocity of ball */
        
var changeY;        /* Y boundary hit */
var boundaryT;      /* Boundary Event Time */
var tempT;          /* Temporary time */
var x,y;

var z1,c;
    /* Load Ball coordinates */
    myBallX = myBall.position.x;
    myBallY = myBall.position.y;
    myBallZ = myBall.position.z;

	
	var wheel1x=wheel1.position.x;
	 var wheel1y=wheel1.position.y;
	 var wheel1z=wheel1.position.z;
	
	
	var wheel2x=wheel2.position.x;
	 var wheel2y=wheel2.position.y;
	 var wheel2z=wheel2.position.z;
	 
	 
	var wheel3x=wheel3.position.x;
	 var wheel3y=wheel3.position.y;
	 var wheel3z=wheel3.position.z;
	 
	 
	var wheel4x=wheel4.position.x;
	 var wheel4y=wheel4.position.y;
	 var wheel4z=wheel4.position.z;
	 
	 
	var blockx=block.position.x;
	 var blocky=block.position.y;
	 var blockz=block.position.z;
	
	if(phaset==2&&count==1)
	{
		blocky+=0.15;
	    blockx+=0.03;
        blockz+=0.2;


		
        block.lookAt(new THREE.Vector3(-1.0,100.0,0));  
	}
	if(phaset==2)
	{
		
		myBallY=1.667;
		myBallZ=blockz;
		
	}
	
	//alert(wheel1y);
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
	//alert(phaset);
	//alert(wheel4y);
	if(wheel4y-y+0.03<=1.557)
	{
		//alert("FGH");
		var z=(wheel4y+0.03-1.557);
		
		boundaryT=(myBallVY-Math.sqrt((myBallVY*myBallVY-2*myBallAY*z)))/(myBallAY);




	
	phaseo=0;
	phaset=1;
	//alert(phaset);
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
	   var rad=itheta * Math.PI/180;
	y1=x;   
	changeX=0;
	//   y1=x*Math.cos(rad);
	c=y1*Math.sin(rad);
	   if(wheel1y-c+0.03<=1.557)
	{
		//alert("FGH");
		var z=(wheel1y+0.03-1.557);
		
		boundaryT=z/myBallVY;




	
	phaseo=0;
	phaset=2;
	count=1;
	//alert(phaset);
	}
	
	x=boundaryT*myBallVY;
	y1=x;
//	y1=x*Math.cos(rad);
	
      z1=y1*Math.cos(rad);
	  
	c=y1*Math.sin(rad);
	
	   var ang=(wheel1y-c-1.557)/(wheel3x+x-wheel1x-c);
//	block.lookAt(new THREE.Vector3(-1.0,100.0,0));	
		
		
		//alert(z1);
		
		
		
	}
	
	else if(phaset==2)
	{
		count=0;
		x=boundaryT*myBallVY+0.5*coeffofrictionvalue*myBallAY*boundaryT*boundaryT;
		y=0;
		
		changeX=1;
		var c=myBallVY+coeffofrictionvalue*myBallAY*boundaryT;
		
		if(c<=0)
		{
			
			boundaryT=(myBallVY)/(coeffofrictionvalue*myBallAY);
			phaset=0;
			phaseo=0;
			phasetr=1;
			myBallVY=0;
			echeck=1;
		}
		x=boundaryT*myBallVY+0.5*coeffofrictionvalue*myBallAY*boundaryT*boundaryT;
		if(phaset!=0)
		myBallVY=myBallVY+coeffofrictionvalue*myBallAY*boundaryT;
	}
	else if(phasetr==1)
	{
		x=0;
		c=0;
		y=0;
		
	}
	
	
	/*var c=myBallY-y;
	if(c<0.767)
	{
		//MyBallVY=Math.sqrt(MyBallVY*MyBallVY+2*MyballAY*(0.767-c));
		
	//	c=0.767;
	}*/
    //
	
	if(changeX==0)
	{
		myBall.position.set(myBallX+z1,myBallY-c , myBallZ);
		
		wheel1.position.set(wheel1x+z1,wheel1y-c, wheel1z);
	wheel2.position.set(wheel2x+z1,wheel2y-c, wheel2z);
	wheel3.position.set(wheel3x+x,wheel3y-y, wheel3z);
	wheel4.position.set(wheel4x+x,wheel4y-y, wheel4z);
		block.position.set(blockx+z1,blocky-c, blockz);
	}
	else
	{
		myBall.position.set(myBallX+x,myBallY-y , myBallZ);
	wheel1.position.set(wheel1x+x,wheel1y-y, wheel1z);
	wheel2.position.set(wheel2x+x,wheel2y-y, wheel2z);
	wheel3.position.set(wheel3x+x,wheel3y-y, wheel3z);
	wheel4.position.set(wheel4x+x,wheel4y-y, wheel4z);
	block.position.set(blockx+x,blocky-y, blockz);
	}
	
	

    /* Adjust Simulation time in case boundary event has occured */
    boundaryT *= 1000;
    if (boundaryT < dt) { PIEadjustAnimationTime(dt - boundaryT); }

	//alert(myBallVY);
	
    /* Finally Update the Display Panel with new values */
	PIEchangeDisplayText(VelY, myBallVY);
	var z=block.position.x-1.1;
	if(z<0)
		z=0;
	PIEchangeDisplayText(AccY,z );
     //  PIEchangeDisplayText(VelX, massval*myBallAY*(0.767-c+b)+0.5*massval*myBallVY*myBallVY);
	PIEchangeDisplayText(mass, massval);
//	var z=0;
	
  PIEchangeDisplayText(dist,z);
   PIEchangeDisplayText(coeffofriction,coeffofrictionvalue);
    //alert(myBallVY);

}

/******************* Update (animation changes) code ***********************/
