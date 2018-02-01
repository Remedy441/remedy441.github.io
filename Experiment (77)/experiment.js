var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */
var helpContent;
// Slider variables
var lampBulb;
var battery;
var fakeSwitch;
var Switch;
var charge;
var arrowhead;
var flag;
var dir;
var objects=[];
var raycaster= new THREE.Raycaster();
var mouse = new THREE.Vector2();
var controls;
var st;
var porb;
var glow;
function initialiseHelp(){
    helpContent="";
    helpContent = helpContent + "<h2>Electric Switch</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows the current flowing through a simple circuit.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to one checkbox.</p>";
    helpContent = helpContent + "<li>Switch &nbsp;&nbsp;:&nbsp;Controls the state of the switch available in the circuit.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button.</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the bulb will glow if the switch is closed and a moving charge would show the direction of the current.</p>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play button on the top line.</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo(){
    infoContent =  "";
    infoContent = infoContent + "<h2>Electric switch experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows an electric circuit with a bulb, a battery, a switch and connecting wires.</p>";
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
    mySceneTLX = -16;
    mySceneTLY = 11;
    mySceneBRX = 16;
    mySceneBRY = -11;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
    PIErenderer.shadowMap.Enabled = false;
}
function initialiseControls(){
    dir=0;
}
function dopause(){
    controls.dispose();
}
function doresume(){
    controls = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);
}
function switchOn(){
    glow.material.opacity=0.3;
    flag=1;
    lampBulb.material.color.set("yellow");
    lampBulb.material.opacity=1;
	Switch.position.set(0,-5,0);
    fakeSwitch.position.set(0,-5.8,0);
    Switch.rotation.z-=Math.PI/3;
    fakeSwitch.rotation.z=Switch.rotation.z;
    //addArrow();
    PIEstartAnimation();
    controls = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);
}
function switchOff(){
    glow.material.opacity=0.0;
    flag=0;
    lampBulb.material.color.set(0x558888);
    lampBulb.material.opacity=0.5;
	Switch.position.set(-0.8,-3.8,0);
    fakeSwitch.position.set(-0.2,-3.5,0);
	Switch.rotation.z+=Math.PI/3;
    fakeSwitch.rotation.z=Switch.rotation.z;
    charge.position.set(-6.5,2.1,0);
    dir=0;
    PIEstopAnimation();
    if(porb==0){
        controls.dispose();
    }
    PIErender();    
    //removeArrow();
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
            switchOn();
        }
        else{
            switchOff();
        }
    }
    PIErender();
}
function addWire(x,y,l,ang){
	var wire=new THREE.Mesh(new THREE.CylinderGeometry(0.08,0.08,l,50,1,true), new THREE.MeshStandardMaterial({color: 0x3d2611,transparent: true,opacity: 1}));
	wire.position.x=x;
	wire.position.y=y;
	wire.rotation.z+=ang;
	PIEaddElement(wire);
}
function addElementsToScene(){
    addWire(6.5,-0.535,8.77,0); 				//Wire1
    addWire(-6.5,-3.35,3.14,0); 			//Wire2
    addWire(-6.5,3,1.7,0); 				//Wire3
    addWire(-2.95,3.93,6.94,Math.PI/2);	//Wire4
    addWire(2.95,3.93,6.94,Math.PI/2); 	//Wire5
    addWire(-4,-5,4.84,Math.PI/2);			//Wire6
    addWire(4,-5,4.84,-Math.PI/2);			//Wire7
    var tor1=new THREE.Mesh(new THREE.TorusGeometry(0.08,0.08,50,50,Math.PI/2), new THREE.MeshStandardMaterial({color: 0x3d2611,transparent: true,opacity: 1}));
    tor1.position.set(-6.42,3.85,0);
    tor1.rotation.z+=Math.PI/2;
    PIEaddElement(tor1);
    var tor2=new THREE.Mesh(new THREE.TorusGeometry(0.08,0.08,50,50,Math.PI/2), new THREE.MeshStandardMaterial({color: 0x3d2611,transparent: true,opacity: 1}));
    tor2.position.set(6.42,3.85,0);
    PIEaddElement(tor2);
    var tor3=new THREE.Mesh(new THREE.TorusGeometry(0.08,0.08,50,50,Math.PI/2), new THREE.MeshStandardMaterial({color: 0x3d2611,transparent: true,opacity: 1}));
    tor3.position.set(6.42,-4.92,0);
    tor3.rotation.z-=Math.PI/2;
    PIEaddElement(tor3);
    var tor4=new THREE.Mesh(new THREE.TorusGeometry(0.08,0.08,50,50,Math.PI/2), new THREE.MeshStandardMaterial({color: 0x3d2611,transparent: true,opacity: 1}));
    tor4.position.set(-6.42,-4.92,0);
    tor4.rotation.z-=Math.PI;
    PIEaddElement(tor4);
    //Battery+ve plate starts
    var p = new THREE.Mesh(new THREE.CylinderGeometry(0.4,0.4,0.4,50), new THREE.MeshStandardMaterial({color: 0x212121}));
    p.position.x=-6.5;
    p.position.y=2.15;
    PIEaddElement(p);
    var pt = new THREE.Mesh(new THREE.CylinderGeometry(1,1,0.1,50), new THREE.MeshStandardMaterial({color: 0x212121}));
    pt.position.x=-6.5;
    pt.position.y=2.05;
    PIEaddElement(pt);
    //Battery+ve plate ends
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
    var bp = new THREE.Mesh(gc5, xm1);
    bp.rotation.y-=Math.PI/5;
    bp.position.x=-6.5;
    bp.position.y=-1;
    bp.position.z=0; 
    PIEaddElement(bp);
    var p3 = new THREE.Mesh(new THREE.CylinderGeometry(1,1,0.2,50), new THREE.MeshLambertMaterial({color: 0x212121}));
    p3.position.x=-6.5;
    p3.position.y=-2.1;
    PIEaddElement(p3);
    //Battery+ve ends
    //Battery-ve starts
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
    var bn = new THREE.Mesh(gbn, xm2);
    bn.rotation.y-=7*Math.PI/24;
    bn.position.x=-6.5;
    bn.position.y=1;
    bn.position.z=0;    
   PIEaddElement(bn);
    //Battery-ve ends

    //lamp starts
    var lamp = new THREE.CylinderGeometry(0.8, 0.8, 1.3, 32);
    lamp = new THREE.Mesh(lamp, new THREE.MeshPhongMaterial({color: "gray"}));
    lamp.position.set(0,4.2, 0);

    lampBulb = new THREE.SphereGeometry(2, 32, 24);
    lampBulb.translate(0, 1.9, 0);
    lampBulb = new THREE.Mesh(lampBulb, new THREE.MeshPhongMaterial({color: "grey",  shininess: 500}));
    lamp.add(lampBulb);
    
    var lampBottom = new THREE.CylinderGeometry(1.2,1.2,0.6, 32);
    lampBottom.translate(0,-0.9,0);
    lampBottom = new THREE.Mesh(lampBottom, new THREE.MeshPhongMaterial({color: "gray"}));
    lamp.add(lampBottom);
    
    var p1 = new THREE.CylinderGeometry(0.3,0.3,0.3,50);
    p1.rotateZ(Math.PI/2);
    p1.translate(-0.9,-0.27,0);
    p1=new THREE.Mesh(p1, new THREE.MeshLambertMaterial({color: 0x212121}));
    lamp.add(p1);
    
    var p2 = new THREE.CylinderGeometry(0.3,0.3,0.3,50);
    p2.rotateZ(Math.PI/2);
    p2.translate(0.9,-0.27,0);
    p2=new THREE.Mesh(p2, new THREE.MeshLambertMaterial({color: 0x212121}));
    lamp.add(p2);
    PIEaddElement(lamp);
    //lamp ends

    //Switch starts
    var blob1 = new THREE.Mesh(new THREE.SphereGeometry(0.4,32,24),new THREE.MeshPhongMaterial({color: 0x0000FF}));
    blob1.position.set(-1.5,-5,0);
    PIEaddElement(blob1);
    
    var blob2 = new THREE.Mesh(new THREE.SphereGeometry(0.4,32,24),new THREE.MeshStandardMaterial({color: 0x0000FF}));
    blob2.position.set(1.5,-5,0);
    PIEaddElement(blob2);
    
    Switch = new THREE.Mesh(new THREE.BoxGeometry(3,0.4,0.4),new THREE.MeshPhongMaterial({color: 0x0000FF}));
    Switch.position.set(0,-5,0);
    PIEaddElement(Switch);
    
    fakeSwitch = new THREE.Mesh(new THREE.BoxGeometry(3,2,2),new THREE.MeshPhongMaterial({color: 0x0000FF,transparent: true,opacity: 0}));
    fakeSwitch.position.set(0,-4,0);
    PIEaddElement(fakeSwitch);
    //Switch end
    //charge starts
    charge = new THREE.SphereGeometry(0.2,32,24);
    charge = new THREE.Mesh(charge,new THREE.MeshPhongMaterial({color: "red",specular: "red"}));
    PIEaddElement(charge);
    charge.position.set(-6.5,2.1 ,0);
    glow=new THREE.Mesh(
        new THREE.SphereGeometry(2.3,30,30),
        new THREE.MeshBasicMaterial({color: "yellow",transparent: true,opacity: 0})
        );
    PIEaddElement(glow);
    glow.position.y=6.2;
    var geometry = new THREE.PlaneGeometry( 200, 200, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0xaa3300, side: THREE.DoubleSide} );
    var plane = new THREE.Mesh( geometry, material );
    plane.rotation.x+=Math.PI/2;
    plane.position.y-=7
    PIEaddElement( plane );
    switchOff();
    /*var prism=new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,1,3,1),new THREE.MeshStandardMaterial({color: "gray"}));
    PIEaddElement(prism);
    prism.rotation.x+=Math.PI/2;
    prism.rotation.y+=Math.PI/3;
    */
}
function myBallDrag(a,b){

}
function loadExperimentElements(){
    st=0;
    PIEsetExperimentTitle("Electric Switch");
    PIEsetDeveloperName("Prateek Karnal");
    initialiseHelp();
    initialiseInfo();
    initialiseScene();
    initialiseControls();
    porb=0;
   // onmouseover="cursor: hand (a pointing hand)"
    controls = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);
    PIEscene.background = new THREE.Color( 0x0288D1);
    document.getElementById("start").addEventListener("click", switchOn);
    document.getElementById("stop").addEventListener("click", switchOff  );
        document.getElementById("pause").addEventListener("click", dopause);
    document.getElementById("resume").addEventListener("click", doresume);
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
   	//Lighting starts
   	var light = new THREE.PointLight( 0xff0000, 7, 200 );
    PIEaddElement( light );
    light.position.set(-50,50,50);
    //Lighting ends
    addElementsToScene();		// adding all elements in scene
    //Click detection of switch
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    objects.push(fakeSwitch); // fake invisible switch to increase impact area
    objects.push(Switch);
    PIEdragElement(fakeSwitch);
    PIEsetDrag(fakeSwitch, myBallDrag);
    document.addEventListener('mousedown', onDocumentMouseDown, false );
    document.addEventListener('touchstart', onDocumentTouchStart, false );
     // /       PIEstartAnimation();
    //Click detection ends
}
function rectMove(x1,x2,y1,y2,s,dt,m){
    if(dir==0){
            if(m.position.y+(dt*s)<y1){
                m.position.y+=dt*s;
            }
            else if(m.position.y<y1){
                m.position.y=y1;
            }
            else{
                dir=1;
                m.rotation.z-=Math.PI/2;
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
                m.rotation.z-=Math.PI/2;
            }
        }
        else if(dir==2){
            if(m.position.y-(dt*s)>y2  ){
                m.position.y-=dt*s;
            }
            else if(m.position.y>y2  ){
                m.position.y=y2;
            }
            else{
                dir=3;
                m.rotation.z-=Math.PI/2;
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
                m.rotation.z-=Math.PI/2;
            }
        }
}
function resetExperiment(){
    if(flag==1){
        flag=0;
        switchOff();
    }
    charge.position.set(-6.5,2.1,0);
    initialiseControls();
}
function updateExperimentElements(t, dt){
    if(flag){
       rectMove(6.5,-6.5,3.93,-5,0.0067,dt,charge);
    }
    PIErender();
}