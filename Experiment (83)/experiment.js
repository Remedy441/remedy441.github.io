
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
var height1=2.5;
var height2;
var mass1=2.5;
var mass2=2.5;
var energy1=mass1*9.8*height1;
var energy2=0.0;
var ymax1=2.5;
var ymax2=2.5;
var row_no=1;
function initialiseControlVariables()
{
    LXdefault=2.5;         
    RXdefault=2.5;             
    LXmin=1;  
    LXmax=4.0;  
	RXmin=2; 
    RXmax=3.0;     
	step=0.1;
}
function initialiseControls()
{
	Table1="Values";
	Left_mass="Left Mass";
	Right_mass="Right Mass";
    Left_Height="Left Height";
	Right_Height="Right Height";
	Left_Energy="Left Energy";
	Right_Energy="Right Energy";
    initialiseControlVariables();
    PIEaddInputSlider(Left_mass, LXdefault,mass_change_l , LXmin, LXmax, step);
    PIEaddInputSlider(Right_mass, RXdefault, mass_change_r, RXmin, RXmax, step);
	PIEaddInputSlider(Left_Height, RXdefault, height_change_l, 1, 4, step);
	
}
function mass_change_l(newValue)
{
        initialiseOtherVariables();  
		table.rotation.z=-0.1*Math.PI;
	    tablel1.position.set(-5.3,-0.5,0);
		tabler1.position.set(5.3,-3.3,0);
		Box2.position.set(5.5, -2.8,0);
		Box1.position.set(-5.5,height1,0);
		flag=1;
		temp=-0.9;
		fact=0.1;
		temp2=0;
		
	mass1=newValue;
	energy1=mass1*height1*9.8;
	ymax2=energy1/(9.8*mass2);
		
    	
		if(mass1<=2)
		{
			Box1.scale.x=1.0;
			Box1.scale.y=1.0;
			Box1.scale.z=1.0;
		}
		else
		{
			Box1.scale.x=1.3;
			Box1.scale.y=1.3;
			Box1.scale.z=1.3;
		}
	PIErender();
}
function mass_change_r(newValue)
{
	   initialiseOtherVariables();  
		table.rotation.z=-0.1*Math.PI;
		//tablel.position.set(-4.9,-0.45,0);
		tablel1.position.set(-5.3,-0.5,0);
		//tabler.position.set(4.9,-3.8,0);
		tabler1.position.set(5.3,-3.3,0);
		Box2.position.set(5.5, -2.8,0);
		Box1.position.set(-5.5, height1,0);
		flag=1;
		temp=-0.9;
		fact=0.1;
		temp2=0;

	mass2=newValue;
	energy1=mass1*height1*9.8;
	ymax2=energy1/(9.8*mass2);
		//row_no++;
    	/*PIEupdateTableCell(row_no, 0,mass1.toPrecision(2));
		PIEupdateTableCell(row_no, 1,height1.toPrecision(2));
		PIEupdateTableCell(row_no, 2,energy1.toPrecision(2));
		PIEupdateTableCell(row_no, 3,mass2.toPrecision(2));
		PIEupdateTableCell(row_no, 4,-2.8);
		PIEupdateTableCell(row_no, 5,energy2.toPrecision(2));
		*/
		if(mass2<=2.5)
		{
			Box2.scale.x=1.0;
			Box2.scale.y=1.0;
			Box2.scale.z=1.0;
		}
		else
		{
	        Box2.scale.x=1.3;
		    Box2.scale.y=1.3;
		    Box2.scale.z=1.3;
        }
	
	PIErender();
}

function height_change_l(newValue)
{
	height1=newValue;
   initialiseOtherVariables();  
		table.rotation.z=-0.1*Math.PI;
		//tablel.position.set(-4.9,-0.45,0);
		tablel1.position.set(-5.3,-0.5,0);
		//tabler.position.set(4.9,-3.8,0);
		tabler1.position.set(5.3,-3.3,0);
		Box2.position.set(5.5, -2.8,0);
		Box1.position.set(-5.5, height1,0);
		flag=1;
		temp=-0.9;
		fact=0.1;
		temp2=0;

	
	ymax1=height1;
	energy1=mass1*height1*9.8;
	ymax2=energy1/(9.8*mass2);
	Box1.position.set(-5.5,height1,0);
		//row_no++;
		/*PIEupdateTableCell(row_no, 0,mass1.toPrecision(2));
		PIEupdateTableCell(row_no, 1,height1.toPrecision(2));
		PIEupdateTableCell(row_no, 2,energy1.toPrecision(2));
		PIEupdateTableCell(row_no, 3,mass2.toPrecision(2));
		PIEupdateTableCell(row_no, 4,-2.8);
		PIEupdateTableCell(row_no, 5,energy2.toPrecision(2));
		 */
	PIErender();
}
var helpContent;
function initialiseHelp()
{
    //helpContent="<html> <body> <p>This is help content </p> </body> </html>";
    helpContent = helpContent + "<h2>Potential Energy - Gravity</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows two blocks on the see saw.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation control. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can give the mass of the left block,the mass right block and the height of left block</p>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, one block falls on the see saw and losses its gravitational potential energy which is used by the second block to gain height and potential energy.Then the second block falls and the cycle repeats.</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
	PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
   //  infoContent =  "<html> <body> <p>This is info content </p> </body> </html>";
    infoContent = infoContent + "<h2>Potential Energy - Gravity</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment has two blocks on a see saw.</p>";
    infoContent = infoContent + "<h3>Potential Energy</h3>";
    infoContent = infoContent + "<p>When the block has some height it has gravitational potential energy with it. When it falls it losses this energy and when it rises  it gains the energy.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene()
{
	mySceneTLX = -8.5;
    mySceneTLY = 9.25;
    mySceneBRX =  8.5;
    mySceneBRY = -9.25;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
}

function initialiseOtherVariables()
{	

}
/*
function check()
{
	console.log("Hello");
	var h=PIEtableData[0][2][4].innerHTML.innerHTML;
	console.log(h);
}*/
function loadExperimentElements()
{

    PIEsetExperimentTitle("Potential Energy - Gravity");
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
    // texture = loader.load( '../PIE/images/hardwood2_roughness.jpg' );
	 texture = loader.load( '../PIE/images/hardwood2_roughness.jpg' );
     texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
     texture.repeat.set( 3, 3 );
     texture.anisotropy = 16;
     material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: texture } );
     //geometry = new THREE.PlaneBufferGeometry( mySceneW * 2, backB * 2 );
    geometry = new THREE.BoxGeometry( mySceneW * 20, wallThickness*100, 100);
    //material = new THREE.MeshLambertMaterial( {color: 0xaaaaaa} );
    myFloor  = new THREE.Mesh( geometry, material );
    myFloor.lookAt(new THREE.Vector3(0,1,0));
    myFloor.position.set(myCenterX, bottomB - (wallThickness / 2), -200);
    myFloor.receiveShadow = false;
    PIEaddElement(myFloor);
	
	 wallThickness = 0.40;
	 bottomB=mySceneBRY;
	 loader = new THREE.TextureLoader();
     texture = loader.load( '../PIE/images/grasslight-big.jpg' );
     texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
     texture.repeat.set( 1, 1 );
     texture.anisotropy = 16;
     material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: texture } );
    geometry = new THREE.BoxGeometry( mySceneW*20 , wallThickness*1000, 1);
    myFloor  = new THREE.Mesh( geometry, material );
    myFloor.lookAt(new THREE.Vector3(0,1,0));
    myFloor.position.set(myCenterX, -4.8 , -2);
    myFloor.receiveShadow = false;
    PIEaddElement(myFloor);
	
	
	    var baseGeometry = new THREE.BoxGeometry(15.0,0.1,2.0);
        var baseMaterial = new THREE.MeshBasicMaterial({color: 0x872D1A});
        base = new THREE.Mesh(baseGeometry, baseMaterial);
		base.position.set(0,-4.0,0);
        PIEaddElement(base);

		var TableGeometry = new THREE.BoxGeometry(12.5,0.005,2.0);
        var TableMaterial = new THREE.MeshBasicMaterial({color: 0x872D1A});
        table = new THREE.Mesh(TableGeometry, TableMaterial);
		table.position.set(0,-2.0,0);
		table.rotation.z=-0.1*Math.PI;
        PIEaddElement(table);
		
		var TableGeometrybl = new THREE.BoxGeometry(0.3,2.0,2.0);
        var TableMaterialbl = new THREE.MeshBasicMaterial({color: 0x872D1A  });
        tablebl = new THREE.Mesh(TableGeometrybl, TableMaterialbl);
	    tablebl.position.set(-0.7,-3.0,0);
		tablebl.rotation.z=-0.25*Math.PI;
        PIEaddElement(tablebl);
		
		var TableGeometrybr = new THREE.BoxGeometry(0.3,2.0,2.0);
        var TableMaterialbr = new THREE.MeshBasicMaterial({color: 0x872D1A  });
        tablebr = new THREE.Mesh(TableGeometrybr, TableMaterialbr);
	    tablebr.position.set(0.7,-3.0,0);
		tablebr.rotation.z=0.25*Math.PI;
        PIEaddElement(tablebr);
		/*
		var TableGeometryl = new THREE.BoxGeometry(0.1,0.5,2.0);
        var TableMateriall = new THREE.MeshBasicMaterial({color: 0x872D1A  });
        tablel = new THREE.Mesh(TableGeometryl, TableMateriall);
		tablel.position.set(-4.9,-1.1,0);
        PIEaddElement(tablel);
		
		var TableGeometryr = new THREE.BoxGeometry(0.1,0.5,2.0);
        var TableMaterialr = new THREE.MeshBasicMaterial({color: 0x872D1A  });
        tabler = new THREE.Mesh(TableGeometryr, TableMaterialr);
		tabler.position.set(4.9,-2.2,0);
        PIEaddElement(tabler);*/
		
		var TableGeometryl1 = new THREE.BoxGeometry(2.0,0.2,2.0);
        var TableMateriall1 = new THREE.MeshBasicMaterial({color: 0x872D1A});
        tablel1 = new THREE.Mesh(TableGeometryl1, TableMateriall1);
		tablel1.position.set(-5.3,-1.0,0);
		//tablel1.rotation.y=Math.PI*0.1;
        PIEaddElement(tablel1);
		
		var TableGeometryr1 = new THREE.BoxGeometry(2.0,0.2,2.0);
        var TableMaterialr1 = new THREE.MeshBasicMaterial({color: 0x872D1A});
        tabler1 = new THREE.Mesh(TableGeometryr1, TableMaterialr1);
		tabler1.position.set(5.3,-2.0,0);
		PIEaddElement(tabler1);
		
		var BoxGeometry1 = new THREE.BoxGeometry(1.0, 1.0, 0.5);
        var BoxMaterial1 = new THREE.MeshBasicMaterial({color:  0x11C355   });             
		Box1 = new THREE.Mesh(BoxGeometry1, BoxMaterial1);
        Box1.position.set(-5.5, 2.0,0);
        PIEaddElement(Box1);
		
		var BoxGeometry2 = new THREE.BoxGeometry(1.0, 1.0, 0.5);
        var BoxMaterial2 = new THREE.MeshBasicMaterial({color:0xFFC300  });         
        Box2 = new THREE.Mesh(BoxGeometry2, BoxMaterial2);
        Box2.position.set(5.5, -1.7,0);
        PIEaddElement(Box2);
		
	
	
	PIEcreateTable("Observation Table", 10, 6, true);
    var headerRow=["Mass(L)", "Height(L)", "Energy(L)","Mass(R)", "Height(R)","Energy(R)"];
    PIEupdateTableRow(0, headerRow);
    PIEupdateTableCell(1, 0, mass1);
    PIEupdateTableCell(1, 1, height1);
    PIEupdateTableCell(1, 2, energy1);
	PIEupdateTableCell(1, 3, mass2);
	//PIEaddDisplayCommand("check",check);
    
	resetExperiment();	
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
	PIEadjustCamera(0,5,45);
	PIEturnCamera(-0.5,-0.5,-5);
	//PIEstartAnimation();
}
var temp16=height1;
function resetExperiment()
{
    initialiseOtherVariables();  
		table.rotation.z=-0.1*Math.PI;
		//tablel.position.set(-4.9,-0.45,0);
		tablel1.position.set(-5.3,-0.5,0);
		//tabler.position.set(4.9,-3.8,0);
		tabler1.position.set(5.3,-3.3,0);
		Box2.position.set(5.5, -2.8,0);
		Box1.position.set(-5.5, 2.5,0);
		flag=1;
		temp=-0.9;
		fact=0.1;
		temp2=0;
		mass1=2.5;
		mass2=2.5;
		height1=2.5;
	
		PIEchangeInputSlider("Left Mass",2.5);
		PIEchangeInputSlider("Right Mass",2.5);
		PIEchangeInputSlider("Left Height",2.5);
		
		PIEupdateTableCell(row_no, 0,mass1);
		PIEupdateTableCell(row_no, 1,height1);
		PIEupdateTableCell(row_no, 2,energy1.toPrecision(2));
		PIEupdateTableCell(row_no, 3,mass2);
		PIEupdateTableCell(row_no, 4,-2.8);
		PIEupdateTableCell(row_no, 5,energy2.toPrecision(2));
		Box1.scale.x=1.0;
			Box1.scale.y=1.0;
			Box1.scale.z=1.0;
			Box2.scale.x=1.0;
			Box2.scale.y=1.0;
			Box2.scale.z=1.0;
}
var Box1Y;
var Box2Y;
var ymin1=0.0;
var ymin2=-2.8;
var temp=-0.9;
var fact=0.1;
var temp2=0;
function updateExperimentElements(t, dt)
{
    var T;      
    var tempT;          /* Temporary time */
    Box1Y = Box1.position.y;
    Box2Y = Box2.position.y;
    T = dt / 1000.0;    /* convert to seconds */
				if(Box1Y>ymin1 && flag==1)
         	    {
					Box1Y -=0.1;
                    Box1.position.set(-5.5,Box1Y, 0);
					//console.log(flag);
				}
				if(Box1Y<=ymin1 && Box1Y>ymin2 && flag==1)
         	    { 
			          if(temp2==0)
					{
						temp=-0.9;
						temp2=1;
					}
					Box1Y -=0.1;
					Box2Y +=0.1;
					tablel1.position.set(-5.2,Box1Y-0.5,0);
				    tabler1.position.set(5.2,Box2Y-0.5,0);
			        //tablel.position.set(-4.9,Box1Y-0.1,0);
		            //tabler.position.set(4.9,Box2Y-0.1,0);
			        
				    table.rotation.z=temp*Math.PI*fact;
					temp+=0.06;
				    Box1.position.set(-5.5,Box1Y, 0);
                    Box2.position.set(5.5,Box2Y, 0);
					//console.log(flag);
					//console.log(temp+" "+fact);
				}
				if(Box1Y<=ymin2 && flag==1)
				{
					flag=2;
					//console.log('a');
				}
				if(Box2Y<ymax2 && flag==2)
				{
					Box2Y +=0.1;
                    Box2.position.set( 5.5,Box2Y, 0);
					//console.log(flag);
				}
				if(Box2Y>=ymax2 && flag==2)
				{
					flag=3;
					//console.log('b');
				}
				if(Box2Y>ymin1 && flag==3)
				{
					Box2Y -=0.1;
                    Box2.position.set( 5.5,Box2Y, 0);
					//console.log(flag);
				}
				if(Box2Y<=ymin1 && Box2Y>ymin2 && flag==3)
         	    { 
			       
					Box2Y -=0.1;
					Box1Y +=0.1;
					tablel1.position.set(-5.2,Box1Y-0.5,0);
				    tabler1.position.set(5.2,Box2Y-0.5,0);
			        //tablel.position.set(-4.9,Box1Y-0.1,0);
		            //tabler.position.set(4.9,Box2Y-0.1,0);    
				    table.rotation.z=temp*Math.PI*fact;
					temp-=0.06;
				    Box1.position.set(-5.5,Box1Y, 0);
                    Box2.position.set(5.5,Box2Y, 0);
					//console.log(flag);
					//console.log(temp+" "+fact);
				}
				
				if(Box2Y<=ymin2 && flag==3)
				{
					flag=4;
					//console.log('a');
				}
				if(Box1Y<ymax1 && flag==4)
         	    {
					Box1Y +=0.1;
                    Box1.position.set(-5.5,Box1Y, 0);
					//console.log(flag);
				}
				if(Box1Y>=ymax1 && flag==4)
				{
					flag=1;
					//console.log('d');
					temp2=0;
					//console.log("temp2 "+temp2);
				 }
				
				energy1=9.8*mass1*(Box1Y);
				energy2=9.8*mass1*(Box2Y);
				PIEupdateTableCell(row_no, 0,mass1.toPrecision(2));
				PIEupdateTableCell(row_no, 1,Box1Y.toPrecision(2));
				PIEupdateTableCell(row_no, 2,energy1.toPrecision(2));
				PIEupdateTableCell(row_no, 3,mass2.toPrecision(2));
				PIEupdateTableCell(row_no, 4,Box2Y.toPrecision(2));
				PIEupdateTableCell(row_no, 5,energy2.toPrecision(2));
				//console.log("energy1 "+energy1+" energy2 "+energy2+" height2 "+Box2Y+" ymas2 "+ymax2);
			
			
		
}
function STOP_ANIMATION()
{
	/*
temp16=height1;
var temp10=mass1.toPrecision(2);
var temp11=Box1Y.toPrecision(2);
var temp12=energy1.toPrecision(2);
var temp13=mass2.toPrecision(2);
var temp14=Box2Y.toPrecision(2);
var temp15=energy2.toPrecision(2);*/
	PIEstopAnimation();					
			   /* PIEupdateTableCell(row_no, 0,temp10);
				PIEupdateTableCell(row_no, 1,temp11);
				PIEupdateTableCell(row_no, 2,temp12);
				PIEupdateTableCell(row_no, 3,temp13);
				PIEupdateTableCell(row_no, 4,temp14);
				PIEupdateTableCell(row_no, 5,temp15);
				 */
if(row_no>10)
{
	row_no=1;
	for(i=2;i<10;i++)
	{
			   PIEupdateTableCell(i, 0,"");
				PIEupdateTableCell(i, 1,"");
				PIEupdateTableCell(i, 2,"");
				PIEupdateTableCell(i, 3,"");
				PIEupdateTableCell(i, 4,"");
				PIEupdateTableCell(i, 5,"");
	}
}
}
function PIESTARTAnimation()
{
	
	row_no++;
	PIEupdateTableCell(row_no, 0,mass1.toPrecision(2));
		PIEupdateTableCell(row_no, 1,height1.toPrecision(2));
		PIEupdateTableCell(row_no, 2,energy1.toPrecision(2));
		PIEupdateTableCell(row_no, 3,mass2.toPrecision(2));
		PIEupdateTableCell(row_no, 4,-2.8);
		PIEupdateTableCell(row_no, 5,energy2.toPrecision(2));
		PIEstartAnimation();
		
}
