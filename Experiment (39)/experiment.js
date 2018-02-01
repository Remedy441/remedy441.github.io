var line, l2Mesh, l3Mesh, l4Mesh, l5Mesh, l6Mesh, l7Mesh;
var count = 0, flag = 0, f  = 0, speed = 0.05, pspeed = 0.05 ;
var mouse = new THREE.Vector3(), tableDiv, l9Mesh, l10Mesh, northPoleMesh;
var s2Mesh , added = 0, l11Mesh, l12Mesh, l13Mesh, l14Mesh, southPoleMesh;
var group = new THREE.Object3D() ,group1 = new THREE.Object3D();
camera = new THREE.PerspectiveCamera(163, window.innerWidth/window.innerHeight, 1, 1000);
var geometry = new THREE.BufferGeometry();
var MAX_POINTS = 500, switch_screen = 0 ;
positions = new Float32Array(MAX_POINTS * 3);
geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));


// material
var material = new THREE.LineBasicMaterial({ color: 0x00ff00, linewidth: 3});
// line
line = new THREE.Line(geometry, material);

var group = new THREE.Object3D() ;

var elem = document.createElement("img");
elem.setAttribute("src", "assets/q.png");
elem.setAttribute("height", "30%");
elem.setAttribute("width", "20%");
elem.style.position = 'absolute';
elem.style.top = "20%" ;
elem.style.left = "4%" ;
elem.style.display = "block" ;
document.body.appendChild(elem);

var helpContent = "";
function initialiseHelp() {
    helpContent = "";
    helpContent = helpContent + "<h2>Electric Motor</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows how electric motor works and principle behind that.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The start stage</h3>";
    helpContent = helpContent + "<p>The initial state is start stage. In this everything has already set up. <br><br>you can enter the animation stage by clicking the start button.</p>";
    
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, In an electric motor, The terminals t1 and t2 are connected to a battery through push button switch.</p>";
    helpContent = helpContent + "<p>When you press start button the electric current flows from dry cell to coil</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play button on the top line.</p>";   
    PIEupdateHelp(helpContent);
}
var infoContent = "";
function initialiseInfo() {
    infoContent = "";    
    infoContent = infoContent + "<h2>Electric Motor</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows how electric motor works and principle behind that..</p>";
    infoContent = infoContent + "<h3>Electric Motor</h3>";
    infoContent = infoContent + "<p>An electric motor is an electrical machine that converts electrical energy into mechanical energy..</p>";
    infoContent = infoContent + "<p>The reverse of this is the conversion of mechanical energy into electrical energy and is done by an electric generator.</p>";
    infoContent = infoContent + "<p>In normal motoring mode, most electric motors operate through the interaction between an electric motor's magnetic field and winding currents to generate force within the motor..</p>";
    infoContent = infoContent + "<p>Electric motors are used to produce linear or rotary force (torque), and should be distinguished from devices such as magnetic solenoids and loudspeakers that convert electricity into motion but do not generate usable mechanical powers, which are respectively referred to as actuators and transducers..</p>";
	infoContent = infoContent + "<h3>Lorentz force</h3>" ;
    infoContent = infoContent + "Lorentz force is the combination of electric and magnetic force on a point charge due to electromagnetic fields. this force is indicated with red color in animation" ;
    
    infoContent = infoContent + "<h3>Laplace force</h3>" ;
    infoContent = infoContent + "Laplace force is the magnetic force on a current-carrying wire (produced due to variation in the net value of Lorentz force). this force is indicated with yellow color in animation" ;
    infoContent = infoContent + "<h3>How does it work ?</h3>";
    infoContent = infoContent + "<p>Current flows through one or more pairs of brushes that bear on the commutator; the brushes connect an external source of electric power to the rotating armature.. </p>";
    infoContent = infoContent + "<p>The rotating armature consists of one or more coils of wire wound around a laminated, magnetically soft ferromagnetic core. Current from the brushes flows through the commutator and one winding of the armature, making it a temporary magnet (an electromagnet)..</p>";  
   infoContent = infoContent + "<p>The magnetic field produced by the armature interacts with a stationary magnetic field produced by either PMs or another winding (a field coil), as part of the motor frame. The force between the two magnetic fields tends to rotate the motor shaft..</p>";  
   infoContent = infoContent + "<p>The commutator switches power to the coils as the rotor turns, keeping the magnetic poles of the rotor from ever fully aligning with the magnetic poles of the stator field, so that the rotor never stops (like a compass needle does), but rather keeps rotating as long as power is applied..</p>";   
    PIEupdateInfo(infoContent);
}
function handleX(newValue) {
	pspeed = speed ;
	speed = newValue ;
}
function loadExperimentElements() {
    PIEsetExperimentTitle("Electric Motor");
    PIEsetDeveloperName("Srikanth Chekuri");
    initialiseHelp();
    initialiseInfo();
    
    PIEaddInputSlider("Current", 0.05, handleX, 0, 0.5, 0.05);
    var plane = new THREE.Mesh(new THREE.PlaneGeometry(120, 120), new THREE.MeshBasicMaterial({color : 0x003333})) ;
    plane.position.set(0, 0, -20) ;
    PIEaddElement(plane) ;
	PIEaddElement(line) ;
	addPoint() ;
	var texture = new THREE.ImageUtils.loadTexture('assets/magnet1.jpg', {}, function() {
    PIErender() ;
    }) ;
	var southPole = new THREE.BoxGeometry(1.2, 3, 1.2) ;
	var material = new THREE.MeshBasicMaterial({map : texture}) ;
	southPoleMesh = new THREE.Mesh(southPole, material) ;
	southPoleMesh.position.set(-2.1, -1, 0) ;
	PIEaddElement(southPoleMesh) ;

	var texture = new THREE.ImageUtils.loadTexture('assets/magnet1.jpg', {}, function() {
    PIErender() ;
    }) ;
	var northPole = new THREE.BoxGeometry(1.2, 3, 1.2) ;
	var material = new THREE.MeshBasicMaterial({map : texture}) ;
	northPoleMesh = new THREE.Mesh(northPole, material) ;
	northPoleMesh.position.set(2.1, -1, 0) ;
	line.rotation.x = Math.PI/2 ;
	PIEaddElement(northPoleMesh) ;

    var l1 = new THREE.Geometry() ;
    l1.vertices.push(new THREE.Vector3(0, +0.9, -1)) ;
    l1.vertices.push(new THREE.Vector3(0, +1.4, -1)) ;
    var l1Mesh = new THREE.Line(l1, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1})) ;
    PIEaddElement(l1Mesh) ;

    var l1 = new THREE.Geometry() ;
    l1.vertices.push(new THREE.Vector3(0, +0.6, -1)) ;
    l1.vertices.push(new THREE.Vector3(0, +0.1, -1)) ;
    var l1Mesh = new THREE.Line(l1, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1})) ;
    PIEaddElement(l1Mesh) ;

    var l1 = new THREE.Geometry() ;
    l1.vertices.push(new THREE.Vector3(0, -0.2, -1)) ;
    l1.vertices.push(new THREE.Vector3(0, -0.7, -1)) ;
    var l1Mesh = new THREE.Line(l1, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1})) ;
    PIEaddElement(l1Mesh) ;

    var l1 = new THREE.Geometry() ;
    l1.vertices.push(new THREE.Vector3(0, -1, -1)) ;
    l1.vertices.push(new THREE.Vector3(0, -1.5, -1)) ;
    var l1Mesh = new THREE.Line(l1, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1})) ;
    PIEaddElement(l1Mesh) ;

    var l1 = new THREE.Geometry() ;
    l1.vertices.push(new THREE.Vector3(0, -1.8, -1)) ;
    l1.vertices.push(new THREE.Vector3(0, -2.3, -1)) ;
    var l1Mesh = new THREE.Line(l1, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1})) ;
    PIEaddElement(l1Mesh) ;

    var l1 = new THREE.Geometry() ;
    l1.vertices.push(new THREE.Vector3(0, -2.6, -1)) ;
    l1.vertices.push(new THREE.Vector3(0, -3.1, -1)) ;
    var l1Mesh = new THREE.Line(l1, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1})) ;
    PIEaddElement(l1Mesh) ;
    
	var geometry = new THREE.CylinderGeometry( 0.5, 0.5, 0.5, 32 );
	var material = new THREE.MeshBasicMaterial( {color: 'indianred', opacity : 1} );
	var cylinder = new THREE.Mesh( geometry, material );
	cylinder.position.set(0, -2.8, 0) ;
	PIEaddElement( cylinder );

	var brush1 = new THREE.BoxGeometry(1, 0.2, 0.2) ;
	var material = new THREE.MeshBasicMaterial({color : 'steelblue'}) ;
	var brush1Mesh = new THREE.Mesh(brush1, material) ;
	brush1Mesh.position.set(-0.3, -2.8, 0) ;
	PIEaddElement(brush1Mesh) ;

	var brush2 = new THREE.BoxGeometry(1, 0.2, 0.2) ;
	var material = new THREE.MeshBasicMaterial({color : 'steelblue'}) ;
	var brush2Mesh = new THREE.Mesh(brush2, material) ;
	brush2Mesh.position.set(0.3, -2.8, 0) ;
	PIEaddElement(brush2Mesh) ;

  	var curve = new THREE.QuadraticBezierCurve3(
		new THREE.Vector3( -0.8, -2.8, 0),
		new THREE.Vector3( -4.8, -2.8, 0 ),
		new THREE.Vector3( -4.9, -3.8, 0)
	);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

	var material = new THREE.LineBasicMaterial( { color : 'steelblue' , linewidth : 2} );

	// Create the final object to add to the scene
	var curveObject = new THREE.Line( geometry, material );
  	/*end*/
  	PIEaddElement(curveObject) ;

  	var curve = new THREE.QuadraticBezierCurve3(
		new THREE.Vector3( 0.8, -2.8, 0),
		new THREE.Vector3( 4.8, -2.8, 0 ),
		new THREE.Vector3( 4.9, -3.8, 0)
	);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

	var material = new THREE.LineBasicMaterial( { color : 'steelblue' , linewidth : 2} );

	// Create the final object to add to the scene
	var curveObject = new THREE.Line( geometry, material );
  	/*end*/
  	PIEaddElement(curveObject) ;

  	var curve = new THREE.QuadraticBezierCurve3(
		new THREE.Vector3( 4.9, -3.8, 0),
		new THREE.Vector3( 4.9, -6.5, 0 ),
		new THREE.Vector3( -1.85, -6.1, 0)
	);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

	var material = new THREE.LineBasicMaterial( { color : 'steelblue' , linewidth : 2} );

	// Create the final object to add to the scene
	var curveObject = new THREE.Line( geometry, material );
  	/*end*/
  	PIEaddElement(curveObject) ;
	
	var b1Geometry = new THREE.CylinderGeometry( 0.2, 0.2, 0.9, 53 );
    var b1Material = new THREE.MeshBasicMaterial( {color: 0xFF0000 } );
    var b1Mesh = new THREE.Mesh( b1Geometry, b1Material );
    b1Mesh.position.set(-4.85, -4.1, 0) ;
    //b1Mesh.rotation.z = 1.57 ;
    PIEaddElement(b1Mesh) ;

	var b1Geometry = new THREE.CylinderGeometry( 0.2, 0.2, 0.4, 53 );
    var b1Material = new THREE.MeshBasicMaterial( {color: 0xFDD017 } );
    var b1Mesh = new THREE.Mesh( b1Geometry, b1Material );
    b1Mesh.position.set(-4.85, -3.8, 0) ;
    //b1Mesh.rotation.z = 1.57 ;
    PIEaddElement(b1Mesh) ;


	var b1Geometry = new THREE.CylinderGeometry( 0.2, 0.2, 0.9, 53 );
    var b1Material = new THREE.MeshBasicMaterial( {color: 0xFF0000 } );
    var b1Mesh = new THREE.Mesh( b1Geometry, b1Material );
    b1Mesh.position.set(-4.85, -5.1, 0) ;
    //b1Mesh.rotation.z = 1.57 ;
    PIEaddElement(b1Mesh) ;

	var b1Geometry = new THREE.CylinderGeometry( 0.2, 0.2, 0.4, 53 );
    var b1Material = new THREE.MeshBasicMaterial( {color: 0xFDD017 } );
    var b1Mesh = new THREE.Mesh( b1Geometry, b1Material );
    b1Mesh.position.set(-4.85, -4.8, 0) ;
    //b1Mesh.rotation.z = 1.57 ;
    PIEaddElement(b1Mesh) ;

    var b1Geometry = new THREE.CylinderGeometry( 0.1, 0.1, 0.4, 53 );
    var b1Material = new THREE.MeshBasicMaterial( {color: 0xE5E4E2 } );
    var b1Mesh = new THREE.Mesh( b1Geometry, b1Material );
    b1Mesh.position.set(-4.85, -3.75, 0) ;
    //b1Mesh.rotation.z = 1.57 ;
    PIEaddElement(b1Mesh) ;

    var b1Geometry = new THREE.CylinderGeometry( 0.1, 0.1, 0.4, 53 );
    var b1Material = new THREE.MeshBasicMaterial( {color: 0xE5E4E2 } );
    var b1Mesh = new THREE.Mesh( b1Geometry, b1Material );
    b1Mesh.position.set(-4.85, -4.6, 0) ;
    //b1Mesh.rotation.z = 1.57 ;
    PIEaddElement(b1Mesh) ;

  	var curve = new THREE.QuadraticBezierCurve3(
		new THREE.Vector3( -4.85, -5.6, 0),
		new THREE.Vector3( -4.9, -6.1, 0 ),
		new THREE.Vector3( -1.85, -6.1, 0)
	);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

	var material = new THREE.LineBasicMaterial( { color : 0x0099FF , linewidth : 2} );

	// Create the final object to add to the scene
	var curveObject = new THREE.Line( geometry, material );
  	/*end*/
  	PIEaddElement(curveObject) ;

    var b2Geometry = new THREE.CylinderGeometry( 0.8, 0.8, 0.6, 32 );
    var b2Material = new THREE.MeshBasicMaterial( {color: "black" } );
    var b2Mesh = new THREE.Mesh( b2Geometry, b2Material );
    b2Mesh.position.set(-1.85, -5.9, 0) ;
   //b2Mesh.rotation.z = 1.57 ;
    PIEaddElement(b2Mesh) ;	
    
    var s2Geometry = new THREE.CylinderGeometry( 0.5, 0.5, 0.6, 32 );
    var s2Material = new THREE.MeshBasicMaterial( {color: 0x254117 } );
    s2Mesh = new THREE.Mesh( s2Geometry, s2Material );
    s2Mesh.position.set(-1.85, -5.4, 0) ;
    s2Mesh.name = "switch" ;
   //b2Mesh.rotation.z = 1.57 ;
    PIEaddElement(s2Mesh) ;	






    //PIEaddElement(l7Mesh) ;

	for(var i = 0; i > -2; i -= 0.1) {
		var z =  Math.random()-0.5;
    	var l8 = new THREE.Geometry() ;
    	l8.vertices.push(new THREE.Vector3(-2, i+0.1, z)) ;
    	l8.vertices.push(new THREE.Vector3(+2, i+0.1, z)) ;
    	var l8Mesh = new THREE.Line(l8, new THREE.LineBasicMaterial({color:'blue', linewidth : 1})) ;
    	//l7Mesh.rotation.x = Math.PI ;
    	group1.add(l8Mesh) ;
	}

	var loader = new THREE.FontLoader();
	loader.load( 'assets/helvetiker_regular.typeface.json', function ( font ) {

  		var gtextGeometry = new THREE.TextGeometry( "S", { font: font, size: 0.8, height: 1, curveSegments: 7});

  		var gtextMaterial = new THREE.MeshBasicMaterial( { color: 0x437C17 });

  		var gmesh = new THREE.Mesh( gtextGeometry, gtextMaterial );
		gmesh.position.set(-4, -1, 0) ;
		gmesh.rotation.y = 0.2 ;
		gmesh.rotation.x = 0.1 ;
  		PIEaddElement( gmesh );
  		PIErender() ;

  		var gtextGeometry = new THREE.TextGeometry( "N", { font: font, size: 0.8, height: 1, curveSegments: 7});

  		var gtextMaterial = new THREE.MeshBasicMaterial( { color: 0x437C17 });

  		var gmesh = new THREE.Mesh( gtextGeometry, gtextMaterial );
		gmesh.position.set(3.5, -1, 0) ;
		gmesh.rotation.y = -0.2 ;
		gmesh.rotation.x = 0.05 ;
  		PIEaddElement( gmesh );  		
  		PIErender() ;

  		var gtextGeometry = new THREE.TextGeometry( "+", { font: font, size: 0.2, height: 1, curveSegments: 7});

  		var gtextMaterial = new THREE.MeshBasicMaterial( { color: 'black' });

  		var gmesh = new THREE.Mesh( gtextGeometry, gtextMaterial );
		gmesh.position.set(-4.9, -3.8, 0) ;
		gmesh.rotation.y = 0.2 ;
		gmesh.rotation.x = -0.05 ;
  		PIEaddElement( gmesh );  		
  		PIErender() ;

  		var gtextGeometry = new THREE.TextGeometry( "_", { font: font, size: 0.2, height: 1, curveSegments: 7});

  		var gtextMaterial = new THREE.MeshBasicMaterial( { color: 'black' });

  		var gmesh = new THREE.Mesh( gtextGeometry, gtextMaterial );
		gmesh.position.set(-4.9, -4.3, 0) ;
		gmesh.rotation.y = 0.2 ;
		gmesh.rotation.x = -0.05 ;
  		PIEaddElement( gmesh );  		
  		PIErender() ;

  		var gtextGeometry = new THREE.TextGeometry( "+", { font: font, size: 0.2, height: 1, curveSegments: 7});

  		var gtextMaterial = new THREE.MeshBasicMaterial( { color: 'black' });

  		var gmesh = new THREE.Mesh( gtextGeometry, gtextMaterial );
		gmesh.position.set(-4.9, -4.8, 0) ;
		gmesh.rotation.y = 0.2 ;
		gmesh.rotation.x = -0.1 ;
  		PIEaddElement( gmesh );  		
  		PIErender() ;

  		var gtextGeometry = new THREE.TextGeometry( "_", { font: font, size: 0.2, height: 1, curveSegments: 7});

  		var gtextMaterial = new THREE.MeshBasicMaterial( { color: 'black' });

  		var gmesh = new THREE.Mesh( gtextGeometry, gtextMaterial );
		gmesh.position.set(-4.9, -5.3, 0) ;
		gmesh.rotation.y = 0.2 ;
		gmesh.rotation.x = -0.1 ;
  		PIEaddElement( gmesh );  		
  		PIErender() ;

  		var gtextGeometry = new THREE.TextGeometry( "Key", { font: font, size: 0.2, height: 1, curveSegments: 7});

  		var gtextMaterial = new THREE.MeshBasicMaterial( { color: 'yellow' });

  		var gmesh = new THREE.Mesh( gtextGeometry, gtextMaterial );
		gmesh.position.set(-1.9, -4.8, 0) ;
		gmesh.rotation.x = -0.1 ;
		gmesh.rotation.y = +0.1 ;
  		PIEaddElement( gmesh );  		
  		PIErender() ;
	
	});

	document.addEventListener("click",even);
	group.add(line) ;

    var plane = new THREE.Mesh(new THREE.PlaneGeometry(120, 120), new THREE.MeshBasicMaterial({color : 'steelblue'})) ;
    plane.position.set(0, 0, 30) ;
    PIEaddElement(plane) ;
	//PIEaddInputCommand("switch screen", change) ;

	PIEaddElement(group) ;
	PIErender() ;
    PIEadjustCamera(0, -2.5, 20) ;
    PIEstopButton.addEventListener("click", stop) ;
	PIEstartButton.addEventListener("click", start) ;
}
function change() {
	if(switch_screen == 0) {
		PIEremoveElement(group1) ;
		group.rotation.y = 0 ;
		//PIErender() ;
		PIEstopAnimation() ;
		northPoleMesh.position.z = 32 ;
		southPoleMesh.position.z = 32 ;
		group.position.z = 32 ;
		group1.position.z = 32 ;
		//
		PIEadjustCamera(0, -2.5, 50) ;
		switch_screen = 1 ;
	} else {
		group.rotation.y = 0 ; 
			group.remove(l2Mesh) ;
			group.remove(l3Mesh) ;
			group.remove(l4Mesh) ;
	
			group.remove(l5Mesh) ;
			group.remove(l6Mesh) ;
			group.remove(l7Mesh) ;

			group.remove(l9Mesh) ;
			group.remove(l10Mesh) ;
			group.remove(l11Mesh) ;
	
			group.remove(l12Mesh) ;
			group.remove(l13Mesh) ;
			group.remove(l14Mesh) ;
		
		group.position.z = 0 ;
		group1.position.z = 0 ;	
		northPoleMesh.position.z = 0 ;
		southPoleMesh.position.z = 0 ;
		//PIErender() ;
		PIEadjustCamera(0, -2.5, 20) ;
		switch_screen = 0 ;
		PIEstopAnimation() ;
	}
}
function stop() {
	if(flag == 1) {
		s2Mesh.position.set(-1.85, -5.4, 0) ;
		flag = 0 ;

		PIErender() ;
		PIEstopAnimation() ;
	}	
}
function start() {
	if(flag == 0) {
		s2Mesh.position.set(-1.85, -5.6, 0) ;
		flag = 1 ;
	}	
		group.remove(l2Mesh) ;
		group.remove(l3Mesh) ;
		group.remove(l4Mesh) ;
	
		group.remove(l5Mesh) ;
		group.remove(l6Mesh) ;
		group.remove(l7Mesh) ;
		group.remove(l9Mesh) ;
		group.remove(l10Mesh) ;
		group.remove(l11Mesh) ;
	
		group.remove(l12Mesh) ;
		group.remove(l13Mesh) ;
		group.remove(l14Mesh) ;	

		added = 0 ;			

    var l2 = new THREE.Geometry() ;
    l2.vertices.push(new THREE.Vector3(1, -0.7, 0)) ;
    l2.vertices.push(new THREE.Vector3(1, -0.7, speed*5)) ;
    l2Mesh = new THREE.Line(l2, new THREE.LineBasicMaterial({color:'red', linewidth : 2})) ;
    //PIEaddElement(l2Mesh) ;

    var l3 = new THREE.Geometry() ;
    l3.vertices.push(new THREE.Vector3(1, -0.8, speed*5-0.1)) ;
    l3.vertices.push(new THREE.Vector3(1, -0.7, speed*5)) ;
    l3Mesh = new THREE.Line(l3, new THREE.LineBasicMaterial({color:'red', linewidth : 2})) ;
    //PIEaddElement(l3Mesh) ;

    var l4 = new THREE.Geometry() ;
    l4.vertices.push(new THREE.Vector3(1, -0.6, speed*5-0.1)) ;
    l4.vertices.push(new THREE.Vector3(1, -0.7, speed*5)) ;
    l4Mesh = new THREE.Line(l4, new THREE.LineBasicMaterial({color:'red', linewidth : 2})) ;
    //PIEaddElement(l4Mesh) ;

    var l5 = new THREE.Geometry() ;
    l5.vertices.push(new THREE.Vector3(-1, +0.7, 0)) ;
    l5.vertices.push(new THREE.Vector3(-1, +0.7, speed*5)) ;
    l5Mesh = new THREE.Line(l5, new THREE.LineBasicMaterial({color:'red', linewidth : 2})) ;
    l5Mesh.rotation.x = Math.PI ;
    //PIEaddElement(l5Mesh) ;

    var l6 = new THREE.Geometry() ;
    l6.vertices.push(new THREE.Vector3(-1, +0.8, speed*5-0.1)) ;
    l6.vertices.push(new THREE.Vector3(-1, +0.7, speed*5)) ;
    l6Mesh = new THREE.Line(l6, new THREE.LineBasicMaterial({color:'red', linewidth : 2})) ;
    l6Mesh.rotation.x = Math.PI ;
    //PIEaddElement(l6Mesh) ;

    var l7 = new THREE.Geometry() ;
    l7.vertices.push(new THREE.Vector3(-1, +0.6, speed*5-0.1)) ;
    l7.vertices.push(new THREE.Vector3(-1, +0.7, speed*5)) ;
    l7Mesh = new THREE.Line(l7, new THREE.LineBasicMaterial({color:'red', linewidth : 2})) ;
    l7Mesh.rotation.x = Math.PI ;


    var l9 = new THREE.Geometry() ;
    l9.vertices.push(new THREE.Vector3(1, -1.6, 0)) ;
    l9.vertices.push(new THREE.Vector3(1, -1.6, speed*5)) ;
    l9Mesh = new THREE.Line(l9, new THREE.LineBasicMaterial({color:'yellow', linewidth : 2})) ;
    //PIEaddElement(l2Mesh) ;

    var l10 = new THREE.Geometry() ;
    l10.vertices.push(new THREE.Vector3(1, -1.7, speed*5-0.1)) ;
    l10.vertices.push(new THREE.Vector3(1, -1.6, speed*5)) ;
    l10Mesh = new THREE.Line(l10, new THREE.LineBasicMaterial({color:'yellow', linewidth : 2})) ;
    //PIEaddElement(l3Mesh) ;

    var l11 = new THREE.Geometry() ;
    l11.vertices.push(new THREE.Vector3(1, -1.5, speed*5-0.1)) ;
    l11.vertices.push(new THREE.Vector3(1, -1.6, speed*5)) ;
    l11Mesh = new THREE.Line(l11, new THREE.LineBasicMaterial({color:'yellow', linewidth : 2})) ;
    //PIEaddElement(l4Mesh) ;

    var l12 = new THREE.Geometry() ;
    l12.vertices.push(new THREE.Vector3(-1, +1.6, 0)) ;
    l12.vertices.push(new THREE.Vector3(-1, +1.6, speed*5)) ;
    l12Mesh = new THREE.Line(l12, new THREE.LineBasicMaterial({color:'yellow', linewidth : 2})) ;
    l12Mesh.rotation.x = Math.PI ;
    //PIEaddElement(l5Mesh) ;

    var l13 = new THREE.Geometry() ;
    l13.vertices.push(new THREE.Vector3(-1, +1.7, speed*5-0.1)) ;
    l13.vertices.push(new THREE.Vector3(-1, +1.6, speed*5)) ;
    l13Mesh = new THREE.Line(l13, new THREE.LineBasicMaterial({color:'yellow', linewidth : 2})) ;
    l13Mesh.rotation.x = Math.PI ;
    //PIEaddElement(l6Mesh) ;

    var l14 = new THREE.Geometry() ;
    l14.vertices.push(new THREE.Vector3(-1, +1.5, speed*5-0.1)) ;
    l14.vertices.push(new THREE.Vector3(-1, +1.6, speed*5)) ;
    l14Mesh = new THREE.Line(l14, new THREE.LineBasicMaterial({color:'yellow', linewidth : 2})) ;
    l14Mesh.rotation.x = Math.PI ;    
	
	added = 0 ;
	PIErender() ;
	PIEstartAnimation() ;
}

function even(event) {
	var vector = new THREE.Vector3(( event.clientX / window.innerWidth ) * 2 - 1, -( event.clientY / window.innerHeight ) * 2 + 1,-2);
    vector = vector.unproject(PIEcamera);

    var raycaster = new THREE.Raycaster(PIEcamera.position, vector.sub(PIEcamera.position).normalize());
    
    var intersects = raycaster.intersectObjects(PIEscene.children,true);
    //alert(intersects.length) ;
    for(var i=0;i<intersects.length;i++)
    {
		 	var c=intersects[i].object.name.charAt(0);
		 	//alert(intersects[i].object) ;
 		 	if(c=='s') {
		 		break ;
		 	}
	}
	if(c == 's' && flag == 0) {
		flag = 1 ;
		s2Mesh.position.set(-1.85, -5.6, 0) ;

	if(pspeed != speed) {
		group.remove(l2Mesh) ;
		group.remove(l3Mesh) ;
		group.remove(l4Mesh) ;
	
		group.remove(l5Mesh) ;
		group.remove(l6Mesh) ;
		group.remove(l7Mesh) ;
		
		group.remove(l9Mesh) ;
		group.remove(l10Mesh) ;
		group.remove(l11Mesh) ;
	
		group.remove(l12Mesh) ;
		group.remove(l13Mesh) ;
		group.remove(l14Mesh) ;		
		added = 0 ;			
	}

    var l2 = new THREE.Geometry() ;
    l2.vertices.push(new THREE.Vector3(1, -0.7, 0)) ;
    l2.vertices.push(new THREE.Vector3(1, -0.7, speed*5)) ;
    l2Mesh = new THREE.Line(l2, new THREE.LineBasicMaterial({color:'red', linewidth : 2})) ;
    //PIEaddElement(l2Mesh) ;

    var l3 = new THREE.Geometry() ;
    l3.vertices.push(new THREE.Vector3(1, -0.8, speed*5-0.1)) ;
    l3.vertices.push(new THREE.Vector3(1, -0.7, speed*5)) ;
    l3Mesh = new THREE.Line(l3, new THREE.LineBasicMaterial({color:'red', linewidth : 2})) ;
    //PIEaddElement(l3Mesh) ;

    var l4 = new THREE.Geometry() ;
    l4.vertices.push(new THREE.Vector3(1, -0.6, speed*5-0.1)) ;
    l4.vertices.push(new THREE.Vector3(1, -0.7, speed*5)) ;
    l4Mesh = new THREE.Line(l4, new THREE.LineBasicMaterial({color:'red', linewidth : 2})) ;
    //PIEaddElement(l4Mesh) ;

    var l5 = new THREE.Geometry() ;
    l5.vertices.push(new THREE.Vector3(-1, +0.7, 0)) ;
    l5.vertices.push(new THREE.Vector3(-1, +0.7, speed*5)) ;
    l5Mesh = new THREE.Line(l5, new THREE.LineBasicMaterial({color:'red', linewidth : 2})) ;
    l5Mesh.rotation.x = Math.PI ;
    //PIEaddElement(l5Mesh) ;

    var l6 = new THREE.Geometry() ;
    l6.vertices.push(new THREE.Vector3(-1, +0.8, speed*5-0.1)) ;
    l6.vertices.push(new THREE.Vector3(-1, +0.7, speed*5)) ;
    l6Mesh = new THREE.Line(l6, new THREE.LineBasicMaterial({color:'red', linewidth : 2})) ;
    l6Mesh.rotation.x = Math.PI ;
    //PIEaddElement(l6Mesh) ;

    var l7 = new THREE.Geometry() ;
    l7.vertices.push(new THREE.Vector3(-1, +0.6, speed*5-0.1)) ;
    l7.vertices.push(new THREE.Vector3(-1, +0.7, speed*5)) ;
    l7Mesh = new THREE.Line(l7, new THREE.LineBasicMaterial({color:'red', linewidth : 2})) ;
    l7Mesh.rotation.x = Math.PI ;


    var l9 = new THREE.Geometry() ;
    l9.vertices.push(new THREE.Vector3(1, -1.6, 0)) ;
    l9.vertices.push(new THREE.Vector3(1, -1.6, speed*5)) ;
    l9Mesh = new THREE.Line(l9, new THREE.LineBasicMaterial({color:'yellow', linewidth : 2})) ;
    //PIEaddElement(l2Mesh) ;

    var l10 = new THREE.Geometry() ;
    l10.vertices.push(new THREE.Vector3(1, -1.7, speed*5-0.1)) ;
    l10.vertices.push(new THREE.Vector3(1, -1.6, speed*5)) ;
    l10Mesh = new THREE.Line(l10, new THREE.LineBasicMaterial({color:'yellow', linewidth : 2})) ;
    //PIEaddElement(l3Mesh) ;

    var l11 = new THREE.Geometry() ;
    l11.vertices.push(new THREE.Vector3(1, -1.5, speed*5-0.1)) ;
    l11.vertices.push(new THREE.Vector3(1, -1.6, speed*5)) ;
    l11Mesh = new THREE.Line(l11, new THREE.LineBasicMaterial({color:'yellow', linewidth : 2})) ;
    //PIEaddElement(l4Mesh) ;

    var l12 = new THREE.Geometry() ;
    l12.vertices.push(new THREE.Vector3(-1, +1.6, 0)) ;
    l12.vertices.push(new THREE.Vector3(-1, +1.6, speed*5)) ;
    l12Mesh = new THREE.Line(l12, new THREE.LineBasicMaterial({color:'yellow', linewidth : 2})) ;
    l12Mesh.rotation.x = Math.PI ;
    //PIEaddElement(l5Mesh) ;

    var l13 = new THREE.Geometry() ;
    l13.vertices.push(new THREE.Vector3(-1, +1.7, speed*5-0.1)) ;
    l13.vertices.push(new THREE.Vector3(-1, +1.6, speed*5)) ;
    l13Mesh = new THREE.Line(l13, new THREE.LineBasicMaterial({color:'yellow', linewidth : 2})) ;
    l13Mesh.rotation.x = Math.PI ;
    //PIEaddElement(l6Mesh) ;

    var l14 = new THREE.Geometry() ;
    l14.vertices.push(new THREE.Vector3(-1, +1.5, speed*5-0.1)) ;
    l14.vertices.push(new THREE.Vector3(-1, +1.6, speed*5)) ;
    l14Mesh = new THREE.Line(l14, new THREE.LineBasicMaterial({color:'yellow', linewidth : 2})) ;
    l14Mesh.rotation.x = Math.PI ;

	added = 0 ;
	PIErender() ;

	PIEstartAnimation() ;
	} else if(c == 's'){
		flag = 0 ;	
		s2Mesh.position.set(-1.85, -5.4, 0) ;


		PIErender() ;
		PIEstopAnimation() ;	
	}
}
//updating line
function updateLine() {
    line.geometry.attributes.position.needsUpdate = true;
    PIErender() ;
}
function addPoint(event) {

    positions[count * 3 + 0] = -0.3;
  	positions[count * 3 + 1] = +0;
  	positions[count * 3 + 2] = +2.6;
    count++;

    positions[count * 3 + 0] = -0.3;
  	positions[count * 3 + 1] = +0;
  	positions[count * 3 + 2] = +2;
    count++;
	
    positions[count * 3 + 0] = -1;
  	positions[count * 3 + 1] = +0;
  	positions[count * 3 + 2] = +2;
    count++;

    positions[count * 3 + 0] = -1;
  	positions[count * 3 + 1] = +0;
  	positions[count * 3 + 2] = +0;
    count++;

    positions[count * 3 + 0] = +1;
  	positions[count * 3 + 1] = +0;
  	positions[count * 3 + 2] = +0;
    count++;

    positions[count * 3 + 0] = +1;
  	positions[count * 3 + 1] = +0;
  	positions[count * 3 + 2] = +2;
    count++;

    positions[count * 3 + 0] = 0.3;
  	positions[count * 3 + 1] = +0;
  	positions[count * 3 + 2] = +2;
    count++;

    positions[count * 3 + 0] = 0.3;
  	positions[count * 3 + 1] = +0;
  	positions[count * 3 + 2] = +2.6;
    count++;
    
    line.geometry.setDrawRange(0, count);
    updateLine();
}
function resetExperiment() {
    group.rotation.y = 0 ;
    PIEremoveElement(group1) ;
    if(added == 1) {
		group.remove(l2Mesh) ;
		group.remove(l3Mesh) ;
		group.remove(l4Mesh) ;
	
		group.remove(l5Mesh) ;
		group.remove(l6Mesh) ;
		group.remove(l7Mesh) ;

		group.remove(l9Mesh) ;
		group.remove(l10Mesh) ;
		group.remove(l11Mesh) ;
	
		group.remove(l12Mesh) ;
		group.remove(l13Mesh) ;
		group.remove(l14Mesh) ;
		
		added = 0 ;
	}   
	PIErender() ;
	flag = 0 ; 
}
function updateExperimentElements() {
	if(f == 0) {
		f = 1; 
		return ;
	}
	if(speed == 0) {
	    resetExperiment() ;
	    PIErender() ;
	    return ;
	}
	if(added == 0 ) {
		group.add(l2Mesh) ;
		group.add(l3Mesh) ;
		group.add(l4Mesh) ;
	
		group.add(l5Mesh) ;
		group.add(l6Mesh) ;
		group.add(l7Mesh) ;
		
		group.add(l9Mesh) ;
		group.add(l10Mesh) ;
		group.add(l11Mesh) ;
	
		group.add(l12Mesh) ;
		group.add(l13Mesh) ;
		group.add(l14Mesh) ;
		added = 1 ;
		
	}
	PIEaddElement(group1) ;
	
	group.rotation.y  -= speed ;
}
