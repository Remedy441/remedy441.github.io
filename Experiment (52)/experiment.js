var c1,c4,rad1,text1,x,y,linem,geometry,h1=8,tablek2,tablek3,myFloor2,mesh,mesh1,cylinder,cylinder1,cylinder2,cylinder3,table,material,dir,origin,x1,line1,line,arrow1,newx,sourcePos,targetPos,direction,arrow,arrow2,x2,y1,y2,x3,y3,x4,x5,a,b,k1,length,hex,c2,c3,c11,c12,c13,rad2=20,c23,line11,line12,line13,line14,line2,line33,line441,line442,line4,line21,line22,line23,line24,line41,line42,line43,line44,line51,line52,line54,line53,line61,line62,line64,line63,rad=40;
var s1=-Math.sqrt(40*40-15*15),s2=2*(-Math.sqrt(rad*rad-15*15))+20;
var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Virtual images at a concave mirror Help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows the formation of virtual image at concave mirror by candle and how it is affected with change in object distance</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to distance slider.</p>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>OBJECT DISTANCE - drag/drop.</li>";
    helpContent = helpContent + "<li>SCREEN DISTANCE - drag/drop.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>You also have an additional text input to control the Object distance.</p>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the moving candle shows change in image size in concave mirror obeying the laws of physics.</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play button on the top line</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animaion by uing the speed control buttons</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Virtual images at a concave mirror concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows the formation of virtual image at concave mirror by candle and how it is affected with change in object distance</p>";
    infoContent = infoContent + "<h3>Concave Mirror</h3>";
    infoContent = infoContent + "<p> A concave mirror was described as a portion of a sphere that had been sliced away. If the inside of the sphere is silvered such that it can reflect light, then the mirror is said to be concave.</p>";
    infoContent = infoContent + "<p>The mirror has a pole (P) where mirror and principal axis intersect.</p>";
    infoContent = infoContent + "<p> The center of that original sphere is known as the center of curvature (C) and the line that passes from the mirror's surface through the sphere's center is known as the principal axis.</p>";
    infoContent = infoContent + "<p>The mirror has a focal point (F) that is located along the principal axis, midway between the mirror's surface and the center of curvature.</p>";
    infoContent = infoContent + "<p>A concave mirror is sometimes referred to as a converging mirror due to the fact that light rays are converging to a point after reflecting off the mirror.</p>";
    infoContent = infoContent + "<h3>Image Formation when candle is near to mirror:</h3>";
    infoContent = infoContent + "<p>Image formed is a virtual image,an upright image,enlarged in size.</p>";
    infoContent = infoContent + "<p>As the object distance is decreased,  the image size is decreases.</p>";
    
    PIEupdateInfo(infoContent);
}


var angle;
function newradd(newValuex,newValuey)
{
    newx = 90-newValuex;
    
       
        
        //cylinder.position.x=newx;
        if(newValuex<90 && newValuex>-115)
        {

        cylinder1.scale.y=1.1+(newx/416.67);

        cylinder1.scale.x=1.1+(newx/416.67);
        mesh1.scale.y=1.6+(newx/416.67);
        mesh1.scale.x=1.6+(newx/416.67);
        cylinder1.traverse(  function ( child ) { child.visible = true; } );
        mesh1.traverse(  function ( child ) { child.visible = true; } );
        
        }
        else
        {
        	cylinder1.traverse(  function ( child ) { child.visible = false; } );
        mesh1.traverse(  function ( child ) { child.visible = false; } );
        
        }
        //cylinder1.position.y=-5+(cylinder1.scale.y*5.0/2.0)+1;
        //cylinder1.position.x=90-15*Math.cos(newValue);
        //cylinder1.position.y=25-28*Math.sin(newValue);
         //mesh.position.x=newx+50;
        //cylinder1.rotation.x=(newValue);
        
        //mesh1.position.y=-5+(cylinder1.scale.y*5.0)-2;
        //mesh1.scale.y=1+4-(newValue/25);
       
        
   i=0;     
    PIErender();
    
    //PIEstartAnimation();
}
var angle,h;
function newradd1(newValuex,newValuey)
{
    //newx = 50-newValue;
    
       //angle=(Math.PI/2)-newValue*Math.PI/70;
        
        //cylinder.position.y=10+newValue;
        //cylinder1.position.x=90-5*Math.cos(angle);

     if(screen.position.x<=cylinder.position.x+5)
    {
    	cylinder1.traverse(  function ( child ) { child.visible = true; } );
        mesh1.traverse(  function ( child ) { child.visible = true; } );
        
    }
    else
    {
    	cylinder1.traverse(  function ( child ) { child.visible = false; } );
        mesh1.traverse(  function ( child ) { child.visible = false; } );
    }


         h=cylinder1.scale.y*30;
         h1=mesh1.scale.y*8;


        if(newValuey<52+(h) && newValuey>3 && newValuex<101 && newValuex>-110)
        {
        cylinder1.position.y=newValuey+h/2-13;
        mesh1.position.y=cylinder1.position.y+h/2.0+h1/2.0-5;
        cylinder1.traverse(  function ( child ) { child.visible = true; } );
        mesh1.traverse(  function ( child ) { child.visible = true; } );
        
        }

        else
        {
            cylinder1.traverse(  function ( child ) { child.visible = false; } );
        mesh1.traverse(  function ( child ) { child.visible = false; } );
        
        }

    
        //cylinder1.rotation.x=(angle);
    
   i=0;     
    PIErender();
    
    //PIEstartAnimation();
}
var myBallX,myBallY,myBallZ,leftB=60,rightB,topB=80,bottomB=-5;
function candlerange(element,newpos)
{
    myBallX = newpos.x;

    //if (newpos.x > (93) ) { myBallX = (93) }
    //else if (newpos.x < (-140) ) { myBallX= (-140) }
    
    if (newpos.x > (93) && newpos.x<110 && newpos.y < (69)) { myBallX = (93) }
    else if (newpos.x > (93) &&  newpos.x<110 && newpos.y < (69)) { myBallX = (110) }
    
    myBallY = newpos.y;
    
    //if (newpos.y < (5)) { myBallY = ( 5); }
    //else if (newpos.x > (55) && newpos.x<127 && newpos.y < (73)) { myBallY = (74) }
    	 if (newpos.y < (5)&& newpos.x>-125 && newpos.x<125) { myBallY = ( 5); }
    

    
    myBallZ = newpos.z;

    cylinder.position.set(myBallX, myBallY, myBallZ);
    mesh.position.x=myBallX;
    mesh.position.y= myBallY+15;
    mesh.position.z= myBallZ;
    newradd(myBallX,myBallY);
    newradd1(myBallX,myBallY);
}
var screenx,screeny,screenz;
function screenrange(element,newpos)
{
    screenx = newpos.x;

    if (newpos.x > (93) ) { screenx = (93) }
    else if (newpos.x < (-110) ) { screenx = (-110) }
    
    screeny = newpos.y;
    
    if (newpos.y < (20)) { screeny = ( 20); }
    else if (newpos.y > (20) ) { screeny = (20) }
    
    //else if (newpos.x > (55) && newpos.x<127 && newpos.y < (73)) { myBallY = (74) }
    if(screenx>=cylinder.position.x+5)
    {
    	cylinder1.traverse(  function ( child ) { child.visible = false; } );
        mesh1.traverse(  function ( child ) { child.visible = false; } );
        
    }
    else
    {
    	cylinder1.traverse(  function ( child ) { child.visible = true; } );
        mesh1.traverse(  function ( child ) { child.visible = true; } );
    }
    screenz = newpos.z;

    screen.position.set(screenx,screeny,screenz);
    i=0;
    
}
var xi=-100;
var xmin=-100;
var xmax=50;
var fold=0.01;
var imagex='OBJECT X';
var imagey='OBJECT Y';

var oh=0;
var ih=70;


        function loadExperimentElements()
        {
        	initialiseInfo();
            initialiseHelp();
            PIEsetExperimentTitle("VIRTUAL IMAGES AT A CONCAVE MIRROR");
            PIEsetDeveloperName("Hemanth Katari");
            PIEhideControlElement();
            document.title = "VIRTUAL IMAGES AT A CONCAVE MIRROR";
        //PIEaddInputSlider(imagex,xi,newrad,xmin,xmax,fold);
        //PIEaddInputSlider(imagey,oh,newrad1,oh,ih,fold);
        
        PIEaddDisplayText(imagex,xi );
    	
        

        
         geometry = new THREE.BoxGeometry( 500,500,0);
         material = new THREE.MeshBasicMaterial( {color: 0xFCEDB2} );
        myFloor1  = new THREE.Mesh( geometry, material );
         myFloor1.position.set(0,3,0);
            myFloor1.receiveShadow = true;
         PIEaddElement(myFloor1);

          geometry = new THREE.BoxGeometry( 50,50,0);
         material = new THREE.MeshBasicMaterial( {color: 0xFCEDB2} );
        myFloor2  = new THREE.Mesh( geometry, material );
         myFloor2.position.set(110,77.7,-45);
         myFloor2.rotation.z=0.125*Math.PI;
           // myFloor2.receiveShadow = true;
         PIEaddElement(myFloor2);

          geometry = new THREE.BoxGeometry( 19.5,5,5);
         material = new THREE.MeshLambertMaterial( {color: 0x006400,side:THREE.FrontSide} );
        tablek2  = new THREE.Mesh( geometry, material );
         tablek2.position.set(115,-3.5,-35);
         tablek2.rotation.z=-0.3*Math.PI;
         tablek2.rotation.y=0.2*Math.PI;
            //tablek.receiveShadow = true;
        // PIEaddElement(tablek2);

         geometry = new THREE.BoxGeometry( 31.3,5,3);
         material = new THREE.MeshLambertMaterial( {color: 0x006400,side:THREE.FrontSide} );
        tablek3  = new THREE.Mesh( geometry, material );
         tablek3.position.set(58,0,-20);
         tablek3.rotation.z=0.2*Math.PI;
          tablek3.rotation.y=0.3*Math.PI;
         
            //tablek.receiveShadow = true;
         //PIEaddElement(tablek3);
        
         geometry = new THREE.BoxGeometry( 10,50,5);
         material = new THREE.MeshLambertMaterial( {color: 0x663300,side:THREE.FrontSide} );
        table1  = new THREE.Mesh( geometry, material );
         table1.position.set(100,-35,-10);
            table1.receiveShadow = true;
         PIEaddElement(table1);
         geometry = new THREE.BoxGeometry( 10,50,5);
         material = new THREE.MeshLambertMaterial( {color: 0x663300,side:THREE.FrontSide} );
        table2  = new THREE.Mesh( geometry, material );
         table2.position.set(110,-45,-30);
         //table2.rotation.x=-0.1*Math.PI;
         
            table2.receiveShadow = true;
         PIEaddElement(table2);
         geometry = new THREE.BoxGeometry( 10,50,5);
         material = new THREE.MeshLambertMaterial( {color: 0x663300,side:THREE.FrontSide} );
        table3  = new THREE.Mesh( geometry, material );
        table3.position.set(-100,-35,-10);
            table3.receiveShadow = true;
         PIEaddElement(table3);
         geometry = new THREE.BoxGeometry( 10,50,5);
         material = new THREE.MeshLambertMaterial( {color: 0x663300,side:THREE.FrontSide} );
        table4  = new THREE.Mesh( geometry, material );
         table4.position.set(-110,-45,-30);
            table4.receiveShadow = true;
         PIEaddElement(table4);
 


 x =0; y = 0;

                var fishShape = new THREE.Shape();

                fishShape.moveTo(x,y);
                fishShape.quadraticCurveTo(x - 0.5, y +4, x , y +8);
                //fishShape.quadraticCurveTo(x + 100, y - 10, x + 115, y - 40);
                //fishShape.quadraticCurveTo(x + 115, y, x + 115, y + 40);
                //fishShape.quadraticCurveTo(x + 100, y + 10, x + 90, y + 10);
                fishShape.quadraticCurveTo(x + 0.5, y + 4, x, y);


var extrudeSettings = { amount: 0, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };

geometry = new THREE.ExtrudeGeometry( fishShape, extrudeSettings );

 mesh1 = new THREE.Mesh( geometry, new THREE.LineBasicMaterial({color:0xf62817}) );
 mesh1.position.x=104;
 mesh1.position.y=4.4+27; 
mesh1.position.z=-36;
mesh1.scale.y=1.6+(90/416.67);;
mesh1.scale.x=1.6+(90/416.67);;
mesh1.rotation.y=0.5*Math.PI;



                PIEaddElement( mesh1 );
      

       x =0; y = 0;

                var fishShape = new THREE.Shape();

                fishShape.moveTo(x,y);
                fishShape.quadraticCurveTo(x - 0.5, y +4, x , y +8);
                //fishShape.quadraticCurveTo(x + 100, y - 10, x + 115, y - 40);
                //fishShape.quadraticCurveTo(x + 115, y, x + 115, y + 40);
                //fishShape.quadraticCurveTo(x + 100, y + 10, x + 90, y + 10);
                fishShape.quadraticCurveTo(x + 0.5, y + 4, x, y);


var extrudeSettings = { amount: 0, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };

geometry = new THREE.ExtrudeGeometry( fishShape, extrudeSettings );

 mesh = new THREE.Mesh( geometry, new THREE.LineBasicMaterial({color:0xf62817}) );
mesh.position.z=-46;
mesh.position.x=0;
mesh.position.y=20;
 mesh.scale.y=1.5;
 //mesh.rotation.x=-0.1*Math.PI;
       //mesh.rotation.x=Math.PI/2;
        PIEaddElement( mesh );
        
      
       
        geometry = new THREE.CircleGeometry( 29, 50);

        material = new THREE.LineBasicMaterial( { color: 0xc0c0c0, side: THREE.DoubleSide } );
         c1 = new THREE.Mesh( geometry, material );
         
        c1.position.set(105,20, -35);
        c1.rotation.y=0.5*Math.PI;
        //c1.rotation.z=0.1*Math.PI;
        
        PIEaddElement(c1);

        geometry = new THREE.SphereGeometry( 40, 50);

        material = new THREE.LineBasicMaterial( { color: 0x00ff00, side: THREE.DoubleSide,transparent:true,opacity:0.3 } );
         c3 = new THREE.Mesh( geometry, material );
         
        c3.position.set(90,35, -35);
        c3.rotation.y=0.5*Math.PI;
        
        //PIEaddElement(c3);


        geometry = new THREE.RingGeometry( 27,28.7, 50);

        material = new THREE.MeshBasicMaterial( { color: 0x008000, side: THREE.DoubleSide, } );
         c2 = new THREE.Mesh( geometry, material );
         c2.rotation.y=0.5*Math.PI;
        
        c2.position.set(102,19.5, -40);
        PIEaddElement(c2);

        var l33material = new THREE.LineDashedMaterial({color: 0xff0000});
        var l33geometry = new THREE.Geometry();
        l33geometry.vertices.push(new THREE.Vector3( -150, 25,-30 ),new THREE.Vector3( 150, 25,-30 ));
        var line33 = new THREE.Line( l33geometry, l33material );
        //PIEaddElement( line33 );


        

          geometry = new THREE.CylinderGeometry( 3, 3, 30, 32);
         material = new THREE.MeshPhongMaterial( {color: 0x006400} );
        cylinder = new THREE.Mesh( geometry, material );
        cylinder.position.set(0,5,-46);
        //cylinder.rotation.x=-0.1*Math.PI;
          PIEaddElement( cylinder );
          PIEdragElement(cylinder);
        //PIEdragElement(mesh);
        PIEsetDrag(cylinder, candlerange)
        
        geometry = new THREE.BoxGeometry( 8, 30, 0 );
         material = new THREE.MeshBasicMaterial( {color: 0x006400} );
        cylinder1 = new THREE.Mesh( geometry, material );
        
        cylinder1.position.set(104,12,-36);
        cylinder1.rotation.y=0.5*Math.PI;
        cylinder1.scale.x=1.1+(90/416.67);;
        cylinder1.scale.y=1.1+(90/416.67);;
      PIEaddElement( cylinder1 );
      mesh1.position.y=12+15+7;

      geometry = new THREE.CylinderGeometry( 25, 25, 15, 55 ,6,true,0,2*Math.PI);
         material = new THREE.MeshLambertMaterial( {color: 0x006400,side:THREE.DoubleSide} );
        cylinder2 = new THREE.Mesh( geometry, material );
        
        cylinder2.position.set(90,27,-37);
        cylinder2.rotation.x=0.5*Math.PI;
        cylinder2.rotation.z=-0.3*Math.PI;
        //PIEaddElement( cylinder2 );

    geometry = new THREE.CylinderGeometry( 29, 29, 3.7, 55 ,1,true);
         material = new THREE.MeshPhongMaterial( {color: 0x006400,side:THREE.DoubleSide} );
        cylinder3 = new THREE.Mesh( geometry, material );
        
        cylinder3.position.set(105,20,-37);
        cylinder3.rotation.x=0.5*Math.PI;
        cylinder3.rotation.z=-0.5*Math.PI
    PIEaddElement( cylinder3 );
       
      
      
 geometry = new THREE.BoxGeometry( 250,10,80);
         material = new THREE.MeshLambertMaterial( {color: 0x663300,side:THREE.FrontSide} );
        table  = new THREE.Mesh( geometry, material );
         table.position.set(0,-5,0);
         table.rotation.x=-0.1*Math.PI;
            //table.receiveShadow = true;
         PIEaddElement(table);

          geometry = new THREE.BoxGeometry( 1,65,25);
         material = new THREE.MeshLambertMaterial( {color: 0xc9ced6,side:THREE.FrontSide} );
        screen  = new THREE.Mesh( geometry, material );
         screen.position.set(-110,20,-20);
         screen.rotation.y=0.2*Math.PI;
         //screen.rotation.x=-0.1*Math.PI;
            table.receiveShadow = false;
         PIEaddElement(screen);
         PIEdragElement(screen);
        PIEsetDrag(screen, screenrange)

 

        PIEresize();
        //resetExperiment();
        PIEsetAreaOfInterest(-80, -80, 80, 80);
        

}
function resetExperiment()
{
	newx=90
    	cylinder1.scale.y=1.1+(newx/416.67);

        cylinder1.scale.x=1.1+(newx/416.67);
        mesh1.scale.y=1.6+(newx/416.67);
        mesh1.scale.x=1.6+(newx/416.67);
        cylinder1.traverse(  function ( child ) { child.visible = true; } );
        mesh1.traverse(  function ( child ) { child.visible = true; } );
        cylinder.position.x=0;
        cylinder.position.y=5;
        mesh.position.x=0;
        mesh.position.y=20;
        
        cylinder1.position.x=104;
        cylinder1.position.y=12;
        mesh1.position.x=104;
        mesh1.position.y=34;
        
        screen.position.x=-110;
        //newx = 90-newValuex;
        //cylinder1.scale.y=1+4-(newx/56.75);

        //cylinder1.scale.x=1+4-(newx/42);
        //mesh1.scale.y=1+4-(newx/42);
        i=0;

}

var i=0,m1,m2,m3,m4,p,cap,j,flag=0,speed=20;
function updateExperimentElements(t, dt)
{
	//PIEslowdownAnimation();
	//PIEspeedupAnimation();
    if(flag!=0)
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

	if(i==0)
    {
    	
          newx=190;
          newValuex=-100;
          newValuey=5;
    	cylinder1.scale.y=1.1+(newx/416.67);

        cylinder1.scale.x=1.1+(newx/416.67);
        mesh1.scale.y=1.6+(newx/416.67);
        mesh1.scale.x=1.6+(newx/416.67);
        cylinder1.traverse(  function ( child ) { child.visible = true; } );
        mesh1.traverse(  function ( child ) { child.visible = true; } );
        cylinder.position.x=0;
        cylinder.position.y=5;
        mesh.position.x=0;
        mesh.position.y=20;
        
        cylinder1.position.x=104;
        cylinder1.position.y=12;
        mesh1.position.x=104;
        mesh1.position.y=34;
        

		i++;
    }
    

    boundaryT = dt / 1000.0;

     
    if(newValuex<=93 )
    {
        newValuex+=0.5*speed/50;
        cylinder.position.x=newValuex;
        mesh.position.x=newValuex;
        newx = 90-newValuex;
        cylinder1.scale.y=1.1+(newx/416.67);

        cylinder1.scale.x=1.1+(newx/416.67);
        mesh1.scale.y=1.6+(newx/416.67);
        mesh1.scale.x=1.6+(newx/416.67);
         h=cylinder1.scale.y*30;
         h1=mesh1.scale.y*8;
        cylinder1.position.y=newValuey+h/2-13;
        mesh1.position.y=cylinder1.position.y+h/2.0+h1/2.0-5;
        
        //cylinder1.position.y=newValuey;
        //mesh1.position.y=newValuey+5;
        
        
        
    }
    
   else
    {
    	
        i=0;
        PIEstopAnimation();
    }

    	PIEchangeDisplayText(imagex,94-newValuex);
    }
    else
    {
        flag=1;
    }
}


