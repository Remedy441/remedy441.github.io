
var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;	
var switches,flip;      //Switch
var flag;               //for deciding which wire is selected
var div;                //adding text elements
var line;               //wire
var cylinder;           //batteries
var circle;             //terminals
var text;                //TextNode
var rad,rad2,rad3,rad4; //radio buttons
var button;             //Note and Hide/Show Button Drag/Select
var myBack;             //back wall
var backB=-4.0;
var modalContentStyle;
var ampere;             //reading on ammeter
var x,y,z,t;            //table variables
var agwire;             //different wires
var cuwire;
var wwire;
var niwire;
var ct;   
var ct2=0,ct3=0,qct=1;               //to know state of show/hide 
//var ct2=1;              //and drag/drop buttons
var current,voltage,resistivity,resistance; // display variables
var currentReading,resReading,resistReading,voltReading; //readings on display panel
var tri1;           //Current motion
var rot;            //to determine direction of electron motion
var needle;         //ammeter needle

function displayPanel()
{
    current="Current(A)";
    resistance="Resistance(ohm)";
    voltage="Voltage(V)";
    resistivity="Resistivity(ohm m)";
    PIEaddDisplayText(current, currentReading);
    PIEaddDisplayText(resistance, resistReading);
    PIEaddDisplayText(voltage, voltReading);
    PIEaddDisplayText(resistivity, resReading);
}

function initialiseOtherVariables()
{
    currentReading=0.0000000001,resReading=0.0000000001,resistReading=0.1,voltReading=20.0;

// polarity
    div=document.createElement("div");
    div.setAttribute("id","pol");
    div.style="color:black";
    div.innerHTML="<b>+<br><br><br><br><br><br><br><br>_<br>+<br><br><br><br><br><br><br><br>_</b>";
    div.style.position='fixed';
    div.style.top=35.8 + '%';
    div.style.left=20 + '%';
    document.body.appendChild(div);

/*//info
    div=document.createElement("div");
    div.setAttribute("id","div1");
    div.style="color:black font-weight: bold;";
    div.innerHTML="<-- <u>Click To switch between Drag mode and Selection mode</u>";
    div.style.position='fixed';
    div.style.top=5 + '%';
    div.style.left=16+ '%';
    document.body.appendChild(div);

    div=document.createElement("div");
    div.setAttribute("id","div1");
    div.style="color:black font-weight: bold;";
    div.innerHTML=" <u>If Drag Mode ON move the button left/right for ON/OFF</u>";
    div.style.position='fixed';
    div.style.top=90 + '%';
    div.style.left=28+ '%';
    document.body.appendChild(div);
    */

//+  - text
    div=document.createElement("div");
    div.setAttribute("id","sign");
    div.style="color:black";
    div.innerHTML="&#160;&#160;&#160;Ammeter<br><b>+ &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; -</b>";
    div.style.position='fixed';
    div.style.top=18 + '%';
    div.style.left=53 + '%';
    document.body.appendChild(div);



//text element  

    div=document.createElement("div");
    div.setAttribute("id","div4");
    div.style="color:black font-weight: bold;";
    div.innerHTML="SILVER ";
    div.style.position='absolute';
    div.style.top= 25 + '%';
    div.style.left= 75 + '%';
    document.body.appendChild(div);

    div=document.createElement("div");
    div.setAttribute("id","div5");
    div.style="color:black font-weight: bold;";
    text=document.createTextNode("COPPER ");
    div.appendChild(text);
    div.style.position='absolute';
    div.style.top=33 + '%';
    div.style.left=75 + '%';
    document.body.appendChild(div);

    div=document.createElement("div");
    div.setAttribute("id","div6");
    div.style="color:black font-weight: bold;";
    text=document.createTextNode("TUNGSTEN ");
    div.appendChild(text);
    div.style.position='absolute';
    div.style.top=41 + '%';
    div.style.left=75 + '%';
    document.body.appendChild(div);

    div=document.createElement("div");
    div.setAttribute("id","div7");
    div.style="color:black font-weight: bold;";
    text=document.createTextNode("NICKEL ");
    div.appendChild(text);
    div.style.position='absolute';
    div.style.top=49 + '%';
    div.style.left=75 + '%';
    document.body.appendChild(div);

    
// note button
    button=document.createElement("button");
    button.setAttribute("id","note");
    button.setAttribute("type","submit");
    button.innerHTML="Note<br>Reading";
    button.style.position='fixed';
    button.style.top=200+'px';
    button.style.left=10+'px';
    document.body.appendChild(button);

// Show/Hide button
    button=document.createElement("button");
    button.setAttribute("id","show");
    button.setAttribute("type","submit");
    button.innerHTML="Hide";
    button.style.position='fixed';
    button.style.top=30+'px';
    button.style.left=10+'px';
    document.body.appendChild(button);

/*//Drag/select button
    button=document.createElement("button");
    button.setAttribute("id","option");
    button.setAttribute("type","submit");
    button.innerHTML="Use Drag Mode";
    button.style.position='fixed';
    button.style.top=30+'px';
    button.style.left=60+'px';
    document.body.appendChild(button);
    */

//ammeter reading
    ampere=document.createElement("div");
    ampere.setAttribute("id","amp");
    ampere.style="color:white";
    ampere.style.position='fixed';
    ampere.style.top=24.3 + '%';
    ampere.style.left=56.3 + '%';
    document.body.appendChild(ampere);
    
}
function observationTable()
{
    //Table starts
    x = document.createElement("TABLE");
    x.style=modalContentStyle;
    x.style.position = 'fixed';
    x.style.width = 50;
    x.style.height = 50;
    x.style.backgroundColor = "blue";
    x.style.top = 54 + 'px';
    x.style.left = 5 + 'px';
    x.setAttribute("id", "myTable");
    document.body.appendChild(x);

    y = document.createElement("TR");
    y.style=modalContentStyle;
    y.setAttribute("id", "myTr");
    document.getElementById("myTable").appendChild(y);

    z = document.createElement("TH");
    z.style=modalContentStyle;
    t = document.createTextNode("Material");
    z.appendChild(t);
    document.getElementById("myTr").appendChild(z);

    z = document.createElement("TH");
    z.style=modalContentStyle;
    t = document.createTextNode("Current (Amp)");
    z.appendChild(t);
    document.getElementById("myTr").appendChild(z);

    y = document.createElement("TR");
    y.style=modalContentStyle;
    y.setAttribute("id", "myTr2");
    document.getElementById("myTable").appendChild(y);

    z = document.createElement("TD");
    z.style=modalContentStyle;
    t = document.createTextNode("SILVER");
    z.appendChild(t);
    document.getElementById("myTr2").appendChild(z);

    z = document.createElement("TD");
    z.style=modalContentStyle;
    z.setAttribute("id", "ag");
    document.getElementById("myTr2").appendChild(z);


    y = document.createElement("TR");
    y.style=modalContentStyle;
    y.setAttribute("id", "myTr3");
    document.getElementById("myTable").appendChild(y);

    z = document.createElement("TD");
    z.style=modalContentStyle;
    t = document.createTextNode("COPPER");
    z.appendChild(t);
    document.getElementById("myTr3").appendChild(z);

    z = document.createElement("TD");
    z.style=modalContentStyle;
    z.setAttribute("id", "cu");
    document.getElementById("myTr3").appendChild(z);

    y = document.createElement("TR");
    y.style=modalContentStyle;
    y.setAttribute("id", "myTr4");
    document.getElementById("myTable").appendChild(y);

    z = document.createElement("TD");
    z.style=modalContentStyle;
    t = document.createTextNode("TUNGSTEN");
    z.appendChild(t);
    document.getElementById("myTr4").appendChild(z);

    z = document.createElement("TD");
    z.style=modalContentStyle;
    z.setAttribute("id", "w");
    document.getElementById("myTr4").appendChild(z);

    y = document.createElement("TR");
    y.style=modalContentStyle;
    y.setAttribute("id", "myTr5");
    document.getElementById("myTable").appendChild(y);

    z = document.createElement("TD");
    z.style=modalContentStyle;
    t = document.createTextNode("NICKEL");
    z.appendChild(t);
    document.getElementById("myTr5").appendChild(z);

    z = document.createElement("TD");
    z.style=modalContentStyle;
    z.setAttribute("id", "ni");
    document.getElementById("myTr5").appendChild(z);
//Table ends
}
        var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Current through wires of different material</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows a simple circuit consisting of a few cells, a gap, an ammeter and a switch. The gap can be plugged by wires of different material </p>";
    helpContent = helpContent + "<p>(same length and radius) provided. </p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, select any wire from the options to fill the gap.</p>";
    helpContent = helpContent + "<p>The table's visibility can be controlled by the <b>Hide</b> button on top left. </p>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the <b>start button.</b></p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, turn on the switch for the current to flow in the circuit containing selected wire .</p>";
    helpContent = helpContent + "<p>The ammeter will show the reading of the current( in amperes) flowing in the circuit.</p>";
    helpContent = helpContent + "<p>The <b>display panel</b> shows current, resistance, resistivity and resistivity reading.</p>";
    helpContent = helpContent + "<p>Note down the reading of current in the observation table for the selected material wire by clicking the <b>Note</b> button. </p>"; 
    helpContent = helpContent + "<p><b>Turn off the switch</b> after noting down the reading and then select other wires similarly to fill the table.</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line.</p>";
    helpContent = helpContent + "<p>To clear the table and start from the beginning, click on the <b>reset</b> button from the animation controls on the top line.</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Current through wires of different material</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows a simple circuit consisting of a few cells, a gap, an ammeter and a switch. The gap can be used by wires of different material </p>";
    infoContent = infoContent + "<p>(same length and radius). </p>";
    infoContent = infoContent + "<h3>Resistance</h3>";
    infoContent = infoContent + "<p>When the electrons travel through wires, they experience some sort of hindrance in their way. Resistance, as the name suggests is the hindrance or the </p>";
    infoContent = infoContent + "<p>obstruction in the flow of charge. </p>";
    infoContent = infoContent + "<h3>Factors on which resistance of conductor depends</h3>";
    infoContent = infoContent + "<p>1. Length</p>";
    infoContent = infoContent + "<p>2. Area of cross section / thickness</p>";
    infoContent = infoContent + "<p>3. Nature of material </p>";
    infoContent = infoContent + "<h3>Resistivity / Electrical resistivity</h3>";
    infoContent = infoContent + "<p>The resistance of a uniform metallic conductor is directly proportional to its length (l) and inversely</p>";
    infoContent = infoContent + "<p>proportional to the area of cross-section (A).</p>";
    infoContent = infoContent + "<p>That is, R &#x221D; l</p>";
    infoContent = infoContent + "<p>and R &#x221D; 1/A</p>";
    infoContent = infoContent + "<p>R&#x221D; l /A</p>";
    infoContent = infoContent + "<p>&#8756; R = &rho; l / A</p>";
    infoContent = infoContent + "<p>where &rho; (rho) is a constant of proportionality and is called the electrical resistivity of the material of the</p>";
    infoContent = infoContent + "<p>conductor. It is a characteristic property of the material.</p>";
    infoContent = infoContent + "<p>The SI unit of resistivity is:  &#x2126; m. It is a characteristic property of the material. The metals and alloys</p>";
    infoContent = infoContent + "<p>have very low resistivity in the range of 10<sup>–8</sup> &#x2126; m to 10<sup>–6</sup> &#x2126; m. They are good conductors of electricity.</p>";
    infoContent = infoContent + "<p> Insulators like rubber and glass have resistivity of the order of 10<sup>12</sup> to 10<sup>17</sup> &#x2126; m.</p>";
    infoContent = infoContent + "<p> Both the resistance and resistivity of a material vary with temperature.</p>";
    infoContent = infoContent + "<p>Not all materials are equal in terms of their conductivity.</p>"
    infoContent = infoContent + "<p>using V = IR (ohm's law)</p>";
    infoContent = infoContent + "<p>&#8756; I = V/R ;</p>";
    infoContent = infoContent + "<p>A change in ammeter reading is observed when a wire of different material</p>";
    infoContent = infoContent + "<p> of the same length and the same area of cross-section is used.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}
function initialiseScene()
{
    //controls = new THREE.OrbitControls( PIEcamera, PIErenderer.domElement );
    //controls.addEventListener( 'change', PIErender() );   
    modalContentStyle = "background-color: #ffeefe; margin: auto; padding: 2px; border: 1px solid #888; width: 5%;color:red";
    mySceneTLX = -40;
    mySceneTLY = 25;
    mySceneBRX = 40;
    mySceneBRY = -25;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
    wallThickness = 22;
    observationTable();
    //table hide/show
    document.getElementById("show").addEventListener("click",function(){
        if(ct==1)
        {   document.getElementById("myTable").style.visibility = "hidden";
            document.getElementById("show").innerHTML="Show";
            ct=2;
        }
        else
        {
            document.getElementById("myTable").style.visibility = "visible";
            document.getElementById("show").innerHTML="Hide";
            ct=1;
        }
        
    });
    /*//Select/drag option
     document.getElementById("option").addEventListener("click",function(){
        if(ct2==1)//when radio mode on
        {   
            document.getElementById("option").innerHTML="Select";
            ct2=2;
        }
        
        else//when drag mode on
        {
            document.getElementById("option").innerHTML="Drag";
            ct2=1;
        }
        
    });*/
}
    
/** Loader Function */
function loadExperimentElements()
{
	PIEsetExperimentTitle("Current through wires of different material");
    PIEsetDeveloperName("Tarun Sikka");
    PIEhideControlElement();
    initialiseOtherVariables();
    displayPanel();
    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();
    initialiseScene();

 //back
geometry = new THREE.BoxGeometry( mySceneW * 2, mySceneH * 2, wallThickness );
material = new THREE.MeshLambertMaterial( {color: 0x1b5e20} );
myBack = new THREE.Mesh( geometry, material );
myBack.position.set(myCenterX, myCenterY, backB - (wallThickness / 2));
myBack.receiveShadow = true;
PIEaddElement(myBack);

 //wire  
geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(-30,-15, 0));
geometry.vertices.push(new THREE.Vector3(-30, -10, 0));
material = new THREE.LineBasicMaterial({ color: 0x0000ff });
line = new THREE.Line(geometry, material);
PIEaddElement(line);

//batteries
geometry = new THREE.CylinderGeometry( 1.5, 1.5, 2, 32, 0 );
material = new THREE.MeshBasicMaterial({ color: 0xC25C10 });
cylinder = new THREE.Mesh( geometry, material );
cylinder.position.set(-30,7,0);
PIEaddElement(cylinder);
geometry = new THREE.CylinderGeometry( 1.5, 1.5, 6, 32, 0 );
material = new THREE.MeshBasicMaterial({ color: 0x000000 });
cylinder = new THREE.Mesh( geometry, material );
cylinder.position.set(-30,3,0);
PIEaddElement(cylinder);

geometry = new THREE.CylinderGeometry( 1.5, 1.5, 2, 32, 0 );
material = new THREE.MeshBasicMaterial({ color: 0xC25C10 });
cylinder = new THREE.Mesh( geometry, material );
cylinder.position.set(-30,-3,0);
PIEaddElement(cylinder);
geometry = new THREE.CylinderGeometry( 1.5, 1.5, 6, 32, 0 );
material = new THREE.MeshBasicMaterial({ color: 0x000000 });
cylinder = new THREE.Mesh( geometry, material );
cylinder.position.set(-30,-7,0);
PIEaddElement(cylinder);

//wire
geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(-30, -2, 0));
geometry.vertices.push(new THREE.Vector3(-30,15, 0));
geometry.vertices.push(new THREE.Vector3(-22.5, 15, 0));
material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
line = new THREE.Line(geometry, material);
PIEaddElement(line);

//terminals
geometry = new THREE.CircleGeometry(1 , 100 );
material = new THREE.MeshBasicMaterial( { color: 0xc6ff00 } );
circle = new THREE.Mesh( geometry, material );
circle.position.set(-22.5,15,.4);
circle.castShadow=true;
PIEaddElement(circle);
geometry = new THREE.CircleGeometry(1 , 100 );
material = new THREE.MeshBasicMaterial( { color: 0xc6ff00 } );
circle = new THREE.Mesh( geometry, material );
circle.position.set(-7.5,15,.4);
circle.castShadow=true;
PIEaddElement(circle);

//wire
geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(-6.5,15, 0));
geometry.vertices.push(new THREE.Vector3( 5, 15, 0));
material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
line = new THREE.Line(geometry, material);
PIEaddElement(line);

//ammeter
geometry = new THREE.CylinderGeometry( 2, 2, .6, 32, 100, false, 4.71,3.14 );
material = new THREE.MeshBasicMaterial({ color: 0x000000 });
cylinder = new THREE.Mesh( geometry, material );
cylinder.position.set(7,15,0);
cylinder.rotation.x=1.57;
PIEaddElement(cylinder);
geometry = new THREE.CylinderGeometry( 2, 2, .2, 32, 100, false, 1.57,3.14 );
material = new THREE.MeshBasicMaterial({ color: 0xffffff });
cylinder = new THREE.Mesh( geometry, material );
cylinder.position.set(7,15,0);
cylinder.rotation.x=1.57;
PIEaddElement(cylinder);
//needle
geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(7,13.2,.2));
geometry.vertices.push(new THREE.Vector3(7,16.8,.2));
material = new THREE.LineBasicMaterial({ color: 0xff0000 });
needle = new THREE.Line(geometry, material);
needle.position.set(.08,0,.1);
PIEaddElement(needle);

//wire
geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(9, 15, 0));
geometry.vertices.push(new THREE.Vector3(20, 15, 0));
geometry.vertices.push(new THREE.Vector3(20, -15, 0));
geometry.vertices.push(new THREE.Vector3(6.8, -15, 0));
material = new THREE.LineBasicMaterial({ color: 0x0000ff });
line = new THREE.Line(geometry, material);
PIEaddElement(line);

geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(2, -15, 0));
geometry.vertices.push(new THREE.Vector3(-30, -15, 0));
material = new THREE.LineBasicMaterial({ color: 0x0000ff });
line = new THREE.Line(geometry, material);
PIEaddElement(line);

//switches terminal
geometry = new THREE.CircleGeometry(.8 , 100 );
material = new THREE.MeshBasicMaterial( { color: 0xff1f00 } );
circle = new THREE.Mesh( geometry, material );
circle.position.set(6.5,-15,.4);
circle.castShadow=true;
PIEaddElement(circle);
//switch
geometry = new THREE.CylinderGeometry( .2, .2, 4, 0, 0 );
material = new THREE.MeshBasicMaterial({ color: 0x000000 });
switches = new THREE.Mesh( geometry, material );
switches.rotation.z=-.784;
switches.position.set(3.4,-13.7,0);
PIEaddElement(switches);
//dup
geometry = new THREE.CylinderGeometry( .2, .2, 4, 0, 0 );
material = new THREE.MeshBasicMaterial({ color: 0x000000 });
switchesd = new THREE.Mesh( geometry, material );
switchesd.position.set(3.4,-13.7-2.9,-5);
switchesd.rotation.z=-.784;
switchesd.castShadow=false;
switchesd.receiveShadow=false;
PIEaddElement(switchesd);
PIEdragElement(switchesd);


//silver wire
geometry = new THREE.CylinderGeometry( .25, .25, 15, 0, 0 );
material = new THREE.MeshBasicMaterial({ color: 0xbfbfbf });
agwire = new THREE.Mesh( geometry, material );
agwire.rotation.z=1.56;
agwire.position.set(35,12,0);
PIEaddElement(agwire);    
 //PIEdragElement(agwire);   
//dup
geometry = new THREE.CylinderGeometry( .25, .25, 15, 0, 0 );
material = new THREE.MeshBasicMaterial({ color: 0x72827b });
agwired = new THREE.Mesh( geometry, material );
agwired.rotation.z=1.56;
agwired.position.set(35,10.2,-5);
PIEaddElement(agwired);    
PIEdragElement(agwired);

//copper wire
geometry = new THREE.CylinderGeometry( .25, .25, 15, 0, 0 );
material = new THREE.MeshBasicMaterial({ color: 0xf3a808 });
cuwire = new THREE.Mesh( geometry, material );
cuwire.rotation.z=1.56;
cuwire.position.set(35,8,0);
PIEaddElement(cuwire);
//dup
geometry = new THREE.CylinderGeometry( .25, .25, 15, 0, 0 );
material = new THREE.MeshBasicMaterial({ color: 0x72827b });
cuwired = new THREE.Mesh( geometry, material );
cuwired.rotation.z=1.56;
cuwired.position.set(35,6,-5);
PIEaddElement(cuwired);
PIEdragElement(cuwired);


//tungsten wire
geometry = new THREE.CylinderGeometry( .25, .25, 15, 0, 0 );
material = new THREE.MeshBasicMaterial({ color: 0x0f0000 });
wwire = new THREE.Mesh( geometry, material );
wwire.rotation.z=1.56;
wwire.position.set(35,4,0);
PIEaddElement(wwire);
//dup
geometry = new THREE.CylinderGeometry( .25, .25, 15, 0, 0 );
material = new THREE.MeshBasicMaterial({ color: 0x72827b });
wwired = new THREE.Mesh( geometry, material );
wwired.rotation.z=1.56;
wwired.position.set(35,2.2,-5);
PIEaddElement(wwired);
PIEdragElement(wwired);

//nickel wire
geometry = new THREE.CylinderGeometry( .25, .25, 15, 0, 0 );
material = new THREE.MeshBasicMaterial({ color: 0x72827b });
niwire = new THREE.Mesh( geometry, material );
niwire.rotation.z=1.56;
niwire.position.set(35,0,0);
PIEaddElement(niwire);
//dup
geometry = new THREE.CylinderGeometry( .25, .25, 15, 0, 0 );
material = new THREE.MeshBasicMaterial({ color: 0x72827b });
niwired = new THREE.Mesh( geometry, material );
niwired.rotation.z=1.56;
niwired.position.set(35,-2,-5);
PIEaddElement(niwired);
PIEdragElement(niwired);

//triangle

//tri1
/*var geom = new THREE.Geometry();
var v1 = new THREE.Vector3(2,0,0);
var v2 = new THREE.Vector3(3,0,0);
var v3 = new THREE.Vector3(2.5,2.5,0);
console.log(geom.vertices)
geom.vertices.push( v1 );
geom.vertices.push( v2 );
geom.vertices.push( v3 );

geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
geom.computeFaceNormals();

tri1= new THREE.Mesh( geom, new THREE.MeshBasicMaterial({ color: 0x0f0000 }) );
tri1.position.x=-27.5;
tri1.position.y=17.5;
tri1.position.z=-5;
tri1.rotation.z=-1.57;
PIEaddElement(tri1);
*/
geometry = new THREE.CircleGeometry(.6 , 100 );
material = new THREE.MeshBasicMaterial( { color: 0x0f0000 } );
tri1 = new THREE.Mesh( geometry, material );
tri1.position.set(-27.5,15,.1);
tri1.castShadow=true;
PIEaddElement(tri1);

resetExperiment();
PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}

function resetExperiment()
{
    /* initialise Other Variables */
    
    document.getElementById("ag").innerHTML="";
    document.getElementById("cu").innerHTML="";
    document.getElementById("w").innerHTML="";
    document.getElementById("ni").innerHTML="";
    document.getElementById("amp").innerHTML="";
    document.getElementById("myTable").style.visibility = "visible";
    document.getElementById("show").innerHTML="Hide";
    

    currentReading=0;
    resReading=0;
    resistReading=0;
    ct=1;
    flag=0;
    rot=1;
    
    agwire.position.set(35,12,0);
    cuwire.position.set(35,8,0);
    wwire.position.set(35,4,0);
    niwire.position.set(35,0,0);

    //flip.position.set(6,-15,.2);
    switches.position.set(3.4,-13.7,0);
    switches.rotation.z=-.784;
    switchesd.position.set(3.4,-13.7-2.9,-5);
    switchesd.rotation.z=-.784;
    needle.position.set(.08,0,.1);
    needle.rotation.z=0;
        
    tri1.position.set(-27.5,15,-5);
    /* Reset Wall position */
    /* Back */
    myBack.position.set(myCenterX, myCenterY, backB - (wallThickness / 2));
}
function updateExperimentElements(t, dt)
{
    //PIEcamera.rotation.x=.684;
    //PIEcamera.position.y=myCenterY-75;
    //PIEcamera.position.z=85;
    //PIEdragElement(flip);
    
     //radio mode on
     //if(ct2==1)
    //{
        if(PIEselectedDrag==agwired||ct2==1)
        {
            //PIEstartAnimation();
        agwire.position.set(-15.5,15,0);ct2=1;
        //circle2.position.x=-15.5;
        //PIEstopAnimation();
        }
        else
        {
        agwire.position.set(35,12,0);
        }
        if(PIEselectedDrag==cuwired||ct2==2)
        {
        cuwire.position.set(-15.5,15,0);ct2=2;
        //circle2.position.x=-10.5;
        }
        else
        {
        cuwire.position.set(35,8,0);
        }
        if(PIEselectedDrag==wwired||ct2==3)
        {
        wwire.position.set(-15.5,15,0);ct2=3;
        //circle2.position.x=-5.5;
        }
        else
        {
        wwire.position.set(35,4,0);
        }
        if(PIEselectedDrag==niwired||ct2==4)
        {
        niwire.position.set(-15.5,15,0);ct2=4;
        //circle2.position.x=-.05;
        }
        else
        {
        niwire.position.set(35,0,0);
        }
    
     //Common code for both modes
     if(PIEselectedDrag==switchesd)
     {
        ct3=(ct3+1)%2;PIEselectedDrag=null;
     }
    //}
    //Drag mode on
    /*else
    {
        if(flip.position.x<5)
        {
            document.getElementById('off').checked=false;
            document.getElementById('on').checked=true;   
        }
        if(flip.position.x>=5)
        {
            document.getElementById('on').checked=false; 
            document.getElementById('off').checked=true;
        }
        if(agwire.position.x>=-15&&agwire.position.x<=-13&&agwire.position.y>=14.5&&agwire.position.y<=15.5)
            {
               if(document.getElementById('elemNickel').checked==true||document.getElementById('elemCopper').checked==true||document.getElementById('elemTungsten').checked==true)
               {
                alert("Remove previous wire first");
                document.getElementById('elemSilver').checked=false;
               }
               else
                {
                document.getElementById('elemNickel').checked=false;
                document.getElementById('elemTungsten').checked=false;    
                document.getElementById('elemCopper').checked=false;
                document.getElementById('elemSilver').checked=true;
                }
            }
            else{
            document.getElementById('elemSilver').checked=false;
            }
            
            if(cuwire.position.x>=-15&&cuwire.position.x<=-13&&cuwire.position.y>=14.5&&cuwire.position.y<=15.5)
            {
                if(document.getElementById('elemNickel').checked==true||document.getElementById('elemSilver').checked==true||document.getElementById('elemTungsten').checked==true)
               {
                alert("Remove previous wire first");
                document.getElementById('elemCopper').checked=false;
               }
               else
                {
            document.getElementById('elemNickel').checked=false;
            document.getElementById('elemTungsten').checked=false;                
            document.getElementById('elemSilver').checked=false;
            document.getElementById('elemCopper').checked=true;
                }
            }
            else
            {
            document.getElementById('elemCopper').checked=false;
            }

            if(wwire.position.x>=-15&&wwire.position.x<=-13&&wwire.position.y>=14.5&&wwire.position.y<=15.5)
            {
                if(document.getElementById('elemNickel').checked==true||document.getElementById('elemCopper').checked==true||document.getElementById('elemSilver').checked==true)
               {
                alert("Remove previous wire first");
                document.getElementById('elemTungsten').checked=false;
               }
               else
                {
            document.getElementById('elemNickel').checked=false;
            document.getElementById('elemTungsten').checked=true;                
            document.getElementById('elemSilver').checked=false;
            document.getElementById('elemCopper').checked=false;
                }
            }
            else
            {
            document.getElementById('elemTungsten').checked=false;
            }

            if(niwire.position.x>=-15&&niwire.position.x<=-13&&niwire.position.y>=14.5&&niwire.position.y<=15.5)
            {
                if(document.getElementById('elemSilver').checked==true||document.getElementById('elemCopper').checked==true||document.getElementById('elemTungsten').checked==true)
               {
                alert("Remove previous wire first");
                document.getElementById('elemNickel').checked=false;
               }
               else
                {
            document.getElementById('elemNickel').checked=true;
            document.getElementById('elemTungsten').checked=false;                
            document.getElementById('elemSilver').checked=false;
            document.getElementById('elemCopper').checked=false;
                }
            }
            else
            {
            document.getElementById('elemNickel').checked=false;
            }
    }*/
     //Common code for both modes
     if(ct3==1)
{
    tri1.position.z=.1;
    //flip.position.set(3,-15,1);
    switches.position.set(4,-15,0);
    switches.rotation.z=-1.56;
    switchesd.position.set(4,-18.1,-5);
    switchesd.rotation.z=-1.56;
    
    if(ct2==1) 
  {
    if(flag!=0&&flag!=1)//ensure switch is off before changing wire
    {
        alert("Turn off the switch before changing wire");
        ct2=0;
        ct3=0;
        PIEselectedDrag=null;
        //flip.position.set(6,-15,.2);
    }
    else
    {
    //silver radio button is checked
    needle.rotation.z=-0.784;
    needle.position.set(-8.5,9.2,.1);
    document.getElementById("amp").innerHTML="1.5";
    document.getElementById("amp").style.left=56.1 + '%';
    currentReading=1.5;resistReading=0.24;resReading=.000000016;
    flag=1;
    document.getElementById("note").addEventListener("click",function(){
    if(flag==1)                     //checking which wire is selected when switch is on(for noting the reading)
        document.getElementById("ag").innerHTML="1.5";});
    }
  }

    else if(ct2==2) 
  {
    if(flag!=0&&flag!=2)//ensure switch is off before changing wire
    {
        alert("Turn off the switch before changing wire");
        ct2=0;
        ct3=0;
        PIEselectedDrag=null;
        //flip.position.set(6,-15,.2);
    }
    else
    {
  //copper radio button is checked
  needle.rotation.z=-0.584;
    needle.position.set(-7.2,6.2,.1);
   document.getElementById("amp").innerHTML="1.3";
   document.getElementById("amp").style.left=56.1 + '%';
   currentReading=1.3;resistReading=0.25;resReading=.0000000162;
   flag=2;
   document.getElementById("note").addEventListener("click",function(){
    if(flag==2)             //checking which wire is selected when switch is on(for noting the reading)
        document.getElementById("cu").innerHTML="1.3";});
    }
  }

   else if(ct2==3) 
  {
    if(flag!=0&&flag!=3)//ensure switch is off before changing wire
    {
        alert("Turn off the switch before changing wire");
        ct2=0;
        ct3=0;
        PIEselectedDrag=null;
        //flip.position.set(6,-15,.2);
    }
    else
    {
  //Tungsten radio button is checked
    needle.rotation.z=-0.1;
    needle.position.set(-1.2,.6,.1);
   document.getElementById("amp").innerHTML="0.38";
   document.getElementById("amp").style.left=55.8 + '%';
   currentReading=0.38;resistReading=0.80;resReading=.000000052;
   flag=3;
   document.getElementById("note").addEventListener("click",function(){
    if(flag==3)             //checking which wire is selected when switch is on(for noting the reading)
        document.getElementById("w").innerHTML="0.38";});
    }
  }

   else if(ct2==4) 
  {
    if(flag!=0&&flag!=4)//ensure switch is off before changing wire
    {
        alert("Turn off the switch before changing wire");
        ct2=0;
        ct3=0;
        PIEselectedDrag=null;
        //flip.position.set(6,-15,.2);
    }
    else
    {
  //nickel radio button is checked
  needle.rotation.z=-0.1;
      needle.position.set(-1.2,.6,.1);
   document.getElementById("amp").innerHTML="0.28";
   document.getElementById("amp").style.left=55.8 + '%';
   currentReading=0.28;resistReading=1.05;resReading=.0000000684;
   flag=4;
   document.getElementById("note").addEventListener("click",function(){
    if(flag==4)             //checking which wire is selected when switch is on(for noting the reading)
        document.getElementById("ni").innerHTML="0.28";});
    }
  }

  else{
    alert("Turn off the switch before placing wire");
    ct3=0;
    PIEselectedDrag=null;
    //flip.position.set(6,-15,.2);
  }
}
//when switch is off
else
{ 
    /*PIEcameraZ=5;
    PIEcameraAngle=3.14;
    PIEcameraTarget.x = -5;
    PIEcameraTarget.y = -10 ;
    PIEcameraTarget.z = -2;
    PIEcamera.lookAt(PIEcameraTarget);*/
    needle.position.set(.08,0,.1);
    needle.rotation.z=0;
    tri1.position.z=-5;
    switches.position.set(3.4,-13.7,0);
    switches.rotation.z=-.784;
    switchesd.position.set(3.4,-13.7-2.9,-5);
    switchesd.rotation.z=-.784;
    document.getElementById("amp").innerHTML="";
    currentReading=0;resistReading=0;resReading=0;
    flag=0;
}
if(flag!=0)
{
    if(tri1.position.x==20&&tri1.position.y==15)
        {
            //tri1.position.x=22.5;   
            //tri1.rotation.z-=1.57;
            rot++;
        }
    else if(tri1.position.x==20&&tri1.position.y==-15)
        {
            //tri1.position.y=-17.5;
            //tri1.rotation.z-=1.57;
            rot++;
        }
        else if(tri1.position.x==-30&&tri1.position.y==-15)
        {
            //tri1.position.x=-32.5;
            //tri1.rotation.z-=1.57;
            rot++;
        }
        else if(tri1.position.x==-30&&tri1.position.y==15)
        {
            //tri1.position.y=17.5;
            //tri1.rotation.z-=1.57;
            rot++;
        }
        if(rot==1)
            tri1.position.x+=.5;
        else if(rot==2)
            tri1.position.y-=.5;
        else if(rot==3)
            tri1.position.x-=0.5;
        else if(rot==4)
            tri1.position.y+=0.5;
        else
            {rot=1;tri1.position.x+=.5;}
}
PIEchangeDisplayText(current, currentReading);
PIEchangeDisplayText(resistance, resistReading);
PIEchangeDisplayText(resistivity, resReading);
}
		