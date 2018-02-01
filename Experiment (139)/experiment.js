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
var text2 ;
var count = 0;
var t1,t2;
var control=0;
var dnt=0;

var c1=0,sp1=1,bl1=0,dt1=0;

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Position of an Object wih Mirror experiment help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows an Object Placed on a Chessboard contains green Grass , Mirror around it.</p>";
    
    helpContent = helpContent + "<h3>Starting the Experiment</h3>";
     helpContent = helpContent + "<p>Click on start button to start the experiment or to activate the mouse and keyboard controls.</p>";
     helpContent = helpContent + "<p>You can chose different objects by clicking the buttons at the right side of illusion.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p style = 'color: green'>You can control the object using Mouse</p></br>";
    helpContent = helpContent + "<p style = 'color: green'>Up Arrow : to Move the object Forward</p>";
    helpContent = helpContent + "<p style = 'color: green'>Down Arrow : To Move the object Backward</p>";
    helpContent = helpContent + "<p style = 'color: green'>Left Arrow : To Move the Object Left</p>";
    helpContent = helpContent + "<p style = 'color: green'>Left Arrow : To Move the Object Right</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p style = 'color: blue'> The image of the Object will be shown on that Plane Mirror </p>";
    helpContent = helpContent + "<p style = 'color: blue'> The image of the beautifull Background is also shown in the mirror due to law of reflection </p>";
    helpContent = helpContent + "<p style = 'color: blue'> The object obeys the laws of physics</p>";
    helpContent = helpContent + "<p style = 'color: blue'> You can move the object forward,backward,left and right using Mouse,Keyboard</p>";
    helpContent = helpContent + "<p style = 'color: blue'> Distance of the object from the mirror is shown in Control Panel</p>";
    helpContent = helpContent + "<p style = 'color: red'> THANK YOU .....</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}
var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Position of an Object wih Mirror concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows an object placed on the chess board ... with green graas and beautifull clouds as background</p>";
    infoContent = infoContent + "<h3>Movement</h3>";
    infoContent = infoContent + "<p>Object Moves on chessboard  regarding the instructions given by the user using Mouse.</p>";
    infoContent = infoContent + "<p>Object also Moves on chessboard  with the use of Keyboard.</p>";
    infoContent = infoContent + "<p>At the time of impact, The position of the objectd will get changed.</p>";
    infoContent = infoContent + "<p>The distance from the mirror to the object is being calculated in centimeters.</p>";
    infoContent = infoContent + "<p>The Distance changes whenever the object moves front or back.</p>";
    infoContent = infoContent + "<p>User can observe the distance in the Control Panel.</p>";
    infoContent = infoContent + "</br>";
    infoContent = infoContent + "<h3>Plane Mirror</h3>";
    infoContent = infoContent + "<p>Plane Mirror is a mirror with Reflective Surface.</p>";
    infoContent = infoContent + "<p>The angle of Reflection equals to the angle of incidence.</p>";
    infoContent = infoContent + "<p>A plane mirror makes an image of objects in front of it; these images appear to be behind the plane in which the mirror lies.</p>";
    infoContent = infoContent + "<p>The image formed by a plane mirror is always virtual (meaning that the light rays do not actually come from the image).</p>";
    infoContent = infoContent + "<p>One of the characteristics of plane mirror is left-right reversal, Ex. Your left hand appears to be right hand</p>";
    infoContent = infoContent + "<p>For plane mirrors, the object distance is equal to the image distance,That is the image is the same distance behind the mirror as the object is in front of the mirror.</p>";
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
	t1 = "Object Distance ";
	t2 = "          "+"5.00 cm";
	PIEaddInputText(t1,t2,0);
	PIEaddDisplayText(t1, t2);

	var parameters = 
		{
			Dice:   function() { addDice(); },
			Glass:   function() { addGlass(); },
			Rod:   function() { addRod(); },
			Donut:   function() { addDonut(); },
			forward:   function() { forward(); },
			backward:   function() { backward(); },
			left:   function() { left(); },
			right:   function() { right(); },
			nothing:   function() { nothing(); }
		};
		PIEdisplayGUI.add( parameters, 'nothing'   ).name("Objects :");
		PIEdisplayGUI.add( parameters, 'Dice'   ).name("Dice");
		PIEdisplayGUI.add( parameters, 'Glass'   ).name("Holder");
		PIEdisplayGUI.add( parameters, 'Rod'   ).name("Ball");
		PIEdisplayGUI.add( parameters, 'Donut'   ).name("Donut");
		//adding controls
		PIEdisplayGUI.add( parameters, 'nothing'   ).name("Object Moves :");
		PIEdisplayGUI.add( parameters, 'forward'   ).name("Move Forward");
		PIEdisplayGUI.add( parameters, 'backward'   ).name("Move Backward");
		PIEdisplayGUI.add( parameters, 'left'   ).name("Move Left");
		PIEdisplayGUI.add( parameters, 'right'   ).name("Move Right");

}
function hello()
{
	alert("Hello, World ");
}
function nothing()
{

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
    
   addGlass();
    
}
function addGround()
{
	
	//var imgTexture = new THREE.ImageUtils.loadTexture( "checkerboard.jpg" );
	
	var texture = THREE.ImageUtils.loadTexture( 'checkerboard.jpg');
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	texture.repeat.set( 6, 6);
	
	var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
	var geometry = new THREE.PlaneGeometry(10,10,10,10);
	var ground = new THREE.Mesh(geometry,material);
	PIEaddElement(ground);
	ground.position.set(1.5,-0.3,-0.3);
	PIErenderer.setClearColor( 0xffff00 );
	ground.rotation.x = -1.57;
	
	var texture = THREE.ImageUtils.loadTexture( 'frame.jpg');
	var material = new THREE.MeshBasicMaterial( { map : texture });
	var geometry = new THREE.PlaneGeometry(9.1,5.8,10,10);
	var frame = new THREE.Mesh(geometry,material);
	frame.position.set(1.5,1,-6);
	PIEaddElement(frame);
}
function addCube()
{
	var texture = THREE.ImageUtils.loadTexture( 'wood1.jpg');
		texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
		texture.repeat.set(8, 8);

		var geom = new THREE.CubeGeometry(0.8,0.8,0.8,6,6,6);
		var material = new THREE.MeshBasicMaterial( { color: 0xB2BEB5 ,wireframe: true  });
		var box1 = new THREE.Mesh(geom,material);
		PIEaddElement(box1);
	
		var geometry = new THREE.CylinderGeometry( 0.05, 0.05, 0.5,10 );
		var boxm = new THREE.Mesh(geometry,new THREE.MeshLambertMaterial({color : 0xB2BEB5	}));
		PIEaddElement(boxm);
	
		var geometry = new THREE.CylinderGeometry( 0.13, 0.13, 0.6,10 );
		box = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  }));
		PIEaddElement(box);
	
		box.position.set(1.3,0.13,0);
	
		box.add(boxm);
		box.add(box1);
	
		box1.position.y = 1.0;
		boxm.position.y = 0.35;
		//box.rotation.y  =1;
		
		
	
}
function addMirror()
{
		
	cubeCamera = new THREE.CubeCamera(0.5,60,1500);
	PIEaddElement(cubeCamera);
	
	var g = new THREE.BoxGeometry(8,5,0.1);
	var cMaterial = new THREE.MeshBasicMaterial({envMap : cubeCamera.renderTarget });
	mirrorCube = new THREE.Mesh(g,cMaterial);
	mirrorCube.position.set(1.5,1,-5);
	
	//cubeCamera.position = mirrorCube.position;
	//cubeCamera.position = PIEcamera.position;
	
	//PIEcameraTarget.x=a;PIEcameraTarget.y=c;PIEcameraTarget.z=b;PIEcamera.lookAt(PIEcameraTarget)
	cubeCamera.position = mirrorCube.position;
	cubeCamera.position.x =2;
	cubeCamera.position.y =4.85;
	cubeCamera.position.z = -16	;
	
	var target = new THREE.Vector3();
	target.x = 2;target.y=2;target.z=0;
		
	cubeCamera.rotation.x = 0.28;
	cubeCamera.rotation.y = 0;
//	cubeCamera.rotation.y = 1;
	PIEaddElement(mirrorCube);
	PIErenderer.setClearColor( 0xffffff );
}
function addMountains()
{
	// SKYBOX/FOG
	var materialArray = [];
	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'grass.jpg' ) }));
	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'grass.jpg' ) }));
	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'grass.jpg' ) }));
	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'grass.jpg' ) }));
	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'grass.jpg' ) }));
	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'grass.jpg' ) }));
	for (var i = 0; i < 6; i++)
	   materialArray[i].side = THREE.BackSide;
	var skyboxMaterial = new THREE.MeshFaceMaterial( materialArray );
	
	var skyboxGeom = new THREE.CubeGeometry( 20, 6, 10, 1, 1, 1 );
	
	var skybox = new THREE.Mesh( skyboxGeom, skyboxMaterial );
	skybox.position.set(1.5	,2,-3.8);
	//scene.add( skybox )
	PIEaddElement(skybox);
	//making box as draggable
	PIEdragElement(box);
    PIEsetDrag(box, boxDrag);
    
}
function addDice()
{
	if(control==1)
	{
		dnt=0;
		PIEscene.remove(box);
		var texture = THREE.ImageUtils.loadTexture( 'dice1.png');
		texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
		//texture.repeat.set( 1, 1);

		var geom = new THREE.BoxGeometry(0.6,0.6,0.5,0.5);
		var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
		box = new THREE.Mesh(geom,material);
		PIEaddElement(box);
		box.position.y = 0.03;
		box.position.x = 1.3;
	
		PIEdragElement(box);
		PIEsetDrag(box, boxDrag);
		
	}
}
function addRod()
{
	if(control==1)
	{
		dnt=0;
		PIEscene.remove(box);
		var geometry = new THREE.SphereGeometry(0.36,40,40,0,Math.PI*2,0,Math.PI*2);
		var texture = THREE.ImageUtils.loadTexture( 'world.jpg');
		// new THREE.CylinderGeometry(0.08, 0.08, 1, 0.7 );
		var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
		box = new THREE.Mesh(geometry,material);
		PIEaddElement(box);
		box.rotation.z = 1;
		box.position.set(1.3,0.03,0);
	
		PIEdragElement(box);
		PIEsetDrag(box, boxDrag);
		
	}
}
function addGlass()
{
	if(control==1)
	{
		dnt=0;
		PIEscene.remove(box);
	
		var texture = THREE.ImageUtils.loadTexture( 'wood1.jpg');
		texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
		texture.repeat.set(8, 8);

		var geom = new THREE.CubeGeometry(0.8,0.8,0.8,6,6,6);
		var material = new THREE.MeshBasicMaterial( { color: 0xB2BEB5 ,wireframe: true  });
		var box1 = new THREE.Mesh(geom,material);
		PIEaddElement(box1);
	
		var geometry = new THREE.CylinderGeometry( 0.05, 0.05, 0.5,10 );
		var boxm = new THREE.Mesh(geometry,new THREE.MeshLambertMaterial({color : 0xB2BEB5	}));
		PIEaddElement(boxm);
	
		var geometry = new THREE.CylinderGeometry( 0.13, 0.13, 0.6,10 );
		box = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  }));
		PIEaddElement(box);
	
		box.position.set(1.3,0.13,0);
	
		box.add(boxm);
		box.add(box1);
	
		box1.position.y = 1.0;
		boxm.position.y = 0.35;
		//box.rotation.y  =1;
	
	box.receiveShadow = false;
	
		PIEdragElement(box);
		PIEsetDrag(box, boxDrag);
	}
}
function addDonut()
{
	if(control==1)
	{
		dnt=1;
		PIEscene.remove(box);
		var texture = THREE.ImageUtils.loadTexture( 'donut.png');
		var geometry = new THREE.TorusGeometry( 0.3, 0.15, 0.9, 20 ,Math.PI * 2 );
		var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
		box = new THREE.Mesh(geometry,material);
		PIEaddElement(box);
	
		box.position.set(1.3,0.13,0);
	
		PIEdragElement(box);
		PIEsetDrag(box, boxDrag);
		
	}
}
function boxDrag(element, newpos)
{
    if(count==1)
    {
    	var myboxX = newpos.x;
    
    var myboxY = newpos.y;
    var myboxZ = newpos.z;
    if(newpos.y > 0 )
    {
    	myboxZ -= (0.2+newpos.y);
    }
    if(newpos.y < 0)
    {
    	myboxZ += (0.2+-newpos.y);
    	myboxY = 0;
    }
    if(myboxZ >=1.5) myboxZ = 1.3;
    if(myboxZ <-4.5) myboxZ = -4.3;
    if(myboxX >6) myboxX = 5.6;
    if(myboxX <-3) myboxX = -2.8;
   /* if(box.position.z <0.7 && box.position.z > -3.2)
  	  box.position.set(myboxX, 0, myboxZ);
    else if(box.position.z >=1)
    	box.position.z = 0.9999999999;
    else
    	box.position.z = -2.999999999;*/
    	
    box.position.set(myboxX,0,myboxZ);
    if(dnt==1)
    	box.position.y = 0.13;
    	
    }
    	
    	
}
function animate()
{
	requestAnimationFrame(animate);
	render();

}
function render()
{

	mirrorCube.visible = false;
	cubeCamera.updateCubeMap(PIErenderer,PIEscene);
	mirrorCube.visible = true;
	
	
	//verticalMirror.renderWithMirror(verticalMirror);
	PIErenderer.render(PIEscene,PIEcamera);
	count = 0;
	
}

function forward()
{
	if(control==1)
	{
		if(box.position.z>=-4.2)
			box.position.z -= 0.25;
		t2 = "          "+(5+box.position.z).toFixed(2)+" cm"
	}
}
function backward()
{
	if(control==1)
	{
		if(box.position.z <0.75)
			box.position.z += 0.3;	
		t2 = "          "+(5+box.position.z).toFixed(2)+" cm"
	}
}
function left()
{
	if(control==1)
	{
		if(box.position.x > -2.75)
			box.position.x -= 0.3;
		t2 = "          "+(5+box.position.z).toFixed(2)+" cm"
	}
}
function right()
{
	if(control==1)
	{
		if(box.position.x < 5.25)
			box.position.x += 0.3;
		t2 = "          "+(5+box.position.z).toFixed(2)+" cm"
	}
}
function updateExperimentElements(t, dt)
{
	count=1;
	if(control==0)
	{
		//PIEshowInputPanel();
		control=1;
	}
	t2 = "          "+(5+box.position.z).toFixed(2)+" cm"
	 PIEchangeDisplayText(t1,t2);
		
}
function loadExperimentElements()
{

	PIEsetExperimentTitle("A Plane Mirror Experiment Inspired by Different Objects ");
    PIEsetDeveloperName("Pole Sumanth");
    PIEhideControlElement();
    
    /* initialise help and info content */
    initialiseHelp();
   initialiseInfo();
    
    //initialising the scene
    initialiseScene();
	//initialising other variables
	initialiseOtherVariables();    
	initialiseControls();
     PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
     
     addGround();
     addCube();
     addMirror();
     addMountains();
	PIEcamera.position.y = 1.5;
	
	animate();
     
     //addTable();
}
