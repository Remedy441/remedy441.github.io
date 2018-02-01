var mySceneTLX;
var mySceneTLY;
var mySceneBRX;
var mySceneBRY;
var mySceneW;
var mySceneH;
var myCenterX;
var myCenterY;
var cube;
var cubeX;
var cubeY;
var cubeZ;
var planelens;
var planeimage;
var line1;
var line2;
var curimage = 0;
var curspriteimage = 0;
var cubeold;
var text2;
var cone;
var camera;
var spritelens;
var spriteimage;
var spriteimages;

function cubeDragStart(element, newpos){
	line1.geometry.verticesNeedUpdate = true;
	line2.geometry.verticesNeedUpdate = true;

	cubeold = cubeX;
}

function cubeDrag(element, newpos){

	
	cubeold = cubeX;
	
	// line1.geometry.verticesNeedUpdate = true;
	// line2.geometry.verticesNeedUpdate = true;

	// cubeX = newpos.x;
	// cubeY = newpos.y;
	// cubeZ = newpos.z;
	// cube.position.set(cubeX,cubeY,cubeZ);

	// line1.geometry.vertices[0].x = newpos.x;
	// line1.geometry.vertices[0].y = newpos.y+0.5;
	// line1.geometry.vertices[0].z = newpos.z;
	
	// line2.geometry.vertices[0].x = newpos.x;
	// line2.geometry.vertices[0].y = newpos.y-0.5;
	// line2.geometry.vertices[0].z = newpos.z;

	// //console.log(cubeX);

	// if(newpos.x>=0){
	// 	if(curimage == 0){
	// 		planeimage.material.map = THREE.ImageUtils.loadTexture( "cube_gblur2.png" );
	// 		planeimage.material.needsUpdate = true;
	// 		curimage = 1;
	// 	}
	// 	planelens.scale.x = 1;
	// }else if(newpos.x<0){
	// 	if(curimage == 1){
	// 		planeimage.material.map = THREE.ImageUtils.loadTexture( "cube.png" );
	// 		planeimage.material.needsUpdate = true;	
	// 		curimage = 0;
	// 	}
	// 	if(newpos.x>=-7){	
	// 			planelens.scale.x = (20-Math.abs(cubeX))/20;
	// 		}else{
	// 			planelens.scale.x = 0.65;
	// 	}
	// }
	update(newpos);

}

function cubeDragEnd(element, newpos){


}

var object;
var image;
var focal;
var close;
var objectdefault;
var imagedefault;
var focaldefault;
var objectmin;
var objectmax;
var imagemin;
var imagemax;
var focalmin;
var focalmax;
var objectstep;
var imagestep;
var focalstep;

function handleobject(newValue){
	
	cube.position.set(cubeX, cubeY, cubeZ);

	line1.geometry.verticesNeedUpdate = true;
	line2.geometry.verticesNeedUpdate = true;

	line1.geometry.vertices[0].x = cubeX;
	line1.geometry.vertices[0].y = cubeY+1;
	line1.geometry.vertices[0].z = cubeZ;

	line2.geometry.vertices[0].x = cubeX;
	line2.geometry.vertices[0].y = cubeY-1;
	line2.geometry.vertices[0].z = cubeZ;

	if(cubeX>=0){
		if(curimage == 0 && curspriteimage == 0){
			planeimage.material.map = THREE.ImageUtils.loadTexture( "cone_blur.png" );
			planeimage.material.needsUpdate = true;
			spriteimage.material.map = THREE.ImageUtils.loadTexture("textib.png");
			spriteimage.material.needsUpdate = true;
			curimage = 1;
			curspriteimage = 0
		}
		planelens.scale.x = 1;
	}else if(cubeX<0){
		if(curimage == 1 && curspriteimage == 1){
			planeimage.material.map = THREE.ImageUtils.loadTexture( "cone2.png" );
			planeimage.material.needsUpdate = true;	
			spriteimage.material.map = THREE.ImageUtils.loadTexture("textib.png");
			spriteimage.material.needsUpdate = true;
			curimage = 0;
			curspriteimage = 0;
		}
		if(cubeX>=-7){	
				planelens.scale.x = (20-Math.abs(cubeX))/20;
				if(cubeold>newpos.x){
					spriteimages.material.map = THREE.ImageUtils.loadTexture("textiid.png");
					spriteimages.material.needsUpdate = true;
					spritelens.material.map = THREE.ImageUtils.loadTexture("textld.png");
					spritelens.material.needsUpdate = true;

				}else{
					spriteimages.material.map = THREE.ImageUtils.loadTexture("textiic.png");
					spriteimages.material.needsUpdate = true;
					spritelens.material.map = THREE.ImageUtils.loadTexture("textli.png");
					spritelens.material.needsUpdate = true;
				}
			}else{
				planelens.scale.x = 0.65;
		}
	}    

	PIErender();
}

function handleimage(newValue){
	PIErender();
}

function handlefocal(newValue){
	PIErender();
}


function initialiseControlVariables(){
	object = "ObjectDistance";
	image = "ImageDistance";
	focal = "FocalLength";	

	objectdefault = 0.0;
	imagedefault = 1.7;
	focaldefault = 1.7;
	
	objectmin = -9.0;
	objectmax = 3.0;
	imagemin = 1.7;
	imagemax = 1.7;
	focalmin = 1.7;
	focalmax = 1.8;

	objectstep = 0.1;
	imagestep = 0.01;
	focalstep = 0.01;
}

function initialiseControls(){
	initialiseControlVariables();

	PIEaddInputSlider(object, objectdefault, handleobject, objectmin, objectmax, objectstep);
	PIEaddInputSlider(image, imagedefault, handleimage, imagemin, imagemax, imagestep);
	PIEaddInputSlider(focal, focaldefault, handlefocal, focalmin, focalmax, focalstep);
		
	PIEaddDisplayText(object, objectdefault);
	PIEaddDisplayText(image, imagedefault);
	PIEaddDisplayText(focal, focaldefault);
	
	
}

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Human Eye Accommodation Experiment Help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows a human eye viewing an object i.e red cube.</p>";
    helpContent = helpContent + "<h3>The drag and drop</h3>";
    helpContent = helpContent + "<p>Drag the cube around the screen to position it.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>You can control the object distance of the cube from the slider given at the top right corner.</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>As the object is dragged farther/nearer, the lens becomes thinner/thicker. Additionally, the cube also becomes clear/blur. Start and stop have no effect. The changes are shown at the time of dragging. Clicking the start button will show the new data.</p>";    

    PIEupdateHelp(helpContent);
}

function initialiseInfo(){
	infoContent =  "";
    infoContent = infoContent + "<h2>Human Eye Accommodation Experiment Concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows a human eye viewing an object i.e red cube.</p>";    
    infoContent = infoContent + "<p>When an object comes near to the eye i.e the distance of the object to the lens is less than 25cm, the eye perceives a blurred image of the object.</p>";
    infoContent = infoContent + "<p>As the object comes near, the focal length of the eye lens increases.Hence, the lens becomes thicker.</p>";
    infoContent = infoContent + "<p>When an object goes far from the eye i.e the distance of the object to the lens greater than 25cm, the eye perceives a clear image of the object.</p>";
    infoContent = infoContent + "<p>As the object goes far, the focal length of the eye lens reduces.Hence, the lens becomes thinner.</p>";
    infoContent = infoContent + "<p>At infinity, the lens is the thinnest and the focal length is 1.7cm (17mm)</p>";
    infoContent = infoContent + "<p>The human eye vision is between 25cm to infinity.</p>";

    PIEupdateInfo(infoContent);
}

function initialiseScene(){
	mySceneTLX = -5.0;
	mySceneTLY = 5.0;
	mySceneBRX = 5.0;
	mySceneBRY = -5.0;
	myCenterX = 0.0;
	myCenterY = 0.0;
	mySceneW = (mySceneBRX - mySceneTLX);;
	mySceneH   = (mySceneTLY - mySceneBRY);
	cubeZ = 0.0;
	cubeX = 0.0;
	cubeY = 0.0;
}

function initialiseOtherVariables(){

}

function loadExperimentElements(){
	PIEsetExperimentTitle("Human Eye Accommodation");
	PIEsetDeveloperName("Himangi Mittal");
	PIEhideControlElement();

	initialiseHelp();
    initialiseInfo();

    initialiseScene();

    initialiseOtherVariables();


    camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 0.5, 3000000 );
	camera.position.set( 2000, 750, 2000 );
	PIEaddElement(camera);

    var spotLight = new THREE.SpotLight( 0xffffff );
    spotLight.position.set( 100, 1000, 100 );
    spotLight.castShadow = false;

    // spotLight.shadow.mapSize.width = 1024;
    // spotLight.shadow.mapSize.height = 1024;

    // spotLight.shadow.camera.near = 500;
    // spotLight.shadow.camera.far = 4000;
    // spotLight.shadow.camera.fov = 30;

    PIEaddElement(spotLight);

    var cubeGeometry = new THREE.ConeBufferGeometry(1, 2, 4);
	var cubeMaterial = new THREE.MeshPhongMaterial({
			color: 0x003366
		});
	cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
	
	cube.position.set(cubeX,cubeY,cubeZ);
	cube.castShadow = false;
	PIEaddElement(cube);

	PIEdragElement(cube);
	PIEsetDrag(cube, cubeDrag);

	var maplens = new THREE.TextureLoader().load("lens.png");
	var planelensgeo = new THREE.PlaneGeometry(0.5,1.7);
	var planelensmat = new THREE.MeshLambertMaterial({map:maplens, transparent:true,opacity:0.8});
	planelens = new THREE.Mesh(planelensgeo, planelensmat);
	planelens.receiveShadow = false;
	planelens.position.x = 6.5;

	PIEaddElement(planelens);

	var mapimage = new THREE.TextureLoader().load("cone5.png");
	var imagegeo = new THREE.PlaneGeometry(0.9,1.3);
	var imagemat = new THREE.MeshLambertMaterial({map:mapimage,transparent:true,opacity:0.8});
	planeimage = new THREE.Mesh(imagegeo,imagemat);
	planeimage.position.x = 8.9;
	planeimage.receiveShadow = false;
	PIEaddElement(planeimage);

	var map = new THREE.TextureLoader().load( "textic.png" );
    var material = new THREE.SpriteMaterial( { map: map } );
    spriteimage = new THREE.Sprite( material );
    spriteimage.scale.y = 0.5;
    spriteimage.scale.x = 1.2;
    spriteimage.position.x = 10;
    spriteimage.position.y = 0;
    spriteimage.position.z = 0;
    PIEaddElement(spriteimage);

    var map = new THREE.TextureLoader().load( "textli.png" );
    var material = new THREE.SpriteMaterial( { map: map } );
    spritelens = new THREE.Sprite( material );
    spritelens.scale.y = 0.5;
    spritelens.scale.x = 2;
    spritelens.position.x = 5;
    spritelens.position.y = 1.2;
    spritelens.position.z = 0;
    PIEaddElement(spritelens);
    
    var map = new THREE.TextureLoader().load( "textiic.png" );
    var material = new THREE.SpriteMaterial( { map: map } );
    spriteimages = new THREE.Sprite( material );
    spriteimages.scale.y = 0.5;
    spriteimages.scale.x = 1.5;
    spriteimages.position.x = 10;
    spriteimages.position.y = 0.6;
    spriteimages.position.z = 0;
    PIEaddElement(spriteimages);

	//plane of eye
	var map = new THREE.TextureLoader().load( "eye1.png" );
    var planeGeometry = new THREE.PlaneGeometry(6, 5);
	var planeMaterial = new THREE.MeshLambertMaterial({map:map});
	var plane = new THREE.Mesh(planeGeometry, planeMaterial);
	//plane.rotation.x = -0.5 * Math.PI;
	plane.position.x = 8;
	plane.receiveShadow = false;
	//plane.transparent = true;
	PIEaddElement(plane);

	var backgroundimage = new THREE.TextureLoader().load("universe3.jpeg");
	var backgroundgeo = new THREE.PlaneGeometry(27,15);
	var backgroundmat = new THREE.MeshLambertMaterial({map:backgroundimage});
	var background = new THREE.Mesh(backgroundgeo, backgroundmat);
	background.position.x = -3;
	background.position.z = -5;
	PIEaddElement(background)


	var lineMaterial = new THREE.LineBasicMaterial({color:"yellow"});
	var linegeometry1 = new THREE.Geometry();
	linegeometry1.vertices.push(new THREE.Vector3(cubeX,cubeY+1,0));
	linegeometry1.vertices.push(new THREE.Vector3(6.35,0.2,0));
	linegeometry1.vertices.push(new THREE.Vector3(9.2,-5,0));
	line1 = new THREE.Line(linegeometry1,lineMaterial);
	line1.castShadow = false;
	PIEaddElement(line1);	

	var lineMaterial = new THREE.LineBasicMaterial({color:"yellow"});
	var linegeometry2 = new THREE.Geometry();
	linegeometry2.vertices.push(new THREE.Vector3(cubeX,cubeY-1,0));
	linegeometry2.vertices.push(new THREE.Vector3(6.35,-0.2,0));
	linegeometry2.vertices.push(new THREE.Vector3(9.1,0.5,0));
	line2 = new THREE.Line(linegeometry2,lineMaterial);
	line2.castShadow = false;
	PIEaddElement(line2);

	initialiseControls();
	
	resetExperiment();	

	PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);

}

function resetExperiment(){
	initialiseOtherVariables();

	cubeX = 0.0;
	cubeY = 0.0;
	cubeZ = 0.0;

	cube.position.set(cubeX,cubeY,cubeZ);

	line1.geometry.verticesNeedUpdate = true;
	line2.geometry.verticesNeedUpdate = true;

	line1.geometry.vertices[0].x = cubeX;
	line1.geometry.vertices[0].y = cubeY+1;
	line1.geometry.vertices[0].z = cubeZ;

	line2.geometry.vertices[0].x = cubeX;
	line2.geometry.vertices[0].y = cubeY-1;
	line2.geometry.vertices[0].z = cubeZ;

	line1.geometry.vertices[2].x = 9.2;
	line2.geometry.vertices[2].x = 9.1;

	line1.geometry.vertices[2].y = -0.5;
	line2.geometry.vertices[2].y = 0.5;

	planelens.scale.x = 1;
	planeimage.scale.x = 1;
	planeimage.material.map = THREE.ImageUtils.loadTexture( "cone5.png" );

	spriteimage.material.map = THREE.ImageUtils.loadTexture("textic.png");
	spriteimage.material.needsUpdate = true;

	spriteimages.material.map = THREE.ImageUtils.loadTexture("textiic.png");
	spriteimages.material.needsUpdate = true;

	spritelens.material.map = THREE.ImageUtils.loadTexture("textli.png");
	spritelens.material.needsUpdate = true;


}

function update(newpos){

	
	line1.geometry.verticesNeedUpdate = true;
	line2.geometry.verticesNeedUpdate = true;

	cubeX = newpos.x;
	cubeY = newpos.y;
	cubeZ = newpos.z;
	if(newpos.x>4){
		cubeX = 4;
	}
	cube.position.set(cubeX,cubeY,cubeZ);

	line1.geometry.vertices[0].x = cubeX;
	line1.geometry.vertices[0].y = newpos.y+1;
	line1.geometry.vertices[0].z = newpos.z;
	
	line2.geometry.vertices[0].x = cubeX;
	line2.geometry.vertices[0].y = newpos.y-1;
	line2.geometry.vertices[0].z = newpos.z;


	var focaltemp;
	if(cubeX>=0){
		focaltemp = 1.824;
	}else{
		focaltemp = ((25-Math.abs(cubeX))*1.8)/25;
	}
	PIEchangeDisplayText(object, cubeX);
    PIEchangeDisplayText(focal, focaltemp);

	if(newpos.x>=0){
		if(curimage == 0 && curspriteimage == 0){
			planeimage.material.map = THREE.ImageUtils.loadTexture( "cone_blur.png" );
			planeimage.material.needsUpdate = true;
			spriteimage.material.map = THREE.ImageUtils.loadTexture("textib.png");
			spriteimage.material.needsUpdate = true;
			curspriteimage = 1;
			curimage = 1;
		}
		planelens.scale.x = 1;
	}else if(newpos.x<0){
		if(curimage == 1 && curspriteimage == 1){
			planeimage.material.map = THREE.ImageUtils.loadTexture( "cone5.png" );
			planeimage.material.needsUpdate = true;	
			spriteimage.material.map = THREE.ImageUtils.loadTexture("textic.png");
			spriteimage.material.needsUpdate = true;			
			curspriteimage = 0;
			curimage = 0;
		}
		if(newpos.x>=-7){	
				planelens.scale.x = (20-Math.abs(cubeX))/20;
				if(cubeold>newpos.x){
					spriteimages.material.map = THREE.ImageUtils.loadTexture("textiid.png");
					spriteimages.material.needsUpdate = true;
					spritelens.material.map = THREE.ImageUtils.loadTexture("textld.png");
					spritelens.material.needsUpdate = true;

				}else{
					spriteimages.material.map = THREE.ImageUtils.loadTexture("textiic.png");
					spriteimages.material.needsUpdate = true;
					spritelens.material.map = THREE.ImageUtils.loadTexture("textli.png");
					spritelens.material.needsUpdate = true;
				}
			}else{
				planelens.scale.x = 0.65;
		}
		line1.geometry.vertices[2].y = (Math.abs(newpos.x)-40)*0.01; 
		line2.geometry.vertices[2].y = (40-Math.abs(newpos.x))*0.01;
		planeimage.scale.y = (25-Math.abs(newpos.x))*0.03;
	}    

}

function updateExperimentElements(t,dt){

}

