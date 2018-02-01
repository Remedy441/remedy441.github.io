var batteryMaterial1,batteryGeometry1,battery1,battery2,batteryGeometry2,batteryMaterial2,FirstCurve,SecondCurve,ThirdCurve,FourthCurve;
var boxgeometry3,boxmaterial3,box3;
var boxgeometry, boxmaterial,box1,boxgeom,boxmat,box2,NailGeometry,NailMaterial,Nail,NailBase,Sg1,Sg2,Sm1,Sm2,ST1,ST2,count=0;
var count=0,c=1;
var v1=0,v2=0,v3=0,v4=0,v5=0,v6=0,v7=0,v8=0;
var first=0,second=0,third=0,fourth=0,fifth=0,sixth=0,seven=0;
var cone,sol;
var helpContent,x;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Magnetic And Non-Magnetic Materials Experiment Help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows the Behaviour of Magnetic And Non-Magnetic Materials</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<h4>You can Select the particular Material by clicking on the input commands which are located in control panel.</h4>";
    helpContent = helpContent + "<p>After Selecting the material from control panel you have to move the magnet towards th material.</p>";
    helpContent = helpContent + "<p>And you can check whether a material is attracted or not by seeing the Observation-Table which is provided in the top left corner</p>";
    helpContent = helpContent + "<li>StartButton&nbsp;&nbsp;:&nbsp;Starts The animation.</li>";
    helpContent = helpContent + "<li>StopButton&nbsp;&nbsp;:&nbsp;Stops The animation.</li>";
    helpContent = helpContent + "<li>Reset&nbsp;&nbsp;:&nbsp;Sets  all element's position original values.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Magnetic And Non-Magnetic Materials Experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows the Behaviour of Magnetic And Non-Magnetic Materials</p>";
    infoContent = infoContent + "<h3>Magnetic-Materials</h3>";
    infoContent = infoContent + "<p>The substances which are strongly attracted by magnets are called magnetic substances.For example, iron, cobalt, nickel and their alloys are magnetic substances.</p>";
    infoContent = infoContent + "<h3>Non-Magnetic Materials</h3>";
    infoContent = infoContent + "<p>The substances which are not attracted by a magnet are called non-magneticsubstances.For example, wood, paper, water, copper, glass, gold, silver, etc., arenon-magnetic substances.</p>";
    infoContent = infoContent + "<h3>Attractive Property</h3>";
    infoContent = infoContent + "<p>When we move a magnet over iron filings, they getattracted to the magnet. This is called attractive property of the magnet. Thisproperty is used in separating magnetic substances from non-magneticsubstances, e.g., in refining iron ore to separate iron from other impurities.</p>";
    infoContent = infoContent + "<h3>Directive Property</h3>";
    infoContent = infoContent + "<p>A freely suspended bar magnet always comes to restpointing to northÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“south direction. This property is known as the directiveproperty of the magnet. Sailors use this property for identifying the directionson the high seas and during nights.</p>";
    
    PIEupdateInfo(infoContent);
}

function loadExperimentElements()
{
var geometry;
var material;
var loader;
var texture;
	   initialiseInfo();
		   initialiseHelp();


PIEsetExperimentTitle("Magnetic And Non-Magnetic Materials");
PIEsetDeveloperName("Narendra Chintala");

var plane=new THREE.PlaneGeometry(220,220);
var p=new THREE.MeshBasicMaterial({color:0xBDB76B});
var pl=new THREE.Mesh(plane,p);
pl.position.z=-100;
PIEaddElement(pl);




geometry=new THREE.BoxGeometry(2,1.5,2);
material=new THREE.MeshPhysicalMaterial({color:'blue'});
magnet1=new THREE.Mesh(geometry,material);
magnet1.position.x=-2;
PIEaddElement(magnet1);



texture = new THREE.ImageUtils.loadTexture("bar1.png") ;

geometry=new THREE.BoxGeometry(6,1.5,2);
material=new THREE.MeshBasicMaterial({map:texture});
magnet2=new THREE.Mesh(geometry,material);
//magnet2.rotation.x+=3.3;
magnet2.position.x=3;
magnet2.position.z=3;
magnet2.position.y=-1.3;
PIEaddElement(magnet2);
magnet2.add(magnet1);

PIEdragElement(magnet2);
PIEsetDrag(magnet2, myBallDrag);


/* Section For BasketBall*/
tex = new THREE.ImageUtils.loadTexture("tennis.jpeg") ;
var geometry = new THREE.SphereGeometry( 1.5, 32, 32 );
var material = new THREE.MeshBasicMaterial( {map:tex} );
sphere = new THREE.Mesh( geometry, material );
sphere.position.set(-12	,-0.9,3);
sphere.rotation.x-=0.2;
sphere.visible=false;
PIEscene.add( sphere );


/* Section For Wood*/
texture = new THREE.TextureLoader().load( "wood1.jpeg" );
geometry=new THREE.CylinderGeometry(0.6,0.6,3,30);
material=new THREE.MeshBasicMaterial({map:texture});
cylinder1=new THREE.Mesh(geometry,material);
cylinder1.position.set(-12	,-1.5,3);
cylinder1.rotation.z=Math.PI/2;
cylinder1.visible=false;
PIEaddElement(cylinder1);


/* Section For Pipe*/
texture = new THREE.TextureLoader().load( "tail.jpg" );
geometry=new THREE.BoxGeometry(4,1.5,3);
material=new THREE.MeshBasicMaterial({map:texture});
cylinder3=new THREE.Mesh(geometry,material);
cylinder3.position.set(-11	,-1.7,2);
cylinder3.visible=false;
PIEaddElement(cylinder3);



texture = new THREE.TextureLoader().load( "images.jpeg" );
BaseGeometry2=new THREE.BoxGeometry(30,0.3,15);
BaseMaterial2=new THREE.MeshPhysicalMaterial({color:0xBDB76B,map:texture});
Table=new THREE.Mesh(BaseGeometry2,BaseMaterial2);
Table.rotation.x+=0.1;
Table.position.y=-2;
Table.position.x=-4;
Table.position.z=-1;
PIEaddElement(Table);

NailGroup=new THREE.Group();
NailGeometry = new THREE.CylinderGeometry( 0.3, 0.3, 3, 8 );
NailMaterial = new THREE.MeshPhysicalMaterial( {color: 0x708090} );
Nail= new THREE.Mesh( NailGeometry, NailMaterial );
Nail.position.set(-12	,-0.4,2);

NailGeometry = new THREE.CylinderGeometry( 0.6, 0.6, 0.4, 30 );
NailBase=new THREE.Mesh(NailGeometry,NailMaterial);
NailBase.position.set(6,0.4,0);
NailBase.rotation.x+=0.1;
NailBase.position.set(-12,-1.7,2);
NailBase.visible=false;
Nail.visible=false;
PIEaddElement(Nail);
PIEaddElement(NailBase);

BaseGeometry2=new THREE.BoxGeometry(8,0.3,0.3);
BaseMaterial2=new THREE.MeshPhysicalMaterial({color:0xBDB76B,map:texture});
Base1=new THREE.Mesh(BaseGeometry2,BaseMaterial2);
Base1.position.y=-5.5;
Base1.position.x=-15;
Base1.position.z=-5;
Base1.rotation.z=Math.PI/2;
PIEaddElement(Base1);

BaseGeometry2=new THREE.BoxGeometry(7,0.3,0.3);
BaseMaterial2=new THREE.MeshPhysicalMaterial({color:0xBDB76B,map:texture});
Base1=new THREE.Mesh(BaseGeometry2,BaseMaterial2);
Base1.position.y=-5.5;
Base1.position.x=-15;
Base1.rotation.z=Math.PI/2.2;
PIEaddElement(Base1);

BaseGeometry2=new THREE.BoxGeometry(8,0.3,0.3);
BaseMaterial2=new THREE.MeshPhysicalMaterial({color:0xBDB76B,map:texture});
Base1=new THREE.Mesh(BaseGeometry2,BaseMaterial2);
Base1.position.y=-5.5;
Base1.position.x=10;
Base1.position.z=-5;
Base1.rotation.z=Math.PI/-2;
PIEaddElement(Base1);

BaseGeometry2=new THREE.BoxGeometry(7,0.3,0.3);
BaseMaterial2=new THREE.MeshPhysicalMaterial({color:0xBDB76B,map:texture});
Base1=new THREE.Mesh(BaseGeometry2,BaseMaterial2);
Base1.position.y=-5.5;
Base1.position.x=10;
//Base1.position.z=-5;
Base1.rotation.z=Math.PI/-2.2;
PIEaddElement(Base1);

texture = new THREE.TextureLoader().load( "Scale.jpg" );
geometry=new THREE.PlaneGeometry(17,2);
material=new THREE.MeshPhysicalMaterial({map:texture});
scale=new THREE.Mesh(geometry,material);
scale.visible=false;
scale.position.set(-12,-1,2);
PIEaddElement(scale);



texture = new THREE.TextureLoader().load( "glass.jpeg" );
geometry=new THREE.CylinderGeometry(0.8,0.4,1.5,30,10,true);
material=new THREE.MeshBasicMaterial({map:texture,side:THREE.DoubleSide, transperant:true,opacity:0.9});
glass=new THREE.Mesh(geometry,material);
glass.position.set(-11	,-1,3);
glass.rotation.x+=0.3;
glass.visible=false;
PIEaddElement(glass);

var texture = THREE.ImageUtils.loadTexture( 'das.jpg');
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	
	var geometry = new THREE.PlaneGeometry( 3,1.5);
	var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
	note1 = new THREE.Mesh(geometry,material);
	note1.position.z=3.8;
	note1.position.x=-10;
	note1.position.y=-0.5;
	note1.visible=false;
	PIEaddElement(note1);

var texture = THREE.ImageUtils.loadTexture( 'one.jpg');
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	//texture.repeat.set( 1, 1);

	var geometry = new THREE.RingGeometry( 0.001, 0.8, 32 );
	var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
	c1 = new THREE.Mesh(geometry,material);
	c1.position.z=3;
	c1.position.x=-10;
	c1.position.y=-1.5;
	c1.visible=false;
	PIEaddElement(c1);



	
PIEaddInputCommand("BasketBall",Ball);
PIEaddInputCommand("Wood",Wood);
PIEaddInputCommand("IronNail",Hi);
PIEaddInputCommand("Brick",hello);
PIEaddInputCommand("Iron-Scale",Scale);
PIEaddInputCommand("Glass",Glass);
PIEaddInputCommand("Currency_Note",Note);
PIEaddInputCommand("Coin",coin);

ObserveIt();

		PIEsetAreaOfInterest(10,10, -12,-8);
		PIEcamera.position.x=-4.5;
}


function Ball() {


	n=1;
	note1.visible=false;
	glass.visible=false;
	magnet2.position.x=3;
	magnet2.position.z=3;
	magnet2.position.y=-1.3;
	sphere.visible=true;
	cylinder1.visible=false;
	cylinder3.visible=false;
	NailBase.visible=false;
	scale.visible=false;
	Nail.visible=false;
	c1.visible=false;
	PIErender();
	PIEstartAnimation();
	
}
count=0;
function Wood() {
	
			

			glass.position.set(-12	,-1,2);
			if(count==1)
			{
				count=0;
				Nail.position.set(-12	,-0.4,2);
				NailBase.position.set(-12	,-1.6,2);
			}
			else
			{
				count=1;
				Nail.position.set(-12	,-0.4,2);
				NailBase.position.set(-12	,-1.9,2);
					
			} 
			
			sphere.position.set(-12	,-1,2);
			//cylinder1.position.set(-12	,-1,3);
			// cylinder3.position.set(-11	,-1,2);

	n=2;
	glass.visible=false;
	magnet2.position.x=3;
	note1.visible=false;
	magnet2.position.z=3;
	magnet2.position.y=-1.3;
	sphere.visible=false;
	cylinder1.visible=true;
	NailBase.visible=false;
	Nail.visible=false;
	cylinder3.visible=false;
	scale.visible=false;
	c1.visible=false;
	PIErender();
	PIEstartAnimation();
}
function Hi() {
		n=3;
		glass.visible=false;
		magnet2.position.x=3;
		magnet2.position.z=3;
		magnet2.position.y=-1.3;
		sphere.visible=false;
		note1.visible=false;
		NailBase.visible=true;
		Nail.visible=true;
		cylinder1.visible=false;
		cylinder3.visible=false;
		scale.visible=false;
		c1.visible=false;
	
		PIErender();
		PIEstartAnimation();
}

function hello() {
	
			
	n=4;
	glass.visible=false;
	magnet2.position.x=3;
	magnet2.position.z=3;
	note1.visible=false;
	magnet2.position.y=-1.3;
	NailBase.visible=false;
	Nail.visible=false;
	sphere.visible=false;
	cylinder3.visible=true;
	cylinder1.visible=false;
	scale.visible=false;
	c1.visible=false;
	PIErender();
	PIEstartAnimation();
}

function Scale() {
			texture = new THREE.TextureLoader().load( "Scale.jpg" );
			geometry=new THREE.PlaneGeometry(17,2);
			material=new THREE.MeshPhysicalMaterial({map:texture});
			scale=new THREE.Mesh(geometry,material);
			scale.position.set(-12,-1,2);
			PIEaddElement(scale);
		n=5;
		//glass.visible=false;
		magnet2.position.x=3;
		magnet2.position.z=3;
		note1.visible=false;
		magnet2.position.y=-1.3;
		sphere.visible=false;
		NailBase.visible=false;
		Nail.visible=false;
		glass.visible=false;
		cylinder1.visible=false;
		cylinder3.visible=false;
		c1.visible=false;

		PIErender();
		PIEstartAnimation();
}


function Glass() {
		
			
		n=6;
		magnet2.position.x=3;
		magnet2.position.z=3;
		note1.visible=false;
		magnet2.position.y=-1.3;
		sphere.visible=false;
		NailBase.visible=false;
		Nail.visible=false;
		cylinder1.visible=false;
		cylinder3.visible=false;
		scale.visible=false;
		c1.visible=false;
		glass.visible=true;
		PIErender();
		PIEstartAnimation();
}


function Note() {


	n=7;
	glass.visible=false;
	magnet2.position.x=3;
	magnet2.position.z=3;
	magnet2.position.y=-1.3;
	sphere.visible=false;
	cylinder1.visible=false;
	cylinder3.visible=false;
	NailBase.visible=false;
	scale.visible=false;
	Nail.visible=false;
	note1.visible=true;
	c1.visible=false;
	PIErender();
	PIEstartAnimation();
	
}

function coin() {


	n=8;
	glass.visible=false;
	magnet2.position.x=3;
	magnet2.position.z=3;
	magnet2.position.y=-1.3;
	sphere.visible=false;
	cylinder1.visible=false;
	cylinder3.visible=false;
	NailBase.visible=false;
	scale.visible=false;
	Nail.visible=false;
	c1.visible=false;
	note1.visible=false;
	c1.visible=true;
	PIErender();
	PIEstartAnimation();
	
}

a=-3;
n=0;
s=0;
function myBallDrag(element, newpos)
{
	s=1;

	if (n==1)
	{
		// PIEsetCellInput("1", "1", "12", "Not-Attracted");
		a=-3;
		if (newpos.x < (-7.3) && newpos.y <= 0.9)
	    {
	    	myBallX = -7.3;
	    	myBallY=-1.3;
	    	myBallZ=newpos.z;
	    }

	    else
	    {
	    	myBallX = newpos.x;
	    	myBallY=newpos.y;
	    	myBallZ=newpos.z;
	    }

	    myBallY = newpos.y;
	    if (newpos.y < -1.3) { myBallY = -1.3; }
	    myBallZ = newpos.z;
	    if(newpos.x <= -4 && newpos.x >= -7)
		    {
		    	PIEsetCellInput("1", "1", "12", "Not-Attracted");
		    }
	}

	else if(n==2)
	{
		// PIEsetCellInput("2", "1", "12", "Not-Attracted");
		if (newpos.x < (-7.3) && newpos.y <= -0.4)
	    {
	    	myBallX = -7.3;
	    	myBallY=-1.3;
	    	myBallZ=newpos.z;
	    }

	    else
	    {
	    	myBallX = newpos.x;
	    	myBallY=newpos.y;
	    	myBallZ=newpos.z;
	    }

	    myBallY = newpos.y;
	    if (newpos.y < -1.3) { myBallY = -1.3; }
	    myBallZ = newpos.z;
	    if(newpos.x <= -4 && newpos.x >= -7)
		    {
		    	PIEsetCellInput("2", "1", "12", "Not-Attracted");
		    }
	}

	else if(n==3)
	{
	    myBallX = newpos.x;
	    if (newpos.x < a) { myBallX = a }
	    	else if(newpos.x >= -3.5 && newpos.x <= -2)
	    	{
	    		Attract();
	    	}
	    else if (newpos.x > (8)) { myBallX = 7 }
	    myBallY = newpos.y;
	    if (newpos.y < -1.3) { myBallY = -1.3; }
	    else if (newpos.y > 5) { myBallY = 5; }
	    myBallZ = newpos.z;
	    
		
	}

	else if(n==4)
	{
		
		a=-3;
		
	    	// PIEsetCellInput("4", "1", "12", "Not-Attracted");
	    if (newpos.x < (-5.7) && newpos.y < -0.1)
	    {
	    	myBallX = -5.7;
	    	myBallY=-1.3;
	    	myBallZ=newpos.z;
	    }

	    

	    else
	    {
	    	myBallX = newpos.x;
	    	myBallY=newpos.y;
	    	myBallZ=newpos.z;
	    }

	    myBallY = newpos.y;
	    if (newpos.y < -1.3) { myBallY = -1.3; }
	    myBallZ = newpos.z;
	    if(newpos.x <= -4 && newpos.x >= -5)
		    {
		    	PIEsetCellInput("4", "1", "12", "Not-Attracted");
		    }
	}

		else if(n==5)
		{
			

		    myBallX = newpos.x;
		    if (newpos.x < a) { myBallX = a }
		    	else if(newpos.x >= -2 && newpos.x <= -1)
		    	{
		    		Attract();
		    	}
		    else if (newpos.x > (8)) { myBallX = 7 }
		    myBallY = newpos.y;
		    if (newpos.y < -1.3) { myBallY = -1.3; }
		    else if (newpos.y > 5) { myBallY = 5; }
		    myBallZ = newpos.z;
		}


	else if(n==6)
		{
			
			    a=-3;
		    if (newpos.x < (-7.3) && newpos.y <= 0.2)
		    {
		    	
		    	myBallX = -7.3;
		    	myBallY=-1.3;
		    	myBallZ=newpos.z;
		    }

		    else
		    {
		    	myBallX = newpos.x;
		    	myBallY=newpos.y;
		    	myBallZ=newpos.z;
		    }

		    myBallY = newpos.y;
		    if (newpos.y < -1.3) { myBallY = -1.3; }
		    myBallZ = newpos.z;
		    if(newpos.x <= -4 && newpos.x >= -7)
		    {
		    	PIEsetCellInput("6", "1", "12", "Not-Attracted");
		    }
		   


		}

		else if (n==7)
	{
		// PIEsetCellInput("7", "1", "12", "Not-Attracted");
		a=-3;
		if (newpos.x < (-5.5) && newpos.y <= 0.9)
	    {
	    	myBallX = -5.5;
	    	myBallY=-1.3;
	    	myBallZ=newpos.z;
	    }

	    else
	    {
	    	myBallX = newpos.x;
	    	myBallY=newpos.y;
	    	myBallZ=newpos.z;
	    }

	    myBallY = newpos.y;
	    if (newpos.y < -1.3) { myBallY = -1.3; }
	    myBallZ = newpos.z;
	    if(newpos.x <= -4 && newpos.x >= -5)
		    {
		    	PIEsetCellInput("7", "1", "12", "Not-Attracted");
		    }

	}

	else if(n==8)
	{
	    myBallX = newpos.x;
	    if (newpos.x < a) { myBallX = a }
	    	else if(newpos.x >= -6.5 && newpos.x <= -2)
	    	{
	    		Attract();
	    	}
	    else if (newpos.x > (8)) { myBallX = 7 }
	    myBallY = newpos.y;
	    if (newpos.y < -1.3) { myBallY = -1.3; }
	    else if (newpos.y > 5) { myBallY = 5; }
	    myBallZ = newpos.z;
	    
		
	}

	else
	{
		myBallX = newpos.x;
	    if (newpos.x < (-13)) { myBallX = -13 }
	    else if (newpos.x > (11)) { myBallX = 11 }
	    myBallY = newpos.y;
	    if (newpos.y < -1.3) { myBallY = -1.3; }
	    else if (newpos.y > 8) { myBallY = 8; }
	    myBallZ = newpos.z;
	 }



    magnet2.position.set(myBallX, myBallY, myBallZ);
    //scale.position.set(myBallX, myBallY, myBallZ);
    
}
function updateExperimentElements(t,dt)
{
	
}

function Attract() {
	if(n==3)
	{
		
		groupMove();
	}

	if(n==5)
	{
		
			//Observe();

			
			groupMov();
	}

	if(n==8)
	{
		
			//Observe();

			
			groupMo();
	}

}

function groupMove() {
	
	NailBase.position.x = -3;
	Nail.position.x = -3;
	Nail.position.y = 0.3;
	NailBase.position.y = -1;
	PIEsetCellInput("3", "1", "12", "Attracted");
	magnet2.add(NailBase);
	magnet2.add(Nail);
	a=-15;
	PIEdragElement(magnet2);

	

}


function groupMov() {
	

	scale.position.x = -3;
	scale.position.z = -3;
	scale.position.y = 1;

	//scale.position.x = -1;
	magnet2.add(scale);
	PIEsetCellInput("5", "1", "12", "Attracted");
	a=-15;
	//PIEdragElement(magnet2);
	//scale.position.x = -3;
	

}
function groupMo() {
	

	c1.position.x = -3;
	c1.position.y = 0.5;
	c1.position.z = 1;
	magnet2.add(c1);
	PIEsetCellInput("8", "1", "12", "Attracted");
	a=-15;
	PIEdragElement(magnet2);
	

}
function resetExperiment()
{

		n=0;
		magnet2.remove(NailBase);
		magnet2.remove(Nail);
		magnet2.remove(c1);
		magnet2.position.x=3;
		magnet2.position.z=3;
		magnet2.position.y=-1.3;
		NailBase.visible=false;
		note1.visible=false;
		Nail.visible=false;
		sphere.visible=false;
		scale.visible=false;
		cylinder3.visible=false;
		cylinder1.visible=false;
		glass.visible=false;
		scale.visible=false;
		c1.visible=false;
		PIEsetCellInput("1", "1", "12", "");
		PIEsetCellInput("2", "1", "12", "");
		PIEsetCellInput("3", "1", "12", "");
		PIEsetCellInput("4", "1", "12", "");
		PIEsetCellInput("5", "1", "12", "");
		PIEsetCellInput("6", "1", "12", "");
		PIEsetCellInput("7", "1", "12", "");
		PIEsetCellInput("8", "1", "12", "");
		createNail();
		createCoin();


}


function createNail() {
	NailGeometry = new THREE.CylinderGeometry( 0.3, 0.3, 3, 8 );
NailMaterial = new THREE.MeshPhysicalMaterial( {color: 0x708090} );
Nail= new THREE.Mesh( NailGeometry, NailMaterial );
Nail.position.set(-12	,-0.4,2);
PIEaddElement(Nail);

NailGeometry = new THREE.CylinderGeometry( 0.6, 0.6, 0.4, 30 );
NailBase=new THREE.Mesh(NailGeometry,NailMaterial);
NailBase.position.set(6,0.4,0);
NailBase.rotation.x+=0.1;
NailBase.position.set(-12,-1.7,2);
NailBase.visible=false;
Nail.visible=false;

PIEaddElement(NailBase);
PIErender();
}

function createCoin() {
	var texture = THREE.ImageUtils.loadTexture( 'one.jpg');
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	//texture.repeat.set( 1, 1);

	var geometry = new THREE.RingGeometry( 0.001, 0.8, 32 );
	var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
	c1 = new THREE.Mesh(geometry,material);
	c1.position.z=3;
	c1.position.x=-10;
	c1.position.y=-1.5;
	c1.visible=false;
	PIEaddElement(c1);
	
}


function ObserveIt() {
	PIEcreateTable("Observation-Table", 9, 4, true);
    var headerRow=["Material","Result"];
    PIEupdateTableRow(0, headerRow);
    PIEupdateTableCell(1, 0, "<h5>BasketBall</h5>");
    PIEupdateTableCell(2, 0, "<h5>Wood</h5>");
    PIEupdateTableCell(3, 0, "<h5>IronNail</h5>");
    PIEupdateTableCell(4, 0, "<h5>Brick</h5>");
    PIEupdateTableCell(5, 0, "<h5>Iron-Scale</h5>");
    PIEupdateTableCell(6, 0, "<h5>Glass</h5>");
    PIEupdateTableCell(7, 0, "<h5>Currency_Note</h5>");
    PIEupdateTableCell(8, 0, "<h5>Coin</h5>");
    PIEsetCellInput("1", "1", "12", "");
    PIEsetCellInput("2", "1", "12", "");
    PIEsetCellInput("3", "1", "12", "");
    PIEsetCellInput("4", "1", "12", "");
    PIEsetCellInput("5", "1", "12", "");
    PIEsetCellInput("6", "1", "12", "");
    PIEsetCellInput("7", "1", "12", "");
    PIEsetCellInput("8", "1", "12", "");
}
