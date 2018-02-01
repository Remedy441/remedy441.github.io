/**/
var l8, l8Mesh, l9, l9Mesh, l10, l10Mesh, l11, l11Mesh, l12, l12Mesh  , l122, l122Mesh, cnt = 0, ct = 0, cntt = 0;
var light , lightMesh, light1, light2;
var p1, p1Mesh , p2, p2Mesh, p3, p3Mesh, g5, g5Mesh, cylinderGeometry, cylinderMaterial, cylinderMesh;
var g23Mesh, g24Mesh, g25Mesh, g26Mesh, g27Mesh ;
var generatorGroup = new THREE.Object3D() ;
var flag = 0 , texture1, box;
/**/
var helpContent = "";
function initialiseHelp() {
    helpContent = helpContent + "<h2>water generators (hydro water turbines)</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows how falling water can be used to generate electricity.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The start stage</h3>";
    helpContent = helpContent + "<p>The initial state is start stage. In this everything has already set up. <br><br>you can enter the animation stage by clicking the start button.</p>";
    
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the water will move along penstock.m stores lots of water behind it in the reservoir. Near the bottom of the dam wall there is the water intake. Gravity causes it to fall through the penstock inside the dam. At the end of the penstock there is a turbine propeller, which is turned by the moving water.</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Adavantages   : Shows the advantages of hydro electricity..</li>";
    helpContent = helpContent + "<li>Disadvantages   : Shows the dis advantages of hydro electricity..</li>";
    helpContent = helpContent + "<li>Efficiency  : Shows the efficiency..</li>";
    helpContent = helpContent + "<li>Cost of Production  : Shows the cost per 1MW production..</li>";
   	helpContent = helpContent + "<li>Availability  : Shows the Availability of hydro electricity..</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play button on the top line.</p>";
    PIEupdateHelp(helpContent);
}
var infoContent = "";
function initialiseInfo() {
    infoContent = infoContent + "<h2>water generators (hydro water turbines)</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows how falling water can be used to generate electricity.</p>";
    infoContent = infoContent + "<h3>Generator</h3>";
    infoContent = infoContent + "<p>A generator is a device that converts mechanical energy into electrical energy.  Generators do not produce electricity on their own, they must first collect mechanical energy from an outside source.</p>";
    infoContent = infoContent + "<p>Common sources used to supply a generator with mechanical energy are:<br>1.Wind.<br>2.Falling liquid water.<br>3.High pressure steam.</p>";
    infoContent = infoContent + "<p>Here in this case of hydro generator source is Falling water.</p>";
    infoContent = infoContent + "<h3>How does it work ?</h3>";
    infoContent = infoContent + "<p>So how do we get electricity from water? Actually, hydroelectric and coal-fired power plants(thermal plant) produce electricity in a similar way. In both cases a power source is used to turn a propeller-like piece called a turbine, which then turns a metal shaft in an electric generator, which is the motor that produces electricity. <br><br>A coal-fired power plant(thermal plant) uses steam to turn the turbine blades; whereas a hydroelectric plant uses falling water to turn the turbine.</p>";
    infoContent = infoContent + "<p>The dam stores lots of water behind it in the reservoir. Near the bottom of the dam wall there is the water intake. Gravity causes it to fall through the penstock inside the dam.<br><br> At the end of the penstock there is a turbine propeller, which is turned by the moving water. The shaft from the turbine goes up into the generator, which produces the power. Power lines are connected to the generator that carry electricity to our houses. <br><br>The water continues past the propeller through the tailrace into the river past the dam. <br><br>By the way, it is not a good idea to be playing in the water right below a dam when water is released!.</p>";
    PIEupdateInfo(infoContent);
}
function initialiseControls() {
    //yet ot do
}
function adv(){
alert("No emissions, Reliable, Capable of generating large amounts of power, Output can be regulated to meet demand");
}
function disAdv(){
alert("Dams may be affected by droughts, Potential for floods, Very Expensive to build , Environmental impacts by changing enviroment is dam area");
}
function eff(){
alert("Efficiency of Conversion Potential to Mechanical : 100%  Mechanical to Electrical : 95%");
}
function cost(){
alert("Cost of Production of 1 MW electricity in HydroElectric Power Plant is Rs.5.5Crore");
}
function avail(){
alert("Percentage of HydroElectricity of total electricity generation in india : Approx 21.53% Percentage of HydroElectricity of total electricity generation Globally : Approx 18-20%");
}
var hinfo = document.createElement('div');
hinfo.style.position = 'absolute';
hinfo.style.top = '28%';
hinfo.style.left = '-32%';
hinfo.style.width = '100%';
hinfo.style.textAlign = 'center';
hinfo.style.color = 'steelblue';
//info.style.fontWeight = 'bold';
hinfo.style.backgroundColor = 'transparent';
hinfo.style.zIndex = '1';
hinfo.style.fontFamily = 'Courier';
hinfo.innerHTML = "<h1>Higher-Reservior</h1>" ;
document.body.appendChild(hinfo);

var info = document.createElement('div');
info.style.position = 'absolute';
info.style.top = '28%';
info.style.left = '2%';
info.style.width = '90%';
info.style.textAlign = 'center';
info.style.color = 'steelblue';
//info.style.fontWeight = 'bold';
info.style.backgroundColor = 'transparent';
info.style.zIndex = '1';
info.style.fontFamily = 'Courier';
info.innerHTML = "<h1>Transformer</h1>" ;
document.body.appendChild(info);

var info = document.createElement('div');
info.style.position = 'absolute';
info.style.top = '42%';
info.style.left = '15%';
info.style.width = '90%';
info.style.textAlign = 'center';
info.style.color = 'steelblue';
//info.style.fontWeight = 'bold';
info.style.backgroundColor = 'transparent';
info.style.zIndex = '1';
info.style.fontFamily = 'Courier';
info.innerHTML = "<h1>Generator</h1>" ;
document.body.appendChild(info);

var info = document.createElement('div');
info.style.position = 'absolute';
info.style.top = '58%';
info.style.left = '13%';
info.style.width = '90%';
info.style.textAlign = 'center';
info.style.color = 'steelblue';
//info.style.fontWeight = 'bold';
info.style.backgroundColor = 'transparent';
info.style.zIndex = '1';
info.style.fontFamily = 'Courier';
info.innerHTML = "<h1>Turbine</h1>" ;
document.body.appendChild(info);


var info = document.createElement('div');
info.style.position = 'absolute';
info.style.top = '13%';
info.style.left = '18%';
info.style.width = '90%';
info.style.textAlign = 'center';
info.style.color = 'steelblue';
//info.style.fontWeight = 'bold';
info.style.backgroundColor = 'transparent';
info.style.zIndex = '1';
info.style.fontFamily = 'Courier';
info.innerHTML = "<h1>Electrical-System</h1>" ;
document.body.appendChild(info);


var elem = document.createElement("img");
elem.setAttribute("src", "assets/q.png");
elem.setAttribute("height", "592");
elem.setAttribute("width", "449");
elem.style.position = 'absolute';
elem.style.top = "8%" ;
elem.style.left = "5%" ;
elem.style.display = "none" ;
document.body.appendChild(elem);
function loadExperimentElements() {
    PIEsetExperimentTitle("water generators (hydro water turbines)");
    PIEsetDeveloperName("Srikanth Chekuri");
    initialiseHelp();
    initialiseInfo();
    PIEaddInputCommand("Advantages", adv) ;
    PIEaddInputCommand("DisAdvantages", disAdv) ;
    PIEaddInputCommand("Cost", cost) ;
    PIEaddInputCommand("Efficiency", eff) ;
    PIEaddInputCommand("Availability", avail) ;   
    
	/*begin of body of trubine & rotor & generator */
    var g1 = new THREE.Geometry() ;
    g1.vertices.push(new THREE.Vector3(-0.5, 0.5, 0)) ;
    g1.vertices.push(new THREE.Vector3(-0.5, -0.5, 0)) ;
    g1.vertices.push(new THREE.Vector3(0.5, -0.5, 0)) ;
    g1.vertices.push(new THREE.Vector3(0.5, 0.5, 0)) ;
    g1.faces.push(new THREE.Face3(0, 1, 2)) ;
    g1.faces.push(new THREE.Face3(0, 2, 3)) ;
    var g1Mesh = new THREE.Mesh(g1, new THREE.MeshBasicMaterial({color : 0x6d8d7a})) ;
   	PIEaddElement(g1Mesh) ;
   	
   	var g2 = new THREE.Geometry() ;
   	g2.vertices.push(new THREE.Vector3(-1.2, 1, 0)) ;
   	g2.vertices.push(new THREE.Vector3(-1.2, 0.5, 0)) ;
   	g2.vertices.push(new THREE.Vector3(1.2, 0.5, 0)) ;
   	g2.vertices.push(new THREE.Vector3(1.2, 1, 0)) ;
   	g2.faces.push(new THREE.Face3(0, 1, 2)) ;
   	g2.faces.push(new THREE.Face3(0, 2, 3)) ;
   	var g2Mesh = new THREE.Mesh(g2, new THREE.MeshBasicMaterial({color : 0x093644})) ;
   	PIEaddElement(g2Mesh) ;
   	
   	var g3 = new THREE.Geometry() ;
   	g3.vertices.push(new THREE.Vector3(-1.2, -0.5, 0)) ;
   	g3.vertices.push(new THREE.Vector3(-1.2, -1, 0)) ;
   	g3.vertices.push(new THREE.Vector3(1.2, -1, 0)) ;
   	g3.vertices.push(new THREE.Vector3(1.2, -0.5, 0)) ;
   	g3.faces.push(new THREE.Face3(0, 1, 2)) ;
   	g3.faces.push(new THREE.Face3(0, 2, 3)) ;
   	var g3Mesh = new THREE.Mesh(g3, new THREE.MeshBasicMaterial({color : 0x093644})) ;
   	PIEaddElement(g3Mesh) ;
   	
   	var g4 = new THREE.Geometry() ;
   	g4.vertices.push(new THREE.Vector3(-1.6, -1, 0)) ;
   	g4.vertices.push(new THREE.Vector3(-1.6, -3, 0)) ;
   	g4.vertices.push(new THREE.Vector3(1.6, -3, 0)) ;
   	g4.vertices.push(new THREE.Vector3(1.6, -1, 0)) ;
   	g4.faces.push(new THREE.Face3(0, 1, 2)) ;
   	g4.faces.push(new THREE.Face3(0, 2, 3)) ;
   	var g4Mesh = new THREE.Mesh(g4, new THREE.MeshBasicMaterial({color : 0x093644})) ;
   	PIEaddElement(g4Mesh) ;

   	g5 = new THREE.Geometry() ;
   	g5.vertices.push(new THREE.Vector3(-3.6, -3, 0)) ;
   	g5.vertices.push(new THREE.Vector3(-3.6, -6, 0)) ;
   	g5.vertices.push(new THREE.Vector3(3.6, -6, 0)) ;
   	g5.vertices.push(new THREE.Vector3(3.6, -3, 0)) ;
   	g5.faces.push(new THREE.Face3(0, 1, 2)) ;
   	g5.faces.push(new THREE.Face3(0, 2, 3)) ;
   	var t = new THREE.ImageUtils.loadTexture("assets/shaft.png") ;
   	g5Mesh = new THREE.Mesh(g5, new THREE.MeshBasicMaterial({color : 0x093644, map : t})) ;
   	//PIEaddElement(g5Mesh) ;
	
    cylinderGeometry = new THREE.CylinderGeometry( 4, 4, 2.5, 20 );
    var texture = new THREE.ImageUtils.loadTexture('assets/shaft.png', {}, function() {
    PIErender() ;
    }) ;
    PIErender() ;
    cylinderMaterial = new THREE.MeshBasicMaterial( {map : texture} );
    cylinderMesh = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
    cylinderMesh.position.set(-0.5, -4.5, 0) ;
    PIEaddElement(cylinderMesh) ;	
    
    PIErender() ;
    
	/*generator main*/
   	var g6 = new THREE.Geometry() ;
   	g6.vertices.push(new THREE.Vector3(-5.5, 7, 0)) ;
   	g6.vertices.push(new THREE.Vector3(-5.5, 1, 0)) ;
   	g6.vertices.push(new THREE.Vector3(5.5, 1, 0)) ;
   	g6.vertices.push(new THREE.Vector3(5.5, 7, 0)) ;
   	g6.faces.push(new THREE.Face3(0, 1, 2)) ;
   	g6.faces.push(new THREE.Face3(0, 2, 3)) ;
   	var g6Mesh = new THREE.Mesh(g6, new THREE.MeshBasicMaterial({color : 0x093644})) ;
   	g6Mesh.name = "generator" ;
   	PIEaddElement(g6Mesh) ;

   	var g7 = new THREE.Geometry() ;
   	g7.vertices.push(new THREE.Vector3(-4.5, 6, 0)) ;
   	g7.vertices.push(new THREE.Vector3(-4.5, 2, 0)) ;
   	g7.vertices.push(new THREE.Vector3(-3.5, 2, 0)) ;
   	g7.vertices.push(new THREE.Vector3(-3.5, 6, 0)) ;
   	g7.faces.push(new THREE.Face3(0, 1, 2)) ;
   	g7.faces.push(new THREE.Face3(0, 2, 3)) ;
   	var g7Mesh = new THREE.Mesh(g7, new THREE.MeshBasicMaterial({color : 0x00ff00})) ;
   	g7Mesh.name = "generator" ;
   	PIEaddElement(g7Mesh) ;
   	

   	var g8 = new THREE.Geometry() ;
   	g8.vertices.push(new THREE.Vector3(-2.5, 6, 0)) ;
   	g8.vertices.push(new THREE.Vector3(-2.5, 2, 0)) ;
   	g8.vertices.push(new THREE.Vector3(-1.5, 2, 0)) ;
   	g8.vertices.push(new THREE.Vector3(-1.5, 6, 0)) ;
   	g8.faces.push(new THREE.Face3(0, 1, 2)) ;
   	g8.faces.push(new THREE.Face3(0, 2, 3)) ;
   	var g8Mesh = new THREE.Mesh(g8, new THREE.MeshBasicMaterial({color : 0x00ff00})) ;
   	g8Mesh.name = "generator" ;
   	PIEaddElement(g8Mesh) ;

   	var g9 = new THREE.Geometry() ;
   	g9.vertices.push(new THREE.Vector3(-0.5, 6, 0)) ;
   	g9.vertices.push(new THREE.Vector3(-0.5, 2, 0)) ;
   	g9.vertices.push(new THREE.Vector3(0.5, 2, 0)) ;
   	g9.vertices.push(new THREE.Vector3(0.5, 6, 0)) ;
   	g9.faces.push(new THREE.Face3(0, 1, 2)) ;
   	g9.faces.push(new THREE.Face3(0, 2, 3)) ;
   	var g9Mesh = new THREE.Mesh(g9, new THREE.MeshBasicMaterial({color : 0x00ff00})) ;
   	g9Mesh.name = "generator" ;
   	PIEaddElement(g9Mesh) ;


   	var g10 = new THREE.Geometry() ;
   	g10.vertices.push(new THREE.Vector3(1.5, 6, 0)) ;
   	g10.vertices.push(new THREE.Vector3(1.5, 2, 0)) ;
   	g10.vertices.push(new THREE.Vector3(2.5, 2, 0)) ;
   	g10.vertices.push(new THREE.Vector3(2.5, 6, 0)) ;
   	g10.faces.push(new THREE.Face3(0, 1, 2)) ;
   	g10.faces.push(new THREE.Face3(0, 2, 3)) ;
   	var g10Mesh = new THREE.Mesh(g10, new THREE.MeshBasicMaterial({color : 0x00ff00})) ;
   	g10Mesh.name = "generator" ;
   	PIEaddElement(g10Mesh) ;

   	var g11 = new THREE.Geometry() ;
   	g11.vertices.push(new THREE.Vector3(3.5, 6, 0)) ;
   	g11.vertices.push(new THREE.Vector3(3.5, 2, 0)) ;
   	g11.vertices.push(new THREE.Vector3(4.5, 2, 0)) ;
   	g11.vertices.push(new THREE.Vector3(4.5, 6, 0)) ;
   	g11.faces.push(new THREE.Face3(0, 1, 2)) ;
   	g11.faces.push(new THREE.Face3(0, 2, 3)) ;
   	var g11Mesh = new THREE.Mesh(g11, new THREE.MeshBasicMaterial({color : 0x00ff00})) ;
   	g11Mesh.name = "generator" ;
   	PIEaddElement(g11Mesh) ;
//   	generatorGroup.add(g6Mesh) ;
//   	generatorGroup.add(g7Mesh) ;
//   	generatorGroup.add(g8Mesh) ;
//   	generatorGroup.add(g9Mesh) ;
//   	generatorGroup.add(g10Mesh) ;
//   	generatorGroup.add(g11Mesh) ;
//   	generatorGroup.name = "generator" ;
//   	PIEaddElement(generatorGroup) ;
   	
    var l1 = new THREE.Geometry() ;
    l1.vertices.push(new THREE.Vector3(-1.6, -1, 0)) ;
    l1.vertices.push(new THREE.Vector3(1.6, -1, 0)) ;
    var l1Mesh = new THREE.Line(l1, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1})) ;
    PIEaddElement(l1Mesh) ;

    var l2 = new THREE.Geometry() ;
    l2.vertices.push(new THREE.Vector3(-3.6, -3, 0)) ;
    l2.vertices.push(new THREE.Vector3(2.8, -3, 0)) ;
    var l2Mesh = new THREE.Line(l2, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 2})) ;
    PIEaddElement(l2Mesh) ;

    var l3 = new THREE.Geometry() ;
    l3.vertices.push(new THREE.Vector3(-5.5, 7, 0)) ;
    l3.vertices.push(new THREE.Vector3(5.5, 7, 0)) ;
    var l3Mesh = new THREE.Line(l3, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 4})) ;
    
    l3Mesh.name = "generator" ;
    PIEaddElement(l3Mesh) ;

    var l4 = new THREE.Geometry() ;
    l4.vertices.push(new THREE.Vector3(-5.5, 1, 0)) ;
    l4.vertices.push(new THREE.Vector3(5.5, 1, 0)) ;
    var l4Mesh = new THREE.Line(l4, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 4})) ;
    l4Mesh.name = "generator" ;
    PIEaddElement(l4Mesh) ;

    var l5 = new THREE.Geometry() ;
    l5.vertices.push(new THREE.Vector3(-3.6, -6, 0)) ;
    l5.vertices.push(new THREE.Vector3(2.8, -6, 0)) ;
    var l5Mesh = new THREE.Line(l5, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 2})) ;
    PIEaddElement(l5Mesh) ;


    var l6 = new THREE.Geometry() ;
    l6.vertices.push(new THREE.Vector3(-1.2, -0.5, 0)) ;
    l6.vertices.push(new THREE.Vector3(1.2, -0.5, 0)) ;
    var l6Mesh = new THREE.Line(l6, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1})) ;
    PIEaddElement(l6Mesh) ;

    var l7 = new THREE.Geometry() ;
    l7.vertices.push(new THREE.Vector3(-1.2, 0.5, 0)) ;
    l7.vertices.push(new THREE.Vector3(1.2, 0.5, 0)) ;
    var l7Mesh = new THREE.Line(l7, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1})) ;
    PIEaddElement(l7Mesh) ;

    	l8 = new THREE.Geometry() ;
    l8.vertices.push(new THREE.Vector3(-3.4, -3.5, 0)) ;
    l8.vertices.push(new THREE.Vector3(-3.4, -5.5, 0)) ;
    	l8Mesh = new THREE.Line(l8, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1})) ;
    //PIEaddElement(l8Mesh) ;

    	l9 = new THREE.Geometry() ;
    l9.vertices.push(new THREE.Vector3(-1.8, -3.5, 0)) ;
    l9.vertices.push(new THREE.Vector3(-1.8, -5.5, 0)) ;
    	l9Mesh = new THREE.Line(l9, new THREE.LineBasicMaterial({color:0x093644, linewidth : 1})) ;
    //PIEaddElement(l9Mesh) ;
    
    	l10 = new THREE.Geometry() ;
    l10.vertices.push(new THREE.Vector3(-0.5, -3.5, 0)) ;
    l10.vertices.push(new THREE.Vector3(-0.5, -5.5, 0)) ;
    	l10Mesh = new THREE.Line(l10, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1})) ;
    //PIEaddElement(l10Mesh) ;
    
    	l11 = new THREE.Geometry() ;
    l11.vertices.push(new THREE.Vector3(1.3, -3.5, 0)) ;
    l11.vertices.push(new THREE.Vector3(1.3, -5.5, 0)) ;
   		l11Mesh = new THREE.Line(l11, new THREE.LineBasicMaterial({color:0x093644, linewidth : 1})) ;
    //PIEaddElement(l11Mesh) ;
 
    	l12 = new THREE.Geometry() ;
    l12.vertices.push(new THREE.Vector3(2.6, -3.5, 0)) ;
    l12.vertices.push(new THREE.Vector3(2.6, -5.5, 0)) ;
    	l12Mesh = new THREE.Line(l12, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1})) ;
    //PIEaddElement(l12Mesh) ;

    	l122 = new THREE.Geometry() ;
    l122.vertices.push(new THREE.Vector3(3.4, -3.5, 0)) ;
    l122.vertices.push(new THREE.Vector3(3.4, -5.5, 0)) ;
    	l122Mesh = new THREE.Line(l122, new THREE.LineBasicMaterial({color:0x093644, linewidth : 1})) ;
    //PIEaddElement(l122Mesh) ;
    /*End of Generator ans turbine section*/ 
    
    /*Begin of transformer section*/
    
   	var g12 = new THREE.Geometry();
   	g12.vertices.push(new THREE.Vector3(-14, 13, 0)) ;
   	g12.vertices.push(new THREE.Vector3(-14, 8, 0)) ;
   	g12.vertices.push(new THREE.Vector3(-10, 8, 0)) ;
   	g12.vertices.push(new THREE.Vector3(-10, 13, 0)) ;
   	g12.faces.push(new THREE.Face3(0, 1, 2)) ;
   	g12.faces.push(new THREE.Face3(0, 2, 3)) ;
   	var g12Mesh = new THREE.Mesh(g12, new THREE.MeshBasicMaterial({color : 0x093644})) ;
   	PIEaddElement(g12Mesh) ;    
    
   	var g13 = new THREE.Geometry();
   	g13.vertices.push(new THREE.Vector3(-13, 9, 0)) ;
   	g13.vertices.push(new THREE.Vector3(-13, 8.8, 0)) ;
   	g13.vertices.push(new THREE.Vector3(-11, 8.8, 0)) ;
   	g13.vertices.push(new THREE.Vector3(-11, 9, 0)) ;
   	g13.faces.push(new THREE.Face3(0, 1, 2)) ;
   	g13.faces.push(new THREE.Face3(0, 2, 3)) ;
   	var g13Mesh = new THREE.Mesh(g13, new THREE.MeshBasicMaterial({color : 0x00ff00})) ;
   	PIEaddElement(g13Mesh) ;
    
   	var g14 = new THREE.Geometry();
   	g14.vertices.push(new THREE.Vector3(-13, 10, 0)) ;
   	g14.vertices.push(new THREE.Vector3(-13, 9.8, 0)) ;
   	g14.vertices.push(new THREE.Vector3(-11, 9.8, 0)) ;
   	g14.vertices.push(new THREE.Vector3(-11, 10, 0)) ;
   	g14.faces.push(new THREE.Face3(0, 1, 2)) ;
   	g14.faces.push(new THREE.Face3(0, 2, 3)) ;
   	var g14Mesh = new THREE.Mesh(g14, new THREE.MeshBasicMaterial({color : 0x00ff00})) ;
   	PIEaddElement(g14Mesh) ;
   	    
   	var g15 = new THREE.Geometry();
   	g15.vertices.push(new THREE.Vector3(-15, 8, 0)) ;
   	g15.vertices.push(new THREE.Vector3(-15, 7, 0)) ;
   	g15.vertices.push(new THREE.Vector3(-9, 7, 0)) ;
   	g15.vertices.push(new THREE.Vector3(-9, 8, 0)) ;
   	g15.faces.push(new THREE.Face3(0, 1, 2)) ;
   	g15.faces.push(new THREE.Face3(0, 2, 3)) ;
   	var g15Mesh = new THREE.Mesh(g15, new THREE.MeshBasicMaterial({color : 0x093644})) ;
   	PIEaddElement(g15Mesh) ;    
   	
   	var l13 = new THREE.Geometry() ;
    l13.vertices.push(new THREE.Vector3(-11.4, 13.1, 0)) ;
    l13.vertices.push(new THREE.Vector3(-10.4, 13.1, 0)) ;
    var l13Mesh = new THREE.Line(l13, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1.5})) ;
    PIEaddElement(l13Mesh) ;
    
   	var l14 = new THREE.Geometry() ;
    l14.vertices.push(new THREE.Vector3(-11.2, 13.3, 0)) ;
    l14.vertices.push(new THREE.Vector3(-10.6, 13.3, 0)) ;
    var l14Mesh = new THREE.Line(l14, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1.5})) ;
    PIEaddElement(l14Mesh) ;

   	var l15 = new THREE.Geometry() ;
    l15.vertices.push(new THREE.Vector3(-11.0, 13.5, 0)) ;
    l15.vertices.push(new THREE.Vector3(-10.8, 13.5, 0)) ;
    var l15Mesh = new THREE.Line(l15, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1.5})) ;
    PIEaddElement(l15Mesh) ;

   	var l16 = new THREE.Geometry() ;
    l16.vertices.push(new THREE.Vector3(-13.4, 13.1, 0)) ;
    l16.vertices.push(new THREE.Vector3(-12.4, 13.1, 0)) ;
    var l16Mesh = new THREE.Line(l16, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1.5})) ;
    PIEaddElement(l16Mesh) ;
    
   	var l17 = new THREE.Geometry() ;
    l17.vertices.push(new THREE.Vector3(-13.2, 13.3, 0)) ;
    l17.vertices.push(new THREE.Vector3(-12.6, 13.3, 0)) ;
    var l17Mesh = new THREE.Line(l17, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1.5})) ;
    PIEaddElement(l17Mesh) ;

   	var l18 = new THREE.Geometry() ;
    l18.vertices.push(new THREE.Vector3(-13.0, 13.5, 0)) ;
    l18.vertices.push(new THREE.Vector3(-12.8, 13.5, 0)) ;
    var l18Mesh = new THREE.Line(l18, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 2})) ;
    PIEaddElement(l18Mesh) ;

   	var l19 = new THREE.Geometry() ;
    l19.vertices.push(new THREE.Vector3(-5.5, 5, 0)) ;
    l19.vertices.push(new THREE.Vector3(-8.5, 5, 0)) ;
    var l19Mesh = new THREE.Line(l19, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 2})) ;
    PIEaddElement(l19Mesh) ;
    
   	var l20 = new THREE.Geometry() ;
    l20.vertices.push(new THREE.Vector3(-8.5, 5, 0)) ;
    l20.vertices.push(new THREE.Vector3(-8.5, 13.5, 0)) ;
    var l20Mesh = new THREE.Line(l20, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 2})) ;
    PIEaddElement(l20Mesh) ;

   	var l21 = new THREE.Geometry() ;
    l21.vertices.push(new THREE.Vector3(-8.5, 13.6, 0)) ;
    l21.vertices.push(new THREE.Vector3(-10.8, 13.6, 0)) ;
    var l21Mesh = new THREE.Line(l21, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 2})) ;
    PIEaddElement(l21Mesh) ;
    
 	var l22 = new THREE.Geometry() ;
    l22.vertices.push(new THREE.Vector3(-12.9, 13.6, 0)) ;
    l22.vertices.push(new THREE.Vector3(-12.9, 21.6, 0)) ;
    var l22Mesh = new THREE.Line(l22, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 2})) ;
    PIEaddElement(l22Mesh) ;            

   	var l23 = new THREE.Geometry() ;
    l23.vertices.push(new THREE.Vector3(-12.9, 21.6, 0)) ;
    l23.vertices.push(new THREE.Vector3(24 , 21.6, 0)) ;
    var l23Mesh = new THREE.Line(l23, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 2})) ;
    PIEaddElement(l23Mesh) ;
	
	var sphere = new THREE.SphereGeometry( 0.35, 16, 8 );
	light1 = new THREE.PointLight( 0xff0040, 2, 50 );
	light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xffffff } ) ) );
	light1.position.set(-12.9, 13.6, 0) ;
	PIEaddElement( light1 );
        
    /*End of transformer section*/  
    
    /*Electrical Line Section*/

   	var l24 = new THREE.Geometry() ;
    l24.vertices.push(new THREE.Vector3(24, 21.6, 0)) ;
    l24.vertices.push(new THREE.Vector3(23 , 20.6, 0)) ;
    var l24Mesh = new THREE.Line(l24, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1})) ;
    PIEaddElement(l24Mesh) ; 

   	var l25 = new THREE.Geometry() ;
    l25.vertices.push(new THREE.Vector3(24, 21.6, 0)) ;
    l25.vertices.push(new THREE.Vector3(25 , 20.6, 0)) ;
    var l25Mesh = new THREE.Line(l25, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1})) ;
    PIEaddElement(l25Mesh) ; 

   	var l26 = new THREE.Geometry() ;
    l26.vertices.push(new THREE.Vector3(23, 20.6, 0)) ;
    l26.vertices.push(new THREE.Vector3(23, 17.6, 0)) ;
    var l26Mesh = new THREE.Line(l26, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1})) ;
    PIEaddElement(l26Mesh) ;

   	var l27 = new THREE.Geometry() ;
    l27.vertices.push(new THREE.Vector3(25, 20.6, 0)) ;
    l27.vertices.push(new THREE.Vector3(25, 17.6, 0)) ;
    var l27Mesh = new THREE.Line(l27, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1})) ;
    PIEaddElement(l27Mesh) ;     

   	var l28 = new THREE.Geometry() ;
    l28.vertices.push(new THREE.Vector3(23, 17.6, 0)) ;
    l28.vertices.push(new THREE.Vector3(22, 15, 0)) ;
    var l28Mesh = new THREE.Line(l28, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1})) ;
    PIEaddElement(l28Mesh) ;              

   	var l29 = new THREE.Geometry() ;
    l29.vertices.push(new THREE.Vector3(25, 17.6, 0)) ;
    l29.vertices.push(new THREE.Vector3(26, 15, 0)) ;
    var l29Mesh = new THREE.Line(l29, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1})) ;
    PIEaddElement(l29Mesh) ;     

   	var l30 = new THREE.Geometry() ;
    l30.vertices.push(new THREE.Vector3(22, 15, 0)) ;
    l30.vertices.push(new THREE.Vector3(22, 12.6, 0)) ;
    var l30Mesh = new THREE.Line(l30, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1})) ;
    PIEaddElement(l30Mesh) ;     
    
   	var l31 = new THREE.Geometry() ;
    l31.vertices.push(new THREE.Vector3(26, 15, 0)) ;
    l31.vertices.push(new THREE.Vector3(26, 12.6, 0)) ;
    var l31Mesh = new THREE.Line(l31, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1})) ;
    PIEaddElement(l31Mesh) ;         

   	var l32 = new THREE.Geometry() ;
    l32.vertices.push(new THREE.Vector3(22, 15, 0)) ;
    l32.vertices.push(new THREE.Vector3(26, 15, 0)) ;
    var l32Mesh = new THREE.Line(l32, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1})) ;
    PIEaddElement(l32Mesh) ;        

   	var l33 = new THREE.Geometry() ;
    l33.vertices.push(new THREE.Vector3(22, 12.6, 0)) ;
    l33.vertices.push(new THREE.Vector3(24, 15, 0)) ;
    var l33Mesh = new THREE.Line(l33, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1})) ;
    PIEaddElement(l33Mesh) ;         

   	var l34 = new THREE.Geometry() ;
    l34.vertices.push(new THREE.Vector3(26, 12.6, 0)) ;
    l34.vertices.push(new THREE.Vector3(24, 15, 0)) ;
    var l34Mesh = new THREE.Line(l34, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1})) ;
    PIEaddElement(l34Mesh) ;         

   	var l35 = new THREE.Geometry() ;
    l35.vertices.push(new THREE.Vector3(26, 15, 0)) ;
    l35.vertices.push(new THREE.Vector3(23, 17.6, 0)) ;
    var l35Mesh = new THREE.Line(l35, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1})) ;
    PIEaddElement(l35Mesh) ;

   	var l36 = new THREE.Geometry() ;
    l36.vertices.push(new THREE.Vector3(22, 15, 0)) ;
    l36.vertices.push(new THREE.Vector3(25, 17.6, 0)) ;
    var l36Mesh = new THREE.Line(l36, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1})) ;
    PIEaddElement(l36Mesh) ;

   	var l37 = new THREE.Geometry() ;
    l37.vertices.push(new THREE.Vector3(23, 20.6, 0)) ;
    l37.vertices.push(new THREE.Vector3(25, 18.6, 0)) ;
    var l37Mesh = new THREE.Line(l37, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1})) ;
    PIEaddElement(l37Mesh) ;

   	var l38 = new THREE.Geometry() ;
    l38.vertices.push(new THREE.Vector3(23, 18.6, 0)) ;
    l38.vertices.push(new THREE.Vector3(25, 20.6, 0)) ;
    var l38Mesh = new THREE.Line(l38, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 1})) ;
    PIEaddElement(l38Mesh) ;

   	var l38 = new THREE.Geometry() ;
    l38.vertices.push(new THREE.Vector3(24, 21.6, 0)) ;
    l38.vertices.push(new THREE.Vector3(66, 21.6, 0)) ;
    var l38Mesh = new THREE.Line(l38, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 2})) ;
    PIEaddElement(l38Mesh) ;
    /*End of Electrical Line Section*/   
    
    /*Dam Section*/
   	var l39 = new THREE.Geometry() ;
    l39.vertices.push(new THREE.Vector3(-2.8, -2.9, 0)) ;
    l39.vertices.push(new THREE.Vector3(-8.6, -2.9, 0)) ;
    var l39Mesh = new THREE.Line(l39, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 2})) ;
    PIEaddElement(l39Mesh) ;
     
   	var l40 = new THREE.Geometry() ;
    l40.vertices.push(new THREE.Vector3(-2.8, -6.1, 0)) ;
    l40.vertices.push(new THREE.Vector3(-9.8, -6.1, 0)) ;
    var l40Mesh = new THREE.Line(l40, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 2})) ;
    PIEaddElement(l40Mesh) ;


	p1 = new THREE.Geometry() ;
	p1.vertices.push(new THREE.Vector3(-8.6, -3.1, 0)) ;
	p1.vertices.push(new THREE.Vector3(-9.8, -6.0, 0)) ;
	p1.vertices.push(new THREE.Vector3(-3.8, -6.1, 0)) ;
	p1.vertices.push(new THREE.Vector3(-3.8, -3.1, 0)) ;
	p1.faces.push(new THREE.Face3(0, 1, 2)) ;
	p1.faces.push(new THREE.Face3(0, 2, 3)) ;
	p1Mesh = new THREE.Mesh(p1, new THREE.MeshBasicMaterial({color : 0xcfcccb})) ;
	PIEaddElement(p1Mesh) ;

	p2 = new THREE.Geometry() ;
	p2.vertices.push(new THREE.Vector3(-25.6, 8.7, 0)) ;
	p2.vertices.push(new THREE.Vector3(-26.8, 5.7, 0)) ;
	p2.vertices.push(new THREE.Vector3(-9.8, -6.0, 0)) ;
	p2.vertices.push(new THREE.Vector3(-8.6, -3.1, 0)) ;
	p2.faces.push(new THREE.Face3(0, 1, 2)) ;
	p2.faces.push(new THREE.Face3(0, 2, 3)) ;
	p2Mesh = new THREE.Mesh(p2, new THREE.MeshBasicMaterial({color : 0xcfcccb})) ;
	PIEaddElement(p2Mesh) ;

	p3 = new THREE.Geometry() ;
	p3.vertices.push(new THREE.Vector3(-28.6, 8.7, 0)) ;
	p3.vertices.push(new THREE.Vector3(-29.8, 5.7, 0)) ;
	p3.vertices.push(new THREE.Vector3(-26.8, 5.7, 0)) ;
	p3.vertices.push(new THREE.Vector3(-25.6, 8.7, 0)) ;
	p3.faces.push(new THREE.Face3(0, 1, 2)) ;
	p3.faces.push(new THREE.Face3(0, 2, 3)) ;
	p3Mesh = new THREE.Mesh(p3, new THREE.MeshBasicMaterial({color : 0xcfcccb})) ;
	PIEaddElement(p3Mesh) ;

   	var l41 = new THREE.Geometry() ;
    l41.vertices.push(new THREE.Vector3(-25.6, 8.9, 0)) ;
    l41.vertices.push(new THREE.Vector3(-8.6, -2.9, 0)) ;
    var l41Mesh = new THREE.Line(l41, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 2})) ;
    PIEaddElement(l41Mesh) ;
     
   	var l42 = new THREE.Geometry() ;
    l42.vertices.push(new THREE.Vector3(-9.8, -6.1, 0)) ;
    l42.vertices.push(new THREE.Vector3(-26.8, 5.7, 0)) ;
    var l42Mesh = new THREE.Line(l42, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 2})) ;
    PIEaddElement(l42Mesh) ;

   	var l43 = new THREE.Geometry() ;
    l43.vertices.push(new THREE.Vector3(-28.8, 5.7, 0)) ;
    l43.vertices.push(new THREE.Vector3(-26.8, 5.7, 0)) ;
    var l43Mesh = new THREE.Line(l43, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 2})) ;
    PIEaddElement(l43Mesh) ;    

   	var l44 = new THREE.Geometry() ;
    l44.vertices.push(new THREE.Vector3(-25.6, 8.9, 0)) ;
    l44.vertices.push(new THREE.Vector3(-27.6, 8.9, 0)) ;
    var l44Mesh = new THREE.Line(l44, new THREE.LineBasicMaterial({color:0x6d8d7a, linewidth : 2})) ;
    PIEaddElement(l44Mesh) ;

   	var g16 = new THREE.Geometry();
   	g16.vertices.push(new THREE.Vector3(-63, 13, 0)) ;
   	g16.vertices.push(new THREE.Vector3(-63, 0, 0)) ;
   	g16.vertices.push(new THREE.Vector3(-30, 0, 0)) ;
   	g16.vertices.push(new THREE.Vector3(-27, 13, 0)) ;
   	g16.faces.push(new THREE.Face3(0, 1, 2)) ;
   	g16.faces.push(new THREE.Face3(0, 2, 3)) ;
   	var g16Mesh = new THREE.Mesh(g16, new THREE.MeshBasicMaterial({color : 0x0066FF})) ;
   	PIEaddElement(g16Mesh) ; 

   	var g17 = new THREE.Geometry();
   	g17.vertices.push(new THREE.Vector3(-30, 0, 0)) ;
   	g17.vertices.push(new THREE.Vector3(-30, -27, 0)) ;
   	g17.vertices.push(new THREE.Vector3(-11.3, -27, 0)) ;
   	g17.vertices.push(new THREE.Vector3(-11.3, -11.3, 0)) ;
   	g17.faces.push(new THREE.Face3(0, 1, 2)) ;
   	g17.faces.push(new THREE.Face3(0, 2, 3)) ;
   	var g17Mesh = new THREE.Mesh(g17, new THREE.MeshBasicMaterial({color : 0x333333})) ;
   	PIEaddElement(g17Mesh) ;

   	var g18 = new THREE.Geometry();
   	g18.vertices.push(new THREE.Vector3(-11.3, -11.4, 0)) ;
   	g18.vertices.push(new THREE.Vector3(-11.4, -27, 0)) ;
   	g18.vertices.push(new THREE.Vector3(67, -27, 0)) ;
   	g18.vertices.push(new THREE.Vector3(67, -11.4, 0)) ;
   	g18.faces.push(new THREE.Face3(0, 1, 2)) ;
   	g18.faces.push(new THREE.Face3(0, 2, 3)) ;
   	var g18Mesh = new THREE.Mesh(g18, new THREE.MeshBasicMaterial({color : 0x333333})) ;
   	PIEaddElement(g18Mesh) ;
   	
   	var g19 = new THREE.Geometry();
   	g19.vertices.push(new THREE.Vector3(-63, 0, 0)) ;
   	g19.vertices.push(new THREE.Vector3(-63, -27, 0)) ;
   	g19.vertices.push(new THREE.Vector3(-30, -27, 0)) ;
   	g19.vertices.push(new THREE.Vector3(-30, -0, 0)) ;
   	g19.faces.push(new THREE.Face3(0, 1, 2)) ;
   	g19.faces.push(new THREE.Face3(0, 2, 3)) ;
   	var g19Mesh = new THREE.Mesh(g19, new THREE.MeshBasicMaterial({color : 0x333333})) ;
   	PIEaddElement(g19Mesh) ;

   	var g20 = new THREE.Geometry();
   	g20.vertices.push(new THREE.Vector3(-26.8, 5.5, 0)) ;
   	g20.vertices.push(new THREE.Vector3(-30, 0, 0)) ;
   	g20.vertices.push(new THREE.Vector3(-11.3, -11.3, 0)) ;
   	g20.vertices.push(new THREE.Vector3(-9.9, -6.3, 0)) ;
   	g20.faces.push(new THREE.Face3(0, 1, 2)) ;
   	g20.faces.push(new THREE.Face3(0, 2, 3)) ;
   	var g20Mesh = new THREE.Mesh(g20, new THREE.MeshBasicMaterial({color : 0x999999})) ;
   	PIEaddElement(g20Mesh) ;

   	var g21 = new THREE.Geometry();
   	g21.vertices.push(new THREE.Vector3(-28.8, 5.5, 0)) ;
   	g21.vertices.push(new THREE.Vector3(-30, 0, 0)) ;
   	g21.vertices.push(new THREE.Vector3(-26.8, 5.5, 0)) ;
   	g21.vertices.push(new THREE.Vector3(-9.9, -6.3, 0)) ;
   	g21.faces.push(new THREE.Face3(0, 1, 2)) ;
   	//g21.faces.push(new THREE.Face3(0, 2, 3)) ;
   	var g21Mesh = new THREE.Mesh(g21, new THREE.MeshBasicMaterial({color : 0x999999})) ;
   	PIEaddElement(g21Mesh) ;

   	var g22 = new THREE.Geometry();
   	g22.vertices.push(new THREE.Vector3(-9.9, -6.3, 0)) ;
   	g22.vertices.push(new THREE.Vector3(-11.3, -11.3, 0)) ;
   	g22.vertices.push(new THREE.Vector3(60, -11.3, 0)) ;
   	g22.vertices.push(new THREE.Vector3(60, -6.3, 0)) ;
   	g22.faces.push(new THREE.Face3(0, 1, 2)) ;
   	g22.faces.push(new THREE.Face3(0, 2, 3)) ;
   	var g22Mesh = new THREE.Mesh(g22, new THREE.MeshBasicMaterial({color : 0x999999})) ;
   	PIEaddElement(g22Mesh) ;	
   	//Gate
   	var l45 = new THREE.Geometry() ;
    l45.vertices.push(new THREE.Vector3(-28.1, 8.9, 0)) ;
    l45.vertices.push(new THREE.Vector3(-28.8, 5.7, 0)) ;
    var l45Mesh = new THREE.Line(l45, new THREE.LineBasicMaterial({color:0xFF0000, linewidth : 4})) ;
    //PIEaddElement(l45Mesh) ;
    
 	p4 = new THREE.Geometry();
   	p4.vertices.push(new THREE.Vector3(-2.6, -6.3, 0)) ;
   	p4.vertices.push(new THREE.Vector3(-2.6, -9, 0)) ;
   	p4.vertices.push(new THREE.Vector3(1.6, -9, 0)) ;
   	p4.vertices.push(new THREE.Vector3(1.6, -6.3, 0)) ;
   	p4.faces.push(new THREE.Face3(0, 1, 2)) ;
   	p4.faces.push(new THREE.Face3(0, 2, 3)) ;
 	p4Mesh = new THREE.Mesh(p4, new THREE.MeshBasicMaterial({color : 0x0066FF})) ;
   	PIEaddElement(p4Mesh) ;

  	p5 = new THREE.Geometry();
   	p5.vertices.push(new THREE.Vector3(-2.6, -8.1, 0)) ;
   	p5.vertices.push(new THREE.Vector3(-2.6, -10.3, 0)) ;
   	p5.vertices.push(new THREE.Vector3(64.6, -10.3, 0)) ;
   	p5.vertices.push(new THREE.Vector3(64.6, -8.1, 0)) ;
   	p5.faces.push(new THREE.Face3(0, 1, 2)) ;
   	p5.faces.push(new THREE.Face3(0, 2, 3)) ;
  	p5Mesh = new THREE.Mesh(p5, new THREE.MeshBasicMaterial({color : 0x0066FF})) ;
   	PIEaddElement(p5Mesh) ;   	
   	
	var circle = createMesh(new THREE.CircleGeometry(2, 50));
	circle.position.set(5.4, -4.3, 0) ;
	//PIEaddElement(circle) ;
	/*End of Dam section*/		
//	var loader = new THREE.FontLoader();
//	loader.load( 'assets/helvetiker_regular.typeface.json', function ( font ) {

//  	var gtextGeometry = new THREE.TextGeometry( "Generator", { font: font, size: 1.4, height: 1, curveSegments: 7});

//  	var gtextMaterial = new THREE.MeshBasicMaterial( { color: "black" });

//  	var gmesh = new THREE.Mesh( gtextGeometry, gtextMaterial );
//	gmesh.position.set(7, 4, 0) ;
//	gmesh.rotation.y = -0.05 ;
//	//gmesh.rotation.z = -0.05 ;
//	//gmesh.rotation.y = -0.2 ;
//  	PIEaddElement( gmesh );
//  	
//  	PIErender() ;
//  	
//  	var ttextGeometry = new THREE.TextGeometry( "Transformer", { font: font, size: 1.4, height: 1, curveSegments: 7});

//  	var ttextMaterial = new THREE.MeshBasicMaterial( { color: "black" });

//  	var tmesh = new THREE.Mesh( ttextGeometry, ttextMaterial );
//	tmesh.position.set(-7, 11, 0) ;
//	tmesh.rotation.x = 0.2 ;
//	tmesh.rotation.y = 0.005 ;
//  	PIEaddElement( tmesh );
//	
//	PIErender() ;
//  	var etextGeometry = new THREE.TextGeometry( "Electrical System", { font: font, size: 1.3, height: 1, curveSegments: 7});

//  	var etextMaterial = new THREE.MeshBasicMaterial( { color: "black" });

//  	var emesh = new THREE.Mesh( etextGeometry, etextMaterial );
//	emesh.position.set(15, 23, 0) ;
//	emesh.rotation.x = 0.2 ;
//	emesh.rotation.y = -0.2 ;
//  	PIEaddElement( emesh );
//	
//	PIErender() ;
//  	var turbinetextGeometry = new THREE.TextGeometry( "Turbine", { font: font, size: 1.4, height: 1, curveSegments: 7});

//  	var turbinetextMaterial = new THREE.MeshBasicMaterial( { color: "black" });

//  	var turbinemesh = new THREE.Mesh( turbinetextGeometry, turbinetextMaterial );
//	turbinemesh.position.set(4, -5, 0) ;
//	PIEaddElement( turbinemesh );
//  	
//  	PIErender() ;
//  	
//  	var htextGeometry = new THREE.TextGeometry( "Higher-Reservior", { font: font, size: 1.4, height: 1, curveSegments: 7});

//  	var htextMaterial = new THREE.MeshBasicMaterial( { color: "black" });

//  	var hmesh = new THREE.Mesh( htextGeometry, htextMaterial );
//	hmesh.position.set(-52, 14, 0) ;
//	hmesh.rotation.y = 0.4; 
//	hmesh.rotation.x = 0.1;
//  	PIEaddElement( hmesh );
//	
//	PIErender() ;
//	});

// Example text options : {'font' : 'helvetiker','weight' : 'normal', 'style' : 'normal','size' : 100,'curveSegments' : 300};
	var planeGeometry = new THREE.PlaneGeometry(1000, 6000) ;
	var planeMaterial = new THREE.MeshBasicMaterial({ color : 0x87ceeb}) ;
	var plane = new THREE.Mesh(planeGeometry, planeMaterial) ;
	
	
	var s1 = new THREE.SphereGeometry(2, 52, 53) ;
	var s1Mesh = new THREE.Mesh(s1, new THREE.MeshBasicMaterial({color : 0xffffff})) ;
	s1Mesh.position.set(-38, 23, 0) ;
	PIEaddElement(s1Mesh) ;
	var s1 = new THREE.SphereGeometry(1.8, 52, 53) ;
	var s1Mesh = new THREE.Mesh(s1, new THREE.MeshBasicMaterial({color : 0xffffff})) ;
	s1Mesh.position.set(-40.5, 22.2, 0) ;
	PIEaddElement(s1Mesh) ;
	var s1 = new THREE.SphereGeometry(1.5, 52, 53) ;
	var s1Mesh = new THREE.Mesh(s1, new THREE.MeshBasicMaterial({color : 0xffffff})) ;
	s1Mesh.position.set(-42.5, 20.8, 0) ;
	PIEaddElement(s1Mesh) ;
	var s1 = new THREE.SphereGeometry(1.8, 52, 53) ;
	var s1Mesh = new THREE.Mesh(s1, new THREE.MeshBasicMaterial({color : 0xffffff})) ;
	s1Mesh.position.set(-40.5, 21, 0) ;
	PIEaddElement(s1Mesh) ;
	var s1 = new THREE.SphereGeometry(2, 52, 53) ;
	var s1Mesh = new THREE.Mesh(s1, new THREE.MeshBasicMaterial({color : 0xffffff})) ;
	s1Mesh.position.set(-37, 21, 0) ;
	PIEaddElement(s1Mesh) ;		
/*Newely added arrows*/
	var g23 = new THREE.Geometry() ;
	g23.vertices.push(new THREE.Vector3(-24.5, 6.5, 0)) ;
	g23.vertices.push(new THREE.Vector3(-25.0, 6.0, 0)) ;
	g23.vertices.push(new THREE.Vector3(-24.5, 5.5, 0)) ;
	g23.vertices.push(new THREE.Vector3(-24.2, 6.2, 0)) ;
	g23.vertices.push(new THREE.Vector3(-24.5, 5.2, 0)) ;
	g23.vertices.push(new THREE.Vector3(-24.0, 5.5, 0)) ;
	g23.vertices.push(new THREE.Vector3(-24.0, 6.3, 0)) ;
	g23.faces.push(new THREE.Face3(0, 1, 2)) ;
	g23.faces.push(new THREE.Face3(0, 2, 3)) ;
	g23.faces.push(new THREE.Face3(4, 5, 6)) ;
	g23Mesh = new THREE.Mesh(g23, new THREE.MeshBasicMaterial({color : "white"})) ;
	//PIEaddElement(g23Mesh) ;

	var g24 = new THREE.Geometry() ;
	g24.vertices.push(new THREE.Vector3(-22.5, 4.5, 0)) ;
	g24.vertices.push(new THREE.Vector3(-23.0, 4.0, 0)) ;
	g24.vertices.push(new THREE.Vector3(-22.5, 3.5, 0)) ;
	g24.vertices.push(new THREE.Vector3(-22.2, 4.2, 0)) ;
	g24.vertices.push(new THREE.Vector3(-22.5, 3.2, 0)) ;
	g24.vertices.push(new THREE.Vector3(-22.0, 3.5, 0)) ;
	g24.vertices.push(new THREE.Vector3(-22.0, 4.3, 0)) ;
	g24.faces.push(new THREE.Face3(0, 1, 2)) ;
	g24.faces.push(new THREE.Face3(0, 2, 3)) ;
	g24.faces.push(new THREE.Face3(4, 5, 6)) ;
	g24Mesh = new THREE.Mesh(g24, new THREE.MeshBasicMaterial({color : 0xcfcccb})) ;
	PIEaddElement(g24Mesh) ;
	
	var g25 = new THREE.Geometry() ;
	g25.vertices.push(new THREE.Vector3(-18.5, 2.5, 0)) ;
	g25.vertices.push(new THREE.Vector3(-19.0, 2.0, 0)) ;
	g25.vertices.push(new THREE.Vector3(-18.5, 1.5, 0)) ;
	g25.vertices.push(new THREE.Vector3(-18.2, 2.2, 0)) ;
	g25.vertices.push(new THREE.Vector3(-18.5, 1.2, 0)) ;
	g25.vertices.push(new THREE.Vector3(-18.0, 1.5, 0)) ;
	g25.vertices.push(new THREE.Vector3(-18.0, 2.3, 0)) ;
	g25.faces.push(new THREE.Face3(0, 1, 2)) ;
	g25.faces.push(new THREE.Face3(0, 2, 3)) ;
	g25.faces.push(new THREE.Face3(4, 5, 6)) ;
	g25Mesh = new THREE.Mesh(g25, new THREE.MeshBasicMaterial({color : 0xcfcccb})) ;
	//PIEaddElement(g25Mesh) ;	
	
	var g26 = new THREE.Geometry() ;
	g26.vertices.push(new THREE.Vector3(-15.5, 0.5, 0)) ;
	g26.vertices.push(new THREE.Vector3(-16.0, 0.0, 0)) ;
	g26.vertices.push(new THREE.Vector3(-15.5, -0.5, 0)) ;
	g26.vertices.push(new THREE.Vector3(-15.2, 0.2, 0)) ;
	g26.vertices.push(new THREE.Vector3(-15.5, -0.8, 0)) ;
	g26.vertices.push(new THREE.Vector3(-15.0, -0.5, 0)) ;
	g26.vertices.push(new THREE.Vector3(-15.0, 0.3, 0)) ;
	g26.faces.push(new THREE.Face3(0, 1, 2)) ;
	g26.faces.push(new THREE.Face3(0, 2, 3)) ;
	g26.faces.push(new THREE.Face3(4, 5, 6)) ;
	g26Mesh = new THREE.Mesh(g26, new THREE.MeshBasicMaterial({color : "white"})) ;
	//PIEaddElement(g26Mesh) ;

	var g27 = new THREE.Geometry() ;
	g27.vertices.push(new THREE.Vector3(-12.5, -1.5, 0)) ;
	g27.vertices.push(new THREE.Vector3(-13.0, -2.0, 0)) ;
	g27.vertices.push(new THREE.Vector3(-12.5, -2.5, 0)) ;
	g27.vertices.push(new THREE.Vector3(-12.2, -1.8, 0)) ;
	g27.vertices.push(new THREE.Vector3(-12.5, -2.8, 0)) ;
	g27.vertices.push(new THREE.Vector3(-12.0, -2.5, 0)) ;
	g27.vertices.push(new THREE.Vector3(-12.0, -1.7, 0)) ;
	g27.faces.push(new THREE.Face3(0, 1, 2)) ;
	g27.faces.push(new THREE.Face3(0, 2, 3)) ;
	g27.faces.push(new THREE.Face3(4, 5, 6)) ;
	g27Mesh = new THREE.Mesh(g27, new THREE.MeshBasicMaterial({color : 0xcfcccb})) ;
	PIEaddElement(g27Mesh) ;
/*End of arrow section*/

/*End of arrow section*/

	
	window.addEventListener("click",even);
	plane.position.set(0, 0, -10) ;
	PIEaddElement(plane) ;
	
    PIEsetAreaOfInterest(-30, 30, 25, -30) ;
    PIEadjustCamera(0, 4, 120) ;
    resetExperiment() ;
}
function even(event) {
	var vector = new THREE.Vector3(( event.clientX / window.innerWidth ) * 2 - 1, -( event.clientY / window.innerHeight ) * 2 + 1,-2);
    vector = vector.unproject(PIEcamera);

    var raycaster = new THREE.Raycaster(PIEcamera.position, vector.sub(PIEcamera.position).normalize());
    
    var intersects = raycaster.intersectObjects(PIEscene.children,true);
    //alert(intersects.length) ;
    for(var i=0;i<intersects.length;i++)
    {
		 	var c=intersects[i].object.name.charAt(0);
		 	//alert(intersects[i].object) ;
 		 	if(c=='g') {
		 		break ;
		 	}
	}
	if(c == 'g' && flag == 0) {
		elem.style.display = "block" ;
		flag = 1 ;
		hinfo.innerHTML = "" ;
	} else {
		elem.style.display = "none" ;
		flag = 0 ;		
		hinfo.innerHTML = "<h1>Higher-Reservior</h1>" ;
	}
}





function createMesh(geom) {
	// assign two materials
	var meshMaterial = new THREE.MeshNormalMaterial({color : 0x0066FF});
	meshMaterial.side = THREE.DoubleSide;
	var wireFrameMat = new THREE.MeshBasicMaterial({color : 0x0066FF});
	wireFrameMat.wireframe = false;
	// create a multimaterial
	var mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial, wireFrameMat]);
	return mesh;
}
function resetExperiment() {
    //yet to do
    p1Mesh.material.color.setHex(0xcfcccb) ;
	p2Mesh.material.color.setHex(0xcfcccb) ;
	p3Mesh.material.color.setHex(0xcfcccb) ;
	p4Mesh.material.color.setHex(0xcfcccb) ;
	p5Mesh.material.color.setHex(0xcfcccb) ;
	light1.position.set(-12.8, 13.6, 0) ;
	g24Mesh.position.set(0, 0, 0) ;
	g27Mesh.position.set(0, 0, 0) ;
	cnt = 0 ;
	if(ct > 0) {
	g24Mesh.material.color.setHex(0xcfcccb) ;
	g27Mesh.material.color.setHex(0xcfcccb) ;
	}
	ct++ ;
	PIErender() ;
	PIErender() ;
}
function updateExperimentElements(t, dt) {
	if(cntt === 0) {
		cntt = 1 ;
		return ;
	}
    //yet to do
    /*g23Mesh.position.x += 0.11 ;
    g23Mesh.position.y -= 0.11 ;
    g23Mesh.position.z -= 0.11 ;*/
    
	g24Mesh.position.x += 0.2 ;
    g24Mesh.position.y -= 0.2 ;
    g24Mesh.position.z -= 0.2 ;
    
    /*g25Mesh.position.x += 0.1 ;
    g25Mesh.position.y -= 0.1 ;
    g25Mesh.position.z -= 0.1 ;
    
    g26Mesh.position.x += 0.1 ;
    g26Mesh.position.y -= 0.1 ;                
    g26Mesh.position.z -= 0.1 ;*/
    
    g27Mesh.position.x += 0.2 ;
    g27Mesh.position.y -= 0.2 ;
    g27Mesh.position.z -= 0.2 ;
    if(cnt % 31 == 0) {
   		g24Mesh.position.x -= 6.2 ;
    	g24Mesh.position.y += 6.2 ;
    	g24Mesh.position.z += 6.2 ;
    	
/*    	g24Mesh.position.x = -3 ;
    	g24Mesh.position.y = 3 ;
    	g24Mesh.position.z = 3 ;

    	g25Mesh.position.x -= 3 ;
    	g25Mesh.position.y += 3 ;
    	g25Mesh.position.z += 3 ;

    	g26Mesh.position.x -= 3 ;
    	g26Mesh.position.y += 3 ;
    	g26Mesh.position.z += 3 ;*/
    }
    if(cnt % 31 == 0) {
    	g27Mesh.position.x -= 6.2 ;
    	g27Mesh.position.y += 6.2 ;
    	g27Mesh.position.z += 6.2 ;
    }
	while(light1.position.y < 21.6) {
		light1.position.y += 1 ;
	}
	if(light1.position.x > 60) {
		light1.position.x = -12.8 ;
		light1.position.y = 13.6 ;
	}
	if(light1.position.y >= 21.6) {
		light1.position.x += 1 ;
	}
    p1Mesh.material.color.setHex(0x0066FF) ;
	p2Mesh.material.color.setHex(0x0066FF) ;
	p3Mesh.material.color.setHex(0x0066FF) ;
	p4Mesh.material.color.setHex(0x0066FF) ;
	p5Mesh.material.color.setHex(0x0066FF) ;
	g24Mesh.material.color.setHex(0xffffff) ;
	g27Mesh.material.color.setHex(0xffffff) ;
	cylinderMesh.rotation.y += 0.05 ;
	cnt += 1 ;
} 
