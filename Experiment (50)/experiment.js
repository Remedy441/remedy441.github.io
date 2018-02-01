var c1,rad1=30,text1,ram=true,linem,textk,ct1,ct3,line83,line82,line81,w=window.innerwidth,c6,text10,c2,c3,c11,c12,c13,rad2=20,c23,line65,line66,c31,c32,line11,line2,line33,line441,line442,line4,line21,line22,line23,line24,line41,line42,line43,line44,line45,line46,line51,line52,line54,line53,line61,line62,line64,line63,rad=30;
var Radius='RADIUS';

var helpContent;

var w,text1,text2,h,w1,h1;


function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Reflection at Concave Mirror Help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows the reflection of parallel rays at concave mirror and how they are affected with change in radius</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to radius slider.</p>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Radius - controls the radius of the concave mirror.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>You also have an additional text input to control the Radius of mirror.</p>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the moving incident rays get reflected at surface of concave mirror obeying the laws of physics.</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play button on the top line</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animation by uing the speed control buttons</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Reflection at Concave Mirror concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows the reflection of parallel rays at concave mirror and how they are affected with change in radius</p>";
    infoContent = infoContent + "<h3>Concave Mirror</h3>";
    infoContent = infoContent + "<p> A concave mirror was described as a portion of a sphere that had been sliced away. If the inside of the sphere is silvered such that it can reflect light, then the mirror is said to be concave.</p>";
    infoContent = infoContent + "<p>The mirror has a pole (P) where mirror and principal axis intersect.</p>";
    infoContent = infoContent + "<p> The center of that original sphere is known as the center of curvature (C) and the line that passes from the mirror's surface through the sphere's center is known as the principal axis.</p>";
    infoContent = infoContent + "<p>The mirror has a focal point (F) that is located along the principal axis, midway between the mirror's surface and the center of curvature.</p>";
    infoContent = infoContent + "<p>A concave mirror is sometimes referred to as a converging mirror due to the fact that light rays are converging to a point after reflecting off the mirror.</p>";
    infoContent = infoContent + "<h3>Reflection of rays parallel to the principal axis of the Concave mirror</h3>";
    infoContent = infoContent + "<p>Any incident ray traveling parallel to the principal axis on the way to the mirror will pass through the focal point upon reflection.</p>";
    infoContent = infoContent + "<p>The rays after reflection get converged at focus.</p>";
    infoContent = infoContent + "<p>Thus image is formed at the principal focus which is highly diminished and real </p>";
    
    PIEupdateInfo(infoContent);
}
var a,b;
function newrad(newValue)
{
    rad1 = newValue;
    rad2=newValue;
    
    
    	var ckgeometry = new THREE.RingGeometry(  rad1, rad1+1.4, 32 ,8,-0.35* Math.PI,0.7*Math.PI);
        c1.geometry=ckgeometry;
        ckgeometry = new THREE.RingGeometry(  rad1+1.4, rad1+2.4, 32 ,8,-0.35* Math.PI,0.7*Math.PI);
        c6.geometry=ckgeometry;
        c1.position.x-=(rad1-rad);
       c6.position.x=c1.position.x;
        
        c2.position.x=c1.position.x+(rad1/2.0);
        c3.position.x=c1.position.x;
        
        c11.position.x=c1.position.x+Math.sqrt(rad1*rad1-5*5);
        c12.position.x=c1.position.x+Math.sqrt(rad1*rad1-10*10);
        c13.position.x=c1.position.x+Math.sqrt(rad1*rad1-5*5);
        c23.position.x=c1.position.x+Math.sqrt(rad1*rad1-10*10);
        c31.position.x=c1.position.x+Math.sqrt(rad1*rad1-15*15);
        c32.position.x=c1.position.x+Math.sqrt(rad1*rad1-15*15);
        
        rad=rad1;

        ct1.position.x=c1.position.x;

        line81.geometry.vertices[0].x=c2.position.x;
        line81.geometry.vertices[1].x=c2.position.x;
        line81.geometry.vertices[2].x=c2.position.x-1;
        line81.geometry.verticesNeedUpdate=true;
        line82.geometry.vertices[0].x=c2.position.x;
        line82.geometry.vertices[1].x=c2.position.x-1;
        line82.geometry.verticesNeedUpdate=true;


        line11.geometry.vertices[1].x= c1.position.x+Math.sqrt(rad1*rad1-5*5);
        line11.geometry.verticesNeedUpdate = true;
        line2.geometry.vertices[1].x= c1.position.x+Math.sqrt(rad1*rad1-10*10);
        line2.geometry.verticesNeedUpdate = true;
        line33.geometry.vertices[1].x= c1.position.x+Math.sqrt(rad1*rad1-5*5);
        line33.geometry.verticesNeedUpdate = true;
        line4.geometry.vertices[1].x= c1.position.x+Math.sqrt(rad1*rad1-10*10);
        line4.geometry.verticesNeedUpdate = true;
        line71.geometry.vertices[1].x= c1.position.x+Math.sqrt(rad1*rad1-15*15);
        line71.geometry.verticesNeedUpdate = true;
        line72.geometry.vertices[1].x= c1.position.x+Math.sqrt(rad1*rad1-15*15);
        line72.geometry.verticesNeedUpdate = true;

        line61.geometry.vertices[0].x= c1.position.x+Math.sqrt(rad1*rad1-5*5);
        line61.geometry.vertices[1].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-5*5)))/3;
        line61.geometry.verticesNeedUpdate = true;
        line62.geometry.vertices[0].x= c1.position.x+Math.sqrt(rad1*rad1-10*10);
        line62.geometry.vertices[1].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-10*10)))/3;
        line62.geometry.verticesNeedUpdate = true;
        line63.geometry.vertices[0].x= c1.position.x+Math.sqrt(rad1*rad1-5*5);
        line63.geometry.vertices[1].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-5*5)))/3;
        line63.geometry.verticesNeedUpdate = true;
        line64.geometry.vertices[0].x= c1.position.x+Math.sqrt(rad1*rad1-10*10);
        line64.geometry.vertices[1].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-10*10)))/3;
        line64.geometry.verticesNeedUpdate = true;
        line65.geometry.vertices[0].x= c1.position.x+Math.sqrt(rad1*rad1-15*15);
        line65.geometry.vertices[1].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-15*15)))/3;
        line65.geometry.verticesNeedUpdate = true;
        line66.geometry.vertices[0].x= c1.position.x+Math.sqrt(rad1*rad1-15*15);
        line66.geometry.vertices[1].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-15*15)))/3;
        line66.geometry.verticesNeedUpdate = true;
        
        line51.geometry.vertices[0].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-5*5)))/3+1.5;
        line51.geometry.vertices[1].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-5*5)))/3;
        line51.geometry.vertices[2].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-5*5)))/3+0.5;
        line51.geometry.verticesNeedUpdate = true;
        line52.geometry.vertices[0].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-10*10)))/3+1;
        line52.geometry.vertices[1].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-10*10)))/3;
        line52.geometry.vertices[2].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-10*10)))/3;
        line52.geometry.verticesNeedUpdate = true;
        line53.geometry.vertices[0].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-5*5)))/3+1;
        line53.geometry.vertices[1].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-5*5)))/3;
        line53.geometry.vertices[2].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-5*5)))/3+0.5;
        line53.geometry.verticesNeedUpdate = true;
        line54.geometry.vertices[0].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-10*10)))/3+1;
        line54.geometry.vertices[1].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-10*10)))/3;
        line54.geometry.vertices[2].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-10*10)))/3;
        line54.geometry.verticesNeedUpdate = true;
        line55.geometry.vertices[0].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-15*15)))/3+1;
        line55.geometry.vertices[1].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-15*15)))/3;
        line55.geometry.vertices[2].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-15*15)))/3;
        line55.geometry.verticesNeedUpdate = true;
        line56.geometry.vertices[0].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-15*15)))/3+1;
        line56.geometry.vertices[1].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-15*15)))/3;
        line56.geometry.vertices[2].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-15*15)))/3;
        line56.geometry.verticesNeedUpdate = true;
        line442.geometry.vertices[0].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1)))/3+1;
        line442.geometry.vertices[1].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1)))/3;
        line442.geometry.vertices[2].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1)))/3+1;
        line442.geometry.verticesNeedUpdate = true;
        i=0;
    PIErender();
    PIEstartAnimation();

}
var ri=30;
var rmin=30;
var rmax=50;
var fold=1;
var centre="AOI-L";
var focus="AOR-L";
var radiustext="RADIUS"
var k1=20;
var k2=20;
var k3=30;
function initialisecontrols()
{
   
}
        function loadExperimentElements()
        {
        	initialiseInfo();
            initialiseHelp();
            PIEsetExperimentTitle("REFLECTION AT A CONCAVE MIRROR");
            PIEsetDeveloperName("Hemanth Katari");
            PIEhideControlElement();
            initialisecontrols();
            document.title = "REFLECTION AT A CONCAVE MIRROR";
        PIEaddInputSlider(Radius,ri,newrad,rmin,rmax,fold);
        PIEaddDisplayText(radiustext, k3);
       
        var geometry;
        var material;

        
         geometry = new THREE.BoxGeometry( 300,300,0);
         material = new THREE.MeshBasicMaterial( {color: 0xFCEDB2} );
        myFloor1  = new THREE.Mesh( geometry, material );
         myFloor1.position.set(0,3,0);
            myFloor1.receiveShadow = true;
         PIEaddElement(myFloor1);
       
        geometry = new THREE.RingGeometry(  30, 31.4, 32 ,8,-0.35* Math.PI,0.7*Math.PI);
        material = new THREE.LineBasicMaterial( { color: 0x1e0987, side: THREE.DoubleSide } );
         c1 = new THREE.Mesh( geometry, material );
        c1.position.set(10,0, 0.0);
        PIEaddElement(c1);

        geometry = new THREE.RingGeometry(  31.4, 32.4, 32 ,8,-0.35* Math.PI,0.7*Math.PI);
        material = new THREE.MeshStandardMaterial( { color: 0xa6add2, side: THREE.DoubleSide } );
         c6 = new THREE.Mesh( geometry, material );
        c6.position.set(10,0, 0.0);
        PIEaddElement(c6);
        
        geometry = new THREE.SphereGeometry( 0.6, 20,20);
        material = new THREE.LineBasicMaterial( { color: 0x006b27, side: THREE.DoubleSide } );
         c2 = new THREE.Mesh( geometry, material );
        c2.position.x = 25;
        c2.position.y = 0;
        c2.position.z = 0;
        PIEaddElement(c2);

        geometry = new THREE.SphereGeometry( 0.6, 20,20);
        material = new THREE.LineBasicMaterial( { color: 0x006b27, side: THREE.DoubleSide } );
         c3 = new THREE.Mesh( geometry, material );
        c3.position.x = 10;
        c3.position.y = 0;
        c3.position.z = 0;
        PIEaddElement(c3);

        geometry = new THREE.SphereGeometry( 0.4, 20,20);
        material = new THREE.LineBasicMaterial( { color: 0xff0000, side: THREE.DoubleSide } );
         cm = new THREE.Mesh( geometry, material );
        cm.position.x = 40;
        cm.position.y = 0;
        cm.position.z = 0;
        PIEaddElement(cm);
        geometry = new THREE.SphereGeometry( 0.4, 20,20);
        material = new THREE.LineBasicMaterial( { color: 0xff0000, side: THREE.DoubleSide } );
        c11 = new THREE.Mesh( geometry, material );
        c11.position.x = 10+Math.sqrt((rad)*(rad)-5*5);
        c11.position.y = 5;
        c11.position.z = 0;
        PIEaddElement(c11);
        geometry = new THREE.SphereGeometry( 0.4, 20,20);
        material = new THREE.LineBasicMaterial( { color: 0xff0000, side: THREE.DoubleSide } );
         c12 = new THREE.Mesh( geometry, material );
        c12.position.x = 10+Math.sqrt((rad)*(rad)-10*10);
        c12.position.y = 10;
        c12.position.z = 0;
        PIEaddElement(c12);
        geometry = new THREE.SphereGeometry( 0.4, 20,20);
        material = new THREE.LineBasicMaterial( { color: 0xff0000, side: THREE.DoubleSide } );
         c13 = new THREE.Mesh( geometry, material );
        c13.position.x = 10+Math.sqrt((rad)*(rad)-5*5);
        c13.position.y = -5;
        c13.position.z = 0;
        PIEaddElement(c13);
        geometry = new THREE.SphereGeometry( 0.4, 20,20);
        material = new THREE.LineBasicMaterial( { color: 0xff0000, side: THREE.DoubleSide } );
         c23 = new THREE.Mesh( geometry,material );
        c23.position.x = 10+Math.sqrt((rad)*(rad)-10*10);
        c23.position.y = -10;
        c23.position.z = 0;
        PIEaddElement(c23);
        geometry = new THREE.SphereGeometry( 0.4, 20,20);
        material = new THREE.LineBasicMaterial( { color: 0xff0000, side: THREE.DoubleSide } );
         c31 = new THREE.Mesh( geometry,material );
        c31.position.x = 10+Math.sqrt((rad)*(rad)-15*15);
        c31.position.y = -15;
        c31.position.z = 0;
        PIEaddElement(c31);
        geometry = new THREE.SphereGeometry( 0.4, 20,20);
        material = new THREE.LineBasicMaterial( { color: 0xff0000, side: THREE.DoubleSide } );
         c32 = new THREE.Mesh( geometry,material );
        c32.position.x = 10+Math.sqrt((rad)*(rad)-15*15);
        c32.position.y = 15;
        c32.position.z = 0;
        PIEaddElement(c32);
        
        geometry = new THREE.RingGeometry(  0.8, 1, 32 ,8,-0.5* Math.PI,Math.PI);
        material = new THREE.LineBasicMaterial( { color: 0x000000, side: THREE.DoubleSide } );
         ct1 = new THREE.Mesh( geometry, material );
        ct1.position.set(10,-3, 0.0);
        PIEaddElement(ct1);
        
        geometry = new THREE.RingGeometry(  0.7, 0.8, 32 ,8,0.5* Math.PI,Math.PI);
        material = new THREE.LineBasicMaterial( { color: 0x000000, side: THREE.DoubleSide } );
         ct3 = new THREE.Mesh( geometry, material );
        ct3.position.set(45,-3.5, 0.0);
        PIEaddElement(ct3);
       
        material = new THREE.MeshBasicMaterial({color: 0x000000,linewidth:2});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 25, -4, 0 ),new THREE.Vector3( 25, -2, 0 ),new THREE.Vector3( 24, -2, 0 ));
        line81 = new THREE.Line( geometry, material );
        PIEaddElement(line81);
        
        material = new THREE.LineDashedMaterial({color: 0x000000,linewidth:2});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 25, -3 ,0),new THREE.Vector3( 24, -3, 0 ));
        line82 = new THREE.Line( geometry, material );
        PIEaddElement(line82);

        material = new THREE.MeshBasicMaterial({color: 0x000000,linewidth:2});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 45, -5.5, 0 ),new THREE.Vector3( 45, -2.6, 0 ));
        line83 = new THREE.Line( geometry, material );
        PIEaddElement(line83);
        

        material = new THREE.LineBasicMaterial({color: 0x1e0987});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -300, 0, 0 ),new THREE.Vector3( 300, 0, 0 ));
        var line = new THREE.Line( geometry, material );
        PIEaddElement(line);
        
        material = new THREE.LineBasicMaterial({color: 0xff0000});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -60, 0, 0 ),new THREE.Vector3( 40, 0, 0 ));
         linem = new THREE.Line( geometry, material );
        PIEaddElement(linem);

        material = new THREE.MeshBasicMaterial({color: 0xff0000});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -60, 5, 0 ),new THREE.Vector3( 10+Math.sqrt(rad*rad-5*5), 5, 0 ));
        line11 = new THREE.Line( geometry, material );
        PIEaddElement(line11);

        material = new THREE.LineDashedMaterial({color: 0xff0000});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -60, 10 ,0),new THREE.Vector3( 10+Math.sqrt(rad*rad-10*10), 10,0 ));
        line2 = new THREE.Line( geometry, material );
        PIEaddElement(line2);

        material = new THREE.LineDashedMaterial({color: 0xff0000});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -60, -5,0),new THREE.Vector3( 10+Math.sqrt(rad*rad-5*5), -5,0 ));
        line33 = new THREE.Line( geometry, material );
        PIEaddElement(line33);

        material = new THREE.LineDashedMaterial({color: 0xff0000});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -60,  -10 ,0),new THREE.Vector3( 10+Math.sqrt(rad*rad-10*10), -10,0 ));
        line4 = new THREE.Line( geometry, material );
        PIEaddElement(line4);

        material = new THREE.LineDashedMaterial({color: 0xff0000});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -60, -15,0),new THREE.Vector3( 10+Math.sqrt(rad*rad-15*15), -15,0 ));
        line71 = new THREE.Line( geometry, material );
        PIEaddElement(line71);

        material = new THREE.LineDashedMaterial({color: 0xff0000});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -60, 15,0),new THREE.Vector3( 10+Math.sqrt(rad*rad-15*15), 15,0 ));
        line72 = new THREE.Line( geometry, material );
        PIEaddElement(line72);

        material = new THREE.LineDashedMaterial({color: 0xff0000});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 10+Math.sqrt(rad*rad-5*5), 5, 0 ),
            new THREE.Vector3( (5*25-2*(10+Math.sqrt(rad*rad-5*5)))/3,-2*5/3,0 ));
        line61 = new THREE.Line( geometry, material );
        PIEaddElement(line61);
        material = new THREE.LineDashedMaterial({color: 0xff0000});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 10+Math.sqrt(rad*rad-10*10), 10,0 ),
            new THREE.Vector3(  (5*25-2*(10+Math.sqrt(rad*rad-10*10)))/3,-2*10/3,0 ) );
        line62 = new THREE.Line( geometry, material );
        PIEaddElement(line62);
        material = new THREE.LineDashedMaterial({color: 0xff0000});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 10+Math.sqrt(rad*rad-5*5), -5,0 ),
            new THREE.Vector3( (5*25-2*(10+Math.sqrt(rad*rad-5*5)))/3,2*5/3,0 ));
        line63 = new THREE.Line( geometry, material );
        PIEaddElement(line63);
        material = new THREE.LineDashedMaterial({color: 0xff0000});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 10+Math.sqrt(rad*rad-10*10), -10,0 ),
            new THREE.Vector3( (5*25-2*(10+Math.sqrt(rad*rad-10*10)))/3,2*10/3,0));
        line64 = new THREE.Line( geometry, material );
        PIEaddElement(line64);
        material = new THREE.LineDashedMaterial({color: 0xff0000});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 10+Math.sqrt(rad*rad-15*15), -15,0 ),
            new THREE.Vector3( (5*25-2*(10+Math.sqrt(rad*rad-15*15)))/3,2*15/3,0));
        line65 = new THREE.Line( geometry, material );
        PIEaddElement(line65);
        material = new THREE.LineDashedMaterial({color: 0xff0000});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 10+Math.sqrt(rad*rad-15*15), 15,0 ),
            new THREE.Vector3( (5*25-2*(10+Math.sqrt(rad*rad-15*15)))/3,-2*15/3,0));
        line66 = new THREE.Line( geometry, material );
        PIEaddElement(line66);

        
        material = new THREE.LineDashedMaterial({color: 0xff0000});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -36,5.7, 0 ),new THREE.Vector3( -35,5,0 ),new THREE.Vector3( -36,4.3,0 ));
        line41 = new THREE.Line( geometry, material );
        PIEaddElement(line41);
        material = new THREE.LineDashedMaterial({color: 0xff0000});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -36,10.7, 0 ),new THREE.Vector3( -35,10,0 ),new THREE.Vector3( -36,9.3,0 ));
        line42 = new THREE.Line( geometry, material );
        PIEaddElement(line42);
        material = new THREE.LineDashedMaterial({color: 0xff0000});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -36,-5.7, 0 ),new THREE.Vector3( -35,-5,0 ),new THREE.Vector3( -36,-4.3,0 ));
        line43 = new THREE.Line( geometry, material );
        PIEaddElement(line43);
        material = new THREE.LineDashedMaterial({color: 0xff0000});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -36,-10.7, 0 ),new THREE.Vector3( -35,-10,0 ),new THREE.Vector3( -36,-9.3,0 ));
        line44 = new THREE.Line( geometry, material );
        PIEaddElement(line44);
        material = new THREE.LineDashedMaterial({color: 0xff0000});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -36,-15.7, 0 ),new THREE.Vector3( -35,-15,0 ),new THREE.Vector3( -36,-14.3,0 ));
        line45 = new THREE.Line( geometry, material );
        PIEaddElement(line45);
        material = new THREE.LineDashedMaterial({color: 0xff0000});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -36,15.7, 0 ),new THREE.Vector3( -35,15,0 ),new THREE.Vector3( -36,14.3,0 ));
        line46 = new THREE.Line( geometry, material );
        PIEaddElement(line46);
        
        material = new THREE.LineDashedMaterial({color: 0xff0000});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -36,-0.7, 0 ),new THREE.Vector3( -35,0,0 ),new THREE.Vector3( -36,0.7,0 ));
        line441 = new THREE.Line( geometry, material );
        PIEaddElement(line441);
        material = new THREE.LineDashedMaterial({color: 0xff0000});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 16,-0.7, 0 ),new THREE.Vector3( 15,0,0 ),new THREE.Vector3( 16,0.7,0 ));
        line442 = new THREE.Line( geometry, material );
        PIEaddElement(line442);
        
        material = new THREE.LineDashedMaterial({color: 0xff0000});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( ((5*25-2*(10+Math.sqrt(rad*rad-5*5)))/3)+1,-2*5/3-0.5,0),new THREE.Vector3( (5*25-2*(10+Math.sqrt(rad*rad-5*5)))/3,-2*5/3,0),new THREE.Vector3(((5*25-2*(10+Math.sqrt(rad*rad-5*5)))/3)+0.5,(-2*5/3)+1,0));
        line51 = new THREE.Line( geometry, material );
        PIEaddElement(line51);
        material = new THREE.LineDashedMaterial({color: 0xff0000});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( ((5*25-2*(10+Math.sqrt(rad*rad-10*10)))/3)+1,-2*10/3,0),new THREE.Vector3( (5*25-2*(10+Math.sqrt(rad*rad-10*10)))/3,-2*10/3,0),new THREE.Vector3(((5*25-2*(10+Math.sqrt(rad*rad-10*10)))/3),(-2*10/3)+1,0));
        line52 = new THREE.Line( geometry, material );
        PIEaddElement(line52);
        material = new THREE.LineDashedMaterial({color: 0xff0000});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( ((5*25-2*(10+Math.sqrt(rad*rad-5*5)))/3)+1,2*5/3+0.5,0),new THREE.Vector3( (5*25-2*(10+Math.sqrt(rad*rad-5*5)))/3,2*5/3,0),new THREE.Vector3(((5*25-2*(10+Math.sqrt(rad*rad-5*5)))/3)+0.5,(2*5/3)-1,0));
        line53 = new THREE.Line( geometry, material );
        PIEaddElement(line53);
        material = new THREE.LineDashedMaterial({color: 0xff0000});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( ((5*25-2*(10+Math.sqrt(rad*rad-10*10)))/3)+1,2*10/3,0),new THREE.Vector3( (5*25-2*(10+Math.sqrt(rad*rad-10*10)))/3,2*10/3,0),new THREE.Vector3(((5*25-2*(10+Math.sqrt(rad*rad-10*10)))/3),(2*10/3)-1,0));
        line54 = new THREE.Line( geometry, material );
        PIEaddElement(line54);
        material = new THREE.LineDashedMaterial({color: 0xff0000});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( ((5*25-2*(10+Math.sqrt(rad*rad-15*15)))/3)+1,-2*15/3-0.2,0),new THREE.Vector3( (5*25-2*(10+Math.sqrt(rad*rad-15*15)))/3,-2*15/3,0),new THREE.Vector3(((5*25-2*(10+Math.sqrt(rad*rad-15*15)))/3),-(2*15/3)+1,0));
        line55 = new THREE.Line( geometry, material );
        PIEaddElement(line55);
        material = new THREE.LineDashedMaterial({color: 0xff0000});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( ((5*25-2*(10+Math.sqrt(rad*rad-15*15)))/3)+1,2*15/3-0.2,0),new THREE.Vector3( (5*25-2*(10+Math.sqrt(rad*rad-15*15)))/3,2*15/3,0),new THREE.Vector3(((5*25-2*(10+Math.sqrt(rad*rad-15*15)))/3),(2*15/3)-1,0));
        line56 = new THREE.Line( geometry, material );
        PIEaddElement(line56);
        PIEresize();
        resetExperiment();
        PIEsetAreaOfInterest(-60, -60, 60, 60);
        

}
function resetExperiment()
{
	rad1=30;
    line51.traverse(  function ( child ) { child.visible = true; } );
        line52.traverse(  function ( child ) { child.visible = true; } );
        line53.traverse(  function ( child ) { child.visible = true; } );
        line54.traverse(  function ( child ) { child.visible = true; } );
        line55.traverse(  function ( child ) { child.visible = true; } );
        line56.traverse(  function ( child ) { child.visible = true; } );
        line442.traverse(  function ( child ) { child.visible = true; } );
        line41.traverse(  function ( child ) { child.visible = true; } );
        line42.traverse(  function ( child ) { child.visible = true; } );
        line43.traverse(  function ( child ) { child.visible = true; } );
        line44.traverse(  function ( child ) { child.visible = true; } );
        line45.traverse(  function ( child ) { child.visible = true; } );
        line46.traverse(  function ( child ) { child.visible = true; } );
        line441.traverse(  function ( child ) { child.visible = true; } );
        c11.traverse(  function ( child ) { child.visible = true; } );
        c12.traverse(  function ( child ) { child.visible = true; } );
        c13.traverse(  function ( child ) { child.visible = true; } );
        c23.traverse(  function ( child ) { child.visible = true; } );
        c31.traverse(  function ( child ) { child.visible = true; } );
        c32.traverse(  function ( child ) { child.visible = true; } );
        cm.traverse(  function ( child ) { child.visible = true; } );

    PIEchangeInputSlider(Radius, rmin);
    PIEchangeDisplayText(radiustext, rad1);
    var ckgeometry = new THREE.RingGeometry(  rad1, rad1+1.4 , 32 ,8,-0.35* Math.PI,0.7*Math.PI);
        c1.geometry=ckgeometry;
        ckgeometry = new THREE.RingGeometry(  rad1+1.4, rad1+2.4, 32 ,8,-0.35* Math.PI,0.7*Math.PI);
        c6.geometry=ckgeometry;
        
        c1.position.x-=(rad1-rad);
        c6.position.x=c1.position.x;
        c2.position.x=c1.position.x+(rad1/2.0);
        c3.position.x=c1.position.x;
       

        ct1.position.x=c1.position.x;

        line81.geometry.vertices[0].x=c2.position.x;
        line81.geometry.vertices[1].x=c2.position.x;
        line81.geometry.vertices[2].x=c2.position.x-1;
        line81.geometry.verticesNeedUpdate=true;
        line82.geometry.vertices[0].x=c2.position.x;
        line82.geometry.vertices[1].x=c2.position.x-1;
        line82.geometry.verticesNeedUpdate=true;


       c11.position.x=c1.position.x+Math.sqrt(rad1*rad1-5*5);
        c12.position.x=c1.position.x+Math.sqrt(rad1*rad1-10*10);
        c13.position.x=c1.position.x+Math.sqrt(rad1*rad1-5*5);
        c23.position.x=c1.position.x+Math.sqrt(rad1*rad1-10*10);
        c31.position.x=c1.position.x+Math.sqrt(rad1*rad1-15*15);
        c32.position.x=c1.position.x+Math.sqrt(rad1*rad1-15*15);
        
        rad=rad1;

        line11.geometry.vertices[1].x= c1.position.x+Math.sqrt(rad1*rad1-5*5);
        line11.geometry.verticesNeedUpdate = true;
        line2.geometry.vertices[1].x= c1.position.x+Math.sqrt(rad1*rad1-10*10);
        line2.geometry.verticesNeedUpdate = true;
        line33.geometry.vertices[1].x= c1.position.x+Math.sqrt(rad1*rad1-5*5);
        line33.geometry.verticesNeedUpdate = true;
        line4.geometry.vertices[1].x= c1.position.x+Math.sqrt(rad1*rad1-10*10);
        line4.geometry.verticesNeedUpdate = true;
        line71.geometry.vertices[1].x= c1.position.x+Math.sqrt(rad1*rad1-15*15);
        line71.geometry.verticesNeedUpdate = true;
        line72.geometry.vertices[1].x= c1.position.x+Math.sqrt(rad1*rad1-15*15);
        line72.geometry.verticesNeedUpdate = true;

        

        line61.geometry.vertices[0].x= c1.position.x+Math.sqrt(rad1*rad1-5*5);
        line61.geometry.vertices[1].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-5*5)))/3;
        line61.geometry.verticesNeedUpdate = true;
        line62.geometry.vertices[0].x= c1.position.x+Math.sqrt(rad1*rad1-10*10);
        line62.geometry.vertices[1].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-10*10)))/3;
        line62.geometry.verticesNeedUpdate = true;
        line63.geometry.vertices[0].x= c1.position.x+Math.sqrt(rad1*rad1-5*5);
        line63.geometry.vertices[1].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-5*5)))/3;
        line63.geometry.verticesNeedUpdate = true;
        line64.geometry.vertices[0].x= c1.position.x+Math.sqrt(rad1*rad1-10*10);
        line64.geometry.vertices[1].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-10*10)))/3;
        line64.geometry.verticesNeedUpdate = true;
        line65.geometry.vertices[0].x= c1.position.x+Math.sqrt(rad1*rad1-15*15);
        line65.geometry.vertices[1].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-15*15)))/3;
        line65.geometry.verticesNeedUpdate = true;
        line66.geometry.vertices[0].x= c1.position.x+Math.sqrt(rad1*rad1-15*15);
        line66.geometry.vertices[1].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-15*15)))/3;
        line66.geometry.verticesNeedUpdate = true;
        
        line61.geometry.vertices[0].y= 5;
        line61.geometry.vertices[1].y= -2*5/3.0;
        line61.geometry.verticesNeedUpdate = true;
        line62.geometry.vertices[0].y= 10;
        line62.geometry.vertices[1].y= -2*10/3.0;
        line62.geometry.verticesNeedUpdate = true;
        line63.geometry.vertices[0].y= -5;
        line63.geometry.vertices[1].y= 2*5/3.0;
        line63.geometry.verticesNeedUpdate = true;
        line64.geometry.vertices[0].y= -10;
        line64.geometry.vertices[1].y= 2*10/3.0;
        line64.geometry.verticesNeedUpdate = true;
        line65.geometry.vertices[0].y= -15;
        line65.geometry.vertices[1].y= 2*15/3.0;
        line65.geometry.verticesNeedUpdate = true;
        line66.geometry.vertices[0].y= 15;
        line66.geometry.vertices[1].y= -2*15/3.0;
        line66.geometry.verticesNeedUpdate = true;
        
        linem.geometry.vertices[0].x= -60;
        linem.geometry.vertices[0].y= 0;
        linem.geometry.vertices[1].x= 40;
        linem.geometry.vertices[1].y= 0;
        linem.geometry.verticesNeedUpdate = true;

        line51.geometry.vertices[0].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-5*5)))/3+1.5;
        line51.geometry.vertices[1].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-5*5)))/3;
        line51.geometry.vertices[2].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-5*5)))/3+0.5;
        line51.geometry.verticesNeedUpdate = true;
        line52.geometry.vertices[0].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-10*10)))/3+1;
        line52.geometry.vertices[1].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-10*10)))/3;
        line52.geometry.vertices[2].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-10*10)))/3;
        line52.geometry.verticesNeedUpdate = true;
        line53.geometry.vertices[0].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-5*5)))/3+1;
        line53.geometry.vertices[1].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-5*5)))/3;
        line53.geometry.vertices[2].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-5*5)))/3+0.5;
        line53.geometry.verticesNeedUpdate = true;
        line54.geometry.vertices[0].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-10*10)))/3+1;
        line54.geometry.vertices[1].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-10*10)))/3;
        line54.geometry.vertices[2].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-10*10)))/3;
        line54.geometry.verticesNeedUpdate = true;
        line55.geometry.vertices[0].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-15*15)))/3+1;
        line55.geometry.vertices[1].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-15*15)))/3;
        line55.geometry.vertices[2].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-15*15)))/3;
        line55.geometry.verticesNeedUpdate = true;
        line56.geometry.vertices[0].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-15*15)))/3+1;
        line56.geometry.vertices[1].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-15*15)))/3;
        line56.geometry.vertices[2].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-15*15)))/3;
        line56.geometry.verticesNeedUpdate = true;
        line442.geometry.vertices[0].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1)))/3+1;
        line442.geometry.vertices[1].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1)))/3;
        line442.geometry.vertices[2].x= (5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1)))/3+1;
        line442.geometry.verticesNeedUpdate = true;
        i=0;
        
}

var i=0,m1,m2,m3,m4,m5,m6,cap,j,c,m7,flag=0,speed=20;
function updateExperimentElements(t, dt)
{

    if(dt>10 && dt<30)
    {
        speed=20
    }
    else if(dt>=30 && dt<=60)
    {
        speed=40;
    }
    else if(dt>60)
    {
        speed=60;
    }
    else if(dt>=7.5 && dt<=10)
    {
        speed=13;
    }
    else if(dt>=3.75 && dt<7.5)
    {
        speed=10;
    }
    else if(dt<3.75)
    {
        speed=7;
    }
    if(flag!=0)
    {
    if(i==0)
    {
    	line11.geometry.vertices[1].x= -60;
        line11.geometry.verticesNeedUpdate = true;
        linem.geometry.vertices[1].x= -60;
        linem.geometry.verticesNeedUpdate = true;
        line2.geometry.vertices[1].x= -60;
        line2.geometry.verticesNeedUpdate = true;
        line33.geometry.vertices[1].x= -60;
        line33.geometry.verticesNeedUpdate = true;
        line4.geometry.vertices[1].x= -60;
        line4.geometry.verticesNeedUpdate = true;
        line71.geometry.vertices[1].x= -60;
        line71.geometry.verticesNeedUpdate = true;
        line72.geometry.vertices[1].x= -60;
        line72.geometry.verticesNeedUpdate = true;

        linem.geometry.vertices[1].x=-60;
        linem.geometry.verticesNeedUpdate = true;

        m1=c1.position.x+Math.sqrt(rad1*rad1-5*5);
        line61.geometry.vertices[1].x=m1;
        line61.geometry.vertices[1].y=5;
        line61.geometry.verticesNeedUpdate = true;
        m2=c1.position.x+Math.sqrt(rad1*rad1-10*10);
        line62.geometry.vertices[1].x=m2;
        line62.geometry.vertices[1].y=10;
        line62.geometry.verticesNeedUpdate = true;
        m3=c1.position.x+Math.sqrt(rad1*rad1-5*5);
        line63.geometry.vertices[1].x=m3;
        line63.geometry.vertices[1].y=-5;
        line63.geometry.verticesNeedUpdate = true;
        m4=c1.position.x+Math.sqrt(rad1*rad1-10*10);
        line64.geometry.vertices[1].x=m4;
        line64.geometry.vertices[1].y=-10;
        line64.geometry.verticesNeedUpdate = true;
        m5=c1.position.x+Math.sqrt(rad1*rad1-15*15);
        line65.geometry.vertices[1].x=m5;
        line65.geometry.vertices[1].y=-15;
        line65.geometry.verticesNeedUpdate = true;
        m6=c1.position.x+Math.sqrt(rad1*rad1-15*15);
        line66.geometry.vertices[1].x=m6;
        line66.geometry.vertices[1].y=15;
        line66.geometry.verticesNeedUpdate = true;
        m7=c1.position.x;
        
        line41.traverse(  function ( child ) { child.visible = false; } );
		line42.traverse(  function ( child ) { child.visible = false; } );
		line43.traverse(  function ( child ) { child.visible = false; } );
		line44.traverse(  function ( child ) { child.visible = false; } );
		line45.traverse(  function ( child ) { child.visible = false; } );
		line46.traverse(  function ( child ) { child.visible = false; } );
		line51.traverse(  function ( child ) { child.visible = false; } );
		line52.traverse(  function ( child ) { child.visible = false; } );
		line53.traverse(  function ( child ) { child.visible = false; } );
		line54.traverse(  function ( child ) { child.visible = false; } );
		line55.traverse(  function ( child ) { child.visible = false; } );
		line56.traverse(  function ( child ) { child.visible = false; } );
		line441.traverse(  function ( child ) { child.visible = false; } );
    	line442.traverse(  function ( child ) { child.visible = false; } );

        c11.traverse(  function ( child ) { child.visible = false; } );
		c12.traverse(  function ( child ) { child.visible = false; } );
		c13.traverse(  function ( child ) { child.visible = false; } );
		c23.traverse(  function ( child ) { child.visible = false; } );
		c31.traverse(  function ( child ) { child.visible = false; } );
		c32.traverse(  function ( child ) { child.visible = false; } );
		cm.traverse(  function ( child ) { child.visible = false; } );
    	
        i++;
    }
        

        boundaryT = dt / 1000.0;
    
    if(linem.geometry.vertices[1].x<=40 )
        {
        linem.geometry.vertices[1].x+= 0.5*(speed/30);
        linem.geometry.verticesNeedUpdate = true;
    }


    if(line11.geometry.vertices[1].x<=c1.position.x+Math.sqrt(rad1*rad1-5*5) )
        {
        line11.geometry.vertices[1].x+= 0.5*(speed/30);
        line11.geometry.verticesNeedUpdate = true;
        
        
    }
    else if(line61.geometry.vertices[1].x>=(5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-5*5)))/3.0 )
    {
    	
    	
    	line61.geometry.vertices[1].x-= 0.5*(speed/30);
    	line61.geometry.vertices[1].y= 5-(5*(line61.geometry.vertices[1].x-m1)/((c2.position.x)-m1));
        line61.geometry.verticesNeedUpdate = true;
        line41.traverse(  function ( child ) { child.visible = true; } );
		line42.traverse(  function ( child ) { child.visible = true; } );
		line43.traverse(  function ( child ) { child.visible = true; } );
		line44.traverse(  function ( child ) { child.visible = true; } );
		line45.traverse(  function ( child ) { child.visible = true; } );
		line46.traverse(  function ( child ) { child.visible = true; } );
		line441.traverse(  function ( child ) { child.visible = true; } );
		c11.traverse(  function ( child ) { child.visible = true; } );
		c12.traverse(  function ( child ) { child.visible = true; } );
		c13.traverse(  function ( child ) { child.visible = true; } );
		c23.traverse(  function ( child ) { child.visible = true; } );
		c31.traverse(  function ( child ) { child.visible = true; } );
		c32.traverse(  function ( child ) { child.visible = true; } );
		cm.traverse(  function ( child ) { child.visible = true; } );
    }
    
    if((line2.geometry.vertices[1].x)<=(c1.position.x)+Math.sqrt(rad1*rad1-10*10) )
        {
        line2.geometry.vertices[1].x+= 0.5*(speed/30.0);
        line2.geometry.verticesNeedUpdate = true;
    }
    else if(line62.geometry.vertices[1].x>=(5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-10*10)))/3.0 )
    {
    	line62.geometry.vertices[1].x-= 0.5*(speed/30.0);
    	line62.geometry.vertices[1].y= 10-(10*(line62.geometry.vertices[1].x-m2)/((c2.position.x)-m2));
        line62.geometry.verticesNeedUpdate = true;
    }
     
    if(line4.geometry.vertices[1].x<=(c1.position.x)+Math.sqrt(rad1*rad1-10*10) )
        {
        line4.geometry.vertices[1].x+= 0.5*(speed/30.0);
        line4.geometry.verticesNeedUpdate = true;
    }
    else if(line64.geometry.vertices[1].x>=(5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-10*10)))/3.0 )
    {
    	line64.geometry.vertices[1].x-= 0.5*(speed/30.0);
    	line64.geometry.vertices[1].y= -10+(10*(line64.geometry.vertices[1].x-m4)/((c2.position.x)-m4));
        line64.geometry.verticesNeedUpdate = true;
    } 
   
    if(line33.geometry.vertices[1].x<=(c1.position.x)+Math.sqrt(rad1*rad1-5*5) )
        {
        line33.geometry.vertices[1].x+= 0.5*(speed/30.0);
        line33.geometry.verticesNeedUpdate = true;
    }
    else if(line63.geometry.vertices[1].x>=(5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-5*5)))/3.0 )
    {
        line63.geometry.vertices[1].x-= 0.5*(speed/30.0);
        line63.geometry.vertices[1].y= -5+(5*(line63.geometry.vertices[1].x-m3)/((c2.position.x)-m3));
        line63.geometry.verticesNeedUpdate = true;

    }
    else
    {
    	i=0;
    	line51.traverse(  function ( child ) { child.visible = true; } );
		line52.traverse(  function ( child ) { child.visible = true; } );
		line53.traverse(  function ( child ) { child.visible = true; } );
		line54.traverse(  function ( child ) { child.visible = true; } );
		line55.traverse(  function ( child ) { child.visible = true; } );
		line56.traverse(  function ( child ) { child.visible = true; } );
		line442.traverse(  function ( child ) { child.visible = true; } );

    	PIEstopAnimation();
    }

    if(line71.geometry.vertices[1].x<=(c1.position.x)+Math.sqrt(rad1*rad1-15*15) )
        {
        line71.geometry.vertices[1].x+= 0.5*(speed/30.0);
        line71.geometry.verticesNeedUpdate = true;
    }
    else if(line65.geometry.vertices[1].x>=(5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-15*15)))/3.0 )
    {
        line65.geometry.vertices[1].x-= 0.5*(speed/30.0);
        line65.geometry.vertices[1].y= -15+(15*(line65.geometry.vertices[1].x-m5)/((c2.position.x)-m5));
        line65.geometry.verticesNeedUpdate = true;

    }

    if(line72.geometry.vertices[1].x<=(c1.position.x)+Math.sqrt(rad1*rad1-15*15) )
        {
        line72.geometry.vertices[1].x+= 0.5*(speed/30.0);
        line72.geometry.verticesNeedUpdate = true;
        
		
    }
    else if(line66.geometry.vertices[1].x>=(5*c2.position.x-2*(c1.position.x+Math.sqrt(rad1*rad1-15*15)))/3.0 )
    {
        line66.geometry.vertices[1].x-= 0.5*(speed/30.0);
        line66.geometry.vertices[1].y= 15-(15*(line66.geometry.vertices[1].x-m6)/((c2.position.x)-m6));
        line66.geometry.verticesNeedUpdate = true;

    }
   PIEchangeDisplayText(radiustext, rad1);
    }
    else
    {
        flag=1;
    }
   
}


