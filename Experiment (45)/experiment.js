var c1,rad1=20,text1,linem,c2,c3,c11,c12,c13,rad2=20,c23,line11,line2,line33,line441,line442,line4,line21,line22,line23,line24,line41,line71,line72,line73,ct1,ct2,ct3,line42,line43,line44,line51,line52,line54,line53,line61,line62,line64,line63,rad=20;
var Radius='RADIUS';

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Reflection at Convex Mirror Help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows how the reflection of parallel rays at convex mirror get affected by changing its radius</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to radius slider.</p>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Radius - controls the radius of the convex mirror.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>You also have an additional text input to control the Radius of mirror.</p>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the moving incident rays get reflected at surface of convex mirror obeying the laws of physics.</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play button on the top line</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animaion by uing the speed control buttons</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Reflection at Convex Mirror concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows how the reflection of parallel rays at convex mirror get affected by changing its radius</p>";
    infoContent = infoContent + "<h3>Reflection</h3>";
    infoContent = infoContent + "<p> A convex mirror was described as a portion of a sphere that had been sliced away. If the outside of the sphere is silvered such that it can reflect light, then the mirror is said to be convex.</p>";
    infoContent = infoContent + "<p> The center of that original sphere is known as the center of curvature (C) and the line that passes from the mirror's surface through the sphere's center is known as the principal axis.</p>";
    infoContent = infoContent + "<p>The mirror has a focal point (F) that is located along the principal axis, midway between the mirror's surface and the center of curvature.</p>";
    infoContent = infoContent + "<p>Note that the center of curvature and the focal point are located on the side of the mirror opposite the object - behind the mirror.</p>";
    infoContent = infoContent + "<p>A convex mirror is sometimes referred to as a diverging mirror due to the fact that incident light originating from the same point and will reflect off the mirror surface and diverge.</p>";
    infoContent = infoContent + "<h3>Rays parallel to the principal axis of the mirror</h3>";
    infoContent = infoContent + "<p>Any incident ray traveling parallel to the principal axis on the way to a convex mirror will reflect in such a manner that its extension will pass through the focal point.</p>";
    infoContent = infoContent + "<p>The rays after reflection get diverged from the Mirror.</p>";
    PIEupdateInfo(infoContent);
}

function newrad(newValue)
{
    rad1 = newValue;
    rad2=newValue;
    
     var ckgeometry = new THREE.RingGeometry(  rad1-1, rad1, 32 ,8,0.5* Math.PI,Math.PI);
        c1.geometry=ckgeometry;
        c1.position.x+=(rad1-rad);
        c2.position.x=c1.position.x-(rad1/2.0);
        c3.position.x=c1.position.x;
        text9.style.left = (128-rad1)*4.9+'px';
        text11.style.left = (128-(rad1/2.0))*4.9+'px';
        c11.position.x=c1.position.x-Math.sqrt(rad1*rad1-5*5);
        c11.position.y=5;
        c11.position.z=0;
        c12.position.x=c1.position.x-Math.sqrt(rad1*rad1-10*10);
        c12.position.y=10;
        c12.position.z=0;
        c13.position.x=c1.position.x-Math.sqrt(rad1*rad1-5*5);
        c13.position.y=-5;
        c13.position.z=0;
        c23.position.x=c1.position.x-Math.sqrt(rad1*rad1-10*10);
        c23.position.y=-10;
        c23.position.z=0;
        rad=rad1;

        ct1.position.x=c1.position.x;

        line71.geometry.vertices[0].x=c2.position.x;
        line71.geometry.vertices[1].x=c2.position.x;
        line71.geometry.vertices[2].x=c2.position.x-1;
        line71.geometry.verticesNeedUpdate=true;
        line72.geometry.vertices[0].x=c2.position.x;
        line72.geometry.vertices[1].x=c2.position.x-1;
        line72.geometry.verticesNeedUpdate=true;

        var lngeometry = new THREE.Geometry();
        lngeometry = new THREE.Geometry();
        lngeometry.vertices.push(new THREE.Vector3( -40, 5, 0 ),new THREE.Vector3( c1.position.x-Math.sqrt(rad1*rad1-5*5), 5,0 ));
        line11.geometry=lngeometry;
        
        lngeometry = new THREE.Geometry();
        lngeometry.vertices.push(new THREE.Vector3( -40, 10, 0 ),new THREE.Vector3( c1.position.x-Math.sqrt(rad1*rad1-10*10), 10, 0 ));
        line2.geometry=lngeometry;

        
        lngeometry = new THREE.Geometry();
        lngeometry.vertices.push(new THREE.Vector3( -40, -5, 0 ),new THREE.Vector3( c1.position.x-Math.sqrt(rad1*rad1-5*5), -5, 0 ));
        line33.geometry=lngeometry;

        lngeometry = new THREE.Geometry();
        lngeometry.vertices.push(new THREE.Vector3( -40,  -10,0 ),new THREE.Vector3( c1.position.x-Math.sqrt(rad1*rad1-10*10), -10,0 ));
        line4.geometry=lngeometry;

        lngeometry = new THREE.Geometry();
        lngeometry.vertices.push(new THREE.Vector3( c1.position.x-Math.sqrt(rad1*rad1-5*5), 5,0 ),
            new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-5*5))-3*(c2.position.x),4*5,0));
        line61.geometry=lngeometry;
        lngeometry = new THREE.Geometry();
        lngeometry.vertices.push(new THREE.Vector3( c1.position.x-Math.sqrt(rad1*rad1-10*10), 10, 0 ),
            new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-10*10))-3*(c2.position.x),4*10,0 ));
        line62.geometry=lngeometry;
        lngeometry = new THREE.Geometry();
        lngeometry.vertices.push(new THREE.Vector3( c1.position.x-Math.sqrt(rad1*rad1-5*5), -5, 0 ),
            new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-5*5))-3*(c2.position.x),-4*5,0));
        line63.geometry=lngeometry;
        lngeometry = new THREE.Geometry();
        lngeometry.vertices.push(new THREE.Vector3( c1.position.x-Math.sqrt(rad1*rad1-10*10), -10,0 ),
            new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-10*10))-3*(c2.position.x),-4*10,0));
        line64.geometry=lngeometry;
        
        lngeometry = new THREE.Geometry();
        lngeometry.vertices.push(new THREE.Vector3( c1.position.x-Math.sqrt(rad1*rad1-5*5), 5,0 ),new THREE.Vector3( c2.position.x,0,0 ));
        lngeometry.computeLineDistances();
        line21.geometry=lngeometry;
        
        lngeometry = new THREE.Geometry();
        lngeometry.vertices.push(new THREE.Vector3( c1.position.x-Math.sqrt(rad1*rad1-10*10), 10, 0 ),new THREE.Vector3( c2.position.x,0,0 ));
        lngeometry.computeLineDistances();
        line22.geometry=lngeometry;

        
        lngeometry = new THREE.Geometry();
        lngeometry.vertices.push(new THREE.Vector3( c1.position.x-Math.sqrt(rad1*rad1-5*5), -5, 0 ),new THREE.Vector3( c2.position.x,0,0 ));
        lngeometry.computeLineDistances();
        line23.geometry=lngeometry;

        lngeometry = new THREE.Geometry();
        lngeometry.vertices.push(new THREE.Vector3( c1.position.x-Math.sqrt(rad1*rad1-10*10), -10,0 ),new THREE.Vector3( c2.position.x,0,0 ));
        lngeometry.computeLineDistances();
        line24.geometry=lngeometry;


        //var l51material = new THREE.LineDashedMaterial({color: 0xff0000});
        var l51geometry = new THREE.Geometry();
        l51geometry.vertices.push(new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-5*5))-3*(c2.position.x)+2,4*5,0),new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-5*5))-3*(c2.position.x),4*5,0 ),new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-5*5))-3*(c2.position.x),4*5-2,0));
        line51.geometry = l51geometry;
        //var l52material = new THREE.LineDashedMaterial({color: 0xff0000});
        var l52geometry = new THREE.Geometry();
        l52geometry.vertices.push(new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-10*10))-3*(c2.position.x)+2,4*10,0 ),new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-10*10))-3*(c2.position.x),4*10,0 ),new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-10*10))-3*(c2.position.x),4*10-2,0  ));
        line52.geometry = l52geometry;
        //var l53material = new THREE.LineDashedMaterial({color: 0xff0000});
        var l53geometry = new THREE.Geometry();
        l53geometry.vertices.push(new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-5*5))-3*(c2.position.x)+2,-4*5,0  ),new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-5*5))-3*(c2.position.x),-4*5,0 ),new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-5*5))-3*(c2.position.x),-4*5+2,0 ));
        line53.geometry = l53geometry;
        //var l54material = new THREE.LineDashedMaterial({color: 0xff0000});
        var l54geometry = new THREE.Geometry();
        l54geometry.vertices.push(new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-10*10))-3*(c2.position.x)+2,-4*10,0  ),new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-10*10))-3*(c2.position.x),-4*10,0 ),new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-10*10))-3*(c2.position.x),-4*10+2,0  ));
        line54.geometry = l54geometry;
        i=0;
    PIErender();
    PIEstartAnimation();
}
var ri=20;
var rmin=20;
var rmax=40;
var fold=0.1;

        function loadExperimentElements()
        {
        	initialiseInfo();
            initialiseHelp();
            PIEsetExperimentTitle("REFLECTION AT A CONVEX MIRROR");
            PIEsetDeveloperName("Hemanth Katari");
            PIEhideControlElement();
            document.title="REFLECTION AT A CONVEX MIRROR";
        PIEaddInputSlider(Radius,ri,newrad,rmin,rmax,fold);
        PIEaddDisplayText(Radius, ri);
        var geometry;
        var material;

        
         geometry = new THREE.BoxGeometry( 300,300,0);
         material = new THREE.MeshBasicMaterial( {color: 0xFCEDB2} );
        myFloor1  = new THREE.Mesh( geometry, material );
         myFloor1.position.set(0,3,0);
            myFloor1.receiveShadow = true;
         PIEaddElement(myFloor1);

          
    


		 
       
        var cgeometry = new THREE.RingGeometry(  19, 20, 32 ,8,0.5* Math.PI,Math.PI);
        var cmaterial = new THREE.LineBasicMaterial( { color: 0x1e0987, side: THREE.DoubleSide } );
         c1 = new THREE.Mesh( cgeometry, cmaterial );
        c1.position.set(rad,0, 0.0);
        PIEaddElement(c1);
        
        var c2geometry = new THREE.SphereGeometry( 0.6, 20,20);
        var c2material = new THREE.LineBasicMaterial( { color: 0x00bc00, side: THREE.DoubleSide } );
         c2 = new THREE.Mesh( c2geometry, c2material );
        c2.position.x = 10;
        c2.position.y = 0;
        c2.position.z = 0;
        PIEaddElement(c2);

        var cmgeometry = new THREE.SphereGeometry( 0.4, 20,20);
        var cmmaterial = new THREE.LineBasicMaterial( { color: 0xff0000, side: THREE.DoubleSide } );
         cm = new THREE.Mesh( cmgeometry, cmmaterial );
        cm.position.x = 0;
        cm.position.y = 0;
        cm.position.z = 0;
        PIEaddElement(cm);

        var c3geometry = new THREE.SphereGeometry( 0.6, 20,20);
        var c3material = new THREE.LineBasicMaterial( { color: 0x00bc00, side: THREE.DoubleSide } );
         c3 = new THREE.Mesh( c3geometry, c3material );
        c3.position.x = 20;
        c3.position.y = 0;
        c3.position.z = 0;
        PIEaddElement(c3);
        var c11geometry = new THREE.SphereGeometry( 0.4, 20,20);
        var c11material = new THREE.LineBasicMaterial( { color: 0xff0000, side: THREE.DoubleSide } );
        c11 = new THREE.Mesh( c11geometry, c11material );
        c11.position.x = 20-Math.sqrt(rad*rad-5*5);
        c11.position.y = 5;
        c11.position.z = 0;
        PIEaddElement(c11);
        var c12geometry = new THREE.SphereGeometry( 0.4, 20,20);
        var c12material = new THREE.LineBasicMaterial( { color: 0xff0000, side: THREE.DoubleSide } );
         c12 = new THREE.Mesh( c12geometry, c12material );
        c12.position.x = 20-Math.sqrt(rad*rad-10*10);
        c12.position.y = 10;
        c12.position.z = 0;
        PIEaddElement(c12);
        var c13geometry = new THREE.SphereGeometry( 0.4, 20,20);
        var c13material = new THREE.LineBasicMaterial( { color: 0xff0000, side: THREE.DoubleSide } );
         c13 = new THREE.Mesh( c13geometry, c13material );
        c13.position.x = 20-Math.sqrt(rad*rad-5*5);
        c13.position.y = -5;
        c13.position.z = 0;
        PIEaddElement(c13);
        var c23geometry = new THREE.SphereGeometry( 0.4, 20,20);
        var c23material = new THREE.LineBasicMaterial( { color: 0xff0000, side: THREE.DoubleSide } );
         c23 = new THREE.Mesh( c23geometry, c23material );
        c23.position.x = 20-Math.sqrt(rad*rad-10*10);
        c23.position.y = -10;
        c23.position.z = 0;
        PIEaddElement(c23);
        
        geometry = new THREE.RingGeometry(  0.8, 1, 32 ,8,-0.5* Math.PI,Math.PI);
        material = new THREE.LineBasicMaterial( { color: 0x000000, side: THREE.DoubleSide } );
         ct1 = new THREE.Mesh( geometry, material );
        ct1.position.set(20,-4, 0.0);
        PIEaddElement(ct1);
        
        geometry = new THREE.RingGeometry(  0.7, 0.8, 32 ,8,0.5* Math.PI,Math.PI);
        material = new THREE.LineBasicMaterial( { color: 0x000000, side: THREE.DoubleSide } );
         ct3 = new THREE.Mesh( geometry, material );
        ct3.position.set(-1,-2.5, 0.0);
        PIEaddElement(ct3);

       
        text9 = document.createElement('div');
        text9.style.position = 'absolute';
        text9.style.width = 150;
        text9.style.height = 150;
        text9.innerHTML = "C";
        text9.style.color="#1e0987";
        text9.style.fontSize="90%";
        text9.style.fontFamily="Gungsuh"
        text9.style.top =  '350px';
        text9.style.left = (125-20)*4.9+'px';
        //document.body.appendChild(text9);

        text11 = document.createElement('div');
        text11.style.position = 'fixed';
        text11.style.width = 150;
        text11.style.height = 150;
        text11.innerHTML = "F";
        text11.style.color="#1e0987";
        text11.style.fontSize="90%";
        text11.style.fontFamily="Gungsuh"
        text11.style.top =  '350px';
        text11.style.left = (125-10)*4.9+'px';
        //document.body.appendChild(text11);

        var lmaterial = new THREE.LineBasicMaterial({color: 0x1e0987});
        var lgeometry = new THREE.Geometry();
        lgeometry.vertices.push(new THREE.Vector3( -300, 0, 0 ),new THREE.Vector3( 300, 0, 0 ));
        //lgeometry.computeLineDistances();
        var line = new THREE.Line( lgeometry, lmaterial );
        PIEaddElement(line);
        
        var lmmaterial = new THREE.LineBasicMaterial({color: 0xff0000});
        var lmgeometry = new THREE.Geometry();
        lmgeometry.vertices.push(new THREE.Vector3( -40, 0, 0 ),new THREE.Vector3( 0, 0, 0 ));
        //lgeometry.computeLineDistances();
         linem = new THREE.Line( lmgeometry, lmmaterial );
        PIEaddElement(linem);

        var l11material = new THREE.MeshBasicMaterial({color: 0xff0000});
        var l11geometry = new THREE.Geometry();
        l11geometry.vertices.push(new THREE.Vector3( -40, 5, 0 ),new THREE.Vector3( 20-Math.sqrt(rad*rad-5*5), 5, 0 ));

        line11 = new THREE.Line( l11geometry, l11material );
        //line11.scale.y=12;
        PIEaddElement(line11);
        var l2material = new THREE.LineDashedMaterial({color: 0xff0000});
        var l2geometry = new THREE.Geometry();
        l2geometry.vertices.push(new THREE.Vector3( -40, 10 ,0),new THREE.Vector3( 20-Math.sqrt(rad*rad-10*10), 10,0 ));
        line2 = new THREE.Line( l2geometry, l2material );
        PIEaddElement(line2);

        

        var l33material = new THREE.LineDashedMaterial({color: 0xff0000});
        var l33geometry = new THREE.Geometry();
        l33geometry.vertices.push(new THREE.Vector3( -40, -5,0),new THREE.Vector3( 20-Math.sqrt(rad*rad-5*5), -5,0 ));
        line33 = new THREE.Line( l33geometry, l33material );
        PIEaddElement(line33);

        var l4material = new THREE.LineDashedMaterial({color: 0xff0000});
        var l4geometry = new THREE.Geometry();
        l4geometry.vertices.push(new THREE.Vector3( -40,  -10 ,0),new THREE.Vector3( 20-Math.sqrt(rad*rad-10*10), -10,0 ));
        //l4geometry.computeLineDistances();
        line4 = new THREE.Line( l4geometry, l4material );
        PIEaddElement(line4);

        var l61material = new THREE.LineDashedMaterial({color: 0xff0000});
        var l61geometry = new THREE.Geometry();
        l61geometry.vertices.push(new THREE.Vector3( 20-Math.sqrt(rad*rad-5*5), 5, 0 ),
            new THREE.Vector3( 4*(20-Math.sqrt(rad*rad-5*5))-3*10,4*5,0 ));
        line61 = new THREE.Line( l61geometry, l61material );
        PIEaddElement(line61);
        var l62material = new THREE.LineDashedMaterial({color: 0xff0000});
        var l62geometry = new THREE.Geometry();
        l62geometry.vertices.push(new THREE.Vector3( 20-Math.sqrt(rad*rad-10*10), 10,0 ),
            new THREE.Vector3( 4*(20-Math.sqrt(rad*rad-10*10))-3*10,4*10,0) );
        line62 = new THREE.Line( l62geometry, l62material );
        PIEaddElement(line62);
        var l63material = new THREE.LineDashedMaterial({color: 0xff0000});
        var l63geometry = new THREE.Geometry();
        l63geometry.vertices.push(new THREE.Vector3( 20-Math.sqrt(rad*rad-5*5), -5,0 ),
            new THREE.Vector3( 4*(20-Math.sqrt(rad*rad-5*5))-3*10,-4*5,0));
        line63 = new THREE.Line( l63geometry, l63material );
        PIEaddElement(line63);
        var l64material = new THREE.LineDashedMaterial({color: 0xff0000});
        var l64geometry = new THREE.Geometry();
        l64geometry.vertices.push(new THREE.Vector3( 20-Math.sqrt(rad*rad-10*10), -10,0 ),
            new THREE.Vector3( 4*(20-Math.sqrt(rad*rad-10*10))-3*10,-4*10,0));
        line64 = new THREE.Line( l64geometry, l64material );
        PIEaddElement(line64);

        var l21material = new THREE.LineDashedMaterial({color: 0x000000});
        var l21geometry = new THREE.Geometry();
        l21geometry.vertices.push(new THREE.Vector3( 20-Math.sqrt(rad*rad-5*5), 5, 0 ),new THREE.Vector3( 10,0,0 ));
        l21geometry.computeLineDistances();
        line21 = new THREE.Line( l21geometry, l21material );
        PIEaddElement(line21);
        var l22material = new THREE.LineDashedMaterial({color: 0x000000});
        var l22geometry = new THREE.Geometry();
        l22geometry.vertices.push(new THREE.Vector3( 20-Math.sqrt(rad*rad-10*10), 10,0 ),new THREE.Vector3( 10,0,0 ));
        l22geometry.computeLineDistances();
        line22 = new THREE.Line( l22geometry, l22material );
        PIEaddElement(line22);
        
       
    
        

        var l23material = new THREE.LineDashedMaterial({color: 0x000000});
        var l23geometry = new THREE.Geometry();
        l23geometry.vertices.push(new THREE.Vector3( 20-Math.sqrt(rad*rad-5*5), -5,0 ),new THREE.Vector3( 10,0,0 ));
        l23geometry.computeLineDistances();
        line23 = new THREE.Line( l23geometry, l23material );
        PIEaddElement(line23);

        var l24material = new THREE.LineDashedMaterial({color: 0x000000});
        var l24geometry = new THREE.Geometry();
        l24geometry.vertices.push(new THREE.Vector3( 20-Math.sqrt(rad*rad-10*10), -10 ,0),new THREE.Vector3( 10,0,0 ));
        l24geometry.computeLineDistances();
        line24 = new THREE.Line( l24geometry, l24material );
        PIEaddElement(line24);

        var l41material = new THREE.LineDashedMaterial({color: 0xff0000});
        var l41geometry = new THREE.Geometry();
        l41geometry.vertices.push(new THREE.Vector3( -22,6, 0 ),new THREE.Vector3( -21,5,0 ),new THREE.Vector3( -22,4,0 ));
        line41 = new THREE.Line( l41geometry, l41material );
        PIEaddElement(line41);
        var l42material = new THREE.LineDashedMaterial({color: 0xff0000});
        var l42geometry = new THREE.Geometry();
        l42geometry.vertices.push(new THREE.Vector3( -22,11, 0 ),new THREE.Vector3( -21,10,0 ),new THREE.Vector3( -22,9,0 ));
        line42 = new THREE.Line( l42geometry, l42material );
        PIEaddElement(line42);
        var l43material = new THREE.LineDashedMaterial({color: 0xff0000});
        var l43geometry = new THREE.Geometry();
        l43geometry.vertices.push(new THREE.Vector3( -22,-6, 0 ),new THREE.Vector3( -21,-5,0 ),new THREE.Vector3( -22,-4,0 ));
        line43 = new THREE.Line( l43geometry, l43material );
        PIEaddElement(line43);
        var l44material = new THREE.LineDashedMaterial({color: 0xff0000});
        var l44geometry = new THREE.Geometry();
        l44geometry.vertices.push(new THREE.Vector3( -22,-11, 0 ),new THREE.Vector3( -21,-10,0 ),new THREE.Vector3( -22,-9,0 ));
        //l44geometry.computeLineDistances();
        line44 = new THREE.Line( l44geometry, l44material );
        PIEaddElement(line44);
        
        var l441material = new THREE.LineDashedMaterial({color: 0xff0000});
        var l441geometry = new THREE.Geometry();
        l441geometry.vertices.push(new THREE.Vector3( -22,-1, 0 ),new THREE.Vector3( -21,0,0 ),new THREE.Vector3( -22,1,0 ));
        //l44geometry.computeLineDistances();
        line441 = new THREE.Line( l441geometry, l441material );
        PIEaddElement(line441);

        var l442material = new THREE.LineDashedMaterial({color: 0xff0000});
        var l442geometry = new THREE.Geometry();
        l442geometry.vertices.push(new THREE.Vector3( -10,-1, 0 ),new THREE.Vector3( -11,0,0 ),new THREE.Vector3( -10,1,0 ));
        //l44geometry.computeLineDistances();
        line442 = new THREE.Line( l442geometry, l42material );
        PIEaddElement(line442);
        var l51material = new THREE.LineDashedMaterial({color: 0xff0000});
        var l51geometry = new THREE.Geometry();
        l51geometry.vertices.push(new THREE.Vector3( 4*(20-Math.sqrt(rad*rad-5*5))-3*10+2,4*5,0),new THREE.Vector3( 4*(20-Math.sqrt(rad*rad-5*5))-3*10,4*5,0 ),new THREE.Vector3( 4*(20-Math.sqrt(rad*rad-5*5))-3*10,4*5-2,0));
        line51 = new THREE.Line( l51geometry, l51material );
        PIEaddElement(line51);
        var l52material = new THREE.LineDashedMaterial({color: 0xff0000});
        var l52geometry = new THREE.Geometry();
        l52geometry.vertices.push(new THREE.Vector3( 4*(20-Math.sqrt(rad*rad-10*10))-3*10+2,4*10,0 ),new THREE.Vector3( 4*(20-Math.sqrt(rad*rad-10*10))-3*10,4*10,0 ),new THREE.Vector3( 4*(20-Math.sqrt(rad*rad-10*10))-3*10,4*10-2,0  ));
        line52 = new THREE.Line( l52geometry, l52material );
        PIEaddElement(line52);
        var l53material = new THREE.LineDashedMaterial({color: 0xff0000});
        var l53geometry = new THREE.Geometry();
        l53geometry.vertices.push(new THREE.Vector3( 4*(20-Math.sqrt(rad*rad-5*5))-3*10+2,-4*5,0  ),new THREE.Vector3( 4*(20-Math.sqrt(rad*rad-5*5))-3*10,-4*5,0 ),new THREE.Vector3( 4*(20-Math.sqrt(rad*rad-5*5))-3*10,-4*5+2,0 ));
        line53 = new THREE.Line( l53geometry, l53material );
        PIEaddElement(line53);
        var l54material = new THREE.LineDashedMaterial({color: 0xff0000});
        var l54geometry = new THREE.Geometry();
        l54geometry.vertices.push(new THREE.Vector3( 4*(20-Math.sqrt(rad*rad-10*10))-3*10+2,-4*10,0  ),new THREE.Vector3( 4*(20-Math.sqrt(rad*rad-10*10))-3*10,-4*10,0 ),new THREE.Vector3( 4*(20-Math.sqrt(rad*rad-10*10))-3*10,-4*10+2,0  ));
        l54geometry.computeLineDistances();
        line54 = new THREE.Line( l54geometry, l54material );
        PIEaddElement(line54);

        material = new THREE.MeshBasicMaterial({color: 0x000000,linewidth:2});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 10, -5, 0 ),new THREE.Vector3( 10, -3, 0 ),new THREE.Vector3( 9, -3, 0 ));
        line71 = new THREE.Line( geometry, material );
        PIEaddElement(line71);
        
        material = new THREE.LineDashedMaterial({color: 0x000000,linewidth:2});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 10, -4 ,0),new THREE.Vector3( 9, -4, 0 ));
        line72 = new THREE.Line( geometry, material );
        PIEaddElement(line72);

        material = new THREE.MeshBasicMaterial({color: 0x000000,linewidth:2});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -1, -4.5, 0 ),new THREE.Vector3( -1, -1.6, 0 ));
        line73 = new THREE.Line( geometry, material );
        PIEaddElement(line73);

        PIEresize(false);
        //resetExperiment();
        PIEsetAreaOfInterest(-60, -60, 60, 60);
        

}
function resetExperiment()
{
	rad1=20;
    PIEchangeInputSlider(Radius, rmin);
    var ckgeometry = new THREE.RingGeometry(  rad1-1, rad1, 32 ,8,0.5* Math.PI,Math.PI);
        c1.geometry=ckgeometry;
        c1.position.x+=(rad1-rad);
        c2.position.x=c1.position.x-(rad1/2.0);
        c3.position.x=c1.position.x;
        text9.style.left = (128-rad1)*4.9+'px';
        text11.style.left = (128-(rad1/2.0))*4.9+'px';
       
        c11.position.x=c1.position.x-Math.sqrt(rad1*rad1-5*5);
        c11.position.y=5;
        c11.position.z=0;
        c12.position.x=c1.position.x-Math.sqrt(rad1*rad1-10*10);
        c12.position.y=10;
        c12.position.z=0;
        c13.position.x=c1.position.x-Math.sqrt(rad1*rad1-5*5);
        c13.position.y=-5;
        c13.position.z=0;
        c23.position.x=c1.position.x-Math.sqrt(rad1*rad1-10*10);
        c23.position.y=-10;
        c23.position.z=0;
        rad=rad1;

        ct1.position.x=c1.position.x;
        linem.geometry.vertices[1].x= 0;
        linem.geometry.verticesNeedUpdate = true;
        line71.geometry.vertices[0].x=c2.position.x;
        line71.geometry.vertices[1].x=c2.position.x;
        line71.geometry.vertices[2].x=c2.position.x-1;
        line71.geometry.verticesNeedUpdate=true;
        line72.geometry.vertices[0].x=c2.position.x;
        line72.geometry.vertices[1].x=c2.position.x-1;
        line72.geometry.verticesNeedUpdate=true;

        var lngeometry = new THREE.Geometry();
        lngeometry = new THREE.Geometry();
        lngeometry.vertices.push(new THREE.Vector3( -40, 5, 0 ),new THREE.Vector3( c1.position.x-Math.sqrt(rad1*rad1-5*5), 5,0 ));
        line11.geometry=lngeometry;
        
      
        lngeometry = new THREE.Geometry();
        lngeometry.vertices.push(new THREE.Vector3( -40, 10, 0 ),new THREE.Vector3( c1.position.x-Math.sqrt(rad1*rad1-10*10), 10, 0 ));
        line2.geometry=lngeometry;

        
        lngeometry = new THREE.Geometry();
        lngeometry.vertices.push(new THREE.Vector3( -40, -5, 0 ),new THREE.Vector3( c1.position.x-Math.sqrt(rad1*rad1-5*5), -5, 0 ));
        line33.geometry=lngeometry;

        lngeometry = new THREE.Geometry();
        lngeometry.vertices.push(new THREE.Vector3( -40,  -10,0 ),new THREE.Vector3( c1.position.x-Math.sqrt(rad1*rad1-10*10), -10,0 ));
        line4.geometry=lngeometry;

        lngeometry = new THREE.Geometry();
        lngeometry.vertices.push(new THREE.Vector3( c1.position.x-Math.sqrt(rad1*rad1-5*5), 5,0 ),
            new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-5*5))-3*(c2.position.x),4*5,0));
        line61.geometry=lngeometry;
        lngeometry = new THREE.Geometry();
        lngeometry.vertices.push(new THREE.Vector3( c1.position.x-Math.sqrt(rad1*rad1-10*10), 10, 0 ),
            new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-10*10))-3*(c2.position.x),4*10,0 ));
        line62.geometry=lngeometry;
        lngeometry = new THREE.Geometry();
        lngeometry.vertices.push(new THREE.Vector3( c1.position.x-Math.sqrt(rad1*rad1-5*5), -5, 0 ),
            new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-5*5))-3*(c2.position.x),-4*5,0));
        line63.geometry=lngeometry;
        lngeometry = new THREE.Geometry();
        lngeometry.vertices.push(new THREE.Vector3( c1.position.x-Math.sqrt(rad1*rad1-10*10), -10,0 ),
            new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-10*10))-3*(c2.position.x),-4*10,0));
        line64.geometry=lngeometry;
        
        lngeometry = new THREE.Geometry();
        lngeometry.vertices.push(new THREE.Vector3( c1.position.x-Math.sqrt(rad1*rad1-5*5), 5,0 ),new THREE.Vector3( c2.position.x,0,0 ));
        lngeometry.computeLineDistances();
        line21.geometry=lngeometry;
        
        lngeometry = new THREE.Geometry();
        lngeometry.vertices.push(new THREE.Vector3( c1.position.x-Math.sqrt(rad1*rad1-10*10), 10, 0 ),new THREE.Vector3( c2.position.x,0,0 ));
        lngeometry.computeLineDistances();
        line22.geometry=lngeometry;

        
        lngeometry = new THREE.Geometry();
        lngeometry.vertices.push(new THREE.Vector3( c1.position.x-Math.sqrt(rad1*rad1-5*5), -5, 0 ),new THREE.Vector3( c2.position.x,0,0 ));
        lngeometry.computeLineDistances();
        line23.geometry=lngeometry;

        lngeometry = new THREE.Geometry();
        lngeometry.vertices.push(new THREE.Vector3( c1.position.x-Math.sqrt(rad1*rad1-10*10), -10,0 ),new THREE.Vector3( c2.position.x,0,0 ));
        lngeometry.computeLineDistances();
        line24.geometry=lngeometry;


        //var l51material = new THREE.LineDashedMaterial({color: 0xff0000});
        var l51geometry = new THREE.Geometry();
        l51geometry.vertices.push(new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-5*5))-3*(c2.position.x)+2,4*5,0),new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-5*5))-3*(c2.position.x),4*5,0 ),new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-5*5))-3*(c2.position.x),4*5-2,0));
        line51.geometry = l51geometry;
        //var l52material = new THREE.LineDashedMaterial({color: 0xff0000});
        var l52geometry = new THREE.Geometry();
        l52geometry.vertices.push(new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-10*10))-3*(c2.position.x)+2,4*10,0 ),new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-10*10))-3*(c2.position.x),4*10,0 ),new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-10*10))-3*(c2.position.x),4*10-2,0  ));
        line52.geometry = l52geometry;
        //var l53material = new THREE.LineDashedMaterial({color: 0xff0000});
        var l53geometry = new THREE.Geometry();
        l53geometry.vertices.push(new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-5*5))-3*(c2.position.x)+2,-4*5,0  ),new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-5*5))-3*(c2.position.x),-4*5,0 ),new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-5*5))-3*(c2.position.x),-4*5+2,0 ));
        line53.geometry = l53geometry;
        //var l54material = new THREE.LineDashedMaterial({color: 0xff0000});
        var l54geometry = new THREE.Geometry();
        l54geometry.vertices.push(new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-10*10))-3*(c2.position.x)+2,-4*10,0  ),new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-10*10))-3*(c2.position.x),-4*10,0 ),new THREE.Vector3( 4*(c1.position.x-Math.sqrt(rad1*rad1-10*10))-3*(c2.position.x),-4*10+2,0  ));
        line54.geometry = l54geometry;
    
        line41.traverse(  function ( child ) { child.visible = true; } );
        line42.traverse(  function ( child ) { child.visible = true; } );
    line43.traverse(  function ( child ) { child.visible = true; } );
    line44.traverse(  function ( child ) { child.visible = true; } );
    line51.traverse(  function ( child ) { child.visible = true; } );
    line52.traverse(  function ( child ) { child.visible = true; } );
    line53.traverse(  function ( child ) { child.visible = true; } );
    line54.traverse(  function ( child ) { child.visible = true; } );
    line441.traverse(  function ( child ) { child.visible = true; } );
    
        c11.traverse(  function ( child ) { child.visible = true; } );
    c12.traverse(  function ( child ) { child.visible = true; } );
    c13.traverse(  function ( child ) { child.visible = true; } );
    c23.traverse(  function ( child ) { child.visible = true; } );
    cm.traverse(  function ( child ) { child.visible = true; } );
    line442.traverse(  function ( child ) { child.visible = true; } );

    i=0;
}

var i=0,m1,m2,m3,m4,cap,j,flag=0,speed=20;
function updateExperimentElements(t, dt)
{
	//PIEslowdownAnimation();
	//PIEspeedupAnimation();/
    
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
    	line11.geometry.vertices[1].x= -40;
        line11.geometry.verticesNeedUpdate = true;
        linem.geometry.vertices[1].x= -40;
        linem.geometry.verticesNeedUpdate = true;
        
        line2.geometry.vertices[1].x= -40;
        line2.geometry.verticesNeedUpdate = true;
        line33.geometry.vertices[1].x= -40;
        line33.geometry.verticesNeedUpdate = true;
        line4.geometry.vertices[1].x= -40;
        line4.geometry.verticesNeedUpdate = true;
        line21.geometry.vertices[1].x=c1.position.x-Math.sqrt(rad1*rad1-5*5);
        m1=(c1.position.x)-Math.sqrt(rad1*rad1-5*5);
        line21.geometry.vertices[1].y=5;
        line21.geometry.verticesNeedUpdate = true;
        

        line22.geometry.vertices[1].x=c1.position.x-Math.sqrt(rad1*rad1-10*10);
        m2=(c1.position.x)-Math.sqrt(rad1*rad1-10*10);
        line22.geometry.vertices[1].y=10;
        line22.geometry.verticesNeedUpdate = true;
        
        line23.geometry.vertices[1].x=c1.position.x-Math.sqrt(rad1*rad1-5*5);
        m3=(c1.position.x)-Math.sqrt(rad1*rad1-5*5);
        line23.geometry.vertices[1].y=-5;
        line23.geometry.verticesNeedUpdate = true;
        
        line24.geometry.vertices[1].x=c1.position.x-Math.sqrt(rad1*rad1-10*10);
        m4=(c1.position.x)-Math.sqrt(rad1*rad1-10*10);
        line24.geometry.vertices[1].y=-10;
        line24.geometry.verticesNeedUpdate = true;

        line61.geometry.vertices[1].x=c1.position.x-Math.sqrt(rad1*rad1-5*5);
        line61.geometry.vertices[1].y=5;
        line61.geometry.verticesNeedUpdate = true;
        
        line62.geometry.vertices[1].x=c1.position.x-Math.sqrt(rad1*rad1-10*10);
        line62.geometry.vertices[1].y=10;
        line62.geometry.verticesNeedUpdate = true;
        
        line63.geometry.vertices[1].x=c1.position.x-Math.sqrt(rad1*rad1-5*5);
        line63.geometry.vertices[1].y=-5;
        line63.geometry.verticesNeedUpdate = true;
        
        line64.geometry.vertices[1].x=c1.position.x-Math.sqrt(rad1*rad1-10*10);
        line64.geometry.vertices[1].y=-10;
        line64.geometry.verticesNeedUpdate = true;

        line41.traverse(  function ( child ) { child.visible = false; } );
		line42.traverse(  function ( child ) { child.visible = false; } );
	line43.traverse(  function ( child ) { child.visible = false; } );
	line44.traverse(  function ( child ) { child.visible = false; } );
	line51.traverse(  function ( child ) { child.visible = false; } );
	line52.traverse(  function ( child ) { child.visible = false; } );
	line53.traverse(  function ( child ) { child.visible = false; } );
	line54.traverse(  function ( child ) { child.visible = false; } );
	line441.traverse(  function ( child ) { child.visible = false; } );
    
        c11.traverse(  function ( child ) { child.visible = false; } );
	c12.traverse(  function ( child ) { child.visible = false; } );
	c13.traverse(  function ( child ) { child.visible = false; } );
	c23.traverse(  function ( child ) { child.visible = false; } );
	cm.traverse(  function ( child ) { child.visible = false; } );
    line442.traverse(  function ( child ) { child.visible = false; } );
  
        i++;
    }
    
        boundaryT = dt / 1000.0;
        if(line11.geometry.vertices[1].x<=c1.position.x-Math.sqrt(rad1*rad1-5*5) )
        {
        line11.geometry.vertices[1].x+= 0.4*(speed/30);
        line11.geometry.verticesNeedUpdate = true;
        
    }
    else if(line21.geometry.vertices[1].x<=(c2.position.x) )
    {
    	c11.traverse(  function ( child ) { child.visible = true; } );
	c12.traverse(  function ( child ) { child.visible = true; } );
	c13.traverse(  function ( child ) { child.visible = true; } );
	c23.traverse(  function ( child ) { child.visible = true; } );
	line41.traverse(  function ( child ) { child.visible = true; } );
		line42.traverse(  function ( child ) { child.visible = true; } );
	line43.traverse(  function ( child ) { child.visible = true; } );
	line44.traverse(  function ( child ) { child.visible = true; } );
    line441.traverse(  function ( child ) { child.visible = true; } );
    cm.traverse(  function ( child ) { child.visible = true; } );
    
    	line21.geometry.vertices[1].x+= 0.4*(speed/30);
    	line21.geometry.vertices[1].y= 5-(5*(line21.geometry.vertices[1].x-m1)/((c2.position.x)-m1));
        line21.geometry.verticesNeedUpdate = true;
    }
    else if(line61.geometry.vertices[1].x>=4*(c1.position.x-Math.sqrt(rad1*rad1-5*5))-3*(c2.position.x) )
    {
    	
    	line61.geometry.vertices[1].x-= 0.4*(speed/30);
    	line61.geometry.vertices[1].y= 5-(5*(line61.geometry.vertices[1].x-m1)/((c2.position.x)-m1));
        line61.geometry.verticesNeedUpdate = true;
    }
    else{
    	
	line51.traverse(  function ( child ) { child.visible = true; } );
	line52.traverse(  function ( child ) { child.visible = true; } );
	line53.traverse(  function ( child ) { child.visible = true; } );
	line54.traverse(  function ( child ) { child.visible = true; } );
    }
    if(linem.geometry.vertices[1].x<=0 )
        {
        linem.geometry.vertices[1].x+= 0.4*(speed/30);
        linem.geometry.verticesNeedUpdate = true;
    }
    if(line2.geometry.vertices[1].x<=(c1.position.x)-Math.sqrt(rad1*rad1-10*10) )
        {
        line2.geometry.vertices[1].x+= 0.4*(speed/30);
        line2.geometry.verticesNeedUpdate = true;
    }
    else if(line22.geometry.vertices[1].x<=(c2.position.x) )
    {
    	line22.geometry.vertices[1].x+= 0.4*(speed/30);
    	line22.geometry.vertices[1].y= 10-(10*(line22.geometry.vertices[1].x-m2)/((c2.position.x)-m2));
        line22.geometry.verticesNeedUpdate = true;
    }
    else if(line62.geometry.vertices[1].x>=4*(c1.position.x-Math.sqrt(rad1*rad1-10*10))-3*(c2.position.x) )
    {
    	line62.geometry.vertices[1].x-= 0.4*(speed/30);
    	line62.geometry.vertices[1].y= 10-(10*(line62.geometry.vertices[1].x-m2)/((c2.position.x)-m2));
        line62.geometry.verticesNeedUpdate = true;
        line41.traverse(  function ( child ) { child.visible = true; } );
		line42.traverse(  function ( child ) { child.visible = true; } );
	line43.traverse(  function ( child ) { child.visible = true; } );
	line44.traverse(  function ( child ) { child.visible = true; } );

    }
    else
    {
        line52.traverse(  function ( child ) { child.visible = true; } );
    line54.traverse(  function ( child ) { child.visible = true; } );
    line442.traverse(  function ( child ) { child.visible = true; } );
    
    }
     
    if(line4.geometry.vertices[1].x<=(c1.position.x)-Math.sqrt(rad1*rad1-10*10) )
        {
        line4.geometry.vertices[1].x+= 0.4*(speed/30);
        line4.geometry.verticesNeedUpdate = true;
    }
    else if(line24.geometry.vertices[1].x<=(c2.position.x) )
    {
    	line24.geometry.vertices[1].x+= 0.4*(speed/30);
    	line24.geometry.vertices[1].y= -10+(10*(line24.geometry.vertices[1].x-m4)/((c2.position.x)-m4));
        line24.geometry.verticesNeedUpdate = true;
    } 
    else if(line64.geometry.vertices[1].x>=4*(c1.position.x-Math.sqrt(rad1*rad1-10*10))-3*(c2.position.x) )
    {
    	line64.geometry.vertices[1].x-= 0.4*(speed/30);
    	line64.geometry.vertices[1].y= -10+(10*(line64.geometry.vertices[1].x-m4)/((c2.position.x)-m4));
        line64.geometry.verticesNeedUpdate = true;
    } 
   
    if(line33.geometry.vertices[1].x<=(c1.position.x)-Math.sqrt(rad1*rad1-5*5) )
        {
        line33.geometry.vertices[1].x+= 0.4*(speed/30);
        line33.geometry.verticesNeedUpdate = true;
    }
    else if(line23.geometry.vertices[1].x<=(c2.position.x) )
    {
        line23.geometry.vertices[1].x+= 0.4*(speed/30);
        line23.geometry.vertices[1].y= -5+(5*(line23.geometry.vertices[1].x-m3)/((c2.position.x)-m3));
        line23.geometry.verticesNeedUpdate = true;
    }
    else if(line63.geometry.vertices[1].x>=4*(c1.position.x-Math.sqrt(rad1*rad1-5*5))-3*(c2.position.x) )
    {
        line63.geometry.vertices[1].x-= 0.4*(speed/30);
        line63.geometry.vertices[1].y= -5+(5*(line63.geometry.vertices[1].x-m3)/((c2.position.x)-m3));
        line63.geometry.verticesNeedUpdate = true;

    }
    else
    {
        i=0;
        line51.traverse(  function ( child ) { child.visible = true; } );
        line53.traverse(  function ( child ) { child.visible = true; } );
    
        PIEstopAnimation();
    }
    for(j=0;j<150;j++)
    {

    }
}
else
{
    flag=1;
}
 PIEchangeDisplayText(Radius, rad1);   


    
}


