var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */
var helpContent;
//Charge Movement cor
var lx;
var by;
var rx;
var ty;
// Slider variables
var CSalt;
var CLabel;
var Cdefault;
var handleSalt;
var Cmin;
var Cmax;
var Cstep;
var lampBulb;
var charge;
var arrowhead;
var col =0x0000FF;
var c2;
var c7;
var dir=0;
var st;
var controls;
var curves=[];
var flag;
var Switch;
var fakeSwitch;
var objects=[];
var mouse;
var time;
var Na=[];
var Cl=[];
var Oh=[];
var H=[];
function handleSalt(newValue){
    CSalt=newValue;
    var y=Math.floor(CSalt)*2;
    var col=rgbToHex(y+1,y+87,155);
    c2.material.color.setHex(col);
    var i=Math.ceil(CSalt);
    i=Math.floor(i/2);
    //Na[0].position.set(10,10,0);
    for(var j=0;j<i;j++){
    	Na[j].material.transparent=false;
    	Oh[j].material.transparent=false;
    	Cl[j].material.transparent=false;
    	H[j].material.transparent=false;
    }
    for(var j=i;j<5;j++){
    	Na[j].material.transparent=true;
    	Oh[j].material.transparent=true;
    	Cl[j].material.transparent=true;
    	H[j].material.transparent=true;
    	Na[j].material.opacity=0;
    	Oh[j].material.opacity=0;
    	Cl[j].material.opacity=0;
    	H[j].material.opacity=0;
    }
    PIErender();
}
function myBallDrag(){

}
function initialiseHelp(){
    helpContent="";
    helpContent = helpContent + "<h2>Electricity through water experiment help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows conductivity of water with varying values of salt concentrations.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to one slider.</p>";
    helpContent = helpContent + "<li>Salt (moles)&nbsp;&nbsp;:&nbsp;Controls the concentration of salt in the beaker.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button.</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the bulb will glow according to the concentration of salt and charge would flow in the circuit.</p>";
    helpContent = helpContent + "<p>You can open or close the switch by pressing the switch or the start/stop button.</p>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play button on the top line.</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo(){
    infoContent =  "";
    infoContent = infoContent + "<h2>Electricity through water experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows a beaker filled with water, battery, light bulb, cathode and anode.</p>";
    infoContent = infoContent + "<h3>Current Flow</h3>";
    infoContent = infoContent + "<p>Current flows from cathode to anode in the beaker.</p>";
    infoContent = infoContent + "<p>The amount of current flow mainly depends on the conductivity of the water.</p>";
    infoContent = infoContent + "<p>Conductivity of pure water is very low due to low number of H<sup>+</sup> and OH<sup>-</sup> ions in pure water.</p>";
    infoContent = infoContent + "<p>When salt is added to the water, H<sup>+</sup> and OH<sup>-</sup> ions form along with Na<sup>+</sup> and Cl<sup>-</sup> ions.</p>";
    infoContent = infoContent + "<p>This highly increases the conductivity of water and hence the bulb glows.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}
function initialiseScene(){
    /* Initialise Scene Variables */
    mySceneTLX = -20;
    mySceneTLY = 17;
    mySceneBRX = 20;
    mySceneBRY = -17;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
    PIErenderer.shadowMapEnabled = false;

}
function initialiseControlVariables(){
    on=0;
    CSalt=1.0;
    Cdefault=1.0;
    Cmin=0.0;
    Cmax=10.0;
    Cstep=0.1;
    CLabel="Salt (moles)";
    dir=0;
}
function initialiseControls(){
    initialiseControlVariables();
    PIEaddDualText(CLabel, Cdefault,handleSalt,Cmin, Cmax,Cstep);
    //PIEaddDisplayText(CLabel, CSalt);
}
function dopause(){
    controls.dispose();
}
function doresume(){
    controls = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);
}
function switchOn(){
    PIEchangeDisplaySlider(CLabel, CSalt);
    flag=1;
    var x=CSalt/10;
    if(x<0.05)
        x=0.05;
    lampBulb.material.opacity=x;
    Switch.position.set(4,5.5,0);
    fakeSwitch.position.set(4,5.5,0);   
    Switch.rotation.z-=Math.PI/3;
    fakeSwitch.rotation.z=Switch.rotation.z;
        PIErender();
    PIEstartAnimation();
    controls = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);
}
function switchOff(){
    PIEchangeInputSlider(CLabel, CSalt);
    flag=0;
    controls.dispose();
    lampBulb.material.opacity=0;
    Switch.rotation.z+=Math.PI/3;
    fakeSwitch.rotation.z=Switch.rotation.z;
    fakeSwitch.position.set(2.8,4.8,0);
    Switch.position.set(2.8,4.8,0);
    charge.position.set(-4,7.9,0);
    dir=0;
    PIEstopAnimation();
    PIErender();
    time=0;
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
    if (intersects.length > 0 ) {
        flag=!flag;
        if(flag){
            switchOn();
           
        }
        else{
            switchOff();
        }
    }
    PIErender();
}
function addWire(x,y,l,ang){
    var wire=new THREE.Mesh(new THREE.CylinderGeometry(0.08,0.08,l,50,1,true), new THREE.MeshLambertMaterial({color: 0x3d2611,transparent: true,opacity: 1}));
    wire.position.x=x;
    wire.position.y=y;
    wire.rotation.z+=ang;
    PIEaddElement(wire);
}
function addIons(){
    loader = new THREE.FontLoader();
        loader.load( 'optimer_regular.typeface.json', function ( font ) {
	        for(var i=0;i<5;i++){
	            var textGeometry = new THREE.TextGeometry( 'Na+', {
	                font: font,
	                size: 0.5,
	                height:0.3,
	                curveSegments: 5,
	            });
	            var textMaterial = new THREE.MeshPhongMaterial( 
	                { color: 0xffffff, specular: 0xffffff}
	            );
	            Na[i] = new THREE.Mesh( textGeometry, textMaterial );
	            Na[i].position.set(-2,-1*i,0);
	            PIEaddElement( Na[i]);
	            PIErender();
	        }
	        Na[0].position.set(-3,-2,0);
	        Na[1].position.set(3,-7,0);
	        Na[2].position.set(-4,-7,0);
	        Na[3].position.set(0.5,-4,0);
	        Na[4].position.set(-1,-8.8,0);
	        for(var i=0;i<5;i++){
	            var textGeometry = new THREE.TextGeometry( 'Oh-', {
	                font: font,
	                size: 0.5,
	                height:0.3,
	                curveSegments: 5,
	            });
	            var textMaterial = new THREE.MeshPhongMaterial( 
	                { color: 0xffffff, specular: 0xffffff}
	            );
	            Oh[i] = new THREE.Mesh( textGeometry, textMaterial );
	            Oh[i].position.set(-1,-1*i,0);
	            PIEaddElement( Oh[i]);
	            PIErender();
	        }
	        Oh[0].position.set(-1.5,-2,0);
	        Oh[1].position.set(4.5,-7,0);
	        Oh[2].position.set(-2.5,-7,0);
	        Oh[3].position.set(2,-4,0);
	        Oh[4].position.set(0.5,-8.8,0);
	        for(var i=0;i<5;i++){
	            var textGeometry = new THREE.TextGeometry( 'Cl-', {
	                font: font,
	                size: 0.5,
	                height:0.3,
	                curveSegments: 5,
	            });
	            var textMaterial = new THREE.MeshPhongMaterial( 
	                { color: 0xffffff, specular: 0xffffff}
	            );
	            Cl[i] = new THREE.Mesh( textGeometry, textMaterial );
	            Cl[i].position.set(0,-1*i,0);
	            PIEaddElement( Cl[i]);
	            PIErender();
	        }
	        Cl[0].position.set(1.2,-6,0);
	        Cl[1].position.set(-2.8,-8.8,0);
	        Cl[2].position.set(4.2,-8.5,0);
	        Cl[3].position.set(-1.8,-4,0);
	        Cl[4].position.set(2.2,-2,0);
	        for(var i=0;i<5;i++){
	            var textGeometry = new THREE.TextGeometry( 'H+', {
	                font: font,
	                size: 0.5,
	                height:0.3,
	                curveSegments: 5,
	            });
	            var textMaterial = new THREE.MeshPhongMaterial( 
	                { color: 0xffffff, specular: 0xffffff}
	            );
	            H[i] = new THREE.Mesh( textGeometry, textMaterial );
	            H[i].position.set(1,-1*i,0);
	            PIEaddElement( H[i]);
	            PIErender();
	        }
	        H[0].position.set(0,-6,0);
	        H[1].position.set(-4,-8.8,0);
	        H[2].position.set(3,-8.5,0);
	        H[3].position.set(-3,-4,0);
	        H[4].position.set(1,-2,0);
	        handleSalt(1);
	        PIErender();
        });
}
function addElementsToScene(){
	addIons();
    var gc2 = new THREE.CylinderGeometry(6.4,6,8,50);
    var mc2 = new THREE.MeshLambertMaterial({color: 0x01579B,transparent: true,opacity:0.6});
    c2 = new THREE.Mesh(gc2, mc2);
    c2.position.x=0;
    c2.position.y=-5;
    PIEaddElement(c2);    
    //The water ends
    //Anode
    var gc3 = new THREE.CylinderGeometry(0.7,0.7,6,50);
    var mc3 = new THREE.MeshStandardMaterial({color: 0x2f4f4f});
    var c3 = new THREE.Mesh(gc3, mc3);
    c3.position.x=-4;
    c3.position.y=-2;
    PIEaddElement(c3);
    //Anode ends
    //Cathode
    var gc3 = new THREE.CylinderGeometry(0.7,0.7,6,50);
    var mc3 = new THREE.MeshStandardMaterial({color: 0x2f4f4f});
    var c3 = new THREE.Mesh(gc3, mc3);
    c3.position.x=4;
    c3.position.y=-2;
    PIEaddElement(c3);
    //Cathode ends
    //Wire1
    addWire(4,8.35,3.14,0);
    addWire(4,2.35,3.14,0);
    //Wire2
    addWire(-4,2.5,3.14,0);
    //Wire2 ends
    //Wire3
    addWire(-4,8.75,2.34,0);
    //Wire3 ends
    addWire(-2.00,10,3.84,Math.PI/2);
    //Wire4
    //Wire5
    addWire(2.0,10,3.84,Math.PI/2);
    //Wire5 ends
    var tor1=new THREE.Mesh(new THREE.TorusGeometry(0.08,0.08,50,50,Math.PI/2), new THREE.MeshLambertMaterial({color: 0x3d2611,transparent: true,opacity: 1}));
    tor1.position.set(-3.92,9.92    ,0);
    tor1.rotation.z+=Math.PI/2;
    PIEaddElement(tor1);
    var tor3=new THREE.Mesh(new THREE.TorusGeometry(0.08,0.08,50,50,Math.PI/2), new THREE.MeshLambertMaterial({color: 0x3d2611,transparent: true,opacity: 1}));
    tor3.position.set(3.92,9.92,0);
    //tor3.rotation.z-=Math.PI/2;
    PIEaddElement(tor3);
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
    //Battery+ve plate starts
    var p = new THREE.Mesh(new THREE.CylinderGeometry(0.4,0.4,0.3,50), new THREE.MeshLambertMaterial({color: 0x212121}));
    p.position.x=-4;
    p.position.y=8.15;
    PIEaddElement(p);
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
    bp.position.x=-4;
    bp.position.y=5;
    bp.position.z=0; 
    PIEaddElement(bp);
    //Battery+ve ends

    //Battery-ve starts
    var p3 = new THREE.Mesh(new THREE.CylinderGeometry(1,1,0.2,50), new THREE.MeshLambertMaterial({color: 0x212121}));
    p3.position.x=-4;
    p3.position.y=3.9;
        PIEaddElement(p3);
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
    bn.position.x=-4;
    bn.position.y=7;
    bn.position.z=0;    
    PIEaddElement(bn);
    //Battery-ve ends
    
    //lamp
    var p1 = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,0.3,50), new THREE.MeshLambertMaterial({color: 0x212121}));
    p1.position.x=-0.9;
    p1.position.y=10;
    p1.rotation.z+=Math.PI/2;
    PIEaddElement(p1);
    var p2 = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,0.3,50), new THREE.MeshLambertMaterial({color: 0x212121}));
    p2.position.x=0.9;
    p2.position.y=10;
    p2.rotation.z+=Math.PI/2;
    PIEaddElement(p2);
    var lampBottomGeom = new THREE.CylinderGeometry(0.8, 0.8, 1.3, 32);
    var lampBottom = new THREE.Mesh(lampBottomGeom, new THREE.MeshPhongMaterial({color: "gray"}));
    lampBottom.position.set(0,10.15, 0);
    PIEaddElement(lampBottom);
    var lampBulbGeom = new THREE.SphereGeometry(2, 32, 24);
    var lamp2 =new THREE.Mesh(new THREE.SphereGeometry(1.8,32,24), new THREE.MeshLambertMaterial({color: 0x455A64}));
    PIEaddElement(lamp2);
    lamp2.position.set(0,12.25,0);
    lampBulbGeom.translate(0, 2.1, 0);
    lampBulb = new THREE.Mesh(lampBulbGeom, new THREE.MeshPhongMaterial({color: 0xFFFF00, transparent: true, opacity: 0.05, shininess: 500})    );
    lampBottom.add(lampBulb);
    var lampBottomGeom2 = new THREE.CylinderGeometry(1.2,1.2,0.6, 32);
    var lampBottom2 = new THREE.Mesh(lampBottomGeom2, new THREE.MeshPhongMaterial({color: "gray"}));
    lampBottom2.position.set(0,9.28, 0);
    PIEaddElement(lampBottom2);
    charge = new THREE.Mesh(new THREE.SphereGeometry(0.2,50,50),new THREE.MeshLambertMaterial({color: "red"}));
    PIEaddElement(charge);
    charge.position.set(-4,7.9,0);
    dir=0;
    CSalt=1;
    //Switch starts
    var blob1 = new THREE.Mesh(new THREE.SphereGeometry(0.4,32,24),new THREE.MeshPhongMaterial({color: 0x0000FF}));
    blob1.position.set(4,7,0);
    PIEaddElement(blob1);
    
    var blob2 = new THREE.Mesh(new THREE.SphereGeometry(0.4,32,24),new THREE.MeshStandardMaterial({color: 0x0000FF}));
    blob2.position.set(4,4,0);
    PIEaddElement(blob2);
    Switch = new THREE.Mesh(new THREE.BoxGeometry(3,0.4,0.4),new THREE.MeshPhongMaterial({color: 0x0000FF}));
    Switch.position.set(4,5.5,0);
    PIEaddElement(Switch);
    Switch.rotation.z+=Math.PI/2;
    fakeSwitch = new THREE.Mesh(new THREE.BoxGeometry(3,2,2),new THREE.MeshPhongMaterial({color: 0x0000FF,transparent: true,opacity: 0}));
    fakeSwitch.position.set(4,5.5,0);
    PIEaddElement(fakeSwitch);
    fakeSwitch.rotation.z+=Math.PI/2;
    //Switch end

}
function loadExperimentElements(){
	var geometry;
	var material;
	var loader;
	var texture;
    st=0;time=0.000;
    addElementsToScene();
    PIEsetExperimentTitle("Water's Conductivity");
    PIEsetDeveloperName("Prateek Karnal");
    initialiseHelp();
    initialiseInfo();
    initialiseScene();
    initialiseControls();
    PIEscene.background = new THREE.Color( 0x7CB342);
    document.getElementById("start").addEventListener("click", switchOn);
    document.getElementById("stop").addEventListener("click", switchOff);
    document.getElementById("pause").addEventListener("click", dopause);
    document.getElementById("resume").addEventListener("click", doresume);
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    var light = new THREE.PointLight( 0xff0000, 7, 100 );
    light.position.set( 50, 50, 50 );
    PIEaddElement( light );
    mouse=new THREE.Vector2();
    raycaster=new THREE.Raycaster();
    document.addEventListener('mousedown', onDocumentMouseDown, false );
    document.addEventListener('touchstart', onDocumentTouchStart, false );
    PIEstartAnimation();
    PIEdragElement(fakeSwitch);
    PIEsetDrag(fakeSwitch, myBallDrag);
    controls = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);
    switchOff();
    objects.push(fakeSwitch); // fake invisible switch to increase impact area
    objects.push(Switch);
    flag=0;
}
function resetExperiment(){
    if(flag){
        switchOff();
    }
    initialiseControlVariables();
    var y=Math.floor(CSalt)*2;
    var col=rgbToHex(y+1,y+87,155);
    c2.material.color.setHex(col);
   
}
/*Hex to RGB Convertor Code*/
function hex2rgb(hex) {
      return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
}

/*Hex Component Convertor*/
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
/*RGB to Hex Convertor*/
function rgbToHex(r, g, b) {
    return "0x" + componentToHex(r) + componentToHex(g) + componentToHex(b);
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
        else if(dir==2){
            if(m.position.y-(dt*s)>y2  ){
                m.position.y-=dt*s;
            }
            else if(m.position.y>y2  ){
                m.position.y=y2;
            }
            else{
                dir=3;
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
function updateExperimentElements(t, dt){
    if(flag==1 && time!=0){
        rectMove(4,-4,10,-7,(CSalt+0.4)/600,t-time,charge);
    }
    time=t;
    CSalt=PIEgetDisplaySlider(CLabel);
    var x=CSalt/10;
    if(x<0.05)
        x=0.05;
    lampBulb.material.opacity=x;
    var y=Math.floor(CSalt)*2;
    var col=rgbToHex(y+1,y+87,155);
    c2.material.color.setHex(col);
    var i=Math.ceil(CSalt);
    i=Math.floor(i/2);
    for(var j=0;j<i;j++){
    	Na[j].material.transparent=false;
    	Oh[j].material.transparent=false;
    	Cl[j].material.transparent=false;
    	H[j].material.transparent=false;
    }
    for(var j=i;j<5;j++){
    	Na[j].material.transparent=true;
    	Oh[j].material.transparent=true;
    	Cl[j].material.transparent=true;
    	H[j].material.transparent=true;
    	Na[j].material.opacity=0;
    	Oh[j].material.opacity=0;
    	Cl[j].material.opacity=0;
    	H[j].material.opacity=0;
    }
    PIErender();
}