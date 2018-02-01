var c1=0,c2=1,c321=0;
var c4=2;
var gggg18,gggg19,sr7,t1,t2,t3,t4,t5,t6,t7,mj;
var plane;
var cO27,cO1,cO2,cO3,cO4,cO5,cO6,cO7,cO8,cO9,cO10,cO11, q2w112,c80=0,c404=0;
var p1001;
var p4014,p4013;
var bb=0;
var c4=1,port7cyder;
var cl,cl1,cl2,cl21,cl22,cl23,cl24,n8,n9,n10;
//var  cO111 , cO112, cO113, cO114, cO115, cO116, cO117, cO118, cO119,piss;
var k,h11,h22,h33,h44,h55,h66,h77,h88,h99,h10,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10;
var n11=0,n22=0,n33=0,n44=0,n55=0,n66=0,n77=0,n88=0,n99=0,n10=0;
var helpContent = "";
var infoContent = "";
function initialiseHelp() {
    helpContent = helpContent + "<h2>Conductors and insulators</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The Experiment shows what aredifferent types of Conductors and insulators ,and what happened when we close the circuit with condutor and insulator.</p>";
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
    infoContent = infoContent + "<h2>Conductors and insulators</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows Difference between Conductors and insulators.</p>";
    infoContent = infoContent + "<h3>Conductor</h3>";
    infoContent = infoContent + "<p>Conductor:An electrical conductor is a substance in which electrical charge carriers, usually electrons, move easily from atom to atom with the application of voltage. Conductivity, in general, is the capacity to transmit something, such as electricity or heat.Pure elemental silver is the best electrical conductor encountered in everyday life. Copper, steel, gold, aluminum, and brass are also good conductors. In electrical and electronic systems, all conductors comprise solid metals molded into wires or etched onto circuit boards.</p>";
    infoContent = infoContent + "<h3>Insulator</h3>";
    infoContent = infoContent + "<p>Insulator : An electrical insulator is a material whose internal electric charges do not flow freely; very little electric current will flow through it under the influence of an electric field. This contrasts with other materials, semiconductors and conductors, which conduct electric current more easily. The property that distinguishes an insulator is its resistivity; insulators have higher resistivity than semiconductors or conductors.</p>";
    infoContent = infoContent + "<h3>How does it work?</h3>";
    infoContent = infoContent + "<p>Metals make good conductors because the outer electrons of their atoms are loosely attached, and the electrons can drift through the metal when a voltage is applied. Some materials have all their electrons firmly fixed in place, so they do not conduct electricity well. A material like this is called an INSULATOR.</p>";
    PIEupdateInfo(infoContent);
}
function rese()
{
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
			h88:false,
			h99:false,
			//h10:false,
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
			h88:false,
			h99:false,
			//h10:false,
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
			h88:false,
			h99:false,
			//h10:false,
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
			h88:false,
			h99:false,
			//h10:false,
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
			h88:false,
			h99:false,
			//h10:false,
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
			h88:false,
			h99:false,
			//h10:false,
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
			h88:false,
			h99:false,
			//h10:false,
		}
	}
	else if(n88==1)
	{
		k={

			h11:false,
			h22:false,
			h33:false,
			h44:false,
			h55:false,
			h66:false,
			h77:false,
			h88:true,
			h99:false,
			//h10:false,
		}
	}
	else if(n99==1)
	{
		k={

			h11:false,
			h22:false,
			h33:false,
			h44:false,
			h55:false,
			h66:false,
			h77:false,
			h88:false,
			h99:true,
			//h10:false,
		}
	}
	
	n1=PIEinputGUI.add(k,"h11").name("Honey");
	n2=PIEinputGUI.add(k,"h22").name("Blade");
	n3=PIEinputGUI.add(k,"h33").name("Pencil");
	n4=PIEinputGUI.add(k,"h44").name("Scale(iron)");
	n5=PIEinputGUI.add(k,"h55").name("Book");
	n6=PIEinputGUI.add(k,"h66").name("Coin");
	n7=PIEinputGUI.add(k,"h77").name("Comb");
	n8=PIEinputGUI.add(k,"h88").name("Watch");
	n9=PIEinputGUI.add(k,"h99").name("Wood");
	//n10=PIEinputGUI.add(k,"h10").name("Spectacles");
	n1.onChange(h1);
	n2.onChange(h2);
	n3.onChange(h3);
	n4.onChange(h4);
	n5.onChange(h5);
	n6.onChange(h6);
	n7.onChange(h7);
	n8.onChange(h8);
	n9.onChange(h9);
	//n10.onChange(h10);
PIErender();
PIEstartAnimation();
}
function h1()
{
n11=1,n22=0,n33=0,n44=0,n55=0,n66=0,n77=0,n88=0,n99=0;
			n1.remove();
			n2.remove();
			n3.remove();
			n4.remove();
			n5.remove();
			n6.remove();
			n7.remove();
			n8.remove();
			n9.remove();
		//	n10.remove();
			rese();
			PIErender();
	c4=1;
	cl.visible=false;
	plane.visible=false;
	p4014.visible=false; 
	pl.visible=false;
	  mesh.visible=true;
	  cl1.visible=false;
	  cl2.visible=false;
	  cl21.visible=false;
	  cl22.visible=false;
 PIErender();
 PIEstartAnimation();
}
function h2()
{
n11=0,n22=1,n33=0,n44=0,n55=0,n66=0,n77=0,n88=0,n99=0;
			n1.remove();
			n2.remove();
			n3.remove();
			n4.remove();
			n5.remove();
			n6.remove();
			n7.remove();
			n8.remove();
			n9.remove();
			//n10.remove();
			rese();
			PIErender();
			plane.visible=true;
	c4=0;
	cl.visible=false;
	plane.visible=true;
	p4014.visible=false; 
	pl.visible=false;
	  mesh.visible=false;
	  cl1.visible=false;
	  cl2.visible=false;
	    cl21.visible=false;
	  cl22.visible=false;
 PIErender();
 PIEstartAnimation();
}
function h3()
{
n11=0,n22=0,n33=1,n44=0,n55=0,n66=0,n77=0,n88=0,n99=0;
			n1.remove();
			n2.remove();
			n3.remove();
			n4.remove();
			n5.remove();
			n6.remove();
			n7.remove();
			n8.remove();
			n9.remove();
			//n10.remove();
			rese();
			PIErender();
			plane.visible=false;
	c4=1;
	cl.visible=false;
	plane.visible=false;
	p4014.visible=false; 
	pl.visible=true;
	  mesh.visible=false;
	  cl1.visible=false;
	  cl2.visible=false;
	    cl21.visible=false;
	  cl22.visible=false;
 PIErender();
 PIEstartAnimation();
}
function h4()
{
n11=0,n22=0,n33=0,n44=1,n55=0,n66=0,n77=0,n88=0,n99=0;
			n1.remove();
			n2.remove();
			n3.remove();
			n4.remove();
			n5.remove();
			n6.remove();
			n7.remove();
			n8.remove();
			n9.remove();
			//n10.remove();
			rese();
			PIErender();
			plane.visible=false;
	c4=0;
	cl.visible=false;
	plane.visible=false;
	p4014.visible=true; 
	pl.visible=false;
	  mesh.visible=false;
	  cl1.visible=false;
	  cl2.visible=false;
	    cl21.visible=false;
	  cl22.visible=false;
 PIErender();
 PIEstartAnimation();
}
function h5()
{
n11=0,n22=0,n33=0,n44=0,n55=1,n66=0,n77=0,n88=0,n99=0;
			n1.remove();
			n2.remove();
			n3.remove();
			n4.remove();
			n5.remove();
			n6.remove();
			n7.remove();
			n8.remove();
			n9.remove();
			//n10.remove();
			rese();
			PIErender();
			c4=1;
	cl.visible=true;
	plane.visible=false;
	p4014.visible=false; 
	pl.visible=false;
	  mesh.visible=false;
	  cl1.visible=false;
	  cl2.visible=false;
	    cl21.visible=false;
	  cl22.visible=false;
 PIErender();
 PIEstartAnimation();
}
function h6()
{
n11=0,n22=0,n33=0,n44=0,n55=0,n66=1,n77=0,n88=0,n99=0;
			n1.remove();
			n2.remove();
			n3.remove();
			n4.remove();
			n5.remove();
			n6.remove();
			n7.remove();
			n8.remove();
			n9.remove();
			//n10.remove();
			rese();
			PIErender();
				c4=0;
	cl.visible=false;
	plane.visible=false;
	p4014.visible=false; 
	pl.visible=false;
	  mesh.visible=false;
	  cl1.visible=true;
	  cl2.visible=false;
	    cl21.visible=false;
	  cl22.visible=false;
 PIErender();
 PIEstartAnimation();
}
function h7()
{
n11=0,n22=0,n33=0,n44=0,n55=0,n66=0,n77=1,n88=0,n99=0;
			n1.remove();
			n2.remove();
			n3.remove();
			n4.remove();
			n5.remove();
			n6.remove();
			n7.remove();
			n8.remove();
			n9.remove();
			//n10.remove();
			rese();
			PIErender();
				c4=1;
	cl.visible=false;
	plane.visible=false;
	p4014.visible=false; 
	pl.visible=false;
	  mesh.visible=false;
	  cl1.visible=false;
	  cl2.visible=true;
	    cl21.visible=false;
	  cl22.visible=false;
 PIErender();
 PIEstartAnimation();
}
function h8()
{
n11=0,n22=0,n33=0,n44=0,n55=0,n66=0,n77=0,n88=1,n99=0;
			n1.remove();
			n2.remove();
			n3.remove();
			n4.remove();
			n5.remove();
			n6.remove();
			n7.remove();
			n8.remove();
			n9.remove();
			//n10.remove();
			rese();
			PIErender();
				c4=0;
	cl.visible=false;
	plane.visible=false;
	p4014.visible=false; 
	pl.visible=false;
	  mesh.visible=false;
	  cl1.visible=false;
	  cl2.visible=false;
	   cl21.visible=true;
	   cl22.visible=false;
 PIErender();
 PIEstartAnimation();
}
function h9()
{
n11=0,n22=0,n33=0,n44=0,n55=0,n66=0,n77=0,n88=0,n99=1;
			n1.remove();
			n2.remove();
			n3.remove();
			n4.remove();
			n5.remove();
			n6.remove();
			n7.remove();
			n8.remove();
			n9.remove();
			//n10.remove();
			rese();
			PIErender();
				c4=1;
	cl.visible=false;
	plane.visible=false;
	p4014.visible=false; 
	pl.visible=false;
	  mesh.visible=false;
	  cl1.visible=false;
	  cl2.visible=false;
	   cl21.visible=false;
	   cl22.visible=true;
	   //cl23.visible=false;
 PIErender();
 PIEstartAnimation();
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
		h88:false,
		h99:false,
		//h10:false,
	}
n1=PIEinputGUI.add(k,"h11").name("Honey");
	n2=PIEinputGUI.add(k,"h22").name("Blade");
	n3=PIEinputGUI.add(k,"h33").name("Pencil");
	n4=PIEinputGUI.add(k,"h44").name("Scale(iron)");
	n5=PIEinputGUI.add(k,"h55").name("Book");
	n6=PIEinputGUI.add(k,"h66").name("Coin");
	n7=PIEinputGUI.add(k,"h77").name("Comb");
	n8=PIEinputGUI.add(k,"h88").name("Watch");
	n9=PIEinputGUI.add(k,"h99").name("Wood");
	//n10=PIEinputGUI.add(k,"h10").name("Spectacles");
	n1.onChange(h1);
	n2.onChange(h2);
	n3.onChange(h3);
	n4.onChange(h4);
	n5.onChange(h5);
	n6.onChange(h6);
	n7.onChange(h7);
	n8.onChange(h8);
	n9.onChange(h9);
	//n10.onChange(h10);
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
function loadExperimentElements()
{
 
PIEsetExperimentTitle("Conductors and Insulators");
PIEsetDeveloperName("Harish Kumar Dubakula");
//PIEaddElement(new THREE.GridHelper(100));
initialiseHelp();
    initialiseInfo();
		//background plane
					var geometry = new THREE.PlaneGeometry( 300, 550, 60 );
					var material = new THREE.MeshBasicMaterial({color:"#fdf6d5",specular:'#1595'});
					var p1001= new THREE.Mesh( geometry, material );
					p1001.rotation.z=Math.PI/2;
					p1001.position.set(5.2,-2.5,-59);
					PIEaddElement(p1001);
  		//background plane	
//----------------------------------------------------------------------------------------------------------------------------------------------------
			//big plane 	
			   		var g = new THREE.BoxGeometry( 75, 2, 40);
				var m = new THREE.MeshFaceMaterial( [new THREE.MeshBasicMaterial({color: 0xf48072}),
								new THREE.MeshBasicMaterial({color: "red"}),new THREE.MeshBasicMaterial({color: "red"}),new THREE.MeshBasicMaterial({color: "0xf48072"}),new THREE.MeshBasicMaterial({color: "red"}),new THREE.MeshBasicMaterial({color: "red",transparent:false})] );
			 	p = new THREE.Mesh( g, m );
				p.position.set(-11.4,9,-11);
				p.rotation.x+=1.4	;
				//p.rotation.y+=0.2;
				//p.rotation.z-=0.1;
				//PIEaddElement( p );
//----------------------------------------------------------------------------------------------------------------------------------------------------					
 //switch
	  				v1= new THREE.BoxGeometry( 16.4, 2, 15.2 );
					v11= new THREE.MeshFaceMaterial([new THREE.MeshBasicMaterial({color:"red"}),
											   new THREE.MeshBasicMaterial({color:0x2F4F4F}),
											   new THREE.MeshBasicMaterial({color:"red"}),
											   new THREE.MeshBasicMaterial({color:"skyblue"}),
											   new THREE.MeshBasicMaterial({color:"red"}),
											   new THREE.MeshBasicMaterial({color:"red"})
											   ]);
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
					port8= new THREE.CylinderGeometry( 0.5, 0.5, 1, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-12,17.5,29);
								port8cylinder.rotation.x += 0.5;
								PIEaddElement( port8cylinder);
		//switch vertices
		//switchvertices
					port8= new THREE.CylinderGeometry( 0.5, 0.5, 1, 100);
								port8material = new THREE.MeshPhysicalMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-2.4,17.5,29);
								port8cylinder.rotation.x += 0.5;
								PIEaddElement( port8cylinder);
		//switchvertices
//switch
//-----------------------------------------------------------------------------------------------------------------------------------------------					
 //bulb
 					b1 = new THREE.BoxGeometry(12.4, 2, 11.2 );
					b11 = new THREE.MeshFaceMaterial([new THREE.MeshBasicMaterial({color:0xC71585}),
										   new THREE.MeshBasicMaterial({color:0x2F4F4F}),
										   new THREE.MeshBasicMaterial({color:0x2F4F4F}),
										   new THREE.MeshBasicMaterial({color:"skyblue"}),
										   new THREE.MeshBasicMaterial({color:"black"}),
										   new THREE.MeshBasicMaterial({color:"black"})

										   ]);
b2 = new THREE.Mesh( b1, b11 );
b2.rotation.y+=-1.8;
b2.rotation.z+=-3.8;
b2.position.set(17,8,2);
PIEaddElement( b2 );
 //bulb
 //bulb vertices
					port8= new THREE.CylinderGeometry( 0.5, 0.5, 1.2, 100);
								port8material = new THREE.MeshBasicMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(15.8,7.8,23);
								port8cylinder.rotation.x += 0.9;
								port8cylinder.rotation.z+= 0.1;
								PIEaddElement( port8cylinder);
		//bulb vertices
		//bulb vertices
					port8= new THREE.CylinderGeometry( 0.5, 0.5, 1.2, 100);
								port8material = new THREE.MeshBasicMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(8.2,7.8,23);
								port8cylinder.rotation.x += 0.9;
								port8cylinder.rotation.z+= 0.1;
								PIEaddElement( port8cylinder);
//bulb vertices		
 					//bulb cylinder2
						port3 = new THREE.CylinderGeometry( 1.5, 2, 1, 30 );
								port3material = new THREE.MeshPhysicalMaterial( {color: "black"} );
								port3cylinder = new THREE.Mesh( port3, port3material );
								port3cylinder.position.set(10.4,8.2,29);
								port3cylinder.rotation.x += 0.7;
								port3cylinder.rotation.z+= 0.1;
								//port3cylinder.rotation.y +=Math.PI/(-12.1);
								PIEaddElement( port3cylinder);
					//bulb cylinder2
					//circle bilb
							port6=new THREE.CircleGeometry(2.5,30);
							port6.vertices.shift();
							port6material = new THREE.LineBasicMaterial( {color: "grey",transparent:true} );
								port6cylinder = new THREE.Line( port6, port6material );
								port6cylinder.position.set(17,12.8,2);
								PIEaddElement( port6cylinder);
					//circle bilb
					//circle bilb
							var port7=new THREE.PlaneGeometry(0.1,2.5,20);
							var port7material = new THREE.MeshBasicMaterial( {color: "grey"} );
								port7cylinder = new THREE.Mesh( port7, port7material );
								port7cylinder.position.set(15.5,12.2,2);
								PIEaddElement( port7cylinder);
		//circle bilb
		
		//circle bilb
							port8=new THREE.PlaneGeometry(0.1,2.5,20);
							port8material = new THREE.MeshBasicMaterial( {color: "grey"} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(18.3,12.2,2);
								PIEaddElement( port8cylinder);
		//circle bilb
		//circle bilb
		var i=0,x=13.6;
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
//--------------------------------------------------------------------------------------------------------------------------------					
//voltage2
				var g = new THREE.BoxGeometry( 14, 1, 7 );
	var m = new THREE.MeshFaceMaterial( [new THREE.MeshBasicMaterial({color: "black"}),
					new THREE.MeshBasicMaterial({color: "green"}),new THREE.MeshBasicMaterial({color: "skyblue"}),new THREE.MeshBasicMaterial({color: "gold"}),new THREE.MeshBasicMaterial({color: 0x2F4F4F}),new THREE.MeshBasicMaterial({color: "0x2F4F4F",transparent:false})] );
 	p = new THREE.Mesh( g, m );
	p.position.set(-27.4,3.3,20);
	p.rotation.x+=0.3;
	p.rotation.y+=0.1;
	//p.rotation.z-=0.06;
	PIEaddElement( p );
	
	var g = new THREE.BoxGeometry( 0.5, 3, 7 );
	var m = new THREE.MeshFaceMaterial( [new THREE.MeshBasicMaterial({color: "black"}),
					new THREE.MeshBasicMaterial({color: "grey"}),new THREE.MeshBasicMaterial({color: "grey"}),new THREE.MeshBasicMaterial({color: "grey"}),new THREE.MeshBasicMaterial({color: "grey"}),new THREE.MeshBasicMaterial({color: "skyblue",transparent:false})] );
 	p = new THREE.Mesh( g, m );
	p.position.set(-31.4,5.3,25);
	p.rotation.x+=0.2;
	p.rotation.y+=0.2;
	PIEaddElement( p );
	
	var g = new THREE.BoxGeometry( 0.5, 3, 7 );
	var m = new THREE.MeshFaceMaterial( [new THREE.MeshBasicMaterial({color: "white"}),
					new THREE.MeshBasicMaterial({color: "grey"}),new THREE.MeshBasicMaterial({color: "grey"}),new THREE.MeshBasicMaterial({color: "grey"}),new THREE.MeshBasicMaterial({color: "grey"}),new THREE.MeshBasicMaterial({color: "#5F9EA0",transparent:false})] );
 	p = new THREE.Mesh( g, m );
	p.position.set(-21,5.7,24);
	p.rotation.x+=0.2;
	p.rotation.y+=0.1;
	PIEaddElement( p );
	
//voltage2
 
 port4 = new THREE.CylinderGeometry( 1.5, 1.5, 6.3, 30 );
								port4material = new THREE.MeshPhysicalMaterial( {color: "red",transparent:true} );
								port4cylinder = new THREE.Mesh( port4, port4material );
								port4cylinder.position.set(-27.5,5.4,26);
								port4cylinder.rotation.z+= 20.43;
								PIEaddElement( port4cylinder);	
port4 = new THREE.CylinderGeometry( 1.5, 1.5, 3.5, 30 );
								port4material = new THREE.MeshPhysicalMaterial( {color: "gold",transparent:true} );
								port4cylinder = new THREE.Mesh( port4, port4material );
								port4cylinder.position.set(-22.9,5.4,25);
								port4cylinder.rotation.z+= 20.43;
								PIEaddElement( port4cylinder);
					//signs
			var hg=new THREE.Group();
			var g39= new THREE.PlaneGeometry( 1.2, 0.3, 30 );
								var m39= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide,transparent:true,opacity:0.8,DepthWrite:false} );
					 			p39= new THREE.Mesh( g39, m39);
								p39.position.set(27.8,-3.8,20);
								PIEaddElement(p39);
								hg.add(p39);
							//+ve 
							var g40= new THREE.PlaneGeometry( 0.25, 1.2, 30 );
								var m40= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide,transparent:true,opacity:0.8,DepthWrite:false});
					 			p40= new THREE.Mesh( g40, m40);
								p40.position.set(27.8,-3.8,20);
								hg.add(p40);
							//+ve sign
								var g41= new THREE.PlaneGeometry( 1, 0.3, 30 );
								var m41= new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide,transparent:true,opacity:0.8,DepthWrite:false} );
					 			p41= new THREE.Mesh( g41, m41);
								p41.position.set(-16.3,5.2,50);
								PIEaddElement(p41);
								PIEaddElement(hg);
								hg.position.set(-51.4,9.1,19);
//signs
//voltage vertices
					port8= new THREE.CylinderGeometry( 0.5, 0.5, 1, 100);
								port8material = new THREE.MeshBasicMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-33.6,3.4,23);
								port8cylinder.rotation.x += 0.2;
								PIEaddElement( port8cylinder);
		//voltage vertices
		//voltage  vertices
					port8= new THREE.CylinderGeometry( 0.5, 0.5, 1, 100);
								port8material = new THREE.MeshBasicMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-20.2,3.9,24);
								port8cylinder.rotation.x += 0.2;
								PIEaddElement( port8cylinder);
		//voltage vertices	
//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
	//lines
		var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-2.6,17.5,29 ),
										new THREE.Vector3(0.2,22.5,29),
										new THREE.Vector3(2.4, 8, 30)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

											 cO27 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO27);	
											
								var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(2.4, 8, 30),
										new THREE.Vector3(3, 5, 30),
										new THREE.Vector3(5, 8, 30 )
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

											 cO1= new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO1);	
								var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(5, 8, 30 ),
										new THREE.Vector3(6.3, 9.8, 30),
										new THREE.Vector3(8.2,8,23)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

											 cO2 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO2);	
									var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-12.4,17.9,23),
										new THREE.Vector3(-16,25.8,23),
										new THREE.Vector3(-16,4.8,23)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

										 cO3 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO3);	
											
									var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-20.2,3.9,24),
										new THREE.Vector3(-19.2,9.9,24),
										new THREE.Vector3(-17.6,2.3,24)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4,side: THREE.BackSide} );

										cO4= new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO4);	
											
												var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-24.4,3.9,24),
										new THREE.Vector3(-24,6.8,23 ),
										new THREE.Vector3(-23,4.8,23 )
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

									 cO5 = new THREE.Line( ge5, ma5);
			
											//PIEaddElement(cO5);	
											
											var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-17.6,2.3,24),
										new THREE.Vector3(-16.5,0.9,24),
										new THREE.Vector3(-15.85,4.9,24)
										);
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

										 cO5= new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO5);	
											
											var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-33.6,3.8,23),
										new THREE.Vector3(-38,5.4,23),
										new THREE.Vector3(-38,0.4,23)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

										 cO6= new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO6);	
											
											
									var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-38,0.4,23),
										new THREE.Vector3(-38,-4.4,23),
										new THREE.Vector3(-16,-4.4,23)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

										 cO7 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO7);	
											
									var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(15.8,7.8,23),
										new THREE.Vector3(21.7,10.8,23),
										new THREE.Vector3(20,2.8,23)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

										 cO8 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO8);	
									var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(20,2.8,23),
										new THREE.Vector3(15.8,-6.5,23),
										new THREE.Vector3(1.8,-4.8,23)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'green',linewidth:4} );

										 cO9 = new THREE.Line( ge5, ma5);
			
											PIEaddElement(cO9);	
											
											var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(-12,-0.5,23),
										new THREE.Vector3(-8, 4, 23),
										new THREE.Vector3(-2,-1.2,23)
										);
			
			
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'red',linewidth:4} );

											 cO10= new THREE.Line( ge5, ma5);
			
											//PIEaddElement(cO10);	
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
	//plugs
						port8= new THREE.CylinderGeometry( 0.3, 0.3, 1.3, 100);
								port8material = new THREE.MeshBasicMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-15.5,-4.3,23);
								port8cylinder.rotation.z+= 20.43;
								PIEaddElement( port8cylinder);
						port8= new THREE.CylinderGeometry( 0.2, 0.2, 1, 100);
								port8material = new THREE.MeshBasicMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(-14.5,-4.2,23);
								port8cylinder.rotation.z+= 20.43;
								PIEaddElement( port8cylinder);
								
						var g41= new THREE.PlaneGeometry( 1, 0.2, 30 );
								var m41= new THREE.MeshBasicMaterial( {color: "grey", side: THREE.DoubleSide,transparent:true,opacity:0.8,DepthWrite:false} );
					 			p41= new THREE.Mesh( g41, m41);
								p41.position.set(-10.05,-0.7,50);
								PIEaddElement(p41);
								
							var g41= new THREE.PlaneGeometry( 0.7, 0.2, 30 );
								var m41= new THREE.MeshBasicMaterial( {color: "grey", side: THREE.DoubleSide,transparent:true,opacity:0.8,DepthWrite:false} );
					 			p41= new THREE.Mesh( g41, m41);
								p41.position.set(-9.9,-0.9,50);
								p41.rotation.z-=0.2;
								PIEaddElement(p41);
							var g41= new THREE.PlaneGeometry( 0.7, 0.2, 30 );
								var m41= new THREE.MeshBasicMaterial( {color: "grey", side: THREE.DoubleSide,transparent:true,opacity:0.8,DepthWrite:false} );
					 			p41= new THREE.Mesh( g41, m41);
								p41.position.set(-10.3,-0.9,50);
								p41.rotation.z+=0.4;
								PIEaddElement(p41);
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
								port8= new THREE.CylinderGeometry( 0.3, 0.3, 1.3, 100);
								port8material = new THREE.MeshBasicMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(2.2,-4.7,23);
								port8cylinder.rotation.z+= 20.43;
								PIEaddElement( port8cylinder);
						port8= new THREE.CylinderGeometry( 0.2, 0.2, 1, 100);
								port8material = new THREE.MeshBasicMaterial( {color: "black",transparent:true} );
								port8cylinder = new THREE.Mesh( port8, port8material );
								port8cylinder.position.set(1.5,-4.6,23);
								port8cylinder.rotation.z+= 20.43;
								PIEaddElement( port8cylinder);
								
								var g41= new THREE.PlaneGeometry( 1, 0.2, 30 );
								var m41= new THREE.MeshPhysicalMaterial( {color: "grey", side: THREE.DoubleSide,transparent:true,opacity:0.8,DepthWrite:false} );
					 			p41= new THREE.Mesh( g41, m41);
								p41.position.set(-1.8,-0.9,50);
								PIEaddElement(p41);
								
							var g41= new THREE.PlaneGeometry( 0.7, 0.2, 30 );
								var m41= new THREE.MeshBasicMaterial( {color: "grey", side: THREE.DoubleSide,transparent:true,opacity:0.8,DepthWrite:false} );
					 			p41= new THREE.Mesh( g41, m41);
								p41.position.set(-2,-1.1,50);
								p41.rotation.z+=0.5;
								PIEaddElement(p41);
							var g41= new THREE.PlaneGeometry( 0.7, 0.2, 30 );
								var m41= new THREE.MeshBasicMaterial( {color: "grey", side: THREE.DoubleSide,transparent:true,opacity:0.8,DepthWrite:false} );
					 			p41= new THREE.Mesh( g41, m41);
								p41.position.set(-1.5,-1.1,50);
								p41.rotation.z-=0.6;
								PIEaddElement(p41);
	//plugs	
//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------	
//objects					
								var g41= new THREE.PlaneGeometry( 13, 2.2, 30 );
								var	 texture = new THREE.ImageUtils.loadTexture("hart.png") ;
								var p4013= new THREE.MeshBasicMaterial( {color:"#fdf6d5",map:texture} );
					 			p4014= new THREE.Mesh( g41, p4013);
								p4014.position.set(-6,-2.1,50);
								p4014.visible=false;
								PIEaddElement(p4014);
//objects

							//solution
											var geometry = new THREE.PlaneGeometry( 15, 5.3, 2 );
											var te = new THREE.ImageUtils.loadTexture("blade.png") ;
											var material = new THREE.MeshBasicMaterial( {color: "#fdf6d5",map:te,opacity:1000} );
										 plane = new THREE.Mesh( geometry, material);
											plane.position.set(-6.8,-6.8,19);
											plane.visible=false;
												PIEaddElement( plane );
											//	PIEdragElement(plane);
										//PIEsetDrag( plane,truth3 );
							//solution	
							//rods
											port8= new THREE.CylinderGeometry( 0.3, 0.3, 2.2, 100);
								port81material = new THREE.MeshPhysicalMaterial( {color: "black",transparent:true} );
								port81cylinder = new THREE.Mesh( port8, port81material );
								port81cylinder.position.set(13.5,9.4,23);
								//port8cylinder.rotation.x += 0.2
								//PIEaddElement( port81cylinder);
								
								port8= new THREE.CylinderGeometry( 0.3, 0.3, 6.2, 1);
								port81material = new THREE.MeshPhysicalMaterial( {color: "black",transparent:true} );
								port82cylinder = new THREE.Mesh( port8, port81material );
								port82cylinder.position.set(-23.5,-11.4,2);
								//port8cylinder.rotation.x += 0.2
								//PIEaddElement( port82cylinder);
								
								var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(13.5,12.4,23),
										new THREE.Vector3(12,13.4,23),
										new THREE.Vector3(9,12.4,23)
										);
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'red',linewidth:4} );

											 cO116 = new THREE.Line( ge5, ma5);
			
											//PIEaddElement(cO116);
											
								var ch4= new THREE.QuadraticBezierCurve3(
										new THREE.Vector3(1.5,1.4,23),
										new THREE.Vector3(1.5,1.4,23),
										new THREE.Vector3(3.5,1.4,23)
										);
											var ge5 = new THREE.Geometry();
											ge5.vertices = ch4.getPoints( 50 );

										var ma5= new THREE.LineBasicMaterial( { color : 'red',linewidth:4} );

											 cO117 = new THREE.Line( ge5, ma5);
			
											//PIEaddElement(cO117);		
							
									
										//solution
											var geometry = new THREE.PlaneGeometry( 18, 1.4, 2 );
											var t = new THREE.ImageUtils.loadTexture("pencil.png") ;
											var material = new THREE.MeshBasicMaterial( {color: "#fdf6d5",map:t,opacity:1000} );
										 pl = new THREE.Mesh( geometry, material);
											pl.position.set(-7.2,-5.9,19);
											pl.visible=false;
												PIEaddElement( pl )
												//PIEdragElement(pl);
												//PIEsetDrag(pl,truth4);
										//solution	
										//solution
											var geometry = new THREE.PlaneGeometry( 13.3, 10.4, 2 );
											var t = new THREE.ImageUtils.loadTexture("book.png") ;
											var material = new THREE.MeshBasicMaterial( {color: "#fdf6d5",map:t} );
										 cl = new THREE.Mesh( geometry, material);
											cl.position.set(-6.5,-5.5,19);
											cl.visible=false;
											PIEaddElement(cl);
										//solution	
										//solution
											var geometry = new THREE.PlaneGeometry( 13.4, 10.4, 2 );
											var t = new THREE.ImageUtils.loadTexture("coin.jpg") ;
											var material = new THREE.MeshBasicMaterial( {color: "#fdf6d5",map:t} );
										 cl1 = new THREE.Mesh( geometry, material);
											cl1.position.set(-6.6,-5.5,19);
											//cl1.rotation.z+=20.43;;
										cl1.visible=false;
											PIEaddElement(cl1);
										//solution	
										//solution
											var geometry = new THREE.PlaneGeometry( 13.9, 10.4, 2 );
											var t = new THREE.ImageUtils.loadTexture("comb.png") ;
											var material = new THREE.MeshBasicMaterial( {color: "#fdf6d5",map:t} );
										 	cl2 = new THREE.Mesh( geometry, material);
											cl2.position.set(-6.5,-5.5,19);
											cl2.visible=false;
											PIEaddElement(cl2);
										//solution	
										//solution 2
												//solution
											var geometry = new THREE.PlaneGeometry( 19.9, 10.4, 2 );
											var t = new THREE.ImageUtils.loadTexture("wa.jpg") ;
											var material = new THREE.MeshBasicMaterial( {color: "#fdf6d5",map:t} );
										 	cl21 = new THREE.Mesh( geometry, material);
											cl21.position.set(-6.5,-5.5,19);
											cl21.visible=false;
											PIEaddElement(cl21);
										//solution 2
										//solution
											var geometry = new THREE.CylinderGeometry( 2.4, 2.4, 12.4 );
											var t = new THREE.ImageUtils.loadTexture("1.jpg") ;
											var material = new THREE.MeshBasicMaterial( {color: "#fdf6d5",map:t} );
										 cl22 = new THREE.Mesh( geometry, material);
											cl22.position.set(-6.5,-5.5,19);
											cl22.rotation.z+=20.43;;
											cl22.visible=false;
											PIEaddElement(cl22);
										//solution	
										//solution
											var geometry = new THREE.PlaneGeometry( 14.9, 10.4, 2 );
											var t = new THREE.ImageUtils.loadTexture("vit.png") ;
											var material = new THREE.MeshBasicMaterial( {color: "#fdf6d5",map:t} );
										 cl23 = new THREE.Mesh( geometry, material);
											cl23.position.set(-6.6,-5.5,19);
											//cl1.rotation.z+=20.43;;
										cl23.visible=false;
											//PIEaddElement(cl23);
										//solution	
										var loader = new THREE.TextureLoader();
loader.load('p6.png', function ( texture ) {
  var geometry = new THREE.PlaneGeometry(14.5, 10, 200);
  var material = new THREE.MeshBasicMaterial({color:"#fdf6d5",map: texture, overdraw: 0.5});
   mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(-6.8,-9.1,10);
  mesh.visible=false;
  PIEaddElement(mesh);
});
//beaker
//truth();

//sphere
			port7=new THREE.SphereGeometry(2.3,30,50);
								port7material = new THREE.MeshBasicMaterial( {color: "yellow"} );
								port7cyder = new THREE.Mesh( port7, port7material );
								port7cyder.position.set(14.6,12.2,12);
								PIEaddElement( port7cyder);
								port7cyder.visible=false;
//sphere
		hrt();					
								//PIESceneLoader;
								PIErender();
							//PIEstartAnimation();
window.addEventListener("click",toggle);
PIEstartButton.addEventListener("click",harish1);
PIEstopButton.addEventListener("click",yadav1);
 PIEsetAreaOfInterest(-30,30,20,-20);
}
function resetExperiment() {
cO1.material.color.set("green"),cO2.material.color.set("green"),cO3.material.color.set("green"),cO4.material.color.set("green"),cO5.material.color.set("green"),cO6.material.color.set("green"),cO7.material.color.set("green"),cO8.material.color.set("green"),cO9.material.color.set("green"),cO27.material.color.set("green");
						port7cyder.visible=false;
						cl.visible=false;
plane.visible=false;
p4014.visible=false; 
	pl.visible=false;
	  mesh.visible=false;
	  cl1.visible=false;
	  cl2.visible=false;	
	  cl21.visible=false;
	  cl22.visible=false;	
	   mj.position.set(-10.2,18.5,25);
	gggg18.position.set(-4.9,18.2,25);
	//long
	n1.remove();
			n2.remove();
			n3.remove();
			n4.remove();
			n5.remove();
			n6.remove();
			n7.remove();
			n8.remove();
			n9.remove();
	k={
			h11:false,
			h22:false,
			h33:false,
			h44:false,
			h55:false,
			h66:false,
			h77:false,
			h88:false,
			h99:false,
		}
	n1=PIEinputGUI.add(k,"h11").name("Honey");
	n2=PIEinputGUI.add(k,"h22").name("Blade");
	n3=PIEinputGUI.add(k,"h33").name("Pencil");
	n4=PIEinputGUI.add(k,"h44").name("Scale(iron)");
	n5=PIEinputGUI.add(k,"h55").name("Book");
	n6=PIEinputGUI.add(k,"h66").name("Coin");
	n7=PIEinputGUI.add(k,"h77").name("Comb");
	n8=PIEinputGUI.add(k,"h88").name("Watch");
	n9=PIEinputGUI.add(k,"h99").name("Wood");
	n1.onChange(h1);
	n2.onChange(h2);
	n3.onChange(h3);
	n4.onChange(h4);
	n5.onChange(h5);
	n6.onChange(h6);
	n7.onChange(h7);
	n8.onChange(h8);
	n9.onChange(h9);
	c4=1;
PIErender();
//PIEstartAnimation();
	//very long	
}
function updateExperimentElements(t, dt) {
c404=1;
			if(c1==1 && c404==1)
			{
					mj.position.set(-10.2,18.2,25);
					 gggg18.position.set(-4.9,18.5,25);
					if(c4==0)
					{
								cO1.material.color.set("red"),cO2.material.color.set("red"),cO3.material.color.set("red"),cO4.material.color.set("red"),cO5.material.color.set("red"),cO6.material.color.set("red"),cO7.material.color.set("red"),cO8.material.color.set("red"),cO9.material.color.set("red"),cO27.material.color.set("red");
							port7cyder.visible=true;
					}
					else
					{
						cO1.material.color.set("green"),cO2.material.color.set("green"),cO3.material.color.set("green"),cO4.material.color.set("green"),cO5.material.color.set("green"),cO6.material.color.set("green"),cO7.material.color.set("green"),cO8.material.color.set("green"),cO9.material.color.set("green"),cO27.material.color.set("green");
						port7cyder.visible=false;
					}
			}
			else if(c2==1 && c404==1)
			{
					cO1.material.color.set("green"),cO2.material.color.set("green"),cO3.material.color.set("green"),cO4.material.color.set("green"),cO5.material.color.set("green"),cO6.material.color.set("green"),cO7.material.color.set("green"),cO8.material.color.set("green"),cO9.material.color.set("green"),cO27.material.color.set("green");
					  mj.position.set(-10.2,18.5,25);
						gggg18.position.set(-4.9,18.2,25);
					port7cyder.visible=false;
					PIEstopAnimation();
			}
}

