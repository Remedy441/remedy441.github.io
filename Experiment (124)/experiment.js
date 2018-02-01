var p1, move1,m200,m300,m400,m500,m600,m700,m800,m900,m1000,m111,m222,m333,m444,m555,m666,m777,m888,m999;
var m100,particleSystem,c1=0,pq,pqq,c2=0,c3=0,c4=0,c5=0,c6=0,c7=0,c8=0,c9=0,c10=0,c11=0;
var p2,p3,p4,pr;
var p,p10,p11,p12,p13,p14,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38;
var gen,ph,p89,l1,cv=0,crt=0,l1e,lle1,sph1,l2e,sph2,c19=0,c78=0,cvr,f,cbed12,damGrtMesh,cbed121,damGrtMesh1;
var l2r,sph35,l2r,sr,sr1,sr2,sr3,sr4,sr5,v,p1h;
var srk1,srk2,srk3,srk4,srk5,srk6,srk7,srk7,srk9,srk10,srk11,texture;
var cse1,cse2,cse3;
var sz,sz1,sz2,sz3,sz4,sz5,sz6,grgmesh1,xu=0.1;
var hy=1,hy1=0.05,hy2=0.03,hy3=0.02,hy4=0.1,hy5=0.3,hy6=1.1,hb=1,hb1=0.1,hb2=0.043,c222=0;
var sz26,sz25,sz24,sz23,sz22,text4,uiy=0;
var helpContent = "";
var infoContent = "";
function initialiseHelp() {
    helpContent = helpContent + "<h2> Fossil fuel (thermal) generators</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows how Coal used to heat water and Generate electricity.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The start stage</h3>";
    helpContent = helpContent + "<p>The initial state is start stage. In this everything has already set up. <br><br>you can enter the animation stage by clicking the start button.</p>";
    
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In this  Animation first the Coal moved into the boiler then fire starts Burning after that the gates opened from the river and water flows through the pipes and  reaches into the boiler, then the water get converted into steam because of the heat and the steam pushes through pipes into turbines and rotates to give electricity for us </p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play button on the top line.</p>";
    PIEupdateHelp(helpContent);
}
function initialiseInfo() {
    infoContent = infoContent + "<h2>Fossil fuel (thermal) generators</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows how thermal energy converted into electrical energy.</p>";
    infoContent = infoContent + "<h3>Generator</h3>";
    infoContent = infoContent + "<p>A generator is a device that converts mechanical energy into electrical energy.  Generators do not produce electricity on their own, they must first collect mechanical energy from an outside source.</p>";
    infoContent = infoContent + "<h3>How does it work ?</h3>";
    infoContent = infoContent + "<p>Thermal power plants use water as working fluid. Nuclear and coal based power plants fall under this category. ... In a thermal power plant a steam turbine is rotated with help of high pressure and high temperature steam and this rotation is transferred to a generator to produce electricity.</p>";
      infoContent = infoContent + "<ul>";
    infoContent = infoContent + "<li>Adavantages   : </li><li>1)Fuel used is cheper. </li><li>2)Economical in intial cost compared to hydro plants</li><li>3)Thermal plants are able to respond to the load demand more effectively</li>";
    infoContent = infoContent + "<br>";
    infoContent = infoContent + "<li>Disadvantages  </li> : <li>1)Shows the dis advantages of thermal power..</li><li>2)Higher maintainace and operational costs</li><li>3)pollution of the atmospere</li><li>4)huge requirement of water</li>";
     infoContent = infoContent + "<br>";
    infoContent = infoContent + "<li>Efficiency  : Overall efficiency of Thermal Powerplant:approximately 40%</li>";
     infoContent = infoContent + "<br>";
    infoContent = infoContent + "<li>Cost  : Cost of generation of thermal electricity(Coal Based):Rs. 4.5Cr per MW</li>";
     infoContent = infoContent + "<br>";
   	infoContent = infoContent + "<li>India%  : For average 188,898MW thermal power produced in india</li>";
    infoContent = infoContent + "</ul>";
    PIEupdateInfo(infoContent);
}
function harish()
{
uiy++;
if(uiy>1)
{
	if(c222<3)
	{
	c222++;
		hy=2*hy,hy1=3*hy1,hy2=2*hy2,hy3=2*hy3,hy4=2*hy4,hy5=2*hy5,hy6=2*hy6;
		hb=hb+0.08;
		hb1=hb1+0.0003;
		hb2=hb2+0.0003;
		c1=c1+10,c3=c3+20,c4=c4+20,c5=c5+20,c6=c6+50,c7=c7+20,c8=c8+20,c9=c9+10;
	}
}
}
function yadav()
{
if(c222>-3)
{
c222--;
hb1=hb1-0.0003;
		hb2=hb2-0.0003;
hy=hy/2,hy1=hy1/3,hy2=hy2/2,hy3=hy3/2,hy4=hy4/2,hy6=hy6/2;
hb=hb-0.08;
c1=c1-10,c3=c3-20,c4=c4-20,c5=c5-20,c6=c6-50,c7=c7-20,c8=c8-20,c9=c9-10;
}
}
function loadExperimentElements()
{
 
    PIEsetExperimentTitle("Fossil fuel (thermal) generators");
    PIEsetDeveloperName("Harish Kumar Dubakula ");
    PIEhideControlElement();
  // PIEaddElement(new THREE.AxisHelper(50));
	 initialiseHelp();
    initialiseInfo();
    
    var text2 = document.createElement('h1');
text2.style.position = 'absolute';
text2.innerHTML = "Coal";
text2.style.zIndex = 10;    // if you still don't see the label, try uncommenting this
text2.style.width = 500+"px";

text2.style.top = 210 + 'px';
text2.style.left = 50 + 'px';
document.body.appendChild(text2);
   
     var text3 = document.createElement('h1');
text3.style.position = 'absolute';
text3.innerHTML = "Boiler";
text3.style.zIndex = 10;    // if you still don't see the label, try uncommenting this
text3.style.width = 500+"px";

text3.style.top = 30 + 'px';
text3.style.left = 370 + 'px';
document.body.appendChild(text3);
   
      text4 = document.createElement('h1');
text4.style.position = 'absolute';
text4.innerHTML = "Water";
text4.style.zIndex = 10;    // if you still don't see the label, try uncommenting this
text4.style.width = 500+"px";

text4.style.top = 420 + 'px';
text4.style.left = 90+ 'px';
document.body.appendChild(text4);

 text4 = document.createElement('h1');
text4.style.position = 'absolute';
text4.innerHTML = "Generator";
text4.style.zIndex = 10;    // if you still don't see the label, try uncommenting this
text4.style.width = 500+"px";

text4.style.top = 190 + 'px';
text4.style.left = 790+ 'px';
document.body.appendChild(text4);
    
    var g = new THREE.PlaneGeometry( 100, 30, 30 );
var m = new THREE.MeshBasicMaterial( {color: "#172035", side: THREE.DoubleSide} );
 p = new THREE.Mesh( g, m );
p.position.set(-4.4,-18,2);
PIEaddElement( p );
PIErender();
				var particleCount = 2000;
		    		var particles = new THREE.Geometry();
		 	   for (var p = 0; p < particleCount; p++) {
		  		   var x = Math.random() * 13 - 3;
					 var y = Math.random() * 3 - 3;
				  var z = Math.random() * 5- 3;
				//  var xy=Math.random() * 5 - 3;
			  var particle = new THREE.Vector3(x,y,z);
			  particles.vertices.push(particle);
		    }
		    var particleMaterial = new THREE.PointsMaterial(
				{color: 0xffffff, 
				 size: 14,
				 map: THREE.ImageUtils.loadTexture("images.jpeg"),
				 blending: THREE.AdditiveBlending,
				 transparent: true,
				});
			particleSystem = new THREE.Points(particles, particleMaterial);
			particleSystem.position.set(-30.5,2,4);
			particleSystem.visible=false;
			PIEaddElement(particleSystem);
	//partical system	
//conatner for main frame
	
	var g10 = new THREE.PlaneGeometry( 42, 27, 2 );
	var m10 = new THREE.MeshBasicMaterial( {color: 0x093644, side: THREE.DoubleSide} );
	p10 = new THREE.Mesh( g10, m10 );
	p10.position.set(-17,10.5,2);
	PIEaddElement( p10 );
//container for inner part
	var g11 = new THREE.PlaneGeometry( 18, 7, 2 );
	var m11 = new THREE.MeshBasicMaterial( {color: 0x093644, side: THREE.DoubleSide} );
	p11= new THREE.Mesh( g11, m11 );
	p11.position.set(-27.7,0.55,2);
	PIEaddElement( p11 );
//container for inner part1
	var g1h = new THREE.PlaneGeometry( 18, 5, 2 );
	var m1h = new THREE.MeshBasicMaterial( {color: 0x093644, side: THREE.DoubleSide} );
	p11h= new THREE.Mesh( g1h, m1h );
	p11h.position.set(-27.7,6.6,2);
	PIEaddElement( p11h );

	//inner elements3
			var g14= new THREE.PlaneGeometry( 5, 2, 2 );
			var m14 = new THREE.MeshBasicMaterial( {color:"white", side: THREE.DoubleSide} );
			p14= new THREE.Mesh( g14, m14);
			p14.position.set(-11.3,-3.7,2);
		PIEaddElement( p14 );
	//above pipe
			var g17= new THREE.PlaneGeometry( 2, 13, 2 );
			var m17 = new THREE.MeshBasicMaterial( {color: "iron", side: THREE.DoubleSide} );
			p17 = new THREE.Mesh( g17, m17);
			p17.position.set(-14.6,1.8,2);
			PIEaddElement( p17);
		//inner horizzontal pipe1
			var g22= new THREE.PlaneGeometry( 3.2, 2, 2 );
			var m22 = new THREE.MeshBasicMaterial( {color: "iron", side: THREE.DoubleSide} );
			 p22 = new THREE.Mesh( g22, m22);
			p22.position.set(-17.1,7.3,2);
			PIEaddElement( p22);
		//attached one
			var g26= new THREE.PlaneGeometry(18, 0.2, 2 );
			var m26 = new THREE.MeshBasicMaterial( {color: "#373538", side: THREE.DoubleSide} );
			 p26= new THREE.Mesh( g26, m26);
			p26.position.set(-27.8,11.2,2);
			PIEaddElement( p26);
		//attached one2
			var g27= new THREE.PlaneGeometry(0.2, 2.3, 2 );
			var m27 = new THREE.MeshBasicMaterial( {color: "#373538", side: THREE.DoubleSide} );
			 p27= new THREE.Mesh( g27, m27);
			p27.position.set(-18.65,5.1,2);
			PIEaddElement( p27);
		//upper attached
			var g28= new THREE.PlaneGeometry(3, 9.5, 2 );
			var m28 = new THREE.MeshBasicMaterial( {color: "iron", side: THREE.DoubleSide} );
			p28= new THREE.Mesh( g28, m28);
			p28.position.set(-33.15,15.9,2);
			PIEaddElement( p28 );
		//steam pipeline1
			var g29= new THREE.PlaneGeometry( 28, 3.6, 2 );
			var m29= new THREE.MeshBasicMaterial( {color: "iron", side: THREE.DoubleSide} );
			 p29 = new THREE.Mesh( g29, m29);
			p29.position.set(-17.7,18.9,2);
			PIEaddElement( p29 );
		//steam pipeline2
			var g30= new THREE.PlaneGeometry(18, 0.2, 2 );
			var m30 = new THREE.MeshBasicMaterial( {color: "#373538", side: THREE.DoubleSide} );
			 p30= new THREE.Mesh( g30, m30);
			p30.position.set(-27.7,4.1,2);
			PIEaddElement( p30);
		//steam pipeline2
			var g15= new THREE.PlaneGeometry(0.2, 3, 2 );
			var m15 = new THREE.MeshBasicMaterial( {color: "#373538", side: THREE.DoubleSide} );
			 p15= new THREE.Mesh( g15, m15);
			p15.position.set(-18.7,9.8,2);
			PIEaddElement( p15);
	//steam pipeline3
			var g31= new THREE.PlaneGeometry( 0.2, 7.2, 2 );
			var m31= new THREE.MeshBasicMaterial( {color: "#373538", side: THREE.DoubleSide} );
			 p31= new THREE.Mesh( g31, m31);
			p31.position.set(-36.8,7.7,2);
			PIEaddElement( p31);
	//staeam pipeline 4
				var g33= new THREE.PlaneGeometry(4, 7.5, 2 );
				var m33 = new THREE.MeshBasicMaterial( {color: "iron", side: THREE.DoubleSide} );
				p33= new THREE.Mesh( g33, m33);
				p33.position.set(-5.7,13.38,2);
				PIEaddElement( p33);
	//moving rectangle
				var df= new THREE.PlaneGeometry(2.9, 0.2, 2 );
				var fff = new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide} );
				cse1= new THREE.Mesh( df, fff);
				cse1.position.set(-33.2,17.3,2);
				cse1.visible=false;
				PIEaddElement( cse1);
	//moving rectangle1
				var df1= new THREE.PlaneGeometry(0.2, 3.3, 2 );
				var fff1= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide} );
				cse2= new THREE.Mesh( df1, fff1);
				cse2.position.set(-31.7,18.9,2);
				cse2.visible=false;
				PIEaddElement( cse2);
	//moving rectangle
				var df2= new THREE.PlaneGeometry(3.9, 0.2, 2 );
				var fff2 = new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide} );
				cse3= new THREE.Mesh( df2, fff2);
				cse3.position.set(-5.7,17.2,2);
				cse3.visible=false;
				PIEaddElement( cse3);
	//for rotator
			var g32= new THREE.PlaneGeometry( 12.5, 7, 2 );
			var m32= new THREE.MeshBasicMaterial( {color: "iron", side: THREE.DoubleSide} );
			p32= new THREE.Mesh( g32, m32);
			p32.position.set(-3.8,6.2,2);
			PIEaddElement( p32);
	//after steam water1
				var g34= new THREE.PlaneGeometry(1, 4.6, 2 );
				var m34 = new THREE.MeshBasicMaterial( {color: "iron", side: THREE.DoubleSide} );
				 p34= new THREE.Mesh( g34, m34);
				p34.position.set(-7.5,0.4,2);
				PIEaddElement( p34);
	//after steam water2
				var g35= new THREE.PlaneGeometry(1, 4.6, 2 );
				var m35 = new THREE.MeshBasicMaterial( {color: "iron", side: THREE.DoubleSide} );
				 p35= new THREE.Mesh( g35, m35);
				p35.position.set(0.5,0.4,2);
				PIEaddElement( p35);
	//after steam water3
				var g37= new THREE.PlaneGeometry(2.4, 1, 2 );
				var m37 = new THREE.MeshBasicMaterial( {color: "iron", side: THREE.DoubleSide} );
				 p37= new THREE.Mesh( g37, m37);
				p37.position.set(3.7,5.4,2);
				PIEaddElement( p37);
	//inner spehere
		var lk1= new THREE.SphereGeometry(0.4, 0.1, 0.1 );
			var pk1= new THREE.MeshBasicMaterial( {color: "grey", side: THREE.DoubleSide} );
			 srk1= new THREE.Mesh( lk1, pk1);
			srk1.position.set(-28.1,9.8,2);
			srk1.visible=false;
			PIEaddElement( srk1);
	//inner spehere1
		var lk2= new THREE.SphereGeometry(0.4, 0.1, 0.1 );
			var pk2= new THREE.MeshBasicMaterial( {color: "grey", side: THREE.DoubleSide} );
			 srk2= new THREE.Mesh( lk2, pk2);
			srk2.position.set(-26.1,10,2);
			srk2.visible=false;
			PIEaddElement( srk2);
	//inner spehere1
		var lk3= new THREE.SphereGeometry(0.4, 0.1, 0.1 );
			var pk3= new THREE.MeshBasicMaterial( {color: "grey", side: THREE.DoubleSide} );
			 srk3= new THREE.Mesh( lk3, pk3);
			srk3.position.set(-25.1,9.6,2);
			srk3.visible=false;
			PIEaddElement( srk3);
	//inner spehere1
		var lk4= new THREE.SphereGeometry(0.4, 0.1, 0.1 );
			var pk4= new THREE.MeshBasicMaterial( {color: "grey", side: THREE.DoubleSide} );
			 srk4= new THREE.Mesh( lk4, pk4);
			srk4.position.set(-29.1,7.6,2);
			srk4.visible=false;
			PIEaddElement( srk4);
	//inner spehere1
		var lk5= new THREE.SphereGeometry(0.4, 0.1,0.1 );
			var pk5= new THREE.MeshBasicMaterial( {color: "grey", side: THREE.DoubleSide} );
			 srk5= new THREE.Mesh( lk5, pk5);
			srk5.position.set(-32.5,12.6,2);
			srk5.visible=false;
			PIEaddElement( srk5);
	//inner spehere1
		var lk6= new THREE.SphereGeometry(0.4, 0.1, 0.1 );
			var pk6= new THREE.MeshBasicMaterial( {color: "grey", side: THREE.DoubleSide} );
			 srk6=new THREE.Mesh( lk6, pk6);
			srk6.position.set(-33.5,13.6,2);
			srk6.visible=false;
			PIEaddElement( srk6);
	//inner spehere1
		var lk7= new THREE.SphereGeometry(0.4, 0.1, 0.1 );
			var pk7= new THREE.MeshBasicMaterial( {color: "grey", side: THREE.DoubleSide} );
			 srk7=new THREE.Mesh( lk7, pk7);
			srk7.position.set(-32.5,14.6,2);
			srk7.visible=false;
			PIEaddElement( srk7);
	//inner spehere2
		var lk8= new THREE.SphereGeometry(0.4, 0.1, 0.1);
			var pk8= new THREE.MeshBasicMaterial( {color: "grey", side: THREE.DoubleSide} );
			 srk8=new THREE.Mesh( lk8, pk8);
			srk8.position.set(-33.5,12.3,2);
			srk8.visible=false;
			PIEaddElement( srk8);
	//inner spehere4
		var lk9= new THREE.SphereGeometry(0.4, 0.1, 0.1 );
			var pk9= new THREE.MeshBasicMaterial( {color: "grey", side: THREE.DoubleSide} );
			 srk9=new THREE.Mesh( lk9, pk9);
			srk9.position.set(-35.5,10.3,2);
			srk9.visible=false;
			PIEaddElement( srk9);
	//inner spehere5
		var lk10= new THREE.SphereGeometry(0.4, 0.1,0.1 );
			var pk10= new THREE.MeshBasicMaterial( {color: "grey", side: THREE.DoubleSide} );
			 srk10=new THREE.Mesh( lk10, pk10);
			srk10.position.set(-34,10,2);
			srk10.visible=false;
			PIEaddElement( srk10);
	//for generator
			var g36= new THREE.PlaneGeometry( 7, 11, 2 );
			var m36= new THREE.MeshBasicMaterial( {color: 0x093644, side: THREE.DoubleSide} );
			 p36= new THREE.Mesh( g36, m36);
			p36.position.set(8,6,2);
			PIEaddElement( p36);
	//for innergenerator
			var g38= new THREE.PlaneGeometry( 5, 8, 2 );
			var m38= new THREE.MeshBasicMaterial( {color: "#556B2F", side: THREE.DoubleSide} );
			p38= new THREE.Mesh( g38, m38);
			p38.position.set(8,6,2);
			PIEaddElement( p38);
   //water 
    var geometry = new THREE.PlaneGeometry( 20, 8, 2 );
var material = new THREE.MeshBasicMaterial( {color: 0x0066FF, side: THREE.DoubleSide} );
var plane = new THREE.Mesh( geometry, material );
plane.position.set(-44.4,-10,2);
PIEaddElement( plane );
  	//water pipeline1
	  		 var g1= new THREE.PlaneGeometry( 37, 0.9, 2 );
			var m1 = new THREE.MeshBasicMaterial( {color: "#F8F8FF", side: THREE.DoubleSide} );
			p1 = new THREE.Mesh( g1, m1);
			p1.position.set(-16,-12,2);
			PIEaddElement( p1 );
  	
  	//water pipeline2
  	
  		var g2= new THREE.PlaneGeometry( 26, 0.9, 2 );
		var m2 = new THREE.MeshBasicMaterial( {color:" #F8F8FF", side: THREE.DoubleSide} );
		 p2 = new THREE.Mesh( g2, m2);
			p2.position.set(-21.5,-9,2);
			PIEaddElement( p2 );
  	//water pipeline for upperpart
  		var g3= new THREE.PlaneGeometry( 0.9, 6.5, 2 );
		var m3 = new THREE.MeshBasicMaterial( {color: "#F8F8FF", side: THREE.DoubleSide} );
		p3 = new THREE.Mesh( g3, m3);
			p3.position.set(-8.4,-6.2,2);
			PIEaddElement( p3 );
	
	//water pipeline for upperpart2
  			var g4= new THREE.PlaneGeometry( 0.9, 8.5, 2 );
		var m4 = new THREE.MeshBasicMaterial( {color: "#F8F8FF", side: THREE.DoubleSide} );
		 p4= new THREE.Mesh( g4, m4);
			p4.position.set(2.1,-7.31,2);
			PIEaddElement( p4 );
	//water big
			var g343= new THREE.PlaneGeometry( 11.6, 6.3, 2 );
			var m343= new THREE.MeshBasicMaterial( {color: "#F8F8FF", side: THREE.DoubleSide} );
			pr= new THREE.Mesh( g343, m343);
			pr.position.set(-3.2,-3.1,2);
			PIEaddElement( pr);

	//coal pipiline1
  			var g5= new THREE.PlaneGeometry( 1, 8, 2 );
			var m5 = new THREE.MeshBasicMaterial( {color: "#3CB371" ,side: THREE.DoubleSide} );
			var p5= new THREE.Mesh( g5, m5);
			p5.position.set(-52.5,0.95,2);
			PIEaddElement( p5);
	//coal pipiline2
	
  			var g6= new THREE.PlaneGeometry( 1, 8, 2 );
			var m6 = new THREE.MeshBasicMaterial( {color: "#6b3123", side: THREE.DoubleSide} );
			var p6= new THREE.Mesh( g5, m5);
			p6.position.set(-49,0.95,2);
			PIEaddElement( p6);
			
	//coal container
	
			var g7= new THREE.PlaneGeometry( 7, 4, 2 );
			var m7 = new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide} );
			var p7= new THREE.Mesh( g7, m7);
			p7.position.set(-50.7,4.6,2);
			PIEaddElement( p7);
			
	//coal pipeline main
			var g8= new THREE.PlaneGeometry( 11.5, 0.62, 2 );
			var m8 = new THREE.MeshBasicMaterial( {color: "#3CB371", side: THREE.DoubleSide} );
			var p8= new THREE.Mesh( g8, m8);
			p8.position.set(-42,2.39,2);
			p8.rotation.z=Math.PI/-8.1;
			//p8.material.color = 'red';
			PIEaddElement( p8 );
	//coal blocks
	var sSphere = new THREE.BoxGeometry(0.8 ,0.8, 1) ;
	var sSphereMaterial = new THREE.MeshBasicMaterial({color : "black"}) ;
	move1 = new THREE.Mesh(sSphere, sSphereMaterial) ;
	move1.position.set(-47.1, 6, 2) ;
	move1.visible=false;
	PIEaddElement(move1) ;
	//coal block2
		var sos= new THREE.BoxGeometry(0.8 ,0.8, 1) ;
	var mos = new THREE.MeshBasicMaterial({color : "black"}) ;
	m100= new THREE.Mesh(sos, mos) ;
	m100.position.set(-47.1, 5.5, 2) ;
	m100.visible=false;
	PIEaddElement(m100) ;
	//coal block3
		var ss1= new THREE.BoxGeometry(0.8 ,0.8, 1) ;
		var mm1 = new THREE.MeshBasicMaterial({color : "black"}) ;
		m200= new THREE.Mesh(ss1, mm1) ;
		m200.position.set(-46.1, 5, 2) ;
		m200.visible=false;
		PIEaddElement(m200) ;
	//coal block4
		var ss2= new THREE.BoxGeometry(0.8 ,0.8, 1) ;
		var mm2 = new THREE.MeshBasicMaterial({color : "black"}) ;
		m300= new THREE.Mesh(ss2, mm2) ;
		m300.position.set(-45.1, 4.5, 2) ;
		m300.visible=false;
		PIEaddElement(m300) ;
	//coal block5
		var ss3= new THREE.BoxGeometry(0.8 ,0.8, 1) ;
		var mm3 = new THREE.MeshBasicMaterial({color : "black"}) ;
		m400= new THREE.Mesh(ss3, mm3) ;
		m400.position.set(-44.1, 4.1, 2) ;
		m400.visible=false;
		PIEaddElement(m400) ;
	//coal block6
		var ss4= new THREE.BoxGeometry(0.8 ,0.8, 1) ;
		var mm4 = new THREE.MeshBasicMaterial({color : "black"}) ;
		m500= new THREE.Mesh(ss4, mm4) ;
		m500.position.set(-43.1, 3.6, 2) ;
		m500.visible=false;
		PIEaddElement(m500) ;
	//coal block7
		var ss5= new THREE.BoxGeometry(0.8 ,0.8, 1) ;
		var mm5 = new THREE.MeshBasicMaterial({color : "black"}) ;
		m600= new THREE.Mesh(ss5, mm5) ;
		m600.position.set(-42.1, 3.2, 2) ;
		m600.visible=false;
		PIEaddElement(m600) ;
	//coal block8
		var ss6= new THREE.BoxGeometry(0.8 ,0.8, 1) ;
		var mm6 = new THREE.MeshBasicMaterial({color : "black"}) ;
		m700= new THREE.Mesh(ss6, mm6) ;
		m700.position.set(-41.1, 2.8, 2) ;
		m700.visible=false;
		PIEaddElement(m700) ;
	//coal block9
		var ss7= new THREE.BoxGeometry(0.8 ,0.8, 1) ;
		var mm7 = new THREE.MeshBasicMaterial({color : "black"}) ;
		m800= new THREE.Mesh(ss7, mm7) ;
		m800.position.set(-40.1, 2.1, 2) ;
		m800.visible=false;
		PIEaddElement(m800) ;
	//coal block10	
		var ss8= new THREE.BoxGeometry(0.8 ,0.8, 1) ;
		var mm8 = new THREE.MeshBasicMaterial({color : "black"}) ;
		m900= new THREE.Mesh(ss8, mm8) ;
		m900.position.set(-39.1, 1.7, 2) ;
		m900.visible=false;
		PIEaddElement(m900) ;
	//coal block11
		var ss9= new THREE.BoxGeometry(0.8 ,0.8, 1) ;
		var mm9 = new THREE.MeshBasicMaterial({color : "black"}) ;
		m1000= new THREE.Mesh(ss8, mm8) ;
		m1000.position.set(-38.1, 1.3, 2) ;
		m1000.visible=false;
		PIEaddElement(m1000) ;
	//coal block11
		var ss10= new THREE.BoxGeometry(0.8 ,0.8, 1) ;
		var mm10 = new THREE.MeshBasicMaterial({color : "black"}) ;
		m111= new THREE.Mesh(ss10, mm10) ;
		m111.position.set(-37.1, 0.9, 2) ;
		m111.visible=false;
		PIEaddElement(m111) ;
	//coal block12
		var ss11= new THREE.BoxGeometry(0.8 ,0.8, 1) ;
		var mm11 = new THREE.MeshBasicMaterial({color : "black"}) ;
		m222= new THREE.Mesh(ss11, mm11) ;
		m222.position.set(-36.1, 0.6, 2) ;
		m222.visible=false;
		PIEaddElement(m222) ;
	//coal block13
		var ss12= new THREE.BoxGeometry(0.8 ,0.8, 1) ;
		var mm12 = new THREE.MeshBasicMaterial({color : "black"}) ;
		m333= new THREE.Mesh(ss12, mm12) ;
		m333.position.set(-35.1, 0.3, 2) ;
		m333.visible=false;
		PIEaddElement(m333) ;
		//coal block14
		var ss13= new THREE.BoxGeometry(0.8 ,0.8, 1) ;
		var mm13 = new THREE.MeshBasicMaterial({color : "black"}) ;
		m444= new THREE.Mesh(ss13, mm13) ;
		m444.position.set(-34.1, -0.1, 2) ;
		m444.visible=false;
		PIEaddElement(m444) ;
		//coal block15
		var ss14= new THREE.BoxGeometry(0.8 ,0.8, 1) ;
		var mm14 = new THREE.MeshBasicMaterial({color : "black"}) ;
		m555= new THREE.Mesh(ss14, mm14) ;
		m555.position.set(-33.1, -0.5, 2) ;
		m555.visible=false;
		PIEaddElement(m555) ;
		//coal block16
		var ss15= new THREE.BoxGeometry(0.8 ,0.8, 1) ;
		var mm15 = new THREE.MeshBasicMaterial({color : "black"}) ;
		m666= new THREE.Mesh(ss15, mm15) ;
		m666.position.set(-32.1, -1.3, 2) ;
		m666.visible=false;
		PIEaddElement(m666) ;
		//coal block16
		var ss16= new THREE.BoxGeometry(0.8 ,0.8, 1) ;
		var mm16 = new THREE.MeshBasicMaterial({color : "black"}) ;
		m777= new THREE.Mesh(ss16, mm16) ;
		m777.position.set(-31.1, -2.2, 2) ;
		m777.visible=false;
		PIEaddElement(m777) ;
		//coal block16
		var ss17= new THREE.BoxGeometry(0.8 ,0.8, 1) ;
		var mm17 = new THREE.MeshBasicMaterial({color : "black"}) ;
		m888= new THREE.Mesh(ss17, mm17) ;
		m888.position.set(-30.1, -2.5, 2) ;
		m888.visible=false;
		PIEaddElement(m888);
 var p198 = new THREE.Mesh(new THREE.PlaneBufferGeometry(600, 600), new THREE.MeshLambertMaterial({specular: '87CEFA',fog: false,color: 'skyblue',shininess:12}));
	PIEaddElement( p198);
	
	//rectriction1
  			var gq= new THREE.PlaneGeometry( 0.2, 1, 2 );
			var mq = new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide} );
			 pq= new THREE.Mesh( gq, mq);
			pq.position.set(-34.5,-9,2);
			PIEaddElement( pq);
	//rectriction2
  			var gqq= new THREE.PlaneGeometry( 0.2, 1, 2 );
			var mqq= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide} );
			 pqq= new THREE.Mesh( gqq, mqq);
			pqq.position.set(-34.5,-12,2);
			PIEaddElement( pqq);
	
//generator

			//support line
				var h= new THREE.PlaneGeometry( 0.8, 6, 2 );
			var h1= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide} );
			 ph= new THREE.Mesh( h, h1);
			ph.position.set(-9,6,2);
			PIEaddElement( ph);
				//support line2
				var h1= new THREE.PlaneGeometry( 0.8, 6, 2 );
			var h11= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide} );
			var ph1= new THREE.Mesh( h1, h11);
			ph1.position.set(1.5,6,2);
			PIEaddElement( ph1);
				//support line3
				var h1= new THREE.PlaneGeometry( 1, 1, 2 );
			var h11= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide} );
			var ph1= new THREE.Mesh( h1, h11);
			ph1.position.set(-9.6,8.5,2);
			PIEaddElement( ph1);
				//support line 4
					var h2= new THREE.PlaneGeometry( 1, 1, 2 );
					var h12= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide} );
					var ph2= new THREE.Mesh( h2, h12);
					ph2.position.set(-9.6,3.5,2);
					PIEaddElement( ph2);
				//support line 5
					var h3= new THREE.PlaneGeometry( 1, 1, 2 );
					var h13= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide} );
					var ph3= new THREE.Mesh( h3, h13);
					ph3.position.set(2,8.5,2);
					PIEaddElement( ph3);
				//support line 6
					var h4= new THREE.PlaneGeometry( 1, 1, 2 );
					var h14= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide} );
					var ph4= new THREE.Mesh( h4, h14);
					ph4.position.set(2,3.5,2);
					PIEaddElement( ph4);
				//support line 7
					var h5= new THREE.PlaneGeometry( 10, 0.3, 2 );
					var h15= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide} );
					var ph5= new THREE.Mesh( h5, h15);
					ph5.position.set(-3.6,8.8,2);
					PIEaddElement( ph5);
				//support line 8
					var h6= new THREE.PlaneGeometry( 10, 0.3, 2 );
					var h16= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide} );
					var ph6= new THREE.Mesh( h6, h16);
					ph6.position.set(-3.6,3.2,2);
					PIEaddElement( ph6);
	
//generator
	//transformer
			var ga= new THREE.PlaneGeometry( 5, 8, 2 );
			var md= new THREE.MeshBasicMaterial( {color: "#483D8B", side: THREE.DoubleSide} );
			 pb= new THREE.Mesh( ga, md);
			pb.position.set(19,1.6,2);
			PIEaddElement( pb);
	//support rectangle
			var gf= new THREE.PlaneGeometry( 7, 1, 2 );
					var hf= new THREE.MeshBasicMaterial( {color: "#483D8B", side: THREE.DoubleSide} );
					var phf= new THREE.Mesh( gf, hf);
					phf.position.set(19,-2.5,2);
					PIEaddElement( phf);
	//sphere
			var sw1 = new THREE.BoxGeometry( 1, 1, 1 );
			var mat = new THREE.MeshBasicMaterial( { color: "silver" } );
			 var cube = new THREE.Mesh( sw1, mat);
			cube.position.set(18,6,1);
			PIEaddElement(cube) ;
	//sphere2
			var sw2 = new THREE.BoxGeometry( 1, 1, 1 );
			var mat1 = new THREE.MeshBasicMaterial( { color: "silver" } );
			 var cube1 = new THREE.Mesh( sw2, mat1);
			cube1.position.set(20.5,6,1);
			PIEaddElement(cube1) ;
	//pole
			var sw3= new THREE.PlaneGeometry( 1, 17, 2 );
			var mat2= new THREE.MeshBasicMaterial( {color: "#AFEEEE", side: THREE.DoubleSide} );
			 var cube3= new THREE.Mesh( sw3, mat2);
			cube3.position.set(28,5.4,2);
			PIEaddElement( cube3);
	//pole2
		var sw4= new THREE.PlaneGeometry( 5, 1, 2 );
			var mat4= new THREE.MeshBasicMaterial( {color: "#AFEEEE", side: THREE.DoubleSide} );
			 var cube4= new THREE.Mesh( sw4, mat4);
			cube4.position.set(28,10.6,2);
			PIEaddElement( cube4);
	//pole3
		var sw5= new THREE.PlaneGeometry( 0.5, 1, 1 );
			var mat5= new THREE.MeshBasicMaterial( {color: "#480000", side: THREE.DoubleSide} );
			 var cube5= new THREE.Mesh( sw5, mat5);
			cube5.position.set(26.5,9.6,2);
			PIEaddElement( cube5);
	//pole3
		var sw6= new THREE.PlaneGeometry( 0.5, 1, 1 );
			var mat6= new THREE.MeshBasicMaterial( {color: "#480000", side: THREE.DoubleSide} );
			 var cube6= new THREE.Mesh( sw6, mat6);
			cube6.position.set(29.5,9.6,2);
			PIEaddElement( cube6);
	//line
			var sw7= new THREE.PlaneGeometry( 0.2, 4.3, 1 );
			var mat7= new THREE.MeshBasicMaterial( {color: "#c0c0c0", side: THREE.DoubleSide} );
			 var cube7= new THREE.Mesh( sw7, mat7);
			cube7.position.set(6.5,-0.2,2);
			PIEaddElement( cube7);
	//line		
			var sw8= new THREE.PlaneGeometry( 6, 0.2, 1 );
			var mat8= new THREE.MeshBasicMaterial( {color: "#c0c0c0", side: THREE.DoubleSide} );
			 var cube8= new THREE.Mesh( sw8, mat8);
			cube8.position.set(9.4,-2.3,2);
			PIEaddElement( cube8);
	//line
			var sw9= new THREE.PlaneGeometry( 0.2, 10, 1 );
			var mat9= new THREE.MeshBasicMaterial( {color: "#c0c0c0", side: THREE.DoubleSide} );
			 var cube9= new THREE.Mesh( sw9, mat9);
			cube9.position.set(12.4,2.6,2);
			PIEaddElement( cube9);	
	//line		
			var sw10= new THREE.PlaneGeometry( 5.3, 0.2, 1 );
			var mat10= new THREE.MeshBasicMaterial( {color: "#c0c0c0", side: THREE.DoubleSide} );
			 var cube10= new THREE.Mesh( sw10, mat10);
			cube10.position.set(15,7.5,2);
			PIEaddElement( cube10);
	//line
			var sw11= new THREE.PlaneGeometry( 0.2, 1, 1 );
			var mat11= new THREE.MeshBasicMaterial( {color: "#c0c0c0", side: THREE.DoubleSide} );
			 var cube11= new THREE.Mesh( sw11, mat11);
			cube11.position.set(17.6,7,2);
			PIEaddElement( cube11);
	//line2
			var sw12= new THREE.PlaneGeometry( 0.2, 3.2, 1 );
			var mat12= new THREE.MeshBasicMaterial( {color: "#c0c0c0", side: THREE.DoubleSide} );
			 var cube12= new THREE.Mesh( sw12, mat12);
			cube12.position.set(19.9,8.1,2);
			PIEaddElement( cube12);
	//line3
			var sw13= new THREE.PlaneGeometry( 6.55, 0.2, 1 );
			var mat13= new THREE.MeshBasicMaterial( {color: "#c0c0c0", side: THREE.DoubleSide} );
			 var cube13= new THREE.Mesh( sw13, mat13);
			cube13.position.set(23,9.6,2);
			PIEaddElement( cube13);
	//line4
			var sw14= new THREE.PlaneGeometry( 6.55, 0.2, 1 );
			var mat14= new THREE.MeshBasicMaterial( {color: "#c0c0c0", side: THREE.DoubleSide} );
			 var cube14= new THREE.Mesh( sw14, mat14);
			cube14.position.set(33,9.6,2);
			PIEaddElement( cube14);
	//line5
			var sw15= new THREE.PlaneGeometry( 0.2, 3, 1 );
			var mat15= new THREE.MeshBasicMaterial( {color: "#c0c0c0", side: THREE.DoubleSide} );
			 var cube15= new THREE.Mesh( sw15, mat15);
			cube15.position.set(36.4,11,2);
			PIEaddElement( cube15);
	//sphere
		var sph = new THREE.SphereGeometry(0.3, 0.3, 1 );
		l1 = new THREE.PointLight( 0xff0040, 2, 50 );
		l1.add( new THREE.Mesh( sph, new THREE.MeshBasicMaterial( { color:  0xffffff } ) ) );
		l1.position.set(6.9, 0.6, 0) ;
		PIEaddElement( l1 );	
	//sphere1
		sph1 = new THREE.SphereGeometry(0.3, 0.3, 1 );
		l1e = new THREE.PointLight( 0xff0040, 5, 50 );
		l1e.add( new THREE.Mesh( sph1, new THREE.MeshBasicMaterial( { color:  0xffffff } ) ) );
		l1e.position.set(30.8, 9.8, 0) ;
		PIEaddElement( l1e);	
	//sphere2
		sph2 = new THREE.SphereGeometry(0.3, 0.3, 1 );
		l2e = new THREE.PointLight( 0xff0040, 5, 50 );
		l2e.add( new THREE.Mesh( sph2, new THREE.MeshBasicMaterial( { color:  0xffffff } ) ) );
		l2e.position.set(20.5, 6.8, 0) ;
		PIEaddElement( l2e);
	//sphere2
		sph35 = new THREE.SphereGeometry(2, 2, 15 );
		var hy=new THREE.MeshBasicMaterial( {color: "white", side: THREE.DoubleSide} );
		 l2r= new THREE.Mesh( sph35, hy);
		l2r.position.set(37.3, 14.4, 0) ;
		PIEaddElement( l2r);
	//transformer
	var srtqw= new THREE.PlaneGeometry( 1.7, 0.2, 1 );
			var mrtqw= new THREE.MeshBasicMaterial( {color: "white", side: THREE.DoubleSide} );
			 cbed12= new THREE.Mesh( srtqw, mrtqw);
			cbed12.position.set(-14.3,22.8,2);
			PIEaddElement( cbed12);
			
   var q2w= new THREE.PlaneGeometry( 1.7, 0.2, 1 );
			var q2w1= new THREE.MeshBasicMaterial( {color: "white", side: THREE.DoubleSide} );
			 sr= new THREE.Mesh( q2w, q2w1);
			sr.position.set(-44.3,-32.6,2);
			PIEaddElement( sr);
	var q2w1= new THREE.PlaneGeometry(2, 0.2, 1 );
			var q2w11= new THREE.MeshBasicMaterial( {color: "white", side: THREE.DoubleSide} );
			 sr3= new THREE.Mesh( q2w1, q2w11);
			sr3.position.set(-28.9,14.8,2);
			PIEaddElement( sr3);		
	var q2w12= new THREE.SphereGeometry(0.4, 0.1, 1 );
			var q2w112= new THREE.MeshBasicMaterial( {color: "white", side: THREE.DoubleSide} );
			 sr4= new THREE.Mesh( q2w12, q2w112);
			sr4.position.set(-28.1,14.8,2);
			PIEaddElement( sr4);	
    sr3.visible=false,sr4.visible=false;
	var c465 = new THREE.Geometry() ;
    c465.vertices.push(new THREE.Vector3(-0.1, 0.3, -1)) ;
    c465.vertices.push(new THREE.Vector3(-0.1, -0.3,-1)) ;
    c465.vertices.push(new THREE.Vector3(0.5, -0.1, -1)) ;
    c465.faces.push(new THREE.Face3(0, 1, 2)) ;
    sr1 = new THREE.Mesh(c465, new THREE.MeshBasicMaterial({color:"white"})) ;
   sr1.position.set(-44,-32.9,1);
    PIEaddElement(c465) ;
    
    var damGrt = new THREE.Geometry() ;
    damGrt.vertices.push(new THREE.Vector3(-0.1, 0.3, -1)) ;
    damGrt.vertices.push(new THREE.Vector3(-0.1, -0.3,-1)) ;
    damGrt.vertices.push(new THREE.Vector3(0.5, -0.1, -1)) ;
    damGrt.faces.push(new THREE.Face3(0, 1, 2)) ;
    damGrtMesh = new THREE.Mesh(damGrt, new THREE.MeshBasicMaterial({color:"white"})) ;
   damGrtMesh.position.set(-44,-30.1,1);
    PIEaddElement(damGrtMesh) ;
  f=new THREE.Group();
  f.add(damGrtMesh);   
  f.add(cbed12);
  f.add(sr);
 f.add(sr1);
 	f.position.set(15,21,2);
   PIEaddElement(f);
    
    
    //coal rectangle
    		var ad= new THREE.PlaneGeometry( 7, 0.2, 1 );
			var af= new THREE.MeshBasicMaterial( {color: "#3CB371", side: THREE.DoubleSide} );
			var sik= new THREE.Mesh( ad, af);
			sik.position.set(-50.6,2.5,2);
			PIEaddElement( sik);
     //coal rectangle1
    		var ad1= new THREE.PlaneGeometry( 7, 0.2, 1 );
			var af1= new THREE.MeshBasicMaterial( {color: "#3CB371", side: THREE.DoubleSide} );
			var sik1= new THREE.Mesh( ad1, af1);
			sik1.position.set(-50.6,9.5,2);
			PIEaddElement( sik1);
    //coal rectangle2
    		var ad1= new THREE.PlaneGeometry( 0.2, 7, 1 );
			var af1= new THREE.MeshBasicMaterial( {color: "#3CB371", side: THREE.DoubleSide} );
			var sik1= new THREE.Mesh( ad1, af1);
			sik1.position.set(-54.2,6,2);
			PIEaddElement( sik1);
	//coal rectangle2
    		var ad1= new THREE.PlaneGeometry( 0.2, 3.3, 1 );
			var af1= new THREE.MeshBasicMaterial( {color: "#3CB371", side: THREE.DoubleSide} );
			var sik1= new THREE.Mesh( ad1, af1);
			sik1.position.set(-47.2,7.7,2);
			PIEaddElement( sik1);//coal rectangle2
    		var ad1= new THREE.PlaneGeometry( 0.2, 1.65, 1 );
			var af1= new THREE.MeshBasicMaterial( {color: "#3CB371", side: THREE.DoubleSide} );
			var sik1= new THREE.Mesh( ad1, af1);
			sik1.position.set(-47.2,3.4,2);
			PIEaddElement( sik1);
			 var gen = new THREE.CylinderGeometry( 5.3, 5.26, 5.3, 20 );
			  texture = new THREE.ImageUtils.loadTexture("shaft.png") ;
   				 texture.visible=false;
			    var ce= new THREE.MeshBasicMaterial( {map : texture,visible:true,transparent:true,side: THREE.DoubleSide,depthWrite:true} );
			    p89 = new THREE.Mesh(gen, ce );
			    p89.position.set(-3.8, 5.9, 0) ;
			    PIEaddElement(p89) ;
		var ad2= new THREE.PlaneGeometry( 0.2, 2.8, 1 );
			var af2= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide} );
			var sik2= new THREE.Mesh( ad2, af2);
			sik2.position.set(-36.7,2.9,2);
			PIEaddElement( sik2);
		var ad2= new THREE.PlaneGeometry( 0.2, 2.9, 1 );
			var af2= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide} );
			var sik2= new THREE.Mesh( ad2, af2);
			sik2.position.set(-36.7,-1.6,2);
			PIEaddElement( sik2);
		var ad2= new THREE.PlaneGeometry( 0.2, 7, 1 );
			var af2= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide} );
			var sik2= new THREE.Mesh( ad2, af2);
			sik2.position.set(-18.7,0.5,2);
			PIEaddElement( sik2);
			//coal block15
		var ss14= new THREE.BoxGeometry(1 ,0.8, 1) ;
		var mm14 = new THREE.MeshBasicMaterial({color : "black"}) ;
		sz= new THREE.Mesh(ss14, mm14) ;
		sz.position.set(-28.1, -1.9, 2) ;
		sz.visible=false;
		PIEaddElement(sz) ;
		var ss141= new THREE.BoxGeometry(1 ,0.8, 1) ;
		var mm141 = new THREE.MeshBasicMaterial({color : "black"}) ;
		sz1= new THREE.Mesh(ss141, mm141) ;
		sz1.position.set(-30.1, -1.9, 2) ;
		sz1.visible=false;
		PIEaddElement(sz1) ;
		var ss141= new THREE.BoxGeometry(1 ,0.8, 1) ;
		var mm141 = new THREE.MeshBasicMaterial({color : "black"}) ;
		sz2= new THREE.Mesh(ss141, mm141) ;
		sz2.position.set(-29.1, -2.4, 2) ;
		sz2.visible=false;
		PIEaddElement(sz2) ;
		
		var ss1411= new THREE.BoxGeometry(9.8 ,5.2, 1) ;
		var mm1411 = new THREE.MeshBasicMaterial({color : "#373538"}) ;
		var sz22= new THREE.Mesh(ss1411, mm1411) ;
		sz22.position.set(-3.8, 5.99, 2) ;
		//sz22.visible=false;
		PIEaddElement(sz22) ;
		var ss1412= new THREE.BoxGeometry(0.8 ,4.6, 1) ;
		var mm1412 = new THREE.MeshBasicMaterial({color : "grey"}) ;
		var sz23= new THREE.Mesh(ss1412, mm1412) ;
		sz23.position.set(-6.4, 5.99, 2) ;
		//sz23.visible=false;
		PIEaddElement(sz23) ;
		var ss1413= new THREE.BoxGeometry(0.6 ,4.6, 1) ;
		var mm1413 = new THREE.MeshBasicMaterial({color : "grey"}) ;
		var sz24= new THREE.Mesh(ss1413, mm1413) ;
		sz24.position.set(0.9, 5.99, 2) ;
		//sz23.visible=false;
		PIEaddElement(sz24) ;
		var ss1414= new THREE.BoxGeometry(0.8 ,4.6, 1) ;
		var mm1414 = new THREE.MeshBasicMaterial({color : "grey"}) ;
		var sz24= new THREE.Mesh(ss1414, mm1414) ;
		sz24.position.set(-1.9, 5.99, 2) ;
		//sz24.visible=false;
		PIEaddElement(sz24) ;
		var ss1415= new THREE.BoxGeometry(0.5 ,4.6, 1) ;
		var mm1415 = new THREE.MeshBasicMaterial({color : "grey"}) ;
		var sz25= new THREE.Mesh(ss1415, mm1415) ;
		sz25.position.set(-8.5, 5.99, 2) ;
		PIEaddElement(sz25) ;
		var ss1416= new THREE.BoxGeometry(0.1 ,5.3, 1) ;
		var mm1416 = new THREE.MeshBasicMaterial({color : "black"}) ;
		var sz26= new THREE.Mesh(ss1416, mm1416) ;
		sz26.position.set(-3.8, 5.99, 2) ;
		//sz26.visible=false;
		PIEaddElement(sz26) ;
		
		PIEspeedupButton.addEventListener("click",harish);
		PIEslowdownButton.addEventListener("click",yadav);
		
		
		
    PIEsetAreaOfInterest(-30,30,20,-20);
}
function resetExperiment() {
move1.visible=false,m100.visible=false,m200.visible=false,m300.visible=false,m400.visible=false,m500.visible=false,m600.visible=false;
m700.visible=false,m800.visible=false,m900.visible=false,m1000.visible=false,m111.visible=false,m222.visible=false,m333.visible=false;
m444.visible=false,m555.visible=false,m666.visible=false,m777.visible=false,m888.visible=false,particleSystem.visible=false;
l2r.material.color.set("white"),pq.position.set(-34.5,-9,2),pqq.position.set(-34.5,-12,2),l1e.position.set(30.8, 9.8, 0),l1e.position.set(30.8, 9.8, 0),l1.position.set(6.9, 0.6, 0) ;
p17.material.color.set("white"),p22.material.color.set("white"),p28.material.color.set("white"),p29.material.color.set("white"),p33.material.color.set("white"),p27.material.color.set("#373538"),p35.material.color.set("white"),p34.material.color.set("white");
p14.material.color.set("white"),p11h.material.color.setHex("0x093644"),p2.material.color.set("white"),p3.material.color.set("white"),p4.material.color.set("white"),pr.material.color.set("white"),p1.material.color.set("white");
c1=0,c2=0,c3=0,c4=0,c5=0,c6=0,c7=0,c8=0,c9=0,c10=0,c11=0,c78=0,c19=0,crt=0,cv=0;
srk1.visible=false,srk2.visible=false,srk3.visible=false,srk4.visible=false,srk5.visible=false,srk6.visible=false,srk7.visible=false,srk8.visible=false,srk9.visible=false,srk10.visible=false;
cse1.position.set(-33.2,17.3,2),cse2.position.set(-31.7,18.9,2),cse3.position.set(-5.7,17.2,2);
cse1.visible=false,cse2.visible=false,cse3.visible=false;
l2r.material.color.set("white"),l2e.position.set(20.5, 6.8, 0) ;
p11.material.color.setHex("0x093644");
sz2.visible=false;
		sz1.visible=false;
sr3.visible=false,sr4.visible=false,sr3.position.set(-28.9,14.8,2),sr4.position.set(-28.1,14.8,2);
}
function updateExperimentElements(t, dt) {
if(t!=0)
{
if(move1.position.x > -30) {
			move1.position.x =-47.5 ;
			move1.position.y =6 ;
			move1.position.z = 2 ;
	}
	move1.visible=true;
	move1.position.x +=hb1;
	move1.position.y -= hb2 ;
if(m100.position.x > -30) {
			m100.position.x =-47.5 ;
			m100.position.y =6 ;
			m100.position.z = 2 ;
	}
	m100.visible=true;
m100.position.x +=hb1 ;
m100.position.y -= hb2 ;
	sz2.visible=true;
		sz1.visible=true;
			sz.visible=false;
if(m200.position.x > -29) {
			m200.position.x =-47.5 ;
			m200.position.y =6;
			m200.position.z = 2 ;
	}
m200.visible=true;
m200.position.x +=hb1 ;
m200.position.y -= hb2 ;
if(m300.position.x > -30) {
			m300.position.x =-47.5 ;
			m300.position.y =6 ;
			m300.position.z = 2 ;
	}
m300.visible=true;
m300.position.x +=hb1 ;
m300.position.y -= hb2 ;
if(m400.position.x > -30) {
			m400.position.x =-47.5 ;
			m400.position.y =6 ;
			m400.position.z = 2 ;
	}
m400.visible=true;
m400.position.x +=hb1;
m400.position.y -= hb2;
if(m500.position.x > -30) {
			m500.position.x =-47.5 ;
			m500.position.y =6 ;
			m500.position.z = 2 ;
	}
m500.visible=true;
m500.position.x +=hb1 ;
m500.position.y -= hb2 ;
if(m600.position.x > -30) {
			m600.position.x =-47.5 ;
			m600.position.y =6 ;
			m600.position.z = 2 ;
	}
m600.visible=true;
m600.position.x +=hb1 ;
m600.position.y -= hb2 ;
if(m700.position.x > -30) {
			m700.position.x =-47.5 ;
			m700.position.y =6;
			m700.position.z = 2 ;
	}
m700.visible=true;
m700.position.x +=hb1 ;
m700.position.y -= hb2 ;
if(m800.position.x > -30) {
			m800.position.x =-47.5 ;
			m800.position.y =6 ;
			m800.position.z = 2 ;
	}
m800.visible=true;
m800.position.x +=hb1 ;
m800.position.y -= hb2 ;
if(m900.position.x > -30) {
			m900.position.x =-47.5 ;
			m900.position.y =6;
			m900.position.z = 2 ;
	}
m900.visible=true;
m900.position.x +=hb1 ;
m900.position.y -= hb2 ;
if(m1000.position.x > -30) {
			m1000.position.x =-47.5 ;
			m1000.position.y =6;
			m1000.position.z = 2 ;
	}
m1000.visible=true;
m1000.position.x +=hb1;
m1000.position.y -= hb2;
if(m111.position.x > -30) {
			m111.position.x =-47.5 ;
			m111.position.y =6 ;
			m111.position.z = 2 ;
	}
m111.visible=true;
m111.position.x +=hb1;
m111.position.y -= hb2;
if(m222.position.x > -30) {
			m222.position.x =-47.5 ;
			m222.position.y =6 ;
			m222.position.z = 2 ;
	}
m222.visible=true;
m222.position.x +=hb1;
m222.position.y -= hb2 ;
if(m333.position.x > -30) {
			m333.position.x =-47.5 ;
			m333.position.y =6;
			m333.position.z = 2 ;
	}
m333.visible=true;
m333.position.x +=hb1 ;
m333.position.y -= hb2 ;
if(m444.position.x > -30) {
			m444.position.x =-47.5 ;
			m444.position.y =6;
			m444.position.z = 2 ;
	}
m444.visible=true;
m444.position.x +=hb1 ;
m444.position.y -= hb2 ;
if(m555.position.x > -30) {
			m555.position.x =-47.5 ;
			m555.position.y =6 ;
			m555.position.z = 2 ;
	}
m555.visible=true;
m555.position.x +=hb1 ;
m555.position.y -= hb2;
if(m666.position.x > -30) {
			m666.position.x =-47.5 ;
			m666.position.y =6 ;
			m666.position.z = 2 ;
	}
m666.visible=true;
m666.position.x +=hb1 ;
m666.position.y -= hb2;
if(m777.position.x > -30) {
			m777.position.x =-47.5 ;
			m777.position.y =6;
			m777.position.z = 2 ;
	}
m777.visible=true;
m777.position.x +=hb1 ;
m777.position.y -= hb2 ;
if(m888.position.x > -30) {
			m888.position.x =-47.5 ;
			m888.position.y =6 ;
			m888.position.z = 2 ;
	}
m888.visible=true;
m888.position.x +=hb1 ;
m888.position.y -= hb2 ;
if(c1>40)
{
	p11.material.color.set("black");
	particleSystem.visible=true;
	particleSystem.rotation.x+= 0.00001;
	if(c2==0)
	{
		pq.position.set(-34.5,-10,2);
		pqq.position.set(-34.5,-13,2);
		p1.material.color.setHex("0x0066FF");
		p2.material.color.setHex("0x0066FF");
	}
if(cbed12.position.x>-25)
{
	damGrtMesh.position.set(-44,-30,1);
	cbed12.position.set(-44.3,-29.8,2);
	sr.position.set(-44.3,-32.6,2);
	sr1.position.set(-44,-32.9,1);
}
else
{
damGrtMesh.position.x+=hy;
cbed12.position.x+=hy;
sr.position.x+=hy;
sr1.position.x+=hy;
}
c2++;
}
c1++;
if(c2>=30)
{
		p3.material.color.setHex("0x0066FF");
		p4.material.color.setHex("0x0066FF");
		pr.material.color.setHex("0x0066FF");
c3++;
		if(c3>20)
		{
			p14.material.color.setHex("0x0066FF");
		c4++;
		}
		if(c4>20)
		{
				p17.material.color.setHex("0x0066FF");
		c5++;
		}
		if(c5>20)
		{
			p22.material.color.setHex("0x0066FF");	
				p11h.material.color.setHex("0x0066FF");
			if(srk1.position.x>-32)
			{
							srk1.visible=true,srk1.visible=true,srk2.visible=true,srk3.visible=true,srk4.visible=true,srk5.visible=true,srk6.visible=true;
			srk7.visible=true,srk8.visible=true,srk9.visible=true,srk10.visible=true;
				srk1.position.x-=hy1;
				srk2.position.x-=hy1;
				srk3.position.x-=hy1;
				srk4.position.y+=hy2,srk5.position.y+=hy1,srk6.position.y+=hy1,srk7.position.y+=hy1,srk8.position.y+=hy1;
				srk9.position.x+=hy3,srk10.position.y+=hy3;
			}
			else
			{
				srk1.position.set(-28.1,9.8,2);
				srk2.position.set(-26.1,10,2);
				srk3.position.set(-25.1,9.6,2);
				srk4.position.set(-29.1,7.6,2),	srk5.position.set(-32.5,12.6,2),srk6.position.set(-33.5,13.6,2);
				srk7.position.set(-32.5,14.6,2),srk8.position.set(-33.5,12.3,2),srk9.position.set(-35.5,10.3,2);
				srk10.position.set(-34,10,2);
			}
			cse1.visible=true;
			if(cse1.position.y<20.8)
				cse1.position.y+=hy4;	
			else
			{
				p28.material.color.set("#373538");
				cse2.visible=true;
				if(cse2.position.x<-3.89)
					cse2.position.x+=hy5;	
				else
					{
							cse2.position.set(-3.89,18.9,2);
						p29.material.color.set("#373538");
						cse3.visible=true;
						if(cse3.position.y>9.70)
							cse3.position.y-=hy4;
						else
								p33.material.color.set("#373538");
					}
			}			
		c6++;	
		}
		if(c6>125)
		{
				//p27.material.color.setHex("0x0066FF");
			c7++;	
		}
	if(c7>40)
		{
				sr3.visible=true,sr4.visible=true;
				if(sr3.position.x<-9.3)
				{
					sr3.position.x+=hy;
					sr4.position.x+=hy;
				}
				else
				{
					sr3.position.set(-28.9,14.8,2);
					sr4.position.set(-28.1,14.8,2);
				}
			c8++;
		}
	if(c8>40)
		{
				p30.material.color.set("#373538");
				p31.material.color.set("#373538");
				p32.material.color.set("#373538");
			c9++;
		}
	if(c9>40)
		{
			p89.rotation.y+=hy1;
			p35.material.color.set(0x0066FF);
			p34.material.color.set(0x0066FF);
			p37.material.color.setHex("0x093644");
				if(crt==1)
			{
						l1.position.x=6.9;
						l1.position.y=0.6;
						crt=0,cv=0,cvr=0;
			}
			if(l1.position.y>7.5)
			{
				l1.position.x+=hb;
				cv=1,cvr=1;
			}
			if(l1.position.x>17.9)
			{
				l1.position.y-=hb;
				crt=1;
			}
			if(cv!=1)
			{
				if(l1.position.y > -2.60)
					l1.position.y-=hb;
			}
			if(cvr!=1)
			{
				if(l1.position.x>12.398)
				l1.position.y+=hb;
			}
			if(l1.position.y<-2.30)
				l1.position.x+=hb,cv=1;
		c19++;
		}
	if(c19>20)
		{
			if(l2e.position.x>26.8)
								{
									l2e.position.x=20.5;
									l2e.position.y=6.8;
								}
									if(l2e.position.y<9.68)
										l2e.position.y+=hb;
									else
										l2e.position.x+=hb;
		c78++;
		}
	if(c78>15)
		{
			if(l1e.position.y>12.7)
				{
					l1e.position.x=30.8;
					l1e.position.y=9.8;
				}
					if(l1e.position.x<37.3)
						l1e.position.x+=hb;
				else
						l1e.position.y+=hb;
			l2r.material.color.set("yellow");
		}
}
}
}




