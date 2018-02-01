
var helpContent;

function initialiseHelp()
{
helpContent="";
helpContent = helpContent + "<h2>Measuring Average speed</h2>";
helpContent = helpContent + "<h3>About the experiment</h3>";
helpContent = helpContent + "<p>Start the experiment to start observing the variations in the average speed with beatiful animations.</p>";
helpContent = helpContent + "<h3>Operation:</h3>";
helpContent = helpContent + "<p>Press start in the beginning. Pause or stop will have similiar functioning between the process. Stop and reset will have same fuctioning at the end of animation</p>";
helpContent = helpContent + "<h2>Happy Experimenting</h2>";
PIEupdateHelp(helpContent);
}

var infoContent;

function initialiseInfo()
{
infoContent =  "";
infoContent = infoContent + "<h2>Measuring Average speed</h2>";
infoContent = infoContent + "<h3>About the experiment</h3>";
infoContent = infoContent + "<p>The experiment shows a car. The distances is measured in m(metres). The velocity is measured in m/s(metres/second). Time is measured in secons(s).</p>";
infoContent = infoContent + "<h3>Formula</h3>";
infoContent = infoContent + "<p>The experiment solely works on Average speed = Total distance / total speed</p>";
infoContent = infoContent + "<h2>Happy Experimenting</h2>";
PIEupdateInfo(infoContent);

}



var movebrick=0;

function button()
{

       movebrick=1;
        myBack1.position.z=-100;
       // PIEstartAnimation();
   
}
    
var myBack1;

function initialiseControlVariables()
{
var Dis=" Distance-m";
var Poi="Point";
var Tim ="Time-s";
var Spe="Speed-m/s";




}


function enter()
{
//PIEsetAreaOfInterest(100,80,0,0);

}


function initialiseControls()
{
    //initialiseControlVariables();

    PIEaddDisplayText("Distance(m)", 0);
    PIEaddDisplayText("Level",0);
    PIEaddDisplayText("Time(s)", 0);
  //PIEaddDisplayText("Current speed-m/s",0);

 PIEaddDisplayText("Total time(s)",0.0);
 PIEaddDisplayText("Total Distance(m)",0.0);
//PIEaddDisplayText("Average speed-m/s",0.0);


PIEcreateTable("-Observation Table-",4,6,true);
var headerRow=["-Distance(m)-", "-Time(s)-", "-Total Distance(m)-", "-Total Time(s)-","-Average speed(m/s)-","-Total Average speed(m/s)-"];
PIEupdateTableRow(0,headerRow);
PIEupdateTableRow(1,[0,0,0,0,0,0]);
PIEupdateTableRow(2,[0,0,0,0,0,0]);
PIEupdateTableRow(3,[0,0,0,0,0,0]);



/*
PIEcreateTable("-Measuring Average Speed-",3,2,true);
var header=["-Average Speed-", "-Total Average speed-"];
PIEupdateTableRow(0,header);
*/


/*
PIEcreateTableCell(1,1,1);
PIEcreateTableCell(2,1,1);
  PIEsetRowInput(1, 5, "abcde");
    PIEsetRowInput(2, 6, "fghijk");
    PIEsetRowInput(3, 4, "lmno");

*/
//PIEaddDisplayCheckBox("Enter",0,enter);



  

}


function loadExperimentElements()

{

PIEsetExperimentTitle("Measuring average speed");
PIEsetDeveloperName("Reddypalli RuhiTaj");
PIEhideControlElement();
initialiseHelp();
initialiseInfo();
initialiseControls();
setY();


var te = THREE.ImageUtils.loadTexture('images/reverse.jpg', {}, function() {PIErender();});
var mel = new THREE.MeshLambertMaterial({map:te, transparent:true});
var ge= new THREE.PlaneGeometry(410,145);
sky=new THREE.Mesh(ge,mel);
sky.position.set(-370,45,-100);
sky.receiveShadow=false;
PIEaddElement(sky);
sky.receiveShadow=false;
sky=new THREE.Mesh(ge,mel);
sky.position.set(1270,45,-100);
sky.receiveShadow=false;
PIEaddElement(sky);
sky=new THREE.Mesh(ge,mel);
sky.position.set(450,45,-100);
sky.receiveShadow=false;
PIEaddElement(sky);
sky=new THREE.Mesh(ge,mel);
sky.position.set(2090,45,-100);
sky.receiveShadow=false;
PIEaddElement(sky);
var te = THREE.ImageUtils.loadTexture('images/61216526.jpg', {}, function() {PIErender();});
var met = new THREE.MeshLambertMaterial({map:te, transparent:true});
var ge= new THREE.PlaneGeometry(410,145);
sky=new THREE.Mesh(ge,met);
sky.position.set(-780,45,-100);
sky.receiveShadow=false;
PIEaddElement(sky);
sky=new THREE.Mesh(ge,met);
sky.position.set(40,45,-100);
sky.receiveShadow=false;
PIEaddElement(sky);
sky=new THREE.Mesh(ge,met);
sky.position.set(860,45,-100);
sky.receiveShadow=false;
PIEaddElement(sky);
sky=new THREE.Mesh(ge,met);
sky.position.set(1680,45,-100);
sky.receiveShadow=false;
PIEaddElement(sky);



var texture = THREE.ImageUtils.loadTexture('images/6.gif', {}, function() {PIErender();});
geometry = new THREE.BoxGeometry( 1060,6, 100);
material = new THREE.MeshLambertMaterial( {color: 0xc0c0c0, map: texture} );
road  = new THREE.Mesh( geometry, material );
road.position.set(-460,-12.39,  -55);
road.receiveShadow = true;
PIEaddElement(road);
road  = new THREE.Mesh( geometry, material );
road.position.set(540,-12.39,  -55);
road.receiveShadow = true;
PIEaddElement(road);
road  = new THREE.Mesh( geometry, material );
road.position.set(1550,-12.39,  -55);
road.receiveShadow = true;
PIEaddElement(road);



var texture = THREE.ImageUtils.loadTexture('images/car.gif', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 96/2,51.9/2);
material = new THREE.MeshLambertMaterial( {transparent:true,map: texture} );
car = new THREE.Mesh( geometry, material );
car.position.set(-800-110,0,  -60);
PIEaddElement(car);



var texture = THREE.ImageUtils.loadTexture('images/wheelLeft.gif', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 16/2,15.4/2);
material = new THREE.MeshLambertMaterial( {transparent:true,map: texture} );
left = new THREE.Mesh( geometry, material );
left.position.set(-815-110,-5,  -60);
PIEaddElement(left);



var texture = THREE.ImageUtils.loadTexture('images/wheelRight.gif', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 16/2,14.8/2);
material = new THREE.MeshLambertMaterial( {transparent:true,map: texture} );
right = new THREE.Mesh( geometry, material );
right.position.set(-786-109.5,-5,  -60);
PIEaddElement(right);



var texture = THREE.ImageUtils.loadTexture('images/UZXnW.png', {}, function() {PIErender();});
//texture.anisotropy=50;
//texture.repeat.set(5,5);
geometry = new THREE.PlaneGeometry(10,10);
material = new THREE.MeshLambertMaterial( {transparent:true,map:texture} );

for(i=0;i<=20;)
{
 for(j=-610;j<=720;)
 {
myBack = new THREE.Mesh( geometry, material );
myBack.position.set(-681+j,i,-80);
PIEaddElement(myBack);
j=j+10;
 }
i=i+10;
}

for(i=0;i<=300;){
myBack = new THREE.Mesh( geometry, material );
myBack.position.set(1895+i,5,-90);
PIEaddElement(myBack);


myBack = new THREE.Mesh( geometry, material );
myBack.position.set(1895+i,15,-90);
PIEaddElement(myBack);


myBack = new THREE.Mesh( geometry, material );
myBack.position.set(1895+i,25,-90);
PIEaddElement(myBack);


i=i+10;
}


var texture = THREE.ImageUtils.loadTexture('images/Lighthouse.png', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry(24*1.5,25.3*1.5);
material = new THREE.MeshLambertMaterial( {transparent:true,map:texture} );
myBack = new THREE.Mesh( geometry, material );
myBack.position.set(-606,13,-90);
PIEaddElement(myBack);


var texture = THREE.ImageUtils.loadTexture('images/Lighthouse1.png', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry(50*1.2,33.5*1.2);
material = new THREE.MeshLambertMaterial( {transparent:true,map:texture} );
myBack = new THREE.Mesh( geometry, material );
myBack.position.set(-400,14,-100);
PIEaddElement(myBack);


var texture = THREE.ImageUtils.loadTexture('images/footpath.jpg', {}, function() {PIErender();})

geometry = new THREE.BoxGeometry( 2120,6, 100);
material = new THREE.MeshLambertMaterial( { map: texture} );
side  = new THREE.Mesh( geometry, material );
side.position.set(1106,-3.39,  -130);
side.receiveShadow = true;
PIEaddElement(side);



var texture = THREE.ImageUtils.loadTexture('images/images (1).jpg', {}, function() {PIErender();})

geometry = new THREE.BoxGeometry( 440,6, 100);
material = new THREE.MeshLambertMaterial( { map: texture} );
side  = new THREE.Mesh( geometry, material );
side.position.set(865,100.39,  -100);
side.receiveShadow = true;
PIEaddElement(side);


side  = new THREE.Mesh( geometry, material );
side.position.set(865+(820),100.39,  -100);
side.receiveShadow = true;
PIEaddElement(side);



var texture = THREE.ImageUtils.loadTexture('images/download (2).jpg', {}, function() {PIErender();});
texture.anisotropy=20;
geometry = new THREE.BoxGeometry( 31.1*3, 16.2*4, 4 );
material = new THREE.MeshLambertMaterial( {color: 0xffffff, map:texture} );
myBack1 = new THREE.Mesh( geometry, material );
myBack1.position.set(90.5-46.65,19.5,  -70);
myBack1.rotation.y=-(0.5)*Math.PI;
myBack1.castShadow=false;
PIEaddElement(myBack1);

myBack2 = new THREE.Mesh( geometry, material );
myBack2.position.set(90.5-46.65,19.5,  20);
myBack2.rotation.y=-(0.5)*Math.PI;
myBack2.castShadow=false;
PIEaddElement(myBack2);

var texture = THREE.ImageUtils.loadTexture('images/rails-156523_640.png', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 6.4*18,3.2*4 );
material = new THREE.MeshLambertMaterial( {transparent:true ,color:0x000000, map:texture} );
my = new THREE.Mesh( geometry, material );
my.position.set(90.5-46.65,-8.7,  -40);
my.rotation.z=-(0.5)*Math.PI;
my.rotation.x=-(0.5)*Math.PI;

my.castShadow=false;
PIEaddElement(my);


//line-2-xxl.png

var texture = THREE.ImageUtils.loadTexture('images/040098.png', {}, function() {PIErender();});
texture.anisotropy=20;
geometry = new THREE.BoxGeometry( 27.5*3.2, 18.3*3.2, 10 );
material = new THREE.MeshLambertMaterial( {color: 0xc0c0c0, map:texture} );
myBack = new THREE.Mesh( geometry, material );
myBack.position.set(77+(31.1*9),22.39,  -100);
myBack.castShadow=false;
PIEaddElement(myBack);

myBack = new THREE.Mesh( geometry, material );
myBack.position.set(77+(31.1*9)+(27.5*3.2),22.39,  -100);
myBack.castShadow=false;
PIEaddElement(myBack);

myBack = new THREE.Mesh( geometry, material );
myBack.position.set(50+(31.1*9)+(27.5*6.4),22.39,  -100);
myBack.castShadow=false;
PIEaddElement(myBack);

myBack = new THREE.Mesh( geometry, material );
myBack.position.set(50+(31.1*9)+(27.5*9.6),22.39,  -100);
myBack.castShadow=false;
PIEaddElement(myBack);


myBack = new THREE.Mesh( geometry, material );
myBack.position.set(50+(31.1*9)+(27.5*6.4*1.5),22.39,  -100);
myBack.castShadow=false;
PIEaddElement(myBack);



myBack = new THREE.Mesh( geometry, material );
myBack.position.set(50+(31.1*9)+(27.5*6.4*2),22.39,  -100);
myBack.castShadow=false;
PIEaddElement(myBack);

myBack = new THREE.Mesh( geometry, material );
myBack.position.set(50+(31.1*9)+(27.5*6.4*2.5),22.39,  -100);
myBack.castShadow=false;
PIEaddElement(myBack);

myBack = new THREE.Mesh( geometry, material );
myBack.position.set(50+(31.1*9)+(27.5*6.4*3),22.39,  -100);
myBack.castShadow=false;
PIEaddElement(myBack);

myBack = new THREE.Mesh( geometry, material );
myBack.position.set(50+(31.1*9)+(27.5*6.4*3.5),22.39,  -100);
myBack.castShadow=false;
PIEaddElement(myBack);


for(i=4;i<=8.5;)
{

myBack = new THREE.Mesh( geometry, material );
myBack.position.set(50+(31.1*9)+(27.5*6.4*i),22.39,  -100);
myBack.castShadow=false;
PIEaddElement(myBack);
i=i+0.5;

}
myBack = new THREE.Mesh( geometry, material );
myBack.position.set(-20+(31.1*9)+(27.5*6.4*i),22.39,  -100);
myBack.castShadow=false;
PIEaddElement(myBack);



myBack = new THREE.Mesh( geometry, material );
myBack.position.set(50+(31.1*9)-(27.5*3.2)+30,22.39,  -100);
myBack.castShadow=false;
PIEaddElement(myBack);


myBack = new THREE.Mesh( geometry, material );
myBack.position.set(50+(31.1*9)-(27.5*6.4)+30,22.39,  -100);
myBack.castShadow=false;
PIEaddElement(myBack);


myBack = new THREE.Mesh( geometry, material );
myBack.position.set(50+(31.1*9)-(27.5*9.6)+30,22.39,  -100);
myBack.castShadow=false;
PIEaddElement(myBack);


var texture = THREE.ImageUtils.loadTexture('images/roof.jpg', {}, function() {PIErender();});
texture.anisotropy=20;
geometry = new THREE.BoxGeometry( 6, (18.3*3.2)-6, 30 );
material = new THREE.MeshLambertMaterial( {map:texture} );
myBack = new THREE.Mesh( geometry, material );
myBack.position.set(37+(31.1*9),22.39+3,  -100);
myBack.castShadow=false;
PIEaddElement(myBack);

myBack = new THREE.Mesh( geometry, material );
myBack.position.set(207+(31.1*9),22.39+3,  -100);
myBack.castShadow=false;
PIEaddElement(myBack);


myBack = new THREE.Mesh( geometry, material );
myBack.position.set(377+(31.1*9),22.39+3,  -100);
myBack.castShadow=false;
PIEaddElement(myBack);

myBack = new THREE.Mesh( geometry, material );
myBack.position.set(207-340+(31.1*9),22.39+3,  -100);
myBack.castShadow=false;
PIEaddElement(myBack);


myBack = new THREE.Mesh( geometry, material );
myBack.position.set(207-437+(31.1*9),22.39+3,  -100);
myBack.castShadow=false;
PIEaddElement(myBack);


myBack = new THREE.Mesh( geometry, material );
myBack.position.set(787+(31.1*9),22.39+3,  -100);
myBack.castShadow=false;
PIEaddElement(myBack);


myBack = new THREE.Mesh( geometry, material );
myBack.position.set(1197+(31.1*9),22.39+3,  -100);
myBack.castShadow=false;
PIEaddElement(myBack);


myBack = new THREE.Mesh( geometry, material );
myBack.position.set(1607+(31.1*9),22.39+3,  -100);
myBack.castShadow=false;
PIEaddElement(myBack);


var texture = THREE.ImageUtils.loadTexture('images/pillars.jpg', {}, function() {PIErender();});
texture.anisotropy=20;
geometry = new THREE.BoxGeometry( 6, (18.3*3.2)-6, 30 );
material = new THREE.MeshLambertMaterial( {map:texture} );
myBack = new THREE.Mesh( geometry, material );
myBack.position.set(377+(31.1*9),72.39+3,  -100);
myBack.castShadow=false;
PIEaddElement(myBack);

myBack = new THREE.Mesh( geometry, material );
myBack.position.set(787+(31.1*9),72.39+3,  -100);
myBack.castShadow=false;
PIEaddElement(myBack);


myBack = new THREE.Mesh( geometry, material );
myBack.position.set(1197+(31.1*9),72.39+3,  -100);
myBack.castShadow=false;
PIEaddElement(myBack);


myBack = new THREE.Mesh( geometry, material );
myBack.position.set(1607+(31.1*9),72.39+3,  -100);
myBack.castShadow=false;
PIEaddElement(myBack);



var texture = THREE.ImageUtils.loadTexture('images/start.png', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 171.9, 7.9);
material = new THREE.MeshLambertMaterial( {map:texture,transparent:true,} );
start = new THREE.Mesh( geometry, material );
start.position.set(-800,50.39,-50);
start.castShadow=false;
PIEaddElement(start);


var texture = THREE.ImageUtils.loadTexture('images/box.png', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 170.9/1.5, 19.5/1.5);
material = new THREE.MeshLambertMaterial( {map:texture,transparent:true,} );
box = new THREE.Mesh( geometry, material );
box.position.set(1820,40.39,-50);
box.castShadow=false;
///PIEaddElement(box);

//130
///
var texture = THREE.ImageUtils.loadTexture('images/Congratulations.png', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 81.2/1.5, 8.5/1.5);
material = new THREE.MeshLambertMaterial( {map:texture,transparent:true,} );
Congratulations = new THREE.Mesh( geometry, material );
Congratulations.position.set(780,180.39,-50);
Congratulations.castShadow=false;
PIEaddElement(Congratulations);



var texture = THREE.ImageUtils.loadTexture('images/Wrong.png', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 50.8/1.5, 9.3/1.5);
material = new THREE.MeshLambertMaterial( {map:texture,transparent:true,} );
wrong = new THREE.Mesh( geometry, material );
wrong.position.set(780,180.39,-50);
wrong.castShadow=false;
PIEaddElement(wrong);



var texture = THREE.ImageUtils.loadTexture('images/formula.png', {}, function() {PIErender();});
texture.anisotropy=20;
geometry = new THREE.PlaneGeometry( 21.55*5, 1.04*5 );
material = new THREE.MeshLambertMaterial( {map:texture,transparent:true,} );
formula = new THREE.Mesh( geometry, material );
formula.position.set(-800,52.39,-70);
formula.castShadow=false;
PIEaddElement(formula);


var texture = THREE.ImageUtils.loadTexture('images/Pass.png', {}, function() {PIErender();});
texture.anisotropy=20;
geometry = new THREE.PlaneGeometry( 14.96*6, 0.83*6);
material = new THREE.MeshLambertMaterial( {map:texture,transparent:true,} );
pass = new THREE.Mesh( geometry, material );
pass.position.set(1830,172.39,-70);
pass.castShadow=false;
///PIEaddElement(pass);


//////////////////////1830//////////////25/////////////725formula.position.set(1830,72.39,-70);



var texture = THREE.ImageUtils.loadTexture('images/pole.png', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 80, 60 );
material = new THREE.MeshLambertMaterial( {map:texture,color:0x000000,transparent:true,} );
myBack = new THREE.Mesh( geometry, material );
myBack.position.set(427+(31.1*9),22.39+3,  -70);
myBack.castShadow=false;
PIEaddElement(myBack);



var texture = THREE.ImageUtils.loadTexture('images/park.png', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 56.3/1.5, 27.6/1.5);
material = new THREE.MeshLambertMaterial( {map:texture,transparent:true,} );
myBack = new THREE.Mesh( geometry, material );
myBack.position.set(457+(31.1*9),5.39+3,  -90);
myBack.castShadow=false;
PIEaddElement(myBack);

myBack = new THREE.Mesh( geometry, material );
myBack.position.set(457+(31.1*9)+(56.3/1.5),5.39+3,  -90);
myBack.castShadow=false;
PIEaddElement(myBack);

myBack = new THREE.Mesh( geometry, material );
myBack.position.set(457+(31.1*9)+2*(56.3/1.5),5.39+3,  -90);
myBack.castShadow=false;
PIEaddElement(myBack);



var texture = THREE.ImageUtils.loadTexture('images/red.png', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 7.6, 17.7 );
material = new THREE.MeshLambertMaterial( {map:texture,transparent:true,} );
red = new THREE.Mesh( geometry, material );
red.position.set(427+(31.1*9),42.39,  -70);
red.castShadow=false;
PIEaddElement(red);


var texture = THREE.ImageUtils.loadTexture('images/green.png', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 7.6, 17.7 );
material = new THREE.MeshLambertMaterial( {map:texture,transparent:true,} );
green = new THREE.Mesh( geometry, material );
green.position.set(427+(31.1*9),142.39,  -70);
green.castShadow=false;
PIEaddElement(green);

  var xture = THREE.ImageUtils.loadTexture('images/streetligt.png', {}, function() {PIErender();});
  xture.anisotropy=25;
 var x=new THREE.PlaneGeometry(62.3/4,202.0/4);
var z= new THREE.MeshPhysicalMaterial( {color: 0xffffff, transparent:true, map:xture} );
stan = new THREE.Mesh(x,z);
stan.position.set(-200,4.9-2.4+16-1.67,-78);
PIEaddElement(stan);
stan = new THREE.Mesh(x,z);
stan.position.set(-700,4.9-2.4+16-1.67,-78);
PIEaddElement(stan);

stan = new THREE.Mesh(x,z);
stan.position.set(400,4.9-2.4+22-1.67,-85);
PIEaddElement(stan);


start.position.set(-800,60.39,-50);



resetExperiment();


PIEsetAreaOfInterest(-1600,100,0,0);
PIErender();

}
var bc=0;
var car;
var dc=0;
var second=0;
var third=0;

var myBack2;




var dis3;

var start;

function resetExperiment( )
{
PIEsetAreaOfInterest(-1600,100,0,0);
bc=0;
movebrick=0;
   right.position.set(-786-109.5,-5,  -60);
     left.position.set(-815-110,-5,  -60);
         car.position.set(-800-110,0,  -60);
         myBack1.position.z=-70;
       myBack2.position.z= 20;
start.position.set(-800,70.39,-50);
pass.position.set(1830,172.39,-70);
poi=0;
go=0;
       green.position.y=145;
       red.position.y=42.39;
                     Congratulations.position.set(1830,172.39,-70);

lastLock=0;
x=Math.floor((Math.random() * 3) + 1); 
y=Math.floor((Math.random() * 3) + 1); 
z=Math.floor((Math.random() * 3) + 1); 
formula.position.y=42;
wrong.position.set(100,200,-100);


chance=0;



PIEupdateTableRow(1,[0,0,0,0,0,0]);
PIEupdateTableRow(2,[0,0,0,0,0,0]);
PIEupdateTableRow(3,[0,0,0,0,0,0]);






street=-90;
dc=5*(x/3);
 rc=1.1*(x/3);
last=0;

 second=0;
 third=0;
 signal=0;
 key=5;
 PIErender();
 istopped=-5;
goo=6;
dits=0;
time1=0;
first1=0;
time=0;
track=9780;
stop=10;
lone=-1;

}

var lone=-1;
var lastLock=0;
var x;
var y;
var z;


var signal=0;
var key=5;
var last=0;


var track=9807;

PIEstopAnimation = (  function() {
    var cached_function = PIEstopAnimation;
    return function() {
       
      if(istopped==0)
      {
        g=0;
        resetExperiment();
        istopped=-5;
      }

         PIErender();
        var result = cached_function.apply( this , arguments); // use .apply() to call it
        return result;
    };
})();


var one;
var goo=6;
var istopped=-5;
var chance=0;


var go=0;

function ok()
{
// poi= PIEgetInputText("AverageSpeed");
// toi=PIEgetInputText("TOTALAverageSpeed");
}
var poi=0;
var toi=0;

function setY()
{
  //PIEaddInputText("AverageSpeed",0,ok);
  ///PIEaddInputText("TOTALAverageSpeed",0,ok);
}
var stop=10;



var d1;
var t1;


var street=-90;


function updateExperimentElements(dt,t)
{



PIEsetAreaOfInterest(-1600+bc,100,0,0);
left.rotation.z-=rc;
right.rotation.z-=rc;
car.position.x=dc+car.position.x;
left.position.x=dc+left.position.x;
right.position.x= dc+right.position.x;
if (car.position.x>=0 && lone==-1)
{
dc=0;
rc=0;
//bc=0;
stop=-8;
lone=-5;
}
if(car.position.x>=-990 && car.position.x<=0 && stop==10)
{

  bc=bc+(9.55*(x/3));
  distance=500;
  time=distance/(dc*11);
  if(x==1 && time>=25)
  {
    time=25;
  }

  else if(x==2 && time>=10)
  {
  time=10;
  }
  else if(x==3 && time>=5)
  {
    time=5;
  }

complete=distance;
tcomplete=time;

 PIEchangeDisplayText("Distance(m)",distance);
 PIEchangeDisplayText("Time(s)",time);
 PIEchangeDisplayText("Level",1);
 PIEchangeDisplayText("Total time(s)",tcomplete);
 PIEchangeDisplayText("Total Distance(m)",complete);




//PIEupdateTableRow(1,[distance,time,complete,tcomplete,"Quiz","Quiz"]);
PIEupdateTableRow(2,[0,0,0,0,0,0]);
PIEupdateTableRow(3,[0,0,0,0,0,0]);


drop=90;


}
if(car.position.x>=0&& drop==90 )
{
d1=distance;
t1=time;
 if(poi!= (distance/time) && toi != (complete/tcomplete))
 {

  chance=2;

 if(chance<=1)
  {PIEstopAnimation();
   ///pass.position.set(30,72.39,-70);
  //// box.position.x=130;
  PIEupdateTableRow(1,[distance,time,complete,tcomplete,0,0]);
 }

else
{
  ///wrong.position.set(30,72.39,-70);
  poi=distance/time;
  toi=complete/tcomplete;
  PIEstartAnimation();
}

 }
 else if(poi== (distance/time) && toi == (complete/tcomplete))
 {
  PIEstartAnimation();
   //pass.position.set(30,172.39,-70);
   ////box.position.x=2145;

   if(chance<=1)
   {
   //// Congratulations.position.set(30,72.39,-70);
   }
  PIEupdateTableRow(1,[distance,time,complete,tcomplete,poi,toi]);

  if(myBack1.position.z>=-135)
  {
    myBack1.position.z-=0.3;
    myBack2.position.z+=0.3;
  }
  else 
  {
    drop=-19;
  }

  stop=-100;
 }

}
if(drop==-19)
{
 
if(car.position.x<=680)
{
  dc=(2*y);
rc=0.3*(y);
bc=bc+(3.6*y);


distance=300;
if(y==1)
{
  time=6;
  tcomplete=t1+time;
}
else if(y=2)
{
  time=10;
  tcomplete=t1+time;
}
else if(y==3)
{
  time=15;
  tcomplete=t1+time;
}
chance=0;

complete= 800;
 PIEchangeDisplayText("Distance(m)",distance);
 PIEchangeDisplayText("Time(s)",time);
 PIEchangeDisplayText("Level",2);
 PIEchangeDisplayText("Total time(s)",tcomplete);
 PIEchangeDisplayText("Total Distance(m)",complete);




//PIEupdateTableRow(2,[distance,time,complete,tcomplete,"Quiz","Quiz"]);
//PIEupdateTableRow(2,[0,0,0,0,"Quiz","Quiz"]);
//PIEupdateTableRow(3,[0,0,0,0,"Quiz","Quiz"]);

street=-90;
toi=0;
poi=0;
}
else
{
  dc=0;
  rc=0;

 if(street==-90)
 {



 if(poi== (distance/time)  && (toi>=((complete/tcomplete)-1) && toi <=((complete/tcomplete)+1)))
 {

  t1=tcomplete;
  PIEstartAnimation();
  street=1010;
  green.position.y=42.39 ;
  ///box.position.x=9610;

 if(chance<=1)
 {
  /////Congratulations.position.set(630,72.39,-70);
 }

   PIEupdateTableRow(2,[distance,time,complete,tcomplete,poi,toi]);
///pass.position.set(630,172.39,-70);
  drop=156;
 }

 else
 {
chance=2;
if(chance<=1)
 { PIEupdateTableRow(2,[distance,time,complete,tcomplete,0,0]);
///pass.position.set(630,72.39,-70);
///box.position.x=630;

 PIEstopAnimation();

}

else
{
  /////wrong.position.set(630,72.39,-70);
  poi=  distance/time;
  toi= complete/tcomplete;
  PIEstartAnimation();
}
 }


 }


}


}
if(drop==156)
{
 if(car.position.x >680 && car.position.x<= 1830)

 {

  dc=5*(z/3);
rc=1.1*(z/3);
bc=bc+(9.4*(z/3));
track=168;

distance=400;
if(y==1)
{
  time=8;
  tcomplete=t1+time;
}
else if(y=2)
{
  time=10;
  tcomplete=t1+time;
}
else if(y==3)
{
  time=16;
  tcomplete=t1+time;
}

complete= 1200;
chance=0;
 PIEchangeDisplayText("Distance(m)",distance);
 PIEchangeDisplayText("Time(s)",time);
 PIEchangeDisplayText("Level",3);
PIEchangeDisplayText("Total time(s)",tcomplete);
 PIEchangeDisplayText("Total Distance(m)",complete);

toi=0;poi=0;


//PIEupdateTableRow(3,[distance,time,complete,tcomplete,"Quiz","Quiz"]);







 }
 else 
 {
  dc=0;
  rc=0;
 /// drop=2516;
 if(track==168)
 {
  if(poi==(distance/time) && (toi>=((complete/tcomplete)-1)) && (toi<=((complete/tcomplete)+1)) )
  {
    PIEstartAnimation();
           ////   pass.position.set(1830,172.39,-70);
             
             /// Congratulations.position.set(1830,72.39,-70);}
          PIEupdateTableRow(3,[distance,time,complete,tcomplete,poi,toi]);
          ////box.position.x=2100;
          istopped=0;

  }

  else
  {

    chance=2;
    if(chance<=1)
           { ////pass.position.set(1830,72.39,-70);
PIEupdateTableRow(3,[distance,time,complete,tcomplete,0,0]);
////box.position.x=1800;
    PIEstopAnimation();
  }

  else
  {

    ////wrong.position.set(1830,72.39,-70);
    poi=distance/time;
    toi=complete/tcomplete;
    PIEstartAnimation();
  }
  }


 }




 }


}













/*
if(car.position.x>=-900)
{
  start.position.set(-970,272.39,-50);
}


car.position.x=dc+car.position.x;
left.position.x=dc+left.position.x;
right.position.x= dc+right.position.x;

if(car.position.x >= 0 && car.position.x <=4)
{
 dc=0;
 rc=0;
 
}
else if(car.position.x<0)
{
dits=((car.position.x)+990)*(500/990);
//start.position.set(-970,272.39,-50);

if(dits>=490)
{
  dits=500
}

bc=bc+(9.55*(x/3));

time1=dits/(dc*10);

if(time1>=25 && x==1)
{
  time1=25;
}

else if(time1>=10 && x==2)
{
  time1=10;
}

else if(time1>=5 && x==3)
{
  time1=5;
}

speed=dits/time1;

time=time1;



first1=dits;


PIEupdateTableRow(1,[Math.round(dits),Math.round(time1),Math.round(first1),Math.round(time),"Quiz","Quiz"]);
PIEupdateTableRow(2,[0,0,0,0,"Quiz","Quiz"]);
PIEupdateTableRow(3,[0,0,0,0,"Quiz","Quiz"]);





 PIEchangeDisplayText("Distance-m",dits);
 PIEchangeDisplayText("Time-s",time1);
 PIEchangeDisplayText("Level",1);

//PIEchangeDisplayText("Current speed-m/s",speed);

 PIEchangeDisplayText("Total time-s",time);
 PIEchangeDisplayText("Total Distance-m",first1);
 ///PIEchangeDisplayText("Average speed-m/s",speed);

//start.position.set(-970,272.39,-50);
go=1;






}

if(go==1)
{
 // start.position.set(-970,272.39,-50);

}

if((myBack1.position.z)>=-135 && second==0 && dc==0)
{
    

    if(myBack1.position.z>=-80)
    {

      //////////////////////1830//////////////30/////////////730
      //formula.position.set(30,72.39,-70);
      //formula.position.set(30,172.39,-70);
      //pass.position.set(30,72.39,-70);


      if(poi<(speed-1) || poi>(speed+1) || toi <(speed-1) || toi>(speed+1))
      {
        formula.position.set(30,72.39,-70);
        formula.position.set(30,172.39,-70);
        pass.position.set(30,72.39,-70);
        PIEstopAnimation();
        
      }

      else if(poi>=(speed-1)&& poi<=(speed+1) &&toi >=(speed-1)&& toi<=(speed+1))
      {
        PIEstartAnimation();
        myBack1.position.z=myBack1.position.z-0.3;
        myBack2.position.z=myBack2.position.z+0.3;
        formula.position.set(30,72.39,-70);
       pass.position.set(30,172.39,-70);



      }


    }
    else if(myBack1.position.z<-80)
    {

            formula.position.set(30,72.39,-70);
            myBack1.position.z=myBack1.position.z-0.3;
            myBack2.position.z=myBack2.position.z+0.3;
          
            PIEupdateTableRow(1,[Math.round(first1),Math.round(time1),Math.round(first1),Math.round(time),poi,toi]);


    }



}
else if(myBack1.position.z < -135 && second==0)
{
    second=1;
    PIEchangeInputText("AverageSpeed",0);
        PIEchangeInputText("TOTALAverageSpeed",0);


}

if(second==1 && third==0)
{
var dits= (car.position.x)*(300/680);

dc=(2*y);
rc=0.3*(y);
bc=bc+(3.6*y);

if(dits>=290)
{
  dits=300;
}
time2=dits/(dc*10);
if(y==1 && time2>=18 )
{
  time2=20;
}

else if(y==2 && time2>=8)
{
time2=10;
}
else if(y==3 && time2>=5)
{
  time2=5;
}

speed= dits/time2; 

toi=0;
poi=0;

time=time1+time2;
second2 = first1+dits;
avg = ((second2)/time);



PIEchangeDisplayText("Distance-m",dits);
PIEchangeDisplayText("Time-s",time2);
PIEchangeDisplayText("Level",2);

//PIEchangeDisplayText("Current speed-m/s",speed);

PIEchangeDisplayText("Total time-s",time);
PIEchangeDisplayText("Total Distance-m",second2);
///PIEchangeDisplayText("Average speed-m/s",avg);




PIEupdateTableRow(2,[Math.round(second2-first1),Math.round(time2),Math.round(second2),Math.round(time),"Quiz","Quiz"]);

 PIEchangeInputText("AverageSpeed",0);
        PIEchangeInputText("TOTALAverageSpeed",0);

}
if(car.position.x>=680 && car.position.x<=700)
{
    dc=0;
rc=0;
third=1;
second=6;
}

if(third==1)
{
   
    //signal=signal+1.5;
    if((poi<(speed-1) || poi>(speed+1) || toi <(avg-1) || toi>(avg+1))&& goo==6)
      {
        formula.position.set(30,72.39,-70);
        formula.position.set(30,172.39,-70);
        pass.position.set(30,72.39,-70);
       
        PIEstopAnimation();
        
        
      }

      else if(poi>=(speed-1) &&  poi<=(speed+1)  && toi >=(avg-1) && toi<=(avg+1))
      {
        PIEstartAnimation();
        formula.position.set(30,72.39,-70);
       pass.position.set(30,172.39,-70);
       signal=900;
       goo=-8;
       third=9;

      }



}




if(signal>=600 && signal<1200)
{
 green.position.y=42.39;
      formula.position.set(700,72.39,-70);
PIEupdateTableRow(2,[Math.round(second2-first1),Math.round(time2),Math.round(second2),Math.round(time),poi,toi]);

    red.position.y=181;
    third=0;
    signal=1300;

}


  if(green.position.y==42.39 && lastLock==0)
{
dc=5*(z/3);
rc=1.1*(z/3);
bc=bc+(9.4*(z/3));

dits=(car.position.x-680)*(450/(1150));

third3= dits+second2;

time3=dits/(dc*10);
speed= dits/time3; 


avg = (third3/time);
time=time2+time3+time1;


PIEchangeDisplayText("Distance-m",dits);
PIEchangeDisplayText("Time-s",time3);
PIEchangeDisplayText("Level",3);

PIEchangeDisplayText("Current speed-m/s",speed);

PIEchangeDisplayText("Total time-s",time);
PIEchangeDisplayText("Total Distance-m",third3);
PIEchangeDisplayText("Average speed-m/s",avg);

PIEupdateTableRow(3,[Math.round(dits),Math.round(time3),Math.round(third3),Math.round(time),"Quiz","Quiz"]);


speed= (third3-second2)/(time3);

}
if(car.position.x>=1830)/
{

lastLock=-5;


if(poi>= speed-2 && poi<= speed+2 && toi>=avg-2 && toi<=avg+2)
{PIEstartAnimation();
pass.position.set(1830,172.39,-70);
formula.position.set(1830,72.39,-70);
PIEupdateTableRow(3,[Math.round(dits),Math.round(time3),Math.round(third3),Math.round(time),poi,toi]);
istopped=0;

}
else if((poi< speed-2 || poi > speed+2 || toi<avg-2 || toi>avg+2)&&(formula.position.x!=1830))
{

  pass.position.set(1830,72.39,-70);
  PIEstopAnimation();
}



}
/*
dis3.position.set(1825,82.39,-70);

dc=0;
rc=0;
//green.position.y=167;
last=1;
if(key==5)
{
PIEstopAnimation();
}
*/
//key=0;

//threeFive.position.set(1825,164.39,-70);
 //formula.position.set(1830,72.39,-70);
     //dis3.position.set(1830,82.39,-70);

/*
if(key==5 && car.position.x>=1830)
{

formula.position.set(1800,72.39,-70);
  if(poi<(speed-1) || poi>(speed+1) || toi <(avg-1) || toi>(avg+1))
      {
       
        PIEstopAnimation();
        
      }

      else if(poi>=(speed-1)&& poi<=(speed+1) &&toi >=(avg-1)&& toi<=(avg+1))
      {
        PIEstartAnimation();
       key=300;

      }
}
else if(key>200 && car.position.x>=1830)
{
      formula.position.set(1800,172.39,-70);
      //PIEchangeDisplayText("Current speed-m/s",0);
      lastLock=09;
      pass.position.set(1830,72.39,-70);
      istopped=0;

}
*/

PIErender();


}