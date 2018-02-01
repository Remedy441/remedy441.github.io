var c1=0,c2=1,c321=0;
var c4=2;
var gggg18,gggg19,sr7,t1,t2,t3,t4,t5,t6,t7;
var plane;
var cO27,cO1,cO2,cO3,cO4,cO5,cO6,cO7,cO8,cO9,cO10,cO11, q2w112;
var n11=0,n22=0,n33=0,n44=0,n55=0,n66=0,n77=0;
p1001;
var gg14,gg17,p39,p40;
function rese()
{
//alert("harish");
	if(n11==1)
	{
		k={

			h11:true,
			h22:false,
			h33:false,
			h44:false,
			h55:false,
			h66:false,
			h77:false,

		}
	}
		else if(n22==1)
	{
		k={

			h11:false,
			h22:true,
			h33:false,
			h44:false,
			h55:false,
			h66:false,
			h77:false,
		}
	}
	else if(n33==1)
	{
		k={

			h11:false,
			h22:false,
			h33:true,
			h44:false,
			h55:false,
			h66:false,
			h77:false,
		}
	}
	else if(n44==1)
	{
		k={

			h11:false,
			h22:false,
			h33:false,
			h44:true,
			h55:false,
			h66:false,
			h77:false,
		}
	}
	else if(n55==1)
	{
		k={

			h11:false,
			h22:false,
			h33:false,
			h44:false,
			h55:true,
			h66:false,
			h77:false,
		}
	}
	else if(n66==1)
	{
		k={

			h11:false,
			h22:false,
			h33:false,
			h44:false,
			h55:false,
			h66:true,
			h77:false,
		}
	}
	else if(n77==1)
	{
		k={

			h11:false,
			h22:false,
			h33:false,
			h44:false,
			h55:false,
			h66:false,
			h77:true,
		}
	}
	n1=PIEinputGUI.add(k,"h11").name("Ammonia");
	n2=PIEinputGUI.add(k,"h22").name("Pure water");
	n3=PIEinputGUI.add(k,"h33").name("Caustic soda");
	n4=PIEinputGUI.add(k,"h44").name("Potasium iodide");
	n5=PIEinputGUI.add(k,"h55").name("Sulphuric Acid");
	n6=PIEinputGUI.add(k,"h66").name("Washing soda");
	n7=PIEinputGUI.add(k,"h77").name("Vineger");
	n1.onChange(h1);
	n2.onChange(harish2);
	n3.onChange(h3);
	n4.onChange(h4);
	n5.onChange(h5);
	n6.onChange(h6);
	n7.onChange(h7);
PIErender();
PIEstartAnimation();
}
function  h1()
{
			n11=1,n22=0,n33=0,n44=0,n55=0,n66=0,n77=0;
			n1.remove();
			n2.remove();
			n3.remove();
			n4.remove();
			n5.remove();
			n6.remove();
			n7.remove();
			rese();
			PIErender();
	q2w112.opacity=0.3;
	plane.material.color.set("#006400");
	c4=1;
	PIErender();
}
function  harish2()
{
	n11=0,n22=1,n33=0,n44=0,n55=0,n66=0,n77=0;
			n1.remove();
			n2.remove();
			n3.remove();
			n4.remove();
			n5.remove();
			n6.remove();
			n7.remove();
			rese();
			PIErender();
	q2w112.opacity=0.3;
	plane.material.color.set('skyblue');
	sr7.visible=false;
	c4=2;
	cO1.material.color.set("green"),cO2.material.color.set("green"),cO3.material.color.set("green"),cO4.material.color.set("green"),cO5.material.color.set("green"),cO6.material.color.set("green"),cO7.material.color.set("green"),cO8.material.color.set("green"),cO9.material.color.set("green"),cO10.material.color.set("green"),cO11.material.color.set("green"),cO27.material.color.set("green");
	PIErender();
}
function  h3()
{
	n11=0,n22=0,n33=1,n44=0,n55=0,n66=0,n77=0;
			n1.remove();
			n2.remove();
			n3.remove();
			n4.remove();
			n5.remove();
			n6.remove();
			n7.remove();
			rese();
			PIErender();
	q2w112.opacity=10.3;
	plane.material.color.set("#F5F5F5");
	c4=1;
	PIErender();
}
function  h4()
{
	n11=0,n22=0,n33=0,n44=1,n55=0,n66=0,n77=0;
			n1.remove();
			n2.remove();
			n3.remove();
			n4.remove();
			n5.remove();
			n6.remove();
			n7.remove();
			rese();
			PIErender();
	 q2w112.opacity=1.3;
	PIErender();
	//alert("harish");
	plane.material.color.set("orange");
	PIErender();
}
function  h5()
{
	n11=0,n22=0,n33=0,n44=0,n55=1,n66=0,n77=0;
			n1.remove();
			n2.remove();
			n3.remove();
			n4.remove();
			n5.remove();
			n6.remove();
			n7.remove();
			rese();
			PIErender();
	q2w112.opacity=3.3;
	plane.material.color.set("#B22222");
	c4=1;
	PIErender();
}
function  h6()
{
	n11=0,n22=0,n33=0,n44=0,n55=0,n66=1,n77=0;
			n1.remove();
			n2.remove();
			n3.remove();
			n4.remove();
			n5.remove();
			n6.remove();
			n7.remove();
			rese();
			PIErender();
	q2w112.opacity=10.3;
	plane.material.color.set("#FAEBD7");
	c4=1;
	PIErender();
}
function  h7()
{
	n11=0,n22=0,n33=0,n44=0,n55=0,n66=0,n77=1;
			n1.remove();
			n2.remove();
			n3.remove();
			n4.remove();
			n5.remove();
			n6.remove();
			n7.remove();
			rese();
			PIErender();
	q2w112.opacity=.3;
	plane.material.color.set("#FF4500");
	c4=1;
	PIErender();
}
function hrt()
{
k={

		h11:false,
		h22:false,
		h33:false,
		h44:false,
		h55:false,
		h66:false,
		h77:false,
	}

	n1=PIEinputGUI.add(k,"h11").name("Ammonia");
	n2=PIEinputGUI.add(k,"h22").name("Pure water");
	n3=PIEinputGUI.add(k,"h33").name("Caustic soda");
	n4=PIEinputGUI.add(k,"h44").name("Potasium iodide");
	n5=PIEinputGUI.add(k,"h55").name("Sulphuric Acid");
	n6=PIEinputGUI.add(k,"h66").name("Washing soda");
	n7=PIEinputGUI.add(k,"h77").name("Vineger");
	n1.onChange(h1);
	n2.onChange(harish2);
	n3.onChange(h3);
	n4.onChange(h4);
	n5.onChange(h5);
	n6.onChange(h6);
	n7.onChange(h7);
}
function harish1()
{
	c1=1,c2=0;
	PIEstartAnimation();
}
function yadav1()
{
	c1=0,c2=1;
	PIEstartAnimation();
}
function toggle(event)
{
    var vector = new THREE.Vector3(( event.clientX / window.innerWidth )* 2 - 1, -( event.clientY / window.innerHeight ) * 2 + 1);

    vector = vector.unproject(PIEcamera);

    var raycaster = new THREE.Raycaster(PIEcamera.position, vector.sub(PIEcamera.position).normalize());

    var intersects = raycaster.intersectObjects(PIEscene.children,true);
    for (var i = 0; i <intersects.length; i++)
    {
		var j=intersects[i].object.name;
		//alert(j);
    		var nji=j.charAt(0);
	   	 	if(nji=='y')
	    		{
		    						c1=1;c2=0;
					    			PIEstartAnimation();
					    			
			}
		  else if(nji=='h')
		    {			
		    				c1=0;c2=1;
		    				PIEstartAnimation();
		    				
		    }	
}
}
var helpContent = "";
var infoContent = "";
function initialiseHelp() {
    helpContent = helpContent + "<h2> Electricity through solutions</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows how Electricity used for elctroplating.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The start stage</h3>";
    helpContent = helpContent + "<p>The initial state is start stage. In this everything has already set up. <br><br>you can enter the animation stage by clicking the start button.</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In this animation the experiment starts with the pure water and check electricity through  current bulb and add different solutions</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play button on the top line.</p>";
    PIEupdateHelp(helpContent);
}
function initialiseInfo() {
    infoContent = infoContent + "<h2>Electricity through solutions</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows how Electricity passed in the different solutions.</p>";
    infoContent = infoContent + "<h3>How does it work ?</h3>";
    infoContent = infoContent + "<p>Electricity through solutions is a process that uses electric current to pass thrugh the different solutions and write note down in the tabular form.</p>";
      infoContent = infoContent + "<ul>";
     infoContent = infoContent + "<p>Ammonia:</p>";
       infoContent = infoContent + "<p>Description:</p>";
        infoContent = infoContent + "<p>Clear, colourless liquid having an exceedingly pungent, characteristic odour.Upon exposure to air it loses ammonia rapidly</p>";
      infoContent = infoContent + "<p>Conductivity:</p>";
       infoContent = infoContent + "<p> An ammonia solution contains only a few ions, and it conducts electricity only poorly</p>";
        infoContent = infoContent + "<br>"
        infoContent = infoContent + "<p>PureWater:</p>";
       infoContent = infoContent + "<p>Description</p>";
      infoContent = infoContent + "<p>Pure water is usually described as tasteless and odorless, although humans have specific sensors that can feel the presence of water in their mouths,and frogs are known to be able to smell it. </p>";
       infoContent = infoContent + "<p>Conductivity</p>";
       infoContent = infoContent + "<p>Pure water contains very few ions, so it does not conduct electricity very well. When table salt is dissolved in water, the solution conducts very well</p>";
        infoContent = infoContent + "<br>"
       infoContent = infoContent + "<p>Caustic soda:</p>";
      infoContent = infoContent + "<p>Caustic soda is an inorganic compound that is a metallic base neutralized by acidic substances. The chemical name for caustic soda is sodium hydroxide, and it has the chemical formula NaOH. It is also known as lye<p>";
        infoContent = infoContent + "<p>Conductivity</p>";
       infoContent = infoContent + "<p>An Caustic soda solution contains only a lot of  ions, and it conducts electricity very strong</p>";
        infoContent = infoContent + "<br>"
 infoContent = infoContent + "<p>Potasium Iodide:</p>";
      infoContent = infoContent + "<p>Potassium iodide solution should only be used in a nuclear radiation emergency. Potassium iodide solution is a thyroid blocking agent. It works by blocking or reducing the chances that radioactive iodine, which may be breathed in or swallowed during a nuclear emergency, will enter the thyroid gland and cause damage<p>";
      infoContent = infoContent + "<p>Conductivity</p>";
       infoContent = infoContent + "<p>The  salt of potassium and iodine, potassium iodide (KI) conducts poorly,</p>";
         infoContent = infoContent + "<br>" 
       infoContent = infoContent + "<p>Sulphuric acid:</p>";
      infoContent = infoContent + "<p>Sulfuric acid (alternative spelling sulphuric acid) is a highly corrosive strong mineral acid with the molecular formula H2SO4 and molecular weight 98.079 g/mol. It is a pungent-ethereal, colorless to slightly yellow viscous liquid that is soluble in water at all concentrations<p>";
      infoContent = infoContent + "<p>Conductivity</p>";
       infoContent = infoContent + "<p>The conductivity of sulphuric acid is very high</p>";
         infoContent = infoContent + "<br>"
infoContent = infoContent + "<p>washing soda:</p>";
      infoContent = infoContent + "<p>Washing soda, also known as sodium carbonate, soda ash, or soda crystals, is in the same family as baking soda but has been processed differently. It has a much higher alkalinity, with a pH of 11, which helps it act as a solvent to remove a range of stains<p>";
       infoContent = infoContent + "<p>Conductivity</p>";
       infoContent = infoContent + "<p>The conductivity of Washing soda is very high</p>";
       infoContent = infoContent + "<br>"
      infoContent = infoContent + "<p>vineger:</p>";
      infoContent = infoContent + "<p>Vinegar is a liquid consisting of about 5–20% acetic acid (CH3COOH), water, and other trace chemicals, which may include flavorings. The acetic acid is produced by the fermentation of ethanol by acetic acid bacteria. Vinegar is now mainly used as a cooking ingredient, or in pickling<p>";
      infoContent = infoContent + "<p>Conductivity</p>";
       infoContent = infoContent + "<p>The conductivity of vineger is very poor</p>";
    PIEupdateInfo(infoContent);
}
function jik(){
alert("harish");
}
function loadExperimentElements()
{
 
    PIEsetExperimentTitle("Electricity through solutions");
    PIEsetDeveloperName("Harish Kumar Dubakula");
    PIEhideControlElement();
     PIEhideControlElement();
     initialiseHelp();
    initialiseInfo();
  // PIEaddElement(new THREE.AxisHelper(50));
  //all 2d  animation
     var text2 = document.createElement('h1');
text2.style.position = 'absolute';
text2.innerHTML = "Cathode";
text2.style.zIndex = 10;    // if you still don't see the label, try uncommenting this
text2.style.width = 500+"px";

text2.style.top = 80 + 'px';
text2.style.left = 670 + 'px';
//document.body.appendChild(text2);
   
     var text3 = document.createElement('h1');
text3.style.position = 'absolute';
text3.innerHTML = "Anode";
text3.style.zIndex = 10;    // if you still don't see the label, try uncommenting this
text3.style.width = 500+"px";

text3.style.top = 80 + 'px';
text3.style.left = 950 + 'px';
//document.body.appendChild(text3);

 t4=document.createElement('button');
t4.style.position = 'absolute';
t4.innerHTML = "Ammonia";
t4.style.fontColor="black";
t4.style.width = 100+"px";
 t4.style.top = 400 + 'px';
t4.style.left = 1100 + 'px'; 
t4.style.backgroundColor="skyblue";
t4.style["border"]="none";
//document.body.appendChild(t4);

 t5=document.createElement('button');
t5.style.position = 'absolute';
t5.innerHTML = "Pure Water";
t5.style.fontColor="black";
t5.style.width = 100+"px";
 t5.style.top = 440 + 'px';
t5.style.left = 1100 + 'px'; 
t5.style.backgroundColor="skyblue";
t5.style["border"]="none";
//document.body.appendChild(t5);


var t6=document.createElement('button');
t6.style.position = 'absolute';
t6.innerHTML = "Caustic potash";
t6.style.fontColor="black";
t6.style.width = 100+"px";
 t6.style.top = 480 + 'px';
t6.style.left = 1100 + 'px'; 
t6.style.backgroundColor="skyblue";
t6.style["border"]="none";
//document.body.appendChild(t6);
t6.addEventListener("click",h3);

var t7=document.createElement('button');
t7.style.position = 'absolute';
t7.innerHTML = "Potasium Iodide";
t7.style.fontColor="black";
t7.style.width = 100+"px";
 t7.style.top = 530 + 'px';
t7.style.left = 1100 + 'px'; 
t7.style.backgroundColor="skyblue";
t7.style["border"]="none";
//document.body.appendChild(t7);
t7.addEventListener("click",h4);

var t8=document.createElement('button');
t8.style.position = 'absolute';
t8.innerHTML = "Sulphuric Acid";
t8.style.fontColor="black";
t8.style.width = 100+"px";
 t8.style.top = 590 + 'px';
t8.style.left = 1100 + 'px'; 
t8.style.backgroundColor="skyblue";
t8.style["border"]="none";
//document.body.appendChild(t8);
PIEcontrolElem="harish";
//PIEaddControlElem(t8);
//t8.addEventListener("click",h5);

var t9=document.createElement('button');
t9.style.position = 'absolute';
//t9.style.fontColor="black";
t9.style.width = 26+"px";
t9.style.height = 8+"px";
 t9.style.top = 442 + 'px';
t9.style.left = 404+ 'px'; 
t9.style.cursor="pointer";
t9.style.zIndex = -0.5; 
t9.style.backgroundColor="#32CD32";
t9.style["border"]="none";
//document.body.appendChild(t9);

var t10=document.createElement('button');
t10.style.position = 'absolute';
//t9.style.fontColor="black";
t10.style.width = 24+"px";
t10.style.height = 8+"px";
 t10.style.top = 442 + 'px';
t10.style.left = 487+ 'px'; 
t10.style.cursor="pointer";
t10.style.zIndex = -0.5; 
t10.style.backgroundColor="red";
t10.style["border"]="none";
//document.body.appendChild(t10);
 //all 2d  animation
 var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";

//var label = document.createElement('label')
//label.htmlFor = "id";
//label.appendChild(document.createTextNode('text for label after checkbox'));
hrt();
document.body.appendChild(checkbox);
//document.body.appendChild(label);

   	 var geometry = new THREE.PlaneGeometry( 300, 550, 60 );
			var material = new THREE.MeshBasicMaterial({color:0xf48072,specular:'#1595'});
			var p1001= new THREE.Mesh( geometry, material );
			p1001.rotation.z=Math.PI/2;
			p1001.position.set(5.2,-2.5,-59);
			PIEaddElement(p1001);
			PIEsetHoverON("p1001",jik);
			PIEstartButton.onmouseover=function()
{
	//alert("harish");
	PIEstartButton.style="cursor:pointer;";
}
		//big plane 	
   		var g = new THREE.BoxGeometry( 75, 2, 40);
	var m = new THREE.MeshFaceMaterial( [new THREE.MeshBasicMaterial({color: 0xf48072}),
					new THREE.MeshBasicMaterial({color: "red"}),new THREE.MeshBasicMaterial({color: "#172035"}),new THREE.MeshBasicMaterial({color: "0xf48072"}),new THREE.MeshBasicMaterial({color: "#8FBC8F"}),new THREE.MeshBasicMaterial({color: "#172035",transparent:false})] );
 	p = new THREE.Mesh( g, m );
	p.position.set(-12.4,-0,-11);
	p.rotation.x+=0.4	;
	//p.rotation.y+=0.2;
	//p.rotation.z-=0.1;
	PIEaddElement( p );

//switch
			var g = new THREE.BoxGeometry( 12, 2, 8 );
	var m = new THREE.MeshFaceMaterial( [new THREE.MeshBasicMaterial({color: "#008B8B"}),
					new THREE.MeshBasicMaterial({color: "green"}),new THREE.MeshBasicMaterial({color: "#008B8B"}),new THREE.MeshBasicMaterial({color: "gold"}),new THREE.MeshBasicMaterial({color: "#7B68EE"}),new THREE.MeshBasicMaterial({color: "brown",transparent:false})] );
 	p = new THREE.Mesh( g, m );
	p.position.set(-18,-3,15.8);
	p.rotation.y+=0.1
	p.rotation.x+=0.1;
	p.name="mou";
//	p.rotation.z+=0.03;
	PIEaddElement( p );
//switch
//switch vertices
					port8= new THREE.CylinderGeometry( 0.5, 0.5, 1.2, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-21.9,-1.2,20);
								//port8cylinder.rotation.x += 13.5;
								PIEaddElement( port8cylinder);
		//switch vertices
		//switchvertices
					port8= new THREE.CylinderGeometry( 0.5, 0.5, 1.2, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-12.6,-1.2,20);
								//port8cylinder.rotation.x += 13.5;
								PIEaddElement( port8cylinder);
		//switchvertices
//bulb
			var g = new THREE.BoxGeometry( 10, 2, 7 );
	var m = new THREE.MeshFaceMaterial( [new THREE.MeshBasicMaterial({color: "#008B8B"}),
					new THREE.MeshBasicMaterial({color: "green"}),new THREE.MeshBasicMaterial({color: "#008B8B"}),new THREE.MeshBasicMaterial({color: "gold"}),new THREE.MeshBasicMaterial({color: "#7B68EE"}),new THREE.MeshBasicMaterial({color: "#5F9EA0",transparent:false})] );
 	p = new THREE.Mesh( g, m );
	p.position.set(-13.4,5.3,20);
	p.rotation.x+=0.3;
	//p.rotation.y+=0.2;
	PIEaddElement( p );
//bulb
//bulb vertices
					port8= new THREE.CylinderGeometry( 0.5, 0.5, 1.2, 100);
								port8material = new THREE.MeshBasicMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-17,6.4,23);
								port8cylinder.rotation.x += 0.2
								PIEaddElement( port8cylinder);
		//bulb vertices
		//bulb vertices
					port8= new THREE.CylinderGeometry( 0.5, 0.5, 1.2, 100);
								port8material = new THREE.MeshBasicMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-9.2,6.4,23);
								port8cylinder.rotation.x += 0.2;
								PIEaddElement( port8cylinder);
//bulb vertices

//beaker wall1
	
		var g1 = new THREE.PlaneGeometry( 26, 1.7, 30 );
	var m1 = new THREE.MeshBasicMaterial( {color: "#556B2F", side: THREE.DoubleSide,depthWrite:true} );
 	p1= new THREE.Mesh( g1, m1);
	p1.position.set(7.2,5,2);
	PIEaddElement(p1);
	
	//beaker wall2
	
		var g2= new THREE.PlaneGeometry( 1.5, 15, 30 );
	var m2 = new THREE.MeshBasicMaterial( {color: "#556B2F", side: THREE.DoubleSide,transparent:true} );
 	p2= new THREE.Mesh( g2, m2);
	p2.position.set(-5.2,11.8,2);
	PIEaddElement(p2);
	
		//beaker wall3
		
		var g3= new THREE.PlaneGeometry( 1.5, 15, 30 );
	var m3 = new THREE.MeshBasicMaterial( {color: "#556B2F", side: THREE.DoubleSide} );
 	p3= new THREE.Mesh( g3, m3);
	p3.position.set(20.6,11.65,2);
	PIEaddElement(p3);
	
		//beaker wall4
		
		var g4= new THREE.PlaneGeometry( 3, 1, 30 );
	var m4 = new THREE.MeshBasicMaterial( {color: "#556B2F", side: THREE.DoubleSide} );
 	p4= new THREE.Mesh( g4, m4);
	p4.position.set(-4.1,16,20);
	PIEaddElement(p4);
		//beaker wall4
		
		var g4= new THREE.PlaneGeometry( 3, 1, 30 );
	var m4 = new THREE.MeshBasicMaterial( {color: "#556B2F", side: THREE.DoubleSide} );
 	p4= new THREE.Mesh( g4, m4);
	p4.position.set(14.6,16,20);
	PIEaddElement(p4);

	 //solution
     
 	var geometry = new THREE.PlaneGeometry( 19.8, 7.3, 2 );
	var material = new THREE.MeshBasicMaterial( {color: "", transparent: true,opacity:0.7} );
 plane = new THREE.Mesh( geometry, material);
	plane.position.set(5.35,9.3,19);
	plane.visible=true;
PIEaddElement( plane );
	//solution wall
			var g4= new THREE.PlaneGeometry( 14.1, 0.4, 30 );
	var m4 = new THREE.MeshPhysicalMaterial( {color: "black", side: THREE.DoubleSide} );
 	p4= new THREE.Mesh( g4, m4);
	p4.position.set(5.2,13,20);
	PIEaddElement(p4);
	
	var g4= new THREE.PlaneGeometry( 2.1, 0.4, 30 );
	var m4 = new THREE.MeshPhysicalMaterial( {color: "black", side: THREE.DoubleSide} );
 	p4= new THREE.Mesh( g4, m4);
	p4.position.set(-3.6,13,20);
	PIEaddElement(p4);
var g4= new THREE.PlaneGeometry( 2.1, 0.4, 30 );
	var m4 = new THREE.MeshPhysicalMaterial( {color: "black", side: THREE.DoubleSide} );
 	p4= new THREE.Mesh( g4, m4);
	p4.position.set(13.9,13,20);
	PIEaddElement(p4);
	//solution wall

// copper rod cathode
	
		var g5 = new THREE.CylinderGeometry( 0.5, 0.5, 10,0 );
		var m5 = new THREE.MeshPhysicalMaterial( {color:"grey", side: THREE.DoubleSide,transparent: true,depthWrite: false,wireframe:false});
		var p5 = new THREE.Mesh( g5, m5 );
		p5.position.set(-1.5,16.3,2);
		p5.rotation.y+=5;
		PIEaddElement( p5 );
// copper rod anode1
	
		var g5 = new THREE.CylinderGeometry( 0.4, 0.4, 0.5,0 );
		var m5 = new THREE.MeshPhysicalMaterial( {color:"grey", side: THREE.DoubleSide,transparent: true,opacity:1.3,depthWrite: false,wireframe:false});
		var p5 = new THREE.Mesh( g5, m5 );
		p5.position.set(-1.5,22.1,2);
		p5.rotation.y+=5;
		PIEaddElement( p5 );	
// copper rod anode2
	
		var g5 = new THREE.CylinderGeometry( 0.1, 0.1, 1.2,0 );
		var m5 = new THREE.MeshPhysicalMaterial( {color:"grey", side: THREE.DoubleSide,transparent: true,opacity:1.3,depthWrite: false,wireframe:false});
		var p5 = new THREE.Mesh( g5, m5 );
		p5.position.set(-1.5,21.6,2);
		p5.rotation.y+=5;
		PIEaddElement( p5 );	

// copper rod anode
		
		var g6 = new THREE.CylinderGeometry( 0.5, 0.5, 10,0 );
		var m6 = new THREE.MeshPhysicalMaterial( {color:"#2D383A", side: THREE.DoubleSide,transparent: true,opacity:0.8,depthWrite: false} );
		var p6 = new THREE.Mesh( g6, m6 );
		p6.position.set(17,16.3,2);
		PIEaddElement( p6 );
// copper rod anode1
	
		var g5 = new THREE.CylinderGeometry( 0.4, 0.4, 0.5,0 );
		var m5 = new THREE.MeshPhysicalMaterial( {color:"#2D383A", side: THREE.DoubleSide,transparent: true,opacity:1.3,depthWrite: false,wireframe:false});
		var p5 = new THREE.Mesh( g5, m5 );
		p5.position.set(17,22.3,2);
		p5.rotation.y+=5;
		PIEaddElement( p5 );	
// copper rod anode2
	
		var g5 = new THREE.CylinderGeometry( 0.1, 0.1, 1.2,0 );
		var m5 = new THREE.MeshPhysicalMaterial( {color:"#2D383A", side: THREE.DoubleSide,transparent: true,opacity:1.3,depthWrite: false,wireframe:false});
		var p5 = new THREE.Mesh( g5, m5 );
		p5.position.set(17,21.6,2);
		p5.rotation.y+=5;
		PIEaddElement( p5 );	

//bulb cylinder2
						port3 = new THREE.CylinderGeometry( 1.2, 2.5, 1.3, 30 );
								port3material = new THREE.MeshPhysicalMaterial( {color: "black"} );
								port3cylinder = new THREE.Mesh( port3, port3material );
								port3cylinder.position.set(-12.4,6.4,29);
								//port3cylinder.rotation.x += 0.7;
								//port3cylinder.rotation.y +=Math.PI/(-12.1);
								PIEaddElement( port3cylinder);
		//bulb cylinder2
		
		//bulb cylinder3
								port4 = new THREE.CylinderGeometry( 2.5, 2.5, 1, 30 );
								port4material = new THREE.MeshPhysicalMaterial( {color: "black",transparent:true} );
								port4cylinder = new THREE.Mesh( port4, port4material );
								port4cylinder.position.set(-12.4,6.4,29);
								//port4cylinder.rotation.x += 0.5;
								//PIEaddElement( port4cylinder);
		//bulb cylinder3
		
		//bulb cylinder4
								port5= new THREE.CylinderGeometry( 1.2, 1.2, 1.4, 30 );
								port5material = new THREE.MeshPhysicalMaterial( {color: "black",transparent:true} );
								port5cylinder = new THREE.Mesh( port5, port5material );
								port5cylinder.position.set(-12.4,7.4,29);
								//port4cylinder.rotation.x += 0.5;
								PIEaddElement( port5cylinder);
		//bulb cylinder4
		//circle bilb
							port6=new THREE.CircleGeometry(2.5,30);
							port6.vertices.shift();
							port6material = new THREE.LineBasicMaterial( {color: "iron",transparent:true} );
								port6cylinder = new THREE.Line( port6, port6material );
								port6cylinder.position.set(-15.7,11.8,2);
								PIEaddElement( port6cylinder);
		//circle bilb
		
		//circle bilb
							var port7=new THREE.PlaneGeometry(0.1,2.5,20);
							var port7material = new THREE.MeshBasicMaterial( {color: "iron"} );
								port7cylinder = new THREE.Mesh( port7, port7material );
								port7cylinder.position.set(-15.7,10.4,12);
								PIEaddElement( port7cylinder);
		//circle bilb
		
		//circle bilb
							port8=new THREE.PlaneGeometry(0.1,2.5,20);
							port8material = new THREE.MeshBasicMaterial( {color: "iron"} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-13.5,10.4,12);
								PIEaddElement( port8cylinder);
		//circle bilb
		var i=0,x=-15.5;
		//for loop
					for(i=0;i<4;i++)
					{
								port7=new THREE.SphereGeometry(0.3,30);
								port7.vertices.shift();
								port7material = new THREE.LineBasicMaterial( {color: "iron"} );
								port7cylinder = new THREE.Line( port7, port7material );
								port7cylinder.position.set(x,11.6,12);
								x=x+0.6;
								PIEaddElement( port7cylinder);
					}
		//for loop
//voltage2
				var g = new THREE.BoxGeometry( 14, 1, 7 );
	var m = new THREE.MeshFaceMaterial( [new THREE.MeshBasicMaterial({color: "#008B8B"}),
					new THREE.MeshBasicMaterial({color: "green"}),new THREE.MeshBasicMaterial({color: "#008B8B"}),new THREE.MeshBasicMaterial({color: "gold"}),new THREE.MeshBasicMaterial({color: "#7B68EE"}),new THREE.MeshBasicMaterial({color: "#5F9EA0",transparent:false})] );
 	p = new THREE.Mesh( g, m );
	p.position.set(-30.4,1.3,20);
	p.rotation.x+=0.3;
	p.rotation.y+=0.1;
	//p.rotation.z-=0.06;
	PIEaddElement( p );
	
	var g = new THREE.BoxGeometry( 0.5, 3, 7 );
	var m = new THREE.MeshFaceMaterial( [new THREE.MeshBasicMaterial({color: "white"}),
					new THREE.MeshBasicMaterial({color: "white"}),new THREE.MeshBasicMaterial({color: "white"}),new THREE.MeshBasicMaterial({color: "white"}),new THREE.MeshBasicMaterial({color: "#7B68EE"}),new THREE.MeshBasicMaterial({color: "#5F9EA0",transparent:false})] );
 	p = new THREE.Mesh( g, m );
	p.position.set(-33.4,3.3,25);
	p.rotation.x+=0.2;
	p.rotation.y+=0.2;
	PIEaddElement( p );
	
	var g = new THREE.BoxGeometry( 0.5, 3, 7 );
	var m = new THREE.MeshFaceMaterial( [new THREE.MeshBasicMaterial({color: "white"}),
					new THREE.MeshBasicMaterial({color: "white"}),new THREE.MeshBasicMaterial({color: "white"}),new THREE.MeshBasicMaterial({color: "white"}),new THREE.MeshBasicMaterial({color: "#7B68EE"}),new THREE.MeshBasicMaterial({color: "#5F9EA0",transparent:false})] );
 	p = new THREE.Mesh( g, m );
	p.position.set(-24.2,3.7,24);
	p.rotation.x+=0.2;
	p.rotation.y+=0.1;
	PIEaddElement( p );
	
//voltage2
 
 port4 = new THREE.CylinderGeometry( 1.5, 1.5, 5.3, 30 );
								port4material = new THREE.MeshPhysicalMaterial( {color: "red",transparent:true} );
								port4cylinder = new THREE.Mesh( port4, port4material );
								port4cylinder.position.set(-29.8,3.4,26);
								port4cylinder.rotation.z+= 20.43;
								PIEaddElement( port4cylinder);	
port4 = new THREE.CylinderGeometry( 1.5, 1.5, 2.5, 30 );
								port4material = new THREE.MeshPhysicalMaterial( {color: "gold",transparent:true} );
								port4cylinder = new THREE.Mesh( port4, port4material );
								port4cylinder.position.set(-26.1,3.4,25);
								port4cylinder.rotation.z+= 20.43;
								PIEaddElement( port4cylinder);
					//signs
			var hg=new THREE.Group();
			var g39= new THREE.PlaneGeometry( 1.2, 0.3, 30 );
								var m39= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide,transparent:true,opacity:0.8,DepthWrite:false} );
					 			p39= new THREE.Mesh( g39, m39);
								p39.position.set(25.8,-4.5,20);
								PIEaddElement(p39);
								hg.add(p39);
							//+ve 
							var g40= new THREE.PlaneGeometry( 0.25, 1.2, 30 );
								var m40= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide,transparent:true,opacity:0.8,DepthWrite:false});
					 			p40= new THREE.Mesh( g40, m40);
								p40.position.set(25.8,-4.5,20);
								hg.add(p40);
							//+ve sign
								var g41= new THREE.PlaneGeometry( 1, 0.3, 30 );
								var m41= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide,transparent:true,opacity:0.8,DepthWrite:false} );
					 			p41= new THREE.Mesh( g41, m41);
								p41.position.set(-18.5,3.9,50);
								PIEaddElement(p41);
								PIEaddElement(hg);
								hg.position.set(-51.4,8.1,19);
//signs
//voltage vertices
					port8= new THREE.CylinderGeometry( 0.5, 0.5, 1.2, 100);
								port8material = new THREE.MeshBasicMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-36,1.4,23);
								port8cylinder.rotation.x += 0.2
								PIEaddElement( port8cylinder);
		//voltage vertices
		//voltage  vertices
					port8= new THREE.CylinderGeometry( 0.5, 0.5, 1.2, 100);
								port8material = new THREE.MeshBasicMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-23.4,1.9,24);
								port8cylinder.rotation.x += 0.2;
								PIEaddElement( port8cylinder);
		//voltage vertices	
	//main frame
						var	 texture = new THREE.ImageUtils.loadTexture("index.jpeg") ;
								var	port91= new THREE.CylinderGeometry( 0.8, 0.8, 1, 100);
								var port91material = new THREE.MeshLambertMaterial( {color: "green",opacity:40} );
								gggg19= new THREE.Mesh( port91, port91material );
								gggg19.position.set(-19,-0.5,23);
								gggg19.name="yadav";
								//port8cylinder.rotation.x += 13.5;
								PIEaddElement(gggg19);
						//main frame1
								var	port10= new THREE.CylinderGeometry( 0.8, 0.8, 1, 100);
								var port10material = new THREE.MeshBasicMaterial( {color: "red",transparent:false,side:THREE.BaclSide} );
								gggg18= new THREE.Mesh( port10, port10material );
								gggg18.position.set(-14.2,-1.1,23);
								gggg18.name="harish";
								//port8cylinder.rotation.x += 13.5;
								PIEaddElement(gggg18);
								
								var g39= new THREE.PlaneGeometry( 2.2, 1.3, 30 );
								var m39= new THREE.MeshBasicMaterial( {color: "#7B68EE", side: THREE.DoubleSide,transparent:true,opacity:0.8,DepthWrite:false} );
					 			p39= new THREE.Mesh( g39, m39);
								p39.position.set(39.4,-9.2,20);
								PIEaddElement(p39);
								p39.name="harish";
								hg.add(p39);
								
								var g39= new THREE.PlaneGeometry( 2.2, 1.3, 30 );
								var m39= new THREE.MeshBasicMaterial( {color: "#7B68EE", side: THREE.DoubleSide,transparent:true,opacity:0.8,DepthWrite:false} );
					 			p40= new THREE.Mesh( g39, m39);
								p40.position.set(35.4,-9.2,20);
								PIEaddElement(p40);
								p40.name="yadav";
								hg.add(p40);
//rectangle1
									port9= new THREE.CylinderGeometry( 1.4, 1.4,1,200);
								port9material = new THREE.MeshPhysicalMaterial( {color: "black",transparent:true} );
								gg14= new THREE.Mesh( port9, port9material );
								gg14.position.set(-19,-1.4,23);
								gg14.name="yadav";
								//port8cylinder.rotation.x += 13.5;
								PIEaddElement(gg14);	
							//rectangle2
									port9= new THREE.CylinderGeometry( 1.4, 1.4, 1,200);
								port9material = new THREE.MeshPhysicalMaterial( {color: "black",transparent:true} );
								gg17= new THREE.Mesh( port9, port9material );
								gg17.position.set(-14.3,-1.4,23);
								gg17.name="harish";
								//port8cylinder.rotation.x += 13.5;
								PIEaddElement(gg17);	
//lines
				var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-32.9,2.4,30 ),
										new THREE.Vector3(-36.7, 4.3, 30),
										new THREE.Vector3(-35.4, -2, 30)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

											 cO27 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO27);	
											
								var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-35.4, -2, 30),
										new THREE.Vector3(-35.4, -7.9, 20),
										new THREE.Vector3(-29.4, -2.3, 2 )
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

											 cO1= new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO1);	
								var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-29.4, -2.3, 2  ),
										new THREE.Vector3(-22.4, 1.9, 2),
										new THREE.Vector3(-26.4, -2.3, 2 )
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

											 cO2 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO2);	
									var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-23.4,1.9,24),
										new THREE.Vector3(-22.4,6.1,24),
										new THREE.Vector3(-20.9,1.9,24 )
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

										 cO3 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO3);	
											
									var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-20.9,1.9,24  ),
										new THREE.Vector3(-19.9,0.9,24 ),
										new THREE.Vector3(-18.9,6.9,24 )
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4,side: THREE.BackSide} );

										cO4= new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO4);	
											
												var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-18.9,6.9,24),
										new THREE.Vector3(-17.5,8.9,24),
										new THREE.Vector3(-17.1,6.8,24)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

									 cO5 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO5);	
											
											var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-9.1,6.8,24),
										new THREE.Vector3(-8.1, 8.8, 23),
										new THREE.Vector3(-7.6,6,23)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

										 cO6= new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO6);	
											
											
									var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-7.6,6,23),
										new THREE.Vector3(-6.5, 4.1, 23),
										new THREE.Vector3(-6.5,17,23)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

										 cO7 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO7);	
											
									var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-6.5,17,23),
										new THREE.Vector3(-6, 18.7, 23),
										new THREE.Vector3(-2.2,17.8,23)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

										 cO8 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO8);	
									var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-6,-1.2,23),
										new THREE.Vector3(1, -11, 23),
										new THREE.Vector3(13,-1,23)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

										 cO9 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO9);	
											
											var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-12,-0.5,23),
										new THREE.Vector3(-8, 4, 23),
										new THREE.Vector3(-6,-1.2,23)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

											 cO10= new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO10);	
												var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(17,21.8,2),
										new THREE.Vector3(24, 14, 23),
										new THREE.Vector3(13,-1,23)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

											 cO11 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO11);	
											
//lines
//buld light
var q2w12= new THREE.SphereGeometry(2, 4.6, 10 );
								 q2w112= new THREE.MeshBasicMaterial( {color: "yellow", side: THREE.DoubleSide,opacity:0.3,transparent:true,depthWrite:false} );
								 sr7= new THREE.Mesh( q2w12, q2w112);
								sr7.position.set(-13.6,10.5,20);
								PIEaddElement( sr7);
								sr7.visible=false;	
//buld light
//invinsible light

									
//invinsible light
								window.addEventListener("click",toggle);
PIEstartButton.addEventListener("click",harish1);
PIEstopButton.addEventListener("click",yadav1);
t5.addEventListener("click",harish2);
t4.addEventListener("click",h1);
//harish2();
 PIEsetAreaOfInterest(-30,30,20,-20);
}
function resetExperiment() {
					n1.remove();
			n2.remove();
			n3.remove();
			n4.remove();
			n5.remove();
			n6.remove();
			n7.remove();
			k={

			h11:false,
			h22:false,
			h33:false,
			h44:false,
			h55:false,
			h66:false,
			h77:false,
		}
	n1=PIEinputGUI.add(k,"h11").name("Ammonia");
	n2=PIEinputGUI.add(k,"h22").name("Pure water");
	n3=PIEinputGUI.add(k,"h33").name("Caustic soda");
	n4=PIEinputGUI.add(k,"h44").name("Potasium iodide");
	n5=PIEinputGUI.add(k,"h55").name("Sulphuric Acid");
	n6=PIEinputGUI.add(k,"h66").name("Washing soda");
	n7=PIEinputGUI.add(k,"h77").name("Vineger");
	n1.onChange(h1);
	n2.onChange(harish2);
	n3.onChange(h3);
	n4.onChange(h4);
	n5.onChange(h5);
	n6.onChange(h6);
	n7.onChange(h7);
					c4=2,c1=0,c2=1;
					sr7.visible=false;
					gggg18.position.set(-14.2,-1.1,23);
					gggg19.position.set(-19,-0.5,23);
					plane.material.color.set("white");
					cO1.material.color.set("green"),cO2.material.color.set("green"),cO3.material.color.set("green"),cO4.material.color.set("green"),cO5.material.color.set("green"),cO6.material.color.set("green"),cO7.material.color.set("green"),cO8.material.color.set("green"),cO9.material.color.set("green"),cO10.material.color.set("green"),cO11.material.color.set("green"),cO27.material.color.set("green");
}
function updateExperimentElements(t, dt) {
	if(c1==1)
	{
			if(c4!=2)
			{
					sr7.visible=true;
					cO1.material.color.set("red"),cO2.material.color.set("red"),cO3.material.color.set("red"),cO4.material.color.set("red"),cO5.material.color.set("red"),cO6.material.color.set("red"),cO7.material.color.set("red"),cO8.material.color.set("red"),cO9.material.color.set("red"),cO10.material.color.set("red"),cO11.material.color.set("red"),cO27.material.color.set("red");
			}
			gggg18.position.set(-14.2,-0.5,23);
			gggg19.position.set(-19,-0.9,23);
	}
	else if(c2==1)
	{
				cO1.material.color.set("green"),cO2.material.color.set("green"),cO3.material.color.set("green"),cO4.material.color.set("green"),cO5.material.color.set("green"),cO6.material.color.set("green"),cO7.material.color.set("green"),cO8.material.color.set("green"),cO9.material.color.set("green"),cO10.material.color.set("green"),cO11.material.color.set("green"),cO27.material.color.set("green");
				sr7.visible=false;
					gggg18.position.set(-14.2,-0.9,23);
					gggg19.position.set(-19,-0.5,23);
				PIEstopAnimation();
	}
}












