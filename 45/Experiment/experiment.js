var myName = "Amarnath Karthi";
var t1,t2;
var experimentName = "Human Eye";
var helpString = "<h2>Human Eye : Help</h2><p> This experiment has 4 parts : <ol> <li> Identify the parts </li> <li> See the Animation </li> <li> Label the Parts </li> <li>See the Diagram</li></ol></p><h3>Identify the parts</h3><p> Click on the parts you are asked to find.</p><h3>See the animation</h3><p> Click on this button to see the detailed animation of the human eye and its important parts.</p><h3>Label the Parts</h3><p> Label all the parts. if you label correctly, they will turn green.</p></p><h3>See the Diagram</h3><p> See the interactive visual diagram.</p>";
var infoString = '<h2>Human Eye : Info</h2><h3>Introduction</h3><p> The eye is an important organ of our body. It helps us in seeing the beautiful world around us. It is sensitive to light. Humans have 2 eyes. The Eye is a spherical organ having several organs like : <ul> <li> Ciliary Muscles </li> <li> Crystalline Lens </li> <li> Aqueous Humor </li> <li> Pupil </li> <li> Iris </li> <li> Cornea </li> <li> Vitreous Humor </li> <li> Optic Nerve </li> <li> Retina </li> </ul></p><h3>Ciliary Muscles</h3><p> The ciliary muscle is a ring of smooth muscle in the eye s middle layer (vascular layer) that controls accommodation for viewing objects at varying distances. It changes the shape of the lens within the eye, not the size of the pupil.</p><h3>Crystalline Lens</h3><p> The lens is a transparent, biconvex structure in the eye that, along with the cornea, helps to refract light to be focused on the retina. The lens, by changing shape, functions to change the focal distance of the eye so that it can focus on objects at various distances, thus allowing a sharp real image of the object of interest to be formed on the retina. This adjustment of the lens is known as accommodation. Accommodation is similar to the focusing of a photographic camera via movement of its lenses. The lens is more flat on its anterior side than on its posterior side. In humans, the refractive power of the lens in its natural environment is approximately 18 dioptres, roughly one-third of the eye s total power.</p><h3>Aqueous Humor</h3><p> The aqueous humour is a transparent, watery fluid similar to plasma, but containing low protein concentrations. It is secreted from the ciliary epithelium, a structure supporting the lens. It fills both the anterior and the posterior chambers of the eye, and is not to be confused with the vitreous humour, which is located in the space between the lens and the retina, also known as the posterior cavity or vitreous chamber.</p><h3>Pupil</h3><p> The pupil is a hole located in the centre of the iris of the eye that allows light to strike the retina. It appears black because light rays entering the pupil are either absorbed by the tissues inside the eye directly, or absorbed after diffuse reflections within the eye that mostly miss exiting the narrow pupil.</p><h3>Iris</h3><p> The iris (plural: irides or irises) is a thin, circular structure in the eye, responsible for controlling the diameter and size of the pupil and thus the amount of light reaching the retina. Eye color is defined by that of the iris. In optical terms, the pupil is the eye s aperture, while the iris is the diaphragm that serves as the aperture stop.</p><h3>Cornea</h3><p> The cornea is the transparent front part of the eye that covers the iris, pupil, and anterior chamber. The cornea, with the anterior chamber and lens, refracts light, with the cornea accounting for approximately two-thirds of the eye s total optical power.In humans, the refractive power of the cornea is approximately 43 dioptres.While the cornea contributes most of the eye s focusing power, its focus is fixed.</p><h3>Vitreous Humor</h3><p> The vitreous humour is a transparent, colorless, gelatinous mass that fills the space in the eye between the lens and the retina. It is present at birth. The vitreous body is the clear gel that fills the space between the lens and the retina of the eyeball of humans and other vertebrates. It is often referred to as the vitreous humour or simply  the vitreous .</p><h3>Optic Nerve</h3><p> The optic nerve, also known as cranial nerve II, is a paired nerve that transmits visual information from the retina to the brain.</p><h3>Retina</h3><p> The retina is the third and inner coat of the eye which is a light-sensitive layer of tissue. The optics of the eye create an image of the visual world on the retina (through the cornea and lens), which serves much the same function as the film in a camera. Light striking the retina initiates a cascade of chemical and electrical events that ultimately trigger nerve impulses. These are sent to various visual centres of the brain through the fibres of the optic nerve. Neural retina typically refers to three layers of neural cells (photo receptor cells, bipolar cells, and ganglion cells) within the retina</p>'

var wallpaper;
var bgColor=0xf0e0aa;
var flatness=0.001;

var mySceneTLX;
var mySceneTLY;
var mySceneBRX;
var mySceneBRY;
var myCenterX;
var myCenterY;
var mySceneW;
var mySceneH;

var animateButton;
var matchButton;
var identifyButton;
var eyes;
var inputs = new Array(10);
var ciliaryMuscle;
var lens;
var aHumor;
var pupil;
var iris;
var cornea;
var vHumor;
var optic;
var retina;
var labelX;
var labelStartY;
var labelGap;

var questionText;

var ciliaryMuscleEmpty;
var lensEmpty;
var aHumorEmpty;
var pupilEmpty;
var irisEmpty;
var corneaEmpty;
var vHumorEmpty;
var opticEmpty;
var retinaEmpty;

var ciliaryMuscleInput;
var lensInput;
var aHumorInput;
var pupilInput;
var irisInput;
var corneaInput;
var vHumorInput;
var opticInput;
var retinaInput;

var ciliaryMuscleLine1;
var ciliaryMuscleLine2;
var lensLine;
var aHumorLine;
var pupilLine;
var irisLine;
var corneaLine;
var vHumorLine;
var opticLine;
var retinaLine;

var observationTable;

var diagramButton;

var partsArray = ["Iris","Pupil","Aqueous Humor","Retina","Optic Nerve","Ciliary Muscles","Vitreous Humor","Cornea","Crystalline Lens" ];
qCount = 0;

var tick;
var cross;

function initializeScene() {
  mySceneTLX = 0.0;
  mySceneTLY = 3.0;
  mySceneBRX = 8.0;
  mySceneBRY = 0.0;
  myCenterX = (mySceneTLX+mySceneBRX)/2;
  myCenterY = (mySceneTLY+mySceneBRY)/2;
  mySceneW = mySceneBRX-mySceneTLX;
  mySceneH = mySceneTLY-mySceneBRY;
}

function animateHandler() {
  console.log("Animating...");
  PIEstartAnimation();
}

function identifyHandler() {
  console.log("Identify...");
  matchButton.visible=false;
  animateButton.visible=false;
  quitButton.visible=true;
  diagramButton.visible=false;
  eyes.visible=true;
  identifyButton.visible=false;
  questionText.style.visibility = 'visible';
  setLineVisibility(true);
  setEmptyVisibility(true);
  setLabelPositionLabeled();
  setLabelVisibility(true);
  PIErender();
  partsArray = shuffle(partsArray);
  nextQuestion();
}

function nextQuestion() {
  if(qCount!=9)
  {setEmptyVisibility(true);
  tick.visible=false;
  cross.visible=false;
  PIErender();
  setQuestion(qCount);}
  else {
    questionText.innerHTML = "          Congratulations! You completed the test.";
    setEmptyVisibility(false);
    tick.visible=false;
    PIErender();
  }
}

function setQuestion(number) {
  qN= number+1;
  str = "Q."+qN+" Identify the "+partsArray[number]+".";
  questionText.innerHTML = str;
}

function matchHandler() {
  console.log("Match...");
  identifyButton.visible=false;
  animateButton.visible=false;
  matchButton.visible=false;
  diagramButton.visible=false;
  eyes.visible=true;
  quitButton.visible=true;
  setLineVisibility(true);
  setInputVisibility(true);
  questionText.innerHTML = "Name the Parts shown in the figure. Green -> Correct answer";
  //questionText.style.visibility = 'visible';
  clearInput();
}

function diagramHandler() {
  identifyButton.visible=false;
  animateButton.visible=false;
  matchButton.visible=false;
  diagramButton.visible=false;
  eyes.visible=true;
  quitButton.visible=true;
  setLineVisibility(true);
  setLabelPositionLabeled();
  setLabelVisibility(true);
}

function clearInput() {
  ciliaryMuscleInput.value="";
  lensInput.value="";
  aHumorInput.value="";
  pupilInput.value="";
  irisInput.value="";
  corneaInput.value="";
  vHumorInput.value="";
  opticInput.value="";
  retinaInput.value="";
  ciliaryMuscleInput.style.backgroundColor="white";
  lensInput.style.backgroundColor="white";
  aHumorInput.style.backgroundColor="white";
  pupilInput.style.backgroundColor="white";
  irisInput.style.backgroundColor="white";
  corneaInput.style.backgroundColor="white";
  vHumorInput.style.backgroundColor="white";
  opticInput.style.backgroundColor="white";
  retinaInput.style.backgroundColor="white";
}

function plotLine(x1,y1,x2,y2,z,thickness) {
  var myGeometry = new THREE.Geometry();
  var p1 = new THREE.Vector3(x1,y1,z);
  var p2 = new THREE.Vector3(x2,y2,z);
  myGeometry.vertices.push(p1);
  myGeometry.vertices.push(p2);
  var myMaterial;
  myMaterial = new THREE.LineBasicMaterial();
  myGeometry.computeLineDistances();
  var line = new THREE.Line(myGeometry,myMaterial);
  PIEaddElement(line);
  line.material.color = new THREE.Color(0x000000);
  line.material.linewidth = thickness;
  line.material.needsUpdate = true;
  //console.log(tapeBlackZ+" "+lineZ);
  return(line);
}

function initializeWallpaper() {
  var myMaterial = new THREE.MeshBasicMaterial({color:bgColor});
  var myGeometry = new THREE.BoxGeometry(10,4,flatness);
  var myBack = new THREE.Mesh(myGeometry,myMaterial);
  myBack.position.set(myCenterX,myCenterY,0);
  PIEaddElement(myBack);
  PIErender();
  wallpaper=myBack;
}

function createAnimateButton() {
  var myImage = new THREE.ImageUtils.loadTexture('animate.png',{},function(){PIErender();});
  var myMaterial = new THREE.MeshBasicMaterial({map:myImage,transparent:true});
  var myGeometry = new THREE.BoxGeometry(1,0.25,flatness);
  var myBox = new THREE.Mesh(myGeometry,myMaterial);
  myBox.position.set(myCenterX,myCenterY+0.25,0.1);
  PIEaddElement(myBox);
  PIErender();
  PIEsetHoverON(myBox,function(element) {
    element.geometry.dispose();
    element.geometry = new THREE.BoxGeometry(1.1,1.1/4,flatness);
    element.geometry.needsUpdate = true;
    PIErender();
  });
  PIEsetHoverOFF(myBox,function(element) {
    element.geometry.dispose();
    element.geometry = new THREE.BoxGeometry(1,1/4,flatness);
    element.geometry.needsUpdate = true;
    PIErender();
  });
  return(myBox);
}

function createMatchButton() {
  var myImage = new THREE.ImageUtils.loadTexture('match.png',{},function(){PIErender();});
  var myMaterial = new THREE.MeshBasicMaterial({map:myImage,transparent:true});
  var myGeometry = new THREE.BoxGeometry(1,1/4,flatness);
  var myBox = new THREE.Mesh(myGeometry,myMaterial);
  myBox.position.set(myCenterX,myCenterY-0.25,0.01);
  PIEaddElement(myBox);
  PIEdragElement(myBox);
  PIEsetDrag(myBox,empt);
  PIEsetDragEnd(myBox,matchHandler);
  PIErender();
  PIEsetHoverON(myBox,function(element) {
    element.geometry.dispose();
    element.geometry = new THREE.BoxGeometry(1.1,1.1/4,flatness);
    element.geometry.needsUpdate = true;
    PIErender();
  });
  PIEsetHoverOFF(myBox,function(element) {
    element.geometry.dispose();
    element.geometry = new THREE.BoxGeometry(1,1/4,flatness);
    element.geometry.needsUpdate = true;
    PIErender();
  });
  return(myBox);
}

function createDiagramButton() {
  var myImage = new THREE.ImageUtils.loadTexture('diagram.png',{},function(){PIErender();});
  var myMaterial = new THREE.MeshBasicMaterial({map:myImage,transparent:true});
  var myGeometry = new THREE.BoxGeometry(1,0.25,flatness);
  var myBox = new THREE.Mesh(myGeometry,myMaterial);
  myBox.position.set(myCenterX,myCenterY-0.75,0.01);
  PIEaddElement(myBox);
  PIErender();
  PIEsetHoverON(myBox,function(element) {
    element.geometry.dispose();
    element.geometry = new THREE.BoxGeometry(1.1,1.1/4,flatness);
    element.geometry.needsUpdate = true;
    PIErender();
  });
  PIEsetHoverOFF(myBox,function(element) {
    element.geometry.dispose();
    element.geometry = new THREE.BoxGeometry(1,1/4,flatness);
    element.geometry.needsUpdate = true;
    PIErender();
  });
  return(myBox);
}

function createIdentifyButton() {
  var myImage = new THREE.ImageUtils.loadTexture('identifyPart.png',{},function(){PIErender();});
  var myMaterial = new THREE.MeshBasicMaterial({map:myImage,transparent:true});
  var myGeometry = new THREE.BoxGeometry(1,0.25,flatness);
  var myBox = new THREE.Mesh(myGeometry,myMaterial);
  myBox.position.set(myCenterX,myCenterY+0.75,0.01);
  PIEaddElement(myBox);
  PIErender();
  PIEsetHoverON(myBox,function(element) {
    element.geometry.dispose();
    element.geometry = new THREE.BoxGeometry(1.1,1.1/4,flatness);
    element.geometry.needsUpdate = true;
    PIErender();
  });
  PIEsetHoverOFF(myBox,function(element) {
    element.geometry.dispose();
    element.geometry = new THREE.BoxGeometry(1,1/4,flatness);
    element.geometry.needsUpdate = true;
    PIErender();
  });
  return(myBox);
}

function loadButtons() {
  animateButton = createAnimateButton();
  matchButton = createMatchButton();
  identifyButton = createIdentifyButton();
  diagramButton=createDiagramButton();
  PIEdragElement(animateButton);
  PIEdragElement(identifyButton);
  PIEsetDrag(animateButton,empt);
  PIEsetDrag(identifyButton,empt);
  PIEsetDragEnd(animateButton,animateHandler);
  PIEsetDragEnd(identifyButton,identifyHandler);
  PIEdragElement(diagramButton);
  PIEsetDrag(diagramButton,empt);
  PIEsetDragEnd(diagramButton,diagramHandler);
}

function empt() {

}

function loadEyes() {
  var myImage = new THREE.ImageUtils.loadTexture('eye.png',{},function(){PIErender();});
  var myMaterial = new THREE.MeshBasicMaterial({map:myImage,transparent:true});
  var myGeometry = new THREE.BoxGeometry(1.4,1.4,flatness);
  var myBox = new THREE.Mesh(myGeometry,myMaterial);
  myBox.position.set(myCenterX,myCenterY,0);
  PIEaddElement(myBox);
  return(myBox);
}

function loadCiliaryMuscles() {
  var myImage = new THREE.ImageUtils.loadTexture('ciliary.png',{},function(){PIErender();});
  var myMaterial = new THREE.MeshBasicMaterial({map:myImage,transparent:true});
  var myGeometry = new THREE.BoxGeometry(0.55,0.55/4,flatness);
  var myBox = new THREE.Mesh(myGeometry,myMaterial);
  myBox.position.set(labelStartX,labelStartY,0.1);
  PIEaddElement(myBox);
  PIErender();
  PIEsetHoverON(myBox,grow);
  PIEsetHoverOFF(myBox,shrink);
  return(myBox);
}

function loadLens() {
  var myImage = new THREE.ImageUtils.loadTexture('lens.png',{},function(){PIErender();});
  var myMaterial = new THREE.MeshBasicMaterial({map:myImage,transparent:true});
  var myGeometry = new THREE.BoxGeometry(0.55,0.55/4,flatness);
  var myBox = new THREE.Mesh(myGeometry,myMaterial);
  myBox.position.set(labelStartX,labelStartY-labelGap,0.1);
  PIEaddElement(myBox);
  PIErender();
  PIEsetHoverON(myBox,grow);
  PIEsetHoverOFF(myBox,shrink);
  return(myBox);
}

function loadaHumor() {
  var myImage = new THREE.ImageUtils.loadTexture('aHumor.png',{},function(){PIErender();});
  var myMaterial = new THREE.MeshBasicMaterial({map:myImage,transparent:true});
  var myGeometry = new THREE.BoxGeometry(0.55,0.55/4,flatness);
  var myBox = new THREE.Mesh(myGeometry,myMaterial);
  myBox.position.set(labelStartX,labelStartY-2*labelGap,0.1);
  PIEaddElement(myBox);
  PIErender();
  PIEsetHoverON(myBox,grow);
  PIEsetHoverOFF(myBox,shrink);
  return(myBox);
}

function loadPupil() {
  var myImage = new THREE.ImageUtils.loadTexture('pupil.png',{},function(){PIErender();});
  var myMaterial = new THREE.MeshBasicMaterial({map:myImage,transparent:true});
  var myGeometry = new THREE.BoxGeometry(0.55,0.55/4,flatness);
  var myBox = new THREE.Mesh(myGeometry,myMaterial);
  myBox.position.set(labelStartX,labelStartY-3*labelGap,0.1);
  PIEaddElement(myBox);
  PIErender();
  PIEsetHoverON(myBox,grow);
  PIEsetHoverOFF(myBox,shrink);
  return(myBox);
}

function loadIris() {
  var myImage = new THREE.ImageUtils.loadTexture('iris.png',{},function(){PIErender();});
  var myMaterial = new THREE.MeshBasicMaterial({map:myImage,transparent:true});
  var myGeometry = new THREE.BoxGeometry(0.55,0.55/4,flatness);
  var myBox = new THREE.Mesh(myGeometry,myMaterial);
  myBox.position.set(labelStartX,labelStartY-4*labelGap,0.1);
  PIEaddElement(myBox);
  PIErender();
  PIEsetHoverON(myBox,grow);
  PIEsetHoverOFF(myBox,shrink);
  return(myBox);
}

function loadCornea() {
  var myImage = new THREE.ImageUtils.loadTexture('cornea.png',{},function(){PIErender();});
  var myMaterial = new THREE.MeshBasicMaterial({map:myImage,transparent:true});
  var myGeometry = new THREE.BoxGeometry(0.55,0.55/4,flatness);
  var myBox = new THREE.Mesh(myGeometry,myMaterial);
  myBox.position.set(labelStartX,labelStartY-5*labelGap,0.1);
  PIEaddElement(myBox);
  PIErender();
  PIEsetHoverON(myBox,grow);
  PIEsetHoverOFF(myBox,shrink);
  return(myBox);
}

function loadvHumor() {
  var myImage = new THREE.ImageUtils.loadTexture('vHumor.png',{},function(){PIErender();});
  var myMaterial = new THREE.MeshBasicMaterial({map:myImage,transparent:true});
  var myGeometry = new THREE.BoxGeometry(0.55,0.55/4,flatness);
  var myBox = new THREE.Mesh(myGeometry,myMaterial);
  myBox.position.set(labelStartX,labelStartY-6*labelGap,0.1);
  PIEaddElement(myBox);
  PIErender();
  PIEsetHoverON(myBox,grow);
  PIEsetHoverOFF(myBox,shrink);
  return(myBox);
}

function loadOptic() {
  var myImage = new THREE.ImageUtils.loadTexture('optic.png',{},function(){PIErender();});
  var myMaterial = new THREE.MeshBasicMaterial({map:myImage,transparent:true});
  var myGeometry = new THREE.BoxGeometry(0.55,0.55/4,flatness);
  var myBox = new THREE.Mesh(myGeometry,myMaterial);
  myBox.position.set(labelStartX,labelStartY-7*labelGap,0.1);
  PIEaddElement(myBox);
  PIErender();
  PIEsetHoverON(myBox,grow);
  PIEsetHoverOFF(myBox,shrink);
  return(myBox);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function loadQuitButton() {
  var myImage = new THREE.ImageUtils.loadTexture('quit.png',{},function(){PIErender();});
  var myMaterial = new THREE.MeshBasicMaterial({map:myImage,transparent:true});
  var myGeometry = new THREE.BoxGeometry(0.55,0.55/4,flatness);
  var myBox = new THREE.Mesh(myGeometry,myMaterial);
  myBox.position.set(myCenterX+2,labelStartY-11*labelGap,0.1);
  PIEaddElement(myBox);
  PIErender();
  quitButton = myBox;
  PIEdragElement(quitButton);
  PIEsetDragEnd(quitButton,function() {
    PIEstopAnimation();
    resetExperiment();
  });
  PIEsetHoverON(myBox,function(element) {
    element.geometry.dispose();
    element.geometry = new THREE.BoxGeometry(0.58,0.58/4,flatness);
    element.geometry.needsUpdate = true;
    PIErender();
  });
  PIEsetHoverOFF(myBox,function(element) {
    element.geometry.dispose();
    element.geometry = new THREE.BoxGeometry(0.55,0.55/4,flatness);
    element.geometry.needsUpdate = true;
    PIErender();
  });
  return(myBox);
}

function grow(element) {
  element.geometry.dispose();
  element.geometry = new THREE.BoxGeometry(0.6,0.6/4,flatness);
  element.geometry.needsUpdate = true;
  PIErender();
}

function shrink(element) {
  element.geometry.dispose();
  element.geometry = new THREE.BoxGeometry(0.55,0.55/4,flatness);
  element.geometry.needsUpdate = true;
  PIErender();
}

function loadRetina() {
  var myImage = new THREE.ImageUtils.loadTexture('retina.png',{},function(){PIErender();});
  var myMaterial = new THREE.MeshBasicMaterial({map:myImage,transparent:true});
  var myGeometry = new THREE.BoxGeometry(0.55,0.55/4,flatness);
  var myBox = new THREE.Mesh(myGeometry,myMaterial);
  myBox.position.set(labelStartX,labelStartY-8*labelGap,0.1);
  PIEaddElement(myBox);
  PIErender();
  PIEsetHoverON(myBox,grow);
  PIEsetHoverOFF(myBox,shrink);
  return(myBox);
}

function ciliaryMuscleDrag(element,newPos) {
  element.position.x= newPos.x;
  element.position.y = newPos.y;
  PIErender();
}

function lensDrag(element,newPos) {
  element.position.x= newPos.x;
  element.position.y = newPos.y;
  PIErender();
}

function aHumorDrag(element,newPos) {
  element.position.x= newPos.x;
  element.position.y = newPos.y;
  PIErender();
}

function pupilDrag(element,newPos) {
  element.position.x= newPos.x;
  element.position.y = newPos.y;
  PIErender();
}

function irisDrag(element,newPos) {
  element.position.x= newPos.x;
  element.position.y = newPos.y;
  PIErender();
}

function corneaDrag(element,newPos) {
  element.position.x= newPos.x;
  element.position.y = newPos.y;
  PIErender();
}

function vHumorDrag(element,newPos) {
  element.position.x= newPos.x;
  element.position.y = newPos.y;
  PIErender();
}

function retinaDrag(element,newPos) {
  element.position.x= newPos.x;
  element.position.y = newPos.y;
  PIErender();
}

function opticDrag(element,newPos) {
  element.position.x= newPos.x;
  element.position.y = newPos.y;
  PIErender();
}

function initializeLabels() {
  labelStartX = 1.8;
  labelStartY = myCenterY+1;
  labelGap = 0.2;
  ciliaryMuscle = loadCiliaryMuscles();
  lens = loadLens();
  aHumor = loadaHumor();
  pupil = loadPupil();
  iris = loadIris();
  cornea = loadCornea();
  vHumor = loadvHumor();
  optic = loadOptic();
  retina = loadRetina();
  /*PIEdragElement(ciliaryMuscle);
  PIEdragElement(lens);
  PIEdragElement(aHumor);
  PIEdragElement(pupil);
  PIEdragElement(iris);
  PIEdragElement(cornea);
  PIEdragElement(vHumor);
  PIEdragElement(optic);
  PIEdragElement(retina);
  PIEsetDrag(ciliaryMuscle,ciliaryMuscleDrag);
  PIEsetDrag(lens,lensDrag);
  PIEsetDrag(aHumor,aHumorDrag);
  PIEsetDrag(pupil,pupilDrag);
  PIEsetDrag(iris,irisDrag);
  PIEsetDrag(cornea,corneaDrag);
  PIEsetDrag(vHumor,vHumorDrag);
  PIEsetDrag(optic,opticDrag);
  PIEsetDrag(retina,retinaDrag);*/
  setLabelVisibility(false);
}

function circleDrag(element,pos) {
  element.position.x = pos.x;
  element.position.y = pos.y;
  PIErender();
}

var circ;
function loadCircle() {
  var myMaterial = new THREE.MeshBasicMaterial({color:0x000000});
  var myGeometry = new THREE.CircleGeometry(0.02,20);
  var myCircle = new THREE.Mesh(myGeometry,myMaterial);
  PIEaddElement(myCircle);
  myCircle.position.set(myCenterX,myCenterY,0.001);
  circ = myCircle;
  PIEdragElement(myCircle);
  PIEsetDrag(myCircle,circleDrag);
}

function emptyHandler(element) {
  result = evaluate(getPartName(element),qCount);
  if(result==true) {
    qCount++;
    tick.visible=true;
    element.visible=false;
    PIErender();
    setTimeout(nextQuestion,1000);
  }
  else {
    cross.visible=true;
    element.visible=false;
    PIErender();
    setTimeout(nextQuestion,1000);
  }
}

function evaluate(partName,qCount) {
  if(partName == partsArray[qCount])
    return(true);
  else
    return(false);
}

function getPartName(element) {
  if(element==ciliaryMuscleEmpty)
    return("Ciliary Muscles");
  if(element==lensEmpty)
    return("Crystalline Lens");
  if(element==aHumorEmpty)
    return('Aqueous Humor');
  if(element==pupilEmpty)
    return("Pupil");
  if(element==irisEmpty)
    return("Iris");
  if(element==corneaEmpty)
    return("Cornea");
  if(element==vHumorEmpty)
    return("Vitreous Humor");
  if(element==opticEmpty)
    return("Optic Nerve");
  if(element==retinaEmpty)
    return("Retina");
}

function createEmptyButton(x,y) {
  var myImage = new THREE.ImageUtils.loadTexture('empty.png',{},function(){PIErender();});
  var myMaterial = new THREE.MeshBasicMaterial({map:myImage,transparent:true});
  var myGeometry = new THREE.BoxGeometry(0.55,0.55/4,flatness);
  var myBox = new THREE.Mesh(myGeometry,myMaterial);
  myBox.position.set(x,y,0.11);
  PIEaddElement(myBox);
  PIEdragElement(myBox);
  PIEsetDrag(myBox,empt);
  PIEsetDragEnd(myBox,emptyHandler);
  PIErender();
  PIEsetHoverON(myBox,function(element) {
    element.geometry.dispose();
    element.geometry = new THREE.BoxGeometry(0.58,0.58/4,flatness);
    element.geometry.needsUpdate=true;
    PIErender();
  });
  PIEsetHoverOFF(myBox,function(element) {
    element.geometry.dispose();
    element.geometry = new THREE.BoxGeometry(0.55,0.55/4,flatness);
    element.geometry.needsUpdate=true;
    PIErender();
  });
  return(myBox);
}

function loadEmptyButtons() {
  ciliaryMuscleEmpty = createEmptyButton(4.3299,2.2628);
  lensEmpty = createEmptyButton(3.2438,1.7798);
  aHumorEmpty = createEmptyButton(3.0524,1.5798);
  pupilEmpty = createEmptyButton(3.048264,1.4007);
  irisEmpty = createEmptyButton(3.1814,1.2007);
  corneaEmpty = createEmptyButton(3.2771,0.9549);
  vHumorEmpty = createEmptyButton(4.1259,0.6592);
  opticEmpty = createEmptyButton(4.8707,1.1873);
  retinaEmpty = createEmptyButton(4.7126,1.9901);
}

function setEmptyVisibility(val) {
  ciliaryMuscleEmpty.visible = val;
  lensEmpty.visible = val;
  aHumorEmpty.visible = val;
  pupilEmpty.visible = val;
  irisEmpty.visible = val;
  corneaEmpty.visible = val;
  vHumorEmpty.visible = val;
  opticEmpty.visible = val;
  retinaEmpty.visible = val;
}

function setLabelVisibility(val) {
  ciliaryMuscle.visible = val;
  lens.visible = val;
  aHumor.visible = val;
  pupil.visible = val;
  iris.visible = val;
  cornea.visible = val;
  vHumor.visible = val;
  optic.visible = val;
  retina.visible = val;
}

function setLineVisibility(val) {
  ciliaryMuscleLine1.visible = val;
  ciliaryMuscleLine2.visible = val;
  lensLine.visible = val;
  aHumorLine.visible = val;
  pupilLine.visible = val;
  irisLine.visible = val;
  corneaLine.visible = val;
  vHumorLine.visible = val;
  opticLine.visible = val;
  retinaLine.visible = val;
}

function setLabelPositionDefault() {
  ciliaryMuscle.position.x = labelStartX;
  ciliaryMuscle.position.y = labelStartY;
  lens.position.x = labelStartX;
  lens.position.y = labelStartY- labelGap;
  aHumor.position.x = labelStartX;
  aHumor.position.y = labelStartY- 2*labelGap;
  pupil.position.x = labelStartX;
  pupil.position.y = labelStartY- 3*labelGap;
  iris.position.x = labelStartX;
  iris.position.y = labelStartY- 4*labelGap;
  cornea.position.x = labelStartX;
  cornea.position.y = labelStartY- 5*labelGap;
  vHumor.position.x = labelStartX;
  vHumor.position.y = labelStartY- 6*labelGap;
  optic.position.x = labelStartX;
  optic.position.y = labelStartY- 7*labelGap;
  retina.position.x = labelStartX;
  retina.position.y = labelStartY- 8*labelGap;
}

function setLabelPositionLabeled() {
  ciliaryMuscle.position.x = 4.3299;
  ciliaryMuscle.position.y = 2.2628;
  lens.position.x = 3.2438;
  lens.position.y = 1.7798;
  aHumor.position.x = 3.0524;
  aHumor.position.y = 1.5798;
  pupil.position.x = 3.048264;
  pupil.position.y = 1.4007;
  iris.position.x = 3.1814;
  iris.position.y = 1.2007;
  cornea.position.x = 3.2771;
  cornea.position.y = 0.9549;
  vHumor.position.x = 4.1259;
  vHumor.position.y = 0.6592;
  optic.position.x = 4.8707;
  optic.position.y = 1.1873;
  retina.position.x = 4.7126;
  retina.position.y = 1.9901;
}

function loadLabelLines() {
  ciliaryMuscleLine1 = plotLine(3.6907,1.677,4.2937,2.1802,0.001,1.5);
  ciliaryMuscleLine2 = plotLine(3.7062,1.2139,4.2937,2.1802,0.001,1.5);
  lensLine = plotLine(3.6985,1.4536,3.5129,1.7705,0.001,1.5);
  aHumorLine = plotLine(3.5361,1.538,3.3274,1.5927,0.001,1.5);
  pupilLine = plotLine(3.5825,1.4536,3.3274,1.3995,0.001,1.5);
  irisLine = plotLine(3.6057,1.3144,3.4511,1.1830,0.001,1.5);
  corneaLine = plotLine(3.613,1.1366,3.5516,0.9356,0.001,1.5);
  vHumorLine = plotLine(4.046,1.3685,4.1314,0.7346,0.001,1.5);
  opticLine = plotLine(4.6261,1.4304,4.8503,1.2758,0.001,1.5);
  retinaLine = plotLine(4.3324,1.677,4.68029,1.9251,0.001,1.5);
  setLineVisibility(false);
}

function initializeTextQuestion() {
  questionText = document.createElement('div');
  questionText.style.position = 'absolute';
  questionText.style.width = 100;
  questionText.style.height=100;
  questionText.style.zIndex=1;
  questionText.innerHTML = "Q.1 Identify the Iris. (Click on the appropriate label)";
  questionText.style.fontSize = 200+'%';
  questionText.style.top = 13+'%';
  questionText.style.left = 7+'%';
  questionText.style.visibility = 'hidden';
  document.body.appendChild(questionText);
}

function createTick() {
  var myImage = new THREE.ImageUtils.loadTexture('right.png',{},function(){PIErender();});
  var myMaterial = new THREE.MeshBasicMaterial({map:myImage, transparent: true});
  var myGeometry = new THREE.BoxGeometry(0.7,0.7,flatness);
  var myBox = new THREE.Mesh(myGeometry,myMaterial);
  myBox.position.set(6,myCenterY,0);
  PIEaddElement(myBox);
  PIErender();
  return(myBox);
}

function createCross() {
  var myImage = new THREE.ImageUtils.loadTexture('wrong.png',{},function(){PIErender();});
  var myMaterial = new THREE.MeshBasicMaterial({map:myImage, transparent: true});
  var myGeometry = new THREE.BoxGeometry(0.7,0.7,flatness);
  var myBox = new THREE.Mesh(myGeometry,myMaterial);
  myBox.position.set(6,myCenterY,0);
  PIEaddElement(myBox);
  PIErender();
  return(myBox);
}

function initializeTable() {
  PIEcreateTable("Parts",10,2,true);
  PIEupdateTable();
  PIEupdateTableCell(0,0,"Label | ")
  PIEupdateTableCell(0,1,"Name");
  for(var i=1;i<=9;i++) {
    PIEupdateTableCell(i,0,""+i);
    PIEsetCellInput(i,1,20,"");
  }
}

function findFirstDescendant()
{
   var descendants = document.getElementsByTagName("div");
   for(var i=0;i<descendants.length;i++) {
     if(descendants[i].draggable==true) {
       console.log(i);
       return(descendants[i]);
     }
   }
}

function getInputReferences() {
  var actualTable=observationTable.getElementsByTagName("div")[1].getElementsByTagName("table");
  console.log(actualTable[0].rows.length);
  for(var i=1;i<=9;i++) {
    inputs[i] = actualTable[0].rows[i].cells[1].getElementsByTagName("input")[0];
  }
}

function initializeNumberLabels(t,l) {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", "");
    x.style.position = 'absolute';
    x.style.top = t+'%';
    x.style.left = l+'%';
    x.style.border = "2px solid black";
    x.style.borderRadius="4px";
    x.style.height = "25px";
    x.style.fontSize = "12px";
    x.style.textAlign = "center";
    x.style.fontWeight = "bold";
    x.placeholder = "Enter Label"
    document.body.appendChild(x);
    return(x);
}

function loadInputs() {
  ciliaryMuscleInput = initializeNumberLabels(22.5,50);
  lensInput = initializeNumberLabels(36,26.3);
  aHumorInput = initializeNumberLabels(44.5,22.6);
  pupilInput = initializeNumberLabels(50.5,22.6);
  irisInput = initializeNumberLabels(58.5,24.9);
  corneaInput = initializeNumberLabels(68.5,26.9);
  vHumorInput = initializeNumberLabels(73.5,45);
  opticInput = initializeNumberLabels(56.5,65);
  retinaInput = initializeNumberLabels(32.5,62);

  ciliaryMuscleInput.addEventListener("keyup", function() {
    if(compare(ciliaryMuscleInput.value,"Ciliary Muscles")==true)
      ciliaryMuscleInput.style.backgroundColor="#00FF00";
    else
      ciliaryMuscleInput.style.backgroundColor="white";
  });

  lensInput.addEventListener("keyup", function() {
    if(compare(lensInput.value,"Crystalline Lens")==true)
      lensInput.style.backgroundColor="#00FF00";
    else
      lensInput.style.backgroundColor="white";
  });

  aHumorInput.addEventListener("keyup", function() {
    if(compare(aHumorInput.value,"Aqueous Humor")==true)
      aHumorInput.style.backgroundColor="#00FF00";
    else
      aHumorInput.style.backgroundColor="white";
  });

  pupilInput.addEventListener("keyup", function() {
    if(compare(pupilInput.value,"Pupil")==true)
      pupilInput.style.backgroundColor="#00FF00";
    else
      pupilInput.style.backgroundColor="white";
  });

  irisInput.addEventListener("keyup", function() {
    if(compare(irisInput.value,"Iris")==true)
      irisInput.style.backgroundColor="#00FF00";
    else
      irisInput.style.backgroundColor="white";
  });

  corneaInput.addEventListener("keyup", function() {
    if(compare(corneaInput.value,"Cornea")==true)
      corneaInput.style.backgroundColor="#00FF00";
    else
      corneaInput.style.backgroundColor="white";
  });

  vHumorInput.addEventListener("keyup", function() {
    if(compare(vHumorInput.value,"Vitreous Humor")==true)
      vHumorInput.style.backgroundColor="#00FF00";
    else
      vHumorInput.style.backgroundColor="white";
  });

  opticInput.addEventListener("keyup", function() {
    if(compare(opticInput.value,"Optic Nerve")==true)
      opticInput.style.backgroundColor="#00FF00";
    else
      opticInput.style.backgroundColor="white";
  });

  retinaInput.addEventListener("keyup", function() {
    if(compare(retinaInput.value,"Retina")==true)
      retinaInput.style.backgroundColor="#00FF00";
    else
      retinaInput.style.backgroundColor="white";
  });

  ciliaryMuscleInput.addEventListener("blur", function() {
    if(compare(ciliaryMuscleInput.value,"Ciliary Muscles")==false)
      ciliaryMuscleInput.style.backgroundColor="#FF0000";
  });

  lensInput.addEventListener("blur", function() {
    if(compare(lensInput.value,"Crystalline Lens")==false)
      lensInput.style.backgroundColor="#FF0000";
  });

  aHumorInput.addEventListener("blur", function() {
    if(compare(aHumorInput.value,"Aqueous Humor")==false)
      aHumorInput.style.backgroundColor="#FF0000"
  });

  pupilInput.addEventListener("blur", function() {
    if(compare(pupilInput.value,"Pupil")==false)
      pupilInput.style.backgroundColor="#FF0000";
  });

  irisInput.addEventListener("blur", function() {
    if(compare(irisInput.value,"Iris")==false)
      irisInput.style.backgroundColor="#FF0000";
  });

  corneaInput.addEventListener("blur", function() {
    if(compare(corneaInput.value,"Cornea")==false)
      corneaInput.style.backgroundColor="#FF0000";
  });

  vHumorInput.addEventListener("blur", function() {
    if(compare(vHumorInput.value,"Vitreous Humor")==false)
      vHumorInput.style.backgroundColor="#FF0000";
  });

  opticInput.addEventListener("blur", function() {
    if(compare(opticInput.value,"Optic Nerve")==false)
      opticInput.style.backgroundColor="#FF0000";
  });

  retinaInput.addEventListener("blur", function() {
    if(compare(retinaInput.value,"Retina")==false)
      retinaInput.style.backgroundColor="#FF0000";
  });

}

function compare(s1,s2) {
  s1 = s1.toUpperCase();
  s2 = s2.toUpperCase();
  return(s1==s2);
}

function loadExperimentElements() {
  t1 = new THREE.ImageUtils.loadTexture('empty.png',{},function(){PIErender();});
  t2 = new THREE.ImageUtils.loadTexture('emptyg.png',{},function(){PIErender();});
  PIEsetExperimentTitle(experimentName);
  PIEsetDeveloperName(myName);
  PIEupdateHelp(helpString);
  PIEupdateInfo(infoString);
  initializeScene();
  initializeWallpaper();
  loadButtons();
  eyes = loadEyes();
  eyes.visible=false;
  initializeLabels();
  loadQuitButton();
  loadEmptyButtons();
  tick = createTick();
  cross=createCross();
  tick.visible=false;
  cross.visible=false;
  quitButton.visible=false;
  matchButton.visible = true;
  setEmptyVisibility(false);
  loadLabelLines();
  setLineVisibility(false);
  initializeTable();
  observationTable = findFirstDescendant();
  console.log(observationTable);
  getInputReferences();
  observationTable.style.visibility='hidden';
  initializeTextQuestion();
  loadInputs();
  setInputVisibility(false);
  PIEsetAreaOfInterest(mySceneTLX,mySceneTLY,mySceneBRX,mySceneBRY);
}

function setInputVisibility(val) {
  if(val==true)
    val = 'visible';
  else
    val = 'hidden';
  ciliaryMuscleInput.style.visibility=val;
  lensInput.style.visibility=val;
  aHumorInput.style.visibility=val;
  pupilInput.style.visibility=val;
  irisInput.style.visibility=val;
  corneaInput.style.visibility=val;
  vHumorInput.style.visibility=val;
  opticInput.style.visibility=val;
  retinaInput.style.visibility=val;
}

function resetExperiment() {
  started = false;
  loadedLines=false;
  tStart = -1;
  ciliaryMuscleLoaded=false;
  lensLoaded=false;
  aHumorLoaded=false;
  pupilLoaded=false;
  irisLoaded=false;
  corneaLoaded=false;
  vHumorLoaded=false;
  opticLoaded=false;
  retinaLoaded=false;
  tick.visible=false;
  cross.visible=false;
  quitButton.visible= false;
  eyes.visible = false;
  diagramButton.visible=true;
  animateButton.visible=true;
  matchButton.visible=true;
  identifyButton.visible=true;
  qCount=0;
  questionText.style.visibility = 'hidden';
  observationTable.style.visibility = 'hidden';
  setEmptyVisibility(false);
  setInputVisibility(false);
  clearInput();
  setLineVisibility(false);
  setLabelVisibility(false);
  setLabelPositionDefault();
}

var started = false;
var loadedLines=false;
var tStart = -1;
var ciliaryMuscleLine1FinalX = 4.2937;
var ciliaryMuscleLine1FinalY = 2.1802;

var ciliaryMuscleLine12FinalX = 4.2937;
var ciliaryMuscleLine1FinalY = 2.1802;

var lensLineFinalX = 3.5129;
var lensLineFinalY= 1.7705;

var aHumorLineFinalX = 3.3274;
var aHumorLineFinalY = 1.5927;

var pupilLineFinalX = 3.3274;
var pupilLineFinalY = 1.3995;

var irisLineFinalX = 3.4511;
var irisLineFinalY = 1.1830;

var corneaLineFinalX = 3.5516;
var corneaLineFinalY = 0.9356;

var vHumorLineFinalX = 4.1314;
var vHumorLineFinalY = 0.7346;

var opticLineFinalX = 4.8503;
var opticLineFinalY = 1.2758;

var retinaLineFinalX = 4.06829;
var retinaLineFinalY = 1.9251;

var ciliaryMuscleLoaded=false;
var lensLoaded=false;
var aHumorLoaded=false;
var pupilLoaded=false;
var irisLoaded=false;
var corneaLoaded=false;
var vHumorLoaded=false;
var opticLoaded=false;
var retinaLoaded=false;

function updateExperimentElements(t,dt) {
  var sec = t/1000;
  if(started==false&&t>0) {
    resetExperiment();
    quitButton.visible= true;
    eyes.visible = true;
    animateButton.visible=false;
    matchButton.visible=false;
    identifyButton.visible=false;
    diagramButton.visible=false;
    started=true;
    tStart = sec;
    setLineVisibility(false);
    /*ciliaryMuscleLine1.geometry.vertices[1]=ciliaryMuscleLine1.geometry.vertices[0];
    ciliaryMuscleLine2.geometry.vertices[1]=ciliaryMuscleLine2.geometry.vertices[0];
    lensLine.geometry.vertices[1]=lensLine.geometry.vertices[0];
    aHumorLine.geometry.vertices[1]=aHumorLine.geometry.vertices[0];
    pupilLine.geometry.vertices[1]=pupilLine.geometry.vertices[0];
    irisLine.geometry.vertices[1]=irisLine.geometry.vertices[0];
    corneaLine.geometry.vertices[1]=corneaLine.geometry.vertices[0];
    vHumorLine.geometry.vertices[1]=vHumorLine.geometry.vertices[0];
    opticLine.geometry.vertices[1]=opticLine.geometry.vertices[0];
    retinaLine.geometry.vertices[1]=retinaLine.geometry.vertices[0];

    ciliaryMuscleLine1.geometry.verticesNeedUpdate=true;
    ciliaryMuscleLine2.geometry.verticesNeedUpdate=true;
    lensLine.geometry.verticesNeedUpdate=true;
    aHumorLine.geometry.verticesNeedUpdate=true;
    pupilLine.geometry.verticesNeedUpdate=true;
    irisLine.geometry.verticesNeedUpdate=true;
    corneaLine.geometry.verticesNeedUpdate=true;
    vHumorLine.geometry.verticesNeedUpdate=true;
    opticLine.geometry.verticesNeedUpdate=true;
    retinaLine.geometry.verticesNeedUpdate=true;
    console.log(aHumorLine.geometry);*/
  }
  if(started==true&&loadedLines==false) {
    var delta = sec-tStart;
    if(delta>0)
      ciliaryMuscle.visible=true;
    if(delta>1/2)
      lens.visible=true;
    if(delta>2/2)
      aHumor.visible=true;
    if(delta>3/2)
      pupil.visible=true;
    if(delta>4/2)
      iris.visible=true;
    if(delta>5/2)
      cornea.visible = true;
    if(delta>6/2)
      vHumor.visible=true;
    if(delta>7/2)
      optic.visible=true;
    if(delta>8/2)
      retina.visible=true;
    if(delta>9/2&&delta<5.5) {
      loadedLines = true;
      tStart = sec;
    }
  }

  if(loadedLines==true&&ciliaryMuscleLoaded==false) {
    var delta = sec-tStart;
    posX = labelStartX + delta*(4.3299-labelStartX)/2;
    posY = labelStartY + delta*(2.2628-labelStartY)/2;
    if(delta<2) {
      ciliaryMuscle.position.x = posX;
      ciliaryMuscle.position.y = posY;
    }
    else {
      ciliaryMuscleLine1.visible=true;
      ciliaryMuscleLine2.visible=true;
      ciliaryMuscle.position.x = 4.3299;
      ciliaryMuscle.position.y = 2.2628;
      ciliaryMuscleLoaded=true;
      tStart = sec;
    }
  }

  if(ciliaryMuscleLoaded==true&&lensLoaded==false) {
    var delta = sec-tStart;
    posX = labelStartX + delta*(3.2438-labelStartX)/2;
    posY = labelStartY-labelGap + delta*(1.7798-labelStartY+labelGap)/2;
    if(delta<2) {
      lens.position.x = posX;
      lens.position.y = posY;
    }
    else {
      lensLine.visible=true;
      lens.position.x = 3.2438;
      lens.position.y = 1.7798;
      lensLoaded=true;
      tStart = sec;
    }
  }

  if(lensLoaded==true&&aHumorLoaded==false) {
    var delta = sec-tStart;
    posX = labelStartX + delta*(3.0524-labelStartX)/2;
    posY = labelStartY-2*labelGap + delta*(1.5798-labelStartY+2*labelGap)/2;
    if(delta<2) {
      aHumor.position.x = posX;
      aHumor.position.y = posY;
    }
    else {
      aHumorLine.visible=true;
      aHumor.position.x = 3.0524;
      aHumor.position.y = 1.5798;
      aHumorLoaded=true;
      tStart = sec;
    }
  }

  if(aHumorLoaded==true&&pupilLoaded==false) {
    var delta = sec-tStart;
    posX = labelStartX + delta*(3.048264-labelStartX)/2;
    posY = labelStartY-3*labelGap + delta*(1.4007-labelStartY+3*labelGap)/2;
    if(delta<2) {
      pupil.position.x = posX;
      pupil.position.y = posY;
    }
    else {
      pupilLine.visible=true;
      pupil.position.x = 3.048264;
      pupil.position.y = 1.4007;
      pupilLoaded=true;
      tStart = sec;
    }
  }

  if(pupilLoaded==true&&irisLoaded==false) {
    var delta = sec-tStart;
    posX = labelStartX + delta*(3.1814-labelStartX)/2;
    posY = labelStartY-4*labelGap + delta*(1.2007-labelStartY+4*labelGap)/2;
    if(delta<2) {
      iris.position.x = posX;
      iris.position.y = posY;
    }
    else {
      irisLine.visible=true;
      iris.position.x = 3.1814;
      iris.position.y = 1.2007;
      irisLoaded=true;
      tStart = sec;
    }
  }

  if(irisLoaded==true&&corneaLoaded==false) {
    var delta = sec-tStart;
    posX = labelStartX + delta*(3.2771-labelStartX)/2;
    posY = labelStartY-5*labelGap + delta*(0.9549-labelStartY+5*labelGap)/2;
    if(delta<2) {
      cornea.position.x = posX;
      cornea.position.y = posY;
    }
    else {
      corneaLine.visible=true;
      cornea.position.x = 3.2771;
      cornea.position.y = 0.9549;
      corneaLoaded=true;
      tStart = sec;
    }
  }

  if(corneaLoaded==true&&vHumorLoaded==false) {
    var delta = sec-tStart;
    posX = labelStartX + delta*(4.1259-labelStartX)/2;
    posY = labelStartY-6*labelGap + delta*(0.6592-labelStartY+6*labelGap)/2;
    if(delta<2) {
      vHumor.position.x = posX;
      vHumor.position.y = posY;
    }
    else {
      vHumorLine.visible=true;
      vHumor.position.x = 4.1259;
      vHumor.position.y = 0.6592;
      vHumorLoaded=true;
      tStart = sec;
    }
  }

  if(vHumorLoaded==true&&opticLoaded==false) {
    var delta = sec-tStart;
    posX = labelStartX + delta*(4.8707-labelStartX)/2;
    posY = labelStartY-7*labelGap + delta*(1.1873-labelStartY+7*labelGap)/2;
    if(delta<2) {
      optic.position.x = posX;
      optic.position.y = posY;
    }
    else {
      opticLine.visible=true;
      optic.position.x = 4.8707;
      optic.position.y = 1.1873;
      opticLoaded=true;
      tStart = sec;
    }
  }

  if(opticLoaded==true&&retinaLoaded==false) {
    var delta = sec-tStart;
    posX = labelStartX + delta*(4.7126-labelStartX)/2;
    posY = labelStartY-8*labelGap + delta*(1.9901-labelStartY+8*labelGap)/2;
    if(delta<2) {
      retina.position.x = posX;
      retina.position.y = posY;
    }
    else {
      retinaLine.visible=true;
      retina.position.x = 4.7126;
      retina.position.y = 1.9901;
      retinaLoaded=true;
      tStart = sec;
    }
  }

}
