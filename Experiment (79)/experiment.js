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
var font;
var clamp;
var str=[];
var r=[];
var lx=[];
var ly=[];
var string=[];
var bstr=[];
var bstr2=[];
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
var OrbControls;
var st;
var tor1;
var tor2;
var tor3;
var tor4;
var ox;
var oy;
var lamp=[];
var plane;
var Ammeter;
var textgeo;
var tmesh;
var lampBulb;
var btmesh=[];
var zero;
var sel;
var lp;
function initialiseHelp(){
    helpContent="";
    helpContent = helpContent + "<h2> Current through wired of different radius.</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment has 6 different wires, one battery, one switch, an ammeter and connecting wires.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation Controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage select any bulb of any radius provided.</p>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button or on the switch.</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, a moving charge would show the direction of the current and the bulb would glow if the switch is closed.</p>";
    helpContent = helpContent + "<p>An ammeter would show the amount current flowing through the circuit</p>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play button on the top line.</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo(){
    infoContent =  "";
    infoContent = infoContent + "<h2> Current through wires of different radius concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows the variation of current with the variation in radius of a wire with constant length and resistivity.</p>";
    infoContent = infoContent + "<h3>Current Flow</h3>";
    infoContent = infoContent + "<p>Resistance is inversely proportional to area. As area is proportional to the square of radius,</p>"
    infoContent = infoContent + "Resistance is inversely proportional to square of radius. Hence conductance is directly proportional to square of radius.</p>" 
    infoContent = infoContent + "<p>Here we have a fixed voltage and varying radius of bulb.</p>";
    infoContent = infoContent + "<p>Here current in directly proportional to conductance, so when conductance increases(radius increases), the current increases.</p>";
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
function myBallDrag(a,b){}
function dopause(){
    OrbControls.dispose();
}
function doresume(){
    OrbControls = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);
}
function startAnimation(){
    if(sel==1){
    lampBulb.material.color.set("yellow");
    tmesh.material.opacity=1;
    zero.material.opacity=0;
    flag=1;
	Switch.position.set(0+ox,-5+oy,0);
    fakeSwitch.position.set(0+ox,-5.8+oy,0);
    Switch.rotation.z=0;
    fakeSwitch.rotation.z=0;    
    PIEstartAnimation();
    OrbControls = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);
    }
    else{
        PIEstopAnimation();
    }
}
function stopAnimation(){
    lampBulb.material.color.set(0x455A64);
    addText();
    tmesh.material.opacity=0;
    flag=0;
    zero.material.opacity=1;
	Switch.position.set(-0.8+ox,-3.8+oy,0);
    fakeSwitch.position.set(-0.2+ox,-3.5+oy,0);
	Switch.rotation.z=Math.PI/3;
    fakeSwitch.rotation.z=Switch.rotation.z;
    charge.position.set(-6.5+ox,2.1+oy,0);
    dir=0;
    PIEstopAnimation();
    OrbControls.dispose();
    PIErender();    
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
        if(intersects[0].object == Switch || intersects[0].object == fakeSwitch){
            if(!flag){
                startAnimation();
            }
            else{
                stopAnimation();
            }
        }
        else{
            for(var i=0;i<6;i++){
                if(intersects[0].object == lamp[i]){
                    sel=1;
                    btmesh[clamp].position.set(100,100,100);
                    btmesh[clamp].material.opacity=0;
                    stopAnimation();
                    lamp[clamp].position.set(lx[clamp],ly[clamp],0);
                    lamp[i].position.set(0+ox-3,3.93+oy,0);
                    clamp=i;
                    btmesh[i].position.set(0.5+ox-1.5,2,0.41);
                    btmesh[i].material.opacity=1;
                    PIErender();
                }
            }
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
function createLamp(n,r){
    lamp[n] = new THREE.CylinderGeometry(0.25*r, 0.25*r, 3, 32);
    lamp[n] = new THREE.Mesh(lamp[n], new THREE.MeshPhongMaterial({color: 0x212121}));
    lamp[n].rotation.z+=Math.PI/2;
    PIEaddElement(lamp[n]);
}
function declareElements(){
    tor1=new THREE.Mesh(new THREE.TorusGeometry(0.08,0.08,50,50,Math.PI/2), new THREE.MeshStandardMaterial({color: 0x3d2611,transparent: true,opacity: 1}));
    tor1.rotation.z+=Math.PI/2;
    PIEaddElement(tor1);
    tor2=new THREE.Mesh(
        new THREE.TorusGeometry(0.08,0.08,50,50,Math.PI/2),
        new THREE.MeshStandardMaterial({color: 0x3d2611,transparent: true,opacity: 1})
        );
    PIEaddElement(tor2);
    tor3=new THREE.Mesh(new THREE.TorusGeometry(0.08,0.08,50,50,Math.PI/2), new THREE.MeshStandardMaterial({color: 0x3d2611,transparent: true,opacity: 1}));
    tor3.rotation.z-=Math.PI/2;
    PIEaddElement(tor3);
    tor4=new THREE.Mesh(new THREE.TorusGeometry(0.08,0.08,50,50,Math.PI/2), new THREE.MeshStandardMaterial({color: 0x3d2611,transparent: true,opacity: 1}));
    tor4.rotation.z-=Math.PI;
    PIEaddElement(tor4);
    //Battery+ve plate starts
    var p = new THREE.Mesh(new THREE.CylinderGeometry(0.4,0.4,0.4,50), new THREE.MeshStandardMaterial({color: 0x212121}));
    p.position.x=-6.5+ox;
    p.position.y=2.15+oy;
    PIEaddElement(p);
    var pt = new THREE.Mesh(new THREE.CylinderGeometry(1,1,0.1,50), new THREE.MeshStandardMaterial({color: 0x212121}));
    pt.position.x=-6.5+ox;
    pt.position.y=2.05+oy;
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
    bp.position.x=-6.5+ox;
    bp.position.y=-1+oy;
    PIEaddElement(bp);
    var p3 = new THREE.Mesh(new THREE.CylinderGeometry(1,1,0.2,50), new THREE.MeshLambertMaterial({color: 0x212121}));
    p3.position.x=-6.5+ox;
    p3.position.y=-2.1+oy;
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
    bn.position.x=-6.5+ox;
    bn.position.y=1+oy;
    bn.position.z=0;    
    PIEaddElement(bn);
    //Battery-ve ends

    //lamp starts
    str[0]="01.0 A";str[1]="04.0 A";
    str[2]="09.0 A";str[3]="16.0 A";
    str[4]="25.0 A";str[5]="36.0 A";
    str[6]="00.0 A";
    r[0]=0.8;r[1]=0.9;r[2]=1;r[3]=1.1;r[4]=1.2;r[5]=1.3;r[6]=1.4;
    for(var i=0;i<6;i++){
        createLamp(i,r[i]);
    }
    //lamp ends

    //Switch starts
    var blob1 = new THREE.Mesh(new THREE.SphereGeometry(0.4,32,24),new THREE.MeshPhongMaterial({color: 0x0000FF}));
    blob1.position.set(-1.5+ox,-5+oy,0);
    PIEaddElement(blob1);
    
    var blob2 = new THREE.Mesh(new THREE.SphereGeometry(0.4,32,24),new THREE.MeshStandardMaterial({color: 0x0000FF}));
    blob2.position.set(1.5+ox,-5+oy,0);
    PIEaddElement(blob2);
    
    Switch = new THREE.Mesh(new THREE.BoxGeometry(3,0.4,0.4),new THREE.MeshPhongMaterial({color: 0x0000FF}));
    PIEaddElement(Switch);
    
    fakeSwitch = new THREE.Mesh(new THREE.BoxGeometry(3,2,2),new THREE.MeshPhongMaterial({color: 0x0000FF,transparent: true,opacity: 0}));
    PIEaddElement(fakeSwitch);
    //Switch end
    //charge starts
    charge = new THREE.SphereGeometry(0.19,32,24);
    charge = new THREE.Mesh(charge,new THREE.MeshPhongMaterial({color: "red",specular: "red"}));
    PIEaddElement(charge);
    //Ammeter starts
    Ammeter= new THREE.BoxGeometry(3,3,1);
    Ammeter=new THREE.Mesh(Ammeter,new THREE.MeshPhongMaterial({color: 0x000000}));
    var port1= new THREE.CylinderGeometry(0.3,0.3,0.3,20);
    port1.translate(0,1.65,0);
    port1=new THREE.Mesh(port1,new THREE.MeshLambertMaterial({color: 0x212121}));
    Ammeter.add(port1);
    var port2= new THREE.CylinderGeometry(0.3,0.3,0.3,20);
    port2.translate(0,-1.65,0);
    port2=new THREE.Mesh(port2,new THREE.MeshLambertMaterial({color: 0x212121}));
    Ammeter.add(port2);
    var buffer=new THREE.BoxGeometry(3,0.7,0.5);
    buffer=new THREE.Mesh(buffer,new THREE.MeshStandardMaterial({color: 0x827717}));
    buffer.position.set(6.5+ox,1.15,0.75);
    var buffer2=new THREE.BoxGeometry(3,1,0.5);
    buffer2=new THREE.Mesh(buffer2,new THREE.MeshStandardMaterial({color: 0x827717}));
    buffer2.position.set(6.5+ox,-1,0.75);
    var buffer3=new THREE.BoxGeometry(0.4,1.3,0.5);
    buffer3=new THREE.Mesh(buffer3,new THREE.MeshStandardMaterial({color: 0x827717}));
    buffer3.position.set(6.5+ox-1.3,0.15,0.75);
    var buffer4=new THREE.BoxGeometry(0.4,1.3,0.5);
    buffer4=new THREE.Mesh(buffer4,new THREE.MeshStandardMaterial({color: 0x827717}));
    buffer4.position.set(6.5+ox+1.3,0.15,0.75);
    //lamp
    lp = new THREE.CylinderGeometry(0.8, 0.8, 1.3, 32);
    lp = new THREE.Mesh(lp, new THREE.MeshPhongMaterial({color: "gray"}));
    lampBulb = new THREE.SphereGeometry(1.8, 32, 24);
    lampBulb.translate(0, 1.9, 0);
    lampBulb = new THREE.Mesh(lampBulb, new THREE.MeshLambertMaterial({color: 0x455A64}));
    lp.add(lampBulb);
    var hplate = new THREE.CylinderGeometry(0.3,0.3,0.3,50);
    hplate.rotateZ(Math.PI/2);
    hplate.translate(-0.9,-0.27,0);
    hplate=new THREE.Mesh(hplate, new THREE.MeshLambertMaterial({color: 0x212121}));
    lp.add(hplate);
    var vplate = new THREE.CylinderGeometry(0.3,0.3,0.3,50);
    vplate.rotateZ(Math.PI/2);
    vplate.translate(0.9,-0.27,0);
    vplate=new THREE.Mesh(vplate, new THREE.MeshLambertMaterial({color: 0x212121}));
    lp.add(vplate);
    //lamp ends
    PIEaddElement(buffer4);
    PIEaddElement(buffer3);
    PIEaddElement(buffer2);
    PIEaddElement(buffer);
    PIEaddElement(Ammeter);
    PIEaddElement(lp);
}
function addText(){
        loader = new THREE.FontLoader();
        loader.load( 'optimer_regular.typeface.json', function ( font ) {
            var textGeometry = new THREE.TextGeometry( str[clamp], {
                font: font,
                size: 0.5,
                height:0.1,
                curveSegments: 12,
                bevelThickness: 1,
                bevelSize: 1,
                bevelEnabled: false
            });
            var textMaterial = new THREE.MeshPhongMaterial( 
                { color: 0xff0000, specular: 0xffffff,transparent: true,opacity: 0 }
            );
            tmesh = new THREE.Mesh( textGeometry, textMaterial );
            tmesh.position.set(-2.5,0,0.41);
            PIEaddElement( tmesh );
            PIErender();
        });
}
function addbText(){
         loader = new THREE.FontLoader();
        loader.load( 'optimer_regular.typeface.json', function ( font ) {
            var texGeometry2 = new THREE.TextGeometry( 'Ammeter', {
                font: font,
                size: 0.35,
                height:0,
                curveSegments: 12,
                bevelThickness: 0.001,
                bevelSize: 0.001,
                bevelEnabled: true
            });
            var texMaterial2 = new THREE.MeshBasicMaterial( 
                { color: 0x000000}
            );
            tammeter = new THREE.Mesh( texGeometry2, texMaterial2);
            tammeter.position.set(6.5+ox-0.9,-1,1);
            PIEaddElement(tammeter);
            var texGeometry = new THREE.TextGeometry( '00.0 A', {
                font: font,
                size: 0.5,
                height:0.1,
                curveSegments: 12,
                bevelThickness: 1,
                bevelSize: 1,
                bevelEnabled: false
            });
            var texMaterial = new THREE.MeshPhongMaterial( 
                { color: 0xff0000, specular: 0xffffff,transparent:true,opacity:1}
            );
            zero = new THREE.Mesh( texGeometry, texMaterial);
            zero.position.set(-2.5,0,0.41);
            PIEaddElement(zero);
            for(var i=0;i<6;i++){
            var textGeometry = new THREE.TextGeometry( bstr[i], {
                font: font,
                size: 0.5,
                height:0.1,
                curveSegments: 12,
                bevelThickness: 1,
                bevelSize: 1,
                bevelEnabled: false
            });
            var textMaterial = new THREE.MeshPhongMaterial( 
                { color: 0xff0000, specular: 0xffffff,transparent:true,opacity:0}
            );
            btmesh[i] = new THREE.Mesh( textGeometry, textMaterial);
            btmesh[i].position.set(100,100,100);
            PIEaddElement(btmesh[i]);
            var textGeometry2 = new THREE.TextGeometry( (i+1)*5+'mm', {
                font: font,
                size: 0.5,
                height:0.1,
                curveSegments: 12,
                bevelThickness: 1,
                bevelSize: 1,
                bevelEnabled: false
            });
            var textMaterial2 = new THREE.MeshPhongMaterial( 
                { color: 0xff0000, specular: 0xffffff}
            );
            var mesh=new THREE.Mesh(textGeometry2,textMaterial2);
            mesh.position.set(lx[i]+2,ly[i],0);
            PIEaddElement(mesh);
            PIErender();
        }
            btmesh[clamp].position.set(100,100,100);
    btmesh[clamp].material.opacity=0;
    lamp[clamp].position.set(lx[clamp],ly[clamp],0);
        });
}
function addBatteryText(){
    loader = new THREE.FontLoader();
        loader.load( 'optimer_regular.typeface.json', function ( font ) {
            var textGeometry = new THREE.TextGeometry( '5 Volts', {
                font: font,
                size: 0.5,
                height:0.1,
                curveSegments: 12,
                bevelThickness: 1,
                bevelSize: 1,
                bevelEnabled: false
            });
            var textMaterial = new THREE.MeshPhongMaterial( 
                { color: 0xff0000, specular: 0xffffff}
            );
            var bt = new THREE.Mesh( textGeometry, textMaterial );
            bt.position.set(-5+ox,0,0.41);
            PIEaddElement( bt );
            PIErender();
        });
}
function positionElements(){
    tor1.position.set(-6.42+ox,3.85+oy,0);
    tor2.position.set(6.42+ox,3.85+oy,0);
    tor3.position.set(6.42+ox,-4.92+oy,0);
    tor4.position.set(-6.42+ox,-4.92+oy,0);
    Switch.position.set(0+ox,-5+oy,0);
    fakeSwitch.position.set(0+ox,-4+oy,0);
    charge.position.set(-6.5+ox,2.1+oy ,0);
    Ammeter.position.set(6.5+ox,0,0);
    addWire(6.5+ox,-0.535,8.77,0);                 //Wire1
    addWire(-6.5+ox,-3.35,3.14,0);             //Wire2
    addWire(-6.5+ox,3,1.7,0);              //Wire3
    addWire(-5.45+ox,3.93,1.94,Math.PI/2); //Wire4
    addWire(2.45+ox,3.93,7.94,Math.PI/2);  //Wire5
    addWire(-4+ox,-5,4.84,Math.PI/2);          //Wire6
    addWire(4+ox,-5,4.84,-Math.PI/2);          //Wire7
    bstr[0]="5 mm";bstr[1]="10 mm";
    bstr[2]="15 mm";bstr[3]="20 mm";
    bstr[4]="25 mm";bstr[5]="30 mm";
    bstr2[0]='5';bstr2[0]='10';
    bstr2[0]='15';bstr2[0]='20';
    bstr2[0]='25';bstr2[0]='30';
    lx[0]=6;lx[1]=13.5;
    lx[2]=6;lx[3]=13.5;
    lx[4]=6;lx[5]=13.5;
    ly[0]=6.5;ly[1]=6.5;
    ly[2]=0;ly[3]=0;
    ly[4]=-7;ly[5]=-7;
    lp.position.set(-4.5,4.2,0);
    flag=0;
    Switch.position.set(-0.8+ox,-3.8+oy,0);
    fakeSwitch.position.set(-0.2+ox,-3.5+oy,0);
    Switch.rotation.z=Math.PI/3;
    fakeSwitch.rotation.z=Switch.rotation.z;
    charge.position.set(-6.5+ox,2.1+oy,0);
    dir=0;
    for(var i=0;i<6;i++){
        lamp[i].position.set(lx[i],ly[i],0);
    }
    clamp=0;
}
function addElements(){

}
function loadExperimentElements(){
    st=0;dir=0;
    PIEsetExperimentTitle("Current through wires of different radius");
    PIEsetDeveloperName("Prateek Karnal");
    initialiseHelp();
    initialiseInfo();
    initialiseScene();
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    addText();
    addBatteryText();
    PIEscene.background = new THREE.Color( 0x0288D1);       //background color
    //lighting starts
    var light = new THREE.PointLight( 0xff0000, 7, 200 );
    PIEaddElement( light );
    light.position.set(-50,50,50);
    //Lighting ends
    //loadFont();
    OrbControls = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);
    OrbControls.dispose();
    document.getElementById("start").addEventListener("click", startAnimation);
    document.getElementById("stop").addEventListener("click", stopAnimation  );
    document.getElementById("pause").addEventListener("click", dopause);
    document.getElementById("resume").addEventListener("click", doresume); 
    ox=-8;oy=0;sel=0;
    declareElements();		// adding all elements in scene
    positionElements();
    addElements();
        addbText();
    objects.push(fakeSwitch); // fake invisible switch to increase impact area
    objects.push(Switch);
    for(var i=0;i<6;i++){
        objects.push(lamp[i]);
        PIEdragElement(lamp[i]);
        PIEsetDrag(lamp[i],myBallDrag);
    }
    PIEdragElement(fakeSwitch);
    PIEsetDrag(fakeSwitch, myBallDrag);
    document.addEventListener('mousedown', onDocumentMouseDown, false );
    document.addEventListener('touchstart', onDocumentTouchStart, false );
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
    sel=0;
    btmesh[clamp].position.set(100,100,100);
    btmesh[clamp].material.opacity=0;
    lamp[clamp].position.set(lx[clamp],ly[clamp],0);
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    stopAnimation();
}
function updateExperimentElements(t, dt){
    rectMove(6.5+ox,-6.5+ox,3.93+oy,-5+oy,0.0067*(clamp+1)/2.5,dt,charge);
    PIErender();
}