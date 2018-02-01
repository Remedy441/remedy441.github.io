
var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */

var LeftX;           //left slider label
var LeftY;           //right slider label
var RightX;          
var RightY;              
var LXdefault;       
var RXdefault;       
var LXmin;           
var LXmax;           
var RXmin;           
var RXmax;           
var step;  
var leftwt;
var rightwt;

var Box1;
var Box2;
var Box3;
var threadL1;
var threadL2;
var threadR1;
var threadR2;
var sizel=0.85;
var sizer=0.85;

var lt1x1=0.5;
var lt1x2=-2.6;
var lt2y1=0.5;
var lt2y2=-2.3;

var rt1x1=0.5;
var rt1x2=2.6;
var rt2y1=0.5;
var rt2y2=-2.3;
nlt2y2=lt2y2;
nrt2y2=rt2y2;

var nf=0.0;
var l=0;
var velocity=0.00;
function handleLeft(newValue)
{
    leftwt = newValue;
	if(leftwt>rightwt)
		l=1;
	else if(leftwt<rightwt)
		l=2;
	else l=0;
	
	if(newValue <=3.5)
		sizel=0.85;
	
	else sizel=1.0;
	Box2.scale.x=sizel;
	Box2.scale.y=sizel;
	Box2.scale.z=sizel;

	t1.geometry.vertices[0]=new THREE.Vector3(0,0,0);
			t1.geometry.vertices[1]=new THREE.Vector3(0,0,0);
			t1.geometry.verticesNeedUpdate=true;
			
			t1a1.geometry.vertices[0]=new THREE.Vector3(0,0,0);
			t1a1.geometry.vertices[1]=new THREE.Vector3(0,0,0);
			t1a1.geometry.verticesNeedUpdate=true;
			
			t1a2.geometry.vertices[0]=new THREE.Vector3(0,0,0);
			t1a2.geometry.vertices[1]=new THREE.Vector3(0,0,0);
			t1a2.geometry.verticesNeedUpdate=true;
			
			t2.geometry.vertices[0]=new THREE.Vector3(0,0,0);
			t2.geometry.vertices[1]=new THREE.Vector3(0,0,0);
			t2.geometry.verticesNeedUpdate=true;
			
			t2a1.geometry.vertices[0]=new THREE.Vector3(0,0,0);
			t2a1.geometry.vertices[1]=new THREE.Vector3(0,0,0);
			t2a1.geometry.verticesNeedUpdate=true;
			
			t2a2.geometry.vertices[0]=new THREE.Vector3(0,0,0);
			t2a2.geometry.vertices[1]=new THREE.Vector3(0,0,0);
			t2a2.geometry.verticesNeedUpdate=true;
	
	PIErender();
}
function handleRight(newValue)
{
    rightwt = newValue;
	if(leftwt>rightwt)
		l=1;
	else if(leftwt<rightwt)
		l=2;
	else l=0;
	if(rightwt<=3.5)
		sizer=0.85;
	
	else	sizer=1.0;
	Box3.scale.x=sizer;
	Box3.scale.y=sizer;
	Box3.scale.z=sizer;
	
	t1.geometry.vertices[0]=new THREE.Vector3(0,0,0);
			t1.geometry.vertices[1]=new THREE.Vector3(0,0,0);
			t1.geometry.verticesNeedUpdate=true;
			
			t1a1.geometry.vertices[0]=new THREE.Vector3(0,0,0);
			t1a1.geometry.vertices[1]=new THREE.Vector3(0,0,0);
			t1a1.geometry.verticesNeedUpdate=true;
			
			t1a2.geometry.vertices[0]=new THREE.Vector3(0,0,0);
			t1a2.geometry.vertices[1]=new THREE.Vector3(0,0,0);
			t1a2.geometry.verticesNeedUpdate=true;
			
			t2.geometry.vertices[0]=new THREE.Vector3(0,0,0);
			t2.geometry.vertices[1]=new THREE.Vector3(0,0,0);
			t2.geometry.verticesNeedUpdate=true;
			
			t2a1.geometry.vertices[0]=new THREE.Vector3(0,0,0);
			t2a1.geometry.vertices[1]=new THREE.Vector3(0,0,0);
			t2a1.geometry.verticesNeedUpdate=true;
			
			t2a2.geometry.vertices[0]=new THREE.Vector3(0,0,0);
			t2a2.geometry.vertices[1]=new THREE.Vector3(0,0,0);
			t2a2.geometry.verticesNeedUpdate=true;
	
	 PIErender();
}
function initialiseControlVariables()
{
    LeftX="Left Weight";                            //slider label   
    RightX="Right Weight";        
    LXdefault=2.5;         
    RXdefault=2.5;             
    LXmin=1;  
    LXmax=7.5;  
	RXmin=1; 
    RXmax=7.5;     
	step=0.1;
	pause=false;
	if(leftwt>rightwt)
		l=1;
	else if(leftwt<rightwt)
		l=2;
	else l=0;
	leftwt=LXdefault;
	rightwt=RXdefault;
  }


function initialiseControls()
{
	Left_mass="Left Mass:";
	Right_mass="Right Mass:";
    Net_Force="Net Force:";
	Force_Direction="Force Direction";
	Velocity="Velocity";
	Velocity_Direction="Velocity Direction";
    initialiseControlVariables();
    PIEaddInputSlider(LeftX, LXdefault, handleLeft, LXmin, LXmax, step);
    PIEaddInputSlider(RightX, RXdefault, handleRight, RXmin, RXmax, step);
    /* Create Display Panel*/ 
    PIEaddDisplayText(LeftX, LXdefault);  
    PIEaddDisplayText(RightX, RXdefault);		
	PIEaddDisplayText(Net_Force,0.0);
	PIEaddDisplayText(Force_Direction,"");
	PIEaddDisplayText(Velocity,0.0);
    PIEaddDisplayText(Velocity_Direction,"");	
 }

var helpContent;
function initialiseHelp()
{
    //helpContent="<html> <body> <p>This is help content </p> </body> </html>";
    helpContent = helpContent + "<h2>Balanced and Unbalanced Forces help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows three boxes.One on the top of the table,second on left and third on right side.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to two sliders.</p>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Weight of the left box.</li>";
    helpContent = helpContent + "<li>Weight of the left box.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the box on the table will move on the left or right side of the table depending on the weights of boxes on either side.</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animaion by uing the speed control buttons</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
	PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
   //  infoContent =  "<html> <body> <p>This is info content </p> </body> </html>";
    infoContent = infoContent + "<h2>Balanced and Unbalanced Forces info</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows three Boxes.</p>";
    infoContent = infoContent + "<h3>Balanced and Unbalanced Forces</h3>";
    infoContent = infoContent + "<p>When the weight of the left box is more than  box on the table moves in the left direction.</p>";
    infoContent = infoContent + "<p>When the weight of the right box is more than  box on the table moves in the right direction.</p>";
    infoContent = infoContent + "<p>When the weight of the boxes on either sides is same the box on the table doesn't move in any direction.</p>";
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
    sizel=0.85;
    sizer=0.85;
}

function initialiseOtherVariables()
{
			
	 leftwt=1;
	 rightwt=1;
	 lt1x1=1.7;
     lt1x2=-3.9;
     lt2y1=1.3;
     lt2y2=-2.0;
     rt1x1=1.6;
     rt1x2=3.9;
     rt2y1=1.3;
     rt2y2=-2.0;
	 nlt2y2=lt2y2;
     nrt2y2=rt2y2;
	 l=0;
	sizel=0.85;
    sizer=0.85;
    pause=false;
}

function loadExperimentElements()
{

    PIEsetExperimentTitle("Balanced and Unbalanced Forces");
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
		var TableGeometry = new THREE.BoxGeometry(6.8,0.3,5.1);
        var TableMaterial = new THREE.MeshBasicMaterial({color: 0x872D1A});
        var table = new THREE.Mesh(TableGeometry, TableMaterial);
		table.position.set(0,1.0,0);
        PIEaddElement(table);
		
		var TableGeometryl = new THREE.BoxGeometry(0.4,6.7,0.1);
        var TableMateriall = new THREE.MeshBasicMaterial({color: 0x872D1A  });
        var tablel = new THREE.Mesh(TableGeometryl, TableMateriall);
		tablel.position.set(-3.2,-2.2,0);
        PIEaddElement(tablel);
		
		var TableGeometryr = new THREE.BoxGeometry(0.4,6.7,0.1);
        var TableMaterialr = new THREE.MeshBasicMaterial({color: 0x872D1A  });
        var tabler = new THREE.Mesh(TableGeometryr, TableMaterialr);
        tabler.position.set(3.2,-2.2,0);
		PIEaddElement(tabler);
		
		var BoxGeometry1 = new THREE.BoxGeometry(1, 1, 1);
        var BoxMaterial1 = new THREE.MeshBasicMaterial({color: 0xFFC300  });
        Box1 = new THREE.Mesh(BoxGeometry1, BoxMaterial1);
        Box1.position.set(0, 2.6,0);
        PIEaddElement(Box1);
		
		var pulleyGL = new THREE.SphereGeometry(0.35,100,100);
		var pulleyML = new THREE.MeshBasicMaterial({color: 0xBBAFAD});
		var pulleyL = new THREE.Mesh(pulleyGL,pulleyML);
		pulleyL.position.set(-3.9,1.4,0);
		PIEaddElement(pulleyL);
		
		var pulleyGR = new THREE.SphereGeometry(0.35,100,100);
		var pulleyMR = new THREE.MeshBasicMaterial({color: 0xBBAFAD});
		var pulleyR = new THREE.Mesh(pulleyGR,pulleyMR);
		pulleyR.position.set(3.9,1.4,0);
		PIEaddElement(pulleyR);
		
		threadGeometryL1=new THREE.Geometry();
		threadGeometryL1.vertices.push(
		new THREE.Vector3(lt1x1,1.5,0),
		new THREE.Vector3(lt1x2,1.5,0));
	    threadMaterialL1 = new THREE.LineBasicMaterial({color: 0xffffff});
		threadL1=new THREE.Line(threadGeometryL1,threadMaterialL1)
		PIEaddElement(threadL1);
		
		var threadGeometryR1=new THREE.Geometry();
		threadGeometryR1.vertices.push(
		new THREE.Vector3(rt1x1,1.5,0),
		new THREE.Vector3(rt1x2,1.5,0));
		var threadMaterialR1 = new THREE.LineBasicMaterial({color: 0xffffff});
		threadR1=new THREE.Line(threadGeometryR1,threadMaterialR1)
		PIEaddElement(threadR1);
	
		var threadGeometryL2=new THREE.Geometry();
		var l2vertArray=threadGeometryL2.vertices;
		l2vertArray.push(new THREE.Vector3(-4.1,lt2y1,0),new THREE.Vector3(-4.1,lt2y2,0));
		threadGeometryL2.computeLineDistances();
		var threadMaterialL2 = new THREE.LineBasicMaterial({color: 0xffffff});
		threadL2=new THREE.Line(threadGeometryL2,threadMaterialL2)
		PIEaddElement(threadL2);
		
		threadGeometryR2=new THREE.Geometry();
		r2vertArray=threadGeometryR2.vertices;
		threadGeometryR2.vertices.push(
		new THREE.Vector3(4.1,rt2y1,0),
		new THREE.Vector3(4.1,rt2y2,0));
		var threadMaterialR2 = new THREE.LineBasicMaterial({color: 0xffffff});
		threadR2=new THREE.Line(threadGeometryR2,threadMaterialR2)
		PIEaddElement(threadR2);
		
		var BoxGeometry2 = new THREE.BoxGeometry(sizel, sizel, sizel);
        var BoxMaterial2 = new THREE.MeshBasicMaterial({color: 0x00ff00});
        Box2 = new THREE.Mesh(BoxGeometry2, BoxMaterial2);
		Box2.position.set(-4.1,-2.0,0);
		PIEaddElement(Box2);
		
		var BoxGeometry3 = new THREE.BoxGeometry(sizer, sizer, sizer);
        var BoxMaterial3 = new THREE.MeshBasicMaterial({color: 0x00ff00});
        Box3 = new THREE.Mesh(BoxGeometry3, BoxMaterial3);
		Box3.position.set(4.1,-2.0,0);
		PIEaddElement(Box3);
		
		t1g=new THREE.Geometry();
		t1g.vertices.push(
		new THREE.Vector3(-0.3,3.5,0),
		new THREE.Vector3(-1.3,3.5,0));
		var t1m = new THREE.LineBasicMaterial({color: 0x111111});
		t1=new THREE.Line(t1g,t1m)
		PIEaddElement(t1);
		
		t1a1g=new THREE.Geometry();
	    t1a1g.vertices.push(new THREE.Vector3(-1.0,3.7,0),new THREE.Vector3(-1.3,3.5,0));
		var t1a1m = new THREE.LineBasicMaterial({color: 0x111111});
		t1a1=new THREE.Line(t1a1g,t1a1m)
		PIEaddElement(t1a1);
		
		t1a2g=new THREE.Geometry();
	    t1a2g.vertices.push(new THREE.Vector3(-1.0,3.7,0),new THREE.Vector3(-1.3,3.7,0));
		var t1a2m = new THREE.LineBasicMaterial({color: 0x111111});
		t1a2=new THREE.Line(t1a2g,t1a2m)
		PIEaddElement(t1a2);
	
		
		t2g=new THREE.Geometry();
		t2g.vertices.push(
		new THREE.Vector3(0.3,3.5,0),
		new THREE.Vector3(1.3,3.5,0));
		var t2m = new THREE.LineBasicMaterial({color: 0x111111});
		t2=new THREE.Line(t2g,t2m)
		PIEaddElement(t2);
	
		t2a1g=new THREE.Geometry();
	    t2a1g.vertices.push(new THREE.Vector3(1.0,3.7,0),new THREE.Vector3(1.3,3.5,0));
		var t2a1m = new THREE.LineBasicMaterial({color: 0x111111});
		t2a1=new THREE.Line(t2a1g,t2a1m)
		PIEaddElement(t2a1);
		
		t2a2g=new THREE.Geometry();
	    t2a2g.vertices.push(new THREE.Vector3(1.0,3.3,0),new THREE.Vector3(1.3,3.5,0));
		var t2a2m = new THREE.LineBasicMaterial({color: 0x111111});
		t2a2=new THREE.Line(t2a2g,t2a2m)
		PIEaddElement(t2a2);
		
	resetExperiment();	
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    
}
function resetExperiment()
{
    initialiseOtherVariables();
	leftwt=2.5;         
    rightwt=2.5;  
	PIEaddDisplayText(LeftX, LXdefault);  
    PIEaddDisplayText(RightX, RXdefault);		
	Box1.position.set(0, 1.7,0);
    Box2.position.set(-4.1,-2.4,0);
	Box3.position.set(4.1,-2.4,0);	  
	threadL2.geometry.vertices[0] = new THREE.Vector3(-4.1,lt2y1,0);
	threadL2.geometry.vertices[1] = new THREE.Vector3(-4.1,lt2y2,0);
	
           // threadL2.geometry.computeLineDistances();
            threadL2.geometry.verticesNeedUpdate = true;
		   
	threadR2.geometry.vertices[0] = new THREE.Vector3(4.1,rt2y1,0);
	threadR2.geometry.vertices[1] = new THREE.Vector3(4.1,rt2y2,0);
    //        threadR2.geometry.computeLineDistances();
            threadR2.geometry.verticesNeedUpdate = true;
			
			t1.geometry.vertices[0]=new THREE.Vector3(0,0,0);
			t1.geometry.vertices[1]=new THREE.Vector3(0,0,0);
			t1.geometry.verticesNeedUpdate=true;
			
			t1a1.geometry.vertices[0]=new THREE.Vector3(0,0,0);
			t1a1.geometry.vertices[1]=new THREE.Vector3(0,0,0);
			t1a1.geometry.verticesNeedUpdate=true;
			
			t1a2.geometry.vertices[0]=new THREE.Vector3(0,0,0);
			t1a2.geometry.vertices[1]=new THREE.Vector3(0,0,0);
			t1a2.geometry.verticesNeedUpdate=true;
			
			t2.geometry.vertices[0]=new THREE.Vector3(0,0,0);
			t2.geometry.vertices[1]=new THREE.Vector3(0,0,0);
			t2.geometry.verticesNeedUpdate=true;
			
			t2a1.geometry.vertices[0]=new THREE.Vector3(0,0,0);
			t2a1.geometry.vertices[1]=new THREE.Vector3(0,0,0);
			t2a1.geometry.verticesNeedUpdate=true;
			
			t2a2.geometry.vertices[0]=new THREE.Vector3(0,0,0);
			t2a2.geometry.vertices[1]=new THREE.Vector3(0,0,0);
			t2a2.geometry.verticesNeedUpdate=true;
		Box2.scale.x=0.85;
		Box2.scale.y=0.85;
		Box2.scale.z=0.85;
		
		Box3.scale.x=0.85;
		Box3.scale.y=0.85;
		Box3.scale.z=0.85;
	    velocity=0.00;	
}
function updateExperimentElements(t, dt)
{
var newX1;           /* new X position of box1 */
var newY2;           /* new Y position of box2 */
var newY3;           /* new Y velocity of box3 */
nlt2y2;
nrt2y2;
var T;      
var tempT;          /* Temporary time */
var acc; 
    Box1X = Box1.position.x;
    Box2Y = Box2.position.y;
    Box3Y = Box3.position.y;
    T = dt / 1000.0;    /* convert to seconds */
    
	if(l==1) 
	{		
			if(Box1X>-2.8)
			{
				acc=((leftwt-rightwt)*(9.80))/(leftwt+rightwt+15);//assume mass of box on the table is 15units;
			    velocity=velocity+acc*T;
		        d=(velocity*T)+(acc*T*T*0.50);
			    nf=(leftwt-rightwt)*9.80;
			    newX1 = Box1X-d;
			    newY2 = Box2Y-d;
			    newY3 = Box3Y+d;
                nlt2y2=nlt2y2-d;
                nrt2y2=nrt2y2+d;
			    threadL2.geometry.vertices[1] = new THREE.Vector3(-4.1,nlt2y2,0);
                threadL2.geometry.verticesNeedUpdate = true;	
		
         		threadR2.geometry.vertices[1] = new THREE.Vector3(4.1,nrt2y2,0);
                threadR2.geometry.verticesNeedUpdate = true;
			
			    t1.geometry.vertices[0]=new THREE.Vector3(-0.3,3.5,0);
			    t1.geometry.vertices[1]=new THREE.Vector3(-1.3,3.5,0);
			    t1.geometry.verticesNeedUpdate=true;
			
		    	t1a1.geometry.vertices[0]=new THREE.Vector3(-1.0,3.7,0);
			    t1a1.geometry.vertices[1]=new THREE.Vector3(-1.3,3.5,0);
			    t1a1.geometry.verticesNeedUpdate=true;
			
		    	t1a2.geometry.vertices[0]=new THREE.Vector3(-1.0,3.3,0);
			    t1a2.geometry.vertices[1]=new THREE.Vector3(-1.3,3.5,0);
			    t1a2.geometry.verticesNeedUpdate=true;
			
			    Box1.position.set(newX1,Box1.position.y , 0);
	            Box2.position.set(Box2.position.x , newY2, 0);
	            Box3.position.set(Box3.position.x, newY3,0);	
	            PIEchangeDisplayText(LeftX, leftwt);
                PIEchangeDisplayText(RightX, rightwt);		
			    PIEchangeDisplayText(Net_Force,nf);
	            PIEchangeDisplayText(Force_Direction,"Left");
	            PIEchangeDisplayText(Velocity,parseFloat(velocity));
                PIEchangeDisplayText(Velocity_Direction,"Left");
				console.log("a");
			}	
			else
			{
				l=0;
				nf=0;
				velocity=0.0;
	            PIEchangeDisplayText(Velocity,velocity);
                PIEchangeDisplayText(Velocity_Direction,"");
				PIEchangeDisplayText(Net_Force,nf);
	            PIEchangeDisplayText(Force_Direction,"");
				t1.geometry.vertices[0]=new THREE.Vector3(0,0,0);
     			t1.geometry.vertices[1]=new THREE.Vector3(0,0,0);
	    		t1.geometry.verticesNeedUpdate=true;
		 	
		    	t1a1.geometry.vertices[0]=new THREE.Vector3(0,0,0);
			    t1a1.geometry.vertices[1]=new THREE.Vector3(0,0,0);
			    t1a1.geometry.verticesNeedUpdate=true;
			
		    	t1a2.geometry.vertices[0]=new THREE.Vector3(0,0,0);
			    t1a2.geometry.vertices[1]=new THREE.Vector3(0,0,0);
			    t1a2.geometry.verticesNeedUpdate=true;
			    	console.log("b");
			}
			
 			
    }
	if(l==2)
	    {
			if(Box1X<2.8)
			{
				acc=((rightwt-leftwt)*(9.80))/(leftwt+rightwt+15);//assume mass of box on the table is 15units;
			    velocity=velocity+acc*T;
		        d=(velocity*T)+(acc*T*T*0.50);
			    nf=(rightwt-leftwt)*9.80;
			    newX1 = Box1X+d;
			    newY2 = Box2Y+d;
			    newY3 = Box3Y-d;
                nlt2y2=nlt2y2+d;
                nrt2y2=nrt2y2-d;
					
			    threadL2.geometry.vertices[1] = new THREE.Vector3(-4.1,nlt2y2,0);
                threadL2.geometry.verticesNeedUpdate = true;
		
			    threadR2.geometry.vertices[1] = new THREE.Vector3(4.1,nrt2y2,0);
                threadR2.geometry.verticesNeedUpdate = true;
			
			   t2.geometry.vertices[0]=new THREE.Vector3(0.3,3.5,0);
			   t2.geometry.vertices[1]=new THREE.Vector3(1.3,3.5,0);
			   t2.geometry.verticesNeedUpdate=true;
			
			   t2a1.geometry.vertices[0]=new THREE.Vector3(1.0,3.7,0);
			   t2a1.geometry.vertices[1]=new THREE.Vector3(1.3,3.5,0);
			   t2a1.geometry.verticesNeedUpdate=true;
			
			   t2a2.geometry.vertices[0]=new THREE.Vector3(1.0,3.3,0);
			   t2a2.geometry.vertices[1]=new THREE.Vector3(1.3,3.5,0);
			   t2a2.geometry.verticesNeedUpdate=true;
			
			   Box1.position.set(newX1,Box1.position.y , 0);
	           Box2.position.set(Box2.position.x , newY2, 0);
	           Box3.position.set(Box3.position.x, newY3,0);	
	           PIEchangeDisplayText(LeftX, leftwt);
               PIEchangeDisplayText(RightX, rightwt);		
			   PIEchangeDisplayText(Net_Force,nf);
	           PIEchangeDisplayText(Force_Direction,"Right");
	           PIEchangeDisplayText(Velocity,velocity);
               PIEchangeDisplayText(Velocity_Direction,"Right");	
			}
			else
			{
				l=0;
				nf=0.0;
				velocity=0.0;
	            PIEchangeDisplayText(Velocity,velocity);
                PIEchangeDisplayText(Velocity_Direction,"");
				PIEchangeDisplayText(Net_Force,nf);
	            PIEchangeDisplayText(Force_Direction,"");
				
				t1a2.geometry.vertices[0]=new THREE.Vector3(0,0,0);
	    		t1a2.geometry.vertices[1]=new THREE.Vector3(0,0,0);
		    	t1a2.geometry.verticesNeedUpdate=true;
			
			    t2.geometry.vertices[0]=new THREE.Vector3(0,0,0);
			    t2.geometry.vertices[1]=new THREE.Vector3(0,0,0);
			    t2.geometry.verticesNeedUpdate=true;
			
		    	t2a1.geometry.vertices[0]=new THREE.Vector3(0,0,0);
			    t2a1.geometry.vertices[1]=new THREE.Vector3(0,0,0);
			    t2a1.geometry.verticesNeedUpdate=true;
			
		    	t2a2.geometry.vertices[0]=new THREE.Vector3(0,0,0);
			    t2a2.geometry.vertices[1]=new THREE.Vector3(0,0,0);
			    t2a2.geometry.verticesNeedUpdate=true;
			}
		}    
}

