var c1,c4,rad1=45,text1,linem,ckgeometry,arrowHelper,newx1=-80,ct1,ct2,ct3,line71,line72,line73,geometry,material,dir,origin,x1,line1,line,arrow1,newx=-80,sourcePos,targetPos,direction,arrow,arrow2,x2,y1,y2,x3,y3,x4,x5,a,b,c,d,x6,y6,x7,y7,x8,y8,k1,k2,length,hex,c2,c3,c11,c12,c13,c14,rad2=20,c23,line11,line12,line13,line14,line2,line33,line441,line442,line3,line4,line21,line22,line23,line24,line41,line42,line43,line44,line51,line52,line54,line53,line61,line62,line64,line63,rad=45;
var s1=-Math.sqrt(45*45-15*15),s2=2*(-Math.sqrt(45*45-15*15))+22.5,cc1,cc2,e;
var helpContent;
var myBallX,myBallY,myBallZ,topB=0,myBallRadius=0.5,leftB=-30,rightB=30,bottomB=0;

function myBallDrag(element, newpos)
{
    myBallX = newpos.x;
    if (newpos.x  > -50) { myBallX =-50  }
    else if (newpos.x < -110) { myBallX = (-110) }
    myBallY = newpos.y;
    if (newpos.y < 0) { myBallY = 0; }
    else if (newpos.y > 0) { myBallY = 0; }
    myBallZ = newpos.z;
    PIEchangeInputSlider(imagex,-myBallX-50);
        
    line11.position.set(myBallX, myBallY+7.5, myBallZ);
    line12.position.set(myBallX, myBallY+15.1, myBallZ);
    newdis1(myBallX);

}

function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Tracing rays at a convex mirror Help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows the tracing of rays from erect object at convex mirror and how they are affected with change in object distance and radius</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to distance slider.</p>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>MIRROR RADIUS - controls the radius of the Convex mirror.</li>";
    helpContent = helpContent + "<li>OBJECT DISTANCE - controls the distance between object and Convex mirror.</li>";
    helpContent = helpContent + "<li>Drag and drop can also be used to change Object distance.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>You also have an additional text input to control the Radius and Object distance.</p>";
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
    infoContent = infoContent + "<h2>Tracing rays at a convex mirror concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows the tracing of rays from erect object at convex mirror and how they are affected with change in object distance and radius</p>";
    infoContent = infoContent + "<h3>Convex Mirror</h3>";
    infoContent = infoContent + "<p> A convex mirror was described as a portion of a sphere that had been sliced away. If the outside of the sphere is silvered such that it can reflect light, then the mirror is said to be convex.</p>";
    infoContent = infoContent + "<p> The center of that original sphere is known as the center of curvature (C) and the line that passes from the mirror's surface through the sphere's center is known as the principal axis.</p>";
    infoContent = infoContent + "<p>The mirror has a focal point (F) that is located along the principal axis, midway between the mirror's surface and the center of curvature.</p>";
    infoContent = infoContent + "<p>Note that the center of curvature and the focal point are located on the side of the mirror opposite the object - behind the mirror.</p>";
    infoContent = infoContent + "<p>A convex mirror is sometimes referred to as a diverging mirror due to the fact that incident light originating from the same point and will reflect off the mirror surface and diverge.</p>";
    infoContent = infoContent + "<h3>Rules of Reflection</h3>";
    infoContent = infoContent + "<p>Any incident ray traveling parallel to the principal axis on the way to a convex mirror will reflect in such a manner that its extension will pass through the focal point.</p>";
    infoContent = infoContent + "<p>Any incident ray traveling towards a convex mirror such that its extension passes through the focal point will reflect and travel parallel to the principal axis.</p>";
    infoContent = infoContent + "<p>Any incident ray traveling towards center get reflected back in the same direction.</p>";
    infoContent = infoContent + "<p>Any incident ray traveling towards pole get reflected as Plane mirror Reflection</p>";
    
    PIEupdateInfo(infoContent);
}

function newrad(newValue)
{
    rad1 = newValue;
        
        line41.traverse(  function ( child ) { child.visible = true; } );
        line42.traverse(  function ( child ) { child.visible = true; } );
        line43.traverse(  function ( child ) { child.visible = true; } );
        line44.traverse(  function ( child ) { child.visible = true; } );
        line51.traverse(  function ( child ) { child.visible = true; } );
        line52.traverse(  function ( child ) { child.visible = true; } );
        line53.traverse(  function ( child ) { child.visible = true; } );
        line54.traverse(  function ( child ) { child.visible = true; } );
        
        c11.traverse(  function ( child ) { child.visible = true; } );
        c12.traverse(  function ( child ) { child.visible = true; } );
        c13.traverse(  function ( child ) { child.visible = true; } );
        c14.traverse(  function ( child ) { child.visible = true; } );

        ckgeometry = new THREE.RingGeometry(  rad1-1, rad1, 32 ,8,0.8* Math.PI,0.4*Math.PI);
        c1.geometry=ckgeometry;
        ckgeometry=new THREE.RingGeometry(  rad1-1.7, rad1-1, 32 ,8,0.8* Math.PI,0.4*Math.PI);
        c4.geometry=ckgeometry;
        
        c1.position.x+=(rad1-rad);
        c4.position.x+=(rad1-rad);
        c2.position.x=c1.position.x-(rad1/2.0);
        c3.position.x=c1.position.x;
        rad=rad1;
        //text9.style.left = (128-rad1)*4.9+'px';
        //text11.style.left = (128-(rad1/2.0))*4.9+'px';
        //newx = -80;
    	
        cc1=c1.position.x;
        cc2=c2.position.x;
        x1=newx;
        x2=cc2;
        y1=15.0;
        y2=0.0;
        a=(y2-y1)/(x2-x1);
        b=1+a*a;
        k1=cc1+(a*a*cc2);
        k2=Math.sqrt(k1*k1-b*(cc1*cc1+(a*a*cc2*cc2)-rad1*rad1))
		x3=(k1-k2)/b;
        y3=a*(x3-cc2);
       
        cc1=c1.position.x;
        x6=newx;
        y6=15.0;
        x7=cc1;
        y7=0.0;
        a=(y7-y6)/(x7-x6);
        b=1+a*a;
        k1=cc1+(a*a*cc1);
        k2=Math.sqrt(k1*k1-b*(cc1*cc1+(a*a*cc1*cc1)-rad1*rad1))
		x8=(k1-k2)/b;
        y8=a*(x3-cc1);
       


        c11.position.x=c1.position.x-Math.sqrt(rad1*rad1-15*15);
        c11.position.y=15;

        c12.position.x=x3;
        c12.position.y=y3;

        c13.position.x=x8;
        c13.position.y=y8;

		c14.position.x=-45;
        c14.position.y=0;

        ct1.position.x=c1.position.x;

        line71.geometry.vertices[0].x=c2.position.x;
        line71.geometry.vertices[1].x=c2.position.x;
        line71.geometry.vertices[2].x=c2.position.x-1;
        line71.geometry.verticesNeedUpdate=true;
        line72.geometry.vertices[0].x=c2.position.x;
        line72.geometry.vertices[1].x=c2.position.x-1;
        line72.geometry.verticesNeedUpdate=true;

        line1.geometry.vertices[0].x=newx;
        line1.geometry.vertices[0].y=15;
        line1.geometry.vertices[1].x=c1.position.x-Math.sqrt(rad1*rad1-15*15);
        line1.geometry.vertices[1].y=15;
        line1.geometry.verticesNeedUpdate=true;
        
		line2.geometry.vertices[0].x=newx;
        line2.geometry.vertices[0].y=15;
        line2.geometry.vertices[1].x=x3;
        line2.geometry.vertices[1].y=y3;
        line2.geometry.verticesNeedUpdate=true;

        line3.geometry.vertices[0].x=newx;
        line3.geometry.vertices[0].y=15;
        line3.geometry.vertices[1].x=x8;
        line3.geometry.vertices[1].y=y8;
        line3.geometry.verticesNeedUpdate=true;
        
		line4.geometry.vertices[0].x=newx;
        line4.geometry.vertices[0].y=15;
        line4.geometry.vertices[1].x=-45;
        line4.geometry.vertices[1].y=0;
        line4.geometry.verticesNeedUpdate=true;
        /*
		line11.geometry.vertices[0].x=newx;
        line11.geometry.vertices[0].y=0;
        line11.geometry.vertices[1].x=newx;
        line11.geometry.vertices[1].y=15;
        line11.geometry.verticesNeedUpdate=true;
        
        line12.geometry.vertices[0].x=newx+1;
        line12.geometry.vertices[0].y=13;
        line12.geometry.vertices[1].x=newx;
        line12.geometry.vertices[1].y=15;
        line12.geometry.vertices[2].x=newx-1;
        line12.geometry.vertices[2].y=13;
        line12.geometry.verticesNeedUpdate=true;
        */
        line21.geometry.vertices[0].x=c1.position.x-Math.sqrt(rad1*rad1-15*15);
        line21.geometry.vertices[0].y=15;
        line21.geometry.vertices[1].x=c2.position.x;
        line21.geometry.vertices[1].y=0;
        line21.geometry.verticesNeedUpdate=true;
        
        line22.geometry.vertices[0].x=x3;
        line22.geometry.vertices[0].y=y3;
        line22.geometry.vertices[1].x=c2.position.x;
        line22.geometry.vertices[1].y=0;
        line22.geometry.verticesNeedUpdate=true;
        
        line23.geometry.vertices[0].x=x8;
        line23.geometry.vertices[0].y=y8;
        line23.geometry.vertices[1].x=c1.position.x;
        line23.geometry.vertices[1].y=0;
        line23.geometry.verticesNeedUpdate=true;
        

        line61.geometry.vertices[0].x=c1.position.x-Math.sqrt(rad1*rad1-15*15);
        line61.geometry.vertices[0].y=15;
        line61.geometry.vertices[1].x=2*(c1.position.x-Math.sqrt(rad1*rad1-15*15))-c2.position.x;
        line61.geometry.vertices[1].y=2*15;
        line61.geometry.verticesNeedUpdate=true;
		

		line62.geometry.vertices[0].x=x3;
        line62.geometry.vertices[0].y=y3;
        line62.geometry.vertices[1].x=-70;
        line62.geometry.vertices[1].y=y3;
        line62.geometry.verticesNeedUpdate=true;
		
        
		
		line64.geometry.vertices[0].x=-45;
        line64.geometry.vertices[0].y=0;
        line64.geometry.vertices[1].x=newx;
        line64.geometry.vertices[1].y=-15;
        line64.geometry.verticesNeedUpdate=true;

        line41.geometry.vertices[0].x=((newx+x3)/2)-0.5;
        line41.geometry.vertices[0].y=((15+y3)/2)+0.7;
        line41.geometry.vertices[1].x=(newx+x3)/2;
        line41.geometry.vertices[1].y=(15+y3)/2;
        line41.geometry.vertices[2].x=((newx+x3)/2)-0.7;
        line41.geometry.vertices[2].y=((15+y3)/2)-0.3;
        line41.geometry.verticesNeedUpdate=true;

        line42.geometry.vertices[0].x=((newx+c1.position.x-Math.sqrt(rad1*rad1-15*15))/2)-0.5;
        line42.geometry.vertices[0].y=15.5;
        line42.geometry.vertices[1].x=(newx+c1.position.x-Math.sqrt(rad1*rad1-15*15))/2;
        line42.geometry.vertices[1].y=15;
        line42.geometry.vertices[2].x=((newx+c1.position.x-Math.sqrt(rad1*rad1-15*15))/2)-0.5;
        line42.geometry.vertices[2].y=14.5;
        line42.geometry.verticesNeedUpdate=true;

		line43.geometry.vertices[0].x=((newx+x8)/2)-0.5;
        line43.geometry.vertices[0].y=((15+y8)/2)+0.7;
        line43.geometry.vertices[1].x=(newx+x8)/2;
        line43.geometry.vertices[1].y=(15+y8)/2;
        line43.geometry.vertices[2].x=((newx+x8)/2)-0.7;
        line43.geometry.vertices[2].y=((15+y8)/2)-0.3;
        line43.geometry.verticesNeedUpdate=true;

        line44.geometry.vertices[0].x=((newx-45)/2.0)-0.8;
        line44.geometry.vertices[0].y=(15.0/2.0);
        line44.geometry.vertices[1].x=(newx-45)/2.0;
        line44.geometry.vertices[1].y=15.0/2.0;
        line44.geometry.vertices[2].x=((newx-45)/2.0);
        line44.geometry.vertices[2].y=(15.0/2.0)+0.9;
        line44.geometry.verticesNeedUpdate=true;

        line51.geometry.vertices[0].x=2*(c1.position.x-Math.sqrt(rad1*rad1-15*15))-c2.position.x+1;
        line51.geometry.vertices[0].y=2*15;
        line51.geometry.vertices[1].x=2*(c1.position.x-Math.sqrt(rad1*rad1-15*15))-c2.position.x;
        line51.geometry.vertices[1].y=2*15;
        line51.geometry.vertices[2].x=2*(c1.position.x-Math.sqrt(rad1*rad1-15*15))-c2.position.x;
        line51.geometry.vertices[2].y=2*15-1;
        line51.geometry.verticesNeedUpdate=true;

        line52.geometry.vertices[0].x=-69.5;
        line52.geometry.vertices[0].y=y3+0.5;
        line52.geometry.vertices[1].x=-70;
        line52.geometry.vertices[1].y=y3;
        line52.geometry.vertices[2].x=-69.5;
        line52.geometry.vertices[2].y=y3-0.5;
        line52.geometry.verticesNeedUpdate=true;

		line53.geometry.vertices[0].x=newx-0.2;
        line53.geometry.vertices[0].y=-15+0.7;
        line53.geometry.vertices[1].x=newx;
        line53.geometry.vertices[1].y=-15;
        line53.geometry.vertices[2].x=newx+0.7;
        line53.geometry.vertices[2].y=-15-0.3;
        line53.geometry.verticesNeedUpdate=true;

        line54.geometry.vertices[0].x=((newx+x8)/2)+0.5;
        line54.geometry.vertices[0].y=((15+y8)/2)-0.7;
        line54.geometry.vertices[1].x=(newx+x8)/2;
        line54.geometry.vertices[1].y=(15+y8)/2;
        line54.geometry.vertices[2].x=((newx+x8)/2)+0.7;
        line54.geometry.vertices[2].y=((15+y8)/2)+0.3;
        line54.geometry.verticesNeedUpdate=true;

        i=0;


        
    PIErender();
    //PIEstartAnimation();
}

function newdis(newValue)
{
    newx = -50-newValue;
    	line41.traverse(  function ( child ) { child.visible = true; } );
        line42.traverse(  function ( child ) { child.visible = true; } );
        line43.traverse(  function ( child ) { child.visible = true; } );
        line44.traverse(  function ( child ) { child.visible = true; } );
        line51.traverse(  function ( child ) { child.visible = true; } );
        line52.traverse(  function ( child ) { child.visible = true; } );
        line53.traverse(  function ( child ) { child.visible = true; } );
        line54.traverse(  function ( child ) { child.visible = true; } );
        
        c11.traverse(  function ( child ) { child.visible = true; } );
        c12.traverse(  function ( child ) { child.visible = true; } );
        c13.traverse(  function ( child ) { child.visible = true; } );
        c14.traverse(  function ( child ) { child.visible = true; } );

        cc1=c1.position.x;
        cc2=c2.position.x;
        x1=newx;
        x2=cc2;
        y1=15.0;
        y2=0.0;
        a=(y2-y1)/(x2-x1);
        b=1+a*a;
        k1=cc1+(a*a*cc2);
        k2=Math.sqrt(k1*k1-b*(cc1*cc1+(a*a*cc2*cc2)-rad1*rad1))
		x3=(k1-k2)/b;
        y3=a*(x3-cc2);
       
        cc1=c1.position.x;
        x6=newx;
        y6=15.0;
        x7=cc1;
        y7=0.0;
        a=(y7-y6)/(x7-x6);
        b=1+a*a;
        k1=cc1+(a*a*cc1);
        k2=Math.sqrt(k1*k1-b*(cc1*cc1+(a*a*cc1*cc1)-rad1*rad1))
		x8=(k1-k2)/b;
        y8=a*(x3-cc1);

        c11.position.x=c1.position.x-Math.sqrt(rad1*rad1-15*15);
        c11.position.y=15;

        c12.position.x=x3;
        c12.position.y=y3;

        c13.position.x=x8;
        c13.position.y=y8;

		c14.position.x=-45;
        c14.position.y=0;

        ct1.position.x=c1.position.x;
        
        line1.geometry.vertices[0].x=newx;
        line1.geometry.vertices[0].y=15;
        line1.geometry.vertices[1].x=c1.position.x-Math.sqrt(rad1*rad1-15*15);
        line1.geometry.vertices[1].y=15;
        line1.geometry.verticesNeedUpdate=true;
        
		line2.geometry.vertices[0].x=newx;
        line2.geometry.vertices[0].y=15;
        line2.geometry.vertices[1].x=x3;
        line2.geometry.vertices[1].y=y3;
        line2.geometry.verticesNeedUpdate=true;

        line3.geometry.vertices[0].x=newx;
        line3.geometry.vertices[0].y=15;
        line3.geometry.vertices[1].x=x8;
        line3.geometry.vertices[1].y=y8;
        line3.geometry.verticesNeedUpdate=true;
        
		line4.geometry.vertices[0].x=newx;
        line4.geometry.vertices[0].y=15;
        line4.geometry.vertices[1].x=-45;
        line4.geometry.vertices[1].y=0;
        line4.geometry.verticesNeedUpdate=true;
 
        line11.position.x=newx;
        line12.position.x=newx;

        line21.geometry.vertices[0].x=c1.position.x-Math.sqrt(rad1*rad1-15*15);
        line21.geometry.vertices[0].y=15;
        line21.geometry.vertices[1].x=c2.position.x;
        line21.geometry.vertices[1].y=0;
        line21.geometry.verticesNeedUpdate=true;
        
        line22.geometry.vertices[0].x=x3;
        line22.geometry.vertices[0].y=y3;
        line22.geometry.vertices[1].x=c2.position.x;
        line22.geometry.vertices[1].y=0;
        line22.geometry.verticesNeedUpdate=true;
        
        line23.geometry.vertices[0].x=x8;
        line23.geometry.vertices[0].y=y8;
        line23.geometry.vertices[1].x=c1.position.x;
        line23.geometry.vertices[1].y=0;
        line23.geometry.verticesNeedUpdate=true;
        

        line61.geometry.vertices[0].x=c1.position.x-Math.sqrt(rad1*rad1-15*15);
        line61.geometry.vertices[0].y=15;
        line61.geometry.vertices[1].x=2*(c1.position.x-Math.sqrt(rad1*rad1-15*15))-c2.position.x;
        line61.geometry.vertices[1].y=2*15;
        line61.geometry.verticesNeedUpdate=true;
		

		line62.geometry.vertices[0].x=x3;
        line62.geometry.vertices[0].y=y3;
        line62.geometry.vertices[1].x=-70;
        line62.geometry.vertices[1].y=y3;
        line62.geometry.verticesNeedUpdate=true;
		
        
		
		line64.geometry.vertices[0].x=-45;
        line64.geometry.vertices[0].y=0;
        line64.geometry.vertices[1].x=newx;
        line64.geometry.vertices[1].y=-15;
        line64.geometry.verticesNeedUpdate=true;

        line41.geometry.vertices[0].x=((newx+x3)/2)-0.5;
        line41.geometry.vertices[0].y=((15+y3)/2)+0.7;
        line41.geometry.vertices[1].x=(newx+x3)/2;
        line41.geometry.vertices[1].y=(15+y3)/2;
        line41.geometry.vertices[2].x=((newx+x3)/2)-0.7;
        line41.geometry.vertices[2].y=((15+y3)/2)-0.3;
        line41.geometry.verticesNeedUpdate=true;

        line42.geometry.vertices[0].x=((newx+c1.position.x-Math.sqrt(rad1*rad1-15*15))/2)-0.5;
        line42.geometry.vertices[0].y=15.5;
        line42.geometry.vertices[1].x=(newx+c1.position.x-Math.sqrt(rad1*rad1-15*15))/2;
        line42.geometry.vertices[1].y=15;
        line42.geometry.vertices[2].x=((newx+c1.position.x-Math.sqrt(rad1*rad1-15*15))/2)-0.5;
        line42.geometry.vertices[2].y=14.5;
        line42.geometry.verticesNeedUpdate=true;

		line43.geometry.vertices[0].x=((newx+x8)/2)-0.5;
        line43.geometry.vertices[0].y=((15+y8)/2)+0.7;
        line43.geometry.vertices[1].x=(newx+x8)/2;
        line43.geometry.vertices[1].y=(15+y8)/2;
        line43.geometry.vertices[2].x=((newx+x8)/2)-0.7;
        line43.geometry.vertices[2].y=((15+y8)/2)-0.3;
        line43.geometry.verticesNeedUpdate=true;

        line44.geometry.vertices[0].x=((newx-45)/2.0)-0.8;
        line44.geometry.vertices[0].y=(15.0/2.0);
        line44.geometry.vertices[1].x=(newx-45)/2.0;
        line44.geometry.vertices[1].y=15.0/2.0;
        line44.geometry.vertices[2].x=((newx-45)/2.0);
        line44.geometry.vertices[2].y=(15.0/2.0)+0.9;
        line44.geometry.verticesNeedUpdate=true;

        line51.geometry.vertices[0].x=2*(c1.position.x-Math.sqrt(rad1*rad1-15*15))-c2.position.x+1;
        line51.geometry.vertices[0].y=2*15;
        line51.geometry.vertices[1].x=2*(c1.position.x-Math.sqrt(rad1*rad1-15*15))-c2.position.x;
        line51.geometry.vertices[1].y=2*15;
        line51.geometry.vertices[2].x=2*(c1.position.x-Math.sqrt(rad1*rad1-15*15))-c2.position.x;
        line51.geometry.vertices[2].y=2*15-1;
        line51.geometry.verticesNeedUpdate=true;

        line52.geometry.vertices[0].x=-69.5;
        line52.geometry.vertices[0].y=y3+0.5;
        line52.geometry.vertices[1].x=-70;
        line52.geometry.vertices[1].y=y3;
        line52.geometry.vertices[2].x=-69.5;
        line52.geometry.vertices[2].y=y3-0.5;
        line52.geometry.verticesNeedUpdate=true;

		line53.geometry.vertices[0].x=newx-0.2;
        line53.geometry.vertices[0].y=-15+0.7;
        line53.geometry.vertices[1].x=newx;
        line53.geometry.vertices[1].y=-15;
        line53.geometry.vertices[2].x=newx+0.7;
        line53.geometry.vertices[2].y=-15-0.3;
        line53.geometry.verticesNeedUpdate=true;

        line54.geometry.vertices[0].x=((newx+x8)/2)+0.5;
        line54.geometry.vertices[0].y=((15+y8)/2)-0.7;
        line54.geometry.vertices[1].x=(newx+x8)/2;
        line54.geometry.vertices[1].y=(15+y8)/2;
        line54.geometry.vertices[2].x=((newx+x8)/2)+0.7;
        line54.geometry.vertices[2].y=((15+y8)/2)+0.3;
        line54.geometry.verticesNeedUpdate=true;



        
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
        line44.traverse(  function ( child ) { child.visible = true; } );
        line51.traverse(  function ( child ) { child.visible = true; } );
        line52.traverse(  function ( child ) { child.visible = true; } );
        line53.traverse(  function ( child ) { child.visible = true; } );
        line54.traverse(  function ( child ) { child.visible = true; } );
        
        c11.traverse(  function ( child ) { child.visible = true; } );
        c12.traverse(  function ( child ) { child.visible = true; } );
        c13.traverse(  function ( child ) { child.visible = true; } );
        c14.traverse(  function ( child ) { child.visible = true; } );
        
        cc1=c1.position.x;
        cc2=c2.position.x;
        x1=newx;
        x2=cc2;
        y1=15.0;
        y2=0.0;
        a=(y2-y1)/(x2-x1);
        b=1+a*a;
        k1=cc1+(a*a*cc2);
        k2=Math.sqrt(k1*k1-b*(cc1*cc1+(a*a*cc2*cc2)-rad1*rad1))
		x3=(k1-k2)/b;
        y3=a*(x3-cc2);
       
        cc1=c1.position.x;
        x6=newx;
        y6=15.0;
        x7=cc1;
        y7=0.0;
        a=(y7-y6)/(x7-x6);
        b=1+a*a;
        k1=cc1+(a*a*cc1);
        k2=Math.sqrt(k1*k1-b*(cc1*cc1+(a*a*cc1*cc1)-rad1*rad1))
		x8=(k1-k2)/b;
        y8=a*(x3-cc1);


        c11.position.x=c1.position.x-Math.sqrt(rad1*rad1-15*15);
        c11.position.y=15;

        c12.position.x=x3;
        c12.position.y=y3;

        c13.position.x=x8;
        c13.position.y=y8;

		c14.position.x=-45;
        c14.position.y=0;

        ct1.position.x=c1.position.x;

        line1.geometry.vertices[0].x=newx;
        line1.geometry.vertices[0].y=15;
        line1.geometry.vertices[1].x=c1.position.x-Math.sqrt(rad1*rad1-15*15);
        line1.geometry.vertices[1].y=15;
        line1.geometry.verticesNeedUpdate=true;
        
		line2.geometry.vertices[0].x=newx;
        line2.geometry.vertices[0].y=15;
        line2.geometry.vertices[1].x=x3;
        line2.geometry.vertices[1].y=y3;
        line2.geometry.verticesNeedUpdate=true;

        line3.geometry.vertices[0].x=newx;
        line3.geometry.vertices[0].y=15;
        line3.geometry.vertices[1].x=x8;
        line3.geometry.vertices[1].y=y8;
        line3.geometry.verticesNeedUpdate=true;
        
		line4.geometry.vertices[0].x=newx;
        line4.geometry.vertices[0].y=15;
        line4.geometry.vertices[1].x=-45;
        line4.geometry.vertices[1].y=0;
        line4.geometry.verticesNeedUpdate=true;
        /*
		line11.geometry.vertices[0].x=-80;
        line11.geometry.vertices[0].y=0;
        line11.geometry.vertices[1].x=-80;
        line11.geometry.vertices[1].y=15;
        line11.geometry.verticesNeedUpdate=true;
        
        line12.geometry.vertices[0].x=-80+1;
        line12.geometry.vertices[0].y=13;
        line12.geometry.vertices[1].x=-80;
        line12.geometry.vertices[1].y=15;
        line12.geometry.vertices[2].x=-80-1;
        line12.geometry.vertices[2].y=13;
        line12.geometry.verticesNeedUpdate=true;
        */
        line21.geometry.vertices[0].x=c1.position.x-Math.sqrt(rad1*rad1-15*15);
        line21.geometry.vertices[0].y=15;
        line21.geometry.vertices[1].x=c2.position.x;
        line21.geometry.vertices[1].y=0;
        line21.geometry.verticesNeedUpdate=true;
        
        line22.geometry.vertices[0].x=x3;
        line22.geometry.vertices[0].y=y3;
        line22.geometry.vertices[1].x=c2.position.x;
        line22.geometry.vertices[1].y=0;
        line22.geometry.verticesNeedUpdate=true;
        
        line23.geometry.vertices[0].x=x8;
        line23.geometry.vertices[0].y=y8;
        line23.geometry.vertices[1].x=c1.position.x;
        line23.geometry.vertices[1].y=0;
        line23.geometry.verticesNeedUpdate=true;
        

        line61.geometry.vertices[0].x=c1.position.x-Math.sqrt(rad1*rad1-15*15);
        line61.geometry.vertices[0].y=15;
        line61.geometry.vertices[1].x=2*(c1.position.x-Math.sqrt(rad1*rad1-15*15))-c2.position.x;
        line61.geometry.vertices[1].y=2*15;
        line61.geometry.verticesNeedUpdate=true;
		

		line62.geometry.vertices[0].x=x3;
        line62.geometry.vertices[0].y=y3;
        line62.geometry.vertices[1].x=-70;
        line62.geometry.vertices[1].y=y3;
        line62.geometry.verticesNeedUpdate=true;
		
        
		
		line64.geometry.vertices[0].x=-45;
        line64.geometry.vertices[0].y=0;
        line64.geometry.vertices[1].x=newx;
        line64.geometry.vertices[1].y=-15;
        line64.geometry.verticesNeedUpdate=true;

        line41.geometry.vertices[0].x=((newx+x3)/2)-0.5;
        line41.geometry.vertices[0].y=((15+y3)/2)+0.7;
        line41.geometry.vertices[1].x=(newx+x3)/2;
        line41.geometry.vertices[1].y=(15+y3)/2;
        line41.geometry.vertices[2].x=((newx+x3)/2)-0.7;
        line41.geometry.vertices[2].y=((15+y3)/2)-0.3;
        line41.geometry.verticesNeedUpdate=true;

        line42.geometry.vertices[0].x=((newx+c1.position.x-Math.sqrt(rad1*rad1-15*15))/2)-0.5;
        line42.geometry.vertices[0].y=15.5;
        line42.geometry.vertices[1].x=(newx+c1.position.x-Math.sqrt(rad1*rad1-15*15))/2;
        line42.geometry.vertices[1].y=15;
        line42.geometry.vertices[2].x=((newx+c1.position.x-Math.sqrt(rad1*rad1-15*15))/2)-0.5;
        line42.geometry.vertices[2].y=14.5;
        line42.geometry.verticesNeedUpdate=true;

		line43.geometry.vertices[0].x=((newx+x8)/2)-0.5;
        line43.geometry.vertices[0].y=((15+y8)/2)+0.7;
        line43.geometry.vertices[1].x=(newx+x8)/2;
        line43.geometry.vertices[1].y=(15+y8)/2;
        line43.geometry.vertices[2].x=((newx+x8)/2)-0.7;
        line43.geometry.vertices[2].y=((15+y8)/2)-0.3;
        line43.geometry.verticesNeedUpdate=true;

        line44.geometry.vertices[0].x=((newx-45)/2.0)-0.8;
        line44.geometry.vertices[0].y=(15.0/2.0);
        line44.geometry.vertices[1].x=(newx-45)/2.0;
        line44.geometry.vertices[1].y=15.0/2.0;
        line44.geometry.vertices[2].x=((newx-45)/2.0);
        line44.geometry.vertices[2].y=(15.0/2.0)+0.9;
        line44.geometry.verticesNeedUpdate=true;

        line51.geometry.vertices[0].x=2*(c1.position.x-Math.sqrt(rad1*rad1-15*15))-c2.position.x+1;
        line51.geometry.vertices[0].y=2*15;
        line51.geometry.vertices[1].x=2*(c1.position.x-Math.sqrt(rad1*rad1-15*15))-c2.position.x;
        line51.geometry.vertices[1].y=2*15;
        line51.geometry.vertices[2].x=2*(c1.position.x-Math.sqrt(rad1*rad1-15*15))-c2.position.x;
        line51.geometry.vertices[2].y=2*15-1;
        line51.geometry.verticesNeedUpdate=true;

        line52.geometry.vertices[0].x=-69.5;
        line52.geometry.vertices[0].y=y3+0.5;
        line52.geometry.vertices[1].x=-70;
        line52.geometry.vertices[1].y=y3;
        line52.geometry.vertices[2].x=-69.5;
        line52.geometry.vertices[2].y=y3-0.5;
        line52.geometry.verticesNeedUpdate=true;

		line53.geometry.vertices[0].x=newx-0.2;
        line53.geometry.vertices[0].y=-15+0.7;
        line53.geometry.vertices[1].x=newx;
        line53.geometry.vertices[1].y=-15;
        line53.geometry.vertices[2].x=newx+0.7;
        line53.geometry.vertices[2].y=-15-0.3;
        line53.geometry.verticesNeedUpdate=true;

        line54.geometry.vertices[0].x=((newx+x8)/2)+0.5;
        line54.geometry.vertices[0].y=((15+y8)/2)-0.7;
        line54.geometry.vertices[1].x=(newx+x8)/2;
        line54.geometry.vertices[1].y=(15+y8)/2;
        line54.geometry.vertices[2].x=((newx+x8)/2)+0.7;
        line54.geometry.vertices[2].y=((15+y8)/2)+0.3;
        line54.geometry.verticesNeedUpdate=true;



        
   i=0;     
    PIErender();
    
    //PIEstartAnimation();
}
var xi=40;
var xmin=0;
var xmax=60;
var fold=1;
var imagex='OBJECT DISTANCE (cm)';
var objecth='OBJECT HEIGHT';
var imageh='IMAGE HEIGHT';
var oh=15.01;
var ih=0.0;
var ri=45;
var rmin=30;
var rmax=60;
var radius="RADIUS (cm)";


        function loadExperimentElements()
        {
        	initialiseInfo();
            initialiseHelp();
            PIEsetExperimentTitle("TRACING RAYS AT A CONVEX MIRROR");
            PIEsetDeveloperName("Hemanth Katari");
            PIEhideControlElement();
            document.title = "TRACING RAYS AT A CONVEX MIRROR";
        PIEaddInputSlider(radius,ri,newrad,rmin,rmax,fold);
        PIEaddInputSlider(imagex,xi,newdis,xmin,xmax,fold);
        
        //PIEaddDisplayText(imagex,xi );
    	//PIEaddDisplayText(objecth, oh);
    	//PIEaddDisplayText(imageh, ih);
    
        

        
         geometry = new THREE.BoxGeometry( 500,500,0);
         material = new THREE.MeshBasicMaterial( {color: 0xFCEDB2} );
        myFloor1  = new THREE.Mesh( geometry, material );
         myFloor1.position.set(0,3,0);
            myFloor1.receiveShadow = true;
         PIEaddElement(myFloor1);
 
       
        geometry = new THREE.RingGeometry(  44, 45, 32 ,8,0.8* Math.PI,0.4*Math.PI);
        material = new THREE.LineBasicMaterial( { color: 0x1e0987, side: THREE.DoubleSide } );
         c1 = new THREE.Mesh( geometry, material );
        c1.position.set(0,0, 0.0);
        PIEaddElement(c1);

        geometry = new THREE.RingGeometry(  43.3, 44, 32 ,8,0.8* Math.PI,0.4*Math.PI);
        material = new THREE.MeshToonMaterial( { color: 0xc8cdf7, side: THREE.DoubleSide } );
         c4 = new THREE.Mesh( geometry, material );
        c4.position.set(0,0, 0.0);
        PIEaddElement(c4);
        
        geometry = new THREE.SphereGeometry( 0.6, 20,20);
        material = new THREE.LineBasicMaterial( { color: 0x03c42a, side: THREE.DoubleSide } );
         c2 = new THREE.Mesh( geometry, material );
        c2.position.x = -22.5;
        c2.position.y = 0;
        c2.position.z = 0;
        PIEaddElement(c2);

        cc1=0.0;
        cc2=-22.5;
        x1=-80.0;
        x2=cc2;
        y1=15.0;
        y2=0.0;
        a=(y2-y1)/(x2-x1);
        b=1+a*a;
        k1=cc1+(a*a*cc2);
        k2=Math.sqrt(k1*k1-b*(cc1*cc1+(a*a*cc2*cc2)-45*45))
		x3=(k1-k2)/b;
        y3=a*(x3-cc2);
       
        cc1=0.0;
        x6=-80.0;
        y6=15.0;
        x7=cc1;
        y7=0.0;
        c=(y7-y6)/(x7-x6);
        d=1+c*c;
        e=Math.sqrt(cc1*cc1-d*(cc1*cc1-45*45));
        x8=(cc1-e)/d;
        y8=(c)*x8;


        geometry = new THREE.SphereGeometry( 0.6, 20,20);
        material = new THREE.LineBasicMaterial( { color: 0x03c42a, side: THREE.DoubleSide } );
         c3 = new THREE.Mesh( geometry, material );
        c3.position.x = 0;
        c3.position.y = 0;
        c3.position.z = 0;
        PIEaddElement(c3);

        geometry = new THREE.SphereGeometry( 0.3, 20,20);
        material = new THREE.LineBasicMaterial( { color: 0x044402, side: THREE.DoubleSide } );
        c11 = new THREE.Mesh( geometry, material );
        c11.position.x = -Math.sqrt(rad*rad-15*15);
        c11.position.y = 15;
        c11.position.z = 0;
        PIEaddElement(c11);
        geometry = new THREE.SphereGeometry( 0.3, 20,20);

        material = new THREE.LineBasicMaterial( { color: 0x023644, side: THREE.DoubleSide } );
         c12 = new THREE.Mesh( geometry, material );
        c12.position.x = x3;
        c12.position.y = y3;
        c12.position.z = 0;
        PIEaddElement(c12);

        geometry = new THREE.SphereGeometry( 0.3, 20,20);
        material = new THREE.LineBasicMaterial( { color: 0x5e0237, side: THREE.DoubleSide } );
        c13 = new THREE.Mesh( geometry, material );
        c13.position.x = x8;
        c13.position.y = y8;
        c13.position.z = 0;
        PIEaddElement(c13);
        
        geometry = new THREE.SphereGeometry( 0.3, 20,20);
		material = new THREE.LineBasicMaterial( { color: 0x472202, side: THREE.DoubleSide } );
         c14 = new THREE.Mesh( geometry, material );
        c14.position.x = -45;
        c14.position.y = 0;
        c14.position.z = 0;
        PIEaddElement(c14);

        geometry = new THREE.RingGeometry(  0.8, 1, 32 ,8,-0.5* Math.PI,Math.PI);
        material = new THREE.LineBasicMaterial( { color: 0x000000, side: THREE.DoubleSide } );
         ct1 = new THREE.Mesh( geometry, material );
        ct1.position.set(0,-4, 0.0);
        PIEaddElement(ct1);
        
        geometry = new THREE.RingGeometry(  0.7, 0.8, 32 ,8,0.5* Math.PI,Math.PI);
        material = new THREE.LineBasicMaterial( { color: 0x000000, side: THREE.DoubleSide } );
         ct3 = new THREE.Mesh( geometry, material );
        ct3.position.set(-46,-3.5, 0.0);
        PIEaddElement(ct3);
        

        geometry = new THREE.BoxGeometry( 1,15,0);
         material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
        line11  = new THREE.Mesh( geometry, material );
         line11.position.set(-80,7.5,0);
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
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 0.1,
    bevelSegments: 1
};

geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
 line12 = new THREE.Mesh( geometry, material ) ;
        //material = new THREE.MeshBasicMaterial({color: 0xff0000,linewidth:2});
        //geometry = new THREE.Geometry();
        //geometry.vertices.push(new THREE.Vector3( -1, 13 ,0),new THREE.Vector3( 0, 15, 0 ),new THREE.Vector3( 1, 13, 0 ));
        //line12 = new THREE.Line( geometry, material );
        //line12.position.x=-80;
line12.position.set(-80,15.1,0);
        PIEaddElement(line12);
        
         PIEdragElement(line11);
         PIEsetDrag(line11, myBallDrag);
         
         material = new THREE.LineBasicMaterial({color: 0x1e0987});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -300, 0, 0 ),new THREE.Vector3( 300, 0, 0 ));
        line = new THREE.Line( geometry, material );
        PIEaddElement(line);
       
        material = new THREE.MeshBasicMaterial({color: 0x044402});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -80, 15, 0 ),new THREE.Vector3( -Math.sqrt(45*45-15*15), 15, 0 ));
		line1 = new THREE.Line( geometry, material );
        PIEaddElement(line1);
        
		material = new THREE.LineDashedMaterial({color: 0x023644});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -80, 15 ,0),new THREE.Vector3( x3, y3, 0 ));
        line2 = new THREE.Line( geometry, material );
        PIEaddElement(line2);

        material = new THREE.MeshBasicMaterial({color: 0x5e0237});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -80, 15, 0 ),new THREE.Vector3( x8, y8, 0 ));
		line3 = new THREE.Line( geometry, material );
        PIEaddElement(line3);


        
		material = new THREE.LineDashedMaterial({color: 0x472202});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -80, 15 ,0),new THREE.Vector3( -45, 0, 0 ));
        line4 = new THREE.Line( geometry, material );
        PIEaddElement(line4);
        /*
        material = new THREE.MeshBasicMaterial({color: 0xff0000,linewidth:3});
        geometry = new THREE.Geometry( );
        geometry.vertices.push(new THREE.Vector3( 0, 0, 0 ),new THREE.Vector3( 0, 15, 0 ));
		line11 = new THREE.Line( geometry, material );
		line11.position.x=-80;
        //line11.position.y=7.5;
        PIEaddElement(line11);
        */
        
        

        material = new THREE.LineDashedMaterial({color: 0x044402,dashSize: 1,gapSize: 0.3});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -Math.sqrt(45*45-15*15), 15, 0 ),new THREE.Vector3( -22.5,0,0 ));
        geometry.computeLineDistances();
        line21 = new THREE.Line( geometry, material );
        PIEaddElement(line21);
        material = new THREE.LineDashedMaterial({color: 0x023644,dashSize: 1,gapSize: 0.3});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( x3, y3,0 ),new THREE.Vector3(-22.5,0,0 ));
        geometry.computeLineDistances();
        line22 = new THREE.Line( geometry, material );
        PIEaddElement(line22);
        
        material = new THREE.LineDashedMaterial({color: 0x5e0237,dashSize: 1,gapSize: 0.3});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( x8, y8,0 ),new THREE.Vector3( 0,0,0 ));
        geometry.computeLineDistances();
        line23 = new THREE.Line( geometry, material );
        PIEaddElement(line23);
        
        material = new THREE.LineDashedMaterial({color: 0x044402});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -Math.sqrt(45*45-15*15), 15, 0 ),
            new THREE.Vector3( 2*(-Math.sqrt(45*45-15*15))+22.5,2*15,0 ));
        line61 = new THREE.Line( geometry, material );
        PIEaddElement(line61);
        
        material = new THREE.LineDashedMaterial({color: 0x023644});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( x3,y3,0 ),
            new THREE.Vector3( -70,y3,0) );
        line62 = new THREE.Line( geometry, material );
        PIEaddElement(line62);

       
        material = new THREE.LineDashedMaterial({color: 0x472202});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -45,0,0 ),
            new THREE.Vector3( -80,-15,0) );
        line64 = new THREE.Line( geometry, material );
        PIEaddElement(line64);


        
        material = new THREE.MeshBasicMaterial({color: 0x023644});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( ((-80+x3)/2)-0.5, ((15+y3)/2)+0.7, 0 ),new THREE.Vector3( (-80+x3)/2, (15+y3)/2, 0 ),new THREE.Vector3( ((-80+x3)/2)-0.7, ((15+y3)/2)-0.3, 0 ));
		line41 = new THREE.Line( geometry, material );
        PIEaddElement(line41);
		material = new THREE.LineDashedMaterial({color: 0x044402});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( ((-80+s1)/2)-0.5, 15.5, 0 ),new THREE.Vector3( (-80+s1)/2, 15, 0 ),new THREE.Vector3( ((-80+s1)/2)-0.5, 14.5, 0 ));
        line42 = new THREE.Line( geometry, material );
        PIEaddElement(line42);
		 material = new THREE.MeshBasicMaterial({color: 0x5e0237});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( ((-80+x8)/2)-0.5, ((15+y8)/2)+0.7, 0 ),new THREE.Vector3( (-80+x8)/2, (15+y8)/2, 0 ),new THREE.Vector3( ((-80+x8)/2)-0.7, ((15+y8)/2)-0.3, 0 ));
		line43 = new THREE.Line( geometry, material );
        PIEaddElement(line43);
		material = new THREE.LineDashedMaterial({color: 0x472202});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( ((-80.0-45.0)/2.0)-0.5,(15.0/2.0)+0.7,0),new THREE.Vector3( (-80.0-45.0)/2.0, 15.0/2.0, 0 ),new THREE.Vector3( ((-80.0-45.0)/2.0)-0.7, (15.0/2.0)-0.3, 0 ));
        line44 = new THREE.Line( geometry, material );
        PIEaddElement(line44);
        
        material = new THREE.MeshBasicMaterial({color: 0x044402});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 2*(c1.position.x-Math.sqrt(45*45-15*15))-c2.position.x+1,2*15, 0 ),new THREE.Vector3( 2*(c1.position.x-Math.sqrt(45*45-15*15))-c2.position.x, 2*15, 0 ),new THREE.Vector3( 2*(c1.position.x-Math.sqrt(45*45-15*15))-c2.position.x, 2*15-1, 0 ));
		line51 = new THREE.Line( geometry, material );
        PIEaddElement(line51);
		material = new THREE.LineDashedMaterial({color: 0x023644});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -69.5,y3+0.5,0),new THREE.Vector3( -70, y3, 0 ),new THREE.Vector3( -69.5, y3-0.5, 0 ));
        line52 = new THREE.Line( geometry, material );
        PIEaddElement(line52);
        material = new THREE.MeshBasicMaterial({color: 0x472202});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -80+0.3, -15+0.7, 0 ),new THREE.Vector3( -80, -15, 0 ),new THREE.Vector3( -80+0.7, -15-0.3, 0 ));
		line53 = new THREE.Line( geometry, material );
        PIEaddElement(line53);
		material = new THREE.LineDashedMaterial({color: 0x5e0237});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( ((-80+x8)/2)+0.5, ((15+y8)/2)-0.7, 0 ),new THREE.Vector3( (-80+x8)/2, (15+y8)/2, 0 ),new THREE.Vector3( ((-80+x8)/2)+0.7, ((15+y8)/2)+0.3, 0 ));
        line54 = new THREE.Line( geometry, material );
        PIEaddElement(line54);

        material = new THREE.MeshBasicMaterial({color: 0x000000,linewidth:2});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -22.5, -5, 0 ),new THREE.Vector3( -22.5, -3, 0 ),new THREE.Vector3( -23.5, -3, 0 ));
		line71 = new THREE.Line( geometry, material );
        PIEaddElement(line71);
        
		material = new THREE.LineDashedMaterial({color: 0x000000,linewidth:2});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -22.5, -4 ,0),new THREE.Vector3( -23.5, -4, 0 ));
        line72 = new THREE.Line( geometry, material );
        PIEaddElement(line72);

        material = new THREE.MeshBasicMaterial({color: 0x000000,linewidth:2});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -46, -5.5, 0 ),new THREE.Vector3( -46, -2.6, 0 ));
		line73 = new THREE.Line( geometry, material );
        PIEaddElement(line73);
		
        PIEresize();
        //resetExperiment();
        PIEsetAreaOfInterest(-70, -45, -10, 45);
        

}
function resetExperiment()
{
	
    PIEchangeInputSlider(imagex, xi);
    PIEchangeInputSlider(radius, ri);
    
        rad1 = 45;
    
        ckgeometry = new THREE.RingGeometry(  rad1-1, rad1, 32 ,8,0.8* Math.PI,0.4*Math.PI);
        c1.geometry=ckgeometry;
        ckgeometry=new THREE.RingGeometry(  rad1-1.7, rad1-1, 32 ,8,0.8* Math.PI,0.4*Math.PI);
        c4.geometry=ckgeometry;
        
        c1.position.x+=(rad1-rad);
        c4.position.x+=(rad1-rad);
        c2.position.x=c1.position.x-(rad1/2.0);
        c3.position.x=c1.position.x;
        rad=rad1;
        //text9.style.left = (128-rad1)*4.9+'px';
        //text11.style.left = (128-(rad1/2.0))*4.9+'px';
        newx = -80;
    	

    	ct1.position.x=0;

        line71.geometry.vertices[0].x=-22.5;
        line71.geometry.vertices[1].x=-22.5;
        line71.geometry.vertices[2].x=-22.5-1;
        line71.geometry.verticesNeedUpdate=true;
        line72.geometry.vertices[0].x=-22.5;
        line72.geometry.vertices[1].x=-22.5-1;
        line72.geometry.verticesNeedUpdate=true;

        cc1=c1.position.x;
        cc2=c2.position.x;
        x1=newx;
        x2=cc2;
        y1=15.0;
        y2=0.0;
        a=(y2-y1)/(x2-x1);
        b=1+a*a;
        k1=cc1+(a*a*cc2);
        k2=Math.sqrt(k1*k1-b*(cc1*cc1+(a*a*cc2*cc2)-rad1*rad1))
		x3=(k1-k2)/b;
        y3=a*(x3-cc2);
       
        cc1=c1.position.x;
        x6=newx;
        y6=15.0;
        x7=cc1;
        y7=0.0;
        a=(y7-y6)/(x7-x6);
        b=1+a*a;
        k1=cc1+(a*a*cc1);
        k2=Math.sqrt(k1*k1-b*(cc1*cc1+(a*a*cc1*cc1)-rad1*rad1))
		x8=(k1-k2)/b;
        y8=a*(x3-cc1);
       


        c11.position.x=c1.position.x-Math.sqrt(rad1*rad1-15*15);
        c11.position.y=15;

        c12.position.x=x3;
        c12.position.y=y3;

        c13.position.x=x8;
        c13.position.y=y8;

		c14.position.x=-45;
        c14.position.y=0;

        line1.geometry.vertices[0].x=newx;
        line1.geometry.vertices[0].y=15;
        line1.geometry.vertices[1].x=c1.position.x-Math.sqrt(rad1*rad1-15*15);
        line1.geometry.vertices[1].y=15;
        line1.geometry.verticesNeedUpdate=true;
        
		line2.geometry.vertices[0].x=newx;
        line2.geometry.vertices[0].y=15;
        line2.geometry.vertices[1].x=x3;
        line2.geometry.vertices[1].y=y3;
        line2.geometry.verticesNeedUpdate=true;

        line3.geometry.vertices[0].x=newx;
        line3.geometry.vertices[0].y=15;
        line3.geometry.vertices[1].x=x8;
        line3.geometry.vertices[1].y=y8;
        line3.geometry.verticesNeedUpdate=true;
        
		line4.geometry.vertices[0].x=newx;
        line4.geometry.vertices[0].y=15;
        line4.geometry.vertices[1].x=-45;
        line4.geometry.vertices[1].y=0;
        line4.geometry.verticesNeedUpdate=true;
        
		line11.position.x=-80;
		line12.position.x=-80;

        line21.geometry.vertices[0].x=c1.position.x-Math.sqrt(rad1*rad1-15*15);
        line21.geometry.vertices[0].y=15;
        line21.geometry.vertices[1].x=c2.position.x;
        line21.geometry.vertices[1].y=0;
        line21.geometry.verticesNeedUpdate=true;
        
        line22.geometry.vertices[0].x=x3;
        line22.geometry.vertices[0].y=y3;
        line22.geometry.vertices[1].x=c2.position.x;
        line22.geometry.vertices[1].y=0;
        line22.geometry.verticesNeedUpdate=true;
        
        line23.geometry.vertices[0].x=x8;
        line23.geometry.vertices[0].y=y8;
        line23.geometry.vertices[1].x=c1.position.x;
        line23.geometry.vertices[1].y=0;
        line23.geometry.verticesNeedUpdate=true;
        

        line61.geometry.vertices[0].x=c1.position.x-Math.sqrt(rad1*rad1-15*15);
        line61.geometry.vertices[0].y=15;
        line61.geometry.vertices[1].x=2*(c1.position.x-Math.sqrt(rad1*rad1-15*15))+22.5;
        line61.geometry.vertices[1].y=2*15;
        line61.geometry.verticesNeedUpdate=true;
		

		line62.geometry.vertices[0].x=x3;
        line62.geometry.vertices[0].y=y3;
        line62.geometry.vertices[1].x=-70;
        line62.geometry.vertices[1].y=y3;
        line62.geometry.verticesNeedUpdate=true;
		
        
		
		line64.geometry.vertices[0].x=-45;
        line64.geometry.vertices[0].y=0;
        line64.geometry.vertices[1].x=newx;
        line64.geometry.vertices[1].y=-15;
        line64.geometry.verticesNeedUpdate=true;

        line41.geometry.vertices[0].x=((newx+x3)/2)-0.5;
        line41.geometry.vertices[0].y=((15+y3)/2)+0.7;
        line41.geometry.vertices[1].x=(newx+x3)/2;
        line41.geometry.vertices[1].y=(15+y3)/2;
        line41.geometry.vertices[2].x=((newx+x3)/2)-0.7;
        line41.geometry.vertices[2].y=((15+y3)/2)-0.3;
        line41.geometry.verticesNeedUpdate=true;

        line42.geometry.vertices[0].x=((newx-Math.sqrt(rad1*rad1-15*15))/2)-0.5;
        line42.geometry.vertices[0].y=15.5;
        line42.geometry.vertices[1].x=(newx-Math.sqrt(rad1*rad1-15*15))/2;
        line42.geometry.vertices[1].y=15;
        line42.geometry.vertices[2].x=((newx-Math.sqrt(rad1*rad1-15*15))/2)-0.5;
        line42.geometry.vertices[2].y=14.5;
        line42.geometry.verticesNeedUpdate=true;

		line43.geometry.vertices[0].x=((newx+x8)/2)-0.5;
        line43.geometry.vertices[0].y=((15+y8)/2)+0.7;
        line43.geometry.vertices[1].x=(newx+x8)/2;
        line43.geometry.vertices[1].y=(15+y8)/2;
        line43.geometry.vertices[2].x=((newx+x8)/2)-0.7;
        line43.geometry.vertices[2].y=((15+y8)/2)-0.3;
        line43.geometry.verticesNeedUpdate=true;

        line44.geometry.vertices[0].x=((newx-rad1)/2.0)-0.5;
        line44.geometry.vertices[0].y=(15.0/2.0)+0.7;
        line44.geometry.vertices[1].x=(newx-rad1)/2.0;
        line44.geometry.vertices[1].y=15.0/2.0;
        line44.geometry.vertices[2].x=((newx-rad1)/2.0)-0.7;
        line44.geometry.vertices[2].y=(15.0/2.0)-0.3;
        line44.geometry.verticesNeedUpdate=true;

        line51.geometry.vertices[0].x=2*(c1.position.x-Math.sqrt(rad1*rad1-15*15))+22.5+1;
        line51.geometry.vertices[0].y=2*15;
        line51.geometry.vertices[1].x=2*(c1.position.x-Math.sqrt(rad1*rad1-15*15))+22.5;
        line51.geometry.vertices[1].y=2*15;
        line51.geometry.vertices[2].x=2*(c1.position.x-Math.sqrt(rad1*rad1-15*15))+22.5;
        line51.geometry.vertices[2].y=2*15-1;
        line51.geometry.verticesNeedUpdate=true;

        line52.geometry.vertices[0].x=-69.5;
        line52.geometry.vertices[0].y=y3+0.5;
        line52.geometry.vertices[1].x=-70;
        line52.geometry.vertices[1].y=y3;
        line52.geometry.vertices[2].x=-69.5;
        line52.geometry.vertices[2].y=y3-0.5;
        line52.geometry.verticesNeedUpdate=true;

		line53.geometry.vertices[0].x=newx+0.3;
        line53.geometry.vertices[0].y=-15+0.7;
        line53.geometry.vertices[1].x=newx;
        line53.geometry.vertices[1].y=-15;
        line53.geometry.vertices[2].x=newx+0.7;
        line53.geometry.vertices[2].y=-15-0.3;
        line53.geometry.verticesNeedUpdate=true;

        line54.geometry.vertices[0].x=((newx+x8)/2)+0.5;
        line54.geometry.vertices[0].y=((15+y8)/2)-0.7;
        line54.geometry.vertices[1].x=(newx+x8)/2;
        line54.geometry.vertices[1].y=(15+y8)/2;
        line54.geometry.vertices[2].x=((newx+x8)/2)+0.7;
        line54.geometry.vertices[2].y=((15+y8)/2)+0.3;
        line54.geometry.verticesNeedUpdate=true;
        i=0;
        line41.traverse(  function ( child ) { child.visible = true; } );
		line42.traverse(  function ( child ) { child.visible = true; } );
	    line43.traverse(  function ( child ) { child.visible = true; } );
	    line44.traverse(  function ( child ) { child.visible = true; } );
	    line51.traverse(  function ( child ) { child.visible = true; } );
		line52.traverse(  function ( child ) { child.visible = true; } );
	    line53.traverse(  function ( child ) { child.visible = true; } );
	    line54.traverse(  function ( child ) { child.visible = true; } );
	    
	    c11.traverse(  function ( child ) { child.visible = true; } );
		c12.traverse(  function ( child ) { child.visible = true; } );
		c13.traverse(  function ( child ) { child.visible = true; } );
		c14.traverse(  function ( child ) { child.visible = true; } );
	    

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
        
		line2.geometry.vertices[1].x=newx;
        line2.geometry.vertices[1].y=15;
        line2.geometry.verticesNeedUpdate=true;

        line3.geometry.vertices[1].x=newx;
        line3.geometry.vertices[1].y=15;
        line3.geometry.verticesNeedUpdate=true;
        
		line4.geometry.vertices[1].x=newx;
        line4.geometry.vertices[1].y=15;
        line4.geometry.verticesNeedUpdate=true;
        
		line21.geometry.vertices[1].x=c1.position.x-Math.sqrt(rad1*rad1-15*15);
        line21.geometry.vertices[1].y=15;
        line21.geometry.verticesNeedUpdate=true;
        
        line22.geometry.vertices[1].x=x3;
        line22.geometry.vertices[1].y=y3;
        line22.geometry.verticesNeedUpdate=true;
        
        line23.geometry.vertices[1].x=x8;
        line23.geometry.vertices[1].y=y8;
        line23.geometry.verticesNeedUpdate=true;
        
		line61.geometry.vertices[1].x=c1.position.x-Math.sqrt(rad1*rad1-15*15);
        line61.geometry.vertices[1].y=15;
        line61.geometry.verticesNeedUpdate=true;
		
		line62.geometry.vertices[1].x=x3;
        line62.geometry.vertices[1].y=y3;
        line62.geometry.verticesNeedUpdate=true;
		
		line64.geometry.vertices[1].x=-45;
        line64.geometry.vertices[1].y=0;
        line64.geometry.verticesNeedUpdate=true;

        
        line41.traverse(  function ( child ) { child.visible = false; } );
		line42.traverse(  function ( child ) { child.visible = false; } );
	    line43.traverse(  function ( child ) { child.visible = false; } );
	    line44.traverse(  function ( child ) { child.visible = false; } );
	    line51.traverse(  function ( child ) { child.visible = false; } );
		line52.traverse(  function ( child ) { child.visible = false; } );
	    line53.traverse(  function ( child ) { child.visible = false; } );
	    line54.traverse(  function ( child ) { child.visible = false; } );
	    
	    c11.traverse(  function ( child ) { child.visible = false; } );
		c12.traverse(  function ( child ) { child.visible = false; } );
		c13.traverse(  function ( child ) { child.visible = false; } );
		c14.traverse(  function ( child ) { child.visible = false; } );
		
		i++;
    }
    

    boundaryT = dt / 1000.0;
     
     if(line1.geometry.vertices[1].x<=c1.position.x-Math.sqrt(rad1*rad1-15*15) )
    {
        
        
        line1.geometry.vertices[1].x+= 0.5*(speed/30);
       line1.geometry.verticesNeedUpdate = true;
        
    }
    else if(line21.geometry.vertices[1].x<=c2.position.x )
    {
    	line42.traverse(  function ( child ) { child.visible = true; } );
		c11.traverse(  function ( child ) { child.visible = true; } );
    	line21.geometry.vertices[1].x+= 0.5*(speed/30);
    	line21.geometry.vertices[1].y= 15.0*(line21.geometry.vertices[1].x-c2.position.x)/(c1.position.x-Math.sqrt(rad1*rad1-15.0*15.0)-c2.position.x);
        line21.geometry.verticesNeedUpdate = true;
    }
    else if(line61.geometry.vertices[1].x>=2*(c1.position.x-Math.sqrt(rad1*rad1-15*15))-c2.position.x )
    {
    	
    	line61.geometry.vertices[1].x-= 0.5*(speed/30);
    	line61.geometry.vertices[1].y=15.0*(line61.geometry.vertices[1].x-c2.position.x)/(c1.position.x-Math.sqrt(rad1*rad1-15.0*15.0)-c2.position.x) ;
        line61.geometry.verticesNeedUpdate = true;
    }
    else
    {
  
    if(line2.geometry.vertices[1].x<=x3 )
        {
        line51.traverse(  function ( child ) { child.visible = true; } );
		line2.geometry.vertices[1].x+= 0.5*(speed/30);
        line2.geometry.vertices[1].y=y3*(line2.geometry.vertices[1].x-c2.position.x)/(x3-c2.position.x) ;
        line2.geometry.verticesNeedUpdate = true;
    }
    else if(line22.geometry.vertices[1].x<=c2.position.x )
    {
    	line41.traverse(  function ( child ) { child.visible = true; } );
	    c12.traverse(  function ( child ) { child.visible = true; } );
    	line22.geometry.vertices[1].x+= 0.5*(speed/30);
    	line22.geometry.vertices[1].y=y3*(line22.geometry.vertices[1].x-c2.position.x)/(x3-c2.position.x);
    	line22.geometry.verticesNeedUpdate = true;
    }
    else if(line62.geometry.vertices[1].x>=-70 )
    {
    	line62.geometry.vertices[1].x-= 0.5*(speed/30);
    	line62.geometry.verticesNeedUpdate = true;
    }
    else
    {
    if(line3.geometry.vertices[1].x<=x8 )
    {
        line52.traverse(  function ( child ) { child.visible = true; } );
        line3.geometry.vertices[1].x+= 0.5*(speed/30);
        line3.geometry.vertices[1].y= y8*(line3.geometry.vertices[1].x-c1.position.x)/(x8-c1.position.x);
       line3.geometry.verticesNeedUpdate = true;
        
    }
    else if(line23.geometry.vertices[1].x<=c1.position.x )
    {
    	line43.traverse(  function ( child ) { child.visible = true; } );
	    c13.traverse(  function ( child ) { child.visible = true; } );

    	line23.geometry.vertices[1].x+= 0.5*(speed/30);
    	line23.geometry.vertices[1].y=y8*(line23.geometry.vertices[1].x-c1.position.x)/(x8-c1.position.x) ;
        line23.geometry.verticesNeedUpdate = true;
    }
    else
    {
    if(line4.geometry.vertices[1].x<=-45)
    {
    	line54.traverse(  function ( child ) { child.visible = true; } );
        line4.geometry.vertices[1].x+= 0.5*(speed/30);
        line4.geometry.vertices[1].y= 15*(line4.geometry.vertices[1].x+45)/(newx+45);
       	line4.geometry.verticesNeedUpdate = true;
        
    }
    
    else if(line64.geometry.vertices[1].x>=newx )
    {
    	line44.traverse(  function ( child ) { child.visible = true; } );
	    c14.traverse(  function ( child ) { child.visible = true; } );
    	line64.geometry.vertices[1].x-= 0.5*(speed/30);
    	line64.geometry.vertices[1].y= -15*(line64.geometry.vertices[1].x+45)/(newx+45);
        line64.geometry.verticesNeedUpdate = true;
    }
    else
    {
    	line53.traverse(  function ( child ) { child.visible = true; } );
    	i=0;
    	PIEstopAnimation();
    }

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


