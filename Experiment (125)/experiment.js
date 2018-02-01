var p,cnt=0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p291,p30,p31,p32;
var p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54,p55,p56,p57,p58,p59,p60;
var p61,p62,p63,p64,p65,p66,p67,p68,p69,p70,p71,p72,p73,p74,p75,p76,p78,p79,c80=0,c81=0,c82=0,c83=0,c84=0,c85=0,c86=0,c87=0,c88=0,c89=0,c90=0;
var c1=0,c2=0,c3=0,sp1,sp2,f=0,c4=1,c5=1,c6=1,c7=1,x2,y2,c14=0,sr3,sr4,grgmesh8,grgmesh7,grgmesh6,grgmesh5,grgmesh4,grgmesh3;
grgmesh14,grgmesh13,grgmesh12,grgmesh11,grgmesh10,grgmesh9,p291,sp101;
var grgmesh2,grgmesh1;
var gg,gg1,gg2,gg3,gg4,gg5,gg6,gg7,gg8,gg9,gg10,gg11,gg12,gg13,gg14,gg15,gg16,gg17,gg18,gg19,gg20,ytel=11;
var ggg,ggg1,ggg2,ggg3,ggg4,gggg;
var nisha=0;
var x1,y1,text4;
var port6cylinder,port7cylinder;
var dean=0,hemiLight,t4;
var cO1,cO2,cO3,cO4,cO5,cO6,cO7,cO8,cO9,cO10,cO11,cO12,cO13,cO14,cO15,cO16,cO17,cO18,cO19,cO20,cO21,cO22,cO23,cO24,cO25,cO26,cO27;
var helpContent = "";
var cO41,cO111;
var infoContent = "";
function initialiseHelp() {
    helpContent = helpContent + "<h2> Basic electroplating with carbon rod</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows how Electricity used for elctroplating.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The start stage</h3>";
    helpContent = helpContent + "<p>The initial state is start stage. In this everything has already set up. <br><br>you can enter the animation stage by clicking the start button.</p>";
    
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In this animation first we turn on the switch so that the current will pass through both the carbon and copper rods then copper then dissipted at the copper rod </p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play button on the top line.</p>";
    PIEupdateHelp(helpContent);
}
function onMouseMove( event ) {
//alert("harish");
 PIEscene.getObjectByName("harish").document.body.style.cursor = 'pointer';
// alert(p);
        window.addEventListener("click",onMouseMove);
};
function initialiseInfo() {
    infoContent = infoContent + "<h2>Basic electroplating with carbon rod</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows how Electroplating works.</p>";
    infoContent = infoContent + "<h3>Volatge</h3>";
    infoContent = infoContent + "<p>an electromotive force or potential difference expressed in volts..</p>";
    infoContent = infoContent + "<h3>How does it work ?</h3>";
    infoContent = infoContent + "<p>Electroplating is a process that uses electric current to reduce dissolved metal cations so that they form a thin coherent metal coating on an electrode.</p>";
      infoContent = infoContent + "<ul>";
    infoContent = infoContent + "<li>Adavantages   : </li><li>1)Corrosion resistance: a corrosion-prone substance such as iron can be coated with a layer of non-corrosive material, thereby protecting the original material.. </li><li>2)Decorative items: shine and luster can be imparted to otherwise dull surfaces. This makes for great decorative items.</li><li>3)Cheaper ornaments: instead of making ornaments out of gold or silver, one can make them using cheaper metals and electroplate the ornaments with gold. This reduces the cost of ornaments greatly.</li>";
    infoContent = infoContent + "<br>";
    infoContent = infoContent + "<li>Disadvantages  </li> : <li>1)Non-uniform plating: electroplating may or may not be uniform and this may result in a substandard appearance of the plated material.</li><li>2)Cost: the process is costly and time consuming.</li><li>3)Pollution potential: the electroplating solution, after use, needs to be disposed off safely and is a cause of environmental concern.</li>";
    
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
    		if(nji=='y'  || nji=='c')
    		{
	    		
				    			PIEstartAnimation();
				    			c1=1,c2=0;
		}
		 else if(nji=='h' || nji=='k')
		    {
		    				PIEstartAnimation();
		    				c1=0,c2=1;
		    }	
}
}
function loadExperimentElements()
{
 
    PIEsetExperimentTitle("Basic electroplating with carbon rod");
    PIEsetDeveloperName("Harish Kumar Dubakula");
    PIEhideControlElement();
     initialiseHelp();
    initialiseInfo();
     t4=document.createElement('button');
t4.style.position = 'absolute';
t4.style.fontColor="black";
t4.style.width = 10+"px";
t4.style.height = 8+"px";
 t4.style.top = 497 + 'px';
t4.style.left = 261+ 'px'; 
t4.style.cursor="pointer";
t4.style.backgroundColor="red";
t4.style["border"]="none";
//document.body.appendChild(t4);

  t5=document.createElement('button');
t5.style.position = 'absolute';
t5.style.fontColor="black";
t5.style.width = 28+"px";
t5.style.height = 19.4+"px";
 t5.style.top = 489 + 'px';
t5.style.left = 320+ 'px'; 
t5.style.cursor="pointer";
t5.style.borderRadius="5px";
t5.style.backgroundColor="#32CD32";
t5.style["border"]="none";
//document.body.appendChild(t5);
  // PIEaddElement(new THREE.AxisHelper(50));
   var but2=document.createElement('h1');
   
   var text2 = document.createElement('h1');
text2.style.position = 'absolute';
text2.innerHTML = "Copper rod";
text2.style.zIndex = 10;    // if you still don't see the label, try uncommenting this
text2.style.width = 500+"px";

text2.style.top = 180 + 'px';
text2.style.left = 670 + 'px';
document.body.appendChild(text2);
   
     var text3 = document.createElement('h1');
text3.style.position = 'absolute';
text3.innerHTML = "Carbon rod";
text3.style.zIndex = 10;    // if you still don't see the label, try uncommenting this
text3.style.width = 500+"px";

text3.style.top = 180 + 'px';
text3.style.left = 1070 + 'px';
document.body.appendChild(text3);
   
      text4 = document.createElement('h1');
text4.style.position = 'absolute';
text4.innerHTML = "Oxygen";
text4.style.zIndex = 10;    // if you still don't see the label, try uncommenting this
text4.style.width = 500+"px";

text4.style.top = 700 + 'px';
text4.style.left = 1200 + 'px';
document.body.appendChild(text4);
   
   
   
   	//big plane 	
   		var g = new THREE.BoxGeometry( 83, 2, 30 );
	var m = new THREE.MeshFaceMaterial( [new THREE.MeshBasicMaterial({color: 0xf48072}),
					new THREE.MeshBasicMaterial({color: "red"}),new THREE.MeshBasicMaterial({color: "#172035"}),new THREE.MeshBasicMaterial({color: "0xf48072"}),new THREE.MeshBasicMaterial({color: "#8FBC8F"}),new THREE.MeshBasicMaterial({color: "#172035",transparent:false})] );
 	p = new THREE.Mesh( g, m );
	p.position.set(-5.2,-8,1);
	p.rotation.x+=0.1;
	//p.rotation.y-=0.1;
	PIEaddElement( p );
	
//voltage
					b1 = new THREE.BoxGeometry( 4.7, 7.8	, 5.2 );
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
v1.position.set(-44,-3.6,2);
PIEscene.add( v1 );

				b1 = new THREE.BoxGeometry( 3.2, 4.3, 5.7 );
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
v1.rotation.y-=-2.6;
//v1.rotation.z-=0.1;
v1.position.set(-44,2.3,2.1);
PIEscene.add( v1 );


//voltage

//switch
			var g = new THREE.BoxGeometry( 11, 2, 8 );
	var m = new THREE.MeshFaceMaterial( [new THREE.MeshBasicMaterial({color: "#008B8B"}),
					new THREE.MeshBasicMaterial({color: "green"}),new THREE.MeshBasicMaterial({color: "#008B8B"}),new THREE.MeshBasicMaterial({color: "gold"}),new THREE.MeshBasicMaterial({color: "#7B68EE"}),new THREE.MeshBasicMaterial({color: "brown",transparent:false})] );
 	p = new THREE.Mesh( g, m );
	p.position.set(-29,-7,13.8);
	//p.rotation.x+=0.01
	p.rotation.y+=0.2;
	p.name="mou";
//	p.rotation.z+=0.03;
	PIEaddElement( p );
//switch

//bulb
			var g = new THREE.BoxGeometry( 9, 2, 15 );
	var m = new THREE.MeshFaceMaterial( [new THREE.MeshBasicMaterial({color: "#008B8B"}),
					new THREE.MeshBasicMaterial({color: "green"}),new THREE.MeshBasicMaterial({color: "#008B8B"}),new THREE.MeshBasicMaterial({color: "gold"}),new THREE.MeshBasicMaterial({color: "#7B68EE"}),new THREE.MeshBasicMaterial({color: "#5F9EA0",transparent:false})] );
 	p = new THREE.Mesh( g, m );
	p.position.set(-12.4,-4.3,20);
	//p.rotation.x+=0.1;
	//p.rotation.y+=0.2;
	PIEaddElement( p );
//bulb

var geometry = new THREE.PlaneGeometry( 300, 550, 320 );
			var material = new THREE.MeshBasicMaterial({color:0xf48072,specular:'#1595'});
			var p = new THREE.Mesh( geometry, material );
			p.rotation.z=Math.PI/2;
			p.position.set(5.2,-2.5,-2);
			PIEaddElement( p );
			
			
	
	//beaker wall1
	
		var g1 = new THREE.PlaneGeometry( 42, 2.5, 30 );
	var m1 = new THREE.MeshBasicMaterial( {color: "#556B2F", side: THREE.DoubleSide,depthWrite:true} );
 	p1= new THREE.Mesh( g1, m1);
	p1.position.set(14.4,-6,2);
	PIEaddElement(p1);
	
	//beaker wall2
	
		var g2= new THREE.PlaneGeometry( 1.5, 15, 30 );
	var m2 = new THREE.MeshBasicMaterial( {color: "#556B2F", side: THREE.DoubleSide,transparent:true} );
 	p2= new THREE.Mesh( g2, m2);
	p2.position.set(-5.9,1.8,2);
	PIEaddElement(p2);
	
		//beaker wall3
		
		var g3= new THREE.PlaneGeometry( 1.5, 15, 30 );
	var m3 = new THREE.MeshBasicMaterial( {color: "#556B2F", side: THREE.DoubleSide} );
 	p3= new THREE.Mesh( g3, m3);
	p3.position.set(34.7,0.8,2);
	PIEaddElement(p3);
	
		//beaker wall4
		
		var g4= new THREE.PlaneGeometry( 3, 1, 30 );
	var m4 = new THREE.MeshBasicMaterial( {color: "#556B2F", side: THREE.DoubleSide} );
 	p4= new THREE.Mesh( g4, m4);
	p4.position.set(-4.8,8.8,20);
	PIEaddElement(p4);
	
		//beaker wall5
		
		var g14= new THREE.PlaneGeometry( 3, 1, 30 );
	var m14 = new THREE.MeshBasicMaterial( {color: "#556B2F", side: THREE.DoubleSide} );
 	p11= new THREE.Mesh( g14, m14);
	p11.position.set(26,8.1,20);
	PIEaddElement(p11);
	
    //solution
     
 	var geometry = new THREE.PlaneGeometry( 31.95, 9.3, 2 );
	var material = new THREE.MeshBasicMaterial( {color: "#0000FF", side: THREE.DoubleSide,transparent: true,depthWrite: false,opacity:0.5} );
	var plane = new THREE.Mesh( geometry, material);
	plane.position.set(10.8,1.7,19);
PIEaddElement( plane );

	// copper rod cathode
	
		var g5 = new THREE.CylinderGeometry( 1.5, 1.5, 13,0 );
		var m5 = new THREE.MeshPhysicalMaterial( {color:"#FF6347", side: THREE.DoubleSide,transparent: true,depthWrite: false,wireframe:false});
		var p5 = new THREE.Mesh( g5, m5 );
		p5.position.set(-1.4,5.3,2);
		p5.rotation.y+=5;
		PIEaddElement( p5 );
		
	// copper rod cathode1
	
		var g5 = new THREE.CylinderGeometry( 0.5, 0.5, 1,0 );
		var m5 = new THREE.MeshPhysicalMaterial( {color:"grey", side: THREE.DoubleSide,transparent: true,opacity:1.3,depthWrite: false,wireframe:false});
		var p5 = new THREE.Mesh( g5, m5 );
		p5.position.set(-1.4,12.3,2);
		p5.rotation.y+=5;
		PIEaddElement( p5 );
		
	// copper rod cathode1
	
		var g5 = new THREE.CylinderGeometry( 0.75, 0.75, 0.5,0 );
		var m5 = new THREE.MeshPhysicalMaterial( {color:"grey", side: THREE.DoubleSide,transparent: true,opacity:1.3,depthWrite: false,wireframe:false});
		var p5 = new THREE.Mesh( g5, m5 );
		p5.position.set(-1.4,13.1,2);
		p5.rotation.y+=5;
		PIEaddElement( p5 );
		
	// copper rod anode
		
		var g6 = new THREE.CylinderGeometry( 1.5, 1.5, 13,0 );
		var m6 = new THREE.MeshPhysicalMaterial( {color:"#2D383A", side: THREE.DoubleSide,transparent: true,opacity:0.8,depthWrite: false} );
		var p6 = new THREE.Mesh( g6, m6 );
		p6.position.set(30.3,5.3,2);
		PIEaddElement( p6 );
	// copper rod anode1
	
		var g5 = new THREE.CylinderGeometry( 0.4, 0.4, 1,0 );
		var m5 = new THREE.MeshPhysicalMaterial( {color:"black", side: THREE.DoubleSide,transparent: true,opacity:1.3,depthWrite: false,wireframe:false});
		var p5 = new THREE.Mesh( g5, m5 );
		p5.position.set(30.4,12.3,2);
		p5.rotation.y+=5;
		PIEaddElement( p5 );
		
	// copper rod anode1
	
		var g5 = new THREE.CylinderGeometry( 0.75, 0.75, 0.5,0 );
		var m5 = new THREE.MeshPhysicalMaterial( {color:"black", side: THREE.DoubleSide,transparent: true,opacity:1.3,depthWrite: false,wireframe:false});
		var p5 = new THREE.Mesh( g5, m5 );
		p5.position.set(30.4,13.1,2);
		p5.rotation.y+=5;
		PIEaddElement( p5 );	
		
//signs
			var hg=new THREE.Group();
			var g39= new THREE.PlaneGeometry( 1.2, 0.3, 30 );
								var m39= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide,transparent:true,opacity:0.8,DepthWrite:false} );
					 			p39= new THREE.Mesh( g39, m39);
								p39.position.set(15.3,-5,2);
								//PIEaddElement(p39);
								hg.add(p39);
							//+ve 
							var g40= new THREE.PlaneGeometry( 0.25, 1.2, 30 );
								var m40= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide,transparent:true,opacity:0.8,DepthWrite:false});
					 			p40= new THREE.Mesh( g40, m40);
								p40.position.set(17.5,-5,2);
								hg.add(p40);
							//+ve sign
								var g41= new THREE.PlaneGeometry( 1.2, 0.3, 30 );
								var m41= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide,transparent:true,opacity:0.8,DepthWrite:false} );
					 			p41= new THREE.Mesh( g41, m41);
								p41.position.set(-34.7,3,19);
								PIEaddElement(p41);
								PIEaddElement(hg);
								hg.position.set(-51.4,8.1,19);
//signs	
	//terminals		
				port8= new THREE.CylinderGeometry( 0.4, 0.8, 0.6, 100);
								port8material = new THREE.MeshBasicMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-34.7,4.9,20);
								//port8cylinder.rotation.x += 13.5;
								PIEaddElement( port8cylinder);
				port8= new THREE.CylinderGeometry( 0.4, 0.8, 0.6, 100);
								port8material = new THREE.MeshBasicMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-37.7,4.9,20);
								//port8cylinder.rotation.x += 13.5;
								PIEaddElement( port8cylinder);
	//terminals
			
			
			
		
		
		//bulb cylinder2
						port3 = new THREE.CylinderGeometry( 1.2, 2.5, 1.3, 30 );
								port3material = new THREE.MeshPhysicalMaterial( {color: "black"} );
								port3cylinder = new THREE.Mesh( port3, port3material );
								port3cylinder.position.set(-11.7,-1.2,27);
								//port3cylinder.rotation.x += 0.7;
								//port3cylinder.rotation.y +=Math.PI/(-12.1);
								PIEaddElement( port3cylinder);
		//bulb cylinder2
		
		//bulb cylinder3
								port4 = new THREE.CylinderGeometry( 2.5, 2.5, 1, 30 );
								port4material = new THREE.MeshPhysicalMaterial( {color: "black",transparent:true} );
								port4cylinder = new THREE.Mesh( port4, port4material );
								port4cylinder.position.set(-11.7,-2.4,27);
								//port4cylinder.rotation.x += 0.5;
								PIEaddElement( port4cylinder);
		//bulb cylinder3
		
		//bulb cylinder4
								port5= new THREE.CylinderGeometry( 1.2, 1.2, 1.4, 30 );
								port5material = new THREE.MeshPhysicalMaterial( {color: "black",transparent:true} );
								port5cylinder = new THREE.Mesh( port5, port5material );
								port5cylinder.position.set(-11.7,0.2,27);
								//port4cylinder.rotation.x += 0.5;
								PIEaddElement( port5cylinder);
		//bulb cylinder4
		
		//circle bilb
							port6=new THREE.CircleGeometry(2.5,30);
							port6.vertices.shift();
							port6material = new THREE.LineBasicMaterial( {color: "iron",transparent:true} );
								port6cylinder = new THREE.Line( port6, port6material );
								port6cylinder.position.set(-14.2,1.8,2);
								PIEaddElement( port6cylinder);
		//circle bilb
		
		//circle bilb
							var port7=new THREE.PlaneGeometry(0.1,2.5,20);
							var port7material = new THREE.MeshBasicMaterial( {color: "iron"} );
								port7cylinder = new THREE.Mesh( port7, port7material );
								port7cylinder.position.set(-14.2,1.6,12);
								PIEaddElement( port7cylinder);
		//circle bilb
		
		//circle bilb
							port8=new THREE.PlaneGeometry(0.1,2.5,20);
							port8material = new THREE.MeshBasicMaterial( {color: "iron"} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-12,1.6,12);
								PIEaddElement( port8cylinder);
		//circle bilb
		var i=0,x=-14.05;
		//for loop
					for(i=0;i<4;i++)
					{
								port7=new THREE.SphereGeometry(0.3,30);
								port7.vertices.shift();
								port7material = new THREE.LineBasicMaterial( {color: "iron"} );
								port7cylinder = new THREE.Line( port7, port7material );
								port7cylinder.position.set(x,2.6,12);
								x=x+0.6;
								PIEaddElement( port7cylinder);
					}
		//for loop
		//bulb vertices
					port8= new THREE.CylinderGeometry( 0.5, 0.5, 1.6, 100);
								port8material = new THREE.MeshBasicMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-16,-2.2,23);
								//port8cylinder.rotation.x += 13.5;
								PIEaddElement( port8cylinder);
		//bulb vertices
		//bulb vertices
					port8= new THREE.CylinderGeometry( 0.5, 0.5, 1.6, 100);
								port8material = new THREE.MeshBasicMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-8.2,-2.2,23);
								//port8cylinder.rotation.x += 13.5;
								PIEaddElement( port8cylinder);
		//bulb vertices
	
			//switch vertices
					port8= new THREE.CylinderGeometry( 0.5, 0.5, 1.2, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-30.8,-4.2,21);
								//port8cylinder.rotation.x += 13.5;
								PIEaddElement( port8cylinder);
		//switch vertices
		//switchvertices
					port8= new THREE.CylinderGeometry( 0.5, 0.5, 1.2, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-22.1,-4.2,21);
								//port8cylinder.rotation.x += 13.5;
								PIEaddElement( port8cylinder);
		//switchvertices
	
		//curve for bulb2
								var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-34.7,5.1,20 ),
										new THREE.Vector3(-38.7, 9.3, 2),
										new THREE.Vector3(-37.4, -1.5, 2 )
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 100 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

											 cO27 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO27);	
											
								var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-37.4, -1.5, 2  ),
										new THREE.Vector3(-37.4, -5.9, 2),
										new THREE.Vector3(-24.4, -3.3, 2 )
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

											 cO1= new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO1);	
								var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-24.4, -3.3, 2  ),
										new THREE.Vector3(-20.4, -2.3, 2),
										new THREE.Vector3(-19.4, -3.3, 2 )
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

											 cO2 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO2);	
									var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-37.7,5.1,20 ),
										new THREE.Vector3(-45.7, 7.3, 20),
										new THREE.Vector3(-41.5, -7.3, 20 )
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

										 cO3 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO3);	
											
									var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-41.55, -7.25, 20 ),
										new THREE.Vector3(-41, -13.3, 10),
										new THREE.Vector3(-30.5,-3.6,25)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4,side: THREE.BackSide} );

										cO4= new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO4);	
											
										var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-30.5,-3.6,25),
										new THREE.Vector3(-30,-2.3,25),
										new THREE.Vector3(-29.3,-3.1,25)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 100 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4,side: THREE.BackSide} );

										cO41= new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO41);	
											
										var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-21.1,-3.2,25 ),
										new THREE.Vector3(-23.2, -2.3, 10),
										new THREE.Vector3(-19.7,-6.5,23)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

									 cO5 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO5);	
											
											var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-19.7,-6.5,23),
										new THREE.Vector3(-18.7, -9.2, 23),
										new THREE.Vector3(-10.7, -8.2, 23)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

										 cO6= new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO6);	
											
											
									var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-10.7, -8.2, 23),
										new THREE.Vector3(-6.5, -7.1, 23),
										new THREE.Vector3(-6.8,-5,23)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

										 cO7 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO7);	
											
									var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-6.8,-5,23),
										new THREE.Vector3(-9.9, 15.7, 23),
										new THREE.Vector3(-2.6,10.8,23)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

										 cO8 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO8);	
											
												var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-8.2,-1.4,23),
										new THREE.Vector3(-6, 0, 23),
										new THREE.Vector3(-4,-6,23)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

										 cO9 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO9);	
											
											var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-4,-6,23),
										new THREE.Vector3(1, -13, 23),
										new THREE.Vector3(23,-8.2,23)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

											 cO10= new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO10);	
												var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(30.5,12.1,2),
										new THREE.Vector3(31, 14, 23),
										new THREE.Vector3(28,-4.2,23)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

											 cO11 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO11);	
											
											var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(28,-4.2,23),
										new THREE.Vector3(27.5,-6.6,23),
										new THREE.Vector3(23,-8.2,23)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

											 cO111= new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO111);	
											
	//curve for bulb2	
			

//text for 
			var loader = new THREE.FontLoader();
			//alert("harish");
				loader.load( 'helvetiker_regular.typeface.json', function ( font ) {
			//alert("harish");
			  	var bg= new THREE.TextGeometry( "Copper rod ", { font: font, size: 1.4, height: 1, curveSegments: 7});

			  	var bg1= new THREE.MeshBasicMaterial( { color: "black"});

			  	var ramesh = new THREE.Mesh(bg,bg1);
				ramesh.position.set(-4.8,14.5, 0) ;
			  	//PIEaddElement(ramesh);
			  	
			  		var bg= new THREE.TextGeometry( "Carbon rod ", { font: font, size: 1.4, height: 1, curveSegments: 7});

			  	var bg1= new THREE.MeshBasicMaterial( { color: "black"});

			  	var ramesh = new THREE.Mesh(bg,bg1);
				ramesh.position.set(23.8,14.5, 0) ;
				ramesh.rotation.y-=0.32;
				//ramesh.rotation.z=0.05;
			  	//PIEaddElement(ramesh);
			  	
			  	
			  	var t3= new THREE.TextGeometry( "On", { font: font, size: 1, height: 1, curveSegments: 7,side: THREE.FrontSide,transparent: true,depthWrite: false,depthTest: false,bevelThickness:4, bevelSize:2, material: 0});

			  	var t3M = new THREE.MeshBasicMaterial( { color: "black" });

			  	grgmesh2 = new THREE.Mesh( t3, t3M );
				grgmesh2.position.set(-26.3,-6, 30) ;
				grgmesh2.rotation.x-=0.2;
			 //	PIEaddElement( grgmesh2);
			  	
			  		var t9= new THREE.TextGeometry( "O f f", { font: font, size: 1, height: 1, curveSegments: 7,side: THREE.FrontSide,transparent: true,depthWrite: false,depthTest: false,bevelThickness:4, bevelSize:2, material: 0});

			  	var t9M = new THREE.MeshBasicMaterial( { color: "black" });

			  	grgmesh9 = new THREE.Mesh( t9, t9M );
				grgmesh9.position.set(-26.3,-6, 30) ;
			//  PIEaddElement( grgmesh9);
			  grgmesh9.rotation.y+=0.2;
			  	grgmesh2.visible=false;
			  	grgmesh9.visible=false;
			  
			  	var t9= new THREE.TextGeometry( "So4", { font: font, size: 1.4, height: 1, curveSegments: 7});

			  	var t9M = new THREE.MeshBasicMaterial( { color: "black" });

			  	grgmesh13 = new THREE.Mesh( t9, t9M );
				grgmesh13.position.set(16,-4, 0) ;
			  	PIEaddElement( grgmesh13);
			  	
			  	var t10= new THREE.TextGeometry( "-2e", { font: font, size: 1.4, height: 1, curveSegments: 7});

			  	var t10M = new THREE.MeshBasicMaterial( { color: "black" });

			  	grgmesh10 = new THREE.Mesh( t10, t10M );
				grgmesh10.position.set(16.7,-2.7, 0) ;
			  	PIEaddElement( grgmesh10);
			  	
			  	var t11= new THREE.TextGeometry( "Bulb", { font: font, size: 1.2, height: 1, curveSegments: 7});

			  	var t11M = new THREE.MeshBasicMaterial( { color: "black" });

			  	grgmesh11 = new THREE.Mesh( t11, t11M );
				grgmesh11.position.set(-14,-5, 28) ;
				grgmesh11.rotation.z+=0.01;
			  //	PIEaddElement( grgmesh11);
			  	
			  	var t12= new THREE.TextGeometry( "Voltage", { font: font, size: 1.4, height: 1, curveSegments: 2});

			  	var t12M = new THREE.MeshBasicMaterial( { color: "black" });

			  	grgmesh12= new THREE.Mesh( t12, t12M );
				grgmesh12.position.set(-51,6.8, 0) ;
				grgmesh12.rotation.y=0.4;
				grgmesh12.rotation.z=0.05;
			 	//PIEaddElement( grgmesh12);
			  	
			  	var t13= new THREE.TextGeometry( "Cu", { font: font, size: 1.4, height: 1, curveSegments: 7});

			  	var t13M = new THREE.MeshBasicMaterial( { color: "black" });

			  	p71 = new THREE.Mesh( t13, t13M );
				p71.position.set(9,-4, 0) ;
			  	PIEaddElement( p71);
			  	
			  	var t14= new THREE.TextGeometry( "+2e", { font: font, size: 1.4, height: 1, curveSegments: 7});

			  	var t14M = new THREE.MeshBasicMaterial( { color: "black" });

			  	p72= new THREE.Mesh( t14, t14M );
				p72.position.set(9.4,-2.8, 0) ;
			  	PIEaddElement( p72);
			  	
			  	var t15= new THREE.TextGeometry( "Oxygen", { font: font, size: 1.4, height: 1, curveSegments: 7});

			  	var t15M = new THREE.MeshBasicMaterial( { color: "black" });

			  	p73 = new THREE.Mesh( t15, t15M );
				p73.position.set(36.5,4.8, 0) ;
				p73.rotation.y-=0.4;
			//  PIEaddElement( p73);
			  	
			  	var t16= new THREE.TextGeometry( "Copper   sulphate   solution  +   d i l u t e    s u l p h u r i c    a c i d", { font: font, size: 0.8, height: 1, curveSegments: 7});

			  	var t16M = new THREE.MeshBasicMaterial( { color: "black" });

			  	p74= new THREE.Mesh( t16, t16M );
				p74.position.set(-4.5,-4.8, 28) ;
				//p74.position.z-=1.9;
				p74.position.x-=2;
				p74.position.y+=1.1;
			//  PIEaddElement( p74);
			  	});
//text end			
			//arrows
							var q2w3= new THREE.PlaneGeometry(3, 0.3, 1 );
								var q2w13= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide,transparent:true,opacity:0.8,DepthWrite:false} );
								 gg4= new THREE.Mesh( q2w3, q2w13);
								gg4.position.set(20,-3.8,2);
								PIEaddElement( gg4);
						var q2w12= new THREE.SphereGeometry(0.8, 0.1, 1 );
								var q2w112= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide} );
								 gg5= new THREE.Mesh( q2w12, q2w112);
								gg5.position.set(21.4,-3.8,2);
								PIEaddElement( gg5);	
			//arrows
			//arrows1
							var q2w3= new THREE.PlaneGeometry(3, 0.3, 1 );
								var q2w13= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide,transparent:true,opacity:0.8,DepthWrite:false} );
								gg7= new THREE.Mesh( q2w3, q2w13);
								gg7.position.set(8,-3.8,2);
								PIEaddElement( gg7);
						var q2w12= new THREE.SphereGeometry(0.8, 0.1, 1 );
								var q2w112= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide} );
								 gg8= new THREE.Mesh( q2w12, q2w112);
								gg8.position.set(6.4,-3.8,2);
								PIEaddElement( gg8);	
						var q2w12= new THREE.SphereGeometry(0.8, 0.1, 1 );
								var q2w112= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide} );
								 ggg1= new THREE.Mesh( q2w12, q2w112);
								ggg1.position.set(33.4,3.8,2);
								PIEaddElement( ggg1);	
						var q2w12= new THREE.PlaneGeometry(3.8, 0.3, 1 );
								var q2w112= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide} );
								 ggg2= new THREE.Mesh( q2w12, q2w112);
								ggg2.position.set(35.4,3.8,2);
								PIEaddElement( ggg2);
								ggg1.visible=false;
								ggg2.visible=false;	
								gg8.visible=false;
								gg7.visible=false;
								gg4.visible=false;
								gg5.visible=false;
			//arrows1
			
			//switch
						//main frame
						var	 texture = new THREE.ImageUtils.loadTexture("index.jpeg") ;
								var	port91= new THREE.CylinderGeometry( 0.8, 0.8, 1, 100);
								var port91material = new THREE.MeshLambertMaterial( {color: "green",opacity:40} );
								gg19= new THREE.Mesh( port91, port91material );
								gg19.position.set(-24.7,-4,20);
								gg19.name="yadav";
								//port8cylinder.rotation.x += 13.5;
								PIEaddElement(gg19);
								gg20=new THREE.Group();
								//gg20.add(gg19);
						//main frame1
								var	port10= new THREE.CylinderGeometry( 0.8, 0.8, 1, 100);
								var port10material = new THREE.MeshBasicMaterial( {color: "red",transparent:false,side:THREE.BaclSide} );
								gg18= new THREE.Mesh( port10, port10material );
								gg18.position.set(-28.7,-4.6,20);
								gg18.name="harish";
								//port8cylinder.rotation.x += 13.5;
								PIEaddElement(gg18);
								gg20.add(gg18);
								PIEaddElement(gg20);
						//rectangle1
									port9= new THREE.CylinderGeometry( 1.4, 1.4,1,200);
								port9material = new THREE.MeshPhysicalMaterial( {color: "black",transparent:true} );
								gg14= new THREE.Mesh( port9, port9material );
								gg14.position.set(-28.6,-5,20.3);
								//port8cylinder.rotation.x += 13.5;
								PIEaddElement(gg14);	
								gg14.name="chandu";
							//rectangle2
									port9= new THREE.CylinderGeometry( 1.4, 1.4, 1,200);
								port9material = new THREE.MeshPhysicalMaterial( {color: "black",transparent:true} );
								gg17= new THREE.Mesh( port9, port9material );
								gg17.position.set(-24.6,-5,20.3);
								gg17.name="vignesh";
								//port8cylinder.rotation.x += 13.5;
								PIEaddElement(gg17);	
							//invinsible red
									port13= new THREE.PlaneGeometry( 2.8, 1.9, 0.6);
								port13material = new THREE.MeshBasicMaterial( {color: "#7B68EE",transparent:true} );
								gg16= new THREE.Mesh( port13, port13material );
								gg16.position.set(-28.5,-6.52,21);
								gg16.name="kumar";
								//port8cylinder.rotation.x += 13.5;
								PIEaddElement(gg16);	
							//invinsible green
									port13= new THREE.PlaneGeometry( 2.8, 1.7, 0.6);
								port13material = new THREE.MeshBasicMaterial( {color: "#7B68EE",transparent:true} );
								gggg= new THREE.Mesh( port13, port13material );
								gggg.position.set(-24.5,-6.3,21);
								gggg.name="chandu";
								//port8cylinder.rotation.x += 13.5;
								PIEaddElement(gggg);	
							//invinsible  object
			//switch
		var q2w12= new THREE.SphereGeometry(0.4, 0.6, 10 );
								var q2w112= new THREE.MeshBasicMaterial( {color: "white", side: THREE.DoubleSide} );
								 sr4= new THREE.Mesh( q2w12, q2w112);
								sr4.position.set(27.1,-1.8,2);
								PIEaddElement( sr4);
		var q2w12= new THREE.SphereGeometry(0.4, 0.6, 10 );
								var q2w112= new THREE.MeshBasicMaterial( {color: "white", side: THREE.DoubleSide} );
								 sr5= new THREE.Mesh( q2w12, q2w112);
								sr5.position.set(27.6,1,2);
								PIEaddElement( sr5);
		var q2w12= new THREE.SphereGeometry(0.4, 0.6, 10 );
								var q2w112= new THREE.MeshBasicMaterial( {color: "white", side: THREE.DoubleSide} );
								 sr6= new THREE.Mesh( q2w12, q2w112);
								sr6.position.set(32.6,1.3,2);
								PIEaddElement( sr6);
								sr4.visible=false;	
								sr5.visible=false;
								sr6.visible=false;
							//var	 texture = new THREE.ImageUtils.loadTexture("index.jpeg") ;
			var q2w12= new THREE.SphereGeometry(2.5, 4.6, 10 );
								var q2w112= new THREE.MeshBasicMaterial( {color: "yellow", side: THREE.DoubleSide,opacity:10.3,transparent:true,depthWrite:true} );
								 sr7= new THREE.Mesh( q2w12, q2w112);
								sr7.position.set(-14.2,1.8,2);
								PIEaddElement( sr7);
								sr7.visible=false;	
		var geometry = new THREE.SphereGeometry( 5, 84, 106, 1 * Math.PI/2, Math.PI/2 );
var material = new THREE.MeshLambertMaterial( { map: texture } );
var mesh = new THREE.Mesh( geometry, material );
			//PIEaddElement(mesh);
	mesh.position.set(12,12,12);
		
							//directionalLight .position.set(-12,22,12);	
window.addEventListener("click",toggle);
window.addEventListener("click",onMouseMove);
PIEstartButton.addEventListener("click",harish1);
PIEstopButton.addEventListener("click",yadav1);
 PIEsetAreaOfInterest(-30,30,20,-20);	
}
function resetExperiment() {
var i=0;
while(i<f)
	{
		PIEscene.remove(PIEscene.getObjectByName(2));
		i++;
	}
								gg7.visible=false;
								gg4.visible=false;
								gg5.visible=false;
f=0;
cO1.material.color.set("green"),cO2.material.color.set("green"),cO3.material.color.set("green"),cO4.material.color.set("green"),cO5.material.color.set("green"),cO6.material.color.set("green"),cO7.material.color.set("green"),cO8.material.color.set("green"),cO9.material.color.set("green"),cO10.material.color.set("green"),cO11.material.color.set("green"),cO27.material.color.set("green"),cO41.material.color.set("green"),cO111.material.color.set("green");
				port6cylinder.material.color.set("iron");
				port7cylinder.material.color.set("iron");
				//port8cylinder.material.color.set("iron");
				grgmesh2.visible=false;
				grgmesh9.visible=true;
				gg4.visible=false;
				gg5.visible=false;
				grgmesh13.visible=false;
				grgmesh10.visible=false;
				p72.visible=false;
				p71.visible=false;
				gg8.visible=false;
				gg7.visible=false;
			gg4.position.set(20,-3.8,2);
								gg5.position.set(21.4,-3.8,2);
								grgmesh13.position.set(16,-4,0);
								grgmesh10.position.set(16.7,-2.7,0);
								p72.position.set(9.4,-2.8,0);
								p71.position.set(9,-4, 0) ;
								gg8.position.set(6.4,-3.8,2);
								gg7.position.set(8,-3.8,2);
			gg7.visible=false;
								gg4.visible=false;
								gg5.visible=false;
				sr4.position.set(27.1,-1.8,2);
													sr5.position.set(27.8,1,2);
													sr6.position.set(32,1.3,2);
								sr4.visible=false;	
				sr7.visible=false;
								sr5.visible=false;
								sr6.visible=false;
						ggg1.visible=false;
								ggg2.visible=false;
							c1=0,c2=1;	
						gg19.position.set(-24.7,-4,20);
						gg18.position.set(-28.7,-4.6,20);
						text4.style.top = 700 + 'px';
}
function updateExperimentElements(t, dt) {
if(t!=0)
{
gg8.visible=true;
text4.style.top = 300 + 'px';
								gg7.visible=true;
								gg4.visible=true;
								gg5.visible=true;
	if(c1==1)
		{
				cO1.material.color.set("red"),cO2.material.color.set("red"),cO3.material.color.set("red"),cO4.material.color.set("red"),cO5.material.color.set("red"),cO6.material.color.set("red"),cO7.material.color.set("red"),cO8.material.color.set("red"),cO9.material.color.set("red"),cO10.material.color.set("red"),cO11.material.color.set("red"),cO27.material.color.set("red");
				cO41.material.color.set("red"),cO111.material.color.set("red");
					grgmesh2.visible=true;
					grgmesh9.visible=false;
				gg19.position.set(-24.7,-4.4,20);
				gg18.position.set(-28.7,-4,20);
				ggg1.visible=true;
								ggg2.visible=true;	
								
						grgmesh2.visible=false;
				grgmesh9.visible=true;
				gg4.visible=true;
				gg5.visible=true;
				grgmesh13.visible=true;
				grgmesh10.visible=true;
				p72.visible=true;
				p71.visible=true;
				gg8.visible=true;
				gg7.visible=true;		
				sr4.visible=true;	
				sr7.visible=true;
								sr5.visible=true;
								sr6.visible=true;
							if(gg4.position.x<29)
							{
									gg4.position.x+=0.08;
									gg5.position.x+=0.08;	
									grgmesh13.position.x+=0.08;
									grgmesh10.position.x+=0.08;	
									p72.position.x-=0.08;		
									p71.position.x-=0.08;	
									gg8.position.x-=0.08;
									gg7.position.x-=0.08;					
							}
							else
							{
								gg4.position.set(20,-3.8,2);
								gg5.position.set(21.4,-3.8,2);
								grgmesh13.position.set(16,-4,0);
								grgmesh10.position.set(16.7,-2.7,0);
								p72.position.set(9.4,-2.8,0);
								p71.position.set(9,-4, 0) ;
								gg8.position.set(6.4,-3.8,2);
								gg7.position.set(8,-3.8,2);
							}
													if(cnt==0)
													{
						
					
																							var ged1 = new THREE.SphereGeometry(0.4,0.4,4);
							var med1 = new THREE.MeshPhysicalMaterial({color: "red", transparent: true,depthWrite: false});
																						 sp101 = new THREE.Mesh(ged1, med1);
																						 //sp2=new THREE.Mesh(ged1, med1);
																						 x1= Math.floor(Math.random()*(4.2)+(4.2));;
																						 y1=Math.floor(Math.random()*(6)+(0.7));
																						sp101.position.set(x1,y1,20);
																						sp101.name=2;
																						PIEaddElement(sp101);
																						cnt=1;
																						f++;
														}	
														else if(sp101.position.x>Math.floor(Math.random()*(-24.8)+(2)))
															sp101.position.x-= 0.05;
														else
														{
															cnt=0;
														}
											if(sr6.position.y<7)
											{
												sr4.position.y+=0.05;
												sr5.position.y+=0.05;
												sr6.position.y+=0.05;
											}
											else
												{
													sr4.position.set(27.1,-1.8,2);
													sr5.position.set(27.8,1,2);
													sr6.position.set(32,1.3,2);
												}
			}
	else
		{
				cO1.material.color.set("green"),cO2.material.color.set("green"),cO3.material.color.set("green"),cO4.material.color.set("green"),cO5.material.color.set("green"),cO6.material.color.set("green"),cO7.material.color.set("green"),cO8.material.color.set("green"),cO9.material.color.set("green"),cO10.material.color.set("green"),cO11.material.color.set("green"),cO27.material.color.set("green"),cO41.material.color.set("green"),cO111.material.color.set("green");
				port6cylinder.material.color.set("iron");
				port7cylinder.material.color.set("iron");
				//port8cylinder.material.color.set("iron");
				grgmesh2.visible=true;
				grgmesh9.visible=false;
				gg19.position.set(-24.7,-4,20);
				gg18.position.set(-28.7,-4.6,20);
				sr7.visible=false;	
				PIEstopAnimation();
		}
}
}














