sum = 0;
iam = 0;
no = 1;
total = 0;
turn = 0;
value = 0;
t1=0,t2=0,t3=0,t4=0,t5=0,t6=0,t7=0,t8=0,t9=0,t10=0,t11=0,t12=0,t13=0,t14=0,t15=0,t16=0,t17=0;
var n1=n2=n3=n4=n5=n6=n7=n8=n0=n10=n11=n12=n13=n14=n15=n16=n17=n18=0;

 var correct
function first()
{
	
	if(div.innerHTML == result)
	{
		if(wrong.visible == true)
		{
			wrong.visible = false;
			PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();
		}
		correct.visible = true;	
		PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();
	}

	else
	{

		if(correct.visible == true)
		{
			correct.visible = false;
			PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();
		}
		wrong.visible = true;
		PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();
	}
}

function second() {
	if(div1.innerHTML == result)
	{
		if(wrong.visible == true)
		{
			wrong.visible = false;
			PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();
		}
		correct.visible = true;
		PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();
	}

	else

	{
		if(correct.visible == true)
		{
			correct.visible = false;
			PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();
		}

		wrong.visible = true;
		PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();
	}
}

function third() {
	if(div2.innerHTML == result)
	{
		if(wrong.visible == true)
		{
			wrong.visible = false;
			PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();
		}
		correct.visible = true;
		PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();
	}
	else

	{

		if(correct.visible == true)
		{
			correct.visible = false;
			PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();
		}
		wrong.visible = true;
		PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();
	}
}

function fourth() {
	if(div3.innerHTML == result)
	{
		if(wrong.visible == true)
		{
			wrong.visible = false;
			PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();
		}
		correct.visible = true;
		PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();
	}
	else

	{
		if(wrong.visible == true)
		{
			wrong.visible = false;
			PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();
		}
		if(correct.visible == true)
		{
			correct.visible = false;
			PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();
		}
		wrong.visible = true;
		PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();
	}
}

function fifth() {
	if(div4.innerHTML == result)
	{
		if(wrong.visible == true)
		{
			wrong.visible = false;
			PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();
		}

		correct.visible = true;
		PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();
	}
	else

	{
		if(correct.visible == true)
		{
			correct.visible = false;
			PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();
		}
		wrong.visible = true;

		PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();
	}
}

function sixth() {
	if(div5.innerHTML == result)
	{
		if(wrong.visible == true)
		{
			wrong.visible = false;
			PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();
		}
		correct.visible = true;
		PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();
	}

	else

	{
		if(correct.visible == true)
		{
			correct.visible = false;
			PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();
		}
		wrong.visible = true;
		PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();
	}
}

divv = document.createElement("h1");
divv.innerHTML = "Select_Answer";
divv.style.position= "absolute";
divv.style.left = "82%";
divv.style.padding = "10px";
divv.style.width= "7%";
divv.style.borderRadius = "10px";
// divv.style.backgroundColor = "blue";
divv.style.color = "purple";
divv.style.top = "62%";
divv.style.cursor = "pointer";
document.body.appendChild(divv);
div = document.createElement("button");
// div.innerHTML = x1;
div.style.position= "absolute";
div.style.left = "81%";
div.style.padding = "10px";
div.style.width= "7%";
div.style.borderRadius = "10px";
div.style.backgroundColor = "blue";
div.style.color = "white";
div.style.top = "73%";
div.style.cursor = "pointer";
document.body.appendChild(div);

div1 = document.createElement("button");
// div1.innerHTML = X2;
div1.style.width= "7%";
div1.style.position= "absolute";
div1.style.left = "81%";
div1.style.padding = "10px";
div1.style.borderRadius = "10px";
div1.style.backgroundColor = "blue";
div1.style.color = "white";
div1.style.top = "81%";

div1.style.cursor = "pointer";
document.body.appendChild(div1);

div2 = document.createElement("button");
// div2.innerHTML = X3;
div2.style.width= "7%";
div2.style.position= "absolute";
div2.style.left = "81%";
div2.style.padding = "10px";
div2.style.borderRadius = "10px";
div2.style.backgroundColor = "blue";
div2.style.color = "white";
div2.style.top = "89%";
div2.style.cursor = "pointer";
document.body.appendChild(div2);

div3 = document.createElement("button");
// div3.innerHTML = X4;
div3.style.position= "absolute";
div3.style.left = "90%";
div3.style.width= "7%";
div3.style.padding = "10px";
div3.style.borderRadius = "10px";
div3.style.backgroundColor = "blue";
div3.style.color = "white";
div3.style.cursor = "pointer";
div3.style.top = "89%";

div4 = document.createElement("button");
// div4.innerHTML = X5;
div4.style.position= "absolute";
div4.style.left = "90%";
div4.style.width= "7%";
div4.style.padding = "10px";
div4.style.borderRadius = "10px";
div4.style.backgroundColor = "blue";
div4.style.color = "white";
div4.style.cursor = "pointer";
div4.style.top = "73%";
document.body.appendChild(div4);
document.body.appendChild(div3);
div5 = document.createElement("button");
// div5.innerHTML = result;
div5.style.position= "absolute";
div5.style.left = "90%";
div5.style.width= "7%";
div5.style.padding = "10px";
div5.style.borderRadius = "10px";
div5.style.backgroundColor = "blue";
div5.style.color = "white";
div5.style.cursor = "pointer";
div5.style.top = "81%";
document.body.appendChild(div5);

div.onclick=first;
div1.onclick=second;
div2.onclick=third;
div3.onclick=fourth;
div4.onclick=fifth;
div5.onclick=sixth;


// img = document.createElement("img");
// img.setAttribute('src','15078959_1783352465326863_538804314065061200_n.jpg');
// img.style.width = "40%";
// img.style.height = "70%";
// img.style.top = "30%";
// img.style.left = "30%";
// img.style.display= "none";
// img.style.position = "absolute";
// document.body.appendChild(img);

function change(event)
{

var vector = new THREE.Vector3(( event.clientX / window.innerWidth ) * 2 - 1, -( event.clientY / window.innerHeight ) * 2 +1);
    vector = vector.unproject(PIEcamera);

    var raycaster = new THREE.Raycaster(PIEcamera.position, vector.sub(PIEcamera.position).normalize());
    var intersects = raycaster.intersectObjects(PIEscene.children,true);
    for(var i=0;i<intersects.length;i++)
    {
		 	var c=intersects[i].object.name.charAt(0);
		 	if(c=='o' || c == 't' || c == 'h' )
		 		break;
	}
	if(c=='t')
	{
		Result();
	}

	else if(c=='o')
	{
		Next();
	}

	else if(c=='h')
	{
		Steps();
	}
}
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Two digit addition using money Experiment Help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows the addition of two numbers using money</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<h4>There are 3 options provided for you on the screen</h4>";
        helpContent = helpContent + "<h4>First:Answer</h4>";
          helpContent = helpContent + "<li>By this option you can check the answer directly</li>";
          helpContent = helpContent + "<h4>Second:Next</h4>";
          helpContent = helpContent + "<li>By choosing this option you can go for next two numbers</li>";
          helpContent = helpContent + "<h4>Third:Learn_Steps</h4>";
          helpContent = helpContent + "<li>If you select this option you will be observing the steps involved in the addtion.</li>";
             helpContent = helpContent + "</ul>";
           helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>StartButton&nbsp;&nbsp;:&nbsp;Starts The animation.</li>";
    helpContent = helpContent + "<li>StopButton&nbsp;&nbsp;:&nbsp;Stops The animation.</li>";
    helpContent = helpContent + "<li>Reset&nbsp;&nbsp;:&nbsp;Sets  all element's position original values.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<h4>You can pause and resume the animation by using the pause/play nutton on the top line</h4>";
    
    PIEupdateHelp(helpContent);
}

function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Two digit addition using money Experiment Concept</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows the addition of two numbers using money</p>";
   
    infoContent = infoContent + "<p>In this experiment we will show addition of 2 numbers</p>";
    infoContent = infoContent + "<p>We will be using 2 numbers in the form of money</p>";
   
    infoContent = infoContent + "<p>Number1 is the first number in the addition and Number 2 is the second number in the addition.</p>";
    infoContent = infoContent + "<p>finally result will be displayed at the top right corner.</p>";
     infoContent = infoContent + "<p>This is two digit addition.So,the maximum values for number1 and number2 are 99</p>";
     
      infoContent = infoContent + "<p>The sum will be 199 at maximum</p>";

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

function quiz() {
x1=Math.floor((Math.random() * 180) + 10); 
choice=Math.floor((Math.random() * 6) + 1); 
X2=Math.floor((Math.random() * 180) + 10);
X3=Math.floor((Math.random() * 180) + 10);
X4=Math.floor((Math.random() * 180) + 10);
X5=Math.floor((Math.random() * 180) + 10);

if(choice == 1)
{
	div.innerHTML = result;
	div1.innerHTML = x1;
	div2.innerHTML = X2;
	div3.innerHTML = X3;
	div4.innerHTML = X4;
	div5.innerHTML = X5;
}

else if(choice == 2)
{
	div1.innerHTML = result;
	div.innerHTML = x1;
	div2.innerHTML = X2;
	div3.innerHTML = X3;
	div4.innerHTML = X4;
	div5.innerHTML = X5;
}

else if(choice == 3)
{
	div2.innerHTML = result;
	div1.innerHTML = x1;
	div.innerHTML = X2;
	div3.innerHTML = X3;
	div4.innerHTML = X4;
	div5.innerHTML = X5;
}

else if(choice == 4)
{
	div3.innerHTML = result;
	div1.innerHTML = x1;
	div2.innerHTML = X2;
	div.innerHTML = X3;
	div4.innerHTML = X4;
	div5.innerHTML = X5;
}

else if(choice == 5)
{
	div4.innerHTML = result;
	div1.innerHTML = x1;
	div2.innerHTML = X2;
	div3.innerHTML = X3;
	div.innerHTML = X4;
	div5.innerHTML = X5;
}

else if(choice == 6)
{
	div5.innerHTML = result;
	div1.innerHTML = x1;
	div2.innerHTML = X2;
	div3.innerHTML = X3;
	div4.innerHTML = X4;
	div.innerHTML = X5;
}
}
function loadExperimentElements()
{
var geometry;
var material;
var loader;
var texture;
	   initialiseInfo();
	   initialiseHelp();
       initialiseScene();
       initialiseOtherVariables();
       PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
	

PIEsetExperimentTitle("Two Digit Addition Using Money");
PIEsetDeveloperName("Narendra Chintala");

texture = new THREE.ImageUtils.loadTexture( "on.jpg",{},function (){PIErender();PIErender();PIErender();PIErender();} );
var plane=new THREE.PlaneGeometry(180,80);
var p=new THREE.MeshBasicMaterial({map:texture});
var pl=new THREE.Mesh(plane,p);
pl.position.z=-100;
PIEaddElement(pl);



geometry=new THREE.PlaneGeometry(0.3,1);
material=new THREE.MeshBasicMaterial({color:'green'});
plane=new THREE.Mesh(geometry,material);
plane.position.y=-2.5;
// PIEaddElement(plane);

geometry=new THREE.PlaneGeometry(0.1,125);
material=new THREE.MeshBasicMaterial({color:'green'});
plane=new THREE.Mesh(geometry,material);
plane.position.x=2;
plane.position.y=-1.5;
plane.rotation.z = Math.PI/2;
PIEaddElement(plane);

geometry=new THREE.PlaneGeometry(0.1,125);
material=new THREE.MeshBasicMaterial({color:'green'});
plane=new THREE.Mesh(geometry,material);
plane.position.x=10;
plane.position.y=-1.5;
PIEaddElement(plane);


// texture = new THREE.ImageUtils.loadTexture( "correct.png",{},function (){PIErender();PIErender();PIErender();PIErender();} );
// geometry=new THREE.PlaneGeometry(6,5);
// material=new THREE.MeshBasicMaterial({map:texture});
// plane=new THREE.Mesh(geometry,material);
// // plane.position.x=2;
// plane.position.y=-4.5;
// // plane.rotation.z = Math.PI/2;
// PIEaddElement(plane);

geometry=new THREE.PlaneGeometry(0.3,125);
material=new THREE.MeshBasicMaterial({color:'green'});
plane=new THREE.Mesh(geometry,material);
plane.position.x=-8;
plane.position.y=-2;
// plane.rotation.z = Math.PI/2;
// PIEaddElement(plane);

geometry=new THREE.PlaneGeometry(0.3,125);
material=new THREE.MeshBasicMaterial({color:'green'});
plane=new THREE.Mesh(geometry,material);
plane.position.x=9.8;
plane.position.y=-2;
// plane.rotation.z = Math.PI/2;
// PIEaddElement(plane);

geometry=new THREE.PlaneGeometry(0.3,125);
material=new THREE.MeshBasicMaterial({color:'green'});
plane=new THREE.Mesh(geometry,material);
plane.position.x=5.5;
plane.position.y=-2;
// plane.rotation.z = Math.PI/2;
// PIEaddElement(plane);

var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry( "Yeah...Correct", { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'blue' });

                correct = new THREE.Mesh(southGeometry ,southMaterial );
                correct.position.set(-4.5,-2.7, 15) ;
                correct.visible=false;
                PIEaddElement( correct );})

                var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry( "OOPS....Wrong", { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'blue' });

                wrong = new THREE.Mesh(southGeometry ,southMaterial );
                wrong.position.set(-4.5,-2.7, 15) ;
                wrong.visible=false;
                PIEaddElement( wrong );})

var texture = THREE.ImageUtils.loadTexture( 'next.png');
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	//texture.repeat.set( 1, 1);

	var geometry = new THREE.RingGeometry( 0.001, 1.5, 32 );
	var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
	box1 = new THREE.Mesh(geometry,material);
	box1.position.x  = 14;
	box1.position.y  = 3.7;
	box1.name = "one";
	PIEaddElement(box1);
	
	
	var texture = THREE.ImageUtils.loadTexture( 'answer.png');
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	var geometry = new THREE.RingGeometry( 0.001, 1.5	, 32 );
	var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
	box2 = new THREE.Mesh(geometry,material);
	box2.position.x  = 14;
	box2.position.y  = 7;
	box2.name = "two";
	PIEaddElement(box2);
    	
    
	var geometry = new THREE.RingGeometry( 0.001, 1.5, 32 );
	var texture = THREE.ImageUtils.loadTexture( 'steps.jpg');
	var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
	box3 = new THREE.Mesh(geometry,material);
	box3.position.x  = 14;
	box3.position.y  = 0;
	box3.name = "hi";
	PIEaddElement(box3);

	window.addEventListener("click",change);
    
addText();
addMoney();
MoreMoney();
// addDragControls();

quiz();





		PIEsetAreaOfInterest(10,10, -12,-8);
		// PIEcamera.position.x=-4.5;
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
	
	PIEdragElement(c11);
	PIEsetDrag(c11, c11Drag);
	
	PIEdragElement(c12);
	PIEsetDrag(c12, c12Drag);
	
	PIEdragElement(c13);
	PIEsetDrag(c13, c13Drag);
	
	PIEdragElement(c14);
	PIEsetDrag(c14, c14Drag);
	
	PIEdragElement(c15);
	PIEsetDrag(c15, c15Drag);
	
	PIEdragElement(c16);
	PIEsetDrag(c16, c16Drag);
	
	PIEdragElement(c17);
	PIEsetDrag(c17, c17Drag);
	
	PIEdragElement(c9);
	PIEsetDrag(c18, c18Drag);

	PIEdragElement(c1);
	PIEsetDrag(note1, c1Drag);
	
	PIEdragElement(c2);
	PIEsetDrag(note2, c2Drag);
	
	PIEdragElement(c3);
	PIEsetDrag(note3, c3Drag);
	
	PIEdragElement(c4);
	PIEsetDrag(note4, c4Drag);
	
	PIEdragElement(c5);
	PIEsetDrag(note5, c5Drag);
	
	PIEdragElement(c6);
	PIEsetDrag(note6, c6Drag);
	
	PIEdragElement(c7);
	PIEsetDrag(note7, c7Drag);
	
	PIEdragElement(c8);
	PIEsetDrag(note8, c8Drag);
	
	PIEdragElement(c9);
	PIEsetDrag(note9, c9Drag);

	PIEdragElement(c10);
	PIEsetDrag(note10, c10Drag);
	
	PIEdragElement(c11);
	PIEsetDrag(note11, c11Drag);
	
	PIEdragElement(c12);
	PIEsetDrag(note12, c12Drag);
	
	PIEdragElement(c13);
	PIEsetDrag(note13, c13Drag);
	
	PIEdragElement(c14);
	PIEsetDrag(note14, c14Drag);
	
	PIEdragElement(c15);
	PIEsetDrag(note15, c15Drag);
	
	PIEdragElement(c16);
	PIEsetDrag(note16, c16Drag);
	
	PIEdragElement(c17);
	PIEsetDrag(note17, c17Drag);
	
	PIEdragElement(c18);
	PIEsetDrag(c18, c18Drag);
	
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
	
	PIEdragElement(note11);
	PIEsetDrag(note11, note11Drag);
	
	PIEdragElement(note12);
	PIEsetDrag(note12, note12Drag);
	
	PIEdragElement(note13);
	PIEsetDrag(note13, note13Drag);
	
	PIEdragElement(note14);
	PIEsetDrag(note14, note14Drag);
	
	PIEdragElement(note15);
	PIEsetDrag(note15, note15Drag);
	
	PIEdragElement(note16);
	PIEsetDrag(note16, note16Drag);
	
	PIEdragElement(note17);
	PIEsetDrag(note17, note17Drag);
	
	PIEdragElement(note18);
	PIEsetDrag(note18, note18Drag);
	

	

	
	

	
}
t = 0;

function note1Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	note1.position.set(mbx,mby,mbz);
	if(correct.visible == true)
	{
		correct.visible = false;
	}

	if(wrong.visible == true)
	{
		wrong.visible = false;
	}

	if(mby <= -2 && mby >= -4)
	{
		if(n1 == 0)
		{
			value += 10;
			n1 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}



function note2Drag(element,newpos) {
	
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	note2.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(n2 == 0)
		{
			value += 10;
			n2 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function note3Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	note3.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(n3 == 0)
		{
			value += 10;
			n3 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function note4Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	note4.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(n4 == 0)
		{
			value += 10;
			n4 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function note5Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	note5.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(n5== 0)
		{
			value += 10;
			n5 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function note6Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	note6.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(n6 == 0)
		{
			value += 10;
			n6 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function note7Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	note7.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(n7 == 0)
		{
			value += 10;
			n7 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function note8Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	note8.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(n8 == 0)
		{
			value += 10;
			n8 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function note9Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	note9.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(n9 == 0)
		{
			value += 10;
			n9 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function note10Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	note10.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(n10 == 0)
		{
			value += 10;
			n10 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function note11Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	note11.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(n11 == 0)
		{
			value += 10;
			n11 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function note12Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	note12.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(n12 == 0)
		{
			value += 10;
			n12 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function note13Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	note13.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(n13 == 0)
		{
			value += 10;
			n13 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function note14Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	note14.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(n14 == 0)
		{
			value += 10;
			n14 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function note15Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	note15.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(n15 == 0)
		{
			value += 10;
			n15 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function note16Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	note16.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(n16 == 0)
		{
			value += 10;
			n16 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function note17Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	note17.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(t17 == 0)
		{
			value += 10;
			t17 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function note18Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	note18.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(t18 == 0)
		{
			value += 10;
			t18 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}


function c1Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	c1.position.set(mbx,mby,mbz);
	if(correct.visible == true)
	{
		correct.visible = false;
	}

	if(wrong.visible == true)
	{
		wrong.visible = false;
	}

	if(mby <= -2 && mby >= -4)
	{
		if(t == 0)
		{
			value++;
			t = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function c2Drag(element,newpos) {
	
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	c2.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(t1 == 0)
		{
			value++;
			t1 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function c3Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	c3.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(t2 == 0)
		{
			value++;
			t2 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function c4Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	c4.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(t3 == 0)
		{
			value++;
			t3 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function c5Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	c5.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(t4 == 0)
		{
			value++;
			t4 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function c6Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	c6.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(t5 == 0)
		{
			value++;
			t5 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function c7Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	c7.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(t6 == 0)
		{
			value++;
			t6 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function c8Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	c8.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(t7 == 0)
		{
			value++;
			t7 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function c9Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	c9.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(t8 == 0)
		{
			value++;
			t8 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function c10Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	c10.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(t9 == 0)
		{
			value++;
			t9 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function c11Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	c11.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(t10 == 0)
		{
			value++;
			t10 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function c12Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	c12.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(t11 == 0)
		{
			value++;
			t11 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function c13Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	c13.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(t12 == 0)
		{
			value++;
			t12 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function c14Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	c14.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(t13 == 0)
		{
			value++;
			t13 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function c15Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	c15.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(t14 == 0)
		{
			value++;
			t14 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function c16Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	c16.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(t15 == 0)
		{
			value++;
			t15 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function c17Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	c17.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(t16 == 0)
		{
			value++;
			t17 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function c18Drag(element,newpos) {
	var mbx = newpos.x;
	var mby = newpos.y;
	var mbz = newpos.z;
	c18.position.set(mbx,mby,mbz);

	if(mby <= -2 && mby >= -4 )
	{
		if(t17 == 0)
		{
			value++;
			t17 = 1;
			PIEscene.remove(three);
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})

		}
		
		
		
	}

}

function showit() {

	var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry( value, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})
	
}
function Next() {
	addDragControls();
	value = 0;
	n1=n2=n3=n4=n5=n6=n7=n8=n0=n10=n11=n12=n13=n14=n15=n16=n17=n18=0;
	t=t1=t2=t3=t4=t5=t6=t7=t8=t9=t10=t11=t12=t13=t14=t15=t16=t17=0;
	total  = 0;
	count = 0;
	PIEscene.remove(one);
	PIEscene.remove(two);
	PIEscene.remove(three);

	if(turn != 0)
	{
		PIEscene.remove(newnote);
	}

	if(note.visible == true)
	{
		PIEscene.remove(note1);
	}
	if(note1.visible == true)
	{
		PIEscene.remove(note1);
	}
	
	if(note2.visible == true)
	{
		PIEscene.remove(note2);
	}

	if(note3.visible == true)
	{
		PIEscene.remove(note3);
	}

	if(note4.visible == true)
	{
		PIEscene.remove(note4);
	}

	if(note5.visible == true)
	{
		PIEscene.remove(note5);
	}

	if(note6.visible == true)
	{
		PIEscene.remove(note6);
	}

	if(note7.visible == true)
	{
		PIEscene.remove(note7);
	}

	if(note8.visible == true)
	{
		PIEscene.remove(note8);
	}

	if(note9.visible == true)
	{
		PIEscene.remove(note9);
	}

	if(note10.visible == true)
	{
		PIEscene.remove(note10);
	}
	
	if(note11.visible == true)
	{
		PIEscene.remove(note11);
	}

	if(note12.visible == true)
	{
		PIEscene.remove(note12);
	}

	if(note13.visible == true)
	{
		PIEscene.remove(note13);
	}

	if(note14.visible == true)
	{
		PIEscene.remove(note14);
	}

	if(note15.visible == true)
	{
		PIEscene.remove(note15);
	}

	if(note16.visible == true)
	{
		PIEscene.remove(note16);
	}

	if(note17.visible == true)
	{
		PIEscene.remove(note17);
	}

	if(note18.visible == true)
	{
		PIEscene.remove(note18);
	}

	if(c1.visible == true)
	{
		PIEscene.remove(c1);
	}
	
	if(c2.visible == true)
	{
		PIEscene.remove(c2);
	}

	if(c3.visible == true)
	{
		PIEscene.remove(c3);
	}

	if(c4.visible == true)
	{
		PIEscene.remove(c4);
	}

	if(c5.visible == true)
	{
		PIEscene.remove(c5);
	}

	if(c6.visible == true)
	{
		PIEscene.remove(c6);
	}

	if(c7.visible == true)
	{
		PIEscene.remove(c7);
	}

	if(c8.visible == true)
	{
		PIEscene.remove(c8);
	}

	if(c9.visible == true)
	{
		PIEscene.remove(c9);
	}

	if(c10.visible == true)
	{
		PIEscene.remove(c10);
	}

	if(c11.visible == true)
	{
		PIEscene.remove(c11);
	}

	if(c12.visible == true)
	{
		PIEscene.remove(c12);
	}

	if(c13.visible == true)
	{
		PIEscene.remove(c13);
	}

	if(c14.visible == true)
	{
		PIEscene.remove(c14);
	}

	if(c15.visible == true)
	{
		PIEscene.remove(c15);
	}

	if(c16.visible == true)
	{
		PIEscene.remove(c16);
	}

	if(c17.visible == true)
	{
		PIEscene.remove(c17);
	}

	if(c18.visible == true)
	{
		PIEscene.remove(c18);
	}

	if(note.visible == true)
	{
		PIEscene.remove(note);
	}

	if(c19.visible == true)
	{
		c19.visible=false;
	}

	if(c20.visible == true)
	{
		c20.visible=false;
	}

	if(c21.visible == true)
	{
		c21.visible=false;
	}

	if(c22.visible == true)
	{
		c22.visible=false;
	}

	if(c23.visible == true)
	{
		c23.visible=false;
	}

	if(c24.visible == true)
	{
		c24.visible=false;
	}

	if(c25.visible == true)
	{
		c25.visible=false;
	}

	if(c26.visible == true)
	{
		c26.visible=false;
	}

	if(c27.visible == true)
	{
		c27.visible=false;
	}

	if(note19.visible == true)
	{
		note19.visible=false;
	}

	if(note20.visible == true)
	{
		note20.visible=false;
	}

	if(note21.visible == true)
	{
		note21.visible=false;
	}

	if(note22.visible == true)
	{
		note22.visible=false;
	}

	if(note23.visible == true)
	{
		note23.visible=false;
	}

	if(note24.visible == true)
	{
		note24.visible=false;
	}

	if(note25.visible == true)
	{
		note25.visible=false;
	}

	if(note26.visible == true)
	{
		note26.visible=false;
	}

	if(c27.visible == true)
	{
		c27.visible=false;
	}
	addMoney();quiz();
	PIEscene.remove(correct);
	var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry( "Yeah...Correct", { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'blue' });

                correct = new THREE.Mesh(southGeometry ,southMaterial );
                correct.position.set(-4.5,-2.7, 15) ;
                correct.visible=false;
                PIEaddElement( correct );})

                PIEscene.remove(wrong);

                var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry( "OOPS..Wrong", { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'blue' });

                wrong = new THREE.Mesh(southGeometry ,southMaterial );
                wrong.position.set(-4.5,-2.7, 15) ;
                wrong.visible=false;
                PIEaddElement( wrong );})

	addNumbers();
	PIErender();

}

function Steps() {
	if(correct.visible=true)
		correct.visible=false;

	if(wrong.visible=true)
		wrong.visible=false;
	sum = 0;
	iam =0;
	if(note19.visible == true)
	{
		note19.visible=false;
	}

	if(note20.visible == true)
	{
		note20.visible=false;
	}

	if(note21.visible == true)
	{
		note21.visible=false;
	}

	if(note22.visible == true)
	{
		note22.visible=false;
	}

	if(note23.visible == true)
	{
		note23.visible=false;
	}

	if(note24.visible == true)
	{
		note24.visible=false;
	}

	if(note25.visible == true)
	{
		note25.visible=false;
	}

	if(note26.visible == true)
	{
		note26.visible=false;
	}

	if(note27.visible == true)
	{
		note27.visible=false;
	}

	if(note.visible == true)
	{
		note.visible=false;
	}

	if(c19.visible == true)
	{
		c19.visible=false;
	}

	if(c20.visible == true)
	{
		c20.visible=false;
	}

	if(c21.visible == true)
	{
		c21.visible=false;
	}

	if(c22.visible == true)
	{
		c22.visible=false;
	}

	if(c23.visible == true)
	{
		c23.visible=false;
	}

	if(c24.visible == true)
	{
		c24.visible=false;
	}

	if(c25.visible == true)
	{
		c25.visible=false;
	}

	if(c26.visible == true)
	{
		c26.visible=false;
	}

	if(c27.visible == true)
	{
		c27.visible=false;
	}
	count = 1;
	PIEscene.remove(three);
	PIErender();
	PIEstartAnimation();
}
count = 1;

function updateExperimentElements(t,dt)
{
  if(t != 0)
  {

  		if(sum == 10)
  		{
  			changeit();
  			
  		}

  		if(iam == 10)
  		{
  			changeitagain();
  		}

  		if(count == 1)
  		{

  			if(c1.visible == true)
  			{
  				if(c1.position.y >= -6)
  				{
  					c1.position.y -= 0.2;
  					c1.rotation.y -= 0.2;

  				}
  				else{
					c1.rotation.y = 0;
  					total++;
  					sum++;
  					count=2;
  					show();
  				}
  			}
  			else count=2;
  		}

  		else if(count == 2)
  		{
  			if(c2.visible == true)
  			{
  				if(c2.position.y >= -6)
  				{
  					c2.position.y -= 0.2;
  					c2.rotation.y -= 0.2;

  				}
  				else{
  					c2.rotation.y = 0;
  					total++;
	                sum++;
	  				count=3;show();
  				}
  			}
  			else count=3;
  		}

  		else if(count == 3)
  		{
  			if(c3.visible == true)
  			{
  				if(c3.position.y >= -6)
  				{
  					c3.position.y -= 0.2;
					c3.rotation.y -= 0.2;
  				}
  				else{
  					
  						c3.rotation.y =0;
		               	total++;
		                sum++;
  						count=4;show();
  				}
  			}
  			else count=4;
  		}

  		else if(count == 4)
  		{
  			if(c4.visible == true)
  			{
  				if(c4.position.y >= -6)
  				{
  					c4.position.y -= 0.2;
  					c4.rotation.y -= 0.2;

  				}
  				else{
  				c4.rotation.y = 0;
  					sum++;
                 	total++;
  					count=5;show();
  				}
  			}
  			else count=5;
  		}


  		else if(count == 5)
  		{
  			if(c5.visible == true)
  			{
  				if(c5.position.y >= -6)
  				{
  					c5.position.y -= 0.2;
  					c5.rotation.y -= 0.2;

  				}
  				else{
  					c5.rotation.y = 0;
					sum++;
                 	total++;
  					count=6;show();
  				}
  			}
  			else count=6;
  		}

  		else if(count == 6)
  		{
  			if(c6.visible == true)
  			{
  				if(c6.position.y >= -6)
  				{
  					c6.position.y -= 0.2;
  					c6.rotation.y -= 0.2;
  				}
  				else{
  					c6.rotation.y = 0;
                 	total++;
  					sum++;
  					count=7;show();
  				}
  			}
  			else count=7;
  		}


  		else if(count == 7)
  		{
  			if(c7.visible == true)
  			{
  				if(c7.position.y >= -6)
  				{
  					c7.position.y -= 0.2;
  					c7.rotation.y -= 0.2;

  				}
  				else{
  					c7.rotation.y = 0;
  						total++;
                 	sum++;
  					count=8;show();
  				}
  			}
  			else count=8;
  		}

  		else if(count == 8)
  		{
  			if(c8.visible == true)
  			{
  				if(c8.position.y >= -6)
  				{
  					c8.position.y -= 0.2;
  					c8.rotation.y -= 0.2;

  				}
  				else{
  					c8.rotation.y = 0;
  					total++;
                 	sum++;
  					count=9;show();
  				}
  			}
  			else count=9;
  		}

  		else if(count == 9)
  		{
  			if(c9.visible == true)
  			{
  				if(c9.position.y >= -6)
  				{
  					c9.position.y -= 0.2;
  					c9.rotation.y -= 0.2;

  				}
  				else{
  					
  					c9.rotation.y = 0;
	  				total++;
	  				
  					sum++;
  					count=10;show();
  				}
  			}
  			else count=10;
  		}


  		else if(count == 10)
  		{
  			if(c10.visible == true)
  			{
  				if(c10.position.y >= -6.5)
  				{
  					c10.position.y -= 0.2;
  					c10.rotation.z -= 0.2;

  				}
  				else{
  					c10.rotation.z = 0;
	  				total++;
	  				
  					sum++;
  					count=11;show();
  				}
  			}
  			else count=11;
  		}

  		else if(count == 11)
  		{
  			if(c11.visible == true)
  			{
  				if(c11.position.y >= -6.5)
  				{
  					c11.position.y -= 0.2;
  					c11.rotation.z -= 0.2;

  				}
  				else{
  					
  						c11.rotation.z = 0;
  						total++;
	  				
  					sum++;
  					count=12;show();
  				}
  			}
  			else count=12;
  		}


  		else if(count == 12)
  		{
  			if(c12.visible == true)
  			{
  				if(c12.position.y >= -6.5)
  				{
  					c12.position.y -= 0.2;
  					c12.rotation.z -= 0.2;

  				}
  				else{

  					c12.rotation.z = 0;
  					
	                total++;
  					sum++;
  					count=13;show();
  				}
  			}
  			else count=13;
  		}

  		else if(count == 13)
  		{
  			if(c13.visible == true)
  			{
  				if(c13.position.y >= -6.5)
  				{
  					c13.position.y -= 0.2;
  					c13.rotation.z -= 0.2;

  				}
  				else{
  					
  						c13.rotation.z = 0;
	                	total++;
  						sum++;
  					count=14;show();
  				}
  			}
  			else count=14;
  		}

  		else if(count == 14)
  		{
  			if(c14.visible == true)
  			{
  				if(c14.position.y >= -6.5)
  				{
  					c14.position.y -= 0.2;
  					c14.rotation.z -=0.2;

  				}
  				else{
  					
  					c14.rotation.z = 0;
						total++;
  					sum++;
  					count=15;show();
  				}
  			}
  			else count=15;
  		}

  		else if(count == 15)
  		{
  			if(c15.visible == true)
  			{
  				if(c15.position.y >= -6.5)
  				{
  					c15.position.y -= 0.2;
  					c15.rotation.z -= 0.2;

  				}
  				else{
  					
  						total++;
  						c15.rotation.z = 0;
  						sum++;
  					count=16;show();
  				}
  			}
  			else count=16;
  		}

  		else if(count == 16)
  		{
  			if(c16.visible == true)
  			{
  				if(c16.position.y >= -6.5)
  				{
  					c16.position.y -= 0.2;
  					c16.rotation.z -= 0.2;

  				}
  				else{
  					
  					total++;
  					c16.rotation.z = 0;
  					sum++;
  					count=17;show();
  				}
  			}
  			else count=17;
  		}

  		else if(count == 17)
  		{
  			if(c17.visible == true)
  			{
  				if(c17.position.y >= -6.5)
  				{
  					c17.position.y -= 0.2;
  					c17.rotation.z -=0.2

  				}
  				else{
  					c17.rotation.z = 0;
  					total++;
  					sum++;
  					count=18;show();
  				}
  			}
  			else count=18;
  		}

  		else if(count == 18)
  		{
  			if(c18.visible == true)
  			{
  				if(c18.position.y >= -6.5)
  				{
  					c18.position.y -= 0.2;
  					c18.rotation.z -= 0.2;

  				}
  				else{
  						total++;
  						note18.rotation.z = 0;
  					sum++;
  					count=19;show();
  				}
  			}
  			else count=19;
  		}

  		else if(count == 19)
  		{
  			if(note1.visible == true)
  			{
  				if(note1.position.y >= -6)
  				{
  					note1.position.y -= 0.2;
  					note1.rotation.z -= 0.5;

  				}
  				else{
  					note1.rotation.z = 0;
  					iam++;
  					total += 10;
  					// sum += 10;
  					count=20;show();
  				}
  			}
  			else count=20;
  		}

  		else if(count == 20)
  		{
  			if(note2.visible == true)
  			{
  				if(note2.position.y >= -6)
  				{
  					note2.position.y -= 0.5;
  					note2.rotation.z += 0.5;

  				}
  				else{
  					note2.rotation.z =0;

  					total += 10;iam++;
  					// sum += 10;
  					count=21;show();
  				}
  			}
  			else count=21;
  		}

  		else if(count == 21)
  		{
  			if(note3.visible == true)
  			{
  				if(note3.position.y >= -6)
  				{
  					note3.position.y -= 0.2;
  					note3.rotation.y += 1;

  				}
  				else{
  					
  					total += 10;iam++;
  					note3.rotation.y = 0;
  					// sum += 10;
  					count=22;show();
  				}
  			}
  			else count=22;
  		}

  		else if(count == 22)
  		{
  			if(note4.visible == true)
  			{
  				if(note4.position.y >= -6)
  				{
  					note4.position.y -= 0.2;
  					note4.rotation.y += 1;

  				}
  				else{
  					note4.rotation.y = 0;
  					
  					total += 10;iam++;
  					// sum += 10;
  					count=23;show();
  				}
  			}
  			else count=23;
  		}

  		else if(count == 23)
  		{
  			if(note5.visible == true)
  			{
  				if(note5.position.y >= -6)
  				{
  					note5.position.y -= 0.2;
  					note5.rotation.z += 0.5;


  				}
  				else{
  					note5.rotation.z = 0;

  					total += 10;iam++;
  					// sum += 10;
  					count=24;show();
  				}
  			}
  			else count=24;
  		}

  		else if(count == 24)
  		{
  			if(note6.visible == true)
  			{
  				if(note6.position.y >= -6)
  				{
  					note6.position.y -= 0.2;
  					note6.rotation.z += 0.5;


  				}
  				else{
  					note6.rotation.z = 0;

  						total += 10;iam++;
  					// sum += 10;

  					count=25;show();
  				}
  			}
  			else count=25;
  		}

  		else if(count == 25)
  		{
  			if(note7.visible == true)
  			{
  				if(note7.position.y >= -6)
  				{
  					 
  					note7.position.y -= 0.2;
  					note7.rotation.z += 0.5;


  				}
  				else{
  					note7.rotation.z = 0;

  					total += 10;iam++;
  					// sum += 10;
  					count=26;show();
  				}
  			}
  			else count=26;
  		}

  		else if(count == 26)
  		{
  			if(note8.visible == true)
  			{
  				if(note8.position.y >= -6)
  				{
  					 
  					note8.position.y -= 0.2;
  					note8.rotation.y += 0.5;


  				}
  				else{
  					note8.rotation.y = 0;

  					total += 10;
iam++;				
  					// sum += 10;
  					count=27;show();
  				}
  			}
  			else count=27;
  		}

  		else if(count == 27)
  		{
  			if(note9.visible == true)
  			{
  				if(note9.position.y >= -6)
  				{
  					 
  					note9.position.y -= 0.2;
  					note9.rotation.y -= 0.2;

  				}
  				else{
  					total += 10;
  					note9.position.y = 0;
  					// sum += 10;

  					count=28;show();
  				}
  			}
  			else count=28;
  		}

  		else if(count == 28)
  		{
  			if(note10.visible == true)
  			{
  				if(note10.position.y >= -3.5)
  				{
  					 
  					note10.position.y -= 0.2;
  					note10.rotation.y -= 0.2;

  				}
  				else{
  					note10.rotation.y = 0;
  					total += 10;iam++;
  					// sum += 10;

  					count=29;show();
  				}
  			}
  			else count=29;
  		}

  		else if(count == 29)
  		{
  			if(note11.visible == true)
  			{
  				if(note11.position.y >= -3.5)
  				{
  					
  					 note11.position.y -= 0.2;
  					note11.rotation.y += 0.5;


  				}
  				else{
  					note11.rotation.y = 0;

  					total += 10;iam++;
  					// sum += 10;
  					count=30;show();
  				}
  			}
  			else count=30;
  		}

  		else if(count == 30)
  		{
  			if(note12.visible == true)
  			{
  				if(note12.position.y >= -3.5)
  				{
  					 
  					note12.position.y -= 0.2;
  					note12.rotation.y += 0.5;

  				}
  				else{
  					note12.rotation.y =0;
  					total += 10;iam++;
  					// sum += 10;
  					count=31;show();
  				}
  			}
  			else count=31;
  		}

  		else if(count == 31)
  		{
  			if(note13.visible == true)
  			{
  				if(note13.position.y >= -3.5)
  				{
  					 
  					note13.position.y -= 0.2;
  					note13.rotation.z += 0.5;


  				}
  				else{
  					 
  					total += 10;iam++;
  					// sum += 10;
  					note13.rotation.z = 0;

  					count=32;show();
  				}
  			}
  			else count=32;
  		}

  		else if(count == 32)
  		{
  			if(note14.visible == true)
  			{
  				if(note14.position.y >= -3.5)
  				{
  					 
  					note14.position.y -= 0.2;
  					note14.rotation.z += 0.5;


  				}
  				else{
  					note14.rotation.z = 0;

  					total += 10;iam++;
  					// sum += 10;
  					count=33;show();
  				}
  			}
  			else count=33;
  		}

  		else if(count == 33)
  		{
  			if(note15.visible == true)
  			{
  				if(note15.position.y >= -3.5)
  				{
  					 
  					note15.position.y -= 0.2;
  					note15.rotation.z -= 0.2;

  				}
  				else{
  					note15.rotation.z = 0;
  					total += 10;iam++;
  					// sum += 10;
  					count=34;show();
  				}
  			}
  			else count=34;
  		}

  		else if(count == 34)
  		{
  			if(note16.visible == true)
  			{
  				if(note16.position.y >= -3.5)
  				{
  					 
  					note16.position.y -= 0.2;
  					note16.rotation.z -= 0.2;

  				}
  				else{
  					total += 10;
  					note16.rotation.z = 0;
  					// sum += 10;
  					count=35;show();
  				}
  			}
  			else count=35;
  		}

  		else if(count == 35)
  		{
  			if(note17.visible == true)
  			{
  				if(note17.position.y >= -3.5)
  				{
  					 
  					note17.position.y -= 0.2;
  					note17.rotation.z -= 0.2;

  				}
  				else{
  					note17.rotation.z = 0;
  					total += 10;iam++;
  					// sum += 10;
  					count=36;show();
  				}
  			}
  			else count=36;
  		}

  		else if(count == 36)
  		{
  			if(note18.visible == true)
  			{
  				if(note18.position.y >= -3.5)
  				{
  					 
  					note18.position.y -= 0.2;
  					note18.rotation.y -= 0.2;

  				}
  				else{
  					note18.rotation.y = 0;
  					total += 10;iam++;
  					// sum += 10;

  					count=37;show();
  				}
  			}
  			else count=37;

  			
  		}

  		


  }
}


function resetExperiment() {
	Next();
	
}


function addText() {
    var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry( "Number1", { font: font, size: 0.8, height: 0.05, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'yellow' });

                toggle = new THREE.Mesh(southGeometry ,southMaterial );
                toggle.position.set(-10,3.8, 15) ;
                PIEaddElement( toggle );})

                 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry( "Number2", { font: font, size: 0.8, height: 0.05, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'yellow' });

                toggle = new THREE.Mesh(southGeometry ,southMaterial );
                toggle.position.set(-10,0.5, 15) ;
                PIEaddElement( toggle );})

                
var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry( "Result", { font: font, size: 0.8, height: 0.05, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'yellow' });

                toggle = new THREE.Mesh(southGeometry ,southMaterial );
                toggle.position.set(-10,-3, 15) ;
                PIEaddElement( toggle );})
              

               addNumbers();

                
}

function addNumbers()
{
	 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry( x, { font: font, size: 1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'yellow' });

                one = new THREE.Mesh(southGeometry ,southMaterial );
                one.position.set(2.7,3.7, 15) ;
                PIEaddElement( one );})

                var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(y, { font: font, size: 1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'yellow' });

                two = new THREE.Mesh(southGeometry ,southMaterial );
                two.position.set(2.7,0.4, 15) ;
                PIEaddElement( two );})

                var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry( "", { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})
}

function addMoney() {



   

    addNotes();
    addCoins();
    // PIEstartAnimation();


}

function changeit() {

	sum = 0;
	turn = 1;
	if(c1.position.y != 6)
	{
		c1.visible=false;
		PIErender();
	}

	if(c2.position.y != 6)
	{
		c2.visible=false;
		PIErender();
	}

	if(c3.position.y != 6)
	{
		c3.visible=false;PIErender();
	}

	if(c4.position.y != 6)
	{
		c4.visible=false;
		PIErender();
	}

	if(c5.position.y != 6)
	{
		c5.visible=false;
		PIErender();
	}

	if(c6.position.y != 6)
	{
		c6.visible=false;
		PIErender();
	}

	if(c7.position.y != 6)
	{
		c7.visible=false;
		PIErender();
	}

	if(c8.position.y != 6)
	{
		c8.visible=false;
		PIErender();
	}

	if(c9.position.y != 6)
	{
		c9.visible=false;
		PIErender();
	}

	if(c10.position.y != 1)
	{
		c10.visible=false;
		PIErender();
	}

	if(c11.position.y !=  1)
	{
		c11.visible=false;
		PIErender();
	}

	if(c12.position.y != 1)
	{
		c12.visible=false;
		PIErender();
	}

	if(c13.position.y != 1)
	{
		c13.visible=false;
		PIErender();
	}

	if(c14.position.y != 1)
	{
		c14.visible=false;
		PIErender();
	}

	if(c15.position.y != 1)
	{
		c15.visible=false;
		PIErender();
	}

	if(c16.position.y != 1)
	{
		c16.visible=false;
		PIErender();
	}

	if(c17.position.y != 1)
	{
		c17.visible=false;
		PIErender();
	}

	if(c18.position.y != 1)
	{
		c18.visible=false;
		PIErender();
	}

	newnote.visible = true;
	iam++;

}

function changeitagain() {

	// alert("In");
    
	if(note1.position.y !=  6.8)
	{
		PIEscene.remove(note1);
		PIErender();
	}

	if(note2.position.y !=  6.8)
	{
		PIEscene.remove(note2);
		PIErender();
	}
	if(note3.position.y !=  6.8)
	{
		PIEscene.remove(note3);
		PIErender();
	}

	if(note4.position.y !=  6.8)
	{
		PIEscene.remove(note4);
		PIErender();
	}

	if(note5.position.y !=  6.8)
	{
		PIEscene.remove(note5);
		PIErender();
	}

	if(note6.position.y !=  6.8)
	{
		PIEscene.remove(note6);
		PIErender();
	}

	if(note7.position.y !=  6.8)
	{
		PIEscene.remove(note7);
		PIErender();
	}


	if(note8.position.y !=  6.8)
	{
		PIEscene.remove(note8);
		PIErender();
	}

	if(note9.position.y !=  6.8)
	{
		PIEscene.remove(note9);
		PIErender();
	}

	if(note10.position.y !=  1.5)
	{
		PIEscene.remove(note10);
		PIErender();
	}

    
	if(note11.position.y !=  1.5)
	{
		PIEscene.remove(note11);
		PIErender();
	}

	if(note12.position.y !=  1.5)
	{
		PIEscene.remove(note12);
		PIErender();
	}

	if(note13.position.y !=  1.5)
	{
		PIEscene.remove(note13);
		PIErender();
	}

	if(note14.position.y !=  1.5)
	{
		PIEscene.remove(note14);
		PIErender();
	}

	if(note15.position.y !=  1.5)
	{
		PIEscene.remove(note15);
		PIErender();
	}

	if(note16.position.y !=  1.5)
	{
		PIEscene.remove(note16);
		PIErender();
	}

	if(note17.position.y !=  1.5)
	{
		PIEscene.remove(note17);
		PIErender();
	}

	if(note18.position.y !=  1.5)
	{
		PIEscene.remove(note18);
		PIErender();
	}

	if(newnote.visible == true)
	{
		newnote.visible = false;
	}

	iam = 0;

	note.visible = true;
}
function addCoins() {


	texture = new THREE.ImageUtils.loadTexture( "one.jpg",{},function (){PIErender();PIErender();PIErender();PIErender();} );
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	//texture.repeat.set( 1, 1);

	var geometry = new THREE.RingGeometry( 0.001,1.3, 32 );
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


	c11 = new THREE.Mesh(geometry,material);
	PIEaddElement(c11);
	
	c12 = new THREE.Mesh(geometry,material);
	PIEaddElement(c12);
	
	c13 = new THREE.Mesh(geometry,material);
	PIEaddElement(c13);
	
	c14 = new THREE.Mesh(geometry,material);
	PIEaddElement(c14);
	
	c15 = new THREE.Mesh(geometry,material);
	PIEaddElement(c15);
	
	c16 = new THREE.Mesh(geometry,material);
	PIEaddElement(c16);
	
	c17 = new THREE.Mesh(geometry,material);
	PIEaddElement(c17);
	
	c18 = new THREE.Mesh(geometry,material);
	PIEaddElement(c18);
	


	c1.name = "Drag";
	c2.name = "Drag";
	c3.name = "Drag";
	c4.name = "Drag";
	c5.name = "Drag";
	c6.name = "Drag";
	c7.name = "Drag";
	c8.name = "Drag";
	c9.name = "Drag";
	c10.name = "Drag";
	c11.name = "Drag";
	c12.name = "Drag";
	c13.name = "Drag";
	c14.name = "Drag";
	c15.name = "Drag";
	c16.name = "Drag";
	c17.name = "Drag";
	c18.name = "Drag";



	c1.position.set(-2.4,6,0);
	c2.position.set(-1.8,6,0);
	c3.position.set(-1.2,6,0);
	c4.position.set(-0.6,6,0);
	c5.position.set(0,6,0);
	c6.position.set(0.6,6,0);
	c7.position.set(1.2,6,0);
	c8.position.set(1.8,6,0);
	c9.position.set(2.4,6,0);

	c10.position.set(-2.4,1,0);
	c11.position.set(-1.8,1,0);
	c12.position.set(-1.2,1,0);
	c13.position.set(-0.6,1,0);
	c14.position.set(0,1,0);
	c15.position.set(0.6,1,0);
	c16.position.set(1.2,1,0);
	c17.position.set(1.8,1,0);
	c18.position.set(2.4,1,0);
	

	if(rem == 0 )
	{
		c1.visible = false;
		c2.visible = false;
		c3.visible = false;
		c4.visible = false;
		c5.visible = false;
		c6.visible = false;
		c7.visible = false;
		c8.visible = false;
		c9.visible = false;

	}
	else if(rem == 1 )
	{
		c2.visible = false;
		c3.visible = false;
		c4.visible = false;
		c5.visible = false;
		c6.visible = false;
		c7.visible = false;
		c8.visible = false;
		c9.visible = false;

	}


	else if(rem == 2)
	{
		c3.visible = false;
		c4.visible = false;
		c5.visible = false;
		c6.visible = false;
		c7.visible = false;
		c8.visible = false;
		c9.visible = false;

	}

	else if(rem == 3 )
	{
		c4.visible = false;
		c5.visible = false;
		c6.visible = false;
		c7.visible = false;
		c8.visible = false;
		c9.visible = false;

	}

	else if(rem == 4 )
	{
		c5.visible = false;
		c6.visible = false;
		c7.visible = false;
		c8.visible = false;
		c9.visible = false;

	}

	else if(rem == 5 )
	{
		
		c6.visible = false;
		c7.visible = false;
		c8.visible = false;
		c9.visible = false;

	}

	else if(rem == 6 )
	{
		
		c7.visible = false;
		c8.visible = false;
		c9.visible = false;

	}

	else if(rem ==7 )
	{
		
		c8.visible = false;
		c9.visible = false;

	}

	else if(rem == 8 )
	{
		
		c9.visible = false;

	}

	if(rem1 == 0 )
	{
		c10.visible = false;
		c11.visible = false;
		c12.visible = false;
		c13.visible = false;
		c14.visible = false;
		c15.visible = false;
		c16.visible = false;
		c17.visible = false;
		c18.visible = false;

	}


	else if(rem1 == 1 )
	{
		c11.visible = false;
		c12.visible = false;
		c13.visible = false;
		c14.visible = false;
		c15.visible = false;
		c16.visible = false;
		c17.visible = false;
		c18.visible = false;

	}

	else if(rem1 == 2)
	{
		c12.visible = false;
		c13.visible = false;
		c14.visible = false;
		c15.visible = false;
		c16.visible = false;
		c17.visible = false;
		c18.visible = false;

	}

	else if(rem1 == 3 )
	{
		c13.visible = false;
		c14.visible = false;
		c15.visible = false;
		c16.visible = false;
		c17.visible = false;
		c18.visible = false;
		c13.visible = false;

	}

	else if(rem1 == 4 )
	{
		c14.visible = false;
		c15.visible = false;
		c16.visible = false;
		c17.visible = false;
		c18.visible = false;

	}

	else if(rem1 == 5 )
	{
		c15.visible = false;
		c16.visible = false;
		c17.visible = false;
		c18.visible = false;

	}

	else if(rem1 == 6 )
	{
		c16.visible = false;
		c17.visible = false;
		c18.visible = false;
		c15.visible = false;

	}

	else if(rem1 ==7 )
	{
		
		c17.visible = false;
		c18.visible = false;

	}

	else if(rem1 == 8 )
	{
		
		c18.visible = false;

	}



	
}

function addNotes()
{

	x=Math.floor((Math.random() * 99) + 1); 
    y=Math.floor((Math.random() * 99) + 1);
    q=Math.floor(x/10);
    rem=x%10;

    q1=Math.floor(y/10);
    rem1=y%10;

    result=x+y;	
	
    texture = new THREE.ImageUtils.loadTexture( "das.jpg",{},function (){PIErender();PIErender();PIErender();PIErender();} );
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    
    var geometry = new THREE.PlaneGeometry( 7,3 );
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

     note9=new THREE.Mesh(geometry,material);
    PIEaddElement(note9);
    note9.name="nine";

     note10 = new THREE.Mesh(geometry,material);
    PIEaddElement(note10);

     note11 = new THREE.Mesh(geometry,material);
    PIEaddElement(note11);

     note12= new THREE.Mesh(geometry,material);
    PIEaddElement(note12);

     note13 = new THREE.Mesh(geometry,material);
    PIEaddElement(note13);


     note14= new THREE.Mesh(geometry,material);
    PIEaddElement(note14);

     note15 = new THREE.Mesh(geometry,material);
    PIEaddElement(note15);

     note16 = new THREE.Mesh(geometry,material);
    PIEaddElement(note16);

     note17 = new THREE.Mesh(geometry,material);
    PIEaddElement(note17);


    // note17.visible=false;


     note18 = new THREE.Mesh(geometry,material);
    PIEaddElement(note18);

    newnote= new THREE.Mesh(geometry,material);
    PIEaddElement(newnote);

    newnote.position.set(-4,-6,0);
    newnote.visible = false;





    texture = new THREE.ImageUtils.loadTexture( "100.jpg",{},function (){PIErender();PIErender();PIErender();PIErender();} );
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    var geometry = new THREE.PlaneGeometry( 8,3.3 );
    var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
    note = new THREE.Mesh(geometry,material);
    note.position.set(0,-4,0);
    note.visible=false;
    PIEaddElement(note);
    
    note1.position.set(-1 ,6.8,0);
    note2.position.set(-1.2,6.8,0);
    note3.position.set(-1.4,6.8,0);
    note4.position.set(-1.6,6.8,0);
    note5.position.set(-1.8,6.8,0);
    note6.position.set(-2,6.8,0);
    note7.position.set(-2.2,6.8,0);
    note8.position.set(-2.4,6.8,0);
    note9.position.set(-2.6,6.8,0);

    note10.position.set(-1 ,1.5,0);
    note11.position.set(-1.2,1.5,0);
    note12.position.set(-1.4,1.5,0);
    note13.position.set(-1.6,1.5,0);
    note14.position.set(-1.8,1.5,0);
    note15.position.set(-2,1.5,0);
    note16.position.set(-2.2,1.5,0);
    note17.position.set(-2.4,1.5,0);
    note18.position.set(-2.6,1.5,0);



     if(q == 0)
    {
    	note1.visible=false;
    	note2.visible=false;
    	note3.visible=false;
    	note4.visible=false;
    	note5.visible=false;
    	note6.visible=false;
    	note7.visible=false;
    	note8.visible=false;
    	note9.visible=false;
    }


    else if(q == 1)
    {
    	note2.visible=false;
    	note3.visible=false;
    	note4.visible=false;
    	note5.visible=false;
    	note6.visible=false;
    	note7.visible=false;
    	note8.visible=false;
    	note9.visible=false;
    }

     else if(q == 2)
    {
    	note3.visible=false;
    	note4.visible=false;
    	note5.visible=false;
    	note6.visible=false;
    	note7.visible=false;
    	note8.visible=false;
    	note9.visible=false;
    }



     else if(q == 3)
    {
    	note4.visible=false;
    	note5.visible=false;
    	note6.visible=false;
    	note7.visible=false;
    	note8.visible=false;
    	note9.visible=false;
    }

     else if(q == 4)
    {
    	note5.visible=false;
    	note6.visible=false;
    	note7.visible=false;
    	note8.visible=false;
    	note9.visible=false;
    }

     else if(q == 5)
    {
    	note6.visible=false;
    	note7.visible=false;
    	note8.visible=false;
    	note9.visible=false;
    }

     if(q == 6)
    {
    	note7.visible=false;
    	note8.visible=false;
    	note9.visible=false;
    }

    else if(q == 7)
    {
    	note8.visible=false;
    	note9.visible=false;
    }


     else if(q == 8)
    {
    	note9.visible=false;
    }

     if(q1 == 0)
    {
    	note10.visible=false;
    	note11.visible=false;
    	note12.visible=false;
    	note13.visible=false;
    	note14.visible=false;
    	note15.visible=false;
    	note16.visible=false;
    	note17.visible=false;
    	note18.visible=false;
    }


    else if(q1 == 1)
    {
    	note12.visible=false;
    	note11.visible=false;
    	note13.visible=false;
    	note14.visible=false;
    	note15.visible=false;
    	note16.visible=false;
    	note17.visible=false;
    	note18.visible=false;
    }

     else if(q1 == 2)
    {
    	
    	note12.visible=false;
    	note13.visible=false;
    	note14.visible=false;
    	note15.visible=false;
    	note16.visible=false;
    	note17.visible=false;
    	note18.visible=false;
    }



     else if(q1 == 3)
    {
    	note13.visible=false;
    	note14.visible=false;
    	note15.visible=false;
    	note16.visible=false;
    	note17.visible=false;
    	note18.visible=false;
    }

     else if(q1 == 4)
    {
    	note14.visible=false;
    	note15.visible=false;
    	note16.visible=false;
    	note17.visible=false;
    	note18.visible=false;
    }

     else if(q1 == 5)
    {
    	note15.visible=false;
    	note16.visible=false;
    	note17.visible=false;
    	note18.visible=false;
    }

     if(q1 == 6)
    {
    	note16.visible=false;
    	note17.visible=false;
    	note18.visible=false;
    }

    else if(q1 == 7)
    {
    	
    	note17.visible=false;
    	note18.visible=false;
    }


     else if(q1 == 8)
    {
    	note18.visible=false;
    }

  


}


function Result() {
	value = 0;
	if(correct.visible=true)
		correct.visible=false;

	if(wrong.visible=true)
		wrong.visible=false;
	count=0;
	if(note1.visible == true)
	{
		 note1.position.set(-1 ,6.8,0);
	}
	
	if(note2.visible == true)
	{
		note2.position.set(-1.2,6.8,0);
	}

	if(note3.visible == true)
	{
		note3.position.set(-1.4,6.8,0);
	}

	if(note4.visible == true)
	{
		note4.position.set(-1.6,6.8,0);
	}

	if(note5.visible == true)
	{
		note5.position.set(-1.8,6.8,0);
	}

	if(note6.visible == true)
	{
		note6.position.set(-2,6.8,0);
	}

	if(note7.visible == true)
	{
		 note7.position.set(-2.2,6.8,0);
	}

	if(note8.visible == true)
	{
		note8.position.set(-2.4,6.8,0);
	}

	if(note9.visible == true)
	{
		 note9.position.set(-2.6,6.8,0);
	}

	if(note10.visible == true)
	{
		note10.position.set(-1 ,1.5,0);
	}

	if(note11.visible == true)
	{
		note11.position.set(-1.2,1.5,0);
	}

	if(note12.visible == true)
	{
		  note12.position.set(-1.4,1.5,0);
	}

	if(note13.visible == true)
	{
		 note13.position.set(-1.6,1.5,0);
	}

	if(note14.visible == true)
	{
		 note14.position.set(-1.8,1.5,0);
	}

	if(note15.visible == true)
	{
		note15.position.set(-2,1.5,0);
	}

	if(note16.visible == true)
	{
		 note16.position.set(-2.2,1.5,0);
	}

	if(note17.visible == true)
	{
		note17.position.set(-2.4,1.5,0);
	}

	if(note18.visible == true)
	{
		 note18.position.set(-2.6,1.5,0);
	}

	if(c1.visible == true)
	{
		c1.position.set(-2.4,6,0);
	}
	
	if(c2.visible == true)
	{
		c2.position.set(-1.8,6,0);
	}

	if(c3.visible == true)
	{
		c3.position.set(-1.2,6,0);
	}

	if(c4.visible == true)
	{
		c4.position.set(-0.6,6,0);
	}

	if(c5.visible == true)
	{
		c5.position.set(0,6,0);
	}

	if(c6.visible == true)
	{
		c6.position.set(0.6,6,0);
	}

	if(c7.visible == true)
	{
		c7.position.set(1.2,6,0);
	}

	if(c8.visible == true)
	{
		c8.position.set(1.8,6,0);
	}

	if(c9.visible == true)
	{
		c9.position.set(2.4,6,0);
	}

	if(c10.visible == true)
	{
		c10.position.set(-2.4,1,0);

	}

	if(c11.visible == true)
	{
		c11.position.set(-1.8,1,0);
	}

	if(c12.visible == true)
	{
		c12.position.set(-1.2,1,0);
	}

	if(c13.visible == true)
	{
		c13.position.set(-0.6,1,0);
	}

	if(c14.visible == true)
	{
		c14.position.set(0,1,0);
		
	}

	if(c15.visible == true)
	{
		c15.position.set(0.6,1,0);
	}

	if(c16.visible == true)
	{
		c16.position.set(1.2,1,0);
	}

	if(c17.visible == true)
	{
		c17.position.set(1.8,1,0);
	}

	if(c18.visible == true)
	{
		c18.position.set(2.4,1,0);
	}
	
	if(result >= 100)
	{
		
		r2=result%100;
		if(r2==0)
		{
			note.visible=true;
		}


		else
		{
			r3=r2%10;
			r4=Math.floor(r2/10);
			note.visible=true;
			if(r3 == 1)
			{
				c19.visible =true;
			}

			else if(r3 == 1)
			{
				c19.visible =true;
				PIErender();
			}

			else if(r3 == 2)
			{
				c19.visible =true;
				c20.visible =true;
				PIErender();
			}

			else if(r3 == 3)
			{
				c19.visible =true;
				c20.visible =true;
				c21.visible=true;
				PIErender();
			}

			else if(r3 == 4)
			{
				c19.visible =true;
				c20.visible =true;
				c21.visible=true;
				c22.visible=true;
				PIErender();
			}

			else if(r3 == 5)
			{
				c19.visible =true;
				c20.visible =true;
				c21.visible=true;
				c22.visible=true;
				c23.visible=true;
				PIErender();
			}

			else if(r3 == 6)
			{
				c19.visible =true;
				c20.visible =true;
				c21.visible=true;
				c22.visible=true;
				c23.visible=true;
				c24.visible=true;
				PIErender();
			}

			else if(r3 == 7)
			{
				c19.visible =true;
				c20.visible =true;
				c21.visible=true;
				c22.visible=true;
				c23.visible=true;
				c24.visible=true;
				c25.visible=true;
				PIErender();
			}

			else if(r3 == 8)
			{
				c19.visible =true;
				c20.visible =true;
				c21.visible=true;
				c22.visible=true;
				c23.visible=true;
				c24.visible=true;
				c25.visible=true;
				c26.visible=true;
				PIErender();
			}

			else if(r3 == 9)
			{
				c19.visible =true;
				c20.visible =true;
				c21.visible=true;
				c22.visible=true;
				c23.visible=true;
				c24.visible=true;
				c25.visible=true;
				c26.visible=true;
				c27.visible=true;
				PIErender();
			}

			if(r4 == 1)
			{
				note19.visible=true;
			}


			else if(r4 == 2)
			{
				note19.visible=true;
				note20.visible=true;
			}


			else if(r4 == 3)
			{
				note19.visible=true;
				note20.visible=true;
				note21.visible=true;
				PIErender();
			}


			else if(r4 == 4)
			{
				note19.visible=true;
				note20.visible=true;
				note21.visible=true;
				note22.visible=true;
				PIErender();
			}


			else if(r4 == 5)
			{
				note19.visible=true;
				note20.visible=true;
				note21.visible=true;
				note22.visible=true;
				note23.visible=true;
				PIErender();
			}


			else if(r4 == 6)
			{
				note19.visible=true;
				note20.visible=true;
				note21.visible=true;
				note22.visible=true;
				note23.visible=true;
				note24.visible=true;
				PIErender();
			}


			else if(r4 == 7)
			{
				note19.visible=true;
				note20.visible=true;
				note21.visible=true;
				note22.visible=true;
				note23.visible=true;
				note24.visible=true;
				note25.visible=true;
				PIErender();
			}




			else if(r4 == 8)
			{
				note19.visible=true;
				note20.visible=true;
				note21.visible=true;
				note22.visible=true;
				note23.visible=true;
				note24.visible=true;
				note25.visible=true;
				note26.visible=true;
				PIErender();
			}


			else if(r4 == 9)
			{
				note19.visible=true;
				note20.visible=true;
				note21.visible=true;
				note22.visible=true;
				note23.visible=true;
				note24.visible=true;
				note25.visible=true;
				note26.visible=true;
				note27.visible=true;
				PIErender();
			}
			

		}



	}


	else if(result < 100)
	{
		if(note.visible == true)
		{
			note.visible=false;
		}
		r4=Math.floor(result/10);
		r3=result%10;
			if(r3 == 1)
			{
				c19.visible =true;
			}

			else if(r3 == 2)
			{
				c19.visible =true;
				c20.visible =true;
				PIErender();
			}

			else if(r3 == 3)
			{
				c19.visible =true;
				c20.visible =true;
				c21.visible=true;
				PIErender();
			}

			else if(r3 == 4)
			{
				c19.visible =true;
				c20.visible =true;
				c21.visible=true;
				c22.visible=true;
				PIErender();
			}

			else if(r3 == 5)
			{
				c19.visible =true;
				c20.visible =true;
				c21.visible=true;
				c22.visible=true;
				c23.visible=true;
				PIErender();
			}

			else if(r3 == 6)
			{
				c19.visible =true;
				c20.visible =true;
				c21.visible=true;
				c22.visible=true;
				c23.visible=true;
				c24.visible=true;
				PIErender();
			}

			else if(r3 == 7)
			{
				c19.visible =true;
				c20.visible =true;
				c21.visible=true;
				c22.visible=true;
				c23.visible=true;
				c24.visible=true;
				c25.visible=true;
				PIErender();
			}

			else if(r3 == 8)
			{
				c19.visible =true;
				c20.visible =true;
				c21.visible=true;
				c22.visible=true;
				c23.visible=true;
				c24.visible=true;
				c25.visible=true;
				c26.visible=true;
				PIErender();
			}

			else if(r3 == 9)
			{
				c19.visible =true;
				c20.visible =true;
				c21.visible=true;
				c22.visible=true;
				c23.visible=true;
				c24.visible=true;
				c25.visible=true;
				c26.visible=true;
				c27.visible=true;
				PIErender();
			}

			if(r4 == 1)
			{
				note19.visible=true;
			}


			else if(r4 == 2)
			{
				note19.visible=true;
				note20.visible=true;
			}


			else if(r4 == 3)
			{
				note19.visible=true;
				note20.visible=true;
				note21.visible=true;
			}


			else if(r4 == 4)
			{
				note19.visible=true;
				note20.visible=true;
				note21.visible=true;
				note22.visible=true;
			}


			else if(r4 == 5)
			{
				note19.visible=true;
				note20.visible=true;
				note21.visible=true;
				note22.visible=true;
				note23.visible=true;
			}


			else if(r4 == 6)
			{
				note19.visible=true;
				note20.visible=true;
				note21.visible=true;
				note22.visible=true;
				note23.visible=true;
				note24.visible=true;
			}


			else if(r4 == 7)
			{
				note19.visible=true;
				note20.visible=true;
				note21.visible=true;
				note22.visible=true;
				note23.visible=true;
				note24.visible=true;
				note25.visible=true;
			}




			else if(r4 == 8)
			{
				note19.visible=true;
				note20.visible=true;
				note21.visible=true;
				note22.visible=true;
				note23.visible=true;
				note24.visible=true;
				note25.visible=true;
				note26.visible=true;
			}


			else if(r4 == 9)
			{
				note19.visible=true;
				note20.visible=true;
				note21.visible=true;
				note22.visible=true;
				note23.visible=true;
				note24.visible=true;
				note25.visible=true;
				note26.visible=true;
				note27.visible=true;
			}
	}

	PIEscene.remove(three);
		 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry( result, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})
                PIEstartAnimation();

}

function MoreMoney() {


	texture = new THREE.ImageUtils.loadTexture( "one.jpg",{},function (){PIErender();PIErender();PIErender();PIErender();} );
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	//texture.repeat.set( 1, 1);

	var geometry = new THREE.RingGeometry( 0.001,1.3, 32 );
	var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
	c19 = new THREE.Mesh(geometry,material);

	PIEaddElement(c19);
	
	c20 = new THREE.Mesh(geometry,material);
	PIEaddElement(c20);
	
	c21 = new THREE.Mesh(geometry,material);
	PIEaddElement(c21);
	
	c22 = new THREE.Mesh(geometry,material);
	PIEaddElement(c22);
	
	c23 = new THREE.Mesh(geometry,material);
	PIEaddElement(c23);
	
	c24 = new THREE.Mesh(geometry,material);
	PIEaddElement(c24);
	
	c25 = new THREE.Mesh(geometry,material);
	PIEaddElement(c25);
	
	c26 = new THREE.Mesh(geometry,material);
	PIEaddElement(c26);
	
	c27 = new THREE.Mesh(geometry,material);
	PIEaddElement(c27);

	c28 = new THREE.Mesh(geometry,material);
	PIEaddElement(c28);


	c29 = new THREE.Mesh(geometry,material);
	PIEaddElement(c29);
	
	c30 = new THREE.Mesh(geometry,material);
	PIEaddElement(c30);
	
	c31 = new THREE.Mesh(geometry,material);
	PIEaddElement(c31);
	
	c32 = new THREE.Mesh(geometry,material);
	PIEaddElement(c32);
	
	c33 = new THREE.Mesh(geometry,material);
	PIEaddElement(c33);
	
	c34 = new THREE.Mesh(geometry,material);
	PIEaddElement(c34);
	
	c35 = new THREE.Mesh(geometry,material);
	PIEaddElement(c35);
	
	c36 = new THREE.Mesh(geometry,material);
	PIEaddElement(c36);
	

	c19.visible=false;
	c20.visible=false;
	c21.visible=false;
	c22.visible=false;
	c23.visible=false;
	c24.visible=false;
	c25.visible=false;
	c26.visible=false;
	c27.visible=false;
	c28.visible=false;
	c29.visible=false;
	c30.visible=false;
	c31.visible=false;
	c32.visible=false;
	c33.visible=false;
	c34.visible=false;
	c35.visible=false;
	c36.visible=false;

	c19.position.set(-5.3,-6.5,0);
	c20.position.set(-4.7,-6.5,0);
	c21.position.set(-3.9,-6.5,0);
	c22.position.set(-3.1,-6.5,0);
	c23.position.set(-2.3,-6.5,0);
	c24.position.set(-1.5,-6.5,0);
	c25.position.set(-0.7,-6.5,0);
	c26.position.set(0.1,-6.5,0);
	c27.position.set(0.9,-6.5,0);

	// c28.position.set(6,-2,0);
	// c29.position.set(7,-2,0);
	// c30.position.set(8,-2,0.1);
	// c31.position.set(9,-2,0.2);
	// c32.position.set(10,-2,0.3);
	// c33.position.set(11,-2,0.4);
	// c34.position.set(9,-5,0.1);
	// c35.position.set(10,-5,0.2);
	// c36.position.set(11,-5,0.3);


	texture = new THREE.ImageUtils.loadTexture( "das.jpg",{},function (){PIErender();PIErender();PIErender();PIErender();} );
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    
    var geometry = new THREE.PlaneGeometry( 7,3 );
    var material = new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  });
    note19 = new THREE.Mesh(geometry,material);
    PIEaddElement(note19);
    
    note20 = new THREE.Mesh(geometry,material);
    PIEaddElement(note20);

    note21 = new THREE.Mesh(geometry,material);
    PIEaddElement(note21);

    note22 = new THREE.Mesh(geometry,material);
    PIEaddElement(note22);

    note23 = new THREE.Mesh(geometry,material);
    PIEaddElement(note23);

    note24 = new THREE.Mesh(geometry,material);
    PIEaddElement(note24);

     note25 = new THREE.Mesh(geometry,material);
    PIEaddElement(note25);

     note26 = new THREE.Mesh(geometry,material);
    PIEaddElement(note26);

     note27=new THREE.Mesh(geometry,material);
    PIEaddElement(note27);
    // note9.name="nine";

     note28 = new THREE.Mesh(geometry,material);
    PIEaddElement(note28);

     note29 = new THREE.Mesh(geometry,material);
    PIEaddElement(note29);

     note30= new THREE.Mesh(geometry,material);
    PIEaddElement(note30);

     note31 = new THREE.Mesh(geometry,material);
    PIEaddElement(note31);


     note32 = new THREE.Mesh(geometry,material);
    PIEaddElement(note32);

     note33 = new THREE.Mesh(geometry,material);
    PIEaddElement(note33);

     note34 = new THREE.Mesh(geometry,material);
    PIEaddElement(note34);

     note35 = new THREE.Mesh(geometry,material);
    PIEaddElement(note35);




     note36 = new THREE.Mesh(geometry,material);
    PIEaddElement(note36);


    note19.visible=false;
	note20.visible=false;
	note21.visible=false;
	note22.visible=false;
	note23.visible=false;
	note24.visible=false;
	note25.visible=false;
	note26.visible=false;
	note27.visible=false;
	note28.visible=false;
	note29.visible=false;
	note30.visible=false;
	note31.visible=false;
	note32.visible=false;
	note33.visible=false;
	note34.visible=false;
	note35.visible=false;
	note36.visible=false;

	note19.position.set(-1,-4,2);
	note20.position.set(-1.3,-4,2);
	note21.position.set(-1.6,-4,2);
	note22.position.set(-1.9,-4,2);
	note23.position.set(-2.2,-4,2);
	note24.position.set(-2.5,-4,2);
	note25.position.set(-2.8,-4,2);
	note26.position.set(-3.1,-4,2);
	note27.position.set(-3.4,-4,2);
	
	
}

function show() {
	PIEscene.remove(three);
	var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry( total, { font: font, size:1, height: 0.03, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(2.7,-2.7, 15) ;
                PIEaddElement( three );})
}



