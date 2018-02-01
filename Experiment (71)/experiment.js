var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Kinetic Energy Problem help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows a Cart on a table subjected to force over certain distance.Cart stops either after hitting the wal or force is removed (after certain distance). </p>";
    helpContent = helpContent + "<p>Please use reset button after end of animation (or after clicking stop) provided to left of start/stop button.</p>";
    
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to five sliders.</p>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Mass&nbsp;&nbsp;:&nbsp;Controls the Mass of the Cart.</li>";
    helpContent = helpContent + "<li>ForceApplied&nbsp;&nbsp;:&nbsp;Controls the applied force value on the Cart.</li>";
    helpContent = helpContent + "<li>ForceDistance&nbsp;:&nbsp;Controls the distance of force applied on the Cart.</li>";
    helpContent = helpContent + "<li>Initial Velocity&nbsp;:&nbsp;Controls the initial velocity of the Cart.</li>";
    helpContent = helpContent + "<li>Yellow Arrow&nbsp;:&nbsp;Shows the Force Direction.</li>";
    helpContent = helpContent + "<li>Red Arrow&nbsp;:&nbsp;Shows the Velocity Direction.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>You also have two additional text input to enter accleration of cart and final velocity of cart.Calculate by using formulae</p>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the Cart will move around obeyng the laws of physics.</p>";
    helpContent = helpContent + "<p>The right hand panel now shows the values of the four experiment variables during animation.</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>X&nbsp;&nbsp;:&nbsp;Shows the X position of the Cart.</li>";
    helpContent = helpContent + "<li>Mass&nbsp;&nbsp;:&nbsp;Shows the Mass of the Cart.</li>";
    helpContent = helpContent + "<li>ForceApplied&nbsp;:&nbsp;Shows the force applied on the Cart.</li>";
    helpContent = helpContent + "<li>ForceDistance&nbsp;:&nbsp;Shows the distance for which force applied on the Cart.</li>";
    helpContent = helpContent + "<li>InitialVelX&nbsp;:&nbsp;Shows the initial velocity of the Cart.</li>";
    
    helpContent = helpContent + "<li>Distance&nbsp;:&nbsp;Shows the distance travelled by the Cart.</li>";
    helpContent = helpContent + "<li>Displacement&nbsp;:&nbsp;Shows the displacement covered by the Cart.</li>";
    helpContent = helpContent + "<li>YourAx&nbsp;:&nbsp;Shows the accleration of the Cart calculated and given by user (you).</li>";
    helpContent = helpContent + "<li>CorrectAX&nbsp;:&nbsp;Shows the Correct answer for accleration of the Cart.</li>";
    helpContent = helpContent + "<li>YourVX&nbsp;:&nbsp;Shows the final velocity of the Cart calculated and given by user (you).</li>";
    helpContent = helpContent + "<li>CorrectVX&nbsp;:&nbsp;Shows the correct answer for final velocity of the Cart.</li>";
    helpContent = helpContent + "<li>Red Arrow&nbsp;:&nbsp;Shows the Velocity Direction, Cart movement Direction.</li>";
    helpContent = helpContent + "<li>Yellow Arrow&nbsp;:&nbsp;Shows the Force Applied Direction.</li>";

    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animaion by uing the speed control buttons</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Kinetic Energy Problem Experiment</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<h3>Process</h3>";
    infoContent = infoContent + "<p>When the cart collides with a table end its motion will be stopped.</p>";
    infoContent = infoContent + "<p>When the force is aplied on object with some mass (the cart) moves with the distance specified with initial velocity for some time.</p>";
    infoContent = infoContent + "<h3>Formulae</h3>";
    infoContent = infoContent + "<p>Condider Mass be M , Initial Velocity be U, displacement be S, Accelration be A, Force applied be F, Time be T.</p>";
    infoContent = infoContent + "<li>V = U + A*T</li>";
    infoContent = infoContent + "<li>S = U*T + 0.5*A*T*T</li>";
    infoContent = infoContent + "<li>V*V - U*U = 2*A*S</li>";
    infoContent = infoContent + "<li>F = M*A</li>";
    infoContent = infoContent + "<p>We can find find the values of different variables based on occured conditions</p>";
    infoContent = infoContent + "<p>Please note that the the value of force can be negative indicating that it (force) is in opposite to the direction of movement of object.</p>";
    infoContent = infoContent + "<p>At some situations we will get acceleration value in negative indication that that object is slowing down.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}


function loadExperimentElements () {

   PIEsetExperimentTitle("Kinetic Energy Problem");
   PIEsetDeveloperName("Dattatreya Garimella");

   PIErenderer.setClearColor(0xf0f0f0, 1);
   PIEsetAreaOfInterest(-40,15,40,-7);
   initializeControls();
   forceArrowHelper = new THREE.Object3D();
   velocityArrowHelper = new THREE.Object3D();
   PIEaddElement(forceArrowHelper);
   PIEaddElement(velocityArrowHelper);
   createCart();

   var floor = new THREE.Mesh(new THREE.PlaneGeometry(50,50,1), new THREE.MeshPhongMaterial({color:0xF5986E}));
   floor.rotation.x = -0.5* Math.PI;
   floor.castShadow = false;
   floor.receiveShadow = false;
   floor.position.y = -7;
   PIEaddElement(floor);

   var base = new THREE.Mesh(new THREE.BoxGeometry(30,0.6,5), new THREE.MeshBasicMaterial({color:0x212121}));
   PIEaddElement(base);
   base.position.y = -1.6;

   var leftEnd = new THREE.Mesh(new THREE.BoxGeometry(0.6,8,5.6), new THREE.MeshLambertMaterial({color:0x1A237E}));
   PIEaddElement(leftEnd);
   leftEnd.position.y = -3.8;
   leftEnd.position.x = -15.3;

   var rightEnd = new THREE.Mesh(new THREE.BoxGeometry(0.6,8,5.6), new THREE.MeshBasicMaterial({color:0x1A237E}));
   PIEaddElement(rightEnd);
   rightEnd.position.y = -3.8;
   rightEnd.position.x = 15.3;

   var dir = new THREE.Vector3( 1,0,0 );
   dir.normalize();
   var origin = new THREE.Vector3( 0,0,0);
   var origin1 = new THREE.Vector3( 0,0,0);
   var origin2 = new THREE.Vector3( 0,0,0);
   var length = 1;
   var hex = 0xffff00;
    //console.log("before Group");
     //arrowHelper = new THREE.ArrowHelper( dir, origin, 1.5, hex,0.5,0.3 );
     forceArrow = new THREE.ArrowHelper( dir, origin1, 4.5, 0x1A237E,0.9,0.6 );
     
     forceArrowHelper.add(forceArrow);
     velocityArrow = new THREE.ArrowHelper( dir, origin2, 3.5, 0xff0000,0.9,0.6 );
     forceArrow.rotation.y = 0.1;
     velocityArrow.rotation.y = 0.5;
     forceArrow.line.material.linewidth = 3.5;
     velocityArrow.line.material.linewidth = 3.5;
     velocityArrowHelper.add(velocityArrow);
    //PIEaddElement(arrowHelper);
    velocityArrowDirection = 1;
    forceArrowDirection = 1;
    //myCartFLWheel.add(arrowHelper);
    // myCartFLWheel.add(forceArrow);
    // myCartFLWheel.add(velocityArrow);

    
    console.log(PIEcamera.position);
    //PIEsetAreaOfInterest(30,10,35,20);
    PIEsetAreaOfInterest(-20,20,65,-7);
    PIEturnCamera(0,0,0);

    initialiseInfo();
    initialiseHelp();
    initializeVariables();
}


var cartMass,forceApplied,forceDistance,cartUX, cartAcc, cartVX, forceArrowHelper, velocityArrowHelper;

var leftB, rightB;


function handleMass(newValue)
{
    cartMass = newValue;
    disposeMass();
    addMass(newValue);
    distTravelled=0;
    dispCovered =0;
    //cartGroup.position.set(0,0,0);
    // myCartDistance=0;
    // myCartDisplacement=0;
    // myCart.scale.set(1,1 + myCartMass/10,1);
    // myCart.position.y = tableSurfaceY + myCartHalfLength + myCartMass*0.03 + 0.1 ;
    PIErender();
}



function handleForceVal(newValue)
{
    forceApplied = newValue;
    distTravelled=0;
    dispCovered =0;
    // myCartDistance=0;
    // myCartDisplacement=0;
    if (forceApplied < 0 && forceArrowDirection == 1)
    {
        forceArrow.rotation.y = Math.PI;
        forceArrowDirection = -1;
    }

    if ( forceApplied > 0 && forceArrowDirection == -1)
    {
        forceArrow.rotation.y = 0;
        forceArrowDirection = 1;
    }
    forceArrow.scale.set(1,Math.abs(forceApplied/6),1);
    PIErender();
}


function handleForceDist(newValue)
{
    forceDistance = newValue;
    // myCartDistance=0;
    // myCartDisplacement=0;
    distTravelled=0;
    dispCovered =0;
}



function handleInitialVelX(newValue)
{
    cartVX = newValue;
    distTravelled=0;
    dispCovered =0;
    // myCartVX = myCartUX;
    // myCartDistance=0;
    // myCartDisplacement=0;
    if (cartVX < 0 && velocityArrowDirection == 1)
    {
        velocityArrow.rotation.y = Math.PI;
        velocityArrowDirection = -1;
    }

    if ( cartVX > 0 && velocityArrowDirection == -1)
    {
        velocityArrow.rotation.y = 0;
        velocityArrowDirection = 1
    }

    velocityArrow.scale.set(1,Math.abs(cartVX/10),1);
    PIErender();
}
var ans_AX,ans_VX;
function handleInputTextAX(newValue)
{
    ans_AX = PIEgetInputText("Enter AX");
}

function handleInputTextVX(newValue)
{
    ans_VX = PIEgetInputText("Enter finalVX");
}

var forceArrowDirection, velocityArrowDirection;

function initializeControls () {

    PIEaddInputSlider("mass",1,handleMass,1,5,1);
    PIEaddInputSlider("forceVal",1,handleForceVal,-10,10,0.1);
    PIEaddInputSlider("forceDist",15,handleForceDist,0,20,0.1);
    PIEaddInputSlider("initialVelX",1,handleInitialVelX,-5,5,0.1);
    PIEaddInputText("Enter AX","",handleInputTextAX);
    PIEaddInputText("Enter finalVX","",handleInputTextVX);

    //PIEaddDisplayText("PosX", 0.1);
    PIEaddDisplayText("mass",0.1);
    PIEaddDisplayText("forceVal",0.1);
    PIEaddDisplayText("forceDist",0.1);
    
    PIEaddDisplayText("DistTravelled",0.1);
    //PIEaddDisplayText("Displacement", 0.1);

    
    PIEaddDisplayText("initialVelX",0.1);
    PIEaddDisplayText("VelX", 0.1);
    PIEaddDisplayText("Your finalVX",0.2);

    PIEaddDisplayText("Your AX",0.1);
    PIEaddDisplayText("Correct AX",0.1);


}
var cartGroup, distTravelled,first, dispCovered, forceArrow, velocityArrow;

function initializeVariables () {


    dispCovered =0;
    first = 0;
    forceDistance = 15;
    distTravelled = 0;
    
    leftB = -13;
    rightB = 13;
    cartVX=1;
    cartMass=1;
    forceApplied=1;
    cartGroup.position.set(0,0,0);
    disposeMass(1);
    addMass(1);
    forceArrow.scale.set(1,Math.abs(1/6),1);
    velocityArrow.scale.set(1,Math.abs(1/10),1);
    velocityArrowHelper.position.x = cartGroup.position.x;
    forceArrowHelper.position.x = cartGroup.position.x;
}


function createCart () {

    cartGroup = new THREE.Group();

    var wheelTireGeom = new THREE.CylinderGeometry(0.6,0.6,0.3);
    for ( var i = 0; i < wheelTireGeom.faces.length; i ++ ) {
        if( i%2 == 0)
        {
            wheelTireGeom.faces[ i ].color.set (0xBDBDBD); 
        }

        else
        {
            wheelTireGeom.faces[ i ].color.set(0x1B5E20); 
        }
    }

    var wheelTireMat = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors } ); 
    var wheelTire = new THREE.Mesh(wheelTireGeom, wheelTireMat);
    wheelTire.position.y = 1
    wheelTire.rotation.x = -0.5*Math.PI;
    //wheelTire.rotation.z = -0.5*Math.PI;

    //cartGroup.add(wheelTire);
    var wheelTireFL = wheelTire.clone();
    wheelTireFL.position.set(1.5, -0.8, 1.7);
    wheelTireFL.rotation.x = Math.PI/2;
    cartGroup.add(wheelTireFL);

    var wheelTireFR = wheelTire.clone();
    wheelTireFR.position.set(-1.5, -0.8, 1.7);
    wheelTireFR.rotation.x = Math.PI/2;
    cartGroup.add(wheelTireFR);

    var wheelTireBL = wheelTire.clone();
    wheelTireBL.position.set(1.5, -0.8, -1.7);
    wheelTireBL.rotation.x = Math.PI/2;
    cartGroup.add(wheelTireBL);

    var wheelTireBR = wheelTire.clone();
    wheelTireBR.position.set(-1.5, -0.8, -1.7);
    wheelTireBR.rotation.x = Math.PI/2;
    cartGroup.add(wheelTireBR);

    // var bodyMat = new THREE.MeshPhongMaterial({color:0x212121, shading:THREE.FlatShading});
    // var bodyGeom = new THREE.BoxGeometry(4, 0.5, 4, 1, 1, 1);
    // var body = new THREE.Mesh(bodyGeom, bodyMat);
    // cartGroup.add(body);
    PIEaddElement(cartGroup);
    

}
var massBox = [];
function disposeMass () {

    for (var i = massBox.length - 1; i >= 0; i--) {
        PIEremoveElement(massBox[i]);
    };

    massBox=[];

}

var massColor = [ 0x1B5E20,0x66BB6A];

function addMass (mass) {
    for (var i = 0; i<mass;i++) {
        var bodyMat = new THREE.MeshPhongMaterial({color:massColor[i%2], shading:THREE.FlatShading});
        var bodyGeom = new THREE.BoxGeometry(4, 0.5, 4, 1, 1, 1);
        var body = new THREE.Mesh(bodyGeom, bodyMat);
        body.castShadow = false;
        body.receiveShadow = false;
        body.position.x = cartGroup.position.x;
        massBox.push(body);
        PIEaddElement(massBox[i]);
        massBox[i].position.y = 0.5*i;
    };

    forceArrowHelper.position.y = 0.5*i + 3;
    velocityArrowHelper.position.y = 0.5*i + 1.5;
}


function resetExperiment () {

    initializeVariables();
    PIEchangeInputSlider("mass",1);
    PIEchangeInputSlider("forceVal",1);
    PIEchangeInputSlider("forceDist",15);
    PIEchangeInputSlider("initialVelX",1);
    PIEchangeInputText("Enter AX","");
    PIEchangeInputText("Enter finalVX","");
    if (forceApplied < 0 && forceArrowDirection == 1)
    {
        forceArrow.rotation.y = Math.PI;
        forceArrowDirection = -1;
    }

    if ( forceApplied > 0 && forceArrowDirection == -1)
    {
        forceArrow.rotation.y = 0;
        forceArrowDirection = 1
    }
    if (cartVX < 0 && velocityArrowDirection == 1)
    {
        velocityArrow.rotation.y = Math.PI;
        velocityArrowDirection = -1;
    }

    if ( cartVX > 0 && velocityArrowDirection == -1)
    {
        velocityArrow.rotation.y = 0;
        velocityArrowDirection = 1
    }


}


function updateExperimentElements (t,dt) {

    if(first == 0 && t>0)
    {
        cartUX = cartVX;        /* to note initial velocity */
        first = 1;    
        console.log("Nope");
    }

    var newX, boundaryT, changeX = 1;
    boundaryT = dt/1000;
    cartAcc = forceApplied/cartMass;
    var oldX = cartGroup.position.x;

    var tempT;

    newX = oldX +  cartVX*boundaryT + 0.5*(cartAcc)*(boundaryT)*(boundaryT);
    if(newX > rightB || newX < leftB)
    {
        if (newX > rightB)
        {
            if( cartAcc == 0)
            {
                tempT = (rightB - oldX)/cartVX;
            }
            else
            {
                var v = Math.sqrt( cartVX*cartVX +  2*cartAcc*(rightB - oldX));
                tempT = (v - cartVX)/cartAcc;
            }
        }

        if ( newX < leftB)
        {
            if( cartAcc == 0)
            {
                tempT = (leftB - oldX)/cartVX;
            }
            else
            {
                var v = Math.sqrt( cartVX*cartVX +  2*cartAcc*(leftB - oldX));
                tempT = (-v - cartVX)/cartAcc;
            }


        }

        if (tempT == boundaryT) { changeX = -1; }
        if (tempT < boundaryT)  {  boundaryT = tempT; }
    }

    newX = oldX +  cartVX*boundaryT + 0.5*(cartAcc)*(boundaryT)*(boundaryT);

    var tempD = Math.abs(oldX - newX);

    if ( distTravelled + tempD > forceDistance)
    {
        if (cartAcc == 0) 
        { 
            tempT = (forceDistance - distTravelled) / cartVX; 
        }
        else 
        {
            if ( cartVX >= 0)
            {
                if (cartAcc == 0) { tempT = (forceDistance - distTravelled) / cartVX; }
                else
                {
                    var v = Math.sqrt( cartVX*cartVX +  2*cartAcc*(forceDistance- distTravelled));
                    tempT = (v - cartVX)/cartAcc;
                }

            }
            else
            {
                if (cartAcc == 0) { tempTD = (forceDistance - distTravelled) / myCartVX; }
                else
                {
                    var v = Math.sqrt( cartVX*cartVX +  2*cartAcc*(forceDistance- distTravelled));
                    tempT = (-v - cartVX)/cartAcc;
                }            
            }


        }
        if (tempT == boundaryT) { changeX = -1; }
        if (tempT < boundaryT)  {  boundaryT = tempT; }

    }

    if ( boundaryT >=0.01)
    {
        newX = oldX +  cartVX*boundaryT + 0.5*(cartAcc)*(boundaryT)*(boundaryT);
        for (var i = massBox.length - 1; i >= 0; i--) {
           massBox[i].position.x = newX;
       };
       distTravelled = distTravelled + Math.abs(oldX - newX);
       console.log(cartUX, cartVX);
       cartGroup.position.x = newX;
       cartVX += cartAcc*boundaryT;

       for(var i=0;i<4;i++)
       {
        cartGroup.children[i].rotation.y -= (newX - oldX)/0.5;
    }
    if (forceApplied < 0 && forceArrowDirection == 1)
    {
        forceArrow.rotation.y = Math.PI;
        forceArrowDirection = -1;
    }

    if ( forceApplied > 0 && forceArrowDirection == -1)
    {
        forceArrow.rotation.y = 0;
        forceArrowDirection = 1
    }
    if (cartVX < 0 && velocityArrowDirection == 1)
    {
        velocityArrow.rotation.y = Math.PI;
        velocityArrowDirection = -1;
    }

    if ( cartVX > 0 && velocityArrowDirection == -1)
    {
        velocityArrow.rotation.y = 0;
        velocityArrowDirection = 1
    }
    velocityArrow.scale.set(1, Math.abs(cartVX/10),1);
    forceArrow.scale.set(1,Math.abs(forceApplied/6),1)
    velocityArrowHelper.position.x = cartGroup.position.x;
    forceArrowHelper.position.x = cartGroup.position.x;
    PIEchangeDisplayText("mass", cartMass);
    PIEchangeDisplayText("forceVal",forceApplied);
    PIEchangeDisplayText("forceDist", forceDistance);

    PIEchangeDisplayText("DistTravelled",distTravelled);
   //PIEchangeDisplayText("Displacement",myCartDisplacement);

   PIEchangeDisplayText("initialVelX",cartUX);
   PIEchangeDisplayText("VelX", cartVX);
   PIEchangeDisplayText("Your finalVX",ans_VX);


   PIEchangeDisplayText("Correct AX",cartAcc);
   PIEchangeDisplayText("Your AX",ans_AX);
}

boundaryT *= 1000;
if (boundaryT < dt) { PIEadjustAnimationTime(dt - boundaryT); }


}