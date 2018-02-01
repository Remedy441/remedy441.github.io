var c1,c4,rad1=45,text1,linem,ckgeometry,arrowHelper,newx=90,ct1,ct2,ct3,line71,line72,line73,geometry,material,dir,origin,x1,line1,line,line14,arrow1,sourcePos,targetPos,direction,arrow,arrow2,x2,y1,y2,x3,y3,x4,x5,a,b,c,d,x6,y6,x7,y7,x8,y8,k1,k2,length,hex,c2,c3,c11,c12,c13,c14,rad2=20,c23,line11,line12,line13,line14,line2,line33,line441,line442,line3,line4,line21,line22,line23,line24,line41,line42,line43,line44,line51,line52,line54,line53,line61,line62,line64,line63,rad=45;
var s1=-Math.sqrt(45*45-15*15),s2=2*(-Math.sqrt(45*45-15*15))+22.5,cc1,cc2,e,x1,y1;
var helpContent;
var myBallX,myBallY,myBallZ,topB=0,myBallRadius=0.5,leftB=-30,rightB=30,bottomB=0;

function myBallDrag(element, newpos)
{
    myBallX = newpos.x;
    if (newpos.x  < 8) { myBallX =8  }
    else if (newpos.x > 90) { myBallX = (90) }
    myBallY = newpos.y;
    if (newpos.y < 0) { myBallY = 0; }
    else if (newpos.y > 0) { myBallY = 0; }
    myBallZ = newpos.z;
    PIEchangeInputSlider(objectx,myBallX);
        
    line11.position.set(myBallX, myBallY+7.5, myBallZ);
    line12.position.set(myBallX, myBallY+15.3, myBallZ);
    newdis1(myBallX);

}

function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Tracing rays at a convex lens Help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows the tracing of rays from an erect object at convex lens</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to radius and distance slider.</p>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>OBJECT DISTANCE DRAG/DROP- control by Drag/drop.</li>";
    helpContent = helpContent + "<li>LENS THICKNESS - controls the thickness of lens.</li>";
    helpContent = helpContent + "<li>OBJECT DISTANCE SLIDER - controls the distance between object and Convex lens.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>You also have an additional text input to control the Object distance.</p>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the moving incident rays pass through the convex lens and form image obeying the laws of physics.</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play button on the top line</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animation by uing the speed control buttons</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Tracing rays at a convex lens concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows the tracing of rays from an erect object at convex lens</p>";
    infoContent = infoContent + "<h3>Convex Lens</h3>";
    infoContent = infoContent + "<p>A convex lens is a lens that converges rays of light that are traveling parallel to its principal axis.</p>";
    infoContent = infoContent + "<p>Convex lenses can be identified by their shape; they are relatively thick across their middle and thin at their upper and lower edges</p>";
    infoContent = infoContent + "<h3>Rules of Refraction</h3>";
    infoContent = infoContent + "<p>Any incident ray traveling parallel to the principal axis of a converging lens will refract through the lens and travel through the focal point on the opposite side of the lens.</p>";
    infoContent = infoContent + "<p>Any incident ray traveling through the focal point on the way to the lens will refract through the lens and travel parallel to the principal axis.</p>";
    infoContent = infoContent + "<p>An incident ray that passes through the center of the lens will in effect continue in the same direction that it had when it entered the lens.</p>";
    
    PIEupdateInfo(infoContent);
}



function newdis(newValue)
{
    newx = newValue;
    	
        line11.position.x=newx;
        line12.position.x=newx;
            
        
           line41.traverse(  function ( child ) { child.visible = true; } );
        line42.traverse(  function ( child ) { child.visible = true; } );
        line43.traverse(  function ( child ) { child.visible = true; } );
        line51.traverse(  function ( child ) { child.visible = true; } );
        line52.traverse(  function ( child ) { child.visible = true; } );
        line53.traverse(  function ( child ) { child.visible = true; } );
        
    
    
        line1.geometry.vertices[0].x=newx;
        line1.geometry.vertices[0].y=15;
        line1.geometry.vertices[1].x=0;
        line1.geometry.vertices[1].y=15;
        line1.geometry.verticesNeedUpdate=true;
        
        line2.geometry.vertices[0].x=0;
        line2.geometry.vertices[0].y=15;
        line2.geometry.vertices[1].x=-70;
        line2.geometry.vertices[1].y=-15*((-70-c3.position.x)/c3.position.x);
        line2.geometry.verticesNeedUpdate=true;

        line3.geometry.vertices[0].x=newx;
        line3.geometry.vertices[0].y=15;
        line3.geometry.vertices[1].x=-70;
        line3.geometry.vertices[1].y=-1050/newx;
        line3.geometry.verticesNeedUpdate=true;
        
        line4.geometry.vertices[0].x=newx;
        line4.geometry.vertices[0].y=15;
        line4.geometry.vertices[1].x=0;
        line4.geometry.vertices[1].y=15*(-c1.position.x)/(newx-c1.position.x);
        line4.geometry.verticesNeedUpdate=true;

        line5.geometry.vertices[0].x=0;
        line5.geometry.vertices[0].y=15*(-c1.position.x)/(newx-c1.position.x);
        line5.geometry.vertices[1].x=-70;
        line5.geometry.vertices[1].y=15*(-c1.position.x)/(newx-c1.position.x);
        line5.geometry.verticesNeedUpdate=true;
        
       
        line41.geometry.vertices[0].x=((newx)/2)+1;
        line41.geometry.vertices[0].y=15-1;
        line41.geometry.vertices[1].x=(newx)/2;
        line41.geometry.vertices[1].y=15;
        line41.geometry.vertices[2].x=((newx)/2)+1;
        line41.geometry.vertices[2].y=15+1;
        line41.geometry.verticesNeedUpdate=true;

        line42.geometry.vertices[0].x=((newx)/2)+0.5;
        line42.geometry.vertices[0].y=8.5;
        line42.geometry.vertices[1].x=((newx)/2);
        line42.geometry.vertices[1].y=7.5;
        line42.geometry.vertices[2].x=((newx)/2)+1;
        line42.geometry.vertices[2].y=6.8;
        line42.geometry.verticesNeedUpdate=true;
        k=-15*(c1.position.x)/(newx-c1.position.x);
        if(newx>=c1.position.x)
        {
        line43.geometry.vertices[0].x=((newx+c1.position.x)/2)-0.2;
        line43.geometry.vertices[0].y=(15)/2+1;
        line43.geometry.vertices[1].x=(newx+c1.position.x)/2;
        line43.geometry.vertices[1].y=(15)/2;
        line43.geometry.vertices[2].x=((newx+c1.position.x)/2)+1;
        line43.geometry.vertices[2].y=(15)/2-0.4;
        line43.geometry.verticesNeedUpdate=true;
        }
        else
        {
        line43.geometry.vertices[0].x=((newx)/2)-0.2;
        line43.geometry.vertices[0].y=(15+k)/2-1;
        line43.geometry.vertices[1].x=(newx)/2;
        line43.geometry.vertices[1].y=(15+k)/2;
        line43.geometry.vertices[2].x=((newx)/2)+1.4;
        line43.geometry.vertices[2].y=(15+k)/2-0.4;
        line43.geometry.verticesNeedUpdate=true;
        }
        
        line51.geometry.vertices[0].x=-70+1;
        line51.geometry.vertices[0].y=-15*((-70-c3.position.x)/c3.position.x);
        line51.geometry.vertices[1].x=-70;
        line51.geometry.vertices[1].y=-15*((-70-c3.position.x)/c3.position.x);
        line51.geometry.vertices[2].x=-70;
        line51.geometry.vertices[2].y=-15*((-70-c3.position.x)/c3.position.x)+1;
        line51.geometry.verticesNeedUpdate=true;

        line52.geometry.vertices[0].x=-69;
        line52.geometry.vertices[0].y=k-0.5;
        line52.geometry.vertices[1].x=-70;
        line52.geometry.vertices[1].y=k;
        line52.geometry.vertices[2].x=-69;
        line52.geometry.vertices[2].y=k+0.5;
        line52.geometry.verticesNeedUpdate=true;

        line53.geometry.vertices[0].x=-70+0.5;
        line53.geometry.vertices[0].y=(-1050/newx)+1;
        line53.geometry.vertices[1].x=-70;
        line53.geometry.vertices[1].y=-1050/newx;
        line53.geometry.vertices[2].x=-70+1;
        line53.geometry.vertices[2].y=(-1050/newx)-0.5;
        line53.geometry.verticesNeedUpdate=true;
        i=0;
        PIErender();
    //PIEstartAnimation();
}
function newdis1(newValue)
{
    newx = newValue;
        
           line41.traverse(  function ( child ) { child.visible = true; } );
        line42.traverse(  function ( child ) { child.visible = true; } );
        line43.traverse(  function ( child ) { child.visible = true; } );
        line51.traverse(  function ( child ) { child.visible = true; } );
        line52.traverse(  function ( child ) { child.visible = true; } );
        line53.traverse(  function ( child ) { child.visible = true; } );
        
    
    
        line1.geometry.vertices[0].x=newx;
        line1.geometry.vertices[0].y=15;
        line1.geometry.vertices[1].x=0;
        line1.geometry.vertices[1].y=15;
        line1.geometry.verticesNeedUpdate=true;
        
        line2.geometry.vertices[0].x=0;
        line2.geometry.vertices[0].y=15;
        line2.geometry.vertices[1].x=-70;
        line2.geometry.vertices[1].y=-15*((-70-c3.position.x)/c3.position.x);
        line2.geometry.verticesNeedUpdate=true;

        line3.geometry.vertices[0].x=newx;
        line3.geometry.vertices[0].y=15;
        line3.geometry.vertices[1].x=-70;
        line3.geometry.vertices[1].y=-1050/newx;
        line3.geometry.verticesNeedUpdate=true;
        
        line4.geometry.vertices[0].x=newx;
        line4.geometry.vertices[0].y=15;
        line4.geometry.vertices[1].x=0;
        line4.geometry.vertices[1].y=15*(-c1.position.x)/(newx-c1.position.x);
        line4.geometry.verticesNeedUpdate=true;

        line5.geometry.vertices[0].x=0;
        line5.geometry.vertices[0].y=15*(-c1.position.x)/(newx-c1.position.x);
        line5.geometry.vertices[1].x=-70;
        line5.geometry.vertices[1].y=15*(-c1.position.x)/(newx-c1.position.x);
        line5.geometry.verticesNeedUpdate=true;
        
       
        line41.geometry.vertices[0].x=((newx)/2)+1;
        line41.geometry.vertices[0].y=15-1;
        line41.geometry.vertices[1].x=(newx)/2;
        line41.geometry.vertices[1].y=15;
        line41.geometry.vertices[2].x=((newx)/2)+1;
        line41.geometry.vertices[2].y=15+1;
        line41.geometry.verticesNeedUpdate=true;

        line42.geometry.vertices[0].x=((newx)/2)+0.5;
        line42.geometry.vertices[0].y=8.5;
        line42.geometry.vertices[1].x=((newx)/2);
        line42.geometry.vertices[1].y=7.5;
        line42.geometry.vertices[2].x=((newx)/2)+1;
        line42.geometry.vertices[2].y=6.8;
        line42.geometry.verticesNeedUpdate=true;
        k=-15*(c1.position.x)/(newx-c1.position.x);
        if(newx>=c1.position.x)
        {
        line43.geometry.vertices[0].x=((newx+c1.position.x)/2)-0.2;
        line43.geometry.vertices[0].y=(15)/2+1;
        line43.geometry.vertices[1].x=(newx+c1.position.x)/2;
        line43.geometry.vertices[1].y=(15)/2;
        line43.geometry.vertices[2].x=((newx+c1.position.x)/2)+1;
        line43.geometry.vertices[2].y=(15)/2-0.4;
        line43.geometry.verticesNeedUpdate=true;
        }
        else
        {
        line43.geometry.vertices[0].x=((newx)/2)-0.2;
        line43.geometry.vertices[0].y=(15+k)/2-1;
        line43.geometry.vertices[1].x=(newx)/2;
        line43.geometry.vertices[1].y=(15+k)/2;
        line43.geometry.vertices[2].x=((newx)/2)+1.4;
        line43.geometry.vertices[2].y=(15+k)/2-0.4;
        line43.geometry.verticesNeedUpdate=true;
        }
        
        
        line51.geometry.vertices[0].x=-70+1;
        line51.geometry.vertices[0].y=-15*((-70-c3.position.x)/c3.position.x);
        line51.geometry.vertices[1].x=-70;
        line51.geometry.vertices[1].y=-15*((-70-c3.position.x)/c3.position.x);
        line51.geometry.vertices[2].x=-70;
        line51.geometry.vertices[2].y=-15*((-70-c3.position.x)/c3.position.x)+1;
        line51.geometry.verticesNeedUpdate=true;

        line52.geometry.vertices[0].x=-69;
        line52.geometry.vertices[0].y=k-0.5;
        line52.geometry.vertices[1].x=-70;
        line52.geometry.vertices[1].y=k;
        line52.geometry.vertices[2].x=-69;
        line52.geometry.vertices[2].y=k+0.5;
        line52.geometry.verticesNeedUpdate=true;

        line53.geometry.vertices[0].x=-70+0.5;
        line53.geometry.vertices[0].y=(-1050/newx)+1;
        line53.geometry.vertices[1].x=-70;
        line53.geometry.vertices[1].y=-1050/newx;
        line53.geometry.vertices[2].x=-70+1;
        line53.geometry.vertices[2].y=(-1050/newx)-0.5;
        line53.geometry.verticesNeedUpdate=true;
        i=0;
        PIErender();
        //PIEstartAnimation();	
   
}
function newrad(newValue)
{
    line41.traverse(  function ( child ) { child.visible = true; } );
        line42.traverse(  function ( child ) { child.visible = true; } );
        line43.traverse(  function ( child ) { child.visible = true; } );
        line51.traverse(  function ( child ) { child.visible = true; } );
        line52.traverse(  function ( child ) { child.visible = true; } );
        line53.traverse(  function ( child ) { child.visible = true; } );
        

    rad1=(newValue);
    c1.position.x=rad1/2.0;
    c2.position.x=rad1;
    c3.position.x=-rad1/2.0;
    c4.position.x=-rad1;
    x =0; y = -30;
    mov=15-(newValue-40)/4;


                var fishShape = new THREE.Shape();

                fishShape.moveTo(x,y);
                fishShape.quadraticCurveTo(x -mov , y +30, x , y +60);
                fishShape.quadraticCurveTo(x + mov,y+30, x, y );
                
var extrudeSettings = { curvesegments:100,amount: 0, bevelEnabled: false, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };

geometry = new THREE.ExtrudeGeometry( fishShape, extrudeSettings );
    mesh.geometry=geometry;


        ct1.position.x=c2.position.x+2;
        ct3.position.x=c4.position.x+2;

        line71.geometry.vertices[0].x=c3.position.x;
        line71.geometry.vertices[0].y=-4;
        line71.geometry.vertices[1].x=c3.position.x;
        line71.geometry.vertices[1].y=-2;
        line71.geometry.vertices[2].x=c3.position.x-1;
        line71.geometry.vertices[2].y=-2;
        line71.geometry.verticesNeedUpdate=true;

        line72.geometry.vertices[0].x=c3.position.x;
        line72.geometry.vertices[0].y=-3;
        line72.geometry.vertices[1].x=c3.position.x-1;
        line72.geometry.vertices[1].y=-3;
        line72.geometry.verticesNeedUpdate=true;

        line73.geometry.vertices[0].x=c1.position.x;
        line73.geometry.vertices[0].y=-4;
        line73.geometry.vertices[1].x=c1.position.x;
        line73.geometry.vertices[1].y=-2;
        line73.geometry.vertices[2].x=c1.position.x-1;
        line73.geometry.vertices[2].y=-2;
        line73.geometry.verticesNeedUpdate=true;

        line74.geometry.vertices[0].x=c1.position.x;
        line74.geometry.vertices[0].y=-3;
        line74.geometry.vertices[1].x=c1.position.x-1;
        line74.geometry.vertices[1].y=-3;
        line74.geometry.verticesNeedUpdate=true;

        line75.geometry.vertices[0].x=c4.position.x;
        line75.geometry.vertices[0].y=-4;
        line75.geometry.vertices[1].x=c4.position.x;
        line75.geometry.vertices[1].y=-2;
        line75.geometry.vertices[2].x=c4.position.x-1;
        line75.geometry.vertices[2].y=-2;
        line75.geometry.verticesNeedUpdate=true;

        line76.geometry.vertices[0].x=c4.position.x;
        line76.geometry.vertices[0].y=-3;
        line76.geometry.vertices[1].x=c4.position.x-1;
        line76.geometry.vertices[1].y=-3;
        line76.geometry.verticesNeedUpdate=true;

        line77.geometry.vertices[0].x=c2.position.x;
        line77.geometry.vertices[0].y=-4;
        line77.geometry.vertices[1].x=c2.position.x;
        line77.geometry.vertices[1].y=-2;
        line77.geometry.vertices[2].x=c2.position.x-1;
        line77.geometry.vertices[2].y=-2;
        line77.geometry.verticesNeedUpdate=true;

        line78.geometry.vertices[0].x=c2.position.x;
        line78.geometry.vertices[0].y=-3;
        line78.geometry.vertices[1].x=c2.position.x-1;
        line78.geometry.vertices[1].y=-3;
        line78.geometry.verticesNeedUpdate=true;

        line79.geometry.vertices[0].x=c2.position.x+2;
        line79.geometry.vertices[0].y=-4;
        line79.geometry.vertices[1].x=c2.position.x+0.5;
        line79.geometry.vertices[1].y=-4;
        line79.geometry.verticesNeedUpdate=true;

        line710.geometry.vertices[0].x=c4.position.x+2;
        line710.geometry.vertices[0].y=-4;
        line710.geometry.vertices[1].x=c4.position.x+0.5;
        line710.geometry.vertices[1].y=-4;
        line710.geometry.verticesNeedUpdate=true;

        line1.geometry.vertices[0].x=newx;
        line1.geometry.vertices[0].y=15;
        line1.geometry.vertices[1].x=0;
        line1.geometry.vertices[1].y=15;
        line1.geometry.verticesNeedUpdate=true;
        
        line2.geometry.vertices[0].x=0;
        line2.geometry.vertices[0].y=15;
        line2.geometry.vertices[1].x=-70;
        line2.geometry.vertices[1].y=-15*((-70-c3.position.x)/c3.position.x);
        line2.geometry.verticesNeedUpdate=true;

        line3.geometry.vertices[0].x=newx;
        line3.geometry.vertices[0].y=15;
        line3.geometry.vertices[1].x=-70;
        line3.geometry.vertices[1].y=-1050/newx;
        line3.geometry.verticesNeedUpdate=true;
        
        line4.geometry.vertices[0].x=newx;
        line4.geometry.vertices[0].y=15;
        line4.geometry.vertices[1].x=0;
        line4.geometry.vertices[1].y=15*(-c1.position.x)/(newx-c1.position.x);
        line4.geometry.verticesNeedUpdate=true;

        line5.geometry.vertices[0].x=0;
        line5.geometry.vertices[0].y=15*(-c1.position.x)/(newx-c1.position.x);
        line5.geometry.vertices[1].x=-70;
        line5.geometry.vertices[1].y=15*(-c1.position.x)/(newx-c1.position.x);
        line5.geometry.verticesNeedUpdate=true;
        
       
        line41.geometry.vertices[0].x=((newx)/2)+1;
        line41.geometry.vertices[0].y=15-1;
        line41.geometry.vertices[1].x=(newx)/2;
        line41.geometry.vertices[1].y=15;
        line41.geometry.vertices[2].x=((newx)/2)+1;
        line41.geometry.vertices[2].y=15+1;
        line41.geometry.verticesNeedUpdate=true;

        line42.geometry.vertices[0].x=((newx)/2)+0.5;
        line42.geometry.vertices[0].y=8.5;
        line42.geometry.vertices[1].x=((newx)/2);
        line42.geometry.vertices[1].y=7.5;
        line42.geometry.vertices[2].x=((newx)/2)+1;
        line42.geometry.vertices[2].y=6.8;
        line42.geometry.verticesNeedUpdate=true;
        k=-15*(c1.position.x)/(newx-c1.position.x);
        if(newx>=c1.position.x)
        {
        line43.geometry.vertices[0].x=((newx+c1.position.x)/2)-0.2;
        line43.geometry.vertices[0].y=(15)/2+1;
        line43.geometry.vertices[1].x=(newx+c1.position.x)/2;
        line43.geometry.vertices[1].y=(15)/2;
        line43.geometry.vertices[2].x=((newx+c1.position.x)/2)+1;
        line43.geometry.vertices[2].y=(15)/2-0.4;
        line43.geometry.verticesNeedUpdate=true;
        }
        else
        {
        line43.geometry.vertices[0].x=((newx)/2)-0.2;
        line43.geometry.vertices[0].y=(15+k)/2-1;
        line43.geometry.vertices[1].x=(newx)/2;
        line43.geometry.vertices[1].y=(15+k)/2;
        line43.geometry.vertices[2].x=((newx)/2)+1.4;
        line43.geometry.vertices[2].y=(15+k)/2-0.4;
        line43.geometry.verticesNeedUpdate=true;
        }
        
        line51.geometry.vertices[0].x=-70+1;
        line51.geometry.vertices[0].y=-15*((-70-c3.position.x)/c3.position.x);
        line51.geometry.vertices[1].x=-70;
        line51.geometry.vertices[1].y=-15*((-70-c3.position.x)/c3.position.x);
        line51.geometry.vertices[2].x=-70;
        line51.geometry.vertices[2].y=-15*((-70-c3.position.x)/c3.position.x)+1;
        line51.geometry.verticesNeedUpdate=true;

        line52.geometry.vertices[0].x=-69;
        line52.geometry.vertices[0].y=k-0.5;
        line52.geometry.vertices[1].x=-70;
        line52.geometry.vertices[1].y=k;
        line52.geometry.vertices[2].x=-69;
        line52.geometry.vertices[2].y=k+0.5;
        line52.geometry.verticesNeedUpdate=true;

        line53.geometry.vertices[0].x=-70+0.5;
        line53.geometry.vertices[0].y=(-1050/newx)+1;
        line53.geometry.vertices[1].x=-70;
        line53.geometry.vertices[1].y=-1050/newx;
        line53.geometry.vertices[2].x=-70+1;
        line53.geometry.vertices[2].y=(-1050/newx)-0.5;
        line53.geometry.verticesNeedUpdate=true;
        i=0;
        PIErender();
        //PIEstartAnimation();
}


var xi=90;
var xmin=8;
var xmax=90;
var fold=0.1;
var objectx='OBJECT DISTANCE (cm)';
var imagex='IMAGE DISTANCE (cm)';
var objecth='OBJECT HEIGHT';
var imageh='IMAGE HEIGHT';
var ox=90.0;
var ix=45.0;
var oh=15.0;
var ih=9.0;
var ri=60;
var rmin=40;
var rmax=80;
var radius="RADIUS (cm)";


        function loadExperimentElements()
        {
        	initialiseInfo();
            initialiseHelp();
            PIEsetExperimentTitle("TRACING RAYS AT A CONVEX LENS");
            PIEsetDeveloperName("Hemanth Katari");
            PIEhideControlElement();
            document.title = "TRACING RAYS AT A CONVEX LENS";
        PIEaddInputSlider(radius,ri,newrad,rmin,rmax,fold);
        PIEaddInputSlider(objectx,xi,newdis,xmin,xmax,fold);

        

        
         geometry = new THREE.BoxGeometry( 500,500,0);
         material = new THREE.MeshBasicMaterial( {color: 0xFCEDB2} );
        myFloor1  = new THREE.Mesh( geometry, material );
         myFloor1.position.set(0,3,0);
            myFloor1.receiveShadow = true;
         PIEaddElement(myFloor1);
 
       
        geometry = new THREE.SphereGeometry( 0.6, 20,20);
        material = new THREE.LineBasicMaterial( { color: 0x03c42a, side: THREE.DoubleSide } );
         c1 = new THREE.Mesh( geometry, material );
        c1.position.x = 30;
        c1.position.y = 0;
        c1.position.z = 0;
        PIEaddElement(c1);


        geometry = new THREE.SphereGeometry( 0.6, 20,20);
        material = new THREE.LineBasicMaterial( { color: 0x03c42a, side: THREE.DoubleSide } );
        c2 = new THREE.Mesh( geometry, material );
        c2.position.x = 60;
        c2.position.y = 0;
        c2.position.z = 0;
        PIEaddElement(c2);

        geometry = new THREE.SphereGeometry( 0.6, 20,20);
        material = new THREE.LineBasicMaterial( { color: 0x03c42a, side: THREE.DoubleSide } );
        c3 = new THREE.Mesh( geometry, material );
        c3.position.x = -30;
        c3.position.y = 0;
        c3.position.z = 0;
        PIEaddElement(c3);


        geometry = new THREE.SphereGeometry( 0.6, 20,20);
        material = new THREE.LineBasicMaterial( { color: 0x03c42a, side: THREE.DoubleSide } );
        c4 = new THREE.Mesh( geometry, material );
        c4.position.x = -60;
        c4.position.y = 0;
        c4.position.z = 0;
        PIEaddElement(c4);

        x =0; y = -30;

                var fishShape = new THREE.Shape();

                fishShape.moveTo(x,y);
                fishShape.quadraticCurveTo(x -10 , y +30, x , y +60);
                fishShape.quadraticCurveTo(x + 10,y+30, x, y );
                


var extrudeSettings = { amount: 0, bevelEnabled: false, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };

geometry = new THREE.ExtrudeGeometry( fishShape, extrudeSettings );

 mesh = new THREE.Mesh( geometry, new THREE.LineBasicMaterial({color:0x1e0987,opacity:0.6,transparent:true}) );
 //mesh.scale.x=2;
        PIEaddElement( mesh );


        
        
         material = new THREE.LineBasicMaterial({color: 0x1e0987});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -300, 0, 0 ),new THREE.Vector3( 300, 0, 0 ));
        line = new THREE.Line( geometry, material );
        PIEaddElement(line);

        material = new THREE.LineDashedMaterial({color: 0x1e0987,dashSize: 1,gapSize: 0.3});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 0, -100, 0 ),new THREE.Vector3( 0, 100, 0 ));
        geometry.computeLineDistances();
        linel = new THREE.Line( geometry, material );
        PIEaddElement(linel);
       
        material = new THREE.MeshBasicMaterial({color: 0x044402});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 90, 15, 0 ),new THREE.Vector3( 0, 15, 0 ));
		line1 = new THREE.Line( geometry, material );
        PIEaddElement(line1);

        material = new THREE.MeshBasicMaterial({color: 0x044402});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 0, 15, 0 ),new THREE.Vector3( -70,-20, 0 ));
        line2 = new THREE.Line( geometry, material );
        PIEaddElement(line2);
        
		
        material = new THREE.LineDashedMaterial({color: 0x023644});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 90, 15 ,0),new THREE.Vector3( -70, -70/6.0, 0 ));
        line3 = new THREE.Line( geometry, material );
        PIEaddElement(line3);


        material = new THREE.LineDashedMaterial({color: 0x472202});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 90, 15 ,0),new THREE.Vector3( 0, -7.5, 0 ));
        line4 = new THREE.Line( geometry, material );
        PIEaddElement(line4);


        material = new THREE.LineDashedMaterial({color: 0x472202});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 0, -7.5, 0 ),new THREE.Vector3( -70, -7.5, 0 ));
        line5 = new THREE.Line( geometry, material );
        PIEaddElement(line5);

        geometry = new THREE.BoxGeometry( 1,15,0);
         material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
        line11  = new THREE.Mesh( geometry, material );
         line11.position.set(90,7.5,0);
            line11.receiveShadow = true;
         PIEaddElement(line11);


       
var shape = new THREE.Shape();
shape.moveTo( 0,0 );
shape.lineTo( -2,-2  );
shape.lineTo( 0,-2  );
shape.lineTo( 2, -2 );
shape.lineTo( 0, 0 );

var extrudeSettings = {
    steps: 2,
    amount: 0,
    bevelEnabled: false,
    bevelThickness: 1,
    bevelSize: 0.1,
    bevelSegments: 1
};

geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
 line12 = new THREE.Mesh( geometry, material ) ;
		
line12.position.set(90,15.3,0);
        PIEaddElement(line12);
        
         PIEdragElement(line11);
         PIEsetDrag(line11, myBallDrag);
        
       
        material = new THREE.MeshBasicMaterial({color:0x044402 });
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( ((90+0)/2)+1, ((15+15)/2)+1, 0 ),new THREE.Vector3( (90)/2, (15+15)/2, 0 ),new THREE.Vector3( ((90)/2)+1, ((15+15)/2)-1, 0 ));
		line41 = new THREE.Line( geometry, material );
        PIEaddElement(line41);
		material = new THREE.LineDashedMaterial({color:0x023644 });
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( ((90)/2)+0.5, 8.5, 0 ),new THREE.Vector3( (90)/2, 7.5, 0 ),new THREE.Vector3( ((90)/2)+1, 6.8, 0 ));
        line42 = new THREE.Line( geometry, material );
        PIEaddElement(line42);
         material = new THREE.MeshBasicMaterial({color: 0x472202});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( ((90+30)/2)-0.2, (15/2)+1, 0 ),new THREE.Vector3( (90+30)/2, (15)/2, 0 ),new THREE.Vector3( ((90+30)/2)+1, ((15)/2)-0.4, 0 ));
		line43 = new THREE.Line( geometry, material );
        PIEaddElement(line43);
        x1=-45;
        y1=-7.5;
        material = new THREE.MeshBasicMaterial({color: 0x044402});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(-70 +1 ,-15*(4/3), 0 ),new THREE.Vector3(-70,-15*(4/3), 0  ),new THREE.Vector3( -70,-15*(4/3)+1, 0));
		line51 = new THREE.Line( geometry, material );
        PIEaddElement(line51);
		material = new THREE.LineDashedMaterial({color: 0x472202});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -69,-7.5-0.5,0),new THREE.Vector3(-70,-7.5,0),new THREE.Vector3(-69,-7,0));
        line52 = new THREE.Line( geometry, material );
        PIEaddElement(line52);
        material = new THREE.MeshBasicMaterial({color:0x023644 });
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -70+0.5, (-1050/90.0)+1, 0 ),new THREE.Vector3( -70, (-1050/90.0), 0 ),new THREE.Vector3( -70+1, (-1050/90.0)-0.5, 0 ));
		line53 = new THREE.Line( geometry, material );
        PIEaddElement(line53);
		
        geometry = new THREE.RingGeometry(  0.9, 1, 32 ,8,0.5* Math.PI,Math.PI);
        material = new THREE.LineBasicMaterial( { color: 0x000000, side: THREE.DoubleSide } );
         ct1 = new THREE.Mesh( geometry, material );
        ct1.position.set(62,-3, 0.0);
        PIEaddElement(ct1);
        
        geometry = new THREE.RingGeometry(  0.9, 1, 32 ,8,0.5* Math.PI,Math.PI);
        material = new THREE.LineBasicMaterial( { color: 0x000000, side: THREE.DoubleSide } );
         ct3 = new THREE.Mesh( geometry, material );
        ct3.position.set(-58,-3, 0.0);
        PIEaddElement(ct3);

         material = new THREE.MeshBasicMaterial({color: 0x000000,linewidth:2});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -30, -4, 0 ),new THREE.Vector3( -30, -2, 0 ),new THREE.Vector3( -31, -2, 0 ));
        line71 = new THREE.Line( geometry, material );
        PIEaddElement(line71);
        
        material = new THREE.LineDashedMaterial({color: 0x000000,linewidth:2});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -30, -3 ,0),new THREE.Vector3( -31, -3, 0 ));
        line72 = new THREE.Line( geometry, material );
        PIEaddElement(line72);

         material = new THREE.MeshBasicMaterial({color: 0x000000,linewidth:2});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 30, -4, 0 ),new THREE.Vector3( 30, -2, 0 ),new THREE.Vector3( 29, -2, 0 ));
        line73 = new THREE.Line( geometry, material );
        PIEaddElement(line73);
        
        material = new THREE.LineDashedMaterial({color: 0x000000,linewidth:2});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 30, -3 ,0),new THREE.Vector3( 29, -3, 0 ));
        line74 = new THREE.Line( geometry, material );
        PIEaddElement(line74);

         material = new THREE.MeshBasicMaterial({color: 0x000000,linewidth:2});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -60, -4, 0 ),new THREE.Vector3( -60, -2, 0 ),new THREE.Vector3( -61, -2, 0 ));
        line75 = new THREE.Line( geometry, material );
        PIEaddElement(line75);
        
        material = new THREE.LineDashedMaterial({color: 0x000000,linewidth:2});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -60, -3 ,0),new THREE.Vector3( -61, -3, 0 ));
        line76 = new THREE.Line( geometry, material );
        PIEaddElement(line76);

         material = new THREE.MeshBasicMaterial({color: 0x000000,linewidth:2});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 60, -4, 0 ),new THREE.Vector3( 60, -2, 0 ),new THREE.Vector3( 59, -2, 0 ));
        line77 = new THREE.Line( geometry, material );
        PIEaddElement(line77);
        
        material = new THREE.LineDashedMaterial({color: 0x000000,linewidth:2});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 60, -3 ,0),new THREE.Vector3( 59, -3, 0 ));
        line78 = new THREE.Line( geometry, material );
        PIEaddElement(line78);

        material = new THREE.MeshBasicMaterial({color: 0x000000,linewidth:2});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 62, -4, 0 ),new THREE.Vector3( 60.5, -4, 0 ));
        line79 = new THREE.Line( geometry, material );
        PIEaddElement(line79);
        
        material = new THREE.LineDashedMaterial({color: 0x000000,linewidth:2});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -58, -4 ,0),new THREE.Vector3( -59.5, -4, 0 ));
        line710 = new THREE.Line( geometry, material );
        PIEaddElement(line710);


        
        PIEresize();
        //resetExperiment();
        PIEsetAreaOfInterest(-80, -50, 80, 50);
        

}
function resetExperiment()
{
	
    PIEchangeInputSlider(radius, ri);
    PIEchangeInputSlider(objectx, ox);
        line41.traverse(  function ( child ) { child.visible = true; } );
        line42.traverse(  function ( child ) { child.visible = true; } );
        line43.traverse(  function ( child ) { child.visible = true; } );
        line51.traverse(  function ( child ) { child.visible = true; } );
        line52.traverse(  function ( child ) { child.visible = true; } );
        line53.traverse(  function ( child ) { child.visible = true; } );
        
        newx=90;
    rad1=120-(60);
    c1.position.x=rad1/2.0;
    c2.position.x=rad1;
    c3.position.x=-rad1/2.0;
    c4.position.x=-rad1;
    x =0; y = -30;
    mov=5+(60-40)/4;

    line11.position.x=newx;
        line12.position.x=newx;
         

                var fishShape = new THREE.Shape();

                fishShape.moveTo(x,y);
                fishShape.quadraticCurveTo(x -mov , y +30, x , y +60);
                fishShape.quadraticCurveTo(x + mov,y+30, x, y );
                
var extrudeSettings = { curvesegments:100,amount: 0, bevelEnabled: false, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };

geometry = new THREE.ExtrudeGeometry( fishShape, extrudeSettings );
    mesh.geometry=geometry;


        ct1.position.x=c2.position.x+2;
        ct3.position.x=c4.position.x+2;

        line71.geometry.vertices[0].x=c3.position.x;
        line71.geometry.vertices[0].y=-4;
        line71.geometry.vertices[1].x=c3.position.x;
        line71.geometry.vertices[1].y=-2;
        line71.geometry.vertices[2].x=c3.position.x-1;
        line71.geometry.vertices[2].y=-2;
        line71.geometry.verticesNeedUpdate=true;

        line72.geometry.vertices[0].x=c3.position.x;
        line72.geometry.vertices[0].y=-3;
        line72.geometry.vertices[1].x=c3.position.x-1;
        line72.geometry.vertices[1].y=-3;
        line72.geometry.verticesNeedUpdate=true;

        line73.geometry.vertices[0].x=c1.position.x;
        line73.geometry.vertices[0].y=-4;
        line73.geometry.vertices[1].x=c1.position.x;
        line73.geometry.vertices[1].y=-2;
        line73.geometry.vertices[2].x=c1.position.x-1;
        line73.geometry.vertices[2].y=-2;
        line73.geometry.verticesNeedUpdate=true;

        line74.geometry.vertices[0].x=c1.position.x;
        line74.geometry.vertices[0].y=-3;
        line74.geometry.vertices[1].x=c1.position.x-1;
        line74.geometry.vertices[1].y=-3;
        line74.geometry.verticesNeedUpdate=true;

        line75.geometry.vertices[0].x=c4.position.x;
        line75.geometry.vertices[0].y=-4;
        line75.geometry.vertices[1].x=c4.position.x;
        line75.geometry.vertices[1].y=-2;
        line75.geometry.vertices[2].x=c4.position.x-1;
        line75.geometry.vertices[2].y=-2;
        line75.geometry.verticesNeedUpdate=true;

        line76.geometry.vertices[0].x=c4.position.x;
        line76.geometry.vertices[0].y=-3;
        line76.geometry.vertices[1].x=c4.position.x-1;
        line76.geometry.vertices[1].y=-3;
        line76.geometry.verticesNeedUpdate=true;

        line77.geometry.vertices[0].x=c2.position.x;
        line77.geometry.vertices[0].y=-4;
        line77.geometry.vertices[1].x=c2.position.x;
        line77.geometry.vertices[1].y=-2;
        line77.geometry.vertices[2].x=c2.position.x-1;
        line77.geometry.vertices[2].y=-2;
        line77.geometry.verticesNeedUpdate=true;

        line78.geometry.vertices[0].x=c2.position.x;
        line78.geometry.vertices[0].y=-3;
        line78.geometry.vertices[1].x=c2.position.x-1;
        line78.geometry.vertices[1].y=-3;
        line78.geometry.verticesNeedUpdate=true;

        line79.geometry.vertices[0].x=c2.position.x+2;
        line79.geometry.vertices[0].y=-4;
        line79.geometry.vertices[1].x=c2.position.x+0.5;
        line79.geometry.vertices[1].y=-4;
        line79.geometry.verticesNeedUpdate=true;

        line710.geometry.vertices[0].x=c4.position.x+2;
        line710.geometry.vertices[0].y=-4;
        line710.geometry.vertices[1].x=c4.position.x+0.5;
        line710.geometry.vertices[1].y=-4;
        line710.geometry.verticesNeedUpdate=true;

        line1.geometry.vertices[0].x=newx;
        line1.geometry.vertices[0].y=15;
        line1.geometry.vertices[1].x=0;
        line1.geometry.vertices[1].y=15;
        line1.geometry.verticesNeedUpdate=true;
        
        line2.geometry.vertices[0].x=0;
        line2.geometry.vertices[0].y=15;
        line2.geometry.vertices[1].x=-70;
        line2.geometry.vertices[1].y=-15*((-70-c3.position.x)/c3.position.x);
        line2.geometry.verticesNeedUpdate=true;

        line3.geometry.vertices[0].x=newx;
        line3.geometry.vertices[0].y=15;
        line3.geometry.vertices[1].x=-70;
        line3.geometry.vertices[1].y=-1050/newx;
        line3.geometry.verticesNeedUpdate=true;
        
        line4.geometry.vertices[0].x=newx;
        line4.geometry.vertices[0].y=15;
        line4.geometry.vertices[1].x=0;
        line4.geometry.vertices[1].y=15*(-c1.position.x)/(newx-c1.position.x);
        line4.geometry.verticesNeedUpdate=true;

        line5.geometry.vertices[0].x=0;
        line5.geometry.vertices[0].y=15*(-c1.position.x)/(newx-c1.position.x);
        line5.geometry.vertices[1].x=-70;
        line5.geometry.vertices[1].y=15*(-c1.position.x)/(newx-c1.position.x);
        line5.geometry.verticesNeedUpdate=true;
        
       
        line41.geometry.vertices[0].x=((newx)/2)+1;
        line41.geometry.vertices[0].y=15-1;
        line41.geometry.vertices[1].x=(newx)/2;
        line41.geometry.vertices[1].y=15;
        line41.geometry.vertices[2].x=((newx)/2)+1;
        line41.geometry.vertices[2].y=15+1;
        line41.geometry.verticesNeedUpdate=true;

        line42.geometry.vertices[0].x=((newx)/2)+0.5;
        line42.geometry.vertices[0].y=8.5;
        line42.geometry.vertices[1].x=((newx)/2);
        line42.geometry.vertices[1].y=7.5;
        line42.geometry.vertices[2].x=((newx)/2)+1;
        line42.geometry.vertices[2].y=6.8;
        line42.geometry.verticesNeedUpdate=true;
        k=-15*(c1.position.x)/(newx-c1.position.x);
        if(newx>=c1.position.x)
        {
        line43.geometry.vertices[0].x=((newx+c1.position.x)/2)-0.2;
        line43.geometry.vertices[0].y=(15)/2+1;
        line43.geometry.vertices[1].x=(newx+c1.position.x)/2;
        line43.geometry.vertices[1].y=(15)/2;
        line43.geometry.vertices[2].x=((newx+c1.position.x)/2)+1;
        line43.geometry.vertices[2].y=(15)/2-0.4;
        line43.geometry.verticesNeedUpdate=true;
        }
        else
        {
        line43.geometry.vertices[0].x=((newx)/2)-0.2;
        line43.geometry.vertices[0].y=(15+k)/2-1;
        line43.geometry.vertices[1].x=(newx)/2;
        line43.geometry.vertices[1].y=(15+k)/2;
        line43.geometry.vertices[2].x=((newx)/2)+1.4;
        line43.geometry.vertices[2].y=(15+k)/2-0.4;
        line43.geometry.verticesNeedUpdate=true;
        }
        
        
        line51.geometry.vertices[0].x=-70+1;
        line51.geometry.vertices[0].y=-15*((-70-c3.position.x)/c3.position.x);
        line51.geometry.vertices[1].x=-70;
        line51.geometry.vertices[1].y=-15*((-70-c3.position.x)/c3.position.x);
        line51.geometry.vertices[2].x=-70;
        line51.geometry.vertices[2].y=-15*((-70-c3.position.x)/c3.position.x)+1;
        line51.geometry.verticesNeedUpdate=true;

        line52.geometry.vertices[0].x=-69;
        line52.geometry.vertices[0].y=k-0.5;
        line52.geometry.vertices[1].x=-70;
        line52.geometry.vertices[1].y=k;
        line52.geometry.vertices[2].x=-69;
        line52.geometry.vertices[2].y=k+0.5;
        line52.geometry.verticesNeedUpdate=true;

        line53.geometry.vertices[0].x=-70+0.5;
        line53.geometry.vertices[0].y=(-1050/newx)+1;
        line53.geometry.vertices[1].x=-70;
        line53.geometry.vertices[1].y=-1050/newx;
        line53.geometry.vertices[2].x=-70+1;
        line53.geometry.vertices[2].y=(-1050/newx)-0.5;
        line53.geometry.verticesNeedUpdate=true;
        i=0;

}

var i=0,m1,m2,m3,m4,p,cap,j,flag=0,speed=20;
function updateExperimentElements(t, dt)
{
	//PIEslowdownAnimation();
	//PIEspeedupAnimation();
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
    	
        
        line1.geometry.vertices[1].x=newx;
        line1.geometry.vertices[1].y=15;
        line1.geometry.verticesNeedUpdate=true;
        
        line2.geometry.vertices[1].x=0;
        line2.geometry.vertices[1].y=15;
        line2.geometry.verticesNeedUpdate=true;

        line3.geometry.vertices[1].x=newx
        line3.geometry.vertices[1].y=15;
        line3.geometry.verticesNeedUpdate=true;
        
        line4.geometry.vertices[1].x=newx;
        line4.geometry.vertices[1].y=15;
        line4.geometry.verticesNeedUpdate=true;

        line5.geometry.vertices[1].x=0;
        line5.geometry.vertices[1].y=15*(-c1.position.x)/(newx-c1.position.x);
        line5.geometry.verticesNeedUpdate=true;

        line41.traverse(  function ( child ) { child.visible = false; } );
		line42.traverse(  function ( child ) { child.visible = false; } );
	    line43.traverse(  function ( child ) { child.visible = false; } );
	    line51.traverse(  function ( child ) { child.visible = false; } );
		line52.traverse(  function ( child ) { child.visible = false; } );
	    line53.traverse(  function ( child ) { child.visible = false; } );
	 
	    
		i++;
    }
    

    if(line1.geometry.vertices[1].x>=0 )
        {
       
       line1.geometry.vertices[1].x-= 0.5*(speed/30);
         line1.geometry.verticesNeedUpdate = true;
        
        }
        else if(line2.geometry.vertices[1].x>=-70)
        {
        
        line41.traverse(  function ( child ) { child.visible = true; } );
        
        line2.geometry.vertices[1].x-= 0.5*(speed/30);
        line2.geometry.vertices[1].y= -15*((line2.geometry.vertices[1].x-c3.position.x)/c3.position.x);
         line2.geometry.verticesNeedUpdate = true;
        
        }
        else
        {
            if(line3.geometry.vertices[1].x>= -70)
            {
                line51.traverse(  function ( child ) { child.visible = true; } );
        
            line3.geometry.vertices[1].x-= 0.5*(speed/30);
            line3.geometry.vertices[1].y=15*line3.geometry.vertices[1].x/newx;
             line3.geometry.verticesNeedUpdate = true;

            }
            else
            {
               if(line4.geometry.vertices[1].x>=0 )
                 {
                    line42.traverse(  function ( child ) { child.visible = true; } );
                    line53.traverse(  function ( child ) { child.visible = true; } );
        
        
                 line4.geometry.vertices[1].x-= 0.5*(speed/30);
                 line4.geometry.vertices[1].y= 15*(line4.geometry.vertices[1].x-c1.position.x)/(newx-c1.position.x);
                 line4.geometry.verticesNeedUpdate = true;
        
                 }
                 
                 else if(line5.geometry.vertices[1].x>=-70)
                 {
                    line43.traverse(  function ( child ) { child.visible = true; } );
                    
        
                    line5.geometry.vertices[1].x-= 0.5*(speed/30);
                     line5.geometry.verticesNeedUpdate = true;

        
                    }
                 else
                 {
                     i=0;
                     line52.traverse(  function ( child ) { child.visible = true; } );
        
                    PIEstopAnimation();
                    }
            }

        

        }
   
    

}
 
    else
    {
    	flag=1;
    }
     //PIEchangeDisplayText(imagex,-40-newx);
}


