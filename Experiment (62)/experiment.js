var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Visible Face of the Moon help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment illustrates that only one face of the moon is visibe</p>";
    helpContent = helpContent + "<p>In the animation stage, the moon revolves around the earth and about its own axis.Only one face of the moon is visible to the earth due to its speed of revolution and rotation. The side which is not visible has been blacked out.</p>";
    helpContent = helpContent + "<p>The first stage of the animation depicts the concept. The cone rotates about its axis and revolves around the sphere with the same rate. Thus, the pointed end of the cone always points towards the sphere.</p><p>Similarly, in the second stage of the animation, the earth, sun and moon are revolving and rotating. The moon's rate of revolution and rotation is same, thus, only one face of the moon is visible from earth.</p><p>The phases of the moon as seen from earth is also shown.</p>";
    //helpContent = helpContent + "<ul> <li><b>Day of Sunset/Sunrise</b> : If its a Solistice day or Equinox day.</li>"
    //helpContent = helpContent + "<li><b>Date of Sunset/Sunrise</b> : Date when the sun rises or sets in the shown manner.</li>"
    //helpContent = helpContent + "<li><b>Season in Northern Hemisphere:</b> : The season in northern hemisphere for the corresponding sunrise sunset configuration.</li>"
    //helpContent = helpContent + "<li><b>Hemisphere towards the sun: </b> :Due to the tilt of the axis of earth's rotation, the hemisphere directly recieving the suns rays is different at different positions of revolution around the sun. This shows the hemisphere towards the sun at the specific configuration being shown on screen.</li>" 
    //helpContent = helpContent + "<li><b>Angle from due East</b> : The angle that the shadow of an object on earth makes from the due east line.</li> </ul>"
 
    helpContent = helpContent + "<p>You can go back to the setup stage by pressing the reset button.</p>";
    helpContent = helpContent + "<h2>Happy Experimenting!</h2>";
    PIEupdateHelp(helpContent);
}
var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Visible Face of the Moon concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>>The experiment illustrates that only one face of the moon is visibe</p>";
    infoContent = infoContent + "<h3>Visible Face</h3>";
    infoContent = infoContent + "<p>The moon revolves around the earth and about its own axis.Only one face of the moon is visible to the earth due to its speed of revolution and rotation.</p>";
    //infoContent = infoContent + "<p>Similarly, the sun rises in south of east when the northern hemisphere is away from the sun.</p>";
    //infoContent = infoContent + "<p>The sun rises in the maximum north east on the day of Summer Solistice (21 June)</p>";
    //infoContent = infoContent + "<p>The sun rises in the maximum south east on the day of Winter Solistice (21 December)</p>";
    //infoContent = infoContent + "<p>The sun rises due east on the day of Spring and Autumn Equinoxes. (21 March and 23 September)</p>";
    
	//infoContent = infoContent + "<h3>Angles</h3>";
    //infoContent = infoContent + "<p>Consider an obbserver looking at the sunrise facing east. An object kept on earth makes shadows according to the direction of sunrise. When the sun rises north of east, the shadow is 23.4 degrees right to the due east line. Similarly, when sun rises south of east, the shadow is 23.4 degrees to the left. On equinox days, the sun rises due east, and thus the angle made is zero degrees. </p>";
	
    infoContent = infoContent + "<h2>Happy Experimenting!</h2>";
    PIEupdateInfo(infoContent);
}

var earth;
var orbit;
var clouds;
var earthRadius;
var circle;
var moon;
var moonRadius,sunRadius,sun;
var earthX,earthY,moonX,moonY,sunX,sunY;

function initialise(){
	earthRadius = 20;
	moonRadius = 10;
	sunRadius = 25;
	earthX = 0;
	earthY = 100;
	moonX = 0;
	moonY = 140;
	sunX = 0;
	sunY = 0;
	var height = 400;
	var width = 600 ;
	PIEsetAreaOfInterest(-(width/2),height/2,width/2,-(height/2));
	

}

function resize(event){
	PIEresize();
	PIEadjustDisplayScene();
	
}

function makeEarth(){
     	var geometry = new THREE.SphereGeometry(earthRadius,32,32)
	var material =	new THREE.MeshBasicMaterial({
				map:         new THREE.TextureLoader().load('images/2_no_clouds_4k.jpg'),
				bumpMap:     new THREE.TextureLoader().load('images/elev_bump_4k.jpg'),
				bumpScale:   0.005,
				specularMap: new THREE.TextureLoader().load('images/water_4k.png'),
				specular:    new THREE.Color('grey')								
			})

    	earth = new THREE.Mesh(geometry,material);
	earth.rotation.set(Math.PI/2,0,0); 
	earth.position.set(earthX,earthY,0)
	earth.visible = false;
	PIEaddElement(earth);
	
	geometry = new THREE.CircleGeometry(earthY,32);
	material  = new THREE.LineBasicMaterial({color:0xffffff,linewidth:2});
	orbit = new THREE.Line(geometry,material);
	PIEaddElement(orbit);
	orbit.visible = false;
}

function makeSun(){
	var geometry = new THREE.SphereGeometry(sunRadius,32,32);
	var material	= new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('images/sun.jpg')})
	sun = new THREE.Mesh(geometry,material);
	sun.visible = false;
	sun.position.set(sunX,sunY,0);
	PIEaddElement(sun);
}

var orbitMoon;
function createMoon(){
	var geometry	= new THREE.SphereGeometry(moonRadius, 32, 32)
	var material	= new THREE.MeshBasicMaterial({
		map	: new THREE.TextureLoader().load('images/export.png'),
		bumpMap	: new THREE.TextureLoader().load('images/moonbump1k.jpg'),
		bumpScale: 0.002,
	})
	moon	= new THREE.Mesh(geometry, material);
	moon.position.set(moonX,moonY,0);
	moon.rotation.set(0,0,-Math.PI/2);
	moon.visible = false;
	PIEaddElement(moon);

	geometry = new THREE.CircleGeometry(40,32);
	material  = new THREE.LineBasicMaterial({color:0xffffff,linewidth:2});
	orbitMoon = new THREE.Line(geometry,material);
	orbitMoon.position.set(earthX,earthY,0);
	PIEaddElement(orbitMoon);
	orbitMoon.visible = false;
}
var plane,centre,object,circle;
function example(){
	var geometry = new THREE.PlaneGeometry(500,500,100);
	var material = new THREE.MeshBasicMaterial({map	: new THREE.TextureLoader().load('images/grass.jpg')});
	plane = new THREE.Mesh(geometry,material);
	PIEaddElement(plane);
	
	geometry = new THREE.BoxGeometry(40,40,30);/*new THREE.CylinderGeometry(0,30,70);*/
	material = new THREE.MeshBasicMaterial({map	: new THREE.TextureLoader().load('images/human1.png')});
	material.transparent = true;
	object = new THREE.Mesh(geometry,material);
	object.position.set(0,80,0);
	//object.rotation.set(Math.PI/8,0,0);
	PIEaddElement(object);

	//geometry = new THREE.SphereGeometry(20,20,32);
	geometry = new THREE.BoxGeometry(50,50,50);
	material = new THREE.MeshBasicMaterial({map	: new THREE.TextureLoader().load('images/centre.png')});
	material.transparent = true;
	centre = new THREE.Mesh(geometry,material);
	PIEaddElement(centre);

	geometry = new THREE.CircleGeometry(80,32);
	material = new THREE.LineBasicMaterial({color:0xff0000, linewidth:3});
	circle = new THREE.Line(geometry,material);
	PIEaddElement(circle);
}

var phases,plane1;
function phase(){
	var geometry	= new THREE.SphereGeometry(40, 32, 32)
	var material	= new THREE.MeshBasicMaterial({
		map	: new THREE.TextureLoader().load('images/moon.png'),
		bumpMap	: new THREE.TextureLoader().load('images/moonbump1k.jpg'),
		bumpScale: 0.002,
	})
	phases	= new THREE.Mesh(geometry, material);
	phases.position.set(-300,40,0);
	phases.rotation.set(0,0,-Math.PI/2);
	phases.visible = false;
	PIEaddElement(phases);

	geometry = new THREE.PlaneGeometry(150,150,100);
	material = new THREE.MeshBasicMaterial({map	: new THREE.TextureLoader().load('images/back.jpg')});
	plane1 = new THREE.Mesh(geometry,material);
	plane1.position.set(-330,40,-80);
	plane1.visible = false;
	PIEaddElement(plane1);
}
var flag=0;
function startExample(){
	if(flag==1){
	earth.visible = false;
	sun.visible = false;
	moon.visible = false;
	orbit.visible = false;
	phases.visible = false;
	plane.visible = true;
	plane1.visible = false;
	object.visible = true;
	circle.visible = true;
	orbitMoon.visible = false;
	centre.visible = true;
	resetExperiment();
	flag=0;
	}
}

function startExperiment(){
	if(flag==0){
	earth.visible = true;
	sun.visible = true;
	moon.visible = true;
	orbitMoon.visible = true;
	orbit.visible = true;
	phases.visible = true;
	plane.visible = false;
	object.visible = false;
	circle.visible = false;
	centre.visible = false;
	plane1.visible = true;
	resetExperiment();
	flag=1;
	}
	
}
var hack;

function loadExperimentElements(){
	
	//control = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);
	//control.addEventListener('change',PIErender);
	window.addEventListener('resize',resize, true);
	initialise();
	PIEscene.background = new THREE.TextureLoader().load('images/galaxy.png')
	PIEsetExperimentTitle("Visible Face of the Moon");
	PIEsetDeveloperName("Meghna Bhave");
	/* initialise help and info content */
    	initialiseHelp();
    	initialiseInfo();
	example();
	makeEarth();
	createMoon();
	makeSun();
	phase();

	PIEaddDualCommand("EXAMPLE",startExample);
	PIEaddDualCommand("EXPERIMENT",startExperiment);

	resetExperiment();
	PIEresetExperiment(); hack=0;
	PIEstartAnimation();
}

function resetExperiment(){
	
	initialise();
	window.addEventListener('resize', resize, true);
	moon.position.set(moonX,moonY,0);
	moon.rotation.set(0,0,-Math.PI/2);
	earth.rotation.set(Math.PI/2,0,0); 
	earth.position.set(earthX,earthY,0);
	orbitMoon.position.set(earthX,earthY,0);
	object.position.set(0,80,0);	
	object.rotation.set(0,0,Math.PI);
	object.position.set(0,80,0);

}
var x=0,t1=0;
function updateExperimentElements(t,dt){
	
	if(hack<7){
		hack++;
		if(hack==7)
		PIEstopAnimation();
	}
	else{
		t=t/1000;
		if(t==0){
			x=0;t1=0;flag=0;
		}
		if(flag==1){
		x = 0;
		phases.rotation.y -= dt*Math.PI/(5250)
		moon.rotation.z -= dt*Math.PI/(5250)
		earth.rotation.y +=dt*Math.PI/2400
		orbitMoon.position.x = earth.position.x = earthY*Math.sin(t1/10);
		orbitMoon.position.y = earth.position.y = earthY*Math.cos(t1/10);
		//startExperiment();
		
		moonX = -40*Math.sin(t1/2) +earthX;
		moonY=40*Math.cos(t1/2)+earthY;
		moon.position.x = -moonX*Math.cos(t1/10) + moonY*Math.sin(t1/10);
		moon.position.y = moonX*Math.sin(t1/10) + moonY*Math.cos(t1/10);
		t1=t1+dt/1000;
		}
		else if (flag==0){
			//startExample();
			t1=0;
			object.rotation.z -= dt*Math.PI/3140;
			object.position.x = 80*Math.sin(x);
			object.position.y = 80*Math.cos(x);
			x=x+dt/1000;
			
		}
	}	
}
