//DOM elements
var startBtn = document.getElementById("start");
var questionBox = document.querySelector("#Qs");
var nextBtn = document.querySelector("#next");
var answerBtnA = document.querySelector("#A");
var answerBtnB = document.querySelector("#B");
var answerBtnC = document.querySelector("#C");
var answerBtnD = document.querySelector("#D");


//Event Listeners
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", next);
answerBtnA.addEventListener("click", answerA);
answerBtnB.addEventListener("click", answerB);
answerBtnC.addEventListener("click", answerC);
answerBtnD.addEventListener("click", answerD);


function startQuiz() {
    console.log("start")
    next();
}

function next() {
    console.log("next")
    updateQ()
    showA()
    showB()
    showC()
    showD()
}
var i = 0;

function updateQ() {
    const questionArray = ["Where in the HTML does the link to an external Javascript file belong?", "What is the Emmet Abbreviation to call the basic structure of an HTML document?", 
    "What is an API?", "Which of the following is not a Data Type in Javascript?"]; 
    text = questionArray[i];
    questionBox.innerHTML = text;
    if(i < questionArray.length -1) {
        i++;
    }
    else {
        i = 0;
    }
}
var A = 0;
function showA() {
    var answerArray = ["In the head section", "$", "Automated Program Information", "String"];
    text = answerArray[A];
    answerBtnA.innerHTML = text;
    if(A < answerArray.length -1) {
        A++;
    }
    else {
        A = 0;
    }
}

var B = 0;
function showB() {
    var answerArrayB = ["At the bottom of the body", "&&", "Antithetical Purpose Interaction", "Array"];
    text = answerArrayB[B];
    answerBtnB.innerHTML = text;
    if(B < answerArrayB.length -1) {
        B++;
    }
    else {
        B = 0;
    }
}
var C = 0;
function showC() {
    var answerArrayC = ["You cannot link to external javascript files", "<>", "Application Programming Interface", "Sentence",];
    text = answerArrayC[C];
    answerBtnC.innerHTML = text;
    if(C < answerArrayC.length -1) {
        C++;
    }
    else {
        C = 0;
    }
}
var D = 0;
function showD() {
    var answerArrayD = ["Anywhere you want to put it", "!", "Antimatter Pataphysical Ignorance", "Number"];
    text = answerArrayD[D];
    answerBtnD.innerHTML = text;
    if(D < answerArrayD.length -1) {
        D++;
    }
    else {
        D = 0;
    }
}

function answerA() {
    console.log("answerA")
    alert("false")
}
function answerB() {
    console.log("answerB")
    if(answerArrayC = "At the bottom of the body") 
        alert("correct")
    else
        alert("false")
}
function answerC() {
    console.log("answerC")
    if(answerArrayC = "Sentence") 
        alert("correct")
    else if(answerArrayC = "Application Programming Interface")
        alert("correct")
    else
        alert("false")}

function answerD() {
    console.log("answerD")
    if(answerArrayC = "!") 
        alert("correct")
    else
        alert("false")
}