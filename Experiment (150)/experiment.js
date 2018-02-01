    /**
 * Created by saurabh on 24/2/17.
 */
 // Declaring all the variables here
// PIEcameraAngle = 45;

var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */

		var dotMaterial;
var f1Geometry;
var f1dot;
	var f2Geometry;
	var f2dot;
	var c1Geometry;
	var c1dot;
	var c2Geometry;
	var c2dot;


	var F1 = document.createElement('div');
    F1.style.position = 'absolute';
     F1.style.backgroundColor ="powderwhite";
	F1.innerHTML+="F1";
	F1.style.top = 52+ '%';
	var f2 = document.createElement('div');
    f2.style.position = 'absolute';
     f2.style.backgroundColor ="powderwhite";
	f2.innerHTML+="F2";
	f2.style.top = 52+ '%';
	var c1 = document.createElement('div');
    c1.style.position = 'absolute';
     c1.style.backgroundColor ="powderwhite";
	c1.innerHTML+="2F1";
	c1.style.top = 52+ '%';
	var c2 = document.createElement('div');
    c2.style.position = 'absolute';
     c2.style.backgroundColor ="powderwhite";
	c2.innerHTML+="2F2";
	c2.style.top = 52+ '%';
	var o = document.createElement('div');
    o.style.position = 'absolute';
     o.style.backgroundColor ="powderwhite";
	o.innerHTML+="O";
	o.style.top = 52+ '%';
	 o.style.left = 49.7 + '%';
      document.body.appendChild(o);

	var focal_length;
	var scene;
	var camera;
	var renderer;
	var loader;

	var original;   /* candle Object */
	var originalx;


	var img1;
	var img2;
	var flame;

	var pt1,pt1x,pt1y;
	var pt2,pt2y;
	var og;
	var focus;
	var geo1;
	var geo2;

	var objectChildren;
	var line1,line2,line3,line4;
	var geometry1, geometry2, geometry3, geometry4;

	var lineMaterial;
	var dashedMaterial;
	var container;
	var fixedy;

	var flame2;
	var bar1;

var lens={
	"metadata": {
		"version": 4.4,
		"type": "Object",
		"generator": "Object3D.toJSON"
	},
	"geometries": [
		{
			"uuid": "794AB8D9-775B-4CE7-9102-00F455DFCFE6",
			"type": "IcosahedronGeometry",
			"radius": 1,
			"detail": 2
		}],
	"materials": [
		{
			"uuid": "4B66AC05-D116-467B-89F5-4903B7DC9A35",
			"type": "MeshBasicMaterial",
			"color": 12698049,
			"opacity": 0.9,
			"transparent": true
		}],
	"object": {
		"uuid": "7C66621D-CC12-4F2B-8C18-38BA8BA976D7",
		"type": "Mesh",
		"name": "Icosahedron 1",
		"matrix": [1,0,0,0,0,4.0252532958984375,0,0,0,0,0.33431947231292725,0,0,0,0,1],
		"geometry": "794AB8D9-775B-4CE7-9102-00F455DFCFE6",
		"material": "4B66AC05-D116-467B-89F5-4903B7DC9A35"
	}
};

var final={
	"metadata": {
		"version": 4.4,
		"type": "Object",
		"generator": "Object3D.toJSON"
	},
	"geometries": [
		{
			"uuid": "F3310047-D2B1-487A-86C2-1F097700B965",
			"type": "CylinderBufferGeometry",
			"radiusTop": 1,
			"radiusBottom": 1,
			"height": 2,
			"radialSegments": 32,
			"heightSegments": 1,
			"openEnded": false
		},
		{
			"uuid": "5FECF8C6-5CD7-4F95-9D17-580774AC9009",
			"type": "SphereBufferGeometry",
			"radius": 1,
			"widthSegments": 32,
			"heightSegments": 16,
			"phiStart": 0,
			"phiLength": 6.283185307179586,
			"thetaStart": 0,
			"thetaLength": 3.141592653589793
		}],
	"materials": [
		{
			"uuid": "48CC923C-A850-46BF-B522-66500A0850E8",
			"type": "MeshLambertMaterial",
			"color": 4726710
		},
		{
			"uuid": "7211A84F-CEAD-4B89-8932-35A8EEF26238",
			"type": "MeshLambertMaterial",
			"color": 16744448
		}],
	"object": {
		"uuid": "65DA0251-396A-4B92-BB11-B52561151C21",
		"type": "Group",
		"name": "Group 11",
		"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,-0.009665879420936108,0,0,1],
		"children": [
			{
				"uuid": "2125677E-C9C4-412F-9711-A00419EF92EF",
				"type": "Mesh",
				"name": "Cylinder 3",
				"matrix": [0.3785148859024048,0,0,0,0,1.1740063428878784,0,0,0,0,0.2488725781440735,0,0,1.1582907438278198,0,1],
				"geometry": "F3310047-D2B1-487A-86C2-1F097700B965",
				"material": "48CC923C-A850-46BF-B522-66500A0850E8"
			},
			{
				"uuid": "E5F73FB4-822E-411B-A443-1AFE3072D506",
				"type": "Mesh",
				"name": "Sphere 4",
				"matrix": [0.21289653927087784,0,0,0,0,1.20455586194992065,0,0,0,0,0.10930625349283218,0,0,2.6216588020324707,0.011082267388701439,1],
				"geometry": "5FECF8C6-5CD7-4F95-9D17-580774AC9009",
				"material": "7211A84F-CEAD-4B89-8932-35A8EEF26238"
			}]
	}
};

  var bar=
	  {
	"metadata": {
		"version": 4.4,
		"type": "Object",
		"generator": "Object3D.toJSON"
	},
	"geometries": [
		{
			"uuid": "F3310047-D2B1-487A-86C2-1F097700B965",
			"type": "CylinderBufferGeometry",
			"radiusTop": 1,
			"radiusBottom": 1,
			"height": 2,
			"radialSegments": 32,
			"heightSegments": 1,
			"openEnded": false
		}],
	"materials": [
		{
			"uuid": "48CC923C-A850-46BF-B522-66500A0850E8",
			"type": "MeshLambertMaterial",
			"color": 4726710,
			"depthFunc": 3,
			"depthTest": true,
			"depthWrite": true,
			"skinning": false,
			"morphTargets": false
		}],
	"object": {
		"uuid": "2125677E-C9C4-412F-9711-A00419EF92EF",
		"type": "Mesh",
		"name": "Cylinder 3",
		"matrix": [0.378515,0,0,0,0,1.449731,0,0,0,0,0.248873,0,0,1.455556,0,1],
		"geometry": "F3310047-D2B1-487A-86C2-1F097700B965",
		"material": "48CC923C-A850-46BF-B522-66500A0850E8"
	}
};

  var flame1=
	  {
	"metadata": {
		"version": 4.4,
		"type": "Object",
		"generator": "Object3D.toJSON"
	},
	"geometries": [
		{
			"uuid": "5FECF8C6-5CD7-4F95-9D17-580774AC9009",
			"type": "SphereBufferGeometry",
			"radius": 1,
			"widthSegments": 32,
			"heightSegments": 16,
			"phiStart": 0,
			"phiLength": 6.283185,
			"thetaStart": 0,
			"thetaLength": 3.141593
		}],
	"materials": [
		{
			"uuid": "7211A84F-CEAD-4B89-8932-35A8EEF26238",
			"type": "MeshLambertMaterial",
			"color": 16744448,
			"depthFunc": 3,
			"depthTest": true,
			"depthWrite": true,
			"skinning": false,
			"morphTargets": false
		}],
	"object": {
		"uuid": "E5F73FB4-822E-411B-A443-1AFE3072D506",
		"type": "Mesh",
		"name": "Sphere 4",
		"matrix": [0.578563,0,0,0,0,0.8001357,0,0,0,0,0.467125,0,0,0,-0.003133,1],
		"geometry": "5FECF8C6-5CD7-4F95-9D17-580774AC9009",
		"material": "7211A84F-CEAD-4B89-8932-35A8EEF26238"
	}
};





var flag;
var left;
var clock;

var bar1y;
var bar1x;

var pastoriginalx = -30;

var increment=0;
var dir;
var origin;
var	arrowHelper;
var increment1=0;
var dir1;
var origin1;
var	arrowHelper1;
var increment2=0;
var dir2;
var origin2;
var	arrowHelper2;
var increment3=0;
var dir3;
var origin3;
var	arrowHelper3;
var dir4;
var origin4;
var arrowHelper4;
var dir5;
var origin5;
var arrowHelper5;
var increment4=0;
var increment5=0;

var h=0;
var slope1;
var slope2 ;
var intersectionx = 0;
var intersectiony = 0;
var intersection = 0;

var d;
var d1;
var d2;
var d3;
var d4;
var d5;

var geometry;
var material ;
var circle;
var circleleft;
var circleright;

var  flagcircle=0;
var circleleftflagscale=0;
var flagstart=0;


function mycircleDrag(element, newpos)
{

	var circley = newpos.y;
	var circlex = newpos.x;
	var limit;
	if(focal_length>=18.099999999999998)
	{limit = 23 - focal_length + 1;}
	else {
		limit = (23 - focal_length);if(limit >= 7){ limit = 7;}
	}

	if(circley >= limit)   //9.117218582727347
	{
		circley = limit;
	}
	if(circley <= 1)
	{
		circley = 1;
	}
	if(circlex != 0)
	{
		circlex = 0;
	}
	circle.position.set(circlex,circley,newpos.z);
	bar1.scale.y = 0.3*circle.position.y;
	PIErender();
}
function mycircleleftDrag(element, newpos)
{

	var circlelefty = newpos.y;
	var circleleftx = newpos.x;
	if(circlelefty != 0)
	{
		circlelefty = 0;
	}
	if(circleleftx <= -1.5)
	{
		circleleftx = -1.5;
	}
	if(circleleftx >= -0.69)
	{
		circleleftx = -0.69;
	}
	circleleft.position.set(circleleftx,circlelefty,newpos.z);
}

function handleFocal_lengthnew(newValue)
{
		focal_length=newValue;
		lens.scale.x=15/focal_length;
		circle.position.x =
    // if (PIEanimationON == false)
    // {
    //
		// 			img2.visible = false;
		// 			img1.visible = false;
		// 			resetExperiment();
		// 			PIErender();
    // }
    	  F1.style.left = 49.7 - ((focal_length*11.25 * 49.7)/646) + '%';
      document.body.appendChild(F1);
      f2.style.left = 49.7 + ((focal_length*10.5 * 49.7)/646) + '%';
      document.body.appendChild(f2);
      c1.style.left = 49.7 - 2*((focal_length*11.25 * 49.7)/646) + '%';
      document.body.appendChild(c1);
      c2.style.left = 49.7 + 2*((focal_length*10.5 * 49.7)/646) + '%';
      document.body.appendChild(c2);
        PIEscene.remove(f1dot);
		PIEscene.remove(f2dot);
		PIEscene.remove(c1dot);
		PIEscene.remove(c2dot);
      dotMaterial = new THREE.PointCloudMaterial( { size:5 , sizeAttenuation: false, color:0x000000 ,} );
		f1Geometry = new THREE.Geometry();
		f1Geometry.vertices.push(new THREE.Vector3(-focal_length, 0, 0));
		f1dot = new THREE.PointCloud( f1Geometry, dotMaterial );
		// PIEaddElement(f1dot );
		f2Geometry = new THREE.Geometry();
		f2Geometry.vertices.push(new THREE.Vector3(focal_length, 0, 0));
		f2dot = new THREE.PointCloud( f2Geometry, dotMaterial );
		// PIEaddElement(f2dot );
		c1Geometry = new THREE.Geometry();
		c1Geometry.vertices.push(new THREE.Vector3(-2*focal_length, 0, 0));
		c1dot = new THREE.PointCloud( c1Geometry, dotMaterial );
		// PIEaddElement(c1dot );
		c2Geometry = new THREE.Geometry();
		c2Geometry.vertices.push(new THREE.Vector3(2*focal_length, 0, 0));
		c2dot = new THREE.PointCloud( c2Geometry, dotMaterial );
		// PIEaddElement(c2dot );

		f1dot = new THREE.PointCloud( f1Geometry, dotMaterial );
		PIEaddElement(f1dot );
			f2dot = new THREE.PointCloud( f2Geometry, dotMaterial );
		PIEaddElement(f2dot );
		c1dot = new THREE.PointCloud( c1Geometry, dotMaterial );
		PIEaddElement(c1dot );
			 c2dot = new THREE.PointCloud( c2Geometry, dotMaterial );
		PIEaddElement(c2dot );

    PIErender();
}

function handleIncidence(newValue)
{
	var circley = newValue;
	var limit;
	if(focal_length>=18.099999999999998)
	{limit = 23 - focal_length + 1;}
	else {
		limit = (23 - focal_length);if(limit >= 7){ limit = 7;}
	}
	if(circley >= limit)   //9.117218582727347
	{
		circley = limit;
	}
	if(circley <= 1)
	{
		circley = 1;
	}

	circle.position.y = circley;
	bar1.scale.y = 0.3*circle.position.y;

	PIErender();
}

function handleFocal_length(newValue)
{
	focal_length=newValue;
		lens.scale.x=15/focal_length;
    // if (PIEanimationON == false)
    // {
    //
		// 			img2.visible = false;
		// 			img1.visible = false;
		// 			resetExperiment();
		// 			PIErender();
    // }
    	  F1.style.left = 49.7 - ((focal_length*11.25 * 49.7)/646) + '%';
      document.body.appendChild(F1);
      f2.style.left = 49.7 + ((focal_length*10.5 * 49.7)/646) + '%';
      document.body.appendChild(f2);
      c1.style.left = 49.7 - 2*((focal_length*11.25 * 49.7)/646) + '%';
      document.body.appendChild(c1);
      c2.style.left = 49.7 + 2*((focal_length*10.5 * 49.7)/646) + '%';
      document.body.appendChild(c2);
        PIEscene.remove(f1dot);
		PIEscene.remove(f2dot);
		PIEscene.remove(c1dot);
		PIEscene.remove(c2dot);
      dotMaterial = new THREE.PointCloudMaterial( { size:5 , sizeAttenuation: false, color:0x000000 ,} );
		f1Geometry = new THREE.Geometry();
		f1Geometry.vertices.push(new THREE.Vector3(-focal_length, 0, 0));
		f1dot = new THREE.PointCloud( f1Geometry, dotMaterial );
		// PIEaddElement(f1dot );
		f2Geometry = new THREE.Geometry();
		f2Geometry.vertices.push(new THREE.Vector3(focal_length, 0, 0));
		f2dot = new THREE.PointCloud( f2Geometry, dotMaterial );
		// PIEaddElement(f2dot );
		c1Geometry = new THREE.Geometry();
		c1Geometry.vertices.push(new THREE.Vector3(-2*focal_length, 0, 0));
		c1dot = new THREE.PointCloud( c1Geometry, dotMaterial );
		// PIEaddElement(c1dot );
		c2Geometry = new THREE.Geometry();
		c2Geometry.vertices.push(new THREE.Vector3(2*focal_length, 0, 0));
		c2dot = new THREE.PointCloud( c2Geometry, dotMaterial );
		// PIEaddElement(c2dot );

f1dot = new THREE.PointCloud( f1Geometry, dotMaterial );
		PIEaddElement(f1dot );
			f2dot = new THREE.PointCloud( f2Geometry, dotMaterial );
		PIEaddElement(f2dot );
		c1dot = new THREE.PointCloud( c1Geometry, dotMaterial );
		PIEaddElement(c1dot );
			 c2dot = new THREE.PointCloud( c2Geometry, dotMaterial );
		PIEaddElement(c2dot );

    PIErender();
}




function initialiseControls()
{
   // initialiseControlVariables();
    /* Create Input Panel */

   PIEaddInputSlider("Focal length",15, handleFocal_lengthnew,10,18, 1);
   PIEaddInputSlider("Incidence Point",3, handleIncidence,2,6, 0.1);

    /* Create Display Panel */
   PIEaddDisplayText("Incidence Point",-15);
   PIEaddDisplayText("Focal length",15);

}


/******************* End of GUI control objects code ***********************/

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Tracing rays at a convex lens help</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows a candle as an erect object, a transparent convex lens placed at the center and a principal axis.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. You will be able to change the focal length(radius of the lens) and position of point of incidence by dragging the red circle near the lens on the axis and another one inside the lens at the point of incidence respectively,once the animation starts.<b> However, you will be able to drag them only when the animation starts. </b> </p>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>Now, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, following the laws of refraction, image of the object will be formed by convex lens depending on the  " +
        "position of the object with respect to the lens and the focal length of the lens.</p>";
    helpContent = helpContent + "<p>The right hand panel now shows the value of one experiment variable during animation.</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Focal length&nbsp;&nbsp;:&nbsp;Shows the focal length of the convex lens at that instance.</li>";
    helpContent = helpContent + "</ul>";
        helpContent = helpContent + "<h5>While the animation is on, you can change the <i>'radius of the lens'</i> and the<i> 'position of point of incidence of the ray onto the lens'</i> by dragging the two SMALL RED CIRCLES ,one is near the lens on the axis and the other one is inside the lens placed at the point of incidence.</h5>";

    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play button on the top line.</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animation by using the speed control buttons.</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);

}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Tracing rays at a convex lens concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows a candle as an erect object, a transparent convex lens placed at the center and a principal axis.</p>";
    infoContent = infoContent + "<h3>Convex Lens</h3>";
    infoContent = infoContent + "<p>A convex lens is a transparent material" +
        " having two spherical surfaces bulging outwards.Convex lens converges light rays, hence they are called as converging lenses." +
    " If you pass parallel rays from a surface of the lens, then after refraction you get principal focus on the opposite side where all rays gets converged. A lens has two principal foci <b>F1</b> and <b>F2.</b> as there are two sides." +
		" The distance of the principal focus from the optical centre of a lens is called its <b>focal length</b>. The centres of curvature of a lens are represented as <b>C1</b> or <b>2F1</b> and <b>C2</b> or <b>2F2</b>.The central point of a lens is the optical centre represented by the letter <b>O</b>.</p>";
	infoContent = infoContent + "<h3>Image formation by a lens</h3>";
    infoContent = infoContent + "<p>The image formation by a lens, due to refraction, can be studied using the lens formula <b>(1/v)-(1/u)=(1/f),</b><br/>where '<b>v</b>' is image-distance,'<b>u</b>' is object-distance and '<b>f</b>' is the focal length. "+
        "The lens formula given above is general and is valid in all situations for any spherical lens when used with proper signs and conventions. </p>";
infoContent = infoContent + "<h3> Image Formation in Lenses Using Ray Diagrams</h3>";
    infoContent = infoContent + "<p>We can represent image formation by lenses using ray diagrams. Ray diagrams describes the nature, position and relative size of the image formed by lenses after refraction. For drawing ray diagrams in lenses, we consider any two of the following rays:<br/> " +
		"<br/><b>1)</b><i> A ray of light from the object, parallel to the principal axis,after refraction from a convex lens, passes through the principal focus on the other side of the lens.<br/>" +
		"</i><b>2)</b><i> A ray of light passing through a principal focus,after refraction from a convex lens,will emerge parallel to the principal axis.<br/>" +
		"</i><b>3)</b><i> A ray of light passing through the optical centre of a lens will emerge without any deviation.</p>";
    infoContent = infoContent + "</i><h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}


function initialiseScene()
{
    /* Initialise Scene Variables */
    mySceneTLX = -30;//0.0;
    mySceneTLY = 30;//3.0;
    mySceneBRX = 30;//4.0;
    mySceneBRY = -30;
    mySceneW   = 66;//(mySceneBRX - mySceneTLX);
    mySceneH   = 66;//(mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;

}


var xxx;
var yyy;
var zzz	;
var pastcircley;
var pastleft;
var pastright;

var anistart=0;
function loadExperimentElements()
{
    PIEsetExperimentTitle("Tracing rays at a convex lens");
    PIEsetDeveloperName("Saurabh Rathi");

    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();
    initialiseControls();
       myBallRadius = mySceneW/30.0;
    wallThickness = 0.20;

     /* Barriers */
    leftB=mySceneTLX;
    rightB=mySceneBRX;
    bottomB=mySceneBRY;
    topB=mySceneTLY;
    var backB=-40.0;

	   // geometry1=new THREE.BoxGeometry(mySceneW *2,mySceneH *2,0);
        loader=new THREE.TextureLoader();
        texture=loader.load('background.jpg');  //background
       material=new THREE.MeshBasicMaterial({map:texture});
       // myback1=new THREE.Mesh(geometry1,material1);
       // myback1.position.set(0,0,-2);
       // myback1.receiveShadow=true;
       // PIEaddElement(myback1);
       //material=new THREE.MeshBasicMaterial( { color: 0xffffff} ); //mesh lambert material  // just by using meshbasicmaterial i could avoid shadows on the background
       geometry=new THREE.PlaneGeometry( mySceneW * 2, mySceneH * 2 );
       var myback=new THREE.Mesh(geometry,material);
       myback.position.set(0,0,backB - (wallThickness / 2));
       myback.receiveShadow=false;
       PIEaddElement(myback);
	/* Floor */
	 geometry = new THREE.BoxGeometry( mySceneW * 2, wallThickness, 100);
   material = new THREE.MeshLambertMaterial( {color: 0xaaaaaa} );
    myFloor  = new THREE.Mesh( geometry, material );
    // myFloor.lookAt(new THREE.Vector3(0,1,0));
    myFloor.position.set(myCenterX, (bottomB/2)-10, 0.0);
    myFloor.receiveShadow = true;
    PIEaddElement(myFloor);
    /* Ceiling */
    geometry = new THREE.BoxGeometry( mySceneW * 2, wallThickness, 100 );
    material = new THREE.MeshLambertMaterial( {color: 0xffffff} );
    myCeiling = new THREE.Mesh( geometry, material );
    myCeiling.position.set(myCenterX, topB-7, 0.0);
    myFloor.receiveShadow = true;
    PIEaddElement(myCeiling);
    /* Left */
    geometry = new THREE.BoxGeometry( wallThickness, mySceneH * 2, 100 );
    material = new THREE.MeshLambertMaterial( {color: 0xaa0000} );
    myLeft = new THREE.Mesh( geometry, material );
    myLeft.position.set(leftB*1.5, myCenterY, 0.0);
    myLeft.receiveShadow = true;
    PIEaddElement(myLeft);
    /* Right */
    geometry = new THREE.BoxGeometry( wallThickness, mySceneH * 2, 100 );
    material = new THREE.MeshLambertMaterial( {color: 0xaa0000} );
    myRight = new THREE.Mesh( geometry, material );
    myRight.position.set(1.5*rightB +2, myCenterY, 0.0);
    myRight.receiveShadow = true;
    PIEaddElement(myRight);


        focal_length=15;

        loader=new THREE.ObjectLoader();


    	var axisGeometry=new THREE.Geometry();
		axisGeometry.vertices.push(new THREE.Vector3(-500,0,0),new THREE.Vector3(500,0,0),0);
			axisGeometry.castShadow = false;

		var axisMaterial=new THREE.LineBasicMaterial({color:0xff0000});
			axisMaterial.castShadow = false;

		var axis=new THREE.Line(axisGeometry,axisMaterial);
		axis.castShadow = false;

		PIEaddElement(axis);

		lens=loader.parse(lens);
		lens.position.y=0;
		lens.scale.y*=2.5;
		lens.castShadow=false;
		PIEaddElement(lens);

	bar1=loader.parse(final);
	PIEaddElement(bar1);
	bar1.position.x=-30;
	objectChildren=bar1.children;
	flame2=objectChildren[1];
	bar1.scale.y*=1.5;

	geometry = new THREE.CircleGeometry( 0.5, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0xff0000,opacity:10 } );
	circle = new THREE.Mesh( geometry, material );
	circleleft = new THREE.Mesh( geometry, material );
	circleright = new THREE.Mesh( geometry, material );
	circle.position.set(0,(flame2.position.y + 2),0);
	PIEaddElement( circle );
	PIEaddElement( circleleft );
	PIEdragElement(circleleft);
	PIEsetDrag(circleleft, mycircleleftDrag);
	PIEdragElement(circle);
	PIEsetDrag(circle, mycircleDrag);

	//PIEaddElement( circleright );

	circleleft.position.set(-1,0,0);
	//circleright.position.set(1,0,0);
	//circle.visible=false;
	pastcircley = flame2.position.y + 2;
	pastleft = circleleft.position.x;

	// pastoriginalx = -5;
		img1=loader.parse(final);
		img1.visible=false;
		img1.position.x=55;

		img2=loader.parse(final);
		img2.rotation.z=Math.PI;
		img2.position.x=15;
		img2.visible=false;

		PIEaddElement(img1);
		PIEaddElement(img2);


	originalx = bar1.position.x;
	pt1x = originalx;
	pt1y = circle.position.y;
	pt2y = circle.position.y;

	 pt1 = new THREE.Vector3(pt1x,pt1y,0);
	 og = new THREE.Vector3(0,0,0);
	 pt2 = new THREE.Vector3(0,pt2y,0);
	focus = new THREE.Vector3(focal_length,0,0);



					slope1=((pt1.y)/(pt1.x)) ;
	 				slope2=(pt2.y)/(((pt2.x)-(focus.x)))  ;
	 				intersectionx = (pt2.y)/(slope1-slope2);
					intersectiony = slope1*intersectionx;
					intersection=new THREE.Vector3(intersectionx,intersectiony,0);


			////  left up geometry 1  increment h flag1

				  dir= new THREE.Vector3(10,0,0);   //dir is from origin.
				dir.normalize();
				 origin = new THREE.Vector3(pt1x + 0.3,pt1y,0);
					arrowHelper = new THREE.ArrowHelper(dir,origin,increment ,0x000000,0.4,0.3);
				PIEaddElement(arrowHelper);

					dir1= new THREE.Vector3(-pt1x , -pt1y ,0);    //dir is from origin.
					dir1.normalize();
					origin1 = new THREE.Vector3(pt1x + 0.3 ,pt1y,0);
					arrowHelper1 = new THREE.ArrowHelper(dir1,origin1,increment1 ,0x000000,0.4,0.3);
					PIEaddElement(arrowHelper1);

					dir2= new THREE.Vector3(intersectionx,intersectiony,0);     //dir is from origin.
					dir2.normalize();
					origin2 = new THREE.Vector3(0,0,0);
					arrowHelper2 = new THREE.ArrowHelper(dir2,origin2,increment2 + 0.25,0x000000,0.4,0.3);
					PIEaddElement(arrowHelper2);

					dir3= new THREE.Vector3(intersectionx,(intersectiony - pt1y),0);     //dir is from origin.
					dir3.normalize();
					origin3 = new THREE.Vector3(0,pt2y,0);
					arrowHelper3 = new THREE.ArrowHelper(dir3,origin3,(increment3 +0.25),0x000000,0.4,0.3);
					PIEaddElement(arrowHelper3);

					  d3 = Math.sqrt(intersectionx*intersectionx + ((intersectiony - pt2y)*(intersectiony - pt2y))) ;


					//candle se f1

					 dir4 = new THREE.Vector3((-pt1x),-(pt1y - intersectiony),0); //pt1y+(focal_length
					dir4.normalize();
					origin4 =new THREE.Vector3(pt1x,pt1y,0);
					arrowHelper4 = new THREE.ArrowHelper(dir4,origin4,(increment4 +0.25),0x000000,0.4,0.3);
					PIEaddElement(arrowHelper4);

					//lensdown se intersectiony i.e imagey
					 dir5 = new THREE.Vector3(1,0,0); //pt1y+(focal_length
					dir5.normalize();
					origin5 =new THREE.Vector3(0,intersectiony,0);
					arrowHelper5 = new THREE.ArrowHelper(dir5,origin5,(increment5 +0.25),0x000000,0.4,0.3);
					PIEaddElement(arrowHelper5);

			dotMaterial = new THREE.PointCloudMaterial( { size:5 , sizeAttenuation: false, color:0x000000 ,} );
		f1Geometry = new THREE.Geometry();
		f1Geometry.vertices.push(new THREE.Vector3(-focal_length, 0, 0));
		f1Geometry.verticesNeedUpdate=true;
		f1dot = new THREE.PointCloud( f1Geometry, dotMaterial );
		PIEaddElement(f1dot );
		//PIEdragElement(f1dot);
		f2Geometry = new THREE.Geometry();
		f2Geometry.vertices.push(new THREE.Vector3(focal_length, 0, 0));
		f2dot = new THREE.PointCloud( f2Geometry, dotMaterial );
		PIEaddElement(f2dot );
			//PIEdragElement(f1dot);
		c1Geometry = new THREE.Geometry();
		c1Geometry.vertices.push(new THREE.Vector3(-2*focal_length, 0, 0));
		c1dot = new THREE.PointCloud( c1Geometry, dotMaterial );
		PIEaddElement(c1dot );
		c2Geometry = new THREE.Geometry();
		c2Geometry.vertices.push(new THREE.Vector3(2*focal_length, 0, 0));
		c2dot = new THREE.PointCloud( c2Geometry, dotMaterial );
		PIEaddElement(c2dot );



		 F1.style.left = 49.7 - ((focal_length*11.25 * 49.7)/646) + '%';
      document.body.appendChild(F1);
      f2.style.left = 49.7 + ((focal_length*10.5 * 49.7)/646) + '%';
      document.body.appendChild(f2);
      c1.style.left = 49.7 - 2*((focal_length*11.25 * 49.7)/646) + '%';
      document.body.appendChild(c1);
      c2.style.left = 49.7 + 2*((focal_length*10.5 * 49.7)/646) + '%';
      document.body.appendChild(c2);
		   h=0;

    /* Reset all positions */
    // PIEstartAnimation();
    //
    // resetExperiment();
	anistart =1;
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);

}


 increment1=0;
 increment2=0;
 increment3=0;
	var h=0;
	var h1=0;
	var h2=0;
	var h3=0;
	var flag1=0;
	var flag2=0;
	var flag3=0;
	var flag4=0;
	var flag5=0;
	var flag6=0;
	function cleanup()
	{
			PIEscene.remove(arrowHelper);
			PIEscene.remove(arrowHelper1);
			PIEscene.remove(arrowHelper2);
			PIEscene.remove(arrowHelper3);
			PIEscene.remove(arrowHelper4);
			PIEscene.remove(arrowHelper5);
	}


function resetExperiment()
{

  cleanup();
  anistart=1;
		//PIEscene.remove(circle);
		circleleftflagscale = 1;

		bar1.scale.y = 0.3*(4.621658802032471);
		flagcircle = 0;
		var newfocal_length = 15;
		lens.scale.x =15/newfocal_length;

		focal_length  = newfocal_length;
		handleFocal_length(newfocal_length);
		circleleft.position.set(-1,0,0);
		pastleft = circleleft.position.x;

		circle.position.set(0,(flame2.position.y + 2),0);
		img1.visible=false;img2.visible =false;
	 	increment=0;increment1=0;increment2=0;increment3=0;increment4=0;increment5=0;
		 h=0;h1=0;h2=0;h3=0;
		flag1=0;flag2=0;flag3=0;flag4=0;
		flag5=0;
		flag6=0;
		 pastoriginalx = bar1.position.x;
		 originalx = bar1.position.x;
		pt1x = originalx;
		pt1y =  4.621658802032471;///circle.position.y;///flame2.position.y +2;
		pt2y = 4.621658802032471;///circle.position.y;//flame2.position.y +2;

		 pt1 = new THREE.Vector3(pt1x,pt1y,0);
		 og = new THREE.Vector3(0,0,0);
		 pt2 = new THREE.Vector3(0,pt2y,0);
		focus = new THREE.Vector3(focal_length,0,0);

			////  left up geometry 1  increment h flag1
		dir= new THREE.Vector3(10,0,0);   //dir is from origin.
		dir.normalize();
		origin = new THREE.Vector3(pt1x,pt1y,0);
		arrowHelper = new THREE.ArrowHelper(dir,origin,increment + 0.25,0x000000,0.4,0.3);
		PIEaddElement(arrowHelper);

		dir1= new THREE.Vector3(-pt1x , -pt1y ,0);    //dir is from origin.
		dir1.normalize();
		origin1 = new THREE.Vector3(pt1x,pt1y,0);
		arrowHelper1 = new THREE.ArrowHelper(dir1,origin1,increment1 + 0.25,0x000000,0.4,0.3);
		PIEaddElement(arrowHelper1);

		slope1=((pt1.y)/(pt1.x)) ;
	 	slope2=(pt2.y)/(((pt2.x)-(focus.x)))  ;
	 	intersectionx = (pt2.y)/(slope1-slope2);
		intersectiony = slope1*intersectionx;
		intersection=new THREE.Vector3(intersectionx,intersectiony,0);


		dir2= new THREE.Vector3(intersectionx,intersectiony,0);     //dir is from origin.
		dir2.normalize();
		origin2 = new THREE.Vector3(0,0,0);
		arrowHelper2 = new THREE.ArrowHelper(dir2,origin2,increment2 + 0.25,0x000000,0.4,0.3);
		PIEaddElement(arrowHelper2);

		d3 = Math.sqrt(intersectionx*intersectionx + ((intersectiony - pt2y)*(intersectiony - pt2y))) ;

		dir3= new THREE.Vector3(intersectionx,(intersectiony - pt1y),0);     //dir is from origin.
		dir3.normalize();
		origin3 = new THREE.Vector3(0,pt2y,0);
		arrowHelper3 = new THREE.ArrowHelper(dir3,origin3,(increment3 +0.25),0x000000,0.4,0.3);
		PIEaddElement(arrowHelper3);

		//candle se f1
		 dir4 = new THREE.Vector3((-pt1x),-(pt1y - intersectiony),0); //pt1y+(focal_length
		dir4.normalize();
		origin4 =new THREE.Vector3(pt1x ,pt1y,0);
		arrowHelper4 = new THREE.ArrowHelper(dir4,origin4,(increment4 +0.25),0x000000,0.4,0.3);
		PIEaddElement(arrowHelper4);

		//lensdown se intersectiony i.e imagey
		 dir5 = new THREE.Vector3(1,0,0); //pt1y+(focal_length
		dir5.normalize();
		origin5 =new THREE.Vector3(0,intersectiony,0);
		arrowHelper5 = new THREE.ArrowHelper(dir5,origin5,(increment5 +0.25),0x000000,0.4,0.3);
		PIEaddElement(arrowHelper5);


}


function updateExperimentElements(t, dt) {


 	xxx = circle.position.x;
	yyy	= circle.position.y;
	zzz	= circle.position.z;
	if(pastleft != circleleft.position.x)
	{

		// PIEscene.remove(circle);
		circleleftflagscale = 1;

		bar1.scale.y = 0.3*(circle.position.y);
		flagcircle = 0;
		var delta =  pastleft - circleleft.position.x ;
		var newfocal_length = focal_length - 10*delta;
		lens.scale.x =15/newfocal_length;
		PIErender();
		focal_length  = newfocal_length;
		handleFocal_length(newfocal_length);
		pastleft = circleleft.position.x;

    	// PIEstopAnimation();
		PIEscene.remove(arrowHelper);PIEscene.remove(arrowHelper1);PIEscene.remove(arrowHelper2);PIEscene.remove(arrowHelper3);
		PIEscene.remove(arrowHelper4);
		PIEscene.remove(arrowHelper5);

		img1.visible=false;img2.visible =false;
	 	increment=0;increment1=0;increment2=0;increment3=0;increment4=0;increment5=0;
		 h=0;h1=0;h2=0;h3=0;
		flag1=0;flag2=0;flag3=0;flag4=0;
		flag5=0;
		flag6=0;
		 pastoriginalx = bar1.position.x;
		 originalx = bar1.position.x;
		pt1x = originalx;
		pt1y = circle.position.y; ///4.621658802032471;//////flame2.position.y +2;
		pt2y = circle.position.y;///4.621658802032471;/////flame2.position.y +2;

		 pt1 = new THREE.Vector3(pt1x,pt1y,0);
		 og = new THREE.Vector3(0,0,0);
		 pt2 = new THREE.Vector3(0,pt2y,0);
		focus = new THREE.Vector3(focal_length,0,0);

			////  left up geometry 1  increment h flag1
		dir= new THREE.Vector3(10,0,0);   //dir is from origin.
		dir.normalize();
		origin = new THREE.Vector3(pt1x,pt1y,0);
		arrowHelper = new THREE.ArrowHelper(dir,origin,increment + 0.25,0x000000,0.4,0.3);
		PIEaddElement(arrowHelper);

		dir1= new THREE.Vector3(-pt1x , -pt1y ,0);    //dir is from origin.
		dir1.normalize();
		origin1 = new THREE.Vector3(pt1x,pt1y,0);
		arrowHelper1 = new THREE.ArrowHelper(dir1,origin1,increment1 + 0.25,0x000000,0.4,0.3);
		PIEaddElement(arrowHelper1);

		slope1=((pt1.y)/(pt1.x)) ;
	 	slope2=(pt2.y)/(((pt2.x)-(focus.x)))  ;
	 	intersectionx = (pt2.y)/(slope1-slope2);
		intersectiony = slope1*intersectionx;
		intersection=new THREE.Vector3(intersectionx,intersectiony,0);


		dir2= new THREE.Vector3(intersectionx,intersectiony,0);     //dir is from origin.
		dir2.normalize();
		origin2 = new THREE.Vector3(0,0,0);
		arrowHelper2 = new THREE.ArrowHelper(dir2,origin2,increment2 + 0.25,0x000000,0.4,0.3);
		PIEaddElement(arrowHelper2);

		d3 = Math.sqrt(intersectionx*intersectionx + ((intersectiony - pt2y)*(intersectiony - pt2y))) ;

		dir3= new THREE.Vector3(intersectionx,(intersectiony - pt1y),0);     //dir is from origin.
		dir3.normalize();
		origin3 = new THREE.Vector3(0,pt2y,0);
		arrowHelper3 = new THREE.ArrowHelper(dir3,origin3,(increment3 +0.25),0x000000,0.4,0.3);
		PIEaddElement(arrowHelper3);

		//candle se f1
		 dir4 = new THREE.Vector3((-pt1x),-(pt1y - intersectiony),0); //pt1y+(focal_length
		dir4.normalize();
		origin4 =new THREE.Vector3(pt1x,pt1y,0);
		arrowHelper4 = new THREE.ArrowHelper(dir4,origin4,(increment4 +0.25),0x000000,0.4,0.3);
		PIEaddElement(arrowHelper4);

		//lensdown se intersectiony i.e imagey
		 dir5 = new THREE.Vector3(1,0,0); //pt1y+(focal_length
		dir5.normalize();
		origin5 =new THREE.Vector3(0,intersectiony,0);
		arrowHelper5 = new THREE.ArrowHelper(dir5,origin5,(increment5 +0.25),0x000000,0.4,0.3);
		PIEaddElement(arrowHelper5);

    }
	if(pastcircley != circle.position.y && anistart)
		{
			anistart = 0 ;
			//flagstart=1;
			pastcircley = circle.position.y;
			//flagcircle=1;
			PIEscene.remove(arrowHelper);
			PIEscene.remove(arrowHelper1);
			PIEscene.remove(arrowHelper2);
			PIEscene.remove(arrowHelper3);
			PIEscene.remove(arrowHelper4);
			PIEscene.remove(arrowHelper5);

			bar1.scale.y = 0.3*circle.position.y;

			PIErender();

			originalx = bar1.position.x;
	pt1x = originalx;
	pt1y = circle.position.y;
	pt2y = circle.position.y;

	 pt1 = new THREE.Vector3(pt1x,pt1y,0);
	 og = new THREE.Vector3(0,0,0);
	 pt2 = new THREE.Vector3(0,pt2y,0);
	focus = new THREE.Vector3(focal_length,0,0);



					slope1=((pt1.y)/(pt1.x)) ;
	 				slope2=(pt2.y)/(((pt2.x)-(focus.x)))  ;
	 				intersectionx = (pt2.y)/(slope1-slope2);
					intersectiony = slope1*intersectionx;
					intersection=new THREE.Vector3(intersectionx,intersectiony,0);


			////  left up geometry 1  increment h flag1

				  dir= new THREE.Vector3(10,0,0);   //dir is from origin.
				dir.normalize();
				 origin = new THREE.Vector3(pt1x + 0.3,pt1y,0);
					arrowHelper = new THREE.ArrowHelper(dir,origin,increment ,0x000000,0.4,0.3);
				PIEaddElement(arrowHelper);

					dir1= new THREE.Vector3(-pt1x , -pt1y ,0);    //dir is from origin.
					dir1.normalize();
					origin1 = new THREE.Vector3(pt1x + 0.3 ,pt1y,0);
					arrowHelper1 = new THREE.ArrowHelper(dir1,origin1,increment1 ,0x000000,0.4,0.3);
					PIEaddElement(arrowHelper1);

					dir2= new THREE.Vector3(intersectionx,intersectiony,0);     //dir is from origin.
					dir2.normalize();
					origin2 = new THREE.Vector3(0,0,0);
					arrowHelper2 = new THREE.ArrowHelper(dir2,origin2,increment2 + 0.25,0x000000,0.4,0.3);
					PIEaddElement(arrowHelper2);

					dir3= new THREE.Vector3(intersectionx,(intersectiony - pt1y),0);     //dir is from origin.
					dir3.normalize();
					origin3 = new THREE.Vector3(0,pt2y,0);
					arrowHelper3 = new THREE.ArrowHelper(dir3,origin3,(increment3 +0.25),0x000000,0.4,0.3);
					PIEaddElement(arrowHelper3);

					  d3 = Math.sqrt(intersectionx*intersectionx + ((intersectiony - pt2y)*(intersectiony - pt2y))) ;



					//candle se f1

					 dir4 = new THREE.Vector3((-pt1x),-(pt1y - intersectiony),0); //pt1y+(focal_length
					dir4.normalize();
					origin4 =new THREE.Vector3(pt1x,pt1y,0);
					arrowHelper4 = new THREE.ArrowHelper(dir4,origin4,(increment4 +0.25),0x000000,0.4,0.3);
					PIEaddElement(arrowHelper4);

					//lensdown se intersectiony i.e imagey
					 dir5 = new THREE.Vector3(1,0,0); //pt1y+(focal_length
					dir5.normalize();
					origin5 =new THREE.Vector3(0,intersectiony,0);
					arrowHelper5 = new THREE.ArrowHelper(dir5,origin5,(increment5 +0.25),0x000000,0.4,0.3);
					PIEaddElement(arrowHelper5);
					PIErender();


		}
	originalx = bar1.position.x;
	pt1x = originalx;
	pt1y = circle.position.y;
	pt2y = circle.position.y;

	 pt1 = new THREE.Vector3(pt1x,pt1y,0);
	 og = new THREE.Vector3(0,0,0);
	 pt2 = new THREE.Vector3(0,pt2y,0);
	focus = new THREE.Vector3(focal_length,0,0);

	origin = new THREE.Vector3(pt1x,pt1y,0);
origin1 = new THREE.Vector3(pt1x,pt1y,0);
origin2 = new THREE.Vector3(0,0,0);

	 	d = Math.sqrt(pt1x*pt1x + pt1y*pt1y) ;
		d1 = (0-pt1x);
		d2 = Math.sqrt(intersectionx*intersectionx + intersectiony*intersectiony) ;
		d3 = Math.sqrt(intersectionx*intersectionx + ((intersectiony - pt2y)*(intersectiony - pt2y))) ;
		d4 = Math.sqrt(pt1x*pt1x + (pt1y-intersectiony)*(pt1y-intersectiony));
		//d4 = (d4*0.02)+d4;
		d5 = intersectionx;

			////  left up geometry 1  increment h flag1
		if(increment < (0-pt1x) && flag1==0)
		{
		increment = increment + dt/100 ;
		arrowHelper.setLength(increment,0.4,0.3)

		}
		if(increment >= (0-pt1x) && flag1==0){ flag1=1;  }


		////left down geometry 2 increment1 d h1 flag2
		if(increment1 < (Math.sqrt(pt1x*pt1x + pt1y*pt1y)) && flag2==0)
		{
				 increment1 = increment1 + dt/100 ;
				 arrowHelper1.setLength(increment1 ,0.4,0.3);
		}

		if(increment1 >= d && flag2==0)
		{flag2=1; }//PIEaddElement(arrowHelper1);}


		 slope1=((pt1.y)/(pt1.x)) ;
		 slope2=(pt2.y)/(((pt2.x)-(focus.x)))  ;
		 intersectionx = (pt2.y)/(slope1-slope2);
		 intersectiony = slope1*intersectionx;
		 intersection=new THREE.Vector3(intersectionx,intersectiony,0);

	 		////left down down geometry 4 increment4 d4 h4 flag5

			if(increment4 < d4 && flag5==0)  //(Math.sqrt(pt1x*pt1x + pt1y*pt1y))
			{
					 increment4 = increment4 + dt/100 ;
					 arrowHelper4.setLength(increment4,0.4,0.3);
			}

			if(increment4 >= d4 && flag5==0)
			{flag5=1; }

					////Right down...geometry 4 increment2 d2 h2 flag3 depends on left down so flag 2


						if((increment2 <= d2)  && (flag2==1) && flag3==0)
						{
								 increment2 = increment2 + dt/100 ;
								 arrowHelper2.setLength(increment2 ,0.4,0.3);
								 PIErender();

						}
						if(increment2 >= d2 && flag3==0){flag3=1; }

					//////////right up geometry 3 increment3 d3 h3 flag4 depends on left up so flag 1

						if((increment3 < d3) && flag1  && flag4==0 )  //
						{

								 increment3 = increment3 + dt/100 ;
								 arrowHelper3.setLength((increment3),0.4,0.3);
								 PIErender();
						}
						if(increment3 >= d3 && flag4==0){flag4=1;  }

						////right down down gwometry 5 increment5 h5 flag6
						if(increment5 < d5 && flag5 && flag6==0)
						{
							increment5 = increment5 + dt/100 ;
							arrowHelper5.setLength(increment5 ,0.4,0.3);
						}
						if(increment5 >= d5 && flag6==0){flag6=1;}


			if(intersectionx > 0)
			{
				if(flag3 && flag4 && flag6  && flagcircle==0 )
				{
					img2.position.x = intersectionx;
					img2.scale.y = 1.4* Math.abs(intersectionx)/Math.abs(originalx);
					img2.visible = true;
				}
			}
			else
			{
				if(flag3 && flag4 && flag6) // && flagcircle==0)
				{
                    img1.position.x = intersectionx;
                    img1.scale.y = 1.2 * Math.abs(intersectionx) / Math.abs(originalx);
                    img1.visible = true;
                }

			}



	if( flag1 && flag2 && flag3 && flag4)
	{
		if(circleleftflagscale == 1)
		{
			// geometry = new THREE.CircleGeometry( 0.5, 32 );
			// material = new THREE.MeshBasicMaterial( { color: 0xff0000,opacity:10 } );
			// circle = new THREE.Mesh( geometry, material );
			// PIEaddElement( circle );
			// circle.position.set(0,(4.621658802032471),0);
			// circleleftflagscale = 0;
			// PIEdragElement(circle);

		}
		circle.visible= true;

		//PIEdefaultDragEnd(circle);

			
		if(pastcircley != circle.position.y)
		{
			//flagstart=1;
			pastcircley = circle.position.y;
			flagcircle=1;
			PIEscene.remove(arrowHelper);
			PIEscene.remove(arrowHelper1);
			PIEscene.remove(arrowHelper2);
			PIEscene.remove(arrowHelper3);
			PIEscene.remove(arrowHelper4);
			PIEscene.remove(arrowHelper5);


			bar1.scale.y = 0.3*circle.position.y;

			PIErender();

			originalx = bar1.position.x;
			pt1x = originalx;
			pt1y =  circle.position.y;//flame2.position.y +2;
			pt2y = circle.position.y;

			 pt1 = new THREE.Vector3(pt1x,pt1y,0);
			 og = new THREE.Vector3(0,0,0);
			 pt2 = new THREE.Vector3(0,pt2y,0);
			focus = new THREE.Vector3(focal_length,0,0);


			slope1=((pt1.y)/(pt1.x)) ;
	 		slope2=(pt2.y)/(((pt2.x)-(focus.x)))  ;
	 		intersectionx = (pt2.y)/(slope1-slope2);
			intersectiony = slope1*intersectionx;
			intersection= new THREE.Vector3(intersectionx,intersectiony,0);

			// img2.scale.y = 0.3*circle.position.y;
			img2.scale.y = 0.3*(-intersectiony);

			d = (0-pt1x);
			d1 = Math.sqrt(pt1x*pt1x + pt1y*pt1y) ;
			d2 = Math.sqrt(intersectionx*intersectionx + intersectiony*intersectiony) ;
			d3 = Math.sqrt(intersectionx*intersectionx + ((intersectiony - pt2y)*(intersectiony - pt2y))) ;
			d4 = 0.25 + Math.sqrt(pt1x*pt1x + (pt1y-intersectiony)*(pt1y-intersectiony)) ;
			// d4 = d4 + (0.2*d4);
			d5 = intersectionx;

			////  left up geometry 1  increment h flag1

				  dir= new THREE.Vector3(10,0,0);   //dir is from origin.
				dir.normalize();
				 origin = new THREE.Vector3(pt1x + 0.3,pt1y,0);
					arrowHelper = new THREE.ArrowHelper(dir,origin,d,0x000000,0.4,0.3);
				PIEaddElement(arrowHelper);

				//leftdown
					dir1= new THREE.Vector3(-pt1x , -pt1y ,0);    //dir is from origin.
					dir1.normalize();
					origin1 = new THREE.Vector3(pt1x + 0.3 ,pt1y,0);
					arrowHelper1 = new THREE.ArrowHelper(dir1,origin1,d1,0x000000,0.4,0.3);
					PIEaddElement(arrowHelper1);

				//rigthdown
					dir2= new THREE.Vector3(intersectionx,intersectiony,0);     //dir is from origin.
					dir2.normalize();
					origin2 = new THREE.Vector3(0,0,0);
					arrowHelper2 = new THREE.ArrowHelper(dir2,origin2, d2 + 0.25,0x000000,0.4,0.3);
					PIEaddElement(arrowHelper2);

				//rightup
					dir3= new THREE.Vector3(intersectionx,(intersectiony - pt1y),0);     //dir is from origin.
					dir3.normalize();
					origin3 = new THREE.Vector3(0,pt2y,0);
					arrowHelper3 = new THREE.ArrowHelper(dir3,origin3,(d3 +0.25),0x000000,0.4,0.3);
					PIEaddElement(arrowHelper3);

					//candle se f1 //left down down
					 dir4 = new THREE.Vector3((-pt1x),-(pt1y - intersectiony),0); //pt1y+(focal_length
					dir4.normalize();
					origin4 =new THREE.Vector3(pt1x,pt1y,0);
					arrowHelper4 = new THREE.ArrowHelper(dir4,origin4,(d4 +0.25),0x000000,0.4,0.3);
					PIEaddElement(arrowHelper4);

					//lensdown se intersectiony i.e imagey right down down
					 dir5 = new THREE.Vector3(1,0,0); //pt1y+(focal_length
					dir5.normalize();
					origin5 =new THREE.Vector3(0,intersectiony,0);
					arrowHelper5 = new THREE.ArrowHelper(dir5,origin5,(d5 +0.25),0x000000,0.4,0.3);
					PIEaddElement(arrowHelper5);

					PIErender();


		}
	}

 	PIEchangeDisplayText("Incidence Point",circle.position.y);
   PIEchangeDisplayText("Focal length",focal_length);


    //    if (h < 5)
    // {
    //     h++;
    //     if (h == 5)
    //     {
    //         PIEresetExperiment();
    //         PIEstopAnimation();
    //     }
    // }

}


