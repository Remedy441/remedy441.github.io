var c1,c2,c3,c4,c5,c6,c7,c8,c9,c10;
var cs1,cs2,cs3,cs4,cs5,cs6,cs7,cs8,cs9,cs10;
var note1,note2;
var noteS1,noteS2,note1,note2;
var bt1=[],bt2=[],bt3=[],bt4=[],bt5=[];
var started=0;
var value=1;
var numBox;
var steps=0,ans=0;
var coin = 0,coin10=0;
var rp1=0,rp2=0,rp3=0,rp4=0,rp5=0,rp6=0,rp7=0,rp8=0,rp9=0,rp10=0,np1=0,np2=0;

var alpha = 10;
var txt,txtDsplyd=0;
var box1,box2,box3,box4,box5;
var win = 0,winBox;
var text2;
var apprcube1,apprcube2,apprsphere;
var reset=0;
var star1,star2,star3;
var apprVal=0,chng=0;
var toggle,toggle11,toggle12,toggle13,toggle14,toggle15,toggle16,toggle17,toggle18,toggle19;

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
    helpContent = helpContent + "<p style = 'color: blue'>You can learn till Number 20.</p>";
    helpContent = helpContent + "<p style = 'color: blue'>All controls are Mousedown controls.</p>";
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
}

//Resetting all values to default values
function resetExperiment()
{
	
  reset = 1;
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
	
	note1.position.set(-1.3 ,1.6,0);
	note2.position.set(-0.8,1.6,0);

}
function addNoteShades()
{
	
	var geometry = new THREE.PlaneGeometry( 1.2,0.6 );
	var material = new THREE.MeshBasicMaterial( { color : 0xffffff });
	noteS1 = new THREE.Mesh(geometry,material);
	PIEaddElement(noteS1);
	noteS1.position.set(1.2,1.6,-0.2);
	
	noteS2 = new THREE.Mesh(geometry,material);
	PIEaddElement(noteS2);
	noteS2.position.set(2.5,1.6,-0.2);
}
function addSun()
{
	
	
}


function addPlanets()
{
        value = parseInt(Math.random() * 19+1);
        
        if(value==1) value=11;
        else if(value==2) value=12;
        else if(value==3) value=13;
        else if(value==4) value=14;
        else if(value==5) value=15;
        else if(value==6) value=16;
        else if(value==7) value=17;
        else if(value==8) value=18;
        else if(value==9) value=19;
        else if(value==10) value=11;
        
	var loader1 = new THREE.FontLoader();
				loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


  	 			var southGeometry = new THREE.TextGeometry( "11", { font: font, size: 1.5, height: .1, curveSegments: 7});
  	 			var southMaterial = new THREE.MeshBasicMaterial( { color:'cyan' });

	  				toggle11 = new THREE.Mesh(southGeometry ,southMaterial );
					toggle11.position.set(2.5,1.3, 1) ;
				
					southGeometry = new THREE.TextGeometry("12", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle12 = new THREE.Mesh(southGeometry ,southMaterial );
					toggle12.position.set(2.5,1.3, 1) ;
				
					southGeometry = new THREE.TextGeometry("13", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle13 = new THREE.Mesh(southGeometry ,southMaterial );
					toggle13.position.set(2.5,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry("14", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle14 = new THREE.Mesh(southGeometry ,southMaterial );
					toggle14.position.set(2.5,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry("15", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle15 = new THREE.Mesh(southGeometry ,southMaterial );
					toggle15.position.set(2.5,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry("16", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle16 = new THREE.Mesh(southGeometry ,southMaterial );
					toggle16.position.set(2.5,1.3, 1) ;
					
				    southGeometry = new THREE.TextGeometry("17", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle17 = new THREE.Mesh(southGeometry ,southMaterial );
					toggle17.position.set(2.5,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry("18", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle18 = new THREE.Mesh(southGeometry ,southMaterial );
					toggle18.position.set(2.5,1.3, 1) ;
					
					southGeometry = new THREE.TextGeometry("19", { font: font, size: 1.5, height: .1, curveSegments: 7});
	  				toggle19 = new THREE.Mesh(southGeometry ,southMaterial );
					toggle19.position.set(2.5,1.3, 1) ;
				
				started=1;
				
  				});
	
	
	
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
    
    if(Next.length > 0 || chng==1)
    {
    
		  steps = 0;
		  ans=0;
    	chng=0;apprVal=0;
    	rp1=0;rp2=0;rp3=0;rp4=0;rp5=0;rp6=0;rp7=0;rp8=0;rp9=0;rp10=0;np1=0;np2=0;
    	
    	if(win==1)
    	{
    		while(PIEdragElements.length>0)
    			PIEdragElements.splice(PIEdragElements.length-1,PIEdragElements.length);
    	
    		win=0;
    		PIEscene.remove(c1);PIEscene.remove(c2);PIEscene.remove(c3);PIEscene.remove(c4);
    		PIEscene.remove(c5);PIEscene.remove(c6);PIEscene.remove(c7);PIEscene.remove(c8);
    		PIEscene.remove(c9);PIEscene.remove(c10);
    		PIEscene.remove(note1);
    		PIEscene.remove(note2);
    		addCoins();
			addNotes();
			addDragControls();
    		
    		PIEscene.remove(apprcube1);
    		PIEscene.remove(apprcube2);
    		PIEscene.remove(apprsphere);
    		
    		PIEscene.remove(star1);
    		PIEscene.remove(star2);
    		PIEscene.remove(star3);
    		
    		PIEscene.remove(winbox);
    		
    	}
    	
    
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
		note2.position.set(-0.8,1.6,0);
    
    	 PIEscene.remove(toggle11);PIEscene.remove(toggle12);PIEscene.remove(toggle13);PIEscene.remove(toggle14);
			 PIEscene.remove(toggle15);PIEscene.remove(toggle16);PIEscene.remove(toggle17);PIEscene.remove(toggle18);
			 PIEscene.remove(toggle19);
       
        value = parseInt(Math.random() * 19+1);
        
        if(value==1) value=11;
        else if(value==2) value=12;
        else if(value==3) value=13;
        else if(value==4) value=14;
        else if(value==5) value=15;
        else if(value==6) value=16;
        else if(value==7) value=17;
        else if(value==8) value=18;
        else if(value==9) value=19;
        else if(value==10) value=11;
        
        switch(value)
    	{
			case 11: PIEscene.add(toggle11);break;
			case 12: PIEscene.add(toggle12);break;
			case 13: PIEscene.add(toggle13);break;
			case 14: PIEscene.add(toggle14);break;
			case 15: PIEscene.add(toggle15);break;
			case 16: PIEscene.add(toggle16);break;
			case 17: PIEscene.add(toggle17);break;
			case 18: PIEscene.add(toggle18);break;
			case 19: PIEscene.add(toggle19);break;
		}

	
        
        
    }
    else if(Ans.length > 0)
    {
    	rp1=0;rp2=0;rp3=0;rp4=0;rp5=0;rp6=0;rp7=0;rp8=0;rp9=0;rp10=0;np1=0;np2=0;
    	ans=1;
    	if(win==1)
    	{
    		while(PIEdragElements.length>0)
    			PIEdragElements.splice(PIEdragElements.length-1,PIEdragElements.length);
    	
    		PIEscene.remove(c1);PIEscene.remove(c2);PIEscene.remove(c3);PIEscene.remove(c4);
    		PIEscene.remove(c5);PIEscene.remove(c6);PIEscene.remove(c7);PIEscene.remove(c8);
    		PIEscene.remove(c9);PIEscene.remove(c10);
    		PIEscene.remove(note1);
    		PIEscene.remove(note2);
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
		note2.position.set(-0.8,1.6,0);
    	
    	
    	if(value == 20)
    	{
    		note1.position.x = noteS1.position.x,note2.position.x = noteS2.position.x;
    		value = 0;
    	}
    	else if(value >= 10)
    	{
    		value = value-10;
    		note2.position.x = noteS1.position.x;
    	}
    	else ;
    
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
    	rp1=0;rp2=0;rp3=0;rp4=0;rp5=0;rp6=0;rp7=0;rp8=0;rp9=0;rp10=0;np1=0;np2=0;
    	if(win==1)
    	{
    		while(PIEdragElements.length>0)
    			PIEdragElements.splice(PIEdragElements.length-1,PIEdragElements.length);
    	
    		PIEscene.remove(c1);PIEscene.remove(c2);PIEscene.remove(c3);PIEscene.remove(c4);
    		PIEscene.remove(c5);PIEscene.remove(c6);PIEscene.remove(c7);PIEscene.remove(c8);
    		PIEscene.remove(c9);PIEscene.remove(c10);
    		PIEscene.remove(note1);
    		PIEscene.remove(note2);
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
		note2.position.set(-0.8,1.6,0);
    
        steps=1;
    	coin = 1;  
    	coin10 = 0;  
    }
    else if(refresh.length>0 || reset==1)
    {
    	reset=0;
    	ans=0;
    	rp1=0;rp2=0;rp3=0;rp4=0;rp5=0;rp6=0;rp7=0;rp8=0;rp9=0;rp10=0;np1=0;np2=0;
    	if(win==1)
    	{
    		while(PIEdragElements.length>0)
    			PIEdragElements.splice(PIEdragElements.length-1,PIEdragElements.length);
    	
    		PIEscene.remove(c1);PIEscene.remove(c2);PIEscene.remove(c3);PIEscene.remove(c4);
    		PIEscene.remove(c5);PIEscene.remove(c6);PIEscene.remove(c7);PIEscene.remove(c8);
    		PIEscene.remove(c9);PIEscene.remove(c10);
    		PIEscene.remove(note1);
    		PIEscene.remove(note2);
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
		note2.position.set(-0.8,1.6,0);
    }
    else ;
}
function addStars()
{
	

}
function c1Drag(element,newpos)
{
		
		var myboxX = newpos.x;
		var myboxY = newpos.y;
		var myboxZ = newpos.z;
	
		if(!(ans+win+steps))
		{
			c1.position.set(myboxX,myboxY,myboxZ);
		
			if(myboxX>=0.57)
				rp1=1;
			if(myboxX<0.1)
				rp1=0;	
		}
}
function c2Drag(element,newpos)
{
		
		var myboxX = newpos.x;
		var myboxY = newpos.y;
		var myboxZ = newpos.z;
	
		if(!(ans+win+steps))
		{
			c2.position.set(myboxX,myboxY,myboxZ);
		
			if(myboxX>=0.57)
				rp2=1;
			if(myboxX<0.1)
				rp2=0;	
		}
}
function c3Drag(element,newpos)
{
		
		var myboxX = newpos.x;
		var myboxY = newpos.y;
		var myboxZ = newpos.z;
	
		if(!(ans+win+steps))
		{
			c3.position.set(myboxX,myboxY,myboxZ);
		
			if(myboxX>=0.57)
				rp3=1;
			if(myboxX<0.1)
				rp3=0;	
		}
}
function c4Drag(element,newpos)
{
		
		var myboxX = newpos.x;
		var myboxY = newpos.y;
		var myboxZ = newpos.z;
	
		if(!(ans+win+steps))
		{
			c4.position.set(myboxX,myboxY,myboxZ);
		
			if(myboxX>=0.57)
				rp4=1;
			if(myboxX<0.1)
				rp4=0;
		}	
}
function c5Drag(element,newpos)
{
		
		var myboxX = newpos.x;
		var myboxY = newpos.y;
		var myboxZ = newpos.z;
	
		if(!(ans+win+steps))
		{
			c5.position.set(myboxX,myboxY,myboxZ);
		
			if(myboxX>=0.57)
				rp5=1;
			if(myboxX<0.1)
				rp5=0;	
		}
}
function c6Drag(element,newpos)
{
		
		var myboxX = newpos.x;
		var myboxY = newpos.y;
		var myboxZ = newpos.z;
	
		if(!(ans+win+steps))
		{
			c6.position.set(myboxX,myboxY,myboxZ);
		
			if(myboxX>=0.57)
				rp6=1;
			if(myboxX<0.1)
				rp6=0;	
		}
}
function c7Drag(element,newpos)
{
		
		var myboxX = newpos.x;
		var myboxY = newpos.y;
		var myboxZ = newpos.z;
	
		if(!(ans+win+steps))
		{
			c7.position.set(myboxX,myboxY,myboxZ);
		
			if(myboxX>=0.57)
				rp7=1;
			if(myboxX<0.1)
				rp7=0;	
		}
}
function c8Drag(element,newpos)
{
		
		var myboxX = newpos.x;
		var myboxY = newpos.y;
		var myboxZ = newpos.z;
	
		if(!(ans+win+steps))
		{
			c8.position.set(myboxX,myboxY,myboxZ);
		
			if(myboxX>=0.57)
				rp8=1;
			if(myboxX<0.1)
				rp8=0;	
		}
}
function c9Drag(element,newpos)
{
		
		var myboxX = newpos.x;
		var myboxY = newpos.y;
		var myboxZ = newpos.z;
	
		if(!(ans+win+steps))
		{
			c9.position.set(myboxX,myboxY,myboxZ);
		
			if(myboxX>=0.57)
				rp9=1;
			if(myboxX<0.1)
				rp9=0;	
		}
}
function c10Drag(element,newpos)
{
		
		var myboxX = newpos.x;
		var myboxY = newpos.y;
		var myboxZ = newpos.z;
	
		if(!(ans+win+steps))
		{
			c10.position.set(myboxX,myboxY,myboxZ);
		
			if(myboxX>=0.57)
				rp10=1;
			if(myboxX<0.1)
				rp10=0;	
		}
}
function note1Drag(element,newpos)
{
	var myboxX = newpos.x;
	var myboxY = newpos.y;
	var myboxZ = newpos.z;

	if(!(ans+win+steps))
	{
		note1.position.set(myboxX,myboxY,myboxZ);
	
		if(myboxX>=0.9)
			np1=10;
		if(myboxX <-0.3)
			np1=0;
	}

}
function note2Drag(element,newpos)
{
	var myboxX = newpos.x;
	var myboxY = newpos.y;
	var myboxZ = newpos.z;

	if(!(ans+win+steps))
	{
		note2.position.set(myboxX,myboxY,myboxZ);
	
		if(myboxX>=0.9)
			np2=10;
		if(myboxX <-0.3)
			np2=0;
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
	
}
function addAppreciation()
{
	var texture = THREE.ImageUtils.loadTexture( 'congrats.jpg');
	
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
function loadText()
{
	value = parseInt(Math.random() * 19+1);
        
        if(value==1) value=11;
        else if(value==2) value=12;
        else if(value==3) value=13;
        else if(value==4) value=14;
        else if(value==5) value=15;
        else if(value==6) value=16;
        else if(value==7) value=17;
        else if(value==8) value=18;
        else if(value==9) value=19;
        else if(value==10) value=11;
        
        switch(value)
    	{
			case 11: PIEscene.add(toggle11);break;
			case 12: PIEscene.add(toggle12);break;
			case 13: PIEscene.add(toggle13);break;
			case 14: PIEscene.add(toggle14);break;
			case 15: PIEscene.add(toggle15);break;
			case 16: PIEscene.add(toggle16);break;
			case 17: PIEscene.add(toggle17);break;
			case 18: PIEscene.add(toggle18);break;
			case 19: PIEscene.add(toggle19);break;
		}
		
}
function animate()
{
	requestAnimationFrame(animate);
	render();
}
function render()
{

	//verticalMirror.renderWithMirror(verticalMirror);
	PIEsetExperimentTitle("Learn Counting with Money(11-19)");
	PIErenderer.render(PIEscene,PIEcamera);
	
	if(started==1)
	{
		started=0;
		loadText();

	}
	
	var sum = rp1+rp2+rp3+rp4+rp5+rp6+rp7+rp8+rp9+rp10+np1+np2;
	if(sum == value && win==0)
	{
	
		PIEaddElement(winbox);
		PIEaddElement(apprcube1);
		PIEaddElement(apprcube2);
		
		PIEaddElement(star1);
		PIEaddElement(star2);
		PIEaddElement(star3);
		PIEaddElement(apprsphere);
	
		win=1;				
	}
		
	if(win==1 && sum>0 )
	{
		if(apprVal<60)
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
			chng=1;
			PIEmouseDownd();
		}
		
	}
	
	if(steps == 1)
	{
		if(coin == 1 && (coin+coin10) <=value)
		{
			if(c5.position.x < cs1.position.x )
				c5.position.x += 0.05;
			else
			{
				c5.position.x = cs1.position.x;
				++coin;
			}
		}
		else if(coin ==2  && (coin+coin10) <= value)
		{
			if(c4.position.x < cs2.position.x )
				c4.position.x += 0.05;
			else
			{
				c4.position.x = cs2.position.x;
				++coin;
			}
		}
		else if(coin ==3  && (coin+coin10) <= value)
		{
			if(c3.position.x < cs3.position.x )
				c3.position.x += 0.05;
			else
			{
				c3.position.x = cs3.position.x;
				++coin;
			}
		}
		else if(coin ==4  && (coin+coin10) <= value)
		{
			if(c2.position.x < cs4.position.x )
				c2.position.x += 0.05;
			else
			{
				c2.position.x = cs4.position.x;
				++coin;
			}
		}
		else if(coin ==5  && (coin+coin10) <= value)
		{
			if(c1.position.x < cs5.position.x )
				c1.position.x += 0.05;
			else
			{
				c1.position.x = cs5.position.x;
				++coin;
			}
		}
		else if(coin ==6  && (coin+coin10) <= value)
		{
			if(c10.position.x < cs6.position.x )
				c10.position.x += 0.05;
			else
			{
				c10.position.x = cs6.position.x;
				++coin;
			}
		}
		else if(coin ==7  && (coin+coin10) <= value)
		{
			if(c9.position.x < cs7.position.x )
				c9.position.x += 0.05;
			else
			{
				c9.position.x = cs7.position.x;
				++coin;
			}
		}
		else if(coin ==8  && (coin+coin10) <= value)
		{
			if(c8.position.x < cs8.position.x )
				c8.position.x += 0.05;
			else
			{
				c8.position.x = cs8.position.x;
				++coin;
			}
		}
		else if(coin == 9  && (coin+coin10) <= value)
		{
			if(c7.position.x < cs9.position.x )
				c7.position.x += 0.05;
			else
			{
				c7.position.x = cs9.position.x;
				++coin;
			}
		}
		else if(coin ==10 && (coin+coin10) <= value)
		{
		
			c1.position.set(1+0.3-3,3.3,0);
			c2.position.set(1+0.6-3,3.3,0);
			c3.position.set(1+0.9-3,3.3,0);
			c4.position.set(1+1.2-3,3.3,0);
			c5.position.set(1+1.5-3,3.3,0);

			c6.position.set(1+0.3-3,3.3-0.7,0);
			c7.position.set(1+0.6-3,3.3-0.7,0);
			c8.position.set(1+0.9-3,3.3-0.7,0);
			c9.position.set(1+1.2-3,3.3-0.7,0);
			c10.position.set(1+1.5-3,3.3-0.7,0);
			
		
			if(coin10 == 10)
			{
				if(note2.position.x < noteS2.position.x)
					note2.position.x += 0.05;
				else
				{
					note2.position.x = noteS2.position.x;
					coin = 1; coin10=20;
					
				}
			}
			else
			{
				if(note1.position.x < noteS1.position.x )
					note1.position.x += 0.05;
				else
				{
					coin10 = 10;
					coin = 1;
					note1.position.x = noteS1.position.x;
					
				}
			}
		}
		else
		{
			steps = 0;
			coin10 = 0;
			coin = 1;
		}
	
	}
	
}
function addLine()
{

	var material = new THREE.MeshBasicMaterial({color : 0x000000});
	var geometry = new THREE.CylinderGeometry(0.02, 0.02, 3, 0.9 );
	var holder = new THREE.Mesh(geometry,material);
	PIEaddElement(holder);
	
	holder.position.set(0.3,2.05,0);
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
     loadText();
     addDragControls();
     addAppreciation();
      PIErenderer.domElement.addEventListener("mousedown",PIEmouseDownd,false);
      PIErenderer.setClearColor(0xffffff);
      
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

	var texture,geometry;
	texture = THREE.ImageUtils.loadTexture( 'wall1.jpg');
	//texture.repeat.set( 0, 1);
	var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
	geometry = new THREE.PlaneGeometry( 8.4,4 );
	
	var wall = new THREE.Mesh(geometry,material);
	PIEaddElement(wall);
	wall.position.set(2,1.85,-0.1);
      
	
	animate();
     
     //addTable();
}
