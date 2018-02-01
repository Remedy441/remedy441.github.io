var mySceneTLX;        
var mySceneTLY;        
var mySceneBRX;
var solenoid;
var mySceneBRY;
var key1;
var firstTime = 1;
var swtch;
var key;
var wire1;
var wire2;
var wire3;
var wire4;
var wire5;
var wire1E;
var wire2E;
var wire3E;
var wire4E;
var curveObject;
var curveObject1;
var curveObject2;
var curveObject3;
var curveObject4;
var curveObject5;
var curveObject6;
var curveObject7;
var curveObject8;
var curveObject9;
var north;
var south;

var bulb;


function initialiseHelp() {
    helpContent="";
    helpContent = helpContent + "<h2>Induced current through Electromagnetism</h2>";
    helpContent = helpContent + "<h3><u>About the experiment</u></h3>";
    helpContent = helpContent + "<p>In this experiment,there's a cell, switch, coil wrapped around the same core as the coil. When the current in first coil is changed (switch closed or opened), current is produced in the second coil.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<h4>Click on start button/switch to start the animation</h4>";
    helpContent = helpContent + "<p> </p>";
    helpContent = helpContent + "<h4>Click on Reset button to reset animation</h4>";
    helpContent = helpContent + "<h4>Click on |>>| button to make animation rate faster than normal</h4>";
    
    helpContent = helpContent + "<h4>Click on |<<| button to make animation rate slower than normal</h4>";
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
    infopContent = infoContent + "<h2>Induced current through Electromagnetism</h2>";
    infoContent = infoContent + "<h3><u>About the experiment</u></h3>";
    infoContent = infoContent + "<p>In this experiment,there's a cell, switch, coil wrapped around the same core as the coil. When the current in first coil is changed (switch closed or opened), current is produced in the second coil.</p>";
    infoContent = infoContent + "<h3>Concept</h3>";
    infoContent = infoContent + "<p> When current in the left circuit changes ,magnetic flux through the coil changes and hence electric current is being induced in right circuit through electromagnetism.</p>";
   	infoContent = infoContent + "<p> Therefore current will get produced in the right circuit for a moment when the switch in the left circuit is opened or closed.</p>";
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
	onoff = 1;
	key.rotation.z = 0;
	wire1.material.color.setStyle("yellow");
	wire2.material.color.setStyle("yellow");
	wire3.material.color.setStyle("yellow");
	wire4.material.color.setStyle("yellow");
	wire5.material.color.setStyle("yellow");
	solenoid.material.color.setStyle("yellow");

curveObject.visible = true;

curveObject1.visible = true;
curveObject2.visible = true;
curveObject3.visible = true;
curveObject4.visible = true;
curveObject5.visible = true;
curveObject6.visible = true;
curveObject7.visible = true;
curveObject8.visible = true;
curveObject9.visible = true;

north.visible = true;
south.visible = true;

}
function setOff(){
	onoff = 0;
	key.rotation.z = -Math.PI/7;
	wire1.material.color.setStyle("black");
	wire2.material.color.setStyle("black");
	wire3.material.color.setStyle("black");
	wire4.material.color.setStyle("black");
	wire5.material.color.setStyle("black");

	solenoid.material.color.setStyle("black");	
curveObject.visible = false;

curveObject1.visible = false;
curveObject2.visible = false;
curveObject3.visible = false;
curveObject4.visible = false;
curveObject5.visible = false;
curveObject6.visible = false;
curveObject7.visible = false;
curveObject8.visible = false;
curveObject9.visible = false;


	PIEstartAnimation();
	PIErender();
}
var onoff = 0;
function PIEmouseDown( event )
{
    var intersects;     // to hold return array of ray intersects

    // console.log("Mouse Down at ", PIEmouseP);
    event.defaultPrevented = true;
   
    PIEraycaster.setFromCamera(PIEmouseP, PIEcamera);
    intersects = PIEraycaster.intersectObjects([swtch,key,key1]);
    if (intersects.length > 0) {
        if(onoff == 0){
            
            setOn();
            onoff = 1;
            document.getElementById("start").click();
        
        }
        else{
            setOff();
            onoff = 0;
     	 	document.getElementById("stop").click();
     	 	north.visible = false;
			south.visible = false;

     
        }
        PIEscreenElem.style.cursor = 'pointer';
    }
}

function PIEmouseMove(event){
	var intersects;     // to hold return array of ray intersects

    event.defaultPrevented = true;

    PIEmouseP.x = ( event.clientX / PIEcanvasW ) * 2 - 1;
    PIEmouseP.y = - ( event.clientY / PIEcanvasH ) * 2 + 1;

    /* Cast the ray to find intersecting objects */
    PIEraycaster.setFromCamera(PIEmouseP, PIEcamera);
        intersects = PIEraycaster.intersectObjects([swtch,key,key1]);
        if (intersects.length > 0)
        {
        	console.log("ghkhkj");
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
function loadExperimentElements() {
    
    var geometry;
    var material;
    var texture;
    PIEsetExperimentTitle("Induced Current through Electromagnetism");
    PIEsetDeveloperName("Anupam Singhal");

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();

    var geometry = new THREE.TubeGeometry( new THREE.LineCurve(new THREE.Vector3(25,7.5,0),new THREE.Vector3(5,7.5,0)),50, 3, 20, false );
    var material = new THREE.MeshBasicMaterial( { color: "black" } );
    solenoid = new THREE.Line(geometry, material);
    PIEaddElement(solenoid);

    solenoid.rotation.y = Math.PI;


    var geometry = new THREE.TubeGeometry( new THREE.LineCurve(new THREE.Vector3(-25,7.5,0),new THREE.Vector3(-5,7.5,0)),50, 3, 20, false );
    var material = new THREE.MeshBasicMaterial( { color: "black" } );
    var solenoid2 = new THREE.Line(geometry, material);
    PIEaddElement(solenoid2);

    solenoid2.rotation.y = Math.PI;
   /* var texture = THREE.ImageUtils.loadTexture('cond.png', {}, function() {
    PIErenderer.render(PIEscene);
	});*/
	//var meshMaterial = new THREE.MeshPhongMaterial({ transparent: false, map:texture });
    
    var conductor = new THREE.Mesh(new THREE.CylinderGeometry(2.5,2.5,55,32),new THREE.MeshPhongMaterial({color:"gray"}));
    PIEaddElement(conductor);
    conductor.position.set(0,7.5,0);
    conductor.rotation.z = Math.PI/2;
	conductor.rotation.y = Math.PI;


  //  var meshMaterial = new THREE.MeshPhongMaterial({ transparent: false, map: THREE.ImageUtils.loadTexture('duracell.png') });
    var battery = new THREE.Mesh(new THREE.CylinderGeometry(2,2,3,32),new THREE.MeshPhongMaterial({color:"orange"}));
    battery.position.set(-18.5,-8,3);
    PIEaddElement(battery);
    battery.rotation.z = Math.PI/2;
    battery.rotation.y = Math.PI;
    battery.rotation.x = -0.1;

/*	var batteryb = new THREE.Mesh(new THREE.CylinderGeometry(2.1,2.1,5,32),new THREE.MeshPhongMaterial({color:"black"}));
    batteryb.position.set(-14.45,-8,3);
    PIEaddElement(batteryb);
    batteryb.rotation.z = Math.PI/2;
    batteryb.rotation.y = Math.PI;
    batteryb.rotation.x = -0.1;
*/


    var batteryC = new THREE.Mesh(new THREE.CylinderGeometry(2,2,0.05,32),new THREE.MeshPhongMaterial({color:"gray"}));
    battery.add(batteryC);
    batteryC.position.set(0,-1.5,0);
    

    var batteryC1 = new THREE.Mesh(new THREE.CylinderGeometry(2,2,5,32),new THREE.MeshPhongMaterial({color:"black"}));
    battery.add(batteryC1);
    batteryC1.position.set(0,4,0);
    
    var batterytip = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,2,32),new THREE.MeshPhongMaterial({color:"gray"}));
    battery.add(batterytip);
    batterytip.position.set(0,-1.5,0);
	
    key = new THREE.Mesh(new THREE.SphereGeometry(0.5,0.5,24,32),new THREE.MeshPhongMaterial({color:"yellow"}));
    PIEaddElement(key);
    key.position.set(-5,-7,3);
    
    swtch = new THREE.Mesh(new THREE.CylinderGeometry(0.35,0.35,8,32),new THREE.MeshPhongMaterial({color : "white"}));
    key.add(swtch);
    swtch.position.set(0,3.8,0);

    key.rotation.z = -Math.PI/7;
	key1 = new THREE.Mesh(new THREE.SphereGeometry(0.5,0.5,24,32),new THREE.MeshPhongMaterial({color:"yellow"}));
    PIEaddElement(key1);
    key1.position.set(-5,1,3);

    var lampbottom = new THREE.Mesh(new THREE.CylinderGeometry(2,2,2,32),new THREE.MeshPhongMaterial({color:"gray"}));
    PIEaddElement(lampbottom);
    lampbottom.position.set(15,-8,3);

    var lampbottom1 = new THREE.Mesh(new THREE.CylinderGeometry(1,1,0.9,32),new THREE.MeshPhongMaterial({color:"gray"}));
    PIEaddElement(lampbottom1);
    lampbottom1.position.set(15,-7,3);

	var lampbottom12 = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,0.5,32),new THREE.MeshPhongMaterial({color:"black"}));
    PIEaddElement(lampbottom12);
    lampbottom12.position.set(13,-8,3);
    lampbottom12.rotation.x = Math.PI/2;
    lampbottom12.rotation.z = Math.PI/2;

	var lampbottom123 = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,0.5,32),new THREE.MeshPhongMaterial({color:"black"}));
    PIEaddElement(lampbottom123);
    lampbottom123.position.set(17.15,-8,3);
    lampbottom123.rotation.x = Math.PI/2;
    lampbottom123.rotation.z = Math.PI/2;
     bulb = new THREE.Mesh(new THREE.SphereGeometry(3,24,32),new THREE.MeshPhongMaterial({color:"white",transparent:true,opacity:0.7,shininess:500}));
    PIEaddElement(bulb);
    bulb.position.set(15,-4,3);


    var geometry = new THREE.TubeGeometry( new THREE.LineCurve(new THREE.Vector3(5,-8,3),new THREE.Vector3(13,-8,3)), 10, 0.04, 8, false );
    var material = new THREE.MeshBasicMaterial( { color: "black" } );
    
    wire1E = new THREE.Mesh(geometry, material);
    PIEaddElement(wire1E);

    var geometry = new THREE.TubeGeometry( new THREE.LineCurve(new THREE.Vector3(25,-8,3),new THREE.Vector3(17.15,-8,3)), 10, 0.04, 8, false );
    var material = new THREE.MeshBasicMaterial( { color: "black" } );
    
    wire2E = new THREE.Mesh(geometry, material);
    PIEaddElement(wire2E);

    var geometry = new THREE.TubeGeometry( new THREE.LineCurve(new THREE.Vector3(25,-8,3),new THREE.Vector3(25,7.5,3)), 10, 0.04, 8, false );
    var material = new THREE.MeshBasicMaterial( { color: "black" } );
    
    wire3E = new THREE.Mesh(geometry, material);
    PIEaddElement(wire3E);
      
    var geometry = new THREE.TubeGeometry( new THREE.LineCurve(new THREE.Vector3(5,7.5,3),new THREE.Vector3(5,-8,3)), 10, 0.04, 8, false );
    var material = new THREE.MeshBasicMaterial( { color: "black" } );
    
    wire4E = new THREE.Mesh(geometry, material);
    PIEaddElement(wire4E);


    var geometry = new THREE.TubeGeometry( new THREE.LineCurve(new THREE.Vector3(-25,-8,3),new THREE.Vector3(-16,-8,3)), 10, 0.04, 8, false );
    var material = new THREE.MeshBasicMaterial( { color: "black" } );
    
    wire1 = new THREE.Mesh(geometry, material);
    PIEaddElement(wire1);

	var geometry = new THREE.TubeGeometry( new THREE.LineCurve(new THREE.Vector3(-16,-8,3),new THREE.Vector3(-5,-8,3)), 10, 0.04, 8, false );
    var material = new THREE.MeshBasicMaterial( { color: "black" } );
    
    wire2 = new THREE.Mesh(geometry, material);
    PIEaddElement(wire2);

	var geometry = new THREE.TubeGeometry( new THREE.LineCurve(new THREE.Vector3(-25,-8,3),new THREE.Vector3(-25,7.5,3)), 10, 0.04, 8, false );
    var material = new THREE.MeshBasicMaterial( { color: "black" } );
    
    wire3 = new THREE.Mesh(geometry, material);
    PIEaddElement(wire3);
    
	var geometry = new THREE.TubeGeometry( new THREE.LineCurve(new THREE.Vector3(-5,-8,3),new THREE.Vector3(-5,-7,3)), 10, 0.04, 8, false );
    var material = new THREE.MeshBasicMaterial( { color: "black" } );
    
    wire4 = new THREE.Mesh(geometry, material);
    PIEaddElement(wire4);
    
	var geometry = new THREE.TubeGeometry( new THREE.LineCurve(new THREE.Vector3(-5,1,3),new THREE.Vector3(-5,7.5,3)), 10, 0.04, 8, false );
    var material = new THREE.MeshBasicMaterial( { color: "black" } );
    
    wire5 = new THREE.Mesh(geometry, material);
    PIEaddElement(wire5);
/*
    var curve = new THREE.CatmullRomCurve3([
	new THREE.Vector3( -15, 11, 0 ),
	new THREE.Vector3( -25, 10.6, 0 ),
	new THREE.Vector3( -5, 10.6, 0 ),
	new THREE.Vector3( -10, 11, 0 ),
	new THREE.Vector3( -15, 12 ,0 )
	
	]);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );
	var material = new THREE.LineBasicMaterial( { color : "white" } );
 	var curveObject = new THREE.Line( geometry, material );    
 	PIEaddElement(curveObject);
*/

var curve = new THREE.CubicBezierCurve3(
	new THREE.Vector3( -6, 10.2, 0 ),
	new THREE.Vector3( -3, 10.6, 0 ),
	new THREE.Vector3( -1, 12, 0 ),
	new THREE.Vector3( -0, 13, 0 )
);

var geometry = new THREE.Geometry();
geometry.vertices = curve.getPoints( 50 );

var material = new THREE.LineBasicMaterial( { color : "white" } );

// Create the final object to add to the scene
 curveObject = new THREE.Line( geometry, material );    

   // PIEaddElement(woodenPlank);
PIEaddElement(curveObject);

var curve = new THREE.CubicBezierCurve3(
	new THREE.Vector3( -6, 10, 0 ),
	new THREE.Vector3( -1, 10.6, 0 ),
	new THREE.Vector3( 1, 12, 0 ),
	new THREE.Vector3( 2, 13, 0 )
);

var geometry = new THREE.Geometry();
geometry.vertices = curve.getPoints( 50 );

var material = new THREE.LineBasicMaterial( { color : "white" } );

// Create the final object to add to the scene
 curveObject1 = new THREE.Line( geometry, material );    

   // PIEaddElement(woodenPlank);
PIEaddElement(curveObject1);

var curve = new THREE.CubicBezierCurve3(
	new THREE.Vector3( -6, 9.6, 0 ),
	new THREE.Vector3( 0, 10, 0 ),
	new THREE.Vector3( 2.5, 11, 0 ),
	new THREE.Vector3( 3.5, 12, 0 )
);

var geometry = new THREE.Geometry();
geometry.vertices = curve.getPoints( 50 );

var material = new THREE.LineBasicMaterial( { color : "white" } );

// Create the final object to add to the scene
 curveObject2 = new THREE.Line( geometry, material );    

   // PIEaddElement(woodenPlank);
PIEaddElement(curveObject2);


var curve = new THREE.CubicBezierCurve3(
	new THREE.Vector3( -6, 5, 0 ),
	new THREE.Vector3( 0, 4, 0 ),
	new THREE.Vector3( 2.5, 3, 0 ),
	new THREE.Vector3( 3.5, 2, 0 )
);

var geometry = new THREE.Geometry();
geometry.vertices = curve.getPoints( 50 );

var material = new THREE.LineBasicMaterial( { color : "white" } );

// Create the final object to add to the scene
 curveObject3 = new THREE.Line( geometry, material );    

   // PIEaddElement(woodenPlank);
PIEaddElement(curveObject3);


var curve = new THREE.CubicBezierCurve3(
	new THREE.Vector3( -7, 5, 0 ),
	new THREE.Vector3( -2, 4, 0 ),
	new THREE.Vector3( -1, 3, 0 ),
	new THREE.Vector3( 0, 2, 0 )
);

var geometry = new THREE.Geometry();
geometry.vertices = curve.getPoints( 50 );

var material = new THREE.LineBasicMaterial( { color : "white" } );

// Create the final object to add to the scene
 curveObject4 = new THREE.Line( geometry, material );    

   // PIEaddElement(woodenPlank);
PIEaddElement(curveObject4);

var curve = new THREE.CubicBezierCurve3(
	new THREE.Vector3( -24.6, 10.2, 0 ),
	new THREE.Vector3( -25, 10.4, 0 ),
	new THREE.Vector3( -27, 11, 0 ),
	new THREE.Vector3( -28, 13, 0 )
);

var geometry = new THREE.Geometry();
geometry.vertices = curve.getPoints( 50 );

var material = new THREE.LineBasicMaterial( { color : "white" } );

// Create the final object to add to the scene
 curveObject5 = new THREE.Line( geometry, material );    

   // PIEaddElement(woodenPlank);
PIEaddElement(curveObject5);


var curve = new THREE.CubicBezierCurve3(
	new THREE.Vector3( -25, 10.2, 0 ),
	new THREE.Vector3( -28, 11, 0 ),
	new THREE.Vector3( -29.6, 12, 0 ),
	new THREE.Vector3( -30.9, 13, 0 )
);

var geometry = new THREE.Geometry();
geometry.vertices = curve.getPoints( 50 );

var material = new THREE.LineBasicMaterial( { color : "white" } );

// Create the final object to add to the scene
 curveObject6 = new THREE.Line( geometry, material );    

   // PIEaddElement(woodenPlank);
PIEaddElement(curveObject6);


var curve = new THREE.CubicBezierCurve3(
	new THREE.Vector3( -25.5, 10, 0 ),
	new THREE.Vector3( -28.2, 10.6, 0 ),
	new THREE.Vector3( -30.8, 11.3, 0 ),
	new THREE.Vector3( -31.8, 12.2, 0 )
);

var geometry = new THREE.Geometry();
geometry.vertices = curve.getPoints( 50 );

var material = new THREE.LineBasicMaterial( { color : "white" } );

// Create the final object to add to the scene
 curveObject7 = new THREE.Line( geometry, material );    

   // PIEaddElement(woodenPlank);
PIEaddElement(curveObject7);
var curve = new THREE.CubicBezierCurve3(
	new THREE.Vector3( -25, 5, 0 ),
	new THREE.Vector3( -28, 4, 0 ),
	new THREE.Vector3( -30.5, 3, 0 ),
	new THREE.Vector3( -31.5, 1.6, 0 )
);

var geometry = new THREE.Geometry();
geometry.vertices = curve.getPoints( 50 );

var material = new THREE.LineBasicMaterial( { color : "white" } );

// Create the final object to add to the scene
 curveObject8 = new THREE.Line( geometry, material );    

   // PIEaddElement(woodenPlank);
PIEaddElement(curveObject8);


var curve = new THREE.CubicBezierCurve3(
	new THREE.Vector3( -25.5, 5, 0 ),
	new THREE.Vector3( -30, 4.6, 0 ),
	new THREE.Vector3( -31, 3.2, 0 ),
	new THREE.Vector3( -33, 1.8, 0 )
);

var geometry = new THREE.Geometry();
geometry.vertices = curve.getPoints( 50 );

var material = new THREE.LineBasicMaterial( { color : "white" } );

// Create the final object to add to the scene
 curveObject9 = new THREE.Line( geometry, material );    

   // PIEaddElement(woodenPlank);
PIEaddElement(curveObject9);

curveObject.visible = false;

curveObject1.visible = false;
curveObject2.visible = false;
curveObject3.visible = false;
curveObject4.visible = false;
curveObject5.visible = false;
curveObject6.visible = false;
curveObject7.visible = false;
curveObject8.visible = false;
curveObject9.visible = false;



  var loader = new THREE.FontLoader();
        loader.load( 'optimer_regular.typeface.json', function ( font ) {
            var count = 0;
            var textGeometry = new THREE.TextGeometry("N", {
                font: font,
                size: 3.5,
                height:0.5,
                curveSegments: 12,
                bevelThickness: 1,
                bevelSize: 1,
                bevelEnabled: false
            });
            var textMaterial = new THREE.MeshPhongMaterial( 
                { color: "red",transparent:true,opacity:1.0,specular:"#B6C015"}
            );
            north = new THREE.Mesh( textGeometry, textMaterial );
            north.position.set(-24,5.5,3.8);
            PIEaddElement( north );
			var textGeometry = new THREE.TextGeometry("S", {
                font: font,
                size: 3.5,
                height:0.5,
                curveSegments: 12,
                bevelThickness: 1,
                bevelSize: 1,
                bevelEnabled: false
            });
            var textMaterial = new THREE.MeshPhongMaterial( 
                { color: "blue",transparent:true,opacity:1.0,specular:"blue"}
            );
            south = new THREE.Mesh( textGeometry, textMaterial );
            south.position.set(-7.6,5.5,3.8);
            PIEaddElement( south );
                        
            north.visible = false;
            south.visible = false;
            var textGeometry = new THREE.TextGeometry("+", {
                font: font,
                size: 1.5,
                height:0.1,
                curveSegments: 12,
                bevelThickness: 1,
                bevelSize: 1,
                bevelEnabled: false
            });
            var textMaterial = new THREE.MeshPhongMaterial( 
                { color: "red",transparent:true,opacity:1.0,specular:"red"}
            );
            plus = new THREE.Mesh( textGeometry, textMaterial );
            plus.position.set(-20,-8.5,5);
            PIEaddElement( plus );
			
            var textGeometry = new THREE.TextGeometry("-", {
                font: font,
                size: 2.5,
                height:0.1,
                curveSegments: 12,
                bevelThickness: 1,
                bevelSize: 1,
                bevelEnabled: false
            });
            var textMaterial = new THREE.MeshPhongMaterial( 
                { color: "white",transparent:true,opacity:1.0,specular:"white"}
            );
            minus = new THREE.Mesh( textGeometry, textMaterial );
            minus.position.set(-13.5,-8.7,5);
            PIEaddElement( minus );

            });

    controls = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);


	

    PIEscene.background = new THREE.Color("skyblue");
    var groundMaterial = new THREE.MeshBasicMaterial(  );
 
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
 
   

    pieSetInputOutputDisplay();
 
    document.getElementById("start").addEventListener("click", setOn);
    document.getElementById("stop").addEventListener("click",setOff);
    
    resetExperiment();
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    PIEadjustCamera(0,0,65);
 	
 // document.getElementById("start").click();
  //document.getElementById("stop").click();
   
    PIErender();
}
function resetExperiment()
{	
	//setOff();
		wire1.material.color.setStyle("black");
	wire2.material.color.setStyle("black");
	wire3.material.color.setStyle("black");
	wire4.material.color.setStyle("black");
	wire5.material.color.setStyle("black");

	solenoid.material.color.setStyle("black");	
curveObject.visible = false;

curveObject1.visible = false;
curveObject2.visible = false;
curveObject3.visible = false;
curveObject4.visible = false;
curveObject5.visible = false;
curveObject6.visible = false;
curveObject7.visible = false;
curveObject8.visible = false;
curveObject9.visible = false;
onoff = 0;

	bulb.material.color.setStyle("white");
	key.rotation.z = -Math.PI/7;
	if(north)
	north.visible = false;
	if(south)
	south.visible = false;

	firstTime = 1;
	PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
	PIEadjustCamera(0,0,65);
	PIErender();
}
function updateExperimentElements(t, dt)
{   
	if(onoff == 1){
		if (t<200){
			bulb.material.color.setStyle("yellow");
		}
		else if(t>=200 && t<2000){
			bulb.material.color.setStyle("white");
			
		}
	}
	if(firstTime == 0){
		if(onoff == 0){
			north.visible = false;
			south.visible = false;

			if (t<200){
				bulb.material.color.setStyle("yellow");
			}
			else if(t>=200 && t<2000){
				bulb.material.color.setStyle("white");
				PIEstopAnimation();			
			}
		}
	}
	firstTime = 0;

	PIErender();
}

