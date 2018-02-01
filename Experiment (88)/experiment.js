var arrowFirst;
var arrowSecond;
var flagFirst;
var flagSecond;
var from;
var to;
var length;
var direction;
var firstnum;
var secondnum;
var flag;
var count;
var modal;
var center;
var sample;
var circle;
var string1;
var wrong;
var check;
var c;
var e;
var circle2;

function getRandom() {
    return Math.floor(Math.random() * (9 - 0 + 1)) + 0;
}


function CreateTextBox()
{
	var newdiv = document.createElement('div');
	//newdiv.setAttribute("id","n");
    newdiv.innerHTML = "<input type='text' style='width:40px;height:35px;font-size:1.5em' id='c0'>";
	newdiv.style.position="absolute";
	newdiv.style.left="28.5%";
	newdiv.style.top="23.43%";
    document.body.appendChild(newdiv);

	var newdiv1 = document.createElement('div');
    newdiv1.innerHTML = "<input type='text' style='width:40px;height:35px;font-size:1.5em' id='a0' readonly>";
	newdiv1.style.position="absolute";
	newdiv1.style.left="32.9%";
	newdiv1.style.top="32.55%";
    document.body.appendChild(newdiv1);

	var newdiv2 = document.createElement('div');
	//newdiv2.setAttribute("id","n2");
    newdiv2.innerHTML = "<input type='text' style='width:40px;height:35px;font-size:1.5em' id='b0' readonly>";
	newdiv2.style.position="absolute";
	newdiv2.style.left="32.9%";
	newdiv2.style.top="41.66%";
    document.body.appendChild(newdiv2);
	
	var newdiv3 = document.createElement('div');
	//newdiv3.setAttribute("id","s0");
    newdiv3.innerHTML = "<input type='text' style='width:40px;height:35px;font-size:1.5em' id='s0'>";
	newdiv3.style.position="absolute";
	newdiv3.style.left="32.9%";
	newdiv3.style.top="54.68%";
    document.body.appendChild(newdiv3);
	
	var newdiv4 = document.createElement('div');
	//newdiv4.setAttribute("id","n3");
    newdiv4.innerHTML = "<input type='text' style='width:40px;height:35px;font-size:1.5em' id='c1'>";
	newdiv4.style.position="absolute";
	newdiv4.style.left="24.15%";
	newdiv4.style.top="23.43%";
    document.body.appendChild(newdiv4);
	
	var newdiv5 = document.createElement('div');
	//newdiv5.setAttribute("id","n3");
    newdiv5.innerHTML = "<input type='text' style='width:40px;height:35px;font-size:1.5em' id='a1' readonly>";
	newdiv5.style.position="absolute";
	newdiv5.style.left="28.5%";
	newdiv5.style.top="32.55%";
    document.body.appendChild(newdiv5);
	
	var newdiv6 = document.createElement('div');
	//newdiv6.setAttribute("id","n3");
    newdiv6.innerHTML = "<input type='text' style='width:40px;height:35px;font-size:1.5em' id='b1' readonly>";
	newdiv6.style.position="absolute";
	newdiv6.style.left="28.5%";
	newdiv6.style.top="41.66%";
    document.body.appendChild(newdiv6);
	
	var newdiv7 = document.createElement('div');
	//newdiv7.setAttribute("id","n3");
    newdiv7.innerHTML = "<input type='text' style='width:40px;height:35px;font-size:1.5em' id='s1'>";
	newdiv7.style.position="absolute";
	newdiv7.style.left="28.5%";
	newdiv7.style.top="54.68%";
    document.body.appendChild(newdiv7);
	
	var newdiv8 = document.createElement('div');
	//newdiv8.setAttribute("id","n3");
    newdiv8.innerHTML = "<input type='text' style='width:40px;height:35px;font-size:1.5em' id='c2'>";
	newdiv8.style.position="absolute";
	newdiv8.style.left="19.76%";
	newdiv8.style.top="54.68%";
    document.body.appendChild(newdiv8);
	
	var newdiv9 = document.createElement('div');
	//newdiv9.setAttribute("id","n3");
    newdiv9.innerHTML = "<input type='text' style='width:40px;height:35px;font-size:1.5em' id='a2' readonly>";
	newdiv9.style.position="absolute";
	newdiv9.style.left="24.15%";
	newdiv9.style.top="32.55%";
    document.body.appendChild(newdiv9);
	
	var newdiv10 = document.createElement('div');
	//newdiv10.setAttribute("id","n3");
    newdiv10.innerHTML = "<input type='text' style='width:40px;height:35px;font-size:1.5em' id='b2' readonly>";
	newdiv10.style.position="absolute";
	newdiv10.style.left="24.15%";
	newdiv10.style.top="41.66%";
    document.body.appendChild(newdiv10);
	
	var newdiv11 = document.createElement('div');
	//newdiv11.setAttribute("id","n3");
    newdiv11.innerHTML = "<input type='text' style='width:40px;height:35px;font-size:1.5em' id='s2'>";
	newdiv11.style.position="absolute";
	newdiv11.style.left="24.15%";
	newdiv11.style.top="54.68%";
    document.body.appendChild(newdiv11);
	
	var carry=document.createElement('div');
	carry.setAttribute("id","carry");
	carry.innerHTML="CARRY";
	carry.style.position="absolute";
	carry.style.left="10%";
	carry.style.fontSize="1.8em";
	carry.style.top="23.43%";
	document.body.appendChild(carry);
	
	var firstE=document.createElement('div');
	firstE.setAttribute("id","firstE");
	firstE.innerHTML="FIRST NUMBER";
	firstE.style.position="absolute";
	firstE.style.left="4.5%";
	firstE.style.fontSize="1.8em";
	firstE.style.top="32.55%";
	document.body.appendChild(firstE);
	
	var SecE=document.createElement('div');
	SecE.setAttribute("id","SecE");
	SecE.innerHTML="SECOND NUMBER";
	SecE.style.position="absolute";
	SecE.style.left="4%";
	SecE.style.fontSize="1.8em";
	SecE.style.top="41.66%";
	document.body.appendChild(SecE);
	

}

function CreateRightText()
{
	var newdiv12 = document.createElement('div');
    newdiv12.innerHTML = "<input type='text' style='width:40px;height:35px;font-size:1.5em' id='A2' readonly>";
	newdiv12.style.position="absolute";
	newdiv12.style.left="55%";
	newdiv12.style.top="32.55%";
    document.body.appendChild(newdiv12);

	var newdiv13 = document.createElement('div');
	//newdiv13.setAttribute("id","n2");
    newdiv13.innerHTML = "<input type='text' style='width:40px;height:35px;font-size:1.5em' id='B2' readonly>";
	newdiv13.style.position="absolute";
	newdiv13.style.left="55%";
	newdiv13.style.top="41.66%";
    document.body.appendChild(newdiv13);
	
	var newdiv14 = document.createElement('div');
    newdiv14.innerHTML = "<input type='text' style='width:40px;height:35px;font-size:1.5em' id='A1' readonly>";
	newdiv14.style.position="absolute";
	newdiv14.style.left="69.54%";
	newdiv14.style.top="32.55%";
    document.body.appendChild(newdiv14);

	var newdiv15 = document.createElement('div');
	//newdiv15.setAttribute("id","n2");
    newdiv15.innerHTML = "<input type='text' style='width:40px;height:35px;font-size:1.5em' id='B1' readonly>";
	newdiv15.style.position="absolute";
	newdiv15.style.left="69.54%";
	newdiv15.style.top="41.66%";
    document.body.appendChild(newdiv15);
	
	var newdiv16 = document.createElement('div');
    newdiv16.innerHTML = "<input type='text' style='width:40px;height:35px;font-size:1.5em' id='A0' readonly>";
	newdiv16.style.position="absolute";
	newdiv16.style.left="84.18%";
	newdiv16.style.top="32.55%";
    document.body.appendChild(newdiv16);

	var newdiv17 = document.createElement('div');
	//newdiv17.setAttribute("id","n2");
    newdiv17.innerHTML = "<input type='text' style='width:40px;height:35px;font-size:1.5em' id='B0' readonly>";
	newdiv17.style.position="absolute";
	newdiv17.style.left="84.18%";
	newdiv17.style.top="41.66%";
    document.body.appendChild(newdiv17);
	
	var newdiv18 = document.createElement('div');
	//newdiv8.setAttribute("id","n3");
    newdiv18.innerHTML = "<input type='text' style='width:40px;height:35px;font-size:1.5em' id='C0' readonly>";
	newdiv18.style.position="absolute";
	newdiv18.style.left="69.54%";
	newdiv18.style.top="23.43%";
    document.body.appendChild(newdiv18);
	
	var newdiv19 = document.createElement('div');
    newdiv19.innerHTML = "<input type='text' style='width:40px;height:35px;font-size:1.5em' id='C1' readonly>";
	newdiv19.style.position="absolute";
	newdiv19.style.left="55%";
	newdiv19.style.top="23.43%";
    document.body.appendChild(newdiv19);
	
	var newdiv20 = document.createElement('div');
	//newdiv8.setAttribute("id","n3");
    newdiv20.innerHTML = "<input type='text' style='width:40px;height:35px;font-size:1.5em' id='C2' readonly>";
	newdiv20.style.position="absolute";
	newdiv20.style.left="50.51%";
	newdiv20.style.top="54.68%";
    document.body.appendChild(newdiv20);
	
	var newdiv21 = document.createElement('div');
	//newdiv8.setAttribute("id","n3");
    newdiv21.innerHTML = "<input type='text' style='width:40px;height:35px;font-size:1.5em' id='C1L' readonly>";
	newdiv21.style.position="absolute";
	newdiv21.style.left="65.15%";
	newdiv21.style.top="54.68%";
    document.body.appendChild(newdiv21);
	
	var newdiv22 = document.createElement('div');
	//newdiv8.setAttribute("id","n3");
    newdiv22.innerHTML = "<input type='text' style='width:40px;height:35px;font-size:1.5em' id='C0L' readonly>";
	newdiv22.style.position="absolute";
	newdiv22.style.left="79.79%";
	newdiv22.style.top="54.68%";
    document.body.appendChild(newdiv22);
	
	var newdiv23 = document.createElement('div');
	//newdiv8.setAttribute("id","n3");
    newdiv23.innerHTML = "<input type='text' style='width:40px;height:35px;font-size:1.5em' id='S2' readonly>";
	newdiv23.style.position="absolute";
	newdiv23.style.left="55%";
	newdiv23.style.top="54.68%";
    document.body.appendChild(newdiv23);
	
	var newdiv24 = document.createElement('div');
	//newdiv8.setAttribute("id","n3");
    newdiv24.innerHTML = "<input type='text' style='width:40px;height:35px;font-size:1.5em' id='S1' readonly>";
	newdiv24.style.position="absolute";
	newdiv24.style.left="69.54%";
	newdiv24.style.top="54.68%";
    document.body.appendChild(newdiv24);
	
	var newdiv25 = document.createElement('div');
	//newdiv8.setAttribute("id","n3");
    newdiv25.innerHTML = "<input type='text' style='width:40px;height:35px;font-size:1.5em;color:'white'' id='S0' readonly>";
	newdiv25.style.position="absolute";
	newdiv25.style.left="84.18%";
	newdiv25.style.top="54.68%";
    document.body.appendChild(newdiv25);
	
	
}


function CreateSymbol()
{
	var plus1=document.createElement('div')
	plus1.innerHTML="+";
	plus1.style.position="absolute";
	plus1.style.top="36.45%";
	plus1.style.fontSize="6em";
	plus1.style.left="19.5%";
	document.body.appendChild(plus1);
	
	var plus2=document.createElement('div')
	plus2.innerHTML="+";
	plus2.style.position="absolute";
	plus2.style.top="36.45%";
	plus2.style.fontSize="6em";
	plus2.style.left="50.51%";
	document.body.appendChild(plus2);
	
	var plus3=document.createElement('div')
	plus3.innerHTML="+";
	plus3.style.position="absolute";
	plus3.style.top="36.45%";
	plus3.style.fontSize="6em";
	plus3.style.left="65.15%";
	document.body.appendChild(plus3);
	
	var plus4=document.createElement('div')
	plus4.innerHTML="+";
	plus4.style.position="absolute";
	plus4.style.top="36.45%";
	plus4.style.fontSize="6em";
	plus4.style.left="79.79%";
	document.body.appendChild(plus4);
	
	var line1=document.createElement('hr');
	line1.style.position="absolute";
	line1.style.width="20%";
	line1.style.left="18.3%";
	line1.style.top="49.47%";
	line1.style.height="5px";
	line1.style.backgroundColor="black";
	document.body.appendChild(line1);
	
	var line2=document.createElement('hr');
	line2.style.position="absolute";
	line2.style.width="10%";
	line2.style.left="49.7%";
	line2.style.top="49.47%";
	line2.style.height="5px";
	line2.style.backgroundColor="black";
	document.body.appendChild(line2);
	
	var line3=document.createElement('hr');
	line3.style.position="absolute";
	line3.style.width="10%";
	line3.style.left="64.42%";
	line3.style.top="49.47%";
	line3.style.height="5px";
	line3.style.backgroundColor="black";
	document.body.appendChild(line3);
	
	var line4=document.createElement('hr');
	line4.style.position="absolute";
	line4.style.width="10%";
	line4.style.left="79.06%";
	line4.style.top="49.47%";
	line4.style.height="5px";
	line4.style.backgroundColor="black";
	document.body.appendChild(line4);
}



function AddFirst()
{
	var a1=document.getElementById("a0").value;
	var a2=document.getElementById("b0").value;
	var A1=parseInt(a1,10);
	var A2=parseInt(a2,10);
	if(isNaN(A1)==true)
	{
		A1=parseInt(0);
	}
	if(isNaN(A2)==true)
	{
		A2=parseInt(0);
	}
	document.getElementById('A0').value=parseInt(A1);
	document.getElementById('B0').value=parseInt(A2);
	var result=A1+A2;
	//alert(result);
	var carry=result/10;
	carry=parseInt(carry);
	result=result%10;
	document.getElementById('C0').value=parseInt(carry);
	document.getElementById('C0L').value=parseInt(carry);
	document.getElementById('S0').value=parseInt(result);
	document.getElementById('c0').value=parseInt(carry);
	document.getElementById('s0').value=parseInt(result);
	
}

function AddSecond()
{
	var a1=document.getElementById("a1").value;
	var a2=document.getElementById("b1").value;
	var a3=document.getElementById("c0").value;
	var A1=parseInt(a1,10);
	var A2=parseInt(a2,10);
	var A3=parseInt(a3,10);
	if(isNaN(A1)==true)
	{
		A1=parseInt(0);
	}
	if(isNaN(A2)==true)
	{
		A2=parseInt(0);
	}
	if(isNaN(A3)==true)
	{
		A3=parseInt(0);
	}
	document.getElementById('A1').value=parseInt(A1);
	document.getElementById('B1').value=parseInt(A2);
	var result=A1+A2+A3;
	//alert(result);
	var carry=result/10;
	carry=parseInt(carry);
	result=result%10;
	document.getElementById('C1').value=parseInt(carry);
	document.getElementById('C1L').value=parseInt(carry);
	document.getElementById('S1').value=parseInt(result);
	document.getElementById('c1').value=parseInt(carry);
	document.getElementById('s1').value=parseInt(result);
	
}

function AddThird()
{
	var a1=document.getElementById("a2").value;
	var a2=document.getElementById("b2").value;
	var a3=document.getElementById("c1").value;
	var A1=parseInt(a1,10);
	var A2=parseInt(a2,10);
	var A3=parseInt(a3,10);
	if(isNaN(A1)==true)
	{
		A1=parseInt(0);
	}
	if(isNaN(A2)==true)
	{
		A2=parseInt(0);
	}
	if(isNaN(A3)==true)
	{
		A3=parseInt(0);
	}
	document.getElementById('A2').value=parseInt(A1);
	document.getElementById('B2').value=parseInt(A2);
	var result=A1+A2+A3;
	//alert(result);
	var carry=result/10;
	carry=parseInt(carry);
	result=result%10;
	document.getElementById('C2').value=parseInt(carry);
	document.getElementById('S2').value=parseInt(result);
	document.getElementById('c2').value=parseInt(carry);
	document.getElementById('s2').value=parseInt(result);
	
}


function GetExample()
{
	circle.visible=false;
	string1.visible=false;
	e=1;
	updateExperimentElements();
	count=0;
	arrowFirst.visible=false;
	arrowSecond.visible=false;
	var x=document.getElementById("c");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	document.getElementById('c0').value=' ';
	document.getElementById('c1').value=' ';
	document.getElementById('c2').value=' ';
	document.getElementById('s0').value=' ';
	document.getElementById('s1').value=' ';
	document.getElementById('s2').value=' ';
	document.getElementById('C0').value=' ';
	document.getElementById('C0L').value=' ';
	document.getElementById('C1').value=' ';
	document.getElementById('C1L').value=' ';
	document.getElementById('C2').value=' ';
	document.getElementById('S0').value=' ';
	document.getElementById('S1').value=' ';
	document.getElementById('S2').value=' ';
	document.getElementById('A0').value=' ';
	document.getElementById('A1').value=' ';
	document.getElementById('A2').value=' ';
	document.getElementById('B0').value=' ';
	document.getElementById('B1').value=' ';
	document.getElementById('B2').value=' ';
	arrowFirst.visible=false;
	arrowSecond.visible=false;
	document.getElementById('a0').value=getRandom();
	document.getElementById('a1').value=getRandom();
	document.getElementById('a2').value=getRandom();
	document.getElementById('b0').value=getRandom();
	document.getElementById('b1').value=getRandom();
	document.getElementById('b2').value=getRandom();
}



function CheckAnswer()
{
	//e=1;
	//updateExperimentElements();
	circle.visible=false;
		string1.visible=false;
		var x=document.getElementById("c");
		if(x!=null)
		{
			x.parentNode.removeChild(x);
		}
	var s0=parseInt(document.getElementById("s0").value,10);
	if(isNaN(s0)==true)
	{
		s0=0;
	}
	var s1=parseInt(document.getElementById("s1").value,10);
	if(isNaN(s1)==true)
	{
		s1=0;
	}
	var s2=parseInt(document.getElementById("s2").value,10);
	if(isNaN(s2)==true)
	{
		s2=0;
	}
	var c2=parseInt(document.getElementById("c2").value,10);
	if(isNaN(c2)==true)
	{
		c2=0;
	}
	var a0=parseInt(document.getElementById("a0").value,10);
	if(isNaN(a0)==true)
	{
		a0=0;
	}
	var a1=parseInt(document.getElementById("a1").value);
	if(isNaN(a1)==true)
	{
		a1=0;
	}
	var a2=parseInt(document.getElementById("a2").value,10);
	if(isNaN(a2)==true)
	{
		a2=0;
	}
	var b0=parseInt(document.getElementById("b0").value,10);
	if(isNaN(b0)==true)
	{
		b0=0;
	}
	var b1=parseInt(document.getElementById("b1").value,10);
	if(isNaN(b1)==true)
	{
		b1=0;
	}
	var b2=parseInt(document.getElementById("b2").value,10);
	if(isNaN(b2)==true)
	{
		b2=0;
	}
	var sum;
	var result;
	sum=a2*100+a1*10+a0+b2*100+b1*10+b0
	result=c2*1000+s2*100+s1*10+s0;
	if(sum==result)
	{
		check=1;
		updateExperimentElements();
		c=document.createElement('div');
		c.setAttribute("id","c");
		c.innerHTML="Correct!<br/><br/>Well done";
		c.style.fontSize="1.5em";
		c.style.position="absolute";
		c.style.left="40%";
		c.style.top="20%";
		document.body.appendChild(c);
		
	}
	else
	{
		check=2;
		updateExperimentElements();
		c=document.createElement('div');
		c.setAttribute("id","c");
		c.innerHTML="Wrong!<br/><br/>Try Again!";
		c.style.fontSize="1.5em";
		c.style.position="absolute";
		c.style.left="40%";
		c.style.top="20%";
		document.body.appendChild(c);
		
	}
	
}


var infoContent;
function initialiseInfo()
{
	infoContent = "";
	infoContent = infoContent + "<h2>Addition of three digit numbers:</h2>";
	infoContent = infoContent + "<p>Addition(denoted by +) is one out of the four basic operations.It is the process of bringing two or more quantities together and making a new one.</p>";
	infoContent = infoContent + "<p>Any of the numbers that are added together are called Addends.Example in 2+3=5,2 and 3 are addends.</p>";
	infoContent = infoContent + "<p>While adding two three digit numbers,place one number above the other so that the units,tens and hundreds places are lined up.</p>";
	infoContent = infoContent + "<p>Add the one's place digits,if this number is larger than 10 place a 1 above the ten's place column,this is called the carry. Place the units place of the result below the ones column.</p>";
	infoContent = infoContent + "<p>Similarly add the ten's place digits and carry if it exists,If number is greater than 10, place the carry above the hundred's place column.</p>";
	infoContent = infoContent + "<p>Then add the hundred's place digits along with the carry if it exists,write the result below the column.This gives the result of addition of two three digit numbers.</p>";
	infoContent = infoContent + "<p>The same concept can be extended for 5,5 or n digit numbers.</p>";
	infoContent = infoContent + "<h3>Properties of addition</h3>";
	infoContent = infoContent + "<p>There are four mathematical properties which involve addition. The properties are the commutative, associative, additive identity and distributive properties.</p>";
	infoContent = infoContent + "<h3>Commutative Property:</h3>";
	infoContent = infoContent + "<p>When two numbers are added, the sum is the same regardless of the order of the addends. For example 4 + 2 = 2 + 4</p>";
	infoContent = infoContent + "<h3>Associative Property:</h3>";
	infoContent = infoContent + "<p>When three or more numbers are added, the sum is the same regardless of the grouping of the addends. For example (2 + 3) + 4 = 2 + (3 + 4)<p>";
	infoContent = infoContent + "<h3>Additive Identity Property:</h3>";
	infoContent = infoContent + "<p> The sum of any number and zero is the original number. For example 5 + 0 = 5.</p>";
	infoContent = infoContent + "<h3>Distributive property:</h3>";
	infoContent = infoContent + "<p>The sum of two numbers times a third number is equal to the sum of each addend times the third number. For example 4 * (6 + 3) = 4*6 + 4*3</p>";
	PIEupdateInfo(infoContent);

}

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Addition of two three digit numbers:</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows a set of text boxes on the screen. The text boxes to the left are where the numbers to be added are written whereas the textboxes to the right show the steps of addition.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls .There are two buttons given: 'NEW EXAMPLE' and 'CHECK ANSWER'.There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see the empty text boxes. You can either enter two three digit numbers to be added or press the 'NEW EXAMPLE' button to take random examples for practice.</p>";
	helpContent = helpContent + "<p>You can enter the answer by yourself or can see the steps for addition by pressing the start button.</p>";
	helpContent = helpContent + "<p>If you enter the answer by yourself,check your answer by pressing the 'CHECK ANSWER' button.A message will pop up informing you whether your answer is correct or not.</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>The animation stage starts once you press the start button.It shows the steps of adding two three dogot numbers.Addition of one's,ten's and hundred's place digits along with the use of carry is shown seperately to the right of the screen.</p>";
    helpContent = helpContent + "<p>The activity stepwise shows what the result of adding two three digit numbers will be.Practice multiple times to improve yourselves.</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animaion by uing the speed control buttons</p>";
    helpContent = helpContent + "<h2>All the Best!</h2>";
    PIEupdateHelp(helpContent);
}	

function loadExperimentElements()
{
	var geometry;
	var material;
	PIEsetExperimentTitle("Addition of three digit numbers");
    PIEsetDeveloperName("Amruta Deshpande");
	PIEhideControlElement();
	
	initialiseHelp();
	initialiseInfo();
	flag=0;
	count=0;
	
	geometry = new THREE.BoxGeometry( 4* 4, 3* 3, 0.2);
    material = new THREE.MeshBasicMaterial( {color: 0xfdf6d5} );
    var myBack = new THREE.Mesh( geometry, material );
    myBack.position.set(2,2, -5 - (0.2/ 2));
    myBack.receiveShadow = true;
	myBack.renderOrder=0.1;
    PIEaddElement(myBack);
	
	var from1 = new THREE.Vector3( 3.2, 1.4, 2 );
	var to1 = new THREE.Vector3( 2.98, 1.9, 2 );
	var direction1 = to1.clone().sub(from1);
	var length1 = direction1.length();
	arrowFirst = new THREE.ArrowHelper(direction1.normalize(), from1, length1, 0x000000 );
	//arrowFirst.renderOrder=0.2;
	arrowFirst.visible=false;
	PIEaddElement(arrowFirst);
	
	from = new THREE.Vector3( 2.6, 1.4, 2 );
	to = new THREE.Vector3( 2.38, 1.9, 2 );
	direction = to.clone().sub(from);
	length = direction.length();
	arrowSecond = new THREE.ArrowHelper(direction.normalize(), from, length, 0x000000 );
	//arrowSecond.renderOrder=0.2;
	arrowSecond.visible=false;
	PIEaddElement(arrowSecond);
	
	var geometry = new THREE.CircleGeometry( 0.4, 32 );
	var material = new THREE.MeshBasicMaterial( { color: 0x33cc33 } );
	circle = new THREE.Mesh( geometry, material );
	circle.position.set(1.6,2.2,0);
	circle.renderOrder=0.2;
	circle.visible=false;
	PIEaddElement(circle);
	
	var mat = new THREE.MeshBasicMaterial( { color: 0xff3300 } );
	circle2 = new THREE.Mesh( geometry, mat );
	circle2.position.set(1.6,2.2,0);
	circle2.renderOrder=0.2;
	circle2.visible=false;
	PIEaddElement(circle2);
	
	var curve = new THREE.CubicBezierCurve3(
	new THREE.Vector3( 1.6, 1.8, 0 ),
	new THREE.Vector3( 1.6, 1, 0 ),
	new THREE.Vector3( 1.2, 1.3, 0 ),
	new THREE.Vector3( 2, 1, 0 )
);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

	var material = new THREE.LineBasicMaterial( { color : 0x000000 } );

// Create the final object to add to the scene
	string1 = new THREE.Line( geometry, material );
	string1.renderOrder=0.3;
	string1.visible=false;
	PIEaddElement(string1);
	
	flagFirst=0;
	flagSecond=0;
	
	//CreateButton();
	PIEaddDualCommand("Example",GetExample);
	PIEaddDualCommand("Check Answer",CheckAnswer);
	
	CreateTextBox();
	CreateRightText();
	CreateSymbol();
	
	PIEresize();
	resetExperiment();
	PIEsetAreaOfInterest(0,3,4,0);

}

function resetExperiment()
{
	GetExample();
	count=0;
	check=-1;
	arrowFirst.visible=false;
	arrowSecond.visible=false;
	var x=document.getElementById("c");
	if(x!=null)
	{
		x.parentNode.removeChild(x);
	}
	document.getElementById('c0').value=' ';
	document.getElementById('c1').value=' ';
	document.getElementById('c2').value=' ';
	document.getElementById('s0').value=' ';
	document.getElementById('s1').value=' ';
	document.getElementById('s2').value=' ';
	document.getElementById('C0').value=' ';
	document.getElementById('C0L').value=' ';
	document.getElementById('C1').value=' ';
	document.getElementById('C1L').value=' ';
	document.getElementById('C2').value=' ';
	document.getElementById('S0').value=' ';
	document.getElementById('S1').value=' ';
	document.getElementById('S2').value=' ';
	document.getElementById('A0').value=' ';
	document.getElementById('A1').value=' ';
	document.getElementById('A2').value=' ';
	document.getElementById('B0').value=' ';
	document.getElementById('B1').value=' ';
	document.getElementById('B2').value=' ';
	//GetExample();
	e=0;
}

function updateExperimentElements(t,dt)
{
	
	var correct=document.getElementById("img1");
	if(correct!=null)
	{
		correct.parentNode.removeChild(correct);
	}
	var wrong=document.getElementById("img2");
	if(wrong!=null)
	{
		wrong.parentNode.removeChild(wrong);
	}
	flag=1;
	if(e==1)
	{
		circle.visible=false;
		//string1.visible=false;
		arrowFirst.visible=false;
		arrowSecond.visible=false;
		e=0;
	}
	if(check==-1)
	{
		circle.visible=false;
		circle2.visible=false;
		string1.visible=false;
		var x=document.getElementById("c");
		if(x!=null)
		{
			x.parentNode.removeChild(x);
		}
		count++;
	if(count==50)
	{
		AddFirst();
		arrowFirst.visible=true;
	}
	if(count==150)
	{
		AddSecond();
		arrowSecond.visible=true;
	}
	if(count==250)
	{
		AddThird();
	}
	}
	else if(check==1)
	{
		circle2.visible=false;
		circle.visible=true;
		string1.visible=true;
		check=-1;
	}
	else if(check==2)
	{
		circle.visible=false;
		circle2.visible=true;
		string1.visible=true;
		check=-1;
	}
	
	
	PIEresize();
}