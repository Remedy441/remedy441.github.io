//MY_PROJECT
//A-MAGNETIC-EFFECT-OF-ELECTRIC-CURRENT
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
var needle2;
var needle12;

var line3a;
var battery;
var battery1;
var batteryT;
var battery2;
var battery2b;
var battery2T;
var battery3;
var battery3b;
var battery3T;
var batteryR;
var battery1R;
var batteryTR;
var battery2R;
var battery2bR;
var battery2TR;
var battery3R;
var battery3bR;
var battery3TR;

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
var compasR;
var innerCircle;
var compass2;
var innerCircle2;
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

var Magnet1R;
var Magnet1L;
var Magnet2R;
var Magnet2L;
var Magnet3R;
var Magnet3L;

var compassringI;
var compassring;
var part;

var Glo = 0;

var temp = 0;
var flag = 0;
var type = 0;
var counter = 0;

var SwitchText;
var SwitchText1;

var myflag = 0;
var myflag2 = 0;
var StartQuizL;
var StartExpL;
var onGoing = 0;
var ButL;
var ButL2;
var batRevL;
var cellNoL;
var cellNo = 1;
function handleV(newValue) {
    voltageV = newValue;
}
function handleV2(newValue) {
    voltageV2 = newValue;
}
function handleCell(newValue) {
    cellNo = newValue;
    totalVoltage = 8 + (cellNo - 1) * 2;
    north.style.left = 80.5 - 0.75 *(cellNo -1) + '%';
    south.style.left = 85.5 + 0.75 * (cellNo - 1) + '%';
    if (myflag == 0) {
        if (cellNo == 1) {
            battery.scale.set(1, 1, 1);
            battery1.scale.set(1, 1, 1);
            batteryT.scale.set(1, 1, 1);
            battery2.scale.set(0, 0, 0);
            battery2b.scale.set(0, 0, 0);
            battery2T.scale.set(0, 0, 0);
            battery3.scale.set(0, 0, 0);
            battery3b.scale.set(0, 0, 0);
            battery3T.scale.set(0, 0, 0);

            Magnet1R.scale.set(1, 1, 1);
            Magnet1L.scale.set(1, 1, 1);
            Magnet2R.scale.set(0, 0, 0);
            Magnet2L.scale.set(0, 0, 0);
            Magnet3R.scale.set(0, 0, 0);
            Magnet3L.scale.set(0, 0, 0);

            REStext1.style.visibility = "visible";
            REStext2.style.visibility = "visible";
            REStext1a.style.visibility = "hidden";
            REStext2a.style.visibility = "hidden";
            REStext1b.style.visibility = "hidden";
            REStext2b.style.visibility = "hidden";

            REStext12.style.visibility = "hidden";
            REStext22.style.visibility = "hidden";
            REStext1a2.style.visibility = "hidden";
            REStext2a2.style.visibility = "hidden";
            REStext1b2.style.visibility = "hidden";
            REStext2b2.style.visibility = "hidden";
        }
        else if (cellNo == 2) {
            battery.scale.set(1, 1, 1);
            battery1.scale.set(1, 1, 1);
            batteryT.scale.set(1, 1, 1);
            battery2.scale.set(1, 1, 1);
            battery2b.scale.set(1, 1, 1);
            battery2T.scale.set(1, 1, 1);
            battery3.scale.set(0, 0, 0);
            battery3b.scale.set(0, 0, 0);
            battery3T.scale.set(0, 0, 0);

            Magnet1R.scale.set(0,0,0);
            Magnet1L.scale.set(0,0,0);
            Magnet2R.scale.set(1,1,1);
            Magnet2L.scale.set(1,1,1);
            Magnet3R.scale.set(0,0,0);
            Magnet3L.scale.set(0, 0, 0);

            REStext1.style.visibility = "visible";
            REStext2.style.visibility = "visible";
            REStext1a.style.visibility = "visible";
            REStext2a.style.visibility = "visible";
            REStext1b.style.visibility = "hidden";
            REStext2b.style.visibility = "hidden";

            REStext12.style.visibility = "hidden";
            REStext22.style.visibility = "hidden";
            REStext1a2.style.visibility = "hidden";
            REStext2a2.style.visibility = "hidden";
            REStext1b2.style.visibility = "hidden";
            REStext2b2.style.visibility = "hidden";
        }
        else if (cellNo == 3) {
            battery.scale.set(1, 1, 1);
            battery1.scale.set(1, 1, 1);
            batteryT.scale.set(1, 1, 1);
            battery2.scale.set(1, 1, 1);
            battery2b.scale.set(1, 1, 1);
            battery2T.scale.set(1, 1, 1);
            battery3.scale.set(1, 1, 1);
            battery3b.scale.set(1, 1, 1);
            battery3T.scale.set(1, 1, 1);

            Magnet1R.scale.set(0,0,0);
            Magnet1L.scale.set(0,0,0);
            Magnet2R.scale.set(0,0,0);
            Magnet2L.scale.set(0,0,0);
            Magnet3R.scale.set(1,1,1);
            Magnet3L.scale.set(1, 1, 1);

            REStext1.style.visibility = "visible";
            REStext2.style.visibility = "visible";
            REStext1a.style.visibility = "visible";
            REStext2a.style.visibility = "visible";
            REStext1b.style.visibility = "visible";
            REStext2b.style.visibility = "visible";

            REStext12.style.visibility = "hidden";
            REStext22.style.visibility = "hidden";
            REStext1a2.style.visibility = "hidden";
            REStext2a2.style.visibility = "hidden";
            REStext1b2.style.visibility = "hidden";
            REStext2b2.style.visibility = "hidden";
        }
    }
    else if (myflag == 1) {
        totalVoltage = -1 * totalVoltage;
        if (cellNo == 1) {
            batteryR.scale.set(1, 1, 1);
            battery1R.scale.set(1, 1, 1);
            batteryTR.scale.set(1, 1, 1);
            battery2R.scale.set(0, 0, 0);
            battery2bR.scale.set(0, 0, 0);
            battery2TR.scale.set(0, 0, 0);
            battery3R.scale.set(0, 0, 0);
            battery3bR.scale.set(0, 0, 0);
            battery3TR.scale.set(0, 0, 0);

            Magnet1R.scale.set(1, 1, 1);
            Magnet1L.scale.set(1, 1, 1);
            Magnet2R.scale.set(0, 0, 0);
            Magnet2L.scale.set(0, 0, 0);
            Magnet3R.scale.set(0, 0, 0);
            Magnet3L.scale.set(0, 0, 0);

            Magnet1L.position.set(4 + 0.15, 1.8, 0.1);
            Magnet1R.position.set(4 - 0.15, 1.8, 0.1);

            Magnet2R.position.set(4 + 0.15 + 0.05, 1.8, 0.1);
            Magnet2L.position.set(4 - 0.15 - 0.05, 1.8, 0.1);
            Magnet3R.position.set(4 + 0.15 + 0.1, 1.8, 0.1);
            Magnet3L.position.set(4 - 0.15 - 0.1, 1.8, 0.1);

            REStext1.style.visibility = "hidden";
            REStext2.style.visibility = "hidden";
            REStext1a.style.visibility = "hidden";
            REStext2a.style.visibility = "hidden";
            REStext1b.style.visibility = "hidden";
            REStext2b.style.visibility = "hidden";

            REStext12.style.visibility = "visible";
            REStext22.style.visibility = "visible";
            REStext1a2.style.visibility = "hidden";
            REStext2a2.style.visibility = "hidden";
            REStext1b2.style.visibility = "hidden";
            REStext2b2.style.visibility = "hidden";
        }
        else if (cellNo == 2) {
            batteryR.scale.set(1, 1, 1);
            battery1R.scale.set(1, 1, 1);
            batteryTR.scale.set(1, 1, 1);
            battery2R.scale.set(1, 1, 1);
            battery2bR.scale.set(1, 1, 1);
            battery2TR.scale.set(1, 1, 1);
            battery3R.scale.set(0, 0, 0);
            battery3bR.scale.set(0, 0, 0);
            battery3TR.scale.set(0, 0, 0);

            Magnet1R.scale.set(0, 0, 0);
            Magnet1L.scale.set(0, 0, 0);
            Magnet2R.scale.set(1, 1, 1);
            Magnet2L.scale.set(1, 1, 1);
            Magnet3R.scale.set(0, 0, 0);
            Magnet3L.scale.set(0, 0, 0);

            Magnet2L.position.set(4 + 0.15 + 0.05, 1.8, 0.1);
            Magnet2R.position.set(4 - 0.15 - 0.05, 1.8, 0.1);

            REStext1.style.visibility = "hidden";
            REStext2.style.visibility = "hidden";
            REStext1a.style.visibility = "hidden";
            REStext2a.style.visibility = "hidden";
            REStext1b.style.visibility = "hidden";
            REStext2b.style.visibility = "hidden";

            REStext12.style.visibility = "visible";
            REStext22.style.visibility = "visible";
            REStext1a2.style.visibility = "visible";
            REStext2a2.style.visibility = "visible";
            REStext1b2.style.visibility = "hidden";
            REStext2b2.style.visibility = "hidden";
        }
        else if (cellNo == 3) {
            batteryR.scale.set(1, 1, 1);
            battery1R.scale.set(1, 1, 1);
            batteryTR.scale.set(1, 1, 1);
            battery2R.scale.set(1, 1, 1);
            battery2bR.scale.set(1, 1, 1);
            battery2TR.scale.set(1, 1, 1);
            battery3R.scale.set(1, 1, 1);
            battery3bR.scale.set(1, 1, 1);
            battery3TR.scale.set(1, 1, 1);

            Magnet1R.scale.set(0, 0, 0);
            Magnet1L.scale.set(0, 0, 0);
            Magnet2R.scale.set(0, 0, 0);
            Magnet2L.scale.set(0, 0, 0);
            Magnet3R.scale.set(1, 1, 1);
            Magnet3L.scale.set(1, 1, 1);

            Magnet3L.position.set(4 + 0.15 + 0.1, 1.8, 0.1);
            Magnet3R.position.set(4 - 0.15 - 0.1, 1.8, 0.1);

            REStext1.style.visibility = "hidden";
            REStext2.style.visibility = "hidden";
            REStext1a.style.visibility = "hidden";
            REStext2a.style.visibility = "hidden";
            REStext1b.style.visibility = "hidden";
            REStext2b.style.visibility = "hidden";

            REStext12.style.visibility = "visible";
            REStext22.style.visibility = "visible";
            REStext1a2.style.visibility = "visible";
            REStext2a2.style.visibility = "visible";
            REStext1b2.style.visibility = "visible";
            REStext2b2.style.visibility = "visible";
        }
    }
    PIErender();
}

function initialiseControlVariables()
{
    totalVoltageL = "Total_Voltage(V)";
    totalVoltage = 8.00;

    totalCurrentL = "Circuit_Current(A)"
    totalCurrent = 2.00;

    deflectionL = "Deflection(rad)";
    deflection = 0.25;

    totalResL = "Circuit_Res(Ohm)";
    totalRes = 4;

    StartQuizL = "START-QUIZ"
    StartExpL = "EXPERIMENT";
    onGoing = 0;

    cellNoL = "NumberOfBattery";
    cellNo = 1;

    batRevL = "ReverseBattery";
}
function initialiseControls()
{
    initialiseControlVariables();
    PIEaddInputSlider(cellNoL, cellNo, handleCell, 1, 3, 1);
    PIEaddInputCommand(batRevL, batR);
    //PIEaddInputCommand(StartQuizL, StartQuiz);
                                        
    PIEaddDisplayText(totalVoltageL, totalVoltage);
    PIEaddDisplayText(totalCurrentL, totalCurrent);
    PIEaddDisplayText(deflectionL, deflection);
    PIEaddDisplayText(totalResL, totalRes);
}

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>A-MAGNETIC-EFFECT-OF-ELECTRIC-CURRENT experiment help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows a electric circuit demonstrates MAGNETIC-EFFECT, magnetic compass needle shows deflection on it based upon the current strength and its direction . Its similarity with a real magnet producing similar effect is shown along side of it.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to one sliders , 2 Commands from it.</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>NumberOfBattery&nbsp;&nbsp;:&nbsp;Controls number of battery that needs to be attached to the circuit.</li>";
    helpContent = helpContent + "<li>ReverseBattery&nbsp;&nbsp;:&nbsp;Reverses the direction of battery in the circuit.</li>";
    helpContent = helpContent + "<li>StartQuiz&nbsp;&nbsp;:&nbsp;Starts Quiz to test your knowledge.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the circuit is now complete and therefore when you switch it ON the magnetic compass needle will show deflection based upon the strength and direction of current.</p>";
    helpContent = helpContent + "<p>The right hand panel now shows the values of combined effective voltage produced by the battery in the circuit , total current in the circuit , deflection produced in the magnetic compass and circuit resistance .</p>";
    helpContent = helpContent + "<p>Also its similarity with a real magnet is shown along side. .</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>A-MAGNETIC-EFFECT-OF-ELECTRIC-CURRENT experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows a circuit shows MAGNETIC-EFFECT, the deflection in the magnetic compass changes with direction and strength of current .</p>";
    infoContent = infoContent + "<h3>MAGNETIC-EFFECT-OF-ELECTRIC-CURRENT.</h3>";
    infoContent = infoContent + "<p>When the circuit is turned ON as there is current in the circuit therefore cardboard cylinder behaves as a magnet and compass will show deflection in it , its similarity with magnet is also shown alongside of the experiment.</p>";
    infoContent = infoContent + "<h3>Higher current produces higher deflection in the circuit.</h3>";
    infoContent = infoContent + "<p> Deflection of the magnetic compass will be higher when there is higher value of current in the circuit.</p>";
    infoContent = infoContent + "<h3>Direction of needle changes with changing the direction of current.</h3>";
    infoContent = infoContent + "<p>As soon as the direction of current is reversed in the circuit , the direction of magnetic needle also changes.</p>";
    infoContent = infoContent + "<p>which shows that needle deflects in the direction of current and its deflection increases with increase in current of the circuit.</p>";
    infoContent = infoContent + "<p>Also along side of it its similarity with a real magnet producing same deflection is shown.</p>";
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
function StartExperiment() {
    Glo = 0;
    onGoing = 0;
    PIEchangeInputCommand(StartExpL, StartQuizL, StartQuiz);

    Qq1.style.visibility = "hidden";
    Aq1.style.visibility = "hidden";
    A11.style.visibility = "hidden";
    A21.style.visibility = "hidden";
    A31.style.visibility = "hidden";
    A41.style.visibility = "hidden";
    A51.style.visibility = "hidden";
    A61.style.visibility = "hidden";

    input1.style.visibility = "hidden";
    input2.style.visibility = "hidden";
    input3.style.visibility = "hidden";
    input4.style.visibility = "hidden";
    input5.style.visibility = "hidden";
    inputT1.style.visibility = "hidden";
    inputF11.style.visibility = "hidden";
    inputT2.style.visibility = "hidden";
    inputF22.style.visibility = "hidden";
    inputT3.style.visibility = "hidden";
    inputF33.style.visibility = "hidden";
    inputT4.style.visibility = "hidden";
    inputF44.style.visibility = "hidden";
    inputT5.style.visibility = "hidden";
    inputF55.style.visibility = "hidden";
    AnsT.style.visibility = "hidden";
    AnsTb.style.visibility = "hidden";
    vt1.style.visibility = "hidden";
    vf1.style.visibility = "hidden";
    vt2.style.visibility = "hidden";
    vf2.style.visibility = "hidden";
    vt3.style.visibility = "hidden";
    vf3.style.visibility = "hidden";
    vt4.style.visibility = "hidden";
    vf4.style.visibility = "hidden";
    vt5.style.visibility = "hidden";
    vf5.style.visibility = "hidden";

    Q1L.style.visibility = "hidden";
    Q2L.style.visibility = "hidden";
    submit.style.visibility = "hidden";
    score.style.visibility = "hidden";
    Answer1.style.visibility = "hidden";
    Answer2.style.visibility = "hidden";
    Experiment.style.visibility = "hidden";
    marks = 0;

    line.scale.set(1, 1, 1);
    line1.scale.set(1, 1, 1);
    line1a.scale.set(1, 1, 1);
    line2.scale.set(1, 1, 1);
    line3a.scale.set(1, 1, 1);
    battery.scale.set(1, 1, 1);
    battery1.scale.set(1, 1, 1);
    batteryT.scale.set(1, 1, 1);
    battery2.scale.set(1, 1, 1);
    battery2b.scale.set(1, 1, 1);
    battery2T.scale.set(1, 1, 1);
    battery3.scale.set(1, 1, 1);
    battery3b.scale.set(1, 1, 1);
    battery3T.scale.set(1, 1, 1);
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
    compasR.scale.set(1, 1, 1);
    innerCircle.scale.set(1, 1, 1);
    needle.scale.set(1, 1, 1);
    needle1.scale.set(1, 1, 1);
    compass2.scale.set(1, 1, 1);
    innerCircle2.scale.set(1, 1, 1);
    needle2.scale.set(1, 1, 1);
    needle12.scale.set(1, 1, 1);
    compassring.scale.set(1, 1, 1);
    compassringI.scale.set(1, 1, 1);
    wire.scale.set(1, 1, 1);
    wire1.scale.set(1, 1, 1);
    wire2.scale.set(1, 1, 1);
    wire3.scale.set(1, 1, 1);
    REStext.style.visibility = "visible";
    Bulb.scale.set(1, 1, 1);
    BulbH.scale.set(1, 1, 1);
    BulbB.scale.set(1, 1, 1);
    SwitchText.style.visibility = "visible";
    SwitchText1.style.visibility = "hidden";
    aro.scale.set(0, 0, 0);
    dir.scale.set(0, 0, 0);
    aro1.scale.set(0, 0, 0);
    aroR1.scale.set(0, 0, 0);
    aroR.scale.set(0, 0, 0);
    dirR.scale.set(0, 0, 0);

    north.style.visibility = "visible";
    south.style.visibility = "visible";

    battery.scale.set(1, 1, 1);
    battery1.scale.set(1, 1, 1);
    batteryT.scale.set(1, 1, 1);
    battery2.scale.set(0, 0, 0);
    battery2b.scale.set(0, 0, 0);
    battery2T.scale.set(0, 0, 0);
    battery3.scale.set(0, 0, 0);
    battery3b.scale.set(0, 0, 0);
    battery3T.scale.set(0, 0, 0);

    Magnet1R.scale.set(1, 1, 1);
    Magnet1L.scale.set(1, 1, 1);
    Magnet2R.scale.set(0, 0, 0);
    Magnet2L.scale.set(0, 0, 0);
    Magnet3R.scale.set(0, 0, 0);
    Magnet3L.scale.set(0, 0, 0);

    batteryR.scale.set(0, 0, 0);
    battery1R.scale.set(0, 0, 0);
    batteryTR.scale.set(0, 0, 0);
    battery2R.scale.set(0, 0, 0);
    battery2bR.scale.set(0, 0, 0);
    battery2TR.scale.set(0, 0, 0);
    battery3R.scale.set(0, 0, 0);
    battery3bR.scale.set(0, 0, 0);
    battery3TR.scale.set(0, 0, 0);
    PIEchangeInputSlider(cellNoL, 1);
    PIErender();
}
function StartQuiz() {
    PIEresetExperiment();
    Glo = 1;
    PIEchangeInputCommand(StartQuizL, StartExpL, StartExperiment);
    onGoing = 1;

    line.scale.set(0, 0, 0);
    line1.scale.set(0, 0, 0);
    line1a.scale.set(0, 0, 0);
    line2.scale.set(0, 0, 0);
    line3a.scale.set(0, 0, 0);
    battery.scale.set(0, 0, 0);
    battery1.scale.set(0, 0, 0);
    batteryT.scale.set(0, 0, 0);
    battery2.scale.set(0, 0, 0);
    battery2b.scale.set(0, 0, 0);
    battery2T.scale.set(0, 0, 0);
    battery3.scale.set(0, 0, 0);
    battery3b.scale.set(0, 0, 0);
    battery3T.scale.set(0, 0, 0);
    resistor.scale.set(0, 0, 0);
    res.scale.set(0, 0, 0);
    L.scale.set(0, 0, 0);
    L1.scale.set(0, 0, 0);
    L2.scale.set(0, 0, 0);
    L3.scale.set(0, 0, 0);
    L4.scale.set(0, 0, 0);
    //switchB.scale.set(1, 1, 1);
    //D1.scale.set(1, 1, 1);
    //D2.scale.set(1, 1, 1);
    Magnet.scale.set(0, 0, 0);
    compass.scale.set(0, 0, 0);
    compasR.scale.set(0, 0, 0);
    innerCircle.scale.set(0, 0, 0);
    needle.scale.set(0, 0, 0);
    needle1.scale.set(0, 0, 0);
    compass2.scale.set(0, 0, 0);
    innerCircle2.scale.set(0, 0, 0);
    needle2.scale.set(0, 0, 0);
    needle12.scale.set(0, 0, 0);
    compassring.scale.set(0, 0, 0);
    compassringI.scale.set(0, 0, 0);
    wire.scale.set(0, 0, 0);
    wire1.scale.set(0, 0, 0);
    wire2.scale.set(0, 0, 0);
    wire3.scale.set(0, 0, 0);
    REStext.style.visibility = "hidden";
    Bulb.scale.set(0, 0, 0);
    BulbH.scale.set(0, 0, 0);
    BulbB.scale.set(0, 0, 0);
    SwitchText.style.visibility = "hidden";
    SwitchText1.style.visibility = "hidden";
    aro.scale.set(0, 0, 0);
    dir.scale.set(0, 0, 0);
    aro1.scale.set(0, 0, 0);
    aroR1.scale.set(0, 0, 0);
    aroR.scale.set(0, 0, 0);
    dirR.scale.set(0, 0, 0);

    battery.scale.set(0, 0, 0);
    battery1.scale.set(0, 0, 0);
    batteryT.scale.set(0, 0, 0);
    battery2.scale.set(0, 0, 0);
    battery2b.scale.set(0, 0, 0);
    battery2T.scale.set(0, 0, 0);
    battery3.scale.set(0, 0, 0);
    battery3b.scale.set(0, 0, 0);
    battery3T.scale.set(0, 0, 0);

    Magnet1R.scale.set(0, 0, 0);
    Magnet1L.scale.set(0, 0, 0);
    Magnet2R.scale.set(0, 0, 0);
    Magnet2L.scale.set(0, 0, 0);
    Magnet3R.scale.set(0, 0, 0);
    Magnet3L.scale.set(0, 0, 0);

    batteryR.scale.set(0, 0, 0);
    battery1R.scale.set(0, 0, 0);
    batteryTR.scale.set(0, 0, 0);
    battery2R.scale.set(0, 0, 0);
    battery2bR.scale.set(0, 0, 0);
    battery2TR.scale.set(0, 0, 0);
    battery3R.scale.set(0, 0, 0);
    battery3bR.scale.set(0, 0, 0);
    battery3TR.scale.set(0, 0, 0);
    north.style.visibility = "hidden";
    south.style.visibility = "hidden";

    Aq1.innerHTML = "<h1><b><u>Answer-Sheet</u></b></h1>";
    Qq1.style.visibility = "visible";
    Aq1.style.visibility = "visible";
    A11.style.visibility = "visible";
    A21.style.visibility = "visible";
    A31.style.visibility = "visible";
    A41.style.visibility = "visible";
    A51.style.visibility = "visible";
    A61.style.visibility = "visible";

    input1.style.visibility = "visible";
    input2.style.visibility = "visible";
    input3.style.visibility = "visible";
    input4.style.visibility = "visible";
    input5.style.visibility = "visible";
    inputT1.style.visibility = "visible";
    inputF11.style.visibility = "visible";
    inputT2.style.visibility = "visible";
    inputF22.style.visibility = "visible";
    inputT3.style.visibility = "visible";
    inputF33.style.visibility = "visible";
    inputT4.style.visibility = "visible";
    inputF44.style.visibility = "visible";
    inputT5.style.visibility = "visible";
    inputF55.style.visibility = "visible";
    AnsT.style.visibility = "visible";
    AnsTb.style.visibility = "visible";
    vt1.style.visibility = "visible";
    vf1.style.visibility = "visible";
    vt2.style.visibility = "visible";
    vf2.style.visibility = "visible";
    vt3.style.visibility = "visible";
    vf3.style.visibility = "visible";
    vt4.style.visibility = "visible";
    vf4.style.visibility = "visible";
    vt5.style.visibility = "visible";
    vf5.style.visibility = "visible";

    Q1L.style.visibility = "visible";
    Q2L.style.visibility = "visible";
    submit.style.visibility = "visible";
    score.style.visibility = "hidden";
    Answer1.style.visibility = "hidden";
    Answer2.style.visibility = "hidden";
    Experiment.style.visibility = "hidden";
    marks = 0;

    inputT1.checked = false;
    inputF11.checked = false;
    inputT2.checked = false;
    inputF22.checked = false;
    inputT3.checked = false;
    inputF33.checked = false;
    inputT4.checked = false;
    inputF44.checked = false;
    inputT5.checked = false;
    inputF55.checked = false;
    document.getElementById("q1").value = "";
    document.getElementById("q2").value = "";
    document.getElementById("q3").value = "";
    document.getElementById("q4").value = "";
    document.getElementById("q5").value = "";

    PIEchangeInputSlider(cellNoL, 1);
    PIErender();
}
function batR() {
    myflag = 1;
    totalVoltage = -1 * Math.abs(totalVoltage);
    north.innerHTML = "<h1>S</h1>";
    south.innerHTML = "<h1>N</h1>";
    north.style.left = 80.5 - 0.75 * (cellNo - 1) + '%';
    south.style.left = 85.5 + 0.75 * (cellNo - 1) + '%';
    if (cellNo == 1) {
        batteryR.scale.set(1, 1, 1);
        battery1R.scale.set(1, 1, 1);
        batteryTR.scale.set(1, 1, 1);
        battery.scale.set(0, 0, 0);
        battery1.scale.set(0, 0, 0);
        batteryT.scale.set(0, 0, 0);

        Magnet1L.position.set(4 + 0.15, 1.8, 0.1);
        Magnet1R.position.set(4 - 0.15, 1.8, 0.1);

        REStext1.style.visibility = "hidden";
        REStext2.style.visibility = "hidden";
        REStext1a.style.visibility = "hidden";
        REStext2a.style.visibility = "hidden";
        REStext1b.style.visibility = "hidden";
        REStext2b.style.visibility = "hidden";

        REStext12.style.visibility = "visible";
        REStext22.style.visibility = "visible";
        REStext1a2.style.visibility = "hidden";
        REStext2a2.style.visibility = "hidden";
        REStext1b2.style.visibility = "hidden";
        REStext2b2.style.visibility = "hidden";

    
        
    }
    else if (cellNo == 2) {
        batteryR.scale.set(1, 1, 1);
        battery1R.scale.set(1, 1, 1);
        batteryTR.scale.set(1, 1, 1);
        battery.scale.set(0, 0, 0);
        battery1.scale.set(0, 0, 0);
        batteryT.scale.set(0, 0, 0);

        battery2R.scale.set(1, 1, 1);
        battery2bR.scale.set(1, 1, 1);
        battery2TR.scale.set(1, 1, 1);
        battery2.scale.set(0, 0, 0);
        battery2b.scale.set(0, 0, 0);
        battery2T.scale.set(0, 0, 0);

        Magnet2L.position.set(4 + 0.15 + 0.05, 1.8, 0.1);
        Magnet2R.position.set(4 - 0.15 - 0.05, 1.8, 0.1);

        REStext1.style.visibility = "hidden";
        REStext2.style.visibility = "hidden";
        REStext1a.style.visibility = "hidden";
        REStext2a.style.visibility = "hidden";
        REStext1b.style.visibility = "hidden";
        REStext2b.style.visibility = "hidden";

        REStext12.style.visibility = "visible";
        REStext22.style.visibility = "visible";
        REStext1a2.style.visibility = "visible";
        REStext2a2.style.visibility = "visible";
        REStext1b2.style.visibility = "hidden";
        REStext2b2.style.visibility = "hidden";

       
    }
    else if (cellNo == 3) {
        batteryR.scale.set(1, 1, 1);
        battery1R.scale.set(1, 1, 1);
        batteryTR.scale.set(1, 1, 1);
        battery.scale.set(0, 0, 0);
        battery1.scale.set(0, 0, 0);
        batteryT.scale.set(0, 0, 0);

        battery2R.scale.set(1, 1, 1);
        battery2bR.scale.set(1, 1, 1);
        battery2TR.scale.set(1, 1, 1);
        battery2.scale.set(0, 0, 0);
        battery2b.scale.set(0, 0, 0);
        battery2T.scale.set(0, 0, 0);

        battery3R.scale.set(1, 1, 1);
        battery3bR.scale.set(1, 1, 1);
        battery3TR.scale.set(1, 1, 1);
        battery3.scale.set(0, 0, 0);
        battery3b.scale.set(0, 0, 0);
        battery3T.scale.set(0, 0, 0);

        Magnet3L.position.set(4 + 0.15 + 0.1, 1.8, 0.1);
        Magnet3R.position.set(4 - 0.15 - 0.1, 1.8, 0.1);

        REStext1.style.visibility = "hidden";
        REStext2.style.visibility = "hidden";
        REStext1a.style.visibility = "hidden";
        REStext2a.style.visibility = "hidden";
        REStext1b.style.visibility = "hidden";
        REStext2b.style.visibility = "hidden";

        REStext12.style.visibility = "visible";
        REStext22.style.visibility = "visible";
        REStext1a2.style.visibility = "visible";
        REStext2a2.style.visibility = "visible";
        REStext1b2.style.visibility = "visible";
        REStext2b2.style.visibility = "visible";

       
    }

    PIEchangeInputCommand(batRevL, batRevL, batF);

    PIErender();
}
function batF() {
    myflag = 0;
    totalVoltage = Math.abs(totalVoltage);
    north.innerHTML = "<h1>N</h1>";
    south.innerHTML = "<h1>S</h1>";
    north.style.left = 80.5 - 0.75 * (cellNo - 1) + '%';
    south.style.left = 85.5 + 0.75 * (cellNo - 1) + '%';
    if (cellNo == 1) {
        batteryR.scale.set(0, 0, 0);
        battery1R.scale.set(0, 0, 0);
        batteryTR.scale.set(0, 0, 0);
        battery.scale.set(1, 1, 1);
        battery1.scale.set(1, 1, 1);
        batteryT.scale.set(1, 1, 1);

        Magnet1R.position.set(4 + 0.15, 1.8, 0.1);
        Magnet1L.position.set(4 - 0.15, 1.8, 0.1);
        
        REStext1.style.visibility = "visible";
        REStext2.style.visibility = "visible";
        REStext1a.style.visibility = "hidden";
        REStext2a.style.visibility = "hidden";
        REStext1b.style.visibility = "hidden";
        REStext2b.style.visibility = "hidden";

        REStext12.style.visibility = "hidden";
        REStext22.style.visibility = "hidden";
        REStext1a2.style.visibility = "hidden";
        REStext2a2.style.visibility = "hidden";
        REStext1b2.style.visibility = "hidden";
        REStext2b2.style.visibility = "hidden";

        
    }
    else if (cellNo == 2) {
        batteryR.scale.set(0, 0, 0);
        battery1R.scale.set(0, 0, 0);
        batteryTR.scale.set(0, 0, 0);
        battery.scale.set(1, 1, 1);
        battery1.scale.set(1, 1, 1);
        batteryT.scale.set(1, 1, 1);

        battery2R.scale.set(0, 0, 0);
        battery2bR.scale.set(0, 0, 0);
        battery2TR.scale.set(0, 0, 0);
        battery2.scale.set(1, 1, 1);
        battery2b.scale.set(1, 1, 1);
        battery2T.scale.set(1, 1, 1);

        Magnet2R.position.set(4 + 0.15 + 0.05, 1.8, 0.1);
        Magnet2L.position.set(4 - 0.15 - 0.05, 1.8, 0.1);

        REStext1.style.visibility = "visible";
        REStext2.style.visibility = "visible";
        REStext1a.style.visibility = "visible";
        REStext2a.style.visibility = "visible";
        REStext1b.style.visibility = "hidden";
        REStext2b.style.visibility = "hidden";

        REStext12.style.visibility = "hidden";
        REStext22.style.visibility = "hidden";
        REStext1a2.style.visibility = "hidden";
        REStext2a2.style.visibility = "hidden";
        REStext1b2.style.visibility = "hidden";
        REStext2b2.style.visibility = "hidden";

        
    }
    else if (cellNo == 3) {
        batteryR.scale.set(0, 0, 0);
        battery1R.scale.set(0, 0, 0);
        batteryTR.scale.set(0, 0, 0);
        battery.scale.set(1, 1, 1);
        battery1.scale.set(1, 1, 1);
        batteryT.scale.set(1, 1, 1);

        battery2R.scale.set(0, 0, 0);
        battery2bR.scale.set(0, 0, 0);
        battery2TR.scale.set(0, 0, 0);
        battery2.scale.set(1, 1, 1);
        battery2b.scale.set(1, 1, 1);
        battery2T.scale.set(1, 1, 1);

        battery3R.scale.set(0, 0, 0);
        battery3bR.scale.set(0, 0, 0);
        battery3TR.scale.set(0, 0, 0);
        battery3.scale.set(1, 1, 1);
        battery3b.scale.set(1, 1, 1);
        battery3T.scale.set(1, 1, 1);

        Magnet3R.position.set(4 + 0.15 + 0.1, 1.8, 0.1);
        Magnet3L.position.set(4 - 0.15 - 0.1, 1.8, 0.1);

        REStext1.style.visibility = "visible";
        REStext2.style.visibility = "visible";
        REStext1a.style.visibility = "visible";
        REStext2a.style.visibility = "visible";
        REStext1b.style.visibility = "visible";
        REStext2b.style.visibility = "visible";

        REStext12.style.visibility = "hidden";
        REStext22.style.visibility = "hidden";
        REStext1a2.style.visibility = "hidden";
        REStext2a2.style.visibility = "hidden";
        REStext1b2.style.visibility = "hidden";
        REStext2b2.style.visibility = "hidden";

        
    }

    PIEchangeInputCommand(batRevL,batRevL , batR);

    PIErender();
}

//Create Quiz Variables

var Qq1;
var Aq1;
var A11;
var A21;
var A31;
var A41;
var A51;
var A61;
var input1;
var input2;
var input3;
var input4;
var input5;
var inputT1;
var inputF11;
var inputT2;
var inputF22;
var inputT3;
var inputF33;
var inputT4;
var inputF44;
var inputT5;
var inputF55;
var AnsT;
var AnsTb;
var vt1;
var vf1;
var vt2;
var vf2;
var vt3;
var vf3;
var vt4;
var vf4;
var vt5;
var vf5;
var Q1L;
var Q2L;
var submit;
var score;
var Answer1;
var Answer2;
var marks = 0;
var Experiment;
function evaluateScore() {

    var DisplayR1 = "";
    DisplayR1 = DisplayR1 + "<p><br></p>";
    DisplayR1 = DisplayR1 + "<ol>";

    var DisplayR2 = "";
    DisplayR2 = DisplayR2 + "<p><br></p>";
    DisplayR2 = DisplayR2 + "<ol>";
    
    //Ans-1
    if (document.getElementById("q1").value == "magnet") {
        marks++;
        DisplayR1 = DisplayR1 + "<li> <h3 color = #66ff33> CORRECT. </h3></li>";
    }
    else {
        DisplayR1 = DisplayR1 + "<li color = 0xff0000> <h3 color = 0xff0000> INCORRECT. Answer : magnet </h3></li>";
    }
    if (document.getElementById("q2").value == "right") {
        marks++;
        DisplayR1 = DisplayR1 + "<li> <h3 color = #66ff33> CORRECT. </h3></li>";
    }
    else {
        DisplayR1 = DisplayR1 + "<li> <h3 color = #ff0000> INCORRECT. Answer : right </h3></li>";
    }
    if (document.getElementById("q3").value == "directly") {
        marks++;
        DisplayR1 = DisplayR1 + "<li> <h3 color = #66ff33> CORRECT. </h3></li>";
    }
    else {
        DisplayR1 = DisplayR1 + "<li> <h3 color = #ff0000> INCORRECT. Answer : directly </h3></li>";
    }
    if (document.getElementById("q4").value == "polarity") {
        marks++;
        DisplayR1 = DisplayR1 + "<li> <h3 color = #66ff33> CORRECT. </h3></li>";
    }
    else {
        DisplayR1 = DisplayR1 + "<li> <h3 color = #ff0000> INCORRECT. Answer : polarity </h3></li>";
    }
    if (document.getElementById("q5").value == "magnetic") {
        marks++;
        DisplayR1 = DisplayR1 + "<li> <h3 color = #66ff33> CORRECT. </h3></li>";
    }
    else {
        DisplayR1 = DisplayR1 + "<li> <h3 color = #ff0000> INCORRECT. Answer : magnetic </h3></li>";
    }
    DisplayR1 = DisplayR1 + "</ol>";


    //Ans-2
    if (inputT1.checked) {
        marks++;
        DisplayR2 = DisplayR2 + "<li> <h3 color = #66ff33> CORRECT. </h3></li>";
    }
    else {
        DisplayR2 = DisplayR2 + "<li> <h3 color = #ff0000> INCORRECT. Answer : TRUE</h3></li>";
    }
    if (inputF22.checked) {
        marks++;
        DisplayR2 = DisplayR2 + "<li> <h3 color = #66ff33> CORRECT. </h3></li>";
    }
    else {
        DisplayR2 = DisplayR2 + "<li> <h3 color = #ff0000> INCORRECT. Answer : FALSE</h3></li>";
    }
    if (inputT3.checked) {
        marks++;
        DisplayR2 = DisplayR2 + "<li> <h3 color = #66ff33> CORRECT. </h3></li>";
    }
    else {
        DisplayR2 = DisplayR2 + "<li> <h3 color = #ff0000> INCORRECT. Answer : TRUE</h3></li>";
    }
    if (inputT4.checked) {
        marks++;
        DisplayR2 = DisplayR2 + "<li> <h3 color = #66ff33> CORRECT. </h3></li>";
    }
    else {
        DisplayR2 = DisplayR2 + "<li> <h3 color = #ff0000> INCORRECT. Answer : TRUE</h3></li>";
    }
    if (inputF55.checked) {
        marks++;
        DisplayR2 = DisplayR2 + "<li> <h3 color = #66ff33> CORRECT. </h3></li>";
    }
    else {
        DisplayR2 = DisplayR2 + "<li> <h3 color = #ff0000> INCORRECT. Answer : FALSE</h3></li>";
    }
    DisplayR2 = DisplayR2 + "</ol>";

    Answer1.innerHTML = "<h3><b>" + DisplayR1 + "</b></h3>";
    Answer2.innerHTML = "<h3><b>" + DisplayR2 + "</b></h3>";
    Aq1.innerHTML = "<h1><b><u>Result-Sheet</u></b></h1>";

    Answer1.style.visibility = "visible";
    Answer2.style.visibility = "visible";

    score.style.visibility = "visible";
    score.innerHTML = "<h1><b>" + marks + "/10</b></h1>";

    Experiment.style.visibility = "visible";
    submit.style.visibility = "hidden";

    input1.style.visibility = "hidden";
    input2.style.visibility = "hidden";
    input3.style.visibility = "hidden";
    input4.style.visibility = "hidden";
    input5.style.visibility = "hidden";
    inputT1.style.visibility = "hidden";
    inputF11.style.visibility = "hidden";
    inputT2.style.visibility = "hidden";
    inputF22.style.visibility = "hidden";
    inputT3.style.visibility = "hidden";
    inputF33.style.visibility = "hidden";
    inputT4.style.visibility = "hidden";
    inputF44.style.visibility = "hidden";
    inputT5.style.visibility = "hidden";
    inputF55.style.visibility = "hidden";
    AnsT.style.visibility = "hidden";
    AnsTb.style.visibility = "hidden";
    vt1.style.visibility = "hidden";
    vf1.style.visibility = "hidden";
    vt2.style.visibility = "hidden";
    vf2.style.visibility = "hidden";
    vt3.style.visibility = "hidden";
    vf3.style.visibility = "hidden";
    vt4.style.visibility = "hidden";
    vf4.style.visibility = "hidden";
    vt5.style.visibility = "hidden";
    vf5.style.visibility = "hidden";

}
function createQuiz() {
    

    var bb7 = "font-family: Monospace; color: #000000; margin: 0px; overflow: hidden; border-radius: 2px;background-color: #ffe066; ";
    var bb7A = "font-family: Monospace; color: #000000; margin: 0px; overflow: hidden; border-radius: 2px;background-color: #cccccc; ";
    var bb7A1 = "font-family: Monospace; color: #000000; margin: 0px; overflow: hidden; border-radius: 2px; ";
    Qq1 = document.createElement("p"); Qq1.style = bb7; document.body.appendChild(Qq1);
    Qq1.innerHTML = "<h1><b><u>Quiz-Paper</u></b></h1>";
    Qq1.style.position = "absolute";
    Qq1.style.left = 25 + '%';
    Qq1.style.top = 10 - 4 + '%';
    Qq1.style.visibility = "hidden";

    Aq1 = document.createElement("p"); Aq1.style = bb7; document.body.appendChild(Aq1);
    Aq1.innerHTML = "<h1><b><u>Answer-Sheet</u></b></h1>";
    Aq1.style.position = "absolute";
    Aq1.style.left = 77 + '%';
    Aq1.style.top = 21 + '%';
    Aq1.style.visibility = "hidden";

    A11 = document.createElement("p"); A11.style = bb7A; document.body.appendChild(A11);
    A11.innerHTML = "<h3><b>Instructions :</b></h3>";
    A11.style.position = "absolute";
    A11.style.left = 8 -3+ '%';
    A11.style.top = 17.2 + 2 -4 + '%';
    A11.style.visibility = "hidden";

    A21 = document.createElement("p"); A21.style = bb7A1; document.body.appendChild(A21);
    A21.innerHTML = "<h3><b><ul><li>Answer the fill in the blanks in LOWER CASE alphabets.</li> <li>Do not put any extra blank space in your answer.</li></b></h3>";
    A21.style.position = "absolute";
    A21.style.left = 8 - 3 + '%';
    A21.style.top = 23.2 -2+ '%';
    A21.style.visibility = "hidden";

    A31 = document.createElement("p"); A31.style = bb7A; document.body.appendChild(A31);
    A31.innerHTML = "<h3><b>QUESTION 1 : Fill in the blanks:</b></h3>";
    A31.style.position = "absolute";
    A31.style.left = 8 - 3 + '%';
    A31.style.top = 30  + '%';
    A31.style.visibility = "hidden";

    var FillupsQ = "";
    FillupsQ = FillupsQ + "<p><br></p>";
    FillupsQ = FillupsQ + "<ol>";
    FillupsQ = FillupsQ + "<li>When electric current passes through a wire , it behaves like a ____________.</li>";
    FillupsQ = FillupsQ + "<li>If the current in the circuit is clockwise , the deflection of needle pointing <br>north is in ___________ direction.</li>";
    FillupsQ = FillupsQ + "<li>The number of batteries is ____________ propotional to the magnetic field <br>developed around the electromagnet.</li>";
    FillupsQ = FillupsQ + "<li>Poles of the electromagnet can be interchanged by reversing the _____________ <br>of the battery.</li>";
    FillupsQ = FillupsQ + "<li>Compass points towards _____________ north south of the earth.</li>";
    FillupsQ = FillupsQ + "</ol>";

    var bb7A2 = "font-family: Monospace; color: #000000; margin: 0px; overflow: hidden; border-radius: 2px; font-size: 14px";
    A41 = document.createElement("p"); A41.style = bb7A2; document.body.appendChild(A41);
    A41.innerHTML = "<h3><b>" + FillupsQ + "</b></h3>";
    A41.style.position = "absolute";
    A41.style.left = 8 - 3 + '%';
    A41.style.top = 35.2 -3 + '%';
    A41.style.visibility = "hidden";

    A51 = document.createElement("p"); A51.style = bb7A; document.body.appendChild(A51);
    A51.innerHTML = "<h3><b>QUESTION 2 : TRUE / False:</b></h3>";
    A51.style.position = "absolute";
    A51.style.left = 8 - 3 + '%';
    A51.style.top = 65.5  + '%';
    A51.style.visibility = "hidden";

    var TrueFalseQ = "";
    TrueFalseQ = TrueFalseQ + "<p><br></p>";
    TrueFalseQ = TrueFalseQ + "<ol>";
    TrueFalseQ = TrueFalseQ + "<li>Magnetic strength of the electromagnet is directly proportional to the <br> current in the circuit.</li>";
    TrueFalseQ = TrueFalseQ + "<li>Reversing the polarity of the cell  does not effect the polarity of the <br> electromagnet.</li>";
    TrueFalseQ = TrueFalseQ + "<li>Compass needle points to Magnetic North and South of the earth , if not acted <br>upon by any other magntic field.</li>";
    TrueFalseQ = TrueFalseQ + "<li>Two batteries joined , effect the magnitude of current in the circuit.</li>";
    TrueFalseQ = TrueFalseQ + "<li>Current carrying wire does not exhibit magnetic characteristics.</li>";
    TrueFalseQ = TrueFalseQ + "</ol>";

    A61 = document.createElement("p"); A61.style = bb7A2; document.body.appendChild(A61);
    A61.innerHTML = "<h3><b>" + TrueFalseQ + "</b></h3>";
    A61.style.position = "absolute";
    A61.style.left = 8 - 3 + '%';
    A61.style.top = 66 + '%';
    A61.style.visibility = "hidden";

    var q = "font-family: Monospace; color: #000000; margin: 0px; overflow: hidden; ";

    input1 = document.createElement("INPUT");
    input1.style = q;
    input1.style.position = "absolute";
    input1.style.left = 77 + '%';
    input1.style.top = 40  + '%';
    input1.setAttribute("type", "text");
    input1.setAttribute("id", "q1");
    document.body.appendChild(input1);
    input1.style.visibility = "hidden";
    
    input2 = document.createElement("INPUT");
    input2.style = q;
    input2.style.position = "absolute";
    input2.style.left = 77 + '%';
    input2.style.top = 45 + '%';
    input2.setAttribute("type", "text");
    input2.setAttribute("id", "q2");
    document.body.appendChild(input2);
    input2.style.visibility = "hidden";

    input3 = document.createElement("INPUT");
    input3.style = q;
    input3.style.position = "absolute";
    input3.style.left = 77 + '%';
    input3.style.top = 50 + '%';
    input3.setAttribute("type", "text");
    input3.setAttribute("id", "q3");
    document.body.appendChild(input3);
    input3.style.visibility = "hidden";

    input4 = document.createElement("INPUT");
    input4.style = q;
    input4.style.position = "absolute";
    input4.style.left = 77 + '%';
    input4.style.top = 55 + '%';
    input4.setAttribute("type", "text");
    input4.setAttribute("id", "q4");
    document.body.appendChild(input4);
    input4.style.visibility = "hidden";

    input5 = document.createElement("INPUT");
    input5.style = q;
    input5.style.position = "absolute";
    input5.style.left = 77 + '%';
    input5.style.top = 60 + '%';
    input5.setAttribute("type", "text");
    input5.setAttribute("id", "q5");
    document.body.appendChild(input5);
    input5.style.visibility = "hidden";

    inputT1 = document.createElement("INPUT");
    inputT1.style = q;
    inputT1.style.position = "absolute";
    inputT1.style.left = 77 + '%';
    inputT1.style.top = 74 + '%';
    inputT1.setAttribute("type", "radio");
    inputT1.setAttribute("id", "q1T");
    inputT1.setAttribute("name", "que1");
    inputT1.checked = false;
    document.body.appendChild(inputT1);
    inputT1.style.visibility = "hidden";

    inputF11 = document.createElement("INPUT");
    inputF11.style = q;
    inputF11.style.position = "absolute";
    inputF11.style.left = 84 + '%';
    inputF11.style.top = 74 + '%';
    inputF11.setAttribute("type", "radio");
    inputF11.setAttribute("id", "q1F");
    inputF11.setAttribute("name", "que1");
    inputF11.checked = false;
    document.body.appendChild(inputF11);
    inputF11.style.visibility = "hidden";

    inputT2 = document.createElement("INPUT");
    inputT2.style = q;
    inputT2.style.position = "absolute";
    inputT2.style.left = 77 + '%';
    inputT2.style.top = 79 + '%';
    inputT2.setAttribute("type", "radio");
    inputT2.setAttribute("id", "q1T");
    inputT2.setAttribute("name", "que2");
    inputT2.checked = false;
    document.body.appendChild(inputT2);
    inputT2.style.visibility = "hidden";

    inputF22 = document.createElement("INPUT");
    inputF22.style = q;
    inputF22.style.position = "absolute";
    inputF22.style.left = 84 + '%';
    inputF22.style.top = 79 + '%';
    inputF22.setAttribute("type", "radio");
    inputF22.setAttribute("id", "q1F");
    inputF22.setAttribute("name", "que2");
    inputF22.checked = false;
    document.body.appendChild(inputF22);
    inputF22.style.visibility = "hidden";

    inputT3 = document.createElement("INPUT");
    inputT3.style = q;
    inputT3.style.position = "absolute";
    inputT3.style.left = 77 + '%';
    inputT3.style.top = 84 + '%';
    inputT3.setAttribute("type", "radio");
    inputT3.setAttribute("id", "q1T");
    inputT3.setAttribute("name", "que3");
    inputT3.checked = false;
    document.body.appendChild(inputT3);
    inputT3.style.visibility = "hidden";

    inputF33 = document.createElement("INPUT");
    inputF33.style = q;
    inputF33.style.position = "absolute";
    inputF33.style.left = 84 + '%';
    inputF33.style.top = 84 + '%';
    inputF33.setAttribute("type", "radio");
    inputF33.setAttribute("id", "q1F");
    inputF33.setAttribute("name", "que3");
    inputF33.checked = false;
    document.body.appendChild(inputF33);
    inputF33.style.visibility = "hidden";

    inputT4 = document.createElement("INPUT");
    inputT4.style = q;
    inputT4.style.position = "absolute";
    inputT4.style.left = 77 + '%';
    inputT4.style.top = 89 + '%';
    inputT4.setAttribute("type", "radio");
    inputT4.setAttribute("id", "q1T");
    inputT4.setAttribute("name", "que4");
    inputT4.checked = false;
    document.body.appendChild(inputT4);
    inputT4.style.visibility = "hidden";

    inputF44 = document.createElement("INPUT");
    inputF44.style = q;
    inputF44.style.position = "absolute";
    inputF44.style.left = 84 + '%';
    inputF44.style.top = 89 + '%';
    inputF44.setAttribute("type", "radio");
    inputF44.setAttribute("id", "q1F");
    inputF44.setAttribute("name", "que4");
    inputF44.checked = false;
    document.body.appendChild(inputF44);
    inputF44.style.visibility = "hidden";

    inputT5 = document.createElement("INPUT");
    inputT5.style = q;
    inputT5.style.position = "absolute";
    inputT5.style.left = 77 + '%';
    inputT5.style.top = 94 + '%';
    inputT5.setAttribute("type", "radio");
    inputT5.setAttribute("id", "q1T");
    inputT5.setAttribute("name", "que5");
    inputT5.checked = false;
    document.body.appendChild(inputT5);
    inputT5.style.visibility = "hidden";

    inputF55 = document.createElement("INPUT");
    inputF55.style = q;
    inputF55.style.position = "absolute";
    inputF55.style.left = 84 + '%';
    inputF55.style.top = 94 + '%';
    inputF55.setAttribute("type", "radio");
    inputF55.setAttribute("id", "q1F");
    inputF55.setAttribute("name", "que5");
    inputF55.checked = false;
    document.body.appendChild(inputF55);
    inputF55.style.visibility = "hidden";

    var AnsTag = "";
    AnsTag = AnsTag + "<p><br></p>";
    AnsTag = AnsTag + "<ul>";
    AnsTag = AnsTag + "<li>ANS 1:</li>";
    AnsTag = AnsTag + "<li>ANS 2:</li>";
    AnsTag = AnsTag + "<li>ANS 3:</li>";
    AnsTag = AnsTag + "<li>ANS 4:</li>";
    AnsTag = AnsTag + "<li>ANS 5:</li>";
    AnsTag = AnsTag + "</ul>";

    var bb7A3 = "font-family: Monospace; color: #004d00; margin: 0px; overflow: hidden; border-radius: 2px; font-size: 25px";
    AnsT = document.createElement("p"); AnsT.style = bb7A3; document.body.appendChild(AnsT);
    AnsT.innerHTML = "<h3><b>" + AnsTag + "</b></h3>";
    AnsT.style.position = "absolute";
    AnsT.style.left = 66 + '%';
    AnsT.style.top = 25 + '%';
    AnsT.style.visibility = "hidden";

    var bb7A6 = "font-family: Monospace; color: #004d00; margin: 0px; overflow: hidden; border-radius: 2px; font-size: 23px";
    AnsTb = document.createElement("p"); AnsTb.style = bb7A6; document.body.appendChild(AnsTb);
    AnsTb.innerHTML = "<h3><b>" + AnsTag + "</b></h3>";
    AnsTb.style.position = "absolute";
    AnsTb.style.left = 66 + '%';
    AnsTb.style.top = 60 + '%';
    AnsTb.style.visibility = "hidden";

    vt1 = document.createElement("p"); vt1.style = bb7A2; document.body.appendChild(vt1);
    vt1.innerHTML = "<h3><b>TRUE</b></h3>";
    vt1.style.position = "absolute";
    vt1.style.left = 79 + '%';
    vt1.style.top = 71 + '%';
    vt1.style.visibility = "hidden";

    vf1 = document.createElement("p"); vf1.style = bb7A2; document.body.appendChild(vf1);
    vf1.innerHTML = "<h3><b>FALSE</b></h3>";
    vf1.style.position = "absolute";
    vf1.style.left = 86 + '%';
    vf1.style.top = 71 + '%';
    vf1.style.visibility = "hidden";

    vt2 = document.createElement("p"); vt2.style = bb7A2; document.body.appendChild(vt2);
    vt2.innerHTML = "<h3><b>TRUE</b></h3>";
    vt2.style.position = "absolute";
    vt2.style.left = 79 + '%';
    vt2.style.top = 76 + '%';
    vt2.style.visibility = "hidden";

    vf2 = document.createElement("p"); vf2.style = bb7A2; document.body.appendChild(vf2);
    vf2.innerHTML = "<h3><b>FALSE</b></h3>";
    vf2.style.position = "absolute";
    vf2.style.left = 86 + '%';
    vf2.style.top = 76 + '%';
    vf2.style.visibility = "hidden";

    vt3 = document.createElement("p"); vt3.style = bb7A2; document.body.appendChild(vt3);
    vt3.innerHTML = "<h3><b>TRUE</b></h3>";
    vt3.style.position = "absolute";
    vt3.style.left = 79 + '%';
    vt3.style.top = 81 + '%';
    vt3.style.visibility = "hidden";

    vf3 = document.createElement("p"); vf3.style = bb7A2; document.body.appendChild(vf3);
    vf3.innerHTML = "<h3><b>FALSE</b></h3>";
    vf3.style.position = "absolute";
    vf3.style.left = 86 + '%';
    vf3.style.top = 81 + '%';
    vf3.style.visibility = "hidden";

    vt4 = document.createElement("p"); vt4.style = bb7A2; document.body.appendChild(vt4);
    vt4.innerHTML = "<h3><b>TRUE</b></h3>";
    vt4.style.position = "absolute";
    vt4.style.left = 79 + '%';
    vt4.style.top = 86 + '%';
    vt4.style.visibility = "hidden";

    vf4 = document.createElement("p"); vf4.style = bb7A2; document.body.appendChild(vf4);
    vf4.innerHTML = "<h3><b>FALSE</b></h3>";
    vf4.style.position = "absolute";
    vf4.style.left = 86 + '%';
    vf4.style.top = 86 + '%';
    vf4.style.visibility = "hidden";

    vt5 = document.createElement("p"); vt5.style = bb7A2; document.body.appendChild(vt5);
    vt5.innerHTML = "<h3><b>TRUE</b></h3>";
    vt5.style.position = "absolute";
    vt5.style.left = 79 + '%';
    vt5.style.top = 91 + '%';
    vt5.style.visibility = "hidden";

    vf5 = document.createElement("p"); vf5.style = bb7A2; document.body.appendChild(vf5);
    vf5.innerHTML = "<h3><b>FALSE</b></h3>";
    vf5.style.position = "absolute";
    vf5.style.left = 86 + '%';
    vf5.style.top = 91 + '%';
    vf5.style.visibility = "hidden";

    Q1L = document.createElement("p"); Q1L.style = bb7A; document.body.appendChild(Q1L);
    Q1L.innerHTML = "<h3><b>Question: 1</b></h3>";
    Q1L.style.position = "absolute";
    Q1L.style.left = 68 + '%';
    Q1L.style.top = 32 + '%';
    Q1L.style.visibility = "hidden";

    Q2L = document.createElement("p"); Q2L.style = bb7A; document.body.appendChild(Q2L);
    Q2L.innerHTML = "<h3><b>Question: 2</b></h3>";
    Q2L.style.position = "absolute";
    Q2L.style.left = 68 + '%';
    Q2L.style.top = 66 + '%';
    Q2L.style.visibility = "hidden";

    var SBS = "font-family: Monospace; color: #ffffff; margin: 0px; overflow: hidden; font-size: 20px; padding: 8px 22px;border-radius: 20px;background-color: #555555;";
    submit = document.createElement("button");
    submit.setAttribute("id", "submit");
    submit.style = SBS;
    submit.innerHTML = "Submit Answers"; document.body.appendChild(submit);
    submit.style.position = "absolute";
    submit.style.left = 48 + '%';
    submit.style.top = 7 + '%';
    submit.addEventListener("click", evaluateScore);
    submit.style.visibility = "hidden";

    var DAS = "font-family: Monospace; color: #ffffff; margin: 0px; overflow: hidden;background-color: #66ff33; border-radius: 35px; padding: 3px 6px";//59EE21
    score = document.createElement("p"); score.style = DAS; document.body.appendChild(score);
    score.innerHTML = "<h1><b>" + 0 + "/10</b></h1>";
    score.style.position = "absolute";
    score.style.left = 52 + '%';
    score.style.top = 18 + '%';
    score.style.visibility = "hidden";

    //model of DisplayR1
    var DisplayR1 = "";
    DisplayR1 = DisplayR1 + "<p><br></p>";
    DisplayR1 = DisplayR1 + "<ol>";
    DisplayR1 = DisplayR1 + "<li>Magnetic strength of the electromagnet .</li>";
    DisplayR1 = DisplayR1 + "<li>Reversing the polarity of the cell  does.</li>";
    DisplayR1 = DisplayR1 + "<li>Compass needle points to Magnetic North and .</li>";
    DisplayR1 = DisplayR1 + "<li>Two batteries joined , effect the magnitude .</li>";
    DisplayR1 = DisplayR1 + "<li>Current carrying .</li>";
    DisplayR1 = DisplayR1 + "</ol>";

    var bb7A20 = "font-family: Monospace; margin: 0px; overflow: hidden; border-radius: 2px; font-size: 12px";

    Answer1 = document.createElement("p"); Answer1.style = bb7A20; document.body.appendChild(Answer1);
    Answer1.innerHTML = "<h3><b>" + DisplayR1 + "</b></h3>";
    Answer1.style.position = "absolute";
    Answer1.style.left = 66 + '%';
    Answer1.style.top = 32.5 + '%';
    Answer1.style.visibility = "hidden";

    Answer2 = document.createElement("p"); Answer2.style = bb7A20; document.body.appendChild(Answer2);
    Answer2.innerHTML = "<h3><b>" + DisplayR1 + "</b></h3>";
    Answer2.style.position = "absolute";
    Answer2.style.left = 66 + '%';
    Answer2.style.top = 66.5 + '%';
    Answer2.style.visibility = "hidden";
    
    var EBS = "font-family: Monospace; color: #ffffff; margin: 0px; overflow: hidden; font-size: 20px; padding: 8px 16px; border-radius: 20px;background-color: #555555;";
    Experiment = document.createElement("button");
    Experiment.setAttribute("id", "StartEXP");
    Experiment.style = EBS;
    Experiment.innerHTML = "Experiment"; document.body.appendChild(Experiment);
    Experiment.style.position = "absolute";
    Experiment.style.left = 48 + '%';
    Experiment.style.top = 7 + '%';
    Experiment.addEventListener("click", StartExperiment);
    Experiment.style.visibility = "hidden";
}
var north;
var south;
function loadExperimentElements()
{
    var geo;
    var geometry;
    var material;

    createQuiz();

    
    PIEsetExperimentTitle("A Magnetic effect of electric current");
    PIEsetDeveloperName("Siddharth Acharya");
    PIEhideControlElement();

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();
    
    initialiseScene();

    initialiseOtherVariables();

    line = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 1.0), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line.position.set(0.5 - 1 , 1.5 , 0.0);
    line.castShadow = true;
    PIEaddElement(line);

    line1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.43), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line1.position.set(3.5-1, 1.22 , 0.0);
    line1.castShadow = true;
    PIEaddElement(line1);

    line1a = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.28), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line1a.position.set(3.5-1, 1.87, 0.0);
    line1a.castShadow = true;
    PIEaddElement(line1a);

    line2 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 3.0), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line2.position.set(2-1, 1 , 0.0);
    line2.castShadow = true;
    line2.rotateZ(Math.PI / 2);
    PIEaddElement(line2);

    line3a = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 3), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    line3a.position.set(2-1, 2, 0.0);
    line3a.rotateZ(Math.PI / 2);
    PIEaddElement(line3a);
    line3a.castShadow = false;
    //line3a.receiveShadow = false;

    
    geometry = new THREE.CylinderGeometry(0.08, 0.08, 0.05);
    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
    battery = new THREE.Mesh(geometry, material);
    battery.position.set(0.53-1, 1.82+0.034 , 0.1);
    PIEaddElement(battery);
    battery.castShadow = false;

    
    geometry = new THREE.CylinderGeometry(0.08, 0.08, 0.1);
    material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    battery1 = new THREE.Mesh(geometry, material);
    battery1.position.set(0.53-1, 1.67+0.099 , 0.1);
    PIEaddElement(battery1);
    battery1.castShadow = false;

    
    geometry = new THREE.CylinderGeometry(0.04,0.04, 0.03);
    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
    batteryT = new THREE.Mesh(geometry, material);
    batteryT.position.set(0.53-1, 1.9  , 0.1);
    PIEaddElement(batteryT);
    batteryT.castShadow = false;

    
    geometry = new THREE.CylinderGeometry(0.08, 0.08, 0.05);
    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
    battery2 = new THREE.Mesh(geometry, material);
    battery2.position.set(0.53-1, 1.33 +0.229, 0.1);
    PIEaddElement(battery2);
    battery2.castShadow = false;

    
    geometry = geometry = new THREE.CylinderGeometry(0.08, 0.08, 0.1);
    material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    battery2b = new THREE.Mesh(geometry, material);
    battery2b.position.set(0.53-1, 1.18 +0.3, 0.1);
    PIEaddElement(battery2b);
    battery2b.castShadow = false;

   
    geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.03);
    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
    battery2T = new THREE.Mesh(geometry, material);
    battery2T.position.set(0.53-1, 1.4+0.201, 0.1);
    PIEaddElement(battery2T);
    battery2T.castShadow = false;

    geometry = new THREE.CylinderGeometry(0.08, 0.08, 0.05);
    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
    battery3 = new THREE.Mesh(geometry, material);
    battery3.position.set(0.53 - 1, 1.33 -0.07, 0.1);
    PIEaddElement(battery3);
    battery3.castShadow = false;


    geometry = new THREE.CylinderGeometry(0.08, 0.08, 0.1);
    material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    battery3b = new THREE.Mesh(geometry, material);
    battery3b.position.set(0.53 - 1, 1.18 , 0.1);
    PIEaddElement(battery3b);
    battery3b.castShadow = false;


    geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.03);
    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
    battery3T = new THREE.Mesh(geometry, material);
    battery3T.position.set(0.53 - 1, 1.4 -0.0962 , 0.1);
    PIEaddElement(battery3T);
    battery3T.castShadow = false;



    geometry = new THREE.CylinderGeometry(0.08, 0.08, 0.05);
    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
    batteryR = new THREE.Mesh(geometry, material);
    batteryR.position.set(0.53 - 1, 1.62 + 0.07, 0.1);
    PIEaddElement(batteryR);
    batteryR.castShadow = false;


    geometry = new THREE.CylinderGeometry(0.08, 0.08, 0.1);
    material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    battery1R = new THREE.Mesh(geometry, material);
    battery1R.position.set(0.53-1, 1.77 , 0.1);
    PIEaddElement(battery1R);
    battery1R.castShadow = false;


    geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.03);
    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
    batteryTR = new THREE.Mesh(geometry, material);
    batteryTR.position.set(0.53-1, 1.56 +0.09, 0.1);
    PIEaddElement(batteryTR);
    batteryTR.castShadow = false;


    geometry = new THREE.CylinderGeometry(0.08, 0.08, 0.05);
    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
    battery2R = new THREE.Mesh(geometry, material);
    battery2R.position.set(0.53 - 1, 1.13 + 0.07 + 0.2, 0.1);
    PIEaddElement(battery2R);
    battery2R.castShadow = false;


    geometry = new THREE.CylinderGeometry(0.08, 0.08, 0.1);
    material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    battery2bR = new THREE.Mesh(geometry, material);
    battery2bR.position.set(0.53 - 1, 1.28 + 0.2, 0.1);
    PIEaddElement(battery2bR);
    battery2bR.castShadow = false;


    geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.03);
    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
    battery2TR = new THREE.Mesh(geometry, material);
    battery2TR.position.set(0.53-1, 1.06 +0.10 +0.2, 0.1);
    PIEaddElement(battery2TR);
    battery2TR.castShadow = false;

    geometry = new THREE.CylinderGeometry(0.08, 0.08, 0.05);
    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
    battery3R = new THREE.Mesh(geometry, material);
    battery3R.position.set(0.53 - 1, 1.13 + 0.07 -0.06 , 0.1);
    PIEaddElement(battery3R);
    battery3R.castShadow = false;


    geometry = new THREE.CylinderGeometry(0.08, 0.08, 0.1);
    material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    battery3bR = new THREE.Mesh(geometry, material);
    battery3bR.position.set(0.53 - 1, 1.28 - 0.06, 0.1);
    PIEaddElement(battery3bR);
    battery3bR.castShadow = false;


    geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.03);
    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
    battery3TR = new THREE.Mesh(geometry, material);
    battery3TR.position.set(0.53 - 1, 1.06 + 0.10 - 0.06, 0.1);
    PIEaddElement(battery3TR);
    battery3TR.castShadow = false;

    
    geometry = new THREE.BoxGeometry(0.50 , 0.25, 0.25);
    material = new THREE.MeshLambertMaterial({ color: 0xbfbfbf });
    resistor = new THREE.Mesh(geometry, material);
    resistor.position.set(2 - 0.5-1, 1 , 0.1);
    resistor.rotateX(Math.PI / 30);
    resistor.rotateY(Math.PI / 20);
    PIEaddElement(resistor);
    resistor.castShadow = false;

    
    res = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.3), new THREE.MeshLambertMaterial({ color: 0xDAA520 }));
    res.position.set(2-0.5-1, 1.18, 0.1);
    res.castShadow = true;
    res.rotateZ(Math.PI / 2);
    res.rotateX(Math.PI / 8);
    res.rotateY(Math.PI / 2);
    PIEaddElement(res);
    
    
    L = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.04), new THREE.MeshLambertMaterial({ color: 0x000033 }));
    L.position.set(2-0.5-1, 1.18 , 0.12);
    PIEaddElement(L);
    L.castShadow = false;

   
    L1 = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.04), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    L1.position.set(2.08-0.5-1, 1.18 , 0.12);
    PIEaddElement(L1);
    L1.castShadow = false;

    
    L2 = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.04), new THREE.MeshLambertMaterial({ color: 0x008000 }));
    L2.position.set(1.92-0.5-1, 1.18 , 0.18);
    PIEaddElement(L2);
    L2.castShadow = false;

    
    L3 = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.08), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    L3.position.set(1.86-0.5-1, 1.16 , 0.18);
    PIEaddElement(L3);
    L3.castShadow = false;
    
    
    L4 = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.08), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    L4.position.set(2.14-0.5 - 0.97, 1.16 , 0.18);
    PIEaddElement(L4);
    L4.castShadow = false;
    
    //geometry = new THREE.BoxGeometry(0.8, 0.4, 0.35);
    geometry = new THREE.CylinderGeometry(0.21, 0.21,0.80, 32);
    material = new THREE.MeshLambertMaterial({ color: 0x8A8974 }); // for box color : 0x6666cc
    Magnet = new THREE.Mesh(geometry, material);
    Magnet.position.set(2.02-1, 2.005, 0.14); //z axis for box was 0.1 , x-axis = 2.02 - 1 , y = 2 , z = 0.12;
    Magnet.rotateZ(Math.PI / 2);
    //Magnet.rotateX(Math.PI / 6);
    PIEaddElement(Magnet);

    geometry = new THREE.CircleGeometry(0.18, 32);
    compass = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0xa6a6a6, opacity: 0.5 }));
    compass.position.set(2-1, 2, 0.35);
    PIEaddElement(compass);
    compass.castShadow = false;
    compass.receiveShadow = false;

    compasR = new THREE.Mesh(new THREE.RingGeometry(0.18, 0.19, 32), new THREE.MeshLambertMaterial({ color: 0x993300, opacity: 0.5 }));
    compasR.position.set(2 -1, 2 , 0.35);//2
    PIEaddElement(compasR);
    compasR.castShadow = false;

    geometry = new THREE.CircleGeometry(0.022, 32);
    innerCircle = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0x000000, opacity: 0.5 }));
    innerCircle.position.set(2-1, 2, 0.35);
    PIEaddElement(innerCircle);
    innerCircle.castShadow = false;
    innerCircle.receiveShadow = false;

    geometry = new THREE.ConeGeometry(0.02,0.15 , 32);
    needle = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0x000000, opacity: 0.5 }));
    needle.position.set(2-1, 2.06, 0.35);
    PIEaddElement(needle);
    needle.castShadow = false;
    needle.receiveShadow = false;
    //needle.rotateZ(Math.PI / 18 * 5);
    //needle.position.set(2 - 0.013*5, 2.06 - 0.002*5, 0.2);
    
    geometry = new THREE.ConeGeometry(0.02, 0.15, 32);
    needle1 = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0x000000, opacity: 0.5 }));
    needle1.position.set(2-1, 1.91, 0.35);
    PIEaddElement(needle1);
    needle1.castShadow = false;
    needle1.receiveShadow = false;
    needle1.rotateZ(Math.PI);
    //needle1.rotateZ(Math.PI / 18 * 5);
    //needle1.position.set(2 + 0.014*5, 1.92 + 0.002*5, 0.2);

    // Right-Side Compass
    geometry = new THREE.CircleGeometry(0.21, 32);
    compass2 = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0xa6a6a6, opacity: 0.5 }));
    compass2.position.set(2 +1.9, 2-1, 0.35);
    PIEaddElement(compass2);
    compass2.castShadow = false;
    compass2.receiveShadow = false;

   
    geometry = new THREE.CircleGeometry(0.022, 32);
    innerCircle2 = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0x000000, opacity: 0.5 }));
    innerCircle2.position.set(2 +1.9, 2-1, 0.35);
    PIEaddElement(innerCircle2);
    innerCircle2.castShadow = false;
    innerCircle2.receiveShadow = false;

    geometry = new THREE.ConeGeometry(0.02, 0.15, 32);
    needle2 = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0x000000, opacity: 0.5 }));
    needle2.position.set(2 + 1.9, 2.06 - 1, 0.35);
    PIEaddElement(needle2);
    needle2.castShadow = false;
    needle2.receiveShadow = false;
   // needle2.rotateZ(-Math.PI / 18 * 4);
    //needle2.position.set(2 + 1.9 + 0.011 * 4, 2.06 - 1 + 0.002 * 4, 0.35);

    geometry = new THREE.ConeGeometry(0.02, 0.15, 32);
    needle12 = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0x000000, opacity: 0.5 }));
    needle12.position.set(2 + 1.9, 1.91 - 1, 0.35);
    PIEaddElement(needle12);
    needle12.castShadow = false;
    needle12.receiveShadow = false;
    needle12.rotateZ(Math.PI);
    //needle12.rotateZ(-Math.PI / 18 * 4);
    //needle12.position.set(2 + 1.9 - 0.016 * 4, 1.925 - 1 - 0.001 * 4, 0.35);

    compassring = new THREE.Mesh(new THREE.RingGeometry(0.22, 0.25, 32), new THREE.MeshLambertMaterial({ color: 0x331a00, opacity: 0.5 }));
    compassring.position.set(2 + 1.9, 2-1, 0.35);//2
    PIEaddElement(compassring);
    compassring.castShadow = false;

    compassringI = new THREE.Mesh(new THREE.RingGeometry(0.21, 0.22, 32), new THREE.MeshLambertMaterial({ color: 0x993300, opacity: 0.5 }));
    compassringI.position.set(2 + 1.9, 2 - 1, 0.35);//2
    PIEaddElement(compassringI);
    compassringI.castShadow = false;
   
    var geometry = new THREE.RingGeometry(0.22, 0.25, 32);//3
    var material = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide });
    wire = new THREE.Mesh(geometry, material);
    wire.position.set(2 + 0.125 -1, 1.99, 0.30);
    wire.rotateY(Math.PI / 3);
    wire.rotateX(Math.PI / 10);
    PIEaddElement(wire);
    wire.castShadow = false;

    wire2 = new THREE.Mesh(new THREE.RingGeometry(0.22, 0.25, 32), new THREE.MeshLambertMaterial({ color: 0xff0000, opacity: 0.5 }));
    wire2.position.set(2 -1, 1.99, 0.30);//2
    wire2.rotateY(Math.PI / 3);
    wire2.rotateX(Math.PI / 10);
    PIEaddElement(wire2);
    wire2.castShadow = false;
    
    wire1 = new THREE.Mesh( new THREE.RingGeometry(0.22, 0.25, 32), new THREE.MeshLambertMaterial({ color: 0xff0000, opacity: 0.5 }));
    wire1.position.set(2 - 0.125-1, 1.99, 0.30);//1
    wire1.rotateY(Math.PI / 3);
    wire1.rotateX(Math.PI / 10);
    PIEaddElement(wire1);
    wire1.castShadow = false;

    wire3 = new THREE.Mesh(new THREE.RingGeometry(0.22, 0.25, 32), new THREE.MeshLambertMaterial({ color: 0xff0000, opacity: 0.5 }));
    wire3.position.set(2 + 0.25-1, 1.99, 0.30);//1
    wire3.rotateY(Math.PI / 3);
    wire3.rotateX(Math.PI / 10);
    PIEaddElement(wire3);
    wire3.castShadow = false;

    part = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 2.5), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    part.position.set(3.5 - 0.5, 1.5, 0.0);
    PIEaddElement(part);


    geometry = new THREE.BoxGeometry(0.3, 0.2, 0.2);
    material = new THREE.MeshLambertMaterial({ color: 0x0033cc });
    Magnet1R = new THREE.Mesh(geometry, material);
    Magnet1R.position.set(4 + 0.15, 1.8, 0.1);
    PIEaddElement(Magnet1R);

    geometry = new THREE.BoxGeometry(0.3, 0.2, 0.2);
    material = new THREE.MeshLambertMaterial({ color: 0xff0000 });
    Magnet1L = new THREE.Mesh(geometry, material);
    Magnet1L.position.set(4 - 0.15, 1.8, 0.1);
    PIEaddElement(Magnet1L);

    geometry = new THREE.BoxGeometry(0.4, 0.25, 0.2);
    material = new THREE.MeshLambertMaterial({ color: 0x0033cc });
    Magnet2R = new THREE.Mesh(geometry, material);
    Magnet2R.position.set(4 + 0.15 + 0.05, 1.8, 0.1);
    PIEaddElement(Magnet2R);
    Magnet2R.castShadow = false;

    geometry = new THREE.BoxGeometry(0.4, 0.25, 0.2);
    material = new THREE.MeshLambertMaterial({ color: 0xff0000 });
    Magnet2L = new THREE.Mesh(geometry, material);
    Magnet2L.position.set(4 - 0.15 -0.05, 1.8, 0.1);
    PIEaddElement(Magnet2L);

    geometry = new THREE.BoxGeometry(0.5, 0.3, 0.2);
    material = new THREE.MeshLambertMaterial({ color: 0x0033cc });
    Magnet3R = new THREE.Mesh(geometry, material);
    Magnet3R.position.set(4 + 0.15 +0.1, 1.8, 0.1);
    PIEaddElement(Magnet3R);
    Magnet3R.castShadow = false;

    geometry = new THREE.BoxGeometry(0.5, 0.3, 0.2);
    material = new THREE.MeshLambertMaterial({ color: 0xff0000 });
    Magnet3L = new THREE.Mesh(geometry, material);
    Magnet3L.position.set(4 - 0.15 -0.1, 1.8, 0.1);
    PIEaddElement(Magnet3L);

    
    var bb = "font-family: Monospace ; color: #ff0000; margin: 0px; overflow: hidden;";
    var bb1 = "font-family: Monospace; color: #000000; margin: 0px; overflow: hidden; ";
    var bb2 = "font-family: Monospace; color: #000000; margin: 0px; overflow: hidden;";
    var bb3 = "font-family: Monospace; color: #000000; margin: 0px; overflow: hidden; font-size: 30px;";
    var bb4 = "font-family: Monospace; color: #00e600; margin: 0px; overflow: hidden; ; background-color: #00e600 ;border-style: inset;";
    var bb5 = "font-family: Monospace; color: #ff0000; margin: 0px; overflow: hidden; ; background-color: #ff0000 ;border-style: inset;";
    
    REStext = document.createElement("p"); REStext.style = bb1; document.body.appendChild(REStext);
    REStext.innerHTML = "<h4>Resistance</h4>";
    REStext.style.position = "absolute";
    REStext.style.left =  47.5 - 8.5 -17 + '%';
    REStext.style.top =  63  + '%';
    
    REStext1 = document.createElement("span"); REStext1.style = bb; document.body.appendChild(REStext1);
    REStext1.innerHTML = "<h3>+</h3>";
    REStext1.style.position = "absolute";
    REStext1.style.left = 25.5 - 1.5 - 16.5 + 1.7  + '%';
    REStext1.style.top = 39.5 - 4.5 -0.6 + '%';
    
    REStext2 = document.createElement("span"); REStext2.style = bb2; document.body.appendChild(REStext2);
    REStext2.innerHTML = "<h3>-</h3>";
    REStext2.style.position = "absolute";
    REStext2.style.left = 25.5 - 1.5 - 16.5 + 1.7  + '%';
    REStext2.style.top = 46 - 8.5  + '%';

    REStext1a = document.createElement("span"); REStext1a.style = bb; document.body.appendChild(REStext1a);
    REStext1a.innerHTML = "<h3>+</h3>";
    REStext1a.style.position = "absolute";
    REStext1a.style.left = 25.5 - 1.5 - 16.5 + 1.7  + '%';
    REStext1a.style.top = 39.5 - 4.5 - 0.6 +9.9 + '%';

    REStext2a = document.createElement("span"); REStext2a.style = bb2; document.body.appendChild(REStext2a);
    REStext2a.innerHTML = "<h3>-</h3>";
    REStext2a.style.position = "absolute";
    REStext2a.style.left = 25.5 - 1.5 - 16.5 + 1.7  + '%';
    REStext2a.style.top = 46 - 8.5 + 9.9 + '%';

    REStext1b = document.createElement("span"); REStext1b.style = bb; document.body.appendChild(REStext1b);
    REStext1b.innerHTML = "<h3>+</h3>";
    REStext1b.style.position = "absolute";
    REStext1b.style.left = 25.5 - 1.5 - 16.5 + 1.7  + '%';
    REStext1b.style.top = 39.5 - 4.5 - 0.6 + 20.2 + '%';

    REStext2b = document.createElement("span"); REStext2b.style = bb2; document.body.appendChild(REStext2b);
    REStext2b.innerHTML = "<h3>-</h3>";
    REStext2b.style.position = "absolute";
    REStext2b.style.left = 25.5 - 1.5 - 16.5 + 1.7  + '%';
    REStext2b.style.top = 46 - 8.5 + 20.2 + '%';

    north = document.createElement("span"); north.style = bb2; document.body.appendChild(north);
    north.innerHTML = "<h1>N</h1>";
    north.style.position = "absolute";
    north.style.left = 80.5 + '%';
    north.style.top = 35 + '%';
    north.style.fontSize = 13 + "px";

    south = document.createElement("span"); south.style = bb2; document.body.appendChild(south);
    south.innerHTML = "<h1>S</h1>";
    south.style.position = "absolute";
    south.style.left = 85.5 + '%';
    south.style.top = 35 + '%';
    south.style.fontSize = 13 + "px";

    geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.06);
    material = new THREE.MeshLambertMaterial({ color: 0x111111 });
    BulbH = new THREE.Mesh(geometry, material);
    BulbH.position.set(2.7-1, 1, 0.0);
    PIEaddElement(BulbH);
    BulbH.castShadow = false;

    geo = new THREE.Shape();
    geo.moveTo(2.8-1, 1.03);
    geo.quadraticCurveTo( 2.82-1,1.1 ,2.82-1 , 1.1);
    geo.quadraticCurveTo(2.7-1,1.45,2.58-1,1.1);
    geo.quadraticCurveTo(2.6-1,1.03,2.6-1,1.03);
    geometry = new THREE.ShapeGeometry(geo);
    Bulb = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0xa6a6a6 }));
    PIEaddElement(Bulb);

    geo = new THREE.Shape();
    geo.moveTo(2.72-1, 0.97);
    geo.quadraticCurveTo(2.7-1,0.89, 2.68-1, 0.97);
    geometry = new THREE.ShapeGeometry(geo);
    BulbB = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0x222222 }));
    PIEaddElement(BulbB);
    
    var bb9 = "font-family: Monospace; color: #cc8800; margin: 0px; overflow: hidden;background-color: #cc8800;font-size: 23px;  transform: rotate(-27deg);";
    SwitchText = document.createElement("p"); SwitchText.style = bb9; document.body.appendChild(SwitchText);
    SwitchText.innerHTML = "<h6>S</h6>";
    SwitchText.style.position = "absolute";
    SwitchText.style.left = 75 - 16.5 + 1.6 + '%';
    SwitchText.style.top = 40 + '%';
    SwitchText.addEventListener("click", PIEstartAnimation);

    var bb10 = "font-family: Monospace; color: #cc8800; margin: 0px; overflow: hidden;background-color: #cc8800;font-size: 22px;  transform: rotate(0deg);";
    SwitchText1 = document.createElement("p"); SwitchText1.style = bb10; document.body.appendChild(SwitchText1);
    SwitchText1.innerHTML = "<h6>S</h6>";
    SwitchText1.style.position = "absolute";
    SwitchText1.style.left = 73.7 - 16.5 + 1.6 + '%';//+ 1.6
    SwitchText1.style.top = 40 + '%';
    SwitchText1.addEventListener("click", PIEresetExperiment);


    dir = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.2), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    dir.position.set(0.6-1, 2 , 0.0);
    dir.rotateZ(Math.PI / 2);
    PIEaddElement(dir);
    dir.castShadow = false;

    aro = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.05), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    aro.position.set(0.7-1, 2.01 , 0.0);
    aro.rotateZ(Math.PI / 4);
    PIEaddElement(aro);
    aro.castShadow = false;

    aro1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.05), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    aro1.position.set(0.7-1, 1.99 , 0.0);
    aro1.rotateZ(-Math.PI / 4);
    PIEaddElement(aro1);
    aro1.castShadow = false;

    f = 0;
    c = 0;
    u = 0;


    dirR = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.2), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    dirR.position.set(0.6-1, 1, 0.0);
    dirR.rotateZ(Math.PI / 2);
    PIEaddElement(dirR);
    dirR.castShadow = false;

    aroR = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.05), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    aroR.position.set(0.7-1, 1.01, 0.0);
    aroR.rotateZ(Math.PI / 4);
    PIEaddElement(aroR);
    aroR.castShadow = false;

    aroR1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.05), new THREE.MeshLambertMaterial({ color: 0x000000 }));
    aroR1.position.set(0.7-1, 0.99, 0.0);
    aroR1.rotateZ(-Math.PI / 4);
    PIEaddElement(aroR1);
    aroR1.castShadow = false;

    f1 = 0;
    c1 = 0;
    u1 = 0;

    bb = "font-family: Monospace ; color: #000000; margin: 0px; overflow: hidden;";
    bb2 = "font-family: Monospace; color: #ff0000; margin: 0px; overflow: hidden;";

    REStext12 = document.createElement("span"); REStext12.style = bb; document.body.appendChild(REStext12);
    REStext12.innerHTML = "<h3>-</h3>";
    REStext12.style.position = "absolute";
    REStext12.style.left = 25.5 - 1.5 - 16.5 + 1.7 + '%';
    REStext12.style.top = 39.5 - 4.5 - 0.6 +2.5 + '%';

    REStext22 = document.createElement("span"); REStext22.style = bb2; document.body.appendChild(REStext22);
    REStext22.innerHTML = "<h3>+</h3>";
    REStext22.style.position = "absolute";
    REStext22.style.left = 25.5 - 1.5 - 16.5 + 1.7  + '%';
    REStext22.style.top = 46 - 8.5 + 2.5 + '%';

    REStext1a2 = document.createElement("span"); REStext1a2.style = bb; document.body.appendChild(REStext1a2);
    REStext1a2.innerHTML = "<h3>-</h3>";
    REStext1a2.style.position = "absolute";
    REStext1a2.style.left = 25.5 - 1.5 - 16.5 + 1.7  + '%';
    REStext1a2.style.top = 39.5 - 4.5 - 0.6 + 9.9 + 2.5 + '%';

    REStext2a2 = document.createElement("span"); REStext2a2.style = bb2; document.body.appendChild(REStext2a2);
    REStext2a2.innerHTML = "<h3>+</h3>";
    REStext2a2.style.position = "absolute";
    REStext2a2.style.left = 25.5 - 1.5 - 16.5 + 1.7  + '%';
    REStext2a2.style.top = 46 - 8.5 + 9.9 + 2.5 + '%';

    REStext1b2 = document.createElement("span"); REStext1b2.style = bb; document.body.appendChild(REStext1b2);
    REStext1b2.innerHTML = "<h3>-</h3>";
    REStext1b2.style.position = "absolute";
    REStext1b2.style.left = 25.5 - 1.5 - 16.5 + 1.7  + '%';
    REStext1b2.style.top = 39.5 - 4.5 - 0.6 + 20.2 + 1 + '%';

    REStext2b2 = document.createElement("span"); REStext2b2.style = bb2; document.body.appendChild(REStext2b2);
    REStext2b2.innerHTML = "<h3>+</h3>";
    REStext2b2.style.position = "absolute";
    REStext2b2.style.left = 25.5 - 1.5 - 16.5 + 1.7  + '%';
    REStext2b2.style.top = 46 - 8.5 + 20.2 + 1 + '%';

    /*Background*/
    geometry = new THREE.BoxGeometry(mySceneW * 2, mySceneH *2, wallThickness);
    material = new THREE.MeshLambertMaterial({ color: 0xFDF6D5 });
    myBack = new THREE.Mesh(geometry, material);
    myBack.position.set(myCenterX, myCenterY, -1.5 * wallThickness);
    PIEaddElement(myBack);
    myBack.receiveShadow = false;

    initialiseControls();

    PIEstopButton.addEventListener("click", PIEresetExperiment);

    resetExperiment();

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    
}
function resetExperiment()
{
    StartExperiment();

    north.innerHTML = "<h1>N</h1>";
    south.innerHTML = "<h1>S</h1>";

    north.style.left = 80.5 + '%';
    south.style.left = 85.5 + '%';

    if (temp == 1) {
        needle.rotateZ(Math.PI / 18 * totalCurrent);
        needle.position.set(2 -1, 2.06 , 0.35);
        needle1.rotateZ(Math.PI / 18 * totalCurrent);
        needle1.position.set(2 - 1, 1.91, 0.35);

        needle2.rotateZ(Math.PI / 18 * totalCurrent);
        needle2.position.set(2 + 1.9, 2.06 - 1, 0.35);
        needle12.rotateZ(Math.PI / 18 * totalCurrent);
        needle12.position.set(2 + 1.9, 1.91 - 1, 0.35);
        temp = 0;
    }
    if (flag == 1) {
        needle.rotateZ(Math.PI / 18 * totalCurrent);
        needle1.rotateZ(Math.PI / 18 * totalCurrent);
        needle.position.set(2-1, 2.06, 0.35);
        needle1.position.set(2 - 1, 1.91, 0.35);

        needle2.rotateZ(Math.PI / 18 * totalCurrent);
        needle12.rotateZ(Math.PI / 18 * totalCurrent);
        needle2.position.set(2 + 1.9, 2.06 - 1, 0.35);
        needle12.position.set(2 + 1.9, 1.91 - 1, 0.35);
        flag = 0;
    }
    Magnet1R.scale.set(1, 1, 1);
    Magnet1L.scale.set(1, 1, 1);
    Magnet2R.scale.set(0, 0, 0);
    Magnet2L.scale.set(0, 0, 0);
    Magnet3R.scale.set(0, 0, 0);
    Magnet3L.scale.set(0, 0, 0);
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

    Magnet1R.position.set(4 + 0.15, 1.8, 0.1);
    Magnet1L.position.set(4 - 0.15, 1.8, 0.1);
    Magnet2R.position.set(4 + 0.15 + 0.05, 1.8, 0.1);
    Magnet2L.position.set(4 - 0.15 - 0.05, 1.8, 0.1);
    Magnet3R.position.set(4 + 0.15 + 0.1, 1.8, 0.1);
    Magnet3L.position.set(4 - 0.15 - 0.1, 1.8, 0.1);

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
    battery3R.scale.set(0, 0, 0);
    battery3bR.scale.set(0, 0, 0);
    battery3TR.scale.set(0, 0, 0);
    REStext.style.visibility = "visible";

    REStext1.style.visibility = "visible";
    REStext2.style.visibility = "visible";
    REStext1a.style.visibility = "hidden";
    REStext2a.style.visibility = "hidden";
    REStext1b.style.visibility = "hidden";
    REStext2b.style.visibility = "hidden";

    REStext12.style.visibility = "hidden";
    REStext22.style.visibility = "hidden";
    REStext1a2.style.visibility = "hidden";
    REStext2a2.style.visibility = "hidden";
    REStext1b2.style.visibility = "hidden";
    REStext2b2.style.visibility = "hidden";

    totalCurrent = 0;
    cellNo = 1;
    totalVoltage = 8;
    
    battery.scale.set(1, 1, 1);
    battery1.scale.set(1, 1, 1);
    batteryT.scale.set(1, 1, 1);
    battery2.scale.set(0, 0, 0);
    battery2b.scale.set(0, 0, 0);
    battery2T.scale.set(0, 0, 0);
    battery3.scale.set(0, 0, 0);
    battery3b.scale.set(0, 0, 0);
    battery3T.scale.set(0, 0, 0);

    //PIEchangeInputSlider(voltage, voltageV);
    //PIEchangeInputSlider(voltage2, voltageV2);

    if (dir.position.x == 3.5 -1) {
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
    else if (dir.position.x == 0.5 -1) {
        dir.rotateZ(Math.PI / 2);
        aro.rotateZ(-Math.PI/2);
        aro1.rotateZ(-Math.PI/2); 
        f = 0;
        c = 0;
        u = 0;
    }
    dir.position.set(0.6-1, 2, 0.0);
    aro.position.set(0.7-1, 2.01, 0.0);
    aro1.position.set(0.7-1, 1.99, 0.0);

    if (dirR.position.x == 3.5-1) {
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
    else if (dirR.position.x == 0.5-1) {
        dirR.rotateZ(Math.PI / 2);
        aroR.rotateZ(-Math.PI / 2);
        aroR1.rotateZ(Math.PI / 2);
        f1 = 0;
        c1 = 0;
        u1 = 0;
    }
    dirR.position.set(0.6-1, 1, 0.0);
    aroR.position.set(0.7-1, 1.01, 0.0);
    aroR1.position.set(0.7 - 1, 0.99, 0.0);
    PIEchangeInputSlider(cellNoL, 1);
    PIEchangeInputCommand(batRevL, batRevL, batR);
    //PIEchangeInputCommand(StartExpL, StartQuizL, StartQuiz);
    onGoing = 0;
    marks = 0;

}
var one = 0;
var one2 = 0;
function updateExperimentElements(t, dt)
{
    if (Glo == !1) {
        totalVoltage = 8 +  (cellNo -1 )* 4;
        SwitchText.style.visibility = "hidden";
        SwitchText1.style.visibility = "visible";
       
        if (myflag == 1 ) {
            totalVoltage = -1 * Math.abs(totalVoltage);
        }
        
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
                needle2.rotateZ(-Math.PI / 18 * totalCurrent);
                needle12.rotateZ(-Math.PI / 18 * totalCurrent);
                needle.rotateZ(-Math.PI / 18 * totalCurrent);
                needle.position.set(2 + 0.011 * totalCurrent -1, 2.06 - 0.005 * totalCurrent, 0.35);
                needle1.rotateZ(-Math.PI / 18 * totalCurrent);
                needle1.position.set(2 - 0.011 * totalCurrent - 1, 1.91 + 0.0071 * totalCurrent, 0.35);
                if (totalCurrent == 2 || totalCurrent == 3) {
                    needle2.position.set(2 + 1.9 + 0.011 * totalCurrent, 2.06 - 1 + 0.002 * totalCurrent, 0.35);
                    needle12.position.set(2 + 1.9 - 0.016 * totalCurrent, 1.925 - 1 - 0.001 * totalCurrent, 0.35);
                }
                else if(totalCurrent == 4){
                    needle2.position.set(2 + 1.9 + 0.014 * totalCurrent, 2.06 - 1 + 0.001 * totalCurrent, 0.35);
                    needle12.position.set(2 + 1.9 - 0.013 * totalCurrent, 1.925 - 1 + 0.002 * totalCurrent, 0.35);
                }
                temp = 1;
            }

            dir.scale.set(1, 1, 1);
            aro.scale.set(1, 1, 1);
            aro1.scale.set(1, 1, 1);

            if (aro.position.x < 3.5 - 1 && c != 1) {
                aro.position.set(aro.position.x + 0.02 , aro.position.y, aro.position.z);
                aro1.position.set(aro1.position.x + 0.02 , aro1.position.y, aro1.position.z);
                dir.position.set(dir.position.x + 0.02 , dir.position.y, dir.position.z);
            }
            else if (aro.position.x >= 3.5 - 1 && f != 1) {

                aro.position.set(3.5 + 0.01 - 1, 1.8, 0);
                aro.rotateZ(Math.PI / 2);
                aro1.position.set(3.5 - 0.01 - 1, 1.8, 0);
                aro1.rotateZ(-Math.PI / 2);
                dir.position.set(3.5 - 1, 1.9, 0);
                dir.rotateZ(Math.PI / 2);
                f = 1;
            }
            else if (f == 1 && aro.position.y > 1 && u == 0) {
                aro.position.set(aro.position.x, aro.position.y - 0.02, aro.position.z);
                aro1.position.set(aro1.position.x, aro1.position.y - 0.02, aro1.position.z);
                dir.position.set(dir.position.x, dir.position.y - 0.02, dir.position.z);
            }
            else if (aro.position.y <= 1 && c != 1) {
                aro.position.set(3.3 - 1, 1 - 0.01, 0);
                aro.rotateZ(-Math.PI / 2);
                aro1.position.set(3.3 - 1, 1 + 0.01, 0);
                aro1.rotateZ(+Math.PI / 2);
                dir.position.set(3.4 - 1, 1, 0);
                dir.rotateZ(Math.PI / 2);
                c = 1;
            }
            else if (c == 1 && aro.position.x > 0.5 - 1) {
                aro.position.set(aro.position.x - 0.02 , aro.position.y, aro.position.z);
                aro1.position.set(aro1.position.x - 0.02 , aro1.position.y, aro1.position.z);
                dir.position.set(dir.position.x - 0.02 , dir.position.y, dir.position.z);
            }
            else if (aro.position.x <= 0.5 - 1 && u != 1) {
                aro.position.set(0.5 - 0.01 - 1, 1.2, 0);
                aro.rotateZ(-Math.PI / 2);
                aro1.position.set(0.5 + 0.01 - 1, 1.2, 0);
                aro1.rotateZ(+Math.PI / 2);
                dir.position.set(0.5 - 1, 1.1, 0);
                dir.rotateZ(Math.PI / 2);
                u = 1;
            }
            else if (u == 1) {
                aro.position.set(aro.position.x, aro.position.y + 0.02, aro.position.z);
                aro1.position.set(aro1.position.x, aro1.position.y + 0.02, aro1.position.z);
                dir.position.set(dir.position.x, dir.position.y + 0.02, dir.position.z);
                if (aro.position.y >= 2 - 0.25) {
                    dir.position.set(0.6 - 1, 2, 0.0);
                    dir.rotateZ(Math.PI / 2)
                    aro.position.set(0.7 - 1, 2.01, 0.0);
                    aro.rotateZ(-Math.PI / 2)
                    aro1.position.set(0.7 - 1, 1.99, 0.0);
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
                needle2.rotateZ(-Math.PI / 18 * totalCurrent);
                needle12.rotateZ(-Math.PI / 18 * totalCurrent);

                needle.rotateZ(-Math.PI / 18 * totalCurrent);
                needle1.rotateZ(-Math.PI / 18 * totalCurrent);

                if (totalCurrent == -2) {
                    needle.position.set(2 + 0.015 * totalCurrent - 1, 2.06 - 0.005 * totalCurrent, 0.35);
                    needle1.position.set(2 - 0.015 * totalCurrent - 1, 1.91 + 0.00 * totalCurrent, 0.35);
                    needle2.position.set(2 + 1.9 + 0.011 * totalCurrent, 2.06 - 1 + 0.002 * totalCurrent, 0.35);
                    needle12.position.set(2 + 1.9 - 0.016 * totalCurrent, 1.91 - 1 - 0.002 * totalCurrent, 0.35);
                    type = 1;
                }
                else if (totalCurrent == -3) {
                    needle.position.set(2 + 0.015 * totalCurrent - 1, 2.06 - 0.005 * totalCurrent, 0.35);
                    needle1.position.set(2 - 0.014 * totalCurrent - 1, 1.91 - 0.002 * totalCurrent, 0.35);
                    needle2.position.set(2 + 1.9 + 0.011 * totalCurrent, 2.06 - 1 + 0.002 * totalCurrent, 0.35);
                    needle12.position.set(2 + 1.9 - 0.014 * totalCurrent, 1.91 - 1 - 0.004 * totalCurrent, 0.35);
                    type = 1;
                }
                else if(totalCurrent == -4){
                    needle.position.set(2 + 0.010 * totalCurrent - 1, 2.06 + 0.001 * totalCurrent, 0.35);
                    needle1.position.set(2 - 0.015 * totalCurrent - 1, 1.91 - 0.004 * totalCurrent, 0.35);
                    needle2.position.set(2 + 1.9 + 0.011 * totalCurrent, 2.06 - 1 + 0.002 * totalCurrent, 0.35);
                    needle12.position.set(2 + 1.9 - 0.014 * totalCurrent, 1.91 - 1 - 0.005 * totalCurrent, 0.35);
                    type = 2;
                }
                else {
                    console.log("Strange");
                }
                flag = 1;
            }

            dirR.scale.set(1, 1, 1);
            aroR.scale.set(1, 1, 1);
            aroR1.scale.set(1, 1, 1);

            if (aroR1.position.x < 3.5 - 1 && c1 != 1) {
                aroR.position.set(aroR.position.x + 0.02, aroR.position.y, aroR.position.z);
                aroR1.position.set(aroR1.position.x + 0.02, aroR1.position.y, aroR1.position.z);
                dirR.position.set(dirR.position.x + 0.02, dirR.position.y, dirR.position.z);
            }
            else if (aroR1.position.x >= 3.5 - 1 && f1 != 1) {

                aroR.position.set(3.5 - 0.01 - 1, 1.2, 0);
                aroR.rotateZ(Math.PI / 2);
                aroR1.position.set(3.5 + 0.01 - 1, 1.2, 0);
                aroR1.rotateZ(Math.PI / 2);
                dirR.position.set(3.5 - 1, 1.1, 0);
                dirR.rotateZ(Math.PI / 2);
                f1 = 1;
            }
            else if (f1 == 1 && aroR1.position.y < 2 && u1 == 0) {
                aroR.position.set(aroR.position.x, aroR.position.y + 0.02, aroR.position.z);
                aroR1.position.set(aroR1.position.x, aroR1.position.y + 0.02, aroR1.position.z);
                dirR.position.set(dirR.position.x, dirR.position.y + 0.02, dirR.position.z);
            }
            else if (aroR1.position.y >= 2 && c1 != 1) {
                aroR.position.set(3.3 - 1, 2 - 0.01, 0);
                aroR.rotateZ(-Math.PI / 2);
                aroR1.position.set(3.3 - 1, 2 + 0.01, 0);
                aroR1.rotateZ(+Math.PI / 2);
                dirR.position.set(3.4 - 1, 2, 0);
                dirR.rotateZ(Math.PI / 2);
                c1 = 1;
            }
            else if (c1 == 1 && aroR1.position.x > 0.5 - 1) {
                aroR.position.set(aroR.position.x - 0.02, aroR.position.y, aroR.position.z);
                aroR1.position.set(aroR1.position.x - 0.02, aroR1.position.y, aroR1.position.z);
                dirR.position.set(dirR.position.x - 0.02, dirR.position.y, dirR.position.z);
            }
            else if (aroR1.position.x <= 0.5 - 1 && u1 != 1) {
                aroR.position.set(0.5 + 0.01 - 1, 1.8, 0);
                aroR.rotateZ(-Math.PI / 2);
                aroR1.position.set(0.5 - 0.01 - 1, 1.8, 0);
                aroR1.rotateZ(+Math.PI / 2);
                dirR.position.set(0.5 - 1, 1.9, 0);
                dirR.rotateZ(Math.PI / 2);
                u1 = 1;
            }
            else if (u1 == 1) {
                aroR.position.set(aroR.position.x, aroR.position.y - 0.02, aroR.position.z);
                aroR1.position.set(aroR1.position.x, aroR1.position.y - 0.02, aroR1.position.z);
                dirR.position.set(dirR.position.x, dirR.position.y - 0.02, dirR.position.z);
                if (aroR.position.y <= 1) {
                    dirR.position.set(0.6 - 1, 1, 0.0);
                    dirR.rotateZ(Math.PI / 2);
                    aroR.position.set(0.7 - 1, 1.01, 0.0);
                    aroR.rotateZ(-Math.PI / 2);
                    aroR1.position.set(0.7 - 1, 0.99, 0.0);
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