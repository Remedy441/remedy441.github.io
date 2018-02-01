
var helpContent;

function initialiseHelp()
{
helpContent="";
helpContent = helpContent + "<h2>Motion along straight line</h2>";
helpContent = helpContent + "<h3>About the experiment</h3>";
helpContent = helpContent + "<p>Start the experiment to start observing the variations in the speed at same distance but different with beatiful animations.</p>";
helpContent = helpContent + "<h3>Operation:</h3>";
helpContent = helpContent + "<p>Press start in the beginning. Pause or stop will have similiar functioning between the process. Stop and reset will have same fuctioning at the end of animation</p>";
helpContent = helpContent + "<h2>Happy Experimenting</h2>";
PIEupdateHelp(helpContent);
}

var infoContent;

function initialiseInfo()
{
infoContent =  "";
infoContent = infoContent + "<h2>Motion along straight line</h2>";
infoContent = infoContent + "<h3>About the experiment</h3>";
infoContent = infoContent + "<p>The experiment shows a car. The distances is measured in m(metres). The velocity is measured in km/s(kilometres/second). Time is measured in secons(s).</p>";
infoContent = infoContent + "<h3>Motion</h3>";
infoContent = infoContent + "<p>The experiment shows uniform and non- uniform motions</p>";
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



function enter()
{
//PIEsetAreaOfInterest(100,80,0,0);

}

function selection()
{
value=PIEgetInputText("Answer");

}
var value=0;

var button = document.createElement("button");
button.innerHTML = '<img src="images/h.png"/>'
//'<img src="images\ok.png" />';
// 2. Append somewhere
var body1 = document.getElementsByTagName("body")[0];
body1.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  //alert("did something");
 value=1;
 PIEstartAnimation();
});


button.style.position = "absolute";
button.style.width = 100;
button.style.height = 100;
//button.style.border="10 px solid";
//button.style.shape=round;
button.style.backgroundColor = "black";
//button.innerHTML = "- Voltage = 5V -";
button.style.top = 100+ 'px';
button.style.left = 1190+ 'px';
document.body.appendChild(button);
//button.remove();

var value=-5;

var button1 = document.createElement("button");
button1.innerHTML = '<img src="images/u.png"/>'

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button1);

// 3. Add event handler
button1.addEventListener ("click", function() {
  //alert("did something");
 value=0;
 PIEstartAnimation();
});
button1.style.position = "absolute";
button1.style.width = 90;
button1.style.height = 90;
button1.style.backgroundColor = "black";
//button.innerHTML = "- Voltage = 5V -";
button1.style.top = 140+ 'px';
button1.style.left = 1180+ 'px';
document.body.appendChild(button1);



function callIt()
{
  PIEstartAnimation();
  value=1;
}

function initialiseControls()
{
    

PIEcreateTable("-Observation Table-",13,5,true);
var headerRow=["-Point", "-Distance(km)-", "-Time from beginning(s)-", "-Time from previous point(s)-","-Speed(km/s)-"];
PIEupdateTableRow(0,headerRow);
PIEupdateTableRow(1,['A',0,0,0,"-"]);
PIEupdateTableRow(2,['B',10,0,0,"-"]);
PIEupdateTableRow(3,['P',20,0,0,"-"]);
PIEupdateTableRow(4,['C',30,0,0,"-"]);
PIEupdateTableRow(5,['D',40,0,0,"-"]);
PIEupdateTableRow(6,['Q',50,0,0,"-"]);
PIEupdateTableRow(7,['R',60,0,0,"-"]);
PIEupdateTableRow(8,['E',70,0,0,"-"]);
PIEupdateTableRow(9,['F',80,0,0,"-"]);
PIEupdateTableRow(10,['S',90,0,0,"-"]);
PIEupdateTableRow(11,['G',100,0,0,"-"]);
PIEupdateTableRow(12,['All points',100,0,0,"-"]);


}


function loadExperimentElements()

{

PIEsetExperimentTitle("Motion along a straight line(time for same distance)");
PIEsetDeveloperName("R.RuhiTaj");
PIEhideControlElement();
initialiseHelp();
initialiseInfo();
initialiseControls();



var te = THREE.ImageUtils.loadTexture('images/Lake_Matheson_(New_Zealand)_at_night.jpg', {}, function() {PIErender();});
te.anisotropy=50;
var mel = new THREE.MeshLambertMaterial({map:te, transparent:true});
var ge= new THREE.PlaneGeometry(200*1.4,125*1.4);

for(i=0;i<=24;)
{sky=new THREE.Mesh(ge,mel);
sky.position.set(790-(280*i),58,-100);
sky.receiveShadow=false;
PIEaddElement(sky);
i=i+2;
}



var te = THREE.ImageUtils.loadTexture('images/untitled.jpg', {}, function() {PIErender();});
te.anisotropy=50;
var mel = new THREE.MeshLambertMaterial({map:te, transparent:true});
var ge= new THREE.PlaneGeometry(200*1.4,125*1.4);
for(i=0;i<=24;)
{sky=new THREE.Mesh(ge,mel);
sky.position.set(790-280*(i+1),58,-100);
sky.receiveShadow=false;
PIEaddElement(sky);
i=i+2;
}





var texture = THREE.ImageUtils.loadTexture('images/images.jpg', {}, function() {PIErender();});
geometry = new THREE.BoxGeometry( 55,4, 100);
material = new THREE.MeshLambertMaterial( { map: texture} );
for(j=-150;j<=30;j++)
{road  = new THREE.Mesh( geometry, material );
road.position.set(750+(50*j),19.5,  -60);
road.receiveShadow = true;
PIEaddElement(road);
}

geometry = new THREE.BoxGeometry( 8,40, 100);
for(i=1;i>=-200;i++)
{road  = new THREE.Mesh( geometry, material );
road.position.set(750+((90)*i),-2.5,  -60);
road.receiveShadow = true;
PIEaddElement(road);

i=i-5;
}
var texture = THREE.ImageUtils.loadTexture('images/fence.png', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 1006/15,512/15);
material = new THREE.MeshLambertMaterial( { transparent:true,map: texture} );
for(j=-100;j<=30;j++)
{road  = new THREE.Mesh( geometry, material );
road.position.set(750+((983/15)*j),28.5,  -20);
road.receiveShadow = true;
PIEaddElement(road);
}
for(j=-100;j<=30;j++)
{road  = new THREE.Mesh( geometry, material );
road.position.set(750+((983/15)*j),28.5,  -80);
road.receiveShadow = true;
PIEaddElement(road);
}


var texture = THREE.ImageUtils.loadTexture('images/marker.png', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 15,15);
material = new THREE.MeshLambertMaterial( {transparent:true,map: texture} );
for(i=0;i<=9000;)
{
ar = new THREE.Mesh( geometry, material );
ar.position.set(750+90-i,48,  -82);
ar.rotation.z=-0.25*Math.PI;
PIEaddElement(ar);
i=i+(983*9/15);
}



var texture = THREE.ImageUtils.loadTexture('images/option.png', {}, function() {PIErender();});
texture.anisotropy=50;
geometry = new THREE.PlaneGeometry( 620/6,84/6);
material = new THREE.MeshLambertMaterial( {transparent:true,map: texture} );
select = new THREE.Mesh( geometry, material );
select.position.set(750+70,128.5,  -82);
PIEaddElement(select);


var texture = THREE.ImageUtils.loadTexture('images/wro.png', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 508/8,93/8);
material = new THREE.MeshLambertMaterial( {transparent:true,map: texture} );
wro = new THREE.Mesh( geometry, material );
wro.position.set(750+70,78.5,  -82);
PIEaddElement(wro);



var texture = THREE.ImageUtils.loadTexture('images/uniform.png', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 675/11,76/11);
material = new THREE.MeshLambertMaterial( {color:0x000000,transparent:true,map: texture} );
uniform = new THREE.Mesh( geometry, material );
uniform.position.set(750+70,73.5,  -82);
PIEaddElement(uniform);


var texture = THREE.ImageUtils.loadTexture('images/nonuniform.png', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 853/11,77/11);
material = new THREE.MeshLambertMaterial( {color:0x000000,transparent:true,map: texture} );
nonuniform = new THREE.Mesh( geometry, material );
nonuniform.position.set(750+70,73.5,  -82);
PIEaddElement(nonuniform);

var texture = THREE.ImageUtils.loadTexture('images/cong.png',{}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 812/11,85/11);
material = new THREE.MeshLambertMaterial( {transparent:true,map: texture} );
cong = new THREE.Mesh( geometry, material );
cong.position.set(750+70,82.5,  -82);
PIEaddElement(cong);


var texture = THREE.ImageUtils.loadTexture('images/example.png',{}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 833/11,93/11);
material = new THREE.MeshLambertMaterial( {transparent:true,map: texture} );
example = new THREE.Mesh( geometry, material );
example.position.set(750+70,82.5,  -82);
PIEaddElement(example);



var texture = THREE.ImageUtils.loadTexture('images/table.png',{}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 494/17,76/17);
material = new THREE.MeshLambertMaterial( {color:0x000000,transparent:true,map: texture} );
table = new THREE.Mesh( geometry, material );
table.position.set(750+70,82.5,  -82);
PIEaddElement(table);


var texture = THREE.ImageUtils.loadTexture('images/0-km.png', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 167/17,76/17);
material = new THREE.MeshLambertMaterial( {color:0x000000,transparent:true,map: texture} );
ar = new THREE.Mesh( geometry, material );
ar.position.set(750+90,48.5,  -82);
PIEaddElement(ar);
var texture = THREE.ImageUtils.loadTexture('images/10-km.png', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 167/17,76/17);
material = new THREE.MeshLambertMaterial( {color:0x000000,transparent:true,map: texture} );
ar = new THREE.Mesh( geometry, material );
ar.position.set(750+90-(983*9/15),48.5,  -82);
PIEaddElement(ar);
var texture = THREE.ImageUtils.loadTexture('images/20-km.png', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 167/17,76/17);
material = new THREE.MeshLambertMaterial( {color:0x000000,transparent:true,map: texture} );
ar = new THREE.Mesh( geometry, material );
ar.position.set(750+90-(983*18/15),48.5,  -82);
PIEaddElement(ar);
var texture = THREE.ImageUtils.loadTexture('images/30-km.png', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 167/17,76/17);
material = new THREE.MeshLambertMaterial( {color:0x000000,transparent:true,map: texture} );
ar = new THREE.Mesh( geometry, material );
ar.position.set(750+90-(983*27/15),48.5,  -82);
PIEaddElement(ar);
var texture = THREE.ImageUtils.loadTexture('images/40-km.png', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 167/17,76/17);
material = new THREE.MeshLambertMaterial( {color:0x000000,transparent:true,map: texture} );
ar = new THREE.Mesh( geometry, material );
ar.position.set(750+90-(983*36/15),48.5,  -82);
PIEaddElement(ar);
var texture = THREE.ImageUtils.loadTexture('images/50-km.png', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 167/17,76/17);
material = new THREE.MeshLambertMaterial( {color:0x000000,transparent:true,map: texture} );
ar = new THREE.Mesh( geometry, material );
ar.position.set(750+90-(983*45/15),48.5,  -82);
PIEaddElement(ar);
var texture = THREE.ImageUtils.loadTexture('images/60-km.png', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 167/17,76/17);
material = new THREE.MeshLambertMaterial( {color:0x000000,transparent:true,map: texture} );
ar = new THREE.Mesh( geometry, material );
ar.position.set(750+90-(983*54/15),48.5,  -82);
PIEaddElement(ar);
var texture = THREE.ImageUtils.loadTexture('images/70-km.png', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 167/17,76/17);
material = new THREE.MeshLambertMaterial( {color:0x000000,transparent:true,map: texture} );
ar = new THREE.Mesh( geometry, material );
ar.position.set(750+90-(983*63/15),48.5,  -82);
PIEaddElement(ar);
var texture = THREE.ImageUtils.loadTexture('images/80-km.png', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 167/17,76/17);
material = new THREE.MeshLambertMaterial( {color:0x000000,transparent:true,map: texture} );
ar = new THREE.Mesh( geometry, material );
ar.position.set(750+90-(983*72/15),48.5,  -82);
PIEaddElement(ar);
var texture = THREE.ImageUtils.loadTexture('images/90-km.png', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 167/17,76/17);
material = new THREE.MeshLambertMaterial( {color:0x000000,transparent:true,map: texture} );
ar = new THREE.Mesh( geometry, material );
ar.position.set(750+90-(983*81/15),48.5,  -82);
PIEaddElement(ar);
var texture = THREE.ImageUtils.loadTexture('images/100-km.png', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 167/17,76/17);
material = new THREE.MeshLambertMaterial( {color:0x000000,transparent:true,map: texture} );
ar = new THREE.Mesh( geometry, material );
ar.position.set(750+90-(983*90/15),48.5,  -82);
PIEaddElement(ar);



var texture = THREE.ImageUtils.loadTexture('images/car1.gif', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 96/2,51.9/2);
material = new THREE.MeshLambertMaterial( {transparent:true,map: texture} );
car = new THREE.Mesh( geometry, material );
car.position.set(750+60,30,  -60);
PIEaddElement(car);



var texture = THREE.ImageUtils.loadTexture('images/wheelLeft.gif', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 16/2,15.4/2);
material = new THREE.MeshLambertMaterial( {transparent:true,map: texture} );
left = new THREE.Mesh( geometry, material );
left.position.set(764.9+60,25,  -60);

PIEaddElement(left);



var texture = THREE.ImageUtils.loadTexture('images/wheelRight.gif', {}, function() {PIErender();});
geometry = new THREE.PlaneGeometry( 16/2,14.8/2);
material = new THREE.MeshLambertMaterial( {transparent:true,map: texture} );
right = new THREE.Mesh( geometry, material );
right.position.set(735.7+60,25,  -60);

PIEaddElement(right);


resetExperiment();


PIEsetAreaOfInterest(1500,100,0,0);

PIErender();

}

function resetExperiment( )
{

cong.position.y=234;
wro.position.y=390;
select.position.y=102.5;

pass=-5;

example.position.y=182.5;
table.position.y=160;
uniform.position.y=160;
nonuniform.position.y=189;
bc=0;

value=-5;

PIEchangeInputText("Answer",0);
PIEsetAreaOfInterest(1500,100,0,0);
right.position.set(735.7+60,25,  -60);
left.position.set(764.9+60,25,  -60);
car.position.set(810,30,  -60);

key1=0;
key2=0;
xp=Math.floor((Math.random() * 2) + 1); 
if(xp==1)
{
yg=(Math.floor((Math.random() * 10) + 1))/2; 
yg=yg*10;
first=yg;
yl=0;
PIEupdateTableRow(1,['A',0,yl,0,"-"]);
yl=yg+yl;
PIEupdateTableRow(2,['B',10,yl,yg,"-"]);
yl=yg+yl;
PIEupdateTableRow(3,['P',20,yl,yg,"-"]);
yl=yg+yl;
PIEupdateTableRow(4,['C',30,yl,yg,"-"]);
yl=yg+yl;
PIEupdateTableRow(5,['D',40,yl,yg,"-"]);
yl=yg+yl;
PIEupdateTableRow(6,['Q',50,yl,yg,"-"]);
yl=yg+yl;
PIEupdateTableRow(7,['R',60,yl,yg,"-"]);
yl=yl+yg;
PIEupdateTableRow(8,['E',70,yl,yg,"-"])
yl=yl+yg;
PIEupdateTableRow(9,['F',80,yl,yg,"-"]);
yl=yl+yg;
PIEupdateTableRow(10,['S',90,yl,yg,"-"]);
yl=yg+yl;
PIEupdateTableRow(11,['G',100,yl,yg,"-"]);
PIEupdateTableRow(12,['All points',100,yl,"-","-"]);


}
else if(xp==2)
{
v=(Math.floor((Math.random() * 10) + 1))/2; 
w=(Math.floor((Math.random() * 10) + 1))/2; 
y=(Math.floor((Math.random() * 10) + 1))/2; 
z=(Math.floor((Math.random() * 10) + 1))/2; 
u=(Math.floor((Math.random() * 10) + 1))/2; 



yl=0;
v=v*10;
w=w*10;
y=y*10;
z=z*10;
u=u*10;

got1=0;
got2=got1+v;
got3=got2+v;
got4=got3+w;
got5=got4+w;
got6=got5+w;
got7=got6+y;
got8=got7+z;
got9=got8+z;
got10=got9+z;
got11=got10+u;



PIEupdateTableRow(1,['A',0,yl,0,"-"]);
yl=yl+v;
PIEupdateTableRow(2,['B',10,yl,v,"-"]);
yl=yl+v;
PIEupdateTableRow(3,['P',20,yl,v,"-"]);
yl=yl+w;

PIEupdateTableRow(4,['C',30,yl,w,"-"]);
yl=yl+w;

PIEupdateTableRow(5,['D',40,yl,w,"-"]);
yl=yl+w;

PIEupdateTableRow(6,['Q',50,yl,w,"-"]);
yl=yl+y;

PIEupdateTableRow(7,['R',60,yl,y,"-"]);
yl=yl+z;
PIEupdateTableRow(8,['E',70,yl,z,"-"]);
yl=yl+z;
PIEupdateTableRow(9,['F',80,yl,z,"-"]);
yl=yl+z;
PIEupdateTableRow(10,['S',90,yl,z,"-"]);
yl=yl+u;
PIEupdateTableRow(11,['G',100,yl,u,"-"]);
PIEupdateTableRow(12,['All points',100,yl,"-","-"]);
key1=0;
}
}
var xp;
var bc=0;
var first;
var key1=0;
var key2=0;
var yg;
var pass=-5;
var got1;
var got;
var got2;
var got3;
var got4;
var got5;
var got6;
var got7;
var got8;
var got9;
var got10;
var got11;
var got12;

var u,v,w,x,y,z;

var istopped=-5;

PIEstopAnimation = (  function() {
    var cached_function = PIEstopAnimation;
    return function() {
       
      if(istopped==0)
      {
        resetExperiment();
        istopped=-5;
      }

         PIErender();
        var result = cached_function.apply( this , arguments); // use .apply() to call it
        return result;
    };
})();



function updateExperimentElements(dt,t)
{
if(dt>5)
{
 key1=key1+2.5;
if((value==1 && xp==1)||(value==0 && xp==2))
{
cong.position.y=90.5;
wro.position.y=1245;
select.position.y=245;

//button1.style.display='none';
///button.style.display='none';
}
else
{
  wro.position.y=90.5;
  cong.position.y=456.5;
  select.position.y=245;
 // button1.remove();
//button1.style.display='none';
//button.style.display='none';

  
}



if(xp==1)
{
  pl=(15/(xp*(first/5)))-1;
}
else 
{
  

if(car.position.x>800)
{
    pl=(10/(v/5))-1;

 got=0;
  PIEupdateTableRow(1,['A',0,0,0,"-"]);
}
else if(car.position.x>((228)))
{
      pl=(15/(v/5))-1;

  PIEupdateTableRow(2,['B',10,got2,v,10/v]);

}

else if(car.position.x>((228)-(586*1)))
{
        pl=(15/(v/5))-1;

PIEupdateTableRow(3,['P',20,got3,v,10/v]);

}

else if(car.position.x>((228)-(586*2)))
{
        pl=(15/(w/5))-1;

PIEupdateTableRow(4,['C',30,got4,w,10/w]);

}

else if(car.position.x>((228)-(586*3)))
{
        pl=(15/(w/5))-1;

PIEupdateTableRow(5,['D',40,got5,w,10/w]);
}
else if(car.position.x>((228)-(586*4)))
{
        pl=(15/(w/5))-1;

PIEupdateTableRow(6,['Q',50,got6,w,10/w]);

}

else if(car.position.x>((228)-(586*5)))
{
        pl=(15/(y/5))-1;
PIEupdateTableRow(7,['R',60,got7,y,10/y]);

}
else if(car.position.x>((228)-(586*6)))
{
        pl=(15/(z/5))-1;

PIEupdateTableRow(8,['E',70,got8,z,10/z]);
}
else if(car.position.x>((228)-(586*7)))
{
        pl=(15/(z/5))-1;

PIEupdateTableRow(9,['F',80,got9,z,10/z]);

}
else if(car.position.x>((228)-(586*8)))
{
        pl=(15/(z/5))-1;

PIEupdateTableRow(10,['S',90,got10,z,10/z]);
}
else if(car.position.x>((228)-(586*9)))
{

        pl=(15/(u/5))-1;

PIEupdateTableRow(11,['G',100,got11,u,10/u]);
PIEupdateTableRow(12,['All points',100,got11,"-",100/got11]);
}

else if(car.position.x<=((228)-(586*9)))
{

  pl=-1;
  istopped=0;
}
}



if(xp==1)
{
    if(key1<80 && key1>=40)
    {
  ////table.position.y=82.5;
 // start.position.y=160;
 cong.position.y=1456;
 wro.position.y=1467;
  //uniform.position.y=72.5;
  
  }
else if(key1>=80 && key1<120)
{
///example.position.y=75.5;
table.position.y=160;
uniform.position.y=160;
}
else if(key1>=120 && key1<=170)
{

//example.position.y=160;
}
else if(key1>170)

{
   if(car.position.x< 228-(590*9))
  {
    pl=-1;
 istopped=0;
  }
    else
    {
      bc=bc-(2*(pl+1));
    }
car.position.x-=1*(pl+1);
right.position.x-=1*(pl+1);
left.position.x-=1*(pl+1);
right.rotation.z+=(0.2)*((pl+1)/3);
left.rotation.z+=0.2*((pl+1)/3);



if(car.position.x>810)
{

  PIEupdateTableRow(1,['A',0,0,0,"-"]);
  yl=yg;
}
else if(car.position.x>((228)))
{PIEupdateTableRow(2,['B',10,yg,yg,10/yg]);
yl=yg+yl;}

else if(car.position.x>((228)-(586*1)))
{
PIEupdateTableRow(3,['P',20,yg*2,yg,10/yg]);

yl=yg+yl;}

else if(car.position.x>((228)-(586*2)))
{
PIEupdateTableRow(4,['C',30,yg*3,yg,10/yg]);

yl=yg+yl;}

else if(car.position.x>((228)-(586*3)))
{
PIEupdateTableRow(5,['D',40,yg*4,yg,10/yg]);
yl=yg+yl;}
else if(car.position.x>((228)-(586*4)))
{
PIEupdateTableRow(6,['Q',50,yg*5,yg,10/yg]);

yl=yg+yl;}

else if(car.position.x>((228)-(586*5)))
{
PIEupdateTableRow(7,['R',60,yg*6,yg,10/yg]);
yl=yl+yg;
}
else if(car.position.x>((228)-(586*6)))
{
PIEupdateTableRow(8,['E',70,yg*7,yg,10/yg]);

yl=yl+yg;}
else if(car.position.x>((228)-(586*7)))
{
PIEupdateTableRow(9,['F',80,yg*8,yg,10/yg]);
yl=yl+yg;
}
else if(car.position.x>((228)-(586*8)))
{
PIEupdateTableRow(10,['S',90,yg*9,yg,10/yg]);
yl=yg+yl;
}
else if(car.position.x>((228)-(586*9)))
{
PIEupdateTableRow(11,['G',100,yg*10,yg,10/yg]);
PIEupdateTableRow(12,['All points',100,10*yg,"-",10/yg]);
}

PIEsetAreaOfInterest(1500+bc,100,0,0);
}

}


else
{
   
   if(key1<80 && key1>40)
    {
 // table.position.y=82.5;
 // start.position.y=160;
 wro.position.y=145;
 cong.position.y=236;
 // nonuniform.position.y=72.5;
  pass=2;
  
  }
else if(key1>=80 && key1<120 && pass==2)
{
///example.position.y=75.5;
table.position.y=160;
nonuniform.position.y=160;
pass=3;
}
else if(key1>=120 && key1<=170 && pass==3)
{

//example.position.y=160;
pass=4;
}


else if(pass==4)
{
      bc=bc-(2*(pl+1));

car.position.x-=1*(pl+1);
right.position.x-=1*(pl+1);
left.position.x-=1*(pl+1);
right.rotation.z+=(0.2)*((pl+1)/3);
left.rotation.z+=0.2*((pl+1)/3);
PIEsetAreaOfInterest(1500+bc,100,0,0);

  //  pl=(10/(v/5))-1;

if(car.position.x>800)
{
    pl=(15/(v/5))-1;

 got=0;
  PIEupdateTableRow(1,['A',0,0,0,"-"]);
}
else if(car.position.x>((228)))
{
      pl=(15/(v/5))-1;

  PIEupdateTableRow(2,['B',10,got2,v,10/v]);

}

else if(car.position.x>((228)-(586*1)))
{
        pl=(15/(v/5))-1;

PIEupdateTableRow(3,['P',20,got3,v,10/v]);

}

else if(car.position.x>((228)-(586*2)))
{
        pl=(15/(w/5))-1;

PIEupdateTableRow(4,['C',30,got4,w,10/w]);

}

else if(car.position.x>((228)-(586*3)))
{
        pl=(15/(w/5))-1;

PIEupdateTableRow(5,['D',40,got5,w,10/w]);
}
else if(car.position.x>((228)-(586*4)))
{
        pl=(15/(w/5))-1;

PIEupdateTableRow(6,['Q',50,got6,w,10/w]);

}

else if(car.position.x>((228)-(586*5)))
{
        pl=(15/(y/5))-1;
PIEupdateTableRow(7,['R',60,got7,y,10/y]);

}
else if(car.position.x>((228)-(586*6)))
{
        pl=(15/(z/5))-1;

PIEupdateTableRow(8,['E',70,got8,z,10/z]);
}
else if(car.position.x>((228)-(586*7)))
{
        pl=(15/(z/5))-1;

PIEupdateTableRow(9,['F',80,got9,z,10/z]);

}
else if(car.position.x>((228)-(586*8)))
{
        pl=(15/(z/5))-1;

PIEupdateTableRow(10,['S',90,got10,z,10/z]);
}
else if(car.position.x>((228)-(586*9)))
{

        pl=(15/(u/5))-1;

PIEupdateTableRow(11,['G',100,got11,u,10/u]);
PIEupdateTableRow(12,['All points',100,got11,"-",100/got11]);
}

}




}
}


PIErender();

}