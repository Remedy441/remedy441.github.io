var sunLight,orbit,orbit1,orbit2,orbit3,orbit4,orbit5,orbit6,orbit7,orbit8,circle,tex;
var planet,planet1,planet2,planet,planet3,planet4,planet5,planet6,planet7,planet8;
var raycaster = new THREE.Raycaster();
var vector = new THREE.Vector2(),count=0;
var orbitDir,orbitDir1,orbitDir2,orbitDir3,orbitDir4,orbitDir5,orbitDir6,orbitDir7,orbitDir8;
var time = new Date()*0.0025,naming;

var projector=new THREE.Projector();
var div1=document.createElement("div");
div1.style.color= "white";
div1.style.position = "fixed" ;
div1.style.top = "30%" ;
div1.style.left = "80%" ;
div1.style.width=50;
div1.style.height=100;
document.body.appendChild(div1);

var div2=document.createElement("div");
div2.style.color= "white";
div2.style.position = "fixed" ;
div2.style.top = "35%" ;
div2.style.left = "80%" ;
div2.style.width=40;
div2.style.height=100;
document.body.appendChild(div2);

var div3=document.createElement("div");
div3.style.color= "white";
div3.style.position = "fixed" ;
div3.style.top = "40%" ;
div3.style.left = "80%" ;
div3.style.width=40;
div3.style.height=100;
document.body.appendChild(div3);

var div4=document.createElement("div");
div4.style.color= "white";
div4.style.position = "fixed" ;
div4.style.top = "45%" ;
div4.style.left = "80%" ;
div4.style.width=50;
div4.style.height=100;
document.body.appendChild(div4);

function even(event) {

    var vector = new THREE.Vector3(( event.clientX / window.innerWidth ) * 2 - 1, -( event.clientY / window.innerHeight ) * 2 + 1);
    vector = vector.unproject(PIEcamera);

    var raycaster = new THREE.Raycaster(PIEcamera.position, vector.sub(PIEcamera.position).normalize());

    var intersects = raycaster.intersectObjects(PIEscene.children,true);
    for (var i = 0; i <intersects.length; i++)
    {

    	var ind=intersects[i].object.name;
    	var c=ind.charAt(0);
    	var d=ind.charAt(1);
    	if(c=='J')
    	{
    		Fifth();
    	}

    	if(c=='E')
    	{
    		Third();
    	}

    	if(c=='V')
    	{
    		Second();
    	}

    	if(c=='U')
    	{
    		Seventh();
    	}

    	if(c=='N')
    	{
    		Eight();
    	}

    	if(c=='S')
    	{
    		Sixth();
    	}

    	if(c=='M')
    	{

    		if(d=='a')
    			Fourth();
    		else if(d=='e')
    			First();
    	}

    	
    	
    }
    
}
var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Solar System</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows the movements of all planets in the solar system around the sun.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls.</p>";
    helpContent = helpContent + "<p>You can start the animation by just clicking the start button on the panel.</p>";
    helpContent = helpContent + "<p>When the animation is going on you can pause it for some time by clicking on pause button available on the panel.</p>";
    helpContent = helpContent + "<h1>Happy Experimenting</h1>";
    PIEupdateHelp(helpContent);
}
var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Solar System</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows the movements of all planets in the solar system around the sun.</p>";
    infoContent = infoContent + "<h2>Solar System</h2>";
    infoContent = infoContent + "<p>The Solar System is made up of all the planets that orbit our Sun.</p>";
    infoContent = infoContent + "<p>In addition to planets, the Solar System also consists of moons, comets, asteroids, minor planets, dust and gas. </p>";
    infoContent = infoContent + "<h3>Mercury</h3>";
    infoContent = infoContent + "<p>Mercury is the closest planet to the Sun. It orbits in a highly elliptical orbit ranging from 46 million km (29 million miles) from the Sun out to 70 million km (43.5 million miles). </p>";
    infoContent = infoContent + "<p>Mercury is quite small with a diameter of 4,878km,</p>";
    infoContent = infoContent + "<h3>Venus</h3>";
    infoContent = infoContent + "<p>Venus is the second closest planet to the Sun and orbits in an almost circular orbit at 108 million km. As it orbits, Venus comes closer to Earth than any other planet in the solar system and can come to within about 40 million km.</p>";
    infoContent = infoContent + "<p>Venus, with a diameter of 12100 km, it is very nearly the same size as Earth (1000km smaller), and has 80% of EarthÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢s mass. its gravity on the surface is 90% that of EarthÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢s.</p>";
    infoContent = infoContent + "<h3>Earth</h3>";
    infoContent = infoContent + "<p>The third closest planet to the Sun is Earth and is the largest and densest of the inner planets. Earth orbits in a reasonably circular at 150 million km and is the first of the planets to have a moon. Earth is of course the only place that we know of that has life. </p>";
    infoContent = infoContent + "<p>Earth takes 365.25 Earth days to orbit the Sun and rotates once every 23 hours, 56 minutes and 4 seconds.</p>";
    infoContent = infoContent + "<h3>Mars</h3>";
    infoContent = infoContent + "<p>Mars is the fourth closest planet to the Sun and orbits in an fairly eccentric orbit at around 230 (+-20) million km.</p>";
    infoContent = infoContent + "<p>Mars is about half the size of the Earth with a diameter of 6,792km. However its mass is only a tenth of EarthÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢s with gravity on the surface being around 37% that of EarthÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢s.</p>";
    infoContent = infoContent + "<h3>Jupiter</h3>";
    infoContent = infoContent + "<p>Jupiter is the fifth closest planet to the Sun and is the first of what are called the outer planets </p>";
    infoContent = infoContent + "<p>Jupiter orbits the Sun once very 12 years (at about 780 million km) and is comprised of gas (78% hydrogen and 24% helium) and is presumed to have a rocky core surrounded by a sea of liquid metallic hydrogen which forms a ball 110,000km in diameter. JupiterÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢s total diameter is 142,984 km.</p>";
    infoContent = infoContent + "<h3>Saturn</h3>";
    infoContent=infoContent+"<p>Saturn is the sixth closest planet to the Sun. It is the second largest planet in the solar system having a radius 9 times that of Earth (57,000 km) and a mass 95 times that of Earth.</p>";
    infoContent=infoContent+"<h3>Uranus</h3>";
    infoContent=infoContent+"<p>Uranus is the seventh closest planet to the Sun and the third largest and fourth heaviest of the planets. It diameter (50,000km) is four times that of Earth with a mass over 14 times that of Earth.</p>";
    infoContent=infoContent+"<h3>Neptune</h3>";
    infoContent=infoContent+"<p>Neptune is the outermost planet of the gas giants. It has an equatorial diameter of 49,500 kilometers (30,760 miles). If Neptune were hollow, it could contain nearly 60 Earths. Neptune orbits the Sun every 165 years.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function First()
{
	div1.style.color="white";
	div2.style.color="white";
	div3.style.color="white";
	div4.style.color="white";
	div1.innerHTML="<h3>Name:Mercury\n</h3>";
	div2.innerHTML="<h3>Speed:  48 km/s\n</h3>";
	div3.innerHTML="<h3>Distance:   57 million km\n</h3>";
	div4.innerHTML="<h3>OrbitalTime:  87.97 days \n</h3>";
}
function Second()
{
	div1.style.color="red";
	div2.style.color="red";
	div3.style.color="red";
	div4.style.color="red";
	div1.innerHTML="<h3>Name:Venus\n</h3>";
	div2.innerHTML="<h3>Speed:  35.02km/s\n</h3>";
	div3.innerHTML="<h3>Distance:   108 million km\n</h3>";
	div4.innerHTML="<h3>OrbitalTime:  224.70 days \n</h3>";
}
function Third()
{
	div1.style.color="blue";
	div2.style.color="blue";
	div3.style.color="blue";
	div4.style.color="blue";
	div1.innerHTML="<h3>Name:Earth\n</h3>";
	div2.innerHTML="<h3>Speed:  29.78 km/s\n</h3>";
	div3.innerHTML="<h3>Distance:   150 million km\n</h3>";
	div4.innerHTML="<h3>OrbitalTime:  365.26 days \n</h3>";
}
function Fourth()
{
	div1.style.color="green";
	div2.style.color="green";
	div3.style.color="green";
	div4.style.color="green";
	div1.innerHTML="<h3>Name:Mars\n</h3>";
	div2.innerHTML="<h3>Speed:  24.077 km/s\n</h3>";
	div3.innerHTML="<h3>Distance:   228 million km\n</h3>";
	div4.innerHTML="<h3>OrbitalTime:  686.98 days \n</h3>";
}
function Fifth()
{
	div1.style.color="yellow";
	div2.style.color="yellow";
	div3.style.color="yellow";
	div4.style.color="yellow";
	div1.innerHTML="<h3>Name:Jupiter\n</h3>";
	div2.innerHTML="<h3>Speed:  13.07 km/s\n</h3>";
	div3.innerHTML="<h3>Distance:   779 million km\n</h3>";
	div4.innerHTML="<h3>OrbitalTime:  4,332.82 days \n</h3>";
}
function Sixth()
{
	div1.style.color="blue";
	div2.style.color="blue";
	div3.style.color="blue";
	div4.style.color="blue";
	div1.innerHTML="<h3>Name:Saturn\n</h3>";
	div2.innerHTML="<h3>Speed:  9.69 km/s\n</h3>";
	div3.innerHTML="<h3>Distance:   1.43 billion km\n</h3>";
	div4.innerHTML="<h3>OrbitalTime:  10,755,70 days \n</h3>";
}
function Seventh()
{
	div1.style.color="silver";
	div2.style.color="silver";
	div3.style.color="silver";
	div4.style.color="silver";
	div1.innerHTML="<h3>Name:Uranus\n</h3>";
	div2.innerHTML="<h3>Speed:  6.81 km/s\n</h3>";
	div3.innerHTML="<h3>Distance:   2.88 billion km\n</h3>";
	div4.innerHTML="<h3>OrbitalTime:  30,687.15 days \n</h3>";
}
function Eight()
{	
	div1.style.color="orange";
	div2.style.color="orange";
	div3.style.color="orange";
	div4.style.color="orange";
	div1.innerHTML="<h3>Name:Neptune\n</h3>";
	div2.innerHTML="<h3>Speed:  5.43 km/s\n</h3>";
	div3.innerHTML="<h3>Distance:   4.5 billion km\n</h3>";
	div4.innerHTML="<h3>OrbitalTime:  60,190.03 days \n</h3>";
}
function loadExperimentElements()
{
var geometry;
var material;
var loader;
var texture;
    

	
    PIEsetExperimentTitle("Solar System");
    PIEsetDeveloperName("Narendra Chintala");
    PIEhideControlElement();
    initialiseHelp();
    initialiseInfo();
    sunGeometry = new THREE.SphereGeometry( 1, 32, 32 );
	sunMat = new THREE.MeshPhongMaterial( { color:'orange',overdraw: true});
	sun=new THREE.Mesh( sunGeometry, sunMat );
	sun.castShadow = true;
	sun.position.set(.5, 4.1, 3) ;
	sun.power = 7600 ;
	
	PIEaddElement(sun) ;
	/*Circle for 1st Planet*/
	geometry = new THREE.CircleGeometry(2.3, 100);
    	geometry.vertices.shift();

    circle = new THREE.Line(
        geometry,
        new THREE.LineDashedMaterial({color: 'red'})
    );
    circle.rotation.x = Math.PI * 0.5;
	tex = new THREE.ImageUtils.loadTexture("Mercury.jpeg") ;
   	planet = new THREE.Mesh(
        new THREE.SphereBufferGeometry(0.63, 32, 32),
        new THREE.MeshPhongMaterial({ map : tex})
    );
    planet.position.set(2.3, 0, 0);
    planet.name="Mercury";
    PIEaddElement(planet);

    orbit = new THREE.Group();
    orbit.add(circle);
    orbit.add(planet);

    orbitDir = new THREE.Group();
    orbitDir.add(orbit);
    orbitDir.position.x += 0.1 ;
    orbitDir.position.y += 4 ;
    orbitDir.position.z += 5 ;
    orbitDir.rotation.x +=2.3 ;
    PIEaddElement(orbitDir);
    
    /*Circle for 2nd Planet*/
    geometry = new THREE.CircleGeometry(3.5, 100);
    	geometry.vertices.shift();

    circle = new THREE.Line(
        geometry,
        new THREE.LineDashedMaterial({color: 'green'})
    );
    circle.rotation.x = Math.PI * 0.5;
    tex = new THREE.ImageUtils.loadTexture("Venus.jpeg") ;
    planet1 = new THREE.Mesh(
        new THREE.SphereBufferGeometry(0.7, 32, 32),
        new THREE.MeshBasicMaterial({map:tex})
    );
    planet1.position.set(3.5, 0, 0);
    planet1.name="Venus";
    PIEaddElement(planet1);

    orbit1 = new THREE.Group();
    orbit1.add(circle);
    orbit1.add(planet1);

    orbitDir1 = new THREE.Group();
    orbitDir1.add(orbit1);
     orbitDir1.position.x += 0.1 ;
    orbitDir1.position.y += 4 ;
    orbitDir1.position.z += 5 ;
    orbitDir1.rotation.x +=2.3 ;
    PIEaddElement(orbitDir1);
    
     /*Circle for 3rd Planet*/
	geometry = new THREE.CircleGeometry(5.4, 100);
    	geometry.vertices.shift();

    circle = new THREE.Line(
        geometry,
        new THREE.LineDashedMaterial({color: 'white'})
    );
    circle.rotation.x = Math.PI * 0.5;
    tex = new THREE.ImageUtils.loadTexture("Earth.jpg") ;
    planet2 = new THREE.Mesh(
        new THREE.SphereBufferGeometry(0.8, 32, 32),
        new THREE.MeshBasicMaterial({map:tex})
    );
    planet2.position.set(5.4, 0, 0);
    planet2.name="Earth";
    PIEaddElement(planet2);

    orbit2 = new THREE.Group();
    orbit2.add(circle);
    orbit2.add(planet2);

    orbitDir2 = new THREE.Group();
    orbitDir2.add(orbit2);
     orbitDir2.position.x -= 0.1 ;
    orbitDir2.position.y += 4 ;
    orbitDir2.position.z += 2 ;
    orbitDir2.rotation.x +=2.3 ;
    PIEaddElement(orbitDir2);
    
    
    
	  /*Circle for 4th Planet*/
	geometry = new THREE.CircleGeometry(6.8, 100);
    	geometry.vertices.shift();

    circle = new THREE.Line(
        geometry,
        new THREE.LineDashedMaterial({color: 'blue'})
    );
    circle.rotation.x = Math.PI * 0.5;
    tex = new THREE.ImageUtils.loadTexture("Mars.jpg") ;
    planet3 = new THREE.Mesh(
        new THREE.SphereBufferGeometry(0.7, 32, 32),
        new THREE.MeshPhongMaterial({map:tex})
    );
    planet3.position.set(6.8, 0, 0);
    planet3.name="Mars";
    PIEaddElement(planet3);

    orbit3 = new THREE.Group();
    orbit3.add(circle);
    orbit3.add(planet3);

    orbitDir3 = new THREE.Group();
    orbitDir3.add(orbit3);
     orbitDir3.position.x -= 0.1 ;
    orbitDir3.position.y += 3.6 ;
    orbitDir3.position.z += 2 ;
    orbitDir3.rotation.x +=2.3 ;
    PIEaddElement(orbitDir3);
    
    
     /*Circle for 5th Planet*/
    geometry = new THREE.CircleGeometry(8.2, 100);
    	geometry.vertices.shift();

    circle = new THREE.Line(
        geometry,
        new THREE.LineDashedMaterial({color: 'gold'})
    );
    circle.rotation.x = Math.PI * 0.5;
    tex = new THREE.ImageUtils.loadTexture("Jupiter.jpg") ;
    planet4 = new THREE.Mesh(
        new THREE.SphereBufferGeometry(1, 32, 32),
        new THREE.MeshPhongMaterial({map:tex})
    );
    planet4.position.set(8.4, 0, 0);
    planet4.name="Jupiter";
    PIEaddElement(planet4);

    orbit4 = new THREE.Group();
    orbit4.add(circle);
    orbit4.add(planet4);

    orbitDir4 = new THREE.Group();
    orbitDir4.add(orbit4);
    orbitDir4.position.x += 0.2 ;
    orbitDir4.position.y += 3.4 ;
    orbitDir4.position.z += 2 ;
    orbitDir4.rotation.x +=2.3 ;
    PIEaddElement(orbitDir4);
    
         /*Circle for 6th Planet*/
    geometry = new THREE.CircleGeometry(10, 100);
    	geometry.vertices.shift();

    circle = new THREE.Line(
        geometry,
        new THREE.LineDashedMaterial({color: 'silver'})
    );
    circle.rotation.x = Math.PI * 0.5;
    tex = new THREE.ImageUtils.loadTexture("Saturn.jpg") ;
    planet5 = new THREE.Mesh(
        new THREE.SphereBufferGeometry(0.7, 32, 32),
        new THREE.MeshPhongMaterial({map:tex})
    );
    planet5.position.set(10, 0, 0);
    planet5.name="Saturn";
    PIEaddElement(planet5);

    orbit5 = new THREE.Group();
    orbit5.add(circle);
    orbit5.add(planet5);

    orbitDir5 = new THREE.Group();
    orbitDir5.add(orbit5);
     orbitDir5.position.x += 0.1 ;
    orbitDir5.position.y += 3.1 ;
    orbitDir5.position.z += 2 ;
    orbitDir5.rotation.x +=2.3 ;
    PIEaddElement(orbitDir5);
    
    geometry = new THREE.CircleGeometry(11.1, 100);
    	geometry.vertices.shift();

    circle = new THREE.Line(
        geometry,
        new THREE.LineDashedMaterial({color: 'aqua'})
    );
    circle.rotation.x = Math.PI * 0.5;
    tex = new THREE.ImageUtils.loadTexture("uranus.jpg") ;
    planet6 = new THREE.Mesh(
        new THREE.SphereBufferGeometry(0.6, 32, 32),
        new THREE.MeshPhongMaterial({map:tex})
    );
    planet6.position.set(11.1, 0, 0);
    planet6.name="Uranus";
    PIEaddElement(planet6);

    orbit6 = new THREE.Group();
    orbit6.add(circle);
    orbit6.add(planet6);

    orbitDir6 = new THREE.Group();
    orbitDir6.add(orbit6);
     orbitDir6.position.x +=0.1 ;
    orbitDir6.position.y += 3 ;
    orbitDir6.position.z += 2 ;
    orbitDir6.rotation.x +=2.3 ;
    PIEaddElement(orbitDir6);


      /*Circle for 8th Planet*/
    geometry = new THREE.CircleGeometry(12.8, 100);
    	geometry.vertices.shift();

    circle = new THREE.Line(
        geometry,
        new THREE.LineDashedMaterial({color: 'indigo'})
    );
    circle.rotation.x = Math.PI * 0.5;
    tex = new THREE.ImageUtils.loadTexture("neptune.jpg") ;
    planet7 = new THREE.Mesh(
        new THREE.SphereBufferGeometry(0.8, 32, 32),
        new THREE.MeshPhongMaterial({map:tex})
    );
    planet7.position.set(12.8, 0, 0);
    planet7.name="Neptune";
    PIEaddElement(planet7);

    orbit7 = new THREE.Group();
    orbit7.add(circle);
    orbit7.add(planet7);

    orbitDir7 = new THREE.Group();
    orbitDir7.add(orbit7);
     orbitDir7.position.x += 0.1 ;
    orbitDir7.position.y +=2.4;
    orbitDir7.position.z += 2 ;
    orbitDir7.rotation.x +=2.3 ;
    PIEaddElement(orbitDir7);
    
    window.addEventListener("click",even);
    
   
    var geom = new THREE.Geometry();
	var material = new THREE.PointCloudMaterial({size: 0.15, vertexColors: true });
	for(var x = -100; x < 100; x++) {
	for(var y = -100; y < 100; y++) {
	var particle = new THREE.Vector3(Math.random()*x, Math.random()*y, Math.random());
	geom.vertices.push(particle);
	geom.colors.push(new THREE.Color(0xaaaaaa));
	}
}
	var cloud = new THREE.PointCloud(geom, material);
	//cloud.position.set(earth.position.x, earth.position.y, earth.position.z-8) ;
	PIEaddElement(cloud) ;

	PIEsetAreaOfInterest(-10,15, 10,-10);
	PIEcamera.position.y=4;

}
function updateExperimentElements(t, dt) {
	div1.innerHTML="";
	div2.innerHTML="";
	div3.innerHTML="";
	div4.innerHTML="";
orbit.rotation.y+= 0.07;
orbit1.rotation.y += 0.05;
orbit2.rotation.y += 0.04;
orbit3.rotation.y += 0.025;
orbit4.rotation.y += 0.02;
orbit5.rotation.y += 0.013;
orbit6.rotation.y += 0.008;
orbit7.rotation.y += 0.002;
}

