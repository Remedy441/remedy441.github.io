var gg19,gg18;
var c1=0,c2=1;
var t11,t22,t33,t44,port8cyder,t55,t66,t77,t88,t99;
var vu=0,vu1=0,vu2=0,vu3=0;
var car=2;
var cov=2;
var step=1,km=6.5;
var chan=0.07;
var cO27,cO1,cO2,cO3,cO4,cO5,cO6,cO7,cO8,cO9,cO10,cO11,f=0;
var xc=0.01,yc=0.009,zc=0.13;
var re=0,cp=0;
var g1,g2,g3,g4,g5,g6,g7,g8,g9,g10;
var mf1,mf2,mf3,mf4,mf5,mf6,mf7,mf8,mf9,mf10;
var a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14;
var a23,a24,a25,a26,a27,a28,a29,a210,a211,a212,a213,a214;
var ggg1,ggg2,ggg3,ggg4;
var dfs=0;
var helpContent = "";
var infoContent = "";
function initialiseHelp() {
    helpContent = helpContent + "<h2>Force On a Current Carrying Conductor in a MagneticField</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The Experiment shows how does Force On a Current Carrying Conductor in a MagneticField works</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The start stage</h3>";
    helpContent = helpContent + "<p>The initial state is start stage. In this everything has already set up. <br><br>you can enter the animation stage by clicking the start button.</p>";
    
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In this  Animation first we allow user to start the button see what happens to the aluminium rod and try different options given in the control panel and check how the conductor difs(or)lifted </p>";
    helpContent = helpContent + "<ul>";
      helpContent = helpContent + "<br>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play button on the top line.</p>";
    PIEupdateHelp(helpContent);
}
function initialiseInfo() {
    infoContent = infoContent + "<h2>Force On a Current Carrying Conductor in a MagneticField</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows How Force On a Current Carrying Conductor in a MagneticField works.</p>";
    infoContent = infoContent + "<h3>Force</h3>";
    infoContent = infoContent + "<p>a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest)</p>";
    infoContent = infoContent + "<h3>Magnetic Field</h3>";
    infoContent = infoContent + "<p> A magnetic field is generated when electric charge carriers such as electrons move through space or within an electrical conductor. The geometric shapes of the magnetic flux lines produced by moving charge carriers (electric current) are similar to the shapes of the flux lines in an electrostatic field</p>";
     infoContent = infoContent + "<h3>Conductor</h3>";
    infoContent = infoContent + "<p> An electrical conductor is a substance in which electrical charge carriers, usually electrons, move easily from atom to atom with the application of voltage. Conductivity, in general, is the capacity to transmit something, such as electricity or heat. ... Copper, steel, gold, aluminum, and brass are also good conductors</p>";
    infoContent = infoContent + "<h3>How does it work?</h3>";
    infoContent = infoContent + "<p>When we pass the current through the aluminum rod hung from a tripod  and placed across one of the hanging ends the rod either dips or is lifted.When we try to change the current value ,based on the current value the rod dips and also same with the Magnet strength</p>";
    PIEupdateInfo(infoContent);
}
function harish1()
{
	c1=1,c2=0;
	PIEstartAnimation();
}
function yadav1()
{
	c1=0,c2=1;
	PIEstartAnimation();
}
function toggle(event)
{
//alert("harish");
    var vector = new THREE.Vector3(( event.clientX / window.innerWidth )* 2 - 1, -( event.clientY / window.innerHeight ) * 2 + 1);

    vector = vector.unproject(PIEcamera);

    var raycaster = new THREE.Raycaster(PIEcamera.position, vector.sub(PIEcamera.position).normalize());

    var intersects = raycaster.intersectObjects(PIEscene.children,true);
    for (var i = 0; i <intersects.length; i++)
    {
		var j=intersects[i].object.name;
		//alert(j);
    		var nji=j.charAt(0);
    		if(nji=='h' || nji=='y')
    		{
	    		if(c1==0)
		    			{
				    		//	alert("harish");
				    			PIEstartAnimation();
				    			c1=1,c2=0;
		    			}
		    		else
		    		{
		    				//alert("yadav");
		    				PIEstartAnimation();
		    				c1=0,c2=1;
		    		}	
		   }
}
}
function loadExperimentElements()
{
 
    PIEsetExperimentTitle("Force On a CurrentCarryingConductor in a MagneticField");
    PIEsetDeveloperName("Harish Kumar");
    PIEhideControlElement();
    initialiseHelp();
  initialiseInfo();
   //PIEaddElement(new THREE.AxisHelper(50));
   
   var geometry = new THREE.PlaneGeometry( 300, 550, 100 );
			var material = new THREE.MeshBasicMaterial({color:"red",specular:'#1595'});
			var p1 = new THREE.Mesh( geometry, material );
			p1.rotation.z=Math.PI/2;
			p1.position.set(5.2,-2.5,-922);
			//PIEaddElement( p1 );
   
   	//big plane 	
   		var g = new THREE.BoxGeometry( 96, 2, 40);
   		var texture = new THREE.ImageUtils.loadTexture("images.jpg") ;
	var m = new THREE.MeshFaceMaterial( [new THREE.MeshBasicMaterial({map:texture,opacity:100}),
																		new THREE.MeshBasicMaterial({map:texture,opacity:100}),
																		new THREE.MeshBasicMaterial({map:texture,opacity:100}),
																		new THREE.MeshBasicMaterial({map:texture,opacity:100}),
																		new THREE.MeshBasicMaterial({map:texture,opacity:100}),
																		new THREE.MeshBasicMaterial({map:texture,opacity:100})] );
 	p = new THREE.Mesh( g, m );
	p.position.set(-4.4,-10,-17);
	p.rotation.x+=0.2;
	//p.rotation.y+=0.1;
	//p.rotation.z+=0.1;
	PIEaddElement( p );
	   var geometry = new THREE.PlaneGeometry( 500, 300, 0 );
			var material = new THREE.MeshBasicMaterial({color:0xf48072,specular:'#1595'});
			var p1 = new THREE.Mesh( geometry, material );
			//p1.rotation.z=Math.PI/2;
			p1.position.set(5.2,8.5,-100);
			PIEaddElement( p1 );
	
	//triopd rod 1
								port8= new THREE.CylinderGeometry( 5.5, 5.5, 1.2, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "#b0c4de",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(17.9,-6,25);
								port8cylinder.rotation.x += 0.1;
								PIEaddElement( port8cylinder);
	//triopd rod 1
	
	//triopd rod 2
								port8= new THREE.CylinderGeometry( 0.6, 0.6, 25.2, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "#b0c4de",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(18.1,6.7,25.4);
								//port8cylinder.rotation.x += 0.3;
								PIEaddElement( port8cylinder);
	//triopd rod 2
	
	//triopd rod 3
								port8= new THREE.CylinderGeometry( 0.4, 0.4, 17.2, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "#b0c4de",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(10.1,15.7,25.4);
								port8cylinder.rotation.z+= 20.43;
								PIEaddElement( port8cylinder);
	//triopd rod 3
	//triopd rod 4
								port8= new THREE.CylinderGeometry( 0.9, 0.9, 2.2, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "#b0c4de",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(18.1,15.7,25.4);
								//port8cylinder.rotation.z+= 20.43;
								PIEaddElement( port8cylinder);
	//triopd rod 4
	
		//triopd rod 5
								port8= new THREE.CylinderGeometry( 0.2, 0.2, 2, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "#b0c4de",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(19.5,15.7,25.4);
								port8cylinder.rotation.z+= 20.43;
								PIEaddElement( port8cylinder);
		//triopd rod 5
		
		//triopd rod 6
								port8= new THREE.CylinderGeometry( 1, 1, 0.6, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "#b0c4de",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(20.5,15.7,25.4);
								port8cylinder.rotation.z+= 20.43;
								PIEaddElement( port8cylinder);
		//triopd rod 6
		//triopd rod 7
								port8= new THREE.CylinderGeometry( 0.4, 0.4, 16.2, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "#b0c4de",transparent:false} );
								port8cyder = new THREE.Mesh( port8, port8material );
								port8cyder.position.set(5.5,7,25.4);
								port8cyder.rotation.z+= 20.43;
								PIEaddElement( port8cyder);
		//triopd rod 7
		
		//horse1
			var g = new THREE.BoxGeometry( 13, 2, 15 );
	var m = new THREE.MeshFaceMaterial( [new THREE.MeshBasicMaterial({color: "#008B8B"}),
					new THREE.MeshBasicMaterial({color: "green"}),new THREE.MeshBasicMaterial({color: "#008B8B"}),new THREE.MeshBasicMaterial({color: "gold"}),new THREE.MeshBasicMaterial({color: "#7B68EE"}),new THREE.MeshBasicMaterial({color: "#5F9EA0",transparent:false})] );
 	p = new THREE.Mesh( g, m );
	p.position.set(-12.4,-4.3,5);
	//p.rotation.x+=0.1;
	//p.rotation.y+=0.2;
	PIEaddElement( p );
	//horse1
	
	
	
	//horse rod 7
								port8= new THREE.CylinderGeometry( 0.8, 0.8, 11.2, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "grey",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-12.2,4.3,25.4);
								//port8cylinder.rotation.z+= 20.43;
								PIEaddElement( port8cylinder);
	//horse rod 7
	//horse rod 8
								port8= new THREE.CylinderGeometry( 1.8, 1.8, 1.2, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "grey",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-11,7.3,20);
								//port8cylinder.rotation.z+= 20.43;
								PIEaddElement( port8cylinder);
	
	//voltage
					b1 = new THREE.BoxGeometry( 4.7, 7	, 5.2 );
bm1 = new THREE.MeshFaceMaterial([new THREE.MeshBasicMaterial({color:"#2D383A"}),
										   new THREE.MeshBasicMaterial({color:"grey"}),
										   new THREE.MeshBasicMaterial({color:"blue"}),
										   new THREE.MeshBasicMaterial({color:"orange"}),
										   new THREE.MeshBasicMaterial({color:"yellow"}),
										   new THREE.MeshBasicMaterial({color:"skyblue"})

										   ]);
v1 = new THREE.Mesh( b1, bm1 );
v1.rotation.y-=-2.4;
//v1.rotation.z+=-3.1;
v1.position.set(-32,-3.6,13);
PIEscene.add( v1 );
	
		b1 = new THREE.BoxGeometry( 3.5, 4, 5.9 );
bm1 = new THREE.MeshFaceMaterial([new THREE.MeshBasicMaterial({color:"#4D8C57"}),
										   new THREE.MeshBasicMaterial({color:"gold"}),
										   new THREE.MeshBasicMaterial({color:"blue"}),
										   new THREE.MeshBasicMaterial({color:"#4D8C57"}),
										   new THREE.MeshBasicMaterial({color:"gold"}),
										   new THREE.MeshBasicMaterial({color:"#4D8C57"})

										   ]);
v1 = new THREE.Mesh( b1, bm1 );
//box1.rotation.x+=-0.8;
//v1.rotation.y+=-0.8;
//v1.rotation.z+=-0.1;
//v1.rotation.y+=-0.1;
v1.rotation.y-=-2.56;
//v1.rotation.z-=0.1;
v1.position.set(-32,1.9,12.9);
PIEscene.add( v1 );

//signs
			var hg=new THREE.Group();
			var g39= new THREE.PlaneGeometry( 1.2, 0.3, 30 );
								var m39= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide,transparent:true,opacity:0.8,DepthWrite:false} );
					 			p39= new THREE.Mesh( g39, m39);
								p39.position.set(24.3,-5.4,2);
								//PIEaddElement(p39);
								hg.add(p39);
							//+ve 
							var g40= new THREE.PlaneGeometry( 0.25, 1.2, 30 );
								var m40= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide,transparent:true,opacity:0.8,DepthWrite:false});
					 			p40= new THREE.Mesh( g40, m40);
								p40.position.set(24.3,-5.4,2);
								hg.add(p40);
							//+ve sign
								var g41= new THREE.PlaneGeometry( 1.2, 0.3, 30 );
								var m41= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide,transparent:true,opacity:0.8,DepthWrite:false} );
					 			p41= new THREE.Mesh( g41, m41);
								p41.position.set(-30.1,2.6,19);
								PIEaddElement(p41);
								PIEaddElement(hg);
								hg.position.set(-51.4,8.1,19);
//signs	
	//voltage
//switch
			var g = new THREE.BoxGeometry( 10, 2, 8 );
	var m = new THREE.MeshFaceMaterial( [new THREE.MeshBasicMaterial({color: "#008B8B"}),
					new THREE.MeshBasicMaterial({color: "green"}),new THREE.MeshBasicMaterial({color: "#008B8B"}),new THREE.MeshBasicMaterial({color: "gold"}),new THREE.MeshBasicMaterial({color: "#7B68EE"}),new THREE.MeshBasicMaterial({color: "brown",transparent:false})] );
 	p = new THREE.Mesh( g, m );
	p.position.set(2,-6.9,17.8);
	//p.rotation.x+=0.01
	p.rotation.y-=0.1;
	p.name="mou";
//	p.rotation.z+=0.03;
	PIEaddElement( p );
//switch
//terminals
		port8= new THREE.CylinderGeometry( 0.4, 0.8, 0.6, 100);
								port8material = new THREE.MeshBasicMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-33.5,4.1,12);
								//port8cylinder.rotation.x += 13.5;
								PIEaddElement( port8cylinder);
				port8= new THREE.CylinderGeometry( 0.4, 0.8, 0.6, 100);
								port8material = new THREE.MeshBasicMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-33.5,4.1,1);
								//port8cylinder.rotation.x += 13.5;
								PIEaddElement( port8cylinder);
//terminals
//switch vertices
					port8= new THREE.CylinderGeometry( 0.5, 0.5, 1.2, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "grey",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-2.5,-4.2,27);
								//port8cylinder.rotation.x += 13.5;
								PIEaddElement( port8cylinder);
		//switch vertices
		//switchvertices
					port8= new THREE.CylinderGeometry( 0.5, 0.5, 1.2, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "grey",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(4.8,-4.2,27);
								//port8cylinder.rotation.x += 13.5;
								PIEaddElement( port8cylinder);
								
								//switch
						//main frame
						var	 texture = new THREE.ImageUtils.loadTexture("index.jpeg") ;
								var	port91= new THREE.CylinderGeometry( 0.8, 0.8, 1, 100);
								var port91material = new THREE.MeshLambertMaterial( {color: "green",opacity:40} );
								gg19= new THREE.Mesh( port91, port91material );
								gg19.position.set(3.8,-4,20);
								gg19.name="yadav";
								//port8cylinder.rotation.x += 13.5;
								PIEaddElement(gg19);
								gg20=new THREE.Group();
								//gg20.add(gg19);
						//main frame1
								var	port10= new THREE.CylinderGeometry( 0.8, 0.8, 1, 100);
								var port10material = new THREE.MeshBasicMaterial( {color: "red",transparent:false,side:THREE.BaclSide} );
								gg18= new THREE.Mesh( port10, port10material );
								gg18.position.set(-0.2,-4.6,20);
								gg18.name="harish";
								//port8cylinder.rotation.x += 13.5;
								PIEaddElement(gg18);
								gg20.add(gg18);
								PIEaddElement(gg20);
						//rectangle1
									port9= new THREE.CylinderGeometry( 1.3, 1.3,1,200);
								port9material = new THREE.MeshPhysicalMaterial( {color: "black",transparent:true} );
								gg14= new THREE.Mesh( port9, port9material );
								gg14.position.set(3.8,-5,20.3);
								//port8cylinder.rotation.x += 13.5;
								PIEaddElement(gg14);	
								gg14.name="chandu";
							//rectangle2
									port9= new THREE.CylinderGeometry( 1.3, 1.3, 1,200);
								port9material = new THREE.MeshPhysicalMaterial( {color: "black",transparent:true} );
								gg17= new THREE.Mesh( port9, port9material );
								gg17.position.set(-0.2,-5,20.3);
								gg17.name="vignesh";
								//port8cylinder.rotation.x += 13.5;
								PIEaddElement(gg17);	
		//switchvertices	
//lines lines lines lines  lines lines lines lines lines lines lines lines   lines lines lines lines  lines lines lines lines
			var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-30,4.4,12),
										new THREE.Vector3(-24, 10.9, 23),
										new THREE.Vector3(-25,-7,2)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

										 cO9 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO9);	
											
											var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-25,-7,2),
										new THREE.Vector3(-18, -13, 23),
										new THREE.Vector3(-9,-9.2,2)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

											 cO10= new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO10);	
												var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-9,-9.2,2),
										new THREE.Vector3(-4, -2, 23),
										new THREE.Vector3(-2.2,-4.2,23)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

											 cO11 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO11);	
							var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(5.2,-4.2,23  ),
										new THREE.Vector3(8.8, 1.3, 2),
										new THREE.Vector3(9.4,2.2,23 )
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

											 cO2 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO2);	
									var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(9.4,2.2,23 ),
										new THREE.Vector3(15.4, 1.5, 20),
										new THREE.Vector3(15.4,6.2,23 )
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

										 cO3 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO3);	
											
									var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(15.4,6.2,23 ),
										new THREE.Vector3(15.4,7.2,23),
										new THREE.Vector3(15.4,16.2,23)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

										cO4= new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO4);	
											
										var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-31.1,4.4,19),
										new THREE.Vector3(-30.9,21.9,19),
										new THREE.Vector3(2.9,20.9,19)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

									 cO5 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO5);	
											
											var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(10.5,15,32),
										new THREE.Vector3(10.5,10.8,32),
										new THREE.Vector3(10.5,6.5,32)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

										 cO6= new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO6);	
											
											var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(0.6,16.4,40),
										new THREE.Vector3(4.3,15.9,40),
										new THREE.Vector3(3.3,6.25,40)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

									 cO7= new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO7);	
											
			
	
//lines lines lines lines  lines lines lines lines lines lines lines lines   lines lines lines lines  lines lines lines lines	
							//directionalLight .position.set(-12,22,12);	
var i=0,x=12.8;
		//for loop
					for(i=0;i<8;i++)
					{
								port7=new THREE.PlaneGeometry(0.2,0.7,2);
							//	port7.vertices.shift();
								port7material = new THREE.MeshBasicMaterial( {color: "green"} );
								port7cylinder = new THREE.Mesh( port7, port7material );
								port7cylinder.position.set(x,14.8,32);
								port7cylinder.rotation.z+=0.4;
								x=x-0.3;
								PIEaddElement( port7cylinder);
					}
					
//MAGNET
var t=1;
						var CustomSinCurve = THREE.Curve.create(

	function ( scale ) { //custom curve constructor

		this.scale = ( scale === undefined ) ? 1 : scale;

	},

	function ( t ) { //getPoint: t is between 0-1

		var tx = t * 3 - 1.5;
		var ty = Math.sin( 1*Math.PI * t );
		var tz = 0;

		return new THREE.Vector3( tx, ty, tz ).multiplyScalar( this.scale );

	}

);

var path = new CustomSinCurve( 2 );
var geometry = new THREE.TubeGeometry( path, 200, 1, 190, false );
var material = new THREE.MeshPhysicalMaterial( { color: 'red'} );
var mesh = new THREE.Mesh( geometry, material );
mesh.rotation.z=Math.PI/3.9;
mesh.position.x=-8.7;
mesh.position.y=10.3;
mesh.position.z=15;
PIEscene.add( mesh );

var path = new CustomSinCurve( 2);
var geometry = new THREE.TubeGeometry( path, 100, 1, 80, false );
var material = new THREE.MeshPhysicalMaterial( { color:'red'} );
var mesh = new THREE.Mesh( geometry, material );
mesh.rotation.z=Math.PI/1.31;
mesh.position.x=-8.6;
mesh.position.y=4.9;
mesh.position.z=15;
PIEscene.add( mesh );

var geometry = new THREE.CylinderGeometry( 1, 1, 6.5, 20 );
var material = new THREE.MeshPhysicalMaterial( {color:'red'} );
var cylinder = new THREE.Mesh( geometry, material );
cylinder.position.set(-4.02,12.5,15);
cylinder.rotation.z+=20.43;
//cylinder.rotation.z=Math.PI/2;
//cylinder.rotation.y=Math.PI;
PIEscene.add( cylinder );

var geometry = new THREE.CylinderGeometry( 1, 1, 6.5, 20 );
var material = new THREE.MeshPhysicalMaterial( {color:'red'} );
var cylinder = new THREE.Mesh( geometry, material );
cylinder.position.set(-4.02,2.87,15);
cylinder.rotation.z+=20.43;
//cylinder.rotation.z=Math.PI/2;
//cylinder.rotation.y=Math.PI;
PIEscene.add( cylinder );

var geometry = new THREE.CylinderGeometry( 1, 1, 2, 20 );
var material = new THREE.MeshPhysicalMaterial( {color: 'white'} );
var cylinder = new THREE.Mesh( geometry, material );
cylinder.position.set(0.3,12.5,15);
cylinder.rotation.z=Math.PI/2;
//cylinder.rotation.y=Math.PI;
PIEscene.add( cylinder );

var geometry = new THREE.CylinderGeometry( 1, 1, 2, 20  );
var material = new THREE.MeshPhysicalMaterial( {color: 'white'} );
var cylinder = new THREE.Mesh( geometry, material );
cylinder.position.set(0.3,2.87,15);
cylinder.rotation.z=Math.PI/2;
//cylinder.rotation.y=Math.PI;
PIEscene.add( cylinder );

//MAGNET

var loader = new THREE.FontLoader();
			//alert("harish");
				loader.load( 'helvetiker_regular.typeface.json', function ( font ) {
			//alert("harish");
			  	var bg1= new THREE.TextGeometry( "S", { font: font, size: 1.4, height: 1, curveSegments: 7});

			  	var bg2= new THREE.MeshBasicMaterial( { color: "black"});

			  	t11 = new THREE.Mesh(bg1,bg2);
				t11.position.set(-1.1,10.7, 25) ;
				PIEaddElement(t11);
				
				var bg3= new THREE.TextGeometry( "N", { font: font, size: 1.4, height: 1, curveSegments: 7});

			  	var bg4= new THREE.MeshBasicMaterial( { color: "black"});

			  	 t22 = new THREE.Mesh(bg3,bg4);
				t22.position.set(-1.1,2.6, 25);
				PIEaddElement(t22);
				
				var bg5= new THREE.TextGeometry( "S", { font: font, size: 1.4, height: 1, curveSegments: 7});

			  	var bg6= new THREE.MeshBasicMaterial( { color: "black"});

			  	t33= new THREE.Mesh(bg5,bg6);
				t33.position.set(-1.1,2.6, 25) ;
				t33.visible=false;
				PIEaddElement(t33);
				
				var bg7= new THREE.TextGeometry( "N", { font: font, size: 1.4, height: 1, curveSegments: 7});

			  	var bg8= new THREE.MeshBasicMaterial( { color: "black"});

			  	 t44=new THREE.Mesh(bg7,bg8);
				t44.position.set(-1.1,10.7, 25) ;
				t44.visible=false;
				PIEaddElement(t44);
				
				var bg7= new THREE.TextGeometry( "F", { font: font, size: 1.2, height: 1, curveSegments: 7});

			  	var bg8= new THREE.MeshBasicMaterial( { color: "black"});

			  	 t55=new THREE.Mesh(bg7,bg8);
				t55.position.set(1.5,6.4, 25) ;
				t55.visible=false;
				PIEaddElement(t55);
				
				var bg7= new THREE.TextGeometry( "i", { font: font, size: 1.2, height: 1, curveSegments: 7});

			  	var bg8= new THREE.MeshBasicMaterial( { color: "black"});

			  	 t66=new THREE.Mesh(bg7,bg8);
				t66.position.set(14,8.6, 0) ;
				t66.rotation.z-=0.4;
				t66.visible=false;
				PIEaddElement(t66);
				
				var bg7= new THREE.TextGeometry( "i", { font: font, size: 1.2, height: 1, curveSegments: 7});

			  	var bg8= new THREE.MeshBasicMaterial( { color: "black"});

			  	 t77=new THREE.Mesh(bg7,bg8);
				t77.position.set(12,3.9, 0) ;
				t77.rotation.z+=0.4;
				t77.visible=false;
				PIEaddElement(t77);
				});
	//main arro		
				var geometry = new THREE.PlaneGeometry( 3, 0.2, 100 );
			var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
			g1 = new THREE.Mesh( geometry, material );
			g1.rotation.z-=-0.4;
			g1.visible=false;
			g1.position.set(9.2,5.5,10);
			PIEaddElement(g1);
	//1arro1	
			var geometry = new THREE.PlaneGeometry( 1, 0.2, 100 );
			var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
			g2 = new THREE.Mesh( geometry, material );
			g2.rotation.z-=-1;
			g2.visible=false;
			g2.position.set(10.3,5.6,10);
			PIEaddElement(g2);
			
			var geometry = new THREE.PlaneGeometry( 1, 0.2, 100 );
			var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
			g3 = new THREE.Mesh( geometry, material );
			g3.rotation.z+=-0.1;
			g3.visible=false;
			g3.position.set(10.1,6.1,10);
			PIEaddElement(g3);
			
		//1arro2	
			var geometry = new THREE.PlaneGeometry( 1, 0.2, 100 );
			var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
			 g4 = new THREE.Mesh( geometry, material );
			g4.rotation.z+=-0.1;
			g4.visible=false;
			g4.position.set(8.2,4.8,10);
			PIEaddElement(g4);
			
			var geometry = new THREE.PlaneGeometry( 1, 0.2, 100 );
			var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
			 g5= new THREE.Mesh( geometry, material );
			g5.rotation.z-=-1;
			g5.visible=false;
			g5.position.set(8,5.2,10);
			PIEaddElement(g5);
	//main arro2
			var geometry = new THREE.PlaneGeometry( 3, 0.2, 100 );
			var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
			 g6 = new THREE.Mesh( geometry, material );
			g6.rotation.z+=-0.4;
			g6.visible=false;
			g6.position.set(11.2,7.5,10);
			PIEaddElement(g6);
		//2arro1
			var geometry = new THREE.PlaneGeometry( 1, 0.2, 100 );
			var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
			 g7= new THREE.Mesh( geometry, material );
			g7.rotation.z-=-0.1;
			g7.visible=false;
			g7.position.set(12,6.8,10);
			PIEaddElement(g7);
			
			var geometry = new THREE.PlaneGeometry( 1, 0.2, 100 );
			var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
			 g8= new THREE.Mesh( geometry, material );
			g8.rotation.z+=-0.8;
			g8.visible=false;
			g8.position.set(12.2,7.4,10);
			PIEaddElement(g8);
		//2arro2
				var geometry = new THREE.PlaneGeometry( 1, 0.2, 100 );
			var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
			 g9= new THREE.Mesh( geometry, material );
			g9.rotation.z+=-1;
			g9.visible=false;
			g9.position.set(10,7.6,10);
			PIEaddElement(g9);
			
			var geometry = new THREE.PlaneGeometry( 1, 0.2, 100 );
			var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
			 g10= new THREE.Mesh( geometry, material );
			g10.rotation.z-=-0.2;
			g10.visible=false;
			g10.position.set(10.2,8.2,10);
			PIEaddElement(g10);
		//force
			var q2w12= new THREE.SphereGeometry(0.6, 0.1, 1 );
								var q2w112= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide} );
								 ggg1= new THREE.Mesh( q2w12, q2w112);
								ggg1.position.set(1.4,6.3,2);
								ggg1.visible=false;
								PIEaddElement( ggg1);
								
			var geometry = new THREE.PlaneGeometry( 0.2, 1.5, 100 );
			var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
			 ggg2= new THREE.Mesh( geometry, material );
			ggg2.position.set(0.85,7.2,10);
			ggg2.visible=false;
			PIEaddElement(ggg2);			
				
					var q2w12= new THREE.SphereGeometry(0.6, 0.1, 1 );
								var q2w112= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide} );
								 ggg3= new THREE.Mesh( q2w12, q2w112);
								ggg3.position.set(1.4,8.7,2);
								ggg3.visible=false;
								PIEaddElement( ggg3);
		//magnetic field
				a1 = new THREE.Geometry();
						a1.vertices.push(new THREE.Vector3(0, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0.2, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0, 0.2, 0.1));
						a1.faces.push(new THREE.Face3(0, 1, 2));


						a2 = new THREE.MeshBasicMaterial({color: 'yellow', side: THREE.DoubleSide})
						a3 = new THREE.Mesh(a1, a2);
						a3.rotation.z=Math.PI/3.8;
						a3.position.set(-2.45,5.7,-4);
						a3.scale.x+=2.5;
						a3.scale.y+=2.5;
						a3.scale.z+=2.5;
						a3.visible=false;
						PIEaddElement(a3);
								
						a1 = new THREE.Geometry();
						a1.vertices.push(new THREE.Vector3(0, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0.2, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0, 0.2, 0.1));
						a1.faces.push(new THREE.Face3(0, 1, 2));


						a2 = new THREE.MeshBasicMaterial({color: 'yellow', side: THREE.DoubleSide})
						a4 = new THREE.Mesh(a1, a2);
						a4.rotation.z=Math.PI/3.8;
						a4.position.set(-3.1,5.7,-4);
						a4.scale.x+=2.5;
						a4.scale.y+=2.5;
						a4.scale.z+=2.5;
						a4.visible=false;
						PIEaddElement(a4);
						
							a1 = new THREE.Geometry();
						a1.vertices.push(new THREE.Vector3(0, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0.2, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0, 0.2, 0.1));
						a1.faces.push(new THREE.Face3(0, 1, 2));


						a2 = new THREE.MeshBasicMaterial({color: 'yellow', side: THREE.DoubleSide})
						a5 = new THREE.Mesh(a1, a2);
						a5.rotation.z=Math.PI/3.8;
						a5.position.set(-3.8,5.7,-4);
						a5.scale.x+=2.5;
						a5.scale.y+=2.5;
						a5.scale.z+=2.5;
						a5.visible=false;
						PIEaddElement(a5);
						
						a1 = new THREE.Geometry();
						a1.vertices.push(new THREE.Vector3(0, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0.2, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0, 0.2, 0.1));
						a1.faces.push(new THREE.Face3(0, 1, 2));


						a2 = new THREE.MeshBasicMaterial({color: 'yellow', side: THREE.DoubleSide})
						a6 = new THREE.Mesh(a1, a2);
						a6.rotation.z=Math.PI/3.8;
						a6.position.set(-4.6,5.7,-4);
						a6.scale.x+=2.5;
						a6.scale.y+=2.5;
						a6.scale.z+=2.5;
						a6.visible=false;
						PIEaddElement(a6);
						
						a1 = new THREE.Geometry();
						a1.vertices.push(new THREE.Vector3(0, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0.2, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0, 0.2, 0.1));
						a1.faces.push(new THREE.Face3(0, 1, 2));


						a2 = new THREE.MeshBasicMaterial({color: 'yellow', side: THREE.DoubleSide})
						a7 = new THREE.Mesh(a1, a2);
						a7.rotation.z=Math.PI/3.8;
						a7.position.set(-5.2,5.7,-4);
						a7.scale.x+=2.5;
						a7.scale.y+=2.5;
						a7.scale.z+=2.5;
						a7.visible=false;
						PIEaddElement(a7);
						
						a1 = new THREE.Geometry();
						a1.vertices.push(new THREE.Vector3(0, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0.2, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0, 0.2, 0.1));
						a1.faces.push(new THREE.Face3(0, 1, 2));


						a2 = new THREE.MeshBasicMaterial({color: 'yellow', side: THREE.DoubleSide})
						a8= new THREE.Mesh(a1, a2);
						a8.rotation.z=Math.PI/3.8;
						a8.position.set(-5.9,5.7,-4);
						a8.scale.x+=2.5;
						a8.scale.y+=2.5;
						a8.scale.z+=2.5;
						a8.visible=false;
						PIEaddElement(a8);
						
						a1 = new THREE.Geometry();
						a1.vertices.push(new THREE.Vector3(0, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0.2, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0, 0.2, 0.1));
						a1.faces.push(new THREE.Face3(0, 1, 2));


						a2 = new THREE.MeshBasicMaterial({color: 'yellow', side: THREE.DoubleSide})
						a9= new THREE.Mesh(a1, a2);
						a9.rotation.z=Math.PI/3.8;
						a9.position.set(-6.7,5.7,-4);
						a9.scale.x+=2.5;
						a9.scale.y+=2.5;
						a9.scale.z+=2.5;
						a9.visible=false;
						PIEaddElement(a9);
					//second	
						a1 = new THREE.Geometry();
						a1.vertices.push(new THREE.Vector3(0, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0.2, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0, 0.2, 0.1));
						a1.faces.push(new THREE.Face3(0, 1, 2));


						a2 = new THREE.MeshBasicMaterial({color: 'yellow', side: THREE.DoubleSide})
						a21= new THREE.Mesh(a1, a2);
						a21.rotation.z=Math.PI/-1.3;
						a21.position.set(-2.45,10.7,-4);
						a21.scale.x+=2.5;
						a21.scale.y+=2.5;
						a21.scale.z+=2.5;
						a21.visible=false;
						PIEaddElement(a21);
						
						a1 = new THREE.Geometry();
						a1.vertices.push(new THREE.Vector3(0, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0.2, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0, 0.2, 0.1));
						a1.faces.push(new THREE.Face3(0, 1, 2));


						a2 = new THREE.MeshBasicMaterial({color: 'yellow', side: THREE.DoubleSide})
						a22= new THREE.Mesh(a1, a2);
						a22.rotation.z=Math.PI/-1.3;
						a22.position.set(-3.1,10.7,-4);
						a22.scale.x+=2.5;
						a22.scale.y+=2.5;
						a22.scale.z+=2.5;
						a22.visible=false;
						PIEaddElement(a22);
						
						a1 = new THREE.Geometry();
						a1.vertices.push(new THREE.Vector3(0, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0.2, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0, 0.2, 0.1));
						a1.faces.push(new THREE.Face3(0, 1, 2));


						a2 = new THREE.MeshBasicMaterial({color: 'yellow', side: THREE.DoubleSide})
						a23= new THREE.Mesh(a1, a2);
						a23.rotation.z=Math.PI/-1.3;
						a23.position.set(-3.9,10.7,-4);
						a23.scale.x+=2.5;
						a23.scale.y+=2.5;
						a23.scale.z+=2.5;
						a23.visible=false;
						PIEaddElement(a23);
						
						a1 = new THREE.Geometry();
						a1.vertices.push(new THREE.Vector3(0, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0.2, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0, 0.2, 0.1));
						a1.faces.push(new THREE.Face3(0, 1, 2));


						a2 = new THREE.MeshBasicMaterial({color: 'yellow', side: THREE.DoubleSide})
						a24= new THREE.Mesh(a1, a2);
						a24.rotation.z=Math.PI/-1.3;
						a24.position.set(-4.6,10.7,-4);
						a24.scale.x+=2.5;
						a24.scale.y+=2.5;
						a24.scale.z+=2.5;
						a24.visible=false;
						PIEaddElement(a24);
						
						a1 = new THREE.Geometry();
						a1.vertices.push(new THREE.Vector3(0, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0.2, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0, 0.2, 0.1));
						a1.faces.push(new THREE.Face3(0, 1, 2));


						a2 = new THREE.MeshBasicMaterial({color: 'yellow', side: THREE.DoubleSide})
						a25= new THREE.Mesh(a1, a2);
						a25.rotation.z=Math.PI/-1.3;
						a25.position.set(-5.2,10.7,-4);
						a25.scale.x+=2.5;
						a25.scale.y+=2.5;
						a25.scale.z+=2.5;
						a25.visible=false;
						PIEaddElement(a25);
						
							a1 = new THREE.Geometry();
						a1.vertices.push(new THREE.Vector3(0, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0.2, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0, 0.2, 0.1));
						a1.faces.push(new THREE.Face3(0, 1, 2));


						a2 = new THREE.MeshBasicMaterial({color: 'yellow', side: THREE.DoubleSide})
						a26= new THREE.Mesh(a1, a2);
						a26.rotation.z=Math.PI/-1.3;
						a26.position.set(-5.9,10.7,-4);
						a26.scale.x+=2.5;
						a26.scale.y+=2.5;
						a26.scale.z+=2.5;
						a26.visible=false;
						PIEaddElement(a26);
						
						a1 = new THREE.Geometry();
						a1.vertices.push(new THREE.Vector3(0, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0.2, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0, 0.2, 0.1));
						a1.faces.push(new THREE.Face3(0, 1, 2));


						a2 = new THREE.MeshBasicMaterial({color: 'yellow', side: THREE.DoubleSide})
						a27= new THREE.Mesh(a1, a2);
						a27.rotation.z=Math.PI/-1.3;
						a27.position.set(-6.6,10.7,-4);
						a27.scale.x+=2.5;
						a27.scale.y+=2.5;
						a27.scale.z+=2.5;
						a27.visible=false;
						PIEaddElement(a27);
						
						a1 = new THREE.Geometry();
						a1.vertices.push(new THREE.Vector3(0, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0.2, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0, 0.2, 0.1));
						a1.faces.push(new THREE.Face3(0, 1, 2));


						a2 = new THREE.MeshBasicMaterial({color: 'yellow', side: THREE.DoubleSide})
						a28= new THREE.Mesh(a1, a2);
						a28.rotation.z=Math.PI/-1.3;
						a28.position.set(-7.2,10.7,-4);
						a28.scale.x+=2.5;
						a28.scale.y+=2.5;
						a28.scale.z+=2.5;
						a28.visible=false;
						PIEaddElement(a28);
						
				//line mf
						var geometry = new THREE.PlaneGeometry( 0.2, 9.5, 100 );
						var material = new THREE.MeshBasicMaterial({color:"yellow",specular:'#1595'});
						 mf1= new THREE.Mesh( geometry, material );
						//gf.rotation.z-=-0.2;
						mf1.position.set(-2.85,8.2,10);
						mf1.visible=false;
						PIEaddElement(mf1);	
						
						var geometry = new THREE.PlaneGeometry( 0.2, 9.5, 100 );
						var material = new THREE.MeshBasicMaterial({color:"yellow",specular:'#1595'});
						 mf2= new THREE.Mesh( geometry, material );
						//gf.rotation.z-=-0.2;
						mf2.position.set(-3.4,8.2,10);
						mf2.visible=false;
						PIEaddElement(mf2);	
							
						var geometry = new THREE.PlaneGeometry( 0.2, 9.5, 100 );
						var material = new THREE.MeshBasicMaterial({color:"yellow",specular:'#1595'});
						 mf3= new THREE.Mesh( geometry, material );
						//gf.rotation.z-=-0.2;
						mf3.position.set(-4,8.2,10);
						mf3.visible=false;
						PIEaddElement(mf3);		
						
						var geometry = new THREE.PlaneGeometry( 0.2, 9.5, 100 );
						var material = new THREE.MeshBasicMaterial({color:"yellow",specular:'#1595'});
						 mf4= new THREE.Mesh( geometry, material );
						//gf.rotation.z-=-0.2;
						mf4.position.set(-4.6,8.2,10);
						mf4.visible=false;
						PIEaddElement(mf4);	
							
						var geometry = new THREE.PlaneGeometry( 0.2, 9.5, 100 );
						var material = new THREE.MeshBasicMaterial({color:"yellow",specular:'#1595'});
						 mf5= new THREE.Mesh( geometry, material );
						//gf.rotation.z-=-0.2;
						mf5.position.set(-5.2,8.2,10);
						mf5.visible=false;
						PIEaddElement(mf5);	
						
						var geometry = new THREE.PlaneGeometry( 0.2, 9.5, 100 );
						var material = new THREE.MeshBasicMaterial({color:"yellow",specular:'#1595'});
						mf6= new THREE.Mesh( geometry, material );
						//gf.rotation.z-=-0.2;
						mf6.position.set(-5.8,8.2,10);
						mf6.visible=false;
						PIEaddElement(mf6);	
						
						var geometry = new THREE.PlaneGeometry( 0.2, 9.5, 100 );
						var material = new THREE.MeshBasicMaterial({color:"yellow",specular:'#1595'});
						 mf7= new THREE.Mesh( geometry, material );
						//gf.rotation.z-=-0.2;
						mf7.position.set(-6.4,8.2,10);
						mf7.visible=false;
						PIEaddElement(mf7);	
						
PIEaddInputSlider("Current(mA)",10,hare3,4,23,step)
PIEaddInputSlider("MagnetPower(H)",10,hare4,4,23,step)
window.addEventListener("click",toggle);
PIEaddInputCommand("ReverseCurrent",rev);
PIEaddInputCommand("ChangePoles",mag);
PIEstartButton.addEventListener("click",harish1);
PIEstopButton.addEventListener("click",yadav1);
 PIEsetAreaOfInterest(-30,30,20,-20);	
}
function resetExperiment() {
var i=0,x=12.8;
		//for loop
					for(i=0;i<8;i++)
					{
								port7=new THREE.PlaneGeometry(0.2,0.7,2);
							//	port7.vertices.shift();
								port7material = new THREE.MeshBasicMaterial( {color: "green"} );
								port7cylinder = new THREE.Mesh( port7, port7material );
								port7cylinder.position.set(x,14.8,32);
								port7cylinder.rotation.z+=0.4;
								x=x-0.3;
								PIEaddElement( port7cylinder);
					}
		
	cO2.material.color.set("green"),cO3.material.color.set("green"),cO4.material.color.set("green"),cO5.material.color.set("green"),cO6.material.color.set("green"),cO7.material.color.set("green"),cO9.material.color.set("green"),cO10.material.color.set("green"),cO11.material.color.set("green");
			ggg1.visible=false;
			ggg2.visible=false;
			ggg3.visible=false;
			g1.visible=false;
			g2.visible=false;
			g3.visible=false;
			g4.visible=false;
			g5.visible=false;
			g6.visible=false;
				g7.visible=false;
								g8.visible=false;
								g9.visible=false;
								g10.visible=false;
			PIErender();
				mf1.visible=false,mf2.visible=false,mf3.visible=false,mf4.visible=false,mf5.visible=false,mf6.visible=false,mf7.visible=false;
	a1.visible=false,a2.visible=false,a3.visible=false,a4.visible=false,a5.visible=false,a6.visible=false,a7.visible=false;
	a8.visible=false,a9.visible=false;
	
	a21.visible=false,a22.visible=false,a23.visible=false,a24.visible=false,a25.visible=false,a26.visible=false,a27.visible=false;
	a28.visible=false;
			if(f>0)
			{
			t55.visible=false;
			t77.visible=false;
			t66.visible=false;
					PIEscene.remove(cO6);
					var ch4= new THREE.QuadraticBezierCurve3(
												new THREE.Vector3(10.5,15,32),
												new THREE.Vector3(10.5,10.8,32),
												new THREE.Vector3(10.5,6.5,32)
												);
			
			
													var ge5 = new THREE.Geometry();
													ge5.vertices = ch4.getPoints( 50 );

												var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

												 cO6= new THREE.Line( ge5, ma5);
			
													PIEaddElement(cO6);	
											
			}
			//t55.visible=false;
			gg19.position.set(3.8,-4,20);
			gg18.position.set(-0.2,-4.6,20);
			
			port8cyder.rotation.z=4.7;
chan=0.07;
}
function updateExperimentElements(t, dt) {
if(t!=0)
{
	if(c1==1)
	{
			f++;
			var i=0,x=12.8;
		//for loop
					for(i=0;i<8;i++)
					{
								port7=new THREE.PlaneGeometry(0.2,0.7,2);
							//	port7.vertices.shift();
								port7material = new THREE.MeshBasicMaterial( {color: "red"} );
								port7cylinder = new THREE.Mesh( port7, port7material );
								port7cylinder.position.set(x,14.8,32);
								port7cylinder.rotation.z+=0.4;
								x=x-0.3;
								PIEaddElement( port7cylinder);
					}
		
	cO2.material.color.set("red"),cO3.material.color.set("red"),cO4.material.color.set("red"),cO5.material.color.set("red"),cO6.material.color.set("red"),cO7.material.color.set("red"),cO9.material.color.set("red"),cO10.material.color.set("red"),cO11.material.color.set("red");
	
	mf1.visible=true,mf2.visible=true,mf3.visible=true,mf4.visible=true,mf5.visible=true,mf6.visible=true,mf7.visible=true;
			gg19.position.set(3.8,-4.6,20);
			gg18.position.set(-0.2,-4,20);
			if((re==1 && cp==1) || (re==0 && cp==0))
			{
				a21.visible=true,a22.visible=true,a23.visible=true,a24.visible=true,a25.visible=true,a26.visible=true,a27.visible=true;
					//a28.visible=true;
					
				if(port8cyder.rotation.z>2 && port8cyder.rotation.z<5.1)
				{
					f++;
					port8cyder.rotation.z+=xc;
					//alert(port8cyder.position.z);
					PIEscene.remove(cO6);
					var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(10.5,15,32),
										new THREE.Vector3(10.5,10.8,32),
										new THREE.Vector3(10.5,km,32)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'red',linewidth:4} );

										 cO6= new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO6);	
									km=km+chan;
					//alert(port8cyder.rotation.z);
				}
				/*if(cO6.scale.y>0.63)
				{
					//alert("harish");
					cO6.scale.y-=yc;
					cO6.position.y+=zc;
				}*/
				else
				{
						ggg1.visible=true;
						ggg2.visible=true;
						t55.visible=true;
						if(dfs==0)
						{
								g1.visible=true;
								g4.visible=true;
								g5.visible=true;
								t77.visible=true;
						}
						else if(dfs==1)
						{
								g1.visible=true;
								g2.visible=true;
								g3.visible=true;
								t77.visible=true;
						}
				}
			}
			else if((re==1 && cp==0) || (re==0 && cp==1))
			{
					
					a1.visible=true,a2.visible=true,a3.visible=true,a4.visible=true,a5.visible=true,a6.visible=true,a7.visible=true;
				a8.visible=true,a9.visible=true;
					//a28.visible=true;
					if(port8cyder.rotation.z>4.28 && port8cyder.rotation.z<19.94)
					{
						port8cyder.rotation.z-=xc;
						//alert(port8cyder.rotation.z);
						PIEscene.remove(cO6);
					var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(10.5,15,32),
										new THREE.Vector3(10.5,10.8,32),
										new THREE.Vector3(10.5,km,32)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'red',linewidth:4} );

										 cO6= new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO6);	
									km=km-chan;
					}
					else
					{
							ggg2.visible=true;
							ggg3.visible=true;
							t55.visible=true;
							if(dfs==0)
							{
								g6.visible=true;
								g9.visible=true;
								g10.visible=true;
								t66.visible=true;
							}
						else if(dfs==1)
						{
								g6.visible=true;
								g7.visible=true;
								g8.visible=true;
								t66.visible=true;
						}
					}
			}
	}
	else if(c2==1)
	{
			km=6.5;
			var i=0,x=12.8;
		//for loop
					for(i=0;i<8;i++)
					{
								port7=new THREE.PlaneGeometry(0.2,0.7,2);
							//	port7.vertices.shift();
								port7material = new THREE.MeshBasicMaterial( {color: "green"} );
								port7cylinder = new THREE.Mesh( port7, port7material );
								port7cylinder.position.set(x,14.8,32);
								port7cylinder.rotation.z+=0.4;
								x=x-0.3;
								PIEaddElement( port7cylinder);
					}
		
	cO2.material.color.set("green"),cO3.material.color.set("green"),cO4.material.color.set("green"),cO5.material.color.set("green"),cO6.material.color.set("green"),cO7.material.color.set("green"),cO9.material.color.set("green"),cO10.material.color.set("green"),cO11.material.color.set("green");
			ggg1.visible=false;
			ggg2.visible=false;
			ggg3.visible=false;
			g1.visible=false;
			g2.visible=false;
			g3.visible=false;
			g4.visible=false;
			g5.visible=false;
			g6.visible=false;
				g7.visible=false;
								g8.visible=false;
								g9.visible=false;
								g10.visible=false;
			PIErender();
				mf1.visible=false,mf2.visible=false,mf3.visible=false,mf4.visible=false,mf5.visible=false,mf6.visible=false,mf7.visible=false;
	a1.visible=false,a2.visible=false,a3.visible=false,a4.visible=false,a5.visible=false,a6.visible=false,a7.visible=false;
	a8.visible=false,a9.visible=false;
	
	a21.visible=false,a22.visible=false,a23.visible=false,a24.visible=false,a25.visible=false,a26.visible=false,a27.visible=false;
	a28.visible=false;
			if(f>0)
			{
			t55.visible=false;
			t77.visible=false;
			t66.visible=false;
					PIEscene.remove(cO6);
					var ch4= new THREE.QuadraticBezierCurve3(
												new THREE.Vector3(10.5,15,32),
												new THREE.Vector3(10.5,10.8,32),
												new THREE.Vector3(10.5,6.5,32)
												);
			
			
													var ge5 = new THREE.Geometry();
													ge5.vertices = ch4.getPoints( 50 );

												var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

												 cO6= new THREE.Line( ge5, ma5);
			
													PIEaddElement(cO6);	
											
			}
			//t55.visible=false;
			gg19.position.set(3.8,-4,20);
			gg18.position.set(-0.2,-4.6,20);
			
			port8cyder.rotation.z=4.7;
			PIEstopAnimation();
	}
}
}
function rev()
{
f++;
		if(car%2==0)
		{
			re=1,dfs=1;
			vu1=1,vu=0;
			PIEscene.remove(cO5);
			var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-28.1,4.4,19),
										new THREE.Vector3(-30.9,21.9,19),
										new THREE.Vector3(2.9,20.9,19)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

									 cO5 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO5);	
				PIEscene.remove(cO9);
			var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-33.3,4.4,12),
										new THREE.Vector3(-24, 10.9, 23),
										new THREE.Vector3(-25,-7,2)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

										 cO9 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO9);	
		}
		else
		{
			re=0,dfs=0;
			PIEscene.remove(cO5);
			var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-31.1,4.4,19),
										new THREE.Vector3(-30.9,21.9,19),
										new THREE.Vector3(2.9,20.9,19)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

									 cO5 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO5);	
			PIEscene.remove(cO9);
					var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-30,4.4,12),
										new THREE.Vector3(-24, 10.9, 23),
										new THREE.Vector3(-25,-7,2)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

										 cO9 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO9);	
			vu1=0,vu=1;
		}
	car++;
		PIErender();
}
function mag()
{
f++;
	if(cov%2==0)
	{
		cp=1;
		vu=1,vu1=0;
		t11.visible=false;
		t22.visible=false;
		t33.visible=true;
		t44.visible=true;
		PIErender();
	}
	else
	{
			cp=0;
			vu=0,vu1=1;
			t11.visible=true;
			t22.visible=true;
			t33.visible=false;
			t44.visible=false;
			PIErender();
	}
	cov++;
	PIErender();
}
function hare3(newValue)
{
	xc=newValue/500;
	chan=newValue/82;
}
function hare4(newValue)
{
	xc=newValue/500;
	chan=newValue/82;
}












