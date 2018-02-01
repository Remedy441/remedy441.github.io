{

/* Global Variables */
//room variables........
var myFloor;           
var myCeiling;         
var myBack;             
var myRight;            
var myLeft;             
var wallThickness;
var leftB;              
var rightB;            
var bottomB;           
var topB;               
var backB=-4.0;
var helpContent;
var infoContent;
var geometry;
var material;
var projector;
var mouse;
var raycaster;
var single_click_timeout;


//table variables..
var table_surface;
var table_surface_material;
var table_surface_geometry;
var table_legs=[];
var table_legs_geometry;
var table_legs_material;
var table_texture

//battery variables...
var battery=[];
var battery_material;
var battery_texture;
var battery_geometry;
var battery_Voltage;

//wire materials...

var wire1,wire2;
var wire1_points,wire2_points;
var wire1_geo,wire2_geo;
var wire_material_positive,wire_material_negative;
var break_particle_constant;


//steel wool..
var steel_wool_material;
var steel_wool_geometry;
var steel_wool;
var steel_wool_connection_state;
var steel_wool_points;
var steel_wool_red=77;
var steel_wool_blue=77;
var steel_wool_green=77;

//holder variables...
var holder_material;
var holder_geometry;
var holders=[];

//switch variables......
var switch_control;
var switch_material;
var switch_geometry;
var switch_state;
var knob;
var knob_material;
var knob_geometry;


// GUI Control options.......
//voltage x;
var voltage_default;
var temperature_default;
var steel_wool_resistance;
var voltage_step;
var voltage_min;
var voltage_max;
var voltage_name;


}

/***********************************************************************
 *  																   *
 * 						Default functions                              *
 * 																	   *
 * *********************************************************************/
{
function loadExperimentElements()
{
    styleUp();
    PIEsetExperimentTitle("Melting of Steel Wool");
    PIEsetDeveloperName("Raghu Cheekatla");
    PIEhideControlElement();
    initialiseHelp();
    initialiseInfo();
    initialiseScene();
    initialiseOtherVariables();
    makeSetup();
    PIEdragElement(knob);
    PIEsetDrag(knob, toggle_switch);
    PIEdragElement(switch_control);
    PIEsetDrag(switch_control,toggle_switch);
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    initialiseControls();
    window.addEventListener("click", toggle_switch_click_knob, false ); 
    resetExperiment();
}

	
/*****************************initialization function******************/
function initialiseScene()
{
    mySceneTLX = -1.0;
    mySceneTLY = 3.0;
    mySceneBRX = 5.0;
    mySceneBRY = 0.0;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
    
}
/********************End of Initialization function********************/

/********************Initialize control variables**********************/
function initialiseControlVariables()
{
    voltage_name="Voltage";    
    voltage_default=30.0;
    battery_Voltage=voltage_default;
    voltage_max=40.0;
    voltage_min=0.0;
    voltage_step=1;
    break_particle_constant=5;
}
/********************End of Initialization ****************************/

/********************Use control variables ****************************/

function initialiseControls()
{
    initialiseControlVariables();
    /* Create Input Panel */
    PIEaddInputSlider(voltage_name,battery_Voltage, handleVoltage, voltage_min, voltage_max, voltage_step);
    PIEaddDisplayText(voltage_name,battery_Voltage);
    console.log(voltage_name+"--"+voltage_default+"--"+handleVoltage+"--"+voltage_min+"--"+voltage_max+"--"+voltage_step);
}


/******************** End of Initializationcontrol**********************/

/******************** Initialize other variables  **********************/


function initialiseOtherVariables()
{
    wallThickness = 0.20;
    leftB=mySceneTLX;
    rightB=mySceneBRX;
    bottomB=mySceneBRY;
    topB=mySceneTLY;
    steel_wool_connection_state=1;
}
function resetExperiment()
{
    console.log("------------------------------------------------------\n-----------------------------------------------------");
    for(var i=0;i<PIEscene.children.length;i++){
        console.log(PIEscene.children[i].name);
        if(PIEscene.children[i].name=="knob" || PIEscene.children[i].name=="switch_control")
            console.log("--------------------------------\n\t\t\t"+i+"\n|\n--------------------------------------");
    }
    console.log("------------------------------------------------------\n-----------------------------------------------------");
    PIEscene.remove(steel_wool);
    placeSteelWool();
    switch_state=0;
    knob.position.y=1.33;
    knob.rotation.z=0.45;
    PIErender();
    steel_wool_connection_state=1;  
    PIEstartButton.addEventListener("click",toggle_switch_click);
    PIEscene.children[23].addEventListener("click",function(){alet("got it!!!");});
}

function updateExperimentElements(t, dt)
{   compute_break_constant();   
    if(switch_state==1 && steel_wool_connection_state==1 && battery_Voltage>0){
        melt_steel_wool();
        }
    /*if((switch_state==0 || steel_wool_connection_state==0) && (steel_wool_red>77 || steel_wool_green<77)){
        cool_steel_wool();
    }*/
    PIEchangeDisplayText(voltage_name,battery_Voltage);
}


}
/******************** End of other variable initialization**************/


/***********************************************************************
 *  																   *
 * 						My functions                              *
 * 																	   *
 * *********************************************************************/
{
    
    
    
function compute_break_constant(){
    if(battery_Voltage<10)
        break_particle_constant=10;
    else if(battery_Voltage<20)
        break_particle_constant=10;
    else if(battery_Voltage<30)
        break_particle_constant=7;
    else
        break_particle_constant=5;
}


function handleVoltage(voltage){
    battery_Voltage=voltage;
    PIEchangeInputSlider(voltage_name,battery_Voltage);
    PIEchangeDisplayText(Voltage_name,battery_Voltage);    
    PIEchangeDisplaySlider(Voltage_name,battery_Voltage);
    }



function makeSetup(){
	createRoom();
	makeTable();
	placeHolders();
	placeSteelWool();
    placeBatteries();
	placeWires();
	placeSwitch();
    
}
function styleUp(){
    document.title="Melting of Steel Wool";
    PIEspeedElem.style.display="none";
    PIEspeedupButton.style.display="none";
    PIEslowdownButton.style.display="none";
var startBtn=PIEstartButton.style;
var stopBtn=PIEstopButton.style;
    startBtn.display="inlin-block";
    startBtn.background="#90EE90";
    startBtn.padding="2px 10px";
    startBtn.border="none";
    startBtn.margin="3px 15px";
    startBtn.color="#4d4d4d";
    stopBtn.background="#EB8888";
    stopBtn.color="white";
    stopBtn.border="none";
    stopBtn.padding="2px 10px";
    stopBtn.margin="3px 15px";
    PIEsourceElem.style.margin="3px 15px";
    }


}
/***********************************************************************
 * 
 *                       Actions and movements                         *
 * 
 * ********************************************************************/

function toggle_switch_click_knob(b){
single_click_timeout=setTimeout(function(){
                var a;
				//b.defaultPrevented=true;
				PIEselectedDrag=null;
				PIEraycaster.setFromCamera(PIEmouseP,PIEcamera);
				a=PIEraycaster.intersectObjects(PIEdragElements);
				if(a.length>0){
                    if(PIEraycaster.ray.intersectPlane(PIEdragPlane,PIEdragIntersect)){
                        console.log("executed Pie mouse down");
                        toggle_switch_click();
                            }					
                }
            },200);
		}
    
 function toggle_switch(element,new_pos){
           clearTimeout(single_click_timeout);
           console.log("it works");
        if(new_pos.y<1.315){
            knob.position.y=1.315;
            knob.rotation.z=0;  
            switch_state=1;
            PIEstartAnimation();
        }
        else if(new_pos.y>=1.315 ){
            knob.position.y=1.33;
            knob.rotation.z=0.45;
            switch_state=0;
            cool_steel_wool();
            PIEstopAnimation();
            if((switch_state==0 || steel_wool_connection_state==0) && (steel_wool_red>77 || steel_wool_green<77)){
                cool_steel_wool();
    }
            }
    }

function toggle_switch_click(){
    switch_click_timeout=setTimeout(function(e){
         if(switch_state==0){
            knob.position.y=1.315;
            knob.rotation.z=0;  
            switch_state=1;
            PIEstartAnimation();
            PIEstopButton.addEventListener("click",toggle_switch_click);
            }
         else if(switch_state==1 ){
            console.log("done opening switch in t_w_c function");
            knob.position.y=1.33;
            knob.rotation.z=0.45;
            switch_state=0;
            PIEstopAnimation();
            if((switch_state==0 || steel_wool_connection_state==0) && (steel_wool_red>77 || steel_wool_green<77))
                cool_steel_wool();           
    }
    PIErender();
  },200);
}  
 /*************************Melting effect of steel wool ***************/
var steel_wool_mean_height=0;
var n;
var height_sum=0;
function melt_steel_wool(){
    setTimeout(function(){console.log("wait---in melt_steel_wool function");},150);
    if(steel_wool_red<255){ steel_wool_red+=1;      }
    if(steel_wool_green>0)  { steel_wool_blue-=1;steel_wool_green-=1; }
    if((steel_wool_red<255 || steel_wool_green>0)) {   
        steel_wool.material.color.set("rgb("+steel_wool_red+","+steel_wool_blue+","+steel_wool_green+")");
          }
    for ( var i = 0,break_particles=0,l=(steel_wool_geometry.vertices.length/2); i<l; i++ ) {
        if(steel_wool_red==255 && steel_wool_blue==0 && break_particles<break_particle_constant*battery_Voltage) {
            break_particles++;
                    steel_wool_geometry.vertices[ l+i ].y=0;
                    steel_wool_geometry.vertices[ l-i ].y=0;
                    steel_wool_geometry.vertices[ l+i ].z=0;
                    steel_wool_geometry.vertices[ l-i ].z=0;
                    steel_wool.geometry.verticesNeedUpdate = true;
            }
        
        else if(break_particles==break_particle_constant*battery_Voltage)   {
            steel_wool_connection_state=0;
            cool_steel_wool();
        }
        else {
            if(steel_wool_geometry.vertices[ l+i ].y>=0){
                    steel_wool_geometry.vertices[ l+i ].y-=(battery_Voltage*0.0006*steel_wool_geometry.vertices[ l+i ].y);
                    }
            /*else if(steel_wool_geometry.vertices[ l+i ].y<0){
                steel_wool_geometry.vertices[ l+i ].y+=(battery_Voltage*0.0006*steel_wool_geometry.vertices[ l-i ].y);
                }*/
            //melting effect for steel wool particles on left side....
            if(steel_wool_geometry.vertices[ l-i ].y>=0){
                    steel_wool_geometry.vertices[ l-i ].y-=(battery_Voltage*0.0006*steel_wool_geometry.vertices[ l-i ].y);
                }/*
            else if(steel_wool_geometry.vertices[ l-i ].y<0){
                steel_wool_geometry.vertices[ l-i ].y+=(battery_Voltage*0.0006*steel_wool_geometry.vertices[ l+i ].y);
                }  */
            steel_wool.geometry.verticesNeedUpdate = true;
            }
        }
          
}

function cool_steel_wool(){
    while(steel_wool_blue!=77 && steel_wool_red!=77){
    setTimeout(function(){console.log("wait");},500);
    if(steel_wool_red>77){ steel_wool_red-=1;      }
    if(steel_wool_green<77)  { steel_wool_blue+=1;steel_wool_green+=1; }
        steel_wool.material.color.set("rgb("+steel_wool_red+","+steel_wool_blue+","+steel_wool_green+")");
        console.log("color is set to ("+steel_wool_red+","+steel_wool_blue+","+steel_wool_green+")");
    }
}

/***********************************************************************
 *  																   *
 * 						Builder functions                              *
 * 																	   *
 * *********************************************************************/


function createRoom(){

    //initialize walls and floors....................
    geometry = new THREE.BoxGeometry( mySceneW * 2, wallThickness, 100);
    material = new THREE.MeshLambertMaterial( {color: 0x4D4D4D} );
    myFloor  = new THREE.Mesh( geometry, material );
    // myFloor.lookAt(new THREE.Vector3(0,1,0));
    myFloor.position.set(myCenterX, bottomB - (wallThickness / 2), 0.0);
    myFloor.receiveShadow = true;
    myFloor.name="floor";
    /* Ceiling */
    geometry = new THREE.BoxGeometry( mySceneW * 2, wallThickness, 100 );
    material = new THREE.MeshLambertMaterial( {color: 0xD3AAB1} );
    myCeiling = new THREE.Mesh( geometry, material );
    myCeiling.position.set(myCenterX, topB+(wallThickness/2), 0.0);
    myCeiling.name="ceiling";
    /* Left */
    geometry = new THREE.BoxGeometry( wallThickness, mySceneH * 2, 100 );
    material = new THREE.MeshPhongMaterial( {color: 0x90EE90} );
    myLeft = new THREE.Mesh( geometry, material );
    myLeft.position.set(leftB-(wallThickness/2), myCenterY, 0.0);
    myLeft.receiveShadow = true;
    myLeft.name="left wall";
    /* Right */
    geometry = new THREE.BoxGeometry( wallThickness, mySceneH * 2, 100 );
    material = new THREE.MeshLambertMaterial( {color: 0x90EE90} );
    myRight = new THREE.Mesh( geometry, material );
    myRight.position.set(rightB+(wallThickness/2), myCenterY, 0.0);
    myRight.receiveShadow = true;
    myRight.name="right wall";
    /* Back */
    geometry = new THREE.BoxGeometry( mySceneW * 2, mySceneH * 2, wallThickness );
    material = new THREE.MeshLambertMaterial( {color: 0xD3AAB1} );
    myBack = new THREE.Mesh( geometry, material );
    myBack.position.set(myCenterX, myCenterY, backB - (wallThickness / 2));
    myBack.receiveShadow = true;
    myBack.name="back wall";
    PIEaddElement(myFloor);
    PIEaddElement(myBack);
    PIEaddElement(myRight);
    PIEaddElement(myLeft);
    PIEaddElement(myCeiling);
    	
}
	
	
function makeTable(){
		
    
    //create table and add to scene..............
    table_texture=new THREE.ImageUtils.loadTexture("bench.jpg",{},function(){PIErenderer.render(PIEscene,PIEcamera);} );
    table_surface_material=new THREE.MeshLambertMaterial();
    table_surface_material.map=table_texture;
    table_surface_geometry=new THREE.BoxGeometry(1.6,1.5,0.06);
    table_surface=new THREE.Mesh(table_surface_geometry ,table_surface_material);
    table_surface.position.set(2,1.1,2.4);
    table_surface.name="table_surface";
    table_surface.rotation.x=-0.48*Math.PI;
    table_surface.castShadow = true;
    table_surface.receiveShadow = true;
    PIEaddElement(table_surface);
    
    //talbe legs......
   
   texture=new THREE.ImageUtils.loadTexture("legs.jpg" ,{},function(){PIErenderer.render(PIEscene,PIEcamera);});
   table_legs_material=new THREE.MeshPhongMaterial();
   table_legs_material.map=texture;
   table_legs_geometry=new THREE.CylinderGeometry(0.04,0.02,0.45);
    
    for(var p=0;p<4;p++){
        table_legs[p]=new THREE.Mesh(table_legs_geometry,table_legs_material);
        table_legs[p].name="table_leg_"+p;
        }
    table_legs[0].position.set(1.35,0.815,3.05);
    table_legs[1].position.set(2.65,0.815,3.05);
    table_legs[2].position.set(1.35,0.8155,1.8);
    table_legs[3].position.set(2.65,0.8155,1.8);
    
    for(i=0;i<table_legs.length;i++){
    PIEaddElement(table_legs[i]);    
    }
 }


function placeHolders(){
	
	
    //holders.........
    texture=new THREE.ImageUtils.loadTexture("hold.jpg" ,{},function(){PIErenderer.render(PIEscene,PIEcamera);});
    holder_material=new THREE.MeshPhongMaterial();
    holder_material.map=texture;
    holder_geometry=new THREE.CylinderGeometry(0.015,0.02,0.22);
    for(var p=0;p<2;p++){
       holders[p]=new THREE.Mesh(holder_geometry,holder_material);
        holders[p].name="Holders"+i;
    }
    holder_geometry=new THREE.CylinderGeometry(0.008,0.008,1.2);
    holder_material=new THREE.MeshBasicMaterial({color:0x221616});
    holders[2]=new THREE.Mesh(holder_geometry,holder_material);
    holders[2].name="Holders2";
    holder_geometry=new THREE.CylinderGeometry(0.038,0.058,0.017);
    holder_material=new THREE.MeshBasicMaterial({color:0x6F530D});
    holders[3]=new THREE.Mesh(holder_geometry,holder_material);
    holders[4]=new THREE.Mesh(holder_geometry,holder_material);
    holders[3].name="Holders3";
    holders[4].name="Holders4";
    for(var i=0;i<holders.length;i++){
        PIEaddElement(holders[i]);
        }
    holders[2].rotation.z=0.5*Math.PI;
    holders[0].position.set(1.5,1.27,2.4);
    holders[1].position.set(2.5,1.27,2.4);
    holders[2].position.set(2.0,1.34,2.4);
    holders[3].position.set(1.5,1.15,2.4);
    holders[4].position.set(2.5,1.15,2.4);
	}
    
function placeSteelWool(){
	
	steel_wool_material=new THREE.MeshBasicMaterial({color:0x4D4D4D,wireframe:true});
    steel_wool_particle_material=new THREE.ParticleBasicMaterial({size:0.01,color:"red"});
    steel_wool_points = []; 
	for (var i = 1.40 ; i < 2.4000 ; i+=0.00001) {
		  var randomX = i + (Math.random() * 0.005);
		  var randomY = 0 + (Math.random() * 0.09);
		  var randomZ = 0 +(Math.random() * 0.09);
		  steel_wool_points.push(new THREE.Vector3(randomX, randomY, randomZ));
      }
    
    steel_wool_geometry= new THREE.TubeGeometry( new THREE.SplineCurve3(steel_wool_points),200, 0.02,10, closed);
    steel_wool_geometry.dynamic=true;
    steel_wool = new THREE.Mesh(steel_wool_geometry,steel_wool_material);
    steel_wool.position.set(0.1,1.34,2.4);
    steel_wool.name="steel_wool";
    PIEaddElement(steel_wool);
}
    
function placeBatteries(){
        
    battery_texture=new THREE.ImageUtils.loadTexture("cell64.PNG",{},function(){PIErenderer.render(PIEscene,PIEcamera);});
    battery_material=new THREE.MeshPhongMaterial();
    battery_material.map =battery_texture;
    battery_geometry=new THREE.CylinderGeometry(0.025,0.025,0.089);
    for(var i=0;i<4;i++){
        battery[i]=new THREE.Mesh(battery_geometry,battery_material);
        battery[i].rotation.z=-0.5*Math.PI;
        battery[i].rotation.x=0.75*Math.PI;
        battery[i].name="battery_"+i;
        PIEaddElement(battery[i]);
    }
    
    battery_material=new THREE.MeshBasicMaterial({color:0x8B6914});
    battery_geometry=new THREE.CylinderGeometry(0.01,0.01,0.38);
    battery[4]=new THREE.Mesh(battery_geometry,battery_material);
    battery[4].rotation.z=-0.5*Math.PI;
    PIEaddElement(battery[4]);
    
    battery[0].position.set(1.55,1.145,2.9);
    battery[1].position.set(1.65,1.145,2.9);
    battery[2].position.set(1.75,1.145,2.9);
    battery[3].position.set(1.85,1.145,2.9);
    battery[4].position.set(1.715,1.145,2.9)
        
    
}

function placeWires(){
	
//negative end connecting wire...........
    wire_material_positive=new THREE.MeshBasicMaterial({color:0x313174});
    wire1_points=[];
    wire1_points.push(new THREE.Vector3(1.54,1.340,2.4));
    wire1_points.push(new THREE.Vector3(1.38,1.340,2.4));
    wire1_points.push(new THREE.Vector3(1.35,1.15,2.4));
    wire1_points.push(new THREE.Vector3(1.4,1.15,3));
    wire1_points.push(new THREE.Vector3(1.52,1.16,3));
 
    wire1_geo=new THREE.TubeGeometry(new THREE.SplineCurve3(wire1_points),null,0.002,null,closed);
    wire1=new THREE.Mesh(wire1_geo,wire_material_positive);
       
//positive end connecting wire...........
    wire_material_positive=new THREE.MeshBasicMaterial({color:0xD90D0D});
    wire2_points=[];
    wire2_points.push(new THREE.Vector3(2.45,1.34,2.4));
    wire2_points.push(new THREE.Vector3(2.6,1.34,2.4));
    wire2_points.push(new THREE.Vector3(2.67,1.15,2.4));
    wire2_points.push(new THREE.Vector3(2.68,1.15,3));
    wire2_points.push(new THREE.Vector3(2.4,1.15,3));
    wire2_points.push(new THREE.Vector3(2.2,1.14,3));
    wire2_points.push(new THREE.Vector3(2.11,1.14,3));
    wire2_points.push(new THREE.Vector3(1.91,1.155,2.99));
    
    wire2_geo=new THREE.TubeGeometry(new THREE.SplineCurve3(wire2_points),null,0.002,null,closed);
    wire2=new THREE.Mesh(wire2_geo,wire_material_positive);
    
    
    PIEaddElement(wire2);
    PIEaddElement(wire1); 

	
	}
function placeSwitch(){
	
	switch_geometry=new THREE.CubeGeometry(0.15,0.02,0.1,0.1,0.1,0.1);
    switch_material=new THREE.MeshPhongMaterial();
    texture=new THREE.ImageUtils.loadTexture("switch.jpg",{},function(){PIErenderer.render(PIEscene,PIEcamera);});
    switch_material.map=texture;
    switch_control=new THREE.Mesh(switch_geometry,switch_material);
    switch_control.position.set(2.1,1.3,4.1);
    switch_control.name="switch_control";
    PIEaddElement(switch_control);
    
    knob_geometry=new THREE.CubeGeometry(0.1,0.02,0.001,0.1,0.1,0.1);
    knob_material=new THREE.MeshLambertMaterial({color:0x7E3B3B});
    knob=new THREE.Mesh(knob_geometry,knob_material);
    knob.position.set(2.1,1.33,4.1);
    knob.rotation.z=0.45;
    PIEaddElement(knob);
    knob.name="knob";

  }



/**********************************************************************
 * 
 * 
 * 
 * *******************************************************************/

function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Melting of Steel Wool Experiment</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows how steel wool burns and melts on application of D.C voltage</p>";
    infoContent = infoContent + "<h3>Joule Heating</h3>";
    infoContent = infoContent + "<p><strong>Joule heating<strong>, also known as <strong>ohmic heating<strong> and resistive heating, is the process by which the passage of an electric current through a conductor produces heat</p>";
    infoContent = infoContent + "<p>Joule's first law states that the power of heating generated by an electric conductor is directly proportional to the product of resistance and the square of the current.S.I units of power is the Joule.</p>";
    infoContent = infoContent + "<p><h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P &alpha; R.I<sup>2</sup></h2></p>";
    infoContent = infoContent + "<p>Where <em>P</em> is the amount of energy released,</p>";
    infoContent = infoContent + "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>R</em> is the resistance of the conductor and </p>";
    infoContent = infoContent + "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>I</em> is the amount of current passing through it.</p>";
    infoContent = infoContent + "<p><h2>Resistance:</h2></p>";
    infoContent = infoContent + "<p>The electric resistance of an electric conductor is a measure of the difficulty to pass an electric current through that conductor. Resistance can be defined as the ratio of voltage across an object to the current passing through it(R=V/I).S.I units of resistance is the Ohms.</p>";
    infoContent = infoContent + "<p><h2>Current</h2></p>";
    infoContent = infoContent + "<p>An electric current is a flow of electric charge. In electric circuits this charge is often carried by moving electrons in a wire. S.I units of current is the ampere.</p>";
    infoContent = infoContent + "<p><h2>Steel Wool</h2><img height='120px' width='250px' src='steel_wool.jpg'></p>";
    infoContent = infoContent + "<p>Steel wool is also known as wire wool or wire sponge, is a bundle of very fine and flexible sharp-edged steel filaments. It is used as an abrasive in finishing and repair work for polishing wood or metal objects, cleaning household cookware, cleaning windows, and sanding surfaces.</p>";
    infoContent = infoContent + "<p>It is made from low-carbon steel in a process similar to broaching, where a heavy steel wire is pulled through a toothed die that removes thin, sharp, wire shavings.</p>";
    infoContent = infoContent + "<p>It can catch fire even if it is in a wet state. It can be easily lit by a D.C battery or any source of fire.</p>";
    infoContent = infoContent + "<p>Steel wool is graded basing on the fiber thickness. Higher grades for very fine mesh and low grades for denser fibers.</p>";
    infoContent = infoContent + "<p><h2 style='color:red'>Caution</h2>Steel wool is highly flamable!!! Children are adviced not to try this at home without an adult's presence.</p>";
    infoContent = infoContent + "<p></p>";
    infoContent = infoContent + "<p></p>";
    infoContent = infoContent + "<h2>Learn....Live</h2>";
    PIEupdateInfo(infoContent);
}




function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Melting of Steel Wool experiment help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment how a steel wool melts on applicatoin of electric current to it due to Joule's heating.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The animation can be controlled by two different controls in the page.</p>";
    helpContent = helpContent + "<h3>Header controls</h3>";
    helpContent = helpContent + "<p>The header in the page contains Reset, Start, Pause and Stop buttons. By</p>";
    helpContent = helpContent + "<p>You can have control over the following</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Start&nbsp;&nbsp;:&nbsp;begin animation. This can be done by pressing Start button on the top.</li>";
    helpContent = helpContent + "<li>Stop&nbsp;&nbsp;:&nbsp;stop animation</li>";
    helpContent = helpContent + "<li>Pause&nbsp;:&nbsp;temporarily pause the animation and can resume afterwards. This be controlled by Pause button on header</li>";
    helpContent = helpContent + "<li>Reset&nbsp;:&nbsp;reset the whole setup as it was in the begining.</li>";
    helpContent = helpContent + "<li>Voltage&nbsp;:&nbsp;displays the voltage of batteries being used.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p></p>";
    helpContent = helpContent + "<p></p>";
    helpContent = helpContent + "<h3>Animation</h3>";
    helpContent = helpContent + "<p>In the animation melting of steel wool on application of current is shown.</p>";
    helpContent = helpContent + "<p>The right hand panel has the value of applied voltage and it can be altered.</p>";
    helpContent = helpContent + "<h3>The Switch Control</h3>";
    helpContent = helpContent + "<p>Switch can also be used instead of buttons on the top to control the flow of electricity over steel wool. Just place your mouse over the switch's handle and drag it down to close and drag up to open the connection.</p>"
    helpContent = helpContent + "<p>You can toggle between the states of switch either by dragging it's handle or by the buttons on the top header.</p>";
    helpContent = helpContent + "<h2>Happy Learning</h2>";
    PIEupdateHelp(helpContent);
}

