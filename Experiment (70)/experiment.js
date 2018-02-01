/**
 * Created by anishkelkar on 2/3/17.
 */

/* Scene Dimensions*/
var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */
/* User Input*/
var sidesCount;
var sidesCountTag;
var polyRadius;
var polyRadiusTag;

var geometry;
var material;
var cover;

/* Polygon*/
var polyX;
var polyY;
var poly;
var polyColor;
var borderColor;

/* Display Stuffs*/
var canvas;
var outlineMesh1;

var vexX=[];
var vexY=[];

/* Text Tags*/
var header;
var polyName;
var geomDiag=[];
var tempCirc=[];
var diag=[];

/* Buttons*/
var diagButton;
var intAngleButton;
var extAngleButton;

/* Diagonals*/
var diagDisplayed;
var diagCount;

/* Interior angle */
var intAngle;
var intAngleArc;
var animIntAngle;
var intAngleButtonOn;
var intAngleValDisplay;

/* Exterior angle */
var extAngle;
var extAngleArc;
var animExtAngle;
var extAngleButtonOn;
var extAngleValDisplay;

var init=[];
init.push("No polygon possible!");
init.push("No polygon possible!");
init.push("No polygon possible!");
init.push("Equilateral Triangle");
init.push("Square");
init.push("Penta");
init.push("Hexa");
init.push("Hepta");
init.push("Octa");
init.push("Nona");
init.push("Deca");
init.push("Undeca");
init.push("Dodeca");
init.push("TriDeca");
init.push("TetraDeca");
init.push("PentaDeca");
init.push("HexaDeca");
init.push("HeptaDeca");
init.push("OctaDeca");
init.push("EnneaDeca");
init.push("Icosa");
init.push("Icosa-hena");
init.push("Icosi-di");
init.push("Icosi-tri");
init.push("Icosi-tetra");
init.push("Icosi-penta");
init.push("Icosi-hexa");
init.push("Icosi-hepta");
init.push("Icosi-octa");
init.push("Icosi-ennea");
init.push("triaconta");
init.push("triaconta-hena");
init.push("triaconta-di");

/* Display Elements*/

function clearScreen()
{
    removeDiag();
    PIEscene.remove(cover);
    PIEscene.remove(outlineMesh1);
    PIEscene.remove(intAngleArc);
    PIEscene.remove(extAngleArc);
    removeVex();
    PIEscene.remove(poly);
    polyName.innerHTML="";
    intAngleButtonOn=false;
    animIntAngle=0;
    animExtAngle=0;
    intAngleValDisplay.innerHTML="";
    extAngleButtonOn=false;
    extAngleValDisplay.innerHTML="";
    if(diagCount!=undefined)
    {
        diagCount.innerHTML="";
    }

    vexX=[];
    vexY=[];
}

function createCanvas()
{
    geometry= new THREE.PlaneBufferGeometry(mySceneW+3,mySceneH+2);
    material= new THREE.MeshNormalMaterial();
    canvas= new THREE.Mesh(geometry,material);
    canvas.position.set(myCenterX,myCenterY,-1);
    PIEaddElement(canvas);
}
function createButtons()
{
    /***
     * Diagonal Button
     * @type {Element}
     */
    diagButton=document.createElement("button");
    diagButton.innerHTML="Diagonals";
    document.body.appendChild(diagButton);
    diagButton.style.position="absolute";
    diagButton.style.right="5%";
    diagButton.style.top="12.5%";
    diagButton.style.fontSize="large";
    diagButton.style.display="inline-block";

    /***
     *  Interior Angle Button
     */
    intAngleButton=document.createElement("button");
    intAngleButton.innerHTML="Interior Angle";
    document.body.appendChild(intAngleButton);
    intAngleButton.style.position="absolute";
    intAngleButton.style.right="5%";
    intAngleButton.style.top="17.5%";
    intAngleButton.style.fontSize="large";
    intAngleButton.style.display="inline-block";

    /***
     *  Exterior Angle Button
     */
    extAngleButton=document.createElement("button");
    extAngleButton.innerHTML="Exterior Angle";
    document.body.appendChild(extAngleButton);
    extAngleButton.style.position="absolute";
    extAngleButton.style.right="5%";
    extAngleButton.style.top="22.5%";
    extAngleButton.style.fontSize="large";
    extAngleButton.style.display="inline-block";

}
function createBorder(){
    borderColor=0x441111;
    var outlineMaterial1 = new THREE.MeshBasicMaterial( { color: borderColor});
    outlineMesh1 = new THREE.Line( geometry, outlineMaterial1 );
    outlineMesh1.position.set(polyX,polyY,0);
    PIEaddElement(outlineMesh1);
}


/*******************
 *      Handle Functions
 **/

function handleCount(newValue){
    sidesCount=newValue;
    clearScreen();
    //createPoly();
    //PIErender();
}

function handleRadius(newValue)
{
    polyRadius=newValue;
    clearScreen();
}

/****
 * Dynamic Changes
 */

function printExtAngle()
{
    extAngleValDisplay.innerHTML=extAngle+" deg";
    extAngleValDisplay.style.position="absolute";
    extAngleValDisplay.style.left="57.5%";
    extAngleValDisplay.style.top="40%";
    extAngleValDisplay.style.fontSize="medium";
    extAngleValDisplay.style.display="inline-block";

}
function animateExtArc()
{
    var temp1=(90-(animExtAngle));
    temp1/=180;
    temp1*=Math.PI;
    var tempLength=(2*animExtAngle/180)*(Math.PI);
    PIEscene.remove(extAngleArc);
    geometry=new THREE.CircleBufferGeometry(0.15,32,temp1,tempLength);
    material= new THREE.LineBasicMaterial({color:0x663355});
    extAngleArc=new THREE.Line(geometry,material);
    extAngleArc.position.set(vexX[0],vexY[0],0.02);
    PIEaddElement(extAngleArc);
}
function createExtAngle()
{

    if(extAngleButtonOn==false)
    {
        extAngleButtonOn=true;
        animateExtArc();
    }
    else
    {
        extAngleButtonOn=false;
        PIEscene.remove(extAngleArc);
        extAngleValDisplay.innerHTML="";
    }

}

function printIntAngle()
{
    intAngleValDisplay.innerHTML=intAngle+" deg";
    intAngleValDisplay.style.position="absolute";
    intAngleValDisplay.style.left="52.5%";
    intAngleValDisplay.style.top="45%";
    intAngleValDisplay.style.fontSize="medium";
    intAngleValDisplay.style.display="inline-block";

}
function animateIntArc()
{
    var temp1=(180-(animIntAngle));
    temp1/=180;
    temp1*=Math.PI;
    var tempLength=(2*animIntAngle/180)*(Math.PI);
    PIEscene.remove(intAngleArc);
    geometry=new THREE.CircleBufferGeometry(0.15,32,temp1,tempLength);
    material= new THREE.LineBasicMaterial({color:0x663311});
    intAngleArc=new THREE.Line(geometry,material);
    intAngleArc.position.set(vexX[0],vexY[0],0.02);
    PIEaddElement(intAngleArc);
}
function createIntAngle()
{

    if(intAngleButtonOn==false)
    {
        intAngleButtonOn=true;
        animateIntArc();
    }
    else
    {
        intAngleButtonOn=false;
        //PIEscene.remove(intAngleArc);
        intAngleValDisplay.innerHTML="";
    }

}

function displayName() {


    if (sidesCount <= 2)
    {
        polyName.innerHTML="No polygon possible!";
    }
    else if ((sidesCount==3)||(sidesCount==4))
    {
        polyName.innerHTML=init[sidesCount];
    }
    else
    {
        var str = init[sidesCount]+"gon";
        polyName.innerHTML=str;
    }

}
    function displayDiagCount() {
    diagCount=document.createElement("body");
    document.body.appendChild(diagCount);
    diagCount.innerHTML=" No. of diagonals are " +"("+sidesCount+" * ("+sidesCount+" - 1 )"+" )/2 -"+sidesCount +" = " + ((sidesCount*(sidesCount-1))/2 -sidesCount) ;
    diagCount.style.position="absolute";
    diagCount.style.left="35%";
    diagCount.style.bottom="20%";
    diagCount.style.fontSize="large";
    diagCount.style.display="inline-block";

}
function diagButtonAction()
{
    if(diagDisplayed==false)
    {
        diagDisplayed=true;
        drawDiags();
        displayDiagCount();
    }
    else
    {
        removeVex();
        removeDiag();
        if(diagCount!=undefined)
        {
            diagCount.innerHTML="";
        }
        diagDisplayed=false;
    }
}
function removeVex()
{
    while(tempCirc.length!=0)
    {
        PIEscene.remove(tempCirc[tempCirc.length-1]);
        tempCirc.pop();
    }
}

function removeDiag()
{
    while(diag.length!=0)
    {
        PIEscene.remove(diag[diag.length-1]);
        diag.pop();

    }
}
function drawDiags()
{
    var i,j;
    var theta;
    removeVex();
    material = new THREE.MeshBasicMaterial({color:0x331111});
    geometry= new THREE.CircleBufferGeometry(0.015,32);
    //console.log(sidesCount);
    tempCirc=[];
    for(i=0;i<sidesCount;i++)
    {
        tempCirc.push(new THREE.Mesh(geometry,material));
        theta=(2*Math.PI*i)/sidesCount;
        tempCirc[i].position.set(vexX[i],vexY[i],0.02);
        PIEaddElement(tempCirc[i]);
    }
    material=new THREE.LineBasicMaterial({color:0x331111});
    removeDiag();
    diag=[];
    geomDiag=[];
    for(i=0;i<sidesCount;i++)
    {
        //geometry.vertices=[];
        geomDiag.push(new THREE.Geometry());
        for(j=i+1;j<sidesCount;j++)
        {
            geomDiag[i].vertices.push(new THREE.Vector3(vexX[i],vexY[i],0.02));
            geomDiag[i].vertices.push(new THREE.Vector3(vexX[j],vexY[j],0.02))
        }
        diag.push(new THREE.Line(geomDiag[i],material));
        PIEaddElement(diag[diag.length-1]);
    }

}

function createPoly(){

    if(sidesCount>=3)
    {
        polyColor=polyColor;
        geometry= new THREE.CircleGeometry(polyRadius,sidesCount);
        material= new THREE.MeshBasicMaterial({color:polyColor});
        poly= new THREE.Mesh(geometry,material);
        poly.position.set(polyX,polyY,0);
        PIEaddElement(poly);
        createBorder();
        geometry= new THREE.CircleGeometry(polyRadius-0.015,sidesCount);
        material= new THREE.MeshBasicMaterial({color:polyColor});
        cover= new THREE.Mesh(geometry,material);
        cover.position.set(polyX,polyY,0.01);
        PIEaddElement(cover);
    }
}


/****
 * Initialise Functions
 */

function initialiseControlVariables()
{
    sidesCountTag="sides = ";
    sidesCount=2;
    polyRadiusTag="Circumradius =   "
}

function initialiseControls() {
    initialiseControlVariables();
    // Create Input Slider
    PIEaddInputSlider(sidesCountTag, sidesCount, handleCount, 1, 32, 1);
    PIEaddInputSlider(polyRadiusTag, polyRadius, handleRadius, 0.05, 0.5, 0.01);
    //Display Panel
    PIEaddDisplayText(sidesCountTag,sidesCount);
    PIEaddDisplayText(polyRadiusTag,polyRadius);
}
var helpContent;
function initialiseHelp() {

    helpContent="";
    helpContent = helpContent + "<h2>Displaying Regualar Polygon  help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>This experiment generates a n-sided regualar polygon where value of n is given by the user.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to five sliders.</p>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>X&nbsp;&nbsp;:&nbsp;Sets the value of n.</li>";
    helpContent = helpContent + "<li>Y&nbsp;&nbsp;:&nbsp;Sets the value of the cicumradius.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, The diagonals , the internal angle and the external angle is displayed.</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Diagonals&nbsp;&nbsp;:&nbsp;On pressing the Diagonals button the diagonals will be created. It's calculation will also be displayed.<br> + </li>";
    helpContent = helpContent + "<li>Internal Angle&nbsp;&nbsp;:&nbsp;The value of the internal angle of polygon is animated</li>";
    helpContent = helpContent + "<li>External Angle&nbsp;:&nbsp;The value of the external angle of polygon is animated.</li>";
    helpContent = helpContent + "</ul>";
    PIEupdateHelp(helpContent);
}
var infoContent;
function initialiseInfo(){
    infoContent =  "";
    infoContent = infoContent + "<h2>n-sided Regular Polygon</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>This experiment generates a n-sided regualar polygon where value of n and the value of the circumradius is given by the user. </p>";
    infoContent = infoContent + "<h3>Rule</h3>";
    infoContent = infoContent + "<p>The value of internal angle is .180*(n-2)/n</p>";
    infoContent = infoContent + "<p>The value of external Angle is (180 - internal angle.)</p>";
    PIEupdateInfo(infoContent);

}


function initialiseScene(){
    mySceneTLX = 0.0;
    mySceneTLY = 3.0;
    mySceneBRX = 4.0;
    mySceneBRY = 0.0;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
    sidesCount=4;
    polyRadius=0.5;
    polyColor=0xaaaa44;
    polyX=myCenterX;
    polyY=myCenterY+0.15;
    polyName=document.createElement('h5');
    document.body.appendChild(polyName);
    polyName.className="container";
    polyName.innerHTML="";
    polyName.style.position="absolute";
    polyName.style.left="45%";
    polyName.style.top="15%";
    polyName.style.fontSize="xx-large";
    polyName.style.display="inline-block";

    diagDisplayed=false;
    animIntAngle=0;
    intAngleButtonOn=false;
    animExtAngle=0;

    intAngleValDisplay=document.createElement("p");
    document.body.appendChild(intAngleValDisplay);
    extAngleValDisplay=document.createElement("p");
    document.body.appendChild(extAngleValDisplay);
}

function loadExperimentElements(){


    PIEsetExperimentTitle(" Regular polygons");
    PIEsetDeveloperName("Anish Kelkar");
    PIEhideControlElement();

    //userStopButton.style.display="none";
    //userStopButton.addEventListener('click',userStop);

    initialiseHelp();
    initialiseInfo();

    initialiseScene();

    initialiseControlVariables();

    /* Object Creation*/
    initialiseControls();
    //createPoly();
    resetExperiment();
    createCanvas();
    //PIEscene.remove(canvas);
    //createButtons();
    PIEaddDualCommand("Diagonals", diagButtonAction);
    PIEaddDualCommand("Internal Angle",createIntAngle);
    PIEaddDualCommand("External Angle",createExtAngle);

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    //PIEadjustCamera(0,0,10);
    resetExperiment();
    polyName.innerHTML="";
    clearScreen();
}

function resetExperiment()
{
    sidesCount=4;
    PIEchangeInputSlider(sidesCountTag,sidesCount,handleCount,1,32,1);
    clearScreen();
    //NcreateButtons();


}
function updateExperimentElements(t,dt)
{
    PIEscene.remove(poly);
    PIEscene.remove(cover);
    PIEscene.remove(outlineMesh1);

    /*var text=document.createTextNode("Regular Hexagon");
    header.appendChild(text);
    header.style.margin="100px";
    header.style.display="block";
    */
    /*header= document.createElement('h1');
    document.body.appendChild(header);
    header.className="container";
    header.innerHTML="Regular Polygon";
    header.style.position="absolute";
    header.style.left="18%";
    header.style.bottom="70%";
    //header.style.paddingLeft="10px";
    //header.style.paddingRight="10px";
    //header.style.paddingTop="70%";
    header.style.display="inline-block";
    */
    //drawDiags();
    vexX=[];
    vexY=[];

    for( var i=0;i<sidesCount;i++)
    {
        var theta=(2*Math.PI*i)/sidesCount;
        vexX.push(polyX+(polyRadius*Math.cos(theta)));
        vexY.push(polyY+(polyRadius*Math.sin(theta)));
    }
    createPoly();
    displayName();
    intAngle=(180*(sidesCount-2))/sidesCount;
    /*if(animIntAngle==-1)
    {
        animIntAngle=(180-(intAngle/2));
    }*/
    if(intAngleButtonOn==true)
    {
        if(animIntAngle<(intAngle/2))
        {
            animateIntArc();
            animIntAngle+=1.5;
        }
        else
        {
            printIntAngle();
            animateIntArc();
        }
    }
    else
    {
        PIEscene.remove(intAngleArc);
        animIntAngle=0;
        intAngleValDisplay.innerHTML="";
    }
    extAngle=180-intAngle;
    if(extAngleButtonOn==true)
    {
        if(animExtAngle<(extAngle/2))
        {
            animateExtArc();
            animExtAngle+=1.5;
        }
        else
        {
            printExtAngle();
            animateExtArc();
        }
    }
    else
    {
        PIEscene.remove(extAngleArc);
        animExtAngle=0;
        extAngleValDisplay.innerHTML="";
    }
    PIEchangeDisplayText(sidesCountTag,sidesCount);
    PIEchangeDisplayText(polyRadiusTag,polyRadius);
    PIEchangeInputSlider(sidesCountTag, sidesCount, handleCount, 1, 32, 1);
    PIEchangeInputSlider(polyRadiusTag, polyRadius, handleRadius, 0.05, 3, 0.01);
    /*
    diagButton.addEventListener("click",diagButtonAction);
    intAngleButton.addEventListener("click",createIntAngle);
    extAngleButton.addEventListener("click",createExtAngle);
    */
}



