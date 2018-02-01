//MY_PROJECT
//A MAGNETIC-EFFECT-TESTER
/*    
        Developer : SIDDHARTH - ACHARYA
        COLLEGE : IIIT - Allahabad
*/
var mySceneTLX;        
var mySceneTLY;        
var mySceneBRX;        
var mySceneBRY;        
var mySceneW;          
var mySceneH;          
var myCenterX;         
var myCenterY;         

var wallThickness;
var myBack;             


var line;
var line1;
var line1a;
var line2;
var line3;
var line4;
var line5;
var line6;

var dir;
var aro;
var aro1;

var sl;

var open;

var f;
var c;
var u;

var dirR;
var aroR;
var aroR1;
var f1;
var c1;
var u1;

var voltage;
var voltageV = 8;
var voltage2;
var voltageV2 = 8;

var GS;
var GSF;

var BatteryValue;

var totalVoltage;
var totalCurrent;
var totalCurrentL;
var totalVoltageL;
var deflectionL;
var deflection;
var totalRes;
var totalResL;

var Qq;
var button1;
var inputF;
var inputF1;
var inputF2;
var inputF3;
var A1;
var A2;
var A3;
var A4;
var CA;
var WA;
var NextQuestionButton;
var ExperimentButton;
var needle;
var needle1;

var line3a;
var battery;
var battery1;
var batteryT;
var battery2;
var battery2b;
var battery2T;
var batteryR;
var battery1R;
var batteryTR;
var battery2R;
var battery2bR;
var battery2TR;
var Bbut;
var BbutR;
var Bbut2;
var BbutR2;

var resistor;
var res;
var L;
var L1;
var L2;
var L3;
var L4;
var switchB;
var D1;
var D2;
var Magnet;
var compass;
var innerCircle;
var wire;
var wire1;
var wire2;
var wire3;
var REStext;
var REStext1;
var REStext2;
var REStext1a;
var REStext2a;

var REStext12;
var REStext22;
var REStext1a2;
var REStext2a2;
var Bulb;
var BulbH;
var BulbB;

var Glo = 0;

var temp = 0;
var flag = 0;
var type = 0;
var counter = 0;

var SwitchText;
var SwitchText1;
var randomCounter;
var BatteryDirection;
var BatteryPolarity;

var myflag = 0;
var myflag2 = 0;
var StartQuizL;
var StartExpL;
var onGoing = 0;
var ButL;
var ButL2;
function handleV(newValue) {
    voltageV = newValue;
}
function handleV2(newValue) {
    voltageV2 = newValue;
}
function initialiseControlVariables()
{
    voltage = "Cell_1Voltage(V)"; //2
    voltageV = 8;
    Vstep = 1;

    voltage2 = "Cell_2-Voltage(V)"; //2
    voltageV2 = 8;

    totalVoltageL = "Total_Voltage(V)";
    totalVoltage = voltageV + voltageV2;

    totalCurrentL = "Circuit_Current(A)"
    totalCurrent = 0.25;

    deflectionL = "Deflection(rad)";
    deflection = 0.25;

    totalResL = "Circuit_Res(Ohm)";
    totalRes = 4;

    BatteryDirection = "BatteryDirection";    //Downside
    BatteryPolarity = "Upside";

    StartQuizL = "START-QUIZ"
    StartExpL = "EXPERIMENT";
    onGoing = 0;

    ButL = "ReverseBattery1";
    ButL2 = "ReverseBattery2";
}
function initialiseControls()
{
    initialiseControlVariables();
    PIEaddInputSlider(voltage, voltageV, handleV, 0.0, 8.0, Vstep);
    PIEaddInputSlider(voltage2, voltageV2, handleV2, 0.0, 8.0, Vstep);
    PIEaddInputCommand(StartQuizL, TesterQuiz);
    PIEaddInputCommand(ButL, Brev);
    PIEaddInputCommand(ButL2, Brev2);
                                        
    PIEaddDisplayText(totalVoltageL, totalVoltage);
    PIEaddDisplayText(totalCurrentL, totalCurrent);
    PIEaddDisplayText(deflectionL, deflection);
    PIEaddDisplayText(totalResL, totalRes);
}

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>A Magnetic effect tester experiment help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows a electric circuit which demonstrates Magnetic effect as testers , magnetic compass needle shows deflection on it based upon the current strength and its direction .</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to two sliders from it.</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Cell1_Voltage(V)&nbsp;&nbsp;:&nbsp;Controls voltage of upper battery(Cell1) .</li>";
    helpContent = helpContent + "<li>Cell2_Voltage(V)&nbsp;&nbsp;:&nbsp;Controls voltage of lower battery(Cell2) .</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the circuit is now complete and therefore when you switch it ON the magnetic compass needle will show deflection based upon the strength and direction of current.</p>";
    helpContent = helpContent + "<p>The right hand panel now shows the values of combined effective voltage produced by the 2 Cells in the circuit , total current in the circuit , deflection produced in the magnetic compass and circuit resistance .</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>A Magnetic effect tester experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows a circuit which uses Magnetic effect as a tester , the deflection in the magnetic compass changes with direction and strength of current .</p>";
    infoContent = infoContent + "<h3>Magnetic effect as testers.</h3>";
    infoContent = infoContent + "<p>When the circuit is turned ON as there is current in the circuit therefore compass will show deflection in it which shows that the current is flowing in the circuit.</p>";
    infoContent = infoContent + "<h3>Higher current produces higher deflection in the circuit.</h3>";
    infoContent = infoContent + "<p> Deflection of the magnetic compass will be higher when there is higher value of current in the circuit.</p>";
    infoContent = infoContent + "<h3>Direction of needle changes with changing the direction of current.</h3>";
    infoContent = infoContent + "<p>As soon as the direction of current is reversed in the circuit , the direction of magnetic needle also changes.</p>";
    infoContent = infoContent + "<p>which shows that needle deflects in the direction of current and its deflection increases with increase in current of the circuit.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene()
{
    mySceneTLX = 0.0;
    mySceneTLY = 3.0;
    mySceneBRX = 4.0;
    mySceneBRY = 0.0;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
}
function initialiseOtherVariables()
{
    wallThickness = 0.20;
}

function StartEX() {
    Glo = 0;
    onGoing = 0;
    PIEchangeInputCommand(StartExpL, StartQuizL, TesterQuiz);
    var r = myRand();
    if (r == 1)
        Q1();
    else if (r == 2)
        Q2();
    else if (r == 3)
        Q3();
    else if (r == 4)
        Q4();
    else if (r == 5)
        Q5();
    else if (r == 6)
        Q6();
    else if (r == 7)
        Q7();

    Qq.style.visibility = "hidden";

    inputF.style.visibility = "hidden";
    inputF1.style.visibility = "hidden";
    inputF2.style.visibility = "hidden";
    inputF3.style.visibility = "hidden";

    A1.style.visibility = "hidden";
    A2.style.visibility = "hidden";
    A3.style.visibility = "hidden";
    A4.style.visibility = "hidden";

    NextQuestionButton.style.visibility = "hidden";
    ExperimentButton.style.visibility = "hidden";
    //button1.style.visibility = "visible";

    CA.style.visibility = "hidden";
    WA.style.visibility = "hidden";

    line3a.scale.set(1, 1, 1);
    battery.scale.set(1, 1, 1);
    battery1.scale.set(1, 1, 1);
    batteryT.scale.set(1, 1, 1);
    battery2.scale.set(1, 1, 1);
    battery2b.scale.set(1, 1, 1);
    battery2T.scale.set(1, 1, 1);
    resistor.scale.set(1, 1, 1);
    res.scale.set(1, 1, 1);
    L.scale.set(1, 1, 1);
    L1.scale.set(1, 1, 1);
    L2.scale.set(1, 1, 1);
    L3.scale.set(1, 1, 1);
    L4.scale.set(1, 1, 1);
    //switchB.scale.set(1, 1, 1);
    //D1.scale.set(1, 1, 1);
    //D2.scale.set(1, 1, 1);
    Magnet.scale.set(1, 1, 1);
    compass.scale.set(1, 1, 1);
    innerCircle.scale.set(1, 1, 1);
    wire.scale.set(1, 1, 1);
    wire1.scale.set(1, 1, 1);
    wire2.scale.set(1, 1, 1);
    wire3.scale.set(1, 1, 1);
    REStext.style.visibility = "visible";
    REStext1.style.visibility = "visible";
    REStext2.style.visibility = "visible";
    REStext1a.style.visibility = "visible";
    REStext2a.style.visibility = "visible";
    Bulb.scale.set(1, 1, 1);
    BulbH.scale.set(1, 1, 1);
    BulbB.scale.set(1, 1, 1);
    needle.scale.set(1, 1, 1);
    needle1.scale.set(1, 1, 1);
    line.scale.set(1, 1, 1);
    line1.scale.set(1, 1, 1);
    line2.scale.set(1, 1, 1);
    line1a.scale.set(1, 1, 1);
    //sl.scale.set(1, 1, 1);
    SwitchText.style.visibility = "visible";
    SwitchText1.style.visibility = "hidden";
    aro.scale.set(0, 0, 0);
    dir.scale.set(0, 0, 0);
    aro1.scale.set(0, 0, 0);
    aroR1.scale.set(0, 0, 0);
    aroR.scale.set(0, 0, 0);
    dirR.scale.set(0, 0, 0);

    Bbut.style.visibility = "visible";
    BbutR.style.visibility = "hidden";
    Bbut2.style.visibility = "visible";
    BbutR2.style.visibility = "hidden";
    PIErender();
}
function TesterQuiz() {
    PIEresetExperiment();
    Glo = 1;
    PIEchangeInputCommand(StartQuizL, StartExpL, StartEX);
    onGoing = 1;
    Qq.style.visibility = "visible";

    inputF.style.visibility = "visible";
    inputF1.style.visibility = "visible";
    inputF2.style.visibility = "visible";
    inputF3.style.visibility = "visible";

    A1.style.visibility = "visible";
    A2.style.visibility = "visible";
    A3.style.visibility = "visible";
    A4.style.visibility = "visible";

    NextQuestionButton.style.visibility = "visible";
    ExperimentButton.style.visibility = "visible";
    //button1.style.visibility = "hidden";

    line3a.scale.set(0, 0, 0);
    battery.scale.set(0, 0, 0);
    battery1.scale.set(0, 0, 0);
    batteryT.scale.set(0, 0, 0);
    battery2.scale.set(0, 0, 0);
    battery2b.scale.set(0, 0, 0);
    battery2T.scale.set(0, 0, 0);
    resistor.scale.set(0, 0, 0);
    res.scale.set(0, 0, 0);
    L.scale.set(0, 0, 0);
    L1.scale.set(0, 0, 0);
    L2.scale.set(0, 0, 0);
    L3.scale.set(0, 0, 0);
    L4.scale.set(0, 0, 0);
    //switchB.scale.set(0, 0, 0);
    //D1.scale.set(0, 0, 0);
    //D2.scale.set(0, 0, 0);
    Magnet.scale.set(0, 0, 0);
    compass.scale.set(0, 0, 0);
    innerCircle.scale.set(0, 0, 0);
    wire.scale.set(0, 0, 0);
    wire1.scale.set(0, 0, 0);
    wire2.scale.set(0, 0, 0);
    wire3.scale.set(0, 0, 0);
    REStext.style.visibility = "hidden";
    REStext1.style.visibility = "hidden";
    REStext2.style.visibility = "hidden";
    REStext1a.style.visibility = "hidden";
    REStext2a.style.visibility = "hidden";
    Bulb.scale.set(0, 0, 0);
    BulbH.scale.set(0, 0, 0);
    BulbB.scale.set(0, 0, 0);
    needle.scale.set(0, 0, 0);
    needle1.scale.set(0, 0, 0);
    line.scale.set(0, 0, 0);
    line1.scale.set(0, 0, 0);
    line2.scale.set(0, 0, 0);
    line1a.scale.set(0, 0, 0);
    //sl.scale.set(0, 0, 0);
    SwitchText.style.visibility = "hidden";
    SwitchText1.style.visibility = "hidden";
    aro.scale.set(0, 0, 0);
    dir.scale.set(0, 0, 0);
    aro1.scale.set(0, 0, 0);
    aroR1.scale.set(0, 0, 0);
    aroR.scale.set(0, 0, 0);
    dirR.scale.set(0, 0, 0);

    Bbut.style.visibility = "hidden";
    BbutR.style.visibility = "hidden";
    Bbut2.style.visibility = "hidden";
    BbutR2.style.visibility = "hidden";
    PIErender();
}
function Q7() {
    Qq.innerHTML = "<h3><b>Can two different current values , produce same deflection in the circuit ?</b></h3>";
    A1.innerHTML = "<h3><b>Always</b></h3>";
    A2.innerHTML = "<h3><b>Depends on Environment</b></h3>";
    A3.innerHTML = "<h3><b>Never.</b></h3>";
    A4.innerHTML = "<h3><b>None of these</b></h3>";

    CA.style.visibility = "hidden";
    WA.style.visibility = "hidden";

    inputF.checked = false;
    inputF1.checked = false;
    inputF2.checked = false;
    inputF3.checked = false;

    inputF.removeEventListener("click", wrongA);
    inputF1.removeEventListener("click", correctA);
    inputF2.removeEventListener("click", wrongA);
    inputF3.removeEventListener("click", wrongA);
    NextQuestionButton.removeEventListener("click", Q7);

    inputF.addEventListener("click", wrongA);
    inputF1.addEventListener("click", wrongA);
    inputF2.addEventListener("click", correctA);
    inputF3.addEventListener("click", wrongA);
    NextQuestionButton.addEventListener("click", Q1);
}
function Q6() {
    Qq.innerHTML = "<h3><b>For same value of current but in opposite direction deflection in the needle will be - </b></h3>";
    A1.innerHTML = "<h3><b>same and in same direction</b></h3>";
    A2.innerHTML = "<h3><b>same but in opposite direction</b></h3>";
    A3.innerHTML = "<h3><b>different but in same direction</b></h3>";
    A4.innerHTML = "<h3><b>different and in opposite direction</b></h3>";

    CA.style.visibility = "hidden";
    WA.style.visibility = "hidden";

    inputF.checked = false;
    inputF1.checked = false;
    inputF2.checked = false;
    inputF3.checked = false;

    inputF.removeEventListener("click", correctA);
    inputF1.removeEventListener("click", wrongA);
    inputF2.removeEventListener("click", wrongA);
    inputF3.removeEventListener("click", wrongA);
    NextQuestionButton.removeEventListener("click", Q6);

    inputF.addEventListener("click", wrongA);
    inputF1.addEventListener("click", correctA);
    inputF2.addEventListener("click", wrongA);
    inputF3.addEventListener("click", wrongA);
    NextQuestionButton.addEventListener("click", Q7);
}
function Q5() {
    Qq.innerHTML = "<h3><b>A current carrying conductor has a - </b></h3>";
    A1.innerHTML = "<h3><b>magnetic field</b></h3>";
    A2.innerHTML = "<h3><b>current capacity</b></h3>";
    A3.innerHTML = "<h3><b>voltage capacity</b></h3>";
    A4.innerHTML = "<h3><b>none of these</b></h3>";

    CA.style.visibility = "hidden";
    WA.style.visibility = "hidden";

    inputF.checked = false;
    inputF1.checked = false;
    inputF2.checked = false;
    inputF3.checked = false;

    inputF.removeEventListener("click", correctA);
    inputF1.removeEventListener("click", wrongA);
    inputF2.removeEventListener("click", wrongA);
    inputF3.removeEventListener("click", wrongA);
    NextQuestionButton.removeEventListener("click", Q5);

    inputF.addEventListener("click", correctA);
    inputF1.addEventListener("click", wrongA);
    inputF2.addEventListener("click", wrongA);
    inputF3.addEventListener("click", wrongA);
    NextQuestionButton.addEventListener("click", Q6);
}
function Q4() {
    Qq.innerHTML = "<h3><b>The magnetic neddle gets deflected in the - </b></h3>";
    A1.innerHTML = "<h3><b>Direction of current flowing</b></h3>";
    A2.innerHTML = "<h3><b>Opposite to the direction of current flowing</b></h3>";
    A3.innerHTML = "<h3><b>Does not deflect in fixed direction</b></h3>";
    A4.innerHTML = "<h3><b>Will not deflect</b></h3>";

    CA.style.visibility = "hidden";
    WA.style.visibility = "hidden";

    inputF.checked = false;
    inputF1.checked = false;
    inputF2.checked = false;
    inputF3.checked = false;

    inputF.removeEventListener("click", wrongA);
    inputF1.removeEventListener("click", wrongA);
    inputF2.removeEventListener("click", wrongA);
    inputF3.removeEventListener("click", correctA);
    NextQuestionButton.removeEventListener("click", Q4);

    inputF.addEventListener("click", correctA);
    inputF1.addEventListener("click", wrongA);
    inputF2.addEventListener("click", wrongA);
    inputF3.addEventListener("click", wrongA);
    NextQuestionButton.addEventListener("click", Q5);
}
function Q3() {
    Qq.innerHTML = "<h3><b>The magnetic neddle gets deflected - </b></h3>";
    A1.innerHTML = "<h3><b>When current increases</b></h3>";
    A2.innerHTML = "<h3><b>When current Decreases</b></h3>";
    A3.innerHTML = "<h3><b>When current keeps varying</b></h3>";
    A4.innerHTML = "<h3><b>All of the above</b></h3>";

    CA.style.visibility = "hidden";
    WA.style.visibility = "hidden";

    inputF.checked = false;
    inputF1.checked = false;
    inputF2.checked = false;
    inputF3.checked = false;

    inputF.removeEventListener("click", correctA);
    inputF1.removeEventListener("click", wrongA);
    inputF2.removeEventListener("click", wrongA);
    inputF3.removeEventListener("click", wrongA);
    NextQuestionButton.removeEventListener("click", Q3);

    inputF.addEventListener("click", wrongA);
    inputF1.addEventListener("click", wrongA);
    inputF2.addEventListener("click", wrongA);
    inputF3.addEventListener("click", correctA);
    NextQuestionButton.addEventListener("click", Q4);
}
function Q2() {
    Qq.innerHTML = "<h3><b>For higher value of current , the deflection of magnetic needle will - </b></h3>";
    A1.innerHTML = "<h3><b>Increase</b></h3>";
    A2.innerHTML = "<h3><b>Decrease</b></h3>";
    A3.innerHTML = "<h3><b>Remain same as earlier</b></h3>";
    A4.innerHTML = "<h3><b>No deflection </b></h3>";

    CA.style.visibility = "hidden";
    WA.style.visibility = "hidden";

    inputF.checked = false;
    inputF1.checked = false;
    inputF2.checked = false;
    inputF3.checked = false;

    inputF.removeEventListener("click", wrongA);
    inputF1.removeEventListener("click", correctA);
    inputF2.removeEventListener("click", wrongA);
    inputF3.removeEventListener("click", wrongA);
    NextQuestionButton.removeEventListener("click", Q2);

    inputF.addEventListener("click", correctA);
    inputF1.addEventListener("click", wrongA);
    inputF2.addEventListener("click", wrongA);
    inputF3.addEventListener("click", wrongA);
    NextQuestionButton.addEventListener("click", Q3);
}
function Q1() {
    Qq.innerHTML = "<h3><b>The effect of electric current is utilized for detecting the flow of current<br> in circuit using magnetic compass -</b></h3>";
    A1.innerHTML = "<h3><b>Electric effect</b></h3>";
    A2.innerHTML = "<h3><b>Magnetic effect</b></h3>";
    A3.innerHTML = "<h3><b>Heating Effect</b></h3>";
    A4.innerHTML = "<h3><b>none of these</b></h3>";

    CA.style.visibility = "hidden";
    WA.style.visibility = "hidden";

    inputF.checked = false;
    inputF1.checked = false;
    inputF2.checked = false;
    inputF3.checked = false;

    inputF.removeEventListener("click", wrongA);
    inputF1.removeEventListener("click", wrongA);
    inputF2.removeEventListener("click", wrongA);
    inputF3.removeEventListener("click", correctA);
    NextQuestionButton.removeEventListener("click", Q1);

    inputF.addEventListener("click", wrongA);
    inputF1.addEventListener("click", correctA);
    inputF2.addEventListener("click", wrongA);
    inputF3.addEventListener("click", wrongA);
    NextQuestionButton.addEventListener("click", Q2);
}
function correctA() {
    CA.style.visibility = "visible";
    WA.style.visibility = "hidden";
}
function wrongA() {
    CA.style.visibility = "hidden";
    WA.style.visibility = "visible";
}
function myRand() {
    var x = Math.floor((Math.random() * 7) + 1);
    return x;
}
function randomQuestions() {
    var func = randomFrom(['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6','Q7']);
    return func;
}
function Bfor() {
    myflag = 0;
    batteryR.scale.set(0, 0, 0);
    battery1R.scale.set(0, 0, 0);
    batteryTR.scale.set(0, 0, 0);
   
    REStext1.style.visibility = "visible";
    REStext2.style.visibility = "visible";

    REStext12.style.visibility = "hidden";
    REStext22.style.visibility = "hidden";

    battery.scale.set(1, 1, 1);
    battery1.scale.set(1, 1, 1);
    batteryT.scale.set(1, 1, 1);

    Bbut.style.visibility = "visible";
    BbutR.style.visibility = "hidden";

    PIEchangeInputCommand(ButL, ButL, Brev);
    PIErender();
}
function Brev() {
    myflag = 1;
    batteryR.scale.set(1, 1, 1);
    battery1R.scale.set(1, 1, 1);
    batteryTR.scale.set(1, 1, 1);
    
    REStext1.style.visibility = "hidden";
    REStext2.style.visibility = "hidden";

    REStext12.style.visibility = "visible";
    REStext22.style.visibility = "visible";

    battery.scale.set(0, 0, 0);
    battery1.scale.set(0, 0, 0);
    batteryT.scale.set(0, 0, 0);
    
    BbutR.style.visibility = "visible";
    Bbut.style.visibility = "hidden";

    PIEchangeInputCommand(ButL,ButL, Bfor);

    PIErender();
}
function Bfor2() {
    myflag2 = 0;
    battery2R.scale.set(0, 0, 0);
    battery2bR.scale.set(0, 0, 0);
    battery2TR.scale.set(0, 0, 0);
    REStext1a.style.visibility = "visible";
    REStext2a.style.visibility = "visible";

    REStext1a2.style.visibility = "hidden";
    REStext2a2.style.visibility = "hidden";
    battery2.scale.set(1, 1, 1);
    battery2b.scale.set(1, 1, 1);
    battery2T.scale.set(1, 1, 1);

    Bbut2.style.visibility = "visible";
    BbutR2.style.visibility = "hidden";

    PIEchangeInputCommand(ButL2, ButL2, Brev2);
    PIErender();
}
function Brev2() {
    myflag2 = 1;
    battery2R.scale.set(1, 1, 1);
    battery2bR.scale.set(1, 1, 1);
    battery2TR.scale.set(1, 1, 1);
    REStext1a.style.visibility = "hidden";
    REStext2a.style.visibility = "hidden";

    REStext1a2.style.visibility = "visible";
    REStext2a2.style.visibility = "visible";
    battery2.scale.set(0, 0, 0);
    battery2b.scale.set(0, 0, 0);
    battery2T.scale.set(0, 0, 0);

    BbutR2.style.visibility = "visible";
    Bbut2.style.visibility = "hidden";

    PIEchangeInputCommand(ButL2, ButL2, Bfor2);
    PIErender();
}
function loadExperimentElements()
{
    var geo;
    var geometry;
    var material;

    var bb7 = "font-family: Monospace; color: #000000; margin: 0px; overflow: hidden; border-radius: 2px;background-color: #ccffe6; ";
    var bb7A = "font-family: Monospace; color: #000000; margin: 0px; overflow: hidden; border-radius: 2px;background-color: #80bfff; ";
    Qq = document.createElement("p"); Qq.style = bb7; document.body.appendChild(Qq);
    Qq.innerHTML = "<h3><b>The effect of electric current is utilized for detecting the flow of current<br> in circuit using magnetic compass -</b></h3>";
    Qq.style.position = "absolute";
    Qq.style.left = 8 + '%';
    Qq.style.top = 10 -2+ '%';
    Qq.style.visibility = "hidden";

    var q = "font-family: Monospace; color: #000000; margin: 0px; overflow: hidden; ";
    //var SQBS = "font-family: Monospace; color: #ffffff; margin: 0px; overflow: hidden; font-size: 20px; padding: 8px 16px; border-radius: 8px;background-color: #555555;";
    //button1 = PIEaddButton("StartQuiz")
    //button1.style = SQBS;
    //button1.style.position = "absolute";
    //button1.style.left = 45 + '%';
    //button1.style.top = 85 + '%';
    //button1.addEventListener("click", TesterQuiz);

    var s = "font-family: Monospace; color: #000000;";
    inputF = document.createElement("INPUT");
    inputF.style = q;
    inputF.style.position = "absolute";
    inputF.style.left = 37 + '%';
    inputF.style.top = 20 +2 + '%';
    inputF.setAttribute("type", "radio");
    inputF.setAttribute("id", "q1");
    inputF.setAttribute("name", "que");
    inputF.setAttribute("value", "Answer");
    inputF.addEventListener("click", wrongA);
    inputF.checked = false;
    document.body.appendChild(inputF);
    inputF.innerHTML = "Answer<br>";
    inputF.style.visibility = "hidden";

    inputF1 = document.createElement("INPUT");
    inputF1.style = q;
    inputF1.style.position = "absolute";
    inputF1.style.left = 37 + '%';
    inputF1.style.top = 26 +4 + '%';
    inputF1.setAttribute("type", "radio");
    inputF1.setAttribute("id", "q2");
    inputF1.setAttribute("name", "que");
    inputF1.setAttribute("value", "Answe1r");
    inputF1.addEventListener("click", correctA);
    inputF1.checked = false;
    document.body.appendChild(inputF1);
    inputF1.innerHTML = "Answer1<br>";
    inputF1.style.visibility = "hidden";
    
    inputF2 = document.createElement("INPUT");
    inputF2.style = q;
    inputF2.style.position = "absolute";
    inputF2.style.left = 37 + '%';
    inputF2.style.top = 32 +6 + '%';
    inputF2.setAttribute("type", "radio");
    inputF2.setAttribute("id", "q3");
    inputF2.setAttribute("name", "que");
    inputF2.setAttribute("value", "Answer");
    inputF2.addEventListener("click", wrongA);
    inputF2.checked = false;
    document.body.appendChild(inputF2);
    inputF2.innerHTML = "Answer2<br>";
    inputF2.style.visibility = "hidden";
    
    inputF3 = document.createElement("INPUT");
    inputF3.style = q;
    inputF3.style.position = "absolute";
    inputF3.style.left = 37 + '%';
    inputF3.style.top = 38 +8 + '%';
    inputF3.setAttribute("type", "radio");
    inputF3.setAttribute("id", "q4");
    inputF3.setAttribute("name", "que");
    inputF3.setAttribute("value", "Answer");
    inputF3.addEventListener("click", wrongA);
    inputF3.checked = false;
    document.body.appendChild(inputF3);
    inputF3.innerHTML = "Answer3<br>";
    inputF3.style.visibility = "hidden";

    A1 = document.createElement("p"); A1.style = bb7A; document.body.appendChild(A1);
    A1.innerHTML = "<h3><b>Electric effect</b></h3>";
    A1.style.position = "absolute";
    A1.style.left = 39 + '%';
    A1.style.top = 17.2 +2 + '%';
    A1.style.visibility = "hidden";

    A2 = document.createElement("p"); A2.style = bb7A; document.body.appendChild(A2);
    A2.innerHTML = "<h3><b>Magnetic effect</b></h3>";
    A2.style.position = "absolute";
    A2.style.left = 39 + '%';
    A2.style.top = 23.2 + 4 + '%';
    A2.style.visibility = "hidden";

    A3 = document.createElement("p"); A3.style = bb7A; document.body.appendChild(A3);
    A3.innerHTML = "<h3><b>Heating Effect</b></h3>";
    A3.style.position = "absolute";
    A3.style.left = 39 + '%';
    A3.style.top = 29.2 + 6 + '%';
    A3.style.visibility = "hidden";

    A4 = document.createElement("p"); A4.style = bb7A; document.body.appendChild(A4);
    A4.innerHTML = "<h3><b>none of these</b></h3>";
    A4.style.position = "absolute";
    A4.style.left = 39 + '%';
    A4.style.top = 35.2 + 8 + '%';
    A4.style.visibility = "hidden";

    var CAS = "font-family: Monospace; color: #ffffff; margin: 0px; overflow: hidden;background-color: #66ff33; border-radius: 12px; padding: 3px 6px";//59EE21
    CA = document.createElement("p"); CA.style = CAS; document.body.appendChild(CA);
    CA.innerHTML = "<h1><b>Correct</b></h1>";
    CA.style.position = "absolute";
    CA.style.left = 37 + '%';
    CA.style.top = 41.2 + 11 + '%';
    CA.style.visibility = "hidden";

    var WAS = "font-family: Monospace; color: #ffffff; margin: 0px; overflow: hidden;background-color: #ff1a1a; border-radius: 12px; padding: 3px 6px";//color :ff0000
    WA = document.createElement("p"); WA.style = WAS; document.body.appendChild(WA);
    WA.innerHTML = "<h1><b>Wrong</b></h1>";
    WA.style.position = "absolute";
    WA.style.left = 37 + '%';
    WA.style.top = 41.2 +11 + '%';
    WA.style.visibility = "hidden";

    var call = "Q" + myRand();
    console.log(call);

    var NQB = "font-family: Monospace; color: #ffffff; margin: 0px; overflow: hidden; font-size: 20px; padding: 8px 22px;border-radius: 8px;background-color: #555555;";
    NextQuestionButton = document.createElement("button");
    NextQuestionButton.setAttribute("id", "nextQuestion");
    NextQuestionButton.style = NQB;
    NextQuestionButton.innerHTML = "Next Question"; document.body.appendChild(NextQuestionButton);
    NextQuestionButton.style.position = "absolute";
    NextQuestionButton.style.left = 45 + '%';
    NextQuestionButton.style.top = 50 +15+ '%';
    NextQuestionButton.addEventListener("click", Q2);
    NextQuestionButton.style.visibility = "hidden";

    var EBS = "font-family: Monospace; color: #ffffff; margin: 0px; overflow: hidden; font-size: 20px; padding: 8px 16px; border-radius: 8px;background-color: #555555;";
    ExperimentButton = document.createElement("button");
    ExperimentButton.setAttribute("id", "StartEX");
    ExperimentButton.style = EBS;
    ExperimentButton.innerHTML = "Experiment"; document.body.appendChild(ExperimentButton);
    ExperimentButton.style.position = "absolute";
    ExperimentButton.style.left = 47 + '%';
    ExperimentButton.style.top = 65 +15 + '%';
    ExperimentButton.addEventListener("click", StartEX);
    ExperimentButton.style.visibility = "hidden";


    PIEsetExperimentTitle("A Magnetic Effect Tester");
    PIEsetDeveloperName("Siddharth Acharya");
    PIEhideControlElement();

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();
    
    initialiseScene();

    initialiseOtherVariables();

    line = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 1.0), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line.position.set(0.5 , 1.5 , 0.0);
    line.castShadow = true;
    PIEaddElement(line);

    line1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.43), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line1.position.set(3.5, 1.22 , 0.0);
    line1.castShadow = true;
    PIEaddElement(line1);

    line1a = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.28), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line1a.position.set(3.5, 1.87, 0.0);
    line1a.castShadow = true;
    PIEaddElement(line1a);

    line2 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 3.0), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line2.position.set(2, 1 , 0.0);
    line2.castShadow = true;
    line2.rotateZ(Math.PI / 2);
    PIEaddElement(line2);

    line3a = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 3), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line3a.position.set(2, 2, 0.0);
    line3a.rotateZ(Math.PI / 2);
    PIEaddElement(line3a);
    line3a.castShadow = false;

    
    geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.10);
    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
    battery = new THREE.Mesh(geometry, material);
    battery.position.set(0.53, 1.82 , 0.1);
    PIEaddElement(battery);
    battery.castShadow = false;

    
    geometry = new THREE.CylinderGeometry(0.10, 0.10, 0.20);
    material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    battery1 = new THREE.Mesh(geometry, material);
    battery1.position.set(0.53, 1.67 , 0.1);
    PIEaddElement(battery1);
    battery1.castShadow = false;

    
    geometry = new THREE.CylinderGeometry(0.04,0.04, 0.05);
    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
    batteryT = new THREE.Mesh(geometry, material);
    batteryT.position.set(0.53, 1.9 , 0.1);
    PIEaddElement(batteryT);
    batteryT.castShadow = false;

    
    geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.10);
    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
    battery2 = new THREE.Mesh(geometry, material);
    battery2.position.set(0.53, 1.33, 0.1);
    PIEaddElement(battery2);
    battery2.castShadow = false;

    
    geometry = new THREE.CylinderGeometry(0.10, 0.10, 0.20);
    material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    battery2b = new THREE.Mesh(geometry, material);
    battery2b.position.set(0.53, 1.18, 0.1);
    PIEaddElement(battery2b);
    battery2b.castShadow = false;

   
    geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.05);
    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
    battery2T = new THREE.Mesh(geometry, material);
    battery2T.position.set(0.53, 1.4, 0.1);
    PIEaddElement(battery2T);
    battery2T.castShadow = false;


    geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.10);
    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
    batteryR = new THREE.Mesh(geometry, material);
    batteryR.position.set(0.53, 1.62, 0.1);
    PIEaddElement(batteryR);
    batteryR.castShadow = false;


    geometry = new THREE.CylinderGeometry(0.10, 0.10, 0.20);
    material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    battery1R = new THREE.Mesh(geometry, material);
    battery1R.position.set(0.53, 1.77, 0.1);
    PIEaddElement(battery1R);
    battery1R.castShadow = false;


    geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.05);
    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
    batteryTR = new THREE.Mesh(geometry, material);
    batteryTR.position.set(0.53, 1.56, 0.1);
    PIEaddElement(batteryTR);
    batteryTR.castShadow = false;


    geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.10);
    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
    battery2R = new THREE.Mesh(geometry, material);
    battery2R.position.set(0.53, 1.13, 0.1);
    PIEaddElement(battery2R);
    battery2R.castShadow = false;


    geometry = new THREE.CylinderGeometry(0.10, 0.10, 0.20);
    material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    battery2bR = new THREE.Mesh(geometry, material);
    battery2bR.position.set(0.53, 1.28, 0.1);
    PIEaddElement(battery2bR);
    battery2bR.castShadow = false;


    geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.05);
    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
    battery2TR = new THREE.Mesh(geometry, material);
    battery2TR.position.set(0.53, 1.06, 0.1);
    PIEaddElement(battery2TR);
    battery2TR.castShadow = false;

    
    geometry = new THREE.BoxGeometry(0.50 , 0.25, 0.25);
    material = new THREE.MeshLambertMaterial({ color: 0xbfbfbf });
    resistor = new THREE.Mesh(geometry, material);
    resistor.position.set(2 - 0.5, 1 , 0.1);
    resistor.rotateX(Math.PI / 30);
    resistor.rotateY(Math.PI / 20);
    PIEaddElement(resistor);
    resistor.castShadow = false;

    
    res = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.3), new THREE.MeshLambertMaterial({ color: 0xDAA520 }));
    res.position.set(2-0.5, 1.18, 0.1);
    res.castShadow = true;
    res.rotateZ(Math.PI / 2);
    res.rotateX(Math.PI / 8);
    res.rotateY(Math.PI / 2);
    PIEaddElement(res);
    
    
    L = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.04), new THREE.MeshLambertMaterial({ color: 0x000033 }));
    L.position.set(2-0.5, 1.18 , 0.12);
    PIEaddElement(L);
    L.castShadow = false;

   
    L1 = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.04), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    L1.position.set(2.08-0.5, 1.18 , 0.12);
    PIEaddElement(L1);
    L1.castShadow = false;

    
    L2 = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.04), new THREE.MeshLambertMaterial({ color: 0x008000 }));
    L2.position.set(1.92-0.5, 1.18 , 0.18);
    PIEaddElement(L2);
    L2.castShadow = false;

    
    L3 = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.08), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    L3.position.set(1.86-0.5, 1.16 , 0.18);
    PIEaddElement(L3);
    L3.castShadow = false;
    
    
    L4 = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.08), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    L4.position.set(2.14-0.5, 1.16 , 0.18);
    PIEaddElement(L4);
    L4.castShadow = false;
    
    geometry = new THREE.BoxGeometry(0.8, 0.4, 0.35);
    material = new THREE.MeshLambertMaterial({ color: 0x6666cc });
    Magnet = new THREE.Mesh(geometry, material);
    Magnet.position.set(2.02, 2, 0.1);
    //Magnet.rotateX(Math.PI / 6);
    //switchB.rotateY(-Math.PI / 20);
    PIEaddElement(Magnet);
    //Magnet.castShadow = false;

    
    geometry = new THREE.CircleGeometry(0.19, 32);
    compass = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0xa6a6a6, opacity: 0.5 }));
    compass.position.set(2, 2, 0.35);
    PIEaddElement(compass);
    compass.castShadow = false;
    compass.receiveShadow = false;

    
    geometry = new THREE.CircleGeometry(0.022, 32);
    innerCircle = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0x000000, opacity: 0.5 }));
    innerCircle.position.set(2, 2, 0.35);
    PIEaddElement(innerCircle);
    innerCircle.castShadow = false;
    innerCircle.receiveShadow = false;

    geometry = new THREE.ConeGeometry(0.02,0.15 , 32);
    needle = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0x000000, opacity: 0.5 }));
    needle.position.set(2, 2.06, 0.40);
    PIEaddElement(needle);
    needle.castShadow = false;
    needle.receiveShadow = false;
    //needle.rotateZ(Math.PI / 18 * 5);
    //needle.position.set(2 - 0.013*5, 2.06 - 0.002*5, 0.2);
    
    geometry = new THREE.ConeGeometry(0.02, 0.15, 32);
    needle1 = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0x000000, opacity: 0.5 }));
    needle1.position.set(2, 1.91, 0.40);
    PIEaddElement(needle1);
    needle1.castShadow = false;
    needle1.receiveShadow = false;
    needle1.rotateZ(Math.PI);
    //needle1.rotateZ(Math.PI / 18 * 5);
    //needle1.position.set(2 + 0.014*5, 1.92 + 0.002*5, 0.2);

    /*
    wire = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.010, 0.47), new THREE.MeshLambertMaterial({ color: 0xff0000, opacity: 0.5 }));
    wire.position.set(2, 1.99, 0.22);
    wire.rotateZ(-Math.PI / 6);
    PIEaddElement(wire);
    wire.castShadow = false;
    */
    var geometry = new THREE.RingGeometry(0.22, 0.25, 32);//3
    var material = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide });
    wire = new THREE.Mesh(geometry, material);
    wire.position.set(2 + 0.125, 1.99, 0.30);
    wire.rotateY(Math.PI / 3);
    wire.rotateX(Math.PI / 10);
    PIEaddElement(wire);
    wire.castShadow = false;

    wire2 = new THREE.Mesh(new THREE.RingGeometry(0.22, 0.25, 32), new THREE.MeshLambertMaterial({ color: 0xff0000, opacity: 0.5 }));
    wire2.position.set(2 , 1.99, 0.30);//2
    wire2.rotateY(Math.PI / 3);
    wire2.rotateX(Math.PI / 10);
    PIEaddElement(wire2);
    wire2.castShadow = false;
    
    wire1 = new THREE.Mesh( new THREE.RingGeometry(0.22, 0.25, 32), new THREE.MeshLambertMaterial({ color: 0xff0000, opacity: 0.5 }));
    wire1.position.set(2 - 0.125, 1.99, 0.30);//1
    wire1.rotateY(Math.PI / 3);
    wire1.rotateX(Math.PI / 10);
    PIEaddElement(wire1);
    wire1.castShadow = false;

    wire3 = new THREE.Mesh(new THREE.RingGeometry(0.22, 0.25, 32), new THREE.MeshLambertMaterial({ color: 0xff0000, opacity: 0.5 }));
    wire3.position.set(2 + 0.25, 1.99, 0.30);//1
    wire3.rotateY(Math.PI / 3);
    wire3.rotateX(Math.PI / 10);
    PIEaddElement(wire3);
    wire3.castShadow = false;

    /*
    wire1 = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.010, 0.47), new THREE.MeshLambertMaterial({ color: 0xff0000, opacity: 0.5 }));
    wire1.position.set(2 - 0.25, 1.99, 0.22);
    wire1.rotateZ(-Math.PI / 6);
    PIEaddElement(wire1);
    wire1.castShadow = false;

    
    wire2 = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.010, 0.47), new THREE.MeshLambertMaterial({ color: 0xff0000, opacity: 0.5 }));
    wire2.position.set(2 + 0.25, 1.99, 0.22);
    wire2.rotateZ(-Math.PI / 6);
    PIEaddElement(wire2);
    wire2.castShadow = false;
    */

    //var spinner_obj = new THREE.Object3D();
    //THREE.EventDispatcher.call(switchB);
    //switchB.addEventListener( 'mousemove', function (event) { PIEstartAnimation(); } );
    //switchB.addEventListener('click', PIEstartAnimation);
    //switchB.dispatchEvent({ type: 'click' });
   // switchB.callback = function () { PIEstartAnimation(); }
    //var raycaster = new THREE.Raycaster();
    //var mouse = new THREE.Vector2();
    //PIErenderer.domElement.addEventListener("mousedown", onDocumentMouseDown, false); PIErenderer.domElement.addEventListener("mouseup", onDocumentMouseDown, false);
    //PIErender();
    //PIE.addEventListener('mousemove', onDocumentMouseDown, false);

    var bb = "font-family: Monospace ; color: #ffffff; margin: 0px; overflow: hidden;";
    var bb1 = "font-family: Monospace; color: #000000; margin: 0px; overflow: hidden; ";
    var bb2 = "font-family: Monospace; color: #000000; margin: 0px; overflow: hidden;";
    var bb3 = "font-family: Monospace; color: #000000; margin: 0px; overflow: hidden; font-size: 30px;";
    var bb4 = "font-family: Monospace; color: #00e600; margin: 0px; overflow: hidden; ; background-color: #00e600 ;border-style: inset;";
    var bb5 = "font-family: Monospace; color: #ff0000; margin: 0px; overflow: hidden; ; background-color: #ff0000 ;border-style: inset;";
    
    REStext = document.createElement("p"); REStext.style = bb1; document.body.appendChild(REStext);
    REStext.innerHTML = "<h4>Resistance</h4>";
    REStext.style.position = "absolute";
    REStext.style.left =  47.5 - 8.5 + '%';
    REStext.style.top =  63  + '%';
    
    REStext1 = document.createElement("span"); REStext1.style = bb; document.body.appendChild(REStext1);
    REStext1.innerHTML = "<h2>+</h2>";
    REStext1.style.position = "absolute";
    REStext1.style.left = 25.5 - 1.5 + '%';
    REStext1.style.top = 39.5 - 4.5  + '%';
    
    REStext2 = document.createElement("span"); REStext2.style = bb2; document.body.appendChild(REStext2);
    REStext2.innerHTML = "<h2>-</h2>";
    REStext2.style.position = "absolute";
    REStext2.style.left = 25.5 - 1.5 + '%';
    REStext2.style.top = 46 - 4.5 + '%';

    REStext1a = document.createElement("span"); REStext1a.style = bb; document.body.appendChild(REStext1a);
    REStext1a.innerHTML = "<h2>+</h2>";
    REStext1a.style.position = "absolute";
    REStext1a.style.left = 25.5 - 1.5 + '%';
    REStext1a.style.top = 56.3 - 4.5 + '%';

    REStext2a = document.createElement("span"); REStext2a.style = bb2; document.body.appendChild(REStext2a);
    REStext2a.innerHTML = "<h2>-</h2>";
    REStext2a.style.position = "absolute";
    REStext2a.style.left = 25.5 - 1.5 + '%';
    REStext2a.style.top = 63 - 4.5 + '%';

    BatteryValue = document.createElement("span"); BatteryValue.style = bb3; document.body.appendChild(BatteryValue);
    BatteryValue.innerHTML = voltageV + "V";
    BatteryValue.style.position = "absolute";
    BatteryValue.style.left = 19 + '%'
    BatteryValue.style.top = 50  + '%';
    BatteryValue.style.visibility = "hidden";

    geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.06);
    material = new THREE.MeshLambertMaterial({ color: 0x111111 });
    BulbH = new THREE.Mesh(geometry, material);
    BulbH.position.set(2.7, 1, 0.0);
    PIEaddElement(BulbH);
    BulbH.castShadow = false;

    geo = new THREE.Shape();
    geo.moveTo(2.8, 1.03);
    geo.quadraticCurveTo( 2.82,1.1 ,2.82 , 1.1);
    geo.quadraticCurveTo(2.7,1.45,2.58,1.1);
    geo.quadraticCurveTo(2.6,1.03,2.6,1.03);
    geometry = new THREE.ShapeGeometry(geo);
    Bulb = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0xa6a6a6 }));
    PIEaddElement(Bulb);

    geo = new THREE.Shape();
    geo.moveTo(2.72, 0.97);
    geo.quadraticCurveTo(2.7,0.89, 2.68, 0.97);
    geometry = new THREE.ShapeGeometry(geo);
    BulbB = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0x222222 }));
    PIEaddElement(BulbB);
    
    var bb9 = "font-family: Monospace; color: #cc8800; margin: 0px; overflow: hidden;background-color: #cc8800;font-size: 23px;  transform: rotate(-27deg);";
    SwitchText = document.createElement("p"); SwitchText.style = bb9; document.body.appendChild(SwitchText);
    SwitchText.innerHTML = "<h6>S</h6>";
    SwitchText.style.position = "absolute";
    SwitchText.style.left = 75 +1.6 +  '%';
    SwitchText.style.top = 40 + '%';
    SwitchText.addEventListener("click", PIEstartAnimation);

    var bb10 = "font-family: Monospace; color: #cc8800; margin: 0px; overflow: hidden;background-color: #cc8800;font-size: 22px;  transform: rotate(0deg);";
    SwitchText1 = document.createElement("p"); SwitchText1.style = bb10; document.body.appendChild(SwitchText1);
    SwitchText1.innerHTML = "<h6>S</h6>";
    SwitchText1.style.position = "absolute";
    SwitchText1.style.left = 73.7 +1.6 + '%';
    SwitchText1.style.top = 40 + '%';
    SwitchText1.addEventListener("click", PIEresetExperiment);


    dir = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.2), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    dir.position.set(0.6, 2 , 0.0);
    dir.rotateZ(Math.PI / 2);
    PIEaddElement(dir);
    dir.castShadow = false;

    aro = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.05), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    aro.position.set(0.7, 2.01 , 0.0);
    aro.rotateZ(Math.PI / 4);
    PIEaddElement(aro);
    aro.castShadow = false;

    aro1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.05), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    aro1.position.set(0.7, 1.99 , 0.0);
    aro1.rotateZ(-Math.PI / 4);
    PIEaddElement(aro1);
    aro1.castShadow = false;

    f = 0;
    c = 0;
    u = 0;


    dirR = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.2), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    dirR.position.set(0.6, 1, 0.0);
    dirR.rotateZ(Math.PI / 2);
    PIEaddElement(dirR);
    dirR.castShadow = false;

    aroR = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.05), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    aroR.position.set(0.7, 1.01, 0.0);
    aroR.rotateZ(Math.PI / 4);
    PIEaddElement(aroR);
    aroR.castShadow = false;

    aroR1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.05), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    aroR1.position.set(0.7, 0.99, 0.0);
    aroR1.rotateZ(-Math.PI / 4);
    PIEaddElement(aroR1);
    aroR1.castShadow = false;

    f1 = 0;
    c1 = 0;
    u1 = 0;

    bb = "font-family: Monospace ; color: #000000; margin: 0px; overflow: hidden;";
    bb2 = "font-family: Monospace; color: #ffffff; margin: 0px; overflow: hidden;";

    REStext12 = document.createElement("span"); REStext12.style = bb; document.body.appendChild(REStext12);
    REStext12.innerHTML = "<h2>-</h2>";
    REStext12.style.position = "absolute";
    REStext12.style.left = 25.5 - 1.5 + '%';
    REStext12.style.top = 39.5 - 4.5 + '%';
    //REStext12.style.color = 0xffffff;
    REStext12.style.visibility = "hidden";

    REStext22 = document.createElement("span"); REStext22.style = bb2; document.body.appendChild(REStext22);
    REStext22.innerHTML = "<h2>+</h2>";
    REStext22.style.position = "absolute";
    REStext22.style.left = 25.5 - 1.5 + '%';
    REStext22.style.top = 46 - 4.5 + '%';
    //REStext22.style.color = 0x000000;
    REStext22.style.visibility = "hidden";

    REStext1a2 = document.createElement("span"); REStext1a2.style = bb; document.body.appendChild(REStext1a2);
    REStext1a2.innerHTML = "<h2>-</h2>";
    REStext1a2.style.position = "absolute";
    REStext1a2.style.left = 25.5 - 1.5 + '%';
    REStext1a2.style.top = 56.3 - 4.5 + '%';
    //REStext1a2.style.color = 0x000000;
    REStext1a2.style.visibility = "hidden";

    REStext2a2 = document.createElement("span"); REStext2a2.style = bb2; document.body.appendChild(REStext2a2);
    REStext2a2.innerHTML = "<h2>+</h2>";
    REStext2a2.style.position = "absolute";
    REStext2a2.style.left = 25.5 - 1.5 + '%';
    REStext2a2.style.top = 63 - 4.5 + '%';
    //REStext2a2.style.color = 0xffffff;
    REStext2a2.style.visibility = "hidden";

    var BS = "font-family: Monospace; color: #555555; margin: 0px; overflow: hidden; font-size: 50px; border-radius: 10px;background-color: #555555;";
    Bbut = document.createElement("button");
    Bbut.setAttribute("id", "B");
    Bbut.style = BS;
    Bbut.innerHTML = "B"; document.body.appendChild(Bbut);
    Bbut.style.position = "absolute";
    Bbut.style.left = 25 - 2.5 + '%';
    Bbut.style.top = 41 -3 + '%';
    Bbut.addEventListener("click", Brev);
    Bbut.style.opacity = 0.0;

    //var BS = "font-family: Monospace; color: #ffffff; margin: 0px; overflow: hidden; font-size: 10px; border-radius: 10px;background-color: #555555;";
    BbutR = document.createElement("button");
    BbutR.style = BS;
    BbutR.innerHTML = "R"; document.body.appendChild(BbutR);
    BbutR.style.position = "absolute";
    BbutR.style.left = 25 - 2.5 + '%';
    BbutR.style.top = 41 -3+ '%';
    BbutR.addEventListener("click", Bfor);
    BbutR.style.visibility = "hidden";
    BbutR.style.opacity = 0.0;

    Bbut2 = document.createElement("button");
    Bbut2.setAttribute("id", "B");
    Bbut2.style = BS;
    Bbut2.innerHTML = "B"; document.body.appendChild(Bbut2);
    Bbut2.style.position = "absolute";
    Bbut2.style.left = 25 - 2.5 + '%';
    Bbut2.style.top = 58 -3+ '%';
    Bbut2.addEventListener("click", Brev2);
    Bbut2.style.opacity = 0.0;
    //Bbut.style.visibility = "hidden";

    //var BS = "font-family: Monospace; color: #ffffff; margin: 0px; overflow: hidden; font-size: 10px; border-radius: 10px;background-color: #555555;";
    BbutR2 = document.createElement("button");
    BbutR2.style = BS;
    BbutR2.innerHTML = "R"; document.body.appendChild(BbutR2);
    BbutR2.style.position = "absolute";
    BbutR2.style.left = 25 - 2.5 + '%';
    BbutR2.style.top = 58 -3+ '%';
    BbutR2.addEventListener("click", Bfor2);
    BbutR2.style.visibility = "hidden";
    BbutR2.style.opacity = 0.0;

    /*Background of Led-Test*/
    geometry = new THREE.BoxGeometry(mySceneW * 2, mySceneH *2, wallThickness);
    material = new THREE.MeshLambertMaterial({ color: 0xFDF6D5 });
    myBack = new THREE.Mesh(geometry, material);
    myBack.position.set(myCenterX, myCenterY, -1.5 * wallThickness);
    PIEaddElement(myBack);
    myBack.receiveShadow = false;

    initialiseControls();

    PIEstopButton.addEventListener("click", PIEresetExperiment);

    /* Reset all positions */
    resetExperiment();

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    
}
function resetExperiment()
{
    StartEX();

    if (temp == 1) {
        needle.rotateZ(Math.PI / 18 * totalCurrent);
        needle.position.set(2 , 2.06 , 0.40);
        needle1.rotateZ(Math.PI / 18 * totalCurrent);
        needle1.position.set(2, 1.91, 0.40);
        temp = 0;
    }
    if (flag == 1) {
        needle.rotateZ(Math.PI / 18 * totalCurrent);
        needle1.rotateZ(Math.PI / 18 * totalCurrent);
        needle.position.set(2, 2.06, 0.40);
        needle1.position.set(2, 1.91, 0.40);
        flag = 0;
    }
    Bulb.material.color.setHex(0xa6a6a6);
    SwitchText.style.visibility = "visible";
    SwitchText1.style.visibility = "hidden";

    initialiseOtherVariables();

    dir.scale.set(0, 0, 0);
    aro.scale.set(0, 0, 0);
    aro1.scale.set(0, 0, 0);

    dirR.scale.set(0, 0, 0);
    aroR.scale.set(0, 0, 0);
    aroR1.scale.set(0, 0, 0);

    myflag = 0;
    myflag2 = 0;
    one = 0;
    one2 = 0;
    batteryR.scale.set(0, 0, 0);
    battery1R.scale.set(0, 0, 0);
    batteryTR.scale.set(0, 0, 0);
    battery2R.scale.set(0, 0, 0);
    battery2bR.scale.set(0, 0, 0);
    battery2TR.scale.set(0, 0, 0);
    Bbut.style.visibility = "visible";
    BbutR.style.visibility = "hidden";
    Bbut2.style.visibility = "visible";
    BbutR2.style.visibility = "hidden";
    REStext12.style.visibility = "hidden";
    REStext22.style.visibility = "hidden";
    REStext1a2.style.visibility = "hidden";
    REStext2a2.style.visibility = "hidden";

    voltageV = 8;
    voltageV2 = 8;
    totalCurrent = 0;
    
    BatteryValue.innerHTML = voltageV + "V";
    PIEchangeInputSlider(voltage, voltageV);
    PIEchangeInputSlider(voltage2, voltageV2);

    if (dir.position.x == 3.5) {
        dir.rotateZ(Math.PI / 2);
        aro.rotateZ(- Math.PI / 2);
        aro1.rotateZ(Math.PI / 2);
        f = 0;
    }
    else if (dir.position.y == 1 ) {
        dir.rotateZ(Math.PI );
        aro.rotateZ(Math.PI);
        aro1.rotateZ(Math.PI);
        f = 0;
        c = 0;
    }
    else if (dir.position.x == 0.5) {
        dir.rotateZ(Math.PI / 2);
        aro.rotateZ(-Math.PI/2);
        aro1.rotateZ(-Math.PI/2); 
        f = 0;
        c = 0;
        u = 0;
    }
    dir.position.set(0.6, 2, 0.0);
    aro.position.set(0.7, 2.01, 0.0);
    aro1.position.set(0.7, 1.99, 0.0);

    if (dirR.position.x == 3.5) {
        dirR.rotateZ(Math.PI / 2);
        aroR.rotateZ(-Math.PI / 2);
        aroR1.rotateZ(-Math.PI / 2);
        f1 = 0;
    }
    else if (dirR.position.y == 2) {
        dirR.rotateZ(Math.PI);
        aroR.rotateZ(Math.PI);
        aroR1.rotateZ(Math.PI);
        f1 = 0;
        c1 = 0;
    }
    else if (dirR.position.x == 0.5) {
        dirR.rotateZ(Math.PI / 2);
        aroR.rotateZ(-Math.PI / 2);
        aroR1.rotateZ(Math.PI / 2);
        f1 = 0;
        c1 = 0;
        u1 = 0;
    }
    dirR.position.set(0.6, 1, 0.0);
    aroR.position.set(0.7, 1.01, 0.0);
    aroR1.position.set(0.7, 0.99, 0.0);
    //PIEchangeInputCommand(StartExpL, StartQuizL, TesterQuiz);
    onGoing = 0;

}
var one = 0;
var one2 = 0;
function updateExperimentElements(t, dt)
{
    if (Glo == !1) {
        Bbut.style.visibility = "hidden";
        BbutR.style.visibility = "hidden";
        Bbut2.style.visibility = "hidden";
        BbutR2.style.visibility = "hidden";
        //sl.material.color.setHex(0x000000);
        SwitchText.style.visibility = "hidden";
        SwitchText1.style.visibility = "visible";
       
        BatteryValue.innerHTML = voltageV + "V";
        if (myflag == 1 && one == 0) {
            voltageV = -1 * voltageV;
            one++;
        }
        if (myflag2 == 1 && one2 == 0) {
            voltageV2 = -1 * voltageV2;
            one2++;
        }
        totalVoltage = voltageV + voltageV2;
        if (totalVoltage >= 1) {

            totalCurrent = totalVoltage / 4;
            if (totalCurrent <= 2.5)
                Bulb.material.color.setHex(0xffff33);
            else if (totalCurrent > 2.5 && totalCurrent <= 3.5)
                Bulb.material.color.setHex(0xffff1a);
            else
                Bulb.material.color.setHex(0xffff00);
            if (temp == 0) {
                /*Magnetic needle rotation*/
                needle.rotateZ(-Math.PI / 18 * totalCurrent);
                needle.position.set(2 + 0.011 * totalCurrent, 2.06 - 0.005 * totalCurrent, 0.4);
                needle1.rotateZ(-Math.PI / 18 * totalCurrent);
                needle1.position.set(2 - 0.011 * totalCurrent, 1.91 + 0.0071 * totalCurrent, 0.4);
                temp = 1;
            }

            dir.scale.set(1, 1, 1);
            aro.scale.set(1, 1, 1);
            aro1.scale.set(1, 1, 1);

            if (aro.position.x < 3.5 && c != 1) {
                aro.position.set(aro.position.x + 0.02, aro.position.y, aro.position.z);
                aro1.position.set(aro1.position.x + 0.02, aro1.position.y, aro1.position.z);
                dir.position.set(dir.position.x + 0.02, dir.position.y, dir.position.z);
            }
            else if (aro.position.x >= 3.5 && f != 1) {

                aro.position.set(3.5 + 0.01, 1.8, 0);
                aro.rotateZ(Math.PI / 2);
                aro1.position.set(3.5 - 0.01, 1.8, 0);
                aro1.rotateZ(-Math.PI / 2);
                dir.position.set(3.5, 1.9, 0);
                dir.rotateZ(Math.PI / 2);
                f = 1;
            }
            else if (f == 1 && aro.position.y > 1 && u == 0) {
                aro.position.set(aro.position.x, aro.position.y - 0.02, aro.position.z);
                aro1.position.set(aro1.position.x, aro1.position.y - 0.02, aro1.position.z);
                dir.position.set(dir.position.x, dir.position.y - 0.02, dir.position.z);
            }
            else if (aro.position.y <= 1 && c != 1) {
                aro.position.set(3.3, 1 - 0.01, 0);
                aro.rotateZ(-Math.PI / 2);
                aro1.position.set(3.3, 1 + 0.01, 0);
                aro1.rotateZ(+Math.PI / 2);
                dir.position.set(3.4, 1, 0);
                dir.rotateZ(Math.PI / 2);
                c = 1;
            }
            else if (c == 1 && aro.position.x > 0.5) {
                aro.position.set(aro.position.x - 0.02, aro.position.y, aro.position.z);
                aro1.position.set(aro1.position.x - 0.02, aro1.position.y, aro1.position.z);
                dir.position.set(dir.position.x - 0.02, dir.position.y, dir.position.z);
            }
            else if (aro.position.x <= 0.5 && u != 1) {
                aro.position.set(0.5 - 0.01, 1.2, 0);
                aro.rotateZ(-Math.PI / 2);
                aro1.position.set(0.5 + 0.01, 1.2, 0);
                aro1.rotateZ(+Math.PI / 2);
                dir.position.set(0.5, 1.1, 0);
                dir.rotateZ(Math.PI / 2);
                u = 1;
            }
            else if (u == 1) {
                aro.position.set(aro.position.x, aro.position.y + 0.02, aro.position.z);
                aro1.position.set(aro1.position.x, aro1.position.y + 0.02, aro1.position.z);
                dir.position.set(dir.position.x, dir.position.y + 0.02, dir.position.z);
                if (aro.position.y >= 2 - 0.25) {
                    dir.position.set(0.6, 2, 0.0);
                    dir.rotateZ(Math.PI / 2)
                    aro.position.set(0.7, 2.01, 0.0);
                    aro.rotateZ(-Math.PI / 2)
                    aro1.position.set(0.7, 1.99, 0.0);
                    aro1.rotateZ(Math.PI / 2);
                    f = 0;
                    c = 0;
                    u = 0;
                }
            }
        }
        else if (totalVoltage <= -1) {
            totalCurrent = totalVoltage / 4;
            if (totalCurrent >= -2)
                Bulb.material.color.setHex(0xffff1a);
            else if (totalCurrent >= -3)
                Bulb.material.color.setHex(0xffff33);
            else
                Bulb.material.color.setHex(0xffff00);

            if (flag == 0) {
                /*Magnetic needle rotation*/
                needle.rotateZ(-Math.PI / 18 * totalCurrent);
                needle1.rotateZ(-Math.PI / 18 * totalCurrent);

                if (totalCurrent > -3) {
                    needle.position.set(2 + 0.015 * totalCurrent, 2.06 - 0.005 * totalCurrent, 0.4);
                    needle1.position.set(2 - 0.014 * totalCurrent, 1.91 + 0.003 * totalCurrent, 0.4);
                    type = 1;
                }
                else if (totalCurrent == -3) {
                    needle.position.set(2 + 0.015 * totalCurrent, 2.06 - 0.005 * totalCurrent, 0.4);
                    needle1.position.set(2 - 0.014 * totalCurrent, 1.91 + 0.0016 * totalCurrent, 0.4);
                    type = 1;
                }
                else {
                    needle.position.set(2 + 0.013 * totalCurrent, 2.06 + 0.002 * totalCurrent, 0.4);
                    needle1.position.set(2 - 0.014 * totalCurrent, 1.91 - 0.0012 * totalCurrent, 0.4);
                    type = 2;
                }
                flag = 1;
            }

            dirR.scale.set(1, 1, 1);
            aroR.scale.set(1, 1, 1);
            aroR1.scale.set(1, 1, 1);

            if (aroR1.position.x < 3.5 && c1 != 1) {
                aroR.position.set(aroR.position.x + 0.02, aroR.position.y, aroR.position.z);
                aroR1.position.set(aroR1.position.x + 0.02, aroR1.position.y, aroR1.position.z);
                dirR.position.set(dirR.position.x + 0.02, dirR.position.y, dirR.position.z);
            }
            else if (aroR1.position.x >= 3.5 && f1 != 1) {

                aroR.position.set(3.5 - 0.01, 1.2, 0);
                aroR.rotateZ(Math.PI / 2);
                aroR1.position.set(3.5 + 0.01, 1.2, 0);
                aroR1.rotateZ(Math.PI / 2);
                dirR.position.set(3.5, 1.1, 0);
                dirR.rotateZ(Math.PI / 2);
                f1 = 1;
            }
            else if (f1 == 1 && aroR1.position.y < 2 && u1 == 0) {
                aroR.position.set(aroR.position.x, aroR.position.y + 0.02, aroR.position.z);
                aroR1.position.set(aroR1.position.x, aroR1.position.y + 0.02, aroR1.position.z);
                dirR.position.set(dirR.position.x, dirR.position.y + 0.02, dirR.position.z);
            }
            else if (aroR1.position.y >= 2 && c1 != 1) {
                aroR.position.set(3.3, 2 - 0.01, 0);
                aroR.rotateZ(-Math.PI / 2);
                aroR1.position.set(3.3, 2 + 0.01, 0);
                aroR1.rotateZ(+Math.PI / 2);
                dirR.position.set(3.4, 2, 0);
                dirR.rotateZ(Math.PI / 2);
                c1 = 1;
            }
            else if (c1 == 1 && aroR1.position.x > 0.5) {
                aroR.position.set(aroR.position.x - 0.02, aroR.position.y, aroR.position.z);
                aroR1.position.set(aroR1.position.x - 0.02, aroR1.position.y, aroR1.position.z);
                dirR.position.set(dirR.position.x - 0.02, dirR.position.y, dirR.position.z);
            }
            else if (aroR1.position.x <= 0.5 && u1 != 1) {
                aroR.position.set(0.5 + 0.01, 1.8, 0);
                aroR.rotateZ(-Math.PI / 2);
                aroR1.position.set(0.5 - 0.01, 1.8, 0);
                aroR1.rotateZ(+Math.PI / 2);
                dirR.position.set(0.5, 1.9, 0);
                dirR.rotateZ(Math.PI / 2);
                u1 = 1;
            }
            else if (u1 == 1) {
                aroR.position.set(aroR.position.x, aroR.position.y - 0.02, aroR.position.z);
                aroR1.position.set(aroR1.position.x, aroR1.position.y - 0.02, aroR1.position.z);
                dirR.position.set(dirR.position.x, dirR.position.y - 0.02, dirR.position.z);
                if (aroR.position.y <= 1) {
                    dirR.position.set(0.6, 1, 0.0);
                    dirR.rotateZ(Math.PI / 2);
                    aroR.position.set(0.7, 1.01, 0.0);
                    aroR.rotateZ(-Math.PI / 2);
                    aroR1.position.set(0.7, 0.99, 0.0);
                    aroR1.rotateZ(Math.PI / 2);
                    f1 = 0;
                    c1 = 0;
                    u1 = 0;
                }
            }
        }
        else {
            dir.scale.set(0, 0, 0);
            aro.scale.set(0, 0, 0);
            aro1.scale.set(0, 0, 0);
        }

    }
    if (counter == 0) {
        counter++;
        PIEresetExperiment();
    }
    PIEchangeDisplayText(totalVoltageL, Math.abs(totalVoltage));
    PIEchangeDisplayText(totalCurrentL, Math.abs(totalCurrent));
    PIEchangeDisplayText(deflectionL, -Math.PI / 18 * totalCurrent);
}