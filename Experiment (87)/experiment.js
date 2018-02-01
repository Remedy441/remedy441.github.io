var number;
var count;
var hundred;
var ten;
var unit;
var tenth;
var hundredth;
var decimalV;
var int2;
var numf;
var denf;
var integerV;
var gcd;

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

function GCD(a,b)
{
	if ( ! b) {  
        return a;  
    }  
	else
	{
		return GCD(b, a % b);
	}  
}

function CreateText()
{
	var text= document.createElement('div');
	text.innerHTML="Decimal Number";
	text.style.position="absolute";
	text.style.left="38%";
	text.style.top="10%";
	text.style.fontSize="2.5em";
	document.body.appendChild(text);
	
	
	var decimal=document.createElement('div');
	decimal.innerHTML="<input type='text' style='width:40%;height:50px;font-size:1.8em;text-align:center' id='deci' step='any' readonly >";
	decimal.style.position="absolute";
	decimal.style.top="20%";
	decimal.style.left="40%";
	document.body.appendChild(decimal);
	decimalV=document.getElementById("deci").value;
	integerV=parseInt(decimalV,10);
	
}


function PrintHundred()
{
	var divtext1=document.createElement('div');
	divtext1.setAttribute("id","divt1");
	divtext1.innerHTML="Hundreds";
	divtext1.style.position="absolute";
	divtext1.style.top="35%";
	divtext1.style.left="8%";
	divtext1.style.fontSize="2em";
	document.body.appendChild(divtext1);
	
	var div1=document.createElement('div');
	div1.setAttribute("id","div1");
	hundred=parseInt(integerV/100,10);
	if(isNaN(hundred)==true)
	{
		hundred=0;
	}
	div1.innerHTML=hundred+ "&times" + "100";
	div1.style.position="absolute";
	div1.style.top="40%";
	div1.style.fontSize="2em";
	div1.style.left="10%";
	document.body.appendChild(div1);
	
	var plus1=document.createElement('div');
	plus1.setAttribute("id","p1");
	plus1.innerHTML="+";
	plus1.style.position="absolute";
	plus1.style.top="38%";
	plus1.style.fontSize="3em";
	plus1.style.left="18%";
	document.body.appendChild(plus1);
	
}

function PrintTen()
{
	var divtext2=document.createElement('div');
	divtext2.setAttribute("id","divt2");
	divtext2.innerHTML="Tens";
	divtext2.style.position="absolute";
	divtext2.style.top="35%";
	divtext2.style.left="24%";
	divtext2.style.fontSize="2em";
	document.body.appendChild(divtext2);
	
	var div2=document.createElement('div');
	div2.setAttribute("id","div2");
	ten=parseInt((integerV/10)%10,10);
	if(isNaN(ten)==true)
	{
		ten=0;
	}
	div2.innerHTML=ten+"&times"+"10";
	div2.style.position="absolute";
	div2.style.top="40%";
	div2.style.fontSize="2em";
	div2.style.left="24%";
	document.body.appendChild(div2);
	
	var plus2=document.createElement('div');
	plus2.setAttribute("id","p2");
	plus2.innerHTML="+";
	plus2.style.position="absolute";
	plus2.style.top="38%";
	plus2.style.fontSize="3em";
	plus2.style.left="32%";
	document.body.appendChild(plus2);

}

function PrintUnit()
{
	var divtext3=document.createElement('div');
	divtext3.setAttribute("id","divt3");
	divtext3.innerHTML="Units";
	divtext3.style.position="absolute";
	divtext3.style.top="35%";
	divtext3.style.left="38%";
	divtext3.style.fontSize="2em";
	document.body.appendChild(divtext3);
	
	var div3=document.createElement('div');
	div3.setAttribute("id","div3");
	unit=parseInt(integerV%10);
	if(isNaN(unit)==true)
	{
		unit=0;
	}
	div3.innerHTML=unit+"&times"+"1";
	div3.style.position="absolute";
	div3.style.top="40%";
	div3.style.fontSize="2em";
	div3.style.left="38%";
	document.body.appendChild(div3);
	
	var plus3=document.createElement('div');
	plus3.setAttribute("id","p3");
	plus3.innerHTML="+";
	plus3.style.position="absolute";
	plus3.style.top="38%";
	plus3.style.fontSize="3em";
	plus3.style.left="46%";
	document.body.appendChild(plus3);
}

function PrintTenth()
{
	var divtext4=document.createElement('div');
	divtext4.setAttribute("id","divt4");
	divtext4.innerHTML="One-tenth";
	divtext4.style.position="absolute";
	divtext4.style.top="35%";
	divtext4.style.left="54%";
	divtext4.style.fontSize="2em";
	document.body.appendChild(divtext4);
	
	var div4=document.createElement('div');
	div4.setAttribute("id","div4");
	tenth=parseInt(int2/10);
	if(isNaN(tenth)==true)
	{
		tenth=0;
	}
	div4.innerHTML=tenth+"&times"+"1/10";
	div4.style.position="absolute";
	div4.style.top="40%";
	div4.style.fontSize="2em";
	div4.style.left="54%";
	document.body.appendChild(div4);
	
	var plus4=document.createElement('div');
	plus4.setAttribute("id","p4");
	plus4.innerHTML="+";
	plus4.style.position="absolute";
	plus4.style.top="38%";
	plus4.style.fontSize="3em";
	plus4.style.left="65%";
	document.body.appendChild(plus4);
}

function PrintHundredth()
{
	var divtext5=document.createElement('div');
	divtext5.setAttribute("id","divt5");
	divtext5.innerHTML="One-hundredth";
	divtext5.style.position="absolute";
	divtext5.style.top="35%";
	divtext5.style.left="70%";
	divtext5.style.fontSize="2em";
	document.body.appendChild(divtext5);
	
	var div5=document.createElement('div');
	div5.setAttribute("id","div5");
	hundredth=parseInt(int2%10);
	if(isNaN(tenth)==true)
	{
		hundredth=0;
	}
	div5.innerHTML=hundredth+"&times"+"1/100";
	div5.style.position="absolute";
	div5.style.top="40%";
	div5.style.fontSize="2em";
	div5.style.left="72%";
	document.body.appendChild(div5);
	
	var plus5=document.createElement('div');
	plus5.setAttribute("id","p5");
	plus5.innerHTML="=";
	plus5.style.position="absolute";
	plus5.style.top="38%";
	plus5.style.fontSize="3em";
	plus5.style.left="84%";
	document.body.appendChild(plus5);
	
	var f=document.createElement('div');
	f.setAttribute("id","f");
	f.innerHTML=decimalV;
	f.style.position="absolute";
	f.style.top="40%";
	f.style.fontSize="2em";
	f.style.left="88%";
	document.body.appendChild(f);
}

function PrintFraction()
{
	var divtext6=document.createElement('div');
	divtext6.setAttribute("id","divt6");
	divtext6.innerHTML="Fraction";
	divtext6.style.position="absolute";
	divtext6.style.top="55%";
	divtext6.style.left="15%";
	divtext6.style.fontSize="2.4em";
	document.body.appendChild(divtext6);
	
	var div6=document.createElement('div');
	div6.setAttribute("id","div6");
	num1=parseInt(decimalV*100,10);
	if(isNaN(num1)==true)
	{
		num1=0;
	}
	div6.innerHTML=num1+"/"+"100";
	div6.style.position="absolute";
	div6.style.top="65%";
	div6.style.fontSize="2.4em";
	div6.style.left="15%";
	document.body.appendChild(div6);
}

function PrintReduced()
{
	var divtext7=document.createElement('div');
	divtext7.setAttribute("id","divt7");
	divtext7.innerHTML="Reduced Fraction";
	divtext7.style.position="absolute";
	divtext7.style.top="55%";
	divtext7.style.left="50%";
	divtext7.style.fontSize="2.4em";
	document.body.appendChild(divtext7);
	
	num1=parseInt(decimalV*100,10);
	gcd=GCD(num1,100);
	numf=parseInt(num1/gcd,10);
	denf=parseInt(100/gcd,10);
	var div7=document.createElement('div');
	div7.setAttribute("id","div7");
	if(isNaN(numf)==true)
	{
		numf=0;
	}
	if(isNaN(denf)==true)
	{
		denf=1;
	}
	div7.innerHTML=numf+"/"+denf;
	div7.style.position="absolute";
	div7.style.top="65%";
	div7.style.fontSize="2.4em";
	div7.style.left="55%";
	document.body.appendChild(div7);
}

function GetExample()
{
	count=0;
	var x=document.getElementById("div1");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("div2");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("div3");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("div4");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("div5");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("divt1");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("divt2");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("divt3");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("divt4");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("divt5");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("divt6");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("div6");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("div7");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("divt7");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("p1");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("p2");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("p3");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("f");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("p4");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("p5");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	var min = 0.00;
    var  max = 999.99;
    var  highlightedNumber = Math.random() * (max - min) + min;
	highlightedNumber=round(highlightedNumber,2);
	document.getElementById("deci").value=highlightedNumber;
	decimalV=document.getElementById("deci").value;
	integerV=parseInt(decimalV,10);
	int2=decimalV-Math.floor(decimalV);
	int2=100*round(int2,2);

}

var infoContent;
function initialiseInfo()
{
	infoContent = "";
	infoContent = infoContent + "<h2>Decimals as fractions:</h2>";
	infoContent = infoContent + "<p>A decimal number, or just decimal,refers to numbers that have a fractional part separated from the integer part with a decimal separator (e.g. 3.45)</p>";
	infoContent = infoContent + "<p>The integer part, or integral part of a decimal number is the part to the left of the decimal point.The part to the right of the decimal point is the fractional part.</p>";
	infoContent = infoContent + "<h3>All decimal numbers can be written as fractions as follows:</h3>";
	infoContent = infoContent + "<p>1. Write down the decimal divided by 1.</p>";
	infoContent = infoContent + "<p>2. Multiply both top and bottom by 10 for every number after the decimal point.</p>";
	infoContent = infoContent + "<p>Example: 3.46 can be written as 3.46/1</p>";
	infoContent = infoContent + "<p>As there are two digits after the decimal point, multiply numerator and denominator two times by 10.</p>";
	infoContent = infoContent + "<p>The fraction becomes: 346/100</p>";
	infoContent = infoContent + "<p>3. Further to reduce the above fraction into more simpler form,find the gcd or the Greatest Common Divisor of the numeratorand denominator</p>";
	infoContent = infoContent + "<p>4. Divide both numerator and denominator by the gcd,the resultant fraction is called the reduced fraction.</p>";
	infoContent = infoContent + "<p>In the above example,the gcd of 346 and 100 is 2, so the reduced fraction becomes 173/50</p>";
	PIEupdateInfo(infoContent);

}

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Decimals as fractions:</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows a decimal number in the center of the screen.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls .There is one button called 'Example!'.There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see the decimal number at the center of the screen. You can either start the experiment or change the example by pressing the 'Example!' button.</p>";
	helpContent = helpContent + "<p>Once you press the start button,animation will start.</p>";
	helpContent = helpContent + "<p>First the decimal number expressed in terms of its units,tens,hundreds etc position will appear. This will give you a clear idea about the decimal place values.</p>";
    helpContent = helpContent + "<p>The decimal represented as fraction as well as reduced fraction is also displayed.</p>";
    helpContent = helpContent + "<p>You can press the 'Example!' button again to observe a new example.</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animaion by uing the speed control buttons</p>";
    helpContent = helpContent + "<h2>All the Best!</h2>";
    PIEupdateHelp(helpContent);
}	

function loadExperimentElements()
{
	var geometry;
	var material;
	PIEsetExperimentTitle("Decimals as fractions");
    PIEsetDeveloperName("Amruta Deshpande");
	PIEhideControlElement();
	
	initialiseHelp();
	initialiseInfo();
	flag=0;
	count=0;
	CreateText();
	geometry = new THREE.BoxGeometry( 4* 4, 3* 3, 0.2);
    material = new THREE.MeshBasicMaterial( {color: 0xfdf6d5} );
    var myBack = new THREE.Mesh( geometry, material );
    myBack.position.set(2,2, -5 - (0.2/ 2));
    myBack.receiveShadow = true;
	myBack.renderOrder=0.1;
    PIEaddElement(myBack);
	
	PIEaddDualCommand("Example!",GetExample);
	
	resetExperiment();
	PIEresize();
	PIEsetAreaOfInterest(0,3,4,0);
}

function resetExperiment()
{
	count=0;
	GetExample();
	var x=document.getElementById("div1");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("div2");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("div3");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("div4");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("div5");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("divt1");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("divt2");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("divt3");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("divt4");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("divt5");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("divt6");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("div6");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("p1");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("p2");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("p3");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("f");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("p4");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	x=document.getElementById("p5");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}


}

function updateExperimentElements()
{
	count++;
	if(count==60)
	{
		PrintHundred();
	}
	else if(count==120)
	{
		PrintTen();
	}
	else if(count==180)
	{
		PrintUnit();
	}
	else if(count==240)
	{
		PrintTenth();
	}
	else if(count==300)
	{
		PrintHundredth();
	}
	else if(count==360)
	{
		PrintFraction();
	}
	else if(count==420)
	{
		PrintReduced();
	}
}