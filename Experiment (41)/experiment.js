var line, list , list1 = [], list2 = [], line1, line2;
var count = 0, x, y, z, ct = 0, ctt, red_flag = 0, another_flag = 0, mode = -1;
var mouse = new THREE.Vector3(), tableDiv;
var Country = ["India", "SriLanka", "England", "Australia", "South Africa", "Zimbabwe"] ;
var Month = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"] ;
var Year = [ "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008"] ;

var p1Mesh, p2Mesh, p3Mesh, p4Mesh, p5Mesh, p6Mesh, p7Mesh, p8Mesh, p9Mesh, p10Mesh, p11Mesh, P12Mesh, p13Mesh, p14Mesh, p15Mesh, p16Mesh, p17Mesh, p18Mesh, p19Mesh, p20Mesh ;

p1Mesh = new THREE.Mesh(new THREE.SphereGeometry(0.15, 53, 53), new THREE.MeshBasicMaterial({color : "yellow"})) ;
p2Mesh = new THREE.Mesh(new THREE.SphereGeometry(0.15, 53, 53), new THREE.MeshBasicMaterial({color : "yellow"})) ;
p3Mesh = new THREE.Mesh(new THREE.SphereGeometry(0.15, 53, 53), new THREE.MeshBasicMaterial({color : "yellow"})) ;
p4Mesh = new THREE.Mesh(new THREE.SphereGeometry(0.15, 53, 53), new THREE.MeshBasicMaterial({color : "yellow"})) ;
p5Mesh = new THREE.Mesh(new THREE.SphereGeometry(0.15, 53, 53), new THREE.MeshBasicMaterial({color : "yellow"})) ;
p6Mesh = new THREE.Mesh(new THREE.SphereGeometry(0.15, 53, 53), new THREE.MeshBasicMaterial({color : "yellow"})) ;
p7Mesh = new THREE.Mesh(new THREE.SphereGeometry(0.15, 53, 53), new THREE.MeshBasicMaterial({color : "yellow"})) ;
p8Mesh = new THREE.Mesh(new THREE.SphereGeometry(0.15, 53, 53), new THREE.MeshBasicMaterial({color : "yellow"})) ;
p9Mesh = new THREE.Mesh(new THREE.SphereGeometry(0.15, 53, 53), new THREE.MeshBasicMaterial({color : "yellow"})) ;
p10Mesh = new THREE.Mesh(new THREE.SphereGeometry(0.15, 53, 53), new THREE.MeshBasicMaterial({color : "yellow"})) ;
p11Mesh = new THREE.Mesh(new THREE.SphereGeometry(0.15, 53, 53), new THREE.MeshBasicMaterial({color : "yellow"})) ;
p12Mesh = new THREE.Mesh(new THREE.SphereGeometry(0.15, 53, 53), new THREE.MeshBasicMaterial({color : "yellow"})) ;
p13Mesh = new THREE.Mesh(new THREE.SphereGeometry(0.15, 53, 53), new THREE.MeshBasicMaterial({color : "yellow"})) ;
p14Mesh = new THREE.Mesh(new THREE.SphereGeometry(0.15, 53, 53), new THREE.MeshBasicMaterial({color : "yellow"})) ;
p15Mesh = new THREE.Mesh(new THREE.SphereGeometry(0.15, 53, 53), new THREE.MeshBasicMaterial({color : "yellow"})) ;
p16Mesh = new THREE.Mesh(new THREE.SphereGeometry(0.15, 53, 53), new THREE.MeshBasicMaterial({color : "yellow"})) ;
p17Mesh = new THREE.Mesh(new THREE.SphereGeometry(0.15, 53, 53), new THREE.MeshBasicMaterial({color : "yellow"})) ;
p18Mesh = new THREE.Mesh(new THREE.SphereGeometry(0.15, 53, 53), new THREE.MeshBasicMaterial({color : "yellow"})) ;
p19Mesh = new THREE.Mesh(new THREE.SphereGeometry(0.15, 53, 53), new THREE.MeshBasicMaterial({color : "yellow"})) ;
p20Mesh = new THREE.Mesh(new THREE.SphereGeometry(0.15, 53, 53), new THREE.MeshBasicMaterial({color : "yellow"})) ;
camera = new THREE.PerspectiveCamera(163, window.innerWidth/window.innerHeight, 1, 1000);
var geometry = new THREE.BufferGeometry();
var MAX_POINTS = 500;
positions = new Float32Array(MAX_POINTS * 3);
geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
/*Demo Section*/
var demo_line;
var demo_MAX_POINTS = 500;
var drawCount;
var demo_geometry = new THREE.BufferGeometry();
// attributes
var demo_positions = new Float32Array( demo_MAX_POINTS * 3 ); // 3 vertices per point
demo_geometry.addAttribute( 'position', new THREE.BufferAttribute( demo_positions, 3 ) );
// drawcalls
drawCount = 2; // draw the first 2 points, only
demo_geometry.setDrawRange( 0, 1 );
var material = new THREE.LineBasicMaterial( { color: 0x00ff00, linewidth: 3 } );
// demo_line
demo_line = new THREE.Line( demo_geometry,  material );
/*Demo Line Section End*/

/*X Demo Section*/
var x_demo_line;
var x_demo_MAX_POINTS = 500;
var x_drawCount;
var x_demo_geometry = new THREE.BufferGeometry();
// attributes
var x_demo_positions = new Float32Array( x_demo_MAX_POINTS * 3 ); // 3 vertices per point
x_demo_geometry.addAttribute( 'position', new THREE.BufferAttribute( x_demo_positions, 3 ) );
// drawcalls
x_drawCount = 2; // draw the first 2 points, only
x_demo_geometry.setDrawRange( 0, 1 );
var material = new THREE.LineBasicMaterial( { color: 0xff0000, linewidth: 1 } );
// demo_line
x_demo_line = new THREE.Line( x_demo_geometry,  material );
/*x Line Section End*/
/*y Demo Section*/
var y_demo_line;
var y_demo_MAX_POINTS = 500;
var y_drawCount;
var y_demo_geometry = new THREE.BufferGeometry();
// attributes
var y_demo_positions = new Float32Array( y_demo_MAX_POINTS * 3 ); // 3 vertices per point
y_demo_geometry.addAttribute( 'position', new THREE.BufferAttribute( y_demo_positions, 3 ) );
// drawcalls
y_drawCount = 2; // draw the first 2 points, only
y_demo_geometry.setDrawRange( 0, 1 );
var material = new THREE.LineBasicMaterial( { color: 0xff0000, linewidth: 1 } );
// demo_line
y_demo_line = new THREE.Line( y_demo_geometry,  material );
/*y Line Section End*/


// material
var material = new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2});
// line
line = new THREE.Line(geometry, material);
var info = document.createElement('div');
info.style.position = 'absolute';
info.style.top = '10%';
info.style.width = '100%';
info.style.textAlign = 'center';
info.style.color = '#fff';
info.style.fontWeight = 'bold';
info.style.backgroundColor = 'transparent';
info.style.zIndex = '1';
info.style.fontFamily = 'Monospace';
info.innerHTML = "";
document.body.appendChild(info);

var x_axis = document.createElement('div');
x_axis.style.position = 'absolute';
x_axis.style.top = '90%';
x_axis.style.left = '30%';
x_axis.style.width = '100%';
x_axis.style.textAlign = 'center';
x_axis.style.color = '#fff';
x_axis.style.fontWeight = 'bold';
x_axis.style.backgroundColor = 'transparent';
x_axis.style.zIndex = '1';
x_axis.style.fontFamily = 'Monospace';
x_axis.innerHTML = "X-axis";
document.body.appendChild(x_axis);

var y_axis = document.createElement('div');
y_axis.style.position = 'absolute';
y_axis.style.top = '12%';
y_axis.style.left = '-21%';
y_axis.style.width = '100%';
y_axis.style.textAlign = 'center';
y_axis.style.color = '#fff';
y_axis.style.fontWeight = 'bold';
y_axis.style.backgroundColor = 'transparent';
y_axis.style.zIndex = '1';
y_axis.style.fontFamily = 'Monospace';
y_axis.innerHTML = "Y-axis";
document.body.appendChild(y_axis);

var c_info = document.createElement('div');
c_info.style.position = 'absolute';
c_info.style.top = '40%';
c_info.style.left = '40%';
c_info.style.width = '100%';
c_info.style.textAlign = 'center';
c_info.style.color = '#fff';
c_info.style.fontWeight = 'bold';
c_info.style.backgroundColor = 'transparent';
c_info.style.zIndex = '1';
c_info.style.fontFamily = 'Monospace';
c_info.innerHTML = "";
document.body.appendChild(c_info);


var match_info = document.createElement('div');
match_info.style.position = 'absolute';
match_info.style.top = '10%';
match_info.style.left = '-40%';
match_info.style.width = '100%';
match_info.style.textAlign = 'center';
match_info.style.color = '#fff';
match_info.style.fontWeight = 'bold';
match_info.style.backgroundColor = 'transparent';
match_info.style.zIndex = '1';
match_info.style.fontFamily = 'Monospace';
match_info.innerHTML = "";
document.body.appendChild(match_info);

var scale_info = document.createElement('div');
scale_info.style.position = 'absolute';
scale_info.style.top = '10%';
scale_info.style.left = '40%';
scale_info.style.width = '100%';
scale_info.style.textAlign = 'center';
scale_info.style.color = '#fff';
scale_info.style.fontWeight = 'bold';
scale_info.style.backgroundColor = 'transparent';
scale_info.style.zIndex = '1';
scale_info.style.fontFamily = 'Monospace';
scale_info.innerHTML = "Scale :" + "<br>" + "X-axis : 1 Unit = 1 Over" + "<br>" + " Y-axis : 1 Unit = 10 Run";
document.body.appendChild(scale_info);

//next button
var next = document.createElement("input");
next.setAttribute("type", "button");
next.setAttribute("value", "next match");
next.setAttribute("name", "next match");
next.onclick = function() {
    c_info.innerHTML = "" ;
    line.geometry.setDrawRange( 0, 0 );
    demo_line.geometry.setDrawRange( 0, 0 );
    count = 0 ;
    x_demo_line.geometry.setDrawRange( 0, 0 );
    y_demo_line.geometry.setDrawRange( 0, 0 );
    red_flag = 0 ;
    var element = document.getElementById("step");
    if(element != undefined)
    element.parentNode.removeChild(element);

    var element = document.getElementById("step_all");
    if(element != undefined)
    element.parentNode.removeChild(element);
    
    info.innerHTML = "" ;
    tableDiv.innerHTML = changeData() ;  
    document.removeEventListener("mousemove", onMouseMove, false);
    document.removeEventListener('mousedown', onMouseDown, false); 
    if(ct != 0)
        red_flag = 1 ;
    ct = 1 ;
    PIErender() ;     
} ;
next.style.position = "absolute" ;
next.style.width = "150px" ;
next.style.height = "30px";
next.style.top = "70%" ;
next.style.left = "4%" ;
next.style.color = "white" ;
next.style.backgroundColor = "indianred" ;
next.style["border"] = "none";
next.style["border-radius"] = "10px";
document.body.appendChild(next) ;


//let me draw button
var letmedraw = document.createElement("input");
letmedraw.setAttribute("type", "button");
letmedraw.setAttribute("value", "let me draw");
letmedraw.setAttribute("name", "let me draw");
letmedraw.onclick = function() {
    if(count != 0)
        red_flag = 1 ;
    ct = 1 ;
    //alert('in let me draw and ' + red_flag) ;
    resetExperiment() ;
    //info.innerHTML = "<p1 style = 'color:orange'> You will get a line that follows pointer(cursor), using that draw line chart. To end your drawing make double click at a single point."+"To end a line at particular point make a single click." + "<br>" + "start your drawing with click on origin" +"</p1>";
    document.addEventListener("mousemove", onMouseMove, false);
    document.addEventListener('mousedown', onMouseDown, false); 
    
    demo_line.geometry.setDrawRange( 0, 0 );
    x_demo_line.geometry.setDrawRange( 0, 0 );
    y_demo_line.geometry.setDrawRange( 0, 0 );
    PIErender() ;    
} ;
letmedraw.style.position = "absolute" ;
letmedraw.style.width = "150px" ;
letmedraw.style.height = "30px";
letmedraw.style.top = "76%" ;
letmedraw.style.left = "4%" ;
letmedraw.style.color = "white" ;
letmedraw.style.backgroundColor = "indianred" ;
letmedraw.style["border"] = "none";
letmedraw.style["border-radius"] = "10px";
document.body.appendChild(letmedraw) ;
//draw for me 
var drawforme = document.createElement("input");
drawforme.setAttribute("type", "button");
drawforme.setAttribute("value", "show me chart");
drawforme.setAttribute("name", "let me draw");
drawforme.onclick = function() { 
    //updatePositions() ;
    c_info.innerHTML = "" ;
    red_flag = 0 ;
    ctt = 1 ;
    ct = 1 ;
    document.removeEventListener("mousemove", onMouseMove, false);
    document.removeEventListener('mousedown', onMouseDown, false); 
    demo_line.geometry.setDrawRange( 0, 0 );
    count = 1 ;
    x_demo_line.geometry.setDrawRange( 0, 0 );
    y_demo_line.geometry.setDrawRange( 0, 0 );
    PIErender() ;    
	//drawGraph() ; 
    var step = document.createElement("input");
    step.setAttribute("type", "button");
    step.setAttribute("value", "step");
    step.setAttribute('id', 'step') ;
    step.setAttribute("name", "next match");
    step.onclick = function() {
        mode = 1 ;
        drawGraphStep() ;
    } ;
    step.style.position = "absolute" ;
    step.style.width = "70px" ;
    step.style.height = "30px";
    step.style.top = "88%" ;
    step.style.left = "4%" ;
    step.style.color = "white" ;
    step.style.backgroundColor = "indianred" ;
    step.style["border"] = "none";
    step.style["border-radius"] = "10px";
    document.body.appendChild(step) ;	

    var step_all = document.createElement("input");
    step_all.setAttribute("type", "button");
    step_all.setAttribute("value", "total");
    step_all.setAttribute("name", "next match");
    step_all.setAttribute('id', 'step_all') ;
    step_all.onclick = function() {
        mode = 2 ;
        drawGraph() ;
    } ;
    step_all.style.position = "absolute" ;
    step_all.style.width = "70px" ;
    step_all.style.height = "30px";
    step_all.style.top = "88%" ;
    step_all.style.left = "10%" ;
    step_all.style.color = "white" ;
    step_all.style.backgroundColor = "indianred" ;
    step_all.style["border"] = "none";
    step_all.style["border-radius"] = "10px";
    document.body.appendChild(step_all) ;
	
	
} ;
drawforme.style.position = "absolute" ;
drawforme.style.width = "150px" ;
drawforme.style.height = "30px";
drawforme.style.top = "82%" ;
drawforme.style.left = "4%" ;
drawforme.style.color = "white" ;
drawforme.style.backgroundColor = "indianred" ;
drawforme.style["border"] = "none";
drawforme.style["border-radius"] = "10px";
document.body.appendChild(drawforme) ;

//table
function createTableDiv() {
    tableDiv = document.createElement('div');
    tableDiv.setAttribute('id', 'id');
    tableDiv.style.position = "absolute";
    tableDiv.style.color = "black";
    tableDiv.style.top = "22%";
    tableDiv.style.left = "2%";
    tableDiv.style["padding"] = "0px" ;
    tableDiv.style["border-radius"] = "5px" ;
    tableDiv.style["border"] = "6px solid #999" ;
    tableDiv.innerHTML = changeData();
    document.body.appendChild(tableDiv);
}
function changeData() {
    var c1 = Math.floor(Math.random()*(5-0+1)+0) ;
    var c2 = Math.floor(Math.random()*(5-0+1)+0) ;
    while(c1 == c2) {
        c2 = Math.floor(Math.random()*(5-0+1)+0) ;
    }
    var m1 = Math.floor(Math.random()*(11-0+1)+0) ;
    var y1 = Math.floor(Math.random()*(7-0+1)+0) ;
    var st = Country[c1] + " vs ("+ Country[c2] + ")" + "<br>" + Month[m1] + " " + Math.ceil(Math.random()*(11-0+1)+0) +" " + Year[y1];
    match_info.innerHTML = st ;
    var str;
    str = "<table width='10%' height = '10%' 'border : 0' cellspacing : '0'  align='left' >";
    str += "<tr>" ;
    str += "<th width='1%' style = 'background-color:salmon' 'color : white'>over</th>";
    str += "<th width='1%' style = 'background-color:salmon' 'color : white'>score</th>";
    str += "<th width='1%' style = 'background-color:salmon' 'color : white'>cum.score</th>" ;
    str += "<th width='1%' style = 'background-color:salmon' 'color : white'>over</th>";
    str += "<th width='1%' style = 'background-color:salmon' 'color : white'>score</th>"; 
    str += "<th width='1%' style = 'background-color:salmon' 'color : white'>cum.score</th>" ;
    str += "</tr>";
    for(var i = 1; i <= 10; i++) {
        list1.push(Math.floor(Math.random()*(16-0+1)+0)) ;
    }
    for(var i = 1; i <= 10; i++) {
        list2.push(Math.floor(Math.random()*(16-0+1)+0)) ;
    }    
    list = new Array(list1[0], list1[1], list1[2], list1[3], list1[4], list1[5], list1[6], list1[7], list1[8], list1[9],
    list2[0], list2[1], list2[2], list2[3], list2[4], list2[5], list2[6], list2[7], list2[8], list2[9]
    ) ;
    for(var i = 1; i < 20; i++) {
        list[i] += list[i-1] ;
    }
    for(var i = 1, p = 11; i <=10; i++, p++) {
		str += "<tr>"; 
		str += "<td width='1%' style = 'background-color:steelblue'>" + i + "</td>"; 
		str += "<td width='1%' style = 'background-color:white'>" + list1[i-1] + " </td> ";
		str += "<td width='1%' style = 'background-color:springgreen'>" + list[i-1] + " </td> "; 
		str += "<td width='1%' style = 'background-color:steelblue'>" + p + "</td> "; 
		str += "<td width='1%' style = 'background-color:white'>" + list2[i-1]; + " </td>";
		str += "<td width='1%' style = 'background-color:springgreen'>" + list[p-1] + " </td>"; 
		str += "</tr>";
  	}
   	str += "</table>";
	var demo_positions = demo_line.geometry.attributes.position.array;

	var x = y = z = index = x_index = y_index = 0;
	for ( var i = 0; i <= 20; i ++ ) {
	    if(i == 0) {
	        demo_positions[index++] = -10 ;
	        demo_positions[index++] = -10 ;
	        demo_positions[index++] = 0 ;
	    }
	    else {
		    demo_positions[ index ++ ] = -10+i;
		    demo_positions[ index ++ ] = -10+list[i-1]/10;
		    demo_positions[ index ++ ] = 0;
	    }
	}  
    p1Mesh.position.set(-9, -10+list[0]/10, -54) ;
    p2Mesh.position.set(-8, -10+list[1]/10, -54) ;
    p3Mesh.position.set(-7, -10+list[2]/10, -54) ;    
    p4Mesh.position.set(-6, -10+list[3]/10, -54) ;
    p5Mesh.position.set(-5, -10+list[4]/10, -54) ;
    p6Mesh.position.set(-4, -10+list[5]/10, -54) ;
    p7Mesh.position.set(-3, -10+list[6]/10, -54) ;
    p8Mesh.position.set(-2, -10+list[7]/10, -54) ;
    p9Mesh.position.set(-1, -10+list[8]/10, -54) ;
    p10Mesh.position.set(0, -10+list[9]/10, -54) ;
    p11Mesh.position.set(1, -10+list[10]/10, -54) ;
    p12Mesh.position.set(2, -10+list[11]/10, -54) ;
    p13Mesh.position.set(3, -10+list[12]/10, -54) ;
    p14Mesh.position.set(4, -10+list[13]/10, -54) ;
    p15Mesh.position.set(5, -10+list[14]/10, -54) ;
    p16Mesh.position.set(6, -10+list[15]/10, -54) ;
    p17Mesh.position.set(7, -10+list[16]/10, -54) ;
    p18Mesh.position.set(8, -10+list[17]/10, -54) ;
    p19Mesh.position.set(9, -10+list[18]/10, -54) ;
    p20Mesh.position.set(10, -10+list[19]/10, -54) ;

   	list1 = [] ;
   	list2 = [] ;
   	
   	return str;
}

var helpContent = "";
function initialiseHelp() {
    helpContent="";
    helpContent = helpContent + "<h2>Line Charts Simplified</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows how a chart can be drawn from the given data.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The bottom left section has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a table at the left side. You see the table and draw the corresponding chart.</p>";

    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p1> You will get a line that follows pointer(cursor), using that draw line chart. To end your drawing make double click at a single point."+"To end a line at particular point make a single click." + "<br>" + "start your drawing with click on origin" +"</p1>";
    helpContent = helpContent + "<p>In the animation stage, there are three controls given to you.</p>";
    helpContent = helpContent + "<p>The Bottom left section has these three buttons to play with given data.</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>next match&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;Shows the next match details.</li>";
    helpContent = helpContent + "<li>let me draw&nbsp;&nbsp;&nbsp;:&nbsp;Gives controls to you to draw chart.</li>";
    helpContent = helpContent + "<li>show me chart&nbsp;:&nbsp;Shows you the chart for data.</li>";
    helpContent = helpContent + "<ul>" ;
    helpContent = helpContent + "<li>next &nbsp;&nbsp;:&nbsp;this will help you to make out how next point will be drawn</li>"
    helpContent = helpContent + "<li>total&nbsp;&nbsp;:&nbsp;this will show you entire chart for given data</li>"
    helpContent = helpContent + "</ul>" ;
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>In addition you can check if your drawing is correct by clicking show me chart if it overlaps.</p>";
    
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";    
    PIEupdateHelp(helpContent);
}
var infoContent = "";
function initialiseInfo() {
    infoContent =  "";
    infoContent = infoContent + "<h2>Line Charts Simplified</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows how chart can be drawn form given data.</p>";
    infoContent = infoContent + "<h3>Line Chart</h3>";
    infoContent = infoContent + "<p>A line chart or line graph is a type of chart which displays information as a series of data points called 'markers' connected by straight line segments..</p>";
    infoContent = infoContent + "<p>It is a basic type of chart common in many fields. It is similar to a scatter plot except that the measurement points are ordered (typically by their x-axis value) and joined with straight line segments.</p>";
    infoContent = infoContent + "<p>A line chart is often used to visualize a trend in data over intervals of time – a time series – thus the line is often drawn chronologically. In these cases they are known as run charts.</p>";
    infoContent = infoContent + "<h3>Applications of Line Charts</h3>";
    infoContent = infoContent + "<p>In the experimental sciences, data collected from experiments are often visualized by a graph.</p>";
    infoContent = infoContent + "<p>The table is a great way of displaying exact values, but can be a poor way to understand the underlying patterns that those values represent. Because of these qualities, the table display is often erroneously conflated with the data itself; whereas it is just another visualization of the data.</p>";
    infoContent = infoContent + "<p>Charts often include an overlaid mathematical function depicting the best-fit trend of the scattered data. This layer is referred to as a best-fit layer and the graph containing this layer is often referred to as a line graph..</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";    
    
    PIEupdateInfo(infoContent);
}
function loadExperimentElements() {
    PIEsetExperimentTitle("Line charts simplified");
    PIEsetDeveloperName("Srikanth Chekuri");
    initialiseHelp();
    initialiseInfo();
    createTableDiv() ;
    var plane = new THREE.Mesh(new THREE.PlaneGeometry(120, 120), new THREE.MeshBasicMaterial({color : 0x003333})) ;
    plane.position.set(0, 0, -20) ;
    PIEaddElement(plane) ;
    //drawing row lines
    for(var i = -10; i <= 11; i++) {
    	var l = new THREE.Geometry() ;
    	l.vertices.push(new THREE.Vector3(-10, i, 0)) ;
    	l.vertices.push(new THREE.Vector3(+14, i, 0)) ;
    	lMesh = new THREE.Line(l, new THREE.LineBasicMaterial({color:0xffffff, linewidth : 1})) ;
    	lMesh.position.set(0, 0, 0) ;
   		PIEaddElement(lMesh) ;    
    }
    //drawing column lines
    for(var i = -10; i <= 14; i++) {
    	var l = new THREE.Geometry() ;
    	l.vertices.push(new THREE.Vector3(i, -10, 0)) ;
    	l.vertices.push(new THREE.Vector3(i, +11, 0)) ;
    	lMesh = new THREE.Line(l, new THREE.LineBasicMaterial({color:0xffffff, linewidth : 1})) ;
   		lMesh.position.set(0, 0, 0) ;
   		PIEaddElement(lMesh) ;    
    }
    
    var rowArrowLine = new THREE.Geometry() ;
    rowArrowLine.vertices.push(new THREE.Vector3(14, -10, 0)) ;
    rowArrowLine.vertices.push(new THREE.Vector3(16, -10, 0)) ;
    rowArrowLineMesh = new THREE.Line(rowArrowLine, new THREE.LineBasicMaterial({color:0xffffff, linewidth : 1})) ;
    rowArrowLineMesh.position.set(0, 0, 0) ;
   	PIEaddElement(rowArrowLineMesh) ;

    var h1 = new THREE.Geometry() ;
    h1.vertices.push(new THREE.Vector3(15.5, -9.5, 0)) ;
    h1.vertices.push(new THREE.Vector3(16, -10, 0)) ;
    h1Mesh = new THREE.Line(h1, new THREE.LineBasicMaterial({color:0xffffff, linewidth : 1})) ;
    h1Mesh.position.set(0, 0, 0) ;
   	PIEaddElement(h1Mesh) ;
 
    var h2 = new THREE.Geometry() ;
    h2.vertices.push(new THREE.Vector3(15.5, -10.5, 0)) ;
    h2.vertices.push(new THREE.Vector3(16, -10, 0)) ;
    h2Mesh = new THREE.Line(h2, new THREE.LineBasicMaterial({color:0xffffff, linewidth : 1})) ;
    h2Mesh.position.set(0, 0, 0) ;
   	PIEaddElement(h2Mesh) ;  	
    
    var colArrowLine = new THREE.Geometry() ;
    colArrowLine.vertices.push(new THREE.Vector3(-10, 11, 0)) ;
    colArrowLine.vertices.push(new THREE.Vector3(-10, 13, 0)) ;
    colArrowLineMesh = new THREE.Line(colArrowLine, new THREE.LineBasicMaterial({color:0xffffff, linewidth : 1})) ;
    colArrowLineMesh.position.set(0, 0, 0) ;
   	PIEaddElement(colArrowLineMesh) ;

    var h3 = new THREE.Geometry() ;
    h3.vertices.push(new THREE.Vector3(-10.5, 12.5, 0)) ;
    h3.vertices.push(new THREE.Vector3(-10, 13, 0)) ;
    h3Mesh = new THREE.Line(h3, new THREE.LineBasicMaterial({color:0xffffff, linewidth : 1})) ;
    h3Mesh.position.set(0, 0, 0) ;
   	PIEaddElement(h3Mesh) ;

    var h4 = new THREE.Geometry() ;
    h4.vertices.push(new THREE.Vector3(-9.5, 12.5, 0)) ;
    h4.vertices.push(new THREE.Vector3(-10, 13, 0)) ;
    h4Mesh = new THREE.Line(h4, new THREE.LineBasicMaterial({color:0xffffff, linewidth : 1})) ;
    h4Mesh.position.set(0, 0, 0) ;
   	PIEaddElement(h4Mesh) ;    
    line.position.set(0, 0, 4) ;
    PIEaddElement(line);
    demo_line.position.set(0, 0, 0.1) ;
    PIEaddElement(demo_line) ;
    
    x_demo_line.position.set(0, 0, 0.1) ;
    PIEaddElement(x_demo_line) ;
    
    y_demo_line.position.set(0, 0, 0.1) ;
    PIEaddElement(y_demo_line) ;
    
	var loader = new THREE.FontLoader();
	loader.load( 'assets/helvetiker_regular.typeface.json', function ( font ) {
        for(var i = 1; i <= 4; i++) {
          	var gtextGeometry = new THREE.TextGeometry( i, { font: font, size: 0.4, height: 0.5, curveSegments: 7});

          	var gtextMaterial = new THREE.MeshBasicMaterial( { color: "white" });

          	var gmesh = new THREE.Mesh( gtextGeometry, gtextMaterial );
	        gmesh.position.set(-10.2+i, -10.7, 0) ;
	        gmesh.rotation.y = 0.15 ;
	        gmesh.rotation.x = -0.25 ;
          	PIEaddElement( gmesh );
          	PIErender() ;
      	}
        for(var i = 5; i <= 10; i++) {
          	var gtextGeometry = new THREE.TextGeometry( i, { font: font, size: 0.4, height: 0.5, curveSegments: 7});

          	var gtextMaterial = new THREE.MeshBasicMaterial( { color: "white" });

          	var gmesh = new THREE.Mesh( gtextGeometry, gtextMaterial );
	        gmesh.position.set(-10.2+i-0.1, -10.7, 0) ;
	        gmesh.rotation.y = 0.10 ;
	        gmesh.rotation.x = -0.20 ;
          	PIEaddElement( gmesh );
      	    PIErender() ;
      	}

        for(var i = 11; i <= 15; i++) {
          	var gtextGeometry = new THREE.TextGeometry( i, { font: font, size: 0.4, height: 0.5, curveSegments: 7});

          	var gtextMaterial = new THREE.MeshBasicMaterial( { color: "white" });

          	var gmesh = new THREE.Mesh( gtextGeometry, gtextMaterial );
	        gmesh.position.set(-10.2+i, -10.7, 0) ;
	        gmesh.rotation.y = 0 ;
	        gmesh.rotation.x = -0.20 ;
          	PIEaddElement( gmesh );
      	    PIErender() ;
      	}

        for(var i = 16; i <= 21; i++) {
          	var gtextGeometry = new THREE.TextGeometry( i, { font: font, size: 0.4, height: 0.5, curveSegments: 7});

          	var gtextMaterial = new THREE.MeshBasicMaterial( { color: "white" });

          	var gmesh = new THREE.Mesh( gtextGeometry, gtextMaterial );
	        gmesh.position.set(-10.2+i, -10.7, 0) ;
	        gmesh.rotation.y = -0.1 ;
	        gmesh.rotation.x = -0.20 ;
          	PIEaddElement( gmesh );
      	
      	    PIErender() ;
      	}

        for(var i = 1; i <= 4; i++) {
          	var gtextGeometry = new THREE.TextGeometry( i*10, { font: font, size: 0.40, height: 0.5, curveSegments: 7});

          	var gtextMaterial = new THREE.MeshBasicMaterial( { color: "white" });

          	var gmesh = new THREE.Mesh( gtextGeometry, gtextMaterial );
	        gmesh.position.set(-11.1, -10+i-0.3, 0) ;
	        gmesh.rotation.y = 0.15 ;
	        gmesh.rotation.x = -0.1 ;
          	PIEaddElement( gmesh );
      	
      	    PIErender() ;
      	}
        for(var i = 5; i <= 9; i++) {
          	var gtextGeometry = new THREE.TextGeometry( i*10, { font: font, size: 0.40, height: 0.5, curveSegments: 7});

          	var gtextMaterial = new THREE.MeshBasicMaterial( { color: "white" });

          	var gmesh = new THREE.Mesh( gtextGeometry, gtextMaterial );
	        gmesh.position.set(-11.1, -10+i-0.3, 0) ;
	        gmesh.rotation.y = 0.15 ;
	        gmesh.rotation.x = -0.1 ;
          	PIEaddElement( gmesh );
      	
      	    PIErender() ;
      	}
        for(var i = 10; i <= 15; i++) {
          	var gtextGeometry = new THREE.TextGeometry( i*10, { font: font, size: 0.40, height: 0.5, curveSegments: 7});

          	var gtextMaterial = new THREE.MeshBasicMaterial( { color: "white" });

          	var gmesh = new THREE.Mesh( gtextGeometry, gtextMaterial );
	        gmesh.position.set(-11.2, -10+i-0.3, 0) ;
	        gmesh.rotation.y = 0.15 ;
	        gmesh.rotation.x = 0.1 ;
          	PIEaddElement( gmesh );
      	
      	    PIErender() ;
      	}

        for(var i = 16; i <= 21; i++) {
          	var gtextGeometry = new THREE.TextGeometry( i*10, { font: font, size: 0.40, height: 0.5, curveSegments: 7});

          	var gtextMaterial = new THREE.MeshBasicMaterial( { color: "white" });

          	var gmesh = new THREE.Mesh( gtextGeometry, gtextMaterial );
	        gmesh.position.set(-11.2, -10+i-0.3, 0) ;
	        gmesh.rotation.y = 0.15 ;
	        gmesh.rotation.x = 0.15 ;
          	PIEaddElement( gmesh );
      	
      	    PIErender() ;
      	}


  	
	});

    PIEaddElement(p1Mesh) ;
    PIEaddElement(p2Mesh) ;
    PIEaddElement(p3Mesh) ;
    PIEaddElement(p4Mesh) ;
    PIEaddElement(p5Mesh) ;
    PIEaddElement(p6Mesh) ;
    PIEaddElement(p7Mesh) ;
    PIEaddElement(p8Mesh) ;
    PIEaddElement(p9Mesh) ;
    PIEaddElement(p10Mesh) ;
    PIEaddElement(p11Mesh) ;
    PIEaddElement(p12Mesh) ;
    PIEaddElement(p13Mesh) ;
    PIEaddElement(p14Mesh) ;
    PIEaddElement(p15Mesh) ;
    PIEaddElement(p16Mesh) ;
    PIEaddElement(p17Mesh) ;
    PIEaddElement(p18Mesh) ;
    PIEaddElement(p19Mesh) ;
    PIEaddElement(p20Mesh) ;
    PIEsetAreaOfInterest(-13, 13, 13, -13) ;
    PIEadjustCamera(0, 2, 52) ;
}
function updatePositions() {
	var demo_positions = demo_line.geometry.attributes.position.array;
	var x = y = z = index = 0;
	for ( var i = 0, l = demo_MAX_POINTS; i < l; i ++ ) {
		demo_positions[ index ++ ] = x;
		demo_positions[ index ++ ] = y;
		demo_positions[ index ++ ] = z;

		x += 1;
		y += 1;
		z += 0;
	}
}
function drawGraphStep() {
    if(ct == 1) {
        p1Mesh.position.set(-9, -10+list[0]/10, 0.1) ;
    } else if(ct == 2) {
        p2Mesh.position.set(-8, -10+list[1]/10, 0.1) ;
    } else if(ct == 3) {
        p3Mesh.position.set(-7, -10+list[2]/10, 0.1) ;
    } else if(ct == 4) {
        p4Mesh.position.set(-6, -10+list[3]/10, 0.1) ;
    } else if(ct == 5) {
        p5Mesh.position.set(-5, -10+list[4]/10, 0.1) ;
    } else if(ct == 6) {
        p6Mesh.position.set(-4, -10+list[5]/10, 0.1) ;
    } else if(ct == 7) {
        p7Mesh.position.set(-3, -10+list[6]/10, 0.1) ;
    } else if(ct == 8) {
        p8Mesh.position.set(-2, -10+list[7]/10, 0.1) ;
    } else if(ct == 9) {
        p9Mesh.position.set(-1, -10+list[8]/10, 0.1) ;
    } else if(ct == 10) {
        p10Mesh.position.set(0, -10+list[9]/10, 0.1) ;
    } else if(ct == 11) {
        p11Mesh.position.set(1, -10+list[10]/10, 0.1) ;
    } else if(ct ==12) {
        p12Mesh.position.set(2, -10+list[11]/10, 0.1) ;
    } else if(ct ==13) {
        p13Mesh.position.set(3, -10+list[12]/10, 0.1) ;
    } else if(ct == 14) {
        p14Mesh.position.set(4, -10+list[13]/10, 0.1) ;
    } else if(ct ==15) {
        p15Mesh.position.set(5, -10+list[14]/10, 0.1) ;
    } else if(ct == 16) {
        p16Mesh.position.set(6, -10+list[15]/10, 0.1) ;
    } else if(ct ==17) {
        p17Mesh.position.set(7, -10+list[16]/10, 0.1) ;
    } else if(ct ==18) {
        p18Mesh.position.set(8, -10+list[17]/10, 0.1) ;
    } else if(ct == 19) {
        p19Mesh.position.set(9, -10+list[18]/10, 0.1) ;
    } else if(ct == 20) {
        p20Mesh.position.set(10, -10+list[19]/10, 0.1) ;
    }
    if(ct > 20) return ;
    info.innerHTML = "<p> cumulative score till over "+"<p1 style='color:yellow' >"+ ct + "</p1>" +" is "+ "<p2 style='color:yellow' >" + list[ct-1] + "</p2>"+" </p>";
	drawCount = demo_MAX_POINTS;
	x_demo_positions[0] = -10+ctt ;
	x_demo_positions[1] = -10 ;
	x_demo_positions[2] = 0 ;
	x_demo_positions[3] = -10+ctt ;
	x_demo_positions[4] = -10 + list[ctt-1]/10 ;
	x_demo_positions[5] = 0 ;
	x_demo_line.geometry.attributes.position.needsUpdate = true; // required after the first render
	//x_demo_line.material.color.setHSL( Math.random(), 1, 0.5 );
	x_demo_line.geometry.setDrawRange(0, 2);

	y_demo_positions[0] = -10 ;
	y_demo_positions[1] = -10+list[ctt-1]/10 ;
	y_demo_positions[2] = 0 ;
	y_demo_positions[3] = -10 +ctt  ;
	y_demo_positions[4] =  -10+list[ctt-1]/10;
	y_demo_positions[5] = 0 ;
	y_demo_line.geometry.attributes.position.needsUpdate = true; // required after the first render
	//y_demo_line.material.color.setHSL( Math.random(), 1, 0.5 );
	y_demo_line.geometry.setDrawRange(0, 2);
	demo_line.geometry.attributes.position.needsUpdate = true; // required after the first render
	//demo_line.material.color.setHSL( Math.random(), 1, 0.5 );
	demo_line.geometry.setDrawRange( 0, ct+1);
	ct++ ;
	ctt++ ;
	PIErender() ;
}
function drawGraph() {
    //alert(red_flag + ' ' + ct) ;
    if(red_flag === 1 && ct != 0 ) {
        //resetExperiment() ;
        red_flag = 0 ;
        return ;
    }
    if(mode == 1) return ;
    if(ct == 1) {
        p1Mesh.position.set(-9, -10+list[0]/10, 0.1) ;
    } else if(ct == 2) {
        p2Mesh.position.set(-8, -10+list[1]/10, 0.1) ;
    } else if(ct == 3) {
        p3Mesh.position.set(-7, -10+list[2]/10, 0.1) ;
    } else if(ct == 4) {
        p4Mesh.position.set(-6, -10+list[3]/10, 0.1) ;
    } else if(ct == 5) {
        p5Mesh.position.set(-5, -10+list[4]/10, 0.1) ;
    } else if(ct == 6) {
        p6Mesh.position.set(-4, -10+list[5]/10, 0.1) ;
    } else if(ct == 7) {
        p7Mesh.position.set(-3, -10+list[6]/10, 0.1) ;
    } else if(ct == 8) {
        p8Mesh.position.set(-2, -10+list[7]/10, 0.1) ;
    } else if(ct == 9) {
        p9Mesh.position.set(-1, -10+list[8]/10, 0.1) ;
    } else if(ct == 10) {
        p10Mesh.position.set(0, -10+list[9]/10, 0.1) ;
    } else if(ct == 11) {
        p11Mesh.position.set(1, -10+list[10]/10, 0.1) ;
    } else if(ct ==12) {
        p12Mesh.position.set(2, -10+list[11]/10, 0.1) ;
    } else if(ct ==13) {
        p13Mesh.position.set(3, -10+list[12]/10, 0.1) ;
    } else if(ct == 14) {
        p14Mesh.position.set(4, -10+list[13]/10, 0.1) ;
    } else if(ct ==15) {
        p15Mesh.position.set(5, -10+list[14]/10, 0.1) ;
    } else if(ct == 16) {
        p16Mesh.position.set(6, -10+list[15]/10, 0.1) ;
    } else if(ct ==17) {
        p17Mesh.position.set(7, -10+list[16]/10, 0.1) ;
    } else if(ct ==18) {
        p18Mesh.position.set(8, -10+list[17]/10, 0.1) ;
    } else if(ct == 19) {
        p19Mesh.position.set(9, -10+list[18]/10, 0.1) ;
    } else if(ct == 20) {
        p20Mesh.position.set(10, -10+list[19]/10, 0.1) ;
    }
    if(ct > 20) return ;
    info.innerHTML = "<p> cumulative score till over "+"<p1 style='color:yellow' >"+ ct + "</p1>" +" is "+ "<p2 style='color:yellow' >" + list[ct-1] + "</p2>"+" </p>";
	drawCount = demo_MAX_POINTS;
	x_demo_positions[0] = -10+ctt ;
	x_demo_positions[1] = -10 ;
	x_demo_positions[2] = 0 ;
	x_demo_positions[3] = -10+ctt ;
	x_demo_positions[4] = -10 + list[ctt-1]/10 ;
	x_demo_positions[5] = 0 ;
	x_demo_line.geometry.attributes.position.needsUpdate = true; // required after the first render
	x_demo_line.geometry.setDrawRange(0, 2);

	y_demo_positions[0] = -10 ;
	y_demo_positions[1] = -10+list[ctt-1]/10 ;
	y_demo_positions[2] = 0 ;
	y_demo_positions[3] = -10 +ctt  ;
	y_demo_positions[4] =  -10+list[ctt-1]/10;
	y_demo_positions[5] = 0 ;
	y_demo_line.geometry.attributes.position.needsUpdate = true; // required after the first render
	y_demo_line.geometry.setDrawRange(0, 2);
	demo_line.geometry.attributes.position.needsUpdate = true; // required after the first render
	demo_line.geometry.setDrawRange( 0, ct+1);
	
	ct++ ;
	ctt++ ;
	PIErender() ;
	setTimeout(function() {
	    drawGraph() ;
    }, 1000) ;
}
//updating line
function updateLine() {
	positions[count * 3 - 3] = mouse.x-0.05;
    positions[count * 3 - 2] = mouse.y+2.0;
    positions[count * 3 - 1] = mouse.z;
    line.geometry.attributes.position.needsUpdate = true;
    PIErender(camera) ;
}
// mouse move handler
function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) *2 - 1 ;
    mouse.y = -(event.clientY / window.innerHeight) *2 + 1 ;
    mouse.z = 0;
    mouse.unproject(camera);
    if( count !== 0 ){
  	    updateLine();
    }
    var a = Math.ceil((mouse.x+9.552)/0.957 - 0.5);
    var b = Math.ceil(((mouse.y+12.0768)/0.960013)*10 -5.5);
    if(-0.003 <= a && a <= 22 && -0.05 <= b && b <= 120) 
    b = Math.abs(b) ;
    c_info.innerHTML = "<h2>" + "(x, y) : " + "(" + a.toFixed(0)+ ", " + b.toFixed(0) + ")"+"</h2>";    
}
//add point
function addPoint(event) {
  	if(count > 1 && x === mouse.x && y === mouse.y && z === mouse.z) {
  	    info.innerHTML = "" ;
		line.geometry.setDrawRange(2, count);
  		PIErender() ;
  		document.removeEventListener("mousemove", onMouseMove, false) ;
 		document.removeEventListener("mousedown", onMouseDown, false) ;  
 		flag = 1 ;   
 		red_flag = 0 ;
    }
    if(count <= 20 ) {
        info.innerHTML = "<p> cumulative score till over "+"<p1 style='color:yellow' >"+ count + "</p1>" +" is "+"<p2 style='color:yellow'>"+list[count-1]+"</p2>"+" now connect the dots..." +"</p>" ;
    } else {
        info.innerHTML = ".." ;
    }
    positions[count * 3 + 0] = mouse.x-0.05;
  	positions[count * 3 + 1] = mouse.y+2.0;
  	positions[count * 3 + 2] = mouse.z;
    count++;
    line.geometry.setDrawRange(0, count);
    updateLine();
    x = mouse.x ;
    y = mouse.y ;                                        
    z = mouse.z ;
}

//mouse down handler
function onMouseDown(evt) {
  	//on first click add an extra point
    if( count === 0 ){
        addPoint();
    }
    addPoint();
}
function resetExperiment() {
    c_info.innerHTML = "" ;
    info.innerHTML = "" ;
    line.geometry.setDrawRange(0, 1);
    updateLine() ;
    count = 0 ;
    demo_line.geometry.setDrawRange( 0, 0 );
    x_demo_line.geometry.setDrawRange( 0, 0 );
    y_demo_line.geometry.setDrawRange( 0, 0 );

    var element = document.getElementById("step");
    if(element != undefined)
    element.parentNode.removeChild(element);

    var element = document.getElementById("step_all");
    if(element != undefined)
    element.parentNode.removeChild(element);

    
    p1Mesh.position.set(-9, -10+list[0]/10, -54) ;
    p2Mesh.position.set(-8, -10+list[1]/10, -54) ;
    p3Mesh.position.set(-7, -10+list[2]/10, -54) ;    
    p4Mesh.position.set(-6, -10+list[3]/10, -54) ;
    p5Mesh.position.set(-5, -10+list[4]/10, -54) ;
    p6Mesh.position.set(-4, -10+list[5]/10, -54) ;
    p7Mesh.position.set(-3, -10+list[6]/10, -54) ;
    p8Mesh.position.set(-2, -10+list[7]/10, -54) ;
    p9Mesh.position.set(-1, -10+list[8]/10, -54) ;
    p10Mesh.position.set(0, -10+list[9]/10, -54) ;
    p11Mesh.position.set(1, -10+list[10]/10, -54) ;
    p12Mesh.position.set(2, -10+list[11]/10, -54) ;
    p13Mesh.position.set(3, -10+list[12]/10, -54) ;
    p14Mesh.position.set(4, -10+list[13]/10, -54) ;
    p15Mesh.position.set(5, -10+list[14]/10, -54) ;
    p16Mesh.position.set(6, -10+list[15]/10, -54) ;
    p17Mesh.position.set(7, -10+list[16]/10, -54) ;
    p18Mesh.position.set(8, -10+list[17]/10, -54) ;
    p19Mesh.position.set(9, -10+list[18]/10, -54) ;
    p20Mesh.position.set(10, -10+list[19]/10, -54) ;    
    PIErender() ;    
}
function updateExperimentElements(t, dt) {

}
