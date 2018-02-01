	//Name of the webpage is set
	document.title = "11-99 as bundle and sticks";

	/************************CSS File style.css is added to index.html**********************/
  var div;

	var link = document.createElement('link');
		link.setAttribute('rel', 'stylesheet');
		link.setAttribute('type', 'text/css');
		link.setAttribute('href', 'style.css');
		document.getElementsByTagName('head')[0].appendChild(link);

		/*******************HTML ELEMENTS ARE ADDED***************/

	div = document.createElement("div");													/* div to make arrow clickable */
		div.setAttribute('id', 'Forward');
		div.setAttribute('onclick','incframeCount()');
		document.body.appendChild(div);

	div = document.createElement("div");													/* div for learn option */
		div.setAttribute('class','label');
		div.setAttribute('id', 'learn');
		div.setAttribute('onclick','learnSteps()');
		div.innerHTML= "Learn Steps";
		document.body.appendChild(div);

	div = document.createElement("div");													/* div for submit option */
		div.setAttribute('class','label');
		div.setAttribute('id', 'submit');
		div.setAttribute('onclick','submit()');
		div.innerHTML= "Submit";
		document.body.appendChild(div);

	div = document.createElement("div");										/* Text field for total number of sticks */
		div.setAttribute('class', 'input');
		div.setAttribute('id', 'total');
		document.body.appendChild(div);

	div = document.createElement("div");										/* Text field for number of individual sticks */
		div.setAttribute('class', 'input');
		div.setAttribute('id', 'stick');
		document.body.appendChild(div);

	div = document.createElement("div");										/* Text field for number of bundle */
		div.setAttribute('class', 'input');
		div.setAttribute('id', 'bundle');
		document.body.appendChild(div);
	/* Global Variables */
	/* We define frame of dimension 100x50 */
	/* We define a ball which bounces in the xy plane */
	/* We define modifiable prameters : gravity, ball size, initial velocity */
	/* We support draggable ball */
	/* Scene Dimensions (in meters: at z = 0) */

	var mySceneTLX;        /* Top Left corner X coordinate */
	var mySceneTLY;        /* Top Left corner Y coordinate */
	var mySceneBRX;        /* Bottom Right corner X coordinate */
	var mySceneBRY;        /* Bottom Right corner Y coordinate */

 	//////////////////////ALL threeOBJECTS///////////////////////////////
	var background;					/* background object (PlaneGeometry) */
	var arrow;							/* ConeGeometry to show forward arrow */
	var outlinearrow;				/* ConeGeometry to show outline of forward arrow */
	var cart;								/* Object to show horse cart */
	var sticks = [];				/* array of individual sticks */
	var bundle = [];				/* array of bundle of sticks */
	var cText=[];						/* Array of Objects to show text */
	var tempElement;				/* Object to store another object for function move() */
	var sideOutline;				/* plane object to show outline */
	////////////////////END OF OBJECTS/////////////////////////////////

	var centerX;						/*X coordinate of center of screen*/
	var centerY;						/*Y coordinate of center of screen*/
	var frameCount;					/* variable to keep count of current frame */
	var canvas;							/* canvas material used for different objects */
	var context;						/* canvas's context to draw on canvas */
	var collected ;					/* total number of sticks collected  */
	var stickCollected;			/* total number of individual sticks */
	var bundleCollected;		/* total number of bundled sticks */
	var required;						/* required number of sticks for each frame */
	var tempRequired;				/* Temporary variable to keep count of bundles required */
	var tempRequiredSticks;	/* Temporary variable to keep count of require individual sticks*/
	var totStick;						/* variable to contain individual div element by id */
	var totBundle;					/* variable to contain bundle div element by id */
	var total;							/* variable to contain total div element by id*/
	var learn;							/* 1 when learn steps is clicked and animation is shown */
	var stickAdd=[];				/* value of element is 1 if it has been added to the total count of sticks */
	var bundleAdd=[];				/* value of element is 1 if it has been added to the total count of sticks */
	var success;						/* 1 id answer is correct and animation is shown */


	//////////////End of Variables/////////////////////
	function randomnum()
  {
 	 required=10+Math.floor(Math.random()*100);
 	 if(required==10)
 	 {
 		 required=99;
 	 }
  }
	/*Function to check the answer of user*/
	function submit()
	{
		learn=0;
		if(total.innerHTML==required)
		{
			total.style.background="#00ff00"
			totBundle.style.background="#00ff00"
			totStick.style.background="#00ff00"
			success=1;
		}
		else
		{
			total.style.background="#ff0000"
			totStick.style.background="#ff0000"
			totBundle.style.background="#ff0000"
		}
	}
	/*Function to start animation on how to solve*/
	function learnSteps()
	{
		learn=1;
		for (var i = 0; i < 9; i++)
		{
			stickAdd[i]=1;
			bundleAdd[i]=1;
		}
	}

	/*Drag property of elements is set*/


	/*Drag property of individual sticks is set*/
	function sticksDrag(element, newpos)
	{
			element.position.set(newpos.x,newpos.y,newpos.z);
	}

	/*Drag property of sticks bundle is set*/
		function bundleDrag(element, newpos)
	{
			element.position.set(newpos.x,newpos.y,newpos.z);
	}

	/*Some defaultProperties that are same for each frameCount*/
	function defaultProperties()
	{
		for (var i = 0; i < 9; i++) {					///Marking that no stick has been added to total count
			stickAdd[i]=0;
			bundleAdd[i]=0;
		}
		cText[23].visible=false;
		success=0;
		total.style.background="#ffffff";
		totBundle.style.background="#ffffff";
		totStick.style.background="#ffffff";
		bundle[18].visible=false;
		for (var i = 0; i < 9; i++)
		{
			bundle[i].visible=true;
			bundle[i].scale.set(0.8,0.8,0.8);
			if(i<3)				bundle[i].position.set(centerX-43+i*10,centerY-15,0);
			else if(i<6)	bundle[i].position.set(centerX-74+i*10,centerY-4,0);
			else 					bundle[i].position.set(centerX-104+i*10,centerY+5,0);
		}
		for (var i = 9; i < 18; i++)
		{
			bundle[i].visible=false;
			bundle[i].scale.set(0.4,0.4,0.4);
			bundle[i].position.set(centerX-7+i*3,centerY+14,0);
		}

		cart.position.set(centerX,centerY+5,0);
		collected=0;
		stickCollected=0;
		bundleCollected=0;
		learn=0;
		for (var i = 0; i < 24; i++)
		{
			cText[i].visible=false;
		}
		for (var i = 9; i < 18; i++)
		{
			sticks[i].visible=false;
			sticks[i].scale.set(0.5,0.5,0.5);
			sticks[i].position.set(centerX+4+i*2,centerY+7,0);
		}
		for (var i = 0; i < 9; i++)
		{
			sticks[i].visible=true;
			sticks[i].position.set(centerX-45+i*2,centerY+15,0);
		}

		for (var i = 5; i <24; i++)
		{
		if(i<14)
		{
			cText[i].scale.set(0.5,0.5,0.5);
			cText[i].position.set(centerX+12+i*2,centerY+4,0);
		}
		else if(i<23)
		{
			cText[i].scale.set(0.7,0.7,0.7);
			cText[i].position.set(centerX+i*3-22,centerY+9.5,0);
		}
		}
	}

	/*Function to change each control frame*/
	function incframeCount()
	{
		defaultProperties();
		totStick.innerHTML=0;
		totBundle.innerHTML=0;
		total.innerHTML=0;
		arrow.material.color.setHex(0xffffff);							//sets the click effect of arrow
		setTimeout(function() {
			arrow.material.color.setHex(0x88ade8);
		}, 100);
		frameCount++;
		for (var i = 0; i < 5; i++) {
			cText[i].visible=true;
		}
		if(frameCount<9)
		{
			randomnum();
			writeCanvas(required,23,"a30002");
			cText[23].scale.set(1.5,1.5,1);
			cText[23].position.set(centerX+2,centerY+17,0);
			document.getElementById("submit").style.visibility="visible";
			document.getElementById("learn").style.visibility="visible";
			bundle[19].visible=true;
			sticks[18].visible=true;
			cText[23].visible=true;
			sideOutline.visible=true;
			total.style.visibility="visible";
			totStick.style.visibility="visible";
			totBundle.style.visibility="visible";
			tempRequired=Math.floor(required/10)-1;
			tempRequiredSticks=required%10;
			tempElement=bundle[tempRequired];
		}
		if(frameCount==10)
		{
			resetExperiment();
		}
	}


/******************* Load Experiment objects code ***********************/


	var helpContent;
	function initialiseHelp()
	{
    helpContent="";
    helpContent = helpContent + "<h1>11-99 as bundle and sticks</h1>";
    helpContent = helpContent + "<h2>About the experiment</h2>";
    helpContent = helpContent + "<p>The experiment shows different way to stack sticks like individual and bundle.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls, additionally you can drag the sticks and bundles and add</p>";
    helpContent = helpContent + "<p>them to the horse cart to increase the required number of sticks.</p>";
    helpContent = helpContent + "<h3>Start Button is clicked by default, click on stop to pause the animation.</h3>";
    helpContent = helpContent + "<p>First screen shows a horse cart with no sticks.</p>";
    helpContent = helpContent + "<p>The horse cart is to be filled with sticks.</p>";
    helpContent = helpContent + "<h2>You can choose from the following options after clicking the Arrow Buron</h2>";
    helpContent = helpContent + "<ul></ul>";
    helpContent = helpContent + "<li>Lean Steps.</li>";
    helpContent = helpContent + "<li>Submit.</li>";
    helpContent = helpContent + "<h3>Learn Steps</h3>";
    helpContent = helpContent + "<p>Click on this if you want to see how to solve a question and count upto 99.</p>";
    helpContent = helpContent + "<p>Click on Forward Arrow for next example.</p>";
    helpContent = helpContent + "<h3>Submit</h3>";
    helpContent = helpContent + "<p>After dragging and adding the sticks and bundle to the horse cart, click on this.</p>";
    helpContent = helpContent + "<p>option to check your solution.</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

	var infoContent;
	function initialiseInfo()
	{
    infoContent =  "";
    infoContent = infoContent + "<h1>11-99 as bundle and sticks</h2>";
    infoContent = infoContent + "<h2>About the experiment</h3>";
    infoContent = infoContent + "<p>We can count upto 99 using sticks and bundle of sticks,</p>";
		infoContent = infoContent + "<p>where each individual sticks are considered as one and<p>";
		infoContent = infoContent + "<p>and each bundle of sticks are considered as tens.<p>";
		infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
	}

	function initialiseScene()
	{
    	/* Initialise Scene Variables */
    	mySceneTLX = 0.0;
    	mySceneTLY = 50.0;
    	mySceneBRX = 100.0;
    	mySceneBRY = 0.0;
	}

	function initialiseOtherVariables()
	{
		/* Initialise other globally declared Variables */
	  centerX = (mySceneBRX - mySceneTLX)/2;
	  centerY = (mySceneTLY - mySceneBRY)/2;
		frameCount=0;
		tempRequired=0;
		totStick=document.getElementById("stick");
		totBundle=document.getElementById("bundle");
		total=document.getElementById("total");
	}


	/*This function creates a canvas texture that is used with */
  /*material to form a new material for any objet which serves as a text.*/
	 function writeCanvas(value,index,color)
	{
		 canvas = document.createElement('canvas');
		 canvas.width=200;
		 canvas.height=100;
		 context = canvas.getContext('2d');
		 		 context.font = "Bold 40pt Arial";
		 		 context.fillStyle = color;
		 		 context.fillText(value, 0, 50);
		 texture = new THREE.Texture(canvas)
		 texture.needsUpdate = true;
		 material = new THREE.MeshBasicMaterial( {map: texture, side:THREE.DoubleSide } );
		 material.transparent = true;
		 cText[index] = new THREE.Mesh(
 	 			new THREE.PlaneGeometry(6, 4),
 	 			material
 	 		);
 	 	PIEaddElement(cText[index]);
	}

/**
 * This function creates the scene of the experiment.
 * It is called by the library during document load.
 * It is recommended that you do not initialise any variables globally.
 * It is recommended that this function create all the elements first.
 * It should then call a reset function to initialise values.
 * This will allow a reset exepriment functionality to be implemented.
 * <p>
 * It is recommended that the developer first draw a sketch of the experiment on a piece of paper.
 * The sketch should specify the size and initial position of all the elements that comprise the experiment.
 * <p>
 * Once the sketch is ready, the developer should instantiate the elements at the intial location.
 * <p>
 * The (x,y) position of the camera would be set to the center of area of interest.
 * The z position of the camera would be such that the field of vision would cover the height.
 * The aspect ratio of the camera whould cover the width.
 * <p>
 * Two lights would be suitably positioned to light the area of interest.
 * <p>
 * The developer can position the camera and lights if he so chooses.
 * <p>
 * The camera would adjust and cover a wider and taller area depending on the dimensions of the display.
 * hence the background (if any) shoudl extend beyond the area of interest.
 * <p>
 * Finally the developer should call the function PIEsetAreaOfInterest(tlx, tly, brx, bry).
 * The parameters are the top left corner and bottom right corner coordinates.
 * The X axis goes from lef to right of te display and the y axis goes from bottom to up.
 * The area of interst should be wide and tall enough to cover all potential movements.
 * <p>
 * The developer should have a fairly good idea of the controls forthe experiment.
 * Once the scene is setup and is visible, the developer can include the controls and
 * the callback functions needed to update the experiment parameters.
 * The PIE library provides a set of functions to implement common controls.
 * <p>
 * The developer should code and assign proper event handlers to the elements (to control animation).
 */

	function loadExperimentElements()
		{
			var geometry;
			var material;
			var texture;

	    PIEsetExperimentTitle("11-99 as bundle and sticks");
	    PIEsetDeveloperName("Sachin Chand");
	    PIEhideControlElement();

	    /* initialise help and info content */
	    initialiseHelp();
	    initialiseInfo();

	    /* initialise Scene */
	    initialiseScene();

	    /* initialise Other Variables */
	    initialiseOtherVariables();


			/*Background plane*/
		   geometry = new THREE.PlaneGeometry( 120 , 60, 32 );
		   	material = new THREE.MeshBasicMaterial( {color: 0xa3c6ff, side: THREE.DoubleSide} );
		   	background = new THREE.Mesh( geometry, material );
		   	background.position.set(centerX,centerY-1,0);
		   	PIEaddElement(background);
			//Side panel//
			geometry = new THREE.PlaneGeometry( 20 , 11, 32 );
			 material = new THREE.MeshBasicMaterial( {color: 0x00000a, side: THREE.DoubleSide} );
			 sideOutline = new THREE.Mesh( geometry, material );
			 sideOutline.position.set(centerX+35,centerY-17,0);
			 PIEaddElement(sideOutline);
			geometry = new THREE.PlaneGeometry( 19 , 10, 32 );
 			 material = new THREE.MeshBasicMaterial( {color: 0xa3c6ff, side: THREE.DoubleSide} );
 			 background = new THREE.Mesh( geometry, material );
 			 background.position.set(centerX+35,centerY-17,0);
 			 PIEaddElement(background);
			//Create Arrow and add it to the scene
	  	geometry = new THREE.ConeGeometry(0.08,0.2,64,49,true,0,6.3);
	  		material = new THREE.MeshBasicMaterial( {color: 0x000000} );
			outlinearrow = new THREE.Mesh(geometry, material);
	  		outlinearrow.position.set(centerX,centerY-20,1);
	  		outlinearrow.scale.set(35,24,0);
	  		outlinearrow.rotateZ(-Math.PI/2);
	  	material = new THREE.MeshBasicMaterial( {color: 0x88ade8} );
	  		arrow = new THREE.Mesh(geometry, material);
	  		arrow.position.set(centerX,centerY-20,1);
	  		arrow.scale.set( 30, 20, 3 );
	  		arrow.rotateZ(-Math.PI/2);
				PIEaddElement(outlinearrow);
				PIEaddElement(arrow);

				/*Addition of different experiment objects*/
				geometry = new THREE.PlaneGeometry(15, 7,0);
				texture = new THREE.ImageUtils.loadTexture( 'images/bundle.png' );
				for (var i = 0; i < 9; i++)
				{
					material = new THREE.MeshBasicMaterial( {transparent:true, map: texture, side: THREE.DoubleSide } );
					bundle[i] = new THREE.Mesh(geometry, material);
					PIEaddElement(bundle[i]);
					bundle[i].rotateZ(Math.PI/4);
					PIEdragElement(bundle[i]);										///setting drag for bundle
					PIEsetDrag(bundle[i], bundleDrag);
				}
				for (var i = 9; i < 20; i++)
				{
					material = new THREE.MeshBasicMaterial( {transparent:true, map: texture, side: THREE.DoubleSide } );
					bundle[i] = new THREE.Mesh(geometry, material);
					PIEaddElement(bundle[i]);
					bundle[i].rotateZ(Math.PI/4);
				}
				bundle[18].position.set(centerX-8,centerY+5,0);
				bundle[19].position.set(centerX+30,centerY-19,0);
				bundle[19].scale.set(0.4,0.4,0.4);

				geometry = new THREE.PlaneGeometry(10,2,0);
				texture = new THREE.ImageUtils.loadTexture( 'images/stick.png' );

				for (var i = 0; i < 19; i++)
				{
				material = new THREE.MeshStandardMaterial( { transparent:true,map: texture, side: THREE.DoubleSide } );
				sticks[i]= new THREE.Mesh(geometry,material);
				PIEaddElement(sticks[i]);
				sticks[i].rotateZ(Math.PI/4);
				if(i<10)
				{
					PIEdragElement(sticks[i]);
			    PIEsetDrag(sticks[i], sticksDrag);
				}
			}
			sticks[18].scale.set(0.5,0.5,0.5);
			sticks[18].position.set(centerX+30,centerY-15,0);




				geometry = new THREE.PlaneGeometry(30, 16,0);
				texture = new THREE.ImageUtils.loadTexture( 'images/cart.png' );
				material = new THREE.MeshStandardMaterial( { transparent:true,map: texture, side: THREE.DoubleSide } );
				cart = new THREE.Mesh(geometry,material);
				PIEaddElement(cart);


			////Addition of all Texts/////
			writeCanvas("Total",0,"#000000")
			cText[0].position.set(centerX-5,centerY-10,0);

			writeCanvas("X",1,"#000000")
			cText[1].position.set(centerX+37,centerY-20.5,0);
			writeCanvas("X",2,"#000000")
			cText[2].position.set(centerX+37,centerY-15.5,0);

			writeCanvas("Need",3,"#000000")
			cText[3].position.set(centerX-5,centerY+17,0);
			writeCanvas("Sticks",4,"#000000")
			cText[4].position.set(centerX+5,centerY+17,0);
			var x=1;
			for (var i = 5; i <14; i++)
			{
				writeCanvas(i-4,i,"#14098c");
			}
			for (var i = 14; i < 23; i++)
			{
					writeCanvas(10*x,i,"#14098c");
					x++;
			}
			writeCanvas("",23,"#a30002");
	    /* Reset all positions */
	    resetExperiment();
	    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
	}

	/******************* End of Load Experiment objects code ***********************/

	/******************* Reset Experiment code ***********************/

	/**
	 * This function resets the position of all experiment elements to their default values.
	 * <p>
	 * This is called during initial document load.
	 * This is also be called by the system provided reset button.
	 * <p>
	 * Apart from the position, this should also reset all variables which can be controlled by the user.
	 * This function will also clear any output variables/graphs
	 */
	function resetExperiment()
	{
		defaultProperties();
		document.getElementById("submit").style.visibility="hidden";
		document.getElementById("learn").style.visibility="hidden";
		sideOutline.visible=false;
		total.style.visibility="hidden";
		totStick.style.visibility="hidden";
		totBundle.style.visibility="hidden";
		total.innerHTML='';
		totStick.innerHTML='';
		totBundle.innerHTML='';
		bundle[19].visible=false;
		sticks[18].visible=false;
		for (var i = 0; i < 19; i++) {
			sticks[i].visible=false;
		}
		for (var i = 0; i < 9; i++) {
			bundle[i].visible=false;
		}
	  initialiseOtherVariables();
		PIEstartAnimation();
	}

	/******************* End of Reset Experiment code ***********************/

	function move(element)
	{
		if(tempRequired >= 0)
		{
			if(element.position.x < centerX-15)
			{
				element.position.x += 0.4;
			}
			else if(element.position.y <= centerY+10)
			{
				element.position.y += 0.4;
			}
			else
			{
				cText[Math.floor(required/10)- tempRequired +13].visible=true;
				bundle[Math.floor(required/10)- tempRequired +8].visible=true;
				tempRequired--;
				collected +=10;
				bundleCollected++;
				tempElement = bundle[tempRequired];
			}
		}
		else if(tempRequiredSticks >= 1)
		{
			tempElement = sticks[tempRequiredSticks-1];
			if(tempElement.position.x < centerX-15)
			{
				tempElement.position.x += 0.4;
			}
			else if(tempElement.position.y <= centerY+5)
			{
				tempElement.position.y += 0.4;
			}
			else
			{
				cText[required%10- tempRequiredSticks +5].visible=true;
				sticks[required%10- tempRequiredSticks +9].visible=true;
				tempRequiredSticks--;
				collected +=1;
				stickCollected++;
				tempElement = sticks[tempRequiredSticks];
			}
		}
	}

	/******************* Update (animation changes) code ***********************/

	/**
	 * This function updates the location of all experiment elements during each animation frame.
	 * <p>
	 * The function receives both animation time as well as the dt (time difference) from last call.
	 * This function is expected to implement the laws of physics to update the position.
	 * This function will also update any output variables/graphs
	 * <p>
	 * Important Note : Boundary Events
	 * <p>
	 * During any physics simulation you will reach a boundary event.
	 * In our case, the boundary even is the ball hitting any of the walls.
	 * The boundary event typically changes the sign of velocity/acceleration.
	 * The boundary event is most likely to happen in the middle of the two calls.
	 * The library allows the experiment to change the simulation time by processing partial time.
	 * This function can call a library function with the time remaining to be processed before exiting.
	 * <p>
	 * @param  t       The time in milliseconds elapsed since the beginning of animation cycle
	 * @param  dt      The time in milliseconds elapsed since the last acll to this function
	 */
	function updateExperimentElements(t, dt)
	{

		for (var i = 0; i < 9; i++)
		{
			if(bundle[i].position.x > centerX-20 && bundle[i].position.y> centerY && bundle[i].position.x < centerX+10)
			{
				bundle[i].scale.set(0.5,0.5,0.5);
			}
			else
			{
				bundle[0].scale.set(1,1,1);
			}
		}
		for (var i = 0; i < 9; i++) {

		if(bundle[i].position.x > centerX-15 && bundle[i].position.y> centerY+5 && bundle[i].position.x < centerX)
		{
			bundle[i].visible=false;
			if(bundleAdd[i]==0)
			{
				bundleAdd[i]=1;
				bundle[i].visible=false;
				bundle[bundleCollected+9].visible=true;
				cText[bundleCollected+14].visible=true;
				bundleCollected ++;
				collected=stickCollected+bundleCollected*10;
				total.innerHTML = collected;
				totBundle.innerHTML = bundleCollected;
			}
		}
	}
		for (var i = 0; i < 9; i++)
		{
			if(sticks[i].position.x > centerX-20 && sticks[i].position.y> centerY && sticks[i].position.x < centerX+10)
			{
				sticks[i].scale.set(0.5,0.5,0.5);
			}
			else
			{
				sticks[i].scale.set(1,1,1);
			}
		}
		for (var i = 0; i < 9; i++) {

		if(sticks[i].position.x > centerX-15 && sticks[i].position.y> centerY+5 && sticks[i].position.x < centerX)
		{
			sticks[i].visible=false;
			if(stickAdd[i]==0)
			{
				sticks[stickCollected+9].visible=true;
				cText[stickCollected+5].visible=true;
				stickAdd[i]=1;
				stickCollected++;
				collected = stickCollected+ bundleCollected*10;
				totStick.innerHTML = stickCollected;
				total.innerHTML=collected;
			}
		}
	}

	if(total.innerHTML==required)
	{
		total.style.background="#00ff00";
		totStick.style.background="#00ff00";
		totBundle.style.background="#00ff00";
		for (var i = 9; i < 18; i++)
		{
			sticks[i].visible=false;
			bundle[i].visible=false;
		}
		for (var i = 5; i < 23; i++) {
			cText[i].visible=false;
		}
		if(cart.position.x < centerX + 70)
		{
			bundle[18].visible=true;
			cart.position.x += 0.4;
			bundle[18].position.x += 0.4;
		}
		else {
			for (var i = 9; i < 9+required%10; i++)
			{
				sticks[i].scale.set(0.8,0.8,0.8);
				sticks[i].position.set(centerX-25+i*2,centerY,0);
				sticks[i].visible=true;
			}
			for (var i = 9; i < 9+Math.floor(required/10); i++)
			{
				bundle[i].position.set(centerX-50+i*4,centerY+10,0);
				bundle[i].visible=true;
			}
			for (var i = 5; i < 5+required%10; i++)
			{
				cText[i].scale.set(0.8,0.8,0.8);
				cText[i].position.set(centerX-17+i*2,centerY-5,0);
				cText[i].visible=true;
			}
			for (var i = 14; i < 14+Math.floor(required/10); i++)
			{
				cText[i].scale.set(0.8,0.8,0.8);
				cText[i].position.set(centerX-70+i*4,centerY+5,0);
				cText[i].visible=true;
			}
			}
		}
		if(learn)
		{
			if(tempRequiredSticks>=0 || tempRequired>=0)
			{
				move(tempElement);
			}
			total.innerHTML=collected;
			totBundle.innerHTML = bundleCollected;
			totStick.innerHTML = stickCollected;
		}
	}
	/******************* Update (animation changes) code ***********************/
