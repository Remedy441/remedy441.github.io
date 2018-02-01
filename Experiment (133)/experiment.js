var c1,c2,c3,c4,c5,c6,c7,c8,c9,c10;
var cs1,cs2,cs3,cs4,cs5,cs6,cs7,cs8,cs9,cs10;
var note1,note2;
var noteS1,noteS2,noteS3,noteS4,noteS5,noteS6,noteS7,noteS8,noteS9,noteS10;
var note1,note2,note3,note4,note5,note6,note7,note8,note9,note10;
var bt1=[],bt2=[],bt3=[],bt4=[],bt5=[];
var started=0;
var value=1;
var numBox;
var steps=0,ans=0;
var coin = 0,coin10=0;
var rp1=0,rp2=0,rp3=0,rp4=0,rp5=0,rp6=0,rp7=0,rp8=0,rp9=0,rp10=0;
var np1=0,np2=0,np3=0,np4=0,np5=0,np6=0,np7=0,np8=0,np9=0,np10=0;

var alpha = 10;
var txt,txtDsplyd=0;
var box1,box2,box3,box4,box5;
var win = 0,winBox;
var text2,reset=0;
var apprcube1,apprcube2,apprsphere;
var star1,star2,star3;
var apprVal=0,chng=0,chEx=0;
var toggle=[];

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Learn Counting help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>Ten rupees notes and One rupee coins at the left side , Right side three buttons given you can go to next number and can check the answer and third button is to learn steps.</p>";
    helpContent = helpContent + "<h3>Experiment Details</h3>";
    helpContent = helpContent + "<p style = 'color: green'>This Experiment is to make pupil learn Math.</p>";
    helpContent = helpContent + "<p style = 'color: red'>Mathematics is the queen of sciences and Arithmetics is the queen of Mathematics.</p>";
    helpContent = helpContent + "<h3>Goal</h3>";
    helpContent = helpContent + "<p style = 'color: red'>Goal of each task is to set the equal amount of money at the right side of black rod on the screen.</p>";
    
    helpContent = helpContent + "<p style = 'color: red'>You can move coins and notes using drag/drop controls</p>";
    
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p style = 'color: blue'>The Experiment Start with Number 1 </p>";
    helpContent = helpContent + "<p style = 'color: blue'>You can learn till Number 100.</p>";
    helpContent = helpContent + "<p style = 'color: blue'>All controls are Mousedown ,Drag/Drop controls.</p>";
    helpContent = helpContent + "<p style = 'color: red'> THANK YOU .....</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}
var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Learn Counting Experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>Ten rupees notes and One rupee coins at the left side , Right side three buttons given you can go to next number and can check the answer and third button is to learn steps.</p>";
    infoContent = infoContent + "<h3>Movement</h3>";
    infoContent = infoContent + "<p>In this project You can move coins and Notes using drag and drop controls.</p>";
    infoContent = infoContent + "<p>Your task is to set the equal amount of money to the right side of Experiment .</p>";
    infoContent = infoContent + "<p>you can click on buttons to understand the experiment more clearly.</p>";
    infoContent = infoContent + "<p>Your Observation skills would improved with this game</p>";
    infoContent = infoContent + "<p>You are only allowed to click on the buttons right side.</p>";
    infoContent = infoContent + "<p>User can observe the Money values changing</p>";
    infoContent = infoContent + "</br>";
    
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene()
{
	
    /* Initialise Scene Variables */
   mySceneTLX = 0.0;
   mySceneTLY = 4.0;
   mySceneBRX = 4.0;
   mySceneBRY = 0.0;
   mySceneW   = (mySceneBRX - mySceneTLX);
   mySceneH   = (mySceneTLY - mySceneBRY);
   myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
   myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
   
}

function initialiseOtherVariables()
{
    /* Gravity */
    gravityX = 0.0;
    gravityY = -9.8;

    /* Barriers */
    rightB=mySceneBRX;
    leftB=mySceneTLX;
    bottomB=mySceneBRY;
    topB=mySceneTLY;
}

//Resetting all values to default values
function resetExperiment()
{
    reset=1;
    PIEmouseDownd();
    
}
function addCoins()
{
	var x=1,y=2.7,z=0;

	var texture = THREE.ImageUtils.loadTexture( 'one.jpg');
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	//texture.repeat.set( 1, 1);

	var geometry = new THREE.RingGeometry( 0.001, 0.25, 32 );
	var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
	c1 = new THREE.Mesh(geometry,material);
	PIEaddElement(c1);
	
	c2 = new THREE.Mesh(geometry,material);
	PIEaddElement(c2);
	
	c3 = new THREE.Mesh(geometry,material);
	PIEaddElement(c3);
	
	c4 = new THREE.Mesh(geometry,material);
	PIEaddElement(c4);
	
	c5 = new THREE.Mesh(geometry,material);
	PIEaddElement(c5);
	
	c6 = new THREE.Mesh(geometry,material);
	PIEaddElement(c6);
	
	c7 = new THREE.Mesh(geometry,material);
	PIEaddElement(c7);
	
	c8 = new THREE.Mesh(geometry,material);
	PIEaddElement(c8);
	
	c9 = new THREE.Mesh(geometry,material);
	PIEaddElement(c9);
	
	c10 = new THREE.Mesh(geometry,material);
	PIEaddElement(c10);
	
	c1.position.set(x+0.3-3,y+0.6,z);
	c2.position.set(x+0.6-3,y+0.6,z);
	c3.position.set(x+0.9-3,y+0.6,z);
	c4.position.set(x+1.2-3,y+0.6,z);
	c5.position.set(x+1.5-3,y+0.6,z);
	
	c6.position.set(x+0.3-3,y+0.6-0.7,z);
	c7.position.set(x+0.6-3,y+0.6-0.7,z);
	c8.position.set(x+0.9-3,y+0.6-0.7,z);
	c9.position.set(x+1.2-3,y+0.6-0.7,z);
	c10.position.set(x+1.5-3,y+0.6-0.7,z);
}
function addCoinShades()
{
	var x=1.5,y=2.7,z=0;
	
	var geometry = new THREE.RingGeometry( 0.001, 0.25, 32 );
	var material = new THREE.MeshBasicMaterial( { color : 0xffffff  });
	cs1 = new THREE.Mesh(geometry,material);
	PIEaddElement(cs1);
	
	cs2 = new THREE.Mesh(geometry,material);
	PIEaddElement(cs2);
	
	cs3 = new THREE.Mesh(geometry,material);
	PIEaddElement(cs3);
	
	cs4 = new THREE.Mesh(geometry,material);
	PIEaddElement(cs4);
	
	cs5 = new THREE.Mesh(geometry,material);
	PIEaddElement(cs5);
	
	cs6 = new THREE.Mesh(geometry,material);
	PIEaddElement(cs6);
	
	cs7 = new THREE.Mesh(geometry,material);
	PIEaddElement(cs7);
	
	cs8 = new THREE.Mesh(geometry,material);
	PIEaddElement(cs8);
	
	cs9 = new THREE.Mesh(geometry,material);
	PIEaddElement(cs9);
	
	cs10 = new THREE.Mesh(geometry,material);
	PIEaddElement(cs10);
	
	cs1.position.set(x+0.1-0.8,y+0.6,-0.2);
	cs2.position.set(x+0.6-0.8,y+0.6,-0.2);
	cs3.position.set(x+1.1-0.8,y+0.6,-0.2);
	cs4.position.set(x+1.6-0.8,y+0.6,-0.2);
	cs5.position.set(x+2.1-0.8,y+0.6,-0.2);
	
	cs6.position.set(x+0.1-0.8,y+0.6-0.7,-0.2);
	cs7.position.set(x+0.6-0.8,y+0.6-0.7,-0.2);
	cs8.position.set(x+1.1-0.8,y+0.6-0.7,-0.2);
	cs9.position.set(x+1.6-0.8,y+0.6-0.7,-0.2);
	cs10.position.set(x+2.1-0.8,y+0.6-0.7,-0.2);
	
	
}
function addNotes()
{
	var texture = THREE.ImageUtils.loadTexture( 'das.jpg');
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	
	var geometry = new THREE.PlaneGeometry( 1.2,0.6 );
	var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
	note1 = new THREE.Mesh(geometry,material);
	PIEaddElement(note1);
	
	note2 = new THREE.Mesh(geometry,material);
	PIEaddElement(note2);
	
	note3 = new THREE.Mesh(geometry,material);
	PIEaddElement(note3);
	
	note4 = new THREE.Mesh(geometry,material);
	PIEaddElement(note4);
	
	note5 = new THREE.Mesh(geometry,material);
	PIEaddElement(note5);
	
	note6 = new THREE.Mesh(geometry,material);
	PIEaddElement(note6);
	
	note7 = new THREE.Mesh(geometry,material);
	PIEaddElement(note7);
	
	note8 = new THREE.Mesh(geometry,material);
	PIEaddElement(note8);
	
	note9 = new THREE.Mesh(geometry,material);
	PIEaddElement(note9);
	
	note10 = new THREE.Mesh(geometry,material);
	PIEaddElement(note10);
	
	note1.position.set(-1.3 ,1.6,0);
	note2.position.set(-1.2,1.6,0);
	note3.position.set(-1.1 ,1.6,0);
	note4.position.set(-1,1.6,0);
	note5.position.set(-0.9,1.6,0);
	
	note6.position.set(-0.8 ,1.6,0);
	note7.position.set(-0.7,1.6,0);
	note8.position.set(-0.6 ,1.6,0);
	note9.position.set(-0.5,1.6,0);
	note10.position.set(-0.4,1.6,0);

}
function addNoteShades()
{
	
	var geometry = new THREE.PlaneGeometry( 1.2,0.6 );
	var material = new THREE.MeshBasicMaterial( { color : 0xffffff });
	noteS1 = new THREE.Mesh(geometry,material);
	PIEaddElement(noteS1);
	
	
	noteS2 = new THREE.Mesh(geometry,material);
	PIEaddElement(noteS2);
	
	noteS3 = new THREE.Mesh(geometry,material);
	PIEaddElement(noteS3);
	
	noteS4 = new THREE.Mesh(geometry,material);
	PIEaddElement(noteS4);
	
	noteS5 = new THREE.Mesh(geometry,material);
	PIEaddElement(noteS5);
	
	noteS6 = new THREE.Mesh(geometry,material);
	PIEaddElement(noteS6);
	
	noteS7 = new THREE.Mesh(geometry,material);
	PIEaddElement(noteS7);
	
	noteS8 = new THREE.Mesh(geometry,material);
	PIEaddElement(noteS8);
	
	noteS9 = new THREE.Mesh(geometry,material);
	PIEaddElement(noteS9);
	
	noteS10 = new THREE.Mesh(geometry,material);
	PIEaddElement(noteS10);
	
	noteS1.position.set(1.1,1.6,-0.2);
	noteS2.position.set(1.2,1.6,-0.2);
	noteS3.position.set(1.3,1.6,-0.2);
	noteS4.position.set(1.4,1.6,-0.2);
	noteS5.position.set(1.5,1.6,-0.2);
	
	noteS6.position.set(1.6,1.6,-0.2);
	noteS7.position.set(1.7,1.6,-0.2);
	noteS8.position.set(1.8,1.6,-0.2);
	noteS9.position.set(1.9,1.6,-0.2);
	noteS10.position.set(2,1.6,-0.2);
	
	
}
function addSun()
{
	var texture = THREE.ImageUtils.loadTexture( 'next.png');
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	//texture.repeat.set( 1, 1);

	var geometry = new THREE.RingGeometry( 0.001, 0.35, 32 );
	var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
	box1 = new THREE.Mesh(geometry,material);
	PIEaddElement(box1);
	
	
	var texture = THREE.ImageUtils.loadTexture( 'answer.png');
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	var geometry = new THREE.RingGeometry( 0.001, 0.35, 32 );
	var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
	box2 = new THREE.Mesh(geometry,material);
	PIEaddElement(box2);
    	
    
	var geometry = new THREE.RingGeometry( 0.001, 0.33, 32 );
	var texture = THREE.ImageUtils.loadTexture( 'steps.jpg');
	var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
	box3 = new THREE.Mesh(geometry,material);
	PIEaddElement(box3);
    
	
	var geometry = new THREE.RingGeometry( 0.001, 0.34, 32 );
	var texture = THREE.ImageUtils.loadTexture( 'refresh.jpg');
	var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
	box5 = new THREE.Mesh(geometry,material);
	PIEaddElement(box5);
	
 	box1.position.set(3.1,0.6,0);
	box2.position.set(2.4,0.6,0);
	box3.position.set(1.7,0.6,0);
	box5.position.set(1,0.6,0);
	
	bt1.push(box1);
    bt2.push(box2);
	bt3.push(box3);
	bt5.push(box5);
	
}


function addPlanets()
{
	
	var loader1 = new THREE.FontLoader();
				loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


					//11-20

	  	 			var southGeometry = new THREE.TextGeometry( "11", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  	 			var southMaterial = new THREE.MeshBasicMaterial( { color:'yellow' });

	  				toggle[11] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[11].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "12", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[12] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[12].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "13", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[13] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[13].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "14", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[14] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[14].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "15", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[15] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[15].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "16", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[16] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[16].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "17", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[17] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[17].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "18", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[18] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[18].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "19", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[19] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[19].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "20", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[20] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[20].position.set(2.7,1.3, 1) ;
					
					//21-30
					southGeometry = new THREE.TextGeometry( "21", { font: font, size: 1.5, height: .1, curveSegments: 7});
					toggle[21] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[21].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "22", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[22] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[22].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "23", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[23] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[23].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "24", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[24] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[24].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "25", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[25] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[25].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "26", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[26] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[26].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "27", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[27] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[27].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "28", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[28] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[28].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "29", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[29] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[29].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "30", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[30] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[30].position.set(2.7,1.3, 1) ;
					
					//31-40
					southGeometry = new THREE.TextGeometry( "31", { font: font, size: 1.5, height: .1, curveSegments: 7});
					toggle[31] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[31].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "32", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[32] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[32].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "33", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[33] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[33].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "34", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[34] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[34].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "35", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[35] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[35].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "36", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[36] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[36].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "37", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[37] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[37].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "38", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[38] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[38].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "39", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[39] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[39].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "40", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[40] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[40].position.set(2.7,1.3, 1) ;
					
					//41-50
					southGeometry = new THREE.TextGeometry( "41", { font: font, size: 1.5, height: .1, curveSegments: 7});
					toggle[41] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[41].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "42", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[42] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[42].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "43", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[43] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[43].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "44", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[44] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[44].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "45", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[45] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[45].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "46", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[46] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[46].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "47", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[47] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[47].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "48", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[48] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[48].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "49", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[49] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[49].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "50", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[50] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[50].position.set(2.7,1.3, 1) ;
					
					//51-60
					southGeometry = new THREE.TextGeometry( "51", { font: font, size: 1.5, height: .1, curveSegments: 7});
					toggle[51] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[51].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "52", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[52] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[52].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "53", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[53] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[53].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "54", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[54] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[54].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "55", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[55] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[55].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "56", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[56] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[56].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "57", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[57] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[57].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "58", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[58] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[58].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "59", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[59] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[59].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "60", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[60] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[60].position.set(2.7,1.3, 1) ;
					
					//61-70
					southGeometry = new THREE.TextGeometry( "61", { font: font, size: 1.5, height: .1, curveSegments: 7});
					toggle[61] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[61].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "62", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[62] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[62].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "63", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[63] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[63].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "64", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[64] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[64].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "65", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[65] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[65].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "66", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[66] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[66].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "67", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[67] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[67].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "68", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[68] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[68].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "69", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[69] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[69].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "70", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[70] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[70].position.set(2.7,1.3, 1) ;
					
					//71-80
					southGeometry = new THREE.TextGeometry( "71", { font: font, size: 1.5, height: .1, curveSegments: 7});
					toggle[71] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[71].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "72", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[72] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[72].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "73", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[73] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[73].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "74", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[74] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[74].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "75", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[75] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[75].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "76", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[76] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[76].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "77", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[77] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[77].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "78", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[78] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[78].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "79", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[79] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[79].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "80", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[80] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[80].position.set(2.7,1.3, 1) ;
					
					//81-90
					southGeometry = new THREE.TextGeometry( "81", { font: font, size: 1.5, height: .1, curveSegments: 7});
					toggle[81] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[81].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "82", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[82] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[82].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "83", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[83] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[83].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "84", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[84] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[84].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "85", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[85] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[85].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "86", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[86] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[86].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "87", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[87] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[87].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "88", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[88] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[88].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "89", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[89] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[89].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "90", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[90] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[90].position.set(2.7,1.3, 1) ;
					
					
					//81-99
					southGeometry = new THREE.TextGeometry( "91", { font: font, size: 1.5, height: .1, curveSegments: 7});
					toggle[91] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[91].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "92", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[92] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[92].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "93", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[93] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[93].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "94", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[94] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[94].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "95", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[95] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[95].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "96", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[96] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[96].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "97", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[97] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[97].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "98", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[98] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[98].position.set(2.7,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry( "99", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle[99] = new THREE.Mesh(southGeometry ,southMaterial );
					toggle[99].position.set(2.7,1.3, 1) ;
					
  				
  				started=1;
  				})
  				
}
function loadText()
{
	 value = parseInt(Math.random() * 99+1);
	 
	 if(value==1)
	 	value=11;
	 else if(value==2)
	 	value=22;
	 else if(value==3)
	 	value=33;
	 else if(value==4)
	 	value=44;
	 else if(value==5)
	 	value=55;
	 else if(value==6)
	 	value=66;
	 else if(value==7)
	 	value=77;
	 else if(value==8)
	 	value=88;
	 else if(value==9)
	 	value=99;
	 else if(value==10)
	 	value=11;
	 
	 PIEscene.add(toggle[value]);
}
function addOrbits()
{
	
}
function line3Drag(element, newpos)
{
	
}
function updateExperimentElements(t, dt)
{

	
}
function PIEmouseDownd()
{

    var Next,Steps,Ans,back,refresh;
    PIEraycaster.setFromCamera(PIEmouseP,PIEcamera);
    Next=PIEraycaster.intersectObjects(bt1);
    Ans=PIEraycaster.intersectObjects(bt2);
    Steps=PIEraycaster.intersectObjects(bt3);
    refresh=PIEraycaster.intersectObjects(bt5);
    
    if(Next.length > 0 || chEx==1)
    {
    	ans=0;
    	chEx=0;
    	rp1=0;rp2=0;rp3=0;rp4=0;rp5=0;rp6=0;rp7=0;rp8=0;rp9=0;rp10=0;
    	np1=0;np2=0;np3=0;np4=0;np5=0;np6=0;np7=0;np8=0;np9=0;np10=0;
    	if(win==1)
    	{
    		while(PIEdragElements.length>0)
    			PIEdragElements.splice(PIEdragElements.length-1,PIEdragElements.length);
    	
    		PIEscene.remove(c1);PIEscene.remove(c2);PIEscene.remove(c3);PIEscene.remove(c4);
    		PIEscene.remove(c5);PIEscene.remove(c6);PIEscene.remove(c7);PIEscene.remove(c8);
    		PIEscene.remove(c9);PIEscene.remove(c10);
    		PIEscene.remove(note1);PIEscene.remove(note2);PIEscene.remove(note3);PIEscene.remove(note4);
    		PIEscene.remove(note5);PIEscene.remove(note6);PIEscene.remove(note7);PIEscene.remove(note8);
    		PIEscene.remove(note9);PIEscene.remove(note10);
    		addCoins();
			addNotes();
			addDragControls();
    	
    		win=0;
    		
    		PIEscene.remove(apprcube1);
    		PIEscene.remove(apprcube2);
    		PIEscene.remove(apprsphere);
    		
    		PIEscene.remove(star1);
    		PIEscene.remove(star2);
    		PIEscene.remove(star3);
    		
    		PIEscene.remove(winbox);
    	}
    
    	win=0;
    	steps = 0;
    	var x=1,y=2.7,z=0;
    	
    	c1.position.set(x+0.3-3,y+0.6,z);
		c2.position.set(x+0.6-3,y+0.6,z);
		c3.position.set(x+0.9-3,y+0.6,z);
		c4.position.set(x+1.2-3,y+0.6,z);
		c5.position.set(x+1.5-3,y+0.6,z);
	
		c6.position.set(x+0.3-3,y+0.6-0.7,z);
		c7.position.set(x+0.6-3,y+0.6-0.7,z);
		c8.position.set(x+0.9-3,y+0.6-0.7,z);
		c9.position.set(x+1.2-3,y+0.6-0.7,z);
		c10.position.set(x+1.5-3,y+0.6-0.7,z);
		
		note1.position.set(-1.3 ,1.6,0);
		note2.position.set(-1.2,1.6,0);
		note3.position.set(-1.1 ,1.6,0);
		note4.position.set(-1,1.6,0);
		note5.position.set(-0.9 ,1.6,0);
		
		note6.position.set(-0.8 ,1.6,0);
		note7.position.set(-0.7,1.6,0);
		note8.position.set(-0.6 ,1.6,0);
		note9.position.set(-0.5,1.6,0);
		note10.position.set(-0.4 ,1.6,0);
		
		PIEscene.remove(toggle[value]);
    
    	value = parseInt(Math.random() * 99+1);
	 
			 if(value==1)
			 	value=11;
			 else if(value==2)
			 	value=22;
			 else if(value==3)
			 	value=33;
			 else if(value==4)
			 	value=44;
			 else if(value==5)
			 	value=55;
			 else if(value==6)
			 	value=66;
			 else if(value==7)
			 	value=77;
			 else if(value==8)
			 	value=88;
			 else if(value==9)
			 	value=99;
			 else if(value==10)
			 	value=11;
			 
			 PIEscene.add(toggle[value]);
        
        
    }
    else if(Ans.length > 0)
    {
    	ans=1;
    	apprVal=0;
    	rp1=0;rp2=0;rp3=0;rp4=0;rp5=0;rp6=0;rp7=0;rp8=0;rp9=0;rp10=0;
    	np1=0;np2=0;np3=0;np4=0;np5=0;np6=0;np7=0;np8=0;np9=0;np10=0;
    	if(win==1)
    	{
    		while(PIEdragElements.length>0)
    			PIEdragElements.splice(PIEdragElements.length-1,PIEdragElements.length);
    	
    		PIEscene.remove(c1);PIEscene.remove(c2);PIEscene.remove(c3);PIEscene.remove(c4);
    		PIEscene.remove(c5);PIEscene.remove(c6);PIEscene.remove(c7);PIEscene.remove(c8);
    		PIEscene.remove(c9);PIEscene.remove(c10);
    		PIEscene.remove(note1);PIEscene.remove(note2);PIEscene.remove(note3);PIEscene.remove(note4);
    		PIEscene.remove(note5);PIEscene.remove(note6);PIEscene.remove(note7);PIEscene.remove(note8);
    		PIEscene.remove(note9);PIEscene.remove(note10);
    		addCoins();
			addNotes();
			addDragControls();
    	
    		win=0;
    		
    		PIEscene.remove(apprcube1);
    		PIEscene.remove(apprcube2);
    		PIEscene.remove(apprsphere);
    		
    		PIEscene.remove(star1);
    		PIEscene.remove(star2);
    		PIEscene.remove(star3);
    		
    		PIEscene.remove(winbox);
    	
    	}
    	var chnge = value;
    	
    	steps = 0;
    	var x=1,y=2.7,z=0;
    	
    	c1.position.set(x+0.3-3,y+0.6,z);
		c2.position.set(x+0.6-3,y+0.6,z);
		c3.position.set(x+0.9-3,y+0.6,z);
		c4.position.set(x+1.2-3,y+0.6,z);
		c5.position.set(x+1.5-3,y+0.6,z);
	
		c6.position.set(x+0.3-3,y+0.6-0.7,z);
		c7.position.set(x+0.6-3,y+0.6-0.7,z);
		c8.position.set(x+0.9-3,y+0.6-0.7,z);
		c9.position.set(x+1.2-3,y+0.6-0.7,z);
		c10.position.set(x+1.5-3,y+0.6-0.7,z);
		
		note1.position.set(-1.3 ,1.6,0);
		note2.position.set(-1.2,1.6,0);
		note3.position.set(-1.1 ,1.6,0);
		note4.position.set(-1,1.6,0);
		note5.position.set(-0.9 ,1.6,0);
		
		note6.position.set(-0.8 ,1.6,0);
		note7.position.set(-0.7,1.6,0);
		note8.position.set(-0.6 ,1.6,0);
		note9.position.set(-0.5,1.6,0);
		note10.position.set(-0.4 ,1.6,0);
    	
    	
    	if(value == 100)
    	{
    		note1.position.x = noteS1.position.x;
    		value -= 10;
    	}
    	if(value >= 90)
    	{
    		note2.position.x = noteS2.position.x;
    		value -= 10;
    	}
    	if(value >= 80)
    	{
    		note3.position.x = noteS3.position.x;
    		value -= 10;
    	}
    	if(value >= 70)
    	{
    		note4.position.x = noteS4.position.x;
    		value -= 10;
    	}
    	if(value >= 60)
    	{
    		note5.position.x = noteS5.position.x;
    		value -= 10;
    	}
    	if(value >= 50)
    	{
    		note6.position.x = noteS6.position.x;
    		value -= 10;
    	}
    	if(value >= 40)
    	{
    		note7.position.x = noteS7.position.x;
    		value -= 10;
    	}
    	if(value >= 30)
    	{
    		note8.position.x = noteS8.position.x;
    		value -= 10;
    	}
    	if(value >= 20)
    	{
    		note9.position.x = noteS9.position.x;
    		value -= 10;
    	}
    	if(value >= 10)
    	{
    		value = value-10;
    		note10.position.x = noteS10.position.x;
    	}
    
    	if(value==1)
    		c5.position.x = cs1.position.x;
    	else if(value==2)
    		c5.position.x = cs1.position.x,c4.position.x = cs2.position.x;
    	else if(value==3)
    		c5.position.x = cs1.position.x,c4.position.x = cs2.position.x,c3.position.x = cs3.position.x;
    	else if(value==4)
    		c5.position.x = cs1.position.x,c4.position.x = cs2.position.x,c3.position.x = cs3.position.x,c2.position.x = cs4.position.x;
    	else if(value>=5)
    	{
    		c5.position.x = cs1.position.x;
    		c4.position.x = cs2.position.x;
    		c3.position.x = cs3.position.x;
    		c2.position.x = cs4.position.x;
    		c1.position.x = cs5.position.x;
    		
    		if(value >=6)
    		{
    			c10.position.x = cs6.position.x;
    			if(value >= 7)
    			{
    				c9.position.x = cs7.position.x;
    				if(value >= 8)
    				{
    					c8.position.x = cs8.position.x;
    					if(value>=9)
    					{
    						c7.position.x = cs9.position.x;
    					}
    				}
    			}	
    		}
    		
    	}
    	else ;
    	
    	value = chnge;
    		
    		
    	
    }
    else if(Steps.length > 0)
    {
    	ans=0;
    	apprVal=0;
    	rp1=0;rp2=0;rp3=0;rp4=0;rp5=0;rp6=0;rp7=0;rp8=0;rp9=0;rp10=0;
    	np1=0;np2=0;np3=0;np4=0;np5=0;np6=0;np7=0;np8=0;np9=0;np10=0;
    	if(win==1)
    	{
    		while(PIEdragElements.length>0)
    			PIEdragElements.splice(PIEdragElements.length-1,PIEdragElements.length);
    	
    		PIEscene.remove(c1);PIEscene.remove(c2);PIEscene.remove(c3);PIEscene.remove(c4);
    		PIEscene.remove(c5);PIEscene.remove(c6);PIEscene.remove(c7);PIEscene.remove(c8);
    		PIEscene.remove(c9);PIEscene.remove(c10);
    		PIEscene.remove(note1);PIEscene.remove(note2);PIEscene.remove(note3);PIEscene.remove(note4);
    		PIEscene.remove(note5);PIEscene.remove(note6);PIEscene.remove(note7);PIEscene.remove(note9);
    		PIEscene.remove(note9);PIEscene.remove(note10);
    		addCoins();
			addNotes();
			addDragControls();
    	
    		win=0;
    		
    		PIEscene.remove(apprcube1);
    		PIEscene.remove(apprcube2);
    		PIEscene.remove(apprsphere);
    		
    		PIEscene.remove(star1);
    		PIEscene.remove(star2);
    		PIEscene.remove(star3);
    		
    		PIEscene.remove(winbox);
    	
    	}
    	var x=1,y=3.3,z=0;
    	win=0;apprVal=0;
    	c1.position.set(x+0.3-3,y,z);
		c2.position.set(x+0.6-3,y,z);
		c3.position.set(x+0.9-3,y,z);
		c4.position.set(x+1.2-3,y,z);
		c5.position.set(x+1.5-3,y,z);
	
		c6.position.set(x+0.3-3,y-0.7,z);
		c7.position.set(x+0.6-3,y-0.7,z);
		c8.position.set(x+0.9-3,y-0.7,z);
		c9.position.set(x+1.2-3,y-0.7,z);
		c10.position.set(x+1.5-3,y-0.7,z);
		
		note1.position.set(-1.3 ,1.6,0);
		note2.position.set(-1.2,1.6,0);
		note3.position.set(-1.1 ,1.6,0);
		note4.position.set(-1,1.6,0);
		note5.position.set(-0.9 ,1.6,0);
		
		note6.position.set(-0.8 ,1.6,0);
		note7.position.set(-0.7,1.6,0);
		note8.position.set(-0.6 ,1.6,0);
		note9.position.set(-0.5,1.6,0);
		note10.position.set(-0.4 ,1.6,0);
    
        steps=1;
    	coin = 1;
    		coin10 = 10;  
    }
    else if(refresh.length>0 || reset==1)
    {
    	ans=0;
    	apprVal=0;
    	reset=0;
    	rp1=0;rp2=0;rp3=0;rp4=0;rp5=0;rp6=0;rp7=0;rp8=0;rp9=0;rp10=0;
    	np1=0;np2=0;np3=0;np4=0;np5=0;np6=0;np7=0;np8=0;np9=0;np10=0;
    	if(win==1)
    	{
    		while(PIEdragElements.length>0)
    			PIEdragElements.splice(PIEdragElements.length-1,PIEdragElements.length);
    	
    		PIEscene.remove(c1);PIEscene.remove(c2);PIEscene.remove(c3);PIEscene.remove(c4);
    		PIEscene.remove(c5);PIEscene.remove(c6);PIEscene.remove(c7);PIEscene.remove(c8);
    		PIEscene.remove(c9);PIEscene.remove(c10);
    		PIEscene.remove(note1);PIEscene.remove(note2);PIEscene.remove(note3);PIEscene.remove(note4);
    		PIEscene.remove(note5);PIEscene.remove(note6);PIEscene.remove(note7);PIEscene.remove(note8);
    		PIEscene.remove(note9);PIEscene.remove(note10);
    		addCoins();
			addNotes();
			addDragControls();
    	
    		win=0;
    		
    		PIEscene.remove(apprcube1);
    		PIEscene.remove(apprcube2);
    		PIEscene.remove(apprsphere);
    		
    		PIEscene.remove(star1);
    		PIEscene.remove(star2);
    		PIEscene.remove(star3);
    		
    		PIEscene.remove(winbox);
    	}
	   	steps = 0;
    	var x=1,y=3.3,z=0;
    	
    	c1.position.set(x+0.3-3,y,z);
		c2.position.set(x+0.6-3,y,z);
		c3.position.set(x+0.9-3,y,z);
		c4.position.set(x+1.2-3,y,z);
		c5.position.set(x+1.5-3,y,z);
	
		c6.position.set(x+0.3-3,y-0.7,z);
		c7.position.set(x+0.6-3,y-0.7,z);
		c8.position.set(x+0.9-3,y-0.7,z);
		c9.position.set(x+1.2-3,y-0.7,z);
		c10.position.set(x+1.5-3,y-0.7,z);
		
		note1.position.set(-1.3 ,1.6,0);
		note2.position.set(-1.2,1.6,0);
		note3.position.set(-1.1 ,1.6,0);
		note4.position.set(-1,1.6,0);
		note5.position.set(-0.9 ,1.6,0);
		
		note6.position.set(-0.8 ,1.6,0);
		note7.position.set(-0.7,1.6,0);
		note8.position.set(-0.6 ,1.6,0);
		note9.position.set(-0.5,1.6,0);
		note10.position.set(-0.4 ,1.6,0);
    }
}
function addStars()
{
	
	

}
function c1Drag(element,newpos)
{
		
		var myboxX = newpos.x;
		var myboxY = newpos.y;
		var myboxZ = newpos.z;
	
		if(!(win+steps+ans))
		{
			c1.position.set(myboxX,myboxY,myboxZ);
		
			if(myboxX>=0.63)
				rp1=1;
			if(myboxX<0.13)
				rp1=0;
		}
}
function c2Drag(element,newpos)
{
		
		var myboxX = newpos.x;
		var myboxY = newpos.y;
		var myboxZ = newpos.z;
	
		if(!(win+steps+ans))
		{
			c2.position.set(myboxX,myboxY,myboxZ);
		
			if(myboxX>=0.63)
				rp2=1;
			if(myboxX<0.13)
				rp2=0;
		}	
}
function c3Drag(element,newpos)
{
		
		var myboxX = newpos.x;
		var myboxY = newpos.y;
		var myboxZ = newpos.z;
	
		if(!(win+steps+ans))
		{
			c3.position.set(myboxX,myboxY,myboxZ);
		
			if(myboxX>=0.63)
				rp3=1;
			if(myboxX<0.13)
				rp3=0;	
		}
}
function c4Drag(element,newpos)
{
		
		var myboxX = newpos.x;
		var myboxY = newpos.y;
		var myboxZ = newpos.z;
	
		if(!(win+steps+ans))
		{
			c4.position.set(myboxX,myboxY,myboxZ);
		
			if(myboxX>=0.63)
				rp4=1;
			if(myboxX<0.13)
				rp4=0;
		}
}
function c5Drag(element,newpos)
{
		
		var myboxX = newpos.x;
		var myboxY = newpos.y;
		var myboxZ = newpos.z;
	
		if(!(win+steps+ans))
		{
			c5.position.set(myboxX,myboxY,myboxZ);
		
			if(myboxX>=0.63)
				rp5=1;
			if(myboxX<0.13)
				rp5=0;
		}	
}
function c6Drag(element,newpos)
{
		
		var myboxX = newpos.x;
		var myboxY = newpos.y;
		var myboxZ = newpos.z;
	
		if(!(win+steps+ans))
		{
			c6.position.set(myboxX,myboxY,myboxZ);
		
			if(myboxX>=0.63)
				rp6=1;
			if(myboxX<0.13)
				rp6=0;
		}	
}
function c7Drag(element,newpos)
{
		
		var myboxX = newpos.x;
		var myboxY = newpos.y;
		var myboxZ = newpos.z;
	
		if(!(win+steps+ans))
		{
			c7.position.set(myboxX,myboxY,myboxZ);
		
			if(myboxX>=0.63)
				rp7=1;
			if(myboxX<0.13)
				rp7=0;
		}
}
function c8Drag(element,newpos)
{
		
		var myboxX = newpos.x;
		var myboxY = newpos.y;
		var myboxZ = newpos.z;
	
		if(!(win+steps+ans))
		{
			c8.position.set(myboxX,myboxY,myboxZ);
		
			if(myboxX>=0.63)
				rp8=1;
			if(myboxX<0.13)
				rp8=0;	
		}
}
function c9Drag(element,newpos)
{
		
		var myboxX = newpos.x;
		var myboxY = newpos.y;
		var myboxZ = newpos.z;
	
		if(!(win+steps+ans))
		{
			c9.position.set(myboxX,myboxY,myboxZ);
		
			if(myboxX>=0.63)
				rp9=1;
			if(myboxX<0.13)
				rp9=0;
		}
}
function c10Drag(element,newpos)
{
		
		var myboxX = newpos.x;
		var myboxY = newpos.y;
		var myboxZ = newpos.z;
	
		if(!(win+steps+ans))
		{
			c10.position.set(myboxX,myboxY,myboxZ);
		
			if(myboxX>=0.63)
				rp10=1;
			if(myboxX<0.13)
				rp10=0;
		}
}
function note1Drag(element,newpos)
{
	var myboxX = newpos.x;
	var myboxY = newpos.y;
	var myboxZ = newpos.z;

	if(!(win+steps+ans))
	{
		note1.position.set(myboxX,myboxY,myboxZ);
	
		if(myboxX>=1)
			np1=10;
		if(myboxX <-0.23)
			np1=0;
	}

}
function note2Drag(element,newpos)
{
	var myboxX = newpos.x;
	var myboxY = newpos.y;
	var myboxZ = newpos.z;

	if(!(win+steps+ans))
	{
		note2.position.set(myboxX,myboxY,myboxZ);
	
		if(myboxX>=1)
			np2=10;
		if(myboxX <-0.23)
			np2=0;
	}

}
function note3Drag(element,newpos)
{
	var myboxX = newpos.x;
	var myboxY = newpos.y;
	var myboxZ = newpos.z;

	if(!(win+steps+ans))
	{
		note3.position.set(myboxX,myboxY,myboxZ);
	
		if(myboxX>=1)
			np3=10;
		if(myboxX <-0.23)
			np3=0;
	}

}
function note4Drag(element,newpos)
{
	var myboxX = newpos.x;
	var myboxY = newpos.y;
	var myboxZ = newpos.z;

	if(!(win+steps+ans))
	{
		note4.position.set(myboxX,myboxY,myboxZ);
	
		if(myboxX>=1)
			np4=10;
		if(myboxX <-0.23)
			np4=0;
	}

}
function note5Drag(element,newpos)
{
	var myboxX = newpos.x;
	var myboxY = newpos.y;
	var myboxZ = newpos.z;

	if(!(win+steps+ans))
	{
		note5.position.set(myboxX,myboxY,myboxZ);
	
		if(myboxX>=1)
			np5=10;
		if(myboxX <-0.23)
			np5=0;
	}

}

function note6Drag(element,newpos)
{
	var myboxX = newpos.x;
	var myboxY = newpos.y;
	var myboxZ = newpos.z;

	if(!(win+steps+ans))
	{
		note6.position.set(myboxX,myboxY,myboxZ);
	
		if(myboxX>=1)
			np6=10;
		if(myboxX <-0.23)
			np6=0;
	}

}
function note7Drag(element,newpos)
{
	var myboxX = newpos.x;
	var myboxY = newpos.y;
	var myboxZ = newpos.z;

	if(!(win+steps+ans))
	{
		note7.position.set(myboxX,myboxY,myboxZ);
	
		if(myboxX>=1)
			np7=10;
		if(myboxX <-0.23)
			np7=0;
	}

}
function note8Drag(element,newpos)
{
	var myboxX = newpos.x;
	var myboxY = newpos.y;
	var myboxZ = newpos.z;

	if(!(win+steps+ans))
	{
		note8.position.set(myboxX,myboxY,myboxZ);
	
		if(myboxX>=1)
			np8=10;
		if(myboxX <-0.23)
			np8=0;
	}

}
function note9Drag(element,newpos)
{
	var myboxX = newpos.x;
	var myboxY = newpos.y;
	var myboxZ = newpos.z;

	if(!(win+steps+ans))
	{
		note9.position.set(myboxX,myboxY,myboxZ);
	
		if(myboxX>=1)
			np9=10;
		if(myboxX <-0.23)
			np9=0;
	}

}
function note10Drag(element,newpos)
{
	var myboxX = newpos.x;
	var myboxY = newpos.y;
	var myboxZ = newpos.z;

	if(!(win+steps+ans))
	{
		note10.position.set(myboxX,myboxY,myboxZ);
	
		if(myboxX>=1)
			np10=10;
		if(myboxX <-0.23)
			np10=0;
	}

}
function addDragControls()
{
	
	PIEdragElement(c1);
	PIEsetDrag(c1, c1Drag);
	
	PIEdragElement(c2);
	PIEsetDrag(c2, c2Drag);
	
	PIEdragElement(c3);
	PIEsetDrag(c3, c3Drag);
	
	PIEdragElement(c4);
	PIEsetDrag(c4, c4Drag);
	
	PIEdragElement(c5);
	PIEsetDrag(c5, c5Drag);
	
	PIEdragElement(c6);
	PIEsetDrag(c6, c6Drag);
	
	PIEdragElement(c7);
	PIEsetDrag(c7, c7Drag);
	
	PIEdragElement(c8);
	PIEsetDrag(c8, c8Drag);
	
	PIEdragElement(c9);
	PIEsetDrag(c9, c9Drag);
	
	PIEdragElement(c10);
	PIEsetDrag(c10, c10Drag);
	
	PIEdragElement(note1);
	PIEsetDrag(note1, note1Drag);
	
	PIEdragElement(note2);
	PIEsetDrag(note2, note2Drag);
	
	PIEdragElement(note3);
	PIEsetDrag(note3, note3Drag);
	
	PIEdragElement(note4);
	PIEsetDrag(note4, note4Drag);
	
	PIEdragElement(note5);
	PIEsetDrag(note5, note5Drag);
	
	PIEdragElement(note6);
	PIEsetDrag(note6, note6Drag);
	
	PIEdragElement(note7);
	PIEsetDrag(note7, note7Drag);
	
	PIEdragElement(note8);
	PIEsetDrag(note8, note8Drag);
	
	PIEdragElement(note9);
	PIEsetDrag(note9, note9Drag);
	
	PIEdragElement(note10);
	PIEsetDrag(note10, note10Drag);
	
}
function addAppreciation()
{
	var texture = THREE.ImageUtils.loadTexture( 'congrats.jpg');
		texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
		texture.repeat.set(1, 1);
	
		var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
		var geometry = new THREE.PlaneGeometry(1.2, 1);
		winbox = new THREE.Mesh(geometry,material);
		winbox.position.set(2,1.6,0.01);
	
		var texture = THREE.ImageUtils.loadTexture( 'dice1.png');
		texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
		//texture.repeat.set( 1, 1);

		var geom = new THREE.BoxGeometry(0.2,0.2,0.2,0.5);
		var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
		apprcube1 = new THREE.Mesh(geom,material);
		apprcube1.position.set(1.6,1.4,0.02);
		
		apprcube2 = new THREE.Mesh(geom,material);
		apprcube2.position.set(2.4,1.4,0.02);
	
		var geometry = new THREE.RingGeometry(0.01,0.6,5, 4, 0, Math.PI*4);
		var material = new THREE.MeshBasicMaterial({color: 0xFFD700});
		star1 = new THREE.Mesh(geometry, material);
		star1.position.set(1,1.6,0.02);
		
		star2 = new THREE.Mesh(geometry, material);
		star2.position.set(1.9,2.4,0.02);
		
		star3 = new THREE.Mesh(geometry, material);
		star3.position.set(2.9,1.6,0.02);
		
		var geometry = new THREE.SphereGeometry(0.14,40,40,0,Math.PI*2,0,Math.PI*2);
		var texture = THREE.ImageUtils.loadTexture( 'world.jpg');
	
	
		apprsphere = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial( { map : texture  }));
		apprsphere.position.set(2,1.4,0.02);
		
		star1.rotation.z = 0.3;
		star2.rotation.z = 0.3;
		star3.rotation.z = 0.3;

}	
function animate()
{
	requestAnimationFrame(animate);
	render();
}
function render()
{

	//verticalMirror.renderWithMirror(verticalMirror);
	PIEsetExperimentTitle("Learn Counting with Money (11-99)");
	PIErenderer.render(PIEscene,PIEcamera);
	
	if(started==1)
	{
		started=0;
		loadText();
	}
	
	var sum = rp1+rp2+rp3+rp4+rp5+rp6+rp7+rp8+rp9+rp10+np1+np2+np3+np4+np5+np6+np7+np8+np9+np10;
	if(sum == value && win==0)
	{
		win = 1;
		PIEaddElement(winbox);
		PIEaddElement(apprcube1);
		PIEaddElement(apprcube2);
		
		PIEaddElement(star1);
		PIEaddElement(star2);
		PIEaddElement(star3);
		
		PIEaddElement(apprsphere);
	
	}
	if(win==1 && sum>0 )
	{
		if(apprVal<50)
		{
	
			if(rp1==0)
				c1.rotation.y += 0.3;
			if(rp2==0)
				c2.rotation.y += 0.3;
			if(rp3==0)
			c3.rotation.y += 0.3;
			if(rp4==0)
			c4.rotation.y += 0.3;
		
			if(rp5==0)
			c5.rotation.y += 0.3;
			if(rp6==0)
			c6.rotation.y += 0.3;
			if(rp7==0)
			c7.rotation.y += 0.3;
			if(rp8==0)
			c8.rotation.y += 0.3;
			if(rp9==0)
			c9.rotation.y += 0.3;
			if(rp10==0)
			c10.rotation.y += 0.3;
		
			if(np1==0)
			note1.rotation.y += 0.3;
			if(np2==0)
			note2.rotation.y += 0.3;
			if(np3==0)
			note3.rotation.y += 0.3;
			if(np4==0)
			note4.rotation.y += 0.3;
			if(np5==0)
			note5.rotation.y += 0.3;
			
			if(np6==0)
			note6.rotation.y += 0.3;
			if(np7==0)
			note7.rotation.y += 0.3;
			if(np8==0)
			note8.rotation.y += 0.3;
			if(np9==0)
			note9.rotation.y += 0.3;
			if(np10==0)
			note10.rotation.y += 0.3;

			apprsphere.rotation.x -= 0.1;
			apprsphere.rotation.y += 0.1;
			apprsphere.rotation.z -= 0.1;
		
			apprcube1.rotation.x -= 0.1;
			apprcube1.rotation.y += 0.1;
		
			apprcube2.rotation.x += 0.1;
			apprcube2.rotation.y -= 0.1;
		
			apprVal+= 1;
		}
		else
		{
			apprVal = 0;
			chEx=1;
			PIEmouseDownd();
		}
		
	}
		
	
	if(steps == 1)
	{
		
		if((coin10) <= value)
		{
		
		
			if(coin10 == 10 && coin10 <=value)
			{
				if(note10.position.x < noteS10.position.x)
					note10.position.x += 0.05;
				else
				{
					note10.position.x = noteS10.position.x;
					coin = 1; 
						coin10=20;
					
				}
			}
			else if(coin10 ==20 && (coin10) <=value)
			{
				if(note9.position.x < noteS9.position.x )
					note9.position.x += 0.05;
				else
				{
						coin10 = 30;
					coin = 1;
					note9.position.x = noteS9.position.x;
					
				}
			}
			else if(coin10 ==30 && (coin10) <=value)
			{
				if(note8.position.x < noteS8.position.x )
					note8.position.x += 0.05;
				else
				{
						coin10 = 40;
					coin = 1;
					note8.position.x = noteS8.position.x;
					
				}
			}
			else if(coin10 ==40 && (coin10) <=value)
			{
				if(note7.position.x < noteS7.position.x )
					note7.position.x += 0.05;
				else
				{
						coin10 = 50;
					coin = 1;
					note7.position.x = noteS7.position.x;
					
				}
			}
			else if(coin10 ==50 && (coin10) <=value)
			{
				if(note6.position.x < noteS6.position.x )
					note6.position.x += 0.05;
				else
				{
						coin10 = 60;
					coin = 1;
					note6.position.x = noteS6.position.x;
					
				}
			}
			else if(coin10 ==60 && (coin10) <=value)
			{
				if(note5.position.x < noteS5.position.x )
					note5.position.x += 0.05;
				else
				{
						coin10 = 70;
					coin = 1;
					note5.position.x = noteS5.position.x;
					
				}
			}
			else if(coin10 ==70 && (coin10) <=value)
			{
				if(note4.position.x < noteS4.position.x )
					note4.position.x += 0.05;
				else
				{
						coin10 = 80;
					coin = 1;
					note4.position.x = noteS4.position.x;
					
				}
			}
			else if(coin10 ==80 && (coin10) <=value)
			{
				if(note3.position.x < noteS3.position.x )
					note3.position.x += 0.05;
				else
				{
						coin10 = 90;
					coin = 1;
					note3.position.x = noteS3.position.x;
					
				}
			}
			else if(coin10 ==90 && (coin10) <=value)
			{
				if(note2.position.x < noteS2.position.x )
					note2.position.x += 0.05;
				else
				{
						coin10 = 100;
					coin = 1;
					note2.position.x = noteS2.position.x;
					
				}
			}
			else if(coin10 ==100 && (coin10) <=value)
			{
				if(note1.position.x < noteS1.position.x )
					note1.position.x += 0.05;
				else
				{
					coin10 = 110;
					coin = 1;
					note1.position.x = noteS1.position.x;
					
				}
			}
		}
		else
		{
			if(coin == 1 && (coin) <=value%10 )
			{
				if(c5.position.x < cs1.position.x )
					c5.position.x += 0.05;
				else
				{
					c5.position.x = cs1.position.x;
					++coin;
				}
			}
			else if(coin ==2  && (coin) <= value%10 )
			{
				if(c4.position.x < cs2.position.x )
					c4.position.x += 0.05;
				else
				{
					c4.position.x = cs2.position.x;
					++coin;
				}
			}
			else if(coin ==3  && (coin) <= value%10)
			{
				if(c3.position.x < cs3.position.x )
					c3.position.x += 0.05;
				else
				{
					c3.position.x = cs3.position.x;
					++coin;
				}
			}
			else if(coin ==4  && (coin) <= value%10 )
			{
				if(c2.position.x < cs4.position.x )
					c2.position.x += 0.05;
				else
				{
					c2.position.x = cs4.position.x;
					++coin;
				}
			}
			else if(coin ==5  && (coin) <= value%10 )
			{
				if(c1.position.x < cs5.position.x )
					c1.position.x += 0.05;
				else
				{
					c1.position.x = cs5.position.x;
					++coin;
				}
			}
			else if(coin ==6  && (coin) <= value%10 )
			{
				if(c10.position.x < cs6.position.x )
					c10.position.x += 0.05;
				else
				{
					c10.position.x = cs6.position.x;
					++coin;
				}
			}
			else if(coin ==7  && (coin) <= value%10 )
			{
				if(c9.position.x < cs7.position.x )
					c9.position.x += 0.05;
				else
				{
					c9.position.x = cs7.position.x;
					++coin;
				}
			}
			else if(coin ==8  && (coin) <= value%10 )
			{
				if(c8.position.x < cs8.position.x )
					c8.position.x += 0.05;
				else
				{
					c8.position.x = cs8.position.x;
					++coin;
				}
			}
			else if(coin == 9  && (coin) <= value%10)
			{
				if(c7.position.x < cs9.position.x )
					c7.position.x += 0.05;
				else
				{
					c7.position.x = cs9.position.x;
					++coin;
				}
			}
		}
		if((coin10/10) > (value/10) && (coin > value%10))
		{
			steps = 0;
			ans=1;
		}
	
	}
	
}
function addLine()
{

	var material = new THREE.MeshBasicMaterial({color : 0x800000});
	var geometry = new THREE.CylinderGeometry(0.02, 0.02, 3, 0.9 );
	var holder = new THREE.Mesh(geometry,material);
	PIEaddElement(holder);
	
	holder.position.set(0.4,1.5+0.55,0);
}
function loadExperimentElements()
{
    PIEsetDeveloperName("Pole Sumanth");
    PIEhideControlElement();
    
    /* initialise help and info content */
    initialiseHelp();
   initialiseInfo();
    
    //initialising the scene
    initialiseScene();
	//initialising other variables
	initialiseOtherVariables();    

     PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
     
     addCoinShades();
     addNoteShades();
     addSun();
     addPlanets();
     addLine();
     addCoins();
     addNotes();
     addDragControls();
     addAppreciation();
      PIErenderer.domElement.addEventListener("mousedown",PIEmouseDownd,false);
      PIErenderer.setClearColor(0xffffff);
      
      var texture,geometry;
	texture = THREE.ImageUtils.loadTexture( 'wall.jpg');
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	//texture.repeat.set( 0, 1);
	var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
	geometry = new THREE.PlaneGeometry( 8.4,4 );
	
	var wall = new THREE.Mesh(geometry,material);
	PIEaddElement(wall);
	wall.position.set(2,1.85,-0.1);
     
	animate();
     
     //addTable();
}
