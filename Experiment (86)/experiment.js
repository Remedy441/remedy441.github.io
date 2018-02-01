
var peg;
var myBob;
var line;
var rod;
var Rod;
var obj;
var bobX;
var bobY;
var bobZ;
var pegX;
var pegY;
var pegZ;
var MaxTheta;
var length;
var right;
var centerFlag;
var Bobradius;
var left;
var flag;
var meshleft;
var meshcenter;
var meshright;

function initialiseexperiment()
{
	pegX=2.0;
	pegY=2.9;
	pegZ=0;
	bobX=2.0;
	bobY=1.5;
	bobZ=0;
	Bobradius=4/30;
	flag=0;
	length=0;
}


function myBobDrag(element,newpos)
{
	flag=1;
	bobX=newpos.x;
	bobY=newpos.y;
	bobZ=0;
	if(newpos.x > 3)
	{
		bobX=3;
	}
	else if(newpos.x <1)
	{
		bobX=1;
	}
	if(newpos.y < 1.5)
	{
		bobY=1.5;
	}
	else if(newpos.y > 2)
	{
		bobY=2;
	}
	myBob.position.set(bobX,bobY,bobZ);
	line.geometry.vertices[1]=( new THREE.Vector3(bobX,bobY,bobZ));
	line.geometry.verticesNeedUpdate = true;
	if(bobX==pegX)
	{
		MaxTheta=0.2629*2;
	}
	else
	{
	var p1=(bobX-pegX);
	//var p2=Math.abs(bobY-pegY);
	var p2=1.9-(bobY-1);
	MaxTheta=Math.atan(p1/p2);
	}
	length=Math.sqrt(Math.pow(bobX-pegX,2)+Math.pow(bobY-pegY,2)+Math.pow(bobZ-pegZ,2));
	//length=1.2;
}


function CreateRightPosition()
{
	newBobRight =new THREE.Mesh(new THREE.SphereGeometry(Bobradius+0.01, 32, 32), new THREE.MeshLambertMaterial({color: 0xff0000}));
	newBobRight.position.set(myBob.position.x,myBob.position.y,myBob.position.z);
	//newBobRight.material.depthTest=false;
	PIEaddElement(newBobRight);
	
	
	var material = new THREE.LineBasicMaterial({color:0x000000});
	var geometry = new THREE.Geometry();  /*Line geometry is used to create the string connecting the bob to the fixed peg*/
	geometry.vertices.push(new THREE.Vector3(pegX,pegY,pegZ));/*Initial vertices of peg and the bob are used to create string*/
	geometry.vertices.push(new THREE.Vector3(myBob.position.x,myBob.position.y,myBob.position.z));
	newLineRight=new THREE.Line(geometry,material);
	//newLineRight.material.depthTest=false;
	PIEaddElement(newLineRight);
	
	var loader = new THREE.FontLoader();

	loader.load( 'optimer_regular.typeface.json', function ( font ) {

    var textGeo = new THREE.TextGeometry( "R", {

        font: font,

        size: 0.08,
        height:0.1,
        curveSegments: 1,

        bevelThickness: 0.01,
        bevelSize: 0.01,
        bevelEnabled: true

    } );

    var textMaterial = new THREE.MeshPhongMaterial( { color: 0x000000 } );

    meshright = new THREE.Mesh( textGeo, textMaterial );
    //mesh.position.set( 2, 2, -1 );
	meshright.position.set( newBobRight.position.x,newBobRight.position.y-0.02,newBobRight.position.z);
	meshright.renderOrder=0.3;
	meshright.material.depthTest=false;
	meshright.castShadow=false;
    PIEaddElement( meshright );
} );
	
	PIErender();
	
}


function CreateCenterPosition()
{
	newBobCenter=new THREE.Mesh(new THREE.SphereGeometry(Bobradius+0.01, 32, 32), new THREE.MeshLambertMaterial({color: 0xff0000}));
	newBobCenter.position.set(myBob.position.x,myBob.position.y,myBob.position.z);
	newBobCenter.material.renderOrder=0.2;
	//newBobCenter.material.depthTest=false;
	PIEaddElement(newBobCenter);
	
	
	var material = new THREE.LineBasicMaterial({color:0x000000});
	var geometry = new THREE.Geometry();
	geometry.vertices.push(new THREE.Vector3(pegX,pegY,pegZ));
	geometry.vertices.push(new THREE.Vector3(myBob.position.x,myBob.position.y,myBob.position.z));
	newLineCenter=new THREE.Line(geometry,material);
	//newLineCenter.material.depthTest=false;
	PIEaddElement(newLineCenter);
	var loader = new THREE.FontLoader();

	loader.load( 'optimer_regular.typeface.json', function ( font ) {

    var textGeo = new THREE.TextGeometry( "C", {

        font: font,

        size: 0.08,
        height:0.1,
        curveSegments: 12,

        bevelThickness: 0.01,
        bevelSize: 0.01,
        bevelEnabled: true

    } );

    var textMaterial = new THREE.MeshPhongMaterial( { color: 0x000000 } );

    meshcenter = new THREE.Mesh( textGeo, textMaterial );
    //mesh.position.set( 2, 2, -1 );
	meshcenter.position.set( newBobCenter.position.x,newBobCenter.position.y-0.02,newBobCenter.position.z);
	meshcenter.renderOrder=0.3;
	meshcenter.material.depthTest=false;
    PIEaddElement( meshcenter );
} );
	
	PIErender();
	
}


function CreateLeftPosition()
{
	//newBobLeft = new THREE.Mesh(new THREE.CylinderBufferGeometry( Bobradius, Bobradius, 0.3, 32 ), new THREE.MeshLambertMaterial({color: 0x660000}));
	newBobLeft= new THREE.Mesh(new THREE.SphereGeometry(Bobradius+0.01, 32, 32), new THREE.MeshLambertMaterial({color: 0xff0000}));
	newBobLeft.position.set(myBob.position.x,myBob.position.y,myBob.position.z);
	newBobLeft.renderOrder=0.2;
	//newBobLeft.material,depthTest=false;
	PIEaddElement(newBobLeft);
	
	
	var material = new THREE.LineBasicMaterial({color:0x000000});
	var geometry = new THREE.Geometry();  /*Line geometry is used to create the string connecting the bob to the fixed peg*/
	geometry.vertices.push(new THREE.Vector3(pegX,pegY,pegZ));/*Initial vertices of peg and the bob are used to create string*/
	geometry.vertices.push(new THREE.Vector3(myBob.position.x,myBob.position.y,myBob.position.z));
	newLineLeft=new THREE.Line(geometry,material);
	//newLineLeft.material.depthTest=false;
	PIEaddElement(newLineLeft);
	
	var loader = new THREE.FontLoader();

	loader.load( 'optimer_regular.typeface.json', function ( font ) {

    var textGeo = new THREE.TextGeometry( "L", {

        font: font,

        size: 0.08,
        height:0.1,
        curveSegments: 1,

        bevelThickness: 0.01,
        bevelSize: 0.01,
        bevelEnabled: true

    } );

    var textMaterial = new THREE.MeshPhongMaterial( { color: 0x000000 } );

    meshleft = new THREE.Mesh( textGeo, textMaterial );
    //mesh.position.set( 2, 2, -1 );
	meshleft.position.set( newBobLeft.position.x,newBobLeft.position.y-0.02,newBobLeft.position.z);
	meshleft.renderOrder=0.3;
	meshleft.material.depthTest=false;
    PIEaddElement( meshleft );
} );

	PIErender();
}




function AddProtractor()
{
	var Pradius=0.3;//Radius of protractor
	var curve = new THREE.EllipseCurve(
    pegX, pegY,             // ax, aY
    Pradius,Pradius,            // xRadius, yRadius
    Math.PI, 2*Math.PI, // aStartAngle, aEndAngle
    false             // aClockwise
);
var points = curve.getSpacedPoints( 100 );

var path = new THREE.Path();
var geometry = path.createGeometry( points );

var material = new THREE.LineBasicMaterial( { color : 0x000000 } );
var line = new THREE.Line( geometry, material );

PIEaddElement( line );

var cx;
var cy;
var linel;
var liner;
var i;
for(i=Math.PI/2;i>=0;i=i-(Math.PI)/12 )
{
	cx = pegX + (Pradius * Math.cos(i));
	cy = pegY - (Pradius* Math.sin(i));
	var materialP = new THREE.LineBasicMaterial({color:0x000000});
	var geometryl = new THREE.Geometry();
	geometryl.vertices.push(new THREE.Vector3(pegX,pegY,pegZ));
	geometryl.vertices.push(new THREE.Vector3(cx,cy,pegZ));
	linel=new THREE.Line(geometryl,materialP);
	var geometryr = new THREE.Geometry();
	geometryr.vertices.push(new THREE.Vector3(pegX,pegY,pegZ));
	geometryr.vertices.push(new THREE.Vector3(2*pegX-cx,cy,0));
	liner=new THREE.Line(geometryr,materialP);
	PIEaddElement(linel);
	PIEaddElement(liner);

}

}
	
	
	
var infoContent;
function initialiseInfo()
{
	infoContent = "";
	infoContent = infoContent + "<h2> Simple Pendulum </h2>";
	infoContent = infoContent + "<p> A simple pendulum consists of a bob(sphere) of fixed mass suspended from a fixed point through an inextensible weightless string in a uniform gravitational field.</p>";
	infoContent = infoContent + "<p> Simple pendulum can be set into oscillatory motion by pulling it to one side of equilibrium position and then releasing it.</p>";
	infoContent = infoContent + "<p>When bob of the simple pendulum is displaced from its equilibrium position and then released it begins to oscillate.</p>";
	infoContent = infoContent + "<p>Suppose at any instant of time during oscillations,θ be the angle subtended by the string with the vertical.</p>";
	infoContent = infoContent + "<p>mg is the force acting on the bob at point in vertically downward direction,</p>";
	infoContent = infoContent + "<p>where m is the mss of the bob and g is acceleration due to gravity.</p>";
	infoContent = infoContent + "<p>Its component mgcosθ is balanced by the tension in the string and its tangential component mgsinθ directs in the direction opposite to increasing θ.</p>";
	infoContent = infoContent + "<p>Thus restoring force is given by F=mgsinθ towards the equilibrium position</p>";
	infoContent = infoContent + "<p>Thus the restoring force causes the bob to oscillate about the equilibrium(mean) position.Motion of the pendulum is regular and repeating,an example of periodic motion</p>";
	infoContent = infoContent + "<h2> Positions in a simple pendulum</h2>";
	infoContent = infoContent + "<p> The motion of the simple pendulum is oscillatory.The three major positions of a pendulum during its motion are:</p>";
	infoContent = infoContent + "<h3> The mean position </h3>";
	infoContent = infoContent + "<p> At this point the tension and the gravitational forces acting on the bob balance each other. The speed of the bob is maximum at this stage. The centripetal acceleration of the bob moves it away from the mean position<p>";
	infoContent = infoContent + "<h3> The left Extreme and the Right Extreme positions</h3>";
	infoContent = infoContent + "<p> In these positions the string exerts a tension at an angle θ and the weight of the bob acts downward.</p>";
	infoContent = infoContent + "<p>As they dont balance each other, a restoring force acts on the bob which is given by mgsinθ</p>";
	infoContent = infoContent + "<p> This restoring force is towards the mean position. The speed of the bob is zero at both the extreme positions</p>";
	infoContent = infoContent + "<p>Law of conservation of energy holds good in the case of a simple pendulum.</p>";
	infoContent = infoContent + "<p>As the bob is displaced to one end, it gains potential energy and as it is released from rest, it starts gaining kinetic energy till it reaches the mean position.</p>";
	infoContent = infoContent + "<p>Kinetic energy possessed by the pendulum is maximum at the mean position and zero at the extreme positions, whereas the potential energy is maximum at the extreme positions and is zero at the mean position.</p>";
	infoContent = infoContent + "<p>At intermediate positions, the energy is partly kinetic and partly potential.</p>";
	PIEupdateInfo(infoContent);

}


var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Simple Pendulum</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows a bob of fixed mass hanged from a fixed point through an inextensible weightless string</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls .There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see the simple pendulum intially at its mean position.You can also see a ruler scale to the left of the pendulum and a protractor</p>";
	helpContent = helpContent + "<p>You can drag the bob to any position and then start the experiment from that point. The protractor is divided into sectors of 15 degrees each. This gives you the idea of the maximum amplitude of the bob.</p>";
    helpContent = helpContent + "<p>Once you setup the experiment by dragging the bob to appropriate position, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the pendulum will start oscillating about a mean position.</p>";
    helpContent = helpContent + "<p>The experiment shows the three positions of the pendulum,mainly the mean position,the left extreme position and the right extreme position.</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animaion by uing the speed control buttons</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}	
	

function loadExperimentElements()
{
	var geometry;
	var material;
	PIEsetExperimentTitle("Simple Pendulum");
    PIEsetDeveloperName("Amruta Deshpande");
	PIEhideControlElement();
	initialiseexperiment();
	
	initialiseHelp();
	initialiseInfo();
	right=0;
	centerFlag=0;
	left=0;
	
	
	myBob = new THREE.Mesh(new THREE.SphereGeometry( Bobradius+0.01,32,32), new THREE.MeshLambertMaterial({color: 0xff0000}));
	myBob.position.set(2,1.7,bobZ);
	myBob.castShadow = false;
    myBob.receiveShadow = true;
	myBob.material.depthTest=false;
	myBob.renderOrder=0.4;
	PIEaddElement(myBob);
	
	
	var geometry = new THREE.PlaneGeometry( 0.24,1.8,0.1);
	var loader = new THREE.TextureLoader();
    var texture = loader.load( 'ruler.jpg' );
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 1, 1 );
    texture.anisotropy = 16;
    var material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: texture } );
	//var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
	var cube = new THREE.Mesh( geometry, material );
	cube.position.set(0.5,1.8,0);
	PIEaddElement(cube);
	PIEdragElement(cube);
	
		
	geometry = new THREE.BoxGeometry( 4* 4, 3* 3, 0.2);
    material = new THREE.MeshBasicMaterial( {color: 0xfdf6d5} );
    var myBack = new THREE.Mesh( geometry, material );
    myBack.position.set(2,2, -5 - (0.2/ 2));
    myBack.receiveShadow = true;
	myBack.renderOrder=0.1;
    PIEaddElement(myBack);
	
	
	material = new THREE.LineBasicMaterial({color:0x000000});
	geometry = new THREE.Geometry();  
	geometry.vertices.push(new THREE.Vector3(pegX,pegY,pegZ));
	geometry.vertices.push(new THREE.Vector3(2,1.7,bobZ));
	line=new THREE.Line(geometry,material);
	line.castShadow=false;
	//line.material.depthTest=false;
	PIEaddElement(line);
	PIEdragElement(myBob);
	PIEsetDrag(myBob,myBobDrag);
	
	AddProtractor();
	
	//PIEsetAreaOfInterest(/*toplx, toply, bottomrx, bottomry*/-15,35,20,-15);
	PIEresize();
	resetExperiment();
	PIEsetAreaOfInterest(0,3,4,0);

}


function resetExperiment()
{
	initialiseexperiment();
	myBob.position.set(bobX,bobY,bobZ);
	line.geometry.vertices[1]=( new THREE.Vector3(myBob.position.x,myBob.position.y,myBob.position.z));
	line.geometry.verticesNeedUpdate = true;
	if(right==1)
	{
		right=0;
		PIEscene.remove(newBobRight);
		PIEscene.remove(newLineRight);
		PIEscene.remove(meshright);
	}
	if(left==1)
	{
		left=0;
		PIEscene.remove(newBobLeft);
		PIEscene.remove(newLineLeft);
		PIEscene.remove(meshleft);
	}
	if(centerFlag==1)
	{
		centerFlag=0;
		PIEscene.remove(newBobCenter);
		PIEscene.remove(newLineCenter);
		PIEscene.remove(meshcenter);
	}
	PIEresize();
}

function updateExperimentElements(t,dt)
{
	var newX;/*new x co ordinate of the bob*/
	var newY;/*new y co ordinate of the bob*/
	var root;
	var X;
	var Y;
	var acY=9.8;
	var newTheta;/*angle between the string and the vertical during the motion*/
	var time;/*time passed in seconds*/
	if(length==0)
	{
		length=1.4;
		MaxTheta=0.267199*2;
	}
	time=t/1000;
	timeperiod=2*Math.PI*(Math.sqrt(length/acY));
	root=time*Math.sqrt(acY/length);
	newTheta=MaxTheta*Math.cos(root);
	X=length*(Math.sin(newTheta));
	Y=length*(Math.cos(newTheta));
	newX=pegX+X;
	newY=pegY-Y;
	bobZ=0;
	myBob.position.set(newX, newY, bobZ);
	line.geometry.vertices[1]=( new THREE.Vector3(myBob.position.x,myBob.position.y,myBob.position.z));
	line.geometry.verticesNeedUpdate = true;
	if(MaxTheta > 0)
	{
		if(time>=timeperiod&&right==0)
		{
			right=1;
			CreateRightPosition();
			//CreateRightText();
		}
		if(time>=timeperiod/4&&centerFlag==0)
		{
			centerFlag=1;
			CreateCenterPosition();
			//CreateCenterText();
		}
		else if(time>=timeperiod/2&&left==0)
		{
			left=1;
			CreateLeftPosition();
			//CreateLeftText();
		}
	}
	else 
	{
		if(time>=timeperiod/2&&right==0)
		{
			right=1;
			CreateRightPosition();
			//CreateRightText();
		}
		if(time>=timeperiod/4&&centerFlag==0)
		{
			centerFlag=1;
			CreateCenterPosition();
			//CreateCenterText();
		}
		else if(time<=timeperiod&&left==0)
		{
			left=1;
			CreateLeftPosition();
			//CreateLeftText();
		}
	}

	//PIEaddModalWindows();
	PIEresize();
	//PIEchangeDisplayText("Angle", MaxTheta/10);

}

