
var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2> Area of circle using Grid - Help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows how to calculate area of circle using grid(Graph Paper)</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to one slider.</p>";
    helpContent = helpContent + "<p>You can control :</p>";
    helpContent = helpContent + "<li>Radius&nbsp;:&nbsp;Controls the radius of the circle.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the circle area will be calculated step wise.First full squares are counted and are shown by green color. Next more than half filled squares are counted and are shown by blue color.Next half filled squares are calculated and are shown by black color. After that, less than half filled squares are show by pink color. Then area is calculated by counting. Finally area using formula is displayed at left bottom end of display to compare results.</p>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animaion by uing the speed control buttons</p>";
    // helpContent = helpContent + "<h3>Drag of ball</h3>";
    // helpContent = helpContent + "<p>You can also position the ball by dragging it. You can only do this in the setup stage. This has been prevented in the animation stage.</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Area of circle using Grid</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows how to calculate area of circle using grid(Graph Paper)</p>";
    infoContent = infoContent + "<h3>Calculation</h3>";
    infoContent = infoContent + "<p>If we draw a circle on grid( graph paper), we can calculate it's area by counting the squares it filled. </p>";
    infoContent = infoContent + "<p>Area of circle will be sum of number of fully filled squares and number of more than half filled squares and half of number of exactly half filled squares. We neglect squares which are les than half filled. </p>";
    infoContent = infoContent + "<p> AREA  =  (FULL) + ( >Half) + (half)/2 </p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function loadExperimentElements () {

	 PIEsetExperimentTitle(" Area of circle using Grid");
    PIEsetDeveloperName("Dattatreya Garimella");

	PIErenderer.setClearColor(0xf0f0f0, 1);
	
	var helper = new THREE.GridHelper( 10, 20 );
	helper.rotation.x = Math.PI / 2;
	PIEaddElement( helper );
	PIEsetAreaOfInterest(-8,12,12,-12);
	circle = generateCircularPlane(1,0xFFC400);
	PIEaddElement(circle);
	generateFigure(1);
	initializeControls();
	initializeVariables();
	initialiseInfo();
	initialiseHelp();
	AreaCard = new THREE.Mesh(new THREE.PlaneGeometry(10,6,1), new THREE.MeshLambertMaterial({color:0xffffff}));
	var AreaCardTexture = new THREE.TextureLoader();
	AreaCardTexture.load("textures/areaofcircle.png", function  (texture) {
		AreaCard.material.map =texture;
		AreaCard.material.needsUpdate = true;
		PIErender();

	});
	PIEaddElement(AreaCard);
	AreaCard.position.set(-16,6,0);

	radiusCard = new THREE.Mesh(new THREE.PlaneGeometry(6,1.3,1), new THREE.MeshBasicMaterial({color:0xffffff}));
	var radiusTexture = new THREE.TextureLoader();
	radiusTexture.load("textures/radiusText.png", function  (texture) {
		radiusCard.material.map =texture;
		radiusCard.material.needsUpdate = true;
		PIErender();

	});
	showradius(1);

	PIEaddElement(radiusCard);
	radiusCard.position.set(16,8,0);
	
	fullCard = new THREE.Mesh(new THREE.PlaneGeometry(6,1.3,1), new THREE.MeshBasicMaterial({color:0xffffff}));
	var fullTexture = new THREE.TextureLoader();
	fullTexture.load("textures/fullText.png", function  (texture) {
		fullCard.material.map =texture;
		fullCard.material.needsUpdate = true;
		PIErender();

	});

	PIEaddElement(fullCard);
	fullCard.position.set(16,6,0);

	moreHalfCard = new THREE.Mesh(new THREE.PlaneGeometry(6,1.3,1), new THREE.MeshBasicMaterial({color:0xffffff}));
	var moreHalfTexture = new THREE.TextureLoader();
	moreHalfTexture.load("textures/moreHalf.png", function  (texture) {
		moreHalfCard.material.map =texture;
		moreHalfCard.material.needsUpdate = true;
		PIErender();

	});
	PIEaddElement(moreHalfCard);
	moreHalfCard.position.set(16,4,0);
	

	halfCard = new THREE.Mesh(new THREE.PlaneGeometry(6,1.3,1), new THREE.MeshBasicMaterial({color:0xffffff}));
	var halfTexture = new THREE.TextureLoader();
	halfTexture.load("textures/halfText.png", function  (texture) {
		halfCard.material.map =texture;
		halfCard.material.needsUpdate = true;
		PIErender();

	});

	PIEaddElement(halfCard);
	halfCard.position.set(16,2,0);
	
	lessHalfCard = new THREE.Mesh(new THREE.PlaneGeometry(6,1.3,1), new THREE.MeshBasicMaterial({color:0xffffff}));
	var lessHalfTexture = new THREE.TextureLoader();
	lessHalfTexture.load("textures/lessHalfText.png", function  (texture) {
		lessHalfCard.material.map =texture;
		lessHalfCard.material.needsUpdate = true;
		PIErender();
        // body...
    });
	PIEaddElement(lessHalfCard);
	lessHalfCard.position.set(16,0,0);

	areaByCountingCard = new THREE.Mesh(new THREE.PlaneGeometry(10,2,1), new THREE.MeshBasicMaterial({color:0xffffff}));
	var areaByCountingTexture = new THREE.TextureLoader();
	areaByCountingTexture.load("textures/areaByCountingText.png", function  (texture) {
		areaByCountingCard.material.map =texture;
		areaByCountingCard.material.needsUpdate = true;
		PIErender();
        // body...
    });
	PIEaddElement(areaByCountingCard);
	areaByCountingCard.position.set(18,-2,0);

	areaByFormulaCard = new THREE.Mesh(new THREE.PlaneGeometry(10,2,1), new THREE.MeshBasicMaterial({color:0xffffff}));
	var areaByFormulaTexture = new THREE.TextureLoader();
	areaByFormulaTexture.load("textures/areaByFormulatext.png", function  (texture) {
		areaByFormulaCard.material.map =texture;
		areaByFormulaCard.material.needsUpdate = true;
		PIErender();
        // body...
    });
	PIEaddElement(areaByFormulaCard);
	areaByFormulaCard.position.set(-16,-2,0);





}


function handleRadius (newVal) {
	console.log("Hi");
	disposePlanes();
	generateFigure(newVal);
	showradius(newVal);
	initializeVariables();
	radiusOfCircle = newVal;
	PIErender();
}
function initializeControls () {

	PIEaddInputSlider("Radius", 1, handleRadius, 1, 9, 1);
}

var flag_fullSquares;
var flag_moreHalfSquares;
var flag_halfSquares;
var flag_lessHalfSquares;
var flag_areaByCounting;
var flag_areaByFormula;

function initializeVariables () {
	flag_fullSquares = 0;
	flag_halfSquares = 0;
	flag_moreHalfSquares = 0;
	flag_lessHalfSquares = 0;
	flag_areaByCounting = 0;
	flag_areaByFormula = 0;	
	radiusOfCircle = 1;
}

function generateFigure (r) {

	circle.scale.set(r,1,r);
	// var rect1 = generateRectPlane(2*(r-1),2*(r),0x303F9F);
	// var rect2 = generateRectPlane(2*(r),2*(r-1),0x303F9F);
	
	halfSquares(r);
	// PIEaddElement(rect1);
	// PIEaddElement(rect2);
	// PIEaddElement(rect1);
	// PIEaddElement(rect2);
}

function generateCircularPlane (r, hex) {

	var circularPlane = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 1,50), new THREE.MeshBasicMaterial({color:hex}));
	circularPlane.rotation.x = 0.5*(Math.PI);
	circularPlane.position.z = -0.52;
	return circularPlane;
}

function generateRectPlane (l,b,hex) {
	
	var squarePlane = new THREE.Mesh(new THREE.BoxGeometry(l,b,1), new THREE.MeshBasicMaterial({color:hex}));
	squarePlane.position.z = -0.55;
	//squarePlane.rotation.x = 0.5*Math.PI;
	return squarePlane;
}

function generateColorPlane (x,y,hex, size) {

	
	var squarePlane = new THREE.Mesh(new THREE.BoxGeometry(1,2*y,1), new THREE.MeshBasicMaterial({color:hex}));

	squarePlane.position.z = -0.5- size;
	squarePlane.position.x = x-0.5;
	//squarePlane.rotation.x = 0.5*Math.PI;
	// return squarePlane;
	squarePlane.name = x + " " + y + " " + hex +" "+ size;
	planes.push(squarePlane);
	PIEaddElement(planes[planes.length-1]);
	var squarePlane2 = squarePlane.clone();
	squarePlane2.position.z = -0.5 - size;
	squarePlane2.position.x = -x+0.5;
	squarePlane2.name = x + " " + y + " " + hex +" "+ size;
	planes.push(squarePlane2);
	PIEaddElement(planes[planes.length-1]);
}


function disposePlanes () {
	
	var l = planes.length;
	for (var i = l - 1; i >= 0; i--) {
		
		// planes[i].geometry.dispose();
		// planes[i].material.dispose();
		// planes[i] = undefined;
		// PIEscene.remove(planes[i]);
		PIEremoveElement(planes[i]);
	};
	planes = [];
	moreHalf = [];

	lessHalf =[];

	half = [];

	full = [];

	PIEremoveElement(radiusVal);
	PIEremoveElement(fullVal);
	PIEremoveElement(halfVal);
	PIEremoveElement(moreHalfVal);
	PIEremoveElement(lessHalfVal);
	PIEremoveElement(areaByCountingVal);
	PIEremoveElement(areaByFormulaVal);
}

var planes = [];

var circle;
var moreHalf = [];
var moreHalfPlane = [];
var lessHalf =[];
var lessHalfPlane = [];
var half = [];
var halfPlane = [];
var full = [];
var fullPlane = [];
function halfSquares (r) {
	
	nextCheck(1,r,r);
	generateColors(r);
	//console.log(r);
	//console.log(half);
	//console.log(moreHalf);
	//console.log(lessHalf);

}


function checkCoOrdinate (x,y,r) {

	if ( x*x + y*y - r*r < 0)
		return 1;
	else if ( x*x + y*y -r*r < 0.5)
		return 0.5;
	else
		return 0;
	

}
function coordinate (x,y) {
	this.x = x;
	this.y = y;
	
}

function nextCheck (x,y,r) {
	//console.log("X : " + x + "  Y : "  + y);

	if ( x>r || y<0)
		return 0;
	var top = checkCoOrdinate(x,y,r);
	var mid = checkCoOrdinate(x-0.5,y-0.5,r);
	var bottom = checkCoOrdinate(x-1,y-1,r);
	//console.log(" Top : " + top + " Mid : " +mid + " bottom : " + bottom);

	if( top == 1 || top == 0.5)
	{
		full.push(new coordinate(x,y));
		nextCheck(x+1, y,r);
	}

	else if ( mid == 0.5)
	{
		//console.log("mid ",x,y);
		half.push(new coordinate(x,y));
		full.push(new coordinate(x,y-1));
		nextCheck(x+1,y,r);
	}
	else if ( mid == 1 && top == 0)
	{
		moreHalf.push(new coordinate(x,y));
		// full.push(new coordinate(x,y-1));
		nextCheck(x,y-1,r);
		nextCheck(x+1,y,r);
	}
	else if ( mid == 0 && bottom == 1)
	{
		lessHalf.push(new coordinate(x,y));
		nextCheck(x+1,y,r);
		nextCheck(x, y-1,r);
	}
	else if (bottom == 0)
	{
		nextCheck(x,y-1,r);
	}
}


function generateColors (r) {

	// showFullSquares(r);
	// showMoreHalfSquares(r);
	// showHalfSquares(r);
	// showLessHalfSquares(r);
	// showAreaByCounting(r);
	// showAreaByFormula(r);

	
}


var fullsquares = [0, 4, 16, 32, 60, 88, 120, 164, 216];
var moreHalfsquares = [4,8,16,20, 20,24,36,44,40];
var lessHalfsquares = [0,4,4,8,8,20,16,16,28];
var halfsquares = [0,0,0,0,0,0,0,0,0];

var radiusVal;
var fullVal;
var moreHalfVal;
var halfVal;
var lessHalfVal;
var areaByCountingVal;
var areaByFormulaVal;
var radiusOfCircle;

function showradius (r) {
	
	var radiusValTexture = getcanvasTexture(r.toString() + "m", 100,"#121212");
	radiusVal = new THREE.Mesh(new THREE.PlaneGeometry(2,1.5,1),new THREE.MeshBasicMaterial({transparent:true ,map:radiusValTexture}));
	PIEaddElement(radiusVal);
	radiusVal.position.set(21,7.8,0);



}

function showFullSquares (r) {

	for (var i = full.length - 1; i >= 0; i--) {
		generateColorPlane(full[i].x, full[i].y,0x00C853, 0.01);
		//console.log("Full   : ",full[i].x, full[i].y);
	};

	var val = fullsquares[r-1];
	var fullvalTexture = getcanvasTexture(val.toString() , 100,"#00C853");
	fullVal = new THREE.Mesh(new THREE.PlaneGeometry(1,1.5,1),new THREE.MeshBasicMaterial({transparent:true ,map:fullvalTexture}));
	PIEaddElement(fullVal);
	fullVal.position.set(21,5.8,0);

	

}

function showHalfSquares (r) {

	for (var i = half.length - 1; i >= 0; i--) {
		generateColorPlane(half[i].x, half[i].y, 0x212121, 0.03);
	};
	var halfvalTexture = getcanvasTexture((halfsquares[r-1]).toString() , 100,"#212121");
	halfVal = new THREE.Mesh(new THREE.PlaneGeometry(1,1.5,1),new THREE.MeshBasicMaterial({transparent:true ,map:halfvalTexture}));
	PIEaddElement(halfVal);
	halfVal.position.set(21,1.8,0);	

}

function showMoreHalfSquares (r) {


	for (var i = moreHalf.length - 1; i >= 0; i--) {
		generateColorPlane(moreHalf[i].x,moreHalf[i].y, 0x1A237E , 0.03);
		//console.log(moreHalf[i].x, moreHalf[i].y);
	};
	var moreHalfvalTexture = getcanvasTexture((moreHalfsquares[r-1]).toString() , 100,"#1A237E");
	moreHalfVal = new THREE.Mesh(new THREE.PlaneGeometry(1,1.5,1),new THREE.MeshBasicMaterial({transparent:true ,map:moreHalfvalTexture}));
	PIEaddElement(moreHalfVal);
	moreHalfVal.position.set(21,3.8,0);	

}

function showLessHalfSquares (r) {

	for (var i = lessHalf.length - 1; i >= 0; i--) 
	{
		generateColorPlane(lessHalf[i].x,lessHalf[i].y, 0xF44336, 0.04);
		//console.log(lessHalf[i].x,lessHalf[i].y);
	};
	var lessHalfvalTexture = getcanvasTexture((lessHalfsquares[r-1]).toString() , 100,"#F44336");
	lessHalfVal = new THREE.Mesh(new THREE.PlaneGeometry(1,1.5,1),new THREE.MeshBasicMaterial({transparent:true ,map:lessHalfvalTexture}));
	PIEaddElement(lessHalfVal);
	lessHalfVal.position.set(21,-0.2,0);
	
}


function showAreaByCounting (r) {
	var msg = fullsquares[r-1].toString() + "+" + moreHalfsquares[r-1].toString() + "+" + "(" + halfsquares[r-1].toString() + ")/2" + " = " + (fullsquares[r-1]+ moreHalfsquares[r-1]).toString(); 
	var areaByCountingTexture = getcanvasTexture(msg , 100,"#121212");
	areaByCountingVal = new THREE.Mesh(new THREE.PlaneGeometry(8,1.5,1),new THREE.MeshBasicMaterial({transparent:true ,map:areaByCountingTexture}));
	PIEaddElement(areaByCountingVal);
	areaByCountingVal.position.set(17,-4.2,0);

}
function showAreaByFormula (r) {
	
	var msg = "3.14*" + r.toString() + "*" + r.toString() + " = " + ((3.14*r*r).toFixed(2)).toString();
	var areaByFormulaTexture = getcanvasTexture(msg , 100,"#121212");
	areaByFormulaVal = new THREE.Mesh(new THREE.PlaneGeometry(7,1.5,1),new THREE.MeshBasicMaterial({transparent:true ,map:areaByFormulaTexture}));
	PIEaddElement(areaByFormulaVal);
	areaByFormulaVal.position.set(-16,-4.2,0);
	

}



function resetExperiment () {
	disposePlanes();
	generateFigure(1);
	showradius(1);
	initializeVariables();
	radiusOfCircle = 1;
	PIEchangeInputSlider("Radius",1);
	
}



function updateExperimentElements (t,dt) {

	var time = t/1000;
	if (time > 1 && flag_fullSquares ==0)
	{
		showFullSquares(radiusOfCircle);
		flag_fullSquares = 1;
	}
	if ( time > 2 && flag_moreHalfSquares ==0)
	{
		showMoreHalfSquares(radiusOfCircle);
		flag_moreHalfSquares = 1;
	}
	if( time > 3 && flag_halfSquares == 0)
	{
		showHalfSquares(radiusOfCircle);
		flag_halfSquares = 1;
	}
	if( time  > 3.8 && flag_lessHalfSquares == 0)
	{
		showLessHalfSquares(radiusOfCircle);
		flag_lessHalfSquares = 1;
	}
	if(time > 4.8 && flag_areaByCounting == 0)
	{
		
		showAreaByCounting(radiusOfCircle);
		flag_areaByCounting = 1;
	}
	if( time > 5.8 && flag_areaByFormula ==0)
	{
		showAreaByFormula(radiusOfCircle);
		flag_areaByFormula = 1;
		PIEstopAnimation();
	}
	

}


var getcanvasTexture = function  (message,fontsize, colorCode) {

	var ctx, texture, sprite, spriteMaterial, 
	canvas = document.createElement('canvas');
	ctx = canvas.getContext('2d');
	ctx.font = fontsize + "px Arial";

    // setting canvas width/height before ctx draw, else canvas is empty
    canvas.width = ctx.measureText(message).width;
    canvas.height = fontsize * 2; // fontsize * 1.5
    // after setting the canvas width/height we have to re-set font to apply!?! looks like ctx reset
    ctx.font = fontsize + "px Arial";        
    ctx.fillStyle = colorCode;
    ctx.fillText(message, 0, fontsize);

    texture = new THREE.Texture(canvas);
    texture.minFilter = THREE.LinearFilter; // NearestFilter;
    texture.needsUpdate = true;
    return texture;
    
}
