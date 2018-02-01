

var mySceneTLX;       
var mySceneTLY;       
var mySceneBRX;       
var mySceneBRY;       
var mySceneW;         
var mySceneH;         
var myCenterX;        
var myCenterY;        


var leftB;              /* Left Barrier */
var rightB;             /* Right Barrier */
var bottomB;            /* Bottom Barrier */
var topB;               /* Top Barrier */
var backB=-4.0;         /* Back Barrier */
var wallThickness;      /* Wall Thickness */

var collision;
var corestitution;
/*my variables*/
 var boxx;
 var boxy;
 var boxz;
 
 var curboxx;
 var boxv;
 var nboxv;
 var curboxy;
 var curboxz;
 var nboxx;
 var nboxy;
 var nboxz;
 
 var ncurboxx;
 
 var ncurboxy;
 var ncurboxz;
 
 
var m1;

var m2;  
 
 var walll;
 var wallr;



/* Room Objects */
var myFloor;            /* Floor */
var myCeiling;          /* Ceiling */
var myBack;             /* Back */
var myRight;            /* Right */
var myLeft;
var box;             /* Left */
var nbox;
var heading;

var nvel;        
var vel;         
var  nexvel;     
var nnewvel;     
var mass;        
var nmass;       
var nvelv;          
var velv;           
var nexvelv;        
var nnewvelv;       
var massv;          
var nmassv;          
var veldefault;            
var    nveldefault;             
 var massdefault;
var nmassdefault;
   
function handleVY(newValue)
{
    boxv = newValue;
}
function handleVX(newValue)
{
    nboxv = newValue;
}
function handlem(newValue)
{
	
	massv=newValue;
	
}
function handlenm(newValue)
{
	
	nmassv=newValue;
	
}
function handlec(newValue)
{
	
	corestitution=newValue;
	//alert(corestiturion);
}




function initialiseControlVariables()
{
    /* Labels */
    vel="Velocity of green box";                
    nvel="Velocity of red box";                 
    mass="mass of green box";              
    nmass="mass of red box";                 
           heading="coefficient of restitution";
    veldefault=3.0;            
    nveldefault=-3.0;           
    corestitutiondef=0.3;
 massdefault=5.0;
 nmassdefault=4.0;
    /* Slider Limits */
    
   
}


function initialiseControls()
{
    initialiseControlVariables();
    /* Create Input Panel */
    PIEaddInputSlider(vel,veldefault, handleVY,-5.0 ,5.0, 0.1);
  PIEaddInputSlider(nvel,nveldefault, handleVX,-5.0 ,5.0, 0.1);
  PIEaddInputSlider(mass,massdefault, handlem,1.0 ,10.0, 0.2);
  PIEaddInputSlider(nmass,nmassdefault, handlenm,1.0 ,10.0, 0.2);
  PIEaddInputSlider(heading,corestitutiondef,handlec,0.0 ,1.0, 0.1);
    /* Create Display Panel */
   PIEaddDisplayText(vel, veldefault);
   PIEaddDisplayText(nvel, nveldefault);
    PIEaddDisplayText(mass, massdefault);
    PIEaddDisplayText(nmass, nmassdefault);
   PIEaddDisplayText(heading,corestitutiondef);
}


/******************* End of GUI control objects code ***********************/

/******************* Load Experiment objects code ***********************/

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Collding boxes experiment help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shws two boxes colliding inelastically with each other constrained by two walls ehich are perfectly elastic in nature</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to four sliders.</p>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
      helpContent = helpContent + "<li>velocity of green box&nbsp;&nbsp;:&nbsp;Shows velocity of green box.</li>";
    helpContent = helpContent + "<li>velocity of red box&nbsp;&nbsp;:&nbsp;Shows velocity of red box</li>";
    helpContent = helpContent + "<li>mass of red box&nbsp;:&nbsp;Shows the mass of red box.</li>";
    helpContent = helpContent + "<li>mass of green box&nbsp;:&nbsp;Shows the mass of green box.</li>";
	helpContent = helpContent + "<li>Crestitution&nbsp;:&nbsp;show coefficient of restitution</li>";
    helpContent = helpContent + "</ul>";
    
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the boxes will move and collide around obeyng the laws of physics.</p>";
    helpContent = helpContent + "<p>The right hand panel now shows the values of the four experiment variables during animation.</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>velocity of green box&nbsp;&nbsp;:&nbsp;Shows velocity of green box.</li>";
    helpContent = helpContent + "<li>velocity of red box&nbsp;&nbsp;:&nbsp;Shows velocity of red box</li>";
    helpContent = helpContent + "<li>mass of red box&nbsp;:&nbsp;Shows the mass of red box.</li>";
    helpContent = helpContent + "<li>mass of green box&nbsp;:&nbsp;Shows the mass of green box.</li>";
    helpContent = helpContent + "</ul>";
  
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animaion by uing the speed control buttons</p>";
  
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Collding boxes experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shws two boxes colliding inelastically with each other constrained by two walls ehich are perfectly elastic in nature</p>";
    infoContent = infoContent + "<h3>Collision</h3>";
    infoContent = infoContent + "<p>When an object collides with a surface, the direction of velocity normal to the surface is reversed.</p>";
    infoContent = infoContent + "<p>At the time of impact, the boxes are deformed because of the force exerted by each other. This deformation can not be easily observed with a rigid box.</p>";
    
    infoContent = infoContent + "<p>When the object collides with the left or the right wall, the velocity in the X direction reverses while the velocity in the Y direction reamains the same.</p>";
    infoContent = infoContent + "<p>When the object collides with the top or the bottom wall, the velocity in the Y direction reverses while the velocity in the Y direction reamains the same.</p>";
    infoContent = infoContent + "<h3>The coefficient of restitution</h3>";
    infoContent = infoContent + "<p>When the velocity reverses direction, it is not necessary that it's magnitude remains the same. Coeficient of restitution is ratio of veocity of seperation and velocity of approach</p>";
    infoContent = infoContent + "<p>The boxes may not retain it's original shape and texture. .</p>";
    infoContent = infoContent + "<p>Some of the energy is lost because of the deformation of the ball. The energy loss means that the kinetic energy of the ball will be reduced after impact.</p>";
    infoContent = infoContent + "<p>The coefficient of restitution specifies how much of the velocity will be retained after impact.</p>";
    infoContent = infoContent + "<p>The coefficient of restitution does not affect te velocity in the direction parallel to the impact.</p>";
    infoContent = infoContent + "<p>In this case when the boxes collides with the left or the right wall, the magnitude of the velocity in the X direction will be reversed as we are assuming the coefficient of restitution to be 1. The magnitude and sign in Y direction remains the same.</p>";
    infoContent = infoContent + "<p>In this case when the two boxes collide they start moving as per the value of coeficient of restitution.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene()
{
	collision=0;
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
}

function initialiseOtherVariables()
{
	
	
	
	collision=0;
	corestitution=0.3;
    /* Initialise variables */
    myBallRadius = mySceneW/30.0;
    wallThickness = 0.20;

    
    /* Barriers */
    leftB=mySceneTLX;
    rightB=mySceneBRX;
    bottomB=mySceneBRY;
    topB=mySceneTLY;
	
	boxx=leftB;
	boxy=myCenterY-0.35;
	boxz=0;
	
	nboxx=rightB+(wallThickness/2);
	nboxy=myCenterY-0.35;
	nboxz=0;
	curboxx=boxx;
	curboxy=boxy;
	curboxz=boxz;
	
	ncurboxx=nbox;
	ncurboxy=nboxy;
	ncurboxz=nboxz;
	boxv=veldefault;
	nboxv=nveldefault;
	massv=massdefault;
	nmassv=nmassdefault;
	
}


function loadExperimentElements()
{
var geometry;
var material;
var loader;
var texture;


    PIEsetExperimentTitle("Colliding boxes experiment");
    PIEsetDeveloperName("Vaibhav Vasant");
    PIEhideControlElement();

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();

    /* initialise Other Variables */
    initialiseOtherVariables();

  

  
   geometry = new THREE.BoxGeometry(  mySceneW+2.0,2.1, 3.0);
    material = new THREE.MeshLambertMaterial( {color: 0xaaaaaa} );
    myFloor  = new THREE.Mesh( geometry, material );
    //myFloor.lookAt(new THREE.Vector3(0,1,0));
    myFloor.position.set(myCenterX, bottomB - (wallThickness / 2), 0.0);
    myFloor.receiveShadow = true;
     PIEaddElement(myFloor);

	
	
	 geometry = new THREE.BoxGeometry( 0.4,0.4,0.4 );
    material = new THREE.MeshLambertMaterial( {color: 0x00ff00} );
    box= new THREE.Mesh( geometry, material );
    box.position.set(boxx+1.0, boxy,boxz);
    myFloor.receiveShadow = true;
    PIEaddElement(box);
 
	
   
	
    geometry = new THREE.BoxGeometry( 0.4, 0.4, 0.4 );
    material = new THREE.MeshLambertMaterial( {color: 0xaa0000} );
    nbox = new THREE.Mesh( geometry, material );
   nbox.position.set(nboxx-1.0,nboxy,nboxz);
    nbox.receiveShadow = true;
    PIEaddElement(nbox);
   
    geometry = new THREE.BoxGeometry( mySceneW * 3, mySceneH * 3, wallThickness );
    material = new THREE.MeshLambertMaterial( {color: 0xffffaa} );
    myBack = new THREE.Mesh( geometry, material );
    myBack.position.set(myCenterX, myCenterY, backB - (wallThickness / 2));
    myBack.receiveShadow = true;
    PIEaddElement(myBack);

	
	
	
	geometry = new THREE.BoxGeometry( 0.4, 3.8, 0.4 );
    material = new THREE.MeshLambertMaterial( {color: 0x00ffaa} );
    walll = new THREE.Mesh( geometry, material );
   walll.position.set(boxx-0.8,nboxy,nboxz);
    //walll.receiveShadow = true;
    PIEaddElement(walll);
	
	
	
	
	geometry = new THREE.BoxGeometry( 0.4, 3.8, 0.4 );
    material = new THREE.MeshLambertMaterial( {color: 0xaaaa00} );
    wallr = new THREE.Mesh( geometry, material );
   wallr.position.set(nboxx+0.8,nboxy,nboxz);
    //wallr.receiveShadow = true;
    PIEaddElement(wallr);
	
	
	
	
	
	
    /* Instantiate experiment controls */
    initialiseControls();

    /* Reset all positions */
   resetExperiment();
    initialiseOtherVariables();
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

//initialiseControlVariables();
//initialiseScene();
    /* Initialise Ball variables */
//alert(corestitutiondef);
PIEchangeDisplayText(vel, veldefault);
   PIEchangeDisplayText(nvel,nveldefault);
   PIEchangeDisplayText(mass,massdefault); 
    PIEchangeDisplayText(nmass,nmassdefault);
PIEchangeDisplayText(heading,corestitutiondef);
    
	
    
 box.position.set(boxx+1.0, boxy,boxz);
   nbox.position.set(nboxx-1.0,nboxy,nboxz);
    myBack.position.set(myCenterX, myCenterY, backB - (wallThickness / 2));
    myFloor.position.set(myCenterX, bottomB - (wallThickness / 2), 0.0);
    /* Reset Wall position */
    /* Floor */
   
}

/******************* End of Reset Experiment code ***********************/

/******************* Update (animation changes) code ***********************/

/**
 * This function updates the location of all experiment elements during each animation frame.
 * <p>
 * The function receives both animation time as well as the dt (time difference) from last call.
 * This function is expected to implement the laws of physics to update the position.
 * This function will also update any output variables/graphs
 * <p>
 * Important Note : Boundary Events
 * <p>
 * During any physics simulation you will reach a boundary event.
 * In our case, the boundary even is the ball hitting any of the walls.
 * The boundary event typically changes the sign of velocity/acceleration.
 * The boundary event is most likely to happen in the middle of the two calls.
 * The library allows the experiment to change the simulation time by processing partial time.
 * This function can call a library function with the time remaining to be processed before exiting.
 * <p>
 * @param  t       The time in milliseconds elapsed since the beginning of animation cycle
 * @param  dt      The time in milliseconds elapsed since the last acll to this function
 */
function updateExperimentElements(t, dt)
{

//   var newx;

     var nnewx;
      curboxx=box.position.x;
	  curboxy=box.position.y;
	  curboxz=box.position.z;
	  ncurboxx=nbox.position.x;
	  ncurboxy=nbox.position.y;
	  ncurboxz=nbox.position.z;
	  
	  var boundaryT,boundaryt1;
	  var tempt;
	  boundaryT = dt / 1000.0;
	  boundaryt1=boundaryT;
	  var x1;
	  var x2;
	  var x3;
	  x1=0;
	  x2=0;
	  x3=0;
	  newx= curboxx+boxv*boundaryT;
	   var changel=0;
	   var changer=0;
	   
	  if(newx<=(boxx-0.4))
	  { 
          tempt=((boxx-0.4)-curboxx)/boxv;

		   changel=1;
		
	  }
	  
	  if(boundaryT>=tempt)
		  boundaryT=tempt;
	  
	  nnewx=ncurboxx+(nboxv*boundaryT);
	  
	  
	   if(nnewx>=nboxx+0.4)
	   {
		   tempt=((nboxx+0.4)-ncurboxx)/nboxv;
		
		 		 changer=1;
	   }
	   if(boundaryT>=tempt)
		  boundaryT=tempt;
	  
	  	     newx= curboxx+boxv*boundaryT;
	  nnewx=ncurboxx+(nboxv*boundaryT);
	   
	  if(nnewx-0.2<=newx+0.2)
	  {
		   collision+=0.1;
           
		  
	   }
	 
	  
	   if(boundaryT>=tempt)
		  boundaryT=tempt;
	
	 if(collision>0)
	  {
		  
		   //boxv=(massv*boxv+nmassv*nboxv)/(massv+nmassv);
		//boxv=boxv;
		//alert(corestitution);
		var x=(boxv*(massv+(massv*corestitution))+nboxv*(nmassv-(massv*corestitution)))/(massv+nmassv);
		var y= (boxv*(massv-(nmassv*corestitution))+nboxv*(nmassv+(nmassv*corestitution)))/(massv+nmassv);
		
		  nnewx=newx+0.4;
	//	  alert(x);
//		  alert(y);
		  boxv=y;
		  nboxv=x;
	  
		  if(boxv!=nboxv)
		  {
			  collision=0;
		//	  nnewx=newx+0.2;
			//  newx-=0.21
		  }
	  }
	  
	   if(changer==1&&changel==1)
	  {
		  //both box reached there respective limit
		  boxv*=-1.0;
		  nboxv*=-1.0;
	  }
	  else
	  {
	   if(changel==1&&collision>0)
	  {
		  //both box are moving togrther and have reahed threshold
		  boxv*=-1.0;
		  nboxv*=-1.0;
	  }
	  
	   if(changel==1&&collision==0)
		  boxv*=-1.0;
	 

	 
	   if(changer==1&&collision>0)
	  {
		  boxv*=-1.0;
		  nboxv*=-1.0;
		  
	  
	  }
	   if(changer==1&&collision==0)
		  nboxv*=-1.0;
	  }
	  box.position.set(newx,curboxy,curboxz);
	  nbox.position.set(nnewx,ncurboxy,ncurboxz);


    boundaryT *= 1000;
    if (boundaryT < dt)
		{ PIEadjustAnimationTime(dt - boundaryT); }
PIEchangeDisplayText(heading,corestitution);
	PIEchangeDisplayText(vel, boxv);
   PIEchangeDisplayText(nvel,nboxv);
   PIEchangeDisplayText(mass,massv); 
    PIEchangeDisplayText(nmass,nmassv);
 
    
    
}

/******************* Update (animation changes) code ***********************/
