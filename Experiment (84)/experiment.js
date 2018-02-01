
var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */

var Box1;
var Box2;
var Box3;
var Box4;

var l=0;
var velocity=0.00;

var text1x;
var text2x;
var text3x;
var text4x;
var temp1;
var temp2;

function initialiseControlVariables()
{	
}
function Box1Drag(element, newpos)
{
	myBox1X =Box1.position.x;
	myBox2X =Box2.position.x;
	
	temp1=newpos.x-myBox1X;
    if(myBox1X<myBox2X)
		{    
	         temp=newpos.x+1.5;    
	         myBox1X=newpos.x;
		     if((myBox1X<-2.0) && (myBox1X>-3.7))
	            {
					text1x=text1x+(temp1)*55;
	text2x=text2x+(temp1)*55;
	
                  Box1.position.set(myBox1X,2.0 ,0);
	              Box2.position.set(temp,2.0 ,0);
				  text1.style.left = text1x+'px';
			document.body.appendChild(text1);
		
			text2.style.left = text2x+'px';
			document.body.appendChild(text2);
                }
		}
        else
		{    temp=newpos.x-1.5;
		     myBox1X=newpos.x;
		     if((myBox1X<-0.5) && (myBox1X>-2.5))
	           {
				   text1x=text1x+(temp1)*55;
	text2x=text2x+(temp1)*55;
                 Box1.position.set(myBox1X,2.0 ,0);
	             Box2.position.set(temp,2.0 ,0);
				  text1.style.left = text1x+'px';
			document.body.appendChild(text1);
		
			text2.style.left = text2x+'px';
			document.body.appendChild(text2);
	           }
		}
console.log('a');	       
}

function Box2Drag(element, newpos)
{
	 myBox1X =Box1.position.x;
	 myBox2X =Box2.position.x;
	 temp1=newpos.x-myBox2X;
	 
	    if(myBox2X<myBox1X)
		{    temp=newpos.x+1.5;
	         myBox2X=newpos.x;
		     if((myBox2X<-2.0) && (myBox2X>-3.7))
	            {
					text1x=text1x+temp1*55;
	                text2x=text2x+temp1*55;
                  Box1.position.set(temp,2.0 ,0);
	              Box2.position.set(myBox2X,2.0 ,0);

	        text1.style.left = text1x+'px';
			document.body.appendChild(text1);
		
			text2.style.left = text2x+'px';
			document.body.appendChild(text2);         

		 }
		}
        else
		{    temp=newpos.x-1.5;
		     myBox2X=newpos.x;
		     if((myBox2X<-0.5) && (myBox2X>-2.5))
	           {
				   text1x=text1x+temp1*55;
	               text2x=text2x+temp1*55;
				   
                 Box1.position.set(temp,2.0 ,0);
	             Box2.position.set(myBox2X,2.0 ,0);
				 
				 
	        text1.style.left = text1x+'px';
			document.body.appendChild(text1);
		
			text2.style.left = text2x+'px';
			document.body.appendChild(text2);
	           }
		}   
		
}
function Box3Drag(element, newpos)
{
	myBox3X =Box3.position.x;
	myBox4X =Box4.position.x;
	
	temp1=newpos.x-myBox3X;
	 
        if(myBox3X<myBox4X)
		{    temp=newpos.x+1.5;
	         myBox3X=newpos.x;
		     if((myBox3X<2.5) && (myBox3X>0.5))
	            {
	            	text3x=text3x+temp1*55;
	                text4x=text4x+temp1*55;
	
                  Box3.position.set(myBox3X,2.0 ,0);
	              Box4.position.set(temp,2.0 ,0);
				   text3.style.left = text3x+'px';
			document.body.appendChild(text3);
		
			text4.style.left = text4x+'px';
			document.body.appendChild(text4);
                }
		}
        else 
		{    temp=newpos.x-1.5;
		     myBox3X=newpos.x;
		     if((myBox3X<3.7) && (myBox3X>2.0))
	           {
				   
				   text3x=text3x+(temp1)*55;
				   text4x=text4x+(temp1)*55;
				   
				    text3.style.left = text3x+'px';
			document.body.appendChild(text3);
		
			text4.style.left = text4x+'px';
			document.body.appendChild(text4);
                 Box3.position.set(myBox3X,2.0 ,0);
	             Box4.position.set(temp,2.0 ,0);
	           }
		}
		
	        text3.style.left = text3x;
			document.body.appendChild(text3);
		
			text4.style.left = text4x;
			document.body.appendChild(text4);
}

function Box4Drag(element, newpos)
{
	 myBox3X =Box3.position.x;
	 myBox4X =Box4.position.x;
	
	temp1=newpos.x-myBox4X;
	 
	    if(myBox4X<myBox3X)
		{    temp=newpos.x+1.5;
	         myBox4X=newpos.x;
		     if((myBox4X<2.5) && (myBox4X>0.5))
	            {
	             text3x=text3x+temp1*55;
	             text4x=text4x+temp1*55;
				 
				text3.style.left = text3x+'px';
			document.body.appendChild(text3);
		
			text4.style.left = text4x+'px';
			document.body.appendChild(text4);
				
				 Box3.position.set(temp,2.0 ,0);
	              Box4.position.set(myBox4X,2.0 ,0);
                }
		}
        else
		{    temp=newpos.x-1.5;
		     myBox4X=newpos.x;
		     if((myBox4X<3.7) && (myBox4X>2.0))
	           {
	             text3x=text3x+temp1*55;
	             text4x=text4x+temp1*55;
				 
				 text3.style.left = text3x+'px';
			document.body.appendChild(text3);
		
			text4.style.left = text4x+'px';
			document.body.appendChild(text4);
				 
                 Box3.position.set(temp,2.0 ,0);
	             Box4.position.set(myBox4X,2.0 ,0);
	           }
		}   
		
	        text3.style.left = text3x;
			document.body.appendChild(text3);
		
			text4.style.left = text4x;
			document.body.appendChild(text4);
}

function initialiseControls()
{
    initialiseControlVariables();
	PIEaddInputCommand("Left-Flip",flipl);
	PIEaddInputCommand("RightFlip",flipr);
}
function flipl()
{
	var temp;
    var temp1;
	var myBox1x;
	var myBox2x;
		if(Box1.position.x<Box2.position.x)
		{
 			myBox1x=Box1.position.x;
			myBox2x=Box2.position.x;
			temp=myBox1x;
			myBox1x=myBox2x;
			myBox2x=temp;
			Box1.position.set(myBox1x, 2.0,0);
		    Box2.position.set(myBox2x, 2.0,0);
			
			temp1=text1x;
			text1x=text2x;
			text2x=temp1;
			
			text1.style.left = text1x+'px';
			document.body.appendChild(text1);
		
			text2.style.left = text2x+'px';
			document.body.appendChild(text2);
		            
     	}
		else if(Box1.position.x>Box2.position.x)
		{
			myBox1x=Box1.position.x;
			myBox2x=Box2.position.x;
            temp=myBox1x;
			myBox1x=myBox2x;
			myBox2x=temp;  			
			
			temp=text1x;
			text1x=text2x;
			text2x=temp;
			
			text1.style.left = text1x+ 'px';
			document.body.appendChild(text1);
		
			text2.style.left = text2x + 'px';
			document.body.appendChild(text2);
			Box1.position.set(myBox1x, 2.0,0);
		    Box2.position.set(myBox2x, 2.0,0);	
		}
		
	PIErender();
	PIEstartAnimation();
}
function flipr()
{
var temp;	
var temp1;
var myBox3x;
var myBox4x;
		if(Box3.position.x<Box4.position.x)
		{
			myBox3x=Box3.position.x;
			myBox4x=Box4.position.x;
			temp=myBox3x;
			myBox3x=myBox4x;
			myBox4x=temp;
			Box3.position.set(myBox3x, 2.0,0);
		    Box4.position.set(myBox4x, 2.0,0);
			
			temp1=text3x;
			text3x=text4x;
			text4x=temp1;
			
			text3.style.left = text3x+'px';
			document.body.appendChild(text3);
		
			text4.style.left = text4x+'px' ;
			document.body.appendChild(text4);

		}
		else if(Box3.position.x>Box4.position.x)
		{
			myBox3x=Box3.position.x;
			myBox4x=Box4.position.x;
			temp=myBox3x;
			myBox3x=myBox4x;
			myBox4x=temp;
			
			Box3.position.set(myBox3x, 2.0,0);
		    Box4.position.set(myBox4x, 2.0,0);
			
			temp1=text3x;
			text3x=text4x;
			text4x=temp1;
			
			text3.style.left = text3x+'px';
			document.body.appendChild(text3);
		
			text4.style.left = text4x +'px';
			document.body.appendChild(text4);
			
		}
	PIErender();
	PIEstartAnimation();
}
var helpContent;
function initialiseHelp()
{
    //helpContent="<html> <body> <p>This is help content </p> </body> </html>";
    helpContent = helpContent + "<h2>Attraction and Repulsion of Magnets</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows two magnets on the table.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation control. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can give the initial position of the magnets.It can take four values <br>1.NS-SN<br>2.NS-NS<br>3.SN-NS<br>4.SN-SN</p>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the magnets on the table will move towards the center of the table or towards the edges of the table depending on the magnets' initial position.</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animaion by uing the speed control buttons</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
	PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
   //  infoContent =  "<html> <body> <p>This is info content </p> </body> </html>";
    infoContent = infoContent + "<h2>Attraction and Repulsion of Magnets</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment two Bar Magnets lying on the top of the table.</p>";
    infoContent = infoContent + "<h3>Attraction and Repulsion of Magnets</h3>";
    infoContent = infoContent + "<p>Here south pole has yellow color and north pole has green color.</p>";
    infoContent = infoContent + "<p>When the magnets have same(like) poles facing each other the magnets will repel each other and will move towards the edge of the table.</p>";
    infoContent = infoContent + "<p>When the magnets have opposite(unlike) poles facing each other the magnets will attract each other and will move towards the center of the table.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene()
{
	mySceneTLX = -8.5;
    mySceneTLY = 6.25;
    mySceneBRX =  8.5;
    mySceneBRY = -6.25;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
}

function initialiseOtherVariables()
{	
}

function loadExperimentElements()
{

    PIEsetExperimentTitle("Attraction and Repulsion of Magnets");
    PIEsetDeveloperName("Bhagyashree Rawal");
    PIEhideControlElement();
    initialiseHelp();
    initialiseInfo();
    initialiseScene();
    initialiseOtherVariables();
    initialiseControls();    
	wallThickness = 0.20;
	 bottomB=mySceneBRY;
	 loader = new THREE.TextureLoader();
     texture = loader.load( '../PIE/images/hardwood2_roughness.jpg' );
     texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
     texture.repeat.set( 5, 5 );
     texture.anisotropy = 16;
     material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: texture } );
     //geometry = new THREE.PlaneBufferGeometry( mySceneW * 2, backB * 2 );
    geometry = new THREE.BoxGeometry( mySceneW * 2, wallThickness, 100);
    //material = new THREE.MeshLambertMaterial( {color: 0xaaaaaa} );
    myFloor  = new THREE.Mesh( geometry, material );
    myFloor.lookAt(new THREE.Vector3(0,1,0));
    myFloor.position.set(myCenterX, bottomB - (wallThickness / 2), -2);
    myFloor.receiveShadow = false;
    PIEaddElement(myFloor);

	 wallThickness = 0.40;
	 bottomB=mySceneBRY;
	 loader = new THREE.TextureLoader();
     texture = loader.load( '../PIE/images/grasslight-big.jpg' );
     texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
     texture.repeat.set( 5, 5 );
     texture.anisotropy = 16;
     material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: texture } );
    geometry = new THREE.BoxGeometry( mySceneW*2 , wallThickness*1000, 1);
    myFloor  = new THREE.Mesh( geometry, material );
    myFloor.lookAt(new THREE.Vector3(0,1,0));
    myFloor.position.set(myCenterX, -5 , -2);
    myFloor.receiveShadow = false;
    PIEaddElement(myFloor);
	
	  
	    text1 = document.createElement('div');
        text1.style.position = 'absolute';
        //text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
        text1.id="text1";
		text1.style.width = 1000;
        text1.style.height = 1000;
        text1.style.backgroundColor = "white";
        text1.innerHTML = " N <br>";
		console.log(mySceneW +" "+mySceneW);
		console.log(innerHeight+" "+innerWidth);
		text1.style.top = innerHeight/mySceneH*4.0 + 'px';
        text1.style.left = 490 + 'px';
        document.body.appendChild(text1);
		
        
	    text2 = document.createElement('div');
        text2.style.position = 'absolute';
        //text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
        text2.id="text2";
		text2.style.width = 1000;
        text2.style.height = 1000;
        text2.style.backgroundColor = "white";
        text2.innerHTML = " S <br>";
        text2.style.top = innerHeight/mySceneH*4.0+'px';
        text2.style.left = 625 + 'px';
        document.body.appendChild(text2);

		text3 = document.createElement('div');
		text3.id="text3";
        text3.style.position = 'absolute';
        //text3.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
        text3.style.width = 1000;
        text3.style.height = 1000;
        text3.style.backgroundColor = "white";
        text3.innerHTML = " S <br>";
        //text3.style.top = 295+ 'px';
        text3.style.top = innerHeight/mySceneH*4.0 + 'px';
		text3.style.left = 725 + 'px';
        document.body.appendChild(text3);

		text4 = document.createElement('div');
        text4.style.position = 'absolute';
        //text4.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
        text4.id="text4";
		text4.style.width = 1000;
        text4.style.height = 1000;
        text4.style.backgroundColor = "white";
        text4.innerHTML = " N <br>";
        //text4.style.top = 295 + 'px';
        text4.style.top = innerHeight/mySceneH*4.0 + 'px';
		text4.style.left = 865 + 'px';
        document.body.appendChild(text4);

		var TableGeometry = new THREE.BoxGeometry(8.8,0.3,5.1);
        var TableMaterial = new THREE.MeshBasicMaterial({color: 0x872D1A});
        var table = new THREE.Mesh(TableGeometry, TableMaterial);
		table.position.set(0,1.5,0);
        PIEaddElement(table);
		
		var TableGeometryl = new THREE.BoxGeometry(0.3,6.0,0.1);
        var TableMateriall = new THREE.MeshBasicMaterial({color: 0x872D1A  });
        var tablel = new THREE.Mesh(TableGeometryl, TableMateriall);
		tablel.position.set(-4.2,-1.6,0);
        PIEaddElement(tablel);
		
		var TableGeometryr = new THREE.BoxGeometry(0.3,6.0,0.1);
        var TableMaterialr = new THREE.MeshBasicMaterial({color: 0x872D1A  });
        var tabler = new THREE.Mesh(TableGeometryr, TableMaterialr);
        tabler.position.set(4.2,-1.6,0);
		PIEaddElement(tabler);
		
		var TableGeometryl1 = new THREE.BoxGeometry(0.3,0.5,0.1);
        var TableMateriall1 = new THREE.MeshBasicMaterial({color: 0x872D1A  });
        var tablel1 = new THREE.Mesh(TableGeometryl1, TableMateriall1);
		tablel1.position.set(-4.8,1.95,0);
        PIEaddElement(tablel1);
		
		var TableGeometryr1 = new THREE.BoxGeometry(0.3,0.5,0.1);
        var TableMaterialr1 = new THREE.MeshBasicMaterial({color: 0x872D1A  });
        var tabler1 = new THREE.Mesh(TableGeometryr1, TableMaterialr1);
        tabler1.position.set(4.8,1.95,0);
		PIEaddElement(tabler1);
		
		var BoxGeometry1 = new THREE.BoxGeometry(1.5, 0.5, 0.5);
        var BoxMaterial1 = new THREE.MeshBasicMaterial({color:  0x11C355   });            //North Pole-Green
        Box1 = new THREE.Mesh(BoxGeometry1, BoxMaterial1);
        Box1.position.set(-2.5, 2.0,0);
        PIEaddElement(Box1);
		PIEdragElement(Box1);
        PIEsetDrag(Box1, Box1Drag);
		
		var BoxGeometry2 = new THREE.BoxGeometry(1.5, 0.5, 0.5);
        var BoxMaterial2 = new THREE.MeshBasicMaterial({color:0xFFC300  });         //South Pole-Yellow
        Box2 = new THREE.Mesh(BoxGeometry2, BoxMaterial2);
        Box2.position.set(-1.0, 3.0,0);
        PIEaddElement(Box2);
		PIEdragElement(Box2);
        PIEsetDrag(Box2,Box2Drag);
		
		
		var BoxGeometry3 = new THREE.BoxGeometry(1.5, 0.5, 0.5);
        var BoxMaterial3 = new THREE.MeshBasicMaterial({color: 0xFFC300  });           //South Pole-Yellow
        Box3 = new THREE.Mesh(BoxGeometry3, BoxMaterial3);
        Box3.position.set(1.0, 2.0,0);
        PIEaddElement(Box3);
		PIEdragElement(Box3);
        PIEsetDrag(Box3, Box3Drag);
		
		
		var BoxGeometry4 = new THREE.BoxGeometry(1.5, 0.5, 0.5);
        var BoxMaterial4 = new THREE.MeshBasicMaterial({color: 0x11C355  });         //North Pole-Green
        Box4 = new THREE.Mesh(BoxGeometry4, BoxMaterial4);
        Box4.position.set(2.5, 2.0,0);
        PIEaddElement(Box4);
		PIEdragElement(Box4);
        PIEsetDrag(Box4, Box4Drag);
		
	resetExperiment();	
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
	PIEstartAnimation();
}
function resetExperiment()
{
    initialiseOtherVariables();  
        Box1.position.set(-2.5, 2.0,0);
	    //Box1.position.set(-12.0, 6.0,0);
		Box2.position.set(-1.0,2.0,0);
		Box3.position.set(1.0, 2.0,0);
		Box4.position.set(2.5, 2.0,0);
        l=0;

		
	    velocity=0.00;
		text1x=innerWidth/mySceneW*6.6;
		text1.style.left = text1x+ 'px';
        document.body.appendChild(text1);
		
		text2x=innerWidth/mySceneW*7.8;
        //text2x=625; 
		text2.style.left = text2x + 'px';
        document.body.appendChild(text2);
		
		text3x=innerWidth/mySceneW*9.1;
        //text3x=725; 
		text3.style.left = text3x + 'px';
        document.body.appendChild(text3);
        
		text4x=innerWidth/mySceneW*10.1;
		//text4x=805; 		
		text4.style.left = text4x + 'px';
        document.body.appendChild(text4);
}
var Box1X;
var Box2X;
var Box3X;
var Box4X;
var xt=0;
function updateExperimentElements(t, dt)
{
	
var T;      
var tempT;          /* Temporary time */
    Box1X = Box1.position.x;
    Box2X = Box2.position.x;
    Box3X = Box3.position.x;
    Box4X = Box4.position.x;
	T = dt / 1000.0;    /* convert to seconds */
   	if(((Box1X>=(-5.0))||(Box4X<=5.0)) && (Box1X<Box2X) &&(Box3X<Box4X))                                                        //'NS-SN'
			{
				if(Box1X>=-3.7 && Box4X<=3.7)
         	    {
					Box1X = Box1.position.x-0.01;
                    Box2X = Box2.position.x-0.01;
                    Box3X = Box3.position.x+0.01;
                    Box4X = Box4.position.x+0.01;
					Box1.position.set(Box1X,2.0, 0);
					Box2.position.set(Box2X ,2.0, 0);
					Box3.position.set(Box3X,2.0,0);
					Box4.position.set(Box4X,2.0,0);                
					
					text1x -=0.55;
					text1.style.left = text1x+ 'px';
					document.body.appendChild(text1);
		
					text2x -=0.55;
					text2.style.left = text2x + 'px';
					document.body.appendChild(text2);
		            
					text3x +=0.55;
					text3.style.left = text3x + 'px';
					document.body.appendChild(text3);
        
					text4x+=0.55;		
					text4.style.left = text4x + 'px';
					document.body.appendChild(text4);
					
				}
				else if(Box1X>=-3.7 && (Box4X>3.7) )
				{
					Box1X = Box1.position.x-0.01;
                    Box2X = Box2.position.x-0.01;
					Box1.position.set(Box1X,2.0, 0);
					Box2.position.set(Box2X , 2.0, 0);	
					
					text1x -=0.55;
					text1.style.left = text1x+ 'px';
					document.body.appendChild(text1);
		
					text2x -=0.55;
					text2.style.left = text2x + 'px';
					document.body.appendChild(text2);
		
				}
				else if(Box1X<-3.7 && (Box4X<=3.7))
				{
					Box3X = Box3.position.x+0.01;
                    Box4X = Box4.position.x+0.01;
					Box3.position.set(Box3X,2.0, 0);
					Box4.position.set(Box4X , 2.0, 0);	
								
					text3x +=0.55;
					text3.style.left = text3x + 'px';
					document.body.appendChild(text3);
        
					text4x+=0.55;		
					text4.style.left = text4x + 'px';
					document.body.appendChild(text4);
					

     		}
	    }
	     if((Box2X>=(-3.7)||(Box3X<=3.7))&&(Box2X<Box1X) &&(Box4X<Box3X))                                                        //'SN-NS'
			{
				
				if(Box2X>=-3.7 && Box3X<=3.7)
         	    {
					Box1X = Box1.position.x-0.01;
                    Box2X = Box2.position.x-0.01;
                    Box3X = Box3.position.x+0.01;
                    Box4X = Box4.position.x+0.01;
					Box1.position.set(Box1X,2.0, 0);
					Box2.position.set(Box2X , 2.0, 0);
					Box3.position.set(Box3X,2.0,0);
					Box4.position.set(Box4X,2.0,0);                
					
					text1x -=0.55;
					text1.style.left = text1x+ 'px';
					document.body.appendChild(text1);
		
					text2x -=0.55;
					text2.style.left = text2x + 'px';
					document.body.appendChild(text2);
		            
					text3x +=0.55;
					text3.style.left = text3x + 'px';
					document.body.appendChild(text3);
        
					text4x+=0.55;		
					text4.style.left = text4x + 'px';
					document.body.appendChild(text4);
				}
				else if(Box2X>=-3.7 && (Box3X>3.7) )
				{
					Box1X = Box1.position.x-0.01;
                    Box2X = Box2.position.x-0.01;
					Box1.position.set(Box1X,2.0, 0);
					Box2.position.set(Box2X , 2.0, 0);	
					
					text1x -=0.55;
					text1.style.left = text1x+ 'px';
					document.body.appendChild(text1);
		
					text2x -=0.55;
					text2.style.left = text2x + 'px';
					document.body.appendChild(text2);
					
				}
				else if(Box2X<-3.7 && (Box4X<=3.7))
				{
					
					Box3X = Box3.position.x+0.01;
                    Box4X = Box4.position.x+0.01;
					Box3.position.set(Box3X,2.0, 0);
					Box4.position.set(Box4X , 2.0, 0);
					
					text3x +=0.55;
					text3.style.left = text3x + 'px';
					document.body.appendChild(text3);
        
					text4x+=0.55;		
					text4.style.left = text4x + 'px';
					document.body.appendChild(text4);
				}
				
		
			    Box1.position.set(Box1X,2.0, 0);
	            Box2.position.set(Box2X , 2.0, 0);
	            Box3.position.set(Box3X,2.0,0);
                Box4.position.set(Box4X,2.0,0);				
	        }
		 if((Box2X>=(-4.8)||(Box3<=4.8))&&(Box1X<=Box3X-1.5)&&(Box2X<Box1X) &&(Box3X<Box4X))                                             //'SN-SN'
			{
         	    Box1X = Box1.position.x+0.01;
                Box2X = Box2.position.x+0.01;
                Box3X = Box3.position.x-0.01;
                Box4X = Box4.position.x-0.01;
				
				    text1x +=0.55;
					text1.style.left = text1x+ 'px';
					document.body.appendChild(text1);
		
					text2x +=0.55;
					text2.style.left = text2x + 'px';
					document.body.appendChild(text2);
		            
					text3x -=0.55;
					text3.style.left = text3x + 'px';
					document.body.appendChild(text3);
        
					text4x -=0.55;		
					text4.style.left = text4x + 'px';
					document.body.appendChild(text4);
				
			    Box1.position.set(Box1X,2.0, 0);
	            Box2.position.set(Box2X , 2.0, 0);
	            Box3.position.set(Box3X,2.0,0);
                Box4.position.set(Box4X,2.0,0);                
			
	        }
		 if((Box1X>=(-4.8)||(Box3<=4.8))&&(Box2X<=Box4X-1.5)&&(Box1X<Box2X)&&(Box4X<Box3X))                                              //NS-NS
			{
         	    Box1X = Box1.position.x+0.01;
                Box2X = Box2.position.x+0.01;
                Box3X = Box3.position.x-0.01;
                Box4X = Box4.position.x-0.01;
				
				    text1x +=0.55;
					text1.style.left = text1x+ 'px';
					document.body.appendChild(text1);
		
					text2x +=0.55;
					text2.style.left = text2x + 'px';
					document.body.appendChild(text2);
		            
					text3x -=0.55;
					text3.style.left = text3x + 'px';
					document.body.appendChild(text3);
        
					text4x -=0.55;		
					text4.style.left = text4x + 'px';
					document.body.appendChild(text4);
				
		
			    Box1.position.set(Box1X,2.0, 0);
	            Box2.position.set(Box2X , 2.0, 0);
	            Box3.position.set(Box3X,2.0,0);
                Box4.position.set(Box4X,2.0,0);                
			
			}
			else
			{
				
			}
}
