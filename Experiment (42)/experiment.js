/*Global Variables Section*/
var group , cnt = 0, g11aMesh, g11aaMesh, s2Mesh, count = 0, wave1 , wave2, wave3, wave4, wave5, wave6, cntt = 0;
var line1, line2, line3, line4, line5 ;
/*End of Global Variables Section*/

var helpContent = "";
function initialiseHelp() {
    helpContent = helpContent + "<h2>Basic electric bell</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows how basic blectric bell works to produce sound and principle behind that.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The start stage</h3>";
    helpContent = helpContent + "<p>The initial state is start stage. In this everything has already set up. <br><br>you can enter the animation stage by clicking the start button.</p>";
    
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, In an electric bell, The terminals t1 and t2 are connected to a battery through push button switch.</p>";
    helpContent = helpContent + "<p>When you press start button the electric current flows from dry cell to electro magnet</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play button on the top line.</p>";
    PIEupdateHelp(helpContent);
}
var infoContent = "";
function initialiseInfo() {
    infoContent = infoContent + "<h2>Basic electric bell</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows how basic blectric bell works to produce sound and principle behind that..</p>";
    infoContent = infoContent + "<h3>Electromagnet</h3>";
    infoContent = infoContent + "<p>An electromagnet is a type of magnet in which the magnetic field is produced by an electric current. The magnetic field disappears when the current is turned off.</p>";
    infoContent = infoContent + "<p>Electromagnets usually consist of insulated wire wound into a coil.A current through the wire creates a magnetic field which is concentrated in the hole in the center of the coil</p>";
    infoContent = infoContent + "<p>The main advantage of an electromagnet over a permanent magnet is that the magnetic field can be quickly changed by controlling the amount of electric current in the winding.</p>";
    infoContent = infoContent + "<h3>How does it work ?</h3>";
    infoContent = infoContent + "<p>In an Electric bell the terminals t1 and t2 are connected to a battery through a push button switch.When push button switch is pressed current flows from dry cell to electromagnet then electromagnet gets magnetized which is cause for pulls the smooth iron armature then clpper get in conttact with bell and makes sound then circuit breaks at contact screw.. </p>";
    infoContent = infoContent + "<p>when circuit breaks electromagnet is no longer a magnetic material then armature gets back to original position now circuit is closed this happens repeatedly!.</p>";
    PIEupdateInfo(infoContent);
}
function initialiseControls() {
    /*Yet to do*/
}



function loadExperimentElements() {
    PIEsetExperimentTitle("Basic Electric Bell");
    PIEsetDeveloperName("Srikanth Chekuri");
    initialiseHelp();
    initialiseInfo();
    initialiseControls() ;
    group = new THREE.Object3D() ;
    
    /*Wood section*/
    var g1Geometry = new THREE.BoxGeometry(25, 1, 5) ;
    var g1Texture = new THREE.ImageUtils.loadTexture("assets/wood1.jpg") ;
    var g1Material = new THREE.MeshBasicMaterial({map : g1Texture}) ;
    var g1Mesh = new THREE.Mesh(g1Geometry, g1Material) ;
    PIEaddElement(g1Mesh) ;
    
   	var l1 = new THREE.Geometry() ;
    l1.vertices.push(new THREE.Vector3(-12.5, 0.5, 2.5)) ;
    l1.vertices.push(new THREE.Vector3(+12.5, 0.5, 2.5)) ;
    var l1Mesh = new THREE.Line(l1, new THREE.LineBasicMaterial({color: "black", linewidth : 1})) ;
    PIEaddElement(l1Mesh) ;

   	var l2 = new THREE.Geometry() ;
    l2.vertices.push(new THREE.Vector3(-12.5, 0.5, -2.5)) ;
    l2.vertices.push(new THREE.Vector3(+12.5, 0.5, -2.5)) ;
    var l2Mesh = new THREE.Line(l2, new THREE.LineBasicMaterial({color: "black", linewidth : 2})) ;
    PIEaddElement(l2Mesh) ;

   	var l3 = new THREE.Geometry() ;
    l3.vertices.push(new THREE.Vector3(-12.5, 0.5, -2.5)) ;
    l3.vertices.push(new THREE.Vector3(-12.5, 0.5, +2.5)) ;
    var l3Mesh = new THREE.Line(l3, new THREE.LineBasicMaterial({color: "black", linewidth : 3})) ;
    PIEaddElement(l3Mesh) ;

   	var l4 = new THREE.Geometry() ;
    l4.vertices.push(new THREE.Vector3(12.5, 0.5, -2.5)) ;
    l4.vertices.push(new THREE.Vector3(12.5, 0.5, +2.5)) ;
    var l4Mesh = new THREE.Line(l4, new THREE.LineBasicMaterial({color: "black", linewidth : 3})) ;
    PIEaddElement(l4Mesh) ;

   	var l5 = new THREE.Geometry() ;
    l5.vertices.push(new THREE.Vector3(12.5, +0.5, +2.5)) ;
    l5.vertices.push(new THREE.Vector3(12.5, -0.5, +2.5)) ;
    var l5Mesh = new THREE.Line(l5, new THREE.LineBasicMaterial({color: "black", linewidth : 2})) ;
    PIEaddElement(l5Mesh) ;

   	var l6 = new THREE.Geometry() ;
    l6.vertices.push(new THREE.Vector3(12.5, -0.5, 2.5)) ;
    l6.vertices.push(new THREE.Vector3(-12.5, -0.5, 2.5)) ;
    var l6Mesh = new THREE.Line(l6, new THREE.LineBasicMaterial({color: "black", linewidth : 2})) ;
    PIEaddElement(l6Mesh) ;

   	var l6 = new THREE.Geometry() ;
    l6.vertices.push(new THREE.Vector3(-12.5, -0.5, 2.5)) ;
    l6.vertices.push(new THREE.Vector3(-12.5, +0.5, 2.5)) ;
    var l6Mesh = new THREE.Line(l6, new THREE.LineBasicMaterial({color: "black", linewidth : 2})) ;
    PIEaddElement(l6Mesh) ;
    /*End of wood section*/  
    	
    /*Battery 1 -ve terminal*/
    var b1Geometry = new THREE.CylinderGeometry( 0.5, 0.5, 2, 53 );
    var b1Material = new THREE.MeshBasicMaterial( {color: 0xFF0000 } );
    var b1Mesh = new THREE.Mesh( b1Geometry, b1Material );
    b1Mesh.position.set(-5, 1.1, 0) ;
    b1Mesh.rotation.z = 1.57 ;
    PIEaddElement(b1Mesh) ;
    /*Battery 1 +ve terminal*/
    var b1Geometry = new THREE.CylinderGeometry( 0.5, 0.5, 0.5, 53 );
    var b1Material = new THREE.MeshBasicMaterial( {color: 0xFDD017 } );
    var b1Mesh = new THREE.Mesh( b1Geometry, b1Material );
    b1Mesh.position.set(-3.75, 1.1, 0) ;
    b1Mesh.rotation.z = 1.57 ;
    PIEaddElement(b1Mesh) ;    
    
    /*outside material of battery 1*/
    var geometry = new THREE.CircleGeometry( 0.5, 32 );
    var material = new THREE.MeshBasicMaterial( { color: 0x565051 } );
    var circle = new THREE.Mesh( geometry, material );
    circle.rotation.y = 1.57 ;
    circle.position.set(-3.49, 1.1, 0) ;
    PIEaddElement( circle );
    /*pointer of battery 1*/
    var b1Geometry = new THREE.CylinderGeometry( 0.2, 0.2, 0.2, 53 );
    var b1Material = new THREE.MeshBasicMaterial( {color: 0xE5E4E2 } );
    var b1Mesh = new THREE.Mesh( b1Geometry, b1Material );
    b1Mesh.position.set(-3.5, 1.1, 0) ;
    b1Mesh.rotation.z = 1.57 ;
    PIEaddElement(b1Mesh) ;

    
    /*End of  battery 1*/
    //PIEaddElement(new THREE.AxisHelper(100)) ;
    /*battery 2 -ve terminal*/
    var b2Geometry = new THREE.CylinderGeometry( 0.5, 0.5, 2, 53 );
    var b2Material = new THREE.MeshBasicMaterial( {color: 0xFF0000 } );
    var b2Mesh = new THREE.Mesh( b2Geometry, b2Material );
    b2Mesh.position.set(-7.7, 1.1, 0) ;
    b2Mesh.rotation.z = 1.57 ;
    PIEaddElement(b2Mesh) ;
    /*battery 2 +ve terminal*/
    var b2Geometry = new THREE.CylinderGeometry( 0.5, 0.5, 0.5, 53 );
    var b2Material = new THREE.MeshBasicMaterial( {color: 0xFDD017 } );
    var b2Mesh = new THREE.Mesh( b2Geometry, b2Material );
    b2Mesh.position.set(-6.45, 1.1, 0) ;
    b2Mesh.rotation.z = 1.57 ;
    PIEaddElement(b2Mesh) ;    
    /*outside material of battery 2*/
    var geometry = new THREE.CircleGeometry( 0.5, 32 );
    var material = new THREE.MeshBasicMaterial( { color: 0x565051 } );
    var circle = new THREE.Mesh( geometry, material );
    circle.rotation.y = 1.57 ;
    circle.position.set(-6.19, 1.1, 0) ;
    PIEaddElement( circle );
    /*pointer of battery 2*/
    var b2Geometry = new THREE.CylinderGeometry( 0.2, 0.2, 0.2, 53 );
    var b2Material = new THREE.MeshBasicMaterial( {color: 0xE5E4E2 } );
    b2Mesh = new THREE.Mesh( b2Geometry, b2Material );
    b2Mesh.position.set(-6.2, 1.1, 0) ;
    b2Mesh.rotation.z = 1.57 ;
    PIEaddElement(b2Mesh) ;
    /*End of battery 2*/

	/*Switch section*/
    var b2Geometry = new THREE.CylinderGeometry( 1.1, 1.1, 0.9, 10 );
    var b2Material = new THREE.MeshBasicMaterial( {color: "black" } );
    var b2Mesh = new THREE.Mesh( b2Geometry, b2Material );
    b2Mesh.position.set(6.2, -2.6, 25.2) ;
   //b2Mesh.rotation.z = 1.57 ;
    PIEaddElement(b2Mesh) ;	
    
    var s2Geometry = new THREE.CylinderGeometry( 0.5, 0.5, 1.2, 10 );
    var s2Material = new THREE.MeshBasicMaterial( {color: 0x254117 } );
    s2Mesh = new THREE.Mesh( s2Geometry, s2Material );
    s2Mesh.position.set(6.2, -2.1, 25.2) ;
    s2Mesh.name = "switch" ;
   //b2Mesh.rotation.z = 1.57 ;
    PIEaddElement(s2Mesh) ;	    
	/*End of Switch section*/  	
  	
  	
  	/*wire*/
	var curve = new THREE.QuadraticBezierCurve3(
		new THREE.Vector3( -3.75, 1.1, 0 ),
		new THREE.Vector3( -2.1, 1.1, 0 ),
		new THREE.Vector3( 6.1, -2.6, 24.2 )
	);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

	var material = new THREE.LineBasicMaterial( { color : "red" , linewidth : 2} );

	// Create the final object to add to the scene
	var curveObject = new THREE.Line( geometry, material );	
  	/*end*/
  	PIEaddElement(curveObject) ;
  	
    var g5Geometry = new THREE.BoxGeometry( 0.5, 8, 6) ;
    var g5Texture = new THREE.ImageUtils.loadTexture("assets/wood1.jpg") ;
    var g5Material = new THREE.MeshBasicMaterial({map : g1Texture}) ;
    var g5Mesh = new THREE.Mesh(g5Geometry, g5Material) ;
    g5Mesh.position.set(-1.0, 4.5, -1) ;
    PIEaddElement(g5Mesh) ;

    var g6Geometry = new THREE.BoxGeometry( 0.5, 4, 2) ;
    var g6Texture = new THREE.ImageUtils.loadTexture("assets/wood1.jpg") ;
    var g6Material = new THREE.MeshBasicMaterial({color : 0x98AFC7}) ;
    var g6Mesh = new THREE.Mesh(g6Geometry, g6Material) ;
    g6Mesh.position.set(-0.8, 4.5, 0) ;
    PIEaddElement(g6Mesh) ;
	/*coil 1*/
    var c1Geometry = new THREE.CylinderGeometry( 0.7, 0.7, 4, 10 );
    var c1Material = new THREE.MeshBasicMaterial( {color: 0x486380 } );
    var c1Mesh = new THREE.Mesh( c1Geometry, c1Material );
    c1Mesh.position.set(1.6, 5.5, 1) ;
   	c1Mesh.rotation.z = 1.57 ;
    PIEaddElement(c1Mesh) ;		
	/*winding*/
	for(var i = 0; i <= 3.2; i += 0.2 ) {
		
		var material = new THREE.LineBasicMaterial({color: 0xf62817, opacity:1, linewidth : 3});
		var ellipse = new THREE.EllipseCurve(0, 0, -0.06, 0.65, Math.PI/2, (3*Math.PI/2), false);
		var ellipsePath = new THREE.CurvePath();
		ellipsePath.add(ellipse);
		var ellipseGeometry = ellipsePath.createPointsGeometry(50);
		ellipseGeometry.computeTangents();
		line1 = new THREE.Line(ellipseGeometry, material);
		line1.position.set(i, 5.45, 1.9) ;
		//line1.rotation.y = 1.58 ;
		PIEaddElement( line1 );
    }
    var c2Geometry = new THREE.CylinderGeometry( 0.7, 0.7, 4, 10 );
    var c2Material = new THREE.MeshBasicMaterial( {color: 0x486380 } );
    var c2Mesh = new THREE.Mesh( c2Geometry, c2Material );
    c2Mesh.position.set(1.6, 3.5, 1	) ;
   	c2Mesh.rotation.z = 1.57 ;
    PIEaddElement(c2Mesh) ;  
      
	for(var i = 0; i <= 3.2; i += 0.2 ) {
		var material = new THREE.LineBasicMaterial({color: 0xf62817, opacity:1, linewidth : 3});
		var ellipse = new THREE.EllipseCurve(0, 0, -0.06, 0.65, Math.PI/2, (3*Math.PI/2), false);
		var ellipsePath = new THREE.CurvePath();
		ellipsePath.add(ellipse);
		var ellipseGeometry = ellipsePath.createPointsGeometry(50);
		ellipseGeometry.computeTangents();
		line1 = new THREE.Line(ellipseGeometry, material);
		line1.position.set(i, 3.45, 1.9) ;
		line1.rotation.y = 1.58 ;
		PIEaddElement( line1 );
    }
  	/*end of coil 1*/
  	/*attach*/
    var g7Geometry = new THREE.BoxGeometry( 0.5, 3.3, 2) ;
    var g7Texture = new THREE.ImageUtils.loadTexture("assets/wood1.jpg") ;
    var g7Material = new THREE.MeshBasicMaterial({map : g7Texture}) ;
    var g7Mesh = new THREE.Mesh(g7Geometry, g7Material) ;
    g7Mesh.position.set(0, 8.5, 0.2) ;
    g7Mesh.rotation.z = -0.80 ;
    PIEaddElement(g7Mesh) ;
   	/*end*/


   	
    var geometry = new THREE.CircleGeometry( 2.5, 54 );
    var material = new THREE.MeshBasicMaterial( { color: 0x25383C } );
    var gong = new THREE.Mesh( geometry, material );
    //circle.rotation.y = 1.57 ;
    gong.position.set(3, 10.5, 1.5) ;
    PIEaddElement( gong );

    var geometry = new THREE.CircleGeometry( 1.8, 54 );
    var material = new THREE.MeshBasicMaterial( { color: 0x726E6D } );
    var gong = new THREE.Mesh( geometry, material );
    //circle.rotation.y = 1.57 ;
    gong.position.set(3, 10.5, 1.5) ;
    PIEaddElement( gong );

    var geometry = new THREE.CircleGeometry( 1.6, 54 );
    var material = new THREE.MeshBasicMaterial( { color: 0x25383C } );
    var gong = new THREE.Mesh( geometry, material );
    //circle.rotation.y = 1.57 ;
    gong.position.set(3, 10.5, 1.5) ;
    PIEaddElement( gong );
    
	var curve = new THREE.QuadraticBezierCurve3(
		new THREE.Vector3( -1.3, 12, 1.5 ),
		new THREE.Vector3( -1.3, 13.5, 1.5 ),
		new THREE.Vector3( -0.2, 13.5, 1.5 )
	);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

	var material = new THREE.LineBasicMaterial( { color : 0xA3E4D7 , linewidth : 3} );
	
	// Create the final object to add to the scene
	wave1 = new THREE.Line( geometry, material );	
	PIEaddElement(wave1) ;

	var curve = new THREE.QuadraticBezierCurve3(
		new THREE.Vector3( -2.5, 11.5, 1.5 ),
		new THREE.Vector3( -2.5, 14.5, 1.5 ),
		new THREE.Vector3( -0.5, 14.5, 1.5 )
	);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

	var material = new THREE.LineBasicMaterial( { color : 0xa3e4d7, linewidth : 3} );
	
	// Create the final object to add to the scene
	wave2 = new THREE.Line( geometry, material );	
	PIEaddElement(wave2) ;


	var curve = new THREE.QuadraticBezierCurve3(
		new THREE.Vector3( -4, 10.5, 1.5 ),
		new THREE.Vector3( -4, 16.0, 1.5 ),
		new THREE.Vector3( +0, 16.0, 1.5 )
	);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

	var material = new THREE.LineBasicMaterial( { color : 0xa3e4d7, linewidth : 3 } );
	
	// Create the final object to add to the scene
	wave3 = new THREE.Line( geometry, material );	
	PIEaddElement(wave3) ;

	var curve = new THREE.QuadraticBezierCurve3(
		new THREE.Vector3( 6, 12, 1.5 ),
		new THREE.Vector3( 6, 13, 1.5 ),
		new THREE.Vector3( 5, 13, 1.5 )
	);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

	var material = new THREE.LineBasicMaterial( { color : 0x2B547E } );
	
	// Create the final object to add to the scene
	wave4 = new THREE.Line( geometry, material );	
	//PIEaddElement(wave4) ;

	var curve = new THREE.QuadraticBezierCurve3(
		new THREE.Vector3( 7, 11.5, 1.5 ),
		new THREE.Vector3( 7, 14.3, 1.5 ),
		new THREE.Vector3( 5, 14.1, 1.5 )
	);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

	var material = new THREE.LineBasicMaterial( { color : 0x2B547E } );
	
	// Create the final object to add to the scene
	wave5 = new THREE.Line( geometry, material );	
	//PIEaddElement(wave5) ;

	var curve = new THREE.QuadraticBezierCurve3(
		new THREE.Vector3( 8, 10.5, 1.5 ),
		new THREE.Vector3( 8, 15.3, 1.5 ),
		new THREE.Vector3( 4.5, 15.1, 1.5 )
	);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

	var material = new THREE.LineBasicMaterial( { color : 0x2B547E } );
	
	// Create the final object to add to the scene
	wave6 = new THREE.Line( geometry, material );	
	//PIEaddElement(wave6) ;

	//group.add(curveObject) ;    

/*group elements*/
	/*support section*/1
    var g8Geometry = new THREE.BoxGeometry( 0.3	, 5.2, 2) ;
    var g8Texture = new THREE.ImageUtils.loadTexture("assets/wood1.jpg") ;
    var g8Material = new THREE.MeshBasicMaterial({color : 0x2B547E}) ;
    var g8Mesh = new THREE.Mesh(g8Geometry, g8Material) ;
    g8Mesh.position.set(4.45, 4.5, 0) ;
    PIEaddElement(g8Mesh) ;	
    group.add(g8Mesh) ;
	/*support section*/	

    var g9Geometry = new THREE.BoxGeometry( 0.1, 0.8, 0.1) ;
    var g9Texture = new THREE.ImageUtils.loadTexture("assets/wood1.jpg") ;
    var g9Material = new THREE.MeshBasicMaterial({color : 0x2B547E}) ;
    var g9Mesh = new THREE.Mesh(g9Geometry, g9Material) ;
    g9Mesh.position.set(4.55, 6.8, 0) ;
    PIEaddElement(g9Mesh) ;
    group.add(g9Mesh) ;
    var g10Geometry = new THREE.BoxGeometry( 0.3 , 1.2, 1) ;
    var g10Texture = new THREE.ImageUtils.loadTexture("assets/wood1.jpg") ;
    var g10Material = new THREE.MeshBasicMaterial({color : 0x2B3856}) ;
    var g10Mesh = new THREE.Mesh(g10Geometry, g10Material) ;
    g10Mesh.position.set(4.6, 4.0, 0) ;
    PIEaddElement(g10Mesh) ;
	group.add(g10Mesh) ;
    var g11Geometry = new THREE.BoxGeometry( 0.2 , 1.2, 0.3) ;
    var g11Texture = new THREE.ImageUtils.loadTexture("assets/wood1.jpg") ;
    var g11Material = new THREE.MeshBasicMaterial({color : 0x2B3856}) ;
    var g11Mesh = new THREE.Mesh(g11Geometry, g11Material) ;
    g11Mesh.position.set(4.8, 4.8, 0) ;
    g11Mesh.rotation.z = -0.8 ;
    PIEaddElement(g11Mesh) ;
    group.add(g11Mesh) ;
    var g12Geometry = new THREE.BoxGeometry( 0.2 , 1.8, 0.3) ;
    var g12Texture = new THREE.ImageUtils.loadTexture('assets/wood1.jpg', {}, function() {
    PIErender() ;
    }) ;
    var g12Material = new THREE.MeshBasicMaterial({color : 0x2B3856}) ;
    var g12Mesh = new THREE.Mesh(g12Geometry, g12Material) ;
    g12Mesh.position.set(5.2, 5.95, 0) ;
    PIEaddElement(g12Mesh) ;
    group.add(g12Mesh) ;
	
    var g11aGeometry = new THREE.BoxGeometry( 0.3, 0.9, 0.3) ;
    var g11aTexture = new THREE.ImageUtils.loadTexture('assets/wood1.jpg', {}, function() {
    PIErender() ;
    }) ;
    var g11aMaterial = new THREE.MeshBasicMaterial({color : 0x2B3856}) ;
    g11aMesh = new THREE.Mesh(g11aGeometry, g11aMaterial) ;
    g11aMesh.position.set(4.5, 1.8, 0) ;
    g11aMesh.rotation.z = 0.3 ;
    PIEaddElement(g11aMesh) ;

    var g11aaGeometry = new THREE.BoxGeometry( 0.3, 1.1, 0.3) ;
    var g11aaTexture = new THREE.ImageUtils.loadTexture('assets/wood1.jpg', {}, function() {
    PIErender() ;
    }) ;
    var g11aaMaterial = new THREE.MeshBasicMaterial({color : "white"}) ;
    g11aaMesh = new THREE.Mesh(g11aaGeometry, g11aaMaterial) ;
    g11aaMesh.position.set(4.2, 1.7, -0.1) ;
    g11aaMesh.rotation.z = 1.2 ;
    //PIEaddElement(g11aaMesh) ;
    
    //group.add(g11aMesh) ;    
    
    var g11bGeometry = new THREE.BoxGeometry( 0.3 , 1.9, 0.3) ;
    var g11bTexture = new THREE.ImageUtils.loadTexture('assets/wood1.png', {}, function() {
    PIErender() ;
    }) ;
    var g11bMaterial = new THREE.MeshBasicMaterial({color : 0x2B3856}) ;
    var g11bMesh = new THREE.Mesh(g11bGeometry, g11bMaterial) ;
    g11bMesh.position.set(4.65, 0.5, 0) ;
    //g11bMesh.rotation.z = 0.8 ;
    PIEaddElement(g11bMesh) ;
	//group.add(g11bMesh) ;
	/*curve section*/
	var curve = new THREE.QuadraticBezierCurve3(
		new THREE.Vector3( 4.55, 7.2, 0 ),
		new THREE.Vector3( 5.55, 7.7, 0 ),
		new THREE.Vector3( 5.55, 8.4, 0 )
	);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

	var material = new THREE.LineBasicMaterial( { color : 0x2B547E } );
	
	// Create the final object to add to the scene
	var curveObject = new THREE.Line( geometry, material );	
	PIEaddElement(curveObject) ;
	group.add(curveObject) ;
	
    var geometry = new THREE.CircleGeometry( 0.6, 54 );
    var material = new THREE.MeshBasicMaterial( { color: 0x810541 } );
    var tip = new THREE.Mesh( geometry, material );
    //circle.rotation.y = 1.57 ;
    tip.position.set(5.5, 8.4, 0) ;
    PIEaddElement( tip );	
	/*end of curve section*/

	
	
	
	group.add(tip) ;
	PIEaddElement(group) ;
/*end of group elements*/
	var g13Geometry = new THREE.Geometry() ;
	g13Geometry.vertices.push(new THREE.Vector3(5.2, 6.6, 0)) ;
	g13Geometry.vertices.push(new THREE.Vector3(5.3, 6.7, 0)) ;
	g13Geometry.vertices.push(new THREE.Vector3(5.3, 6.2, 0)) ;
	g13Geometry.vertices.push(new THREE.Vector3(7.95, 6.7, 0)) ;
	g13Geometry.vertices.push(new THREE.Vector3(7.95, 6.2, 0)) ;
	g13Geometry.faces.push(new THREE.Face3(0, 1, 2)) ;
	g13Geometry.faces.push(new THREE.Face3(1, 2, 4)) ;
	g13Geometry.faces.push(new THREE.Face3(1, 4, 3)) ;
	var g13Material = new THREE.MeshBasicMaterial({color : 0x6AA121}) ;
	var g13Mesh = new THREE.Mesh(g13Geometry, g13Material) ;
	PIEaddElement(g13Mesh) ;
	for(var i = 5.4; i <= 7.4; i += 0.2	) {
		var l6 = new THREE.Geometry() ;
    	l6.vertices.push(new THREE.Vector3(i, 6.0, 2.5)) ;
    	l6.vertices.push(new THREE.Vector3(i+0.2, 6.2+0.3, 2.5)) ;
    	var l6Mesh = new THREE.Line(l6, new THREE.LineBasicMaterial({color: "black", linewidth : 1})) ;
    	PIEaddElement(l6Mesh) ;
	}
	/*tip of pin*/
    var pinGeometry = new THREE.CylinderGeometry( 0.9, 0.01, 1	, 54 );
    var pinMaterial = new THREE.MeshBasicMaterial( {color: 0x6AA121 } );
    var pinMesh = new THREE.Mesh( pinGeometry, pinMaterial );
    pinMesh.position.set(7.98, 6.5, 0	) ;
   	pinMesh.rotation.z = 1.57 ;
    PIEaddElement(pinMesh) ;	
    
   	var g14Geometry = new THREE.BoxGeometry( 0.3	, 6.7	, 2) ;
    var g14Texture = new THREE.ImageUtils.loadTexture("assets/wood1.jpg") ;
    var g14Material = new THREE.MeshBasicMaterial({color : 0x2B547E}) ;
    var g14Mesh = new THREE.Mesh(g14Geometry, g14Material) ;
    g14Mesh.position.set(6.98, 4.0, 2) ;
    PIEaddElement(g14Mesh) ;
	/*end of tip pin*/
	
	/*right side wire*/
	var curve = new THREE.QuadraticBezierCurve3(
		new THREE.Vector3( 6.98, 0.9, 0 ),
		new THREE.Vector3( 12.98, 1.1, 0 ),
		new THREE.Vector3( 6.98, -2.1, 25.2 )
	);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

	var material = new THREE.LineBasicMaterial( { color : "red" , linewidth : 2} );

	// Create the final object to add to the scene
	var curveObject = new THREE.Line( geometry, material );	
  	/*end*/
  	PIEaddElement(curveObject) ;
  	
  	/*left side wire*/
  	
  	var curve = new THREE.QuadraticBezierCurve3(
		new THREE.Vector3( -8, 1, 0 ),
		new THREE.Vector3( -11.98, 2.1, 0 ),
		new THREE.Vector3( -4.68, 3.5, 0 )
	);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

	var material = new THREE.LineBasicMaterial( { color : 0x0099FF , linewidth : 2} );

	// Create the final object to add to the scene
	var curveObject = new THREE.Line( geometry, material );
  	/*end*/
  	PIEaddElement(curveObject) ;
  	
  	
  	
  	/**/
  	var curve = new THREE.QuadraticBezierCurve3(
		new THREE.Vector3( -4.48, 3.5, 1.4 ),
		new THREE.Vector3( -0.88, 13.5, 1.4 ),
		new THREE.Vector3( -0.28, 6.1, 1.4 )
	);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

	var material = new THREE.LineBasicMaterial( { color : 0x0099FF , linewidth : 2} );

	// Create the final object to add to the scene
	var curveObject = new THREE.Line( geometry, material );
  	/*end*/
  	PIEaddElement(curveObject) ;
  	/**/

    /*to coil*/
  	var curve = new THREE.QuadraticBezierCurve3(
		new THREE.Vector3( 4.65, 0.5, 0 ),
		new THREE.Vector3( 1.20, 0.8, 0 ),
		new THREE.Vector3( 0.1, 2.9, 1.4 )
	);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

    var material = new THREE.LineBasicMaterial( { color : 0x0099FF , linewidth : 2} );
	// Create the final object to add to the scene
	var curveObject = new THREE.Line( geometry, material );
  	/*end*/
  	PIEaddElement(curveObject) ;    
    /**/
    window.addEventListener("click",even);
    var plane = new THREE.Mesh(new THREE.PlaneGeometry(120, 120), new THREE.MeshBasicMaterial({color : 0xa3e4d7 })) ;
    plane.position.set(0, 0, -10) ;
    PIEaddElement(plane) ;
    initialiseControls() ;
    resetExperiment() ;
    
	    wave1.material.color.setHex( 0xa3e4d7 );
        wave2.material.color.setHex( 0xa3e4d7 );
        wave3.material.color.setHex( 0xa3e4d7 );
        wave4.material.color.setHex( 0xa3e4d7 );
        wave5.material.color.setHex( 0xa3e4d7 );
        wave6.material.color.setHex( 0xa3e4d7 );
    /*end*/  
    /*Induced line*/     
    var material = new THREE.LineBasicMaterial({color: "black", opacity:1});
	var ellipse = new THREE.EllipseCurve(0, 0, 1, 2.3, 0, 2* Math.PI, false);
	var ellipsePath = new THREE.CurvePath();
	ellipsePath.add(ellipse);
	var ellipseGeometry = ellipsePath.createPointsGeometry(50);
	ellipseGeometry.computeTangents();
	line1 = new THREE.Line(ellipseGeometry, material);
	line1.position.set(2, 4.5, 1.5) ;
	line1.rotation.y = 1.0 ;
	PIEaddElement( line1 );

	line2 = new THREE.Line(ellipseGeometry, material);
	line2.position.set(2.4, 4.5, 1.5) ;
	line2.rotation.y = 1.0 ;
	PIEaddElement( line2 );

	line3 = new THREE.Line(ellipseGeometry, material);
	line3.position.set(2.8, 4.5, 1.5) ;
	line3.rotation.y = 1.0 ;
	PIEaddElement( line3 );

	line4 = new THREE.Line(ellipseGeometry, material);
	line4.position.set(3.2, 4.5, 1.5) ;
	line4.rotation.y = 1.0 ;
	PIEaddElement( line4 );

	line5 = new THREE.Line(ellipseGeometry, material);
	line5.position.set(1.6, 4.5, 1.5) ;
	line5.rotation.y = 1.0 ;
	PIEaddElement( line5 );
	
    line1.position.z = -56 ;
    line2.position.z = -56 ;
    line3.position.z = -56 ;
    line4.position.z = -56 ;
    line5.position.z = -56 ;

	var loader = new THREE.FontLoader();
	loader.load( 'assets/helvetiker_regular.typeface.json', function ( font ) {

  	var gtextGeometry = new THREE.TextGeometry( "S", { font: font, size: 0.8, height: 1, curveSegments: 7});

  	var gtextMaterial = new THREE.MeshBasicMaterial( { color: "black" });

  	var gmesh = new THREE.Mesh( gtextGeometry, gtextMaterial );
	gmesh.position.set(0, 6.5, 0) ;
	gmesh.rotation.y = 0.1 ;
	gmesh.rotation.x = 0.1 ;
  	PIEaddElement( gmesh );
  	PIErender() ;

  	var gtextGeometry = new THREE.TextGeometry( "N", { font: font, size: 0.7, height: 1, curveSegments: 7});

  	var gtextMaterial = new THREE.MeshBasicMaterial( { color: "black" });

  	var gmesh = new THREE.Mesh( gtextGeometry, gtextMaterial );
	gmesh.position.set(0, 1.5, 0) ;
	gmesh.rotation.y = 0.1 ;
	gmesh.rotation.x = 0.1 ;
  	PIEaddElement( gmesh );
  	PIErender() ;

  	var gtextGeometry = new THREE.TextGeometry( "Key", { font: font, size: 0.7, height: 1, curveSegments: 7});

  	var gtextMaterial = new THREE.MeshBasicMaterial( { color: "black" });

  	var gmesh = new THREE.Mesh( gtextGeometry, gtextMaterial );
	gmesh.position.set(6.5, -4.5, 0) ;
	gmesh.rotation.y = -0.1 ;
	gmesh.rotation.x = -0.1 ;
  	PIEaddElement( gmesh );
  	PIErender() ;

  	var gtextGeometry = new THREE.TextGeometry( "+", { font: font, size: 0.5, height: 1, curveSegments: 7});

  	var gtextMaterial = new THREE.MeshBasicMaterial( { color: "black" });

  	var gmesh = new THREE.Mesh( gtextGeometry, gtextMaterial );
	gmesh.position.set(-4.0, 1.0, 0) ;
	gmesh.rotation.y = 0.1 ;
	//gmesh.rotation.x = 0.05 ;
  	PIEaddElement( gmesh );
  	PIErender() ;

  	var gtextGeometry = new THREE.TextGeometry( "_", { font: font, size: 0.5, height: 1, curveSegments: 7});

  	var gtextMaterial = new THREE.MeshBasicMaterial( { color: "black" });

  	var gmesh = new THREE.Mesh( gtextGeometry, gtextMaterial );
	gmesh.position.set(-5.8, 1.3, 0) ;
	gmesh.rotation.y = 0.1 ;
	//gmesh.rotation.x = 0.05 ;
  	PIEaddElement( gmesh );
  	PIErender() ;

  	var gtextGeometry = new THREE.TextGeometry( "+", { font: font, size: 0.5, height: 1, curveSegments: 7});

  	var gtextMaterial = new THREE.MeshBasicMaterial( { color: "black" });

  	var gmesh = new THREE.Mesh( gtextGeometry, gtextMaterial );
	gmesh.position.set(-6.7, 1.0, 0) ;
	gmesh.rotation.y = 0.1 ;
	//gmesh.rotation.x = 0.05 ;
  	PIEaddElement( gmesh );
  	PIErender() ;

  	var gtextGeometry = new THREE.TextGeometry( "_", { font: font, size: 0.5, height: 1, curveSegments: 7});

  	var gtextMaterial = new THREE.MeshBasicMaterial( { color: "black" });

  	var gmesh = new THREE.Mesh( gtextGeometry, gtextMaterial );
	gmesh.position.set(-8.5, 1.3, 0) ;
	gmesh.rotation.y = 0.1 ;
	//gmesh.rotation.x = 0.05 ;
  	PIEaddElement( gmesh );
  	PIErender() ;
	
	});



	
    PIEsetAreaOfInterest(-15, 15, 15, -15) ;
    PIEadjustCamera(4, 3, 55) ;
    
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
		 	if(c=='s') {
		 		//alert('switch') ;
		 		break ;
		 	}
	}
	if(c == 's' && count == 0) {
		//alert('if') ;
		s2Mesh.position.y = -2.3 ;
		count = 1 ;
		PIErender() ;
		PIEstartAnimation() ;
		//alert('if end') ;
	} else if(c == 's' && count == 1) {
		//alert('else') ;
		s2Mesh.position.y = -2.1 ;
		count = 0 ;
		
        line1.position.z = -56 ;
        line2.position.z = -56 ;
        line3.position.z = -56 ;
        line4.position.z = -56 ;
        line5.position.z = -56 ;

        wave1.material.color.setHex( 0xa3e4d7 );
        wave2.material.color.setHex( 0xa3e4d7 );
        wave3.material.color.setHex( 0xa3e4d7 );
        		
		PIErender() ;
		resetExperiment() ;
		PIErender() ;
		PIEstopAnimation() ;
	} 	
}
function resetExperiment() {
    /*Yet to do*/
        wave1.material.color.setHex( 0xa3e4d7 );
        wave2.material.color.setHex( 0xa3e4d7 );
        wave3.material.color.setHex( 0xa3e4d7 );    
    group.rotation.z = 0 ;
    cnt = 0 ;
}
function updateExperimentElements(t, dt) {
    /*Yet to do*/
    if(cntt == 0) {
    	cntt = 1 ;
    	return ;
    }//group.position.x += 0.1 ;
    
    
    count = 1 ;
    if(cnt%50 == 0) {

    	group.rotation.z += 0.05 ;
        wave1.material.color.setHSL( Math.random(), 1, 0.5 );
        wave2.material.color.setHSL( Math.random()+0.1, 1, 0.5 );
        wave3.material.color.setHSL( Math.random(), 1, 0.5 );

        line1.position.z = -56 ;
        line2.position.z = -56 ;
        line3.position.z = -56 ;
        line4.position.z = -56 ;
        line5.position.z = -56 ;
        
    } else if(cnt%50 == 25) {
        group.rotation.z -= 0.05 ;
        //g11aaMesh.material.color.setHex(0xffffff) ;
        //g11aMesh.position.set(g11aaMesh.position.x, g11aMesh.position.y, g11aMesh.position.z-0.9) ;
        g11aaMesh.position.set(g11aMesh.position.x-0.1, g11aMesh.position.y, g11aMesh.position.z-0.2) ;
        g11aMesh.material.color.setHex(0x2B3856) ;     

        wave1.material.color.setHex( 0xa3e4d7 );
        wave2.material.color.setHex( 0xa3e4d7 );
        wave3.material.color.setHex( 0xa3e4d7 );

        line1.position.z = 1.5 ;
        line2.position.z = 1.5 ;
        line3.position.z = 1.5 ;
        line4.position.z = 1.5 ;
        line5.position.z = 1.5 ;
           
    }
    cnt++ ; 
}
