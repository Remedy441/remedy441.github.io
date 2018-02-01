/**********************************************************************
 * 
 *                     global variables
 * ********************************************************************/
{
var r=0;
var motion;    
var animationDone=-1;
var selected=0;

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


//black board...........................................................
var blackBoard;


var poles=[];
var polesTop=[];
var mark=[];
var checkPoints=0;

//ray variables.........................................................
//other varian=bles.....................................................
var helpContent;
var infoContent;
var rightCenter;
var leftCenter;


var distance;
var time;
var d0,
    d1,
    d2,
    d3,
    d4,
    d5,
    d;
    
var D, 
    D1,
    D2,
    D3,
    D4,
    D5;
var f1,
    f2,
    f3,
    f4;
//
}
/**********************************************************************
 *                        default functions
 * ********************************************************************/
console.log("end of global variable decleration");


function initialiseControls(){  
    initialiseControlVariables();
    }
    
function initialiseControlVariables(){   
       
       }

function initialiseScene(){
    /* Initialise Scene Variables */
    mySceneTLX = -8.0;
    mySceneTLY = 2.5;
    mySceneBRX = 8.0;
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
    
    distance=900;
    time=150;
    d0=-4.8,
    d1=-2.95,
    d2=-1.1,
    d3=0.75,
    d4=2.6,
    d5=4.450,
    d=1.85;
    
    D=500; 
    D1=100,
    D2=200,
    D3=300,
    D4=400,
    D5=500;
    f1=0,
    f2=0,
    f3=0,
    f4=0;
}


function loadExperimentElements()
{  // PIEoffsetTime=0.01;
    PIEcamera.lookAt(3,0,0);
    document.title="Motion along a Straight Line";
    PIEsetExperimentTitle("Motion along a Straight Line");
    PIEsetDeveloperName("Raghu Cheekatla");
    PIEhideControlElement();
    generateDistances();
    placeCode();
    addDistances();
    placeElements();
    console.log("created objects to add events");   
    initialiseHelp();
    initialiseInfo();
    initialiseScene();
    initialiseControls();
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    resetExperiment();
    console.log("inside loadexperiment");
    PIEstopAnimation();

}


function updateExperimentElements(t, dt)
  {
      tyre_br.rotation.z=r*Math.PI;
      tyre_bl.rotation.z=r*Math.PI;
      tyre_fr.rotation.z=r*Math.PI;
      tyre_fl.rotation.z=r*Math.PI;
      r=r-0.01;
      if(selected==0){
        document.getElementById("eval2").style.opacity="0.5";
        document.getElementById("eval1").style.opacity="0.5";
        selected=1;
            }
      console.log("inside update experiment");
      if(car.position.x>4.9){
        document.getElementById("row4col5").innerHTML=((D5/0.5)+"kmph");
        PIEstopAnimation();
      }
      else if(car.position.x<d1){
        if(animationDone==-1){
        //    PIEstopAnimation();
            animationDone=0;
            makeCheckPoint(car.position.x);
//            setTimeout(function(){PIEstartAnimation(); },3000);
            }
        car.position.x+=v1;
        }
      else if(car.position.x<d2){
          if(animationDone==0){
      //      PIEstopAnimation();
            animationDone=1;
            makeCheckPoint(car.position.x);
          document.getElementById("row4col1").innerHTML=((D1/0.5)+"kmph");
  //          setTimeout(function(){PIEstartAnimation(); },3000);
            }
        car.position.x+=v2;
      }
      else if(car.position.x<d3){
          if(animationDone==1){
    //      PIEstopAnimation();
            animationDone=2;
          makeCheckPoint(car.position.x);
            document.getElementById("row4col2").innerHTML=((D2/0.5)+"kmph");
         //   setTimeout(function(){PIEstartAnimation(); },3000);
            }
        car.position.x+=v3;
        }
        
      else if(car.position.x<d4){
          if(animationDone==2){
           // PIEstopAnimation();
            document.getElementById("row4col3").innerHTML=((D3/0.5)+"kmph");
            animationDone=3;
          makeCheckPoint(car.position.x);
           // setTimeout(function(){PIEstartAnimation(); },3000);
            }
        car.position.x+=v4;
        }
        
      else if(car.position.x<4.7){
          if(animationDone==3){
            //PIEstopAnimation();
            animationDone=-1;
            document.getElementById("row4col4").innerHTML=((D4/0.5)+"kmph");
          makeCheckPoint(car.position.x);
            //setTimeout(function(){PIEstartAnimation() },3000);
            }
        car.position.x+=v5;
        }
        else{
            document.getElementById("row4col5").innerHTML=((D5/0.5)+"kmph");
            car.position.x=4.7;
            PIEstopAnimation();
            if(motion==1){
                document.getElementById("ques").innerHTML="The velocity of the car remains unchanged during the whole journey so, this the car is in<span style='color:red'> UNIFORM<span> motion"
                }
            else if(motion==0){
                document.getElementById("ques").innerHTML="The velocity of the car changes during the journey at different times this the car is having<span style='color:red'> NON-UNIFORM<span> motion"
                }
            
    }
}

/********************************************************************
 * id="result" src="" alt="" width="100%" height="100%"></li><li id="justification"
 * ****************************************************************/


function resetExperiment(){
    
        animationDone=-1;
        initialiseOtherVariables();
       for(var i=0;i<checkPoints;i++){
           PIEremoveElement(mark[i]);
           }
           checkPoints=0;
                
        document.getElementById("ques").innerHTML=("Observe the distances travelled by the car for every 30 minutes in the table aside. Choose whether the motion of car is uniform or non-uniform from the given data.")
        document.getElementById("row4col5").innerHTML="";
        document.getElementById("row4col1").innerHTML="";
        document.getElementById("row4col2").innerHTML="";
        document.getElementById("row4col3").innerHTML="";
        document.getElementById("row4col4").innerHTML="";
    var a=setInterval(function(){
            car.position.x=-4.8;
            car.rotation.y=0;
            window.clearInterval(a);
            selected=0;
            document.getElementById("eval1").style.opacity="1";
            document.getElementById("eval2").style.opacity="1";           
            PIErender();
        },100);
        generateDistances();
        addDistances();
        
}

/***********************************************************************
 *                       Actions and movements                         
 * *********************************************************************/

function makeCheckPoint(pos){

    var d=0;
    texture=THREE.ImageUtils.loadTexture("cone1.png",{},function(){PIErenderer.render(PIEscene,PIEcamera);});
    geometry=new THREE.CylinderGeometry(0.005,0.08,0.2);
    material=new THREE.MeshBasicMaterial({map:texture});
    mark[checkPoints]=new THREE.Mesh(geometry,material);
    PIEaddElement(mark[checkPoints]);
    if(pos>0){
        d+=0.05;
        }
    mark[checkPoints].position.set(pos+d,-1,0.2);
    mark[checkPoints].rotation.z=0*Math.PI;
    mark[checkPoints].rotation.y=1.2*Math.PI;
    console.log("inside make check point");
    checkPoints+=1;
    
    }
            
function generateDistances(){
    
    console.log("generate distances");
    motion=Math.round(Math.random()*1);
    if(motion===1){     ///uniform motion
        v1=v2=v3=v4=v5=0.001;       
        }
    else {              ///non-uniform motion
        f1=(Math.floor(Math.random()*9))/10.0000;
        f2=(Math.floor(Math.random()*9))/10.0000;
        f3=(Math.floor(Math.random()*9))/10.0000;
        f4=(Math.floor(Math.random()*9))/10.0000;
        console.log(f1+" "+f2+" "+f3+" "+f4+"  ");
        }
        
        d1-=d*f1;
        d2-=d*f2;
        d3-=d*f3;
        d4-=d*f4;
        
        v1=Math.abs((d1-d0)/500.0)*3;
        v2=Math.abs((d2-d1)/500.0)*3;
        v3=Math.abs((d3-d2)/500.0)*3;
        v4=Math.abs((d4-d3)/500.0)*3;
        v5=Math.abs((d5-d3)/500.0)*3;
        
        console.log(v1+" "+v2+" "+v3+" "+v4+" "+v5);
        D1=D1-(100*f1);
        D2=D2-(100*f2);
        D3=D3-(100*f3);
        D4=D4-(100*f4);
    
        D2=D2-D1;
        D3=D3-D2-D1;
        D4=D4-D3-D2-D1;
        D5=D5-D4-D3-D2-D1;
    

    }
        
//end of actions and movements functions................................


function addDistances(){
    
    document.getElementById("row3col1").innerHTML=D1+"km";
    document.getElementById("row3col2").innerHTML=D2+"km";
    document.getElementById("row3col3").innerHTML=D3+"km";
    document.getElementById("row3col4").innerHTML=D4+"km";
    document.getElementById("row3col5").innerHTML=D5+"km";
    console.log("add distances");
    
    }


function evalUni(){
    if(selected==0){
        selected=1;
        document.getElementById("eval2").style.opacity="0.5";
        PIEstartAnimation();
    }
}


function evalNUni(){
    if(selected==0){
        selected=1;
        document.getElementById("eval1").style.opacity="0.5";
        PIEstartAnimation();
    }
}

/**********************************************************************
 *                             GUI AND OTHERS
 * ********************************************************************/
 

function placeElements(){
    
    placeBlackBoard();
    placeTrack();
    placeback();
    placecar();
    placePoles();

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
    

function placeTrack(){
    
    texture=new THREE.ImageUtils.loadTexture("road2.jpg",{},function(){PIErenderer.render(PIEscene,PIEcamera);});
    geometry=new THREE.CubeGeometry(12,1.4,0.1);
    material=new THREE.MeshBasicMaterial({color:0x8B6914});
    material.map=texture;
    var track=new THREE.Mesh(geometry,material);
    PIEaddElement(track);
    track.position.set(0,-1.6,0);    
    
    }

    
function placeback(){
 
    geometry=new THREE.CubeGeometry(14,3,0.1);
    texture=new THREE.ImageUtils.loadTexture("back9.jpg",{},function(){PIErenderer.render(PIEscene,PIEcamera);});
    material=new THREE.MeshBasicMaterial();
    material.map=texture;
    var back=new THREE.Mesh(geometry,material);
    //PIEaddElement(back);
    back.position.set(0,1.8,-2);
 
    }

    
var car,
    car1,
    car2;
var tyre_fr;
var tyre_br;
var tyre_fl;
var tyre_bl;



function placecar() {

        geometry=new THREE.BoxGeometry(0.35,0.2,0.233);
        geometry.vertices[2].x=0.233;       
        geometry.vertices[3].x=0.233;
        car=new THREE.Object3D();
    var cubeMaterialArray = [];
        //frontglass
        //texture=new THREE.ImageUtils.loadTexture("glass.png",{},function(){PIErenderer.render(PIEscene,PIEcamera);});
        cubeMaterialArray.push( new THREE.MeshLambertMaterial( { color:0xBFBFBF } ) );
       //back
        //texture=new THREE.ImageUtils.loadTexture("backs.png",{},function(){PIErenderer.render(PIEscene,PIEcamera);});
        cubeMaterialArray.push( new THREE.MeshLambertMaterial( {color:0x8B6914}) );
        //top
        //texture=new THREE.ImageUtils.loadTexture("top2.png",{},function(){PIErenderer.render(PIEscene,PIEcamera);});
        cubeMaterialArray.push( new THREE.MeshLambertMaterial( { color: 0xA52A2A } ) );
        //bottom
        cubeMaterialArray.push( new THREE.MeshLambertMaterial( { color: 0xffffff } ) );
        //right
        //texture=new THREE.ImageUtils.loadTexture("side3.jpg",{},function(){PIErenderer.render(PIEscene,PIEcamera);});
        cubeMaterialArray.push( new THREE.MeshLambertMaterial( { color:0x4d4d4d } ) );
        //left
        //texture=new THREE.ImageUtils.loadTexture("side2.png",{},function(){PIErenderer.render(PIEscene,PIEcamera);});
        cubeMaterialArray.push( new THREE.MeshLambertMaterial( { color:0x4d4d4d } ) );
        
        material = new THREE.MeshFaceMaterial( cubeMaterialArray );
        //material=new THREE.MeshBasicMaterial({color:0x4D4D4D});
        car1=new THREE.Mesh(geometry,material);
        car.add(car1);
        //car1.position.set(0,0,0);
        
        geometry=new THREE.BoxGeometry(0.55,0.1,0.2233);
        geometry.vertices[1].x=0.233;       
        geometry.vertices[0].x=0.233;
    var cubeMaterialArray = [];
        //front
        cubeMaterialArray.push( new THREE.MeshLambertMaterial( { color: 0xA52A2A } ) );
        //back
        cubeMaterialArray.push( new THREE.MeshLambertMaterial( { transparent:true } ) );
        //top
        cubeMaterialArray.push( new THREE.MeshLambertMaterial( { color: 0x4d4d4d } ) );
        //bottom
        cubeMaterialArray.push( new THREE.MeshLambertMaterial( { color: 0xff3333 } ) );
        //right
        cubeMaterialArray.push( new THREE.MeshLambertMaterial( { color: 0x4d4d4d } ) );
        //left
        cubeMaterialArray.push( new THREE.MeshLambertMaterial( { color: 0x4d4d4d } ) );
        material = new THREE.MeshFaceMaterial( cubeMaterialArray );
        //material=new THREE.MeshBasicMaterial({color:0x4D4D4D});
        car2=new THREE.Mesh(geometry,material);
        car.add(car2);
        //PIEaddElement(car2);
        car2.position.set(0.11,-0.050,0);
    
    geometry=new THREE.CircleGeometry(0.0666,15);
    texture=new THREE.ImageUtils.loadTexture("tyre1.jpg",{},function(){PIErenderer.render(PIEscene,PIEcamera);});
    material=new THREE.MeshBasicMaterial({map:texture});
    tyre_fr=new THREE.Mesh(geometry,material);
    tyre_br=new THREE.Mesh(geometry,material);
    tyre_bl=new THREE.Mesh(geometry,material);
    tyre_fl=new THREE.Mesh(geometry,material);
    car.add(tyre_br);
    car.add(tyre_fr);
    car.add(tyre_bl);
    car.add(tyre_fl);
    PIEscene.add(car); 
    tyre_fr.position.set(0.2,-0.09,0.15);
    tyre_fr.rotation.x=0*Math.PI;
    tyre_br.position.set(-0.05,-0.09,0.15);
    tyre_br.rotation.x=0*Math.PI;
     
    tyre_fl.position.set(0.2,-0.09,-0.17);
    tyre_fl.rotation.x=0*Math.PI;
    tyre_fl.rotation.y=Math.PI;
    tyre_bl.position.set(-0.05,-0.09,-0.17);
    tyre_bl.rotation.x=0*Math.PI;
    tyre_bl.rotation.y=Math.PI;
    car.position.set(-4.8,-1.1,0.3);
    car.rotation.x=0.05*Math.PI;
    car.rotation.y=-0.5*Math.PI;


}



function placePoles(){
    
    geometry=new THREE.BoxGeometry(0.025,0.3,0.01);
    material=new THREE.MeshBasicMaterial({color:0x4d4d4d});
var pos=-4.65
    for(var i=0;i<6;i++){
    poles[i]=new THREE.Mesh(geometry,material);
    PIEaddElement(poles[i]);
    poles[i].position.set(pos,-0.8,0.3);
    pos+=1.85;

        }
        
    geometry=new THREE.BoxGeometry(0.15,0.2,0.01);
    material=new THREE.MeshBasicMaterial({color:0x4d4d4d});
    pos=-4.65
    for(var i=0;i<6;i++){
        polesTop[i]=new THREE.Mesh(geometry,material);
        PIEaddElement(polesTop[i]);
        polesTop[i].position.set(pos,-0.6,0.3);
        pos+=1.85;

        }
    
}




function initialiseHelp()
{
    helpContent="";
    helpContent+=('<h2>Motion along a straight line</h2>');
    helpContent+=('<ul><li><p>The experiment illustrates the difference between uniform and non-uniform motion of a body(car) along straight line path.</p></li>');
    helpContent+=('<li><p>The distances travelled by a car for every consequtive 30 minutes is shown in a table on the right side.</p></li>');
    helpContent+=('<li><p>Students are asked to observe the value of distances travelled by car each time and choose whether the motion is uniform or non-uniform</p></li>');
    helpContent+=('<li><p>On selection of the type of motion(uniform or non-uniform), it is verified and result is displayed.</p></li>');
    helpContent+=('<li><p>After displaying the result, a small illustration using a small car is shown which travels the distances given in table on a straight path.</p></li>');
    helpContent+=('<li><p>At the end of each 30 min a checkpoint is marked with a cone.</p></li>');
    helpContent+=('</ul>');
    helpContent+=('<h2>Animation control</h2>');
    helpContent+=('<dl><dt>Start</dt><dd>Pressing the start button above directly displays the answer and illustration is shown too.</dd>');
    helpContent+=('<dt>Stop</dt><dd>Press the stop button to temporarily pause the animation</dd>');
    helpContent+=('<dt>Reset</dt><dd>Reset the experiment to bring everything to initial state with different values.</dd>');
    helpContent+=('<dt>Unifrom Motion Button</dt><dd>Click to select uniform motion and proceed for evaluation and illustration of answer</dd>');
    helpContent+=('<dt>Non-Unifrom Motion Button</dt><dd>Click to select non-uniform motion and proceed for evaluation and illustration of answer</dd>');
    PIEupdateHelp(helpContent);
}


function initialiseInfo()
{
    infoContent =  "";
    infoContent+=('<h2>Motion along a straight line</h2>');
    infoContent+=('<h3>Motion</h3>');
    infoContent+=('<p>A body is said to be in motion if it\'s position changes with respect to time.</p>');
    infoContent+=('<p>Motion is of two types with respect to distances covered in a time.<br/>1.Uniform Motion<br/>Non-Uniform Motion </p>');
    infoContent+=('<h3>Uniform Motion</h3>');
    infoContent+=('<p>Uniform motion is a type of motion in which a body covers equal distances in equal intervals of time.</p>');
    infoContent+=('<h3>Non-Uniform Motion</h3>');
    infoContent+=('<p>In non-uniform motion a body covers unequal distances in equal intervals of time i.e., the body need not cover equal distances in equal times.</p>');
    infoContent+=('<ul><li>If the body is in uniform motion velocity will not chnage at any point of time.</li>');
    infoContent+=('<li>Acceleration of the body which was in uniform motion will be zero.</li>');
    PIEupdateInfo(infoContent);
}


function placeCode(){
    var d=document.getElementsByTagName("div");
    d[0].insertAdjacentHTML("beforebegin",'<style>\
                                                    #poleLables{\
                                                    position:absolute;\
                                                    width:97%;\
                                                    height:30px;\
                                                    color:red;\
                                                    font-size:20px;\
                                                    display:inline-block;\
                                                    border:0px solid red;\
                                                    margin-top:28%;\
                                                    margin-left:;\
                                                    }\
                                                    #poleLables li{\
                                                    font-size:12px;\
                                                    position:absolute;\
                                                    height:30px;\
                                                    display:inline;\
                                                    width30px;\
                                                    border:0px solid green;\
                                                    }\
                                                    #pole1{\
                                                    margin-left:-1.3%;\
                                                    }\
                                                     #pole2 {\
                                                    margin-left:17%;\
                                                    }\
                                                     #pole3{\
                                                    margin-left:36%;\
                                                    }\
                                                     #pole4{\
                                                    margin-left:55%;\
                                                    }\
                                                     #pole5{\
                                                    margin-left:74%;\
                                                    }\
                                                     #pole6{\
                                                    margin-left:92%;\
                                                    margin-left:92%;\
                                                    }\
                                                    #container{\
                                                    position:absolute;\
                                                    width:45%;\
                                                    height:00px;\
                                                    color:;\
                                                    font-size:20px;\
                                                    display:inline;\
                                                    border:0px solid red ;\
                                                    margin-top:5%;\
                                                    margin-left:50%;\
                                                    }\
                                                    #hint{\
                                                    position:absolute;\
                                                    width:95%;\
                                                    height:40px;\
                                                    display:inline;\
                                                    margin:30% 0% 0% 2.5%;\
                                                    }\
                                                    table{\
                                                    width:100%;\
                                                    border:0px solid green;\
                                                    }\
                                                    td{\
                                                    border:1px solid blue;\
                                                    border-width:0px 1px 1px 0px;\
                                                    height:40px;\
                                                    TEXT-ALIGN:CENTER;\
                                                    }\
                                                    tr {\
                                                    }\
                                                    .row2 td{\
                                                    font-size:15px;\
                                                    }\
                                                    #row1col0,#row2col0,#row3col0 {\
                                                    width:120px;\
                                                    background:#4d4d4d;\
                                                    color:white;\
                                                    border:0px;\
                                                    }\
                                                    #row1col1,#row1col2,#row1col3,#row1col4,#row1col5{\
                                                    border:0px;\
                                                    }\
                                                    div.menu{\
                                                    position:absolute;\
                                                    width:45%;\
                                                    height:350px;\
                                                    display:inline;\
                                                    margin:2% 0% 0% 2%;\
                                                    border:0px solid red;\
                                                    }\
                                                    #eval1,#eval2{\
                                                    background:#90EE90;\
                                                    transition:all 0.8s;\
                                                    color:#4d4d4d;\
                                                    }\
                                                    #eval1:hover,#eval2:hover{\
                                                    background:#8A8AF4;\
                                                    transition:all 1.3s;\
                                                    color:white;\
                                                    }\
                                                    </style>');
    d[0].insertAdjacentHTML("beforebegin",'<div class="menu"><br\><p id="ques" style="font-size:16px;color:#4D4D4D;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><br/><ul style="font-size:19px;"><li style="display:inline;padding:15px 20px;float:left;margin-left:50px;" id="eval1" onclick="evalUni()">Uniform Motion</li><li id="eval2" style="display:inline;padding:15px 20px;float:right;margin-right:50px;" onclick="evalNUni()">Non-Uniform Motion</li><li id="justification"  style="display:inline-block;width:100%;height:90px;border:0px solid red;margin:-9% 0% 0% 110%;"></li></ul></div>');
    d[0].insertAdjacentHTML("beforebegin",'<p id="hint"></p><div id="container"><table><tr class="row2"><td id="row1col0">Time</td><td id="row2col1">30min</td><td id="row2col1">60min</td><td id="row2col2">90min</td><td id="row2col3">120min</td><td id="row2col4">150min</td></tr><tr class="row3"><td id="row1col0">Distance</td><td id="row3col1"></td><td id="row3col2"></td><td id="row3col3"></td><td id="row3col4"></td><td id="row3col5"></td></tr><tr class="row4"><td id="row1col0">Velocity</td><td id="row4col1"></td><td id="row4col2"></td><td id="row4col3"></td><td id="row4col4"></td><td id="row4col5"></td></tr></table></div>');
    d[0].insertAdjacentHTML("beforebegin",'<ul id="poleLables"><li id="pole1">0km</li><li id="pole2">100km</li><li id="pole3">200km</li><li id="pole4">300km</li><li id="pole5">400km</li><li id="pole6">500km</li></ul>');
    
  }
