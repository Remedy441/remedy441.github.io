 var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Archimedes Principle help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment illustrates the archimedes principle.</p>";
    helpContent = helpContent + "<p>In the animation stage, first part of animation shows the true weight in air of the block.</p>";
    helpContent = helpContent + "<p>The second stage of the animation lowers the spring balance into the liquid, and shows the apparent weight in the liquid.</p>";
    helpContent = helpContent + "<h3>Display Panel:</h3>";
    helpContent = helpContent + "<p>Weight of block: Shows weight of block as measured by spring balance in grams</p>";
    helpContent = helpContent + "<p>Density Liquid: Shows density of liquid being used in the experiment. Unit: gram/cm3</p>";
    helpContent = helpContent + "<p>Weight initial: Initial weight of the system in the first part of the experiment. Unit: Newtons.</p>";
    helpContent = helpContent + "<p>Weight final: Final weight of the system on lowering the balance. Unit: Newtons.</p>";
    helpContent = helpContent + "<p>Buoyant force on block: upward force acting on block when in liquid. Unit: Newtons</p>";
    helpContent = helpContent + "<h3>Digital Display:</h3>";
    helpContent = helpContent + "<p>Spring Balance: in Newtons</p>";
    helpContent = helpContent + "<p>Weighing Scale: in Newtons</p>";
    helpContent = helpContent + "<h3>How to Use:</h3>";
    helpContent = helpContent + "<p>The experiment starts with default block and liquid.</p>";
    helpContent = helpContent + "<p>You can select a block (shown on the left) and liquids (shown on the right) by clicking on it.</p>";
    helpContent = helpContent + "<p>Press start to see the animation unfold. Press reset and select various combinations of blocks and liquids.</p>";
    helpContent = helpContent + "<p>You can go back to the setup stage by pressing the reset button.</p>";
    helpContent = helpContent + "<h2>Happy Experimenting!</h2>";
    PIEupdateHelp(helpContent);
}
var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Archimedes Principle concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>>The experiment illustrates the archimedes principle.</p>";
    infoContent = infoContent + "<h3>Archimedes Principle</h3>";
    infoContent = infoContent + "<p>When an object is immersed in water,it experiences an upward thrust,called the buoyant force. The value of this force is calculated by Archimedes Principle</p>";
    infoContent = infoContent + "<p>Archimedes Principle states that the buoyant force experienced by the object immersed in liquid is equal to the weight of the fluid displaced.</p>";
    infoContent = infoContent + "<h3>Applications</h3>";
    infoContent = infoContent + "<p>The buoyant force results in the apparent reduction of weight of objects in liquids.<br>It is the reason that ships float on water.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting!</h2>";
    PIEupdateInfo(infoContent);
}

var tumbler,tumblerOutline,water,springBalance,side1,side2,string,block;
var objectY=20,sc; 
var baseArea = 100;
var densityLiquid=50; //g/cm3
var densityBlock = 0.5;
var blockY,blockV,blockW,V=1000,g=10,blockF,blockA=0,level=-16;
var springBalanceX,springBalanceY;
var diffblock=-40,diffside1=7.5,diffside2=-7.5,diffstring=-20,side1Y,side2Y,stringY;
var startstring = 60;
var springBalance2,block2,side12,side22,block2V,block2A,block2F,block2Y,string2,block2Vd,block2Ad,block2Fd,block2Yd;
var dis, disw,q;


function glass(clr,x,y,z){
	var geometry = new THREE.BoxGeometry(1,20,1);
	var material = new THREE.MeshBasicMaterial({color:0x000000});
	var tum1 = new THREE.Mesh(geometry,material);
	var tum2 = new THREE.Mesh(geometry,material);
	tum1.position.set(x-10,y,0);
	tum2.position.set(x+10,y,0);
	PIEaddElement(tum1);
	PIEaddElement(tum2);
	
	
	geometry = new THREE.CylinderGeometry(10,10,10);
	material = new THREE.MeshBasicMaterial({color:clr, transparent:true,opacity:0.5});
	var liq = new THREE.Mesh(geometry,material);
	liq.position.set(x,y-6,0);
	PIEaddElement(liq);

	var curve = new THREE.EllipseCurve(
  0, 0,             // ax, aY
  10, 2,            // xRadius, yRadius
  0, 2 * Math.PI, // aStartAngle, aEndAngle
  false             // aClockwise
);
	var path = new THREE.Path(curve.getPoints(500000));
	geometry = path.createPointsGeometry(50000);
	material = new THREE.LineBasicMaterial({color: 0x000000,linewidth:2});
	var ellipse = new THREE.Line(geometry, material);
	var ellip = new THREE.Line(geometry, material);
	ellipse.position.set(x,y-10,0);
	ellip.position.set(x,y+10,0);
	PIEaddElement(ellipse);
	PIEaddElement(ellip);
	return liq;
}

function glass1(tex,x,y,z){
	var geometry = new THREE.BoxGeometry(1,20,1);
	var material = new THREE.MeshBasicMaterial({color:0x000000});
	var tum1 = new THREE.Mesh(geometry,material);
	var tum2 = new THREE.Mesh(geometry,material);
	tum1.position.set(x-10,y,0);
	tum2.position.set(x+10,y,0);
	PIEaddElement(tum1);
	PIEaddElement(tum2);
	
	
	geometry = new THREE.CylinderGeometry(10,10,10);
	material = new THREE.MeshBasicMaterial({map: tex, transparent:true});
	var liq = new THREE.Mesh(geometry,material);
	liq.position.set(x,y-6,0);
	PIEaddElement(liq);

	var curve = new THREE.EllipseCurve(
  0, 0,             // ax, aY
  10, 2,            // xRadius, yRadius
  0, 2 * Math.PI, // aStartAngle, aEndAngle
  false             // aClockwise
);
	var path = new THREE.Path(curve.getPoints(500000));
	geometry = path.createPointsGeometry(50000);
	material = new THREE.LineBasicMaterial({color: 0x000000,linewidth:2});
	var ellipse = new THREE.Line(geometry, material);
	var ellip = new THREE.Line(geometry, material);
	ellipse.position.set(x,y-10,0);
	ellip.position.set(x,y+10,0);
	PIEaddElement(ellipse);
	PIEaddElement(ellip);
	return liq;
}



function tumblr(){
	var geometry = new THREE.BoxGeometry(1,70,1);
	var material = new THREE.MeshBasicMaterial({color:0x000000});
	var tum1 = new THREE.Mesh(geometry,material);
	var tum2 = new THREE.Mesh(geometry,material);
	tum1.position.set(-20,-51,0);
	tum2.position.set(+20,-51,0);
	PIEaddElement(tum1);
	PIEaddElement(tum2);
	
	
	geometry = new THREE.CylinderGeometry(20,20,50);
	material = new THREE.MeshBasicMaterial({color:0xff00ff, transparent:true,opacity:0.5});
	water = new THREE.Mesh(geometry,material);
	water.position.set(0,-61,0);
	PIEaddElement(water);

	-81
	var curve = new THREE.EllipseCurve(
  0, 0,             // ax, aY
  20, 3.2,            // xRadius, yRadius
  0, 2 * Math.PI, // aStartAngle, aEndAngle
  false             // aClockwise
);
	var path = new THREE.Path(curve.getPoints(500000));
	geometry = path.createPointsGeometry(50000);
	material = new THREE.LineBasicMaterial({color: 0x000000,linewidth:2});
	var ellipse = new THREE.Line(geometry, material);
	var ellip = new THREE.Line(geometry, material);
	ellipse.position.set(0,-16,0);
	ellip.position.set(0,-86,0);
	PIEaddElement(ellipse);
	PIEaddElement(ellip);
	console.log("ellipse");

	geometry = new THREE.BoxGeometry(20,40,10);
	material = new THREE.MeshBasicMaterial({color:0x000000});
	springBalance = new THREE.Mesh(geometry,material);
	springBalanceY = 60;
	springBalance.position.set(0,springBalanceY,0);
	PIEaddElement(springBalance);
	

	geometry = new THREE.PlaneGeometry(10,1);
	material = new THREE.MeshBasicMaterial({color:0xff0000});
	side1 = new THREE.Mesh(geometry,material);
	diffside1 = 14.5;
	side1.position.set(0,springBalanceY+diffside1,6);
	PIEaddElement(side1);

	geometry = new THREE.PlaneGeometry(10,30);
	material = new THREE.MeshBasicMaterial({color:0x00ff00});
	side2 = new THREE.Mesh(geometry,material);
	springBalance.add(side2);
	diffside2 = 0;
	side2.position.set(0,springBalanceY,5);
	PIEaddElement(side2);

	geometry = new THREE.BoxGeometry(1,20,1);
	material = new THREE.MeshBasicMaterial({color:0x000000});
	string = new THREE.Mesh(geometry,material);
	diffstring = -20;
	string.position.set(0,springBalanceY + diffstring,0);
	PIEaddElement(string);	

	geometry = new THREE.BoxGeometry(10,10,10);
	material = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('images/color.jpg')});
	block = new THREE.Mesh(geometry,material);
	
	diffblock = -40;
	block.position.set(0,springBalanceY+diffblock,0);
	PIEaddElement(block);
	block.material.needsUpdate = true;
	block.geometry.buffersNeedUpdate = true;
	block.geometry.uvsNeedUpdate = true;
	//PIEdefaultHoverOFF(block);
	blockY = 20;
	//blockW = V*densityBlock*g;
	blockV = 0;

	block2V = 0;

	geometry = new THREE.BoxGeometry(60,10,10);
	material = new THREE.MeshBasicMaterial({color:0x000000});
	weighingScale = new THREE.Mesh(geometry,material);
	weighingScale.position.set(0,-90,20);
	PIEaddElement(weighingScale);

	var mesh = new THREE.Mesh(geometry,material);
	mesh.position.set(0,-100,20);
	PIEaddElement(mesh);

	geometry = new THREE.BoxGeometry(1,8,11);
	material = new THREE.MeshBasicMaterial({color:0xff0000});
	sc = new THREE.Mesh(geometry,material);
	sc.position.set(-29,-90,20);
	PIEaddElement(sc);

	PIEaddElement(springBalance);

	geometry = new THREE.BoxGeometry(3,1,1);
	material = new THREE.MeshBasicMaterial({color:0x0000ff});
	pointer = new THREE.Mesh(geometry,material);
	pointer.position.set(6,springBalanceY,5);
	PIEaddElement(pointer);

	geometry = new THREE.BoxGeometry(20,12,10);
	material = new THREE.MeshBasicMaterial({color:0x000000});
	dis = new THREE.Mesh(geometry, material);
	dis.position.set(0,springBalanceY+26,0);
	PIEaddElement(dis);
	
} 

function text(tex,x,y){
 var loader = new THREE.FontLoader();

	loader.load( 'optimer_regular.typeface.json', function ( font ) {

    var textGeo = new THREE.TextGeometry( tex, {

        font: font,

        size: 8,
        height:1,
        curveSegments: 1,

        bevelThickness: 0.01,
        bevelSize: 0.01,
        bevelEnabled: true

    } );

    var textMaterial = new THREE.MeshPhongMaterial( { color: 0x000000 } );

    meshleft = new THREE.Mesh( textGeo, textMaterial );
    //mesh.position.set( 2, 2, -1 );
	meshleft.position.set( x,y,0);
	//meshleft.renderOrder=0.3;
	//meshleft.material.depthTest=false;
    PIEaddElement( meshleft );
} );
}




//var materials=[0x663300,0x7b9095,0x604e42,0xb85233,0x190209,0xdd3300];
var tex;
var displaydensity =[3.38,7.75,0.24,5.96,1.52,0.5];
var density=[0.4,0.8,0.2,0.6,0.3,0.5];
var objects =[];
var liquids=[];
var liquidcolor=[];
var matLiq=[];
function addOptions(){
	var woodT,steelT,corkT,copperT,rubberT;
	woodT = new THREE.TextureLoader().load('images/wood.jpg');
	steelT = new THREE.TextureLoader().load('images/steel.jpg');
	corkT = new THREE.TextureLoader().load('images/cork.jpg');
	copperT = new THREE.TextureLoader().load('images/copper.jpg');	
	rubberT = new THREE.TextureLoader().load('images/rubber.jpg');
	mercuryT = new THREE.TextureLoader().load('images/mercury.jpg');
	
	var x=-150;
	var geometry = new THREE.BoxGeometry(10,10,10);
	var material;
	var materialWood = material = new THREE.MeshBasicMaterial({/*color:0x663300*/map: woodT});
	var wood = new THREE.Mesh(geometry,material);
	wood.position.set(-100,40,0);
	PIEaddElement(wood);
	text("Wood",x,40);

	var materialSteel = material = new THREE.MeshBasicMaterial({/*color:0x7b9095*/map: steelT});
	var steel = new THREE.Mesh(geometry,material);
	steel.position.set(-100,20,0);
	PIEaddElement(steel);
	text("Steel",x,20);

	var materialCork = material = new THREE.MeshBasicMaterial({/*color:0x604e42*/map: corkT});
	var cork = new THREE.Mesh(geometry,material);
	cork.position.set(-100,0,0);
	PIEaddElement(cork);
	text("Cork",x,0);

	var materialCopper = material = new THREE.MeshBasicMaterial({/*color:0xb85233*/map: copperT});
	var copper = new THREE.Mesh(geometry,material);
	copper.position.set(-100,-20,0);
	PIEaddElement(copper);
	text("Copper",x,-20);
	

	var materialRubber = material = new THREE.MeshBasicMaterial({/*color:0x190209*/map: rubberT});
	var rubber = new THREE.Mesh(geometry,material);
	rubber.position.set(-100,-40,0);
	PIEaddElement(rubber);
	text("Rubber",x,-40);

	objects=[wood,steel,cork,copper,rubber];
	tex=[woodT,steelT,corkT,copperT,rubberT];
	x=120;

	oil = glass(0xffff00,100,40,0);
	text("Oil",x,40);

	var water = glass(0x0000ff,100,9,0);
	text("Water",x,10);

	mercury = glass1(mercuryT,100,-20,0);
	text("Mercury",x,-20);

	liquids=[oil,water,mercury];
	liquidcolor=[0xffff00,0x0000ff];

		var merc = new THREE.MeshBasicMaterial({map:mercuryT});
		var wat = new THREE.MeshBasicMaterial({color:0x0000ff, transparent:true,opacity:0.5});
		var o = new THREE.MeshBasicMaterial({color:0xffff00, transparent:true,opacity:0.5});
		matLiq = [o,wat,merc];
}

var mouse=new THREE.Vector2();
var raycaster=new THREE.Raycaster();
var intersects; 
function onMouseDown(event){
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    	mouse.y = -( event.clientY / window.innerHeight ) * 2 + 1;
	raycaster.setFromCamera( mouse, PIEcamera );	
    	intersects = raycaster.intersectObjects( PIEscene.children );
		var p=6,f='x';
    		if(intersects.length>0){
			var obj1 = intersects[0].object;
			var i;
			for(i=0;i<5 && p==6;i++){
				if(obj1==objects[i]){
						p=i; f='b';
						
				}
				else if(obj1 == liquids[i]){
					p=i; f='l';
					
				}
				else f='x';
			     }
			
	
		}
		if(f=='b'){
			inputBlock(p);
		}
		else if(f=='l'){
			inputLiquid(p);
		}
		//displayBlock(p);
		//inputBlock(p);	

}

function inputBlock(p){
	
	//block.material.color.setHex(materials[p]);
	block.material.map=tex[p];
	densityBlock = density[p];
	var d = displaydensity[p]*10*1000
	PIEchangeInputText("Weight Block: ", d +" g");
	resetExperiment();
	PIErender();
}
displaydensityLiq=[0.5,1,13.56,1.035];
densityLiq = [5,10,40];

function inputLiquid(p){
	
	water.material = matLiq[p];
	
	densityLiquid = densityLiq[p];
	PIEchangeInputText("Density Liquid: ", displaydensityLiq[p]+ " g/cm3");
	resetExperiment();
	PIErender();
}

var systemwt,baseAreaWater;
function initialise(){
	var height = 230;
	var width = 230 ;
    	PIEsetAreaOfInterest(-(width/2),height/2,width/2,-(height/2));
	
	baseArea = 100;
	diffblock=-40;
	diffside1=14.5;
	diffside2=0;
	diffstring=-30;
	
	springBalanceY=60;
	startstring = springBalanceY-20;
	blockY=springBalanceY+diffblock;
	V=1000;g=10;level=-36;
	blockW = V*densityBlock*g;
	blockV = 0; blockA=-1;
	
	submerged = 0;flag=0;prev=0;
	elongation=0;k=10;

	diffblock2=-40;
	diffside12=14.5;
	diffstring2=-30;
	elongation2=0;
	block2Y=springBalanceY+diffblock2;
	prev2=0;block2A=-1;

	block2Yd = block2Y;
	block2Vd = block2V = 0;
	
	
	baseAreaWater = 2000;
	systemwt = baseAreaWater*densityLiquid*g/1000;
	//PIEchangeDisplayText("Weight initial: ",systemwt);
	PIEchangeInputText("Weight initial: ",systemwt+ " N");			
	//PIEchangeDisplayText("Weight final: ",wt);
	PIEchangeInputText("Weight final: ",q+ " N");

	window.addEventListener( 'mousedown', onMouseDown, false );
}

var s;
function spring(tex,l){
 var loader = new THREE.FontLoader();
	loader.load( 'optimer_regular.typeface.json', function ( font ) {
	var textGeo = new THREE.TextGeometry( tex +" N", {
        font: font,
        size: 3.5,
        height:1
    } );

    var textMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    s = new THREE.Mesh( textGeo, textMaterial );
    s.position.set( -8,l + 25,6);
    	PIEaddElement( s );
	PIErender();
} );
}

function initialiseOthers(){
	string.scale.y = 1;
	side1.scale.y = 1;
	springBalance.position.set(0,springBalanceY,0);
	side1.position.set(0,springBalanceY+diffside1,6);
	side2.position.set(0,springBalanceY,5);
	block.position.set(0,springBalanceY+diffblock,0);
	string.position.set(0,springBalanceY+diffstring,0);
	pointer.position.set(6,springBalanceY,5);
	dis.position.y = springBalanceY+26;
}

var meshleft;

function weight(tex){
 var loader = new THREE.FontLoader();
	loader.load( 'optimer_regular.typeface.json', function ( font ) {
	var textGeo = new THREE.TextGeometry( tex+" N", {
        font: font,
        size: 4.5,
        height:1
    } );

    var textMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    meshleft = new THREE.Mesh( textGeo, textMaterial );
    meshleft.position.set( -10,-100,30);
    	PIEaddElement( meshleft );
	PIErender();
} );
}


var hack;
var wt;
function loadExperimentElements(){
	
	initialise();
	PIEscene.background = new THREE.TextureLoader().load('images/back2.jpg')
	PIEsetExperimentTitle("Archimedes Principle");
	PIEsetDeveloperName("Meghna Bhave");
	/* initialise help and info content */
    	initialiseHelp();
    	initialiseInfo();
	
	tumblr();
  	initialiseOthers();
	addOptions();
	
	PIEaddInputText("Weight Block: ", blockW + " g")
	PIEaddInputText("Density Liquid: ", "50 g/cm3")
	PIEaddInputText("Weight initial: ",systemwt+ " N");
	PIEaddInputText("Weight final: ","0"+ " N");
	PIEaddInputText("Buoyant force: ","0 N");
	PIEaddDualCommand("Next Step",Lower);
	window.onfocus = function() {
		if((PIEanimationON == true) && (PIEanimationPaused == true))
		{
			PIEresumeAnimation();
		}
	};
	window.onblur = function() {
		if((PIEanimationON == true) && (PIEanimationPaused == false))
		{
			PIEpauseAnimation();
		}
	};

	PIEresetExperiment(); hack=0;
	PIEstartAnimation();
}

function Lower(){
	while(block.position.y>level+5){
				springBalance.position.y-=x/2;
				springBalanceY=springBalance.position.y;
				blockY = springBalanceY + diffblock;
    				stringY = springBalanceY+diffstring;
			    	side1Y = springBalanceY + diffside1;
			    	side2Y = springBalanceY;
				startstring = springBalanceY-20;
			   	side1.position.y-=x/2;
			    	block.position.set(0, blockY, 0);
			    	side2.position.set(0, side2Y, 5);
			    	string.position.set(0, stringY, 0);
			    	pointer.position.set(6,springBalanceY,5);
				startstring = springBalanceY + 20;
				s.position.y = springBalanceY + 25;
				dis.position.y = springBalanceY+26;
				PIErender();
	}
	if(block.position.y<=level+5){
		flag=2;			
	}
}

var d;
var i=80;
 var f2=0,g2=0;
function resetExperiment(){
	
	initialise();
	initialiseOthers();
	PIEchangeInputText("Weight initial: ",systemwt+ " N");
	PIEremoveElement(meshleft);
	weight(systemwt);
	PIEremoveElement(s);
	spring(blockW/1000,springBalanceY);
	PIEchangeInputText("Weight Block: ",((blockW))+ " g");
	PIEchangeInputText("Weight final: ","None");
	PIEchangeInputText("Buoyant force: ","0 N");
	x = 22; f2=0; g2=0;

}
var t1,x;
var submerged = 0,flag=0,prev=0;
var elongation=0,k=100;
var side1B=60;
function updateExperimentElements(t,dt){
	
	if(hack<7){
		hack++;
		if(hack==7)
		PIEstopAnimation();
	}
	else{
		if(flag==0){
				/*springBalanceY = 60;
				springBalance.position.set(0,springBalanceY,0);
				side2.position.set(0,springBalanceY,5);
				block.position.set(0,springBalanceY+diffblock,0);
				pointer.position.set(6,springBalanceY,5);*/
				t2 = x/5;
				//console.log(dt);
				blockW = V*densityBlock*g;
				prev2 = block2A;
				block2Fd = ((elongation2*k)-(blockW))/50;
				block2Ad = block2Fd/V*densityBlock;
				block2Vd = block2Vd+block2Ad*t2;
				block2Yd = block2Yd + block2Vd*t2 + block2Ad*t2*t2/2;
				scale = (startstring - block2Yd)/20;
				block.position.y = block2Yd;
				string.scale.y = scale;
				string2Y = string.position.y = (startstring+block2Yd)/2;
	
				block2F = ((elongation2*k)-(blockW));
				block2A = block2F/V*densityBlock;
				block2V = block2V+block2A*t2;
				block2Y = block2Y + block2V*t2 + block2A*t2*t2/2;
				elongation2 = startstring - block2Y;
				side12B =74 - (elongation2*30)/1000;	
			
	    			scale2 = (springBalanceY+15 - (side12B));
				if(scale2<=30){
					side1.scale.y = scale2;
					side12Y= side1.position.y = (springBalanceY+15+ (side12B))/2;
					diffside1 = side12Y - springBalanceY;
				}	
				diffblock = block2Yd - springBalanceY;
				diffstring = string2Y - springBalanceY;
				systemwt = baseAreaWater*densityLiquid*g/1000;
				sc.scale.x = ((systemwt/50))/1;
				sc.position.x = (-55+(systemwt/50))/2;

				
				//PIEremoveElement(meshleft);
				//text2(systemwt,100,80,5);
				if( Math.floor(block2F*10)==0){
					PIEchangeInputText("Weight Block: ",((blockW))+ " g");
				PIEchangeInputText("Buoyant force: ","0" + " N");

					PIEremoveElement(s);
					spring(blockW/1000,springBalanceY);
					//flag=1;
					PIEstopAnimation();
				}
		}	
		else if(flag==2){
			t1 = x/50;
			prev = blockA;
			blockF = ((elongation*k)+(submerged*baseArea*densityLiquid*g)/10-(blockW));
			blockA = blockF/V*densityBlock;
			blockV = blockV+blockA*t1;
			blockY = blockY + blockV*t1 + blockA*t1*t1/2;
			
			diffblock = blockY - springBalanceY;
			submerged = 5-(blockY-level);
		
			if(submerged<0) submerged = 0;
			else if(submerged>=10) submerged = 10;
		
			elongation = startstring - blockY;
			block.position.y = blockY;
			side1B =springBalanceY+14 - (elongation*30)/500;
			scale = (startstring - blockY)/20;
    			scale2 = (springBalanceY+15 - (side1B));
			if(scale2<=30){
					side1.scale.y = scale2;
					side1Y = side1.position.y = (springBalanceY+15+ (side1B))/2;
					diffside1 = side1Y - springBalanceY;
			}
			string.scale.y = scale;

			stringY = string.position.y = (startstring+blockY)/2;
			diffblock = blockY - springBalanceY;
			diffstring = stringY - springBalanceY;
			if(blockY<-80){
			blockV = -blockV;
			blockA= -blockA;
			blockY = -80;
			}
			if(blockY >= springBalanceY-20-10){
				blockV=-blockV;
				blockA=-blockA;
				blockY=springBalanceY-20-10;
			}	
			wt = systemwt + (blockW - elongation*k)/20;	
			sc.scale.x = ((wt/50))/1;
			sc.position.x = (-55+(wt/50))/2;
			PIEchangeInputText("Weight final: ",wt);
			if(blockY==-80){
				f2++;
				console.log(f2);
			}
			if(Math.floor(blockV*10)==0){
				g2++;
				
			}
			//d = text2(wt,100,80,5);
         		if(Math.floor(blockF*10)==0 || f2>=20 ||g2>=21){
				
				flag=0; f=0;g=0;
				var force = Math.abs((submerged*baseArea*densityLiquid*g)/10); 
				var f = (blockW/1000) - ((blockW -force).toFixed(2))/8000;
				q = systemwt + f;
				PIEchangeInputText("Weight Block: ",((blockW -force))/8+ " g");
				
				PIEchangeInputText("Weight initial: ",systemwt+ " N");			
				PIEchangeInputText("Weight final: ",q+ " N");
				

				PIEchangeInputText("Buoyant force: ",f + " N");

				PIEremoveElement(meshleft);
				weight(((q).toFixed(2)));
				PIEremoveElement(s);
				spring(((blockW -force)/8000).toFixed(3),springBalanceY);
				PIEstopAnimation();
				initialise();
			}
			
		}
      		

			
	}	
 }
