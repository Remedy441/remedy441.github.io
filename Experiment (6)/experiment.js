var mySceneTLX;        
var mySceneTLY;        
var mySceneBRX;        
var mySceneBRY;        
var first_time = 0;
var mySceneW;          
var mySceneH;          
var Velocity=1;

var myCenterX;         
var myCenterY;   
var ammetersphere;
var wire;      
var swtch;
var lampBulb;
var onoff;
var connector;
var thinFilm;
var smallplus;
var smallplus2;
var smallminus;
var plus;
var plus2;
var minus;
var speed=1;
var arrowLeft;
var arrowLeftPointer1;
var arrowLeftPointer2;
var arrowRight;
var arrowRightPointer1;
var arrowRightPointer2;
var arrowUp;
var arrowUpPointer1;
var arrowUpPointer2;
var arrowDown;
var arrowDownPointer1;
var arrowDownPointer2;

var controls;
var helpContent;
var connector;
var mount;
function initialiseHelp() {
    helpContent="";
    helpContent = helpContent + "<h2>Merging Colours</h2>";
    helpContent = helpContent + "<h3><u>About the experiment</u></h3>";
    helpContent = helpContent + "<p>In this experiment,we are trying to show that when a disc with all rainbow colors is rotated, a resultant white color can be seen .</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<h4>Click on start button to start the animation</h4>";
    helpContent = helpContent + "<p>The disc will start rotating </p>";
    helpContent = helpContent + "<h4>Click on Reset button to reset animation</h4>";
    helpContent = helpContent + "<h4>Click on |>>| button to make animation rate faster than normal</h4>";
    
    helpContent = helpContent + "<h4>Click on |<<| button to make animation rate slower than normal</h4>";
    helpContent = helpContent + "<h4>Click on start button and then drag anywhere to view a 360 degree view and scroll to zoom</h4>";
    helpContent = helpContent + "<h4>Click on stop button to stop the animation</h4>";
    helpContent = helpContent + "<p>The disc will stop rotating</p>";
    helpContent = helpContent + "<h3>Interaction</h3>";
    helpContent = helpContent + "<p> User can use mouse controls to look around as it's a 3D model .</p>";
    helpContent = helpContent + "<h3> ADDITIONAL FEATURES </h3>"
    helpContent = helpContent + "<p> 1. User can choose set of colors from 7 different rainbow colors.</p>"
    
    helpContent = helpContent + "<h3> Happy Experimenting !!!! </h3>";






    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo() {
    infoContent =  "";
    infoContent = infoContent + "<h1>Merging Colours</h1>";
    infoContent = infoContent + "<h3><u>About the experiment</u></h3>";
    infoContent = infoContent + "<p>In this experiment,we are trying to show that when a disc with all rainbow colors is rotated, a resultant white color can be seen .</p>";
    infoContent = infoContent + "<p>The experiment shows a disc with multiple colours, user can select set of colors from the menu.As the user starts the animation,disc will rotate and a resultant effect can be seen.</p>";
    infoContent = infoContent + "<p> When the disc with all seven rainbow colors is rotated, the colors fade to white; In this way Isaac Newton demonstrated that white light is a combination of the seven different colours found in a rainbow.</p>";
 	infoContent = infoContent + "<p> </p>";
    infoContent = infoContent + "<h3> ADDITIONAL FEATURES </h3>"
    infoContent = infoContent + "<p> 1. User can choose set of colors from 7 different rainbow colors.</p>"
    
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

	PIEchangeDisplayCheckbox(VString ,Allstatus[0]);
	PIEchangeDisplayCheckbox(IString ,Allstatus[1]);
	PIEchangeDisplayCheckbox(BString ,Allstatus[2]);
	PIEchangeDisplayCheckbox(GString ,Allstatus[3]);
	PIEchangeDisplayCheckbox(YString ,Allstatus[4]);
	PIEchangeDisplayCheckbox(OString ,Allstatus[5]);
	PIEchangeDisplayCheckbox(RString ,Allstatus[6]);

	PIErender();
}

function setOff(){ 


	thinFilm[0].visible = false;
	thinFilm[1].visible = false;
	
	PIEchangeInputCheckbox(VString ,Allstatus[0]);
	PIEchangeInputCheckbox(IString ,Allstatus[1]);
	PIEchangeInputCheckbox(BString ,Allstatus[2]);
	PIEchangeInputCheckbox(GString ,Allstatus[3]);
	PIEchangeInputCheckbox(YString ,Allstatus[4]);
	PIEchangeInputCheckbox(OString ,Allstatus[5]);
	PIEchangeInputCheckbox(RString ,Allstatus[6]);
	
	PIErender();
}
var colored = 7;
var RString = " Red ";
var VString = " Violet ";
var IString = " Indigo ";
var BString = " Blue ";
var GString = " Green ";
var YString = " Yellow ";
var OString = " Orange ";
var Allstatus;
function VStatus(){
		if(Allstatus[0]){
			if(colored > 1){

				Allstatus[0] = false;
				colored = colored -1;
			}
		}
		else{
			Allstatus[0] = true;
			colored = colored +1;
		}
	console.log(colored);
	PIEchangeInputCheckbox(VString,Allstatus[0]);

	chooseSetOfDiscs();
	PIErender();	

}
function IStatus(){
		if(Allstatus[1]){
			if(colored > 1){

				Allstatus[1] = false;
				colored = colored -1;
			}
		}
		else{
			Allstatus[1] = true;
			colored = colored +1;
		}
	
	console.log(colored);
	PIEchangeInputCheckbox(IString,Allstatus[1]);
	chooseSetOfDiscs();
	PIErender();	
}
function BStatus(){
		if(Allstatus[2]){
			if(colored > 1){

				Allstatus[2] = false;
				colored = colored -1;
			}
		}
		else{
			Allstatus[2] = true;
			colored = colored +1;
		}
	console.log(colored);
	PIEchangeInputCheckbox(BString,Allstatus[2]);
	chooseSetOfDiscs();
	PIErender();	
}
function GStatus(){
	
		if(Allstatus[3]){
			if(colored > 1){
				Allstatus[3] = false;
				colored = colored -1;
			}
		}
		else{
			Allstatus[3] = true;
			colored = colored +1;
		}
	console.log(colored);
	PIEchangeInputCheckbox(GString,Allstatus[3]);
	chooseSetOfDiscs();
	PIErender();	
}
function YStatus(){
	
		if(Allstatus[4]){
			if(colored > 1){
				Allstatus[4] = false;
				colored = colored -1;
			}
		}
		else{
			Allstatus[4] = true;
			colored = colored +1;
		}
	
	PIEchangeInputCheckbox(YString,Allstatus[4]);
console.log(colored);
	chooseSetOfDiscs();
	PIErender();	
}
function OStatus(){
	
	
		if(Allstatus[5]){
			if(colored > 1){
				Allstatus[5] = false;
				colored = colored -1;
			}
		}
		else{
			Allstatus[5] = true;
			colored = colored +1;
		}
console.log(colored);
	PIEchangeInputCheckbox(OString,Allstatus[5]);

	chooseSetOfDiscs();
	PIErender();	
}

function RStatus(){
	
		if(Allstatus[6]){
			if(colored > 1){
				Allstatus[6] = false;
				colored = colored -1;
			}
		}
		else{
			Allstatus[6] = true;
			colored = colored + 1;
		}
	console.log(colored);
	PIEchangeInputCheckbox(RString,Allstatus[6]);
	chooseSetOfDiscs();
	PIErender();
}
var V = "speed"
function handleVX(newvalue){
	speed = newvalue;
}
function pieSetInputOutputDisplay(){

	PIEaddInputText("Colors : "," select colors ");
	PIEaddDisplayText("Colors : "," select colors ");

    PIEaddInputCheckbox(VString,true,VStatus);
    PIEaddInputCheckbox(IString,true,IStatus);
    PIEaddInputCheckbox(BString,true,BStatus);
    PIEaddInputCheckbox(GString,true,GStatus);
    PIEaddInputCheckbox(YString,true,YStatus);
    PIEaddInputCheckbox(OString,true,OStatus);
    PIEaddInputCheckbox(RString,true,RStatus);

   PIEaddInputSlider(V, 1, handleVX, 0.1, 5, 0.1);
  
    PIEaddDisplayCheckbox(VString,Allstatus[0],VStatus);
    PIEaddDisplayCheckbox(IString,Allstatus[1],IStatus);
    PIEaddDisplayCheckbox(BString,Allstatus[2],BStatus);
    PIEaddDisplayCheckbox(GString,Allstatus[3],GStatus);
    PIEaddDisplayCheckbox(YString,Allstatus[4],YStatus);
    PIEaddDisplayCheckbox(OString,Allstatus[5],OStatus);
    PIEaddDisplayCheckbox(RString,Allstatus[6],RStatus);

    PIEaddDisplaySlider(V,Velocity,0.1,5,0.1);
	
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

var discs;		
function chooseSetOfDiscs(){
	if(colored == 7 ){

		var i=0,j=0;
		for(i=0;i<7;i++){
			for(j=0;j<7;j++){
				if(i==0){
					if(discs[0][j])
						discs[0][j].visible = true;  
				}
				else{
					if(discs[i][j])
						discs[i][j].visible = false;
				}
			}
		}

	}
	else if(colored == 6){
		var i=0,j=0;
		for(i=0;i<7;i++){
			for(j=0;j<7;j++){
				if(i==1){
					if(discs[1][j])
						discs[1][j].visible = true;  
				}
				else{
					if(discs[i][j])
						discs[i][j].visible = false;
				}
			}
		}
		var c = 0;
		if(Allstatus[0]){
			discs[1][c].material.color.setStyle("violet");
			c=c+1;
		}

		if(Allstatus[1]){
			discs[1][c].material.color.setStyle("indigo");
			c++;
		}


		if(Allstatus[2]){
			discs[1][c].material.color.setStyle("blue");
			c++;
		}

		if(Allstatus[3]){
			discs[1][c].material.color.setStyle("green");
			c++;
		}

		if(Allstatus[4]){
			discs[1][c].material.color.setStyle("yellow");
			c++;
		}

		if(Allstatus[5]){
			discs[1][c].material.color.setStyle("orange");
			c++;
		}

		if(Allstatus[6]){
			discs[1][c].material.color.setStyle("red");
			c++;
		}

	}
	else if(colored == 5){
	
		var i=0,j=0;
		for(i=0;i<7;i++){
			for(j=0;j<7;j++){
				if(i==2){
					if(discs[2][j])
						discs[2][j].visible = true;  
				}
				else{
					if(discs[i][j])
						discs[i][j].visible = false;
				}
			}
		}
		var c = 0;
		if(Allstatus[0]){
			discs[2][c].material.color.setStyle("violet");
			c=c+1;
		}

		if(Allstatus[1]){
			discs[2][c].material.color.setStyle("indigo");
			c++;
		}


		if(Allstatus[2]){
			discs[2][c].material.color.setStyle("blue");
			c++;
		}

		if(Allstatus[3]){
			discs[2][c].material.color.setStyle("green");
			c++;
		}

		if(Allstatus[4]){
			discs[2][c].material.color.setStyle("yellow");
			c++;
		}

		if(Allstatus[5]){
			discs[2][c].material.color.setStyle("orange");
			c++;
		}

		if(Allstatus[5]){
			discs[2][c].material.color.setStyle("red");
			c++;
		}

	}
	else if(colored == 4){
		
		var i=0,j=0;
		for(i=0;i<7;i++){
			for(j=0;j<7;j++){
				if(i==3){
					if(discs[3][j])
						discs[3][j].visible = true;  
				}
				else{
					if(discs[i][j])
						discs[i][j].visible = false;
				}
			}
		}
		var c = 0;
		if(Allstatus[0]){
			discs[3][c].material.color.setStyle("violet");
			c=c+1;
		}

		if(Allstatus[1]){
			discs[3][c].material.color.setStyle("indigo");
			c++;
		}


		if(Allstatus[2]){
			discs[3][c].material.color.setStyle("blue");
			c++;
		}

		if(Allstatus[3]){
			discs[3][c].material.color.setStyle("green");
			c++;
		}

		if(Allstatus[4]){
			discs[3][c].material.color.setStyle("yellow");
			c++;
		}

		if(Allstatus[5]){
			discs[3][c].material.color.setStyle("orange");
			c++;
		}

		if(Allstatus[6]){
			discs[3][c].material.color.setStyle("red");
			c++;
		}

	}
	else if(colored == 3){

		var i=0,j=0;
		for(i=0;i<7;i++){
			for(j=0;j<7;j++){
				if(i==4){
					if(discs[4][j])
						discs[4][j].visible = true;  
				}
				else{
					if(discs[i][j])
						discs[i][j].visible = false;
				}
			}
		}
		var c = 0;
		if(Allstatus[0]){
			discs[4][c].material.color.setStyle("violet");
			c=c+1;
		}

		if(Allstatus[1]){
			discs[4][c].material.color.setStyle("indigo");
			c++;
		}


		if(Allstatus[2]){
			discs[4][c].material.color.setStyle("blue");
			c++;
		}

		if(Allstatus[3]){
			discs[4][c].material.color.setStyle("green");
			c++;
		}

		if(Allstatus[4]){
			discs[4][c].material.color.setStyle("yellow");
			c++;
		}

		if(Allstatus[5]){
			discs[4][c].material.color.setStyle("orange");
			c++;
		}

		if(Allstatus[6]){
			discs[4][c].material.color.setStyle("red");
			c++;
		}

	}
	else if(colored == 2){

		var i=0,j=0;
		for(i=0;i<7;i++){
			for(j=0;j<7;j++){
				if(i==5){
					if(discs[5][j])
						discs[5][j].visible = true;  
				}
				else{
					if(discs[i][j])
						discs[i][j].visible = false;
				}
			}
		}
		var c = 0;
		if(Allstatus[0]){
			discs[5][c].material.color.setStyle("violet");
			c=c+1;
		}

		if(Allstatus[1]){
			discs[5][c].material.color.setStyle("indigo");
			c++;
		}


		if(Allstatus[2]){
			discs[5][c].material.color.setStyle("blue");
			c++;
		}

		if(Allstatus[3]){
			discs[5][c].material.color.setStyle("green");
			c++;
		}

		if(Allstatus[4]){
			discs[5][c].material.color.setStyle("yellow");
			c++;
		}

		if(Allstatus[5]){
			discs[5][c].material.color.setStyle("orange");
			c++;
		}

		if(Allstatus[6]){
			discs[5][c].material.color.setStyle("red");
			c++;
		}

	}
	else if(colored == 1){

		var i=0,j=0;
		for(i=0;i<7;i++){
			for(j=0;j<7;j++){
				if(i==6){
					if(discs[6][j])
						discs[6][j].visible = true;  
				}
				else{
					if(discs[i][j])
						discs[i][j].visible = false;
				}
			}
		}
		var c = 0;
		if(Allstatus[0]){
			discs[6][c].material.color.setStyle("violet");
			c=c+1;
		}

		if(Allstatus[1]){
			discs[6][c].material.color.setStyle("indigo");
			c++;
		}


		if(Allstatus[2]){
			discs[6][c].material.color.setStyle("blue");
			c++;
		}

		if(Allstatus[3]){
			discs[6][c].material.color.setStyle("green");
			c++;
		}

		if(Allstatus[4]){
			discs[6][c].material.color.setStyle("yellow");
			c++;
		}

		if(Allstatus[5]){
			discs[6][c].material.color.setStyle("orange");
			c++;
		}

		if(Allstatus[6]){
			discs[6][c].material.color.setStyle("red");
			c++;
		}

	}

}

function loadExperimentElements() {
    
    var geometry;
    var material;
    var loader;
    var texture;

    PIEsetExperimentTitle("Merging colors");
    PIEsetDeveloperName("Anupam Singhal");

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();

    Allstatus = new Array(7);
  	var i=0;
  	for(i=0;i<7;i++){
  		Allstatus[i]=true;
  	}
  	discs = new Array(7);
  	for(i=0;i<7;i++){
  		discs[i] = new Array(7);
  	}

    controls = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);
    
    discs[0][0] = new THREE.Mesh(new THREE.CylinderGeometry(5,5,2,32,1,false,0,Math.PI*2/7),new THREE.MeshBasicMaterial({color:"violet"}));
    PIEaddElement(discs[0][0]);
    discs[0][0].position.set(-2,7,0);
    discs[0][0].rotation.x = Math.PI/2;	

    discs[0][1] = new THREE.Mesh(new THREE.CylinderGeometry(5,5,2,32,1,false,Math.PI*2/7,Math.PI*2/7),new THREE.MeshBasicMaterial({color:"indigo"}));
    PIEaddElement(discs[0][1]);
    discs[0][1].position.set(-2,7,0);
    discs[0][1].rotation.x = Math.PI/2;	


    discs[0][2] = new THREE.Mesh(new THREE.CylinderGeometry(5,5,2,32,1,false,Math.PI*4/7,Math.PI*2/7),new THREE.MeshBasicMaterial({color:"blue"}));
    PIEaddElement(discs[0][2]);
    discs[0][2].position.set(-2,7,0);
    discs[0][2].rotation.x = Math.PI/2;	

    discs[0][3] = new THREE.Mesh(new THREE.CylinderGeometry(5,5,2,32,1,false,Math.PI*6/7,Math.PI*2/7),new THREE.MeshBasicMaterial({color:"green"}));
    PIEaddElement(discs[0][3]);
    discs[0][3].position.set(-2,7,0);
    discs[0][3].rotation.x = Math.PI/2;	

    discs[0][4] = new THREE.Mesh(new THREE.CylinderGeometry(5,5,2,32,1,false,Math.PI*8/7,Math.PI*2/7),new THREE.MeshBasicMaterial({color:"yellow"}));
    PIEaddElement(discs[0][4]);
    discs[0][4].position.set(-2,7,0);
    discs[0][4].rotation.x = Math.PI/2;	

    discs[0][5] = new THREE.Mesh(new THREE.CylinderGeometry(5,5,2,32,1,false,Math.PI*10/7,Math.PI*2/7),new THREE.MeshBasicMaterial({color:"orange"}));
    PIEaddElement(discs[0][5]);
    discs[0][5].position.set(-2,7,0);
    discs[0][5].rotation.x = Math.PI/2;	


    discs[0][6] = new THREE.Mesh(new THREE.CylinderGeometry(5,5,2,32,1,false,Math.PI*12/7,Math.PI*2/7),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(discs[0][6]);
    discs[0][6].position.set(-2,7,0);
    discs[0][6].rotation.x = Math.PI/2;	

    discs[1][0] = new THREE.Mesh(new THREE.CylinderGeometry(5,5,2,32,1,false,0,Math.PI*2/6),new THREE.MeshBasicMaterial({color:"black"}));
    PIEaddElement(discs[1][0]);
    discs[1][0].position.set(-2,7,0);
    discs[1][0].rotation.x = Math.PI/2;
    discs[1][0].visible = false;

    discs[1][1] = new THREE.Mesh(new THREE.CylinderGeometry(5,5,2,32,1,false,Math.PI*2/6,Math.PI*2/6),new THREE.MeshBasicMaterial({color:"black"}));
    PIEaddElement(discs[1][1]);
    discs[1][1].position.set(-2,7,0);
    discs[1][1].rotation.x = Math.PI/2;
	discs[1][1].visible = false;

    discs[1][2] = new THREE.Mesh(new THREE.CylinderGeometry(5,5,2,32,1,false,Math.PI*4/6,Math.PI*2/6),new THREE.MeshBasicMaterial({color:"black"}));
    PIEaddElement(discs[1][2]);
    discs[1][2].position.set(-2,7,0);
    discs[1][2].rotation.x = Math.PI/2;
	discs[1][2].visible = false;

    discs[1][3] = new THREE.Mesh(new THREE.CylinderGeometry(5,5,2,32,1,false,Math.PI*6/6,Math.PI*2/6),new THREE.MeshBasicMaterial({color:"black"}));
    PIEaddElement(discs[1][3]);
    discs[1][3].position.set(-2,7,0);
    discs[1][3].rotation.x = Math.PI/2;
	discs[1][3].visible = false;

    discs[1][4] = new THREE.Mesh(new THREE.CylinderGeometry(5,5,2,32,1,false,Math.PI*8/6,Math.PI*2/6),new THREE.MeshBasicMaterial({color:"black"}));
    PIEaddElement(discs[1][4]);
    discs[1][4].position.set(-2,7,0);
    discs[1][4].rotation.x = Math.PI/2;
	discs[1][4].visible = false;

    discs[1][5] = new THREE.Mesh(new THREE.CylinderGeometry(5,5,2,32,1,false,Math.PI*10/6,Math.PI*2/6),new THREE.MeshBasicMaterial({color:"black"}));
    PIEaddElement(discs[1][5]);
    discs[1][5].position.set(-2,7,0);
    discs[1][5].rotation.x = Math.PI/2;
	discs[1][5].visible = false;

	discs[2][0] = new THREE.Mesh(new THREE.CylinderGeometry(5,5,2,32,1,false,0,Math.PI*2/5),new THREE.MeshBasicMaterial({color:"black"}));
    PIEaddElement(discs[2][0]);
    discs[2][0].position.set(-2,7,0);
    discs[2][0].rotation.x = Math.PI/2;
	discs[2][0].visible = false;


	discs[2][1] = new THREE.Mesh(new THREE.CylinderGeometry(5,5,2,32,1,false,Math.PI*2/5,Math.PI*2/5),new THREE.MeshBasicMaterial({color:"black"}));
    PIEaddElement(discs[2][1]);
    discs[2][1].position.set(-2,7,0);
    discs[2][1].rotation.x = Math.PI/2;
	discs[2][1].visible = false;


	discs[2][2] = new THREE.Mesh(new THREE.CylinderGeometry(5,5,2,32,1,false,Math.PI*4/5,Math.PI*2/5),new THREE.MeshBasicMaterial({color:"black"}));
    PIEaddElement(discs[2][2]);
    discs[2][2].position.set(-2,7,0);
    discs[2][2].rotation.x = Math.PI/2;
	discs[2][2].visible = false;


	discs[2][3] = new THREE.Mesh(new THREE.CylinderGeometry(5,5,2,32,1,false,Math.PI*6/5,Math.PI*2/5),new THREE.MeshBasicMaterial({color:"black"}));
    PIEaddElement(discs[2][3]);
    discs[2][3].position.set(-2,7,0);
    discs[2][3].rotation.x = Math.PI/2;
	discs[2][3].visible = false;


	discs[2][4] = new THREE.Mesh(new THREE.CylinderGeometry(5,5,2,32,1,false,Math.PI*8/5,Math.PI*2/5),new THREE.MeshBasicMaterial({color:"black"}));
    PIEaddElement(discs[2][4]);
    discs[2][4].position.set(-2,7,0);
    discs[2][4].rotation.x = Math.PI/2;
	discs[2][4].visible = false;

	discs[3][0] = new THREE.Mesh(new THREE.CylinderGeometry(5,5,2,32,1,false,0,Math.PI*2/4),new THREE.MeshBasicMaterial({color:"black"}));
    PIEaddElement(discs[3][0]);
    discs[3][0].position.set(-2,7,0);
    discs[3][0].rotation.x = Math.PI/2;
	discs[3][0].visible = false;

	discs[3][1] = new THREE.Mesh(new THREE.CylinderGeometry(5,5,2,32,1,false,Math.PI/2,Math.PI*2/4),new THREE.MeshBasicMaterial({color:"black"}));
    PIEaddElement(discs[3][1]);
    discs[3][1].position.set(-2,7,0);
    discs[3][1].rotation.x = Math.PI/2;
	discs[3][1].visible = false;

	discs[3][2] = new THREE.Mesh(new THREE.CylinderGeometry(5,5,2,32,1,false,Math.PI,Math.PI*2/4),new THREE.MeshBasicMaterial({color:"black"}));
    PIEaddElement(discs[3][2]);
    discs[3][2].position.set(-2,7,0);
    discs[3][2].rotation.x = Math.PI/2;
	discs[3][2].visible = false;

	discs[3][3] = new THREE.Mesh(new THREE.CylinderGeometry(5,5,2,32,1,false,Math.PI*3/2,Math.PI*2/4),new THREE.MeshBasicMaterial({color:"black"}));
    PIEaddElement(discs[3][3]);
    discs[3][3].position.set(-2,7,0);
    discs[3][3].rotation.x = Math.PI/2;
	discs[3][3].visible = false;


	discs[4][0] = new THREE.Mesh(new THREE.CylinderGeometry(5,5,2,32,1,false,0,Math.PI*2/3),new THREE.MeshBasicMaterial({color:"black"}));
    PIEaddElement(discs[4][0]);
    discs[4][0].position.set(-2,7,0);
    discs[4][0].rotation.x = Math.PI/2;
	discs[4][0].visible = false;

	discs[4][1] = new THREE.Mesh(new THREE.CylinderGeometry(5,5,2,32,1,false,Math.PI*2/3,Math.PI*2/3),new THREE.MeshBasicMaterial({color:"black"}));
    PIEaddElement(discs[4][1]);
    discs[4][1].position.set(-2,7,0);
    discs[4][1].rotation.x = Math.PI/2;
	discs[4][1].visible = false;

	discs[4][2] = new THREE.Mesh(new THREE.CylinderGeometry(5,5,2,32,1,false,Math.PI*4/3,Math.PI*2/3),new THREE.MeshBasicMaterial({color:"black"}));
    PIEaddElement(discs[4][2]);
    discs[4][2].position.set(-2,7,0);
    discs[4][2].rotation.x = Math.PI/2;
	discs[4][2].visible = false;


	discs[5][0] = new THREE.Mesh(new THREE.CylinderGeometry(5,5,2,32,1,false,0,Math.PI*2/2),new THREE.MeshBasicMaterial({color:"black"}));
    PIEaddElement(discs[5][0]);
    discs[5][0].position.set(-2,7,0);
    discs[5][0].rotation.x = Math.PI/2;
	discs[5][0].visible = false;

	discs[5][1] = new THREE.Mesh(new THREE.CylinderGeometry(5,5,2,32,1,false,Math.PI,Math.PI*2/2),new THREE.MeshBasicMaterial({color:"black"}));
    PIEaddElement(discs[5][1]);
    discs[5][1].position.set(-2,7,0);
    discs[5][1].rotation.x = Math.PI/2;
	discs[5][1].visible = false;

	discs[6][0] = new THREE.Mesh(new THREE.CylinderGeometry(5,5,2,32,1,false,0,Math.PI*2),new THREE.MeshBasicMaterial({color:"black"}));
    PIEaddElement(discs[6][0]);
    discs[6][0].position.set(-2,7,0);
    discs[6][0].rotation.x = Math.PI/2;
	discs[6][0].visible = false;
	thinFilm = new Array(2);
	 thinFilm[0] =new THREE.Mesh(new THREE.CylinderGeometry(5,5,0.1,32),new THREE.MeshBasicMaterial({color:"#F4F0F0",transparent:true,opacity:1}))
	PIEaddElement(thinFilm[0]);
	thinFilm[0].rotation.x = Math.PI/2;
	thinFilm[0].position.set(-2,7,1);
	thinFilm[0].visible = false;


	thinFilm[1] =new THREE.Mesh(new THREE.CylinderGeometry(5,5,0.1,32),new THREE.MeshBasicMaterial({color:"#F4F0F0",transparent:true,opacity:1}))
	PIEaddElement(thinFilm[1]);
	thinFilm[1].rotation.x = Math.PI/2;
	thinFilm[1].position.set(-2,7,-1);
	thinFilm[1].visible = false;

	var tower = new THREE.Mesh(new THREE.CylinderGeometry(0.1,1,20,70,1,false,0,Math.PI*2),new THREE.MeshBasicMaterial({color:"white",wireframe:true}));
    PIEaddElement(tower);
    tower.position.set(-2,0,-2);
	
	var towerBASE = new THREE.Mesh(new THREE.CylinderGeometry(2,2,2,70,1,false,0,Math.PI*2),new THREE.MeshBasicMaterial({color:"black"}));
    PIEaddElement(towerBASE);
    towerBASE.position.set(-2,-10,-2);


	 connector = new THREE.Mesh(new THREE.CylinderGeometry(1,1,2,32,1,false,0,Math.PI*2),new THREE.MeshBasicMaterial({color:"white"}));
    PIEaddElement(connector);
    connector.position.set(-2,7,-1);
    connector.rotation.x = Math.PI/2;
	
	var connector1 = new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.1,2,32,1,false,0,Math.PI*2),new THREE.MeshBasicMaterial({color:"black"}));
    connector.add(connector1);
    connector1.position.set(-1,0,0);
  //  connector1.rotation.x = Math.PI/2;
	var connector2 = new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.1,2,32,1,false,0,Math.PI*2),new THREE.MeshBasicMaterial({color:"black"}));
    connector.add(connector2);
    connector2.position.set(1,0,0);
  	

    PIEscene.background = new THREE.Color("skyblue");

    var groundMaterial = new THREE.MeshBasicMaterial(  );
 
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
 
    pieSetInputOutputDisplay();
 
    document.getElementById("start").addEventListener("click", setOn);
    document.getElementById("stop").addEventListener("click",setOff);
   // document.getElementById(">>").addEventListener("click",speedUp);
    //document.getElementById("<<").addEventListener("click",speedDown);
    
    resetExperiment();
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    PIEadjustCamera(0,0,55);
   
    PIErender();
}
function resetExperiment()
{
	thinFilm[0].visible = false;
	thinFilm[1].visible = false;
	colored = 7;
	var i=0,j=0;
	for(i=0;i<7;i++){
		for(j=0;j<7;j++){
			if(i==0){
				discs[0][j].visible = true;
			}
			else{
				if(discs[i][j]){
					discs[i][j].visible = false;
				}
			}
		}
	}

	PIEchangeInputCheckbox(VString ,true);
	PIEchangeInputCheckbox(IString ,true);
	PIEchangeInputCheckbox(BString ,true);
	PIEchangeInputCheckbox(GString ,true);
	PIEchangeInputCheckbox(YString ,true);
	PIEchangeInputCheckbox(OString ,true);
	PIEchangeInputCheckbox(RString ,true);

	PIEchangeDisplayCheckbox(VString ,true);
	PIEchangeDisplayCheckbox(IString ,true);
	PIEchangeDisplayCheckbox(BString ,true);
	PIEchangeDisplayCheckbox(GString ,true);
	PIEchangeDisplayCheckbox(YString ,true);
	PIEchangeDisplayCheckbox(OString ,true);
	PIEchangeDisplayCheckbox(RString ,true);
	speed = 1;
	//PIEchangeDisplaySlider(V,speed);
	PIEchangeInputSlider(V,speed);
	
	Allstatus[0] = true;
	Allstatus[1] = true;
	Allstatus[2] = true;
	Allstatus[3] = true;
	Allstatus[4] = true;
	Allstatus[5] = true;
	Allstatus[6] = true;


   	scalar = 1.0;
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
	PIEadjustCamera(0,0,55);
	PIErender();
}
var cool = 0;
function updateExperimentElements(t, dt)
{  
	
	
	if(first_time == 1){
	PIEchangeDisplayCheckbox(VString ,Allstatus[0]);
	PIEchangeDisplayCheckbox(IString ,Allstatus[1]);
	PIEchangeDisplayCheckbox(BString ,Allstatus[2]);
	PIEchangeDisplayCheckbox(GString ,Allstatus[3]);
	PIEchangeDisplayCheckbox(YString ,Allstatus[4]);
	PIEchangeDisplayCheckbox(OString ,Allstatus[5]);
	PIEchangeDisplayCheckbox(RString ,Allstatus[6]);
	PIEchangeDisplaySlider(V,speed);


//	var speed =1*scalar;
	connector.rotation.y = connector.rotation.y + speed;
	console.log(colored)
	
	thinFilm[0].visible = false;
	thinFilm[1].visible = false;
	if(colored == 7 ){

		var i=0,j=0;
		for(i=0;i<7;i++){
			for(j=0;j<7;j++){
				if(i==0){
					if(discs[0][j])
						discs[0][j].visible = true;  
				}
				else{
					if(discs[i][j])
						discs[i][j].visible = false;
				}
			}
		}
		if (speed<=1){
			thinFilm[0].material.opacity = speed;
			thinFilm[1].material.opacity = speed;
		}
		else{
			thinFilm[0].material.opacity = 1;
			thinFilm[1].material.opacity = 1;
		}
		for(i=0;i<7;i++){
			discs[0][i].rotation.y = discs[0][i].rotation.y + speed;

		}

	thinFilm[0].visible = true;
	thinFilm[1].visible = true;
	}
	else if(colored == 6){
		var i=0,j=0;
		for(i=0;i<7;i++){
			for(j=0;j<7;j++){
				if(i==1){
					if(discs[1][j])
						discs[1][j].visible = true;  
				}
				else{
					if(discs[i][j])
						discs[i][j].visible = false;
				}
			}
		}
		var c = 0;
		if(Allstatus[0]){
			discs[1][c].material.color.setStyle("violet");
			c=c+1;
		}

		if(Allstatus[1]){
			discs[1][c].material.color.setStyle("indigo");
			c++;
		}


		if(Allstatus[2]){
			discs[1][c].material.color.setStyle("blue");
			c++;
		}

		if(Allstatus[3]){
			discs[1][c].material.color.setStyle("green");
			c++;
		}

		if(Allstatus[4]){
			discs[1][c].material.color.setStyle("yellow");
			c++;
		}

		if(Allstatus[5]){
			discs[1][c].material.color.setStyle("orange");
			c++;
		}

		if(Allstatus[6]){
			discs[1][c].material.color.setStyle("red");
			c++;
		}

		for(i=0;i<6;i++){
			discs[1][i].rotation.y = discs[1][i].rotation.y + speed;
		}
	}
	else if(colored == 5){
	
		var i=0,j=0;
		for(i=0;i<7;i++){
			for(j=0;j<7;j++){
				if(i==2){
					if(discs[2][j])
						discs[2][j].visible = true;  
				}
				else{
					if(discs[i][j])
						discs[i][j].visible = false;
				}
			}
		}
		var c = 0;
		if(Allstatus[0]){
			discs[2][c].material.color.setStyle("violet");
			c=c+1;
		}

		if(Allstatus[1]){
			discs[2][c].material.color.setStyle("indigo");
			c++;
		}


		if(Allstatus[2]){
			discs[2][c].material.color.setStyle("blue");
			c++;
		}

		if(Allstatus[3]){
			discs[2][c].material.color.setStyle("green");
			c++;
		}

		if(Allstatus[4]){
			discs[2][c].material.color.setStyle("yellow");
			c++;
		}

		if(Allstatus[5]){
			discs[2][c].material.color.setStyle("orange");
			c++;
		}

		if(Allstatus[5]){
			discs[2][c].material.color.setStyle("red");
			c++;
		}

		for(i=0;i<5;i++){
			discs[2][i].rotation.y = discs[2][i].rotation.y + speed;
		}
	}
	else if(colored == 4){

		var i=0,j=0;
		for(i=0;i<7;i++){
			for(j=0;j<7;j++){
				if(i==3){
					if(discs[3][j])
						discs[3][j].visible = true;  
				}
				else{
					if(discs[i][j])
						discs[i][j].visible = false;
				}
			}
		}
		var c = 0;
		if(Allstatus[0]){
			discs[3][c].material.color.setStyle("violet");
			c=c+1;
		}

		if(Allstatus[1]){
			discs[3][c].material.color.setStyle("indigo");
			c++;
		}


		if(Allstatus[2]){
			discs[3][c].material.color.setStyle("blue");
			c++;
		}

		if(Allstatus[3]){
			discs[3][c].material.color.setStyle("green");
			c++;
		}

		if(Allstatus[4]){
			discs[3][c].material.color.setStyle("yellow");
			c++;
		}

		if(Allstatus[5]){
			discs[3][c].material.color.setStyle("orange");
			c++;
		}

		if(Allstatus[6]){
			discs[3][c].material.color.setStyle("red");
			c++;
		}

		for(i=0;i<4;i++){
			discs[3][i].rotation.y = discs[3][i].rotation.y + speed;
		}
	}
	else if(colored == 3){

		var i=0,j=0;
		for(i=0;i<7;i++){
			for(j=0;j<7;j++){
				if(i==4){
					if(discs[4][j])
						discs[4][j].visible = true;  
				}
				else{
					if(discs[i][j])
						discs[i][j].visible = false;
				}
			}
		}
		var c = 0;
		if(Allstatus[0]){
			discs[4][c].material.color.setStyle("violet");
			c=c+1;
		}

		if(Allstatus[1]){
			discs[4][c].material.color.setStyle("indigo");
			c++;
		}


		if(Allstatus[2]){
			discs[4][c].material.color.setStyle("blue");
			c++;
		}

		if(Allstatus[3]){
			discs[4][c].material.color.setStyle("green");
			c++;
		}

		if(Allstatus[4]){
			discs[4][c].material.color.setStyle("yellow");
			c++;
		}

		if(Allstatus[5]){
			discs[4][c].material.color.setStyle("orange");
			c++;
		}

		if(Allstatus[6]){
			discs[4][c].material.color.setStyle("red");
			c++;
		}

		for(i=0;i<3;i++){
			discs[4][i].rotation.y = discs[4][i].rotation.y + speed;
		}
	}
	else if(colored == 2){

		var i=0,j=0;
		for(i=0;i<7;i++){
			for(j=0;j<7;j++){
				if(i==5){
					if(discs[5][j])
						discs[5][j].visible = true;  
				}
				else{
					if(discs[i][j])
						discs[i][j].visible = false;
				}
			}
		}
		var c = 0;
		if(Allstatus[0]){
			discs[5][c].material.color.setStyle("violet");
			c=c+1;
		}

		if(Allstatus[1]){
			discs[5][c].material.color.setStyle("indigo");
			c++;
		}


		if(Allstatus[2]){
			discs[5][c].material.color.setStyle("blue");
			c++;
		}

		if(Allstatus[3]){
			discs[5][c].material.color.setStyle("green");
			c++;
		}

		if(Allstatus[4]){
			discs[5][c].material.color.setStyle("yellow");
			c++;
		}

		if(Allstatus[5]){
			discs[5][c].material.color.setStyle("orange");
			c++;
		}

		if(Allstatus[6]){
			discs[5][c].material.color.setStyle("red");
			c++;
		}

		for(i=0;i<2;i++){
			discs[5][i].rotation.y = discs[5][i].rotation.y + speed;
		}
	}
	else if(colored == 1){

		var i=0,j=0;
		for(i=0;i<7;i++){
			for(j=0;j<7;j++){
				if(i==6){
					if(discs[6][j])
						discs[6][j].visible = true;  
				}
				else{
					if(discs[i][j])
						discs[i][j].visible = false;
				}
			}
		}
		var c = 0;
		if(Allstatus[0]){
			discs[6][c].material.color.setStyle("violet");
			c=c+1;
		}

		if(Allstatus[1]){
			discs[6][c].material.color.setStyle("indigo");
			c++;
		}


		if(Allstatus[2]){
			discs[6][c].material.color.setStyle("blue");
			c++;
		}

		if(Allstatus[3]){
			discs[6][c].material.color.setStyle("green");
			c++;
		}

		if(Allstatus[4]){
			discs[6][c].material.color.setStyle("yellow");
			c++;
		}

		if(Allstatus[5]){
			discs[6][c].material.color.setStyle("orange");
			c++;
		}

		if(Allstatus[6]){
			discs[6][c].material.color.setStyle("red");
			c++;
		}

		for(i=0;i<1;i++){
			discs[6][i].rotation.y = discs[6][i].rotation.y + speed;
		}
	}
}
first_time = 1;
}

