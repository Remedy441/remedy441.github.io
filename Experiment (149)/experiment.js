    /**
 * Created by saurabh on 24/2/17.
 */
 // Declaring all the variables here
var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */

var g=10;
var initial_height=50;
var flag=0;


var  newboxleft_y;
var  newboxright_y;
var  newcapleft_y;
var  newcapright_y;
var  newleftin_y = -(initial_height/2);
var  newrightin_y = -(initial_height/2);


var factor =1;
var h=0;
var bottomgeo;
var bottomMaterial;
var bottom;

var leftgeo;
var leftMaterial;
var left;
var leftgeoin;
var leftMaterialin;
var leftin;
var boxmaterial;

var rightgeo;
var rightMaterial;
var right;
var rightgeoin;
var rightMaterialin;
var rightin;

var leftgeocap;
var leftMaterialcap;
var leftcap;
var rightgeocap;
var rightMaterialcap;
var rightcap;



var leftradius = 20;
var rightradius = 20;


var boxleft;
var boxright;
var wt_boxleft=20;
var wt_boxright=20;
var box_dim_left=20;
var box_dim_right=20;

var pressure_left;
var pressure_right;

 // coordinates
var boxleft_y = 0;
var boxright_y = 0;
var capleft_y = 2.5;
var capright_y = 2.5;
var rightin_y;
var leftin_y;

var geometry;
var material;
var loader;
var texture;
var plane ;

var new_left_height ;
var new_right_height;
var count = 0;
var travelleft;
var travelright;

var updatedheight=50;
var updatedheightr=50;

 var initial_height_l = updatedheight;
        var initial_height_r = updatedheightr;

        var left_height = 50;
        var right_height = 50;


       var  dirleft ;
       var  originleft;
       var  arrowHelperleft ;
       var  dirright ;
       var  originright ;
       var  arrowHelperright ;

var flagallfour=0;

function handleLeftRadius(newValue)
{
    if(flagallfour==0)
    {flagallfour=1;   resetExperiment();}
    //resetExperiment();
    PIEchangeDisplaySlider("Left Radius", newValue);
    PIEchangeInputSlider("Left Radius", newValue);
    leftradius =  newValue;
    PIEscene.remove(leftin);

    leftgeoin = new THREE.CylinderGeometry(leftradius,leftradius, updatedheight, 50, 1);
    leftMaterialin = new THREE.MeshLambertMaterial({color: 0x0066cc, opacity: 3});
    leftin = new THREE.Mesh(leftgeoin, leftMaterialin);
    leftin.position.set(-50, newleftin_y, 0);
    PIEaddElement(leftin);

    left.scale.x = 1 + (leftradius-20)/19.5;
     // PIErender();
    // leftin.scale.x = 1 + (leftradius-20)/20;
    //  PIErender();
    leftcap.scale.x = 1 + (leftradius-20)/19.5;
     // PIEscene.remove(arrowHelperleft);
     //    PIEscene.remove(arrowHelperright);
     PIErender();
    if (PIEanimationON == false)
    {
        // initial_height_l = updatedheight;
        // initial_height_r = updatedheightr;
        // flagstop=0;
        // initial_height_l = 50;
        // initial_height_r = 50;
    }
}

function handleRightRadius(newValue)
{

    if(flagallfour==0)
    {flagallfour=1;   resetExperiment();}
    PIEchangeDisplaySlider("Right Radius", newValue);
    PIEchangeInputSlider("Right Radius", newValue);
    rightradius =  newValue;
    PIEscene.remove(rightin);

    rightgeoin = new THREE.CylinderGeometry(rightradius, rightradius, updatedheightr, 50, 1);
    rightMaterialin = new THREE.MeshLambertMaterial({color: 0x0066cc, opacity: 3});
    rightin = new THREE.Mesh(rightgeoin, rightMaterialin);
    rightin.position.set(50, newrightin_y, 0);
    PIEaddElement(rightin);

    right.scale.x = 1 + (rightradius-20)/19.5;
    rightcap.scale.x = 1 + (rightradius-20)/19.5;
     PIErender();

     if(PIEanimationON == false)
    {
       // initial_height_l = updatedheight;
       //  initial_height_r = updatedheightr;
       //  flagstop=0;
        // PIEscene.remove(arrowHelperleft);
        // PIEscene.remove(arrowHelperright);
        // initial_height_l = 50;
        // initial_height_r = 50;
    }

}

var flagstop=0;
function handleLeftWeight(newValue)
{
    if(flagallfour==0){ flagallfour=1; resetExperiment();}
    PIEchangeDisplaySlider("Left weight", newValue);
    PIEchangeInputSlider("Left weight", newValue);
    boxleft_y = boxleft_y - 5 - (box_dim_left/2);

     wt_boxleft  = newValue;
    box_dim_left = newValue;
boxleft.scale.x = 1+ (box_dim_left-20)/20;
boxleft.scale.y = 1+ (box_dim_left-20)/20;

     boxleft_y = boxleft_y + 5 + (box_dim_left/2);
    boxleft.position.set(-50,boxleft_y,0);
       PIErender();


     if (PIEanimationON == false) //no need to write this coz its alwaz off for this function
    {
        // initial_height_l = updatedheight;
        // initial_height_r = updatedheightr;
        // flagstop=0;
        // PIEscene.remove(arrowHelperleft);
        // PIEscene.remove(arrowHelperright);
        // initial_height_l = 50;
        // initial_height_r = 50;
    }

}

function handleRightWeight(newValue)
{

   if(flagallfour==0)
   {    flagallfour=1;   resetExperiment();}
    PIEchangeDisplaySlider("Right weight", newValue);
    PIEchangeInputSlider("Right weight", newValue);
    boxright_y = boxright_y - 5 - (box_dim_right/2);

    wt_boxright  = newValue;
    box_dim_right = newValue;
    boxright.scale.x = (box_dim_right)/20;
    boxright.scale.y = (box_dim_right)/20;

    boxright_y = boxright_y + 5 + (box_dim_right/2);
    boxright.position.set(50,boxright_y,0);
       PIErender();
     if (PIEanimationON == false)
    {
        // initial_height_l = updatedheight;
        // initial_height_r = updatedheightr;
        // flagstop=0;
        // PIEscene.remove(arrowHelperleft);
        // PIEscene.remove(arrowHelperright);
        // initial_height_l = 50;
        // initial_height_r = 50;
    }
}


function initialiseControls()
{
   // initialiseControlVariables();
    /* Create Input Panel */
    PIEaddInputSlider("Left Radius",20, handleLeftRadius, 20, 30, 1);
    PIEaddInputSlider("Right Radius",20, handleRightRadius,20,30, 1);
    PIEaddInputSlider("Left weight",20, handleLeftWeight,20,30,1);
    PIEaddInputSlider("Right weight",20, handleRightWeight,20,30,1);

    /* Create Display Panel */
    PIEaddDisplayText("Left Radius", 20);
    PIEaddDisplayText("Right Radius", 20) ;
    PIEaddDisplayText("Left weight", 20);
    PIEaddDisplayText("Right weight",20);
    PIEaddDisplayText("Pressure at left", 0);
    PIEaddDisplayText("Pressure at right", 0);
    PIEaddDisplayText("Left Height",50);
    PIEaddDisplayText("Right Height",50);

        // PIEscene.remove(arrowHelperleft);
        // PIEscene.remove(arrowHelperright);

}
/******************* End of GUI control objects code ***********************/

/******************* Load Experiment objects code ***********************/


var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Hydraulic Press help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows a hydraulic press balancing two weights.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to four sliders.</p>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Left Radius&nbsp;&nbsp;:&nbsp;Controls the radius of the left cylinder of the hydraulic press.</li>";
    helpContent = helpContent + "<li>Right Radius&nbsp;&nbsp;:&nbsp;Controls the radius of the right cylinder of the hydraulic press.</li>";
    helpContent = helpContent + "<li>Left Weight&nbsp;:&nbsp;Controls the weight of the object on the left cylinder of the hydraulic press.</li>";
    helpContent = helpContent + "<li>Right Weight&nbsp;:&nbsp;Controls the weight of the object on the right cylinder of the hydraulic press.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, according to the laws of physics,as the liquids work with equal pressure,the pressure on both the sides of the hydraulic press " +
        "tries to get equal up by adjusting heights of water column on both the sides. </p>";
    helpContent = helpContent + "<p>The right hand panel now shows the values of the six experiment variables during animation.</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Left Radius&nbsp;&nbsp;:&nbsp;Shows the radius of the left cylinder of the hydraulic press.</li>";
    helpContent = helpContent + "<li>Right Radius&nbsp;&nbsp;:&nbsp;Shows the radius of the right cylinder of the hydraulic press.</li>";
    helpContent = helpContent + "<li>Left Weight&nbsp;:&nbsp;Shows the weight of the object on the left cylinder of the hydraulic press.</li>";
    helpContent = helpContent + "<li>Right Weight&nbsp;:&nbsp;Shows the weight of the object on the right cylinder of the hydraulic press.</li>";
    helpContent = helpContent + "<li>Pressure at Left&nbsp;&nbsp;:&nbsp;Shows the pressure at the bottom of the left cylinder of the hydraulic press initially before start of animation i.e before water started moving.</li>";
    helpContent = helpContent + "<li>Pressure at Right&nbsp;&nbsp;:&nbsp;Shows the pressure at the bottom of the right cylinder of the hydraulic press initially before start of animation i.e before water started moving.</li>";
    helpContent = helpContent + "<li>Left Height&nbsp;&nbsp;:&nbsp;Shows the height of the water in the left cylinder at any instant.</li>";
    helpContent = helpContent + "<li>Right Height&nbsp;&nbsp;:&nbsp;Shows the height of the water in the right cylinder at any instant.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play button on the top line</p>";
    helpContent = helpContent + "<h5>The black arrows on both the sides of hydraulic press shows the position at which the forces gets balanced.</h5>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);

}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Hydraulic Press experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows a hydraulic press balancing two weights.</p>";
    infoContent = infoContent + "<h3> Pascal’s law for transmission of fluid pressure :</h3>";
    infoContent = infoContent + "<p>Whenever external pressure is applied on any part of a fluid contained in a vessel, it is transmitted undiminished and equally in all directions.</p>";
    infoContent = infoContent + "<h3>The concept behind hydraulic press:</h3>";
    infoContent = infoContent + "<p>The device hydraulic press is based on the Pascal’s law. " +
        " In this device, fluids are used for transmitting pressure. In a hydraulic lift  two pistons are separated by the space " +
        "filled with a liquid. A piston of small cross section A1 is used to exert a force F1 directly on the liquid. " +
        "The pressure P = (F1/A1) is transmitted throughout the liquid to the larger cylinder attached with a larger piston of " +
        "area A2, which results in an upward force of P × A2." +
        "Therefore, the piston is capable of supporting a large force (large weight of, say a car, or a truck,placed on the platform)" +
        " F2 = P * A2 = (F1/A1) * A2 . By changing the force at A1, the platform can be moved up or down. " +
        "Thus, the applied force has been increased by a factor of (A2 / A1) and this factor is the mechanical advantage of the device.</p>"
     infoContent = infoContent + "<h3>Observations</h3>";
    infoContent = infoContent + "<p>Most important observation and use of this hydraulic press is heavy objects can be balanced using lighter objects.For this to happen heavier objects should be " +
        "placed on piston with more area and lighter object should be placed on piston with lesser area.This is because, as explained earlier, liquids work with equal pressures so by doing this the ratio " +
        "pressure = (Force/Area) = (Weight of object/Area) remains same. </p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene()
{
    /* Initialise Scene Variables */
    mySceneTLX = -100;//0.0;
    mySceneTLY = 100;//3.0;
    mySceneBRX = 100;//4.0;
    mySceneBRY = -100;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;

}
var clock;
function loadExperimentElements()
{

    PIEsetExperimentTitle("Hydraulic Press");
    PIEsetDeveloperName("Saurabh Rathi");

    initialiseHelp();
    initialiseInfo();
    initialiseScene();
      myBallRadius = mySceneW/30.0;
    wallThickness = 0.20;

    leftin_y =  -(50-(initial_height/2));
    rightin_y = -(50-(initial_height/2));

     /* Barriers */
    leftB=mySceneTLX;
    rightB=mySceneBRX;
    bottomB=mySceneBRY;
    topB=mySceneTLY;
    var backB=-40.0;

    /* initialise Scene */

    // geometry1=new THREE.BoxGeometry(mySceneW *2,mySceneH *2,0);
        loader=new THREE.TextureLoader();
        texture=loader.load('background.jpg');
       material=new THREE.MeshBasicMaterial({map:texture});
       // myback1=new THREE.Mesh(geometry1,material1);
       // myback1.position.set(0,0,-2);
       // myback1.receiveShadow=true;
       // PIEaddElement(myback1);
       //material=new THREE.MeshBasicMaterial( { color: 0xffffff} ); //mesh lambert material  // just by using meshbasicmaterial i could avoid shadows on the background
       geometry=new THREE.PlaneGeometry( mySceneW * 2, mySceneH * 2 );
       var myback=new THREE.Mesh(geometry,material);
       myback.position.set(0,0,backB - (wallThickness / 2));
       myback.receiveShadow=false;
       PIEaddElement(myback);
	/* Floor */
	 geometry = new THREE.BoxGeometry( mySceneW * 2, wallThickness, 100);
   material = new THREE.MeshLambertMaterial( {color: 0xaaaaaa} );
    myFloor  = new THREE.Mesh( geometry, material );
    // myFloor.lookAt(new THREE.Vector3(0,1,0));
    myFloor.position.set(myCenterX, (bottomB/2)-0.5, 0.0);
    myFloor.receiveShadow = true;
    PIEaddElement(myFloor);
    /* Ceiling */
    geometry = new THREE.BoxGeometry( mySceneW * 2, wallThickness, 100 );
    material = new THREE.MeshLambertMaterial( {color: 0xffffff} );
    myCeiling = new THREE.Mesh( geometry, material );
    myCeiling.position.set(myCenterX, topB-10, 0.0);
    myFloor.receiveShadow = true;
    PIEaddElement(myCeiling);
    /* Left */
    geometry = new THREE.BoxGeometry( wallThickness, mySceneH * 2, 100 );
    material = new THREE.MeshLambertMaterial( {color: 0xaa0000} );
    myLeft = new THREE.Mesh( geometry, material );
    myLeft.position.set(leftB*2, myCenterY, 0.0);
    myLeft.receiveShadow = true;
    PIEaddElement(myLeft);
    /* Right */
    geometry = new THREE.BoxGeometry( wallThickness, mySceneH * 2, 100 );
    material = new THREE.MeshLambertMaterial( {color: 0xaa0000} );
    myRight = new THREE.Mesh( geometry, material );
    myRight.position.set(2*rightB, myCenterY, 0.0);
    myRight.receiveShadow = true;
    PIEaddElement(myRight);


    bottomgeo=new THREE.CylinderGeometry(10,10,100,50,1,true);
    bottomMaterial=new THREE.MeshLambertMaterial({color:0xffffff,transparent:true,opacity:0.3}); //,transparent:true,opacity:0.40}
    bottom=new THREE.Mesh(bottomgeo,bottomMaterial);
    bottom.position.set(0,-41,0);
    bottom.rotateZ(Math.PI/2);
    PIEaddElement(bottom);

    bottomgeoin=new THREE.CylinderGeometry(10,10,100,50,1,true);
    bottomMaterialin=new THREE.MeshLambertMaterial({color:0x0066cc,opacity: 3}); //,transparent:true,opacity:0.40}
    bottomin=new THREE.Mesh(bottomgeoin,bottomMaterialin);
    bottomin.position.set(0,-41,0);
    bottomin.rotateZ(Math.PI/2);
    PIEaddElement(bottomin);



    leftgeo=new THREE.CylinderGeometry(leftradius,leftradius,100,50,1,true);
    leftgeo.castShadow=false;
    leftgeo.receiveShadow=false;
    leftMaterial=new THREE.MeshLambertMaterial({color:0xffffff,transparent:true,opacity:0.3});
    leftMaterial.castShadow=false;
    leftMaterial.receiveShadow=false;
    left=new THREE.Mesh(leftgeo,leftMaterial);
    left.position.set(-50,0,0);
    left.castShadow=false;
    PIEaddElement(left);

    rightgeo=new THREE.CylinderBufferGeometry(rightradius,rightradius,100,50,1,true);
    rightMaterial=new THREE.MeshStandardMaterial({color:0xffffff,transparent:true,opacity:0.3});
    right=new THREE.Mesh(rightgeo,rightMaterial);
    right.position.set(50,0,0);
    PIEaddElement(right);

    leftgeoin=new THREE.CylinderGeometry(leftradius,leftradius,initial_height,50,1); //updatedheight
    leftMaterialin=new THREE.MeshLambertMaterial({color:0x0066cc,opacity: 3});   //0x0066cc
    leftin=new THREE.Mesh(leftgeoin,leftMaterialin);
    leftin.position.set(-50,leftin_y,0);
    PIEaddElement(leftin);

    rightgeoin=new THREE.CylinderGeometry(rightradius,rightradius,initial_height,50,1);
    rightMaterialin=new THREE.MeshLambertMaterial({color:0x0066cc,opacity: 3});
    rightin=new THREE.Mesh(rightgeoin,rightMaterialin);
    rightin.position.set(50,rightin_y,0);
    PIEaddElement(rightin);

    leftgeocap=new THREE.CylinderGeometry(leftradius,leftradius,5,50,1);
    leftMaterialcap=new THREE.MeshLambertMaterial({color:0x990000});
    leftcap=new THREE.Mesh(leftgeocap,leftMaterialcap);
    leftcap.position.set(-50,capleft_y,0);
    PIEaddElement(leftcap);

     rightgeocap=new THREE.CylinderGeometry(rightradius,rightradius,5,50,1);
    rightMaterialcap=new THREE.MeshLambertMaterial({color:0x1a000d});
    rightcap=new THREE.Mesh(rightgeocap,rightMaterialcap);
    rightcap.position.set(50,capright_y,0);
    PIEaddElement(rightcap);

    var  bgeometry=new THREE.BoxGeometry(box_dim_left,box_dim_left,0);
        loader=new THREE.TextureLoader();
        texture=loader.load('b3.jpg');
    boxmaterial = new THREE.MeshLambertMaterial( { color: 0xcc4400,map: texture,opacity:10 } );
    boxleft=new THREE.Mesh(bgeometry,boxmaterial);
     boxleft_y = 5 + (box_dim_left/2);
    boxleft.position.set(-50,boxleft_y,0);
       boxleft.receiveShadow=false;
       boxleft.castShadow=false;
       PIEaddElement(boxleft);

    var  bgeometryright = new THREE.BoxGeometry(box_dim_right,box_dim_right,0);
        // loader=new THREE.TextureLoader();
        // texture=loader.load('b3.jpg');
      //  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
   // texture.anisotropy = 16;
   // var mymaterialright = new THREE.MeshLambertMaterial( { color: 0xcc4400,map: texture,opacity:10} );  // ,map: texture
    boxright = new THREE.Mesh(bgeometryright,boxmaterial);
    boxright_y = 5 + (box_dim_right/2);
    boxright.position.set(50,boxright_y,0);
       boxright.receiveShadow=false;
       boxright.castShadow=false;
       PIEaddElement(boxright);



       dirleft = new THREE.Vector3(1, 0, 0); //pt1y+(focal_length
           dirleft.normalize();
       originleft = new THREE.Vector3((-50 - leftradius - 30), capleft_y, 0);
       arrowHelperleft = new THREE.ArrowHelper(dirleft, originleft, 20, 0x000000, 3,2);
            PIEaddElement(arrowHelperleft);

       dirright = new THREE.Vector3(-1, 0, 0); //pt1y+(focal_length
            dirright.normalize();
       originright = new THREE.Vector3((50 + rightradius + 30), capright_y, 0);
       arrowHelperright = new THREE.ArrowHelper(dirright, originright, 20, 0x000000,3,2);
            PIEaddElement(arrowHelperright);

    initialiseControls();

    h=0;
    /* Reset all positions */
    PIEstartAnimation();

    resetExperiment();

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);

}



function resetExperiment()
{
     //initialiseControlVariables();
    leftradius=20;
    rightradius=20;
     capleft_y = 2.5;
     capright_y = 2.5;
     leftin_y = -25;
     newleftin_y= -25;
     newrightin_y= -25;
    rightin_y = -25;
    wt_boxleft = 20;
    box_dim_right = 20;
    wt_boxright =20;
    box_dim_left = 20;
    initial_height=50;
    initial_height_l=50;
    initial_height_r=50;
    updatedheightr =50;
    updatedheight = 50;
    left_height = 50;
    right_height = 50;
    PIEscene.remove(leftin);
    PIEscene.remove(rightin);
    PIEscene.remove(left);
    PIEscene.remove(right);
    PIEscene.remove(leftcap);
    PIEscene.remove(rightcap);
     PIEscene.remove(leftcap);
    PIEscene.remove(rightcap);
    PIEscene.remove(boxleft);
    PIEscene.remove(boxright);
    leftgeoin=new THREE.CylinderGeometry(leftradius,leftradius,initial_height,50,1);
    leftMaterialin=new THREE.MeshLambertMaterial({color:0x0066cc,opacity: 3});
    leftin=new THREE.Mesh(leftgeoin,leftMaterialin);
    leftin.position.set(-50,leftin_y,0);
    PIEaddElement(leftin);

    rightgeoin=new THREE.CylinderGeometry(rightradius,rightradius,initial_height,50,1);
    rightMaterialin=new THREE.MeshLambertMaterial({color:0x0066cc,opacity: 3});
    rightin=new THREE.Mesh(rightgeoin,rightMaterialin);
    rightin.position.set(50,rightin_y,0);
    PIEaddElement(rightin);

    leftgeo=new THREE.CylinderGeometry(leftradius,leftradius,100,50,1,true);
    leftgeo.castShadow=false;
    leftgeo.receiveShadow=false;
    leftMaterial=new THREE.MeshLambertMaterial({color:0xffffff,transparent:true,opacity:0.3});
    leftMaterial.castShadow=false;
    leftMaterial.receiveShadow=false;
    left=new THREE.Mesh(leftgeo,leftMaterial);
    left.position.set(-50,0,0);
    left.castShadow=false;
    PIEaddElement(left);

    rightgeo=new THREE.CylinderBufferGeometry(rightradius,rightradius,100,50,1,true);
    rightMaterial=new THREE.MeshStandardMaterial({color:0xffffff,transparent:true,opacity:0.3});
    right=new THREE.Mesh(rightgeo,rightMaterial);
    right.position.set(50,0,0);
    PIEaddElement(right);

     leftgeocap=new THREE.CylinderGeometry(leftradius,leftradius,5,50,1);
    leftMaterialcap=new THREE.MeshLambertMaterial({color:0x990000});
    leftcap=new THREE.Mesh(leftgeocap,leftMaterialcap);
    leftcap.position.set(-50,capleft_y,0);
    PIEaddElement(leftcap);

     rightgeocap=new THREE.CylinderGeometry(rightradius,rightradius,5,50,1);
    rightMaterialcap=new THREE.MeshLambertMaterial({color:0x1a000d});
    rightcap=new THREE.Mesh(rightgeocap,rightMaterialcap);
    rightcap.position.set(50,capright_y,0);
    PIEaddElement(rightcap);



     boxleft_y = 5 + (box_dim_left/2);
    boxleft.position.set(-50,boxleft_y,0);
  boxright_y = 5 + (box_dim_right/2);
    boxright.position.set(50,boxright_y,0);
    //
    updatedheight=50;
    updatedheightr=50;


    var  bgeometry=new THREE.BoxGeometry(box_dim_left,box_dim_left,0);
    //     loader=new THREE.TextureLoader();
    //     texture=loader.load('b3.jpg');
    //     texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    // texture.anisotropy = 16;
    // var mymaterial = new THREE.MeshLambertMaterial( { color: 0xcc4400,specular: 0x111111,map: texture,opacity:10 } );
    boxleft=new THREE.Mesh(bgeometry,boxmaterial);
     boxleft_y = 5 + (box_dim_left/2);
    boxleft.position.set(-50,boxleft_y,0);
       boxleft.receiveShadow=false;
       boxleft.castShadow=false;
       PIEaddElement(boxleft);

    var  bgeometryright=new THREE.BoxGeometry(box_dim_right,box_dim_right,0);
    //     loader=new THREE.TextureLoader();
    //     texture=loader.load('b3.jpg');
    //     texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    // texture.anisotropy = 16;
    // var mymaterialright = new THREE.MeshLambertMaterial( { color: 0xcc4400,specular: 0x111111,map: texture,opacity:10} );
    boxright=new THREE.Mesh(bgeometryright,boxmaterial);
    boxright_y = 5 + (box_dim_right/2);
    boxright.position.set(50,boxright_y,0);
       boxright.receiveShadow=false;
       boxright.castShadow=false;
       PIEaddElement(boxright);
                PIEscene.remove(arrowHelperleft);
                originleft = new THREE.Vector3((-50 - leftradius - 30), capleft_y, 0);
                arrowHelperleft = new THREE.ArrowHelper(dirleft, originleft, 20, 0x000000, 3,2);
                PIEaddElement(arrowHelperleft);

                PIEscene.remove(arrowHelperright);
                originright = new THREE.Vector3((50 + rightradius + 30), capright_y, 0);
                arrowHelperright = new THREE.ArrowHelper(dirright, originright, 20, 0x000000,3,2);
                PIEaddElement(arrowHelperright);

    PIEchangeDisplaySlider("Left Radius", 20);
    PIEchangeDisplaySlider("Right Radius", 20);
    PIEchangeDisplaySlider("Left weight", 20);
    PIEchangeDisplaySlider("Right weight", 20);


     PIEchangeInputSlider("Left Radius", 20);
    PIEchangeInputSlider("Right Radius", 20);
    PIEchangeInputSlider("Left weight", 20);
    PIEchangeInputSlider("Right weight", 20);

}



function updateExperimentElements(t, dt)
{
 leftradius = PIEgetInputSlider("Left Radius");
    rightradius = PIEgetInputSlider("Right Radius");
    wt_boxleft = PIEgetInputSlider("Left weight");
    wt_boxright = PIEgetInputSlider("Right weight");

    var   tt = dt/100;
    if(1) //(leftradius/rightradius)!=1 ||(wt_boxleft/wt_boxright)!=1   ///(      ///normal for all cases except first.
       {

        var arearight = Math.PI * rightradius * rightradius;
        pressure_right = (initial_height_r * g) + (wt_boxright * 1000.0 / arearight);

        var arealeft = Math.PI * leftradius * leftradius;
        pressure_left = (initial_height_l * g) + (wt_boxleft * 1000.0 / arealeft);

        var pressure_avg = (pressure_left + pressure_right) / 2;

        new_left_height = (Math.abs(pressure_avg) - (wt_boxleft * 1000.0 / arealeft)) / g;
        new_right_height = (Math.abs(pressure_avg) - (wt_boxright * 1000.0 / arearight)) / g;


        boxleft_y = boxleft.position.y;
        boxright_y = boxright.position.y;
        capright_y = rightcap.position.y;
        capleft_y = leftcap.position.y;
        leftin_y = leftin.position.y;
        rightin_y = rightin.position.y;

        var fa;
        if (new_left_height > initial_height_l)  /* for when water in   left cylinder goes up */
        {
            // travelleft = (new_left_height - initial_height_l);
            // travelleft = (travelleft * 100);
            // travelright = (initial_height_r - new_right_height);
            // travelright = (travelright * 100);

            if (leftradius >= rightradius && capright_y > -27)
            {
                if(leftradius == rightradius)
                {   tt=(1.5*tt); }
                if(leftradius > rightradius && box_dim_right > box_dim_left)
                {tt=(2*tt);}

                 fa = ((rightradius/leftradius)*tt);
                newboxright_y = boxright_y - tt;
                newcapright_y = capright_y - tt;
                newrightin_y = rightin_y - tt / 2;

                newboxleft_y = boxleft_y + fa;
                newcapleft_y = capleft_y + fa;
                newleftin_y = leftin_y + fa / 2;
            }

            var pressure_right_t = (updatedheightr /5 ) + (wt_boxright * 1000.0 / arearight);
            var pressure_left_t = (updatedheight /5) + (wt_boxleft * 1000.0 / arealeft);

            if ((pressure_left_t < pressure_right_t ))
            {
                if (capright_y > -27) {
                    updatedheight = updatedheight + fa;
                    updatedheightr = updatedheightr - tt;
                    PIEscene.remove(leftin);
                    PIEscene.remove(rightin);
                    leftgeoinn = new THREE.CylinderGeometry(leftradius, leftradius, updatedheight, 50, 1, true);
                    leftMaterialinn = new THREE.MeshLambertMaterial({color: 0x0066cc, opacity: 3});
                    leftin = new THREE.Mesh(leftgeoinn, leftMaterialinn);
                    PIEaddElement(leftin);

                    rightgeoinn = new THREE.CylinderGeometry(rightradius, rightradius, updatedheightr, 50, 1, true);
                    rightMaterialinn = new THREE.MeshLambertMaterial({color: 0x0066cc, opacity: 3});
                    rightin = new THREE.Mesh(rightgeoinn, rightMaterialinn);

                    PIEaddElement(rightin);
                    boxleft.position.set(-50, newboxleft_y, 0);
                    boxright.position.set(50, newboxright_y, 0);
                    leftcap.position.set(-50, newcapleft_y, 0);
                    rightcap.position.set(50, newcapright_y, 0);
                    leftin.position.set(-50, newleftin_y, 0);
                    rightin.position.set(50, newrightin_y, 0);
                }

            }
                if((pressure_left_t >= pressure_right_t ) || capright_y <= -27)
                {
                    flagallfour = 0;
                }
            // if(newboxleft_y >= travelleft || capright_y <= -27)
            // {
                PIEscene.remove(arrowHelperleft);
                originleft = new THREE.Vector3((-50 - leftradius - 30), capleft_y, 0);
                arrowHelperleft = new THREE.ArrowHelper(dirleft, originleft, 20, 0x000000, 3,2);
                PIEaddElement(arrowHelperleft);

                PIEscene.remove(arrowHelperright);
                originright = new THREE.Vector3((50 + rightradius + 30), capright_y, 0);
                arrowHelperright = new THREE.ArrowHelper(dirright, originright, 20, 0x000000,3,2);
                PIEaddElement(arrowHelperright);
            // }

        }

        else if (new_left_height < initial_height_l)  /* for when water in right cylinder goes up */
        {

                //
                // travelleft = initial_height_l - new_left_height;
                // travelleft = (travelleft * 100);
                // travelright = (new_right_height - initial_height_r);
                // travelright = (travelright * 100);

            if (leftradius <= rightradius && capleft_y > -27)
            {
                  if(leftradius == rightradius)
                { tt=(1.5*tt); }
                if(leftradius < rightradius && box_dim_right < box_dim_left)
                {tt=(2*tt);}


                 fa = ((leftradius/rightradius)*tt);  //sahi hai
                newboxright_y = boxright_y + fa;
                newcapright_y = capright_y + fa;
                newrightin_y = rightin_y + fa / 2;
                newboxleft_y = boxleft_y - tt;
                newcapleft_y = capleft_y - tt;
                newleftin_y = leftin_y - tt / 2;

            }

             pressure_right_t = (updatedheightr /7 ) + (wt_boxright * 1000.0 / arearight);
             pressure_left_t = (updatedheight/7) + (wt_boxleft * 1000.0 / arealeft);


            if ((pressure_left_t > pressure_right_t ))
            {
                if (capleft_y > -27) {

                    updatedheight = updatedheight - tt;
                    updatedheightr = updatedheightr + fa;
                    PIEscene.remove(leftin);
                    PIEscene.remove(rightin);
                    leftgeoinn = new THREE.CylinderGeometry(leftradius, leftradius, updatedheight, 50, 1, true);
                    leftMaterialinn = new THREE.MeshLambertMaterial({color: 0x0066cc, opacity: 3});
                    leftin = new THREE.Mesh(leftgeoinn, leftMaterialinn);

                    PIEaddElement(leftin);

                    rightgeoinn = new THREE.CylinderGeometry(rightradius, rightradius, updatedheightr, 50, 1, true);
                    rightMaterialinn = new THREE.MeshLambertMaterial({color: 0x0066cc, opacity: 3});
                    rightin = new THREE.Mesh(rightgeoinn, rightMaterialinn);

                    PIEaddElement(rightin);
                    boxleft.position.set(-50, newboxleft_y, 0);
                    boxright.position.set(50, newboxright_y, 0);
                    leftcap.position.set(-50, newcapleft_y, 0);
                    rightcap.position.set(50, newcapright_y, 0);

                    leftin.position.set(-50, newleftin_y, 0);
                    rightin.position.set(50, newrightin_y, 0);
                }
            }

            if((pressure_left_t <= pressure_right_t ) || (capleft_y <= -27))
            { flagallfour = 0;}

                PIEscene.remove(arrowHelperleft);
                originleft = new THREE.Vector3((-50 - leftradius - 30), capleft_y, 0);
                arrowHelperleft = new THREE.ArrowHelper(dirleft, originleft, 20, 0x000000, 3,2);
                PIEaddElement(arrowHelperleft);

                PIEscene.remove(arrowHelperright);
                originright = new THREE.Vector3((50 + rightradius + 30), capright_y, 0);
                arrowHelperright = new THREE.ArrowHelper(dirright, originright, 20, 0x000000,3,2);
                PIEaddElement(arrowHelperright);

        }

    }


 /* Finally Update the Display Panel with new values */
    PIEchangeDisplayText("Left Radius", leftradius);
    PIEchangeDisplayText("Right Radius", rightradius);
    PIEchangeDisplayText("Left weight", wt_boxleft);
    PIEchangeDisplayText("Right weight", wt_boxright);
    PIEchangeDisplayText("Pressure at left", pressure_left);
    PIEchangeDisplayText("Pressure at right", pressure_right);
    PIEchangeDisplayText("Left Height", updatedheight );
    PIEchangeDisplayText("Right Height", updatedheightr);


    if (h < 5)
    {
        h++;
        if (h == 5)
        {
            PIEresetExperiment();
            PIEstopAnimation();
        }
    }


}


       //  if (capleft_y <= -27)
       //  {
       //       //   var      dirleft = new THREE.Vector3(1, 0, 0); //pt1y+(focal_length
       // // var      dirleft.normalize();
       //      PIEscene.remove(arrowHelperleft);
       //      originleft = new THREE.Vector3((-50 - leftradius - 30), capleft_y, 0);
       //      arrowHelperleft = new THREE.ArrowHelper(dirleft, originleft, 20, 0x000000, 3,2);
       //      PIEaddElement(arrowHelperleft);
       //  //PIErender();
       //
       // // var      dirright = new THREE.Vector3(-1, 0, 0); //pt1y+(focal_length
       // // var      dirright.normalize();
       //      PIEscene.remove(arrowHelperright);
       //      originright = new THREE.Vector3((50 + rightradius + 30), capright_y, 0);
       //      arrowHelperright = new THREE.ArrowHelper(dirright, originright, 20, 0x000000,3,2);
       //      PIEaddElement(arrowHelperright);
       //  //PIErender();
       //  }


 //
        // if (((pressure_right - pressure_left )*100 >0  )  && flag==0) {  //(new_left_height - new_right_height)
        //     flag=0;
        //     left_height = left_height + 1;
        //     updatedheight = left_height;
        //
        //     right_height = right_height - 1;
        //     updatedheightr = right_height;
        //
        //     if (capright_y > -27) {
        //
        //         newboxright_y = boxright_y - 1;
        //         newcapright_y = capright_y - 1;
        //         newrightin_y = rightin_y - 1 / 2;
        //
        //         newboxleft_y = boxleft_y + 1;
        //         newcapleft_y = capleft_y + 1;
        //         newleftin_y = leftin_y + 1 / 2;
        //
        //
        //         PIEscene.remove(leftin);
        //         PIEscene.remove(rightin);
        //         leftgeoin = new THREE.CylinderGeometry(leftradius, leftradius, updatedheight, 50, 1);
        //         leftMaterialin = new THREE.MeshLambertMaterial({color: 0x0066cc, opacity: 3});
        //         leftin = new THREE.Mesh(leftgeoin, leftMaterialin);
        //
        //         PIEaddElement(leftin);
        //
        //         rightgeoin = new THREE.CylinderGeometry(rightradius, rightradius, updatedheightr, 50, 1);
        //         rightMaterialin = new THREE.MeshLambertMaterial({color: 0x0066cc, opacity: 3});
        //         rightin = new THREE.Mesh(rightgeoin, rightMaterialin);
        //
        //         PIEaddElement(rightin);
        //         boxleft.position.set(-50, newboxleft_y, 0);
        //         boxright.position.set(50, newboxright_y, 0);
        //         leftcap.position.set(-50, newcapleft_y, 0);
        //         rightcap.position.set(50, newcapright_y, 0);
        //         leftin.position.set(-50, newleftin_y, 0);
        //         rightin.position.set(50, newrightin_y, 0);
        //
        //         if (((new_left_height - left_height) * 100) <= 0 && capright_y <= -27) {
        //             PIEstopAnimation();
        //         }
        //
        //     }
        //
        //
        // }
        // else if (((pressure_left - pressure_right )*100 > 0)  && flag==0) {
        //     flag=0;
        //     right_height = right_height + 1;
        //     updatedheightr = right_height;
        //
        //     left_height = left_height - 1;
        //     updatedheight = left_height;
        //     if (capleft_y > -27) {
        //
        //         newboxleft_y = boxleft_y - 1;
        //         newcapleft_y = capleft_y - 1;
        //         newleftin_y = leftin_y - 1 / 2;
        //
        //         newboxright_y = boxright_y + 1;
        //         newcapright_y = capright_y + 1;
        //         newrightin_y = rightin_y + 1 / 2;
        //
        //
        //         PIEscene.remove(leftin);
        //         PIEscene.remove(rightin);
        //         leftgeoin = new THREE.CylinderGeometry(leftradius, leftradius, updatedheight, 50, 1);
        //         leftMaterialin = new THREE.MeshLambertMaterial({color: 0x0066cc, opacity: 3});
        //         leftin = new THREE.Mesh(leftgeoin, leftMaterialin);
        //
        //         PIEaddElement(leftin);
        //
        //         rightgeoin = new THREE.CylinderGeometry(rightradius, rightradius, updatedheightr, 50, 1);
        //         rightMaterialin = new THREE.MeshLambertMaterial({color: 0x0066cc, opacity: 3});
        //         rightin = new THREE.Mesh(rightgeoin, rightMaterialin);
        //
        //         PIEaddElement(rightin);
        //         boxleft.position.set(-50, newboxleft_y, 0);
        //         boxright.position.set(50, newboxright_y, 0);
        //         leftcap.position.set(-50, newcapleft_y, 0);
        //         rightcap.position.set(50, newcapright_y, 0);
        //         leftin.position.set(-50, newleftin_y, 0);
        //         rightin.position.set(50, newrightin_y, 0);
        //
        //     }
        //
        // }
        // else if(pressure_left == pressure_right && ( start > 1 ))
        // {
        //     flag=1;
        // }
        // start = start + 1;

        ////








    //         var clock = document.createElement('div');
    // clock.style.position = 'absolute';
    // //left.style.font='arial';
    // //  clock.style.width = 150;
    // //  clock.style.height = 150;
    //  clock.style.backgroundColor = "powderblue";
    //  clock.style.padding = 10;
    //  clock.innerHTML+="arearight: "+arearight+" arealeft: "+arealeft + " newleftht: "+new_left_height + " newrtht: " +new_right_height+"<br/> ";
    //   clock.innerHTML+="newboxleft_y: "+newboxleft_y+" newrightin_y: "+newrightin_y + " updatedheight: "+updatedheight + " updatedheightr: " +updatedheightr+"<br/> ";
    //   clock.innerHTML+="initial_height_l: "+initial_height_l+" "+"travelleft: "+travelleft+" "+"travelright: "+travelright+" ";
    //  clock.innerHTML+="<br>";
    //  clock.style.top =6 + '%';
    //  clock.style.left =10+ '%';
    // document.body.appendChild( clock);

    // PIEchangeDisplayText("change-in-left-ht", toleft );
    // PIEchangeDisplayText("change-in-right-ht", toright );





    // if((leftradius/rightradius)==1 && (wt_boxleft/wt_boxright)==1 && updatedheightr == updatedheight)
    // {
    //
    //         //   var      dirleft = new THREE.Vector3(1, 0, 0); //pt1y+(focal_length
    //    // var      dirleft.normalize();
    //         PIEscene.remove(arrowHelperleft);
    //         originleft = new THREE.Vector3((-50 - leftradius - 30), capleft_y, 0);
    //         arrowHelperleft = new THREE.ArrowHelper(dirleft, originleft, 20, 0x000000, 3,2);
    //         PIEaddElement(arrowHelperleft);
    //     //PIErender();
    //
    //    // var      dirright = new THREE.Vector3(-1, 0, 0); //pt1y+(focal_length
    //    // var      dirright.normalize();
    //         PIEscene.remove(arrowHelperright);
    //         originright = new THREE.Vector3((50 + rightradius + 30), capright_y, 0);
    //         arrowHelperright = new THREE.ArrowHelper(dirright, originright, 20, 0x000000,3,2);
    //         PIEaddElement(arrowHelperright);
    //     //PIErender();
    //
    // }
    //     if((leftradius/rightradius)==1 && (wt_boxleft/wt_boxright)==1 && updatedheightr != updatedheight  && flagstop==0)
    //     {
    //
    //             boxleft_y = boxleft.position.y;
    //             boxright_y = boxright.position.y;
    //             capright_y = rightcap.position.y;
    //             capleft_y = leftcap.position.y;
    //             leftin_y = leftin.position.y;
    //             rightin_y = rightin.position.y;
    //
    //             temp = (updatedheightr + updatedheight)/2;
    //
    //         if(updatedheight > updatedheightr)
    //         {
    //             if(temp < updatedheight)
    //             {
    //                 newboxleft_y = boxleft_y - 0.5;
    //                 newboxright_y = boxright_y + 0.5;
    //                 newcapleft_y = capleft_y - 0.5;
    //                 newcapright_y = capright_y + 0.5;
    //                 newleftin_y = leftin_y - 0.5 / 2;
    //                 newrightin_y = rightin_y + 0.5 / 2;
    //                 updatedheight = updatedheight - 0.5;
    //                     updatedheightr = updatedheightr + 0.5;
    //                 PIEscene.remove(leftin);
    //                 PIEscene.remove(rightin);
    //                 leftgeoinn = new THREE.CylinderGeometry(leftradius, leftradius, updatedheight, 50, 1, true);
    //                 leftMaterialinn = new THREE.MeshLambertMaterial({color: 0x0066cc, opacity: 3});
    //                 leftin = new THREE.Mesh(leftgeoinn, leftMaterialinn);
    //
    //                 PIEaddElement(leftin);
    //
    //                 rightgeoinn = new THREE.CylinderGeometry(rightradius, rightradius, updatedheightr, 50, 1, true);
    //                 rightMaterialinn = new THREE.MeshLambertMaterial({color: 0x0066cc, opacity: 3});
    //                 rightin = new THREE.Mesh(rightgeoinn, rightMaterialinn);
    //
    //                 PIEaddElement(rightin);
    //                 boxleft.position.set(-50, newboxleft_y, 0);
    //                 boxright.position.set(50, newboxright_y, 0);
    //                 leftcap.position.set(-50, newcapleft_y, 0);
    //                 rightcap.position.set(50, newcapright_y, 0);
    //
    //                 leftin.position.set(-50, newleftin_y, 0);
    //                 rightin.position.set(50, newrightin_y, 0);
    //         }
    //
    //     }
    //     else if(updatedheight < updatedheightr)
    //     {
    //         if(temp < updatedheightr)
    //         {
    //
    //             newboxright_y = boxright_y - 0.5;
    //             newcapright_y = capright_y - 0.5;
    //             newrightin_y = rightin_y - 0.5 / 2;
    //
    //             newboxleft_y = boxleft_y + 0.5;
    //             newcapleft_y = capleft_y + 0.5;
    //             newleftin_y = leftin_y + 0.5 / 2;
    //             updatedheight = updatedheight + 0.5;
    //                 updatedheightr = updatedheightr - 0.5;
    //                 PIEscene.remove(leftin);
    //                 PIEscene.remove(rightin);
    //                 leftgeoinn = new THREE.CylinderGeometry(leftradius, leftradius, updatedheight, 50, 1, true);
    //                 leftMaterialinn = new THREE.MeshLambertMaterial({color: 0x0066cc, opacity: 3});
    //                 leftin = new THREE.Mesh(leftgeoinn, leftMaterialinn);
    //                 // leftin.position.set(-50,leftin_y,0);
    //                 PIEaddElement(leftin);
    //
    //                 rightgeoinn = new THREE.CylinderGeometry(rightradius, rightradius, updatedheightr, 50, 1, true);
    //                 rightMaterialinn = new THREE.MeshLambertMaterial({color: 0x0066cc, opacity: 3});
    //                 rightin = new THREE.Mesh(rightgeoinn, rightMaterialinn);
    //
    //                 PIEaddElement(rightin);
    //                 boxleft.position.set(-50, newboxleft_y, 0);
    //                 boxright.position.set(50, newboxright_y, 0);
    //                 leftcap.position.set(-50, newcapleft_y, 0);
    //                 rightcap.position.set(50, newcapright_y, 0);
    //                 leftin.position.set(-50, newleftin_y, 0);
    //                 rightin.position.set(50, newrightin_y, 0);
    //         }
    //
    //     }
    //
    // }




       // geometry=new THREE.BoxGeometry(mySceneW *2,mySceneH *2,0);
       //  loader=new THREE.TextureLoader();
       //  texture=loader.load('background.jpg');
       // material=new THREE.MeshBasicMaterial({map:texture});
       // myback=new THREE.Mesh(geometry,material);
       // myback.position.set(0,0,-2);
       // myback.receiveShadow=true;
       // PIEaddElement(myback);

        // clock = document.createElement('div');
    //                 clock.style.position = 'absolute';
    //                 //left.style.font='arial';
    //                 //  clock.style.width = 150;
    //                 //  clock.style.height = 150;
    //                  clock.style.backgroundColor = "powderblue";
    //                  clock.style.padding = 10;
    //
    //                  clock.style.top =6 + '%';
    //                  clock.style.left =10+ '%';
    //                 //left.style.textColor = "white";
    //                 document.body.appendChild( clock);
    //             clock.innerHTML="pressLeft  " + pressure_left_t + "  pressRight  " + pressure_right_t+ "";
