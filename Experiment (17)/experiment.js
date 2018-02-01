var mySceneTLX;        
var mySceneTLY;        
var mySceneBRX;
var mySceneBRY;
var angle = 0;
var circle;
var nun =1;
var ball;
function initialiseHelp() {
    helpContent="";
    helpContent = helpContent + "<h2>Magnetic compass</h2>";
    helpContent = helpContent + "<h3><u>About the experiment</u></h3>";
    helpContent = helpContent + "<p>In this experiment,we are trying to show the magnetic nature of a compass and trying to depict that the needle always come to rest in one direction.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<h4>Click and drag the white centered ball to move the needle</h4>";
    helpContent = helpContent + "<p>User can also rotate the dial of the compass by just clicking and dragging it. </p>";
    helpContent = helpContent + "<h3> Happy Experimenting !!!! </h3>";






    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo() {
    infoContent =  "";
    infoContent = infoContent + "<h2>Magnetic compass</h2>";
    infoContent = infoContent + "<h3><u>About the experiment</u></h3>";
    infoContent = infoContent + "<p>In this experiment,we are trying to show the magnetic nature of a compass and trying to depict that the needle always come to rest in one direction.</p>";
    infoContent = infoContent + "<h3>Concept</h3>";
    infoContent = infoContent + "<p> No matter how we displace magnetic needle ,it always comes to rest in a particular direction because of Earth's constant magnetic field which exerts force on the needle forcing it to come back to a specific position.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene() {
    mySceneTLX = 0.0;
    mySceneTLY = 20.0;
    mySceneBRX = 5.0;
    mySceneBRY = -20.0;
}

function PIEstartAnimation(){

    if (true)
    {
        PIElastUpdateTime = Date.now();
        PIEpauseOffset = 0.0;
        PIEcurrentTime = 0.0;
        PIEoffsetTime  = 0.0;
        PIEanimationON = true;

        /* Enable Pause */
        PIEanimationPaused = false;
        PIEresumeButton.style.display = "none";
        PIEresumeButton.style.visibility = "hidden";
        PIEpauseButton.style.display = "inline";
        PIEpauseButton.style.visibility = "visible";

        /* Enable stop */
        if(nun==0){
        	PIEstartButton.style.display = "none";
        	PIEstopButton.style.display = "inline";

        }
        nun=0;
		PIEshowDisplayPanel();
        PIEanimate();
    }

}
function PIEstopAnimation()
{
    if (true)
    {
    //    PIEpauseOffset = 0.0;
     //   PIEcurrentTime = 0.0;
     //   PIEoffsetTime  = 0.0;
     //   PIEanimationON = false;

        /* Enable Pause */
        PIEanimationPaused = false;
        PIEresumeButton.style.display = "none";
        PIEresumeButton.style.visibility = "hidden";
        PIEpauseButton.style.display = "inline";
        PIEpauseButton.style.visibility = "hidden";

        /* Enable start */
        PIEstopButton.style.display = "none";
        PIEstartButton.style.display = "inline";

		PIEshowInputPanel();
    }
}


function PIEmouseDown( event )
{
var intersects;     // to hold return array of ray intersects

    // console.log("Mouse Down at ", PIEmouseP);
    event.defaultPrevented = true;
    PIEselectedDrag = null;

    PIEraycaster.setFromCamera(PIEmouseP, PIEcamera);
    intersects = PIEraycaster.intersectObjects(PIEdragElements);
    if (intersects.length > 0) {
            PIEselectedDrag = intersects[0].object;
        if (PIEraycaster.ray.intersectPlane(PIEdragPlane, PIEdragIntersect))
        {
            PIEdragOffset.copy(PIEdragIntersect).sub(PIEselectedDrag.position);
        }
        PIEscreenElem.style.cursor = 'move';
    PIEdefaultDragStart(PIEselectedDrag);
    }
}


function PIEmouseMove( event )
{
    var intersects;     // to hold return array of ray intersects

    event.defaultPrevented = true;

    PIEmouseP.x = ( event.clientX / PIEcanvasW ) * 2 - 1;
    PIEmouseP.y = - ( event.clientY / PIEcanvasH ) * 2 + 1;

    /* Cast the ray to find intersecting objects */
    PIEraycaster.setFromCamera(PIEmouseP, PIEcamera);

    if (PIEselectedDrag != null)
    {   /* Drag the element */
        PIEraycaster.ray.intersectPlane(PIEdragPlane, PIEdragIntersect);
        PIEdefaultDrag(PIEselectedDrag, PIEdragIntersect.sub(PIEdragOffset)); 
    }
    else
    {   /* If possible Call hoveron method of the nearest element */
        intersects = PIEraycaster.intersectObjects(PIEdragElements);
        if (intersects.length > 0)
        {
           console.log(intersects[0].object);
            PIEdragPlane.setFromNormalAndCoplanarPoint(PIEcamera.getWorldDirection(PIEdragPlane.normal), intersects[0].object.position);
            if (PIEselectedHover != intersects[0].object)
            {
                PIEdefaultHoverOFF(PIEselectedHover);
                PIEselectedHover = intersects[0].object;
                PIEdefaultHoverON(PIEselectedHover);
            }
            PIEscreenElem.style.cursor = 'pointer';
        }
    else if (PIEselectedHover != null)
        {
            PIEdefaultHoverOFF(PIEselectedHover);
            PIEselectedHover = null;
            PIEscreenElem.style.cursor = 'auto';
        }
    }
}

function pieSetInputOutputDisplay(){
	
}
var scalar = 1.0;
function speedUp(){
	if (scalar < 4){
		scalar = scalar*2;
		//speed = speed*2;

	}
}
function speedDown(){
	if (scalar>0.25){
		scalar = scalar/2;
		//speed =speed/2;
	}

}	

function myrotation(element,newpos){

	circle.rotation.y += 0.05;
	PIErender();

}
function myball(element,newpos) {
    var x= newpos.x;
    var y = newpos.y;

    angle = newpos.y / Math.sqrt(x*x + y*y);
    console.log(angle);
    var anglen = Math.acos(angle);
    ball.rotation.z = -anglen;

    if(Math.abs(ball.rotation.z) > Math.PI ){
            ball.rotation.z = 0;
    }
    PIErender();
    // body...
}
function loadExperimentElements() {
    
    PIEsetExperimentTitle("Magnetic compass");
    PIEsetDeveloperName("Anupam Singhal");

    initialiseHelp();
    initialiseInfo();
	initialiseScene();
  
    var meshMaterial = new THREE.MeshBasicMaterial({ transparent: false, map: THREE.ImageUtils.loadTexture('compass.png') });
  

    circle = new THREE.Mesh(new THREE.CylinderGeometry(12,12,3,32), meshMaterial);
	PIEaddElement(circle);
	circle.rotation.y = Math.PI/2;
	circle.rotation.x = Math.PI/2;
    circle.position.set(0,0,0);
	PIEdragElement(circle);
	PIEsetDrag(circle,myrotation);

	var geometry = new THREE.Geometry();
	geometry.vertices= [new THREE.Vector3(-1,0,0), new THREE.Vector3(1,0,0), new THREE.Vector3(0,7,0)]; 
	geometry.faces = [new THREE.Face3(1,0,2)];
	
	var mesh1= new THREE.Mesh( geometry, new THREE.MeshBasicMaterial({ color:"red", side: THREE.DoubleSide}) );
	//PIEaddElement(mesh);

    ball = new THREE.Mesh(new THREE.SphereGeometry(1,24,32),new THREE.MeshBasicMaterial({color:"white"}));
	PIEaddElement(ball);
	ball.position.set(0,0,1.5);
	ball.add(mesh1);
	mesh1.position.set(0,0,0);

    var geometry = new THREE.Geometry();
    geometry.vertices= [new THREE.Vector3(-1,0,0), new THREE.Vector3(1,0,0), new THREE.Vector3(0,-7,0)]; 
    geometry.faces = [new THREE.Face3(1,0,2)];
    
    var mesh2= new THREE.Mesh( geometry, new THREE.MeshBasicMaterial({ color:"black", side: THREE.DoubleSide}) );
    ball.add(mesh2);
    mesh2.position.set(0,0,0);


    var meshMaterial = new THREE.MeshBasicMaterial({ transparent: false, map: THREE.ImageUtils.loadTexture('dir.jpg') });
    recte2a = new THREE.Mesh(new THREE.BoxGeometry(10,10,1),meshMaterial);
    PIEaddElement(recte2a);
    recte2a.position.set(20,10,0);
    var loader = new THREE.FontLoader();
        loader.load( 'optimer_regular.typeface.json', function ( font ) {
            var count = 0;
            var textGeometry = new THREE.TextGeometry("click and drag the white centered ball to move the needle", {
                font: font,
                size: 0.9,
                height:0.01,
                curveSegments: 12,
                bevelThickness: 4,
                bevelSize: 1,
                bevelEnabled: false
            });
            var textMaterial = new THREE.MeshPhongMaterial( 
                { color: "black",transparent:true,opacity:1.0,specular:"black"}
            );
            wedge_ball = new THREE.Mesh( textGeometry, textMaterial );
            wedge_ball.position.set(-14,-15,0);
            PIEaddElement( wedge_ball );
            //wedge_ball.visible = false;
        });
    PIEdragElement(ball);
  //  PIEdragElement(mesh1);
   // PIEdragElement(mesh2);
    PIEsetDrag(ball,myball);
    //PIEsetDrag(mesh1,myball);
    //PIEsetDrag(mesh2,myball);
  

    //PIEaddElement(mesh);


//    controls = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);

    PIEscene.background = new THREE.Color("#ffdead");
/*    var groundMaterial = new THREE.MeshBasicMaterial(  );
 
 	var mesh233 = new THREE.Mesh( new THREE.PlaneBufferGeometry( 6000, 6000 ), groundMaterial );
    mesh233.position.y = - 19;
    mesh233.material.color.set("lightgreen" );
    mesh233.rotation.x = - Math.PI / 2;
    PIEaddElement(mesh233);

    var groundMaterial = new THREE.MeshBasicMaterial(  );
    mesh233 = new THREE.Mesh( new THREE.PlaneBufferGeometry( 550, 5550 ), groundMaterial );
    mesh233.position.y = - 17;
    mesh233.material.color.set("green" );
    mesh233.rotation.x = - Math.PI / 2;
    PIEaddElement(mesh233);
    var groundMaterial = new THREE.MeshBasicMaterial(  );
 
	 mesh233 = new THREE.Mesh( new THREE.PlaneBufferGeometry(300, 300 ), groundMaterial );
    mesh233.position.y = - 15;
    mesh233.material.color.set("darkgreen" );
    mesh233.rotation.x = - Math.PI / 2;
    PIEaddElement(mesh233);
 */
   

    pieSetInputOutputDisplay();
 
    document.getElementById("start").addEventListener("click", PIEstartAnimation);
    document.getElementById("stop").addEventListener("click",PIEstopAnimation);
    
    resetExperiment();
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    PIEadjustCamera(0,0,65);
 	
 // document.getElementById("start").click();
  //document.getElementById("stop").click();
//PIEanimationON = true;
//PIEanimationPaused = false

    PIErender();
}
function resetExperiment()
{	
	//PIEanimationON = true;
	PIEstartAnimation();
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
	PIEadjustCamera(0,0,65);
	PIErender();
}
var  count= 0;
function updateExperimentElements(t, dt)
{   
    if(count == 0){
	   if(ball.rotation.z > angle + 3)
            ball.rotation.z += 0.25;
	   else 
            count = 1;
        
    }
    if(count == 1){
        if(ball.rotation.z > angle-3)
            ball.rotation.z -= 0.25;
        else
            count = 0;
    }

    if (!PIEselectedDrag )
    {  
             ball.rotation.z = 0;
    }   
    PIErender();
}

