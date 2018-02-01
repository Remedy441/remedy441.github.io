/* Global Variables */
var mySceneTLX;         //Top Left corner X coordinate
var mySceneTLY;         //Top Left corner Y coordinate
var mySceneBRX;         //Bottom Right corner X coordinate
var mySceneBRY;         //Bottom Right corner Y coordinate
var mySceneW;           //Scene Width
var mySceneH;           //Scene Height
var myCenterX;          //Scene Center X coordinate
var myCenterY;          //Scene Center Y coordinate

var floor;
var bars, finalLength, sprites;
var userBars, userLength, userSprites;
var drawn = [];
var currentBar;
var userCurrentBar = 0, barOrder = [];
//var colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0x00ffff, 0xff00ff, 0xffffff, 0xb042f4, 0xb8f441, 0xd041f4];
var colors = [0x111111];
var monthNames = ["Jan", "Feb", "March", "April", "May", "June",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"
];
var matches, currentMatch;
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
	nextLabel = "Next Match";
	letMeDrawLabel = "Let Me Draw";
	drawForMeLabel = "Draw For Me";
}
var text;
var xHandle, yHandle, f1;
function initialiseControls() {
    initialiseControlVariables();

	PIEaddInputCommand(nextLabel, changeMatch);
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
	helpContent += "<h1>Bar Graph Experiment Info</h1>";
    helpContent += "<p>This experiment allows students to learn about bar graphs and teaches them how to draw a bar graph.</p>";
	helpContent += "<p>The top left corner shows a table.</p>";
    helpContent += "<p>It shows the runs scored in every over of an inning of a T20 cricket match.</p>";
    helpContent += "<p>Click on 'let me draw' button to start creating your bar graph.</p>";
	helpContent += "<p>Enter the x and y coordinates by looking in the table. Click on 'Go' button.</p>";
    helpContent += "<p>Green coloured bar shows that you have done it right, red indicates wrong.</p>";
    helpContent += "<p>If you made a mistake, undo it by clikcing on the 'undo' button.</p>";
	helpContent += "<p>Click on the 'draw for me' button to see the correct bar graph.</p>";
    helpContent += "<p>Click on the 'Next Match' button to get new data values.</p>";
    helpContent += "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo() {
    infoContent = "";
	infoContent += "<h1>Bar Graph Experiment Info</h1>";
    infoContent += "<p>This experiment allows students to learn about bar graphs and teaches them how to draw a bar graph.</p>";
    infoContent += "<h3>Concept of Bar Graphs</h3>";
    infoContent += "<p>A bar chart or bar graph is a chart or graph that presents grouped data with rectangular bars with lengths proportional to the values that they represent.</p>";
    infoContent += "<h3>How to create a bar graph</h3>";
    infoContent += "<p>Follow these steps to create a bar graph:-<ol>";
    infoContent += "<li>Click on 'let me draw button'.</li>";
    infoContent += "<li>Based on the values given in the table, enter the values for x and y.</li>";
    infoContent += "<li>Click on 'Go'.</li>";
    infoContent += "<li>Continue for all bars.</li>";
	infoContent += "</ol></p>";
	infoContent += "<p>A green coloured bar indicate that you have drawn a correct bar. And a red bar indicates that you have done some mistake.</p>";
    infoContent += "<p>You can undo your actions by cliking on the 'undo' button.</p>";
    infoContent += "<p>If you stuck at any point, or want to check your bar chart, click on the 'draw for me' button.</p>";
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
    PIEsetExperimentTitle("Bar Graphs Simplified");
    PIEsetDeveloperName("Rishabh Gupta");
    //PIEhideControlElement();

    //initialise help and info content
    initialiseHelp();
    initialiseInfo();

    //initialise Scene
    initialiseScene();

    //initialise Other Variables
    initialiseOtherVariables();

	createMatches();
	currentMatch = 0;

	initialiseControls();

    //PIErenderer.alpha = true;
    PIErenderer.setClearColor(0x72a6f9);

	var axis = new THREE.AxisHelper(100);
	PIEaddElement(axis);
	axis.castShadow = false;
	axis.receiveShadow = false;

    var txtProp = {fontsize: 30, backgroundColor: {r: 255, g: 255, b: 255, a: 0}, borderThickness: 0,
                    borderColor: {r: 255, g: 255, b: 255, a: 0}};
    for(var i = 1; i <= 20; i++) {
        var p = makeTextSprite(i, txtProp);
        PIEaddElement(p);
        p.position.y = 2*i - 4;
        p.position.x += 3;
        //p.position.z = 10;
    }
    for(var i = 0; i <= 20; i++) {
        var p = makeTextSprite(i, txtProp);
        PIEaddElement(p);
        p.position.y = -4;
        p.position.x = 2*i + 4;
        p.position.z = 5;
    }

	var size = 20;
	var grid = new THREE.GridHelper(size, size);
	grid.position.x += size;
	grid.position.y += size;
	grid.rotation.x = Math.PI/2;
	PIEaddElement(grid);
	grid.castShadow = false;
	grid.receiveShadow = false;

	/*var controls = new THREE.OrbitControls(PIEcamera);
	PIEaddElement(PIEcamera, PIErenderer.domElement);*/

    createScale();

    createFloor();

	createBars();
	currentBar = 0;
	userCurrentBar = 0;

	PIEcreateTable("T20 Cricket Match", 13, 4, true);
	changeMatch();

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

	changeMatch();
}

/********************** End of Reset Experiment code **************************/

/******************** Update (animation changes) code *************************/
var moved = false;
function updateExperimentElements(t, dt) {

    var boundaryT = dt / 1000.0;    //seconds
    if(moved) {

    } else {
        moved = true;
		return;
    }
	if(currentBar < bars.length) {
		if(drawn[currentBar]) {
			userSprites[currentBar].visible = false;
            userBars[currentBar].children[0].material.opacity = 0.3;
		}
		bars[currentBar].visible = true;
		sprites[currentBar].visible = true;
		bars[currentBar].scale.y += 0.2*(finalLength[currentBar]- bars[currentBar].scale.y)/2;
		sprites[currentBar].position.y = bars[currentBar].scale.y*2 ;
		if(bars[currentBar].scale.y >= finalLength[currentBar] - 0.05) {
			bars[currentBar].scale.y = finalLength[currentBar];
			//sprites[currentBar].position.y = finalLength[currentBar] + 10;
			currentBar++;
		}
		PIErender();
	} else {
		PIEstopAnimation();
	}


}

/******************* Update (animation changes) code **************************/

/************************** Helper Functions **********************************/

function drawBar(x, y) {
	x--;  //0 based
	var g = new THREE.BoxGeometry(1.8, 2, 3);
	var m;
	if(finalLength[x] == y) {
		m = new THREE.MeshPhongMaterial({color: 0x11ff11, transparent: true, opacity: 1});
	} else {
		m = new THREE.MeshPhongMaterial({color: 0xff1111, transparent: true, opacity: 1});
	}
	userBars[x] = new THREE.Object3D();
	userBars[x].position.x = x*2+1;
	var barMesh = new THREE.Mesh(g, m);
	barMesh.position.y += 1;
	//userBars[x].visible = false;
	userBars[x].position.z = 2;
	userLength[x] = y;
	userBars[x].add(barMesh);
	PIEaddElement(userBars[x]);

	//sprites
	var properties;
	if(finalLength[x] == y) {
		properties = {fontsize: 40, backgroundColor: {r: 0, g: 128, b: 0, a: 1} };
	} else {
		properties = {fontsize: 40, backgroundColor: {r: 255, g: 0, b: 0, a: 1} };
	}
	var spritey = makeTextSprite(userLength[x]>9?userLength[x]+" ":" " + userLength[x] + " ", properties);
	userSprites[x] = spritey;
	PIEaddElement(userSprites[x]);
	userSprites[x].position.x = userBars[x].position.x + 4;
	userSprites[x].position.z = userBars[x].position.z;
	//userSprites[x].visible = false;

	barOrder[userCurrentBar] = x;
	userCurrentBar++;
	PIErender();
	//userCurrentBar++;
	if(y > 0.5)
		loopBar(x);
	else {
		userBars[x].scale.y = .01;
		PIErender();
	}
}

function loopBar(q) {
	//userBars[q].visible = true;
	//userSprites[q].visible = true;
	userBars[q].scale.y += 0.2*(userLength[q]- userBars[q].scale.y)/2;
	userSprites[q].position.y = userBars[q].scale.y*2 ;
	if(userBars[q].scale.y >= userLength[q] - 0.05) {
		userBars[q].scale.y = userLength[q];
		//sprites[currentBar].position.y = finalLength[currentBar] + 10;
	} else {
		requestAnimationFrame(function () {
			loopBar(q);
		})
	}
	PIErender();
}

function goClicked() {
	//var x = parseInt(PIEgetInputText(xLabel));
	//var y = parseInt(PIEgetInputText(yLabel));
	var x = parseInt(text.x);
	var y = parseInt(text.y);

	console.log(x + ", " + y);

	if(x < 0 || y < 0 || x > 20 || y > 20 || isNaN(x) || isNaN(y) || drawn[x-1]) {
		//do nothing
	} else {
		drawBar(x, y);
		drawn[x-1] = true;
	}
	text.x = "";
	text.y = "";
	xHandle.updateDisplay();
	yHandle.updateDisplay();
	//PIEchangeInputText(xLabel, "");
	//PIEchangeInputText(yLabel, "");

}

function undoClicked() {
	console.log(barOrder);
	if(userCurrentBar > 0) {
		userCurrentBar--;
		var b = barOrder[userCurrentBar];
		barOrder[userCurrentBar] = -1;

		PIEremoveElement(userBars[b]);
		PIEremoveElement(userSprites[b]);
		userBars[b] = null;
		userSprites[b] = null;
		userLength[b] = null;
		drawn[b] = null;
		PIErender();
	}
}

function createBars() {
	bars = [];
	finalLength = [];
	sprites = [];
	for(var i = 0; i < 20; i++) {
		var g = new THREE.BoxGeometry(1.8, 2, 3);
		var m = new THREE.MeshPhongMaterial({color: colors[i%colors.length]});
		bars[i] = new THREE.Object3D();
		bars[i].position.x = i*2+1;
		var barMesh = new THREE.Mesh(g, m);
		barMesh.position.y += 1;
		bars[i].visible = false;
		bars[i].position.z = -2;

		bars[i].add(barMesh);
		PIEaddElement(bars[i]);
	}
	userBars = [];
	userLength = [];
	userSprites = [];
}

function changeMatch() {
	var t = currentMatch;
	do {
		t = Math.floor(Math.random() * matches.length);
	} while(t == currentMatch);
	currentMatch = t;
	currentBar = 0;
	userCurrentBar = 0;
	//draw bar chart from current match
	for(var i = 0; i < 20; i++) {
		PIEremoveElement(sprites[i]);

		finalLength[i] = matches[currentMatch][i];

        var properties = {fontsize: 40, backgroundColor: {r: 120, g: 120, b: 255, a: 1} };
        var spritey = makeTextSprite(finalLength[i]>9?finalLength[i]+" ":" " + finalLength[i] + " ", properties);
		sprites[i] = spritey;
		PIEaddElement(sprites[i]);
		sprites[i].position.x = bars[i].position.x + 4;
		sprites[i].position.z = bars[i].position.z;
		sprites[i].visible = false;
        //sprites[i].renderOrder = -10;
		bars[i].scale.y = 2;
		bars[i].visible = false;

		drawn[i] = false;
		PIEremoveElement(userSprites[i]);
		PIEremoveElement(userBars[i]);
		userSprites[i] = null;
		userBars[i] = null;
		userLength[i] = null;

		barOrder[i] = -1;

	}

	PIEupdateTableCell(0, 0, matches[currentMatch][20].substr(0,matches[currentMatch][20].indexOf(' ')));
	PIEupdateTableCell(0, 1, "(vs ");
	PIEupdateTableCell(0, 2, matches[currentMatch][20].substr(matches[currentMatch][20].indexOf('s ')+1));

	PIEupdateTableCell(1, 0, "Date: ");
	PIEupdateTableCell(1, 1, matches[currentMatch][21].getDate() + "th");
	PIEupdateTableCell(1, 2, monthNames[matches[currentMatch][21].getMonth()]);
	PIEupdateTableCell(1, 3, matches[currentMatch][21].getFullYear());

	PIEupdateTableCell(2, 0, "Overs");
	PIEupdateTableCell(2, 1, "Runs");
	PIEupdateTableCell(2, 2, "Overs");
	PIEupdateTableCell(2, 3, "Runs");
	for(var i = 1; i <= 10; i++) {
		PIEupdateTableCell(i+2, 0, i);
	}
	for(var i = 11; i <= 20; i++) {
		PIEupdateTableCell(i-8, 2, i);
	}
	for(var i = 0; i < 10; i++) {
		PIEupdateTableCell(i+3, 1, matches[currentMatch][i]);
	}
	for(var i = 10; i < 20; i++) {
		PIEupdateTableCell(i-7, 3, matches[currentMatch][i]);
	}
	f1.close();
	PIErender();
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

function createFloor() {
	var g = new THREE.BoxGeometry(40+5, 10, 0.5);
	var m = new THREE.MeshLambertMaterial({color: 0x555555});
	floor = new THREE.Mesh(g, m);
	floor.rotation.x = -Math.PI/2;
	floor.position.x += 20;

	PIEaddElement(floor);
}

function createMatches() {
	//first 20 are runs in each over
	//Next is Batting Team (vs Bowling Team)
	//Then date of match
	matches = new Array();

	matches[0] = new Array();
	matches[0][0] = 6;
	matches[0][1] = 6;
	matches[0][2] = 1;
	matches[0][3] = 3;
	matches[0][4] = 5;
	matches[0][5] = 5;
	matches[0][6] = 2;
	matches[0][7] = 3;
	matches[0][8] = 5;
	matches[0][9] = 8;
	matches[0][10] = 10;
	matches[0][11] = 4;
	matches[0][12] = 9;
	matches[0][13] = 4;
	matches[0][14] = 4;
	matches[0][15] = 2;
	matches[0][16] = 10;
	matches[0][17] = 7;
	matches[0][18] = 4;
	matches[0][19] = 5;
	matches[0][20] = "WI (vs PAK)";
	matches[0][21] = new Date("2016-09-27");

	matches[1] = new Array();
	matches[1][0] = 1;
	matches[1][1] = 13;
	matches[1][2] = 13;
	matches[1][3] = 8;
	matches[1][4] = 9;
	matches[1][5] = 11;
	matches[1][6] = 5;
	matches[1][7] = 9;
	matches[1][8] = 7;
	matches[1][9] = 5;
	matches[1][10] = 12;
	matches[1][11] = 7;
	matches[1][12] = 10;
	matches[1][13] = 13;
	matches[1][14] = 4;
	matches[1][15] = 8;
	matches[1][16] = 11;
	matches[1][17] = 14;
	matches[1][18] = 14;
	matches[1][19] = 16;
	matches[1][20] = "NZ (vs PAK)";
	matches[1][21] = new Date("2016-03-22");

	matches[2] = new Array();
	matches[2][0] = 5;
	matches[2][1] = 4;
	matches[2][2] = 8;
	matches[2][3] = 6;
	matches[2][4] = 4;
	matches[2][5] = 15;
	matches[2][6] = 3;
	matches[2][7] = 4;
	matches[2][8] = 3;
	matches[2][9] = 7;
	matches[2][10] = 14;
	matches[2][11] = 6;
	matches[2][12] = 5;
	matches[2][13] = 17;
	matches[2][14] = 11;
	matches[2][15] = 2;
	matches[2][16] = 4;
	matches[2][17] = 5;
	matches[2][18] = 14;
	matches[2][19] = 9;
	matches[2][20] = "IND (vs BAN)";
	matches[2][21] = new Date("2016-03-23");

	matches[3] = new Array();
	matches[3][0] = 3;
	matches[3][1] = 8;
	matches[3][2] = 6;
	matches[3][3] = 6;
	matches[3][4] = 8;
	matches[3][5] = 20;
	matches[3][6] = 8;
	matches[3][7] = 8;
	matches[3][8] = 8;
	matches[3][9] = 4;
	matches[3][10] = 4;
	matches[3][11] = 1;
	matches[3][12] = 7;
	matches[3][13] = 14;
	matches[3][14] = 4;
	matches[3][15] = 13;
	matches[3][16] = 6;
	matches[3][17] = 5;
	matches[3][18] = 5;
	matches[3][19] = 2;
	matches[3][20] = "SL (vs ENG)";
	matches[3][21] = new Date("2016-07-05");

	matches[4] = new Array();
	matches[4][0] = 5;
	matches[4][1] = 11;
	matches[4][2] = 5;
	matches[4][3] = 11;
	matches[4][4] = 10;
	matches[4][5] = 10;
	matches[4][6] = 5;
	matches[4][7] = 7;
	matches[4][8] = 6;
	matches[4][9] = 7;
	matches[4][10] = 13;
	matches[4][11] = 5;
	matches[4][12] = 17;
	matches[4][13] = 12;
	matches[4][14] = 3;
	matches[4][15] = 8;
	matches[4][16] = 17;
	matches[4][17] = 15;
	matches[4][18] = 12;
	matches[4][19] = 14;
	matches[4][20] = "AUS (vs PAK)";
	matches[4][21] = new Date("2016-03-25");

	matches[5] = new Array();
	matches[5][0] = 11;
	matches[5][1] = 3;
	matches[5][2] = 18;
	matches[5][3] = 15;
	matches[5][4] = 11;
	matches[5][5] = 10;
	matches[5][6] = 3;
	matches[5][7] = 4;
	matches[5][8] = 6;
	matches[5][9] = 6;
	matches[5][10] = 6;
	matches[5][11] = 8;
	matches[5][12] = 8;
	matches[5][13] = 10;
	matches[5][14] = 4;
	matches[5][15] = 8;
	matches[5][16] = 10;
	matches[5][17] = 10;
	matches[5][18] = 11;
	matches[5][19] = 16;
	matches[5][20] = "SA (vs AUS)";
	matches[5][21] = new Date("2016-03-09");

	matches[6] = new Array();
	matches[6][0] = 13;
	matches[6][1] = 1;
	matches[6][2] = 3;
	matches[6][3] = 5;
	matches[6][4] = 10;
	matches[6][5] = 1;
	matches[6][6] = 2;
	matches[6][7] = 7;
	matches[6][8] = 7;
	matches[6][9] = 6;
	matches[6][10] = 4;
	matches[6][11] = 4;
	matches[6][12] = 12;
	matches[6][13] = 3;
	matches[6][14] = 10;
	matches[6][15] = 2;
	matches[6][16] = 8;
	matches[6][17] = 5;
	matches[6][18] = 8;
	matches[6][19] = 15;
	matches[6][20] = "NZ (vs IND)";
	matches[6][21] = new Date("2016-03-15");
}

function createScale() {
    var scale = new THREE.Object3D();
    scale.position.z = 10;
    scale.position.x -= 10;
    scale.position.y = 10;

    var pr = {fontsize: 32, backgroundColor: {r: 255, g: 255, b: 255, a: 1} };
    var p = makeTextSprite("  SCALE:          ", pr);
    scale.add(p);
    var p1 = makeTextSprite("  X Scale           ", pr);
    p1.position.y -= 3.5;
    scale.add(p1);
    var p3 = makeTextSprite(" 1 unit = 1 run  ", pr);
    p3.position.y -= 6.5;
    scale.add(p3);

    var p4 = makeTextSprite("  Y Scale           ", pr);
    p4.position.y -= 10;
    scale.add(p4);
    var p5 = makeTextSprite(" 1 unit = 1 over ", pr);
    p5.position.y -= 13;
    scale.add(p5);

    PIEaddElement(scale);
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

function emptyFunction() {}
/***************************Helper Functions***********************************/
