var c1,c4,rad1=40,ra1=40,ra=40.0,text1,linem,ckgeometry,arrowHelper,newx1=-80,ct1,cp11,ct2,ct3,line71,line72,line73,geometry,material,dir,origin,x1,line1,line,arrow1,newx=-80,sourcePos,targetPos,direction,arrow,arrow2,x2,y1,y2,x3,y3,x4,x5,a,b,c,d,x6,y6,x7,y7,x8,y8,k1,k2,length,hex,c2,c3,c11,c12,c13,c14,rad2=20,c23,line11,line12,line13,line14,line2,line33,line441,line442,line3,line4,line21,line22,line23,line24,line41,line42,line43,line44,line51,line52,line54,line53,line61,line62,line64,line63,rad=40;
var s1=-Math.sqrt(40*40-20*20),s2=2*(-Math.sqrt(40*40-20*20))+22.5,cc1,cc2,e;
var helpContent;
var myBallX,myBallY,myBallZ,topB=0,myBallRadius=0.5,x6,leftB=-30,rightB=30,bottomB=0;



function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Comparison of image sizes at different mirrors Help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows the comparison of image sizes at plane, convex and conccave (different radii)</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to mirror selector and radius sliders.</p>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>MIRROR - use checkbox to select mirror </li>";
    helpContent = helpContent + "<li>CONCAVE MIRROR RADIUS - controls the radius of concave  mirror.</li>";
    helpContent = helpContent + "<li>CONVEX MIRROR RADIUS - controls the radius of convex  mirror.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>You also have an additional text input to control the Radius </p>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the moving incident rays get reflected at surface of mirrors obeying the laws of physics.</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play button on the top line</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animation by uing the speed control buttons</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Comparison of image sizes at different mirrors concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows the comparison of image sizes at plane, convex and conccave (different radii)</p>";
    infoContent = infoContent + "<h3>Plane Mirror</h3>";
    infoContent = infoContent + "<p>A plane mirror is a mirror with a flat (planar) reflective surface.</p>";
    infoContent = infoContent + "<h3>Reflection:</h3>";
    infoContent = infoContent + "<p> The angle of reflection equals the angle of incidence.</p>";
    infoContent = infoContent + "<p>Any incident ray traveling towards a convex mirror such that its extension passes through the focal point will reflect and travel parallel to the principal axis.</p>";
    infoContent = infoContent + "<p>Any incident ray traveling towards center get reflected back in the same direction.</p>";
    infoContent = infoContent + "<h3>Image characteritics:</h3>";
    infoContent = infoContent + "<p>Image is at same distance from mirror as the object</p>";
    infoContent = infoContent + "<p>Image size is same as the Object size</p>";
    infoContent = infoContent + "<p>Image orientation is same as the Object orientation</p>";
    
    infoContent = infoContent + "<h3>Concave Mirror</h3>";
    infoContent = infoContent + "<p> A concave mirror was described as a portion of a sphere that had been sliced away. If the inside of the sphere is silvered such that it can reflect light, then the mirror is said to be concave.</p>";
    infoContent = infoContent + "<p>The mirror has a pole (P) where mirror and principal axis intersect.</p>";
    infoContent = infoContent + "<p> The center of that original sphere is known as the center of curvature (C) and the line that passes from the mirror's surface through the sphere's center is known as the principal axis.</p>";
    infoContent = infoContent + "<p>The mirror has a focal point (F) that is located along the principal axis, midway between the mirror's surface and the center of curvature.</p>";
    infoContent = infoContent + "<p>A concave mirror is sometimes referred to as a converging mirror due to the fact that light rays are converging to a point after reflecting off the mirror.</p>";
    infoContent = infoContent + "<h3>Reflection:</h3>";
    infoContent = infoContent + "<p>Any incident ray traveling parallel to the principal axis on the way to the mirror will pass through the focal point upon reflection.</p>";
    infoContent = infoContent + "<p>Any incident ray traveling towards a concave mirror such that its extension passes through the focal point will reflect and travel parallel to the principal axis.</p>";
    infoContent = infoContent + "<h3>Image characteritics for distant object:</h3>";
    infoContent = infoContent + "<p>Image is formed between focus(F) and center of curvature(C)</p>";
    infoContent = infoContent + "<p>Image is diminished</p>";
    infoContent = infoContent + "<p>Image orientation is opposite to Object orientation</p>";
    

    infoContent = infoContent + "<h3>Convex Mirror</h3>";
    infoContent = infoContent + "<p> A convex mirror was described as a portion of a sphere that had been sliced away. If the outside of the sphere is silvered such that it can reflect light, then the mirror is said to be convex.</p>";
    infoContent = infoContent + "<p> The center of that original sphere is known as the center of curvature (C) and the line that passes from the mirror's surface through the sphere's center is known as the principal axis.</p>";
    infoContent = infoContent + "<p>The mirror has a focal point (F) that is located along the principal axis, midway between the mirror's surface and the center of curvature.</p>";
    infoContent = infoContent + "<p>Note that the center of curvature and the focal point are located on the side of the mirror opposite the object - behind the mirror.</p>";
    infoContent = infoContent + "<p>A convex mirror is sometimes referred to as a diverging mirror due to the fact that incident light originating from the same point and will reflect off the mirror surface and diverge.</p>";
    infoContent = infoContent + "<h3>Reflection:</h3>";
    infoContent = infoContent + "<p>Any incident ray traveling parallel to the principal axis on the way to a convex mirror will reflect in such a manner that its extension will pass through the focal point.</p>";
    infoContent = infoContent + "<p>Any incident ray traveling towards a convex mirror such that its extension passes through the focal point will reflect and travel parallel to the principal axis.</p>";
    infoContent = infoContent + "<h3>Image characteritics </h3>";
    infoContent = infoContent + "<p>Image is formed between focus(F) and pole(P) of mirror</p>";
    infoContent = infoContent + "<p>Image is diminished</p>";
    infoContent = infoContent + "<p>Image orientation is same as Object orientation</p>";
    
    PIEupdateInfo(infoContent);
}

function newrad1(newValue)
{
    
    rad1=newValue;
        
        ckgeometry = new THREE.RingGeometry(  rad1-1, rad1, 32 ,8,0.8* Math.PI,0.4*Math.PI);
        c1.geometry=ckgeometry;
        ckgeometry=new THREE.RingGeometry(  rad1-1.7, rad1-1, 32 ,8,0.8* Math.PI,0.4*Math.PI);
        c4.geometry=ckgeometry;
        
        c1.position.x+=(rad1-rad);
        c4.position.x+=(rad1-rad);
        c2.position.x=c1.position.x-(rad1/2.0);
        c3.position.x=c1.position.x;
        rad=rad1;
        
        cc1=c1.position.x;
        cc2=c2.position.x;
        x1=-100;
        x2=cc2;
        y1=20.0;
        y2=0.0;
        a=(y2-y1)/(x2-x1);
        b=1+a*a;
        k1=cc1+(a*a*cc2);
        k2=Math.sqrt(k1*k1-b*(cc1*cc1+(a*a*cc2*cc2)-rad1*rad1))
		x3=(k1-k2)/b;
        y3=a*(x3-cc2);
       
        x4=c2.position.x+(y3*(c1.position.x-Math.sqrt(rad1*rad1-20*20)-c2.position.x)/20);

        
        c11.position.x=c1.position.x-Math.sqrt(rad1*rad1-20*20);
        c11.position.y=20;

        c12.position.x=x3;
        c12.position.y=y3;

        ct1.position.x=c1.position.x;

        line71.geometry.vertices[0].x=c2.position.x;
        line71.geometry.vertices[1].x=c2.position.x;
        line71.geometry.vertices[2].x=c2.position.x-1;
        line71.geometry.verticesNeedUpdate=true;
        line72.geometry.vertices[0].x=c2.position.x;
        line72.geometry.vertices[1].x=c2.position.x-1;
        line72.geometry.verticesNeedUpdate=true;

        line1.geometry.vertices[0].x=-100;
        line1.geometry.vertices[0].y=20;
        line1.geometry.vertices[1].x=c1.position.x-Math.sqrt(rad1*rad1-20*20);
        line1.geometry.vertices[1].y=20;
        line1.geometry.verticesNeedUpdate=true;
        
		line2.geometry.vertices[0].x=-100;
        line2.geometry.vertices[0].y=20;
        line2.geometry.vertices[1].x=x3;
        line2.geometry.vertices[1].y=y3;
        line2.geometry.verticesNeedUpdate=true;

        line13.geometry.vertices[0].x=x4;
        line13.geometry.vertices[0].y=0;
        line13.geometry.vertices[1].x=x4;
        line13.geometry.vertices[1].y=y3;
        line13.geometry.verticesNeedUpdate=true;

        line14.position.set(x4,y3,0);

        line21.geometry.vertices[0].x=c1.position.x-Math.sqrt(rad1*rad1-20*20);
        line21.geometry.vertices[0].y=20;
        line21.geometry.vertices[1].x=c2.position.x;
        line21.geometry.vertices[1].y=0;
        line21.geometry.verticesNeedUpdate=true;
         
        line22.geometry.vertices[0].x=x3;
        line22.geometry.vertices[0].y=y3;
        line22.geometry.vertices[1].x=x3+30;
        line22.geometry.vertices[1].y=y3;
        line22.geometry.verticesNeedUpdate=true;
        
        
        line61.geometry.vertices[0].x=c1.position.x-Math.sqrt(rad1*rad1-20*20);
        line61.geometry.vertices[0].y=20;
        line61.geometry.vertices[1].x=2*(c1.position.x-Math.sqrt(rad1*rad1-20*20))-c2.position.x;
        line61.geometry.vertices[1].y=2*20;
        line61.geometry.verticesNeedUpdate=true;
		

		line62.geometry.vertices[0].x=x3;
        line62.geometry.vertices[0].y=y3;
        line62.geometry.vertices[1].x=-70;
        line62.geometry.vertices[1].y=y3;
        line62.geometry.verticesNeedUpdate=true;
		
    	
        line41.geometry.vertices[0].x=((-100+x3)/2)-0.5;
        line41.geometry.vertices[0].y=((20+y3)/2)+0.7;
        line41.geometry.vertices[1].x=(-100+x3)/2;
        line41.geometry.vertices[1].y=(20+y3)/2;
        line41.geometry.vertices[2].x=((-100+x3)/2)-0.7;
        line41.geometry.vertices[2].y=((20+y3)/2)-0.3;
        line41.geometry.verticesNeedUpdate=true;

        line42.geometry.vertices[0].x=((-100+c1.position.x-Math.sqrt(rad1*rad1-20*20))/2)-0.5;
        line42.geometry.vertices[0].y=19.5;
        line42.geometry.vertices[1].x=(-100+c1.position.x-Math.sqrt(rad1*rad1-20*20))/2;
        line42.geometry.vertices[1].y=20;
        line42.geometry.vertices[2].x=((-100+c1.position.x-Math.sqrt(rad1*rad1-20*20))/2)-0.5;
        line42.geometry.vertices[2].y=20.5;
        line42.geometry.verticesNeedUpdate=true;


        line51.geometry.vertices[0].x=2*(c1.position.x-Math.sqrt(rad1*rad1-20*20))-c2.position.x+1;
        line51.geometry.vertices[0].y=2*20;
        line51.geometry.vertices[1].x=2*(c1.position.x-Math.sqrt(rad1*rad1-20*20))-c2.position.x;
        line51.geometry.vertices[1].y=2*20;
        line51.geometry.vertices[2].x=2*(c1.position.x-Math.sqrt(rad1*rad1-20*20))-c2.position.x;
        line51.geometry.vertices[2].y=2*20-1;
        line51.geometry.verticesNeedUpdate=true;

        line52.geometry.vertices[0].x=-69.5;
        line52.geometry.vertices[0].y=y3+0.5;
        line52.geometry.vertices[1].x=-70;
        line52.geometry.vertices[1].y=y3;
        line52.geometry.vertices[2].x=-69.5;
        line52.geometry.vertices[2].y=y3-0.5;
        line52.geometry.verticesNeedUpdate=true;

        i=0;
        mirror=3;
        if(v1==true || v2==true)
        {
             
        }
        else
        {
            PIEstartAnimation();
        }
        
       
    PIErender();
    //PIEstartAnimation();
}
var ccc2,ccc1,ccc3,g,x5,y5,f1,f2;
function newrad2(newValue)
{
    ra1=newValue;
        
        ckgeometry = new THREE.RingGeometry(  ra1, ra1+1, 32 ,8,1.8* Math.PI,0.4*Math.PI);
        cb1.geometry=ckgeometry;
        ckgeometry=new THREE.RingGeometry(  ra1+1, ra1+1.6, 32 ,8,1.8* Math.PI,0.4*Math.PI);
        cb4.geometry=ckgeometry;
        
        cb1.position.x-=(ra1-ra);
        cb4.position.x-=(ra1-ra);
        cb2.position.x=cb1.position.x+(ra1/2.0);
        cb3.position.x=cb1.position.x;
        ra=ra1;
        
        ccc1=cb1.position.x;
        ccc2=ccc1+(ra/2.0);
        g=(20/(100+ccc2))*(20/(100+ccc2));
        ccc3=ccc1+ccc2*g;
        x5=(ccc3+Math.sqrt(ccc3*ccc3-(1+g)*(ccc1*ccc1+g*ccc2*ccc2-ra*ra)))/(1+g);
        y5=-20.0*(x5-ccc2)/(100.0+ccc2);
        x6=cb2.position.x+(y5*(cb1.position.x+Math.sqrt(ra1*ra1-20*20)-cb2.position.x)/20);
        
        cb11.position.x=cb1.position.x+Math.sqrt(ra1*ra1-20*20);
        cb11.position.y=20;

        cb12.position.x=x5;
        cb12.position.y=y5;

        ctb1.position.x=cb1.position.x;

        lineb71.geometry.vertices[0].x=cb2.position.x;
        lineb71.geometry.vertices[1].x=cb2.position.x;
        lineb71.geometry.vertices[2].x=cb2.position.x-1;
        lineb71.geometry.verticesNeedUpdate=true;
        lineb72.geometry.vertices[0].x=cb2.position.x;
        lineb72.geometry.vertices[1].x=cb2.position.x-1;
        lineb72.geometry.verticesNeedUpdate=true;

        lineb1.geometry.vertices[0].x=-100;
        lineb1.geometry.vertices[0].y=20;
        lineb1.geometry.vertices[1].x=cb1.position.x+Math.sqrt(ra1*ra1-20*20);
        lineb1.geometry.vertices[1].y=20;
        lineb1.geometry.verticesNeedUpdate=true;
        
        lineb2.geometry.vertices[0].x=-100;
        lineb2.geometry.vertices[0].y=20;
        lineb2.geometry.vertices[1].x=x5;
        lineb2.geometry.vertices[1].y=y5;
        lineb2.geometry.verticesNeedUpdate=true;

        line15.geometry.vertices[0].x=x6;
        line15.geometry.vertices[0].y=0;
        line15.geometry.vertices[1].x=x6;
        line15.geometry.vertices[1].y=y5;
        line15.geometry.verticesNeedUpdate=true;

        line16.position.set(x6,y5,0);


        lineb61.geometry.vertices[0].x=cb1.position.x+Math.sqrt(ra1*ra1-20*20);
        lineb61.geometry.vertices[0].y=20;
        lineb61.geometry.vertices[1].x=2*cb2.position.x-cb1.position.x-Math.sqrt(ra1*ra1-20*20);
        lineb61.geometry.vertices[1].y=-20;
        lineb61.geometry.verticesNeedUpdate=true;
        

        lineb62.geometry.vertices[0].x=x5;
        lineb62.geometry.vertices[0].y=y5;
        lineb62.geometry.vertices[1].x=x5-60;
        lineb62.geometry.vertices[1].y=y5;
        lineb62.geometry.verticesNeedUpdate=true;
        
        f1=cb1.position.x+Math.sqrt(ra1*ra1-20*20);
        f2=2*cb2.position.x-cb1.position.x-Math.sqrt(ra1*ra1-20*20);
        
        lineb41.geometry.vertices[0].x=((-100+f1)/2)-1;
        lineb41.geometry.vertices[0].y=21;
        lineb41.geometry.vertices[1].x=(-100+f1)/2;
        lineb41.geometry.vertices[1].y=20;
        lineb41.geometry.vertices[2].x=((-100+f1)/2)-1;
        lineb41.geometry.vertices[2].y=19;
        lineb41.geometry.verticesNeedUpdate=true;

        lineb42.geometry.vertices[0].x=((-100+x5)/2)-1;
        lineb42.geometry.vertices[0].y=(y5+20)/2-0.5;
        lineb42.geometry.vertices[1].x=((-100+x5)/2);
        lineb42.geometry.vertices[1].y=(y5+20)/2;
        lineb42.geometry.vertices[2].x=((-100+x5)/2)-1;
        lineb42.geometry.vertices[2].y=(y5+20)/2+1.5;
        lineb42.geometry.verticesNeedUpdate=true;


        lineb51.geometry.vertices[0].x=f2+1;
        lineb51.geometry.vertices[0].y=-20;
        lineb51.geometry.vertices[1].x=f2;
        lineb51.geometry.vertices[1].y=-20;
        lineb51.geometry.vertices[2].x=f2;
        lineb51.geometry.vertices[2].y=-19;
        lineb51.geometry.verticesNeedUpdate=true;

        lineb52.geometry.vertices[0].x=x5-60+1 ;
        lineb52.geometry.vertices[0].y=y5-1;
        lineb52.geometry.vertices[1].x=x5-60;
        lineb52.geometry.vertices[1].y=y5;
        lineb52.geometry.vertices[2].x=x5-60+1;
        lineb52.geometry.vertices[2].y=y5+1;
        lineb52.geometry.verticesNeedUpdate=true;

       

       mirror=2;

        i=0;

        if(v1==true || v3==true)
        {
             
        }
        else
        {
            PIEstartAnimation();
        }
        
        
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
var ri=40;
var rmin=40;
var rmax=70;
var radius="RADIUS CONCAVE(cm)";
var radius1="RADIUS CONVEX (cm)";
var label1="PLANE";
var value1=true;
var label2="CONCAVE";
var value2=false;
var label3="CONVEX";
var value3=false;
function planevar(value)
{
        plane1.traverse(  function ( child ) { child.visible = value; } );
        plane2.traverse(  function ( child ) { child.visible = value; } );
        linep1.traverse(  function ( child ) { child.visible = value; } );
        linep2.traverse(  function ( child ) { child.visible = value; } );
        linep11.traverse(  function ( child ) { child.visible = value; } );
        linep12.traverse(  function ( child ) { child.visible = value; } );
        linep21.traverse(  function ( child ) { child.visible = value; } );
        linep22.traverse(  function ( child ) { child.visible = value; } );
        linep61.traverse(  function ( child ) { child.visible = value; } );
        linep41.traverse(  function ( child ) { child.visible = value; } );
        linep42.traverse(  function ( child ) { child.visible = value; } );
        linep43.traverse(  function ( child ) { child.visible = value; } );
        linep44.traverse(  function ( child ) { child.visible = value; } );
}
function convexvar(value)
{
        c1.traverse(  function ( child ) { child.visible = value; } );
        c2.traverse(  function ( child ) { child.visible = value; } );
        c3.traverse(  function ( child ) { child.visible = value; } );
        c4.traverse(  function ( child ) { child.visible = value; } );
        ct1.traverse(  function ( child ) { child.visible = value; } );
        ct3.traverse(  function ( child ) { child.visible = value; } );
        c11.traverse(  function ( child ) { child.visible = value; } );
        c12.traverse(  function ( child ) { child.visible = value; } );
        line1.traverse(  function ( child ) { child.visible = value; } );
        line2.traverse(  function ( child ) { child.visible = value; } );
        line21.traverse(  function ( child ) { child.visible = value; } );
        line22.traverse(  function ( child ) { child.visible = value; } );
        line41.traverse(  function ( child ) { child.visible = value; } );
        line42.traverse(  function ( child ) { child.visible = value; } );
        line51.traverse(  function ( child ) { child.visible = value; } );
        line52.traverse(  function ( child ) { child.visible = value; } );
        line61.traverse(  function ( child ) { child.visible = value; } );
        line62.traverse(  function ( child ) { child.visible = value; } );
        line71.traverse(  function ( child ) { child.visible = value; } );
        line72.traverse(  function ( child ) { child.visible = value; } );
        line73.traverse(  function ( child ) { child.visible = value; } );
        line13.traverse(  function ( child ) { child.visible = value; } );
        line14.traverse(  function ( child ) { child.visible = value; } );
        
        
}
function concavevar(value)
{
        cb1.traverse(  function ( child ) { child.visible = value; } );
        cb2.traverse(  function ( child ) { child.visible = value; } );
        cb3.traverse(  function ( child ) { child.visible = value; } );
        cb4.traverse(  function ( child ) { child.visible = value; } );
        ctb1.traverse(  function ( child ) { child.visible = value; } );
        ctb3.traverse(  function ( child ) { child.visible = value; } );
        cb11.traverse(  function ( child ) { child.visible = value; } );
        cb12.traverse(  function ( child ) { child.visible = value; } );
        lineb1.traverse(  function ( child ) { child.visible = value; } );
        lineb2.traverse(  function ( child ) { child.visible = value; } );
        lineb41.traverse(  function ( child ) { child.visible = value; } );
        lineb42.traverse(  function ( child ) { child.visible = value; } );
        lineb51.traverse(  function ( child ) { child.visible = value; } );
        lineb52.traverse(  function ( child ) { child.visible = value; } );
        lineb61.traverse(  function ( child ) { child.visible = value; } );
        lineb62.traverse(  function ( child ) { child.visible = value; } );
        lineb71.traverse(  function ( child ) { child.visible = value; } );
        lineb72.traverse(  function ( child ) { child.visible = value; } );
        lineb73.traverse(  function ( child ) { child.visible = value; } );
        line15.traverse(  function ( child ) { child.visible = value; } );
        line16.traverse(  function ( child ) { child.visible = value; } );
}
function planem()
{
PIEchangeInputCheckbox(label1, true);
PIEchangeInputCheckbox(label2, false);
PIEchangeInputCheckbox(label3, false);
v1=true;
v2=false;
v3=false;
planevar(true);
convexvar(false);       
concavevar(false); 
i=0; 
mirror=1;
if(first!=0)
{
PIEstartAnimation();
}
first=1;
}

function concavem()
{
PIEchangeInputCheckbox(label2, true);
PIEchangeInputCheckbox(label1, false);
PIEchangeInputCheckbox(label3, false);
v1=false;
v2=true;
v3=false;
planevar(false);
convexvar(false);
concavevar(true);
i=0;
mirror=2;
PIEstartAnimation();
}
function convexm()
{
PIEchangeInputCheckbox(label3, true);
PIEchangeInputCheckbox(label1, false);
PIEchangeInputCheckbox(label2, false);
v1=false;
v2=false;
v3=true;
planevar(false);
convexvar(true);
concavevar(false);
mirror=3;
i=0;
PIEstartAnimation();
}

var mirror=1,v1,v2,v3,first=0;

var x4;
        function loadExperimentElements()
        {
        	initialiseInfo();
            initialiseHelp();
            PIEsetExperimentTitle("COMPARISON OF IMAGE SIZES AT DIFFERENT MIRRORS");
            PIEsetDeveloperName("Hemanth Katari");
            PIEhideControlElement();
            document.title = "COMPARISON OF IMAGE SIZES AT DIFFERENT MIRRORS";
        PIEaddInputCheckbox(label1, value1, planem);
        PIEaddInputCheckbox(label2, value2, concavem);
        PIEaddInputSlider(radius,ri,newrad2,rmin,rmax,fold);
        PIEaddInputCheckbox(label3, value3, convexm);
        PIEaddInputSlider(radius1,ri,newrad1,rmin,rmax,fold);
        
        
         geometry = new THREE.BoxGeometry( 500,500,0);
         material = new THREE.MeshBasicMaterial( {color: 0xFCEDB2} );
        myFloor1  = new THREE.Mesh( geometry, material );
         myFloor1.position.set(0,3,0);
            myFloor1.receiveShadow = true;
         PIEaddElement(myFloor1);

         material = new THREE.LineBasicMaterial({color: 0x1e0987});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -300, 0, 0 ),new THREE.Vector3( 300, 0, 0 ));
        line = new THREE.Line( geometry, material );
        PIEaddElement(line);

         geometry = new THREE.BoxGeometry( 1,60,0);
         material = new THREE.MeshBasicMaterial( {color: 0x1e0987} );
        plane1  = new THREE.Mesh( geometry, material );
         plane1.position.set(-45,0,0);
            plane1.receiveShadow = true;
         PIEaddElement(plane1);
 
        geometry = new THREE.BoxGeometry(0.7,60,0);
         material = new THREE.MeshPhongMaterial( {color: 0xc8cdf7} );
        plane2  = new THREE.Mesh( geometry, material );
         plane2.position.set(-44,0,0);
            plane2.receiveShadow = true;
         PIEaddElement(plane2);

          material = new THREE.MeshBasicMaterial({color: 0x044402});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -100, 20, 0 ),new THREE.Vector3( -45,20 , 0 ));
        linep1 = new THREE.Line( geometry, material );
        PIEaddElement(linep1);

        material = new THREE.MeshBasicMaterial({color: 0x044402});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -100, 20, 0 ),new THREE.Vector3( -45,5 , 0 ));
        linep2 = new THREE.Line( geometry, material );
        PIEaddElement(linep2);

        material = new THREE.MeshBasicMaterial({color: 0xff0000,linewidth:3});
        geometry = new THREE.Geometry( );
        geometry.vertices.push(new THREE.Vector3( 0, 0, 0 ),new THREE.Vector3( 0, 20, 0 ));
        linep11 = new THREE.Line( geometry, material );
        linep11.position.x=10;
        PIEaddElement(linep11);
       
        var shape = new THREE.Shape();
        shape.moveTo( 0,0 );
        shape.lineTo( -1,-1  );
        shape.lineTo( 0,-0.5  );
        shape.lineTo( 1, -1 );
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
         linep12 = new THREE.Mesh( geometry, material ) ;
       linep12.position.set(10,20,0);
        PIEaddElement(linep12);
        
        material = new THREE.LineDashedMaterial({color: 0x044402,dashSize: 1,gapSize: 0.3});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -45, 20, 0 ),new THREE.Vector3( 10,20,0 ));
        geometry.computeLineDistances();
        linep21 = new THREE.Line( geometry, material );
        PIEaddElement(linep21);

         material = new THREE.LineDashedMaterial({color: 0x044402,dashSize: 1,gapSize: 0.3});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -45, 5, 0 ),new THREE.Vector3( 10,20,0 ));
        geometry.computeLineDistances();
        linep22 = new THREE.Line( geometry, material );
        PIEaddElement(linep22);

        material = new THREE.LineDashedMaterial({color: 0x044402});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -45, 5, 0 ),
            new THREE.Vector3( -100,-10,0 ));
        linep61 = new THREE.Line( geometry, material );
        PIEaddElement(linep61);

        material = new THREE.MeshBasicMaterial({color: 0x023644});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( ((-100-45)/2)-1, 20+1, 0 ),new THREE.Vector3( (-100-45)/2, 20, 0 ),new THREE.Vector3( ((-100-45)/2)-1, 20-1, 0 ));
        linep41 = new THREE.Line( geometry, material );
        PIEaddElement(linep41);
        material = new THREE.LineDashedMaterial({color: 0x044402});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( ((-100-45)/2)-1, 12.5+1, 0 ),new THREE.Vector3( ((-100-45)/2), 12.5, 0 ),new THREE.Vector3( ((-100-45)/2)-1, 12.5-0.5, 0 ));
        linep42 = new THREE.Line( geometry, material );
        PIEaddElement(linep42);
         material = new THREE.MeshBasicMaterial({color: 0x044402});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -100+1, -10-0.3, 0),new THREE.Vector3( -100, -10, 0 ),new THREE.Vector3( -100+1, -10+1, 0));
        linep43 = new THREE.Line( geometry, material );
        PIEaddElement(linep43);
        material = new THREE.MeshBasicMaterial({color: 0x044402});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( ((-100-45)/2)+2, 20+1, 0 ),new THREE.Vector3( (-100-45)/2+1, 20, 0 ),new THREE.Vector3( ((-100-45)/2)+2, 20-1, 0 ));
        linep44 = new THREE.Line( geometry, material );
        PIEaddElement(linep44);






        geometry = new THREE.RingGeometry(  39, 40, 32 ,8,0.8* Math.PI,0.4*Math.PI);
        material = new THREE.LineBasicMaterial( { color: 0x1e0987, side: THREE.DoubleSide } );
         c1 = new THREE.Mesh( geometry, material );
        c1.position.set(0,0, 0.0);
        PIEaddElement(c1);
        geometry = new THREE.SphereGeometry( 0.6, 20,20);
        material = new THREE.LineBasicMaterial( { color: 0x03c42a, side: THREE.DoubleSide } );
         c2 = new THREE.Mesh( geometry, material );
        c2.position.x = -20;
        c2.position.y = 0;
        c2.position.z = 0;
        PIEaddElement(c2);
        geometry = new THREE.SphereGeometry( 0.6, 20,20);
        material = new THREE.LineBasicMaterial( { color: 0x03c42a, side: THREE.DoubleSide } );
         c3 = new THREE.Mesh( geometry, material );
        c3.position.x = 0;
        c3.position.y = 0;
        c3.position.z = 0;
        PIEaddElement(c3);
        geometry = new THREE.RingGeometry(  38.3, 39, 32 ,8,0.8* Math.PI,0.4*Math.PI);
        material = new THREE.MeshToonMaterial( { color: 0xc8cdf7, side: THREE.DoubleSide } );
         c4 = new THREE.Mesh( geometry, material );
        c4.position.set(0,0, 0.0);
        PIEaddElement(c4);

        
        cc1=0.0;
        cc2=-20;
        x1=-100.0;
        x2=cc2;
        y1=20.0;
        y2=0.0;
        a=(y2-y1)/(x2-x1);
        b=1+a*a;
        k1=cc1+(a*a*cc2);
        k2=Math.sqrt(k1*k1-b*(cc1*cc1+(a*a*cc2*cc2)-40*40))
		x3=(k1-k2)/b;
        y3=a*(x3-cc2);
       
        x4=-20+(y3*(s1+20)/20);


        
        geometry = new THREE.SphereGeometry( 0.3, 20,20);
        material = new THREE.LineBasicMaterial( { color: 0x044402, side: THREE.DoubleSide } );
        c11 = new THREE.Mesh( geometry, material );
        c11.position.x = -Math.sqrt(40*40-20*20);
        c11.position.y = 20;
        c11.position.z = 0;
        PIEaddElement(c11);
        
        geometry = new THREE.SphereGeometry( 0.3, 20,20);
        material = new THREE.LineBasicMaterial( { color: 0x023644, side: THREE.DoubleSide } );
         c12 = new THREE.Mesh( geometry, material );
        c12.position.x = x3;
        c12.position.y = y3;
        c12.position.z = 0;
        PIEaddElement(c12);

       
        
        material = new THREE.MeshBasicMaterial({color: 0x044402});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -100, 20, 0 ),new THREE.Vector3( -Math.sqrt(40*40-20*20), 20, 0 ));
		line1 = new THREE.Line( geometry, material );
        PIEaddElement(line1);
        
       

		material = new THREE.LineDashedMaterial({color: 0x023644});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -100, 20 ,0),new THREE.Vector3( x3, y3, 0 ));
        line2 = new THREE.Line( geometry, material );
        PIEaddElement(line2);

        
        material = new THREE.MeshBasicMaterial({color: 0xff0000,linewidth:3});
        geometry = new THREE.Geometry( );
        geometry.vertices.push(new THREE.Vector3( 0, 0, 0 ),new THREE.Vector3( 0, 20, 0 ));
		line11 = new THREE.Line( geometry, material );
		line11.position.x=-100;
        //line11.position.y=7.5;
        PIEaddElement(line11);

        

       
var shape = new THREE.Shape();
shape.moveTo( 0,0 );
shape.lineTo( -1,-1  );
shape.lineTo( 0,-0.5  );
shape.lineTo( 1, -1 );
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
		
line12.position.set(-100,20,0);
        PIEaddElement(line12);



        material = new THREE.MeshBasicMaterial({color: 0xff0000,linewidth:3});
        geometry = new THREE.Geometry( );
        geometry.vertices.push(new THREE.Vector3( x4, 0, 0 ),new THREE.Vector3( x4, y3, 0 ));
        line13 = new THREE.Line( geometry, material );
        PIEaddElement(line13);
       
var shape = new THREE.Shape();
shape.moveTo( 0,0 );
shape.lineTo( -1,-1  );
shape.lineTo( 0,-0.5  );
shape.lineTo( 1, -1 );
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
 line14 = new THREE.Mesh( geometry, material ) ;
        
line14.position.set(x4,y3,0);
        PIEaddElement(line14);



       
        material = new THREE.LineDashedMaterial({color: 0x044402,dashSize: 1,gapSize: 0.3});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -Math.sqrt(40*40-20*20), 20, 0 ),new THREE.Vector3( -20,0,0 ));
        geometry.computeLineDistances();
        line21 = new THREE.Line( geometry, material );
        PIEaddElement(line21);
        material = new THREE.LineDashedMaterial({color: 0x023644,dashSize: 1,gapSize: 0.3});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( x3, y3,0 ),new THREE.Vector3( x3+30,y3,0 ));
        geometry.computeLineDistances();
        line22 = new THREE.Line( geometry, material );
        PIEaddElement(line22);
        
          

        material = new THREE.LineDashedMaterial({color: 0x044402});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -Math.sqrt(40*40-20*20), 20, 0 ),
            new THREE.Vector3( 2*(-Math.sqrt(40*40-20*20))+20,2*20,0 ));
        line61 = new THREE.Line( geometry, material );
        PIEaddElement(line61);

        
        
        material = new THREE.LineDashedMaterial({color: 0x023644});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( x3,y3,0 ),
            new THREE.Vector3( -70,y3,0) );
        line62 = new THREE.Line( geometry, material );
        PIEaddElement(line62);



               
        material = new THREE.MeshBasicMaterial({color: 0x023644});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( ((-100+x3)/2)-0.5, ((20+y3)/2)+0.7, 0 ),new THREE.Vector3( (-100+x3)/2, (20+y3)/2, 0 ),new THREE.Vector3( ((-100+x3)/2)-0.7, ((20+y3)/2)-0.3, 0 ));
		line41 = new THREE.Line( geometry, material );
        PIEaddElement(line41);
		material = new THREE.LineDashedMaterial({color: 0x044402});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( ((-100+s1)/2)-0.5, 20.5, 0 ),new THREE.Vector3( (-100+s1)/2, 20, 0 ),new THREE.Vector3( ((-100+s1)/2)-0.5, 19.5, 0 ));
        line42 = new THREE.Line( geometry, material );
        PIEaddElement(line42);
		
        material = new THREE.MeshBasicMaterial({color: 0x044402});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 2*(c1.position.x-Math.sqrt(40*40-20*20))-c2.position.x+1,2*20, 0 ),new THREE.Vector3( 2*(c1.position.x-Math.sqrt(40*40-20*20))-c2.position.x, 2*20, 0 ),new THREE.Vector3( 2*(c1.position.x-Math.sqrt(40*40-20*20))-c2.position.x, 2*20-1, 0 ));
		line51 = new THREE.Line( geometry, material );
        PIEaddElement(line51);
		material = new THREE.LineDashedMaterial({color: 0x023644});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -69.5,y3+0.5,0),new THREE.Vector3( -70, y3, 0 ),new THREE.Vector3( -69.5, y3-0.5, 0 ));
        line52 = new THREE.Line( geometry, material );
        PIEaddElement(line52);
        


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

        

        geometry = new THREE.RingGeometry(  40, 41, 32 ,8,1.8* Math.PI,0.4*Math.PI);
        material = new THREE.LineBasicMaterial( { color: 0x1e0987, side: THREE.DoubleSide } );
         cb1 = new THREE.Mesh( geometry, material );
        cb1.position.set(-30,0, 0.0);
        PIEaddElement(cb1);
        geometry = new THREE.SphereGeometry( 0.6, 20,20);
        material = new THREE.LineBasicMaterial( { color: 0x03c42a, side: THREE.DoubleSide } );
         cb2 = new THREE.Mesh( geometry, material );
        cb2.position.x = -30+20;
        cb2.position.y = 0;
        cb2.position.z = 0;
        PIEaddElement(cb2);
        geometry = new THREE.SphereGeometry( 0.6, 20,20);
        material = new THREE.LineBasicMaterial( { color: 0x03c42a, side: THREE.DoubleSide } );
         cb3 = new THREE.Mesh( geometry, material );
        cb3.position.x = -30;
        cb3.position.y = 0;
        cb3.position.z = 0;
        PIEaddElement(cb3);
        geometry = new THREE.RingGeometry(  41, 41.6, 32 ,-8,1.8* Math.PI,0.4*Math.PI);
        material = new THREE.MeshToonMaterial( { color: 0xc8cdf7, side: THREE.DoubleSide } );
         cb4 = new THREE.Mesh( geometry, material );
        cb4.position.set(-30,0, 0.0);
        PIEaddElement(cb4);
        
        material = new THREE.MeshBasicMaterial({color: 0x5e0237});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -100, 20, 0 ),new THREE.Vector3( -30+Math.sqrt(40*40-20*20), 20, 0 ));
        lineb1 = new THREE.Line( geometry, material );
        PIEaddElement(lineb1);

        ccc1=-30.0;
        ccc2=ccc1+(ra/2.0);
        g=(20/(100+ccc2))*(20/(100+ccc2));
        ccc3=ccc1+ccc2*g;
        x5=(ccc3+Math.sqrt(ccc3*ccc3-(1+g)*(ccc1*ccc1+g*ccc2*ccc2-ra*ra)))/(1+g);
        y5=-20.0*(x5-ccc2)/(100.0+ccc2);

        material = new THREE.LineDashedMaterial({color: 0x472202});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -100, 20 ,0),new THREE.Vector3(x5,y5,0  ));
        lineb2 = new THREE.Line( geometry, material );
        PIEaddElement(lineb2);

         geometry = new THREE.SphereGeometry( 0.3, 20,20);
        material = new THREE.LineBasicMaterial( { color: 0x5e0237, side: THREE.DoubleSide } );
        cb11 = new THREE.Mesh( geometry, material );
        cb11.position.x = -30+Math.sqrt(40*40-20*20);
        cb11.position.y = 20;
        cb11.position.z = 0;
        //PIEaddElement(cb11);
        
        geometry = new THREE.SphereGeometry( 0.3, 20,20);
        material = new THREE.LineBasicMaterial( { color: 0x472202, side: THREE.DoubleSide } );
         cb12 = new THREE.Mesh( geometry, material );
        cb12.position.x = x5;
        cb12.position.y = y5;
        cb12.position.z = 0;
        //PIEaddElement(cb12);

        material = new THREE.LineDashedMaterial({color: 0x5e0237});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -30+Math.sqrt(40*40-20*20), 20, 0  ),
            new THREE.Vector3(-20+30-Math.sqrt(40*40-20*20), -20, 0   ));
        lineb61 = new THREE.Line( geometry, material );
        PIEaddElement(lineb61);

        
        
        material = new THREE.LineDashedMaterial({color: 0x472202});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( x5,y5,0 ),
            new THREE.Vector3( x5-60,y5,0) );
        lineb62 = new THREE.Line( geometry, material );
        PIEaddElement(lineb62);
        
        x6=-10+(y5*(-30+Math.sqrt(40*40-20*20)+10)/20);
        material = new THREE.MeshBasicMaterial({color: 0xff0000,linewidth:3});
        geometry = new THREE.Geometry( );
        geometry.vertices.push(new THREE.Vector3( x6, 0, 0 ),new THREE.Vector3( x6, y5, 0 ));
        line15 = new THREE.Line( geometry, material );
        PIEaddElement(line15);
       
var shape = new THREE.Shape();
shape.moveTo( 0,0 );
shape.lineTo( -1,1  );
shape.lineTo( 0,0.5  );
shape.lineTo( 1, 1 );
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
 line16 = new THREE.Mesh( geometry, material ) ;
        
line16.position.set(x6,y5,0);
        PIEaddElement(line16);

        f1=-30+Math.sqrt(40*40-20*20);
        f2=-20+30-Math.sqrt(40*40-20*20);
        
         material = new THREE.MeshBasicMaterial({color: 0x5e0237});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( ((-100+f1)/2)-1, 21, 0 ),new THREE.Vector3( (-100+f1)/2, 20, 0 ),new THREE.Vector3( ((-100+f1)/2)-1, 19, 0 ));
        lineb41 = new THREE.Line( geometry, material );
        PIEaddElement(lineb41);
        material = new THREE.LineDashedMaterial({color: 0x472202});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( ((-100+x5)/2)-1, (y5+20)/2-0.5, 0 ),new THREE.Vector3( (-100+x5)/2, (y5+20)/2, 0 ),new THREE.Vector3( ((-100+x5)/2)-1, (y5+20)/2+1.5, 0 ));
        lineb42 = new THREE.Line( geometry, material );
        PIEaddElement(lineb42);
        

        material = new THREE.MeshBasicMaterial({color: 0x5e0237});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( f2+1, -20, 0 ),new THREE.Vector3( f2, -20, 0 ),new THREE.Vector3( f2, -19, 0 ));
        lineb51 = new THREE.Line( geometry, material );
        PIEaddElement(lineb51);
        material = new THREE.LineDashedMaterial({color: 0x472202});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( x5-60+1, y5-1, 0 ),new THREE.Vector3( x5-60, y5, 0 ),new THREE.Vector3( x5-60+1, y5+1, 0 ));
        lineb52 = new THREE.Line( geometry, material );
        PIEaddElement(lineb52);


        geometry = new THREE.RingGeometry(  0.8, 1, 32 ,8,-0.5* Math.PI,Math.PI);
        material = new THREE.LineBasicMaterial( { color: 0x000000, side: THREE.DoubleSide } );
         ctb1 = new THREE.Mesh( geometry, material );
        ctb1.position.set(-32,-3, 0.0);
        PIEaddElement(ctb1);
        
        geometry = new THREE.RingGeometry(  0.7, 0.8, 32 ,8,0.5* Math.PI,Math.PI);
        material = new THREE.LineBasicMaterial( { color: 0x000000, side: THREE.DoubleSide } );
         ctb3 = new THREE.Mesh( geometry, material );
        ctb3.position.set(14,-3.5, 0.0);
        PIEaddElement(ctb3);

        material = new THREE.MeshBasicMaterial({color: 0x000000,linewidth:2});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -10, -4, 0 ),new THREE.Vector3( -10, -2, 0 ),new THREE.Vector3( -11, -2, 0 ));
        lineb71 = new THREE.Line( geometry, material );
        PIEaddElement(lineb71);
        
        material = new THREE.LineDashedMaterial({color: 0x000000,linewidth:2});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -10, -3 ,0),new THREE.Vector3( -11, -3, 0 ));
        lineb72 = new THREE.Line( geometry, material );
        PIEaddElement(lineb72);

        material = new THREE.MeshBasicMaterial({color: 0x000000,linewidth:2});
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 14, -5.5, 0 ),new THREE.Vector3( 14, -2.6, 0 ));
        lineb73 = new THREE.Line( geometry, material );
        PIEaddElement(lineb73);
        mirror=1;
        i=0;
        first=0;
        planem();
        
		//planevar(false);
        //concavevar(false);
        
        PIEresize();
        //resetExperiment();
        PIEsetAreaOfInterest(-70, -50, -40, 50);
        

}
function resetExperiment()
{
	
    PIEchangeInputSlider(radius1, ri);
    PIEchangeInputSlider(radius, ri);
    PIEstopAnimation();

    
        first=0;
        linep1.geometry.vertices[0].x=-100;
        linep1.geometry.vertices[0].y=20;
        linep1.geometry.vertices[1].x=-45;
        linep1.geometry.vertices[1].y=20;
        linep1.geometry.verticesNeedUpdate=true;
        
        linep2.geometry.vertices[0].x=-100;
        linep2.geometry.vertices[0].y=20;
        linep2.geometry.vertices[1].x=-45;
        linep2.geometry.vertices[1].y=5;
        linep2.geometry.verticesNeedUpdate=true;
       
       linep21.geometry.vertices[0].x=-45;
        linep21.geometry.vertices[0].y=20;
        linep21.geometry.vertices[1].x=10;
        linep21.geometry.vertices[1].y=20;
        linep21.geometry.verticesNeedUpdate=true;
        
        linep22.geometry.vertices[0].x=-45;
        linep22.geometry.vertices[0].y=5;
        linep22.geometry.vertices[1].x=10;
        linep22.geometry.vertices[1].y=20;
        linep22.geometry.verticesNeedUpdate=true;

        linep61.geometry.vertices[0].x=-45;
        linep61.geometry.vertices[0].y=5;
        linep61.geometry.vertices[1].x=-100;
        linep61.geometry.vertices[1].y=-10;
        linep61.geometry.verticesNeedUpdate=true;

        
        


        rad1=40;
        
        ckgeometry = new THREE.RingGeometry(  rad1-1, rad1, 32 ,8,0.8* Math.PI,0.4*Math.PI);
        c1.geometry=ckgeometry;
        ckgeometry=new THREE.RingGeometry(  rad1-1.7, rad1-1, 32 ,8,0.8* Math.PI,0.4*Math.PI);
        c4.geometry=ckgeometry;
        
        c1.position.x+=(rad1-rad);
        c4.position.x+=(rad1-rad);
        c2.position.x=c1.position.x-(rad1/2.0);
        c3.position.x=c1.position.x;
        rad=rad1;
        
        cc1=c1.position.x;
        cc2=c2.position.x;
        x1=-100;
        x2=cc2;
        y1=20.0;
        y2=0.0;
        a=(y2-y1)/(x2-x1);
        b=1+a*a;
        k1=cc1+(a*a*cc2);
        k2=Math.sqrt(k1*k1-b*(cc1*cc1+(a*a*cc2*cc2)-rad1*rad1))
        x3=(k1-k2)/b;
        y3=a*(x3-cc2);
       
        x4=c2.position.x+(y3*(c1.position.x-Math.sqrt(rad1*rad1-20*20)-c2.position.x)/20);

        
        c11.position.x=c1.position.x-Math.sqrt(rad1*rad1-20*20);
        c11.position.y=20;

        c12.position.x=x3;
        c12.position.y=y3;

        ct1.position.x=c1.position.x;

        line71.geometry.vertices[0].x=c2.position.x;
        line71.geometry.vertices[1].x=c2.position.x;
        line71.geometry.vertices[2].x=c2.position.x-1;
        line71.geometry.verticesNeedUpdate=true;
        line72.geometry.vertices[0].x=c2.position.x;
        line72.geometry.vertices[1].x=c2.position.x-1;
        line72.geometry.verticesNeedUpdate=true;

        line1.geometry.vertices[0].x=-100;
        line1.geometry.vertices[0].y=20;
        line1.geometry.vertices[1].x=c1.position.x-Math.sqrt(rad1*rad1-20*20);
        line1.geometry.vertices[1].y=20;
        line1.geometry.verticesNeedUpdate=true;
        
        line2.geometry.vertices[0].x=-100;
        line2.geometry.vertices[0].y=20;
        line2.geometry.vertices[1].x=x3;
        line2.geometry.vertices[1].y=y3;
        line2.geometry.verticesNeedUpdate=true;

        line13.geometry.vertices[0].x=x4;
        line13.geometry.vertices[0].y=0;
        line13.geometry.vertices[1].x=x4;
        line13.geometry.vertices[1].y=y3;
        line13.geometry.verticesNeedUpdate=true;

        line14.position.set(x4,y3,0);

        line21.geometry.vertices[0].x=c1.position.x-Math.sqrt(rad1*rad1-20*20);
        line21.geometry.vertices[0].y=20;
        line21.geometry.vertices[1].x=c2.position.x;
        line21.geometry.vertices[1].y=0;
        line21.geometry.verticesNeedUpdate=true;
         
        line22.geometry.vertices[0].x=x3;
        line22.geometry.vertices[0].y=y3;
        line22.geometry.vertices[1].x=x3+30;
        line22.geometry.vertices[1].y=y3;
        line22.geometry.verticesNeedUpdate=true;
        
        
        line61.geometry.vertices[0].x=c1.position.x-Math.sqrt(rad1*rad1-20*20);
        line61.geometry.vertices[0].y=20;
        line61.geometry.vertices[1].x=2*(c1.position.x-Math.sqrt(rad1*rad1-20*20))-c2.position.x;
        line61.geometry.vertices[1].y=2*20;
        line61.geometry.verticesNeedUpdate=true;
        

        line62.geometry.vertices[0].x=x3;
        line62.geometry.vertices[0].y=y3;
        line62.geometry.vertices[1].x=-70;
        line62.geometry.vertices[1].y=y3;
        line62.geometry.verticesNeedUpdate=true;
        
        
        line41.geometry.vertices[0].x=((-100+x3)/2)-0.5;
        line41.geometry.vertices[0].y=((20+y3)/2)+0.7;
        line41.geometry.vertices[1].x=(-100+x3)/2;
        line41.geometry.vertices[1].y=(20+y3)/2;
        line41.geometry.vertices[2].x=((-100+x3)/2)-0.7;
        line41.geometry.vertices[2].y=((20+y3)/2)-0.3;
        line41.geometry.verticesNeedUpdate=true;

        line42.geometry.vertices[0].x=((-100+c1.position.x-Math.sqrt(rad1*rad1-20*20))/2)-0.5;
        line42.geometry.vertices[0].y=19.5;
        line42.geometry.vertices[1].x=(-100+c1.position.x-Math.sqrt(rad1*rad1-20*20))/2;
        line42.geometry.vertices[1].y=20;
        line42.geometry.vertices[2].x=((-100+c1.position.x-Math.sqrt(rad1*rad1-20*20))/2)-0.5;
        line42.geometry.vertices[2].y=20.5;
        line42.geometry.verticesNeedUpdate=true;


        line51.geometry.vertices[0].x=2*(c1.position.x-Math.sqrt(rad1*rad1-20*20))-c2.position.x+1;
        line51.geometry.vertices[0].y=2*20;
        line51.geometry.vertices[1].x=2*(c1.position.x-Math.sqrt(rad1*rad1-20*20))-c2.position.x;
        line51.geometry.vertices[1].y=2*20;
        line51.geometry.vertices[2].x=2*(c1.position.x-Math.sqrt(rad1*rad1-20*20))-c2.position.x;
        line51.geometry.vertices[2].y=2*20-1;
        line51.geometry.verticesNeedUpdate=true;

        line52.geometry.vertices[0].x=-69.5;
        line52.geometry.vertices[0].y=y3+0.5;
        line52.geometry.vertices[1].x=-70;
        line52.geometry.vertices[1].y=y3;
        line52.geometry.vertices[2].x=-69.5;
        line52.geometry.vertices[2].y=y3-0.5;
        line52.geometry.verticesNeedUpdate=true;

        ra1=40;
        
        ckgeometry = new THREE.RingGeometry(  ra1, ra1+1, 32 ,8,1.8* Math.PI,0.4*Math.PI);
        cb1.geometry=ckgeometry;
        ckgeometry=new THREE.RingGeometry(  ra1+1, ra1+1.6, 32 ,8,1.8* Math.PI,0.4*Math.PI);
        cb4.geometry=ckgeometry;
        
        cb1.position.x-=(ra1-ra);
        cb4.position.x-=(ra1-ra);
        cb2.position.x=cb1.position.x+(ra1/2.0);
        cb3.position.x=cb1.position.x;
        ra=ra1;
        
        ccc1=cb1.position.x;
        ccc2=ccc1+(ra/2.0);
        g=(20/(100+ccc2))*(20/(100+ccc2));
        ccc3=ccc1+ccc2*g;
        x5=(ccc3+Math.sqrt(ccc3*ccc3-(1+g)*(ccc1*ccc1+g*ccc2*ccc2-ra*ra)))/(1+g);
        y5=-20.0*(x5-ccc2)/(100.0+ccc2);
        x6=cb2.position.x+(y5*(cb1.position.x+Math.sqrt(ra1*ra1-20*20)-cb2.position.x)/20);
        
        cb11.position.x=c1.position.x+Math.sqrt(ra1*ra1-20*20);
        cb11.position.y=20;

        cb12.position.x=x5;
        cb12.position.y=y5;

        ctb1.position.x=cb1.position.x;

        lineb71.geometry.vertices[0].x=cb2.position.x;
        lineb71.geometry.vertices[1].x=cb2.position.x;
        lineb71.geometry.vertices[2].x=cb2.position.x-1;
        lineb71.geometry.verticesNeedUpdate=true;
        lineb72.geometry.vertices[0].x=cb2.position.x;
        lineb72.geometry.vertices[1].x=cb2.position.x-1;
        lineb72.geometry.verticesNeedUpdate=true;

        lineb1.geometry.vertices[0].x=-100;
        lineb1.geometry.vertices[0].y=20;
        lineb1.geometry.vertices[1].x=cb1.position.x+Math.sqrt(ra1*ra1-20*20);
        lineb1.geometry.vertices[1].y=20;
        lineb1.geometry.verticesNeedUpdate=true;
        
        lineb2.geometry.vertices[0].x=-100;
        lineb2.geometry.vertices[0].y=20;
        lineb2.geometry.vertices[1].x=x5;
        lineb2.geometry.vertices[1].y=y5;
        lineb2.geometry.verticesNeedUpdate=true;

        line15.geometry.vertices[0].x=x6;
        line15.geometry.vertices[0].y=0;
        line15.geometry.vertices[1].x=x6;
        line15.geometry.vertices[1].y=y5;
        line15.geometry.verticesNeedUpdate=true;

        line16.position.set(x6,y5,0);


        lineb61.geometry.vertices[0].x=cb1.position.x+Math.sqrt(ra1*ra1-20*20);
        lineb61.geometry.vertices[0].y=20;
        lineb61.geometry.vertices[1].x=2*cb2.position.x-cb1.position.x-Math.sqrt(ra1*ra1-20*20);
        lineb61.geometry.vertices[1].y=-20;
        lineb61.geometry.verticesNeedUpdate=true;
        

        lineb62.geometry.vertices[0].x=x5;
        lineb62.geometry.vertices[0].y=y5;
        lineb62.geometry.vertices[1].x=x5-60;
        lineb62.geometry.vertices[1].y=y5;
        lineb62.geometry.verticesNeedUpdate=true;
        
        f1=cb1.position.x+Math.sqrt(ra1*ra1-20*20);
        f2=2*cb2.position.x-cb1.position.x-Math.sqrt(ra1*ra1-20*20);
        
        lineb41.geometry.vertices[0].x=((-100+f1)/2)-1;
        lineb41.geometry.vertices[0].y=21;
        lineb41.geometry.vertices[1].x=(-100+f1)/2;
        lineb41.geometry.vertices[1].y=20;
        lineb41.geometry.vertices[2].x=((-100+f1)/2)-1;
        lineb41.geometry.vertices[2].y=19;
        lineb41.geometry.verticesNeedUpdate=true;

        lineb42.geometry.vertices[0].x=((-100+x5)/2)-1;
        lineb42.geometry.vertices[0].y=(y5+20)/2-0.5;
        lineb42.geometry.vertices[1].x=((-100+x5)/2);
        lineb42.geometry.vertices[1].y=(y5+20)/2;
        lineb42.geometry.vertices[2].x=((-100+x5)/2)-1;
        lineb42.geometry.vertices[2].y=(y5+20)/2+1.5;
        lineb42.geometry.verticesNeedUpdate=true;


        lineb51.geometry.vertices[0].x=f2+1;
        lineb51.geometry.vertices[0].y=-20;
        lineb51.geometry.vertices[1].x=f2;
        lineb51.geometry.vertices[1].y=-20;
        lineb51.geometry.vertices[2].x=f2;
        lineb51.geometry.vertices[2].y=-19;
        lineb51.geometry.verticesNeedUpdate=true;

        lineb52.geometry.vertices[0].x=x5-60+1 ;
        lineb52.geometry.vertices[0].y=y5-1;
        lineb52.geometry.vertices[1].x=x5-60;
        lineb52.geometry.vertices[1].y=y5;
        lineb52.geometry.vertices[2].x=x5-60+1;
        lineb52.geometry.vertices[2].y=y5+1;
        lineb52.geometry.verticesNeedUpdate=true;
        mirror=1;
       i=0;
       //PIEhideControlElement();

       planem();



}

var i=0,m1,m2,m3,m4,p,cap,j,flag=0,speed=20;
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

        if(mirror==1)
        {
	       if(i==0)
            {
                linep1.geometry.vertices[1].x=-100;
                linep1.geometry.vertices[1].y=20;
                linep1.geometry.verticesNeedUpdate=true;

                linep2.geometry.vertices[1].x=-100;
                linep2.geometry.vertices[1].y=20;
                linep2.geometry.verticesNeedUpdate=true;

                linep21.geometry.vertices[1].x=-45;
                linep21.geometry.vertices[1].y=20;
                linep21.geometry.verticesNeedUpdate=true;

                linep22.geometry.vertices[1].x=-45;
                linep22.geometry.vertices[1].y=5;
                linep22.geometry.verticesNeedUpdate=true;

                linep61.geometry.vertices[1].x=-45;
                linep61.geometry.vertices[1].y=5;
                linep61.geometry.verticesNeedUpdate=true;

                 linep41.traverse(  function ( child ) { child.visible = false; } );
                linep42.traverse(  function ( child ) { child.visible = false; } );
                linep43.traverse(  function ( child ) { child.visible = false; } );
                linep44.traverse(  function ( child ) { child.visible = false; } );
                linep11.traverse(  function ( child ) { child.visible = false; } );
                linep12.traverse(  function ( child ) { child.visible = false; } );


                    i++;
        
            }

            if(linep1.geometry.vertices[1].x<=-45 )
            {
                linep1.geometry.vertices[1].x+=0.5*speed/30;
                linep1.geometry.verticesNeedUpdate=true;
            }
            if(linep2.geometry.vertices[1].x<=-45 )
                {
                linep2.geometry.vertices[1].x+=0.5*speed/30;
                linep2.geometry.vertices[1].y=5-(3*(linep2.geometry.vertices[1].x+45)/11);
                
                linep2.geometry.verticesNeedUpdate=true;
                }

            else
            {
                
                if(linep61.geometry.vertices[1].x>=-100)
                {
               
                linep61.geometry.vertices[1].x-=0.5*speed/30;
                linep61.geometry.vertices[1].y=5+(3*(linep61.geometry.vertices[1].x+45)/11);
                linep61.geometry.verticesNeedUpdate=true;
                linep41.traverse(  function ( child ) { child.visible = true; } );
                linep42.traverse(  function ( child ) { child.visible = true; } );

                }
                else
                {
                    if(linep21.geometry.vertices[1].x<=10)
                    {
               
                        linep21.geometry.vertices[1].x+=0.5*speed/30;
                        linep21.geometry.verticesNeedUpdate=true;
                        linep43.traverse(  function ( child ) { child.visible = true; } );
                        linep44.traverse(  function ( child ) { child.visible = true; } );
                        
                    }
                    if(linep22.geometry.vertices[1].x<=10 )
                    {
                        linep22.geometry.vertices[1].x+=0.5*speed/30;
                        linep22.geometry.vertices[1].y=20+(3*(linep22.geometry.vertices[1].x-10)/11);
                
                         linep22.geometry.verticesNeedUpdate=true;
                    }
                    else
                    {
                        linep11.traverse(  function ( child ) { child.visible = true; } );
                        linep12.traverse(  function ( child ) { child.visible = true; } );
                        
                        i=0;
                        PIEstopAnimation();
                    }
                }
            }

        }
        else if(mirror==2)
        {
            if(i==0)
            {
        
                lineb1.geometry.vertices[1].x=-100;
                lineb1.geometry.vertices[1].y=20;
                lineb1.geometry.verticesNeedUpdate=true;
        
                 lineb2.geometry.vertices[1].x=-100;
                lineb2.geometry.vertices[1].y=20;
                lineb2.geometry.verticesNeedUpdate=true;

                lineb61.geometry.vertices[1].x=cb1.position.x+Math.sqrt(ra1*ra1-20*20);
                lineb61.geometry.vertices[1].y=20;
                lineb61.geometry.verticesNeedUpdate=true;
        
                 lineb62.geometry.vertices[1].x=x5;
                lineb62.geometry.vertices[1].y=y5;
                lineb62.geometry.verticesNeedUpdate=true;
       
        
                lineb41.traverse(  function ( child ) { child.visible = false; } );
                lineb42.traverse(  function ( child ) { child.visible = false; } );
                lineb51.traverse(  function ( child ) { child.visible = false; } );
                lineb52.traverse(  function ( child ) { child.visible = false; } );
        
                cb11.traverse(  function ( child ) { child.visible = false; } );
                cb12.traverse(  function ( child ) { child.visible = false; } );
                line15.traverse(  function ( child ) { child.visible = false; } );
                line16.traverse(  function ( child ) { child.visible = false; } );
                
                i++;
            }
            if(lineb2.geometry.vertices[1].x<=x5 )
                {
                lineb2.geometry.vertices[1].x+= 0.5*(speed/30);
                lineb2.geometry.vertices[1].y=20-((20-y5)*(lineb2.geometry.vertices[1].x+100)/(100+x5)) ;
                lineb2.geometry.verticesNeedUpdate = true;
                }

            if(lineb1.geometry.vertices[1].x<=cb1.position.x+Math.sqrt(ra1*ra1-20*20) )
            {
             lineb1.geometry.vertices[1].x+= 0.5*(speed/30);
            lineb1.geometry.verticesNeedUpdate = true;
        
            }
            
            else
            {

            if(lineb61.geometry.vertices[1].x>=f2)
            {
                lineb42.traverse(  function ( child ) { child.visible = true; } );
                cb11.traverse(  function ( child ) { child.visible = true; } );
                lineb41.traverse(  function ( child ) { child.visible = true; } );
                cb12.traverse(  function ( child ) { child.visible = true; } );
                
                lineb61.geometry.vertices[1].x-= 0.5*(speed/30);
                lineb61.geometry.vertices[1].y=-20+40*(lineb61.geometry.vertices[1].x-f2)/(f1-f2) ;
                lineb61.geometry.verticesNeedUpdate = true;
            }
            if(lineb62.geometry.vertices[1].x>=x5-60 )
                {
                lineb62.geometry.vertices[1].x-= 0.5*(speed/30);
                lineb62.geometry.verticesNeedUpdate = true;
                }
            else
            {
            
                line15.traverse(  function ( child ) { child.visible = true; } );
                line16.traverse(  function ( child ) { child.visible = true; } );
                i=0;
                lineb51.traverse(  function ( child ) { child.visible = true; } );
                lineb52.traverse(  function ( child ) { child.visible = true; } );
        
                PIEstopAnimation();
                

            }

        }
    }
        else if(mirror==3)
        {
            if(i==0)
            {
        
                line1.geometry.vertices[1].x=-100;
                line1.geometry.vertices[1].y=20;
                line1.geometry.verticesNeedUpdate=true;
        
                 line2.geometry.vertices[1].x=-100;
                line2.geometry.vertices[1].y=20;
                line2.geometry.verticesNeedUpdate=true;

                line21.geometry.vertices[1].x=c1.position.x-Math.sqrt(rad1*rad1-20*20);
                line21.geometry.vertices[1].y=20;
                line21.geometry.verticesNeedUpdate=true;
        
                line22.geometry.vertices[1].x=x3;
                line22.geometry.vertices[1].y=y3;
                line22.geometry.verticesNeedUpdate=true;
        
        
                line61.geometry.vertices[1].x=c1.position.x-Math.sqrt(rad1*rad1-20*20);
                line61.geometry.vertices[1].y=20;
                line61.geometry.verticesNeedUpdate=true;
        
                 line62.geometry.vertices[1].x=x3;
                line62.geometry.vertices[1].y=y3;
                line62.geometry.verticesNeedUpdate=true;
       
        
                line41.traverse(  function ( child ) { child.visible = false; } );
                line42.traverse(  function ( child ) { child.visible = false; } );
                line51.traverse(  function ( child ) { child.visible = false; } );
                line52.traverse(  function ( child ) { child.visible = false; } );
        
                c11.traverse(  function ( child ) { child.visible = false; } );
                c12.traverse(  function ( child ) { child.visible = false; } );
                line13.traverse(  function ( child ) { child.visible = false; } );
                line14.traverse(  function ( child ) { child.visible = false; } );
                
                i++;
            }
            if(line2.geometry.vertices[1].x<=x3 )
                {
                line2.geometry.vertices[1].x+= 0.5*(speed/30);
                line2.geometry.vertices[1].y=y3*(line2.geometry.vertices[1].x-c2.position.x)/(x3-c2.position.x) ;
                line2.geometry.verticesNeedUpdate = true;
                }

            if(line1.geometry.vertices[1].x<=c1.position.x-Math.sqrt(rad1*rad1-20*20) )
            {
             line1.geometry.vertices[1].x+= 0.5*(speed/30);
            line1.geometry.verticesNeedUpdate = true;
        
            }
            
            else
            {

            if(line61.geometry.vertices[1].x>=2*(c1.position.x-Math.sqrt(rad1*rad1-20*20))-c2.position.x )
            {
                line42.traverse(  function ( child ) { child.visible = true; } );
                c11.traverse(  function ( child ) { child.visible = true; } );
                line41.traverse(  function ( child ) { child.visible = true; } );
                c12.traverse(  function ( child ) { child.visible = true; } );
                
                line61.geometry.vertices[1].x-= 0.5*(speed/30);
                line61.geometry.vertices[1].y=20.0*(line61.geometry.vertices[1].x-c2.position.x)/(c1.position.x-Math.sqrt(rad1*rad1-20.0*20.0)-c2.position.x) ;
                line61.geometry.verticesNeedUpdate = true;
            }
            if(line62.geometry.vertices[1].x>=-70 )
                {
                line62.geometry.vertices[1].x-= 0.5*(speed/30);
                line62.geometry.verticesNeedUpdate = true;
                }
            else
            {
            if(line21.geometry.vertices[1].x<=c2.position.x )
            {
                line51.traverse(  function ( child ) { child.visible = true; } );
                line52.traverse(  function ( child ) { child.visible = true; } );
                
                line21.geometry.vertices[1].x+= 0.5*(speed/30);
                line21.geometry.vertices[1].y= 20.0*(line21.geometry.vertices[1].x-c2.position.x)/(c1.position.x-Math.sqrt(rad1*rad1-20.0*20.0)-c2.position.x);
                line21.geometry.verticesNeedUpdate = true;
            }
            
            else if(line22.geometry.vertices[1].x<=x3+30 )
                {
                line22.geometry.vertices[1].x+= 0.5*(speed/30);
                line22.geometry.verticesNeedUpdate = true;
                }
            
    
            else
                {
                line13.traverse(  function ( child ) { child.visible = true; } );
                line14.traverse(  function ( child ) { child.visible = true; } );
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
        
        
}


