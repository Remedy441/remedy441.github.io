     /* Scene Center Y coordinate */

/* Room Variables */
var box;
var leftB;              /* Left Barrier */
var rightB;             /* Right Barrier */
var bottomB;            /* Bottom Barrier */
var topB;               /* Top Barrier */
var backB=-4.0;         /* Back Barrier */
var wallThickness;      /* Wall Thickness */
var verticalMirror,verticalMirrorMesh;
var cubeCamera,mirrorCube;
var pt1,pt2,pt3,pt4,pt5,pt6,pt7,pt8,pt9;
var line;
var s1,s2,s3,s4,s5;
var sobject;
var started=0;
var bt1=[],bt2=[],bt3=[],bt4=[],bt5=[];
var bt6=[],bt7=[],bt8=[],bt9=[],bt10=[];

var alpha = 10;
var txt,txtDsplyd=0;
var count = 0;
var numBox;
var hand=[],i=-1;
var nxt = [],rfresh=[],bck=[];
var delet=[],dt=-1;
var th1=0,th2=0,th3=0,th4=0,th5=0,th6=0,th7=0,th8=0,th9=0,th10=0;
var thb=[];
var reset=0,dstrt=0;
var line1=[],line2=[],line3=[],line4=[],line5=[],line6=[],line7=[],line8=[],line9=[],line10=[];
var h1c=0,h2c=0,h3c=0,h4c=0,h5c=0,h6c=0,h7c=0,h8c=0,h9c=0,h10c=0;
var lineObject=[];

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Measuring length with hands experiment help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows a table on the top left and a wall and different colored handspans at the left side.</p>";
    helpContent = helpContent + "<h3>Hands Every hand can be mesured  with the first green hand.</h3>";
    helpContent = helpContent + "<p style = 'color: green'>MintHand = 1.5 * GreenHand</p>";
    helpContent = helpContent + "<p style = 'color: green'>MagentaHand = 2 * GreenHand</p>";
    helpContent = helpContent + "<p style = 'color: green'>PurpleHand = 2.5 * GreenHand</p>";
    helpContent = helpContent + "<p style = 'color: green'>RedHand = 3 * GreenHand</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p style = 'color: blue'>Click on Every hand span and drag it to measure the respected wall</p>";
    helpContent = helpContent + "<p style = 'color: blue'>You can delete the selected hand span and also can reset The Experiment</p>";
    helpContent = helpContent + "<p style = 'color: blue'>Observation Table is given to store your Observation.</p>";
    helpContent = helpContent + "<p style = 'color: blue'> Reset button put Entire program to the initial state.</p>";
    helpContent = helpContent + "<p style = 'color: blue'>Once the measurings taken you can click on the next button to get another wall.</p>";
    helpContent = helpContent + "<p style = 'color: red'> THANK YOU .....</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}
var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Measuring length with hands experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows a table on the top left and a wall and different colored handspans at the right side.</p>";
    infoContent = infoContent + "<h3>Movement</h3>";
    infoContent = infoContent + "<p>You can choose size of the hand and can control it using drag and drop controls .</p>";
    infoContent = infoContent + "<p>At the time of impact, The position of the hand will get changed.</p>";
    infoContent = infoContent + "<p>The details of each hand and measurements can be stored in the table</p>";
    infoContent = infoContent + "<p>User can remove the selected hand posture or can reset the Experiment with the buttons provided at the right side of the illusion</p>";
    
    infoContent = infoContent + "<p>Click on next button to move to the next task .</p>";
    infoContent = infoContent + "<p>Cross mark button is to delete the current working hand span .</p>";
    infoContent = infoContent + "<p>User can fill the Observations he made in the table .</p>";
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
function initialiseControls()
{
	t1 = "Object Distance ";
	t2 = "          "+"5.00 cm";
	PIEaddDisplayText(t1, t2);

	var parameters = 
		{
			Wall:   function() { addWall(); },
		};
		
	/* Observation Table */
    PIEcreateTable("Test Table", 5, 16, true);
    var headerRow=["", "GreenHand ", "MintHand ","MagentaHand	","PurpleHand   ","RedHand "];
    PIEupdateTableRow(0, headerRow);
    PIEupdateTableCell(1, 0, " ______");
    PIEupdateTableCell(2, 0, "Width");
    PIEupdateTableCell(3, 0, "Height");
    
    PIEsetCellInput(2, 1, 10, 0);
    PIEsetCellInput(2, 2, 10, 0);
    PIEsetCellInput(2, 3, 10, 0);
    PIEsetCellInput(2, 4, 10, 0);
    PIEsetCellInput(2, 5, 10, 0);
    
    PIEsetCellInput(3, 1, 10, 0);
    PIEsetCellInput(3, 2, 10, 0);
    PIEsetCellInput(3, 3, 10, 0);
    PIEsetCellInput(3, 4, 10, 0);
    PIEsetCellInput(3, 5, 10, 0);
    
    
    //PIEsetColumnInput(3, 5, "abcde");
   

}
//Resetting all values to default values
function resetExperiment()
{
	PIEsetCellInput(2, 1, 10, 0);
    PIEsetCellInput(2, 2, 10, 0);
    PIEsetCellInput(2, 3, 10, 0);
    PIEsetCellInput(2, 4, 10, 0);
    PIEsetCellInput(2, 5, 10, 0);
    
    PIEsetCellInput(3, 1, 10, 0);
    PIEsetCellInput(3, 2, 10, 0);
    PIEsetCellInput(3, 3, 10, 0);
    PIEsetCellInput(3, 4, 10, 0);
    PIEsetCellInput(3, 5, 10, 0);

   reset=1; 
   PIEmouseDownd();
}
function addWall()
{
    PIEscene.remove(numBox);
	
	var texture,geometry;
	texture = THREE.ImageUtils.loadTexture( 'wall.jpeg');

	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	    //texture.repeat.set( 1, 1);
    count = (count+1)%10;

	switch(count)
	{
	    case 0 : geometry = new THREE.PlaneGeometry( 1,1 );break;
	    case 1 : geometry = new THREE.PlaneGeometry( 1,2 );break;
	    case 2 : geometry = new THREE.PlaneGeometry( 2,2 );break;
	    case 3 : geometry = new THREE.PlaneGeometry( 2,1 );break;
	    case 4 : geometry = new THREE.PlaneGeometry( 2.5,2.5 );break;
	    
	    case 5 : geometry = new THREE.PlaneGeometry( 1.5,2.5 );break;
	    case 6 : geometry = new THREE.PlaneGeometry( 2.5,2.6 );break;
	    case 7 : geometry = new THREE.PlaneGeometry( 2,2 );break;
	    case 8 : geometry = new THREE.PlaneGeometry( 3.5,2 );break;
	    case 9 : geometry = new THREE.PlaneGeometry( 3.5,2.5 );break;
	}    
	
    var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
    numBox = new THREE.Mesh(geometry,material);
    PIEaddElement(numBox);
    numBox.position.set(4,2.2,-0.01);
	
}
function hands1()
{

	var texture,geometry,hand1,hand2,hand3,hand4,hand5;
	texture = THREE.ImageUtils.loadTexture( 'greenHand_1.png');

	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	    //texture.repeat.set( 1, 1);

    geometry = new THREE.PlaneGeometry( 0.4,0.4 );
    var material = new THREE.MeshBasicMaterial( { map : texture, transparent: true,side: THREE.DoubleSide  });
    hand1 = new THREE.Mesh(geometry,material);
    PIEaddElement(hand1);
    hand1.position.set(-1.7,2.3,0);
    
    texture = THREE.ImageUtils.loadTexture( 'lgreenHand_1.png');
    geometry = new THREE.PlaneGeometry( 0.63,0.4 );
    var material = new THREE.MeshBasicMaterial( { map : texture, transparent: true,side: THREE.DoubleSide  });
    hand2 = new THREE.Mesh(geometry,material);
    PIEaddElement(hand2);
    hand2.position.set(-1.17,2.3,0);
    
    texture = THREE.ImageUtils.loadTexture( 'lpurpleHand_1.png');
    geometry = new THREE.PlaneGeometry( 0.8,0.4 );
    var material = new THREE.MeshBasicMaterial( { map : texture, transparent: true,side: THREE.DoubleSide  });
    hand3 = new THREE.Mesh(geometry,material);
    PIEaddElement(hand3);
    hand3.position.set(-0.44,2.3,0);
    
    texture = THREE.ImageUtils.loadTexture( 'purpleHand_1.png');
    geometry = new THREE.PlaneGeometry( 1,0.5 );
    var material = new THREE.MeshBasicMaterial( { map : texture,transparent: true, side: THREE.DoubleSide  });
    hand4 = new THREE.Mesh(geometry,material);
    PIEaddElement(hand4);
    hand4.position.set(0.48,2.3,0);
    
    texture = THREE.ImageUtils.loadTexture( 'redHand_1.png');
    geometry = new THREE.PlaneGeometry( 1.2,0.6 );
    var material = new THREE.MeshBasicMaterial( { map : texture,transparent: true, side: THREE.DoubleSide  });
    hand5 = new THREE.Mesh(geometry,material);
    PIEaddElement(hand5);
    hand5.position.set(1.6,2.3,0);
    
    bt1.push(hand1);
    bt2.push(hand2);
    bt3.push(hand3);
    bt4.push(hand4);
    bt5.push(hand5);
}
function hands2()
{
    var texture,geometry,hand1,hand2,hand3,hand4,hand5;
	texture = THREE.ImageUtils.loadTexture( 'greenHand_1.png');

	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	    //texture.repeat.set( 1, 1);

    geometry = new THREE.PlaneGeometry( 0.4,0.4 );
    var material = new THREE.MeshBasicMaterial( { map : texture,transparent: true, side: THREE.DoubleSide  });
    hand1 = new THREE.Mesh(geometry,material);
    PIEaddElement(hand1);
    hand1.position.set(-1.5,1.1,0);
    
    texture = THREE.ImageUtils.loadTexture( 'lgreenHand_1.png');
    geometry = new THREE.PlaneGeometry( 0.63,0.4 );
    var material = new THREE.MeshBasicMaterial( { map : texture,transparent: true, side: THREE.DoubleSide  });
    hand2 = new THREE.Mesh(geometry,material);
    PIEaddElement(hand2);
    hand2.position.set(-1,1.1,0);
    
    texture = THREE.ImageUtils.loadTexture( 'lpurpleHand_1.png');
    geometry = new THREE.PlaneGeometry( 0.8,0.4 );
    var material = new THREE.MeshBasicMaterial( { map : texture,transparent: true, side: THREE.DoubleSide  });
    hand3 = new THREE.Mesh(geometry,material);
    PIEaddElement(hand3);
    hand3.position.set(-0.5,1.1,0);
    
    texture = THREE.ImageUtils.loadTexture( 'purpleHand_1.png');
    geometry = new THREE.PlaneGeometry( 1,0.5 );
    var material = new THREE.MeshBasicMaterial( { map : texture,transparent: true, side: THREE.DoubleSide  });
    hand4 = new THREE.Mesh(geometry,material);
    PIEaddElement(hand4);
    hand4.position.set(0.15,1.1,0);
    
    texture = THREE.ImageUtils.loadTexture( 'redHand_1.png');
    geometry = new THREE.PlaneGeometry( 1.2,0.6 );
    var material = new THREE.MeshBasicMaterial( { map : texture,transparent: true, side: THREE.DoubleSide  });
    hand5 = new THREE.Mesh(geometry,material);
    PIEaddElement(hand5);
    hand5.position.set(0.9,1.1,0);
    
    hand1.rotation.z = -1.57;
    hand2.rotation.z = -1.57;
    hand3.rotation.z = -1.57;
    hand4.rotation.z = -1.57;
    hand5.rotation.z = -1.57;
    
    bt6.push(hand1);
    bt7.push(hand2);
    bt8.push(hand3);
    bt9.push(hand4);
    bt10.push(hand5);
    
}
function PIEmouseDownd()
{
    var h1,h2,h3,h4,h5,h6,h7,h8,h9,h10,next,refresh,del;
    PIEraycaster.setFromCamera(PIEmouseP,PIEcamera);
    h1=PIEraycaster.intersectObjects(bt1);
    h2=PIEraycaster.intersectObjects(bt2);
    h3=PIEraycaster.intersectObjects(bt3);
    h4=PIEraycaster.intersectObjects(bt4);
    h5=PIEraycaster.intersectObjects(bt5);
    
    h6=PIEraycaster.intersectObjects(bt6);
    h7=PIEraycaster.intersectObjects(bt7);
    h8=PIEraycaster.intersectObjects(bt8);
    h9=PIEraycaster.intersectObjects(bt9);
    h10=PIEraycaster.intersectObjects(bt10);
    next=PIEraycaster.intersectObjects(nxt);
    refresh = PIEraycaster.intersectObjects(rfresh);
    del = PIEraycaster.intersectObjects(bck);
    
    if(h1.length >0 || h2.length >0 || h3.length >0 || h4.length >0 || h5.length >0 || h6.length >0 || h7.length >0 || h8.length >0 || h9.length >0 || h10.length >0 )
    {
    
    	h1c=0;h2c=0;h3c=0;h4c=0;h5c=0;h6c=0;h7c=0;h8c=0;h9c=0;h10c=0;
        var texture,geometry;
    
        if(h1.length >0 || h2.length >0 || h3.length >0 || h4.length >0 || h5.length >0 )
        {
    
            if(h1.length > 0)
            {
            	h1c=1;
            	texture = THREE.ImageUtils.loadTexture( 'greenHand.png');
                geometry = new THREE.PlaneGeometry( 0.4,0.4 );
                
                
            }
            else if(h2.length > 0)
            {
            	h2c=2;
            	texture = THREE.ImageUtils.loadTexture( 'lgreenHand.png');
                geometry = new THREE.PlaneGeometry( 0.62,0.4 );
                
            }
            else if(h3.length > 0)
            {
            	h3c=3;
            	texture = THREE.ImageUtils.loadTexture( 'lpurpleHand.png');
                geometry = new THREE.PlaneGeometry( 0.8,0.4 );
                
            }
            else if(h4.length > 0)
            {
            	h4c=4;
            	texture = THREE.ImageUtils.loadTexture( 'purpleHand.png');
                geometry = new THREE.PlaneGeometry( 1,0.5 );
                
            }
            else if(h5.length > 0)
            {
            	h5c=5;
            	
            	texture = THREE.ImageUtils.loadTexture( 'redHand.png');
                geometry = new THREE.PlaneGeometry( 1.2,0.6 );
                
            }
            var material = new THREE.MeshBasicMaterial( { map : texture, transparent: true, side: THREE.DoubleSide  });
        
		    hand[++i] = new THREE.Mesh(geometry,material);
		    PIEaddElement(hand[i]);
		    
		    PIEdragElements.push(hand[i]);
        }
        else if(h6.length >0 || h7.length>0 || h8.length>0 || h9.length>0 || h10.length>0)
        {
            if(h6.length > 0)
            {
            	h6c=6;
            	texture = THREE.ImageUtils.loadTexture( 'greenHand.png');
                geometry = new THREE.PlaneGeometry( 0.4,0.4 );
                
            }
            else if(h7.length > 0)
            {
            	h7c=7;
            	texture = THREE.ImageUtils.loadTexture( 'lgreenHand.png');
                geometry = new THREE.PlaneGeometry( 0.63,0.4 );
                
            }
            else if(h8.length > 0)
            {
            	h8c=8;
            	texture = THREE.ImageUtils.loadTexture( 'lpurpleHand.png');
                geometry = new THREE.PlaneGeometry( 0.8,0.4 );
                
            }
            else if(h9.length > 0)
            {
            	h9c=9;
            
            	texture = THREE.ImageUtils.loadTexture( 'purpleHand.png');
                geometry = new THREE.PlaneGeometry( 1,0.5 );
                
            }
            else if(h10.length > 0)
            {
            	h10c=10;
            	
            	texture = THREE.ImageUtils.loadTexture( 'redHand.png');
                geometry = new THREE.PlaneGeometry( 1.2,0.6 );
                
            }
            var material = new THREE.MeshBasicMaterial( { map : texture, transparent: true, side: THREE.DoubleSide  });
        
		    hand[++i] = new THREE.Mesh(geometry,material);
		    PIEaddElement(hand[i]);
		    
		    hand[i].rotation.z = -1.57;
		    
		    PIEdragElements.push(hand[i]);
        }
        
        if(h1.length > 0)
        {
       			 hand[i].position.set(-1.7,2.3,-0.01);
       			 
	   			var index = line1.length; 
	   			texture = THREE.ImageUtils.loadTexture( 'lines1.png');
				geometry = new THREE.PlaneGeometry( 0.4,0.4 );
				var material = new THREE.MeshBasicMaterial( { map : texture,transparent: true, side: THREE.DoubleSide  });
				line1[index] = new THREE.Mesh(geometry,material);
       	}
       	else if(h2.length > 0)
       	{
       			 hand[i].position.set(-1.17,2.3,-0.01);
       			 
       			 var index = line2.length; 
	   			texture = THREE.ImageUtils.loadTexture( 'lines1.png');
				geometry = new THREE.PlaneGeometry( 0.62,0.4 );
				var material = new THREE.MeshBasicMaterial( { map : texture,transparent: true, side: THREE.DoubleSide  });
				line2[index] = new THREE.Mesh(geometry,material);
				
       	}
       	else if(h3.length > 0)
       	{
       			 hand[i].position.set(-0.44,2.3,-0.01);
       			 
       			var index = line3.length; 
	   			texture = THREE.ImageUtils.loadTexture( 'lines.png');
				geometry = new THREE.PlaneGeometry( 0.8,0.4 );
				var material = new THREE.MeshBasicMaterial( { map : texture,transparent: true, side: THREE.DoubleSide  });
				line3[index] = new THREE.Mesh(geometry,material);
       	}
       	else if(h4.length > 0)
       	{
       			 hand[i].position.set(0.48,2.3,-0.01);
       			 
       			 var index = line4.length; 
	   			texture = THREE.ImageUtils.loadTexture( 'lines.png');
				geometry = new THREE.PlaneGeometry( 1,0.5 );
				var material = new THREE.MeshBasicMaterial( { map : texture,transparent: true, side: THREE.DoubleSide  });
				line4[index] = new THREE.Mesh(geometry,material);
       	}
       	else if(h5.length > 0)
       	{
       			 hand[i].position.set(1.6,2.3,-0.01);
       			 
       			 var index = line5.length; 
	   			texture = THREE.ImageUtils.loadTexture( 'lines.png');
				geometry = new THREE.PlaneGeometry( 1.2,0.6 );
				var material = new THREE.MeshBasicMaterial( { map : texture,transparent: true, side: THREE.DoubleSide  });
				line5[index] = new THREE.Mesh(geometry,material);
       	}
       	else if(h6.length > 0)
        {
       			 hand[i].position.set(-1.5,1.1,-0.01);
       			 
       			 var index = line6.length; 
	   			texture = THREE.ImageUtils.loadTexture( 'lines1.png');
				geometry = new THREE.PlaneGeometry( 0.4,0.4 );
				var material = new THREE.MeshBasicMaterial( { map : texture,transparent: true, side: THREE.DoubleSide  });
				line6[index] = new THREE.Mesh(geometry,material);
				line6[index].rotation.z = -1.57;
       	}
       	else if(h7.length > 0)
       	{
       			 hand[i].position.set(-1,1.1,-0.01);
       			 
       			 var index = line7.length; 
	   			texture = THREE.ImageUtils.loadTexture( 'lines1.png');
				geometry = new THREE.PlaneGeometry( 0.63,0.4 );
				var material = new THREE.MeshBasicMaterial( { map : texture,transparent: true, side: THREE.DoubleSide  });
				line7[index] = new THREE.Mesh(geometry,material);
				line7[index].rotation.z = -1.57;
       	}
       	else if(h8.length > 0)
       	{
       			 hand[i].position.set(-0.5,1.1,-0.01);
       			 
       			 var index = line8.length; 
	   			texture = THREE.ImageUtils.loadTexture( 'lines.png');
				geometry = new THREE.PlaneGeometry( 0.8,0.4 );
				var material = new THREE.MeshBasicMaterial( { map : texture,transparent: true, side: THREE.DoubleSide  });
				line8[index] = new THREE.Mesh(geometry,material);
				line8[index].rotation.z = -1.57;
       	}
       	else if(h9.length > 0)
       	{
       			 hand[i].position.set(0.15,1.1,-0.01);
       			 
       			 var index = line9.length; 
	   			texture = THREE.ImageUtils.loadTexture( 'lines.png');
				geometry = new THREE.PlaneGeometry( 1,0.5 );
				var material = new THREE.MeshBasicMaterial( { map : texture,transparent: true, side: THREE.DoubleSide  });
				line9[index] = new THREE.Mesh(geometry,material);
				line9[index].rotation.z = -1.57;
       	}
       	else if(h10.length > 0)
       	{
       			 hand[i].position.set(0.9,1.1,-0.01);
       			 
       			 var index = line10.length; 
	   			texture = THREE.ImageUtils.loadTexture( 'lines.png');
				geometry = new THREE.PlaneGeometry( 1.2,0.6 );
				var material = new THREE.MeshBasicMaterial( { map : texture,transparent: true, side: THREE.DoubleSide  });
				line10[index] = new THREE.Mesh(geometry,material);
				line10[index].rotation.z = -1.57;
       	}
       	
    }
    
    else if(next.length > 0 || reset==1)
    {
    	var index=0;
    	reset=0;
    	while(index<line1.length)
    	{
    		PIEscene.remove(line1[index]);
    		++index;
    	}
    	
    	index=0;
    	while(index<line2.length)
    	{
    		PIEscene.remove(line2[index]);
    		++index;
    	}
    	
    	index=0;
    	while(index<line3.length)
    	{
    		PIEscene.remove(line3[index]);
    		++index;
    	}
    	
    	index=0;
    	while(index<line4.length)
    	{
    		PIEscene.remove(line4[index]);
    		++index;
    	}
    	
    	index=0;
    	while(index<line5.length)
    	{
    		PIEscene.remove(line5[index]);
    		++index;
    	}
    	index=0;
    	while(index<line6.length)
    	{
    		PIEscene.remove(line6[index]);
    		++index;
    	}
    	index=0;
    	while(index<line7.length)
    	{
    		PIEscene.remove(line7[index]);
    		++index;
    	}
    	index=0;
    	while(index<line8.length)
    	{
    		PIEscene.remove(line8[index]);
    		++index;
    	}
    	index=0;
    	while(index<line9.length)
    	{
    		PIEscene.remove(line9[index]);
    		++index;
    	}
    	index=0;
    	while(index<line10.length)
    	{
    		PIEscene.remove(line10[index]);
    		++index;
    	}
    
    
    	th1=0;th2=0;th3=0;th4=0;th5=0;th6=0;th7=0;th8=0;th9=0;th10=0;
    
    	PIEsetCellInput(2, 1, 10, 0);
		PIEsetCellInput(2, 2, 10, 0);
		PIEsetCellInput(2, 3, 10, 0);
		PIEsetCellInput(2, 4, 10, 0);
		PIEsetCellInput(2, 5, 10, 0);
		
		PIEsetCellInput(3, 1, 10, 0);
		PIEsetCellInput(3, 2, 10, 0);
		PIEsetCellInput(3, 3, 10, 0);
		PIEsetCellInput(3, 4, 10, 0);
		PIEsetCellInput(3, 5, 10, 0);
    
    	while(delet.length>0)
		{
			PIEscene.remove(delet[0]);
			delet.splice(0,1);
		}
    
    	addWall();
    }
    else if(refresh.length>0 )
    {
    	PIEsetCellInput(2, 1, 10, 0);
		PIEsetCellInput(2, 2, 10, 0);
		PIEsetCellInput(2, 3, 10, 0);
		PIEsetCellInput(2, 4, 10, 0);
		PIEsetCellInput(2, 5, 10, 0);
		
		PIEsetCellInput(3, 1, 10, 0);
		PIEsetCellInput(3, 2, 10, 0);
		PIEsetCellInput(3, 3, 10, 0);
		PIEsetCellInput(3, 4, 10, 0);
		PIEsetCellInput(3, 5, 10, 0);

		var index=0;
		while(index<line1.length)
    	{
    		PIEscene.remove(line1[index]);
    		++index;
    	}
    	
    	index=0;
    	while(index<line2.length)
    	{
    		PIEscene.remove(line2[index]);
    		++index;
    	}
    	
    	index=0;
    	while(index<line3.length)
    	{
    		PIEscene.remove(line3[index]);
    		++index;
    	}
    	
    	index=0;
    	while(index<line4.length)
    	{
    		PIEscene.remove(line4[index]);
    		++index;
    	}
    	
    	index=0;
    	while(index<line5.length)
    	{
    		PIEscene.remove(line5[index]);
    		++index;
    	}
    	index=0;
    	while(index<line6.length)
    	{
    		PIEscene.remove(line6[index]);
    		++index;
    	}
    	index=0;
    	while(index<line7.length)
    	{
    		PIEscene.remove(line7[index]);
    		++index;
    	}
    	index=0;
    	while(index<line8.length)
    	{
    		PIEscene.remove(line8[index]);
    		++index;
    	}
    	index=0;
    	while(index<line9.length)
    	{
    		PIEscene.remove(line9[index]);
    		++index;
    	}
    	index=0;
    	while(index<line10.length)
    	{
    		PIEscene.remove(line10[index]);
    		++index;
    	}

    
    	th1=0;th2=0;th3=0;th4=0;th5=0;th6=0;th7=0;th8=0;th9=0;th10=0;
    	while(delet.length>0)
		{
			PIEscene.remove(delet[0]);
			delet.splice(0,1);
		}
    }
    else if(del.length >0)
    {
		if(delet.length>0)
		{
			
			PIEscene.remove(lineObject[lineObject.length-1]);	
			PIEscene.remove(delet[delet.length-1]);
			delet.splice(delet.length-1,delet.length);
			lineObject.splice(lineObject.length-1,lineObject.length);
		}
    	
    }
    else
    {
    	
    }
    
}
function PIEmouseUps()
{
}
function updateExperimentElements(t, dt)
{

	
}
function dragControls()
{
		PIEdragElement(hand[i]);
		PIEsetDrag(hand[i], handDrag);
		
}
function handDrag(element,newpos)
{
	
		var myboxX = newpos.x;
		var myboxY = newpos.y;
		var myboxZ = newpos.z;
		hand[i].position.set(myboxX,myboxY,myboxZ);
}

function animate()
{
	requestAnimationFrame(animate);
	render();

}
function render()
{

	if(PIEselectedDrag != null)
	{
		dstrt=1;
	}
	else if(dstrt==1)
	{
		var posX = hand[i].position.x;
		var posY = hand[i].position.y;
		delet.push(hand[i]);
		var index = PIEdragElements.indexOf(hand[i]);
		if (index > -1) 
		{
			PIEdragElements.splice(index, 1);
		}
		var choice = h1c+h2c+h3c+h4c+h5c+h6c+h7c+h8c+h9c+h10c;
		hand[i].position.z = 0;
		
		switch(choice)
		{
			case 1: 
			{
				var index = line1.length-1;
				PIEscene.add(line1[index]);
				line1[index].position.x = posX;
				line1[index].position.y = posY;
				lineObject.push(line1[index]);
				
				break;
			}
			case 2: 
			{
				var index = line2.length-1;
				PIEscene.add(line2[index]);
				line2[index].position.x = posX;
				line2[index].position.y = posY;
				lineObject.push(line2[index]);
				
				break;
			}
		
			case 3: 
			{
					var index = line3.length-1;
					PIEscene.add(line3[index]);
					line3[index].position.x = posX;
					line3[index].position.y = posY;
					lineObject.push(line3[index]);
					
					break;
			}
			case 4: 
			{
					var index = line4.length-1;
					PIEscene.add(line4[index]);
					line4[index].position.x = posX;
					line4[index].position.y = posY;
					lineObject.push(line4[index]);
					
					break;
			}
			case 5: 
			{
					var index = line5.length-1;
					PIEscene.add(line5[index]);
					line5[index].position.x = posX;
					line5[index].position.y = posY;
					lineObject.push(line5[index]);
					
					break;
			}
			case 6: 
			{
					var index = line6.length-1;
					PIEscene.add(line6[index]);
					line6[index].position.x = posX;
					line6[index].position.y = posY;
					lineObject.push(line6[index]);
					
					break;
			}
			case 7: 
			{
					var index = line7.length-1;
					PIEscene.add(line7[index]);
					line7[index].position.x = posX;
					line7[index].position.y = posY;
					lineObject.push(line7[index]);
					
					break;
			}
			case 8: 
			{
					var index = line8.length-1;
					PIEscene.add(line8[index]);
					line8[index].position.x = posX;
					line8[index].position.y = posY;
					lineObject.push(line8[index]);
					
					break;
			}
			case 9: 
			{
					var index = line9.length-1;
					PIEscene.add(line9[index]);
					line9[index].position.x = posX;
					line9[index].position.y = posY;
					lineObject.push(line9[index]);
					
					break;
			}
			case 10: 
			{
					var index = line10.length-1;
					PIEscene.add(line10[index]);
					line10[index].position.x = posX;
					line10[index].position.y = posY;
					lineObject.push(line10[index]);
					
					break;
			}
		}
		
		dstrt=0;
	}
	
    
	
	//verticalMirror.renderWithMirror(verticalMirror);
	PIEsetExperimentTitle("Measuring Length With Hands");
	PIErenderer.render(PIEscene,PIEcamera);
	
}
function addSun()
{
	var texture = THREE.ImageUtils.loadTexture( 'next.png');
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	//texture.repeat.set( 1, 1);
	var geometry = new THREE.RingGeometry( 0.001, 0.33, 32 );
	var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
	var box1 = new THREE.Mesh(geometry,material);
	PIEaddElement(box1);
	box1.position.set(5,0.4,0);
	
	var geometry = new THREE.RingGeometry( 0.001, 0.34, 32 );
	var texture = THREE.ImageUtils.loadTexture( 'refresh.jpg');
	var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
	var box4 = new THREE.Mesh(geometry,material);
	PIEaddElement(box4);
    box4.position.set(4,0.4,0);
    
    var geometry = new THREE.RingGeometry( 0.001, 0.33, 32 );
	var texture = THREE.ImageUtils.loadTexture( 'BACK.png');
	var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
	var box5 = new THREE.Mesh(geometry,material);
	PIEaddElement(box5);
    box5.position.set(3.1,0.4,0);
	
	nxt.push(box1);
	rfresh.push(box4);
	bck.push(box5);
	
	
}
function initialDrags()
{
	
	  var texture,geometry; 
		
	//upper hands		  
	  texture = THREE.ImageUtils.loadTexture( 'greenHand.png');
      geometry = new THREE.PlaneGeometry( 0.4,0.4 );
	  var material = new THREE.MeshBasicMaterial( { map : texture, transparent: true, side: THREE.DoubleSide  });
        
		hand[++i] = new THREE.Mesh(geometry,material);
		PIEaddElement(hand[i]);
		hand[i].position.set(-1.7,2.3,0);
		PIEdragElements.push(hand[i]);
		dragControls();
	
	texture = THREE.ImageUtils.loadTexture( 'lgreenHand.png');
    geometry = new THREE.PlaneGeometry( 0.62,0.4 );
    material = new THREE.MeshBasicMaterial( { map : texture, transparent: true, side: THREE.DoubleSide  });
        
		hand[++i] = new THREE.Mesh(geometry,material);
		PIEaddElement(hand[i]);
		hand[i].position.set(-1.17,2.3,0);
		PIEdragElements.push(hand[i]);
		dragControls();
		
	texture = THREE.ImageUtils.loadTexture( 'lpurpleHand.png');
    geometry = new THREE.PlaneGeometry( 0.8,0.4 );
    material = new THREE.MeshBasicMaterial( { map : texture, transparent: true, side: THREE.DoubleSide  });
        
		hand[++i] = new THREE.Mesh(geometry,material);
		PIEaddElement(hand[i]);
		hand[i].position.set(-0.44,2.3,0);
		PIEdragElements.push(hand[i]);
		dragControls();
		
	texture = THREE.ImageUtils.loadTexture( 'purpleHand.png');
     geometry = new THREE.PlaneGeometry( 1,0.5 );
    material = new THREE.MeshBasicMaterial( { map : texture, transparent: true, side: THREE.DoubleSide  });
        
		hand[++i] = new THREE.Mesh(geometry,material);
		PIEaddElement(hand[i]);
		hand[i].position.set(0.48,2.3,0);
		PIEdragElements.push(hand[i]);
		dragControls();
		
	texture = THREE.ImageUtils.loadTexture( 'redHand.png');
                geometry = new THREE.PlaneGeometry( 1.2,0.6 );
                
    material = new THREE.MeshBasicMaterial( { map : texture, transparent: true, side: THREE.DoubleSide  });
        
		    hand[++i] = new THREE.Mesh(geometry,material);
		    PIEaddElement(hand[i]);
		    PIEdragElements.push(hand[i]);
		    hand[i].position.set(1.6,2.3,0);
		    
		    dragControls();
		    
		    //lower hands
		   texture = THREE.ImageUtils.loadTexture( 'greenHand.png');
      geometry = new THREE.PlaneGeometry( 0.4,0.4 );
	  var material = new THREE.MeshBasicMaterial( { map : texture, transparent: true, side: THREE.DoubleSide  });
        
		hand[++i] = new THREE.Mesh(geometry,material);
		PIEaddElement(hand[i]);
		hand[i].rotation.z = -1.57;
		PIEdragElements.push(hand[i]);
		hand[i].position.set(-1.5,1.1,0);
		dragControls();
	
	texture = THREE.ImageUtils.loadTexture( 'lgreenHand.png');
    geometry = new THREE.PlaneGeometry( 0.63,0.4 );
    material = new THREE.MeshBasicMaterial( { map : texture, transparent: true, side: THREE.DoubleSide  });
        
		hand[++i] = new THREE.Mesh(geometry,material);
		PIEaddElement(hand[i]);
		hand[i].rotation.z = -1.57;
		PIEdragElements.push(hand[i]);
		hand[i].position.set(-1,1.1,0);
		dragControls();
		
	texture = THREE.ImageUtils.loadTexture( 'lpurpleHand.png');
    geometry = new THREE.PlaneGeometry( 0.8,0.4 );
    material = new THREE.MeshBasicMaterial( { map : texture, transparent: true, side: THREE.DoubleSide  });
        
		hand[++i] = new THREE.Mesh(geometry,material);
		PIEaddElement(hand[i]);
		hand[i].rotation.z = -1.57;
		PIEdragElements.push(hand[i]);
		hand[i].position.set(-0.5,1.1,0);
		dragControls();
		
	texture = THREE.ImageUtils.loadTexture( 'purpleHand.png');
     geometry = new THREE.PlaneGeometry( 1,0.5 );
    material = new THREE.MeshBasicMaterial( { map : texture, transparent: true, side: THREE.DoubleSide  });
        
		hand[++i] = new THREE.Mesh(geometry,material);
		PIEaddElement(hand[i]);
		hand[i].rotation.z = -1.57;
		PIEdragElements.push(hand[i]);
		hand[i].position.set(0.15,1.1,0);
		dragControls();
		
	texture = THREE.ImageUtils.loadTexture( 'redHand.png');
                geometry = new THREE.PlaneGeometry( 1.2,0.6 );
                
    material = new THREE.MeshBasicMaterial( { map : texture, transparent: true, side: THREE.DoubleSide  });
        	
		    hand[++i] = new THREE.Mesh(geometry,material);
		    PIEaddElement(hand[i]);
		    hand[i].rotation.z = -1.57;
		    PIEdragElements.push(hand[i]);
		    hand[i].position.set(0.9,1.1,0);
		    dragControls();
			                
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
	initialiseControls(); 
	  

     PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
     
     addWall();
     hands1();
     hands2();
     addSun();
     initialDrags();
	PIErenderer.setClearColor(0xFDF6D5);
	PIErenderer.domElement.addEventListener("mousedown",PIEmouseDownd,false);
	PIErenderer.domElement.addEventListener("mousedown",PIEmouseUps,true);
	
	
	animate();
     
     //addTable();
}
