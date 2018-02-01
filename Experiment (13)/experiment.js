var mySceneTLX;        
var mySceneTLY;        
var mySceneBRX;        
var firstTime =0;
var numberText;
var mySceneBRY;        
var toffeeArray;
function initialiseHelp() {
    helpContent="";
    helpContent = helpContent + "<h2>Counting 0-9 </h2>";
    helpContent = helpContent + "<h3><u>About the experiment</u></h3>";
    helpContent = helpContent + "<p>In this experiment,we are trying to show Counting of numbers from 0 to 9 using pictorial representation.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<h4>Click on start button to start the animation</h4>";
    helpContent = helpContent + "<p>Counting will start</p>";
    helpContent = helpContent + "<h4>Click on Reset button to reset animation</h4>";
    helpContent = helpContent + "<h4>Click on |>>| button to make animation rate faster than normal</h4>";
    
    helpContent = helpContent + "<h4>Click on |<<| button to make animation rate slower than normal</h4>";
    helpContent = helpContent + "<h4>Click on start button and then drag anywhere to view a 360 degree view and scroll to zoom</h4>";
    helpContent = helpContent + "<h4>Click on stop button to stop the animation</h4>";
    helpContent = helpContent + "<p>Counting will stop/p>";
    helpContent = helpContent + "<h3>Interaction</h3>";
    helpContent = helpContent + "<p> User can use mouse controls to look around as it's a 3D model .</p>";
    helpContent = helpContent + "<h3> Happy Experimenting !!!! </h3>";






    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo() {
    infoContent =  "";
    infoContent = infoContent + "<h2>Counting 0-9 </h2>";
    infoContent = infoContent + "<h3><u>About the experiment</u></h3>";
    infoContent = infoContent + "<p>In this experiment,we are trying to show Counting of numbers from 0 to 9 using pictorial representation.</p>";
    
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene() {
    mySceneTLX = 0.0;
    mySceneTLY = 20.0;
    mySceneBRX = 5.0;
    mySceneBRY = -20.0;
}

function setOn(){
	PIErender();
}

function setOff(){ 
	resetExperiment();
	PIErender();
}
function pieSetInputOutputDisplay(){
	
}
var scalar = 1.0;
function speedUp(){
	if (scalar < 4){
		scalar = scalar*2;
		//speed = speed*2;

	}
}
function speedDown(){
	if (scalar>0.25){
		scalar = scalar/2;
		//speed =speed/2;
	}

}	
function myimage(){
/*	var geometry = new THREE.CubeGeometry(2, 2, 0.1);
	var meshMaterial = new THREE.MeshBasicMaterial({ transparent: false, map: THREE.ImageUtils.loadTexture('apple.png') });
	meshMaterial.side = THREE.DoubleSide;
	var mesh = new THREE.Mesh(geometry, meshMaterial);
	PIEaddElement(mesh);
	PIErender();
*/
}
function mytext(){

  var loader = new THREE.FontLoader();
        loader.load( 'optimer_regular.typeface.json', function ( font ) {
            var count = 0;
            var textGeometry = new THREE.TextGeometry( count, {
                font: font,
                size: 6,
                height:1,
                curveSegments: 12,
                bevelThickness: 1,
                bevelSize: 1,
                bevelEnabled: false
            });
            var textMaterial = new THREE.MeshPhongMaterial( 
                { color: "black",transparent:true,opacity:1.0,specular:"#B6C015"}
            );
            numberText[count] = new THREE.Mesh( textGeometry, textMaterial );
            numberText[count].position.set(-3,-9,0);
            PIEaddElement( numberText[count] );
            count += 1;
            var textGeometry = new THREE.TextGeometry( count, {
                font: font,
                size: 6,
                height:1,
                curveSegments: 12,
                bevelThickness: 1,
                bevelSize: 1,
                bevelEnabled: false
            });
            var textMaterial = new THREE.MeshPhongMaterial( 
                { color: "black",transparent:true,opacity:1.0,specular:"#B6C015"}
            );
            numberText[count] = new THREE.Mesh( textGeometry, textMaterial );
            numberText[count].position.set(-3,-9,0);
            PIEaddElement( numberText[count] );
            count += 1;
            var textGeometry = new THREE.TextGeometry( count, {
                font: font,
                size: 6,
                height:1,
                curveSegments: 12,
                bevelThickness: 1,
                bevelSize: 1,
                bevelEnabled: false
            });
            var textMaterial = new THREE.MeshPhongMaterial( 
                { color: "black",transparent:true,opacity:1.0,specular:"#B6C015"}
            );
            numberText[count] = new THREE.Mesh( textGeometry, textMaterial );
            numberText[count].position.set(-3,-9,0);
            PIEaddElement( numberText[count] );
            count += 1;
            var textGeometry = new THREE.TextGeometry( count, {
                font: font,
                size: 6,
                height:1,
                curveSegments: 12,
                bevelThickness: 1,
                bevelSize: 1,
                bevelEnabled: false
            });
            var textMaterial = new THREE.MeshPhongMaterial( 
                { color: "black",transparent:true,opacity:1.0,specular:"#B6C015"}
            );
            numberText[count] = new THREE.Mesh( textGeometry, textMaterial );
            numberText[count].position.set(-3,-9,0);
            PIEaddElement( numberText[count] );
            count += 1;
            var textGeometry = new THREE.TextGeometry( count, {
                font: font,
                size: 6,
                height:1,
                curveSegments: 12,
                bevelThickness: 1,
                bevelSize: 1,
                bevelEnabled: false
            });
            var textMaterial = new THREE.MeshPhongMaterial( 
                { color: "black",transparent:true,opacity:1.0,specular:"#B6C015"}
            );
            numberText[count] = new THREE.Mesh( textGeometry, textMaterial );
            numberText[count].position.set(-3,-9,0);
            PIEaddElement( numberText[count] );
            count += 1; 
            var textGeometry = new THREE.TextGeometry( count, {
                font: font,
                size: 6,
                height:1,
                curveSegments: 12,
                bevelThickness: 1,
                bevelSize: 1,
                bevelEnabled: false
            });
            var textMaterial = new THREE.MeshPhongMaterial( 
                { color: "black",transparent:true,opacity:1.0,specular:"#B6C015"}
            );
            numberText[count] = new THREE.Mesh( textGeometry, textMaterial );
            numberText[count].position.set(-3,-9,0);
            PIEaddElement( numberText[count] );
            count += 1;
            var textGeometry = new THREE.TextGeometry( count, {
                font: font,
                size: 6,
                height:1,
                curveSegments: 12,
                bevelThickness: 1,
                bevelSize: 1,
                bevelEnabled: false
            });
            var textMaterial = new THREE.MeshPhongMaterial( 
                { color: "black",transparent:true,opacity:1.0,specular:"#B6C015"}
            );
            numberText[count] = new THREE.Mesh( textGeometry, textMaterial );
            numberText[count].position.set(-3,-9,0);
            PIEaddElement( numberText[count] );
            count += 1;
            var textGeometry = new THREE.TextGeometry( count, {
                font: font,
                size: 6,
                height:1,
                curveSegments: 12,
                bevelThickness: 1,
                bevelSize: 1,
                bevelEnabled: false
            });
            var textMaterial = new THREE.MeshPhongMaterial( 
                { color: "black",transparent:true,opacity:1.0,specular:"#B6C015"}
            );
            numberText[count] = new THREE.Mesh( textGeometry, textMaterial );
            numberText[count].position.set(-3,-9,0);
            PIEaddElement( numberText[count] );
            count += 1;
            var textGeometry = new THREE.TextGeometry( count, {
                font: font,
                size: 6,
                height:1,
                curveSegments: 12,
                bevelThickness: 1,
                bevelSize: 1,
                bevelEnabled: false
            });
            var textMaterial = new THREE.MeshPhongMaterial( 
                { color: "black",transparent:true,opacity:1.0,specular:"#B6C015"}
            );
            numberText[count] = new THREE.Mesh( textGeometry, textMaterial );
            numberText[count].position.set(-3,-9,0);
            PIEaddElement( numberText[count] );
            count += 1;
            var textGeometry = new THREE.TextGeometry( count, {
                font: font,
                size: 6,
                height:1,
                curveSegments: 12,
                bevelThickness: 1,
                bevelSize: 1,
                bevelEnabled: false
            });
            var textMaterial = new THREE.MeshPhongMaterial( 
                { color: "black",transparent:true,opacity:1.0,specular:"#B6C015"}
            );
            numberText[count] = new THREE.Mesh( textGeometry, textMaterial );
            numberText[count].position.set(-3,-9,0);
            PIEaddElement( numberText[count] );
            count = count + 1;
            for(i=0;i<10;i = i+1){
            	numberText[i].visible = false;
            }

            numberText[0].visible = true;
            PIErender();
        });
  	
}

var tc = 0;
function mytoffee(x,y,z,color1,color2){
	var toffee = new THREE.Mesh(new THREE.CylinderGeometry(1.3,1.3,2.5,32),new THREE.MeshPhongMaterial({color : color1}));
	toffee.position.set(x,y,z);


	var toffee1 = new THREE.Mesh(new THREE.SphereGeometry(1.3,24,32),new THREE.MeshPhongMaterial({color : color1}));
	toffee.add(toffee1);
	toffee1.position.set(0,1,0);

	var toffee12 = new THREE.Mesh(new THREE.SphereGeometry(1.3,24,32),new THREE.MeshPhongMaterial({color : color1}));
	toffee.add(toffee12);
	toffee12.position.set(0,-1,0);
	
	var toffee123 = new THREE.Mesh(new THREE.CylinderGeometry(0.000001,1.2,3,32),new THREE.MeshPhongMaterial({color : color2}));
	toffee.add(toffee123);
	toffee123.position.set(0,-2.3,0);

	var toffee1234 = new THREE.Mesh(new THREE.CylinderGeometry(0.00001,1.2,3,32),new THREE.MeshPhongMaterial({color : color2}));
	toffee.add(toffee1234);
	toffee1234.rotation.z = Math.PI;
	toffee1234.position.set(0,2.3,0);

	PIEaddElement(toffee);
	return toffee;
}
function loadExperimentElements() {
    
    var geometry;
    var material;
    var texture;
    PIEsetExperimentTitle("Counting 0-9");
    PIEsetDeveloperName("Anupam Singhal");

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();

    controls = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);
	
	toffeeArray = new Array(9);
    var differ = 6;
    var s = 25;
    toffeeArray[0] = mytoffee(-s,6,0,"yellow","blue");
    toffeeArray[1] = mytoffee(-s+differ,6,0,"yellow","red");

    toffeeArray[2] = mytoffee(-s+differ*2,6,0,"pink","black");
    toffeeArray[3] = mytoffee(-s+differ*3,6,0,"orange","darkgreen");
    toffeeArray[4] = mytoffee(-s+differ*4,6,0,"violet","yellow");
    toffeeArray[5] = mytoffee(-s+differ*5,6,0,"white","darkblue");
    toffeeArray[6] = mytoffee(-s+differ*6,6,0,"brown","orange");
    toffeeArray[7] = mytoffee(-s+differ*7,6,0,"yellow","black");
    toffeeArray[8] = mytoffee(-s+differ*8,6,0,"gray","red");

    toffeeArray[0].visible =false;	
	toffeeArray[1].visible =false;
    toffeeArray[2].visible =false;
    toffeeArray[3].visible =false;
    toffeeArray[4].visible =false;
    toffeeArray[5].visible =false;
    toffeeArray[6].visible =false;
    toffeeArray[7].visible =false;
    toffeeArray[8].visible =false;
        
    numberText = new Array(10);
    numberText[0] = new THREE.Mesh( new THREE.SphereGeometry(1,24,32), new THREE.MeshBasicMaterial({color : "white"}) );

    numberText[1] = new THREE.Mesh( new THREE.SphereGeometry(1,24,32), new THREE.MeshBasicMaterial({color : "white"}) );
    numberText[2] = new THREE.Mesh( new THREE.SphereGeometry(1,24,32), new THREE.MeshBasicMaterial({color : "white"}) );
    numberText[3] = new THREE.Mesh( new THREE.SphereGeometry(1,24,32), new THREE.MeshBasicMaterial({color : "white"}) );
    numberText[4] = new THREE.Mesh( new THREE.SphereGeometry(1,24,32), new THREE.MeshBasicMaterial({color : "white"}) );
    numberText[5] = new THREE.Mesh( new THREE.SphereGeometry(1,24,32), new THREE.MeshBasicMaterial({color : "white"}) );
    numberText[6] = new THREE.Mesh( new THREE.SphereGeometry(1,24,32), new THREE.MeshBasicMaterial({color : "white"}) );
    numberText[7] = new THREE.Mesh( new THREE.SphereGeometry(1,24,32), new THREE.MeshBasicMaterial({color : "white"}) );
    numberText[8] = new THREE.Mesh( new THREE.SphereGeometry(1,24,32), new THREE.MeshBasicMaterial({color : "white"}) );
    
    numberText[9] = new THREE.Mesh( new THREE.SphereGeometry(1,24,32), new THREE.MeshBasicMaterial({color : "white"}) );
    mytext();
    myimage();
    PIEscene.background = new THREE.Color("#4A012D");
/*    var groundMaterial = new THREE.MeshBasicMaterial(  );
 
 	var mesh233 = new THREE.Mesh( new THREE.PlaneBufferGeometry( 6000, 6000 ), groundMaterial );
    mesh233.position.y = - 19;
    mesh233.material.color.set("lightgreen" );
    mesh233.rotation.x = - Math.PI / 2;
    PIEaddElement(mesh233);

    var groundMaterial = new THREE.MeshBasicMaterial(  );
    mesh233 = new THREE.Mesh( new THREE.PlaneBufferGeometry( 550, 5550 ), groundMaterial );
    mesh233.position.y = - 17;
    mesh233.material.color.set("green" );
    mesh233.rotation.x = - Math.PI / 2;
    PIEaddElement(mesh233);
    var groundMaterial = new THREE.MeshBasicMaterial(  );
 
	 mesh233 = new THREE.Mesh( new THREE.PlaneBufferGeometry(300, 300 ), groundMaterial );
    mesh233.position.y = - 15;
    mesh233.material.color.set("darkgreen" );
    mesh233.rotation.x = - Math.PI / 2;
    PIEaddElement(mesh233);
 */
    pieSetInputOutputDisplay();
 
    document.getElementById("start").addEventListener("click", setOn);
    document.getElementById("stop").addEventListener("click",setOff);
    
    resetExperiment();
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    PIEadjustCamera(0,0,55);
   
    PIErender();
}
function resetExperiment()
{
	numberText[0].visible = true;
	numberText[0].material.opacity = 1;
	numberText[1].visible = false;
	numberText[2].visible = false;
	numberText[3].visible = false;
	numberText[4].visible = false;
	numberText[5].visible = false;
	numberText[6].visible = false;
	numberText[7].visible = false;
	numberText[8].visible = false;
	numberText[9].visible = false;

	toffeeArray[0].visible = false;

	toffeeArray[1].visible = false;
	toffeeArray[2].visible = false;
	toffeeArray[3].visible = false;
	toffeeArray[4].visible = false;
	toffeeArray[5].visible = false;
	toffeeArray[6].visible = false;
	toffeeArray[7].visible = false;
	toffeeArray[8].visible = false;
	PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
	PIEadjustCamera(0,0,55);
	PIErender();
}
function updateExperimentElements(t, dt)
{  
	if(firstTime == 0){
		numberText[0].visible = true;
		numberText[0].material.opacity = 1.0;
    	firstTime =1;
    	PIErender();
    }
	if(t>0 && t<3000){
		numberText[0].visible = true;
		numberText[0].material.opacity = t/3000;
	}

	if(t>=3000 && t<6000){
		numberText[0].material.opacity = (6000-t)/3000;
	}

	if(t>=6000 && t<9000){
		numberText[0].visible = false;
		numberText[1].visible = true;
		toffeeArray[4].visible = true;
		numberText[1].material.opacity = (t-6000)/3000;
	}		
	if(t>=9000 && t<12000){
		numberText[1].material.opacity = (12000-t)/3000;
		if(t>11000){
			toffeeArray[4].visible = false;
		}
	}

	if(t>=12000 && t<15000){
		numberText[1].visible = false;
		toffeeArray[3].visible = true;
		toffeeArray[4].visible = true;
		numberText[2].visible = true;
		numberText[2].material.opacity = (t-12000)/3000;
	}		
	if(t>=15000 && t<18000){
		numberText[2].material.opacity = (18000-t)/3000;
		if(t>17000){

		toffeeArray[3].visible = false;
		toffeeArray[4].visible = false;
		}
	}

	if(t>=18000 && t<21000){
		numberText[2].visible = false;
		toffeeArray[3].visible = true;
		toffeeArray[4].visible = true;
		toffeeArray[5].visible = true;
		numberText[3].visible = true;
		numberText[3].material.opacity = (t-18000)/3000;
	}		
	if(t>=21000 && t<24000){
		numberText[3].material.opacity = (24000-t)/3000;
		if(t>23000){

			toffeeArray[3].visible = false;
			toffeeArray[4].visible = false;
			toffeeArray[5].visible = false;
		}

	}
	
	if(t>=24000 && t<27000){
		numberText[3].visible = false;
		toffeeArray[3].visible = true;
		toffeeArray[4].visible = true;
		toffeeArray[5].visible = true;
		toffeeArray[2].visible = true;
		numberText[4].visible = true;
		numberText[4].material.opacity = (t-24000)/3000;
	}		
	if(t>=27000 && t<30000){
		numberText[4].material.opacity = (30000-t)/3000;
		if(t>29000){
			toffeeArray[2].visible = false;	
			toffeeArray[3].visible = false;
			toffeeArray[4].visible = false;
			toffeeArray[5].visible = false;
		}

	}

	if(t>=30000 && t<33000){
			numberText[4].visible = false;
	numberText[5].visible = true;
		toffeeArray[3].visible = true;
		toffeeArray[4].visible = true;
		toffeeArray[5].visible = true;
		toffeeArray[2].visible = true;
		toffeeArray[6].visible = true;
		numberText[5].material.opacity = (t-30000)/3000;
	}		
	if(t>=33000 && t<36000){
		numberText[5].material.opacity = (36000-t)/3000;
		if(t>35000){
			toffeeArray[6].visible = false;
			toffeeArray[2].visible = false;	
			toffeeArray[3].visible = false;
			toffeeArray[4].visible = false;
			toffeeArray[5].visible = false;
		}
	}		

	if(t>=36000 && t<39000){
		numberText[5].visible = false;

		toffeeArray[3].visible = true;
		toffeeArray[4].visible = true;
		toffeeArray[5].visible = true;
		toffeeArray[2].visible = true;
		toffeeArray[6].visible = true;
		toffeeArray[1].visible = true;

		numberText[6].visible = true;
		numberText[6].material.opacity = (t-36000)/3000;
	}		
	if(t>=39000 && t<42000){
		numberText[6].material.opacity = (42000-t)/3000;
		if(t>41000){
			toffeeArray[1].visible = false;
			toffeeArray[6].visible = false;
			toffeeArray[2].visible = false;	
			toffeeArray[3].visible = false;
			toffeeArray[4].visible = false;
			toffeeArray[5].visible = false;
		}
	
	}		

	if(t>=42000 && t<45000){
		numberText[6].visible = false;
		toffeeArray[7].visible = true;
		toffeeArray[3].visible = true;
		toffeeArray[4].visible = true;
		toffeeArray[5].visible = true;
		toffeeArray[2].visible = true;
		toffeeArray[6].visible = true;
		toffeeArray[1].visible = true;
		numberText[7].visible = true;
		numberText[7].material.opacity = (t-42000)/3000;
	}		
	if(t>=45000 && t<48000){
		numberText[7].material.opacity = (48000-t)/3000;
		if(t>47000){
			toffeeArray[7].visible = false;
			toffeeArray[1].visible = false;
			toffeeArray[6].visible = false;
			toffeeArray[2].visible = false;	
			toffeeArray[3].visible = false;
			toffeeArray[4].visible = false;
			toffeeArray[5].visible = false;
		}
	
	}

	if(t>=48000 && t<51000){
		numberText[7].visible = false;
		toffeeArray[0].visible = true;
		toffeeArray[7].visible = true;
		toffeeArray[3].visible = true;
		toffeeArray[4].visible = true;
		toffeeArray[5].visible = true;
		toffeeArray[2].visible = true;
		toffeeArray[6].visible = true;
		toffeeArray[1].visible = true;
		numberText[8].visible = true;
		numberText[8].material.opacity = (t-48000)/3000;
	}		
	if(t>=51000 && t<54000){
		numberText[8].material.opacity = (54000-t)/3000;
		if(t>53000){
			toffeeArray[0].visible = false;
			toffeeArray[7].visible = false;
			toffeeArray[1].visible = false;
			toffeeArray[6].visible = false;
			toffeeArray[2].visible = false;	
			toffeeArray[3].visible = false;
			toffeeArray[4].visible = false;
			toffeeArray[5].visible = false;
		}
	
	}

	if(t>=54000 && t<57000){
		toffeeArray[8].visible = true;
		toffeeArray[0].visible = true;
		toffeeArray[7].visible = true;
		toffeeArray[3].visible = true;
		toffeeArray[4].visible = true;
		toffeeArray[5].visible = true;
		toffeeArray[2].visible = true;
		toffeeArray[6].visible = true;
		toffeeArray[1].visible = true;
		numberText[8].visible = false;
		numberText[9].visible = true;
		numberText[9].material.opacity = (t-54000)/3000;
	}		
	if(t>=57000 && t<60000){
		numberText[9].material.opacity = (60000-t)/3000;

	
	}								
	if(t>=60000){
		numberText[9].visible = true;
		numberText[9].material.opacity = 1;
	}
}

