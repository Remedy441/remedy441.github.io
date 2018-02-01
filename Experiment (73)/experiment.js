var bowler,myBall;
var posX,VelX;
var Xdefault,VXdefault;
var handleX,handleVX;
var Xmin,VXmin;
var Xmax,VXmax;
var Xstep,VXstep;
var myBallX=-7,myBallY=1,myBallZ=0,myBallVX=3.5*5;
var initialX=2;
var myBallAX=0;
var rightB=14;
var myBallRadius=0.8,launcher;
var leftB=-8;
var count=0;
var bottomB=0;
var topB=0;
var angle,angleL,angleR;
var temp=0;
var changeX;
var velArrow;
var arrow;

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Force can change direction of speed help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows change in direction of a ball by the force applied (hitting the ball)</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to one slider.</p>";
    helpContent = helpContent + "<p>You can control :</p>";
    helpContent = helpContent + "<li>VX&nbsp;:&nbsp;Controls the X velocity of the ball.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the ball will move around obeyng the laws of physics.</p>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animaion by uing the speed control buttons</p>";
    helpContent = helpContent + "<h3>Drag of ball</h3>";
    helpContent = helpContent + "<p>You can also position the ball by dragging it. You can only do this in the setup stage. This has been prevented in the animation stage.</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Force can change direction of speed concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows change in direction of a ball by the force applied (hitting the ball)</p>";
    infoContent = infoContent + "<h3>Collision</h3>";
    infoContent = infoContent + "<p>When an object collides with another object  due to the force applied , the direction of velocity normal to the surface is reversed.</p>";
    infoContent = infoContent + "<p>When the ball collides with the  Wall, the velocity in the X direction reverses </p>";
    infoContent = infoContent + "<p>When the force reverses direction, it's magnitude remains the same.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}


function initialiseControlVariables()
{

  /* Labels */
  PosX="X";                  /* X Position Slider Label */
  VelX="SPEED";                 /* X Velocity Slider Label */

  /* Default (initial) Values */
  Xdefault=1;        /* X Position Slider Default Value */
  VXdefault=3.5;             /* X Velocity Slider Default Value */

  /* Slider Limits */
  Xmin=1;   /* X Position Slider Minimum Value */
  Xmax=5;  /* X Position Slider Maximum Value */

  VXmin=1.0;                  /* X Velocity Slider Minimum Value */
  VXmax= 5.0;                /* X Velocity Slider Maximum Value */ 

  /* Slider Steps */
  Xstep=0.1;                 /* X Position Slider Step */
  VXstep=0.1;                 /* X Velocity Slider Step */
  //PIEaddInputSlider(PosX, Xdefault, handleX, Xmin, Xmax, Xstep);
  PIEaddInputSlider(VelX, VXdefault, handleVX, VXmin, VXmax, VXstep);

}

function initialiseControls()
{

  initialiseControlVariables();

}

function handleX(newValue)
{

  myBallX = (newValue-1)*5 - 7;
  initialX = myBallX;
  myBall.position.set(myBallX, myBallY, myBallZ);
  bowler.position.set(myBallX-1.5, myBallY+3, myBallZ);

  PIErender();
}

function handleVX(newValue) {
  myBallVX = newValue*5;
  //velArrow.scale.y  = 1 + (myBallVX )/20;
  bowler.position.set(myBallX-1.2, myBallY+3, myBallZ);
  // angleL = -1.2-((Math.floor((newValue-1)/0.5))*0.2);
  // angleR =  0.7+((Math.floor((newValue-1)/0.5))*0.1);

  // angleL = ((-5 - myBallVX*2)*Math.PI)/90;
  // angleR = ((5 + myBallVX*2)*Math.PI)/90;
  // console.log(myBallVX + " " + angleL + " " + angleR);
  // angle=1;
  // count=0;
  // temp=0;
  
  initialiseOtherVariables();
  PIErender();
  
}

function myBallDrag(element, newpos)
{
  myBallX = newpos.x;
  var tempB = 3.6* (((25 + 5*5*2)*Math.PI)/90);

  if (newpos.x < (leftB + myBallRadius))
  { 
    myBallX = (leftB + myBallRadius) 
  }
  else if (newpos.x > (rightB - myBallRadius -tempB)) 
  { 
    myBallX = (rightB - myBallRadius -tempB)
  }
  myBallY = 1;

  myBallZ = 0;
  myBall.position.set(myBallX, myBallY, myBallZ);
  bowler.position.set(myBallX-1.2, myBallY+3, myBallZ);
  initialX = myBallX;

  myBallVX = Math.abs(myBallVX);
  initialiseOtherVariables();

}


function loadExperimentElements() {                         // loads the elements required to setuop the experiment


    PIEsetExperimentTitle("Force can change direction of speed ");
    PIEsetDeveloperName("Dattatreya Garimella");

    /* Create Floor and add it to scene */
  var floor = new THREE.Mesh(new THREE.PlaneGeometry(50,50,1), new THREE.MeshPhongMaterial({color:0xF5986E}));
  floor.rotation.x = -0.5* Math.PI;
  floor.castShadow = false;
  floor.receiveShadow = false;
  var floorTextureLoader = new THREE.TextureLoader();
  floorTextureLoader.load( 'textures/woodFloor_light.jpeg', function  (texture) {    
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 5,5 );
    floor.material.map = texture;
    floor.material.needsUpdate = true;
    PIErender();
  } );
  PIEaddElement(floor);                         // creating a floor with wood texture 
  PIEsetAreaOfInterest(-25,15,35,-3);
    //console.log(PIEcamera.position);

    /* Create Wall and add it to scene */
    var Wall = new THREE.Mesh(new THREE.BoxGeometry(1,4,18), new THREE.MeshPhongMaterial({overdraw:0.5}));
    Wall.position.set(14.5,2,0);
    Wall.castShadow = false;
    Wall.receiveShadow = false;
    // var wallTextureLoader = new THREE.TextureLoader();
    // wallTextureLoader.load( 'textures/brickwork-texture.jpg', function  (texture) {    
    //     texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    //     texture.repeat.set( 5,2 );
    //     Wall.material.map = texture;
    //     Wall.material.needsUpdate = true;
    //     PIErender();
    // } );
PIEaddElement(Wall);                        // creating a wall at right-side  

  //   var wallbumpLoader = new THREE.TextureLoader();
  //   wallbumpLoader.load('textures/brickwork-bump-map.jpg', function ( texture ) {

  //       texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  //       texture.repeat.set( 5,2 );

  //     //PIEaddElement(mesh);
  //     Wall.material.bumpMap = texture;
  //     Wall.material.bumpScale = 0.95;
  //     Wall.material.needsUpdate = true;
  //     console.log("Added");

  //     PIErender();
  // }); 
// PIEadjustCamera(10,10,35);
// PIEturnCamera(3,5,0);                                           // adjusting and rotating camera to have clear view to the user

/* Create a group named bowler with all elements to hit a ball */
bowler = new THREE.Group();

var geometry = new THREE.BoxGeometry( 0.4, 4, 0.4);
var material = new THREE.MeshLambertMaterial( {color: 0xaa0000} );
var leftCube = new THREE.Mesh(geometry,material);
bowler.add(leftCube);
leftCube.position.set(0,-1.8,-1.2);
leftCube.name = "leftCube";                               // bowler's left supporting cube

geometry = new THREE.BoxGeometry( 0.4,4,0.4);
material = new THREE.MeshLambertMaterial( {color: 0xaa0000} );
var rightCube = new THREE.Mesh(geometry,material);
rightCube.position.set(0,-1.8,1.2);
bowler.add(rightCube);
rightCube.name = "rightCube";                                 // bowler's right supporting cube

geometry = new THREE.CylinderGeometry( 0.1, 0.1, 2.8, 32 );
material = new THREE.MeshBasicMaterial( {color: 0xeeeeee} );
holder = new THREE.Mesh( geometry, material );
holder.position.set(0,0,0);
holder.rotateX(1.5);
bowler.add(holder);
holder.name = "holder";                                     //  bowler's holder to hold the cubes,hitter



launcher = new THREE.Object3D();
launcher.position.set(0,0,0);
geometry = new THREE.BoxGeometry( 0.8,4,0.8);
material = new THREE.MeshLambertMaterial( {color: 0x37474f} );
var hitter = new THREE.Mesh(geometry,material);
hitter.name = "hitter";
launcher.add(hitter);
hitter.position.set(0,-1.6,0);
bowler.add(launcher);                                         // creating and setting the hitter to hit the ball
    //launcher.position.set(2.33,0.45,-1.7);
    //launcher.rotation.z -=0.1;

    PIEaddElement(bowler);
    bowler.position.set(-8.6,4,0);                          // adding bowler to the scene

    //bowler.rotation.y = -0.5* Math.PI;
    //console.log(bowler.children);

    /* Create Wall and add it to scene */

    myBall = new THREE.Mesh(new THREE.SphereGeometry(0.8, 32, 32), new THREE.MeshPhongMaterial({color:0xededed}));
    myBall.position.set(-7, 1, 0);
    bowler.position.set(-7-1.2, 1+3, 0);
    var loader = new THREE.TextureLoader();
    loader.load('textures/NewTennisBallColor.jpg', function ( texture ) {             //adiing textures to ball


      //PIEaddElement(mesh);
      myBall.material.map = texture;
      myBall.material.needsUpdate = true;
      console.log("Added");
      
      PIErender();
    }); 

    var bumpLoader = new THREE.TextureLoader();
    bumpLoader.load('textures/TennisBallBump.jpg', function ( texture ) {


      //PIEaddElement(mesh);
      myBall.material.bumpMap = texture;
      myBall.material.bumpScale = 0.5;
      myBall.material.needsUpdate = true;
      console.log("Added");
      
      PIErender();
    }); 

    //launcher.rotation.z = -2.4;
    myBall.castShadow = false;
    myBall.receiveShadow = false;
    myBall.name = "myBall";
    var dir = new THREE.Vector3( 1,0,0 );
    dir.normalize();
    
    var origin1 = new THREE.Vector3( 0,2,4);
    
    var length = 1;
    var hex = 0xffff00;
    velArrow = new THREE.ArrowHelper( dir, origin1, 1.5, hex,0.5,0.5 );
    velArrow.scale.set(0,0,0);
     arrow = new THREE.Object3D();
    arrow.add(velArrow);
    arrow.position.set(-7,1,0);
    PIEaddElement(arrow);
    //myBall.add(velArrow);
    PIEaddElement(myBall);
    /* Allow Dragging of the ball */
    PIEdragElement(myBall);
    PIEsetDrag(myBall, myBallDrag);

    /* Instantiate experiment controls */
    myBallVX = 3.5*5;

    initialiseControls();
    initialiseOtherVariables();
  PIErenderer.setClearColor(0x87ceeb, 1);

  initialiseHelp();                                                 // help to understand the experiment functioning
    initialiseInfo()                                                  // information regarding the present experiment

    
  }

  function initialiseOtherVariables () {

    angle = 1;
    myBallVX = Math.abs(myBallVX);
    angleL = ((-25 - myBallVX*2)*Math.PI)/90;
    angleR = ((25 + myBallVX*2)*Math.PI)/90;

    console.log( angleL+" " + angleR);
    console.log(Math.PI*55/90);
    changeX = 1;
    initialX = myBall.position.x;
    myBallX = myBall.position.x;
    launcher.rotation.z = 0;
    velArrow.rotation.y = 0;
    velArrow.scale.set(0,0,0);
    arrow.position.set(myBall.position.x, myBall.position.y,myBall.position.z);
    //bowler.position.set(myBallX-1.2, myBallY+3, myBallZ);
  }

  function resetExperiment() {

  // initialiseControls();
  myBall.position.set(-7, 1, 0);
  bowler.position.set(-7-1.2, 1+3, 0);
  myBallVX = 3.5*5;
  PIEchangeInputSlider("VX", 3.5); 
  launcher.rotation.z = -0.0;
  initialiseOtherVariables();
}

function updateExperimentElements(t,dt) {

  var newX, tempT;

  var  boundaryT = dt / 1000.0;                     /* convert to seconds */
  var arrowVel = (myBallVX*4/5);
  //myBallVX = myBallVX;
  
  // if ( (myBallVX < 0 )&& (myBall.position.x < bowler.position.x + 1.6 + 3.6*Math.sin(launcher.rotation.z)  ))
  //   {
  //     console.log(newX + " ** " + (bowler.position.x )+" " + initialX +" "+ launcher.position.x);

  //     PIEstopAnimation();
  //   }

  


  if(angle == 1)
  {
    if ( launcher.rotation.z > angleL)
    {
      launcher.rotation.z -= (boundaryT*Math.abs(myBallVX))/3.6;           // angleL,angle=1 => angle upto where the hitter should slide backward before hitting
    }
    else
    {
      angle = 2;                                                            // angle=2 => sliding angle upto hitting of the ball
    }
    //console.log("Angle1 " + launcher.rotation.z);
  }

  if( angle == 2)
  {
    if (launcher.rotation.z < 0)
    {
      launcher.rotation.z += (boundaryT*Math.abs(myBallVX))/3.6;
    }
    else
    {
      angle = 3;                                                            // angle=3 => sliding angle from hitting to forward direction
    }

    //console.log("Angle2 "+ launcher.rotation.z);
  }

  if( angle == 3)
  {
    if (launcher.rotation.z < angleR)
    {
      launcher.rotation.z += (boundaryT*Math.abs(myBallVX))/3.6;
    }
    else
    {
      angle = 4;                                                  // angle4 => sliding angle from top to origin of the hiiter
    }

    //console.log("Angle2 "+ launcher.rotation.z);
    
  }

  if( angle == 4)
  {
    if (launcher.rotation.z > 0)
    {
      launcher.rotation.z -= (boundaryT*Math.abs(myBallVX))/3.6;
    }
    else
    {
      angle = 0;
      launcher.rotation.z = 0;
    }
    //console.log("Angle2 "+ launcher.rotation.z);
  }

  if (angle ==3 || angle ==4 || angle ==0)
  {
    myBall.rotation.z -= myBallVX*0.01;

    /* Compute new myBall position and check for boundary event */

    newX = myBallX + boundaryT*myBallVX;
    if (newX >= (rightB - myBallRadius))
    {
      tempT = ((rightB - myBallRadius) - myBallX) / myBallVX;    /* Ball hits wall */


      if (tempT == boundaryT)
      {
        changeX = -1;
      }
      if (tempT < boundaryT)
      {
        boundaryT = tempT;
        changeX = -1;
      }
      if (changeX == -1)
      {
        velArrow.rotation.y = Math.PI;
      }
    }

    /* Recompute Position using boundaryT */
    myBallX +=  myBallVX*boundaryT;
    arrow.position.x += arrowVel*boundaryT;
    velArrow.scale.set(1, 1 + Math.abs(myBallVX)/20,1)  ;
    if(changeX == -1)
    {
      arrow.position.x = myBallX;
    }
    myBallVX *= changeX;
    arrowVel *= changeX;
    changeX=1;
    //console.log(myBallX + " " + myBallVX);

    if( myBallX < initialX )
    {
      velArrow.scale.set(0,0,0);

      myBall.position.x = initialX;
      initialiseOtherVariables();
      //myBallX = initialX;
      console.log(initialX);
      PIEstopAnimation();
    }

  //  var x1 = bowler.position.x + 0.4 + 3.6*Math.sin(launcher.rotation.z);
  //  var y1 = bowler.position.y - 3.6*Math.cos(launcher.rotation.z);
  //  var x = newX;
  //  var y = myBall.position.y;
  //  var d = Math.sqrt((x-x1)*(x-x1) + (y-y1)*(y-y1));
  // //console.log("* "+ x +" "+ y + " "+x1+" "+y1);
  // console.log(d);
  // if (d-0.45 < myBallRadius && myBallVX<0)
  // {
  //   PIEstopAnimation();
  // }
}





  //console.log(myBallVX + " " + angleL + " " + angleR + " " + launcher.rotation.z);

   
  /* Set Ball position */

  myBall.position.set(myBallX, myBallY, myBallZ);
  
  
  /* Adjust Simulation time in case boundary event has occured */
  boundaryT *= 1000;

  if (boundaryT < dt)
  {
    PIEadjustAnimationTime(dt - boundaryT); 
  }





}
