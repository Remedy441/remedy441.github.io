/*
developed by Nihar Rao


*/


var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */





////my box variables declaration
var myBox;             
var myBoxRadius;       
var myBoxX;            
var myBoxY;                    
var myBoxZ;
var myBoxVelocity;
var myBoxAccelration;
var myBoxMass=300;



var table;
var maindiv;
var rowcounter=0;
var clock;
var input;

var clockText;

///clock
var myClock;

///input control variables

var weight1control;
var weight2control;
var weight3control;

var weight1min;
var weight1max
var weight2min;
var weight2max;
var weight3min;
var weight3max;
var weightstep;


var Table;
var TableX;
var TableY;
var Support1;
var Support2;

//strings
var String1;
var String2;
var String3;
var String4;
var String5;
var String6;
var String7;
var String8;
var String8a;
var String9;
var String10;
var String11;



//box variables


var myBox;
var myBoxX=0;
var myBoxY=0;
var myBoxZ=0;
var motionDirection="stationary";


//pulley 
var Pulley1;
var Pulley2;




//hook
var Hook1;
var Hook2;




//weights
var weight1;
var weight2;
var weight3;
var weight4;
var weight5;
var weight6;



//weight dimensions

var weight1Y=0.1;
var weight2Y=0.2;
var weight3Y=0.3;
var scale;

//weightmass with default=15 units

var weight1mass=15;
var weight2mass=15;
var weight3mass=15;
var weight4mass=15;
var weight5mass=15;
var weight6mass=15;

var weightdifference=0;//right-left!


//geometries of string

var geometry1;
var geometry2;
var geometry3;
var geometry4;
var geometry5;
var geometry6;
var geometry7;
var geometry8;
var geometry8a;
var geometry9;
var geometry10;
var geometry11;
//string colors
var material;
var material1;
var lawn;
material1 = new THREE.LineBasicMaterial({
    color: 0x30AF19
});

 material = new THREE.LineBasicMaterial({
    color: 0x0000ff
});


var weight1Text;
var weight2Text;
var weight3Text;
var weight4Text;
var weight5Text;
var weight6Text;







function handleweight1(newValue)
{
    var temp=weight1mass;

    weight1mass = newValue;
  
    
    weightdifference=(weight4mass+weight5mass+weight6mass)-(weight1mass+weight2mass+weight3mass);
    var z=newValue/10;
    if(temp>weight1mass)
    weight1.scale.y=(z>1.5)?1.1+z/100:1-z/10;
    else if(temp<weight1mass)
        weight1.scale.y=(z>1)?1.3+z/10:1-z/10;



    PIErender();
}


function handleweight2(newValue)
{
    var temp=weight2mass;
    weight2mass = newValue;
    weightdifference=(weight4mass+weight5mass+weight6mass)-(weight1mass+weight2mass+weight3mass);
     var z=newValue/10;
    if(temp>weight2mass)
    weight2.scale.y=(z>1.5)?1.3-z/100:1-z/10;
    else if(temp<weight2mass)
        weight2.scale.y=(z>1)?1.3+z/10:1-z/10;

   
    PIErender();
}
function handleweight3(newValue)
{
   var temp=weight3mass;
    weight3mass = newValue;
    weightdifference=(weight4mass+weight5mass+weight6mass)-(weight1mass+weight2mass+weight3mass);
     var z=newValue/10;
    if(temp>weight3mass)
    weight3.scale.y=(z>1)?1.13-z/50:1-z/100;
    else if(temp<weight3mass)
        weight3.scale.y=(z>1)?1.1+z/50:1-z/100;

    
    PIErender();
}
function handleweight4(newValue)
{
   
    var temp=weight4mass;
    weight4mass = newValue;
    weightdifference=(weight4mass+weight5mass+weight6mass)-(weight1mass+weight2mass+weight3mass);
     var z=newValue/10;
    if(temp>weight4mass)
    weight4.scale.y=(z>1.5)?1.3-z/100:1-z/10;
    else if(temp<weight4mass)
        weight4.scale.y=(z>1)?1.3+z/10:1-z/10;
    

    PIErender();
}


function handleweight5(newValue)
{
    var temp=weight5mass;
    weight5mass = newValue;
    weightdifference=(weight4mass+weight5mass+weight6mass)-(weight1mass+weight2mass+weight3mass);
     var z=newValue/10;
    if(temp>weight5mass)
    weight5.scale.y=(z>1.5)?1.3-z/100:1-z/10;
    else if(temp<weight5mass)
        weight5.scale.y=(z>1)?1.3+z/10:1-z/10;
   
    PIErender();
}
function handleweight6(newValue)
{
    var temp=weight6mass;

    weight6mass = newValue;
    
    var z=newValue/10;
    weightdifference=(weight4mass+weight5mass+weight6mass)-(weight1mass+weight2mass+weight3mass);
    if(temp>weight6mass)
    weight6.scale.y=(z>1)?1.13-z/50:1-z/100;
    else if(temp<weight6mass)
        weight6.scale.y=(z>1)?1.1+z/50:1-z/100

    
    PIErender();
}


function initialiseControlVariables()
{
    /* Labels */
    weight1control="weight1";                      
    weight2control="weight2";                  
    weight3control="weight3";                 
    weight4control="weight4";                      
    weight5control="weight5";                  
    weight6control="weight6"; 

    weight1min=4;
    weight1max=30;

    weight2min=6;
    weight2max=35;

    weight3min=8;
    weight3max=40;

    weightstep=2; 
    weightdefault=15;                
}


function initialiseControls()
{
    initialiseControlVariables();
    /* Create Input Panel */
    PIEaddInputSlider(weight1control, weightdefault, handleweight1, weight1min, weight1max, weightstep);
     PIEaddInputSlider(weight2control, weightdefault, handleweight2, weight2min, weight2max, weightstep);
    PIEaddInputSlider(weight3control, weightdefault, handleweight3, weight3min, weight3max, weightstep);
     PIEaddInputSlider(weight4control, weightdefault, handleweight4, weight1min, weight1max, weightstep);
     PIEaddInputSlider(weight5control, weightdefault, handleweight5, weight2min, weight2max, weightstep);
    PIEaddInputSlider(weight6control, weightdefault, handleweight6, weight3min, weight3max, weightstep);
    PIEaddInputCheckbox("Show/Hide Table", false,toggle);
    PIEaddInputCommand(" Add Data to Table" , note);
    
    /* Create Display Panel */
    PIEaddDisplayText(weight1control,weightdefault);
    PIEaddDisplayText(weight2control,weightdefault);
    PIEaddDisplayText(weight3control,weightdefault);
     PIEaddDisplayText(weight4control,weightdefault);
    PIEaddDisplayText(weight5control,weightdefault);
    PIEaddDisplayText(weight6control,weightdefault);

    
}


/******************* End of GUI control objects code ***********************/

/******************* Load Experiment objects code ***********************/


function initialiseScene()
{
    /* Initialise Scene Variables */
    mySceneTLX = -3.0;
    mySceneTLY = 3.0;
    mySceneBRX = 2.5;
    mySceneBRY = -4.1;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
    myBoxZ    = 0;
}

function initialiseOtherVariables()
{
    /* Initialise variables */
    myBoxRadius = mySceneW/30.0;
    wallThickness = 0.20;

    myBoxX=0;
    myBoxY=0.51;
    myBoxZ=0;

    
}

function loadExperimentElements()
{
var geometry;
var material;
var loader;
var texture;

    PIEsetExperimentTitle("Multiple forces – direction and result");
    PIEsetDeveloperName("Nihar Rao");
    PIEhideControlElement();

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();

    /* initialise Other Variables */
    initialiseOtherVariables();

   
       table=document.createElement("table");
       table.setAttribute("id","maintable");
       table.style="position:absolute;top:50px;color: black;border-collapse: collapse;text-align: center;vertical-align: bottom;";
       table.setAttribute("border","1");
        table.insertRow(0);
        var row = table.insertRow(0);
        row.style.backgroundColor="#D35400  ";


      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
       var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);


     cell1.innerHTML = "right";  
     cell2.innerHTML = "left";
     cell3.innerHTML = "Difference";  
     cell4.innerHTML = "Motion of Block";
     cell5.innerHTML = "Time Taken";






       
       document.body.appendChild(table);

       table.style.display="none";//for toggling with the help of a button
        

         input = document.createElement('h1'); 
        
        input.style="position:fixed; right: 88px;top:285px;color:red;width:64px;height:40px";
        input.readOnly=true;
        
        document.body.appendChild(input);
         clockText=document.createElement('h2');
         
         clockText.innerHTML="Clock";
         clockText.style="color:white ;position:fixed;right:98px;top:265px;";
         document.body.appendChild(clockText);

       
      
       




    PIErenderer.setClearColor(new THREE.Color(0x000));

      



     

    
    myBox = new THREE.Mesh(new THREE.BoxGeometry( 0.8, 0.8, 0.8 ), new THREE.MeshLambertMaterial({color:0xF91809  }));
    myBox.position.set(0,0,0);
    myBox.castShadow = true;
    myBox.receiveShadow = true;
    PIEaddElement(myBox);
    Table= new THREE.Mesh(new THREE.BoxGeometry( 3.95,0.2,0), new THREE.MeshLambertMaterial({color:0xFF5733}));
    myBox.position.set(TableX, TableY, myBoxZ);
    PIEaddElement(Table);
    lawn= new THREE.Mesh(new THREE.BoxGeometry( 15,1.5,0), new THREE.MeshLambertMaterial({color:0x5EF10F}));
    lawn.position.set(0,-3.15,0);
    PIEaddElement(lawn);
     


    Support1= new THREE.Mesh(new THREE.BoxGeometry( 0.2,2.3,0), new THREE.MeshLambertMaterial({color:0xededed}));
    Support1.position.set(-1.3,-1.25,0);
    PIEaddElement(Support1);
    Support2= new THREE.Mesh(new THREE.BoxGeometry( 0.2,2.3,0), new THREE.MeshLambertMaterial({color:0xededed}));
    Support2.position.set(1.3,-1.25,0);
    PIEaddElement(Support2);
    
    Pulley1= new THREE.Mesh(new THREE.SphereGeometry( 0.1, 0, 0 ), new THREE.MeshLambertMaterial({color: 0xAFA119  }));
    Pulley1.position.set(2.45,0.45,0);
    PIEaddElement(Pulley1);

    Pulley2= new THREE.Mesh(new THREE.SphereGeometry( 0.1, 0, 0 ), new THREE.MeshLambertMaterial({color: 0xAFA119  }));
    Pulley2.position.set(-2.45,0.45,0);
    PIEaddElement(Pulley2);

   

     material = new THREE.LineBasicMaterial({
    color: 0x0000ff
});

  myBox.receiveShadow=false;
   geometry1 = new THREE.Geometry();
  geometry1.vertices.push(
    new THREE.Vector3( -2.49,0.55,0 ),
    new THREE.Vector3( -0.35, 0.55, 0 )
    
    );
     String1 = new THREE.Line( geometry1, material );//left of box
     String1.receiveShadow=false;
     PIEaddElement(String1);


      material = new THREE.LineBasicMaterial({
    color: 0x0000ff
});
      String1.castShadow=false;


   geometry2 = new THREE.Geometry();
  geometry2.vertices.push(
    new THREE.Vector3( -0.35,  0.55,0),
    new THREE.Vector3( 2.49,0.55,0 )
    );
     String2 = new THREE.Line( geometry2, material );//right string
     String2.castShadow=false;
     PIEaddElement(String2);

      geometry3 = new THREE.Geometry();
  geometry3.vertices.push(
    new THREE.Vector3(  2.45,0.43,0),
    new THREE.Vector3( 1.97,0.1,0 )
    );
     String3 = new THREE.Line( geometry3, material );
     String3.castShadow=false;
     PIEaddElement(String3);

     geometry3 = new THREE.Geometry();
  geometry3.vertices.push(
    new THREE.Vector3(  -2.45,0.43,0),
    new THREE.Vector3( -1.97,0.1,0 )
    );
     String3 = new THREE.Line( geometry3, material );
     String3.castShadow=false;
     PIEaddElement(String3);

     geometry4 = new THREE.Geometry();
  geometry4.vertices.push(
    new THREE.Vector3(  -2.69,0.39,0),
    new THREE.Vector3( -2.5,0.1,0 )
    );
     String4 = new THREE.Line( geometry4, material );
     String4.castShadow=false;
    

     Hook1= new THREE.Mesh(new THREE.SphereGeometry( 0.02, 0, 0 ), new THREE.MeshLambertMaterial({color: 0xC0392B  }));
    Hook1.position.set(-2.54,-0.75,0);
    PIEaddElement(Hook1);

    Hook2= new THREE.Mesh(new THREE.SphereGeometry( 0.02, 0, 0 ), new THREE.MeshLambertMaterial({color: 0xC0392B }));
    Hook2.position.set(2.54,-0.75,0);
    PIEaddElement(Hook2);

    /*----------------------weight definitions------------------*/
    weight1 = new THREE.Mesh(new THREE.BoxGeometry( 0.3, weight1Y, 0), new THREE.MeshLambertMaterial({color:0xededed }));
    weight1.position.set(-3.04, -1.10, 0);
    weight1.castShadow = true;
    weight1.receiveShadow = true;
    PIEaddElement(weight1);

     weight2 = new THREE.Mesh(new THREE.BoxGeometry( 0.3, weight2Y, 0), new THREE.MeshLambertMaterial({color:0xBF3FAA }));
    weight2.position.set(-2.64, -1.10, 0);
    weight2.castShadow = true;
    weight2.receiveShadow = true;
    PIEaddElement(weight2);

    weight3 = new THREE.Mesh(new THREE.BoxGeometry( 0.3, weight3Y, 0), new THREE.MeshLambertMaterial({color:0xE5EC1D }));
    weight3.position.set(-2.14, -1.10, 0);
    weight3.castShadow = true;
    weight3.receiveShadow = true;
    PIEaddElement(weight3);

    weight4 = new THREE.Mesh(new THREE.BoxGeometry( 0.3, weight1Y, 0), new THREE.MeshLambertMaterial({color:0xededed}));
    weight4.position.set(3.04, -1.10, 0);
    weight4.castShadow = true;
    weight4.receiveShadow = true;
    PIEaddElement(weight4);

    weight5 = new THREE.Mesh(new THREE.BoxGeometry( 0.3, weight2Y, 0), new THREE.MeshLambertMaterial({color:0xBF3FAA }));
    weight5.position.set(2.64, -1.10, 0);
    weight5.castShadow = true;
    weight5.receiveShadow = true;
    PIEaddElement(weight5);


    weight6 = new THREE.Mesh(new THREE.BoxGeometry( 0.3, weight3Y, 0), new THREE.MeshLambertMaterial({color:0xE5EC1D }));
    weight6.position.set(2.14, -1.10, 0);
    weight6.castShadow = true;
    weight6.receiveShadow = true;
    PIEaddElement(weight6);

    myBox.castShadow=false; 







   /* END of weight definitions  */

   
/*weight texts */

   weight1Text=document.createElement('h5');
   weight1Text.style="position:fixed;left:409px;bottom:240px;color: white;";
   weight1Text.innerHTML="1";
   document.body.appendChild(weight1Text);

   weight2Text=document.createElement('h5');
   weight2Text.style="position:fixed;left:452px;bottom:245px;color: white;";
   weight2Text.innerHTML="2";
   document.body.appendChild(weight2Text);

   weight3Text=document.createElement('h5');
   weight3Text.style="position:fixed;left:514px;bottom:250px;color: white;";
   weight3Text.innerHTML="3";
   document.body.appendChild(weight3Text);

   weight4Text=document.createElement('h5');
   weight4Text.style="position:fixed;right:370px;bottom:243px;color: white;";
   weight4Text.innerHTML="4";
   document.body.appendChild(weight4Text);

   weight5Text=document.createElement('h5');
   weight5Text.style="position:fixed;right:422px;bottom:247px;color: white;";
   weight5Text.innerHTML="5";
   document.body.appendChild(weight5Text);

   weight6Text=document.createElement('h5');
   weight6Text.style="position:fixed;right:459px;bottom:250px;color: white;";
   weight6Text.innerHTML="6";
   document.body.appendChild(weight6Text);




     geometry5 = new THREE.Geometry();
  geometry5.vertices.push(
    new THREE.Vector3(  -2.54,0.51,0),
    new THREE.Vector3( -2.54,-0.75,0 )
    );
     String5 = new THREE.Line( geometry5, material );//left pulley to hook
     String5.castShadow=false;
     PIEaddElement(String5);



     material = new THREE.LineBasicMaterial({
    color: 0x30AF19
});

     geometry6 = new THREE.Geometry();
  geometry6.vertices.push(
     new THREE.Vector3(  - 2.54,-0.75,0),
    new THREE.Vector3( -3.05, -1.05, 0 )
    );
     String6 = new THREE.Line( geometry6, material );//left hook to weight1
     String6.castShadow=false;
     PIEaddElement(String6);

     material = new THREE.LineBasicMaterial({
    color: 0x0000ff
});

   geometry7 = new THREE.Geometry();
  geometry7.vertices.push(
    new THREE.Vector3(  2.54,0.51,0),
    new THREE.Vector3( 2.54,-0.75,0 )
    );
     String7 = new THREE.Line( geometry7, material );//right pulley to hook
     String7.castShadow=false;
     PIEaddElement(String7);


      material = new THREE.LineBasicMaterial({
    color: 0x30AF19
});                                                                                                                                                                                                                                                                                                                                                                                                                                                    
       geometry8 = new THREE.Geometry();
  geometry8.vertices.push(
    new THREE.Vector3(  2.54,-0.75,0),
    new THREE.Vector3( 3.05, -1.05, 0 )
    );
     String8 = new THREE.Line( geometry8, material );//hook to weight4
     String8.castShadow=false;
     PIEaddElement(String8);

     geometry8a = new THREE.Geometry();
  geometry8a.vertices.push(
    new THREE.Vector3(  2.54,-0.75,0),
    new THREE.Vector3( 2.64, -1.00, 0 )
    );
     String8a = new THREE.Line( geometry8a, material );//weight5 to hook
     String8a.castShadow=false;
     PIEaddElement(String8a);

     geometry9 = new THREE.Geometry();
  geometry9.vertices.push(
    new THREE.Vector3(  -2.54,-0.75,0),
    new THREE.Vector3( -2.64, -1.00, 0 )
    );
     String9 = new THREE.Line( geometry9, material );//weight2 to hook
     String9.castShadow=false;
     PIEaddElement(String9);



      geometry10 = new THREE.Geometry();
  geometry10.vertices.push(
    new THREE.Vector3(  -2.55,-0.75,0),
    new THREE.Vector3( -2.15, -0.95, 0 )
    );
     String10 = new THREE.Line( geometry10, material );//hook to weight3
     String10.castShadow=false;
     PIEaddElement(String10);

     geometry11 = new THREE.Geometry();
  geometry11.vertices.push(
    new THREE.Vector3(  2.55,-0.75,0),
    new THREE.Vector3( 2.15, -0.95, 0 )
    );
     String11 = new THREE.Line( geometry11, material );//hook to weight6
     String11.castShadow=false;
     PIEaddElement(String11);


     geometry1.verticesNeedUpdate = true;
     geometry2.verticesNeedUpdate = true;
     geometry3.verticesNeedUpdate = true;
     geometry4.verticesNeedUpdate = true;
     geometry5.verticesNeedUpdate = true;
     geometry6.verticesNeedUpdate = true;
     geometry7.verticesNeedUpdate = true;
     geometry8.verticesNeedUpdate = true;
     geometry8a.verticesNeedUpdate = true;
     geometry9.verticesNeedUpdate = true;
     geometry10.verticesNeedUpdate = true;
     geometry11.verticesNeedUpdate = true;






    






    /* Instantiate experiment controls */
    initialiseControls();

    /* Reset all positions */
    resetExperiment();

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}
var un;
function startTime(un) {
   
   
   var  s = Math.floor(un);
   
  
   var ms=un-s;
   ms=(ms*1000);
   ms=ms.toString();//to remove leading 0's
   ms=ms.replace(/^[0]+/g,"");
   ms=parseInt(ms);


    

    input.innerHTML = s+":"+ms;
    
   
}


function toScreenPosition(obj, camera) //thanks meeim@stackoverflow!
{
    var vector = new THREE.Vector3();

    var widthHalf = 0.5*PIErenderer.context.canvas.width;
    var heightHalf = 0.5*PIErenderer.context.canvas.height;

    obj.updateMatrixWorld();
    vector.setFromMatrixPosition(obj.matrixWorld);
    vector.project(camera);

    vector.x = ( vector.x * widthHalf ) + widthHalf;
    vector.y = - ( vector.y * heightHalf ) + heightHalf;

    return { 
        x: vector.x,
        y: vector.y
    };

};
var direction;
function note()
{
    if(rowcounter<8)//8 rows for responsivness
    {
        rowcounter++;
           var row = table.insertRow(rowcounter);
           
           row.style.backgroundColor=" #F1C40F ";



      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
       var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
       
       var right=weight4mass+weight5mass+weight6mass; 
       var left=weight1mass+weight2mass+weight3mass;
       var difference=right-left;      
       

       if(right<left)
        direction="right to left";
       else if(right>left)
        direction="left to right";
       else
         direction="stationary";

     cell1.innerHTML = right;  
     cell2.innerHTML = left;
     cell3.innerHTML = difference;  
     cell4.innerHTML = direction;

     cell5.innerHTML = time;      

      

    }






}


function toggle()
{


  if(table.style.display=="none")
    table.style.display="block";
  else
    table.style.display="none";


}


function resetExperiment()
{
    
    initialiseOtherVariables();
    

   
    myBox.position.set(myBoxX, myBoxY, myBoxZ);

     geometry5.vertices[ 0 ].y = 0.51;
    geometry5.vertices[ 1 ].y = -0.75;
    geometry5.verticesNeedUpdate = true;

     geometry6.vertices[ 0 ].y = -0.75;
    geometry6.vertices[ 1 ].y = -1.05;
    geometry6.verticesNeedUpdate = true;

     geometry9.vertices[ 0 ].y = -0.75;
    geometry9.vertices[ 1 ].y = -1.00;
    geometry9.verticesNeedUpdate = true;

     geometry10.vertices[ 0 ].y = -0.75;
    geometry10.vertices[ 1 ].y = -0.95;
    geometry10.verticesNeedUpdate = true;

     
  
     Hook1.position.set(-2.54,-0.75,0);
     weight1.position.set(-3.04, -1.10, 0);
     weight2.position.set(-2.64, -1.10, 0);
     weight3.position.set(-2.14, -1.10, 0);


     geometry7.vertices[ 0 ].y = 0.51;
    geometry7.vertices[ 1 ].y = -0.75;
    geometry7.verticesNeedUpdate = true;

     geometry8.vertices[ 0 ].y = -0.75;
    geometry8.vertices[ 1 ].y = -1.05;
    geometry8.verticesNeedUpdate = true;

     geometry8a.vertices[ 0 ].y = -0.75;
    geometry8a.vertices[ 1 ].y = -1.00;
    geometry8a.verticesNeedUpdate = true;

     geometry11.vertices[ 0 ].y = -0.75;
    geometry11.vertices[ 1 ].y = -0.95;
    geometry11.verticesNeedUpdate = true;

     
  
     Hook2.position.set(2.54,-0.75,0);
     weight4.position.set(3.04, -1.10, 0);
     weight5.position.set(2.64, -1.10, 0);
     weight6.position.set(2.14, -1.10, 0);

     
     PIEstartButton.disabled=false;
     input.innerHTML="0:00";
     motionDirection="stationary";
     direction="stationary";
     time=0;

     weight1Text.style.display="inline";
     weight2Text.style.display="inline";
     weight3Text.style.display="inline";
     weight4Text.style.display="inline";
     weight5Text.style.display="inline";
    weight6Text.style.display="inline";

    weight1mass=15;
    weight2mass=15;
    weight3mass=15;
    weight4mass=15;
    weight5mass=15;
    weight6mass=15;





   
}

var time=0;

function updateExperimentElements(t, dt)
{
var newX=0;           /* new X position of box */
var newX1=0;
var boundaryT=0;      
 
var boundaryX=0;
var boundaryY=0.51;

weight1Text.style.display="none";
weight2Text.style.display="none";
weight3Text.style.display="none";
weight4Text.style.display="none";
weight5Text.style.display="none";
weight6Text.style.display="none";



        

    
    myBoxX = parseFloat(myBox.position.x);
   var flag=0;
    
    
    
    boundaryT = dt / 1000.0; 
    //initialize boundary position in x direction
    if(weightdifference<0)
       { boundaryX=-2.60;      
         motionDirection="right to left";
         flag=1;
       }
    else if(weightdifference==0)
        boundaryX=0;
    else
    {
        boundaryX=2.60;
        flag=2;
        motionDirection="left to right";
    }




    //taking accelration due to gravity to be 9.8

    //compute accelration of Box
     myBoxAccelration=parseFloat((weightdifference*1000*9.8)/myBoxMass);//net force by net mass,taking 1 weight unit as 1 tonne
     //Mass of block intentionally kept less to fasten animation time
        


     /* Compute new myBox position and check for boundary event */
    newX = myBoxX +  0.5 * myBoxAccelration* boundaryT * boundaryT;//initial velocity of box is 0
    


    if (newX >= 1.0|| newX <=-1.0) 
    {   /* X boundary violated */
	if (newX >= 1.0)
        {   /* Box hits right */
            
            myBox.position.set(1.0,myBoxY,myBoxZ);
            myBoxAccelration=0;
            motionDirection="stationary";

            
   
            time=t/1000+boundaryT;//note time in secs
            
            
            
             PIEstartButton.disabled=true;
            
          PIEstopAnimation();

            
        }
	if (newX <= -1.0)
        {   /* Box hits left*/
            myBox.position.set(-1.0,myBoxY,myBoxZ);
            myBoxAccelration=0;
             motionDirection="stationary";
            
            time=t/1000+boundaryT;
             PIEstartButton.disabled=true;
            
            
            
          PIEstopAnimation();
          
           
        }
	
    }
     //strings changes
    if(flag==1)
    {
         

    geometry5.vertices[ 0 ].y = 0.51;
    geometry5.vertices[ 1 ].y = -0.75+newX;
    geometry5.verticesNeedUpdate = true;

     geometry6.vertices[ 0 ].y = -0.75+newX;
    geometry6.vertices[ 1 ].y = -1.05+newX;
    geometry6.verticesNeedUpdate = true;

     geometry9.vertices[ 0 ].y = -0.75+newX;
    geometry9.vertices[ 1 ].y = -1.00+newX;
    geometry9.verticesNeedUpdate = true;

     geometry10.vertices[ 0 ].y = -0.75+newX;
    geometry10.vertices[ 1 ].y = -0.95+newX;
    geometry10.verticesNeedUpdate = true;

     
  
     Hook1.position.set(-2.54,-0.75+newX,0);
     weight1.position.set(-3.04, -1.10+newX, 0);
     weight2.position.set(-2.64, -1.10+newX, 0);
     weight3.position.set(-2.14, -1.10+newX, 0);


     geometry7.vertices[ 0 ].y = 0.51;
    geometry7.vertices[ 1 ].y = -0.75-newX;
    geometry7.verticesNeedUpdate = true;

     geometry8.vertices[ 0 ].y = -0.75-newX;
    geometry8.vertices[ 1 ].y = -1.05-newX;
    geometry8.verticesNeedUpdate = true;

     geometry8a.vertices[ 0 ].y = -0.75-newX;
    geometry8a.vertices[ 1 ].y = -1.00-newX;
    geometry8a.verticesNeedUpdate = true;

     geometry11.vertices[ 0 ].y = -0.75-newX;
    geometry11.vertices[ 1 ].y = -0.95-newX;
    geometry11.verticesNeedUpdate = true;

     
  
     Hook2.position.set(2.54,-0.75-newX,0);
     weight4.position.set(3.04, -1.10-newX, 0);
     weight5.position.set(2.64, -1.10-newX, 0);
     weight6.position.set(2.14, -1.10-newX, 0);

     var curr=(t+dt)/1000;



    startTime(curr);







        
    }  

    else if(flag==2)
    {

    geometry7.vertices[ 0 ].y = 0.51;
    geometry7.vertices[ 1 ].y = -0.75-newX;
    geometry7.verticesNeedUpdate = true;

     geometry8.vertices[ 0 ].y = -0.75-newX;
    geometry8.vertices[ 1 ].y = -1.05-newX;
    geometry8.verticesNeedUpdate = true;

     geometry8a.vertices[ 0 ].y = -0.75-newX;
    geometry8a.vertices[ 1 ].y = -1.00-newX;
    geometry8a.verticesNeedUpdate = true;

     geometry11.vertices[ 0 ].y = -0.75-newX;
    geometry11.vertices[ 1 ].y = -0.95-newX;
    geometry11.verticesNeedUpdate = true;

     
  
     Hook2.position.set(2.54,-0.75-newX,0);
     weight4.position.set(3.04, -1.10-newX, 0);
     weight5.position.set(2.64, -1.10-newX, 0);
     weight6.position.set(2.14, -1.10-newX, 0);


      geometry5.vertices[ 0 ].y = 0.51;
    geometry5.vertices[ 1 ].y = -0.75+newX;
    geometry5.verticesNeedUpdate = true;

     geometry6.vertices[ 0 ].y = -0.75+newX;
    geometry6.vertices[ 1 ].y = -1.05+newX;
    geometry6.verticesNeedUpdate = true;

     geometry9.vertices[ 0 ].y = -0.75+newX;
    geometry9.vertices[ 1 ].y = -1.00+newX;
    geometry9.verticesNeedUpdate = true;

     geometry10.vertices[ 0 ].y = -0.75+newX;
    geometry10.vertices[ 1 ].y = -0.95+newX;
    geometry10.verticesNeedUpdate = true;

     
  
     Hook1.position.set(-2.54,-0.75+newX,0);
     weight1.position.set(-3.04, -1.10+newX, 0);
     weight2.position.set(-2.64, -1.10+newX, 0);
     weight3.position.set(-2.14, -1.10+newX, 0);
     var curr=(t+dt)/1000;



    startTime(curr);

       



    }
    


    myBox.position.set(newX, myBoxY, myBoxZ);
     

    /* Adjust Simulation time in case boundary event has occured */
    

    /* Finally Update the Display Panel with new values */
    PIEchangeDisplayText(weight1control,weight1mass);
    PIEchangeDisplayText(weight2control,weight2mass);
    PIEchangeDisplayText(weight3control,weight3mass);
    PIEchangeDisplayText(weight4control,weight4mass);
    PIEchangeDisplayText(weight5control,weight5mass);
    PIEchangeDisplayText(weight6control,weight6mass);
    
   
}
var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Multiple forces – direction and result </h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows a stationary Box constrained strings on left and right.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to six sliders.</p>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>weight1&nbsp;&nbsp;:&nbsp;Controls the mass(in tonnes) of weight1(leftmost weight).</li>";
    helpContent = helpContent + "<li>weight2&nbsp;&nbsp;:&nbsp;Controls the mass(in tonnes) of weight2( 2nd from left )</li>";
    helpContent = helpContent + "<li>weight3&nbsp;:&nbsp;Controls the mass(in tonnes) of weight3( 3rd from left ).</li>";
    helpContent = helpContent + "<li>weight4&nbsp;:&nbsp;Controls the mass(in tonnes) of weight4( third from right )</li>";
    helpContent = helpContent + "<li>weight5&nbsp;:&nbsp;Controls the mass(in tonnes) of weight5( second from right ).</li>";
    helpContent = helpContent + "<li>weight6&nbsp;:&nbsp;Controls the mass(in tonnes) of weight6( first from right ).</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>In addition you will also see a digital clock which shows the time during the which the block moves.</p>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the ball will bounce around obeyng the laws of physics.</p>";
    helpContent = helpContent + "<p>The right hand panel now shows the values of the six experiment variables during animation.</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>weight1&nbsp;&nbsp;:&nbsp;shows the  mass(in tonnes) of weight1(leftmost weight) during aninmation.</li>";
    helpContent = helpContent + "<li>weight2&nbsp;&nbsp;:&nbsp;shows the mass(in tonnes) of weight2( 2nd from left ) during animation.</li>";
    helpContent = helpContent + "<li>weight3&nbsp;:&nbsp;shows the mass(in tonnes) of weight3( 3rd from left ) during animation.</li>";
    helpContent = helpContent + "<li>weight4&nbsp;:&nbsp;shows the mass(in tonnes) of weight4( third from right ) during animation</li>";
    helpContent = helpContent + "<li>weight5&nbsp;:&nbsp;shows the mass(in tonnes) of weight5( second from right ) during animation.</li>";
    helpContent = helpContent + "<li>weight6&nbsp;:&nbsp;shows the  mass(in tonnes) of weight6( first from right ) during animation.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>In addition you will also see two sliders showing potential and kinetic energy.</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animaion by uing the speed control buttons</p>";
    helpContent = helpContent + "<p>You can reset the animation by pressing the reset button</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Multiple forces – direction and result concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows a stationary Box constrained by strings on left and right.</p>";
    infoContent = infoContent + "<h3>Tension</h3>";
    infoContent = infoContent + "<p>The box only moves when the net force in x-direction is greater than zero.</p>";
    infoContent = infoContent + "<p>Here the Net force is determined by the tension in the strings on left and right side of box.If the Tension in   the left String is more,than the box will move leftward and if the tension in right string is more,it will more rightwards.</p>";
    infoContent = infoContent + "<p>The harder balls are also deformed. But because of the hard nature of the meterial, the hard ball tries to regain it's shape. This attempt to reain the shape reverses the velocity by pushing aainst the wall.</p>";
    infoContent = infoContent + "<p>The tension in the left string   is due to  the sum of masses on the left side(pulley and weights) and the tension in the right string is due to the sum of masses on the right of the box(pulley and weights).</p>";
    infoContent = infoContent + "<p>The force is calculated by multiplying mass and accelration due to gravity(g)</p>";
    infoContent = infoContent + "<h3>The accelration of Box</h3>";
    infoContent = infoContent + "<p>As we know,accelration is net force by net mass ,the net force on the box is calculated as net force acting on it in x-direction divided by its mass</p>";
    infoContent = infoContent + "<p>After calculating the accelration,we can calculate the time taken by the block</p>";
    infoContent = infoContent + "<p>Some of the energy is lost because of the deformation of the ball. The energy loss means that the kinetic energy of the ball will be reduced after impact.</p>";
    infoContent = infoContent + "<p>The coefficient of restitution specifies how much of the velocity will be retained after impact.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}



