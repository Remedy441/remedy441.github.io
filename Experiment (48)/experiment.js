var c1,c4,rad1=45,text1,linem,ckgeometry,arrowHelper,newx=90,ct1,ct2,ct3,line71,line72,line73,geometry,material,dir,origin,x1,line1,line,line14,arrow1,sourcePos,targetPos,direction,arrow,arrow2,x2,y1,y2,x3,y3,x4,x5,a,b,c,d,x6,y6,x7,y7,x8,y8,k1,k2,length,hex,c2,c3,c11,c12,c13,c14,rad2=20,c23,line11,line12,line13,line14,line2,line33,line441,line442,line3,line4,line21,line22,line23,line24,line41,line42,line43,line44,line51,line52,line54,line53,line61,line62,line64,line63,rad=45;
var s1=-Math.sqrt(45*45-15*15),s2=2*(-Math.sqrt(45*45-15*15))+22.5,cc1,cc2,e,x1,y1;
var helpContent;
var myBallX,myBallY,myBallZ,topB=0,myBallRadius=0.5,leftB=-30,rightB=30,bottomB=0;

function myBallDrag(element, newpos)
{
    myBallX = newpos.x;
    if (newpos.x  < 10) { myBallX =10  }
    else if (newpos.x > 90) { myBallX = (90) }
    myBallY = newpos.y;
    if (newpos.y < 0) { myBallY = 0; }
    else if (newpos.y > 0) { myBallY = 0; }
    myBallZ = newpos.z;
    PIEchangeInputSlider(objectx,myBallX);
        
    line11.position.set(myBallX, myBallY+7.5, myBallZ);
    line12.position.set(myBallX, myBallY+15.4, myBallZ);
    newdis1(myBallX);

}

function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Image formation by a concave lens Help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows the image formation by an erect object at convcave lens , its size and orientation</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to distance slider.</p>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>OBJECT DISTANCE - control by Drag/drop.</li>";
    helpContent = helpContent + "<li>OBJECT DISTANCE SLIDER - controls the distance between object and Concave lens.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>You also have an additional text input to control the Object distance.</p>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the moving incident rays pass through the concave lens and form image obeying the laws of physics.</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play button on the top line</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animaion by uing the speed control buttons</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Image formation by a concave lens concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows the image formation by an erect object at concave lens , its size and orientation</p>";
    infoContent = infoContent + "<h3>Concave Lens</h3>";
    infoContent = infoContent + "<p>A concave lens is a lens that diverges rays of light that are traveling parallel to its principal axis.</p>";
    infoContent = infoContent + "<pConcave lenses can also be identified by their shape; they are relatively thin across their middle and thick at their upper and lower edges.</p>";
    infoContent = infoContent + "<h3>Rules of Refraction</h3>";
    infoContent = infoContent + "<p>Any incident ray traveling parallel to the principal axis of a diverging lens will refract through the lens and travel in line with the focal point</p>";
    infoContent = infoContent + "<p>Any incident ray traveling towards the focal point on the way to the lens will refract through the lens and travel parallel to the principal axis.</p>";
    infoContent = infoContent + "<p>An incident ray that passes through the center of the lens will in effect continue in the same direction that it had when it entered the lens.</p>";
    infoContent = infoContent + "<h3>Image formation</h3>";
    infoContent = infoContent + "<p>Image is located on the object side of the lens</p>";
    infoContent = infoContent + "<p>Image is virtual</p>";
    infoContent = infoContent + "<p>Image is upright</p>";
    infoContent = infoContent + "<p>Image is reduced in size</p>";
    
    PIEupdateInfo(infoContent);
}



function newdis(newValue)
{
    newx = newValue;
    	
        line41.traverse(  function ( child ) { child.visible = true; } );
        line42.traverse(  function ( child ) { child.visible = true; } );
        line43.traverse(  function ( child ) { child.visible = true; } );
        line51.traverse(  function ( child ) { child.visible = true; } );
        line52.traverse(  function ( child ) { child.visible = true; } );
        line53.traverse(  function ( child ) { child.visible = true; } );
        line13.traverse(  function ( child ) { child.visible = true; } );
        line14.traverse(  function ( child ) { child.visible = true; } );

        line11.position.x=newx;
        line12.position.x=newx;
        
        x1=30.0*newx/(newx+30.0);
        y1=450.0/(newx+30.0);
        
        line1.geometry.vertices[0].x=newx;
        line1.geometry.vertices[0].y=15;
        line1.geometry.vertices[1].x=0;
        line1.geometry.vertices[1].y=15;
        line1.geometry.verticesNeedUpdate=true;
        
         line2.geometry.vertices[0].x=0;
        line2.geometry.vertices[0].y=15;
        line2.geometry.vertices[1].x=-30;
        line2.geometry.vertices[1].y=30;
        line2.geometry.verticesNeedUpdate=true;

        line3.geometry.vertices[0].x=newx;
        line3.geometry.vertices[0].y=15;
        line3.geometry.vertices[1].x=-70;
        line3.geometry.vertices[1].y=-1050/newx;
        line3.geometry.verticesNeedUpdate=true;
        
        line4.geometry.vertices[0].x=newx;
        line4.geometry.vertices[0].y=15;
        line4.geometry.vertices[1].x=0;
        line4.geometry.vertices[1].y=y1;
        line4.geometry.verticesNeedUpdate=true;

        line5.geometry.vertices[0].x=0;
        line5.geometry.vertices[0].y=y1;
        line5.geometry.vertices[1].x=-70;
        line5.geometry.vertices[1].y=y1;
        line5.geometry.verticesNeedUpdate=true;
        
        
        
        geometry = new THREE.BoxGeometry( 1,Math.abs(y1),0);
        line13.geometry=geometry;
         line13.position.set(x1,(y1)/2.0,0);

            line14.position.set(x1,y1+0.25,0);


        line21.geometry.vertices[0].x=0;
        line21.geometry.vertices[0].y=15;
        line21.geometry.vertices[1].x=30;
        line21.geometry.vertices[1].y=0;
        line21.geometry.verticesNeedUpdate=true;

        line22.geometry.vertices[0].x=0;
        line22.geometry.vertices[0].y=y1;
        line22.geometry.vertices[1].x=x1;
        line22.geometry.vertices[1].y=y1;
        line22.geometry.verticesNeedUpdate=true;
        
        line23.geometry.vertices[0].x=0;
        line23.geometry.vertices[0].y=y1;
        line23.geometry.vertices[1].x=-30;
        line23.geometry.vertices[1].y=0;
        line23.geometry.verticesNeedUpdate=true;

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

        line43.geometry.vertices[0].x=((newx)/2)+0.5;
        line43.geometry.vertices[0].y=(15+y1)/2+1;
        line43.geometry.vertices[1].x=(newx)/2;
        line43.geometry.vertices[1].y=(15+y1)/2;
        line43.geometry.vertices[2].x=((newx)/2)+1;
        line43.geometry.vertices[2].y=(15+y1)/2-0.8;
        line43.geometry.verticesNeedUpdate=true;

        line52.geometry.vertices[0].x=-69;
        line52.geometry.vertices[0].y=y1-0.5;
        line52.geometry.vertices[1].x=-70;
        line52.geometry.vertices[1].y=y1;
        line52.geometry.vertices[2].x=-69;
        line52.geometry.vertices[2].y=y1+0.5;
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
   
    
    PIEstartAnimation();
}
function newdis1(newValue)
{
    newx = newValue;
        
        x1=30.0*newx/(newx+30.0);
        y1=450.0/(newx+30.0);
        
        line41.traverse(  function ( child ) { child.visible = true; } );
        line42.traverse(  function ( child ) { child.visible = true; } );
        line43.traverse(  function ( child ) { child.visible = true; } );
        line51.traverse(  function ( child ) { child.visible = true; } );
        line52.traverse(  function ( child ) { child.visible = true; } );
        line53.traverse(  function ( child ) { child.visible = true; } );
        line13.traverse(  function ( child ) { child.visible = true; } );
        line14.traverse(  function ( child ) { child.visible = true; } );
        
        line1.geometry.vertices[0].x=newx;
        line1.geometry.vertices[0].y=15;
        line1.geometry.vertices[1].x=0;
        line1.geometry.vertices[1].y=15;
        line1.geometry.verticesNeedUpdate=true;
        
        line2.geometry.vertices[0].x=0;
        line2.geometry.vertices[0].y=15;
        line2.geometry.vertices[1].x=-30;
        line2.geometry.vertices[1].y=30;
        line2.geometry.verticesNeedUpdate=true;
        

        line3.geometry.vertices[0].x=newx;
        line3.geometry.vertices[0].y=15;
        line3.geometry.vertices[1].x=-70;
        line3.geometry.vertices[1].y=-1050/newx;
        line3.geometry.verticesNeedUpdate=true;
        
        line4.geometry.vertices[0].x=newx;
        line4.geometry.vertices[0].y=15;
        line4.geometry.vertices[1].x=0;
        line4.geometry.vertices[1].y=y1;
        line4.geometry.verticesNeedUpdate=true;

        line5.geometry.vertices[0].x=0;
        line5.geometry.vertices[0].y=y1;
        line5.geometry.vertices[1].x=-70;
        line5.geometry.vertices[1].y=y1;
        line5.geometry.verticesNeedUpdate=true;
        
        
        
        geometry = new THREE.BoxGeometry( 1,Math.abs(y1),0);
        line13.geometry=geometry;
         line13.position.set(x1,(y1)/2.0,0);

            line14.position.set(x1,y1+0.25,0);

        line21.geometry.vertices[0].x=0;
        line21.geometry.vertices[0].y=15;
        line21.geometry.vertices[1].x=30;
        line21.geometry.vertices[1].y=0;
        line21.geometry.verticesNeedUpdate=true;

        line22.geometry.vertices[0].x=0;
        line22.geometry.vertices[0].y=y1;
        line22.geometry.vertices[1].x=x1;
        line22.geometry.vertices[1].y=y1;
        line22.geometry.verticesNeedUpdate=true;

        line23.geometry.vertices[0].x=0;
        line23.geometry.vertices[0].y=y1;
        line23.geometry.vertices[1].x=-30;
        line23.geometry.vertices[1].y=0;
        line23.geometry.verticesNeedUpdate=true;

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

        line43.geometry.vertices[0].x=((newx)/2)+0.5;
        line43.geometry.vertices[0].y=(15+y1)/2+1;
        line43.geometry.vertices[1].x=(newx)/2;
        line43.geometry.vertices[1].y=(15+y1)/2;
        line43.geometry.vertices[2].x=((newx)/2)+1;
        line43.geometry.vertices[2].y=(15+y1)/2-0.8;
        line43.geometry.verticesNeedUpdate=true;

          

        line52.geometry.vertices[0].x=-69;
        line52.geometry.vertices[0].y=y1-0.5;
        line52.geometry.vertices[1].x=-70;
        line52.geometry.vertices[1].y=y1;
        line52.geometry.vertices[2].x=-69;
        line52.geometry.vertices[2].y=y1+0.5;
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
   PIEstartAnimation();
}


var xi=90;
var xmin=10;
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
var ri=45;
var rmin=30;
var rmax=60;
var radius="RADIUS (cm)";


        function loadExperimentElements()
        {
        	initialiseInfo();
            initialiseHelp();
            PIEsetExperimentTitle("IMAGE FORMATION BY A CONCAVE LENS");
            PIEsetDeveloperName("Hemanth Katari");
            PIEhideControlElement();
            document.title = "IMAGE FORMATION BY A CONCAVE LENS";
        //PIEaddInputSlider(radius,ri,newrad,rmin,rmax,fold);
        PIEaddInputSlider(objectx,xi,newdis,xmin,xmax,fold);
        
        PIEaddDisplayText(objectx,ox );
        PIEaddDisplayText(imagex,ix );
    	PIEaddDisplayText(objecth, oh);
    	PIEaddDisplayText(imageh, ih);
    
        

        
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

        x =-10; y = -30;

                var fishShape = new THREE.Shape();

                fishShape.moveTo(x,y);
                fishShape.quadraticCurveTo(x +9 , y +30, x , y +60);
                fishShape.lineTo(x +20 , y +60);
                fishShape.quadraticCurveTo(x + 11,y+30, x+20, y );
                fishShape.lineTo(x  , y );
                
                


var extrudeSettings = { amount: 0, bevelEnabled: false, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };

geometry = new THREE.ExtrudeGeometry( fishShape, extrudeSettings );

 mesh = new THREE.Mesh( geometry, new THREE.LineBasicMaterial({color:0x1e0987,opacity:0.6,transparent:true}) );
 mesh.scale.x=1;
        PIEaddElement( mesh );


        
        
         material = new THREE.LineBasicMaterial({color: 0x1e0987});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -300, 0, 0 ),new THREE.Vector3( 300, 0, 0 ));
        line = new THREE.Line( geometry, material );
        PIEaddElement(line);

        material = new THREE.LineDashedMaterial({color: 0x1e0987,dashSize: 1,gapSize: 0.3});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 0, -30, 0 ),new THREE.Vector3( 0, 30, 0 ));
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
        geometry.vertices.push(new THREE.Vector3( 0, 15, 0 ),new THREE.Vector3( -30, 30, 0 ));
        line2 = new THREE.Line( geometry, material );
        PIEaddElement(line2);
        
		
        material = new THREE.LineDashedMaterial({color: 0x023644});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 90, 15 ,0),new THREE.Vector3(-70,-70/6.0 , 0 ));
        line3 = new THREE.Line( geometry, material );
        PIEaddElement(line3);


        material = new THREE.LineDashedMaterial({color: 0x472202});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 90, 15 ,0),new THREE.Vector3( 0, 3.75, 0 ));
        line4 = new THREE.Line( geometry, material );
        PIEaddElement(line4);


        material = new THREE.LineDashedMaterial({color: 0x472202});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 0, 3.75, 0 ),new THREE.Vector3( -70, 3.75, 0 ));
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
		
line12.position.set(90,15.4,0);
        PIEaddElement(line12);
        
         PIEdragElement(line11);
         PIEsetDrag(line11, myBallDrag);

        geometry = new THREE.BoxGeometry( 1,3.75,0);
         material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
        line13  = new THREE.Mesh( geometry, material );
         line13.position.set(22.5,1.875,0);
            line13.receiveShadow = true;
         PIEaddElement(line13);
       
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
 line14 = new THREE.Mesh( geometry, material ) ;
        line14.position.set(22.5,4,0);
        PIEaddElement(line14);

        

        material = new THREE.LineDashedMaterial({color: 0x044402,dashSize: 1,gapSize: 0.3});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 0, 15, 0 ),new THREE.Vector3( 30,0,0 ));
        geometry.computeLineDistances();
        line21 = new THREE.Line( geometry, material );
        PIEaddElement(line21);
        material = new THREE.LineDashedMaterial({color: 0x472202,dashSize: 1,gapSize: 0.3});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 0, 3.75,0 ),new THREE.Vector3(22.5,3.75,0 ));
        geometry.computeLineDistances();
        line22 = new THREE.Line( geometry, material );
        PIEaddElement(line22);
        material = new THREE.LineDashedMaterial({color: 0x472202,dashSize: 1,gapSize: 0.3});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(0, 3.75,0 ),new THREE.Vector3(-30,0,0 ));
        geometry.computeLineDistances();
        line23 = new THREE.Line( geometry, material );
        PIEaddElement(line23);
        

        
        material = new THREE.MeshBasicMaterial({color: 0x044402});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( ((90)/2)+1, 15-1, 0 ),new THREE.Vector3( (90)/2, 15, 0 ),new THREE.Vector3( ((90)/2)+1, 15+1, 0 ));
		line41 = new THREE.Line( geometry, material );
        PIEaddElement(line41);
		material = new THREE.LineDashedMaterial({color: 0x023644});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( ((90)/2)+0.5, 8.5, 0 ),new THREE.Vector3( (90)/2, 15/2, 0 ),new THREE.Vector3( ((90)/2)+1, 6.8, 0 ));
        line42 = new THREE.Line( geometry, material );
        PIEaddElement(line42);
		 material = new THREE.MeshBasicMaterial({color: 0x5e0237});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( ((90)/2)+0.5, ((15+3.75)/2)+1, 0 ),new THREE.Vector3( (90)/2, (15+3.75)/2, 0 ),new THREE.Vector3( ((90)/2)+1, ((15+3.75)/2)-0.8, 0 ));
		line43 = new THREE.Line( geometry, material );
        PIEaddElement(line43);
		x1=22.5;
        y1=3.75;
  
        material = new THREE.MeshBasicMaterial({color: 0x044402});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(-30+1, 30, 0 ),new THREE.Vector3( -30, 30, 0 ),new THREE.Vector3( -30, 30-1, 0 ));
		line51 = new THREE.Line( geometry, material );
        PIEaddElement(line51);
		material = new THREE.LineDashedMaterial({color: 0x472202});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(-69, y1-0.5, 0 ),new THREE.Vector3( -70, y1, 0 ),new THREE.Vector3( -69, y1+0.5, 0 ));
        line52 = new THREE.Line( geometry, material );
        PIEaddElement(line52);
        material = new THREE.MeshBasicMaterial({color: 0x023644});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -70+0.5,(-1050/90)+1 , 0 ),new THREE.Vector3( -70,(-1050/90) , 0 ),new THREE.Vector3( -70+1,(-1050/90)-0.5 , 0 ));
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
        PIEsetAreaOfInterest(-110, -55, 110, 55);
        

}
function resetExperiment()
{
	
    PIEchangeInputSlider(objectx, ox);
    newx = 90;


        line41.traverse(  function ( child ) { child.visible = true; } );
        line42.traverse(  function ( child ) { child.visible = true; } );
        line43.traverse(  function ( child ) { child.visible = true; } );
        line51.traverse(  function ( child ) { child.visible = true; } );
        line52.traverse(  function ( child ) { child.visible = true; } );
        line53.traverse(  function ( child ) { child.visible = true; } );
        line13.traverse(  function ( child ) { child.visible = true; } );
        line14.traverse(  function ( child ) { child.visible = true; } );

        line11.position.x=newx;
        line12.position.x=newx;
        
        x1=30.0*newx/(newx+30.0);
        y1=450.0/(newx+30.0);
        
        line1.geometry.vertices[0].x=newx;
        line1.geometry.vertices[0].y=15;
        line1.geometry.vertices[1].x=0;
        line1.geometry.vertices[1].y=15;
        line1.geometry.verticesNeedUpdate=true;
        
         line2.geometry.vertices[0].x=0;
        line2.geometry.vertices[0].y=15;
        line2.geometry.vertices[1].x=-30;
        line2.geometry.vertices[1].y=30;
        line2.geometry.verticesNeedUpdate=true;
        
        line3.geometry.vertices[0].x=newx;
        line3.geometry.vertices[0].y=15;
        line3.geometry.vertices[1].x=-70;
        line3.geometry.vertices[1].y=-1050/newx;
        line3.geometry.verticesNeedUpdate=true;
        
        line4.geometry.vertices[0].x=newx;
        line4.geometry.vertices[0].y=15;
        line4.geometry.vertices[1].x=0;
        line4.geometry.vertices[1].y=y1;
        line4.geometry.verticesNeedUpdate=true;

        line5.geometry.vertices[0].x=0;
        line5.geometry.vertices[0].y=y1;
        line5.geometry.vertices[1].x=-70;
        line5.geometry.vertices[1].y=y1;
        line5.geometry.verticesNeedUpdate=true;
        
        
        
        geometry = new THREE.BoxGeometry( 1,Math.abs(y1),0);
        line13.geometry=geometry;
         line13.position.set(x1,(y1)/2.0,0);

            line14.position.set(x1,y1+0.25,0);


        line21.geometry.vertices[0].x=0;
        line21.geometry.vertices[0].y=15;
        line21.geometry.vertices[1].x=30;
        line21.geometry.vertices[1].y=0;
        line21.geometry.verticesNeedUpdate=true;

        line22.geometry.vertices[0].x=0;
        line22.geometry.vertices[0].y=y1;
        line22.geometry.vertices[1].x=x1;
        line22.geometry.vertices[1].y=y1;
        line22.geometry.verticesNeedUpdate=true;
        
        line23.geometry.vertices[0].x=0;
        line23.geometry.vertices[0].y=y1;
        line23.geometry.vertices[1].x=-30;
        line23.geometry.vertices[1].y=0;
        line23.geometry.verticesNeedUpdate=true;

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

        line43.geometry.vertices[0].x=((newx)/2)+0.5;
        line43.geometry.vertices[0].y=(15+y1)/2+1;
        line43.geometry.vertices[1].x=(newx)/2;
        line43.geometry.vertices[1].y=(15+y1)/2;
        line43.geometry.vertices[2].x=((newx)/2)+1;
        line43.geometry.vertices[2].y=(15+y1)/2-0.8;
        line43.geometry.verticesNeedUpdate=true;

        line52.geometry.vertices[0].x=-69;
        line52.geometry.vertices[0].y=y1-0.5;
        line52.geometry.vertices[1].x=-70;
        line52.geometry.vertices[1].y=y1;
        line52.geometry.vertices[2].x=-69;
        line52.geometry.vertices[2].y=y1+0.5;
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
        
        line3.geometry.vertices[1].x=newx;
        line3.geometry.vertices[1].y=15;
        line3.geometry.verticesNeedUpdate=true;
        
        line4.geometry.vertices[1].x=newx;
        line4.geometry.vertices[1].y=15;
        line4.geometry.verticesNeedUpdate=true;

        line5.geometry.vertices[1].x=0;
        line5.geometry.vertices[1].y=y1;
        line5.geometry.verticesNeedUpdate=true;

        line21.geometry.vertices[1].x=0;
        line21.geometry.vertices[1].y=15;
        line21.geometry.verticesNeedUpdate=true;

        line22.geometry.vertices[1].x=0;
        line22.geometry.vertices[1].y=y1;
        line22.geometry.verticesNeedUpdate=true;
        
        line23.geometry.vertices[1].x=0;
        line23.geometry.vertices[1].y=y1;
        line23.geometry.verticesNeedUpdate=true;

        line41.traverse(  function ( child ) { child.visible = false; } );
		line42.traverse(  function ( child ) { child.visible = false; } );
	    line43.traverse(  function ( child ) { child.visible = false; } );
	    line51.traverse(  function ( child ) { child.visible = false; } );
		line52.traverse(  function ( child ) { child.visible = false; } );
	    line53.traverse(  function ( child ) { child.visible = false; } );
	    line13.traverse(  function ( child ) { child.visible = false; } );
        line14.traverse(  function ( child ) { child.visible = false; } );
        i=0;
	    
		i++;
    }
    

   
        if(line1.geometry.vertices[1].x>=0 )
        {
        
        
        line1.geometry.vertices[1].x-= 0.5*(speed/30);
         line1.geometry.verticesNeedUpdate = true;
        
        }
        else if(line2.geometry.vertices[1].x>=-30)
        {
        line41.traverse(  function ( child ) { child.visible = true; } );
        line42.traverse(  function ( child ) { child.visible = true; } );
        line43.traverse(  function ( child ) { child.visible = true; } );
        
        
        line2.geometry.vertices[1].x-= 0.5*(speed/30);
        line2.geometry.vertices[1].y= (30-line2.geometry.vertices[1].x)/2;
         line2.geometry.verticesNeedUpdate = true;
        
        }
        
        if(line3.geometry.vertices[1].x>= -70)
        {
        
        
        line3.geometry.vertices[1].x-= 0.5*(speed/30);
        line3.geometry.vertices[1].y=15*line3.geometry.vertices[1].x/newx;
         line3.geometry.verticesNeedUpdate = true;

        }

        if(line4.geometry.vertices[1].x>=0 )
        {
        
        
        line4.geometry.vertices[1].x-= 0.5*(speed/30);
        line4.geometry.vertices[1].y= 15*(line4.geometry.vertices[1].x+30)/(newx+30);
        line4.geometry.verticesNeedUpdate = true;
        
        }
        else if(line23.geometry.vertices[1].x>=-30)
            {
                line23.geometry.vertices[1].x-=0.5*(speed/30);
                line23.geometry.vertices[1].y=y1*(line23.geometry.vertices[1].x+30)/30;
                line23.geometry.verticesNeedUpdate = true;

            }
        else if(line5.geometry.vertices[1].x>=-70)
        {
        
        
        line5.geometry.vertices[1].x-= 0.5*(speed/30);
         line5.geometry.verticesNeedUpdate = true;

        
        }
        else
        {

            
            if(line22.geometry.vertices[1].x<=x1)
            {
                line51.traverse(  function ( child ) { child.visible = true; } );
        line52.traverse(  function ( child ) { child.visible = true; } );
        line53.traverse(  function ( child ) { child.visible = true; } );
        
                line22.geometry.vertices[1].x+=0.5*(speed/30);
                line22.geometry.verticesNeedUpdate = true;
            }
            if(line21.geometry.vertices[1].x<=30)
            {
                line21.geometry.vertices[1].x+=0.5*(speed/30);
                line21.geometry.vertices[1].y=(30-line21.geometry.vertices[1].x)/2;
                line21.geometry.verticesNeedUpdate = true;
            }
            else
            {
                line13.traverse(  function ( child ) { child.visible = true; } );
                line14.traverse(  function ( child ) { child.visible = true; } );
                
            i=0;
         PIEstopAnimation();
        }
        

    }
   
    PIEchangeDisplayText(objectx,newx );
        PIEchangeDisplayText(imagex,x1 );
        PIEchangeDisplayText(imageh, Math.abs(y1));
    
   
    

}
 
    else
    {
    	flag=1;
    }
     //PIEchangeDisplayText(imagex,-40-newx);
}


