/* Global Variables */
/* Scene Dimensions (in meters: at z = 0) */
var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var geometry;
var material;
var loader;
var texture;


//sun variables...
var sun;


//planet variables...
var planet;
var planetVelocity;
var planetAvgVelocity;
var planetPosition;
var planetName;
var planetRadius;

//orbit variables....
var orbit;
var orbitA,orbitB;
var k,l;
var vAxis;
var hAxis;
var vAxis_geo;
var hAxis_geo;

var line=[];
var lineIndex=0;
var line_mat;
var line_geo;
var line_lock=0;

//display variables.....
var planetVelocityLable;
var planetAvgVelocityLable;
var planetVelocityDefault;
var timeQuantum;


function planetAvgVelocityhandler(velocity)
{
    planetAvgVelocity=velocity;
    PIEchangeInputSlider("Planet Avg speed",planetAvgVelocity,planetAvgVelocityhandler , 0, 100, 10);
    PIEchangeDisplayText("Planet Average speed",planetAvgVelocity);
    PIErender();
}

function planetVelocityhandler(velocity)
{
    planetVelocity=velocity;
}

function orbitAHandler(d)
{
    orbitA=d;
    PIEscene.remove(orbit);
    placeOrbit();
    placePlanet("earth",0.2);
    lableAxis();
    PIErender();
}
function orbitBHandler(d)
{
    orbitB=d;
    PIEscene.remove(orbit);
    placeOrbit();
    placePlanet("earth",0.2);
    lableAxis();
    PIErender();
    
}

function timeQuantumHandler(t){
    timeQuantum=t;
    PIEchangeInputSlider("Time interval(t)ms",timeQuantum,timeQuantumHandler , 100, 3500, 100);
    PIEchangeDisplayText("Time interval(t)ms",timeQuantum);
    }


function initialiseControlVariables()
{
    planetVelocityLable="Planet Velocity";
    planetAvgVelocity="Planet Avg Velocity";
    planetVelocity=0;
    planetAvgVelocity=20;
    orbitA=6.5;
    orbitB=3;
    timeQuantum=500;
    planetName="earth";
    planetRadius=0.2;
    }

function initialiseControls()
{
    initialiseControlVariables();
    /* Create Input Panel */
    
    PIEaddInputSlider("Planet Avg speed",planetAvgVelocity,planetAvgVelocityhandler , 0, 100, 10);
    PIEaddDisplayText("Planet Average speed",planetAvgVelocity);
    PIEaddInputSlider("Major axisa",orbitA,orbitAHandler , 3.4, 10, 0.2);
    PIEaddDisplayText("Major axis",orbitA);
    PIEaddInputSlider("Minor axisa",orbitB,orbitBHandler , 0.8, 4.5, 0.2);
    PIEaddDisplayText("Minor axis",orbitB);
    PIEaddInputSlider("Time interval(t)ms",timeQuantum,timeQuantumHandler , 100, 3500, 100);
    PIEaddDisplayText("Time interval(t)ms",timeQuantum);
    //PIEaddInputSlider("Planet Velocity",planetVelocity,planetVelocityhandler , 0, 10, 1);
    PIEaddDisplayText("Planet Velocity",0);
    /* Create Display Panel */
}


function initialiseScene()
{
    /* Initialise Scene Variables */
    mySceneTLX = -5.5;
    mySceneTLY = 5.0;
    mySceneBRX = 4.0;
    mySceneBRY = -5.5;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;

}


function initialiseOtherVariables()
{
    
    }


function loadExperimentElements()
{
    console.log("creating list");
    addCode();
    PIEsetExperimentTitle("Kepler's First Law");
    PIEsetDeveloperName("Raghu Cheekatla");
//    PIEhideControlElement();

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();
    /* initialise Scene */
    initialiseScene();

    /* initialise Other Variables */
    initialiseOtherVariables();
    
    /* Instantiate experiment controls */
    initialiseControls();
    
    /* Create sun and add it to scene */
    placeElements();
    
    planetPosition=orbitGeometry.vertices[0];
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);

    /* Reset all positions */
    resetExperiment();

    }

/******************* End of Load Experiment objects code ***********************/

/******************* Reset Experiment code ***********************/

function resetExperiment()
{
    /* initialise Other Variables */
    PIEstopAnimation();
    initialiseControlVariables();
    PIEchangeInputSlider("Planet Avg speed",planetAvgVelocity,planetAvgVelocityhandler , 0, 100, 10);
    PIEchangeDisplayText("Planet Average speed",planetAvgVelocity);
    PIEchangeInputSlider("Major axisa",orbitA,orbitAHandler , 3.4, 10, 0.2);
    PIEchangeDisplayText("Major axis",orbitA);
    PIEchangeInputSlider("Minor axisa",orbitB,orbitBHandler , 0.5, 4.5, 0.2);
    PIEchangeDisplayText("Minor axis",orbitB);
    PIEchangeInputSlider("Time interval(t)ms",timeQuantum,timeQuantumHandler , 100, 3500, 100);
    PIEchangeDisplayText("Time interval(t)ms",timeQuantum);
    PIEscene.remove(orbit);
    placeOrbit();
    placePlanet(planetName,planetRadius);
    PIEscene.remove(hAxis);
    PIEscene.remove(vAxis);
    placeAxis();
    PIErender();
    PIErender();
}

function updateExperimentElements(t, dt)
{
//console.log("planet velocity is "+planetVelocity+"and distance is "+orbitA+" and "+orbitB);
//console.log(orbitA+" orbit a is working fine");
rotatePlanet((planetAvgVelocity/10),orbitA);
PIEchangeDisplayText("Major axis",orbitA);
PIEchangeDisplayText("Minor axis",orbitB);
PIEchangeDisplayText("Time interval(t)",timeQuantum);
PIEchangeDisplayText("Planet Velocity",(Math.abs(planetVelocity-(Math.cos(Math.PI*(k%1440)/720)+1.0001))+0.1)*100);
}

/******************* Update (animation changes) code ***********************/



/*****************************************************************************
 *                                Placing elements
 * ***************************************************************************/

function placeElements(){
    placeSun();
    placeOrbit();
    placeAxis();
    lableAxis();
    placePlanet("earth",0.2);
    placeStars();
}

function placeSun(){
    texture=new THREE.ImageUtils.loadTexture("sun.jpg" ,{},function(){PIErenderer.render(PIEscene,PIEcamera);});
    material=new THREE.MeshPhongMaterial();
    material.map=texture;
    geometry=new THREE.SphereGeometry(0.7, 32,32);
    sun = new THREE.Mesh(geometry , material);
    sun.position.set(2,0,0);
    console.log("sun added");
    PIEaddElement(sun);
    
    var outlineMaterial1 = new THREE.MeshBasicMaterial( { color: 0xFF7373, side: THREE.BackSide,opacity:0.5} );
	var outlineMesh1 = new THREE.Mesh( geometry, outlineMaterial1 );
	outlineMesh1.position = sun.position;
	outlineMesh1.scale.multiplyScalar(0.05);
	PIEscene.add( outlineMesh1 );
    
    var spriteMaterial = new THREE.SpriteMaterial( 
	{ 
		map: new THREE.ImageUtils.loadTexture( 'glow.png' ), 
		useScreenCoordinates: false, //alignment: THREE.SpriteAlignment.center,
		color: 0xFF4A00, transparent: false, blending: THREE.AdditiveBlending
	});
	var sprite = new THREE.Sprite( spriteMaterial );
	sprite.scale.set(2.01, 2.01, 1.0);
	sun.add(sprite);
    }
    
    
function placeOrbit(){
   
    texture=new THREE.MeshBasicMaterial({color:0xffffff,wireframe:true});
var curve = new THREE.EllipseCurve(-0.5, 0, orbitA, orbitB, 0, 2.0 * Math.PI, false);
//console.log("this is planet distance "+orbitA);
var curvePath=new THREE.CurvePath();
curvePath.add(curve);
    orbitGeometry = curvePath.createPointsGeometry(720); 
    l=orbitGeometry.vertices.length;
    //alert(l);
    k=0;
    orbit=new THREE.Line(orbitGeometry,texture);
    PIEaddElement(orbit);
    orbit.position.set(0,0,0);
   
   }

function lableAxis(){
    hLable=document.getElementById("h_axis");
    vLable=document.getElementById("v_axis");
    console.log(orbitA+" :A and B:"+orbitB);
    if(orbitA<orbitB){
        hLable.innerHTML="Major axis";
        vLable.innerHTML="Minor axis";
        }
    else if(orbitA>orbitB){
        hLable.innerHTML="Minor axis";
        vLable.innerHTML="Major axis";
        }
    else{
        hLable.innerHTML="radius";
        vLable.innerHTML="";
        }
    }

function placeAxis(){
    line_mat=new THREE.LineBasicMaterial({color:0xffffff*Math.random()});
    hAxis_geo=new THREE.Geometry();
    vAxis_geo=new THREE.Geometry();
    hAxis_geo.vertices.push(
        orbitGeometry.vertices[0],
        orbitGeometry.vertices[Math.round(orbitGeometry.vertices.length/2)]
                        );
    vAxis_geo.vertices.push(
        orbitGeometry.vertices[Math.round(orbitGeometry.vertices.length/4)],
        orbitGeometry.vertices[Math.round(3*orbitGeometry.vertices.length/4)]
                        );
            hAxis=new THREE.Line(hAxis_geo,line_mat);
            vAxis=new THREE.Line(vAxis_geo,line_mat);
            PIEaddElement(vAxis);
            PIEaddElement(hAxis);
    
    }
function placePlanet2(p,r){
    resetExperiment();
    placePlanet(p,r);
    }
function placePlanet(p,radius){
    planetName=p;
    planetRadius=radius;
    if(line){console.log("hiding lines");
        hideLine();
        }
    if(planet)
        PIEscene.remove(planet);
    k=0;
    line_lock=0;
    planet=new THREE.Object3D();
    texture=new THREE.ImageUtils.loadTexture("splanets/"+p+".jpg" ,{},function(){PIErenderer.render(PIEscene,PIEcamera);});
    material=new THREE.MeshPhongMaterial();
    material.map=texture;
    geometry=new THREE.SphereGeometry(radius, 32,32);
    planetSphere= new THREE.Mesh(geometry,material);
    console.log(planet.position.x);
    console.log("planet "+p+" added");
    planet.add(planetSphere);
    if(p==="saturn"){
        texture=new THREE.ImageUtils.loadTexture("splanets/"+p+"ring.png" ,{},function(){PIErenderer.render(PIEscene,PIEcamera);});
    material=new THREE.MeshPhongMaterial();
    material.map=texture;
    geometry=new THREE.CircleGeometry(radius+0.4, 32);
    planetRing= new THREE.Mesh(geometry,material);
    planetRing.rotation.x=-0.40*Math.PI;
    //union planet and ring
    planet.add(planetRing);
        }
    planet.position.set(orbitGeometry.vertices[0].x,orbitGeometry.vertices[0].y,orbitGeometry.vertices[0].z);
    PIEaddElement(planet);
    planetAvgVelocity=20;
    }


function placeStars(){

    geometry=new THREE.SphereGeometry(0,0,50);
    material=new THREE.MeshBasicMaterial();
    texture=THREE.ImageUtils.loadTexture("s2.jpg",{},function(){PIErenderer.render(PIEscene,PIEcamera);});
    texture.WrapS=THREE.RepeatWrapping;
    texture.WrapT=THREE.RepeatWrapping;
    texture.repeat.set(1,1.1);
    material.map=texture;
    material.side=THREE.BackSide;
    stars=new THREE.Mesh(geometry,material);
    PIEaddElement(stars);
    
       }

/************************************************************************
 *                            Rotate the planet
 *
 ***********************************************************************/

function rotatePlanet(v,a){
if(line_lock==0 && k<1440){
    line_lock=1;
    line_mat=new THREE.LineBasicMaterial({color:0xffffff*Math.random()});
    line_geo=new THREE.Geometry();
    var lineTimeout=setTimeout(function drawRadial(){
                if(k<1440){
                line_geo.vertices.push(
                    orbitGeometry.vertices[k],
                    sun.position
                
                );}
            if(k<1440){
            line[lineIndex]=new THREE.Line(line_geo,line_mat);
            line[lineIndex].name="Line"+lineIndex;
            console.log("new line from "+orbitGeometry.vertices[k].x+"with k ="+k+" to sun at"+sun.position.x);
            PIEaddElement(line[lineIndex]);
            lineIndex++;
            setTimeout(function(){if(k<1400)  line_lock=0; },timeQuantum);
            }
            },500);
        }
       // console.log("planet x="+planetPosition.x+", a value="+a);
        if (orbitGeometry.vertices[(k)%1440].x>=planetPosition.x-(a/5.0)){
                planet.position.set(orbitGeometry.vertices[(k+5)%1440].x,orbitGeometry.vertices[(k+4)%1440].y,orbitGeometry.vertices[(k+4)%1440].z);
                k+=v+4;
        }
        else if (orbitGeometry.vertices[(k)%1440].x>=planetPosition.x-(2*a/5.0)){
                planet.position.set(orbitGeometry.vertices[(k+3)%1440].x,orbitGeometry.vertices[(k+3)%1440].y,orbitGeometry.vertices[(k+3)%1440].z);
                k+=v+3;
            }
        else if (orbitGeometry.vertices[(k)%1440].x>=planetPosition.x-(3*a/5.0)){
                planet.position.set(orbitGeometry.vertices[(k)%1440].x,orbitGeometry.vertices[(k)%1440].y,orbitGeometry.vertices[(k)%1440].z);
                k+=v+2;
            }
        else if(orbitGeometry.vertices[(k)%1440].x>=planetPosition.x-(4*a/5.0)){
                planet.position.set(orbitGeometry.vertices[(k)%1440].x,orbitGeometry.vertices[(k)%1440].y,orbitGeometry.vertices[(k)%1440].z);
                k+=v+1;
            }
        else if(orbitGeometry.vertices[(k)%720].x<planetPosition.x-(4*a/5)){
                planet.position.set(orbitGeometry.vertices[(k)%1440].x,orbitGeometry.vertices[(k)%1440].y,orbitGeometry.vertices[(k)%1440].z);
                k+=v;
            }
        else {
                planet.position.set(orbitGeometry.vertices[(k++)%1440].x,orbitGeometry.vertices[(k++)%1440].y,orbitGeometry.vertices[(k++)%1440].z);
            }
            planet.rotation.y+=0.1;
            sun.rotation.y+=0.1;
            sun.rotation.z+=0.005;
            sun.rotation.x+=0.005;
            orbitGeometry.verticesNeedUpdate = true;
            console.log("and frac is  "+orbitGeometry.vertices[(k)%1440].x);
        }
    
function hideLine(){
    for(var i=0;i<line.length;i++){
        PIEscene.remove(line[i]);
        console.log("vertices of line "+i+" are located at "+sun.position);
        }
    PIEscene.remove(hAxis);
    PIEscene.remove(vAxis);
    placeAxis();
    PIErender();
}



function initialiseInfo()
{
    
    infoContent =  "";
    infoContent = infoContent + "<h2>Kepler's law of planetary motion</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment is an illustration of Kepler's first law of planetary motion</p>";
    infoContent = infoContent + "<h3>Kepler's Laws</h3><ul>";
    infoContent = infoContent + "<li><p><em>All planets move about the Sun in elliptical orbits, having the Sun as one of the foci.</em></p></li>";
    infoContent = infoContent + "<li><p><em>A radius vector joining any planet to the Sun sweeps out equal areas in equal lengths of time</em></p>";
    infoContent = infoContent + "<li><p>The squares of the sidereal periods of revolution of the planets are directly proportional to the cubes of their mean distances from the Sun</p></li>";
    infoContent = infoContent + "<p><img src='k.jpg'></p>";
    infoContent = infoContent + "<p>In the above image, it is very clear that planets travel in elliptical paths around the sun.</p>";
    infoContent = infoContent + "<p>It can also be observed that the imaginary radial line from sun to planet swaps same amount of area in a time interval i</p>";
    infoContent = infoContent + "<h2>Learn....Live</h2>";
    PIEupdateInfo(infoContent);

}




function initialiseHelp()
{
    
    helpContent="";
    helpContent = helpContent + "<h2>Kepler's law illustration experiment help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment illustrates the Kepler's laws, especially the second law(law of areas).</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The animation can be controlled by controls present in the header bar present at the top of the page.</p>";
    helpContent = helpContent + "<h3>Header controls</h3>";
    helpContent = helpContent + "<p>The header in the page contains Reset, Start, Pause and Stop buttons. By</p>";
    helpContent = helpContent + "<p>You can have control over the following</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Start&nbsp;&nbsp;:&nbsp;begin animation. This can be done by pressing Start button on the top.</li>";
    helpContent = helpContent + "<li>Stop&nbsp;&nbsp;:&nbsp;Stop animation</li>";
    helpContent = helpContent + "<li>Pause&nbsp;:&nbsp;temporarily pause the animation and can resume afterwards. This be controlled by Pause button on header</li>";
    helpContent = helpContent + "<li>Reset&nbsp;:&nbsp;reset the whole setup as it was in the begining.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<h3>Slider controls and display</h3>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Planet average velocity:&nbsp;&nbsp;&nbsp;&nbsp;Control the overall speed of planet for the whole revolution.</li>";
    helpContent = helpContent + "<li>Major axis:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Change the value of planet's elliptical orbit's major axis length.</li>";
    helpContent = helpContent + "<li>Minor axis:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Change the value of planet's elliptical orbit's minor axis length.</li>";
    helpContent = helpContent + "<li>Time interval:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alter the time interval for which we like to observe the area swept by the planet.</li>";
    helpContent = helpContent + "<li>Planet Velocity:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Displays the speed of planet at a given instance.</li>";
    helpContent = helpContent + "<h2>Happy Learning</h2>";
    PIEupdateHelp(helpContent);

}

function addCode(){
    console.log('adding code to file');
    var p=["mercury","venus","earth","mars","jupiter","saturn","uranus","neptune"];
    var d=document.getElementsByTagName("div");
    d[0].insertAdjacentHTML("beforebegin",'<style>#selectPlanets{width:5%;display:inlin;float:left;border:none;position:absolute;margin:2% 1%;}#selectPlanets li{display:block;width:45px;height:45px;border:none;margin:40% 0%;opacity:0.5;transition:all 0.5s;color:white;}#planetIcons {width:100%;border:none;height:100%;border-radius:25px;} #selectPlanets li:hover {opacity:1;transition:all 0.8s;}</style>');
    d[0].insertAdjacentHTML("beforebegin",'<b  id="h_axis" style="display:block;margin:20% 51.5%;color:white;position:absolute;"></b><b id="v_axis" style="display:block; margin:24.5% 46%;color:white;position:absolute;"></b>');
    d[0].insertAdjacentHTML("beforebegin",'<ul id="selectPlanets"></ul>');
    var u_e=document.getElementById("selectPlanets");
    u_e.insertAdjacentHTML("beforeend",'<li id="p1" title="Mercury" onclick="placePlanet2(\''+p[0]+'\',0.1)">Mercury<img id="planetIcons" src="splanets/mercury.jpg"></li>');
    u_e.insertAdjacentHTML("beforeend",'<li id="p2" title="Venus" onclick="placePlanet2(\''+p[1]+'\',0.2)">Venus<img id="planetIcons" src="splanets/venus.jpg"></li>');
    u_e.insertAdjacentHTML("beforeend",'<li id="p3" title="Earth" onclick="placePlanet2(\''+p[2]+'\',0.2)">Earth<img id="planetIcons" src="splanets/earth.jpg"></li>');
    u_e.insertAdjacentHTML("beforeend",'<li id="p4" title="Mars" onclick="placePlanet2(\''+p[3]+'\',0.2)">Mars<img id="planetIcons" src="splanets/mars.jpg"></li>');
    u_e.insertAdjacentHTML("beforeend",'<li id="p5" title="Jupiter" onclick="placePlanet2(\''+p[4]+'\',0.4)">Jupiter<img id="planetIcons" src="splanets/jupiter.jpg"></li>');
    u_e.insertAdjacentHTML("beforeend",'<li id="p6" title="Saturn" onclick="placePlanet2(\''+p[5]+'\',0.4)">Saturn<img id="planetIcons" src="splanets/saturn.jpg"></li>');
    u_e.insertAdjacentHTML("beforeend",'<li id="p7" title="Uranus" onclick="placePlanet2(\''+p[6]+'\',0.3)">Uranus<img id="planetIcons" src="splanets/uranus.jpg"></li>');
    u_e.insertAdjacentHTML("beforeend",'<li id="p8" title="Neptune" onclick="placePlanet2(\''+p[7]+'\',0.3)">Neptune<img id="planetIcons" src="splanets/neptune.jpg"></li>');
    console.log('added code to file');
    }
