var mySceneTLX;        
var mySceneTLY;        
var mySceneBRX;
var mySceneBRY;
var firstTime = 1;
var north;
var south;

var bulb;


function initialiseHelp() {
    helpContent="";
    helpContent = helpContent + "<h2>Electric generator</h2>";
    helpContent = helpContent + "<h3><u>About the experiment</u></h3>";
    helpContent = helpContent + "<p>This experiment shows when a coil is rotated in a magnetic field ,electric current gets generated in the coil.Hence it is known as Electric generator.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<h4>Click on start button/switch to start the animation</h4>";
    helpContent = helpContent + "<p> </p>";
    helpContent = helpContent + "<h4>Click on Reset button to reset animation</h4>";
    helpContent = helpContent + "<h4>A speed Slider input is also given for the user to change the speed of the Rotor.</h4>";
    helpContent = helpContent + "<h4>Click on start button and then drag anywhere to view a 360 degree view and scroll to zoom</h4>";
    helpContent = helpContent + "<h4>Click on stop button/switch to stop the animation</h4>";
    helpContent = helpContent + "<h3>Interaction</h3>";
    helpContent = helpContent + "<p> User can use mouse controls to look around as it's a 3D model .</p>";
    helpContent = helpContent + "<h3> Happy Experimenting !!!! </h3>";






    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo() {
    infoContent =  "";
    infopContent = infoContent + "<h2>Electric generator</h2>";
    infoContent = infoContent + "<h3><u>About the experiment</u></h3>";
    infoContent = infoContent + "<p>This experiment shows when a coil is rotated in a magnetic field ,electric current gets generated in the coil.Hence it is known as Electric generator.</p>";
    infoContent = infoContent + "<h3>Concept</h3>";
    infoContent = infoContent + "<p> Faraday discovered that the above flow of electric charges could be induced by moving an electrical conductor, such as a wire that contains electric charges, in a magnetic field.</p>";
   	infoContent = infoContent + "<p> Therefore current will get produced in the circuit whenever coil will rotate .</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene() {
    mySceneTLX = 0.0;
    mySceneTLY = 20.0;
    mySceneBRX = 5.0;
    mySceneBRY = -20.0;
}

function setOn(){
	
	for(i=0;i<100;i++){
		mlines[i].visible = true;
	}
	north.visible = true;
	south.visible = true;
	bulb.material.color.setStyle("yellow");
}
function setOff(){
	for(i=0;i<100;i++){
		mlines[i].visible = false;
	}
	
	bulb.material.color.setStyle("white");
	if(north)
	north.visible = false;
	if(south)
	south.visible = false;
	PIErender();
}
var onoff = 0;
function PIEmouseMove(event){
	var intersects;     // to hold return array of ray intersects

    event.defaultPrevented = true;

    PIEmouseP.x = ( event.clientX / PIEcanvasW ) * 2 - 1;
    PIEmouseP.y = - ( event.clientY / PIEcanvasH ) * 2 + 1;

    /* Cast the ray to find intersecting objects */
    PIEraycaster.setFromCamera(PIEmouseP, PIEcamera);
        intersects = PIEraycaster.intersectObjects([]);
        if (intersects.length > 0)
        {
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
var speed = "Rotor speed :";
var speedval = 1;
function speedHandle(newval){
	speedval = newval;
}
function pieSetInputOutputDisplay(){
	PIEaddInputSlider(speed,1,speedHandle,1,10,1);
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
function loadExperimentElements() {
    
    var geometry;
    var material;
    var texture;
    PIEsetExperimentTitle("Electric generator");
    PIEsetDeveloperName("Anupam Singhal");

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();
    shiftX = 15;
    shiftY = 12;
    var lampbottom = new THREE.Mesh(new THREE.CylinderGeometry(2,2,2,32),new THREE.MeshPhongMaterial({color:"gray"}));
    PIEaddElement(lampbottom);
    lampbottom.position.set(15-shiftX,-8-shiftY,0);

    var lampbottom1 = new THREE.Mesh(new THREE.CylinderGeometry(1,1,0.9,32),new THREE.MeshPhongMaterial({color:"gray"}));
    PIEaddElement(lampbottom1);
    lampbottom1.position.set(15-shiftX,-7-shiftY,0);

	var lampbottom12 = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,0.5,32),new THREE.MeshPhongMaterial({color:"black"}));
    PIEaddElement(lampbottom12);
    lampbottom12.position.set(13-shiftX,-8-shiftY,0);
    lampbottom12.rotation.x = Math.PI/2;
    lampbottom12.rotation.z = Math.PI/2;

	var lampbottom123 = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,0.5,32),new THREE.MeshPhongMaterial({color:"black"}));
    PIEaddElement(lampbottom123);
    lampbottom123.position.set(17.15-shiftX,-8-shiftY,0);
    lampbottom123.rotation.x = Math.PI/2;
    lampbottom123.rotation.z = Math.PI/2;
     bulb = new THREE.Mesh(new THREE.SphereGeometry(3,24,32),new THREE.MeshPhongMaterial({color:"white",transparent:true,opacity:0.5,shininess:500}));
    PIEaddElement(bulb);
    bulb.position.set(15-shiftX,-4-shiftY,0);

    blueM = new THREE.Mesh(new THREE.BoxGeometry(18,20,20),new THREE.MeshPhongMaterial({color:"darkblue"}));
	PIEaddElement(blueM);
	blueM.position.set(-28,8,0);

    redM = new THREE.Mesh(new THREE.BoxGeometry(18,20,20),new THREE.MeshPhongMaterial({color:"red"}));
	PIEaddElement(redM);
	redM.position.set(28,8,0);

	metalwire = new THREE.Mesh(new THREE.CylinderGeometry(0.10,0.10,30,32),new THREE.MeshPhongMaterial({color:"orange"}));
	PIEaddElement(metalwire);
	metalwire.rotation.z = Math.PI/2;
	metalwire.position.set(0,-20,0);

	metalwire1 = new THREE.Mesh(new THREE.CylinderGeometry(0.10,0.10,10,32),new THREE.MeshPhongMaterial({color:"orange"}));
	PIEaddElement(metalwire1);
//	metalwire1.rotation.z = Math.PI/2;
	metalwire1.position.set(15,-15,0);
	
	metalwire2 = new THREE.Mesh(new THREE.CylinderGeometry(0.10,0.10,10,32),new THREE.MeshPhongMaterial({color:"orange"}));
	PIEaddElement(metalwire2);
//	metalwire1.rotation.z = Math.PI/2;
	metalwire2.position.set(-15,-15,0);

	metalwire3 = new THREE.Mesh(new THREE.CylinderGeometry(0.10,0.10,10,32),new THREE.MeshPhongMaterial({color:"orange"}));
	PIEaddElement(metalwire3);
	metalwire3.rotation.z = Math.PI/2;
	metalwire3.position.set(-10,-10,0);
	
	metalwire4 = new THREE.Mesh(new THREE.CylinderGeometry(0.10,0.10,10,32),new THREE.MeshPhongMaterial({color:"orange"}));
	PIEaddElement(metalwire4);
	metalwire4.rotation.z = Math.PI/2;
	metalwire4.position.set(10,-10,0);

	mid = new THREE.Mesh(new THREE.CylinderGeometry(1,1,10,32),new THREE.MeshPhongMaterial({color:"gray"}));
	PIEaddElement(mid);
	//mid.rotation.z = Math.PI/2;
	mid.position.set(0,-5,0);

	base = new THREE.Mesh(new THREE.CylinderGeometry(5,5,0.6,24),new THREE.MeshPhongMaterial({color:"black"}));
	PIEaddElement(base);
	//mid.rotation.z = Math.PI/2;
	base.position.set(0,-10,0);

	base1 = new THREE.Mesh(new THREE.CylinderGeometry(5,5,1,24),new THREE.MeshPhongMaterial({color:"black"}));
	PIEaddElement(base1);
	base1.position.set(0,-8,0);

	base2 = new THREE.Mesh(new THREE.CylinderGeometry(5,5,1,24),new THREE.MeshPhongMaterial({color:"black"}));
	PIEaddElement(base2);
	base2.position.set(0,-6,0);

	base3 = new THREE.Mesh(new THREE.CylinderGeometry(5,5,1,24),new THREE.MeshPhongMaterial({color:"black"}));
	PIEaddElement(base3);
	base3.position.set(0,-4,0);

	base4 = new THREE.Mesh(new THREE.CylinderGeometry(5,5,1,24),new THREE.MeshPhongMaterial({color:"black"}));
	PIEaddElement(base4);
	base4.position.set(0,-2,0);

	base5 = new THREE.Mesh(new THREE.CylinderGeometry(5,5,1,24),new THREE.MeshPhongMaterial({color:"black"}));
	PIEaddElement(base5);
	base5.position.set(0,0,0);

	coil1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01,0.01,0.01,32),new THREE.MeshPhongMaterial({color:"orange"}));
	PIEaddElement(coil1);
	coil1.position.set(0,5,0);

	coil2 = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,17,32),new THREE.MeshPhongMaterial({color:"orange"}));
	coil1.add(coil2);
	coil2.position.set(12,3.5,0);
	
	coil3 = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,17,32),new THREE.MeshPhongMaterial({color:"orange"}));
	coil1.add(coil3);
	coil3.position.set(-12,3.5,0);
	
	coil4 = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,24.7,32),new THREE.MeshPhongMaterial({color:"orange"}));
	coil1.add(coil4);
	coil4.rotation.z = Math.PI/2;
	coil4.position.set(0,-5,0);
	
	coil5 = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,24.7,32),new THREE.MeshPhongMaterial({color:"orange"}));
	coil1.add(coil5);
	coil5.rotation.z = Math.PI/2;
	coil5.position.set(0,12.4,0);

	var loader = new THREE.FontLoader();
        loader.load( 'optimer_regular.typeface.json', function ( font ) {
            var count = 0;
            var textGeometry = new THREE.TextGeometry("N", {
                font: font,
                size: 8,
                height:0.5,
                curveSegments: 12,
                bevelThickness: 1,
                bevelSize: 1,
                bevelEnabled: false
            });
            var textMaterial = new THREE.MeshPhongMaterial( 
                { color: "white",transparent:true,opacity:1.0,specular:"#B6C015"}
            );
            north = new THREE.Mesh( textGeometry, textMaterial );
            north.position.set(23,5,10.5);
            PIEaddElement( north );
            north.visible = false;
		     var textGeometry = new THREE.TextGeometry("S", {
                font: font,
                size: 8,
                height:0.5,
                curveSegments: 12,
                bevelThickness: 1,
                bevelSize: 1,
                bevelEnabled: false
            });
            var textMaterial = new THREE.MeshPhongMaterial( 
                { color: "white",transparent:true,opacity:1.0,specular:"#B6C015"}
            );
            south = new THREE.Mesh( textGeometry, textMaterial );
            south.position.set(-28,5,10.5);
            PIEaddElement(south);
            south.visible = false;
		

		});

	mlines = new Array(100);
	var left=-9;
	var right=9;
	var top = 17;
	var bottom =-1;
	var y=0;
	var z=0;
	for(i=0;i<100;i++){
		var geometry = new THREE.Geometry();
		geometry.vertices.push(new THREE.Vector3(-19,top-y,left + z));

		geometry.vertices.push(new THREE.Vector3(19,top-y,left+z));
		z=z+5;
		if(left+z>right){
			z = 0;
			y = y + 4;
			if(top - y < bottom){
				y = 0;
			}
		
		}
		mlines[i] = new THREE.Line(geometry, new THREE.LineBasicMaterial({color:"white"}));
		PIEaddElement(mlines[i]);
		mlines[i].visible = false;
	}
	//blueM.visible = false;



    controls = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);


	

    PIEscene.background = new THREE.Color("skyblue");
    var groundMaterial = new THREE.MeshBasicMaterial(  );
 
 	var mesh233 = new THREE.Mesh( new THREE.PlaneBufferGeometry( 6000, 6000 ), groundMaterial );
    mesh233.position.y = - 19-20;
    mesh233.material.color.set("lightgreen" );
    mesh233.rotation.x = - Math.PI / 2;
    PIEaddElement(mesh233);

    var groundMaterial = new THREE.MeshBasicMaterial(  );
    mesh233 = new THREE.Mesh( new THREE.PlaneBufferGeometry( 550, 5550 ), groundMaterial );
    mesh233.position.y = - 17-20;
    mesh233.material.color.set("green" );
    mesh233.rotation.x = - Math.PI / 2;
    PIEaddElement(mesh233);
    var groundMaterial = new THREE.MeshBasicMaterial(  );
 
	 mesh233 = new THREE.Mesh( new THREE.PlaneBufferGeometry(300, 300 ), groundMaterial );
    mesh233.position.y = - 15-20;
    mesh233.material.color.set("darkgreen" );
    mesh233.rotation.x = - Math.PI / 2;
    PIEaddElement(mesh233);
 
   

    pieSetInputOutputDisplay();
 
    document.getElementById("start").addEventListener("click", setOn);
    document.getElementById("stop").addEventListener("click",setOff);
    document.getElementById(">>").addEventListener("click",speedUp);
    document.getElementById("<<").addEventListener("click",speedDown);
    
    resetExperiment();
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    PIEadjustCamera(0,0,85);
 	
 // document.getElementById("start").click();
  //document.getElementById("stop").click();
   
    PIErender();
}
function resetExperiment()
{	
	speedval = 1;
	scalar = 1;
	PIEchangeInputSlider(speed,1);
	bulb.material.opacity = 0.5;
	setOff();
	coil1.rotation.y = 0;
	PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
	PIEadjustCamera(0,0,85);
	PIErender();
}
function updateExperimentElements(t, dt)
{   
	if(firstTime == 0){
		
		coil1.rotation.y += 0.1*speedval/2;
		bulb.material.opacity = 0.6+(speedval/20);
	
	}
	firstTime = 0;

	PIErender();
}

