
var bcylIn;
var locator;
var hand;
var s=5;
/*
var text2 = document.createElement('div');
text2.style.position = 'absolute';
//text2.style.zIndex = -41;    // if you still don't see the label, try uncommenting this
text2.style.width = 90;
text2.style.height = 90;
text2.style.backgroundColor = "cyan";
text2.innerHTML = "- Voltage = 5V -";
text2.style.top = 100+ 'px';
text2.style.left = 70+ 'px';
document.body.appendChild(text2);
*/

var my0A;
var my2A;
var my5A;
var my10A;
var my20A;
var my25A;
var my35A;
var my45A;
var my60A;


var cur;
var k=-1;
/*
<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">0
  <input type="range" id="a" value="50">100
  +<input type="number" id="b" value="50">
  =<output name="x" for="a b"></output>
</form>
*/
/*

*/
//<script src="http://mrdoob.github.com/three.js/examples/fonts/helvetiker_regular.typeface.js"></script>
/*
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
ctx.font = 'italic 18px Arial';
ctx.textAlign = 'center';
ctx. textBaseline = 'middle';
ctx.fillStyle = 'red'; 
ctx.fillText('Your Text', 150, 50);`


*/

var tex = document.createElement('div');
tex.style.position = 'absolute';
tex.style.zIndex = 0;    // if you still don't see the label, try uncommenting this
tex.style.width = 70;
tex.style.height = 70;
tex.style.backgroundColor = "cyan";
tex.innerHTML = " 0 A";
tex.style.top = 250.0+ 'px';
tex.style.left =774+ 'px';
//document.body.appendChild(tex);


/*
var texw = document.createElement('div');
texw.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
texw.style.width = 40;
texw.style.height = 40;
texw.style.backgroundColor = "olive";
texw.innerHTML = " 300 W";
texw.style.top = 255+ 'px';
texw.style.left =995+ 'px';
document.body.appendChild(texw);  


var texw = document.createElement('div');
texw.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
texw.style.width = 40;
texw.style.height = 40;
texw.style.backgroundColor = "olive";
texw.innerHTML = " 225 W";
texw.style.top = 250+ 'px';
texw.style.left =1045+ 'px';
document.body.appendChild(texw);

var texw = document.createElement('div');
texw.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
texw.style.width = 40;
texw.style.height = 40;
texw.style.backgroundColor = "olive";
texw.innerHTML = " 175 W";
texw.style.top = 240+ 'px';
texw.style.left =1113+ 'px';
document.body.appendChild(texw);

var texw = document.createElement('div');
texw.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
texw.style.width = 40;
texw.style.height = 40;
texw.style.backgroundColor = "olive";
texw.innerHTML = " 125 W";
texw.style.top = 225+ 'px';
texw.style.left =1195+ 'px';
document.body.appendChild(texw);

var texw = document.createElement('div');
texw.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
texw.style.width = 40;
texw.style.height = 40;
texw.style.backgroundColor = "olive";
texw.innerHTML = " 50 W";
texw.style.top = 440+ 'px';
texw.style.left =1045+ 'px';
document.body.appendChild(texw);

var texw = document.createElement('div');
texw.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
texw.style.width = 40;
texw.style.height = 40;
texw.style.backgroundColor = "olive";
texw.innerHTML = " 10 W";
texw.style.top = 468+ 'px';
texw.style.left =1195+ 'px';
document.body.appendChild(texw);

var texw = document.createElement('div');
texw.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
texw.style.width = 40;
texw.style.height = 40;
texw.style.backgroundColor = "olive";
texw.innerHTML = " 25 W";
texw.style.top = 455+ 'px';
texw.style.left =1113+ 'px';
document.body.appendChild(texw);

var texw = document.createElement('div');
texw.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
texw.style.width = 40;
texw.style.height = 40;
texw.style.backgroundColor = "olive";
texw.innerHTML = " 100 W";
texw.style.top = 430+ 'px';
texw.style.left =990+ 'px';
document.body.appendChild(texw);
*/


/*


1) Create a table elementb with position = absolute (document.createElement)
2) Append it to document.body.appendChild
3) Position it with pixel positioning
4) Use insertRow and incertCell functions to insert rows and cells
5) Use innerHTML to write values.


*/

var switchButton;
var bulb;
var sliderWattage;
var on_off;
var Navigator;


var Current;
var wattage;

var switchCylinder;
var bulbCylinder;


var  cylIn;
var  cylIn1;
var  cylIn2;
var  cylIn3;
var  cylIn4;
var  cylIn5;
var  cylIn6;
var  cylIn7;


var cylOut;
var cylOut1;
var cylOut2;
var cylOut3;
var cylOut4;
var cylOut5;
var cylOut6;
var cylOut7;


var torus;
var t1orus;
var t2orus;
var t3orus;
var t4orus;
var t5orus;
var t6orus;
var t7orus;


var torus1;
var t1orus1;
var t2orus1;
var t3orus1;
var t4orus1;
var t5orus1;
var t6orus1;
var t7orus1;


var torus4;
var t1orus4;
var t2orus4;
var t3orus4;
var t4orus4;
var t5orus4;
var t6orus4;
var t7orus4;


var torus3;
var t1orus3;
var t2orus3;
var t3orus3;
var t4orus3;
var t5orus3;
var t6orus3;
var t7orus3;


var torus5;
var t1orus5;
var t2orus5;
var t3orus5;
var t4orus5;
var t5orus5;
var t6orus5;
var t7orus5;


var bulbb;
var bulbb1;
var bulbb2;
var bulbb3;
var bulbb4;
var bulbb5;
var bulbb6;
var bulbb7;
function myBulbbDrag(element,newpos)
{

 bulbb.position.x= newpos.x;
 bulbb.position.y= newpos.y;
 //k=-1;
 if(bulbb.position.y>=16)
 {
   y=11.4;
     helping=2;

  //bulbb.position.set(54,5.6,29);
   bulbb1.position.set(54,5.6,29-14);
   bulbb2.position.set(54,5.6,29-30);
 bulbb3.position.set(54,5.6,29-45);
 bulbb4.position.set(54,5.6+y,29);
 bulbb5.position.set(54,5.6+y,29-14);
 bulbb6.position.set(54,5.6+y,29-30);
 bulbb7.position.set(54,5.6+y,29-45);
  bulbb.position.y=25.6;
  bulbb.position.x=29;
  k=0;
 if(to_bulb==1)
 {
  PIEstartAnimation();
 }


 }
 bulbb.position.z= newpos.z;
 ruhi=k;

}
function myBulbb1Drag(element,newpos)
{
 //54,5.6,29
 //29,25.6
//k=-1;
 bulbb1.position.x= newpos.x;
 bulbb1.position.y= newpos.y;
 if(bulbb1.position.y>=16)
 {
  y=11.4;
    helping=2;

  bulbb.position.set(54,5.6,29);
  // bulbb1.position.set(54,5.6,29-14);
   bulbb2.position.set(54,5.6,29-30);
 bulbb3.position.set(54,5.6,29-45);
 bulbb4.position.set(54,5.6+y,29);
 bulbb5.position.set(54,5.6+y,29-14);
 bulbb6.position.set(54,5.6+y,29-30);
 bulbb7.position.set(54,5.6+y,29-45);
  bulbb1.position.y=28.6;
  bulbb1.position.x=31.6;
  k=1;
  if(to_bulb==1)
 {
  PIEstartAnimation();
 }
 }
 bulbb1.position.z= newpos.z;
 ruhi=k;
}
function myBulbb2Drag(element,newpos)
{
 //k=-1;
   helping=2;

 bulbb2.position.x= newpos.x;
 bulbb2.position.y= newpos.y;
 if(bulbb2.position.y>=16)
 {
   y=11.4;

  bulbb.position.set(54,5.6,29);
   bulbb1.position.set(54,5.6,29-14);
  // bulbb2.position.set(54,5.6,29-30);
 bulbb3.position.set(54,5.6,29-45);
 bulbb4.position.set(54,5.6+y,29);
 bulbb5.position.set(54,5.6+y,29-14);
 bulbb6.position.set(54,5.6+y,29-30);
 bulbb7.position.set(54,5.6+y,29-45);
  bulbb2.position.y=31;
  bulbb2.position.x=34.2;
if(to_bulb==1)
 {
  PIEstartAnimation();
 }

  k=2;
 }
 bulbb2.position.z= newpos.z;
 
ruhi=k;
}
function myBulbb3Drag(element,newpos)
{

 bulbb3.position.x= newpos.x;
 bulbb3.position.y= newpos.y;
 if(bulbb3.position.y>=16)
 {  helping=2;

 y=11.4;
  bulbb.position.set(54,5.6,29);
   bulbb1.position.set(54,5.6,29-14);
   bulbb2.position.set(54,5.6,29-30);
 //bulbb3.position.set(54,5.6,29-45);
 bulbb4.position.set(54,5.6+y,29);
 bulbb5.position.set(54,5.6+y,29-14);
 bulbb6.position.set(54,5.6+y,29-30);
 bulbb7.position.set(54,5.6+y,29-45);

  bulbb3.position.y=33.7;
  bulbb3.position.x=37.2;

if(to_bulb==1)
 {
  PIEstartAnimation();
 }

  k=3;
 }
 bulbb3.position.z= newpos.z;
ruhi=k;
}
function myBulbb4Drag(element,newpos)
{

 bulbb4.position.x= newpos.x;
 bulbb4.position.y= newpos.y;
 if(bulbb4.position.y>=22)
 {  helping=2;

   y=11.4;
  bulbb.position.set(54,5.6,29);
   bulbb1.position.set(54,5.6,29-14);
   bulbb2.position.set(54,5.6,29-30);
 bulbb3.position.set(54,5.6,29-45);
 //bulbb4.position.set(54,5.6+y,29);
 bulbb5.position.set(54,5.6+y,29-14);
 bulbb6.position.set(54,5.6+y,29-30);
 bulbb7.position.set(54,5.6+y,29-45);
  bulbb4.position.y=25.6;
  bulbb4.position.x=29;
if(to_bulb==1)
 {
  PIEstartAnimation();
 }

  k=4;
 }
 bulbb4.position.z= newpos.z;
ruhi=k;
}
function myBulbb5Drag(element,newpos)
{

 bulbb5.position.x= newpos.x;
 bulbb5.position.y= newpos.y;
 if(bulbb5.position.y>=22)
 {  helping=2;

   y=11.4;
  bulbb.position.set(54,5.6,29);
   bulbb1.position.set(54,5.6,29-14);
   bulbb2.position.set(54,5.6,29-30);
 bulbb3.position.set(54,5.6,29-45);
 bulbb4.position.set(54,5.6+y,29);
 //bulbb5.position.set(54,5.6+y,29-14);
 bulbb6.position.set(54,5.6+y,29-30);
 bulbb7.position.set(54,5.6+y,29-45);
  bulbb5.position.y=28.6;
  bulbb5.position.x=31.6;

if(to_bulb==1)
 {
  PIEstartAnimation();
 }

  k=5;
 }
 bulbb5.position.z= newpos.z;
 ruhi=k;
}
function myBulbb6Drag(element,newpos)
{

 bulbb6.position.x= newpos.x;
 bulbb6.position.y= newpos.y;
 if(bulbb6.position.y>=22)
 {
   y=11.4;
  bulbb.position.set(54,5.6,29);
   bulbb1.position.set(54,5.6,29-14);
   bulbb2.position.set(54,5.6,29-30);
 bulbb3.position.set(54,5.6,29-45);
 bulbb4.position.set(54,5.6+y,29);
 bulbb5.position.set(54,5.6+y,29-14);
 //bulbb6.position.set(54,5.6+y,29-30);
 bulbb7.position.set(54,5.6+y,29-45);
  bulbb6.position.y=31;
  bulbb6.position.x=34.2;
  k=6;
if(to_bulb==1)
 {
  PIEstartAnimation();
 }

    helping=2;

 }
 bulbb6.position.z= newpos.z;
ruhi=k;
}
function myBulbb7Drag(element,newpos)
{

 bulbb7.position.x= newpos.x;
 bulbb7.position.y= newpos.y;
 if(bulbb7.position.y>=22 )
 {
   y=11.4;
  bulbb.position.set(54,5.6,29);
   bulbb1.position.set(54,5.6,29-14);
   bulbb2.position.set(54,5.6,29-30);
 bulbb3.position.set(54,5.6,29-45);
 bulbb4.position.set(54,5.6+y,29);
 bulbb5.position.set(54,5.6+y,29-14);
 bulbb6.position.set(54,5.6+y,29-30);
// bulbb7.position.set(54,5.6+y,29-45);
  bulbb7.position.y=33.7;
  bulbb7.position.x=37.2;
  //bulbb7.position.z=-70;
  k=7;
  helping=2;
if(to_bulb==1)
 {
  PIEstartAnimation();
 }


 }
 bulbb7.position.z= newpos.z;
 ruhi=k;

}

var ruhi;
var f;
var to_bulb=0;
function mySwqitchDrag(element, newpos)
{
  //16, -7.85, -6.8
 swqitchCylinder.position.x=newpos.x;
  swqitchCylinder.position.y=newpos.y;

  if( newpos.y<-7.9)
  {
    swqitchCylinder.rotation.z= 0.5*Math.PI;
    swqitchCylinder.position.x= 16;
    swqitchCylinder.position.y= -8.1;
    k=-1;
    f=1;
    to_bulb=1;
    if(helping==2)
    {PIEstartAnimation();}
  }
  else
  {
    helping=0;
    swqitchCylinder.rotation.z= 0.2*Math.PI;
    swqitchCylinder.position.x= 16;
    swqitchCylinder.position.y= -7.85;
    k=-1;
    f=0;
    Current=0;
lightIt(0);
//lightIt(1);
bulbappear(0);
k=-1;
ruhi=k;
f=0;
swqitchCylinder.position.set(16,-7.85,-6.8);
    swqitchCylinder.rotation.z=0.2 *Math.PI;
//switchCylinder.rotation.z=0.5*Math.PI;
//switchCylinder.rotation.z=0.2*Math.PI;
y=11.4;
  bulbb.position.set(54,5.6,29);
   bulbb1.position.set(54,5.6,29-14);
   bulbb2.position.set(54,5.6,29-30);
 bulbb3.position.set(54,5.6,29-45);
 bulbb4.position.set(54,5.6+y,29);
 bulbb5.position.set(54,5.6+y,29-14);
 bulbb6.position.set(54,5.6+y,29-30);
bulbb7.position.set(54,5.6+y,29-45);
/*
t2ext.innerHTML= "0 A";

 t1ext2.innerHTML="0 W";
 */
tex.innerHTML = " 0 A";
//locator.postion.z=130;
//locator.position.y=170.12;
Navigator.rotation.z=0*Math.PI; 
//hand.position.y=27.5;
//switchCylinder.position.x=16;
swqitchCylinder.position.set(16,-7.85,-6.8);
    swqitchCylinder.rotation.z=0.2 *Math.PI;
//PIErender();
volt=5;







my2A.position.set(129.5,25,-70);
my5A.position.set(129.5,25,-70);
my10A.position.set(129.5,25,-70);
my20A.position.set(129.5,25,-70);
my25A.position.set(129.5,25,-70);
my35A.position.set(129.5,25,-70);
my45A.position.set(129.5,25,-70);
my60A.position.set(129.5,25,-70);
my0A.position.set(29.5,25,-70);

  if(k<0 || k>=7)
  {PIEstopAnimation();}

  }
   swqitchCylinder.position.z=newpos.z;


}


function mySwitchDrag(element, newpos)
{
  16, -9.3, -6.8
    switchCylinder.position.y = newpos.y;
    switchCylinder.position.x = newpos.x;

    if (newpos.x < 15.5 || newpos.y<-9.3)
     { switchCylinder.position.set(16, -9.3, -6.8);
      switchCylinder.rotation.z=0.5 *Math.PI;
        //Current=1;
        k=-1;
        f=1;}

   
    else if(newpos.x >= 15.5 || newpos.y<-9.3)
     { switchCylinder.position.set(16, -9.3, -6.8);
        switchCylinder.rotation.z=0.2 *Math.PI;
        //Current=0;
        k=-1;
        f=0;
     } 
    

    switchCylinder.position.z = newpos.z;

    //myBall.position.set(myBallX, myBallY, myBallZ);
}

////42.2    38.4      -44.9
var n;
function bulbappear(ni)
{
var n;
n=ni;

  if(n==1)
  {
    bcylIn.position.set(42.2,38.4,-44.9);
  }
  else 
  {
  bcylIn.position.set(42.2,138.4,-44.9);

  }
}

var spotLight1;
var spotLight;
function lightIt(n)
{
  //-6.2   -4.5
  if(n==1){
spotLight.position.set(0,-6.2,-4.5);
  spotLight1.position.set(0,-6.2,-4.5);
  }
  else{
  spotLight.position.set(0,106.2,-104.5);
  spotLight1.position.set(0,106.2,-104.5);
  }

}



var helpContent;

function initialiseHelp()
{



    helpContent="";
    helpContent = helpContent + "<h2>Current through bulbs of different wattages</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
        helpContent = helpContent + "<p>The initial stage of the experiment shows a dark room with the the circuit in switched off state. The bulbs on the right side in the cupboard are  the bulbs of different wattages. On the left is the observation table of current and power of bulbs during the process for a constant voltage of 5V. On the back wall of the room, ammeter is present which shows the deflection in current flowing throught the circuit. For higher values of current higher deflection can be observed. The battery is also present on the backwall of the room.</p>";
 helpContent = helpContent + "<h3>Operation:</h3>";
 helpContent = helpContent + "<p>Hold and rotate the switch to the left side, so that the circuit is closed. Now press start after putting a bulb in the holder,to observe the deflection in ammeter automatically, reading of current in ammeter due to bulb of selected wattage. If you want reading in a particular wattage, drag the bulb to the slot during the eperiment , when current is on and experiment is on or when the experiment is not started and current is  off</p>";
helpContent = helpContent + "<h2>Happy Experimenting</h2>";
PIEupdateHelp(helpContent);
}

var infoContent;

function initialiseInfo()
{

    infoContent =  "";
    infoContent = infoContent + "<h2>Current due to bulbs of different wattages</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows current due to bulbs of different wattages.</p>";
    infoContent = infoContent + "<h3>Current</h3>";
    infoContent = infoContent + "<p>At a constant voltage(5V here), current,i is directly proportional to Power , denoted by Watts(W).By the formula P=IV, Power is the product of current and voltage. The current value is calculated in Amperes and displayed on the observation table</p>";
     infoContent = infoContent + "<h3>Ammeter</h3>";
    infoContent = infoContent + "<p>At a constan voltage,when a higher wattage bulb is connected to the circuit , a greater deflection in ammeter can be observed due to greater current.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);

}



function handleV(newvalue)
{
 //Vdefault=5; 
}


var volt=5;
function loadExperimentElements()

{

PIEsetExperimentTitle("Current through bulbs of different wattages");
PIEsetDeveloperName("Reddypalli RuhiTaj");
PIEhideControlElement();
initialiseHelp();
initialiseInfo();

   // initialiseControlVariables();
  
  PIEaddInputSlider("Voltage V",5 ,handleV, 5, 5, 5);
  PIEaddDisplayText("Voltage V", 5);

//initialiseControls();
//PIEaddInputSlider("Voltage V", 5, handleX, 5, 5, 1);
//PIEaddDisplayText("Voltage V", volt);
//PIEaddDisplayCheckbox("Voltageh V", 5, handleX);

/*

var Text2D = require('three-text2d').Text2D

var text = new Text2D("Hello world!", { font: '30px Arial', fillStyle: '#000000', antialias: true })
PIEaddElement(text); 

*/

var cool;

var loader = new THREE.FontLoader();
loader.load('font/optimer_regular.typeface.js',function (ruhi) {
  cool=ruhi;
var textGeometry = new THREE.TextGeometry("300 W        225 W           175 W        125 W",{

  font:cool,

  size:1.25,
  height:0.25,
  //curveSegments:12,
  bevelThickness:0.1,
  bevelSize:0.1,
  //bevelEnabled:true
});

var textMaterial = new THREE.MeshBasicMaterial({color: 0x000000, specular: 0x000000});
var mesh = new THREE.Mesh(textGeometry,textMaterial);
mesh.position.set(56.5,21.5,29-56);
mesh.rotation.y=-0.38*Math.PI;
PIEaddElement(mesh);
mesh.castShadow=false;

var textGeometry = new THREE.TextGeometry("100 W        50 W          25 W           10 W",{

  font:cool,

  size:1.25,
  height:0.25,
  //curveSegments:12,
  bevelThickness:0.1,
  bevelSize:0.1,
  //bevelEnabled:true
});

var textMaterial = new THREE.MeshBasicMaterial({color: 0x000000, specular: 0x000000});
var mesh = new THREE.Mesh(textGeometry,textMaterial);
mesh.position.set(56.5,8,29-56);
mesh.rotation.y=-0.38*Math.PI;
PIEaddElement(mesh);
mesh.castShadow=false;

});


/*

var loader = new THREE.FontLoader();
loader.load('font/optimer_regular.typeface.js',function (font) {
var textGeometry = new THREE.TextGeometry("100 W        50 W          25 W           10 W",{

  font:font,

  size:1.25,
  height:0.25,
  //curveSegments:12,
  bevelThickness:0.1,
  bevelSize:0.1,
  //bevelEnabled:true
});

var textMaterial = new THREE.MeshBasicMaterial({color: 0x000000, specular: 0x000000});
var mesh = new THREE.Mesh(textGeometry,textMaterial);
mesh.position.set(56.5,8,29-56);
mesh.rotation.y=-0.38*Math.PI;
PIEaddElement(mesh);
mesh.castShadow=false;

});

*/
var track=9;
var y=11.4;

var loader = new THREE.TextureLoader();
 var texture = loader.load('images/bulb.png',{}, function() {PIErender()});
 texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
 texture.repeat.set( 1, 1 );
 texture.anisotropy = 1;

 var material = new THREE.MeshLambertMaterial( { transparent:true ,color:0xc0c0c0, map: texture, alpha:true, opacity:true } );
 var geometry = new THREE.PlaneBufferGeometry( 2.1,3.2);
 bulbb = new THREE.Mesh( geometry, material );
 //54,5.6,29
 //29,25.6
 bulbb.position.set(54,5.6,29);
// bus.transparent=true;
 bulbb.receiveShadow=true;
 PIEaddElement(bulbb);
 PIEdragElement(bulbb);
  PIEsetDrag(bulbb, myBulbbDrag);


bulbb1 = new THREE.Mesh( geometry, material );
 bulbb1.position.set(54,5.6,29-14);
// bus.transparent=true;
 bulbb1.receiveShadow=true;
 PIEaddElement(bulbb1);
  PIEdragElement(bulbb1);
  PIEsetDrag(bulbb1, myBulbb1Drag);


bulbb2 = new THREE.Mesh( geometry, material );
 bulbb2.position.set(54,5.6,29-30);
// bus.transparent=true;
 bulbb2.receiveShadow=true;
 PIEaddElement(bulbb2);
  PIEdragElement(bulbb2);
  PIEsetDrag(bulbb2, myBulbb2Drag);




bulbb3 = new THREE.Mesh( geometry, material );
 bulbb3.position.set(54,5.6,29-45);
// bus.transparent=true;
 bulbb3.receiveShadow=true;
 PIEaddElement(bulbb3);
  PIEdragElement(bulbb3);
  PIEsetDrag(bulbb3, myBulbb3Drag);


 bulbb4 = new THREE.Mesh( geometry, material );
 bulbb4.position.set(54,5.6+y,29);
// bus.transparent=true;
 bulbb4.receiveShadow=true;
 PIEaddElement(bulbb4);
  PIEdragElement(bulbb4);
  PIEsetDrag(bulbb4, myBulbb4Drag);


bulbb5 = new THREE.Mesh( geometry, material );
 bulbb5.position.set(54,5.6+y,29-14);
// bus.transparent=true;
 bulbb5.receiveShadow=true;
 PIEaddElement(bulbb5);
  PIEdragElement(bulbb5);
  PIEsetDrag(bulbb5, myBulbb5Drag);




bulbb6 = new THREE.Mesh( geometry, material );
 bulbb6.position.set(54,5.6+y,29-30);
// bus.transparent=true;
 bulbb6.receiveShadow=true;
 PIEaddElement(bulbb6);
  PIEdragElement(bulbb6);
  PIEsetDrag(bulbb6, myBulbb6Drag);


bulbb7 = new THREE.Mesh( geometry, material );
 bulbb7.position.set(54,5.6+y,29-45);
// bus.transparent=true;
 bulbb7.receiveShadow=true;
 PIEaddElement(bulbb7);
  PIEdragElement(bulbb7);
  PIEsetDrag(bulbb7, myBulbb7Drag);

var myWallpaper;

/*
var loader = new THREE.TextureLoader();
 var texture = loader.load('images/ok.jpg',{}, function() {PIErender()});
 texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
 texture.repeat.set( 1, 1 );
 texture.anisotropy = 1;
 */
  var texture = THREE.ImageUtils.loadTexture('images/ok.jpg', {}, function() {PIErender();});

 var material = new THREE.MeshLambertMaterial( { color: 0xffffff, specular: 0xfff9cc, map: texture } );
 var geometry = new THREE.PlaneBufferGeometry( 98.44, 49);
 myWallpaper = new THREE.Mesh( geometry, material );
 myWallpaper.position.set(18,15,-79.7);
 myWallpaper.receiveShadow=true;

 PIEaddElement(myWallpaper);



/*

var myWallpaper;

//var loader = new THREE.TextureLoader();
 var texture = loader.load('images/ok.jpg');
 texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
 texture.repeat.set( 1, 1 );
 texture.anisotropy = 1;
 var material = new THREE.MeshLambertMaterial( { color: 0xfff9cc, specular: 0xfff9cc, map: texture } );
// var geometry = new THREE.PlaneBufferGeometry( 98.44, 49);

*/

 geometry = new THREE.BoxGeometry( 100,12, 220);
   // material = new THREE.MeshLambertMaterial( {color: 0xaaaaaa} );
    myFloor  = new THREE.Mesh( geometry, material );
    // myFloor.lookAt(new THREE.Vector3(0,1,0));
    myFloor.position.set(18, -15.5, -76);
    myFloor.receiveShadow = true;
    PIEaddElement(myFloor);
    /*

 var texture = loader.load('images/ok.jpg');
 texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
 texture.repeat.set( 1, 1 );
 texture.anisotropy = 1;
 var material = new THREE.MeshLambertMaterial( { color: 0xfff9cc, specular: 0xfff9cc, map: texture } );
 */
  geometry = new THREE.BoxGeometry( 12,50, 240 );
  //  material = new THREE.MeshLambertMaterial( {color: 0xaa0000} );
    myLeft = new THREE.Mesh( geometry, material );
    myLeft.position.set(-35, 15, -79.7);
    myLeft.receiveShadow = true;
    PIEaddElement(myLeft);

/*
// 27.5          24 21.5 19 
 var texture = loader.load('images/student.png');
 texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
 texture.repeat.set( 1, 1 );
 texture.anisotropy = 1;
 var material = new THREE.MeshPhysicalMaterial( { color: 0xfff9cc, specular: 0xfff9cc, map: texture } );
 material.transparent=true;
  geometry = new THREE.PlaneGeometry( 3.5,3, 240 );
  //  material = new THREE.MeshLambertMaterial( {color: 0xaa0000} );
    //hand = new THREE.Mesh( geometry, material );
   // hand.position.set(-23, 27.5, 50.7);
   // hand.receiveShadow = true;
   // myLeft.rotation.y=-0.5*Math.PI;
    //PIEaddElement(hand);
*/

/*
 var texture = loader.load('images/ok.jpg');
 texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
 texture.repeat.set( 1, 1 );
 texture.anisotropy = 1;
 var material = new THREE.MeshLambertMaterial( { color: 0xfff9cc, specular: 0xfff9cc, map: texture } );
 */
  geometry = new THREE.BoxGeometry( 12,55, 240 );
  //  material = new THREE.MeshLambertMaterial( {color: 0xaa0000} );
    myRight = new THREE.Mesh( geometry, material );
    myRight.position.set(75, 16, -79.7);
    myRight.receiveShadow = true;
    PIEaddElement(myRight);


/*


 var texture = loader.load('images/ok.jpg');
 texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
 texture.repeat.set( 1, 1 );
 texture.anisotropy = 1;
 var material = new THREE.MeshLambertMaterial( { color: 0xfff9cc, specular: 0xfff9cc, map: texture } );
 */

 geometry = new THREE.BoxGeometry( 118,15, 220);
   // material = new THREE.MeshLambertMaterial( {color: 0xaaaaaa} );
    myCeiling = new THREE.Mesh( geometry, material );
    // myFloor.lookAt(new THREE.Vector3(0,1,0));
    myCeiling.position.set(19.2, 51, -79.7);
    myCeiling.receiveShadow = true;
    PIEaddElement(myCeiling);
/*
 loader = new THREE.TextureLoader();
 var texture = loader.load('images/cupboard.jpg',{}, function() {PIErender()});
 texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
 texture.repeat.set( 1, 1 );
 texture.anisotropy = 1;*/
 var texture = THREE.ImageUtils.loadTexture('images/cupboard.jpg', {}, function() {PIErender();});
 var material = new THREE.MeshLambertMaterial( { color: 0xfff9cc, specular: 0xfff9cc, map: texture } );

 geometry = new THREE.BoxGeometry( 8,1, 100);
   // material = new THREE.MeshLambertMaterial( {color: 0xaaaaaa} );
    myCeiling1 = new THREE.Mesh( geometry, material );
    // myFloor.lookAt(new THREE.Vector3(0,1,0));
    myCeiling1.position.set(59.2,15 , -19.7);
    myCeiling1.receiveShadow = true;
    
    PIEaddElement(myCeiling1);

/*

 var texture = loader.load('images/cupboard.jpg');
 texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
 texture.repeat.set( 1, 1 );
 texture.anisotropy = 1;
 var material = new THREE.MeshLambertMaterial( { color: 0xfff9cc, specular: 0xfff9cc, map: texture } );
 */

 geometry = new THREE.BoxGeometry( 8,1, 100);
   // material = new THREE.MeshLambertMaterial( {color: 0xaaaaaa} );
    myCeiling2 = new THREE.Mesh( geometry, material );
    // myFloor.lookAt(new THREE.Vector3(0,1,0));
    myCeiling2.position.set(59.2,2 , -19.7);
    myCeiling2.receiveShadow = true;
    PIEaddElement(myCeiling2);


PIErender();






loader = new THREE.TextureLoader();
var texture = loader.load( 'images/2a.png' );
texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
 texture.repeat.set( 1, 1 );
texture.anisotropy = 96;
 var material = new THREE.MeshPhysicalMaterial( { color: 0xffffff, specular: 0xffffff, map: texture } );
var geometry = new THREE.PlaneBufferGeometry( 5, 2.3);
 my2A = new THREE.Mesh(geometry,material);
my2A.position.set(129.5,25,-70);
    PIEaddElement(my2A);


loader = new THREE.TextureLoader();
var texture = loader.load( 'images/5a.png' );
texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
 texture.repeat.set( 1, 1 );
texture.anisotropy = 96;
 var material = new THREE.MeshPhysicalMaterial( { color: 0xffffff, specular: 0xffffff, map: texture } );
//var geometry = new THREE.PlaneBufferGeometry( 5, 2.3);
my5A = new THREE.Mesh(geometry,material);
my5A.position.set(129.5,25,-70);
    PIEaddElement(my5A);


loader = new THREE.TextureLoader();
var texture = loader.load( 'images/10a.png' );
texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
 texture.repeat.set( 1, 1 );
texture.anisotropy = 96;
 var material = new THREE.MeshPhysicalMaterial( { color: 0xffffff, specular: 0xffffff, map: texture } );
//var geometry = new THREE.PlaneBufferGeometry( 5, 2.3);
my10A = new THREE.Mesh(geometry,material);
my10A.position.set(129.5,25,-70);
    PIEaddElement(my10A);


loader = new THREE.TextureLoader();
var texture = loader.load( 'images/20a.png' );
texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
 texture.repeat.set( 1, 1 );
texture.anisotropy = 96;
 var material = new THREE.MeshPhysicalMaterial( { color: 0xffffff, specular: 0xffffff, map: texture } );
//var geometry = new THREE.PlaneBufferGeometry( 5, 2.3);
my20A = new THREE.Mesh(geometry,material);
my20A.position.set(129.5,25,-70);
    PIEaddElement(my20A);


loader = new THREE.TextureLoader();
var texture = loader.load( 'images/25a.png' );
texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
 texture.repeat.set( 1, 1 );
texture.anisotropy = 96;
var material = new THREE.MeshPhysicalMaterial( { color: 0xffffff, specular: 0xffffff, map: texture } );
//var geometry = new THREE.PlaneBufferGeometry( 5, 2.3);
my25A = new THREE.Mesh(geometry,material);
my25A.position.set(129.5,25,-70);
    PIEaddElement(my25A);


loader = new THREE.TextureLoader();
var texture = loader.load( 'images/35a.png' );
texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
 texture.repeat.set( 1, 1 );
texture.anisotropy = 96;
 var material = new THREE.MeshPhysicalMaterial( { color: 0xffffff, specular: 0xffffff, map: texture } );
//var geometry = new THREE.PlaneBufferGeometry( 5, 2.3);
 my35A = new THREE.Mesh(geometry,material);
my35A.position.set(129.5,25,-70);
    PIEaddElement(my35A);




loader = new THREE.TextureLoader();
var texture = loader.load( 'images/45a.png' );
texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
 texture.repeat.set( 1, 1 );
texture.anisotropy = 96;
 var material = new THREE.MeshPhysicalMaterial( { color: 0xffffff, specular: 0xffffff, map: texture } );
//var geometry = new THREE.PlaneBufferGeometry( 5, 2.3);
 my45A = new THREE.Mesh(geometry,material);
my45A.position.set(129.5,25,-70);
    PIEaddElement(my45A);




loader = new THREE.TextureLoader();
var texture = loader.load( 'images/60a.png' );
texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
 texture.repeat.set( 1, 1 );
texture.anisotropy = 96;
 var material = new THREE.MeshPhysicalMaterial( { color: 0xffffff, specular: 0xffffff, map: texture } );
//var geometry = new THREE.PlaneBufferGeometry( 5, 2.3);
 my60A = new THREE.Mesh(geometry,material);
my60A.position.set(129.5,25,-70);
    PIEaddElement(my60A);




 var texture = THREE.ImageUtils.loadTexture('images/0a.png', {}, function() {PIErender();});
var material = new THREE.MeshLambertMaterial( { color: 0xffffff, specular: 0xffffff, map: texture } );
   // material = new THREE.MeshLambertMaterial( {color: 0xaaaaaa} );
   //var geometry = new THREE.PlaneBufferGeometry( 5, 2.3);
my0A = new THREE.Mesh(geometry,material);
my0A.position.set(29.5,25,-70);
    PIEaddElement(my0A);

/*
 var texture = THREE.ImageUtils.loadTexture('images/300w.png', {}, function() {PIErender();});
 var material = new THREE.MeshLambertMaterial( { color: 0xffffff, specular: 0xffffff, map: texture } );
    ///material = new THREE.MeshLambertMaterial( {color: 0xaaaaaa} );
  // var geometry = new THREE.PlaneBufferGeometry( 5, 2.3);
myW = new THREE.Mesh(geometry,material);
myW.position.set(66,25,-60);
    PIEaddElement(myW);


var texture = THREE.ImageUtils.loadTexture('images/225W.png', {}, function() {PIErender();});
 var material = new THREE.MeshLambertMaterial( { color: 0xffffff, specular: 0xffffff, map: texture } );
   // material = new THREE.MeshLambertMaterial( {color: 0xaaaaaa} );
  // var geometry = new THREE.PlaneBufferGeometry( 5, 2.3);
myW = new THREE.Mesh(geometry,material);
myW.position.set(66,25,-40);
    PIEaddElement(myW);



var texture = THREE.ImageUtils.loadTexture('images/175W.png', {}, function() {PIErender();});
 var material = new THREE.MeshLambertMaterial( { color: 0xffffff, specular: 0xffffff, map: texture } );
   // material = new THREE.MeshLambertMaterial( {color: 0xaaaaaa} );
  // var geometry = new THREE.PlaneBufferGeometry( 5, 2.3);
myW = new THREE.Mesh(geometry,material);
myW.position.set(66,25,-20);
    PIEaddElement(myW);




var texture = THREE.ImageUtils.loadTexture('images/125W.png', {}, function() {PIErender();});
 var material = new THREE.MeshLambertMaterial( { color: 0xffffff, specular: 0xffffff, map: texture } );
   // material = new THREE.MeshLambertMaterial( {color: 0xaaaaaa} );
   //var geometry = new THREE.PlaneBufferGeometry( 5, 2.3);
myW = new THREE.Mesh(geometry,material);
myW.position.set(66,25,0);
    PIEaddElement(myW);


////////////////////////////////////////////////////////////



 var texture = THREE.ImageUtils.loadTexture('images/100W.png', {}, function() {PIErender();});
 var material = new THREE.MeshLambertMaterial( { color: 0xffffff, specular: 0xffffff, map: texture } );
   // material = new THREE.MeshLambertMaterial( {color: 0xaaaaaa} );
  // var geometry = new THREE.PlaneBufferGeometry( 5, 2.3);
myW = new THREE.Mesh(geometry,material);
myW.position.set(66,10,-60);
    PIEaddElement(myW);


var texture = THREE.ImageUtils.loadTexture('images/50W.png', {}, function() {PIErender();});
 var material = new THREE.MeshLambertMaterial( { color: 0xffffff, specular: 0xffffff, map: texture } );
   // material = new THREE.MeshLambertMaterial( {color: 0xaaaaaa} );
   //var geometry = new THREE.PlaneBufferGeometry( 5, 2.3);
myW = new THREE.Mesh(geometry,material);
myW.position.set(66,10,-40);
    PIEaddElement(myW);



var texture = THREE.ImageUtils.loadTexture('images/25W.png', {}, function() {PIErender();});
 var material = new THREE.MeshLambertMaterial( { color: 0xffffff, specular: 0xffffff, map: texture } );
   // material = new THREE.MeshLambertMaterial( {color: 0xaaaaaa} );
  // var geometry = new THREE.PlaneBufferGeometry( 5, 2.3);
myW = new THREE.Mesh(geometry,material);
myW.position.set(66,10,-20);
    PIEaddElement(myW);




var texture = THREE.ImageUtils.loadTexture('images/10w.png', {}, function() {PIErender();});
 var material = new THREE.MeshLambertMaterial( { color: 0xffffff, specular: 0xffffff, map: texture } );
   // material = new THREE.MeshLambertMaterial( {color: 0xaaaaaa} );
  // var geometry = new THREE.PlaneBufferGeometry( 5, 2.3);
myW = new THREE.Mesh(geometry,material);
myW.position.set(66,10,0);
    PIEaddElement(myW);









*/



/*
//  Bulb from here

*/

////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////

geometry = new THREE.TorusGeometry( 2.2, 0.7, 16, 100 ); 
   material = new THREE.MeshPhysicalMaterial( { color: 0x696969 } );
   var up = new THREE.Mesh( geometry, material );
   //torus.position.set(i,16.397,0);
   up.castShadow = false;
   up.rotation.x= 0.5*Math.PI;
   up.position.x=up.position.x+42.3;
   up.position.y=up.position.y+42;
   up.position.z= up.position.z-45;
    PIEaddElement(up);

geometry = new THREE.TorusGeometry( 2, 0.5, 16, 100 ); 
   material = new THREE.MeshPhysicalMaterial( { color: 0x696969} );
   var up = new THREE.Mesh( geometry, material );
   //torus.position.set(i,16.397,0);
   up.castShadow = false;
   up.rotation.x= 0.5*Math.PI;
   up.position.x=up.position.x+42.3;
   up.position.y=up.position.y+40.8;
   up.position.z= up.position.z-45;
    PIEaddElement(up);


var m = new THREE.MeshPhysicalMaterial({ color: 0x000000,emissiveIntensity:1, refractionRatio: 0.5,opacity: 1,transparent: true});
var g= new THREE.SphereGeometry(0.9,200, 200);
var hoverit =new THREE.Mesh(g,m);
hoverit.position.set(10,-5,-6.8);
//PIEaddElement(hoverit);
//PIEsetHoverON(hoverit, push);
//sPIEsetHoverOFF(hoverit, push)

var mOil = new THREE.MeshLambertMaterial({ color: 0xffff00,emissiveIntensity:1, refractionRatio: 0.5,opacity: 1,transparent: true});
var geo= new THREE.SphereGeometry(1.9,200, 200);
geo.applyMatrix( new THREE.Matrix4().makeScale( 1.0, 1.2, 1.5 ) );


var mGlass = new THREE.MeshLambertMaterial( {color: 0xffff00,emissiveIntensity:1,reflexivity:10,opacity: 0.3,transparent: true} );
var geoM= new THREE.SphereGeometry(2.1, 200,200);
geoM.applyMatrix( new THREE.Matrix4().makeScale( 1.0, 1.2, 1.5 ) );

//42.2    38.4      -44.9

bcylIn=new THREE.Mesh(geoM, mOil);
bcylIn.position.x=bcylIn.position.x+42.2;
bcylIn.position.y=bcylIn.position.y+138.4;
bcylIn.position.z=   bcylIn.position.z-0.9;

var cylOut=new THREE.Mesh(geo, mGlass); //Cylinder inside
cylOut.position.x=cylOut.position.x+42;
cylOut.position.y=cylOut.position.y+38.2;
cylOut.position.z=   cylOut.position.z-43.5;

//PIEaddElement(cylOut);
PIEaddElement(bcylIn);


spotLight = new THREE.SpotLight( 0xffff00 );
spotLight.position.set( 100, 106.2, -104.5 );
spotLight.rotation.y= 1.5*Math.PI;
PIEaddElement( spotLight );

//var spotLightHelper = new THREE.SpotLightHelper( spotLight );
//PIEaddElement( spotLightHelper );



spotLight1 = new THREE.SpotLight( 0xffff00 );
spotLight1.position.set( 100, 106.2, -104.5 );
spotLight1.rotation.y= 1.5*Math.PI;
PIEaddElement( spotLight1 );


 var witchCylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,30,0.001) , new THREE.MeshPhysicalMaterial( {color: 0x000000} ));
    witchCylinder.position.set(-21, 5.3, -79.7);
   // myCylinder.castShadow = true;
    witchCylinder.receiveShadow = false;
    //witchCylinder.rotation.z = 0.5*Math.PI;
   //PIEaddElement(images/hardwood2_diffuse.jpg);
    PIEaddElement(witchCylinder);



geometry = new THREE.TorusGeometry( 3, 0.3, 16, 100 ); 
   material = new THREE.MeshLambertMaterial( { color: 0x000066 } );
   var torus = new THREE.Mesh( geometry, material );
   torus.position.set(30,19.397,-79.7);
   torus.castShadow = false;
   //torus.rotation.y= 0.5*Math.PI;
    PIEaddElement(torus);





var witchCylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,27,0.001) , new THREE.MeshPhysicalMaterial( {color: 0x000000} ));
    witchCylinder.position.set(-7.2, -9.3, -6.8);
   // myCylinder.castShadow = true;
    witchCylinder.receiveShadow = false;
    witchCylinder.rotation.z = 0.5*Math.PI;
   //PIEaddElement(images/hardwood2_diffuse.jpg);
    PIEaddElement(witchCylinder);

var witchCylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,29,0.001) , new THREE.MeshPhysicalMaterial( {color: 0x000000} ));
    witchCylinder.position.set(30.7, -9.3, -6.8);
   // myCylinder.castShadow = true;
    witchCylinder.receiveShadow = false;
    witchCylinder.rotation.z = 0.5*Math.PI;
   //PIEaddElement(images/hardwood2_diffuse.jpg);
    PIEaddElement(witchCylinder);

//on_off;


    //PIEaddElement(on_off);


//13.8  0.3
//11.55 -8.1

    switchCylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.35,0.35,19.8,6.001) , new THREE.MeshPhysicalMaterial( {color: 0x000000} ));
    switchCylinder.position.set(16, -9.3, -6.8);
   // myCylinder.castShadow = true;
    switchCylinder.receiveShadow = false;//9.9//6.4
    switchCylinder.rotation.z = 0.2*Math.PI;
   //PIEaddElement(images/hardwood2_diffuse.jpg);
    //PIEaddElement(switchCylinder);
    PIEdragElement(switchCylinder);
    PIEsetDrag(switchCylinder, mySwitchDrag);

   var centre= new THREE.CylinderGeometry(0.25,0.25,10.5,6.001);
     centre.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 10.5/2, 0 ) );

  swqitchCylinder = new THREE.Mesh(centre , new THREE.MeshPhysicalMaterial( {color: 0x000000} ));

    swqitchCylinder.position.set(16, -7.85, -6.8);

   // myCylinder.castShadow = true;
    swqitchCylinder.receiveShadow = false;//9.9//6.4
    swqitchCylinder.rotation.z = 0.2*Math.PI;
   //PIEaddElement(images/hardwood2_diffuse.jpg);
    PIEaddElement(swqitchCylinder);
      PIEdragElement(swqitchCylinder);
    PIEsetDrag(swqitchCylinder, mySwqitchDrag);

var m = new THREE.MeshPhysicalMaterial({ color: 0x000000,emissiveIntensity:1, refractionRatio: 0.5,opacity: 1,transparent: true});
var g= new THREE.SphereGeometry(0.9,200, 200);
var hoverit =new THREE.Mesh(g,m);
hoverit.position.set(6,-8.7,-6.8);
PIEaddElement(hoverit);


var m = new THREE.MeshPhysicalMaterial({ color: 0x000000,emissiveIntensity:1, refractionRatio: 0.5,opacity: 1,transparent: true});
var g= new THREE.SphereGeometry(0.9,200, 200);
var hoverit =new THREE.Mesh(g,m);
hoverit.position.set(16,-8.7,-6.8);
PIEaddElement(hoverit);







//texw.position.set(10,5,-6);



//var geow=  new THREE.TextGeometry( "text" ,{font:"regular"});
//var matr=  new THREE.MeshPhysicalMaterial( {color: 0x000000} );
///var te= new THREE.Mesh(geow,matr);

//PIEaddElement(te);


/*
var material = new THREE.MeshPhongMaterial({
        color: 0xdddddd
    });
    var textGeom = new THREE.TextGeometry( 'Hello World!', {
                size: 30, height: 4, curveSegments: 3,
                font: "helvetiker", weight: "bold", style: "normal",
                bevelThickness: 1, bevelSize: 2, bevelEnabled: true
});
    var textMesh = new THREE.Mesh( textGeom, material );

    PIEaddElement( textMesh );

*/



/*
var geo=new THREE.TextGeometry("Ruhi",{});
var mat= new THREE.MeshPhysicalMaterial( {color: 0x000000} );
var TextU= new THREE.Mesh(geo,mat);
*/

    //****************************************
/*
    var theText = "Hello three.js! :)";
       var hash = document.location.hash.substr( 1 );
        if ( hash.length !== 0 ) {
          theText = hash;
        }////
        var geometry = new THREE.TextGeometry( theText, {font: font});
       // geometry.computeBoundingBox();
       // var centerOffset = -0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
        var material = new THREE.MeshBasicMaterial( { color: 0x000000} );
        var lmesh = new THREE.Mesh( geometry, material );
        lmesh.position.x = 10;
        lmesh.position.y = 15;
        lmesh.position.z = 0;
       // mesh.rotation.x = 0;
        //mesh.rotation.y = Math.PI * 2;
        //group = new THREE.Group();
        PIEaddElement( lmesh );
       // PIEaddElement( group );
*/
//****************************************
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
/*
    var text = new THREE.Object3D();

// set the location of the hash to 1
//var hash = document.location.hash.substr( 1 );
// text.position.set( x, y, z );
// check on lenght 
//if ( hash.length !== 0 ) {
//text = hash;
}

// create TextGeometry ( text, parameters )
// OBS: THE FONT TYPE MUST BE DOWNLOADED AND ADDED TO THE PROJECT
var text3d = new THREE.TextGeometry( text, {
size: 60,
height: 1, // this will actually make the object very thin
curveSegments: 50,
font: "helvetiker"
});

// set the material position and rotation for the text
var textMaterial = new THREE.MeshBasicMaterial( { color: 0x000000, overdraw: true } );
text = new THREE.Mesh( text3d, textMaterial );

PIEaddElement( text );
*/

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  /* 
 var texture = loader.load('images/ok.jpg');
 texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
 texture.repeat.set( 1, 1 );
 texture.anisotropy = 1;
 var material = new THREE.MeshPhysicalMaterial( { color: 0xfff9cc, specular: 0xfff9cc, map: texture } );
//z -15  0  16  30
//17.12
    locator = new THREE.Mesh(new THREE.CylinderGeometry(1.3,1.3,3.6,0.001) , material);
    locator.position.set(53.6, 17.12, 130);
   // myCylinder.castShadow = true;
    locator.receiveShadow = false;//9.9//6.4
   // locator.rotation.z = 0.5*Math.PI;
   //PIEaddElement(images/hardwood2_diffuse.jpg);
    PIEaddElement(locator);
    //PIEdragElement(locator);
   // PIEsetDrag(locator, mySwitchDrag);
*/
/*

  var shape = new THREE.TextGeometry("Game Over", {font: 'helvetiker_regular'});
  var wrapper = new THREE.MeshNormalMaterial({color: 0x00ff00});
  var words = new THREE.Mesh(shape, wrapper);
  PIEaddElement(words);

*/



 material= new THREE.MeshPhysicalMaterial( {color: 0x000000} );
    geometry=new THREE.CylinderGeometry(0.04,0.3,2.6,20,1,false) ;
    geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 2.05/2, 0 ) );

 Navigator = new THREE.Mesh(geometry ,material);
    Navigator.position.set(29.56, 19.7, -77);
   // Navigator.rotation.z=-0.3*Math.PI;
   // myCylinder.castShadow = true;
    Navigator.receiveShadow = false;//9.9//6.4
    PIEaddElement(Navigator);

var witchCylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,70,0.001) , new THREE.MeshPhysicalMaterial( {color: 0x000000} ));
    witchCylinder.position.set(44.5, -9.3, -42);
   // myCylinder.castShadow = true;
    witchCylinder.receiveShadow = false;
    witchCylinder.rotation.x = 0.5*Math.PI;
   //PIEaddElement(images/hardwood2_diffuse.jpg);
    PIEaddElement(witchCylinder);


var witchCylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,37,0.001) , new THREE.MeshPhysicalMaterial( {color: 0x000000} ));
    witchCylinder.position.set(38.3, 40.3, -57);
   // myCylinder.castShadow = true;
    witchCylinder.receiveShadow = false;
    witchCylinder.rotation.x = 0.5*Math.PI;
   //PIEaddElement(images/hardwood2_diffuse.jpg);
    PIEaddElement(witchCylinder);


var witchCylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,34,0.001) , new THREE.MeshPhysicalMaterial( {color: 0x000000} ));
    witchCylinder.position.set(44.3, 40.3, -61);
   // myCylinder.castShadow = true;
    witchCylinder.receiveShadow = false;
    witchCylinder.rotation.x = 0.5*Math.PI;
   //PIEaddElement(images/hardwood2_diffuse.jpg);
    PIEaddElement(witchCylinder);


var witchCylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,70,0.001) , new THREE.MeshPhysicalMaterial( {color: 0x000000} ));
    witchCylinder.position.set(-20.5, -9.3, -42);
   // myCylinder.castShadow = true;
    witchCylinder.receiveShadow = false;
    witchCylinder.rotation.x = 0.5*Math.PI;
   //PIEaddElement(images/hardwood2_diffuse.jpg);
    PIEaddElement(witchCylinder);



///// up pipe 2

var witchCylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,70,0.001) , new THREE.MeshPhysicalMaterial( {color: 0x000000} ));
    witchCylinder.position.set(44.5, 5.3, -79.7);
   // myCylinder.castShadow = true;
    witchCylinder.receiveShadow = false;
    witchCylinder.rotation.y = 0.5*Math.PI;
   //PIEaddElement(images/hardwood2_diffuse.jpg);
    PIEaddElement(witchCylinder);




var witchCylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,20.7,0.001) , new THREE.MeshPhysicalMaterial( {color: 0x000000} ));
    witchCylinder.position.set(38.5, 30.3, -79.7);
   // myCylinder.castShadow = true;
    witchCylinder.receiveShadow = false;
    witchCylinder.rotation.y = 0.5*Math.PI;
   //PIEaddElement(images/hardwood2_diffuse.jpg);
    PIEaddElement(witchCylinder);



/////////////////////////////////

var witchCylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,5,0.001) , new THREE.MeshPhysicalMaterial( {color: 0x000000} ));
    witchCylinder.position.set(35.75, 20.097, -79.7);
   // myCylinder.castShadow = true;
    witchCylinder.receiveShadow = false;
    witchCylinder.rotation.z = 0.5*Math.PI;
   //PIEaddElement(images/hardwood2_diffuse.jpg);
    PIEaddElement(witchCylinder);




var witchCylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,27.3,0.001) , new THREE.MeshPhysicalMaterial( {color: 0x000000} ));
    witchCylinder.position.set(-7.5, 20.097, -79.7);
   // myCylinder.castShadow = true;
    witchCylinder.receiveShadow = false;
    witchCylinder.rotation.z = 0.5*Math.PI;
   //PIEaddElement(images/hardwood2_diffuse.jpg);
    PIEaddElement(witchCylinder);


var witchCylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,11.3,0.001) , new THREE.MeshLambertMaterial( {color: 0x000000} ));
    witchCylinder.position.set(21, 20.097, -79.7);
   // myCylinder.castShadow = true;
    witchCylinder.receiveShadow = false;
    witchCylinder.rotation.z = 0.5*Math.PI;
   //PIEaddElement(images/hardwood2_diffuse.jpg);
    PIEaddElement(witchCylinder);


/*

var textShapes = THREE.FontUtils.generateShapes( text, options );
var text = new THREE.ShapeGeometry( textShapes );
var textMesh = new THREE.Mesh( text, new THREE.MeshBasicMaterial( { color: 0xff0000 } ) ) ;
PIEaddElement(textMesh);

*/
/*
var Text2D = require('three-text2d').Text2D
var text = new Text2D("Hello world!", { font: 'regular', fillStyle: '#000000', antialias: true })
PIEaddElement(text);

*/


/*
var options = {
  size: 90,
  height: 90,
  weight: 'normal',
  font: 'helvetiker',
  style: 'normal',
  bevelThickness: 2,
  bevelSize: 4,
  bevelSegments: 3,
  bevelEnabled: true,
  curveSegments: 12,
  steps: 1
};

// the createMesh is the same function we saw earlier
text1 = new THREE.Mesh(new THREE.TextGeometry("Learning", options), new THREE.MeshLambertMaterial( {color: 0x000000} ));
text1.position.z = -100;
text1.position.y = 100;
PIEaddElement(text1);
*/

var witchCylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.15,0.15,6.7,0.001) , new THREE.MeshLambertMaterial( {color: 0x000000} ));
    witchCylinder.position.set(15.08, 20.097, -79.7);
   // myCylinder.castShadow = true;
    witchCylinder.receiveShadow = false;
    //witchCylinder.rotation.z = 0.5*Math.PI;
   //PIEaddElement(images/hardwood2_diffuse.jpg);
    PIEaddElement(witchCylinder);




var witchCylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.15,0.15,2,0.001) , new THREE.MeshLambertMaterial( {color: 0x000000} ));
    witchCylinder.position.set(17.5, 23.097, -79.7);
   // myCylinder.castShadow = true;
    witchCylinder.receiveShadow = false;
    //witchCylinder.rotation.z = 0.5*Math.PI;
   //PIEaddElement(images/hardwood2_diffuse.jpg);
    PIEaddElement(witchCylinder);



var witchCylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.15,0.15,2,0.001) , new THREE.MeshLambertMaterial( {color: 0x000000} ));
    witchCylinder.position.set(17.5, 23.097, -79.7);
   // myCylinder.castShadow = true;
    witchCylinder.receiveShadow = false;
    witchCylinder.rotation.z = 0.5*Math.PI;
   //PIEaddElement(images/hardwood2_diffuse.jpg);
    PIEaddElement(witchCylinder);



var witchCylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.15,0.15,2,0.001) , new THREE.MeshLambertMaterial( {color: 0x000000} ));
    witchCylinder.position.set(3.5, 23.097, -79.7);
   // myCylinder.castShadow = true;
    witchCylinder.receiveShadow = false;
    witchCylinder.rotation.z = 0.5*Math.PI;
   //PIEaddElement(images/hardwood2_diffuse.jpg);
    PIEaddElement(witchCylinder);


var witchCylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,4.2,0.001) , new THREE.MeshLambertMaterial( {color: 0x000000} ));
    witchCylinder.position.set(12.6, 20.097, -79.7);
   // myCylinder.castShadow = true;
    witchCylinder.receiveShadow = false;
    //witchCylinder.rotation.z = 0.5*Math.PI;
   //PIEaddElement(images/hardwood2_diffuse.jpg);
    PIEaddElement(witchCylinder);


var witchCylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,4.2,0.001) , new THREE.MeshLambertMaterial( {color: 0x000000} ));
    witchCylinder.position.set(6.45, 20.097, -79.7);
   // myCylinder.castShadow = true;
    witchCylinder.receiveShadow = false;
    //witchCylinder.rotation.z = 0.5*Math.PI;
   //PIEaddElement(images/hardwood2_diffuse.jpg);
    PIEaddElement(witchCylinder);

var witchCylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.15,0.15,6.7,0.001) , new THREE.MeshLambertMaterial( {color: 0x000000} ));
    witchCylinder.position.set(9.2, 20.097, -79.7);
   // myCylinder.castShadow = true;
    witchCylinder.receiveShadow = false;
    //witchCylinder.rotation.z = 0.5*Math.PI;
   //PIEaddElement(images/hardwood2_diffuse.jpg);
    PIEaddElement(witchCylinder);
    switchCylinder.rotation.z=0.5*Math.PI;


//PIEgetDisplayCheckbox("Voltage = 5 V");

//PIEaddDualText("Voltage V", 5, handleX);
PIEresetExperiment();


geometry = new THREE.CircleGeometry( 3, 60 );
 material = new THREE.MeshLambertMaterial( { color: 0x3b9c9c } );
 var circle = new THREE.Mesh( geometry, material );
 circle.position.set(30,19.397,-79.7);
 PIEaddElement(circle);
// PIEanimate();
resetExperiment();
//PIEdefaultHoverON(switchCylinder);
//PIEresetExperiment();
PIEsetAreaOfInterest(-55,43,82, -19);
PIErender();
}
var pe=0;
function resetExperiment( )
{
Current=0;
lightIt(0);
//lightIt(1);
bulbappear(0);
k=-1;
ruhi=k;
f=0;
swqitchCylinder.position.set(16,-7.85,-6.8);
    swqitchCylinder.rotation.z=0.2 *Math.PI;
//switchCylinder.rotation.z=0.5*Math.PI;
//switchCylinder.rotation.z=0.2*Math.PI;
y=11.4;
  bulbb.position.set(54,5.6,29);
   bulbb1.position.set(54,5.6,29-14);
   bulbb2.position.set(54,5.6,29-30);
 bulbb3.position.set(54,5.6,29-45);
 bulbb4.position.set(54,5.6+y,29);
 bulbb5.position.set(54,5.6+y,29-14);
 bulbb6.position.set(54,5.6+y,29-30);
bulbb7.position.set(54,5.6+y,29-45);
/*
t2ext.innerHTML= "0 A";

 t1ext2.innerHTML="0 W";
 */
tex.innerHTML = " 0 A";
//locator.postion.z=130;
//locator.position.y=170.12;
Navigator.rotation.z=0*Math.PI; 
//hand.position.y=27.5;
//switchCylinder.position.x=16;
swqitchCylinder.position.set(16,-7.85,-6.8);
    swqitchCylinder.rotation.z=0.2 *Math.PI;
//PIErender();
volt=5;







my2A.position.set(129.5,25,-70);
my5A.position.set(129.5,25,-70);
my10A.position.set(129.5,25,-70);
my20A.position.set(129.5,25,-70);
my25A.position.set(129.5,25,-70);
my35A.position.set(129.5,25,-70);
my45A.position.set(129.5,25,-70);
my60A.position.set(129.5,25,-70);
my0A.position.set(29.5,25,-70);

helping=0;




}
var helping=0;

PIEstopAnimation = (function() {
    var cached_function = PIEstopAnimation;
    return function() {
        // your code
         resetExperiment();
         helping=0;
         PIErender();
        var result = cached_function.apply( this , arguments); // use .apply() to call it
        return result;
    };
})();

function updateExperimentElements(dt,t)
{
  //lightIt(1);
 // Current=0;
 //moveIt(2);

 volt=5;
 if( helping==2 )
{
 
 {f=1;
 Current=1;}

}
else
{
  PIEstopAnimation();
}

//helping=1;
 //PIEaddDisplayText("Voltage V",volt);
 


if(dt<=20)
  {
      if (f== 0)
  {
    Current=0;
    //put(5);
    // PIEaddDisplayText("Voltage V",volt);

    
  }
  else if(f==1)
  {Current=1;
   // d=5;
      //put(5);
   //PIEaddDisplayText("Voltage V",volt);
}
  }
if(k>=0 && k<=7)
 {
  Current=1;
  f=1;
 
  //put(5);
 }

if(Current==0)
{// 27.5          24 21.5 19
  swqitchCylinder.position.set(16,-7.85,-6.8)
  swqitchCylinder.rotation.set=0.2*Math.PI;

//  switchCylinder.position.set(16, -9.3, -6.8);
//switchCylinder.rotation.z=0.2*Math.PI;
k=-1;
ruhi
=k;
lightIt(0);
bulbappear(0);
Navigator.rotation.z=0*Math.PI; 

y=11.4;
  bulbb.position.set(54,5.6,29);
   bulbb1.position.set(54,5.6,29-14);
   bulbb2.position.set(54,5.6,29-30);
 bulbb3.position.set(54,5.6,29-45);
 bulbb4.position.set(54,5.6+y,29);
 bulbb5.position.set(54,5.6+y,29-14);
 bulbb6.position.set(54,5.6+y,29-30);
bulbb7.position.set(54,5.6+y,29-45);



my2A.position.set(129.5,25,-70);
my5A.position.set(129.5,25,-70);
my10A.position.set(129.5,25,-70);
my20A.position.set(129.5,25,-70);
my25A.position.set(129.5,25,-70);
my35A.position.set(129.5,25,-70);
my45A.position.set(129.5,25,-70);
my60A.position.set(129.5,25,-70);
my0A.position.set(29.5,25,-70);




PIErender();
tex.innerHTML = " 0 A";
/*t2ext.innerHTML= "0 A";
 t2ext2.innerHTML="0 W";
t3ext.innerHTML= "0 A";
 t3ex
 */
//locator.postion.z=130;
//locator.position.y=170.12;
//hand.position.y=27.5;
}
else if(Current==1)
{


//Navigator.rotation.z=-0.1*Math.PI;
    lightIt(1);
  //moveIt(1);
    //firstMove(1);
    bulbappear(1);
    //switchCylinder.position.set(16, -9.3, -6.8);
     // switchCylinder.rotation.z=0.5 *Math.PI;

    swqitchCylinder.position.set(16,-8.1,-6.8);
    swqitchCylinder.rotation.z=0.5 *Math.PI;

        Current=1;
    
}
if(Current==1){
//k = getK();

//switchCylinder.position.set(16, -9.3, -6.8);
//switchCylinder.rotation.z=0.5 *Math.PI;

swqitchCylinder.position.set(16,-8.1,-6.8);
    swqitchCylinder.rotation.z=0.5 *Math.PI;
Current=1;
k=ruhi;

if(k==0)
{
  y=11.4;
  bulbb.position.set(154,5.6,29);
   bulbb1.position.set(54,5.6,29-14);
   bulbb2.position.set(54,5.6,29-30);
 bulbb3.position.set(54,5.6,29-45);
 bulbb4.position.set(54,5.6+y,29);
 bulbb5.position.set(54,5.6+y,29-14);
 bulbb6.position.set(54,5.6+y,29-30);
bulbb7.position.set(54,5.6+y,29-45);


my2A.position.set(29.5,25,-70);
my5A.position.set(129.5,25,-70);
my10A.position.set(129.5,25,-70);
my20A.position.set(129.5,25,-70);
my25A.position.set(129.5,25,-70);
my35A.position.set(129.5,25,-70);
my45A.position.set(129.5,25,-70);
my60A.position.set(129.5,25,-70);
my0A.position.set(129.5,25,-70);



/*
t2ext.innerHTML= "0 A";

 t1ext2.innerHTML="10 W";*/
 tex.innerHTML = " 2 A";
// locator.position.z = -15;
// locator.position.y=17.2;
//hand.position.y=24;
Navigator.rotation.z=-0.07*Math.PI;  
}
else if(k==1)
{
 y=11.4;
  bulbb.position.set(54,5.6,29);
   bulbb1.position.set(154,5.6,29-14);
   bulbb2.position.set(54,5.6,29-30);
 bulbb3.position.set(54,5.6,29-45);
 bulbb4.position.set(54,5.6+y,29);
 bulbb5.position.set(54,5.6+y,29-14);
 bulbb6.position.set(54,5.6+y,29-30);
bulbb7.position.set(54,5.6+y,29-45);
/*

 */

my2A.position.set(129.5,25,-70);
my5A.position.set(29.5,25,-70);
my10A.position.set(129.5,25,-70);
my20A.position.set(129.5,25,-70);
my25A.position.set(129.5,25,-70);
my35A.position.set(129.5,25,-70);
my45A.position.set(129.5,25,-70);
my60A.position.set(129.5,25,-70);
my0A.position.set(129.5,25,-70);

tex.innerHTML = " 5 A";
//z -15  0  16  30
//17.12 
//locator.position.z = 0;
Navigator.rotation.z=-0.14*Math.PI;
}
else if(k==2)
{
y=11.4;
  bulbb.position.set(54,5.6,29);
   bulbb1.position.set(54,5.6,29-14);
   bulbb2.position.set(154,5.6,29-30);
 bulbb3.position.set(54,5.6,29-45);
 bulbb4.position.set(54,5.6+y,29);
 bulbb5.position.set(54,5.6+y,29-14);
 bulbb6.position.set(54,5.6+y,29-30);
bulbb7.position.set(54,5.6+y,29-45);
/*
t1ext.innerHTML = "0 A";
 
 */

my2A.position.set(129.5,25,-70);
my5A.position.set(129.5,25,-70);
my10A.position.set(29.5,25,-70);
my20A.position.set(129.5,25,-70);
my25A.position.set(129.5,25,-70);
my35A.position.set(129.5,25,-70);
my45A.position.set(129.5,25,-70);
my60A.position.set(129.5,25,-70);
my0A.position.set(129.5,25,-70);

tex.innerHTML = " 10 A";
//locator.position.z = 16;
Navigator.rotation.z=-0.21*Math.PI;  
}
else if(k==3)
{
y=11.4;
  bulbb.position.set(54,5.6,29);
   bulbb1.position.set(54,5.6,29-14);
   bulbb2.position.set(54,5.6,29-30);
 bulbb3.position.set(154,5.6,29-45);
 bulbb4.position.set(54,5.6+y,29);
 bulbb5.position.set(54,5.6+y,29-14);
 bulbb6.position.set(54,5.6+y,29-30);
bulbb7.position.set(54,5.6+y,29-45);
/*
t1ext.innerHTML = "0 A";
 
 t4ext2.innerHTML="100 W";
 */

my2A.position.set(129.5,25,-70);
my5A.position.set(129.5,25,-70);
my10A.position.set(129.5,25,-70);
my20A.position.set(29.5,25,-70);
my25A.position.set(129.5,25,-70);
my35A.position.set(129.5,25,-70);
my45A.position.set(129.5,25,-70);
my60A.position.set(129.5,25,-70);
my0A.position.set(129.5,25,-70);

tex.innerHTML = " 20 A";
//locator.position.z = 30;
Navigator.rotation.z=-0.30*Math.PI;
}
else if(k==4)
{
y=11.4;
  bulbb.position.set(54,5.6,29);
   bulbb1.position.set(54,5.6,29-14);
   bulbb2.position.set(54,5.6,29-30);
 bulbb3.position.set(54,5.6,29-45);
 bulbb4.position.set(154,5.6+y,29);
 bulbb5.position.set(54,5.6+y,29-14);
 bulbb6.position.set(54,5.6+y,29-30);
bulbb7.position.set(54,5.6+y,29-45);
/*
t1ext.innerHTML = "0 A";
 
 t5ext2.innerHTML="125 W";
 */

my2A.position.set(129.5,25,-70);
my5A.position.set(129.5,25,-70);
my10A.position.set(129.5,25,-70);
my20A.position.set(129.5,25,-70);
my25A.position.set(29.5,25,-70);
my35A.position.set(129.5,25,-70);
my45A.position.set(129.5,25,-70);
my60A.position.set(129.5,25,-70);
my0A.position.set(129.5,25,-70);

tex.innerHTML = " 25 A";
//locator.position.y = 5.5;
Navigator.rotation.z=-0.37*Math.PI; 
}
else if(k==5)
{
y=11.4;
/*
t1ext.innerHTML = "0 A";

 t8ext2.innerHTML="0 W";
 */
  bulbb.position.set(54,5.6,29);
   bulbb1.position.set(54,5.6,29-14);
   bulbb2.position.set(54,5.6,29-30);
 bulbb3.position.set(54,5.6,29-45);
 bulbb4.position.set(54,5.6+y,29);
 bulbb5.position.set(154,5.6+y,29-14);
 bulbb6.position.set(54,5.6+y,29-30);
bulbb7.position.set(54,5.6+y,29-45);
//t6ext.innerHTML= "35 A";
// t6ext2.innerHTML="175 W";
tex.innerHTML = " 35 A";

my2A.position.set(129.5,25,-70);
my5A.position.set(129.5,25,-70);
my10A.position.set(129.5,25,-70);
my20A.position.set(129.5,25,-70);
my25A.position.set(129.5,25,-70);
my35A.position.set(29.5,25,-70);
my45A.position.set(129.5,25,-70);
my60A.position.set(129.5,25,-70);
my0A.position.set(129.5,25,-70);

//locator.position.z = 16;
Navigator.rotation.z=-0.42*Math.PI; 
}
else if(k==6)
{
y=11.4;
  bulbb.position.set(54,5.6,29);
   bulbb1.position.set(54,5.6,29-14);
   bulbb2.position.set(54,5.6,29-30);
 bulbb3.position.set(54,5.6,29-45);
 bulbb4.position.set(54,5.6+y,29);
 bulbb5.position.set(54,5.6+y,29-14);
 bulbb6.position.set(154,5.6+y,29-30);
bulbb7.position.set(54,5.6+y,29-45);



my2A.position.set(129.5,25,-70);
my5A.position.set(129.5,25,-70);
my10A.position.set(129.5,25,-70);
my20A.position.set(129.5,25,-70);
my25A.position.set(129.5,25,-70);
my35A.position.set(129.5,25,-70);
my45A.position.set(29.5,25,-70);
my60A.position.set(129.5,25,-70);
my0A.position.set(129.5,25,-70);

/*
t1ext.innerHTML = "0 A";

t7ext.innerHTML= "45 A";
 t7ext2.innerHTML="225 W";*/
tex.innerHTML = " 45 A";
//locator.position.z = 0;
Navigator.rotation.z=-0.45*Math.PI;  
}
else if(k==7)
{
y=11.4;
  bulbb.position.set(54,5.6,29);
   bulbb1.position.set(54,5.6,29-14);
   bulbb2.position.set(54,5.6,29-30);
 bulbb3.position.set(54,5.6,29-45);
 bulbb4.position.set(54,5.6+y,29);
 bulbb5.position.set(54,5.6+y,29-14);
 bulbb6.position.set(54,5.6+y,29-30);
bulbb7.position.set(154,5.6+y,29-45);
/*t1ext.innerHTML = "0 A";
 t1ext2.innerHTML="0 W";

 t8ext2.innerHTML="300 W";*/
tex.innerHTML = " 60 A";


my2A.position.set(129.5,25,-70);
my5A.position.set(129.5,25,-70);
my10A.position.set(129.5,25,-70);
my20A.position.set(129.5,25,-70);
my25A.position.set(129.5,25,-70);
my35A.position.set(129.5,25,-70);
my45A.position.set(129.5,25,-70);
my60A.position.set(29.5,25,-70);
my0A.position.set(129.5,25,-70);

//locator.position.z = -15;
Navigator.rotation.z=-0.5*Math.PI;  
}
else
{

if(dt>20 && dt<=100)
{

   y=11.4;
  bulbb.position.set(154,5.6,29);
   bulbb1.position.set(54,5.6,29-14);
   bulbb2.position.set(54,5.6,29-30);
 bulbb3.position.set(54,5.6,29-45);
 bulbb4.position.set(54,5.6+y,29);
 bulbb5.position.set(54,5.6+y,29-14);
 bulbb6.position.set(54,5.6+y,29-30);
bulbb7.position.set(54,5.6+y,29-45);



my2A.position.set(29.5,25,-70);
my5A.position.set(129.5,25,-70);
my10A.position.set(129.5,25,-70);
my20A.position.set(129.5,25,-70);
my25A.position.set(129.5,25,-70);
my35A.position.set(129.5,25,-70);
my45A.position.set(129.5,25,-70);
my60A.position.set(129.5,25,-70);
my0A.position.set(129.5,25,-70);

/*
t2ext.innerHTML= "0 A";

t1ext.innerHTML = "2 A";
 t1ext2.innerHTML="10 W";

 */
 tex.innerHTML = " 2 A";
// locator.position.z = -15;
// locator.position.y=17.2;
//hand.position.y=24;
Navigator.rotation.z=-0.07*Math.PI;  
}



if(dt>80 && dt<180)
{
   y=11.4;
  bulbb.position.set(54,5.6,29);
   bulbb1.position.set(154,5.6,29-14);
   bulbb2.position.set(54,5.6,29-30);
 bulbb3.position.set(54,5.6,29-45);
 bulbb4.position.set(54,5.6+y,29);
 bulbb5.position.set(54,5.6+y,29-14);
 bulbb6.position.set(54,5.6+y,29-30);
bulbb7.position.set(54,5.6+y,29-45);
 //t2ext.innerHTML= "5 A";
 //t2ext2.innerHTML="25 W";

my2A.position.set(129.5,25,-70);
my5A.position.set(29.5,25,-70);
my10A.position.set(129.5,25,-70);
my20A.position.set(129.5,25,-70);
my25A.position.set(129.5,25,-70);
my35A.position.set(129.5,25,-70);
my45A.position.set(129.5,25,-70);
my60A.position.set(129.5,25,-70);
my0A.position.set(129.5,25,-70);

tex.innerHTML = " 5 A";
//z -15  0  16  30
//17.12 
//locator.position.z = 0;
Navigator.rotation.z=-0.14*Math.PI;  
//hand.position.y=21.5;
}
if(dt> 180 && dt<260)
{
   y=11.4;
  bulbb.position.set(54,5.6,29);
   bulbb1.position.set(54,5.6,29-14);
   bulbb2.position.set(154,5.6,29-30);
 bulbb3.position.set(54,5.6,29-45);
 bulbb4.position.set(54,5.6+y,29);
 bulbb5.position.set(54,5.6+y,29-14);
 bulbb6.position.set(54,5.6+y,29-30);
bulbb7.position.set(54,5.6+y,29-45);
//t3ext.innerHTML= "10 A";
 //t3ext2.innerHTML="50 W";
tex.innerHTML = " 10 A";

my2A.position.set(129.5,25,-70);
my5A.position.set(129.5,25,-70);
my10A.position.set(29.5,25,-70);
my20A.position.set(129.5,25,-70);
my25A.position.set(129.5,25,-70);
my35A.position.set(129.5,25,-70);
my45A.position.set(129.5,25,-70);
my60A.position.set(129.5,25,-70);
my0A.position.set(129.5,25,-70);

//locator.position.z = 16;
Navigator.rotation.z=-0.21*Math.PI;  
//hand.position.y=19;
}
if(dt>260 && dt<340)
{
   y=11.4;
  bulbb.position.set(54,5.6,29);
   bulbb1.position.set(54,5.6,29-14);
   bulbb2.position.set(54,5.6,29-30);
 bulbb3.position.set(154,5.6,29-45);
 bulbb4.position.set(54,5.6+y,29);
 bulbb5.position.set(54,5.6+y,29-14);
 bulbb6.position.set(54,5.6+y,29-30);
bulbb7.position.set(54,5.6+y,29-45);
//t4ext.innerHTML= "20 A";
 //t4ext2.innerHTML="100 W";

my2A.position.set(129.5,25,-70);
my5A.position.set(129.5,25,-70);
my10A.position.set(129.5,25,-70);
my20A.position.set(29.5,25,-70);
my25A.position.set(129.5,25,-70);
my35A.position.set(129.5,25,-70);
my45A.position.set(129.5,25,-70);
my60A.position.set(129.5,25,-70);
my0A.position.set(129.5,25,-70);

tex.innerHTML = " 20 A";
//locator.position.z = 30;
Navigator.rotation.z=-0.30*Math.PI;
//hand.position.y=16.5;  
}
if(dt>340 && dt<420)
{
   y=11.4;
  bulbb.position.set(54,5.6,29);
   bulbb1.position.set(54,5.6,29-14);
   bulbb2.position.set(54,5.6,29-30);
 bulbb3.position.set(54,5.6,29-45);
 bulbb4.position.set(154,5.6+y,29);
 bulbb5.position.set(54,5.6+y,29-14);
 bulbb6.position.set(54,5.6+y,29-30);
bulbb7.position.set(54,5.6+y,29-45);
//t5ext.innerHTML= "25 A";
// t5ext2.innerHTML="125 W";
tex.innerHTML = " 25 A";

my2A.position.set(129.5,25,-70);
my5A.position.set(129.5,25,-70);
my10A.position.set(129.5,25,-70);
my20A.position.set(129.5,25,-70);
my25A.position.set(29.5,25,-70);
my35A.position.set(129.5,25,-70);
my45A.position.set(129.5,25,-70);
my60A.position.set(129.5,25,-70);
my0A.position.set(129.5,25,-70);

//locator.position.y = 5.5;
Navigator.rotation.z=-0.37*Math.PI; 
//hand.position.y=13.5; 
}
if(dt>420 && dt<500)
{
   y=11.4;
  bulbb.position.set(54,5.6,29);
   bulbb1.position.set(54,5.6,29-14);
   bulbb2.position.set(54,5.6,29-30);
 bulbb3.position.set(54,5.6,29-45);
 bulbb4.position.set(54,5.6+y,29);
 bulbb5.position.set(154,5.6+y,29-14);
 bulbb6.position.set(54,5.6+y,29-30);
bulbb7.position.set(54,5.6+y,29-45);
//t6ext.innerHTML= "35 A";
 //t6ext2.innerHTML="175 W";
tex.innerHTML = " 35 A";

my2A.position.set(129.5,25,-70);
my5A.position.set(129.5,25,-70);
my10A.position.set(129.5,25,-70);
my20A.position.set(129.5,25,-70);
my25A.position.set(129.5,25,-70);
my35A.position.set(29.5,25,-70);
my45A.position.set(129.5,25,-70);
my60A.position.set(129.5,25,-70);
my0A.position.set(129.5,25,-70);

//locator.position.z = 16;
Navigator.rotation.z=-0.42*Math.PI;  
//hand.position.y=11;

}
if(dt>500 && dt<580)
{
   y=11.4;
  bulbb.position.set(54,5.6,29);
   bulbb1.position.set(54,5.6,29-14);
   bulbb2.position.set(54,5.6,29-30);
 bulbb3.position.set(54,5.6,29-45);
 bulbb4.position.set(54,5.6+y,29);
 bulbb5.position.set(54,5.6+y,29-14);
 bulbb6.position.set(154,5.6+y,29-30);
bulbb7.position.set(54,5.6+y,29-45);


my2A.position.set(129.5,25,-70);
my5A.position.set(129.5,25,-70);
my10A.position.set(129.5,25,-70);
my20A.position.set(129.5,25,-70);
my25A.position.set(129.5,25,-70);
my35A.position.set(129.5,25,-70);
my45A.position.set(29.5,25,-70);
my60A.position.set(129.5,25,-70);
my0A.position.set(129.5,25,-70);

//t7ext.innerHTML= "45 A";
// t7ext2.innerHTML="225 W";
tex.innerHTML = " 45 A";
//locator.position.z = 0;
Navigator.rotation.z=-0.45*Math.PI;  
//hand.position.y=8.5;
}
if(dt>580 && dt<660)
{
   y=11.4;
  bulbb.position.set(54,5.6,29);
   bulbb1.position.set(54,5.6,29-14);
   bulbb2.position.set(54,5.6,29-30);
 bulbb3.position.set(54,5.6,29-45);
 bulbb4.position.set(54,5.6+y,29);
 bulbb5.position.set(54,5.6+y,29-14);
 bulbb6.position.set(54,5.6+y,29-30);
bulbb7.position.set(154,5.6+y,29-45);
//t8ext.innerHTML= "60 A";
 //t8ext2.innerHTML="300 W";
tex.innerHTML = " 60 A";
//locator.position.z = -15;

my2A.position.set(129.5,25,-70);
my5A.position.set(129.5,25,-70);
my10A.position.set(129.5,25,-70);
my20A.position.set(129.5,25,-70);
my25A.position.set(129.5,25,-70);
my35A.position.set(129.5,25,-70);
my45A.position.set(129.5,25,-70);
my60A.position.set(29.5,25,-70);
my0A.position.set(129.5,25,-70);

Navigator.rotation.z=-0.5*Math.PI;  
//hand.position.y=6;
}
}
}
else if(Current==0)
{
  //switchCylinder.position.x=16;
  swqitchCylinder.position.set(16,-7.85,-6.8);
    swqitchCylinder.rotation.z=0.2 *Math.PI;
}

to_bulb=-1;
PIEchangeDisplayText("Voltage V",  5);

PIErender();
}





