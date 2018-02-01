//vars
//command vars
var E;
var M;
var F;
var labelE;
var labelM;
var labelF;

//Electrostatic vars
var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */
var count=0;

//electrostatic force variables
var P1;
var E1;
var orbit;
 
//Electron vars
var EX;
var EY;
var EZ;
var EV;
var ERadius;

//proton vars
var PX;
var PY;
var PZ;
var PRadius;

//nucleus
var N;   

//orbit vars
var OX;
var OY;
var OZ;
var ORadius;
var Otube;
var Oradseg;
var Otabseg;
var Oarc;

var BackE;

//magnetc vars

//magnet 1
var magnet11;
var magnet12;

var magnet21;
var magnet22;

var mx11;
var mx21;
var my11;
var my21;
var mx12;
var mx22;
var my12;
var my22;

var BackM;
var BackM1;

//freefall vars

var s1=0;

/* Room Variables */
var leftB;              /* Left Barrier */
var rightB;             /* Right Barrier */
var bottomB;            /* Bottom Barrier */
var topB;               /* Top Barrier */
var backB=-25.0;         /* Back Barrier */
var wallThickness;      /* Wall Thickness */

/* Room Objects */
var MyFloor;            /* Floor */
var MyCeiling;          /* Ceiling */
var MyBack;             /* Back */
var MyRight;            /* Right */
var MyLeft;             /* Left */

/* Ball variables */
var MyBall;             /* Ball Object */
var myBallRadius;       /* Radius */
var myBallX;            /* X Position */
var myBallY;            /* Y Position */
var myBallVY;           /* Y Velocity */
var myBallAY;           /* Y Acceleration */
var myBallZ;            /* Z Position for placing ball */

/* Parameters, Variables */
var gravityY;           /* Y component of Gravity in m/S2 */
var boundaryT;


function CommandE()
{
    loadE();
    if(F==1)
    {
        destroyF();
    }
    if(M==1)
    {
        destroyM();
    }
    E=1;
    s1=0;
}

function CommandM()
{
    loadM();
    if(F==1)
    {
        destroyF();
    }
    if(E==1)
    {
        destroyE();
    }
    M=1;
    s1=0;
}

function CommandF()
{
    loadF();
    if(E==1)
    {
        destroyE();
    }
    if(M==1)
    {
        destroyM();
    }
    F=1;
    s1=0;
}


function destroyE()
{
    BackE.visible=false;
    N.visible=false;
    E1.visible=false;
    P1.visible=false;
    Orbit.visible=false;
    E=0;
}

function loadE()
{
    resetExperimentE();
    BackE.visible=true;
    N.visible=true;
    E1.visible=true;
    P1.visible=true;
    Orbit.visible=true;

}

function destroyM()
{
    BackM.visible=false;
    
    magnet11.visible=false; 
    magnet12.visible=false; 
    magnet21.visible=false; 
    magnet22.visible=false; 
    M=0;
}

function loadM()
{
    resetExperimentM();
    BackM.visible=true;
    
    magnet11.visible=true;
    magnet12.visible=true;
    magnet21.visible=true;
    magnet22.visible=true;
}
function destroyF()
{
    MyBall.visible=false;
    MyFloor.visible=false;
    MyCeiling.visible=false;
    MyBack.visible=false;
    MyRight.visible=false;
    MyLeft.visible=false;
    F=0;
}

function loadF()
{
    resetExperimentF();
    MyBall.visible=true;
    MyFloor.visible=true;
    MyCeiling.visible=true;
    MyBack.visible=true;
    MyRight.visible=true;
    MyLeft.visible=true;
}

function start()
{
    s1=1;
}

function dragball(element, newpos)
{
    myBallX=newpos.x;
    myBallY=newpos.y;
    myBallZ=newpos.z;
    start();

    if (newpos.x < (leftB + myBallRadius))
    { 
        myBallX = (leftB + myBallRadius);
    }
    else if (newpos.x > (rightB - myBallRadius)) 
    {
        myBallX = (rightB - myBallRadius); 
    }
    if (newpos.y < (bottomB + myBallRadius)) 
    {
        myBallY = (bottomB + myBallRadius);
    }
    else if (newpos.y > (topB - myBallRadius))
    {
        myBallY = (topB  - myBallRadius);
    }

    MyBall.position.set(myBallX,myBallY,myBallZ);
    
}



function magnet11Drag(element, newpos)
{
    mx11 = newpos.x;
    
    my11 = newpos.y;

    if(mx11>30)
    {
        mx11=30;
    }

    if(mx11<-30)
    {
        mx11=-30;
    }

    if(my11!=my12)
    {
        my11=my12;
    }

    if((mx12-mx11)<14)
    {
        mx12=mx12-((mx12-mx11)-10);
    }
    magnet12.position.set(mx12,my12, -2.0);
    magnet11.position.set(mx11, my11, -2.0);
}

function magnet12Drag(element, newpos)
{
    mx12 = newpos.x;
    
    my12 = newpos.y;

    if(mx12>30)
    {
        mx12=30;
    }

    if(mx12<-30)
    {
        mx12=-30;
    }

    if(my12!=my11)
    {
        my12=my11;
    }

    if((mx12-mx11)<14)
    {
        mx11=mx11+((mx12-mx11)-10);
    }
    magnet12.position.set(mx12,my12, -2.0);
    magnet11.position.set(mx11, my11, -2.0);
}


function magnet21Drag(element, newpos)
{
    mx21 = newpos.x;
    
    my21 = newpos.y;

    if(mx21>23)
    {
        mx21=23;
    }

    if(mx21<-30)
    {
        mx21=-30;
    }

    if(my21!=my22)
    {
        my21=my22;
    }

    if((mx22-mx21)<14)
    {
        mx22=mx22+((mx22-mx21)-10);
    }
    magnet22.position.set(mx22,my22, -2.0);
    magnet21.position.set(mx21, my21, -2.0);    
}

function magnet22Drag(element, newpos)
{
    mx22 = newpos.x;
    
    my22 = newpos.y;

    if(mx22>30)
    {
        mx22=30;
    }

    if(mx22<-23)
    {
        mx22=-23;
    }

    if(my22!=my21)
    {
        my22=my21;
    }

    if((mx22-mx21)<14)
    {
        mx21=mx21-((mx22-mx21)-10);
    }
    magnet22.position.set(mx22,my22, -2.0);
    magnet21.position.set(mx21, my21, -2.0);    
}


//
var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Non-contact Forces Help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows magnets, an electron around a nucleus and a ball to illustrate non-contact forces.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls.</p>";
    helpContent = helpContent + "<h3>Experience the Non-Contact Forces</h3>";
    helpContent = helpContent + "<p>You can see the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Gravitational Force&nbsp;&nbsp;:&nbsp;Selecting this button will show the gravitational effect on the ball.</li>";
    helpContent = helpContent + "<li>Magnetic Force&nbsp;&nbsp;:&nbsp;Selecting this button will show the magnetic force on like and unlike poles.</li>";
    helpContent = helpContent + "<li>Electro-static Force&nbsp;&nbsp;:&nbsp;Selecting this button will show how an electron revolves around the nucleus due electro-static force.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>Initially you have to click on the START button.</p>";
    helpContent = helpContent + "<p>Once you do this you can select any of the three non-contact forces and see their effects.</p>";
    helpContent = helpContent + "<p>You can also reset the experiments all at once by clicking on the reset button .</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Non-contact forces experiment concepts</h2>"; 
    infoContent = infoContent + "<p>The force which acts on an object without coming physically in contact with it is called non-contact force. </br>The most familiar example of a non-contact force is weight. In contrast a contact </br>force is a force applied to a body by another body that is in contact with it.</p>";
    infoContent = infoContent + "<p>All four known fundamental interactions are non-contact forces:</br>Gravity, that thing that makes everything fall down.</br>Electromagnetism is the force that causes the interaction between electrically </br>charged particles; the areas in which this happens are called electromagnetic fields.</p>";
    infoContent = infoContent + "<p>nuclear force, a strong attractive force between nucleons in the atomic nucleus that holds the nucleus together.</p>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows magnets, an electron around a nucleus and a ball to illustrate non-contact forces.</p>";
    infoContent = infoContent + "<h3>Types of Non-contact Forces:</h3>";
    infoContent = infoContent + "<h2>Gravitational Force</h2>";
    infoContent = infoContent + "<p>The force of gravity is the force with which the earth, moon, or other massively large object attracts another object towards itself. By definition, this is the weight of the object. All objects upon earth experience a force of gravity which is directed downward towards the center of the earth. The force of gravity on earth is always equal to the weight of the object as found by the equation: F grav = m x g , where g = 9.8 m/s2 (on Earth) and m = mass (in kg) </p>";
    infoContent = infoContent + "<h2>Magnetic Force</h2>";
    infoContent = infoContent + "<p>Attraction or repulsion that arises between electrically charged particles because of their motion; the basic force responsible for the action of electric motors and the attraction of magnets for iron. Electric forces exist among stationary electric charges; both electric and magnetic forces exist among moving electric charges. The magnetic force between two moving charges may be described as the effect exerted upon either charge by a magnetic field created by the other.</p>";
    infoContent = infoContent + "<h2>Electrostatic Force</h2>";
    infoContent = infoContent + "<p>The force exerted by stationary objects bearing electric charge on other stationary objects bearing electric charge. If the charges are of the same sign, then the force is repulsive; if they are of opposite signs, the force is attractive. The strength of the force is described by Coulomb's law. Also called electrostatic force.</p>";   
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}


function initialiseScene()
{
    /* Initialise Scene Variables */
    mySceneTLX = -25.0;
    mySceneTLY = 25.0;
    mySceneBRX = 25.0;
    mySceneBRY = -25.0;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
}

function initialiseOtherVariables()
{
    E=1;
    F=0;
    M=0;

    labelE="Electrostatic Force";
    labelM="Magnetic Force";
    labelF="Freefall";

    s1=0;
}

function initialisevarsE()
{
    ERadius = 1.5;
    PRadius = 3.0;
    ORadius = 9.0;

 /*   ERadius = 1.0;
    PRadius = 2.0;
    ORadius = 6.0;
*/
    PX = 0.0;
    PY = 0.0;

    EX  = ORadius / Math.pow(2,0.5);
    EY  = ORadius / Math.pow(2,0.5);

    OX = 0.0;
    OY = 0.0;

    Otube = 0.1;
    Oradseg = 4;
    Otabseg = 64;
    Oarc =  -6.283185307179586;
}

function initialisevarsM()
{
    mx11=-15;
    mx12=15;
    my11=12;
    my12=12;

    mx21=-15;
    mx22=15;
    my21=-12;
    my22=-12;
    
}

function initialisevarsF()
{
    myBallRadius = 2;
    wallThickness = 3;

    gravityY = -9.8;

    leftB=mySceneTLX;
    rightB=mySceneBRX;
    bottomB=mySceneBRY;
    topB=mySceneTLY;
}

function GuiControlFunction(){
                f1 = new function(){
                    this.t1=true;
                }
                f2 = new function(){
                    this.t2=false;
                }
                f3 = new function(){
                    this.t3=false;
                }
                //
                        
                var datGUI = new dat.GUI();

                var a=datGUI.addFolder("");

                var objectFolder = datGUI.addFolder('Select Force');
                
                objectFolder.add(f1,'t1').name('Electrostatic Force').listen().onChange(function(value){
                    if(value == true){
                    	PIEstartAnimation()
                        CommandE();
                        f2.t2=false;
                        f3.t3=false;

                    }
                    else{
                    	PIEstartAnimation()
                        CommandE();
                        f1.t1=true;
                        f2.t2=false;
                        f3.t3=false;
                    }
                });
                objectFolder.add(f2,'t2').name('Magnetic Force').listen().onChange(function(value){
                    if(value == true){
                    	PIEstartAnimation()
                        CommandM();
                        f1.t1=false;
                        f3.t3=false;
                    }
                    else{   
                    	PIEstartAnimation()
                        CommandE();
                        f1.t1=true;
                        f2.t2=false;
                        f3.t3=false;
                    }
                });
                objectFolder.add(f3,'t3').name('Freefall').listen().onChange(function(value){
                    if(value == true){
                    	PIEstartAnimation()
                        CommandF();
                        f2.t2=false;
                        f1.t1=false;    
                    }
                    else{  
                    	PIEstartAnimation()
                        CommandE();
                        f1.t1=true;
                        f2.t2=false;
                        f3.t3=false;
                    }
                });
            }
            

function loadExperimentElements()
{
var geometry;
var material;
var loader;
var texture;
var check;

    PIEsetExperimentTitle("Non-Contact Forces");
    PIEsetDeveloperName("Apeksha Bodade");

    initialiseHelp();
    initialiseInfo();

    initialiseScene();

    initialiseOtherVariables();

    initialisevarsE();

 //   loader = new THREE.TextureLoader();
   // texture = loader.load('atom2.jpg');
    material = new THREE.MeshBasicMaterial({color:0xfdf6d5});
    geometry = new THREE.PlaneGeometry( window.innerWidth/13,window.innerHeight/13 );
    BackE  = new THREE.Mesh( geometry, material );
    BackE.position.set(myCenterX, myCenterY, -2.0);
    BackE.castShadow = false;
    BackE.receiveShadow = false;
    PIEaddElement(BackE);


    E1 = new THREE.Mesh(new THREE.SphereGeometry(ERadius, 100, 32), new THREE.MeshStandardMaterial({color:0x04001A}));
    E1.position.set(EX, EY, 0.0);
    E1.castShadow = false;
    E1.receiveShadow = false;

    N = new THREE.Mesh(new THREE.SphereGeometry(PRadius+1.5,100,32), new THREE.MeshStandardMaterial({color:"red", transparent: true, opacity: 0.2}));
    N.position.set(PX,PY,0.0);
    N.castShadow = false;
    N.receiveShadow = false;

    P1 = new THREE.Mesh(new THREE.SphereGeometry(PRadius,100,32), new THREE.MeshStandardMaterial({color:0x800000}));
    P1.position.set(PX,PY,0.0);
    P1.castShadow = false;
    P1.receiveShadow = false;

    Orbit = new THREE.Mesh(new THREE.TorusGeometry(ORadius, Otube, Oradseg, Otabseg, Oarc), new THREE.MeshStandardMaterial({color:"grey"}));   
    Orbit.castShadow = false;
    Orbit.receiveShadow = false;  

    PIEaddElement(P1);
    PIEaddElement(E1);
    PIEaddElement(N);
    PIEaddElement(Orbit);


    //CreateM()
    initialisevarsM();


    material = new THREE.MeshBasicMaterial({color:0xfdf6d5});
    geometry = new THREE.BoxGeometry( window.innerWidth/13 , window.innerHeight/13 , 0.1);
    BackM = new THREE.Mesh (geometry , material);
    BackM.position.set(myCenterX,myCenterY,-5.0);
    PIEaddElement(BackM);

  

    loader = new THREE.TextureLoader();
    texture = loader.load('m.jpg');
    material = new THREE.MeshLambertMaterial({map: texture});
    geometry = new THREE.BoxGeometry(  10, 4 , 4.0,2,2);
    magnet11  = new THREE.Mesh( geometry, material );
    magnet11.position.set(-15, 12, -2.0);

    loader = new THREE.TextureLoader();
    texture = loader.load('m.jpg');
    material = new THREE.MeshLambertMaterial({map: texture});
    geometry = new THREE.BoxGeometry(  10, 4 , 4.0,2,2)
    magnet12  = new THREE.Mesh( geometry, material );
    magnet12.position.set(15, 12, -2.0);

    loader = new THREE.TextureLoader();
    texture = loader.load('m1.jpg');
    material = new THREE.MeshLambertMaterial({map: texture});
    geometry = new THREE.BoxGeometry(  10, 4 , 4.0,2,2)
    magnet21  = new THREE.Mesh( geometry, material );
    magnet21.position.set(-15, -12, -2.0);

    loader = new THREE.TextureLoader();
    texture = loader.load('m.jpg');
    material = new THREE.MeshLambertMaterial({map: texture});
    geometry = new THREE.BoxGeometry(  10, 4 , 4.0,2,2)
    magnet22  = new THREE.Mesh( geometry, material );
    magnet22.position.set(15, -12, -2.0);

    PIEaddElement(magnet11);
    PIEaddElement(magnet12);
    PIEaddElement(magnet21);
    PIEaddElement(magnet22);

    PIEdragElement(magnet11);
    PIEsetDrag(magnet11, magnet11Drag);

    PIEdragElement(magnet12);
    PIEsetDrag(magnet12, magnet12Drag);

    PIEdragElement(magnet21);
    PIEsetDrag(magnet21, magnet21Drag);

    PIEdragElement(magnet22);
    PIEsetDrag(magnet22, magnet22Drag);

    
    destroyM();
    //CreateF();
    initialisevarsF();
    MyBall = new THREE.Mesh(new THREE.SphereGeometry(myBallRadius, 100, 32), new THREE.MeshStandardMaterial({color:"grey"}));
    MyBall.position.set(myBallX, myBallY, -2.0);
    MyBall.castShadow = true;
    MyBall.receiveShadow = true;

    PIEaddElement(MyBall);

    PIEdragElement(MyBall);
    PIEsetDrag(MyBall, dragball);

    geometry = new THREE.BoxGeometry( mySceneW * 2, wallThickness, 100);
    material = new THREE.MeshLambertMaterial( {color: "white"} );
    MyFloor  = new THREE.Mesh( geometry, material );
    MyFloor.position.set(myCenterX, bottomB - (wallThickness / 2), 0.0);
    MyFloor.receiveShadow = true;
    PIEaddElement(MyFloor);
    
    geometry = new THREE.BoxGeometry( mySceneW * 2, wallThickness, 100 );
    material = new THREE.MeshLambertMaterial( {color: "white"} );
    MyCeiling = new THREE.Mesh( geometry, material );
    MyCeiling.position.set(myCenterX, topB+(wallThickness/2), 0.0);
    MyCeiling.receiveShadow = true;
    PIEaddElement(MyCeiling);
    

    material = new THREE.MeshBasicMaterial({color: 0xFDF6D5});

    geometry = new THREE.BoxGeometry( wallThickness, mySceneH * 2, 100 );
    MyLeft = new THREE.Mesh( geometry, material );
    MyLeft.position.set(leftB-(wallThickness/2), myCenterY, 0.0);
    MyLeft.receiveShadow = true;
    PIEaddElement(MyLeft);
  
    material = new THREE.MeshBasicMaterial({color: 0xFDF6D5});
    geometry = new THREE.BoxGeometry( wallThickness, mySceneH * 2, 100 );
    MyRight = new THREE.Mesh( geometry, material );
    MyRight.position.set(rightB+(wallThickness/2), myCenterY, 0.0);
    MyRight.receiveShadow = true;
    PIEaddElement(MyRight);

    material = new THREE.MeshBasicMaterial({color: 0x84fba8});
    geometry = new THREE.BoxGeometry( mySceneW * 2, mySceneH * 2, wallThickness );
    MyBack = new THREE.Mesh( geometry, material );
    MyBack.position.set(myCenterX, myCenterY, backB - (wallThickness / 2));
    MyBack.receiveShadow = true;

    PIEaddElement(MyBack);  

    destroyF();

    GuiControlFunction();

    PIEresize();
    resetExperiment();
    resetExperimentE();
    resetExperimentM();
    resetExperimentF();
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);

}


function resetExperimentE()
{
    initialisevarsE();
    EX = ORadius / Math.pow(2,0.5);
    EY = ORadius / Math.pow(2,0.5);

    PX = myCenterX;
    PY = myCenterY;
       
    E1.position.set(EX, EY, 0.0);
    P1.position.set(PX,PY,0.0);

    BackE.position.set(myCenterX, myCenterY, -2.0);
    E1.position.set(EX, EY, 0.0);
    N.position.set(PX,PY,0.0);
    P1.position.set(PX,PY,0.0);
}



function resetExperimentM()
{
    /* initialise Other Variables */
    initialisevarsM();
    BackM.position.set(myCenterX,myCenterY,-5.0);

    magnet11.position.set(mx11,my11,-2.0);
    magnet12.position.set(mx12,my12,-2.0);
    magnet21.position.set(mx21,my21,-2.0);
    magnet22.position.set(mx22,my22,-2.0);
}



function resetExperimentF()
{
    s1=0;
    initialisevarsF();
    myBallX      = myCenterX;
    myBallY      = myCenterY;
    myBallVY     = 0.1;
    myBallAY     = gravityY;
    MyBall.position.set(myBallX, myBallY, -2.0);
    MyFloor.position.set(myCenterX, bottomB - (wallThickness / 2), 0.0);
    MyCeiling.position.set(myCenterX, topB+(wallThickness/2), 0.0);
    MyLeft.position.set(leftB-(wallThickness/2), myCenterY, 0.0);
    MyRight.position.set(rightB+(wallThickness/2), myCenterY, 0.0);
    MyBack.position.set(myCenterX, myCenterY, backB - (wallThickness / 2));
}


function resetExperiment()
{
    /* initialise Other Variables */
    initialiseOtherVariables();
    E=1;
    F=0;
    M=0;
    resetExperimentE();
    resetExperimentM();
    resetExperimentF();
    destroyF();
    destroyM();
    f1.t1=true;
    f2.t2=false;
    f3.t3=false;
    loadE();
    s1=0;

}


function updateExperimentElements(t, dt)
{
    var boundaryT;
    if(E==1)
    {
        updateE();
    }

    if(M==1)
    {
        updateM();
    }

    if((F==1)&&(s1==1))
    {
        updateF(t, dt);
    }

    boundaryT = dt / 1000.0;    /* convert to seconds */



}

function updateE()
{
    E1.position.x=(EX*Math.cos(0.009))-(EY*Math.sin(0.009));
    E1.position.y=(EX*Math.sin(0.009))+(EY*Math.cos(0.009));
    EX = E1.position.x;
    EY = E1.position.y;
    E1.position.set(EX,EY,0.0);
}



function updateM()
{
    
}

function updateF(t, dt)
{
var newX;           /* new X position of ball */
var newY;           /* new Y position of ball */
var newVX;          /* new X velocity of ball */
var newVY;          /* new Y velocity of ball */
var changeX;        /* X boundary hit */
var changeY;        /* Y boundary hit */
var boundaryT;      /* Boundary Event Time */
var tempT;          /* Temporary time */

    delete left1;

    myBallX = MyBall.position.x;
    myBallY = MyBall.position.y;
    myBallZ = MyBall.position.z;

    changeY   = 1;
    boundaryT = dt / 1000.0;    
    newY = myBallY + myBallVY * boundaryT + 0.5 * myBallAY * boundaryT * boundaryT;
    if (newY > (bottomB + myBallRadius))
    {
        myBallY=newY;
    }
    myBallVY = (myBallVY + myBallAY * boundaryT) * changeY;
    myBallAY = myBallAY;
    MyBall.position.set(myBallX, myBallY, -2.0);
}

