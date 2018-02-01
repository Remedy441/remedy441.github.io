
var helpContent,table,l1,l2,l3,l4;
var candle,tip,flicker,flicker1;
var line1,line2,line3,holder,line4;
var Donut;
var t,m,b,rt,rd;
var rotation = 0;
var view;

function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Shadows Of The Household Objects Experiment help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows a light source placed at the left side of illusion, contains household objects at the top and the screen at the right.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>You can control the Objects by Mouse </p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p style = 'color: blue'>Place the object in between light source and screen so that you can observe shadow on the screen</p>";
    helpContent = helpContent + "<h3>Initial stage</h3>";
    helpContent = helpContent + "<p> The shadow of the Object will be shown on that White screen </p>";
    helpContent = helpContent + "<p> Light source and the screen are at fixed Positions </p>";
    helpContent = helpContent + "<p> Shadow of each object obeys the laws of physics</p>";
    helpContent = helpContent + "<p> You can move the object Up,Down,Left and Right using Mouse.</p>";
    helpContent = helpContent + "</p> Shadow size of the object varies while moving left to right in between light and screen</p>";
    
    helpContent = helpContent + "<h3>Object Movements</h3>";
    helpContent = helpContent + "<p>You can move objects (right,left,up,down) or rotate the objects ( x axis or y axis ) based on your choice chosing in control panel.</p>";
    
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
    infoContent = infoContent + "<h2>Shadows Of The Household Objects Experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows a light source placed at the left side of illusion, contains household objects at the top and the screen at the right.</p>";
    infoContent = infoContent + "<p>The House Objects in this Experiment are Table,Candle,Ceramic Donut,Glass,BedLight</p>";
    infoContent = infoContent + "<h3>Movement</h3>";
    infoContent = infoContent + "<p>User can Select any object and move it using Mouse.</p>";
    infoContent = infoContent + "<p>At the time of impact, The position of the selected objectd will get changed.</p>";
    infoContent = infoContent + "<p>Shadow of the Object can be observed on the screen when it is in between the screen and light source.</p>";
    infoContent = infoContent + "<p>The shadow size varies with the distance from the light source</p>";
    infoContent = infoContent + "<p>User can observe the shadow on the white screen</p>";
    infoContent = infoContent + "</br>";
    infoContent = infoContent + "<h3>Light</h3>";
    infoContent = infoContent + "<p>Light, an electro magnetic radiation that can be detected by human eye.</p>";
    infoContent = infoContent + "<p>The speed of light in a vocuum is a fundamental physical constant i'e 299,792,458 meters per second</p>";
    infoContent = infoContent + "<p>light travels in straight lines until reflected or scattered by objects in its path.</p>";
    infoContent = infoContent + "<p>When it encounters some forms of matter, light can be reflected, absorbed, or scattered.</p>";
    infoContent = infoContent + "<h3>Shadow</h3>";
    infoContent = infoContent + "<p>There is a region behind any object where light from the source cannot reach.</p>";
    infoContent = infoContent + "<p> This region is what we call the object’s shadow.</p>";
    infoContent = infoContent + "<p>The shape and size of the shadow produced on a screen, and indeed of the shadow region itself, are determined by shape, size, and orientation of the object producing the shadow.</p>";
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
    /* initialise Other Variables */
    initialiseOtherVariables();
    /* Reset Ball position */
    
}
function addWall()
{
	
	//var imgTexture = new THREE.ImageUtils.loadTexture( "checkerboard.jpg" );
	
	//var texture = THREE.ImageUtils.loadTexture( 'checkerboard.jpg');
	//texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	//texture.repeat.set( 6, 6);
	
	var material = new THREE.MeshPhongMaterial( {
					color: 0xa0adaf,
					shininess: 10,
					specular: 0x111111,
				} );
	var geometry = new THREE.PlaneGeometry(14,7,5,5);
	wall = new THREE.Mesh(geometry,material);
	PIEaddElement(wall);
	wall.position.set(-3.5,0.5,-5);
	wall.rotation.y = 1.5;
	PIErenderer.setClearColor( 0x000000 );
}
function addBulb()
{
	var texture = THREE.ImageUtils.loadTexture( 'bulb3.jpg');
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	//texture.repeat.set( 1, 1);

	var geom = new THREE.PlaneGeometry(3,1.5,5,5);
	var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
	var bulb = new THREE.Mesh(geom,material);
	PIEaddElement(bulb);
	bulb.position.y = 0.2;
	bulb.position.x = 7.5;
	bulb.position.z = -6;
}
function addCube()
{
	var texture = THREE.ImageUtils.loadTexture( 'wood1.jpg');
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	texture.repeat.set(8, 8);

	var geom = new THREE.CubeGeometry(0.8,0.8,0.8,6,6,6);
	var material = new THREE.MeshBasicMaterial( { color: 0xB2BEB5 ,wireframe: true  });
	box = new THREE.Mesh(geom,material);
	PIEaddElement(box);
	
	var geometry = new THREE.CylinderGeometry( 0.05, 0.05, 0.5,10 );
	boxm = new THREE.Mesh(geometry,new THREE.MeshLambertMaterial({color : 0xB2BEB5	}));
	PIEaddElement(boxm);
	
	var geometry = new THREE.CylinderGeometry( 0.13, 0.13, 0.6,10 );
	boxl = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  }));
	PIEaddElement(boxl);
	
	boxl.position.set(0,2.7,-4.5);
	
	boxl.add(boxm);
	boxl.add(box);
	
	box.position.y = 1.0;
	boxm.position.y = 0.35;
	//box.rotation.y  =1;
	
	boxl.receiveShadow = false;
	
	
}
function addCandle()
{
	var geometry = new THREE.CubeGeometry( 0.9, 0.9, 0.9, 1, 1, 1 );
	var texture = THREE.ImageUtils.loadTexture( 'dice1.png');
	candle = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  }));
	
	 //= new THREE.Mesh(geometry,new THREE.MeshLambertMaterial({color : 0xf0f0f0	}));
	PIEaddElement(candle);
	candle.position.set(1.3,3.5,-5);
	
	candle.receiveShadow = false;
}
function addTable()
{

	var texture = THREE.ImageUtils.loadTexture( 'wood.jpg');
	//texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	
	var geometry = new THREE.CubeGeometry(2.4,0.2,2,1);
	var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
	table = new THREE.Mesh(geometry,material);
	PIEaddElement(table);
	
	geometry = new THREE.CubeGeometry(0.15,0.8,0.15,1);
	l1 = new THREE.Mesh(geometry,material);
	PIEaddElement(l1);
	l2 = new THREE.Mesh(geometry,material);
	PIEaddElement(l2);
	l3 = new THREE.Mesh(geometry,material);
	PIEaddElement(l3);
	l4 = new THREE.Mesh(geometry,material);
	PIEaddElement(l4);
	
	table.add(l1);table.add(l2);table.add(l3);table.add(l4);
	l1.position.set(-1,-0.4,0.8);
	l2.position.set(-1,-0.4,-0.8);
	l3.position.set(1,-0.4,0.8);
	l4.position.set(1,-0.4,-0.8);
	table.position.set(2,0.5,-4.5);
	
	table.rotation.y = -0.5;
	table.rotation.x = 0.1;
}
function addMountains()
{
	//making box as draggable
	PIEdragElement(boxl);
    PIEsetDrag(boxl, boxlDrag);
    //making table as draggable
	PIEdragElement(table);
    PIEsetDrag(table, tableDrag);
    //making candle as draggable
     PIEdragElement(candle);
    PIEsetDrag(candle, candleDrag);
    
    //making egg stiirrer as draggable
    PIEdragElement(holder);
    PIEsetDrag(holder, holderDrag);
    
    //making Donut as draggable
    PIEdragElement(Donut);
    PIEsetDrag(Donut, DonutDrag);
    
    //making bedlight as draggable
 	PIEdragElement(m);
    PIEsetDrag(m, bedDrag);   
}
function addGlass()
{
	/*var geometry  = new THREE.SphereGeometry(0.2,0,10);
	var material = new THREE.MeshNormalMaterial({wireframe: true});
	
	spart1 = new THREE.Mesh(geometry,material);
	PIEaddElement(spart1);
	spart1.rotation.y = -4;
	spart1.position.y = 2;*/
	
	
	var geometry = new THREE.SphereGeometry(0.6,40,40,0,Math.PI*2,0,Math.PI*2);
	var texture = THREE.ImageUtils.loadTexture( 'world.jpg');
	
	
	holder = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial( { map : texture  }));
	PIEaddElement(holder);
	holder.position.set(4,3.5,-4.5);
	
	holder.receiveShadow = false;
	
	
}
function addDonut()
{
	var geometry = new THREE.TorusGeometry( 0.5, 0.25, 4, 30 ,Math.PI * 2 );
	var texture = THREE.ImageUtils.loadTexture( 'donut.jpg');
	Donut = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  }));
	PIEaddElement(Donut);
	Donut.position.set(2.6,3.5,-4.5);
	Donut.rotation.x = -0.85;
	
	Donut.receiveShadow = false;
}
function addBedlight()
{
	//upper part
	var geometry = new THREE.CylinderGeometry( 0.25, 0.5, 0.5,20 );
	t = new THREE.Mesh(geometry,new THREE.MeshLambertMaterial({color : 0xff00ff}));
	PIEaddElement(t);
	//middle part
	var geom =  new THREE.CylinderGeometry( 0.07, 0.07, 0.8,25 );
	var material = new THREE.MeshBasicMaterial( { color:0xc19a6b	});
	m = new THREE.Mesh(geom,material);
	PIEaddElement(m);
	
	//lower part
	var geometry = new THREE.CylinderGeometry( 0.36, 0.36, 0.1,25 );
	var l = new THREE.Mesh(geometry,material);
	PIEaddElement(l);
	
	var geom =  new THREE.CylinderGeometry( 0.02, 0.02, 0.5,25 );
	var material = new THREE.MeshBasicMaterial( { color:0xffffff	});
	rt= new THREE.Mesh(geom,material);
	PIEaddElement(rt);
	
	var geometry = new THREE.CylinderGeometry( 0.04, 0.08, 0.05,20 );
	rd = new THREE.Mesh(geometry,new THREE.MeshLambertMaterial({color : 0xffffff}));
	PIEaddElement(rd);
	
	m.add(t);
	m.add(l);
	m.add(rt);
	l.position.y = -0.4;
	t.position.set(0,0.3,0);
	m.position.z = -4.5;
	rt.position.x = 0.34;
	rt.position.y = 0.05;
	m.add(rd);
	rd.position.x = 0.34;
	rd.position.y = -0.2;
	
	
	m.position.set(5.2,3.4,-4.5);
	m.rotation.y = 0.6;
	
	t.receiveShadow = false;	
}
function addLight()
{
	var lt=new THREE.PointLight(16777215);
	
	lt.position.set(10,0,-4);
	lt.castShadow=true;PIEscene.add(lt);
	
	var ln=new THREE.PointLight(16777215);
	
	ln.position.set(0,10,-4);
	ln.castShadow=false;PIEscene.add(ln);
	
}
function boxlDrag(element, newpos)
{
    var myboxX = newpos.x;
    
    var myboxY = newpos.y;
    var myboxZ = newpos.z;
    
    if(rotation == 0)
    {
    	if(myboxX >6.1&& myboxY<1.5 && myboxY >-1.3) myboxX =6;
    	else if(myboxY <-0.7) myboxY = -0.65;
    	if(newpos.x >-3 )
    	boxl.position.set(myboxX, myboxY, myboxZ);
    }
    else
    {
    	boxl.rotation.x = myboxY;
    	boxl.rotation.y = myboxX;
    }
}
function candleDrag(element,newpos)
{
	 var myboxX = newpos.x;
    
    var myboxY = newpos.y;
    var myboxZ = newpos.z;
    if(rotation  == 0)
    {
    	if(myboxX >6.1 && myboxY<1.5 && myboxY >-1.3) myboxX = 6;
    	else if(myboxY <-0.6) myboxY = -0.5;
    	if(newpos.x >-3 )
    		candle.position.set(myboxX, myboxY, myboxZ);
    }
    else
    {
    	candle.rotation.x = myboxY;
    	candle.rotation.y = myboxX;
    }
}
function holderDrag(element,newpos)
{
	 var myboxX = newpos.x;
    
    var myboxY = newpos.y;
    var myboxZ = newpos.z;
    if(rotation == 0)
    {
    	if(myboxX >6.1&& myboxY<1.5 && myboxY >-1.3) myboxX = 6;
    	else if(myboxY <-0.6) myboxY = -0.5;
    	if(newpos.x >-3 )
    		holder.position.set(myboxX, myboxY, myboxZ);
    }
    else
    {
    	holder.rotation.x = myboxY;
    	holder.rotation.y = myboxX;
    }
}
function DonutDrag(element,newpos)
{
	 var myboxX = newpos.x;
    
    var myboxY = newpos.y;
    var myboxZ = newpos.z;
    if(rotation == 0)
    {
    	if(myboxX >6.1&& myboxY<1.5 && myboxY >-1.3) myboxX = 6;
    	else if(myboxY <-0.4) myboxY = -0.3;
    	if(newpos.x >-2.8)
    	Donut.position.set(myboxX, myboxY, myboxZ);
    }
    else
    {		
    	Donut.rotation.y = myboxX;
    	Donut.rotation.x = myboxY;
    }
}
function bedDrag(element,newpos)
{
	 var myboxX = newpos.x;
    
    var myboxY = newpos.y;
    var myboxZ = newpos.z;
    if(rotation == 0)
    {
    	if(myboxX >6.1&& myboxY<1.5 && myboxY >-1.3) myboxX = 6;
    	else if(myboxY <-0.6) myboxY = -0.5;
    	if(newpos.x >-3)
    		m.position.set(myboxX, myboxY, myboxZ);
    }
    else
    {
	    m.rotation.x = myboxY;
	    m.rotation.z = myboxX;
	}
}
function tableDrag(element,newpos)
{
	 var myboxX = newpos.x;
    
    var myboxY = newpos.y;
    var myboxZ = newpos.z;
    if(rotation == 0)
    {
	    if(myboxX >5.5 && myboxY<1.5 && myboxY >-0.5) myboxX = 5.45;
	    else if(myboxY <-0.3) myboxY = -0.2;
    	if(newpos.x >-2.3)
    		table.position.set(myboxX, myboxY, myboxZ);
    }
    else
    {
	    table.rotation.x = myboxY;
	    table.rotation.y = myboxX;
	}
}
function initialiseControls()
{

	
	var parameters = 
		{
			Rotation:   function() { permitRotation(); },
			NoRotation:   function() { denyRotation(); },
			nothing:   function() { Nothing(); }
		};
		view = this;
		view.RotateObjects = false;
		view.MoveObjects = true;	
		
		PIEinputGUI.add(parameters,'nothing').name("Movements :");	
			
		var CB1Controller = PIEinputGUI.add(view, 'RotateObjects').listen();
		CB1Controller.onChange(function(value){
				view.RotateObjects = true;
				view.MoveObjects = false;
				
				permitRotation();
		});
		
		var CB2Controller = PIEinputGUI.add(view, 'MoveObjects').listen();
		CB2Controller.onChange(function(value)
		{
		    view.RotateObjects = false;
		    view.MoveObjects = true;
		    
		    denyRotation();
		});
		
}
function Nothing()
{

}
function permitRotation()
{
	rotation = 1;
}
function denyRotation()
{
	rotation = 0;
}
function addBackGround()
{
	// SKYBOX/FOG
	var materialArray = [];
	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'moon.jpeg' ) }));
	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'moon.jpeg' ) }));
	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'moon.jpeg' ) }));
	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'moon.jpeg' ) }));
	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'moon.jpeg' ) }));
	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'moon.jpeg' ) }));
	for (var i = 0; i < 6; i++)
	   materialArray[i].side = THREE.BackSide;
	var skyboxMaterial = new THREE.MeshFaceMaterial( materialArray );
	
	var skyboxGeom = new THREE.CubeGeometry( 20, 6, 10, 1, 1, 1 );
	
	var skybox = new THREE.Mesh( skyboxGeom, skyboxMaterial );
	skybox.position.set(5,2,-3.8);
	//scene.add( skybox )
	PIEaddElement(skybox);
}
function resetExperiment()
{
    PIEscene.remove(table);PIEscene.remove(m);PIEscene.remove(Donut);
    PIEscene.remove(holder);PIEscene.remove(candle);PIEscene.remove(boxl);
    
   	 addCube();
     addTable();
     addCandle();
     addGlass();
     addDonut();
     addBedlight();
     addMountains();
     rotation = 0;
     
     view.RotateObjects = false;
	 view.MoveObjects = true;

    
}
function animate()
{
	requestAnimationFrame(animate);
	render();
	
}
function render()
{
	//sphere.rotation.y += 0.1;
	
	PIErenderer.shadowMapEnabled = true;
	PIErenderer.shadowMapSoft = true;
	PIEsetExperimentTitle("Shadows Of The Household Objects ");
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
     
    addWall();
     addCube();
     addTable();
     addCandle();
     addGlass();
     addBulb();
     addDonut();
     addBedlight();
     addLight();
     initialiseControls();
     
     addMountains();
     addBackGround();
     
	PIEcamera.position.y = 1.3;
	
	animate();
     
     //addTable();
}
