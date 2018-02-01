var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */
var Back;

var sheetParent;

var box11;
var box12;
var box13;
var box21;
var box22;
var box23;

var left1;
var left2;

var j=0;

var mass=5;
var g=980;//
var g1=980;//earth
var g2=361;//mercury
var g3=883;//venus
var g4=375;//mars
var g5=260;//jupiter
var g6=112;//saturn
var g7=133;//neptune
var g8=162.5;//moon
var g9=1050;//uranus
var weight;
var w1;

var l2;

var labelM="Block Mass";
var defaultM=5;
var handleM;
var Mmin=5;
var Mmax=10;
var Mstep=1;

var wt1;
var wt2;

var line1;
var line2;
var line12;
var line13;
var line22;
var line23;
var bal11;
var bal12;
var table;
var helpContent;

var ellipse;
var ellipse1;
var j=0;

var label1;
var label2;

var springbal;

function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Mass and Weight Help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows two weights attached to the spring balance and two weighing machines, one shows mass(in mg) and other shows weight(in mg) to illustrate Mass and Weight on different planets.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls.</p>";
    helpContent = helpContent + "<h3>There are two display panels that show mass and weight respectively</h3>";
    helpContent = helpContent + "<h3>you can change the mass of the object by using the slider to see the change on different planets</h3>";
    helpContent = helpContent + "<p>You can see the following:</p>";
    helpContent = helpContent + "<p>you can observe the difference between mass and weight on different planets.</p>";
    helpContent = helpContent + "<p>Initially you have to click on the START button.</p>";
    helpContent = helpContent + "<p>Once you do this you can select any of the 9 planets and see mass and weight on their planet.</p>";
    helpContent = helpContent + "<p>You can also reset the experiments all at once by clicking on the reset button .</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Mass and Weight experiment concepts</h2>"; 
    infoContent = infoContent + "<p>The mass on any planet will be same as it is independent of acceleration due to gravity. </br>Whereas the weight of an object depends on the acceleration due to gravity.</p>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows two weights attached to the spring balance and two weighing machines, one shows mass(in mg) and other shows weight(in mg) to illustrate Mass and Weight on different planets.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}


function initialiseScene()
{
    /* Initialise Scene Variables */
    mySceneTLX = -25.0;
    mySceneTLY = 25.0;
    mySceneBRX = 25.0;
    mySceneBRY = -25.0;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
    label1="Mass";
    label2="Weight";
    Mmin=5;
    Mmax=9;
    Mstep=1;
    defaultM=5;
    mass=5;
}

function GuiControlFunction(){
                f1 = new function(){
                    this.t1=true;
                }
                f2 = new function(){
                    this.t2=false;
                }
                f3 = new function(){
                    this.t3=false;
                }
                 f4 = new function(){
                    this.t4=false;
                }
                f5 = new function(){
                    this.t5=false;
                }
                 f6 = new function(){
                    this.t6=false;
                }
                f7 = new function(){
                    this.t7=false;
                }
                 f8 = new function(){
                    this.t8=false;
                }
                f9 = new function(){
                    this.t9=false;
                }
                //
                        
                var datGUI = new dat.GUI();

                var objectFolder = datGUI.addFolder('Select Planet');
                
                objectFolder.add(f1,'t1').name('Earth').listen().onChange(function(value){
                    if(value == true){
                        //f1.t1=true;
                        f2.t2=false;
                        f3.t3=false;
                        f4.t4=false;
                        f5.t5=false;
                        f6.t6=false;
                        f7.t7=false;
                        f8.t8=false;
                        f9.t9=false;
                        reset();
                    }
                    else{
                        f1.t1=true;
                        f2.t2=false;
                        f3.t3=false;
                        f4.t4=false;
                        f5.t5=false;
                        f6.t6=false;
                        f7.t7=false;
                        f8.t8=false;
                        f9.t9=false;
                        reset();
                    }
                });
                objectFolder.add(f2,'t2').name('Mercury').listen().onChange(function(value){
                    if(value == true){
                        //f2.t2=true;
                        f1.t1=false;
                        f3.t3=false;
                        f4.t4=false;
                        f5.t5=false;
                        f6.t6=false;
                        f7.t7=false;
                        f8.t8=false;
                        f9.t9=false;
                        reset();
                    }
                    else{   
                        f1.t1=true;
                        f2.t2=false;
                        f3.t3=false;
                        f4.t4=false;
                        f5.t5=false;
                        f6.t6=false;
                        f7.t7=false;
                        f8.t8=false;
                        f9.t9=false;
                        reset();
                    }
                });
                objectFolder.add(f3,'t3').name('Venus').listen().onChange(function(value){
                    if(value == true){
                        //f3.t3=true;
                        f2.t2=false;
                        f1.t1=false;
                        f4.t4=false;
                        f5.t5=false;
                        f6.t6=false;
                        f7.t7=false;
                        f8.t8=false;
                        f9.t9=false; 
                        reset();   
                    }
                    else{  
                        f1.t1=true;
                        f2.t2=false;
                        f3.t3=false;
                        f4.t4=false;
                        f5.t5=false;
                        f6.t6=false;
                        f7.t7=false;
                        f8.t8=false;
                        f9.t9=false;
                        reset();
                    }

                });
                objectFolder.add(f4,'t4').name('Mars').listen().onChange(function(value){
                    if(value == true){
                        //f4.t4=true;
                        f2.t2=false;
                        f3.t3=false;
                        f1.t1=false;
                        f5.t5=false;
                        f6.t6=false;
                        f7.t7=false;
                        f8.t8=false;
                        f9.t9=false;
                        reset();

                    }
                    else{
                        f1.t1=true;
                        f2.t2=false;
                        f3.t3=false;
                        f4.t4=false;
                        f5.t5=false;
                        f6.t6=false;
                        f7.t7=false;
                        f8.t8=false;
                        f9.t9=false;
                        reset();
                    }
                });
                objectFolder.add(f5,'t5').name('Jupiter').listen().onChange(function(value){
                    if(value == true){
                        //f5.t5=true;
                        f2.t2=false;
                        f3.t3=false;
                        f4.t4=false;
                        f1.t1=false;
                        f6.t6=false;
                        f7.t7=false;
                        f8.t8=false;
                        f9.t9=false;
                        reset();

                    }
                    else{
                        f1.t1=true;
                        f2.t2=false;
                        f3.t3=false;
                        f4.t4=false;
                        f5.t5=false;
                        f6.t6=false;
                        f7.t7=false;
                        f8.t8=false;
                        f9.t9=false;
                        reset();
                    }
                });
                objectFolder.add(f6,'t6').name('Saturn').listen().onChange(function(value){
                    if(value == true){
                        //f6.t6=true;
                        f2.t2=false;
                        f3.t3=false;
                        f4.t4=false;
                        f5.t5=false;
                        f1.t1=false;
                        f7.t7=false;
                        f8.t8=false;
                        f9.t9=false;
                        reset();

                    }
                    else{
                        f1.t1=true;
                        f2.t2=false;
                        f3.t3=false;
                        f4.t4=false;
                        f5.t5=false;
                        f6.t6=false;
                        f7.t7=false;
                        f8.t8=false;
                        f9.t9=false;
                        reset();
                    }
                });
                objectFolder.add(f7,'t7').name('Neptune').listen().onChange(function(value){
                    if(value == true){
                        //f7.t7=true;
                        f2.t2=false;
                        f3.t3=false;
                        f4.t4=false;
                        f5.t5=false;
                        f6.t6=false;
                        f1.t1=false;
                        f8.t8=false;
                        f9.t9=false;
                        reset();

                    }
                    else{
                        f1.t1=true;
                        f2.t2=false;
                        f3.t3=false;
                        f4.t4=false;
                        f5.t5=false;
                        f6.t6=false;
                        f7.t7=false;
                        f8.t8=false;
                        f9.t9=false;
                        reset();
                    }
                });
                objectFolder.add(f8,'t8').name('Moon').listen().onChange(function(value){
                    if(value == true){
                        //f8.t8=true;
                        f2.t2=false;
                        f3.t3=false;
                        f4.t4=false;
                        f5.t5=false;
                        f6.t6=false;
                        f7.t7=false;
                        f1.t1=false;
                        f9.t9=false;
                        reset();

                    }
                    else{
                        f1.t1=true;
                        f2.t2=false;
                        f3.t3=false;
                        f4.t4=false;
                        f5.t5=false;
                        f6.t6=false;
                        f7.t7=false;
                        f8.t8=false;
                        f9.t9=false;
                        reset();
                    }
                });
                objectFolder.add(f9,'t9').name('Uranus').listen().onChange(function(value){
                    if(value == true){
                        //f9.t9=true;
                        f2.t2=false;
                        f3.t3=false;
                        f4.t4=false;
                        f5.t5=false;
                        f6.t6=false;
                        f7.t7=false;
                        f8.t8=false;
                        f1.t1=false;
                        reset();

                    }
                    else{
                        f1.t1=true;
                        f2.t2=false;
                        f3.t3=false;
                        f4.t4=false;
                        f5.t5=false;
                        f6.t6=false;
                        f7.t7=false;
                        f8.t8=false;
                        f9.t9=false;
                        reset();
                    }
                });
                objectFolder.open();
            }
            

function handleM(newValue)
{
    mass=newValue;
    w1=mass*(2/5); //2 is initial y size and 5 is initial value of mass
    var scale = w1/2; 
    
    box13.scale.y = scale;
    
    box23.scale.y = scale;
    
    box13.position.y=21-1-(scale/2);
   
    box23.position.y=21-1-(scale/2);
  
    reset();
}

function loadExperimentElements()
{
var geometry;
var material;
var loader;
var texture;
var check;

    PIEsetExperimentTitle("Mass and Weight");
    PIEsetDeveloperName("Apeksha Bodade");

    initialiseHelp();
    initialiseInfo();

    initialiseScene();

    PIEaddInputSlider(labelM, defaultM, handleM, Mmin, Mmax, Mstep);



    GuiControlFunction();


 //   initialiseOtherVariables();

    loader = new THREE.TextureLoader();
   texture = loader.load('back.jpg');


    material = new THREE.MeshBasicMaterial({map: texture});
  //  material = new THREE.MeshBasicMaterial({color:0xfdf6d5});
    geometry = new THREE.PlaneGeometry( window.innerWidth/12,window.innerHeight/12 );
    Back  = new THREE.Mesh( geometry, material );
    Back.position.set(myCenterX, myCenterY, -6.0);
    Back.castShadow = false;
    Back.receiveShadow = false;
    PIEaddElement(Back);

    material = new THREE.MeshLambertMaterial({color:"red"});
    geometry = new THREE.PlaneGeometry( 40,1);
    var ceil  = new THREE.Mesh( geometry, material );
    ceil.position.set(myCenterX,23, -1.0);
    ceil.castShadow = false;
    ceil.receiveShadow = false;
    PIEaddElement(ceil);

    material = new THREE.MeshLambertMaterial({color: "blue"});
    geometry = new THREE.BoxGeometry( 4,9.5, 4 );
    box11 = new THREE.Mesh( geometry, material );
    box11.position.set(15, 10+8-1, -2);
    box11.receiveShadow = true;
    PIEaddElement(box11);

    material = new THREE.MeshLambertMaterial({color: "red"});
    geometry = new THREE.BoxGeometry( 1,6, 1 );
    box12 = new THREE.Mesh( geometry, material );
    box12.position.set(15, 9+8-1, -0.3);
    box12.receiveShadow = true;
    PIEaddElement(box12);

    material = new THREE.MeshLambertMaterial({color: "grey"});
    geometry = new THREE.BoxGeometry( 1,2, 1.1 );
    box13 = new THREE.Mesh( geometry, material );
    box13.position.set(15, 13+8-1, -0.3);
    box13.receiveShadow = true;
    PIEaddElement(box13);

    material = new THREE.MeshLambertMaterial({color: "blue"});
    geometry = new THREE.BoxGeometry( 4,9.5, 4 );
    box21 = new THREE.Mesh( geometry, material );
    box21.position.set(-15, 10+8-1, -2);
    box21.receiveShadow = true;
    PIEaddElement(box21);

    material = new THREE.MeshLambertMaterial({color: "red"});
    geometry = new THREE.BoxGeometry( 1,6, 1 );
    box22 = new THREE.Mesh( geometry, material );
    box22.position.set(-15, 9+8-1, -0.3);
    box22.receiveShadow = true;
    PIEaddElement(box22);

    material = new THREE.MeshLambertMaterial({color: "grey"});
    geometry = new THREE.BoxGeometry( 1,2, 1 );
    box23 = new THREE.Mesh( geometry, material );
    box23.position.set(-15, 13+8-1, -0.3);
    box23.receiveShadow = true;
    PIEaddElement(box23);

    material = new THREE.LineBasicMaterial({color: "red"});
    
    var geometry1 = new THREE.Geometry();
    geometry1.vertices.push(
    new THREE.Vector3( -15, 25-1, -0.5),
    new THREE.Vector3( -15, 14+8-1, -0.5 )
    );
    geometry1.verticesNeedUpdate = true;
    geometry1.dynamic = true;
    line1 = new THREE.Line( geometry1, material );
    geometry1.verticesNeedUpdate = true;
    geometry1.dynamic = true;
    PIEaddElement(line1);

    var geometry2 = new THREE.Geometry();
    geometry2.vertices.push(
    new THREE.Vector3( 15, 25-1, -0.5),
    new THREE.Vector3( 15, 14+8-1, -0.5 )
    );
    geometry2.verticesNeedUpdate = true;
    geometry2.dynamic = true;
    line2 = new THREE.Line( geometry2, material );
    geometry2.verticesNeedUpdate = true;
    geometry2.dynamic = true;
    PIEaddElement(line2); 

    var geometry12 = new THREE.Geometry();
    geometry12.vertices.push(
    new THREE.Vector3( 15, 5+8+0.5-1, -0.5),
    new THREE.Vector3( 13.4, 2+8.3-1, -0.5 )
    );
    geometry12.verticesNeedUpdate = true;
    geometry12.dynamic = true;
    line12 = new THREE.Line( geometry12, material );
    geometry12.verticesNeedUpdate = true;
    geometry12.dynamic = true;
    PIEaddElement(line12);

    var geometry22 = new THREE.Geometry();
    geometry22.vertices.push(
    new THREE.Vector3( -15, 5+8+0.5-1, -0.5),
    new THREE.Vector3( -16.8, 2+8.3-1, -0.5 )
    );
    geometry22.verticesNeedUpdate = true;
    geometry22.dynamic = true;
    line22 = new THREE.Line( geometry22, material );
    geometry22.verticesNeedUpdate = true;
    geometry22.dynamic = true;
    PIEaddElement(line22); 

   var curve = new THREE.EllipseCurve(
  -15, 11.5-1,             // ax, aY
  2, 2,            // xRadius, yRadius
  (2*Math.PI-Math.PI/3+Math.PI/8),(Math.PI+Math.PI/3-Math.PI/8), // aStartAngle, aEndAngle
  true             // aClockwise
);
var path = new THREE.Path(curve.getPoints(50));
var geometry = path.createPointsGeometry(50);
var material = new THREE.LineBasicMaterial({color: "red"});
 ellipse = new THREE.Line(geometry, material);
PIEaddElement(ellipse);

var curve = new THREE.EllipseCurve(
  15, 11.5-1,             // ax, aY
  2, 2,            // xRadius, yRadius
  (2*Math.PI-Math.PI/3+Math.PI/8),(Math.PI+Math.PI/3-Math.PI/8), // aStartAngle, aEndAngle
  true             // aClockwise
);
var path = new THREE.Path(curve.getPoints(50));
var geometry = path.createPointsGeometry(50);
var material = new THREE.LineBasicMaterial({color: "red"});
ellipse1 = new THREE.Line(geometry, material);
PIEaddElement(ellipse1);



    var geometry13 = new THREE.Geometry();
    geometry13.vertices.push(
    new THREE.Vector3( -15, 2+8-0.5-1, -0.5),
    new THREE.Vector3( -15, -4+8-1, -0.5 )
    );
    geometry13.verticesNeedUpdate = true;
    geometry13.dynamic = true;
    line13 = new THREE.Line( geometry13, material );
    geometry13.verticesNeedUpdate = true;
    geometry13.dynamic = true;
    PIEaddElement(line13);

    var geometry23 = new THREE.Geometry();
    geometry23.vertices.push(
    new THREE.Vector3( 15, 2+8-0.5-1, -0.5),
    new THREE.Vector3( 15, -4+8-1, -0.5 )
    );
    geometry23.verticesNeedUpdate = true;
    geometry23.dynamic = true;
    line23 = new THREE.Line( geometry23, material );
    geometry23.verticesNeedUpdate = true;
    geometry23.dynamic = true;
    PIEaddElement(line23); 


   
    material = new THREE.MeshLambertMaterial({color: 0x404040});
    geometry = new THREE.BoxGeometry( 4, 4, 4 );
    wt1 = new THREE.Mesh( geometry, material );
    wt1.position.set(-15, -4+8-1, -2);
    wt1.receiveShadow = true;
    PIEaddElement(wt1);

    material = new THREE.MeshLambertMaterial({color: 0x404040});
    geometry = new THREE.BoxGeometry( 4,4, 4 );
    wt2 = new THREE.Mesh( geometry, material );
    wt2.position.set(15, -4+8-1, -2);
    wt2.receiveShadow = true;
    PIEaddElement(wt2);

    loader = new THREE.TextureLoader();
    texture = loader.load('weight.png');
    material = new THREE.MeshLambertMaterial({map: texture});

//    material = new THREE.MeshLambertMaterial({color: "black"});
    geometry = new THREE.BoxGeometry( 14,2, 8 );
    bal11 = new THREE.Mesh( geometry, material );
    bal11.position.set(15, -17+8-1, -2);
    bal11.receiveShadow = true;
    PIEaddElement(bal11);

     loader = new THREE.TextureLoader();
    texture = loader.load('mass.png');
    material = new THREE.MeshLambertMaterial({map: texture});

//    material = new THREE.MeshLambertMaterial({color: "black"});
    geometry = new THREE.BoxGeometry( 14,2, 8 );
    bal12 = new THREE.Mesh( geometry, material );
    bal12.position.set(-15, -17+8-1, -2);
    bal12.receiveShadow = true;
    PIEaddElement(bal12);

 loader = new THREE.TextureLoader();
    texture = loader.load('magnet.jpg');
    material = new THREE.MeshLambertMaterial({map: texture});

   // material = new THREE.MeshLambertMaterial({color: "brown"});
    geometry = new THREE.BoxGeometry( 60,2, 20 );
    table = new THREE.Mesh( geometry, material );
    table.position.set(0, -19+8-1, -2);
    table.receiveShadow = true;
    PIEaddElement(table);


left1 = document.createElement('div');
    left1.setAttribute("id","div1");
	left1.style.position = 'absolute';
	left1.style.width = 100;
	left1.style.height = 100;
	left1.style.backgroundColor = "grey";
	left1.style.padding = 100;
	left1.innerHTML = "0"+" "+"g";
	left1.style.top = 68.9 + '%';
	left1.style.left = 37 + '%';
	left1.style.textColor = "white";
	document.body.appendChild(left1);


 left2 = document.createElement('div');
     left2.setAttribute("id","div2");
	left2.style.position = 'absolute';
	left2.style.width = 100;
	left2.style.height = 550;
	left2.style.backgroundColor = "grey";
	left2.style.padding = 100;
	left2.innerHTML = "0"+" "+"g";
	left2.style.top = 68.9 + '%';
	left2.style.left = 67.7 + '%';
	left2.style.textColor = "white";
	document.body.appendChild(left2);



    PIEresize();
    resetExperiment();
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);

 
}

function resetExperiment()
{
    /* initialise Other Variables */
    f1.t1=true;
    f2.t2=false;
    f3.t3=false;
    f4.t4=false;
    f5.t5=false;
    f6.t6=false;
    f7.t7=false;
    f8.t8=false;
    f9.t9=false;
    j=0;

    box11.position.set(15, 10+8-1, -2);
    box12.position.set(15, 9+8-1, -0.3);
    box13.position.set(15, 13+8-1, -0.3);
    box21.position.set(-15, 10+8-1, -2);
    box22.position.set(-15, 9+8-1, -0.3);
    box23.position.set(-15, 13+8-1, -0.3);
    wt1.position.set(-15, -4+8-1, -2);
    wt2.position.set(15, -4+8-1, -2);

    line1.geometry.vertices[ 1 ].y=14+8-1;
    line1.geometry.verticesNeedUpdate = true;
            
    line2.geometry.vertices[ 1 ].y=14+8-1;
    line2.geometry.verticesNeedUpdate = true;
            
    line12.geometry.vertices[ 0 ].y=5+8+0.5-1;
    line12.geometry.verticesNeedUpdate = true;
           
    line13.geometry.vertices[ 0 ].y=2-0.5+8-1;
    line13.geometry.verticesNeedUpdate = true;

    line12.geometry.vertices[ 1 ].y=2+8.3-1;
    line12.geometry.verticesNeedUpdate = true;
           
    line13.geometry.vertices[ 1 ].y=4-1;
    line13.geometry.verticesNeedUpdate = true;

    line22.geometry.vertices[ 0 ].y=5+8+0.5-1;
    line22.geometry.verticesNeedUpdate = true;

    line23.geometry.vertices[ 0 ].y=2+8-0.5-1;
    line23.geometry.verticesNeedUpdate = true;

    line22.geometry.vertices[ 1 ].y=2+8.3-1;
    line22.geometry.verticesNeedUpdate = true;

    line23.geometry.vertices[ 1 ].y=4-1;
    line23.geometry.verticesNeedUpdate = true;

   // PIEremoveElement(ellipse);
    PIEremoveElement(ellipse);
    PIEremoveElement(ellipse1);

    var curve = new THREE.EllipseCurve(
  -15, 11.5-1,             // ax, aY
  2, 2,            // xRadius, yRadius
  (2*Math.PI-Math.PI/3+Math.PI/8),(Math.PI+Math.PI/3-Math.PI/8), // aStartAngle, aEndAngle
  true             // aClockwise
);
var path = new THREE.Path(curve.getPoints(50));
var geometry = path.createPointsGeometry(50);
var material = new THREE.LineBasicMaterial({color: "red"});
 ellipse = new THREE.Line(geometry, material);
PIEaddElement(ellipse);

var curve = new THREE.EllipseCurve(
  15, 11.5-1,             // ax, aY
  2, 2,            // xRadius, yRadius
  (2*Math.PI-Math.PI/3+Math.PI/8),(Math.PI+Math.PI/3-Math.PI/8), // aStartAngle, aEndAngle
  true             // aClockwise
);
var path = new THREE.Path(curve.getPoints(50));
var geometry = path.createPointsGeometry(50);
var material = new THREE.LineBasicMaterial({color: "red"});
ellipse1 = new THREE.Line(geometry, material);
PIEaddElement(ellipse1);



var l=document.getElementById('div1');
l.parentNode.removeChild(l);
l=document.getElementById('div2');
l.parentNode.removeChild(l);

left1 = document.createElement('div');
    left1.setAttribute("id","div1");
	left1.style.position = 'absolute';
	left1.style.width = 100;
	left1.style.height = 100;
	left1.style.backgroundColor = "grey";
	left1.style.padding = 100;
	left1.innerHTML = "0"+" "+"g";
	left1.style.top = 68.9 + '%';
	left1.style.left = 37 + '%';
	left1.style.textColor = "white";
	document.body.appendChild(left1);

 left2 = document.createElement('div');
     left2.setAttribute("id","div2");
	left2.style.position = 'absolute';
	left2.style.width = 100;
	left2.style.height = 550;
	left2.style.backgroundColor = "grey";
	left2.style.padding = 100;
	left2.innerHTML = "0"+" "+"g";
	left2.style.top = 68.9 + '%';
	left2.style.left = 67.7 + '%';
	left2.style.textColor = "white";
	document.body.appendChild(left2);

	
	w1=mass*(2/5); //2 is initial y size and 5 is initial value of mass
    var scale = w1/2; 
    
    box13.scale.y = scale;
    
    box23.scale.y = scale;
    
    box13.position.y=21-1-(scale/2);
   
    box23.position.y=21-1-(scale/2);


PIEchangeInputSlider(labelM, defaultM);

}



function reset()
{
    j=0;


    box11.position.set(15, 10+8-1, -2);
    box12.position.set(15, 9+8-1, -0.3);
    box13.position.set(15, 13+8-1, -0.3);
    box21.position.set(-15, 10+8-1, -2);
    box22.position.set(-15, 9+8-1, -0.3);
    box23.position.set(-15, 13+8-1, -0.3);
    wt1.position.set(-15, -4+8-1, -2);
    wt2.position.set(15, -4+8-1, -2);

    line1.geometry.vertices[ 1 ].y=14+8-1;
    line1.geometry.verticesNeedUpdate = true;
            
    line2.geometry.vertices[ 1 ].y=14+8-1;
    line2.geometry.verticesNeedUpdate = true;
            
    line12.geometry.vertices[ 0 ].y=5+8+0.5-1;
    line12.geometry.verticesNeedUpdate = true;
           
    line13.geometry.vertices[ 0 ].y=2-0.5+8-1;
    line13.geometry.verticesNeedUpdate = true;

    line12.geometry.vertices[ 1 ].y=2+8.3-1;
    line12.geometry.verticesNeedUpdate = true;
           
 //   PIEremoveElement(ellipse);
    PIEremoveElement(ellipse);
    PIEremoveElement(ellipse1);

    var curve = new THREE.EllipseCurve(
  -15, 11.5-1,             // ax, aY
  2, 2,            // xRadius, yRadius
  (2*Math.PI-Math.PI/3+Math.PI/8),(Math.PI+Math.PI/3-Math.PI/8), // aStartAngle, aEndAngle
  true             // aClockwise
);
var path = new THREE.Path(curve.getPoints(50));
var geometry = path.createPointsGeometry(50);
var material = new THREE.LineBasicMaterial({color: "red"});
ellipse = new THREE.Line(geometry, material);
PIEaddElement(ellipse);

var curve = new THREE.EllipseCurve(
  15, 11.5-1,             // ax, aY
  2, 2,            // xRadius, yRadius
  (2*Math.PI-Math.PI/3+Math.PI/8),(Math.PI+Math.PI/3-Math.PI/8), // aStartAngle, aEndAngle
  true             // aClockwise
);
var path = new THREE.Path(curve.getPoints(50));
var geometry = path.createPointsGeometry(50);
var material = new THREE.LineBasicMaterial({color: "red"});
ellipse1 = new THREE.Line(geometry, material);
PIEaddElement(ellipse1);

    line13.geometry.vertices[ 1 ].y=4-1;
    line13.geometry.verticesNeedUpdate = true;

    line22.geometry.vertices[ 0 ].y=5+8+0.5-1;
    line22.geometry.verticesNeedUpdate = true;

    line23.geometry.vertices[ 0 ].y=2+8-0.5-1;
    line23.geometry.verticesNeedUpdate = true;

    line22.geometry.vertices[ 1 ].y=2+8.3-1;
    line22.geometry.verticesNeedUpdate = true;

    line23.geometry.vertices[ 1 ].y=4-1;
    line23.geometry.verticesNeedUpdate = true;


delete left1;
delete left2;

PIEscene.remove(left1);
PIEscene.remove(left2);


	
var l=document.getElementById('div1');
l.parentNode.removeChild(l);
l=document.getElementById('div2');
l.parentNode.removeChild(l);

 left1 = document.createElement('div');
     left1.setAttribute("id","div1");
	left1.style.position = 'absolute';
	left1.style.width = 100;
	left1.style.height = 100;
	left1.style.backgroundColor = "grey";
	left1.style.padding = 100;
	left1.innerHTML = "0"+" "+"g";
	left1.style.top = 68.9 + '%';
	left1.style.left = 37 + '%';
	left1.style.textColor = "white";
	document.body.appendChild(left1);


 left2 = document.createElement('div');
     left2.setAttribute("id","div2");
	left2.style.position = 'absolute';
	left2.style.width = 100;
	left2.style.height = 550;
	left2.style.backgroundColor = "grey";
	left2.style.padding = 100;
	left2.innerHTML = "0"+" "+"g";
	left2.style.top = 68.9 + '%';
	left2.style.left = 67.7 + '%';
	left2.style.textColor = "white";
	document.body.appendChild(left2);

	 w1=mass*(2/5); //2 is initial y size and 5 is initial value of mass
    var scale = w1/2; 
    
    box13.scale.y = scale;
    
    box23.scale.y = scale;
    
    box13.position.y=21-1-(scale/2);
   
    box23.position.y=21-1-(scale/2);
   
}


var i=0.15;







function updateExperimentElements(t, dt)
{
    var boundaryT;

            if(wt1.position.y>-7)
            {


            delete left1;
            delete left2;

            PIEscene.remove(left1);
            PIEscene.remove(left2);


var l=document.getElementById('div1');
l.parentNode.removeChild(l);
l=document.getElementById('div2');
l.parentNode.removeChild(l);

    left1 = document.createElement('div');
        left1.setAttribute("id","div1");
	left1.style.position = 'absolute';
	left1.style.width = 100;
	left1.style.height = 100;
	left1.style.backgroundColor = "grey";
	left1.style.padding = 100;
	left1.innerHTML = "0"+" "+"g";
	left1.style.top = 68.9 + '%';
	left1.style.left = 37 + '%';
	left1.style.textColor = "white";
	document.body.appendChild(left1);


    left2 = document.createElement('div');
        left2.setAttribute("id","div2");
	left2.style.position = 'absolute';
	left2.style.width = 100;
	left2.style.height = 550;
	left2.style.backgroundColor = "grey";
	left2.style.padding = 100;
	left2.innerHTML = "0"+" "+"g";
	left2.style.top = 68.9 + '%';
	left2.style.left = 67.7 + '%';
	left2.style.textColor = "white";
	document.body.appendChild(left2);

            box11.position.y=(box11.position.y)-i;
            box12.position.y=(box12.position.y)-i;
            box13.position.y=(box13.position.y)-i;
            box21.position.y=box21.position.y-i;

            box22.position.y=box22.position.y-i;
            box23.position.y=box23.position.y-i;
            wt1.position.y=wt1.position.y-i;
            wt2.position.y=wt2.position.y-i;


            PIEremoveElement(ellipse);
            PIEremoveElement(ellipse1);
            j=j+i;

            var curve = new THREE.EllipseCurve(
  -15, 11.5-1-j,             // ax, aY
  2, 2,            // xRadius, yRadius
  (2*Math.PI-Math.PI/3+Math.PI/8),(Math.PI+Math.PI/3-Math.PI/8), // aStartAngle, aEndAngle
  true             // aClockwise
);
var path = new THREE.Path(curve.getPoints(50));
var geometry = path.createPointsGeometry(50);
var material = new THREE.LineBasicMaterial({color: "red"});
 ellipse = new THREE.Line(geometry, material);
PIEaddElement(ellipse);

var curve = new THREE.EllipseCurve(
  15, 11.5-1-j,             // ax, aY
  2, 2,            // xRadius, yRadius
  (2*Math.PI-Math.PI/3+Math.PI/8),(Math.PI+Math.PI/3-Math.PI/8), // aStartAngle, aEndAngle
  true             // aClockwise
);
var path = new THREE.Path(curve.getPoints(50));
var geometry = path.createPointsGeometry(50);
var material = new THREE.LineBasicMaterial({color: "red"});
ellipse1 = new THREE.Line(geometry, material);
PIEaddElement(ellipse1);

            //ellipse.curve.aY-=i;
  
            line1.geometry.vertices[ 1 ].y-=i;
            line1.geometry.verticesNeedUpdate = true;
            
            line2.geometry.vertices[ 1 ].y-=i;
            line2.geometry.verticesNeedUpdate = true;
            
            line12.geometry.vertices[ 0 ].y-=i;
            line12.geometry.verticesNeedUpdate = true;
           
            line13.geometry.vertices[ 0 ].y-=i;
            line13.geometry.verticesNeedUpdate = true;

            line12.geometry.vertices[ 1 ].y-=i;
            line12.geometry.verticesNeedUpdate = true;
           
            line13.geometry.vertices[ 1 ].y-=i;
            line13.geometry.verticesNeedUpdate = true;

            line22.geometry.vertices[ 0 ].y-=i;
            line22.geometry.verticesNeedUpdate = true;

            line23.geometry.vertices[ 0 ].y-=i;
            line23.geometry.verticesNeedUpdate = true;

            line22.geometry.vertices[ 1 ].y-=i;
            line22.geometry.verticesNeedUpdate = true;

            line23.geometry.vertices[ 1 ].y-=i;
            line23.geometry.verticesNeedUpdate = true;
            PIEchangeDisplayText(label1, "0");
            PIEchangeDisplayText(label2, "0");

        }

        else
        {
        	//earth
//mercury
//venus
//mars
//jupiter
//saturn
//neptune
//moon
//uranus
            if(f1.t1==true)
            {
                weight=mass;   
            }
            if(f2.t2==true)
            {
                weight=mass*0.38;
            }
            if(f3.t3==true)
            {
                weight=mass*0.90;
            }
            if(f4.t4==true)
            {
                weight=mass*0.376;
            }
            if(f5.t5==true)
            {
                weight=mass*2.53;
            }
            if(f6.t6==true)
            {
                weight=mass*1.07;
            }
            if(f7.t7==true)
            {
                weight=mass*1.14;
            }
            if(f8.t8==true)
            {
                weight=mass*0.1654;
            }
            if(f9.t9==true)
            {
               weight=mass*0.89; 
            }


            delete left1;
            delete left2;

      //      l2=document.getElementById('div');
        //    l2.innerHTML=mass;

        PIEscene.remove(left1);
        PIEscene.remove(left2);


var l=document.getElementById('div1');
l.parentNode.removeChild(l);
l=document.getElementById('div2');
l.parentNode.removeChild(l);

    left1 = document.createElement('div');
    left1.setAttribute("id","div1");
	left1.style.position = 'absolute';
	left1.style.width = 100;
	left1.style.height = 100;
	left1.style.backgroundColor = "grey";
	left1.style.padding = 100;
	left1.innerHTML = (Math.round(mass * 100) / 100) +" " +"g";
	left1.style.top = 68.9 + '%';
	left1.style.left = 37 + '%';
	left1.style.textColor = "white";
	document.body.appendChild(left1);


    left2 = document.createElement('div');
    left2.setAttribute("id","div2");
	left2.style.position = 'absolute';
	left2.style.width = 100;
	left2.style.height = 550;
	left2.style.backgroundColor = "grey";
	left2.style.padding = 100;
	left2.innerHTML = (Math.round(weight * 100) / 100) +" "+ "g";
	left2.style.top = 68.9 + '%';
	left2.style.left = 67.7 + '%';
	left2.style.textColor = "white";
	document.body.appendChild(left2);
	}
  
 
   boundaryT = dt / 1000.0;  
       boundaryT *= 1000;
    if (boundaryT < dt) { PIEadjustAnimationTime(dt - boundaryT); }


}
