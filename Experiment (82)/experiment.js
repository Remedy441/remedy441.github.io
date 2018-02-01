
var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */

var flag=0;
var f1=0;
var img;
var plane;
var i=1;
var j=1;
var k=1;
var myFloor;
function initialiseControlVariables()
{
	flag=1;
	i=1;
}
function initialiseControls()
{
    initialiseControlVariables();
	//PIEaddInputCheckbox("cb", false, Rectilinear);
	PIEaddInputCheckbox("Rectilinear_Motion",true, Rectilinear);
	PIEaddInputCheckbox("Circular_Motion",false,Circular);
	PIEaddInputCheckbox("Periodic_Motion",false,Periodic);
	PIEaddInputCheckbox("Other_Motion",false,Other_Motions);	
	PIEaddInputCheckbox("Rectilinear_Motion_Examples", false,Rectilinear_Examples);
    PIEaddInputCheckbox("Circular_Motion_Examples",false,Circular_Examples);
	PIEaddInputCheckbox("Periodic_Motion_Examples",false,Periodic_Examples);
	
}
function Rectilinear()
{
    
//	PIEaddInputCheckbox("Rectilinear_Motion",true, Rectilinear);
	PIEchangeInputCheckbox("Circular_Motion",false);
	PIEchangeInputCheckbox("Periodic_Motion",false);
	PIEchangeInputCheckbox("Other_Motion",false);	
	PIEchangeInputCheckbox("Rectilinear_Motion_Examples", false);
    PIEchangeInputCheckbox("Circular_Motion_Examples",false);
	PIEchangeInputCheckbox("Periodic_Motion_Examples",false);

	base1.position.set(0,-4.0,0);
   	base2.position.set(-6,-2.0,-0.5);	
    table1.position.set(0,-2.0,0);
	table1.rotation.z=-0.1*Math.PI;
	Balll.position.set(-5.8,0.4,0);
	
	t2.geometry.vertices[0]=new THREE.Vector3(0,0,0);
	t2.geometry.vertices[1]=new THREE.Vector3(0,0,0);
	t2.geometry.verticesNeedUpdate=true;
	
	Ball2.position.set(200,0,0);
	Ball3.position.set(200,0.0,0);
	
	tableb3.position.set(200.0,7.0,0);
	Ball4.position.set(200.0,0.0,0);
	 text1.innerHTML = " Rectilinear  Motion  of  a  Ball  on  a  Planck. <br>";
	 text1.style.top = innerHeight/mySceneH*4.55 + 'px';
	flag=1;
	PIErender();
	myFloor.position.set(myCenterX, -6.8 , -2);
	myFloor1.position.set(myCenterX, bottomB - (wallThickness / 2), -200);
	
	//PIEstartAnimation();
	Rectilinear2.position.set(200,0,0);
	Rectilinear3.position.set(200,0,0);
	Circular1.position.set(200,0,0);
	Circular2.position.set(200,0,0);
	Periodic1.position.set(200,0,0);
	Periodic3.position.set(200,0,0);
	Other1.position.set(200,0,0);
}

function Circular()
{
	
	PIEchangeInputCheckbox("Rectilinear_Motion",false);
//	PIEchangeInputCheckbox("Circular_Motion",false);
	PIEchangeInputCheckbox("Periodic_Motion",false);
	PIEchangeInputCheckbox("Other_Motion",false);	
	PIEchangeInputCheckbox("Rectilinear_Motion_Examples", false);
    PIEchangeInputCheckbox("Circular_Motion_Examples",false);
	PIEchangeInputCheckbox("Periodic_Motion_Examples",false);

	Ball2.position.set(-0,0,0);
	Ball3.position.set(-5.0,0.0,0);
	
	base1.position.set(200,-4.0,0);
   	base2.position.set(200,-3.5,-0.5);	
    table1.position.set(200,-2.0,0);
	table1.rotation.z=-0.1*Math.PI;
	Balll.position.set(200,0.4,0);
	
	Other1.position.set(200,0,0);
	t2.geometry.vertices[0]=new THREE.Vector3(0,0,0);
	t2.geometry.vertices[1]=new THREE.Vector3(-5,0,0);
	t2.geometry.verticesNeedUpdate=true;
	
	
	tableb3.position.set(200,7.0,0);
	Ball4.position.set(200,0.0,0);
	
	text1.innerHTML = " Circular  Motion  of  a  Ball arround the Center. <br>";
	text1.style.top = innerHeight/mySceneH*2.55 + 'px';
	flag=2;
	PIErender();
	myFloor.position.set(myCenterX, -6.8 , -2);
	myFloor1.position.set(myCenterX, bottomB - (wallThickness / 2), -200);
	Rectilinear2.position.set(200,0,0);
	Rectilinear3.position.set(200,0,0);
	Circular1.position.set(200,0,0);
	Circular2.position.set(200,0,0);	
	Periodic1.position.set(200,0,0);
	Periodic3.position.set(200,0,0);


	
	//PIEstartAnimation();
}

function Periodic()
{
	
	PIEchangeInputCheckbox("Rectilinear_Motion",false);
	PIEchangeInputCheckbox("Circular_Motion",false);
//	PIEchangeInputCheckbox("Periodic_Motion",false);
	PIEchangeInputCheckbox("Other_Motion",false);	
	PIEchangeInputCheckbox("Rectilinear_Motion_Examples", false);
    PIEchangeInputCheckbox("Circular_Motion_Examples",false);
	PIEchangeInputCheckbox("Periodic_Motion_Examples",false);

	tableb3.position.set(0.0,7.0,0);
	Ball4.position.set(0.0,0.0,0);
	
	base1.position.set(200,-4.0,0);
   	base2.position.set(200,-3.5,-0.5);	
    table1.position.set(200,-2.0,0);
	table1.rotation.z=-0.1*Math.PI;
	Balll.position.set(200,0.4,0);
	
	Other1.position.set(200,0,0);
	Ball2.position.set(200,0,0);
	Ball3.position.set(200,0.0,0);

	t2.geometry.vertices[0]=new THREE.Vector3(0,7,0);
	t2.geometry.vertices[1]=new THREE.Vector3(0,0,0);
	t2.geometry.verticesNeedUpdate=true;
	f1=0;
	flag=3;
	temp=1;
	PIErender();
	 text1.innerHTML = " Periodic  Motion  of  a Pendulum. <br>";
	 text1.style.top = innerHeight/mySceneH*15.55 + 'px';
 	myFloor.position.set(myCenterX, -6.8 , -2);
 	myFloor.position.set(myCenterX, -6.8 , -2);
	myFloor1.position.set(myCenterX, bottomB - (wallThickness / 2), -200);
	Rectilinear2.position.set(200,0,0);
	Rectilinear3.position.set(200,0,0);
	Circular1.position.set(200,0,0);
	Circular2.position.set(200,0,0);
	Periodic1.position.set(200,0,0);
	Periodic3.position.set(200,0,0);
	
//PIEstartAnimation();
}
function Other_Motions()
{
	
	PIEchangeInputCheckbox("Rectilinear_Motion",false);
	PIEchangeInputCheckbox("Circular_Motion",false);
	PIEchangeInputCheckbox("Periodic_Motion",false);
//	PIEchangeInputCheckbox("Other_Motion",false);	
	PIEchangeInputCheckbox("Rectilinear_Motion_Examples", false);
    PIEchangeInputCheckbox("Circular_Motion_Examples",false);
	PIEchangeInputCheckbox("Periodic_Motion_Examples",false);

	Other1.position.set(0,0,10);
	PIErender();
	f1=0;
	flag=0;
	temp=1;
	 text1.innerHTML = " Parabolic Motion of a projectile. <br>";
	 text1.style.top = innerHeight/mySceneH*17.55 + 'px';
	
	Rectilinear2.position.set(200,0,0);
	Rectilinear3.position.set(200,0,0);
	Circular1.position.set(200,0,0);
	Circular2.position.set(200,0,0);
	Periodic1.position.set(200,0,0);
	Periodic3.position.set(200,0,0);
//	Other1.position.set(200,0,0);

}
function Rectilinear_Examples()
{
	
	 if(i==1)
	 {
		 Rectilinear2.position.set(0,0,10);
		 Rectilinear3.position.set(0,0,9);
		 i++;
		 text1.innerHTML = " Rectilinear  Motion  of  a Train. <br>";
	 text1.style.top = innerHeight/mySceneH*17.55 + 'px';
     
	 }
	 else if(i==2)
	 {
		 
		 Rectilinear2.position.set(0,0,9);
		 Rectilinear3.position.set(0,0,10);
		 i=1;
		 text1.innerHTML = " Rectilinear  Motion  of  a fruit falling from tree. <br>";
	 text1.style.top = innerHeight/mySceneH*17.55 + 'px';
     
	 }
	 PIErender();

	PIEchangeInputCheckbox("Rectilinear_Motion",false);
	PIEchangeInputCheckbox("Circular_Motion",false);
	PIEchangeInputCheckbox("Periodic_Motion",false);
	PIEchangeInputCheckbox("Other_Motion",false);	
	PIEchangeInputCheckbox("Rectilinear_Motion_Examples", true);
    PIEchangeInputCheckbox("Circular_Motion_Examples",false);
	PIEchangeInputCheckbox("Periodic_Motion_Examples",false);
	
	f1=0;
	flag=0;
	temp=1;
	 //console.log(i);
	// Rectilinear2.position.set(200,0,0);
	//Rectilinear3.position.set(200,0,0);
	Circular1.position.set(200,0,0);
	Circular2.position.set(200,0,0);
	Periodic1.position.set(200,0,0);
	Periodic3.position.set(200,0,0);
	Other1.position.set(200,0,0);

}
function Circular_Examples()
{
	
	 if(j==1)
	 {
		 Circular1.position.set(0,0,10);
		 Circular2.position.set(0,0,9);
		 j++;
		 text1.innerHTML = " Circular  Motion  of  arms of a wind mill. <br>";
	 text1.style.top = innerHeight/mySceneH*17.55 + 'px';
     
	 }
	 else if(j==2)
	 {
		 Circular1.position.set(0,0,9);
		 Circular2.position.set(0,0,10);
		 j=1;
		 text1.innerHTML = " Circular  Motion  of  a Merry-Go-Round. <br>";
	 text1.style.top = innerHeight/mySceneH*17.55 + 'px';
	 }
	PIErender();
	
	PIEchangeInputCheckbox("Rectilinear_Motion",false);
	PIEchangeInputCheckbox("Circular_Motion",false);
	PIEchangeInputCheckbox("Periodic_Motion",false);
	PIEchangeInputCheckbox("Other_Motion",false);	
	PIEchangeInputCheckbox("Rectilinear_Motion_Examples", false);
    PIEchangeInputCheckbox("Circular_Motion_Examples",true);
	PIEchangeInputCheckbox("Periodic_Motion_Examples",false);

	f1=0;
	flag=0;
	temp=1;
    Rectilinear2.position.set(200,0,0);
	Rectilinear3.position.set(200,0,0);
	//Circular2.position.set(200,0,0);
	//Circular3.position.set(200,0,0);
	Periodic1.position.set(200,0,0);
	Periodic3.position.set(200,0,0);
	Other1.position.set(200,0,0);
	 
}
function Periodic_Examples()
{
	
	 if(k==1)
	 {
		 Periodic1.position.set(0,0,10);
		 Periodic3.position.set(0,0,9);
		 k++;
		 text1.innerHTML = " Periodic Motion of a Pendulum <br>";
	 text1.style.top = innerHeight/mySceneH*17.55 + 'px';
     
	 }
	 else if(k==2)
	 {
		 Periodic1.position.set(0,0,9);
		 Periodic3.position.set(0,0,10);
		 k=1;
		 text1.innerHTML = " Periodic Motion of a Swing <br>";
	 text1.style.top = innerHeight/mySceneH*17.55 + 'px';
     
	 }
	 PIErender();
	
	PIEchangeInputCheckbox("Rectilinear_Motion",false);
	PIEchangeInputCheckbox("Circular_Motion",false);
	PIEchangeInputCheckbox("Periodic_Motion",false);
	PIEchangeInputCheckbox("Other_Motion",false);	
	PIEchangeInputCheckbox("Rectilinear_Motion_Examples", false);
    PIEchangeInputCheckbox("Circular_Motion_Examples",false);
	PIEchangeInputCheckbox("Periodic_Motion_Examples",true);


	 f1=0;
	flag=0;
	temp=1;
	 Rectilinear2.position.set(200,0,0);
	Rectilinear3.position.set(200,0,0);
	Circular1.position.set(200,0,0);
	Circular2.position.set(200,0,0);
//	Periodic1.position.set(200,0,0);
	//Periodic3.position.set(200,0,0);
	Other1.position.set(200,0,0);

}

var helpContent;
function initialiseHelp()
{
    //helpContent="<html> <body> <p>This is help content </p> </body> </html>";
    helpContent = helpContent + "<h2>Types of Motion</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows seven buttons in which the first three buttons show demo for rectilinear, circular and periodic motions.The other button shows other kinds of motions. The Remaing three buttons shows pictures of the motions experienced in day to day life</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation control. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can select the type of motion.</p>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage corresponing animation is shown</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play button on the top line</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
	PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
   //  infoContent =  "<html> <body> <p>This is info content </p> </body> </html>";
    infoContent = infoContent + "<h2>Types of motion</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows three kinds of motions as follows:.</p>";
    infoContent = infoContent + "<h3>Rectilinear, Circular and Periodic.</h3>";
	infoContent = infoContent + "<p>Linear motion (also called rectilinear motion) is a motion along a straight line.</p>";
	infoContent = infoContent +"<p>The linear motion can be of two types: uniform linear motion with constant velocity or zero acceleration; non uniform linear motion with variable velocity or non-zero acceleration</p>";
	infoContent = infoContent +"<p>Linear motion is the most basic of all motion.</p>";
	infoContent = infoContent +"<p>Circular motion is a movement of an object along the circumference of a circle or rotation along a circular path.</p>";
	infoContent = infoContent +"<p>Examples of circular motion include: an artificial satellite orbiting the Earth at constant height, a stone which is tied to a rope and is being swung in circles, a car turning through a curve in a race track, an electron moving perpendicular to a uniform magnetic field, and a gear turning inside a mechanism.</p>";
	infoContent = infoContent +"<p>The term periodic motion refers to any movement of an object that is repeated in a given length of time.</p>";
	infoContent = infoContent +"<p>The period of time it takes to get back to where it started is called the time period of the motion.</p>";
    infoContent = infoContent +"<p>A rocking chair rocking is periodic motion. A swing swinging is periodic motion. A satellite orbiting the Earth is also periodic motion, as are the vibrations of a tuning fork or the swing of a pendulum.</p>";
	infoContent = infoContent +"<p>The experiment also gives example of a parabolic motion.</p>";
	infoContent = infoContent +"<p>Projectile motion is a form of motion in which an object or particle (in either case referred to as a projectile) is thrown near the Earth's surface, and it moves along a curved path under the action of gravity only.</p>";
	infoContent = infoContent + "<p>When the button is clicked corresponding experiment is shown on the screen.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene()
{
	mySceneTLX = -8.5;
    mySceneTLY = 9.25;
    mySceneBRX =  8.5;
    mySceneBRY = -9.25;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
}

function initialiseOtherVariables()
{	

}
function loadExperimentElements()
{

    PIEsetExperimentTitle("Types of Motion");
    PIEsetDeveloperName("Bhagyashree Rawal");
    PIEhideControlElement();
    initialiseHelp();
    initialiseInfo();
    initialiseScene();
    initialiseOtherVariables();
    initialiseControls();    

	myBallRadius = mySceneW/40.0;

	wallThickness = 0.20;
	 bottomB=mySceneBRY;
	 loader = new THREE.TextureLoader();
    //texture = loader.load( '../PIE/images/hardwood2_roughness.jpg' );
	 texture = loader.load( 'hardwood2_roughness.jpg' );
     texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
     texture.repeat.set( 3, 3 );
     texture.anisotropy = 16;
     material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: texture } );
     //geometry = new THREE.PlaneBufferGeometry( mySceneW * 2, backB * 2 );
    geometry = new THREE.BoxGeometry( mySceneW * 20, wallThickness*100, 100);
    //material = new THREE.MeshLambertMaterial( {color: 0xaaaaaa} );
    myFloor1  = new THREE.Mesh( geometry, material );
    myFloor1.lookAt(new THREE.Vector3(0,1,0));
    myFloor1.position.set(myCenterX, bottomB - (wallThickness / 2)-3, -200);
    myFloor1.receiveShadow = false;
    PIEaddElement(myFloor1);
	
	
	 wallThickness = 0.40;
	 bottomB=mySceneBRY;
	 loader = new THREE.TextureLoader();
     //texture = loader.load( '../PIE/images/grasslight-big.jpg' );
	 texture = loader.load( 'grasslight-big.jpg' );
	 
     texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
     texture.repeat.set( 1, 1 );
     texture.anisotropy = 16;
     material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: texture } );
    geometry = new THREE.BoxGeometry( mySceneW*20 , wallThickness*1000, 1);
    myFloor  = new THREE.Mesh( geometry, material );
    myFloor.lookAt(new THREE.Vector3(0,1,0));
    myFloor.position.set(myCenterX, -4.8 , -2);
    myFloor.receiveShadow = false;
    PIEaddElement(myFloor);
	
	
	
	wallThickness = 0.05;
	 bottomB=mySceneBRY;
	 loader = new THREE.TextureLoader();
     texture = loader.load( 'rectilinear_2.jpg' );
     texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
     texture.repeat.set( 1, 1 );
     texture.anisotropy = 16;
     material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: texture } );
     //geometry = new THREE.PlaneBufferGeometry( mySceneW * 2, backB * 2 );
    geometry = new THREE.BoxGeometry( mySceneW *2, wallThickness/2, 15);
    //material = new THREE.MeshLambertMaterial( {color: 0xaaaaaa} );
    Rectilinear2  = new THREE.Mesh( geometry, material );
     Rectilinear2.lookAt(new THREE.Vector3(0,1,0));
    //myFloor.position.set(myCenterX, bottomB - (wallThickness / 2), -2);
     Rectilinear2.receiveShadow = false;
	 Rectilinear2.position.set(200,0,0);
    PIEaddElement( Rectilinear2);
	
	wallThickness = 0.05;
	 bottomB=mySceneBRY;
	 loader = new THREE.TextureLoader();
     texture = loader.load( 'rectilinear_3.jpg' );
     texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
     texture.repeat.set( 1, 1 );
     texture.anisotropy = 16;
     material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: texture } );
     //geometry = new THREE.PlaneBufferGeometry( mySceneW * 2, backB * 2 );
    geometry = new THREE.BoxGeometry( mySceneW *2, wallThickness/2, 15);
    //material = new THREE.MeshLambertMaterial( {color: 0xaaaaaa} );
    Rectilinear3  = new THREE.Mesh( geometry, material );
     Rectilinear3.lookAt(new THREE.Vector3(0,1,0));
    //myFloor.position.set(myCenterX, bottomB - (wallThickness / 2), -2);
     Rectilinear3.receiveShadow = false;
	 Rectilinear3.position.set(200,0,0);
    PIEaddElement( Rectilinear3);

	wallThickness = 0.05;
	 bottomB=mySceneBRY;
	 loader = new THREE.TextureLoader();
     texture = loader.load( 'circular_1.jpg' );
     texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
     texture.repeat.set( 1, 1 );
     texture.anisotropy = 16;
     material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: texture } );
     //geometry = new THREE.PlaneBufferGeometry( mySceneW * 2, backB * 2 );
    geometry = new THREE.BoxGeometry( mySceneW *2, wallThickness/2, 15);
    //material = new THREE.MeshLambertMaterial( {color: 0xaaaaaa} );
    Circular1  = new THREE.Mesh( geometry, material );
    Circular1.lookAt(new THREE.Vector3(0,1,0));
    //myFloor.position.set(myCenterX, bottomB - (wallThickness / 2), -2);
    Circular1.receiveShadow = false;
    Circular1.position.set(200,0,0); 
    PIEaddElement(Circular1);

		wallThickness = 0.05;
	 bottomB=mySceneBRY;
	 loader = new THREE.TextureLoader();
     texture = loader.load( 'circular_2.jpg' );
     texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
     texture.repeat.set( 1, 1 );
     texture.anisotropy = 16;
     material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: texture } );
     //geometry = new THREE.PlaneBufferGeometry( mySceneW * 2, backB * 2 );
    geometry = new THREE.BoxGeometry( mySceneW *2, wallThickness/2, 15);
    //material = new THREE.MeshLambertMaterial( {color: 0xaaaaaa} );
    Circular2 = new THREE.Mesh( geometry, material );
    Circular2.lookAt(new THREE.Vector3(0,1,0));
    //myFloor.position.set(myCenterX, bottomB - (wallThickness / 2), -2);
    Circular2.receiveShadow = false;
    Circular2.position.set(200,0,0);
	PIEaddElement(Circular2);

	
	wallThickness = 0.05;
	 bottomB=mySceneBRY;
	 loader = new THREE.TextureLoader();
     texture = loader.load( 'periodic_1.jpg' );
     texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
     texture.repeat.set( 1, 1 );
     texture.anisotropy = 16;
     material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: texture } );
     //geometry = new THREE.PlaneBufferGeometry( mySceneW * 2, backB * 2 );
    geometry = new THREE.BoxGeometry( mySceneW *2, wallThickness/2, 15);
    //material = new THREE.MeshLambertMaterial( {color: 0xaaaaaa} );
    Periodic1  = new THREE.Mesh( geometry, material );
    Periodic1.lookAt(new THREE.Vector3(0,1,0));
    //myFloor.position.set(myCenterX, bottomB - (wallThickness / 2), -2);
    Periodic1.receiveShadow = false;
    Periodic1.position.set(200,0,0);
	PIEaddElement(Periodic1);
	
	
	wallThickness = 0.05;
	 bottomB=mySceneBRY;
	 loader = new THREE.TextureLoader();
     texture = loader.load( 'periodic_3.jpg' );
     texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
     texture.repeat.set( 1, 1 );
     texture.anisotropy = 16;
     material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: texture } );
     //geometry = new THREE.PlaneBufferGeometry( mySceneW * 2, backB * 2 );
    geometry = new THREE.BoxGeometry( mySceneW *2, wallThickness/2, 15);
    //material = new THREE.MeshLambertMaterial( {color: 0xaaaaaa} );
    Periodic3  = new THREE.Mesh( geometry, material );
    Periodic3.lookAt(new THREE.Vector3(0,1,0));
    //myFloor.position.set(myCenterX, bottomB - (wallThickness / 2), -2);
    Periodic3.receiveShadow = false;
    Periodic3.position.set(200,0,0);
	PIEaddElement(Periodic3);
	
	
	wallThickness = 0.05;
	 bottomB=mySceneBRY;
	 loader = new THREE.TextureLoader();
     texture = loader.load( 'periodic_3.jpg' );
     texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
     texture.repeat.set( 1, 1 );
     texture.anisotropy = 16;
     material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: texture } );
     //geometry = new THREE.PlaneBufferGeometry( mySceneW * 2, backB * 2 );
    geometry = new THREE.BoxGeometry( mySceneW *2, wallThickness/2, 15);
    //material = new THREE.MeshLambertMaterial( {color: 0xaaaaaa} );
    Periodic3  = new THREE.Mesh( geometry, material );
    Periodic3.lookAt(new THREE.Vector3(0,1,0));
    //myFloor.position.set(myCenterX, bottomB - (wallThickness / 2), -2);
    Periodic3.receiveShadow = false;
    Periodic3.position.set(200,0,0);
	PIEaddElement(Periodic3);
	
	wallThickness = 0.05;
	 bottomB=mySceneBRY;
	 loader = new THREE.TextureLoader();
     texture = loader.load( 'other_2.jpg' );
     texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
     texture.repeat.set( 1, 1 );
     texture.anisotropy = 16;
     material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: texture } );
     //geometry = new THREE.PlaneBufferGeometry( mySceneW * 2, backB * 2 );
    geometry = new THREE.BoxGeometry( mySceneW *2, wallThickness/2, 15);
    //material = new THREE.MeshLambertMaterial( {color: 0xaaaaaa} );
    Other1  = new THREE.Mesh( geometry, material );
    Other1.lookAt(new THREE.Vector3(0,1,0));
    //myFloor.position.set(myCenterX, bottomB - (wallThickness / 2), -2);
    Other1.receiveShadow = false;
    Other1.position.set(200,0,0);
	PIEaddElement(Other1);
	
	
	    text1 = document.createElement('div');
        text1.style.position = 'absolute';
        //text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
        text1.id="text1";
		text1.style.width = 1000;
        text1.style.height = 1000;
        text1.style.backgroundColor = "white";
        text1.innerHTML = " Rectilinear  Motion  of  a  Ball  on  a  Planck. <br>";
		//console.log(mySceneW +" "+mySceneW);
		//console.log(innerHeight+" "+innerWidth);
		text1.style.top = innerHeight/mySceneH*4.55 + 'px';
        text1.style.left = 490 + 'px';
        document.body.appendChild(text1);
		
	    var baseGeometry1 = new THREE.BoxGeometry(12.0,0.1,2.0);
        var baseMaterial1 = new THREE.MeshBasicMaterial({color: 0x872D1A});
        base1 = new THREE.Mesh(baseGeometry1, baseMaterial1);
		base1.position.set(5,-8.0,0);
        PIEaddElement(base1);
		
		var baseGeometry2 = new THREE.BoxGeometry(0.1,4.0,2.0);
        var baseMaterial2 = new THREE.MeshBasicMaterial({color: 0x872D1A});
        base2 = new THREE.Mesh(baseGeometry2, baseMaterial2);
		base2.position.set(-1,8.5,-0.5);
        PIEaddElement(base2);
		
		var TableGeometry1 = new THREE.BoxGeometry(12.5,0.05,2.0);
        var TableMaterial1 = new THREE.MeshBasicMaterial({color: 0x872D1A});
        table1 = new THREE.Mesh(TableGeometry1, TableMaterial1);
		table1.position.set(0,-2.0,0);
		table1.rotation.z=-0.1*Math.PI;
        PIEaddElement(table1);
		
		var BallGeometrybl = new THREE.SphereGeometry(myBallRadius, 12, 12);
        var BallMaterialbl = new THREE.MeshBasicMaterial({color: 0xFFC300  });
        Balll = new THREE.Mesh(BallGeometrybl, BallMaterialbl);
	    Balll.position.set(-5.8,0.4,0);
	//	Balll.position.set(0,-1.5,0);
        PIEaddElement(Balll);
		
		
		var BallGeometryb2 = new THREE.SphereGeometry(myBallRadius/2, 12, 12);
        var BallMaterialb2 = new THREE.MeshBasicMaterial({color: 0x872D1A  });
        Ball2 = new THREE.Mesh(BallGeometryb2, BallMaterialb2);
	    Ball2.position.set(-0,0,0);
        PIEaddElement(Ball2);
		
		
		var BallGeometryb3 = new THREE.SphereGeometry(myBallRadius, 12, 12);
        var BallMaterialb3 = new THREE.MeshBasicMaterial({color: 0xFFC300  });
        Ball3 = new THREE.Mesh(BallGeometryb3, BallMaterialb3);
	    Ball3.position.set(-5.0,0.0,0);
        PIEaddElement(Ball3);
		
	
		var TableGeometryb3 = new THREE.BoxGeometry(15,0.2,2.0);
        var TableMaterialb3 = new THREE.MeshBasicMaterial({color: 0x872D1A  });
        tableb3 = new THREE.Mesh(TableGeometryb3, TableMaterialb3);
	    tableb3.position.set(0.0,7.0,0);
        PIEaddElement(tableb3);
		
		var BallGeometryb4 = new THREE.SphereGeometry(myBallRadius, 12, 12);
        var BallMaterialb4 = new THREE.MeshBasicMaterial({color: 0xFFC300  });
        Ball4 = new THREE.Mesh(BallGeometryb4, BallMaterialb4);
	    Ball4.position.set(0.0,0.0,0);
        PIEaddElement(Ball4);
		
		t2g=new THREE.Geometry();
		t2g.vertices.push(
		new THREE.Vector3(-0.3,3.5,0),
		new THREE.Vector3(-1.3,3.5,0));
		var t2m = new THREE.LineBasicMaterial({color: 0xaaaaaa});
		t2=new THREE.Line(t2g,t2m)
		PIEaddElement(t2);
	
	resetExperiment();	
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
	
}

function resetExperiment()
{
    initialiseOtherVariables();  
    Rectilinear();	
}
function updateExperimentElements(t, dt)
{
    var T;      
    var tempT;          /* Temporary time */
    Ball1X = Balll.position.x;
    Ball1Y =Balll.position.y;
    Ball4X = Ball4.position.x;
    Ball4Y = Ball4.position.y;
    Ball3X = Ball3.position.x;
    Ball3Y = Ball3.position.y;	
	
	T = dt / 1000.0;    /* convert to seconds */
    
	if(flag==1)
	{
		if(Ball1X<6.5)
		{
		  Ball1X +=0.1;
          Ball1Y =-0.3275862*Ball1X-1.5;
          Balll.position.set(Ball1X,Ball1Y,0);		  
		}
		//console.log(Ball1X);
	}
	if(flag==2)
	{
		if(Ball3Y>0)
		{
			if ((Ball3X <5) && (Ball3X > (-5)))
		   {
		    
			Ball3Y=Math.sqrt(25-Ball3X*Ball3X);
			Ball3X +=0.1;
			console.log('a '+Ball3X+" "+Ball3Y);
		   }
		   else
		   {
			   Ball3Y = -0.00000001;
               Ball3X = 4.9999999999999;
              console.log('b '+Ball3X+" "+Ball3Y);			   
		   }
		}
		else if(Ball3Y<0)
		{
		    if ((Ball3X < 5) && Ball3X > (-5))
		   {
		      
			  Ball3Y=-Math.sqrt(25-Ball3X*Ball3X);
			  Ball3X -=0.1;
			  console.log('c '+Ball3X+" "+Ball3Y);
		   }
		    else
		   {
			   Ball3Y = 0.000000001;
               Ball3X = -4.999999999999999;   
			   console.log('d '+Ball3X+" "+Ball3Y);
		    }
		}
		else
		{
		   if (Ball3X >= 5) {
              
               Ball3Y = -(Math.sqrt(25 - Ball3X*Ball3X));
				 Ball3X -= 0.0001;
			  console.log('e '+Ball3X+" "+Ball3Y);
           }
           else{
               
               Ball3Y = (Math.sqrt(25 - Ball3X*Ball3X));
			   Ball3X += 0.0001;
			   console.log('f '+Ball3X+" "+Ball3Y);
           }		
		}		   
		t2.geometry.vertices[0]=new THREE.Vector3(0,0,0);
	t2.geometry.vertices[1]=new THREE.Vector3(Ball3X,Ball3Y,0);
	t2.geometry.verticesNeedUpdate=true;
		Ball3.position.set(Ball3X,Ball3Y,0);
		//console.log(Ball3X+" "+Ball3Y);
	}	
	
	if(flag==3)
	{
     if (Ball4X <= 5 && Ball4X >= -5)
		 {
           if (Ball4X <= 5 && f1 == 0) 
		   {
               Ball4X += 0.1;
               Ball4Y = (7 - Math.sqrt(49 - ((Ball4X) * (Ball4X))));
               //console.log(Ball4X + ' ' + Ball4Y + " a");
           }
           if (Ball4X >= 5) 
		   {
               f1 = 1;
               //y1 =Math.sqrt(25 - ((x1) * (x1)));
               //console.log(Ball4X + ' ' + Ball4Y + " b");
           }
           if (Ball4X > -5 && f1 == 1) 
		   {
               Ball4X -= 0.1;
               Ball4Y = (7 - Math.sqrt(49 - ((Ball4X) * (Ball4X))));
               //console.log(Ball4X + ' ' + Ball4Y + " c");
           }
           if (Ball4X <= -5) 
		   {
               f1 = 0;
               Ball4X = -4.999999;
               //console.log(Ball4X + ' ' + Ball4Y + " d");
           }
       }	
	   t2.geometry.vertices[0]=new THREE.Vector3(0,7,0);
	   t2.geometry.vertices[1]=new THREE.Vector3(Ball4X,Ball4Y,0);
	   t2.geometry.verticesNeedUpdate=true;
		Ball3.position.set(Ball3X,Ball3Y,0);
		Ball4.position.set(Ball4X,Ball4Y,0);
		
	}
}

