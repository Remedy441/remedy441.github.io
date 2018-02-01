var c1=0,c2=1,c321=0;
var c4=2;
var gggg18,gggg19,sr7,t1,t2,t3,t4,t5,t6,t7,mj;
var plane;
var cO27,cO1,cO2,cO3,cO4,cO5,cO6,cO7,cO8,cO9,cO10,cO11,cO50, q2w112,c80=0,c404=0;
var cl,cl1,cl2,cl3,cl4,cl5;
var k,h11,h22,h33,h44,h55,h66,h77,n1,n2,n3,n4,n5,n6,n7;
var n11=0,n22=0,n33=0,n44=0,n55=0,n66=0,n77=0;
var port8cylinder,port8cyder;
var def=23,mi=5,ma=10;
var step=2,chan=1;
var text1,text2,port7maal;
var text100,xs=6,ys=3,zs=0;
var helpContent = "";
var infoContent = "";
function initialiseHelp() {
    helpContent = helpContent + "<h2>OHM'S LAW EXPERIMENT</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The Experiment shows how does the ohm's law works</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The start stage</h3>";
    helpContent = helpContent + "<p>The initial state is start stage. In this everything has already set up. <br><br>you can enter the animation stage by clicking the start button.</p>";
    
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In this  Animation first we allow user to pick objects and place within the clips and show it is a conductor (or) insulator by glowing the bulb </p>";
    helpContent = helpContent + "<ul>";
      helpContent = helpContent + "<br>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play button on the top line.</p>";
    PIEupdateHelp(helpContent);
}
function initialiseInfo() {
    infoContent = infoContent + "<h2>OHM'S LAW EXPERIMENT</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows How ohm's law works.</p>";
    infoContent = infoContent + "<h3>Voltmeter</h3>";
    infoContent = infoContent + "<p>A voltmeter is an instrument used for measuring electrical potential difference between two points in an electric circuit. Analog voltmeters move a pointer across a scale in proportion to the voltage of the circuit; digital voltmeters give a numerical display of voltage by use of an analog to digital converter</p>";
    infoContent = infoContent + "<h3>Ammeter</h3>";
    infoContent = infoContent + "<p> An ammeter (from Ampere Meter) is a measuring instrument used to measure the current in a circuit. Electric currents are measured in amperes (A), hence the name. Instruments used to measure smaller currents, in the milliampere or microampere range, are designated as milliammeters or microammeters</p>";
     infoContent = infoContent + "<h3>OHM'S LAW</h3>";
    infoContent = infoContent + "<p> Ohm's Law is the mathematical relationship among electric current, resistance, and voltage. The principle is named after the German scientist Georg Simon Ohm.In direct-current (DC) circuits, Ohm's Law is simple and linear. Suppose a resistance having a value of R ohms carries a current of I amperes.<br> Then the voltage across the resistor is equal to the product IR. There are two corollaries. If a DC power source providing E volts is placed across a resistance of R ohms, then the current through the resistance is equal to E/R amperes. Also, in a DC circuit, if E volts appear across a component that carries I amperes, then the resistance of that component is equal to E/I ohms.Mathematically, Ohm's Law for DC circuits can be stated as three equations:<br>1)V=IR<br>2)I=V/R</p>";
    infoContent = infoContent + "<h3>How does it work?</h3>";
    infoContent = infoContent + "<p>When we pass the current through the circuit the Bulb glows the we increse the voltage across the circuit automatically the current will increase,bulb glows according to the voltage</p>";
    PIEupdateInfo(infoContent);
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
function jik()
{
	if(chan==0)
	{
		zs++;
				if(zs==1)
				{
						zs1=xs/ys;
						zs1=parseFloat(zs).toFixed(2);
						PIEupdateTableCell(1, 0, xs);
				    		PIEupdateTableCell(1, 1, ys);
				   		PIEupdateTableCell(1, 2,2);
				}
				else if(zs==2)
				{
					zs1=xs/ys;
						zs1=parseFloat(zs).toFixed(2);
						PIEupdateTableCell(2, 0, xs);
				    		PIEupdateTableCell(2, 1, ys);
				   		PIEupdateTableCell(2, 2, 2);
				}
				else if(zs==3)
				{
					zs1=xs/ys;
						zs1=parseFloat(zs).toFixed(2);
						PIEupdateTableCell(3, 0, xs);
				    		PIEupdateTableCell(3, 1, ys);
				   		PIEupdateTableCell(3, 2, 2);
				}
				else if(zs==4)
				{
					zs1=xs/ys;
						zs1=parseFloat(zs).toFixed(2);
						PIEupdateTableCell(4, 0, xs);
				    		PIEupdateTableCell(4, 1, ys);
				   		PIEupdateTableCell(4, 2,2);
				}
				else if(zs==5)
				{
						zs1=xs/ys;
						zs1=parseFloat(zs).toFixed(2);
						PIEupdateTableCell(5, 0, xs);
				    		PIEupdateTableCell(5, 1, ys);
				   		PIEupdateTableCell(5, 2, 2);
				}
		}
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
function loadExperimentElements()
{
 
PIEsetExperimentTitle("Ohm's law Experiment");
PIEsetDeveloperName("Harish Kumar Dubakula");
//PIEaddElement(new THREE.AxisHelper(50));
initialiseHelp();
  initialiseInfo();
		//background plane
					var geometry = new THREE.PlaneGeometry( 300, 550, 60 );
					var material = new THREE.MeshBasicMaterial({color:"white",specular:'#1595'});
					var p1001= new THREE.Mesh( geometry, material );
					p1001.rotation.z=Math.PI/2;
					p1001.position.set(5.2,-2.5,-59);
					PIEaddElement(p1001);
  		//background plane	
  		
  text2w= document.createElement('h1');
			text2w.style.position = 'absolute';
			text2w.innerHTML = "Ammeter";
			text2w.style.zIndex = 10;    // if you still don't see the label, try uncommenting this
			text2w.style.width = 130+"px";
			text2w.style.height= 40+"px";
			text2w.style.top = 290 + 'px';
			text2w.style.left = 1105 + 'px';
			document.body.appendChild(text2w);
text2w1= document.createElement('h1');
			text2w1.style.position = 'absolute';
			text2w1.innerHTML = "Voltmeter";
			text2w1.style.zIndex = 10;    // if you still don't see the label, try uncommenting this
			text2w1.style.width = 130+"px";
			text2w1.style.height= 40+"px";
			text2w1.style.top = 490 + 'px';
			text2w1.style.left = 795 + 'px';
			document.body.appendChild(text2w1);
//----------------------------------------------------------------------------------------------------------------------------------------------------
			//Ammeter
			   		var g = new THREE.BoxGeometry( 12, 2, 15);
				var m = new THREE.MeshFaceMaterial( [new THREE.MeshBasicMaterial({color: 0xf48072}),
															new THREE.MeshBasicMaterial({color: 0xf48072}),
															new THREE.MeshBasicMaterial({color: "#FFD700"}),
															new THREE.MeshBasicMaterial({color: "0xf48072"}),
															new THREE.MeshBasicMaterial({color: 0xf48072}),
															new THREE.MeshBasicMaterial({color: "red",transparent:false})] );
			 	p = new THREE.Mesh( g, m );
				p.position.set(26.4,9,-11);
				p.rotation.x+=1.5;
				p.rotation.y-=0.01;
				p.rotation.z+=0.15;
				PIEaddElement( p );
			//turner
					port8= new THREE.CylinderGeometry( 1.5, 1.5, 1, 100);
								port8material = new THREE.MeshPhongMaterial( {color: "#FFD700",transparent:false} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(14.3,6.5,29);
								port8cylinder.rotation.x += 1.5;
								PIEaddElement( port8cylinder);
			//turner
			//pointer
				port8= new THREE.CylinderGeometry( 0.2, 0.2, 2.9, 100);
								port8material = new THREE.MeshPhongMaterial( {color: "yellow",transparent:true} );
								port8cyder = new THREE.Mesh( port8, port8material );
								port8cyder.position.set(14.2,6.5,30);
								port8cyder.rotation.z+= 2.7;
								port8cyder.castShadow=true;
								PIEaddElement( port8cyder);
			//pointer
			//lines
					var geometry = new THREE.PlaneGeometry( 0.2, 12, 60 );
					var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
					var p1001= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p1001.position.set(15.1,8.1,10);
					PIEaddElement(p1001);
			//lines
			//lines
					var geometry = new THREE.PlaneGeometry( 10.2, 0.2, 60 );
					var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
					var p1001= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p1001.position.set(20.2,2.1,10);
					PIEaddElement(p1001);
			//lines
			//lines
					var geometry = new THREE.PlaneGeometry( 0.2, 12.3, 60 );
					var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
					var p1001= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p1001.position.set(25.3,8.16,10);
					PIEaddElement(p1001);
			//lines
			//lines
					var geometry = new THREE.PlaneGeometry( 10.2, 0.2, 60 );
					var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
					var p1001= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p1001.position.set(20.1,14.2,10);
					PIEaddElement(p1001);
			//lines
			//lines
					var geometry = new THREE.PlaneGeometry( 1.2, 0.1, 60 );
					var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
					var p1001= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p1001.position.set(6.4,5.8,50);
					//PIEaddElement(p1001);
			//lines
			//holes
					var geometry = new THREE.SphereGeometry( 0.5, 20, 60 );
					var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
					var p1001= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p1001.position.set(16.5,3,10);
					PIEaddElement(p1001);
			//holes
			//holes
					var geometry = new THREE.SphereGeometry( 0.5, 20, 60 );
					var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
					var p1001= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p1001.position.set(19,3,10);
					PIEaddElement(p1001);
			//holes
			//holes
					var geometry = new THREE.SphereGeometry( 0.5, 20, 60 );
					var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
					var p1001= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p1001.position.set(21.5,3,10);
					PIEaddElement(p1001);
			//holes
			//holes
					var geometry = new THREE.SphereGeometry( 0.5, 20, 60 );
					var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
					var p1001= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p1001.position.set(24,3,10);
					PIEaddElement(p1001);
			//holes
			
			
			var geometry = new THREE.PlaneGeometry( 9, 3, 60 );
					var material = new THREE.MeshBasicMaterial({color:"#6B8E23",specular:'#1595'});
					var p10011= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p10011.position.set(20.2,11.7,10);
					PIEaddElement(p10011);
					
			var geometry = new THREE.PlaneGeometry( 8.9, 0.2, 60 );
					var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
					var p10011= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p10011.position.set(20.2,10.1,10);
					PIEaddElement(p10011);
					
			var geometry = new THREE.PlaneGeometry( 0.2, 3.2, 60 );
					var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
					var p10011= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p10011.position.set(15.8,11.6,10);
					PIEaddElement(p10011);
					
			var geometry = new THREE.PlaneGeometry( 8.9, 0.2, 60 );
					var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
					var p10011= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p10011.position.set(20.2,13.3,10);
					PIEaddElement(p10011);	
					
			var geometry = new THREE.PlaneGeometry( 0.2, 3.3, 60 );
					var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
					var p10011= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p10011.position.set(24.6,11.69,10);
					PIEaddElement(p10011);
					
					
			 var text11 = document.createElement('div');
			text11.style.position = 'absolute';
			//text11.innerHTML = "5";
			text11.style.zIndex = 10;    // if you still don't see the label, try uncommenting this
			text11.style.width = 130+"px";
			text11.style.height= 40+"px";
			text11.style.border = "solid black";
			text11.style.backgroundColor="#6B8E23";
			text11.style.top = 200 + 'px';
			text11.style.left = 947 + 'px';
			//document.body.appendChild(text11);
			///
			text1= document.createElement('h1');
			text1.style.position = 'absolute';
			text1.innerHTML = "3.0";
			text1.style.zIndex = 10;    // if you still don't see the label, try uncommenting this
			text1.style.width = 130+"px";
			text1.style.height= 40+"px";
			text1.style.top = 640+ 'px';
			text1.style.left = 991+ 'px';
			document.body.appendChild(text1);
			
			textw= document.createElement('h1');
			textw.style.position = 'absolute';
			textw.innerHTML = "mA";
			textw.style.zIndex = 10;    // if you still don't see the label, try uncommenting this
			textw.style.width = 130+"px";
			textw.style.height= 40+"px";
			textw.style.top = 640 + 'px';
			textw.style.left = 1049+ 'px';
			document.body.appendChild(textw);
			
			
			text100= document.createElement('button');
			text100.style.position = 'absolute';
			text100.innerHTML = "Note";
			text100.style.zIndex = 10;    // if you still don't see the label, try uncommenting this
			text100.style.width = 80+"px";
			text100.style.height= 40+"px";
			text100.style.backgroundColor="aqua";
			text100.style.top = 197 + 'px';
			text100.style.left = 20 + 'px';
			//document.body.appendChild(text100);
			//text100.addEventListener("click",jik);
			PIEaddDualCommand("Note  Reading",jik);
//----------------------------------------------------------------------------------------------------------------------------------------------------					
 //----------------------------------------------------------------------------------------------------------------------------------------------------	
// voltmeter
						var g = new THREE.BoxGeometry( 12, 2, 15);
				var m = new THREE.MeshFaceMaterial( [new THREE.MeshBasicMaterial({color: 0xf48072}),
															new THREE.MeshBasicMaterial({color: 0xf48072}),
															new THREE.MeshBasicMaterial({color: "#FFD700"}),
															new THREE.MeshBasicMaterial({color: "0xf48072"}),
															new THREE.MeshBasicMaterial({color: 0xf48072}),
															new THREE.MeshBasicMaterial({color: "red",transparent:false})] );
			 	p = new THREE.Mesh( g, m );
				p.position.set(-3.4,-9,-11);
				p.rotation.x+=1.5;
				p.rotation.y+=-0.01;
				p.rotation.z-=0.15;
				PIEaddElement( p );
			//turner
					port8= new THREE.CylinderGeometry( 1.5, 1.5, 1, 100);
								port8material = new THREE.MeshPhongMaterial( {color: "#FFD700",transparent:false} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-4,-4.5,29);
								port8cylinder.rotation.x += 1.5;
								port8cylinder.rotation.y += 1.9;
								PIEaddElement( port8cylinder);
			//turner
			//pointer
				port8= new THREE.CylinderGeometry( 0.2, 0.2, 2.9, 100);
								port8material = new THREE.MeshPhongMaterial( {color: "yellow",transparent:true} );
								port8cyder = new THREE.Mesh( port8, port8material );
								port8cyder.position.set(-4,-4.4,30);
								port8cyder.rotation.z+= 2.9;
								port8cyder.castShadow=true;
								PIEaddElement( port8cyder);
			//pointer
			//lines
					var geometry = new THREE.PlaneGeometry( 0.2, 12.2, 60 );
					var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
					var p1001= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p1001.position.set(-8.4,-6.2,10);
					PIEaddElement(p1001);
			//lines
			//lines
					var geometry = new THREE.PlaneGeometry( 9.8, 0.2, 60 );
					var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
					var p1001= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p1001.position.set(-3.6,-0.2,10);
					PIEaddElement(p1001);
			//lines
			//lines
					var geometry = new THREE.PlaneGeometry( 0.2, 12.3, 60 );
					var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
					var p1001= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p1001.position.set(1.3,-6.2,10);
					PIEaddElement(p1001);
			//lines
			//lines
					var geometry = new THREE.PlaneGeometry( 9.8, 0.2, 60 );
					var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
					var p1001= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p1001.position.set(-3.6,-12.2,10);
					PIEaddElement(p1001);
			//lines
			//lines
					var geometry = new THREE.PlaneGeometry( 1.2, 0.1, 60 );
					var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
					var p1001= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p1001.position.set(-6.4,-5.8,50);
					//PIEaddElement(p1001);
			//lines
			//holes
					var geometry = new THREE.SphereGeometry( 0.5, 20, 60 );
					var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
					var p1001= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p1001.position.set(-6.9,-11,10);
					PIEaddElement(p1001);
			//holes
			//holes
					var geometry = new THREE.SphereGeometry( 0.5, 20, 60 );
					var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
					var p1001= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p1001.position.set(-4.5,-11,10);
					PIEaddElement(p1001);
			//holes
			//holes
					var geometry = new THREE.SphereGeometry( 0.5, 20, 60 );
					var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
					var p1001= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p1001.position.set(-2,-11,10);
					PIEaddElement(p1001);
			//holes
			//holes
					var geometry = new THREE.SphereGeometry( 0.5, 20, 60 );
					var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
					var p1001= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p1001.position.set(0.5,-11,10);
					PIEaddElement(p1001);
			//holes
			var text23 = document.createElement('div');
			text23.style.position = 'absolute';
			//text2.innerHTML = "120";
			text23.style.zIndex = 10;    // if you still don't see the label, try uncommenting this
			text23.style.width = 120+"px";
			text23.style.height= 40+"px";
			text23.style.border = "solid black";
			text23.style.backgroundColor="#6B8E23";
			text23.style.top = 400 + 'px';
			text23.style.left = 615 + 'px';
			//document.body.appendChild(text23);
			
			var geometry = new THREE.PlaneGeometry( 8.8, 3, 60 );
					var material = new THREE.MeshBasicMaterial({color:"#6B8E23",specular:'#1595'});
					var p10011= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p10011.position.set(-3.55,-2.3,10);
					PIEaddElement(p10011);
					
			var geometry = new THREE.PlaneGeometry( 8.8, 0.2, 60 );
					var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
					var p10011= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p10011.position.set(-3.55,-3.9,10);
					PIEaddElement(p10011);
					
			var geometry = new THREE.PlaneGeometry( 0.2, 3.2, 60 );
					var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
					var p10011= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p10011.position.set(0.8,-2.3,10);
					PIEaddElement(p10011);
					
			var geometry = new THREE.PlaneGeometry( 8.6, 0.2, 60 );
					var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
					var p10011= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p10011.position.set(-3.55,-0.8,10);
					PIEaddElement(p10011);	
					
			var geometry = new THREE.PlaneGeometry( 0.2, 3.2, 60 );
					var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
					var p10011= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p10011.position.set(-7.8,-2.3,10);
					PIEaddElement(p10011);
					
			textw1= document.createElement('h1');
			textw1.style.position = 'absolute';
			textw1.innerHTML = "V";
			textw1.style.zIndex = 10;    // if you still don't see the label, try uncommenting this
			textw1.style.width = 130+"px";
			textw1.style.height= 40+"px";
			textw1.style.top = 640+ 'px';
			textw1.style.left = 718+ 'px';
			document.body.appendChild(textw1);
			///
			 text2 = document.createElement('h1');
			text2.style.position = 'absolute';
			text2.innerHTML = "6.0";
			text2.style.zIndex = 10;    // if you still don't see the label, try uncommenting this
			text2.style.width = 130+"px";
			text2.style.height= 40+"px";
			text2.style.top = 640+ 'px';
			text2.style.left = 648 + 'px';
			document.body.appendChild(text2);
// voltmeter
 //----------------------------------------------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------------------------------------------
  //voltage cells
  	var g = new THREE.BoxGeometry( 19, 1, 7 );
	var m = new THREE.MeshFaceMaterial( [new THREE.MeshBasicMaterial({color: "black"}),
												new THREE.MeshBasicMaterial({color: "green"}),
												new THREE.MeshBasicMaterial({color: "skyblue"}),
												new THREE.MeshBasicMaterial({color: "gold"}),
												new THREE.MeshBasicMaterial({color: 0x2F4F4F}),
												new THREE.MeshBasicMaterial({color: "0x2F4F4F",transparent:false})] );
 	p = new THREE.Mesh( g, m );
	p.position.set(-27.4,-9.3,20);
	p.rotation.x+=0.1;
	p.rotation.y+=0.1;
	p.rotation.z-=0.01;
	PIEaddElement( p );
	
	var g = new THREE.BoxGeometry( 0.5, 2.8, 2 );
	var m = new THREE.MeshFaceMaterial( [new THREE.MeshBasicMaterial({color: "black"}),
												new THREE.MeshBasicMaterial({color: "grey"}),
												new THREE.MeshBasicMaterial({color: "grey"}),
												new THREE.MeshBasicMaterial({color: "grey"}),
												new THREE.MeshBasicMaterial({color: "grey"}),
												new THREE.MeshBasicMaterial({color: "skyblue",transparent:false})] );
 	p = new THREE.Mesh( g, m );
	p.position.set(-32.7,-6.8,27);
	p.rotation.x-=0.1;
	p.rotation.y+=0.1;
	p.rotation.z-=0.001;
	PIEaddElement( p );
	
	var g = new THREE.BoxGeometry( 0.5, 2.8, 2);
	var m = new THREE.MeshFaceMaterial( [new THREE.MeshBasicMaterial({color: "black"}),
												new THREE.MeshBasicMaterial({color: "grey"}),
												new THREE.MeshBasicMaterial({color: "grey"}),
												new THREE.MeshBasicMaterial({color: "grey"}),
												new THREE.MeshBasicMaterial({color: "grey"}),
												new THREE.MeshBasicMaterial({color: "skyblue",transparent:false})] );
 	p = new THREE.Mesh( g, m );
	p.position.set(-18.5,-6.8,26);
	p.rotation.x-=0.1;
	p.rotation.y+=0.1;
	p.rotation.z-=0.001;
	PIEaddElement( p );
	//cell1
	port4 = new THREE.CylinderGeometry( 1, 1, 4.3, 30 );
								port4material = new THREE.MeshPhysicalMaterial( {color: "red",transparent:true} );
								port4cylinder = new THREE.Mesh( port4, port4material );
								port4cylinder.position.set(-30.5,-7.4,26);
								port4cylinder.rotation.z+= 20.43;
								PIEaddElement( port4cylinder);	
port4 = new THREE.CylinderGeometry( 1, 1, 3, 30 );
								port4material = new THREE.MeshPhysicalMaterial( {color: "gold",transparent:true} );
								port4cylinder = new THREE.Mesh( port4, port4material );
								port4cylinder.position.set(-27.9,-7.4,25.8);
								port4cylinder.rotation.z+= 20.43;
								PIEaddElement( port4cylinder);
		//cell1
		//cell1 needle
								port8= new THREE.CylinderGeometry( 0.5, 0.5, 0.5, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "grey",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-26.2,-7.4,25.8);
								//port8cylinder.rotation.x += 0.2;
								port8cylinder.rotation.z+= 1.6;
								PIEaddElement( port8cylinder);
		//cell1 needle
		//cell2
	port4 = new THREE.CylinderGeometry( 1, 1, 4.3, 30 );
								port4material = new THREE.MeshPhysicalMaterial( {color: "red",transparent:true} );
								port4cylinder = new THREE.Mesh( port4, port4material );
								port4cylinder.position.set(-23.7,-7.4,25.8);
								port4cylinder.rotation.z+= 20.43;
								PIEaddElement( port4cylinder);	
port4 = new THREE.CylinderGeometry( 1, 1, 3, 30 );
								port4material = new THREE.MeshPhysicalMaterial( {color: "gold",transparent:true} );
								port4cylinder = new THREE.Mesh( port4, port4material );
								port4cylinder.position.set(-20.9,-7.4,25.6);
								port4cylinder.rotation.z+= 20.43;
								PIEaddElement( port4cylinder);
		//cell2
		//cell1 needle2
								port8= new THREE.CylinderGeometry( 0.5, 0.5, 0.5, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "grey",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-19.2,-7.4,25.8);
								//port8cylinder.rotation.x += 0.2;
								port8cylinder.rotation.z+= 1.6;
								PIEaddElement( port8cylinder);
		//cell1 needle2
		//voltage vertices
					port8= new THREE.CylinderGeometry( 0.4, 0.4, 0.8, 100);
								port8material = new THREE.MeshBasicMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-33.2,-7.4,29);
								port8cylinder.rotation.x += 0.2;
								port8cylinder.rotation.z-= 0.1;
								PIEaddElement( port8cylinder);
		//voltage vertices
		//voltage  vertices
					port8= new THREE.CylinderGeometry( 0.4, 0.4, 0.8, 100);
								port8material = new THREE.MeshBasicMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-17.3,-7.4,27);
								port8cylinder.rotation.x += 0.2;
								PIEaddElement( port8cylinder);
		//voltage vertices	
		
		//signs
			var hg=new THREE.Group();
			var g39= new THREE.PlaneGeometry( 1, 0.2, 30 );
								var m39= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide,transparent:true,opacity:0.8,DepthWrite:false} );
					 			p39= new THREE.Mesh( g39, m39);
								p39.position.set(25,-14.1,20);
								PIEaddElement(p39);
								hg.add(p39);
							//+ve 
							var g40= new THREE.PlaneGeometry( 0.2, 1, 30 );
								var m40= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide,transparent:true,opacity:0.8,DepthWrite:false});
					 			p40= new THREE.Mesh( g40, m40);
								p40.position.set(25,-14.1,20);
								hg.add(p40);
							//+ve sign
								var g41= new THREE.PlaneGeometry( 0.8, 0.2, 30 );
								var m41= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide,transparent:true,opacity:0.8,DepthWrite:false} );
					 			p41= new THREE.Mesh( g41, m41);
								p41.position.set(-19.7,-2.9,50);
								PIEaddElement(p41);
								PIEaddElement(hg);
								hg.position.set(-51.4,9.1,19);
						///ber
									var hg=new THREE.Group();
			var g39= new THREE.PlaneGeometry( 1, 0.2, 30 );
								var m39= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide,transparent:true,opacity:0.8,DepthWrite:false} );
					 			p39= new THREE.Mesh( g39, m39);
								p39.position.set(30.5,-14.1,20);
								PIEaddElement(p39);
								hg.add(p39);
							//+ve 
							var g40= new THREE.PlaneGeometry( 0.2, 1, 30 );
								var m40= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide,transparent:true,opacity:0.8,DepthWrite:false});
					 			p40= new THREE.Mesh( g40, m40);
								p40.position.set(30.5,-14.1,20);
								hg.add(p40);
							//+ve sign
								var g41= new THREE.PlaneGeometry( 0.8, 0.2, 30 );
								var m41= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide,transparent:true,opacity:0.8,DepthWrite:false} );
					 			p41= new THREE.Mesh( g41, m41);
								p41.position.set(-15.1,-2.9,50);
								PIEaddElement(p41);
								PIEaddElement(hg);
								hg.position.set(-51.4,9.1,19);
						///ber
//signs
  //voltage cells
   //----------------------------------------------------------------------------------------------------------------------------------------------------	
	//----------------------------------------------------------------------------------------------------------------------------------------------------
	//resistor base
				var g = new THREE.BoxGeometry( 10, 1, 7 );
	var m = new THREE.MeshFaceMaterial( [new THREE.MeshBasicMaterial({color: "black"}),
												new THREE.MeshBasicMaterial({color: "green"}),
												new THREE.MeshBasicMaterial({color: "skyblue"}),
												new THREE.MeshBasicMaterial({color: "gold"}),
												new THREE.MeshBasicMaterial({color: 0x2F4F4F}),
												new THREE.MeshBasicMaterial({color: "0x2F4F4F",transparent:false})] );
 	p = new THREE.Mesh( g, m );
	p.position.set(-3.4,3.3,20);
	p.rotation.x+=0.1;
	p.rotation.y-=0.01;
	p.rotation.z-=0.01;
	PIEaddElement( p );
	
			//resistor
							port8= new THREE.CylinderGeometry( 0.4, 0.4, 4.2, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "aqua",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-3.4,5.2,25.4);
								port8cylinder.rotation.z+= 20.42;
								PIEaddElement( port8cylinder);
			//resistor
			var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-5.5,5.2,25.4),
										new THREE.Vector3(-7.4,5.2,25.4),
										new THREE.Vector3(-6.2,4.2,25.4)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'black',linewidth:4} );

											 cO270 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO270);
			var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-2.5,5.2,25.4),
										new THREE.Vector3(1.4,5.2,25.4),
										new THREE.Vector3(-1.2,4.2,25.4)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'black',linewidth:4} );

											 cO270 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO270);
			//resistor vertices
					port8= new THREE.CylinderGeometry( 0.2, 0.2, 1, 100);
								port8material = new THREE.MeshBasicMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(0.4,4.6,27);
								port8cylinder.rotation.x += 0.2;
								//port8cylinder.rotation.z-= 0.1;
								PIEaddElement( port8cylinder);
		//resistor vertices
		//resistor  vertices
					port8= new THREE.CylinderGeometry( 0.2, 0.2, 1, 100);
								port8material = new THREE.MeshBasicMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-7.3,4.6,27);
								port8cylinder.rotation.x += 0.2;
								PIEaddElement( port8cylinder);
		//resistor vertices
		//colors	
		var geometry = new THREE.PlaneGeometry( 0.2, 0.7, 60 );
					var material = new THREE.MeshBasicMaterial({color:"gold",specular:'#1595'});
					var p1001= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p1001.position.set(-5.1,5.2,30);
					PIEaddElement(p1001);
		//colors
		//colors	
		var geometry = new THREE.PlaneGeometry( 0.2, 0.7, 60 );
					var material = new THREE.MeshBasicMaterial({color:"red",specular:'#1595'});
					var p1001= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p1001.position.set(-4.6,5.2,30);
					PIEaddElement(p1001);
		//colors
		//colors	
		var geometry = new THREE.PlaneGeometry( 0.2, 0.7, 60 );
					var material = new THREE.MeshBasicMaterial({color:"black",specular:'#1595'});
					var p1001= new THREE.Mesh( geometry, material );
					//p1001.rotation.z=Math.PI/2;
					p1001.position.set(-4.1,5.2,30);
					PIEaddElement(p1001);
		//colors
	//resistor
//----------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------
	//bulb
 					b1 = new THREE.BoxGeometry(12.4, 2, 11.2 );
					b11 = new THREE.MeshFaceMaterial( [new THREE.MeshBasicMaterial({color: "black"}),
												new THREE.MeshBasicMaterial({color: "green"}),
												new THREE.MeshBasicMaterial({color: "skyblue"}),
												new THREE.MeshBasicMaterial({color: "gold"}),
												new THREE.MeshBasicMaterial({color: 0x2F4F4F}),
												new THREE.MeshBasicMaterial({color: "0x2F4F4F",transparent:false})] );

									
b2 = new THREE.Mesh( b1, b11 );
b2.rotation.x+=0.2;
b2.rotation.y-=-0.1;
//b2.rotation.z-=-3.8;
b2.position.set(-30,8,2);
PIEaddElement( b2 );
 //bulb
 //bulb vertices
					port8= new THREE.CylinderGeometry( 0.5, 0.5, 1.2, 100);
								port8material = new THREE.MeshBasicMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-32.8,9,10);
								//port8cylinder.rotation.x += 0.9;
								//port8cylinder.rotation.z+= 0.1;
								PIEaddElement( port8cylinder);
		//bulb vertices
		//bulb vertices
					port8= new THREE.CylinderGeometry( 0.5, 0.5, 1.2, 100);
								port8material = new THREE.MeshBasicMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-23.3,9,10);
							//	port8cylinder.rotation.x += 0.9;
							//	port8cylinder.rotation.z+= 0.1;
								PIEaddElement( port8cylinder);
//bulb vertices		
 					//bulb cylinder2
						port3 = new THREE.CylinderGeometry( 1.5, 2, 1, 30 );
								port3material = new THREE.MeshPhysicalMaterial( {color: "black"} );
								port3cylinder = new THREE.Mesh( port3, port3material );
								port3cylinder.position.set(-22.8,8.2,29);
								port3cylinder.rotation.x += 0.2;
								//port3cylinder.rotation.z+= 0.1;
								//port3cylinder.rotation.y +=Math.PI/(-12.1);
								PIEaddElement( port3cylinder);
					//bulb cylinder2
					//circle bilb
							port6=new THREE.CircleGeometry(2.5,30);
							port6.vertices.shift();
							port6material = new THREE.LineBasicMaterial( {color: "grey",transparent:true} );
								port6cylinder = new THREE.Line( port6, port6material );
								port6cylinder.position.set(-30.5,12.8,2);
								PIEaddElement( port6cylinder);
					//circle bilb
					//circle bilb
							var port7=new THREE.PlaneGeometry(0.1,2.5,20);
							var port7material = new THREE.MeshBasicMaterial( {color: "grey"} );
								port7cylinder = new THREE.Mesh( port7, port7material );
								port7cylinder.position.set(-31.8,12,2);
								PIEaddElement( port7cylinder);
		//circle bilb
		
		//circle bilb
							port8=new THREE.PlaneGeometry(0.1,2.5,20);
							port8material = new THREE.MeshBasicMaterial( {color: "grey"} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-29.2,12,2);
								PIEaddElement( port8cylinder);
		//circle bilb
		//circle bilb
		var i=0,x=-28.6;
		//for loop
					for(i=0;i<4;i++)
					{
								port7=new THREE.SphereGeometry(0.3,30);
								port7.vertices.shift();
								port7material = new THREE.LineBasicMaterial( {color: "grey"} );
								port7cylinder = new THREE.Line( port7, port7material );
								port7cylinder.position.set(x,12.4,12);
								x=x+0.6;
								PIEaddElement( port7cylinder);
					}
		//for loop
//-------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------					
 //switch
	  				v1= new THREE.BoxGeometry( 16.4, 2, 15.2 );
					v11= new THREE.MeshFaceMaterial( [new THREE.MeshBasicMaterial({color: "black"}),
												new THREE.MeshBasicMaterial({color: 0x2F4F4F}),
												new THREE.MeshBasicMaterial({color: "skyblue"}),
												new THREE.MeshBasicMaterial({color: "skyblue"}),
												new THREE.MeshBasicMaterial({color: 0x2F4F4F}),
												new THREE.MeshBasicMaterial({color: "0x2F4F4F",transparent:false})] );
										v112 = new THREE.Mesh( v1, v11 );
										v112.rotation.y+=-1.5;
										v112.rotation.z+=-3.6;
										v112.position.set(-8,21,2);
										PIEscene.add( v112 );
										
					//terminals
									//main frame
						//var	 texture = new THREE.ImageUtils.loadTexture("index.jpeg") ;
								var	port91= new THREE.CylinderGeometry( 0.8, 0.8, 0.8, 100);
								var port91material = new THREE.MeshPhysicalMaterial( {color: "green"} );
								mj= new THREE.Mesh( port91, port91material );
								mj.position.set(-10.2,18.5,25);
								mj.name="yadav";
								mj.rotation.x+=0.7;
								PIEaddElement(mj);
						//main frame1
								var	port10= new THREE.CylinderGeometry( 0.8, 0.8,0.8, 100);
								var port10material = new THREE.MeshPhysicalMaterial( {color: "red",transparent:false,side:THREE.BaclSide} );
								gggg18= new THREE.Mesh( port10, port10material );
								gggg18.position.set(-4.9,18.2,25);
								gggg18.name="harish";
								gggg18.rotation.x+=0.7;
								PIEaddElement(gggg18);
					//terminals
					//rectangles
							port9= new THREE.CylinderGeometry( 1.2, 1.2,1,200);
								port9material = new THREE.MeshPhysicalMaterial( {color: "black",transparent:true} );
								gg14= new THREE.Mesh( port9, port9material );
								gg14.position.set(-10.2,17.5,25);
								//port8cylinder.rotation.x += 13.5;
								PIEaddElement(gg14);	
								gg14.rotation.x+=0.7;
								gg14.name="chandu";
							//rectangle2
									port9= new THREE.CylinderGeometry( 1.2, 1.2, 1,200);
								port9material = new THREE.MeshPhysicalMaterial( {color: "black",transparent:true} );
								gg17= new THREE.Mesh( port9, port9material );
								gg17.position.set(-4.9,17.5,25);
								gg17.name="vignesh";
								gg17.rotation.x+=0.7;
								//port8cylinder.rotation.x += 13.5;
								PIEaddElement(gg17);	
				//rectangles
				//switch vertices
					port8= new THREE.CylinderGeometry( 0.4, 0.4, 0.8, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-12,17.5,29);
								port8cylinder.rotation.x += 0.5;
								PIEaddElement( port8cylinder);
				//switch vertices
		//switchvertices
					port8= new THREE.CylinderGeometry( 0.4, 0.4, 0.8, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-2.4,17.5,29);
								port8cylinder.rotation.x += 0.5;
								PIEaddElement( port8cylinder);
		//switchvertices
//switch
//-----------------------------------------------------------------------------------------------------------------------------------------------									
//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
	//lines
		var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-2.6,17.5,29 ),
										new THREE.Vector3(1.2,24.5,29),
										new THREE.Vector3(5.4, 3, 30)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

											 cO27 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO27);	
											
								var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(5.4, 3, 30),
										new THREE.Vector3(8.4, -6, 30),
										new THREE.Vector3(11.3, 2.7, 30)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

											 cO1= new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO1);	
								var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(24,3,10),
										new THREE.Vector3(24,-17,10),
										new THREE.Vector3(2,-15,10)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

											 cO2 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO2);	
									var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(2,-15,10),
										new THREE.Vector3(-2.4,-14,10),
										new THREE.Vector3(-1.9,-12,10)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

										 cO3 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO3);	
											
									var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(0.45,5.1,27),
										new THREE.Vector3(3.1,6.6,27),
										new THREE.Vector3(2.5,-8.6,27)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4,side: THREE.BackSide} );

										cO4= new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO4);	
											
												var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(2.5,-8.6,27),
										new THREE.Vector3(1.5,-11.6,27),
										new THREE.Vector3(-0.4,-8.6,27)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

									 cO50= new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO50);	
											
											var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-4.5,-12,10),
										new THREE.Vector3(-4.5,-22,10),
										new THREE.Vector3(-18.5,-9,10)
										);
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

										 cO5= new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO5);	
											
											var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-18.5,-9,10),
										new THREE.Vector3(-21,-7,10),
										new THREE.Vector3(-17.4,-7.5,27)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

										 cO6= new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO6);	
											
											
									var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-7.2,4.8,27),
										new THREE.Vector3(-10.8,8.6,27),
										new THREE.Vector3(-9.5,-8.6,27)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

										 cO7 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO7);	
											
									var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-9.5,-8.6,27),
										new THREE.Vector3(-7,-11.6,27),
										new THREE.Vector3(-6.5,-8.6,27)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

										 cO8 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO8);	
									var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-32.8,9.6,10),
										new THREE.Vector3(-33.2,10.4,29),
										new THREE.Vector3(-33.2,-7.4,29)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

										 cO9 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO9);	
											
											var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-12,17.5,29),
										new THREE.Vector3(-15,22.5,29),
										new THREE.Vector3(-18.9,8.4,29)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

											 cO10= new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO10);	
												var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(13,-40,10),
										new THREE.Vector3(13,20,10),
										new THREE.Vector3(13,70,10)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'black',linewidth:4} );

											 cO11 = new THREE.Line( ge5, ma5);
			
											//PIEaddElement(cO11);	
				
	//lines
//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
//sphere
			port7=new THREE.SphereGeometry(2.2,30,50);
								port7maal = new THREE.MeshBasicMaterial( {color:"yellow",opacity:0.2,transparent:true} );
								port7cyder = new THREE.Mesh( port7, port7maal );
								port7cyder.position.set(-27.7,11.95,12);
								PIEaddElement( port7cyder);
								port7cyder.visible=false;
//sphere
//cylinder
				//switch vertices
					port8= new THREE.CylinderGeometry( 0.4, 0.4, 1, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "red",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-6.6,-8.8,29);
								//port8cylinder.rotation.x += 0.5;
								PIEaddElement( port8cylinder);
				//switch vertices
				//switch vertices
					port8= new THREE.CylinderGeometry( 0.2, 0.2, 0.7, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "red",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-6.4,-8,29);
								//port8cylinder.rotation.x += 0.5;
								PIEaddElement( port8cylinder);
				//switch vertices
				//switch vertices
					port8= new THREE.CylinderGeometry( 0.4, 0.4, 1, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "red",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-4.8,-8.8,29);
								//port8cylinder.rotation.x += 0.5;
								PIEaddElement( port8cylinder);
				//switch vertices
				//switch vertices
					port8= new THREE.CylinderGeometry( 0.2, 0.2, 0.7, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "red",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-4.6,-8,29);
								//port8cylinder.rotation.x += 0.5;
								PIEaddElement( port8cylinder);
				//switch vertices
				//switch vertices
					port8= new THREE.CylinderGeometry( 0.4, 0.4, 1, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "green",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-2.5,-8.8,29);
								//port8cylinder.rotation.x += 0.5;
								PIEaddElement( port8cylinder);
				//switch vertices
				//switch vertices
					port8= new THREE.CylinderGeometry( 0.2, 0.2, 0.7, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "green",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-2.7,-8,29);
								//port8cylinder.rotation.x += 0.5;
								PIEaddElement( port8cylinder);
				//switch vertices
				//switch vertices
					port8= new THREE.CylinderGeometry( 0.4, 0.4, 1, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "green",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-0.3,-8.8,29);
								//port8cylinder.rotation.x += 0.5;
								PIEaddElement( port8cylinder);
				//switch vertices
				//switch vertices
					port8= new THREE.CylinderGeometry( 0.2, 0.2, 0.7, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "green",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-0.5,-8,29);
								//port8cylinder.rotation.x += 0.5;
								PIEaddElement( port8cylinder);
				//switch vertices
				//switch vertices
					port8= new THREE.CylinderGeometry( 0.4, 0.4, 1, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "red",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(10.6,2.2,32);
								//port8cylinder.rotation.x += 0.5;
								PIEaddElement( port8cylinder);
				//switch vertices
				//switch vertices
					port8= new THREE.CylinderGeometry( 0.2, 0.2, 0.9, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "red",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(10.8,2.8,32);
								//port8cylinder.rotation.x += 0.5;
								PIEaddElement( port8cylinder);
				//switch vertices
				//switch vertices
					port8= new THREE.CylinderGeometry( 0.4, 0.4, 1, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "green",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(16.2,2.2,32);
								//port8cylinder.rotation.x += 0.5;
								PIEaddElement( port8cylinder);
				//switch vertices
				//switch vertices
					port8= new THREE.CylinderGeometry( 0.2, 0.2, 0.9, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "green",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(16.4,2.8,32);
								//port8cylinder.rotation.x += 0.5;
								PIEaddElement( port8cylinder);
				//switch vertices
//cylinder
//obseravation table
		 PIEcreateTable("Test Table", 10, 10, true);
		    var headerRow=["|Voltage|","|Current|", "|V/I|"];
		    PIEupdateTableRow(0, headerRow);
		    PIEupdateTableCell(1, 0, 0);
		    PIEupdateTableCell(1, 1, 0);
		    PIEupdateTableCell(1, 2, 0);
		    PIEupdateTableCell(2, 0, 0);
		    PIEupdateTableCell(2, 1, 0);
		    PIEupdateTableCell(2, 2, 0);
		    PIEupdateTableCell(3, 0, 0);
		    PIEupdateTableCell(3, 1, 0);
		    PIEupdateTableCell(3, 2, 0);
		     PIEupdateTableCell(4, 0, 0);
		    PIEupdateTableCell(4, 1, 0);
		    PIEupdateTableCell(4, 2, 0);
		    PIEupdateTableCell(5, 0, 0);
		    PIEupdateTableCell(5, 1, 0);
		    PIEupdateTableCell(5, 2, 0);
		  //PIEsetRowInput(2, 8, "abcdefgh");
		    //PIEsetColumnInput(1, 5, "abcde");
		  // PIEsetCellInput(3, 2, 10, "");
		  // TestTable.position.set(15,11,10);
//obseravation table
PIEaddInputSlider("Volatge",5,hare3,mi,20,step)
//PIEaddInputSlider("Current",5,hare4,mi,20,step)
								//PIErender();
							//PIEstartAnimation();
window.addEventListener("click",toggle);
PIEstartButton.addEventListener("click",harish1);
PIEstopButton.addEventListener("click",yadav1);
PIEcamera.position.set(70,3,10);
 PIEsetAreaOfInterest(-30,30,20,-20);
}
function resetExperiment() {
zs=0;
//PIEaddInputSlider("Volatge",5,hare3,mi,20,step)
mi=5;
hare3(5);
   PIEupdateTableCell(1, 0, 0);
		    PIEupdateTableCell(1, 1, 0);
		    PIEupdateTableCell(1, 2, 0);
		    PIEupdateTableCell(2, 0, 0);
		    PIEupdateTableCell(2, 1, 0);
		    PIEupdateTableCell(2, 2, 0);
		    PIEupdateTableCell(3, 0, 0);
		    PIEupdateTableCell(3, 1, 0);
		    PIEupdateTableCell(3, 2, 0);
		     PIEupdateTableCell(4, 0, 0);
		    PIEupdateTableCell(4, 1, 0);
		    PIEupdateTableCell(4, 2, 0);
		    PIEupdateTableCell(5, 0, 0);
		    PIEupdateTableCell(5, 1, 0);
		    PIEupdateTableCell(5, 2, 0);
					mj.position.set(-10.2,18.5,25);
					gggg18.position.set(-4.9,18.2,25);
cO1.material.color.set("green"),cO2.material.color.set("green"),cO3.material.color.set("green"),cO4.material.color.set("green"),cO5.material.color.set("green"),cO6.material.color.set("green"),cO7.material.color.set("green"),cO8.material.color.set("green"),cO9.material.color.set("green"),cO10.material.color.set("green"),cO11.material.color.set("green"),cO27.material.color.set("green"),cO50.material.color.set("green");
}
function updateExperimentElements(t, dt) {
		if(t!=0)
		{
				if(c1==1)
				{
						chan=0;
						text1.style.top = 208+ 'px';
						textw.style.top = 208 + 'px';
						textw1.style.top = 410+ 'px';
						text2.style.top = 410+ 'px';
					cO1.material.color.set("red"),cO2.material.color.set("red"),cO3.material.color.set("red"),cO4.material.color.set("red"),cO5.material.color.set("red"),cO6.material.color.set("red"),cO7.material.color.set("red"),cO8.material.color.set("red"),cO9.material.color.set("red"),cO10.material.color.set("red"),cO11.material.color.set("red"),cO27.material.color.set("red"),cO50.material.color.set("red");
					port7cyder.visible=true;
					mj.position.set(-10.2,18.2,25);
						gggg18.position.set(-4.9,18.5,25);
				}
				else if(c2==1)
				{
						chan=1;
						cO1.material.color.set("green"),cO2.material.color.set("green"),cO3.material.color.set("green"),cO4.material.color.set("green"),cO5.material.color.set("green"),cO6.material.color.set("green"),cO7.material.color.set("green"),cO8.material.color.set("green"),cO9.material.color.set("green"),cO10.material.color.set("green"),cO11.material.color.set("green"),cO27.material.color.set("green"),cO50.material.color.set("green");
						port7cyder.visible=false;
						mj.position.set(-10.2,18.5,25);
					gggg18.position.set(-4.9,18.2,25);
					textw1.style.top = 640+ 'px';
						text2.style.top = 640+ 'px';
						text1.style.top = 640+ 'px';
						textw.style.top = 640 + 'px';
						PIEstopAnimation();
				}
		}
}
function hare3(newValue)
{
	xs=newValue;
	ys=xs/2;
	port7maal .opacity=newValue/13;
	newValue=parseFloat(newValue).toFixed(1);
	text2.innerHTML=newValue;
	newValue=newValue/2;
	newValue=parseFloat(newValue).toFixed(1);
	text1.innerHTML=newValue;
}
