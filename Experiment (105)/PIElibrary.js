var PIEcontrolElem;
var PIEtitleElem;
var PIEsourceElem;
var PIEdeveloperElem;
var PIEdesignerElem;
var PIEscreenElem;
var PIEspeedElem;
var PIEresetButton;
var PIEstartButton;
var PIEstopButton;
var PIEpauseButton;
var PIEresumeButton;
var PIEslowdownButton;
var PIEspeedupButton;
var PIEhelpButton;
var PIEinfoButton;
var PIEhelpModal;
var PIEhelpContent;
var PIEhelpSpan;
var PIEinfoModal;
var PIEinfoContent;
var PIEinfoSpan;
var PIEcanvasW;
var PIEcanvasH;
var PIEcanvasAspect;
var PIEaoiTLX;
var PIEaoiTLY;
var PIEaoiBRX;
var PIEaoiBRY;
var PIEaoiW;
var PIEaoiH;
var PIEaoiAspect;
var PIEdislayTLX;
var PIEdislayTLY;
var PIEdislayBRX;
var PIEdislayBRY;
var PIEdisplayW;
var PIEdisplayH;
var PIEdisplayAspect;
var PIEscene;
var PIEcamera;
var PIEcameraAngle;
var PIEcameraAspect;
var PIEcameraZ;
var PIEcameraTarget;
var PIErenderer;
var PIEambientLight;
var PIEspotLight;
var PIEraycaster;
var PIEsceneElements = [];
var PIEdragElements = [];
var PIEselectedDrag;
var PIEselectedHover;
var PIEdragPlane;
var PIEmouseP;
var PIEdragOffset;
var PIEdragIntersect;
var PIElastUpdateTime;
var PIEpauseOffset;
var PIEcurrentTime;
var PIEoffsetTime;
var PIEanimationON;
var PIEanimationPaused;
var PIEanimationSpeed;
var PIEminAnimationSpeed;
var PIEmaxAnimationSpeed;
var PIEinputGUI;
var PIEinputObject;
var PIEitInput;
var PIEsInput;
var PIEcbInput;
var PIEcInput;
var PIEitInputNames = [];
var PIEitInputHandles = [];
var PIEsInputNames = [];
var PIEsInputHandles = [];
var PIEcbInputNames = [];
var PIEcbInputHandles = [];
var PIEcInputNames = [];
var PIEcInputHandles = [];
var PIEdisplayGUI;
var PIEdisplayObject;
var PIEitDisplay;
var PIEsDisplay;
var PIEcbDisplay;
var PIEcDisplay;
var PIEitDisplayNames = [];
var PIEitDisplayHandles = [];
var PIEsDisplayNames = [];
var PIEsDisplayHandles = [];
var PIEcbDisplayNames = [];
var PIEcbDisplayHandles = [];
var PIEcDisplayNames = [];
var PIEcDisplayHandles = [];
var PIEshowInput;
var PIEshowDisplay;

function PIEdummy() {}

function PIEcreateGUIVariables() {
    PIEinputObject.it00 = "";
    PIEinputObject.it01 = "";
    PIEinputObject.it02 = "";
    PIEinputObject.it03 = "";
    PIEinputObject.it04 = "";
    PIEinputObject.it05 = "";
    PIEinputObject.it06 = "";
    PIEinputObject.it07 = "";
    PIEinputObject.it08 = "";
    PIEinputObject.it09 = "";
    PIEinputObject.it10 = "";
    PIEinputObject.it11 = "";
    PIEinputObject.it12 = "";
    PIEinputObject.it13 = "";
    PIEinputObject.it14 = "";
    PIEinputObject.it15 = "";
    PIEinputObject.it16 = "";
    PIEinputObject.it17 = "";
    PIEinputObject.it18 = "";
    PIEinputObject.it19 = "";
    PIEinputObject.s00 = 0;
    PIEinputObject.s01 = 0;
    PIEinputObject.s02 = 0;
    PIEinputObject.s03 = 0;
    PIEinputObject.s04 = 0;
    PIEinputObject.s05 = 0;
    PIEinputObject.s06 = 0;
    PIEinputObject.s07 = 0;
    PIEinputObject.s08 = 0;
    PIEinputObject.s09 = 0;
    PIEinputObject.s10 = 0;
    PIEinputObject.s11 = 0;
    PIEinputObject.s12 = 0;
    PIEinputObject.s13 = 0;
    PIEinputObject.s14 = 0;
    PIEinputObject.s15 = 0;
    PIEinputObject.s16 = 0;
    PIEinputObject.s17 = 0;
    PIEinputObject.s18 = 0;
    PIEinputObject.s19 = 0;
    PIEinputObject.cb00 = false;
    PIEinputObject.cb01 = false;
    PIEinputObject.cb02 = false;
    PIEinputObject.cb03 = false;
    PIEinputObject.cb04 = false;
    PIEinputObject.cb05 = false;
    PIEinputObject.cb06 = false;
    PIEinputObject.cb07 = false;
    PIEinputObject.cb08 = false;
    PIEinputObject.cb09 = false;
    PIEinputObject.cb10 = false;
    PIEinputObject.cb11 = false;
    PIEinputObject.cb12 = false;
    PIEinputObject.cb13 = false;
    PIEinputObject.cb14 = false;
    PIEinputObject.cb15 = false;
    PIEinputObject.cb16 = false;
    PIEinputObject.cb17 = false;
    PIEinputObject.cb18 = false;
    PIEinputObject.cb19 = false;
    PIEinputObject.c00 = PIEdummy;
    PIEinputObject.c01 = PIEdummy;
    PIEinputObject.c02 = PIEdummy;
    PIEinputObject.c03 = PIEdummy;
    PIEinputObject.c04 = PIEdummy;
    PIEinputObject.c05 = PIEdummy;
    PIEinputObject.c06 = PIEdummy;
    PIEinputObject.c07 = PIEdummy;
    PIEinputObject.c08 = PIEdummy;
    PIEinputObject.c09 = PIEdummy;
    PIEinputObject.c10 = PIEdummy;
    PIEinputObject.c11 = PIEdummy;
    PIEinputObject.c12 = PIEdummy;
    PIEinputObject.c13 = PIEdummy;
    PIEinputObject.c14 = PIEdummy;
    PIEinputObject.c15 = PIEdummy;
    PIEinputObject.c16 = PIEdummy;
    PIEinputObject.c17 = PIEdummy;
    PIEinputObject.c18 = PIEdummy;
    PIEinputObject.c19 = PIEdummy;
    PIEdisplayObject.it00 = "";
    PIEdisplayObject.it01 = "";
    PIEdisplayObject.it02 = "";
    PIEdisplayObject.it03 = "";
    PIEdisplayObject.it04 = "";
    PIEdisplayObject.it05 = "";
    PIEdisplayObject.it06 = "";
    PIEdisplayObject.it07 = "";
    PIEdisplayObject.it08 = "";
    PIEdisplayObject.it09 = "";
    PIEdisplayObject.it10 = "";
    PIEdisplayObject.it11 = "";
    PIEdisplayObject.it12 = "";
    PIEdisplayObject.it13 = "";
    PIEdisplayObject.it14 = "";
    PIEdisplayObject.it15 = "";
    PIEdisplayObject.it16 = "";
    PIEdisplayObject.it17 = "";
    PIEdisplayObject.it18 = "";
    PIEdisplayObject.it19 = "";
    PIEdisplayObject.s00 = 0;
    PIEdisplayObject.s01 = 0;
    PIEdisplayObject.s02 = 0;
    PIEdisplayObject.s03 = 0;
    PIEdisplayObject.s04 = 0;
    PIEdisplayObject.s05 = 0;
    PIEdisplayObject.s06 = 0;
    PIEdisplayObject.s07 = 0;
    PIEdisplayObject.s08 = 0;
    PIEdisplayObject.s09 = 0;
    PIEdisplayObject.s10 = 0;
    PIEdisplayObject.s11 = 0;
    PIEdisplayObject.s12 = 0;
    PIEdisplayObject.s13 = 0;
    PIEdisplayObject.s14 = 0;
    PIEdisplayObject.s15 = 0;
    PIEdisplayObject.s16 = 0;
    PIEdisplayObject.s17 = 0;
    PIEdisplayObject.s18 = 0;
    PIEdisplayObject.s19 = 0;
    PIEdisplayObject.cb00 = false;
    PIEdisplayObject.cb01 = false;
    PIEdisplayObject.cb02 = false;
    PIEdisplayObject.cb03 = false;
    PIEdisplayObject.cb04 = false;
    PIEdisplayObject.cb05 = false;
    PIEdisplayObject.cb06 = false;
    PIEdisplayObject.cb07 = false;
    PIEdisplayObject.cb08 = false;
    PIEdisplayObject.cb09 = false;
    PIEdisplayObject.cb10 = false;
    PIEdisplayObject.cb11 = false;
    PIEdisplayObject.cb12 = false;
    PIEdisplayObject.cb13 = false;
    PIEdisplayObject.cb14 = false;
    PIEdisplayObject.cb15 = false;
    PIEdisplayObject.cb16 = false;
    PIEdisplayObject.cb17 = false;
    PIEdisplayObject.cb18 = false;
    PIEdisplayObject.cb19 = false;
    PIEdisplayObject.c00 = PIEdummy;
    PIEdisplayObject.c01 = PIEdummy;
    PIEdisplayObject.c02 = PIEdummy;
    PIEdisplayObject.c03 = PIEdummy;
    PIEdisplayObject.c04 = PIEdummy;
    PIEdisplayObject.c05 = PIEdummy;
    PIEdisplayObject.c06 = PIEdummy;
    PIEdisplayObject.c07 = PIEdummy;
    PIEdisplayObject.c08 = PIEdummy;
    PIEdisplayObject.c09 = PIEdummy;
    PIEdisplayObject.c10 = PIEdummy;
    PIEdisplayObject.c11 = PIEdummy;
    PIEdisplayObject.c12 = PIEdummy;
    PIEdisplayObject.c13 = PIEdummy;
    PIEdisplayObject.c14 = PIEdummy;
    PIEdisplayObject.c15 = PIEdummy;
    PIEdisplayObject.c16 = PIEdummy;
    PIEdisplayObject.c17 = PIEdummy;
    PIEdisplayObject.c18 = PIEdummy;
    PIEdisplayObject.c19 = PIEdummy
}

function PIEshowDisplayPanel() {
    PIEinputGUI.domElement.style.display = "none";
    PIEshowInput = false;
    PIEdisplayGUI.domElement.style.display = "inline";
    PIEshowDisplay = true
}

function PIEshowInputPanel() {
    PIEdisplayGUI.domElement.style.display = "none";
    PIEshowDisplay = false;
    PIEinputGUI.domElement.style.display = "inline";
    PIEshowInput = true
}

function PIEsetupGUI() {
    PIEinputObject = new Object();
    PIEitInput = 0;
    PIEsInput = 0;
    PIEcbInput = 0;
    PIEcInput = 0;
    PIEdisplayObject = new Object();
    PIEitDisplay = 0;
    PIEsDisplay = 0;
    PIEcbDisplay = 0;
    PIEcDisplay = 0;
    PIEcreateGUIVariables();
    PIEinputGUI = new dat.gui.GUI();
    PIEdisplayGUI = new dat.gui.GUI();
    PIEshowInputPanel()
}

var table;
var maindiv;
var quizbutton;
var noteButton;
var rowcounter=0;
var  tabletogglebutton;
var clock;
var input;
var clockText;

function loadExperiment() {
    var a;
    var b;
    if (!Detector.webgl) {
        Detector.addGetWebGLMessage()
    } else {
        a = "font-family: Monospace; background-color: #000; color: #000; margin: 0px; overflow: hidden;";
        b = "font-family: Monospace; background-color: #000; color: #ffffff; margin: 0px; overflow: hidden;";
        document.body.style = a;

       maindiv=document.createElement("div");
       maindiv.setAttribute("id","main");
       table=document.createElement("table");
       table.setAttribute("id","maintable");
       table.style="position:absolute;top:50px;color: white;";
       table.setAttribute("border","1");
        table.insertRow(0);
        var row = table.insertRow(0);


      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
       var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);


     cell1.innerHTML = "right";  
     cell2.innerHTML = "left";
     cell3.innerHTML = "Difference";  
     cell4.innerHTML = "Motion of Block";
     cell5.innerHTML = "Time Taken";






       document.body.appendChild(maindiv);
       document.body.appendChild(table);

       table.style.display="none";//for toggling with the help of a button
        

         input = document.createElement('input'); 
        input.type = "text"; 
        input.style="position:fixed; right: 300px;top:100px;color:red;width:64px";
        input.readOnly=true;
        
        document.body.appendChild(input);
         clockText=document.createElement('h3');
         
         clockText.innerHTML="Clock";
         clockText.style="color:white ;position:fixed;right:320px;top:65px";;
         document.body.appendChild(clockText);

       
       noteButton=document.createElement("button");
       noteButton.innerHTML="Add Data to Table";
       tabletogglebutton=document.createElement("toggle");
       tabletogglebutton.style="position:absolute;bottom:260px;right:110px;background-color:blue";
       tabletogglebutton.innerHTML="show/hide table";
       tabletogglebutton.setAttribute("onclick","toggle()");
       noteButton.style="background-color:#EADC0F;";
       noteButton.setAttribute("onclick","note()");
       maindiv.appendChild(noteButton);
       document.body.appendChild(tabletogglebutton);
       maindiv.style="position:absolute;bottom:300px;right:100px";






        PIEscreenElem = document.createElement("div");

         

        
       document.body.appendChild(PIEscreenElem);
        PIEsourceElem = document.createElement("span");
        PIEsourceElem.style = b;
        PIEscreenElem.appendChild(PIEsourceElem);
        PIEdesignerElem = document.createElement("span");
        
        PIEscreenElem.appendChild(PIEdesignerElem);
        PIEtitleElem = document.createElement("span");
        PIEtitleElem.style = b;
        PIEscreenElem.appendChild(PIEtitleElem);
        PIEdeveloperElem = document.createElement("span");
        PIEdeveloperElem.style = b;
        PIEscreenElem.appendChild(PIEdeveloperElem);
        PIEsourceElem.innerHTML = "<a href=http://www.ekshiksha.org.in><b><u>ekshiksha</u></b></a>";
        PIEcanvasW = window.innerWidth;
        PIEcanvasH = window.innerHeight;
        PIEcanvasAspect = PIEcanvasW / PIEcanvasH;
        PIEanimationON = false;
        PIEanimationPaused = false;
        PIEanimationSpeed = 1;
        PIEminAnimationSpeed = 0.125;
        PIEmaxAnimationSpeed = 4;
        PIEaddSystemButtons();
        PIEaddModalWindows();
        PIEscene = new THREE.Scene();
        PIEcameraAngle = 30;
        PIEcamera = new THREE.PerspectiveCamera(PIEcameraAngle, PIEcanvasAspect, 0.1, 1000);
        PIEcameraTarget = new THREE.Vector3();
        PIErenderer = new THREE.WebGLRenderer({
            antialias: true
        });
        PIErenderer.setPixelRatio(window.devicePixelRatio);
        PIErenderer.setSize(PIEcanvasW, PIEcanvasH);
        PIErenderer.gammaInput = true;
        PIErenderer.gammaOutput = true;
        PIErenderer.shadowMap.enabled = true;
        PIEscreenElem.appendChild(PIErenderer.domElement);
        PIEsetupGUI();
        loadExperimentElements();
        lightX = PIEaoiTLX + PIEaoiW * 0.25;
        lightY = PIEaoiBRY + PIEaoiH * 0.75;
        lightZ = PIEcamera.position.z;
        PIEambientLight = new THREE.AmbientLight(16777215, 0.3);
        PIEambientLight.position.set(lightX, lightY, lightZ);
        PIEscene.add(PIEambientLight);
        lightX = PIEaoiTLX + PIEaoiW * 0.75;
        PIEspotLight = new THREE.PointLight(16777215);
        PIEspotLight.position.set(lightX, lightY, lightZ);
        PIEspotLight.castShadow = true;
        PIEscene.add(PIEspotLight);
        PIEraycaster = new THREE.Raycaster();
        PIEdragPlane = new THREE.Plane();
        PIEmouseP = new THREE.Vector2();
        PIEdragOffset = new THREE.Vector3();
        PIEdragIntersect = new THREE.Vector3();
        PIEselectedDrag = null;
        PIEselectedHover = null;
        window.addEventListener("resize", PIEresize, false);
        PIErenderer.domElement.addEventListener("mousemove", PIEmouseMove, false);
        PIErenderer.domElement.addEventListener("mousedown", PIEmouseDown, false);
        PIErenderer.domElement.addEventListener("mouseup", PIEmouseUp, false);
        PIErenderer.render(PIEscene, PIEcamera)
    }
}

function toggle()//written by Nihar
{


  if(table.style.display=="none")
    table.style.display="block";
  else
    table.style.display="none";


}
function note()
{
    if(rowcounter<6)
    {
        rowcounter++;
           var row = table.insertRow(rowcounter);


      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
       var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
       
       var right=weight4mass+weight5mass+weight6mass; 
       var left=weight1mass+weight2mass+weight3mass;
       var difference=right-left;      
       var direction;

       if(right<left)
        direction="right to left";
       else if(right>left)
        direction="left to right";
       else
         direction="stationary";

     cell1.innerHTML = right;  
     cell2.innerHTML = left;
     cell3.innerHTML = difference;  
     cell4.innerHTML = direction;

     cell5.innerHTML = time;      

      

    }






}

function PIEaddSystemButtons() {
    PIEresetButton = PIEaddButton("reset");
    PIEresetButton.style = "background: none; border: none; box-sizing:border-box;";
    PIEresetButton.innerHTML = '<img src="../PIE/images/ButtonRound.png" alt="reset" style="height: inherit; width: 70%;">';
    PIEresetButton.style.display = "inline";
    PIEresetButton.addEventListener("click", PIEresetExperiment);
    PIEstartButton = PIEaddButton("start");
    PIEstartButton.style.display = "inline";
    PIEstartButton.addEventListener("click", PIEstartAnimation);
    PIEstopButton = PIEaddButton("stop");
    PIEstopButton.style.display = "none";
    PIEstopButton.addEventListener("click", PIEstopAnimation);
    PIEpauseButton = PIEaddButton("pause");
    PIEpauseButton.style = "background: none; border: none; box-sizing:border-box;";
    PIEpauseButton.innerHTML = '<img src="../PIE/images/ButtonPause.png" alt="pause" style="height: inherit; width: 70%;">';
    PIEpauseButton.style.display = "inline";
    PIEpauseButton.style.visibility = "hidden";
    PIEpauseButton.addEventListener("click", PIEpauseAnimation);
    PIEresumeButton = PIEaddButton("resume");
    PIEresumeButton.style = "background: none; border: none; box-sizing:border-box;";
    PIEresumeButton.innerHTML = '<img src="../PIE/images/ButtonPlay.png" alt="resume" style="height: inherit; width: 70%;">';
    PIEresumeButton.style.display = "none";
    PIEresumeButton.style.visibility = "hidden";
    PIEresumeButton.addEventListener("click", PIEresumeAnimation);
    PIEslowdownButton = PIEaddButton("<<");
    PIEslowdownButton.addEventListener("click", PIEslowdownAnimation);
    PIEspeedElem = document.createElement("span");
    PIEspeedElem.innerHTML = PIEanimationSpeed;
    PIEscreenElem.appendChild(PIEspeedElem);
    PIEspeedupButton = PIEaddButton(">>");
    PIEspeedupButton.addEventListener("click", PIEspeedupAnimation);
    PIEinfoButton = PIEaddButton("info");
    PIEinfoButton.style = "background: none; border: none; box-sizing:border-box;";
    PIEinfoButton.innerHTML = '<img src="../PIE/images/ButtonInfo.png" alt="info" style="height: inherit; width: 70%;">';
    PIEinfoButton.addEventListener("click", PIEshowInfo);
    PIEhelpButton = PIEaddButton("help");
    PIEhelpButton.style = "background: none; border: none; box-sizing:border-box;";
    PIEhelpButton.innerHTML = '<img src="../PIE/images/ButtonHelp.png" alt="help" style="height: inherit; width: 70%;">';
    PIEhelpButton.addEventListener("click", PIEshowHelp)
}

function PIEaddModalWindows() {
    var a;
    var b;
    a = "display: none; position: fixed; z-index: 1; padding-top: 100px; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4); color:#000;";
    ImodalContentStyle = "background-color:rgb(236,236,236); background-color:rgba(236,236,236,0.95); margin: auto auto 200px; padding: 20px; border: 10px solid #008000; width: 80%;";
    HmodalContentStyle = "background-color:rgb(236,236,236); background-color:rgba(236,236,236,0.95); margin: auto auto 200px; padding: 20px; border: 10px solid #F0F000; width: 80%;";
    PIEhelpModal = document.createElement("div");
    PIEhelpModal.style = a;
    PIEhelpModal.onclick = function() {
        PIEhelpModal.style.display = "none"
    };
    PIEhelpContent = document.createElement("div");
    PIEhelpContent.style = HmodalContentStyle;
    PIEhelpSpan = document.createElement("span");
    PIEhelpSpan.className = "close";
    PIEhelpSpan.style = "color: #000000; float: right; font-size: 28px; font-weight: bold;";
    PIEhelpSpan.innerHTML = "&times;";
    PIEhelpSpan.onclick = function() {
        PIEhelpModal.style.display = "none"
    };
    PIEhelpSpan.onmouseover = function() {
        PIEhelpSpan.style = "color: #000; text-decoration: none; cursor: pointer;"
    };
    PIEhelpSpan.onmouseout = function() {
        PIEhelpSpan.style = "color: #000000; cursor: auto;"
    };
    PIEhelpContent.appendChild(PIEhelpSpan);
    PIEhelpModal.appendChild(PIEhelpContent);
    PIEscreenElem.appendChild(PIEhelpModal);
    PIEinfoModal = document.createElement("div");
    PIEinfoModal.style = a;
    PIEinfoModal.onclick = function() {
        PIEinfoModal.style.display = "none"
    };
    PIEinfoContent = document.createElement("div");
    PIEinfoContent.style = ImodalContentStyle;
    PIEinfoSpan = document.createElement("span");
    PIEinfoSpan.className = "close";
    PIEinfoSpan.style = "color: #008000; float: right; font-size: 28px; font-weight: bold;";
    PIEinfoSpan.innerHTML = "&times;";
    PIEinfoSpan.onclick = function() {
        PIEinfoModal.style.display = "none"
    };
    PIEinfoSpan.onmouseover = function() {
        PIEinfoSpan.style = "color: #000; text-decoration: none; cursor: pointer;"
    };
    PIEinfoSpan.onmouseout = function() {
        PIEinfoSpan.style = "color: #008000; cursor: auto;"
    };
    PIEinfoContent.appendChild(PIEinfoSpan);
    PIEinfoModal.appendChild(PIEinfoContent);
    PIEscreenElem.appendChild(PIEinfoModal)
}

function PIEshowHelp() {
    PIEhelpModal.style.display = "block"
}

function PIEupdateHelp(b) {
    var a;
    PIEhelpContent.innerHTML = "";
    PIEhelpContent.appendChild(PIEhelpSpan);
    a = PIEhelpContent.innerHTML;
    PIEhelpContent.innerHTML = a + b
}

function PIEappendHelp(b) {
    var a;
    a = PIEhelpContent.innerHTML;
    PIEhelpContent.innerHTML = a + b
}

function PIEshowInfo() {
    PIEinfoModal.style.display = "block"
}

function PIEupdateInfo(a) {
    var b;
    PIEinfoContent.innerHTML = "";
    PIEinfoContent.appendChild(PIEinfoSpan);
    b = PIEinfoContent.innerHTML;
    PIEinfoContent.innerHTML = b + a
}

function PIEappendInfo(a) {
    var b;
    b = PIEinfoContent.innerHTML;
    PIEinfoContent.innerHTML = b + a
}

function PIEresize() {
    var b;
    var a;
    b = window.innerWidth;
    a = window.innerHeight;
    PIEcanvasW = b;
    PIEcanvasH = a;
    PIEcanvasAspect = PIEcanvasW / PIEcanvasH;
    PIErenderer.setSize(PIEcanvasW, PIEcanvasH);
    PIEadjustDisplayScene();
    PIErender()
}

function PIEsetExperimentTitle(a) {
    PIEtitleElem.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b><u>" + a + "</u></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
}

function PIEsetDeveloperName(a) {
    PIEdeveloperElem.innerHTML = "Created by : " + a
}

function PIEhideControlElement() {}

function PIEshowControlElement() {}

function PIEaddDualText(a, c, b) {
    PIEaddInputText(a, c, b);
    PIEaddDisplayText(a, c)
}

function PIEaddDisplayText(b, c) {
    var a;
    switch (PIEitDisplay) {
        case 0:
            PIEdisplayObject.it00 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it00").name(b);
            break;
        case 1:
            PIEdisplayObject.it01 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it01").name(b);
            break;
        case 2:
            PIEdisplayObject.it02 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it02").name(b);
            break;
        case 3:
            PIEdisplayObject.it03 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it03").name(b);
            break;
        case 4:
            PIEdisplayObject.it04 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it04").name(b);
            break;
        case 5:
            PIEdisplayObject.it05 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it05").name(b);
            break;
        case 6:
            PIEdisplayObject.it06 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it06").name(b);
            break;
        case 7:
            PIEdisplayObject.it07 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it07").name(b);
            break;
        case 8:
            PIEdisplayObject.it08 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it08").name(b);
            break;
        case 9:
            PIEdisplayObject.it09 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it09").name(b);
            break;
        case 10:
            PIEdisplayObject.it10 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it10").name(b);
            break;
        case 11:
            PIEdisplayObject.it11 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it11").name(b);
            break;
        case 12:
            PIEdisplayObject.it12 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it12").name(b);
            break;
        case 13:
            PIEdisplayObject.it13 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it13").name(b);
            break;
        case 14:
            PIEdisplayObject.it14 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it14").name(b);
            break;
        case 15:
            PIEdisplayObject.it15 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it15").name(b);
            break;
        case 16:
            PIEdisplayObject.it16 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it16").name(b);
            break;
        case 17:
            PIEdisplayObject.it17 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it17").name(b);
            break;
        case 18:
            PIEdisplayObject.it18 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it18").name(b);
            break;
        case 19:
            PIEdisplayObject.it19 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it19").name(b);
            break;
        default:
            return;
            break
    }
    PIEitDisplayHandles.push(a);
    PIEitDisplayNames.push(b);
    PIEitDisplay++
}

function PIEaddInputText(b, d, c) {
    var a;
    switch (PIEitInput) {
        case 0:
            PIEinputObject.it00 = d;
            a = PIEinputGUI.add(PIEinputObject, "it00").name(b);
            break;
        case 1:
            PIEinputObject.it01 = d;
            a = PIEinputGUI.add(PIEinputObject, "it01").name(b);
            break;
        case 2:
            PIEinputObject.it02 = d;
            a = PIEinputGUI.add(PIEinputObject, "it02").name(b);
            break;
        case 3:
            PIEinputObject.it03 = d;
            a = PIEinputGUI.add(PIEinputObject, "it03").name(b);
            break;
        case 4:
            PIEinputObject.it04 = d;
            a = PIEinputGUI.add(PIEinputObject, "it04").name(b);
            break;
        case 5:
            PIEinputObject.it05 = d;
            a = PIEinputGUI.add(PIEinputObject, "it05").name(b);
            break;
        case 6:
            PIEinputObject.it06 = d;
            a = PIEinputGUI.add(PIEinputObject, "it06").name(b);
            break;
        case 7:
            PIEinputObject.it07 = d;
            a = PIEinputGUI.add(PIEinputObject, "it07").name(b);
            break;
        case 8:
            PIEinputObject.it08 = d;
            a = PIEinputGUI.add(PIEinputObject, "it08").name(b);
            break;
        case 9:
            PIEinputObject.it09 = d;
            a = PIEinputGUI.add(PIEinputObject, "it09").name(b);
            break;
        case 10:
            PIEinputObject.it10 = d;
            a = PIEinputGUI.add(PIEinputObject, "it10").name(b);
            break;
        case 11:
            PIEinputObject.it11 = d;
            a = PIEinputGUI.add(PIEinputObject, "it11").name(b);
            break;
        case 12:
            PIEinputObject.it12 = d;
            a = PIEinputGUI.add(PIEinputObject, "it12").name(b);
            break;
        case 13:
            PIEinputObject.it13 = d;
            a = PIEinputGUI.add(PIEinputObject, "it13").name(b);
            break;
        case 14:
            PIEinputObject.it14 = d;
            a = PIEinputGUI.add(PIEinputObject, "it14").name(b);
            break;
        case 15:
            PIEinputObject.it15 = d;
            a = PIEinputGUI.add(PIEinputObject, "it15").name(b);
            break;
        case 16:
            PIEinputObject.it16 = d;
            a = PIEinputGUI.add(PIEinputObject, "it16").name(b);
            break;
        case 17:
            PIEinputObject.it17 = d;
            a = PIEinputGUI.add(PIEinputObject, "it17").name(b);
            break;
        case 18:
            PIEinputObject.it18 = d;
            a = PIEinputGUI.add(PIEinputObject, "it18").name(b);
            break;
        case 19:
            PIEinputObject.it19 = d;
            a = PIEinputGUI.add(PIEinputObject, "it19").name(b);
            break;
        default:
            return;
            break
    }
    a.onFinishChange(c);
    PIEitInputHandles.push(a);
    PIEitInputNames.push(b);
    PIEitInput++
}

function PIEchangeDisplayText(b, d) {
    var a;
    var c;
    a = null;
    for (c = 0;
        (a == null) && (c < PIEitDisplay); c++) {
        if (PIEitDisplayNames[c] == b) {
            a = PIEitDisplayHandles[c]
        }
    }
    if (a != null) {
        switch (c - 1) {
            case 0:
                PIEdisplayObject.it00 = d;
                break;
            case 1:
                PIEdisplayObject.it01 = d;
                break;
            case 2:
                PIEdisplayObject.it02 = d;
                break;
            case 3:
                PIEdisplayObject.it03 = d;
                break;
            case 4:
                PIEdisplayObject.it04 = d;
                break;
            case 5:
                PIEdisplayObject.it05 = d;
                break;
            case 6:
                PIEdisplayObject.it06 = d;
                break;
            case 7:
                PIEdisplayObject.it07 = d;
                break;
            case 8:
                PIEdisplayObject.it08 = d;
                break;
            case 9:
                PIEdisplayObject.it09 = d;
                break;
            case 10:
                PIEdisplayObject.it10 = d;
                break;
            case 11:
                PIEdisplayObject.it11 = d;
                break;
            case 12:
                PIEdisplayObject.it12 = d;
                break;
            case 13:
                PIEdisplayObject.it13 = d;
                break;
            case 14:
                PIEdisplayObject.it14 = d;
                break;
            case 15:
                PIEdisplayObject.it15 = d;
                break;
            case 16:
                PIEdisplayObject.it16 = d;
                break;
            case 17:
                PIEdisplayObject.it17 = d;
                break;
            case 18:
                PIEdisplayObject.it18 = d;
                break;
            case 19:
                PIEdisplayObject.it19 = d;
                break;
            default:
                break
        }
        a.updateDisplay()
    }
}

function PIEchangeInputText(b, d) {
    var a;
    var c;
    a = null;
    for (c = 0;
        (a == null) && (c < PIEitInput); c++) {
        if (PIEitInputNames[c] == b) {
            a = PIEitInputHandles[c]
        }
    }
    if (a != null) {
        switch (c - 1) {
            case 0:
                PIEinputObject.it00 = d;
                break;
            case 1:
                PIEinputObject.it01 = d;
                break;
            case 2:
                PIEinputObject.it02 = d;
                break;
            case 3:
                PIEinputObject.it03 = d;
                break;
            case 4:
                PIEinputObject.it04 = d;
                break;
            case 5:
                PIEinputObject.it05 = d;
                break;
            case 6:
                PIEinputObject.it06 = d;
                break;
            case 7:
                PIEinputObject.it07 = d;
                break;
            case 8:
                PIEinputObject.it08 = d;
                break;
            case 9:
                PIEinputObject.it09 = d;
                break;
            case 10:
                PIEinputObject.it10 = d;
                break;
            case 11:
                PIEinputObject.it11 = d;
                break;
            case 12:
                PIEinputObject.it12 = d;
                break;
            case 13:
                PIEinputObject.it13 = d;
                break;
            case 14:
                PIEinputObject.it14 = d;
                break;
            case 15:
                PIEinputObject.it15 = d;
                break;
            case 16:
                PIEinputObject.it16 = d;
                break;
            case 17:
                PIEinputObject.it17 = d;
                break;
            case 18:
                PIEinputObject.it18 = d;
                break;
            case 19:
                PIEinputObject.it19 = d;
                break;
            default:
                break
        }
        a.updateDisplay()
    }
}

function PIEgetDisplayText(a) {
    var d;
    var b;
    var c;
    d = false;
    for (b = 0;
        (d == false) && (b < PIEitDisplay); b++) {
        if (PIEitDisplayNames[b] == a) {
            d = true
        }
    }
    c = "";
    if (d == true) {
        switch (b - 1) {
            case 0:
                c = PIEdisplayObject.it00;
                break;
            case 1:
                c = PIEdisplayObject.it01;
                break;
            case 2:
                c = PIEdisplayObject.it02;
                break;
            case 3:
                c = PIEdisplayObject.it03;
                break;
            case 4:
                c = PIEdisplayObject.it04;
                break;
            case 5:
                c = PIEdisplayObject.it05;
                break;
            case 6:
                c = PIEdisplayObject.it06;
                break;
            case 7:
                c = PIEdisplayObject.it07;
                break;
            case 8:
                c = PIEdisplayObject.it08;
                break;
            case 9:
                c = PIEdisplayObject.it09;
                break;
            case 10:
                c = PIEdisplayObject.it10;
                break;
            case 11:
                c = PIEdisplayObject.it11;
                break;
            case 12:
                c = PIEdisplayObject.it12;
                break;
            case 13:
                c = PIEdisplayObject.it13;
                break;
            case 14:
                c = PIEdisplayObject.it14;
                break;
            case 15:
                c = PIEdisplayObject.it15;
                break;
            case 16:
                c = PIEdisplayObject.it16;
                break;
            case 17:
                c = PIEdisplayObject.it17;
                break;
            case 18:
                c = PIEdisplayObject.it18;
                break;
            case 19:
                c = PIEdisplayObject.it19;
                break;
            default:
                break
        }
    }
    return (c)
}

function PIEgetInputText(a) {
    var d;
    var b;
    var c;
    d = false;
    for (b = 0;
        (d == false) && (b < PIEitInput); b++) {
        if (PIEitInputNames[b] == a) {
            d = true
        }
    }
    c = "";
    if (d == true) {
        switch (b - 1) {
            case 0:
                c = PIEinputObject.it00;
                break;
            case 1:
                c = PIEinputObject.it01;
                break;
            case 2:
                c = PIEinputObject.it02;
                break;
            case 3:
                c = PIEinputObject.it03;
                break;
            case 4:
                c = PIEinputObject.it04;
                break;
            case 5:
                c = PIEinputObject.it05;
                break;
            case 6:
                c = PIEinputObject.it06;
                break;
            case 7:
                c = PIEinputObject.it07;
                break;
            case 8:
                c = PIEinputObject.it08;
                break;
            case 9:
                c = PIEinputObject.it09;
                break;
            case 10:
                c = PIEinputObject.it10;
                break;
            case 11:
                c = PIEinputObject.it11;
                break;
            case 12:
                c = PIEinputObject.it12;
                break;
            case 13:
                c = PIEinputObject.it13;
                break;
            case 14:
                c = PIEinputObject.it14;
                break;
            case 15:
                c = PIEinputObject.it15;
                break;
            case 16:
                c = PIEinputObject.it16;
                break;
            case 17:
                c = PIEinputObject.it17;
                break;
            case 18:
                c = PIEinputObject.it18;
                break;
            case 19:
                c = PIEinputObject.it19;
                break;
            default:
                break
        }
    }
    return (c)
}

function PIEaddDualText(b, f, d, c, a, e) {
    PIEaddInputSlider(b, f, d, c, a, e);
    PIEaddDisplaySlider(b, f, c, a, e)
}

function PIEaddDisplaySlider(c, f, d, b, e) {
    var a;
    switch (PIEsDisplay) {
        case 0:
            PIEdisplayObject.s00 = f;
            a = PIEdisplayGUI.add(PIEdisplayObject, "s00").min(d).max(b).step(e).name(c);
            break;
        case 1:
            PIEdisplayObject.s01 = f;
            a = PIEdisplayGUI.add(PIEdisplayObject, "s01").min(d).max(b).step(e).name(c);
            break;
        case 2:
            PIEdisplayObject.s02 = f;
            a = PIEdisplayGUI.add(PIEdisplayObject, "s02").min(d).max(b).step(e).name(c);
            break;
        case 3:
            PIEdisplayObject.s03 = f;
            a = PIEdisplayGUI.add(PIEdisplayObject, "s03").min(d).max(b).step(e).name(c);
            break;
        case 4:
            PIEdisplayObject.s04 = f;
            a = PIEdisplayGUI.add(PIEdisplayObject, "s04").min(d).max(b).step(e).name(c);
            break;
        case 5:
            PIEdisplayObject.s05 = f;
            a = PIEdisplayGUI.add(PIEdisplayObject, "s05").min(d).max(b).step(e).name(c);
            break;
        case 6:
            PIEdisplayObject.s06 = f;
            a = PIEdisplayGUI.add(PIEdisplayObject, "s06").min(d).max(b).step(e).name(c);
            break;
        case 7:
            PIEdisplayObject.s07 = f;
            a = PIEdisplayGUI.add(PIEdisplayObject, "s07").min(d).max(b).step(e).name(c);
            break;
        case 8:
            PIEdisplayObject.s08 = f;
            a = PIEdisplayGUI.add(PIEdisplayObject, "s08").min(d).max(b).step(e).name(c);
            break;
        case 9:
            PIEdisplayObject.s09 = f;
            a = PIEdisplayGUI.add(PIEdisplayObject, "s09").min(d).max(b).step(e).name(c);
            break;
        case 10:
            PIEdisplayObject.s10 = f;
            a = PIEdisplayGUI.add(PIEdisplayObject, "s10").min(d).max(b).step(e).name(c);
            break;
        case 11:
            PIEdisplayObject.s11 = f;
            a = PIEdisplayGUI.add(PIEdisplayObject, "s11").min(d).max(b).step(e).name(c);
            break;
        case 12:
            PIEdisplayObject.s12 = f;
            a = PIEdisplayGUI.add(PIEdisplayObject, "s12").min(d).max(b).step(e).name(c);
            break;
        case 13:
            PIEdisplayObject.s13 = f;
            a = PIEdisplayGUI.add(PIEdisplayObject, "s13").min(d).max(b).step(e).name(c);
            break;
        case 14:
            PIEdisplayObject.s14 = f;
            a = PIEdisplayGUI.add(PIEdisplayObject, "s14").min(d).max(b).step(e).name(c);
            break;
        case 15:
            PIEdisplayObject.s15 = f;
            a = PIEdisplayGUI.add(PIEdisplayObject, "s15").min(d).max(b).step(e).name(c);
            break;
        case 16:
            PIEdisplayObject.s16 = f;
            a = PIEdisplayGUI.add(PIEdisplayObject, "s16").min(d).max(b).step(e).name(c);
            break;
        case 17:
            PIEdisplayObject.s17 = f;
            a = PIEdisplayGUI.add(PIEdisplayObject, "s17").min(d).max(b).step(e).name(c);
            break;
        case 18:
            PIEdisplayObject.s18 = f;
            a = PIEdisplayGUI.add(PIEdisplayObject, "s18").min(d).max(b).step(e).name(c);
            break;
        case 19:
            PIEdisplayObject.s19 = f;
            a = PIEdisplayGUI.add(PIEdisplayObject, "s19").min(d).max(b).step(e).name(c);
            break;
        default:
            return;
            break
    }
    PIEsDisplayHandles.push(a);
    PIEsDisplayNames.push(c);
    PIEsDisplay++
}

function PIEaddInputSlider(c, g, e, d, b, f) {
    var a;
    switch (PIEsInput) {
        case 0:
            PIEinputObject.s00 = g;
            a = PIEinputGUI.add(PIEinputObject, "s00").min(d).max(b).step(f).name(c);
            break;
        case 1:
            PIEinputObject.s01 = g;
            a = PIEinputGUI.add(PIEinputObject, "s01").min(d).max(b).step(f).name(c);
            break;
        case 2:
            PIEinputObject.s02 = g;
            a = PIEinputGUI.add(PIEinputObject, "s02").min(d).max(b).step(f).name(c);
            break;
        case 3:
            PIEinputObject.s03 = g;
            a = PIEinputGUI.add(PIEinputObject, "s03").min(d).max(b).step(f).name(c);
            break;
        case 4:
            PIEinputObject.s04 = g;
            a = PIEinputGUI.add(PIEinputObject, "s04").min(d).max(b).step(f).name(c);
            break;
        case 5:
            PIEinputObject.s05 = g;
            a = PIEinputGUI.add(PIEinputObject, "s05").min(d).max(b).step(f).name(c);
            break;
        case 6:
            PIEinputObject.s06 = g;
            a = PIEinputGUI.add(PIEinputObject, "s06").min(d).max(b).step(f).name(c);
            break;
        case 7:
            PIEinputObject.s07 = g;
            a = PIEinputGUI.add(PIEinputObject, "s07").min(d).max(b).step(f).name(c);
            break;
        case 8:
            PIEinputObject.s08 = g;
            a = PIEinputGUI.add(PIEinputObject, "s08").min(d).max(b).step(f).name(c);
            break;
        case 9:
            PIEinputObject.s09 = g;
            a = PIEinputGUI.add(PIEinputObject, "s09").min(d).max(b).step(f).name(c);
            break;
        case 10:
            PIEinputObject.s10 = g;
            a = PIEinputGUI.add(PIEinputObject, "s10").min(d).max(b).step(f).name(c);
            break;
        case 11:
            PIEinputObject.s11 = g;
            a = PIEinputGUI.add(PIEinputObject, "s11").min(d).max(b).step(f).name(c);
            break;
        case 12:
            PIEinputObject.s12 = g;
            a = PIEinputGUI.add(PIEinputObject, "s12").min(d).max(b).step(f).name(c);
            break;
        case 13:
            PIEinputObject.s13 = g;
            a = PIEinputGUI.add(PIEinputObject, "s13").min(d).max(b).step(f).name(c);
            break;
        case 14:
            PIEinputObject.s14 = g;
            a = PIEinputGUI.add(PIEinputObject, "s14").min(d).max(b).step(f).name(c);
            break;
        case 15:
            PIEinputObject.s15 = g;
            a = PIEinputGUI.add(PIEinputObject, "s15").min(d).max(b).step(f).name(c);
            break;
        case 16:
            PIEinputObject.s16 = g;
            a = PIEinputGUI.add(PIEinputObject, "s16").min(d).max(b).step(f).name(c);
            break;
        case 17:
            PIEinputObject.s17 = g;
            a = PIEinputGUI.add(PIEinputObject, "s17").min(d).max(b).step(f).name(c);
            break;
        case 18:
            PIEinputObject.s18 = g;
            a = PIEinputGUI.add(PIEinputObject, "s18").min(d).max(b).step(f).name(c);
            break;
        case 19:
            PIEinputObject.s19 = g;
            a = PIEinputGUI.add(PIEinputObject, "s19").min(d).max(b).step(f).name(c);
            break;
        default:
            return;
            break
    }
    a.onFinishChange(e);
    PIEsInputHandles.push(a);
    PIEsInputNames.push(c);
    PIEsInput++
}

function PIEchangeDisplaySlider(b, d) {
    var a;
    var c;
    a = null;
    for (c = 0;
        (a == null) && (c < PIEsDisplay); c++) {
        if (PIEsDisplayNames[c] == b) {
            a = PIEsDisplayHandles[c]
        }
    }
    if (a != null) {
        switch (c - 1) {
            case 0:
                PIEdisplayObject.s00 = d;
                break;
            case 1:
                PIEdisplayObject.s01 = d;
                break;
            case 2:
                PIEdisplayObject.s02 = d;
                break;
            case 3:
                PIEdisplayObject.s03 = d;
                break;
            case 4:
                PIEdisplayObject.s04 = d;
                break;
            case 5:
                PIEdisplayObject.s05 = d;
                break;
            case 6:
                PIEdisplayObject.s06 = d;
                break;
            case 7:
                PIEdisplayObject.s07 = d;
                break;
            case 8:
                PIEdisplayObject.s08 = d;
                break;
            case 9:
                PIEdisplayObject.s09 = d;
                break;
            case 10:
                PIEdisplayObject.s10 = d;
                break;
            case 11:
                PIEdisplayObject.s11 = d;
                break;
            case 12:
                PIEdisplayObject.s12 = d;
                break;
            case 13:
                PIEdisplayObject.s13 = d;
                break;
            case 14:
                PIEdisplayObject.s14 = d;
                break;
            case 15:
                PIEdisplayObject.s15 = d;
                break;
            case 16:
                PIEdisplayObject.s16 = d;
                break;
            case 17:
                PIEdisplayObject.s17 = d;
                break;
            case 18:
                PIEdisplayObject.s18 = d;
                break;
            case 19:
                PIEdisplayObject.s19 = d;
                break;
            default:
                break
        }
        a.updateDisplay()
    }
}

function PIEchangeInputSlider(b, d) {
    var a;
    var c;
    a = null;
    for (c = 0;
        (a == null) && (c < PIEsInput); c++) {
        if (PIEsInputNames[c] == b) {
            a = PIEsInputHandles[c]
        }
    }
    if (a != null) {
        switch (c - 1) {
            case 0:
                PIEinputObject.s00 = d;
                break;
            case 1:
                PIEinputObject.s01 = d;
                break;
            case 2:
                PIEinputObject.s02 = d;
                break;
            case 3:
                PIEinputObject.s03 = d;
                break;
            case 4:
                PIEinputObject.s04 = d;
                break;
            case 5:
                PIEinputObject.s05 = d;
                break;
            case 6:
                PIEinputObject.s06 = d;
                break;
            case 7:
                PIEinputObject.s07 = d;
                break;
            case 8:
                PIEinputObject.s08 = d;
                break;
            case 9:
                PIEinputObject.s09 = d;
                break;
            case 10:
                PIEinputObject.s10 = d;
                break;
            case 11:
                PIEinputObject.s11 = d;
                break;
            case 12:
                PIEinputObject.s12 = d;
                break;
            case 13:
                PIEinputObject.s13 = d;
                break;
            case 14:
                PIEinputObject.s14 = d;
                break;
            case 15:
                PIEinputObject.s15 = d;
                break;
            case 16:
                PIEinputObject.s16 = d;
                break;
            case 17:
                PIEinputObject.s17 = d;
                break;
            case 18:
                PIEinputObject.s18 = d;
                break;
            case 19:
                PIEinputObject.s19 = d;
                break;
            default:
                break
        }
        a.updateDisplay()
    }
}

function PIEgetDisplaySlider(a) {
    var d;
    var b;
    var c;
    d = false;
    for (b = 0;
        (d == false) && (b < PIEsDisplay); b++) {
        if (PIEsDisplayNames[b] == a) {
            d = true
        }
    }
    c = 0;
    if (d == true) {
        switch (b - 1) {
            case 0:
                c = PIEdisplayObject.s00;
                break;
            case 1:
                c = PIEdisplayObject.s01;
                break;
            case 2:
                c = PIEdisplayObject.s02;
                break;
            case 3:
                c = PIEdisplayObject.s03;
                break;
            case 4:
                c = PIEdisplayObject.s04;
                break;
            case 5:
                c = PIEdisplayObject.s05;
                break;
            case 6:
                c = PIEdisplayObject.s06;
                break;
            case 7:
                c = PIEdisplayObject.s07;
                break;
            case 8:
                c = PIEdisplayObject.s08;
                break;
            case 9:
                c = PIEdisplayObject.s09;
                break;
            case 10:
                c = PIEdisplayObject.s10;
                break;
            case 11:
                c = PIEdisplayObject.s11;
                break;
            case 12:
                c = PIEdisplayObject.s12;
                break;
            case 13:
                c = PIEdisplayObject.s13;
                break;
            case 14:
                c = PIEdisplayObject.s14;
                break;
            case 15:
                c = PIEdisplayObject.s15;
                break;
            case 16:
                c = PIEdisplayObject.s16;
                break;
            case 17:
                c = PIEdisplayObject.s17;
                break;
            case 18:
                c = PIEdisplayObject.s18;
                break;
            case 19:
                c = PIEdisplayObject.s19;
                break;
            default:
                break
        }
    }
    return (c)
}

function PIEgetInputSlider(a) {
    var d;
    var b;
    var c;
    d = false;
    for (b = 0;
        (d == false) && (b < PIEsInput); b++) {
        if (PIEsInputNames[b] == a) {
            d = true
        }
    }
    c = 0;
    if (d == true) {
        switch (b - 1) {
            case 0:
                c = PIEinputObject.s00;
                break;
            case 1:
                c = PIEinputObject.s01;
                break;
            case 2:
                c = PIEinputObject.s02;
                break;
            case 3:
                c = PIEinputObject.s03;
                break;
            case 4:
                c = PIEinputObject.s04;
                break;
            case 5:
                c = PIEinputObject.s05;
                break;
            case 6:
                c = PIEinputObject.s06;
                break;
            case 7:
                c = PIEinputObject.s07;
                break;
            case 8:
                c = PIEinputObject.s08;
                break;
            case 9:
                c = PIEinputObject.s09;
                break;
            case 10:
                c = PIEinputObject.s10;
                break;
            case 11:
                c = PIEinputObject.s11;
                break;
            case 12:
                c = PIEinputObject.s12;
                break;
            case 13:
                c = PIEinputObject.s13;
                break;
            case 14:
                c = PIEinputObject.s14;
                break;
            case 15:
                c = PIEinputObject.s15;
                break;
            case 16:
                c = PIEinputObject.s16;
                break;
            case 17:
                c = PIEinputObject.s17;
                break;
            case 18:
                c = PIEinputObject.s18;
                break;
            case 19:
                c = PIEinputObject.s19;
                break;
            default:
                break
        }
    }
    return (c)
}

function PIEaddDualCheckbox(a, c, b) {
    PIEaddInputCheckbox(a, c, b);
    PIEaddDisplayCheckbox(a, c)
}

function PIEaddDisplayCheckbox(b, d, c) {
    var a;
    switch (PIEcbDisplay) {
        case 0:
            PIEdisplayObject.cb00 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb00").name(b);
            break;
        case 1:
            PIEdisplayObject.cb01 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb01").name(b);
            break;
        case 2:
            PIEdisplayObject.cb02 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb02").name(b);
            break;
        case 3:
            PIEdisplayObject.cb03 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb03").name(b);
            break;
        case 4:
            PIEdisplayObject.cb04 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb04").name(b);
            break;
        case 5:
            PIEdisplayObject.cb05 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb05").name(b);
            break;
        case 6:
            PIEdisplayObject.cb06 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb06").name(b);
            break;
        case 7:
            PIEdisplayObject.cb07 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb07").name(b);
            break;
        case 8:
            PIEdisplayObject.cb08 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb08").name(b);
            break;
        case 9:
            PIEdisplayObject.cb09 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb09").name(b);
            break;
        case 10:
            PIEdisplayObject.cb10 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb10").name(b);
            break;
        case 11:
            PIEdisplayObject.cb11 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb11").name(b);
            break;
        case 12:
            PIEdisplayObject.cb12 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb12").name(b);
            break;
        case 13:
            PIEdisplayObject.cb13 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb13").name(b);
            break;
        case 14:
            PIEdisplayObject.cb14 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb14").name(b);
            break;
        case 15:
            PIEdisplayObject.cb15 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb15").name(b);
            break;
        case 16:
            PIEdisplayObject.cb16 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb16").name(b);
            break;
        case 17:
            PIEdisplayObject.cb17 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb17").name(b);
            break;
        case 18:
            PIEdisplayObject.cb18 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb18").name(b);
            break;
        case 19:
            PIEdisplayObject.cb19 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb19").name(b);
            break;
        default:
            return;
            break
    }
    a.onChange(c);
    PIEcbDisplayHandles.push(a);
    PIEcbDisplayNames.push(b);
    PIEcbDisplay++
}

function PIEaddInputCheckbox(b, d, c) {
    var a;
    switch (PIEcbInput) {
        case 0:
            PIEinputObject.cb00 = d;
            a = PIEinputGUI.add(PIEinputObject, "cb00").name(b);
            break;
        case 1:
            PIEinputObject.cb01 = d;
            a = PIEinputGUI.add(PIEinputObject, "cb01").name(b);
            break;
        case 2:
            PIEinputObject.cb02 = d;
            a = PIEinputGUI.add(PIEinputObject, "cb02").name(b);
            break;
        case 3:
            PIEinputObject.cb03 = d;
            a = PIEinputGUI.add(PIEinputObject, "cb03").name(b);
            break;
        case 4:
            PIEinputObject.cb04 = d;
            a = PIEinputGUI.add(PIEinputObject, "cb04").name(b);
            break;
        case 5:
            PIEinputObject.cb05 = d;
            a = PIEinputGUI.add(PIEinputObject, "cb05").name(b);
            break;
        case 6:
            PIEinputObject.cb06 = d;
            a = PIEinputGUI.add(PIEinputObject, "cb06").name(b);
            break;
        case 7:
            PIEinputObject.cb07 = d;
            a = PIEinputGUI.add(PIEinputObject, "cb07").name(b);
            break;
        case 8:
            PIEinputObject.cb08 = d;
            a = PIEinputGUI.add(PIEinputObject, "cb08").name(b);
            break;
        case 9:
            PIEinputObject.cb09 = d;
            a = PIEinputGUI.add(PIEinputObject, "cb09").name(b);
            break;
        case 10:
            PIEinputObject.cb10 = d;
            a = PIEinputGUI.add(PIEinputObject, "cb10").name(b);
            break;
        case 11:
            PIEinputObject.cb11 = d;
            a = PIEinputGUI.add(PIEinputObject, "cb11").name(b);
            break;
        case 12:
            PIEinputObject.cb12 = d;
            a = PIEinputGUI.add(PIEinputObject, "cb12").name(b);
            break;
        case 13:
            PIEinputObject.cb13 = d;
            a = PIEinputGUI.add(PIEinputObject, "cb13").name(b);
            break;
        case 14:
            PIEinputObject.cb14 = d;
            a = PIEinputGUI.add(PIEinputObject, "cb14").name(b);
            break;
        case 15:
            PIEinputObject.cb15 = d;
            a = PIEinputGUI.add(PIEinputObject, "cb15").name(b);
            break;
        case 16:
            PIEinputObject.cb16 = d;
            a = PIEinputGUI.add(PIEinputObject, "cb16").name(b);
            break;
        case 17:
            PIEinputObject.cb17 = d;
            a = PIEinputGUI.add(PIEinputObject, "cb17").name(b);
            break;
        case 18:
            PIEinputObject.cb18 = d;
            a = PIEinputGUI.add(PIEinputObject, "cb18").name(b);
            break;
        case 19:
            PIEinputObject.cb19 = d;
            a = PIEinputGUI.add(PIEinputObject, "cb19").name(b);
            break;
        default:
            return;
            break
    }
    a.onChange(c);
    PIEcbInputHandles.push(a);
    PIEcbInputNames.push(b);
    PIEcbInput++
}

function PIEchangeDisplayCheckbox(b, d) {
    var a;
    var c;
    a = null;
    for (c = 0;
        (a == null) && (c < PIEcbDisplay); c++) {
        if (PIEcbDisplayNames[c] == b) {
            a = PIEcbDisplayHandles[c]
        }
    }
    if (a != null) {
        switch (c - 1) {
            case 0:
                PIEdisplayObject.cb00 = d;
                break;
            case 1:
                PIEdisplayObject.cb01 = d;
                break;
            case 2:
                PIEdisplayObject.cb02 = d;
                break;
            case 3:
                PIEdisplayObject.cb03 = d;
                break;
            case 4:
                PIEdisplayObject.cb04 = d;
                break;
            case 5:
                PIEdisplayObject.cb05 = d;
                break;
            case 6:
                PIEdisplayObject.cb06 = d;
                break;
            case 7:
                PIEdisplayObject.cb07 = d;
                break;
            case 8:
                PIEdisplayObject.cb08 = d;
                break;
            case 9:
                PIEdisplayObject.cb09 = d;
                break;
            case 10:
                PIEdisplayObject.cb10 = d;
                break;
            case 11:
                PIEdisplayObject.cb11 = d;
                break;
            case 12:
                PIEdisplayObject.cb12 = d;
                break;
            case 13:
                PIEdisplayObject.cb13 = d;
                break;
            case 14:
                PIEdisplayObject.cb14 = d;
                break;
            case 15:
                PIEdisplayObject.cb15 = d;
                break;
            case 16:
                PIEdisplayObject.cb16 = d;
                break;
            case 17:
                PIEdisplayObject.cb17 = d;
                break;
            case 18:
                PIEdisplayObject.cb18 = d;
                break;
            case 19:
                PIEdisplayObject.cb19 = d;
                break;
            default:
                break
        }
        a.updateDisplay()
    }
}

function PIEchangeInputCheckbox(b, d) {
    var a;
    var c;
    a = null;
    for (c = 0;
        (a == null) && (c < PIEcbInput); c++) {
        if (PIEcbInputNames[c] == b) {
            a = PIEcbInputHandles[c]
        }
    }
    if (a != null) {
        switch (c - 1) {
            case 0:
                PIEinputObject.cb00 = d;
                break;
            case 1:
                PIEinputObject.cb01 = d;
                break;
            case 2:
                PIEinputObject.cb02 = d;
                break;
            case 3:
                PIEinputObject.cb03 = d;
                break;
            case 4:
                PIEinputObject.cb04 = d;
                break;
            case 5:
                PIEinputObject.cb05 = d;
                break;
            case 6:
                PIEinputObject.cb06 = d;
                break;
            case 7:
                PIEinputObject.cb07 = d;
                break;
            case 8:
                PIEinputObject.cb08 = d;
                break;
            case 9:
                PIEinputObject.cb09 = d;
                break;
            case 10:
                PIEinputObject.cb10 = d;
                break;
            case 11:
                PIEinputObject.cb11 = d;
                break;
            case 12:
                PIEinputObject.cb12 = d;
                break;
            case 13:
                PIEinputObject.cb13 = d;
                break;
            case 14:
                PIEinputObject.cb14 = d;
                break;
            case 15:
                PIEinputObject.cb15 = d;
                break;
            case 16:
                PIEinputObject.cb16 = d;
                break;
            case 17:
                PIEinputObject.cb17 = d;
                break;
            case 18:
                PIEinputObject.cb18 = d;
                break;
            case 19:
                PIEinputObject.cb19 = d;
                break;
            default:
                break
        }
        a.updateDisplay()
    }
}

function PIEgetDisplayCheckbox(a) {
    var d;
    var b;
    var c;
    d = false;
    for (b = 0;
        (d == false) && (b < PIEcbDisplay); b++) {
        if (PIEcbDisplayNames[b] == a) {
            d = true
        }
    }
    c = false;
    if (d == true) {
        switch (b - 1) {
            case 0:
                c = PIEdisplayObject.cb00;
                break;
            case 1:
                c = PIEdisplayObject.cb01;
                break;
            case 2:
                c = PIEdisplayObject.cb02;
                break;
            case 3:
                c = PIEdisplayObject.cb03;
                break;
            case 4:
                c = PIEdisplayObject.cb04;
                break;
            case 5:
                c = PIEdisplayObject.cb05;
                break;
            case 6:
                c = PIEdisplayObject.cb06;
                break;
            case 7:
                c = PIEdisplayObject.cb07;
                break;
            case 8:
                c = PIEdisplayObject.cb08;
                break;
            case 9:
                c = PIEdisplayObject.cb09;
                break;
            case 10:
                c = PIEdisplayObject.cb10;
                break;
            case 11:
                c = PIEdisplayObject.cb11;
                break;
            case 12:
                c = PIEdisplayObject.cb12;
                break;
            case 13:
                c = PIEdisplayObject.cb13;
                break;
            case 14:
                c = PIEdisplayObject.cb14;
                break;
            case 15:
                c = PIEdisplayObject.cb15;
                break;
            case 16:
                c = PIEdisplayObject.cb16;
                break;
            case 17:
                c = PIEdisplayObject.cb17;
                break;
            case 18:
                c = PIEdisplayObject.cb18;
                break;
            case 19:
                c = PIEdisplayObject.cb19;
                break;
            default:
                break
        }
    }
    return (c)
}

function PIEaddDualCommand(a, b) {
    PIEaddInputCommand(a, b);
    PIEaddDisplayCommand(a, b)
}

function PIEaddDisplayCommand(b, c) {
    var a;
    switch (PIEcDisplay) {
        case 0:
            PIEdisplayObject.c00 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "c00").name(b);
            break;
        case 1:
            PIEdisplayObject.c01 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "c01").name(b);
            break;
        case 2:
            PIEdisplayObject.c02 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "c02").name(b);
            break;
        case 3:
            PIEdisplayObject.c03 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "c03").name(b);
            break;
        case 4:
            PIEdisplayObject.c04 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "c04").name(b);
            break;
        case 5:
            PIEdisplayObject.c05 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "c05").name(b);
            break;
        case 6:
            PIEdisplayObject.c06 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "c06").name(b);
            break;
        case 7:
            PIEdisplayObject.c07 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "c07").name(b);
            break;
        case 8:
            PIEdisplayObject.c08 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "c08").name(b);
            break;
        case 9:
            PIEdisplayObject.c09 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "c09").name(b);
            break;
        case 10:
            PIEdisplayObject.c10 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "c10").name(b);
            break;
        case 11:
            PIEdisplayObject.c11 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "c11").name(b);
            break;
        case 12:
            PIEdisplayObject.c12 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "c12").name(b);
            break;
        case 13:
            PIEdisplayObject.c13 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "c13").name(b);
            break;
        case 14:
            PIEdisplayObject.c14 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "c14").name(b);
            break;
        case 15:
            PIEdisplayObject.c15 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "c15").name(b);
            break;
        case 16:
            PIEdisplayObject.c16 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "c16").name(b);
            break;
        case 17:
            PIEdisplayObject.c17 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "c17").name(b);
            break;
        case 18:
            PIEdisplayObject.c18 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "c18").name(b);
            break;
        case 19:
            PIEdisplayObject.c19 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "c19").name(b);
            break;
        default:
            return;
            break
    }
    PIEcDisplayHandles.push(a);
    PIEcDisplayNames.push(b);
    PIEcDisplay++
}

function PIEaddInputCommand(b, c) {
    var a;
    switch (PIEcInput) {
        case 0:
            PIEinputObject.c00 = c;
            a = PIEinputGUI.add(PIEinputObject, "c00").name(b);
            break;
        case 1:
            PIEinputObject.c01 = c;
            a = PIEinputGUI.add(PIEinputObject, "c01").name(b);
            break;
        case 2:
            PIEinputObject.c02 = c;
            a = PIEinputGUI.add(PIEinputObject, "c02").name(b);
            break;
        case 3:
            PIEinputObject.c03 = c;
            a = PIEinputGUI.add(PIEinputObject, "c03").name(b);
            break;
        case 4:
            PIEinputObject.c04 = c;
            a = PIEinputGUI.add(PIEinputObject, "c04").name(b);
            break;
        case 5:
            PIEinputObject.c05 = c;
            a = PIEinputGUI.add(PIEinputObject, "c05").name(b);
            break;
        case 6:
            PIEinputObject.c06 = c;
            a = PIEinputGUI.add(PIEinputObject, "c06").name(b);
            break;
        case 7:
            PIEinputObject.c07 = c;
            a = PIEinputGUI.add(PIEinputObject, "c07").name(b);
            break;
        case 8:
            PIEinputObject.c08 = c;
            a = PIEinputGUI.add(PIEinputObject, "c08").name(b);
            break;
        case 9:
            PIEinputObject.c09 = c;
            a = PIEinputGUI.add(PIEinputObject, "c09").name(b);
            break;
        case 10:
            PIEinputObject.c10 = c;
            a = PIEinputGUI.add(PIEinputObject, "c10").name(b);
            break;
        case 11:
            PIEinputObject.c11 = c;
            a = PIEinputGUI.add(PIEinputObject, "c11").name(b);
            break;
        case 12:
            PIEinputObject.c12 = c;
            a = PIEinputGUI.add(PIEinputObject, "c12").name(b);
            break;
        case 13:
            PIEinputObject.c13 = c;
            a = PIEinputGUI.add(PIEinputObject, "c13").name(b);
            break;
        case 14:
            PIEinputObject.c14 = c;
            a = PIEinputGUI.add(PIEinputObject, "c14").name(b);
            break;
        case 15:
            PIEinputObject.c15 = c;
            a = PIEinputGUI.add(PIEinputObject, "c15").name(b);
            break;
        case 16:
            PIEinputObject.c16 = c;
            a = PIEinputGUI.add(PIEinputObject, "c16").name(b);
            break;
        case 17:
            PIEinputObject.c17 = c;
            a = PIEinputGUI.add(PIEinputObject, "c17").name(b);
            break;
        case 18:
            PIEinputObject.c18 = c;
            a = PIEinputGUI.add(PIEinputObject, "c18").name(b);
            break;
        case 19:
            PIEinputObject.c19 = c;
            a = PIEinputGUI.add(PIEinputObject, "c19").name(b);
            break;
        default:
            return;
            break
    }
    PIEcInputHandles.push(a);
    PIEcInputNames.push(b);
    PIEcInput++
}

function PIEchangeDisplayCommand(c, b, d) {
    var a;
    var e;
    a = null;
    for (e = 0;
        (a == null) && (e < PIEcDisplay); e++) {
        if (PIEcDisplayNames[e] == c) {
            a = PIEcDisplayHandles[e]
        }
    }
    if (a != null) {
        switch (e - 1) {
            case 0:
                PIEdisplayObject.c00 = d;
                break;
            case 1:
                PIEdisplayObject.c01 = d;
                break;
            case 2:
                PIEdisplayObject.c02 = d;
                break;
            case 3:
                PIEdisplayObject.c03 = d;
                break;
            case 4:
                PIEdisplayObject.c04 = d;
                break;
            case 5:
                PIEdisplayObject.c05 = d;
                break;
            case 6:
                PIEdisplayObject.c06 = d;
                break;
            case 7:
                PIEdisplayObject.c07 = d;
                break;
            case 8:
                PIEdisplayObject.c08 = d;
                break;
            case 9:
                PIEdisplayObject.c09 = d;
                break;
            case 10:
                PIEdisplayObject.c10 = d;
                break;
            case 11:
                PIEdisplayObject.c11 = d;
                break;
            case 12:
                PIEdisplayObject.c12 = d;
                break;
            case 13:
                PIEdisplayObject.c13 = d;
                break;
            case 14:
                PIEdisplayObject.c14 = d;
                break;
            case 15:
                PIEdisplayObject.c15 = d;
                break;
            case 16:
                PIEdisplayObject.c16 = d;
                break;
            case 17:
                PIEdisplayObject.c17 = d;
                break;
            case 18:
                PIEdisplayObject.c18 = d;
                break;
            case 19:
                PIEdisplayObject.c19 = d;
                break;
            default:
                break
        }
        PIEcDisplayNames[e - 1] = b;
        a.name(b);
        a.updateDisplay()
    }
}

function PIEchangeInputCommand(c, b, d) {
    var a;
    var e;
    a = null;
    for (e = 0;
        (a == null) && (e < PIEcInput); e++) {
        if (PIEcInputNames[e] == c) {
            a = PIEcInputHandles[e]
        }
    }
    if (a != null) {
        switch (e - 1) {
            case 0:
                PIEinputObject.c00 = d;
                break;
            case 1:
                PIEinputObject.c01 = d;
                break;
            case 2:
                PIEinputObject.c02 = d;
                break;
            case 3:
                PIEinputObject.c03 = d;
                break;
            case 4:
                PIEinputObject.c04 = d;
                break;
            case 5:
                PIEinputObject.c05 = d;
                break;
            case 6:
                PIEinputObject.c06 = d;
                break;
            case 7:
                PIEinputObject.c07 = d;
                break;
            case 8:
                PIEinputObject.c08 = d;
                break;
            case 9:
                PIEinputObject.c09 = d;
                break;
            case 10:
                PIEinputObject.c10 = d;
                break;
            case 11:
                PIEinputObject.c11 = d;
                break;
            case 12:
                PIEinputObject.c12 = d;
                break;
            case 13:
                PIEinputObject.c13 = d;
                break;
            case 14:
                PIEinputObject.c14 = d;
                break;
            case 15:
                PIEinputObject.c15 = d;
                break;
            case 16:
                PIEinputObject.c16 = d;
                break;
            case 17:
                PIEinputObject.c17 = d;
                break;
            case 18:
                PIEinputObject.c18 = d;
                break;
            case 19:
                PIEinputObject.c19 = d;
                break;
            default:
                break
        }
        PIEcInputNames[e - 1] = b;
        a.name(b);
        a.updateDisplay()
    }
}

function PIEaddButton(a) {
    var b;
    button = document.createElement("button");
    button.setAttribute("id", a);
    button.innerHTML = a;
    PIEscreenElem.appendChild(button);
    return (button)
}

function PIEadjustCamera(a, c, b) {
    PIEcamera.position.x = a;
    PIEcamera.position.y = c;
    PIEcamera.position.z = b
}

function PIEturnCamera(a, c, b) {
    PIEcameraTarget.x = a;
    PIEcameraTarget.y = c;
    PIEcameraTarget.z = b;
    PIEcamera.lookAt(PIEcameraTarget)
}

function PIEsetCameraAspect(a) {
    PIEcameraAspect = a;
    PIEcamera.aspect = a
}

function PIEsetCameraFOV(a) {
    PIEcameraAngle = a;
    PIEcamera.fov = a
}

function PIEsetCameraDepth(a) {
    PIEcamera.far = a
}

function PIEsetAreaOfInterest(c, b, a, d) {
    PIEaoiTLX = c;
    PIEaoiTLY = b;
    PIEaoiBRX = a;
    PIEaoiBRY = d;
    PIEaoiW = a - c;
    PIEaoiH = b - d;
    PIEaoiAspect = PIEaoiW / PIEaoiH;
    PIEcameraAngle = 30;
    PIEcameraZ = ((PIEaoiH / 2) / Math.tan((PIEcameraAngle * Math.PI / 180) / 2));
    PIEadjustDisplayScene()
}

function PIEadjustDisplayScene() {
    var b;
    var a;
    b = 0;
    a = 0;
    if (PIEcanvasAspect > PIEaoiAspect) {
        b = PIEcanvasAspect * (PIEaoiTLY - PIEaoiBRY) - (PIEaoiBRX - PIEaoiTLX);
        b /= 2
    } else {
        if (PIEcanvasAspect < PIEaoiAspect) {
            a = (PIEaoiBRX - PIEaoiTLX) / PIEcanvasAspect - (PIEaoiTLY - PIEaoiBRY);
            a /= 2
        }
    }
    PIEdisplayTLX = PIEaoiTLX - b;
    PIEdisplayTLY = PIEaoiTLY + a;
    PIEdisplayBRX = PIEaoiBRX + b;
    PIEdisplayBRY = PIEaoiBRY - a;
    PIEdisplayW = PIEaoiW + 2 * b;
    PIEdisplayH = PIEaoiH + 2 * a;
    PIEdisplayAspect = PIEdisplayW / PIEdisplayH;
    PIEadjustCamera(PIEdisplayTLX + PIEdisplayW / 2, PIEdisplayBRY + PIEdisplayH / 2, PIEcameraZ);
    PIEturnCamera(PIEdisplayTLX + PIEdisplayW / 2, PIEdisplayBRY + PIEdisplayH / 2, 0);
    PIEsetCameraFOV(2 * Math.atan((PIEdisplayH / 2) / PIEcameraZ) * 180 / Math.PI);
    PIEsetCameraAspect(PIEdisplayAspect)
}

function PIEaddElement(a) {
    a.receiveShadow = true;
    a.castShadow = true;
    PIEscene.add(a);
    a.dragStart = null;
    a.drag = null;
    a.dragEnd = null;
    a.hoverON = null;
    a.hoverOFF = null;
    PIEsceneElements.push(a);
    return (PIEsceneElements.length - 1)
}

function PIEresetExperiment() {
    PIEstopAnimation();
    PIEanimationSpeed = 1;
    PIEspeedElem.innerHTML = PIEanimationSpeed;
    resetExperiment();
    PIEshowInputPanel();
    PIErender()
}

function PIEspeedupAnimation() {
    if (PIEanimationSpeed < PIEmaxAnimationSpeed) {
        PIEanimationSpeed *= 2
    }
    PIEspeedElem.innerHTML = PIEanimationSpeed
}

function PIEslowdownAnimation() {
    if (PIEanimationSpeed > PIEminAnimationSpeed) {
        PIEanimationSpeed /= 2
    }
    PIEspeedElem.innerHTML = PIEanimationSpeed
}

function PIEstartAnimation() {
    if (PIEanimationON == false) {
        PIElastUpdateTime = Date.now();
        PIEpauseOffset = 0;
        PIEcurrentTime = 0;
        PIEoffsetTime = 0;
        PIEanimationON = true;
        PIEanimationPaused = false;
        PIEresumeButton.style.display = "none";
        PIEresumeButton.style.visibility = "hidden";
        PIEpauseButton.style.display = "inline";
        PIEpauseButton.style.visibility = "visible";
        PIEstartButton.style.display = "none";
        PIEstopButton.style.display = "inline";
        PIEshowDisplayPanel();
        PIEanimate()
    }
}

function PIEstopAnimation() {
    if (PIEanimationON == true) {
        PIEpauseOffset = 0;
        PIEcurrentTime = 0;
        PIEoffsetTime = 0;
        PIEanimationON = false;
        PIEanimationPaused = false;
        PIEresumeButton.style.display = "none";
        PIEresumeButton.style.visibility = "hidden";
        PIEpauseButton.style.display = "inline";
        PIEpauseButton.style.visibility = "hidden";
        PIEstopButton.style.display = "none";
        PIEstartButton.style.display = "inline";
        PIEshowInputPanel()
    }
}

function PIEanimate() {
    var b;
    var a;
    if ((PIEanimationON == true) && (PIEanimationPaused == false)) {
        b = Date.now();
        a = (b - PIElastUpdateTime) * PIEanimationSpeed;
        if (a > 0) {
            PIEcurrentTime += a;
            PIEoffsetTime = a;
            PIElastUpdateTime = b;
            updateExperimentElements(PIEcurrentTime, PIEoffsetTime)
        }
        requestAnimationFrame(PIEanimate);
        PIErender()
    }
}

function PIErender() {
    PIErenderer.render(PIEscene, PIEcamera)
}

function PIEpauseAnimation() {
    var a;
    if ((PIEanimationON == true) && (PIEanimationPaused == false)) {
        a = Date.now();
        PIEpauseOffset = (a - PIElastUpdateTime);
        PIEpauseButton.style.display = "none";
        PIEpauseButton.style.visibility = "hidden";
        PIEresumeButton.style.display = "inline";
        PIEresumeButton.style.visibility = "visible";
        PIEanimationPaused = true
    }
}

function PIEresumeAnimation() {
    var a;
    if ((PIEanimationON == true) && (PIEanimationPaused == true)) {
        PIEpauseButton.style.display = "inline";
        PIEpauseButton.style.visibility = "visible";
        PIEresumeButton.style.display = "none";
        PIEresumeButton.style.visibility = "hidden";
        a = Date.now();
        PIElastUpdateTime = a - PIEpauseOffset;
        PIEanimationPaused = false;
        PIEanimate()
    }
}

function PIEadjustAnimationTime(a) {
    PIEcurrentTime -= a
}

function PIEdefaultHoverON(a) {
    if ((a != null) && ((a.hoverON) != null)) {
        a.hoverON(a)
    }
    PIErender()
}

function PIEdefaultHoverOFF(a) {
    if ((a != null) && ((a.hoverOFF) != null)) {
        a.hoverOFF(a)
    }
    PIErender()
}

function PIEdefaultDragStart(a) {
    if ((a.dragStart) != null) {
        a.dragStart(a)
    }
    PIErender()
}

function PIEdefaultDrag(a, b) {
    if ((a.drag) != null) {
        a.drag(a, b)
    } else {
        a.position.x = b.x;
        a.position.y = b.y;
        a.position.z = b.z
    }
    PIErender()
}

function PIEdefaultDragEnd(a) {
    if ((a.dragEnd) != null) {
        a.dragEnd(a)
    }
    PIErender()
}

function PIEsetHoverON(a, b) {
    a.hoverON = b
}

function PIEsetHoverOFF(a, b) {
    a.hoverOFF = b
}

function PIEsetDragStart(a, b) {
    a.dragStart = b
}

function PIEsetDrag(a, b) {
    a.drag = b
}

function PIEsetDragEnd(a, b) {
    a.dragEnd = b
}

function PIEdragElement(a) {
    PIEdragElements.push(a)
}

function PIEmouseMove(b) {
    var a;
    b.defaultPrevented = true;
    PIEmouseP.x = (b.clientX / PIEcanvasW) * 2 - 1;
    PIEmouseP.y = -(b.clientY / PIEcanvasH) * 2 + 1;
    PIEraycaster.setFromCamera(PIEmouseP, PIEcamera);
    if (PIEselectedDrag != null) {
        PIEraycaster.ray.intersectPlane(PIEdragPlane, PIEdragIntersect);
        PIEdefaultDrag(PIEselectedDrag, PIEdragIntersect.sub(PIEdragOffset))
    } else {
        a = PIEraycaster.intersectObjects(PIEdragElements);
        if (a.length > 0) {
            PIEdragPlane.setFromNormalAndCoplanarPoint(PIEcamera.getWorldDirection(PIEdragPlane.normal), a[0].object.position);
            if (PIEselectedHover != a[0].object) {
                PIEdefaultHoverOFF(PIEselectedHover);
                PIEselectedHover = a[0].object;
                PIEdefaultHoverON(PIEselectedHover)
            }
            PIEscreenElem.style.cursor = "pointer"
        } else {
            if (PIEselectedHover != null) {
                PIEdefaultHoverOFF(PIEselectedHover);
                PIEselectedHover = null;
                PIEscreenElem.style.cursor = "auto"
            }
        }
    }
}

function PIEmouseDown(b) {
    var a;
    b.defaultPrevented = true;
    PIEselectedDrag = null;
    PIEraycaster.setFromCamera(PIEmouseP, PIEcamera);
    a = PIEraycaster.intersectObjects(PIEdragElements);
    if (a.length > 0) {
        PIEselectedDrag = a[0].object;
        if (PIEraycaster.ray.intersectPlane(PIEdragPlane, PIEdragIntersect)) {
            PIEdragOffset.copy(PIEdragIntersect).sub(PIEselectedDrag.position)
        }
        PIEscreenElem.style.cursor = "move";
        PIEdefaultDragStart(PIEselectedDrag)
    }
}

function PIEmouseUp(b) {
    var a;
    b.defaultPrevented = true;
    if (PIEselectedDrag != null) {
        PIEdefaultDragEnd(PIEselectedDrag);
        PIEselectedDrag = null
    }
    PIEscreenElem.style.cursor = "auto"
};