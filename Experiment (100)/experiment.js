var batteryMaterial1,batteryGeometry1,battery1,battery2,batteryGeometry2,batteryMaterial2,FirstCurve,SecondCurve,ThirdCurve,FourthCurve;
var boxgeometry3,boxmaterial3,box3;
var boxgeometry, boxmaterial,box1,boxgeom,boxmat,box2,NailGeometry,NailMaterial,Nail,NailBase,Sg1,Sg2,Sm1,Sm2,ST1,ST2,count=0;
var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Basic Electromagnet Experiment Help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows the creation of magnetic field due to current in a circuit.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>StartButton&nbsp;&nbsp;:&nbsp;Starts The animation by supplying current.</li>";
    helpContent = helpContent + "<li>StopButton&nbsp;&nbsp;:&nbsp;Starts The animation.</li>";
    helpContent = helpContent + "<p>Once The Experiment is started you can toggle it by the Switch which will be shown to you as Toggle</p>";
    helpContent = helpContent + "<li>Reset&nbsp;&nbsp;:&nbsp;Sets the circuit and all ther element's position original values.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Basic Electromagnet experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows the creation of magnetic field due to current in a circuit.</p>";
    infoContent = infoContent + "<h3>Electromagnet</h3>";
    infoContent = infoContent + "<p>An electromagnet is a magnet that is created using an electric current -- created by electricity. Since electricity can be turned on and off, so can an electromagnet. It can even be weakened or strengthened by decreasing or increasing the current. </p>";
    infoContent = infoContent + "<p>When charges, like electrons or protons, are stationary, they produce electric forces. But when they're moving, they produce magnetic forces. Inside a magnet are lots of tiny moving charges, which gives the magnet its magnetic field. </p>";
    infoContent = infoContent + "<p>Electromagnets are usually made out of a coil of wire -- a wire curled into a series of 'turns'. This strengthens and concentrates the magnetic field more than a single stretch of wire. The wire turns are often coiled around a regular magnet, made of a ferromagnetic material like iron. This makes the electromagnet more powerful. </p>";
    infoContent = infoContent + "<p></p>";
    infoContent = infoContent + "<h3>Uses of Electromagnets</h3>";
    infoContent = infoContent + "<p>Electromagnets are used in all kinds of electric devices, including hard disk drives, speakers, motors, and generators, as well as in scrap yards to pick up heavy scrap metal. They're even used in MRI machines, which utilize magnets to take photos of your insides! </p>";
    infoContent = infoContent + "<p>Motors and generators are vital to everything we do in the modern world. A motor takes electrical energy and uses a magnet to turn that electrical energy into motion. </p>";
    infoContent = infoContent + "<p>A generator does the opposite -- it takes motion and uses it along with a magnet to generate electricity. </p>";
    PIEupdateInfo(infoContent);
}

function CreateNails()
{

	/*Start of First Nail*/
FirstNail=new THREE.Group();
geom = new THREE.CircleGeometry( .3, 32 );
mat = new THREE.MeshPhysicalMaterial( { color:0x808080 } );
nail21 = new THREE.Mesh( geom, mat );
nail21.rotation.x+=0.9;
//nail21.rotation.z=Math.PI/-2;
nail21.position.set(4.4,-1.95,0);
FirstNail.add(nail21);

geom=new THREE.CylinderGeometry(0.12,0.12,1.2);
mat=new THREE.MeshPhysicalMaterial({color:0x808080});
nail22=new THREE.Mesh(geom,mat);
nail22.position.set(4.4,-2.55,0);
FirstNail.add(nail22);

geom=new THREE.CylinderGeometry(0.125,0.001,0.3);
mat=new THREE.MeshPhysicalMaterial({color:0x808080});
nail23=new THREE.Mesh(geom,mat);
nail23.position.set(4.4,-3.25,0);
FirstNail.add(nail23);
PIEaddElement(FirstNail);
/*End Of First Nail*/ 


/*Start of Second Nail*/
SecondNail=new THREE.Group();
ntopg = new THREE.CircleGeometry( .3, 32 );
ntopm = new THREE.MeshPhysicalMaterial( { color:0x808080 } );
nail51 = new THREE.Mesh( ntopg, ntopm );
nail51.rotation.x+=0.9;
nail51.position.set(5,-1.95,0);
SecondNail.add(nail51);

ntopcg=new THREE.CylinderGeometry(0.15,0.15,0.7);
ntopcm=new THREE.MeshPhysicalMaterial({color:0x808080});
nail52=new THREE.Mesh(ntopcg,ntopcm);
nail52.position.set(5,-2.3,0);
SecondNail.add(nail52);

ntopcg1=new THREE.CylinderGeometry(0.1,0.1,1);
ntopcm1=new THREE.MeshPhysicalMaterial({color:0x808080});
nail53=new THREE.Mesh(ntopcg1,ntopcm1);
nail53.position.set(5,-2.6,0);
SecondNail.add(nail53);

nbottomg=new THREE.CylinderGeometry(0.1,0.03,0.3);
nbottomm=new THREE.MeshPhysicalMaterial({color:0x808080});
nail54=new THREE.Mesh(nbottomg,nbottomm);
nail54.position.set(5,-3.2,0);
SecondNail.add(nail54);
PIEaddElement(SecondNail);
/*End Of Second Nail*/ 

		
/*Start Of Third Nail*/
ThirdNail=new THREE.Group();
ntopg = new THREE.CircleGeometry( .3, 32 );
ntopm = new THREE.MeshPhysicalMaterial( { color:0x808080 } );
ntop = new THREE.Mesh( ntopg, ntopm );
ntop.rotation.x+=0.9;
//ntop.rotation.z+=-3;
ntop.position.set(5.7,-1.95,0);
ThirdNail.add(ntop);
ThirdNail.position.x=-0.3;

ntopcg=new THREE.CylinderGeometry(0.15,0.15,0.7);
ntopcm=new THREE.MeshPhysicalMaterial({color:0x808080});
ntopc1=new THREE.Mesh(ntopcg,ntopcm);
ntopc1.position.set(5.7,-2.3,0);
ThirdNail.add(ntopc1);

ntopcg1=new THREE.CylinderGeometry(0.1,0.1,1);
ntopcm1=new THREE.MeshPhysicalMaterial({color:0x808080});
ntopc2=new THREE.Mesh(ntopcg1,ntopcm1);
ntopc2.position.set(5.7,-2.6,0);
ThirdNail.add(ntopc2);

nbottomg=new THREE.CylinderGeometry(0.1,0.03,0.3);
nbottomm=new THREE.MeshPhysicalMaterial({color:0x808080});
nbottom=new THREE.Mesh(nbottomg,nbottomm);
nbottom.position.set(5.7,-3.2,0);
ThirdNail.add(nbottom);
PIEaddElement(ThirdNail);
/*End Of ThirdNail*/


/*Start Of Fourth Nail*/
FourthNail=new THREE.Group();
geom = new THREE.CircleGeometry( .3, 32 );
mat = new THREE.MeshPhysicalMaterial( { color:0x808080 } );
nail61 = new THREE.Mesh( geom, mat );
nail61.rotation.x+=0.9;
//ntop.rotation.z+=-3;
nail61.position.set(6.4,-1.95,0);
FourthNail.add(nail61);

geom=new THREE.CylinderGeometry(0.12,0.12,1.2);
mat=new THREE.MeshPhysicalMaterial({color:0x808080});
nail62=new THREE.Mesh(geom,mat);
nail62.position.set(6.4,-2.5,0);
FourthNail.add(nail62);

geom=new THREE.CylinderGeometry(0.125,0.001,0.3);
mat=new THREE.MeshPhysicalMaterial({color:0x808080});
nail63=new THREE.Mesh(geom,mat);
nail63.position.set(6.4,-3.25,0);
FourthNail.add(nail63);
PIEaddElement(FourthNail);
/*End Of Fourth Nail*/ 



/*Start of Fifth Nail*/
FifthNail=new THREE.Group();
geom = new THREE.CircleGeometry( .3, 32 );
mat = new THREE.MeshPhysicalMaterial( { color:0x808080 } );
nail31 = new THREE.Mesh( geom, mat );
nail31.rotation.x+=0.9;
//ntop.rotation.z+=-3;
nail31.position.set(7.2,-1.95,0);
FifthNail.add(nail31);
FifthNail.position.x=-0.3;

geom=new THREE.CylinderGeometry(0.12,0.12,1.2);
mat=new THREE.MeshPhysicalMaterial({color:0x808080});
nail32=new THREE.Mesh(geom,mat);
nail32.position.set(7.2,-2.5,0);
FifthNail.add(nail32);

geom=new THREE.CylinderGeometry(0.125,0.001,0.3);
mat=new THREE.MeshPhysicalMaterial({color:0x808080});
nail33=new THREE.Mesh(geom,mat);
nail33.position.set(7.2,-3.25,0);
FifthNail.add(nail33);
PIEaddElement(FifthNail);
/*End Of Fifth Nail*/ 

/*Start of Sixth Nail*/
SixthNail=new THREE.Group();
geom = new THREE.CircleGeometry( .3, 32 );
mat = new THREE.MeshPhysicalMaterial( { color:0x808080 } );
nail41 = new THREE.Mesh( geom, mat );
nail41.rotation.x+=0.8;
//ntop.rotation.z+=-3;
nail41.position.set(8,-1.95,0);
SixthNail.add(nail41);



geom=new THREE.CylinderGeometry(0.12,0.12,1.2);
mat=new THREE.MeshPhysicalMaterial({color:0x808080});
nail42=new THREE.Mesh(geom,mat);
nail42.position.set(8,-2.5,0);
SixthNail.add(nail42);

geom=new THREE.CylinderGeometry(0.125,0.001,0.3);
mat=new THREE.MeshPhysicalMaterial({color:0x808080});
nail43=new THREE.Mesh(geom,mat);
nail43.position.set(8,-3.25,0);
SixthNail.add(nail43);
PIEaddElement(SixthNail);
/*End Of Sixth Nail*/ 



}

function loadExperimentElements()
{
var geometry;
var material;
var loader;
var texture;
	   initialiseInfo();
		   initialiseHelp();




PIEsetExperimentTitle("Basic Electromagent");
PIEsetDeveloperName("Narendra Chintala");
PIEhideControlElement();

var plane=new THREE.PlaneGeometry(60,55);
var p=new THREE.MeshBasicMaterial({color:0xFDF6D5});
var pl=new THREE.Mesh(plane,p);
PIEaddElement(pl);


boxgeometry1 = new THREE.BoxGeometry( 3.4, 0.5, 3.2 );
boxmaterial1 = new THREE.MeshFaceMaterial([new THREE.MeshBasicMaterial({color:0xC71585}),
										   new THREE.MeshBasicMaterial({color:0x2F4F4F}),
										   new THREE.MeshBasicMaterial({color:0x708090}),
										   new THREE.MeshBasicMaterial({color:0xD2B48C}),
										   new THREE.MeshBasicMaterial({color:0x2F4F4F}),
										   new THREE.MeshBasicMaterial({color:0xC71585})

										   ]);
box1 = new THREE.Mesh( boxgeometry1, boxmaterial1 );
//box1.rotation.x+=-0.8;
box1.rotation.y+=-1.1;
box1.rotation.z+=-3.8;
box1.position.set(-4,6,2);
PIEscene.add( box1 );

boxgeometry2 = new THREE.BoxGeometry( 3.4, 0.5, 3.2 );
boxmaterial2 = new THREE.MeshFaceMaterial([new THREE.MeshBasicMaterial({color:0xC71585}),
										   new THREE.MeshBasicMaterial({color:0x2F4F4F}),
										   new THREE.MeshBasicMaterial({color:0x2F4F4F}),
										   new THREE.MeshBasicMaterial({color:0xA0522D}),
										   new THREE.MeshBasicMaterial({color:0x2F4F4F}),
										   new THREE.MeshBasicMaterial({color:0xC71585})

										   ]);
box2 = new THREE.Mesh( boxgeometry2, boxmaterial2 );
box2.rotation.y+=-1.1;
box2.rotation.z+=-3.8;
box2.position.set(-4,-4,2);
PIEaddElement( box2 );

NailGeometry = new THREE.CylinderGeometry( 0.3, 0.3, 5, 8 );
NailMaterial = new THREE.MeshPhysicalMaterial( {color: 0x708090} );
Nail= new THREE.Mesh( NailGeometry, NailMaterial );
Nail.position.set(6,2.8,0);
PIEaddElement( Nail );

NailGeometry = new THREE.CylinderGeometry( 0.6, 0.6, 0.4, 30 );
NailBase=new THREE.Mesh(NailGeometry,NailMaterial);
NailBase.position.set(6,0.4,0);
NailBase.rotation.x+=0.3;
PIEaddElement(NailBase);

Sg1=new THREE.CylinderGeometry(0.23,0.23,0.13,30);
Sm1=new THREE.MeshBasicMaterial({color:'red'});
ST1=new THREE.Mesh(Sg1,Sm1);
ST1.position.set(-4.7,6,3.5);
ST1.rotation.x+=0.5;
PIEaddElement(ST1);

Sg11=new THREE.CylinderGeometry(0.15,0.15,0.37,30);
Sm11=new THREE.MeshBasicMaterial({color:0x2F4F4F});
ST11=new THREE.Mesh(Sg11,Sm11);
ST11.position.set(-4.7,6.2,3.5);
ST11.rotation.x+=0.5;
PIEaddElement(ST11);

Sg2=new THREE.CylinderGeometry(0.23,0.23,0.13,30);
Sm2=new THREE.MeshBasicMaterial({color:'black'});
ST2=new THREE.Mesh(Sg2,Sm2);
ST2.position.set(-3.2,6,3.4);
ST2.rotation.x+=0.5;
PIEaddElement(ST2);

Sg21=new THREE.CylinderGeometry(0.15,0.15,0.37,30);
Sm21=new THREE.MeshBasicMaterial({color:0x2F4F4F});
ST21=new THREE.Mesh(Sg21,Sm21);
ST21.position.set(-3.2,6.15,3.5);
ST21.rotation.x+=0.5;
PIEaddElement(ST21);


Lg1=new THREE.CylinderGeometry(0.23,0.23,0.13,30);
Lm1=new THREE.MeshBasicMaterial({color:'black'});
LT1=new THREE.Mesh(Lg1,Lm1);
LT1.position.set(-3.2,-3.5,3.4);
LT1.rotation.x+=0.3;
PIEaddElement(LT1);

Lg11=new THREE.CylinderGeometry(0.15,0.15,0.37,30);
Lm11=new THREE.MeshBasicMaterial({color:0x2F4F4F});
LT11=new THREE.Mesh(Lg11,Lm11);
LT11.position.set(-3.2,-3.2,3.4);
LT11.rotation.x+=0.3;
PIEaddElement(LT11);

Lg2=new THREE.CylinderGeometry(0.23,0.23,0.13,30);
Lm2=new THREE.MeshBasicMaterial({color:'red'});
LT2=new THREE.Mesh(Lg2,Lm2);
LT2.position.set(-4.9,-3.5,3.4);
LT2.rotation.x+=0.3;
PIEaddElement(LT2);

Lg22=new THREE.CylinderGeometry(0.15,0.15,0.37,30);
Lm22=new THREE.MeshBasicMaterial({color:0x2F4F4F});
LT22=new THREE.Mesh(Lg22,Lm22);
LT22.position.set(-4.9,-3.2,3.4);
LT22.rotation.x+=0.3;
PIEaddElement(LT22);


var e=4.6;
for(var i=0;i<25;i++)
{
	coilGeom= new THREE.CylinderGeometry( 0.07, 0.07, 0.6, 32 );
	coilMat= new THREE.MeshBasicMaterial( {color:0x800000} );
	Coil= new THREE.Mesh( coilGeom, coilMat );
	Coil.position.set(5.5,e,2);
	e-=0.155;
	Coil.rotation.z=Math.PI/2;
	PIEaddElement( Coil );

}

curve1 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3( 5.23, 4.7, 2 ),
										new THREE.Vector3( 0,10, 2 ),
										new THREE.Vector3( -3.3, 6.5, 2 )
										);


CurveGeometry1 = new THREE.Geometry();
CurveGeometry1.vertices = curve1.getPoints( 50 );
CurveMaterial1 = new THREE.LineBasicMaterial( { color : 0x800000,linewidth:4} );
FirstCurve = new THREE.Line(CurveGeometry1, CurveMaterial1 );			
PIEaddElement(FirstCurve);

curve2 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(5.2, 1, 2 ),
										new THREE.Vector3( 0, 2,2),
										new THREE.Vector3( -3.2, -3.3, 2 )
										);


			CurveGeometry2 = new THREE.Geometry();
			CurveGeometry2.vertices = curve2.getPoints( 50 );

			CurveMaterial2 = new THREE.LineBasicMaterial( { color : 0x800000,linewidth:4} );

			// Create the final object to add to the scene
			SecondCurve= new THREE.Line( CurveGeometry2, CurveMaterial2 );
			
			PIEaddElement(SecondCurve);

curve3 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-4.7,6.35,3.5),
										new THREE.Vector3( -9, 6.2,2),
										new THREE.Vector3( -7.8, 2.3, 12 )
										);


CurveGeometry3 = new THREE.Geometry();
CurveGeometry3.vertices = curve3.getPoints( 50 );
CurveMaterial3 = new THREE.LineBasicMaterial( { color : 0x800000,linewidth:4} );
ThirdCurve= new THREE.Line( CurveGeometry3, CurveMaterial3 );
PIEaddElement(ThirdCurve);

curve4 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-4.9,-3.1,3.4),
										new THREE.Vector3( -11, -1,2),
										new THREE.Vector3( -7.8, 1.4, 12 )
										);


CurveGeometry4 = new THREE.Geometry();
CurveGeometry4.vertices = curve4.getPoints( 50 );
CurveMaterial4 = new THREE.LineBasicMaterial( { color : 0x800000,linewidth:4} );
FourthCurve= new THREE.Line( CurveGeometry4, CurveMaterial4 );
PIEaddElement(FourthCurve);

batteryGeometry1=new THREE.BoxGeometry(0.5,1.7,0.5);
batteryMaterial1= new THREE.MeshFaceMaterial([new THREE.MeshPhysicalMaterial({color:0xC71585}),
										   new THREE.MeshPhysicalMaterial({color:0x8B4513}),
										   new THREE.MeshPhysicalMaterial({color:0x8B4513}),
										   new THREE.MeshPhysicalMaterial({color:0x8B4513}),
										   new THREE.MeshPhysicalMaterial({color:0x8B4513}),
										   new THREE.MeshPhysicalMaterial({color:0x8B4513})

										   ]);
										   
battery1=new THREE.Mesh(batteryGeometry1,batteryMaterial1);
battery1.position.set(-9,2,8);
battery1.rotation.x+=-6;
battery1.rotation.y+=9;
PIEaddElement(battery1);

geometry=new THREE.BoxGeometry(1.8,1.8,0.5);
	material = new THREE.MeshFaceMaterial([new THREE.MeshPhysicalMaterial({color:0x778899}),
										   new THREE.MeshPhysicalMaterial({color:0x2F4F4F}),
										   new THREE.MeshPhysicalMaterial({color:0x2F4F4F}),
										   new THREE.MeshPhysicalMaterial({color:0x2F4F4F}),
										   new THREE.MeshPhysicalMaterial({color:0x2F4F4F}),
										   new THREE.MeshPhysicalMaterial({color:0x2F4F4F})

										   ]);
	var cube=new THREE.Mesh(geometry,material);
	cube.rotation.x+=-6;
	cube.rotation.y+=9;
	cube.position.set(-10.5,2.2,6);
	PIEaddElement(cube);

BG=new THREE.CylinderGeometry(0.13,0.13,0.2);
BM=new THREE.MeshBasicMaterial({color:0x2F4F4F});
BT=new THREE.Mesh(BG,BM);
BT.position.set(-7.8,2.25,12.15);
BT.rotation.x=0.3;
//BT.rotation.z+=Math.PI/2;
PIEaddElement(BT);

BG=new THREE.CylinderGeometry(0.13,0.13,0.2);
BM=new THREE.MeshBasicMaterial({color:0x2F4F4F});
BT=new THREE.Mesh(BG,BM);
BT.position.set(-7.73,1.4,12.15);
BT.rotation.x+=1;
BT.rotation.z+=Math.PI/2;
PIEaddElement(BT);

LightG=new THREE.CylinderGeometry(0.55,0.55,0.15,30);
LightM=new THREE.MeshBasicMaterial({color:'grey'});
Light=new THREE.Mesh(LightG,LightM);
Light.position.set(-4.05,-3.5,3.4);
PIEaddElement(Light);

LightGroup=new THREE.Group();
ge = new THREE.CircleGeometry(0.5, 100);
    	ge.vertices.shift();

ci = new THREE.Line(
        ge,
        new THREE.LineDashedMaterial({color: 'grey',linewidth:2})
    );
ci.position.set(-4.05,-3,3.4);
LightGroup.add(ci);


LightCurve = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-4.2,-3.4,3.4),
										new THREE.Vector3( -4.2,-2.8,3.4),
										new THREE.Vector3( -4.5, -2.8, 3.4 )
										);


LcGeom1 = new THREE.Geometry();
LcGeom1.vertices = LightCurve.getPoints( 50 );
LcMat1 = new THREE.LineBasicMaterial( { color : 'rosybrown',linewidth:2} );
LightCurve1= new THREE.Line( LcGeom1, LcMat1 );
LightGroup.add(LightCurve1);

LightCurve = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-3.8,-3.4,3.4),
										new THREE.Vector3( -3.8,-2.8,3.4),
										new THREE.Vector3( -3.6, -2.75, 3.4 )
										);


LcGeom2 = new THREE.Geometry();
LcGeom2.vertices = LightCurve.getPoints( 50 );
LcMat2 = new THREE.LineBasicMaterial( { color : 'rosybrown',linewidth:2} );
LightCurve2= new THREE.Line( LcGeom2, LcMat2 );
LightGroup.add(LightCurve2);

ge1 = new THREE.CircleGeometry(0.05, 100);
    	ge1.vertices.shift();

ci1 = new THREE.Line(
        ge1,
        new THREE.LineDashedMaterial({color: 'rosybrown',linewidth:2})
    );
ci1.position.set(-4.15,-2.8,3.4);
LightGroup.add(ci1);

ge = new THREE.CircleGeometry(0.05, 100);
    	ge.vertices.shift();

ci2 = new THREE.Line(
        ge,
        new THREE.LineDashedMaterial({color: 'rosybrown',linewidth:2})
    );
ci2.position.set(-3.9,-2.8,3.4);
LightGroup.add(ci2);

LightCurve = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-4.5,-2.8,3.4),
										new THREE.Vector3( -4.3,-2.6,3.4),
										new THREE.Vector3( -4.1, -2.8, 3.4 )
										);


LcGeom1 = new THREE.Geometry();
LcGeom1.vertices = LightCurve.getPoints( 50 );
LcMat1 = new THREE.LineBasicMaterial( { color : 'rosybrown',linewidth:2} );
LightCurve3= new THREE.Line( LcGeom1, LcMat1 );
LightGroup.add(LightCurve3);

LightCurve = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-3.6,-2.75,3.4),
										new THREE.Vector3( -3.7,-2.65,3.4),
										new THREE.Vector3( -3.9, -2.75, 3.4 )
										);


LcGeom2 = new THREE.Geometry();
LcGeom2.vertices = LightCurve.getPoints( 50 );
LcMat2 = new THREE.LineBasicMaterial( { color : 'rosybrown',linewidth:2} );
LightCurve4= new THREE.Line( LcGeom2, LcMat2 );
LightGroup.add(LightCurve4);

var plane=new THREE.PlaneGeometry(0.25,0.05);
var pm=new THREE.MeshBasicMaterial({color:'rosybrown'});
pg=new THREE.Mesh(plane,pm);
pg.position.set(-4,-2.9,3);
LightGroup.add(pg);
LightGroup.recieveShadow=true;
PIEaddElement(LightGroup);
CreateField();

Terminal1=new THREE.Group();
PlusGeometry1=new THREE.PlaneGeometry(0.07,0.23);
PlusMaterial1=new THREE.MeshBasicMaterial({color:'black'});
Plus1=new THREE.Mesh(PlusGeometry1,PlusMaterial1);
Plus1.position.set(-2,2,2);
Terminal1.add(Plus1);

PlusGeometry2=new THREE.PlaneGeometry(0.07,0.23);
PlusMaterial2=new THREE.MeshBasicMaterial({color:0x000000});
Plus2=new THREE.Mesh(PlusGeometry2,PlusMaterial2);
Plus2.rotation.z=Math.PI/2;
Plus2.position.set(-2,2,2);
Terminal1.add(Plus2);
Terminal1.position.set(-5.6,0.09,12);
PIEaddElement(Terminal1);

MinusGeometry=new THREE.PlaneGeometry(0.07,0.27);
MinusMaterial=new THREE.MeshBasicMaterial({color:0x000000});
Minus=new THREE.Mesh(MinusGeometry,MinusMaterial);
Minus.rotation.z=Math.PI/2;
Minus.position.set(-8.07,1.4,12);
PIEaddElement(Minus);

/*Switch Section*/
ss = new THREE.CylinderGeometry( 0.5,0.5, 0.4,39 );
mm = new THREE.MeshBasicMaterial( { color:0x2F4F4F } );
n = new THREE.Mesh( ss, mm );
n.position.set(-3.85,6,5);
n.rotation.x-=0.3;
n.name="Naren";
PIEaddElement( n);

ss1 = new THREE.CylinderGeometry( 0.3,0.3, 0.2,39 );
mm1 = new THREE.MeshBasicMaterial( { color:'green' } );
n1 = new THREE.Mesh( ss1, mm1 );
n1.position.set(-3.8,6.2,6.1);
n1.rotation.x-=0.3;
n1.name="Naren";
PIEaddElement( n1);

CreateNails();


var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(-40, 60, -10);
spotLight.castShadow = true;
PIEaddElement(spotLight);



var loader1 = new THREE.FontLoader();
				loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


  	 			southGeometry = new THREE.TextGeometry( "Toggle", { font: font, size: 0.3, height: .1, curveSegments: 7});
  	 			southMaterial = new THREE.MeshBasicMaterial( { color:'black' });

  				toggle = new THREE.Mesh(southGeometry ,southMaterial );
				toggle.position.set(-3.6,5.5, 12) ;
  				PIEaddElement( toggle );})


				var loader1 = new THREE.FontLoader();
				loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


  	 			southGeometry = new THREE.TextGeometry( "Bulb", { font: font, size: 0.3, height: .1, curveSegments: 7});
  	 			southMaterial = new THREE.MeshBasicMaterial( { color:'white' });

  				bulb = new THREE.Mesh(southGeometry ,southMaterial );
				bulb.position.set(-3.6,-3, 12) ;
  				PIEaddElement( bulb );})

  				var loader1 = new THREE.FontLoader();
				loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


  	 			southGeometry = new THREE.TextGeometry( "Battery", { font: font, size: 0.2, height: .07, curveSegments: 7});
  	 			southMaterial = new THREE.MeshBasicMaterial( { color:'white' });

  				batt = new THREE.Mesh(southGeometry ,southMaterial );
				batt.position.set(-9.3,2.1, 12) ;
  				PIEaddElement( batt );})

  				var loader1 = new THREE.FontLoader();
				loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


  	 			southGeometry = new THREE.TextGeometry( "S", { font: font, size: 0.3, height: .1, curveSegments: 7});
  	 			southMaterial = new THREE.MeshBasicMaterial( { color:'white' });

  				pole1 = new THREE.Mesh(southGeometry ,southMaterial );
				pole1.position.set(6,0.5, -4) ;
  				PIEaddElement( pole1 );})

  				var loader1 = new THREE.FontLoader();
				loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


  	 			southGeometry = new THREE.TextGeometry( "N", { font: font, size: 0.3, height: .1, curveSegments: 7});
  	 			southMaterial = new THREE.MeshBasicMaterial( { color:'white' });

  				pole2 = new THREE.Mesh(southGeometry ,southMaterial );
				pole2.position.set(6,4.5, -4) ;
  				PIEaddElement( pole2 );})

  						a1 = new THREE.Geometry();
						a1.vertices.push(new THREE.Vector3(0, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0.2, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0, 0.2, 0.1));
						a1.faces.push(new THREE.Face3(0, 1, 2));


						a2 = new THREE.MeshBasicMaterial({color: 'yellow', side: THREE.DoubleSide})
						a3 = new THREE.Mesh(a1, a2);
						a3.rotation.z=Math.PI/3.8;
						a3.position.set(3.67,3.7,-4);

						PIEaddElement(a3);

						a1 = new THREE.Geometry();
						a1.vertices.push(new THREE.Vector3(0, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0.2, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0, 0.2, 0.1));
						a1.faces.push(new THREE.Face3(0, 1, 2));


						a2 = new THREE.MeshBasicMaterial({color: 'yellow', side: THREE.DoubleSide})
						a4 = new THREE.Mesh(a1, a2);
						a4.rotation.z=Math.PI/3.8;
						a4.position.set(4,3.7,-4);

						PIEaddElement(a4);

						a1 = new THREE.Geometry();
						a1.vertices.push(new THREE.Vector3(0, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0.2, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0, 0.2, 0.1));
						a1.faces.push(new THREE.Face3(0, 1, 2));


						a2 = new THREE.MeshBasicMaterial({color: 'yellow', side: THREE.DoubleSide})
						a5 = new THREE.Mesh(a1, a2);
						a5.rotation.z=Math.PI/3.8;
						a5.position.set(4.23,3.7,-4);

						PIEaddElement(a5);
						a1 = new THREE.Geometry();
						a1.vertices.push(new THREE.Vector3(0, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0.2, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0, 0.2, 0.1));
						a1.faces.push(new THREE.Face3(0, 1, 2));


						a2 = new THREE.MeshBasicMaterial({color: 'yellow', side: THREE.DoubleSide})
						a6 = new THREE.Mesh(a1, a2);
						a6.rotation.z=Math.PI/3.8;
						a6.position.set(5.43,3.7,-4);

						PIEaddElement(a6);
						a1 = new THREE.Geometry();
						a1.vertices.push(new THREE.Vector3(0, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0.2, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0, 0.2, 0.1));
						a1.faces.push(new THREE.Face3(0, 1, 2));


						a2 = new THREE.MeshBasicMaterial({color: 'yellow', side: THREE.DoubleSide})
						a7 = new THREE.Mesh(a1, a2);
						a7.rotation.z=Math.PI/3.8;
						a7.position.set(5.63,3.7,-4);

						PIEaddElement(a7);
						a1 = new THREE.Geometry();
						a1.vertices.push(new THREE.Vector3(0, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0.2, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0, 0.2, 0.1));
						a1.faces.push(new THREE.Face3(0, 1, 2));


						a2 = new THREE.MeshBasicMaterial({color: 'yellow', side: THREE.DoubleSide})
						a8 = new THREE.Mesh(a1, a2);
						a8.rotation.z=Math.PI/3.8;
						//a8.rotation.z=Math.PI/-1.3;
						a8.position.set(5.9,3.7,-4);

						PIEaddElement(a8);

						a1 = new THREE.Geometry();
						a1.vertices.push(new THREE.Vector3(0, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0.2, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0, 0.2, 0.1));
						a1.faces.push(new THREE.Face3(0, 1, 2));


						a2 = new THREE.MeshBasicMaterial({color: 'yellow', side: THREE.DoubleSide})
						a9 = new THREE.Mesh(a1, a2);
						a9.rotation.z=Math.PI/-1.3;
						a9.position.set(5,3.7,-4);
						PIEaddElement(a9);

						a1 = new THREE.Geometry();
						a1.vertices.push(new THREE.Vector3(0, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0.2, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0, 0.2, 0.1));
						a1.faces.push(new THREE.Face3(0, 1, 2));


						a2 = new THREE.MeshBasicMaterial({color: 'yellow', side: THREE.DoubleSide})
						a10 = new THREE.Mesh(a1, a2);
						a10.rotation.z=Math.PI/-1.3;
						a10.position.set(5,3.4,-4);

						PIEaddElement(a10);

						a1 = new THREE.Geometry();
						a1.vertices.push(new THREE.Vector3(0, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0.2, 0, 0.1));
						a1.vertices.push(new THREE.Vector3(0, 0.2, 0.1));
						a1.faces.push(new THREE.Face3(0, 1, 2));


						a2 = new THREE.MeshBasicMaterial({color: 'yellow', side: THREE.DoubleSide})
						a11 = new THREE.Mesh(a1, a2);
						a11.rotation.z=Math.PI/-1.3;
						a11.position.set(5,3.1,-4);

						PIEaddElement(a11);


						cg=new THREE.PlaneGeometry(4,0.1);
						cm=new THREE.MeshBasicMaterial({color:'black'});
						cmm=new THREE.Mesh(cg,cm);
						cmm.position.set(11,4,0);
						PIEaddElement(cmm);

						cg=new THREE.PlaneGeometry(4,0.1);
						cm=new THREE.MeshBasicMaterial({color:'black'});
						cmm=new THREE.Mesh(cg,cm);
						cmm.position.set(9,5.95,0);
						cmm.rotation.z=Math.PI/2;
						PIEaddElement(cmm);

						cg=new THREE.PlaneGeometry(5.6,0.1);
						cm=new THREE.MeshBasicMaterial({color:'black'});
						cmm=new THREE.Mesh(cg,cm);
						cmm.position.set(11.05,6,0);
						cmm.rotation.z=Math.PI/-4;
						PIEaddElement(cmm);

						geom=new THREE.SphereGeometry(0.15,50);
						material=new THREE.MeshBasicMaterial({color:'red'});
						sphere1=new THREE.Mesh(geom,material);
						sphere1.position.set(9.4,5,-4);
						sphere1.visible=false;
						PIEaddElement(sphere1);

						geom=new THREE.SphereGeometry(0.15,50);
						material=new THREE.MeshBasicMaterial({color:'red'});
						sphere2=new THREE.Mesh(geom,material);
						sphere2.position.set(10,5,-4);
						sphere2.visible=false;
						PIEaddElement(sphere2);
						
						geom=new THREE.SphereGeometry(0.15,50);
						material=new THREE.MeshBasicMaterial({color:'red'});
						sphere3=new THREE.Mesh(geom,material);
						sphere3.position.set(10.6,5,-4);
						sphere3.visible=false;
						PIEaddElement(sphere3);

						geom=new THREE.SphereGeometry(0.15,50);
						material=new THREE.MeshBasicMaterial({color:'red'});
						sphere4=new THREE.Mesh(geom,material);
						sphere4.position.set(11.2,5,-4);
						sphere4.visible=false;
						PIEaddElement(sphere4);

						var loader1 = new THREE.FontLoader();
				loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


  	 			southGeometry = new THREE.TextGeometry( "Current-Flow", { font: font, size: 0.5, height: .1, curveSegments: 7});
  	 			southMaterial = new THREE.MeshBasicMaterial( { color:'black' });

  				flow = new THREE.Mesh(southGeometry ,southMaterial );
				flow.position.set(9,3.2, -4) ;
  				PIEaddElement( flow );})

  				var loader1 = new THREE.FontLoader();
				loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


  	 			southGeometry = new THREE.TextGeometry( "No Current-Flow", { font: font, size: 0.5, height: .1, curveSegments: 7});
  	 			southMaterial = new THREE.MeshBasicMaterial( { color:'black' });

  				flow1 = new THREE.Mesh(southGeometry ,southMaterial );
				flow1.position.set(9,3.2, -4) ;
  				PIEaddElement( flow1 );})
var size = 5;
var divisions = 10;


window.addEventListener("click",even);
PIEstopButton.addEventListener("click",stopit);
PIEstartButton.addEventListener("click",startit);

		PIEsetAreaOfInterest(10,10, -12,-8);
		PIEcamera.position.x=-2.5;
}




function startit()
{
			
			count=1;
			PIErender();
			attraction();
			PIEstartAnimation();

}


function even(event) {

 var vector = new THREE.Vector3(( event.clientX / window.innerWidth ) * 2 - 1, -( event.clientY / window.innerHeight ) * 2 +1);
    vector = vector.unproject(PIEcamera);

    var raycaster = new THREE.Raycaster(PIEcamera.position, vector.sub(PIEcamera.position).normalize());
    
    var intersects = raycaster.intersectObjects(PIEscene.children,true);
    for(var i=0;i<intersects.length;i++)
    {
		 	var c=intersects[i].object.name.charAt(0);
		 	if(c=='N')
		 		break;
	}
	
	if(c=='N' && count==0)
	{
		
			count=1;
			attraction();
			PIEstartAnimation();
		
	}

	else if(c=='N' && count==1)
	{
			
			sphere1.visible=false;
			sphere2.visible=false;
			sphere3.visible=false;
			sphere4.visible=false;
			sphere1.position.z = -4;
			sphere2.position.z = -4;
			sphere3.position.z = -4;
			sphere4.position.z = -4;
			a3.position.z=-4;
			a4.position.z=-4;
			a5.position.z=-4;
			a6.position.z=-4;
			a7.position.z=-4;
			a8.position.z=-4;
			a9.position.z=-4;
			a10.position.z=-4;
			a11.position.z=-4;
			pole1.position.set(6,4.5, -4) ;
			pole2.position.set(6,4.5, -4) ;
			Light.material.color.set("grey");
			n1.material.color.set("green");
			count=0;
			First.position.z=-4;
			Second.position.z=-4;
			Third.position.z=-4;
			Fourth.position.z=-4;
			Fifth.position.z=-4;
			Last.position.z=-4;
			FirstNail.position.set(0,0,0);
			SecondNail.position.set(0,0,0);
			ThirdNail.position.set(0,0,0);
			FourthNail.position.set(0,0,0);
			FifthNail.position.set(0,0,0);
			SixthNail.position.set(0,0,0);
			LightCurve1.material.color.set("rosybrown");
			LightCurve2.material.color.set("rosybrown");
			LightCurve3.material.color.set("rosybrown");
			LightCurve4.material.color.set("rosybrown");
			ci.material.color.set("rosybrown");
			ci1.material.color.set("rosybrown");
			ci2.material.color.set("rosybrown");
			pg.material.color.set("rosybrown");
			flow.position.z=-4;
			flow1.position.z=0;
			PIErender();
			PIEstopAnimation();
		
	}
}




function attraction()
{
				a=FirstNail.position.y;
				while(a<=1.8)
				{
					FirstNail.position.y+=0.1;
					a+=0.1;
				}
				FirstNail.rotation.x=Math.PI/-7;
				a=SecondNail.position.y;
				while(a<=1.8)
				{
					SecondNail.position.y+=0.1;
					a+=0.1;
				}
				SecondNail.rotation.x=Math.PI/-9;
				a=ThirdNail.position.y;
				while(a<=1.8)
				{
					ThirdNail.position.y+=0.1;
					a+=0.1;
				}
				ThirdNail.rotation.x=Math.PI/-9;
				ThirdNail.rotation.z=Math.PI/-45;
				a=FourthNail.position.y;
				while(a<=1.9)
				{
					FourthNail.position.y+=0.1;
					a+=0.1;
				}
				FourthNail.rotation.x=Math.PI/-30;
				FourthNail.rotation.z=Math.PI/-60;
				a=FifthNail.position.y;
				while(a<=1.8)
				{
					FifthNail.position.y+=0.1;
					a+=0.1;
				}
				FifthNail.rotation.x=Math.PI/-9;
				FifthNail.rotation.z=Math.PI/-50;

				a=SixthNail.position.y;
				while(a<=1.8)
				{
					SixthNail.position.y+=0.1;
					a+=0.1;
				}
				SixthNail.position.y+=0.5;

				SixthNail.rotation.x=Math.PI/-9;
				SixthNail.rotation.z=Math.PI/-40;


}

var x=0;



function updateExperimentElements(t,dt) {
	if(t!=0)
	{
		a3.position.z=4;
		a4.position.z=4;
		a5.position.z=4;
		a6.position.z=4;
		a7.position.z=4;
		a8.position.z=4;
		a9.position.z=4;
		a10.position.z=4;
		a11.position.z=4;

		
		sphere1.visible = true;
				sphere2.visible = true;
				sphere3.visible = true;
				sphere4.visible = true;
				sphere1.position.z=0;
				sphere2.position.z=0;
				sphere3.position.z=0;
				sphere4.position.z=0;
		
		flow.position.z=0;
		flow1.position.z=-4;

		if(sphere1.position.x <= 9.7)
		{
			sphere1.position.x += 0.08;
			sphere2.position.x += 0.08;
			sphere3.position.x += 0.08;
			sphere4.position.x += 0.08;
		}

		else if(sphere1.position.x > 9.7)
		{

			sphere1.position.x = 9.4;
			sphere2.position.x = 10;
			sphere3.position.x = 10.6;
			sphere4.position.x = 11.2;

		}



		if(a3.position.y >= 1.5)
		{
			a3.position.y -= 0.1
		}
		else a3.position.y=4.5;


		if(a4.position.y >= 1.5)
		{
			a4.position.y -= 0.1
		}
		else a4.position.y=4.5;


		if(a5.position.y >= 1.5)
		{
			a5.position.y -= 0.1
		}
		else a5.position.y=4.5;

		if(a6.position.y >= 1.5)
		{
			a6.position.y -= 0.1
		}
		else a6.position.y=4.5;


		if(a7.position.y >= 1.5)
		{
			a7.position.y -= 0.1
		}
		else a7.position.y=4.5;


		if(a8.position.y >= 1.5)
		{
			a8.position.y -= 0.1
		}
		else a8.position.y=4.5;


		if(a9.position.y <= 4.5)
		{
			a9.position.y += 0.1
		}
		else a9.position.y=2.8;


		if(a10.position.y <= 4.5)
		{
			a10.position.y += 0.1
		}
		else a10.position.y=2.8;


		if(a11.position.y <= 4.5)
		{
			a11.position.y += 0.1
		}
		else a11.position.y=2.8;
			
			a=FirstNail.position.y;
					while(a<=1.8)
					{
						FirstNail.position.y+=0.1;
						a+=0.1;
					}
					FirstNail.position.x=0.95;
					a=SecondNail.position.y;
					while(a<=1.8)
					{
						SecondNail.position.y+=0.1;
						a+=0.1;
					}
					SecondNail.position.x=0.7;
					a=ThirdNail.position.y;
					while(a<=1.8)
					{
						ThirdNail.position.y+=0.1;
						a+=0.1;
					}
					ThirdNail.position.x=0.45;
					a=FourthNail.position.y;
					while(a<=1.8)
					{
						FourthNail.position.y+=0.1;
						a+=0.1;
					}
					FourthNail.position.x=0.15;
					a=FifthNail.position.y;
					while(a<=1.8)
					{
						FifthNail.position.y+=0.1;
						a+=0.1;
					}
					FifthNail.position.x=-0.3;

					a=SixthNail.position.y;
					while(a<=1.8)
					{
						SixthNail.position.y+=0.1;
						a+=0.1;
					}
					SixthNail.position.x=-0.7;


			LightGroup.power=7600;
			LightGroup.intensity=0.4;
			pole1.position.set(6,0.5, 5) ;
			pole2.position.set(6,4.5, 5) ;
			Light.material.color.set("yellow");
			n1.material.color.set("red");
			LightCurve1.material.color.set("yellow");
			LightCurve2.material.color.set("yellow");
			LightCurve3.material.color.set("yellow");
			LightCurve4.material.color.set("yellow");
			ci.material.color.set("yellow");
			ci1.material.color.set("yellow");
			ci2.material.color.set("yellow");
			pg.material.color.set("yellow");
			First.position.z=0;
			Second.position.z=0;
			Third.position.z=0;
			Fourth.position.z=0;
			Fifth.position.z=0;
			Last.position.z=0;
	}


	}






function CreateField() {
First=new THREE.Group();
curve1 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3( 5.4, 5, 2 ),
										new THREE.Vector3( 5.4,5.5, 2 ),
										new THREE.Vector3( 5, 5.4, 2 )
										);


FieldGeometry1 = new THREE.Geometry();
FieldGeometry1.vertices = curve1.getPoints( 50 );
FieldMaterial1 = new THREE.LineBasicMaterial( { color : 0x663399,linewidth:2} );
FieldCurve1 = new THREE.Line(FieldGeometry1, FieldMaterial1 );			
First.add(FieldCurve1);

curve1 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3( 5, 5.4, 2 ),
										new THREE.Vector3( 4.53,4.9, 2 ),
										new THREE.Vector3( 4.78, 0.8, 2 )
										);


FieldGeometry1 = new THREE.Geometry();
FieldGeometry1.vertices = curve1.getPoints( 50 );
FieldMaterial1 = new THREE.LineBasicMaterial( { color : 0x663399,linewidth:2} );
FieldCurve2 = new THREE.Line(FieldGeometry1, FieldMaterial1 );			
First.add(FieldCurve2);

curve1 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3( 4.78, 0.8, 2 ),
										new THREE.Vector3( 5.2,0.3, 2 ),
										new THREE.Vector3( 5.4, 0.9, 2 )
										);


FieldGeometry1 = new THREE.Geometry();
FieldGeometry1.vertices = curve1.getPoints( 50 );
FieldMaterial1 = new THREE.LineBasicMaterial( { color : 0x663399,linewidth:2} );
FieldCurve3 = new THREE.Line(FieldGeometry1, FieldMaterial1 );			
First.add(FieldCurve3);
First.position.z=-5;
PIEaddElement(First);

Second=new THREE.Group();
curve1 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3( 5.4, 5, 2 ),
										new THREE.Vector3( 5.4,5.5, 2 ),
										new THREE.Vector3( 5, 5.6, 2 )
										);


FieldGeometry1 = new THREE.Geometry();
FieldGeometry1.vertices = curve1.getPoints( 50 );
FieldMaterial1 = new THREE.LineBasicMaterial( { color : 0x663399,linewidth:2} );
FieldCurve4 = new THREE.Line(FieldGeometry1, FieldMaterial1 );			
Second.add(FieldCurve4);

curve1 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3( 5, 5.6, 2 ),
										new THREE.Vector3( 4.1,4.9, 2 ),
										new THREE.Vector3( 4.6, 0.6, 2 )
										);


FieldGeometry1 = new THREE.Geometry();
FieldGeometry1.vertices = curve1.getPoints( 50 );
FieldMaterial1 = new THREE.LineBasicMaterial( { color : 0x663399,linewidth:2} );
FieldCurve5 = new THREE.Line(FieldGeometry1, FieldMaterial1 );			
Second.add(FieldCurve5);

curve1 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3( 4.6, 0.6, 2 ),
										new THREE.Vector3( 5.2,0, 2 ),
										new THREE.Vector3( 5.4, 0.9, 2 )
										);


FieldGeometry1 = new THREE.Geometry();
FieldGeometry1.vertices = curve1.getPoints( 50 );
FieldMaterial1 = new THREE.LineBasicMaterial( { color : 0x663399,linewidth:2} );
FieldCurve6 = new THREE.Line(FieldGeometry1, FieldMaterial1 );			
Second.add(FieldCurve6);
Second.position.z=-5;
PIEaddElement(Second);


Third=new THREE.Group();
curve1 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3( 5.4, 5, 2 ),
										new THREE.Vector3( 5.4,5.9, 2 ),
										new THREE.Vector3( 4.7, 5.8, 2 )
										);


FieldGeometry1 = new THREE.Geometry();
FieldGeometry1.vertices = curve1.getPoints( 50 );
FieldMaterial1 = new THREE.LineBasicMaterial( { color : 0x663399,linewidth:2} );
FieldCurve7 = new THREE.Line(FieldGeometry1, FieldMaterial1 );			
Third.add(FieldCurve7);

curve1 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3( 4.7, 5.8, 2 ),
										new THREE.Vector3( 3.8,4.9, 2 ),
										new THREE.Vector3( 4.3, 0.6, 2 )
										);


FieldGeometry1 = new THREE.Geometry();
FieldGeometry1.vertices = curve1.getPoints( 50 );
FieldMaterial1 = new THREE.LineBasicMaterial( { color : 0x663399,linewidth:2} );
FieldCurve8 = new THREE.Line(FieldGeometry1, FieldMaterial1 );			
Third.add(FieldCurve8);

curve1 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3( 4.3, 0.6, 2 ),
										new THREE.Vector3( 5.2,-0.5, 2 ),
										new THREE.Vector3( 5.4, 0.9, 2 )
										);


FieldGeometry1 = new THREE.Geometry();
FieldGeometry1.vertices = curve1.getPoints( 50 );
FieldMaterial1 = new THREE.LineBasicMaterial( { color : 0x663399,linewidth:2} );
FieldCurve9 = new THREE.Line(FieldGeometry1, FieldMaterial1 );			
Third.add(FieldCurve9);
Third.position.z=-5;
PIEaddElement(Third);


Fourth=new THREE.Group();

curve1 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3( 5.4, 5, 2 ),
										new THREE.Vector3( 5.7,5.8, 2 ),
										new THREE.Vector3( 6, 4.9, 2 )
										);


FieldGeometry1 = new THREE.Geometry();
FieldGeometry1.vertices = curve1.getPoints( 50 );
FieldMaterial1 = new THREE.LineBasicMaterial( { color : 0x663399,linewidth:2} );
FieldCurve11 = new THREE.Line(FieldGeometry1, FieldMaterial1 );			
Fourth.add(FieldCurve11);

curve1 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3( 6, 4.9, 2 ),
										new THREE.Vector3( 6,1, 2 ),
										new THREE.Vector3( 6, 0.8, 2 )
										);


FieldGeometry1 = new THREE.Geometry();
FieldGeometry1.vertices = curve1.getPoints( 50 );
FieldMaterial1 = new THREE.LineBasicMaterial( { color : 0x663399,linewidth:2} );
FieldCurve12 = new THREE.Line(FieldGeometry1, FieldMaterial1 );			
Fourth.add(FieldCurve12);

curve1 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3( 6, 0.8, 2 ),
										new THREE.Vector3( 5.5,0.1, 2 ),
										new THREE.Vector3( 5.5, 0.9, 2 )
										);


FieldGeometry1 = new THREE.Geometry();
FieldGeometry1.vertices = curve1.getPoints( 50 );
FieldMaterial1 = new THREE.LineBasicMaterial( { color : 0x663399,linewidth:2} );
FieldCurve13 = new THREE.Line(FieldGeometry1, FieldMaterial1 );			
Fourth.add(FieldCurve13);
Fourth.position.z=-5;
PIEaddElement(Fourth);



Fifth=new THREE.Group();
curve1 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3( 5.4, 5, 2 ),
										new THREE.Vector3( 5.7,6.3, 2 ),
										new THREE.Vector3( 6.25, 4.8, 2 )
										);


FieldGeometry1 = new THREE.Geometry();
FieldGeometry1.vertices = curve1.getPoints( 50 );
FieldMaterial1 = new THREE.LineBasicMaterial( { color : 0x663399,linewidth:2} );
FieldCurve21 = new THREE.Line(FieldGeometry1, FieldMaterial1 );			
Fifth.add(FieldCurve21);

curve1 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3( 6.25, 4.8, 2 ),
										new THREE.Vector3( 6.25,1, 2 ),
										new THREE.Vector3( 6.3, 0.8, 2 )
										);


FieldGeometry1 = new THREE.Geometry();
FieldGeometry1.vertices = curve1.getPoints( 50 );
FieldMaterial1 = new THREE.LineBasicMaterial( { color : 0x663399,linewidth:2} );
FieldCurve22 = new THREE.Line(FieldGeometry1, FieldMaterial1 );		
Fifth.add(FieldCurve22);	

curve1 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3( 6.3, 0.8, 2 ),
										new THREE.Vector3( 5.9,-0.3, 2 ),
										new THREE.Vector3( 5.3, 0.9, 2 )
										);


FieldGeometry1 = new THREE.Geometry();
FieldGeometry1.vertices = curve1.getPoints( 50 );
FieldMaterial1 = new THREE.LineBasicMaterial( { color : 0x663399,linewidth:2} );
FieldCurve23 = new THREE.Line(FieldGeometry1, FieldMaterial1 );	
Fifth.add(FieldCurve23);
Fifth.position.z=-5;		
PIEaddElement(Fifth);







Last=new THREE.Group();

curve1 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3( 5.4, 5, 2 ),
										new THREE.Vector3( 6,6.75, 2 ),
										new THREE.Vector3( 6.5, 4.8, 2 )
										);


FieldGeometry1 = new THREE.Geometry();
FieldGeometry1.vertices = curve1.getPoints( 50 );
FieldMaterial1 = new THREE.LineBasicMaterial( { color : 0x663399,linewidth:2} );
FieldCurve31 = new THREE.Line(FieldGeometry1, FieldMaterial1 );			
Last.add(FieldCurve31);

curve1 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3( 6.5, 4.8, 2 ),
										new THREE.Vector3( 6.5,1, 2 ),
										new THREE.Vector3( 6.5, 0.8, 2 )
										);


FieldGeometry1 = new THREE.Geometry();
FieldGeometry1.vertices = curve1.getPoints( 50 );
FieldMaterial1 = new THREE.LineBasicMaterial( { color : 0x663399,linewidth:2} );
FieldCurve32 = new THREE.Line(FieldGeometry1, FieldMaterial1 );			
Last.add(FieldCurve32);

curve1 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3( 6.5, 0.8, 2 ),
										new THREE.Vector3( 5.9,-0.6, 2 ),
										new THREE.Vector3( 5.3, 0.9, 2 )
										);


FieldGeometry1 = new THREE.Geometry();
FieldGeometry1.vertices = curve1.getPoints( 50 );
FieldMaterial1 = new THREE.LineBasicMaterial( { color : 0x663399,linewidth:2} );
FieldCurve33 = new THREE.Line(FieldGeometry1, FieldMaterial1 );	
Last.add(FieldCurve33);

Last.position.z=-5;
PIEaddElement(Last);

}

function resetExperiment() {
			a3.position.z=-4;
			a4.position.z=-4;
			a5.position.z=-4;
			a6.position.z=-4;
			a7.position.z=-4;
			a8.position.z=-4;
			a9.position.z=-4;
			a10.position.z=-4;
			a11.position.z=-4;
			pole1.position.set(6,4.5, -4) ;
			pole2.position.set(6,4.5, -4) ;
			Light.material.color.set("grey");
			n1.material.color.set("green");
			First.position.z=-4;
			Second.position.z=-4;
			Third.position.z=-4;
			Fourth.position.z=-4;
			Fifth.position.z=-4;
			Last.position.z=-4;
			FirstNail.position.set(0,0,0);
			SecondNail.position.set(0,0,0);
			ThirdNail.position.set(0,0,0);
			FourthNail.position.set(0,0,0);
			FifthNail.position.set(0,0,0);
			SixthNail.position.set(0,0,0);
			LightCurve1.material.color.set("rosybrown");
			LightCurve2.material.color.set("rosybrown");
			LightCurve3.material.color.set("rosybrown");
			LightCurve4.material.color.set("rosybrown");
			ci.material.color.set("rosybrown");
			ci1.material.color.set("rosybrown");
			ci2.material.color.set("rosybrown");
			pg.material.color.set("rosybrown");
			sphere1.position.z = -4;
			sphere2.position.z = -4;
			sphere3.position.z = -4;
			sphere4.position.z = -4;
			flow.position.z=-4;
			flow1.position.z=-4;
			
	
}

function stopit() {
			count=0;
			a3.position.z=-4;
			a4.position.z=-4;
			a5.position.z=-4;
			a6.position.z=-4;
			a7.position.z=-4;
			a8.position.z=-4;
			a9.position.z=-4;
			a10.position.z=-4;
			a11.position.z=-4;
			sphere1.visible=false;
			sphere2.visible=false;
			sphere3.visible=false;
			sphere4.visible=false;
			sphere1.position.z = -4;
			sphere2.position.z = -4;
			sphere3.position.z = -4;
			sphere4.position.z = -4;
			flow.position.z=-4;
			flow1.position.z=0;
			pole1.position.set(6,4.5, -4) ;
			pole2.position.set(6,4.5, -4) ;
			Light.material.color.set("grey");
			n1.material.color.set("green");
			First.position.z=-4;
			Second.position.z=-4;
			Third.position.z=-4;
			Fourth.position.z=-4;
			Fifth.position.z=-4;
			Last.position.z=-4;
			FirstNail.position.set(0,0,0);
			SecondNail.position.set(0,0,0);
			ThirdNail.position.set(0,0,0);
			FourthNail.position.set(0,0,0);
			FifthNail.position.set(0,0,0);
			SixthNail.position.set(0,0,0);
			LightCurve1.material.color.set("rosybrown");
			LightCurve2.material.color.set("rosybrown");
			LightCurve3.material.color.set("rosybrown");
			LightCurve4.material.color.set("rosybrown");
			ci.material.color.set("rosybrown");
			ci1.material.color.set("rosybrown");
			ci2.material.color.set("rosybrown");
			pg.material.color.set("rosybrown");
			n1.material.color.set("green");
			PIErender();
			PIEstopAnimation();
	
}
