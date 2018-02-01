var cars = [];
var objects = [];
var carVelocity = [];
var prevCarVelocity = [];
var carColors = [ 0xc62828, 0x1a237e, 0x004d40, 0x3e2723, 0xe91e63 ];
var maxVel =0, maxVelIndex = 0;
var carNames = ["RedCar", "BlueCar","GreenCar","BrownCar","PinkCar"];
var endFlag =0;
var startFlag = 0;
var thumbsUp, thumbsDown,select;
var redSprite, blueSprite, greenSprite, brownSprite, pinkSprite;
var redSpriteGeom, blueSpriteGeomm ,greenSpriteGeom, brownSpriteGeom, pinkSpriteGeom;
var redSpritetexture, blueSpritetexture, greenSpritetexture, brownSpritetexture, pinkSpritetexture;
var redSpriteMaterial, blueSpriteMaterial, greenSpriteMaterial, brownSpriteMaterial, pinkSpriteMaterial;
var zPos = [0.0,0.0,0.0,0.0,0.0,0.0,0.0];




var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Which is faster (same time test)</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>Initially cars are placed at same distance from start line.</p>";
    helpContent = helpContent + "<p>When experiment starts, all cars will start.</p>";
    helpContent = helpContent + "<p>After reaching certain distance, all cars stop( at same time).</p>";
    helpContent = helpContent + "<p>Your task is to select the fastest car.</p>";
    helpContent = helpContent + "<h3>Display Panel</h3>";
    helpContent = helpContent + "<p>The display panel has six parameters needed to find the fastest car.</p>";

    helpContent = helpContent + "<li>Timer&nbsp;&nbsp;:&nbsp;Shows time elapsed since start of experiment.</li>";
    helpContent = helpContent + "<li>RedCarDistance&nbsp;&nbsp;:&nbsp;Shows the distance travelled by red car.</li>";
    helpContent = helpContent + "<li>BlueCarDistance&nbsp;:&nbsp;Shows the distance travelled by blue car.</li>";
    helpContent = helpContent + "<li>GreenCarDistance&nbsp;:&nbsp;Shows the distance travelled bt green car.</li>";
    helpContent = helpContent + "<li>BrownCarDistance&nbsp;:&nbsp;Shows the distance travelled by brown car.</li>";
    
    helpContent = helpContent + "<li>PinkCarDistance&nbsp;:&nbsp;Shows the distance travelled by the pink car.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>Your task is to select the fastest car.Result will be displayed after you click the car.</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animaion by uing the speed control buttons</p>";
    
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Which is faster (same time test)</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<h3>Process</h3>";
    infoContent = infoContent + "<p>Initially cars are placed at same distance from start line.</p>";
    infoContent = infoContent + "<p>When experiment starts, all cars will start.</p>";
    infoContent = infoContent + "<p>After reaching certain distance, all cars stop( at same time).</p>";
    infoContent = infoContent + "<p>Your task is to select the fastest car.</p>";
    infoContent = infoContent + "<h3>Formulae</h3>";
    infoContent = infoContent + "<p>Condider Speed be S , Distance travelled be D, Time be T.</p>";
    infoContent = infoContent + "<h2> Speed = Distance/Time</h2>";
    infoContent = infoContent + "<p>As time is constant(same), speed is directly proportional to distance travelled.So car which travelled more distance in same time will be the fastest car.</p>";
    infoContent = infoContent + "<p>You can find the values of different car's distance in the display panel.</p>";
    infoContent = infoContent + "<p>Also you can find the timer which displays the time from start of experiment.</p>";
    infoContent = infoContent + "<p>You will be informed whether the selected car is the fastest car or not.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function loadExperimentElements () 
{
    // repeatButton   = PIEaddButton("repeat");
    // repeatButton.style.display = "none";
    // repeatButton.addEventListener('click', repeatAnimation);
    // console.log(repeatButton);


    


    // var repeatButton;           /* The button element */

    // repeatButton = document.createElement('button');
    // repeatButton.setAttribute("id", "repeat");
    // repeatButton.innerHTML = "repeat";
    // PIEscreenElem.appendChild(repeatButton);
    // repeatButton.addEventListener('click', function  (argument) {

    //     alert("Do Something");
    //     // body...
    // });

PIEsetExperimentTitle("Which is faster (same time test)");
PIEsetDeveloperName("Dattatreya Garimella");
initialiseHelp();
initialiseInfo();
var ground = new Ground();
ground.mesh.rotation.x = -Math.PI/2;
ground.mesh.position.y -= 2;
PIEaddElement(ground.mesh);

var groundGeom = new THREE.PlaneGeometry(280, 4000, 1, 1);
var groundMat = new THREE.MeshLambertMaterial({color:0x212121, shading:THREE.FlatShading});
var road = new THREE.Mesh(groundGeom, groundMat);
road.position.x -=100;
road.rotation.x = -Math.PI/2;
road.position.z = +100;
PIEaddElement(road);


var roadEnd1, roadEnd2;
roadEnd1 = new THREE.Mesh(new THREE.BoxGeometry(2,1,4500), new THREE.MeshBasicMaterial({color:Colors.white}));
roadEnd1.position.set(30,0,0);
roadEnd2 = new THREE.Mesh(new THREE.BoxGeometry(2,1,4500), new THREE.MeshBasicMaterial({color:Colors.white}));
roadEnd2.position.set(-233,0,0);
PIEaddElement(roadEnd1);
PIEaddElement(roadEnd2);

var z = 0;

for (var i = 80; i > 0; i=i-2) {
        //Things[i]
        var roadSeperator1, roadSeperator2;
        roadSeperator1 = new THREE.Mesh(new THREE.BoxGeometry(2,1,40), new THREE.MeshBasicMaterial({color:Colors.white}));
        roadSeperator1.position.set(-100,0,z);
        roadSeperator2 = new THREE.Mesh(new THREE.BoxGeometry(2,1,40), new THREE.MeshBasicMaterial({color:Colors.white}));
        roadSeperator2.position.set(-100,0,-1*z);

        PIEaddElement(roadSeperator1);
        PIEaddElement(roadSeperator2);
        z += 100;
    };
    var startLine = new THREE.Mesh(new THREE.BoxGeometry(260,1,2), new THREE.MeshBasicMaterial({color:0x000000}));
    startLine.position.set(-100,1,30);
    PIEaddElement(startLine);

    var endLine = startLine.clone();
    endLine.position.set(-100,1,1530);

    PIEaddElement(endLine);
    myBall2 = new THREE.Mesh(new THREE.BoxGeometry(0.1,0.1,0.1), new THREE.MeshPhongMaterial({color:Colors.pink}));
    PIEaddElement(myBall2);
    myBall2.position.z = -0;
    myBall2.position.x = -70;
    myBall2.castShadow = false;
    myBall2.position.set(-150,13,-0);
    
    posX = -200;
    posY = 13;
    posZ = 0;
    // cars[0] = Car(carColors[0], 0);
    // cars[0].position.set(-100,13,0);
    // cars[0].name ="RedCar";
    // cars[0].scale.set(0.5,0.5,0.5);
    // console.log(cars[0]);
    // cars[1] = Car(carColors[4], 60);
    // cars[1].position.set(-40,13,0);
    // cars[1].name="BlueCar";
    // cars[1].scale.set(0.5,0.5,0.5);
    // PIEaddElement(cars[1]);
    
    for (var i = 0; i <5; i++) {

        cars[i]= Car(carColors[i]);
        cars[i].name = carNames[i];
        cars[i].scale.set(0.5,0.5,0.5);
        cars[i].position.set(posX,posY,posZ);
        PIEaddElement(cars[i]);
        for(var j = cars[i].children.length-1; j>=0;j--){
            objects.push(cars[i].children[j]);

        }
        posX += 50;

        carVelocity[i] = Math.random()*20 + 90;

        if (carVelocity[i] > maxVel)
        {
            maxVel = carVelocity[i];
            maxVelIndex = i;
        }
    }
    // car1VX = Math.random()*20 + 60;
    // car2VX = Math.random()*20 + 60;
    // car3VX = Math.random()*20 + 60;
    // car4VX = Math.random()*20 + 60;
    // car5VX = Math.random()*20 + 60;

    // for (var i = cars[1].children.length - 1; i >= 0; i--) {
    //     objects.push(cars[1].children[i]);
    //     // console.log(cars[1].children[i]);
    //     // console.log("Hello");
    // };
    //objects.push(cars[0]);

    //PIEaddElement(cars[0]);
    //console.log(startLine.position.z - cars[1].position.z);


    thumbsUp = new THREE.Mesh(new THREE.PlaneGeometry(100,100,1), new THREE.MeshPhongMaterial({overdraw:0.5}));
    var thumbsUpLoader = new THREE.TextureLoader();
    thumbsUpLoader.load("textures/rightAns.jpg", function  (texture) {
        thumbsUp.material.map =texture;
        thumbsUp.material.needsUpdate = true;
        PIErender();
        // body...
    });
    PIEaddElement(thumbsUp);
    thumbsUp.position.set(-220,-100,-50);
    thumbsUp.rotation.x = -0.5*(Math.PI);
    thumbsUp.rotation.z = +0.5 * (Math.PI);

    thumbsDown = new THREE.Mesh(new THREE.PlaneGeometry(100,100,1), new THREE.MeshPhongMaterial({overdraw:1}));
    var thumbsDownLoader = new THREE.TextureLoader();
    thumbsDownLoader.load("textures/wrongAns.jpg", function  (texture) {
        thumbsDown.material.map =texture;
        thumbsDown.material.needsUpdate = true;
        PIErender();
        // body...
    });
    PIEaddElement(thumbsDown);
    thumbsDown.position.set(-220,-100,-50);
    thumbsDown.rotation.x = -0.5*(Math.PI);
    thumbsDown.rotation.z = +0.5 * (Math.PI);

    select = new THREE.Mesh(new THREE.PlaneGeometry(90,90,1), new THREE.MeshPhongMaterial({overdraw:1, color: 0xffffff }));
    var selectLoader = new THREE.TextureLoader();
    selectLoader.load("textures/selectCar.jpg", function  (texture) {
        select.material.map =texture;
        select.material.needsUpdate = true;
        PIErender();
        // body...
    });
    PIEaddElement(select);
    select.position.set(-220,100,0);
    select.rotation.x = -0.5*(Math.PI);
    select.rotation.z = +0.5 * (Math.PI);
    select.rotation.y = 0.2;

    // startLineBox = new THREE.Mesh(new THREE.PlaneGeometry(260,60,1), new THREE.MeshBasicMaterial({overdraw:1}));
    // var startLineBoxLoader = new THREE.TextureLoader();
    // startLineBoxLoader.load("textures/start.jpg", function  (texture) {
    //     startLineBox.material.map =texture;
    //     startLineBox.material.needsUpdate = true;
    //     PIErender();
    //     // body...
    // });
    // //PIEaddElement(startLineBox);
    // startLineBox.position.set(-100,1,60);
    // startLineBox.rotation.x = -0.5*(Math.PI);

    // endLineBox = new THREE.Mesh(new THREE.PlaneGeometry(260,60,1), new THREE.MeshBasicMaterial({overdraw:1}));
    // var endLineBoxLoader = new THREE.TextureLoader();
    // endLineBoxLoader.load("textures/start.jpg", function  (texture) {
    //     endLineBox.material.map =texture;
    //     endLineBox.material.needsUpdate = true;
    //     PIErender();
    //     // body...
    // });
    // //PIEaddElement(endLineBox);
    // endLineBox.position.set(-100,1,1560);
    // endLineBox.rotation.x = -0.5*(Math.PI);


    startLineText = new THREE.Mesh(new THREE.PlaneGeometry(260,60,1), new THREE.MeshLambertMaterial({overdraw:1}));
    var startLineTextLoader = new THREE.TextureLoader();
    startLineTextLoader.load("textures/startText.jpg", function  (texture) {
        startLineText.material.map =texture;
        startLineText.material.needsUpdate = true;
        PIErender();
        // body...
    });
    PIEaddElement(startLineText);
    startLineText.position.set(-100,1,60);
    startLineText.rotation.x = -0.5*(Math.PI);

    startLineText.rotation.z = (Math.PI);

    endLineText = new THREE.Mesh(new THREE.PlaneGeometry(260,60,1), new THREE.MeshLambertMaterial({overdraw:1}));
    var endLineTextLoader = new THREE.TextureLoader();
    endLineTextLoader.load("textures/finishText.jpg", function  (texture) {
        endLineText.material.map =texture;
        endLineText.material.needsUpdate = true;
        PIErender();
        // body...
    });
    PIEaddElement(endLineText);
    endLineText.position.set(-100,1,1560);
    endLineText.rotation.x = -0.5*(Math.PI);
    endLineText.rotation.z = (Math.PI);


    redSpriteGeom = new THREE.PlaneGeometry(50,50,1,1);
    redSpritetexture = getcanvasTexture("0.00",100,hashColor.red);
    redSpriteMaterial = new THREE.MeshLambertMaterial( { map: redSpritetexture, transparent:true } );
    redSprite = new THREE.Mesh(redSpriteGeom, redSpriteMaterial);
    PIEaddElement(redSprite);
    redSprite.position.set(-160,45,-50);
    redSprite.rotation.x = -0.5 *(Math.PI);
    redSprite.rotation.z = 0.5*(Math.PI);
    zPos[0] = -50;
    

    blueSpriteGeom = new THREE.PlaneGeometry(50,50,1,1);
    blueSpritetexture = getcanvasTexture("0.00",100,hashColor.blue);
    blueSpriteMaterial = new THREE.MeshLambertMaterial( { map: blueSpritetexture, transparent:true } );
    blueSprite = new THREE.Mesh(blueSpriteGeom, blueSpriteMaterial);
    PIEaddElement(blueSprite);
    blueSprite.position.set(-110,42,-50);
    zPos[1] = -50;
    blueSprite.rotation.x = -0.5 *(Math.PI);
    blueSprite.rotation.z = 0.5*(Math.PI);

    greenSpriteGeom = new THREE.PlaneGeometry(25,25,1,1);
    greenSpritetexture = getcanvasTexture("0.00",100,hashColor.green);
    greenSpriteMaterial = new THREE.MeshLambertMaterial( { map: greenSpritetexture, transparent:true } );
    greenSprite = new THREE.Mesh(greenSpriteGeom, greenSpriteMaterial);
    PIEaddElement(greenSprite);
    greenSprite.position.set(-85,39,-50);
    zPos[2] = -50;
    greenSprite.rotation.x = -0.5 *(Math.PI);
    greenSprite.rotation.z = 0.5*(Math.PI);

    brownSpriteGeom = new THREE.PlaneGeometry(25,25,1,1);
    brownSpritetexture = getcanvasTexture("0.00",100,hashColor.brown);
    brownSpriteMaterial = new THREE.MeshLambertMaterial( { map: brownSpritetexture, transparent:true } );
    brownSprite = new THREE.Mesh(brownSpriteGeom, brownSpriteMaterial);
    PIEaddElement(brownSprite);
    brownSprite.position.set(-40,36,-50);
    zPos[3] = -50;
    brownSprite.rotation.x = -0.5 *(Math.PI);
    brownSprite.rotation.z = 0.5*(Math.PI);


    pinkSpriteGeom = new THREE.PlaneGeometry(25,25,1,1);
    pinkSpritetexture = getcanvasTexture("0.00",100,hashColor.pink);
    pinkSpriteMaterial = new THREE.MeshLambertMaterial( { map: pinkSpritetexture, transparent:true } );
    pinkSprite = new THREE.Mesh(pinkSpriteGeom, pinkSpriteMaterial);
    PIEaddElement(pinkSprite);
    pinkSprite.position.set(60,33,-50);
    zPos[4] = -50;
    pinkSprite.rotation.x = -0.5 *(Math.PI);
    pinkSprite.rotation.z = 0.5*(Math.PI);


    timerSpriteGeom = new THREE.PlaneGeometry(55,25,1,1);
    timerSpritetexture = getcanvasTexture("Timer : 0.00",100,"#121212");
    timerSpriteMaterial = new THREE.MeshLambertMaterial( { map: timerSpritetexture, transparent:true } );
    timerSprite = new THREE.Mesh(timerSpriteGeom, timerSpriteMaterial);
    PIEaddElement(timerSprite);
    timerSprite.position.set(-200,125,250);
    zPos[5] = 250;
    timerSprite.rotation.x = -0.5 *(Math.PI);
    timerSprite.rotation.z = 0.5*(Math.PI);


    // chooseSpriteGeom = new THREE.PlaneGeometry(65,25,1,1);
    // chooseSpritetexture = getcanvasTexture("Choose Fastest Car",100,hashColor.red);
    // chooseSpriteMaterial = new THREE.MeshLambertMaterial( { map: chooseSpritetexture, transparent:true } );
    // chooseSprite = new THREE.Mesh(chooseSpriteGeom, chooseSpriteMaterial);
    // PIEaddElement(chooseSprite);
    // chooseSprite.position.set(55,125,40);
    // zPos[6] = 40;



    PIEsetAreaOfInterest(-400,300,250,-150);
    PIEadjustCamera(480,675,100);
    PIEturnCamera(50,0,100);
    PIErenderer.setClearColor(0x87ceeb, 1);
    myBall2.add(PIEcamera);

    //PIEaddDualText(label, value, notify);
    //PIEaddDualText("StopWatch","0.0", handleStopWatch );
    // PIEaddInputText("Timer","0.0", handleStopWatch);
    // PIEaddInputText("RedCarDistance","0.0", handleDistance);
    // PIEaddInputText("BlueCarDistance","0.0", handleDistance);
    // PIEaddInputText("GreenCarDistance","0.0", handleDistance);
    // PIEaddInputText("BrownCarDistance","0.0", handleDistance);
    // PIEaddInputText("PinkCarDistance","0.0", handleDistance);
    
    // PIEaddDisplayText("Timer","0.0");
    // PIEaddDisplayText("RedCarDistance","0.0");
    // PIEaddDisplayText("BlueCarDistance","0.0");
    // PIEaddDisplayText("GreenCarDistance","0.0");
    // PIEaddDisplayText("BrownCarDistance","0.0");
    // PIEaddDisplayText("PinkCarDistance","0.0");


}


var hashColor = {
    red:"#ff5252",
    white:"#d8d0d1",
    brown:"#fb8c00",
    pink:"#f06292",
    brownDark:"#23190f",
    blue:"#2196f3",
    ground:"#654321",
    green:"#00e676"
}


function resetExperiment () {
    startFlag =0;

    posX = -200;
    posY = 13;
    posZ = 0;
    carVelocity = [];
    objects = [];
    maxVel = 0;
    maxVelIndex = 0;


    PIEscene.remove(redSprite);
    PIEscene.remove(blueSprite);
    PIEscene.remove(greenSprite);
    PIEscene.remove(brownSprite);
    PIEscene.remove(pinkSprite);
    //PIEscene.remove(chooseSprite);
    PIEscene.remove(timerSprite);

    redSpriteGeom.dispose();
    blueSpriteGeom.dispose();
    greenSpriteGeom.dispose();
    brownSpriteGeom.dispose();
    pinkSpriteGeom.dispose();
    //chooseSpriteGeom.dispose();
    timerSpriteGeom.dispose();



    redSpriteMaterial.dispose();
    blueSpriteMaterial.dispose();
    greenSpriteMaterial.dispose();
    brownSpriteMaterial.dispose();
    pinkSpriteMaterial.dispose();
    //chooseSpriteMaterial.dispose();
    timerSpriteMaterial.dispose();

    redSprite = undefined;

    // blueSprite.material.dispose();
    blueSprite = undefined;

    greenSprite = undefined;


    // brownSprite.material.dispose();
    brownSprite = undefined;


    // pinkSprite.material.dispose();
    pinkSprite = undefined;


    // choose.material.dispose();
    chooseSprite = undefined;


    // timer.material.dispose();
    timerSprite = undefined;

    redSpriteGeom = new THREE.PlaneGeometry(50,50,1);
    redSpritetexture = getcanvasTexture("0.00",100,hashColor.red);
    redSpriteMaterial = new THREE.MeshLambertMaterial( { map: redSpritetexture, transparent:true } );
    redSprite = new THREE.Mesh(redSpriteGeom, redSpriteMaterial);
    PIEaddElement(redSprite);
    redSprite.position.set(-175,45,-50);
    redSprite.rotation.x = -0.5 *(Math.PI);
    redSprite.rotation.z = 0.5*(Math.PI);
    zPos[0] = -50;

    blueSpriteGeom = new THREE.PlaneGeometry(50,50,1);
    blueSpritetexture = getcanvasTexture("0.00",100,hashColor.blue);
    blueSpriteMaterial = new THREE.MeshLambertMaterial( { map: blueSpritetexture, transparent:true } );
    blueSprite = new THREE.Mesh(blueSpriteGeom, blueSpriteMaterial);
    PIEaddElement(blueSprite);
    blueSprite.position.set(-130,42,-50);
    blueSprite.rotation.x = -0.5 *(Math.PI);
    blueSprite.rotation.z = 0.5*(Math.PI);
    zPos[1] = -50;

    greenSpriteGeom = new THREE.PlaneGeometry(50,50,1);
    greenSpritetexture = getcanvasTexture("0.00",100,hashColor.green);
    greenSpriteMaterial = new THREE.MeshLambertMaterial( { map: greenSpritetexture, transparent:true } );
    greenSprite = new THREE.Mesh(greenSpriteGeom, greenSpriteMaterial);
    PIEaddElement(greenSprite);
    greenSprite.position.set(-85,39,-50);
    greenSprite.rotation.x = -0.5 *(Math.PI);
    greenSprite.rotation.z = 0.5*(Math.PI);
    zPos[2] = -50;


    brownSpriteGeom = new THREE.PlaneGeometry(50,50,1);
    brownSpritetexture = getcanvasTexture("0.00",100,hashColor.brown);
    brownSpriteMaterial = new THREE.MeshLambertMaterial( { map: brownSpritetexture, transparent:true } );
    brownSprite = new THREE.Mesh(brownSpriteGeom, brownSpriteMaterial);
    PIEaddElement(brownSprite);
    brownSprite.position.set(-40,36,-50);
    brownSprite.rotation.x = -0.5 *(Math.PI);
    brownSprite.rotation.z = 0.5*(Math.PI);
    zPos[3] = -50;

    pinkSpriteGeom = new THREE.PlaneGeometry(50,50,1);
    pinkSpritetexture = getcanvasTexture("0.00",100,hashColor.pink);
    pinkSpriteMaterial = new THREE.MeshLambertMaterial( { map: pinkSpritetexture, transparent:true } );
    pinkSprite = new THREE.Mesh(pinkSpriteGeom, pinkSpriteMaterial);
    PIEaddElement(pinkSprite);
    pinkSprite.position.set(15,33,-50);
    pinkSprite.rotation.x = -0.5 *(Math.PI);
    pinkSprite.rotation.z = 0.5*(Math.PI);
    zPos[4] = -50;

    timerSpriteGeom = new THREE.PlaneGeometry(180,120,1,1);
    timerSpritetexture = getcanvasTexture("Timer : 0.00",100,"#121212");
    timerSpriteMaterial = new THREE.MeshLambertMaterial( { map: timerSpritetexture, transparent:true } );
    timerSprite = new THREE.Mesh(timerSpriteGeom, timerSpriteMaterial);
    PIEaddElement(timerSprite);
    timerSprite.position.set(-170,125,250);
    timerSprite.rotation.x = -0.5 *(Math.PI);
    timerSprite.rotation.z = 0.5*(Math.PI);
    zPos[5] = 250;
    //     timerSpriteGeom = new THREE.PlaneGeometry(180,120,1,1);
    // timerSpritetexture = getcanvasTexture("Timer : "+((t/1000).toFixed(1)).toString()+"s",100,"#121212");
    // timerSpriteMaterial = new THREE.MeshLambertMaterial( { map: timerSpritetexture, transparent:true } );
    // timerSprite = new THREE.Mesh(timerSpriteGeom, timerSpriteMaterial);
    // PIEaddElement(timerSprite);
    // //zPos[5]=timerSprite.position.z;
    // zPos[5]=zPos[5]+(boundaryT*carVelocity[maxVelIndex]);
    // timerSprite.position.set(-170,125,zPos[5]);
    // timerSprite.rotation.x = -0.5 *(Math.PI);
    // timerSprite.rotation.z = 0.5*(Math.PI);
    // timerSprite.rotation.y = 0.5;

    // chooseSpriteGeom = new THREE.PlaneGeometry(65,25,1,1);
    // chooseSpritetexture = getcanvasTexture("Choose Fastest Car",100,hashColor.red);
    // chooseSpriteMaterial = new THREE.MeshLambertMaterial( { map: chooseSpritetexture, transparent:true } );
    // chooseSprite = new THREE.Mesh(chooseSpriteGeom, chooseSpriteMaterial);
    // PIEaddElement(chooseSprite);
    // chooseSprite.position.set(55,125,40);



    //zPos = [0.0, 0.0,0.0,0.0,0.0,0.0,0.0];

    for (var i = 0; i <5; i++) {

        // cars[i]= Car(carColors[i]);
        // cars[i].name = carNames[i];
        // cars[i].scale.set(0.5,0.5,0.5);
        cars[i].position.set(posX,posY,posZ);
        //PIEaddElement(cars[i]);
        for(var j = cars[i].children.length-1; j>=0;j--){
            objects.push(cars[i].children[j]);

        }
        posX += 50;

        carVelocity[i] = Math.random()*20 + 60;

        if (carVelocity[i] > maxVel)
        {
            maxVel = carVelocity[i];
            maxVelIndex = i;
        }
    }
    myBall2.position.set(-150,13,-0);
    select.position.set(-220,100,0);
    thumbsUp.position.set(-220,-100,-50);
    thumbsDown.position.set(-220,-100,-50);
    // PIEchangeInputText("Timer","0.0", handleStopWatch);
    // PIEchangeInputText("RedCarDistance","0.0", handleDistance);
    // PIEchangeInputText("BlueCarDistance","0.0", handleDistance);
    // PIEchangeInputText("GreenCarDistance","0.0", handleDistance);
    // PIEchangeInputText("BrownCarDistance","0.0", handleDistance);
    // PIEchangeInputText("PinkCarDistance","0.0", handleDistance);

}


function updateExperimentElements (t,dt) {

    PIEscene.remove(redSprite);
    PIEscene.remove(blueSprite);
    PIEscene.remove(greenSprite);
    PIEscene.remove(brownSprite);
    PIEscene.remove(pinkSprite);
    //PIEscene.remove(chooseSprite);
    PIEscene.remove(timerSprite);

    redSpriteGeom.dispose();
    blueSpriteGeom.dispose();
    greenSpriteGeom.dispose();
    brownSpriteGeom.dispose();
    pinkSpriteGeom.dispose();
    //chooseSpriteGeom.dispose();
    timerSpriteGeom.dispose();



    redSpriteMaterial.dispose();
    blueSpriteMaterial.dispose();
    greenSpriteMaterial.dispose();
    brownSpriteMaterial.dispose();
    pinkSpriteMaterial.dispose();
    //chooseSpriteMaterial.dispose();
    timerSpriteMaterial.dispose();

    redSprite = undefined;

    // blueSprite.material.dispose();
    blueSprite = undefined;

    greenSprite = undefined;


    // brownSprite.material.dispose();
    brownSprite = undefined;


    // pinkSprite.material.dispose();
    pinkSprite = undefined;


    // choose.material.dispose();
    //chooseSprite = undefined;


    // timer.material.dispose();
    timerSprite = undefined;

    startFlag =1;

    var boundaryT = dt/1000;

    var flag = 0, index = 0, maxPos;

    if ( cars[maxVelIndex].position.z + boundaryT*carVelocity[maxVelIndex] >= 1550)
    {
        //boundaryT = (1500 - cars[maxVelIndex].position.z)/carVelocity[maxVelIndex];
        // PIEstopAnimation();
        //boundaryT = 0;
        flag = 1;

    }

    for (var i =0 ; i<5;i++) 
    {
        cars[i].position.z += boundaryT*carVelocity[i];  
        cars[i].children[5].rotation.x += 0.3;
        cars[i].children[6].rotation.x += 0.3;
        cars[i].children[7].rotation.x += 0.3;
        cars[i].children[8].rotation.x += 0.3;                      
    };
    //myBall2.position.z += boundaryT*carVelocity[maxVelIndex];
    

    if ( flag == 1)
    {
        boundaryT = 0;
        endFlag = 1;
        
        console.log(cars[maxVelIndex].position.z);
        flag =0;
        //alert("Select Fastest Car");

        for (var i = carVelocity.length - 1; i >= 0; i--) {
         prevCarVelocity[i] = carVelocity[i];
     };
     PIEstopAnimation();
 }

 myBall2.position.z += boundaryT*(( carVelocity[0] + carVelocity[1] + carVelocity[2] + carVelocity[3] + carVelocity[4])/5); 
 select.position.z += boundaryT*carVelocity[maxVelIndex];
 dt = boundaryT*1000;
    //console.log(t +"   " + dt);
    // console.log((t/1000).toString());
    // PIEchangeDisplayText("Timer", (t/1000).toString() + " sec");
    // PIEchangeDisplayText("RedCarDistance", (Math.round((cars[0].position.z)*100)/100).toString()+" m");
    // PIEchangeDisplayText("BlueCarDistance", (Math.round((cars[1].position.z)*100)/100).toString()+" m");
    // PIEchangeDisplayText("GreenCarDistance", (Math.round((cars[2].position.z)*100)/100).toString()+" m");
    // PIEchangeDisplayText("BrownCarDistance", (Math.round((cars[3].position.z)*100)/100).toString()+" m");
    // PIEchangeDisplayText("PinkCarDistance", (Math.round((cars[4].position.z)*100)/100).toString()+" m");

    // PIEchangeInputText("Timer", (t/1000).toString()+ "sec");
    // PIEchangeInputText("RedCarDistance", (Math.round((cars[0].position.z)*100)/100).toString()+" m");
    // PIEchangeInputText("BlueCarDistance", (Math.round((cars[1].position.z)*100)/100).toString()+" m");
    // PIEchangeInputText("GreenCarDistance", (Math.round((cars[2].position.z)*100)/100).toString()+" m");
    // PIEchangeInputText("BrownCarDistance", (Math.round((cars[3].position.z)*100)/100).toString()+" m");
    // PIEchangeInputText("PinkCarDistance", (Math.round((cars[4].position.z)*100)/100).toString()+" m");
    //myBall2.rotation.y += 0.01;


    redSpriteGeom = new THREE.PlaneGeometry(50,50,1,1);
    redSpritetexture = getcanvasTexture(((cars[0].position.z/7.5).toFixed(1)).toString()+"m",100,hashColor.red);
    redSpriteMaterial = new THREE.MeshLambertMaterial( { map: redSpritetexture, transparent:true } );
    redSprite = new THREE.Mesh(redSpriteGeom, redSpriteMaterial);
    PIEaddElement(redSprite);
    //zPos[0]=redSprite.position.z;
    zPos[0]=zPos[0]+(boundaryT*carVelocity[0]);
    redSprite.position.set(-165,45,zPos[0]);
    redSprite.rotation.x = -0.5 *(Math.PI);
    redSprite.rotation.z = 0.5*(Math.PI);
    

    blueSpriteGeom = new THREE.PlaneGeometry(50,50,1,1);
    blueSpritetexture = getcanvasTexture(((cars[1].position.z/7.5).toFixed(1)).toString()+"m",100,hashColor.blue);
    blueSpriteMaterial = new THREE.MeshLambertMaterial( { map: blueSpritetexture, transparent:true } );
    blueSprite = new THREE.Mesh(blueSpriteGeom, blueSpriteMaterial);
    PIEaddElement(blueSprite);
    //zPos[1]=blueSprite.position.z;
    zPos[1]=zPos[1]+(boundaryT*carVelocity[1]);
    blueSprite.position.set(-120,42,zPos[1]);
    blueSprite.rotation.x = -0.5 *(Math.PI);
    blueSprite.rotation.z = 0.5*(Math.PI);

    greenSpriteGeom = new THREE.PlaneGeometry(50,50,1,1);
    greenSpritetexture = getcanvasTexture(((cars[2].position.z/7.5).toFixed(1)).toString()+"m",100,hashColor.green);
    greenSpriteMaterial = new THREE.MeshLambertMaterial( { map: greenSpritetexture, transparent:true } );
    greenSprite = new THREE.Mesh(greenSpriteGeom, greenSpriteMaterial);
    PIEaddElement(greenSprite);
    //zPos[2]=greenSprite.position.z;
    zPos[2]=zPos[2]+(boundaryT*carVelocity[2]);
    greenSprite.position.set(-78,39,zPos[2]);
    greenSprite.rotation.x = -0.5 *(Math.PI);
    greenSprite.rotation.z = 0.5*(Math.PI);



    brownSpriteGeom = new THREE.PlaneGeometry(50,50,1,1);
    brownSpritetexture = getcanvasTexture(((cars[3].position.z/7.5).toFixed(1)).toString()+"m",100,hashColor.brown);
    brownSpriteMaterial = new THREE.MeshLambertMaterial( { map: brownSpritetexture, transparent:true } );
    brownSprite = new THREE.Mesh(brownSpriteGeom, brownSpriteMaterial);
    PIEaddElement(brownSprite);
    //zPos[3]=brownSprite.position.z;
    zPos[3]=zPos[3]+(boundaryT*carVelocity[3]);
    brownSprite.position.set(-30,36,zPos[3]);
    brownSprite.rotation.x = -0.5 *(Math.PI);
    brownSprite.rotation.z = 0.5*(Math.PI);


    pinkSpriteGeom = new THREE.PlaneGeometry(50,50,1);
    pinkSpritetexture = getcanvasTexture(((cars[4].position.z/7.5).toFixed(1)).toString()+"m",100,hashColor.pink);
    pinkSpriteMaterial = new THREE.MeshLambertMaterial( { map: pinkSpritetexture, transparent:true } );
    pinkSprite = new THREE.Mesh(pinkSpriteGeom, pinkSpriteMaterial);
    PIEaddElement(pinkSprite);
    //zPos[4]=pinkSprite.position.z;
    zPos[4]=zPos[4]+(boundaryT*carVelocity[4]);
    pinkSprite.position.set(20,33,zPos[4]);
    pinkSprite.rotation.x = -0.5 *(Math.PI);
    pinkSprite.rotation.z = 0.5*(Math.PI);


    timerSpriteGeom = new THREE.PlaneGeometry(180,120,1,1);
    timerSpritetexture = getcanvasTexture("Timer : "+((t/1000).toFixed(1)).toString()+"s",100,"#121212");
    timerSpriteMaterial = new THREE.MeshLambertMaterial( { map: timerSpritetexture, transparent:true } );
    timerSprite = new THREE.Mesh(timerSpriteGeom, timerSpriteMaterial);
    PIEaddElement(timerSprite);
    //zPos[5]=timerSprite.position.z;
    zPos[5]=zPos[5]+(boundaryT*carVelocity[maxVelIndex]);
    timerSprite.position.set(-170,125,zPos[5]);
    timerSprite.rotation.x = -0.5 *(Math.PI);
    timerSprite.rotation.z = 0.5*(Math.PI);
    // timerSprite.rotation.y = 0.5;


    // chooseSpriteGeom = new THREE.PlaneGeometry(65,25,1,1);
    // chooseSpritetexture = getcanvasTexture(message,100,hashColor.red);
    // chooseSpriteMaterial = new THREE.MeshLambertMaterial( { map: chooseSpritetexture, transparent:true } );
    // chooseSprite = new THREE.Mesh(chooseSpriteGeom, chooseSpriteMaterial);
    // PIEaddElement(chooseSprite);
    // //zPos[6]=chooseSprite.position.z;
    // zPos[6]=zPos[6]+(boundaryT*carVelocity[maxVelIndex]);
    // chooseSprite.position.set(55,125,zPos[6]);


}



HEIGHT = window.innerHeight;
WIDTH = window.innerWidth;
window.addEventListener( 'mousedown', onMouseMove, false );
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var correctFlag = -1;

function onMouseMove( event ) {

    particleMaterial = new THREE.SpriteMaterial( { color: 0x000000 } );

    //console.log("hello click");
    mouse.x = ( (event.clientX -PIErenderer.domElement.offsetLeft) / PIErenderer.domElement.width ) * 2 - 1;
    mouse.y = -( (event.clientY - PIErenderer.domElement.offsetTop) / PIErenderer.domElement.height ) * 2 + 1;
    raycaster.setFromCamera( mouse, PIEcamera );

    if (startFlag ==1)
        {    var intersects = raycaster.intersectObjects( objects);
    //console.log(intersects.length);
    for ( var i = 0; i < intersects.length; i++ ) {

        //intersects[ i ].object.material.color.set( 0xffffff*(Math.random()) );
        var particle = new THREE.Sprite( particleMaterial , true);
        particle.position.copy( intersects[ 0 ].point );
        particle.scale.x = particle.scale.y = 2;
        // scene.add( particle );
        console.log(intersects[i].object.parent.name);

        if (intersects[i].object.parent.name == cars[maxVelIndex].name)
        {
            //alert("CORRECT ANSWER");
            correctFlag = 1;
        }
        else
        {
            //alert("WRONG ANSWER");
            correctFlag = -1;
        }
        //PIEaddElement(particle);
        if (correctFlag == 1)
        {
            thumbsDown.position.y = -100;
            thumbsDown.position.z = cars[maxVelIndex].position.z;
            thumbsUp.position.z = cars[maxVelIndex].position.z -110;
            thumbsUp.position.y = 100;
        }
        else if (correctFlag == -1)
        {
            thumbsDown.position.y = 100;
            thumbsDown.position.z = cars[maxVelIndex].position.z -110;
            thumbsUp.position.z = cars[maxVelIndex].position.z ;
            thumbsUp.position.y = -100;
        }
        PIErender();

    }}
    

}

var Colors = {
    red:0xf25346,
    white:0xd8d0d1,
    brown:0x59332e,
    pink:0xF5986E,
    brownDark:0x23190f,
    blue:0x68c3c0,
    ground:0x654321,
    green:0x96ceb4
};

var Car = function(colorCode, d)
{
    group = new THREE.Group();

    // var material = new THREE.MeshBasicMaterial({color:colorCode});
    // var geometry = new THREE.BoxGeometry(35,34,33);

    
    // var cubeA = new THREE.Mesh( geometry, material );
    // cubeA.position.set( -150 + d, 30, 0 );

    // var cubeB = new THREE.Mesh( geometry, material );
    // cubeB.position.set( -50+ d, 30, 0 );
    // carGroup.add( cubeA );
    // carGroup.add( cubeB );


    var bodyMat = new THREE.MeshPhongMaterial({color:colorCode, shading:THREE.FlatShading});
    var bodyGeom = new THREE.BoxGeometry(50, 30, 80, 1, 1, 1);
    var body = new THREE.Mesh(bodyGeom, bodyMat);
    body.castShadow = true;
    body.receiveShadow = true;
    group.add(body);

    //Protector
    var wheelProtectGeom = new THREE.BoxGeometry(8, 12, 25, 1, 1, 1);
    var wheelProtectMat = new THREE.MeshPhongMaterial({color:Colors.red, shading:THREE.FlatShading});
    var wheelProtect = new THREE.Mesh(wheelProtectGeom, wheelProtectMat);
    wheelProtect.receiveShadow = true;
    wheelProtectGeom.vertices[1].z += 5;
    wheelProtectGeom.vertices[4].z += 5;
    wheelProtectGeom.vertices[5].z -= 5;
    wheelProtectGeom.vertices[0].z -= 5;

    var wheelProtectFL = wheelProtect.clone();
    wheelProtectFL.position.set(25, -12, 20);
    group.add(wheelProtectFL);

    var wheelProtectFR = wheelProtect.clone();
    wheelProtectFR.position.set(-25, -12, 20);
    group.add(wheelProtectFR);

    var wheelProtectBL = wheelProtect.clone();
    wheelProtectBL.position.set(25, -12, -20);
    group.add(wheelProtectBL);

    var wheelProtectBR = wheelProtect.clone();
    wheelProtectBR.position.set(-25, -12, -20);
    group.add(wheelProtectBR);

    //Tires!!!!
    // var wheelTireGeom = new THREE.CylinderGeometry(10, 10, 4);
    // var wheelTireMat = new THREE.MeshPhongMaterial({color:Colors.white, shading:THREE.FlatShading});
    
    var wheelTireGeom = new THREE.CylinderGeometry(10, 10, 8);
    //var wheelTireMat = new THREE.MeshPhongMaterial({color:Colors.white, shading:THREE.FlatShading});

    for ( var i = 0; i < wheelTireGeom.faces.length; i ++ ) {
        // geometry.faces[ i ].color.setHSL( Math.random(), 0.5, 0.5 ); // pick your colors

        if( i%2 == 0)
        {
            wheelTireGeom.faces[ i ].color.set (0xBDBDBD); 
        }

        else
        {
            wheelTireGeom.faces[ i ].color.set(0x212121); 
        }
    }

    var wheelTireMat = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors } ); 
    var wheelTire = new THREE.Mesh(wheelTireGeom, wheelTireMat);


    wheelTire.castShadow = true;

    var wheelTireFL = wheelTire.clone();
    wheelTireFL.position.set(25, -18, 20);
    wheelTireFL.rotation.z = Math.PI/2;
    group.add(wheelTireFL);

    var wheelTireFR = wheelTire.clone();
    wheelTireFR.position.set(-25, -18, 20);
    wheelTireFR.rotation.z = Math.PI/2;
    group.add(wheelTireFR);

    var wheelTireBL = wheelTire.clone();
    wheelTireBL.position.set(25, -18, -20);
    wheelTireBL.rotation.z = Math.PI/2;
    group.add(wheelTireBL);

    var wheelTireBR = wheelTire.clone();
    wheelTireBR.position.set(-25, -18, -20);
    wheelTireBR.rotation.z = Math.PI/2;
    group.add(wheelTireBR);

    //Windshield
    var geomWindshield = new THREE.BoxGeometry(3, 20, 45, 1, 1, 1);
    var matWindshield = new THREE.MeshPhongMaterial({color:Colors.white, transparent:true, opacity:.3, shading:THREE.FlatShading});
    var windshield = new THREE.Mesh(geomWindshield, matWindshield);
    windshield.position.set(0, 20, 30);
    windshield.rotation.y = Math.PI/2;
    windshield.castShadow = true;
    windshield.receiveShadow = true;
    group.add(windshield);

    //Bumper
    var bumperGeom = new THREE.BoxGeometry(55, 6, 6);
    var bumperMat = new THREE.MeshPhongMaterial({color:Colors.white, shading:THREE.FlatShading});
    var bumper = new THREE.Mesh(bumperGeom, bumperMat);
    bumper.receiveShadow = true;

    var frontBumper = bumper.clone();
    frontBumper.position.set(0, -14, 40);
    group.add(frontBumper);

    var backBumper = bumper.clone();
    backBumper.position.set(0, -14, -40);
    group.add(backBumper);

    //Number Plate
    var numberPlateGeom = new THREE.BoxGeometry(12, 10, 2);
    var numberPlateMat = new THREE.MeshPhongMaterial({color:Colors.white, shading:THREE.FlatShading});
    var numberPlate = new THREE.Mesh(numberPlateGeom, numberPlateMat);
    numberPlate.receiveShadow = true;
    group.add(numberPlate);
    numberPlate.position.set(0, -5, -40);

    //lights
    var lightsGeom = new THREE.BoxGeometry(6, 8, 2);
    var lightsMat = new THREE.MeshPhongMaterial({color:Colors.pink, shading:THREE.FlatShading});
    var lights = new THREE.Mesh(lightsGeom, lightsMat);
    lights.receiveShadow = true;

    var backLightsL = lights.clone();
    group.add(backLightsL);
    backLightsL.position.set(-20, 10, -40);

    var backLightsR = lights.clone();
    group.add(backLightsR);
    backLightsR.position.set(20, 10, -40);

    var frontLightsL = lights.clone();
    group.add(frontLightsL);
    frontLightsL.position.set(-20, 10, 40);

    var frontLightsR = lights.clone();
    group.add(frontLightsR);
    frontLightsR.position.set(20, 10, 40);

    //engine vent
    var engineVentGeom = new THREE.BoxGeometry(40, 2, 1);
    var engineVentMat = new THREE.MeshPhongMaterial({color:Colors.white, shading:THREE.FlatShading});
    var engineVent = new THREE.Mesh(engineVentGeom, engineVentMat);

    var engineVentT = engineVent.clone();
    group.add(engineVentT);
    engineVentT.position.set(0, 0, 40);

    var engineVentM = engineVent.clone();
    group.add(engineVentM);
    engineVentM.position.set(0, -3, 40);

    var engineVentB = engineVent.clone();
    group.add(engineVentB);
    engineVentB.position.set(0, -6, 40);
    return group;

}

var Ground = function()
{
    var groundGeom = new THREE.PlaneGeometry(4400, 4400, 1, 1);
    var groundMat = new THREE.MeshLambertMaterial({color:0x1b5e20, shading:THREE.FlatShading});

    this.mesh = new THREE.Mesh(groundGeom, groundMat);
    this.mesh.name = 'ground';
    //this.mesh.receiveShadow = true;
};

function createGround()
{
    ground = new Ground();
    //scene.add(ground.mesh);
    PIEaddElement(ground);
    
    //ground.mesh.position.y = 15;
    ground.mesh.rotation.x = -Math.PI/2;
}


// function repeatAnimation()
// {
//     console.log("It is working");
// }

// for (var i = 0; i<5;i++) {
//     prevCarVelocity[i] = 20*Math.random() + 60;
// };

// var button = document.createElement("BUTTON");
// button.innerHTML = "repeat";
// button.style.display = "inline";
// var body = document.getElementsByTagName("body")[0];
// body.appendChild(button);


// button.addEventListener ("click", function() {

//     resetExperiment();


//     maxVel =0;
//     maxVelIndex =0;
//     for (var i = carVelocity.length - 1; i >= 0; i--) {
//         carVelocity[i] = prevCarVelocity[i];

//         if (carVelocity[i] > maxVel)
//         {
//             maxVel = carVelocity[i];
//             maxVelIndex = i;
//         }
//     }; 
//     startFlag =1;
//     PIEstartAnimation();

//     PIErender();

// });

function handleStopWatch (argument) {
    // body...
}

function handleDistance (argument) {
    // body...
}

// window.addEventListener('resize', function(){
//  PIEsetAreaOfInterest(-400,300,250,-150);
//  PIEadjustCamera(280,75,550);
//  PIEturnCamera(50,0,-100);
//  console.log("resize");
// }, true);


var makeTextSprite = function(message, fontsize, colorCode) 
{
    var ctx, texture, sprite, spriteMaterial, 
    canvas = document.createElement('canvas');
    ctx = canvas.getContext('2d');
    ctx.font = fontsize + "px Arial";

    // setting canvas width/height before ctx draw, else canvas is empty
    canvas.width = ctx.measureText(message).width;
    canvas.height = fontsize * 2; // fontsize * 1.5
    // after setting the canvas width/height we have to re-set font to apply!?! looks like ctx reset
    ctx.font = fontsize + "px Arial";        
    ctx.fillStyle = colorCode;
    ctx.fillText(message, 0, fontsize);

    texture = new THREE.Texture(canvas);
    texture.minFilter = THREE.LinearFilter; // NearestFilter;
    texture.needsUpdate = true;

    spriteMaterial = new THREE.SpriteMaterial({map : texture});
    sprite = new THREE.Sprite(spriteMaterial);
    return sprite;   
}

var getcanvasTexture = function  (message,fontsize, colorCode) {

    var ctx, texture, sprite, spriteMaterial, 
    canvas = document.createElement('canvas');
    ctx = canvas.getContext('2d');
    ctx.font = fontsize + "px Arial";

    // setting canvas width/height before ctx draw, else canvas is empty
    canvas.width = ctx.measureText(message).width;
    canvas.height = fontsize * 2; // fontsize * 1.5
    // after setting the canvas width/height we have to re-set font to apply!?! looks like ctx reset
    ctx.font = fontsize + "px Arial";        
    ctx.fillStyle = colorCode;
    ctx.fillText(message, 0, fontsize);

    texture = new THREE.Texture(canvas);
    texture.minFilter = THREE.LinearFilter; // NearestFilter;
    texture.needsUpdate = true;
    return texture;
    
}
