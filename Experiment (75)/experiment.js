var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */
var Switch;
var dir;
var helpContent;
var OrbControls;
var lamp;
var b1;
var b2;
var cylinder;
var frustum;
var base;
var lens;
var charge;
var flag;
var objects=[];
var raycaster= new THREE.Raycaster();
var mouse = new THREE.Vector2();
var glow;
var lampBulb;
var frustum2;
function initialiseHelp(){
    helpContent="";
    helpContent = helpContent + "<h2>Electric flashlight</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows the working of a flashlight.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The Off state</h3>";
    helpContent = helpContent + "<p>The initial state is the off state. In this state. You have access to one object.</p>";
    helpContent = helpContent + "<li>Switch &nbsp;&nbsp;:&nbsp;Clicking the Switch or the start button would change this state to on state.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<h3>The On state</h3>";
    helpContent = helpContent + "<p>In the on state, the bulb will glow and a moving charge would show the direction of the current.</p>";
    helpContent = helpContent + "<p>In this state. You have access to one object.</p>";
    helpContent = helpContent + "<li>Switch &nbsp;&nbsp;:&nbsp;Clicking the Switch or the stop button would change this state to off state.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play button on the top line.</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}
var infoContent;
function initialiseInfo(){
    infoContent =  "";
    infoContent = infoContent + "<h2>Electric flashlight experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows an electric circuit with a bulb, two batteries, a switch and connecting wires.</p>";
    infoContent = infoContent + "<p>This is the inner structure of an Electric Flashlight.</p>";
    infoContent = infoContent + "<h3>Current Flow</h3>";
    infoContent = infoContent + "<p>Current flows from +ve terminal of the battery to -ve terminal given that they are connected.</p>";
    infoContent = infoContent + "<p>The switch is used to control the connectivity of the circuit.</p>";
    infoContent = infoContent + "<p>When the switch is closed, current flows and the bulb glows.</p>";
    infoContent = infoContent + "<p>When it is open, no current flows and the bulb does not glow.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}
function initialiseScene(){
    /* Initialise Scene Variables */
    mySceneTLX = -10;
    mySceneTLY = 7;
    mySceneBRX = 10;
    mySceneBRY = -7;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
    PIErenderer.shadowMap.Enabled = false;
}
function hpointer(){

}
function onDocumentTouchStart( event ) {
    PIErender();
        event.clientX = event.touches[0].clientX;
        event.clientY = event.touches[0].clientY;
        onDocumentMouseDown(event);
}
function onDocumentMouseDown( event ) {
    PIErender();
    event.preventDefault();
    mouse.x = ( event.clientX / PIErenderer.domElement.clientWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / PIErenderer.domElement.clientHeight ) * 2 + 1;
    raycaster.setFromCamera( mouse, PIEcamera );
    var intersects = raycaster.intersectObjects( objects ); 
    if ( intersects.length > 0 ) {
        if(!flag){
            PIEstartAnimation();
            startAnimation();
        }
        else{
            PIEstopAnimation();
            stopAnimation();
        }
    }
    PIErender();
}
function pauseAnimation(){
    OrbControls.dispose();
}
function resumeAnimation(){
    OrbControls = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);
}
function stopAnimation(){
    frustum2.material.opacity=0;
    lens.material.color.set("white");
    lens.material.opacity=0.5;
    flag=0;dir=1;
    lampBulb.material.color.set(0x455A64);
    charge.position.set(2.1,0,0);
    Switch.position.set(0 ,1.45,0);
    OrbControls.dispose();
    PIErender();
}
function startAnimation(){
    frustum2.material.opacity=0.5;
    PIEcamera.rotation.z=Math.PI/2;
    lens.material.color.set("yellow");
    lens.material.opacity=0.8;
    flag=1;
    lampBulb.material.color.set("yellow");
    Switch.position.set(1 ,1.45,0);
    OrbControls = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);
}
function resetExperiment(){
    PIEsetAreaOfInterest(mySceneTLX,mySceneTLY,mySceneBRX,mySceneBRY);
    PIErender();
    stopAnimation();
}
function addWire(x,y,l,ang,open){
    var wire=new THREE.Mesh(
        new THREE.CylinderGeometry(0.08,0.08,l,50,1,open), 
        new THREE.MeshLambertMaterial({color: 0x3d2611})
        );
    wire.position.x=x;
    wire.position.y=y;
    wire.rotation.z+=ang;
    PIEaddElement(wire);
}
function declareElements(){
    //lens starts
    lens = new THREE.Mesh(
        new THREE.CylinderGeometry(3,3,1,20,20),
        new THREE.MeshStandardMaterial({color: 0xffffff,transparent: true,opacity: 0.5})
        );
    //lens ends
    //lamp
    lamp = new THREE.CylinderGeometry(0.8, 0.8, 1.3, 32);
    lamp = new THREE.Mesh(lamp, new THREE.MeshPhongMaterial({color: "gray"}));
    lampBulb = new THREE.SphereGeometry(1.8, 32, 24);
    lampBulb.translate(0, 1.9, 0);
    lampBulb = new THREE.Mesh(lampBulb, new THREE.MeshLambertMaterial({color: 0x455A64}));
    lamp.add(lampBulb);
    var hplate = new THREE.CylinderGeometry(0.3,0.3,0.3,50);
    hplate.translate(0,-0.7,0);
    hplate=new THREE.Mesh(hplate, new THREE.MeshLambertMaterial({color: 0x212121}));
    lamp.add(hplate);
    var vplate = new THREE.CylinderGeometry(0.3,0.3,0.3,50);
    vplate.rotateZ(Math.PI/2);
    vplate.translate(0.9,-0.27,0);
    vplate=new THREE.Mesh(vplate, new THREE.MeshLambertMaterial({color: 0x212121}));
    lamp.add(vplate);
    //lamp ends
    //frustum starts
    frustum = new THREE.Mesh(
        new THREE.CylinderGeometry(3,1.5,5,20,20,true), 
        new THREE.MeshStandardMaterial({color: 0x8B4513,transparent: true,opacity: 0.5})
        );
    frustum2 = new THREE.Mesh(
        new THREE.CylinderGeometry(5,3,5,20,20), 
        new THREE.MeshStandardMaterial({color: "yellow",transparent: true,opacity: 0.5})
        );
    //frustum ends
    //cylinder starts
    cylinder = new THREE.Mesh(
        new THREE.CylinderGeometry(1.5,1.5,10.5,20,20),
        new THREE.MeshStandardMaterial({color: 0x8B4513,transparent: true,opacity: 0.5})
        );
    //cylinder ends

    //battery1 starts
    var x = document.createElement("canvas");
    var xc = x.getContext("2d");
    x.width = x.height = 128;
    xc.shadowColor = "#000";
    xc.shadowBlur = 7;
    xc.fillStyle = "orange";
    xc.font = "30pt arial bold";
    xc.fillText('-', 10, 64);
    var xm = new THREE.MeshBasicMaterial({ map: new THREE.Texture(x),color: 0xD50404});
    xm.map.needsUpdate = true;
    //Battery+ve starts
    var x1 = document.createElement("canvas");
    var xc1 = x1.getContext("2d");
    x1.width = x1.height = 128;
    xc1.shadowColor = "#000";
    xc1.shadowBlur = 7;
    xc1.fillStyle = "orange";
    xc1.font = "30pt arial bold";
    xc1.fillText('-', 10, 64);
    var xm1 = new THREE.MeshStandardMaterial({ map: new THREE.Texture(x1),color: 0xD50404});
    xm1.map.needsUpdate = true;
    var gc5 = new THREE.CylinderGeometry(1,1,2,50);
    b1 = new THREE.Mesh(gc5, xm1);
    b1.rotation.z-=Math.PI/2;
    b1.rotation.x-=2*Math.PI/8;
    //Battery+ve ends

    //Battery-ve starts
    var pgem2=new THREE.CylinderGeometry(1,1,0.2,50);
    pgem2.translate(0,-1.1,0);
    b1.add(new THREE.Mesh(pgem2, new THREE.MeshLambertMaterial({color: 0x212121})));
    //Battery+ve plate starts
    var pgem1=new THREE.CylinderGeometry(0.4,0.4,0.3,50);
    pgem1.translate(0,3.15,0);
    b1.add(new THREE.Mesh(pgem1, new THREE.MeshLambertMaterial({color: 0x212121})));
    //Battery+ve plate ends
    var x2 = document.createElement("canvas");
    var xc2 = x2.getContext("2d");
    x2.width = x2.height = 128;
    xc2.shadowColor = "#000";
    xc2.shadowBlur = 7;
    xc2.fillStyle = "orange";
    xc2.fillRect(0, 0, 128, 128);
    xc2.fillStyle = "black";
    xc2.font = "30pt arial bold";
    xc2.fillText('+', 10, 64);
    var xm2 = new THREE.MeshStandardMaterial({ map: new THREE.Texture(x2),color: 0xD50404});
    xm2.map.needsUpdate = true;
    var gbn = new THREE.CylinderGeometry(1,1,2,50);
    gbn.translate(0,2,0);
    var bn = new THREE.Mesh(gbn, xm2);
    bn.rotation.y-=Math.PI/14;
    b1.add(bn);
    //Battery-ve ends
    //battery1 ends
    //battery2 starts
    b2 = new THREE.Mesh(gc5, xm1);
    b2.add(new THREE.Mesh(pgem1, new THREE.MeshLambertMaterial({color: 0x212121})));
    b2.add(new THREE.Mesh(pgem2, new THREE.MeshLambertMaterial({color: 0x212121})));
    var bp2=new THREE.Mesh(gbn, xm2)
    b2.add(bp2);
    b2.rotation.z-=Math.PI/2;
    b2.rotation.x-=2*Math.PI/8;
    bp2.rotation.y-=Math.PI/14;
    //battery2 ends

    //base starts
    base=new THREE.Mesh(
        new THREE.CylinderGeometry(1.4,1.4,0.3,20,20),
        new THREE.MeshLambertMaterial({color: 0x212121})
        );
    //base ends
    //Switch starts
    Switch = new THREE.Mesh(
        new THREE.BoxGeometry(0.7,2,1),
        new THREE.MeshBasicMaterial({color: 0x2E1703})
        );
    //Switch ends
    //Charge Starts
    charge = new THREE.Mesh(
        new THREE.SphereGeometry(0.2,50,50),
        new THREE.MeshLambertMaterial({color: "red"})
        );
    //Charge Ends
    PIEaddElement(frustum2);
}
function positionElements(){
     //positions
    lens.position.set(8,0,0);
    lens.rotation.z+=Math.PI/2;
    lamp.position.set(3.5,0, 0);
    lamp.rotation.z-=Math.PI/2;
    lamp.rotation.x+=Math.PI;
    cylinder.position.set(-2.75,0,0);
    cylinder.rotation.z+=Math.PI/2;
    frustum.position.set(5,0,0);
    frustum.rotation.z-=Math.PI/2;
    frustum2.position.set(11,0,0);
    frustum2.rotation.z-=Math.PI/2;
    b1.position.set(-1,0,0);
    b2.position.set(-6,0,0);
    base.position.set(-7.75,0,0);
    base.rotation.z+=Math.PI/2;
    charge.position.set(2.1,0,0);
    Switch.position.set(0,1.45,0);
    Switch.rotation.z+=Math.PI/2;
    frustum2.material.opacity=0;
}
function addElements(){
    //adding elements
    addWire(-2,0,11.6,Math.PI/2,false);
    addWire(2.3,1.3,1.9,Math.PI/2,false);
    addWire(2.3,1.3,1.9,Math.PI/2,false);
    addWire(-3.5,1.3,8.5,Math.PI/2,false);
    addWire(3.2,1,0.7,0,false);
    PIEaddElement(lens);
    PIEaddElement(lamp);
    PIEaddElement(frustum);
    PIEaddElement(cylinder);
    PIEaddElement(b1);
    PIEaddElement(b2);
    PIEaddElement(base);
    PIEaddElement(Switch);
    PIEaddElement(charge);
}
function loadExperimentElements(){
    initialiseHelp();
    initialiseInfo();
    initialiseScene();
    PIEsetExperimentTitle("Electric Flashlight");
    PIEsetDeveloperName("Prateek Karnal");
    PIEsetAreaOfInterest(mySceneTLX,mySceneTLY,mySceneBRX,mySceneBRY);
    PIEscene.background = new THREE.Color( 0x0288D1);       //Background Color
    //lighting starts
    var light = new THREE.PointLight( 0xff0000, 0.5, 2000 );
    PIEaddElement( light );
    light.position.set(30,30,30);
    //lighting ends
    declareElements();                                   //Add all the objects
    positionElements();
    addElements();
    OrbControls = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);
    OrbControls.dispose();
    document.getElementById("start").addEventListener("click", startAnimation);         //For switching and orbit controls
    document.getElementById("stop").addEventListener("click", stopAnimation);
    document.getElementById("pause").addEventListener("click", pauseAnimation);         //For switching and orbit controls
    document.getElementById("resume").addEventListener("click", resumeAnimation);
    objects.push(Switch);
    document.addEventListener('mousedown', onDocumentMouseDown, false );                //For detecting switch clicks
    document.addEventListener('touchstart', onDocumentTouchStart, false );
    PIEdragElement(Switch);                                                         //For showing hand pointer
    PIEsetDrag(Switch, hpointer);
    flag=0;
    dir=1;
}
function rectMove(x1,x2,y1,y2,s,dt,m){
    if(dir==2){
            if(m.position.y+(dt*s)<y1){
                m.position.y+=dt*s;
            }
            else if(m.position.y<y1){
                m.position.y=y1;
            }
            else{
                dir=3;
            }
        }
        else if(dir==1){
            if(m.position.x+(dt*s)<x1){
                m.position.x+=dt*s;
            }
            else if(m.position.x<x1){
                m.position.x=x1;
            }
            else{
                dir=2;
            }
        }
        else if(dir==0){
            if(m.position.y-(dt*s)>y2  ){
                m.position.y-=dt*s;
            }
            else if(m.position.y>y2  ){
                m.position.y=y2;
            }
            else{
                dir=1;
            }
        }
        else{
            if(m.position.x-(dt*s)>x2){
                m.position.x-=dt*s;
            }
            else if(m.position.x>x2){
                m.position.x=x2;
            }
            else{
                dir=0;
            }
        }
}
function updateExperimentElements(t,dt){
    rectMove(3.2,-7.75,1.3,0,0.0067,dt,charge);
    //rectMove(1.3,0,3.2,-7.75,0.0067,dt,charge);
    PIErender();
}