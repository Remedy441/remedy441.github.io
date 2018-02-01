/* Global Variables */
var mySceneTLX;         //Top Left corner X coordinate
var mySceneTLY;         //Top Left corner Y coordinate
var mySceneBRX;         //Bottom Right corner X coordinate
var mySceneBRY;         //Bottom Right corner Y coordinate
var mySceneW;           //Scene Width
var mySceneH;           //Scene Height
var myCenterX;          //Scene Center X coordinate
var myCenterY;          //Scene Center Y coordinate


var pieChart, userPieChart;
var pieHeight = 10, pieRadius = 10, pieSegment = 32;
var farLocation = 200;
var currentDataset, currentDatasetLength, currentDatasetID;
//var radialDistance = 5.0;
var eps = 0.001;
var colors = [0xff1111, 0x11ff11, 0x1111ff, 0xffff22, 0x22ffff, 0xff22ff, 0xffffff, 0xb042f4, 0xb8f441, 0xd041f4];
var datasetCollection = [];
var datasetNames = [];

/*********************** GUI control objects code *****************************/
var labels = [];
var handlers = [];
var created = [];
var values = [];
var userValues = [];
var currentColor = 0;
var remaining = 360;


window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {
	var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;
	PIEcamera.aspect = window.innerWidth / window.innerHeight;
	PIEcamera.updateProjectionMatrix();
	PIErenderer.setSize( window.innerWidth, window.innerHeight );
}

function initialiseControlVariables() {

	labels = new Array();
	created = [];
	userValues = [];
	var total = 0;
	for(var i = 0; i < currentDatasetLength; i++) {
	    labels[i] = (currentDataset[i][0] +" (" + currentDataset[i][1] + ")");
		created[i] = (false);
        userValues[i] =(0.0);
		total += currentDataset[i][1];
	}
	values = [];
	for(var i = 0; i < currentDatasetLength; i++) {
		values[i] = (currentDataset[i][1]/total * 360.0);
	}

	/*handlers = [];
	for(var i = 0; i < currentDatasetLength; i++) {
		handlers[i] = (function (val) {
	        if(!created[i] && val != 0 && val > 0 && val <= remaining) {
	            created[i] = true;
	            userValues[i] = val;
	            remaining -= val;
	            userPieChart.addPiece(val, currentColor, true, labels[i]);
	            PIErender();
	            currentColor++;
	        } else {
	            PIEchangeInputText(labels[i], userValues[i]);
	        }
	    });
	}*/

	createHandlers(currentDatasetLength);

}
var prop;
var properties;
function initialiseControls() {
    initialiseControlVariables();

	f1 = PIEinputGUI.addFolder('Let me draw');

	properties = function() {
		this.p = [];
		this.c = [];
		for(var i = 0; i < currentDatasetLength; i++) {
			this.p[i] = 0;
			this.c[i] = values[i];
		}
	}
	prop = new properties();
	var controller_names = [];
	var display_names = [];
	for(var i = 0; i < currentDatasetLength; i++) {
		controller_names[i] = prop.p[i];
		f1.add(controller_names, i, prop.p[i]).name(labels[i]).onFinishChange(
			handlers[i]
		);
		display_names[i] = prop.c[i];
		PIEdisplayGUI.add(display_names, i, prop.c[i]).name(labels[i]);
	}

	var something = function() {
		this.draw = function() {
			PIEstartAnimation();
		}
	}
	var some = new something();
	PIEinputGUI.add(some, 'draw').name('Draw for me');

}

function setGUI() {
	PIEinputGUI.destroy();
	PIEdisplayGUI.destroy();
	PIEinputGUI = null;
	PIEdisplayGUI = null;
	PIEinputGUI = new dat.gui.GUI();
	PIEdisplayGUI = new dat.gui.GUI();
	PIEshowInputPanel();
	//PIEshowDisplayPanel();

	//add command to change the data set
	var justProperties = function() {
		this.message = datasetNames[currentDatasetID] + '';
	}
	var text = new justProperties();
	PIEinputGUI.add(text, 'message', datasetNames
					 ).name("Choose Data").onFinishChange(function(value) {
						//alert("The new value is " + value);
						switch (value) {
							case 'Sachin\'s Dismissal':
								changeDataset(0);
								break;
							case 'Sensus':
								changeDataset(1);
								break;
							case 'Election results':
								changeDataset(2);
								break;
							case 'Atmosphere':
								changeDataset(3);
								break;
							case 'Market Share':
								changeDataset(4);
								break;
							case 'Movie Ratings':
								changeDataset(5);
								break;
							case 'Exam Results':
								changeDataset(6);
								break;
							case 'Balanced Diet':
								changeDataset(7);
								break;
							case 'Day Schedule':
								changeDataset(8);
								break;
							default:
						}
					});

	initialiseControls();
}

/******************** End of GUI control objects code *************************/

/********************* Load Experiment objects code ***************************/

var helpContent;
function initialiseHelp() {
    helpContent = "";
    helpContent += "<h1>Pie Chart Experiment Help</h1>";
    helpContent += "<p>This experiment allows students to learn about pie charts and how to create them.</p>";
	helpContent += "<p>The top right corner shows the values for a data set.</p>";
    helpContent += "<p>You can change the data set by using the drop down menu.</p>";
    helpContent += "<p>Calculate the angle for each of the sector using the values given in brackets. Enter the angle you calculated and hit 'enter'. A new slice in the pie chart will be added.</p>";
    helpContent += "<p>Keep adding values to each of the input area and complete the pie chart.</p>";
    helpContent += "<p>If you made a mistake. Click on the reset button (blue circle) at the top panel. And enter the values again.</p>";
    helpContent += "<p>Make sure that your angles must sum up to 360&deg. You can round off your values to 2 decimal places.</p>";
	helpContent += "<p>If you stuck at any point, or want to check your pie chart, click on the 'start' button at the top panel. It will <b>draw</b> the correct pie chart for you.</p>";
    helpContent += "<p>After the animation ends, reset the experiment by clicking on the reset button.</p>";
    helpContent += "<h2>Happy Pie Charting:)</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo() {
    infoContent = "";
    infoContent += "<h1>Pie Chart Experiment Info</h1>";
    infoContent += "<p>This experiment allows students to learn about pie charts and how to create them.</p>";
    infoContent += "<h3>Concept of pie charts</h3>";
    infoContent += "<p>A pie chart (or a circle chart) is a circular statistical graphic which is divided into slices to illustrate numerical proportion. In a pie chart, the arc length of each slice (and consequently its central angle and area), is proportional to the quantity it represents.</p>";
    infoContent += "<h3>How to create a pie chart</h3>";
    infoContent += "<p>Follow these steps to create a pie chart:-<ol>";
    infoContent += "<li>Find the total of shares of all components, by adding the values given in brackets.</li>";
    infoContent += "<li>Find percentage of each components by dividing it's share by total sum of shares.</li>";
    infoContent += "<li>Find angles corresponding to each percentage using the formula:<br>Angle = 360 &mul; Percent &frasl; 100</li>";
    infoContent += "<li>Input the angle in the input text field and hit enter, this will add a slice into your pie chart with the given angle.</li>";
    infoContent += "<li>Continue for all segments.</li>";
    infoContent += "</ol></p>";
    infoContent += "<p><b>Note</b>: Sum of all angles must be <b>360&deg;</b></p>";
    infoContent += "<p>If you stuck at any point, or want to check your pie chart, click on the 'start' button at the top panel.</p>";
    infoContent += "<p>If you made a mistake, click on the reset button at the top panel.</p>";
    infoContent += "<h2>Happy Pie Charting:)</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene() {
    //Initialise Scene Variables
    mySceneTLX = -20.0;
    mySceneTLY = 15.0;
    mySceneBRX = 20.0;
    mySceneBRY = -15.0;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
}

function initialiseOtherVariables() {
    //Initialise variables

}

function loadExperimentElements() {

	//creating data sets
	createDatasets();

    PIEsetExperimentTitle("Pie charts simplified");
    PIEsetDeveloperName("Rishabh Gupta");
    //PIEhideControlElement();

    //initialise help and info content
    initialiseHelp();
    initialiseInfo();

    //initialise Scene
    initialiseScene();

    //initialise Other Variables
    initialiseOtherVariables();

    //PIErenderer.alpha = true;
    PIErenderer.setClearColor(0x72a6f9);

    //the correct pie chart
    pieChart = new PieChart();
    PIEaddElement(pieChart.object);
    pieChart.object.position.x = farLocation;
    pieChart.object.rotation.x = -Math.PI/3;

    //pie chart drawn by the user
    userPieChart = new PieChart();
    PIEaddElement(userPieChart.object);
    userPieChart.object.rotation.x = -Math.PI/3;

    changeDataset(0);

    //Reset all positions
    resetExperiment();

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}

/******************* End of Load Experiment objects code **********************/

/*************************** Reset Experiment code ****************************/

function resetExperiment() {
    //initialise Other Variables
    initialiseOtherVariables();

    for(var i = 0; i < currentDatasetLength; i++) {
        userValues[i] = 0.0;
        created[i] = false;
    }
    currentColor = 0;
    remaining = 360;
    userPieChart.removeAll();
    userPieChart.object.position.x = 0;
    pieChart.object.position.x = farLocation;
    //reset sliders
    /*for(var i = 0; i < labels.length; i++) {
        PIEchangeInputText(labels[i], "");
    }*/
    //reset pie transparency and size
    for(var i = 0; i < pieChart.slices.length; i++) {
        pieChart.slices[i].material.opacity = 0.0;
        pieChart.slices[i].scale.x = 0.01;
        pieChart.slices[i].scale.y = 0.01;
        pieChart.sprites[i].visible = false;
    }
    pieSlices = 0;
}

/********************** End of Reset Experiment code **************************/

/******************** Update (animation changes) code *************************/

var pieSlices = 0;
var moved = false;
function updateExperimentElements(t, dt) {

    var boundaryT = dt / 1000.0;    //seconds
    if(moved) {
        userPieChart.object.position.x = farLocation;
        pieChart.object.position.x = 0;
    } else {
        moved = true;
    }

    if(pieSlices < pieChart.numberOfPieces) {
		pieChart.sprites[pieSlices].visible = true;
        pieChart.slices[pieSlices].material.opacity += 0.01;
        pieChart.slices[pieSlices].scale.x += 0.01;
        pieChart.slices[pieSlices].scale.y += 0.01;
        if(pieChart.slices[pieSlices].material.opacity >= 1) {
            //PIEchangeInputText(labels[pieSlices], (1.0*values[pieSlices]).toFixed(2));  //.toFixed(2)
			//TODO: change input gui
            userValues[pieSlices] = values[pieSlices];
            pieSlices++;
        }
    } else {
        PIEstopAnimation();
    }
}

/******************* Update (animation changes) code **************************/

/************************** Helper Functions **********************************/

//Pie chart constructor
function PieChart() {
    this.object = new THREE.Object3D();
    this.numberOfPieces = 0;
    this.currentAngle = 0;
    this.slices = [];
    this.angles = [];
    this.sprites = [];

    /*this.setNumberOfPieces = function (n) {
        this.numberOfPieces = n;
    }*/
    this.add = 2;
    // function to add pieces to the pie chart
    this.addPiece = function (angle, colorID, visible, label) {   //angle in degrees
        // geometry
        var settings = {
            amount: 1,
            bevelEnabled: true,
            bevelSegments: 5,
            steps: 2,
            bevelSize: 0.05,
            bevelThickness: 1
        };

        var shape = new THREE.Shape();
        shape.absarc(0, 0, pieRadius, this.currentAngle+eps, (this.currentAngle+Math.PI*angle/180) - eps, false);
        shape.lineTo(0, 0);

        this.currentAngle += (Math.PI*angle)/180;
        var ang = this.currentAngle - ((Math.PI*angle)/360);
        this.angles[this.numberOfPieces] = this.currentAngle;

        var geometry = new THREE.ExtrudeGeometry(shape, settings);

        // material
        var material = new THREE.MeshPhongMaterial( {
            color: colors[colorID],
            shading: THREE.SmoothShading,
            transparent: true,
            opacity: 0
        } );
        if(visible) {
            material.opacity = 1.0;
        }
        var slice = new THREE.Mesh(geometry, material);
        if(!visible) {
            slice.scale.x = 0.001;
            slice.scale.y = 0.001;
        }
        slice.castShadow = false;
        slice.receiveShadow = false;

        this.object.add(slice);
        this.slices[this.numberOfPieces] = slice;

        var r = parseInt(colors[colorID] & 0xff0000),
        g = parseInt(colors[colorID] & 0x00ff00),
        b = parseInt(colors[colorID] & 0x0000ff);
        var properties = {fontsize: 16, backgroundColor: {r: r, g: g, b: b, a: 0.7} };
        var spritey = makeTextSprite(" " + label + " ", properties);
        //creating labels up and down
        spritey.position.z = this.add;//Math.floor((Math.random() * 5)+1);
        this.add = 2 - this.add;

        spritey.position.x = Math.cos(ang) * pieRadius + 3;
        spritey.position.y = Math.sin(ang) * pieRadius - 5;

        this.object.add(spritey);
        if(!visible) {
            spritey.visible = false;
        }
        this.sprites[this.numberOfPieces] = spritey;

        this.numberOfPieces++;
    }

    this.removeAll = function () {
        for(var i = 0; i < this.numberOfPieces; i++) {
            this.object.remove(this.slices[i]);
            this.object.remove(this.sprites[i]);
        }

        this.slices = [];
        this.angles = [];
        this.sprites = [];
        this.currentAngle = 0;
        this.numberOfPieces = 0;
    }
}

//creates pie chart from current dataset
function createPieFromDataset() {
	pieChart.removeAll();

	for(var  i = 0; i < labels.length; i++) {
        pieChart.addPiece(values[i], i%colors.length, false, labels[i]);
    }
}

function changeDataset(datasetID) {
	currentDatasetID = datasetID;
	currentDataset = datasetCollection[datasetID];
	currentDatasetLength = currentDataset.length;
	setGUI();
	createPieFromDataset();
	resetExperiment();
	pieChart.object.position.x = farLocation;
}

function createDatasets() {

	datasetNames = [ 'Sachin\'s Dismissal', 'Sensus', 'Election results', 'Atmosphere', 'Market Share', 'Movie Ratings', 'Exam Results', 'Balanced Diet', 'Day Schedule' ]
	currentDatasetID = 0;

	//Sachin's Dismissal
	datasetCollection[0] = new Array();
	for(var i = 0; i < 7; i++) {
		datasetCollection[0][i] = new Array();
	}
	datasetCollection[0][0][0] = "Bowled";
	datasetCollection[0][0][1] = 68;
	datasetCollection[0][1][0] = "Caught";
	datasetCollection[0][1][1] = 245;
	datasetCollection[0][2][0] = "C&B";
	datasetCollection[0][2][1] = 13;
	datasetCollection[0][3][0] = "HitWicket";
	datasetCollection[0][3][1] = 1;
	datasetCollection[0][4][0] = "LBW";
	datasetCollection[0][4][1] = 39;
	datasetCollection[0][5][0] = "Run out";
	datasetCollection[0][5][1] = 34;
	datasetCollection[0][6][0] = "Stumping";
	datasetCollection[0][6][1] = 11;

	//Sensus
	datasetCollection[1] = new Array();
	for(var i = 0; i < 10; i++) {
		datasetCollection[1][i] = new Array();
	}
	datasetCollection[1][0][0] = "0-4 yrs";
	datasetCollection[1][0][1] = 110;
	datasetCollection[1][1][0] = "5-9 yrs";
	datasetCollection[1][1][1] = 128;
	datasetCollection[1][2][0] = "10-14 yrs";
	datasetCollection[1][2][1] = 124;
	datasetCollection[1][3][0] = "15-19 yrs";
	datasetCollection[1][3][1] = 100;
	datasetCollection[1][4][0] = "20-24 yrs";
	datasetCollection[1][4][1] = 89;
	datasetCollection[1][5][0] = "25-44 yrs";
	datasetCollection[1][5][1] = 284;
	datasetCollection[1][6][0] = "45-64 yrs";
	datasetCollection[1][6][1] = 139;
	datasetCollection[1][7][0] = "65-79 yrs";
	datasetCollection[1][07][1] = 41;
	datasetCollection[1][8][0] = "80+ yrs";
	datasetCollection[1][8][1] = 8;
	datasetCollection[1][9][0] = "Not mentioned";
	datasetCollection[1][9][1] = 2;

	//Election results
	datasetCollection[2] = new Array();
	for(var i = 0; i < 6; i++) {
		datasetCollection[2][i] = new Array();
	}
	datasetCollection[2][0][0] = "A";
	datasetCollection[2][0][1] = 67;
	datasetCollection[2][1][0] = "B";
	datasetCollection[2][1][1] = 4;
	datasetCollection[2][2][0] = "C";
	datasetCollection[2][2][1] = 53;
	datasetCollection[2][3][0] = "D";
	datasetCollection[2][3][1] = 20;
	datasetCollection[2][4][0] = "E";
	datasetCollection[2][4][1] = 11;
	datasetCollection[2][5][0] = "F";
	datasetCollection[2][5][1] = 5;

	//Atmosphere
	datasetCollection[3] = new Array();
	for(var i = 0; i < 6; i++) {
		datasetCollection[3][i] = new Array();
	}
	datasetCollection[3][0][0] = "Oxygen";
	datasetCollection[3][0][1] = 20.95;
	datasetCollection[3][1][0] = "Nitrogen";
	datasetCollection[3][1][1] = 77.08;
	datasetCollection[3][2][0] = "Argon";
	datasetCollection[3][2][1] = 0.93;
	datasetCollection[3][3][0] = "Carbon Dioxide";
	datasetCollection[3][3][1] = 0.038;
	datasetCollection[3][4][0] = "Water";
	datasetCollection[3][4][1] = 1;
	datasetCollection[3][5][0] = "Others";
	datasetCollection[3][5][1] = 0.04;

	//Market shares
	datasetCollection[4] = new Array();
	for(var i = 0; i < 7; i++) {
		datasetCollection[4][i] = new Array();
	}
	datasetCollection[4][0][0] = "Maruti";
	datasetCollection[4][0][1] = 40;
	datasetCollection[4][1][0] = "Hyundai";
	datasetCollection[4][1][1] = 14;
	datasetCollection[4][2][0] = "Tata Motors";
	datasetCollection[4][2][1] = 13;
	datasetCollection[4][3][0] = "Honda";
	datasetCollection[4][3][1] = 4;
	datasetCollection[4][4][0] = "Ford";
	datasetCollection[4][4][1] = 3.3;
	datasetCollection[4][5][0] = "Volkswagen";
	datasetCollection[4][5][1] = 3;
	datasetCollection[4][6][0] = "Others";
	datasetCollection[4][6][1] = 22.7;

	//Movie Ratings
	datasetCollection[5] = new Array();
	for(var i = 0; i < 10; i++) {
		datasetCollection[5][i] = new Array();
	}
	datasetCollection[5][0][0] = "0.5";
	datasetCollection[5][0][1] = 4;
	datasetCollection[5][1][0] = "1";
	datasetCollection[5][1][1] = 14;
	datasetCollection[5][2][0] = "1.5";
	datasetCollection[5][2][1] = 10;
	datasetCollection[5][3][0] = "2";
	datasetCollection[5][3][1] = 5;
	datasetCollection[5][4][0] = "2.5";
	datasetCollection[5][4][1] = 20;
	datasetCollection[5][5][0] = "3";
	datasetCollection[5][5][1] = 23;
	datasetCollection[5][6][0] = "3.5";
	datasetCollection[5][6][1] = 11;
	datasetCollection[5][7][0] = "4";
	datasetCollection[5][7][1] = 41;
	datasetCollection[5][8][0] = "4.5";
	datasetCollection[5][8][1] = 42;
	datasetCollection[5][9][0] = "5";
	datasetCollection[5][9][1] = 30;

	//Exam results
	datasetCollection[6] = new Array();
	for(var i = 0; i < 7; i++) {
		datasetCollection[6][i] = new Array();
	}
	datasetCollection[6][0][0] = "Less than 40%";
	datasetCollection[6][0][1] = 3;
	datasetCollection[6][1][0] = "41% - 50%";
	datasetCollection[6][1][1] = 5;
	datasetCollection[6][2][0] = "51% - 60%";
	datasetCollection[6][2][1] = 10;
	datasetCollection[6][3][0] = "61% - 70%";
	datasetCollection[6][3][1] = 17;
	datasetCollection[6][4][0] = "71% - 80%";
	datasetCollection[6][4][1] = 5;
	datasetCollection[6][5][0] = "81% - 90%";
	datasetCollection[6][5][1] = 3;
	datasetCollection[6][6][0] = "More than 90%";
	datasetCollection[6][6][1] = 2;

	//Balanced diet
	datasetCollection[7] = new Array();
	for(var i = 0; i < 5; i++) {
		datasetCollection[7][i] = new Array();
	}
	datasetCollection[7][0][0] = "Fruits";
	datasetCollection[7][0][1] = 36;
	datasetCollection[7][1][0] = "Vegetables";
	datasetCollection[7][1][1] = 14;
	datasetCollection[7][2][0] = "Dairy";
	datasetCollection[7][2][1] = 13;
	datasetCollection[7][3][0] = "Proteins";
	datasetCollection[7][3][1] = 28;
	datasetCollection[7][4][0] = "Grain";
	datasetCollection[7][4][1] = 9;

	//Day Schedule
	datasetCollection[8] = new Array();
	for(var i = 0; i < 6; i++) {
		datasetCollection[8][i] = new Array();
	}
	datasetCollection[8][0][0] = "School";
	datasetCollection[8][0][1] = 6;
	datasetCollection[8][1][0] = "Sleep";
	datasetCollection[8][1][1] = 8;
	datasetCollection[8][2][0] = "Playing";
	datasetCollection[8][2][1] = 2;
	datasetCollection[8][3][0] = "Study";
	datasetCollection[8][3][1] = 4;
	datasetCollection[8][4][0] = "T.V.";
	datasetCollection[8][4][1] = 1;
	datasetCollection[8][5][0] = "Others";
	datasetCollection[8][5][1] = 3;

}

function createHandlers(k) {
	handlers = new Array();
	switch(k) {
		case 4: create4Handler();break;
		case 5: create5Handler();break;
		case 6: create6Handler();break;
		case 7: create7Handler();break;
		case 8: create8Handler();break;
		case 9: create9Handler();break;
		case 10: create10Handler();break;
	}
}

function create4Handler() {
	handlers.push(function (val) {
        if(!created[0] && val != "" && val > 0 && val <= remaining) {
            created[0] = true;
            userValues[0] = val;
            remaining -= val;
            userPieChart.addPiece(val, currentColor, true, labels[0]);
            PIErender();
            currentColor++;
        } else {
			//TODO: reset input text
            //PIEchangeInputText(labels[0], userValues[0]);
			/*prop.p[0] = userValues[0];
			console.log(prop.p[0]);
			for (var i in PIEinputGUI.__controllers) {
				PIEinputGUI.__controllers[i].updateDisplay();
			}
			/*
			PIEinputGUI.__controllers[i].updateDisplay();
			PIErender();*/
       }
    });
    handlers.push(function (val) {
        if(!created[1] && val != "" && val > 0 && val <= remaining) {
            created[1] = true;
            userValues[1] = val;
            remaining -= val;
            userPieChart.addPiece(val, currentColor, true, labels[1]);
            PIErender();
            currentColor++;
        } else {
            PIEchangeInputText(labels[1], userValues[1]);
        }
    });
    handlers.push(function (val) {
        if(!created[2] && val != "" && val > 0 && val <= remaining) {
            created[2] = true;
            userValues[2] = val;
            remaining -= val;
            userPieChart.addPiece(val, currentColor, true, labels[2]);
            PIErender();
            currentColor++;
        } else {
            PIEchangeInputText(labels[2], userValues[2]);
        }
    });
    handlers.push(function (val) {
        if(!created[3] && val != "" && val > 0 && val <= remaining) {
            created[3] = true;
            userValues[3] = val;
            remaining -= val;
            userPieChart.addPiece(val, currentColor, true, labels[3]);
            PIErender();
            currentColor++;
        } else {
            PIEchangeInputText(labels[3], userValues[3]);
        }
    });
}
function create5Handler() {
	handlers.push(function (val) {
        if(!created[0] && val != "" && val > 0 && val <= remaining) {
            created[0] = true;
            userValues[0] = val;
            remaining -= val;
            userPieChart.addPiece(val, currentColor, true, labels[0]);
            PIErender();
            currentColor++;
        } else {
			//TODO: reset input text
            //PIEchangeInputText(labels[0], userValues[0]);
			/*prop.p[0] = userValues[0];
			console.log(prop.p[0]);
			for (var i in PIEinputGUI.__controllers) {
				PIEinputGUI.__controllers[i].updateDisplay();
			}
			/*
			PIEinputGUI.__controllers[i].updateDisplay();
			PIErender();*/
       }
    });
    handlers.push(function (val) {
        if(!created[1] && val != "" && val > 0 && val <= remaining) {
            created[1] = true;
            userValues[1] = val;
            remaining -= val;
            userPieChart.addPiece(val, currentColor, true, labels[1]);
            PIErender();
            currentColor++;
        } else {
            PIEchangeInputText(labels[1], userValues[1]);
        }
    });
    handlers.push(function (val) {
        if(!created[2] && val != "" && val > 0 && val <= remaining) {
            created[2] = true;
            userValues[2] = val;
            remaining -= val;
            userPieChart.addPiece(val, currentColor, true, labels[2]);
            PIErender();
            currentColor++;
        } else {
            PIEchangeInputText(labels[2], userValues[2]);
        }
    });
    handlers.push(function (val) {
        if(!created[3] && val != "" && val > 0 && val <= remaining) {
            created[3] = true;
            userValues[3] = val;
            remaining -= val;
            userPieChart.addPiece(val, currentColor, true, labels[3]);
            PIErender();
            currentColor++;
        } else {
            PIEchangeInputText(labels[3], userValues[3]);
        }
    });
	handlers.push(function (val) {
        if(!created[4] && val != "" && val > 0 && val <= remaining) {
            created[4] = true;
            userValues[4] = val;
            remaining -= val;
            userPieChart.addPiece(val, currentColor, true, labels[4]);
            PIErender();
            currentColor++;
        } else {
            PIEchangeInputText(labels[4], userValues[4]);
        }
    });
}
function create6Handler() {
	handlers.push(function (val) {
		if(!created[0] && val != "" && val > 0 && val <= remaining) {
			created[0] = true;
			userValues[0] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[0]);
			PIErender();
			currentColor++;
		} else {
			//TODO: reset input text
			//PIEchangeInputText(labels[0], userValues[0]);
			/*prop.p[0] = userValues[0];
			console.log(prop.p[0]);
			for (var i in PIEinputGUI.__controllers) {
				PIEinputGUI.__controllers[i].updateDisplay();
			}
			/*
			PIEinputGUI.__controllers[i].updateDisplay();
			PIErender();*/
	   }
	});
	handlers.push(function (val) {
		if(!created[1] && val != "" && val > 0 && val <= remaining) {
			created[1] = true;
			userValues[1] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[1]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[1], userValues[1]);
		}
	});
	handlers.push(function (val) {
		if(!created[2] && val != "" && val > 0 && val <= remaining) {
			created[2] = true;
			userValues[2] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[2]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[2], userValues[2]);
		}
	});
	handlers.push(function (val) {
		if(!created[3] && val != "" && val > 0 && val <= remaining) {
			created[3] = true;
			userValues[3] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[3]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[3], userValues[3]);
		}
	});
	handlers.push(function (val) {
		if(!created[4] && val != "" && val > 0 && val <= remaining) {
			created[4] = true;
			userValues[4] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[4]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[4], userValues[4]);
		}
	});
	handlers.push(function (val) {
		if(!created[5] && val != "" && val > 0 && val <= remaining) {
			created[5] = true;
			userValues[5] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[5]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[5], userValues[5]);
		}
	});
}
function create7Handler() {
	handlers.push(function (val) {
		if(!created[0] && val != "" && val > 0 && val <= remaining) {
			created[0] = true;
			userValues[0] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[0]);
			PIErender();
			currentColor++;
		} else {
			//TODO: reset input text
			//PIEchangeInputText(labels[0], userValues[0]);
			/*prop.p[0] = userValues[0];
			console.log(prop.p[0]);
			for (var i in PIEinputGUI.__controllers) {
				PIEinputGUI.__controllers[i].updateDisplay();
			}
			/*
			PIEinputGUI.__controllers[i].updateDisplay();
			PIErender();*/
	   }
	});
	handlers.push(function (val) {
		if(!created[1] && val != "" && val > 0 && val <= remaining) {
			created[1] = true;
			userValues[1] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[1]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[1], userValues[1]);
		}
	});
	handlers.push(function (val) {
		if(!created[2] && val != "" && val > 0 && val <= remaining) {
			created[2] = true;
			userValues[2] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[2]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[2], userValues[2]);
		}
	});
	handlers.push(function (val) {
		if(!created[3] && val != "" && val > 0 && val <= remaining) {
			created[3] = true;
			userValues[3] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[3]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[3], userValues[3]);
		}
	});
	handlers.push(function (val) {
		if(!created[4] && val != "" && val > 0 && val <= remaining) {
			created[4] = true;
			userValues[4] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[4]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[4], userValues[4]);
		}
	});
	handlers.push(function (val) {
		if(!created[5] && val != "" && val > 0 && val <= remaining) {
			created[5] = true;
			userValues[5] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[5]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[5], userValues[5]);
		}
	});
	handlers.push(function (val) {
		if(!created[6] && val != "" && val > 0 && val <= remaining) {
			created[6] = true;
			userValues[6] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[6]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[6], userValues[6]);
		}
	});
}
function create8Handler() {
	handlers.push(function (val) {
		if(!created[0] && val != "" && val > 0 && val <= remaining) {
			created[0] = true;
			userValues[0] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[0]);
			PIErender();
			currentColor++;
		} else {
			//TODO: reset input text
			//PIEchangeInputText(labels[0], userValues[0]);
			/*prop.p[0] = userValues[0];
			console.log(prop.p[0]);
			for (var i in PIEinputGUI.__controllers) {
				PIEinputGUI.__controllers[i].updateDisplay();
			}
			/*
			PIEinputGUI.__controllers[i].updateDisplay();
			PIErender();*/
	   }
	});
	handlers.push(function (val) {
		if(!created[1] && val != "" && val > 0 && val <= remaining) {
			created[1] = true;
			userValues[1] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[1]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[1], userValues[1]);
		}
	});
	handlers.push(function (val) {
		if(!created[2] && val != "" && val > 0 && val <= remaining) {
			created[2] = true;
			userValues[2] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[2]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[2], userValues[2]);
		}
	});
	handlers.push(function (val) {
		if(!created[3] && val != "" && val > 0 && val <= remaining) {
			created[3] = true;
			userValues[3] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[3]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[3], userValues[3]);
		}
	});
	handlers.push(function (val) {
		if(!created[4] && val != "" && val > 0 && val <= remaining) {
			created[4] = true;
			userValues[4] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[4]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[4], userValues[4]);
		}
	});
	handlers.push(function (val) {
		if(!created[5] && val != "" && val > 0 && val <= remaining) {
			created[5] = true;
			userValues[5] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[5]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[5], userValues[5]);
		}
	});
	handlers.push(function (val) {
		if(!created[6] && val != "" && val > 0 && val <= remaining) {
			created[6] = true;
			userValues[6] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[6]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[6], userValues[6]);
		}
	});
	handlers.push(function (val) {
		if(!created[7] && val != "" && val > 0 && val <= remaining) {
			created[7] = true;
			userValues[7] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[7]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[7], userValues[7]);
		}
	});
}
function create9Handler() {
	handlers.push(function (val) {
		if(!created[0] && val != "" && val > 0 && val <= remaining) {
			created[0] = true;
			userValues[0] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[0]);
			PIErender();
			currentColor++;
		} else {
			//TODO: reset input text
			//PIEchangeInputText(labels[0], userValues[0]);
			/*prop.p[0] = userValues[0];
			console.log(prop.p[0]);
			for (var i in PIEinputGUI.__controllers) {
				PIEinputGUI.__controllers[i].updateDisplay();
			}
			/*
			PIEinputGUI.__controllers[i].updateDisplay();
			PIErender();*/
	   }
	});
	handlers.push(function (val) {
		if(!created[1] && val != "" && val > 0 && val <= remaining) {
			created[1] = true;
			userValues[1] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[1]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[1], userValues[1]);
		}
	});
	handlers.push(function (val) {
		if(!created[2] && val != "" && val > 0 && val <= remaining) {
			created[2] = true;
			userValues[2] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[2]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[2], userValues[2]);
		}
	});
	handlers.push(function (val) {
		if(!created[3] && val != "" && val > 0 && val <= remaining) {
			created[3] = true;
			userValues[3] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[3]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[3], userValues[3]);
		}
	});
	handlers.push(function (val) {
		if(!created[4] && val != "" && val > 0 && val <= remaining) {
			created[4] = true;
			userValues[4] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[4]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[4], userValues[4]);
		}
	});
	handlers.push(function (val) {
		if(!created[5] && val != "" && val > 0 && val <= remaining) {
			created[5] = true;
			userValues[5] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[5]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[5], userValues[5]);
		}
	});
	handlers.push(function (val) {
		if(!created[6] && val != "" && val > 0 && val <= remaining) {
			created[6] = true;
			userValues[6] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[6]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[6], userValues[6]);
		}
	});
	handlers.push(function (val) {
		if(!created[7] && val != "" && val > 0 && val <= remaining) {
			created[7] = true;
			userValues[7] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[7]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[7], userValues[7]);
		}
	});
	handlers.push(function (val) {
		if(!created[8] && val != "" && val > 0 && val <= remaining) {
			created[8] = true;
			userValues[8] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[8]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[8], userValues[8]);
		}
	});
}
function create10Handler() {
	handlers.push(function (val) {
		if(!created[0] && val != "" && val > 0 && val <= remaining) {
			created[0] = true;
			userValues[0] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[0]);
			PIErender();
			currentColor++;
		} else {
			//TODO: reset input text
			//PIEchangeInputText(labels[0], userValues[0]);
			/*prop.p[0] = userValues[0];
			console.log(prop.p[0]);
			for (var i in PIEinputGUI.__controllers) {
				PIEinputGUI.__controllers[i].updateDisplay();
			}
			/*
			PIEinputGUI.__controllers[i].updateDisplay();
			PIErender();*/
	   }
	});
	handlers.push(function (val) {
		if(!created[1] && val != "" && val > 0 && val <= remaining) {
			created[1] = true;
			userValues[1] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[1]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[1], userValues[1]);
		}
	});
	handlers.push(function (val) {
		if(!created[2] && val != "" && val > 0 && val <= remaining) {
			created[2] = true;
			userValues[2] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[2]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[2], userValues[2]);
		}
	});
	handlers.push(function (val) {
		if(!created[3] && val != "" && val > 0 && val <= remaining) {
			created[3] = true;
			userValues[3] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[3]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[3], userValues[3]);
		}
	});
	handlers.push(function (val) {
		if(!created[4] && val != "" && val > 0 && val <= remaining) {
			created[4] = true;
			userValues[4] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[4]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[4], userValues[4]);
		}
	});
	handlers.push(function (val) {
		if(!created[5] && val != "" && val > 0 && val <= remaining) {
			created[5] = true;
			userValues[5] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[5]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[5], userValues[5]);
		}
	});
	handlers.push(function (val) {
		if(!created[6] && val != "" && val > 0 && val <= remaining) {
			created[6] = true;
			userValues[6] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[6]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[6], userValues[6]);
		}
	});
	handlers.push(function (val) {
		if(!created[7] && val != "" && val > 0 && val <= remaining) {
			created[7] = true;
			userValues[7] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[7]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[7], userValues[7]);
		}
	});
	handlers.push(function (val) {
		if(!created[8] && val != "" && val > 0 && val <= remaining) {
			created[8] = true;
			userValues[8] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[8]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[8], userValues[8]);
		}
	});
	handlers.push(function (val) {
		if(!created[9] && val != "" && val > 0 && val <= remaining) {
			created[9] = true;
			userValues[9] = val;
			remaining -= val;
			userPieChart.addPiece(val, currentColor, true, labels[9]);
			PIErender();
			currentColor++;
		} else {
			PIEchangeInputText(labels[9], userValues[9]);
		}
	});
}

function makeTextSprite( message, parameters ) {
	if ( parameters === undefined ) parameters = {};

	var fontface = parameters.hasOwnProperty("fontface") ?
		parameters["fontface"] : "Arial";

	var fontsize = parameters.hasOwnProperty("fontsize") ?
		parameters["fontsize"] : 18;

	var borderThickness = parameters.hasOwnProperty("borderThickness") ?
		parameters["borderThickness"] : 0;

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
	roundRect(context, borderThickness/2, borderThickness/2, textWidth + borderThickness, fontsize * 1.4 + borderThickness, 6);
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

/***************************Helper Functions***********************************/
