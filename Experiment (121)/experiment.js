/* Global Variables */
var mySceneTLX;         //Top Left corner X coordinate
var mySceneTLY;         //Top Left corner Y coordinate
var mySceneBRX;         //Bottom Right corner X coordinate
var mySceneBRY;         //Bottom Right corner Y coordinate
var mySceneW;           //Scene Width
var mySceneH;           //Scene Height
var myCenterX;          //Scene Center X coordinate
var myCenterY;          //Scene Center Y coordinate

//var colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0x00ffff, 0xff00ff, 0xffffff, 0xb042f4, 0xb8f441, 0xd041f4];
var colors = [0x111111];
var scale, scaleX, scaleY, xCoordinates, yCoordinates;
var k = 0;
var time, distance;
var userX, userY, userPoints, userLines;
var graphX, graphY, graphLines, graphPoints;
var currentPoint;
var pointGeom, pointMat, userPointMat;
var userLineMat, lineMat;

/*********************** GUI control objects code *****************************/
window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize() {
	var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;
	PIEcamera.aspect = window.innerWidth / window.innerHeight;
	PIEcamera.updateProjectionMatrix();
	PIErenderer.setSize( window.innerWidth, window.innerHeight );
}

var nextLabel;
var letMeDrawLabel;
var drawForMeLabel;
var xLabel = "X";
var yLabel = "Y";
function initialiseControlVariables() {
	nextLabel = "Next Graph";
	letMeDrawLabel = "Let Me Draw";
	drawForMeLabel = "Draw For Me";
}
var text;
var xHandle, yHandle, f1;
function initialiseControls() {
    initialiseControlVariables();

	PIEaddInputCommand(nextLabel, changeGraph);
	var prop = function() {
		this.x = "";
		this.y = "";
		this.go = function() {
			goClicked();
		}
		this.undo = function() {
			undoClicked();
		}
	}
	text = new prop();
	f1 = PIEinputGUI.addFolder('Let me draw');
	xHandle = f1.add(text, 'x').name(xLabel);
	xHandle.onFinishChange(convertToInt);
	yHandle = f1.add(text, 'y').name(yLabel);
	yHandle.onFinishChange(convertToInt);
	f1.add(text, 'go').name("Go");
	f1.add(text, 'undo').name("Undo");
	/*
	PIEaddInputText(xLabel, "", convertToInt);
	PIEaddInputText(yLabel, "", convertToInt);
	PIEaddInputCommand("Go", goClicked);
	PIEaddInputCommand("Undo", undoClicked);*/
	PIEaddInputCommand(drawForMeLabel, PIEstartAnimation);
}

/******************** End of GUI control objects code *************************/

/********************* Load Experiment objects code ***************************/

var helpContent;
function initialiseHelp() {
    helpContent = "";
	helpContent += "<h1>Uniform Motion Help</h1>";
    helpContent += "<p>This experiment allows students to learn about uniform motion and distance-time graph of uniform motion.</p>";
    helpContent += "<h3>Creating a Distance-Time Graph</h3>";
    helpContent += "<p>Top left corner provides you with the data of a car travelling in uniform motion. It shows the distance travelled by the car and the time to cover that distance.</p>";
    helpContent += "<p>Click on 'let me draw' button to start creating your graph.</p>";
	helpContent += "<p>Enter the x and y coordinates by looking in the table. Click on 'Go' button.</p>";
    helpContent += "<p>Your point will be drawn on the graph</p>";
    helpContent += "<p>Continue for all of the points.</p>";
    helpContent += "<p>If you made a mistake, undo it by clikcing on the 'undo' button.</p>";
	helpContent += "<p>Click on the 'draw for me' button to see the correct graph.</p>";
    helpContent += "<p>Click on the 'Next Graph' button to get new data values.</p>";
    helpContent += "<p><b>Note:</b> Remember Distance-Time graph of a uniform motion is always a straight line.</p>";
    helpContent += "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo() {
    infoContent = "";
	infoContent += "<h1>Bar Graph Experiment Info</h1>";
    infoContent += "<p>This experiment allows students to learn about uniform motion and distance-time graph of uniform motion.</p>";
    infoContent += "<h3>Uniform Motion</h3>";
    infoContent += "<p>Uniform motion is the kind of motion in which a body covers equal distances in equal intervals of time. It does not matter how small the time intervals are, as long as the distances covered are equal.</p>";
	infoContent += "<p>For example: A vehicle running at a constant speed of 10 m/sec, will cover equal distance of 10 meters every second, so it's motion will be uniform.</p>";
    infoContent += "<h3>Distance-Time Graph</h3>";
    infoContent += "<p>A Distance-Time graph is a graph which represents the  distance travelled by a body (y-axis) with respect to the time (x-axis).</p>";
    infoContent += "<p>Distance-Time graph for a uniform motion is a straight line, as demonstrated in this experiment.</p>";
	infoContent += "<p>You can draw your graph by entering the X and Y coordinates values, and then hit 'Go'.</p>";
    infoContent += "<p>You can undo your actions by cliking on the 'undo' button.</p>";
    infoContent += "<p>If you stuck at any point, or want to check your graph, click on the 'draw for me' button.</p>";
    infoContent += "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene() {
    //Initialise Scene Variables
    mySceneTLX = -20.0;
    mySceneTLY = 50.0;
    mySceneBRX = 60.0;
    mySceneBRY = -10.0;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
}

function initialiseOtherVariables() {
    //Initialise variables
}

function loadExperimentElements() {
    PIEadjustAnimationTime(1000);
    PIEsetExperimentTitle("Uniform motion demonstrated");
    PIEsetDeveloperName("Rishabh Gupta");
    //PIEhideControlElement();

    //initialise help and info content
    initialiseHelp();
    initialiseInfo();

    //initialise Scene
    initialiseScene();

    //initialise Other Variables
    initialiseOtherVariables();


	initialiseControls();

    //PIErenderer.alpha = true;
    PIErenderer.setClearColor(0x72a6f9);

	var axis = new THREE.AxisHelper(100);
	PIEaddElement(axis);
	axis.castShadow = false;
	axis.receiveShadow = false;

    //table
    PIEcreateTable("Data for Graph", 11, 2, true);
    PIEupdateTableCell(0, 0, "--Time--");
    PIEupdateTableCell(0, 1, "--Distance--");

    changeGraph();

	var size = 40;
	var grid = new THREE.GridHelper(size, size);
	//grid.position.x += size;
	//grid.position.y += size;
	grid.rotation.x = Math.PI/2;
	PIEaddElement(grid);
	grid.castShadow = false;
	grid.receiveShadow = false;

    pointGeom = new THREE.SphereGeometry(0.5);
    userPointMat = new THREE.MeshBasicMaterial({color:0xff2222});
    pointMat = new THREE.MeshBasicMaterial({color:0x22ff22});
    lineMat = new THREE.LineBasicMaterial( {color: 0xffffff, linewidth: 1} );
    userLineMat = new THREE.LineBasicMaterial( {color: 0x000000, linewidth: 1} );

    createScale();


    //Reset all positions
    resetExperiment();

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
	//PIEcamera.position.x += 10;
	//PIEcamera.lookAt(new THREE.Vector3(20,20,0));
}

/******************* End of Load Experiment objects code **********************/

/*************************** Reset Experiment code ****************************/

function resetExperiment() {
    //initialise Other Variables
    initialiseOtherVariables();
    userX = [];
    userY = [];
    if(userPoints != null) {
        for(var i = 0; i < userPoints.length; i++) {
            PIEremoveElement(userPoints[i]);
        }
    }
    if(userLines != null) {
        for(var i = 0; i < userLines.length; i++) {
            PIEremoveElement(userLines[i]);
        }
    }
    userPoints = [];
    userLines = [];

    currentPoint = 0;
    if(graphLines != null) {
        for(var i = 0; i < graphLines.length; i++) {
            PIEremoveElement(graphLines[i]);
        }
    }
    if(graphPoints != null) {
        for(var i = 0; i < graphPoints.length; i++) {
            PIEremoveElement(graphPoints[i]);
        }
    }
    graphLines = [];
    graphPoints = [];
    PIErender();

    first = false;
    updateTime = 0;
}

/********************** End of Reset Experiment code **************************/

/******************** Update (animation changes) code *************************/
var moved = false, first, updateTime;
function updateExperimentElements(t, dt) {

    var boundaryT = dt / 1000.0;    //seconds
    if(moved) {

    } else {
        moved = true;
		return;
    }
    if(first) {
        updateTime = new Date().getTime();
        first = false;
    }
	if(currentPoint < 10) {
        if(new Date().getTime() - updateTime > 500) {

            updateTime = new Date().getTime();

            graphPoints[currentPoint] = new THREE.Mesh(pointGeom, pointMat);
            graphPoints[currentPoint].position.y = 2 * distance[currentPoint] / scaleY;
            graphPoints[currentPoint].position.x = 2 * time[currentPoint] / scaleX;
            PIEaddElement(graphPoints[currentPoint]);
            var p1;
            if(currentPoint == 0) p1 = new THREE.Vector3(0, 0, 0);
            else p1 = new THREE.Vector3(graphPoints[currentPoint-1].position.x, graphPoints[currentPoint-1].position.y, 0);
            var p2 = new THREE.Vector3(graphPoints[currentPoint].position.x, graphPoints[currentPoint].position.y, 0)
            var geometry = new THREE.Geometry();
            geometry.vertices.push(p1, p2);
            graphLines[currentPoint] = new THREE.Line(geometry, lineMat);
            PIEaddElement(graphLines[currentPoint]);
            currentPoint++;
    		PIErender();
        }
	} else {
		PIEstopAnimation();
	}


}

/******************* Update (animation changes) code **************************/

/************************** Helper Functions **********************************/


function goClicked() {
	//var x = parseInt(PIEgetInputText(xLabel));
	//var y = parseInt(PIEgetInputText(yLabel));
	var x = parseInt(text.x);
	var y = parseInt(text.y);

	//console.log(x + ", " + y);

    if(!isNaN(x) && !isNaN(y)) {
        x = 2 * x / scaleX;
        y = 2 * y / scaleY;
    }

	if(isNaN(x) || isNaN(y) || x < 0 || y < 0 || x > 40 || y > 40) {
		//do nothing
	} else if(userX.length > 0 && x == userX[userX.length-1] && y == [userY.length-1]){
        //same point - do nothing

	} else {
        drawPoint(x, y);
        PIErender();
    }
	text.x = "";
	text.y = "";
	xHandle.updateDisplay();
	yHandle.updateDisplay();
	//PIEchangeInputText(xLabel, "");
	//PIEchangeInputText(yLabel, "");

}

function undoClicked() {
	if(userPoints.length > 0) {
        PIEremoveElement(userPoints[userPoints.length-1]);
        userPoints.splice(userPoints.length - 1, 1);
        PIEremoveElement(userLines[userLines.length - 1]);
        userLines.splice(userLines.length - 1, 1);
		PIErender();
	}
}

function drawPoint(x, y) {
    var i = userPoints.length;
    userPoints[i] = new THREE.Mesh(pointGeom, userPointMat);
    PIEaddElement(userPoints[i]);
    userPoints[i].position.x = x;
    userPoints[i].position.y = y;

    var p1;
    if(i == 0) p1 = new THREE.Vector3(0, 0, 0);
    else p1 = new THREE.Vector3(userPoints[i-1].position.x, userPoints[i-1].position.y, 0);
    var p2 = new THREE.Vector3(userPoints[i].position.x, userPoints[i].position.y, 0)
    i = userLines.length;
    var geometry = new THREE.Geometry();
    geometry.vertices.push(p1, p2);
    userLines[i] = new THREE.Line(geometry, userLineMat);
    PIEaddElement(userLines[i]);
}

function changeGraph() {
    var t;
    do {
        t = Math.floor(Math.random() * 5 + 1);
    } while(t == k);
    k = t;
    var allValues = [];
    for(var i = 0; i <= 20; i++) {
        allValues[i] = i;
    }
    time = [];
    for(var i = 0; i < 10; i++) {
        var t = Math.floor(Math.random() * allValues.length);
        time.push(allValues[t]);
        allValues.splice(t, 1);
    }
    time.sort(sortNumber);
    distance = [];
    for(var i = 0; i < 10; i++)  {
        distance[i] = k * time[i];
        PIEupdateTableCell(i+1, 0, time[i] + " s");
        PIEupdateTableCell(i+1, 1, distance[i] + " m");
    }
    createScale();
    resetExperiment();
    PIErender();
}

function createScale() {
    if(scale != null) {
        PIEremoveElement(scale);
        PIEremoveElement(xCoordinates);
        PIEremoveElement(yCoordinates);
    }

    scale = new THREE.Object3D();
    scale.position.z = 10;
    scale.position.x -= 10;
    scale.position.y = 10;

    scaleX = 1;
    var pr = {fontsize: 32, backgroundColor: {r: 255, g: 255, b: 255, a: 1} };
    var p = makeTextSprite("  SCALE:          ", pr);
    scale.add(p);
    var p1 = makeTextSprite("  X Scale           ", pr);
    p1.position.y -= 3.5;
    scale.add(p1);
    var p3 = makeTextSprite(" 1 unit = 1 sec  ", pr);
    p3.position.y -= 6.5;
    scale.add(p3);

    var yMax = distance[9] + distance[0] + 1;

    scaleY = Math.ceil(yMax / 20);
    if(scaleY == 0) scaleY = 1;

    var p4 = makeTextSprite("  Y Scale           ", pr);
    p4.position.y -= 10;
    scale.add(p4);
    var p5 = makeTextSprite(" 1 unit = "+scaleY+" meters ", pr);
    p5.position.y -= 13;
    scale.add(p5);

    PIEaddElement(scale);

    //axis coordinates
    var txtProp = {fontsize: 30, backgroundColor: {r: 255, g: 255, b: 255, a: 0}, borderThickness: 0,
                    borderColor: {r: 255, g: 255, b: 255, a: 0}};
    xCoordinates = new THREE.Object3D();
    yCoordinates = new THREE.Object3D();
    //y coordinates
    for(var i = 0; i <= 20; i++) {
        var p = makeTextSprite(i * scaleY, txtProp);
        yCoordinates.add(p);
        p.position.y = 2*i - 4;
        p.position.x += 3;
        //p.position.z = 10;
    }
    //x coordinates
    for(var i = 1; i <= 20; i++) {
        var p = makeTextSprite(i * scaleX, txtProp);
        xCoordinates.add(p);
        p.position.y = -5;
        p.position.x = 2*i + 4.5;
        //p.position.z = 5;
    }
    PIEaddElement(xCoordinates);
    PIEaddElement(yCoordinates);
}

function convertToInt(val) {
	//var x = parseInt(PIEgetInputText(xLabel));
	//var y = parseInt(PIEgetInputText(yLabel));
	var x = parseInt(text.x);
	var y = parseInt(text.y);
	if(isNaN(x)) {
		text.x = "";
		//PIEchangeInputText(xLabel, "");
	} else {
		text.x = x;
		//PIEchangeInputText(xLabel, x);
	}
	if(isNaN(y)) {
		text.y = "";
		//PIEchangeInputText(yLabel, "");
	} else {
		text.y = y;
		//PIEchangeInputText(yLabel, y);
	}
	xHandle.updateDisplay();
	yHandle.updateDisplay();

}

function makeTextSprite( message, parameters ) {
	if ( parameters === undefined ) parameters = {};

	var fontface = parameters.hasOwnProperty("fontface") ?
		parameters["fontface"] : "Arial";

	var fontsize = parameters.hasOwnProperty("fontsize") ?
		parameters["fontsize"] : 18;

	var borderThickness = parameters.hasOwnProperty("borderThickness") ?
		parameters["borderThickness"] : 2;

	var borderColor = parameters.hasOwnProperty("borderColor") ?
		parameters["borderColor"] : { r:0, g:0, b:0, a:1.0 };

	var backgroundColor = parameters.hasOwnProperty("backgroundColor") ?
		parameters["backgroundColor"] : { r:255, g:255, b:255, a:1.0 };

	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');
	context.font = "Bold " + fontsize + "px " + fontface;

	// get size data (height depends only on font size)
	var metrics = context.measureText(message);
	var textWidth = metrics.width;

	// background color
	context.fillStyle   = "rgba(" + backgroundColor.r + "," + backgroundColor.g + ","
								  + backgroundColor.b + "," + backgroundColor.a + ")";
	// border color
	context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + ","
								  + borderColor.b + "," + borderColor.a + ")";

	context.lineWidth = borderThickness;
	roundRect(context, borderThickness/2, borderThickness/2, textWidth + borderThickness, fontsize * 1.2 + borderThickness, 15);
	// 1.4 is extra height factor for text below baseline: g,j,p,q.

	// text color
	context.fillStyle = "rgba(0, 0, 0, 1.0)";

	context.fillText( message, borderThickness, fontsize + borderThickness);

	// canvas contents will be used for a texture
	var texture = new THREE.Texture(canvas)
	texture.needsUpdate = true;

	var spriteMaterial = new THREE.SpriteMaterial( { map: texture } );
	var sprite = new THREE.Sprite( spriteMaterial );
	sprite.scale.set(10,10,1.0);
	return sprite;
}

// function for drawing rounded rectangles
function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x+r, y);
    ctx.lineTo(x+w-r, y);
    ctx.quadraticCurveTo(x+w, y, x+w, y+r);
    ctx.lineTo(x+w, y+h-r);
    ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
    ctx.lineTo(x+r, y+h);
    ctx.quadraticCurveTo(x, y+h, x, y+h-r);
    ctx.lineTo(x, y+r);
    ctx.quadraticCurveTo(x, y, x+r, y);
    ctx.closePath();
    ctx.fill();
	ctx.stroke();
}

function sortNumber(a, b) {
    return a - b;
}

function emptyFunction() {}
/***************************Helper Functions***********************************/
