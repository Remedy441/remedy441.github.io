function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Electromagnetic induction in a coil Experiment Help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows the Current Induced in a coil due to Magnetic field</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<h4>You can Drag the magnet near the coil to observe the change in the galvanometer.</h4>";
    helpContent = helpContent + "<li>StartButton&nbsp;&nbsp;:&nbsp;Starts The animation.</li>";
    helpContent = helpContent + "<li>StopButton&nbsp;&nbsp;:&nbsp;Stops The animation.</li>";
    helpContent = helpContent + "<li>Reset&nbsp;&nbsp;:&nbsp;Sets  all element's position original values.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<h4>You can pause and resume the animation by using the pause/play nutton on the top line</h4>";
    helpContent = helpContent + "<h4>You can flip the poles of the magnet by clicking on the Invert button provided in the control panel to observe the reverse in current.</h4>";
    PIEupdateHelp(helpContent);
}

var infoContent,holder,sphere1,rotate=0.5,b=0;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Electromagnetic induction in a coil Experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows the Current Induced in a coil due to Magnetic field</p>";
    infoContent = infoContent + "<p>Electromagnetic Induction was first discovered way back in the 1830’s by Michael Faraday. Faraday noticed that when he moved a permanent magnet in and out of a coil or a single loop of wire it induced an ElectroMotive Force or emf, in other words a Voltage, and therefore a current was produced.</p>";
    infoContent = infoContent + "<p>So what Michael Faraday discovered was a way of producing an electrical current in a circuit by using only the force of a magnetic field and not batteries. This then lead to a very important law linking electricity with magnetism, Faraday’s Law of Electromagnetic Induction. So how does this work?.</p>";
    infoContent = infoContent + "<p>When the magnet shown below is moved “towards” the coil, the pointer or needle of the Galvanometer, which is basically a very sensitive centre zero’ed moving-coil ammeter, will deflect away from its centre position in one direction only. When the magnet stops moving and is held stationary with regards to the coil the needle of the galvanometer returns back to zero as there is no physical movement of the magnetic field.</p>";
    infoContent = infoContent + "<p>Likewise, when the magnet is moved “away” from the coil in the other direction, the needle of the galvanometer deflects in the opposite direction with regards to the first indicating a change in polarity. Then by moving the magnet back and forth towards the coil the needle of the galvanometer will deflect left or right, positive or negative, relative to the directional motion of the magnet.</p>";
    infoContent = infoContent + "<h3>Faraday’s Law of Induction</h3>";
    infoContent = infoContent + "<p>From the above description we can say that a relationship exists between an electrical voltage and a changing magnetic field to which Michael Faraday’s famous law of electromagnetic induction states: “that a voltage is induced in a circuit whenever relative motion exists between a conductor and a magnetic field and that the magnitude of this voltage is proportional to the rate of change of the flux”.</p>";
    infoContent = infoContent + "<p>In other words, Electromagnetic Induction is the process of using magnetic fields to produce voltage, and in a closed circuit, a current.</p>";
    infoContent = infoContent + "<p>So how much voltage (emf) can be induced into the coil using just magnetism. Well this is determined by the following 3 different factors.</p>";
    infoContent = infoContent + "<p>1). Increasing the number of turns of wire in the coil – By increasing the amount of individual conductors cutting through the magnetic field, the amount of induced emf produced will be the sum of all the individual loops of the coil, so if there are 20 turns in the coil there will be 20 times more induced emf than in one piece of wire.</p>";
    infoContent = infoContent + "<p>2). Increasing the speed of the relative motion between the coil and the magnet – If the same coil of wire passed through the same magnetic field but its speed or velocity is increased, the wire will cut the lines of flux at a faster rate so more induced emf would be produced.</p>";
    infoContent = infoContent + "<p>3). Increasing the strength of the magnetic field – If the same coil of wire is moved at the same speed through a stronger magnetic field, there will be more emf produced because there are more lines of force to cut.</p>";
    
    PIEupdateInfo(infoContent);
}

function loadExperimentElements()
{
var geometry;
var material;
var loader;
var texture;
	   initialiseInfo();
		   initialiseHelp();


//ss
var material = new THREE.MeshBasicMaterial({color : 'red'});
var geometry = new THREE.CylinderGeometry(0.02, 0.02, 0.4, 0.9 );
	
	holder = new THREE.Mesh(geometry,material);
	PIEaddElement(holder);
	
	geometry = new THREE.CylinderGeometry(0.02, 0.02, 0.01, 0.9 );
	material = new THREE.MeshBasicMaterial({color : 'red'});
	sphere1 = new THREE.Mesh(geometry,material);
	PIEaddElement(sphere1);
	
	sphere1.position.set(-3.8,-0.75,20);
	sphere1.add(holder);	
	holder.position.y = 0.2;
	
	
	
	

PIEsetExperimentTitle("Electromagnetic induction in a coil");
PIEsetDeveloperName("Narendra Chintala");

var plane=new THREE.PlaneGeometry(220,220);
var p=new THREE.MeshBasicMaterial({color:0xBDB76B});
var pl=new THREE.Mesh(plane,p);
pl.position.z=-100;
PIEaddElement(pl);



texture = new THREE.ImageUtils.loadTexture( "image.jpg",{},function (){PIErender();} );
BaseGeometry2=new THREE.BoxGeometry(35,0.3,25);
BaseMaterial2=new THREE.MeshPhysicalMaterial({color:0xBDB76B,map:texture});
Table=new THREE.Mesh(BaseGeometry2,BaseMaterial2);
Table.rotation.x+=0.1;
Table.position.y=-2;
Table.position.x=-4;
Table.position.z=1;
PIEaddElement(Table);


texture = new THREE.ImageUtils.loadTexture( "bar1.png",{},function (){PIErender();} );
geometry=new THREE.BoxGeometry(3.5,0.9,0.9);
material=new THREE.MeshPhysicalMaterial({map:texture});
magnet2=new THREE.Mesh(geometry,material);
magnet2.rotation.x+=0.1;
magnet2.position.x=2;
magnet2.position.z=2;
magnet2.position.y=-1.35;
PIEaddElement(magnet2);

PIEdragElement(magnet2);
PIEsetDrag(magnet2, myBallDrag);
geometry = new THREE.CircleGeometry(1.5, 100);
    	geometry.vertices.shift();

    circle1 = new THREE.Line(
        geometry,
        new THREE.LineDashedMaterial({color: 'darkorange',linewidth:4})
    );
    circle1.rotation.y=Math.PI/2.3;
    circle1.position.set(-8,0,1.5);
    PIEaddElement(circle1);

    circle2 = new THREE.Line(
        geometry,
        new THREE.LineDashedMaterial({color: 'darkorange',linewidth:4})
    );
    circle2.rotation.y=Math.PI/2.3;
    circle2.position.set(-8.35,0,1.5);
    PIEaddElement(circle2);

    circle3 = new THREE.Line(
        geometry,
        new THREE.LineDashedMaterial({color: 'darkorange',linewidth:4})
    );
    circle3.rotation.y=Math.PI/2.3;
    circle3.position.set(-8.7,0,1.5);
    PIEaddElement(circle3);

    circle4 = new THREE.Line(
        geometry,
        new THREE.LineDashedMaterial({color: 'darkorange',linewidth:4})
    );
    circle4.rotation.y=Math.PI/2.3;
    circle4.position.set(-9,0,1.5);
    PIEaddElement(circle4);

    circle5 = new THREE.Line(
        geometry,
        new THREE.LineDashedMaterial({color: 'darkorange',linewidth:4})
    );
    circle5.rotation.y=Math.PI/2.3;
    circle5.position.set(-9.3,0,1.5);
    PIEaddElement(circle5);

	geometry=new THREE.CylinderGeometry(0.2,0.2,0.5,30);
	material=new THREE.MeshPhysicalMaterial({color:'black'});
	glass=new THREE.Mesh(geometry,material);
	glass.position.set(-9	,-1.9,4);
	PIEaddElement(glass);

	geometry=new THREE.CylinderGeometry(0.2,0.2,0.5,30);
	material=new THREE.MeshPhysicalMaterial({color:'black'});
	glass=new THREE.Mesh(geometry,material);
	glass.position.set(-7.6	,-1.9,4);
	PIEaddElement(glass);

	curve1 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-8.8, -0.5,1.5  ),
										new THREE.Vector3( -10,-0.5, 1.5 ),
										new THREE.Vector3( -10, -0.5, 6.5 )
										);


	CurveGeometry1 = new THREE.Geometry();
	CurveGeometry1.vertices = curve1.getPoints( 50 );
	CurveMaterial1 = new THREE.LineBasicMaterial( { color : 'orangered',linewidth:4} );
	FirstCurve = new THREE.Line(CurveGeometry1, CurveMaterial1 );			
	PIEaddElement(FirstCurve);

	curve2 = new THREE.QuadraticBezierCurve3(
											new THREE.Vector3(-10, -0.5,6.5  ),
											new THREE.Vector3( -10.5,-1, 13.5 ),
											new THREE.Vector3( -8.4, -1.3, 9 )
											);


	CurveGeometry1 = new THREE.Geometry();
	CurveGeometry1.vertices = curve2.getPoints( 50 );
	CurveMaterial1 = new THREE.LineBasicMaterial( { color : 'orangered',linewidth:4} );
	SecondCurve = new THREE.Line(CurveGeometry1, CurveMaterial1 );			
	PIEaddElement(SecondCurve);

	curve3 = new THREE.QuadraticBezierCurve3(
											new THREE.Vector3(-7.7, -1,1.5  ),
											new THREE.Vector3( -5,-1, 15.3 ),
											new THREE.Vector3( -7.2, -1.5, 7 )
											);


	CurveGeometry1 = new THREE.Geometry();
	CurveGeometry1.vertices = curve3.getPoints( 50 );
	CurveMaterial1 = new THREE.LineBasicMaterial( { color : 'orangered',linewidth:4} );
	ThirdCurve = new THREE.Line(CurveGeometry1, CurveMaterial1 );			
	PIEaddElement(ThirdCurve);


SwitchGroup=new THREE.Group();
BaseGeometry1=new THREE.BoxGeometry(4,4,1);
BaseMaterial1=new THREE.MeshPhysicalMaterial({color:'grey'});
Base1=new THREE.Mesh(BaseGeometry1,BaseMaterial1);
Base1.rotation.x+=4.8;
Base1.position.y=-3;
Base1.position.x=-9;
Base1.position.z=10;


STG1 = new THREE.CylinderGeometry( 0.2, 0.2, 0.2, 32 );
STM1= new THREE.MeshPhysicalMaterial( {color: 'red'} );
ST1 = new THREE.Mesh( STG1, STM1 );
ST1.position.y=-1;
ST1.position.x=-6;
ST1.position.z=21.5;

STG2 = new THREE.CylinderGeometry( 0.35, 0.35, 0.4, 32 );
STM2= new THREE.MeshPhysicalMaterial( {color: 'green'} );
ST2 = new THREE.Mesh( STG2, STM2 );
//LT1.rotation.z=Math.PI/2;
ST2.position.y=-2.3;
ST2.position.x=-7.5;
ST2.position.z=11.2;

SwitchGroup.add(Base1);
SwitchGroup.add(ST1);
SwitchGroup.add(ST2);
SwitchGroup.position.x=-3.2;
SwitchGroup.position.y=0.5;
PIEaddElement(SwitchGroup);



	geometry=new THREE.BoxGeometry(2.5,0.7,3);
	material=new THREE.MeshPhysicalMaterial({color:'slategrey'});
	glass=new THREE.Mesh(geometry,material);
	glass.position.set(-3.3	,-2.8,11);
	PIEaddElement(glass);

	geometry=new THREE.BoxGeometry(2.5,0.7,1.6);
	material=new THREE.MeshPhysicalMaterial({color:'slategrey'});
	glass=new THREE.Mesh(geometry,material);
	glass.position.set(-3.3	,-1.65,10);
	glass.rotation.x=Math.PI/2;
	PIEaddElement(glass);


STG2 = new THREE.CylinderGeometry( 0.2, 0.2, 0.4, 32 );
STM2= new THREE.MeshPhysicalMaterial( {color: 'black'} );
ST2 = new THREE.Mesh( STG2, STM2 );
//LT1.rotation.z=Math.PI/2;
ST2.position.y=-2.4;
ST2.position.x=-4.2;
ST2.position.z=11.8;
PIEaddElement(ST2);

STG2 = new THREE.CylinderGeometry( 0.2, 0.2, 0.4, 32 );
STM2= new THREE.MeshPhysicalMaterial( {color: 'green'} );
ST2 = new THREE.Mesh( STG2, STM2 );
//LT1.rotation.z=Math.PI/2;
ST2.position.y=-2.4;
ST2.position.x=-2.4;
ST2.position.z=11.8;
PIEaddElement(ST2);

geometry=new THREE.PlaneGeometry(2,1.3);
material=new THREE.MeshPhysicalMaterial({color:'white'});
read=new THREE.Mesh(geometry,material);
read.position.z=10.5;
read.position.x=-3.3;
read.position.y=-1.65;
PIEaddElement(read);

var curve = new THREE.Line(
	new THREE.Vector3( -4.2,-0.75,20 ),
	
	new THREE.Vector3( -4.2,-0.3,20 )
);



var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry( "0", { font: font, size: 0.15, height: .05, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'black' });

                toggle = new THREE.Mesh(southGeometry ,southMaterial );
                toggle.position.set(-3.6,-0.8, 15) ;
                PIEaddElement( toggle );})

var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry( "10", { font: font, size: 0.15, height: .05, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'black' });

                toggle = new THREE.Mesh(southGeometry ,southMaterial );
                toggle.position.set(-3.1,-1, 15) ;
                PIEaddElement( toggle );})

                var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry( "20", { font: font, size: 0.15, height: .05, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'black' });

                toggle = new THREE.Mesh(southGeometry ,southMaterial );
                toggle.position.set(-3.1,-1.4, 15) ;
                PIEaddElement( toggle );})

                var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry( "10", { font: font, size: 0.15, height: .05, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'black' });

                toggle = new THREE.Mesh(southGeometry ,southMaterial );
                toggle.position.set(-4.2,-1, 15) ;
                PIEaddElement( toggle );})
var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry( "20", { font: font, size: 0.15, height: .05, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'black' });

                toggle = new THREE.Mesh(southGeometry ,southMaterial );
                toggle.position.set(-4.2,-1.4, 15) ;
                PIEaddElement( toggle );})

geometry=new THREE.CircleGeometry(0.1,50);
material=new THREE.MeshBasicMaterial({color:'red'});
sphere=new THREE.Mesh(geometry,material);
sphere.position.set(-3.55,-1.4,15);
PIEaddElement(sphere);

LightGroup=new THREE.Group();
ge = new THREE.CircleGeometry(0.5, 100);

ci = new THREE.Mesh(
        ge,
        new THREE.MeshPhysicalMaterial({color: 'grey',linewidth:2})
    );
ci.position.set(-11.9,-1.25,11.4);
PIEaddElement(ci);

STG2 = new THREE.CylinderGeometry( 0.2, 0.2, 0.4, 32 );
STM2= new THREE.MeshPhysicalMaterial( {color: 'grey'} );
ST2 = new THREE.Mesh( STG2, STM2 );
//ST2.rotation.z=Math.PI/2;
ST2.position.y=-1.9;
ST2.position.x=-11.8;
ST2.position.z=11.8;
PIEaddElement(ST2);



curve4 = new THREE.QuadraticBezierCurve3(
                                            new THREE.Vector3(-4.4, -1.8,15.2  ),
                                            new THREE.Vector3( -7,-2.3,14),
                                            new THREE.Vector3( -8.8,-2,5)
                                            );


    CurveGeometry1 = new THREE.Geometry();
    CurveGeometry1.vertices = curve4.getPoints( 50 );
    CurveMaterial1 = new THREE.LineBasicMaterial( { color : 'red',linewidth:4} );
    FourthCurve = new THREE.Line(CurveGeometry1, CurveMaterial1 );           
    PIEaddElement(FourthCurve);

    curve5 = new THREE.QuadraticBezierCurve3(
                                            new THREE.Vector3(-2.6, -1.8,15.2  ),
                                            new THREE.Vector3( -1.5,-2.3,14),
                                            new THREE.Vector3( -0.5,-2,0)
                                            );


    CurveGeometry1 = new THREE.Geometry();
    CurveGeometry1.vertices = curve5.getPoints( 50 );
    CurveMaterial1 = new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );
    FifthCurve = new THREE.Line(CurveGeometry1, CurveMaterial1 );           
    PIEaddElement(FifthCurve);


    curve6 = new THREE.QuadraticBezierCurve3(
                                            new THREE.Vector3(-7.5,-2,5 ),
                                            new THREE.Vector3( -5,-2.5,6),
                                            new THREE.Vector3( -1.05,-1.73,6)
                                            );


    CurveGeometry1 = new THREE.Geometry();
    CurveGeometry1.vertices = curve6.getPoints( 50 );
    CurveMaterial1 = new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );
    SixthCurve = new THREE.Line(CurveGeometry1, CurveMaterial1 );           
    PIEaddElement(SixthCurve);

    curve7 = new THREE.QuadraticBezierCurve3(
                                            new THREE.Vector3(-13,-1.7,12 ),
                                            new THREE.Vector3( -14,-1.5,5),
                                            new THREE.Vector3( -8.1  ,-1.5,9.8)
                                            );


    CurveGeometry1 = new THREE.Geometry();
    CurveGeometry1.vertices = curve7.getPoints( 50 );
    CurveMaterial1 = new THREE.LineBasicMaterial( { color : 'red',linewidth:4} );
    SeventhCurve = new THREE.Line(CurveGeometry1, CurveMaterial1 );           
    PIEaddElement(SeventhCurve);

    curve8 = new THREE.QuadraticBezierCurve3(
                                            new THREE.Vector3(-10.3,-1.7,12 ),
                                            new THREE.Vector3( -8,-3,12),
                                            new THREE.Vector3( -7.1  ,-1.5,9.8)
                                            );


    CurveGeometry1 = new THREE.Geometry();
    CurveGeometry1.vertices = curve8.getPoints( 50 );
    CurveMaterial1 = new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );
    EigthCurve = new THREE.Line(CurveGeometry1, CurveMaterial1 );           
    PIEaddElement(EigthCurve);


    for (var i =0; i <= 10; i++) {
        PIErender();
    }
    PIEaddDualCommand("Invert",Invert);
		PIEsetAreaOfInterest(10,10, -12,-8);
		PIEcamera.position.x=-4.5;
}

a=-3;
tim=0;v=0;b,c=0;count=0;i=0;
function myBallDrag(element, newpos)
{
	myBallX = newpos.x;
    myBallY = newpos.y;
    myBallZ = newpos.z;
    if(newpos.y < -1.35)
    {
    		myBallY=-1.35;
    }
    PIEstartAnimation();


    magnet2.position.set(myBallX, myBallY, myBallZ);
}
ti=0,d=0,rot1=0.5;turn=0;rot=102.5;jin=0;jing=1;c1=0,rotate1=0.5;tim1=0,turn1=0,ro1=0.5;
function updateExperimentElements(t,dt)
{

    if(t==0)
    {
        geometry=new THREE.SphereGeometry(0.1,50);
        material=new THREE.MeshBasicMaterial();
        vsi=new THREE.Mesh(geometry,material);
        vsi.visible=false;
        PIEaddElement(vsi);
        PIErender();
    }
	if(t!=0)
	{
		if(pole==0)
		{

					if(c==0)
			    {

					    if(magnet2.position.x >= -11.5 && magnet2.position.x <= -6 && magnet2.position.y <= 1 && magnet2.position.y >= -1.5)
					    {
					    	
					    	ci.material.color.set("yellow");
												if(rotate >= 100)
												{
													c=1;
													tim=1;
													// alert(sphere1.rotation.x + " " + sphere1.rotation.y + " " + sphere1.rotation.z);
													
												}
												
												else
												{
													if(sphere1.rotation.z <= 1.53)
													{
														sphere1.rotation.z += 0.09;
													
													}
													rotate += 6;

												}	
					    	
					    }
					    
				}

				else if (c==1)
				{
					if(rotate <= 0.5)
					{
						c=2;
						rotate=0.5;
						tim=1;
						// alert(sphere1.rotation.x + " " + sphere1.rotation.y + " " + sphere1.rotation.z);
						
					}
												
					else
					{
						ci.material.color.set("yellow");
						sphere1.rotation.z -= 0.09;
						rotate -= 6;
					}	
				

				}

				else if (c==2 && magnet2.position.x >= -6)
				{
					//alert("Help");
					if(rotate >= 100)
					{
						c=3;
						rotate=0.5;
						tim=3;
						// alert(sphere1.rotation.x + " " + sphere1.rotation.y + " " + sphere1.rotation.z);
						
					}
												
					else
					{
						ci.material.color.set("yellow");
						sphere1.rotation.z -= 0.09;
						rotate += 6;
					}	
				

				}

				else if(c==3)
				{
					if(rotate >= 100)
					{
						c=0;
						rotate=0.5;
						tim=0;
						// alert(sphere1.rotation.x + " " + sphere1.rotation.y + " " + sphere1.rotation.z);
						
						
					}
												
					else
					{
						ci.material.color.set("yellow");
						if(sphere1.rotation.z >= -1.53)
							sphere1.rotation.z += 0.09;
						rotate += 6;
					}	
				}

				

				


		}

		if(pole==1)
		{

				if(c1==0)
			    {

					    if(magnet2.position.x >= -11.5 && magnet2.position.x <= -6 && magnet2.position.y <= 1 && magnet2.position.y >= -1.5)
					    {
					    	
					    	ci.material.color.set("yellow");
							if(rotate1 >= 100)
							{
								c1=1;
								tim1=1;
								sphere1.position.set(-3.8,-0.75,20);
								holder.position.y = 0.2;
							}
												
							else
							{
								sphere1.rotation.z -= 0.08;
								rotate1 += 6;
							}	
					    	
					    }
					    
				}
		

				else if (c1==1)
				{
					if(rotate1 <= 0.5)
					{
						c1=2;
						rotate1=0.5;
						tim1=1;
						sphere1.position.set(-3.8,-0.75,20);
						holder.position.y = 0.2;
					}
												
					else
					{
						ci.material.color.set("yellow");
						sphere1.rotation.z += 0.08;
						rotate1 -= 6;
					}	
				

				}
		

				else if (c1==2 && magnet2.position.x >= -6)
				{
					if(rotate1 >= 100)
					{
						c1=3;
						rotate1=0.5;
						tim1=3;
						sphere1.position.set(-3.8,-0.75,20);
						holder.position.y = 0.2;
					}
												
					else
					{
						ci.material.color.set("yellow");
						sphere1.rotation.z += 0.08;
						rotate1 += 6;
					}	
				

				}



				else if(c1==3)
				{
					if(rotate1 >= 100)
					{
						c1=0;
						rotate1=0.5;
						tim1=0;
						sphere1.position.set(-3.8,-0.75,20);
						holder.position.y = 0.2;

						
					}
												
					else
					{
						ci.material.color.set("yellow");
						sphere1.rotation.z -= 0.08;
						rotate1 += 6;
					}	
				}

				// else if(magnet2.position.x <= -11 && turn1 == 0)
				// {
				// 	if(ro1 >= 100)
				// 	{
				// 		turn1 = 1;
				// 		sphere1.position.set(-3.8,-0.75,20);
				// 		holder.position.y = 0.2;
				// 	}
				// 	else
				// 	{
						
				// 		sphere1.rotation.z += 0.1;
				// 		ro1 += 6; 
				// 	}
				// }

				// else if(magnet2.position.x <= -11 && turn1 == 1)
				// {
				// 	// alert("In");
				// 	if(ro1 >= 200)
				// 	{
				// 		turn1 = 2;
				// 		sphere1.position.set(-3.8,-0.75,20);
				// 		holder.position.y = 0.2;
				// 	}
				// 	else
				// 	{
						
				// 		sphere1.rotation.z -= 0.08;
				// 		ro1 += 6; 
				// 	}
				// }

				// else if(magnet2.position.x >= -11 && magnet2.position.x >= -10 && turn1 == 2)
				// {
				// 	// alert("Second");
				// 	if(ro1 >= 300)
				// 	{
				// 		turn1 = 4;
				// 		sphere1.position.set(-3.8,-0.75,20);
				// 		holder.position.y = 0.2;
				// 		// rot1=0.5;
				// 	}
				// 	else
				// 	{
						
				// 		sphere1.rotation.z -= 0.08;
				// 		ro1 += 6; 
				// 	}
				// }

				// else if(magnet2.position.x >= -11 && magnet2.position.x >= -10 && turn1 == 4)
				// {
				// 	if(ro1 >= 400)
				// 	{
				// 		turn1 = 0;
				// 		ro1=0.5;

	
	
				// 		sphere1.position.set(-3.8,-0.75,20);
				// 		holder.position.y = 0.2;
				// 	}
				// 	else
				// 	{
						
				// 		sphere1.rotation.z += 0.1;
				// 		ro1 += 6; 
				// 	}
				// }
		}

				


				// }
	//	}




			
				
	}

}

pole=0;
function Invert() {

	if(pole==0)
	{
		pole=1;
		PIEscene.remove(magnet2);
		texture = new THREE.ImageUtils.loadTexture( "bar2.png",{},function (){PIErender();} );
		geometry=new THREE.BoxGeometry(3.5,0.9,0.9);
		material=new THREE.MeshPhysicalMaterial({map:texture});
		magnet2=new THREE.Mesh(geometry,material);
		magnet2.rotation.x+=0.1;
		magnet2.position.x=2;
		magnet2.position.z=2;
		magnet2.position.y=-1.35;
		PIEaddElement(magnet2);
		PIEdragElement(magnet2);
		PIEsetDrag(magnet2, myBallDrag);
        PIErender();
        d=0;
         for (var i =0; i <= 10; i++) {
        PIErender();
    }
		
	}

	else if(pole==1)
	{
		pole=0;
		PIErender();
		PIEscene.remove(magnet2);
		texture = new THREE.ImageUtils.loadTexture( "bar1.png",{},function (){PIErender();} );
		geometry=new THREE.BoxGeometry(3.5,0.9,0.9);
		material=new THREE.MeshPhysicalMaterial({map:texture});
		magnet2=new THREE.Mesh(geometry,material);
		magnet2.rotation.x+=0.1;
		magnet2.position.x=2;
		magnet2.position.z=2;
		magnet2.position.y=-1.35;
		PIEaddElement(magnet2);
		PIEdragElement(magnet2);
        PIEsetDrag(element,myBallDrag);
        PIErender();
         for (var i =0; i <= 10; i++) {
        PIErender();
    }
		
	}
	

}

function resetExperiment() {
	pole=0;
	ci.material.color.set("grey");
	magnet2.position.set(2,-1.35,2);
	c=0;
	d=0;
	tim=0;
	PIEscene.remove(holder);
	PIEscene.remove(sphere1);

	var material = new THREE.MeshBasicMaterial({color : 'red'});
var geometry = new THREE.CylinderGeometry(0.02, 0.02, 0.4, 0.9 );
	
	holder = new THREE.Mesh(geometry,material);
	PIEaddElement(holder);
	
	geometry = new THREE.CylinderGeometry(0.02, 0.02, 0.01, 0.9 );
	material = new THREE.MeshBasicMaterial({color : 'red'});
	sphere1 = new THREE.Mesh(geometry,material);
	PIEaddElement(sphere1);
	
	sphere1.position.set(-3.8,-0.75,20);
	sphere1.add(holder);	
	holder.position.y = 0.2;
	PIEscene.remove(magnet2);
		texture = new THREE.ImageUtils.loadTexture( "bar1.png",{},function (){PIErender();} );
		geometry=new THREE.BoxGeometry(3.5,0.9,0.9);
		material=new THREE.MeshPhysicalMaterial({map:texture});
		magnet2=new THREE.Mesh(geometry,material);
		magnet2.rotation.x+=0.1;
		magnet2.position.x=2;
		magnet2.position.z=2;
		magnet2.position.y=-1.35;
		PIEaddElement(magnet2);
		PIEdragElement(magnet2);
        PIEsetDrag(magnet2,myBallDrag);
        turn = 0;
        rot1 = 0.5;
        PIErender();

	
	
}
