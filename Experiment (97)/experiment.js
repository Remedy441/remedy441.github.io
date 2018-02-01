var batteryMaterial1,batteryGeometry1,battery1,battery2,batteryGeometry2,batteryMaterial2,FirstCurve,SecondCurve,ThirdCurve,FourthCurve;
var boxgeometry3,boxmaterial3,box3;
var boxgeometry, boxmaterial,box1,boxgeom,boxmat,box2,NailGeometry,NailMaterial,Nail,NailBase,Sg1,Sg2,Sm1,Sm2,ST1,ST2,count=0;
var count=0,c=1;
var v1=0,v2=0,v3=0,v4=0,v5=0,v6=0,v7=0,v8=0;
var first=0,second=0,third=0,fourth=0,fifth=0,sixth=0,seven=0;
var cone,sol;
var helpContent,x;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Electricity Through Different Liquids Experiment Help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows the conductivity of different liquids</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<h4>You can Select the particular liquid by clicking on the check boxes which are located in control panel.</h4>";
    helpContent = helpContent + "<li>StartButton&nbsp;&nbsp;:&nbsp;Starts The animation by supplying current.</li>";
    helpContent = helpContent + "<li>StopButton&nbsp;&nbsp;:&nbsp;Starts The animation.</li>";
    helpContent = helpContent + "<p>Once The Experiment is started you can toggle it by the Switch which is provided</p>";
     helpContent = helpContent + "<p>If the Switch is in red color that indicates that the circuit is closed.</p>";
     helpContent = helpContent + "<p>If the Switch is in black color that indicates that the circuit is open.</p>";
    helpContent = helpContent + "<li>Reset&nbsp;&nbsp;:&nbsp;Sets the circuit and all ther element's position original values.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Electricity Through Different Liquids experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows the conductivity of different liquids</p>";
    infoContent = infoContent + "<h3>Electrolytes</h3>";
    infoContent = infoContent + "<p>We know that, metals conduct electricity by the means of mobile electrons.  </p>";
    infoContent = infoContent + "<p>The outermost electrons in metals are loosely held due to which they can move from atom to atom. This is why metals are excellent conductors of electricity.</p>";
    infoContent = infoContent + "<p>Liquids on the other hand conduct electricity by other means. Unlike in metals, the chemical bonding in liquids does not allow for electrons to move freely.</p>";
    infoContent = infoContent + "<p>This means we have to introduce charges into the water before it can start conducting.  Certain compounds (ionic Compounds) dissolve in water, they do so by dissociating or breaking up their bonds.</p>";
    infoContent = infoContent + "<p>Compounds that dissociates into ions in water are called Ionic Compounds.</p>";
    infoContent = infoContent + "<h3>Salt Water</h3>";
    infoContent = infoContent + "<p>Salt molecules are made of sodium ions and chlorine ions. (An ion is an atom that has an electrical charge because it has either gained or lost an electron.) When you put salt in water, the water molecules pull the sodium and chlorine ions apart so they are floating freely. These ions are what carry electricity through water.</p>";
    infoContent = infoContent + "<h3>Honey:</h3>";
    infoContent = infoContent + "<p>Honey is a poor conductor because it is made largely of sugars called fructose and glucose and some water. Conductors of electricity need mobile electrons or ions to carry the charge and sugars do not have either one. Milk is a good conductor of electricity because it contains water and acid.</p>";
    infoContent = infoContent + "<h3>Mercury</h3>";
    infoContent = infoContent + "<p>The element mercury conducts electricity. It can be used to construct position dependent switches that are silent.Mercury is a metal that exists as a liquid at room temperature. It derives its chemical symbol, Hg, from the Greek word hydrargyrum,which means liquid silver</p>";
    infoContent = infoContent + "<h3>Kerosene</h3>";
    infoContent = infoContent + "<p>Kerosene is a hydrocarbon liquid where the atoms are joined by covalent bonds. Since there are no ions present in the liquid, there is nothing to conduct electricity.</p>";
    infoContent = infoContent + "<h3>Oil</h3>";
    infoContent = infoContent + "<p>Oils conduct electricity minimally under normal conditions, which makes them useful as insulators. The extent of electrical conductivity depends on the concentration of impurities. The presence of salts and other substances generally increases the electrical conductivity of oil.</p>";
    infoContent = infoContent + "<h3>PureWater</h3>";
    infoContent = infoContent + "<p>Pure water does not conduct electricity. It is an insulator that has a high resistance and a low conductivity. Electrical current does not move through water easily.</p>";
    
    PIEupdateInfo(infoContent);
}

function modify() {

	if(first==1)
	{

		v2=0,v3=0,v4=0,v5=0,v6=0,v7=0,v8=0;
		a={

			one:true,
			two:false,
			three:false,
			four:false,
			five:false,
			six:false,
			seven:false,
			eigth:false

		}
	}

	else if(second==1)
	{
		v1=0,v3=0,v4=0,v5=0,v6=0,v7=0,v8=0;


		a={

			one:false,
			two:true,
			three:false,
			four:false,
			five:false,
			six:false,
			seven:false,
			eigth:false

		}
	}
	else if(third==1)
	{
		v1=0,v2=0,v4=0,v5=0,v6=0,v7=0,v8=0;
		a={

			one:false,
			two:false,
			three:true,
			four:false,
			five:false,
			six:false,
			seven:false,
			eigth:false

		}
	}
	else if(fourth==1)
	{
		v1=0,v2=0,v3=0,v5=0,v6=0,v7=0,v8=0;
		a={

			one:false,
			two:false,
			three:false,
			four:true,
			five:false,
			six:false,
			seven:false,
			eigth:false

		}
	}
	else if(fifth==1)
	{
		v1=0,v2=0,v3=0,v4=0,v6=0,v7=0,v8=0;

		a={

			one:false,
			two:false,
			three:false,
			four:false,
			five:true,
			six:false,
			seven:false,
			eigth:false

		}
	}
	else if(sixth==1)
	{

		v1=0,v2=0,v3=0,v4=0,v5=0,v7=0,v8=0;

		a={

			one:false,
			two:false,
			three:false,
			four:false,
			five:false,
			six:true,
			seven:false,
			eigth:false

		}
	}
	else if(seven==1)
	{

		v1=0,v2=0,v3=0,v4=0,v5=0,v6=0,v8=0;

		a={

			one:false,
			two:false,
			three:false,
			four:false,
			five:false,
			six:false,
			seven:true,
			eigth:false

		}
	}
	else if(eight==1)
	{
		v1=0,v2=0,v3=0,v4=0,v5=0,v6=0,v7=0;


		a={

			one:false,
			two:false,
			three:false,
			four:false,
			five:false,
			six:false,
			seven:false,
			eigth:true

		}
	}

	node1=PIEinputGUI.add(a,"one").name("Salt-Water");
	node2=PIEinputGUI.add(a,"two").name("Honey");
	node3=PIEinputGUI.add(a,"three").name("Vinegar");
	node4=PIEinputGUI.add(a,"four").name("Mercury");
	node5=PIEinputGUI.add(a,"five").name("Petrol");
	node6=PIEinputGUI.add(a,"six").name("Kerosene");
	node7=PIEinputGUI.add(a,"seven").name("Oil");
	node8=PIEinputGUI.add(a,"eigth").name("PureWater");

	node1.onChange(note);
	node2.onChange(noteit);
	node3.onChange(notifyy);
	node4.onChange(notifyit);
	node5.onChange(aga);
	node6.onChange(nota);
	node7.onChange(noteagain);
	node8.onChange(notifyagain);
	PIErender();
}
function note() {
		
		
		if(v1==0)
		{
			Liq1.position.z=7;
			Liq2.position.z=-30;
			Liq3.position.z=-30;
			Liq4.position.z=-30;
			Liq5.position.z=-30;
			Liq6.position.z=-30;
			Liq7.position.z=-30;
			Liq8.position.z=-30;
			v1=1;
			sol=1;
			second=0,third=0,fourth=0,fifth=0,sixth=0,seven=0,eight=0;
			first=1;
			node1.remove();
			node2.remove();
			node3.remove();
			node4.remove();
			node5.remove();
			node6.remove();
			node7.remove();
			node8.remove();
			modify();
			
		}
		else 
		{
			Liq1.position.z=-30;
			v1=0;
		}
	
		PIErender();
	
}
function noteit() {
		
		
		if(v2==0)
		{
			
			Liq1.position.z=-30;
				Liq2.position.z=7;
				Liq3.position.z=-30;
				Liq4.position.z=-30;
				Liq5.position.z=-30;
				Liq6.position.z=-30;
				Liq7.position.z=-30;
				Liq8.position.z=-30;
			v2=1;
			sol=2;
			second=1;
			first=0,third=0,fourth=0,fifth=0,sixth=0,seven=0,eight=0;
			node1.remove();
			node2.remove();
			node3.remove();
			node4.remove();
			node5.remove();
			node6.remove();
			node7.remove();
			node8.remove();
			modify();

			
		}
		else
		{ 
			v2=0;
			Liq2.position.z=-30;
		}
	
		PIErender();
	
}
function notifyy() {

	
		if(v3==0)
		{
			Liq1.position.z=-30;
				Liq2.position.z=-30;
				Liq3.position.z=7;
				Liq4.position.z=-30;
				Liq5.position.z=-30;
				Liq6.position.z=-30;
				Liq7.position.z=-30;
				Liq8.position.z=-30;
			v3=1;
			sol=3;
			first=0, second=0,fourth=0,fifth=0,sixth=0,seven=0,eight=0;
			third=1;
			node1.remove();
			node2.remove();
			node3.remove();
			node4.remove();
			node5.remove();
			node6.remove();
			node7.remove();
			node8.remove();
			
			modify();
		}
		else
		{
			v3=0;
			Liq3.position.z=-30;
		}
		sol=3;
		PIErender();
}
function notifyit() {
	
		if(v4==0)
		{
		
			Liq1.position.z=-30;
				Liq2.position.z=-30;
				Liq3.position.z=-30;
				Liq4.position.z=7;
				Liq5.position.z=-30;
				Liq6.position.z=-30;
				Liq7.position.z=-30;
				Liq8.position.z=-30;
			v4=1;
			sol=4;
			fourth=1;
			second=0,first=0,third=0,fifth=0,sixth=0,seven=0,eight=0;
			node1.remove();
			node2.remove();
			node3.remove();
			node4.remove();
			node5.remove();
			node6.remove();
			node7.remove();
			node8.remove();
			modify();
			
			
		}
		else{
			v4=0;
			Liq4.position.z=-30;
			}
		sol=4;
		PIErender();
}
function aga() {
		if(v5==0)
		{
			Liq1.position.z=-30;
				Liq2.position.z=-30;
				Liq3.position.z=-30;
				Liq4.position.z=-30;
				Liq5.position.z=7;
				Liq6.position.z=-30;
				Liq7.position.z=-30;
				Liq8.position.z=-30;
			v5=1;
			sol=5;
			fifth=1;
			second=0,first=0,third=0,fourth=0,sixth=0,seven=0,eight=0;
			node1.remove();
			node2.remove();
			node3.remove();
			node4.remove();
			node5.remove();
			node6.remove();
			node7.remove();
			node8.remove();
			modify();

		}
		else 
		{
			v5=0;
			Liq5.position.z=-30;
		
		}
		sol=5;
		PIErender();
}
function nota() {
	
		if(v6==0)
		{
			Liq1.position.z=-30;
				Liq2.position.z=-30;
				Liq3.position.z=-30;
				Liq4.position.z=-30;
				Liq5.position.z=-30;
				Liq6.position.z=7;
				Liq7.position.z=-30;
				Liq8.position.z=-30;
			sixth=1;
			v6=1;
			sol=6;
			second=0,first=0,third=0,fifth=0,fourth=0,seven=0,eight=0;
			node1.remove();
			node2.remove();
			node3.remove();
			node4.remove();
			node5.remove();
			node6.remove();
			node7.remove();
			node8.remove();
			modify();
			
		}
		else 
		{
			v6=0;
			Liq6.position.z=-30;
		}
		sol=6;
		PIErender();
}
function noteagain() {
	
		if(v7==0)
		{
		Liq1.position.z=-30;
				Liq2.position.z=-30;
				Liq3.position.z=-30;
				Liq4.position.z=-30;
				Liq5.position.z=-30;
				Liq6.position.z=-30;
				Liq7.position.z=7;
				Liq8.position.z=-30;
			seven=1;
			v7=1;
			sol=7;
			second=0,first=0,third=0,fifth=0,sixth=0,fourth=0,eight=0;
			node1.remove();
			node2.remove();
			node3.remove();
			node4.remove();
			node5.remove();
			node6.remove();
			node7.remove();
			node8.remove();
			modify();
			
			
		}
		else
		{
			 v7=0;
			 Liq2.position.z=-30;
		}
		sol=7;
		PIErender();
}
function notifyagain() {
	
		if(v8==0)
		{

			Liq1.position.z=-30;
				Liq2.position.z=-30;
				Liq3.position.z=-30;
				Liq4.position.z=-30;
				Liq5.position.z=-30;
				Liq6.position.z=-30;
				Liq7.position.z=-30;
				Liq8.position.z=7;
			eight=1;
			v8=1;sol=8;
			second=0,first=0,third=0,fifth=0,sixth=0,seven=0,fourth=0;
			node1.remove();
			node2.remove();
			node3.remove();
			node4.remove();
			node5.remove();
			node6.remove();
			node7.remove();
			node8.remove();
			modify();
			
			
		}
		else
		{
			v8=0;
			Liq8.position.z=-30;
		}
		sol=8;
		PIErender();
}

function Display() {
	a={

		one:false,
		two:false,
		three:false,
		four:false,
		five:false,
		six:false,
		seven:false,
		eigth:false

	}

	node1=PIEinputGUI.add(a,"one").name("Salt-Water");
	node2=PIEinputGUI.add(a,"two").name("Honey");
	node3=PIEinputGUI.add(a,"three").name("Vinegar");
	node4=PIEinputGUI.add(a,"four").name("Mercury");
	node5=PIEinputGUI.add(a,"five").name("Petrol");
	node6=PIEinputGUI.add(a,"six").name("Kerosene");
	node7=PIEinputGUI.add(a,"seven").name("Oil");
	node8=PIEinputGUI.add(a,"eigth").name("PureWater");

	node1.onChange(note);
	node2.onChange(noteit);
	node3.onChange(notifyy);
	node4.onChange(notifyit);
	node5.onChange(aga);
	node6.onChange(nota);
	node7.onChange(noteagain);
	node8.onChange(notifyagain);
	PIEstartButton.addEventListener("click",haveit);
	PIEstopButton.addEventListener("click",leaveit);
	PIErender();

}

function loadExperimentElements()
{
var geometry;
var material;
var loader;
var texture;
	   initialiseInfo();
		   initialiseHelp();



Display();
PIEsetExperimentTitle("Electricity Through Liquids");
PIEsetDeveloperName("Narendra Chintala");

var plane=new THREE.PlaneGeometry(60,55);
var p=new THREE.MeshBasicMaterial({color:0xBDB76B});
var pl=new THREE.Mesh(plane,p);
PIEaddElement(pl);

Batterygeometry = new THREE.CylinderGeometry( 0.5, 0.5, 2, 32 );
Batterymaterial = new THREE.MeshPhysicalMaterial( {color: 0x000000} );
battery = new THREE.Mesh( Batterygeometry, Batterymaterial );
battery.rotation.z=Math.PI/2;
//PIEscene.add( battery);

Batterygeometry1 = new THREE.CylinderGeometry( 0.5, 0.5, 0.7, 32 );
Batterymaterial1= new THREE.MeshPhysicalMaterial( {color: 0xD2691E} );
battery1 = new THREE.Mesh( Batterygeometry1, Batterymaterial1 );
battery1.rotation.z=Math.PI/2;
battery1.position.x=-1.3;

Batterygeometry2 = new THREE.CylinderGeometry( 0.5, 0.5, 0.7, 32 );
Batterymaterial2= new THREE.MeshPhysicalMaterial( {color: 0xD2691E} );
battery2 = new THREE.Mesh( Batterygeometry2, Batterymaterial2 );
battery2.rotation.z=Math.PI/2;
battery2.position.x=1.35;
Batterygeometry3 = new THREE.CylinderGeometry( 0.35, 0.35, 0.15, 32 );
Batterymaterial3= new THREE.MeshPhysicalMaterial( {color: 'silver'} );
battery3 = new THREE.Mesh( Batterygeometry3, Batterymaterial3 );
battery3.rotation.z=Math.PI/2;
battery3.position.x=1.75;

BatteryGroup=new THREE.Group();
BatteryGroup.add(battery);
BatteryGroup.add(battery1);
BatteryGroup.add(battery2);
BatteryGroup.add(battery3);
BatteryGroup.position.set(-6,-1.2,6);
PIEaddElement(BatteryGroup);

PlusGroup=new THREE.Group();

plusgeometry1=new THREE.PlaneGeometry(0.08,0.4);
plusmaterial1=new THREE.MeshBasicMaterial({color:0x000000});
plus1=new THREE.Mesh(plusgeometry1,plusmaterial1);
//PIEaddElement(plus1);

plusgeometry2=new THREE.PlaneGeometry(0.08,0.4);
plusmaterial2=new THREE.MeshBasicMaterial({color:0x000000});
plus2=new THREE.Mesh(plusgeometry2,plusmaterial2);
plus2.rotation.z=Math.PI/2;

PlusGroup.add(plus1);
PlusGroup.add(plus2);
PlusGroup.position.set(-4.3,-0.8,10);
PIEaddElement(PlusGroup);

Minusgeometry=new THREE.PlaneGeometry(0.08,0.4);
Minusmaterial=new THREE.MeshBasicMaterial({color:0x000000});
Minus=new THREE.Mesh(Minusgeometry,Minusmaterial);
Minus.rotation.z=Math.PI/2;
Minus.position.set(-6.65,-0.8,10);
PIEaddElement(Minus);

BaseGeometry=new THREE.BoxGeometry(4,4,1);
BaseMaterial=new THREE.MeshPhysicalMaterial({color:'grey'});
Base=new THREE.Mesh(BaseGeometry,BaseMaterial);
Base.rotation.x=Math.PI/2;
Base.position.y=0;
Base.position.z=4;
Base.position.x=-3;
//Base.name="Naren";

LTG1 = new THREE.CylinderGeometry( 0.2, 0.2, 0.4, 32 );
LTM1= new THREE.MeshPhysicalMaterial( {color: 'red'} );
LT1 = new THREE.Mesh( LTG1, LTM1 );
LT1.position.y=0.65;
LT1.position.x=-4.4;
LT1.position.z=5;

LTG2 = new THREE.CylinderGeometry( 0.2, 0.2, 0.4, 32 );
LTM2= new THREE.MeshPhysicalMaterial( {color: 'green'} );
LT2 = new THREE.Mesh( LTG2, LTM2 );
LT2.position.y=0.62;
LT2.position.x=-1.4;
LT2.position.z=4.5;

LightGroup=new THREE.Group();
LightGroup.add(LT2);
LightGroup.add(LT1);
LightGroup.add(Base);
LightGroup.position.x=4;
LightGroup.position.y=-1.5;
PIEaddElement(LightGroup);

curve1 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(2.5, -1, 4.5 ),
										new THREE.Vector3( 3.5,3, 4.5 ),
										new THREE.Vector3( 4.8, -1, 4.5 )
										);


CurveGeometry1 = new THREE.Geometry();
CurveGeometry1.vertices = curve1.getPoints( 50 );
CurveMaterial1 = new THREE.LineBasicMaterial( { color : 0x0000FF,linewidth:4} );
FirstCurve = new THREE.Line(CurveGeometry1, CurveMaterial1 );			
PIEaddElement(FirstCurve);

curve2 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-4.3, -1.3, 5 ),
										new THREE.Vector3( -4.4,1, 5 ),
										new THREE.Vector3( -0.2, -1, 5 )
										);


CurveGeometry2 = new THREE.Geometry();
CurveGeometry2.vertices = curve2.getPoints( 50 );
CurveMaterial2 = new THREE.LineBasicMaterial( { color : 0x0000FF,linewidth:4} );
SecondCurve = new THREE.Line(CurveGeometry2, CurveMaterial2 );			
PIEaddElement(SecondCurve);

curve3 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-13, 1, 5 ),
										new THREE.Vector3( -16,1, 5 ),
										new THREE.Vector3( -16, -2, 5 )
										);


CurveGeometry3 = new THREE.Geometry();
CurveGeometry3.vertices = curve3.getPoints( 50 );
CurveMaterial3 = new THREE.LineBasicMaterial( { color : 0x0000FF,linewidth:4} );
ThirdCurve = new THREE.Line(CurveGeometry3, CurveMaterial3 );			
PIEaddElement(ThirdCurve);

curve4 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-16, -2, 5 ),
										new THREE.Vector3( -16,-5, 5 ),
										new THREE.Vector3( -12, -5, 5 )
										);


CurveGeometry4 = new THREE.Geometry();
CurveGeometry4.vertices = curve4.getPoints( 50 );
CurveMaterial4 = new THREE.LineBasicMaterial( { color : 0x0000FF,linewidth:4} );
FourthCurve = new THREE.Line(CurveGeometry4, CurveMaterial4 );			
PIEaddElement(FourthCurve);

curve5 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-12, -5, 5 ),
										new THREE.Vector3( -10,-5, 5 ),
										new THREE.Vector3( -7.8, -1, 5 )
										);


CurveGeometry5 = new THREE.Geometry();
CurveGeometry5.vertices = curve5.getPoints( 50 );
CurveMaterial5 = new THREE.LineBasicMaterial( { color : 0x0000FF,linewidth:4} );
FifthCurve = new THREE.Line(CurveGeometry5, CurveMaterial5 );			
PIEaddElement(FifthCurve);

curve6 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-10.7, 1, 5 ),
										new THREE.Vector3( -10,2, 5 ),
										new THREE.Vector3( -9, -1.7, 7)
										);


CurveGeometry6 = new THREE.Geometry();
CurveGeometry6.vertices = curve6.getPoints( 50 );
CurveMaterial6 = new THREE.LineBasicMaterial( { color : 0x0000FF,linewidth:4} );
SixthCurve = new THREE.Line(CurveGeometry6, CurveMaterial6 );			
PIEaddElement(SixthCurve);

curveNEW = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-8.98, -1.7, 7 ),
										new THREE.Vector3( -8.98,-1.9, 7 ),
										new THREE.Vector3( -8.4, -2.4, 7.3)
										);


CurveGeometryNEW= new THREE.Geometry();
CurveGeometryNEW.vertices = curveNEW.getPoints( 50 );
CurveMaterialNEW = new THREE.LineBasicMaterial( { color : 0x0000FF,linewidth:4} );
NEWCURVE = new THREE.Line(CurveGeometryNEW, CurveMaterialNEW );			
PIEaddElement(NEWCURVE);

curveNEW1 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-8.5, -2.4, 7 ),
										new THREE.Vector3( 8,-2.3, 9 ),
										new THREE.Vector3( 8.3, -2.3, 6.7)
										);


CurveGeometryNEW1= new THREE.Geometry();
CurveGeometryNEW1.vertices = curveNEW1.getPoints( 50 );
CurveMaterialNEW1 = new THREE.LineBasicMaterial( { color : 0x0000FF,linewidth:4} );
NEWCURVE1 = new THREE.Line(CurveGeometryNEW1, CurveMaterialNEW1 );			
PIEaddElement(NEWCURVE1);



curve7 = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(8.8, -1, 2 ),
										new THREE.Vector3( 10,0,2 ),
										new THREE.Vector3( 7,-1.95, 10)
										);


CurveGeometry7 = new THREE.Geometry();
CurveGeometry7.vertices = curve7.getPoints( 50 );
CurveMaterial7 = new THREE.LineBasicMaterial( { color : 0x0000FF,linewidth:4} );
SeventhCurve = new THREE.Line(CurveGeometry7, CurveMaterial7 );			
PIEaddElement(SeventhCurve);

SwitchGroup=new THREE.Group();
BaseGeometry1=new THREE.BoxGeometry(3.5,4,1);
BaseMaterial1=new THREE.MeshPhysicalMaterial({color:'grey'});
Base1=new THREE.Mesh(BaseGeometry1,BaseMaterial1);
Base1.rotation.x=Math.PI/2;
Base1.position.y=1;
Base1.position.x=5;
Base1.position.z=5;


STG1 = new THREE.CylinderGeometry( 0.2, 0.2, 0.4, 32 );
STM1= new THREE.MeshPhysicalMaterial( {color: 'red'} );
ST1 = new THREE.Mesh( STG1, STM1 );
ST1.position.y=1.6;
ST1.position.x=3.5;
ST1.position.z=5;

STG2 = new THREE.CylinderGeometry( 0.2, 0.2, 0.4, 32 );
STM2= new THREE.MeshPhysicalMaterial( {color: 'green'} );
ST2 = new THREE.Mesh( STG2, STM2 );
ST2.position.y=1.6;
ST2.position.x=6.5;
ST2.position.z=5;

SwitchGroup.add(Base1);
SwitchGroup.add(ST1);
SwitchGroup.add(ST2);
SwitchGroup.position.x=1.2;
SwitchGroup.position.y=-2.5;
PIEaddElement(SwitchGroup);



BaseGeometry2=new THREE.BoxGeometry(25,0.3,15);
BaseMaterial2=new THREE.MeshPhysicalMaterial({color:0xBDB76B});
Table=new THREE.Mesh(BaseGeometry2,BaseMaterial2);
Table.rotation.x+=0.1;
Table.position.y=-2;
Table.position.x=-2;
PIEaddElement(Table);

BaseGeometry2=new THREE.BoxGeometry(5,0.3,0.3);
BaseMaterial2=new THREE.MeshPhysicalMaterial({color:0xBDB76B});
Base1=new THREE.Mesh(BaseGeometry2,BaseMaterial2);
Base1.position.y=-4.87;
Base1.position.x=-15;
Base1.rotation.z=Math.PI/2.2;
PIEaddElement(Base1);

BaseGeometry2=new THREE.BoxGeometry(5,0.3,0.3);
BaseMaterial2=new THREE.MeshPhysicalMaterial({color:0xBDB76B});
Base1=new THREE.Mesh(BaseGeometry2,BaseMaterial2);
Base1.position.y=-4.87;
Base1.position.x=10;
Base1.rotation.z=Math.PI/-2.2;
PIEaddElement(Base1);


Egeom1=new THREE.CylinderGeometry(0.2,0.2,3,20);
Emat1=new THREE.MeshPhysicalMaterial({color:0x2F4F4F});
Electrode1=new THREE.Mesh(Egeom1,Emat1);
Electrode1.position.y=-0.4;
Electrode1.position.x=-12;
Electrode1.position.z=7.5;
PIEaddElement(Electrode1);

Egeom2=new THREE.CylinderGeometry(0.2,0.2,3,20);
Emat2=new THREE.MeshPhysicalMaterial({color:0x2F4F4F});
Electrode2=new THREE.Mesh(Egeom2,Emat2);
Electrode2.position.y=-0.4;
Electrode2.position.x=-10;
Electrode2.position.z=7;
PIEaddElement(Electrode2);


ss = new THREE.CylinderGeometry( 0.7,0.7, 0.9,39 );
mm = new THREE.MeshBasicMaterial( { color:0x2F4F4F } );
n = new THREE.Mesh( ss, mm );
n.position.set(1,-0.8,5);
//n.rotation.x-=0.3;
n.name="Naren";
PIEaddElement( n);

ss = new THREE.CylinderGeometry( 0.5,0.5, 0.5,39 );
mm = new THREE.MeshBasicMaterial( { color:'green' } );
n1 = new THREE.Mesh( ss, mm );
n1.position.set(1,-0.1,5);
//n.rotation.x-=0.3;
n1.name="Naren";
PIEaddElement( n1);





//window.addEventListener("click",change);

LightG=new THREE.CylinderGeometry(0.55,0.55,0.15,30);
LightM=new THREE.MeshBasicMaterial({color:'grey'});
Light=new THREE.Mesh(LightG,LightM);
Light.position.set(-4.05,-3.5,3.4);


LightGroup=new THREE.Group();
ge = new THREE.CircleGeometry(0.5, 100);
    	ge.vertices.shift();

ci = new THREE.Line(
        ge,
        new THREE.LineDashedMaterial({color: 'grey',linewidth:2})
    );
ci.position.set(-4.05,-3,3.4);
LightGroup.add(ci);
LightGroup.add(Light);


LightCurve = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-4.2,-3.4,3.4),
										new THREE.Vector3( -4.2,-2.8,3.4),
										new THREE.Vector3( -4.5, -2.8, 3.4 )
										);


LcGeom1 = new THREE.Geometry();
LcGeom1.vertices = LightCurve.getPoints( 50 );
LcMat1 = new THREE.LineBasicMaterial( { color : 'grey',linewidth:2} );
LightCurve1= new THREE.Line( LcGeom1, LcMat1 );
LightGroup.add(LightCurve1);

LightCurve = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-3.8,-3.4,3.4),
										new THREE.Vector3( -3.8,-2.8,3.4),
										new THREE.Vector3( -3.6, -2.75, 3.4 )
										);


LcGeom2 = new THREE.Geometry();
LcGeom2.vertices = LightCurve.getPoints( 50 );
LcMat2 = new THREE.LineBasicMaterial( { color : 'grey',linewidth:2} );
LightCurve2= new THREE.Line( LcGeom2, LcMat2 );
LightGroup.add(LightCurve2);

ge1 = new THREE.CircleGeometry(0.05, 100);
    	ge1.vertices.shift();

ci1 = new THREE.Line(
        ge1,
        new THREE.LineDashedMaterial({color: 'grey',linewidth:2})
    );
ci1.position.set(-4.15,-2.8,3.4);
LightGroup.add(ci1);

ge = new THREE.CircleGeometry(0.05, 100);
    	ge.vertices.shift();

ci2 = new THREE.Line(
        ge,
        new THREE.LineDashedMaterial({color: 'grey',linewidth:2})
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
LcMat1 = new THREE.LineBasicMaterial( { color : 'grey',linewidth:2} );
LightCurve3= new THREE.Line( LcGeom1, LcMat1 );
LightGroup.add(LightCurve3);

LightCurve = new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-3.6,-2.75,3.4),
										new THREE.Vector3( -3.7,-2.65,3.4),
										new THREE.Vector3( -3.9, -2.75, 3.4 )
										);


LcGeom2 = new THREE.Geometry();
LcGeom2.vertices = LightCurve.getPoints( 50 );
LcMat2 = new THREE.LineBasicMaterial( { color : 'grey',linewidth:2} );
LightCurve4= new THREE.Line( LcGeom2, LcMat2 );
LightGroup.add(LightCurve4);

plane=new THREE.PlaneGeometry(0.25,0.05);
pm=new THREE.MeshBasicMaterial({color:'grey'});
pg=new THREE.Mesh(plane,pm);
pg.position.set(-3.9,-2.8,3);
LightGroup.add(pg);
LightGroup.recieveShadow=true;
LightGroup.position.set(9.2,2.8,5);
PIEaddElement(LightGroup);

BeakerGroup=new THREE.Group();
topg = new THREE.CylinderGeometry(1.8,1.8,1,32,10, true);
topm= new THREE.MeshPhysicalMaterial({color: 'silver', side:THREE.DoubleSide,opacity:0.6,transparent:true});
cone = new THREE.Mesh(topg,topm);
cone.position.z=7;
cone.position.x=-6.2;
cone.position.y=-0.3;
cone.rotation.x+=0.02;
BeakerGroup.add(cone);

topg = new THREE.CylinderGeometry(1.8,1.8,1.5,32,1, true);
topm= new THREE.MeshPhysicalMaterial({side:THREE.DoubleSide,color:'silver',opacity:0.6,transparent:true});
cone1 = new THREE.Mesh(topg,topm);
cone1.position.z=7;
cone1.position.x=-6.2;
cone1.position.y=-1.4;
cone1.rotation.x+=0.02;
BeakerGroup.add(cone1);

topg = new THREE.CylinderGeometry(1.8,1.8,0.05,32);
topm= new THREE.MeshPhysicalMaterial({side:THREE.DoubleSide,color:'silver'});
cone2 = new THREE.Mesh(topg,topm);
cone2.position.z=7;
cone2.position.x=-6.2;
cone2.position.y=-2.2;
cone2.rotation.x+=0.02;
BeakerGroup.add(cone2);
BeakerGroup.position.x=-5;
PIEaddElement(BeakerGroup);

texture=new THREE.ImageUtils.loadTexture("salt.jpeg");
topg = new THREE.CylinderGeometry(1.75,1.75,1.6,32,10);
topm= new THREE.MeshBasicMaterial({map:texture ,side:THREE.DoubleSide,opacity:0.9});
Liq1 = new THREE.Mesh(topg,topm);
Liq1.position.z=-30;
Liq1.position.x=-11.2;
Liq1.position.y=-1.45;
Liq1.rotation.x+=0.02;
PIEaddElement(Liq1);

texture=new THREE.ImageUtils.loadTexture("Honey.jpeg");
topg = new THREE.CylinderGeometry(1.75,1.75,1.6,32,10);
topm= new THREE.MeshBasicMaterial({map:texture,side:THREE.DoubleSide,opacity:0.9});
Liq2 = new THREE.Mesh(topg,topm);
Liq2.position.z=-30;
Liq2.position.x=-11.2;
Liq2.position.y=-1.45;
Liq2.rotation.x+=0.02;
PIEaddElement(Liq2);


topg = new THREE.CylinderGeometry(1.75,1.75,1.6,32,10);
topm= new THREE.MeshBasicMaterial({color:'red', side:THREE.DoubleSide,opacity:0.9});
Liq3 = new THREE.Mesh(topg,topm);
Liq3.position.z=-30;
Liq3.position.x=-11.2;
Liq3.position.y=-1.45;
Liq3.rotation.x+=0.02;
PIEaddElement(Liq3);

texture=new THREE.ImageUtils.loadTexture("Mercury.jpeg");
topg = new THREE.CylinderGeometry(1.75,1.75,1.6,32,10);
topm= new THREE.MeshBasicMaterial({map:texture, side:THREE.DoubleSide,opacity:0.2});
Liq4 = new THREE.Mesh(topg,topm);
Liq4.position.z=-30;
Liq4.position.x=-11.2;
Liq4.position.y=-1.45;
Liq4.rotation.x+=0.02;
PIEaddElement(Liq4);

texture=new THREE.ImageUtils.loadTexture("Petrol.png");
topg = new THREE.CylinderGeometry(1.75,1.75,1.6,32,10);
topm= new THREE.MeshBasicMaterial({color: 0xFFD700, side:THREE.DoubleSide,opacity:0.9});
Liq5 = new THREE.Mesh(topg,topm);
Liq5.position.z=-30;
Liq5.position.x=-11.2;
Liq5.position.y=-1.45;
Liq5.rotation.x+=0.02;
PIEaddElement(Liq5);

texture=new THREE.ImageUtils.loadTexture("Kerosene.jpeg");
topg = new THREE.CylinderGeometry(1.75,1.75,1.6,32,10);
topm= new THREE.MeshBasicMaterial({ map:texture,side:THREE.DoubleSide,opacity:0.9});
Liq6 = new THREE.Mesh(topg,topm);
Liq6.position.z=-30;
Liq6.position.x=-11.2;
Liq6.position.y=-1.45;
Liq6.rotation.x+=0.02;
PIEaddElement(Liq6);

texture=new THREE.ImageUtils.loadTexture("Oil.jpeg");
topg = new THREE.CylinderGeometry(1.75,1.75,1.6,32,10);
topm= new THREE.MeshPhysicalMaterial({map : texture, side:THREE.DoubleSide,opacity:0.9});
Liq7 = new THREE.Mesh(topg,topm);
Liq7.position.z=-30;
Liq7.position.x=-11.2;
Liq7.position.y=-1.45;
Liq7.rotation.x+=0.02;
PIEaddElement(Liq7);

texture=new THREE.ImageUtils.loadTexture("PW.jpeg");
topg = new THREE.CylinderGeometry(1.75,1.75,1.6,32,10);
topm= new THREE.MeshPhysicalMaterial({map:texture, side:THREE.DoubleSide,opacity:0.9});
Liq8 = new THREE.Mesh(topg,topm);
Liq8.position.z=-30;
Liq8.position.x=-11.2;
Liq8.position.y=-1.45;
Liq8.rotation.x+=0.02;
PIEaddElement(Liq8);

document.addEventListener("click",Change);
//document.addEventListener("mousemove",Chang);


PIEstartButton.addEventListener("click",haveit);
PIEstopButton.addEventListener("click",leaveit);

var loader1 = new THREE.FontLoader();
				loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


  	 			southGeometry = new THREE.TextGeometry( "Anode", { font: font, size: 0.25, height: .05, curveSegments: 7});
  	 			southMaterial = new THREE.MeshBasicMaterial( { color:'black' });

  				toggle = new THREE.Mesh(southGeometry ,southMaterial );
				toggle.position.set(-11,1.5, 12) ;
  				PIEaddElement( toggle );})

var loader1 = new THREE.FontLoader();
				loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


  	 			southGeometry = new THREE.TextGeometry( "Cathode", { font: font, size: 0.25, height: .05, curveSegments: 7});
  	 			southMaterial = new THREE.MeshBasicMaterial( { color:'black' });

  				toggle = new THREE.Mesh(southGeometry ,southMaterial );
				toggle.position.set(-9,1.5, 12) ;
  				PIEaddElement( toggle );})
		PIEsetAreaOfInterest(10,10, -12,-8);
		PIEcamera.position.x=-2.5;
}


function haveit() {
	
n1.material.color.set("red");
PIErender();
PIEstartAnimation();

}
var a,b;

function leaveit() {
	NEWCURVE1.material.color.set("blue");
				NEWCURVE.material.color.set("blue");
n1.material.color.set("green");
FirstCurve.material.color.set('blue');
		SecondCurve.material.color.set('blue');
		ThirdCurve.material.color.set('blue');
		FourthCurve.material.color.set('blue');
		SixthCurve.material.color.set('blue');
		FifthCurve.material.color.set('blue');
		SeventhCurve.material.color.set('blue');
		LightCurve1.material.color.set("grey");
		LightCurve2.material.color.set("grey");
		LightCurve3.material.color.set("grey");
		LightCurve4.material.color.set("grey");
		ci.material.color.set("grey");
		ci1.material.color.set("grey");
		ci2.material.color.set("grey");
		pg.material.color.set("grey");
		Light.material.color.set("grey");
PIErender();
PIEstopAnimation();

}

function Change(event)
{
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
		n1.material.color.set("red");
		PIErender();
		PIEstartAnimation();
	}

	else if(c=='N' && count==1)
	{
		count=0;
		NEWCURVE1.material.color.set("blue");
				NEWCURVE.material.color.set("blue");
		n1.material.color.set("green");
		FirstCurve.material.color.set('blue');
		SecondCurve.material.color.set('blue');
		ThirdCurve.material.color.set('blue');
		FourthCurve.material.color.set('blue');
		SixthCurve.material.color.set('blue');
		FifthCurve.material.color.set('blue');
		SeventhCurve.material.color.set('blue');
		LightCurve1.material.color.set("grey");
		LightCurve2.material.color.set("grey");
		LightCurve3.material.color.set("grey");
		LightCurve4.material.color.set("grey");
		ci.material.color.set("grey");
		ci1.material.color.set("grey");
		ci2.material.color.set("grey");
		pg.material.color.set("grey");
		Light.material.color.set("grey");
		PIErender();
		PIEstopAnimation();
	}
}

function updateExperimentElements(t,dt)
{
	if(t!=0)
	{
		count=1;
		
		if(sol==1)
		{


			if(v1==1)
			{
				NEWCURVE1.material.color.set("yellow");
				NEWCURVE.material.color.set("yellow");
				n1.material.color.set("red");
				FirstCurve.material.color.set('yellow');
				SecondCurve.material.color.set('yellow');
				ThirdCurve.material.color.set('yellow');
				FourthCurve.material.color.set('yellow');
				SixthCurve.material.color.set('yellow');
				FifthCurve.material.color.set('yellow');
				SeventhCurve.material.color.set('yellow');
				LightCurve1.material.color.set("yellow");
				LightCurve2.material.color.set("yellow");
				LightCurve3.material.color.set("yellow");
				LightCurve4.material.color.set("yellow");
				ci.material.color.set("yellow");
				ci1.material.color.set("yellow");
				ci2.material.color.set("yellow");
				pg.material.color.set("yellow");
				Light.material.color.set("yellow");
			}

			else
			{
				NEWCURVE1.material.color.set("blue");
				NEWCURVE.material.color.set("blue");
				n1.material.color.set("green");
				Liq1.position.z=-30;
				FirstCurve.material.color.set('blue');
				SecondCurve.material.color.set('blue');
				ThirdCurve.material.color.set('blue');
				FourthCurve.material.color.set('blue');
				SixthCurve.material.color.set('blue');
				FifthCurve.material.color.set('blue');
				SeventhCurve.material.color.set('blue');
				LightCurve1.material.color.set("grey");
				LightCurve2.material.color.set("grey");
				LightCurve3.material.color.set("grey");
				LightCurve4.material.color.set("grey");
				ci.material.color.set("grey");
				ci1.material.color.set("grey");
				ci2.material.color.set("grey");
				pg.material.color.set("grey");
				Light.material.color.set("grey");

			}
			
		}
		else if(sol==2)
		{
				if(v2==1)
				{
					n1.material.color.set("red");
					Liq1.position.z=-30;
					Liq2.position.z=7;
					Liq3.position.z=-30;
					Liq4.position.z=-30;
					Liq5.position.z=-30;
					Liq6.position.z=-30;
					Liq7.position.z=-30;
					Liq8.position.z=-30;
					NEWCURVE1.material.color.set("blue");
				NEWCURVE.material.color.set("blue");
					FirstCurve.material.color.set('blue');
					SecondCurve.material.color.set('blue');
					ThirdCurve.material.color.set('blue');
					FourthCurve.material.color.set('blue');
					SixthCurve.material.color.set('blue');
					FifthCurve.material.color.set('blue');
					SeventhCurve.material.color.set('blue');
					LightCurve1.material.color.set("grey");
					LightCurve2.material.color.set("grey");
					LightCurve3.material.color.set("grey");
					LightCurve4.material.color.set("grey");
					ci.material.color.set("grey");
					ci1.material.color.set("grey");
					ci2.material.color.set("grey");
					pg.material.color.set("grey");
					Light.material.color.set("grey");
				}
				else 
					{Liq2.position.z=-30;
			n1.material.color.set("green");}

		}
		else if(sol==3)
		{
			if(v3==1)
			{
					n1.material.color.set("red");
					Liq1.position.z=-30;
					Liq2.position.z=-30;
					Liq3.position.z=7;
					Liq4.position.z=-30;
					Liq5.position.z=-30;
					Liq6.position.z=-30;
					Liq7.position.z=-30;
					Liq8.position.z=-30;
					NEWCURVE1.material.color.set("yellow");
				NEWCURVE.material.color.set("yellow");
				FirstCurve.material.color.set('yellow');
				SecondCurve.material.color.set('yellow');
				ThirdCurve.material.color.set('yellow');
				FourthCurve.material.color.set('yellow');
				SixthCurve.material.color.set('yellow');
				FifthCurve.material.color.set('yellow');
				SeventhCurve.material.color.set('yellow');
				LightCurve1.material.color.set("yellow");
				LightCurve2.material.color.set("yellow");
				LightCurve3.material.color.set("yellow");
				LightCurve4.material.color.set("yellow");
				ci.material.color.set("yellow");
				ci1.material.color.set("yellow");
				ci2.material.color.set("yellow");
				pg.material.color.set("yellow");
				Light.material.color.set("yellow");
			}
			else
			{
			n1.material.color.set("green");
				Liq3.position.z=-30;
				NEWCURVE1.material.color.set("blue");
				NEWCURVE.material.color.set("blue");
				FirstCurve.material.color.set('blue');
				SecondCurve.material.color.set('blue');
				ThirdCurve.material.color.set('blue');
				FourthCurve.material.color.set('blue');
				SixthCurve.material.color.set('blue');
				FifthCurve.material.color.set('blue');
				SeventhCurve.material.color.set('blue');
				LightCurve1.material.color.set("grey");
				LightCurve2.material.color.set("grey");
				LightCurve3.material.color.set("grey");
				LightCurve4.material.color.set("grey");
				ci.material.color.set("grey");
				ci1.material.color.set("grey");
				ci2.material.color.set("grey");
				pg.material.color.set("grey");
				Light.material.color.set("grey");

			}

			
			
		}
		else if(sol==4)
		{
			if(v4==1)
			{
					n1.material.color.set("red");
					Liq1.position.z=-30;
					Liq2.position.z=-30;
					Liq3.position.z=-30;
					Liq4.position.z=7;
					Liq5.position.z=-30;
					Liq6.position.z=-30;
					Liq7.position.z=-30;
					Liq8.position.z=-30;
					NEWCURVE1.material.color.set("yellow");
				NEWCURVE.material.color.set("yellow");
				FirstCurve.material.color.set('yellow');
				SecondCurve.material.color.set('yellow');
				ThirdCurve.material.color.set('yellow');
				FourthCurve.material.color.set('yellow');
				SixthCurve.material.color.set('yellow');
				FifthCurve.material.color.set('yellow');
				SeventhCurve.material.color.set('yellow');
				LightCurve1.material.color.set("yellow");
				LightCurve2.material.color.set("yellow");
				LightCurve3.material.color.set("yellow");
				LightCurve4.material.color.set("yellow");
				ci.material.color.set("yellow");
				ci1.material.color.set("yellow");
				ci2.material.color.set("yellow");
				pg.material.color.set("yellow");
				Light.material.color.set("yellow");
			}

			else
			{
				n1.material.color.set("green");
				Liq4.position.z=-30;
				NEWCURVE1.material.color.set("blue");
				NEWCURVE.material.color.set("blue");
				FirstCurve.material.color.set('blue');
				SecondCurve.material.color.set('blue');
				ThirdCurve.material.color.set('blue');
				FourthCurve.material.color.set('blue');
				SixthCurve.material.color.set('blue');
				FifthCurve.material.color.set('blue');
				SeventhCurve.material.color.set('blue');
				LightCurve1.material.color.set("grey");
				LightCurve2.material.color.set("grey");
				LightCurve3.material.color.set("grey");
				LightCurve4.material.color.set("grey");
				ci.material.color.set("grey");
				ci1.material.color.set("grey");
				ci2.material.color.set("grey");
				pg.material.color.set("grey");
				Light.material.color.set("grey");
			}
			
			
		}
		else if(sol==5)
		{
			if(v5==1)
			{
					n1.material.color.set("red");
					Liq1.position.z=-30;
					Liq2.position.z=-30;
					Liq3.position.z=-30;
					Liq4.position.z=-30;
					Liq5.position.z=7;
					Liq6.position.z=-30;
					Liq7.position.z=-30;
					Liq8.position.z=-30;
					NEWCURVE1.material.color.set("blue");
				NEWCURVE.material.color.set("blue");
				FirstCurve.material.color.set('blue');
				SecondCurve.material.color.set('blue');
				ThirdCurve.material.color.set('blue');
				FourthCurve.material.color.set('blue');
				SixthCurve.material.color.set('blue');
				FifthCurve.material.color.set('blue');
				SeventhCurve.material.color.set('blue');
				LightCurve1.material.color.set("grey");
				LightCurve2.material.color.set("grey");
				LightCurve3.material.color.set("grey");
				LightCurve4.material.color.set("grey");
				ci.material.color.set("grey");
				ci1.material.color.set("grey");
				ci2.material.color.set("grey");
				pg.material.color.set("grey");
				Light.material.color.set("grey");
			}

			else
			{
			n1.material.color.set("green");
				Liq5.position.z=-30;
			}
			
		}	

		else if(sol==6)
		{
			if(v6==1)
			{
					n1.material.color.set("red");
					Liq1.position.z=-30;
					Liq2.position.z=-30;
					Liq3.position.z=-30;
					Liq4.position.z=-30;
					Liq5.position.z=-30;
					Liq6.position.z=7;
					Liq7.position.z=-30;
					Liq8.position.z=-30;
					NEWCURVE1.material.color.set("blue");
				NEWCURVE.material.color.set("blue");

				FirstCurve.material.color.set('blue');
				SecondCurve.material.color.set('blue');
				ThirdCurve.material.color.set('blue');
				FourthCurve.material.color.set('blue');
				SixthCurve.material.color.set('blue');
				FifthCurve.material.color.set('blue');
				SeventhCurve.material.color.set('blue');
				LightCurve1.material.color.set("grey");
				LightCurve2.material.color.set("grey");
				LightCurve3.material.color.set("grey");
				LightCurve4.material.color.set("grey");
				ci.material.color.set("grey");
				ci1.material.color.set("grey");
				ci2.material.color.set("grey");
				pg.material.color.set("grey");
				Light.material.color.set("grey");
			}
			else
			{
			n1.material.color.set("green");
			Liq6.position.z=-30;
			} 
				
		}	


		else if(sol==7)
		{
			if(v7==1)
			{
				n1.material.color.set("red");
				Liq1.position.z=-30;
					Liq2.position.z=-30;
					Liq3.position.z=-30;
					Liq4.position.z=-30;
					Liq5.position.z=-30;
					Liq6.position.z=-30;
					Liq7.position.z=7;
					Liq8.position.z=-30;
					NEWCURVE1.material.color.set("blue");
				NEWCURVE.material.color.set("blue");
			FirstCurve.material.color.set('blue');
			SecondCurve.material.color.set('blue');
			ThirdCurve.material.color.set('blue');
			FourthCurve.material.color.set('blue');
			SixthCurve.material.color.set('blue');
			FifthCurve.material.color.set('blue');
			SeventhCurve.material.color.set('blue');
			LightCurve1.material.color.set("grey");
			LightCurve2.material.color.set("grey");
			LightCurve3.material.color.set("grey");
			LightCurve4.material.color.set("grey");
			ci.material.color.set("grey");
			ci1.material.color.set("grey");
			ci2.material.color.set("grey");
			pg.material.color.set("grey");
			Light.material.color.set("grey");
			}
			else
			{
				n1.material.color.set("green");
					Liq7.position.z=-30;
			}
					
		}	

		else if(sol==8)
		{
			if(v8==1)
			{
				n1.material.color.set("red");
					Liq1.position.z=-30;
					Liq2.position.z=-30;
					Liq3.position.z=-30;
					Liq4.position.z=-30;
					Liq5.position.z=-30;
					Liq6.position.z=-30;
					Liq7.position.z=-30;
					Liq8.position.z=7;
					NEWCURVE1.material.color.set("blue");
				NEWCURVE.material.color.set("blue");
				FirstCurve.material.color.set('blue');
				SecondCurve.material.color.set('blue');
				ThirdCurve.material.color.set('blue');
				FourthCurve.material.color.set('blue');
				SixthCurve.material.color.set('blue');
				FifthCurve.material.color.set('blue');
				SeventhCurve.material.color.set('blue');
				LightCurve1.material.color.set("grey");
				LightCurve2.material.color.set("grey");
				LightCurve3.material.color.set("grey");
				LightCurve4.material.color.set("grey");
				ci.material.color.set("grey");
				ci1.material.color.set("grey");
				ci2.material.color.set("grey");
				pg.material.color.set("grey");
				Light.material.color.set("grey");
			}
			else
			{
			n1.material.color.set("green");
					Liq8.position.z=-30;
			}
		}
		n1.material.color.set("red");
	}
}	


function resetExperiment()
{
		Liq1.position.z=-30;
		Liq2.position.z=-30;
		Liq3.position.z=-30;
		Liq4.position.z=-30;
		Liq5.position.z=-30;
		Liq6.position.z=-30;
		Liq7.position.z=-30;
		Liq8.position.z=-30;
		NEWCURVE1.material.color.set("blue");
				NEWCURVE.material.color.set("blue");
		FirstCurve.material.color.set('blue');
		SecondCurve.material.color.set('blue');
		ThirdCurve.material.color.set('blue');
		FourthCurve.material.color.set('blue');
		SixthCurve.material.color.set('blue');
		FifthCurve.material.color.set('blue');
		SeventhCurve.material.color.set('blue');
		LightCurve1.material.color.set("grey");
		LightCurve2.material.color.set("grey");
		LightCurve3.material.color.set("grey");
		LightCurve4.material.color.set("grey");
		ci.material.color.set("grey");
		ci1.material.color.set("grey");
		ci2.material.color.set("grey");
		pg.material.color.set("grey");
		Light.material.color.set("grey");
		n1.material.color.set("green");
		node1.remove();
			node2.remove();
			node3.remove();
			node4.remove();
			node5.remove();
			node6.remove();
			node7.remove();
			node8.remove();
			v1=0,v2=0,v3=0,v4=0,v5=0,v6=0,v7=0,v8=0;
			first=0,second=0,third=0,fourth=0,fifth=0,sixth=0,seven=0;
			//alert(t);
			Display();
			PIErender();
		
}

