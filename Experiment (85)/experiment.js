var m1;
var m2;
var m3;
var m4;
var m5;
var m6;
var m7;
var m8;
var m8;
var e;
var check;
var geometry;
var material;
var line1;
var line2;
var r1,r2,r3,r4,r5,r6,r7,r8,r9;
var c1,c2,c3,c4,c5,c6,c7,c8,c9;
var f1,f2,f3,f4,f5,f6,f7,f8,f9;
var bl1,bl2,bl3,bl4,bl5,bl6,bl7,bl8,bl9;
var bc1,bc2,bc3,bc4,bc5,bc6,bc7,bc8,bc9;
var br1,br2,br3,br4,br5,br6,br7,br8,br9;
var big,small;
var show;
var num1,num2;

function getRandom() {
    return Math.floor(Math.random() * (9 - 0 + 1)) + 0;
}

function WriteLeftText(num)
{
	var div1=document.createElement('div');
	div1.setAttribute("id","left");
	div1.innerHTML="Number of matchsticks = "+num;
	div1.style.position="absolute";
	div1.style.left="7%";
	div1.style.top="80%";
	//div1.style.bottom="900%";
	div1.style.fontSize="1.5em";
	document.body.appendChild(div1);
}

function WriteCenterText(num)
{
	var div=document.createElement('div');
	div.setAttribute("id","center");
	div.innerHTML="Matchsticks burnt = "+num;
	div.style.position="absolute";
	div.style.left="35%";
	div.style.top="80%";
	div.style.fontSize="1.5em";
	document.body.appendChild(div);
}

function WriteRightText()
{
	var div=document.createElement('div');
	div.setAttribute("id","right");
	div.innerHTML="Total Matchsticks left = "+"<input type='text' style='width:40px;height:32px;font-size:1.5em' id='a'>";;
	div.style.position="absolute";
	div.style.left="63%";
	div.style.top="78%";
	div.style.fontSize="1.5em";
	document.body.appendChild(div);
}

function CreateLines()
{
	geometry = new THREE.BoxGeometry( 0.02,3, 2 );
	material = new THREE.MeshBasicMaterial( {color: 0x000000} );
	line1 = new THREE.Mesh( geometry, material );
	line1.position.set(1.7,1,-6);
	line1.renderOrder=0.3;
	PIEaddElement(line1);
	
	geometry = new THREE.BoxGeometry( 0.02,3, 2 );
	material = new THREE.MeshBasicMaterial( {color: 0x000000} );
	line2 = new THREE.Mesh( geometry, material );
	line2.position.set(3.6,1,-6);
	line2.renderOrder=0.3;
	PIEaddElement(line2);

}


function CreateLeftMatch()
{
	geometry = new THREE.BoxGeometry( 0.02,0.5, 2 );
	material = new THREE.MeshBasicMaterial( {color: 0xffaa00} );
	m1 = new THREE.Mesh( geometry, material );
	m1.position.set(0.3,1.1,-6);
	m1.renderOrder=0.3;
	m1.rotation.z=Math.PI/6;
	m1.visible=false;
	PIEaddElement(m1);
	
	geometry = new THREE.BoxGeometry( 0.02,0.5, 2 );
	material = new THREE.MeshBasicMaterial( {color: 0xffaa00} );
	m2 = new THREE.Mesh( geometry, material );
	m2.position.set(0.8,1.1,-6);
	m2.renderOrder=0.3;
	m2.rotation.z=Math.PI/6;
	m2.visible=false;
	PIEaddElement(m2);
	
	geometry = new THREE.BoxGeometry( 0.02,0.5, 2 );
	material = new THREE.MeshBasicMaterial( {color: 0xffaa00} );
	m3 = new THREE.Mesh( geometry, material );
	m3.position.set(1.3,1.1,-6);
	m3.renderOrder=0.3;
	m3.rotation.z=Math.PI/6;
	m3.visible=false;
	PIEaddElement(m3);
	
	geometry = new THREE.BoxGeometry( 0.02,0.5, 2 );
	material = new THREE.MeshBasicMaterial( {color: 0xffaa00} );
	m4 = new THREE.Mesh( geometry, material );
	m4.position.set(0.3,0.6,-6);
	m4.renderOrder=0.3;
	m4.rotation.z=Math.PI/6;
	m4.visible=false;
	PIEaddElement(m4);
	
	geometry = new THREE.BoxGeometry( 0.02,0.5, 2 );
	material = new THREE.MeshBasicMaterial( {color: 0xffaa00} );
	m5 = new THREE.Mesh( geometry, material );
	m5.position.set(0.8,0.6,-6);
	m5.renderOrder=0.3;
	m5.rotation.z=Math.PI/6;
	m5.visible=false;
	PIEaddElement(m5);
	
	geometry = new THREE.BoxGeometry( 0.02,0.5, 2 );
	material = new THREE.MeshBasicMaterial( {color: 0xffaa00} );
	m6 = new THREE.Mesh( geometry, material );
	m6.position.set(1.3,0.6,-6);
	m6.renderOrder=0.3;
	m6.rotation.z=Math.PI/6;
	m6.visible=false;
	PIEaddElement(m6);
	
	geometry = new THREE.BoxGeometry( 0.02,0.5, 2 );
	material = new THREE.MeshBasicMaterial( {color: 0xffaa00} );
	m7 = new THREE.Mesh( geometry, material );
	m7.position.set(0.3,0.01,-6);
	m7.renderOrder=0.3;
	m7.rotation.z=Math.PI/6;
	m7.visible=false;
	PIEaddElement(m7);
	
	geometry = new THREE.BoxGeometry( 0.02,0.5, 2 );
	material = new THREE.MeshBasicMaterial( {color: 0xffaa00} );
	m8 = new THREE.Mesh( geometry, material );
	m8.position.set(0.8,0.001,-6);
	m8.renderOrder=0.3;
	m8.rotation.z=Math.PI/6;
	m8.visible=false;
	PIEaddElement(m8);
	
	geometry = new THREE.BoxGeometry( 0.02,0.5, 2 );
	material = new THREE.MeshBasicMaterial( {color: 0xffaa00} );
	m9 = new THREE.Mesh( geometry, material );
	m9.position.set(1.3,0.001,-6);
	m9.renderOrder=0.3;
	m9.rotation.z=Math.PI/6;
	m9.visible=false;
	PIEaddElement(m9);
	
	geometry = new THREE.CircleGeometry( 0.04, 32);
	material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	bl1 = new THREE.Mesh( geometry, material );
	bl1.position.set(0.2,1.3,-5);
	bl1.renderOrder=0.4;
	bl1.visible=false;
	PIEaddElement( bl1 );
	
	geometry = new THREE.CircleGeometry( 0.04, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	bl2 = new THREE.Mesh( geometry, material );
	bl2.position.set(0.7,1.3,-5);
	bl2.renderOrder=0.4;
	bl2.visible=false;
	PIEaddElement( bl2 );
	
	geometry = new THREE.CircleGeometry( 0.04, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	bl3 = new THREE.Mesh( geometry, material );
	bl3.position.set(1.2,1.3,-5);
	bl3.renderOrder=0.4;
	bl3.visible=false;
	PIEaddElement( bl3 );
	
	geometry = new THREE.CircleGeometry( 0.04, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	bl4 = new THREE.Mesh( geometry, material );
	bl4.position.set(0.2,0.8,-5);
	bl4.renderOrder=0.4;
	bl4.visible=false;
	PIEaddElement( bl4 );
	
	geometry = new THREE.CircleGeometry( 0.04, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	bl5 = new THREE.Mesh( geometry, material );
	bl5.position.set(0.7,0.8,-5);
	bl5.renderOrder=0.4;
	bl5.visible=false;
	PIEaddElement( bl5 );
	
	geometry = new THREE.CircleGeometry( 0.04, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	bl6 = new THREE.Mesh( geometry, material );
	bl6.position.set(1.2,0.8,-5);
	bl6.renderOrder=0.4;
	bl6.visible=false;
	PIEaddElement( bl6 );
	
	geometry = new THREE.CircleGeometry( 0.04, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	bl7 = new THREE.Mesh( geometry, material );
	bl7.position.set(0.2,0.2,-5);
	bl7.renderOrder=0.4;
	bl7.visible=false;
	PIEaddElement( bl7 );
	
	geometry = new THREE.CircleGeometry( 0.04, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	bl8 = new THREE.Mesh( geometry, material );
	bl8.position.set(0.7,0.2,-5);
	bl8.renderOrder=0.4;
	bl8.visible=false;
	PIEaddElement( bl8 );
	
	geometry = new THREE.CircleGeometry( 0.04, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	bl9 = new THREE.Mesh( geometry, material );
	bl9.position.set(1.2,0.2,-5);
	bl9.renderOrder=0.4;
	bl9.visible=false;
	PIEaddElement( bl9 );
	
	
	geometry = new THREE.BoxGeometry( 0.02,0.5, 2 );
	material = new THREE.MeshBasicMaterial( {color: 0xffaa00} );
	c1 = new THREE.Mesh( geometry, material );
	c1.position.set(2.2,1.1,-6);
	c1.renderOrder=0.3;
	c1.rotation.z=Math.PI/6;
	c1.visible=false;
	PIEaddElement(c1);
	
	geometry = new THREE.BoxGeometry( 0.02,0.5, 2 );
	material = new THREE.MeshBasicMaterial( {color: 0xffaa00} );
	c2 = new THREE.Mesh( geometry, material );
	c2.position.set(2.7,1.1,-6);
	c2.renderOrder=0.3;
	c2.rotation.z=Math.PI/6;
	c2.visible=false;
	PIEaddElement(c2);
	
	geometry = new THREE.BoxGeometry( 0.02,0.5, 2 );
	material = new THREE.MeshBasicMaterial( {color: 0xffaa00} );
	c3 = new THREE.Mesh( geometry, material );
	c3.position.set(3.2,1.1,-6);
	c3.renderOrder=0.3;
	c3.rotation.z=Math.PI/6;
	c3.visible=false;
	PIEaddElement(c3);
	
	geometry = new THREE.BoxGeometry( 0.02,0.5, 2 );
	material = new THREE.MeshBasicMaterial( {color: 0xffaa00} );
	c4 = new THREE.Mesh( geometry, material );
	c4.position.set(2.2,0.6,-6);
	c4.renderOrder=0.3;
	c4.rotation.z=Math.PI/6;
	c4.visible=false;
	PIEaddElement(c4);
	
	geometry = new THREE.BoxGeometry( 0.02,0.5, 2 );
	material = new THREE.MeshBasicMaterial( {color: 0xffaa00} );
	c5 = new THREE.Mesh( geometry, material );
	c5.position.set(2.7,0.6,-6);
	c5.renderOrder=0.3;
	c5.rotation.z=Math.PI/6;
	c5.visible=false;
	PIEaddElement(c5);
	
	geometry = new THREE.BoxGeometry( 0.02,0.5, 2 );
	material = new THREE.MeshBasicMaterial( {color: 0xffaa00} );
	c6 = new THREE.Mesh( geometry, material );
	c6.position.set(3.2,0.6,-6);
	c6.renderOrder=0.3;
	c6.rotation.z=Math.PI/6;
	c6.visible=false;
	PIEaddElement(c6);
	
	geometry = new THREE.BoxGeometry( 0.02,0.5, 2 );
	material = new THREE.MeshBasicMaterial( {color: 0xffaa00} );
	c7 = new THREE.Mesh( geometry, material );
	c7.position.set(2.2,0.01,-6);
	c7.renderOrder=0.3;
	c7.rotation.z=Math.PI/6;
	c7.visible=false;
	PIEaddElement(c7);
	
	geometry = new THREE.BoxGeometry( 0.02,0.5, 2 );
	material = new THREE.MeshBasicMaterial( {color: 0xffaa00} );
	c8 = new THREE.Mesh( geometry, material );
	c8.position.set(2.7,0.01,-6);
	c8.renderOrder=0.3;
	c8.rotation.z=Math.PI/6;
	c8.visible=false;
	PIEaddElement(c8);
	
	geometry = new THREE.BoxGeometry( 0.02,0.5, 2 );
	material = new THREE.MeshBasicMaterial( {color: 0xffaa00} );
	c9 = new THREE.Mesh( geometry, material );
	c9.position.set(3.2,0.01,-6);
	c9.renderOrder=0.3;
	c9.rotation.z=Math.PI/6;
	c9.visible=false;
	PIEaddElement(c9);
	
	geometry = new THREE.CircleGeometry( 0.04, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	bc1 = new THREE.Mesh( geometry, material );
	bc1.position.set(2.09,1.3,-5);
	bc1.renderOrder=0.4;
	bc1.visible=false;
	PIEaddElement( bc1 );
	
	geometry = new THREE.CircleGeometry( 0.04, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	bc2 = new THREE.Mesh( geometry, material );
	bc2.position.set(2.6,1.3,-5);
	bc2.renderOrder=0.4;
	bc2.visible=false;
	PIEaddElement( bc2 );
	
	geometry = new THREE.CircleGeometry( 0.04, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	bc3 = new THREE.Mesh( geometry, material );
	bc3.position.set(3.1,1.3,-5);
	bc3.renderOrder=0.4;
	bc3.visible=false;
	PIEaddElement( bc3 );
	
	geometry = new THREE.CircleGeometry( 0.04, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	bc4 = new THREE.Mesh( geometry, material );
	bc4.position.set(2.09,0.8,-5);
	bc4.renderOrder=0.4;
	bc4.visible=false;
	PIEaddElement( bc4 );
	
	geometry = new THREE.CircleGeometry( 0.04, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	bc5 = new THREE.Mesh( geometry, material );
	bc5.position.set(2.6,0.8,-5);
	bc5.renderOrder=0.4;
	bc5.visible=false;
	PIEaddElement( bc5 );
	
	geometry = new THREE.CircleGeometry( 0.04, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	bc6 = new THREE.Mesh( geometry, material );
	bc6.position.set(3.1,0.8,-5);
	bc6.renderOrder=0.4;
	bc6.visible=false;
	PIEaddElement( bc6 );
	
	geometry = new THREE.CircleGeometry( 0.04, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	bc7 = new THREE.Mesh( geometry, material );
	bc7.position.set(2.1,0.2,-5);
	bc7.renderOrder=0.4;
	bc7.visible=false;
	PIEaddElement( bc7 );
	
	geometry = new THREE.CircleGeometry( 0.04, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	bc8 = new THREE.Mesh( geometry, material );
	bc8.position.set(2.6,0.2,-5);
	bc8.renderOrder=0.4;
	bc8.visible=false;
	PIEaddElement( bc8 );
	
	geometry = new THREE.CircleGeometry( 0.04, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	bc9 = new THREE.Mesh( geometry, material );
	bc9.position.set(3.1,0.2,-5);
	bc9.renderOrder=0.4;
	bc9.visible=false;
	PIEaddElement( bc9 );
	
	geometry = new THREE.BoxGeometry( 0.02,0.5, 2 );
	material = new THREE.MeshBasicMaterial( {color: 0xffaa00} );
	r1 = new THREE.Mesh( geometry, material );
	r1.position.set(4.1,1.1,-6);
	r1.renderOrder=0.3;
	r1.rotation.z=Math.PI/6;
	r1.visible=false;
	PIEaddElement(r1);
	
	geometry = new THREE.BoxGeometry( 0.02,0.5, 2 );
	material = new THREE.MeshBasicMaterial( {color: 0xffaa00} );
	r2 = new THREE.Mesh( geometry, material );
	r2.position.set(4.6,1.1,-6);
	r2.renderOrder=0.3;
	r2.rotation.z=Math.PI/6;
	r2.visible=false;
	PIEaddElement(r2);
	
	geometry = new THREE.BoxGeometry( 0.02,0.5, 2 );
	material = new THREE.MeshBasicMaterial( {color: 0xffaa00} );
	r3 = new THREE.Mesh( geometry, material );
	r3.position.set(5.1,1.1,-6);
	r3.renderOrder=0.3;
	r3.rotation.z=Math.PI/6;
	r3.visible=false;
	PIEaddElement(r3);
	
	geometry = new THREE.BoxGeometry( 0.02,0.5, 2 );
	material = new THREE.MeshBasicMaterial( {color: 0xffaa00} );
	r4 = new THREE.Mesh( geometry, material );
	r4.position.set(4.1,0.6,-6);
	r4.renderOrder=0.3;
	r4.rotation.z=Math.PI/6;
	r4.visible=false;
	PIEaddElement(r4);
	
	geometry = new THREE.BoxGeometry( 0.02,0.5, 2 );
	material = new THREE.MeshBasicMaterial( {color: 0xffaa00} );
	r5 = new THREE.Mesh( geometry, material );
	r5.position.set(4.6,0.6,-6);
	r5.renderOrder=0.3;
	r5.rotation.z=Math.PI/6;
	r5.visible=false;
	PIEaddElement(r5);
	
	geometry = new THREE.BoxGeometry( 0.02,0.5, 2 );
	material = new THREE.MeshBasicMaterial( {color: 0xffaa00} );
	r6 = new THREE.Mesh( geometry, material );
	r6.position.set(5.1,0.6,-6);
	r6.renderOrder=0.3;
	r6.rotation.z=Math.PI/6;
	r6.visible=false;
	PIEaddElement(r6);
	
	geometry = new THREE.BoxGeometry( 0.02,0.5, 2 );
	material = new THREE.MeshBasicMaterial( {color: 0xffaa00} );
	r7 = new THREE.Mesh( geometry, material );
	r7.position.set(4.1,0.01,-6);
	r7.renderOrder=0.3;
	r7.rotation.z=Math.PI/6;
	r7.visible=false;
	PIEaddElement(r7);
	
	geometry = new THREE.BoxGeometry( 0.02,0.5, 2 );
	material = new THREE.MeshBasicMaterial( {color: 0xffaa00} );
	r8 = new THREE.Mesh( geometry, material );
	r8.position.set(4.6,0.01,-6);
	r8.renderOrder=0.3;
	r8.rotation.z=Math.PI/6;
	r8.visible=false;
	PIEaddElement(r8);
	
	geometry = new THREE.BoxGeometry( 0.02,0.5, 2 );
	material = new THREE.MeshBasicMaterial( {color: 0xffaa00} );
	r9 = new THREE.Mesh( geometry, material );
	r9.position.set(5.1,0.01,-6);
	r9.renderOrder=0.3;
	r9.rotation.z=Math.PI/6;
	r9.visible=false;
	PIEaddElement(r9);
	
	geometry = new THREE.CircleGeometry( 0.04, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	br1 = new THREE.Mesh( geometry, material );
	br1.position.set(4,1.3,-5);
	br1.renderOrder=0.4;
	br1.visible=false;
	PIEaddElement( br1 );
	
	geometry = new THREE.CircleGeometry( 0.04, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	br2 = new THREE.Mesh( geometry, material );
	br2.position.set(4.5,1.3,-5);
	br2.renderOrder=0.4;
	br2.visible=false;
	PIEaddElement( br2 );
	
	geometry = new THREE.CircleGeometry( 0.04, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	br3 = new THREE.Mesh( geometry, material );
	br3.position.set(5,1.3,-5);
	br3.renderOrder=0.4;
	br3.visible=false;
	PIEaddElement( br3 );
	
	geometry = new THREE.CircleGeometry( 0.04, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	br4 = new THREE.Mesh( geometry, material );
	br4.position.set(4,0.8,-5);
	br4.renderOrder=0.4;
	br4.visible=false;
	PIEaddElement( br4 );
	
	geometry = new THREE.CircleGeometry( 0.04, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	br5 = new THREE.Mesh( geometry, material );
	br5.position.set(4.5,0.8,-5);
	br5.renderOrder=0.4;
	br5.visible=false;
	PIEaddElement( br5 );
	
	geometry = new THREE.CircleGeometry( 0.04, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	br6 = new THREE.Mesh( geometry, material );
	br6.position.set(5,0.8,-5);
	br6.renderOrder=0.4;
	br6.visible=false;
	PIEaddElement( br6 );
	
	geometry = new THREE.CircleGeometry( 0.04, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	br7 = new THREE.Mesh( geometry, material );
	br7.position.set(4,0.2,-5);
	br7.renderOrder=0.4;
	br7.visible=false;
	PIEaddElement( br7 );
	
	geometry = new THREE.CircleGeometry( 0.04, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	br8 = new THREE.Mesh( geometry, material );
	br8.position.set(4.5,0.2,-5);
	br8.renderOrder=0.4;
	br8.visible=false;
	PIEaddElement( br8 );
	
	geometry = new THREE.CircleGeometry( 0.04, 32 );
	material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	br9 = new THREE.Mesh( geometry, material );
	br9.position.set(5,0.2,-5);
	br9.renderOrder=0.4;
	br9.visible=false;
	PIEaddElement( br9 );
	
	var geometry = new THREE.SphereGeometry( 0.15, 32, 32 ,Math.PI/3,Math.PI/3);
	var material = new THREE.MeshBasicMaterial( {color: 0xff6600} );
	f1 = new THREE.Mesh( geometry, material );
	f1.renderOrder=0.8;
	f1.position.set(2.1,1.4,-5);
	f1.visible=false;
	PIEaddElement( f1 );
	
	var geometry = new THREE.SphereGeometry( 0.15, 32, 32 ,Math.PI/3,Math.PI/3);
	var material = new THREE.MeshBasicMaterial( {color: 0xff6600} );
	f2 = new THREE.Mesh( geometry, material );
	f2.renderOrder=0.8;
	f2.position.set(2.6,1.4,-5);
	f2.visible=false;
	PIEaddElement( f2 );
	
	var geometry = new THREE.SphereGeometry( 0.15, 32, 32 ,Math.PI/3,Math.PI/3);
	var material = new THREE.MeshBasicMaterial( {color: 0xff6600} );
	f3 = new THREE.Mesh( geometry, material );
	f3.renderOrder=0.8;
	f3.position.set(3.1,1.4,-5);
	f3.visible=false;
	PIEaddElement( f3 );
	
	var geometry = new THREE.SphereGeometry( 0.15, 32, 32 ,Math.PI/3,Math.PI/3);
	var material = new THREE.MeshBasicMaterial( {color: 0xff6600} );
	f4 = new THREE.Mesh( geometry, material );
	f4.renderOrder=0.8;
	f4.position.set(2.1,0.9,-5);
	f4.visible=false;
	PIEaddElement( f4 );
	
	var geometry = new THREE.SphereGeometry( 0.15, 32, 32 ,Math.PI/3,Math.PI/3);
	var material = new THREE.MeshBasicMaterial( {color: 0xff6600} );
	f5 = new THREE.Mesh( geometry, material );
	f5.renderOrder=0.8;
	f5.position.set(2.6,0.9,-5);
	f5.visible=false;
	PIEaddElement( f5 );
	
	var geometry = new THREE.SphereGeometry( 0.15, 32, 32 ,Math.PI/3,Math.PI/3);
	var material = new THREE.MeshBasicMaterial( {color: 0xff6600} );
	f6 = new THREE.Mesh( geometry, material );
	f6.renderOrder=0.8;
	f6.position.set(3.1,0.9,-5);
	f6.visible=false;
	PIEaddElement( f6 );
	
	var geometry = new THREE.SphereGeometry( 0.15, 32, 32 ,Math.PI/3,Math.PI/3);
	var material = new THREE.MeshBasicMaterial( {color: 0xff6600} );
	f7 = new THREE.Mesh( geometry, material );
	f7.renderOrder=0.8;
	f7.position.set(2.1,0.3,-5);
	f7.visible=false;
	PIEaddElement( f7 );
	
	var geometry = new THREE.SphereGeometry( 0.15, 32, 32 ,Math.PI/3,Math.PI/3);
	var material = new THREE.MeshBasicMaterial( {color: 0xff6600} );
	f8 = new THREE.Mesh( geometry, material );
	f8.renderOrder=0.8;
	f8.position.set(2.6,0.3,-5);
	f8.visible=false;
	PIEaddElement( f8 );
	
	var geometry = new THREE.SphereGeometry( 0.15, 32, 32 ,Math.PI/3,Math.PI/3);
	var material = new THREE.MeshBasicMaterial( {color: 0xff6600} );
	f9 = new THREE.Mesh( geometry, material );
	f9.renderOrder=0.8;
	f9.position.set(3.1,0.3,-5);
	f9.visible=false;
	PIEaddElement( f9 );
}

function getExample()
{
	e=1;
	var x=document.getElementById("correct");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	var x=document.getElementById("wrong");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	updateExperimentElements();
}

function CheckAnswer()
{
	var d;
	d=big-small;
	var r;
	r=document.getElementById('a').value;
	r=parseInt(r,10);
	var x=document.getElementById("correct");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	var x=document.getElementById("wrong");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	if(d==r)
	{
		//alert("coorect");
		var div=document.createElement('div');
		div.setAttribute("id","correct");
		div.innerHTML="CORRECT!";
		div.style.position="absolute";
		div.style.left="70%";
		div.style.color="green";
		div.style.top="86%";
		div.style.fontSize="3.5em";
		document.body.appendChild(div);
		
	}
	else 
	{
		//alert("wrong");
		var div=document.createElement('div');
		div.setAttribute("id","wrong");
		div.innerHTML="WRONG!";
		div.style.position="absolute";
		div.style.left="70%";
		div.style.color="red";
		div.style.top="86%";
		div.style.fontSize="3.5em";
		document.body.appendChild(div);
	}
	
}

function ShowAnswer()
{
	show=1;
	var x=document.getElementById("correct");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	var x=document.getElementById("wrong");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	updateExperimentElements();
}

var infoContent;
function initialiseInfo()
{
	infoContent = "";
	infoContent = infoContent + "<h2>Subtraction Exercise:</h2>";
	infoContent = infoContent + "<p>Subtraction(denoted by -) is one out of the four basic operations in mathematics.It is the process of removing some objects from a collection.</p>";
	infoContent = infoContent + "<p>The number to be subtracted is called subtrahend whereas the number from which its subtracted is called minuend. The difference between them is called difference.</p>";
	infoContent = infoContent + "<p>While subtracting two numbers,place the bigger number on top of the smaller number so that the units and tens places are lined up.</p>";
	infoContent = infoContent + "<p>Start from the unit's place, if the number on top is larger than number on bottom, we need to perform borrow operation.</p>";
	infoContent = infoContent + "<p>For example in subtracting 13-9,we cannot take away 9 from 3 in the unit's place, so we REGROUP the next place to the left.</p>";
	infoContent = infoContent + "<p>Now the unit's place becomes 13 and ten's place becomes 1-1=0(As we borrowed 1).</p>";
	infoContent = infoContent + "<p>Now we can easily subtract 9 from 13 to get 4.</p>";
	infoContent = infoContent + "<p>Do the same for ten's place as well.The same concept can be extended to any n two digit numbers</p>";
	PIEupdateInfo(infoContent);

}


var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Subtraction Exercise:</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows a number of matchsticks.The matchsticks on the left are the total matchsticks available,the matchsticks at the center show some of the matchsticks burnt.</p>";
    helpContent = helpContent + "<p>The unburnt matchsticks are shown to the right of the screen.There is a text box at the bottom for the user to enter answer.</p>";
	helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls .There are three buttons given: 'Example!' ,'Check Answer!' and 'Show Answer'.</p>";
    helpContent = helpContent + "<p> User can take new examples by pressing the 'Example!' button. User can enter answer in the text box or pree 'Show Answer' to see the answer.</p>";
	helpContent = helpContent + "<p>If you enter the answer by yourself,check your answer by pressing the 'Check Answer!' button.A message will pop up informing you whether your answer is correct or not.</p>";
    helpContent = helpContent + "<p>The activity shows what the result of subtracting two numbers will be.Practice multiple times to improve yourselves.</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animaion by uing the speed control buttons</p>";
    helpContent = helpContent + "<h2>All the Best!</h2>";
    PIEupdateHelp(helpContent);
}


function loadExperimentElements()
{
	var geometry;
	var material;
	initialiseHelp();
	initialiseInfo();
	
	PIEsetExperimentTitle("Subtraction Exercise");
    PIEsetDeveloperName("Amruta Deshpande");
	PIEhideControlElement();
	
	geometry = new THREE.BoxGeometry( 4* 4, 3* 3, 0.2);
    material = new THREE.MeshBasicMaterial( {color: /*0xfdf6d5*/0xffff80} );
    var myBack = new THREE.Mesh( geometry, material );
    myBack.position.set(2,2, -5 - (0.2/ 2));
    myBack.receiveShadow = true;
	myBack.renderOrder=0.1;
    PIEaddElement(myBack);
	
	PIEaddDualCommand("Example!",getExample);
	PIEaddDualCommand("Check Answer!",CheckAnswer);
	PIEaddDualCommand("Show Answer",ShowAnswer);
	
	CreateLines();
	CreateLeftMatch();
	resetExperiment();
	PIEsetAreaOfInterest(0,0.5,6,0);
	//PIEsetAreaOfInterest(0,3,4,0);
}


function resetExperiment()
{
	e=0;
	show=0;
	getExample();
}

function updateExperimentElements(t,dt)
{
	num1,num2;
	if(e==1)
	{
		num1=getRandom();
		num2=getRandom();
		var x;
		x=document.getElementById("center");
		if(x!=null)
		{
			x.parentNode.removeChild(x);
		}
		x=document.getElementById("left");
		if(x!=null)
		{
			x.parentNode.removeChild(x);
		}
		x=document.getElementById("right");
		if(x!=null)
		{
			x.parentNode.removeChild(x);
		}
		r1.visible=false;
		r2.visible=false;
		r3.visible=false;
		r4.visible=false;
		r5.visible=false;
		r6.visible=false;
		r7.visible=false;
		r8.visible=false;
		r9.visible=false;
		br1.visible=false;
		br2.visible=false;
		br3.visible=false;
		br4.visible=false;
		br5.visible=false;
		br6.visible=false;
		br7.visible=false;
		br8.visible=false;
		br9.visible=false;
		m1.visible=false;
		c1.visible=false;
		m2.visible=false;
		c2.visible=false;
		m3.visible=false;
		c3.visible=false;
		m4.visible=false;
		c4.visible=false;
		m5.visible=false;
		c5.visible=false;
		m6.visible=false;
		c6.visible=false;
		m7.visible=false;
		c7.visible=false;
		m8.visible=false;
		c8.visible=false;
		m9.visible=false;
		c9.visible=false;
		bl1.visible=false;
		bc1.visible=false;
		bl2.visible=false;
		bc2.visible=false;
		bl3.visible=false;
		bc3.visible=false;
		bl4.visible=false;
		bc4.visible=false;
		bl5.visible=false;
		bc5.visible=false;
		bl6.visible=false;
		bc6.visible=false;
		bl7.visible=false;
		bc7.visible=false;
		bl8.visible=false;
		bc8.visible=false;
		bl9.visible=false;
		bc9.visible=false;
		f1.visible=false;
		f2.visible=false;
		f3.visible=false;
		f4.visible=false;
		f5.visible=false;
		f6.visible=false;
		f7.visible=false;
		f8.visible=false;
		f9.visible=false;
		if(num1>num2)
		{
			big=num1;
			small=num2;
		}
		else
		{
			big=num2;
			small=num1;
		}
		WriteLeftText(big);
		WriteCenterText(small);
		WriteRightText();
		if(big==1)
		{
			m1.visible=true;
			c1.visible=true;
			bl1.visible=true;
			bc1.visible=true;
		}
		else if(big==2)
		{
			m1.visible=true;
			c1.visible=true;
			m2.visible=true;
			c2.visible=true;
			bl1.visible=true;
			bc1.visible=true;
			bl2.visible=true;
			bc2.visible=true;
		}
		else if(big==3)
		{
			m1.visible=true;
			c1.visible=true;
			m2.visible=true;
			c2.visible=true;
			m3.visible=true;
			c3.visible=true;
			bl1.visible=true;
			bc1.visible=true;
			bl2.visible=true;
			bc2.visible=true;
			bl3.visible=true;
			bc3.visible=true;
		}
		else if(big==4)
		{
			m1.visible=true;
			c1.visible=true;
			m2.visible=true;
			c2.visible=true;
			m3.visible=true;
			c3.visible=true;
			m4.visible=true;
			c4.visible=true;
			bl1.visible=true;
			bc1.visible=true;
			bl2.visible=true;
			bc2.visible=true;
			bl3.visible=true;
			bc3.visible=true;
			bl4.visible=true;
			bc4.visible=true;
		}
		else if(big==5)
		{
			m1.visible=true;
			c1.visible=true;
			m2.visible=true;
			c2.visible=true;
			m3.visible=true;
			c3.visible=true;
			m4.visible=true;
			c4.visible=true;
			m5.visible=true;
			c5.visible=true;
			bl1.visible=true;
			bc1.visible=true;
			bl2.visible=true;
			bc2.visible=true;
			bl3.visible=true;
			bc3.visible=true;
			bl4.visible=true;
			bc4.visible=true;
			bl5.visible=true;
			bc5.visible=true;
		}
		else if(big==6)
		{
			m1.visible=true;
			c1.visible=true;
			m2.visible=true;
			c2.visible=true;
			m3.visible=true;
			c3.visible=true;
			m4.visible=true;
			c4.visible=true;
			m5.visible=true;
			c5.visible=true;
			m6.visible=true;
			c6.visible=true;
			bl1.visible=true;
			bc1.visible=true;
			bl2.visible=true;
			bc2.visible=true;
			bl3.visible=true;
			bc3.visible=true;
			bl4.visible=true;
			bc4.visible=true;
			bl5.visible=true;
			bc5.visible=true;
			bl6.visible=true;
			bc6.visible=true;
		}
		else if(big==7)
		{
			m1.visible=true;
			c1.visible=true;
			m2.visible=true;
			c2.visible=true;
			m3.visible=true;
			c3.visible=true;
			m4.visible=true;
			c4.visible=true;
			m5.visible=true;
			c5.visible=true;
			m6.visible=true;
			c6.visible=true;
			m7.visible=true;
			c7.visible=true;
			bl1.visible=true;
			bc1.visible=true;
			bl2.visible=true;
			bc2.visible=true;
			bl3.visible=true;
			bc3.visible=true;
			bl4.visible=true;
			bc4.visible=true;
			bl5.visible=true;
			bc5.visible=true;
			bl6.visible=true;
			bc6.visible=true;
			bl7.visible=true;
			bc7.visible=true;
		}
		else if(big==8)
		{
			m1.visible=true;
			c1.visible=true;
			m2.visible=true;
			c2.visible=true;
			m3.visible=true;
			c3.visible=true;
			m4.visible=true;
			c4.visible=true;
			m5.visible=true;
			c5.visible=true;
			m6.visible=true;
			c6.visible=true;
			m7.visible=true;
			c7.visible=true;
			m8.visible=true;
			c8.visible=true;
			bl1.visible=true;
			bc1.visible=true;
			bl2.visible=true;
			bc2.visible=true;
			bl3.visible=true;
			bc3.visible=true;
			bl4.visible=true;
			bc4.visible=true;
			bl5.visible=true;
			bc5.visible=true;
			bl6.visible=true;
			bc6.visible=true;
			bl7.visible=true;
			bc7.visible=true;
			bl8.visible=true;
			bc8.visible=true;
		}
		else if(big==9)
		{
			m1.visible=true;
			c1.visible=true;
			m2.visible=true;
			c2.visible=true;
			m3.visible=true;
			c3.visible=true;
			m4.visible=true;
			c4.visible=true;
			m5.visible=true;
			c5.visible=true;
			m6.visible=true;
			c6.visible=true;
			m7.visible=true;
			c7.visible=true;
			m8.visible=true;
			c8.visible=true;
			m9.visible=true;
			c9.visible=true;
			bl1.visible=true;
			bc1.visible=true;
			bl2.visible=true;
			bc2.visible=true;
			bl3.visible=true;
			bc3.visible=true;
			bl4.visible=true;
			bc4.visible=true;
			bl5.visible=true;
			bc5.visible=true;
			bl6.visible=true;
			bc6.visible=true;
			bl7.visible=true;
			bc7.visible=true;
			bl8.visible=true;
			bc8.visible=true;
			bl9.visible=true;
			bc9.visible=true;
			
		}
		if(small==1)
		{
			f1.visible=true;
		}
		else if(small==2)
		{
			f1.visible=true;
			f2.visible=true;
		}
		else if(small==3)
		{
			f1.visible=true;
			f2.visible=true;
			f3.visible=true;
		}
		else if(small==4)
		{
			f1.visible=true;
			f2.visible=true;
			f3.visible=true;
			f4.visible=true;
		}
		else if(small==5)
		{
			f1.visible=true;
			f2.visible=true;
			f3.visible=true;
			f4.visible=true;
			f5.visible=true;
		}
		else if(small==6)
		{
			f1.visible=true;
			f2.visible=true;
			f3.visible=true;
			f4.visible=true;
			f5.visible=true;
			f6.visible=true;
		}
		else if(small==7)
		{
			f1.visible=true;
			f2.visible=true;
			f3.visible=true;
			f4.visible=true;
			f5.visible=true;
			f6.visible=true;
			f7.visible=true;
		}
		else if(small==8)
		{
			f1.visible=true;
			f2.visible=true;
			f3.visible=true;
			f4.visible=true;
			f5.visible=true;
			f6.visible=true;
			f7.visible=true;
			f8.visible=true;
		}
		else if(small==9)
		{
			f1.visible=true;
			f2.visible=true;
			f3.visible=true;
			f4.visible=true;
			f5.visible=true;
			f6.visible=true;
			f7.visible=true;
			f8.visible=true;
			f9.visible=true;
		}
		var diff=big-small;
		if(diff==1)
		{
			r1.visible=true;
			br1.visible=true;
		}
		else if(diff==2)
		{
			r1.visible=true;
			r2.visible=true;
			br1.visible=true;
			br2.visible=true;
		}
		else if(diff==3)
		{
			r1.visible=true;
			r2.visible=true;
			r3.visible=true;
			br1.visible=true;
			br2.visible=true;
			br3.visible=true;
		}
		else if(diff==4)
		{
			r1.visible=true;
			r2.visible=true;
			r3.visible=true;
			r4.visible=true;
			br1.visible=true;
			br2.visible=true;
			br3.visible=true;
			br4.visible=true;
		}
		else if(diff==5)
		{
			r1.visible=true;
			r2.visible=true;
			r3.visible=true;
			r4.visible=true;
			r5.visible=true;
			br1.visible=true;
			br2.visible=true;
			br3.visible=true;
			br4.visible=true;
			br5.visible=true;
		}
		else if(diff==6)
		{
			r1.visible=true;
			r2.visible=true;
			r3.visible=true;
			r4.visible=true;
			r5.visible=true;
			r6.visible=true;
			br1.visible=true;
			br2.visible=true;
			br3.visible=true;
			br4.visible=true;
			br5.visible=true;
			br6.visible=true;
		}
		else if(diff==7)
		{
			r1.visible=true;
			r2.visible=true;
			r3.visible=true;
			r4.visible=true;
			r5.visible=true;
			r6.visible=true;
			r7.visible=true;
			br1.visible=true;
			br2.visible=true;
			br3.visible=true;
			br4.visible=true;
			br5.visible=true;
			br6.visible=true;
			br7.visible=true;
		}
		else if(diff==8)
		{
			r1.visible=true;
			r2.visible=true;
			r3.visible=true;
			r4.visible=true;
			r5.visible=true;
			r6.visible=true;
			r7.visible=true;
			r8.visible=true;
			br1.visible=true;
			br2.visible=true;
			br3.visible=true;
			br4.visible=true;
			br5.visible=true;
			br6.visible=true;
			br7.visible=true;
			br8.visible=true;
		}
		else if(diff==9)
		{
			r1.visible=true;
			r2.visible=true;
			r3.visible=true;
			r4.visible=true;
			r5.visible=true;
			r6.visible=true;
			r7.visible=true;
			r8.visible=true;
			r9.visible=true;
			br1.visible=true;
			br2.visible=true;
			br3.visible=true;
			br4.visible=true;
			br5.visible=true;
			br6.visible=true;
			br7.visible=true;
			br8.visible=true;
			br9.visible=true;
		}
		e=0;
		
		
	}
	else if(show==1)
	{
		if(num1>num2)
		{
			document.getElementById('a').value=parseInt(num1-num2);
		}
		else
		{
			document.getElementById('a').value=parseInt(num2-num1);
		}
		show=0;
	}
	PIEresize();
}