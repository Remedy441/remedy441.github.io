/**********************************************************************
 * 
 *                     global variables
 * ********************************************************************/

{
    
var animationDone=-1;

//global varialbes......................................................
var geometry;
var material;
var texture;

/* Scene Dimensions (in meters: at z = 0) */
var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */

/* Room Objects */
var myFloor;            /* Floor */
var myCeiling;          /* Ceiling */
var myBack;             /* Back */
var myRight;            /* Right */
var myLeft;             /* Left */

var leftB;              /* Left Barrier */
var rightB;             /* Right Barrier */
var bottomB;            /* Bottom Barrier */
var topB;               /* Top Barrier */
var backB=-4.0;         /* Back Barrier */
var wallThickness;      /* Wall Thickness */


//black board...........................................................
var blackBoard;

//axis variables
var xAxis1;
var xAxis2;
var yAxis1;
var yAxis2;
var yAxis1geometry=new THREE.Geometry();
var yAxis2geometry=new THREE.Geometry();
var xAxis1geometry=new THREE.Geometry();
var xAxis2geometry=new THREE.Geometry();
var circle1;
var circle2;


//angles and helper's...................................................
var angle;
var angle1;
var angle2;
var angle1Display;
var angle2Display;
var a1L;
var a2L;
//ray variables.........................................................
var a1,a2;
var ray1f;
var ray2f;
var ray1v;
var ray2v; 
var ray1fGeometry;
var ray1vGeometry; 
var ray2fGeometry
var ray2vGeometry

var line1Geometry;
var line2Geometry;
var compass1;

//other varian=bles.....................................................
var helpContent;
var infoContent;
var rightCenter;
var leftCenter;

//
var compareElement;
var a1L;
var a2L;

}
/**********************************************************************
 *                        default functions
 * ********************************************************************/

{

function initialiseControls(){  
    initialiseControlVariables();
    PIEaddInputSlider("Angle1",angle1, handleAngle1, 0, 360, 1);
    PIEaddDisplayText("Angle1",angle1);
    PIEaddInputSlider("Angle2",angle2, handleAngle2, 0, 360, 1);
    PIEaddDisplayText("Angle2",angle2);
    }
    
function initialiseControlVariables(){   
       }

function initialiseScene(){
    /* Initialise Scene Variables */
    mySceneTLX = -6.50;
    mySceneTLY = 2.5;
    mySceneBRX = 6.50;
    mySceneBRY = -2.5;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
}


function initialiseOtherVariables()
{
    wallThickness = 0.20;
    leftB=mySceneTLX;
    rightB=mySceneBRX;
    bottomB=mySceneBRY;
    topB=mySceneTLY;
}


function loadExperimentElements()
{   
    document.title="Comparision of Angles";
    PIEsetExperimentTitle("Comparision of Angles");
    PIEsetDeveloperName("Raghu Cheekatla");
    PIEhideControlElement();
    
    setAngles();
    placeCode();
    placeElements();
    initialiseHelp();
    initialiseInfo();
    initialiseScene();
    initialiseControls();

    compareElement=document.getElementById("compare");
    angle1Display=document.getElementById("angle1");
    angle2Display=document.getElementById("angle2");
   updateAngularCircle(0.35,0.35);
    updateAngleLables();
    updateComperator();
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    resetExperiment();
    PIEturnCamera(0,0,0);
}

var a;
function updateExperimentElements(t, dt)
{
    if(animationDone==-1){
        a1L.style.display="none";
        a2L.style.display="none";
        animationDone=464;
        hideLables();
        PIEaddElement(compass1);
        setTimeout(function (){
        updateAngularCircle(0.7,0.35);
            },3000);
         a=setTimeout(function (){
            animationDone=0;
            },5000);
        }
    else if(animationDone==0){
        measureAngle1();
        }
    else if(animationDone==1)
        moveCompass();
    else if(animationDone==2)
        measureAngle2();

    else if(animationDone==5){
        resetExperiment();
        window.clearTimeout(a);
        PIEstartAnimation();
        }
   }


function resetExperiment()
{   window.clearTimeout(a);
    PIEstopAnimation();
    animationDone=-1;
    if(compass1)
        PIEscene.remove(compass1);
    PIEscene.remove(ray1v);
    PIEscene.remove(ray2v);
    setAngles();
    initialiseOtherVariables();
    placeElements();
    updateAngularCircle(0.35,0.35);
    updateComperator();
    updateAngleLables();
    PIEchangeInputSlider("Angle1",angle1);
    PIEchangeDisplayText("Angle1",angle1);    
    PIEchangeDisplaySlider("Angle1",angle1);
    PIEchangeInputSlider("Angle2",angle2);
    PIEchangeDisplayText("Angle2",angle2);    
    PIEchangeDisplaySlider("Angle2",angle2);
    hideLables();
    a1L.style.display="none";
    a2L.style.display="none";
    }

}

/***********************************************************************
 *                       Actions and movements                         
 * *********************************************************************/
function measureAngle1(){
            animationDone=464;
            a1L.style.display="inline-block";
            if(updateAngularCircle(0.35,0.35)){
                        setTimeout(function(){animationDone=1;},2000);
            console.log("done measuring angle1");
        }
        
    }
function moveCompass(){
    if(animationDone!=-1){
    console.log("lkjljlkjljlkjljlkjljls");
    console.log(compass1.position.x);
    compass1.position.x+=0.05;
    if(compass1.position.x>=2.670){
        compass1.position.x=2.675;
        animationDone=464;
        updateAngularCircle(0.35,0.7);
        setTimeout(function (){
        animationDone=2;
    },2000);
    }
    PIErender();    
    }
}


function measureAngle2(){
    if(animationDone!=-1){
        setTimeout(function(){
            a2L.style.display="inline-block";
            updateAngularCircle(0.35,0.35);
            PIEscene.remove(compass1);
            PIErender();
            setTimeout(function(){
            PIEstopAnimation();
            animationDone=5;
            compass1.position.set(-2.7,0,-3.88);
            showLables();
                },1000);
           },3000);
    console.log("stiill under development");
    }
}

    
function hideLables(){
    document.getElementById("compare").style.display="none";
    }
    
function showLables(){
    document.getElementById("compare").style.display="inline-block";
    }

{
    
function handleAngle1(e){
    angle1=e;
    hideLables();
    a1L.style.display="none";
    a2L.style.display="none";
    if(compass1)
        PIEscene.remove(compass1);
    animationDone=-1;
    updateRay1(angle1,new THREE.LineBasicMaterial({color:0x008000}));
    updateAngularCircle(0.35,0.35);
    PIEchangeInputSlider("Angle1",angle1);
    PIEchangeDisplayText("Angle1",angle1);    
    PIEchangeDisplaySlider("Angle1",angle1);
    PIErender();
    PIEstopAnimation();
compass1.position.set(-2.7,0,-3.88);
    }
    
    

function updateRay1(a1){
    var ray1vPoints=[];
    if(ray1v)
     PIEscene.remove(ray1v);
    ray1vPoints.push(new THREE.Vector3( -2.675,0,-3.9 ));
    ray1vPoints.push(new THREE.Vector3( (-2.675+(2*Math.cos(a1*Math.PI/180))),((2*Math.sin(a1*Math.PI/180))),-3.9 ));
    ray1vGeometry = new THREE.TubeGeometry(  new THREE.SplineCurve3(ray1vPoints),20, 0.025, 5, true);
    ray1v=new THREE.Mesh(ray1vGeometry,new THREE.LineBasicMaterial({color:0x3B8B3B}));
    PIEaddElement(ray1v);
    console.log("i'm in update ray 1 with angle1 =="+a1+"and materila is");
}


function handleAngle2(e){
    angle2=e;
    hideLables();
    a1L.style.display="none";
    a2L.style.display="none";
    if(compass1)
        PIEscene.remove(compass1);
    animationDone=-1;
    updateRay2(angle2);
    updateAngularCircle(0.35,0.35);
    updateComperator();
    updateAngleLables();
    PIEchangeInputSlider("Angle2",angle2);
    PIEchangeDisplayText("Angle2",angle2);    
    PIEchangeDisplaySlider("Angle2",angle2);
    PIErender();
    PIEstopAnimation();
    compass1.position.set(-2.7,0,-3.88);
    }    
    


function updateRay2(a2){
    var ray2vPoints=[];
    if(ray2v)
        PIEscene.remove(ray2v);
    ray2vPoints.push(new THREE.Vector3( 2.675,0,-3.9 ));
    ray2vPoints.push(new THREE.Vector3(  (2.675+(2*Math.cos(a2*Math.PI/180))),((2*Math.sin(a2*Math.PI/180))),-3.9 ));    
    ray2vGeometry = new THREE.TubeGeometry(  new THREE.SplineCurve3(ray2vPoints),20, 0.025, 5, true);
    ray2v=new THREE.Mesh(ray2vGeometry,new THREE.LineBasicMaterial({color:0x3B8B3B}));
    PIEaddElement(ray2v);
    console.log("i'm in update ray 2 with angle2 =="+a2+"and materila is");
}

function updateComperator(){
        if(angle1>angle2)
            compareElement.src="gt2.png";
        else if(angle1<angle2)
            compareElement.src="lt2.png"
        else if(angle1===angle2)
            compareElement.src="eq.png";
    }

function updateAngleLables(){
    var a1Lable,a2Lable,
        a1Type,a2Type;

        if (angle1<90)
            a1Type="Acute angle";
        else if(angle1==90)
            a1Type="Right angle";
        else if(angle1>90 && angle1<180)
            a1Type="Obtuse angle";
        else if(angle1==180)
            a1Type="Straight angle";
        else if (angle1>180 && angle1<360)
            a1Type="Reflex angle";
        else if (angle1==360)
            a1Type="Full angle";
        
        if (angle2<90)
            a2Type="Acute angle";
        else if (angle2==90)
            a2Type="Right angle";
        else if (angle2>90 && angle2<180)
            a2Type="Obtuse angle";
        else if(angle2==180)
            a2Type="Straight angle";
        else if (angle2>180 && angle2<360)
            a2Type="Reflex angle";
        else if (angle2==360)
            a2Type="Full angle";
        
        a1L=document.getElementById("angle1");
        a2L=document.getElementById("angle2");
        a1L.innerHTML=(angle1+"<sup>0 </sup>"+a1Type);
        a2L.innerHTML=(angle2+"<sup>0 </sup>"+a2Type);

    }

function updateAngularCircle(r1,r2)
{
    if(circle1)
        PIEscene.remove(circle1);
    if(circle2)
        PIEscene.remove(circle2);
        
    circle1=makeCircle(r1,angle1,0xA52A2A,-2.675,0,-3.865);
    circle2=makeCircle(r2,angle2,0xA52A2A,2.675,0,-3.865);
    PIEaddElement(circle1);
    PIEaddElement(circle2);
    return true;
    }


//end of actions and movements functions................................
}


/**********************************************************************
 *                             GUI AND OTHERS
 * ********************************************************************/
 {

function placeElements(){
    placeWalls();
    placeBlackBoard();
    placeAxis();
    placeRays();
    placeCompass();
    }
function placeWalls(){
    
    geometry = new THREE.BoxGeometry( mySceneW * 2, wallThickness, 100);
    material = new THREE.MeshLambertMaterial( {color: 0xaaaaaa} );
    myFloor  = new THREE.Mesh( geometry, material );
    
    myFloor.position.set(myCenterX, bottomB - (wallThickness / 2), 0.0);
    myFloor.receiveShadow = true;
    //PIEaddElement(myFloor);
    
    
    geometry = new THREE.BoxGeometry( mySceneW * 2, wallThickness, 100 );
    material = new THREE.MeshLambertMaterial( {color: 0xffffff} );
    myCeiling = new THREE.Mesh( geometry, material );
    myCeiling.position.set(myCenterX, topB+(wallThickness/2), 0.0);
    myFloor.receiveShadow = true;
    //PIEaddElement(myCeiling);
    
    
    geometry = new THREE.BoxGeometry( wallThickness, mySceneH * 2, 100 );
    material = new THREE.MeshLambertMaterial( {color: 0x90EE90} );
    myLeft = new THREE.Mesh( geometry, material );
    myLeft.position.set(leftB-(wallThickness/2), myCenterY, 0.0);
    myLeft.receiveShadow = true;
    //PIEaddElement(myLeft);
    
    
    geometry = new THREE.BoxGeometry( wallThickness, mySceneH * 2, 100 );
    material = new THREE.MeshLambertMaterial( {color: 0x90EE90} );
    myRight = new THREE.Mesh( geometry, material );
    myRight.position.set(rightB+(wallThickness/2), myCenterY, 0.0);
    myRight.receiveShadow = true;
    //PIEaddElement(myRight);
    
    
    geometry = new THREE.BoxGeometry( mySceneW * 2, mySceneH * 2, wallThickness );
    material = new THREE.MeshLambertMaterial( {color: 0xC4C4F4} );
    myBack = new THREE.Mesh( geometry, material );
    myBack.position.set(myCenterX, myCenterY, backB - (wallThickness / 2));
    myBack.receiveShadow = true;
    //PIEaddElement(myBack);    
    
    }

function placeBlackBoard(){
    //texture=new THREE.ImageUtils.loadTexture("b2.jpg",{},function(){PIErenderer.render(PIEscene,PIEcamera);});
    material = new THREE.MeshLambertMaterial({color:0xfdf6d5});
    //material.map=texture;
    geometry = new THREE.BoxGeometry( 16,10,1 );
    blackBoard=new THREE.Mesh(geometry,material);
    PIEaddElement(blackBoard);
    blackBoard.position.set(0,0,-4.4);
    blackBoard.receiveShadow=false;
    }

function placeAxis(){
    if(yAxis1)
        PIEscene.remove(yAxis1);
    if(yAxis2)
        PIEscene.remove(yAxis2);
    if(xAxis1)
        PIEscene.remove(xAxis1);
    if(xAxis2)
        PIEscene.remove(xAxis2);
    material=new THREE.LineBasicMaterial({color:0x4D4D4D})
    
    yAxis1geometry.vertices.push(new THREE.Vector3(-2.675,2.3,-3.89));
    yAxis1geometry.vertices.push(new THREE.Vector3(-2.675,-2.3,-3.89));
    yAxis1=new THREE.Line(yAxis1geometry,material);
    
    yAxis2geometry.vertices.push(new THREE.Vector3(2.675,2.3,-3.89));
    yAxis2geometry.vertices.push(new THREE.Vector3(2.675,-2.3,-3.89));
    yAxis2=new THREE.Line(yAxis2geometry,material);

    xAxis1geometry.vertices.push(new THREE.Vector3(-4.675,0,-3.89));
    xAxis1geometry.vertices.push(new THREE.Vector3(-0.675,0,-3.89));
    xAxis1=new THREE.Line(xAxis1geometry,material);
    
    xAxis2geometry.vertices.push(new THREE.Vector3(0.675,0,-3.89));
    xAxis2geometry.vertices.push(new THREE.Vector3(4.675,0,-3.89));
    xAxis2=new THREE.Line(xAxis2geometry,material);
    
    PIEaddElement(yAxis1);
    PIEaddElement(yAxis2);
    PIEaddElement(xAxis1);
    PIEaddElement(xAxis2);    
        
}

function placeRays(){
    if(leftCenter)
        PIEscene.remove(leftCenter);
    if(rightCenter)
        PIEscene.remove(rightCenter);
    if(ray1f)
        PIEscene.remove(ray1f);
    if(ray2f)
        PIEscene.remove(ray2f);
        
    leftCenter=makeCircle(0.04,360,0x0000FF,-2.675,0,-3.86);
    rightCenter=makeCircle(0.04,360,0x0000FF,2.675,0,-3.86);
    PIEscene.add(leftCenter);
    PIEscene.add(rightCenter);
    
    material=new THREE.LineBasicMaterial({linewidth:10,color:0x3737B1});
    
    var ray1fPoints=[];
    var ray2fPoints=[];
    
    ray1fPoints.push(new THREE.Vector3( -2.675,0,-3.9 ));
    ray1fPoints.push(new THREE.Vector3( -0.675 ,0,-3.9 ));
    
    ray2fPoints.push(new THREE.Vector3( 2.675,0,-3.9 ));
    ray2fPoints.push(new THREE.Vector3( 4.675,0,-3.9 ));
    
    updateRay1(angle1);
    updateRay2(angle2);
    ray1fGeometry = new THREE.TubeGeometry(  new THREE.SplineCurve3(ray1fPoints),20, 0.025, 5, true);
    ray2fGeometry = new THREE.TubeGeometry(  new THREE.SplineCurve3(ray2fPoints),20, 0.025, 5, true);
    
    ray1f=new THREE.Mesh(ray1fGeometry,material);
    ray2f=new THREE.Mesh(ray2fGeometry,material);
    
    PIEaddElement(ray1f);
    PIEaddElement(ray2f);
    
    }

}


    
function makeCircle(radius,angle,bg,x,y,z)
{

    geometry=new THREE.CircleGeometry(radius,360,0,Math.PI*angle/180);
    material=new THREE.MeshBasicMaterial({color: bg});
var circle=new THREE.Mesh(geometry,material);
    circle.position.set(x,y,z);
    return circle;    
  
  }

function setAngles()
{    
var k=Math.floor(Math.random()*5);
    if(k==0){                                      //generate same angle.
        angle=Math.floor(Math.random()*360);
        angle1=angle2=angle;
            }
    else{                                          //different angles...
        angle1=Math.floor(Math.random()*360);
        angle2=Math.floor(Math.random()*360);
            }
  // alert(angle1+" "+angle2);
}


function placeCompass(){
    if(compass1)
        PIEscene.remove(compass1);
    console.log("goint to compass");
    geometry=new THREE.CircleGeometry(2.3,360);
    texture=new THREE.ImageUtils.loadTexture("prot3b.png",{},function(){PIErenderer.render(PIEscene,PIEcamera);});
    material=new THREE.MeshBasicMaterial({opacity:0.7});
    material.map=texture;
    material.transparent=true;
    material.overdraw=false;
    compass1=new THREE.Mesh(geometry,material);
    compass1.position.set(-2.7,0,-3.85);
    compass1.rotation.z=-0.5*Math.PI;
    }

function placeCode()
{
    console.log('adding code to file');
    var d=document.getElementsByTagName("div");
    d[0].insertAdjacentHTML("beforebegin",'<style>\
                                                    #compare,#angle1,#angle2 {\
                                                    color:#008000;\
                                                    font-size:20px;\
                                                    display:none;\
                                                    border:0px solid red;}\
                                                    #compare{\
                                                    width:5%;\
                                                    position:absolute;\
                                                    margin:25% 0% 0% 48.5%;\
                                                    height:7%;\
                                                    }\
                                                    #angle1{\
                                                    width:15%;\
                                                    position:absolute;\
                                                    display:none;\
                                                    margin:12% 0% 0% 5%;\
                                                    line-height:2;\
                                                    }\
                                                    #angle2{\
                                                    width:15%;\
                                                    display:none;\
                                                    position:absolute;\
                                                    margin:12% 0% 0% 80%;\
                                                    line-height:2;\
                                                    }\
                                                    \#x1{\
                                                    color:#4D4D4D;\
                                                    position:absolute;\
                                                    margin:26% 0% 0% 84%;\
                                                    }\
                                                    \#x2{\
                                                    color:#4D4D4D;\
                                                    position:absolute;\
                                                    margin:26% 0% 0% 46.5%;\
                                                    }\
                                                    \#y1{\
                                                    color:#4D4D4D;\
                                                    position:absolute;\
                                                    margin:9.5% 0% 0% 31%;\
                                                    }\
                                                    \#y2{\
                                                    color:#4D4D4D;\
                                                    position:absolute;\
                                                    margin:9.5% 0% 0% 68.3%;\
                                                    }\
                                                    </style>');
    d[0].insertAdjacentHTML("beforebegin",'<div><img  id="compare" src=""></div>');
    d[0].insertAdjacentHTML("beforebegin",'<b id="angle1"></b>');
    d[0].insertAdjacentHTML("beforebegin",'<b id="angle2"></b>');
    d[0].insertAdjacentHTML("beforebegin",'<b id="x1">X</b>');
    d[0].insertAdjacentHTML("beforebegin",'<b id="y1">Y</b>');
    d[0].insertAdjacentHTML("beforebegin",'<b id="x2">X</b>');
    d[0].insertAdjacentHTML("beforebegin",'<p id="y2">Y</p>');

    
    var comparator=document.getElementById("compare");
    comparator.innerHTML="";    
     console.log('added code to file');
    }

function initialiseHelp()
{
    helpContent="";
    helpContent+=('<h2>Comparision of Angles Experiment</h2>');
    helpContent+=('<ul><li><p>The experiment illustrates how to compare two angles by showing those angles visually and comparing them using protractor.</p></li>');
    helpContent+=('<li><p>Running this experiment so simple and easily can be understood by students</p></li>');
    helpContent+=('<li><p>The experiment shows two graphs side by side with same or different angles</p></li>');
    helpContent+=('<li><p>The value of angles represented are shown above in degrees</p></li>');
    helpContent+=('<li><p>Along with the value of angle, the type of angle is also specified.</p></li>');
    helpContent+=('<li><p>A pair of new angles can also be generated by pressing the reset button present at the top of the page</p></li>');
    helpContent+=('</ul>');
    helpContent+=('<h2>Animation control</h2>');
    helpContent+=('<dl><dt>Start</dt><dd>Pressing the start button above compares the two angles by placing a protractor over them.</dd>');
    helpContent+=('<dt>Stop</dt><dd>Press the stop button to temporarily pause the animation</dd>');
    helpContent+=('<dt>Reset</dt><dd>Reset the experiment and generate new angles randomly</dd>');
    helpContent+=('<dt>Angle-I slider</dt><dd>Change the value of anlge one by sliding or changing the value in slider present in the header bar</dd>');
    helpContent+=('<dt>Angle-II slider</dt><dd>Change the value of second angle by sliding or changing the value in second slider present in the header below angle I slider</dd>');
    helpContent+=('<dt>Toggle close/open controls</dt><dd>Show or hide slider contols present in the header menu.</dd>');
    PIEupdateHelp(helpContent);
}

function initialiseInfo()
{
    infoContent =  "";
    infoContent+=('<h2>Comparision of angles</h2>');
    infoContent+=('<h3>Angle</h3>');
    infoContent+=('<p>Angle is the space between two intersecting lines or surfaces at or close to the point where they meet. It is commonly measured in angles.</p>');
    infoContent+=('<p>There are different measures ( like degrees, radians )to represent the angle between two lines or surfaces. </p>');
    infoContent+=('<p>A complete circle is divided into 360 parts and each unit is referred to as a "degree"</p>');
    infoContent+=('<p>In radian system a complete circle will have 2*PI radians.</p>');
    infoContent+=('<h3>Types of angles</h3>');
    infoContent+=('<ul><li>Acute Angle:<br/><p>An acute angle is an angle which lies in the exclusive range of 0 to 90.</p></li>');
    infoContent+=('<li>Right Angle:<br/><p>An angle of exactly 90 degrees is known as right angle</p></li>');
    infoContent+=('<li>Obtuse Angle:<br/><p>If the angle is above right angle(90) and below 180 degrees then it is obtuse angle</p></li>');
    infoContent+=('<li>Straight Angle:<br/><p>An angle of exactly 180 degrees is known as straight angle.</p></li>');
    infoContent+=('<li>Reflex Angle:<br/><p>Angle which exceeds 180 degrees and is below 360 degrees is a reflex angle</p></li>');
    infoContent+=('<li>Full Angle:<br/><p>An angle of 360 degrees is referred to as full angle</p></li>');
    infoContent+=('<img src="angles.png" style="width:25%;margin:2% 5%;">');
    PIEupdateInfo(infoContent);
}

